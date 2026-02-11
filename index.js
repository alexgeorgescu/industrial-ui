var n=class extends HTMLElement{constructor(){super();this._initialized=false;this.shadow=this.attachShadow({mode:"open"});}connectedCallback(){this._initialized||(this.render(),this._initialized=true);}cleanShadow(){for(;this.shadow.firstChild;)this.shadow.removeChild(this.shadow.firstChild);}injectStyles(t){let o=document.createElement("style");o.textContent=t,this.shadow.appendChild(o);}emit(t,o){this.dispatchEvent(new CustomEvent(t,{detail:o,bubbles:true,composed:true}));}getAttr(t,o=""){return this.getAttribute(t)||o}getAttrArray(t){let o=this.getAttribute(t)||null;if(o)try{return JSON.parse(o)}catch{return []}return []}hasAttr(t){return this.hasAttribute(t)&&this.getAttribute(t)!=="false"}};var d=class extends n{constructor(){super();}render(){this.injectStyles(this.getStyles());let e=document.createElement("div");e.className="application";let t=document.createElement("slot");t.name="header";let o=document.createElement("div");o.className="main-container";let i=document.createElement("slot");i.name="sidebar";let a=document.createElement("div");a.className="main-contents";let r=document.createElement("slot");a.appendChild(r),o.appendChild(i),o.appendChild(a),e.appendChild(t),e.appendChild(o),this.shadow.appendChild(e);}getStyles(){return `
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
      `}};customElements.define("ind-application",d);var c=class extends n{constructor(){super();}isDisabled(){return this._button?this._button.disabled:false}setDisabled(e){this._button&&(this._button.disabled=e);}static get observedAttributes(){return ["disabled","variant"]}attributeChangedCallback(e,t,o){e&&t!==o&&this.render();}render(){this.cleanShadow();let e=this.hasAttr("disabled"),t=this.getAttr("variant","primary");this.injectStyles(this.getStyles()),this._button=document.createElement("button");let o=document.createElement("slot");this._button.className=`btn btn-${t}`,this._button.appendChild(o),this._button.disabled=e,this.shadow.appendChild(this._button),this.attachEventListeners();}attachEventListeners(){this._button&&this._button.addEventListener("click",e=>{this.dispatchEvent(new CustomEvent("button-click-event",{detail:{originalEvent:e},bubbles:true,composed:true}));});}getStyles(){return `
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
    `}};customElements.define("ind-button",c);var m=class extends n{constructor(){super();}render(){this.injectStyles(this.getStyles());let e=document.createElement("div");e.className="card";let t=document.createElement("div");t.className="card-header";let o=document.createElement("slot");o.name="header",t.appendChild(o);let i=document.createElement("div");i.className="card-body";let a=document.createElement("slot");i.appendChild(a);let r=document.createElement("div");r.className="card-footer";let s=document.createElement("slot");s.name="footer",r.appendChild(s),e.appendChild(t),e.appendChild(i),e.appendChild(r),this.shadow.appendChild(e);}getStyles(){return `
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
      `}};customElements.define("ind-card",m);var p=class extends n{constructor(){super();}render(){this.injectStyles(this.getStyles());let e=document.createElement("div");e.className="header";let t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e);}getStyles(){return `
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
      `}};customElements.define("ind-header",p);var g=class extends n{constructor(){super();this._items=[];}static get observedAttributes(){return ["items"]}render(){this._items=this.getAttrArray("items"),this.injectStyles(this.getStyles());let t=document.createElement("div");t.className="sidebar";let o=document.createElement("ul");this._items.map(i=>{let a=document.createElement("li"),r=document.createElement("a");r.href=i.link,r.innerText=i.label,a.appendChild(r),o.appendChild(a);}),t.appendChild(o),this.shadow.appendChild(t);}getStyles(){return `
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
      `}};customElements.define("ind-sidebar",g);var h=class extends n{constructor(){super();}isChecked(){return this._toggle?this._toggle.checked:false}isDisabled(){return this._toggle?this._toggle.disabled:false}setChecked(e){this._toggle&&(this._toggle.checked=e);}setDisabled(e){this._toggle&&(this._toggle.disabled=e);}static get observedAttributes(){return ["checked","disabled","label","variant"]}attributeChangedCallback(e,t,o){e&&t!==o&&this.render();}render(){this.cleanShadow();let e=this.getAttr("checked","false")==="true",t=this.hasAttr("disabled"),o=this.getAttr("label",""),i=this.getAttr("variant","primary");this.injectStyles(this.getStyles()),this._toggle=document.createElement("input"),this._toggle.type="checkbox",this._toggle.checked=e,this._toggle.disabled=t;let a=document.createElement("span");a.className=`slider  ${i}`;let r=document.createElement("label");r.className="switch",r.appendChild(this._toggle),r.appendChild(a);let s=document.createElement("div");if(s.className="container",s.appendChild(r),o){let b=document.createElement("span");b.className="label",b.textContent=o,s.appendChild(b);}this.shadow.appendChild(s),this.attachEventListeners();}attachEventListeners(){this._toggle&&this._toggle.addEventListener("change",e=>{this.dispatchEvent(new CustomEvent("toggle-switch-toggled",{detail:{originalEvent:e},bubbles:true,composed:true}));});}getStyles(){return `
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
    `}};customElements.define("ind-toggle-switch",h);export{d as IndApplication,c as IndButton,m as IndCard,p as IndHeader,g as IndSidebar,h as IndToggleSwitch};//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map