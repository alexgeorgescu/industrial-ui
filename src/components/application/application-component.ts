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

        const mainContents: HTMLDivElement = document.createElement('div');
        mainContents.className             = 'main-contents';

        const mainSlot: HTMLSlotElement = document.createElement('slot');
        mainContents.appendChild(mainSlot);

        mainContainer.appendChild(sidebarSlot)
        mainContainer.appendChild(mainContents);
        application.appendChild(headerSlot);
        application.appendChild(mainContainer)

        this.shadow.appendChild(application);
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
        overflow: hidden;
      }
      
      .main-contents {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 0 1rem;
        overflow-y: scroll;
      }
      `
    }
}

customElements.define('ind-application', IndApplication);
