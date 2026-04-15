import { IndBaseComponent } from "../base/base-component.js";
import { IndMenu }          from "../menu/menu-component.js";

/**
 * IndustrialUI Menubar Component
 *
 * @element ind-menubar
 *
 * @example <ind-menubar>...</ind-menubar>
 */
export class IndMenubar extends IndBaseComponent {

    /* The underlying native element */
    private _menubar: HTMLDivElement | undefined;

    constructor() {
        super();
    }

    protected render(): void {
        this.cleanShadow();

        this.injectStyles(this.getStyles());

        this._menubar           = document.createElement('div');
        this._menubar.className = 'ind-menubar';

        const menuButtons: HTMLSpanElement = document.createElement('span')
        menuButtons.className              = 'ind-menubar-buttons';

        const themeButton: HTMLButtonElement = document.createElement('button');
        themeButton.innerHTML                = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--base-text-dim-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4"/>
                <line x1="12" y1="2" x2="12" y2="4"/>
                <line x1="17" y1="7" x2="19" y2="5"/>
                <line x1="20" y1="12" x2="22" y2="12"/>
                <line x1="17" y1="17" x2="19" y2="19"/>
                <line x1="12" y1="20" x2="12" y2="22"/>
                <line x1="7" y1="17" x2="5" y2="19"/>
                <line x1="2" y1="12" x2="4" y2="12"/>
                <line x1="7" y1="7" x2="5" y2="5"/>
            </svg>
        `;
        themeButton.addEventListener('click', () => {
            const menu: IndMenu = new IndMenu('1.5rem', '-11.5rem', 'Select theme');
            menu.items = [
                {label: 'IOT Dark Pink', action: () => document.documentElement.setAttribute('data-theme', 'iot-dark-pink') },
                {label: 'IOT Dark Green', action: () => document.documentElement.setAttribute('data-theme', 'iot-dark-green') },
                {label: 'IOT Light Tomato', action: () => document.documentElement.setAttribute('data-theme', 'iot-light-tomato') }
            ];
            this._menubar?.appendChild(menu);
        });

        menuButtons.appendChild(themeButton);
        this._menubar.appendChild(menuButtons);

        this.shadow.appendChild(this._menubar);
    }

    private getStyles(): string {
        return `
        :host { display: flex; flex-grow: 1; }
        .ind-menubar {
            display: flex;
            flex-grow: 1;
            background: var(--base-surface-color);
            align-items: center;
            padding: 0.5rem;
            border-bottom: 1px solid var(--base-border-color);
        }
        .ind-menubar-buttons { display: flex; margin-left: auto; }
        .ind-menubar-buttons button {
            display: flex;
            width: 2.5rem;
            height: 2.5rem;
            align-items: center;
            justify-content: center;
            margin-left: auto;
            background: none;
            border: none;
            border-radius: var(--base-border-radius);
            cursor: pointer;
            flex-shrink: 0;
        }
        .ind-menubar-buttons button:focus { outline: 0.125rem solid var(--base-outline-color); outline-offset: 0.125rem; }
        .ind-menubar-buttons button:hover { background: var(--base-surface-contrast-color); }
        .ind-menubar-buttons button:hover > svg { stroke: var(--base-text-color); }
        `
    }
}

customElements.define('ind-menubar', IndMenubar);
