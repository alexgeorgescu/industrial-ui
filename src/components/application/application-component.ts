import { IndBaseComponent } from "../base/base-component.js";

/**
 * IndustrialUI Application Component
 *
 * @element ind-application
 *
 * @example <ind-application>...</ind-application>
 */
export class IndApplication extends IndBaseComponent {

    _template: HTMLTemplateElement = document.createElement('template');

    constructor() {
        super();
        this.defineTemplate();
    }

    protected render(): void {
        this.shadow.appendChild(this._template.content.cloneNode(true));
    }

    private defineTemplate(): void {
        this._template.innerHTML = `
        <style>
            :host                       { display: flex; flex-grow: 1; }
            .ind-application            { display: flex; flex-grow: 1; background: var(--base-background-color); }
            .ind-application-container  { display: flex; flex-grow: 1; flex-direction: column; }
        </style>
        <div class="ind-application">
            <slot name="sidebar"></slot>
            <div class="ind-application-container">
                <slot name="menubar"></slot>
                <slot></slot>
            </div>            
        </div>
        `;
    }
}

customElements.define('ind-application', IndApplication);
