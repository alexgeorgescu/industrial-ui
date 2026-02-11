/**
 * The base component to be extended by all other components.
 */
export abstract class IndBaseComponent extends HTMLElement {
    protected shadow: ShadowRoot;               // The Shadow DOM API
    protected _initialized: boolean = false;    // Flag to know if the component is initialized

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    /**
     * Called when the component is added to the DOM.
     */
    connectedCallback() {
        if (!this._initialized) {
            this.render();
            this._initialized = true;
        }
    }

    /**
     * Handle the rendering part of each component.
     */
    protected abstract render(): void;

    /**
     * Cleanup the shadow DOM.
     */
    protected cleanShadow(): void {
        while (this.shadow.firstChild) {
            this.shadow.removeChild(this.shadow.firstChild);
        }
    }

    /**
     * Helper method to create and inject styles
     */
    protected injectStyles(css: string): void {
        const style: HTMLStyleElement = document.createElement('style');
        style.textContent             = css;
        this.shadow.appendChild(style);
    }

    /**
     * Helper method to dispatch custom events.
     */
    protected emit(eventName: string, detail?: any): void {
        this.dispatchEvent(
            new CustomEvent(eventName, {
                detail,
                bubbles: true,
                composed: true,
            })
        );
    }

    /**
     * Helper to retrieve element attributes is a safe way.
     */
    protected getAttr(name: string, defaultValue: string = ''): string {
        return this.getAttribute(name) || defaultValue;
    }

    /**
     * Helper to retrieve an array of generic elements passed as an attribute.
     */
    protected getAttrArray<T>(name: string): T[] {
        const attr = this.getAttribute(name) || null;
        if (attr) {
            try {
                return JSON.parse(attr);
            } catch (ex) {
                return [];
            }
        }
        return [];
    }

    /**
     * Helper to check if an element's attribute exists and that is not "false".
     */
    protected hasAttr(name: string): boolean {
        return this.hasAttribute(name) && this.getAttribute(name) !== 'false';
    }
}
