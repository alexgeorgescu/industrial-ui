import { IndBaseComponent } from "../base/base-component.js";

/**
 * IndustrialUI Card Component
 *
 * @element ind-card
 *
 * @example <ind-card variant="success">I am a button</ind-card>
 */
export class IndCard extends IndBaseComponent {

    constructor() {
        super();
    }

    protected render(): void {

        this.injectStyles(this.getStyles());

        const card: HTMLDivElement = document.createElement('div');
        card.className             = `card`;

        // Card header
        const header: HTMLDivElement      = document.createElement('div');
        header.className                  = 'card-header';
        const headerSlot: HTMLSlotElement = document.createElement('slot');
        headerSlot.name                   = 'header';
        header.appendChild(headerSlot);

        // Card body
        const body: HTMLDivElement      = document.createElement('div');
        body.className                  = 'card-body';
        const bodySlot: HTMLSlotElement = document.createElement('slot');
        body.appendChild(bodySlot);

        // Card footer
        const footer: HTMLDivElement      = document.createElement('div');
        footer.className                  = 'card-footer';
        const footerSlot: HTMLSlotElement = document.createElement('slot');
        footerSlot.name                   = 'footer';
        footer.appendChild(footerSlot);

        card.appendChild(header);
        card.appendChild(body);
        card.appendChild(footer);

        this.shadow.appendChild(card);
    }

    private getStyles(): string {
        return `
      .card {
        display: flex;
        flex-direction: column;
        color: var(--base-text-color);
        background: var(--base-color);
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid var(--border-color);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .card:hover {
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      }

      .card-header {
        padding: 1rem;
        font-size: var(--font-size-xl);
        font-weight: bold;
        border-bottom: 1px solid var(--border-color);
      }
      
      .card-body {
        display: flex;
        padding: 1rem;
        flex-grow: 1;
      }

      .card-footer {
        display: flex;
        flex-direction: row;
        padding: 1rem;
        border-top: 1px solid var(--border-color);
        justify-content: end;
        gap: 0.5rem;
      }
      `
    }
}

customElements.define('ind-card', IndCard);