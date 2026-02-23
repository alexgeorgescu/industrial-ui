import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import './knob-component';

describe('IndKnob', () => {
    let knobEl: HTMLElement;

    beforeEach(() => {
        knobEl = document.createElement('ind-knob');
        document.body.appendChild(knobEl);
    });

    afterEach(() => {
        knobEl.remove();
    });

    it('renders with default value', () => {
        const svg = knobEl.shadowRoot?.querySelector('svg');
        expect(svg).toBeTruthy();
        const label = svg?.querySelector('text');
        expect(label?.textContent).toContain('%');
    });

    it('sets value attribute and updates label', () => {
        knobEl.setAttribute('value', '50');
        const svg = knobEl.shadowRoot?.querySelector('svg');
        const label = svg?.querySelector('text');
        expect(label?.textContent).toContain('50');
    });

    it('sets min and max attributes and updates value', () => {
        knobEl.setAttribute('min', '10');
        knobEl.setAttribute('max', '20');
        knobEl.setAttribute('value', '15');
        const svg = knobEl.shadowRoot?.querySelector('svg');
        const label = svg?.querySelector('text');
        expect(label?.textContent).toContain('15');
    });

    it('disables the knob when disabled attribute is set', () => {
        knobEl.setAttribute('disabled', 'true');
        const svg = knobEl.shadowRoot?.querySelector('svg');
        expect(svg?.classList.contains('disabled')).toBe(true);
    });

    it('shows grid when grid attribute is set', () => {
        knobEl.setAttribute('grid', 'true');
        const svg = knobEl.shadowRoot?.querySelector('svg');
        const lines = svg?.querySelectorAll('.line');
        expect(lines?.length).toBeGreaterThan(0);
    });
});

