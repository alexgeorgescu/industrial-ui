export type IconSize = "sm" | "md" | "lg" | "xl" | "xxl";
export type IconName =
    "plus"
    | "minus"
    | "close"
    | "check"
    | "chevron-right"
    | "chevron-left"
    | "search"
    | "trash"
    | "edit"
    | "download";

const iconRegistry: Record<IconName, (size?: IconSize) => string> = {
    "plus": indIconPlus,
    "minus": indIconMinus,
    "close": indIconClose,
    "check": indIconCheck,
    "chevron-right": indIconChevronRight,
    "chevron-left": indIconChevronLeft,
    "search": indIconSearch,
    "trash": indIconTrash,
    "edit": indIconEdit,
    "download": indIconDownload,
};

/**
 * Resolves an icon by name. Returns the SVG string or an empty string if not found.
 */
export function getIconByName(name: string, size: IconSize = "md"): string {
    const fn = iconRegistry[name as IconName];
    return fn ? fn(size) : "";
}

const sizeMap: Record<IconSize, number> = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 48,
    xxl: 64
};

function getSize(size: IconSize = "md"): number {
    return sizeMap[size];
}

export function indIconPlus(size: IconSize = "md"): string {
    const s = getSize(size);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
}

export function indIconMinus(size: IconSize = "md"): string {
    const s = getSize(size);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
}

export function indIconClose(size: IconSize = "md"): string {
    const s = getSize(size);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
}

export function indIconCheck(size: IconSize = "md"): string {
    const s = getSize(size);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`;
}

export function indIconChevronRight(size: IconSize = "md"): string {
    const s = getSize(size);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>`;
}

export function indIconChevronLeft(size: IconSize = "md"): string {
    const s = getSize(size);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>`;
}

export function indIconSearch(size: IconSize = "md"): string {
    const s = getSize(size);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
}

export function indIconTrash(size: IconSize = "md"): string {
    const s = getSize(size);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`;
}

export function indIconEdit(size: IconSize = "md"): string {
    const s = getSize(size);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
}

export function indIconDownload(size: IconSize = "md"): string {
    const s = getSize(size);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
}
