var Zt=Object.defineProperty;var Vt=(t,e,n)=>e in t?Zt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var C=(t,e,n)=>Vt(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Kt=!1;var yn=Array.isArray,bn=Array.from,Xt=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,rt=Object.getOwnPropertyDescriptors,Yt=Object.prototype,Jt=Array.prototype,Oe=Object.getPrototypeOf;function ei(t){return t()}function ln(t){for(var e=0;e<t.length;e++)t[e]()}const J=2,ot=4,qe=8,vn=16,j=32,Re=64,le=128,He=256,W=512,te=1024,be=2048,Z=4096,Qe=8192,ni=16384,wn=32768,ti=65536,ii=1<<18,at=1<<19,oe=Symbol("$state"),ri=Symbol("legacy props");function st(t){return t===this.v}function oi(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function kn(t){return!oi(t,this.v)}function ai(t){throw new Error("effect_in_teardown")}function si(){throw new Error("effect_in_unowned_derived")}function li(t){throw new Error("effect_orphan")}function ci(){throw new Error("effect_update_depth_exceeded")}function di(t){throw new Error("props_invalid_value")}function hi(){throw new Error("state_descriptors_fixed")}function ui(){throw new Error("state_prototype_fixed")}function pi(){throw new Error("state_unsafe_local_read")}function fi(){throw new Error("state_unsafe_mutation")}let ve=!1;function mi(){ve=!0}function O(t){return{f:0,v:t,reactions:null,equals:st,version:0}}function An(t,e=!1){var i;const n=O(t);return e||(n.equals=kn),ve&&_!==null&&_.l!==null&&((i=_.l).s??(i.s=[])).push(n),n}function G(t,e=!1){return gi(An(t,e))}function gi(t){return A!==null&&A.f&J&&(V===null?Bi([t]):V.push(t)),t}function lt(t,e){return M(t,ae(()=>g(t))),e}function M(t,e){return A!==null&&Ye()&&A.f&(J|vn)&&(V===null||!V.includes(t))&&fi(),ct(t,e)}function ct(t,e){return t.equals(e)||(t.v=e,t.version=Pt(),dt(t,te),Ye()&&b!==null&&b.f&W&&!(b.f&j)&&(R!==null&&R.includes(t)?(F(b,te),Je(b)):ne===null?Ni([t]):ne.push(t))),e}function dt(t,e){var n=t.reactions;if(n!==null)for(var i=Ye(),r=n.length,o=0;o<r;o++){var a=n[o],c=a.f;c&te||!i&&a===b||(F(a,e),c&(W|le)&&(c&J?dt(a,be):Je(a)))}}const yi=1,bi=2,vi=16,wi=1,ki=2,Ai=4,Ti=8,Ci=16,xi=1,_i=2,D=Symbol();let Pi=!1;function pe(t,e=null,n){if(typeof t!="object"||t===null||oe in t)return t;const i=Oe(t);if(i!==Yt&&i!==Jt)return t;var r=new Map,o=yn(t),a=O(0);o&&r.set("length",O(t.length));var c;return new Proxy(t,{defineProperty(d,l,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&hi();var u=r.get(l);return u===void 0?(u=O(s.value),r.set(l,u)):M(u,pe(s.value,c)),!0},deleteProperty(d,l){var s=r.get(l);if(s===void 0)l in d&&r.set(l,O(D));else{if(o&&typeof l=="string"){var u=r.get("length"),h=Number(l);Number.isInteger(h)&&h<u.v&&M(u,h)}M(s,D),Wn(a)}return!0},get(d,l,s){var f;if(l===oe)return t;var u=r.get(l),h=l in d;if(u===void 0&&(!h||(f=ge(d,l))!=null&&f.writable)&&(u=O(pe(h?d[l]:D,c)),r.set(l,u)),u!==void 0){var p=g(u);return p===D?void 0:p}return Reflect.get(d,l,s)},getOwnPropertyDescriptor(d,l){var s=Reflect.getOwnPropertyDescriptor(d,l);if(s&&"value"in s){var u=r.get(l);u&&(s.value=g(u))}else if(s===void 0){var h=r.get(l),p=h==null?void 0:h.v;if(h!==void 0&&p!==D)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return s},has(d,l){var p;if(l===oe)return!0;var s=r.get(l),u=s!==void 0&&s.v!==D||Reflect.has(d,l);if(s!==void 0||b!==null&&(!u||(p=ge(d,l))!=null&&p.writable)){s===void 0&&(s=O(u?pe(d[l],c):D),r.set(l,s));var h=g(s);if(h===D)return!1}return u},set(d,l,s,u){var I;var h=r.get(l),p=l in d;if(o&&l==="length")for(var f=s;f<h.v;f+=1){var m=r.get(f+"");m!==void 0?M(m,D):f in d&&(m=O(D),r.set(f+"",m))}h===void 0?(!p||(I=ge(d,l))!=null&&I.writable)&&(h=O(void 0),M(h,pe(s,c)),r.set(l,h)):(p=h.v!==D,M(h,pe(s,c)));var y=Reflect.getOwnPropertyDescriptor(d,l);if(y!=null&&y.set&&y.set.call(u,s),!p){if(o&&typeof l=="string"){var v=r.get("length"),P=Number(l);Number.isInteger(P)&&P>=v.v&&M(v,P+1)}Wn(a)}return!0},ownKeys(d){g(a);var l=Reflect.ownKeys(d).filter(h=>{var p=r.get(h);return p===void 0||p.v!==D});for(var[s,u]of r)u.v!==D&&!(s in d)&&l.push(s);return l},setPrototypeOf(){ui()}})}function Wn(t,e=1){M(t,t.v+e)}var Dn,ht,ut;function Mi(){if(Dn===void 0){Dn=window;var t=Element.prototype,e=Node.prototype;ht=ge(e,"firstChild").get,ut=ge(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Ii(t=""){return document.createTextNode(t)}function Le(t){return ht.call(t)}function Xe(t){return ut.call(t)}function S(t,e){return Le(t)}function Si(t,e){{var n=Le(t);return n instanceof Comment&&n.data===""?Xe(n):n}}function Q(t,e=1,n=!1){let i=t;for(;e--;)i=Xe(i);return i}function Ei(t){t.textContent=""}function je(t){var e=J|te;b===null?e|=le:b.f|=at;const n={children:null,ctx:_,deps:null,equals:st,f:e,fn:t,reactions:null,v:null,version:0,parent:b};if(A!==null&&A.f&J){var i=A;(i.children??(i.children=[])).push(n)}return n}function cn(t){const e=je(t);return e.equals=kn,e}function pt(t){var e=t.children;if(e!==null){t.children=null;for(var n=0;n<e.length;n+=1){var i=e[n];i.f&J?Tn(i):ce(i)}}}function ft(t){var e,n=b;K(t.parent);try{pt(t),e=Mt(t)}finally{K(n)}return e}function mt(t){var e=ft(t),n=(me||t.f&le)&&t.deps!==null?be:W;F(t,n),t.equals(e)||(t.v=e,t.version=Pt())}function Tn(t){pt(t),Ee(t,0),F(t,Qe),t.v=t.children=t.deps=t.ctx=t.reactions=null}function gt(t){b===null&&A===null&&li(),A!==null&&A.f&le&&si(),Pn&&ai()}function qi(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function we(t,e,n,i=!0){var r=(t&Re)!==0,o=b,a={ctx:_,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|te,first:null,fn:e,last:null,next:null,parent:r?null:o,prev:null,teardown:null,transitions:null,version:0};if(n){var c=ye;try{zn(!0),$e(a),a.f|=ni}catch(s){throw ce(a),s}finally{zn(c)}}else e!==null&&Je(a);var d=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&at)===0;if(!d&&!r&&i&&(o!==null&&qi(a,o),A!==null&&A.f&J)){var l=A;(l.children??(l.children=[])).push(a)}return a}function Ri(t){const e=we(qe,null,!1);return F(e,W),e.teardown=t,e}function dn(t){gt();var e=b!==null&&(b.f&j)!==0&&_!==null&&!_.m;if(e){var n=_;(n.e??(n.e=[])).push({fn:t,effect:b,reaction:A})}else{var i=Cn(t);return i}}function Qi(t){return gt(),ke(t)}function $i(t){const e=we(Re,t,!0);return()=>{ce(e)}}function Cn(t){return we(ot,t,!1)}function yt(t,e){var n=_,i={effect:null,ran:!1};n.l.r1.push(i),i.effect=ke(()=>{t(),!i.ran&&(i.ran=!0,M(n.l.r2,!0),ae(e))})}function bt(){var t=_;ke(()=>{if(g(t.l.r2)){for(var e of t.l.r1){var n=e.effect;n.f&W&&F(n,be),Ae(n)&&$e(n),e.ran=!1}t.l.r2.v=!1}})}function ke(t){return we(qe,t,!0)}function Y(t){return xn(t)}function xn(t,e=0){return we(qe|vn|e,t,!0)}function Se(t,e=!0){return we(qe|j,t,!0,e)}function vt(t){var e=t.teardown;if(e!==null){const n=Pn,i=A;Bn(!0),ie(null);try{e.call(null)}finally{Bn(n),ie(i)}}}function wt(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var n=0;n<e.length;n+=1)Tn(e[n])}}function kt(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var i=n.next;ce(n,e),n=i}}function Wi(t){for(var e=t.first;e!==null;){var n=e.next;e.f&j||ce(e),e=n}}function ce(t,e=!0){var n=!1;if((e||t.f&ii)&&t.nodes_start!==null){for(var i=t.nodes_start,r=t.nodes_end;i!==null;){var o=i===r?null:Xe(i);i.remove(),i=o}n=!0}kt(t,e&&!n),wt(t),Ee(t,0),F(t,Qe);var a=t.transitions;if(a!==null)for(const d of a)d.stop();vt(t);var c=t.parent;c!==null&&c.first!==null&&At(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function At(t){var e=t.parent,n=t.prev,i=t.next;n!==null&&(n.next=i),i!==null&&(i.prev=n),e!==null&&(e.first===t&&(e.first=i),e.last===t&&(e.last=n))}function hn(t,e){var n=[];_n(t,n,!0),Tt(n,()=>{ce(t),e&&e()})}function Tt(t,e){var n=t.length;if(n>0){var i=()=>--n||e();for(var r of t)r.out(i)}else e()}function _n(t,e,n){if(!(t.f&Z)){if(t.f^=Z,t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&e.push(a);for(var i=t.first;i!==null;){var r=i.next,o=(i.f&wn)!==0||(i.f&j)!==0;_n(i,e,o?n:!1),i=r}}}function Fe(t){Ct(t,!0)}function Ct(t,e){if(t.f&Z){Ae(t)&&$e(t),t.f^=Z;for(var n=t.first;n!==null;){var i=n.next,r=(n.f&wn)!==0||(n.f&j)!==0;Ct(n,r?e:!1),n=i}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||e)&&o.in()}}let un=!1,pn=[];function Di(){un=!1;const t=pn.slice();pn=[],ln(t)}function xt(t){un||(un=!0,queueMicrotask(Di)),pn.push(t)}function zi(t){throw new Error("lifecycle_outside_component")}let Ue=!1,ye=!1,Pn=!1;function zn(t){ye=t}function Bn(t){Pn=t}let fn=[],Pe=0;let A=null;function ie(t){A=t}let b=null;function K(t){b=t}let V=null;function Bi(t){V=t}let R=null,z=0,ne=null;function Ni(t){ne=t}let _t=0,me=!1,_=null;function Pt(){return++_t}function Ye(){return!ve||_!==null&&_.l===null}function Ae(t){var a,c;var e=t.f;if(e&te)return!0;if(e&be){var n=t.deps,i=(e&le)!==0;if(n!==null){var r;if(e&He){for(r=0;r<n.length;r++)((a=n[r]).reactions??(a.reactions=[])).push(t);t.f^=He}for(r=0;r<n.length;r++){var o=n[r];if(Ae(o)&&mt(o),i&&b!==null&&!me&&!((c=o==null?void 0:o.reactions)!=null&&c.includes(t))&&(o.reactions??(o.reactions=[])).push(t),o.version>t.version)return!0}}i||F(t,W)}return!1}function Oi(t,e,n){throw t}function Mt(t){var h;var e=R,n=z,i=ne,r=A,o=me,a=V,c=_,d=t.f;R=null,z=0,ne=null,A=d&(j|Re)?null:t,me=!ye&&(d&le)!==0,V=null,_=t.ctx;try{var l=(0,t.fn)(),s=t.deps;if(R!==null){var u;if(Ee(t,z),s!==null&&z>0)for(s.length=z+R.length,u=0;u<R.length;u++)s[z+u]=R[u];else t.deps=s=R;if(!me)for(u=z;u<s.length;u++)((h=s[u]).reactions??(h.reactions=[])).push(t)}else s!==null&&z<s.length&&(Ee(t,z),s.length=z);return l}finally{R=e,z=n,ne=i,A=r,me=o,V=a,_=c}}function Hi(t,e){let n=e.reactions;if(n!==null){var i=n.indexOf(t);if(i!==-1){var r=n.length-1;r===0?n=e.reactions=null:(n[i]=n[r],n.pop())}}n===null&&e.f&J&&(R===null||!R.includes(e))&&(F(e,be),e.f&(le|He)||(e.f^=He),Ee(e,0))}function Ee(t,e){var n=t.deps;if(n!==null)for(var i=e;i<n.length;i++)Hi(t,n[i])}function $e(t){var e=t.f;if(!(e&Qe)){F(t,W);var n=b;b=t;try{e&vn?Wi(t):kt(t),wt(t),vt(t);var i=Mt(t);t.teardown=typeof i=="function"?i:null,t.version=_t}catch(r){Oi(r)}finally{b=n}}}function Li(){Pe>1e3&&(Pe=0,ci()),Pe++}function ji(t){var e=t.length;if(e!==0){Li();var n=ye;ye=!0;try{for(var i=0;i<e;i++){var r=t[i];r.f&W||(r.f^=W);var o=[];It(r,o),Fi(o)}}finally{ye=n}}}function Fi(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var i=t[n];!(i.f&(Qe|Z))&&Ae(i)&&($e(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null?At(i):i.fn=null))}}function Ui(){if(Ue=!1,Pe>1001)return;const t=fn;fn=[],ji(t),Ue||(Pe=0)}function Je(t){Ue||(Ue=!0,queueMicrotask(Ui));for(var e=t;e.parent!==null;){e=e.parent;var n=e.f;if(n&(Re|j)){if(!(n&W))return;e.f^=W}}fn.push(e)}function It(t,e){var n=t.first,i=[];e:for(;n!==null;){var r=n.f,o=(r&j)!==0,a=o&&(r&W)!==0;if(!a&&!(r&Z))if(r&qe){o?n.f^=W:Ae(n)&&$e(n);var c=n.first;if(c!==null){n=c;continue}}else r&ot&&i.push(n);var d=n.next;if(d===null){let u=n.parent;for(;u!==null;){if(t===u)break e;var l=u.next;if(l!==null){n=l;continue e}u=u.parent}}n=d}for(var s=0;s<i.length;s++)c=i[s],e.push(c),It(c,e)}function g(t){var c;var e=t.f,n=(e&J)!==0;if(n&&e&Qe){var i=ft(t);return Tn(t),i}if(A!==null){V!==null&&V.includes(t)&&pi();var r=A.deps;R===null&&r!==null&&r[z]===t?z++:R===null?R=[t]:R.push(t),ne!==null&&b!==null&&b.f&W&&!(b.f&j)&&ne.includes(t)&&(F(b,te),Je(b))}else if(n&&t.deps===null){var o=t,a=o.parent;a!==null&&!((c=a.deriveds)!=null&&c.includes(o))&&(a.deriveds??(a.deriveds=[])).push(o)}return n&&(o=t,Ae(o)&&mt(o)),t.v}function ae(t){const e=A;try{return A=null,t()}finally{A=e}}const Gi=~(te|be|W);function F(t,e){t.f=t.f&Gi|e}function Nn(t,e=1){var n=+g(t);return M(t,n+e),n}function en(t,e=!1,n){_={p:_,c:null,e:null,m:!1,s:t,x:null,l:null},ve&&!e&&(_.l={s:null,u:null,r1:[],r2:O(!1)})}function nn(t){const e=_;if(e!==null){const a=e.e;if(a!==null){var n=b,i=A;e.e=null;try{for(var r=0;r<a.length;r++){var o=a[r];K(o.effect),ie(o.reaction),Cn(o.fn)}}finally{K(n),ie(i)}}_=e.p,e.m=!0}return{}}function Zi(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(oe in t)mn(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&oe in n&&mn(n)}}}function mn(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let i in t)try{mn(t[i],e)}catch{}const n=Oe(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const i=rt(n);for(let r in i){const o=i[r].get;if(o)try{o.call(t)}catch{}}}}}let On=!1;function Vi(){On||(On=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const n of t.target.elements)(e=n.__on_r)==null||e.call(n)})},{capture:!0}))}function St(t){var e=A,n=b;ie(null),K(null);try{return t()}finally{ie(e),K(n)}}function Et(t,e,n,i=n){t.addEventListener(e,()=>St(n));const r=t.__on_r;r?t.__on_r=()=>{r(),i()}:t.__on_r=i,Vi()}const Ki=new Set,Hn=new Set;function Xi(t,e,n,i){function r(o){if(i.capture||_e.call(e,o),!o.cancelBubble)return St(()=>n.call(this,o))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?xt(()=>{e.addEventListener(t,r,i)}):e.addEventListener(t,r,i),r}function Ge(t,e,n,i,r){var o={capture:i,passive:r},a=Xi(t,e,n,o);(e===document.body||e===window||e===document)&&Ri(()=>{e.removeEventListener(t,a,o)})}function _e(t){var P;var e=this,n=e.ownerDocument,i=t.type,r=((P=t.composedPath)==null?void 0:P.call(t))||[],o=r[0]||t.target,a=0,c=t.__root;if(c){var d=r.indexOf(c);if(d!==-1&&(e===document||e===window)){t.__root=e;return}var l=r.indexOf(e);if(l===-1)return;d<=l&&(a=d)}if(o=r[a]||t.target,o!==e){Xt(t,"currentTarget",{configurable:!0,get(){return o||n}});var s=A,u=b;ie(null),K(null);try{for(var h,p=[];o!==null;){var f=o.assignedSlot||o.parentNode||o.host||null;try{var m=o["__"+i];if(m!==void 0&&!o.disabled)if(yn(m)){var[y,...v]=m;y.apply(o,[t,...v])}else m.call(o,t)}catch(I){h?p.push(I):h=I}if(t.cancelBubble||f===e||f===null)break;o=f}if(h){for(let I of p)queueMicrotask(()=>{throw I});throw h}}finally{t.__root=e,delete t.currentTarget,ie(s),K(u)}}}function Yi(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function Ln(t,e){var n=b;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function de(t,e){var n=(e&xi)!==0,i=(e&_i)!==0,r,o=!t.startsWith("<!>");return()=>{r===void 0&&(r=Yi(o?t:"<!>"+t),n||(r=Le(r)));var a=i?document.importNode(r,!0):r.cloneNode(!0);if(n){var c=Le(a),d=a.lastChild;Ln(c,d)}else Ln(a,a);return a}}function re(t,e){t!==null&&t.before(e)}const Ji=["touchstart","touchmove"];function er(t){return Ji.includes(t)}function fe(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function nr(t,e){return tr(t,e)}const ue=new Map;function tr(t,{target:e,anchor:n,props:i={},events:r,context:o,intro:a=!0}){Mi();var c=new Set,d=u=>{for(var h=0;h<u.length;h++){var p=u[h];if(!c.has(p)){c.add(p);var f=er(p);e.addEventListener(p,_e,{passive:f});var m=ue.get(p);m===void 0?(document.addEventListener(p,_e,{passive:f}),ue.set(p,1)):ue.set(p,m+1)}}};d(bn(Ki)),Hn.add(d);var l=void 0,s=$i(()=>{var u=n??e.appendChild(Ii());return Se(()=>{if(o){en({});var h=_;h.c=o}r&&(i.$$events=r),l=t(u,i)||{},o&&nn()}),()=>{var f;for(var h of c){e.removeEventListener(h,_e);var p=ue.get(h);--p===0?(document.removeEventListener(h,_e),ue.delete(h)):ue.set(h,p)}Hn.delete(d),jn.delete(l),u!==n&&((f=u.parentNode)==null||f.removeChild(u))}});return jn.set(l,s),l}let jn=new WeakMap;function qt(t,e,n,i=null,r=!1){var o=t,a=null,c=null,d=null,l=r?wn:0;xn(()=>{d!==(d=!!e())&&(d?(a?Fe(a):a=Se(()=>n(o)),c&&hn(c,()=>{c=null})):(c?Fe(c):i&&(c=Se(()=>i(o))),a&&hn(a,()=>{a=null})))},l)}function ir(t,e){return e}function rr(t,e,n,i){for(var r=[],o=e.length,a=0;a<o;a++)_n(e[a].e,r,!0);var c=o>0&&r.length===0&&n!==null;if(c){var d=n.parentNode;Ei(d),d.append(n),i.clear(),ee(t,e[0].prev,e[o-1].next)}Tt(r,()=>{for(var l=0;l<o;l++){var s=e[l];c||(i.delete(s.k),ee(t,s.prev,s.next)),ce(s.e,!c)}})}function or(t,e,n,i,r,o=null){var a=t,c={flags:e,items:new Map,first:null},d=null,l=!1;xn(()=>{var s=n(),u=yn(s)?s:s==null?[]:bn(s),h=u.length;if(!(l&&h===0)){l=h===0;{var p=A;ar(u,c,a,r,e,(p.f&Z)!==0,i)}o!==null&&(h===0?d?Fe(d):d=Se(()=>o(a)):d!==null&&hn(d,()=>{d=null})),n()}})}function ar(t,e,n,i,r,o,a){var c=t.length,d=e.items,l=e.first,s=l,u,h=null,p=[],f=[],m,y,v,P;for(P=0;P<c;P+=1){if(m=t[P],y=a(m,P),v=d.get(y),v===void 0){var I=s?s.e.nodes_start:n;h=lr(I,e,h,h===null?e.first:h.next,m,y,P,i,r),d.set(y,h),p=[],f=[],s=h.next;continue}if(sr(v,m,P),v.e.f&Z&&Fe(v.e),v!==s){if(u!==void 0&&u.has(v)){if(p.length<f.length){var B=f[0],x;h=B.prev;var E=p[0],q=p[p.length-1];for(x=0;x<p.length;x+=1)Fn(p[x],B,n);for(x=0;x<f.length;x+=1)u.delete(f[x]);ee(e,E.prev,q.next),ee(e,h,E),ee(e,q,B),s=B,h=q,P-=1,p=[],f=[]}else u.delete(v),Fn(v,s,n),ee(e,v.prev,v.next),ee(e,v,h===null?e.first:h.next),ee(e,h,v),h=v;continue}for(p=[],f=[];s!==null&&s.k!==y;)(o||!(s.e.f&Z))&&(u??(u=new Set)).add(s),f.push(s),s=s.next;if(s===null)continue;v=s}p.push(v),h=v,s=v.next}if(s!==null||u!==void 0){for(var w=u===void 0?[]:bn(u);s!==null;)(o||!(s.e.f&Z))&&w.push(s),s=s.next;var N=w.length;if(N>0){var X=null;rr(e,w,X,d)}}b.first=e.first&&e.first.e,b.last=h&&h.e}function sr(t,e,n,i){ct(t.v,e),t.i=n}function lr(t,e,n,i,r,o,a,c,d){var l=(d&yi)!==0,s=(d&vi)===0,u=l?s?An(r):O(r):r,h=d&bi?O(a):a,p={i:h,v:u,k:o,a:null,e:null,prev:n,next:i};try{return p.e=Se(()=>c(t,u,h),Pi),p.e.prev=n&&n.e,p.e.next=i&&i.e,n===null?e.first=p:(n.next=p,n.e.next=p.e),i!==null&&(i.prev=p,i.e.prev=p.e),p}finally{}}function Fn(t,e,n){for(var i=t.next?t.next.e.nodes_start:n,r=e?e.e.nodes_start:n,o=t.e.nodes_start;o!==i;){var a=Xe(o);r.before(o),o=a}}function ee(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function cr(t,e,n,i){var r=t.__attributes??(t.__attributes={});r[e]!==(r[e]=n)&&(n==null?t.removeAttribute(e):typeof n!="string"&&dr(t).includes(e)?t[e]=n:t.setAttribute(e,n))}var Un=new Map;function dr(t){var e=Un.get(t.nodeName);if(e)return e;Un.set(t.nodeName,e=[]);for(var n,i=Oe(t),r=Element.prototype;r!==i;){n=rt(i);for(var o in n)n[o].set&&e.push(o);i=Oe(i)}return e}function Gn(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function hr(t,e,n=e){var i=Ye();Et(t,"input",()=>{var r=Zn(t)?Vn(t.value):t.value;n(r),i&&r!==(r=e())&&(t.value=r??"")}),ke(()=>{var r=e();Zn(t)&&r===Vn(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function ur(t,e,n=e){Et(t,"change",()=>{var i=t.checked;n(i)}),e()==null&&n(!1),ke(()=>{var i=e();t.checked=!!i})}function Zn(t){var e=t.type;return e==="number"||e==="range"}function Vn(t){return t===""?null:+t}function Kn(t,e){return t===e||(t==null?void 0:t[oe])===e}function pr(t={},e,n,i){return Cn(()=>{var r,o;return ke(()=>{r=o,o=[],ae(()=>{t!==n(...o)&&(e(t,...o),r&&Kn(n(...r),t)&&e(null,...r))})}),()=>{xt(()=>{o&&Kn(n(...o),t)&&e(null,...o)})}}),t}function Rt(t=!1){const e=_,n=e.l.u;if(!n)return;let i=()=>Zi(e.s);if(t){let r=0,o={};const a=je(()=>{let c=!1;const d=e.s;for(const l in d)d[l]!==o[l]&&(o[l]=d[l],c=!0);return c&&r++,r});i=()=>g(a)}n.b.length&&Qi(()=>{Xn(e,i),ln(n.b)}),dn(()=>{const r=ae(()=>n.m.map(ei));return()=>{for(const o of r)typeof o=="function"&&o()}}),n.a.length&&dn(()=>{Xn(e,i),ln(n.a)})}function Xn(t,e){if(t.l.s)for(const n of t.l.s)g(n);e()}let ze=!1;function fr(t){var e=ze;try{return ze=!1,[t(),ze]}finally{ze=e}}function Yn(t){for(var e=b,n=b;e!==null&&!(e.f&(j|Re));)e=e.parent;try{return K(e),t()}finally{K(n)}}function Ne(t,e,n,i){var q;var r=(n&wi)!==0,o=!ve||(n&ki)!==0,a=(n&Ti)!==0,c=(n&Ci)!==0,d=!1,l;a?[l,d]=fr(()=>t[e]):l=t[e];var s=oe in t||ri in t,u=((q=ge(t,e))==null?void 0:q.set)??(s&&a&&e in t?w=>t[e]=w:void 0),h=i,p=!0,f=!1,m=()=>(f=!0,p&&(p=!1,c?h=ae(i):h=i),h);l===void 0&&i!==void 0&&(u&&o&&di(),l=m(),u&&u(l));var y;if(o)y=()=>{var w=t[e];return w===void 0?m():(p=!0,f=!1,w)};else{var v=Yn(()=>(r?je:cn)(()=>t[e]));v.f|=ti,y=()=>{var w=g(v);return w!==void 0&&(h=void 0),w===void 0?h:w}}if(!(n&Ai))return y;if(u){var P=t.$$legacy;return function(w,N){return arguments.length>0?((!o||!N||P||d)&&u(N?y():w),w):y()}}var I=!1,B=!1,x=An(l),E=Yn(()=>je(()=>{var w=y(),N=g(x);return I?(I=!1,B=!0,N):(B=!1,x.v=w)}));return r||(E.equals=kn),function(w,N){if(arguments.length>0){const X=N?g(E):o&&a?pe(w):w;return E.equals(X)||(I=!0,M(x,X),f&&h!==void 0&&(h=X),ae(()=>g(E))),w}return g(E)}}function Qt(t){_===null&&zi(),ve&&_.l!==null?mr(_).m.push(t):dn(()=>{const e=ae(t);if(typeof e=="function")return e})}function mr(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const gr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gr);mi();function $t(t){let e=t.length;for(;e!=0;){let n=Math.floor(Math.random()*e);e--,[t[e],t[n]]=[t[n],t[e]]}return t}function yr(t){const n=new Date().getTime()-t.getTime();if(n<0)throw new Error("The provided date is in the future.");const i=Math.floor(n/(1e3*60*60)),r=Math.floor(n%(1e3*60*60)/(1e3*60)),o=Math.floor(n%(1e3*60)/1e3);return[i.toString().padStart(2,"0"),r.toString().padStart(2,"0"),o.toString().padStart(2,"0")].join(":")}var br=de('<form class="svelte-sav0zk"><fieldset class="svelte-sav0zk"></fieldset> <footer class="svelte-sav0zk"><button type="submit" class="disabled:hidden svelte-sav0zk">Submit</button></footer></form>');function vr(t,e){en(e,!1);let n=Ne(e,"onSubmit",8),i=Ne(e,"answered",8,!1),r=Ne(e,"src",8),o=G(document.createElement("fieldset"));function a(l){l.preventDefault();const s=l.target;if(!(s instanceof HTMLFormElement))throw new Error("Not a form");const h=new FormData(s).get("answer");return n()(h==="correct"),!0}Qt(()=>{var u;lt(o,g(o).innerHTML=r());const l=g(o).querySelector("ul");if(!l)throw new Error("No answer set");const s=$t(Array.from(l.children));for(const h of s){const p=h.innerHTML,f=((u=h.textContent)==null?void 0:u.startsWith("✅"))??!1,m=document.createElement("label");m.className="grid grid-cols-[1.5rem,1fr] gap-x-2 items-baseline",m.innerHTML=p.replace(/[✅❌] /g,"");const y=document.createElement("input");y.type="radio",y.name="answer",y.required=!0,f&&(y.value="correct"),m.prepend(y),h.replaceChildren(m),h.className="mb-4",l.appendChild(h)}}),Rt();var c=br(),d=S(c);pr(d,l=>M(o,l),()=>g(o)),Y(()=>cr(c,"data-answered",i())),Ge("submit",c,a),re(t,c),nn()}const wr=`## Question: 1 of 125\r
\r
A patient has managed care insurance and has been referred to a specialist for gastric bypass surgery. Which of the following is needed to ensure payment?\r
\r
- Fee schedule\r
- ✅ Preauthorization\r
- Concurrent review\r
- Retrospective review\r
\r
## Question: 2 of 125\r
\r
In which of the following scenarios is it appropriate to release a patient's psychiatric records without the patient's consent?\r
\r
- ✅ When the patient is being investigated by the police\r
- When a provider is requesting medical records for a new patient\r
- When the patient admits themselves into a facility\r
- When the patient is receiving hospice care\r
\r
## Question: 3 of 125\r
\r
Which of the following is a document used to analyze accounts receivable based on dates of service?\r
\r
- Explanation of benefits (EOB)\r
- Remittance advice (RA)\r
- Itemized statement\r
- ✅ Aging report\r
\r
## Question: 4 of 125\r
\r
A patient is covered by Medicare through managed care.\r
Which of the following parts of Medicare includes this coverage?\r
\r
- Part A\r
- Part B\r
- ✅ Part C\r
- Part D\r
\r
## Question: 5 of 125\r
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
## Question: 6 of 125\r
\r
Which of the following requires an authorization to release protected health information (PHI)?\r
\r
- Processing an insurance claim\r
- ✅ Life insurance policy\r
- _Subpoena duces tecum_\r
- Reporting communicable diseases\r
\r
## Question: 7 of 125\r
\r
Which of the following statements is true when determining patient financial responsibility by reviewing the remittance advice?\r
\r
- Any services denied for erroneous claim data are the responsibility of the patient.\r
- ✅ Any coinsurance, copayments, or deductibles should be collected from the patient.\r
- The difference between the billed amount and the allowed amount should be collected from the patient.\r
- Claims not billed to a third-party payer within the correct time period should be collected from the patient.\r
\r
## Question: 8 of 125\r
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
## Question: 9 of 125\r
\r
A billing and coding specialist is reviewing a remittance advice that has a deductible of $100 indicated for one of the claims.\r
The provider asks the specialist to write it off. Which of the following describes this scenario?\r
\r
- ✅ Fraud\r
- Abuse\r
- Adjudication\r
- Spend down\r
\r
## Question: 10 of 125\r
\r
A billing and coding specialist is verifying coverage for a Medicare beneficiary. Which of the following determines Medicare coverage of services on a national level?\r
\r
- ✅ NCD\r
- PAR\r
- LCD\r
- EDI\r
\r
## Question: 11 of 125\r
\r
Which of the following is a specified amount of money that a patient who has a preferred provider organization (PPO) plan is required to pay for each visit or medical service?\r
\r
- Premium\r
- ✅ Copayment\r
- Coinsurance\r
- Deductible\r
\r
## Question: 12 of 125\r
\r
For which of the following is the provider responsible?\r
\r
- Coinsurance\r
- ✅ Professional courtesy\r
- Copay\r
- Allowed amount\r
\r
## Question: 13 of 125\r
\r
A patient's employer has not submitted a premium payment for the company's commercial insurance plan. Which of the following is the claim\r
status the provider will receive for any claims sent to the third-party payer?\r
\r
- Invalid\r
- Suspended\r
- ✅ Denied\r
- Incomplete\r
\r
## Question: 14 of 125\r
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
## Question: 15 of 125\r
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
## Question: 16 of 125\r
\r
Which of the following identifies improper payments made for CMS claims?\r
\r
- Office of Inspector General (OIG)\r
- Quality Improvement Organizations (QIOs)\r
- ✅ Recovery Audit Contractors (RACs)\r
- Medicare Administrative Contractors (MACs)\r
\r
## Question: 17 of 125\r
\r
A billing and coding specialist is completing a claim to be submitted for Blue Cross Blue Shield by a provider who used to be in private practice\r
but was recently hired by a group practice. Which of the following is true regarding the provider's national provider identifier (NPI)?\r
\r
- ✅ The provider's individual NPI for the group practice is the same as the one from the private practice.\r
- The claim has to wait to be submitted until a new NPI is assigned to the provider.\r
- Since the provider has joined a group, only the group's NPI is listed on the claim.\r
- The provider's Social Security number can be substituted for the NPI temporarily.\r
\r
## Question: 18 of 125\r
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
## Question: 19 of 125\r
\r
Which of the following should be included on a claim form that is sent from a specialist to a managed health care organization?\r
\r
- A claims adjustment reason code\r
- A prior authorization number\r
- The referring provider's Social Security number (SSN)\r
- ✅ The referring provider's national provider identifier (NPI)\r
\r
## Question: 20 of 125\r
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
## Question: 21 of 125\r
\r
Which of the following terms describes the amount the patient must pay for a service when they have an insurance plan benefit that pays 70% of\r
the allowed amount and the patient is responsible for 30% of the allowed amount?\r
\r
- ✅ Coinsurance\r
- Deductible\r
- Premium\r
- Copayment\r
\r
## Question: 22 of 125\r
\r
A married couple each have group insurance through their employers. The patient has an appointment with the provider. Which insurance\r
should be used as primary for the appointment?\r
\r
- The partner's policy\r
- The policy belonging to the older person\r
- The policy belonging to the person who has their birthday first in the calendar year\r
- ✅ The patient's policy\r
\r
## Question: 23 of 125\r
\r
A provider accepts assignment for a patient who has a $10 copayment and has already met $100 of their $150 deductible. The office charge is\r
$100 and the allowed amount is $70. How much should the provider's office adjust off the patient's account?\r
\r
- ✅ $30\r
- $90\r
- $10\r
- $50\r
\r
## Question: 24 of 125\r
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
## Question: 25 of 125\r
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
## Question: 26 of 125\r
\r
When coding for outpatient and professional services and procedures, a billing and coding specialist must sequence the diagnosis codes\r
according to ICD-10-CM guidelines. Which of the following describes the first listed diagnosis code on a claim?\r
\r
- ✅ Primary diagnosis\r
- Manifestation\r
- Late effect\r
- Assessment\r
\r
## Question: 27 of 125\r
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
## Question: 28 of 125\r
\r
Which of the following information is required to include on an Advance Beneficiary Notice (ABN) form?\r
\r
- CPT® codes\r
- ✅ The reason Medicare may not pay\r
- ICD-10-CM codes\r
- The reason a patient needs a procedure\r
\r
## Question: 29 of 125\r
\r
A billing and coding specialist is reviewing a claim edit report and identifies a rejection for missing patient demographic information. Which of\r
the following missing pieces of patient demographic information would cause a rejection from the clearinghouse?\r
\r
- Middle name\r
- ✅ Date of birth\r
- Apartment number\r
- Emergency contact name\r
\r
## Question: 30 of 125\r
\r
Claims that are submitted without an NPI number will delay payment to the\r
provider due to which of the following?\r
\r
- The number is needed to identify the patient.\r
- ✅ The number is needed to identify the provider.\r
- The number is used to identify the claim.\r
- The number is used to preauthorize the service.\r
\r
## Question: 31 of 125\r
\r
The HIPAA Privacy Rule requires covered entities to track which of the following?\r
\r
- ✅ Release of protected health information (PHI)\r
- Claims adjudication\r
- Coordination of care\r
- Clinical trial participation\r
\r
## Question: 32 of 125\r
\r
Which of the following procedures refers to the removal of kidney stones?\r
\r
- Nephrolysis\r
- Nephrectomy\r
- ✅ Nephrolithotomy\r
- Nephrotomy\r
\r
## Question: 33 of 125\r
\r
A billing and coding specialist is using an accounts receivable aging report to determine which accounts should be sent to collections.\r
According to best practices, which of the following accounts should the specialist send to collections?\r
\r
- ✅ An account that has a balance of $600 and is 135 days old\r
- An account that has a balance of $1,500 and is 60 days old\r
- An account that has a balance of $60 and is 45 days old\r
- An account that has a balance of $500 and is 110 days old\r
\r
## Question: 34 of 125\r
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
## Question: 35 of 125\r
\r
A provider orders a comprehensive metabolic panel for a 70-year-old patient who has Medicare as their primary insurance. Which of the\r
following is required to inform the patient they may be responsible for payment?\r
\r
- HIPAA\r
- ✅ Advance Beneficiary Notice\r
- Assignment of benefits\r
- Claim form\r
\r
## Question: 36 of 125\r
\r
Which of the following actions by a billing and coding specialist is an example of fraud?\r
\r
- Submitting a claim with errors on it\r
- Violating participating provider agreements with third-party payers\r
- ✅ Billing for services not provided to obtain higher reimbursement\r
- Billing noncovered services as covered services in error\r
\r
## Question: 37 of 125\r
\r
Which of the following is an electronic form that is used to post reimbursements?\r
\r
- UB-04 claim form\r
- Electronic data interchange (EDI)\r
- CMS-1500 claim form\r
- ✅ Electronic remittance advice (ERA)\r
\r
## Question: 38 of 125\r
\r
Which of the following does a patient sign to allow payment of claims directly to the provider?\r
\r
- Advance Beneficiary Notice (ABN)\r
- ✅ Assignment of benefits statement\r
- Notice of Privacy Practices (NPP)\r
- Release of information form\r
\r
## Question: 39 of 125\r
\r
A billing and coding specialist is posting payments to accounts based on a remittance advice and discovers a denial of payment. Which of the\r
following codes indicates why reimbursement was denied?\r
\r
- ✅ Claims adjustment reason code\r
- Unlisted code\r
- Category II code\r
- Taxonomy code\r
\r
## Question: 40 of 125\r
\r
A billing and coding specialist should identify that which of the following statements is correct regarding the filing limit for Medicaid?\r
\r
- The filing limit is 1 year from the date of service.\r
- ✅ The filing limit varies from state to state.\r
- There is no filing limit for Medicaid.\r
- The filing limit is 90 days from the date of service.\r
\r
## Question: 41 of 125\r
\r
A patient was seen in an outpatient clinic for a cough, chest congestion, and a low-grade fever and was given the diagnosis of possible\r
pneumonia. How should a billing and coding specialist code this encounter using ICD-10-CM?\r
\r
- Cough, fever, pneumonia\r
- Pneumonia\r
- ✅ Cough, chest congestion, and low-grade fever\r
- Possible pneumonia\r
\r
## Question: 42 of 125\r
\r
A provider documents a patient's response to questions about various parts of the body. A billing and coding specialists should identify that\r
this information is included in which of the following sections of the note?\r
\r
- Past medical history\r
- Family history\r
- ✅ Review of systems\r
- Comprehensive examination\r
\r
## Question: 43 of 125\r
\r
Many third-party payers require that a patient pay a set amount of eligible charges per year before the patient's health care plan will begin to\r
pay benefits. This refers to which of the following terms?\r
\r
- Coinsurance\r
- Premium\r
- ✅ Deductible\r
- Copay\r
\r
## Question: 44 of 125\r
\r
A billing and coding specialist is preparing a claim for an esophagectomy.\r
Which of the following types of service is being provided?\r
\r
- Viewing\r
- Incision\r
- ✅ Removal\r
- Repair\r
\r
## Question: 45 of 125\r
\r
A billing and coding specialist is posting a payment received from Medicare.\r
The specialist should identify that which part of Medicare covers prescription costs?\r
\r
- Part A\r
- Part B\r
- Part C\r
- ✅ Part D\r
\r
## Question: 46 of 125\r
\r
A billing and coding specialist is performing a coordination of benefits check.\r
The patient has primary and secondary benefits. Which of the following applies to the guarantor?\r
\r
- They are responsible for obtaining preauthorization for services.\r
- They are responsible for providing the lowest possible cost of health care services.\r
- ✅ They are responsible for any charges that are incurred.\r
- They are responsible for submitting the claim for the secondary third-party payer.\r
\r
## Question: 47 of 125\r
\r
Which of the following processes is used to verify patient benefits and insurance coverage for an outpatient procedure?\r
\r
- Preadmission review\r
- ✅ Precertification\r
- Adjudication\r
- Coordination of benefits\r
\r
## Question: 48 of 125\r
\r
A billing and coding specialist is processing a claim for a new patient who came to the office for a sore throat. The provider diagnosed the\r
patient with tonsilitis and wrote a prescription for antibiotics. Which of the following codes should the specialist use?\r
\r
- 99213 Office or other outpatient visit for the evaluation and management of an established patient, which requires a medically appropriate history and/or examination and low level of medical decision making.\r
- 99393 Periodic comprehensive preventive medicine reevaluation and management of an individual including an age and gender appropriate history, exam, counseling/guidance/risk factor reduction interventions, and the ordering of laboratory/diagnostic procedures; established patient: late childhood (age 5 through 11 years)\r
- ✅ 99203 Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and low level of medical decision making.\r
- 99282 Emergency department visit for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and straightforward level of medical decision making.\r
\r
## Question: 49 of 125\r
\r
A billing and coding specialist is evaluating code assignments for a batch of claims. Which of the following should the specialist consult as a\r
resource to check for proper code assignment based on procedure-to-procedure (PTP) code pair edits and medically unlikely edits (MUEs)?\r
\r
- ✅ National correct Coding initiative (NCCI)\r
- Recovery audit contractor (RAC) program\r
- Medicare coverage database (MCD)\r
- Office of the inspector General (OIG)\r
\r
## Question: 50 of 125\r
\r
A patient has a new diagnosis of hypothyroidism. In which of the following body systems is the thyroid gland located?\r
\r
- Urinary system\r
- Digestive system\r
- ✅ Endocrine system\r
- Lymphatic system\r
\r
## Question: 51 of 125\r
\r
Which of the following government agencies is responsible for combating fraud and abuse in health insurance and health care delivery?\r
\r
- ✅ Office of inspector General (OIG)\r
- Compliance officer\r
- Department of Health and Human Services (HHS)\r
- Centers for Medicare and Medicaid Services (CMS)\r
\r
## Question: 52 of 125\r
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
## Question: 53 of 125\r
\r
A billing and coding specialist is contacted by a patient who requests a copy of\r
the remittance advice for a recently adjudicated claim. Which of the following actions should the specialist take?\r
\r
- ✅ Remove all information other than what pertains to the patient.\r
- Make a clear copy of the page where the patient's information is included.\r
- Explain to the patient that this information cannot be released to them.\r
- Refer the patient to their third-party payer for a copy of the remittance advice.\r
\r
## Question: 54 of 125\r
\r
Which of the following is the filing limit for claim submission for an outpatient service with TRICARE?\r
\r
- ✅ Within 1 year from the date of service\r
- Within 90 days from the date of service\r
- Within 60 days from the date of service\r
- Within 2 years from the date of service\r
\r
## Question: 55 of 125\r
\r
Which of the following is an example of a breach of patient confidentiality?\r
\r
- ✅ Discussing patient information in a public space\r
- Sharing patient information with the patient's health care team\r
- Releasing patient information to someone listed on the protected health information (PHI) disclosure form\r
- Giving patient information to an employer for a workers' compensation claim\r
\r
## Question: 56 of 125\r
\r
A billing and coding specialist is analyzing the health of a practice's revenue cycle using an aging report.\r
Which of the following categories of the report should contain the lowest percentage of accounts receivable?\r
\r
- 31 to 60 days\r
- ✅ Greater than 120 days\r
- 61 to 90 days\r
- 0 to 30 days\r
\r
## Question: 57 of 125\r
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
## Question: 58 of 125\r
\r
Which of the following is the purpose of coordination of benefits?\r
\r
- ✅ To prevent multiple third-party payers from paying benefits covered by other policies\r
- To compare payer edits and the patient's health plan\r
- To collect and verify information about the patient and provider by sorting claims upon submission\r
- To reduce the number of paper claims submitted\r
\r
## Question: 59 of 125\r
\r
Which of the following actions should a billing and coding specialist take when\r
submitting a claim to Medicaid for a patient who has primary and secondary insurance coverage?\r
\r
- ✅ Attach the remittance advice from the primary insurance along with the Medicaid claim.\r
- Submit the claim and Medicaid remittance advice to the secondary insurance.\r
- Attach the remittance advice from the patient's most recent visit to confirm Medicaid eligibility.\r
- Submit both claims simultaneously and then review the remittance advice from both to determine which one provided more coverage.\r
\r
## Question: 60 of 125\r
\r
Which of the following describes an insurance company that offers plans that pay health care providers who render services to patients?\r
\r
- Fee-for-service\r
- Guarantor\r
- ✅ Third-party payer\r
- Clearinghouse\r
\r
## Question: 61 of 125\r
\r
In which of the following departments should a patient be seen for a furuncle?\r
\r
- Cardiology\r
- ✅ Dermatology\r
- Otolaryngology\r
- Gastroenterology\r
\r
## Question: 62 of 125\r
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
## Question: 63 of 125\r
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
## Question: 64 of 125\r
\r
Which of the following is proper supportive documentation for reporting CPT® and ICD-10-CM codes for the removal of a skin lesion?\r
\r
- Approval on previous claim forms\r
- ✅ Operative report\r
- Encounter form\r
- Progress note\r
\r
## Question: 65 of 125\r
\r
Which of the following is a document about patient rights that is required to be signed by the patient to acknowledge receipt and can be\r
provided to the patient upon request?\r
\r
- ✅ Notice of Privacy Practices (NPP)\r
- General Equivalence Mappings (GEMs)\r
- UB-04 form\r
- Medicare Summary Notice (MSN)\r
\r
## Question: 66 of 125\r
\r
Which of the following requires companies with 20 or more workers to offer employees who are laid off the ability to buy into the company's health insurance coverage for 18 months?\r
\r
- Coordination of benefits (COB)\r
- Health insurance Portability and Accountability Act (HIPAA)\r
- ✅ Consolidated Omnibus Budget Reconciliation Act of 1985 (COBRA)\r
- Competitive medical plan (CMP)\r
\r
## Question: 67 of 125\r
\r
A billing and coding specialist is submitting an electronic claim for a procedure with modifier -22 for increased procedural services. Which of\r
the following actions should the specialist take?\r
\r
- ✅ Include an attachment to the claim.\r
- Contact the third-party payer.\r
- Inform the patient that the service is noncovered.\r
- Remove modifier -22 and submit the claim.\r
\r
## Question: 68 of 125\r
\r
A billing and coding specialist is reviewing provider notes to complete a claim. They need clarification on whether the procedure performed\r
was on the left side, right side, or bilaterally. Which of the following indicates laterality of the procedure for the claim?\r
\r
- A special report\r
- ✅ A modifier\r
- Pre-authorization\r
- An add-on code\r
\r
## Question: 69 of 125\r
\r
A billing and coding specialist is reviewing an operative report for a patient who had a graft. Which of the following is a tissue transplanted\r
from one person to another?\r
\r
- Autograft\r
- ✅ Allograft\r
- Alloplastic graft\r
- Xenograft\r
\r
## Question: 70 of 125\r
\r
A patient has health coverage through multiple third-party payers. A billing and coding specialist should identify that which of the following is\r
the payer of last resort?\r
\r
- ✅ Medicaid\r
- CHAMPVA\r
- Medicare\r
- TRICARE\r
\r
## Question: 71 of 125\r
\r
A surgeon performed a cholecystectomy for a patient. The billing and coding specialist does not know whether to code for an open or laparoscopic cholecystectomy. The specialist should query the provider to prevent which of the following types of fraud or abuse?\r
\r
- ✅ Upcoding\r
- Undercoding\r
- Bundling\r
- Unbundling\r
\r
## Question: 72 of 125\r
\r
A billing and coding specialist is coding a consultation in the provider's office. The provider documented the appropriate history and exam,\r
with low-level medical decision making. Which of the following Evaluation and Management (E/M) codes should the specialist report?\r
\r
- 99253 Inpatient or observation consultation for a new or established patient, which requires a medically appropriate history and/or examination and low level of medical decision making.\r
- 99284 Emergency department visit for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and moderate level of medical decision making.\r
- ✅ 99243 Office or other outpatient consultation for a new or established patient, which requires a medically appropriate history and/or examination and low level of medical decision making.\r
- 99291 Critical care, evaluation and management of the critically ill or critically injured patient; first 30-74 minutes.\r
\r
## Question: 73 of 125\r
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
## Question: 74 of 125\r
\r
Which of the following are required for professional services claims to specify the type of organization for the services rendered?\r
\r
- Qualifiers\r
- ✅ Place of service codes\r
- National provider identifier\r
- Modifiers\r
\r
## Question: 75 of 125\r
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
## Question: 76 of 125\r
\r
Chronic kidney disease is included in which of the following code sets?\r
\r
- CPT®\r
- ICD-10-PCS\r
- ✅ ICD-10-CM\r
- SNOMED\r
\r
## Question: 77 of 125\r
\r
Which of the following documents should a billing and coding specialist use to ensure that all payers are sending reimbursement within 45\r
days of claim submission?\r
\r
- Utilization review\r
- Fee schedule\r
- ✅ Aging report\r
- Remittance advice\r
\r
## Question: 78 of 125\r
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
## Question: 79 of 125\r
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
## Question: 80 of 125\r
\r
Which of the following is a valid type of authorization used to release medical information to the judicial system?\r
\r
- Consent for treatment form\r
- Deposition\r
- Signed release of information form\r
- ✅ _Subpoena duces tecum_\r
\r
## Question: 81 of 125\r
\r
Which of the following security features is required during transmission of protected health information and medical claims to third-party payers?\r
\r
- Unique user IDs and passwords\r
- Role-based access controls\r
- Electronic data interchange\r
- ✅ Encryption\r
\r
## Question: 82 of 125\r
\r
A claim was denied due to termination of coverage. The patient had recently obtained new insurance. Which of the following actions should the billing and coding specialist take?\r
\r
- Ask the patient to pay in full and submit the claim to the new third-party payer.\r
- Appeal the denial.\r
- Resubmit the claim to the original third-party payer.\r
- ✅ Obtain the patient's updated insurance and submit the claim to the new third-party payer.\r
\r
## Question: 83 of 125\r
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
## Question: 84 of 125\r
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
## Question: 85 of 125\r
\r
A billing and coding specialist is training a new specialist about submitting claims to a clearinghouse. Which of the following describes the\r
process completed by the clearinghouse before submitting claims to a third-party payer?\r
\r
- Adjudicating claims\r
- Requesting review by an insurance carrier for the reconsideration of unpaid claims\r
- Reviewing claims to verify accurate payment has been received\r
- ✅ Checking claims against payer edits for missing, incomplete, or invalid information\r
\r
## Question: 86 of 125\r
\r
Which of the following modifiers indicates that a patient has signed a Medicare Advance Beneficiary Notice (ABN)?\r
\r
- -GZ Expect item or service denied as not reasonable and necessary\r
- -E1 Upper left eyelid\r
- ✅ -GA Waiver of liability statement issued as required by payer policy\r
- -32 Mandated services\r
\r
## Question: 87 of 125\r
\r
Which of the following is used to communicate why a claim line item was denied or paid differently than it was billed?\r
\r
- ✅ Claims adjustment reason codes\r
- Scrubber report\r
- Provider taxonomy codes\r
- Claim status review\r
\r
## Question: 88 of 125\r
\r
A billing and coding specialist is reviewing a Medicare remittance advice (RA) and discovers a denial due to medical necessity. Which of the\r
following actions should the specialist take?\r
\r
- ✅ Check the local and national coverage determination policies for diagnosis requirements.\r
- Verify if secondary insurance is available to cover the charges.\r
- Use the electronic data interchange (EDI) to verify eligibility of the patient's benefits.\r
- Use a modifier to report the medical necessity.\r
\r
## Question: 89 of 125\r
\r
A billing and coding specialist is reviewing a patient's account and notes there is an outstanding balance that is 45 days old after third-party\r
payer reimbursement. Which of the following actions should the specialist take?\r
\r
- Submit a request to collections to receive payment for the outstanding balance.\r
- Record the outstanding balance as an uncollectible write-off.\r
- Give the patient a waiver.\r
- ✅ Send the patient an itemized statement to collect the outstanding balance.\r
\r
## Question: 90 of 125\r
\r
A billing and coding specialist is preparing a claim for an outpatient encounter. The patient was last seen in the office 2 years ago. Which of the\r
following Evaluation and Management (E/M) codes should the specialist use?\r
\r
- 99383 Initial comprehensive preventive medicine evaluation and management\r
- 99347 Home or residence visit for the evaluation and management of an established patient\r
- ✅ 99213 Office or other outpatient visit for the evaluation and management of an established patient\r
- 99203 Office or other outpatient visit for the evaluation and management of a new patient\r
\r
## Question: 91 of 125\r
\r
Which of the following are used to code provider and outpatient services?\r
\r
- ICD-10-PCS codes\r
- APCs\r
- DRGs\r
- ✅ CPT® codes\r
\r
## Question: 92 of 125\r
\r
A billing and coding specialist is collecting demographic information for a patient who lives in Hawaii and is an active duty service member.\r
The specialist should identify that the insured has which of the following types of insurance?\r
\r
- TRICARE Prime Overseas\r
- TRICARE for Life\r
- TRICARE Reserve Select\r
- ✅ TRICARE\r
\r
## Question: 93 of 125\r
\r
Which of the following describes the nature of a modifier?\r
\r
- Describes additional intra-service work that has occurred\r
- Identifies the place of service\r
- ✅ Indicates that an alteration to a service or procedure has occurred\r
- Identifies new technology was used\r
\r
## Question: 94 of 125\r
\r
A billing and coding specialist is reviewing an electronic remittance advice (ERA).\r
Which of the following gives additional information about the denial of reimbursement?\r
\r
- Electronic data interchange (EDI) receipt identifier\r
- Common data file\r
- ✅ Remark code\r
- Preauthorization\r
\r
## Question: 95 of 125\r
\r
Which of the following is a covered entity affected by HIPAA security rules?\r
\r
- A patient\r
- A beneficiary\r
- A family member of a guarantor\r
- ✅ A health care clearinghouse\r
\r
## Question: 96 of 125\r
\r
A patient's portion of the bill should be discussed with the patient before a procedure is performed for which of the following reasons?\r
\r
- To determine the procedure\r
- To verify insurance coverage\r
- To give the patient the option to negotiate their portion of the bill\r
- ✅ To ensure the patient understands how much they are responsible to pay\r
\r
## Question: 97 of 125\r
\r
A patient has a history of breast cancer that has metastasized to the liver and is undergoing chemotherapy today for the liver cancer. Which of\r
the following ICD-10-CM codes should be sequenced first?\r
\r
- C50.111 Primary breast cancer\r
- C78.7 Secondary liver cancer\r
- ✅ Z51.11 Chemotherapy\r
- Z90.3 History of breast cancer\r
\r
## Question: 98 of 125\r
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
## Question: 99 of 125\r
\r
A billing and coding specialist is processing a claim for a patient who has Medicare and Medicaid coverage. Which of the following is the type of\r
claim that is automatically adjudicated by Medicare and forwarded to Medicaid?\r
\r
- ✅ Crossover\r
- Medigap\r
- Managed care\r
- CHAMPVA\r
\r
## Question: 100 of 125\r
\r
A billing and coding specialist is preparing to create patient statements and has been asked to collect finance charges on any late payments.\r
According to the Truth in Lending Act (TILA), which of the following is the way the finance charges must be disclosed on the statement?\r
\r
- As an assigned dollar amount\r
- As a multiple of the outstanding balance\r
- ✅ As an annual percentage rate\r
- As an amount no higher than the outstanding balance\r
\r
## Question: 101 of 125\r
\r
A patient is preauthorized to receive vitamin B12 injections from January 1 to May 31. On June 2, the provider prescribes an additional 6\r
months of injections. In order for the patient to continue with coverage of care, which of the following should occur?\r
\r
- The patient should stop receiving the injections because the authorization has lapsed.\r
- The patient should stop receiving the injections and find a new provider.\r
- The provider should go ahead with the injections due to medical necessity.\r
- ✅ The patient's third-party payer should be contacted to obtain a new preauthorization.\r
\r
## Question: 102 of 125\r
\r
Which of the following describes the term "crossover" as it relates to Medicare?\r
\r
- ✅ When a third-party payer transfers data to allow coordination of benefits for a claim\r
- When more than one third-party payer pays for the same service\r
- When a third-party payer pays for a service twice\r
- When a third-party payer processes data to allow adjudication of a claim to occur\r
\r
## Question: 103 of 125\r
\r
Which of the following is the structure used for ICD-10-CM codes?\r
\r
- ✅ 3 to 7 alpha-numeric characters\r
- 5 numbers\r
- 5 alpha-numeric characters\r
- 2 letters\r
\r
## Question: 104 of 129\r
\r
Which of the following is issued to active duty uniformed service personnel for access to TRICARE benefits?\r
\r
- Advance Beneficiary Notice (ABN)\r
- ✅ Common access card\r
- Release of information\r
- TRICARE Prime\r
\r
## Question: 105 of 125\r
\r
Which of the following types of diagnosis code is to identify the presence of a pacemaker?\r
\r
- Symptom\r
- Late effect\r
- Manifestation\r
- ✅ Status\r
\r
## Question: 106 of 125\r
\r
Which of the following is the type of service code that can have three to five levels of service and covers office visits, hospital visits, and\r
consultations?\r
\r
- New and emerging technology\r
- Modifiers\r
- External causes of morbidity\r
- ✅ Evaluation and Management\r
\r
## Question: 107 of 125\r
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
## Question: 108 of 125\r
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
## Question: 109 of 125\r
\r
A patient had an x-ray for a fractured arm. The documentation does not indicate if the x-ray was performed on the right or left arm. Which of\r
the following actions should a billing and coding specialist take?\r
\r
- Ask the third-party payer.\r
- Submit the claim without a modifier.\r
- Contact the patient.\r
- ✅ Query the provider.\r
\r
## Question: 110 of 125\r
\r
A billing and coding specialist is coding a laceration repair and needs to determine the type of closure. The specialist queries the provider, who\r
confirms retention sutures were used. The specialist should code which of the following types of closure?\r
\r
- Simple (single layer)\r
- Intermediate (Layered closure)\r
- Partial-thickness (Epidermis and extending into the dermis) |\r
- ✅ Complex (Layered closure requiring additional corrections)\r
\r
## Question: 111 of 125\r
\r
Coding manuals use which of the following conventions?\r
\r
- Edits\r
- Icons\r
- Laws\r
- ✅ Fee schedules\r
\r
## Question: 112 of 125\r
\r
Which of the following introduced documentation guidelines to Medicare carriers to ensure that services paid for have been provided and\r
were medically necessary?\r
\r
- HIPAA\r
- OIG\r
- ✅ CMS\r
- AMA\r
\r
## Question: 113 of 125\r
\r
A billing and coding specialist is appealing a Medicare denial.\r
Which of the following is the first step in the appeals process?\r
\r
- Reconsideration\r
- Medicare Appeals Council review\r
- Judicial review\r
- ✅ Redetermination\r
\r
## Question: 114 of 125\r
\r
A billing and coding specialist is reviewing a remittance advice for a claim that was denied for medical necessity.\r
Which of the following is an example of this type of error?\r
\r
- The preauthorization for an appendectomy was not obtained.\r
- The patient's current demographic information was not entered correctly on the claim form.\r
- ✅ The ICD-10-CM code for tonsillitis was listed with the CPT® code for an appendectomy.\r
- Appendectomies are not covered by the patient's insurance plan.\r
\r
## Question: 115 of 125\r
\r
CPT® codes are used for which of the following concepts?\r
\r
- Medical necessity\r
- Compliance\r
- ✅ Revenue\r
- Collections\r
\r
## Question: 116 of 125\r
\r
Which of the following is an example of an informational modifier?\r
\r
- ✅ -24 Unrelated Evaluation and Management service by the same provider during a postoperative period\r
- -AA Anesthesia services performed personally by anesthesiologist\r
- -TC Technical component\r
- -82 Assistant surgeon (when qualified resident surgeon not available)\r
\r
## Question: 117 of 125\r
\r
An internal retrospective billing account audit prevents fraud and abuse by\r
reviewing and comparing completed claim forms with which of the following?\r
\r
- ✅ Documentation from patient encounters\r
- A subpoena\r
- Documentation of compliance plans\r
- An appeal letter\r
\r
## Question: 118 of 125\r
\r
Which of the following is a HIPAA compliance guideline affecting electronic health records?\r
\r
- The privacy requirements cover facilities' health information, whether paper or electronic.\r
- Electronic health records should be sent to the third-party payer on a claim form.\r
- ✅ The electronic transmission and code set standards require every provider to use the health care transactions, code sets, and identifiers.\r
- The Health Information Technology for Economic and Clinical Health (HITECH) Act encrypts provider-protected health information.\r
\r
## Question: 119 of 125\r
\r
Which of the following positions is required in a provider's office to comply with HIPAA regulations?\r
\r
- Security officer\r
- ✅ Privacy officer\r
- Claims examiner\r
- Chargemaster coordinator\r
\r
## Question: 120 of 125\r
\r
Two providers are having a conversation about a patient's test results at the nursing station. A different patient overhears them talking. This\r
type of privacy exposure is known as which of the following?\r
\r
- ✅ Incidental disclosure\r
- Fraud\r
- Malfeasance\r
- Negligence\r
\r
## Question: 121 of 125\r
\r
A billing and coding specialist is preparing a small claims court case against a patient for a delinquent account in the amount of $6,500. Which\r
of the following is a court order that allows payments on unsecured debt to be made directly from a defendant's paycheck?\r
\r
- Skip tracing\r
- ✅ Garnishment\r
- Automatic stay\r
- Lien\r
\r
## Question: 122 of 125\r
\r
A billing and coding specialist is submitting claims through a clearinghouse. The specialist should identify that which of the following actions is\r
performed by the clearinghouse?\r
\r
- Filing for reimbursement, reconciling payments of paid claims, and resubmitting denied claims to the provider\r
- Overseeing the federal Medicare and Medicaid programs\r
- Helping to develop U.S. standards for electronic data exchange\r
- ✅ Scrubbing claims, translating them to a standard format, then sending them to various third-party payers\r
\r
## Question: 123 of 125\r
\r
Which of the following do providers use to electronically submit claims?\r
\r
- Claim scrubbers\r
- ✅ Clearinghouse\r
- CMS-1500 claim form\r
- Electronic remittance advice (ERA)\r
\r
## Question: 124 of 125\r
\r
A billing and coding specialist is reviewing paperwork that indicates overpayment by Medicare for six patients over the past year. Which of the\r
following describes this process?\r
\r
- Prospective review\r
- Subpoena\r
- ✅ Audit\r
- Adjudication\r
\r
## Question: 125 of 125\r
\r
Which of the following prohibits a provider from referring Medicare patients to a clinical laboratory service in which the provider has a\r
financial interest?\r
\r
- Federal Anti-Kickback Statute\r
- Health Insurance Portability and Accountability Act (HIPAA)\r
- Consolidated Omnibus Budget Reconciliation Act (COBRA)\r
- ✅ Stark Law\r
`,kr=`## Question 1 of 100
On a remittance advice form, which of the following is responsible for writing off the difference between the amount billed and the amount allowed by the agreement?
- ✅ Provider
> The provider is responsible for writing off the difference between the amount billed and the amount allowed
- ❌ Guarantor
> The guarantor is not responsible for writing off the difference between the amount billed and the amount allowed.
- ❌ Patient
> The patient is not responsible for writing off the difference between the amount billed and the amount allowed.
- ❌ Third-party payer
> The third-party payer sets the allowed amount and is not responsible for writing off the difference between the amount billed and the amount allowed.

## Question 2 of 100
Which of the following codes are included in the ICD-10-CM code set?
- ❌ Prosthetics
> The ICD-10-CM code set includes a code for acquired absence of limb. Prosthetics codes are found in the CPT code set.
- ❌ Fracture care
> The ICD-10-CM code set includes a code for acquired absence of limb. Fracture care codes are found in the CPT code set.
- ✅ Acquired absence of limb
> The ICD-10-CM code set includes a code for acquired absence of limb.
- ❌ Immunization administration
> The ICD-10-CM code set includes a code for acquired absence of limb. Immunization administration codes are found in the CPT code set.
## Question 3 of 100
A patient has a resection of the intestines with anastomosis through the abdominal walls. Which of the following is a type of anastomosis?
- ✅ Colostomy
> A colostomy is a type of anastomosis, which is a surgical procedure that involves creating an opening through the abdominal wall.
- ❌ Laparotomy
> A laparotomy is a type of surgical opening
- ❌ Ileectomy
> An ileectomy is the removal of the ileum.
- ❌ Endoscopy
> An endoscopy is an explorative procedure.
## Question 4 of 100
Which of the following is the purpose of an internal review in a provider's office?
- ✅ To verify that the medical records and the billing record match
> The purpose of an internal review in a provider's office is to verify that the medical records and the billing record match, which protects the provider from sanctions or fines.
- ❌ To increase revenue for the provider
> Increasing revenue for providers is not the purpose of an internal review.
- ❌ To improve communication between the coding supervisors and coding professionals
> Improving communication between coding supervisors and coding professionals is not the purpose of an internal review.
- ❌ To protect patients from sanctions or fines
> Protecting patients from sanctions or fines is not the purpose of an internal review.
## Question 5 of 100
Which of the following is a valid ICD-10-CM principle?
- ❌ Assign codes to the lowest level of specificity.
> This is not a valid ICD-10-CM principle. Codes should be assigned to the highest level of specificity.
- ❌ Diagnoses should first be found in the tabular list and confirmed in the index.
> This is not a valid ICD-10-CM principle. Diagnoses should first be found in the index and confirmed in the tabular list.
- ❌ Late effect codes should be reported as secondary.
> This is not a valid ICD-10-CM principle. Late effect codes should be reported as primary.
- ✅ Code signs and symptoms in the absence of a definitive diagnosis.
> Signs and symptoms should be coded in the absence of a definitive diagnosis. Therefore, this is a valid ICD-10-CM principle.
## Question 6 of 100
Which of the following editing systems should a billing and coding specialist reference to determine if a supplies and materials code should be assigned to report a surgical tray used during an ambulatory procedure?

- ❌ Medically unlikely edits (MUEs)
> An MUE for a HCPCS and/or CPT® code is the maximum units of service that a provider can report under most circumstances for a single beneficiary on a single date of service.
- ✅ National Correct Coding Initiative (NCCI)
> NCCI is used to promote national correct coding methodologies and to control improper coding leading to inappropriate payment of claims. The specialist should reference NCCI to determine if a supplies and materials code should be assigned to report a surgical tray used during an ambulatory procedure.
- ❌ Local Coverage Determination (LCD)
> LCDs are guidelines for certain services and procedures that are developed to decide whether to cover a particular service in accordance with services that are defined as medically necessary by the Centers for Medicare and Medicaid Services (CMS).
- ❌ National Coverage Determination (NCD)
> NCDs are guidelines for certain services and procedures that are developed to decide whether to cover a particular service in accordance with services that are defined as medically necessary by the Centers for Medicare and Medicaid Services (CMS).
## Question 7 of 100
When should a billing and coding specialist initiate the collection of the information needed to process a patient's insurance claim form?
- ❌ When the patient signs the HIPAA form at check-in
> The specialist should collect information prior to the patient signing the HIPAA form at check-in.
- ✅ When the patient contacts the provider's office and schedules an appointment
> The specialist should initiate the collection of information needed to process a patient's insurance claim when the patient contacts the office and schedules an appointment.
- ❌ When the patient pays the copay or deductible
> The specialist should collect the information prior to the patient paying the copay or deductible.
- ❌ When the patient checks out of the provider's office
> The specialist should collect the information prior to the patient checking out of the provider's office.
## Question 8 of 100
A patient wants to see an endocrinologist for a consultation about their diabetes mellitus, but they must see their primary care provider (PCP) for a referral to an in-network specialist first. Which of the following types of insurance does the patient have?
- ❌ Preferred provider organization (PPO)
> PPO insurance plans are a network of care, but they do not require a PCP or referral
- ✅ Health Mainenance organization (HMO)
> HMO insurance plans require a referral from the PCP for a specialist consultation.
- ❌ Indemnity
> Indemnity plans are traditional plans and do not require a PCP or referral.
- ❌ Point of service (POS)
> POS plans do not require a referral. Patients are allowed to self-refer to out-of-network providers.
## Question 9 of 100
A billing and coding specialist is reviewing the procedure notes from a provider who selected a code indicating an incisional biopsy when the entirety of the patient's lesion was removed. The specialist should verify with the provider that which of the following types of procedures was performed?

- ❌ Core procedure
> The specialist should recognize that a core procedure involves removal of a core sample of tissue from the patient's lesion, not removal of the entire lesion.
Removal of the entire lesion is classified as an excisional procedure.
- ❌ Needle procedure
> The specialist should recognize that a needle procedure involves aspiration of fluid from within the lesion using a needle and syringe or using a specialized biopsy needle. Removal of the entire lesion is classified as an excisional procedure.
- ✅ Excisional procedure
> The specialist should clarify the procedure type with the provider to ensure that an excisional procedure was performed when the entirety of the patient's lesion was removed.
- ❌ Punch procedure
> The specialist should recognize that a punch procedure involves the removal of a small section of the lesion using a punch instrument. Removal of the entire lesion is classified as an excisional procedure.
## Question 10 of 100
A billing and coding specialist is reviewing a report from the clearinghouse after submitting electronic claims and notices that one claim was rejected due to missing demographic information. Which of the following actions should the specialist take?

- ❌ Resubmit the original claim by mail.
> It is not necessary to send the claim by mail, which would delay reimbursement. Also, the claim should be corrected prior to resubmission to the clearinghouse to avoid a repeated rejection.
- ❌ Alert the third-party payer of the incomplete claim.
> If the clearinghouse rejects the claim, it will not be sent to the third-party payer. The claim should be corrected and resubmitted to the clearinghouse for repeat claim scrubbing before going on to the third-party payer.
- ❌ Notify the patient of the rejection.
> It is not necessary to notify the patient about the rejection by the clearinghouse due to missing information. The claim should be corrected and resubmitted to the clearinghouse for repeat claim scrubbing before going on to the third-party payer.
- ✅ Resubmit an updated claim
> The claim should be updated with the correct demographic information and resubmitted through the clearinghouse for repeat claim scrubbing before going on to the third party-payer.

## Question 11 of 100
Complete the following question by referencing the coding exhibit.
A billing and coding specialist is reviewing a claim for a patient who presented to the provider's office for an upper respiratory infection. During the encounter, the patient also received the influenza vaccine. Which of the following modifiers should be attached to the Evaluation and Management (E/M) code?
| Modifier | Description                                                                                                                                                                                      |
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| -24      | Unrelated Evaluation and Management service by the same physician or other qualified health care professional during a postoperative period                                                      |
| -25      | Significant, separately identifiable evaluation and management (E/M) service by the same physician or other qualified health care professional on the same day of the procedure or other service |
| -50      | Bilateral procedure                                                                                                                                                                              |
| -51      | Multiple procedures                                                                                                                                                                              |
- ❌ -24
> Modifier -24 is used for an unrelated E/M service by the same provider during the postoperative period.
- ❌ -51
> Modifier -51 is used to report multiple procedures other than E/M services.
- ✅ -25
> Modifier -25 is used for separately significant E/M services by the same provider on the same day of service.
- ❌ -50
> Modifier -50 is used for bilateral procedures.

## Question 12 of 100
A patient is upset about a bill they received because their third-party payer denied the claim. Which of the following actions should a billing and coding specialist take?

- ❌ Tell the patient to resubmit the claim to the third-party payer.
> The specialist should not tell the patient to resubmit the claim.
- ✅ Inform the patient of the reason for the denial.
> The specialist should inform the patient of the reason for the denial.
- ❌ Tell the patient to speak with the provider.
> The specialist should not tell the patient to speak with the provider.
- ❌ Inform the patient that the third-party payer will follow up.
> The specialist should not inform the patient that the third-party payer will follow up.

## Question 13 of 100
A billing and coding specialist is assisting a patient who has a capitated health maintenance organization (HMO) and presents to the office with a sinus infection. The specialist should identify that which of the following statements is true regarding a capitated HMO?

- ✅ Payment for the encounter is based on a flat rate.
> The specialist should recognize that, for a capitated HMO, the payment system is based on a flat rate per patient, per month, regardless of how many times the provider sees the patient.
- ❌ A claim should be submitted to the third-party payer for the encounter.
> The specialist should recognize that a claim does not need to be submitted to the third-party payer because the payment system for a capitated HMO is based on a flat rate per patient, per month, regardless of how many times the provider sees the patient.
- ❌ Patients are billed directly for the encounter.
> The specialist should recognize that, for a capitated HMO, the payment system is based on a flat rate per patient, per month, regardless of how many times the provider sees the patient. Therefore, the specialist should not bill the patient directly for the encounter.
- ❌ A claim should be provided to the patient following the encounter.
> The specialist should recognize that, for a capitated HMO, the payment system is based on a flat rate per patient, per month, regardless of how many times the provider sees the patient. Therefore, the specialist should not provide the patient with a claim following the encounter.
## Question 14 of 100
When a patient has a condition that is both acute and chronic, how should it be coded?
- ❌ Code only the acute condition.
> Both acute and chronic conditions should be coded. The acute condition should be coded first.
- ✅ Code both the acute and chronic conditions, sequencing the acute condition first.
> If the same condition is described as both acute and chronic, the ICD-10-CM manual states to code both and sequence the acute condition first.
- ❌ Code only the chronic condition.
> Both acute and chronic conditions should be coded. The acute condition should be coded first.
- ❌ Code both the acute and chronic conditions, sequencing the chronic condition first.
> While both conditions should be coded, the acute condition should be coded first.
## Question 15 of 100
A billing and coding specialist is preparing an appeal letter in response to a denial by a third-party payer for lack of medical necessity. Which of the following should the specialist include with the letter to indicate medical necessity?

- ❌ Patient employer information
> Patient employer information might be included on the original claim, but it is not necessary to send the information with an appeal after denial for medical necessity. An appeal due to denial for medical necessity often requires a copy of medical record documentation to prove the service was needed to treat the condition documented in the record.
- ✅ Medical record documentation
> An appeal due to denial for medical necessity often requires a copy of medical record documentation to prove the service was needed to treat the condition documented in the record.

- ❌ Release of information authorization
> Although authorization to release information is necessary for the chart. this is not something that needs to be included with the appeal letter. An appeal due to denial for medical necessity often requires a copy of medical record documentation to prove the service was needed to treat the condition documented in the record.
- ❌ Retrospective review request
> A retrospective review can be requested if the office fails to obtain preauthorization for a procedure. An appeal due to denial for medical necessity often requires a copy of medical record documentation to prove the service was needed to treat the condition documented in the record.
## Question 16 of 100
HIPAA transaction standards apply to which of the following entities?
- ❌ Employers who provide workers' compensation plans
> Employers who provide workers’ compensation plans are not required to conform to HIPAA regulations.
- ❌ Automobile insurance providers
> Automobile insurance providers are not required to conform to HIPAA regulations.
- ✅ Health care clearinghouses
> Entities covered by HIPAA regulations include health care clearinghouses, providers of health care services, and health care third-party payers who submit transactions electronically.
- ❌ Educational facilities
> Educational facilities are not required to conform to HIPAA regulations.
## Question 17 of 100
In the ICD-10-CM code set, which of the following characters is the placeholder?
- ❌ S
> The character S is a 7th character extension, not the placeholder.
- ❌ A
> The character A is a 7th character extension, not the placeholder.
- ✅ X
> The character X is the placeholder.
- ❌ D
> The character D is a 7th character extension, not the placeholder.
## Question 18 of 100
Which of the following are included in surgery service codes?
- ❌ Postoperative complications
> Surgical services include a preoperative history and physical. Postoperative complications are coded separately.
- ❌ Exacerbations
> Surgical services include a preoperative history and physical. Treating exacerbations is not included.
- ❌ Implants and devices
> Surgical services include a preoperative history and physical. Implants and devices are coded separately.
- ✅ Preoperative history and physical
> Surgical services include a preoperative history and physical.

## Question 19 of 100
A billing and coding specialist is reviewing a remittance advice and encounters a denial of payment for CPT® code 44950 (appendectomy). The specialist discovers the ICD-10-CM code assigned to the claim was J32.1 (chronic frontal sinusitis). Which of the following is the reason for this claim denial?

- ✅ Incorrectly linked codes were reported on the claim
> The procedure performed (appendectomy) is not correctly linked because the reported ICD-10-CM code indicated chronic frontal sinusitis. A correctly linked code would indicate the patient had a condition that would justify removing the appendix.
- ❌ A lower level of care could have been provided
> A lower level of care denial indicates that a procedure performed in one location, such as a hospital, could have been performed in a different place, such as an office
- ❌ Bundled service
> A bundled service denial is one where multiple CPT® codes are assigned when one code covers all the work done for the CPT® assignment.
- ❌ Pre-existing condition
> Although the patient may have had a pre-existing sinus condition, the CPT® code assigned indicates that the procedure was an appendectomy, and the patient is not likely to have the condition of appendicitis prior to the procedure being performed.

## Question 20 of 100
A billing and coding specialist discovers suspicious billing activity that may be fraudulent in the workplace. Which of the following actions should the specialist take?

- ❌ Contact the Office of Inspector General (OIG).
> The specialist should avoid contacting the OIG. The OIG provides guidance for compliance plans.
- ✅ Call the U.S. Department of Health and Human Services' (DHHS) anonymous hotline.
> The specialist should call the U.S. DHHS anonymous hotline to discuss the fraudulent activity. The hotline allows the specialist to report suspicious activity, fraud,
or abuse anonymously.
- ❌ Address it with the provider.
> The specialist should avoid addressing it with the provider.
- ❌ Notify the patient.
> The specialist should avoid notifying the patient.
## Question 21 of 100
Which of the following should a billing and coding specialist complete to be reimbursed for a provider's outpatient services?
- ✅ CMS-1500 claim form
> The specialist should complete a CMS-1500 to be reimbursed for a provider's outpatient services.
- ❌ UB-04 claim form
> UB-04 claim forms are used for inpatient hospital services.
- ❌ Encounter form
> An encounter form, or a superbill, is a tool that is used to communicate the services rendered by the provider to the third-party payer.
- ❌ Itemized statement
> An itemized statement is a financial document that is part of the accounts receivable for services rendered.
Complete the following question by referencing the coding exhibit.

## Question 22 of 100
A billing and coding specialist is determining the level of service for an office visit for a new patient. Which of the following codes represents a moderate level of medical decision-making?
### CPT® Code Set
| Code  | Description                                                                                                                                                                                                                                                 |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 99213 | Office or other outpatient visit for the evaluation and management of an established patient, which requires a medically appropriate history and/or examination and low level of medical decision making.                                                   |
| 99204 | Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and moderate level of medical decision making.                                                       |
| 99235 | Hospital inpatient or observation care, for the evaluation and management of a patient including admission and discharge on the same date, which requires a medically appropriate history and/or examination and moderate level of medical decision making. |
| 99305 | Initial nursing facility care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and moderate level of medical decision making.                                                    |
- ✅ 99204
> Code 99204 represents moderate complexity medical decision-making for a new patient.
- ❌ 99235
> Code 99235 represents moderate complexity medical decision-making for an established patient.
- ❌ 99305
> Code 99305 represents moderate complexity medical decision-making in a nursing facility.
- ❌ 99213
> Code 99213 represents low complexity medical decision-making for an established patient.
## Question 23 of 100
A billing and coding specialist should identify that which of the following is used to improve the efficiency and effectiveness of the health care system as mandated by HIPAA for providers?

- ❌ CMS-1500 claim form
> The CMS 1500 form refers to a paper claim and does not improve the efficiency and effectiveness of health care systems.
- ❌ Electronic remittance advice
> Electronic remittance advice documents are responses from third-party payers and do not improve the efficiency and effectiveness of health care systems.
- ✅ ANSIASC X12N 837P format
> The electronic ANSI ASC X12N 837P format improves the efficiency and effectiveness of health care systems.
- ❌ Health information management
> Health information management is an administrative process.
## Question 24 of 100
A billing and coding specialist should add a modifier in which of the following scenarios?

- ✅ A bilateral procedure was performed.
> Bilateral procedures are indicated with modifiers.
- ❌ The procedure was cancelled.
> Cancelled procedures are not coded, so they do not require modifiers.
- ❌ The service was an initial service.
> Initial services are not indicated with modifiers.
- ❌ An unspecified code is used.
> Unspecified codes are not indicated with modifiers.
## Question 25 of 100
A new patient presents for an urgent care encounter. Which of the following code sets should be used to report this encounter?

- ❌ Hospital observation services
> Hospital observation service code sets (99221 to 99239) are only used for patients that have been admitted for observation.
- ❌ Emergency department services
> Emergency department service code sets (99281 to 99285) can only be used for qualified emergency department services, not for urgent care services.
- ✅ Office or other outpatient services
> Office or other outpatient code sets (99202 to 99215) should be used to report urgent care encounters.
- ❌ Office or other outpatient consultations
> Office or other outpatient consultation codes (99242 to 99245) are used to report services that qualify as consultations.
## Question 26 of 100
CPT® Evaluation and management codes are used for which of the following?
- ❌ Physical therapy modalities
> Evaluation and management codes are used for critical care services, not physical therapy modalities.
- ❌ Outpatient hemodialysis
> Evaluation and management codes are used for critical care services, not outpatient hemodialysis.
- ❌ Medical nutrition therapy
> Evaluation and management codes are used for critical care services, not nutrition therapy.
- ✅ Critical care services
> Evaluation and management codes are used for critical care services.
## Question 27 of 100
Outstanding patient balances will appear on which of the following?

- ✅ Accounts receivable
> Accounts receivable includes any outstanding balances owed, including patient balances.
- ❌ Accounts payable
> Accounts payable are amounts owed to others that have not been paid. Outstanding patient balances are not found here.
- ❌ Tracer
> A tracer is a written request made to a third-party payer to locate the status of a claim. This does not involve outstanding patient balances.
- ❌ Rejected claim
> A rejected claim contains incorrect information and must be reprocessed within a specified time limit.
## Question 28 of 100
Which of the following statements is true regarding the release of patient records?
- ❌ Verbal requests for records from life insurance companies are appropriate.
> All requests for patient records must be in writing and have signed authorization from the patient, parent, or legal guardian.
- ❌ Identification is not required when requesting access to patient records.
> Identification is required to maintain patient confidentiality and privacy.
- ❌ Providers cannot share a patient's medical information with other health care professionals if the patient is mentally unstable.
> Based on the provider's best judgment, information may be shared with other providers if deemed in the patient's best interest.
- ✅ Patient access to psychotherapy notes is restricted
> Patients cannot access psychotherapy notes or information compiled for lawsuits.
## Question 29 of 100
A billing and coding specialist is posting a Medicare remittance advice and identifies an overpayment of $15. Which of the following actions should the specialist take?

- ✅ Notify Medicare about the overpayment within 60 days.
> The specialist has 60 days to report and return overpayments of less than $25.
- ❌ Contact Medicare about the overpayment within 72 hr
> The specialist has 60 days to report and return overpayments of less than $25.
- ❌ Keep the overpayment on the account as a credit.
> The specialist should not keep the overpayment as a credit. This is an example of fraud.
- ❌ Keep the overpayment by adjusting the patient's balance to $0.
> The specialist should not adjust the patient's balance to $0. This is an example of fraud.
## Question 30 of 100
Which of the following terms describes the removal of the eye, adnexa, and bony structure?
- ❌ Evisceration
> Evisceration is removal of the contents of the globe leaving the extraocular muscles and sclera intact.
- ❌ Enucleation
> Enucleation is removal of the eye leaving the orbital structures intact.
- ✅ Exenteration
> Exenteration is removal of the eye, adnexa, and bony structure.
- ❌ Exploration
> Exploration is used with wounds for exploring the injury site.
## Question 31 of 100
A billing and coding specialist is preparing an accounts receivable aging report. The specialist should expect the report to include which of the following?

- ❌ Rejected claims organized by payer
> Information about rejected claims organized by payer is not included in an accounts receivable aging report.
- ❌ Lost claims organized by payer
> Information about lost claims organized by payer is not included in an accounts receivable aging report.
- ❌ Paid balances organized by date
> Information about paid balances organized by date is not included in an accounts receivable aging report.
- ✅ Outstanding balances organized by date
> An accounts receivable aging report provides information about any outstanding balances and is organized by date range.
## Question 32 of 100
In an outpatient setting, which of the following forms is used as a financial report of all services provided to patients?

- ❌ Encounter form
> An encounter form is a record of diagnoses and services for a particular encounter with the provider.
- ✅ Patient account record
> The patient account record, or patient ledger, is a financial report that contains all the transactions between a patient and the practice.
- ❌ CMS-1500 claim form
> The CMS-1500 is used to submit charges to the third-party payer for services rendered to the patient.
- ❌ Accounts receivable journal
> The accounts receivable journal, or day sheet, is a chronological summary of all transactions posted on a specific day.

## Question 33 of 100
Complete the following question by referencing the coding exhibit.

A billing and coding specialist is working on a claim in which reimbursement was reduced due to two surgical services performed during the same encounter being bundled together. Which of the following modifiers should be assigned to indicate the procedures were independent to prevent bundling?
| Modifier | Description                                                                                                                                                                                      |
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| -22      | Increased procedural services                                                                                                                                                                    |
| -25      | Significant, separately identifiable evaluation and management (E/M) service by the same physician or other qualified health care professional on the same day of the procedure or other service |
| -58      | Staged or related procedure by the same physician or other qualified health care professional during the postoperative period                                                                    |
| -59      | Distinct procedural service                                                                                                                                                                      |
- ❌ -58
> Modifier -59 is used to indicate multiple procedures were independent of each other, which prevents them from being bundled, not -58.
- ❌ -25
> Modifier -59 is used to indicate multiple procedures were independent of each other, which prevents them from being bundled, not -25.
- ❌ -22
> Modifier -59 is used to indicate multiple procedures were independent of each other, which prevents them from being bundled, not -22.
- ✅ -59
> Modifier -59 is used to indicate multiple procedures were independent of each other, which prevents them from being bundled.
## Question 34 of 100
Which of the following entities are required to follow HIPAA rules and regulations?
- ❌ Government insurance agencies, banks, and long-term care facilities
> Health care organizations that transmit protected health information (PHI) are required to follow HIPAA rules and regulations. These can include government insurance agencies and long-term care facilities, but not banks.
- ✅ Clearinghouses, health insurance companies, and billing services
> Health care organizations that transmit protected health information (PHI) are required to follow HIPAA rules and regulations. These can include clearinghouses, health insurance companies, and billing services.
- ❌ Dentists, providers, and retail stores
> Health care organizations that transmit protected health information (PHI) are required to follow HIPAA rules and regulations. These can include dentists and providers, but not retail stores.
- ❌ Pharmacies, chiropractors, and service stations
> Health care organizations that transmit protected health information (PHI) are required to follow HIPAA rules and regulations. These can include pharmacies and chiropractors, but not service stations.
## Question 35 of 100
A provider's office fee is $100, and the Medicare Part B allowed amount is $85. Assuming the beneficiary has not met any deductible amount, the patient should be billed for which of the following amounts?
- ❌ $15
> If the patient has not met their annual deductible, they will pay the Medicare allowed amount.
- ✅ $85
> If the patient has not met their annual deductible, they will pay the Medicare allowed amount, which is $85.
- ❌ $100
> If the patient has not met their annual deductible, they will pay the Medicare allowed amount.
- ❌ $0
> If the patient has not met their annual deductible, they will pay the Medicare allowed amount.
## Question 36 of 100
A billing and coding specialist is reviewing delinquent claims and discovers that a third-party payer paid a claim but applied it to the incorrect provider. The third-party payer will reimburse the payment once the improperly paid funds are recouped. Which of the following terms is used to describe this claim?
- ❌ Payment error
> A payment error involves a payment for a claim that was sent directly to the patient.
- ❌ Rejected
> A rejected claim, or soft denial, is often in response to a technical error.
- ❌ Denied
> A denied claim has been adjudicated and the third-party payer has determined that no payment will be made.
- ✅ Suspended
> A claim that is pending due to recovery of benefits from a third party is a suspended claim. Since payment to the correct provider has been withheld until the third-party payer has recouped its payment from the incorrect provider, this claim is suspended.
## Question 37 of 100
A child is brought into a facility by their mother. The child is covered under both parents’ insurance policies. The child's father was born on 10/1/1980 and their mother was born on 10/2/1981. Which of the following statements is true regarding the primary policy holder for the child?
- ❌ The father is the primary policy holder because he is a year younger
> According to the birthday rule, the policyholder whose birthday month and day comes first in the calendar year is the primary policy holder for dependents. The year is not a factor.
- ✅ The father is the primary policy holder because his birthday falls first in the calendar year.
> According to the birthday rule, the policyholder whose birthday month and day comes first in the calendar year is the primary policy holder for dependents. Therefore, the father is the primary policy holder for the child.
- ❌ The mother is the primary policy holder because she is t
> According to the birthday rule, the policyholder whose birthday month and day comes first in the calendar year is the primary policy holder for dependents. The year is not a factor.
- ❌ The mother is the primary policy holder because she brought the child in for the ap
> According to the birthday rule, the policyholder whose birthday month and day that comes first in the calendar year is the primary policy holder for dependents.
## Question 38 of 100
A billing and coding specialist is preparing a claim for a procedure with a prolonged operative time that has modifier -22 attached. Which of the following actions should the specialist take?
- ✅ Include an attachment to the claim.
> The specialist should include an attachment to the claim to support the increased procedural services, which is indicated by modifier -22
- ❌ Contact the third-party payer
> There is no reason to contact the third-party payer. The specialist should attach documentation to support the increased procedural services.
- ❌ Inform the patient that the service is noncovered.
> There is no reason to inform the patient that the service is noncovered. The specialist should attach documentation to support the increased procedural services.
- ❌ Remove modifier -22 and submit the claim.
> There is no reason to remove modifier -22 prior to submitting the claim. The specialist should attach documentation to support the increased procedural services.
## Question 39 of 100
A billing and coding specialist is reviewing an encounter note that indicates a biopsy was performed. The specialist requires which of the following additional details to fully code this procedure?
- ❌ Proximal vs. distal location
> The specialist requires a status of benign or malignant from the biopsy report to fully code this procedure.
- ✅ Benign vs. malignant status
> The specialist requires a status of benign or malignant from the biopsy report to fully code this procedure.
- ❌ Chronic vs. acute status
> The specialist requires a status of benign or malignant from the biopsy report to fully code this procedure.
- ❌ Multiple vs. singular count
> The specialist requires a status of benign or malignant from the biopsy report to fully code this procedure.
## Question 40 of 100
Which of the following information is required on a patient account record?
- ✅ Name and address of guarantor
> The guarantor’s name and address are required on the patient account record.
- ❌ Procedures performed
> The procedures performed are not required on the patient account record.
- ❌ Family history of the guarantor
> The guarantor's family history is not required on the patient account record.
- ❌ Diagnosis
> The diagnosis is not required on the patient account record.
## Question 41 of 100
A billing and coding specialist is preparing to appeal a partially paid claim due to an incorrect procedure code. Which of the following steps of the appeal process includes the review of the claim adjustment reason code?
- ✅ Identification
> During the identification step, the reason for the denial or rejection is identified by interpreting claim adjustment reason codes.
- ❌ Management
> The management step involves the process of resolving denied or rejected claims, such as sorting.
- ❌ Monitoring
> The monitoring step involves keeping a record of denied or rejected claims that can be reviewed routinely as a reference for samples or for prevention.
- ❌ Prevention
> The prevention step involves teaching and educating those involved in the claims management and appeals process and involving them when necessary.
## Question 42 of 100
Which of the following actions by a billing and coding specialist ensures a patient's health information is protected?
- ❌ Confirming test results with the patient over the phone at the reception area
> The specialist should confirm test results in private.
- ❌ Asking patients the reason for their visit during check-in
> The specialist should ask patients their reason for visiting in a private area where it cannot be overheard.
- ✅ Using data encryption software on office workstations
> Encryption software ensures that electronically transmitted health information cannot be read by third parties; therefore, this action ensures a patient's health information is protected.
- ❌ Leaving the workstation unlocked while stepping away to assist another patient
> The specialist should avoid leaving the workstation unlocked while helping another patient to ensure the patient's health information is protected.
## Question 43 of 100
A billing and coding specialist receives a denial for payment from TRICARE for services provided in the emergency department while a provider was on call. The provider is not a participating TRICARE provider. Which of the following actions must the specialist take to process an appeal for payment?

- ❌ File a nonavailability request form
> A nonavailability request form is filled out by out-of-network providers who wish to treat obstetric patients when a TRICARE provider is not available. Out-of-network providers have no access to TRICARE information for subscribers. All requests for information must go through the subscriber or patient.
- ❌ Request reconsideration.
> Only participating providers can request reconsideration for a denial of payment from TRICARE. Out-of-network providers have no access to TRICARE information for patients. All requests must go through the subscriber or patient.
- ✅ Contact the patient for assistance
> Out-of-network providers have no access to TRICARE information for patients. All requests must go through the subscriber or patient.
- ❌ Inquire through the online TRICARE portal.
> Only participating providers have access to the online TRICARE portal. Out-of-network providers have no access to TRICARE information for patients. All requests must go through the subscriber or patient.
## Question 44 of 100
A billing and coding specialist is reviewing a remittance advice from Medicare and notices that the amount paid for a procedure is less than the contracted amount. Which of the following is a potential reason for the reduced amount of payment?

- ✅ The claim indicated an incorrect place of service.
> Medicare requires specific services to be provided in specific care locations. If this is not possible, the amount of payment provided is reduced. This is called a site-of-service limitation.
- ❌ The claim is missing demographic information.
> A claim that is missing demographic information will be denied by the payer, rather than have a reduced payment applied to it.
- ❌ The coordination of benefits was not updated.
> If the coordination of benefits is not updated by the patient, it will result in the claim being denied, rather than a reduction in the amount of payment.
- ❌ The claim was for a work-related injury.
> A claim for a work-related injury would need to be filed through workers’ compensation, not Medicare. If a work-related claim is filed through Medicare, the claim would be denied, rather than the payment be reduced.
## Question 45 of 100
A billing and coding specialist is collecting demographic information from a patient. Which of the following pieces of information should the specialist expect the Medicaid eligibility verification system (MEVS) to provide?

- ❌ Preauthorization for services
> Preauthorization for services is based on coverage and is not provided through MEVS.
- ❌ Medicare eligibility
> Medicare and Medicaid are separate entities. The specialist should not expect to collect information about Medicare eligibility from MEVS.
- ✅ Dates of coverage
> MEVS provides information about Medicaid eligibility, including the patient's dates of coverage.
- ❌ List of pre-existing conditions
> MEVS does not provide a list of a patient's pre-existing conditions. Insurers are prohibited from disclosing information about a patient's pre-existing conditions; therefore, this information would need to be collected directly from the patient.
## Question 46 of 100
A billing and coding specialist observes a colleague perform an unethical act. Which of the following actions should the specialist take?
- ❌ File a complaint with the provider.
> Filing a complaint with the provider is not an appropriate action.
- ❌ Confront the employee
> Confronting the employee is not an appropriate action.
- ✅ Report the incident to a supervisor.
> The specialist should report the incident to a supervisor.
- ❌ Disregard the incident.
> Disregarding the incident is not an appropriate action.
## Question 47 of 100
When a patient signs an Acknowledgement of Notice of Privacy Practice, it indicates which of the following?
- ❌ The patient allows information to be used for treatment, payment, and health care operations (TPO).
> Allowing information to be used for TPO does not apply to the Acknowledgement of Notice of Privacy Practice.
- ❌ The patient is billed for services provided that are not paid for by The Centers for Medicare and Medicaid Services (CMS).
> Being billed for services that are not paid for by CMS does not apply to the Acknowledgement of Notice of Privacy Practice.
- ❌ The patient allows information to be maintained in an electronic health record (EHR) environment.
> Allowing information to be maintained in an EHR environment does not apply to the Acknowledgement of Notice of Privacy Practice.
- ✅ The patient accepts the policies and procedures regarding how protected health information (PHI) is handled.
> Accepting the policies and procedures regarding how PHI is handled ensures that the patient has reviewed and signed off on how their PHI is handled.
## Question 48 of 100
A billing and coding specialist is processing a claim for a patient who broke their arm while repairing cars at their workplace. There is no nerve damage, the arm is placed in a cast for 6 weeks, and the patient is cleared to return to work in 6 weeks. Which of the following types of workers’ compensation applies to this patient?
- ✅ Temporary disability
> Temporary disability is provided when a worker is injured on the job and their wages are lost on a temporary basis.
- ❌ Third-party subrogation
> Third-party subrogation is legally pursuing an individual that caused an insurance loss to the insured to recover the amount of the claim paid.
- ❌ Permanent disability
> Permanent disability is provided when it is determined that the patient is permanently impaired and unable to return to the job they held prior to the injury.
- ❌ Nondisability
> Nondisablity is provided when a worker has a minor injury on the job and is able to continue regular duties.
## Question 49 of 100
Medigap coverage is offered to Medicare beneficiaries by which of the following?
- ❌ Medicaid
> Medicaid's supplemental coverage, Medi-Medi, picks up Medicare's premiums for qualified applicants.
- ❌ Federal health plans
> Federal health plans are not private; therefore, they do not offer supplemental coverage.
- ❌ Managed care plans
> Managed care plans are eligible as primary or secondary care plans; therefore, they do not provide supplemental coverage.
- ✅ Private third-party payers
> Medigap coverage is supplemental coverage that private third-party payers offer to Medicare beneficiaries who pay their Medicare premium.
## Question 50 of 100
Which of the following qualifies a patient for eligibility under Medicare as the primary third-party payer?
- ❌ Individuals who have worked 9 years in Medicare-covered employment
> Individuals must work for at least 10 years in Medicare-covered employment to be eligible.
- ❌ Individuals who are below the federal poverty level
> Individuals who are below the federal poverty level are eligible for Medicaid, not Medicare.
- ❌ Individuals who are 50 years or younger
> Individuals who are 65 years or older qualify for Medicare.
- ✅ Individuals who are under age 65 and have a disability
> Individuals who are under age 65 and have a disability are eligible for Medicare.

## Question 51 of 100
An employer's workers' compensation payer requires bloodwork for an employee who experienced a work-related injury. Which of the following modifiers should a billing and coding specialist use?
| Modifier | Description                                                                                                                   |
|----------|-------------------------------------------------------------------------------------------------------------------------------|
| -26      | Professional component                                                                                                        |
| -32      | Mandated services                                                                                                             |
| -52      | Reduced services                                                                                                              |
| -58      | Staged or related procedure by the same physician or other qualified health care professional during the postoperative period |
- ❌ -52
> Modifier 32 is used when a service is required by a payer or agency not -52.
- ❌ -58
> Modifier 32 is used when a service is required by a payer or agency not -58.
- ✅ -32
> Modifier 32 is used when a service is required by a payer or agency.
- ❌ -26
> Modifier 32 is used when a service is required by a payer or agency, not -26.
## Question 52 of 100
A patient has met an in-network PPO deductible of $150. The patient's coinsurance is 20%, and the allowed amount is $600. Which of the following is the patient's out-of-pocket expense?
- ❌ $450
> Since the patient's deductible has been met, the patient's responsibility is 20% of the allowed amount. (0.20 x 600 = 120)
- ❌ $300
> Since the patient's deductible has been met, the patient's responsibility is 20% of the allowed amount. (0.20 x 600 = 120)
- ✅ $120
> Since the patient's deductible has been met, the patient's responsibility is 20% of the allowed amount. (0.20 x 600 = 120)
- ❌ $150
> Since the patient's deductible has been met, the patient's responsibility is 20% of the allowed amount. (0.20 x 600 = 120)
## Question 53 of 100
Which of the following is a correct rule when using CPT® add-on codes?
- ❌ They are automatically reduced in value.
> CPT® add-on codes are not automatically reduced in value.
- ❌ They should be sequenced first.
> CPT® add-on codes should not be sequenced first.
- ❌ They are used for unspecified codes
> CPT® add-on codes are not used for unspecified codes.
- ✅ They are exempt from the multiple procedure concept.
> CPT® add-on codes are exempt from the multiple procedure concept.

## Question 54 of 100
Complete the following question by referencing the coding exhibit
Which of the following CPT® codes should a billing and coding specialist use to bill for a 5-year-old child who had an initial repair of a 2.5 cm abdominal hernia?
### CPT® Code Set
| Code  | Description                                                                                                                                                                                                                                                                               |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 49491 | Repair, initial inguinal hernia, preterm infant (younger than 37 weeks gestation at birth), performed from birth up to 50 weeks post conception age, with or without hydrocelectomy; reducible.                                                                                           |
| 49521 | Repair recurrent inguinal hernia, any age; incarcerated or strangulated.                                                                                                                                                                                                                  |
| 49591 | Repair of anterior abdominal hernia(s) (i.e., epigastric, incisional, ventral, umbilical, spigelian), any approach (i.e., open, laparoscopic, robotic), initial, including implantation of mesh or other prosthesis when performed, total length of defect(s); less than 3 cm, reducible. |
| 49613 | Repair of anterior abdominal hernia(s) (i.e., epigastric, incisional, ventral, umbilical, spigelian) any approach (open, laparoscopic, robotic), recurrent, including implantation of mesh or other prosthesis when performed, total length of defect(s); less than 3 cm, reducible.      |
- ❌ 49521
> This CPT® code indicates repair of a recurrent, incarcerated, or strangulated inguinal hernia at any age.
- ❌ 49491
> This CPT® code indicates an inguinal hernia repair for a child from birth up to 50 weeks of age.
- ✅ 49591
> is CPT® code indicates an initial abdominal hernia repair less than 3 cm.
- ❌ 49613
> This CPT® code indicates a recurrent abdominal hernia repair less than 3 cm.

## Question 55 of 100
Complete the following question by referencing the coding exhibit.
A billing and coding specialist is reviewing a claim for an established patient who arrived at the office with an upper respiratory infection. Which of the following codes should the specialist use for this encounter?
### CPT® Code Set
| Code  | Description                                                                                                                                                                                               |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 99213 | Office or other outpatient visit for the evaluation and management of an established patient, which requires a medically appropriate history and/or examination and low level of medical decision making. |
| 99203 | Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and low level of medical decision making.          |
| 99252 | Inpatient or observation consultation for a new or established patient, which requires a medically appropriate history and/or examination and straightforward level of medical decision making.           |
| 99283 | Emergency department visit for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and low level of medical decision making.                    |
- ❌ 99252
> This code is used for an inpatient or observation consultation visit, regardless of whether the patient is new or established.
- ✅ 99213
> This code is used for an established patient office Evaluation and Management (E/M) service.
- ❌ 99203
> This code is used for a new patient office Evaluation and Management (E/M) service.
- ❌ 99283
> This code is used for an emergency department visit, regardless of whether the patient is new or established.
## Question 56 of 100
A billing and coding specialist discovers that one private payer has not reimbursed the provider for any claims submitted in the past year. Clean claims have been submitted to the payer and have been acknowledged. Which of the following entities should the specialist contact to report the payer's failure to submit timely reimbursement?
- ❌ Department of Health and Human Services (HHS)
> The HHS does not set standards for processing and payment times by third-party payers. This is a standard set by individual states' insurance commissioners.
- ❌ Bureau of Health Workforce (BHW)
> The BHW does not set standards for processing and payment times by third-party payers. This is a standard set by individual states’ insurance commissioners.
- ✅ State Insurance Commissioner's office
> Each state has an insurance commission that sets standards for processing and payment times that third-party payers must follow. The specialist should contact their state's Insurance Commissioner's office to file a complaint.
- ❌ Federal Insurance Office (FIO)
> The FIO oversees non-health insurance products.
## Question 57 of 100
Which of the following code sets is used to report inpatient procedures?
- ❌ HCPCS
> HCPCS codes report services and supplies for outpatient services.
- ❌ CPT®
> CPT® codes report the professional charges for procedures.
- ✅ ICD-10-PCS
> ICD-10-PCS codes report inpatient procedures.
- ❌ ICD-10-CM
> ICD-10-CM codes report patient illnesses, injuries and conditions.
## Question 58 of 100
Which of the following is used by Medicare to determine if an item or service is covered?
- ✅ National Coverage Determination (NCD)
> NCD is a Medicare policy stating whether and under what circumstances a particular item or service is covered by Medicare.
- ❌ Prospective payment system (PPS)
> PPS is a method of reimbursement in which Medicare payment is made based on a predetermined, fixed amount.
- ❌ Advance Beneficiary Notice (ABN)
> ABN is a form provided to a patient to indicate a service may not be covered by Medicare and the patient may be responsible for the charges.
- ❌ Resource-based relative value scale (RBRVS)
> RBRVS is used to establish Medicare fees.
## Question 59 of 100
Complete the following question by referencing the coding exhibit.
A patient presents to a provider's office with difficulty speaking, facial drooping, and an inability to close their left eye. They are diagnosed with Bell's palsy. A billing and coding specialist should report which of the following ICD-10-CM codes?
### CPT® Code Set
| Code    | Description                  |
|---------|------------------------------|
| R29.810 | Facial weakness              |
| R47.81  | Slurred speech               |
| G51.0   | Bell's palsy                 |
| P11.3   | Birth injury to facial nerve |
- ❌ R29.810, R47.81
> The specialist should not report signs and symptoms with a confirmed diagnosis.
- ✅ G51.0
> Common signs and symptoms of Bell's palsy include facial drooping and difficulty speaking. These codes are not reported separately with a confirmed or definitive diagnosis. Correct coding for Bell's palsy is reporting only code G51.0.
- ❌ G51.0, R29.810, R47.81
> The specialist should not report signs and symptoms with a confirmed diagnosis.
- ❌ P11.3
> The diagnosis does not indicate it is due to a birth injury. P codes refer to newborns.
## Question 60 of 100
A billing and coding specialist is submitting a claim for a school-age child who was brought to the clinic by their maternal grandmother. The child's parents are divorced and remarried, and the child's mother has legal custody of the child. The specialist should recognize that the child's primary insurance coverage is provided through which of the following insured individuals?

- ✅ Biological mother
> In instances where a child's parents are divorced and one of the parents retains custody, the custodial parent who is insured is the primary insurer for the child.  The custodial stepparent, when applicable, is the secondary insurer with the noncustodial biological parent being tertiary.
- ❌ Stepmother
> In instances where a child's parents are divorced and one of the parents retains custody, the custodial parent who is insured is the primary insurer for the child.  The custodial stepparent, when applicable, is the secondary insurer with the noncustodial biological parent being tertiary.
- ❌ Biological father
> In instances where a child's parents are divorced and one of the parents retains custody, the custodial parent who is insured is the primary insurer for the child.  The custodial stepparent, when applicable, is the secondary insurer with the noncustodial biological parent being tertiary.
- ❌ Maternal grandmother
> In instances where a child's parents are divorced and one of the parents retains custody, the custodial parent who is insured is the primary insurer for the child.  The custodial stepparent, when applicable, is the secondary insurer with the noncustodial biological parent being tertiary.

## Question 61 of 100
A billing and coding specialist is reviewing a delinquent claim. Which of the following actions should the specialst take first?
- ✅ Verify the age of the account.
> Verifying the age of the account is the first action the specialist should take when reviewing a delinquent claim.
- ❌ Query the third-party payer.
> Querying the third-party payer is the third step the specialist should take when reviewing a delinquent claim.
- ❌ Obtain the claim status.
> Obtaining the claim status is the second step the specialist should take when reviewing a delinquent claim.
- ❌ Resubmit the claim.
> Resubmitting the claim is the last step the specialist should take when reviewing a delinquent claim.
## Question 62 of 100
Which of the following parts of Medicare is managed by private third-party payers that have been approved by Medicare?
- ❌ Medicare Part A
> Medicare Part A provides coverage for hospital services.
- ❌ Medicare Part B
> Medicare Part B provides coverage for outpatient and provider services.
- ✅ Medicare Part C
> Medicare Part C, or Medicare Advantage Plans, allows the patient to choose a managed care plan and a private, fee-for-service health care plan that has been approved by Medicare.
- ❌ Medicare Part D
> Medicare Part D provides prescription medication coverage.
## Question 63 of 100
Which of the following is true regarding Medicaid eligibility?
- ❌ Eligibility of dependents is automatic.
> Dependent eligibility is income-based and is not automatic.
- ❌ Providers who accept Medicare must also accept Medicaid.
> Medicare and Medicaid are separate entities and providers are not required to accept both.
- ✅ Patient eligibility is determined at each visit.
> Patient eligibility for Medicaid is determined at each visit and depends upon the patient's financial status.
- ❌ Patient eligibility begins at 65 years of age.
> Patient eligibility for Medicare begins at 65 years of age.
## Question 64 of 100
For which of the following reasons should a billing and coding specialist follow the guidelines in the CPT® manual?
- ✅ The guidelines define items that are necessary to accurately code.
> The CPT® coding manual contains guidelines required for accurate coding.
- ❌ The guidelines assist with coding proper diagnoses.
> The ICD-10-CM coding manual assists with the coding of proper diagnoses.
- ❌ The guidelines indicate medical necessity.
> The CPT® guidelines do not contain any indications for medical necessity.
- ❌ The guidelines negate the need for documentation.
> Proper documentation is still required outside of the CPT® guidelines.
## Question 65 of 100
Which of the following provisions ensures that an insured patient's benefits from third-party payers do not exceed 100% of allowable medical expenses?

- ❌ Source document
> A source document is a communication tool used between the provider and third-party payer to submit a claim.
- ❌ Assignment of benefits
> Assignment of benefits does not ensure that patient benefits from a third-party payer do not exceed allowable medical expenses.
- ❌ Coinsurance
> Coinsurance is the percentage a patient pays for covered services after the deductible is met.
- ✅ Coordination of benefits
> Coordination of benefits is used between multiple third-party payers to determine which payer pays primary and which payer pays secondary. The coordination of benefits third-party payer does not exceed allowable medical expenses.
## Question 66 of 100
A billing and coding specialist is preparing a claim for a provider. The operative note indicates the surgeon performed a CABG. The specialist should identify that CABG stands for which of the following?
- ✅ Coronary artery bypass graft
> CABG stands for coronary artery bypass graft.
- ❌ Cardiac arterial blood gas
> CABG stands for coronary artery bypass graft.
- ❌ Coronal aortic basilar graph
> CABG stands for coronary artery bypass graft.
- ❌ Cardio axillary brachial gram
> CABG stands for coronary artery bypass graft.
## Question 67 of 100
A patient is diagnosed with pneumonia during a follow-up encounter for a knee joint replacement surgery performed 2 weeks previously. Which of the following CPT® modifiers should the specialist add to the claim prior to resubmitting?

- ❌ -55 Postoperative management only
> Modifier -55 is used for postoperative management care.
- ❌ -25 Significant, separately identifiable evaluation and management service by the same physician or other qualified health care professional on the same day of the procedure or other service
> Modifier -25 is used for separately significant Evaluation and Management (E/M) services by the same provider on the same day of service.
- ❌ -79 Unrelated procedure or service by the same physician or other qualified health care professional during the postoperative period
> Modifier -79 is used for unrelated procedures or services by the same provider during the postoperative period.
- ✅ -24 Unrelated evaluation and management service by the same physician or other qualified health care professional during a postoperative period
> Modifier -24 is used for unrelated Evaluation and Management (E/M) services by the same provider during the postoperative period. The specialist should add this modifier and resubmit the claim.

## Question 68 of 100
Anesthesia codes from the CPT® manual require which of the following on the claim form?
- ❌ Special reports
> Anesthesia codes require physical status modifiers for billing, not special reports.
- ❌ Add-on codes
> Anesthesia codes require physical status modifiers for billing, not add-on codes.
- ❌ Category Il supplemental codes
> Anesthesia codes require physical status modifiers for billing, not category II supplemental codes.
- ✅ Physical status modifiers
> Anesthesia codes require physical status modifiers for billing.

## Question 69 of 100
Complete the following question by referencing the coding exhibit.
A billing and coding specialist is reviewing a patient's encounter progress note. Which of the following modifiers indicates the patient received general anesthesia from a surgeon?
| Modifier | Description                   |
|----------|-------------------------------|
| -22      | Increased procedural services |
| -23      | Unusual anesthesia            |
| -47      | Anesthesia by surgeon         |
| -52      | Reduced services              |
- ✅ -47
> Modifier -47 indicates general anesthesia was administered by the surgeon.
- ❌ -23
> Modifier -23 indicates local or regional anesthesia was administered.
- ❌ -52
> Modifier -52 indicates services rendered were reduced from the originally planned full services.
- ❌ -22
> Modifier -22 indicates services rendered were increased from the originally planned services due to severity of the patient's condition.
## Question 70 of 100
A billing and coding specialist is training a new employee on a claim for a consultation. The new employee asks, "What is a consultation?" Which of the following responses should the specialist make?

- ❌ "It's when a provider requests medical advice from the nursing staff."
> A consultation is when a provider requests medical advice about treating a condition from a specialist, such as a cardiologist.
- ❌ "It's a meeting between the provider and the patient's family.
> A consultation is when a provider requests medical advice about treating a condition from a specialist, such as a cardiologist.
- ✅ "It's when a provider requests medical advice from a specialist."
> A consultation is when a provider requests medical advice about treating a condition from a specialist, such as a cardiologist.
- ❌ "It's a meeting between the provider and the third-party payer."
> A consultation is when a provider requests medical advice about treating a condition from a specialist, such as a cardiologist.
## Question 71 of 100
Which of the following is a ICD-10-CM category code?
- ✅ A 3-character code
> ICD-10-CM category codes have 3 characters.
- ❌ A 5-character code
> ICD-10-CM category codes have 3 characters, not 5.
- ❌ A 7-character code
> ICD-10-CM category codes have 3 characters, not 7.
- ❌ A 6-character code
> ICD-10-CM category codes have 3 characters, not 6.
## Question 72 of 100
A billing and coding specialist is preparing a claim for a patient who had a procedure performed on their left index finger. Which of the following CPT® modifiers indicates the correct digit?
- ❌ -F4 Left hand, fifth digit
> Modifier -F4 is used for the left pinky.
- ❌ -F6 Right hand, second digit
> Modifier -F6 is used for the right index finger.
- ❌ -FA Left hand, thumb
> Modifier -FA is used for the left thumb.
- ✅ -F1 Left hand, second digit
> Modifier -F1 is used for the left index finger.
## Question 73 of 100
Which of the following is an example of a violation of an adult patient's confidentiality?
- ❌ While reviewing a claim, a billing and coding specialist reads the diagnosis before realizing that the patient is a neighbor.
> Proofing a claim, including the ICD-10-CM code, is not a violation of patient confidentiality.
- ❌ A billing and coding specialist queries the provider about a diagnosis in a patient's medical record.
> Unclear documentation should be clarified prior to code assignment and billing, This is not a violation of patient confidentiality.
- ❌ The provider uses their home phone to discuss the patient's care with nursing staff.
> Using a home phone is not a violation of patient confidentiality.
- ✅ Patient information was disclosed to the patient's parent without consent.
> Disclosing information to anyone without the patient's consent is a violation of patient confidentiality.
## Question 74 of 100
Which of the following links the ICD-10-CM and CPT® codes for claims processing?
- ✅ Diagnosis pointer
> The diagnosis pointer links the ICD-10-CM and CPT® codes to support medical necessity.
- ❌ Place of service
> Place of service identifies where a service was performed.
- ❌ Modifier
> A modifier provides additional detail for CPT® codes.
- ❌ Days or units
> The days identify the number of days a patient was hospitalized. Units are measurements that identify the quantity of injections or procedures.
## Question 75 of 100
Which of the following is the provision of health insurance policies that specifies which coverage is primary or secondary?
- ❌ Eligibility verification
> Eligibility verification is the process of checking and confirming that a patient is covered under an insurance plan.
- ❌ Explanation of benefits
> Explanation of benefits is a summary of all benefits processed.
- ❌ Assignment of benefits
> Assignment of benefits is when a patient authorizes the third-party payer to pay the provider directly.
- ✅ Coordination of benefits
> Coordination of benefits is the provision of health insurance policies that specifies which coverage is primary or secondary.
## Question 76 of 100
Which of the following is the purpose of running an insurance aging report each month?
- ❌ To determine the balances the patients owe the provider
> The aging report does not indicate the balances owed the provider by patients.
- ❌ To determine which patients have upcoming or missed appointments
> The aging report does not indicate patient appointment status.
- ✅ To determine which claims are outstanding from third-party payers
> An aging report indicates the status of outstanding claims that need to be paid.
- ❌ To determine what the third-party payer has paid for the provider's services to a patient
> The aging report does not indicate the amount a third-party payer has paid the provider.
## Question 77 of 100
An explanation of benefits states the amount billed was $80. The allowed amount is $60, and the patient is required to pay a $20 copayment. Which of the following describes the insurance check amount to be posted?
- ✅ $40
> The allowed amount is $60 and the patient is required to pay a $20 copayment. The difference in cost is $40, which is the insurance check amount to be posted.
- ❌ $80
> The check amount is the allowed amount minus any copay requirements
- ❌ $60
> The check amount is the allowed amount minus any copay requirements
- ❌ $20
> The check amount is the allowed amount minus any copay requirements

## Question 78 of 100
Complete the following question by referencing the coding exhibit.
A patient has a breast biopsy with the placement of a clip. After the biopsy is determined to be malignant, the patient elects for a mastectomy during the global period of the biopsy. Which of the following modifiers should a billing and coding specialist use to report the mastectomy?
| Modifier | Description                                                                                                                                                                                       |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| -25      | Significant, separately identifiable evaluation and management (E/M) service by the same physician or other qualified health care professional on the same day of the procedure or other service. |
| -58      | Staged or related procedure by the same physician or other qualified health care professional during the postoperative period.                                                                    |
| -59      | Distinct procedural service                                                                                                                                                                       |
| -78      | Unplanned return to the operating/procedure room by the same physician or other qualified health care professional following procedure for a related procedure during the postoperative period.   |
- ✅ -58
> Modifier -58 indicates a procedure that is performed by the same provider or other qualified health care professional during the postoperative period. This is the modifier the specialist should use to report the mastectomy because it was performed during the global period of the biopsy.
- ❌ -59
> Modifier -59 indicates a distinct procedural service.
- ❌ -25
> Modifier -25 indicates a significant, separately identifiable Evaluation and Management (E/M) service by the same provider or other qualified health care professional on the same day of the procedure or other service.
- ❌ -78
> Modifier -78 indicates an unplanned return to the operating or procedure room by the same provider or other qualified health professional following the initial procedure for a related procedure during the postoperative period.
## Question 79 of 100
Which of the following is part of a provider's practice compliance program?
- ❌ HIPAA compliance audit
> AHIPAA compliance audit is not part of a provider's practice compliance program.
- ❌ Provider recruitment
> Provider recruitment is not part of a provider's practice compliance program.
- ✅ Internal monitoring and auditing
> Internal monitoring and auditing is part of a provider's practice compliance program. Conducting internal monitoring and auditing provides a solid basis upon which a provider practice can create a voluntary compliance program.
- ❌ Notice of privacy practices
> Notice of privacy practices is not part of a provider's practice compliance program.
## Question 80 of 100
A billing and coding specialist is preparing a claim for an established patient who arrived for an annual exam. During the examination, the provider treated the patient's sinus infection and prescribed medication for it. Which of the following Evaluation and Management (E/M) codes requires modifier -25?
### CPT® Code Set
| Code / Modifier | Description                                                                                                                                                                                                                                                                                                         |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 99213           | Office or other outpatient visit for the evaluation and management of an established patient, which requires a medically appropriate history and/or examination and low level of medical decision making.                                                                                                           |
| 99202           | Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and straightforward level of medical decision making.                                                                                                        |
| 99385           | Initial comprehensive preventive medicine evaluation and management of an individual including an age and gender appropriate history, examination, counseling/anticipatory guidance/risk factor reduction interventions, and the ordering of laboratory/diagnostic procedures, new patient, 18-39 years.            |
| 99395           | Periodic comprehensive preventive medicine reevaluation and management of an individual including an age and gender appropriate history, examination, counseling/anticipatory guidance/risk factor reduction interventions, and the ordering of laboratory/diagnostic procedures, established patient, 18-39 years. |
| -25             | Significant, separately identifiable evaluation and management (E/M) service by the same physician or other qualified health care professional on the same day of the procedure or other service.                                                                                                                   |
- ❌ 99395
> This code is used for the annual examination of an established patient.
- ❌ 99385
> This code is used for the annual examination of a new patient.
- ✅ 99213
> Modifier -25 is used when a separately significant service is provided on the same day as another documented Evaluation and Management (E/M) service.
- ❌ 99202
> This code is used for the Evaluation and Management (E/M) service of a new patient.
## Question 81 of 100
A billing and coding specialist is determining coordination of benefits for a patient who has health insurance coverage from both parents. The patient's father's birthday is May 18, 1982 and their mother's birthday is May 18, 1984. Which of the following statements is correct for determining coverage?

- ❌ The parent whose birth month comes first in the calendar year will be the primary insurer.
> According to the birthday rule, the parent whose birth month and day comes first in the calendar year will be the primary insurer. If the parents have the same birth month and day, the policy that has been active the longest will be the primary.
- ❌ The parent whose birth year comes first will be the primary insurer.
> According to the birthday rule, the parent whose birth month and day comes first in the calendar year will be the primary insurer. If the parents have the same birth month and day, the policy that has been active the longest will be the primary.
- ❌ The parent whose insurance policy went into effect most recently will be the primary insurer.
> According to the birthday rule, the parent whose birth month and day comes first in the calendar year will be the primary insurer. If the parents have the same birth month and day, the policy that has been active the longest will be the primary.
- ✅ The parent whose insurance policy has been active the longest will be the primary insurer.
> According to the birthday rule, the parent whose birth month and day comes first in the calendar year will be the primary insurer. If the parents have the same birth month and day, the policy that has been active the longest will be the primary.

## Question 82 of 100
When reviewing an established patient's insurance card, a billing and coding specialist notices a minor change from the existing card on file. Which of the following actions should the specialist take?

- ✅ Photocopy both sides of the new card.
> Any changes to the insurance card should be photocopied or scanned and added to the patient record.
- ❌ Describe the change on the patient registration form.
> A description of the new card is not sufficient. Any changes to the insurance card should be photocopied and added to the patient record.
- ❌ Instruct the patient to contact the third-party payer to verify coverage.
> The office staff are responsible for confirming coverage.
- ❌ Confirm with the patient that the insurance coverage is the same.
> The patient may not be aware of the changes; therefore, the specialist should not confirm coverage with the patient.
## Question 83 of 100
In ICD-10-CM, Z codes are used to identify which of the following?
- ❌ Behavior disorders
> Behavior disorders are identified with F codes.
- ❌ Digestive diseases
> Digestive diseases are identified with K codes.
- ❌ Infectious diseases
> Infectious diseases are identified with A and B codes.
- ✅ Immunizations
> Z codes identify encounters for reasons other than illness and injury, such as immunizations.

## Question 84 of 100
Which of the following pieces of guarantor information is required when establishing a patient's financial record?
- ❌ Procedural codes used
> The procedural codes used are not required on the patient's financial record.
- ❌ Provider name
> The provider name is not required on the patient's financial record.
- ✅ Phone number
> The guarantor's phone number is required on the patient's financial record.
- ❌ Diagnosis
> The diagnosis is not required on the patient's financial record.
## Question 85 of 100
A billing and coding specialist is determining third-party payer responsibilities for a 70-year-old patient who has Medicare coverage. The patient's spouse has insurance with Blue Cross Blue Shield through their employer. Which of the following actions should the specialist take?
- ❌ Use Blue Cross Blue Shield as the primary insurance.
> Since the patient is 70 years old, Medicare would be their primary insurance.
- ❌ Ask the patient which insurance is primary.
> It is the specialist's responsibility to determine primary and secondary insurance.
- ✅ Establish coordination of benefits
> The specialist should establish coordination of benefits. Coordination of benefits is the process that determines third-party payer responsibilities.
- ❌ Apply the birthday rule.
> The birthday rule is used to determine primary insurance for a child when two parents have insurance coverage for the child.
## Question 86 of 100
Which of the following is the third stage of a claim's life cycle?
- ❌ Processing
> Processing is the second stage of a claim's life cycle.
- ❌ Payment
> Payment is the fourth stage of a claim's life cycle.
- ✅ Adjudication
> Adjudication is the third stage of a claim's life cycle.
- ❌ Submission
> Submission and electronic data interchange is the first stage of a claim's life cycle.
## Question 87 of 100
Which of the following is an advantage of electronic claim submission?
- ✅ Claims are expedited.
> Submitting claims electronically is faster than submitting paper claims.
- ❌ Claims are scrubbed.
> Both electronic and paper claims can be scrubbed.
- ❌ Claims are clean.
> Both electronic and paper claims can be clean.
- ❌ Claims are paid.
> Both electronic and paper claims can be paid.
## Question 88 of 100
A patient who recently received care from an endocrinologist is being referred to an infectious disease specialist. Which of the following types of referral does the patient need from the endocrinologist?
- ❌ Formal referral
> A formal referral is required by the managed care organization to determine medical necessity.
- ❌ Direct referral
> A direct referral is completed and signed by the provider and given to the patient.
- ✅ Tertiary care referral
> The patient needs a tertiary care referral from the endocrinologist. A tertiary care referral is a referral from one specialist to another specialist.
- ❌ Self referral
> A self referral is when the patient refers themselves to a specialist.
## Question 89 of 100
A claim is submitted with a transposed insurance member ID number and returned to the provider. Which of the following describes the status that will be assigned to the claim by the third-party payer?
- ❌ Suspended
> A suspended claim is held for additional information.
- ❌ Pending
> A pending claim is held for pending review.
- ❌ Denied
> A denied claim is returned to the provider after it has been processed.
- ✅ Invalid
> The third-party payer will assign an invalid status to the claim. An invalid claim contains illogical or incorrect information and is returned to the provider unprocessed.
## Question 90 of 100
For which of the following reasons should a claim be resubmitted?
- ❌ The software claims review process indicates the claim is not complete.
> The claims review process is used to correct errors. Claims are submitted electronically once the corrections have been made.
- ❌ The claim needs authorization.
> The authorization number needs to be included on both paper and electronic claims to be adjudicated; however, it does not require the claim to be resubmitted.
- ✅ The claim requires an attachment to support medical necessity.
> A claim that requires an attachment to support medical necessity should be resubmitted.
- ❌ The claim has been adjudicated.
> A claim that has been adjudicated by the third-party payer has completed the claims review process and does not need to be resubmitted.
## Question 91 of 100
A provider's office receives a subpoena requesting medical documentation from a patient's medical record. After confirming the correct authorization, which of the following actions should a billing and coding specialist take?

- ❌ Send the patient's demographic information from the dates of service requested.
> The demographic information from the dates of service requested is not what the subpoena requested
- ✅ Send the medical information pertaining to the dates of service requested.
> The specialist should send only the medical information for the dates of service requested in the subpoena.
- ❌ Send the patient's financial record ledger from the dates of service requested.
> The financial record ledger from the dates of service requested is not what the subpoena requested.
- ❌ Send the claims pertaining to the dates of service requested.
> The claims from the dates of service requested is not what the subpoena requested.
## Question 92 of 100
A billing and coding specialist is arranging a payment plan with a patient who wants to leave postdated checks with the office. The patient proposes leaving one check postdated for 3 months, one for 4 months, and another one for 5 months in the future. According to federal collection law, which of the following actions should the specialist take?

- ❌ Send all checks to the bank immediately for the bank to deposit on the dates indicated.
> Checks deposited with dates that are this far in advance will not be honored by the bank. Therefore, the checks should be held and deposited no earlier than the date indicated on each check. At least 3 days, and no more than 10 days, prior to depositing each check, the patient must be notified of the deposit.
- ✅ Notify the patient between 3 and 10 days prior to depositing each check on the indicated date.
> According to federal collection law, the checks should be held by the provider's office and deposited no earlier than the date indicated on each check. At least 3 days, and no more than 10 days, prior to depositing each check, the patient must be notified of the deposit.
- ❌ Hold all checks until the final deposit date and deposit the checks together
> The checks should be held by the provider's office and deposited no earlier than the date indicated on each check. At least 3 days, and no longer than 10 days, prior to depositing each check, the patient must be notified of the deposit.
- ❌ Inform the patient that it is illegal to accept postdated checks.
> The specialist should recognize that it is not illegal to accept postdated checks. If the office decides to accept postdated checks, they should be held by the office and deposited no earlier than the date indicated on each check. At least 3 days, and no longer than 10 days, prior to depositing each check, the patient must be notified of the deposit.

## Question 93 of 100
A billing and coding specialist identifies a CPT® code that is routinely being denied by a third-party payer. Which of the following types of review should the specialist perform?
- ❌ Prospective review
> A prospective review focuses on medical necessity for care prior to provision of care.
- ✅ Retrospective review
> The specialist should perform a retrospective review. This type of review focuses on medical necessity for care after care has been concluded.
- ❌ Preadmission review
> A preadmission review focuses on medical necessity for care before the patient is admitted to receive care.
- ❌ Concurrent review
> A concurrent review focuses on medical necessity for care while care is ongoing.
## Question 94 of 100
A billing and coding specialist is reviewing modifier use with a new employee. Which of the following scenarios warrants the use of a modifier?
- ❌ Fracture of the left femur
> This is a diagnosis and does not warrant a modifier.
- ✅ Splinting of the fourth digit on the left foot
> Procedures performed on the digits of the foot warrant the use of a modifier to specify on which digit the procedure was performed.
- ❌ Recurrent inguinal hernia
> This is a diagnosis and does not warrant a modifier.
- ❌ Insertion of a drug delivery implant
> Insertion codes for a drug delivery implant do not require modifiers.
## Question 95 of 100
A patient presents to a primary care provider for a closed right index finger fracture. The provider is a non-participating provider for a private payer and does not accept assignment of benefits. The provider's charge for the service is $135. The third-party payer's usual customary reasonable (UCR) amount is $120 with a 20% coinsurance fee. Which of the following is the patient's financial responsibility?
- ✅ $39
> Because the provider is a non-participating provider, the entire amount is recoverable. The insurance deems $120 to be usual, customary, and reasonable, and bases their 80% payment on that amount ($96). The patient is responsible for the other 20% of the amount ($24) plus the remainder of the difference between the fee and the payer's UCR amount ($15). Therefore, the patient is responsible for $39.
- ❌ $24
> Because the provider is a non-participating provider, the entire amount is recoverable. The insurance deems $120 to be usual, customary, and reasonable, and bases their 80% payment on that amount ($96). The patient is responsible for the other 20% of the amount ($24) plus the remainder of the difference between the fee and the payer's UCR amount ($15). Therefore, the patient is responsible for $39. An amount of $24 does not add the difference between the charged amount and the UCR amount ($15).
- ❌ $27
> Because the provider is a non-participating provider, the entire amount is recoverable. The insurance deems $120 to be usual, customary, and reasonable, and bases their 80% payment on that amount ($96). The patient is responsible for the other 20% of the amount ($24) plus the remainder of the difference between the fee and the payer's UCR amount ($15). Therefore, the patient is responsible for $39, An amount of $27 would be 20% of the charged amount, not the UCR.
- ❌ $42
> Because the provider is a non-participating provider, the entire amount is recoverable. The insurance deems $120 to be usual, customary, and reasonable, and bases their 80% payment on that amount ($96). The patient is responsible for the other 20% of the amount ($24) plus the remainder of the difference between the fee and the payer's UCR amount ($15). Therefore, the patient is responsible for $39, An amount of $42 would be 20% of the charged amount ($27) plus the difference between the charged amount and the UCR ($15).
## Question 96 of 100
Which of the following actions should a billing and coding specialist take to assign a diagnosis code to the highest level of specificity?
- ❌ Apply only the three-character code to a claim.
> Not all codes are only three characters in length. A code can require additional specificity and be up to seven characters long.
- ❌ Check for exclusion or inclusion notes.
> This does not apply when assigning a diagnosis code to the highest level of specificity.
- ✅ Apply characters four through seven to a claim.
> In order to code to the highest level of specificity, a code may require more than three characters. Therefore, the specialist should apply characters four through seven to a diagnosis code to assign it to the highest level of specificity.
- ❌ Check for code first or code also notes.
> This does not apply when assigning a diagnosis code to the highest level of specificity.
## Question 97 of 100
A billing and coding specialist is filing a CMS-1500 claim form for a patient who has private insurance. The specialist should recognize that a signature approving assignment of benefits indicates which of the following?
- ❌ The payer should send reimbursement for the claim to the patient, with the exception of copays and deductibles.
> If the patient does not sign the statement in block 13 to approve assignment of benefits to the provider, the reimbursement will go to the patient. However, if the block is signed, the payer has permission to send the reimbursement to the provider.
- ❌ The provider will accept the payer's reimbursement as payment in full with the exception of copays and deductibles.
> Accepting the payer's reimbursement as payment in full is "accepting assignment."
- ✅ The payer should send reimbursement directly to the provider with the exception of copays and deductibles.
> If block 13, which indicates approval of assignment of benefits, is signed, the payer has permission from the patient to send the reimbursement directly to the provider.
- ❌ The provider should bill the patient for any difference between the amount billed and the amount reimbursed by the payer.
> This outcome will occur if "No" is checked in block 27 on the CMS-1500, indicating that the provider does not accept assignment. This is not the same as assignment of benefits.
## Question 98 of 100
Which of the following is a federal government health insurance program?
- ❌ Blue Cross Blue Shield
> Blue Cross Blue Shield is not a government health insurance program. It is a group or individual private insurance company.
- ❌ Workers’ compensation
> The federal government requires each state to have workers’ compensation; however, workers’ compensation is not a federal government health insurance program.
- ❌ Cigna
> Cigna is a private health insurance company.
- ✅ TRICARE
> TRICARE is a federal government health insurance program that is provided for active military personnel and their families.

## Question 99 of 100
A billing and coding specialist is preparing a claim for an appendectomy and reports it with two units. The claim is then denied. Which of the following coding edits should the specialist have reviewed prior to submitting the claim?
- ✅ Medically unlikely edits
> Medically unlikely edits (MUEs) are the maximum units of service that a provider will report under most circumstances for a single beneficiary on a single date of service.
- ❌ National Coverage Determination
> National Coverage Determination (NCD) determines coverage limitations for items or services that are reasonable and necessary for diagnosis or treatment.
- ❌ Outpatient code editor
> Outpatient code editor (OCE) is used by Medicare and hospitals.
- ❌ Procedure-to-procedure
> Procedure-to-procedure (PTP) is an automatic, prepayment edit that prevents improper payments when submitted with Medicare Part B.
## Question 100 of 100
In which of the following sections of a SOAP note does a provider indicate a patient's reported level of pain?
- ✅ Subjective
> The subjective section is where the patient describes the chief complaint, which can include the patient's reported level of pain.
- ❌ Objective
> The objective section includes the results of the patient's physical examination.
- ❌ Assessment
> The assessment section includes the provider's diagnosis.
- ❌ Plan
> The plan section includes the provider's treatment plan for the patient.`;function Mn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let he=Mn();function Wt(t){he=t}const Me={exec:()=>null};function T(t,e=""){let n=typeof t=="string"?t:t.source;const i={replace:(r,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace($.caret,"$1"),n=n.replace(r,a),i},getRegex:()=>new RegExp(n,e)};return i}const $={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},Ar=/^(?:[ \t]*(?:\n|$))+/,Tr=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Cr=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,We=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,xr=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Dt=/(?:[*+-]|\d{1,9}[.)])/,zt=T(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Dt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),In=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,_r=/^[^\n]+/,Sn=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Pr=T(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Sn).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Mr=T(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Dt).getRegex(),tn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",En=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ir=T("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",En).replace("tag",tn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Bt=T(In).replace("hr",We).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tn).getRegex(),Sr=T(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Bt).getRegex(),qn={blockquote:Sr,code:Tr,def:Pr,fences:Cr,heading:xr,hr:We,html:Ir,lheading:zt,list:Mr,newline:Ar,paragraph:Bt,table:Me,text:_r},Jn=T("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",We).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tn).getRegex(),Er={...qn,table:Jn,paragraph:T(In).replace("hr",We).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Jn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tn).getRegex()},qr={...qn,html:T(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",En).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Me,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:T(In).replace("hr",We).replace("heading",` *#{1,6} *[^
]`).replace("lheading",zt).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Nt=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Rr=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ot=/^( {2,}|\\)\n(?!\s*$)/,Qr=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,rn=/[\p{P}\p{S}]/u,Rn=/[\s\p{P}\p{S}]/u,Ht=/[^\s\p{P}\p{S}]/u,$r=T(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Rn).getRegex(),Wr=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Dr=T(/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,"u").replace(/punct/g,rn).getRegex(),zr=T("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)","gu").replace(/notPunctSpace/g,Ht).replace(/punctSpace/g,Rn).replace(/punct/g,rn).getRegex(),Br=T("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ht).replace(/punctSpace/g,Rn).replace(/punct/g,rn).getRegex(),Nr=T(/\\(punct)/,"gu").replace(/punct/g,rn).getRegex(),Or=T(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Hr=T(En).replace("(?:-->|$)","-->").getRegex(),Lr=T("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Hr).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ze=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,jr=T(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ze).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Lt=T(/^!?\[(label)\]\[(ref)\]/).replace("label",Ze).replace("ref",Sn).getRegex(),jt=T(/^!?\[(ref)\](?:\[\])?/).replace("ref",Sn).getRegex(),Fr=T("reflink|nolink(?!\\()","g").replace("reflink",Lt).replace("nolink",jt).getRegex(),Qn={_backpedal:Me,anyPunctuation:Nr,autolink:Or,blockSkip:Wr,br:Ot,code:Rr,del:Me,emStrongLDelim:Dr,emStrongRDelimAst:zr,emStrongRDelimUnd:Br,escape:Nt,link:jr,nolink:jt,punctuation:$r,reflink:Lt,reflinkSearch:Fr,tag:Lr,text:Qr,url:Me},Ur={...Qn,link:T(/^!?\[(label)\]\((.*?)\)/).replace("label",Ze).getRegex(),reflink:T(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ze).getRegex()},gn={...Qn,escape:T(Nt).replace("])","~|])").getRegex(),url:T(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Gr={...gn,br:T(Ot).replace("{2,}","*").getRegex(),text:T(gn.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Be={normal:qn,gfm:Er,pedantic:qr},Ce={normal:Qn,gfm:gn,breaks:Gr,pedantic:Ur},Zr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},et=t=>Zr[t];function U(t,e){if(e){if($.escapeTest.test(t))return t.replace($.escapeReplace,et)}else if($.escapeTestNoEncode.test(t))return t.replace($.escapeReplaceNoEncode,et);return t}function nt(t){try{t=encodeURI(t).replace($.percentDecode,"%")}catch{return null}return t}function tt(t,e){var o;const n=t.replace($.findPipe,(a,c,d)=>{let l=!1,s=c;for(;--s>=0&&d[s]==="\\";)l=!l;return l?"|":" |"}),i=n.split($.splitPipe);let r=0;if(i[0].trim()||i.shift(),i.length>0&&!((o=i.at(-1))!=null&&o.trim())&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace($.slashPipe,"|");return i}function xe(t,e,n){const i=t.length;if(i===0)return"";let r=0;for(;r<i;){const o=t.charAt(i-r-1);if(o===e&&!n)r++;else if(o!==e&&n)r++;else break}return t.slice(0,i-r)}function Vr(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&(n--,n<0))return i;return-1}function it(t,e,n,i,r){const o=e.href,a=e.title||null,c=t[1].replace(r.other.outputLinkReplace,"$1");if(t[0].charAt(0)!=="!"){i.state.inLink=!0;const d={type:"link",raw:n,href:o,title:a,text:c,tokens:i.inlineTokens(c)};return i.state.inLink=!1,d}return{type:"image",raw:n,href:o,title:a,text:c}}function Kr(t,e,n){const i=t.match(n.other.indentCodeCompensation);if(i===null)return e;const r=i[1];return e.split(`
`).map(o=>{const a=o.match(n.other.beginningSpace);if(a===null)return o;const[c]=a;return c.length>=r.length?o.slice(r.length):o}).join(`
`)}class Ve{constructor(e){C(this,"options");C(this,"rules");C(this,"lexer");this.options=e||he}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const i=n[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:xe(i,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const i=n[0],r=Kr(i,n[3]||"",this.rules);return{type:"code",raw:i,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:r}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let i=n[2].trim();if(this.rules.other.endingHash.test(i)){const r=xe(i,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(i=r.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:xe(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let i=xe(n[0],`
`).split(`
`),r="",o="";const a=[];for(;i.length>0;){let c=!1;const d=[];let l;for(l=0;l<i.length;l++)if(this.rules.other.blockquoteStart.test(i[l]))d.push(i[l]),c=!0;else if(!c)d.push(i[l]);else break;i=i.slice(l);const s=d.join(`
`),u=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${s}`:s,o=o?`${o}
${u}`:u;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,a,!0),this.lexer.state.top=h,i.length===0)break;const p=a.at(-1);if((p==null?void 0:p.type)==="code")break;if((p==null?void 0:p.type)==="blockquote"){const f=p,m=f.raw+`
`+i.join(`
`),y=this.blockquote(m);a[a.length-1]=y,r=r.substring(0,r.length-f.raw.length)+y.raw,o=o.substring(0,o.length-f.text.length)+y.text;break}else if((p==null?void 0:p.type)==="list"){const f=p,m=f.raw+`
`+i.join(`
`),y=this.list(m);a[a.length-1]=y,r=r.substring(0,r.length-p.raw.length)+y.raw,o=o.substring(0,o.length-f.raw.length)+y.raw,i=m.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:a,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let i=n[1].trim();const r=i.length>1,o={type:"list",raw:"",ordered:r,start:r?+i.slice(0,-1):"",loose:!1,items:[]};i=r?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=r?i:"[*+-]");const a=this.rules.other.listItemRegex(i);let c=!1;for(;e;){let l=!1,s="",u="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;s=n[0],e=e.substring(s.length);let h=n[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,P=>" ".repeat(3*P.length)),p=e.split(`
`,1)[0],f=!h.trim(),m=0;if(this.options.pedantic?(m=2,u=h.trimStart()):f?m=n[1].length+1:(m=n[2].search(this.rules.other.nonSpaceChar),m=m>4?1:m,u=h.slice(m),m+=n[1].length),f&&this.rules.other.blankLine.test(p)&&(s+=p+`
`,e=e.substring(p.length+1),l=!0),!l){const P=this.rules.other.nextBulletRegex(m),I=this.rules.other.hrRegex(m),B=this.rules.other.fencesBeginRegex(m),x=this.rules.other.headingBeginRegex(m),E=this.rules.other.htmlBeginRegex(m);for(;e;){const q=e.split(`
`,1)[0];let w;if(p=q,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),w=p):w=p.replace(this.rules.other.tabCharGlobal,"    "),B.test(p)||x.test(p)||E.test(p)||P.test(p)||I.test(p))break;if(w.search(this.rules.other.nonSpaceChar)>=m||!p.trim())u+=`
`+w.slice(m);else{if(f||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||B.test(h)||x.test(h)||I.test(h))break;u+=`
`+p}!f&&!p.trim()&&(f=!0),s+=q+`
`,e=e.substring(q.length+1),h=w.slice(m)}}o.loose||(c?o.loose=!0:this.rules.other.doubleBlankLine.test(s)&&(c=!0));let y=null,v;this.options.gfm&&(y=this.rules.other.listIsTask.exec(u),y&&(v=y[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),o.items.push({type:"list_item",raw:s,task:!!y,checked:v,loose:!1,text:u,tokens:[]}),o.raw+=s}const d=o.items.at(-1);d&&(d.raw=d.raw.trimEnd(),d.text=d.text.trimEnd()),o.raw=o.raw.trimEnd();for(let l=0;l<o.items.length;l++)if(this.lexer.state.top=!1,o.items[l].tokens=this.lexer.blockTokens(o.items[l].text,[]),!o.loose){const s=o.items[l].tokens.filter(h=>h.type==="space"),u=s.length>0&&s.some(h=>this.rules.other.anyLine.test(h.raw));o.loose=u}if(o.loose)for(let l=0;l<o.items.length;l++)o.items[l].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const i=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:i,raw:n[0],href:r,title:o}}}table(e){var c;const n=this.rules.block.table.exec(e);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;const i=tt(n[1]),r=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=(c=n[3])!=null&&c.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(i.length===r.length){for(const d of r)this.rules.other.tableAlignRight.test(d)?a.align.push("right"):this.rules.other.tableAlignCenter.test(d)?a.align.push("center"):this.rules.other.tableAlignLeft.test(d)?a.align.push("left"):a.align.push(null);for(let d=0;d<i.length;d++)a.header.push({text:i[d],tokens:this.lexer.inline(i[d]),header:!0,align:a.align[d]});for(const d of o)a.rows.push(tt(d,a.header.length).map((l,s)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:a.align[s]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const i=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const i=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;const a=xe(i.slice(0,-1),"\\");if((i.length-a.length)%2===0)return}else{const a=Vr(n[2],"()");if(a>-1){const d=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,d).trim(),n[3]=""}}let r=n[2],o="";if(this.options.pedantic){const a=this.rules.other.pedanticHrefTitle.exec(r);a&&(r=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?r=r.slice(1):r=r.slice(1,-1)),it(n,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(e,n){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){const r=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),o=n[r.toLowerCase()];if(!o){const a=i[0].charAt(0);return{type:"text",raw:a,text:a}}return it(i,o,i[0],this.lexer,this.rules)}}emStrong(e,n,i=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&i.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const a=[...r[0]].length-1;let c,d,l=a,s=0;const u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,n=n.slice(-1*e.length+a);(r=u.exec(n))!=null;){if(c=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!c)continue;if(d=[...c].length,r[3]||r[4]){l+=d;continue}else if((r[5]||r[6])&&a%3&&!((a+d)%3)){s+=d;continue}if(l-=d,l>0)continue;d=Math.min(d,d+l+s);const h=[...r[0]][0].length,p=e.slice(0,a+r.index+h+d);if(Math.min(a,d)%2){const m=p.slice(1,-1);return{type:"em",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}const f=p.slice(2,-2);return{type:"strong",raw:p,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let i=n[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(i),o=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return r&&o&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:n[0],text:i}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let i,r;return n[2]==="@"?(i=n[1],r="mailto:"+i):(i=n[1],r=i),{type:"link",raw:n[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}url(e){var i;let n;if(n=this.rules.inline.url.exec(e)){let r,o;if(n[2]==="@")r=n[0],o="mailto:"+r;else{let a;do a=n[0],n[0]=((i=this.rules.inline._backpedal.exec(n[0]))==null?void 0:i[0])??"";while(a!==n[0]);r=n[0],n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){const i=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:i}}}}class H{constructor(e){C(this,"tokens");C(this,"options");C(this,"state");C(this,"tokenizer");C(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||he,this.options.tokenizer=this.options.tokenizer||new Ve,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:$,block:Be.normal,inline:Ce.normal};this.options.pedantic?(n.block=Be.pedantic,n.inline=Ce.pedantic):this.options.gfm&&(n.block=Be.gfm,this.options.breaks?n.inline=Ce.breaks:n.inline=Ce.gfm),this.tokenizer.rules=n}static get rules(){return{block:Be,inline:Ce}}static lex(e,n){return new H(n).lex(e)}static lexInline(e,n){return new H(n).inlineTokens(e)}lex(e){e=e.replace($.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const i=this.inlineQueue[n];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],i=!1){var r,o,a;for(this.options.pedantic&&(e=e.replace($.tabCharGlobal,"    ").replace($.spaceLine,""));e;){let c;if((o=(r=this.options.extensions)==null?void 0:r.block)!=null&&o.some(l=>(c=l.call({lexer:this},e,n))?(e=e.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.space(e)){e=e.substring(c.raw.length);const l=n.at(-1);c.raw.length===1&&l!==void 0?l.raw+=`
`:n.push(c);continue}if(c=this.tokenizer.code(e)){e=e.substring(c.raw.length);const l=n.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=`
`+c.raw,l.text+=`
`+c.text,this.inlineQueue.at(-1).src=l.text):n.push(c);continue}if(c=this.tokenizer.fences(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.heading(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.hr(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.blockquote(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.list(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.html(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.def(e)){e=e.substring(c.raw.length);const l=n.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=`
`+c.raw,l.text+=`
`+c.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[c.tag]||(this.tokens.links[c.tag]={href:c.href,title:c.title});continue}if(c=this.tokenizer.table(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.lheading(e)){e=e.substring(c.raw.length),n.push(c);continue}let d=e;if((a=this.options.extensions)!=null&&a.startBlock){let l=1/0;const s=e.slice(1);let u;this.options.extensions.startBlock.forEach(h=>{u=h.call({lexer:this},s),typeof u=="number"&&u>=0&&(l=Math.min(l,u))}),l<1/0&&l>=0&&(d=e.substring(0,l+1))}if(this.state.top&&(c=this.tokenizer.paragraph(d))){const l=n.at(-1);i&&(l==null?void 0:l.type)==="paragraph"?(l.raw+=`
`+c.raw,l.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):n.push(c),i=d.length!==e.length,e=e.substring(c.raw.length);continue}if(c=this.tokenizer.text(e)){e=e.substring(c.raw.length);const l=n.at(-1);(l==null?void 0:l.type)==="text"?(l.raw+=`
`+c.raw,l.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):n.push(c);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var c,d,l;let i=e,r=null;if(this.tokens.links){const s=Object.keys(this.tokens.links);if(s.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)s.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o=!1,a="";for(;e;){o||(a=""),o=!1;let s;if((d=(c=this.options.extensions)==null?void 0:c.inline)!=null&&d.some(h=>(s=h.call({lexer:this},e,n))?(e=e.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.tag(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length);const h=n.at(-1);s.type==="text"&&(h==null?void 0:h.type)==="text"?(h.raw+=s.raw,h.text+=s.text):n.push(s);continue}if(s=this.tokenizer.emStrong(e,i,a)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.del(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.autolink(e)){e=e.substring(s.raw.length),n.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(e))){e=e.substring(s.raw.length),n.push(s);continue}let u=e;if((l=this.options.extensions)!=null&&l.startInline){let h=1/0;const p=e.slice(1);let f;this.options.extensions.startInline.forEach(m=>{f=m.call({lexer:this},p),typeof f=="number"&&f>=0&&(h=Math.min(h,f))}),h<1/0&&h>=0&&(u=e.substring(0,h+1))}if(s=this.tokenizer.inlineText(u)){e=e.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(a=s.raw.slice(-1)),o=!0;const h=n.at(-1);(h==null?void 0:h.type)==="text"?(h.raw+=s.raw,h.text+=s.text):n.push(s);continue}if(e){const h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return n}}class Ke{constructor(e){C(this,"options");C(this,"parser");this.options=e||he}space(e){return""}code({text:e,lang:n,escaped:i}){var a;const r=(a=(n||"").match($.notSpaceStart))==null?void 0:a[0],o=e.replace($.endingNewline,"")+`
`;return r?'<pre><code class="language-'+U(r)+'">'+(i?o:U(o,!0))+`</code></pre>
`:"<pre><code>"+(i?o:U(o,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,i=e.start;let r="";for(let c=0;c<e.items.length;c++){const d=e.items[c];r+=this.listitem(d)}const o=n?"ol":"ul",a=n&&i!==1?' start="'+i+'"':"";return"<"+o+a+`>
`+r+"</"+o+`>
`}listitem(e){var i;let n="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?((i=e.tokens[0])==null?void 0:i.type)==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+U(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):n+=r+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",i="";for(let o=0;o<e.header.length;o++)i+=this.tablecell(e.header[o]);n+=this.tablerow({text:i});let r="";for(let o=0;o<e.rows.length;o++){const a=e.rows[o];i="";for(let c=0;c<a.length;c++)i+=this.tablecell(a[c]);r+=this.tablerow({text:i})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+n+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${U(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:i}){const r=this.parser.parseInline(i),o=nt(e);if(o===null)return r;e=o;let a='<a href="'+e+'"';return n&&(a+=' title="'+U(n)+'"'),a+=">"+r+"</a>",a}image({href:e,title:n,text:i}){const r=nt(e);if(r===null)return U(i);e=r;let o=`<img src="${e}" alt="${i}"`;return n&&(o+=` title="${U(n)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:U(e.text)}}class $n{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class L{constructor(e){C(this,"options");C(this,"renderer");C(this,"textRenderer");this.options=e||he,this.options.renderer=this.options.renderer||new Ke,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new $n}static parse(e,n){return new L(n).parse(e)}static parseInline(e,n){return new L(n).parseInline(e)}parse(e,n=!0){var r,o;let i="";for(let a=0;a<e.length;a++){const c=e[a];if((o=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&o[c.type]){const l=c,s=this.options.extensions.renderers[l.type].call({parser:this},l);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){i+=s||"";continue}}const d=c;switch(d.type){case"space":{i+=this.renderer.space(d);continue}case"hr":{i+=this.renderer.hr(d);continue}case"heading":{i+=this.renderer.heading(d);continue}case"code":{i+=this.renderer.code(d);continue}case"table":{i+=this.renderer.table(d);continue}case"blockquote":{i+=this.renderer.blockquote(d);continue}case"list":{i+=this.renderer.list(d);continue}case"html":{i+=this.renderer.html(d);continue}case"paragraph":{i+=this.renderer.paragraph(d);continue}case"text":{let l=d,s=this.renderer.text(l);for(;a+1<e.length&&e[a+1].type==="text";)l=e[++a],s+=`
`+this.renderer.text(l);n?i+=this.renderer.paragraph({type:"paragraph",raw:s,text:s,tokens:[{type:"text",raw:s,text:s,escaped:!0}]}):i+=s;continue}default:{const l='Token with "'+d.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}parseInline(e,n=this.renderer){var r,o;let i="";for(let a=0;a<e.length;a++){const c=e[a];if((o=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&o[c.type]){const l=this.options.extensions.renderers[c.type].call({parser:this},c);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(c.type)){i+=l||"";continue}}const d=c;switch(d.type){case"escape":{i+=n.text(d);break}case"html":{i+=n.html(d);break}case"link":{i+=n.link(d);break}case"image":{i+=n.image(d);break}case"strong":{i+=n.strong(d);break}case"em":{i+=n.em(d);break}case"codespan":{i+=n.codespan(d);break}case"br":{i+=n.br(d);break}case"del":{i+=n.del(d);break}case"text":{i+=n.text(d);break}default:{const l='Token with "'+d.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}}class Ie{constructor(e){C(this,"options");C(this,"block");this.options=e||he}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?H.lex:H.lexInline}provideParser(){return this.block?L.parse:L.parseInline}}C(Ie,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class Xr{constructor(...e){C(this,"defaults",Mn());C(this,"options",this.setOptions);C(this,"parse",this.parseMarkdown(!0));C(this,"parseInline",this.parseMarkdown(!1));C(this,"Parser",L);C(this,"Renderer",Ke);C(this,"TextRenderer",$n);C(this,"Lexer",H);C(this,"Tokenizer",Ve);C(this,"Hooks",Ie);this.use(...e)}walkTokens(e,n){var r,o;let i=[];for(const a of e)switch(i=i.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const d of c.header)i=i.concat(this.walkTokens(d.tokens,n));for(const d of c.rows)for(const l of d)i=i.concat(this.walkTokens(l.tokens,n));break}case"list":{const c=a;i=i.concat(this.walkTokens(c.items,n));break}default:{const c=a;(o=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&o[c.type]?this.defaults.extensions.childTokens[c.type].forEach(d=>{const l=c[d].flat(1/0);i=i.concat(this.walkTokens(l,n))}):c.tokens&&(i=i.concat(this.walkTokens(c.tokens,n)))}}return i}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const r={...i};if(r.async=this.defaults.async||r.async||!1,i.extensions&&(i.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...c){let d=o.renderer.apply(this,c);return d===!1&&(d=a.apply(this,c)),d}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),r.extensions=n),i.renderer){const o=this.defaults.renderer||new Ke(this.defaults);for(const a in i.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,d=i.renderer[c],l=o[c];o[c]=(...s)=>{let u=d.apply(o,s);return u===!1&&(u=l.apply(o,s)),u||""}}r.renderer=o}if(i.tokenizer){const o=this.defaults.tokenizer||new Ve(this.defaults);for(const a in i.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,d=i.tokenizer[c],l=o[c];o[c]=(...s)=>{let u=d.apply(o,s);return u===!1&&(u=l.apply(o,s)),u}}r.tokenizer=o}if(i.hooks){const o=this.defaults.hooks||new Ie;for(const a in i.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,d=i.hooks[c],l=o[c];Ie.passThroughHooks.has(a)?o[c]=s=>{if(this.defaults.async)return Promise.resolve(d.call(o,s)).then(h=>l.call(o,h));const u=d.call(o,s);return l.call(o,u)}:o[c]=(...s)=>{let u=d.apply(o,s);return u===!1&&(u=l.apply(o,s)),u}}r.hooks=o}if(i.walkTokens){const o=this.defaults.walkTokens,a=i.walkTokens;r.walkTokens=function(c){let d=[];return d.push(a.call(this,c)),o&&(d=d.concat(o.call(this,c))),d}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return H.lex(e,n??this.defaults)}parser(e,n){return L.parse(e,n??this.defaults)}parseMarkdown(e){return(i,r)=>{const o={...r},a={...this.defaults,...o},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const d=a.hooks?a.hooks.provideLexer():e?H.lex:H.lexInline,l=a.hooks?a.hooks.provideParser():e?L.parse:L.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(i):i).then(s=>d(s,a)).then(s=>a.hooks?a.hooks.processAllTokens(s):s).then(s=>a.walkTokens?Promise.all(this.walkTokens(s,a.walkTokens)).then(()=>s):s).then(s=>l(s,a)).then(s=>a.hooks?a.hooks.postprocess(s):s).catch(c);try{a.hooks&&(i=a.hooks.preprocess(i));let s=d(i,a);a.hooks&&(s=a.hooks.processAllTokens(s)),a.walkTokens&&this.walkTokens(s,a.walkTokens);let u=l(s,a);return a.hooks&&(u=a.hooks.postprocess(u)),u}catch(s){return c(s)}}}onError(e,n){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+U(i.message+"",!0)+"</pre>";return n?Promise.resolve(r):r}if(n)return Promise.reject(i);throw i}}}const se=new Xr;function k(t,e){return se.parse(t,e)}k.options=k.setOptions=function(t){return se.setOptions(t),k.defaults=se.defaults,Wt(k.defaults),k};k.getDefaults=Mn;k.defaults=he;k.use=function(...t){return se.use(...t),k.defaults=se.defaults,Wt(k.defaults),k};k.walkTokens=function(t,e){return se.walkTokens(t,e)};k.parseInline=se.parseInline;k.Parser=L;k.parser=L.parse;k.Renderer=Ke;k.TextRenderer=$n;k.Lexer=H;k.lexer=H.lex;k.Tokenizer=Ve;k.Hooks=Ie;k.parse=k;k.options;k.setOptions;k.use;k.walkTokens;k.parseInline;L.parse;H.lex;var Yr=de('<div class="svelte-1fic553"><!></div>'),Jr=de('<fieldset class="fancy"><legend> </legend> <!></fieldset>'),eo=de('<h2 style="font-size: 1.5rem; font-weight: medium; margin: 0">Final Score</h2> <div style="font-size: 2rem; font-weight: bold; text-align: center; margin-bottom: 1rem" class="score svelte-1fic553"> </div> <table style="margin: auto"><tbody><tr><th>Correct</th><td> </td></tr><tr><th>Incorrect</th><td> </td></tr></tbody></table>',1),no=de('<article><nav class="svelte-1fic553"><button type="button" class="svelte-1fic553">Previous</button> <div class="timer svelte-1fic553">Timer <time class="svelte-1fic553"> </time></div> <button type="button" class="svelte-1fic553">Next</button></nav> <!></article>');function to(t,e){en(e,!1);let n=Ne(e,"num_questions",12,5),i=G(),r=G(0),o=G([]),a,c=G(),d=G("00:00:00"),l=G(!1);function s(){g(r)<=g(i).length&&Nn(r)}function u(x){return k(x,{async:!1}).split(/^<h2>.+<\/h2>\n/gm).filter(Boolean)}Qt(()=>{M(i,[...u(wr),...u(kr)]),$t(g(i)),M(i,g(i).slice(0,n())),n(g(i).length),M(o,new Array(n()).fill(void 0)),a=new Date,M(c,setInterval(()=>{M(d,yr(a))},1e3))});function h(x){lt(o,g(o)[g(r)]=x)}yt(()=>(g(l),g(o),g(c)),()=>{M(l,g(o).every(x=>typeof x=="boolean")),g(l)&&clearInterval(g(c))}),bt(),Rt();var p=no(),f=S(p),m=S(f),y=Q(m,2),v=Q(S(y)),P=S(v),I=Q(y,2),B=Q(f,2);qt(B,()=>g(r)<n(),x=>{var E=Jr(),q=S(E),w=S(q),N=Q(q,2);or(N,1,()=>g(i),ir,(X,on,De)=>{var Te=Yr(),an=S(Te),sn=cn(()=>typeof g(o)[g(r)]=="boolean");vr(an,{get src(){return g(on)},onSubmit:h,get answered(){return g(sn)}}),Y(()=>Gn(Te,"hidden",g(r)!==De)),re(X,Te)}),Y(()=>{E.disabled=typeof g(o)[g(r)]=="boolean",fe(w,`Question: ${g(r)+1} of ${n()??""}`)}),re(x,E)},x=>{var E=eo(),q=Q(Si(E),2);const w=cn(()=>g(o).filter(Boolean).length/n()*100<70);Y(()=>Gn(q,"failed",g(w)));var N=S(q);Y(()=>fe(N,`${(g(o).filter(Boolean).length/n()*100).toFixed(2)??""}%`));var X=Q(q,2),on=S(X),De=S(on),Te=Q(S(De)),an=S(Te);Y(()=>fe(an,`${g(o).filter(Boolean).length??""} out of ${n()??""}`));var sn=Q(De),Ft=Q(S(sn)),Ut=S(Ft);Y(()=>fe(Ut,`${g(o).filter(Gt=>!Gt).length??""} out of ${n()??""}`)),re(x,E)}),Y(()=>{m.disabled=g(r)===0,fe(P,g(d)),I.disabled=g(r)===n()||typeof g(o)[g(r)]!="boolean"}),Ge("click",m,()=>Nn(r,-1)),Ge("click",I,s),re(t,p),nn()}var io=de('<fieldset class="fancy flex flex-col items-center justify-center gap-2"><label for="numquestions">How many questions?</label> <input type="number" id="numquestions" min="1" class="pl-2 py-1 rounded border border-neutral-300 dark:border-neutral-600"> <button class="mt-4">Start</button></fieldset>'),ro=de('<main><header class="mb-6 grid grid-cols-[1fr,max-content,1fr] gap-4 justify-center items-center"><div></div> <h1 class="mb-2 text-5xl font-bold">NHA Practice Test</h1> <label class="cursor-pointer text-2xl inline-grid justify-self-end justify-center items-center text-center border p-2 pt-1 rounded-full size-12 hover:bg-neutral-200 dark:hover:bg-neutral-700 leading-none"><input type="checkbox" class="hidden"> <small class="text-xs text-center block sr-only">Theme</small></label></header> <!></main>');function oo(t,e){en(e,!1);let n=G(225),i=G(!1),r=G(!1);yt(()=>g(r),()=>{document.documentElement.classList.toggle("dark",g(r))}),bt();var o=ro(),a=S(o),c=Q(S(a),4),d=S(c),l=Q(d),s=Q(a,2);qt(s,()=>!g(i),u=>{var h=io(),p=Q(S(h),2),f=Q(p,2);hr(p,()=>g(n),m=>M(n,m)),Ge("click",f,()=>M(i,!0)),re(u,h)},u=>{to(u,{get num_questions(){return g(n)}})}),Y(()=>fe(l,` ${(g(r)?"🌙":"☀️")??""} `)),ur(d,()=>g(r),u=>M(r,u)),re(t,o),nn()}nr(oo,{target:document.getElementById("app")});
