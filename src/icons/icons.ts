export type IconSize = "sm" | "md" | "lg" | "xl" | "xxl";
export type IconName =
    "about"
    | "burger-menu"
    | "button"
    | "card"
    | "check"
    | "chevron-left"
    | "chevron-right"
    | "close"
    | "controller"
    | "download"
    | "edit"
    | "knob"
    | "industrial"
    | "light-bulb"
    | "menu"
    | "menubar"
    | "minus"
    | "plus"
    | "search"
    | "sidebar"
    | "switch"
    | "tile"
    | "trash"
    ;

const iconRegistry: Record<IconName, any> = {
    "about": indIconAbout,
    "burger-menu": indIconBurgerMenu,
    "button": indIconButton,
    "card": indIconCard,
    "check": indIconCheck,
    "chevron-left": indIconChevronLeft,
    "chevron-right": indIconChevronRight,
    "close": indIconClose,
    "controller": indIconController,
    "download": indIconDownload,
    "edit": indIconEdit,
    "knob": indIconKnob,
    "industrial": indIconIndustrial,
    "light-bulb": indIconLightBulb,
    "menu": indIconMenu,
    "menubar": indIconMenubar,
    "minus": indIconMinus,
    "plus": indIconPlus,
    "search": indIconSearch,
    "sidebar": indIconSidebar,
    "switch": indIconSwitch,
    "tile": indIconTile,
    "trash": indIconTrash
};

/**
 * Resolves an icon by name. Returns the SVG string or an empty string if not found.
 */
export function getIconByName(name: string,
                              size: IconSize     = "md",
                              stroke: number     = 1,
                              startColor: string = "white",
                              endColor: string   = "white"): string {
    const fn          = iconRegistry[name as IconName];
    const s: number   = getSize(size);
    const def: string = getDefs(startColor, endColor);
    return fn ? fn(s, stroke, def) : "";
}

const sizeMap: Record<IconSize, number> = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 48,
    xxl: 64
};

function getSize(size: IconSize): number {
    return sizeMap[size];
}

function getDefs(startColor: string, endColor: string): any {
    return `
        <defs>
            <linearGradient id="fullGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="0">
                <stop offset="0%" stop-color="${startColor}" />
                <stop offset="100%" stop-color="${endColor}" />
            </linearGradient>
        </defs>
    `;
}

export function indIconAbout(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" aria-hidden="true">${def}<circle cx="12" cy="12" r="11"/><line x1="12" y1="6" x2="12" y2="8"/><line x1="12" y1="10" x2="12" y2="18"/></svg>`;
}

export function indIconBurgerMenu(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>`;
}

export function indIconButton(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<rect x="2" y="4" width="20" height="16" rx="4"/></svg>`;
}

export function indIconCard(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<rect x="2" y="4" width="20" height="16"/><rect x="6" y="8" width="12" height="4" rx="0"/><line x1="6" y1="16" x2="18" y2="16"/></svg>`;
}

export function indIconCheck(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<polyline points="20 6 9 17 4 12"/></svg>`;
}

export function indIconChevronLeft(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<polyline points="15 18 9 12 15 6"/></svg>`;
}

export function indIconChevronRight(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<polyline points="9 18 15 12 9 6"/></svg>`;
}

export function indIconClose(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
}

export function indIconController(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<polygon points="9,5 12,2 15,5"/><polygon points="19,9 22,12 19,15"/><polygon points="15,19 12,22 9,19"/><polygon points="5,15 2,12 5,9"/><circle cx="12" cy="12" r="3"/></svg>`;
}

export function indIconDownload(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
}

export function indIconEdit(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
}

export function indIconIndustrial(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" aria-hidden="true">${def}<line x1="0" y1="22" x2="24" y2="22"/><rect x="3" y="8" width="18" height="14"/><rect x="4" y="8" width="16" height="14"/><line x1="8" y1="12" x2="8" y2="18"/><line x1="12" y1="12" x2="12" y2="18"/><line x1="16" y1="12" x2="16" y2="18"/><line x1="14" y1="1" x2="14" y2="8"/><line x1="18" y1="1" x2="18" y2="8"/></svg>`;
}

export function indIconKnob(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<circle cx="12" cy="12" r="9"/><line x1="12" y1="9" x2="12" y2="4"/><circle cx="12" cy="12" r="3"/></svg>`;
}

export function indIconLightBulb(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<circle cx="12" cy="8" r="7"/><path d="M10 8h4"/><path d="M12 8v6"/><path d="M8 17h8"/><path d="M8 19h8"/><path d="M8 21h8"/><path d="M10 23h4"/></svg>`;
}

export function indIconMenu(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<line x1="5" y1="6" x2="19" y2="6"/><line x1="5" y1="9" x2="19" y2="9"/><line x1="5" y1="12" x2="19" y2="12"/><line x1="5" y1="15" x2="19" y2="15"/><line x1="5" y1="18" x2="19" y2="18"/></svg>`;
}

export function indIconMenubar(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<rect x="2" y="6" width="20" height="12" rx="0"/><line x1="5" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="19" y2="10"/><line x1="14" y1="13" x2="19" y2="13"/></svg>`;
}

export function indIconMinus(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<line x1="5" y1="12" x2="19" y2="12"/></svg>`;
}

export function indIconPlus(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
}

export function indIconSearch(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
}

export function indIconSidebar(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<rect x="6" y="3" width="12" height="18" rx="0"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="13" x2="15" y2="13"/></svg>`;
}

export function indIconSwitch(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<rect x="2" y="6" width="20" height="12" rx="4"/><circle cx="8" cy="12" r="3"/></svg>`;
}

export function indIconTile(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<rect x="4" y="2" width="16" height="20" rx="4"/></svg>`;
}

export function indIconTrash(s: number, stroke: number, def: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${def}<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`;
}
