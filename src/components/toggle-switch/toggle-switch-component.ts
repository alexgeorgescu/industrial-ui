import { IndBaseComponent } from "../base/base-component.js";

/**
 * IndustrialUI ToggleSwitch Component
 *
 * @element ind-toggle-switch
 *
 * @attr {boolean} checked - Whether the toggle switch is checked
 * @attr {boolean} disabled - Whether the toggle switch is disabled
 * @attr {string} label - The label to display with the toggle switch
 * @attr {string} variant - Toggle switch style: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' (default: 'primary')
 *
 * @example <ind-toggle-switch variant="info"></ind-toggle-switch>
 */
export class IndToggleSwitch extends IndBaseComponent {

    private _toggle: HTMLInputElement | undefined;

    constructor() {
        super();
    }

    // Public API

    /* Check if the toggle switch is checked or not */
    isChecked(): boolean { return this._toggle ? this._toggle.checked : false; }

    /* Check if the toggle switch is disabled or not */
    isDisabled(): boolean { return this._toggle ? this._toggle.disabled : false; }

    /* Check or uncheck the toggle switch */
    setChecked(value: boolean): void { this._toggle && (this._toggle.checked = value); }

    /* Enable or disable the toggle switch */
    setDisabled(value: boolean): void { this._toggle && (this._toggle.disabled = value); }

    static get observedAttributes() {
        return ['checked', 'disabled', 'label', 'variant'];
    }

    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        if (name && (oldValue !== newValue)) {
            this.render();
        }
    }

    protected render(): void {
        this.cleanShadow();

        const checked: boolean  = this.getAttr('checked', 'false') === 'true';
        const disabled: boolean = this.hasAttr('disabled');
        const label: string     = this.getAttr('label', '');

        const variant: string | 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' = this.getAttr('variant', 'primary');

        this.injectStyles(this.getStyles());

        this._toggle          = document.createElement('input');
        this._toggle.type     = 'checkbox';
        this._toggle.checked  = checked;
        this._toggle.disabled = disabled;

        const slider: HTMLSpanElement = document.createElement('span');
        slider.className              = `slider  ${variant}`;

        const switchElement: HTMLLabelElement = document.createElement('label');
        switchElement.className               = 'switch';
        switchElement.appendChild(this._toggle);
        switchElement.appendChild(slider);

        const container: HTMLDivElement = document.createElement('div');
        container.className             = 'container';
        container.appendChild(switchElement);

        // Set the toggle switch label if any
        if (label) {
            const text: HTMLSpanElement = document.createElement('span');
            text.className              = 'label';
            text.textContent            = label;
            container.appendChild(text);
        }

        this.shadow.appendChild(container);

        // Attach event listeners
        this.attachEventListeners();
    }

    private attachEventListeners(): void {
        if (this._toggle) {
            this._toggle.addEventListener('change', (e) => {
                this.dispatchEvent(new CustomEvent('toggle-switch-toggled', {
                    detail: {originalEvent: e},
                    bubbles: true,
                    composed: true
                }));
            });
        }
    }

    private getStyles(): string {
        return `
      :host {
        display: inline-block;
        font-family: var(--font-sans);
      }

      .container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 48px;
        height: 26px;
        cursor: pointer;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--neutral-background-color);
        transition: 0.3s;
        border-radius: 2.5rem;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 1.25rem;
        width: 1.25rem;
        left: 0.188rem;
        bottom: 0.188rem;
        background-color: white;
        transition: 0.3s;
        border-radius: 50%;
      }

      input:checked +.slider.primary {
        background-color: var(--primary-color);
      }
      
      input:checked +.slider.secondary {
        background-color: var(--secondary-color);
      }
      
      .slider.secondary:before {
        background: var(--secondary-reverse-color);
      }
      
      input:checked +.slider.success {
        background-color: var(--success-color);
      }
      
      input:checked +.slider.info {
        background-color: var(--info-color);
      }
      
      input:checked +.slider.warn {
        background-color: var(--warn-color);
      }
      
      input:checked +.slider.danger {
        background-color: var(--danger-color);
      }

      input:focus + .slider {
        outline: 0.125rem solid var(--outline-color);
        outline-offset: 0.125rem;
      }

      input:checked + .slider:before {
        transform: translateX(1.375rem);
      }

      input:disabled + .slider {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .switch:has(input:disabled) {
        cursor: not-allowed;
      }

      .label {
        font-size: var(--font-size-sm);
        color: #333;
        user-select: none;
      }

      :host([disabled]) .label {
        color: #999;
      }
    `
    }
}

customElements.define('ind-toggle-switch', IndToggleSwitch);
