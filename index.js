var l=class extends HTMLElement{constructor(){super();this._initialized=false;this.shadow=this.attachShadow({mode:"open"});}connectedCallback(){this._initialized||(this.render(),this._initialized=true);}cleanShadow(){for(;this.shadow.firstChild;)this.shadow.removeChild(this.shadow.firstChild);}injectStyles(e){let t=document.createElement("style");t.textContent=e,this.shadow.appendChild(t);}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:true,composed:true}));}getAttr(e,t=""){return this.getAttribute(e)||t}getAttrArray(e){let t=this.getAttribute(e)||null;if(t)try{return JSON.parse(t)}catch{return []}return []}hasAttr(e){return this.hasAttribute(e)&&this.getAttribute(e)!=="false"}};var b=class extends l{constructor(){super();}render(){this.injectStyles(this.getStyles());let o=document.createElement("div");o.className="application";let e=document.createElement("slot");e.name="header";let t=document.createElement("div");t.className="main-container";let r=document.createElement("slot");r.name="sidebar";let i=document.createElement("div");i.className="main-contents";let s=document.createElement("slot");i.appendChild(s),t.appendChild(r),t.appendChild(i),o.appendChild(e),o.appendChild(t),this.shadow.appendChild(o);}getStyles(){return `
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
      `}};customElements.define("ind-application",b);var $={plus:E,minus:C,close:S,check:z,"chevron-right":L,"chevron-left":I,search:M,trash:D,edit:A,download:T};function _(n,o="md"){let e=$[n];return e?e(o):""}var B={sm:16,md:20,lg:24,xl:48,xxl:64};function d(n="md"){return B[n]}function E(n="md"){let o=d(n);return `<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`}function C(n="md"){let o=d(n);return `<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/></svg>`}function S(n="md"){let o=d(n);return `<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`}function z(n="md"){let o=d(n);return `<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`}function L(n="md"){let o=d(n);return `<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>`}function I(n="md"){let o=d(n);return `<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>`}function M(n="md"){let o=d(n);return `<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`}function D(n="md"){let o=d(n);return `<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`}function A(n="md"){let o=d(n);return `<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`}function T(n="md"){let o=d(n);return `<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`}var v=class extends l{constructor(){super();this._isDisabled=false;this._iconName=null;this._variant="primary";}isDisabled(){return this._button?this._button.disabled:false}setDisabled(e){this._button&&(this._button.disabled=e);}static get observedAttributes(){return ["disabled","icon","variant"]}attributeChangedCallback(e,t,r){if(t!==r){switch(e){case "disabled":this._isDisabled=r=="true";break;case "icon":this._iconName=r;break;case "variant":this._variant=r||"primary";break}this.render();}}render(){this.cleanShadow(),this.injectStyles(this.getStyles()),this._button=document.createElement("button"),this._button.className=`btn btn-${this._variant}`;let e=this.extractIcon(this._iconName||"");e&&this._button.appendChild(e);let t=document.createElement("slot");this._button.appendChild(t),this._button.disabled=this._isDisabled,this.shadow.appendChild(this._button),this.attachEventListeners();}attachEventListeners(){this._button&&this._button.addEventListener("click",e=>{this.dispatchEvent(new CustomEvent("button-click-event",{detail:{originalEvent:e},bubbles:true,composed:true}));});}extractIcon(e){let t=_(e,"sm");if(t){let r=document.createElement("span");return r.className="btn-icon",r.innerHTML=t,r}return null}getStyles(){return `
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
    `}};customElements.define("ind-button",v);var f=class extends l{constructor(){super();}render(){this.injectStyles(this.getStyles());let o=document.createElement("div");o.className="card";let e=document.createElement("div");e.className="card-header";let t=document.createElement("slot");t.name="header",e.appendChild(t);let r=document.createElement("div");r.className="card-body";let i=document.createElement("slot");r.appendChild(i);let s=document.createElement("div");s.className="card-footer";let c=document.createElement("slot");c.name="footer",s.appendChild(c),o.appendChild(e),o.appendChild(r),o.appendChild(s),this.shadow.appendChild(o);}getStyles(){return `
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
      `}};customElements.define("ind-card",f);var x=class extends l{constructor(){super();}render(){this.injectStyles(this.getStyles());let o=document.createElement("div");o.className="header";let e=document.createElement("slot");o.appendChild(e),this.shadow.appendChild(o);}getStyles(){return `
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
      `}};customElements.define("ind-header",x);var g="http://www.w3.org/2000/svg",w=class extends l{constructor(){super();this._isDisabled=false;this._isDragging=false;this._value=0;this._min=0;this._max=100;this._showGrid=false;this._symbol="%";this._size=140;this.onPointerDown=e=>{let t=e;t.preventDefault(),t.target.setPointerCapture?.(t.pointerId),this._isDragging=true,this.updateValueFromPointer(t);};this.onPointerMove=e=>{!this._isDragging||this._isDisabled||(this.updateValueFromPointer(e),this.render());};this.onPointerUp=()=>{this._isDragging=false;};}isDisabled(){return this._isDisabled}setDisabled(e){this._isDisabled=e;}static get observedAttributes(){return ["disabled","grid","min","max","value","symbol","size"]}attributeChangedCallback(e,t,r){if(t!==r){switch(e){case "disabled":this._isDisabled=r=="true";break;case "grid":this._showGrid=r=="true";break;case "min":this._min=parseFloat(r)||0;break;case "max":this._max=parseFloat(r)||100;break;case "size":this._size=parseFloat(r)||140;break;case "symbol":this._symbol=r||"%";break;case "value":this._value=this.normalizeInputValue(parseFloat(r)||0);break}this.render();}}disconnectedCallback(){this._knob&&(this._knob.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointermove",this.onPointerMove));}render(){this.cleanShadow(),this.injectStyles(this.getStyles());let e=document.createElement("div");e.style.width=`${this._size}px`,e.style.height=`${this._size}px`,this._knob=document.createElementNS(g,"svg");let t=140;this._knob.setAttribute("viewBox","0 0 "+t+" "+t),this._knob.setAttribute("width",String(t)),this._knob.setAttribute("height",String(t)),this._isDisabled&&this._knob.setAttribute("class","disabled");let i=100/2,s=i-5,p=(135+this._value*270)*(Math.PI/180),a=i+s*Math.cos(p),F=i+s*Math.sin(p),u=document.createElementNS(g,"path");u.setAttribute("d","M 78.28 78.28 A 45 45 0 1 0 21.72 78.28"),u.setAttribute("transform","translate(20 27)"),u.setAttribute("class","dial"),this._knob.appendChild(u);let m=document.createElementNS(g,"text");m.setAttribute("x","71"),m.setAttribute("y","76"),m.setAttribute("text-anchor","middle"),m.setAttribute("font-size","16px");let H=Math.round(this._value*(this._max-this._min)+this._min),N=document.createTextNode(`${H}${this._symbol}`);m.appendChild(N),this._knob.appendChild(m),this._showGrid&&(this._knob.appendChild(this.createLine(70,5,70,15)),this._knob.appendChild(this.createLine(70,5,70,15,49,21,45)),this._knob.appendChild(this.createLine(70,5,70,15,65,65,90)),this._knob.appendChild(this.createLine(70,5,70,15,38,107,-45)),this._knob.appendChild(this.createLine(70,5,70,15,-38,107,45)),this._knob.appendChild(this.createLine(70,5,70,15,-65,65,-90)),this._knob.appendChild(this.createLine(70,5,70,15,-49,21,-45)));let h=document.createElementNS(g,"circle");h.setAttribute("cx",`${a}`),h.setAttribute("cy",`${F}`),h.setAttribute("r","10"),h.setAttribute("transform","translate(20 20)"),h.setAttribute("class","pointer"),this._knob.appendChild(h),e.appendChild(this._knob),this.shadow.appendChild(e),this.attachEventListeners();}normalizeInputValue(e){if(this._min==this._max)return this._min;let t=(e-this._min)/(this._max-this._min);return Math.max(0,Math.min(1,t))}createLine(e,t,r,i,s=0,c=0,p=0){let a=document.createElementNS(g,"line");return a.setAttribute("x1",String(e)),a.setAttribute("y1",String(t)),a.setAttribute("x2",String(r)),a.setAttribute("y2",String(i)),a.setAttribute("transform",`translate(${s} ${c}) rotate(${p}, ${e}, ${t})`),a.setAttribute("class","line"),a}updateValueFromPointer(e){if(this._knob){let t=this._knob.getBoundingClientRect(),r=t.left+t.width/2,i=t.top+t.height/2,s=e.clientX-r,c=e.clientY-i,a=Math.atan2(c,s)*(180/Math.PI)-135;a<0&&(a+=360),a>270&&(a=a<315?270:0),this._value=a/270;}}attachEventListeners(){this._knob&&(this._knob.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("pointermove",this.onPointerMove));}getStyles(){return `
      :host {
        display: inline-block;
        touch-action: none;
        cursor: pointer;
      }

      svg {
        width: 100%;
        height: 100%;
        overflow: visible;
      }

      svg.disabled {
        cursor: not-allowed;
      }
      
      svg.disabled .dial {
        stroke: var(--secondary-reverse-color);
      }

      .dial {
        fill: none;
        stroke: var(--primary-color);
        stroke-width: 10;
      }

      .line {
        fill: none;
        stroke: var(--primary-color);
        stroke-width: 3;
      }

      .pointer {
        fill: var(--base-color);
        stroke: var(--primary-color);
        stroke-width: 2;
        filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
      }
    `}};customElements.define("ind-knob",w);var k=class extends l{constructor(){super();this._items=[];}static get observedAttributes(){return ["items"]}render(){this._items=this.getAttrArray("items"),this.injectStyles(this.getStyles());let e=document.createElement("div");e.className="sidebar";let t=document.createElement("ul");this._items.map(r=>{let i=document.createElement("li"),s=document.createElement("a");s.href=r.link,s.innerText=r.label,i.appendChild(s),t.appendChild(i);}),e.appendChild(t),this.shadow.appendChild(e);}getStyles(){return `
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
      `}};customElements.define("ind-sidebar",k);var y=class extends l{constructor(){super();this._isChecked=false;this._isDisabled=false;this._label=null;this._variant="primary";}isChecked(){return this._toggle?this._toggle.checked:false}isDisabled(){return this._toggle?this._toggle.disabled:false}setChecked(e){this._toggle&&(this._toggle.checked=e);}setDisabled(e){this._toggle&&(this._toggle.disabled=e);}static get observedAttributes(){return ["checked","disabled","label","variant"]}attributeChangedCallback(e,t,r){if(t!==r){switch(e){case "checked":this._isChecked=r=="true";break;case "disabled":this._isDisabled=r=="true";break;case "label":this._label=r;break;case "variant":this._variant=r||"primary";break}this.render();}}render(){this.cleanShadow(),this.injectStyles(this.getStyles()),this._toggle=document.createElement("input"),this._toggle.type="checkbox",this._toggle.checked=this._isChecked,this._toggle.disabled=this._isDisabled;let e=document.createElement("span");e.className=`slider  ${this._variant}`;let t=document.createElement("label");t.className="switch",t.appendChild(this._toggle),t.appendChild(e);let r=document.createElement("div");if(r.className="container",r.appendChild(t),this._label){let i=document.createElement("span");i.className="label",i.textContent=this._label,r.appendChild(i);}this.shadow.appendChild(r),this.attachEventListeners();}attachEventListeners(){this._toggle&&this._toggle.addEventListener("change",e=>{this.dispatchEvent(new CustomEvent("toggle-switch-toggled",{detail:{originalEvent:e},bubbles:true,composed:true}));});}getStyles(){return `
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
    `}};customElements.define("ind-toggle-switch",y);export{b as IndApplication,v as IndButton,f as IndCard,x as IndHeader,w as IndKnob,k as IndSidebar,y as IndToggleSwitch,_ as getIconByName,z as indIconCheck,I as indIconChevronLeft,L as indIconChevronRight,S as indIconClose,T as indIconDownload,A as indIconEdit,C as indIconMinus,E as indIconPlus,M as indIconSearch,D as indIconTrash};//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map