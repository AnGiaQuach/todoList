(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"body {\n  padding: 0;\n  margin: 0;\n  font-family: sans-serif;\n}\n\n.container {\n  display: grid;\n  height: 100vh;\n  grid-template-columns: 17.5rem 1fr;\n  grid-template-rows: 1fr;\n}\n\n.sm-bold-title {\n  font-size: 0.8rem;\n  color: white;\n  font-weight: bold;\n}\n.sm-light-title {\n  font-size: 0.8rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n.md-bold-title {\n  font-size: 1.2rem;\n  color: white;\n}\n.lg-bold-title {\n  font-size: 2.2rem;\n  color: white;\n  font-weight: bold;\n}\n.icon-sb {\n  width: 1.2rem;\n}\n.dlt-btn {\n  position: absolute;\n  right: 1em;\n  top: 2em;\n}\n.edt-btn {\n  position: absolute;\n  right: 3em;\n  top: 2em;\n}\n\n.todo-container {\n  margin-top: 5%;\n  display: flex;\n  flex-direction: column;\n}\n.todo-card {\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 65%;\n  height: 6rem;\n  border-radius: 10px;\n  border: 1px solid white;\n  margin-top: 1.5rem;\n  padding: 1rem;\n}\n.td-desc {\n  width: 50%;\n}\n.td-title {\n  width: 50%;\n}\n\n.vanish {\n  display: none;\n}\n.btn-operate {\n  margin-top: 0.5rem;\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  height: 2.2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n}\n\n.proj-template {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n}\n.sideBar {\n  grid-column: 1 / 2;\n  background-color: #262626;\n}\n.account-section {\n  box-sizing: border-box;\n  display: flex;\n  height: 3.5rem;\n  padding: 0.75rem;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.account-left-section {\n  display: flex;\n  height: 2rem;\n  width: 4.5rem;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.proj-section {\n  height: 10rem;\n  overflow-y: auto;\n}\n.content {\n  grid-column: 2 / 3;\n  background-color: #1e1e1e;\n}\n\n.td-content {\n  padding-top: 5rem;\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\n.new-task-box {\n  position: absolute;\n  height: 30%;\n  width: 35%;\n  top: 10rem;\n  right: 30rem;\n  background-color: black;\n  z-index: 1;\n  border-radius: 10px;\n  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.1);\n}\n\n.new-task-icon {\n  margin-top: 2rem;\n  background-color: #1e1e1e;\n  border: 2px solid #ffffff;\n  border-radius: 2rem;\n  padding: 1rem;\n}\n",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),i=t(659),a=t.n(i),c=t(56),s=t.n(c),l=t(540),d=t.n(l),u=t(113),p=t.n(u),m=t(208),f={};function g(n,e){let t=JSON.stringify(e);localStorage.setItem(n,t)}function h(n){return JSON.parse(localStorage.getItem(n))}function v(n,e,t){console.log(n),console.log(e);const{title:o,desc:r}=n;console.log(o);const i=document.createElement("div");i.classList.add("todo-card");const a=document.createElement("div");a.classList.add("sm-light-title","td-desc"),a.setAttribute("contenteditable","true");const c=document.createElement("div");c.classList.add("md-bold-title","td-title"),c.setAttribute("contenteditable","true");const s=document.createElement("div");return s.classList.add("icon-sb","dlt-btn"),s.innerHTML=' <svg\n  xmlns="http://www.w3.org/2000/svg"\n  fill="none"\n  viewBox="0 0 24 24"\n  stroke-width="1.5"\n  stroke="white"\n  class="w-6 h-6"\n>\n  <path\n    stroke-linecap="round"\n    stroke-linejoin="round"\n    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"\n  />\n</svg>',s.addEventListener("click",(()=>{const{id:o}=n;t.removeChild(i),function(n,e){let t=h(n);for(let n=0;n<t.length;n++){let{id:o}=t[n];if(o===e){t.splice(n,1);break}}g(n,t)}(e,o)})),c.textContent=o,a.textContent=r,i.appendChild(c),i.appendChild(a),i.appendChild(s),c.addEventListener("input",(()=>{console.log(c.textContent),n.title=c.textContent,function(n,e,t){let o=h(n);for(let n=0;n<o.length;n++){let{id:r}=o[n];if(r===e){o.splice(n,1,t);break}}g(n,o)}(e,n.id,n)})),i}function b(n,e){let t=h(n);null===t&&(t=[]);for(let o=0;o<t.length;o++){const r=v(t[o],n,e);e.appendChild(r)}}function x(n,e){const t=document.querySelector(".new-task-icon"),o=document.querySelector(".new-task-box"),r=document.querySelector("#title"),i=document.querySelector("#description"),a=document.querySelector("#save");t.addEventListener("click",(()=>{o.classList.toggle("vanish")})),a.addEventListener("click",(()=>{event.preventDefault();const t={id:self.crypto.randomUUID(),title:r.value,desc:i.value};let a=h("inbox");a.push(t),g("inbox",a),e.appendChild(v(t,n,e)),o.classList.toggle("vanish")}))}if(f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(m.A,f),m.A&&m.A.locals&&m.A.locals,null===localStorage.getItem("inbox")){self.crypto.randomUUID();const n=document.querySelector(".todo-container");g("inbox",arr),b("inbox",n),x("inbox",n)}else{const n=document.querySelector(".todo-container");b("inbox",n),x("inbox",n)}})()})();