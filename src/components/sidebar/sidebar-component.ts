import { IndBaseComponent }  from "../base/base-component.js";
import { IndSidebarSection } from "../../models/sidebar-section.js";
import { getIconByName }     from "../../icons/index.js";

/**
 * IndustrialUI Sidebar Component
 *
 * @element ind-sidebar
 *
 * @example <ind-sidebar>...</ind-sidebar>
 */
export class IndSidebar extends IndBaseComponent {

    /* The underlying native element */
    private _sidebar: HTMLDivElement | undefined;
    /* The name of the application to display on top */
    private _name: string = '';
    /* The items of the sidebar */
    private _items: IndSidebarSection[] = [];

    constructor() {
        super();
    }

    /* Public API */

    // Public Setters
    set items(values: IndSidebarSection[]) {
        this._items = values;
        this.render();
    }

    static get observedAttributes() {
        return ['items', 'name'];
    }

    /* Read component attributes and update the internal state accordingly */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        if (oldValue === newValue) return;

        switch (name) {
            case 'name':
                this._name = newValue ? newValue : '';
                break;
        }

        this.render();
    }

    protected render(): void {
        this.cleanShadow();

        this.injectStyles(this.getStyles());

        this._sidebar                       = this.createSidebar();
        const sidebarHeader: HTMLDivElement = this.createSidebarHeader();
        const sidebarNav: HTMLElement       = this.createSidebarNav(this._items);
        const sidebarFooter: HTMLDivElement = this.createSidebarFooter();

        this._sidebar.appendChild(sidebarHeader);
        this._sidebar.appendChild(sidebarNav);
        this._sidebar.appendChild(sidebarFooter);

        this.shadow.appendChild(this._sidebar);
    }

    private createSidebar(): HTMLDivElement {
        const sidebar: HTMLDivElement = document.createElement('div');
        sidebar.className             = `sidebar`;

        return sidebar;
    }

    private createSidebarHeader(): HTMLDivElement {
        const header: HTMLDivElement = document.createElement('div');
        header.className             = 'sidebar-header';

        const logoButton: HTMLButtonElement = document.createElement('button');
        logoButton.className                = 'sidebar-logo';
        const logoIcon: HTMLSpanElement     = this.extractIcon('industrial');
        logoButton.appendChild(logoIcon);
        header.appendChild(logoButton);

        const title: HTMLSpanElement = document.createElement('span');
        title.className              = 'sidebar-title';
        title.innerText              = this._name;
        header.appendChild(title);

        const burgerButton: HTMLButtonElement = document.createElement('button');
        burgerButton.className                = 'sidebar-burger';
        const burgerIcon: HTMLSpanElement     = this.extractIcon('burger-menu');
        burgerButton.appendChild(burgerIcon);
        header.appendChild(burgerButton);

        // Add events for the main buttons
        logoButton.addEventListener('click', () => this.toggleCompactMode());
        burgerButton.addEventListener('click', () => this.toggleCompactMode());

        return header;
    }

    private createSidebarNav(sections: IndSidebarSection[]): HTMLElement {
        const nav: HTMLElement = document.createElement('nav');
        nav.className          = 'sidebar-nav';

        sections.map(sec => {
            const section: HTMLDivElement = document.createElement('div');
            section.className             = 'sidebar-nav-section';
            const label: HTMLDivElement   = document.createElement('div');
            label.className               = 'sidebar-nav-label';
            label.innerText               = sec.label;
            section.appendChild(label);
            sec.children.map(child => {
                const anchor: HTMLAnchorElement = document.createElement('a');
                anchor.className                = 'sidebar-nav-item' + (child.active ? ' active' : '');
                anchor.href                     = child.link;

                // Add the icon
                const iconSpan: HTMLSpanElement = this.extractIcon(child.icon || '');
                anchor.appendChild(iconSpan);

                // Add the label
                const anchorLabel: HTMLSpanElement = document.createElement('span');
                anchorLabel.className              = 'sidebar-nav-item-label';
                anchorLabel.innerText              = child.label;
                anchor.appendChild(anchorLabel);

                section.appendChild(anchor);
            });
            nav.appendChild(section);
        });

        return nav;
    }

    private createSidebarFooter(): HTMLDivElement {
        const footer     = document.createElement('div');
        footer.className = 'sidebar-footer';

        const title: HTMLSpanElement = document.createElement('span');
        title.className              = 'sidebar-footer-title';
        title.innerText              = 'Version 1.0';
        footer.appendChild(title);

        return footer;
    }

    private extractIcon(iconName: string): HTMLSpanElement {
        const iconSvg: string           = getIconByName(iconName, 'lg', 2, 'var(--base-text-dim-color)', 'var(--base-text-dim-color');
        const iconSpan: HTMLSpanElement = document.createElement('span');
        iconSpan.className              = 'sidebar-nav-item-icon';
        iconSpan.innerHTML              = iconSvg;
        return iconSpan;
    }

    private toggleCompactMode(): void {
        const sidebarEl = this.shadow.querySelector('.sidebar');
        if (sidebarEl) {
            sidebarEl.classList.toggle('compact');
        }
    }

    private getStyles(): string {
        return `
        .sidebar {
            width: 15rem;
            height: 100vh;
            background: var(--base-surface-color);
            border-right: 1px solid var(--base-border-color);
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            overflow: hidden;
            transition: width var(--base-transition);
            position: relative;
            z-index: 100;
        }
        .sidebar-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            border-bottom: 1px solid var(--base-border-color);
            flex-shrink: 0;
        }
        .sidebar-burger {
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
        .sidebar-burger:hover { background: var(--base-surface-contrast-color); }
        .sidebar-burger:hover .sidebar-nav-item-icon > svg { stroke: var(--base-text-color); }
        .sidebar-burger:focus {
            outline: 0.125rem solid var(--base-outline-color);
            outline-offset: 0.125rem;
        }
        .sidebar-logo {
            display: flex;
            width: 2.5rem;
            height: 2.5rem;
            align-items: center;
            justify-content: center;
            background: none;
            border: none;
            border-radius: var(--base-border-radius);
            cursor: pointer;
            flex-shrink: 0;
        }
        .sidebar-logo:hover { background: var(--base-surface-contrast-color); }
        .sidebar-logo .sidebar-nav-item-icon > svg { stroke: var(--base-primary-color); }
        .sidebar-logo:focus {
            outline: 0.125rem solid var(--base-outline-color);
            outline-offset: 0.125rem;
        }
        .sidebar-title {
            font-size: var(--font-size-base);
            font-weight: 600;
            letter-spacing: -0.3px;
            white-space: nowrap;
            overflow: hidden;
            opacity: 1;
            transition: opacity var(--base-transition), width var(--base-transition);
            width: 10rem;
        }
        .sidebar-nav {
            flex: 1;
            padding: 0.5rem;
            overflow-y: auto;
            overflow-x: hidden;
        }
        .sidebar-nav-section {
            display: flex;
            flex-direction: column;
            gap: 0.25rem; 
            margin-bottom: 1.5rem;
        }
        .sidebar-nav-label {
            font-size: var(--font-size-xs);
            font-family: monospace;
            font-weight: 500;
            letter-spacing: 0.125rem;
            text-transform: uppercase;
            color: var(--base-text-muted-color);
            padding: 0 0.5rem;
            margin-bottom: 0.25rem;
            white-space: nowrap;
            overflow: hidden;
            opacity: 1;
            height: 1rem;
            transition: opacity var(--base-transition), height var(--base-transition);
        }
        .sidebar-nav-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0.5rem;
            border-radius: var(--base-border-radius);
            cursor: pointer;
            color: var(--base-text-dim-color);
            font-size: var(--font-size-base);
            font-weight: 400;
            white-space: nowrap;
            position: relative;
            text-decoration: none;
        }
        .sidebar-nav-item:hover {
            color: var(--base-text-color);
            background: var(--base-surface-contrast-color);
        }
        .sidebar-nav-item:focus {
            outline: 0.125rem solid var(--base-outline-color);
            outline-offset: 0.125rem;
        }
        .sidebar-nav-item:hover > .sidebar-nav-item-icon svg {
            stroke: var(--base-text-color);
        }
        .sidebar-nav-item-icon {
            display: flex;
            align-items: center;
        }
        .sidebar-nav-item-icon svg {
            flex-shrink: 0;
            width: 1.5rem;
            height: 1.5rem;
        }
        .sidebar-nav-item.active {
            color: var(--base-primary-color);
        }
        .sidebar-nav-item.active > .sidebar-nav-item-icon svg {
            stroke: var(--base-primary-color);
        }
        .sidebar-footer {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem;
            border-top: 1px solid var(--base-border-color);
            flex-shrink: 0;
        }
        .sidebar-footer-title {
            font-size: var(--font-size-xs);
            font-family: monospace;
            font-weight: 500;
            letter-spacing: 0.125rem;
            text-transform: uppercase;
            color: var(--base-text-muted-color);
            padding: 0;
            margin-bottom: 0.25rem;
            white-space: nowrap;
        }
        /* Compact mode */
        .sidebar.compact                            { width: 3.5rem; }
        .sidebar.compact .sidebar-title             { display: none; }
        .sidebar.compact .sidebar-burger            { display: none; }
        .sidebar.compact .sidebar-nav-section       { margin-bottom: 0.5rem; gap: 0.5rem; } 
        .sidebar.compact .sidebar-nav-label         { display: none; }
        .sidebar.compact .sidebar-nav-item          { width: 1.5rem; }
        .sidebar.compact .sidebar-nav-item-label    { display: none; }
        .sidebar.compact .sidebar-footer-title      { display: none; }
        `
    }
}

customElements.define('ind-sidebar', IndSidebar);
