/**
 * The base component to be extended by all other components.
 */
declare abstract class IndBaseComponent extends HTMLElement {
    protected shadow: ShadowRoot;
    protected _initialized: boolean;
    constructor();
    /**
     * Called when the component is added to the DOM.
     */
    connectedCallback(): void;
    /**
     * Handle the rendering part of each component.
     */
    protected abstract render(): void;
    /**
     * Cleanup the shadow DOM.
     */
    protected cleanShadow(): void;
    /**
     * Helper method to create and inject styles
     */
    protected injectStyles(css: string): void;
    /**
     * Helper method to dispatch custom events.
     */
    protected emit(eventName: string, detail?: any): void;
    /**
     * Helper to retrieve element attributes is a safe way.
     */
    protected getAttr(name: string, defaultValue?: string): string;
    /**
     * Helper to retrieve an array of generic elements passed as an attribute.
     */
    protected getAttrArray<T>(name: string): T[];
    /**
     * Helper to check if an element's attribute exists and that is not "false".
     */
    protected hasAttr(name: string): boolean;
}

/**
 * IndustrialUI Application Component
 *
 * @element ind-application
 *
 * @example <ind-application>...</ind-application>
 */
declare class IndApplication extends IndBaseComponent {
    constructor();
    protected render(): void;
    private getStyles;
}

/**
 * IndustrialUI Button Component
 *
 * @element ind-button
 *
 * @attr {boolean} disabled - Whether the button is disabled
 * @attr {string} variant - Button style: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' (default: 'primary')
 *
 * @example <ind-button variant="success">I am a button</ind-button>
 */
declare class IndButton extends IndBaseComponent {
    private _button;
    constructor();
    isDisabled(): boolean;
    setDisabled(value: boolean): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    protected render(): void;
    private attachEventListeners;
    private getStyles;
}

/**
 * IndustrialUI Card Component
 *
 * @element ind-card
 *
 * @example <ind-card variant="success">I am a button</ind-card>
 */
declare class IndCard extends IndBaseComponent {
    constructor();
    protected render(): void;
    private getStyles;
}

/**
 * IndustrialUI Header Toolbar Component
 *
 * @element ind-header
 *
 * @example <ind-header>...</ind-header>
 */
declare class IndHeader extends IndBaseComponent {
    constructor();
    protected render(): void;
    private getStyles;
}

interface IndSidebarItem {
    label: string;
    link: string;
    icon?: string;
    active?: boolean;
}

/**
 * IndustrialUI Sidebar Component
 *
 * @element ind-sidebar
 *
 * @example <ind-sidebar>...</ind-sidebar>
 */
declare class IndSidebar extends IndBaseComponent {
    _items: IndSidebarItem[];
    constructor();
    static get observedAttributes(): string[];
    protected render(): void;
    private getStyles;
}

/**
 * IndustrialUI ToggleSwitch Component
 *
 * @element ind-toggle-switch
 *
 * @attr {boolean} checked - Whether the toggle switch is checked
 * @attr {boolean} disabled - Whether the toggle switch is disabled
 * @attr {string} label - The label to display with the toggle switch
 * @attr {string} variant - Toggle switch style: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' (default: 'primary')
 *
 * @example <ind-toggle-switch variant="info"></ind-toggle-switch>
 */
declare class IndToggleSwitch extends IndBaseComponent {
    private _toggle;
    constructor();
    isChecked(): boolean;
    isDisabled(): boolean;
    setChecked(value: boolean): void;
    setDisabled(value: boolean): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    protected render(): void;
    private attachEventListeners;
    private getStyles;
}

export { IndApplication, IndButton, IndCard, IndHeader, IndSidebar, IndToggleSwitch };
