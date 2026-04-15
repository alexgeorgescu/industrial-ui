import { IndBaseComponent } from "../base/base-component.js";
import { getIconByName }    from "../../icons/index.js";

/**
 * IndustrialUI Button Component
 *
 * @element ind-button
 *
 * @attr {boolean} disabled - Whether the button is disabled
 * @attr {string} icon - The icon to display on the button (from the IndustrialUI icon set)
 * @attr {string} variant - Button style: 'primary' | 'secondary' | 'success' | 'icon' | 'info' | 'warn' | 'danger' (default: 'primary')
 *
 * @example <ind-button variant="success">I am a button</ind-button>
 */
export class IndButton extends IndBaseComponent {

    /* The underlying native element */
    private _button: HTMLButtonElement | undefined;
    /* Whether the button is disabled or not */
    private _isDisabled: boolean     = false;
    /* Specify the icon name */
    private _iconName: string | null = null;
    /* Specify the variant: primary, secondary, etc. */
    private _variant: string         = 'primary';

    constructor() {
        super();
    }

    /* Public API */

    /* Check if the button is disabled or not */
    isDisabled(): boolean { return this._button ? this._button.disabled : false; }

    /* Enable or disable the button */
    setDisabled(value: boolean): void { this._button && (this._button.disabled = value); }

    static get observedAttributes() {
        return ['disabled', 'icon', 'variant'];
    }

    /* Read component attributes and update the internal state accordingly */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        if (oldValue === newValue) return;

        switch (name) {
            case 'disabled':
                this._isDisabled = 'true' == newValue;
                break;
            case 'icon':
                this._iconName = newValue;
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

        this._button = document.createElement('button');

        this._button.className = `btn btn-${this._variant}`;

        const iconSpan: HTMLSpanElement | null = this.extractIcon(this._iconName || '');
        if (iconSpan) {
            this._button.appendChild(iconSpan);
        }

        const slot: HTMLSlotElement = document.createElement('slot');
        this._button.appendChild(slot);

        this._button.disabled = this._isDisabled;

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

    private extractIcon(iconName: string): HTMLSpanElement | null {
        const iconSvg = this._variant === 'icon'
            ? getIconByName(iconName, "lg", 2)
            : getIconByName(iconName, "md", 2);
        if (iconSvg) {
            const iconSpan: HTMLSpanElement = document.createElement('span');
            iconSpan.className              = 'btn-icon';
            iconSpan.innerHTML              = iconSvg;
            return iconSpan;
        }
        return null;
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
            gap: 0.25rem;
        }
        .btn:focus              { outline: 0.125rem solid var(--base-outline-color); outline-offset: 0.125rem; }
        .btn:disabled           { opacity: 0.6; cursor: not-allowed; }
        .btn-primary            { background-color: var(--base-primary-color); color: var(--base-button-text-color); }
        .btn-primary:hover      { background-color: var(--base-primary-hover-color); }
        .btn-secondary          { background-color: var(--base-secondary-color); color: var(--base-button-text-color); }
        .btn-secondary:hover    { background-color: var(--base-secondary-hover-color); }
        .btn-success            { background-color: var(--base-success-color); color: var(--base-button-text-color); }
        .btn-success:hover      { background-color: var(--base-success-hover-color); }
        .btn-icon               { background-color: transparent; padding: 0.125rem; }
        .btn-info               { background-color: var(--base-info-color); color: var(--base-button-text-color); }
        .btn-info:hover         { background-color: var(--base-info-hover-color); }
        .btn-warn               { background-color: var(--base-warn-color); color: var(--base-button-text-color); }
        .btn-warn:hover         { background-color: var(--base-warn-hover-color); }
        .btn-danger             { background-color: var(--base-danger-color); color: var(--base-button-text-color); }
        .btn-danger:hover       { background-color: var(--base-danger-hover-color); }
        .btn-icon               { display: flex; justify-content: center; align-items: center; margin: 0 0.25rem 0 -0.25rem; }
        .btn-icon.btn-icon      { margin: 0; }
        `
    }
}

customElements.define('ind-button', IndButton);
