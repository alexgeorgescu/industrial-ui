import { IndBaseComponent } from "../base/base-component.js";

/**
 * IndustrialUI Application Component
 *
 * @element ind-application
 *
 * @example <ind-application>...</ind-application>
 */
export class IndApplication extends IndBaseComponent {

    constructor() {
        super();
        this.attachEventListeners();
    }

    protected render(): void {

        this.injectStyles(this.getStyles());

        const application: HTMLDivElement = document.createElement('div');
        application.className             = 'application';

        const headerSlot: HTMLSlotElement = document.createElement('slot');
        headerSlot.name                   = 'header';

        const mainContainer: HTMLDivElement = document.createElement('div');
        mainContainer.className             = 'main-container';

        const sidebarSlot: HTMLSlotElement = document.createElement('slot');
        sidebarSlot.name                   = 'sidebar';

        const mainSlot: HTMLSlotElement = document.createElement('slot');

        mainContainer.appendChild(sidebarSlot)
        mainContainer.appendChild(mainSlot);
        application.appendChild(headerSlot);
        application.appendChild(mainContainer)

        this.shadow.appendChild(application);
    }

    private attachEventListeners(): void {
        this.addEventListener('click', (e) => {
            console.log('Application clicked', e);
        });
    }

    private getStyles(): string {
        return `
      :host {
        display: flex;
        flex-direction: column;
      }

      .application {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        border: 0;
        overflow-x: hidden;
      }

      .main-container {
        display: flex;
        height: 100vh;
        flex-direction: row;
        overflow-y: scroll;
      }
      `
    }
}

customElements.define('ind-application', IndApplication);
