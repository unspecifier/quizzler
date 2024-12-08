var Zi=Object.defineProperty;var Vi=(i,e,n)=>e in i?Zi(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var k=(i,e,n)=>Vi(i,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Ji=!1;var yn=Array.isArray,bn=Array.from,Ki=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,ri=Object.getOwnPropertyDescriptors,Xi=Object.prototype,Yi=Array.prototype,Ne=Object.getPrototypeOf;function et(i){return i()}function cn(i){for(var e=0;e<i.length;e++)i[e]()}const Y=2,oi=4,qe=8,vn=16,L=32,Re=64,ce=128,Oe=256,D=512,ie=1024,be=2048,Z=4096,Qe=8192,nt=16384,wn=32768,it=65536,tt=1<<18,ai=1<<19,oe=Symbol("$state"),rt=Symbol("legacy props");function si(i){return i===this.v}function ot(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function Tn(i){return!ot(i,this.v)}function at(i){throw new Error("effect_in_teardown")}function st(){throw new Error("effect_in_unowned_derived")}function ct(i){throw new Error("effect_orphan")}function lt(){throw new Error("effect_update_depth_exceeded")}function dt(i){throw new Error("props_invalid_value")}function ht(){throw new Error("state_descriptors_fixed")}function ut(){throw new Error("state_prototype_fixed")}function pt(){throw new Error("state_unsafe_local_read")}function ft(){throw new Error("state_unsafe_mutation")}let ve=!1;function mt(){ve=!0}function N(i){return{f:0,v:i,reactions:null,equals:si,version:0}}function Cn(i,e=!1){var t;const n=N(i);return e||(n.equals=Tn),ve&&P!==null&&P.l!==null&&((t=P.l).s??(t.s=[])).push(n),n}function G(i,e=!1){return gt(Cn(i,e))}function gt(i){return C!==null&&C.f&Y&&(V===null?Ht([i]):V.push(i)),i}function ci(i,e){return _(i,ae(()=>g(i))),e}function _(i,e){return C!==null&&Xe()&&C.f&(Y|vn)&&(V===null||!V.includes(i))&&ft(),li(i,e)}function li(i,e){return i.equals(e)||(i.v=e,i.version=Mi(),di(i,ie),Xe()&&b!==null&&b.f&D&&!(b.f&L)&&(R!==null&&R.includes(i)?(F(b,ie),Ye(b)):ne===null?Bt([i]):ne.push(i))),e}function di(i,e){var n=i.reactions;if(n!==null)for(var t=Xe(),r=n.length,o=0;o<r;o++){var a=n[o],l=a.f;l&ie||!t&&a===b||(F(a,e),l&(D|ce)&&(l&Y?di(a,be):Ye(a)))}}const yt=1,bt=2,vt=16,wt=1,Tt=2,Ct=4,At=8,kt=16,xt=1,Pt=2,$=Symbol();let Mt=!1;function pe(i,e=null,n){if(typeof i!="object"||i===null||oe in i)return i;const t=Ne(i);if(t!==Xi&&t!==Yi)return i;var r=new Map,o=yn(i),a=N(0);o&&r.set("length",N(i.length));var l;return new Proxy(i,{defineProperty(d,c,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&ht();var u=r.get(c);return u===void 0?(u=N(s.value),r.set(c,u)):_(u,pe(s.value,l)),!0},deleteProperty(d,c){var s=r.get(c);if(s===void 0)c in d&&r.set(c,N($));else{if(o&&typeof c=="string"){var u=r.get("length"),h=Number(c);Number.isInteger(h)&&h<u.v&&_(u,h)}_(s,$),Dn(a)}return!0},get(d,c,s){var f;if(c===oe)return i;var u=r.get(c),h=c in d;if(u===void 0&&(!h||(f=ge(d,c))!=null&&f.writable)&&(u=N(pe(h?d[c]:$,l)),r.set(c,u)),u!==void 0){var p=g(u);return p===$?void 0:p}return Reflect.get(d,c,s)},getOwnPropertyDescriptor(d,c){var s=Reflect.getOwnPropertyDescriptor(d,c);if(s&&"value"in s){var u=r.get(c);u&&(s.value=g(u))}else if(s===void 0){var h=r.get(c),p=h==null?void 0:h.v;if(h!==void 0&&p!==$)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return s},has(d,c){var p;if(c===oe)return!0;var s=r.get(c),u=s!==void 0&&s.v!==$||Reflect.has(d,c);if(s!==void 0||b!==null&&(!u||(p=ge(d,c))!=null&&p.writable)){s===void 0&&(s=N(u?pe(d[c],l):$),r.set(c,s));var h=g(s);if(h===$)return!1}return u},set(d,c,s,u){var I;var h=r.get(c),p=c in d;if(o&&c==="length")for(var f=s;f<h.v;f+=1){var m=r.get(f+"");m!==void 0?_(m,$):f in d&&(m=N($),r.set(f+"",m))}h===void 0?(!p||(I=ge(d,c))!=null&&I.writable)&&(h=N(void 0),_(h,pe(s,l)),r.set(c,h)):(p=h.v!==$,_(h,pe(s,l)));var y=Reflect.getOwnPropertyDescriptor(d,c);if(y!=null&&y.set&&y.set.call(u,s),!p){if(o&&typeof c=="string"){var v=r.get("length"),M=Number(c);Number.isInteger(M)&&M>=v.v&&_(v,M+1)}Dn(a)}return!0},ownKeys(d){g(a);var c=Reflect.ownKeys(d).filter(h=>{var p=r.get(h);return p===void 0||p.v!==$});for(var[s,u]of r)u.v!==$&&!(s in d)&&c.push(s);return c},setPrototypeOf(){ut()}})}function Dn(i,e=1){_(i,i.v+e)}var $n,hi,ui;function _t(){if($n===void 0){$n=window;var i=Element.prototype,e=Node.prototype;hi=ge(e,"firstChild").get,ui=ge(e,"nextSibling").get,i.__click=void 0,i.__className="",i.__attributes=null,i.__styles=null,i.__e=void 0,Text.prototype.__t=void 0}}function It(i=""){return document.createTextNode(i)}function je(i){return hi.call(i)}function Ke(i){return ui.call(i)}function S(i,e){return je(i)}function St(i,e){{var n=je(i);return n instanceof Comment&&n.data===""?Ke(n):n}}function Q(i,e=1,n=!1){let t=i;for(;e--;)t=Ke(t);return t}function Et(i){i.textContent=""}function Le(i){var e=Y|ie;b===null?e|=ce:b.f|=ai;const n={children:null,ctx:P,deps:null,equals:si,f:e,fn:i,reactions:null,v:null,version:0,parent:b};if(C!==null&&C.f&Y){var t=C;(t.children??(t.children=[])).push(n)}return n}function ln(i){const e=Le(i);return e.equals=Tn,e}function pi(i){var e=i.children;if(e!==null){i.children=null;for(var n=0;n<e.length;n+=1){var t=e[n];t.f&Y?An(t):le(t)}}}function fi(i){var e,n=b;J(i.parent);try{pi(i),e=_i(i)}finally{J(n)}return e}function mi(i){var e=fi(i),n=(me||i.f&ce)&&i.deps!==null?be:D;F(i,n),i.equals(e)||(i.v=e,i.version=Mi())}function An(i){pi(i),Ee(i,0),F(i,Qe),i.v=i.children=i.deps=i.ctx=i.reactions=null}function gi(i){b===null&&C===null&&ct(),C!==null&&C.f&ce&&st(),Mn&&at()}function qt(i,e){var n=e.last;n===null?e.last=e.first=i:(n.next=i,i.prev=n,e.last=i)}function we(i,e,n,t=!0){var r=(i&Re)!==0,o=b,a={ctx:P,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:i|ie,first:null,fn:e,last:null,next:null,parent:r?null:o,prev:null,teardown:null,transitions:null,version:0};if(n){var l=ye;try{zn(!0),We(a),a.f|=nt}catch(s){throw le(a),s}finally{zn(l)}}else e!==null&&Ye(a);var d=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&ai)===0;if(!d&&!r&&t&&(o!==null&&qt(a,o),C!==null&&C.f&Y)){var c=C;(c.children??(c.children=[])).push(a)}return a}function Rt(i){const e=we(qe,null,!1);return F(e,D),e.teardown=i,e}function dn(i){gi();var e=b!==null&&(b.f&L)!==0&&P!==null&&!P.m;if(e){var n=P;(n.e??(n.e=[])).push({fn:i,effect:b,reaction:C})}else{var t=kn(i);return t}}function Qt(i){return gi(),Te(i)}function Wt(i){const e=we(Re,i,!0);return()=>{le(e)}}function kn(i){return we(oi,i,!1)}function yi(i,e){var n=P,t={effect:null,ran:!1};n.l.r1.push(t),t.effect=Te(()=>{i(),!t.ran&&(t.ran=!0,_(n.l.r2,!0),ae(e))})}function bi(){var i=P;Te(()=>{if(g(i.l.r2)){for(var e of i.l.r1){var n=e.effect;n.f&D&&F(n,be),Ce(n)&&We(n),e.ran=!1}i.l.r2.v=!1}})}function Te(i){return we(qe,i,!0)}function X(i){return xn(i)}function xn(i,e=0){return we(qe|vn|e,i,!0)}function Se(i,e=!0){return we(qe|L,i,!0,e)}function vi(i){var e=i.teardown;if(e!==null){const n=Mn,t=C;Hn(!0),te(null);try{e.call(null)}finally{Hn(n),te(t)}}}function wi(i){var e=i.deriveds;if(e!==null){i.deriveds=null;for(var n=0;n<e.length;n+=1)An(e[n])}}function Ti(i,e=!1){var n=i.first;for(i.first=i.last=null;n!==null;){var t=n.next;le(n,e),n=t}}function Dt(i){for(var e=i.first;e!==null;){var n=e.next;e.f&L||le(e),e=n}}function le(i,e=!0){var n=!1;if((e||i.f&tt)&&i.nodes_start!==null){for(var t=i.nodes_start,r=i.nodes_end;t!==null;){var o=t===r?null:Ke(t);t.remove(),t=o}n=!0}Ti(i,e&&!n),wi(i),Ee(i,0),F(i,Qe);var a=i.transitions;if(a!==null)for(const d of a)d.stop();vi(i);var l=i.parent;l!==null&&l.first!==null&&Ci(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.parent=i.fn=i.nodes_start=i.nodes_end=null}function Ci(i){var e=i.parent,n=i.prev,t=i.next;n!==null&&(n.next=t),t!==null&&(t.prev=n),e!==null&&(e.first===i&&(e.first=t),e.last===i&&(e.last=n))}function hn(i,e){var n=[];Pn(i,n,!0),Ai(n,()=>{le(i),e&&e()})}function Ai(i,e){var n=i.length;if(n>0){var t=()=>--n||e();for(var r of i)r.out(t)}else e()}function Pn(i,e,n){if(!(i.f&Z)){if(i.f^=Z,i.transitions!==null)for(const a of i.transitions)(a.is_global||n)&&e.push(a);for(var t=i.first;t!==null;){var r=t.next,o=(t.f&wn)!==0||(t.f&L)!==0;Pn(t,e,o?n:!1),t=r}}}function Fe(i){ki(i,!0)}function ki(i,e){if(i.f&Z){Ce(i)&&We(i),i.f^=Z;for(var n=i.first;n!==null;){var t=n.next,r=(n.f&wn)!==0||(n.f&L)!==0;ki(n,r?e:!1),n=t}if(i.transitions!==null)for(const o of i.transitions)(o.is_global||e)&&o.in()}}let un=!1,pn=[];function $t(){un=!1;const i=pn.slice();pn=[],cn(i)}function xi(i){un||(un=!0,queueMicrotask($t)),pn.push(i)}function zt(i){throw new Error("lifecycle_outside_component")}let Ue=!1,ye=!1,Mn=!1;function zn(i){ye=i}function Hn(i){Mn=i}let fn=[],Me=0;let C=null;function te(i){C=i}let b=null;function J(i){b=i}let V=null;function Ht(i){V=i}let R=null,z=0,ne=null;function Bt(i){ne=i}let Pi=0,me=!1,P=null;function Mi(){return++Pi}function Xe(){return!ve||P!==null&&P.l===null}function Ce(i){var a,l;var e=i.f;if(e&ie)return!0;if(e&be){var n=i.deps,t=(e&ce)!==0;if(n!==null){var r;if(e&Oe){for(r=0;r<n.length;r++)((a=n[r]).reactions??(a.reactions=[])).push(i);i.f^=Oe}for(r=0;r<n.length;r++){var o=n[r];if(Ce(o)&&mi(o),t&&b!==null&&!me&&!((l=o==null?void 0:o.reactions)!=null&&l.includes(i))&&(o.reactions??(o.reactions=[])).push(i),o.version>i.version)return!0}}t||F(i,D)}return!1}function Nt(i,e,n){throw i}function _i(i){var h;var e=R,n=z,t=ne,r=C,o=me,a=V,l=P,d=i.f;R=null,z=0,ne=null,C=d&(L|Re)?null:i,me=!ye&&(d&ce)!==0,V=null,P=i.ctx;try{var c=(0,i.fn)(),s=i.deps;if(R!==null){var u;if(Ee(i,z),s!==null&&z>0)for(s.length=z+R.length,u=0;u<R.length;u++)s[z+u]=R[u];else i.deps=s=R;if(!me)for(u=z;u<s.length;u++)((h=s[u]).reactions??(h.reactions=[])).push(i)}else s!==null&&z<s.length&&(Ee(i,z),s.length=z);return c}finally{R=e,z=n,ne=t,C=r,me=o,V=a,P=l}}function Ot(i,e){let n=e.reactions;if(n!==null){var t=n.indexOf(i);if(t!==-1){var r=n.length-1;r===0?n=e.reactions=null:(n[t]=n[r],n.pop())}}n===null&&e.f&Y&&(R===null||!R.includes(e))&&(F(e,be),e.f&(ce|Oe)||(e.f^=Oe),Ee(e,0))}function Ee(i,e){var n=i.deps;if(n!==null)for(var t=e;t<n.length;t++)Ot(i,n[t])}function We(i){var e=i.f;if(!(e&Qe)){F(i,D);var n=b;b=i;try{e&vn?Dt(i):Ti(i),wi(i),vi(i);var t=_i(i);i.teardown=typeof t=="function"?t:null,i.version=Pi}catch(r){Nt(r)}finally{b=n}}}function jt(){Me>1e3&&(Me=0,lt()),Me++}function Lt(i){var e=i.length;if(e!==0){jt();var n=ye;ye=!0;try{for(var t=0;t<e;t++){var r=i[t];r.f&D||(r.f^=D);var o=[];Ii(r,o),Ft(o)}}finally{ye=n}}}function Ft(i){var e=i.length;if(e!==0)for(var n=0;n<e;n++){var t=i[n];!(t.f&(Qe|Z))&&Ce(t)&&(We(t),t.deps===null&&t.first===null&&t.nodes_start===null&&(t.teardown===null?Ci(t):t.fn=null))}}function Ut(){if(Ue=!1,Me>1001)return;const i=fn;fn=[],Lt(i),Ue||(Me=0)}function Ye(i){Ue||(Ue=!0,queueMicrotask(Ut));for(var e=i;e.parent!==null;){e=e.parent;var n=e.f;if(n&(Re|L)){if(!(n&D))return;e.f^=D}}fn.push(e)}function Ii(i,e){var n=i.first,t=[];e:for(;n!==null;){var r=n.f,o=(r&L)!==0,a=o&&(r&D)!==0;if(!a&&!(r&Z))if(r&qe){o?n.f^=D:Ce(n)&&We(n);var l=n.first;if(l!==null){n=l;continue}}else r&oi&&t.push(n);var d=n.next;if(d===null){let u=n.parent;for(;u!==null;){if(i===u)break e;var c=u.next;if(c!==null){n=c;continue e}u=u.parent}}n=d}for(var s=0;s<t.length;s++)l=t[s],e.push(l),Ii(l,e)}function g(i){var l;var e=i.f,n=(e&Y)!==0;if(n&&e&Qe){var t=fi(i);return An(i),t}if(C!==null){V!==null&&V.includes(i)&&pt();var r=C.deps;R===null&&r!==null&&r[z]===i?z++:R===null?R=[i]:R.push(i),ne!==null&&b!==null&&b.f&D&&!(b.f&L)&&ne.includes(i)&&(F(b,ie),Ye(b))}else if(n&&i.deps===null){var o=i,a=o.parent;a!==null&&!((l=a.deriveds)!=null&&l.includes(o))&&(a.deriveds??(a.deriveds=[])).push(o)}return n&&(o=i,Ce(o)&&mi(o)),i.v}function ae(i){const e=C;try{return C=null,i()}finally{C=e}}const Gt=~(ie|be|D);function F(i,e){i.f=i.f&Gt|e}function Bn(i,e=1){var n=+g(i);return _(i,n+e),n}function en(i,e=!1,n){P={p:P,c:null,e:null,m:!1,s:i,x:null,l:null},ve&&!e&&(P.l={s:null,u:null,r1:[],r2:N(!1)})}function nn(i){const e=P;if(e!==null){const a=e.e;if(a!==null){var n=b,t=C;e.e=null;try{for(var r=0;r<a.length;r++){var o=a[r];J(o.effect),te(o.reaction),kn(o.fn)}}finally{J(n),te(t)}}P=e.p,e.m=!0}return{}}function Zt(i){if(!(typeof i!="object"||!i||i instanceof EventTarget)){if(oe in i)mn(i);else if(!Array.isArray(i))for(let e in i){const n=i[e];typeof n=="object"&&n&&oe in n&&mn(n)}}}function mn(i,e=new Set){if(typeof i=="object"&&i!==null&&!(i instanceof EventTarget)&&!e.has(i)){e.add(i),i instanceof Date&&i.getTime();for(let t in i)try{mn(i[t],e)}catch{}const n=Ne(i);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const t=ri(n);for(let r in t){const o=t[r].get;if(o)try{o.call(i)}catch{}}}}}let Nn=!1;function Vt(){Nn||(Nn=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{var e;if(!i.defaultPrevented)for(const n of i.target.elements)(e=n.__on_r)==null||e.call(n)})},{capture:!0}))}function Si(i){var e=C,n=b;te(null),J(null);try{return i()}finally{te(e),J(n)}}function Ei(i,e,n,t=n){i.addEventListener(e,()=>Si(n));const r=i.__on_r;r?i.__on_r=()=>{r(),t()}:i.__on_r=t,Vt()}const Jt=new Set,On=new Set;function Kt(i,e,n,t){function r(o){if(t.capture||Pe.call(e,o),!o.cancelBubble)return Si(()=>n.call(this,o))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?xi(()=>{e.addEventListener(i,r,t)}):e.addEventListener(i,r,t),r}function Ge(i,e,n,t,r){var o={capture:t,passive:r},a=Kt(i,e,n,o);(e===document.body||e===window||e===document)&&Rt(()=>{e.removeEventListener(i,a,o)})}function Pe(i){var M;var e=this,n=e.ownerDocument,t=i.type,r=((M=i.composedPath)==null?void 0:M.call(i))||[],o=r[0]||i.target,a=0,l=i.__root;if(l){var d=r.indexOf(l);if(d!==-1&&(e===document||e===window)){i.__root=e;return}var c=r.indexOf(e);if(c===-1)return;d<=c&&(a=d)}if(o=r[a]||i.target,o!==e){Ki(i,"currentTarget",{configurable:!0,get(){return o||n}});var s=C,u=b;te(null),J(null);try{for(var h,p=[];o!==null;){var f=o.assignedSlot||o.parentNode||o.host||null;try{var m=o["__"+t];if(m!==void 0&&!o.disabled)if(yn(m)){var[y,...v]=m;y.apply(o,[i,...v])}else m.call(o,i)}catch(I){h?p.push(I):h=I}if(i.cancelBubble||f===e||f===null)break;o=f}if(h){for(let I of p)queueMicrotask(()=>{throw I});throw h}}finally{i.__root=e,delete i.currentTarget,te(s),J(u)}}}function Xt(i){var e=document.createElement("template");return e.innerHTML=i,e.content}function jn(i,e){var n=b;n.nodes_start===null&&(n.nodes_start=i,n.nodes_end=e)}function de(i,e){var n=(e&xt)!==0,t=(e&Pt)!==0,r,o=!i.startsWith("<!>");return()=>{r===void 0&&(r=Xt(o?i:"<!>"+i),n||(r=je(r)));var a=t?document.importNode(r,!0):r.cloneNode(!0);if(n){var l=je(a),d=a.lastChild;jn(l,d)}else jn(a,a);return a}}function re(i,e){i!==null&&i.before(e)}const Yt=["touchstart","touchmove"];function er(i){return Yt.includes(i)}function fe(i,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(i.__t??(i.__t=i.nodeValue))&&(i.__t=n,i.nodeValue=n==null?"":n+"")}function nr(i,e){return ir(i,e)}const ue=new Map;function ir(i,{target:e,anchor:n,props:t={},events:r,context:o,intro:a=!0}){_t();var l=new Set,d=u=>{for(var h=0;h<u.length;h++){var p=u[h];if(!l.has(p)){l.add(p);var f=er(p);e.addEventListener(p,Pe,{passive:f});var m=ue.get(p);m===void 0?(document.addEventListener(p,Pe,{passive:f}),ue.set(p,1)):ue.set(p,m+1)}}};d(bn(Jt)),On.add(d);var c=void 0,s=Wt(()=>{var u=n??e.appendChild(It());return Se(()=>{if(o){en({});var h=P;h.c=o}r&&(t.$$events=r),c=i(u,t)||{},o&&nn()}),()=>{var f;for(var h of l){e.removeEventListener(h,Pe);var p=ue.get(h);--p===0?(document.removeEventListener(h,Pe),ue.delete(h)):ue.set(h,p)}On.delete(d),Ln.delete(c),u!==n&&((f=u.parentNode)==null||f.removeChild(u))}});return Ln.set(c,s),c}let Ln=new WeakMap;function qi(i,e,n,t=null,r=!1){var o=i,a=null,l=null,d=null,c=r?wn:0;xn(()=>{d!==(d=!!e())&&(d?(a?Fe(a):a=Se(()=>n(o)),l&&hn(l,()=>{l=null})):(l?Fe(l):t&&(l=Se(()=>t(o))),a&&hn(a,()=>{a=null})))},c)}function tr(i,e){return e}function rr(i,e,n,t){for(var r=[],o=e.length,a=0;a<o;a++)Pn(e[a].e,r,!0);var l=o>0&&r.length===0&&n!==null;if(l){var d=n.parentNode;Et(d),d.append(n),t.clear(),ee(i,e[0].prev,e[o-1].next)}Ai(r,()=>{for(var c=0;c<o;c++){var s=e[c];l||(t.delete(s.k),ee(i,s.prev,s.next)),le(s.e,!l)}})}function or(i,e,n,t,r,o=null){var a=i,l={flags:e,items:new Map,first:null},d=null,c=!1;xn(()=>{var s=n(),u=yn(s)?s:s==null?[]:bn(s),h=u.length;if(!(c&&h===0)){c=h===0;{var p=C;ar(u,l,a,r,e,(p.f&Z)!==0,t)}o!==null&&(h===0?d?Fe(d):d=Se(()=>o(a)):d!==null&&hn(d,()=>{d=null})),n()}})}function ar(i,e,n,t,r,o,a){var l=i.length,d=e.items,c=e.first,s=c,u,h=null,p=[],f=[],m,y,v,M;for(M=0;M<l;M+=1){if(m=i[M],y=a(m,M),v=d.get(y),v===void 0){var I=s?s.e.nodes_start:n;h=cr(I,e,h,h===null?e.first:h.next,m,y,M,t,r),d.set(y,h),p=[],f=[],s=h.next;continue}if(sr(v,m,M),v.e.f&Z&&Fe(v.e),v!==s){if(u!==void 0&&u.has(v)){if(p.length<f.length){var H=f[0],x;h=H.prev;var E=p[0],q=p[p.length-1];for(x=0;x<p.length;x+=1)Fn(p[x],H,n);for(x=0;x<f.length;x+=1)u.delete(f[x]);ee(e,E.prev,q.next),ee(e,h,E),ee(e,q,H),s=H,h=q,M-=1,p=[],f=[]}else u.delete(v),Fn(v,s,n),ee(e,v.prev,v.next),ee(e,v,h===null?e.first:h.next),ee(e,h,v),h=v;continue}for(p=[],f=[];s!==null&&s.k!==y;)(o||!(s.e.f&Z))&&(u??(u=new Set)).add(s),f.push(s),s=s.next;if(s===null)continue;v=s}p.push(v),h=v,s=v.next}if(s!==null||u!==void 0){for(var w=u===void 0?[]:bn(u);s!==null;)(o||!(s.e.f&Z))&&w.push(s),s=s.next;var B=w.length;if(B>0){var K=null;rr(e,w,K,d)}}b.first=e.first&&e.first.e,b.last=h&&h.e}function sr(i,e,n,t){li(i.v,e),i.i=n}function cr(i,e,n,t,r,o,a,l,d){var c=(d&yt)!==0,s=(d&vt)===0,u=c?s?Cn(r):N(r):r,h=d&bt?N(a):a,p={i:h,v:u,k:o,a:null,e:null,prev:n,next:t};try{return p.e=Se(()=>l(i,u,h),Mt),p.e.prev=n&&n.e,p.e.next=t&&t.e,n===null?e.first=p:(n.next=p,n.e.next=p.e),t!==null&&(t.prev=p,t.e.prev=p.e),p}finally{}}function Fn(i,e,n){for(var t=i.next?i.next.e.nodes_start:n,r=e?e.e.nodes_start:n,o=i.e.nodes_start;o!==t;){var a=Ke(o);r.before(o),o=a}}function ee(i,e,n){e===null?i.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function lr(i,e,n,t){var r=i.__attributes??(i.__attributes={});r[e]!==(r[e]=n)&&(n==null?i.removeAttribute(e):typeof n!="string"&&dr(i).includes(e)?i[e]=n:i.setAttribute(e,n))}var Un=new Map;function dr(i){var e=Un.get(i.nodeName);if(e)return e;Un.set(i.nodeName,e=[]);for(var n,t=Ne(i),r=Element.prototype;r!==t;){n=ri(t);for(var o in n)n[o].set&&e.push(o);t=Ne(t)}return e}function Gn(i,e,n){if(n){if(i.classList.contains(e))return;i.classList.add(e)}else{if(!i.classList.contains(e))return;i.classList.remove(e)}}function hr(i,e,n=e){var t=Xe();Ei(i,"input",()=>{var r=Zn(i)?Vn(i.value):i.value;n(r),t&&r!==(r=e())&&(i.value=r??"")}),Te(()=>{var r=e();Zn(i)&&r===Vn(i.value)||i.type==="date"&&!r&&!i.value||r!==i.value&&(i.value=r??"")})}function ur(i,e,n=e){Ei(i,"change",()=>{var t=i.checked;n(t)}),e()==null&&n(!1),Te(()=>{var t=e();i.checked=!!t})}function Zn(i){var e=i.type;return e==="number"||e==="range"}function Vn(i){return i===""?null:+i}function Jn(i,e){return i===e||(i==null?void 0:i[oe])===e}function pr(i={},e,n,t){return kn(()=>{var r,o;return Te(()=>{r=o,o=[],ae(()=>{i!==n(...o)&&(e(i,...o),r&&Jn(n(...r),i)&&e(null,...r))})}),()=>{xi(()=>{o&&Jn(n(...o),i)&&e(null,...o)})}}),i}function Ri(i=!1){const e=P,n=e.l.u;if(!n)return;let t=()=>Zt(e.s);if(i){let r=0,o={};const a=Le(()=>{let l=!1;const d=e.s;for(const c in d)d[c]!==o[c]&&(o[c]=d[c],l=!0);return l&&r++,r});t=()=>g(a)}n.b.length&&Qt(()=>{Kn(e,t),cn(n.b)}),dn(()=>{const r=ae(()=>n.m.map(et));return()=>{for(const o of r)typeof o=="function"&&o()}}),n.a.length&&dn(()=>{Kn(e,t),cn(n.a)})}function Kn(i,e){if(i.l.s)for(const n of i.l.s)g(n);e()}let ze=!1;function fr(i){var e=ze;try{return ze=!1,[i(),ze]}finally{ze=e}}function Xn(i){for(var e=b,n=b;e!==null&&!(e.f&(L|Re));)e=e.parent;try{return J(e),i()}finally{J(n)}}function Be(i,e,n,t){var q;var r=(n&wt)!==0,o=!ve||(n&Tt)!==0,a=(n&At)!==0,l=(n&kt)!==0,d=!1,c;a?[c,d]=fr(()=>i[e]):c=i[e];var s=oe in i||rt in i,u=((q=ge(i,e))==null?void 0:q.set)??(s&&a&&e in i?w=>i[e]=w:void 0),h=t,p=!0,f=!1,m=()=>(f=!0,p&&(p=!1,l?h=ae(t):h=t),h);c===void 0&&t!==void 0&&(u&&o&&dt(),c=m(),u&&u(c));var y;if(o)y=()=>{var w=i[e];return w===void 0?m():(p=!0,f=!1,w)};else{var v=Xn(()=>(r?Le:ln)(()=>i[e]));v.f|=it,y=()=>{var w=g(v);return w!==void 0&&(h=void 0),w===void 0?h:w}}if(!(n&Ct))return y;if(u){var M=i.$$legacy;return function(w,B){return arguments.length>0?((!o||!B||M||d)&&u(B?y():w),w):y()}}var I=!1,H=!1,x=Cn(c),E=Xn(()=>Le(()=>{var w=y(),B=g(x);return I?(I=!1,H=!0,B):(H=!1,x.v=w)}));return r||(E.equals=Tn),function(w,B){if(arguments.length>0){const K=B?g(E):o&&a?pe(w):w;return E.equals(K)||(I=!0,_(x,K),f&&h!==void 0&&(h=K),ae(()=>g(E))),w}return g(E)}}function Qi(i){P===null&&zt(),ve&&P.l!==null?mr(P).m.push(i):dn(()=>{const e=ae(i);if(typeof e=="function")return e})}function mr(i){var e=i.l;return e.u??(e.u={a:[],b:[],m:[]})}const gr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gr);mt();function Wi(i){let e=i.length;for(;e!=0;){let n=Math.floor(Math.random()*e);e--,[i[e],i[n]]=[i[n],i[e]]}return i}function yr(i){const n=new Date().getTime()-i.getTime();if(n<0)throw new Error("The provided date is in the future.");const t=Math.floor(n/(1e3*60*60)),r=Math.floor(n%(1e3*60*60)/(1e3*60)),o=Math.floor(n%(1e3*60)/1e3);return[t.toString().padStart(2,"0"),r.toString().padStart(2,"0"),o.toString().padStart(2,"0")].join(":")}var br=de('<form class="svelte-sav0zk"><fieldset class="svelte-sav0zk"></fieldset> <footer class="svelte-sav0zk"><button type="submit" class="disabled:hidden svelte-sav0zk">Submit</button></footer></form>');function vr(i,e){en(e,!1);let n=Be(e,"onSubmit",8),t=Be(e,"answered",8,!1),r=Be(e,"src",8),o=G(document.createElement("fieldset"));function a(c){c.preventDefault();const s=c.target;if(!(s instanceof HTMLFormElement))throw new Error("Not a form");const h=new FormData(s).get("answer");return n()(h==="correct"),!0}Qi(()=>{var u;ci(o,g(o).innerHTML=r());const c=g(o).querySelector("ul");if(!c)throw new Error("No answer set");const s=Wi(Array.from(c.children));for(const h of s){const p=h.innerHTML,f=((u=h.textContent)==null?void 0:u.startsWith("✅"))??!1,m=document.createElement("label");m.className="grid grid-cols-[1.5rem,1fr] gap-x-2 items-baseline",m.innerHTML=p.replace(/[✅❌] /g,"");const y=document.createElement("input");y.type="radio",y.name="answer",y.required=!0,f&&(y.value="correct"),m.prepend(y),h.replaceChildren(m),h.className="mb-4",c.appendChild(h)}}),Ri();var l=br(),d=S(l);pr(d,c=>_(o,c),()=>g(o)),X(()=>lr(l,"data-answered",t())),Ge("submit",l,a),re(i,l),nn()}const wr=`## Question: 1 of 127\r
\r
A patient has managed care insurance and has been referred to a specialist for gastric bypass surgery. Which of the following is needed to ensure payment?\r
\r
- Fee schedule\r
- ✅ Preauthorization\r
- Concurrent review\r
- Retrospective review\r
\r
## Question: 2 of 127\r
\r
In which of the following scenarios is it appropriate to release a patient's psychiatric records without the patient's consent?\r
\r
- ✅ When the patient is being investigated by the police\r
- When a provider is requesting medical records for a new patient\r
- When the patient admits themselves into a facility\r
- When the patient is receiving hospice care\r
\r
## Question: 3 of 127\r
\r
Which of the following is a document used to analyze accounts receivable based on dates of service?\r
\r
- Explanation of benefits (EOB)\r
- Remittance advice (RA)\r
- Itemized statement\r
- ✅ Aging report\r
\r
## Question: 4 of 127\r
\r
A patient is covered by Medicare through managed care.\r
Which of the following parts of Medicare includes this coverage?\r
\r
- Part A\r
- Part B\r
- ✅ Part C\r
- Part D\r
\r
## Question: 5 of 127\r
\r
Complete the following question by referencing the coding exhibit.\r
\r
A billing and coding specialist is billing for services provided by an assistant surgeon.\r
Which of the following modifiers should the specialist use?\r
\r
| Modifier | Description           |\r
|----------|-----------------------|\r
| -47      | Anesthesia by Surgeon |\r
| -62      | Two Surgeons          |\r
| -66      | surgical Team         |\r
| -80      | Assistant Surgeon     |\r
\r
- -62\r
- -66\r
- ✅ -80\r
- -47\r
\r
## Question: 6 of 127\r
\r
Which of the following requires an authorization to release protected health information (PHI)?\r
\r
- Processing an insurance claim\r
- ✅ Life insurance policy\r
- _Subpoena duces tecum_\r
- Reporting communicable diseases\r
\r
## Question: 7 of 127\r
\r
Which of the following statements is true when determining patient financial responsibility by reviewing the remittance advice?\r
\r
- Any services denied for erroneous claim data are the responsibility of the patient.\r
- ✅ Any coinsurance, copayments, or deductibles should be collected from the patient.\r
- The difference between the billed amount and the allowed amount should be collected from the patient.\r
- Claims not billed to a third-party payer within the correct time period should be collected from the patient.\r
\r
## Question: 8 of 127\r
\r
A billing and coding specialist is coding a claim for a provider who performed a hysterectomy and needs to determine whether the procedure was done by an excisional or laparoscopic procedure.\r
\r
Which of the following actions should the specialist take to determine the correct CPT®\r
procedure code?\r
\r
- ✅ Review the operative report.\r
- Code the procedure as laparoscopic because it is the most commonly used approach.\r
- Code the procedure as excisional because the reimbursement will be greater\r
- Review the provider's SOAP notes.\r
\r
## Question: 9 of 127\r
\r
A billing and coding specialist is reviewing a remittance advice that has a deductible of $100 indicated for one of the claims.\r
The provider asks the specialist to write it off. Which of the following describes this scenario?\r
\r
- ✅ Fraud\r
- Abuse\r
- Adjudication\r
- Spend down\r
\r
## Question: 10 of 127\r
\r
A billing and coding specialist is verifying coverage for a Medicare beneficiary. Which of the following determines Medicare coverage of services on a national level?\r
\r
- ✅ NCD\r
- PAR\r
- LCD\r
- EDI\r
\r
## Question: 11 of 127\r
\r
Which of the following is a specified amount of money that a patient who has a preferred provider organization (PPO) plan is required to pay for each visit or medical service?\r
\r
- Premium\r
- ✅ Copayment\r
- Coinsurance\r
- Deductible\r
\r
## Question: 12 of 127\r
\r
For which of the following is the provider responsible?\r
\r
- Coinsurance\r
- ✅ Professional courtesy\r
- Copay\r
- Allowed amount\r
\r
## Question: 13 of 127\r
\r
A patient's employer has not submitted a premium payment for the company's commercial insurance plan. Which of the following is the claim\r
status the provider will receive for any claims sent to the third-party payer?\r
\r
- Invalid\r
- Suspended\r
- ✅ Denied\r
- Incomplete\r
\r
## Question: 14 of 127\r
\r
Complete the following question by referencing the coding exhibit.\r
\r
A provider documents a simple repair of a superficial wound that is 2.5 cm long on a patient's hand. A billing and coding specialist reports the code for a 5 cm simple repair. Which of the following describes the specialist's action?\r
\r
#### CPT® Code Set\r
\r
| Code  | Description                                                                                                                                          |\r
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| 12001 | Simple repair of superficial wounds of scalp, neck, axillae, external genitalia, trunk and/or extremities (including hands and feet); 2.5 cm or less |\r
| 12002 | Simple repair of superficial wounds of scalp, neck, axillae, external genitalia, trunk and/or extremities (including hands and feet); 2.6 to 7.5cm   |\r
\r
- Monitoring\r
- Clustering\r
- ✅ Upcoding\r
- Auditing\r
\r
## Question: 15 of 127\r
\r
A billing and coding specialist is reviewing a letter from a patient's third-party payer about an emergency procedure that was performed for the\r
patient. The letter states that preauthorization requirements were not met and the claim was denied. Which of the following actions should the\r
specialist take?\r
\r
- ✅ Send an appeal letter to the third-party payer.\r
- Write off the total amount of the bill as uncollectible.\r
- Bill the patient for services rendered.\r
- Resubmit the bill to the third-party payer with a different CPT® code.\r
\r
## Question: 16 of 127\r
\r
Which of the following identifies improper payments made for CMS claims?\r
\r
- Office of Inspector General (OIG)\r
- Quality Improvement Organizations (QIOs)\r
- ✅ Recovery Audit Contractors (RACs)\r
- Medicare Administrative Contractors (MACs)\r
\r
## Question: 17 of 127\r
\r
A billing and coding specialist is completing a claim to be submitted for Blue Cross Blue Shield by a provider who used to be in private practice\r
but was recently hired by a group practice. Which of the following is true regarding the provider's national provider identifier (NPI)?\r
\r
- ✅ The provider's individual NPI for the group practice is the same as the one from the private practice.\r
- The claim has to wait to be submitted until a new NPI is assigned to the provider.\r
- Since the provider has joined a group, only the group's NPI is listed on the claim.\r
- The provider's Social Security number can be substituted for the NPI temporarily.\r
\r
## Question: 18 of 127\r
\r
Complete the following question by referencing the coding exhibit.\r
\r
A billing and coding specialist is reviewing the encounter form for a patient who has type 1 diabetes mellitus and stage III chronic kidney disease\r
(CKD). Which of the following diagnosis codes should be assigned?\r
\r
#### ICD-10-CM Code Set\r
\r
| Code   | Description                                                   |\r
|--------|---------------------------------------------------------------|\r
| E10.22 | Type 1 diabetes mellitus with diabetic chronic kidney disease |\r
| E11.9  | Type 2 diabetes mellitus without complications                |\r
| N18.2  | Chronic kidney disease, stage 2                               |\r
| N18.6  | End stage renal disease                                       |\r
\r
- E119\r
- N18.2\r
- ✅ E10.22\r
- N18.6\r
\r
## Question: 19 of 127\r
\r
Which of the following should be included on a claim form that is sent from a specialist to a managed health care organization?\r
\r
- A claims adjustment reason code\r
- A prior authorization number\r
- The referring provider's Social Security number (SSN)\r
- ✅ The referring provider's national provider identifier (NPI)\r
\r
## Question: 20 of 127\r
\r
Complete the following question by referencing the coding exhibit.\r
\r
A patient is in the third trimester of pregnancy and has developed gestational diabetes mellitus that is diet-controlled. Which of the following\r
ICD-10-CM codes should a billing and coding specialist assign to this patient?\r
\r
#### ICD-10-CM Code Set\r
\r
| Code    | Description                                                 |\r
|---------|-------------------------------------------------------------|\r
| O24.410 | Gestational diabetes mellitus in pregnancy. diet controlled |\r
| Z79.84  | Long term (current) use of oral hypoglycemic                |\r
| Z79.4   | Long term (current) use of insulin                          |\r
\r
- O24.410, Z79.84\r
- O24.410, Z79.4\r
- ✅ O24.410\r
- Z79.4, O24.410\r
\r
## Question: 21 of 127\r
\r
Which of the following terms describes the amount the patient must pay for a service when they have an insurance plan benefit that pays 70% of\r
the allowed amount and the patient is responsible for 30% of the allowed amount?\r
\r
- ✅ Coinsurance\r
- Deductible\r
- Premium\r
- Copayment\r
\r
## Question: 22 of 127\r
\r
A married couple each have group insurance through their employers. The patient has an appointment with the provider. Which insurance\r
should be used as primary for the appointment?\r
\r
- The partner's policy\r
- The policy belonging to the older person\r
- The policy belonging to the person who has their birthday first in the calendar year\r
- ✅ The patient's policy\r
\r
## Question: 23 of 127\r
\r
A provider accepts assignment for a patient who has a $10 copayment and has already met $100 of their $150 deductible. The office charge is\r
$100 and the allowed amount is $70. How much should the provider's office adjust off the patient's account?\r
\r
- ✅ $30\r
- $90\r
- $10\r
- $50\r
\r
## Question: 24 of 127\r
\r
Complete the following question by referencing the coding exhibit.\r
\r
Which of the following physical status modifiers should a billing and coding specialist use for anesthesia services performed on a healthy 4-\r
year-old patient?\r
\r
#### CPT® Physical Status Modifiers\r
\r
| Modifier | Description                                                                    |\r
|----------|--------------------------------------------------------------------------------|\r
| -P1      | A normal, healthy patient                                                      |\r
| -P2      | A patient with mild systemic disease                                           |\r
| -P3      | A patient with severe systemic disease                                         |\r
| -P4      | A patient with severe systemic disease that is a constant threat to life       |\r
| -P5      | A moribund patient who is not expected to survive without the operation        |\r
| -P6      | A declared brain-dead patient whose organs are being removed for donor purpose |\r
\r
- ✅ -P1\r
- -P3\r
- -P4\r
- -P6\r
\r
## Question: 25 of 127\r
\r
A billing and coding specialist is posting payments from an explanation of benefits (EOB).\r
Which of the following equations determines how patient responsibility is calculated?\r
\r
- Charged amount - Allowed amount - Deductible amount = Patient responsibility\r
> Any deductible amount will be included in the allowed amount and is part of the patient's responsibility. Patient responsibility cannot be more than the allowed amount determined by the payments and adjustments deducted from the charged amount.\r
- ✅ Charged amount - Payment amount - Adjustment amount = Patient responsibility\r
> This is the equation used to determine patient responsibility. Patient responsibility cannot be more than the allowed amount determined by the payments and adjustments deducted from the charged amount.\r
- Charged amount - Allowed amount - Deductible amount - Paid amount = Patient responsibility\r
> Any deductible amount will be included in the allowed amount and is part of the patient's responsibility. Patient responsibility cannot be more than the allowed amount determined by the payments and adjustments deducted from the charged amount.\r
- Charged amount - Allowed amount - Adjustment amount = Patient responsibility\r
> The allowed amount is reflected in the adjustment amount. Patient responsibility cannot be more than the allowed amount determined by the payments and adjustments deducted from the charged amount.\r
\r
## Question: 26 of 127\r
\r
When coding for outpatient and professional services and procedures, a billing and coding specialist must sequence the diagnosis codes\r
according to ICD-10-CM guidelines. Which of the following describes the first listed diagnosis code on a claim?\r
\r
- ✅ Primary diagnosis\r
- Manifestation\r
- Late effect\r
- Assessment\r
\r
## Question: 27 of 127\r
\r
A billing and coding specialist is submitting a batch of claims to the\r
clearinghouse and receives a report stating that three claims were rejected.\r
Which of the following actions should the specialist take?\r
\r
- Bill the patient for the services that were not covered.\r
- ✅ Review the scrubber report.\r
- Call the third-party payer to determine the reasons for rejection.\r
- Appeal the rejections.\r
\r
## Question: 28 of 127\r
\r
Which of the following information is required to include on an Advance Beneficiary Notice (ABN) form?\r
\r
- CPT® codes\r
- ✅ The reason Medicare may not pay\r
- ICD-10-CM codes\r
- The reason a patient needs a procedure\r
\r
## Question: 29 of 127\r
\r
A billing and coding specialist is reviewing a claim edit report and identifies a rejection for missing patient demographic information. Which of\r
the following missing pieces of patient demographic information would cause a rejection from the clearinghouse?\r
\r
- Middle name\r
- ✅ Date of birth\r
- Apartment number\r
- Emergency contact name\r
\r
## Question: 30 of 127\r
\r
Claims that are submitted without an NPI number will delay payment to the\r
provider due to which of the following?\r
\r
- The number is needed to identify the patient.\r
- ✅ The number is needed to identify the provider.\r
- The number is used to identify the claim.\r
- The number is used to preauthorize the service.\r
\r
## Question: 31 of 127\r
\r
The HIPAA Privacy Rule requires covered entities to track which of the following?\r
\r
- ✅ Release of protected health information (PHI)\r
- Claims adjudication\r
- Coordination of care\r
- Clinical trial participation\r
\r
## Question: 32 of 127\r
\r
Which of the following procedures refers to the removal of kidney stones?\r
\r
- Nephrolysis\r
- Nephrectomy\r
- ✅ Nephrolithotomy\r
- Nephrotomy\r
\r
## Question: 33 of 127\r
\r
A billing and coding specialist is using an accounts receivable aging report to determine which accounts should be sent to collections.\r
According to best practices, which of the following accounts should the specialist send to collections?\r
\r
- ✅ An account that has a balance of $600 and is 135 days old\r
- An account that has a balance of $1,500 and is 60 days old\r
- An account that has a balance of $60 and is 45 days old\r
- An account that has a balance of $500 and is 110 days old\r
\r
## Question: 34 of 127\r
\r
A billing and coding specialist is coding a claim for an autopsy.\r
Which of the following CPT® codes should be included on the claim?\r
\r
- 80408 Aldosterone suppression evaluation panel (e.g., saline infusion)\r
- ✅ 28000 Necropsy (autopsy), gross examination only; without central nervous system\r
- 31615 Tracheobronchoscopy through established tracheostomy\r
- 81000 Urinalysis, by dip stick or tablet reagent for bilirubin, glucose, hemoglobin, ketones, leukocytes, nitrite, pH, protein, specific gravity,\r
  urobilinogen, any number of these constituents\r
\r
## Question: 35 of 127\r
\r
A provider orders a comprehensive metabolic panel for a 70-year-old patient who has Medicare as their primary insurance. Which of the\r
following is required to inform the patient they may be responsible for payment?\r
\r
- HIPAA\r
- ✅ Advance Beneficiary Notice\r
- Assignment of benefits\r
- Claim form\r
\r
## Question: 36 of 127\r
\r
Which of the following actions by a billing and coding specialist is an example of fraud?\r
\r
- Submitting a claim with errors on it\r
- Violating participating provider agreements with third-party payers\r
- ✅ Billing for services not provided to obtain higher reimbursement\r
- Billing noncovered services as covered services in error\r
\r
## Question: 37 of 127\r
\r
Which of the following is an electronic form that is used to post reimbursements?\r
\r
- UB-04 claim form\r
- Electronic data interchange (EDI)\r
- CMS-1500 claim form\r
- ✅ Electronic remittance advice (ERA)\r
\r
## Question: 38 of 127\r
\r
Which of the following does a patient sign to allow payment of claims directly to the provider?\r
\r
- Advance Beneficiary Notice (ABN)\r
- ✅ Assignment of benefits statement\r
- Notice of Privacy Practices (NPP)\r
- Release of information form\r
\r
## Question: 39 of 127\r
\r
A billing and coding specialist is posting payments to accounts based on a remittance advice and discovers a denial of payment. Which of the\r
following codes indicates why reimbursement was denied?\r
\r
- ✅ Claims adjustment reason code\r
- Unlisted code\r
- Category II code\r
- Taxonomy code\r
\r
## Question: 40 of 127\r
\r
A billing and coding specialist should identify that which of the following statements is correct regarding the filing limit for Medicaid?\r
\r
- The filing limit is 1 year from the date of service.\r
- ✅ The filing limit varies from state to state.\r
- There is no filing limit for Medicaid.\r
- The filing limit is 90 days from the date of service.\r
\r
## Question: 41 of 127\r
\r
A patient was seen in an outpatient clinic for a cough, chest congestion, and a low-grade fever and was given the diagnosis of possible\r
pneumonia. How should a billing and coding specialist code this encounter using ICD-10-CM?\r
\r
- Cough, fever, pneumonia\r
- Pneumonia\r
- ✅ Cough, chest congestion, and low-grade fever\r
- Possible pneumonia\r
\r
## Question: 42 of 127\r
\r
A provider documents a patient's response to questions about various parts of the body. A billing and coding specialists should identify that\r
this information is included in which of the following sections of the note?\r
\r
- Past medical history\r
- Family history\r
- ✅ Review of systems\r
- Comprehensive examination\r
\r
## Question: 43 of 127\r
\r
Many third-party payers require that a patient pay a set amount of eligible charges per year before the patient's health care plan will begin to\r
pay benefits. This refers to which of the following terms?\r
\r
- Coinsurance\r
- Premium\r
- ✅ Deductible\r
- Copay\r
\r
## Question: 44 of 127\r
\r
A billing and coding specialist is preparing a claim for an esophagectomy.\r
Which of the following types of service is being provided?\r
\r
- Viewing\r
- Incision\r
- ✅ Removal\r
- Repair\r
\r
## Question: 45 of 127\r
\r
A billing and coding specialist is posting a payment received from Medicare.\r
The specialist should identify that which part of Medicare covers prescription costs?\r
\r
- Part A\r
- Part B\r
- Part C\r
- ✅ Part D\r
\r
## Question: 46 of 127\r
\r
A billing and coding specialist is performing a coordination of benefits check.\r
The patient has primary and secondary benefits. Which of the following applies to the guarantor?\r
\r
- They are responsible for obtaining preauthorization for services.\r
- They are responsible for providing the lowest possible cost of health care services.\r
- ✅ They are responsible for any charges that are incurred.\r
- They are responsible for submitting the claim for the secondary third-party payer.\r
\r
## Question: 47 of 127\r
\r
Which of the following processes is used to verify patient benefits and insurance coverage for an outpatient procedure?\r
\r
- Preadmission review\r
- ✅ Precertification\r
- Adjudication\r
- Coordination of benefits\r
\r
## Question: 48 of 127\r
\r
A billing and coding specialist is processing a claim for a new patient who came to the office for a sore throat. The provider diagnosed the\r
patient with tonsilitis and wrote a prescription for antibiotics. Which of the following codes should the specialist use?\r
\r
- 99213 Office or other outpatient visit for the evaluation and management of an established patient, which requires a medically appropriate history and/or examination and low level of medical decision making.\r
- 99393 Periodic comprehensive preventive medicine reevaluation and management of an individual including an age and gender appropriate history, exam, counseling/guidance/risk factor reduction interventions, and the ordering of laboratory/diagnostic procedures; established patient: late childhood (age 5 through 11 years)\r
- ✅ 99203 Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and low level of medical decision making.\r
- 99282 Emergency department visit for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and straightforward level of medical decision making.\r
\r
## Question: 49 of 127\r
\r
A billing and coding specialist is evaluating code assignments for a batch of claims. Which of the following should the specialist consult as a\r
resource to check for proper code assignment based on procedure-to-procedure (PTP) code pair edits and medically unlikely edits (MUEs)?\r
\r
- ✅ National correct Coding initiative (NCCI)\r
- Recovery audit contractor (RAC) program\r
- Medicare coverage database (MCD)\r
- Office of the inspector General (OIG)\r
\r
## Question: 50 of 127\r
\r
A patient has a new diagnosis of hypothyroidism. In which of the following body systems is the thyroid gland located?\r
\r
- Urinary system\r
- Digestive system\r
- ✅ Endocrine system\r
- Lymphatic system\r
\r
## Question: 51 of 127\r
\r
Which of the following government agencies is responsible for combating fraud and abuse in health insurance and health care delivery?\r
\r
- ✅ Office of inspector General (OIG)\r
- Compliance officer\r
- Department of Health and Human Services (HHS)\r
- Centers for Medicare and Medicaid Services (CMS)\r
\r
## Question: 52 of 127\r
\r
Complete the following question by referencing the coding exhibit.\r
\r
A billing and coding specialist is coding a procedure note for a patient who had a diagnostic hysteroscopy that resulted in a hysteroscopic\r
cervical biopsy. Which of the following CPT® codes should the specialist use?\r
\r
#### CPT® Code Set\r
\r
| Code / Modifier | Description                                                                                           |\r
|-----------------|-------------------------------------------------------------------------------------------------------|\r
| 58555           | Hysteroscopy, diagnostic (separate procedure)                                                         |\r
| 58558           | Hysteroscopy, surgical: with sampling (biopsy) of endometrium and/or polypectomy, with or without D&C |\r
| -59             | Distinct Procedural Service                                                                           |\r
\r
- 58555\r
- ✅ 58558\r
- 58558, 58555-59\r
- 58558-59, 58555\r
\r
## Question: 53 of 127\r
\r
A billing and coding specialist is contacted by a patient who requests a copy of\r
the remittance advice for a recently adjudicated claim. Which of the following actions should the specialist take?\r
\r
- ✅ Remove all information other than what pertains to the patient.\r
- Make a clear copy of the page where the patient's information is included.\r
- Explain to the patient that this information cannot be released to them.\r
- Refer the patient to their third-party payer for a copy of the remittance advice.\r
\r
## Question: 54 of 127\r
\r
Which of the following is the filing limit for claim submission for an outpatient service with TRICARE?\r
\r
- ✅ Within 1 year from the date of service\r
- Within 90 days from the date of service\r
- Within 60 days from the date of service\r
- Within 2 years from the date of service\r
\r
## Question: 55 of 127\r
\r
Which of the following is an example of a breach of patient confidentiality?\r
\r
- ✅ Discussing patient information in a public space\r
- Sharing patient information with the patient's health care team\r
- Releasing patient information to someone listed on the protected health information (PHI) disclosure form\r
- Giving patient information to an employer for a workers' compensation claim\r
\r
## Question: 56 of 127\r
\r
A billing and coding specialist is analyzing the health of a practice's revenue cycle using an aging report.\r
Which of the following categories of the report should contain the lowest percentage of accounts receivable?\r
\r
- 31 to 60 days\r
- ✅ Greater than 120 days\r
- 61 to 90 days\r
- 0 to 30 days\r
\r
## Question: 57 of 127\r
\r
A billing and coding specialist is preparing a list of delinquent accounts over 300 days old that have received telephone calls, letters, and have\r
been referred to a collection agency with no results. Which of the following is the term that describes accounts receivable that are deemed to\r
be "uncollectable"?\r
\r
- ✅ Bad debts\r
- Pending claims\r
- Improper payments\r
- Open claims\r
\r
## Question: 58 of 127\r
\r
Which of the following is the purpose of coordination of benefits?\r
\r
- ✅ To prevent multiple third-party payers from paying benefits covered by other policies\r
- To compare payer edits and the patient's health plan\r
- To collect and verify information about the patient and provider by sorting claims upon submission\r
- To reduce the number of paper claims submitted\r
\r
## Question: 59 of 127\r
\r
Which of the following actions should a billing and coding specialist take when\r
submitting a claim to Medicaid for a patient who has primary and secondary insurance coverage?\r
\r
- ✅ Attach the remittance advice from the primary insurance along with the Medicaid claim.\r
- Submit the claim and Medicaid remittance advice to the secondary insurance.\r
- Attach the remittance advice from the patient's most recent visit to confirm Medicaid eligibility.\r
- Submit both claims simultaneously and then review the remittance advice from both to determine which one provided more coverage.\r
\r
## Question: 60 of 127\r
\r
Which of the following describes an insurance company that offers plans that pay health care providers who render services to patients?\r
\r
- Fee-for-service\r
- Guarantor\r
- ✅ Third-party payer\r
- Clearinghouse\r
\r
## Question: 61 of 127\r
\r
In which of the following departments should a patient be seen for a furuncle?\r
\r
- Cardiology\r
- ✅ Dermatology\r
- Otolaryngology\r
- Gastroenterology\r
\r
## Question: 62 of 127\r
\r
Complete the following question by referencing the coding exhibit.\r
\r
A patient who is insulin-dependent is diagnosed with diabetic retinopathy. According to ICD-10-CM coding guidelines, in which of the following\r
orders should the codes be reported on the claim form?\r
\r
#### ICD-10-CM Code Set\r
\r
| Code    | Description                                                                                                                                         |\r
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------|\r
| E10.319 | Type 1 diabetes mellitus with unspecified diabetic retinopathy without macular edema                                                                |\r
| E11.319 | Type 2 diabetes mellitus with unspecified diabetic retinopathy without macular edema (Use additional code to identify control using insulin Z79.4.) |\r
| Z79.4   | Long term (current) use of insulin                                                                                                                  |\r
\r
- Z79.4, E11.319\r
- E10.319, Z79.4\r
- ✅ E11.319, Z79.4\r
- Z79.4, E10.319\r
\r
## Question: 63 of 127\r
\r
A billing and coding specialist is preparing a claim for a participating provider whose billed amount is $175.00 for an encounter. The third-party\r
payer's allowed amount is $90.00 for the service rendered, including a $20.00 copay. The specialist should recognize that which of the following\r
is the provider's write-off amount?\r
\r
- $20.00\r
- $65.00\r
- $70.00\r
- ✅ $85.00\r
\r
## Question: 64 of 127\r
\r
Which of the following is proper supportive documentation for reporting CPT® and ICD-10-CM codes for the removal of a skin lesion?\r
\r
- Approval on previous claim forms\r
- ✅ Operative report\r
- Encounter form\r
- Progress note\r
\r
## Question: 65 of 127\r
\r
Which of the following is a document about patient rights that is required to be signed by the patient to acknowledge receipt and can be\r
provided to the patient upon request?\r
\r
- ✅ Notice of Privacy Practices (NPP)\r
- General Equivalence Mappings (GEMs)\r
- UB-04 form\r
- Medicare Summary Notice (MSN)\r
\r
## Question: 66 of 127\r
\r
Which of the following requires companies with 20 or more workers to offer employees who are laid off the ability to buy into the company's health insurance coverage for 18 months?\r
\r
- Coordination of benefits (COB)\r
- Health insurance Portability and Accountability Act (HIPAA)\r
- ✅ Consolidated Omnibus Budget Reconciliation Act of 1985 (COBRA)\r
- Competitive medical plan (CMP)\r
\r
## Question: 67 of 127\r
\r
A billing and coding specialist is submitting an electronic claim for a procedure with modifier -22 for increased procedural services. Which of\r
the following actions should the specialist take?\r
\r
- ✅ Include an attachment to the claim.\r
- Contact the third-party payer.\r
- Inform the patient that the service is noncovered.\r
- Remove modifier -22 and submit the claim.\r
\r
## Question: 68 of 127\r
\r
A billing and coding specialist is reviewing provider notes to complete a claim. They need clarification on whether the procedure performed\r
was on the left side, right side, or bilaterally. Which of the following indicates laterality of the procedure for the claim?\r
\r
- A special report\r
- ✅ A modifier\r
- Pre-authorization\r
- An add-on code\r
\r
## Question: 69 of 127\r
\r
A billing and coding specialist is reviewing an operative report for a patient who had a graft. Which of the following is a tissue transplanted\r
from one person to another?\r
\r
- Autograft\r
- ✅ Allograft\r
- Alloplastic graft\r
- Xenograft\r
\r
## Question: 70 of 127\r
\r
A patient has health coverage through multiple third-party payers. A billing and coding specialist should identify that which of the following is\r
the payer of last resort?\r
\r
- ✅ Medicaid\r
- CHAMPVA\r
- Medicare\r
- TRICARE\r
\r
## Question: 71 of 127\r
\r
A surgeon performed a cholecystectomy for a patient. The billing and coding specialist does not know whether to code for an open or laparoscopic cholecystectomy. The specialist should query the provider to prevent which of the following types of fraud or abuse?\r
\r
- ✅ Upcoding\r
- Undercoding\r
- Bundling\r
- Unbundling\r
\r
## Question: 72 of 127\r
\r
A billing and coding specialist is coding a consultation in the provider's office. The provider documented the appropriate history and exam,\r
with low-level medical decision making. Which of the following Evaluation and Management (E/M) codes should the specialist report?\r
\r
- 99253 Inpatient or observation consultation for a new or established patient, which requires a medically appropriate history and/or examination and low level of medical decision making.\r
- 99284 Emergency department visit for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and moderate level of medical decision making.\r
- ✅ 99243 Office or other outpatient consultation for a new or established patient, which requires a medically appropriate history and/or examination and low level of medical decision making.\r
- 99291 Critical care, evaluation and management of the critically ill or critically injured patient; first 30-74 minutes.\r
\r
## Question: 73 of 127\r
\r
Complete the following question by referencing the coding exhibit.\r
\r
A billing and coding specialist is preparing a claim for a colonoscopy. At the start of the procedure, the provider determined that the patient had not properly prepared for the procedure, so the procedure was immediately stopped. Which of the following modifiers should the specialist use?\r
\r
| Modifier | Description                   |\r
|----------|-------------------------------|\r
| -22      | Increased procedural services |\r
| -23      | Unusual anesthesia            |\r
| -52      | Reduced services              |\r
| -53      | Discontinued procedure        |\r
\r
- -23\r
- ✅ -53\r
- -22\r
- -52\r
\r
## Question: 74 of 127\r
\r
Which of the following are required for professional services claims to specify the type of organization for the services rendered?\r
\r
- Qualifiers\r
- ✅ Place of service codes\r
- National provider identifier\r
- Modifiers\r
\r
## Question: 75 of 127\r
\r
Vaccine products are included in which of the following code sets?\r
\r
- ICD-10-CM\r
> Vaccines are included in the CPT® code set, not ICD-10-CM.\r
- HCPCS\r
> Vaccines are included in the CPT® code set, not HCPCS.\r
- ✅ CPT®\r
> Vaccines are included in the CPT® code set.\r
- NDC\r
> Vaccines are included in the CPT® code set, not NDC.\r
\r
## Question: 76 of 127\r
\r
Chronic kidney disease is included in which of the following code sets?\r
\r
- CPT®\r
- ICD-10-PCS\r
- ✅ ICD-10-CM\r
- SNOMED\r
\r
## Question: 77 of 127\r
\r
Which of the following documents should a billing and coding specialist use to ensure that all payers are sending reimbursement within 45\r
days of claim submission?\r
\r
- Utilization review\r
- Fee schedule\r
- ✅ Aging report\r
- Remittance advice\r
\r
## Question: 78 of 127\r
\r
A patient presents to a provider with chest pain and shortness of breath. After an unexpected EKG result, the provider calls a cardiologist and\r
summarizes the patient's symptoms. Which of the following is a portion of HIPAA that allows the provider to speak to the cardiologist prior to\r
obtaining the patient's consent?\r
\r
- Title I: Health insurance Reform\r
- Notice of Privacy Practices\r
- FERPA\r
- ✅ Title II: Administrative Simplification\r
\r
## Question: 79 of 127\r
\r
HCPCS codes are used in which of the following health care settings?\r
\r
- Hospital inpatient services\r
> HCPCS codes are used in physician clinics, not hospital inpatient services.\r
- Skilled nursing facilities\r
> HCPCS codes are used in physician clinics, not skilled nursing facilities.\r
- ✅ Physician clinics\r
> HCPCS codes are used in physician clinics.\r
- Psychiatric facility\r
> HCPCS codes are used in physician clinics not psychiatric facilities.\r
\r
## Question: 80 of 127\r
\r
Which of the following is a valid type of authorization used to release medical information to the judicial system?\r
\r
- Consent for treatment form\r
- Deposition\r
- Signed release of information form\r
- ✅ _Subpoena duces tecum_\r
\r
## Question: 81 of 127\r
\r
Which of the following security features is required during transmission of protected health information and medical claims to third-party payers?\r
\r
- Unique user IDs and passwords\r
- Role-based access controls\r
- Electronic data interchange\r
- ✅ Encryption\r
\r
## Question: 82 of 127\r
\r
A claim was denied due to termination of coverage. The patient had recently obtained new insurance. Which of the following actions should the billing and coding specialist take?\r
\r
- Ask the patient to pay in full and submit the claim to the new third-party payer.\r
- Appeal the denial.\r
- Resubmit the claim to the original third-party payer.\r
- ✅ Obtain the patient's updated insurance and submit the claim to the new third-party payer.\r
\r
## Question: 83 of 127\r
\r
A billing and coding specialist is reviewing a claim for services provided on November 30. In reviewing the insurance information, the specialist\r
notes the patient's eligibility date began on December 1. The specialist changing the date of service to December 1 is an example of which of\r
the following?\r
\r
- Embezzlement\r
- Abuse\r
- Compliance\r
- ✅ Fraud\r
\r
## Question: 84 of 127\r
\r
Complete the following question by referencing the coding exhibit.\r
\r
A billing and coding specialist is reviewing a denied claim for a 19-year-old patient's hysterectomy. The service was coded as 58150-26. Which of\r
the following is the reason for the denial?\r
\r
#### CPT® Code Set\r
\r
| Code / Modifier | Description                                                                                                               |\r
|-----------------|---------------------------------------------------------------------------------------------------------------------------|\r
| 58150           | Total abdominal hysterectomy (corpus and cervix), with or without removal of tube(s), with or without removal of ovary(s) |\r
| -26             | Professional component                                                                                                    |\r
\r
- The age is not consistent with the procedure.\r
- No significantly separate service was provided on the same day by the same provider.\r
- ✅ The modifier is not valid with the procedure.\r
- Precertification was not obtained before services were performed.\r
\r
## Question: 85 of 127\r
\r
A billing and coding specialist is training a new specialist about submitting claims to a clearinghouse. Which of the following describes the\r
process completed by the clearinghouse before submitting claims to a third-party payer?\r
\r
- Adjudicating claims\r
- Requesting review by an insurance carrier for the reconsideration of unpaid claims\r
- Reviewing claims to verify accurate payment has been received\r
- ✅ Checking claims against payer edits for missing, incomplete, or invalid information\r
\r
## Question: 86 of 127\r
\r
Which of the following modifiers indicates that a patient has signed a Medicare Advance Beneficiary Notice (ABN)?\r
\r
- -GZ Expect item or service denied as not reasonable and necessary\r
- -E1 Upper left eyelid\r
- ✅ -GA Waiver of liability statement issued as required by payer policy\r
- -32 Mandated services\r
\r
## Question: 87 of 127\r
\r
Which of the following is used to communicate why a claim line item was denied or paid differently than it was billed?\r
\r
- ✅ Claims adjustment reason codes\r
- Scrubber report\r
- Provider taxonomy codes\r
- Claim status review\r
\r
## Question: 88 of 127\r
\r
A billing and coding specialist is reviewing a Medicare remittance advice (RA) and discovers a denial due to medical necessity. Which of the\r
following actions should the specialist take?\r
\r
- ✅ Check the local and national coverage determination policies for diagnosis requirements.\r
- Verify if secondary insurance is available to cover the charges.\r
- Use the electronic data interchange (EDI) to verify eligibility of the patient's benefits.\r
- Use a modifier to report the medical necessity.\r
\r
## Question: 89 of 127\r
\r
A billing and coding specialist is reviewing a patient's account and notes there is an outstanding balance that is 45 days old after third-party\r
payer reimbursement. Which of the following actions should the specialist take?\r
\r
- Submit a request to collections to receive payment for the outstanding balance.\r
- Record the outstanding balance as an uncollectible write-off.\r
- Give the patient a waiver.\r
- ✅ Send the patient an itemized statement to collect the outstanding balance.\r
\r
## Question: 90 of 127\r
\r
A billing and coding specialist is preparing a claim for an outpatient encounter. The patient was last seen in the office 2 years ago. Which of the\r
following Evaluation and Management (E/M) codes should the specialist use?\r
\r
- 99383 Initial comprehensive preventive medicine evaluation and management\r
- 99347 Home or residence visit for the evaluation and management of an established patient\r
- ✅ 99213 Office or other outpatient visit for the evaluation and management of an established patient\r
- 99203 Office or other outpatient visit for the evaluation and management of a new patient\r
\r
## Question: 91 of 127\r
\r
Which of the following are used to code provider and outpatient services?\r
\r
- ICD-10-PCS codes\r
- APCs\r
- DRGs\r
- ✅ CPT® codes\r
\r
## Question: 92 of 127\r
\r
A billing and coding specialist is collecting demographic information for a patient who lives in Hawaii and is an active duty service member.\r
The specialist should identify that the insured has which of the following types of insurance?\r
\r
- TRICARE Prime Overseas\r
- TRICARE for Life\r
- TRICARE Reserve Select\r
- ✅ TRICARE\r
\r
## Question: 93 of 127\r
\r
Which of the following describes the nature of a modifier?\r
\r
- Describes additional intra-service work that has occurred\r
- Identifies the place of service\r
- ✅ Indicates that an alteration to a service or procedure has occurred\r
- Identifies new technology was used\r
\r
## Question: 94 of 127\r
\r
A billing and coding specialist is reviewing an electronic remittance advice (ERA).\r
Which of the following gives additional information about the denial of reimbursement?\r
\r
- Electronic data interchange (EDI) receipt identifier\r
- Common data file\r
- ✅ Remark code\r
- Preauthorization\r
\r
## Question: 95 of 127\r
\r
Which of the following is a covered entity affected by HIPAA security rules?\r
\r
- A patient\r
- A beneficiary\r
- A family member of a guarantor\r
- ✅ A health care clearinghouse\r
\r
## Question: 96 of 127\r
\r
A patient's portion of the bill should be discussed with the patient before a procedure is performed for which of the following reasons?\r
\r
- To determine the procedure\r
- To verify insurance coverage\r
- To give the patient the option to negotiate their portion of the bill\r
- ✅ To ensure the patient understands how much they are responsible to pay\r
\r
## Question: 97 of 127\r
\r
A patient has a history of breast cancer that has metastasized to the liver and is undergoing chemotherapy today for the liver cancer. Which of\r
the following ICD-10-CM codes should be sequenced first?\r
\r
- C50.111 Primary breast cancer\r
- C78.7 Secondary liver cancer\r
- ✅ Z51.11 Chemotherapy\r
- Z90.3 History of breast cancer\r
\r
## Question: 98 of 127\r
\r
A billing and coding specialist is determining patient financial responsibility for a claim. The billed amount is $1,800, the allowed amount is\r
$750, and the patient paid a $20 copayment. There is a $500 deductible that has not been met, and the plan pays 80/20. Which of the following\r
is the total patient financial responsibility?\r
\r
- $1050\r
- ✅ $570\r
- $170\r
- $750\r
\r
## Question: 99 of 127\r
\r
A billing and coding specialist is processing a claim for a patient who has Medicare and Medicaid coverage. Which of the following is the type of\r
claim that is automatically adjudicated by Medicare and forwarded to Medicaid?\r
\r
- ✅ Crossover\r
- Medigap\r
- Managed care\r
- CHAMPVA\r
\r
## Question: 100 of 127\r
\r
A billing and coding specialist is preparing to create patient statements and has been asked to collect finance charges on any late payments.\r
According to the Truth in Lending Act (TILA), which of the following is the way the finance charges must be disclosed on the statement?\r
\r
- As an assigned dollar amount\r
- As a multiple of the outstanding balance\r
- ✅ As an annual percentage rate\r
- As an amount no higher than the outstanding balance\r
\r
## Question: 101 of 127\r
\r
A patient is preauthorized to receive vitamin B12 injections from January 1 to May 31. On June 2, the provider prescribes an additional 6\r
months of injections. In order for the patient to continue with coverage of care, which of the following should occur?\r
\r
- The patient should stop receiving the injections because the authorization has lapsed.\r
- The patient should stop receiving the injections and find a new provider.\r
- The provider should go ahead with the injections due to medical necessity.\r
- ✅ The patient's third-party payer should be contacted to obtain a new preauthorization.\r
\r
## Question: 102 of 127\r
\r
Which of the following describes the term "crossover" as it relates to Medicare?\r
\r
- ✅ When a third-party payer transfers data to allow coordination of benefits for a claim\r
- When more than one third-party payer pays for the same service\r
- When a third-party payer pays for a service twice\r
- When a third-party payer processes data to allow adjudication of a claim to occur\r
\r
## Question: 103 of 127\r
\r
Which of the following is the structure used for ICD-10-CM codes?\r
\r
- ✅ 3 to 7 alpha-numeric characters\r
- 5 numbers\r
- 5 alpha-numeric characters\r
- 2 letters\r
\r
## Question: 104 of 127\r
\r
Which of the following is issued to active duty uniformed service personnel for access to TRICARE benefits?\r
\r
- Advance Beneficiary Notice (ABN)\r
- ✅ Common access card\r
- Release of information\r
- TRICARE Prime\r
\r
## Question: 105 of 127\r
\r
Which of the following types of diagnosis code is to identify the presence of a pacemaker?\r
\r
- Symptom\r
- Late effect\r
- Manifestation\r
- ✅ Status\r
\r
## Question: 106 of 127\r
\r
Which of the following is the type of service code that can have three to five levels of service and covers office visits, hospital visits, and\r
consultations?\r
\r
- New and emerging technology\r
- Modifiers\r
- External causes of morbidity\r
- ✅ Evaluation and Management\r
\r
## Question: 107 of 127\r
\r
A billing and coding specialist in an internal medicine practice is assisting a patient who is already collecting Social Security but will be turning\r
65 in the next year and has questions about what Medicare will cover. The specialist should know that which of the following is the Medicare\r
benefit the patient will be enrolled in automatically?\r
\r
- ✅ Medicare Part A\r
- Medicare Part B\r
- Medicare Part C\r
- Medicare Part D\r
\r
## Question: 108 of 127\r
\r
Complete the following question by referencing the coding exhibit.\r
\r
A billing and coding specialist is reviewing a denied claim for a patient who was diagnosed with an upper respiratory infection and had a\r
benign lesion removed. The codes listed on the claim were 99213 and 17000. Which of the following actions should the specialist take before\r
resubmitting the claim?\r
\r
| Modifier | Description                                                                                                                                                                                       |\r
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| 25       | Significant, separately identifiable evaluation and management (E/M) service by the same physician or other qualified health care professional on the same day of the procedure or other service. |\r
| 32       | Mandated services                                                                                                                                                                                 |\r
| 81       | Minimum assistant surgeon                                                                                                                                                                         |\r
\r
- Add modifier -32 to the claim.\r
- ✅ Add modifier -25 to the claim.\r
- Bill each service on a separate claim.\r
- Add modifier -81 to the claim.\r
\r
## Question: 109 of 127\r
\r
A patient had an x-ray for a fractured arm. The documentation does not indicate if the x-ray was performed on the right or left arm. Which of\r
the following actions should a billing and coding specialist take?\r
\r
- Ask the third-party payer.\r
- Submit the claim without a modifier.\r
- Contact the patient.\r
- ✅ Query the provider.\r
\r
## Question: 110 of 127\r
\r
A billing and coding specialist is coding a laceration repair and needs to determine the type of closure. The specialist queries the provider, who\r
confirms retention sutures were used. The specialist should code which of the following types of closure?\r
\r
- Simple (single layer)\r
- Intermediate (Layered closure)\r
- Partial-thickness (Epidermis and extending into the dermis) |\r
- ✅ Complex (Layered closure requiring additional corrections)\r
\r
## Question: 111 of 127\r
\r
Coding manuals use which of the following conventions?\r
\r
- Edits\r
- Icons\r
- Laws\r
- ✅ Fee schedules\r
\r
## Question: 112 of 127\r
\r
Which of the following introduced documentation guidelines to Medicare carriers to ensure that services paid for have been provided and\r
were medically necessary?\r
\r
- HIPAA\r
- OIG\r
- ✅ CMS\r
- AMA\r
\r
## Question: 113 of 127\r
\r
A billing and coding specialist is appealing a Medicare denial.\r
Which of the following is the first step in the appeals process?\r
\r
- Reconsideration\r
- Medicare Appeals Council review\r
- Judicial review\r
- ✅ Redetermination\r
\r
## Question: 114 of 127\r
\r
A billing and coding specialist is reviewing a remittance advice for a claim that was denied for medical necessity.\r
Which of the following is an example of this type of error?\r
\r
- The preauthorization for an appendectomy was not obtained.\r
- The patient's current demographic information was not entered correctly on the claim form.\r
- ✅ The ICD-10-CM code for tonsillitis was listed with the CPT® code for an appendectomy.\r
- Appendectomies are not covered by the patient's insurance plan.\r
\r
## Question: 115 of 127\r
\r
CPT® codes are used for which of the following concepts?\r
\r
- Medical necessity\r
- Compliance\r
- ✅ Revenue\r
- Collections\r
\r
## Question: 116 of 127\r
\r
Which of the following is an example of an informational modifier?\r
\r
- ✅ -24 Unrelated Evaluation and Management service by the same provider during a postoperative period\r
- -AA Anesthesia services performed personally by anesthesiologist\r
- -TC Technical component\r
- -82 Assistant surgeon (when qualified resident surgeon not available)\r
\r
## Question: 117 of 127\r
\r
An internal retrospective billing account audit prevents fraud and abuse by\r
reviewing and comparing completed claim forms with which of the following?\r
\r
- ✅ Documentation from patient encounters\r
- A subpoena\r
- Documentation of compliance plans\r
- An appeal letter\r
\r
## Question: 118 of 127\r
\r
Which of the following is a HIPAA compliance guideline affecting electronic health records?\r
\r
- The privacy requirements cover facilities' health information, whether paper or electronic.\r
- Electronic health records should be sent to the third-party payer on a claim form.\r
- ✅ The electronic transmission and code set standards require every provider to use the health care transactions, code sets, and identifiers.\r
- The Health Information Technology for Economic and Clinical Health (HITECH) Act encrypts provider-protected health information.\r
\r
## Question: 119 of 127\r
\r
Which of the following positions is required in a provider's office to comply with HIPAA regulations?\r
\r
- Security officer\r
- ✅ Privacy officer\r
- Claims examiner\r
- Chargemaster coordinator\r
\r
## Question: 120 of 127\r
\r
Two providers are having a conversation about a patient's test results at the nursing station. A different patient overhears them talking. This\r
type of privacy exposure is known as which of the following?\r
\r
- ✅ Incidental disclosure\r
- Fraud\r
- Malfeasance\r
- Negligence\r
\r
## Question: 121 of 127\r
\r
A billing and coding specialist is preparing a small claims court case against a patient for a delinquent account in the amount of $6,500. Which\r
of the following is a court order that allows payments on unsecured debt to be made directly from a defendant's paycheck?\r
\r
- Skip tracing\r
- ✅ Garnishment\r
- Automatic stay\r
- Lien\r
\r
## Question: 122 of 127\r
\r
A billing and coding specialist is submitting claims through a clearinghouse. The specialist should identify that which of the following actions is\r
performed by the clearinghouse?\r
\r
- Filing for reimbursement, reconciling payments of paid claims, and resubmitting denied claims to the provider\r
- Overseeing the federal Medicare and Medicaid programs\r
- Helping to develop U.S. standards for electronic data exchange\r
- ✅ Scrubbing claims, translating them to a standard format, then sending them to various third-party payers\r
\r
## Question: 123 of 127\r
\r
Which of the following do providers use to electronically submit claims?\r
\r
- Claim scrubbers\r
- ✅ Clearinghouse\r
- CMS-1500 claim form\r
- Electronic remittance advice (ERA)\r
\r
## Question: 124 of 127\r
\r
A billing and coding specialist is reviewing paperwork that indicates overpayment by Medicare for six patients over the past year. Which of the\r
following describes this process?\r
\r
- Prospective review\r
- Subpoena\r
- ✅ Audit\r
- Adjudication\r
\r
## Question: 125 of 127\r
\r
Which of the following prohibits a provider from referring Medicare patients to a clinical laboratory service in which the provider has a\r
financial interest?\r
\r
- Federal Anti-Kickback Statute\r
- Health Insurance Portability and Accountability Act (HIPAA)\r
- Consolidated Omnibus Budget Reconciliation Act (COBRA)\r
- ✅ Stark Law\r
\r
## Question: 126 of 127\r
\r
Which of the following coding manuals is used to identify products, supplies, and services?\r
\r
- ICD-10-CM\r
- ✅ HCPCS Level II\r
- ICD-10-PCS\r
- CPT®\r
\r
## Question: 127 of 127\r
\r
Which of the following are used in coding manuals to support correct code assignment?\r
\r
- Claim forms\r
- Add-on codes\r
- Modifiers\r
- ✅ Conventions\r
`,Tr=`## Question 1 of 100\r
On a remittance advice form, which of the following is responsible for writing off the difference between the amount billed and the amount allowed by the agreement?\r
- ✅ Provider\r
> The provider is responsible for writing off the difference between the amount billed and the amount allowed\r
- ❌ Guarantor\r
> The guarantor is not responsible for writing off the difference between the amount billed and the amount allowed.\r
- ❌ Patient\r
> The patient is not responsible for writing off the difference between the amount billed and the amount allowed.\r
- ❌ Third-party payer\r
> The third-party payer sets the allowed amount and is not responsible for writing off the difference between the amount billed and the amount allowed.\r
\r
## Question 2 of 100\r
Which of the following codes are included in the ICD-10-CM code set?\r
- ❌ Prosthetics\r
> The ICD-10-CM code set includes a code for acquired absence of limb. Prosthetics codes are found in the CPT code set.\r
- ❌ Fracture care\r
> The ICD-10-CM code set includes a code for acquired absence of limb. Fracture care codes are found in the CPT code set.\r
- ✅ Acquired absence of limb\r
> The ICD-10-CM code set includes a code for acquired absence of limb.\r
- ❌ Immunization administration\r
> The ICD-10-CM code set includes a code for acquired absence of limb. Immunization administration codes are found in the CPT code set.\r
## Question 3 of 100\r
A patient has a resection of the intestines with anastomosis through the abdominal walls. Which of the following is a type of anastomosis?\r
- ✅ Colostomy\r
> A colostomy is a type of anastomosis, which is a surgical procedure that involves creating an opening through the abdominal wall.\r
- ❌ Laparotomy\r
> A laparotomy is a type of surgical opening\r
- ❌ Ileectomy\r
> An ileectomy is the removal of the ileum.\r
- ❌ Endoscopy\r
> An endoscopy is an explorative procedure.\r
## Question 4 of 100\r
Which of the following is the purpose of an internal review in a provider's office?\r
- ✅ To verify that the medical records and the billing record match\r
> The purpose of an internal review in a provider's office is to verify that the medical records and the billing record match, which protects the provider from sanctions or fines.\r
- ❌ To increase revenue for the provider\r
> Increasing revenue for providers is not the purpose of an internal review.\r
- ❌ To improve communication between the coding supervisors and coding professionals\r
> Improving communication between coding supervisors and coding professionals is not the purpose of an internal review.\r
- ❌ To protect patients from sanctions or fines\r
> Protecting patients from sanctions or fines is not the purpose of an internal review.\r
## Question 5 of 100\r
Which of the following is a valid ICD-10-CM principle?\r
- ❌ Assign codes to the lowest level of specificity.\r
> This is not a valid ICD-10-CM principle. Codes should be assigned to the highest level of specificity.\r
- ❌ Diagnoses should first be found in the tabular list and confirmed in the index.\r
> This is not a valid ICD-10-CM principle. Diagnoses should first be found in the index and confirmed in the tabular list.\r
- ❌ Late effect codes should be reported as secondary.\r
> This is not a valid ICD-10-CM principle. Late effect codes should be reported as primary.\r
- ✅ Code signs and symptoms in the absence of a definitive diagnosis.\r
> Signs and symptoms should be coded in the absence of a definitive diagnosis. Therefore, this is a valid ICD-10-CM principle.\r
## Question 6 of 100\r
Which of the following editing systems should a billing and coding specialist reference to determine if a supplies and materials code should be assigned to report a surgical tray used during an ambulatory procedure?\r
\r
- ❌ Medically unlikely edits (MUEs)\r
> An MUE for a HCPCS and/or CPT® code is the maximum units of service that a provider can report under most circumstances for a single beneficiary on a single date of service.\r
- ✅ National Correct Coding Initiative (NCCI)\r
> NCCI is used to promote national correct coding methodologies and to control improper coding leading to inappropriate payment of claims. The specialist should reference NCCI to determine if a supplies and materials code should be assigned to report a surgical tray used during an ambulatory procedure.\r
- ❌ Local Coverage Determination (LCD)\r
> LCDs are guidelines for certain services and procedures that are developed to decide whether to cover a particular service in accordance with services that are defined as medically necessary by the Centers for Medicare and Medicaid Services (CMS).\r
- ❌ National Coverage Determination (NCD)\r
> NCDs are guidelines for certain services and procedures that are developed to decide whether to cover a particular service in accordance with services that are defined as medically necessary by the Centers for Medicare and Medicaid Services (CMS).\r
## Question 7 of 100\r
When should a billing and coding specialist initiate the collection of the information needed to process a patient's insurance claim form?\r
- ❌ When the patient signs the HIPAA form at check-in\r
> The specialist should collect information prior to the patient signing the HIPAA form at check-in.\r
- ✅ When the patient contacts the provider's office and schedules an appointment\r
> The specialist should initiate the collection of information needed to process a patient's insurance claim when the patient contacts the office and schedules an appointment.\r
- ❌ When the patient pays the copay or deductible\r
> The specialist should collect the information prior to the patient paying the copay or deductible.\r
- ❌ When the patient checks out of the provider's office\r
> The specialist should collect the information prior to the patient checking out of the provider's office.\r
## Question 8 of 100\r
A patient wants to see an endocrinologist for a consultation about their diabetes mellitus, but they must see their primary care provider (PCP) for a referral to an in-network specialist first. Which of the following types of insurance does the patient have?\r
- ❌ Preferred provider organization (PPO)\r
> PPO insurance plans are a network of care, but they do not require a PCP or referral\r
- ✅ Health Mainenance organization (HMO)\r
> HMO insurance plans require a referral from the PCP for a specialist consultation.\r
- ❌ Indemnity\r
> Indemnity plans are traditional plans and do not require a PCP or referral.\r
- ❌ Point of service (POS)\r
> POS plans do not require a referral. Patients are allowed to self-refer to out-of-network providers.\r
## Question 9 of 100\r
A billing and coding specialist is reviewing the procedure notes from a provider who selected a code indicating an incisional biopsy when the entirety of the patient's lesion was removed. The specialist should verify with the provider that which of the following types of procedures was performed?\r
\r
- ❌ Core procedure\r
> The specialist should recognize that a core procedure involves removal of a core sample of tissue from the patient's lesion, not removal of the entire lesion.\r
Removal of the entire lesion is classified as an excisional procedure.\r
- ❌ Needle procedure\r
> The specialist should recognize that a needle procedure involves aspiration of fluid from within the lesion using a needle and syringe or using a specialized biopsy needle. Removal of the entire lesion is classified as an excisional procedure.\r
- ✅ Excisional procedure\r
> The specialist should clarify the procedure type with the provider to ensure that an excisional procedure was performed when the entirety of the patient's lesion was removed.\r
- ❌ Punch procedure\r
> The specialist should recognize that a punch procedure involves the removal of a small section of the lesion using a punch instrument. Removal of the entire lesion is classified as an excisional procedure.\r
## Question 10 of 100\r
A billing and coding specialist is reviewing a report from the clearinghouse after submitting electronic claims and notices that one claim was rejected due to missing demographic information. Which of the following actions should the specialist take?\r
\r
- ❌ Resubmit the original claim by mail.\r
> It is not necessary to send the claim by mail, which would delay reimbursement. Also, the claim should be corrected prior to resubmission to the clearinghouse to avoid a repeated rejection.\r
- ❌ Alert the third-party payer of the incomplete claim.\r
> If the clearinghouse rejects the claim, it will not be sent to the third-party payer. The claim should be corrected and resubmitted to the clearinghouse for repeat claim scrubbing before going on to the third-party payer.\r
- ❌ Notify the patient of the rejection.\r
> It is not necessary to notify the patient about the rejection by the clearinghouse due to missing information. The claim should be corrected and resubmitted to the clearinghouse for repeat claim scrubbing before going on to the third-party payer.\r
- ✅ Resubmit an updated claim\r
> The claim should be updated with the correct demographic information and resubmitted through the clearinghouse for repeat claim scrubbing before going on to the third party-payer.\r
\r
## Question 11 of 100\r
Complete the following question by referencing the coding exhibit.\r
A billing and coding specialist is reviewing a claim for a patient who presented to the provider's office for an upper respiratory infection. During the encounter, the patient also received the influenza vaccine. Which of the following modifiers should be attached to the Evaluation and Management (E/M) code?\r
| Modifier | Description                                                                                                                                                                                      |\r
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| -24      | Unrelated Evaluation and Management service by the same physician or other qualified health care professional during a postoperative period                                                      |\r
| -25      | Significant, separately identifiable evaluation and management (E/M) service by the same physician or other qualified health care professional on the same day of the procedure or other service |\r
| -50      | Bilateral procedure                                                                                                                                                                              |\r
| -51      | Multiple procedures                                                                                                                                                                              |\r
- ❌ -24\r
> Modifier -24 is used for an unrelated E/M service by the same provider during the postoperative period.\r
- ❌ -51\r
> Modifier -51 is used to report multiple procedures other than E/M services.\r
- ✅ -25\r
> Modifier -25 is used for separately significant E/M services by the same provider on the same day of service.\r
- ❌ -50\r
> Modifier -50 is used for bilateral procedures.\r
\r
## Question 12 of 100\r
A patient is upset about a bill they received because their third-party payer denied the claim. Which of the following actions should a billing and coding specialist take?\r
\r
- ❌ Tell the patient to resubmit the claim to the third-party payer.\r
> The specialist should not tell the patient to resubmit the claim.\r
- ✅ Inform the patient of the reason for the denial.\r
> The specialist should inform the patient of the reason for the denial.\r
- ❌ Tell the patient to speak with the provider.\r
> The specialist should not tell the patient to speak with the provider.\r
- ❌ Inform the patient that the third-party payer will follow up.\r
> The specialist should not inform the patient that the third-party payer will follow up.\r
\r
## Question 13 of 100\r
A billing and coding specialist is assisting a patient who has a capitated health maintenance organization (HMO) and presents to the office with a sinus infection. The specialist should identify that which of the following statements is true regarding a capitated HMO?\r
\r
- ✅ Payment for the encounter is based on a flat rate.\r
> The specialist should recognize that, for a capitated HMO, the payment system is based on a flat rate per patient, per month, regardless of how many times the provider sees the patient.\r
- ❌ A claim should be submitted to the third-party payer for the encounter.\r
> The specialist should recognize that a claim does not need to be submitted to the third-party payer because the payment system for a capitated HMO is based on a flat rate per patient, per month, regardless of how many times the provider sees the patient.\r
- ❌ Patients are billed directly for the encounter.\r
> The specialist should recognize that, for a capitated HMO, the payment system is based on a flat rate per patient, per month, regardless of how many times the provider sees the patient. Therefore, the specialist should not bill the patient directly for the encounter.\r
- ❌ A claim should be provided to the patient following the encounter.\r
> The specialist should recognize that, for a capitated HMO, the payment system is based on a flat rate per patient, per month, regardless of how many times the provider sees the patient. Therefore, the specialist should not provide the patient with a claim following the encounter.\r
## Question 14 of 100\r
When a patient has a condition that is both acute and chronic, how should it be coded?\r
- ❌ Code only the acute condition.\r
> Both acute and chronic conditions should be coded. The acute condition should be coded first.\r
- ✅ Code both the acute and chronic conditions, sequencing the acute condition first.\r
> If the same condition is described as both acute and chronic, the ICD-10-CM manual states to code both and sequence the acute condition first.\r
- ❌ Code only the chronic condition.\r
> Both acute and chronic conditions should be coded. The acute condition should be coded first.\r
- ❌ Code both the acute and chronic conditions, sequencing the chronic condition first.\r
> While both conditions should be coded, the acute condition should be coded first.\r
## Question 15 of 100\r
A billing and coding specialist is preparing an appeal letter in response to a denial by a third-party payer for lack of medical necessity. Which of the following should the specialist include with the letter to indicate medical necessity?\r
\r
- ❌ Patient employer information\r
> Patient employer information might be included on the original claim, but it is not necessary to send the information with an appeal after denial for medical necessity. An appeal due to denial for medical necessity often requires a copy of medical record documentation to prove the service was needed to treat the condition documented in the record.\r
- ✅ Medical record documentation\r
> An appeal due to denial for medical necessity often requires a copy of medical record documentation to prove the service was needed to treat the condition documented in the record.\r
\r
- ❌ Release of information authorization\r
> Although authorization to release information is necessary for the chart. this is not something that needs to be included with the appeal letter. An appeal due to denial for medical necessity often requires a copy of medical record documentation to prove the service was needed to treat the condition documented in the record.\r
- ❌ Retrospective review request\r
> A retrospective review can be requested if the office fails to obtain preauthorization for a procedure. An appeal due to denial for medical necessity often requires a copy of medical record documentation to prove the service was needed to treat the condition documented in the record.\r
## Question 16 of 100\r
HIPAA transaction standards apply to which of the following entities?\r
- ❌ Employers who provide workers' compensation plans\r
> Employers who provide workers’ compensation plans are not required to conform to HIPAA regulations.\r
- ❌ Automobile insurance providers\r
> Automobile insurance providers are not required to conform to HIPAA regulations.\r
- ✅ Health care clearinghouses\r
> Entities covered by HIPAA regulations include health care clearinghouses, providers of health care services, and health care third-party payers who submit transactions electronically.\r
- ❌ Educational facilities\r
> Educational facilities are not required to conform to HIPAA regulations.\r
## Question 17 of 100\r
In the ICD-10-CM code set, which of the following characters is the placeholder?\r
- ❌ S\r
> The character S is a 7th character extension, not the placeholder.\r
- ❌ A\r
> The character A is a 7th character extension, not the placeholder.\r
- ✅ X\r
> The character X is the placeholder.\r
- ❌ D\r
> The character D is a 7th character extension, not the placeholder.\r
## Question 18 of 100\r
Which of the following are included in surgery service codes?\r
- ❌ Postoperative complications\r
> Surgical services include a preoperative history and physical. Postoperative complications are coded separately.\r
- ❌ Exacerbations\r
> Surgical services include a preoperative history and physical. Treating exacerbations is not included.\r
- ❌ Implants and devices\r
> Surgical services include a preoperative history and physical. Implants and devices are coded separately.\r
- ✅ Preoperative history and physical\r
> Surgical services include a preoperative history and physical.\r
\r
## Question 19 of 100\r
A billing and coding specialist is reviewing a remittance advice and encounters a denial of payment for CPT® code 44950 (appendectomy). The specialist discovers the ICD-10-CM code assigned to the claim was J32.1 (chronic frontal sinusitis). Which of the following is the reason for this claim denial?\r
\r
- ✅ Incorrectly linked codes were reported on the claim\r
> The procedure performed (appendectomy) is not correctly linked because the reported ICD-10-CM code indicated chronic frontal sinusitis. A correctly linked code would indicate the patient had a condition that would justify removing the appendix.\r
- ❌ A lower level of care could have been provided\r
> A lower level of care denial indicates that a procedure performed in one location, such as a hospital, could have been performed in a different place, such as an office\r
- ❌ Bundled service\r
> A bundled service denial is one where multiple CPT® codes are assigned when one code covers all the work done for the CPT® assignment.\r
- ❌ Pre-existing condition\r
> Although the patient may have had a pre-existing sinus condition, the CPT® code assigned indicates that the procedure was an appendectomy, and the patient is not likely to have the condition of appendicitis prior to the procedure being performed.\r
\r
## Question 20 of 100\r
A billing and coding specialist discovers suspicious billing activity that may be fraudulent in the workplace. Which of the following actions should the specialist take?\r
\r
- ❌ Contact the Office of Inspector General (OIG).\r
> The specialist should avoid contacting the OIG. The OIG provides guidance for compliance plans.\r
- ✅ Call the U.S. Department of Health and Human Services' (DHHS) anonymous hotline.\r
> The specialist should call the U.S. DHHS anonymous hotline to discuss the fraudulent activity. The hotline allows the specialist to report suspicious activity, fraud,\r
or abuse anonymously.\r
- ❌ Address it with the provider.\r
> The specialist should avoid addressing it with the provider.\r
- ❌ Notify the patient.\r
> The specialist should avoid notifying the patient.\r
## Question 21 of 100\r
Which of the following should a billing and coding specialist complete to be reimbursed for a provider's outpatient services?\r
- ✅ CMS-1500 claim form\r
> The specialist should complete a CMS-1500 to be reimbursed for a provider's outpatient services.\r
- ❌ UB-04 claim form\r
> UB-04 claim forms are used for inpatient hospital services.\r
- ❌ Encounter form\r
> An encounter form, or a superbill, is a tool that is used to communicate the services rendered by the provider to the third-party payer.\r
- ❌ Itemized statement\r
> An itemized statement is a financial document that is part of the accounts receivable for services rendered.\r
Complete the following question by referencing the coding exhibit.\r
\r
## Question 22 of 100\r
A billing and coding specialist is determining the level of service for an office visit for a new patient. Which of the following codes represents a moderate level of medical decision-making?\r
### CPT® Code Set\r
| Code  | Description                                                                                                                                                                                                                                                 |\r
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| 99213 | Office or other outpatient visit for the evaluation and management of an established patient, which requires a medically appropriate history and/or examination and low level of medical decision making.                                                   |\r
| 99204 | Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and moderate level of medical decision making.                                                       |\r
| 99235 | Hospital inpatient or observation care, for the evaluation and management of a patient including admission and discharge on the same date, which requires a medically appropriate history and/or examination and moderate level of medical decision making. |\r
| 99305 | Initial nursing facility care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and moderate level of medical decision making.                                                    |\r
- ✅ 99204\r
> Code 99204 represents moderate complexity medical decision-making for a new patient.\r
- ❌ 99235\r
> Code 99235 represents moderate complexity medical decision-making for an established patient.\r
- ❌ 99305\r
> Code 99305 represents moderate complexity medical decision-making in a nursing facility.\r
- ❌ 99213\r
> Code 99213 represents low complexity medical decision-making for an established patient.\r
## Question 23 of 100\r
A billing and coding specialist should identify that which of the following is used to improve the efficiency and effectiveness of the health care system as mandated by HIPAA for providers?\r
\r
- ❌ CMS-1500 claim form\r
> The CMS 1500 form refers to a paper claim and does not improve the efficiency and effectiveness of health care systems.\r
- ❌ Electronic remittance advice\r
> Electronic remittance advice documents are responses from third-party payers and do not improve the efficiency and effectiveness of health care systems.\r
- ✅ ANSIASC X12N 837P format\r
> The electronic ANSI ASC X12N 837P format improves the efficiency and effectiveness of health care systems.\r
- ❌ Health information management\r
> Health information management is an administrative process.\r
## Question 24 of 100\r
A billing and coding specialist should add a modifier in which of the following scenarios?\r
\r
- ✅ A bilateral procedure was performed.\r
> Bilateral procedures are indicated with modifiers.\r
- ❌ The procedure was cancelled.\r
> Cancelled procedures are not coded, so they do not require modifiers.\r
- ❌ The service was an initial service.\r
> Initial services are not indicated with modifiers.\r
- ❌ An unspecified code is used.\r
> Unspecified codes are not indicated with modifiers.\r
## Question 25 of 100\r
A new patient presents for an urgent care encounter. Which of the following code sets should be used to report this encounter?\r
\r
- ❌ Hospital observation services\r
> Hospital observation service code sets (99221 to 99239) are only used for patients that have been admitted for observation.\r
- ❌ Emergency department services\r
> Emergency department service code sets (99281 to 99285) can only be used for qualified emergency department services, not for urgent care services.\r
- ✅ Office or other outpatient services\r
> Office or other outpatient code sets (99202 to 99215) should be used to report urgent care encounters.\r
- ❌ Office or other outpatient consultations\r
> Office or other outpatient consultation codes (99242 to 99245) are used to report services that qualify as consultations.\r
## Question 26 of 100\r
CPT® Evaluation and management codes are used for which of the following?\r
- ❌ Physical therapy modalities\r
> Evaluation and management codes are used for critical care services, not physical therapy modalities.\r
- ❌ Outpatient hemodialysis\r
> Evaluation and management codes are used for critical care services, not outpatient hemodialysis.\r
- ❌ Medical nutrition therapy\r
> Evaluation and management codes are used for critical care services, not nutrition therapy.\r
- ✅ Critical care services\r
> Evaluation and management codes are used for critical care services.\r
## Question 27 of 100\r
Outstanding patient balances will appear on which of the following?\r
\r
- ✅ Accounts receivable\r
> Accounts receivable includes any outstanding balances owed, including patient balances.\r
- ❌ Accounts payable\r
> Accounts payable are amounts owed to others that have not been paid. Outstanding patient balances are not found here.\r
- ❌ Tracer\r
> A tracer is a written request made to a third-party payer to locate the status of a claim. This does not involve outstanding patient balances.\r
- ❌ Rejected claim\r
> A rejected claim contains incorrect information and must be reprocessed within a specified time limit.\r
## Question 28 of 100\r
Which of the following statements is true regarding the release of patient records?\r
- ❌ Verbal requests for records from life insurance companies are appropriate.\r
> All requests for patient records must be in writing and have signed authorization from the patient, parent, or legal guardian.\r
- ❌ Identification is not required when requesting access to patient records.\r
> Identification is required to maintain patient confidentiality and privacy.\r
- ❌ Providers cannot share a patient's medical information with other health care professionals if the patient is mentally unstable.\r
> Based on the provider's best judgment, information may be shared with other providers if deemed in the patient's best interest.\r
- ✅ Patient access to psychotherapy notes is restricted\r
> Patients cannot access psychotherapy notes or information compiled for lawsuits.\r
## Question 29 of 100\r
A billing and coding specialist is posting a Medicare remittance advice and identifies an overpayment of $15. Which of the following actions should the specialist take?\r
\r
- ✅ Notify Medicare about the overpayment within 60 days.\r
> The specialist has 60 days to report and return overpayments of less than $25.\r
- ❌ Contact Medicare about the overpayment within 72 hr\r
> The specialist has 60 days to report and return overpayments of less than $25.\r
- ❌ Keep the overpayment on the account as a credit.\r
> The specialist should not keep the overpayment as a credit. This is an example of fraud.\r
- ❌ Keep the overpayment by adjusting the patient's balance to $0.\r
> The specialist should not adjust the patient's balance to $0. This is an example of fraud.\r
## Question 30 of 100\r
Which of the following terms describes the removal of the eye, adnexa, and bony structure?\r
- ❌ Evisceration\r
> Evisceration is removal of the contents of the globe leaving the extraocular muscles and sclera intact.\r
- ❌ Enucleation\r
> Enucleation is removal of the eye leaving the orbital structures intact.\r
- ✅ Exenteration\r
> Exenteration is removal of the eye, adnexa, and bony structure.\r
- ❌ Exploration\r
> Exploration is used with wounds for exploring the injury site.\r
## Question 31 of 100\r
A billing and coding specialist is preparing an accounts receivable aging report. The specialist should expect the report to include which of the following?\r
\r
- ❌ Rejected claims organized by payer\r
> Information about rejected claims organized by payer is not included in an accounts receivable aging report.\r
- ❌ Lost claims organized by payer\r
> Information about lost claims organized by payer is not included in an accounts receivable aging report.\r
- ❌ Paid balances organized by date\r
> Information about paid balances organized by date is not included in an accounts receivable aging report.\r
- ✅ Outstanding balances organized by date\r
> An accounts receivable aging report provides information about any outstanding balances and is organized by date range.\r
## Question 32 of 100\r
In an outpatient setting, which of the following forms is used as a financial report of all services provided to patients?\r
\r
- ❌ Encounter form\r
> An encounter form is a record of diagnoses and services for a particular encounter with the provider.\r
- ✅ Patient account record\r
> The patient account record, or patient ledger, is a financial report that contains all the transactions between a patient and the practice.\r
- ❌ CMS-1500 claim form\r
> The CMS-1500 is used to submit charges to the third-party payer for services rendered to the patient.\r
- ❌ Accounts receivable journal\r
> The accounts receivable journal, or day sheet, is a chronological summary of all transactions posted on a specific day.\r
\r
## Question 33 of 100\r
Complete the following question by referencing the coding exhibit.\r
\r
A billing and coding specialist is working on a claim in which reimbursement was reduced due to two surgical services performed during the same encounter being bundled together. Which of the following modifiers should be assigned to indicate the procedures were independent to prevent bundling?\r
| Modifier | Description                                                                                                                                                                                      |\r
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| -22      | Increased procedural services                                                                                                                                                                    |\r
| -25      | Significant, separately identifiable evaluation and management (E/M) service by the same physician or other qualified health care professional on the same day of the procedure or other service |\r
| -58      | Staged or related procedure by the same physician or other qualified health care professional during the postoperative period                                                                    |\r
| -59      | Distinct procedural service                                                                                                                                                                      |\r
- ❌ -58\r
> Modifier -59 is used to indicate multiple procedures were independent of each other, which prevents them from being bundled, not -58.\r
- ❌ -25\r
> Modifier -59 is used to indicate multiple procedures were independent of each other, which prevents them from being bundled, not -25.\r
- ❌ -22\r
> Modifier -59 is used to indicate multiple procedures were independent of each other, which prevents them from being bundled, not -22.\r
- ✅ -59\r
> Modifier -59 is used to indicate multiple procedures were independent of each other, which prevents them from being bundled.\r
## Question 34 of 100\r
Which of the following entities are required to follow HIPAA rules and regulations?\r
- ❌ Government insurance agencies, banks, and long-term care facilities\r
> Health care organizations that transmit protected health information (PHI) are required to follow HIPAA rules and regulations. These can include government insurance agencies and long-term care facilities, but not banks.\r
- ✅ Clearinghouses, health insurance companies, and billing services\r
> Health care organizations that transmit protected health information (PHI) are required to follow HIPAA rules and regulations. These can include clearinghouses, health insurance companies, and billing services.\r
- ❌ Dentists, providers, and retail stores\r
> Health care organizations that transmit protected health information (PHI) are required to follow HIPAA rules and regulations. These can include dentists and providers, but not retail stores.\r
- ❌ Pharmacies, chiropractors, and service stations\r
> Health care organizations that transmit protected health information (PHI) are required to follow HIPAA rules and regulations. These can include pharmacies and chiropractors, but not service stations.\r
## Question 35 of 100\r
A provider's office fee is $100, and the Medicare Part B allowed amount is $85. Assuming the beneficiary has not met any deductible amount, the patient should be billed for which of the following amounts?\r
- ❌ $15\r
> If the patient has not met their annual deductible, they will pay the Medicare allowed amount.\r
- ✅ $85\r
> If the patient has not met their annual deductible, they will pay the Medicare allowed amount, which is $85.\r
- ❌ $100\r
> If the patient has not met their annual deductible, they will pay the Medicare allowed amount.\r
- ❌ $0\r
> If the patient has not met their annual deductible, they will pay the Medicare allowed amount.\r
## Question 36 of 100\r
A billing and coding specialist is reviewing delinquent claims and discovers that a third-party payer paid a claim but applied it to the incorrect provider. The third-party payer will reimburse the payment once the improperly paid funds are recouped. Which of the following terms is used to describe this claim?\r
- ❌ Payment error\r
> A payment error involves a payment for a claim that was sent directly to the patient.\r
- ❌ Rejected\r
> A rejected claim, or soft denial, is often in response to a technical error.\r
- ❌ Denied\r
> A denied claim has been adjudicated and the third-party payer has determined that no payment will be made.\r
- ✅ Suspended\r
> A claim that is pending due to recovery of benefits from a third party is a suspended claim. Since payment to the correct provider has been withheld until the third-party payer has recouped its payment from the incorrect provider, this claim is suspended.\r
## Question 37 of 100\r
A child is brought into a facility by their mother. The child is covered under both parents’ insurance policies. The child's father was born on 10/1/1980 and their mother was born on 10/2/1981. Which of the following statements is true regarding the primary policy holder for the child?\r
- ❌ The father is the primary policy holder because he is a year younger.\r
> According to the birthday rule, the policyholder whose birthday month and day comes first in the calendar year is the primary policy holder for dependents. The year is not a factor.\r
- ✅ The father is the primary policy holder because his birthday falls first in the calendar year.\r
> According to the birthday rule, the policyholder whose birthday month and day comes first in the calendar year is the primary policy holder for dependents. Therefore, the father is the primary policy holder for the child.\r
- ❌ The mother is the primary policy holder because she is the oldest\r
> According to the birthday rule, the policyholder whose birthday month and day comes first in the calendar year is the primary policy holder for dependents. The year is not a factor.\r
- ❌ The mother is the primary policy holder because she brought the child in for the appointment.\r
> According to the birthday rule, the policyholder whose birthday month and day that comes first in the calendar year is the primary policy holder for dependents.\r
## Question 38 of 100\r
A billing and coding specialist is preparing a claim for a procedure with a prolonged operative time that has modifier -22 attached. Which of the following actions should the specialist take?\r
- ✅ Include an attachment to the claim.\r
> The specialist should include an attachment to the claim to support the increased procedural services, which is indicated by modifier -22\r
- ❌ Contact the third-party payer\r
> There is no reason to contact the third-party payer. The specialist should attach documentation to support the increased procedural services.\r
- ❌ Inform the patient that the service is noncovered.\r
> There is no reason to inform the patient that the service is noncovered. The specialist should attach documentation to support the increased procedural services.\r
- ❌ Remove modifier -22 and submit the claim.\r
> There is no reason to remove modifier -22 prior to submitting the claim. The specialist should attach documentation to support the increased procedural services.\r
## Question 39 of 100\r
A billing and coding specialist is reviewing an encounter note that indicates a biopsy was performed. The specialist requires which of the following additional details to fully code this procedure?\r
- ❌ Proximal vs. distal location\r
> The specialist requires a status of benign or malignant from the biopsy report to fully code this procedure.\r
- ✅ Benign vs. malignant status\r
> The specialist requires a status of benign or malignant from the biopsy report to fully code this procedure.\r
- ❌ Chronic vs. acute status\r
> The specialist requires a status of benign or malignant from the biopsy report to fully code this procedure.\r
- ❌ Multiple vs. singular count\r
> The specialist requires a status of benign or malignant from the biopsy report to fully code this procedure.\r
## Question 40 of 100\r
Which of the following information is required on a patient account record?\r
- ✅ Name and address of guarantor\r
> The guarantor’s name and address are required on the patient account record.\r
- ❌ Procedures performed\r
> The procedures performed are not required on the patient account record.\r
- ❌ Family history of the guarantor\r
> The guarantor's family history is not required on the patient account record.\r
- ❌ Diagnosis\r
> The diagnosis is not required on the patient account record.\r
## Question 41 of 100\r
A billing and coding specialist is preparing to appeal a partially paid claim due to an incorrect procedure code. Which of the following steps of the appeal process includes the review of the claim adjustment reason code?\r
- ✅ Identification\r
> During the identification step, the reason for the denial or rejection is identified by interpreting claim adjustment reason codes.\r
- ❌ Management\r
> The management step involves the process of resolving denied or rejected claims, such as sorting.\r
- ❌ Monitoring\r
> The monitoring step involves keeping a record of denied or rejected claims that can be reviewed routinely as a reference for samples or for prevention.\r
- ❌ Prevention\r
> The prevention step involves teaching and educating those involved in the claims management and appeals process and involving them when necessary.\r
## Question 42 of 100\r
Which of the following actions by a billing and coding specialist ensures a patient's health information is protected?\r
- ❌ Confirming test results with the patient over the phone at the reception area\r
> The specialist should confirm test results in private.\r
- ❌ Asking patients the reason for their visit during check-in\r
> The specialist should ask patients their reason for visiting in a private area where it cannot be overheard.\r
- ✅ Using data encryption software on office workstations\r
> Encryption software ensures that electronically transmitted health information cannot be read by third parties; therefore, this action ensures a patient's health information is protected.\r
- ❌ Leaving the workstation unlocked while stepping away to assist another patient\r
> The specialist should avoid leaving the workstation unlocked while helping another patient to ensure the patient's health information is protected.\r
## Question 43 of 100\r
A billing and coding specialist receives a denial for payment from TRICARE for services provided in the emergency department while a provider was on call. The provider is not a participating TRICARE provider. Which of the following actions must the specialist take to process an appeal for payment?\r
\r
- ❌ File a nonavailability request form\r
> A nonavailability request form is filled out by out-of-network providers who wish to treat obstetric patients when a TRICARE provider is not available. Out-of-network providers have no access to TRICARE information for subscribers. All requests for information must go through the subscriber or patient.\r
- ❌ Request reconsideration.\r
> Only participating providers can request reconsideration for a denial of payment from TRICARE. Out-of-network providers have no access to TRICARE information for patients. All requests must go through the subscriber or patient.\r
- ✅ Contact the patient for assistance\r
> Out-of-network providers have no access to TRICARE information for patients. All requests must go through the subscriber or patient.\r
- ❌ Inquire through the online TRICARE portal.\r
> Only participating providers have access to the online TRICARE portal. Out-of-network providers have no access to TRICARE information for patients. All requests must go through the subscriber or patient.\r
## Question 44 of 100\r
A billing and coding specialist is reviewing a remittance advice from Medicare and notices that the amount paid for a procedure is less than the contracted amount. Which of the following is a potential reason for the reduced amount of payment?\r
\r
- ✅ The claim indicated an incorrect place of service.\r
> Medicare requires specific services to be provided in specific care locations. If this is not possible, the amount of payment provided is reduced. This is called a site-of-service limitation.\r
- ❌ The claim is missing demographic information.\r
> A claim that is missing demographic information will be denied by the payer, rather than have a reduced payment applied to it.\r
- ❌ The coordination of benefits was not updated.\r
> If the coordination of benefits is not updated by the patient, it will result in the claim being denied, rather than a reduction in the amount of payment.\r
- ❌ The claim was for a work-related injury.\r
> A claim for a work-related injury would need to be filed through workers’ compensation, not Medicare. If a work-related claim is filed through Medicare, the claim would be denied, rather than the payment be reduced.\r
## Question 45 of 100\r
A billing and coding specialist is collecting demographic information from a patient. Which of the following pieces of information should the specialist expect the Medicaid eligibility verification system (MEVS) to provide?\r
\r
- ❌ Preauthorization for services\r
> Preauthorization for services is based on coverage and is not provided through MEVS.\r
- ❌ Medicare eligibility\r
> Medicare and Medicaid are separate entities. The specialist should not expect to collect information about Medicare eligibility from MEVS.\r
- ✅ Dates of coverage\r
> MEVS provides information about Medicaid eligibility, including the patient's dates of coverage.\r
- ❌ List of pre-existing conditions\r
> MEVS does not provide a list of a patient's pre-existing conditions. Insurers are prohibited from disclosing information about a patient's pre-existing conditions; therefore, this information would need to be collected directly from the patient.\r
## Question 46 of 100\r
A billing and coding specialist observes a colleague perform an unethical act. Which of the following actions should the specialist take?\r
- ❌ File a complaint with the provider.\r
> Filing a complaint with the provider is not an appropriate action.\r
- ❌ Confront the employee\r
> Confronting the employee is not an appropriate action.\r
- ✅ Report the incident to a supervisor.\r
> The specialist should report the incident to a supervisor.\r
- ❌ Disregard the incident.\r
> Disregarding the incident is not an appropriate action.\r
## Question 47 of 100\r
When a patient signs an Acknowledgement of Notice of Privacy Practice, it indicates which of the following?\r
- ❌ The patient allows information to be used for treatment, payment, and health care operations (TPO).\r
> Allowing information to be used for TPO does not apply to the Acknowledgement of Notice of Privacy Practice.\r
- ❌ The patient is billed for services provided that are not paid for by The Centers for Medicare and Medicaid Services (CMS).\r
> Being billed for services that are not paid for by CMS does not apply to the Acknowledgement of Notice of Privacy Practice.\r
- ❌ The patient allows information to be maintained in an electronic health record (EHR) environment.\r
> Allowing information to be maintained in an EHR environment does not apply to the Acknowledgement of Notice of Privacy Practice.\r
- ✅ The patient accepts the policies and procedures regarding how protected health information (PHI) is handled.\r
> Accepting the policies and procedures regarding how PHI is handled ensures that the patient has reviewed and signed off on how their PHI is handled.\r
## Question 48 of 100\r
A billing and coding specialist is processing a claim for a patient who broke their arm while repairing cars at their workplace. There is no nerve damage, the arm is placed in a cast for 6 weeks, and the patient is cleared to return to work in 6 weeks. Which of the following types of workers’ compensation applies to this patient?\r
- ✅ Temporary disability\r
> Temporary disability is provided when a worker is injured on the job and their wages are lost on a temporary basis.\r
- ❌ Third-party subrogation\r
> Third-party subrogation is legally pursuing an individual that caused an insurance loss to the insured to recover the amount of the claim paid.\r
- ❌ Permanent disability\r
> Permanent disability is provided when it is determined that the patient is permanently impaired and unable to return to the job they held prior to the injury.\r
- ❌ Nondisability\r
> Nondisablity is provided when a worker has a minor injury on the job and is able to continue regular duties.\r
## Question 49 of 100\r
Medigap coverage is offered to Medicare beneficiaries by which of the following?\r
- ❌ Medicaid\r
> Medicaid's supplemental coverage, Medi-Medi, picks up Medicare's premiums for qualified applicants.\r
- ❌ Federal health plans\r
> Federal health plans are not private; therefore, they do not offer supplemental coverage.\r
- ❌ Managed care plans\r
> Managed care plans are eligible as primary or secondary care plans; therefore, they do not provide supplemental coverage.\r
- ✅ Private third-party payers\r
> Medigap coverage is supplemental coverage that private third-party payers offer to Medicare beneficiaries who pay their Medicare premium.\r
## Question 50 of 100\r
Which of the following qualifies a patient for eligibility under Medicare as the primary third-party payer?\r
- ❌ Individuals who have worked 9 years in Medicare-covered employment\r
> Individuals must work for at least 10 years in Medicare-covered employment to be eligible.\r
- ❌ Individuals who are below the federal poverty level\r
> Individuals who are below the federal poverty level are eligible for Medicaid, not Medicare.\r
- ❌ Individuals who are 50 years or younger\r
> Individuals who are 65 years or older qualify for Medicare.\r
- ✅ Individuals who are under age 65 and have a disability\r
> Individuals who are under age 65 and have a disability are eligible for Medicare.\r
\r
## Question 51 of 100\r
An employer's workers' compensation payer requires bloodwork for an employee who experienced a work-related injury. Which of the following modifiers should a billing and coding specialist use?\r
| Modifier | Description                                                                                                                   |\r
|----------|-------------------------------------------------------------------------------------------------------------------------------|\r
| -26      | Professional component                                                                                                        |\r
| -32      | Mandated services                                                                                                             |\r
| -52      | Reduced services                                                                                                              |\r
| -58      | Staged or related procedure by the same physician or other qualified health care professional during the postoperative period |\r
- ❌ -52\r
> Modifier 32 is used when a service is required by a payer or agency not -52.\r
- ❌ -58\r
> Modifier 32 is used when a service is required by a payer or agency not -58.\r
- ✅ -32\r
> Modifier 32 is used when a service is required by a payer or agency.\r
- ❌ -26\r
> Modifier 32 is used when a service is required by a payer or agency, not -26.\r
## Question 52 of 100\r
A patient has met an in-network PPO deductible of $150. The patient's coinsurance is 20%, and the allowed amount is $600. Which of the following is the patient's out-of-pocket expense?\r
- ❌ $450\r
> Since the patient's deductible has been met, the patient's responsibility is 20% of the allowed amount. (0.20 x 600 = 120)\r
- ❌ $300\r
> Since the patient's deductible has been met, the patient's responsibility is 20% of the allowed amount. (0.20 x 600 = 120)\r
- ✅ $120\r
> Since the patient's deductible has been met, the patient's responsibility is 20% of the allowed amount. (0.20 x 600 = 120)\r
- ❌ $150\r
> Since the patient's deductible has been met, the patient's responsibility is 20% of the allowed amount. (0.20 x 600 = 120)\r
## Question 53 of 100\r
Which of the following is a correct rule when using CPT® add-on codes?\r
- ❌ They are automatically reduced in value.\r
> CPT® add-on codes are not automatically reduced in value.\r
- ❌ They should be sequenced first.\r
> CPT® add-on codes should not be sequenced first.\r
- ❌ They are used for unspecified codes\r
> CPT® add-on codes are not used for unspecified codes.\r
- ✅ They are exempt from the multiple procedure concept.\r
> CPT® add-on codes are exempt from the multiple procedure concept.\r
\r
## Question 54 of 100\r
Complete the following question by referencing the coding exhibit\r
Which of the following CPT® codes should a billing and coding specialist use to bill for a 5-year-old child who had an initial repair of a 2.5 cm abdominal hernia?\r
### CPT® Code Set\r
| Code  | Description                                                                                                                                                                                                                                                                               |\r
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| 49491 | Repair, initial inguinal hernia, preterm infant (younger than 37 weeks gestation at birth), performed from birth up to 50 weeks post conception age, with or without hydrocelectomy; reducible.                                                                                           |\r
| 49521 | Repair recurrent inguinal hernia, any age; incarcerated or strangulated.                                                                                                                                                                                                                  |\r
| 49591 | Repair of anterior abdominal hernia(s) (i.e., epigastric, incisional, ventral, umbilical, spigelian), any approach (i.e., open, laparoscopic, robotic), initial, including implantation of mesh or other prosthesis when performed, total length of defect(s); less than 3 cm, reducible. |\r
| 49613 | Repair of anterior abdominal hernia(s) (i.e., epigastric, incisional, ventral, umbilical, spigelian) any approach (open, laparoscopic, robotic), recurrent, including implantation of mesh or other prosthesis when performed, total length of defect(s); less than 3 cm, reducible.      |\r
- ❌ 49521\r
> This CPT® code indicates repair of a recurrent, incarcerated, or strangulated inguinal hernia at any age.\r
- ❌ 49491\r
> This CPT® code indicates an inguinal hernia repair for a child from birth up to 50 weeks of age.\r
- ✅ 49591\r
> is CPT® code indicates an initial abdominal hernia repair less than 3 cm.\r
- ❌ 49613\r
> This CPT® code indicates a recurrent abdominal hernia repair less than 3 cm.\r
\r
## Question 55 of 100\r
Complete the following question by referencing the coding exhibit.\r
A billing and coding specialist is reviewing a claim for an established patient who arrived at the office with an upper respiratory infection. Which of the following codes should the specialist use for this encounter?\r
### CPT® Code Set\r
| Code  | Description                                                                                                                                                                                               |\r
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| 99213 | Office or other outpatient visit for the evaluation and management of an established patient, which requires a medically appropriate history and/or examination and low level of medical decision making. |\r
| 99203 | Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and low level of medical decision making.          |\r
| 99252 | Inpatient or observation consultation for a new or established patient, which requires a medically appropriate history and/or examination and straightforward level of medical decision making.           |\r
| 99283 | Emergency department visit for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and low level of medical decision making.                    |\r
- ❌ 99252\r
> This code is used for an inpatient or observation consultation visit, regardless of whether the patient is new or established.\r
- ✅ 99213\r
> This code is used for an established patient office Evaluation and Management (E/M) service.\r
- ❌ 99203\r
> This code is used for a new patient office Evaluation and Management (E/M) service.\r
- ❌ 99283\r
> This code is used for an emergency department visit, regardless of whether the patient is new or established.\r
## Question 56 of 100\r
A billing and coding specialist discovers that one private payer has not reimbursed the provider for any claims submitted in the past year. Clean claims have been submitted to the payer and have been acknowledged. Which of the following entities should the specialist contact to report the payer's failure to submit timely reimbursement?\r
- ❌ Department of Health and Human Services (HHS)\r
> The HHS does not set standards for processing and payment times by third-party payers. This is a standard set by individual states' insurance commissioners.\r
- ❌ Bureau of Health Workforce (BHW)\r
> The BHW does not set standards for processing and payment times by third-party payers. This is a standard set by individual states’ insurance commissioners.\r
- ✅ State Insurance Commissioner's office\r
> Each state has an insurance commission that sets standards for processing and payment times that third-party payers must follow. The specialist should contact their state's Insurance Commissioner's office to file a complaint.\r
- ❌ Federal Insurance Office (FIO)\r
> The FIO oversees non-health insurance products.\r
## Question 57 of 100\r
Which of the following code sets is used to report inpatient procedures?\r
- ❌ HCPCS\r
> HCPCS codes report services and supplies for outpatient services.\r
- ❌ CPT®\r
> CPT® codes report the professional charges for procedures.\r
- ✅ ICD-10-PCS\r
> ICD-10-PCS codes report inpatient procedures.\r
- ❌ ICD-10-CM\r
> ICD-10-CM codes report patient illnesses, injuries and conditions.\r
## Question 58 of 100\r
Which of the following is used by Medicare to determine if an item or service is covered?\r
- ✅ National Coverage Determination (NCD)\r
> NCD is a Medicare policy stating whether and under what circumstances a particular item or service is covered by Medicare.\r
- ❌ Prospective payment system (PPS)\r
> PPS is a method of reimbursement in which Medicare payment is made based on a predetermined, fixed amount.\r
- ❌ Advance Beneficiary Notice (ABN)\r
> ABN is a form provided to a patient to indicate a service may not be covered by Medicare and the patient may be responsible for the charges.\r
- ❌ Resource-based relative value scale (RBRVS)\r
> RBRVS is used to establish Medicare fees.\r
## Question 59 of 100\r
Complete the following question by referencing the coding exhibit.\r
A patient presents to a provider's office with difficulty speaking, facial drooping, and an inability to close their left eye. They are diagnosed with Bell's palsy. A billing and coding specialist should report which of the following ICD-10-CM codes?\r
### CPT® Code Set\r
| Code    | Description                  |\r
|---------|------------------------------|\r
| R29.810 | Facial weakness              |\r
| R47.81  | Slurred speech               |\r
| G51.0   | Bell's palsy                 |\r
| P11.3   | Birth injury to facial nerve |\r
- ❌ R29.810, R47.81\r
> The specialist should not report signs and symptoms with a confirmed diagnosis.\r
- ✅ G51.0\r
> Common signs and symptoms of Bell's palsy include facial drooping and difficulty speaking. These codes are not reported separately with a confirmed or definitive diagnosis. Correct coding for Bell's palsy is reporting only code G51.0.\r
- ❌ G51.0, R29.810, R47.81\r
> The specialist should not report signs and symptoms with a confirmed diagnosis.\r
- ❌ P11.3\r
> The diagnosis does not indicate it is due to a birth injury. P codes refer to newborns.\r
## Question 60 of 100\r
A billing and coding specialist is submitting a claim for a school-age child who was brought to the clinic by their maternal grandmother. The child's parents are divorced and remarried, and the child's mother has legal custody of the child. The specialist should recognize that the child's primary insurance coverage is provided through which of the following insured individuals?\r
\r
- ✅ Biological mother\r
> In instances where a child's parents are divorced and one of the parents retains custody, the custodial parent who is insured is the primary insurer for the child.  The custodial stepparent, when applicable, is the secondary insurer with the noncustodial biological parent being tertiary.\r
- ❌ Stepmother\r
> In instances where a child's parents are divorced and one of the parents retains custody, the custodial parent who is insured is the primary insurer for the child.  The custodial stepparent, when applicable, is the secondary insurer with the noncustodial biological parent being tertiary.\r
- ❌ Biological father\r
> In instances where a child's parents are divorced and one of the parents retains custody, the custodial parent who is insured is the primary insurer for the child.  The custodial stepparent, when applicable, is the secondary insurer with the noncustodial biological parent being tertiary.\r
- ❌ Maternal grandmother\r
> In instances where a child's parents are divorced and one of the parents retains custody, the custodial parent who is insured is the primary insurer for the child.  The custodial stepparent, when applicable, is the secondary insurer with the noncustodial biological parent being tertiary.\r
\r
## Question 61 of 100\r
A billing and coding specialist is reviewing a delinquent claim. Which of the following actions should the specialst take first?\r
- ✅ Verify the age of the account.\r
> Verifying the age of the account is the first action the specialist should take when reviewing a delinquent claim.\r
- ❌ Query the third-party payer.\r
> Querying the third-party payer is the third step the specialist should take when reviewing a delinquent claim.\r
- ❌ Obtain the claim status.\r
> Obtaining the claim status is the second step the specialist should take when reviewing a delinquent claim.\r
- ❌ Resubmit the claim.\r
> Resubmitting the claim is the last step the specialist should take when reviewing a delinquent claim.\r
## Question 62 of 100\r
Which of the following parts of Medicare is managed by private third-party payers that have been approved by Medicare?\r
- ❌ Medicare Part A\r
> Medicare Part A provides coverage for hospital services.\r
- ❌ Medicare Part B\r
> Medicare Part B provides coverage for outpatient and provider services.\r
- ✅ Medicare Part C\r
> Medicare Part C, or Medicare Advantage Plans, allows the patient to choose a managed care plan and a private, fee-for-service health care plan that has been approved by Medicare.\r
- ❌ Medicare Part D\r
> Medicare Part D provides prescription medication coverage.\r
## Question 63 of 100\r
Which of the following is true regarding Medicaid eligibility?\r
- ❌ Eligibility of dependents is automatic.\r
> Dependent eligibility is income-based and is not automatic.\r
- ❌ Providers who accept Medicare must also accept Medicaid.\r
> Medicare and Medicaid are separate entities and providers are not required to accept both.\r
- ✅ Patient eligibility is determined at each visit.\r
> Patient eligibility for Medicaid is determined at each visit and depends upon the patient's financial status.\r
- ❌ Patient eligibility begins at 65 years of age.\r
> Patient eligibility for Medicare begins at 65 years of age.\r
## Question 64 of 100\r
For which of the following reasons should a billing and coding specialist follow the guidelines in the CPT® manual?\r
- ✅ The guidelines define items that are necessary to accurately code.\r
> The CPT® coding manual contains guidelines required for accurate coding.\r
- ❌ The guidelines assist with coding proper diagnoses.\r
> The ICD-10-CM coding manual assists with the coding of proper diagnoses.\r
- ❌ The guidelines indicate medical necessity.\r
> The CPT® guidelines do not contain any indications for medical necessity.\r
- ❌ The guidelines negate the need for documentation.\r
> Proper documentation is still required outside of the CPT® guidelines.\r
## Question 65 of 100\r
Which of the following provisions ensures that an insured patient's benefits from third-party payers do not exceed 100% of allowable medical expenses?\r
\r
- ❌ Source document\r
> A source document is a communication tool used between the provider and third-party payer to submit a claim.\r
- ❌ Assignment of benefits\r
> Assignment of benefits does not ensure that patient benefits from a third-party payer do not exceed allowable medical expenses.\r
- ❌ Coinsurance\r
> Coinsurance is the percentage a patient pays for covered services after the deductible is met.\r
- ✅ Coordination of benefits\r
> Coordination of benefits is used between multiple third-party payers to determine which payer pays primary and which payer pays secondary. The coordination of benefits third-party payer does not exceed allowable medical expenses.\r
## Question 66 of 100\r
A billing and coding specialist is preparing a claim for a provider. The operative note indicates the surgeon performed a CABG. The specialist should identify that CABG stands for which of the following?\r
- ✅ Coronary artery bypass graft\r
> CABG stands for coronary artery bypass graft.\r
- ❌ Cardiac arterial blood gas\r
> CABG stands for coronary artery bypass graft.\r
- ❌ Coronal aortic basilar graph\r
> CABG stands for coronary artery bypass graft.\r
- ❌ Cardio axillary brachial gram\r
> CABG stands for coronary artery bypass graft.\r
## Question 67 of 100\r
A patient is diagnosed with pneumonia during a follow-up encounter for a knee joint replacement surgery performed 2 weeks previously. Which of the following CPT® modifiers should the specialist add to the claim prior to resubmitting?\r
\r
- ❌ -55 Postoperative management only\r
> Modifier -55 is used for postoperative management care.\r
- ❌ -25 Significant, separately identifiable evaluation and management service by the same physician or other qualified health care professional on the same day of the procedure or other service\r
> Modifier -25 is used for separately significant Evaluation and Management (E/M) services by the same provider on the same day of service.\r
- ❌ -79 Unrelated procedure or service by the same physician or other qualified health care professional during the postoperative period\r
> Modifier -79 is used for unrelated procedures or services by the same provider during the postoperative period.\r
- ✅ -24 Unrelated evaluation and management service by the same physician or other qualified health care professional during a postoperative period\r
> Modifier -24 is used for unrelated Evaluation and Management (E/M) services by the same provider during the postoperative period. The specialist should add this modifier and resubmit the claim.\r
\r
## Question 68 of 100\r
Anesthesia codes from the CPT® manual require which of the following on the claim form?\r
- ❌ Special reports\r
> Anesthesia codes require physical status modifiers for billing, not special reports.\r
- ❌ Add-on codes\r
> Anesthesia codes require physical status modifiers for billing, not add-on codes.\r
- ❌ Category Il supplemental codes\r
> Anesthesia codes require physical status modifiers for billing, not category II supplemental codes.\r
- ✅ Physical status modifiers\r
> Anesthesia codes require physical status modifiers for billing.\r
\r
## Question 69 of 100\r
Complete the following question by referencing the coding exhibit.\r
A billing and coding specialist is reviewing a patient's encounter progress note. Which of the following modifiers indicates the patient received general anesthesia from a surgeon?\r
| Modifier | Description                   |\r
|----------|-------------------------------|\r
| -22      | Increased procedural services |\r
| -23      | Unusual anesthesia            |\r
| -47      | Anesthesia by surgeon         |\r
| -52      | Reduced services              |\r
- ✅ -47\r
> Modifier -47 indicates general anesthesia was administered by the surgeon.\r
- ❌ -23\r
> Modifier -23 indicates local or regional anesthesia was administered.\r
- ❌ -52\r
> Modifier -52 indicates services rendered were reduced from the originally planned full services.\r
- ❌ -22\r
> Modifier -22 indicates services rendered were increased from the originally planned services due to severity of the patient's condition.\r
## Question 70 of 100\r
A billing and coding specialist is training a new employee on a claim for a consultation. The new employee asks, "What is a consultation?" Which of the following responses should the specialist make?\r
\r
- ❌ "It's when a provider requests medical advice from the nursing staff."\r
> A consultation is when a provider requests medical advice about treating a condition from a specialist, such as a cardiologist.\r
- ❌ "It's a meeting between the provider and the patient's family.\r
> A consultation is when a provider requests medical advice about treating a condition from a specialist, such as a cardiologist.\r
- ✅ "It's when a provider requests medical advice from a specialist."\r
> A consultation is when a provider requests medical advice about treating a condition from a specialist, such as a cardiologist.\r
- ❌ "It's a meeting between the provider and the third-party payer."\r
> A consultation is when a provider requests medical advice about treating a condition from a specialist, such as a cardiologist.\r
## Question 71 of 100\r
Which of the following is a ICD-10-CM category code?\r
- ✅ A 3-character code\r
> ICD-10-CM category codes have 3 characters.\r
- ❌ A 5-character code\r
> ICD-10-CM category codes have 3 characters, not 5.\r
- ❌ A 7-character code\r
> ICD-10-CM category codes have 3 characters, not 7.\r
- ❌ A 6-character code\r
> ICD-10-CM category codes have 3 characters, not 6.\r
## Question 72 of 100\r
A billing and coding specialist is preparing a claim for a patient who had a procedure performed on their left index finger. Which of the following CPT® modifiers indicates the correct digit?\r
- ❌ -F4 Left hand, fifth digit\r
> Modifier -F4 is used for the left pinky.\r
- ❌ -F6 Right hand, second digit\r
> Modifier -F6 is used for the right index finger.\r
- ❌ -FA Left hand, thumb\r
> Modifier -FA is used for the left thumb.\r
- ✅ -F1 Left hand, second digit\r
> Modifier -F1 is used for the left index finger.\r
## Question 73 of 100\r
Which of the following is an example of a violation of an adult patient's confidentiality?\r
- ❌ While reviewing a claim, a billing and coding specialist reads the diagnosis before realizing that the patient is a neighbor.\r
> Proofing a claim, including the ICD-10-CM code, is not a violation of patient confidentiality.\r
- ❌ A billing and coding specialist queries the provider about a diagnosis in a patient's medical record.\r
> Unclear documentation should be clarified prior to code assignment and billing, This is not a violation of patient confidentiality.\r
- ❌ The provider uses their home phone to discuss the patient's care with nursing staff.\r
> Using a home phone is not a violation of patient confidentiality.\r
- ✅ Patient information was disclosed to the patient's parent without consent.\r
> Disclosing information to anyone without the patient's consent is a violation of patient confidentiality.\r
## Question 74 of 100\r
Which of the following links the ICD-10-CM and CPT® codes for claims processing?\r
- ✅ Diagnosis pointer\r
> The diagnosis pointer links the ICD-10-CM and CPT® codes to support medical necessity.\r
- ❌ Place of service\r
> Place of service identifies where a service was performed.\r
- ❌ Modifier\r
> A modifier provides additional detail for CPT® codes.\r
- ❌ Days or units\r
> The days identify the number of days a patient was hospitalized. Units are measurements that identify the quantity of injections or procedures.\r
## Question 75 of 100\r
Which of the following is the provision of health insurance policies that specifies which coverage is primary or secondary?\r
- ❌ Eligibility verification\r
> Eligibility verification is the process of checking and confirming that a patient is covered under an insurance plan.\r
- ❌ Explanation of benefits\r
> Explanation of benefits is a summary of all benefits processed.\r
- ❌ Assignment of benefits\r
> Assignment of benefits is when a patient authorizes the third-party payer to pay the provider directly.\r
- ✅ Coordination of benefits\r
> Coordination of benefits is the provision of health insurance policies that specifies which coverage is primary or secondary.\r
## Question 76 of 100\r
Which of the following is the purpose of running an insurance aging report each month?\r
- ❌ To determine the balances the patients owe the provider\r
> The aging report does not indicate the balances owed the provider by patients.\r
- ❌ To determine which patients have upcoming or missed appointments\r
> The aging report does not indicate patient appointment status.\r
- ✅ To determine which claims are outstanding from third-party payers\r
> An aging report indicates the status of outstanding claims that need to be paid.\r
- ❌ To determine what the third-party payer has paid for the provider's services to a patient\r
> The aging report does not indicate the amount a third-party payer has paid the provider.\r
## Question 77 of 100\r
An explanation of benefits states the amount billed was $80. The allowed amount is $60, and the patient is required to pay a $20 copayment. Which of the following describes the insurance check amount to be posted?\r
- ✅ $40\r
> The allowed amount is $60 and the patient is required to pay a $20 copayment. The difference in cost is $40, which is the insurance check amount to be posted.\r
- ❌ $80\r
> The check amount is the allowed amount minus any copay requirements\r
- ❌ $60\r
> The check amount is the allowed amount minus any copay requirements\r
- ❌ $20\r
> The check amount is the allowed amount minus any copay requirements\r
\r
## Question 78 of 100\r
Complete the following question by referencing the coding exhibit.\r
A patient has a breast biopsy with the placement of a clip. After the biopsy is determined to be malignant, the patient elects for a mastectomy during the global period of the biopsy. Which of the following modifiers should a billing and coding specialist use to report the mastectomy?\r
| Modifier | Description                                                                                                                                                                                       |\r
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| -25      | Significant, separately identifiable evaluation and management (E/M) service by the same physician or other qualified health care professional on the same day of the procedure or other service. |\r
| -58      | Staged or related procedure by the same physician or other qualified health care professional during the postoperative period.                                                                    |\r
| -59      | Distinct procedural service                                                                                                                                                                       |\r
| -78      | Unplanned return to the operating/procedure room by the same physician or other qualified health care professional following procedure for a related procedure during the postoperative period.   |\r
- ✅ -58\r
> Modifier -58 indicates a procedure that is performed by the same provider or other qualified health care professional during the postoperative period. This is the modifier the specialist should use to report the mastectomy because it was performed during the global period of the biopsy.\r
- ❌ -59\r
> Modifier -59 indicates a distinct procedural service.\r
- ❌ -25\r
> Modifier -25 indicates a significant, separately identifiable Evaluation and Management (E/M) service by the same provider or other qualified health care professional on the same day of the procedure or other service.\r
- ❌ -78\r
> Modifier -78 indicates an unplanned return to the operating or procedure room by the same provider or other qualified health professional following the initial procedure for a related procedure during the postoperative period.\r
## Question 79 of 100\r
Which of the following is part of a provider's practice compliance program?\r
- ❌ HIPAA compliance audit\r
> AHIPAA compliance audit is not part of a provider's practice compliance program.\r
- ❌ Provider recruitment\r
> Provider recruitment is not part of a provider's practice compliance program.\r
- ✅ Internal monitoring and auditing\r
> Internal monitoring and auditing is part of a provider's practice compliance program. Conducting internal monitoring and auditing provides a solid basis upon which a provider practice can create a voluntary compliance program.\r
- ❌ Notice of privacy practices\r
> Notice of privacy practices is not part of a provider's practice compliance program.\r
## Question 80 of 100\r
A billing and coding specialist is preparing a claim for an established patient who arrived for an annual exam. During the examination, the provider treated the patient's sinus infection and prescribed medication for it. Which of the following Evaluation and Management (E/M) codes requires modifier -25?\r
### CPT® Code Set\r
| Code / Modifier | Description                                                                                                                                                                                                                                                                                                         |\r
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| 99213           | Office or other outpatient visit for the evaluation and management of an established patient, which requires a medically appropriate history and/or examination and low level of medical decision making.                                                                                                           |\r
| 99202           | Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and straightforward level of medical decision making.                                                                                                        |\r
| 99385           | Initial comprehensive preventive medicine evaluation and management of an individual including an age and gender appropriate history, examination, counseling/anticipatory guidance/risk factor reduction interventions, and the ordering of laboratory/diagnostic procedures, new patient, 18-39 years.            |\r
| 99395           | Periodic comprehensive preventive medicine reevaluation and management of an individual including an age and gender appropriate history, examination, counseling/anticipatory guidance/risk factor reduction interventions, and the ordering of laboratory/diagnostic procedures, established patient, 18-39 years. |\r
| -25             | Significant, separately identifiable evaluation and management (E/M) service by the same physician or other qualified health care professional on the same day of the procedure or other service.                                                                                                                   |\r
- ❌ 99395\r
> This code is used for the annual examination of an established patient.\r
- ❌ 99385\r
> This code is used for the annual examination of a new patient.\r
- ✅ 99213\r
> Modifier -25 is used when a separately significant service is provided on the same day as another documented Evaluation and Management (E/M) service.\r
- ❌ 99202\r
> This code is used for the Evaluation and Management (E/M) service of a new patient.\r
## Question 81 of 100\r
A billing and coding specialist is determining coordination of benefits for a patient who has health insurance coverage from both parents. The patient's father's birthday is May 18, 1982 and their mother's birthday is May 18, 1984. Which of the following statements is correct for determining coverage?\r
\r
- ❌ The parent whose birth month comes first in the calendar year will be the primary insurer.\r
> According to the birthday rule, the parent whose birth month and day comes first in the calendar year will be the primary insurer. If the parents have the same birth month and day, the policy that has been active the longest will be the primary.\r
- ❌ The parent whose birth year comes first will be the primary insurer.\r
> According to the birthday rule, the parent whose birth month and day comes first in the calendar year will be the primary insurer. If the parents have the same birth month and day, the policy that has been active the longest will be the primary.\r
- ❌ The parent whose insurance policy went into effect most recently will be the primary insurer.\r
> According to the birthday rule, the parent whose birth month and day comes first in the calendar year will be the primary insurer. If the parents have the same birth month and day, the policy that has been active the longest will be the primary.\r
- ✅ The parent whose insurance policy has been active the longest will be the primary insurer.\r
> According to the birthday rule, the parent whose birth month and day comes first in the calendar year will be the primary insurer. If the parents have the same birth month and day, the policy that has been active the longest will be the primary.\r
\r
## Question 82 of 100\r
When reviewing an established patient's insurance card, a billing and coding specialist notices a minor change from the existing card on file. Which of the following actions should the specialist take?\r
\r
- ✅ Photocopy both sides of the new card.\r
> Any changes to the insurance card should be photocopied or scanned and added to the patient record.\r
- ❌ Describe the change on the patient registration form.\r
> A description of the new card is not sufficient. Any changes to the insurance card should be photocopied and added to the patient record.\r
- ❌ Instruct the patient to contact the third-party payer to verify coverage.\r
> The office staff are responsible for confirming coverage.\r
- ❌ Confirm with the patient that the insurance coverage is the same.\r
> The patient may not be aware of the changes; therefore, the specialist should not confirm coverage with the patient.\r
## Question 83 of 100\r
In ICD-10-CM, Z codes are used to identify which of the following?\r
- ❌ Behavior disorders\r
> Behavior disorders are identified with F codes.\r
- ❌ Digestive diseases\r
> Digestive diseases are identified with K codes.\r
- ❌ Infectious diseases\r
> Infectious diseases are identified with A and B codes.\r
- ✅ Immunizations\r
> Z codes identify encounters for reasons other than illness and injury, such as immunizations.\r
\r
## Question 84 of 100\r
Which of the following pieces of guarantor information is required when establishing a patient's financial record?\r
- ❌ Procedural codes used\r
> The procedural codes used are not required on the patient's financial record.\r
- ❌ Provider name\r
> The provider name is not required on the patient's financial record.\r
- ✅ Phone number\r
> The guarantor's phone number is required on the patient's financial record.\r
- ❌ Diagnosis\r
> The diagnosis is not required on the patient's financial record.\r
## Question 85 of 100\r
A billing and coding specialist is determining third-party payer responsibilities for a 70-year-old patient who has Medicare coverage. The patient's spouse has insurance with Blue Cross Blue Shield through their employer. Which of the following actions should the specialist take?\r
- ❌ Use Blue Cross Blue Shield as the primary insurance.\r
> Since the patient is 70 years old, Medicare would be their primary insurance.\r
- ❌ Ask the patient which insurance is primary.\r
> It is the specialist's responsibility to determine primary and secondary insurance.\r
- ✅ Establish coordination of benefits\r
> The specialist should establish coordination of benefits. Coordination of benefits is the process that determines third-party payer responsibilities.\r
- ❌ Apply the birthday rule.\r
> The birthday rule is used to determine primary insurance for a child when two parents have insurance coverage for the child.\r
## Question 86 of 100\r
Which of the following is the third stage of a claim's life cycle?\r
- ❌ Processing\r
> Processing is the second stage of a claim's life cycle.\r
- ❌ Payment\r
> Payment is the fourth stage of a claim's life cycle.\r
- ✅ Adjudication\r
> Adjudication is the third stage of a claim's life cycle.\r
- ❌ Submission\r
> Submission and electronic data interchange is the first stage of a claim's life cycle.\r
## Question 87 of 100\r
Which of the following is an advantage of electronic claim submission?\r
- ✅ Claims are expedited.\r
> Submitting claims electronically is faster than submitting paper claims.\r
- ❌ Claims are scrubbed.\r
> Both electronic and paper claims can be scrubbed.\r
- ❌ Claims are clean.\r
> Both electronic and paper claims can be clean.\r
- ❌ Claims are paid.\r
> Both electronic and paper claims can be paid.\r
## Question 88 of 100\r
A patient who recently received care from an endocrinologist is being referred to an infectious disease specialist. Which of the following types of referral does the patient need from the endocrinologist?\r
- ❌ Formal referral\r
> A formal referral is required by the managed care organization to determine medical necessity.\r
- ❌ Direct referral\r
> A direct referral is completed and signed by the provider and given to the patient.\r
- ✅ Tertiary care referral\r
> The patient needs a tertiary care referral from the endocrinologist. A tertiary care referral is a referral from one specialist to another specialist.\r
- ❌ Self referral\r
> A self referral is when the patient refers themselves to a specialist.\r
## Question 89 of 100\r
A claim is submitted with a transposed insurance member ID number and returned to the provider. Which of the following describes the status that will be assigned to the claim by the third-party payer?\r
- ❌ Suspended\r
> A suspended claim is held for additional information.\r
- ❌ Pending\r
> A pending claim is held for pending review.\r
- ❌ Denied\r
> A denied claim is returned to the provider after it has been processed.\r
- ✅ Invalid\r
> The third-party payer will assign an invalid status to the claim. An invalid claim contains illogical or incorrect information and is returned to the provider unprocessed.\r
## Question 90 of 100\r
For which of the following reasons should a claim be resubmitted?\r
- ❌ The software claims review process indicates the claim is not complete.\r
> The claims review process is used to correct errors. Claims are submitted electronically once the corrections have been made.\r
- ❌ The claim needs authorization.\r
> The authorization number needs to be included on both paper and electronic claims to be adjudicated; however, it does not require the claim to be resubmitted.\r
- ✅ The claim requires an attachment to support medical necessity.\r
> A claim that requires an attachment to support medical necessity should be resubmitted.\r
- ❌ The claim has been adjudicated.\r
> A claim that has been adjudicated by the third-party payer has completed the claims review process and does not need to be resubmitted.\r
## Question 91 of 100\r
A provider's office receives a subpoena requesting medical documentation from a patient's medical record. After confirming the correct authorization, which of the following actions should a billing and coding specialist take?\r
\r
- ❌ Send the patient's demographic information from the dates of service requested.\r
> The demographic information from the dates of service requested is not what the subpoena requested\r
- ✅ Send the medical information pertaining to the dates of service requested.\r
> The specialist should send only the medical information for the dates of service requested in the subpoena.\r
- ❌ Send the patient's financial record ledger from the dates of service requested.\r
> The financial record ledger from the dates of service requested is not what the subpoena requested.\r
- ❌ Send the claims pertaining to the dates of service requested.\r
> The claims from the dates of service requested is not what the subpoena requested.\r
## Question 92 of 100\r
A billing and coding specialist is arranging a payment plan with a patient who wants to leave postdated checks with the office. The patient proposes leaving one check postdated for 3 months, one for 4 months, and another one for 5 months in the future. According to federal collection law, which of the following actions should the specialist take?\r
\r
- ❌ Send all checks to the bank immediately for the bank to deposit on the dates indicated.\r
> Checks deposited with dates that are this far in advance will not be honored by the bank. Therefore, the checks should be held and deposited no earlier than the date indicated on each check. At least 3 days, and no more than 10 days, prior to depositing each check, the patient must be notified of the deposit.\r
- ✅ Notify the patient between 3 and 10 days prior to depositing each check on the indicated date.\r
> According to federal collection law, the checks should be held by the provider's office and deposited no earlier than the date indicated on each check. At least 3 days, and no more than 10 days, prior to depositing each check, the patient must be notified of the deposit.\r
- ❌ Hold all checks until the final deposit date and deposit the checks together\r
> The checks should be held by the provider's office and deposited no earlier than the date indicated on each check. At least 3 days, and no longer than 10 days, prior to depositing each check, the patient must be notified of the deposit.\r
- ❌ Inform the patient that it is illegal to accept postdated checks.\r
> The specialist should recognize that it is not illegal to accept postdated checks. If the office decides to accept postdated checks, they should be held by the office and deposited no earlier than the date indicated on each check. At least 3 days, and no longer than 10 days, prior to depositing each check, the patient must be notified of the deposit.\r
\r
## Question 93 of 100\r
A billing and coding specialist identifies a CPT® code that is routinely being denied by a third-party payer. Which of the following types of review should the specialist perform?\r
- ❌ Prospective review\r
> A prospective review focuses on medical necessity for care prior to provision of care.\r
- ✅ Retrospective review\r
> The specialist should perform a retrospective review. This type of review focuses on medical necessity for care after care has been concluded.\r
- ❌ Preadmission review\r
> A preadmission review focuses on medical necessity for care before the patient is admitted to receive care.\r
- ❌ Concurrent review\r
> A concurrent review focuses on medical necessity for care while care is ongoing.\r
## Question 94 of 100\r
A billing and coding specialist is reviewing modifier use with a new employee. Which of the following scenarios warrants the use of a modifier?\r
- ❌ Fracture of the left femur\r
> This is a diagnosis and does not warrant a modifier.\r
- ✅ Splinting of the fourth digit on the left foot\r
> Procedures performed on the digits of the foot warrant the use of a modifier to specify on which digit the procedure was performed.\r
- ❌ Recurrent inguinal hernia\r
> This is a diagnosis and does not warrant a modifier.\r
- ❌ Insertion of a drug delivery implant\r
> Insertion codes for a drug delivery implant do not require modifiers.\r
## Question 95 of 100\r
A patient presents to a primary care provider for a closed right index finger fracture. The provider is a non-participating provider for a private payer and does not accept assignment of benefits. The provider's charge for the service is $135. The third-party payer's usual customary reasonable (UCR) amount is $120 with a 20% coinsurance fee. Which of the following is the patient's financial responsibility?\r
- ✅ $39\r
> Because the provider is a non-participating provider, the entire amount is recoverable. The insurance deems $120 to be usual, customary, and reasonable, and bases their 80% payment on that amount ($96). The patient is responsible for the other 20% of the amount ($24) plus the remainder of the difference between the fee and the payer's UCR amount ($15). Therefore, the patient is responsible for $39.\r
- ❌ $24\r
> Because the provider is a non-participating provider, the entire amount is recoverable. The insurance deems $120 to be usual, customary, and reasonable, and bases their 80% payment on that amount ($96). The patient is responsible for the other 20% of the amount ($24) plus the remainder of the difference between the fee and the payer's UCR amount ($15). Therefore, the patient is responsible for $39. An amount of $24 does not add the difference between the charged amount and the UCR amount ($15).\r
- ❌ $27\r
> Because the provider is a non-participating provider, the entire amount is recoverable. The insurance deems $120 to be usual, customary, and reasonable, and bases their 80% payment on that amount ($96). The patient is responsible for the other 20% of the amount ($24) plus the remainder of the difference between the fee and the payer's UCR amount ($15). Therefore, the patient is responsible for $39, An amount of $27 would be 20% of the charged amount, not the UCR.\r
- ❌ $42\r
> Because the provider is a non-participating provider, the entire amount is recoverable. The insurance deems $120 to be usual, customary, and reasonable, and bases their 80% payment on that amount ($96). The patient is responsible for the other 20% of the amount ($24) plus the remainder of the difference between the fee and the payer's UCR amount ($15). Therefore, the patient is responsible for $39, An amount of $42 would be 20% of the charged amount ($27) plus the difference between the charged amount and the UCR ($15).\r
## Question 96 of 100\r
Which of the following actions should a billing and coding specialist take to assign a diagnosis code to the highest level of specificity?\r
- ❌ Apply only the three-character code to a claim.\r
> Not all codes are only three characters in length. A code can require additional specificity and be up to seven characters long.\r
- ❌ Check for exclusion or inclusion notes.\r
> This does not apply when assigning a diagnosis code to the highest level of specificity.\r
- ✅ Apply characters four through seven to a claim.\r
> In order to code to the highest level of specificity, a code may require more than three characters. Therefore, the specialist should apply characters four through seven to a diagnosis code to assign it to the highest level of specificity.\r
- ❌ Check for code first or code also notes.\r
> This does not apply when assigning a diagnosis code to the highest level of specificity.\r
## Question 97 of 100\r
A billing and coding specialist is filing a CMS-1500 claim form for a patient who has private insurance. The specialist should recognize that a signature approving assignment of benefits indicates which of the following?\r
- ❌ The payer should send reimbursement for the claim to the patient, with the exception of copays and deductibles.\r
> If the patient does not sign the statement in block 13 to approve assignment of benefits to the provider, the reimbursement will go to the patient. However, if the block is signed, the payer has permission to send the reimbursement to the provider.\r
- ❌ The provider will accept the payer's reimbursement as payment in full with the exception of copays and deductibles.\r
> Accepting the payer's reimbursement as payment in full is "accepting assignment."\r
- ✅ The payer should send reimbursement directly to the provider with the exception of copays and deductibles.\r
> If block 13, which indicates approval of assignment of benefits, is signed, the payer has permission from the patient to send the reimbursement directly to the provider.\r
- ❌ The provider should bill the patient for any difference between the amount billed and the amount reimbursed by the payer.\r
> This outcome will occur if "No" is checked in block 27 on the CMS-1500, indicating that the provider does not accept assignment. This is not the same as assignment of benefits.\r
## Question 98 of 100\r
Which of the following is a federal government health insurance program?\r
- ❌ Blue Cross Blue Shield\r
> Blue Cross Blue Shield is not a government health insurance program. It is a group or individual private insurance company.\r
- ❌ Workers’ compensation\r
> The federal government requires each state to have workers’ compensation; however, workers’ compensation is not a federal government health insurance program.\r
- ❌ Cigna\r
> Cigna is a private health insurance company.\r
- ✅ TRICARE\r
> TRICARE is a federal government health insurance program that is provided for active military personnel and their families.\r
\r
## Question 99 of 100\r
A billing and coding specialist is preparing a claim for an appendectomy and reports it with two units. The claim is then denied. Which of the following coding edits should the specialist have reviewed prior to submitting the claim?\r
- ✅ Medically unlikely edits\r
> Medically unlikely edits (MUEs) are the maximum units of service that a provider will report under most circumstances for a single beneficiary on a single date of service.\r
- ❌ National Coverage Determination\r
> National Coverage Determination (NCD) determines coverage limitations for items or services that are reasonable and necessary for diagnosis or treatment.\r
- ❌ Outpatient code editor\r
> Outpatient code editor (OCE) is used by Medicare and hospitals.\r
- ❌ Procedure-to-procedure\r
> Procedure-to-procedure (PTP) is an automatic, prepayment edit that prevents improper payments when submitted with Medicare Part B.\r
## Question 100 of 100\r
In which of the following sections of a SOAP note does a provider indicate a patient's reported level of pain?\r
- ✅ Subjective\r
> The subjective section is where the patient describes the chief complaint, which can include the patient's reported level of pain.\r
- ❌ Objective\r
> The objective section includes the results of the patient's physical examination.\r
- ❌ Assessment\r
> The assessment section includes the provider's diagnosis.\r
- ❌ Plan\r
> The plan section includes the provider's treatment plan for the patient.`,Cr=`## Question 1 of 80\r
Which of the following describes the practice of routinely submitting claims that have the same coding or modifier errors?\r
- ❌ Upcoding\r
> Upcoding is a category of fraud, not abuse. This is billing abuse, which can occur unintentionally because of claim errors, including inaccurate code or modifier assignment.\r
- ❌ Overpayment\r
> Overpayment will not occur for this type of claim: it will be rejected. This is billing abuse, which can occur unintentionally because of claim errors, including inaccurate code or modifier assignment.\r
- ✅ Abusive billing pattern\r
> Abusive billing patterns can occur unintentionally in organizations due to claim errors, including inaccurate coding or modifier assignment\r
- ❌ Billing for services not rendered\r
> Billing for services not rendered is considered fraud. This is billing abuse, which can occur unintentionally because of claim errors, including inaccurate code or modifier assignment.\r
\r
## Question 2 of 80\r
Which of the following refers to the act of controlling access to records, protecting patient health information from destruction or loss, and providing employee training?\r
- ✅ Security\r
> This act ensures a patient's health information is protected from destruction or loss.\r
- ❌ Confidentiality\r
> Confidentiality is a concept that maintains the security of patient health information by restricting patient information and access to those who do not have proper authorization.\r
- ❌ Privacy\r
> This concept represents the right of an individual's personal information to be protected from being disclosed to others.\r
- ❌ Authorization\r
> This concept gives covered enteties permission to use specified protected health information (PHI)\r
\r
## Question 3 of 80\r
A billing and coding specialist is processing claims. Which of the following should the specialist identify as an example of fraud?\r
- ❌ Billing non-covered services\r
> Billing non-covered services is an example of abuse, not fraud.\r
- ❌ Charging excessively for services in error\r
> Charging excessively for services is an example of abuse, not fraud.\r
- ❌ Mistakenly reporting duplicate charges\r
> Reporting duplicate charges is an example of abuse, not fraud.\r
- ✅ Upcoding for increased reimbursement\r
> Upcoding is billing for a higher level of service than what was provided in order to increase the reimbursement.\r
\r
## Question 4 of 80\r
Which of the following requires a patient's authorization prior to disclosure?\r
- ✅ Protected health information (PHI)\r
> A patient's PHI requires an authorization from the patient before that information can be disclosed to another party.\r
- ❌ Workers' compensation claim\r
> Workers' compensation claims do not require patient authorization for release of history and treatment plan information related to an accepted claim.\r
- ❌ Release of information log\r
> The information log is a tracking system that is used to identify where health information was released and who authorized the release.\r
- ❌ Treatment, payment, and health care operations (TPO)\r
> TPO is an exception to the rule for requiring authorization; all of these actions can be performed without a patient's authorization.\r
\r
## Question 5 of 80\r
A billing and coding specialist is preparing to code an anesthesiologist's portion of a procedure. The specialist must be able to identify the correct start/stop times to code the claim correctly. Which of the following regulates this activity?\r
- ❌ ICD-10-CM Official Guidelines\r
> These guidelines regulate the correct assignment of diagnosis codes.\r
- ❌ Federal Claims Collection Act (FCCA)\r
> The FCCA allows Medicare Administrative Contractors (MAC) to collect claims overpayments from health care providers and beneficiaries.\r
- ✅ CPT guidelines\r
> The CPT anesthesia guidelines determine the time reporting requirements for anesthesia.\r
- ❌ Stark Law\r
> The Stark law prevents providers from self-referring Medicare patients to health care services where the physicians have a financial interest.\r
\r
## Question 6 of 80\r
A billing and coding specialist should identify that which of the following documents assists providers in determining whether there are any outstanding claims?\r
- ❌ Charge description master\r
> A charge description master is a list of procedures, services, and supplies used by hospitals for billing purposes.\r
- ✅ Aging report\r
> An aging report assists providers in determining an outstanding claim. It includes information about claims that are current, 30 days overdue, 60 days overdue, and 90 days overdue.\r
- ❌ Credit report\r
> A credit report is a consumer report of an individual's credit history.\r
- ❌ Preauthorization\r
> A preauthorization is a document from a third-party payer that provides prior approval for reimbursement of services.\r
\r
## Question 7 of 80\r
Which of the following terms describes a patient's right to have their protected health information safeguarded and not disclosed to others without their permission?\r
- ✅ Privacy\r
> Privacy is the idea that a patient has the right to keep their protected health information from being disclosed to unauthorized entities.\r
- ❌ Security\r
> Security refers to the physical actions taken to keep information private, not the right to privacy itself.\r
- ❌ Confidentiality\r
> Confidentiality is the act of restricting patient information, not the right to privacy.\r
- ❌ Authorization\r
> Authorization is the act of giving permission to disclose patient information, not the right to privacy.\r
\r
## Question 8 of 80\r
A billing and coding specialist should identify that a Medicare Recovery Audit Contractor (RAC) can review medical records for which of the following reasons?\r
- ❌ To investigate if a patient was denied Medicare coverage\r
> This is not a responsibility of the Medicare RAC.\r
- ❌ To investigate whether a provider is self-referring for ancillary services\r
> This is not a responsibility of the Medicare RAC.\r
- ✅ To investigate potential improper Medicare payments\r
> The Medicare RAC can review medical records to investigate potential improper Medicare payments, such as overpayments or underpayments.\r
- ❌ To investigate whether a Medicare beneficiary was subject to a HIPAA violation\r
> This is not a responsibility of the Medicare RAC.\r
\r
## Question 9 of 80\r
A billing and coding specialist notices that a provider is reporting the same code for all new patient visits to get higher reimbursements. The specialist should identify this as which of the following?\r
- ✅ Fraud\r
> The specialist should identify that this situation indicates fraud because the provider is intentionally not following guidelines for determining medical necessity and level of service.\r
- ❌ Waste\r
> This situation indicates fraud because the provider is intentionally not following guidelines.\r
- ❌ Abuse\r
> This situation indicates fraud because the provider is intentionally not following guidelines.\r
- ❌ Overpayment\r
> This situation indicates fraud because the provider is intentionally not following guidelines.\r
\r
## Question 10 of 80\r
During which of the following steps of the revenue cycle does effective communication begin?\r
- ❌ Utilization management review\r
> While effective communication is important during all steps of the revenue cycle, it begins during registration and scheduling.\r
- ❌ Health care encounter and documentation\r
> While effective communication is important during all steps of the revenue cycle, it begins during registration and scheduling.\r
- ❌ Billing\r
> While effective communication is important during all steps of the revenue cycle, it begins during registration and scheduling.\r
- ✅ Registration and scheduling\r
> Effective communication starts at the point of service, which is during registration and scheduling.\r
\r
## Question 11 of 80\r
Which of the following is a claim that is possible to adjudicate and includes all required data elements?\r
- ❌ Pending Claim\r
> A pending claim is a claim that is in process and has not been adjudicated.\r
- ✅ Clean claim\r
> A clean claim includes all required data elements to process and reimburse the claim and is paid in full upon submission.\r
- ❌ Delinquent claim\r
> A delinquent claim is a claim that has not been adjudicated.\r
- ❌ Open claim\r
> An open claim is a claim that has gone out to a third-party payer and is currently being adjudicated\r
\r
## Question 12 of 80\r
Which of the following actions by a billing and coding specialist represents a breach of confidentiality?\r
- ❌ Protecting passwords and keeping them in a secured location\r
> Confidentiality standards include protecting passwords from others and does not represent a breach of confidentiality.\r
- ❌ Never leaving the computer screen unattended\r
> Confidentiality standards include never leaving a computer screen unattended, Therefore, this is not a breach of confidentiality.\r
- ✅ Discussing patient information in the elevator where other patients are present\r
> This action violates the confidentiality standards and represents a breach of confidentiality.\r
- ❌ Communicating patient information to family members with the patient's consent\r
> Communicating patient information to family members with the patient's consent is following confidentiality standards and is not a breach of confidentiality.\r
\r
## Question 13 of 80\r
A billing and coding specialist should identify that the Office of Inspector General (OIG) has which of the following roles?\r
- ❌ To investigate disclosure of protected health information\r
> This is not a responsibility of the OIG.\r
- ❌ To evaluate workplace safety standards\r
> This is not a responsibility of the OIG.\r
- ❌ To administer the Patient Protection and Affordable Care Act\r
> This is not a responsibility of the OIG.\r
- ✅ To identify Medicare fraud and abuse\r
> The OIG is responsible for identifying Medicare fraud and abuse, and then sending those cases to the Department of Justice for prosecution.\r
\r
## Question 14 of 80\r
Which of the following is an effective tool for collecting a patient's payment for health care services?\r
- ❌ Eligibitity verification\r
> Eligibility verification helps to determine the patient's financial responsibilty, but it is not an effective tool for collecting the payment.\r
- ✅ Communication\r
> Communicating office policies regarding the patient's financial responsibilities is a key tool for collecting patient's payments.\r
- ❌ Precertification\r
> Precertification is not a tool for collections. It is a utilization management tool to reduce health care costs and ensure medical necessity.\r
- ❌ Copayment\r
> Copayments are a cost share requirement of the third-party payer. They are not a collection tool.\r
\r
## Question 15 of 80\r
A billing and coding specialist is speaking with a patient on the telephone about their plan benefits. Which of the following actions should the specialist take when communicating with the patient?\r
- ❌ Use slang terminology\r
> The specialist should avoid using slang terminology because it can represent a communication barrier.\r
- ✅ Explain the patient financial responsibility\r
> The specialist should explain patient financial responsibility when speaking to the patient over the phone to communicate clearly.\r
- ❌ Demand payment for services\r
> The specialist should ask for payment for services. However, they should avoid demanding payment for services because the patient might form an opinion on how something is said rather than what is said.\r
- ❌ Use specific coding convention terms\r
> The specialist should avoid using specific coding convention terms because health care jargon is likely beyond the patient's knowledge.\r
\r
## Question 16 of 80\r
Which of the followig accurately describes the uses of HCPCS Level II codes?\r
- ❌ Pathology\r
> HCPCS Level II codes are used to report drugs administered in the outpatient environment, not pathology.\r
- ✅ Drugs\r
> HCPCS Level II codes are used to report drugs administered in the outpatient environment.\r
- ❌ Toxoids\r
> HCPCS Level II codes are used to report drugs administered in the outpatient environment, not toxoids.\r
- ❌ Conscious sedation\r
> HCPCS Level II codes are used to report drugs administered in the outpatient environment, not conscious sedation.\r
\r
## Question 17 of 80\r
A billing and coding specialist is completing a claim for a new patient who reports swelling in their ankles. The provider performs an appropriate history and examination, with high complexity medical decision-making, spending 60 min with the patient. Which of the following Evaluation and Management (E/M) codes should the specialist select?\r
- ❌ 99285 Emergency department visit of a patient which requires a medically appropriate history and/or examination and high medical decision-making\r
> E/M code 99285 describes emergency department services, including a high complexity of medical decision-making.\r
- ✅ 99205 Office or other outpatient visit for a new patient which requires a medically appropriate history and/or examination and high medical decision-making\r
> The specialist should select E/M code 99205. This code describes new patient E/M services, including a reported time spent with the patient of at least 60 min.\r
- ❌ 99214 Office or other outpatient visit for an established patient which requires a medically appropriate history and/or examination and moderate medical decision-making\r
> E/M code 99214 describes an established patient E/M service, including a reported time spent with the patient between 30 to 39 min.\r
- ❌ 99215 Office or other outpatient visit for an established patient which requires a medically appropriate history and/or examination and high medical decision-making\r
> E/M code 99215 describes an established patient E/M service, including a reported time spent with the patient between 40 to 54 min.\r
\r
## Question 18 of 80\r
Complete the following question by referencing the coding exhibit.\r
A billing and coding specialist should use which of the following CPT® procedure code(s) to report a screening CT colonography?\r
### CPT® Code Set\r
| Code  | Description                                                                                                                                          |\r
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| 74150 | Computed tomography, abdomen, without contrast material                                                                                              |\r
| 74261 | Computed tomographic colonography, diagnostic, including image postprocessing; without contrast material                                             |\r
| 74262 | Computed tomographic colonography, diagnostic, including image postprocessing; with contrast material(s) including non-contrast Images, if performed |\r
| 74263 | Computed tomographic colonography, screening, including image postprocessing                                                                         |\r
- ❌ 74150, 74263\r
> CPT® code 74150 identifies computed tomography, abdamen, without contrast material. CPT® code 74262 identiias computed tomographic calonegraphy, screening, including image postprocessing. This description does not match the procedural documentation.\r
- ❌ 74261\r
> CPT® code 74261 identifies computed tomographic colonography, diagnasti, including image postprocessing without contrast material. This description does not match the procedural documentation\r
- ✅ 74263\r
> CPT® code 74263 identifies computed tomographic colonography, screening. including image postprocessing. This description matches the procedural documentation ofthe purpose ofthe test fora screening.\r
- ❌ 74262\r
> CPT® code 74262 identifies computed tomography, abdamen, with contrast material, incluing non-contrast images if performed. This description does not match the procedural documentation\r
\r
## Question 19 of 80\r
Complete the following question by referencing the coding exhibit.\r
Which of the following HCPCS modifiers indicates the anatomical location of left hand, fifth digit?\r
| Modifier | Description             |\r
|----------|-------------------------|\r
| -FA      | Left hand, thumb        |\r
| -F2      | Left hand, third digit  |\r
| -F4      | Left hand, fifth digit  |\r
| -F9      | Right hand, fifth digit |\r
- ❌ F2\r
> HCPCS modifier F2 indicates the anatomical location of left hand, third digit.\r
- ❌ F9\r
> HCPCS modifier F9 indicates the anatomical location of right hand, fifth digit.\r
- ❌ FA\r
> HCPCS modifier FA indicates the anatomical location of left hand, thumb.\r
- ✅ F4\r
> HCPCS modifier F4 indicates the anatomical location of left hand, fifth digit.\r
\r
## Question 20 of 80\r
A billing and coding specialist is coding an initial encounter with a provider. Which of the following ICD-10-CM codes should be used to report a right femur fracture?\r
- ❌ S72.001 Fracture of unspecified part of neck of right femur\r
> A 7th character is required to report the code to the highest level of specificity and "A" in ICD-10-CM Chapter 19 indicates an initial encounter for a closed fracture.\r
- ❌ S72.002A Fracture of unspecified part of neck of left femur, initial encounter for closed fracture\r
> This code reports an initial encounter for a closed left femur fracture, not a closed right femur fracture.\r
- ✅ S72.001A Fracture of unspecified part of neck of right femur, initial encounter for closed fracture\r
> This code reports an initial encounter for a closed right femur fracture, Per ICD-10-CM coding guidelines, if a fracture is not reported as open or closed the default code should be reported as dosed.\r
- ❌ S72.001B Fracture of unspecified part of neck of right femur, initial encounter for open fracture type I or II\r
> This code reports an initial encounter for an open right femur fracture. Per ICD-10-CM coding guidelines, if fracture is not reported as open or closed, the default code should be reported as closed.\r
\r
## Question 21 of 80\r
Which of the following abbreviations describes the route in which a medication is introduced into the subdural space of the spinal cord?\r
- ❌ IM\r
> The abbreviation IM represents a medication that is introduced intramuscularly, or directly into a muscle.\r
- ❌ SC\r
> The abbreviation SC represents a medication that is introduced subcutaneously, or just under the skin.\r
- ❌ INH\r
> The abbreviation INH represents a medication that is introduced by administration of an inhaled solution.\r
- ✅ IT\r
> The abbreviation IT represents a medication that is introduced intrathecally, or into the subdural space of the spinal cord.\r
\r
## Question 22 of 80\r
Which of the following CPT® modifiers indicates only the interpretation and report of a radiology service was provided?\r
- ✅ 26 Professional component\r
> CPT® modifier 26 indicates only the professional component of a radiology service was provided.\r
- ❌ 25 Significant, separately identifiable evaluation and management service by the same physician or other qualified health care professional on the same day of the procedure or other service\r
> CPT® modifier 25 indicates a significant, separately identifiable Evaluation and Management (E/M) service was performed by the same provider on the same day as a procedure or other service was performed.\r
- ❌ 24 Unrelated evaluation and management service by the same physician or other qualified health care professional during a postoperative period\r
> CPT® modifier 24 indicates an Evaluation and Management (E/M) service was performed by the same provider during a postoperative period that is unrelated to the recovery from the surgical procedure.\r
- ❌ 22 Increased procedural services\r
> CPT® modifier 22 indicates the service provided involved more work from the provider than is usually required for the service reported.\r
\r
## Question 23 of 80\r
Which of the following Evaluation and Management (E/M) codes is used to report online communication with an established patient lasting 15 min?\r
- ❌ 99442 Telephone evaluation and management service provided by a physician to an established patient: 11-20 minutes of medical discussion\r
> E/M code 99442 describes telephonic services. This service does not meet the requirements of online digital face-to-face evaluation regulations for telehealth services. This code is for 11 to 20 min telephonic services.\r
- ❌ 99421 Online digital evaluation and management service, for an established patient, for up to 7 days, cumulative time during the 7 days: 5-10 minutes\r
> E/M code 99421 meets the requirements of online digital face-to-face evaluation for an established patient; however, the total time recorded exceeds the listed time of 5 to 10 min.\r
- ✅ 99422 Online digital evaluation and management service, for an established patient, for up to 7 days cumulative time during the 7 days: 11-20 minutes\r
> E/M code 99422 meets the requirements of online digital face-to-face evaluation for an established patient, and the total time recorded is within the listed time of 11 to 20 min.\r
- ❌ 99423 Online digital evaluation and management service, for an established patient, for up to 7 days, cumulative time during the 7 days: 21 or more minutes\r
> E/M code 99423 meets the requirements of online digital face-to-face evaluation for an established patient; however, the listed time of 21 min or more exceeds the total time recorded.\r
\r
## Question 24 of 80\r
A provider orders a bedside commode without further details. The supply company has multiple types available, so their billing specialist queries the provider. The provider sends a new order for an extra wide, heavy-duty commode chair. Which of the following HCPCS codes should the specialist use?\r
- ❌ E0163 Commode chair, mobile or stationary, with fixed arms\r
> This code describes a commode chair with fixed arms but is not extra wide or heavy duty.\r
- ❌ E0165 Commode chair with detachable arms\r
> ✅ This code describes a commode chair with detachable arms but is not extra wide or heavy duty.\r
- E0168 Extra wide/heave duty commode chairs\r
> This code describes a commode chair that is extra wide and/or heavy duty. Therefore, this fits the requirement from the provider.\r
- ❌ E0171 Commode with seat lift mechanism\r
> This code describes a commode chair that comes with an integrated seat lift mechanism, which was not a requirement from the provider.\r
\r
## Question 25 of 80\r
A patient is diagnosed with exudative otitis media. Which of the following is the anatomic location of this condition?\r
- ✅ Middle ear\r
> The condition of exudative otitis media is located the middle ear.\r
- ❌ Inner ear\r
> The condition of exudative otitis media is located in the middle ear; the inner ear would be otitis interna.\r
- ❌ Outer ear\r
> The condition of exudative otitis media is located in the middle ear; the outer ear would be otitis externa.\r
- ❌ Eustachian tube\r
> The condition of exudative otitis media is located in the middle ear; the eustachian tube is located in the inner ear.\r
\r
## Question 26 of 80\r
A billing and coding specialist is processing a claim for a patient who has hypoglycemia. In the term hypoglycemia, the prefix _hypo-_ means which of\r
the following?\r
- ✅ Below\r
> The prefixes hypo- and sub- mean below.\r
- ❌ Above\r
> The prefixes hyper- and epi- mean above.\r
- ❌ Between\r
> The prefix inter- means between.\r
- ❌ Excessive\r
> The prefixes hyper- and poly- mean excessive.\r
\r
## Question 27 of 80\r
Which of the following is the Evaluation and Management (E/M) code used to report a worsening patient who was admitted yesterday, with straightforward medical decision-making?\r
\r
- ❌ 99234 Hospital inpatient or observation care including admission and discharge on the same date, which requires a medically appropriate history and/or examination and straightforward or low level of medical decision-making\r
> E/M code 99234 describes hospital inpatient or observation care when the patient is admitted and discharged on the same date of service.\r
- ❌ 99238 Hospital inpatient or observation discharge day management\r
> E/M code 99238 describes hospital inpatient or observation discharge day management services.\r
- ❌ 99221 Initial hospital inpatient or observation care, pet day. which requires a medically appropriate history and/or examination and straightforward or low level of medical decision-making\r
> E/M code 99221 describes initial hospital inpatient or observation care with straightforward medical decision-making.\r
- ✅ 99231 Subsequent hospital inpatient or observation care, per day. which requires a medically appropriate history and/or examination and straightforward or low level of medical decision-making\r
> E/M code 99231 describes subsequent hospital inpatient or observation care with straightforward medical decision-making.\r
\r
## Question 28 of 80\r
A billing and coding specialist is preparing a claim for a patient who has chronic tonsilitis. According to the suffix _-itis_, which of the following is occurring with the tonsils?\r
- ❌ Abnormal condition\r
> Abnormal condition is indicated by the suffix _-osis_.\r
- ✅ Inflammamation\r
> Inflammation is indicated by the suffix _-itis_.\r
- ❌ Enlargement\r
> Enlargement is indicated by the suffix _-megaly_.\r
- ❌ Pain\r
> Pain is indicated by the suffix _-algia_ or _-dynia_.\r
\r
## Question 29 of 80\r
Complete the following question by referencing the coding exhibit.\r
Which of the following Is the correct CPT® code for reporting a superficial repair using tissue adhesive of a 2 cm laceration of the scalp?\r
### CPT® Code Set\r
| Code  | Description                                                                                                                                               |\r
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| 12001 | Simple (single layer) repair of wounds of scalp, neck, axillae, external genitalla, trunk, and/or extremities (including hands and feet); 2.5 cm or lesss |\r
| 12031 | Repair, intermediate (layered closure) wounds of scalp, axillae, trunk, and/or extremities (Including hands and feet); 2.5 cm or less                     |\r
| 12051 | Repair, intermediate (layered closure) wounds of face, ears, eyelids, nose, lips, and/or mucous membranes; 2.5 cm or less                                 |\r
| 13120 | Repair, complex (layered closure requiring additional corrections) scalp, arms, and/or legs; 1.1 cm to 2.5 cm                                             |\r
- ✅ 12001\r
> CPT® code 12001 identifes a simple repair of superficial wounds ofthe scalp measuring 25 cm or less. This description matches the procedural documentation of the site of closure asthe scalp and the size of 2 cm.\r
- ❌ 12031\r
> CPT® code 12031 identifies an intermediate repair of wounds of the scalp measuring 2.5 cm or les. This description does not match the procedural documentation.\r
- ❌ 12051\r
> CPT® code 12051 identifies an intermaciate repsir of wounds ofthe face meaturing 2.5 cm or less. This description does nat match the procedural documentation.\r
- ❌ 13120\r
> CPT® code 13120 identifies @ complex repair of wounds of the scalp measuring 1.1 cm to 25 cm. This description does not match the procedural documentation\r
\r
## Question 30 of 80\r
Complete the following question by referencing the coding exhibit.\r
A CRNA provides anesthesia services for a cholecystectomy procedure. Which of the following modifiers should be appended to the service code?\r
| Modifier | Description                                                                            |\r
|----------|----------------------------------------------------------------------------------------|\r
| -23      | Unusual anesthesia                                                                     |\r
| -AA      | Anesthesia Services performed personally by the anesthesiologist                       |\r
| -QX      | Qualified non-physician anesthetist with medical direction by a physician              |\r
| -QZ      | Certified registered nurse anesthetist (CRNA) without medical direction by a physician |\r
- ❌ AA\r
> HCPCS modifier AA indicates anesthesia services performed personally by an anesthesiologist.\r
- ❌ 23\r
> HCPCS modifier 23 indicates unusual anesthesia.\r
- ❌ QX\r
> HCPCS modifier QX indicates a CRNA service, with medical direction by a provider.\r
- ✅ QZ\r
> HCPCS modifier QZ indicates a CRNA service, without medical direction by a provider.\r
\r
## Question 31 of 80\r
Which of the following ICD-10-CM codes should a billing and coding specialist use for an encounter for human immunodeficiency virus (HIV) testing?\r
- ❌ Z11.3 Encounter for screening for infections with a predominantly sexual mode of transmission\r
> The ICD-10-CM code Z11.3 identifies an encounter for screening for infections with a predominantly sexual mode of transmission. The Excludes2 note states Z11.4 is for HIV testing.\r
- ✅ Z11.4 Encounter for screening for human immunodeficiency virus (HIV)\r
> The ICD-10-CM code Z11.4 identifies an encounter for screening for HIV.\r
- ❌ Z11.51 Encounter for screening for human papillomavirus (HPV)\r
> The ICD-10-CM code Z11.51 identifies an encounter for screening for human papillomavirus.\r
- ❌ Z71.7 Human immunodeficiency virus (HIV) counseling\r
> The ICD-10-CM code Z71.7 identifies HIV counseling.\r
\r
## Question 32 of 80\r
Which of the following types of ICD-10-CM codes require the use of 7th character extensions?\r
- ✅ Traumatic fracture codes\r
> Traumatic fracture codes require the use of 7th character extensions.\r
- ❌ Personal history codes\r
> Personal history codes do not require the use of 7th character extensions.\r
- ❌ Pregnancy complication codes\r
> Pregnancy complication codes do not require the use of 7th character extensions.\r
- ❌ Dialysis status codes\r
> Dialysis status codes do not require the use of 7th character extensions.\r
\r
## Question 33 of 80\r
Complete the following question by referencing the coding exhibit.\r
A child received a measles, mumps, rubella, and varicella (MMRV) vaccine with provider counseling. Which of the following CPT® codes should be reported for the vaccine and administration?\r
### ICD-10-CM Code Set\r
| Code  | Description                                                                                                                                                                       |\r
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| 90460 | Immunization administration through 18 years of age via any route of administration, with counseling by physician; first or only component of each vaccine or toxoid administered |\r
| 90461 | each additional vaccine or toxoid administered                                                                                                                                    |\r
| 90471 | Immunization administration (Includes percutaneous, intradermal, subcutaneous, or Intramuscular); one vaccine (single or combination vaccine/toxoid)                              |\r
| 90472 | each additional vaccine (single or combination vaccine/toxoid)                                                                                                                    |\r
| 90707 | Measles, mumps, and rubella virus vaccine (MMR), live, for subcutaneous use                                                                                                       |\r
| 90710 | Measles, mumps, rubella, and varicella vaccine (MMRV), live, for subcutaneous use                                                                                                 |\r
| 90716 | Varicella virus vaccine (VAR), live, for subcutaneous use                                                                                                                         |\r
- ❌ 90707, 90716, 90471, 90472 x 3\r
> CPT® code 90707 indicates the measles, mumps, and rubella (MMR) vaccine and code 90716 identifies the varicella virus vaccine (VAR). Since a combination code (90710 MMRV) exists, it must be used when performed. Administration codes 90471 and 90472 report administration without counseling.\r
- ❌ 90707, 90716, 90460, 90461 x 3\r
> CPT® code 90707 indicates the measles, mumps, and rubella (MMR) vaccine and code 90716 identifies the varicella virus vaccine (VAR). Since a combination code (90710 MMRV) exists, it must be used when performed. Since there are four separate components in MMRY, code 90460 is used with code 90461 x 3 to report the administration and counseling.\r
- ❌ 90710, 90460\r
> Although MMRV is one vaccine, there are four separate components, and code 90460 is used with code 90461 x 3 to report the administration and counseling.\r
- ✅ 90710, 90460, 90461 x 3\r
> CPT® code 90710 indicates the measles, mumps, rubella, and varicella (MMRV) vaccine, which are used with an administration and counseling code for the injection service. Since there are multiple components to MMRV, code 90460 is reported for the first component and 90461 x 3 for the remaining components.\r
\r
## Question 34 of 80\r
Which of the following ICD-10-CM codes indicates chronic cholecystitis with cholelithiasis without obstruction?\r
- ❌ K80.00 Calculus of gallbladder with acute cholecystitis without obstruction\r
> The ICD-10-CM code K80.00 identifies calculus of the gallbladder with acute cholecystitis, not chronic cholecystitis.\r
- ✅ K80.10 Calculus of gallbladder with chronic cholecystitis without obstruction\r
> The ICD-10-CM code K80.10 identifies calculus of the gallbladder with chronic cholecystitis without obstruction.\r
- ❌ K80.20 Calculus of gallbladder without cholecystitis without obstruction\r
> The ICD-10-CM code K80.20 identifies calculus of the gallbladder without cholecystitis, not with cholecystitis.\r
- ❌ K80.31 Calculus of bile duct with cholangitis, unspecified, with obstruction\r
>  The ICD-10-CM code K80.31 identifies calculus of the bile duct with cholangitis, unspecified with obstruction.\r
\r
## Question 35 of 80\r
Complete the following question by referencing the coding exhibit.\r
A billing and coding specialist is coding a patient's visit with a provider. After querying the provider, the diagnosis is confirmed to be type 1 diabetes mellitus with hyperglycemia. Which of the following codes should the specialist use for this condition?\r
### ICD-10-CM Code Set\r
| Code   | Description                                    |\r
|--------|------------------------------------------------|\r
| E10.65 | Type 1 diabetes mellitus with hyperglycemia    |\r
| E10.9  | Type 1 diabetes mellitus without complications |\r
| E11.65 | Type 2 diabetes mellitus with hyperglycemia    |\r
| E11.9  | Type 2 diabetes mellitus without complications |\r
| R73.9  | Hyperglycemia, unspecified                     |\r
- ❌ E10.9, R73.9\r
> Code E10.9 reports type 1 diabetes mellitus without complications and code R73.9 reports hyperglycemia with a category note that excludes it from being reported with diabetes codes (E08-E13).\r
- ❌ E11.9\r
> Code E11.9 reports type 2, or unspecified diabetes mellitus, without complications.\r
- ✅ E10.65\r
> E10.65 reports type 1 diabetes mellitus with hyperglycemia.\r
- ❌ E11.65\r
> Code E11.65 reports type 2, not type 1, diabetes mellitus with hyperglycemia.\r
\r
## Question 36 of 80\r
Which of the following categories in the ICD-10-CM is used to report a routine prenatal visit with no complications?\r
- ❌ Z00 Encounter for general examination without complaint, suspected or reported diagnosis\r
> Category Z00 is used to report regular examination encounters without complications.\r
- ✅ Z34 Encounter for supervision of normal pregnancy\r
> Category Z34 is used to report encounters for supervision of a normal pregnancy.\r
- ❌ O09 Supervision of high-risk pregnancy\r
> Category O09 is used to report encounters for supervision of a high-risk pregnancy.\r
- ❌ O80 Encounter for full-term uncomplicated delivery\r
> Category 080 is used to report encounters for a full-term, uncomplicated delivery.\r
\r
## Question 37 of 80\r
Complete the following question by referencing the coding exhibit.\r
A billing and coding specialist is coding a claim for a surgery. After querying the provider, it is determined that the documentation supports an open-approach hysterectomy with colpo-urethrocystopexy. Which of the following CPT® codes should be reported?\r
### CPT® Code Set\r
| Code  | Description                                                                                                                                            |\r
|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| 58150 | Total abdominal hysterectomy (corpus and cervix), with or without removal of tube(s), with or without removal of ovary(s)                              |\r
| 58152 | Total abdominal hysterectomy (corpus and cervix), with or without removal of tube(s), with or without removal of ovary(s), with colpo-urethrocystopexy |\r
| 58260 | Vaginal hysterectomy, for uterus 250 g or less                                                                                                         |\r
| 58267 | Vaginal hysterectomy, for uterus 250 g or less, with removal of tube(s) and/or ovary(s)                                                                |\r
- ✅ 58152\r
> This code describes an abdominal hysterectomy with the colpo-urthracystopexy.\r
- ❌ 58150\r
> This code describes an abdominal hysterectomy without the colpo-urthrocystopexy.\r
- ❌ 58260\r
> This code describes a vaginal hysterectomy for a uterus of 250 g or less.\r
- ❌ 58267\r
> This code describes a vaginal hysterectomy with colpo-urethrocystopexy.\r
\r
## Question 38 of 80\r
Complete the following question by referencing the coding exhibit.\r
Which of the following CPT® modifiers indicates the same provider returns to the operating room for surgical treatment of a complication that resulted from the initial procedure?\r
| Modifier | Description                                                                                                                                                                                            |\r
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\r
| -76      | Repeat procedure by the same physician or other qualified health care professional                                                                                                                     |\r
| -77      | Repeat procedure by another physician or other qualified health care professional                                                                                                                      |\r
| -78      | Unplanned return to the operating/procedure room by the same physician or other qualified health care professional following initial procedure for a related procedure during the postoperative period |\r
| -79      | Unrelated procedure or service by the same physician or other qualified health care professional during the postoperative period                                                                       |\r
- ❌ 76\r
> CPT® modifier 76 indicates a repeated procedure by the same provider that performed the initial procedure.\r
- ❌ 77\r
> CPT® modifier 77 indicates a repeated procedure by a provider other than the provider who performed the initial procedure.\r
- ✅ 78\r
> CPT® modifier 78 indicates an unplanned return to the operating room by the same provider following the initial procedure for a related procedure during the postoperative period.\r
- ❌ 79\r
> CPT® modifier 79 indicates an unrelated procedure by the same provider during the postoperative period.\r
\r
## Question 39 of 80\r
Complete the following question by referencing the coding exhibit.\r
A patient presents to their provider's office with a sore throat, and the provider diagnoses acute and chronic tonsillitis. Which of the following ICD-10-CM codes should the billing and coding specialist use for this diagnosis?\r
### ICD-10-CM Code Set\r
| Code   | Description                    |\r
|--------|--------------------------------|\r
| J02.9  | Acute pharyngitis, unspecified |\r
| J03.90 | Acute tonsillitis, unspecified |\r
| J31.2  | Chronic pharyngitis            |\r
| J35.01 | Chronic tonsillitis            |\r
- ❌ J02.9, J31.2\r
> The ICD-10-CM code J02.9 identifies acute pharyngitis, sore throat. The ICD-10-CM code J31.2 identifies chronic pharyngitis, sore throat. Since sore throat is a symptom of tonsilltis, the sore throat diagnoses are not reported.\r
- ❌ J35.01, J31.2, J35.01, J03.90\r
> The ICD-10-CM code J02.9 identifies chronic pharyngitis, which is a symptom of tonsilitis and is not separately reported with the chronic and acute tonsillitis codes.\r
- ❌ J35.01, J03.90\r
> The ICD-10-CM code J35.01 identifies chronic tonsilltis and J03.90 identifies acute tonsillitis. When both acute and chronic exist, the specialist should code acute first. Both codes are required for a complete diagnosis.\r
- ✅ J03.90, J35.01\r
> The ICD-10-CM code J03.90 identifies acute tonsillitis and J35.01 identifies chronic tonsillitis. When both acute and chronic exist, the specialist should code acute first. Both codes are required for a complete diagnosis.\r
\r
## Question 40 of 80\r
Which of the following Evaluation and Management (E/M) codes is used to report services for a 40-year-old patient who returns to the office for an annual exam?\r
- ❌ 99386 Initial comprehensive preventive medicine evaluation and management of an individual including an age and gender appropriate history, examination, counseling/anticipatory guidance/risk factor reduction interventions, and the ordering of laboratory/diagnostic procedures, new patient: 40-64 years\r
> E/M code 99386 describes comprehensive preventative services for a new patient between the ages of 40 and 64 years.\r
- ✅ 99396 Periodic comprehensive preventive medicine evaluation and management of an individual including an age and gender appropriate history, examination, counseling/anticipatory guidance/risk factor reduction interventions, and the ordering of laboratory/diagnostic procedures, established patient; 40-64 years\r
> E/M code 99396 describes comprehensive preventative services for an established patient between the ages of 40 and 64 years.\r
- ❌ 99215 Office or other outpatient visit for an established patient which requires a medically appropriate history and/or examination and high medical decision-making\r
> E/M code 99215 describes a comprehensive office visit for an established patient.\r
- ❌ 99205 Office or other outpatient visit for a new patient which requires a medically appropriate history and/or examination and high medical decision-making\r
> E/M code 99205 describes a comprehensive office visit for a new patient.\r
\r
## Question 41 of 80\r
A minor patient, whose parents are married, is covered under both parents' group insurance plans and also has Medicaid benefits. Parent A has a birthdate of June 6, 1988 and parent B has a birthdate of October 23, 1987. Which of the following third-party payers should be billed as the primary?\r
- ✅ Parent A's insurance\r
> According to the birthday rule, which states the parent whose birthday comes first in the calendar year is the primary, parent A's insurance would be billed as the primary.\r
- ❌ Parent B's insurance\r
> According to the birthday rule, which states the parent whose birthday comes first in the calendar year is the primary, parent A's insurance would be billed as the primary.\r
- ❌ Medicaid\r
> Medicaid should not be billed as the primary because the minor patient has other insurance coverage. Medicaid is always the last resort payer.\r
- ❌ Either parent A's or parent B's insurance\r
> According to the birthday rule, which states the parent whose birthday comes first in the calendar year is the primary, parent A's insurance would be billed as the primary.\r
\r
## Question 42 of 80\r
A billing and coding specialist is reviewing a patient's record. The specialist should recognize that which of the following should be signed by the patient if there is a concern that Medicare might not pay for the service?\r
- ❌ Informed consent form\r
> An informed consent form gives permission to treat the patient.\r
- ❌ Patient referral authorization form\r
> A patient referral authorization form is used for patients who have TRICARE and require authorization to receive care from a specialist.\r
- ✅ Advanced Beneficiary Notice (ABN)\r
> The ABN form informs the patient of services that might not be covered under Medicare.\r
- ❌ Notice of Privacy Practices (NPP)\r
> The NPP informs the patient on how their personal information will be used and protected.\r
\r
## Question 43 of 80\r
Which of the following determines the primary payer when a patient is covered by more than one plan?\r
- ❌ Utilization review\r
> Utilization review does not determine coordination of benefits.\r
- ❌ Prior authorization\r
> Prior authorization does not determine coordination of benefits.\r
- ❌ Explanation of benefits\r
> Explanation of benefits does not determine coordination of benefits.\r
- ✅ Coordination of benefits\r
> The concept of coordination of benefits determines the primary payer when a patient is covered by more than one plan.\r
\r
## Question 44 of 80\r
A billing and coding specialist is reviewing insurance eligibility for a 49-year-old patient who has end-stage renal disease and multiple third-party payers. The specialist should recognize that which of the following payers is the primary?\r
- ❌ Workers' compensation\r
> A patient who is under the age of 65 years old and has a qualifying disability or end-stage renal disease is eligible for primary coverage through Medicare even though they have not met the usual starting age of 65. Workers' compensation would not be appropriate for end-stage renal disease.\r
- ✅ Medicare\r
> A patient who is under the age of 65 years old and has a qualifying disability or end-stage renal disease is eligible for primary coverage through Medicare even though they have not met the usual starting age of 65.\r
- ❌ Medicaid\r
> A patient who is under the age of 65 years old and has a qualifying disability or end-stage renal disease is eligible for primary coverage through Medicare even though they have not met the usual starting age of 65. They are not eligible for coverage through Medicaid solely based on their diagnosis.\r
- ❌ TRICARE\r
> A patient who is under the age of 65 years old and has a qualifying disability or end-stage renal disease is eligible for primary coverage through Medicare even though they have not met the usual starting age of 65.They are not eligible for coverage through TRICARE solely due to their diagnosis, TRICARE is intended for members of the military and their family.\r
\r
## Question 45 of 80\r
A billing and coding specialist is calculating a patient's financial responsibility for a procedure. The charge for the procedure is $1,400 and the provider is in the patient's insurance provider's network. The allowable amount for the procedure is $500 with no deductible required. If the insurance plan pays at 80/20, what is the patient's total coinsurance amount?\r
- ✅ $100\r
> For a patient who has an 80/20 insurance plan, the patient will pay a coinsurance of 20% of the allowable amount. This is calculated as follows: $500 x 20% (0.20) = $100. Therefore, the patient's coinsurance is $100 for an 80/20 plan.\r
- ❌ $280\r
> This amount is equal to 20% of the total charge, which is incorrect. The patient's copayment is 20% of the allowable charge in an 80/20 plan.\r
- ❌ $400\r
> This amount is equal to 80% of allowable charge, which is incorrect. The patient's copayment is 20% of the allowable charge in an 80/20 plan.\r
- ❌ $500\r
> This amount is equal to the total allowable amount for the procedure, which is incorrect. The patient's copayment is 20% of the allowable charge in an 80/20 plan.\r
\r
## Question 46 of 80\r
A billing and coding specialist is reviewing a patient's insurance coverage and notices that the patient is covered by two group insurance plans: one through their own employer and one through their partner's employer. The specialist should recognize that which of the following is true regarding the client's primary insurance coverage?\r
- ❌ Primary coverage is determined by the birthday rule.\r
> The patient's own plan will be primary for coverage. The birthday rule is only used when determining coverage for dependent children.\r
- ❌ Primary coverage is determined by the plan that has been in place the longest.\r
> The insurance plan of the patient's partner will be the secondary insurance coverage, not the primary.\r
- ✅ Primary coverage is provided through the patient's plan.\r
> The patient's own plan is primary while the patient's partner's plan is secondary.\r
- ❌ Primary coverage is provided through the plan with the lowest deductible\r
> The patient's own plan is primary while the patient's partners plan is secondary. The amount of the deductible does not determine primary and secondary coverage for the patient.\r
\r
## Question 47 of 80\r
A billing and coding specialist is preparing the registration for a patient who is covered under their spouse's insurance. Which of the following items is required to complete the registration?\r
- ✅ Patient demographics\r
> Patient demographics are required and obtained during the registration process.\r
- ❌ Credit card\r
> A credit card is not collected during registration. However, it may be used to pay the patient financial responsibility.\r
- ❌ Spouse's social security card\r
> The spouse's social security card is not used for patient registration.\r
- ❌ Work history\r
> Work history is not relevant information for registration. However, current employer information would be requested.\r
\r
## Question 48 of 80\r
A patient fell and was injured while picking up a catering order during their break for an all-employee staff meeting. Which of the following third-party payers is responsible for this encounter?\r
- ❌ Auto insurance\r
> Auto insurance covers a motor-vehicle crash.\r
- ✅ Workers' compensation\r
> Workers' compensation covers an employee who is injured or becomes ill on the job.\r
- ❌ Homeowners insurance\r
> Homeowners insurance covers accidents on personal property.\r
- ❌ Group health plan\r
> The patient's group health plan will not cover expenses related to a work-related injury when workers' compensation is liable.\r
\r
## Question 49 of 80\r
A billing and coding specialist is submitting a claim for a patient who experienced an injury from a fall during their lunch break away from the building. The specialist should recognize that which of the following is the correct primary payer for the claim?\r
- ❌ Workers' compensation\r
> Workers' compensation is used for submitting claims that involve injuries during the performance of work-related tasks.\r
- ❌ Out-of-pocket patient payment\r
> An out-of-pocket patient payment would not cover this claim.\r
- ❌ Disability insurance\r
> Disability insurance is reimbursement for income that has been lost due to temporary or permanent illness or injury. Disability insurance does not pay for health care services, but provides financial assistance for loss of income.\r
- ✅ The patient's group health insurance\r
> The patient's group health insurance would be the primary payer for a claim for an illness or injury of a patient.\r
\r
## Question 50 of 80\r
A billing and coding specialist is preparing a claim for a 16-year-old patient. Which of the following should be contacted to verify the child's demographics?\r
- ❌ The child's school\r
> The child's school would not be legally required to release that information.\r
- ✅ Policyholder\r
> A policyholder is a person who has entered into a contract with an insurance plan and would be the appropriate contact for a patient who is a minor.\r
- ❌ Third-party payer\r
> A third party payer is an organization that offers the policy and provides benefit coverage, they would not verify patient demographic information.\r
- ❌ Patient\r
> A patient is the person who received health care services, and in this case is a minor. The policyholder is the appropriate contact to verify this patient's demographics.\r
\r
## Question 51 of 80\r
A patient who has Medicare coverage requests a pain medication refill following hip replacement surgery. For which of the following parts of Medicare should the patient's eligibility be verified for the prescription?\r
- ❌ Part A\r
> Medicare Part A pays for inpatient services\r
- ❌ Part B\r
> Medicare Part B pays for professional and outpatient services.\r
- ❌ Part C\r
> Medicare Part C is a managed care plan.\r
- ✅ Part D\r
> Medicare Part D pays for prescription medications.\r
\r
## Question 52 of 80\r
A patient is scheduled for a procedure with an allowed amount of $2,500, and the annual deductible of $700 has been met. The coinsurance agreement is 70/30. Which of the following is the patient's responsibility?\r
- ❌ $2,500\r
> This is the total allowed amount of the procedure. The patient's responsibility is 30% of this amount.\r
- ❌ $1,450\r
> This amount includes the deductible and the patient's 20% coinsurance. The annual deductible amount has already been met so it should not be included in the calculation.\r
- ❌ $1,750\r
> This amount is 70% of the allowed amount. The third-party payer will pay this amount since the deductible has been met.\r
- ✅ $750\r
> The patient's deductible has been met; therefore, $2,500 x 30% (0.30) = $750. The patient's responsibility is $750.\r
\r
## Question 53 of 80\r
Which of the following parts of Medicare determines eligibility for dental services?\r
- ❌ Part A\r
> Medicare Part A covers inpatient hospital services.\r
- ❌ Part B\r
> Medicare Part B covers outpatient and professional services.\r
- ✅ Part C\r
> Medicare Part C, also known as the Medicare Advantage Plan, covers Part A, Part B, and additional services, such as vision and dental services.\r
- ❌ Part D\r
> Medicare Part D covers pharmacy benefits.\r
\r
## Question 54 of 80\r
A patient completes their provider's office registration forms and provides a military ID with a TRICARE card. The billing and coding specialist should use which of the following to verify the patient's third-party payer eligibility?\r
- ❌ Eletronic Data Interchange (EDI)\r
> The EDI is an insurance eligibility process for Medicare beneficiaries.\r
- ❌ The Prospective Payment System (PPS)\r
> The PPS is the predetermined amount the provider will be reimbursed for services rendered.\r
- ✅ The Defense Enrollment Reporting System (DEERS)\r
> DEERS is the insurance eligibility reporting system for service members and their families.\r
- ❌ Integrated Delivery System (IDS)\r
> IDS is a network of providers and hospital organizations that provide medical services to patients.\r
\r
## Question 55 of 80\r
A billing and coding specialist is speaking with a patient on the phone regarding the fixed amount due for an upcoming visit. Which of the following terms refers to a fixed payment due per visit?\r
- ✅ Copayment\r
> Copayment is a fixed amount the patient pays to receive services.\r
- ❌ Premium\r
> The patient's premium is the monthly payment made to receive coverage under the health care policy.\r
- ❌ Dedictible\r
> The patient's deductible is the annual amount paid before a third-party payer will provide reimbursement.\r
- ❌ Coinsurance\r
> Coinsurance is the percentage agreement between the third-party payer and the patient. For example, the third-party payer pays 80% while the patient is responsible for 20%.\r
\r
## Question 56 of 80\r
Which of the following information is needed to accurately review, evaluate, and resolve denied claims?\r
- ❌ An aging report breakdown of a patient's account\r
> An aging report breakdown of a patient's account will only show patient balances or payer balances. It will not show denial reason codes.\r
- ✅ A remittance advice with reason codes\r
> The remittance advice from the third-party payer shows the allowed amount, adjustments, or reason for denial.\r
- ❌ Registration notes\r
> The registration notes may pertain to the patient, but they would not include any reason denial codes.\r
- ❌ SOAP notes\r
> SOAP notes are the provider's notes pertaining to the patient encounter.\r
\r
## Question 57 of 80\r
After a claim is processed by a third-party payer, which of the following actions should a billing and coding specialist take to collect the remaining allowed amount?\r
- ❌ Write off the remainining balance.\r
> The ledger cannot be balanced without making all collection efforts.\r
- ❌ Submit an adjustment for additional reimbursement.\r
> An adjustment would not be submitted to collect patient financial responsibility.\r
- ❌ Call the third-party payer to negotiate a higher rate of reimbursement.\r
> It has already been determined that the balance falls under patient financial responsibility, so legally the provider must collect that debt from the client.\r
- ✅ Prepare and send a patient statement.\r
> As per the contract, providers are obligated to collect all patient financial responsibility from the client as their benefits dictate.\r
\r
## Question 58 of 80\r
Which of the following unpaid claims listed on a current aging report should a billing and coding specialist review first?\r
- ❌ 14 days outstanding\r
> This unpaid claim should be reviewed; however, the specialist should review another unpaid claim first because this claim is stil within the normal processing time frame for insurance plans.\r
- ❌ 21 days outstanding\r
> This unpaid claim should be reviewed; however, the specialist should review another unpaid claim first because this claim is stil within the normal processing time frame for insurance plans.\r
- ❌ 28 days outstanding\r
> This unpaid claim should be reviewed; however, the specialist should review another unpaid claim first because this claim is stil within the normal processing time frame for insurance plans.\r
- ✅ 35 days outstanding\r
> This unpaid claim should be reviewed first. The provider needs to file claims with the third-party payer in a timely manner, so the specialist should focus first on unpaid claims that are 31 to 60 days old.\r
\r
## Question 59 of 80\r
Which of the following is an example of a clinical data abstraction error?\r
- ❌ Incorrect date of service was used.\r
> Incorrect date of service is not an abstraction error.\r
- ❌ Authorization was not obtained.\r
> Failing to obtain prior authorization is not an abstraction error.\r
- ✅ Referral request for a mammogram was billed as charges.\r
> Billing as charges when a referral request is created in the patient chart is an example of an abstraction error.\r
- ❌ Secondary insurance was billed as primary insurance.\r
> Billing insurances in the wrong order is not an abstraction error.\r
\r
## Question 60 of 80\r
A billing and coding specialist is reviewing a Medicare electronic remittance advice. The remittance advice indicates a payment of $80.00 for a wellness exam. The billed amount was $220.00 and the allowed amount was $80.00. Which of the following actions should the specialist take?\r
- ❌ Resubmit the claim\r
> Since the payer determined the allowed amount was $80.00 and reimbursed $80.00, the patient financial responsibility is $0.00. The remainder should be written off and there would be no need to resubmit.\r
- ✅ Post the payment and write off the difference.\r
> Since the payer determined the allowed amount was $80.00 and reimbursed $80.00, the patient financial responsibility is $0.00. The remainder should be written off.\r
- ❌ Ask the patient to pay the difference\r
> Since the payer determined the allowed amount was $80.00 and reimbursed $80.00, the patient financial responsibility is $0.00. The remainder should be written off.\r
- ❌ Submit an appeal for the previously processed claim.\r
> Since the payer determined the allowed amount was $80.00 and reimbursed $80.00, the patient financial responsibility is $0.00. The remainder should be written off and there would be no need to appeal.\r
\r
## Question 61 of 80\r
Which of the following resources is used to understand Medicare coverage circumstances such as indications and coding guidance?\r
- ✅ NCD articles\r
> NCD articles explain the coverage circumstances of certain services, including indications and any limitations for the service and coding guidance.\r
- ❌ NCCI edits\r
> NCCI edits identify codes that are bundled into another service. They do not provide coverage circumstances such as indications and coding guidance.\r
- ❌ Mutually exclusive edits (MUE)\r
> Mutually exclusive edits identify issues such as code combinations that are restricted by CPT® guidelines or procedures that cannot be reasonably performed during the same encounter. They do not provide coverage circumstances such as indications and coding guidance.\r
- ❌ Alternative payment model (APM)\r
> APMs are a reimbursement model that incentivize quality care.\r
\r
## Question 62 of 80\r
A billing and coding specialist is reviewing a remittance advice that has a remark code that indicates a claim is pended for review of medical records. Which of the following actions should the specialist take?\r
- ✅ Send the requested medical records\r
> The specialist should send the requested medical records to the third-party payer for processing.\r
- ❌ Resubmit the claim to the third-party payer as a corrected claim.\r
> A corrected claim would not resolve the issue because the claim has not been denied.\r
- ❌ Notify the third-party payer to review the claim for payment.\r
> Notifying the third-party payer will not result in a payment without submitting the requested medical records.\r
- ❌ Advise the patient that they will be responsible for the charges not covered by the payer.\r
> The patient should not be contacted and billed for a pended claim.\r
\r
## Question 63 of 80\r
A billing and coding specialist is reviewing a claims denial for a surgical procedure. After reviewing the original claim, it is determined that services should have been paid. Which of the following scenarios eliminates the need for prior authorization?\r
- ❌ The patient had already been admitted to the hospital\r
> Admission to a hospital does not eliminate the need for prior authorization.\r
- ✅ The patient required an emergency procedure\r
> An emergency procedure eliminates the need for prior authorization.\r
- ❌ The patient received an elective procedure.\r
> Elective procedures require prior authorization.\r
- ❌ The patient is a Medicare beneficiary.\r
> Medicare beneficiaries still require prior authorization for certain procedures.\r
\r
## Question 64 of 80\r
A billing and coding specialist receives a denial from a third-party payer due to missing information. Which of the following actions should the specialist take to receive reimbursement?\r
- ❌ Request reimbursement from the patient.\r
> This is a billing error, so it is not the patient's responsibility to make a payment.\r
- ❌ Submit an adjustment.\r
> There is no indication that this claim had any payments, so an adjustment would not be necessary.\r
- ❌ Contact the third-party payer to provide the information\r
> The specialist should not contact the third-party payer to provide the information. Instead, they should resubmit the claim with the completed information.\r
- ✅ Resubmit the claim with the completed information\r
> The specialist should resubmit the claim with the completed information.\r
\r
## Question 65 of 80\r
A patient has Medicare and TRICARE insurance plans. Which of the following should be collected as patient financial responsibility after a procedure?\r
- ❌ 20% of the total charge of the procedure\r
> The patient is no longer financially responsible for their health care costs because of the dual coverage with Medicare and TRICARE.\r
- ❌ 20% of the allowable amount for the procedure\r
> The patient is no longer financially responsible for their health care costs because of the dual coverage with Medicare and TRICARE.\r
- ✅ $0.00\r
> The patient is no longer financially responsible for their health care costs because of the dual coverage with Medicare and TRICARE.\r
- ❌ $1,000.00\r
> The patient is no longer financially responsible for their health care costs because of the dual coverage with Medicare and TRICARE.\r
\r
## Question 66 of 80\r
A billing and coding specialist has received numerous denials from a third-party payer for a preauthorized service. Which of the following actions should the specialist take to resolve the denied claim?\r
- ✅ Request that the third-party payer review for reconsideration\r
> The preauthorized services should be considered medically necessary if billed accurately; therefore, the claim would need to be reconsidered for payment.\r
- ❌ Bill the patient for the denied services.\r
> The payer should be contacted for reconsideration before billing the patient for preauthorized services.\r
- ❌ Have the charges adjusted off the patient's account.\r
> Adjusting charges from a patient's account without proof of appropriate steps to have the claim reexamined for payment is considered fraud.\r
- ❌ Submit a new claim.\r
> The specialist should avoid submitting a new claim because it will result in a denial for duplicate services.\r
\r
## Question 67 of 80\r
A billing and coding specialist is reviewing a remittance advice (RA). The specialist should identify that which of the following provides the reason for a claim denial?\r
- ❌ Patient statements\r
> Patient statements are generated by the office after the third-party payer has adjudicated the claim. This would not be a place to find claim denial reasons.\r
- ❌ Payer website\r
> The payer website does not provide the reason for a claim denial.\r
- ✅ Claim adjustment reason code (CARC)\r
> A CARC identifies the reason for a claim denial.\r
- ❌ Electronic health record (EHR) scrubbing tool\r
> An EHR scrubbing tool does not provide the reason for a claim denial. Scrubbing tools are used on clean claims before being sent to a third-party payer.\r
\r
## Question 68 of 80\r
A claim is denied with a reason code that the service was not medically necessary. Which of the following actions should a billing and coding specialist take next to process the appeal?\r
- ❌ Record the denial with the reason code and make a note in the patient's account.\r
> Although the specialist will need to record the denial with the reason code and make a note in the patient's account, the specialist should first research the denial.\r
- ❌ Review the diagnosis entered on the claim against the diagnosis entered in the provider note.\r
> Denied claims are reviewed prior to determination about whether to submit for an appeal.\r
- ❌ Call the third-party payer and ask for its explanation of the adjudication.\r
> This action is not needed because the denial with the reason code has already been received.\r
- ✅ Send proof of valid diagnosis with a letter to the third-party payer.\r
> Send supporting documentation for the diagnosis and procedure to the third-party payer.\r
\r
\r
## Question 69 of 80\r
Which of the following occurs when claims are submitted in batches using a clearinghouse?\r
- ❌ All claims are submitted to the same carrier and software edits are conducted.\r
> Claims are sorted by carrier type, software edits are conducted, and then the claim is sent electronically to the correct payers.\r
- ✅ Claims are sorted by payer type and are examined for errors\r
> After the clearinghouse receives a batch, it separates the claims by carrier and performs software edits for each claim.\r
- ❌ The clearinghouse prints the claim forms and mails them to each carrier.\r
> After the clearinghouse receives a batch, it separates the claims by carrier and performs software edits for each claim. Then, the clearinghouse will send on only electronic claims.\r
- ❌ After the batched claims are submitted, they are reimbursed.\r
> Claims need to be scrubbed for errors and must pass all edits before being sent to the correct third-party payers for consideration of payment.\r
\r
## Question 70 of 80\r
The letters "PR" (patient responsibility) on a remittance advice are an example of which of the following universally accepted codes?\r
- ❌ National Correct Coding Initiative (NCCI)\r
> The NCCI initiative for Medicare speaks to the policy for correct coding.\r
- ❌ Current Procedural Terminology (CPT®) codes\r
> Current Procedural Terminology (CPT®) codes are used to describe services provided.\r
- ✅ Claim Adjustment Reason Code (CARC)\r
> The CARC list is managed by Medicare and used universally within insurance plans for coding denials listed on explanation of benefits (EOBs), The letters PR on a remittance advice indicates patient responsibility.\r
- ❌ International Classification of Diseases (ICD) codes\r
> ICD is the diagnosis indicated which explains the health of the patient during the session.\r
\r
## Question 71 of 80\r
After running a report, a billing and coding specialist discovers several claims are being denied for coding errors. To prevent future errors, which of the following actions should the specialist take?\r
- ❌ Educate the third-party payer on researching coding issues.\r
> The third-party payer creates the rules that specialists abide by. The specialist should retrain staff, not the third-party payer, about the rules.\r
- ❌ Implement external audit processes.\r
> The specialist should implement internal, not external, audit processes to prevent future errors.\r
- ✅ Retrain staff on proper documentation and coding guidelines.\r
> The specialist should retrain the provider on proper documentation and coding guidelines to prevent future errors.\r
- ❌ Write off the claims that were incorrectly submitted.\r
> Incorrectly submitted claims should be fixed and resubmitted as corrected claims.\r
\r
## Question 72 of 80\r
A billing and coding specialist is reviewing a partially paid claim that was submitted without modifier 22 for increased procedural services. Which of the following actions should the specialist take to obtain accurate reimbursement?\r
- ❌ Resubmit the claim with copies of the medical record documentation.\r
> Resubmitting the claim, even with copies of the medical record documentation, is incorrect because it would result in a duplicate claim submission denial.\r
- ✅ Submit an appeal with copies of the medical record documentation.\r
> Submitting an appeal with copies of the medical record documentation is the action required to receive correct reimbursement for increased procedural services.\r
- ❌ Contact the patient for additional reimbursement.\r
> Contacting the patient for additional reimbursement is incorrect because it is a billing error, which is not the patient's responsibility.\r
- ❌ Post the payment and write off the difference\r
> Posting the payment and writing off the difference is incorrect because it is a billing error, which must be adjusted with the third-party payer.\r
\r
## Question 73 of 80\r
Which of the following information is required by third-party payers when processing a CMS-1500/837P claim?\r
- ❌ Prior medical provider\r
> This is not a required field on the CMS-1500/837P claim form.\r
- ❌ Patient's email address\r
> This is not a required field on the CMS-1500/837P claim form.\r
- ✅ Place of service\r
> This is a required field on the CMS-1500/837P claim form.\r
- ❌ Patient deductible amount\r
> This is not a required field on the CMS-1500/837P claim form.\r
\r
## Question 74 of 80\r
Which of the following documents is used to review claim reimbursements and denials?\r
- ❌ CMS-1500\r
> This document is used to submit claims.\r
- ✅ Remittance advice\r
> A remittance advice is a document that explains the adjudication, including claim rejections and denials, of a claim by a third-party payer.\r
- ❌ Authorization\r
> This document is used to obtain and receive authorization for services.\r
- ❌ Concurrent review\r
> This document is used to determine if medical necessity is still current and if it is appropriate to keep a patient hospitalized.\r
\r
## Question 75 of 80\r
Which of the following is a unique HIPAA-mandated number that is required to submit a claim for surgical procedures performed by a thoracic surgeon?\r
- ✅ National provider identifier (NPI)\r
> An NPI is required by HIPAA for all health care provider transactions.\r
- ❌ Employer identification number (EIN)\r
> An EIN is required by HIPAA for health care transactions that do not involve a provider.\r
- ❌ Provider's Social Security number (SSN)\r
> The provider's Social Security number is not required to be on a claim form.\r
- ❌ Diagnosis related group (DRG)\r
> A DRG is a grouping of ICD10 codes that are required by HIPAA to identify care provided in a hospital.\r
\r
## Question 76 of 80\r
A billing and coding specialist is preparing a claim with two types of third-party payer coverage. Which of the following is a process that determines the order of third-party payers for the claim?\r
- ✅ Coordination of benefits\r
> Coordination of benefits is a process that ensures patient benefits are paid in the correct order when more than one third-party payer provides coverage.\r
- ❌ Insurance claim cycle\r
> The insurance claim cycle is a four-stage process that all claims go through regardless of how many payers there are.\r
- ❌ Electronic data interchange\r
> Electronic data interchange is the system through which computers transfer data in health care financial transactions.\r
- ❌ Explanation of benefits\r
> Explanation of benefits is a document that details claim adjudication and applies to all claims regardless of how many payers there are.\r
\r
## Question 77 of 80\r
A billing and coding specialist is completing a claim form for a Medicare beneficiary for a wellness visit with their primary care provider who is a PAR provider. Which of the following information is required on the form?\r
- ❌ Medicare identification number, date of birth, and date of injury\r
> Since this is only a wellness visit, there would be no date of injury recorded.\r
- ❌ Medicare identification number, date of birth, and date of discharge\r
> Since the patient has not been admitted or discharged from a hospital, there would be no date of discharge.\r
- ❌ Medicare identification number, date of birth, and referring physician's national provider identifier (NPI)\r
> Since the patient is seeing their primary care provider, there would be no need for a referring provider.\r
- ✅ Medicare identification number, date of birth, and accept assignment\r
> These are all elements that are required for a Medicare claim for a wellness visit.\r
\r
## Question 78 of 80\r
A billing and coding specialist is reviewing a remittance advice from a third-party payer that indicates $250 out of the $500 charge is a contractual adjustment. Which of the following actions should the specialist take?\r
- ❌ Bill the patient for the difference.\r
> It is not appropriate to balance bill the patient based on the contract with the payer.\r
- ❌ Resubmit the claim for additional review\r
> Resubmitting the claim for additional review is not necessary because both parties have agreed to the contractual agreement.\r
- ❌ Change the cost for the services on future claims.\r
> Changing the cost for the services does not change the contractual agreement.\r
- ✅ Post the adjustment.\r
> According to the contract with the third-party payer, the specialist should post the adjustment amount indicated on the remittance advice and enter the adjustment reason in the patient's account.\r
\r
## Question 79 of 80\r
Which of the following information is required for third-party payers to process a CMS-1500/837P claim for an evaluation and management service performed using televisual devices?\r
- ❌ Patient's account number\r
> The patient account number is assigned by the provider and is not required by the third-party payer to process a claim.\r
- ❌ Provider's phone number\r
> The phone number is not required for claims processing.\r
- ✅ Modifier(s)\r
> Since this is an evaluation and management telehealth service, a modifier is required to process the claim.\r
- ❌ Prior authorization number\r
> No prior authorization is needed for evaluation and management telehealth services.\r
\r
## Question 80 of 80\r
A billing and coding specialist is reviewing claims for submission. Which of the following is considered a charge capture error?\r
- ❌ Preauthorization not obtained\r
> Charge capture errors include incorrect code assignment. Preauthorization is not a charge capture error.\r
- ❌ Patient demographics\r
> Charge capture errors include incorrect code assignment. Patient demographics are not a charge capture error.\r
- ❌ Data entry errors\r
> Charge capture errors include incorrect code assignment. Data entry errors are not a charge capture error.\r
- ✅ Incorrect code assignment\r
> Charge capture errors include incorrect code assignment.`;function _n(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let he=_n();function Di(i){he=i}const _e={exec:()=>null};function A(i,e=""){let n=typeof i=="string"?i:i.source;const t={replace:(r,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(W.caret,"$1"),n=n.replace(r,a),t},getRegex:()=>new RegExp(n,e)};return t}const W={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}#`),htmlBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}<(?:[a-z].*>|!--)`,"i")},Ar=/^(?:[ \t]*(?:\n|$))+/,kr=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,xr=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,De=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Pr=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,$i=/(?:[*+-]|\d{1,9}[.)])/,zi=A(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,$i).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),In=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Mr=/^[^\n]+/,Sn=/(?!\s*\])(?:\\.|[^\[\]\\])+/,_r=A(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Sn).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ir=A(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,$i).getRegex(),tn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",En=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Sr=A("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",En).replace("tag",tn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Hi=A(In).replace("hr",De).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tn).getRegex(),Er=A(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Hi).getRegex(),qn={blockquote:Er,code:kr,def:_r,fences:xr,heading:Pr,hr:De,html:Sr,lheading:zi,list:Ir,newline:Ar,paragraph:Hi,table:_e,text:Mr},Yn=A("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",De).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tn).getRegex(),qr={...qn,table:Yn,paragraph:A(In).replace("hr",De).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Yn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tn).getRegex()},Rr={...qn,html:A(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",En).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:_e,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:A(In).replace("hr",De).replace("heading",` *#{1,6} *[^
]`).replace("lheading",zi).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Bi=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Qr=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ni=/^( {2,}|\\)\n(?!\s*$)/,Wr=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,rn=/[\p{P}\p{S}]/u,Rn=/[\s\p{P}\p{S}]/u,Oi=/[^\s\p{P}\p{S}]/u,Dr=A(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Rn).getRegex(),$r=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,zr=A(/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,"u").replace(/punct/g,rn).getRegex(),Hr=A("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)","gu").replace(/notPunctSpace/g,Oi).replace(/punctSpace/g,Rn).replace(/punct/g,rn).getRegex(),Br=A("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Oi).replace(/punctSpace/g,Rn).replace(/punct/g,rn).getRegex(),Nr=A(/\\(punct)/,"gu").replace(/punct/g,rn).getRegex(),Or=A(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),jr=A(En).replace("(?:-->|$)","-->").getRegex(),Lr=A("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",jr).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ze=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Fr=A(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ze).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ji=A(/^!?\[(label)\]\[(ref)\]/).replace("label",Ze).replace("ref",Sn).getRegex(),Li=A(/^!?\[(ref)\](?:\[\])?/).replace("ref",Sn).getRegex(),Ur=A("reflink|nolink(?!\\()","g").replace("reflink",ji).replace("nolink",Li).getRegex(),Qn={_backpedal:_e,anyPunctuation:Nr,autolink:Or,blockSkip:$r,br:Ni,code:Qr,del:_e,emStrongLDelim:zr,emStrongRDelimAst:Hr,emStrongRDelimUnd:Br,escape:Bi,link:Fr,nolink:Li,punctuation:Dr,reflink:ji,reflinkSearch:Ur,tag:Lr,text:Wr,url:_e},Gr={...Qn,link:A(/^!?\[(label)\]\((.*?)\)/).replace("label",Ze).getRegex(),reflink:A(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ze).getRegex()},gn={...Qn,escape:A(Bi).replace("])","~|])").getRegex(),url:A(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Zr={...gn,br:A(Ni).replace("{2,}","*").getRegex(),text:A(gn.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},He={normal:qn,gfm:qr,pedantic:Rr},ke={normal:Qn,gfm:gn,breaks:Zr,pedantic:Gr},Vr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ei=i=>Vr[i];function U(i,e){if(e){if(W.escapeTest.test(i))return i.replace(W.escapeReplace,ei)}else if(W.escapeTestNoEncode.test(i))return i.replace(W.escapeReplaceNoEncode,ei);return i}function ni(i){try{i=encodeURI(i).replace(W.percentDecode,"%")}catch{return null}return i}function ii(i,e){var o;const n=i.replace(W.findPipe,(a,l,d)=>{let c=!1,s=l;for(;--s>=0&&d[s]==="\\";)c=!c;return c?"|":" |"}),t=n.split(W.splitPipe);let r=0;if(t[0].trim()||t.shift(),t.length>0&&!((o=t.at(-1))!=null&&o.trim())&&t.pop(),e)if(t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;r<t.length;r++)t[r]=t[r].trim().replace(W.slashPipe,"|");return t}function xe(i,e,n){const t=i.length;if(t===0)return"";let r=0;for(;r<t;){const o=i.charAt(t-r-1);if(o===e&&!n)r++;else if(o!==e&&n)r++;else break}return i.slice(0,t-r)}function Jr(i,e){if(i.indexOf(e[1])===-1)return-1;let n=0;for(let t=0;t<i.length;t++)if(i[t]==="\\")t++;else if(i[t]===e[0])n++;else if(i[t]===e[1]&&(n--,n<0))return t;return-1}function ti(i,e,n,t,r){const o=e.href,a=e.title||null,l=i[1].replace(r.other.outputLinkReplace,"$1");if(i[0].charAt(0)!=="!"){t.state.inLink=!0;const d={type:"link",raw:n,href:o,title:a,text:l,tokens:t.inlineTokens(l)};return t.state.inLink=!1,d}return{type:"image",raw:n,href:o,title:a,text:l}}function Kr(i,e,n){const t=i.match(n.other.indentCodeCompensation);if(t===null)return e;const r=t[1];return e.split(`
`).map(o=>{const a=o.match(n.other.beginningSpace);if(a===null)return o;const[l]=a;return l.length>=r.length?o.slice(r.length):o}).join(`
`)}class Ve{constructor(e){k(this,"options");k(this,"rules");k(this,"lexer");this.options=e||he}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const t=n[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?t:xe(t,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const t=n[0],r=Kr(t,n[3]||"",this.rules);return{type:"code",raw:t,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:r}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(this.rules.other.endingHash.test(t)){const r=xe(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:xe(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let t=xe(n[0],`
`).split(`
`),r="",o="";const a=[];for(;t.length>0;){let l=!1;const d=[];let c;for(c=0;c<t.length;c++)if(this.rules.other.blockquoteStart.test(t[c]))d.push(t[c]),l=!0;else if(!l)d.push(t[c]);else break;t=t.slice(c);const s=d.join(`
`),u=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${s}`:s,o=o?`${o}
${u}`:u;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,a,!0),this.lexer.state.top=h,t.length===0)break;const p=a.at(-1);if((p==null?void 0:p.type)==="code")break;if((p==null?void 0:p.type)==="blockquote"){const f=p,m=f.raw+`
`+t.join(`
`),y=this.blockquote(m);a[a.length-1]=y,r=r.substring(0,r.length-f.raw.length)+y.raw,o=o.substring(0,o.length-f.text.length)+y.text;break}else if((p==null?void 0:p.type)==="list"){const f=p,m=f.raw+`
`+t.join(`
`),y=this.list(m);a[a.length-1]=y,r=r.substring(0,r.length-p.raw.length)+y.raw,o=o.substring(0,o.length-f.raw.length)+y.raw,t=m.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:a,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t=n[1].trim();const r=t.length>1,o={type:"list",raw:"",ordered:r,start:r?+t.slice(0,-1):"",loose:!1,items:[]};t=r?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=r?t:"[*+-]");const a=this.rules.other.listItemRegex(t);let l=!1;for(;e;){let c=!1,s="",u="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;s=n[0],e=e.substring(s.length);let h=n[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,M=>" ".repeat(3*M.length)),p=e.split(`
`,1)[0],f=!h.trim(),m=0;if(this.options.pedantic?(m=2,u=h.trimStart()):f?m=n[1].length+1:(m=n[2].search(this.rules.other.nonSpaceChar),m=m>4?1:m,u=h.slice(m),m+=n[1].length),f&&this.rules.other.blankLine.test(p)&&(s+=p+`
`,e=e.substring(p.length+1),c=!0),!c){const M=this.rules.other.nextBulletRegex(m),I=this.rules.other.hrRegex(m),H=this.rules.other.fencesBeginRegex(m),x=this.rules.other.headingBeginRegex(m),E=this.rules.other.htmlBeginRegex(m);for(;e;){const q=e.split(`
`,1)[0];let w;if(p=q,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),w=p):w=p.replace(this.rules.other.tabCharGlobal,"    "),H.test(p)||x.test(p)||E.test(p)||M.test(p)||I.test(p))break;if(w.search(this.rules.other.nonSpaceChar)>=m||!p.trim())u+=`
`+w.slice(m);else{if(f||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||H.test(h)||x.test(h)||I.test(h))break;u+=`
`+p}!f&&!p.trim()&&(f=!0),s+=q+`
`,e=e.substring(q.length+1),h=w.slice(m)}}o.loose||(l?o.loose=!0:this.rules.other.doubleBlankLine.test(s)&&(l=!0));let y=null,v;this.options.gfm&&(y=this.rules.other.listIsTask.exec(u),y&&(v=y[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),o.items.push({type:"list_item",raw:s,task:!!y,checked:v,loose:!1,text:u,tokens:[]}),o.raw+=s}const d=o.items.at(-1);d&&(d.raw=d.raw.trimEnd(),d.text=d.text.trimEnd()),o.raw=o.raw.trimEnd();for(let c=0;c<o.items.length;c++)if(this.lexer.state.top=!1,o.items[c].tokens=this.lexer.blockTokens(o.items[c].text,[]),!o.loose){const s=o.items[c].tokens.filter(h=>h.type==="space"),u=s.length>0&&s.some(h=>this.rules.other.anyLine.test(h.raw));o.loose=u}if(o.loose)for(let c=0;c<o.items.length;c++)o.items[c].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const t=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:t,raw:n[0],href:r,title:o}}}table(e){var l;const n=this.rules.block.table.exec(e);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;const t=ii(n[1]),r=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=(l=n[3])!=null&&l.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(t.length===r.length){for(const d of r)this.rules.other.tableAlignRight.test(d)?a.align.push("right"):this.rules.other.tableAlignCenter.test(d)?a.align.push("center"):this.rules.other.tableAlignLeft.test(d)?a.align.push("left"):a.align.push(null);for(let d=0;d<t.length;d++)a.header.push({text:t[d],tokens:this.lexer.inline(t[d]),header:!0,align:a.align[d]});for(const d of o)a.rows.push(ii(d,a.header.length).map((c,s)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:a.align[s]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const t=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:t,tokens:this.lexer.inline(t)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const t=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;const a=xe(t.slice(0,-1),"\\");if((t.length-a.length)%2===0)return}else{const a=Jr(n[2],"()");if(a>-1){const d=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,d).trim(),n[3]=""}}let r=n[2],o="";if(this.options.pedantic){const a=this.rules.other.pedanticHrefTitle.exec(r);a&&(r=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),ti(n,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){const r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),o=n[r.toLowerCase()];if(!o){const a=t[0].charAt(0);return{type:"text",raw:a,text:a}}return ti(t,o,t[0],this.lexer,this.rules)}}emStrong(e,n,t=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&t.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const a=[...r[0]].length-1;let l,d,c=a,s=0;const u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,n=n.slice(-1*e.length+a);(r=u.exec(n))!=null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l)continue;if(d=[...l].length,r[3]||r[4]){c+=d;continue}else if((r[5]||r[6])&&a%3&&!((a+d)%3)){s+=d;continue}if(c-=d,c>0)continue;d=Math.min(d,d+c+s);const h=[...r[0]][0].length,p=e.slice(0,a+r.index+h+d);if(Math.min(a,d)%2){const m=p.slice(1,-1);return{type:"em",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}const f=p.slice(2,-2);return{type:"strong",raw:p,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(t),o=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&o&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:n[0],text:t}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let t,r;return n[2]==="@"?(t=n[1],r="mailto:"+t):(t=n[1],r=t),{type:"link",raw:n[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(e){var t;let n;if(n=this.rules.inline.url.exec(e)){let r,o;if(n[2]==="@")r=n[0],o="mailto:"+r;else{let a;do a=n[0],n[0]=((t=this.rules.inline._backpedal.exec(n[0]))==null?void 0:t[0])??"";while(a!==n[0]);r=n[0],n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){const t=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:t}}}}class O{constructor(e){k(this,"tokens");k(this,"options");k(this,"state");k(this,"tokenizer");k(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||he,this.options.tokenizer=this.options.tokenizer||new Ve,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:W,block:He.normal,inline:ke.normal};this.options.pedantic?(n.block=He.pedantic,n.inline=ke.pedantic):this.options.gfm&&(n.block=He.gfm,this.options.breaks?n.inline=ke.breaks:n.inline=ke.gfm),this.tokenizer.rules=n}static get rules(){return{block:He,inline:ke}}static lex(e,n){return new O(n).lex(e)}static lexInline(e,n){return new O(n).inlineTokens(e)}lex(e){e=e.replace(W.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const t=this.inlineQueue[n];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],t=!1){var r,o,a;for(this.options.pedantic&&(e=e.replace(W.tabCharGlobal,"    ").replace(W.spaceLine,""));e;){let l;if((o=(r=this.options.extensions)==null?void 0:r.block)!=null&&o.some(c=>(l=c.call({lexer:this},e,n))?(e=e.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.space(e)){e=e.substring(l.raw.length);const c=n.at(-1);l.raw.length===1&&c!==void 0?c.raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(e)){e=e.substring(l.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+l.raw,c.text+=`
`+l.text,this.inlineQueue.at(-1).src=c.text):n.push(l);continue}if(l=this.tokenizer.fences(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(e)){e=e.substring(l.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+l.raw,c.text+=`
`+l.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(e)){e=e.substring(l.raw.length),n.push(l);continue}let d=e;if((a=this.options.extensions)!=null&&a.startBlock){let c=1/0;const s=e.slice(1);let u;this.options.extensions.startBlock.forEach(h=>{u=h.call({lexer:this},s),typeof u=="number"&&u>=0&&(c=Math.min(c,u))}),c<1/0&&c>=0&&(d=e.substring(0,c+1))}if(this.state.top&&(l=this.tokenizer.paragraph(d))){const c=n.at(-1);t&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=`
`+l.raw,c.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(l),t=d.length!==e.length,e=e.substring(l.raw.length);continue}if(l=this.tokenizer.text(e)){e=e.substring(l.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=`
`+l.raw,c.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(l);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var l,d,c;let t=e,r=null;if(this.tokens.links){const s=Object.keys(this.tokens.links);if(s.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(t))!=null;)s.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(t=t.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+t.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.blockSkip.exec(t))!=null;)t=t.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+t.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(t))!=null;)t=t.slice(0,r.index)+"++"+t.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o=!1,a="";for(;e;){o||(a=""),o=!1;let s;if((d=(l=this.options.extensions)==null?void 0:l.inline)!=null&&d.some(h=>(s=h.call({lexer:this},e,n))?(e=e.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.tag(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length);const h=n.at(-1);s.type==="text"&&(h==null?void 0:h.type)==="text"?(h.raw+=s.raw,h.text+=s.text):n.push(s);continue}if(s=this.tokenizer.emStrong(e,t,a)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.del(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.autolink(e)){e=e.substring(s.raw.length),n.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(e))){e=e.substring(s.raw.length),n.push(s);continue}let u=e;if((c=this.options.extensions)!=null&&c.startInline){let h=1/0;const p=e.slice(1);let f;this.options.extensions.startInline.forEach(m=>{f=m.call({lexer:this},p),typeof f=="number"&&f>=0&&(h=Math.min(h,f))}),h<1/0&&h>=0&&(u=e.substring(0,h+1))}if(s=this.tokenizer.inlineText(u)){e=e.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(a=s.raw.slice(-1)),o=!0;const h=n.at(-1);(h==null?void 0:h.type)==="text"?(h.raw+=s.raw,h.text+=s.text):n.push(s);continue}if(e){const h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return n}}class Je{constructor(e){k(this,"options");k(this,"parser");this.options=e||he}space(e){return""}code({text:e,lang:n,escaped:t}){var a;const r=(a=(n||"").match(W.notSpaceStart))==null?void 0:a[0],o=e.replace(W.endingNewline,"")+`
`;return r?'<pre><code class="language-'+U(r)+'">'+(t?o:U(o,!0))+`</code></pre>
`:"<pre><code>"+(t?o:U(o,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,t=e.start;let r="";for(let l=0;l<e.items.length;l++){const d=e.items[l];r+=this.listitem(d)}const o=n?"ol":"ul",a=n&&t!==1?' start="'+t+'"':"";return"<"+o+a+`>
`+r+"</"+o+`>
`}listitem(e){var t;let n="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?((t=e.tokens[0])==null?void 0:t.type)==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+U(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):n+=r+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",t="";for(let o=0;o<e.header.length;o++)t+=this.tablecell(e.header[o]);n+=this.tablerow({text:t});let r="";for(let o=0;o<e.rows.length;o++){const a=e.rows[o];t="";for(let l=0;l<a.length;l++)t+=this.tablecell(a[l]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${U(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:t}){const r=this.parser.parseInline(t),o=ni(e);if(o===null)return r;e=o;let a='<a href="'+e+'"';return n&&(a+=' title="'+U(n)+'"'),a+=">"+r+"</a>",a}image({href:e,title:n,text:t}){const r=ni(e);if(r===null)return U(t);e=r;let o=`<img src="${e}" alt="${t}"`;return n&&(o+=` title="${U(n)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:U(e.text)}}class Wn{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class j{constructor(e){k(this,"options");k(this,"renderer");k(this,"textRenderer");this.options=e||he,this.options.renderer=this.options.renderer||new Je,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Wn}static parse(e,n){return new j(n).parse(e)}static parseInline(e,n){return new j(n).parseInline(e)}parse(e,n=!0){var r,o;let t="";for(let a=0;a<e.length;a++){const l=e[a];if((o=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&o[l.type]){const c=l,s=this.options.extensions.renderers[c.type].call({parser:this},c);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){t+=s||"";continue}}const d=l;switch(d.type){case"space":{t+=this.renderer.space(d);continue}case"hr":{t+=this.renderer.hr(d);continue}case"heading":{t+=this.renderer.heading(d);continue}case"code":{t+=this.renderer.code(d);continue}case"table":{t+=this.renderer.table(d);continue}case"blockquote":{t+=this.renderer.blockquote(d);continue}case"list":{t+=this.renderer.list(d);continue}case"html":{t+=this.renderer.html(d);continue}case"paragraph":{t+=this.renderer.paragraph(d);continue}case"text":{let c=d,s=this.renderer.text(c);for(;a+1<e.length&&e[a+1].type==="text";)c=e[++a],s+=`
`+this.renderer.text(c);n?t+=this.renderer.paragraph({type:"paragraph",raw:s,text:s,tokens:[{type:"text",raw:s,text:s,escaped:!0}]}):t+=s;continue}default:{const c='Token with "'+d.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return t}parseInline(e,n=this.renderer){var r,o;let t="";for(let a=0;a<e.length;a++){const l=e[a];if((o=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&o[l.type]){const c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){t+=c||"";continue}}const d=l;switch(d.type){case"escape":{t+=n.text(d);break}case"html":{t+=n.html(d);break}case"link":{t+=n.link(d);break}case"image":{t+=n.image(d);break}case"strong":{t+=n.strong(d);break}case"em":{t+=n.em(d);break}case"codespan":{t+=n.codespan(d);break}case"br":{t+=n.br(d);break}case"del":{t+=n.del(d);break}case"text":{t+=n.text(d);break}default:{const c='Token with "'+d.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return t}}class Ie{constructor(e){k(this,"options");k(this,"block");this.options=e||he}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?O.lex:O.lexInline}provideParser(){return this.block?j.parse:j.parseInline}}k(Ie,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class Xr{constructor(...e){k(this,"defaults",_n());k(this,"options",this.setOptions);k(this,"parse",this.parseMarkdown(!0));k(this,"parseInline",this.parseMarkdown(!1));k(this,"Parser",j);k(this,"Renderer",Je);k(this,"TextRenderer",Wn);k(this,"Lexer",O);k(this,"Tokenizer",Ve);k(this,"Hooks",Ie);this.use(...e)}walkTokens(e,n){var r,o;let t=[];for(const a of e)switch(t=t.concat(n.call(this,a)),a.type){case"table":{const l=a;for(const d of l.header)t=t.concat(this.walkTokens(d.tokens,n));for(const d of l.rows)for(const c of d)t=t.concat(this.walkTokens(c.tokens,n));break}case"list":{const l=a;t=t.concat(this.walkTokens(l.items,n));break}default:{const l=a;(o=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&o[l.type]?this.defaults.extensions.childTokens[l.type].forEach(d=>{const c=l[d].flat(1/0);t=t.concat(this.walkTokens(c,n))}):l.tokens&&(t=t.concat(this.walkTokens(l.tokens,n)))}}return t}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(t=>{const r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...l){let d=o.renderer.apply(this,l);return d===!1&&(d=a.apply(this,l)),d}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),r.extensions=n),t.renderer){const o=this.defaults.renderer||new Je(this.defaults);for(const a in t.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const l=a,d=t.renderer[l],c=o[l];o[l]=(...s)=>{let u=d.apply(o,s);return u===!1&&(u=c.apply(o,s)),u||""}}r.renderer=o}if(t.tokenizer){const o=this.defaults.tokenizer||new Ve(this.defaults);for(const a in t.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const l=a,d=t.tokenizer[l],c=o[l];o[l]=(...s)=>{let u=d.apply(o,s);return u===!1&&(u=c.apply(o,s)),u}}r.tokenizer=o}if(t.hooks){const o=this.defaults.hooks||new Ie;for(const a in t.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const l=a,d=t.hooks[l],c=o[l];Ie.passThroughHooks.has(a)?o[l]=s=>{if(this.defaults.async)return Promise.resolve(d.call(o,s)).then(h=>c.call(o,h));const u=d.call(o,s);return c.call(o,u)}:o[l]=(...s)=>{let u=d.apply(o,s);return u===!1&&(u=c.apply(o,s)),u}}r.hooks=o}if(t.walkTokens){const o=this.defaults.walkTokens,a=t.walkTokens;r.walkTokens=function(l){let d=[];return d.push(a.call(this,l)),o&&(d=d.concat(o.call(this,l))),d}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return O.lex(e,n??this.defaults)}parser(e,n){return j.parse(e,n??this.defaults)}parseMarkdown(e){return(t,r)=>{const o={...r},a={...this.defaults,...o},l=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const d=a.hooks?a.hooks.provideLexer():e?O.lex:O.lexInline,c=a.hooks?a.hooks.provideParser():e?j.parse:j.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(t):t).then(s=>d(s,a)).then(s=>a.hooks?a.hooks.processAllTokens(s):s).then(s=>a.walkTokens?Promise.all(this.walkTokens(s,a.walkTokens)).then(()=>s):s).then(s=>c(s,a)).then(s=>a.hooks?a.hooks.postprocess(s):s).catch(l);try{a.hooks&&(t=a.hooks.preprocess(t));let s=d(t,a);a.hooks&&(s=a.hooks.processAllTokens(s)),a.walkTokens&&this.walkTokens(s,a.walkTokens);let u=c(s,a);return a.hooks&&(u=a.hooks.postprocess(u)),u}catch(s){return l(s)}}}onError(e,n){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+U(t.message+"",!0)+"</pre>";return n?Promise.resolve(r):r}if(n)return Promise.reject(t);throw t}}}const se=new Xr;function T(i,e){return se.parse(i,e)}T.options=T.setOptions=function(i){return se.setOptions(i),T.defaults=se.defaults,Di(T.defaults),T};T.getDefaults=_n;T.defaults=he;T.use=function(...i){return se.use(...i),T.defaults=se.defaults,Di(T.defaults),T};T.walkTokens=function(i,e){return se.walkTokens(i,e)};T.parseInline=se.parseInline;T.Parser=j;T.parser=j.parse;T.Renderer=Je;T.TextRenderer=Wn;T.Lexer=O;T.lexer=O.lex;T.Tokenizer=Ve;T.Hooks=Ie;T.parse=T;T.options;T.setOptions;T.use;T.walkTokens;T.parseInline;j.parse;O.lex;var Yr=de('<div class="svelte-1fic553"><!></div>'),eo=de('<fieldset class="fancy"><legend> </legend> <!></fieldset>'),no=de('<h2 style="font-size: 1.5rem; font-weight: medium; margin: 0">Final Score</h2> <div style="font-size: 2rem; font-weight: bold; text-align: center; margin-bottom: 1rem" class="score svelte-1fic553"> </div> <table style="margin: auto"><tbody><tr><th>Correct</th><td> </td></tr><tr><th>Incorrect</th><td> </td></tr></tbody></table>',1),io=de('<article><nav class="svelte-1fic553"><button type="button" class="svelte-1fic553">Previous</button> <div class="timer svelte-1fic553">Timer <time class="svelte-1fic553"> </time></div> <button type="button" class="svelte-1fic553">Next</button></nav> <!></article>');function to(i,e){en(e,!1);let n=Be(e,"num_questions",12,5),t=G(),r=G(0),o=G([]),a,l=G(),d=G("00:00:00"),c=G(!1);function s(){g(r)<=g(t).length&&Bn(r)}function u(x){return T(x,{async:!1}).split(/^<h2>.+<\/h2>\n/gm).filter(Boolean)}Qi(()=>{_(t,[...u(wr),...u(Tr),...u(Cr)]),Wi(g(t)),_(t,g(t).slice(0,n())),n(g(t).length),_(o,new Array(n()).fill(void 0)),a=new Date,_(l,setInterval(()=>{_(d,yr(a))},1e3))});function h(x){ci(o,g(o)[g(r)]=x)}yi(()=>(g(c),g(o),g(l)),()=>{_(c,g(o).every(x=>typeof x=="boolean")),g(c)&&clearInterval(g(l))}),bi(),Ri();var p=io(),f=S(p),m=S(f),y=Q(m,2),v=Q(S(y)),M=S(v),I=Q(y,2),H=Q(f,2);qi(H,()=>g(r)<n(),x=>{var E=eo(),q=S(E),w=S(q),B=Q(q,2);or(B,1,()=>g(t),tr,(K,on,$e)=>{var Ae=Yr(),an=S(Ae),sn=ln(()=>typeof g(o)[g(r)]=="boolean");vr(an,{get src(){return g(on)},onSubmit:h,get answered(){return g(sn)}}),X(()=>Gn(Ae,"hidden",g(r)!==$e)),re(K,Ae)}),X(()=>{E.disabled=typeof g(o)[g(r)]=="boolean",fe(w,`Question: ${g(r)+1} of ${n()??""}`)}),re(x,E)},x=>{var E=no(),q=Q(St(E),2);const w=ln(()=>g(o).filter(Boolean).length/n()*100<70);X(()=>Gn(q,"failed",g(w)));var B=S(q);X(()=>fe(B,`${(g(o).filter(Boolean).length/n()*100).toFixed(2)??""}%`));var K=Q(q,2),on=S(K),$e=S(on),Ae=Q(S($e)),an=S(Ae);X(()=>fe(an,`${g(o).filter(Boolean).length??""} out of ${n()??""}`));var sn=Q($e),Fi=Q(S(sn)),Ui=S(Fi);X(()=>fe(Ui,`${g(o).filter(Gi=>!Gi).length??""} out of ${n()??""}`)),re(x,E)}),X(()=>{m.disabled=g(r)===0,fe(M,g(d)),I.disabled=g(r)===n()||typeof g(o)[g(r)]!="boolean"}),Ge("click",m,()=>Bn(r,-1)),Ge("click",I,s),re(i,p),nn()}var ro=de('<fieldset class="fancy flex flex-col items-center justify-center gap-2"><label for="numquestions">How many questions?</label> <input type="number" id="numquestions" min="1" class="pl-2 py-1 rounded border border-neutral-300 dark:border-neutral-600"> <button class="mt-4">Start</button></fieldset>'),oo=de('<main><header class="mb-6 grid grid-cols-[1fr,max-content,1fr] gap-4 justify-center items-center text-center"><div></div> <h1 class="mb-2 text-3xl font-bold">NHA Practice Test</h1> <label class="cursor-pointer text-lg inline-grid justify-self-end justify-center items-center text-center border p-2 rounded-full size-9 hover:bg-neutral-200 dark:hover:bg-neutral-700 leading-none"><input type="checkbox" class="hidden"> <small class="text-xs text-center block sr-only">Theme</small></label></header> <!></main>');function ao(i,e){en(e,!1);let n=G(307),t=G(!1),r=G(!1);yi(()=>g(r),()=>{document.documentElement.classList.toggle("dark",g(r))}),bi();var o=oo(),a=S(o),l=Q(S(a),4),d=S(l),c=Q(d),s=Q(a,2);qi(s,()=>!g(t),u=>{var h=ro(),p=Q(S(h),2),f=Q(p,2);hr(p,()=>g(n),m=>_(n,m)),Ge("click",f,()=>_(t,!0)),re(u,h)},u=>{to(u,{get num_questions(){return g(n)}})}),X(()=>fe(c,` ${(g(r)?"🌙":"☀️")??""} `)),ur(d,()=>g(r),u=>_(r,u)),re(i,o),nn()}nr(ao,{target:document.getElementById("app")});
