var ee=["iot-dark-pink","iot-dark-green","iot-light-tomato"],I="industrial-ui.theme",te="iot-dark-pink";function re(t){return t!==null&&ee.includes(t)}function ne(){if(!(typeof window>"u"||typeof localStorage>"u"))try{let t=localStorage.getItem(I);return re(t)?t:void 0}catch{return}}function ie(t){if(!(typeof window>"u"||typeof localStorage>"u"))try{localStorage.setItem(I,t);}catch{}}function M(t){typeof document>"u"||document.documentElement.setAttribute("data-theme",t);}function f(t){M(t),ie(t);}function L(){let t=ne()??te;return M(t),t}var s=class extends HTMLElement{constructor(){super();this._initialized=false;this.shadow=this.attachShadow({mode:"open"});}connectedCallback(){this._initialized||(this.render(),this._initialized=true);}cleanShadow(){for(;this.shadow.firstChild;)this.shadow.removeChild(this.shadow.firstChild);}injectStyles(e){let r=document.createElement("style");r.textContent=e,this.shadow.appendChild(r);}emit(e,r){this.dispatchEvent(new CustomEvent(e,{detail:r,bubbles:true,composed:true}));}getAttr(e,r=""){return this.getAttribute(e)||r}getAttrArray(e){let r=this.getAttribute(e)||null;if(r)try{return JSON.parse(r)}catch{return []}return []}hasAttr(e){return this.hasAttribute(e)&&this.getAttribute(e)!=="false"}};var x=class extends s{constructor(){super();this._template=document.createElement("template");this.defineTemplate();}render(){this.shadow.appendChild(this._template.content.cloneNode(true));}defineTemplate(){this._template.innerHTML=`
        <style>
            :host                       { display: flex; flex-grow: 1; }
            .ind-application            { display: flex; flex-grow: 1; background: var(--base-background-color); }
            .ind-application-container  { display: flex; flex-grow: 1; flex-direction: column; }
        </style>
        <div class="ind-application">
            <slot name="sidebar"></slot>
            <div class="ind-application-container">
                <slot name="menubar"></slot>
                <slot></slot>
            </div>            
        </div>
        `;}};customElements.define("ind-application",x);var oe={about:T,"burger-menu":$,button:D,card:B,check:z,"chevron-left":H,"chevron-right":A,close:N,controller:F,download:j,edit:G,knob:O,industrial:P,"light-bulb":R,menu:U,menubar:K,minus:X,plus:Y,search:q,sidebar:de,switch:J,tile:Q,trash:W};function m(t,i="md",e=1,r="white",n="white"){let o=oe[t],a=se(i),d=le(r,n);return o?o(a,e,d):""}var ae={sm:16,md:20,lg:24,xl:48,xxl:64};function se(t){return ae[t]}function le(t,i){return `
        <defs>
            <linearGradient id="fullGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="0">
                <stop offset="0%" stop-color="${t}" />
                <stop offset="100%" stop-color="${i}" />
            </linearGradient>
        </defs>
    `}function T(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" aria-hidden="true">${e}<circle cx="12" cy="12" r="11"/><line x1="12" y1="6" x2="12" y2="8"/><line x1="12" y1="10" x2="12" y2="18"/></svg>`}function $(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>`}function D(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<rect x="2" y="4" width="20" height="16" rx="4"/></svg>`}function B(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<rect x="2" y="4" width="20" height="16"/><rect x="6" y="8" width="12" height="4" rx="0"/><line x1="6" y1="16" x2="18" y2="16"/></svg>`}function z(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<polyline points="20 6 9 17 4 12"/></svg>`}function H(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<polyline points="15 18 9 12 15 6"/></svg>`}function A(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<polyline points="9 18 15 12 9 6"/></svg>`}function N(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`}function F(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<polygon points="9,5 12,2 15,5"/><polygon points="19,9 22,12 19,15"/><polygon points="15,19 12,22 9,19"/><polygon points="5,15 2,12 5,9"/><circle cx="12" cy="12" r="3"/></svg>`}function j(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`}function G(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`}function P(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" aria-hidden="true">${e}<line x1="0" y1="22" x2="24" y2="22"/><rect x="3" y="8" width="18" height="14"/><rect x="4" y="8" width="16" height="14"/><line x1="8" y1="12" x2="8" y2="18"/><line x1="12" y1="12" x2="12" y2="18"/><line x1="16" y1="12" x2="16" y2="18"/><line x1="14" y1="1" x2="14" y2="8"/><line x1="18" y1="1" x2="18" y2="8"/></svg>`}function O(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<circle cx="12" cy="12" r="9"/><line x1="12" y1="9" x2="12" y2="4"/><circle cx="12" cy="12" r="3"/></svg>`}function R(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<circle cx="12" cy="8" r="7"/><path d="M10 8h4"/><path d="M12 8v6"/><path d="M8 17h8"/><path d="M8 19h8"/><path d="M8 21h8"/><path d="M10 23h4"/></svg>`}function U(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<line x1="5" y1="6" x2="19" y2="6"/><line x1="5" y1="9" x2="19" y2="9"/><line x1="5" y1="12" x2="19" y2="12"/><line x1="5" y1="15" x2="19" y2="15"/><line x1="5" y1="18" x2="19" y2="18"/></svg>`}function K(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<rect x="2" y="6" width="20" height="12" rx="0"/><line x1="5" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="19" y2="10"/><line x1="14" y1="13" x2="19" y2="13"/></svg>`}function X(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<line x1="5" y1="12" x2="19" y2="12"/></svg>`}function Y(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`}function q(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`}function de(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<rect x="6" y="3" width="12" height="18" rx="0"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="13" x2="15" y2="13"/></svg>`}function J(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<rect x="2" y="6" width="20" height="12" rx="4"/><circle cx="8" cy="12" r="3"/></svg>`}function Q(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<rect x="4" y="2" width="16" height="20" rx="4"/></svg>`}function W(t,i,e){return `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="url(#fullGradient)" stroke-width="${i}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`}var w=class extends s{constructor(){super();this._isDisabled=false;this._iconName=null;this._variant="primary";}isDisabled(){return this._button?this._button.disabled:false}setDisabled(e){this._button&&(this._button.disabled=e);}static get observedAttributes(){return ["disabled","icon","variant"]}attributeChangedCallback(e,r,n){if(r!==n){switch(e){case "disabled":this._isDisabled=n=="true";break;case "icon":this._iconName=n;break;case "variant":this._variant=n||"primary";break}this.render();}}render(){this.cleanShadow(),this.injectStyles(this.getStyles()),this._button=document.createElement("button"),this._button.className=`btn btn-${this._variant}`;let e=this.extractIcon(this._iconName||"");e&&this._button.appendChild(e);let r=document.createElement("slot");this._button.appendChild(r),this._button.disabled=this._isDisabled,this.shadow.appendChild(this._button),this.attachEventListeners();}attachEventListeners(){this._button&&this._button.addEventListener("click",e=>{this.dispatchEvent(new CustomEvent("button-click-event",{detail:{originalEvent:e},bubbles:true,composed:true}));});}extractIcon(e){let r=this._variant==="icon"?m(e,"lg",2):m(e,"md",2);if(r){let n=document.createElement("span");return n.className="btn-icon",n.innerHTML=r,n}return null}getStyles(){return `
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
            gap: 0.25rem;
        }
        .btn:focus              { outline: 0.125rem solid var(--base-outline-color); outline-offset: 0.125rem; }
        .btn:disabled           { opacity: 0.6; cursor: not-allowed; }
        .btn-primary            { background-color: var(--base-primary-color); color: var(--base-button-text-color); }
        .btn-primary:hover      { background-color: var(--base-primary-hover-color); }
        .btn-secondary          { background-color: var(--base-secondary-color); color: var(--base-button-text-color); }
        .btn-secondary:hover    { background-color: var(--base-secondary-hover-color); }
        .btn-success            { background-color: var(--base-success-color); color: var(--base-button-text-color); }
        .btn-success:hover      { background-color: var(--base-success-hover-color); }
        .btn-icon               { background-color: transparent; padding: 0.125rem; }
        .btn-info               { background-color: var(--base-info-color); color: var(--base-button-text-color); }
        .btn-info:hover         { background-color: var(--base-info-hover-color); }
        .btn-warn               { background-color: var(--base-warn-color); color: var(--base-button-text-color); }
        .btn-warn:hover         { background-color: var(--base-warn-hover-color); }
        .btn-danger             { background-color: var(--base-danger-color); color: var(--base-button-text-color); }
        .btn-danger:hover       { background-color: var(--base-danger-hover-color); }
        .btn-icon               { display: flex; justify-content: center; align-items: center; margin: 0 0.25rem 0 -0.25rem; }
        .btn-icon.btn-icon      { margin: 0; }
        `}};customElements.define("ind-button",w);var y=class extends s{constructor(){super();}render(){this.injectStyles(this.getStyles()),this._card=document.createElement("div"),this._card.className="card";let i=document.createElement("div");i.className="card-header";let e=document.createElement("slot");e.name="header",i.appendChild(e);let r=document.createElement("div");r.className="card-body";let n=document.createElement("slot");r.appendChild(n);let o=document.createElement("div");o.className="card-footer";let a=document.createElement("slot");a.name="footer",o.appendChild(a),this._card.appendChild(i),this._card.appendChild(r),this._card.appendChild(o),this.shadow.appendChild(this._card);}getStyles(){return `
        .card {
            display: flex;
            flex-direction: column;
            color: var(--base-text-color);
            background: var(--base-surface-color);
            border-radius: 0.5rem;
            overflow: hidden;
            border: 1px solid var(--base-border-color);
            box-shadow: 0 0 0.125rem var(--base-border-color);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
            box-shadow: 0 0 0.5rem var(--base-border-color);
        }
        
        .card-header {
            padding: 1rem;
            font-size: var(--font-size-xl);
            font-weight: bold;
            border-bottom: 1px solid var(--base-border-color);
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
            border-top: 1px solid var(--base-border-color);
            justify-content: end;
            gap: 0.5rem;
        }
        `}};customElements.define("ind-card",y);var g="http://www.w3.org/2000/svg",k=class extends s{constructor(){super();this._isDisabled=false;this._isDragging=false;this._value=0;this._min=0;this._max=100;this._showGrid=false;this._symbol="%";this._size=140;this.onPointerDown=e=>{let r=e;r.preventDefault(),r.target.setPointerCapture?.(r.pointerId),this._isDragging=true,this.updateValueFromPointer(r);};this.onPointerMove=e=>{!this._isDragging||this._isDisabled||(this.updateValueFromPointer(e),this.render());};this.onPointerUp=()=>{this._isDragging=false;};}isDisabled(){return this._isDisabled}setDisabled(e){this._isDisabled=e;}static get observedAttributes(){return ["disabled","grid","min","max","value","symbol","size"]}attributeChangedCallback(e,r,n){if(r!==n){switch(e){case "disabled":this._isDisabled=n=="true";break;case "grid":this._showGrid=n=="true";break;case "min":this._min=parseFloat(n)||0;break;case "max":this._max=parseFloat(n)||100;break;case "size":this._size=parseFloat(n)||140;break;case "symbol":this._symbol=n||"%";break;case "value":this._value=this.normalizeInputValue(parseFloat(n)||0);break}this.render();}}disconnectedCallback(){this._knob&&(this._knob.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointermove",this.onPointerMove));}render(){this.cleanShadow(),this.injectStyles(this.getStyles());let e=document.createElement("div");e.style.width=`${this._size}px`,e.style.height=`${this._size}px`,this._knob=document.createElementNS(g,"svg");let r=140;this._knob.setAttribute("viewBox","0 0 "+r+" "+r),this._knob.setAttribute("width",String(r)),this._knob.setAttribute("height",String(r)),this._isDisabled&&this._knob.setAttribute("class","disabled");let o=100/2,a=o-5,c=(135+this._value*270)*(Math.PI/180),l=o+a*Math.cos(c),p=o+a*Math.sin(c),v=document.createElementNS(g,"path");v.setAttribute("d","M 78.28 78.28 A 45 45 0 1 0 21.72 78.28"),v.setAttribute("transform","translate(20 27)"),v.setAttribute("class","dial"),this._knob.appendChild(v);let u=document.createElementNS(g,"text");u.setAttribute("x","71"),u.setAttribute("y","76"),u.setAttribute("text-anchor","middle"),u.setAttribute("font-size","16px"),u.setAttribute("class","label");let Z=Math.round(this._value*(this._max-this._min)+this._min),V=document.createTextNode(`${Z}${this._symbol}`);u.appendChild(V),this._knob.appendChild(u),this._showGrid&&(this._knob.appendChild(this.createLine(70,5,70,15)),this._knob.appendChild(this.createLine(70,5,70,15,49,21,45)),this._knob.appendChild(this.createLine(70,5,70,15,65,65,90)),this._knob.appendChild(this.createLine(70,5,70,15,38,107,-45)),this._knob.appendChild(this.createLine(70,5,70,15,-38,107,45)),this._knob.appendChild(this.createLine(70,5,70,15,-65,65,-90)),this._knob.appendChild(this.createLine(70,5,70,15,-49,21,-45)));let h=document.createElementNS(g,"circle");h.setAttribute("cx",`${l}`),h.setAttribute("cy",`${p}`),h.setAttribute("r","10"),h.setAttribute("transform","translate(20 20)"),h.setAttribute("class","pointer"),this._knob.appendChild(h),e.appendChild(this._knob),this.shadow.appendChild(e),this.attachEventListeners();}normalizeInputValue(e){if(this._min==this._max)return this._min;let r=(e-this._min)/(this._max-this._min);return Math.max(0,Math.min(1,r))}createLine(e,r,n,o,a=0,d=0,c=0){let l=document.createElementNS(g,"line");return l.setAttribute("x1",String(e)),l.setAttribute("y1",String(r)),l.setAttribute("x2",String(n)),l.setAttribute("y2",String(o)),l.setAttribute("transform",`translate(${a} ${d}) rotate(${c}, ${e}, ${r})`),l.setAttribute("class","line"),l}updateValueFromPointer(e){if(this._knob){let r=this._knob.getBoundingClientRect(),n=r.left+r.width/2,o=r.top+r.height/2,a=e.clientX-n,d=e.clientY-o,l=Math.atan2(d,a)*(180/Math.PI)-135;l<0&&(l+=360),l>270&&(l=l<315?270:0),this._value=l/270;}}attachEventListeners(){this._knob&&(this._knob.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("pointermove",this.onPointerMove));}getStyles(){return `
        :host               { display: inline-block; touch-action: none; cursor: pointer; }
        svg                 { width: 100%; height: 100%; overflow: visible; }
        svg.disabled        { cursor: not-allowed; }
        svg.disabled .dial  { stroke: var(--base-primary-hover-color); }
        .dial               { fill: none; stroke: var(--base-primary-color); stroke-width: 10; }
        .label              { fill: var(--base-text-color); }
        .line               { fill: none; stroke: var(--base-primary-color); stroke-width: 3; }
        .pointer            { fill: var(--base-text-reverse-color); stroke: var(--base-primary-color); stroke-width: 2; filter: drop-shadow(0 0 5px rgba(0,0,0,0.5)); }
        `}};customElements.define("ind-knob",k);var b=class extends s{constructor(e,r,n){super();this._items=[];this._title=null;this._isOpen=false;this.onDocumentClick=e=>{this._isOpen&&this._menu&&!e.composedPath().includes(this._menu)&&this.destroyMenu();};this.onDocumentKeydown=e=>{e.key==="Escape"&&this.destroyMenu();};this._topOffset=e,this._leftOffset=r,this._title=n,setTimeout(()=>this._isOpen=true,200);}set items(e){this._items=e,this.render();}static get observedAttributes(){return ["title"]}attributeChangedCallback(e,r,n){r!==n&&(e==="title"&&(this._title=n),this.render());}destroyMenu(){this.ownerDocument.removeEventListener("click",this.onDocumentClick),this.ownerDocument.removeEventListener("keydown",this.onDocumentKeydown),this._isOpen=false,this.remove();}connectedCallback(){this.ownerDocument.addEventListener("click",this.onDocumentClick),this.ownerDocument.addEventListener("keydown",this.onDocumentKeydown),super.connectedCallback();}render(){this.cleanShadow(),this.injectStyles(this.getStyles()),this._menu=document.createElement("div"),this._menu.className="ind-menu-container";let e=document.createElement("div");if(e.className="ind-menu-context",e.style.top=this._topOffset||"1.5rem",e.style.left=this._leftOffset||"0",this._title){let r=document.createElement("div");r.className="ind-menu-title",r.innerText=this._title,e.appendChild(r);}for(let r of this._items){let n=document.createElement("button");n.className="ind-menu-item",n.textContent=r.label?r.label:"",n.addEventListener("click",()=>{r.action(),this.destroyMenu();}),e.appendChild(n);}this._menu.appendChild(e),this.shadow.appendChild(this._menu);}getStyles(){return `
        .ind-menu-container {
            display: flex;
            position: relative;
            width: 0;
        }
        .ind-menu-context {
            display: flex;
            flex-direction: column;
            min-width: 10rem;
            position: absolute;
            border: 1px solid var(--base-border-color);
            border-radius: var(--base-border-radius);
            background: var(--base-surface-color);
            box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
            padding: 0.5rem;
            z-index: 1000;
        }
        .ind-menu-title {
            font-size: var(--font-size-xs);
            font-family: monospace;
            font-weight: 500;
            letter-spacing: 0.125rem;
            text-transform: uppercase;
            color: var(--base-text-muted-color);
            padding: 0.5rem;
        }
        .ind-menu-item {
            display: block;
            width: 100%;
            text-align: left;
            font-size: var(--font-size-base);
            font-family: var(--font-sans);
            padding: 0.5rem;
            background: transparent;
            border: none;
            border-radius: var(--base-border-radius);
            color: var(--base-text-color);
            cursor: pointer;
        }
        .ind-menu-item:hover {
            background: var(--base-surface-contrast-color);
        }
        `}};customElements.define("ind-menu",b);var E=class extends s{constructor(){super();}render(){this.cleanShadow(),this.injectStyles(this.getStyles()),this._menubar=document.createElement("div"),this._menubar.className="ind-menubar";let i=document.createElement("span");i.className="ind-menubar-buttons";let e=document.createElement("button");e.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--base-text-dim-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4"/>
                <line x1="12" y1="2" x2="12" y2="4"/>
                <line x1="17" y1="7" x2="19" y2="5"/>
                <line x1="20" y1="12" x2="22" y2="12"/>
                <line x1="17" y1="17" x2="19" y2="19"/>
                <line x1="12" y1="20" x2="12" y2="22"/>
                <line x1="7" y1="17" x2="5" y2="19"/>
                <line x1="2" y1="12" x2="4" y2="12"/>
                <line x1="7" y1="7" x2="5" y2="5"/>
            </svg>
        `,e.addEventListener("click",()=>{let r=new b("1.5rem","-11.5rem","Select theme");r.items=[{label:"IOT Dark Pink",action:()=>f("iot-dark-pink")},{label:"IOT Dark Green",action:()=>f("iot-dark-green")},{label:"IOT Light Tomato",action:()=>f("iot-light-tomato")}],this._menubar?.appendChild(r);}),i.appendChild(e),this._menubar.appendChild(i),this.shadow.appendChild(this._menubar);}getStyles(){return `
        :host { display: flex; flex-grow: 1; }
        .ind-menubar {
            display: flex;
            flex-grow: 1;
            background: var(--base-surface-color);
            align-items: center;
            padding: 0.5rem;
            border-bottom: 1px solid var(--base-border-color);
        }
        .ind-menubar-buttons { display: flex; margin-left: auto; }
        .ind-menubar-buttons button {
            display: flex;
            width: 2.5rem;
            height: 2.5rem;
            align-items: center;
            justify-content: center;
            margin-left: auto;
            background: none;
            border: none;
            border-radius: var(--base-border-radius);
            cursor: pointer;
            flex-shrink: 0;
        }
        .ind-menubar-buttons button:focus { outline: 0.125rem solid var(--base-outline-color); outline-offset: 0.125rem; }
        .ind-menubar-buttons button:hover { background: var(--base-surface-contrast-color); }
        .ind-menubar-buttons button:hover > svg { stroke: var(--base-text-color); }
        `}};customElements.define("ind-menubar",E);var _=class extends s{constructor(){super();this._name="";this._items=[];}set items(e){this._items=e,this.render();}static get observedAttributes(){return ["items","name"]}attributeChangedCallback(e,r,n){r!==n&&(e==="name"&&(this._name=n||""),this.render());}render(){this.cleanShadow(),this.injectStyles(this.getStyles()),this._sidebar=this.createSidebar();let e=this.createSidebarHeader(),r=this.createSidebarNav(this._items),n=this.createSidebarFooter();this._sidebar.appendChild(e),this._sidebar.appendChild(r),this._sidebar.appendChild(n),this.shadow.appendChild(this._sidebar);}createSidebar(){let e=document.createElement("div");return e.className="sidebar",e}createSidebarHeader(){let e=document.createElement("div");e.className="sidebar-header";let r=document.createElement("button");r.className="sidebar-logo";let n=this.extractIcon("industrial");r.appendChild(n),e.appendChild(r);let o=document.createElement("span");o.className="sidebar-title",o.innerText=this._name,e.appendChild(o);let a=document.createElement("button");a.className="sidebar-burger";let d=this.extractIcon("burger-menu");return a.appendChild(d),e.appendChild(a),r.addEventListener("click",()=>this.toggleCompactMode()),a.addEventListener("click",()=>this.toggleCompactMode()),e}createSidebarNav(e){let r=document.createElement("nav");return r.className="sidebar-nav",e.map(n=>{let o=document.createElement("div");o.className="sidebar-nav-section";let a=document.createElement("div");a.className="sidebar-nav-label",a.innerText=n.label,o.appendChild(a),n.children.map(d=>{let c=document.createElement("a");c.className="sidebar-nav-item"+(d.active?" active":""),c.href=d.link;let l=this.extractIcon(d.icon||"");c.appendChild(l);let p=document.createElement("span");p.className="sidebar-nav-item-label",p.innerText=d.label,c.appendChild(p),o.appendChild(c);}),r.appendChild(o);}),r}createSidebarFooter(){let e=document.createElement("div");e.className="sidebar-footer";let r=document.createElement("span");return r.className="sidebar-footer-title",r.innerText="Version 1.0",e.appendChild(r),e}extractIcon(e){let r=m(e,"lg",2,"var(--base-text-dim-color)","var(--base-text-dim-color"),n=document.createElement("span");return n.className="sidebar-nav-item-icon",n.innerHTML=r,n}toggleCompactMode(){let e=this.shadow.querySelector(".sidebar");e&&e.classList.toggle("compact");}getStyles(){return `
        .sidebar {
            width: 15rem;
            height: 100vh;
            background: var(--base-surface-color);
            border-right: 1px solid var(--base-border-color);
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            overflow: hidden;
            transition: width var(--base-transition);
            position: relative;
            z-index: 100;
        }
        .sidebar-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            border-bottom: 1px solid var(--base-border-color);
            flex-shrink: 0;
        }
        .sidebar-burger {
            display: flex;
            width: 2.5rem;
            height: 2.5rem;
            align-items: center;
            justify-content: center;
            margin-left: auto;
            background: none;
            border: none;
            border-radius: var(--base-border-radius);
            cursor: pointer;
            flex-shrink: 0;
        }
        .sidebar-burger:hover { background: var(--base-surface-contrast-color); }
        .sidebar-burger:hover .sidebar-nav-item-icon > svg { stroke: var(--base-text-color); }
        .sidebar-burger:focus {
            outline: 0.125rem solid var(--base-outline-color);
            outline-offset: 0.125rem;
        }
        .sidebar-logo {
            display: flex;
            width: 2.5rem;
            height: 2.5rem;
            align-items: center;
            justify-content: center;
            background: none;
            border: none;
            border-radius: var(--base-border-radius);
            cursor: pointer;
            flex-shrink: 0;
        }
        .sidebar-logo:hover { background: var(--base-surface-contrast-color); }
        .sidebar-logo .sidebar-nav-item-icon > svg { stroke: var(--base-primary-color); }
        .sidebar-logo:focus {
            outline: 0.125rem solid var(--base-outline-color);
            outline-offset: 0.125rem;
        }
        .sidebar-title {
            font-size: var(--font-size-base);
            font-weight: 600;
            letter-spacing: -0.3px;
            white-space: nowrap;
            overflow: hidden;
            opacity: 1;
            transition: opacity var(--base-transition), width var(--base-transition);
            width: 10rem;
        }
        .sidebar-nav {
            flex: 1;
            padding: 0.5rem;
            overflow-y: auto;
            overflow-x: hidden;
        }
        .sidebar-nav-section {
            display: flex;
            flex-direction: column;
            gap: 0.25rem; 
            margin-bottom: 1.5rem;
        }
        .sidebar-nav-label {
            font-size: var(--font-size-xs);
            font-family: monospace;
            font-weight: 500;
            letter-spacing: 0.125rem;
            text-transform: uppercase;
            color: var(--base-text-muted-color);
            padding: 0 0.5rem;
            margin-bottom: 0.25rem;
            white-space: nowrap;
            overflow: hidden;
            opacity: 1;
            height: 1rem;
            transition: opacity var(--base-transition), height var(--base-transition);
        }
        .sidebar-nav-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0.5rem;
            border-radius: var(--base-border-radius);
            cursor: pointer;
            color: var(--base-text-dim-color);
            font-size: var(--font-size-base);
            font-weight: 400;
            white-space: nowrap;
            position: relative;
            text-decoration: none;
        }
        .sidebar-nav-item:hover {
            color: var(--base-text-color);
            background: var(--base-surface-contrast-color);
        }
        .sidebar-nav-item:focus {
            outline: 0.125rem solid var(--base-outline-color);
            outline-offset: 0.125rem;
        }
        .sidebar-nav-item:hover > .sidebar-nav-item-icon svg {
            stroke: var(--base-text-color);
        }
        .sidebar-nav-item-icon {
            display: flex;
            align-items: center;
        }
        .sidebar-nav-item-icon svg {
            flex-shrink: 0;
            width: 1.5rem;
            height: 1.5rem;
        }
        .sidebar-nav-item.active {
            color: var(--base-primary-color);
        }
        .sidebar-nav-item.active > .sidebar-nav-item-icon svg {
            stroke: var(--base-primary-color);
        }
        .sidebar-footer {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem;
            border-top: 1px solid var(--base-border-color);
            flex-shrink: 0;
        }
        .sidebar-footer-title {
            font-size: var(--font-size-xs);
            font-family: monospace;
            font-weight: 500;
            letter-spacing: 0.125rem;
            text-transform: uppercase;
            color: var(--base-text-muted-color);
            padding: 0;
            margin-bottom: 0.25rem;
            white-space: nowrap;
        }
        /* Compact mode */
        .sidebar.compact                            { width: 3.5rem; }
        .sidebar.compact .sidebar-title             { display: none; }
        .sidebar.compact .sidebar-burger            { display: none; }
        .sidebar.compact .sidebar-nav-section       { margin-bottom: 0.5rem; gap: 0.5rem; } 
        .sidebar.compact .sidebar-nav-label         { display: none; }
        .sidebar.compact .sidebar-nav-item          { width: 1.5rem; }
        .sidebar.compact .sidebar-nav-item-label    { display: none; }
        .sidebar.compact .sidebar-footer-title      { display: none; }
        `}};customElements.define("ind-sidebar",_);var C=class extends s{constructor(){super();this._isActive=false;this._isDisabled=false;this._iconName=null;}isDisabled(){return this._tile?this._tile.disabled:false}setDisabled(e){this._tile&&(this._tile.disabled=e);}static get observedAttributes(){return ["active","disabled","icon"]}attributeChangedCallback(e,r,n){if(r!==n){switch(e){case "active":this._isActive=n=="true";break;case "disabled":this._isDisabled=n=="true";break;case "icon":this._iconName=n;break}this.render();}}render(){this.cleanShadow(),this.injectStyles(this.getStyles()),this._tile=document.createElement("button"),this._tile.className=this._isActive?"tile active":"tile";let e=this.extractIcon(this._iconName||"");e&&this._tile.appendChild(e);let r=document.createElement("slot");this._tile.appendChild(r),this._tile.disabled=this._isDisabled,this.shadow.appendChild(this._tile),this.attachEventListeners();}attachEventListeners(){this._tile&&this._tile.addEventListener("click",e=>{this._isActive=!this._isActive,this.render(),this.dispatchEvent(new CustomEvent("tile-click-event",{detail:{originalEvent:e},bubbles:true,composed:true}));});}extractIcon(e){let r=this._isActive?m(e,"xl",1,"var(--base-text-color)","var(--base-text-color)"):m(e,"xl",1,"var(--base-primary-color)","var(--base-primary-hover-color)");if(r){let n=document.createElement("div");return n.className="tile-icon",n.innerHTML=r,n}return null}getStyles(){return `
        .tile {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 6rem;
            height: 7rem;
            border: none;
            border-radius: var(--base-border-radius);
            cursor: pointer;
            font-family: var(--font-sans);
            font-size: var(--font-size-base);
            font-weight: var(--font-medium);
            color: var(--base-text-color);
            background: var(--base-background-gradient);
            transition: all 0.2s ease;
            align-items: center;
            justify-content: center;
            box-shadow: var(--base-shadow);
        }
        .tile:focus           { outline: 0.125rem solid var(--base-outline-color); outline-offset: 0.125rem; }
        .tile:hover           { background: var(--base-background-hover-gradient); }
        .tile.active          { background: var(--base-background-active-gradient); }
        .tile.active:hover    { background: var(--base-background-hover-gradient); }
        .tile:disabled        { opacity: 0.6; cursor: not-allowed; }
        .tile-icon            { display: flex; justify-content: center; align-items: center; margin: 0; }
        `}};customElements.define("ind-tile",C);var S=class extends s{constructor(){super();this._isChecked=false;this._isDisabled=false;this._label=null;this._variant="primary";}isChecked(){return this._toggle?this._toggle.checked:false}isDisabled(){return this._toggle?this._toggle.disabled:false}setChecked(e){this._toggle&&(this._toggle.checked=e);}setDisabled(e){this._toggle&&(this._toggle.disabled=e);}static get observedAttributes(){return ["checked","disabled","label","variant"]}attributeChangedCallback(e,r,n){if(r!==n){switch(e){case "checked":this._isChecked=n=="true";break;case "disabled":this._isDisabled=n=="true";break;case "label":this._label=n;break;case "variant":this._variant=n||"primary";break}this.render();}}render(){this.cleanShadow(),this.injectStyles(this.getStyles()),this._toggle=document.createElement("input"),this._toggle.type="checkbox",this._toggle.checked=this._isChecked,this._toggle.disabled=this._isDisabled;let e=document.createElement("span");e.className=`slider  ${this._variant}`;let r=document.createElement("label");r.className="switch",r.appendChild(this._toggle),r.appendChild(e);let n=document.createElement("div");if(n.className="container",n.appendChild(r),this._label){let o=document.createElement("span");o.className="label",o.textContent=this._label,n.appendChild(o);}this.shadow.appendChild(n),this.attachEventListeners();}attachEventListeners(){this._toggle&&this._toggle.addEventListener("change",e=>{this.dispatchEvent(new CustomEvent("toggle-switch-toggled",{detail:{originalEvent:e},bubbles:true,composed:true}));});}getStyles(){return `
        :host           { display: inline-block; font-family: var(--font-sans); }
        .container      { display: flex; align-items: center; gap: 0.5rem; }
        .switch         { display: inline-block; position: relative; width: 3rem; height: 1.625rem; cursor: pointer; }
        .switch input   { opacity: 0; width: 0; height: 0;}
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--base-text-dim-color);
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
            background-color: var(--base-text-reverse-color);
            transition: 0.3s;
            border-radius: 50%;
        }
        input:checked +.slider.primary      { background-color: var(--base-primary-color); }
        input:checked +.slider.secondary    { background-color: var(--base-secondary-color); }
        input:checked +.slider.success      { background-color: var(--base-success-color); }
        input:checked +.slider.info         { background-color: var(--base-info-color); }
        input:checked +.slider.warn         { background-color: var(--base-warn-color); }
        input:checked +.slider.danger       { background-color: var(--base-danger-color); }
        input:focus + .slider               { outline: 0.125rem solid var(--base-outline-color); outline-offset: 0.125rem; }
        input:checked + .slider:before      { transform: translateX(1.375rem); }
        input:disabled + .slider            { opacity: 0.5; cursor: not-allowed; }
        .switch:has(input:disabled)         { cursor: not-allowed; }
        .label                              { font-size: var(--font-size-sm); color: var(--base-text-color); user-select: none; }
        :host([disabled]) .label            { color: var(--base-text-muted-color); }
        `}};customElements.define("ind-toggle-switch",S);L();export{x as IndApplication,w as IndButton,y as IndCard,k as IndKnob,b as IndMenu,E as IndMenubar,_ as IndSidebar,C as IndTile,S as IndToggleSwitch,m as getIconByName,T as indIconAbout,$ as indIconBurgerMenu,D as indIconButton,B as indIconCard,z as indIconCheck,H as indIconChevronLeft,A as indIconChevronRight,N as indIconClose,F as indIconController,j as indIconDownload,G as indIconEdit,P as indIconIndustrial,O as indIconKnob,R as indIconLightBulb,U as indIconMenu,K as indIconMenubar,X as indIconMinus,Y as indIconPlus,q as indIconSearch,J as indIconSwitch,Q as indIconTile,W as indIconTrash};//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map