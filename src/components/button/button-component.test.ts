import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import './button-component';

describe('IndButton', () => {
    let buttonEl: HTMLElement;

    beforeEach(() => {
        buttonEl = document.createElement('ind-button');
        document.body.appendChild(buttonEl);
    });

    afterEach(() => {
        buttonEl.remove();
    });

    it('renders with default variant', () => {
        const shadowButton = buttonEl.shadowRoot?.querySelector('button');
        expect(shadowButton).toBeTruthy();
        expect(shadowButton?.className).toContain('btn-primary');
    });

    it('renders with each variant', () => {
        const variants = ['primary', 'secondary', 'success', 'info', 'warn', 'danger'];
        for (const variant of variants) {
            buttonEl.setAttribute('variant', variant);
            // Force re-render if needed
            const shadowButton = buttonEl.shadowRoot?.querySelector('button');
            expect(shadowButton?.className).toContain(`btn btn-${variant}`);
        }
    });

    it('renders slot content', () => {
        buttonEl.innerHTML = 'Test Button';
        const shadowButton = buttonEl.shadowRoot?.querySelector('button');
        const slot         = shadowButton?.querySelector('slot');
        expect(slot).toBeTruthy();
    });

    it('disables the button when disabled attribute is set', () => {
        buttonEl.setAttribute('disabled', 'true');
        const shadowButton = buttonEl.shadowRoot?.querySelector('button');
        expect(shadowButton?.disabled).toBe(true);
    });

    it('enables the button when disabled attribute is removed', () => {
        buttonEl.setAttribute('disabled', '');
        buttonEl.removeAttribute('disabled');
        const shadowButton = buttonEl.shadowRoot?.querySelector('button');
        expect(shadowButton?.disabled).toBe(false);
    });

    it('fires click event', async () => {
        const shadowButton = buttonEl.shadowRoot?.querySelector('button');
        let clicked        = false;
        buttonEl.addEventListener('click', () => { clicked = true; });
        shadowButton?.click();
        expect(clicked).toBe(true);
    });
});

