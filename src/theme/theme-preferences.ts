export const INDUSTRIAL_THEMES = [
    'iot-dark-pink',
    'iot-dark-green',
    'iot-light-tomato',
] as const;

export type IndustrialTheme = typeof INDUSTRIAL_THEMES[number];

const THEME_STORAGE_KEY = 'industrial-ui.theme';
const DEFAULT_THEME: IndustrialTheme = 'iot-dark-pink';

function isIndustrialTheme(value: string | null): value is IndustrialTheme {
    return value !== null && INDUSTRIAL_THEMES.includes(value as IndustrialTheme);
}

function getStoredTheme(): IndustrialTheme | undefined {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return undefined;
    }

    try {
        const theme = localStorage.getItem(THEME_STORAGE_KEY);
        return isIndustrialTheme(theme) ? theme : undefined;
    } catch {
        return undefined;
    }
}

function saveTheme(theme: IndustrialTheme): void {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return;
    }

    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        // Ignore errors
    }
}

function applyTheme(theme: IndustrialTheme): void {
    if (typeof document === 'undefined') {
        return;
    }

    document.documentElement.setAttribute('data-theme', theme);
}

export function setTheme(theme: IndustrialTheme): void {
    applyTheme(theme);
    saveTheme(theme);
}

export function restoreThemePreference(): IndustrialTheme {
    const theme = getStoredTheme() ?? DEFAULT_THEME;
    applyTheme(theme);
    return theme;
}

