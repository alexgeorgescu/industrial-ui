import { IndBaseComponent } from "../base/base-component.js";

export const XMLNS: string = "http://www.w3.org/2000/svg";

/**
 * IndustrialUI Knob Component
 *
 * @element ind-knob
 *
 * @example <ind-knob></ind-knob>
 */
export class IndKnob extends IndBaseComponent {

    private _knob: Element | undefined;
    private _isDisabled: boolean = false;
    private _isDragging: boolean = false;

    private _value: number     = 0;    // 0 to 1
    private _min: number       = 0;
    private _max: number       = 100;
    private _showGrid: boolean = false;
    private _symbol: string    = '%';
    private _size: number      = 140;

    constructor() {
        super();
    }

    // Public API

    /* Check if the knob is disabled or not */
    isDisabled(): boolean { return this._isDisabled; }

    /* Enable or disable the knob */
    setDisabled(value: boolean): void { this._isDisabled = value; }

    static get observedAttributes() {
        return ['disabled', 'grid', 'min', 'max', 'value', 'symbol', 'size'];
    }

    /* Read component attributes and update the internal state accordingly */
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (oldValue === newValue) return;

        switch (name) {
            case 'disabled':
                this._isDisabled = 'true' == newValue;
                break;
            case 'grid':
                this._showGrid = 'true' == newValue;
                break;
            case 'min':
                this._min = parseFloat(newValue) || 0;
                break;
            case 'max':
                this._max = parseFloat(newValue) || 100;
                break;
            case 'size':
                this._size = parseFloat(newValue) || 140;
                break;
            case 'symbol':
                this._symbol = newValue || '%';
                break;
            case 'value':
                this._value = this.normalizeInputValue(parseFloat(newValue) || 0);
                break;
        }

        this.render();
    }

    disconnectedCallback() {
        // Remove the pointer listeners
        if (this._knob) {
            this._knob.removeEventListener('pointerdown', this.onPointerDown as EventListener);
            window.removeEventListener('pointerup', this.onPointerUp as EventListener);
            window.removeEventListener('pointermove', this.onPointerMove as EventListener);
        }
    }

    protected render(): void {
        this.cleanShadow();

        this.injectStyles(this.getStyles());

        // Create a wrapper DIV element
        const parent: HTMLDivElement = document.createElement('div');
        parent.style.width           = `${this._size}px`;
        parent.style.height          = `${this._size}px`;

        // Create the knob as an SVG to handle scaling better
        this._knob              = document.createElementNS(XMLNS, "svg");
        const dimension: number = 140;
        this._knob.setAttribute("viewBox", "0 0 " + dimension + " " + dimension);
        this._knob.setAttribute("width", String(dimension));
        this._knob.setAttribute("height", String(dimension));

        if (this._isDisabled) {
            this._knob.setAttribute('class', 'disabled');
        }

        // Handle position
        const size: number        = 100;
        const center: number      = size / 2;
        const trackRadius: number = center - 5;

        // In atan2 screen coords, the start (value=0) is at 135° (7h30 o'clock).
        // The arc sweeps 270° clockwise: angleDeg = 135 + value * 270.
        const angleDeg: number = 135 + this._value * 270;
        const angleRad: number = angleDeg * (Math.PI / 180);
        const cx: number       = center + trackRadius * Math.cos(angleRad);
        const cy: number       = center + trackRadius * Math.sin(angleRad);

        // The knob dial
        const dial = document.createElementNS(XMLNS, "path");
        dial.setAttribute('d', 'M 78.28 78.28 A 45 45 0 1 0 21.72 78.28');
        dial.setAttribute('transform', 'translate(20 27)');
        dial.setAttribute('class', 'dial');
        this._knob.appendChild(dial);

        const label = document.createElementNS(XMLNS, "text");
        label.setAttribute('x', '71');
        label.setAttribute('y', '76');
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('font-size', '16px');
        // De-normalize value from 0-100 to min-max
        const value = Math.round(this._value * (this._max - this._min) + this._min);
        const textNode = document.createTextNode(`${value}${this._symbol}`);
        label.appendChild(textNode);
        this._knob.appendChild(label);

        // Draw a grid of reference values
        if (this._showGrid) {
            // Draw a line at 12 o'clock for reference
            this._knob.appendChild(this.createLine(70, 5, 70, 15));
            // Draw a line at 1h30 o'clock for reference
            this._knob.appendChild(this.createLine(70, 5, 70, 15, 49, 21, 45));
            // Draw a line at 3 o'clock for reference
            this._knob.appendChild(this.createLine(70, 5, 70, 15, 65, 65, 90));
            // Draw a line at 4h30 o'clock for reference
            this._knob.appendChild(this.createLine(70, 5, 70, 15, 38, 107, -45));
            // Draw a line at 7h30 o'clock for reference
            this._knob.appendChild(this.createLine(70, 5, 70, 15, -38, 107, 45));
            // Draw a line at 9 o'clock for reference
            this._knob.appendChild(this.createLine(70, 5, 70, 15, -65, 65, -90));
            // Draw a line at 10h30 o'clock for reference
            this._knob.appendChild(this.createLine(70, 5, 70, 15, -49, 21, -45));
        }

        // The knob pointer
        const pointer = document.createElementNS(XMLNS, "circle");
        pointer.setAttribute('cx', `${cx}`);
        pointer.setAttribute('cy', `${cy}`);
        pointer.setAttribute('r', '10');
        pointer.setAttribute('transform', 'translate(20 20)');
        pointer.setAttribute('class', 'pointer');
        this._knob.appendChild(pointer);

        parent.appendChild(this._knob);
        this.shadow.appendChild(parent);

        // Attach event listeners
        this.attachEventListeners();
    }

    private normalizeInputValue(value: number): number {
        if (this._min == this._max) {
            return this._min;
        }
        const normalized: number = ((value - this._min) / (this._max - this._min));
        return Math.max(0.0, Math.min(1.0, normalized)); // clamp to [0, 1]
    }

    /**
     * Draw a line at the provided coordinates.
     *
     * @param x1 Start X coordinate
     * @param y1 Start Y coordinate
     * @param x2 End X coordinate
     * @param y2 End Y coordinate
     * @param tx Translation X coordinate
     * @param ty Translation Y coordinate
     * @param ang Rotation angle
     */
    private createLine(x1: number, y1: number, x2: number, y2: number, tx: number = 0, ty: number = 0, ang: number = 0): Element {
        const line = document.createElementNS(XMLNS, "line");
        line.setAttribute('x1', String(x1));
        line.setAttribute('y1', String(y1));
        line.setAttribute('x2', String(x2));
        line.setAttribute('y2', String(y2));
        line.setAttribute('transform', `translate(${tx} ${ty}) rotate(${ang}, ${x1}, ${y1})`);
        line.setAttribute('class', 'line');
        return line;
    }

    private onPointerDown = (e: Event) => {
        const evt = e as PointerEvent;
        evt.preventDefault();
        (evt.target as HTMLElement).setPointerCapture?.(evt.pointerId);
        this._isDragging = true;
        this.updateValueFromPointer(evt);
    };

    private onPointerMove = (e: Event) => {
        if (!this._isDragging || this._isDisabled) return;
        this.updateValueFromPointer(e as PointerEvent);
        this.render();
    };

    private onPointerUp = () => {
        this._isDragging = false;
    };

    private updateValueFromPointer(e: PointerEvent) {
        if (this._knob) {
            const rect       = this._knob.getBoundingClientRect();
            const cx: number = rect.left + rect.width / 2;
            const cy: number = rect.top + rect.height / 2;
            const dx: number = e.clientX - cx;
            const dy: number = e.clientY - cy;

            // Screen coords
            let angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);

            // Arc spans 270°: from 7h30 (135° in atan2) clockwise through 5h30
            // Dead zone is the 90° gap at the bottom: from 5h30 to 7h30 o'clock.

            // Shift so that the arc start (135°) maps to 0°:
            let adjusted = angleDeg - 135;
            if (adjusted < 0) adjusted += 360;

            // Clamp: if in the dead zone, snap to the nearest end (0 or 270)
            if (adjusted > 270) {
                adjusted = adjusted < 315 ? 270 : 0;
            }

            this._value = adjusted / 270;
        }
    }

    private attachEventListeners(): void {
        // Attach the pointer listeners to handle the user interaction with the knob
        if (this._knob) {
            this._knob.addEventListener('pointerdown', this.onPointerDown as EventListener);
            window.addEventListener('pointerup', this.onPointerUp as EventListener);
            window.addEventListener('pointermove', this.onPointerMove as EventListener);
        }
    }

    private getStyles(): string {
        return `
      :host {
        display: inline-block;
        touch-action: none;
        cursor: pointer;
      }

      svg {
        width: 100%;
        height: 100%;
        overflow: visible;
      }

      svg.disabled {
        cursor: not-allowed;
      }
      
      svg.disabled .dial {
        stroke: var(--secondary-reverse-color);
      }

      .dial {
        fill: none;
        stroke: var(--primary-color);
        stroke-width: 10;
      }

      .line {
        fill: none;
        stroke: var(--primary-color);
        stroke-width: 3;
      }

      .pointer {
        fill: var(--base-color);
        stroke: var(--primary-color);
        stroke-width: 2;
        filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
      }
    `
    }
}

customElements.define('ind-knob', IndKnob);
