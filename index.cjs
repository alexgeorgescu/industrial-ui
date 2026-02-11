'use strict';var n=class extends HTMLElement{constructor(){super();this._initialized=false;this.shadow=this.attachShadow({mode:"open"});}connectedCallback(){this._initialized||(this.render(),this._initialized=true);}injectStyles(e){let t=document.createElement("style");t.textContent=e,this.shadow.appendChild(t);}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:true,composed:true}));}getAttr(e,t=""){return this.getAttribute(e)||t}getAttrArray(e){let t=this.getAttribute(e)||null;if(t)try{return JSON.parse(t)}catch{return []}return []}hasAttr(e){return this.hasAttribute(e)&&this.getAttribute(e)!=="false"}};var d=class extends n{constructor(){super();}render(){this.injectStyles(this.getStyles());let o=document.createElement("div");o.className="application";let e=document.createElement("slot");e.name="header";let t=document.createElement("div");t.className="main-container";let i=document.createElement("slot");i.name="sidebar";let a=document.createElement("div");a.className="main-contents";let r=document.createElement("slot");a.appendChild(r),t.appendChild(i),t.appendChild(a),o.appendChild(e),o.appendChild(t),this.shadow.appendChild(o);}getStyles(){return `
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
        overflow-y: scroll;
      }
      `}};customElements.define("ind-application",d);var c=class extends n{constructor(){super();}static get observedAttributes(){return ["variant","disabled"]}attributeChangedCallback(o,e,t){o&&e!==t&&this.render();}render(){for(;this.shadow.firstChild;)this.shadow.removeChild(this.shadow.firstChild);let o=this.getAttr("variant","primary"),e=this.hasAttr("disabled");this.injectStyles(this.getStyles()),this._button=document.createElement("button");let t=document.createElement("slot");this._button.className=`btn btn-${o}`,this._button.appendChild(t),this._button.disabled=e,this.shadow.appendChild(this._button),this.attachEventListeners();}attachEventListeners(){this._button&&this._button.addEventListener("click",o=>{console.log("Button clicked",o);});}getStyles(){return `
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
    `}};customElements.define("ind-button",c);var m=class extends n{constructor(){super();}render(){this.injectStyles(this.getStyles());let o=document.createElement("div");o.className="card";let e=document.createElement("div");e.className="card-header";let t=document.createElement("slot");t.name="header",e.appendChild(t);let i=document.createElement("div");i.className="card-body";let a=document.createElement("slot");i.appendChild(a);let r=document.createElement("div");r.className="card-footer";let s=document.createElement("slot");s.name="footer",r.appendChild(s),o.appendChild(e),o.appendChild(i),o.appendChild(r),this.shadow.appendChild(o);}getStyles(){return `
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
      `}};customElements.define("ind-card",m);var p=class extends n{constructor(){super();}render(){this.injectStyles(this.getStyles());let o=document.createElement("div");o.className="header";let e=document.createElement("slot");o.appendChild(e),this.shadow.appendChild(o);}getStyles(){return `
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
      `}};customElements.define("ind-header",p);var h=class extends n{constructor(){super();this._items=[];}static get observedAttributes(){return ["items"]}render(){this._items=this.getAttrArray("items"),this.injectStyles(this.getStyles());let e=document.createElement("div");e.className="sidebar";let t=document.createElement("ul");this._items.map(i=>{let a=document.createElement("li"),r=document.createElement("a");r.href=i.link,r.innerText=i.label,a.appendChild(r),t.appendChild(a);}),e.appendChild(t),this.shadow.appendChild(e);}getStyles(){return `
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
        padding: 0.5rem 1rem;
      }
      
      .sidebar a:hover {
        background: var(--secondary-color);
      }
      `}};customElements.define("ind-sidebar",h);var g=class extends n{constructor(){super();}static get observedAttributes(){return ["checked","disabled","label","variant"]}attributeChangedCallback(o,e,t){o&&e!==t&&this.render();}render(){for(;this.shadow.firstChild;)this.shadow.removeChild(this.shadow.firstChild);let o=this.getAttr("checked","false")==="true",e=this.hasAttr("disabled"),t=this.getAttr("label",""),i=this.getAttr("variant","primary");this.injectStyles(this.getStyles()),this._toggle=document.createElement("input"),this._toggle.type="checkbox",this._toggle.checked=o,this._toggle.disabled=e;let a=document.createElement("span");a.className=`slider  ${i}`;let r=document.createElement("label");r.className="switch",r.appendChild(this._toggle),r.appendChild(a);let s=document.createElement("div");if(s.className="container",s.appendChild(r),t){let b=document.createElement("span");b.className="label",b.textContent=t,s.appendChild(b);}this.shadow.appendChild(s),this.attachEventListeners();}attachEventListeners(){this._toggle&&this._toggle.addEventListener("change",o=>{console.log("Toggle switch changed",o);});}getStyles(){return `
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
    `}};customElements.define("ind-toggle-switch",g);exports.IndApplication=d;exports.IndButton=c;exports.IndCard=m;exports.IndHeader=p;exports.IndSidebar=h;exports.IndToggleSwitch=g;//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map