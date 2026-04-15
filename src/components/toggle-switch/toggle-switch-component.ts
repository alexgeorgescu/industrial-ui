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

    /* The underlying native element */
    private _toggle: HTMLInputElement | undefined;
    /* Whether the switch is checked or not */
    private _isChecked: boolean   = false;
    /* Whether the switch is disabled or not */
    private _isDisabled: boolean  = false;
    /* Specify the label */
    private _label: string | null = null;
    /* Specify the variant: primary, secondary, etc. */
    private _variant: string      = 'primary';

    constructor() {
        super();
    }

    /* Public API */

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

    /* Read component attributes and update the internal state accordingly */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        if (oldValue === newValue) return;

        switch (name) {
            case 'checked':
                this._isChecked = 'true' == newValue;
                break;
            case 'disabled':
                this._isDisabled = 'true' == newValue;
                break;
            case 'label':
                this._label = newValue;
                break;
            case 'variant':
                this._variant = newValue || 'primary';
                break;
        }

        this.render();
    }

    protected render(): void {
        this.cleanShadow();

        this.injectStyles(this.getStyles());

        this._toggle          = document.createElement('input');
        this._toggle.type     = 'checkbox';
        this._toggle.checked  = this._isChecked;
        this._toggle.disabled = this._isDisabled;

        const slider: HTMLSpanElement = document.createElement('span');
        slider.className              = `slider  ${this._variant}`;

        const switchElement: HTMLLabelElement = document.createElement('label');
        switchElement.className               = 'switch';
        switchElement.appendChild(this._toggle);
        switchElement.appendChild(slider);

        const container: HTMLDivElement = document.createElement('div');
        container.className             = 'container';
        container.appendChild(switchElement);

        // Set the toggle switch label if any
        if (this._label) {
            const text: HTMLSpanElement = document.createElement('span');
            text.className              = 'label';
            text.textContent            = this._label;
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
        :host           { display: inline-block; font-family: var(--font-sans); }
        .container      { display: flex; align-items: center; gap: 0.5rem; }
        .switch         { display: inline-block; position: relative; width: 3rem; height: 1.625rem; cursor: pointer; }
        .switch input   { opacity: 0; width: 0; height: 0;}
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--base-text-dim-color);
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
            background-color: var(--base-text-reverse-color);
            transition: 0.3s;
            border-radius: 50%;
        }
        input:checked +.slider.primary      { background-color: var(--base-primary-color); }
        input:checked +.slider.secondary    { background-color: var(--base-secondary-color); }
        input:checked +.slider.success      { background-color: var(--base-success-color); }
        input:checked +.slider.info         { background-color: var(--base-info-color); }
        input:checked +.slider.warn         { background-color: var(--base-warn-color); }
        input:checked +.slider.danger       { background-color: var(--base-danger-color); }
        input:focus + .slider               { outline: 0.125rem solid var(--base-outline-color); outline-offset: 0.125rem; }
        input:checked + .slider:before      { transform: translateX(1.375rem); }
        input:disabled + .slider            { opacity: 0.5; cursor: not-allowed; }
        .switch:has(input:disabled)         { cursor: not-allowed; }
        .label                              { font-size: var(--font-size-sm); color: var(--base-text-color); user-select: none; }
        :host([disabled]) .label            { color: var(--base-text-muted-color); }
        `
    }
}

customElements.define('ind-toggle-switch', IndToggleSwitch);
