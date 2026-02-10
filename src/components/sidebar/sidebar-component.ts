import { IndBaseComponent } from "../base/base-component.js";
import { IndSidebarItem }   from "../../models/sidebar-item.js";

/**
 * IndustrialUI Sidebar Component
 *
 * @element ind-sidebar
 *
 * @example <ind-sidebar>...</ind-sidebar>
 */
export class IndSidebar extends IndBaseComponent {

    _items: IndSidebarItem[] = [];

    constructor() {
        super();
        this.attachEventListeners();
    }

    static get observedAttributes() {
        return ['items'];
    }

    protected render(): void {
        this._items = this.getAttrArray<IndSidebarItem>('items');

        this.injectStyles(this.getStyles());

        const sidebar: HTMLDivElement = document.createElement('div');
        sidebar.className             = `sidebar`;

        const ul: HTMLUListElement = document.createElement('ul');
        this._items.map(it => {
            const li: HTMLLIElement    = document.createElement('li');
            const a: HTMLAnchorElement = document.createElement('a');
            a.href                     = it.link;
            a.innerText                = it.label;
            li.appendChild(a);
            ul.appendChild(li);
        });

        sidebar.appendChild(ul);

        this.shadow.appendChild(sidebar);
    }

    private attachEventListeners(): void {
        this.addEventListener('click', (e) => {
            console.log('Sidebar clicked', e);
        });
    }

    private getStyles(): string {
        return `
      .sidebar {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        height: 100%;
        padding: 0;
        color: var(--base-text-color);
        background: var(--base-color);
        align-items: center;
        border-radius: 0rem;
        border-right: 1px solid var(--border-color);
      }
      
      .sidebar ul {
        height: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
      }
      
      .sidebar a {
        display: block;
        color: var(--base-text-color);
        text-decoration: none;
        padding: 0.5rem 1rem;
      }
      
      .sidebar a:hover {
        background: var(--secondary-color);
      }
      `
    }
}

customElements.define('ind-sidebar', IndSidebar);
