/**
 * Custom Button Component
 */
export class IndButton extends HTMLElement {

    constructor() {
        super();
        this.attachEventListeners();
    }

    private attachEventListeners(): void {
        this.addEventListener('click', (e) => {
            console.log('Button clicked', e);
        });
    }
}

customElements.define('ind-button', IndButton);
