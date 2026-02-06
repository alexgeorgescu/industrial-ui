import { IndBaseComponent } from "../base/base-component.js";

/**
 * Custom Button Component
 *
 * @element ind-button
 *
 * @attr {string} variant - Button style: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' (default: 'primary')
 */
export class IndButton extends IndBaseComponent {

    constructor() {
        super();
        this.attachEventListeners();
    }

    static get observedAttributes() {
        return ['variant'];
    }

    protected render(): void {
        const variant = this.getAttr('variant', 'primary');

        this.injectStyles(this.getStyles());

        const button: HTMLButtonElement = document.createElement('button');
        const slot: HTMLSlotElement     = document.createElement('slot');

        button.className = `btn btn-${variant}`;
        button.appendChild(slot);

        this.shadow.appendChild(button);
    }

    private attachEventListeners(): void {
        this.addEventListener('click', (e) => {
            console.log('Button clicked', e);
        });
    }

    private getStyles(): string {
        return `
      .btn {
        display: flex;
        border: none;
        cursor: pointer;
        font-family: sans-serif;
        font-size: 1rem;
        font-weight: 500;
        transition: all 0.2s ease;
        align-items: center;
        padding: 0.5rem 1rem;
      }
      
      .btn-primary {
        background-color: #111519;
        color: #FFF; 
      }
      
      .btn-primary:hover {
        background-color: #414549;
      }
      
      .btn-secondary {
        background-color: #E9ECEF;
        color: #333;
      }
      
      .btn-secondary:hover {
        background-color: #C9CCCF;
      }
      
      .btn-success {
        background-color: #198754;
        color: #FFF;
      }
      
      .btn-success:hover {
        background-color: #49b784;
        color: #FFF;
      }
      
      .btn-info {
        background-color: #0DCAF0;
        color: #FFF;
      }
      
      .btn-info:hover {
        background-color: #3DFAF0;
        color: #FFF;
      }
      
      .btn-warn {
        background-color: #FFC107;
        color: #333;
      }
      
      .btn-warn:hover {
        background-color: #DFA107;
      }
      
      .btn-danger {
        background-color: #DC3545;
        color: #FFF;
      }
      
      .btn-danger:hover {
        background-color: #FC6575;
      }
    `
    }
}

customElements.define('ind-button', IndButton);
