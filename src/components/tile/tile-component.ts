import { IndBaseComponent } from "../base/base-component.js";
import { getIconByName }    from "../../icons/index.js";

/**
 * IndustrialUI Tile Component
 *
 * @element ind-tile
 *
 * @attr {boolean} active - Whether the tile is active
 * @attr {boolean} disabled - Whether the tile is disabled
 * @attr {string} icon - The icon to display on the tile (from the IndustrialUI icon set)
 *
 * @example <ind-tile icon="bulb">Lights</ind-tile>
 */
export class IndTile extends IndBaseComponent {

    /* The underlying native element */
    private _tile: HTMLButtonElement | undefined;
    /* Flag to know if the tile is active or not */
    private _isActive: boolean       = false;
    /* Whether the tile is disabled or not */
    private _isDisabled: boolean     = false;
    /* Specify the icon to use for this tile */
    private _iconName: string | null = null;

    constructor() {
        super();
    }

    /* Public API */

    /* Check if the tile is disabled or not */
    isDisabled(): boolean { return this._tile ? this._tile.disabled : false; }

    /* Enable or disable the tile */
    setDisabled(value: boolean): void { this._tile && (this._tile.disabled = value); }

    static get observedAttributes() {
        return ['active', 'disabled', 'icon'];
    }

    /* Read component attributes and update the internal state accordingly */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        if (oldValue === newValue) return;

        switch (name) {
            case 'active':
                this._isActive = 'true' == newValue;
                break;
            case 'disabled':
                this._isDisabled = 'true' == newValue;
                break;
            case 'icon':
                this._iconName = newValue;
                break;
        }

        this.render();
    }

    protected render(): void {
        this.cleanShadow();

        this.injectStyles(this.getStyles());

        this._tile = document.createElement('button');

        this._tile.className = this._isActive ? 'tile active' : 'tile';

        const iconDiv: HTMLDivElement | null = this.extractIcon(this._iconName || '');
        if (iconDiv) {
            this._tile.appendChild(iconDiv);
        }

        const slot: HTMLSlotElement = document.createElement('slot');
        this._tile.appendChild(slot);

        this._tile.disabled = this._isDisabled;

        this.shadow.appendChild(this._tile);

        // Attach event listeners
        this.attachEventListeners();
    }

    private attachEventListeners(): void {
        if (this._tile) {
            this._tile.addEventListener('click', (e) => {
                this._isActive = !this._isActive;
                this.render();
                this.dispatchEvent(new CustomEvent('tile-click-event', {
                    detail: {originalEvent: e},
                    bubbles: true,
                    composed: true
                }));
            });
        }
    }

    private extractIcon(iconName: string): HTMLDivElement | null {
        const iconSvg = this._isActive
            ? getIconByName(iconName, "xl", 1, 'var(--base-text-color)', 'var(--base-text-color)')
            : getIconByName(iconName, "xl", 1, 'var(--base-primary-color)', 'var(--base-primary-hover-color)');
        if (iconSvg) {
            const iconSpan: HTMLDivElement = document.createElement('div');
            iconSpan.className             = 'tile-icon';
            iconSpan.innerHTML             = iconSvg;
            return iconSpan;
        }
        return null;
    }

    private getStyles(): string {
        return `
        .tile {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 6rem;
            height: 7rem;
            border: none;
            border-radius: var(--base-border-radius);
            cursor: pointer;
            font-family: var(--font-sans);
            font-size: var(--font-size-base);
            font-weight: var(--font-medium);
            color: var(--base-text-color);
            background: var(--base-background-gradient);
            transition: all 0.2s ease;
            align-items: center;
            justify-content: center;
            box-shadow: var(--base-shadow);
        }
        .tile:focus           { outline: 0.125rem solid var(--base-outline-color); outline-offset: 0.125rem; }
        .tile:hover           { background: var(--base-background-hover-gradient); }
        .tile.active          { background: var(--base-background-active-gradient); }
        .tile.active:hover    { background: var(--base-background-hover-gradient); }
        .tile:disabled        { opacity: 0.6; cursor: not-allowed; }
        .tile-icon            { display: flex; justify-content: center; align-items: center; margin: 0; }
        `
    }
}

customElements.define('ind-tile', IndTile);
