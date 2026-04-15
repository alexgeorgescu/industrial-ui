import { IndBaseComponent } from "../base/base-component.js";
import { IndMenuItem }      from "../../models/menu-item.js";

/**
 * IndustrialUI Menu Component
 *
 * @element ind-menu
 *
 * @example <ind-menu></ind-menu>
 */
export class IndMenu extends IndBaseComponent {

    /* The underlying native element */
    private _menu: HTMLDivElement | undefined;
    /* The menu items */
    private _items: IndMenuItem[] = [];
    /* The title of the menu */
    private _title: string | null = null;
    /* Flag to set the menu visible or not */
    private _isOpen: boolean = false;
    /* The offset used to display the context menu */
    private _topOffset: string | undefined;
    private _leftOffset: string | undefined;

    constructor(top: string, left: string, title: string) {
        super();
        this._topOffset  = top;
        this._leftOffset = left;
        this._title      = title;
        // Delay setting the flag so the menu is not closed instantly
        setTimeout(() => this._isOpen = true, 200);
    }

    /* Public API */
    set items(values: IndMenuItem[]) {
        this._items = values;
        this.render();
    }

    static get observedAttributes() {
        return ['title'];
    }

    /* Read component attributes and update the internal state accordingly */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        if (oldValue === newValue) return;

        switch (name) {
            case 'title':
                this._title = newValue;
                break;
        }

        this.render();
    }

    private onDocumentClick = (event: MouseEvent): void => {
        if (!this._isOpen) {
            return;
        }

        if (this._menu && !event.composedPath().includes(this._menu)) {
            this.destroyMenu();
        }
    };

    private onDocumentKeydown = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            this.destroyMenu();
        }
    };

    private destroyMenu(): void {
        this.ownerDocument.removeEventListener('click', this.onDocumentClick);
        this.ownerDocument.removeEventListener('keydown', this.onDocumentKeydown);
        this._isOpen = false;
        this.remove();
    }

    connectedCallback(): void {
        this.ownerDocument.addEventListener('click', this.onDocumentClick);
        this.ownerDocument.addEventListener('keydown', this.onDocumentKeydown);
        super.connectedCallback();
    }

    protected render(): void {
        this.cleanShadow();

        this.injectStyles(this.getStyles());

        this._menu           = document.createElement('div');
        this._menu.className = 'ind-menu-container';

        const contextMenu      = document.createElement('div');
        contextMenu.className  = 'ind-menu-context';
        contextMenu.style.top  = this._topOffset || '1.5rem';
        contextMenu.style.left = this._leftOffset || '0';

        if (this._title) {
            const menuTitle: HTMLDivElement = document.createElement('div');
            menuTitle.className             = 'ind-menu-title';
            menuTitle.innerText             = this._title;
            contextMenu.appendChild(menuTitle);
        }

        for (const item of this._items) {
            const menuItem: HTMLButtonElement = document.createElement('button');
            menuItem.className                = 'ind-menu-item';
            menuItem.textContent              = item.label ? item.label : '';
            menuItem.addEventListener('click', () => {
                item.action();
                this.destroyMenu();
            });

            contextMenu.appendChild(menuItem);
        }

        this._menu.appendChild(contextMenu);
        this.shadow.appendChild(this._menu);
    }

    private getStyles(): string {
        return `
        .ind-menu-container {
            display: flex;
            position: relative;
            width: 0;
        }
        .ind-menu-context {
            display: flex;
            flex-direction: column;
            min-width: 10rem;
            position: absolute;
            border: 1px solid var(--base-border-color);
            border-radius: var(--base-border-radius);
            background: var(--base-surface-color);
            box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
            padding: 0.5rem;
            z-index: 1000;
        }
        .ind-menu-title {
            font-size: var(--font-size-xs);
            font-family: monospace;
            font-weight: 500;
            letter-spacing: 0.125rem;
            text-transform: uppercase;
            color: var(--base-text-muted-color);
            padding: 0.5rem;
        }
        .ind-menu-item {
            display: block;
            width: 100%;
            text-align: left;
            font-size: var(--font-size-base);
            font-family: var(--font-sans);
            padding: 0.5rem;
            background: transparent;
            border: none;
            border-radius: var(--base-border-radius);
            color: var(--base-text-color);
            cursor: pointer;
        }
        .ind-menu-item:hover {
            background: var(--base-surface-contrast-color);
        }
        `;
    }
}

customElements.define('ind-menu', IndMenu);
