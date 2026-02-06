import { IndBaseComponent } from "../base/base-component.js";

/**
 * Quantity Selector Component
 *
 * @element ind-quantity-selector
 *
 * @attr {number} value - Current value (default: 0)
 * @attr {number} min - Minimum allowed value
 * @attr {number} max - Maximum allowed value
 * @attr {number} step - Step size (default: 1)
 * @attr {boolean} disabled - Disables the control
 *
 * @fires ind-change - Fired when the value changes. detail: { value: number }
 */
export class IndQuantitySelector extends IndBaseComponent {
    private inputEl?: HTMLInputElement;
    private minusBtn?: HTMLButtonElement;
    private plusBtn?: HTMLButtonElement;

    private currentValue: number = 0;

    static get observedAttributes() {
        return ["value", "min", "max", "step", "disabled"];
    }

    get value(): number {
        return this.currentValue;
    }

    set value(nextValue: number) {
        this.setAttribute("value", String(nextValue));
    }

    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        if (oldValue === newValue) return;

        if (!this._initialized) return;

        if (name === "disabled") {
            this.syncDisabled();
            return;
        }

        if (name === "min" || name === "max" || name === "step") {
            this.syncInputAttributes();
            this.setValueInternal(this.currentValue, { emit: false, reason: "constraints" });
            return;
        }

        if (name === "value") {
            const parsed = this.parseNumberAttr("value", 0);
            this.setValueInternal(parsed, { emit: false, reason: "attribute" });
        }
    }

    protected render(): void {
        this.injectStyles(this.getStyles());

        const wrapper = document.createElement("div");
        wrapper.className = "qty";

        const minusBtn = document.createElement("button");
        minusBtn.className = "btn";
        minusBtn.type = "button";
        minusBtn.setAttribute("aria-label", "Decrease quantity");
        minusBtn.textContent = "−";

        const input = document.createElement("input");
        input.className = "input";
        input.type = "number";
        input.inputMode = "numeric";

        const plusBtn = document.createElement("button");
        plusBtn.className = "btn";
        plusBtn.type = "button";
        plusBtn.setAttribute("aria-label", "Increase quantity");
        plusBtn.textContent = "+";

        wrapper.appendChild(minusBtn);
        wrapper.appendChild(input);
        wrapper.appendChild(plusBtn);
        this.shadow.appendChild(wrapper);

        this.inputEl = input;
        this.minusBtn = minusBtn;
        this.plusBtn = plusBtn;

        this.syncInputAttributes();
        this.syncDisabled();

        const initial = this.parseNumberAttr("value", 0);
        this.setValueInternal(initial, { emit: false, reason: "init" });

        minusBtn.addEventListener("click", () => this.stepBy(-this.getStep()));
        plusBtn.addEventListener("click", () => this.stepBy(this.getStep()));

        input.addEventListener("input", () => {
            const next = this.parseInputValue(input.value);
            if (next === null) return;
            this.setValueInternal(next, { emit: false, reason: "typing" });
        });

        input.addEventListener("change", () => {
            const next = this.parseInputValue(input.value);
            this.setValueInternal(next ?? this.currentValue, { emit: true, reason: "commit" });
        });
    }

    private stepBy(delta: number): void {
        if (this.isDisabled()) return;
        this.setValueInternal(this.currentValue + delta, { emit: true, reason: "step" });
    }

    private setValueInternal(nextValue: number, opts: { emit: boolean; reason: string }): void {
        const clamped = this.clamp(nextValue);
        const changed = clamped !== this.currentValue;

        this.currentValue = clamped;

        if (this.inputEl) {
            this.inputEl.value = String(clamped);
        }

        if (this.getAttribute("value") !== String(clamped)) {
            // Reflect to attribute for declarative state
            this.setAttribute("value", String(clamped));
        }

        this.syncDisabled();

        if (opts.emit && changed) {
            this.emit("ind-change", { value: this.currentValue, reason: opts.reason });
        }
    }

    private syncInputAttributes(): void {
        if (!this.inputEl) return;

        const step = this.getStep();
        this.inputEl.step = String(step);

        if (this.hasAttribute("min")) {
            this.inputEl.min = this.getAttr("min");
        } else {
            this.inputEl.removeAttribute("min");
        }

        if (this.hasAttribute("max")) {
            this.inputEl.max = this.getAttr("max");
        } else {
            this.inputEl.removeAttribute("max");
        }
    }

    private syncDisabled(): void {
        const disabled = this.isDisabled();

        if (this.inputEl) this.inputEl.disabled = disabled;
        if (this.minusBtn) this.minusBtn.disabled = disabled || this.currentValue <= this.getMin();
        if (this.plusBtn) this.plusBtn.disabled = disabled || this.currentValue >= this.getMax();
    }

    private isDisabled(): boolean {
        return this.hasAttr("disabled");
    }

    private parseNumberAttr(name: string, fallback: number): number {
        const raw = this.getAttribute(name);
        if (raw === null || raw.trim() === "") return fallback;

        const parsed = Number(raw);
        if (!Number.isFinite(parsed)) return fallback;
        return parsed;
    }

    private parseInputValue(raw: string): number | null {
        const trimmed = raw.trim();
        if (trimmed === "") return null;
        const parsed = Number(trimmed);
        if (!Number.isFinite(parsed)) return null;
        return parsed;
    }

    private getStep(): number {
        const step = this.parseNumberAttr("step", 1);
        return step > 0 ? step : 1;
    }

    private getMin(): number {
        return this.hasAttribute("min") ? this.parseNumberAttr("min", Number.NEGATIVE_INFINITY) : Number.NEGATIVE_INFINITY;
    }

    private getMax(): number {
        return this.hasAttribute("max") ? this.parseNumberAttr("max", Number.POSITIVE_INFINITY) : Number.POSITIVE_INFINITY;
    }

    private clamp(value: number): number {
        const min = this.getMin();
        const max = this.getMax();
        return Math.min(max, Math.max(min, value));
    }

    private getStyles(): string {
        return `
      .qty {
        display: inline-flex;
        align-items: stretch;
        border: 1px solid #c9cccf;
        border-radius: 8px;
        overflow: hidden;
        font-family: sans-serif;
      }

      .btn {
        appearance: none;
        border: 0;
        background: #e9ecef;
        color: #111519;
        width: 2.5rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 1.25rem;
        line-height: 1;
        user-select: none;
        transition: background 0.15s ease;
      }

      .btn:hover {
        background: #c9cccf;
      }

      .btn:disabled {
        opacity: 0.55;
        cursor: not-allowed;
      }

      .input {
        width: 3.25rem;
        border: 0;
        outline: none;
        text-align: center;
        font-size: 1rem;
        padding: 0 0.25rem;
        background: #fff;
        color: #111519;
      }

      /* Remove number input spinners (best-effort across engines) */
      .input::-webkit-outer-spin-button,
      .input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .input[type=number] {
        -moz-appearance: textfield;
      }
    `;
    }
}

customElements.define("ind-quantity-selector", IndQuantitySelector);
