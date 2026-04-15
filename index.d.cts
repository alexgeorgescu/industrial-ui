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
    _template: HTMLTemplateElement;
    constructor();
    protected render(): void;
    private defineTemplate;
}

/**
 * IndustrialUI Button Component
 *
 * @element ind-button
 *
 * @attr {boolean} disabled - Whether the button is disabled
 * @attr {string} icon - The icon to display on the button (from the IndustrialUI icon set)
 * @attr {string} variant - Button style: 'primary' | 'secondary' | 'success' | 'icon' | 'info' | 'warn' | 'danger' (default: 'primary')
 *
 * @example <ind-button variant="success">I am a button</ind-button>
 */
declare class IndButton extends IndBaseComponent {
    private _button;
    private _isDisabled;
    private _iconName;
    private _variant;
    constructor();
    isDisabled(): boolean;
    setDisabled(value: boolean): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    protected render(): void;
    private attachEventListeners;
    private extractIcon;
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
    private _card;
    constructor();
    protected render(): void;
    private getStyles;
}

/**
 * IndustrialUI Knob Component
 *
 * @element ind-knob
 *
 * @example <ind-knob></ind-knob>
 */
declare class IndKnob extends IndBaseComponent {
    private _knob;
    private _isDisabled;
    private _isDragging;
    private _value;
    private _min;
    private _max;
    private _showGrid;
    private _symbol;
    private _size;
    constructor();
    isDisabled(): boolean;
    setDisabled(value: boolean): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
    protected render(): void;
    private normalizeInputValue;
    /**
     * Draw a line at the provided coordinates.
     *
     * @param x1 Start X coordinate
     * @param y1 Start Y coordinate
     * @param x2 End X coordinate
     * @param y2 End Y coordinate
     * @param tx Translation X coordinate
     * @param ty Translation Y coordinate
     * @param ang Rotation angle
     */
    private createLine;
    private onPointerDown;
    private onPointerMove;
    private onPointerUp;
    private updateValueFromPointer;
    private attachEventListeners;
    private getStyles;
}

interface IndMenuItem {
    label: string;
    action: () => void;
}

/**
 * IndustrialUI Menu Component
 *
 * @element ind-menu
 *
 * @example <ind-menu></ind-menu>
 */
declare class IndMenu extends IndBaseComponent {
    private _menu;
    private _items;
    private _title;
    private _isOpen;
    private _topOffset;
    private _leftOffset;
    constructor(top: string, left: string, title: string);
    set items(values: IndMenuItem[]);
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    private onDocumentClick;
    private onDocumentKeydown;
    private destroyMenu;
    connectedCallback(): void;
    protected render(): void;
    private getStyles;
}

/**
 * IndustrialUI Menubar Component
 *
 * @element ind-menubar
 *
 * @example <ind-menubar>...</ind-menubar>
 */
declare class IndMenubar extends IndBaseComponent {
    private _menubar;
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

interface IndSidebarSection {
    label: string;
    children: IndSidebarItem[];
}

/**
 * IndustrialUI Sidebar Component
 *
 * @element ind-sidebar
 *
 * @example <ind-sidebar>...</ind-sidebar>
 */
declare class IndSidebar extends IndBaseComponent {
    private _sidebar;
    private _name;
    private _items;
    constructor();
    set items(values: IndSidebarSection[]);
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    protected render(): void;
    private createSidebar;
    private createSidebarHeader;
    private createSidebarNav;
    private createSidebarFooter;
    private extractIcon;
    private toggleCompactMode;
    private getStyles;
}

/**
 * IndustrialUI Tile Component
 *
 * @element ind-tile
 *
 * @attr {boolean} active - Whether the tile is active
 * @attr {boolean} disabled - Whether the tile is disabled
 * @attr {string} icon - The icon to display on the tile (from the IndustrialUI icon set)
 *
 * @example <ind-tile icon="bulb">Lights</ind-tile>
 */
declare class IndTile extends IndBaseComponent {
    private _tile;
    private _isActive;
    private _isDisabled;
    private _iconName;
    constructor();
    isDisabled(): boolean;
    setDisabled(value: boolean): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    protected render(): void;
    private attachEventListeners;
    private extractIcon;
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
    private _isChecked;
    private _isDisabled;
    private _label;
    private _variant;
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

type IconSize = "sm" | "md" | "lg" | "xl" | "xxl";
type IconName = "about" | "burger-menu" | "button" | "card" | "check" | "chevron-left" | "chevron-right" | "close" | "controller" | "download" | "edit" | "knob" | "industrial" | "light-bulb" | "menu" | "menubar" | "minus" | "plus" | "search" | "sidebar" | "switch" | "tile" | "trash";
/**
 * Resolves an icon by name. Returns the SVG string or an empty string if not found.
 */
declare function getIconByName(name: string, size?: IconSize, stroke?: number, startColor?: string, endColor?: string): string;
declare function indIconAbout(s: number, stroke: number, def: string): string;
declare function indIconBurgerMenu(s: number, stroke: number, def: string): string;
declare function indIconButton(s: number, stroke: number, def: string): string;
declare function indIconCard(s: number, stroke: number, def: string): string;
declare function indIconCheck(s: number, stroke: number, def: string): string;
declare function indIconChevronLeft(s: number, stroke: number, def: string): string;
declare function indIconChevronRight(s: number, stroke: number, def: string): string;
declare function indIconClose(s: number, stroke: number, def: string): string;
declare function indIconController(s: number, stroke: number, def: string): string;
declare function indIconDownload(s: number, stroke: number, def: string): string;
declare function indIconEdit(s: number, stroke: number, def: string): string;
declare function indIconIndustrial(s: number, stroke: number, def: string): string;
declare function indIconKnob(s: number, stroke: number, def: string): string;
declare function indIconLightBulb(s: number, stroke: number, def: string): string;
declare function indIconMenu(s: number, stroke: number, def: string): string;
declare function indIconMenubar(s: number, stroke: number, def: string): string;
declare function indIconMinus(s: number, stroke: number, def: string): string;
declare function indIconPlus(s: number, stroke: number, def: string): string;
declare function indIconSearch(s: number, stroke: number, def: string): string;
declare function indIconSwitch(s: number, stroke: number, def: string): string;
declare function indIconTile(s: number, stroke: number, def: string): string;
declare function indIconTrash(s: number, stroke: number, def: string): string;

export { type IconName, type IconSize, IndApplication, IndButton, IndCard, IndKnob, IndMenu, IndMenubar, IndSidebar, IndTile, IndToggleSwitch, getIconByName, indIconAbout, indIconBurgerMenu, indIconButton, indIconCard, indIconCheck, indIconChevronLeft, indIconChevronRight, indIconClose, indIconController, indIconDownload, indIconEdit, indIconIndustrial, indIconKnob, indIconLightBulb, indIconMenu, indIconMenubar, indIconMinus, indIconPlus, indIconSearch, indIconSwitch, indIconTile, indIconTrash };
