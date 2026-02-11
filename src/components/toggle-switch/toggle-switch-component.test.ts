import { describe, it, expect, beforeEach, afterEach } from 'vitest';

// Ensure the component is defined before tests
import './toggle-switch-component';

describe('IndToggleSwitch', () => {
    let toggleSwitchEl: HTMLElement;

    beforeEach(() => {
        toggleSwitchEl = document.createElement('ind-toggle-switch');
        document.body.appendChild(toggleSwitchEl);
    });

    afterEach(() => {
        toggleSwitchEl.remove();
    });

    it('renders with default variant', () => {
        const shadowSlider = toggleSwitchEl.shadowRoot?.querySelector('span');
        expect(shadowSlider).toBeTruthy();
        expect(shadowSlider?.className).toContain('primary');
    });

    it('renders with each variant', () => {
        const variants = ['primary', 'secondary', 'success', 'info', 'warn', 'danger'];
        for (const variant of variants) {
            toggleSwitchEl.setAttribute('variant', variant);
            // Force re-render if needed
            const shadowSlider = toggleSwitchEl.shadowRoot?.querySelector('span');
            expect(shadowSlider?.className).toContain(`${variant}`);
        }
    });

    it('disables the toggle switch when disabled attribute is set', () => {
        toggleSwitchEl.setAttribute('disabled', '');
        const shadowButton = toggleSwitchEl.shadowRoot?.querySelector('input');
        expect(shadowButton?.disabled).toBe(true);
    });

    it('enables the toggle switch when disabled attribute is removed', () => {
        toggleSwitchEl.setAttribute('disabled', '');
        toggleSwitchEl.removeAttribute('disabled');
        const shadowButton = toggleSwitchEl.shadowRoot?.querySelector('input');
        expect(shadowButton?.disabled).toBe(false);
    });
});
