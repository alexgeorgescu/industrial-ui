var n=class extends HTMLElement{constructor(){super();this._initialized=false;this.shadow=this.attachShadow({mode:"open"});}connectedCallback(){this._initialized||(this.render(),this._initialized=true);}injectStyles(e){let o=document.createElement("style");o.textContent=e,this.shadow.appendChild(o);}emit(e,o){this.dispatchEvent(new CustomEvent(e,{detail:o,bubbles:true,composed:true}));}getAttr(e,o=""){return this.getAttribute(e)||o}getAttrArray(e){let o=this.getAttribute(e)||null;if(o)try{return JSON.parse(o)}catch{return []}return []}hasAttr(e){return this.hasAttribute(e)&&this.getAttribute(e)!=="false"}};var d=class extends n{constructor(){super(),this.attachEventListeners();}render(){this.injectStyles(this.getStyles());let t=document.createElement("div");t.className="application";let e=document.createElement("slot");e.name="header";let o=document.createElement("div");o.className="main-container";let r=document.createElement("slot");r.name="sidebar";let i=document.createElement("slot");o.appendChild(r),o.appendChild(i),t.appendChild(e),t.appendChild(o),this.shadow.appendChild(t);}attachEventListeners(){this.addEventListener("click",t=>{console.log("Application clicked",t);});}getStyles(){return `
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
        overflow-y: scroll;
      }
      `}};customElements.define("ind-application",d);var l=class extends n{constructor(){super(),this.attachEventListeners();}static get observedAttributes(){return ["variant","disabled"]}attributeChangedCallback(t,e,o){t&&e!==o&&this.render();}render(){for(;this.shadow.firstChild;)this.shadow.removeChild(this.shadow.firstChild);let t=this.getAttr("variant","primary"),e=this.hasAttr("disabled");this.injectStyles(this.getStyles());let o=document.createElement("button"),r=document.createElement("slot");o.className=`btn btn-${t}`,o.appendChild(r),o.disabled=e,this.shadow.appendChild(o);}attachEventListeners(){this.addEventListener("click",t=>{console.log("Button clicked",t);});}getStyles(){return `
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
    `}};customElements.define("ind-button",l);var c=class extends n{constructor(){super(),this.attachEventListeners();}render(){this.injectStyles(this.getStyles());let t=document.createElement("div");t.className="card";let e=document.createElement("div");e.className="card-header";let o=document.createElement("slot");o.name="header",e.appendChild(o);let r=document.createElement("div");r.className="card-body";let i=document.createElement("slot");r.appendChild(i);let a=document.createElement("div");a.className="card-footer";let g=document.createElement("slot");g.name="footer",a.appendChild(g),t.appendChild(e),t.appendChild(r),t.appendChild(a),this.shadow.appendChild(t);}attachEventListeners(){this.addEventListener("click",t=>{console.log("Card clicked",t);});}getStyles(){return `
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
        padding: 1rem;
        border-top: 1px solid var(--border-color);
        gap: 0.5rem;
      }
      `}};customElements.define("ind-card",c);var m=class extends n{constructor(){super(),this.attachEventListeners();}render(){this.injectStyles(this.getStyles());let t=document.createElement("div");t.className="header";let e=document.createElement("slot");t.appendChild(e),this.shadow.appendChild(t);}attachEventListeners(){this.addEventListener("click",t=>{console.log("Header clicked",t);});}getStyles(){return `
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
      `}};customElements.define("ind-header",m);var p=class extends n{constructor(){super();this._items=[];this.attachEventListeners();}static get observedAttributes(){return ["items"]}render(){this._items=this.getAttrArray("items"),this.injectStyles(this.getStyles());let e=document.createElement("div");e.className="sidebar";let o=document.createElement("ul");this._items.map(r=>{let i=document.createElement("li"),a=document.createElement("a");a.href=r.link,a.innerText=r.label,i.appendChild(a),o.appendChild(i);}),e.appendChild(o),this.shadow.appendChild(e);}attachEventListeners(){this.addEventListener("click",e=>{console.log("Sidebar clicked",e);});}getStyles(){return `
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
      `}};customElements.define("ind-sidebar",p);export{d as IndApplication,l as IndButton,c as IndCard,m as IndHeader,p as IndSidebar};//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map