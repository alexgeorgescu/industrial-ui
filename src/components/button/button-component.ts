import { IndBaseComponent } from "../base/base-component.js";

/**
 * IndustrialUI Button Component
 *
 * @element ind-button
 *
 * @attr {boolean} disabled - Whether the button is disabled
 * @attr {string} variant - Button style: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' (default: 'primary')
 *
 * @example <ind-button variant="success">I am a button</ind-button>
 */
export class IndButton extends IndBaseComponent {

    private _button: HTMLButtonElement | undefined;

    constructor() {
        super();
    }

    // Public API

    /* Check if the toggle switch is disabled or not */
    isDisabled(): boolean { return this._button ? this._button.disabled : false; }

    /* Enable or disable the toggle switch */
    setDisabled(value: boolean): void { this._button && (this._button.disabled = value); }

    static get observedAttributes() {
        return ['disabled', 'variant'];
    }

    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        if (name && (oldValue !== newValue)) {
            this.render();
        }
    }

    protected render(): void {
        this.cleanShadow();

        const disabled: boolean = this.hasAttr('disabled');

        const variant: string | 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' = this.getAttr('variant', 'primary');

        this.injectStyles(this.getStyles());

        this._button                = document.createElement('button');
        const slot: HTMLSlotElement = document.createElement('slot');

        this._button.className = `btn btn-${variant}`;
        this._button.appendChild(slot);
        this._button.disabled = disabled;

        this.shadow.appendChild(this._button);

        // Attach event listeners
        this.attachEventListeners();
    }

    private attachEventListeners(): void {
        if (this._button) {
            this._button.addEventListener('click', (e) => {
                this.dispatchEvent(new CustomEvent('button-click-event', {
                    detail: {originalEvent: e},
                    bubbles: true,
                    composed: true
                }));
            });
        }
    }

    private getStyles(): string {
        return `
      .btn {
        display: flex;
        border: none;
        cursor: pointer;
        font-family: var(--font-sans);
        font-size: var(--font-size-base);
        font-weight: var(--font-medium);
        transition: all 0.2s ease;
        align-items: center;
        padding: 0.5rem 1rem;
      }
      
      .btn:focus {
        outline: 0.125rem solid var(--outline-color);
        outline-offset: 0.125rem;
      }

      .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .btn-primary {
        background-color: var(--primary-color);
        color: var(--base-color); 
      }
      
      .btn-primary:hover {
        background-color: var(--primary-hover-color);
      }
      
      .btn-secondary {
        background-color: var(--secondary-color);
        color: var(--base-reverse-color);
      }
      
      .btn-secondary:hover {
        background-color: var(--secondary-hover-color);
      }
      
      .btn-success {
        background-color: var(--success-color);
        color: var(--base-color); 
      }
      
      .btn-success:hover {
        background-color: var(--success-hover-color);
      }
      
      .btn-info {
        background-color: var(--info-color);
        color: var(--base-color);
      }
      
      .btn-info:hover {
        background-color: var(--info-hover-color);
      }
      
      .btn-warn {
        background-color: var(--warn-color);
        color: var(--base-reverse-color);
      }
      
      .btn-warn:hover {
        background-color: var(--warn-hover-color);
      }
      
      .btn-danger {
        background-color: var(--danger-color);
        color: var(--base-color);
      }
      
      .btn-danger:hover {
        background-color: var(--danger-hover-color);
      }
    `
    }
}

customElements.define('ind-button', IndButton);
