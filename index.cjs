'use strict';var s=class extends HTMLElement{constructor(){super();this._initialized=false;this.shadow=this.attachShadow({mode:"open"});}connectedCallback(){this._initialized||(this.render(),this._initialized=true);}cleanShadow(){for(;this.shadow.firstChild;)this.shadow.removeChild(this.shadow.firstChild);}injectStyles(t){let o=document.createElement("style");o.textContent=t,this.shadow.appendChild(o);}emit(t,o){this.dispatchEvent(new CustomEvent(t,{detail:o,bubbles:true,composed:true}));}getAttr(t,o=""){return this.getAttribute(t)||o}getAttrArray(t){let o=this.getAttribute(t)||null;if(o)try{return JSON.parse(o)}catch{return []}return []}hasAttr(t){return this.hasAttribute(t)&&this.getAttribute(t)!=="false"}};var c=class extends s{constructor(){super();}render(){this.injectStyles(this.getStyles());let e=document.createElement("div");e.className="application";let t=document.createElement("slot");t.name="header";let o=document.createElement("div");o.className="main-container";let n=document.createElement("slot");n.name="sidebar";let a=document.createElement("div");a.className="main-contents";let i=document.createElement("slot");a.appendChild(i),o.appendChild(n),o.appendChild(a),e.appendChild(t),e.appendChild(o),this.shadow.appendChild(e);}getStyles(){return `
      :host {
        display: flex;
        flex-direction: column;
      }

      .application {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        border: 0;
        overflow-x: hidden;
      }

      .main-container {
        display: flex;
        height: 100vh;
        flex-direction: row;
        overflow: hidden;
      }
      
      .main-contents {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 0 1rem;
        overflow-y: scroll;
      }
      `}};customElements.define("ind-application",c);var L={plus:f,minus:x,close:w,check:y,"chevron-right":k,"chevron-left":E,search:C,trash:S,edit:z,download:I};function v(r,e="md"){let t=L[r];return t?t(e):""}var M={sm:16,md:20,lg:24,xl:48,xxl:64};function l(r="md"){return M[r]}function f(r="md"){let e=l(r);return `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`}function x(r="md"){let e=l(r);return `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/></svg>`}function w(r="md"){let e=l(r);return `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`}function y(r="md"){let e=l(r);return `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`}function k(r="md"){let e=l(r);return `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>`}function E(r="md"){let e=l(r);return `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>`}function C(r="md"){let e=l(r);return `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`}function S(r="md"){let e=l(r);return `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`}function z(r="md"){let e=l(r);return `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`}function I(r="md"){let e=l(r);return `<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`}var m=class extends s{constructor(){super();}isDisabled(){return this._button?this._button.disabled:false}setDisabled(e){this._button&&(this._button.disabled=e);}static get observedAttributes(){return ["disabled","icon","variant"]}attributeChangedCallback(e,t,o){e&&t!==o&&this.render();}render(){this.cleanShadow(),this.injectStyles(this.getStyles()),this._button=document.createElement("button");let e=this.getAttr("variant","primary");this._button.className=`btn btn-${e}`;let t=this.getAttr("icon"),o=this.extractIcon(t);o&&this._button.appendChild(o);let n=document.createElement("slot");this._button.appendChild(n),this._button.disabled=this.hasAttr("disabled"),this.shadow.appendChild(this._button),this.attachEventListeners();}attachEventListeners(){this._button&&this._button.addEventListener("click",e=>{this.dispatchEvent(new CustomEvent("button-click-event",{detail:{originalEvent:e},bubbles:true,composed:true}));});}extractIcon(e){let t=v(e,"sm");if(t){let o=document.createElement("span");return o.className="btn-icon",o.innerHTML=t,o}return null}getStyles(){return `
      .btn {
        display: flex;
        border: none;
        cursor: pointer;
        font-family: var(--font-sans);
        font-size: var(--font-size-base);
        font-weight: var(--font-medium);
        transition: all 0.2s ease;
        align-items: center;
        padding: 0.5rem 1rem;
      }
      
      .btn:focus {
        outline: 0.125rem solid var(--outline-color);
        outline-offset: 0.125rem;
      }

      .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .btn-primary {
        background-color: var(--primary-color);
        color: var(--base-color); 
      }
      
      .btn-primary:hover {
        background-color: var(--primary-hover-color);
      }
      
      .btn-secondary {
        background-color: var(--secondary-color);
        color: var(--base-reverse-color);
      }
      
      .btn-secondary:hover {
        background-color: var(--secondary-hover-color);
      }
      
      .btn-success {
        background-color: var(--success-color);
        color: var(--base-color); 
      }
      
      .btn-success:hover {
        background-color: var(--success-hover-color);
      }
      
      .btn-info {
        background-color: var(--info-color);
        color: var(--base-color);
      }
      
      .btn-info:hover {
        background-color: var(--info-hover-color);
      }
      
      .btn-warn {
        background-color: var(--warn-color);
        color: var(--base-reverse-color);
      }
      
      .btn-warn:hover {
        background-color: var(--warn-hover-color);
      }
      
      .btn-danger {
        background-color: var(--danger-color);
        color: var(--base-color);
      }
      
      .btn-danger:hover {
        background-color: var(--danger-hover-color);
      }
      
      .btn-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.25rem 0 -0.25rem;
      }
    `}};customElements.define("ind-button",m);var p=class extends s{constructor(){super();}render(){this.injectStyles(this.getStyles());let e=document.createElement("div");e.className="card";let t=document.createElement("div");t.className="card-header";let o=document.createElement("slot");o.name="header",t.appendChild(o);let n=document.createElement("div");n.className="card-body";let a=document.createElement("slot");n.appendChild(a);let i=document.createElement("div");i.className="card-footer";let d=document.createElement("slot");d.name="footer",i.appendChild(d),e.appendChild(t),e.appendChild(n),e.appendChild(i),this.shadow.appendChild(e);}getStyles(){return `
      .card {
        display: flex;
        flex-direction: column;
        color: var(--base-text-color);
        background: var(--base-color);
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid var(--border-color);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .card:hover {
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      }

      .card-header {
        padding: 1rem;
        font-size: var(--font-size-xl);
        font-weight: bold;
        border-bottom: 1px solid var(--border-color);
      }
      
      .card-body {
        display: flex;
        padding: 1rem;
        flex-grow: 1;
      }

      .card-footer {
        display: flex;
        flex-direction: row;
        padding: 1rem;
        border-top: 1px solid var(--border-color);
        justify-content: end;
        gap: 0.5rem;
      }
      `}};customElements.define("ind-card",p);var h=class extends s{constructor(){super();}render(){this.injectStyles(this.getStyles());let e=document.createElement("div");e.className="header";let t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e);}getStyles(){return `
      .header {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 1rem;
        padding: 0.5rem 1rem;
        color: var(--base-text-color);
        background: var(--base-color);
        align-items: center;
        border-radius: 0rem;
        border-bottom: 1px solid var(--border-color);
      }
      `}};customElements.define("ind-header",h);var g=class extends s{constructor(){super();this._items=[];}static get observedAttributes(){return ["items"]}render(){this._items=this.getAttrArray("items"),this.injectStyles(this.getStyles());let t=document.createElement("div");t.className="sidebar";let o=document.createElement("ul");this._items.map(n=>{let a=document.createElement("li"),i=document.createElement("a");i.href=n.link,i.innerText=n.label,a.appendChild(i),o.appendChild(a);}),t.appendChild(o),this.shadow.appendChild(t);}getStyles(){return `
      .sidebar {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        height: 100%;
        padding: 0;
        color: var(--base-text-color);
        background: var(--base-color);
        align-items: center;
        border-radius: 0rem;
        border-right: 1px solid var(--border-color);
      }
      
      .sidebar ul {
        height: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
      }
      
      .sidebar a {
        display: block;
        color: var(--base-text-color);
        text-decoration: none;
        font-size: var(--text-base);
        padding: 0.5rem 1rem;
      }
      
      .sidebar a:hover {
        background: var(--secondary-color);
      }
      `}};customElements.define("ind-sidebar",g);var u=class extends s{constructor(){super();}isChecked(){return this._toggle?this._toggle.checked:false}isDisabled(){return this._toggle?this._toggle.disabled:false}setChecked(e){this._toggle&&(this._toggle.checked=e);}setDisabled(e){this._toggle&&(this._toggle.disabled=e);}static get observedAttributes(){return ["checked","disabled","label","variant"]}attributeChangedCallback(e,t,o){e&&t!==o&&this.render();}render(){this.cleanShadow();let e=this.getAttr("checked","false")==="true",t=this.hasAttr("disabled"),o=this.getAttr("label",""),n=this.getAttr("variant","primary");this.injectStyles(this.getStyles()),this._toggle=document.createElement("input"),this._toggle.type="checkbox",this._toggle.checked=e,this._toggle.disabled=t;let a=document.createElement("span");a.className=`slider  ${n}`;let i=document.createElement("label");i.className="switch",i.appendChild(this._toggle),i.appendChild(a);let d=document.createElement("div");if(d.className="container",d.appendChild(i),o){let b=document.createElement("span");b.className="label",b.textContent=o,d.appendChild(b);}this.shadow.appendChild(d),this.attachEventListeners();}attachEventListeners(){this._toggle&&this._toggle.addEventListener("change",e=>{this.dispatchEvent(new CustomEvent("toggle-switch-toggled",{detail:{originalEvent:e},bubbles:true,composed:true}));});}getStyles(){return `
      :host {
        display: inline-block;
        font-family: var(--font-sans);
      }

      .container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 48px;
        height: 26px;
        cursor: pointer;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--neutral-background-color);
        transition: 0.3s;
        border-radius: 2.5rem;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 1.25rem;
        width: 1.25rem;
        left: 0.188rem;
        bottom: 0.188rem;
        background-color: white;
        transition: 0.3s;
        border-radius: 50%;
      }

      input:checked +.slider.primary {
        background-color: var(--primary-color);
      }
      
      input:checked +.slider.secondary {
        background-color: var(--secondary-color);
      }
      
      .slider.secondary:before {
        background: var(--secondary-reverse-color);
      }
      
      input:checked +.slider.success {
        background-color: var(--success-color);
      }
      
      input:checked +.slider.info {
        background-color: var(--info-color);
      }
      
      input:checked +.slider.warn {
        background-color: var(--warn-color);
      }
      
      input:checked +.slider.danger {
        background-color: var(--danger-color);
      }

      input:focus + .slider {
        outline: 0.125rem solid var(--outline-color);
        outline-offset: 0.125rem;
      }

      input:checked + .slider:before {
        transform: translateX(1.375rem);
      }

      input:disabled + .slider {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .switch:has(input:disabled) {
        cursor: not-allowed;
      }

      .label {
        font-size: var(--font-size-sm);
        color: #333;
        user-select: none;
      }

      :host([disabled]) .label {
        color: #999;
      }
    `}};customElements.define("ind-toggle-switch",u);exports.IndApplication=c;exports.IndButton=m;exports.IndCard=p;exports.IndHeader=h;exports.IndSidebar=g;exports.IndToggleSwitch=u;exports.getIconByName=v;exports.indIconCheck=y;exports.indIconChevronLeft=E;exports.indIconChevronRight=k;exports.indIconClose=w;exports.indIconDownload=I;exports.indIconEdit=z;exports.indIconMinus=x;exports.indIconPlus=f;exports.indIconSearch=C;exports.indIconTrash=S;//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map