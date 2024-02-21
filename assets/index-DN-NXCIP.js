(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();let pe=re;const T=1,D=2,ne={owned:null,cleanups:null,context:null,owner:null};var _=null;let U=null,he=null,w=null,h=null,x=null,$=0;function ge(e,t){const n=w,s=_,i=e.length===0,r=t===void 0?s:t,l=i?ne:{owned:null,cleanups:null,context:r?r.context:null,owner:r},o=i?e:()=>e(()=>k(()=>M(l)));_=l,w=null;try{return N(o,!0)}finally{w=n,_=s}}function F(e,t,n){const s=me(e,t,!1,T);se(s)}function k(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function we(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&N(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=U&&U.running;l&&U.disposed.has(r),(l?!r.tState:!r.state)&&(r.pure?h.push(r):x.push(r),r.observers&&oe(r)),l||(r.state=T)}if(h.length>1e6)throw h=[],new Error},!1)),t}function se(e){if(!e.fn)return;M(e);const t=$;ye(e,e.value,t)}function ye(e,t,n){let s;const i=_,r=w;w=_=e;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=T,e.owned&&e.owned.forEach(M),e.owned=null),e.updatedAt=n+1,le(l)}finally{w=r,_=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?we(e,s):e.value=s,e.updatedAt=n)}function me(e,t,n,s=T,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:_,context:_?_.context:null,pure:n};return _===null||_!==ne&&(_.owned?_.owned.push(r):_.owned=[r]),r}function ie(e){if(e.state===0)return;if(e.state===D)return q(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<$);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===T)se(e);else if(e.state===D){const s=h;h=null,N(()=>q(e,t[0]),!1),h=s}}function N(e,t){if(h)return e();let n=!1;t||(h=[]),x?n=!0:x=[],$++;try{const s=e();return be(n),s}catch(s){n||(x=null),h=null,le(s)}}function be(e){if(h&&(re(h),h=null),e)return;const t=x;x=null,t.length&&N(()=>pe(t),!1)}function re(e){for(let t=0;t<e.length;t++)ie(e[t])}function q(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===T?s!==t&&(!s.updatedAt||s.updatedAt<$)&&ie(s):i===D&&q(s,t)}}}function oe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=D,n.pure?h.push(n):x.push(n),n.observers&&oe(n))}}function M(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();s<i.length&&(r.sourceSlots[l]=s,i[s]=r,n.observerSlots[s]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)M(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ve(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function le(e,t=_){throw ve(e)}function xe(e,t){return k(()=>e(t||{}))}function Ae(e,t,n){let s=n.length,i=t.length,r=s,l=0,o=0,c=t[i-1].nextSibling,f=null;for(;l<i||o<r;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const a=r<s?o?n[o-1].nextSibling:n[r-o]:c;for(;o<r;)e.insertBefore(n[o++],a)}else if(r===o)for(;l<i;)(!f||!f.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[o]===t[i-1]){const a=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--r],a),t[i]=n[r]}else{if(!f){f=new Map;let y=o;for(;y<r;)f.set(n[y],y++)}const a=f.get(t[l]);if(a!=null)if(o<a&&a<r){let y=l,m=1,b;for(;++y<i&&y<r&&!((b=f.get(t[y]))==null||b!==a+m);)m++;if(m>a-o){const R=t[l];for(;o<a;)e.insertBefore(n[o++],R)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}function Ce(e,t,n,s={}){let i;return ge(r=>{i=r,t===document?e():Pe(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Ee(e,t,n){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},r=t?()=>k(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function j(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Q(e,t){t==null?e.removeAttribute("class"):e.className=t}function Pe(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return O(e,t,s,n);F(i=>O(e,t(),i,n),s)}function O(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=P(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||r==="boolean")n=P(e,n,s);else{if(r==="function")return F(()=>{let o=t();for(;typeof o=="function";)o=o();n=O(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(H(o,t,n,i))return F(()=>n=O(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=P(e,n,s),l)return n}else c?n.length===0?X(e,o,s):Ae(e,n,o):(n&&P(e),X(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=P(e,n,s,t);P(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function H(e,t,n,s){let i=!1;for(let r=0,l=t.length;r<l;r++){let o=t[r],c=n&&n[r],f;if(!(o==null||o===!0||o===!1))if((f=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=H(e,o,c)||i;else if(f==="function")if(s){for(;typeof o=="function";)o=o();i=H(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||i}else e.push(o),i=!0;else{const a=String(o);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return i}function X(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function P(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const c=o.parentNode===e;!r&&!l?c?e.replaceChild(i,o):e.insertBefore(i,n):c&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}const Se="/assets/swap-B9LWilHG.png",Te="/assets/kalmann-Doq862dY.gif",Ie="/assets/ars-BLgp_F_W.gif",Le="_App_1ncbe_1",Be="_logo_1ncbe_8",De="_header_1ncbe_14",Fe="_fa_1ncbe_25",Y={App:Le,logo:Be,"logo-spin":"_logo-spin_1ncbe_1",header:De,fa:Fe},Oe="/assets/cgol_wasm_bg-BX4WcxiJ.wasm",$e=async(e={},t)=>{let n;if(t.startsWith("data:")){const s=t.replace(/^data:.*?base64,/,"");let i;if(typeof Buffer=="function"&&typeof Buffer.from=="function")i=Buffer.from(s,"base64");else if(typeof atob=="function"){const r=atob(s);i=new Uint8Array(r.length);for(let l=0;l<r.length;l++)i[l]=r.charCodeAt(l)}else throw new Error("Cannot decode base64-encoded data URL");n=await WebAssembly.instantiate(i,e)}else{const s=await fetch(t),i=s.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&i.startsWith("application/wasm"))n=await WebAssembly.instantiateStreaming(s,e);else{const r=await s.arrayBuffer();n=await WebAssembly.instantiate(r,e)}}return n.instance.exports};let u;function ke(e){u=e}const Ne=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let ce=new Ne("utf-8",{ignoreBOM:!0,fatal:!0});ce.decode();let L=null;function Me(){return(L===null||L.byteLength===0)&&(L=new Uint8Array(u.memory.buffer)),L}function z(e,t){return e=e>>>0,ce.decode(Me().subarray(e,e+t))}function Re(e){return()=>{throw new Error(`${e} is not defined`)}}const Ue=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let W=new Ue("utf-8");W.encodeInto;let B=null;function Z(){return(B===null||B.byteLength===0)&&(B=new Int32Array(u.memory.buffer)),B}const ee=Object.freeze({Dead:0,0:"Dead",Alive:1,1:"Alive"}),te=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>u.__wbg_universe_free(e>>>0));class A{static __wrap(t){t=t>>>0;const n=Object.create(A.prototype);return n.__wbg_ptr=t,te.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,te.unregister(this),t}free(){const t=this.__destroy_into_raw();u.__wbg_universe_free(t)}width(){return u.universe_width(this.__wbg_ptr)>>>0}height(){return u.universe_height(this.__wbg_ptr)>>>0}cells(){return u.universe_cells(this.__wbg_ptr)>>>0}fill_factor(){return u.universe_fill_factor(this.__wbg_ptr)>>>0}tick(){u.universe_tick(this.__wbg_ptr)}static new(){const t=u.universe_new();return A.__wrap(t)}static new_with_dims(t,n){const s=u.universe_new_with_dims(t,n);return A.__wrap(s)}render(){let t,n;try{const r=u.__wbindgen_add_to_stack_pointer(-16);u.universe_render(r,this.__wbg_ptr);var s=Z()[r/4+0],i=Z()[r/4+1];return t=s,n=i,z(s,i)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(t,n,1)}}}const je=typeof Math.random=="function"?Math.random:Re("Math.random");function We(e,t){alert(z(e,t))}function qe(e,t){throw new Error(z(e,t))}URL=globalThis.URL;const p=await $e({"./cgol_wasm_bg.js":{__wbg_random_1dea77d3f318d94e:je,__wbg_alert_37821ed9a94d2141:We,__wbindgen_throw:qe}},Oe),ae=p.memory,He=p.greet,ze=p.__wbg_universe_free,Ge=p.universe_width,Ve=p.universe_height,Je=p.universe_cells,Ke=p.universe_fill_factor,Qe=p.universe_tick,Xe=p.universe_new,Ye=p.universe_new_with_dims,Ze=p.universe_render,et=p.__wbindgen_malloc,tt=p.__wbindgen_realloc,nt=p.__wbindgen_add_to_stack_pointer,st=p.__wbindgen_free,it=Object.freeze(Object.defineProperty({__proto__:null,__wbg_universe_free:ze,__wbindgen_add_to_stack_pointer:nt,__wbindgen_free:st,__wbindgen_malloc:et,__wbindgen_realloc:tt,greet:He,memory:ae,universe_cells:Je,universe_fill_factor:Ke,universe_height:Ve,universe_new:Xe,universe_new_with_dims:Ye,universe_render:Ze,universe_tick:Qe,universe_width:Ge},Symbol.toStringTag,{value:"Module"}));ke(it);var rt=Ee(`<div><div><div><h1>Hi, I'm Swapneel Datta</h1><pre>And I'm an experienced software engineer from the 21<sup>st</sup> century</pre></div><img></div><div><h3>I have a Master of Science from Maastricht university specializing in Artificial Intelligence. I also have a bachelor in Electronics and Telecommunication from VIT Pune.</h3><img></div><div><img><h3>I have 5+ years of programming experience, in industries ranging from manufacturing, internet-of-things, medical imaging, robotics, payments and financial sectors.</h3></div><div><h2>Taming computers and computables since 2015</h2><p>Be it modernizing the web, making a high throughput backend server or a database or making reactive frontends for cross platform usage. I'm interested in taming anything and everything that computes, from microcontrollers to HPCs.</p><p>I love ekeing out the last bit of performance from any hardware! Not a single clock cycle should go wasted. Sceptical? This page is built with Solidjs + Rust + webassembly. There's more where that came from.</p></div><footer><h1>Find me on</h1><h1><a href=https://github.com/swd543 class="fa fa-github"></a><a href=https://www.linkedin.com/in/swapneel-datta class="fa fa-linkedin"></a><a href=https://www.facebook.com/swappy.d.scientist class="fa fa-facebook"></a><a href=https://www.twitter.com/swapneeldatta8 class="fa fa-twitter"></a><a href=https://www.instagram.com/swapneeldatta/ class="fa fa-instagram">`);A.new();function ot(){return(()=>{var e=rt(),t=e.firstChild,n=t.firstChild,s=n.firstChild,i=s.nextSibling,r=n.nextSibling,l=t.nextSibling,o=l.firstChild,c=o.nextSibling,f=l.nextSibling,a=f.firstChild,y=a.nextSibling,m=f.nextSibling,b=m.nextSibling,R=b.firstChild,V=R.nextSibling;return t.style.setProperty("flex-direction","row"),t.style.setProperty("padding","0px 10px"),n.style.setProperty("display","flex"),n.style.setProperty("flex-direction","column"),i.style.setProperty("white-space","pre-wrap"),j(r,"src",Se),r.style.setProperty("width","30vw"),r.style.setProperty("margin","0px 30px"),l.style.setProperty("display","flex"),l.style.setProperty("align-items","center"),l.style.setProperty("justify-content","center"),o.style.setProperty("width","36vw"),j(c,"src",Te),c.style.setProperty("margin","0px 12px"),c.style.setProperty("width","40vw"),f.style.setProperty("display","flex"),f.style.setProperty("align-items","center"),f.style.setProperty("justify-content","center"),j(a,"src",Ie),a.style.setProperty("margin","0px 12px"),a.style.setProperty("width","40vw"),y.style.setProperty("width","36vw"),m.style.setProperty("display","flex"),m.style.setProperty("align-items","center"),m.style.setProperty("justify-content","center"),m.style.setProperty("flex-direction","column"),b.style.setProperty("display","flex"),b.style.setProperty("justify-content","center"),b.style.setProperty("background-color","Background"),b.style.setProperty("gap","20px"),V.style.setProperty("display","flex"),V.style.setProperty("gap","8px"),F(I=>{var J=Y.App,K=Y.header;return J!==I.e&&Q(e,I.e=J),K!==I.t&&Q(t,I.t=K),I},{e:void 0,t:void 0}),e})()}const S=document.getElementById("game-of-life-canvas"),G=getComputedStyle(S),d=12,lt=G.borderColor??"#EEEEEE",ct=G.backgroundColor??"#FFFFFF",at=G.color??"#C3F4A1",fe=()=>[window.innerWidth/(d+1),window.innerHeight/(d+1)];let C=A.new_with_dims(...fe()),[v,E]=[C.width(),C.height()];S.height=(d+1)*E+1;S.width=(d+1)*v+1;const g=S.getContext("2d");addEventListener("resize",e=>{C=A.new_with_dims(...fe()),v=C.width(),E=C.height(),S.height=(d+1)*E+1,S.width=(d+1)*v+1});document.getElementById("animation-speed");const ue=()=>{g.beginPath(),g.strokeStyle=lt;for(let e=0;e<=v;e++)g.moveTo(e*(d+1)+1,0),g.lineTo(e*(d+1)+1,(d+1)*E+1);for(let e=0;e<=E;e++)g.moveTo(0,e*(d+1)+1),g.lineTo((d+1)*v+1,e*(d+1)+1);g.stroke()},ft=(e,t)=>e*v+t,de=()=>{const e=C.cells(),t=new Uint8Array(ae.buffer,e,v*E);g.beginPath();for(let n=0;n<E;n++)for(let s=0;s<v;s++){const i=ft(n,s);g.fillStyle=t[i]===ee.Dead?ct:at,g.globalAlpha=t[i]===ee.Dead?.1:.9,g.fillRect(s*(d+1)+1,n*(d+1)+1,d,d)}g.stroke()},_e=()=>{C.tick(),ue(),de(),setTimeout(()=>{requestAnimationFrame(_e)},1e3/100)},ut=()=>{ue(),de(),requestAnimationFrame(_e)},dt=document.getElementById("root");Ce(()=>xe(ot,{}),dt);ut();
