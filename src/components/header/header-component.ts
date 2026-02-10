import { IndBaseComponent } from "../base/base-component.js";

/**
 * IndustrialUI Header Toolbar Component
 *
 * @element ind-header
 *
 * @example <ind-header>...</ind-header>
 */
export class IndHeader extends IndBaseComponent {

    constructor() {
        super();
        this.attachEventListeners();
    }

    protected render(): void {

        this.injectStyles(this.getStyles());

        const header: HTMLDivElement = document.createElement('div');
        header.className             = `header`;

        const headerSlot: HTMLSlotElement = document.createElement('slot');
        header.appendChild(headerSlot);

        this.shadow.appendChild(header);
    }

    private attachEventListeners(): void {
        this.addEventListener('click', (e) => {
            console.log('Header clicked', e);
        });
    }

    private getStyles(): string {
        return `
      .header {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 1rem;
        padding: 0.5rem 1rem;
        color: var(--base-text-color);
        background: var(--base-color);
        align-items: center;
        border-radius: 0rem;
        border-bottom: 1px solid var(--border-color);
      }
      `
    }
}

customElements.define('ind-header', IndHeader);
