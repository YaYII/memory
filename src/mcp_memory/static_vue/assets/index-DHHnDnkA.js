(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const wt={},pr=[],mi=()=>{},mm=()=>!1,Cl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Lf=t=>t.startsWith("onUpdate:"),Bt=Object.assign,Df=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},F0=Object.prototype.hasOwnProperty,gt=(t,e)=>F0.call(t,e),qe=Array.isArray,mr=t=>Bo(t)==="[object Map]",Rl=t=>Bo(t)==="[object Set]",Id=t=>Bo(t)==="[object Date]",Ze=t=>typeof t=="function",Pt=t=>typeof t=="string",yi=t=>typeof t=="symbol",pt=t=>t!==null&&typeof t=="object",gm=t=>(pt(t)||Ze(t))&&Ze(t.then)&&Ze(t.catch),_m=Object.prototype.toString,Bo=t=>_m.call(t),O0=t=>Bo(t).slice(8,-1),vm=t=>Bo(t)==="[object Object]",Pl=t=>Pt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,lo=Pf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ll=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},B0=/-\w/g,un=Ll(t=>t.replace(B0,e=>e.slice(1).toUpperCase())),k0=/\B([A-Z])/g,hs=Ll(t=>t.replace(k0,"-$1").toLowerCase()),Dl=Ll(t=>t.charAt(0).toUpperCase()+t.slice(1)),ac=Ll(t=>t?`on${Dl(t)}`:""),ui=(t,e)=>!Object.is(t,e),Oa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},xm=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Il=t=>{const e=parseFloat(t);return isNaN(e)?t:e},z0=t=>{const e=Pt(t)?Number(t):NaN;return isNaN(e)?t:e};let Nd;const Nl=()=>Nd||(Nd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hn(t){if(qe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Pt(i)?W0(i):Hn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Pt(t)||pt(t))return t}const V0=/;(?![^(]*\))/g,H0=/:([^]+)/,G0=/\/\*[^]*?\*\//g;function W0(t){const e={};return t.replace(G0,"").split(V0).forEach(n=>{if(n){const i=n.split(H0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ht(t){let e="";if(Pt(t))e=t;else if(qe(t))for(let n=0;n<t.length;n++){const i=ht(t[n]);i&&(e+=i+" ")}else if(pt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",X0=Pf($0);function ym(t){return!!t||t===""}function q0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ko(t[i],e[i]);return n}function ko(t,e){if(t===e)return!0;let n=Id(t),i=Id(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=yi(t),i=yi(e),n||i)return t===e;if(n=qe(t),i=qe(e),n||i)return n&&i?q0(t,e):!1;if(n=pt(t),i=pt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ko(t[o],e[o]))return!1}}return String(t)===String(e)}function Y0(t,e){return t.findIndex(n=>ko(n,e))}const Sm=t=>!!(t&&t.__v_isRef===!0),ne=t=>Pt(t)?t:t==null?"":qe(t)||pt(t)&&(t.toString===_m||!Ze(t.toString))?Sm(t)?ne(t.value):JSON.stringify(t,Mm,2):String(t),Mm=(t,e)=>Sm(e)?Mm(t,e.value):mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[lc(i,r)+" =>"]=s,n),{})}:Rl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>lc(n))}:yi(e)?lc(e):pt(e)&&!qe(e)&&!vm(e)?String(e):e,lc=(t,e="")=>{var n;return yi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class bm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Kt;try{return Kt=this,e()}finally{Kt=n}}}on(){++this._on===1&&(this.prevScope=Kt,Kt=this)}off(){this._on>0&&--this._on===0&&(Kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Em(t){return new bm(t)}function wm(){return Kt}function j0(t,e=!1){Kt&&Kt.cleanups.push(t)}let At;const cc=new WeakSet;class Tm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,cc.has(this)&&(cc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ud(this),Rm(this);const e=At,n=Xn;At=this,Xn=!0;try{return this.fn()}finally{Pm(this),At=e,Xn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Uf(e);this.deps=this.depsTail=void 0,Ud(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?cc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){lu(this)&&this.run()}get dirty(){return lu(this)}}let Am=0,co,uo;function Cm(t,e=!1){if(t.flags|=8,e){t.next=uo,uo=t;return}t.next=co,co=t}function If(){Am++}function Nf(){if(--Am>0)return;if(uo){let e=uo;for(uo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;co;){let e=co;for(co=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Rm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Pm(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Uf(i),K0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function lu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Lm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Lm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===bo)||(t.globalVersion=bo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!lu(t))))return;t.flags|=2;const e=t.dep,n=At,i=Xn;At=t,Xn=!0;try{Rm(t);const s=t.fn(t._value);(e.version===0||ui(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{At=n,Xn=i,Pm(t),t.flags&=-3}}function Uf(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Uf(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function K0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Xn=!0;const Dm=[];function ki(){Dm.push(Xn),Xn=!1}function zi(){const t=Dm.pop();Xn=t===void 0?!0:t}function Ud(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=At;At=void 0;try{e()}finally{At=n}}}let bo=0;class Z0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ff{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!At||!Xn||At===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==At)n=this.activeLink=new Z0(At,this),At.deps?(n.prevDep=At.depsTail,At.depsTail.nextDep=n,At.depsTail=n):At.deps=At.depsTail=n,Im(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=At.depsTail,n.nextDep=void 0,At.depsTail.nextDep=n,At.depsTail=n,At.deps===n&&(At.deps=i)}return n}trigger(e){this.version++,bo++,this.notify(e)}notify(e){If();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nf()}}}function Im(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Im(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const el=new WeakMap,Fs=Symbol(""),cu=Symbol(""),Eo=Symbol("");function Jt(t,e,n){if(Xn&&At){let i=el.get(t);i||el.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Ff),s.map=i,s.key=n),s.track()}}function Ni(t,e,n,i,s,r){const o=el.get(t);if(!o){bo++;return}const a=l=>{l&&l.trigger()};if(If(),e==="clear")o.forEach(a);else{const l=qe(t),c=l&&Pl(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Eo||!yi(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Eo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Fs)),mr(t)&&a(o.get(cu)));break;case"delete":l||(a(o.get(Fs)),mr(t)&&a(o.get(cu)));break;case"set":mr(t)&&a(o.get(Fs));break}}Nf()}function J0(t,e){const n=el.get(t);return n&&n.get(e)}function Ys(t){const e=ot(t);return e===t?e:(Jt(e,"iterate",Eo),Tn(t)?e:e.map(Yn))}function Ul(t){return Jt(t=ot(t),"iterate",Eo),t}function ai(t,e){return Vi(t)?br(gi(t)?Yn(e):e):Yn(e)}const Q0={__proto__:null,[Symbol.iterator](){return uc(this,Symbol.iterator,t=>ai(this,t))},concat(...t){return Ys(this).concat(...t.map(e=>qe(e)?Ys(e):e))},entries(){return uc(this,"entries",t=>(t[1]=ai(this,t[1]),t))},every(t,e){return wi(this,"every",t,e,void 0,arguments)},filter(t,e){return wi(this,"filter",t,e,n=>n.map(i=>ai(this,i)),arguments)},find(t,e){return wi(this,"find",t,e,n=>ai(this,n),arguments)},findIndex(t,e){return wi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return wi(this,"findLast",t,e,n=>ai(this,n),arguments)},findLastIndex(t,e){return wi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return wi(this,"forEach",t,e,void 0,arguments)},includes(...t){return fc(this,"includes",t)},indexOf(...t){return fc(this,"indexOf",t)},join(t){return Ys(this).join(t)},lastIndexOf(...t){return fc(this,"lastIndexOf",t)},map(t,e){return wi(this,"map",t,e,void 0,arguments)},pop(){return Vr(this,"pop")},push(...t){return Vr(this,"push",t)},reduce(t,...e){return Fd(this,"reduce",t,e)},reduceRight(t,...e){return Fd(this,"reduceRight",t,e)},shift(){return Vr(this,"shift")},some(t,e){return wi(this,"some",t,e,void 0,arguments)},splice(...t){return Vr(this,"splice",t)},toReversed(){return Ys(this).toReversed()},toSorted(t){return Ys(this).toSorted(t)},toSpliced(...t){return Ys(this).toSpliced(...t)},unshift(...t){return Vr(this,"unshift",t)},values(){return uc(this,"values",t=>ai(this,t))}};function uc(t,e,n){const i=Ul(t),s=i[e]();return i!==t&&!Tn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const ev=Array.prototype;function wi(t,e,n,i,s,r){const o=Ul(t),a=o!==t&&!Tn(t),l=o[e];if(l!==ev[e]){const d=l.apply(t,r);return a?Yn(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,ai(t,d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Fd(t,e,n,i){const s=Ul(t),r=s!==t&&!Tn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=ai(t,c)),n.call(this,c,ai(t,u),d,t)}):n.length>3&&(o=function(c,u,d){return n.call(this,c,u,d,t)}));const l=s[e](o,...i);return a?ai(t,l):l}function fc(t,e,n){const i=ot(t);Jt(i,"iterate",Eo);const s=i[e](...n);return(s===-1||s===!1)&&Ol(n[0])?(n[0]=ot(n[0]),i[e](...n)):s}function Vr(t,e,n=[]){ki(),If();const i=ot(t)[e].apply(t,n);return Nf(),zi(),i}const tv=Pf("__proto__,__v_isRef,__isVue"),Nm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yi));function nv(t){yi(t)||(t=String(t));const e=ot(this);return Jt(e,"has",t),e.hasOwnProperty(t)}class Um{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?dv:km:r?Bm:Om).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=qe(e);if(!s){let l;if(o&&(l=Q0[n]))return l;if(n==="hasOwnProperty")return nv}const a=Reflect.get(e,n,Ct(e)?e:i);if((yi(n)?Nm.has(n):tv(n))||(s||Jt(e,"get",n),r))return a;if(Ct(a)){const l=o&&Pl(n)?a:a.value;return s&&pt(l)?fu(l):l}return pt(a)?s?fu(a):Fl(a):a}}class Fm extends Um{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=qe(e)&&Pl(n);if(!this._isShallow){const c=Vi(r);if(!Tn(i)&&!Vi(i)&&(r=ot(r),i=ot(i)),!o&&Ct(r)&&!Ct(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:gt(e,n),l=Reflect.set(e,n,i,Ct(e)?e:s);return e===ot(s)&&(a?ui(i,r)&&Ni(e,"set",n,i):Ni(e,"add",n,i)),l}deleteProperty(e,n){const i=gt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Ni(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!yi(n)||!Nm.has(n))&&Jt(e,"has",n),i}ownKeys(e){return Jt(e,"iterate",qe(e)?"length":Fs),Reflect.ownKeys(e)}}class iv extends Um{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const sv=new Fm,rv=new iv,ov=new Fm(!0);const uu=t=>t,ta=t=>Reflect.getPrototypeOf(t);function av(t,e,n){return function(...i){const s=this.__v_raw,r=ot(s),o=mr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?uu:e?br:Yn;return!e&&Jt(r,"iterate",l?cu:Fs),Bt(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function na(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function lv(t,e){const n={get(s){const r=this.__v_raw,o=ot(r),a=ot(s);t||(ui(s,a)&&Jt(o,"get",s),Jt(o,"get",a));const{has:l}=ta(o),c=e?uu:t?br:Yn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Jt(ot(s),"iterate",Fs),s.size},has(s){const r=this.__v_raw,o=ot(r),a=ot(s);return t||(ui(s,a)&&Jt(o,"has",s),Jt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ot(a),c=e?uu:t?br:Yn;return!t&&Jt(l,"iterate",Fs),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Bt(n,t?{add:na("add"),set:na("set"),delete:na("delete"),clear:na("clear")}:{add(s){const r=ot(this),o=ta(r),a=ot(s),l=!e&&!Tn(s)&&!Vi(s)?a:s;return o.has.call(r,l)||ui(s,l)&&o.has.call(r,s)||ui(a,l)&&o.has.call(r,a)||(r.add(l),Ni(r,"add",l,l)),this},set(s,r){!e&&!Tn(r)&&!Vi(r)&&(r=ot(r));const o=ot(this),{has:a,get:l}=ta(o);let c=a.call(o,s);c||(s=ot(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ui(r,u)&&Ni(o,"set",s,r):Ni(o,"add",s,r),this},delete(s){const r=ot(this),{has:o,get:a}=ta(r);let l=o.call(r,s);l||(s=ot(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ni(r,"delete",s,void 0),c},clear(){const s=ot(this),r=s.size!==0,o=s.clear();return r&&Ni(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=av(s,t,e)}),n}function Of(t,e){const n=lv(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(gt(n,s)&&s in i?n:i,s,r)}const cv={get:Of(!1,!1)},uv={get:Of(!1,!0)},fv={get:Of(!0,!1)};const Om=new WeakMap,Bm=new WeakMap,km=new WeakMap,dv=new WeakMap;function hv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pv(t){return t.__v_skip||!Object.isExtensible(t)?0:hv(O0(t))}function Fl(t){return Vi(t)?t:Bf(t,!1,sv,cv,Om)}function mv(t){return Bf(t,!1,ov,uv,Bm)}function fu(t){return Bf(t,!0,rv,fv,km)}function Bf(t,e,n,i,s){if(!pt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=pv(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function gi(t){return Vi(t)?gi(t.__v_raw):!!(t&&t.__v_isReactive)}function Vi(t){return!!(t&&t.__v_isReadonly)}function Tn(t){return!!(t&&t.__v_isShallow)}function Ol(t){return t?!!t.__v_raw:!1}function ot(t){const e=t&&t.__v_raw;return e?ot(e):t}function kf(t){return!gt(t,"__v_skip")&&Object.isExtensible(t)&&xm(t,"__v_skip",!0),t}const Yn=t=>pt(t)?Fl(t):t,br=t=>pt(t)?fu(t):t;function Ct(t){return t?t.__v_isRef===!0:!1}function Te(t){return zm(t,!1)}function gv(t){return zm(t,!0)}function zm(t,e){return Ct(t)?t:new _v(t,e)}class _v{constructor(e,n){this.dep=new Ff,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ot(e),this._value=n?e:Yn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Tn(e)||Vi(e);e=i?e:ot(e),ui(e,n)&&(this._rawValue=e,this._value=i?e:Yn(e),this.dep.trigger())}}function Me(t){return Ct(t)?t.value:t}const vv={get:(t,e,n)=>e==="__v_raw"?t:Me(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Ct(s)&&!Ct(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Vm(t){return gi(t)?t:new Proxy(t,vv)}function xv(t){const e=qe(t)?new Array(t.length):{};for(const n in t)e[n]=Hm(t,n);return e}class yv{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=ot(e);let s=!0,r=e;if(!qe(e)||!Pl(String(n)))do s=!Ol(r)||Tn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Me(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ct(this._raw[this._key])){const n=this._object[this._key];if(Ct(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return J0(this._raw,this._key)}}class Sv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Mv(t,e,n){return Ct(t)?t:Ze(t)?new Sv(t):pt(t)&&arguments.length>1?Hm(t,e,n):Te(t)}function Hm(t,e,n){return new yv(t,e,n)}class bv{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ff(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&At!==this)return Cm(this,!0),!0}get value(){const e=this.dep.track();return Lm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ev(t,e,n=!1){let i,s;return Ze(t)?i=t:(i=t.get,s=t.set),new bv(i,s,n)}const ia={},tl=new WeakMap;let ws;function wv(t,e=!1,n=ws){if(n){let i=tl.get(n);i||tl.set(n,i=[]),i.push(t)}}function Tv(t,e,n=wt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=y=>s?y:Tn(y)||s===!1||s===0?Ui(y,1):Ui(y);let u,d,f,h,m=!1,_=!1;if(Ct(t)?(d=()=>t.value,m=Tn(t)):gi(t)?(d=()=>c(t),m=!0):qe(t)?(_=!0,m=t.some(y=>gi(y)||Tn(y)),d=()=>t.map(y=>{if(Ct(y))return y.value;if(gi(y))return c(y);if(Ze(y))return l?l(y,2):y()})):Ze(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){ki();try{f()}finally{zi()}}const y=ws;ws=u;try{return l?l(t,3,[h]):t(h)}finally{ws=y}}:d=mi,e&&s){const y=d,T=s===!0?1/0:s;d=()=>Ui(y(),T)}const p=wm(),g=()=>{u.stop(),p&&p.active&&Df(p.effects,u)};if(r&&e){const y=e;e=(...T)=>{y(...T),g()}}let x=_?new Array(t.length).fill(ia):ia;const E=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const T=u.run();if(s||m||(_?T.some((C,L)=>ui(C,x[L])):ui(T,x))){f&&f();const C=ws;ws=u;try{const L=[T,x===ia?void 0:_&&x[0]===ia?[]:x,h];x=T,l?l(e,3,L):e(...L)}finally{ws=C}}}else u.run()};return a&&a(E),u=new Tm(d),u.scheduler=o?()=>o(E,!1):E,h=y=>wv(y,!1,u),f=u.onStop=()=>{const y=tl.get(u);if(y){if(l)l(y,4);else for(const T of y)T();tl.delete(u)}},e?i?E(!0):x=u.run():o?o(E.bind(null,!0),!0):u.run(),g.pause=u.pause.bind(u),g.resume=u.resume.bind(u),g.stop=g,g}function Ui(t,e=1/0,n){if(e<=0||!pt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ct(t))Ui(t.value,e,n);else if(qe(t))for(let i=0;i<t.length;i++)Ui(t[i],e,n);else if(Rl(t)||mr(t))t.forEach(i=>{Ui(i,e,n)});else if(vm(t)){for(const i in t)Ui(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ui(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zo(t,e,n,i){try{return i?t(...i):t()}catch(s){Bl(s,e,n)}}function jn(t,e,n,i){if(Ze(t)){const s=zo(t,e,n,i);return s&&gm(s)&&s.catch(r=>{Bl(r,e,n)}),s}if(qe(t)){const s=[];for(let r=0;r<t.length;r++)s.push(jn(t[r],e,n,i));return s}}function Bl(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||wt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){ki(),zo(r,null,10,[t,l,c]),zi();return}}Av(t,n,s,i,o)}function Av(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const an=[];let ri=-1;const gr=[];let rs=null,dr=0;const Gm=Promise.resolve();let nl=null;function Vo(t){const e=nl||Gm;return t?e.then(this?t.bind(this):t):e}function Cv(t){let e=ri+1,n=an.length;for(;e<n;){const i=e+n>>>1,s=an[i],r=wo(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function zf(t){if(!(t.flags&1)){const e=wo(t),n=an[an.length-1];!n||!(t.flags&2)&&e>=wo(n)?an.push(t):an.splice(Cv(e),0,t),t.flags|=1,Wm()}}function Wm(){nl||(nl=Gm.then(Xm))}function Rv(t){qe(t)?gr.push(...t):rs&&t.id===-1?rs.splice(dr+1,0,t):t.flags&1||(gr.push(t),t.flags|=1),Wm()}function Od(t,e,n=ri+1){for(;n<an.length;n++){const i=an[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;an.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function $m(t){if(gr.length){const e=[...new Set(gr)].sort((n,i)=>wo(n)-wo(i));if(gr.length=0,rs){rs.push(...e);return}for(rs=e,dr=0;dr<rs.length;dr++){const n=rs[dr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}rs=null,dr=0}}const wo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Xm(t){try{for(ri=0;ri<an.length;ri++){const e=an[ri];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ri<an.length;ri++){const e=an[ri];e&&(e.flags&=-2)}ri=-1,an.length=0,$m(),nl=null,(an.length||gr.length)&&Xm()}}let bn=null,qm=null;function il(t){const e=bn;return bn=t,qm=t&&t.type.__scopeId||null,e}function fo(t,e=bn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&ol(-1);const r=il(e);let o;try{o=t(...s)}finally{il(r),i._d&&ol(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Gt(t,e){if(bn===null)return t;const n=Wl(bn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=wt]=e[s];r&&(Ze(r)&&(r={mounted:r,updated:r}),r.deep&&Ui(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function gs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ki(),jn(l,n,8,[t.el,a,t,e]),zi())}}function Pv(t,e){if(Qt){let n=Qt.provides;const i=Qt.parent&&Qt.parent.provides;i===n&&(n=Qt.provides=Object.create(i)),n[t]=e}}function ho(t,e,n=!1){const i=Gl();if(i||Os){let s=Os?Os._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ze(e)?e.call(i&&i.proxy):e}}function Lv(){return!!(Gl()||Os)}const Dv=Symbol.for("v-scx"),Iv=()=>ho(Dv);function qn(t,e,n){return Ym(t,e,n)}function Ym(t,e,n=wt){const{immediate:i,deep:s,flush:r,once:o}=n,a=Bt({},n),l=e&&i||!e&&r!=="post";let c;if(Co){if(r==="sync"){const h=Iv();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=mi,h.resume=mi,h.pause=mi,h}}const u=Qt;a.call=(h,m,_)=>jn(h,u,m,_);let d=!1;r==="post"?a.scheduler=h=>{jt(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,m)=>{m?h():zf(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Tv(t,e,a);return Co&&(c?c.push(f):l&&f()),f}function Nv(t,e,n){const i=this.proxy,s=Pt(t)?t.includes(".")?jm(i,t):()=>i[t]:t.bind(i,i);let r;Ze(e)?r=e:(r=e.handler,n=e);const o=Ho(this),a=Ym(s,r.bind(i),n);return o(),a}function jm(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Km=Symbol("_vte"),Zm=t=>t.__isTeleport,po=t=>t&&(t.disabled||t.disabled===""),Bd=t=>t&&(t.defer||t.defer===""),kd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,zd=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,du=(t,e)=>{const n=t&&t.to;return Pt(n)?e?e(n):null:n},Jm={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:m,createText:_,createComment:p}}=c,g=po(e.props);let{shapeFlag:x,children:E,dynamicChildren:y}=e;if(t==null){const T=e.el=_(""),C=e.anchor=_("");h(T,n,i),h(C,n,i);const L=(M,N)=>{x&16&&u(E,M,N,s,r,o,a,l)},S=()=>{const M=e.target=du(e.props,m),N=hu(M,e,_,h);M&&(o!=="svg"&&kd(M)?o="svg":o!=="mathml"&&zd(M)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(M),g||(L(M,N),Ba(e,!1)))};g&&(L(n,C),Ba(e,!0)),Bd(e.props)?(e.el.__isMounted=!1,jt(()=>{S(),delete e.el.__isMounted},r)):S()}else{if(Bd(e.props)&&t.el.__isMounted===!1){jt(()=>{Jm.process(t,e,n,i,s,r,o,a,l,c)},r);return}e.el=t.el,e.targetStart=t.targetStart;const T=e.anchor=t.anchor,C=e.target=t.target,L=e.targetAnchor=t.targetAnchor,S=po(t.props),M=S?n:C,N=S?T:L;if(o==="svg"||kd(C)?o="svg":(o==="mathml"||zd(C))&&(o="mathml"),y?(f(t.dynamicChildren,y,M,s,r,o,a),$f(t,e,!0)):l||d(t,e,M,N,s,r,o,a,!1),g)S?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):sa(e,n,T,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const D=e.target=du(e.props,m);D&&sa(e,D,null,c,0)}else S&&sa(e,C,L,c,1);Ba(e,g)}},remove(t,e,n,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=t;if(d&&(s(c),s(u)),r&&s(l),o&16){const h=r||!po(f);for(let m=0;m<a.length;m++){const _=a[m];i(_,e,n,h,!!_.dynamicChildren)}}},move:sa,hydrate:Uv};function sa(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,d=r===2;if(d&&i(o,e,n),(!d||po(u))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,n,2);d&&i(a,e,n)}function Uv(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},d){function f(p,g){let x=g;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")e.targetStart=x;else if(x.data==="teleport anchor"){e.targetAnchor=x,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}x=o(x)}}function h(p,g){g.anchor=d(o(p),g,a(p),n,i,s,r)}const m=e.target=du(e.props,l),_=po(e.props);if(m){const p=m._lpa||m.firstChild;e.shapeFlag&16&&(_?(h(t,e),f(m,p),e.targetAnchor||hu(m,e,u,c,a(t)===m?t:null)):(e.anchor=o(t),f(m,p),e.targetAnchor||hu(m,e,u,c),d(p&&o(p),e,m,n,i,s,r))),Ba(e,_)}else _&&e.shapeFlag&16&&(h(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const Qm=Jm;function Ba(t,e){const n=t.ctx;if(n&&n.ut){let i,s;for(e?(i=t.el,s=t.anchor):(i=t.targetStart,s=t.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function hu(t,e,n,i,s=null){const r=e.targetStart=n(""),o=e.targetAnchor=n("");return r[Km]=o,t&&(i(r,t,s),i(o,t,s)),o}const oi=Symbol("_leaveCb"),Hr=Symbol("_enterCb");function eg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kn(()=>{t.isMounted=!0}),$s(()=>{t.isUnmounting=!0}),t}const Pn=[Function,Array],tg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pn,onEnter:Pn,onAfterEnter:Pn,onEnterCancelled:Pn,onBeforeLeave:Pn,onLeave:Pn,onAfterLeave:Pn,onLeaveCancelled:Pn,onBeforeAppear:Pn,onAppear:Pn,onAfterAppear:Pn,onAppearCancelled:Pn},ng=t=>{const e=t.subTree;return e.component?ng(e.component):e},Fv={name:"BaseTransition",props:tg,setup(t,{slots:e}){const n=Gl(),i=eg();return()=>{const s=e.default&&Vf(e.default(),!0);if(!s||!s.length)return;const r=ig(s),o=ot(t),{mode:a}=o;if(i.isLeaving)return dc(r);const l=Vd(r);if(!l)return dc(r);let c=To(l,o,i,n,d=>c=d);l.type!==ln&&Vs(l,c);let u=n.subTree&&Vd(n.subTree);if(u&&u.type!==ln&&!As(u,l)&&ng(n).type!==ln){let d=To(u,o,i,n);if(Vs(u,d),a==="out-in"&&l.type!==ln)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},dc(r);a==="in-out"&&l.type!==ln?d.delayLeave=(f,h,m)=>{const _=sg(i,u);_[String(u.key)]=u,f[oi]=()=>{h(),f[oi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{m(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function ig(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ln){e=n;break}}return e}const Ov=Fv;function sg(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function To(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:p,onAppear:g,onAfterAppear:x,onAppearCancelled:E}=e,y=String(t.key),T=sg(n,t),C=(M,N)=>{M&&jn(M,i,9,N)},L=(M,N)=>{const D=N[1];C(M,N),qe(M)?M.every(U=>U.length<=1)&&D():M.length<=1&&D()},S={mode:o,persisted:a,beforeEnter(M){let N=l;if(!n.isMounted)if(r)N=p||l;else return;M[oi]&&M[oi](!0);const D=T[y];D&&As(t,D)&&D.el[oi]&&D.el[oi](),C(N,[M])},enter(M){if(T[y]===t)return;let N=c,D=u,U=d;if(!n.isMounted)if(r)N=g||c,D=x||u,U=E||d;else return;let V=!1;M[Hr]=B=>{V||(V=!0,B?C(U,[M]):C(D,[M]),S.delayedLeave&&S.delayedLeave(),M[Hr]=void 0)};const $=M[Hr].bind(null,!1);N?L(N,[M,$]):$()},leave(M,N){const D=String(t.key);if(M[Hr]&&M[Hr](!0),n.isUnmounting)return N();C(f,[M]);let U=!1;M[oi]=$=>{U||(U=!0,N(),$?C(_,[M]):C(m,[M]),M[oi]=void 0,T[D]===t&&delete T[D])};const V=M[oi].bind(null,!1);T[D]=t,h?L(h,[M,V]):V()},clone(M){const N=To(M,e,n,i,s);return s&&s(N),N}};return S}function dc(t){if(kl(t))return t=fs(t),t.children=null,t}function Vd(t){if(!kl(t))return Zm(t.type)&&t.children?ig(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ze(n.default))return n.default()}}function Vs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Vs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Vf(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===at?(o.patchFlag&128&&s++,i=i.concat(Vf(o.children,e,a))):(e||o.type!==ln)&&i.push(a!=null?fs(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function vn(t,e){return Ze(t)?Bt({name:t.name},e,{setup:t}):t}function rg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Hd(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const sl=new WeakMap;function mo(t,e,n,i,s=!1){if(qe(t)){t.forEach((_,p)=>mo(_,e&&(qe(e)?e[p]:e),n,i,s));return}if(go(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&mo(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Wl(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===wt?a.refs={}:a.refs,d=a.setupState,f=ot(d),h=d===wt?mm:_=>Hd(u,_)?!1:gt(f,_),m=(_,p)=>!(p&&Hd(u,p));if(c!=null&&c!==l){if(Gd(e),Pt(c))u[c]=null,h(c)&&(d[c]=null);else if(Ct(c)){const _=e;m(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Ze(l))zo(l,a,12,[o,u]);else{const _=Pt(l),p=Ct(l);if(_||p){const g=()=>{if(t.f){const x=_?h(l)?d[l]:u[l]:m()||!t.k?l.value:u[t.k];if(s)qe(x)&&Df(x,r);else if(qe(x))x.includes(r)||x.push(r);else if(_)u[l]=[r],h(l)&&(d[l]=u[l]);else{const E=[r];m(l,t.k)&&(l.value=E),t.k&&(u[t.k]=E)}}else _?(u[l]=o,h(l)&&(d[l]=o)):p&&(m(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const x=()=>{g(),sl.delete(t)};x.id=-1,sl.set(t,x),jt(x,n)}else Gd(t),g()}}}function Gd(t){const e=sl.get(t);e&&(e.flags|=8,sl.delete(t))}Nl().requestIdleCallback;Nl().cancelIdleCallback;const go=t=>!!t.type.__asyncLoader,kl=t=>t.type.__isKeepAlive;function Bv(t,e){og(t,"a",e)}function kv(t,e){og(t,"da",e)}function og(t,e,n=Qt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(zl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)kl(s.parent.vnode)&&zv(i,e,n,s),s=s.parent}}function zv(t,e,n,i){const s=zl(e,t,i,!0);Hf(()=>{Df(i[e],s)},n)}function zl(t,e,n=Qt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ki();const a=Ho(n),l=jn(e,n,t,o);return a(),zi(),l});return i?s.unshift(r):s.push(r),r}}const Xi=t=>(e,n=Qt)=>{(!Co||t==="sp")&&zl(t,(...i)=>e(...i),n)},Vv=Xi("bm"),Kn=Xi("m"),Hv=Xi("bu"),ag=Xi("u"),$s=Xi("bum"),Hf=Xi("um"),Gv=Xi("sp"),Wv=Xi("rtg"),$v=Xi("rtc");function Xv(t,e=Qt){zl("ec",t,e)}const qv="components",lg=Symbol.for("v-ndc");function Yv(t){return Pt(t)?jv(qv,t,!1)||t:t||lg}function jv(t,e,n=!0,i=!1){const s=bn||Qt;if(s){const r=s.type;{const a=Dx(r,!1);if(a&&(a===e||a===un(e)||a===Dl(un(e))))return r}const o=Wd(s[t]||r[t],e)||Wd(s.appContext[t],e);return!o&&i?r:o}}function Wd(t,e){return t&&(t[e]||t[un(e)]||t[Dl(un(e))])}function It(t,e,n,i){let s;const r=n,o=qe(t);if(o||Pt(t)){const a=o&&gi(t);let l=!1,c=!1;a&&(l=!Tn(t),c=Vi(t),t=Ul(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(l?c?br(Yn(t[u])):Yn(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(pt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const pu=t=>t?Rg(t)?Wl(t):pu(t.parent):null,_o=Bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pu(t.parent),$root:t=>pu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ug(t),$forceUpdate:t=>t.f||(t.f=()=>{zf(t.update)}),$nextTick:t=>t.n||(t.n=Vo.bind(t.proxy)),$watch:t=>Nv.bind(t)}),hc=(t,e)=>t!==wt&&!t.__isScriptSetup&&gt(t,e),Kv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(hc(i,e))return o[e]=1,i[e];if(s!==wt&&gt(s,e))return o[e]=2,s[e];if(gt(r,e))return o[e]=3,r[e];if(n!==wt&&gt(n,e))return o[e]=4,n[e];mu&&(o[e]=0)}}const c=_o[e];let u,d;if(c)return e==="$attrs"&&Jt(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==wt&&gt(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,gt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return hc(s,e)?(s[e]=n,!0):i!==wt&&gt(i,e)?(i[e]=n,!0):gt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==wt&&a[0]!=="$"&&gt(t,a)||hc(e,a)||gt(r,a)||gt(i,a)||gt(_o,a)||gt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:gt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $d(t){return qe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let mu=!0;function Zv(t){const e=ug(t),n=t.proxy,i=t.ctx;mu=!1,e.beforeCreate&&Xd(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:_,deactivated:p,beforeDestroy:g,beforeUnmount:x,destroyed:E,unmounted:y,render:T,renderTracked:C,renderTriggered:L,errorCaptured:S,serverPrefetch:M,expose:N,inheritAttrs:D,components:U,directives:V,filters:$}=e;if(c&&Jv(c,i,null),o)for(const A in o){const O=o[A];Ze(O)&&(i[A]=O.bind(n))}if(s){const A=s.call(n,n);pt(A)&&(t.data=Fl(A))}if(mu=!0,r)for(const A in r){const O=r[A],X=Ze(O)?O.bind(n,n):Ze(O.get)?O.get.bind(n,n):mi,oe=!Ze(O)&&Ze(O.set)?O.set.bind(n):mi,he=St({get:X,set:oe});Object.defineProperty(i,A,{enumerable:!0,configurable:!0,get:()=>he.value,set:ie=>he.value=ie})}if(a)for(const A in a)cg(a[A],i,n,A);if(l){const A=Ze(l)?l.call(n):l;Reflect.ownKeys(A).forEach(O=>{Pv(O,A[O])})}u&&Xd(u,t,"c");function w(A,O){qe(O)?O.forEach(X=>A(X.bind(n))):O&&A(O.bind(n))}if(w(Vv,d),w(Kn,f),w(Hv,h),w(ag,m),w(Bv,_),w(kv,p),w(Xv,S),w($v,C),w(Wv,L),w($s,x),w(Hf,y),w(Gv,M),qe(N))if(N.length){const A=t.exposed||(t.exposed={});N.forEach(O=>{Object.defineProperty(A,O,{get:()=>n[O],set:X=>n[O]=X,enumerable:!0})})}else t.exposed||(t.exposed={});T&&t.render===mi&&(t.render=T),D!=null&&(t.inheritAttrs=D),U&&(t.components=U),V&&(t.directives=V),M&&rg(t)}function Jv(t,e,n=mi){qe(t)&&(t=gu(t));for(const i in t){const s=t[i];let r;pt(s)?"default"in s?r=ho(s.from||i,s.default,!0):r=ho(s.from||i):r=ho(s),Ct(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Xd(t,e,n){jn(qe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function cg(t,e,n,i){let s=i.includes(".")?jm(n,i):()=>n[i];if(Pt(t)){const r=e[t];Ze(r)&&qn(s,r)}else if(Ze(t))qn(s,t.bind(n));else if(pt(t))if(qe(t))t.forEach(r=>cg(r,e,n,i));else{const r=Ze(t.handler)?t.handler.bind(n):e[t.handler];Ze(r)&&qn(s,r,t)}}function ug(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>rl(l,c,o,!0)),rl(l,e,o)),pt(e)&&r.set(e,l),l}function rl(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&rl(t,r,n,!0),s&&s.forEach(o=>rl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Qv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Qv={data:qd,props:Yd,emits:Yd,methods:eo,computed:eo,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:eo,directives:eo,watch:tx,provide:qd,inject:ex};function qd(t,e){return e?t?function(){return Bt(Ze(t)?t.call(this,this):t,Ze(e)?e.call(this,this):e)}:e:t}function ex(t,e){return eo(gu(t),gu(e))}function gu(t){if(qe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function sn(t,e){return t?[...new Set([].concat(t,e))]:e}function eo(t,e){return t?Bt(Object.create(null),t,e):e}function Yd(t,e){return t?qe(t)&&qe(e)?[...new Set([...t,...e])]:Bt(Object.create(null),$d(t),$d(e??{})):e}function tx(t,e){if(!t)return e;if(!e)return t;const n=Bt(Object.create(null),t);for(const i in e)n[i]=sn(t[i],e[i]);return n}function fg(){return{app:null,config:{isNativeTag:mm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nx=0;function ix(t,e){return function(i,s=null){Ze(i)||(i=Bt({},i)),s!=null&&!pt(s)&&(s=null);const r=fg(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:nx++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ux,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Ze(u.install)?(o.add(u),u.install(c,...d)):Ze(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||mt(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Wl(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(jn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Os;Os=c;try{return u()}finally{Os=d}}};return c}}let Os=null;const sx=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${un(e)}Modifiers`]||t[`${hs(e)}Modifiers`];function rx(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||wt;let s=n;const r=e.startsWith("update:"),o=r&&sx(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Pt(u)?u.trim():u)),o.number&&(s=n.map(Il)));let a,l=i[a=ac(e)]||i[a=ac(un(e))];!l&&r&&(l=i[a=ac(hs(e))]),l&&jn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,jn(c,t,6,s)}}const ox=new WeakMap;function dg(t,e,n=!1){const i=n?ox:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ze(t)){const l=c=>{const u=dg(c,e,!0);u&&(a=!0,Bt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(pt(t)&&i.set(t,null),null):(qe(r)?r.forEach(l=>o[l]=null):Bt(o,r),pt(t)&&i.set(t,o),o)}function Vl(t,e){return!t||!Cl(e)?!1:(e=e.slice(2).replace(/Once$/,""),gt(t,e[0].toLowerCase()+e.slice(1))||gt(t,hs(e))||gt(t,e))}function jd(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:m,inheritAttrs:_}=t,p=il(t);let g,x;try{if(n.shapeFlag&4){const y=s||i,T=y;g=li(c.call(T,y,u,d,h,f,m)),x=a}else{const y=e;g=li(y.length>1?y(d,{attrs:a,slots:o,emit:l}):y(d,null)),x=e.props?a:ax(a)}}catch(y){vo.length=0,Bl(y,t,1),g=mt(ln)}let E=g;if(x&&_!==!1){const y=Object.keys(x),{shapeFlag:T}=E;y.length&&T&7&&(r&&y.some(Lf)&&(x=lx(x,r)),E=fs(E,x,!1,!0))}return n.dirs&&(E=fs(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Vs(E,n.transition),g=E,il(p),g}const ax=t=>{let e;for(const n in t)(n==="class"||n==="style"||Cl(n))&&((e||(e={}))[n]=t[n]);return e},lx=(t,e)=>{const n={};for(const i in t)(!Lf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function cx(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Kd(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(hg(o,i,f)&&!Vl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Kd(i,o,c):!0:!!o;return!1}function Kd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(hg(e,t,r)&&!Vl(n,r))return!0}return!1}function hg(t,e,n){const i=t[n],s=e[n];return n==="style"&&pt(i)&&pt(s)?!ko(i,s):i!==s}function ux({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const pg={},mg=()=>Object.create(pg),gg=t=>Object.getPrototypeOf(t)===pg;function fx(t,e,n,i=!1){const s={},r=mg();t.propsDefaults=Object.create(null),_g(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:mv(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function dx(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ot(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Vl(t.emitsOptions,f))continue;const h=e[f];if(l)if(gt(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const m=un(f);s[m]=_u(l,a,m,h,t,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{_g(t,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!gt(e,d)&&((u=hs(d))===d||!gt(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=_u(l,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!gt(e,d))&&(delete r[d],c=!0)}c&&Ni(t.attrs,"set","")}function _g(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(lo(l))continue;const c=e[l];let u;s&&gt(s,u=un(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Vl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ot(n),c=a||wt;for(let u=0;u<r.length;u++){const d=r[u];n[d]=_u(s,l,d,c[d],t,!gt(c,d))}}return o}function _u(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=gt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ze(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Ho(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===hs(n))&&(i=!0))}return i}const hx=new WeakMap;function vg(t,e,n=!1){const i=n?hx:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Ze(t)){const u=d=>{l=!0;const[f,h]=vg(d,e,!0);Bt(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return pt(t)&&i.set(t,pr),pr;if(qe(r))for(let u=0;u<r.length;u++){const d=un(r[u]);Zd(d)&&(o[d]=wt)}else if(r)for(const u in r){const d=un(u);if(Zd(d)){const f=r[u],h=o[d]=qe(f)||Ze(f)?{type:f}:Bt({},f),m=h.type;let _=!1,p=!0;if(qe(m))for(let g=0;g<m.length;++g){const x=m[g],E=Ze(x)&&x.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(p=!1)}else _=Ze(m)&&m.name==="Boolean";h[0]=_,h[1]=p,(_||gt(h,"default"))&&a.push(d)}}const c=[o,a];return pt(t)&&i.set(t,c),c}function Zd(t){return t[0]!=="$"&&!lo(t)}const Gf=t=>t==="_"||t==="_ctx"||t==="$stable",Wf=t=>qe(t)?t.map(li):[li(t)],px=(t,e,n)=>{if(e._n)return e;const i=fo((...s)=>Wf(e(...s)),n);return i._c=!1,i},xg=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Gf(s))continue;const r=t[s];if(Ze(r))e[s]=px(s,r,i);else if(r!=null){const o=Wf(r);e[s]=()=>o}}},yg=(t,e)=>{const n=Wf(e);t.slots.default=()=>n},Sg=(t,e,n)=>{for(const i in e)(n||!Gf(i))&&(t[i]=e[i])},mx=(t,e,n)=>{const i=t.slots=mg();if(t.vnode.shapeFlag&32){const s=e._;s?(Sg(i,e,n),n&&xm(i,"_",s,!0)):xg(e,i)}else e&&yg(t,e)},gx=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=wt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Sg(s,e,n):(r=!e.$stable,xg(e,s)),o=e}else e&&(yg(t,e),o={default:1});if(r)for(const a in s)!Gf(a)&&o[a]==null&&delete s[a]},jt=Sx;function _x(t){return vx(t)}function vx(t,e){const n=Nl();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=mi,insertStaticContent:m}=t,_=(F,z,q,ue=null,Q=null,fe=null,I=void 0,ve=null,me=!!z.dynamicChildren)=>{if(F===z)return;F&&!As(F,z)&&(ue=se(F),ie(F,Q,fe,!0),F=null),z.patchFlag===-2&&(me=!1,z.dynamicChildren=null);const{type:ce,ref:ge,shapeFlag:R}=z;switch(ce){case Hl:p(F,z,q,ue);break;case ln:g(F,z,q,ue);break;case ka:F==null&&x(z,q,ue,I);break;case at:U(F,z,q,ue,Q,fe,I,ve,me);break;default:R&1?T(F,z,q,ue,Q,fe,I,ve,me):R&6?V(F,z,q,ue,Q,fe,I,ve,me):(R&64||R&128)&&ce.process(F,z,q,ue,Q,fe,I,ve,me,Be)}ge!=null&&Q?mo(ge,F&&F.ref,fe,z||F,!z):ge==null&&F&&F.ref!=null&&mo(F.ref,null,fe,F,!0)},p=(F,z,q,ue)=>{if(F==null)i(z.el=a(z.children),q,ue);else{const Q=z.el=F.el;z.children!==F.children&&c(Q,z.children)}},g=(F,z,q,ue)=>{F==null?i(z.el=l(z.children||""),q,ue):z.el=F.el},x=(F,z,q,ue)=>{[F.el,F.anchor]=m(F.children,z,q,ue,F.el,F.anchor)},E=({el:F,anchor:z},q,ue)=>{let Q;for(;F&&F!==z;)Q=f(F),i(F,q,ue),F=Q;i(z,q,ue)},y=({el:F,anchor:z})=>{let q;for(;F&&F!==z;)q=f(F),s(F),F=q;s(z)},T=(F,z,q,ue,Q,fe,I,ve,me)=>{if(z.type==="svg"?I="svg":z.type==="math"&&(I="mathml"),F==null)C(z,q,ue,Q,fe,I,ve,me);else{const ce=F.el&&F.el._isVueCE?F.el:null;try{ce&&ce._beginPatch(),M(F,z,Q,fe,I,ve,me)}finally{ce&&ce._endPatch()}}},C=(F,z,q,ue,Q,fe,I,ve)=>{let me,ce;const{props:ge,shapeFlag:R,transition:b,dirs:k}=F;if(me=F.el=o(F.type,fe,ge&&ge.is,ge),R&8?u(me,F.children):R&16&&S(F.children,me,null,ue,Q,pc(F,fe),I,ve),k&&gs(F,null,ue,"created"),L(me,F,F.scopeId,I,ue),ge){for(const re in ge)re!=="value"&&!lo(re)&&r(me,re,null,ge[re],fe,ue);"value"in ge&&r(me,"value",null,ge.value,fe),(ce=ge.onVnodeBeforeMount)&&ei(ce,ue,F)}k&&gs(F,null,ue,"beforeMount");const Y=xx(Q,b);Y&&b.beforeEnter(me),i(me,z,q),((ce=ge&&ge.onVnodeMounted)||Y||k)&&jt(()=>{ce&&ei(ce,ue,F),Y&&b.enter(me),k&&gs(F,null,ue,"mounted")},Q)},L=(F,z,q,ue,Q)=>{if(q&&h(F,q),ue)for(let fe=0;fe<ue.length;fe++)h(F,ue[fe]);if(Q){let fe=Q.subTree;if(z===fe||Eg(fe.type)&&(fe.ssContent===z||fe.ssFallback===z)){const I=Q.vnode;L(F,I,I.scopeId,I.slotScopeIds,Q.parent)}}},S=(F,z,q,ue,Q,fe,I,ve,me=0)=>{for(let ce=me;ce<F.length;ce++){const ge=F[ce]=ve?Ii(F[ce]):li(F[ce]);_(null,ge,z,q,ue,Q,fe,I,ve)}},M=(F,z,q,ue,Q,fe,I)=>{const ve=z.el=F.el;let{patchFlag:me,dynamicChildren:ce,dirs:ge}=z;me|=F.patchFlag&16;const R=F.props||wt,b=z.props||wt;let k;if(q&&_s(q,!1),(k=b.onVnodeBeforeUpdate)&&ei(k,q,z,F),ge&&gs(z,F,q,"beforeUpdate"),q&&_s(q,!0),(R.innerHTML&&b.innerHTML==null||R.textContent&&b.textContent==null)&&u(ve,""),ce?N(F.dynamicChildren,ce,ve,q,ue,pc(z,Q),fe):I||O(F,z,ve,null,q,ue,pc(z,Q),fe,!1),me>0){if(me&16)D(ve,R,b,q,Q);else if(me&2&&R.class!==b.class&&r(ve,"class",null,b.class,Q),me&4&&r(ve,"style",R.style,b.style,Q),me&8){const Y=z.dynamicProps;for(let re=0;re<Y.length;re++){const j=Y[re],Ae=R[j],ye=b[j];(ye!==Ae||j==="value")&&r(ve,j,Ae,ye,Q,q)}}me&1&&F.children!==z.children&&u(ve,z.children)}else!I&&ce==null&&D(ve,R,b,q,Q);((k=b.onVnodeUpdated)||ge)&&jt(()=>{k&&ei(k,q,z,F),ge&&gs(z,F,q,"updated")},ue)},N=(F,z,q,ue,Q,fe,I)=>{for(let ve=0;ve<z.length;ve++){const me=F[ve],ce=z[ve],ge=me.el&&(me.type===at||!As(me,ce)||me.shapeFlag&198)?d(me.el):q;_(me,ce,ge,null,ue,Q,fe,I,!0)}},D=(F,z,q,ue,Q)=>{if(z!==q){if(z!==wt)for(const fe in z)!lo(fe)&&!(fe in q)&&r(F,fe,z[fe],null,Q,ue);for(const fe in q){if(lo(fe))continue;const I=q[fe],ve=z[fe];I!==ve&&fe!=="value"&&r(F,fe,ve,I,Q,ue)}"value"in q&&r(F,"value",z.value,q.value,Q)}},U=(F,z,q,ue,Q,fe,I,ve,me)=>{const ce=z.el=F?F.el:a(""),ge=z.anchor=F?F.anchor:a("");let{patchFlag:R,dynamicChildren:b,slotScopeIds:k}=z;k&&(ve=ve?ve.concat(k):k),F==null?(i(ce,q,ue),i(ge,q,ue),S(z.children||[],q,ge,Q,fe,I,ve,me)):R>0&&R&64&&b&&F.dynamicChildren&&F.dynamicChildren.length===b.length?(N(F.dynamicChildren,b,q,Q,fe,I,ve),(z.key!=null||Q&&z===Q.subTree)&&$f(F,z,!0)):O(F,z,q,ge,Q,fe,I,ve,me)},V=(F,z,q,ue,Q,fe,I,ve,me)=>{z.slotScopeIds=ve,F==null?z.shapeFlag&512?Q.ctx.activate(z,q,ue,I,me):$(z,q,ue,Q,fe,I,me):B(F,z,me)},$=(F,z,q,ue,Q,fe,I)=>{const ve=F.component=Ax(F,ue,Q);if(kl(F)&&(ve.ctx.renderer=Be),Cx(ve,!1,I),ve.asyncDep){if(Q&&Q.registerDep(ve,w,I),!F.el){const me=ve.subTree=mt(ln);g(null,me,z,q),F.placeholder=me.el}}else w(ve,F,z,q,Q,fe,I)},B=(F,z,q)=>{const ue=z.component=F.component;if(cx(F,z,q))if(ue.asyncDep&&!ue.asyncResolved){A(ue,z,q);return}else ue.next=z,ue.update();else z.el=F.el,ue.vnode=z},w=(F,z,q,ue,Q,fe,I)=>{const ve=()=>{if(F.isMounted){let{next:R,bu:b,u:k,parent:Y,vnode:re}=F;{const He=Mg(F);if(He){R&&(R.el=re.el,A(F,R,I)),He.asyncDep.then(()=>{jt(()=>{F.isUnmounted||ce()},Q)});return}}let j=R,Ae;_s(F,!1),R?(R.el=re.el,A(F,R,I)):R=re,b&&Oa(b),(Ae=R.props&&R.props.onVnodeBeforeUpdate)&&ei(Ae,Y,R,re),_s(F,!0);const ye=jd(F),Fe=F.subTree;F.subTree=ye,_(Fe,ye,d(Fe.el),se(Fe),F,Q,fe),R.el=ye.el,j===null&&ux(F,ye.el),k&&jt(k,Q),(Ae=R.props&&R.props.onVnodeUpdated)&&jt(()=>ei(Ae,Y,R,re),Q)}else{let R;const{el:b,props:k}=z,{bm:Y,m:re,parent:j,root:Ae,type:ye}=F,Fe=go(z);_s(F,!1),Y&&Oa(Y),!Fe&&(R=k&&k.onVnodeBeforeMount)&&ei(R,j,z),_s(F,!0);{Ae.ce&&Ae.ce._hasShadowRoot()&&Ae.ce._injectChildStyle(ye,F.parent?F.parent.type:void 0);const He=F.subTree=jd(F);_(null,He,q,ue,F,Q,fe),z.el=He.el}if(re&&jt(re,Q),!Fe&&(R=k&&k.onVnodeMounted)){const He=z;jt(()=>ei(R,j,He),Q)}(z.shapeFlag&256||j&&go(j.vnode)&&j.vnode.shapeFlag&256)&&F.a&&jt(F.a,Q),F.isMounted=!0,z=q=ue=null}};F.scope.on();const me=F.effect=new Tm(ve);F.scope.off();const ce=F.update=me.run.bind(me),ge=F.job=me.runIfDirty.bind(me);ge.i=F,ge.id=F.uid,me.scheduler=()=>zf(ge),_s(F,!0),ce()},A=(F,z,q)=>{z.component=F;const ue=F.vnode.props;F.vnode=z,F.next=null,dx(F,z.props,ue,q),gx(F,z.children,q),ki(),Od(F),zi()},O=(F,z,q,ue,Q,fe,I,ve,me=!1)=>{const ce=F&&F.children,ge=F?F.shapeFlag:0,R=z.children,{patchFlag:b,shapeFlag:k}=z;if(b>0){if(b&128){oe(ce,R,q,ue,Q,fe,I,ve,me);return}else if(b&256){X(ce,R,q,ue,Q,fe,I,ve,me);return}}k&8?(ge&16&&te(ce,Q,fe),R!==ce&&u(q,R)):ge&16?k&16?oe(ce,R,q,ue,Q,fe,I,ve,me):te(ce,Q,fe,!0):(ge&8&&u(q,""),k&16&&S(R,q,ue,Q,fe,I,ve,me))},X=(F,z,q,ue,Q,fe,I,ve,me)=>{F=F||pr,z=z||pr;const ce=F.length,ge=z.length,R=Math.min(ce,ge);let b;for(b=0;b<R;b++){const k=z[b]=me?Ii(z[b]):li(z[b]);_(F[b],k,q,null,Q,fe,I,ve,me)}ce>ge?te(F,Q,fe,!0,!1,R):S(z,q,ue,Q,fe,I,ve,me,R)},oe=(F,z,q,ue,Q,fe,I,ve,me)=>{let ce=0;const ge=z.length;let R=F.length-1,b=ge-1;for(;ce<=R&&ce<=b;){const k=F[ce],Y=z[ce]=me?Ii(z[ce]):li(z[ce]);if(As(k,Y))_(k,Y,q,null,Q,fe,I,ve,me);else break;ce++}for(;ce<=R&&ce<=b;){const k=F[R],Y=z[b]=me?Ii(z[b]):li(z[b]);if(As(k,Y))_(k,Y,q,null,Q,fe,I,ve,me);else break;R--,b--}if(ce>R){if(ce<=b){const k=b+1,Y=k<ge?z[k].el:ue;for(;ce<=b;)_(null,z[ce]=me?Ii(z[ce]):li(z[ce]),q,Y,Q,fe,I,ve,me),ce++}}else if(ce>b)for(;ce<=R;)ie(F[ce],Q,fe,!0),ce++;else{const k=ce,Y=ce,re=new Map;for(ce=Y;ce<=b;ce++){const Ce=z[ce]=me?Ii(z[ce]):li(z[ce]);Ce.key!=null&&re.set(Ce.key,ce)}let j,Ae=0;const ye=b-Y+1;let Fe=!1,He=0;const xe=new Array(ye);for(ce=0;ce<ye;ce++)xe[ce]=0;for(ce=k;ce<=R;ce++){const Ce=F[ce];if(Ae>=ye){ie(Ce,Q,fe,!0);continue}let De;if(Ce.key!=null)De=re.get(Ce.key);else for(j=Y;j<=b;j++)if(xe[j-Y]===0&&As(Ce,z[j])){De=j;break}De===void 0?ie(Ce,Q,fe,!0):(xe[De-Y]=ce+1,De>=He?He=De:Fe=!0,_(Ce,z[De],q,null,Q,fe,I,ve,me),Ae++)}const be=Fe?yx(xe):pr;for(j=be.length-1,ce=ye-1;ce>=0;ce--){const Ce=Y+ce,De=z[Ce],Ie=z[Ce+1],Qe=Ce+1<ge?Ie.el||bg(Ie):ue;xe[ce]===0?_(null,De,q,Qe,Q,fe,I,ve,me):Fe&&(j<0||ce!==be[j]?he(De,q,Qe,2):j--)}}},he=(F,z,q,ue,Q=null)=>{const{el:fe,type:I,transition:ve,children:me,shapeFlag:ce}=F;if(ce&6){he(F.component.subTree,z,q,ue);return}if(ce&128){F.suspense.move(z,q,ue);return}if(ce&64){I.move(F,z,q,Be);return}if(I===at){i(fe,z,q);for(let R=0;R<me.length;R++)he(me[R],z,q,ue);i(F.anchor,z,q);return}if(I===ka){E(F,z,q);return}if(ue!==2&&ce&1&&ve)if(ue===0)ve.beforeEnter(fe),i(fe,z,q),jt(()=>ve.enter(fe),Q);else{const{leave:R,delayLeave:b,afterLeave:k}=ve,Y=()=>{F.ctx.isUnmounted?s(fe):i(fe,z,q)},re=()=>{fe._isLeaving&&fe[oi](!0),R(fe,()=>{Y(),k&&k()})};b?b(fe,Y,re):re()}else i(fe,z,q)},ie=(F,z,q,ue=!1,Q=!1)=>{const{type:fe,props:I,ref:ve,children:me,dynamicChildren:ce,shapeFlag:ge,patchFlag:R,dirs:b,cacheIndex:k}=F;if(R===-2&&(Q=!1),ve!=null&&(ki(),mo(ve,null,q,F,!0),zi()),k!=null&&(z.renderCache[k]=void 0),ge&256){z.ctx.deactivate(F);return}const Y=ge&1&&b,re=!go(F);let j;if(re&&(j=I&&I.onVnodeBeforeUnmount)&&ei(j,z,F),ge&6)ze(F.component,q,ue);else{if(ge&128){F.suspense.unmount(q,ue);return}Y&&gs(F,null,z,"beforeUnmount"),ge&64?F.type.remove(F,z,q,Be,ue):ce&&!ce.hasOnce&&(fe!==at||R>0&&R&64)?te(ce,z,q,!1,!0):(fe===at&&R&384||!Q&&ge&16)&&te(me,z,q),ue&&ae(F)}(re&&(j=I&&I.onVnodeUnmounted)||Y)&&jt(()=>{j&&ei(j,z,F),Y&&gs(F,null,z,"unmounted")},q)},ae=F=>{const{type:z,el:q,anchor:ue,transition:Q}=F;if(z===at){Ue(q,ue);return}if(z===ka){y(F);return}const fe=()=>{s(q),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(F.shapeFlag&1&&Q&&!Q.persisted){const{leave:I,delayLeave:ve}=Q,me=()=>I(q,fe);ve?ve(F.el,fe,me):me()}else fe()},Ue=(F,z)=>{let q;for(;F!==z;)q=f(F),s(F),F=q;s(z)},ze=(F,z,q)=>{const{bum:ue,scope:Q,job:fe,subTree:I,um:ve,m:me,a:ce}=F;Jd(me),Jd(ce),ue&&Oa(ue),Q.stop(),fe&&(fe.flags|=8,ie(I,F,z,q)),ve&&jt(ve,z),jt(()=>{F.isUnmounted=!0},z)},te=(F,z,q,ue=!1,Q=!1,fe=0)=>{for(let I=fe;I<F.length;I++)ie(F[I],z,q,ue,Q)},se=F=>{if(F.shapeFlag&6)return se(F.component.subTree);if(F.shapeFlag&128)return F.suspense.next();const z=f(F.anchor||F.el),q=z&&z[Km];return q?f(q):z};let _e=!1;const Ye=(F,z,q)=>{let ue;F==null?z._vnode&&(ie(z._vnode,null,null,!0),ue=z._vnode.component):_(z._vnode||null,F,z,null,null,null,q),z._vnode=F,_e||(_e=!0,Od(ue),$m(),_e=!1)},Be={p:_,um:ie,m:he,r:ae,mt:$,mc:S,pc:O,pbc:N,n:se,o:t};return{render:Ye,hydrate:void 0,createApp:ix(Ye)}}function pc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _s({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function xx(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $f(t,e,n=!1){const i=t.children,s=e.children;if(qe(i)&&qe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ii(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&$f(o,a)),a.type===Hl&&(a.patchFlag===-1&&(a=s[r]=Ii(a)),a.el=o.el),a.type===ln&&!a.el&&(a.el=o.el)}}function yx(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Mg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mg(e)}function Jd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function bg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?bg(e.subTree):null}const Eg=t=>t.__isSuspense;function Sx(t,e){e&&e.pendingBranch?qe(t)?e.effects.push(...t):e.effects.push(t):Rv(t)}const at=Symbol.for("v-fgt"),Hl=Symbol.for("v-txt"),ln=Symbol.for("v-cmt"),ka=Symbol.for("v-stc"),vo=[];let En=null;function de(t=!1){vo.push(En=t?null:[])}function Mx(){vo.pop(),En=vo[vo.length-1]||null}let Ao=1;function ol(t,e=!1){Ao+=t,t<0&&En&&e&&(En.hasOnce=!0)}function wg(t){return t.dynamicChildren=Ao>0?En||pr:null,Mx(),Ao>0&&En&&En.push(t),t}function pe(t,e,n,i,s,r){return wg(v(t,e,n,i,s,r,!0))}function _r(t,e,n,i,s){return wg(mt(t,e,n,i,s,!0))}function al(t){return t?t.__v_isVNode===!0:!1}function As(t,e){return t.type===e.type&&t.key===e.key}const Tg=({key:t})=>t??null,za=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Pt(t)||Ct(t)||Ze(t)?{i:bn,r:t,k:e,f:!!n}:t:null);function v(t,e=null,n=null,i=0,s=null,r=t===at?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tg(e),ref:e&&za(e),scopeId:qm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bn};return a?(Xf(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Pt(n)?8:16),Ao>0&&!o&&En&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&En.push(l),l}const mt=bx;function bx(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===lg)&&(t=ln),al(t)){const a=fs(t,e,!0);return n&&Xf(a,n),Ao>0&&!r&&En&&(a.shapeFlag&6?En[En.indexOf(t)]=a:En.push(a)),a.patchFlag=-2,a}if(Ix(t)&&(t=t.__vccOpts),e){e=Ex(e);let{class:a,style:l}=e;a&&!Pt(a)&&(e.class=ht(a)),pt(l)&&(Ol(l)&&!qe(l)&&(l=Bt({},l)),e.style=Hn(l))}const o=Pt(t)?1:Eg(t)?128:Zm(t)?64:pt(t)?4:Ze(t)?2:0;return v(t,e,n,i,s,o,r,!0)}function Ex(t){return t?Ol(t)||gg(t)?Bt({},t):t:null}function fs(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Cg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Tg(c),ref:e&&e.ref?n&&r?qe(r)?r.concat(za(e)):[r,za(e)]:za(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fs(t.ssContent),ssFallback:t.ssFallback&&fs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Vs(u,l.clone(u)),u}function us(t=" ",e=0){return mt(Hl,null,t,e)}function Ag(t,e){const n=mt(ka,null,t);return n.staticCount=e,n}function it(t="",e=!1){return e?(de(),_r(ln,null,t)):mt(ln,null,t)}function li(t){return t==null||typeof t=="boolean"?mt(ln):qe(t)?mt(at,null,t.slice()):al(t)?Ii(t):mt(Hl,null,String(t))}function Ii(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fs(t)}function Xf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(qe(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Xf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!gg(e)?e._ctx=bn:s===3&&bn&&(bn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:bn},n=32):(e=String(e),i&64?(n=16,e=[us(e)]):n=8);t.children=e,t.shapeFlag|=n}function Cg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ht([e.class,i.class]));else if(s==="style")e.style=Hn([e.style,i.style]);else if(Cl(s)){const r=e[s],o=i[s];o&&r!==o&&!(qe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ei(t,e,n,i=null){jn(t,e,7,[n,i])}const wx=fg();let Tx=0;function Ax(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||wx,r={uid:Tx++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vg(i,s),emitsOptions:dg(i,s),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:i.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=rx.bind(null,r),t.ce&&t.ce(r),r}let Qt=null;const Gl=()=>Qt||bn;let ll,vu;{const t=Nl(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ll=e("__VUE_INSTANCE_SETTERS__",n=>Qt=n),vu=e("__VUE_SSR_SETTERS__",n=>Co=n)}const Ho=t=>{const e=Qt;return ll(t),t.scope.on(),()=>{t.scope.off(),ll(e)}},Qd=()=>{Qt&&Qt.scope.off(),ll(null)};function Rg(t){return t.vnode.shapeFlag&4}let Co=!1;function Cx(t,e=!1,n=!1){e&&vu(e);const{props:i,children:s}=t.vnode,r=Rg(t);fx(t,i,r,e),mx(t,s,n||e);const o=r?Rx(t,e):void 0;return e&&vu(!1),o}function Rx(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Kv);const{setup:i}=n;if(i){ki();const s=t.setupContext=i.length>1?Lx(t):null,r=Ho(t),o=zo(i,t,0,[t.props,s]),a=gm(o);if(zi(),r(),(a||t.sp)&&!go(t)&&rg(t),a){if(o.then(Qd,Qd),e)return o.then(l=>{eh(t,l)}).catch(l=>{Bl(l,t,0)});t.asyncDep=o}else eh(t,o)}else Pg(t)}function eh(t,e,n){Ze(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pt(e)&&(t.setupState=Vm(e)),Pg(t)}function Pg(t,e,n){const i=t.type;t.render||(t.render=i.render||mi);{const s=Ho(t);ki();try{Zv(t)}finally{zi(),s()}}}const Px={get(t,e){return Jt(t,"get",""),t[e]}};function Lx(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Px),slots:t.slots,emit:t.emit,expose:e}}function Wl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Vm(kf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _o)return _o[n](t)},has(e,n){return n in e||n in _o}})):t.proxy}function Dx(t,e=!0){return Ze(t)?t.displayName||t.name:t.name||e&&t.__name}function Ix(t){return Ze(t)&&"__vccOpts"in t}const St=(t,e)=>Ev(t,e,Co);function Nx(t,e,n){try{ol(-1);const i=arguments.length;return i===2?pt(e)&&!qe(e)?al(e)?mt(t,null,[e]):mt(t,e):mt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&al(n)&&(n=[n]),mt(t,e,n))}finally{ol(1)}}const Ux="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xu;const th=typeof window<"u"&&window.trustedTypes;if(th)try{xu=th.createPolicy("vue",{createHTML:t=>t})}catch{}const Lg=xu?t=>xu.createHTML(t):t=>t,Fx="http://www.w3.org/2000/svg",Ox="http://www.w3.org/1998/Math/MathML",Di=typeof document<"u"?document:null,nh=Di&&Di.createElement("template"),Bx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Di.createElementNS(Fx,t):e==="mathml"?Di.createElementNS(Ox,t):n?Di.createElement(t,{is:n}):Di.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Di.createTextNode(t),createComment:t=>Di.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Di.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{nh.innerHTML=Lg(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=nh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ki="transition",Gr="animation",Er=Symbol("_vtc"),Dg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ig=Bt({},tg,Dg),kx=t=>(t.displayName="Transition",t.props=Ig,t),ih=kx((t,{slots:e})=>Nx(Ov,Ng(t),e)),vs=(t,e=[])=>{qe(t)?t.forEach(n=>n(...e)):t&&t(...e)},sh=t=>t?qe(t)?t.some(e=>e.length>1):t.length>1:!1;function Ng(t){const e={};for(const U in t)U in Dg||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,m=zx(s),_=m&&m[0],p=m&&m[1],{onBeforeEnter:g,onEnter:x,onEnterCancelled:E,onLeave:y,onLeaveCancelled:T,onBeforeAppear:C=g,onAppear:L=x,onAppearCancelled:S=E}=e,M=(U,V,$,B)=>{U._enterCancelled=B,is(U,V?u:a),is(U,V?c:o),$&&$()},N=(U,V)=>{U._isLeaving=!1,is(U,d),is(U,h),is(U,f),V&&V()},D=U=>(V,$)=>{const B=U?L:x,w=()=>M(V,U,$);vs(B,[V,w]),rh(()=>{is(V,U?l:r),si(V,U?u:a),sh(B)||oh(V,i,_,w)})};return Bt(e,{onBeforeEnter(U){vs(g,[U]),si(U,r),si(U,o)},onBeforeAppear(U){vs(C,[U]),si(U,l),si(U,c)},onEnter:D(!1),onAppear:D(!0),onLeave(U,V){U._isLeaving=!0;const $=()=>N(U,V);si(U,d),U._enterCancelled?(si(U,f),yu(U)):(yu(U),si(U,f)),rh(()=>{U._isLeaving&&(is(U,d),si(U,h),sh(y)||oh(U,i,p,$))}),vs(y,[U,$])},onEnterCancelled(U){M(U,!1,void 0,!0),vs(E,[U])},onAppearCancelled(U){M(U,!0,void 0,!0),vs(S,[U])},onLeaveCancelled(U){N(U),vs(T,[U])}})}function zx(t){if(t==null)return null;if(pt(t))return[mc(t.enter),mc(t.leave)];{const e=mc(t);return[e,e]}}function mc(t){return z0(t)}function si(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Er]||(t[Er]=new Set)).add(e)}function is(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Er];n&&(n.delete(e),n.size||(t[Er]=void 0))}function rh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Vx=0;function oh(t,e,n,i){const s=t._endId=++Vx,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Ug(t,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),r()},f=h=>{h.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function Ug(t,e){const n=window.getComputedStyle(t),i=m=>(n[m]||"").split(", "),s=i(`${Ki}Delay`),r=i(`${Ki}Duration`),o=ah(s,r),a=i(`${Gr}Delay`),l=i(`${Gr}Duration`),c=ah(a,l);let u=null,d=0,f=0;e===Ki?o>0&&(u=Ki,d=o,f=r.length):e===Gr?c>0&&(u=Gr,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?Ki:Gr:null,f=u?u===Ki?r.length:l.length:0);const h=u===Ki&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ki}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function ah(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>lh(n)+lh(t[i])))}function lh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function yu(t){return(t?t.ownerDocument:document).body.offsetHeight}function Hx(t,e,n){const i=t[Er];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ch=Symbol("_vod"),Gx=Symbol("_vsh"),Wx=Symbol(""),$x=/(?:^|;)\s*display\s*:/;function Xx(t,e,n){const i=t.style,s=Pt(n);let r=!1;if(n&&!s){if(e)if(Pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Va(i,a,"")}else for(const o in e)n[o]==null&&Va(i,o,"");for(const o in n)o==="display"&&(r=!0),Va(i,o,n[o])}else if(s){if(e!==n){const o=i[Wx];o&&(n+=";"+o),i.cssText=n,r=$x.test(n)}}else e&&t.removeAttribute("style");ch in t&&(t[ch]=r?i.display:"",t[Gx]&&(i.display="none"))}const uh=/\s*!important$/;function Va(t,e,n){if(qe(n))n.forEach(i=>Va(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=qx(t,e);uh.test(n)?t.setProperty(hs(i),n.replace(uh,""),"important"):t[i]=n}}const fh=["Webkit","Moz","ms"],gc={};function qx(t,e){const n=gc[e];if(n)return n;let i=un(e);if(i!=="filter"&&i in t)return gc[e]=i;i=Dl(i);for(let s=0;s<fh.length;s++){const r=fh[s]+i;if(r in t)return gc[e]=r}return e}const dh="http://www.w3.org/1999/xlink";function hh(t,e,n,i,s,r=X0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(dh,e.slice(6,e.length)):t.setAttributeNS(dh,e,n):n==null||r&&!ym(n)?t.removeAttribute(e):t.setAttribute(e,r?"":yi(n)?String(n):n)}function ph(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Lg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ym(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Cs(t,e,n,i){t.addEventListener(e,n,i)}function Yx(t,e,n,i){t.removeEventListener(e,n,i)}const mh=Symbol("_vei");function jx(t,e,n,i,s=null){const r=t[mh]||(t[mh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Kx(e);if(i){const c=r[e]=Qx(i,s);Cs(t,a,c,l)}else o&&(Yx(t,a,o,l),r[e]=void 0)}}const gh=/(?:Once|Passive|Capture)$/;function Kx(t){let e;if(gh.test(t)){e={};let i;for(;i=t.match(gh);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hs(t.slice(2)),e]}let _c=0;const Zx=Promise.resolve(),Jx=()=>_c||(Zx.then(()=>_c=0),_c=Date.now());function Qx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;jn(ey(i,n.value),e,5,[i])};return n.value=t,n.attached=Jx(),n}function ey(t,e){if(qe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const _h=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ty=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?Hx(t,i,o):e==="style"?Xx(t,n,i):Cl(e)?Lf(e)||jx(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ny(t,e,i,o))?(ph(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hh(t,e,i,o,r,e!=="value")):t._isVueCE&&(iy(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Pt(i)))?ph(t,un(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),hh(t,e,i,o))};function ny(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&_h(e)&&Ze(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _h(e)&&Pt(n)?!1:e in t}function iy(t,e){const n=t._def.props;if(!n)return!1;const i=un(e);return Array.isArray(n)?n.some(s=>un(s)===i):Object.keys(n).some(s=>un(s)===i)}const Fg=new WeakMap,Og=new WeakMap,cl=Symbol("_moveCb"),vh=Symbol("_enterCb"),sy=t=>(delete t.props.mode,t),ry=sy({name:"TransitionGroup",props:Bt({},Ig,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Gl(),i=eg();let s,r;return ag(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!cy(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(oy),s.forEach(ay);const a=s.filter(ly);yu(n.vnode.el),a.forEach(l=>{const c=l.el,u=c.style;si(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c[cl]=f=>{f&&f.target!==c||(!f||f.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",d),c[cl]=null,is(c,o))};c.addEventListener("transitionend",d)}),s=[]}),()=>{const o=ot(t),a=Ng(o);let l=o.tag||at;if(s=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(s.push(u),Vs(u,To(u,a,i,n)),Fg.set(u,kg(u.el)))}r=e.default?Vf(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Vs(u,To(u,a,i,n))}return mt(l,null,r)}}}),Bg=ry;function oy(t){const e=t.el;e[cl]&&e[cl](),e[vh]&&e[vh]()}function ay(t){Og.set(t,kg(t.el))}function ly(t){const e=Fg.get(t),n=Og.get(t),i=e.left-n.left,s=e.top-n.top;if(i||s){const r=t.el,o=r.style,a=r.getBoundingClientRect();let l=1,c=1;return r.offsetWidth&&(l=a.width/r.offsetWidth),r.offsetHeight&&(c=a.height/r.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(l-1)<.01&&(l=1),Math.abs(c-1)<.01&&(c=1),o.transform=o.webkitTransform=`translate(${i/l}px,${s/c}px)`,o.transitionDuration="0s",t}}function kg(t){const e=t.getBoundingClientRect();return{left:e.left,top:e.top}}function cy(t,e,n){const i=t.cloneNode(),s=t[Er];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:o}=Ug(i);return r.removeChild(i),o}const ul=t=>{const e=t.props["onUpdate:modelValue"]||!1;return qe(e)?n=>Oa(e,n):e};function uy(t){t.target.composing=!0}function xh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vr=Symbol("_assign");function yh(t,e,n){return e&&(t=t.trim()),n&&(t=Il(t)),t}const wn={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[vr]=ul(s);const r=i||s.props&&s.props.type==="number";Cs(t,e?"change":"input",o=>{o.target.composing||t[vr](yh(t.value,n,r))}),(n||r)&&Cs(t,"change",()=>{t.value=yh(t.value,n,r)}),e||(Cs(t,"compositionstart",uy),Cs(t,"compositionend",xh),Cs(t,"change",xh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[vr]=ul(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Il(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},xo={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Rl(e);Cs(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Il(fl(o)):fl(o));t[vr](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,Vo(()=>{t._assigning=!1})}),t[vr]=ul(i)},mounted(t,{value:e}){Sh(t,e)},beforeUpdate(t,e,n){t[vr]=ul(n)},updated(t,{value:e}){t._assigning||Sh(t,e)}};function Sh(t,e){const n=t.multiple,i=qe(e);if(!(n&&!i&&!Rl(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=fl(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Y0(e,a)>-1}else o.selected=e.has(a);else if(ko(fl(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function fl(t){return"_value"in t?t._value:t.value}const fy=["ctrl","shift","alt","meta"],dy={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>fy.some(n=>t[`${n}Key`]&&!e.includes(n))},dl=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=dy[e[o]];if(a&&a(s,e))return}return t(s,...r)})},hy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qf=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=hs(s.key);if(e.some(o=>o===r||hy[o]===r))return t(s)})},py=Bt({patchProp:ty},Bx);let Mh;function my(){return Mh||(Mh=_x(py))}const gy=(...t)=>{const e=my().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=vy(i);if(!s)return;const r=e._component;!Ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,_y(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function _y(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function vy(t){return Pt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let zg;const $l=t=>zg=t,Vg=Symbol();function Su(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var yo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(yo||(yo={}));function xy(){const t=Em(!0),e=t.run(()=>Te({}));let n=[],i=[];const s=kf({install(r){$l(s),s._a=r,r.provide(Vg,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Hg=()=>{};function bh(t,e,n,i=Hg){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&wm()&&j0(s),s}function js(t,...e){t.slice().forEach(n=>{n(...e)})}const yy=t=>t(),Eh=Symbol(),vc=Symbol();function Mu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];Su(s)&&Su(i)&&t.hasOwnProperty(n)&&!Ct(i)&&!gi(i)?t[n]=Mu(s,i):t[n]=i}return t}const Sy=Symbol();function My(t){return!Su(t)||!t.hasOwnProperty(Sy)}const{assign:ss}=Object;function by(t){return!!(Ct(t)&&t.effect)}function Ey(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=xv(n.state.value[t]);return ss(u,r,Object.keys(o||{}).reduce((d,f)=>(d[f]=kf(St(()=>{$l(n);const h=n._s.get(t);return o[f].call(h,h)})),d),{}))}return l=Gg(t,c,e,n,i,!0),l}function Gg(t,e,n={},i,s,r){let o;const a=ss({actions:{}},n),l={deep:!0};let c,u,d=[],f=[],h;const m=i.state.value[t];!r&&!m&&(i.state.value[t]={});let _;function p(S){let M;c=u=!1,typeof S=="function"?(S(i.state.value[t]),M={type:yo.patchFunction,storeId:t,events:h}):(Mu(i.state.value[t],S),M={type:yo.patchObject,payload:S,storeId:t,events:h});const N=_=Symbol();Vo().then(()=>{_===N&&(c=!0)}),u=!0,js(d,M,i.state.value[t])}const g=r?function(){const{state:M}=n,N=M?M():{};this.$patch(D=>{ss(D,N)})}:Hg;function x(){o.stop(),d=[],f=[],i._s.delete(t)}const E=(S,M="")=>{if(Eh in S)return S[vc]=M,S;const N=function(){$l(i);const D=Array.from(arguments),U=[],V=[];function $(A){U.push(A)}function B(A){V.push(A)}js(f,{args:D,name:N[vc],store:T,after:$,onError:B});let w;try{w=S.apply(this&&this.$id===t?this:T,D)}catch(A){throw js(V,A),A}return w instanceof Promise?w.then(A=>(js(U,A),A)).catch(A=>(js(V,A),Promise.reject(A))):(js(U,w),w)};return N[Eh]=!0,N[vc]=M,N},y={_p:i,$id:t,$onAction:bh.bind(null,f),$patch:p,$reset:g,$subscribe(S,M={}){const N=bh(d,S,M.detached,()=>D()),D=o.run(()=>qn(()=>i.state.value[t],U=>{(M.flush==="sync"?u:c)&&S({storeId:t,type:yo.direct,events:h},U)},ss({},l,M)));return N},$dispose:x},T=Fl(y);i._s.set(t,T);const L=(i._a&&i._a.runWithContext||yy)(()=>i._e.run(()=>(o=Em()).run(()=>e({action:E}))));for(const S in L){const M=L[S];if(Ct(M)&&!by(M)||gi(M))r||(m&&My(M)&&(Ct(M)?M.value=m[S]:Mu(M,m[S])),i.state.value[t][S]=M);else if(typeof M=="function"){const N=E(M,S);L[S]=N,a.actions[S]=M}}return ss(T,L),ss(ot(T),L),Object.defineProperty(T,"$state",{get:()=>i.state.value[t],set:S=>{p(M=>{ss(M,S)})}}),i._p.forEach(S=>{ss(T,o.run(()=>S({store:T,app:i._a,pinia:i,options:a})))}),m&&r&&n.hydrate&&n.hydrate(T.$state,m),c=!0,u=!0,T}/*! #__NO_SIDE_EFFECTS__ */function Yf(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,l){const c=Lv();return a=a||(c?ho(Vg,null):null),a&&$l(a),a=zg,a._s.has(i)||(r?Gg(i,e,s,a):Ey(i,s,a)),a._s.get(i)}return o.$id=i,o}function Nr(t){{const e=ot(t),n={};for(const i in e){const s=e[i];s.effect?n[i]=St({get:()=>t[i],set(r){t[i]=r}}):(Ct(s)||gi(s))&&(n[i]=Mv(t,i))}return n}}function Wg(t,e){return function(){return t.apply(e,arguments)}}const{toString:wy}=Object.prototype,{getPrototypeOf:jf}=Object,{iterator:Xl,toStringTag:$g}=Symbol,ql=(t=>e=>{const n=wy.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Zn=t=>(t=t.toLowerCase(),e=>ql(e)===t),Yl=t=>e=>typeof e===t,{isArray:Ur}=Array,wr=Yl("undefined");function Go(t){return t!==null&&!wr(t)&&t.constructor!==null&&!wr(t.constructor)&&mn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Xg=Zn("ArrayBuffer");function Ty(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Xg(t.buffer),e}const Ay=Yl("string"),mn=Yl("function"),qg=Yl("number"),Wo=t=>t!==null&&typeof t=="object",Cy=t=>t===!0||t===!1,Ha=t=>{if(ql(t)!=="object")return!1;const e=jf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!($g in t)&&!(Xl in t)},Ry=t=>{if(!Wo(t)||Go(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Py=Zn("Date"),Ly=Zn("File"),Dy=t=>!!(t&&typeof t.uri<"u"),Iy=t=>t&&typeof t.getParts<"u",Ny=Zn("Blob"),Uy=Zn("FileList"),Fy=t=>Wo(t)&&mn(t.pipe);function Oy(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const wh=Oy(),Th=typeof wh.FormData<"u"?wh.FormData:void 0,By=t=>{let e;return t&&(Th&&t instanceof Th||mn(t.append)&&((e=ql(t))==="formdata"||e==="object"&&mn(t.toString)&&t.toString()==="[object FormData]"))},ky=Zn("URLSearchParams"),[zy,Vy,Hy,Gy]=["ReadableStream","Request","Response","Headers"].map(Zn),Wy=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $o(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Ur(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(Go(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function Yg(t,e){if(Go(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const Ds=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,jg=t=>!wr(t)&&t!==Ds;function bu(){const{caseless:t,skipUndefined:e}=jg(this)&&this||{},n={},i=(s,r)=>{if(r==="__proto__"||r==="constructor"||r==="prototype")return;const o=t&&Yg(n,r)||r;Ha(n[o])&&Ha(s)?n[o]=bu(n[o],s):Ha(s)?n[o]=bu({},s):Ur(s)?n[o]=s.slice():(!e||!wr(s))&&(n[o]=s)};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&$o(arguments[s],i);return n}const $y=(t,e,n,{allOwnKeys:i}={})=>($o(e,(s,r)=>{n&&mn(s)?Object.defineProperty(t,r,{value:Wg(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),Xy=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),qy=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Yy=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&jf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},jy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Ky=t=>{if(!t)return null;if(Ur(t))return t;let e=t.length;if(!qg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Zy=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&jf(Uint8Array)),Jy=(t,e)=>{const i=(t&&t[Xl]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},Qy=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},eS=Zn("HTMLFormElement"),tS=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),Ah=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),nS=Zn("RegExp"),Kg=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};$o(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},iS=t=>{Kg(t,(e,n)=>{if(mn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(mn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},sS=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Ur(t)?i(t):i(String(t).split(e)),n},rS=()=>{},oS=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function aS(t){return!!(t&&mn(t.append)&&t[$g]==="FormData"&&t[Xl])}const lS=t=>{const e=new Array(10),n=(i,s)=>{if(Wo(i)){if(e.indexOf(i)>=0)return;if(Go(i))return i;if(!("toJSON"in i)){e[s]=i;const r=Ur(i)?[]:{};return $o(i,(o,a)=>{const l=n(o,s+1);!wr(l)&&(r[a]=l)}),e[s]=void 0,r}}return i};return n(t,0)},cS=Zn("AsyncFunction"),uS=t=>t&&(Wo(t)||mn(t))&&mn(t.then)&&mn(t.catch),Zg=((t,e)=>t?setImmediate:e?((n,i)=>(Ds.addEventListener("message",({source:s,data:r})=>{s===Ds&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),Ds.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",mn(Ds.postMessage)),fS=typeof queueMicrotask<"u"?queueMicrotask.bind(Ds):typeof process<"u"&&process.nextTick||Zg,dS=t=>t!=null&&mn(t[Xl]),J={isArray:Ur,isArrayBuffer:Xg,isBuffer:Go,isFormData:By,isArrayBufferView:Ty,isString:Ay,isNumber:qg,isBoolean:Cy,isObject:Wo,isPlainObject:Ha,isEmptyObject:Ry,isReadableStream:zy,isRequest:Vy,isResponse:Hy,isHeaders:Gy,isUndefined:wr,isDate:Py,isFile:Ly,isReactNativeBlob:Dy,isReactNative:Iy,isBlob:Ny,isRegExp:nS,isFunction:mn,isStream:Fy,isURLSearchParams:ky,isTypedArray:Zy,isFileList:Uy,forEach:$o,merge:bu,extend:$y,trim:Wy,stripBOM:Xy,inherits:qy,toFlatObject:Yy,kindOf:ql,kindOfTest:Zn,endsWith:jy,toArray:Ky,forEachEntry:Jy,matchAll:Qy,isHTMLForm:eS,hasOwnProperty:Ah,hasOwnProp:Ah,reduceDescriptors:Kg,freezeMethods:iS,toObjectSet:sS,toCamelCase:tS,noop:rS,toFiniteNumber:oS,findKey:Yg,global:Ds,isContextDefined:jg,isSpecCompliantForm:aS,toJSONObject:lS,isAsyncFn:cS,isThenable:uS,setImmediate:Zg,asap:fS,isIterable:dS};let Ke=class Jg extends Error{static from(e,n,i,s,r,o){const a=new Jg(e.message,n||e.code,i,s,r);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:J.toJSONObject(this.config),code:this.code,status:this.status}}};Ke.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Ke.ERR_BAD_OPTION="ERR_BAD_OPTION";Ke.ECONNABORTED="ECONNABORTED";Ke.ETIMEDOUT="ETIMEDOUT";Ke.ERR_NETWORK="ERR_NETWORK";Ke.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Ke.ERR_DEPRECATED="ERR_DEPRECATED";Ke.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Ke.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Ke.ERR_CANCELED="ERR_CANCELED";Ke.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Ke.ERR_INVALID_URL="ERR_INVALID_URL";const hS=null;function Eu(t){return J.isPlainObject(t)||J.isArray(t)}function Qg(t){return J.endsWith(t,"[]")?t.slice(0,-2):t}function xc(t,e,n){return t?t.concat(e).map(function(s,r){return s=Qg(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function pS(t){return J.isArray(t)&&!t.some(Eu)}const mS=J.toFlatObject(J,{},null,function(e){return/^is[A-Z]/.test(e)});function jl(t,e,n){if(!J.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=J.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,p){return!J.isUndefined(p[_])});const i=n.metaTokens,s=n.visitor||u,r=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&J.isSpecCompliantForm(e);if(!J.isFunction(s))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(J.isDate(m))return m.toISOString();if(J.isBoolean(m))return m.toString();if(!l&&J.isBlob(m))throw new Ke("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(m)||J.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,_,p){let g=m;if(J.isReactNative(e)&&J.isReactNativeBlob(m))return e.append(xc(p,_,r),c(m)),!1;if(m&&!p&&typeof m=="object"){if(J.endsWith(_,"{}"))_=i?_:_.slice(0,-2),m=JSON.stringify(m);else if(J.isArray(m)&&pS(m)||(J.isFileList(m)||J.endsWith(_,"[]"))&&(g=J.toArray(m)))return _=Qg(_),g.forEach(function(E,y){!(J.isUndefined(E)||E===null)&&e.append(o===!0?xc([_],y,r):o===null?_:_+"[]",c(E))}),!1}return Eu(m)?!0:(e.append(xc(p,_,r),c(m)),!1)}const d=[],f=Object.assign(mS,{defaultVisitor:u,convertValue:c,isVisitable:Eu});function h(m,_){if(!J.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+_.join("."));d.push(m),J.forEach(m,function(g,x){(!(J.isUndefined(g)||g===null)&&s.call(e,g,J.isString(x)?x.trim():x,_,f))===!0&&h(g,_?_.concat(x):[x])}),d.pop()}}if(!J.isObject(t))throw new TypeError("data must be an object");return h(t),e}function Ch(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Kf(t,e){this._pairs=[],t&&jl(t,this,e)}const e_=Kf.prototype;e_.append=function(e,n){this._pairs.push([e,n])};e_.toString=function(e){const n=e?function(i){return e.call(this,i,Ch)}:Ch;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function gS(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function t_(t,e,n){if(!e)return t;const i=n&&n.encode||gS,s=J.isFunction(n)?{serialize:n}:n,r=s&&s.serialize;let o;if(r?o=r(e,s):o=J.isURLSearchParams(e)?e.toString():new Kf(e,s).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class Rh{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){J.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Zf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},_S=typeof URLSearchParams<"u"?URLSearchParams:Kf,vS=typeof FormData<"u"?FormData:null,xS=typeof Blob<"u"?Blob:null,yS={isBrowser:!0,classes:{URLSearchParams:_S,FormData:vS,Blob:xS},protocols:["http","https","file","blob","url","data"]},Jf=typeof window<"u"&&typeof document<"u",wu=typeof navigator=="object"&&navigator||void 0,SS=Jf&&(!wu||["ReactNative","NativeScript","NS"].indexOf(wu.product)<0),MS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",bS=Jf&&window.location.href||"http://localhost",ES=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Jf,hasStandardBrowserEnv:SS,hasStandardBrowserWebWorkerEnv:MS,navigator:wu,origin:bS},Symbol.toStringTag,{value:"Module"})),en={...ES,...yS};function wS(t,e){return jl(t,new en.classes.URLSearchParams,{visitor:function(n,i,s,r){return en.isNode&&J.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function TS(t){return J.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function AS(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function n_(t){function e(n,i,s,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&J.isArray(s)?s.length:o,l?(J.hasOwnProp(s,o)?s[o]=[s[o],i]:s[o]=i,!a):((!s[o]||!J.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&J.isArray(s[o])&&(s[o]=AS(s[o])),!a)}if(J.isFormData(t)&&J.isFunction(t.entries)){const n={};return J.forEachEntry(t,(i,s)=>{e(TS(i),s,n,0)}),n}return null}function CS(t,e,n){if(J.isString(t))try{return(e||JSON.parse)(t),J.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Xo={transitional:Zf,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=J.isObject(e);if(r&&J.isHTMLForm(e)&&(e=new FormData(e)),J.isFormData(e))return s?JSON.stringify(n_(e)):e;if(J.isArrayBuffer(e)||J.isBuffer(e)||J.isStream(e)||J.isFile(e)||J.isBlob(e)||J.isReadableStream(e))return e;if(J.isArrayBufferView(e))return e.buffer;if(J.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return wS(e,this.formSerializer).toString();if((a=J.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return jl(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||s?(n.setContentType("application/json",!1),CS(e)):e}],transformResponse:[function(e){const n=this.transitional||Xo.transitional,i=n&&n.forcedJSONParsing,s=this.responseType==="json";if(J.isResponse(e)||J.isReadableStream(e))return e;if(e&&J.isString(e)&&(i&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?Ke.from(a,Ke.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:en.classes.FormData,Blob:en.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],t=>{Xo.headers[t]={}});const RS=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),PS=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&RS[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Ph=Symbol("internals");function Wr(t){return t&&String(t).trim().toLowerCase()}function Ga(t){return t===!1||t==null?t:J.isArray(t)?t.map(Ga):String(t)}function LS(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const DS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function yc(t,e,n,i,s){if(J.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!J.isString(e)){if(J.isString(i))return e.indexOf(i)!==-1;if(J.isRegExp(i))return i.test(e)}}function IS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function NS(t,e){const n=J.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let gn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=Wr(l);if(!u)throw new Error("header name must be a non-empty string");const d=J.findKey(s,u);(!d||s[d]===void 0||c===!0||c===void 0&&s[d]!==!1)&&(s[d||l]=Ga(a))}const o=(a,l)=>J.forEach(a,(c,u)=>r(c,u,l));if(J.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(J.isString(e)&&(e=e.trim())&&!DS(e))o(PS(e),n);else if(J.isObject(e)&&J.isIterable(e)){let a={},l,c;for(const u of e){if(!J.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?J.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=Wr(e),e){const i=J.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return LS(s);if(J.isFunction(n))return n.call(this,s,i);if(J.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Wr(e),e){const i=J.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||yc(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=Wr(o),o){const a=J.findKey(i,o);a&&(!n||yc(i,i[a],a,n))&&(delete i[a],s=!0)}}return J.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||yc(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return J.forEach(this,(s,r)=>{const o=J.findKey(i,r);if(o){n[o]=Ga(s),delete n[r];return}const a=e?IS(r):String(r).trim();a!==r&&delete n[r],n[a]=Ga(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return J.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&J.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Ph]=this[Ph]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Wr(o);i[a]||(NS(s,o),i[a]=!0)}return J.isArray(e)?e.forEach(r):r(e),this}};gn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);J.reduceDescriptors(gn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});J.freezeMethods(gn);function Sc(t,e){const n=this||Xo,i=e||n,s=gn.from(i.headers);let r=i.data;return J.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function i_(t){return!!(t&&t.__CANCEL__)}let qo=class extends Ke{constructor(e,n,i){super(e??"canceled",Ke.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function s_(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ke("Request failed with status code "+n.status,[Ke.ERR_BAD_REQUEST,Ke.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function US(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function FS(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let d=r,f=0;for(;d!==s;)f+=n[d++],d=d%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const h=u&&c-u;return h?Math.round(f*1e3/h):void 0}}function OS(t,e){let n=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...c)};return[(...c)=>{const u=Date.now(),d=u-n;d>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-d)))},()=>s&&o(s)]}const hl=(t,e,n=3)=>{let i=0;const s=FS(50,250);return OS(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=o-i,c=s(l),u=o<=a;i=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},Lh=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Dh=t=>(...e)=>J.asap(()=>t(...e)),BS=en.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,en.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(en.origin),en.navigator&&/(msie|trident)/i.test(en.navigator.userAgent)):()=>!0,kS=en.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];J.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),J.isString(i)&&a.push(`path=${i}`),J.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),J.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function zS(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function VS(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function r_(t,e,n){let i=!zS(e);return t&&(i||n==!1)?VS(t,e):e}const Ih=t=>t instanceof gn?{...t}:t;function Hs(t,e){e=e||{};const n={};function i(c,u,d,f){return J.isPlainObject(c)&&J.isPlainObject(u)?J.merge.call({caseless:f},c,u):J.isPlainObject(u)?J.merge({},u):J.isArray(u)?u.slice():u}function s(c,u,d,f){if(J.isUndefined(u)){if(!J.isUndefined(c))return i(void 0,c,d,f)}else return i(c,u,d,f)}function r(c,u){if(!J.isUndefined(u))return i(void 0,u)}function o(c,u){if(J.isUndefined(u)){if(!J.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,d){if(d in e)return i(c,u);if(d in t)return i(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,d)=>s(Ih(c),Ih(u),d,!0)};return J.forEach(Object.keys({...t,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const d=J.hasOwnProp(l,u)?l[u]:s,f=d(t[u],e[u],u);J.isUndefined(f)&&d!==a||(n[u]=f)}),n}const o_=t=>{const e=Hs({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:r,headers:o,auth:a}=e;if(e.headers=o=gn.from(o),e.url=t_(r_(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),J.isFormData(n)){if(en.hasStandardBrowserEnv||en.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(J.isFunction(n.getHeaders)){const l=n.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([u,d])=>{c.includes(u.toLowerCase())&&o.set(u,d)})}}if(en.hasStandardBrowserEnv&&(i&&J.isFunction(i)&&(i=i(e)),i||i!==!1&&BS(e.url))){const l=s&&r&&kS.read(r);l&&o.set(s,l)}return e},HS=typeof XMLHttpRequest<"u",GS=HS&&function(t){return new Promise(function(n,i){const s=o_(t);let r=s.data;const o=gn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,d,f,h,m;function _(){h&&h(),m&&m(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function g(){if(!p)return;const E=gn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),T={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:E,config:t,request:p};s_(function(L){n(L),_()},function(L){i(L),_()},T),p=null}"onloadend"in p?p.onloadend=g:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(g)},p.onabort=function(){p&&(i(new Ke("Request aborted",Ke.ECONNABORTED,t,p)),p=null)},p.onerror=function(y){const T=y&&y.message?y.message:"Network Error",C=new Ke(T,Ke.ERR_NETWORK,t,p);C.event=y||null,i(C),p=null},p.ontimeout=function(){let y=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const T=s.transitional||Zf;s.timeoutErrorMessage&&(y=s.timeoutErrorMessage),i(new Ke(y,T.clarifyTimeoutError?Ke.ETIMEDOUT:Ke.ECONNABORTED,t,p)),p=null},r===void 0&&o.setContentType(null),"setRequestHeader"in p&&J.forEach(o.toJSON(),function(y,T){p.setRequestHeader(T,y)}),J.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),a&&a!=="json"&&(p.responseType=s.responseType),c&&([f,m]=hl(c,!0),p.addEventListener("progress",f)),l&&p.upload&&([d,h]=hl(l),p.upload.addEventListener("progress",d),p.upload.addEventListener("loadend",h)),(s.cancelToken||s.signal)&&(u=E=>{p&&(i(!E||E.type?new qo(null,t,p):E),p.abort(),p=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const x=US(s.url);if(x&&en.protocols.indexOf(x)===-1){i(new Ke("Unsupported protocol "+x+":",Ke.ERR_BAD_REQUEST,t));return}p.send(r||null)})},WS=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,s;const r=function(c){if(!s){s=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Ke?u:new qo(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,r(new Ke(`timeout of ${e}ms exceeded`,Ke.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(r):c.removeEventListener("abort",r)}),t=null)};t.forEach(c=>c.addEventListener("abort",r));const{signal:l}=i;return l.unsubscribe=()=>J.asap(a),l}},$S=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},XS=async function*(t,e){for await(const n of qS(t))yield*$S(n,e)},qS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Nh=(t,e,n,i)=>{const s=XS(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let d=u.byteLength;if(n){let f=r+=d;n(f)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Uh=64*1024,{isFunction:ra}=J,YS=(({Request:t,Response:e})=>({Request:t,Response:e}))(J.global),{ReadableStream:Fh,TextEncoder:Oh}=J.global,Bh=(t,...e)=>{try{return!!t(...e)}catch{return!1}},jS=t=>{t=J.merge.call({skipUndefined:!0},YS,t);const{fetch:e,Request:n,Response:i}=t,s=e?ra(e):typeof fetch=="function",r=ra(n),o=ra(i);if(!s)return!1;const a=s&&ra(Fh),l=s&&(typeof Oh=="function"?(m=>_=>m.encode(_))(new Oh):async m=>new Uint8Array(await new n(m).arrayBuffer())),c=r&&a&&Bh(()=>{let m=!1;const _=new n(en.origin,{body:new Fh,method:"POST",get duplex(){return m=!0,"half"}}).headers.has("Content-Type");return m&&!_}),u=o&&a&&Bh(()=>J.isReadableStream(new i("").body)),d={stream:u&&(m=>m.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!d[m]&&(d[m]=(_,p)=>{let g=_&&_[m];if(g)return g.call(_);throw new Ke(`Response type '${m}' is not supported`,Ke.ERR_NOT_SUPPORT,p)})});const f=async m=>{if(m==null)return 0;if(J.isBlob(m))return m.size;if(J.isSpecCompliantForm(m))return(await new n(en.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(J.isArrayBufferView(m)||J.isArrayBuffer(m))return m.byteLength;if(J.isURLSearchParams(m)&&(m=m+""),J.isString(m))return(await l(m)).byteLength},h=async(m,_)=>{const p=J.toFiniteNumber(m.getContentLength());return p??f(_)};return async m=>{let{url:_,method:p,data:g,signal:x,cancelToken:E,timeout:y,onDownloadProgress:T,onUploadProgress:C,responseType:L,headers:S,withCredentials:M="same-origin",fetchOptions:N}=o_(m),D=e||fetch;L=L?(L+"").toLowerCase():"text";let U=WS([x,E&&E.toAbortSignal()],y),V=null;const $=U&&U.unsubscribe&&(()=>{U.unsubscribe()});let B;try{if(C&&c&&p!=="get"&&p!=="head"&&(B=await h(S,g))!==0){let he=new n(_,{method:"POST",body:g,duplex:"half"}),ie;if(J.isFormData(g)&&(ie=he.headers.get("content-type"))&&S.setContentType(ie),he.body){const[ae,Ue]=Lh(B,hl(Dh(C)));g=Nh(he.body,Uh,ae,Ue)}}J.isString(M)||(M=M?"include":"omit");const w=r&&"credentials"in n.prototype,A={...N,signal:U,method:p.toUpperCase(),headers:S.normalize().toJSON(),body:g,duplex:"half",credentials:w?M:void 0};V=r&&new n(_,A);let O=await(r?D(V,N):D(_,A));const X=u&&(L==="stream"||L==="response");if(u&&(T||X&&$)){const he={};["status","statusText","headers"].forEach(ze=>{he[ze]=O[ze]});const ie=J.toFiniteNumber(O.headers.get("content-length")),[ae,Ue]=T&&Lh(ie,hl(Dh(T),!0))||[];O=new i(Nh(O.body,Uh,ae,()=>{Ue&&Ue(),$&&$()}),he)}L=L||"text";let oe=await d[J.findKey(d,L)||"text"](O,m);return!X&&$&&$(),await new Promise((he,ie)=>{s_(he,ie,{data:oe,headers:gn.from(O.headers),status:O.status,statusText:O.statusText,config:m,request:V})})}catch(w){throw $&&$(),w&&w.name==="TypeError"&&/Load failed|fetch/i.test(w.message)?Object.assign(new Ke("Network Error",Ke.ERR_NETWORK,m,V,w&&w.response),{cause:w.cause||w}):Ke.from(w,w&&w.code,m,V,w&&w.response)}}},KS=new Map,a_=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,l,c,u=KS;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:jS(e)),u=c;return c};a_();const Qf={http:hS,xhr:GS,fetch:{get:a_}};J.forEach(Qf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const kh=t=>`- ${t}`,ZS=t=>J.isFunction(t)||t===null||t===!1;function JS(t,e){t=J.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!ZS(i)&&(s=Qf[(a=String(i)).toLowerCase()],s===void 0))throw new Ke(`Unknown adapter '${a}'`);if(s&&(J.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(kh).join(`
`):" "+kh(o[0]):"as no adapter specified";throw new Ke("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s}const l_={getAdapter:JS,adapters:Qf};function Mc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new qo(null,t)}function zh(t){return Mc(t),t.headers=gn.from(t.headers),t.data=Sc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),l_.getAdapter(t.adapter||Xo.adapter,t)(t).then(function(i){return Mc(t),i.data=Sc.call(t,t.transformResponse,i),i.headers=gn.from(i.headers),i},function(i){return i_(i)||(Mc(t),i&&i.response&&(i.response.data=Sc.call(t,t.transformResponse,i.response),i.response.headers=gn.from(i.response.headers))),Promise.reject(i)})}const c_="1.13.6",Kl={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Kl[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Vh={};Kl.transitional=function(e,n,i){function s(r,o){return"[Axios v"+c_+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Ke(s(o," has been removed"+(n?" in "+n:"")),Ke.ERR_DEPRECATED);return n&&!Vh[o]&&(Vh[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};Kl.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function QS(t,e,n){if(typeof t!="object")throw new Ke("options must be an object",Ke.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=e[r];if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new Ke("option "+r+" must be "+l,Ke.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ke("Unknown option "+r,Ke.ERR_BAD_OPTION)}}const Wa={assertOptions:QS,validators:Kl},Ln=Wa.validators;let Bs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Rh,response:new Rh}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?r&&!String(i.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+r):i.stack=r}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Hs(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Wa.assertOptions(i,{silentJSONParsing:Ln.transitional(Ln.boolean),forcedJSONParsing:Ln.transitional(Ln.boolean),clarifyTimeoutError:Ln.transitional(Ln.boolean),legacyInterceptorReqResOrdering:Ln.transitional(Ln.boolean)},!1),s!=null&&(J.isFunction(s)?n.paramsSerializer={serialize:s}:Wa.assertOptions(s,{encode:Ln.function,serialize:Ln.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Wa.assertOptions(n,{baseUrl:Ln.spelling("baseURL"),withXsrfToken:Ln.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&J.merge(r.common,r[n.method]);r&&J.forEach(["delete","get","head","post","put","patch","common"],m=>{delete r[m]}),n.headers=gn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(n)===!1)return;l=l&&_.synchronous;const p=n.transitional||Zf;p&&p.legacyInterceptorReqResOrdering?a.unshift(_.fulfilled,_.rejected):a.push(_.fulfilled,_.rejected)});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,d=0,f;if(!l){const m=[zh.bind(this),void 0];for(m.unshift(...a),m.push(...c),f=m.length,u=Promise.resolve(n);d<f;)u=u.then(m[d++],m[d++]);return u}f=a.length;let h=n;for(;d<f;){const m=a[d++],_=a[d++];try{h=m(h)}catch(p){_.call(this,p);break}}try{u=zh.call(this,h)}catch(m){return Promise.reject(m)}for(d=0,f=c.length;d<f;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=Hs(this.defaults,e);const n=r_(e.baseURL,e.url,e.allowAbsoluteUrls);return t_(n,e.params,e.paramsSerializer)}};J.forEach(["delete","get","head","options"],function(e){Bs.prototype[e]=function(n,i){return this.request(Hs(i||{},{method:e,url:n,data:(i||{}).data}))}});J.forEach(["post","put","patch"],function(e){function n(i){return function(r,o,a){return this.request(Hs(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Bs.prototype[e]=n(),Bs.prototype[e+"Form"]=n(!0)});let eM=class u_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new qo(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new u_(function(s){e=s}),cancel:e}}};function tM(t){return function(n){return t.apply(null,n)}}function nM(t){return J.isObject(t)&&t.isAxiosError===!0}const Tu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Tu).forEach(([t,e])=>{Tu[e]=t});function f_(t){const e=new Bs(t),n=Wg(Bs.prototype.request,e);return J.extend(n,Bs.prototype,e,{allOwnKeys:!0}),J.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return f_(Hs(t,s))},n}const Ut=f_(Xo);Ut.Axios=Bs;Ut.CanceledError=qo;Ut.CancelToken=eM;Ut.isCancel=i_;Ut.VERSION=c_;Ut.toFormData=jl;Ut.AxiosError=Ke;Ut.Cancel=Ut.CanceledError;Ut.all=function(e){return Promise.all(e)};Ut.spread=tM;Ut.isAxiosError=nM;Ut.mergeConfig=Hs;Ut.AxiosHeaders=gn;Ut.formToJSON=t=>n_(J.isHTMLForm(t)?new FormData(t):t);Ut.getAdapter=l_.getAdapter;Ut.HttpStatusCode=Tu;Ut.default=Ut;const{Axios:gO,AxiosError:_O,CanceledError:vO,isCancel:xO,CancelToken:yO,VERSION:SO,all:MO,Cancel:bO,isAxiosError:EO,spread:wO,toFormData:TO,AxiosHeaders:AO,HttpStatusCode:CO,formToJSON:RO,getAdapter:PO,mergeConfig:LO}=Ut,Ks=new Map;function bc(t){const{method:e,url:n,params:i,data:s}=t;return[e,n,JSON.stringify(i),JSON.stringify(s)].join("&")}function iM(t){return t.interceptors.request.use(e=>{const n=bc(e);if(Ks.has(n)){const s=Ks.get(n);s==null||s.abort(),Ks.delete(n)}const i=new AbortController;return e.signal=i.signal,Ks.set(n,i),e.metadata={startTime:Date.now()},e},e=>Promise.reject(e)),t.interceptors.response.use(e=>{var s,r;const n=bc(e.config);Ks.delete(n);const i=Date.now()-(((s=e.config.metadata)==null?void 0:s.startTime)||Date.now());return i>3e3&&console.warn(`[API] Slow response: ${(r=e.config.method)==null?void 0:r.toUpperCase()} ${e.config.url} took ${i}ms`),e},async e=>{var r,o,a;const n=e.config;if(n){const l=bc(n);Ks.delete(l)}if(e.name==="CanceledError"||e.code==="ERR_CANCELED")return Promise.reject({deduplicated:!0,message:"请求已去重"});const i=(r=e.response)==null?void 0:r.status,s=(o=e.config)==null?void 0:o.url;return i===401?(console.error("[API] 未授权，请检查认证信息"),Promise.reject({status:401,message:"未授权",url:s})):i===403?(console.error("[API] 禁止访问，权限不足"),Promise.reject({status:403,message:"权限不足",url:s})):i===404?(console.warn(`[API] 资源不存在: ${s}`),Promise.reject({status:404,message:"资源不存在",url:s})):i===429?(console.warn("[API] 请求过于频繁，请稍后重试"),Promise.reject({status:429,message:"请求过于频繁",url:s})):i&&i>=500?(console.error(`[API] 服务端错误 ${i}: ${s}`),Promise.reject({status:i,message:`服务端错误 (${i})`,url:s})):e.code==="ECONNREFUSED"||e.code==="ERR_NETWORK"?(console.error("[API] 无法连接到服务器 (http://localhost:22888)"),Promise.reject({code:"NETWORK_ERROR",message:"无法连接到记忆服务器，请确认后端服务已启动"})):e.code==="ETIMEDOUT"||(a=e.message)!=null&&a.includes("timeout")?(console.error(`[API] 请求超时: ${s}`),Promise.reject({code:"TIMEOUT",message:"请求超时，请稍后重试"})):(console.error("[API] 未知错误:",e.message),Promise.reject({code:"UNKNOWN",message:e.message||"未知错误"}))}),t}const sM=2,rM=1e3;async function oM(t){return new Promise(e=>setTimeout(e,t))}async function bt(t,e=sM,n=rM){let i=null;for(let s=0;s<=e;s++)try{return await t()}catch(r){if(i=r,s<e&&aM(r)){console.warn(`[Retry] 第 ${s+1} 次重试... (${r.message})`),await oM(n*(s+1));continue}break}throw i}function aM(t){var i,s;if(!t)return!1;const e=["ECONNRESET","ETIMEDOUT","ECONNREFUSED","ERR_NETWORK"],n=[502,503,504,429];return e.includes(t.code)||n.includes(t.status)||((i=t.message)==null?void 0:i.includes("timeout"))||((s=t.message)==null?void 0:s.includes("network"))}const Et=iM(Ut.create({baseURL:"http://localhost:22888",timeout:3e4})),Nn={async getStats(){return(await bt(()=>Et.get("/dashboard/stats"))).data},async getGraph(t=7,e=1e3,n=!1){return(await bt(()=>Et.get("/dashboard/graph",{params:{days:t,max_nodes:e,memory_only:n}}))).data},async searchMemories(t,e=20){return(await bt(()=>Et.get("/dashboard/memory/search",{params:{query:t,limit:e}}))).data},async getMemoryDetail(t){return(await bt(()=>Et.get(`/dashboard/memory/${t}`))).data},async updateMemory(t,e){return(await bt(()=>Et.post("/dashboard/memory/update",{memory_id:t,content:e.content,user_id:e.user_id,title:e.title,keywords:e.keywords}))).data},async writeMemory(t){return(await bt(()=>Et.post("/memory/write",t))).data},async readMemory(t){return(await bt(()=>Et.post("/memory/read",t))).data},async deleteMemory(t,e){return(await bt(()=>Et.post("/memory/delete",{memory_id:t,user_id:e}))).data},async reflectMemory(t){return(await bt(()=>Et.post("/memory/reflect",null,{params:{user_id:t}}))).data},async rebuildGraph(){return(await bt(()=>Et.post("/dashboard/rebuild_graph"))).data},async getLogs(){return(await bt(()=>Et.get("/logs"))).data}},di={async getStats(){return(await bt(()=>Et.get("/tiered/stats"))).data},async getMergedMemories(){return(await bt(()=>Et.get("/tiered/merged"))).data},async getMergeChain(t){return(await bt(()=>Et.get(`/tiered/memory/${t}/merge-chain`))).data},async triggerDailyReflection(){return(await bt(()=>Et.post("/tiered/daily-reflection/trigger"))).data},async writeStorage(t){return(await bt(()=>Et.post("/tiered/storage/write",t))).data},async writeThinking(t){return(await bt(()=>Et.post("/tiered/thinking/write",t))).data},async writeSkill(t){return(await bt(()=>Et.post("/tiered/skill/write",t))).data},async queryMemories(t){return(await bt(()=>Et.get("/tiered/query",{params:t}))).data},async getMemory(t){return(await bt(()=>Et.get(`/tiered/memory/${t}`))).data},async getMemoryTrace(t){return(await bt(()=>Et.get(`/tiered/memory/${t}/trace`))).data},async submitFeedback(t,e){return(await bt(()=>Et.post(`/tiered/memory/${t}/feedback`,e))).data},async summarizeMemories(t){return(await bt(()=>Et.post("/tiered/summarize",{memory_ids:t}))).data}},Hh={async getStatus(){return(await bt(()=>Et.get("/dashboard/evolution/status"))).data},async setProfile(t){return(await bt(()=>Et.post("/dashboard/evolution/profile",null,{params:{profile:t}}))).data}},lM={async getStatus(){return(await bt(()=>Et.get("/dashboard/llm/status"))).data},async getInteractions(t=50){return(await bt(()=>Et.get("/dashboard/llm/interactions",{params:{limit:t}}))).data}};async function ti(t,e,n){t.value=!0;try{return await e()}catch(i){throw n==null||n(i),i}finally{t.value=!1}}const to=(()=>{let t=null;return{error(e){var n;if(!t)try{t=require("@/composables/useToast").useToast()}catch{return}(n=t.error)==null||n.call(t,e)},success(e){var n;if(!t)try{t=require("@/composables/useToast").useToast()}catch{return}(n=t.success)==null||n.call(t,e)}}})();function Dn(t,e){const n=t instanceof Error?t.message:String(t);to.error(`${e}失败: ${n}`)}const qi=Yf("memory",()=>{const t=Te([]),e=Te(null),n=Te({nodes:[],links:[]}),i=Te(null),s=Te(null),r=Te([]),o=Te("all"),a=Te("neural"),l=Te("standard"),c=Te(""),u=Te([]),d=Te(!1),f=Te(null),h=St(()=>o.value==="all"?t.value:t.value.filter(w=>w.memory_type===o.value)),m=St(()=>{let w=0,A=0,O=0;for(const X of t.value)X.memory_type==="storage"?w++:X.memory_type==="thinking"?A++:X.memory_type==="skill"&&O++;return{storage:w,thinking:A,skill:O,total:t.value.length}});async function _(){try{i.value=await Nn.getStats()}catch(w){Dn(w,"获取统计")}}async function p(w=7,A=1e3){await ti(d,async()=>{n.value=await Nn.getGraph(w,A)},O=>Dn(O,"加载图谱"))}async function g(){try{s.value=await Hh.getStatus()}catch(w){Dn(w,"获取进化状态")}}async function x(w){await ti(d,async()=>{c.value=w;const A=await Nn.searchMemories(w);u.value=A.items.map(O=>{var X;return{...O,content_type:"note",keywords:O.keywords??[],tags:[],char_count:((X=O.content)==null?void 0:X.length)??0,importance:.5}})},A=>Dn(A,"搜索记忆"))}async function E(w){await ti(d,async()=>{await Hh.setProfile(w),l.value=w,await g(),to.success(`进化配置已切换为 ${w}`)},A=>Dn(A,"切换进化配置"))}function y(w){o.value=w}function T(w){a.value=w}function C(w,A="info"){r.value.push({time:new Date().toLocaleTimeString(),message:w,type:A}),r.value.length>50&&r.value.shift()}function L(){r.value=[]}async function S(w,A,O="default",X,oe){return await ti(d,async()=>{const he=await Nn.updateMemory(w,{content:A,user_id:O,title:X,keywords:oe});return C(`记忆已更新: ${w}`,"success"),he},he=>{C(`更新记忆失败: ${w}`,"error"),Dn(he,"更新记忆")})}async function M(w,A="default"){return await ti(d,async()=>{const O=await Nn.deleteMemory(w,A);return C(`记忆已删除: ${w}`,"success"),O},O=>{C(`删除记忆失败: ${w}`,"error"),Dn(O,"删除记忆")})}async function N(w){return await ti(d,async()=>{const A=await Nn.writeMemory(w);return C(`记忆已写入: ${A.id}`,"success"),to.success("记忆写入成功"),A},A=>{C("写入记忆失败","error"),Dn(A,"写入记忆")})}async function D(w="default"){return await ti(d,async()=>{const A=await Nn.reflectMemory(w);return C("反思完成","success"),to.success("反思完成"),A},A=>{C("反思失败","error"),Dn(A,"反思")})}async function U(){return await ti(d,async()=>{const w=await Nn.rebuildGraph();return C("图谱重建成功","success"),to.success("图谱已重建"),w},w=>{C("图谱重建失败","error"),Dn(w,"重建图谱")})}async function V(w,A){return await ti(d,async()=>{const O=await di.submitFeedback(w,A);return C(`反馈已提交: ${w}`,"success"),O},O=>{C(`提交反馈失败: ${w}`,"error"),Dn(O,"提交反馈")})}async function $(w){return await ti(d,async()=>{const A=await di.summarizeMemories(w);return C(`已总结 ${w.length} 条记忆`,"success"),A},A=>Dn(A,"总结记忆"))}async function B(){try{const w=await Nn.getLogs();w!=null&&w.length&&(r.value=w.slice(0,50).map(A=>({time:A.time,message:A.message,type:["info","success","error","warn"].includes(A.type)?A.type:"info"})))}catch{}}return{memories:t,currentMemory:e,graphData:n,stats:i,evolutionStatus:s,logs:r,currentMemoryType:o,currentViewMode:a,currentProfile:l,searchQuery:c,searchResults:u,isLoading:d,error:f,filteredMemories:h,memoryCountByType:m,fetchStats:_,fetchGraph:p,fetchEvolutionStatus:g,searchMemories:x,setEvolutionProfile:E,setMemoryType:y,setViewMode:T,addLog:C,clearLogs:L,updateMemory:S,deleteMemory:M,writeMemory:N,reflectMemory:D,rebuildGraph:U,submitFeedback:V,summarizeMemories:$,fetchLogs:B}}),Zs=Te([]);let cM=0;function ed(){function t(o,a="info",l=3e3){const c=cM++;return Zs.value.push({id:c,message:o,type:a,duration:l}),l>0&&setTimeout(()=>{Zs.value=Zs.value.filter(u=>u.id!==c)},l),c}function e(o,a){return t(o,"success",a)}function n(o,a){return t(o,"error",a??5e3)}function i(o,a){return t(o,"warn",a)}function s(o,a){return t(o,"info",a)}function r(o){Zs.value=Zs.value.filter(a=>a.id!==o)}return{toasts:Zs,show:t,success:e,error:n,warn:i,info:s,dismiss:r}}class Gh extends Map{constructor(e,n=dM){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const[i,s]of e)this.set(i,s)}get(e){return super.get(Wh(this,e))}has(e){return super.has(Wh(this,e))}set(e,n){return super.set(uM(this,e),n)}delete(e){return super.delete(fM(this,e))}}function Wh({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):n}function uM({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):(t.set(i,n),n)}function fM({_intern:t,_key:e},n){const i=e(n);return t.has(i)&&(n=t.get(i),t.delete(i)),n}function dM(t){return t!==null&&typeof t=="object"?t.valueOf():t}var hM={value:()=>{}};function Zl(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new $a(n)}function $a(t){this._=t}function pM(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",s=n.indexOf(".");if(s>=0&&(i=n.slice(s+1),n=n.slice(0,s)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}$a.prototype=Zl.prototype={constructor:$a,on:function(t,e){var n=this._,i=pM(t+"",n),s,r=-1,o=i.length;if(arguments.length<2){for(;++r<o;)if((s=(t=i[r]).type)&&(s=mM(n[s],t.name)))return s;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++r<o;)if(s=(t=i[r]).type)n[s]=$h(n[s],t.name,e);else if(e==null)for(s in n)n[s]=$h(n[s],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new $a(t)},call:function(t,e){if((s=arguments.length-2)>0)for(var n=new Array(s),i=0,s,r;i<s;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],i=0,s=r.length;i<s;++i)r[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],s=0,r=i.length;s<r;++s)i[s].value.apply(e,n)}};function mM(t,e){for(var n=0,i=t.length,s;n<i;++n)if((s=t[n]).name===e)return s.value}function $h(t,e,n){for(var i=0,s=t.length;i<s;++i)if(t[i].name===e){t[i]=hM,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var Au="http://www.w3.org/1999/xhtml";const Xh={svg:"http://www.w3.org/2000/svg",xhtml:Au,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Jl(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),Xh.hasOwnProperty(e)?{space:Xh[e],local:t}:t}function gM(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Au&&e.documentElement.namespaceURI===Au?e.createElement(t):e.createElementNS(n,t)}}function _M(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function d_(t){var e=Jl(t);return(e.local?_M:gM)(e)}function vM(){}function td(t){return t==null?vM:function(){return this.querySelector(t)}}function xM(t){typeof t!="function"&&(t=td(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=new Array(o),l,c,u=0;u<o;++u)(l=r[u])&&(c=t.call(l,l.__data__,u,r))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new Rn(i,this._parents)}function yM(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function SM(){return[]}function h_(t){return t==null?SM:function(){return this.querySelectorAll(t)}}function MM(t){return function(){return yM(t.apply(this,arguments))}}function bM(t){typeof t=="function"?t=MM(t):t=h_(t);for(var e=this._groups,n=e.length,i=[],s=[],r=0;r<n;++r)for(var o=e[r],a=o.length,l,c=0;c<a;++c)(l=o[c])&&(i.push(t.call(l,l.__data__,c,o)),s.push(l));return new Rn(i,s)}function p_(t){return function(){return this.matches(t)}}function m_(t){return function(e){return e.matches(t)}}var EM=Array.prototype.find;function wM(t){return function(){return EM.call(this.children,t)}}function TM(){return this.firstElementChild}function AM(t){return this.select(t==null?TM:wM(typeof t=="function"?t:m_(t)))}var CM=Array.prototype.filter;function RM(){return Array.from(this.children)}function PM(t){return function(){return CM.call(this.children,t)}}function LM(t){return this.selectAll(t==null?RM:PM(typeof t=="function"?t:m_(t)))}function DM(t){typeof t!="function"&&(t=p_(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=[],l,c=0;c<o;++c)(l=r[c])&&t.call(l,l.__data__,c,r)&&a.push(l);return new Rn(i,this._parents)}function g_(t){return new Array(t.length)}function IM(){return new Rn(this._enter||this._groups.map(g_),this._parents)}function pl(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}pl.prototype={constructor:pl,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function NM(t){return function(){return t}}function UM(t,e,n,i,s,r){for(var o=0,a,l=e.length,c=r.length;o<c;++o)(a=e[o])?(a.__data__=r[o],i[o]=a):n[o]=new pl(t,r[o]);for(;o<l;++o)(a=e[o])&&(s[o]=a)}function FM(t,e,n,i,s,r,o){var a,l,c=new Map,u=e.length,d=r.length,f=new Array(u),h;for(a=0;a<u;++a)(l=e[a])&&(f[a]=h=o.call(l,l.__data__,a,e)+"",c.has(h)?s[a]=l:c.set(h,l));for(a=0;a<d;++a)h=o.call(t,r[a],a,r)+"",(l=c.get(h))?(i[a]=l,l.__data__=r[a],c.delete(h)):n[a]=new pl(t,r[a]);for(a=0;a<u;++a)(l=e[a])&&c.get(f[a])===l&&(s[a]=l)}function OM(t){return t.__data__}function BM(t,e){if(!arguments.length)return Array.from(this,OM);var n=e?FM:UM,i=this._parents,s=this._groups;typeof t!="function"&&(t=NM(t));for(var r=s.length,o=new Array(r),a=new Array(r),l=new Array(r),c=0;c<r;++c){var u=i[c],d=s[c],f=d.length,h=kM(t.call(u,u&&u.__data__,c,i)),m=h.length,_=a[c]=new Array(m),p=o[c]=new Array(m),g=l[c]=new Array(f);n(u,d,_,p,g,h,e);for(var x=0,E=0,y,T;x<m;++x)if(y=_[x]){for(x>=E&&(E=x+1);!(T=p[E])&&++E<m;);y._next=T||null}}return o=new Rn(o,i),o._enter=a,o._exit=l,o}function kM(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function zM(){return new Rn(this._exit||this._groups.map(g_),this._parents)}function VM(t,e,n){var i=this.enter(),s=this,r=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(s=e(s),s&&(s=s.selection())),n==null?r.remove():n(r),i&&s?i.merge(s).order():s}function HM(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,s=n.length,r=i.length,o=Math.min(s,r),a=new Array(s),l=0;l<o;++l)for(var c=n[l],u=i[l],d=c.length,f=a[l]=new Array(d),h,m=0;m<d;++m)(h=c[m]||u[m])&&(f[m]=h);for(;l<s;++l)a[l]=n[l];return new Rn(a,this._parents)}function GM(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],s=i.length-1,r=i[s],o;--s>=0;)(o=i[s])&&(r&&o.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(o,r),r=o);return this}function WM(t){t||(t=$M);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,s=new Array(i),r=0;r<i;++r){for(var o=n[r],a=o.length,l=s[r]=new Array(a),c,u=0;u<a;++u)(c=o[u])&&(l[u]=c);l.sort(e)}return new Rn(s,this._parents).order()}function $M(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function XM(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function qM(){return Array.from(this)}function YM(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],s=0,r=i.length;s<r;++s){var o=i[s];if(o)return o}return null}function jM(){let t=0;for(const e of this)++t;return t}function KM(){return!this.node()}function ZM(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var s=e[n],r=0,o=s.length,a;r<o;++r)(a=s[r])&&t.call(a,a.__data__,r,s);return this}function JM(t){return function(){this.removeAttribute(t)}}function QM(t){return function(){this.removeAttributeNS(t.space,t.local)}}function eb(t,e){return function(){this.setAttribute(t,e)}}function tb(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function nb(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function ib(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function sb(t,e){var n=Jl(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?QM:JM:typeof e=="function"?n.local?ib:nb:n.local?tb:eb)(n,e))}function __(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function rb(t){return function(){this.style.removeProperty(t)}}function ob(t,e,n){return function(){this.style.setProperty(t,e,n)}}function ab(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function lb(t,e,n){return arguments.length>1?this.each((e==null?rb:typeof e=="function"?ab:ob)(t,e,n??"")):Tr(this.node(),t)}function Tr(t,e){return t.style.getPropertyValue(e)||__(t).getComputedStyle(t,null).getPropertyValue(e)}function cb(t){return function(){delete this[t]}}function ub(t,e){return function(){this[t]=e}}function fb(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function db(t,e){return arguments.length>1?this.each((e==null?cb:typeof e=="function"?fb:ub)(t,e)):this.node()[t]}function v_(t){return t.trim().split(/^|\s+/)}function nd(t){return t.classList||new x_(t)}function x_(t){this._node=t,this._names=v_(t.getAttribute("class")||"")}x_.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function y_(t,e){for(var n=nd(t),i=-1,s=e.length;++i<s;)n.add(e[i])}function S_(t,e){for(var n=nd(t),i=-1,s=e.length;++i<s;)n.remove(e[i])}function hb(t){return function(){y_(this,t)}}function pb(t){return function(){S_(this,t)}}function mb(t,e){return function(){(e.apply(this,arguments)?y_:S_)(this,t)}}function gb(t,e){var n=v_(t+"");if(arguments.length<2){for(var i=nd(this.node()),s=-1,r=n.length;++s<r;)if(!i.contains(n[s]))return!1;return!0}return this.each((typeof e=="function"?mb:e?hb:pb)(n,e))}function _b(){this.textContent=""}function vb(t){return function(){this.textContent=t}}function xb(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function yb(t){return arguments.length?this.each(t==null?_b:(typeof t=="function"?xb:vb)(t)):this.node().textContent}function Sb(){this.innerHTML=""}function Mb(t){return function(){this.innerHTML=t}}function bb(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function Eb(t){return arguments.length?this.each(t==null?Sb:(typeof t=="function"?bb:Mb)(t)):this.node().innerHTML}function wb(){this.nextSibling&&this.parentNode.appendChild(this)}function Tb(){return this.each(wb)}function Ab(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Cb(){return this.each(Ab)}function Rb(t){var e=typeof t=="function"?t:d_(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function Pb(){return null}function Lb(t,e){var n=typeof t=="function"?t:d_(t),i=e==null?Pb:typeof e=="function"?e:td(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function Db(){var t=this.parentNode;t&&t.removeChild(this)}function Ib(){return this.each(Db)}function Nb(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Ub(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Fb(t){return this.select(t?Ub:Nb)}function Ob(t){return arguments.length?this.property("__data__",t):this.node().__data__}function Bb(t){return function(e){t.call(this,e,this.__data__)}}function kb(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function zb(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,s=e.length,r;n<s;++n)r=e[n],(!t.type||r.type===t.type)&&r.name===t.name?this.removeEventListener(r.type,r.listener,r.options):e[++i]=r;++i?e.length=i:delete this.__on}}}function Vb(t,e,n){return function(){var i=this.__on,s,r=Bb(e);if(i){for(var o=0,a=i.length;o<a;++o)if((s=i[o]).type===t.type&&s.name===t.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=r,s.options=n),s.value=e;return}}this.addEventListener(t.type,r,n),s={type:t.type,name:t.name,value:e,listener:r,options:n},i?i.push(s):this.__on=[s]}}function Hb(t,e,n){var i=kb(t+""),s,r=i.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(s=0,u=a[l];s<r;++s)if((o=i[s]).type===u.type&&o.name===u.name)return u.value}return}for(a=e?Vb:zb,s=0;s<r;++s)this.each(a(i[s],e,n));return this}function M_(t,e,n){var i=__(t),s=i.CustomEvent;typeof s=="function"?s=new s(e,n):(s=i.document.createEvent("Event"),n?(s.initEvent(e,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(e,!1,!1)),t.dispatchEvent(s)}function Gb(t,e){return function(){return M_(this,t,e)}}function Wb(t,e){return function(){return M_(this,t,e.apply(this,arguments))}}function $b(t,e){return this.each((typeof e=="function"?Wb:Gb)(t,e))}function*Xb(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],s=0,r=i.length,o;s<r;++s)(o=i[s])&&(yield o)}var b_=[null];function Rn(t,e){this._groups=t,this._parents=e}function Yo(){return new Rn([[document.documentElement]],b_)}function qb(){return this}Rn.prototype=Yo.prototype={constructor:Rn,select:xM,selectAll:bM,selectChild:AM,selectChildren:LM,filter:DM,data:BM,enter:IM,exit:zM,join:VM,merge:HM,selection:qb,order:GM,sort:WM,call:XM,nodes:qM,node:YM,size:jM,empty:KM,each:ZM,attr:sb,style:lb,property:db,classed:gb,text:yb,html:Eb,raise:Tb,lower:Cb,append:Rb,insert:Lb,remove:Ib,clone:Fb,datum:Ob,on:Hb,dispatch:$b,[Symbol.iterator]:Xb};function Ar(t){return typeof t=="string"?new Rn([[document.querySelector(t)]],[document.documentElement]):new Rn([[t]],b_)}function Yb(t){let e;for(;e=t.sourceEvent;)t=e;return t}function qh(t,e){if(t=Yb(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var s=e.getBoundingClientRect();return[t.clientX-s.left-e.clientLeft,t.clientY-s.top-e.clientTop]}}return[t.pageX,t.pageY]}const jb={passive:!1},Ro={capture:!0,passive:!1};function Ec(t){t.stopImmediatePropagation()}function xr(t){t.preventDefault(),t.stopImmediatePropagation()}function Kb(t){var e=t.document.documentElement,n=Ar(t).on("dragstart.drag",xr,Ro);"onselectstart"in e?n.on("selectstart.drag",xr,Ro):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function Zb(t,e){var n=t.document.documentElement,i=Ar(t).on("dragstart.drag",null);e&&(i.on("click.drag",xr,Ro),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const oa=t=>()=>t;function Cu(t,{sourceEvent:e,subject:n,target:i,identifier:s,active:r,x:o,y:a,dx:l,dy:c,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:s,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:u}})}Cu.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function Jb(t){return!t.ctrlKey&&!t.button}function Qb(){return this.parentNode}function eE(t,e){return e??{x:t.x,y:t.y}}function tE(){return navigator.maxTouchPoints||"ontouchstart"in this}function E_(){var t=Jb,e=Qb,n=eE,i=tE,s={},r=Zl("start","drag","end"),o=0,a,l,c,u,d=0;function f(y){y.on("mousedown.drag",h).filter(i).on("touchstart.drag",p).on("touchmove.drag",g,jb).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(y,T){if(!(u||!t.call(this,y,T))){var C=E(this,e.call(this,y,T),y,T,"mouse");C&&(Ar(y.view).on("mousemove.drag",m,Ro).on("mouseup.drag",_,Ro),Kb(y.view),Ec(y),c=!1,a=y.clientX,l=y.clientY,C("start",y))}}function m(y){if(xr(y),!c){var T=y.clientX-a,C=y.clientY-l;c=T*T+C*C>d}s.mouse("drag",y)}function _(y){Ar(y.view).on("mousemove.drag mouseup.drag",null),Zb(y.view,c),xr(y),s.mouse("end",y)}function p(y,T){if(t.call(this,y,T)){var C=y.changedTouches,L=e.call(this,y,T),S=C.length,M,N;for(M=0;M<S;++M)(N=E(this,L,y,T,C[M].identifier,C[M]))&&(Ec(y),N("start",y,C[M]))}}function g(y){var T=y.changedTouches,C=T.length,L,S;for(L=0;L<C;++L)(S=s[T[L].identifier])&&(xr(y),S("drag",y,T[L]))}function x(y){var T=y.changedTouches,C=T.length,L,S;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),L=0;L<C;++L)(S=s[T[L].identifier])&&(Ec(y),S("end",y,T[L]))}function E(y,T,C,L,S,M){var N=r.copy(),D=qh(M||C,T),U,V,$;if(($=n.call(y,new Cu("beforestart",{sourceEvent:C,target:f,identifier:S,active:o,x:D[0],y:D[1],dx:0,dy:0,dispatch:N}),L))!=null)return U=$.x-D[0]||0,V=$.y-D[1]||0,function B(w,A,O){var X=D,oe;switch(w){case"start":s[S]=B,oe=o++;break;case"end":delete s[S],--o;case"drag":D=qh(O||A,T),oe=o;break}N.call(w,y,new Cu(w,{sourceEvent:A,subject:$,target:f,identifier:S,active:oe,x:D[0]+U,y:D[1]+V,dx:D[0]-X[0],dy:D[1]-X[1],dispatch:N}),L)}}return f.filter=function(y){return arguments.length?(t=typeof y=="function"?y:oa(!!y),f):t},f.container=function(y){return arguments.length?(e=typeof y=="function"?y:oa(y),f):e},f.subject=function(y){return arguments.length?(n=typeof y=="function"?y:oa(y),f):n},f.touchable=function(y){return arguments.length?(i=typeof y=="function"?y:oa(!!y),f):i},f.on=function(){var y=r.on.apply(r,arguments);return y===r?f:y},f.clickDistance=function(y){return arguments.length?(d=(y=+y)*y,f):Math.sqrt(d)},f}function id(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function w_(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function jo(){}var Po=.7,ml=1/Po,yr="\\s*([+-]?\\d+)\\s*",Lo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",_i="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",nE=/^#([0-9a-f]{3,8})$/,iE=new RegExp(`^rgb\\(${yr},${yr},${yr}\\)$`),sE=new RegExp(`^rgb\\(${_i},${_i},${_i}\\)$`),rE=new RegExp(`^rgba\\(${yr},${yr},${yr},${Lo}\\)$`),oE=new RegExp(`^rgba\\(${_i},${_i},${_i},${Lo}\\)$`),aE=new RegExp(`^hsl\\(${Lo},${_i},${_i}\\)$`),lE=new RegExp(`^hsla\\(${Lo},${_i},${_i},${Lo}\\)$`),Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};id(jo,Do,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:jh,formatHex:jh,formatHex8:cE,formatHsl:uE,formatRgb:Kh,toString:Kh});function jh(){return this.rgb().formatHex()}function cE(){return this.rgb().formatHex8()}function uE(){return T_(this).formatHsl()}function Kh(){return this.rgb().formatRgb()}function Do(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=nE.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?Zh(e):n===3?new pn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?aa(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?aa(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=iE.exec(t))?new pn(e[1],e[2],e[3],1):(e=sE.exec(t))?new pn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=rE.exec(t))?aa(e[1],e[2],e[3],e[4]):(e=oE.exec(t))?aa(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=aE.exec(t))?ep(e[1],e[2]/100,e[3]/100,1):(e=lE.exec(t))?ep(e[1],e[2]/100,e[3]/100,e[4]):Yh.hasOwnProperty(t)?Zh(Yh[t]):t==="transparent"?new pn(NaN,NaN,NaN,0):null}function Zh(t){return new pn(t>>16&255,t>>8&255,t&255,1)}function aa(t,e,n,i){return i<=0&&(t=e=n=NaN),new pn(t,e,n,i)}function fE(t){return t instanceof jo||(t=Do(t)),t?(t=t.rgb(),new pn(t.r,t.g,t.b,t.opacity)):new pn}function Ru(t,e,n,i){return arguments.length===1?fE(t):new pn(t,e,n,i??1)}function pn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}id(pn,Ru,w_(jo,{brighter(t){return t=t==null?ml:Math.pow(ml,t),new pn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Po:Math.pow(Po,t),new pn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new pn(ks(this.r),ks(this.g),ks(this.b),gl(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Jh,formatHex:Jh,formatHex8:dE,formatRgb:Qh,toString:Qh}));function Jh(){return`#${Is(this.r)}${Is(this.g)}${Is(this.b)}`}function dE(){return`#${Is(this.r)}${Is(this.g)}${Is(this.b)}${Is((isNaN(this.opacity)?1:this.opacity)*255)}`}function Qh(){const t=gl(this.opacity);return`${t===1?"rgb(":"rgba("}${ks(this.r)}, ${ks(this.g)}, ${ks(this.b)}${t===1?")":`, ${t})`}`}function gl(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function ks(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Is(t){return t=ks(t),(t<16?"0":"")+t.toString(16)}function ep(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Gn(t,e,n,i)}function T_(t){if(t instanceof Gn)return new Gn(t.h,t.s,t.l,t.opacity);if(t instanceof jo||(t=Do(t)),!t)return new Gn;if(t instanceof Gn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,s=Math.min(e,n,i),r=Math.max(e,n,i),o=NaN,a=r-s,l=(r+s)/2;return a?(e===r?o=(n-i)/a+(n<i)*6:n===r?o=(i-e)/a+2:o=(e-n)/a+4,a/=l<.5?r+s:2-r-s,o*=60):a=l>0&&l<1?0:o,new Gn(o,a,l,t.opacity)}function hE(t,e,n,i){return arguments.length===1?T_(t):new Gn(t,e,n,i??1)}function Gn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}id(Gn,hE,w_(jo,{brighter(t){return t=t==null?ml:Math.pow(ml,t),new Gn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Po:Math.pow(Po,t),new Gn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,s=2*n-i;return new pn(wc(t>=240?t-240:t+120,s,i),wc(t,s,i),wc(t<120?t+240:t-120,s,i),this.opacity)},clamp(){return new Gn(tp(this.h),la(this.s),la(this.l),gl(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=gl(this.opacity);return`${t===1?"hsl(":"hsla("}${tp(this.h)}, ${la(this.s)*100}%, ${la(this.l)*100}%${t===1?")":`, ${t})`}`}}));function tp(t){return t=(t||0)%360,t<0?t+360:t}function la(t){return Math.max(0,Math.min(1,t||0))}function wc(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const A_=t=>()=>t;function pE(t,e){return function(n){return t+n*e}}function mE(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function gE(t){return(t=+t)==1?C_:function(e,n){return n-e?mE(e,n,t):A_(isNaN(e)?n:e)}}function C_(t,e){var n=e-t;return n?pE(t,n):A_(isNaN(t)?e:t)}const np=function t(e){var n=gE(e);function i(s,r){var o=n((s=Ru(s)).r,(r=Ru(r)).r),a=n(s.g,r.g),l=n(s.b,r.b),c=C_(s.opacity,r.opacity);return function(u){return s.r=o(u),s.g=a(u),s.b=l(u),s.opacity=c(u),s+""}}return i.gamma=t,i}(1);function os(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var Pu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Tc=new RegExp(Pu.source,"g");function _E(t){return function(){return t}}function vE(t){return function(e){return t(e)+""}}function xE(t,e){var n=Pu.lastIndex=Tc.lastIndex=0,i,s,r,o=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Pu.exec(t))&&(s=Tc.exec(e));)(r=s.index)>n&&(r=e.slice(n,r),a[o]?a[o]+=r:a[++o]=r),(i=i[0])===(s=s[0])?a[o]?a[o]+=s:a[++o]=s:(a[++o]=null,l.push({i:o,x:os(i,s)})),n=Tc.lastIndex;return n<e.length&&(r=e.slice(n),a[o]?a[o]+=r:a[++o]=r),a.length<2?l[0]?vE(l[0].x):_E(e):(e=l.length,function(c){for(var u=0,d;u<e;++u)a[(d=l[u]).i]=d.x(c);return a.join("")})}var ip=180/Math.PI,Lu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function R_(t,e,n,i,s,r){var o,a,l;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,o=-o),{translateX:s,translateY:r,rotate:Math.atan2(e,t)*ip,skewX:Math.atan(l)*ip,scaleX:o,scaleY:a}}var ca;function yE(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Lu:R_(e.a,e.b,e.c,e.d,e.e,e.f)}function SE(t){return t==null||(ca||(ca=document.createElementNS("http://www.w3.org/2000/svg","g")),ca.setAttribute("transform",t),!(t=ca.transform.baseVal.consolidate()))?Lu:(t=t.matrix,R_(t.a,t.b,t.c,t.d,t.e,t.f))}function P_(t,e,n,i){function s(c){return c.length?c.pop()+" ":""}function r(c,u,d,f,h,m){if(c!==d||u!==f){var _=h.push("translate(",null,e,null,n);m.push({i:_-4,x:os(c,d)},{i:_-2,x:os(u,f)})}else(d||f)&&h.push("translate("+d+e+f+n)}function o(c,u,d,f){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),f.push({i:d.push(s(d)+"rotate(",null,i)-2,x:os(c,u)})):u&&d.push(s(d)+"rotate("+u+i)}function a(c,u,d,f){c!==u?f.push({i:d.push(s(d)+"skewX(",null,i)-2,x:os(c,u)}):u&&d.push(s(d)+"skewX("+u+i)}function l(c,u,d,f,h,m){if(c!==d||u!==f){var _=h.push(s(h)+"scale(",null,",",null,")");m.push({i:_-4,x:os(c,d)},{i:_-2,x:os(u,f)})}else(d!==1||f!==1)&&h.push(s(h)+"scale("+d+","+f+")")}return function(c,u){var d=[],f=[];return c=t(c),u=t(u),r(c.translateX,c.translateY,u.translateX,u.translateY,d,f),o(c.rotate,u.rotate,d,f),a(c.skewX,u.skewX,d,f),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,d,f),c=u=null,function(h){for(var m=-1,_=f.length,p;++m<_;)d[(p=f[m]).i]=p.x(h);return d.join("")}}}var ME=P_(yE,"px, ","px)","deg)"),bE=P_(SE,", ",")",")"),Cr=0,no=0,$r=0,L_=1e3,_l,io,vl=0,Gs=0,Ql=0,Io=typeof performance=="object"&&performance.now?performance:Date,D_=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function sd(){return Gs||(D_(EE),Gs=Io.now()+Ql)}function EE(){Gs=0}function xl(){this._call=this._time=this._next=null}xl.prototype=rd.prototype={constructor:xl,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?sd():+n)+(e==null?0:+e),!this._next&&io!==this&&(io?io._next=this:_l=this,io=this),this._call=t,this._time=n,Du()},stop:function(){this._call&&(this._call=null,this._time=1/0,Du())}};function rd(t,e,n){var i=new xl;return i.restart(t,e,n),i}function wE(){sd(),++Cr;for(var t=_l,e;t;)(e=Gs-t._time)>=0&&t._call.call(void 0,e),t=t._next;--Cr}function sp(){Gs=(vl=Io.now())+Ql,Cr=no=0;try{wE()}finally{Cr=0,AE(),Gs=0}}function TE(){var t=Io.now(),e=t-vl;e>L_&&(Ql-=e,vl=t)}function AE(){for(var t,e=_l,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:_l=n);io=t,Du(i)}function Du(t){if(!Cr){no&&(no=clearTimeout(no));var e=t-Gs;e>24?(t<1/0&&(no=setTimeout(sp,t-Io.now()-Ql)),$r&&($r=clearInterval($r))):($r||(vl=Io.now(),$r=setInterval(TE,L_)),Cr=1,D_(sp))}}function rp(t,e,n){var i=new xl;return e=e==null?0:+e,i.restart(s=>{i.stop(),t(s+e)},e,n),i}var CE=Zl("start","end","cancel","interrupt"),RE=[],I_=0,op=1,Iu=2,Xa=3,ap=4,Nu=5,qa=6;function ec(t,e,n,i,s,r){var o=t.__transition;if(!o)t.__transition={};else if(n in o)return;PE(t,n,{name:e,index:i,group:s,on:CE,tween:RE,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:I_})}function od(t,e){var n=Jn(t,e);if(n.state>I_)throw new Error("too late; already scheduled");return n}function Mi(t,e){var n=Jn(t,e);if(n.state>Xa)throw new Error("too late; already running");return n}function Jn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function PE(t,e,n){var i=t.__transition,s;i[e]=n,n.timer=rd(r,0,n.time);function r(c){n.state=op,n.timer.restart(o,n.delay,n.time),n.delay<=c&&o(c-n.delay)}function o(c){var u,d,f,h;if(n.state!==op)return l();for(u in i)if(h=i[u],h.name===n.name){if(h.state===Xa)return rp(o);h.state===ap?(h.state=qa,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[u]):+u<e&&(h.state=qa,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[u])}if(rp(function(){n.state===Xa&&(n.state=ap,n.timer.restart(a,n.delay,n.time),a(c))}),n.state=Iu,n.on.call("start",t,t.__data__,n.index,n.group),n.state===Iu){for(n.state=Xa,s=new Array(f=n.tween.length),u=0,d=-1;u<f;++u)(h=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(s[++d]=h);s.length=d+1}}function a(c){for(var u=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=Nu,1),d=-1,f=s.length;++d<f;)s[d].call(t,u);n.state===Nu&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=qa,n.timer.stop(),delete i[e];for(var c in i)return;delete t.__transition}}function LE(t,e){var n=t.__transition,i,s,r=!0,o;if(n){e=e==null?null:e+"";for(o in n){if((i=n[o]).name!==e){r=!1;continue}s=i.state>Iu&&i.state<Nu,i.state=qa,i.timer.stop(),i.on.call(s?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[o]}r&&delete t.__transition}}function DE(t){return this.each(function(){LE(this,t)})}function IE(t,e){var n,i;return function(){var s=Mi(this,t),r=s.tween;if(r!==n){i=n=r;for(var o=0,a=i.length;o<a;++o)if(i[o].name===e){i=i.slice(),i.splice(o,1);break}}s.tween=i}}function NE(t,e,n){var i,s;if(typeof n!="function")throw new Error;return function(){var r=Mi(this,t),o=r.tween;if(o!==i){s=(i=o).slice();for(var a={name:e,value:n},l=0,c=s.length;l<c;++l)if(s[l].name===e){s[l]=a;break}l===c&&s.push(a)}r.tween=s}}function UE(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=Jn(this.node(),n).tween,s=0,r=i.length,o;s<r;++s)if((o=i[s]).name===t)return o.value;return null}return this.each((e==null?IE:NE)(n,t,e))}function ad(t,e,n){var i=t._id;return t.each(function(){var s=Mi(this,i);(s.value||(s.value={}))[e]=n.apply(this,arguments)}),function(s){return Jn(s,i).value[e]}}function N_(t,e){var n;return(typeof e=="number"?os:e instanceof Do?np:(n=Do(e))?(e=n,np):xE)(t,e)}function FE(t){return function(){this.removeAttribute(t)}}function OE(t){return function(){this.removeAttributeNS(t.space,t.local)}}function BE(t,e,n){var i,s=n+"",r;return function(){var o=this.getAttribute(t);return o===s?null:o===i?r:r=e(i=o,n)}}function kE(t,e,n){var i,s=n+"",r;return function(){var o=this.getAttributeNS(t.space,t.local);return o===s?null:o===i?r:r=e(i=o,n)}}function zE(t,e,n){var i,s,r;return function(){var o,a=n(this),l;return a==null?void this.removeAttribute(t):(o=this.getAttribute(t),l=a+"",o===l?null:o===i&&l===s?r:(s=l,r=e(i=o,a)))}}function VE(t,e,n){var i,s,r;return function(){var o,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),l=a+"",o===l?null:o===i&&l===s?r:(s=l,r=e(i=o,a)))}}function HE(t,e){var n=Jl(t),i=n==="transform"?bE:N_;return this.attrTween(t,typeof e=="function"?(n.local?VE:zE)(n,i,ad(this,"attr."+t,e)):e==null?(n.local?OE:FE)(n):(n.local?kE:BE)(n,i,e))}function GE(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function WE(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function $E(t,e){var n,i;function s(){var r=e.apply(this,arguments);return r!==i&&(n=(i=r)&&WE(t,r)),n}return s._value=e,s}function XE(t,e){var n,i;function s(){var r=e.apply(this,arguments);return r!==i&&(n=(i=r)&&GE(t,r)),n}return s._value=e,s}function qE(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=Jl(t);return this.tween(n,(i.local?$E:XE)(i,e))}function YE(t,e){return function(){od(this,t).delay=+e.apply(this,arguments)}}function jE(t,e){return e=+e,function(){od(this,t).delay=e}}function KE(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?YE:jE)(e,t)):Jn(this.node(),e).delay}function ZE(t,e){return function(){Mi(this,t).duration=+e.apply(this,arguments)}}function JE(t,e){return e=+e,function(){Mi(this,t).duration=e}}function QE(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?ZE:JE)(e,t)):Jn(this.node(),e).duration}function e1(t,e){if(typeof e!="function")throw new Error;return function(){Mi(this,t).ease=e}}function t1(t){var e=this._id;return arguments.length?this.each(e1(e,t)):Jn(this.node(),e).ease}function n1(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;Mi(this,t).ease=n}}function i1(t){if(typeof t!="function")throw new Error;return this.each(n1(this._id,t))}function s1(t){typeof t!="function"&&(t=p_(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=[],l,c=0;c<o;++c)(l=r[c])&&t.call(l,l.__data__,c,r)&&a.push(l);return new Hi(i,this._parents,this._name,this._id)}function r1(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,s=n.length,r=Math.min(i,s),o=new Array(i),a=0;a<r;++a)for(var l=e[a],c=n[a],u=l.length,d=o[a]=new Array(u),f,h=0;h<u;++h)(f=l[h]||c[h])&&(d[h]=f);for(;a<i;++a)o[a]=e[a];return new Hi(o,this._parents,this._name,this._id)}function o1(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function a1(t,e,n){var i,s,r=o1(e)?od:Mi;return function(){var o=r(this,t),a=o.on;a!==i&&(s=(i=a).copy()).on(e,n),o.on=s}}function l1(t,e){var n=this._id;return arguments.length<2?Jn(this.node(),n).on.on(t):this.each(a1(n,t,e))}function c1(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function u1(){return this.on("end.remove",c1(this._id))}function f1(t){var e=this._name,n=this._id;typeof t!="function"&&(t=td(t));for(var i=this._groups,s=i.length,r=new Array(s),o=0;o<s;++o)for(var a=i[o],l=a.length,c=r[o]=new Array(l),u,d,f=0;f<l;++f)(u=a[f])&&(d=t.call(u,u.__data__,f,a))&&("__data__"in u&&(d.__data__=u.__data__),c[f]=d,ec(c[f],e,n,f,c,Jn(u,n)));return new Hi(r,this._parents,e,n)}function d1(t){var e=this._name,n=this._id;typeof t!="function"&&(t=h_(t));for(var i=this._groups,s=i.length,r=[],o=[],a=0;a<s;++a)for(var l=i[a],c=l.length,u,d=0;d<c;++d)if(u=l[d]){for(var f=t.call(u,u.__data__,d,l),h,m=Jn(u,n),_=0,p=f.length;_<p;++_)(h=f[_])&&ec(h,e,n,_,f,m);r.push(f),o.push(u)}return new Hi(r,o,e,n)}var h1=Yo.prototype.constructor;function p1(){return new h1(this._groups,this._parents)}function m1(t,e){var n,i,s;return function(){var r=Tr(this,t),o=(this.style.removeProperty(t),Tr(this,t));return r===o?null:r===n&&o===i?s:s=e(n=r,i=o)}}function U_(t){return function(){this.style.removeProperty(t)}}function g1(t,e,n){var i,s=n+"",r;return function(){var o=Tr(this,t);return o===s?null:o===i?r:r=e(i=o,n)}}function _1(t,e,n){var i,s,r;return function(){var o=Tr(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),Tr(this,t))),o===l?null:o===i&&l===s?r:(s=l,r=e(i=o,a))}}function v1(t,e){var n,i,s,r="style."+e,o="end."+r,a;return function(){var l=Mi(this,t),c=l.on,u=l.value[r]==null?a||(a=U_(e)):void 0;(c!==n||s!==u)&&(i=(n=c).copy()).on(o,s=u),l.on=i}}function x1(t,e,n){var i=(t+="")=="transform"?ME:N_;return e==null?this.styleTween(t,m1(t,i)).on("end.style."+t,U_(t)):typeof e=="function"?this.styleTween(t,_1(t,i,ad(this,"style."+t,e))).each(v1(this._id,t)):this.styleTween(t,g1(t,i,e),n).on("end.style."+t,null)}function y1(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function S1(t,e,n){var i,s;function r(){var o=e.apply(this,arguments);return o!==s&&(i=(s=o)&&y1(t,o,n)),i}return r._value=e,r}function M1(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,S1(t,e,n??""))}function b1(t){return function(){this.textContent=t}}function E1(t){return function(){var e=t(this);this.textContent=e??""}}function w1(t){return this.tween("text",typeof t=="function"?E1(ad(this,"text",t)):b1(t==null?"":t+""))}function T1(t){return function(e){this.textContent=t.call(this,e)}}function A1(t){var e,n;function i(){var s=t.apply(this,arguments);return s!==n&&(e=(n=s)&&T1(s)),e}return i._value=t,i}function C1(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,A1(t))}function R1(){for(var t=this._name,e=this._id,n=F_(),i=this._groups,s=i.length,r=0;r<s;++r)for(var o=i[r],a=o.length,l,c=0;c<a;++c)if(l=o[c]){var u=Jn(l,e);ec(l,t,n,c,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Hi(i,this._parents,t,n)}function P1(){var t,e,n=this,i=n._id,s=n.size();return new Promise(function(r,o){var a={value:o},l={value:function(){--s===0&&r()}};n.each(function(){var c=Mi(this,i),u=c.on;u!==t&&(e=(t=u).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),c.on=e}),s===0&&r()})}var L1=0;function Hi(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function F_(){return++L1}var Ti=Yo.prototype;Hi.prototype={constructor:Hi,select:f1,selectAll:d1,selectChild:Ti.selectChild,selectChildren:Ti.selectChildren,filter:s1,merge:r1,selection:p1,transition:R1,call:Ti.call,nodes:Ti.nodes,node:Ti.node,size:Ti.size,empty:Ti.empty,each:Ti.each,on:l1,attr:HE,attrTween:qE,style:x1,styleTween:M1,text:w1,textTween:C1,remove:u1,tween:UE,delay:KE,duration:QE,ease:t1,easeVarying:i1,end:P1,[Symbol.iterator]:Ti[Symbol.iterator]};function D1(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var I1={time:null,delay:0,duration:250,ease:D1};function N1(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function U1(t){var e,n;t instanceof Hi?(e=t._id,t=t._name):(e=F_(),(n=I1).time=sd(),t=t==null?null:t+"");for(var i=this._groups,s=i.length,r=0;r<s;++r)for(var o=i[r],a=o.length,l,c=0;c<a;++c)(l=o[c])&&ec(l,t,e,c,o,n||N1(l,e));return new Hi(i,this._parents,t,e)}Yo.prototype.interrupt=DE;Yo.prototype.transition=U1;function O_(t,e){var n,i=1;t==null&&(t=0),e==null&&(e=0);function s(){var r,o=n.length,a,l=0,c=0;for(r=0;r<o;++r)a=n[r],l+=a.x,c+=a.y;for(l=(l/o-t)*i,c=(c/o-e)*i,r=0;r<o;++r)a=n[r],a.x-=l,a.y-=c}return s.initialize=function(r){n=r},s.x=function(r){return arguments.length?(t=+r,s):t},s.y=function(r){return arguments.length?(e=+r,s):e},s.strength=function(r){return arguments.length?(i=+r,s):i},s}function F1(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return B_(this.cover(e,n),e,n,t)}function B_(t,e,n,i){if(isNaN(e)||isNaN(n))return t;var s,r=t._root,o={data:i},a=t._x0,l=t._y0,c=t._x1,u=t._y1,d,f,h,m,_,p,g,x;if(!r)return t._root=o,t;for(;r.length;)if((_=e>=(d=(a+c)/2))?a=d:c=d,(p=n>=(f=(l+u)/2))?l=f:u=f,s=r,!(r=r[g=p<<1|_]))return s[g]=o,t;if(h=+t._x.call(null,r.data),m=+t._y.call(null,r.data),e===h&&n===m)return o.next=r,s?s[g]=o:t._root=o,t;do s=s?s[g]=new Array(4):t._root=new Array(4),(_=e>=(d=(a+c)/2))?a=d:c=d,(p=n>=(f=(l+u)/2))?l=f:u=f;while((g=p<<1|_)===(x=(m>=f)<<1|h>=d));return s[x]=r,s[g]=o,t}function O1(t){var e,n,i=t.length,s,r,o=new Array(i),a=new Array(i),l=1/0,c=1/0,u=-1/0,d=-1/0;for(n=0;n<i;++n)isNaN(s=+this._x.call(null,e=t[n]))||isNaN(r=+this._y.call(null,e))||(o[n]=s,a[n]=r,s<l&&(l=s),s>u&&(u=s),r<c&&(c=r),r>d&&(d=r));if(l>u||c>d)return this;for(this.cover(l,c).cover(u,d),n=0;n<i;++n)B_(this,o[n],a[n],t[n]);return this}function B1(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,i=this._y0,s=this._x1,r=this._y1;if(isNaN(n))s=(n=Math.floor(t))+1,r=(i=Math.floor(e))+1;else{for(var o=s-n||1,a=this._root,l,c;n>t||t>=s||i>e||e>=r;)switch(c=(e<i)<<1|t<n,l=new Array(4),l[c]=a,a=l,o*=2,c){case 0:s=n+o,r=i+o;break;case 1:n=s-o,r=i+o;break;case 2:s=n+o,i=r-o;break;case 3:n=s-o,i=r-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=n,this._y0=i,this._x1=s,this._y1=r,this}function k1(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function z1(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function cn(t,e,n,i,s){this.node=t,this.x0=e,this.y0=n,this.x1=i,this.y1=s}function V1(t,e,n){var i,s=this._x0,r=this._y0,o,a,l,c,u=this._x1,d=this._y1,f=[],h=this._root,m,_;for(h&&f.push(new cn(h,s,r,u,d)),n==null?n=1/0:(s=t-n,r=e-n,u=t+n,d=e+n,n*=n);m=f.pop();)if(!(!(h=m.node)||(o=m.x0)>u||(a=m.y0)>d||(l=m.x1)<s||(c=m.y1)<r))if(h.length){var p=(o+l)/2,g=(a+c)/2;f.push(new cn(h[3],p,g,l,c),new cn(h[2],o,g,p,c),new cn(h[1],p,a,l,g),new cn(h[0],o,a,p,g)),(_=(e>=g)<<1|t>=p)&&(m=f[f.length-1],f[f.length-1]=f[f.length-1-_],f[f.length-1-_]=m)}else{var x=t-+this._x.call(null,h.data),E=e-+this._y.call(null,h.data),y=x*x+E*E;if(y<n){var T=Math.sqrt(n=y);s=t-T,r=e-T,u=t+T,d=e+T,i=h.data}}return i}function H1(t){if(isNaN(u=+this._x.call(null,t))||isNaN(d=+this._y.call(null,t)))return this;var e,n=this._root,i,s,r,o=this._x0,a=this._y0,l=this._x1,c=this._y1,u,d,f,h,m,_,p,g;if(!n)return this;if(n.length)for(;;){if((m=u>=(f=(o+l)/2))?o=f:l=f,(_=d>=(h=(a+c)/2))?a=h:c=h,e=n,!(n=n[p=_<<1|m]))return this;if(!n.length)break;(e[p+1&3]||e[p+2&3]||e[p+3&3])&&(i=e,g=p)}for(;n.data!==t;)if(s=n,!(n=n.next))return this;return(r=n.next)&&delete n.next,s?(r?s.next=r:delete s.next,this):e?(r?e[p]=r:delete e[p],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(i?i[g]=n:this._root=n),this):(this._root=r,this)}function G1(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function W1(){return this._root}function $1(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function X1(t){var e=[],n,i=this._root,s,r,o,a,l;for(i&&e.push(new cn(i,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(i=n.node,r=n.x0,o=n.y0,a=n.x1,l=n.y1)&&i.length){var c=(r+a)/2,u=(o+l)/2;(s=i[3])&&e.push(new cn(s,c,u,a,l)),(s=i[2])&&e.push(new cn(s,r,u,c,l)),(s=i[1])&&e.push(new cn(s,c,o,a,u)),(s=i[0])&&e.push(new cn(s,r,o,c,u))}return this}function q1(t){var e=[],n=[],i;for(this._root&&e.push(new cn(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var s=i.node;if(s.length){var r,o=i.x0,a=i.y0,l=i.x1,c=i.y1,u=(o+l)/2,d=(a+c)/2;(r=s[0])&&e.push(new cn(r,o,a,u,d)),(r=s[1])&&e.push(new cn(r,u,a,l,d)),(r=s[2])&&e.push(new cn(r,o,d,u,c)),(r=s[3])&&e.push(new cn(r,u,d,l,c))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.y0,i.x1,i.y1);return this}function Y1(t){return t[0]}function j1(t){return arguments.length?(this._x=t,this):this._x}function K1(t){return t[1]}function Z1(t){return arguments.length?(this._y=t,this):this._y}function ld(t,e,n){var i=new cd(e??Y1,n??K1,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function cd(t,e,n,i,s,r){this._x=t,this._y=e,this._x0=n,this._y0=i,this._x1=s,this._y1=r,this._root=void 0}function lp(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var hn=ld.prototype=cd.prototype;hn.copy=function(){var t=new cd(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=lp(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var s=0;s<4;++s)(i=e.source[s])&&(i.length?n.push({source:i,target:e.target[s]=new Array(4)}):e.target[s]=lp(i));return t};hn.add=F1;hn.addAll=O1;hn.cover=B1;hn.data=k1;hn.extent=z1;hn.find=V1;hn.remove=H1;hn.removeAll=G1;hn.root=W1;hn.size=$1;hn.visit=X1;hn.visitAfter=q1;hn.x=j1;hn.y=Z1;function zs(t){return function(){return t}}function ls(t){return(t()-.5)*1e-6}function J1(t){return t.x+t.vx}function Q1(t){return t.y+t.vy}function k_(t){var e,n,i,s=1,r=1;typeof t!="function"&&(t=zs(t==null?1:+t));function o(){for(var c,u=e.length,d,f,h,m,_,p,g=0;g<r;++g)for(d=ld(e,J1,Q1).visitAfter(a),c=0;c<u;++c)f=e[c],_=n[f.index],p=_*_,h=f.x+f.vx,m=f.y+f.vy,d.visit(x);function x(E,y,T,C,L){var S=E.data,M=E.r,N=_+M;if(S){if(S.index>f.index){var D=h-S.x-S.vx,U=m-S.y-S.vy,V=D*D+U*U;V<N*N&&(D===0&&(D=ls(i),V+=D*D),U===0&&(U=ls(i),V+=U*U),V=(N-(V=Math.sqrt(V)))/V*s,f.vx+=(D*=V)*(N=(M*=M)/(p+M)),f.vy+=(U*=V)*N,S.vx-=D*(N=1-N),S.vy-=U*N)}return}return y>h+N||C<h-N||T>m+N||L<m-N}}function a(c){if(c.data)return c.r=n[c.data.index];for(var u=c.r=0;u<4;++u)c[u]&&c[u].r>c.r&&(c.r=c[u].r)}function l(){if(e){var c,u=e.length,d;for(n=new Array(u),c=0;c<u;++c)d=e[c],n[d.index]=+t(d,c,e)}}return o.initialize=function(c,u){e=c,i=u,l()},o.iterations=function(c){return arguments.length?(r=+c,o):r},o.strength=function(c){return arguments.length?(s=+c,o):s},o.radius=function(c){return arguments.length?(t=typeof c=="function"?c:zs(+c),l(),o):t},o}function ew(t){return t.index}function cp(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}function z_(t){var e=ew,n=d,i,s=zs(30),r,o,a,l,c,u=1;t==null&&(t=[]);function d(p){return 1/Math.min(a[p.source.index],a[p.target.index])}function f(p){for(var g=0,x=t.length;g<u;++g)for(var E=0,y,T,C,L,S,M,N;E<x;++E)y=t[E],T=y.source,C=y.target,L=C.x+C.vx-T.x-T.vx||ls(c),S=C.y+C.vy-T.y-T.vy||ls(c),M=Math.sqrt(L*L+S*S),M=(M-r[E])/M*p*i[E],L*=M,S*=M,C.vx-=L*(N=l[E]),C.vy-=S*N,T.vx+=L*(N=1-N),T.vy+=S*N}function h(){if(o){var p,g=o.length,x=t.length,E=new Map(o.map((T,C)=>[e(T,C,o),T])),y;for(p=0,a=new Array(g);p<x;++p)y=t[p],y.index=p,typeof y.source!="object"&&(y.source=cp(E,y.source)),typeof y.target!="object"&&(y.target=cp(E,y.target)),a[y.source.index]=(a[y.source.index]||0)+1,a[y.target.index]=(a[y.target.index]||0)+1;for(p=0,l=new Array(x);p<x;++p)y=t[p],l[p]=a[y.source.index]/(a[y.source.index]+a[y.target.index]);i=new Array(x),m(),r=new Array(x),_()}}function m(){if(o)for(var p=0,g=t.length;p<g;++p)i[p]=+n(t[p],p,t)}function _(){if(o)for(var p=0,g=t.length;p<g;++p)r[p]=+s(t[p],p,t)}return f.initialize=function(p,g){o=p,c=g,h()},f.links=function(p){return arguments.length?(t=p,h(),f):t},f.id=function(p){return arguments.length?(e=p,f):e},f.iterations=function(p){return arguments.length?(u=+p,f):u},f.strength=function(p){return arguments.length?(n=typeof p=="function"?p:zs(+p),m(),f):n},f.distance=function(p){return arguments.length?(s=typeof p=="function"?p:zs(+p),_(),f):s},f}const tw=1664525,nw=1013904223,up=4294967296;function iw(){let t=1;return()=>(t=(tw*t+nw)%up)/up}function sw(t){return t.x}function rw(t){return t.y}var ow=10,aw=Math.PI*(3-Math.sqrt(5));function V_(t){var e,n=1,i=.001,s=1-Math.pow(i,1/300),r=0,o=.6,a=new Map,l=rd(d),c=Zl("tick","end"),u=iw();t==null&&(t=[]);function d(){f(),c.call("tick",e),n<i&&(l.stop(),c.call("end",e))}function f(_){var p,g=t.length,x;_===void 0&&(_=1);for(var E=0;E<_;++E)for(n+=(r-n)*s,a.forEach(function(y){y(n)}),p=0;p<g;++p)x=t[p],x.fx==null?x.x+=x.vx*=o:(x.x=x.fx,x.vx=0),x.fy==null?x.y+=x.vy*=o:(x.y=x.fy,x.vy=0);return e}function h(){for(var _=0,p=t.length,g;_<p;++_){if(g=t[_],g.index=_,g.fx!=null&&(g.x=g.fx),g.fy!=null&&(g.y=g.fy),isNaN(g.x)||isNaN(g.y)){var x=ow*Math.sqrt(.5+_),E=_*aw;g.x=x*Math.cos(E),g.y=x*Math.sin(E)}(isNaN(g.vx)||isNaN(g.vy))&&(g.vx=g.vy=0)}}function m(_){return _.initialize&&_.initialize(t,u),_}return h(),e={tick:f,restart:function(){return l.restart(d),e},stop:function(){return l.stop(),e},nodes:function(_){return arguments.length?(t=_,h(),a.forEach(m),e):t},alpha:function(_){return arguments.length?(n=+_,e):n},alphaMin:function(_){return arguments.length?(i=+_,e):i},alphaDecay:function(_){return arguments.length?(s=+_,e):+s},alphaTarget:function(_){return arguments.length?(r=+_,e):r},velocityDecay:function(_){return arguments.length?(o=1-_,e):1-o},randomSource:function(_){return arguments.length?(u=_,a.forEach(m),e):u},force:function(_,p){return arguments.length>1?(p==null?a.delete(_):a.set(_,m(p)),e):a.get(_)},find:function(_,p,g){var x=0,E=t.length,y,T,C,L,S;for(g==null?g=1/0:g*=g,x=0;x<E;++x)L=t[x],y=_-L.x,T=p-L.y,C=y*y+T*T,C<g&&(S=L,g=C);return S},on:function(_,p){return arguments.length>1?(c.on(_,p),e):c.on(_)}}}function H_(){var t,e,n,i,s=zs(-30),r,o=1,a=1/0,l=.81;function c(h){var m,_=t.length,p=ld(t,sw,rw).visitAfter(d);for(i=h,m=0;m<_;++m)e=t[m],p.visit(f)}function u(){if(t){var h,m=t.length,_;for(r=new Array(m),h=0;h<m;++h)_=t[h],r[_.index]=+s(_,h,t)}}function d(h){var m=0,_,p,g=0,x,E,y;if(h.length){for(x=E=y=0;y<4;++y)(_=h[y])&&(p=Math.abs(_.value))&&(m+=_.value,g+=p,x+=p*_.x,E+=p*_.y);h.x=x/g,h.y=E/g}else{_=h,_.x=_.data.x,_.y=_.data.y;do m+=r[_.data.index];while(_=_.next)}h.value=m}function f(h,m,_,p){if(!h.value)return!0;var g=h.x-e.x,x=h.y-e.y,E=p-m,y=g*g+x*x;if(E*E/l<y)return y<a&&(g===0&&(g=ls(n),y+=g*g),x===0&&(x=ls(n),y+=x*x),y<o&&(y=Math.sqrt(o*y)),e.vx+=g*h.value*i/y,e.vy+=x*h.value*i/y),!0;if(h.length||y>=a)return;(h.data!==e||h.next)&&(g===0&&(g=ls(n),y+=g*g),x===0&&(x=ls(n),y+=x*x),y<o&&(y=Math.sqrt(o*y)));do h.data!==e&&(E=r[h.data.index]*i/y,e.vx+=g*E,e.vy+=x*E);while(h=h.next)}return c.initialize=function(h,m){t=h,n=m,u()},c.strength=function(h){return arguments.length?(s=typeof h=="function"?h:zs(+h),u(),c):s},c.distanceMin=function(h){return arguments.length?(o=h*h,c):Math.sqrt(o)},c.distanceMax=function(h){return arguments.length?(a=h*h,c):Math.sqrt(a)},c.theta=function(h){return arguments.length?(l=h*h,c):Math.sqrt(l)},c}function lw(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}const fp=Symbol("implicit");function G_(){var t=new Gh,e=[],n=[],i=fp;function s(r){let o=t.get(r);if(o===void 0){if(i!==fp)return i;t.set(r,o=e.push(r)-1)}return n[o%n.length]}return s.domain=function(r){if(!arguments.length)return e.slice();e=[],t=new Gh;for(const o of r)t.has(o)||t.set(o,e.push(o)-1);return s},s.range=function(r){return arguments.length?(n=Array.from(r),s):n.slice()},s.unknown=function(r){return arguments.length?(i=r,s):i},s.copy=function(){return G_(e,n).unknown(i)},lw.apply(s,arguments),s}function so(t,e,n){this.k=t,this.x=e,this.y=n}so.prototype={constructor:so,scale:function(t){return t===1?this:new so(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new so(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};so.prototype;const cw={class:"memory-graph"},uw={key:0,class:"loading-overlay"},fw={key:1,class:"empty-placeholder"},dw=vn({__name:"MemoryGraph",props:{graphData:{},isLoading:{type:Boolean}},emits:["nodeClick"],setup(t,{emit:e}){const n=t,i=e,s=Te();let r=null,o=null;const a=G_().domain(["storage","thinking","skill","entity","category"]).range(["#00ff41","#ff00ff","#00ffff","#ffff00","#ff6b6b"]);Kn(()=>{s.value&&l()}),qn(()=>n.graphData,h=>{h.nodes.length>0&&c(h)},{deep:!0}),$s(()=>{r&&r.stop()});function l(){if(!s.value)return;const h=s.value.clientWidth,m=s.value.clientHeight;o=Ar(s.value).append("svg").attr("width",h).attr("height",m),o.append("defs").append("marker").attr("id","arrowhead").attr("viewBox","-0 -5 10 10").attr("refX",20).attr("refY",0).attr("orient","auto").attr("markerWidth",6).attr("markerHeight",6).append("path").attr("d","M 0,-5 L 10,0 L 0,5").attr("fill","#00ff41")}function c(h){if(!o||!s.value)return;const m=s.value.clientWidth,_=s.value.clientHeight;o.selectAll("*").remove(),r=V_(h.nodes).force("link",z_(h.links).id(x=>x.id).distance(100)).force("charge",H_().strength(-300)).force("center",O_(m/2,_/2)).force("collision",k_().radius(30));const p=o.append("g").selectAll("line").data(h.links).enter().append("line").attr("stroke","#00ff41").attr("stroke-opacity",.6).attr("stroke-width",1.5),g=o.append("g").selectAll("circle").data(h.nodes).enter().append("circle").attr("r",8).attr("fill",x=>a(x.type)||"#00ff41").attr("stroke","#fff").attr("stroke-width",2).style("cursor","pointer").call(E_().on("start",u).on("drag",d).on("end",f)).on("click",(x,E)=>{i("nodeClick",E)});g.append("title").text(x=>x.label||x.id),r.on("tick",()=>{p.attr("x1",x=>x.source.x).attr("y1",x=>x.source.y).attr("x2",x=>x.target.x).attr("y2",x=>x.target.y),g.attr("cx",x=>x.x).attr("cy",x=>x.y)})}function u(h){!h.active&&r&&r.alphaTarget(.3).restart(),h.subject.fx=h.subject.x(h.subject).fy=h.subject.y}function d(h){h.subject.fx=h.x,h.subject.fy=h.y}function f(h){!h.active&&r&&r.alphaTarget(0),h.subject.fx=null,h.subject.fy=null}return(h,m)=>(de(),pe("div",cw,[v("div",{ref_key:"containerRef",ref:s,class:"graph-container"},null,512),t.isLoading?(de(),pe("div",uw,[...m[0]||(m[0]=[v("div",{class:"loading-spinner"},null,-1),v("p",null,"加载图谱中...",-1)])])):it("",!0),!t.isLoading&&t.graphData.nodes.length===0?(de(),pe("div",fw,[...m[1]||(m[1]=[v("h2",null,"暂无认知数据",-1),v("p",null,"当前记忆库尚未经过认知分析，图谱暂时无法显示。",-1)])])):it("",!0)]))}}),xn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},hw=xn(dw,[["__scopeId","data-v-b5be093d"]]),pw={class:"modal-body"},mw={class:"form-group"},gw={class:"form-group"},_w={class:"form-group"},vw={class:"form-row"},xw={class:"form-group"},yw={class:"form-group"},Sw={class:"form-actions"},Mw=["disabled"],bw=vn({__name:"MemoryEditor",props:{visible:{type:Boolean},memory:{}},emits:["close","saved","deleted"],setup(t,{emit:e}){const n=t,i=e,s=qi(),r=Te(!1),o=Te({title:"",content:"",scope:"project",memory_type:"storage",keywords:[]}),a=St({get:()=>o.value.keywords.join(", "),set:d=>{o.value.keywords=d.split(",").map(f=>f.trim()).filter(f=>f)}});qn(()=>n.memory,d=>{d&&(o.value={title:d.title||"",content:d.content||"",scope:d.scope||"project",memory_type:d.memory_type||"storage",keywords:d.keywords||[]})},{immediate:!0});function l(){i("close")}async function c(){if(n.memory){r.value=!0;try{await s.updateMemory(n.memory.id,o.value.content),s.addLog("记忆已更新","success"),i("saved"),l()}catch(d){s.addLog("更新失败: "+d.message,"error")}finally{r.value=!1}}}async function u(){if(n.memory&&confirm("确定要删除这条记忆吗？此操作不可撤销。"))try{await s.deleteMemory(n.memory.id),s.addLog("记忆已删除","success"),i("deleted",n.memory.id),l()}catch(d){s.addLog("删除失败: "+d.message,"error")}}return(d,f)=>t.visible?(de(),pe("div",{key:0,class:"memory-editor-modal",onClick:l},[v("div",{class:"modal-content",onClick:f[5]||(f[5]=dl(()=>{},["stop"]))},[v("div",{class:"modal-header"},[f[6]||(f[6]=v("h2",null,"编辑记忆",-1)),v("button",{class:"close-btn",onClick:l},"×")]),v("div",pw,[v("div",mw,[f[7]||(f[7]=v("label",null,"标题",-1)),Gt(v("input",{"onUpdate:modelValue":f[0]||(f[0]=h=>o.value.title=h),type:"text",placeholder:"记忆标题"},null,512),[[wn,o.value.title]])]),v("div",gw,[f[8]||(f[8]=v("label",null,"内容",-1)),Gt(v("textarea",{"onUpdate:modelValue":f[1]||(f[1]=h=>o.value.content=h),rows:"10",placeholder:"记忆内容"},null,512),[[wn,o.value.content]])]),v("div",_w,[f[9]||(f[9]=v("label",null,"关键词（用逗号分隔）",-1)),Gt(v("input",{"onUpdate:modelValue":f[2]||(f[2]=h=>a.value=h),type:"text",placeholder:"关键词1, 关键词2, ..."},null,512),[[wn,a.value]])]),v("div",vw,[v("div",xw,[f[11]||(f[11]=v("label",null,"作用域",-1)),Gt(v("select",{"onUpdate:modelValue":f[3]||(f[3]=h=>o.value.scope=h)},[...f[10]||(f[10]=[v("option",{value:"project"},"项目",-1),v("option",{value:"global"},"全局",-1)])],512),[[xo,o.value.scope]])]),v("div",yw,[f[13]||(f[13]=v("label",null,"记忆类型",-1)),Gt(v("select",{"onUpdate:modelValue":f[4]||(f[4]=h=>o.value.memory_type=h)},[...f[12]||(f[12]=[v("option",{value:"storage"},"存储记忆",-1),v("option",{value:"thinking"},"思维记忆",-1),v("option",{value:"skill"},"技能记忆",-1)])],512),[[xo,o.value.memory_type]])])]),v("div",Sw,[v("button",{class:"btn-secondary",onClick:l},"取消"),t.memory?(de(),pe("button",{key:0,class:"btn-danger",onClick:u},"删除")):it("",!0),v("button",{class:"btn-primary",onClick:c,disabled:r.value},ne(r.value?"保存中...":"保存"),9,Mw)])])])])):it("",!0)}}),W_=xn(bw,[["__scopeId","data-v-05d49056"]]);function Ew(t,e=300){let n;return(...i)=>{clearTimeout(n),n=setTimeout(()=>t(...i),e)}}const ww={class:"memory-list-panel panel"},Tw={class:"tiered-stats"},Aw={class:"stat-label"},Cw={class:"stat-value"},Rw={class:"memory-type-tabs"},Pw=["onClick"],Lw={class:"memory-search-box"},Dw={key:0,class:"memory-list"},Iw={key:0,class:"memory-item-placeholder"},Nw=["onClick"],Uw={class:"memory-header"},Fw={class:"memory-time"},Ow={class:"memory-title"},Bw={class:"memory-content-preview"},kw={key:0,class:"memory-keywords"},zw={key:1,class:"memory-item-placeholder"},Vw={key:2,class:"pagination"},Hw=["disabled"],Gw={class:"page-info"},Ww=["disabled"],$w={class:"modal-card detail-card"},Xw={class:"detail-body"},qw={class:"detail-row"},Yw={class:"detail-value mono"},jw={class:"detail-row"},Kw={class:"detail-value"},Zw={class:"detail-row"},Jw={class:"detail-value"},Qw={key:0,class:"detail-row"},eT={class:"detail-value"},tT={class:"detail-row"},nT={class:"detail-value"},iT={class:"detail-content"},sT={class:"modal-card confirm-card"},rT={class:"confirm-actions"},oT=["disabled"],ua=50,aT=vn({__name:"MemoryList",emits:["memorySelect"],setup(t,{emit:e}){const n=e,i=ed(),s=qi(),{memories:r,memoryCountByType:o,isLoading:a}=Nr(s),l=St(()=>s.currentMemoryType),c=Te(""),u=Te(1),d=Te(null),f=Te(null),h=Te(!1),m=Te(!1),_=Te(null),p=Te(!1),g=Te(!1),x=[["技能","skill"],["思维","thinking"],["存储","storage"],["总计","total"]],E=[{label:"全部",value:"all"},{label:"技能",value:"skill"},{label:"思维",value:"thinking"},{label:"存储",value:"storage"}],y=St(()=>o.value),T=St(()=>{let ie=r.value;l.value!=="all"&&(ie=ie.filter(Ue=>Ue.memory_type===l.value));const ae=c.value.trim().toLowerCase();return ae&&(ie=ie.filter(Ue=>{var ze,te,se;return((ze=Ue.content)==null?void 0:ze.toLowerCase().includes(ae))||((te=Ue.title)==null?void 0:te.toLowerCase().includes(ae))||((se=Ue.keywords)==null?void 0:se.some(_e=>_e.toLowerCase().includes(ae)))})),ie}),C=St(()=>{const ie=(u.value-1)*ua;return T.value.slice(ie,ie+ua)}),L=St(()=>Math.ceil(T.value.length/ua));qn([()=>l.value,T],()=>{u.value=1});const S=Ew(()=>{u.value=1},300);Kn(N),$s(()=>{document.removeEventListener("keydown",M)});function M(ie){ie.key==="Escape"&&(p.value?p.value=!1:m.value?B():h.value&&V())}qn([h,m,p],ie=>{const ae=Object.values(ie).some(Boolean);document[`${ae?"add":"remove"}EventListener`]("keydown",M)},{immediate:!0});async function N(){try{const ie=await Nn.searchMemories("",1e3);r.value=ie.items.map(ae=>({id:ae.memory_id||ae.id,content:ae.content,title:ae.title,memory_type:ae.memory_type||"storage",keywords:ae.keywords||[],tags:ae.tags||[],timestamp:ae.timestamp,scope:ae.scope,user_id:ae.user_id,importance:ae.importance||.5}))}catch{i.error("加载记忆失败")}}function D(ie){s.setMemoryType(ie)}function U(ie){d.value=ie.id,f.value=ie,h.value=!0,n("memorySelect",ie)}function V(){h.value=!1,f.value=null,d.value=null}function $(){f.value&&(_.value={...f.value},m.value=!0,h.value=!1)}function B(){m.value=!1,_.value=null}async function w(){m.value=!1,_.value=null,i.success("记忆已更新"),await N()}async function A(ie){m.value=!1,_.value=null,V(),i.success("记忆已删除"),await N()}function O(){p.value=!0}async function X(){if(f.value){g.value=!0;try{await s.deleteMemory(f.value.id,f.value.user_id||"default"),p.value=!1,V(),await N()}catch{i.error("删除失败")}finally{g.value=!1}}}function oe(ie){return{storage:"存储",thinking:"思维",skill:"技能"}[ie||""]||ie||"未知"}function he(ie){if(!ie)return"";const ae=Date.now()-new Date(ie).getTime(),Ue=Math.floor(ae/6e4),ze=Math.floor(ae/36e5),te=Math.floor(ae/864e5);return Ue<1?"刚刚":Ue<60?`${Ue}分钟前`:ze<24?`${ze}小时前`:te<30?`${te}天前`:new Date(ie).toLocaleDateString()}return(ie,ae)=>{var Ue,ze,te;return de(),pe("div",ww,[ae[19]||(ae[19]=v("h1",null,"记忆列表",-1)),v("div",Tw,[(de(),pe(at,null,It(x,(se,_e)=>v("div",{class:"stat-item",key:_e},[v("span",Aw,ne(se),1),v("span",Cw,ne(y.value[_e]??0),1)])),64))]),v("div",Rw,[(de(),pe(at,null,It(E,se=>v("button",{key:se.value,class:ht(["memory-tab",{active:l.value===se.value}]),onClick:_e=>D(se.value)},ne(se.label),11,Pw)),64))]),v("div",Lw,[Gt(v("input",{"onUpdate:modelValue":ae[0]||(ae[0]=se=>c.value=se),type:"text",placeholder:"搜索记忆...",onKeyup:ae[1]||(ae[1]=qf((...se)=>Me(S)&&Me(S)(...se),["enter"]))},null,544),[[wn,c.value]]),v("button",{onClick:ae[2]||(ae[2]=(...se)=>Me(S)&&Me(S)(...se))},"🔍")]),Me(a)?(de(),pe("div",zw,[...ae[8]||(ae[8]=[v("div",{class:"loading-spinner"},null,-1),us(" 加载中... ",-1)])])):(de(),pe("div",Dw,[C.value.length===0?(de(),pe("div",Iw,[...ae[7]||(ae[7]=[v("div",{class:"empty-icon"},"🧠",-1),v("p",null,"暂无记忆",-1),v("span",{class:"empty-hint"},"写入新记忆来激活认知系统",-1)])])):(de(),_r(Bg,{key:1,name:"list",tag:"div"},{default:fo(()=>[(de(!0),pe(at,null,It(C.value,se=>{var _e,Ye,Be;return de(),pe("div",{key:se.id,class:ht(["memory-item",[se.memory_type,{selected:d.value===se.id}]]),onClick:$e=>U(se)},[v("div",Uw,[v("span",{class:ht(["memory-type-badge",se.memory_type])},ne(oe(se.memory_type)),3),v("span",Fw,ne(he(se.timestamp)),1)]),v("div",Ow,ne(se.title||((_e=se.content)==null?void 0:_e.slice(0,50))+"..."),1),v("div",Bw,ne((Ye=se.content)==null?void 0:Ye.slice(0,80))+"...",1),(Be=se.keywords)!=null&&Be.length?(de(),pe("div",kw,[(de(!0),pe(at,null,It(se.keywords.slice(0,3),$e=>(de(),pe("span",{key:$e,class:"keyword-tag"},ne($e),1))),128))])):it("",!0)],10,Nw)}),128))]),_:1}))])),L.value>1?(de(),pe("div",Vw,[v("button",{class:"page-btn",disabled:u.value===1,onClick:ae[3]||(ae[3]=se=>u.value--)},"←",8,Hw),v("span",Gw,ne(u.value)+" / "+ne(L.value),1),v("button",{class:"page-btn",disabled:u.value===L.value,onClick:ae[4]||(ae[4]=se=>u.value++)},"→",8,Ww),v("span",{class:"page-size"},"每页 "+ne(ua)+" 条")])):it("",!0),(de(),_r(Qm,{to:"body"},[h.value&&f.value?(de(),pe("div",{key:0,class:"modal-overlay",onClick:dl(V,["self"])},[v("div",$w,[v("div",{class:"detail-header"},[ae[9]||(ae[9]=v("h3",null,"记忆详情",-1)),v("div",{class:"header-actions"},[v("button",{class:"icon-btn edit-btn",title:"编辑",onClick:$},"✏️"),v("button",{class:"icon-btn delete-btn",title:"删除",onClick:O},"🗑️"),v("button",{class:"close-btn",onClick:V},"×")])]),v("div",Xw,[v("div",qw,[ae[10]||(ae[10]=v("span",{class:"detail-label"},"ID",-1)),v("span",Yw,ne(f.value.id),1)]),v("div",jw,[ae[11]||(ae[11]=v("span",{class:"detail-label"},"类型",-1)),v("span",Kw,[v("span",{class:ht(["memory-type-badge",f.value.memory_type])},ne(oe(f.value.memory_type)),3)])]),v("div",Zw,[ae[12]||(ae[12]=v("span",{class:"detail-label"},"标题",-1)),v("span",Jw,ne(f.value.title||"无标题"),1)]),(Ue=f.value.keywords)!=null&&Ue.length?(de(),pe("div",Qw,[ae[13]||(ae[13]=v("span",{class:"detail-label"},"关键词",-1)),v("span",eT,[(de(!0),pe(at,null,It(f.value.keywords,se=>(de(),pe("span",{key:se,class:"keyword-tag"},ne(se),1))),128))])])):it("",!0),v("div",tT,[ae[14]||(ae[14]=v("span",{class:"detail-label"},"时间",-1)),v("span",nT,ne(he(f.value.timestamp)),1)]),v("div",iT,ne(f.value.content),1)])])])):it("",!0),m.value&&_.value?(de(),_r(W_,{key:1,visible:!0,memory:_.value,onClose:B,onSaved:w,onDeleted:A},null,8,["memory"])):it("",!0),p.value?(de(),pe("div",{key:2,class:"modal-overlay",onClick:ae[6]||(ae[6]=dl(se=>p.value=!1,["self"]))},[v("div",sT,[ae[17]||(ae[17]=v("h3",null,"⚠️ 确认删除",-1)),v("p",null,[ae[15]||(ae[15]=us("确定要删除记忆 ",-1)),v("strong",null,'"'+ne(((ze=f.value)==null?void 0:ze.title)||((te=f.value)==null?void 0:te.id))+'"',1),ae[16]||(ae[16]=us(" 吗？",-1))]),ae[18]||(ae[18]=v("p",{class:"warn-text"},"此操作不可撤销",-1)),v("div",rT,[v("button",{class:"btn-cancel",onClick:ae[5]||(ae[5]=se=>p.value=!1)},"取消"),v("button",{class:"btn-danger",onClick:X,disabled:g.value},ne(g.value?"删除中...":"确认删除"),9,oT)])])])):it("",!0)]))])}}}),lT=xn(aT,[["__scopeId","data-v-510cf480"]]),cT={class:"log-panel panel"},uT={class:"log-time"},fT={class:"log-message"},dT={key:0,class:"log-placeholder"},hT=vn({__name:"LogPanel",setup(t){const e=qi(),{logs:n}=Nr(e),i=Te();let s=null;Kn(()=>{e.fetchLogs(),s=window.setInterval(()=>{e.fetchLogs()},3e3)}),$s(()=>{s&&clearInterval(s)}),qn(n,()=>{Vo(()=>{i.value&&(i.value.scrollTop=i.value.scrollHeight)})},{deep:!0});function r(){e.clearLogs()}return(o,a)=>(de(),pe("div",cT,[v("div",{class:"log-header"},[a[0]||(a[0]=v("h3",null,"系统日志",-1)),v("button",{class:"clear-btn",onClick:r},"清空")]),v("div",{class:"log-content",ref_key:"logContentRef",ref:i},[(de(!0),pe(at,null,It(Me(n),(l,c)=>(de(),pe("div",{key:c,class:ht(["log-entry",l.type])},[v("span",uT,"["+ne(l.time)+"]",1),v("span",fT,ne(l.message),1)],2))),128)),Me(n).length===0?(de(),pe("div",dT," 暂无日志 ")):it("",!0)],512)]))}}),pT=xn(hT,[["__scopeId","data-v-7e5fe813"]]),mT={class:"stats-panel-compact"},gT={key:0,class:"stats-row"},_T={class:"stat-item"},vT={class:"stat-value"},xT={class:"stat-item"},yT={class:"stat-value"},ST={class:"stat-item"},MT={class:"stat-value"},bT={class:"stat-item"},ET={class:"stat-value"},wT={class:"stat-item"},TT={class:"stat-item"},AT={class:"stat-value provider"},CT=["title"],RT={class:"stat-value data-path"},PT={key:1,class:"stats-loading"},LT=vn({__name:"StatsPanel",setup(t){const e=qi(),{stats:n,evolutionStatus:i}=Nr(e),s=r=>{if(!r)return"未知";if(r.startsWith("/Users/")){const o=r.split("/"),a=o.indexOf("Users")+2;if(a>1&&a<o.length)return"~/"+o.slice(a).join("/")}return r.length>20?"..."+r.slice(-17):r};return(r,o)=>{var a,l,c,u,d;return de(),pe("div",mT,[Me(n)?(de(),pe("div",gT,[v("div",_T,[v("span",vT,ne(Me(n).memory_count||0),1),o[0]||(o[0]=v("span",{class:"stat-label"},"记忆",-1))]),o[7]||(o[7]=v("div",{class:"stat-divider"},null,-1)),v("div",xT,[v("span",yT,ne(((a=Me(n).tiered_breakdown)==null?void 0:a.skill)||0),1),o[1]||(o[1]=v("span",{class:"stat-label"},"技能",-1))]),v("div",ST,[v("span",MT,ne(((l=Me(n).tiered_breakdown)==null?void 0:l.thinking)||0),1),o[2]||(o[2]=v("span",{class:"stat-label"},"思维",-1))]),v("div",bT,[v("span",ET,ne(((c=Me(n).tiered_breakdown)==null?void 0:c.storage)||0),1),o[3]||(o[3]=v("span",{class:"stat-label"},"存储",-1))]),o[8]||(o[8]=v("div",{class:"stat-divider"},null,-1)),v("div",wT,[v("span",{class:ht(["stat-value","status",(u=Me(i))!=null&&u.enabled?"active":"inactive"])},ne((d=Me(i))!=null&&d.enabled?"运行中":"已停止"),3),o[4]||(o[4]=v("span",{class:"stat-label"},"进化",-1))]),v("div",TT,[v("span",AT,ne(Me(n).preferred_provider||"无"),1),o[5]||(o[5]=v("span",{class:"stat-label"},"模型",-1))]),o[9]||(o[9]=v("div",{class:"stat-divider"},null,-1)),v("div",{class:"stat-item data-path-item",title:Me(n).data_path||"未知"},[v("span",RT,ne(s(Me(n).data_path)),1),o[6]||(o[6]=v("span",{class:"stat-label"},"数据",-1))],8,CT)])):(de(),pe("div",PT," 加载中... "))])}}}),DT=xn(LT,[["__scopeId","data-v-129c8bf3"]]),Ac="default_user",$_=Yf("auth",()=>{const t=Te(Ac),e=Te(!0),n=Te({id:Ac,name:Ac}),i=St(()=>t.value);function s(a){t.value=a,n.value.id=a,n.value.name=a}function r(){const a=localStorage.getItem("mcp_memory_user_id");a&&s(a)}function o(a){localStorage.setItem("mcp_memory_user_id",a),s(a)}return r(),{currentUserId:t,isAuthenticated:e,userInfo:n,getCurrentUserId:i,setUserId:s,loadUserFromStorage:r,saveUserToStorage:o}}),IT={class:"memory-writer panel"},NT={class:"write-mode-tabs"},UT={class:"form-group"},FT={class:"form-group"},OT={key:0,class:"error-text"},BT={class:"char-count"},kT={class:"form-group"},zT={class:"form-row"},VT={class:"form-group"},HT={key:0,class:"form-group"},GT={key:1,class:"form-group"},WT={class:"form-actions"},$T=["disabled"],XT=vn({__name:"MemoryWriter",emits:["written"],setup(t,{emit:e}){const n=e,i=ed(),s=qi(),r=$_(),o=Te("normal"),a=Te(!1),l=Te({title:"",content:"",scope:"project",memory_type:"storage",content_type:"note",keywords:[]}),c=Te({content:""}),u=St({get:()=>l.value.keywords.join(", "),set:_=>{l.value.keywords=_.split(",").map(p=>p.trim()).filter(Boolean)}}),d=St(()=>l.value.content.trim().length>0&&l.value.content.length<=5e3);function f(){return c.value.content="",l.value.content.trim()?l.value.content.length>5e3?(c.value.content="内容超过 5000 字符限制",!1):!0:(c.value.content="请输入记忆内容",!1)}function h(){l.value={title:"",content:"",scope:"project",memory_type:"storage",content_type:"note",keywords:[]},c.value={content:""}}async function m(){if(f()){a.value=!0;try{const _=r.getCurrentUserId;let p;if(o.value==="normal")p=await Nn.writeMemory({content:l.value.content,user_id:_,title:l.value.title||void 0,scope:l.value.scope,keywords:l.value.keywords.length>0?l.value.keywords:void 0,content_type:l.value.content_type}),s.addLog("记忆写入成功","success");else{const g={content:l.value.content,user_id:_,title:l.value.title||void 0,keywords:l.value.keywords.length>0?l.value.keywords:void 0};l.value.memory_type==="storage"?p=await di.writeStorage(g):l.value.memory_type==="thinking"?p=await di.writeThinking(g):p=await di.writeSkill(g);const x={storage:"存储",thinking:"思维",skill:"技能"};s.addLog(`${x[l.value.memory_type]||"记忆"}写入成功`,"success")}i.success(`✅ 记忆已保存 ID: ${p.id}`),n("written",p.id),h(),await s.fetchStats()}catch(_){const p=_.message||"未知错误";i.error(`写入失败: ${p}`),s.addLog("写入失败: "+p,"error")}finally{a.value=!1}}}return(_,p)=>(de(),pe("div",IT,[p[17]||(p[17]=v("h3",null,"记忆写入",-1)),v("div",NT,[v("button",{class:ht(["mode-tab",{active:o.value==="normal"}]),onClick:p[0]||(p[0]=g=>o.value="normal")},"普通写入",2),v("button",{class:ht(["mode-tab",{active:o.value==="tiered"}]),onClick:p[1]||(p[1]=g=>o.value="tiered")},"分层写入",2)]),v("div",UT,[p[8]||(p[8]=v("label",null,"标题",-1)),Gt(v("input",{"onUpdate:modelValue":p[2]||(p[2]=g=>l.value.title=g),type:"text",placeholder:"记忆标题（可选）"},null,512),[[wn,l.value.title]])]),v("div",FT,[p[9]||(p[9]=v("label",null,[us("内容 "),v("span",{class:"required"},"*")],-1)),Gt(v("textarea",{"onUpdate:modelValue":p[3]||(p[3]=g=>l.value.content=g),rows:"6",placeholder:"输入记忆内容...",class:ht({"input-error":c.value.content})},null,2),[[wn,l.value.content]]),c.value.content?(de(),pe("span",OT,ne(c.value.content),1)):it("",!0),v("span",BT,ne(l.value.content.length)+" / 5000",1)]),v("div",kT,[p[10]||(p[10]=v("label",null,"关键词",-1)),Gt(v("input",{"onUpdate:modelValue":p[4]||(p[4]=g=>u.value=g),type:"text",placeholder:"关键词1, 关键词2, ..."},null,512),[[wn,u.value]])]),v("div",zT,[v("div",VT,[p[12]||(p[12]=v("label",null,"作用域",-1)),Gt(v("select",{"onUpdate:modelValue":p[5]||(p[5]=g=>l.value.scope=g)},[...p[11]||(p[11]=[v("option",{value:"project"},"项目",-1),v("option",{value:"global"},"全局",-1)])],512),[[xo,l.value.scope]])]),o.value==="tiered"?(de(),pe("div",HT,[p[14]||(p[14]=v("label",null,"记忆类型",-1)),Gt(v("select",{"onUpdate:modelValue":p[6]||(p[6]=g=>l.value.memory_type=g)},[...p[13]||(p[13]=[v("option",{value:"storage"},"存储记忆 💾",-1),v("option",{value:"thinking"},"思维记忆 💭",-1),v("option",{value:"skill"},"技能记忆 ⚡",-1)])],512),[[xo,l.value.memory_type]])])):it("",!0),o.value==="normal"?(de(),pe("div",GT,[p[16]||(p[16]=v("label",null,"内容类型",-1)),Gt(v("select",{"onUpdate:modelValue":p[7]||(p[7]=g=>l.value.content_type=g)},[...p[15]||(p[15]=[Ag('<option value="note" data-v-27b44d18>笔记</option><option value="task" data-v-27b44d18>任务</option><option value="summary" data-v-27b44d18>摘要</option><option value="code" data-v-27b44d18>代码</option><option value="config" data-v-27b44d18>配置</option><option value="workflow" data-v-27b44d18>工作流</option>',6)])],512),[[xo,l.value.content_type]])])):it("",!0)]),v("div",WT,[v("button",{class:"btn-reset",onClick:h},"重置"),v("button",{class:"btn-write",onClick:m,disabled:a.value||!d.value},ne(a.value?"写入中...":"✨ 写入记忆"),9,$T)])]))}}),qT=xn(XT,[["__scopeId","data-v-27b44d18"]]),YT={class:"tiered-memory-panel panel"},jT={class:"tier-tabs"},KT=["onClick"],ZT={class:"tier-icon"},JT={class:"write-section"},QT={class:"form-group"},eA={class:"form-group"},tA={class:"form-group"},nA=["disabled"],iA={class:"query-section"},sA={class:"query-form"},rA=["disabled"],oA={class:"query-results"},aA={key:0,class:"empty-placeholder"},lA=["onClick"],cA={class:"result-title"},uA={class:"result-preview"},fA={class:"result-meta"},dA={class:"result-time"},hA={class:"tier-stats"},pA={class:"stat-item"},mA={class:"stat-value"},gA={class:"stat-item"},_A={class:"stat-value"},vA={class:"stat-item"},xA={class:"stat-value"},yA=vn({__name:"TieredMemoryPanel",emits:["memorySelect"],setup(t,{emit:e}){const n=e,i=qi(),s=$_(),r=[{label:"存储记忆",value:"storage",icon:"💾"},{label:"思维记忆",value:"thinking",icon:"💭"},{label:"技能记忆",value:"skill",icon:"⚡"}],o=Te("storage"),a=Te({title:"",content:"",keywords:""}),l=Te(!1),c=Te(""),u=Te(!1),d=Te([]),f=St(()=>{var E;return((E=r.find(y=>y.value===o.value))==null?void 0:E.label)||""}),h=St(()=>i.memoryCountByType);function m(E){o.value=E,d.value=[]}async function _(){if(!a.value.content.trim()){i.addLog("请输入记忆内容","warn");return}l.value=!0;try{const E=a.value.keywords.split(",").map(T=>T.trim()).filter(T=>T),y=s.getCurrentUserId;o.value==="storage"?await di.writeStorage({content:a.value.content,user_id:y,title:a.value.title,keywords:E}):o.value==="thinking"?await di.writeThinking({content:a.value.content,user_id:y,title:a.value.title,keywords:E}):o.value==="skill"&&await di.writeSkill({content:a.value.content,user_id:y,title:a.value.title,keywords:E}),i.addLog(`${f.value}写入成功`,"success"),a.value={title:"",content:"",keywords:""},await i.fetchStats()}catch(E){i.addLog("写入失败: "+E.message,"error")}finally{l.value=!1}}async function p(){if(!c.value.trim()){i.addLog("请输入查询内容","warn");return}u.value=!0;try{const E=await di.queryMemories({query:c.value,user_id:s.getCurrentUserId,memory_type:o.value,top_k:10});d.value=E.memories||[],i.addLog(`查询到 ${d.value.length} 条记忆`,"success")}catch(E){i.addLog("查询失败: "+E.message,"error")}finally{u.value=!1}}function g(E){n("memorySelect",E)}function x(E){return new Date(E).toLocaleString("zh-CN")}return(E,y)=>(de(),pe("div",YT,[y[7]||(y[7]=v("h3",null,"三层记忆管理",-1)),v("div",jT,[(de(),pe(at,null,It(r,T=>v("button",{key:T.value,class:ht(["tier-tab",{active:o.value===T.value}]),onClick:C=>m(T.value)},[v("span",ZT,ne(T.icon),1),us(" "+ne(T.label),1)],10,KT)),64))]),v("div",JT,[v("h4",null,"写入"+ne(f.value),1),v("div",QT,[Gt(v("input",{"onUpdate:modelValue":y[0]||(y[0]=T=>a.value.title=T),type:"text",placeholder:"标题（可选）"},null,512),[[wn,a.value.title]])]),v("div",eA,[Gt(v("textarea",{"onUpdate:modelValue":y[1]||(y[1]=T=>a.value.content=T),rows:"5",placeholder:"记忆内容..."},null,512),[[wn,a.value.content]])]),v("div",tA,[Gt(v("input",{"onUpdate:modelValue":y[2]||(y[2]=T=>a.value.keywords=T),type:"text",placeholder:"关键词（逗号分隔）"},null,512),[[wn,a.value.keywords]])]),v("button",{class:"btn-write",onClick:_,disabled:l.value},ne(l.value?"写入中...":"写入记忆"),9,nA)]),v("div",iA,[v("h4",null,"查询"+ne(f.value),1),v("div",sA,[Gt(v("input",{"onUpdate:modelValue":y[3]||(y[3]=T=>c.value=T),type:"text",placeholder:"输入查询内容...",onKeyup:qf(p,["enter"])},null,544),[[wn,c.value]]),v("button",{onClick:p,disabled:u.value},ne(u.value?"查询中...":"查询"),9,rA)]),v("div",oA,[d.value.length===0?(de(),pe("div",aA," 暂无查询结果 ")):it("",!0),(de(!0),pe(at,null,It(d.value,T=>{var C;return de(),pe("div",{key:T.id,class:"result-item",onClick:L=>g(T)},[v("div",cA,ne(T.title||"无标题"),1),v("div",uA,ne((C=T.content)==null?void 0:C.substring(0,100))+"...",1),v("div",fA,[v("span",dA,ne(x(T.timestamp)),1)])],8,lA)}),128))])]),v("div",hA,[v("div",pA,[y[4]||(y[4]=v("span",{class:"stat-label"},"存储层",-1)),v("span",mA,ne(h.value.storage),1)]),v("div",gA,[y[5]||(y[5]=v("span",{class:"stat-label"},"思维层",-1)),v("span",_A,ne(h.value.thinking),1)]),v("div",vA,[y[6]||(y[6]=v("span",{class:"stat-label"},"技能层",-1)),v("span",xA,ne(h.value.skill),1)])])]))}}),SA=xn(yA,[["__scopeId","data-v-1b46c3c2"]]),MA={class:"llm-interactions-panel panel"},bA={class:"panel-header"},EA=["disabled"],wA={class:"stats-summary"},TA={class:"stat-item"},AA={class:"stat-value"},CA={class:"stat-item"},RA={class:"stat-value"},PA={class:"stat-item"},LA={class:"stat-value"},DA={class:"interactions-list"},IA={key:0,class:"loading-placeholder"},NA={key:1,class:"empty-placeholder"},UA=["onClick"],FA={class:"interaction-header"},OA={class:"interaction-model"},BA={class:"interaction-time"},kA={class:"interaction-stats"},zA={class:"token-info"},VA={class:"stat-badge input-token"},HA={class:"stat-badge output-token"},GA={key:0,class:"interaction-detail"},WA={class:"detail-section"},$A={class:"detail-content prompt"},XA={class:"detail-section"},qA={class:"detail-content response"},YA={key:0,class:"pagination"},jA=["disabled"],KA={class:"page-info"},ZA=["disabled"],Cc=10,JA=vn({__name:"LLMInteractions",setup(t){const e=Te([]),n=Te(!1),i=Te(1),s=Te(null),r=St(()=>e.value.reduce((m,_)=>m+(_.input_tokens||0)+(_.output_tokens||0),0)),o=St(()=>{if(e.value.length===0)return 0;const m=e.value.reduce((_,p)=>_+(p.response_time||0),0);return Math.round(m/e.value.length)}),a=St(()=>Math.ceil(e.value.length/Cc)),l=St(()=>{const m=(i.value-1)*Cc,_=m+Cc;return e.value.slice(m,_)});async function c(){n.value=!0;try{const m=await lM.getInteractions(100);e.value=m.interactions||m.items||m||[]}catch(m){console.error("Failed to load LLM interactions:",m),e.value=[]}finally{n.value=!1}}function u(m){s.value=s.value===m?null:m}function d(m){return new Date(m).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function f(m,_){return m?m.length<=_?m:m.substring(0,_)+"...":""}function h(m){return m<1e3?"fast":m<3e3?"medium":"slow"}return Kn(()=>{c()}),(m,_)=>(de(),pe("div",MA,[v("div",bA,[_[2]||(_[2]=v("h3",null,"LLM 交互历史",-1)),v("button",{class:"refresh-btn",onClick:c,disabled:n.value},ne(n.value?"加载中...":"刷新"),9,EA)]),v("div",wA,[v("div",TA,[_[3]||(_[3]=v("span",{class:"stat-label"},"总交互",-1)),v("span",AA,ne(e.value.length),1)]),v("div",CA,[_[4]||(_[4]=v("span",{class:"stat-label"},"总Token",-1)),v("span",RA,ne(r.value),1)]),v("div",PA,[_[5]||(_[5]=v("span",{class:"stat-label"},"平均响应",-1)),v("span",LA,ne(o.value)+"ms",1)])]),v("div",DA,[n.value?(de(),pe("div",IA," 加载中... ")):l.value.length===0?(de(),pe("div",NA," 暂无交互记录 ")):(de(!0),pe(at,{key:2},It(l.value,p=>(de(),pe("div",{key:p.id,class:"interaction-item",onClick:g=>u(p.id)},[v("div",FA,[v("span",OA,ne(p.model),1),v("span",BA,ne(d(p.timestamp)),1)]),v("div",kA,[v("span",zA,[v("span",VA,"输入: "+ne(p.input_tokens||0),1),v("span",HA,"输出: "+ne(p.output_tokens||0),1)]),v("span",{class:ht(["response-time",h(p.response_time)])},ne(p.response_time||0)+"ms ",3)]),s.value===p.id?(de(),pe("div",GA,[v("div",WA,[_[6]||(_[6]=v("div",{class:"detail-label"},"提示词:",-1)),v("div",$A,ne(f(p.prompt,500)),1)]),v("div",XA,[_[7]||(_[7]=v("div",{class:"detail-label"},"响应:",-1)),v("div",qA,ne(f(p.response,500)),1)])])):it("",!0)],8,UA))),128))]),a.value>1?(de(),pe("div",YA,[v("button",{class:"page-btn",disabled:i.value===1,onClick:_[0]||(_[0]=p=>i.value--)}," 上一页 ",8,jA),v("span",KA,ne(i.value)+" / "+ne(a.value),1),v("button",{class:"page-btn",disabled:i.value===a.value,onClick:_[1]||(_[1]=p=>i.value++)}," 下一页 ",8,ZA)])):it("",!0)]))}}),QA=xn(JA,[["__scopeId","data-v-ab845488"]]),eC={class:"evolution-config panel"},tC={key:0,class:"config-content"},nC={class:"status-header"},iC={class:"status-text"},sC={class:"config-section"},rC={class:"profile-selector"},oC=["onClick","disabled"],aC={class:"profile-icon"},lC={class:"profile-name"},cC={class:"profile-desc"},uC={class:"config-section"},fC={class:"status-grid"},dC={class:"status-item"},hC={class:"status-item"},pC={class:"status-item"},mC={class:"status-item"},gC={class:"config-section"},_C={class:"stats-grid"},vC={class:"stat-item"},xC={class:"stat-value"},yC={class:"stat-item"},SC={class:"stat-value"},MC={class:"stat-item"},bC={class:"stat-value"},EC={class:"config-section"},wC={class:"time-info"},TC={class:"time-item"},AC={class:"time-value"},CC={class:"time-item"},RC={class:"time-value"},PC={class:"time-item"},LC={class:"time-value"},DC={class:"config-section"},IC={class:"activity-info"},NC={key:0,class:"activity-item"},UC={class:"activity-time"},FC={key:1,class:"activity-item"},OC={class:"activity-time"},BC={key:2,class:"activity-item"},kC={class:"activity-time"},zC={key:0,class:"reflection-note"},VC={key:0,class:"error-section"},HC={class:"error-message"},GC={class:"config-section"},WC={class:"llm-info"},$C={class:"llm-item"},XC={key:0,class:"llm-item"},qC={class:"llm-value"},YC={key:1,class:"llm-item"},jC={class:"llm-value"},KC={key:1,class:"loading"},ZC=vn({__name:"EvolutionConfig",setup(t){const e=qi(),{evolutionStatus:n,currentProfile:i,isLoading:s}=Nr(e),r=[{value:"light",label:"轻度",icon:"🐢",desc:"低频率扫描和反思，适合资源受限环境"},{value:"standard",label:"标准",icon:"🚀",desc:"平衡的扫描和反思频率，适合大多数场景"},{value:"aggressive",label:"激进",icon:"⚡",desc:"高频率扫描和反思，适合快速迭代场景"}],o=St(()=>n.value?n.value.enabled?n.value.running?"运行中":"已暂停":"已停止":"未知"),a=St(()=>{const d=r.find(f=>f.value===i.value);return(d==null?void 0:d.desc)||""});function l(d){return d?d<60?`${d} 秒`:d<3600?`${Math.floor(d/60)} 分钟`:`${Math.floor(d/3600)} 小时`:"-"}function c(d){if(!d)return"-";try{return new Date(d).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return d}}async function u(d){d!==i.value&&await e.setEvolutionProfile(d)}return Kn(()=>{e.fetchEvolutionStatus()}),(d,f)=>{var h,m,_,p,g;return de(),pe("div",eC,[f[24]||(f[24]=v("h3",null,"进化配置",-1)),Me(n)?(de(),pe("div",tC,[v("div",nC,[v("div",{class:ht(["status-indicator",{active:Me(n).enabled&&Me(n).running}])},null,2),v("span",iC,ne(o.value),1)]),v("div",sC,[f[0]||(f[0]=v("h4",null,"进化模式",-1)),v("div",rC,[(de(),pe(at,null,It(r,x=>v("button",{key:x.value,class:ht(["profile-btn",{active:Me(i)===x.value}]),onClick:E=>u(x.value),disabled:Me(s)},[v("span",aC,ne(x.icon),1),v("span",lC,ne(x.label),1)],10,oC)),64))]),v("div",cC,ne(a.value),1)]),v("div",uC,[f[5]||(f[5]=v("h4",null,"运行状态",-1)),v("div",fC,[v("div",dC,[f[1]||(f[1]=v("span",{class:"item-label"},"扫描任务",-1)),v("span",{class:ht(["item-value",Me(n).scan_task_running?"running":"idle"])},ne(Me(n).scan_task_running?"运行中":"空闲"),3)]),v("div",hC,[f[2]||(f[2]=v("span",{class:"item-label"},"反思任务",-1)),v("span",{class:ht(["item-value",Me(n).reflection_task_running?"running":"idle"])},ne(Me(n).reflection_task_running?"运行中":"空闲"),3)]),v("div",pC,[f[3]||(f[3]=v("span",{class:"item-label"},"日反思",-1)),v("span",{class:ht(["item-value",(h=Me(n).daily_reflection)!=null&&h.running?"running":"idle"])},ne((m=Me(n).daily_reflection)!=null&&m.running?"运行中":"空闲"),3)]),v("div",mC,[f[4]||(f[4]=v("span",{class:"item-label"},"自适应",-1)),v("span",{class:ht(["item-value",Me(n).adaptive?"active":"inactive"])},ne(Me(n).adaptive?"开启":"关闭"),3)])])]),v("div",gC,[f[9]||(f[9]=v("h4",null,"统计数据",-1)),v("div",_C,[v("div",vC,[v("div",xC,ne(Me(n).total_scanned),1),f[6]||(f[6]=v("div",{class:"stat-label"},"总扫描数",-1))]),v("div",yC,[v("div",SC,ne(Me(n).last_scan_processed),1),f[7]||(f[7]=v("div",{class:"stat-label"},"上次处理",-1))]),v("div",MC,[v("div",bC,ne(((_=Me(n).daily_reflection)==null?void 0:_.total_reflections)||0),1),f[8]||(f[8]=v("div",{class:"stat-label"},"反思次数",-1))])])]),v("div",EC,[f[13]||(f[13]=v("h4",null,"时间配置",-1)),v("div",wC,[v("div",TC,[f[10]||(f[10]=v("span",{class:"time-label"},"扫描间隔",-1)),v("span",AC,ne(l(Me(n).scan_interval_seconds)),1)]),v("div",CC,[f[11]||(f[11]=v("span",{class:"time-label"},"反思间隔",-1)),v("span",RC,ne(l(Me(n).reflection_interval_seconds)),1)]),v("div",PC,[f[12]||(f[12]=v("span",{class:"time-label"},"扫描批次",-1)),v("span",LC,ne(Me(n).scan_batch_size)+" 条",1)])])]),v("div",DC,[f[17]||(f[17]=v("h4",null,"最近活动",-1)),v("div",IC,[Me(n).last_scan_time?(de(),pe("div",NC,[f[14]||(f[14]=v("span",{class:"activity-label"},"上次扫描",-1)),v("span",UC,ne(c(Me(n).last_scan_time)),1)])):it("",!0),Me(n).last_reflection_time?(de(),pe("div",FC,[f[15]||(f[15]=v("span",{class:"activity-label"},"上次反思",-1)),v("span",OC,ne(c(Me(n).last_reflection_time)),1)])):it("",!0),(p=Me(n).daily_reflection)!=null&&p.next_reflection?(de(),pe("div",BC,[f[16]||(f[16]=v("span",{class:"activity-label"},"下次反思",-1)),v("span",kC,ne(Me(n).daily_reflection.next_reflection),1)])):it("",!0)]),Me(n).last_reflection_note?(de(),pe("div",zC,ne(Me(n).last_reflection_note),1)):it("",!0)]),Me(n).last_error?(de(),pe("div",VC,[f[18]||(f[18]=v("div",{class:"error-label"},"最近错误",-1)),v("div",HC,ne(Me(n).last_error),1)])):it("",!0),v("div",GC,[f[22]||(f[22]=v("h4",null,"LLM 配置",-1)),v("div",WC,[v("div",$C,[f[19]||(f[19]=v("span",{class:"llm-label"},"LLM 状态",-1)),v("span",{class:ht(["llm-value",Me(n).llm_enabled?"enabled":"disabled"])},ne(Me(n).llm_enabled?"已启用":"未启用"),3)]),Me(n).preferred_provider?(de(),pe("div",XC,[f[20]||(f[20]=v("span",{class:"llm-label"},"提供商",-1)),v("span",qC,ne(Me(n).preferred_provider),1)])):it("",!0),(g=Me(n).available_providers)!=null&&g.length?(de(),pe("div",YC,[f[21]||(f[21]=v("span",{class:"llm-label"},"可用提供商",-1)),v("span",jC,ne(Me(n).available_providers.join(", ")),1)])):it("",!0)])])])):(de(),pe("div",KC,[...f[23]||(f[23]=[v("span",{class:"loading-text"},"加载中...",-1)])]))])}}}),JC=xn(ZC,[["__scopeId","data-v-59d141f4"]]),QC={class:"merge-chain-viewer panel"},eR={class:"header"},tR={key:0,class:"empty-placeholder"},nR={key:1,class:"loading-overlay"},iR={key:2,class:"error-message"},sR={class:"chain-info"},rR={class:"info-item"},oR={class:"info-value"},aR={class:"info-item"},lR={class:"info-value"},cR={class:"info-item"},uR={class:"info-value"},fR={key:0,class:"merge-history"},dR={class:"history-list"},hR={class:"history-time"},pR={class:"history-desc"},mR={key:4,class:"empty-placeholder"},gR=vn({__name:"MergeChainViewer",props:{memoryId:{},showClose:{type:Boolean}},emits:["close","nodeClick"],setup(t,{emit:e}){const n=t,i=e,s=qi(),r=Te(),o=Te(!1),a=Te(null),l=Te(null);let c=null,u=null;qn(()=>n.memoryId,x=>{x?d(x):(l.value=null,f())},{immediate:!0}),Kn(()=>{n.memoryId&&d(n.memoryId)}),$s(()=>{u&&u.stop()});async function d(x){o.value=!0,a.value=null;try{const E=await di.getMergeChain(x);l.value=E,s.addLog("合并链加载成功","success"),await Vo(),r.value&&E&&h(E)}catch(E){a.value="加载合并链失败: "+E.message,s.addLog("加载合并链失败","error")}finally{o.value=!1}}function f(){c&&c.selectAll("*").remove()}function h(x){if(!r.value)return;f();const E=r.value.clientWidth,y=280;c=Ar(r.value).append("svg").attr("width",E).attr("height",y);const T=[],C=[];if(x.current&&T.push({id:x.current.id,title:x.current.title||x.current.id,type:"current"}),x.sources&&x.sources.length>0&&x.sources.forEach(N=>{T.push({id:N.id,title:N.title||N.id,type:"source"}),C.push({source:N.id,target:x.current.id,relation:"merged_to"})}),T.length===0)return;u=V_(T).force("link",z_(C).id(N=>N.id).distance(80)).force("charge",H_().strength(-200)).force("center",O_(E/2,y/2)).force("collision",k_().radius(35)),c.append("defs").append("marker").attr("id","arrowhead-merge").attr("viewBox","-0 -5 10 10").attr("refX",25).attr("refY",0).attr("orient","auto").attr("markerWidth",6).attr("markerHeight",6).append("path").attr("d","M 0,-5 L 10,0 L 0,5").attr("fill","#00ff41");const S=c.append("g").selectAll("line").data(C).enter().append("line").attr("stroke","#00ff41").attr("stroke-opacity",.6).attr("stroke-width",2).attr("marker-end","url(#arrowhead-merge)"),M=c.append("g").selectAll("g").data(T).enter().append("g").style("cursor","pointer").call(E_().on("start",m).on("drag",_).on("end",p)).on("click",(N,D)=>{i("nodeClick",D)});M.append("circle").attr("r",N=>N.type==="current"?20:15).attr("fill",N=>N.type==="current"?"#00ff41":"rgba(0, 255, 65, 0.3)").attr("stroke","#00ff41").attr("stroke-width",2),M.append("text").attr("dy",4).attr("text-anchor","middle").attr("fill",N=>N.type==="current"?"#000":"#00ff41").attr("font-size","10px").attr("font-weight","bold").text(N=>N.title.length>6?N.title.substring(0,6)+"...":N.title),M.append("title").text(N=>`${N.title}
${N.memory_type||"未知类型"}`),u.on("tick",()=>{S.attr("x1",N=>N.source.x).attr("y1",N=>N.source.y).attr("x2",N=>N.target.x).attr("y2",N=>N.target.y),M.attr("transform",N=>`translate(${N.x},${N.y})`)})}function m(x){!x.active&&u&&u.alphaTarget(.3).restart(),x.subject.fx=x.subject.x,x.subject.fy=x.subject.y}function _(x){x.subject.fx=x.x,x.subject.fy=x.y}function p(x){!x.active&&u&&u.alphaTarget(0),x.subject.fx=null,x.subject.fy=null}function g(x){return x?new Date(x).toLocaleString("zh-CN"):"-"}return(x,E)=>{var y,T,C,L;return de(),pe("div",QC,[v("div",eR,[E[1]||(E[1]=v("h3",null,"记忆合并链",-1)),t.showClose?(de(),pe("button",{key:0,class:"btn-close",onClick:E[0]||(E[0]=S=>i("close"))},"×")):it("",!0)]),t.memoryId?o.value?(de(),pe("div",nR,[...E[3]||(E[3]=[v("div",{class:"loading-spinner"},null,-1),v("p",null,"加载合并链中...",-1)])])):a.value?(de(),pe("div",iR,[v("p",null,ne(a.value),1)])):l.value?(de(),pe(at,{key:3},[v("div",sR,[v("div",rR,[E[4]||(E[4]=v("span",{class:"info-label"},"当前记忆",-1)),v("span",oR,ne(((y=l.value.current)==null?void 0:y.title)||((T=l.value.current)==null?void 0:T.id)),1)]),v("div",aR,[E[5]||(E[5]=v("span",{class:"info-label"},"合并深度",-1)),v("span",lR,ne(l.value.depth||0),1)]),v("div",cR,[E[6]||(E[6]=v("span",{class:"info-label"},"来源数量",-1)),v("span",uR,ne(((C=l.value.sources)==null?void 0:C.length)||0),1)])]),v("div",{ref_key:"graphContainer",ref:r,class:"graph-container"},null,512),(L=l.value.merge_history)!=null&&L.length?(de(),pe("div",fR,[E[7]||(E[7]=v("h4",null,"合并历史",-1)),v("div",dR,[(de(!0),pe(at,null,It(l.value.merge_history,(S,M)=>(de(),pe("div",{key:M,class:"history-item"},[v("div",hR,ne(g(S.timestamp)),1),v("div",pR,ne(S.description||"合并操作"),1)]))),128))])])):it("",!0)],64)):(de(),pe("div",mR,[...E[8]||(E[8]=[v("p",null,"暂无合并链数据",-1)])])):(de(),pe("div",tR,[...E[2]||(E[2]=[v("p",null,"请选择一个记忆查看其合并链",-1)])]))])}}}),_R=xn(gR,[["__scopeId","data-v-09b8e911"]]),X_=Yf("brain",()=>{const t=Te(null),e=Te(!1),n=Te(null),i=Te(null);async function s(){e.value=!0,n.value=null;try{const w=await fetch("/brain/status");if(!w.ok)throw new Error("Failed to fetch brain status");t.value=await w.json(),i.value=new Date}catch(w){n.value="获取AI大脑状态失败",console.error("Failed to fetch brain status:",w)}finally{e.value=!1}}async function r(w,A={}){e.value=!0,n.value=null;try{const O=await fetch("/brain/input",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:w,context:A})});if(!O.ok)throw new Error("Failed to process input");return await O.json()}catch(O){throw n.value="处理输入失败",console.error("Failed to process input:",O),O}finally{e.value=!1}}async function o(w,A={}){e.value=!0,n.value=null;try{const O=await fetch("/brain/retrieve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:w,context:A})});if(!O.ok)throw new Error("Failed to retrieve memory");return await O.json()}catch(O){throw n.value="检索记忆失败",console.error("Failed to retrieve memory:",O),O}finally{e.value=!1}}async function a(){e.value=!0,n.value=null;try{const w=await fetch("/brain/reflection",{method:"POST",headers:{"Content-Type":"application/json"}});if(!w.ok)throw new Error("Failed to trigger reflection");return await w.json()}catch(w){throw n.value="触发自我反思失败",console.error("Failed to trigger reflection:",w),w}finally{e.value=!1}}async function l(w){e.value=!0,n.value=null;try{const A=await fetch("/brain/hypotheses",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({context:w})});if(!A.ok)throw new Error("Failed to generate hypotheses");return(await A.json()).hypotheses}catch(A){throw n.value="生成假设失败",console.error("Failed to generate hypotheses:",A),A}finally{e.value=!1}}async function c(w){e.value=!0,n.value=null;try{const A=await fetch("/brain/hypotheses/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hypothesis:w})});if(!A.ok)throw new Error("Failed to test hypothesis");return await A.json()}catch(A){throw n.value="测试假设失败",console.error("Failed to test hypothesis:",A),A}finally{e.value=!1}}async function u(w){e.value=!0,n.value=null;try{const A=await fetch("/brain/evolve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({experiences:w})});if(!A.ok)throw new Error("Failed to evolve brain");return await A.json()}catch(A){throw n.value="进化AI大脑失败",console.error("Failed to evolve brain:",A),A}finally{e.value=!1}}function d(){var w;return(w=t.value)==null?void 0:w.self_awareness}function f(){var w;return(w=t.value)==null?void 0:w.active_cognition}function h(){var w;return(w=t.value)==null?void 0:w.value_system}function m(){var w;return(w=t.value)==null?void 0:w.dynamic_memory}function _(){var w;return(w=t.value)==null?void 0:w.metacognition}function p(){if(!t.value)return[];const w=[],A=new Date;for(let O=6;O>=0;O--){const X=new Date(A);X.setDate(X.getDate()-O),w.push({date:X.toISOString().split("T")[0],success_rate:.6+Math.random()*.35})}return w}function g(){var w,A,O;return((O=(A=(w=t.value)==null?void 0:w.self_awareness)==null?void 0:A.capabilities)==null?void 0:O.slice(0,6))||[]}function x(){var w,A,O;return((O=(A=(w=t.value)==null?void 0:w.self_awareness)==null?void 0:A.goals)==null?void 0:O.slice(0,4))||[]}function E(){var A,O;const w=((O=(A=t.value)==null?void 0:A.value_system)==null?void 0:O.weights)||{};return{novelty:w.novelty||.25,utility:w.utility||.25,emotional:w.emotional||.25,frequency:w.frequency||.25}}function y(w){return(w*100).toFixed(0)+"%"}function T(w){return w>.7?"high":w>.4?"medium":"low"}function C(w){return w>.7?"high":w>.4?"medium":"low"}function L(w){return w>.8?"high":w>.5?"medium":"low"}function S(w){if(!w)return"N/A";const A=w.total_score||0;return A>=.75?"高价值":A>=.5?"中等价值":"低价值"}function M(w){return{accuracy:"准确性",efficiency:"效率",creativity:"创造性",empathy:"同理心",learning:"学习能力",safety:"安全性",curiosity:"好奇心",reliability:"可靠性",novelty:"新颖性",utility:"实用性",emotional:"情感强度",frequency:"使用频率"}[w]||w}function N(w){return w>.05?"up":w<-.05?"down":"stable"}function D(w){const A=N(w);return A==="up"?"📈":A==="down"?"📉":"➡️"}function U(){n.value=null}async function V(){try{const w=await fetch("/brain/export");if(!w.ok)throw new Error("Export failed");return await w.json()}catch(w){throw n.value="导出大脑状态失败",console.error("Export failed:",w),w}}async function $(w){try{const A=await fetch("/brain/import",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)});if(!A.ok)throw new Error("Import failed");return await A.json()}catch(A){throw n.value="导入大脑状态失败",console.error("Import failed:",A),A}}async function B(){try{const w=await fetch("/brain/compatibility");if(!w.ok)throw new Error("Compatibility check failed");return await w.json()}catch(w){throw n.value="兼容性检查失败",console.error("Compatibility check failed:",w),w}}return{brainStatus:t,isLoading:e,error:n,lastUpdate:i,fetchBrainStatus:s,processInput:r,retrieveMemory:o,triggerSelfReflection:a,generateHypotheses:l,testHypothesis:c,evolveBrain:u,getSelfAwareness:d,getCognitionStatus:f,getValueSystem:h,getDynamicMemory:m,getMetacognition:_,getLearningTrends:p,getDisplayedCapabilities:g,getTopGoals:x,getValueChart:E,formatPercent:y,getLoadClass:T,getFocusClass:C,getConfidenceClass:L,formatValueCategory:S,formatValueName:M,getTrendClass:N,getTrendIcon:D,clearError:U,exportBrain:V,importBrain:$,checkCompatibility:B}}),vR={class:"brain-status panel"},xR={class:"awareness-section"},yR={class:"awareness-grid"},SR={class:"awareness-card"},MR={class:"card-content"},bR={class:"card-value"},ER={class:"card-version"},wR={class:"awareness-card"},TR={class:"card-content"},AR={class:"capabilities-list"},CR={class:"awareness-card"},RR={class:"card-content"},PR={key:0,class:"goals-list"},LR={class:"goal-progress"},DR={class:"goal-name"},IR=["value"],NR={key:1,class:"no-goals"},UR={class:"awareness-card"},FR={class:"card-content"},OR={class:"evolution-info"},BR={class:"evolution-generation"},kR={class:"total-experiences"},zR={class:"cognition-section"},VR={class:"cognition-grid"},HR={class:"cognition-card"},GR={class:"card-content"},WR={class:"cognition-stats"},$R={class:"stat-row"},XR={class:"stat-value"},qR={class:"stat-row"},YR={class:"stat-value"},jR={class:"cognition-card"},KR={class:"card-content"},ZR={class:"cognition-stats"},JR={class:"stat-row"},QR={class:"stat-value"},eP={class:"stat-row"},tP={class:"stat-value"},nP={class:"value-section"},iP={class:"value-stats"},sP={class:"value-chart"},rP={class:"chart-item"},oP={class:"chart-item"},aP={class:"chart-item"},lP={class:"chart-item"},cP={class:"memory-section"},uP={class:"memory-stats"},fP={class:"memory-pie"},dP={class:"metacognition-section"},hP={class:"metacognition-stats"},pP={class:"meta-grid"},mP={class:"meta-item"},gP={class:"meta-item"},_P={class:"meta-item"},vP={key:0,class:"detected-biases"},xP={class:"biases-list"},yP={class:"status-footer"},SP={class:"cycle-info"},MP={class:"cycle-count"},bP={class:"last-update"},EP=["disabled"],wP=vn({__name:"BrainStatus",setup(t){const e=X_(),{isLoading:n,lastUpdate:i}=Nr(e),s=St(()=>e.getValueChart()),r=St(()=>i.value?i.value.toLocaleTimeString("zh-CN"):"从未更新"),o=St(()=>{const c=e.getMetacognition();return(c==null?void 0:c.detected_biases)||[]});let a=null;Kn(()=>{e.fetchBrainStatus(),a=window.setInterval(()=>{e.fetchBrainStatus()},5e3)}),Hf(()=>{a&&clearInterval(a)});function l(){e.fetchBrainStatus()}return(c,u)=>{var d,f,h,m,_,p,g,x,E,y,T,C,L,S,M,N,D,U,V,$,B,w,A,O,X,oe;return de(),pe("div",vR,[u[30]||(u[30]=v("h3",null,"🧠 AI大脑状态",-1)),v("div",xR,[u[8]||(u[8]=v("h4",null,"自我意识",-1)),v("div",yR,[v("div",SR,[u[1]||(u[1]=v("div",{class:"card-icon"},"🤖",-1)),v("div",MR,[u[0]||(u[0]=v("div",{class:"card-title"},"身份认知",-1)),v("div",bR,ne(((d=Me(e).getSelfAwareness())==null?void 0:d.identity)||"AI Brain"),1),v("div",ER,"v"+ne(((f=Me(e).getSelfAwareness())==null?void 0:f.version)||"1.0.0"),1)])]),v("div",wR,[u[3]||(u[3]=v("div",{class:"card-icon"},"⚡",-1)),v("div",TR,[u[2]||(u[2]=v("div",{class:"card-title"},"核心能力",-1)),v("div",AR,[(de(!0),pe(at,null,It(Me(e).getDisplayedCapabilities(),he=>(de(),pe("div",{key:he},ne(he),1))),128))])])]),v("div",CR,[u[5]||(u[5]=v("div",{class:"card-icon"},"🎯",-1)),v("div",RR,[u[4]||(u[4]=v("div",{class:"card-title"},"当前目标",-1)),Me(e).getTopGoals().length>0?(de(),pe("div",PR,[(de(!0),pe(at,null,It(Me(e).getTopGoals(),he=>(de(),pe("div",{key:he.goal_id},[v("div",LR,[v("span",DR,ne(he.description),1),v("progress",{value:he.progress*100,max:"100"},null,8,IR)])]))),128))])):(de(),pe("div",NR,"暂无活跃目标"))])]),v("div",UR,[u[7]||(u[7]=v("div",{class:"card-icon"},"💎",-1)),v("div",FR,[u[6]||(u[6]=v("div",{class:"card-title"},"进化状态",-1)),v("div",OR,[v("div",BR,"第 "+ne(((h=Me(e).getSelfAwareness())==null?void 0:h.evolution_generation)||0)+" 代",1),v("div",kR,ne(((m=Me(e).getSelfAwareness())==null?void 0:m.total_experiences)||0)+" 次经验",1)])])])])]),v("div",zR,[u[17]||(u[17]=v("h4",null,"主动认知",-1)),v("div",VR,[v("div",HR,[u[12]||(u[12]=v("div",{class:"card-icon"},"👁️",-1)),v("div",GR,[u[11]||(u[11]=v("div",{class:"card-title"},"注意力系统",-1)),v("div",WR,[v("div",$R,[u[9]||(u[9]=v("span",{class:"stat-label"},"阈值",-1)),v("span",XR,ne(((p=(_=Me(e).getCognitionStatus())==null?void 0:_.attention_threshold)==null?void 0:p.toFixed(2))||"N/A"),1)]),v("div",qR,[u[10]||(u[10]=v("span",{class:"stat-label"},"待处理问题",-1)),v("span",YR,ne(((g=Me(e).getCognitionStatus())==null?void 0:g.pending_questions)||0),1)])])])]),v("div",jR,[u[16]||(u[16]=v("div",{class:"card-icon"},"🔍",-1)),v("div",KR,[u[15]||(u[15]=v("div",{class:"card-title"},"好奇心引擎",-1)),v("div",ZR,[v("div",JR,[u[13]||(u[13]=v("span",{class:"stat-label"},"好奇心水平",-1)),v("span",QR,ne(Me(e).formatPercent(((x=Me(e).getCognitionStatus())==null?void 0:x.curiosity_level)||0)),1)]),v("div",eP,[u[14]||(u[14]=v("span",{class:"stat-label"},"待验证假设",-1)),v("span",tP,ne(((E=Me(e).getCognitionStatus())==null?void 0:E.pending_hypotheses)||0),1)])])])])])]),v("div",nP,[u[22]||(u[22]=v("h4",null,"价值判断系统",-1)),v("div",iP,[v("div",sP,[v("div",rP,[v("div",{class:"chart-bar",style:Hn({width:s.value.novelty*100+"%"})},null,4),u[18]||(u[18]=v("div",{class:"chart-label"},"新颖性",-1))]),v("div",oP,[v("div",{class:"chart-bar",style:Hn({width:s.value.utility*100+"%"})},null,4),u[19]||(u[19]=v("div",{class:"chart-label"},"实用性",-1))]),v("div",aP,[v("div",{class:"chart-bar",style:Hn({width:s.value.emotional*100+"%"})},null,4),u[20]||(u[20]=v("div",{class:"chart-label"},"情感强度",-1))]),v("div",lP,[v("div",{class:"chart-bar",style:Hn({width:s.value.frequency*100+"%"})},null,4),u[21]||(u[21]=v("div",{class:"chart-label"},"使用频率",-1))])])])]),v("div",cP,[u[24]||(u[24]=v("h4",null,"动态记忆",-1)),v("div",uP,[v("div",fP,[v("div",{class:"pie-segment active",style:Hn({flex:((y=Me(e).getDynamicMemory())==null?void 0:y.active_memories)||0})},null,4),v("div",{class:"pie-segment consolidated",style:Hn({flex:((T=Me(e).getDynamicMemory())==null?void 0:T.consolidated_memories)||0})},null,4),v("div",{class:"pie-segment decaying",style:Hn({flex:((C=Me(e).getDynamicMemory())==null?void 0:C.decaying_memories)||0})},null,4),v("div",{class:"pie-segment forgotten",style:Hn({flex:((L=Me(e).getDynamicMemory())==null?void 0:L.forgotten_memories)||0})},null,4),u[23]||(u[23]=Ag('<div class="pie-legend" data-v-50b29f8a><div class="legend-item active" data-v-50b29f8a></div> 活跃 <div class="legend-item consolidated" data-v-50b29f8a></div> 巩固 <div class="legend-item decaying" data-v-50b29f8a></div> 衰退 <div class="legend-item forgotten" data-v-50b29f8a></div> 遗忘 </div>',1))])])]),v("div",dP,[u[29]||(u[29]=v("h4",null,"元认知",-1)),v("div",hP,[v("div",pP,[v("div",mP,[u[25]||(u[25]=v("div",{class:"meta-label"},"认知负荷",-1)),v("div",{class:ht(["meta-value",Me(e).getLoadClass(((M=(S=Me(e).getMetacognition())==null?void 0:S.current_state)==null?void 0:M.cognitive_load)||0)])},ne(Me(e).formatPercent(((D=(N=Me(e).getMetacognition())==null?void 0:N.current_state)==null?void 0:D.cognitive_load)||0)),3)]),v("div",gP,[u[26]||(u[26]=v("div",{class:"meta-label"},"专注度",-1)),v("div",{class:ht(["meta-value",Me(e).getFocusClass(((V=(U=Me(e).getMetacognition())==null?void 0:U.current_state)==null?void 0:V.focus_level)||0)])},ne(Me(e).formatPercent(((B=($=Me(e).getMetacognition())==null?void 0:$.current_state)==null?void 0:B.focus_level)||0)),3)]),v("div",_P,[u[27]||(u[27]=v("div",{class:"meta-label"},"自信度",-1)),v("div",{class:ht(["meta-value",Me(e).getConfidenceClass(((A=(w=Me(e).getMetacognition())==null?void 0:w.current_state)==null?void 0:A.confidence_level)||0)])},ne(Me(e).formatPercent(((X=(O=Me(e).getMetacognition())==null?void 0:O.current_state)==null?void 0:X.confidence_level)||0)),3)])]),o.value.length>0?(de(),pe("div",vP,[u[28]||(u[28]=v("h5",null,"检测到的认知偏差",-1)),v("div",xP,[(de(!0),pe(at,null,It(o.value,he=>(de(),pe("div",{key:he,class:"bias-item"},ne(he),1))),128))])])):it("",!0)])]),v("div",yP,[v("div",SP,[v("span",MP,"总周期: "+ne(((oe=Me(e).brainStatus)==null?void 0:oe.total_cycles)||0),1),v("span",bP,"最后更新: "+ne(r.value),1)]),v("button",{onClick:l,disabled:Me(n),class:"refresh-btn"},ne(Me(n)?"刷新中...":"刷新状态"),9,EP)])])}}}),TP=xn(wP,[["__scopeId","data-v-50b29f8a"]]),AP={class:"brain-interaction panel"},CP={class:"interaction-section"},RP={class:"input-form"},PP={class:"form-actions"},LP=["disabled"],DP={key:0,class:"result-display"},IP={class:"result-content"},NP={class:"result-section"},UP={class:"result-value"},FP={class:"result-section"},OP={class:"result-value"},BP={key:0,class:"result-section"},kP={class:"result-value"},zP={key:1,class:"result-actions"},VP={class:"actions-tags"},HP={key:2,class:"result-questions"},GP={class:"questions-list"},WP={class:"interaction-section"},$P={class:"retrieval-form"},XP=["disabled"],qP={key:0,class:"result-display"},YP={class:"results-list"},jP={class:"memory-content"},KP={class:"memory-meta"},ZP={class:"meta-relevance"},JP={key:0,class:"meta-type"},QP={key:1,class:"result-display empty"},e3={class:"interaction-section"},t3={class:"reflection-actions"},n3=["disabled"],i3={key:0,class:"result-display"},s3={class:"reflection-summary"},r3={class:"summary-item"},o3={class:"summary-value"},a3={class:"summary-item"},l3={class:"summary-value"},c3={class:"summary-item"},u3={key:0,class:"summary-item"},f3={class:"recommendations-list"},d3={class:"interaction-section"},h3={class:"hypothesis-form"},p3=["disabled"],m3={key:0,class:"hypotheses-list"},g3={class:"hypothesis-content"},_3={class:"hypothesis-description"},v3={class:"hypothesis-confidence"},x3={class:"hypothesis-actions"},y3=["onClick","disabled"],S3={key:1,class:"empty-message"},M3=vn({__name:"BrainInteraction",setup(t){const e=X_(),n=Te(""),i=Te(""),s=Te(!1),r=Te(!1),o=Te(!1),a=Te(!1),l=Te(!1),c=Te(null),u=Te(null),d=Te(null),f=Te([]),h=Te(!1);async function m(){if(n.value.trim()){s.value=!0,c.value=null;try{const S=await e.processInput(n.value);c.value=S}catch(S){console.error("Failed to process input:",S),alert("处理输入失败: "+S.message)}finally{s.value=!1}}}function _(){n.value="",c.value=null}async function p(){if(i.value.trim()){r.value=!0,u.value=null;try{const S=await e.retrieveMemory(i.value);u.value=S}catch(S){console.error("Failed to retrieve memory:",S),alert("检索记忆失败: "+S.message)}finally{r.value=!1}}}async function g(){o.value=!0,d.value=null;try{const S=await e.triggerSelfReflection();d.value=S,setTimeout(()=>e.fetchBrainStatus(),2e3)}catch(S){console.error("Failed to trigger reflection:",S),alert("触发自我反思失败: "+S.message)}finally{o.value=!1}}async function x(){const S="基于当前记忆系统的分析";a.value=!0,h.value=!0,f.value=[];try{const M=await e.generateHypotheses(S);f.value=M}catch(M){console.error("Failed to generate hypotheses:",M),alert("生成假设失败: "+M.message)}finally{a.value=!1}}async function E(S){l.value=!0;try{await e.testHypothesis(S),alert("假设测试已启动，请稍后查看结果"),S.status="testing"}catch(M){console.error("Failed to test hypothesis:",M),alert("测试假设失败: "+M.message)}finally{l.value=!1}}function y(S){return e.formatValueCategory(S)}function T(S){return{memory_created:"创建记忆",associations_created:"创建联想",content_filtered:"内容过滤",questions_generated:"生成问题"}[S]||S}function C(S){return{storage:"存储",thinking:"思维",skill:"技能"}[S]||S}function L(S){return{pending:"待验证",testing:"测试中",confirmed:"已确认",rejected:"已拒绝"}[S]||S}return(S,M)=>{var N,D,U,V,$,B,w,A,O,X;return de(),pe("div",AP,[M[18]||(M[18]=v("h3",null,"🧠 AI大脑交互",-1)),v("div",CP,[M[8]||(M[8]=v("h4",null,"认知处理",-1)),v("div",RP,[Gt(v("textarea",{"onUpdate:modelValue":M[0]||(M[0]=oe=>n.value=oe),placeholder:"输入要让AI大脑处理的内容...",class:"brain-input",rows:"4"},null,512),[[wn,n.value]]),v("div",PP,[v("button",{onClick:m,disabled:s.value},ne(s.value?"处理中...":"处理输入"),9,LP),v("button",{onClick:_,class:"secondary"},"清除")])]),c.value?(de(),pe("div",DP,[M[7]||(M[7]=v("h5",null,"处理结果",-1)),v("div",IP,[v("div",NP,[M[2]||(M[2]=v("span",{class:"result-label"},"注意力分数:",-1)),v("span",UP,ne((N=c.value.attention_score)==null?void 0:N.toFixed(2)),1)]),v("div",FP,[M[3]||(M[3]=v("span",{class:"result-label"},"价值评估:",-1)),v("span",OP,ne(y(c.value.value_assessment)),1)]),((D=c.value.memories_created)==null?void 0:D.length)>0?(de(),pe("div",BP,[M[4]||(M[4]=v("span",{class:"result-label"},"创建记忆:",-1)),v("span",kP,ne(c.value.memories_created.length)+" 条",1)])):it("",!0),(U=c.value.actions_taken)!=null&&U.length?(de(),pe("div",zP,[M[5]||(M[5]=v("span",{class:"actions-label"},"执行操作:",-1)),v("div",VP,[(de(!0),pe(at,null,It(c.value.actions_taken,oe=>(de(),pe("span",{key:oe,class:"action-tag"},ne(T(oe)),1))),128))])])):it("",!0),c.value.questions_generated&&c.value.questions_generated.length>0?(de(),pe("div",HP,[M[6]||(M[6]=v("span",{class:"questions-label"},"生成问题:",-1)),v("div",GP,[(de(!0),pe(at,null,It(c.value.questions_generated,(oe,he)=>(de(),pe("div",{key:he,class:"question-item"},ne(oe),1))),128))])])):it("",!0)])])):it("",!0)]),v("div",WP,[M[10]||(M[10]=v("h4",null,"智能检索",-1)),v("div",$P,[Gt(v("input",{"onUpdate:modelValue":M[1]||(M[1]=oe=>i.value=oe),placeholder:"输入检索查询...",class:"retrieval-input",onKeyup:qf(p,["enter"])},null,544),[[wn,i.value]]),v("button",{onClick:p,disabled:r.value},ne(r.value?"检索中...":"检索记忆"),9,XP)]),u.value&&u.value.memories&&u.value.memories.length>0?(de(),pe("div",qP,[v("h5",null,"检索结果 (置信度: "+ne(((V=u.value.confidence)==null?void 0:V.toFixed(2))||"N/A")+")",1),v("div",YP,[(de(!0),pe(at,null,It(u.value.memories,oe=>{var he;return de(),pe("div",{key:oe.memory_id,class:"memory-item"},[v("div",jP,ne(oe.content||"记忆内容..."),1),v("div",KP,[v("span",ZP,"相关度: "+ne((he=oe.relevance)==null?void 0:he.toFixed(2)),1),oe.memory_type?(de(),pe("span",JP,"类型: "+ne(C(oe.memory_type)),1)):it("",!0)])])}),128))])])):u.value?(de(),pe("div",QP,[...M[9]||(M[9]=[v("h5",null,"检索结果",-1),v("p",{class:"empty-message"},"未找到相关记忆",-1)])])):it("",!0)]),v("div",e3,[M[16]||(M[16]=v("h4",null,"自我反思",-1)),v("div",t3,[v("button",{onClick:g,disabled:o.value},ne(o.value?"反思中...":"触发自我反思"),9,n3)]),d.value?(de(),pe("div",i3,[M[15]||(M[15]=v("h5",null,"反思结果",-1)),v("div",s3,[v("div",r3,[M[11]||(M[11]=v("span",{class:"summary-label"},"记忆总数:",-1)),v("span",o3,ne((($=d.value.memory_state)==null?void 0:$.total_memories)||"N/A"),1)]),v("div",a3,[M[12]||(M[12]=v("span",{class:"summary-label"},"学习效率:",-1)),v("span",l3,ne(((w=(B=d.value.learning_efficiency)==null?void 0:B.efficiency_score)==null?void 0:w.toFixed(2))||"N/A"),1)]),v("div",c3,[M[13]||(M[13]=v("span",{class:"summary-label"},"认知偏差:",-1)),v("span",{class:ht(["summary-value",{"has-biases":((A=d.value.detected_biases)==null?void 0:A.length)>0}])},ne(((O=d.value.detected_biases)==null?void 0:O.length)||0)+" 个 ",3)]),((X=d.value.recommendations)==null?void 0:X.length)>0?(de(),pe("div",u3,[M[14]||(M[14]=v("span",{class:"summary-label"},"建议:",-1)),v("div",f3,[(de(!0),pe(at,null,It(d.value.recommendations.slice(0,3),(oe,he)=>(de(),pe("div",{key:he,class:"recommendation-item"},ne(oe),1))),128))])])):it("",!0)])])):it("",!0)]),v("div",d3,[M[17]||(M[17]=v("h4",null,"假设推理",-1)),v("div",h3,[v("button",{onClick:x,disabled:a.value}," 生成假设 ",8,p3),f.value.length>0?(de(),pe("div",m3,[(de(!0),pe(at,null,It(f.value,oe=>{var he,ie;return de(),pe("div",{key:oe.hypothesis_id,class:"hypothesis-item"},[v("div",g3,[v("span",_3,ne(oe.description),1),v("span",v3," 置信度: "+ne((he=oe.confidence)==null?void 0:he.toFixed(2)),1),v("span",{class:ht(["hypothesis-status",(ie=oe.status)==null?void 0:ie.toLowerCase()])},ne(L(oe.status)),3)]),v("div",x3,[v("button",{onClick:ae=>E(oe),size:"small",disabled:l.value}," 测试 ",8,y3)])])}),128))])):h.value?(de(),pe("div",S3," 暂无假设 ")):it("",!0)])])])}}}),b3=xn(M3,[["__scopeId","data-v-7a4e23dd"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ud="183",E3=0,dp=1,w3=2,Ya=1,T3=2,ro=3,ds=0,_n=1,fi=2,Oi=0,Sr=1,Uu=2,hp=3,pp=4,A3=5,Rs=100,C3=101,R3=102,P3=103,L3=104,D3=200,I3=201,N3=202,U3=203,Fu=204,Ou=205,F3=206,O3=207,B3=208,k3=209,z3=210,V3=211,H3=212,G3=213,W3=214,Bu=0,ku=1,zu=2,Rr=3,Vu=4,Hu=5,Gu=6,Wu=7,q_=0,$3=1,X3=2,vi=0,Y_=1,j_=2,K_=3,Z_=4,J_=5,Q_=6,e0=7,t0=300,Ws=301,Pr=302,Rc=303,Pc=304,tc=306,$u=1e3,Fi=1001,Xu=1002,$t=1003,q3=1004,fa=1005,tn=1006,Lc=1007,Ns=1008,On=1009,n0=1010,i0=1011,No=1012,fd=1013,Si=1014,hi=1015,Gi=1016,dd=1017,hd=1018,Uo=1020,s0=35902,r0=35899,o0=1021,a0=1022,$n=1023,Wi=1026,Us=1027,l0=1028,pd=1029,Lr=1030,md=1031,gd=1033,ja=33776,Ka=33777,Za=33778,Ja=33779,qu=35840,Yu=35841,ju=35842,Ku=35843,Zu=36196,Ju=37492,Qu=37496,ef=37488,tf=37489,nf=37490,sf=37491,rf=37808,of=37809,af=37810,lf=37811,cf=37812,uf=37813,ff=37814,df=37815,hf=37816,pf=37817,mf=37818,gf=37819,_f=37820,vf=37821,xf=36492,yf=36494,Sf=36495,Mf=36283,bf=36284,Ef=36285,wf=36286,Y3=3200,j3=0,K3=1,as="",Un="srgb",Dr="srgb-linear",yl="linear",vt="srgb",Js=7680,mp=519,Z3=512,J3=513,Q3=514,_d=515,e2=516,t2=517,vd=518,n2=519,gp=35044,_p="300 es",pi=2e3,Sl=2001;function i2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ml(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function s2(){const t=Ml("canvas");return t.style.display="block",t}const vp={};function xp(...t){const e="THREE."+t.shift();console.log(e,...t)}function c0(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function je(...t){t=c0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function dt(...t){t=c0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function bl(...t){const e=t.join(" ");e in vp||(vp[e]=!0,je(...t))}function r2(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const o2={[Bu]:ku,[zu]:Gu,[Vu]:Wu,[Rr]:Hu,[ku]:Bu,[Gu]:zu,[Wu]:Vu,[Hu]:Rr};class Fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yp=1234567;const So=Math.PI/180,Fo=180/Math.PI;function Or(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function rt(t,e,n){return Math.max(e,Math.min(n,t))}function xd(t,e){return(t%e+e)%e}function a2(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function l2(t,e,n){return t!==e?(n-t)/(e-t):0}function Mo(t,e,n){return(1-n)*t+n*e}function c2(t,e,n,i){return Mo(t,e,1-Math.exp(-n*i))}function u2(t,e=1){return e-Math.abs(xd(t,e*2)-e)}function f2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function d2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function h2(t,e){return t+Math.floor(Math.random()*(e-t+1))}function p2(t,e){return t+Math.random()*(e-t)}function m2(t){return t*(.5-Math.random())}function g2(t){t!==void 0&&(yp=t);let e=yp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _2(t){return t*So}function v2(t){return t*Fo}function x2(t){return(t&t-1)===0&&t!==0}function y2(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function S2(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function M2(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),h=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*d,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*m,l*h,a*c);break;case"YXY":t.set(l*h,a*u,l*m,a*c);break;case"ZYZ":t.set(l*m,l*h,a*u,a*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Xr={DEG2RAD:So,RAD2DEG:Fo,generateUUID:Or,clamp:rt,euclideanModulo:xd,mapLinear:a2,inverseLerp:l2,lerp:Mo,damp:c2,pingpong:u2,smoothstep:f2,smootherstep:d2,randInt:h2,randFloat:p2,randFloatSpread:m2,seededRandom:g2,degToRad:_2,radToDeg:v2,isPowerOfTwo:x2,ceilPowerOfTwo:y2,floorPowerOfTwo:S2,setQuaternionFromProperEuler:M2,normalize:rn,denormalize:hr};class ut{constructor(e=0,n=0){ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Br{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==f||c!==h||u!==m){let p=l*f+c*h+u*m+d*_;p<0&&(f=-f,h=-h,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){const x=Math.acos(p),E=Math.sin(x);g=Math.sin(g*x)/E,a=Math.sin(a*x)/E,l=l*g+f*a,c=c*g+h*a,u=u*g+m*a,d=d*g+_*a}else{l=l*g+f*a,c=c*g+h*a,u=u*g+m*a,d=d*g+_*a;const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],m=r[o+3];return e[n]=a*m+u*d+l*h-c*f,e[n+1]=l*m+u*f+c*d-a*h,e[n+2]=c*m+u*h+a*f-l*d,e[n+3]=u*m-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"YXZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"ZXY":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"ZYX":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"YZX":this._x=f*u*d+c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d-f*h*m;break;case"XZY":this._x=f*u*d-c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d+f*h*m;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new W,Sp=new Br;class tt{constructor(e,n,i,s,r,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],m=i[8],_=s[0],p=s[3],g=s[6],x=s[1],E=s[4],y=s[7],T=s[2],C=s[5],L=s[8];return r[0]=o*_+a*x+l*T,r[3]=o*p+a*E+l*C,r[6]=o*g+a*y+l*L,r[1]=c*_+u*x+d*T,r[4]=c*p+u*E+d*C,r[7]=c*g+u*y+d*L,r[2]=f*_+h*x+m*T,r[5]=f*p+h*E+m*C,r[8]=f*g+h*y+m*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,m=n*d+i*f+s*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*n-s*l)*_,e[5]=(s*r-a*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*r)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ic.makeScale(e,n)),this}rotate(e){return this.premultiply(Ic.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ic.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ic=new tt,Mp=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bp=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b2(){const t={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=Mr(s.r),s.g=Mr(s.g),s.b=Mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?yl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Dr]:{primaries:e,whitePoint:i,transfer:yl,toXYZ:Mp,fromXYZ:bp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Mp,fromXYZ:bp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),t}const lt=b2();function Bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Mr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Qs;class E2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qs===void 0&&(Qs=Ml("canvas")),Qs.width=e.width,Qs.height=e.height;const s=Qs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Qs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ml("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bi(n[i]/255)*255):n[i]=Bi(n[i]);return{data:n,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w2=0;class yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w2++}),this.uuid=Or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nc(s[o].image)):r.push(Nc(s[o]))}else r=Nc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Nc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?E2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let T2=0;const Uc=new W;class fn extends Fr{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Fi,s=Fi,r=tn,o=Ns,a=$n,l=On,c=fn.DEFAULT_ANISOTROPY,u=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T2++}),this.uuid=Or(),this.name="",this.source=new yd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uc).x}get height(){return this.source.getSize(Uc).y}get depth(){return this.source.getSize(Uc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){je(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){je(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $u:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Xu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $u:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Xu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=t0;fn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,s=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,y=(h+1)/2,T=(g+1)/2,C=(u+f)/4,L=(d+_)/4,S=(m+p)/4;return E>y&&E>T?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=C/i,r=L/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=S/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=L/r,s=S/r),this.set(i,s,r,n),this}let x=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(d-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this.w=rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this.w=rt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A2 extends Fr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new fn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new yd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends A2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class u0 extends fn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class C2 extends fn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rt{constructor(e,n,i,s,r,o,a,l,c,u,d,f,h,m,_,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,d,f,h,m,_,p)}set(e,n,i,s,r,o,a,l,c,u,d,f,h,m,_,p){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),o=1/er.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,m=a*u,_=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+m*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=m+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,m=c*u,_=c*d;n[0]=f+_*a,n[4]=m*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-m,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,m=c*u,_=c*d;n[0]=f-_*a,n[4]=-o*d,n[8]=m+h*a,n[1]=h+m*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,m=a*u,_=a*d;n[0]=l*u,n[4]=m*c-h,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=h*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,m=a*l,_=a*c;n[0]=l*u,n[4]=_-f*d,n[8]=m*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+m,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,h=o*c,m=a*l,_=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+_,n[5]=o*u,n[9]=h*d-m,n[2]=m*d-h,n[6]=a*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R2,e,P2)}lookAt(e,n,i){const s=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Zi.crossVectors(i,Sn),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Zi.crossVectors(i,Sn)),Zi.normalize(),da.crossVectors(Sn,Zi),s[0]=Zi.x,s[4]=da.x,s[8]=Sn.x,s[1]=Zi.y,s[5]=da.y,s[9]=Sn.y,s[2]=Zi.z,s[6]=da.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],m=i[2],_=i[6],p=i[10],g=i[14],x=i[3],E=i[7],y=i[11],T=i[15],C=s[0],L=s[4],S=s[8],M=s[12],N=s[1],D=s[5],U=s[9],V=s[13],$=s[2],B=s[6],w=s[10],A=s[14],O=s[3],X=s[7],oe=s[11],he=s[15];return r[0]=o*C+a*N+l*$+c*O,r[4]=o*L+a*D+l*B+c*X,r[8]=o*S+a*U+l*w+c*oe,r[12]=o*M+a*V+l*A+c*he,r[1]=u*C+d*N+f*$+h*O,r[5]=u*L+d*D+f*B+h*X,r[9]=u*S+d*U+f*w+h*oe,r[13]=u*M+d*V+f*A+h*he,r[2]=m*C+_*N+p*$+g*O,r[6]=m*L+_*D+p*B+g*X,r[10]=m*S+_*U+p*w+g*oe,r[14]=m*M+_*V+p*A+g*he,r[3]=x*C+E*N+y*$+T*O,r[7]=x*L+E*D+y*B+T*X,r[11]=x*S+E*U+y*w+T*oe,r[15]=x*M+E*V+y*A+T*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],m=e[3],_=e[7],p=e[11],g=e[15],x=l*h-c*f,E=a*h-c*d,y=a*f-l*d,T=o*h-c*u,C=o*f-l*u,L=o*d-a*u;return n*(_*x-p*E+g*y)-i*(m*x-p*T+g*C)+s*(m*E-_*T+g*L)-r*(m*y-_*C+p*L)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],m=e[12],_=e[13],p=e[14],g=e[15],x=n*a-i*o,E=n*l-s*o,y=n*c-r*o,T=i*l-s*a,C=i*c-r*a,L=s*c-r*l,S=u*_-d*m,M=u*p-f*m,N=u*g-h*m,D=d*p-f*_,U=d*g-h*_,V=f*g-h*p,$=x*V-E*U+y*D+T*N-C*M+L*S;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/$;return e[0]=(a*V-l*U+c*D)*B,e[1]=(s*U-i*V-r*D)*B,e[2]=(_*L-p*C+g*T)*B,e[3]=(f*C-d*L-h*T)*B,e[4]=(l*N-o*V-c*M)*B,e[5]=(n*V-s*N+r*M)*B,e[6]=(p*y-m*L-g*E)*B,e[7]=(u*L-f*y+h*E)*B,e[8]=(o*U-a*N+c*S)*B,e[9]=(i*N-n*U-r*S)*B,e[10]=(m*C-_*y+g*x)*B,e[11]=(d*y-u*C-h*x)*B,e[12]=(a*M-o*D-l*S)*B,e[13]=(n*D-i*M+s*S)*B,e[14]=(_*E-m*T-p*x)*B,e[15]=(u*T-d*E+f*x)*B,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,m=r*d,_=o*u,p=o*d,g=a*d,x=l*c,E=l*u,y=l*d,T=i.x,C=i.y,L=i.z;return s[0]=(1-(_+g))*T,s[1]=(h+y)*T,s[2]=(m-E)*T,s[3]=0,s[4]=(h-y)*C,s[5]=(1-(f+g))*C,s[6]=(p+x)*C,s[7]=0,s[8]=(m+E)*L,s[9]=(p-x)*L,s[10]=(1-(f+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=er.set(s[0],s[1],s[2]).length();const a=er.set(s[4],s[5],s[6]).length(),l=er.set(s[8],s[9],s[10]).length();r<0&&(o=-o),kn.copy(this);const c=1/o,u=1/a,d=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,n.setFromRotationMatrix(kn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=pi,l=!1){const c=this.elements,u=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===pi)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Sl)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=pi,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),h=-(i+s)/(i-s);let m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===pi)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Sl)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const er=new W,kn=new Rt,R2=new W(0,0,0),P2=new W(1,1,1),Zi=new W,da=new W,Sn=new W,Ep=new Rt,wp=new Br;class $i{constructor(e=0,n=0,i=0,s=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ep,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wp.setFromEuler(this),this.setFromQuaternion(wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class f0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L2=0;const Tp=new W,tr=new Br,Ai=new Rt,ha=new W,qr=new W,D2=new W,I2=new Br,Ap=new W(1,0,0),Cp=new W(0,1,0),Rp=new W(0,0,1),Pp={type:"added"},N2={type:"removed"},nr={type:"childadded",child:null},Fc={type:"childremoved",child:null};class dn extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L2++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new W,n=new $i,i=new Br,s=new W(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new tt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return tr.setFromAxisAngle(e,n),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,n){return tr.setFromAxisAngle(e,n),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(Ap,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(Rp,e)}translateOnAxis(e,n){return Tp.copy(e).applyQuaternion(this.quaternion),this.position.add(Tp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ap,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(Rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ha.copy(e):ha.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(qr,ha,this.up):Ai.lookAt(ha,qr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Ai),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pp),nr.child=e,this.dispatchEvent(nr),nr.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(N2),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pp),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,D2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,I2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}dn.DEFAULT_UP=new W(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class oo extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U2={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,m=.005;c.inputState.pinching&&f>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new oo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Bc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ct{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=lt.workingColorSpace){if(e=xd(e,1),n=rt(n,0,1),i=rt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Bc(o,r,e+1/3),this.g=Bc(o,r,e),this.b=Bc(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,n=Un){function i(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=d0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return lt.workingToColorSpace(Yt.copy(this),e),Math.round(rt(Yt.r*255,0,255))*65536+Math.round(rt(Yt.g*255,0,255))*256+Math.round(rt(Yt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.workingToColorSpace(Yt.copy(this),n);const i=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.workingToColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Un){lt.workingToColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,s=Yt.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+n,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ji),e.getHSL(pa);const i=Mo(Ji.h,pa.h,n),s=Mo(Ji.s,pa.s,n),r=Mo(Ji.l,pa.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new ct;ct.NAMES=d0;class F2 extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zn=new W,Ci=new W,kc=new W,Ri=new W,ir=new W,sr=new W,Lp=new W,zc=new W,Vc=new W,Hc=new W,Gc=new Nt,Wc=new Nt,$c=new Nt;class Wn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),zn.subVectors(e,n),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){zn.subVectors(s,n),Ci.subVectors(i,n),kc.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(Ci),l=zn.dot(kc),c=Ci.dot(Ci),u=Ci.dot(kc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-h-m,m,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Gc.setScalar(0),Wc.setScalar(0),$c.setScalar(0),Gc.fromBufferAttribute(e,n),Wc.fromBufferAttribute(e,i),$c.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Gc,r.x),o.addScaledVector(Wc,r.y),o.addScaledVector($c,r.z),o}static isFrontFacing(e,n,i,s){return zn.subVectors(i,n),Ci.subVectors(e,n),zn.cross(Ci).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),zn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;ir.subVectors(s,i),sr.subVectors(r,i),zc.subVectors(e,i);const l=ir.dot(zc),c=sr.dot(zc);if(l<=0&&c<=0)return n.copy(i);Vc.subVectors(e,s);const u=ir.dot(Vc),d=sr.dot(Vc);if(u>=0&&d<=u)return n.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ir,o);Hc.subVectors(e,r);const h=ir.dot(Hc),m=sr.dot(Hc);if(m>=0&&h<=m)return n.copy(r);const _=h*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(sr,a);const p=u*m-h*d;if(p<=0&&d-u>=0&&h-m>=0)return Lp.subVectors(r,s),a=(d-u)/(d-u+(h-m)),n.copy(s).addScaledVector(Lp,a);const g=1/(p+_+f);return o=_*g,a=f*g,n.copy(i).addScaledVector(ir,o).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ko{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ma.copy(i.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),ga.subVectors(this.max,Yr),rr.subVectors(e.a,Yr),or.subVectors(e.b,Yr),ar.subVectors(e.c,Yr),Qi.subVectors(or,rr),es.subVectors(ar,or),xs.subVectors(rr,ar);let n=[0,-Qi.z,Qi.y,0,-es.z,es.y,0,-xs.z,xs.y,Qi.z,0,-Qi.x,es.z,0,-es.x,xs.z,0,-xs.x,-Qi.y,Qi.x,0,-es.y,es.x,0,-xs.y,xs.x,0];return!Xc(n,rr,or,ar,ga)||(n=[1,0,0,0,1,0,0,0,1],!Xc(n,rr,or,ar,ga))?!1:(_a.crossVectors(Qi,es),n=[_a.x,_a.y,_a.z],Xc(n,rr,or,ar,ga))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new W,new W,new W,new W,new W,new W,new W,new W],Vn=new W,ma=new Ko,rr=new W,or=new W,ar=new W,Qi=new W,es=new W,xs=new W,Yr=new W,ga=new W,_a=new W,ys=new W;function Xc(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){ys.fromArray(t,r);const a=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=e.dot(ys),c=n.dot(ys),u=i.dot(ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ft=new W,va=new ut;let O2=0;class An{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gp,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)va.fromBufferAttribute(this,n),va.applyMatrix3(e),this.setXY(n,va.x,va.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=hr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=hr(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=hr(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=hr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=hr(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gp&&(e.usage=this.usage),e}}class h0 extends An{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class p0 extends An{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ot extends An{constructor(e,n,i){super(new Float32Array(e),n,i)}}const B2=new Ko,jr=new W,qc=new W;class Zo{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):B2.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);const n=jr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(jr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(qc)),this.expandByPoint(jr.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let k2=0;const In=new Rt,Yc=new dn,lr=new W,Mn=new Ko,Kr=new Ko,Ht=new W;class nn extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k2++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i2(e)?p0:h0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ot(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Mn.min,Kr.min),Mn.expandByPoint(Ht),Ht.addVectors(Mn.max,Kr.max),Mn.expandByPoint(Ht)):(Mn.expandByPoint(Kr.min),Mn.expandByPoint(Kr.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(lr.fromBufferAttribute(e,c),Ht.add(lr)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new W,l[S]=new W;const c=new W,u=new W,d=new W,f=new ut,h=new ut,m=new ut,_=new W,p=new W;function g(S,M,N){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,N),f.fromBufferAttribute(r,S),h.fromBufferAttribute(r,M),m.fromBufferAttribute(r,N),u.sub(c),d.sub(c),h.sub(f),m.sub(f);const D=1/(h.x*m.y-m.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(D),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-m.x).multiplyScalar(D),a[S].add(_),a[M].add(_),a[N].add(_),l[S].add(p),l[M].add(p),l[N].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,M=x.length;S<M;++S){const N=x[S],D=N.start,U=N.count;for(let V=D,$=D+U;V<$;V+=3)g(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const E=new W,y=new W,T=new W,C=new W;function L(S){T.fromBufferAttribute(s,S),C.copy(T);const M=a[S];E.copy(M),E.sub(T.multiplyScalar(T.dot(M))).normalize(),y.crossVectors(C,M);const D=y.dot(l[S])<0?-1:1;o.setXYZW(S,E.x,E.y,E.z,D)}for(let S=0,M=x.length;S<M;++S){const N=x[S],D=N.start,U=N.count;for(let V=D,$=D+U;V<$;V+=3)L(e.getX(V+0)),L(e.getX(V+1)),L(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new W,r=new W,o=new W,a=new W,l=new W,c=new W,u=new W,d=new W;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(n,m),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let g=0;g<u;g++)f[m++]=c[h++]}return new An(f,u,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new nn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let z2=0;class kr extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z2++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=Sr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fu,this.blendDst=Ou,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){je(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){je(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ou&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Li=new W,jc=new W,xa=new W,ts=new W,Kc=new W,ya=new W,Zc=new W;class Sd{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){jc.copy(e).add(n).multiplyScalar(.5),xa.copy(n).sub(e).normalize(),ts.copy(this.origin).sub(jc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(xa),a=ts.dot(this.direction),l=-ts.dot(xa),c=ts.lengthSq(),u=Math.abs(1-o*o);let d,f,h,m;if(u>0)if(d=o*l-a,f=o*a-l,m=r*u,d>=0)if(f>=-m)if(f<=m){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(jc).addScaledVector(xa,f),h}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,s,r){Kc.subVectors(n,e),ya.subVectors(i,e),Zc.crossVectors(Kc,ya);let o=this.direction.dot(Zc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,e);const l=a*this.direction.dot(ya.crossVectors(ts,ya));if(l<0)return null;const c=a*this.direction.dot(Kc.cross(ts));if(c<0||l+c>o)return null;const u=-a*ts.dot(Zc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ps extends kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dp=new Rt,Ss=new Sd,Sa=new Zo,Ip=new W,Ma=new W,ba=new W,Ea=new W,Jc=new W,wa=new W,Np=new W,Ta=new W;class Zt extends dn{constructor(e=new nn,n=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Jc.fromBufferAttribute(d,e),o?wa.addScaledVector(Jc,u):wa.addScaledVector(Jc.sub(n),u))}n.add(wa)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(Sa.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Sa,Ip)===null||Ss.origin.distanceToSquared(Ip)>(e.far-e.near)**2))&&(Dp.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(Dp),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ss)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o[p.materialIndex],x=Math.max(p.start,h.start),E=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let y=x,T=E;y<T;y+=3){const C=a.getX(y),L=a.getX(y+1),S=a.getX(y+2);s=Aa(this,g,e,i,c,u,d,C,L,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=m,g=_;p<g;p+=3){const x=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);s=Aa(this,o,e,i,c,u,d,x,E,y),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o[p.materialIndex],x=Math.max(p.start,h.start),E=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let y=x,T=E;y<T;y+=3){const C=y,L=y+1,S=y+2;s=Aa(this,g,e,i,c,u,d,C,L,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=m,g=_;p<g;p+=3){const x=p,E=p+1,y=p+2;s=Aa(this,o,e,i,c,u,d,x,E,y),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}}}function V2(t,e,n,i,s,r,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ds,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ta);return c<n.near||c>n.far?null:{distance:c,point:Ta.clone(),object:t}}function Aa(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Ma),t.getVertexPosition(l,ba),t.getVertexPosition(c,Ea);const u=V2(t,e,n,i,Ma,ba,Ea,Np);if(u){const d=new W;Wn.getBarycoord(Np,Ma,ba,Ea,d),s&&(u.uv=Wn.getInterpolatedAttribute(s,a,l,c,d,new ut)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,a,l,c,d,new ut)),o&&(u.normal=Wn.getInterpolatedAttribute(o,a,l,c,d,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new W,materialIndex:0};Wn.getNormal(Ma,ba,Ea,f.normal),u.face=f,u.barycoord=d}return u}class H2 extends fn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=$t,u=$t,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qc=new W,G2=new W,W2=new tt;class Ts{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Qc.subVectors(i,n).cross(G2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Qc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||W2.getNormalMatrix(e),s=this.coplanarPoint(Qc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new Zo,$2=new ut(.5,.5),Ca=new W;class m0{constructor(e=new Ts,n=new Ts,i=new Ts,s=new Ts,r=new Ts,o=new Ts){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],m=r[8],_=r[9],p=r[10],g=r[11],x=r[12],E=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-o,h-u,g-m,T-x).normalize(),s[1].setComponents(c+o,h+u,g+m,T+x).normalize(),s[2].setComponents(c+a,h+d,g+_,T+E).normalize(),s[3].setComponents(c-a,h-d,g-_,T-E).normalize(),i)s[4].setComponents(l,f,p,y).normalize(),s[5].setComponents(c-l,h-f,g-p,T-y).normalize();else if(s[4].setComponents(c-l,h-f,g-p,T-y).normalize(),n===pi)s[5].setComponents(c+l,h+f,g+p,T+y).normalize();else if(n===Sl)s[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const n=$2.distanceTo(e.center);return Ms.radius=.7071067811865476+n,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Ca.x=s.normal.x>0?e.max.x:e.min.x,Ca.y=s.normal.y>0?e.max.y:e.min.y,Ca.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tf extends kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const El=new W,wl=new W,Up=new Rt,Zr=new Sd,Ra=new Zo,eu=new W,Fp=new W;class g0 extends dn{constructor(e=new nn,n=new Tf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)El.fromBufferAttribute(n,s-1),wl.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=El.distanceTo(wl);e.setAttribute("lineDistance",new Ot(i,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;Up.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(Up);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=h,p=m-1;_<p;_+=c){const g=u.getX(_),x=u.getX(_+1),E=Pa(this,e,Zr,l,g,x,_);E&&n.push(E)}if(this.isLineLoop){const _=u.getX(m-1),p=u.getX(h),g=Pa(this,e,Zr,l,_,p,m-1);g&&n.push(g)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=h,p=m-1;_<p;_+=c){const g=Pa(this,e,Zr,l,_,_+1,_);g&&n.push(g)}if(this.isLineLoop){const _=Pa(this,e,Zr,l,m-1,h,m-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Pa(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(El.fromBufferAttribute(a,s),wl.fromBufferAttribute(a,r),n.distanceSqToSegment(El,wl,eu,Fp)>i)return;eu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(eu);if(!(c<e.near||c>e.far))return{distance:c,point:Fp.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Op=new W,Bp=new W;class X2 extends g0{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Op.fromBufferAttribute(n,s),Bp.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Op.distanceTo(Bp);e.setAttribute("lineDistance",new Ot(i,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class q2 extends kr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kp=new Rt,Af=new Sd,La=new Zo,Da=new W;class zp extends dn{constructor(e=new nn,n=new q2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(s),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;kp.copy(s).invert(),Af.copy(e.ray).applyMatrix4(kp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let m=f,_=h;m<_;m++){const p=c.getX(m);Da.fromBufferAttribute(d,p),Vp(Da,p,l,s,e,n,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let m=f,_=h;m<_;m++)Da.fromBufferAttribute(d,m),Vp(Da,m,l,s,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vp(t,e,n,i,s,r,o){const a=Af.distanceSqToPoint(t);if(a<n){const l=new W;Af.closestPointToPoint(t,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class _0 extends fn{constructor(e=[],n=Ws,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oo extends fn{constructor(e,n,i=Si,s,r,o,a=$t,l=$t,c,u=Wi,d=1){if(u!==Wi&&u!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Y2 extends Oo{constructor(e,n=Si,i=Ws,s,r,o=$t,a=$t,l,c=Wi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class v0 extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jo extends nn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,i,n,e,o,r,0),m("z","y","x",1,-1,i,n,-e,o,r,1),m("x","z","y",1,1,e,i,n,s,o,2),m("x","z","y",1,-1,e,i,-n,s,o,3),m("x","y","z",1,-1,e,n,i,s,r,4),m("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(d,2));function m(_,p,g,x,E,y,T,C,L,S,M){const N=y/L,D=T/S,U=y/2,V=T/2,$=C/2,B=L+1,w=S+1;let A=0,O=0;const X=new W;for(let oe=0;oe<w;oe++){const he=oe*D-V;for(let ie=0;ie<B;ie++){const ae=ie*N-U;X[_]=ae*x,X[p]=he*E,X[g]=$,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[g]=C>0?1:-1,u.push(X.x,X.y,X.z),d.push(ie/L),d.push(1-oe/S),A+=1}}for(let oe=0;oe<S;oe++)for(let he=0;he<L;he++){const ie=f+he+B*oe,ae=f+he+B*(oe+1),Ue=f+(he+1)+B*(oe+1),ze=f+(he+1)+B*oe;l.push(ie,ae,ze),l.push(ae,Ue,ze),O+=6}a.addGroup(h,O,M),h+=O,f+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Md extends nn{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(r.slice(),3)),this.setAttribute("uv",new Ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const E=new W,y=new W,T=new W;for(let C=0;C<n.length;C+=3)h(n[C+0],E),h(n[C+1],y),h(n[C+2],T),l(E,y,T,x)}function l(x,E,y,T){const C=T+1,L=[];for(let S=0;S<=C;S++){L[S]=[];const M=x.clone().lerp(y,S/C),N=E.clone().lerp(y,S/C),D=C-S;for(let U=0;U<=D;U++)U===0&&S===C?L[S][U]=M:L[S][U]=M.clone().lerp(N,U/D)}for(let S=0;S<C;S++)for(let M=0;M<2*(C-S)-1;M++){const N=Math.floor(M/2);M%2===0?(f(L[S][N+1]),f(L[S+1][N]),f(L[S][N])):(f(L[S][N+1]),f(L[S+1][N+1]),f(L[S+1][N]))}}function c(x){const E=new W;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(x),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function u(){const x=new W;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];const y=p(x)/2/Math.PI+.5,T=g(x)/Math.PI+.5;o.push(y,1-T)}m(),d()}function d(){for(let x=0;x<o.length;x+=6){const E=o[x+0],y=o[x+2],T=o[x+4],C=Math.max(E,y,T),L=Math.min(E,y,T);C>.9&&L<.1&&(E<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function h(x,E){const y=x*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function m(){const x=new W,E=new W,y=new W,T=new W,C=new ut,L=new ut,S=new ut;for(let M=0,N=0;M<r.length;M+=9,N+=6){x.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),C.set(o[N+0],o[N+1]),L.set(o[N+2],o[N+3]),S.set(o[N+4],o[N+5]),T.copy(x).add(E).add(y).divideScalar(3);const D=p(T);_(C,N+0,x,D),_(L,N+2,E,D),_(S,N+4,y,D)}}function _(x,E,y,T){T<0&&x.x===1&&(o[E]=x.x-1),y.x===0&&y.z===0&&(o[E]=T/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Md(e.vertices,e.indices,e.radius,e.detail)}}class j2{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let s=0;const r=i.length;let o;n?o=n:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=n||(o.isVector2?new ut:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new W,s=[],r=[],o=[],a=new W,l=new Rt;for(let h=0;h<=e;h++){const m=h/e;s[h]=this.getTangentAt(m,new W)}r[0]=new W,o[0]=new W;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(rt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,m))}o[h].crossVectors(s[h],r[h])}if(n===!0){let h=Math.acos(rt(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],h*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function K2(t,e){const n=1-t;return n*n*e}function Z2(t,e){return 2*(1-t)*t*e}function J2(t,e){return t*t*e}function tu(t,e,n,i){return K2(t,e)+Z2(t,n)+J2(t,i)}class Q2 extends j2{constructor(e=new W,n=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new W){const i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(tu(e,s.x,r.x,o.x),tu(e,s.y,r.y,o.y),tu(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tl extends Md{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Tl(e.radius,e.detail)}}class nc extends nn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=n/l,h=[],m=[],_=[],p=[];for(let g=0;g<u;g++){const x=g*f-o;for(let E=0;E<c;E++){const y=E*d-r;m.push(y,-x,0),_.push(0,0,1),p.push(E/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const E=x+c*g,y=x+c*(g+1),T=x+1+c*(g+1),C=x+1+c*g;h.push(E,y,C),h.push(y,T,C)}this.setIndex(h),this.setAttribute("position",new Ot(m,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.width,e.height,e.widthSegments,e.heightSegments)}}class bd extends nn{constructor(e=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let d=e;const f=(n-e)/s,h=new W,m=new ut;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){const g=r+p/i*o;h.x=d*Math.cos(g),h.y=d*Math.sin(g),l.push(h.x,h.y,h.z),c.push(0,0,1),m.x=(h.x/n+1)/2,m.y=(h.y/n+1)/2,u.push(m.x,m.y)}d+=f}for(let _=0;_<s;_++){const p=_*(i+1);for(let g=0;g<i;g++){const x=g+p,E=x,y=x+i+1,T=x+i+2,C=x+1;a.push(E,y,C),a.push(y,T,C)}}this.setIndex(a),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Al extends nn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new W,f=new W,h=[],m=[],_=[],p=[];for(let g=0;g<=i;g++){const x=[],E=g/i;let y=0;g===0&&o===0?y=.5/n:g===i&&l===Math.PI&&(y=-.5/n);for(let T=0;T<=n;T++){const C=T/n;d.x=-e*Math.cos(s+C*r)*Math.sin(o+E*a),d.y=e*Math.cos(o+E*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+E*a),m.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(C+y,1-E),x.push(c++)}u.push(x)}for(let g=0;g<i;g++)for(let x=0;x<n;x++){const E=u[g][x+1],y=u[g][x],T=u[g+1][x],C=u[g+1][x+1];(g!==0||o>0)&&h.push(E,y,C),(g!==i-1||l<Math.PI)&&h.push(y,T,C)}this.setIndex(h),this.setAttribute("position",new Ot(m,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ir(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=Ir(t[n]);for(const s in i)e[s]=i[s]}return e}function eL(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function x0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const tL={clone:Ir,merge:on};var nL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nL,this.fragmentShader=iL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=eL(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class sL extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rL extends kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oL extends kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ia=new W,Na=new Br,ni=new W;class y0 extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ia,Na,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Na,ni.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Ia,Na,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Na,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new W,Hp=new ut,Gp=new ut;class Fn extends y0{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,n){return this.getViewBounds(e,Hp,Gp),n.subVectors(Gp,Hp)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(So*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class S0 extends y0{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const cr=-90,ur=1;class aL extends dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fn(cr,ur,e,n);s.layers=this.layers,this.add(s);const r=new Fn(cr,ur,e,n);r.layers=this.layers,this.add(r);const o=new Fn(cr,ur,e,n);o.layers=this.layers,this.add(o);const a=new Fn(cr,ur,e,n);a.layers=this.layers,this.add(a);const l=new Fn(cr,ur,e,n);l.layers=this.layers,this.add(l);const c=new Fn(cr,ur,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class lL extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Wp(t,e,n,i){const s=cL(i);switch(n){case o0:return t*e;case l0:return t*e/s.components*s.byteLength;case pd:return t*e/s.components*s.byteLength;case Lr:return t*e*2/s.components*s.byteLength;case md:return t*e*2/s.components*s.byteLength;case a0:return t*e*3/s.components*s.byteLength;case $n:return t*e*4/s.components*s.byteLength;case gd:return t*e*4/s.components*s.byteLength;case ja:case Ka:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Za:case Ja:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yu:case Ku:return Math.max(t,16)*Math.max(e,8)/4;case qu:case ju:return Math.max(t,8)*Math.max(e,8)/2;case Zu:case Ju:case ef:case tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qu:case nf:case sf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case of:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case af:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case lf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case cf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case uf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ff:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case df:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case hf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case pf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case mf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case gf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _f:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case vf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case xf:case yf:case Sf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Mf:case bf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ef:case wf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cL(t){switch(t){case On:case n0:return{byteLength:1,components:1};case No:case i0:case Gi:return{byteLength:2,components:1};case dd:case hd:return{byteLength:2,components:4};case Si:case fd:case hi:return{byteLength:4,components:1};case s0:case r0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ud}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ud);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function M0(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function uL(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){const m=d[f],_=d[h];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){const _=d[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var fL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dL=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_L=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xL=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ML=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bL=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EL=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,LL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,DL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,NL=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UL=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FL=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VL="gl_FragColor = linearToOutputTexel( gl_FragColor );",HL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,WL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$L=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JL=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dD=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_D=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ED=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ID=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ND=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$D=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rI=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fI=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hI=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_I=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vI=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xI=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MI=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bI=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wI=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TI=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RI=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,II=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zI=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:fL,alphahash_pars_fragment:dL,alphamap_fragment:hL,alphamap_pars_fragment:pL,alphatest_fragment:mL,alphatest_pars_fragment:gL,aomap_fragment:_L,aomap_pars_fragment:vL,batching_pars_vertex:xL,batching_vertex:yL,begin_vertex:SL,beginnormal_vertex:ML,bsdfs:bL,iridescence_fragment:EL,bumpmap_pars_fragment:wL,clipping_planes_fragment:TL,clipping_planes_pars_fragment:AL,clipping_planes_pars_vertex:CL,clipping_planes_vertex:RL,color_fragment:PL,color_pars_fragment:LL,color_pars_vertex:DL,color_vertex:IL,common:NL,cube_uv_reflection_fragment:UL,defaultnormal_vertex:FL,displacementmap_pars_vertex:OL,displacementmap_vertex:BL,emissivemap_fragment:kL,emissivemap_pars_fragment:zL,colorspace_fragment:VL,colorspace_pars_fragment:HL,envmap_fragment:GL,envmap_common_pars_fragment:WL,envmap_pars_fragment:$L,envmap_pars_vertex:XL,envmap_physical_pars_fragment:iD,envmap_vertex:qL,fog_vertex:YL,fog_pars_vertex:jL,fog_fragment:KL,fog_pars_fragment:ZL,gradientmap_pars_fragment:JL,lightmap_pars_fragment:QL,lights_lambert_fragment:eD,lights_lambert_pars_fragment:tD,lights_pars_begin:nD,lights_toon_fragment:sD,lights_toon_pars_fragment:rD,lights_phong_fragment:oD,lights_phong_pars_fragment:aD,lights_physical_fragment:lD,lights_physical_pars_fragment:cD,lights_fragment_begin:uD,lights_fragment_maps:fD,lights_fragment_end:dD,logdepthbuf_fragment:hD,logdepthbuf_pars_fragment:pD,logdepthbuf_pars_vertex:mD,logdepthbuf_vertex:gD,map_fragment:_D,map_pars_fragment:vD,map_particle_fragment:xD,map_particle_pars_fragment:yD,metalnessmap_fragment:SD,metalnessmap_pars_fragment:MD,morphinstance_vertex:bD,morphcolor_vertex:ED,morphnormal_vertex:wD,morphtarget_pars_vertex:TD,morphtarget_vertex:AD,normal_fragment_begin:CD,normal_fragment_maps:RD,normal_pars_fragment:PD,normal_pars_vertex:LD,normal_vertex:DD,normalmap_pars_fragment:ID,clearcoat_normal_fragment_begin:ND,clearcoat_normal_fragment_maps:UD,clearcoat_pars_fragment:FD,iridescence_pars_fragment:OD,opaque_fragment:BD,packing:kD,premultiplied_alpha_fragment:zD,project_vertex:VD,dithering_fragment:HD,dithering_pars_fragment:GD,roughnessmap_fragment:WD,roughnessmap_pars_fragment:$D,shadowmap_pars_fragment:XD,shadowmap_pars_vertex:qD,shadowmap_vertex:YD,shadowmask_pars_fragment:jD,skinbase_vertex:KD,skinning_pars_vertex:ZD,skinning_vertex:JD,skinnormal_vertex:QD,specularmap_fragment:eI,specularmap_pars_fragment:tI,tonemapping_fragment:nI,tonemapping_pars_fragment:iI,transmission_fragment:sI,transmission_pars_fragment:rI,uv_pars_fragment:oI,uv_pars_vertex:aI,uv_vertex:lI,worldpos_vertex:cI,background_vert:uI,background_frag:fI,backgroundCube_vert:dI,backgroundCube_frag:hI,cube_vert:pI,cube_frag:mI,depth_vert:gI,depth_frag:_I,distance_vert:vI,distance_frag:xI,equirect_vert:yI,equirect_frag:SI,linedashed_vert:MI,linedashed_frag:bI,meshbasic_vert:EI,meshbasic_frag:wI,meshlambert_vert:TI,meshlambert_frag:AI,meshmatcap_vert:CI,meshmatcap_frag:RI,meshnormal_vert:PI,meshnormal_frag:LI,meshphong_vert:DI,meshphong_frag:II,meshphysical_vert:NI,meshphysical_frag:UI,meshtoon_vert:FI,meshtoon_frag:OI,points_vert:BI,points_frag:kI,shadow_vert:zI,shadow_frag:VI,sprite_vert:HI,sprite_frag:GI},Re={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ci={basic:{uniforms:on([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:on([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:on([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:on([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:on([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ct(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:on([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:on([Re.points,Re.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:on([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:on([Re.common,Re.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:on([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:on([Re.sprite,Re.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:on([Re.common,Re.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:on([Re.lights,Re.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ci.physical={uniforms:on([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Ua={r:0,b:0,g:0},bs=new $i,WI=new Rt;function $I(t,e,n,i,s,r){const o=new ct(0);let a=s===!0?0:1,l,c,u=null,d=0,f=null;function h(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const y=x.backgroundBlurriness>0;E=e.get(E,y)}return E}function m(x){let E=!1;const y=h(x);y===null?p(o,a):y&&y.isColor&&(p(y,1),E=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(x,E){const y=h(E);y&&(y.isCubeTexture||y.mapping===tc)?(c===void 0&&(c=new Zt(new Jo(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ir(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),bs.copy(E.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(WI.makeRotationFromEuler(bs)),c.material.toneMapped=lt.getTransfer(y.colorSpace)!==vt,(u!==y||d!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Zt(new nc(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ir(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,E){x.getRGB(Ua,x0(t)),n.buffers.color.setClear(Ua.r,Ua.g,Ua.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,E=1){o.set(x),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:m,addToRenderList:_,dispose:g}}function XI(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(D,U,V,$,B){let w=!1;const A=d(D,$,V,U);r!==A&&(r=A,c(r.object)),w=h(D,$,V,B),w&&m(D,$,V,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(w||o)&&(o=!1,y(D,U,V,$),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function d(D,U,V,$){const B=$.wireframe===!0;let w=i[U.id];w===void 0&&(w={},i[U.id]=w);const A=D.isInstancedMesh===!0?D.id:0;let O=w[A];O===void 0&&(O={},w[A]=O);let X=O[V.id];X===void 0&&(X={},O[V.id]=X);let oe=X[B];return oe===void 0&&(oe=f(l()),X[B]=oe),oe}function f(D){const U=[],V=[],$=[];for(let B=0;B<n;B++)U[B]=0,V[B]=0,$[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:$,object:D,attributes:{},index:null}}function h(D,U,V,$){const B=r.attributes,w=U.attributes;let A=0;const O=V.getAttributes();for(const X in O)if(O[X].location>=0){const he=B[X];let ie=w[X];if(ie===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),he===void 0||he.attribute!==ie||ie&&he.data!==ie.data)return!0;A++}return r.attributesNum!==A||r.index!==$}function m(D,U,V,$){const B={},w=U.attributes;let A=0;const O=V.getAttributes();for(const X in O)if(O[X].location>=0){let he=w[X];he===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(he=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(he=D.instanceColor));const ie={};ie.attribute=he,he&&he.data&&(ie.data=he.data),B[X]=ie,A++}r.attributes=B,r.attributesNum=A,r.index=$}function _(){const D=r.newAttributes;for(let U=0,V=D.length;U<V;U++)D[U]=0}function p(D){g(D,0)}function g(D,U){const V=r.newAttributes,$=r.enabledAttributes,B=r.attributeDivisors;V[D]=1,$[D]===0&&(t.enableVertexAttribArray(D),$[D]=1),B[D]!==U&&(t.vertexAttribDivisor(D,U),B[D]=U)}function x(){const D=r.newAttributes,U=r.enabledAttributes;for(let V=0,$=U.length;V<$;V++)U[V]!==D[V]&&(t.disableVertexAttribArray(V),U[V]=0)}function E(D,U,V,$,B,w,A){A===!0?t.vertexAttribIPointer(D,U,V,B,w):t.vertexAttribPointer(D,U,V,$,B,w)}function y(D,U,V,$){_();const B=$.attributes,w=V.getAttributes(),A=U.defaultAttributeValues;for(const O in w){const X=w[O];if(X.location>=0){let oe=B[O];if(oe===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),oe!==void 0){const he=oe.normalized,ie=oe.itemSize,ae=e.get(oe);if(ae===void 0)continue;const Ue=ae.buffer,ze=ae.type,te=ae.bytesPerElement,se=ze===t.INT||ze===t.UNSIGNED_INT||oe.gpuType===fd;if(oe.isInterleavedBufferAttribute){const _e=oe.data,Ye=_e.stride,Be=oe.offset;if(_e.isInstancedInterleavedBuffer){for(let $e=0;$e<X.locationSize;$e++)g(X.location+$e,_e.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let $e=0;$e<X.locationSize;$e++)p(X.location+$e);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let $e=0;$e<X.locationSize;$e++)E(X.location+$e,ie/X.locationSize,ze,he,Ye*te,(Be+ie/X.locationSize*$e)*te,se)}else{if(oe.isInstancedBufferAttribute){for(let _e=0;_e<X.locationSize;_e++)g(X.location+_e,oe.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<X.locationSize;_e++)p(X.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let _e=0;_e<X.locationSize;_e++)E(X.location+_e,ie/X.locationSize,ze,he,ie*te,ie/X.locationSize*_e*te,se)}}else if(A!==void 0){const he=A[O];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(X.location,he);break;case 3:t.vertexAttrib3fv(X.location,he);break;case 4:t.vertexAttrib4fv(X.location,he);break;default:t.vertexAttrib1fv(X.location,he)}}}}x()}function T(){M();for(const D in i){const U=i[D];for(const V in U){const $=U[V];for(const B in $){const w=$[B];for(const A in w)u(w[A].object),delete w[A];delete $[B]}}delete i[D]}}function C(D){if(i[D.id]===void 0)return;const U=i[D.id];for(const V in U){const $=U[V];for(const B in $){const w=$[B];for(const A in w)u(w[A].object),delete w[A];delete $[B]}}delete i[D.id]}function L(D){for(const U in i){const V=i[U];for(const $ in V){const B=V[$];if(B[D.id]===void 0)continue;const w=B[D.id];for(const A in w)u(w[A].object),delete w[A];delete B[D.id]}}}function S(D){for(const U in i){const V=i[U],$=D.isInstancedMesh===!0?D.id:0,B=V[$];if(B!==void 0){for(const w in B){const A=B[w];for(const O in A)u(A[O].object),delete A[O];delete B[w]}delete V[$],Object.keys(V).length===0&&delete i[U]}}}function M(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfObject:S,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function qI(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let m=0;m<d;m++)h+=u[m];n.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_]*f[_];n.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function YI(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==$n&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const S=L===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==On&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==hi&&!S)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:y,maxSamples:T,samples:C}}function jI(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Ts,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=t.get(d);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{const x=r?0:i,E=x*4;let y=g.clippingState||null;l.value=y,y=u(m,f,E,h);for(let T=0;T!==E;++T)y[T]=n[T];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,m){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=h+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,y=h;E!==_;++E,y+=4)o.copy(d[E]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const cs=4,$p=[.125,.215,.35,.446,.526,.582],Ls=20,KI=256,Jr=new S0,Xp=new ct;let nu=null,iu=0,su=0,ru=!1;const ZI=new W;class qp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=ZI}=r;nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nu,iu,su),this._renderer.xr.enabled=ru,e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Gi,format:$n,colorSpace:Dr,depthBuffer:!1},s=Yp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yp(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=JI(r)),this._blurMaterial=eN(r,e,n),this._ggxMaterial=QI(r,e,n)}return s}_compileMaterial(e){const n=new Zt(new nn,e);this._renderer.compile(n,Jr)}_sceneToCubeUV(e,n,i,s,r){const l=new Fn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Xp),d.toneMapping=vi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new Jo,new Ps({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,g=!0):(p.color.copy(Xp),g=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const T=this._cubeSize;fr(s,y*T,E>2?T:0,T,T),d.setRenderTarget(s),g&&d.render(_,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Ws||e.mapping===Pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jp());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;fr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Jr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:m}=this,_=this._sizeLods[i],p=3*_*(i>m-cs?i-m+cs:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-n,fr(r,p,g,3*_,2*_),s.setRenderTarget(r),s.render(a,Jr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,fr(e,p,g,3*_,2*_),s.setRenderTarget(e),s.render(a,Jr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Ls-1),_=r/m,p=isFinite(r)?1+Math.floor(u*_):Ls;p>Ls&&je(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ls}`);const g=[];let x=0;for(let L=0;L<Ls;++L){const S=L/_,M=Math.exp(-S*S/2);g.push(M),L===0?x+=M:L<p&&(x+=2*M)}for(let L=0;L<g.length;L++)g[L]=g[L]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=m,f.mipInt.value=E-i;const y=this._sizeLods[s],T=3*y*(s>E-cs?s-E+cs:0),C=4*(this._cubeSize-y);fr(n,T,C,3*y,2*y),l.setRenderTarget(n),l.render(d,Jr)}}function JI(t){const e=[],n=[],i=[];let s=t;const r=t-cs+1+$p.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-cs?l=$p[o-t+cs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,m=6,_=3,p=2,g=1,x=new Float32Array(_*m*h),E=new Float32Array(p*m*h),y=new Float32Array(g*m*h);for(let C=0;C<h;C++){const L=C%3*2/3-1,S=C>2?0:-1,M=[L,S,0,L+2/3,S,0,L+2/3,S+1,0,L,S,0,L+2/3,S+1,0,L,S+1,0];x.set(M,_*m*C),E.set(f,p*m*C);const N=[C,C,C,C,C,C];y.set(N,g*m*C)}const T=new nn;T.setAttribute("position",new An(x,_)),T.setAttribute("uv",new An(E,p)),T.setAttribute("faceIndex",new An(y,g)),i.push(new Zt(T,null)),s>cs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Yp(t,e,n){const i=new xi(t,e,n);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fr(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function QI(t,e,n){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KI,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function eN(t,e,n){const i=new Float32Array(Ls),s=new W(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function jp(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Kp(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class b0 extends xi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new _0(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Jo(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Oi});r.uniforms.tEquirect.value=n;const o=new Zt(s,r),a=n.minFilter;return n.minFilter===Ns&&(n.minFilter=tn),new aL(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function tN(t){let e=new WeakMap,n=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Rc||h===Pc)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const _=new b0(m.height);return _.fromEquirectangularTexture(t,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,m=h===Rc||h===Pc,_=h===Ws||h===Pr;if(m||_){let p=n.get(f);const g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new qp(t)),p=m?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return m&&x&&x.height>0||_&&x&&l(x)?(i===null&&(i=new qp(t)),p=m?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,h){return h===Rc?f.mapping=Ws:h===Pc&&(f.mapping=Pr),f}function l(f){let h=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=n.get(h);m!==void 0&&(n.delete(h),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function nN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&bl("WebGLRenderer: "+i+" extension not supported."),s}}}function iN(t,e,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,m=d.attributes.position;let _=0;if(m===void 0)return;if(h!==null){const x=h.array;_=h.version;for(let E=0,y=x.length;E<y;E+=3){const T=x[E+0],C=x[E+1],L=x[E+2];f.push(T,C,C,L,L,T)}}else{const x=m.array;_=m.version;for(let E=0,y=x.length/3-1;E<y;E+=3){const T=E+0,C=E+1,L=E+2;f.push(T,C,C,L,L,T)}}const p=new(m.count>=65535?p0:h0)(f,1);p.version=_;const g=r.get(d);g&&e.remove(g),r.set(d,p)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function sN(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function c(f,h,m){m!==0&&(t.drawElementsInstanced(i,h,r,f*o,m),n.update(h,i,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,m);let p=0;for(let g=0;g<m;g++)p+=h[g];n.update(p,i,1)}function d(f,h,m,_){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)c(f[g]/o,h[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,_,0,m);let g=0;for(let x=0;x<m;x++)g+=h[x]*_[x];n.update(g,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function rN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:dt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function oN(t,e,n){const i=new WeakMap,s=new Nt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let N=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",N)};var h=N;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let T=a.attributes.position.count*y,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const L=new Float32Array(T*C*4*d),S=new u0(L,T,C,d);S.type=hi,S.needsUpdate=!0;const M=y*4;for(let D=0;D<d;D++){const U=g[D],V=x[D],$=E[D],B=T*C*4*D;for(let w=0;w<U.count;w++){const A=w*M;m===!0&&(s.fromBufferAttribute(U,w),L[B+A+0]=s.x,L[B+A+1]=s.y,L[B+A+2]=s.z,L[B+A+3]=0),_===!0&&(s.fromBufferAttribute(V,w),L[B+A+4]=s.x,L[B+A+5]=s.y,L[B+A+6]=s.z,L[B+A+7]=0),p===!0&&(s.fromBufferAttribute($,w),L[B+A+8]=s.x,L[B+A+9]=s.y,L[B+A+10]=s.z,L[B+A+11]=$.itemSize===4?s.w:1)}}f={count:d,texture:S,size:new ut(T,C)},i.set(a,f),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function aN(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const lN={[Y_]:"LINEAR_TONE_MAPPING",[j_]:"REINHARD_TONE_MAPPING",[K_]:"CINEON_TONE_MAPPING",[Z_]:"ACES_FILMIC_TONE_MAPPING",[Q_]:"AGX_TONE_MAPPING",[e0]:"NEUTRAL_TONE_MAPPING",[J_]:"CUSTOM_TONE_MAPPING"};function cN(t,e,n,i,s){const r=new xi(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),o=new xi(e,n,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),a=new nn;a.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ot([0,2,0,0,2,0],2));const l=new sL({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Zt(a,l),u=new S0(-1,1,1,-1,0,1);let d=null,f=null,h=!1,m,_=null,p=[],g=!1;this.setSize=function(x,E){r.setSize(x,E),o.setSize(x,E);for(let y=0;y<p.length;y++){const T=p[y];T.setSize&&T.setSize(x,E)}},this.setEffects=function(x){p=x,g=p.length>0&&p[0].isRenderPass===!0;const E=r.width,y=r.height;for(let T=0;T<p.length;T++){const C=p[T];C.setSize&&C.setSize(E,y)}},this.begin=function(x,E){if(h||x.toneMapping===vi&&p.length===0)return!1;if(_=E,E!==null){const y=E.width,T=E.height;(r.width!==y||r.height!==T)&&this.setSize(y,T)}return g===!1&&x.setRenderTarget(r),m=x.toneMapping,x.toneMapping=vi,!0},this.hasRenderPass=function(){return g},this.end=function(x,E){x.toneMapping=m,h=!0;let y=r,T=o;for(let C=0;C<p.length;C++){const L=p[C];if(L.enabled!==!1&&(L.render(x,T,y,E),L.needsSwap!==!1)){const S=y;y=T,T=S}}if(d!==x.outputColorSpace||f!==x.toneMapping){d=x.outputColorSpace,f=x.toneMapping,l.defines={},lt.getTransfer(d)===vt&&(l.defines.SRGB_TRANSFER="");const C=lN[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(_),x.render(c,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const E0=new fn,Cf=new Oo(1,1),w0=new u0,T0=new C2,A0=new _0,Zp=[],Jp=[],Qp=new Float32Array(16),em=new Float32Array(9),tm=new Float32Array(4);function zr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Zp[s];if(r===void 0&&(r=new Float32Array(s),Zp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sc(t,e){let n=Jp[e];n===void 0&&(n=new Int32Array(e),Jp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function uN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function fN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function dN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function hN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function pN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;tm.set(i),t.uniformMatrix2fv(this.addr,!1,tm),zt(n,i)}}function mN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;em.set(i),t.uniformMatrix3fv(this.addr,!1,em),zt(n,i)}}function gN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Qp.set(i),t.uniformMatrix4fv(this.addr,!1,Qp),zt(n,i)}}function _N(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function vN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function xN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function yN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function SN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function MN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function bN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function EN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function wN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Cf.compareFunction=n.isReversedDepthBuffer()?vd:_d,r=Cf):r=E0,n.setTexture2D(e||r,s)}function TN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||T0,s)}function AN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||A0,s)}function CN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||w0,s)}function RN(t){switch(t){case 5126:return uN;case 35664:return fN;case 35665:return dN;case 35666:return hN;case 35674:return pN;case 35675:return mN;case 35676:return gN;case 5124:case 35670:return _N;case 35667:case 35671:return vN;case 35668:case 35672:return xN;case 35669:case 35673:return yN;case 5125:return SN;case 36294:return MN;case 36295:return bN;case 36296:return EN;case 35678:case 36198:case 36298:case 36306:case 35682:return wN;case 35679:case 36299:case 36307:return TN;case 35680:case 36300:case 36308:case 36293:return AN;case 36289:case 36303:case 36311:case 36292:return CN}}function PN(t,e){t.uniform1fv(this.addr,e)}function LN(t,e){const n=zr(e,this.size,2);t.uniform2fv(this.addr,n)}function DN(t,e){const n=zr(e,this.size,3);t.uniform3fv(this.addr,n)}function IN(t,e){const n=zr(e,this.size,4);t.uniform4fv(this.addr,n)}function NN(t,e){const n=zr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function UN(t,e){const n=zr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function FN(t,e){const n=zr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ON(t,e){t.uniform1iv(this.addr,e)}function BN(t,e){t.uniform2iv(this.addr,e)}function kN(t,e){t.uniform3iv(this.addr,e)}function zN(t,e){t.uniform4iv(this.addr,e)}function VN(t,e){t.uniform1uiv(this.addr,e)}function HN(t,e){t.uniform2uiv(this.addr,e)}function GN(t,e){t.uniform3uiv(this.addr,e)}function WN(t,e){t.uniform4uiv(this.addr,e)}function $N(t,e,n){const i=this.cache,s=e.length,r=sc(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Cf:o=E0;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function XN(t,e,n){const i=this.cache,s=e.length,r=sc(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||T0,r[o])}function qN(t,e,n){const i=this.cache,s=e.length,r=sc(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||A0,r[o])}function YN(t,e,n){const i=this.cache,s=e.length,r=sc(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||w0,r[o])}function jN(t){switch(t){case 5126:return PN;case 35664:return LN;case 35665:return DN;case 35666:return IN;case 35674:return NN;case 35675:return UN;case 35676:return FN;case 5124:case 35670:return ON;case 35667:case 35671:return BN;case 35668:case 35672:return kN;case 35669:case 35673:return zN;case 5125:return VN;case 36294:return HN;case 36295:return GN;case 36296:return WN;case 35678:case 36198:case 36298:case 36306:case 35682:return $N;case 35679:case 36299:case 36307:return XN;case 35680:case 36300:case 36308:case 36293:return qN;case 36289:case 36303:case 36311:case 36292:return YN}}class KN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=RN(n.type)}}class ZN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jN(n.type)}}class JN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const ou=/(\w+)(\])?(\[|\.)?/g;function nm(t,e){t.seq.push(e),t.map[e.id]=e}function QN(t,e,n){const i=t.name,s=i.length;for(ou.lastIndex=0;;){const r=ou.exec(i),o=ou.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nm(n,c===void 0?new KN(a,t,e):new ZN(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new JN(a),nm(n,d)),n=d}}}class Qa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);QN(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function im(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const eU=37297;let tU=0;function nU(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const sm=new tt;function iU(t){lt._getMatrix(sm,lt.workingColorSpace,t);const e=`mat3( ${sm.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case yl:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function rm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+nU(t.getShaderSource(e),a)}else return r}function sU(t,e){const n=iU(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const rU={[Y_]:"Linear",[j_]:"Reinhard",[K_]:"Cineon",[Z_]:"ACESFilmic",[Q_]:"AgX",[e0]:"Neutral",[J_]:"Custom"};function oU(t,e){const n=rU[e];return n===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fa=new W;function aU(){lt.getLuminanceCoefficients(Fa);const t=Fa.x.toFixed(4),e=Fa.y.toFixed(4),n=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lU(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function cU(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function uU(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ao(t){return t!==""}function om(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function am(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fU=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(t){return t.replace(fU,hU)}const dU=new Map;function hU(t,e){let n=nt[e];if(n===void 0){const i=dU.get(e);if(i!==void 0)n=nt[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rf(n)}const pU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lm(t){return t.replace(pU,mU)}function mU(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const gU={[Ya]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function _U(t){return gU[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vU={[Ws]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[tc]:"ENVMAP_TYPE_CUBE_UV"};function xU(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":vU[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const yU={[Pr]:"ENVMAP_MODE_REFRACTION"};function SU(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":yU[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const MU={[q_]:"ENVMAP_BLENDING_MULTIPLY",[$3]:"ENVMAP_BLENDING_MIX",[X3]:"ENVMAP_BLENDING_ADD"};function bU(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":MU[t.combine]||"ENVMAP_BLENDING_NONE"}function EU(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function wU(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=_U(n),c=xU(n),u=SU(n),d=bU(n),f=EU(n),h=lU(n),m=cU(r),_=s.createProgram();let p,g,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ao).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ao).join(`
`),g.length>0&&(g+=`
`)):(p=[cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),g=[cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vi?"#define TONE_MAPPING":"",n.toneMapping!==vi?nt.tonemapping_pars_fragment:"",n.toneMapping!==vi?oU("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,sU("linearToOutputTexel",n.outputColorSpace),aU(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ao).join(`
`)),o=Rf(o),o=om(o,n),o=am(o,n),a=Rf(a),a=om(a,n),a=am(a,n),o=lm(o),a=lm(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",n.glslVersion===_p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=x+p+o,y=x+g+a,T=im(s,s.VERTEX_SHADER,E),C=im(s,s.FRAGMENT_SHADER,y);s.attachShader(_,T),s.attachShader(_,C),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(D){if(t.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(T)||"",$=s.getShaderInfoLog(C)||"",B=U.trim(),w=V.trim(),A=$.trim();let O=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,T,C);else{const oe=rm(s,T,"vertex"),he=rm(s,C,"fragment");dt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+oe+`
`+he)}else B!==""?je("WebGLProgram: Program Info Log:",B):(w===""||A==="")&&(X=!1);X&&(D.diagnostics={runnable:O,programLog:B,vertexShader:{log:w,prefix:p},fragmentShader:{log:A,prefix:g}})}s.deleteShader(T),s.deleteShader(C),S=new Qa(s,_),M=uU(s,_)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,eU)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tU++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=C,this}let TU=0;class AU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new CU(e),n.set(e,i)),i}}class CU{constructor(e){this.id=TU++,this.code=e,this.usedTimes=0}}function RU(t,e,n,i,s,r){const o=new f0,a=new AU,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,M,N,D,U){const V=D.fog,$=U.geometry,B=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,w=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,A=e.get(S.envMap||B,w),O=A&&A.mapping===tc?A.image.height:null,X=h[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&je("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const oe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,he=oe!==void 0?oe.length:0;let ie=0;$.morphAttributes.position!==void 0&&(ie=1),$.morphAttributes.normal!==void 0&&(ie=2),$.morphAttributes.color!==void 0&&(ie=3);let ae,Ue,ze,te;if(X){const _t=ci[X];ae=_t.vertexShader,Ue=_t.fragmentShader}else ae=S.vertexShader,Ue=S.fragmentShader,a.update(S),ze=a.getVertexShaderID(S),te=a.getFragmentShaderID(S);const se=t.getRenderTarget(),_e=t.state.buffers.depth.getReversed(),Ye=U.isInstancedMesh===!0,Be=U.isBatchedMesh===!0,$e=!!S.map,F=!!S.matcap,z=!!A,q=!!S.aoMap,ue=!!S.lightMap,Q=!!S.bumpMap,fe=!!S.normalMap,I=!!S.displacementMap,ve=!!S.emissiveMap,me=!!S.metalnessMap,ce=!!S.roughnessMap,ge=S.anisotropy>0,R=S.clearcoat>0,b=S.dispersion>0,k=S.iridescence>0,Y=S.sheen>0,re=S.transmission>0,j=ge&&!!S.anisotropyMap,Ae=R&&!!S.clearcoatMap,ye=R&&!!S.clearcoatNormalMap,Fe=R&&!!S.clearcoatRoughnessMap,He=k&&!!S.iridescenceMap,xe=k&&!!S.iridescenceThicknessMap,be=Y&&!!S.sheenColorMap,Ce=Y&&!!S.sheenRoughnessMap,De=!!S.specularMap,Ie=!!S.specularColorMap,Qe=!!S.specularIntensityMap,H=re&&!!S.transmissionMap,we=re&&!!S.thicknessMap,Ee=!!S.gradientMap,Oe=!!S.alphaMap,Se=S.alphaTest>0,le=!!S.alphaHash,ke=!!S.extensions;let Je=vi;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Je=t.toneMapping);const Tt={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:ae,fragmentShader:Ue,defines:S.defines,customVertexShaderID:ze,customFragmentShaderID:te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Be,batchingColor:Be&&U._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&U.instanceColor!==null,instancingMorph:Ye&&U.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Dr,alphaToCoverage:!!S.alphaToCoverage,map:$e,matcap:F,envMap:z,envMapMode:z&&A.mapping,envMapCubeUVHeight:O,aoMap:q,lightMap:ue,bumpMap:Q,normalMap:fe,displacementMap:I,emissiveMap:ve,normalMapObjectSpace:fe&&S.normalMapType===K3,normalMapTangentSpace:fe&&S.normalMapType===j3,metalnessMap:me,roughnessMap:ce,anisotropy:ge,anisotropyMap:j,clearcoat:R,clearcoatMap:Ae,clearcoatNormalMap:ye,clearcoatRoughnessMap:Fe,dispersion:b,iridescence:k,iridescenceMap:He,iridescenceThicknessMap:xe,sheen:Y,sheenColorMap:be,sheenRoughnessMap:Ce,specularMap:De,specularColorMap:Ie,specularIntensityMap:Qe,transmission:re,transmissionMap:H,thicknessMap:we,gradientMap:Ee,opaque:S.transparent===!1&&S.blending===Sr&&S.alphaToCoverage===!1,alphaMap:Oe,alphaTest:Se,alphaHash:le,combine:S.combine,mapUv:$e&&m(S.map.channel),aoMapUv:q&&m(S.aoMap.channel),lightMapUv:ue&&m(S.lightMap.channel),bumpMapUv:Q&&m(S.bumpMap.channel),normalMapUv:fe&&m(S.normalMap.channel),displacementMapUv:I&&m(S.displacementMap.channel),emissiveMapUv:ve&&m(S.emissiveMap.channel),metalnessMapUv:me&&m(S.metalnessMap.channel),roughnessMapUv:ce&&m(S.roughnessMap.channel),anisotropyMapUv:j&&m(S.anisotropyMap.channel),clearcoatMapUv:Ae&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(S.sheenRoughnessMap.channel),specularMapUv:De&&m(S.specularMap.channel),specularColorMapUv:Ie&&m(S.specularColorMap.channel),specularIntensityMapUv:Qe&&m(S.specularIntensityMap.channel),transmissionMapUv:H&&m(S.transmissionMap.channel),thicknessMapUv:we&&m(S.thicknessMap.channel),alphaMapUv:Oe&&m(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(fe||ge),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&($e||Oe),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||$.attributes.normal===void 0&&fe===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Je,decodeVideoTexture:$e&&S.map.isVideoTexture===!0&&lt.getTransfer(S.map.colorSpace)===vt,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&lt.getTransfer(S.emissiveMap.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fi,flipSided:S.side===_n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ke&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&S.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)M.push(N),M.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(g(M,S),x(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function g(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=h[S.type];let N;if(M){const D=ci[M];N=tL.clone(D.uniforms)}else N=S.uniforms;return N}function y(S,M){let N=u.get(M);return N!==void 0?++N.usedTimes:(N=new wU(t,M,S,s),c.push(N),u.set(M,N)),N}function T(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function C(S){a.remove(S)}function L(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:L}}function PU(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function LU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function um(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fm(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,m,_,p,g){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},t[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=m,x.materialVariant=o(f),x.groupOrder=_,x.renderOrder=f.renderOrder,x.z=p,x.group=g),e++,x}function l(f,h,m,_,p,g){const x=a(f,h,m,_,p,g);m.transmission>0?i.push(x):m.transparent===!0?s.push(x):n.push(x)}function c(f,h,m,_,p,g){const x=a(f,h,m,_,p,g);m.transmission>0?i.unshift(x):m.transparent===!0?s.unshift(x):n.unshift(x)}function u(f,h){n.length>1&&n.sort(f||LU),i.length>1&&i.sort(h||um),s.length>1&&s.sort(h||um)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function DU(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new fm,t.set(i,[o])):s>=r.length?(o=new fm,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function IU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new ct};break;case"SpotLight":n={position:new W,direction:new W,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":n={color:new ct,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function NU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let UU=0;function FU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function OU(t){const e=new IU,n=NU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const s=new W,r=new Rt,o=new Rt;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,m=0,_=0,p=0,g=0,x=0,E=0,y=0,T=0,C=0,L=0;c.sort(FU);for(let M=0,N=c.length;M<N;M++){const D=c[M],U=D.color,V=D.intensity,$=D.distance;let B=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Lr?B=D.shadow.map.texture:B=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=U.r*V,d+=U.g*V,f+=U.b*V;else if(D.isLightProbe){for(let w=0;w<9;w++)i.probe[w].addScaledVector(D.sh.coefficients[w],V);L++}else if(D.isDirectionalLight){const w=e.get(D);if(w.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const A=D.shadow,O=n.get(D);O.shadowIntensity=A.intensity,O.shadowBias=A.bias,O.shadowNormalBias=A.normalBias,O.shadowRadius=A.radius,O.shadowMapSize=A.mapSize,i.directionalShadow[h]=O,i.directionalShadowMap[h]=B,i.directionalShadowMatrix[h]=D.shadow.matrix,x++}i.directional[h]=w,h++}else if(D.isSpotLight){const w=e.get(D);w.position.setFromMatrixPosition(D.matrixWorld),w.color.copy(U).multiplyScalar(V),w.distance=$,w.coneCos=Math.cos(D.angle),w.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),w.decay=D.decay,i.spot[_]=w;const A=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,A.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[_]=A.matrix,D.castShadow){const O=n.get(D);O.shadowIntensity=A.intensity,O.shadowBias=A.bias,O.shadowNormalBias=A.normalBias,O.shadowRadius=A.radius,O.shadowMapSize=A.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=B,y++}_++}else if(D.isRectAreaLight){const w=e.get(D);w.color.copy(U).multiplyScalar(V),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=w,p++}else if(D.isPointLight){const w=e.get(D);if(w.color.copy(D.color).multiplyScalar(D.intensity),w.distance=D.distance,w.decay=D.decay,D.castShadow){const A=D.shadow,O=n.get(D);O.shadowIntensity=A.intensity,O.shadowBias=A.bias,O.shadowNormalBias=A.normalBias,O.shadowRadius=A.radius,O.shadowMapSize=A.mapSize,O.shadowCameraNear=A.camera.near,O.shadowCameraFar=A.camera.far,i.pointShadow[m]=O,i.pointShadowMap[m]=B,i.pointShadowMatrix[m]=D.shadow.matrix,E++}i.point[m]=w,m++}else if(D.isHemisphereLight){const w=e.get(D);w.skyColor.copy(D.color).multiplyScalar(V),w.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[g]=w,g++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==h||S.pointLength!==m||S.spotLength!==_||S.rectAreaLength!==p||S.hemiLength!==g||S.numDirectionalShadows!==x||S.numPointShadows!==E||S.numSpotShadows!==y||S.numSpotMaps!==T||S.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=p,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,S.directionalLength=h,S.pointLength=m,S.spotLength=_,S.rectAreaLength=p,S.hemiLength=g,S.numDirectionalShadows=x,S.numPointShadows=E,S.numSpotShadows=y,S.numSpotMaps=T,S.numLightProbes=L,i.version=UU++)}function l(c,u){let d=0,f=0,h=0,m=0,_=0;const p=u.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const E=c[g];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(E.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(E.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(E.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function dm(t){const e=new OU(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function BU(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new dm(t),e.set(s,[a])):r>=o.length?(a=new dm(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const kU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,VU=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],HU=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],hm=new Rt,Qr=new W,au=new W;function GU(t,e,n){let i=new m0;const s=new ut,r=new ut,o=new Nt,a=new rL,l=new oL,c={},u=n.maxTextureSize,d={[ds]:_n,[_n]:ds,[fi]:fi},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:kU,fragmentShader:zU}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new nn;m.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Zt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let g=this.type;this.render=function(C,L,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;this.type===T3&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ya);const M=t.getRenderTarget(),N=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Oi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=g!==this.type;V&&L.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(B=>B.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,B=C.length;$<B;$++){const w=C[$],A=w.shadow;if(A===void 0){je("WebGLShadowMap:",w,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;s.copy(A.mapSize);const O=A.getFrameExtents();s.multiply(O),r.copy(A.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/O.x),s.x=r.x*O.x,A.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/O.y),s.y=r.y*O.y,A.mapSize.y=r.y));const X=t.state.buffers.depth.getReversed();if(A.camera._reversedDepth=X,A.map===null||V===!0){if(A.map!==null&&(A.map.depthTexture!==null&&(A.map.depthTexture.dispose(),A.map.depthTexture=null),A.map.dispose()),this.type===ro){if(w.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}A.map=new xi(s.x,s.y,{format:Lr,type:Gi,minFilter:tn,magFilter:tn,generateMipmaps:!1}),A.map.texture.name=w.name+".shadowMap",A.map.depthTexture=new Oo(s.x,s.y,hi),A.map.depthTexture.name=w.name+".shadowMapDepth",A.map.depthTexture.format=Wi,A.map.depthTexture.compareFunction=null,A.map.depthTexture.minFilter=$t,A.map.depthTexture.magFilter=$t}else w.isPointLight?(A.map=new b0(s.x),A.map.depthTexture=new Y2(s.x,Si)):(A.map=new xi(s.x,s.y),A.map.depthTexture=new Oo(s.x,s.y,Si)),A.map.depthTexture.name=w.name+".shadowMap",A.map.depthTexture.format=Wi,this.type===Ya?(A.map.depthTexture.compareFunction=X?vd:_d,A.map.depthTexture.minFilter=tn,A.map.depthTexture.magFilter=tn):(A.map.depthTexture.compareFunction=null,A.map.depthTexture.minFilter=$t,A.map.depthTexture.magFilter=$t);A.camera.updateProjectionMatrix()}const oe=A.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<oe;he++){if(A.map.isWebGLCubeRenderTarget)t.setRenderTarget(A.map,he),t.clear();else{he===0&&(t.setRenderTarget(A.map),t.clear());const ie=A.getViewport(he);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),U.viewport(o)}if(w.isPointLight){const ie=A.camera,ae=A.matrix,Ue=w.distance||ie.far;Ue!==ie.far&&(ie.far=Ue,ie.updateProjectionMatrix()),Qr.setFromMatrixPosition(w.matrixWorld),ie.position.copy(Qr),au.copy(ie.position),au.add(VU[he]),ie.up.copy(HU[he]),ie.lookAt(au),ie.updateMatrixWorld(),ae.makeTranslation(-Qr.x,-Qr.y,-Qr.z),hm.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),A._frustum.setFromProjectionMatrix(hm,ie.coordinateSystem,ie.reversedDepth)}else A.updateMatrices(w);i=A.getFrustum(),y(L,S,A.camera,w,this.type)}A.isPointLightShadow!==!0&&this.type===ro&&x(A,S),A.needsUpdate=!1}g=this.type,p.needsUpdate=!1,t.setRenderTarget(M,N,D)};function x(C,L){const S=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xi(s.x,s.y,{format:Lr,type:Gi})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(L,null,S,f,_,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(L,null,S,h,_,null)}function E(C,L,S,M){let N=null;const D=S.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)N=D;else if(N=S.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const U=N.uuid,V=L.uuid;let $=c[U];$===void 0&&($={},c[U]=$);let B=$[V];B===void 0&&(B=N.clone(),$[V]=B,L.addEventListener("dispose",T)),N=B}if(N.visible=L.visible,N.wireframe=L.wireframe,M===ro?N.side=L.shadowSide!==null?L.shadowSide:L.side:N.side=L.shadowSide!==null?L.shadowSide:d[L.side],N.alphaMap=L.alphaMap,N.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,N.map=L.map,N.clipShadows=L.clipShadows,N.clippingPlanes=L.clippingPlanes,N.clipIntersection=L.clipIntersection,N.displacementMap=L.displacementMap,N.displacementScale=L.displacementScale,N.displacementBias=L.displacementBias,N.wireframeLinewidth=L.wireframeLinewidth,N.linewidth=L.linewidth,S.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const U=t.properties.get(N);U.light=S}return N}function y(C,L,S,M,N){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&N===ro)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,C.matrixWorld);const V=e.update(C),$=C.material;if(Array.isArray($)){const B=V.groups;for(let w=0,A=B.length;w<A;w++){const O=B[w],X=$[O.materialIndex];if(X&&X.visible){const oe=E(C,X,M,N);C.onBeforeShadow(t,C,L,S,V,oe,O),t.renderBufferDirect(S,null,V,oe,C,O),C.onAfterShadow(t,C,L,S,V,oe,O)}}}else if($.visible){const B=E(C,$,M,N);C.onBeforeShadow(t,C,L,S,V,B,null),t.renderBufferDirect(S,null,V,B,C,null),C.onAfterShadow(t,C,L,S,V,B,null)}}const U=C.children;for(let V=0,$=U.length;V<$;V++)y(U[V],L,S,M,N)}function T(C){C.target.removeEventListener("dispose",T);for(const S in c){const M=c[S],N=C.target.uuid;N in M&&(M[N].dispose(),delete M[N])}}}function WU(t,e){function n(){let H=!1;const we=new Nt;let Ee=null;const Oe=new Nt(0,0,0,0);return{setMask:function(Se){Ee!==Se&&!H&&(t.colorMask(Se,Se,Se,Se),Ee=Se)},setLocked:function(Se){H=Se},setClear:function(Se,le,ke,Je,Tt){Tt===!0&&(Se*=Je,le*=Je,ke*=Je),we.set(Se,le,ke,Je),Oe.equals(we)===!1&&(t.clearColor(Se,le,ke,Je),Oe.copy(we))},reset:function(){H=!1,Ee=null,Oe.set(-1,0,0,0)}}}function i(){let H=!1,we=!1,Ee=null,Oe=null,Se=null;return{setReversed:function(le){if(we!==le){const ke=e.get("EXT_clip_control");le?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),we=le;const Je=Se;Se=null,this.setClear(Je)}},getReversed:function(){return we},setTest:function(le){le?se(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(le){Ee!==le&&!H&&(t.depthMask(le),Ee=le)},setFunc:function(le){if(we&&(le=o2[le]),Oe!==le){switch(le){case Bu:t.depthFunc(t.NEVER);break;case ku:t.depthFunc(t.ALWAYS);break;case zu:t.depthFunc(t.LESS);break;case Rr:t.depthFunc(t.LEQUAL);break;case Vu:t.depthFunc(t.EQUAL);break;case Hu:t.depthFunc(t.GEQUAL);break;case Gu:t.depthFunc(t.GREATER);break;case Wu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Oe=le}},setLocked:function(le){H=le},setClear:function(le){Se!==le&&(Se=le,we&&(le=1-le),t.clearDepth(le))},reset:function(){H=!1,Ee=null,Oe=null,Se=null,we=!1}}}function s(){let H=!1,we=null,Ee=null,Oe=null,Se=null,le=null,ke=null,Je=null,Tt=null;return{setTest:function(_t){H||(_t?se(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(_t){we!==_t&&!H&&(t.stencilMask(_t),we=_t)},setFunc:function(_t,bi,Ei){(Ee!==_t||Oe!==bi||Se!==Ei)&&(t.stencilFunc(_t,bi,Ei),Ee=_t,Oe=bi,Se=Ei)},setOp:function(_t,bi,Ei){(le!==_t||ke!==bi||Je!==Ei)&&(t.stencilOp(_t,bi,Ei),le=_t,ke=bi,Je=Ei)},setLocked:function(_t){H=_t},setClear:function(_t){Tt!==_t&&(t.clearStencil(_t),Tt=_t)},reset:function(){H=!1,we=null,Ee=null,Oe=null,Se=null,le=null,ke=null,Je=null,Tt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],m=null,_=!1,p=null,g=null,x=null,E=null,y=null,T=null,C=null,L=new ct(0,0,0),S=0,M=!1,N=null,D=null,U=null,V=null,$=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let w=!1,A=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(A=parseFloat(/^WebGL (\d)/.exec(O)[1]),w=A>=1):O.indexOf("OpenGL ES")!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),w=A>=2);let X=null,oe={};const he=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),ae=new Nt().fromArray(he),Ue=new Nt().fromArray(ie);function ze(H,we,Ee,Oe){const Se=new Uint8Array(4),le=t.createTexture();t.bindTexture(H,le),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ke=0;ke<Ee;ke++)H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,Oe,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(we+ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return le}const te={};te[t.TEXTURE_2D]=ze(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=ze(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=ze(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=ze(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(t.DEPTH_TEST),o.setFunc(Rr),Q(!1),fe(dp),se(t.CULL_FACE),q(Oi);function se(H){u[H]!==!0&&(t.enable(H),u[H]=!0)}function _e(H){u[H]!==!1&&(t.disable(H),u[H]=!1)}function Ye(H,we){return d[H]!==we?(t.bindFramebuffer(H,we),d[H]=we,H===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=we),H===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=we),!0):!1}function Be(H,we){let Ee=h,Oe=!1;if(H){Ee=f.get(we),Ee===void 0&&(Ee=[],f.set(we,Ee));const Se=H.textures;if(Ee.length!==Se.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let le=0,ke=Se.length;le<ke;le++)Ee[le]=t.COLOR_ATTACHMENT0+le;Ee.length=Se.length,Oe=!0}}else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,Oe=!0);Oe&&t.drawBuffers(Ee)}function $e(H){return m!==H?(t.useProgram(H),m=H,!0):!1}const F={[Rs]:t.FUNC_ADD,[C3]:t.FUNC_SUBTRACT,[R3]:t.FUNC_REVERSE_SUBTRACT};F[P3]=t.MIN,F[L3]=t.MAX;const z={[D3]:t.ZERO,[I3]:t.ONE,[N3]:t.SRC_COLOR,[Fu]:t.SRC_ALPHA,[z3]:t.SRC_ALPHA_SATURATE,[B3]:t.DST_COLOR,[F3]:t.DST_ALPHA,[U3]:t.ONE_MINUS_SRC_COLOR,[Ou]:t.ONE_MINUS_SRC_ALPHA,[k3]:t.ONE_MINUS_DST_COLOR,[O3]:t.ONE_MINUS_DST_ALPHA,[V3]:t.CONSTANT_COLOR,[H3]:t.ONE_MINUS_CONSTANT_COLOR,[G3]:t.CONSTANT_ALPHA,[W3]:t.ONE_MINUS_CONSTANT_ALPHA};function q(H,we,Ee,Oe,Se,le,ke,Je,Tt,_t){if(H===Oi){_===!0&&(_e(t.BLEND),_=!1);return}if(_===!1&&(se(t.BLEND),_=!0),H!==A3){if(H!==p||_t!==M){if((g!==Rs||y!==Rs)&&(t.blendEquation(t.FUNC_ADD),g=Rs,y=Rs),_t)switch(H){case Sr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Uu:t.blendFunc(t.ONE,t.ONE);break;case hp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:dt("WebGLState: Invalid blending: ",H);break}else switch(H){case Sr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Uu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case hp:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pp:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",H);break}x=null,E=null,T=null,C=null,L.set(0,0,0),S=0,p=H,M=_t}return}Se=Se||we,le=le||Ee,ke=ke||Oe,(we!==g||Se!==y)&&(t.blendEquationSeparate(F[we],F[Se]),g=we,y=Se),(Ee!==x||Oe!==E||le!==T||ke!==C)&&(t.blendFuncSeparate(z[Ee],z[Oe],z[le],z[ke]),x=Ee,E=Oe,T=le,C=ke),(Je.equals(L)===!1||Tt!==S)&&(t.blendColor(Je.r,Je.g,Je.b,Tt),L.copy(Je),S=Tt),p=H,M=!1}function ue(H,we){H.side===fi?_e(t.CULL_FACE):se(t.CULL_FACE);let Ee=H.side===_n;we&&(Ee=!Ee),Q(Ee),H.blending===Sr&&H.transparent===!1?q(Oi):q(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const Oe=H.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ve(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(H){N!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),N=H)}function fe(H){H!==E3?(se(t.CULL_FACE),H!==D&&(H===dp?t.cullFace(t.BACK):H===w3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),D=H}function I(H){H!==U&&(w&&t.lineWidth(H),U=H)}function ve(H,we,Ee){H?(se(t.POLYGON_OFFSET_FILL),(V!==we||$!==Ee)&&(V=we,$=Ee,o.getReversed()&&(we=-we),t.polygonOffset(we,Ee))):_e(t.POLYGON_OFFSET_FILL)}function me(H){H?se(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function ce(H){H===void 0&&(H=t.TEXTURE0+B-1),X!==H&&(t.activeTexture(H),X=H)}function ge(H,we,Ee){Ee===void 0&&(X===null?Ee=t.TEXTURE0+B-1:Ee=X);let Oe=oe[Ee];Oe===void 0&&(Oe={type:void 0,texture:void 0},oe[Ee]=Oe),(Oe.type!==H||Oe.texture!==we)&&(X!==Ee&&(t.activeTexture(Ee),X=Ee),t.bindTexture(H,we||te[H]),Oe.type=H,Oe.texture=we)}function R(){const H=oe[X];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(H){dt("WebGLState:",H)}}function k(){try{t.compressedTexImage3D(...arguments)}catch(H){dt("WebGLState:",H)}}function Y(){try{t.texSubImage2D(...arguments)}catch(H){dt("WebGLState:",H)}}function re(){try{t.texSubImage3D(...arguments)}catch(H){dt("WebGLState:",H)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(H){dt("WebGLState:",H)}}function Ae(){try{t.compressedTexSubImage3D(...arguments)}catch(H){dt("WebGLState:",H)}}function ye(){try{t.texStorage2D(...arguments)}catch(H){dt("WebGLState:",H)}}function Fe(){try{t.texStorage3D(...arguments)}catch(H){dt("WebGLState:",H)}}function He(){try{t.texImage2D(...arguments)}catch(H){dt("WebGLState:",H)}}function xe(){try{t.texImage3D(...arguments)}catch(H){dt("WebGLState:",H)}}function be(H){ae.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),ae.copy(H))}function Ce(H){Ue.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),Ue.copy(H))}function De(H,we){let Ee=c.get(we);Ee===void 0&&(Ee=new WeakMap,c.set(we,Ee));let Oe=Ee.get(H);Oe===void 0&&(Oe=t.getUniformBlockIndex(we,H.name),Ee.set(H,Oe))}function Ie(H,we){const Oe=c.get(we).get(H);l.get(we)!==Oe&&(t.uniformBlockBinding(we,Oe,H.__bindingPointIndex),l.set(we,Oe))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},X=null,oe={},d={},f=new WeakMap,h=[],m=null,_=!1,p=null,g=null,x=null,E=null,y=null,T=null,C=null,L=new ct(0,0,0),S=0,M=!1,N=null,D=null,U=null,V=null,$=null,ae.set(0,0,t.canvas.width,t.canvas.height),Ue.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:_e,bindFramebuffer:Ye,drawBuffers:Be,useProgram:$e,setBlending:q,setMaterial:ue,setFlipSided:Q,setCullFace:fe,setLineWidth:I,setPolygonOffset:ve,setScissorTest:me,activeTexture:ce,bindTexture:ge,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:k,texImage2D:He,texImage3D:xe,updateUBOMapping:De,uniformBlockBinding:Ie,texStorage2D:ye,texStorage3D:Fe,texSubImage2D:Y,texSubImage3D:re,compressedTexSubImage2D:j,compressedTexSubImage3D:Ae,scissor:be,viewport:Ce,reset:Qe}}function $U(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return h?new OffscreenCanvas(R,b):Ml("canvas")}function _(R,b,k){let Y=1;const re=ge(R);if((re.width>k||re.height>k)&&(Y=k/Math.max(re.width,re.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Y*re.width),Ae=Math.floor(Y*re.height);d===void 0&&(d=m(j,Ae));const ye=b?m(j,Ae):d;return ye.width=j,ye.height=Ae,ye.getContext("2d").drawImage(R,0,0,j,Ae),je("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+j+"x"+Ae+")."),ye}else return"data"in R&&je("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function p(R){return R.generateMipmaps}function g(R){t.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(R,b,k,Y,re=!1){if(R!==null){if(t[R]!==void 0)return t[R];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=b;if(b===t.RED&&(k===t.FLOAT&&(j=t.R32F),k===t.HALF_FLOAT&&(j=t.R16F),k===t.UNSIGNED_BYTE&&(j=t.R8)),b===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(j=t.R8UI),k===t.UNSIGNED_SHORT&&(j=t.R16UI),k===t.UNSIGNED_INT&&(j=t.R32UI),k===t.BYTE&&(j=t.R8I),k===t.SHORT&&(j=t.R16I),k===t.INT&&(j=t.R32I)),b===t.RG&&(k===t.FLOAT&&(j=t.RG32F),k===t.HALF_FLOAT&&(j=t.RG16F),k===t.UNSIGNED_BYTE&&(j=t.RG8)),b===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(j=t.RG8UI),k===t.UNSIGNED_SHORT&&(j=t.RG16UI),k===t.UNSIGNED_INT&&(j=t.RG32UI),k===t.BYTE&&(j=t.RG8I),k===t.SHORT&&(j=t.RG16I),k===t.INT&&(j=t.RG32I)),b===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(j=t.RGB8UI),k===t.UNSIGNED_SHORT&&(j=t.RGB16UI),k===t.UNSIGNED_INT&&(j=t.RGB32UI),k===t.BYTE&&(j=t.RGB8I),k===t.SHORT&&(j=t.RGB16I),k===t.INT&&(j=t.RGB32I)),b===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),k===t.UNSIGNED_INT&&(j=t.RGBA32UI),k===t.BYTE&&(j=t.RGBA8I),k===t.SHORT&&(j=t.RGBA16I),k===t.INT&&(j=t.RGBA32I)),b===t.RGB&&(k===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),b===t.RGBA){const Ae=re?yl:lt.getTransfer(Y);k===t.FLOAT&&(j=t.RGBA32F),k===t.HALF_FLOAT&&(j=t.RGBA16F),k===t.UNSIGNED_BYTE&&(j=Ae===vt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(R,b){let k;return R?b===null||b===Si||b===Uo?k=t.DEPTH24_STENCIL8:b===hi?k=t.DEPTH32F_STENCIL8:b===No&&(k=t.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Si||b===Uo?k=t.DEPTH_COMPONENT24:b===hi?k=t.DEPTH_COMPONENT32F:b===No&&(k=t.DEPTH_COMPONENT16),k}function T(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==$t&&R.minFilter!==tn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){const b=R.target;b.removeEventListener("dispose",C),S(b),b.isVideoTexture&&u.delete(b)}function L(R){const b=R.target;b.removeEventListener("dispose",L),N(b)}function S(R){const b=i.get(R);if(b.__webglInit===void 0)return;const k=R.source,Y=f.get(k);if(Y){const re=Y[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(R),Object.keys(Y).length===0&&f.delete(k)}i.remove(R)}function M(R){const b=i.get(R);t.deleteTexture(b.__webglTexture);const k=R.source,Y=f.get(k);delete Y[b.__cacheKey],o.memory.textures--}function N(R){const b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let re=0;re<b.__webglFramebuffer[Y].length;re++)t.deleteFramebuffer(b.__webglFramebuffer[Y][re]);else t.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)t.deleteFramebuffer(b.__webglFramebuffer[Y]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=R.textures;for(let Y=0,re=k.length;Y<re;Y++){const j=i.get(k[Y]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(k[Y])}i.remove(R)}let D=0;function U(){D=0}function V(){const R=D;return R>=s.maxTextures&&je("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function $(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function B(R,b){const k=i.get(R);if(R.isVideoTexture&&me(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const Y=R.image;if(Y===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{te(k,R,b);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+b)}function w(R,b){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){te(k,R,b);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+b)}function A(R,b){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){te(k,R,b);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+b)}function O(R,b){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){se(k,R,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+b)}const X={[$u]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[Xu]:t.MIRRORED_REPEAT},oe={[$t]:t.NEAREST,[q3]:t.NEAREST_MIPMAP_NEAREST,[fa]:t.NEAREST_MIPMAP_LINEAR,[tn]:t.LINEAR,[Lc]:t.LINEAR_MIPMAP_NEAREST,[Ns]:t.LINEAR_MIPMAP_LINEAR},he={[Z3]:t.NEVER,[n2]:t.ALWAYS,[J3]:t.LESS,[_d]:t.LEQUAL,[Q3]:t.EQUAL,[vd]:t.GEQUAL,[e2]:t.GREATER,[t2]:t.NOTEQUAL};function ie(R,b){if(b.type===hi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===tn||b.magFilter===Lc||b.magFilter===fa||b.magFilter===Ns||b.minFilter===tn||b.minFilter===Lc||b.minFilter===fa||b.minFilter===Ns)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,X[b.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,X[b.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,X[b.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,oe[b.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,oe[b.minFilter]),b.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,he[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$t||b.minFilter!==fa&&b.minFilter!==Ns||b.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ae(R,b){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));const Y=b.source;let re=f.get(Y);re===void 0&&(re={},f.set(Y,re));const j=$(b);if(j!==R.__cacheKey){re[j]===void 0&&(re[j]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),re[j].usedTimes++;const Ae=re[R.__cacheKey];Ae!==void 0&&(re[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&M(b)),R.__cacheKey=j,R.__webglTexture=re[j].texture}return k}function Ue(R,b,k){return Math.floor(Math.floor(R/k)/b)}function ze(R,b,k,Y){const j=R.updateRanges;if(j.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,k,Y,b.data);else{j.sort((xe,be)=>xe.start-be.start);let Ae=0;for(let xe=1;xe<j.length;xe++){const be=j[Ae],Ce=j[xe],De=be.start+be.count,Ie=Ue(Ce.start,b.width,4),Qe=Ue(be.start,b.width,4);Ce.start<=De+1&&Ie===Qe&&Ue(Ce.start+Ce.count-1,b.width,4)===Ie?be.count=Math.max(be.count,Ce.start+Ce.count-be.start):(++Ae,j[Ae]=Ce)}j.length=Ae+1;const ye=t.getParameter(t.UNPACK_ROW_LENGTH),Fe=t.getParameter(t.UNPACK_SKIP_PIXELS),He=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let xe=0,be=j.length;xe<be;xe++){const Ce=j[xe],De=Math.floor(Ce.start/4),Ie=Math.ceil(Ce.count/4),Qe=De%b.width,H=Math.floor(De/b.width),we=Ie,Ee=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,H),n.texSubImage2D(t.TEXTURE_2D,0,Qe,H,we,Ee,k,Y,b.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ye),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(t.UNPACK_SKIP_ROWS,He)}}function te(R,b,k){let Y=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=t.TEXTURE_3D);const re=ae(R,b),j=b.source;n.bindTexture(Y,R.__webglTexture,t.TEXTURE0+k);const Ae=i.get(j);if(j.version!==Ae.__version||re===!0){n.activeTexture(t.TEXTURE0+k);const ye=lt.getPrimaries(lt.workingColorSpace),Fe=b.colorSpace===as?null:lt.getPrimaries(b.colorSpace),He=b.colorSpace===as||ye===Fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let xe=_(b.image,!1,s.maxTextureSize);xe=ce(b,xe);const be=r.convert(b.format,b.colorSpace),Ce=r.convert(b.type);let De=E(b.internalFormat,be,Ce,b.colorSpace,b.isVideoTexture);ie(Y,b);let Ie;const Qe=b.mipmaps,H=b.isVideoTexture!==!0,we=Ae.__version===void 0||re===!0,Ee=j.dataReady,Oe=T(b,xe);if(b.isDepthTexture)De=y(b.format===Us,b.type),we&&(H?n.texStorage2D(t.TEXTURE_2D,1,De,xe.width,xe.height):n.texImage2D(t.TEXTURE_2D,0,De,xe.width,xe.height,0,be,Ce,null));else if(b.isDataTexture)if(Qe.length>0){H&&we&&n.texStorage2D(t.TEXTURE_2D,Oe,De,Qe[0].width,Qe[0].height);for(let Se=0,le=Qe.length;Se<le;Se++)Ie=Qe[Se],H?Ee&&n.texSubImage2D(t.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,be,Ce,Ie.data):n.texImage2D(t.TEXTURE_2D,Se,De,Ie.width,Ie.height,0,be,Ce,Ie.data);b.generateMipmaps=!1}else H?(we&&n.texStorage2D(t.TEXTURE_2D,Oe,De,xe.width,xe.height),Ee&&ze(b,xe,be,Ce)):n.texImage2D(t.TEXTURE_2D,0,De,xe.width,xe.height,0,be,Ce,xe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){H&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Oe,De,Qe[0].width,Qe[0].height,xe.depth);for(let Se=0,le=Qe.length;Se<le;Se++)if(Ie=Qe[Se],b.format!==$n)if(be!==null)if(H){if(Ee)if(b.layerUpdates.size>0){const ke=Wp(Ie.width,Ie.height,b.format,b.type);for(const Je of b.layerUpdates){const Tt=Ie.data.subarray(Je*ke/Ie.data.BYTES_PER_ELEMENT,(Je+1)*ke/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Se,0,0,Je,Ie.width,Ie.height,1,be,Tt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,xe.depth,be,Ie.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Se,De,Ie.width,Ie.height,xe.depth,0,Ie.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,xe.depth,be,Ce,Ie.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Se,De,Ie.width,Ie.height,xe.depth,0,be,Ce,Ie.data)}else{H&&we&&n.texStorage2D(t.TEXTURE_2D,Oe,De,Qe[0].width,Qe[0].height);for(let Se=0,le=Qe.length;Se<le;Se++)Ie=Qe[Se],b.format!==$n?be!==null?H?Ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,be,Ie.data):n.compressedTexImage2D(t.TEXTURE_2D,Se,De,Ie.width,Ie.height,0,Ie.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ee&&n.texSubImage2D(t.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,be,Ce,Ie.data):n.texImage2D(t.TEXTURE_2D,Se,De,Ie.width,Ie.height,0,be,Ce,Ie.data)}else if(b.isDataArrayTexture)if(H){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Oe,De,xe.width,xe.height,xe.depth),Ee)if(b.layerUpdates.size>0){const Se=Wp(xe.width,xe.height,b.format,b.type);for(const le of b.layerUpdates){const ke=xe.data.subarray(le*Se/xe.data.BYTES_PER_ELEMENT,(le+1)*Se/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,xe.width,xe.height,1,be,Ce,ke)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,be,Ce,xe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,xe.width,xe.height,xe.depth,0,be,Ce,xe.data);else if(b.isData3DTexture)H?(we&&n.texStorage3D(t.TEXTURE_3D,Oe,De,xe.width,xe.height,xe.depth),Ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,be,Ce,xe.data)):n.texImage3D(t.TEXTURE_3D,0,De,xe.width,xe.height,xe.depth,0,be,Ce,xe.data);else if(b.isFramebufferTexture){if(we)if(H)n.texStorage2D(t.TEXTURE_2D,Oe,De,xe.width,xe.height);else{let Se=xe.width,le=xe.height;for(let ke=0;ke<Oe;ke++)n.texImage2D(t.TEXTURE_2D,ke,De,Se,le,0,be,Ce,null),Se>>=1,le>>=1}}else if(Qe.length>0){if(H&&we){const Se=ge(Qe[0]);n.texStorage2D(t.TEXTURE_2D,Oe,De,Se.width,Se.height)}for(let Se=0,le=Qe.length;Se<le;Se++)Ie=Qe[Se],H?Ee&&n.texSubImage2D(t.TEXTURE_2D,Se,0,0,be,Ce,Ie):n.texImage2D(t.TEXTURE_2D,Se,De,be,Ce,Ie);b.generateMipmaps=!1}else if(H){if(we){const Se=ge(xe);n.texStorage2D(t.TEXTURE_2D,Oe,De,Se.width,Se.height)}Ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,be,Ce,xe)}else n.texImage2D(t.TEXTURE_2D,0,De,be,Ce,xe);p(b)&&g(Y),Ae.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function se(R,b,k){if(b.image.length!==6)return;const Y=ae(R,b),re=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const j=i.get(re);if(re.version!==j.__version||Y===!0){n.activeTexture(t.TEXTURE0+k);const Ae=lt.getPrimaries(lt.workingColorSpace),ye=b.colorSpace===as?null:lt.getPrimaries(b.colorSpace),Fe=b.colorSpace===as||Ae===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const He=b.isCompressedTexture||b.image[0].isCompressedTexture,xe=b.image[0]&&b.image[0].isDataTexture,be=[];for(let le=0;le<6;le++)!He&&!xe?be[le]=_(b.image[le],!0,s.maxCubemapSize):be[le]=xe?b.image[le].image:b.image[le],be[le]=ce(b,be[le]);const Ce=be[0],De=r.convert(b.format,b.colorSpace),Ie=r.convert(b.type),Qe=E(b.internalFormat,De,Ie,b.colorSpace),H=b.isVideoTexture!==!0,we=j.__version===void 0||Y===!0,Ee=re.dataReady;let Oe=T(b,Ce);ie(t.TEXTURE_CUBE_MAP,b);let Se;if(He){H&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,Qe,Ce.width,Ce.height);for(let le=0;le<6;le++){Se=be[le].mipmaps;for(let ke=0;ke<Se.length;ke++){const Je=Se[ke];b.format!==$n?De!==null?H?Ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,0,0,Je.width,Je.height,De,Je.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,Qe,Je.width,Je.height,0,Je.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,0,0,Je.width,Je.height,De,Ie,Je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke,Qe,Je.width,Je.height,0,De,Ie,Je.data)}}}else{if(Se=b.mipmaps,H&&we){Se.length>0&&Oe++;const le=ge(be[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,Qe,le.width,le.height)}for(let le=0;le<6;le++)if(xe){H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be[le].width,be[le].height,De,Ie,be[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Qe,be[le].width,be[le].height,0,De,Ie,be[le].data);for(let ke=0;ke<Se.length;ke++){const Tt=Se[ke].image[le].image;H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,0,0,Tt.width,Tt.height,De,Ie,Tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,Qe,Tt.width,Tt.height,0,De,Ie,Tt.data)}}else{H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,De,Ie,be[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Qe,De,Ie,be[le]);for(let ke=0;ke<Se.length;ke++){const Je=Se[ke];H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,0,0,De,Ie,Je.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ke+1,Qe,De,Ie,Je.image[le])}}}p(b)&&g(t.TEXTURE_CUBE_MAP),j.__version=re.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function _e(R,b,k,Y,re,j){const Ae=r.convert(k.format,k.colorSpace),ye=r.convert(k.type),Fe=E(k.internalFormat,Ae,ye,k.colorSpace),He=i.get(b),xe=i.get(k);if(xe.__renderTarget=b,!He.__hasExternalTextures){const be=Math.max(1,b.width>>j),Ce=Math.max(1,b.height>>j);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,j,Fe,be,Ce,b.depth,0,Ae,ye,null):n.texImage2D(re,j,Fe,be,Ce,0,Ae,ye,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ve(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,re,xe.__webglTexture,0,I(b)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,re,xe.__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(R,b,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),b.depthBuffer){const Y=b.depthTexture,re=Y&&Y.isDepthTexture?Y.type:null,j=y(b.stencilBuffer,re),Ae=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ve(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(b),j,b.width,b.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(b),j,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,j,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,R)}else{const Y=b.textures;for(let re=0;re<Y.length;re++){const j=Y[re],Ae=r.convert(j.format,j.colorSpace),ye=r.convert(j.type),Fe=E(j.internalFormat,Ae,ye,j.colorSpace);ve(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(b),Fe,b.width,b.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(b),Fe,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Fe,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Be(R,b,k){const Y=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=i.get(b.depthTexture);if(re.__renderTarget=b,(!re.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y){if(re.__webglInit===void 0&&(re.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),re.__webglTexture===void 0){re.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),ie(t.TEXTURE_CUBE_MAP,b.depthTexture);const He=r.convert(b.depthTexture.format),xe=r.convert(b.depthTexture.type);let be;b.depthTexture.format===Wi?be=t.DEPTH_COMPONENT24:b.depthTexture.format===Us&&(be=t.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,be,b.width,b.height,0,He,xe,null)}}else B(b.depthTexture,0);const j=re.__webglTexture,Ae=I(b),ye=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,Fe=b.depthTexture.format===Us?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===Wi)ve(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Fe,ye,j,0,Ae):t.framebufferTexture2D(t.FRAMEBUFFER,Fe,ye,j,0);else if(b.depthTexture.format===Us)ve(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Fe,ye,j,0,Ae):t.framebufferTexture2D(t.FRAMEBUFFER,Fe,ye,j,0);else throw new Error("Unknown depthTexture format")}function $e(R){const b=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const re=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",re)};Y.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=Y}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let Y=0;Y<6;Y++)Be(b.__webglFramebuffer[Y],R,Y);else{const Y=R.texture.mipmaps;Y&&Y.length>0?Be(b.__webglFramebuffer[0],R,0):Be(b.__webglFramebuffer,R,0)}else if(k){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=t.createRenderbuffer(),Ye(b.__webglDepthbuffer[Y],R,!1);else{const re=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,j)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),Ye(b.__webglDepthbuffer,R,!1);else{const re=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,j)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(R,b,k){const Y=i.get(R);b!==void 0&&_e(Y.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&$e(R)}function z(R){const b=R.texture,k=i.get(R),Y=i.get(b);R.addEventListener("dispose",L);const re=R.textures,j=R.isWebGLCubeRenderTarget===!0,Ae=re.length>1;if(Ae||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=b.version,o.memory.textures++),j){k.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[ye]=[];for(let Fe=0;Fe<b.mipmaps.length;Fe++)k.__webglFramebuffer[ye][Fe]=t.createFramebuffer()}else k.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let ye=0;ye<b.mipmaps.length;ye++)k.__webglFramebuffer[ye]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let ye=0,Fe=re.length;ye<Fe;ye++){const He=i.get(re[ye]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&ve(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ye=0;ye<re.length;ye++){const Fe=re[ye];k.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ye]);const He=r.convert(Fe.format,Fe.colorSpace),xe=r.convert(Fe.type),be=E(Fe.internalFormat,He,xe,Fe.colorSpace,R.isXRRenderTarget===!0),Ce=I(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,be,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,k.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),Ye(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),ie(t.TEXTURE_CUBE_MAP,b);for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0)for(let Fe=0;Fe<b.mipmaps.length;Fe++)_e(k.__webglFramebuffer[ye][Fe],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe);else _e(k.__webglFramebuffer[ye],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);p(b)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let ye=0,Fe=re.length;ye<Fe;ye++){const He=re[ye],xe=i.get(He);let be=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(be=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(be,xe.__webglTexture),ie(be,He),_e(k.__webglFramebuffer,R,He,t.COLOR_ATTACHMENT0+ye,be,0),p(He)&&g(be)}n.unbindTexture()}else{let ye=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ye=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ye,Y.__webglTexture),ie(ye,b),b.mipmaps&&b.mipmaps.length>0)for(let Fe=0;Fe<b.mipmaps.length;Fe++)_e(k.__webglFramebuffer[Fe],R,b,t.COLOR_ATTACHMENT0,ye,Fe);else _e(k.__webglFramebuffer,R,b,t.COLOR_ATTACHMENT0,ye,0);p(b)&&g(ye),n.unbindTexture()}R.depthBuffer&&$e(R)}function q(R){const b=R.textures;for(let k=0,Y=b.length;k<Y;k++){const re=b[k];if(p(re)){const j=x(R),Ae=i.get(re).__webglTexture;n.bindTexture(j,Ae),g(j),n.unbindTexture()}}}const ue=[],Q=[];function fe(R){if(R.samples>0){if(ve(R)===!1){const b=R.textures,k=R.width,Y=R.height;let re=t.COLOR_BUFFER_BIT;const j=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(R),ye=b.length>1;if(ye)for(let He=0;He<b.length;He++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Fe=R.texture.mipmaps;Fe&&Fe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let He=0;He<b.length;He++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ye){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[He]);const xe=i.get(b[He]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,xe,0)}t.blitFramebuffer(0,0,k,Y,0,0,k,Y,re,t.NEAREST),l===!0&&(ue.length=0,Q.length=0,ue.push(t.COLOR_ATTACHMENT0+He),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ue.push(j),Q.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Q)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let He=0;He<b.length;He++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[He]);const xe=i.get(b[He]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.TEXTURE_2D,xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function I(R){return Math.min(s.maxSamples,R.samples)}function ve(R){const b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function me(R){const b=o.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function ce(R,b){const k=R.colorSpace,Y=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Dr&&k!==as&&(lt.getTransfer(k)===vt?(Y!==$n||re!==On)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",k)),b}function ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=B,this.setTexture2DArray=w,this.setTexture3D=A,this.setTextureCube=O,this.rebindTextures=F,this.setupRenderTarget=z,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function XU(t,e){function n(i,s=as){let r;const o=lt.getTransfer(s);if(i===On)return t.UNSIGNED_BYTE;if(i===dd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===hd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===s0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===r0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===n0)return t.BYTE;if(i===i0)return t.SHORT;if(i===No)return t.UNSIGNED_SHORT;if(i===fd)return t.INT;if(i===Si)return t.UNSIGNED_INT;if(i===hi)return t.FLOAT;if(i===Gi)return t.HALF_FLOAT;if(i===o0)return t.ALPHA;if(i===a0)return t.RGB;if(i===$n)return t.RGBA;if(i===Wi)return t.DEPTH_COMPONENT;if(i===Us)return t.DEPTH_STENCIL;if(i===l0)return t.RED;if(i===pd)return t.RED_INTEGER;if(i===Lr)return t.RG;if(i===md)return t.RG_INTEGER;if(i===gd)return t.RGBA_INTEGER;if(i===ja||i===Ka||i===Za||i===Ja)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qu||i===Yu||i===ju||i===Ku)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===qu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ju)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ku)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zu||i===Ju||i===Qu||i===ef||i===tf||i===nf||i===sf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Zu||i===Ju)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Qu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ef)return r.COMPRESSED_R11_EAC;if(i===tf)return r.COMPRESSED_SIGNED_R11_EAC;if(i===nf)return r.COMPRESSED_RG11_EAC;if(i===sf)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rf||i===of||i===af||i===lf||i===cf||i===uf||i===ff||i===df||i===hf||i===pf||i===mf||i===gf||i===_f||i===vf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===of)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===af)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ff)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===df)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_f)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xf||i===yf||i===Sf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===xf)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mf||i===bf||i===Ef||i===wf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mf)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ef)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Uo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const qU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new v0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Cn({vertexShader:qU,fragmentShader:YU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zt(new nc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KU extends Fr{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,m=null;const _=typeof XRWebGLBinding<"u",p=new jU,g={},x=n.getContextAttributes();let E=null,y=null;const T=[],C=[],L=new ut;let S=null;const M=new Fn;M.viewport=new Nt;const N=new Fn;N.viewport=new Nt;const D=[M,N],U=new lL;let V=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let se=T[te];return se===void 0&&(se=new Oc,T[te]=se),se.getTargetRaySpace()},this.getControllerGrip=function(te){let se=T[te];return se===void 0&&(se=new Oc,T[te]=se),se.getGripSpace()},this.getHand=function(te){let se=T[te];return se===void 0&&(se=new Oc,T[te]=se),se.getHandSpace()};function B(te){const se=C.indexOf(te.inputSource);if(se===-1)return;const _e=T[se];_e!==void 0&&(_e.update(te.inputSource,te.frame,c||o),_e.dispatchEvent({type:te.type,data:te.inputSource}))}function w(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",w),s.removeEventListener("inputsourceschange",A);for(let te=0;te<T.length;te++){const se=C[te];se!==null&&(C[te]=null,T[te].disconnect(se))}V=null,$=null,p.reset();for(const te in g)delete g[te];e.setRenderTarget(E),h=null,f=null,d=null,s=null,y=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",w),s.addEventListener("inputsourceschange",A),x.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ye=null,Be=null;x.depth&&(Be=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=x.stencil?Us:Wi,Ye=x.stencil?Uo:Si);const $e={colorFormat:n.RGBA8,depthFormat:Be,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer($e),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new xi(f.textureWidth,f.textureHeight,{format:$n,type:On,depthTexture:new Oo(f.textureWidth,f.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,_e),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new xi(h.framebufferWidth,h.framebufferHeight,{format:$n,type:On,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ze.setContext(s),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function A(te){for(let se=0;se<te.removed.length;se++){const _e=te.removed[se],Ye=C.indexOf(_e);Ye>=0&&(C[Ye]=null,T[Ye].disconnect(_e))}for(let se=0;se<te.added.length;se++){const _e=te.added[se];let Ye=C.indexOf(_e);if(Ye===-1){for(let $e=0;$e<T.length;$e++)if($e>=C.length){C.push(_e),Ye=$e;break}else if(C[$e]===null){C[$e]=_e,Ye=$e;break}if(Ye===-1)break}const Be=T[Ye];Be&&Be.connect(_e)}}const O=new W,X=new W;function oe(te,se,_e){O.setFromMatrixPosition(se.matrixWorld),X.setFromMatrixPosition(_e.matrixWorld);const Ye=O.distanceTo(X),Be=se.projectionMatrix.elements,$e=_e.projectionMatrix.elements,F=Be[14]/(Be[10]-1),z=Be[14]/(Be[10]+1),q=(Be[9]+1)/Be[5],ue=(Be[9]-1)/Be[5],Q=(Be[8]-1)/Be[0],fe=($e[8]+1)/$e[0],I=F*Q,ve=F*fe,me=Ye/(-Q+fe),ce=me*-Q;if(se.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ce),te.translateZ(me),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Be[10]===-1)te.projectionMatrix.copy(se.projectionMatrix),te.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const ge=F+me,R=z+me,b=I-ce,k=ve+(Ye-ce),Y=q*z/R*ge,re=ue*z/R*ge;te.projectionMatrix.makePerspective(b,k,Y,re,ge,R),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function he(te,se){se===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(se.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let se=te.near,_e=te.far;p.texture!==null&&(p.depthNear>0&&(se=p.depthNear),p.depthFar>0&&(_e=p.depthFar)),U.near=N.near=M.near=se,U.far=N.far=M.far=_e,(V!==U.near||$!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),V=U.near,$=U.far),U.layers.mask=te.layers.mask|6,M.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;const Ye=te.parent,Be=U.cameras;he(U,Ye);for(let $e=0;$e<Be.length;$e++)he(Be[$e],Ye);Be.length===2?oe(U,M,N):U.projectionMatrix.copy(M.projectionMatrix),ie(te,U,Ye)};function ie(te,se,_e){_e===null?te.matrix.copy(se.matrixWorld):(te.matrix.copy(_e.matrixWorld),te.matrix.invert(),te.matrix.multiply(se.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(se.projectionMatrix),te.projectionMatrixInverse.copy(se.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Fo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(te){return g[te]};let ae=null;function Ue(te,se){if(u=se.getViewerPose(c||o),m=se,u!==null){const _e=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Ye=!1;_e.length!==U.cameras.length&&(U.cameras.length=0,Ye=!0);for(let z=0;z<_e.length;z++){const q=_e[z];let ue=null;if(h!==null)ue=h.getViewport(q);else{const fe=d.getViewSubImage(f,q);ue=fe.viewport,z===0&&(e.setRenderTargetTextures(y,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(y))}let Q=D[z];Q===void 0&&(Q=new Fn,Q.layers.enable(z),Q.viewport=new Nt,D[z]=Q),Q.matrix.fromArray(q.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(q.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ue.x,ue.y,ue.width,ue.height),z===0&&(U.matrix.copy(Q.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ye===!0&&U.cameras.push(Q)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const z=d.getDepthInformation(_e[0]);z&&z.isValid&&z.texture&&p.init(z,s.renderState)}if(Be&&Be.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let z=0;z<_e.length;z++){const q=_e[z].camera;if(q){let ue=g[q];ue||(ue=new v0,g[q]=ue);const Q=d.getCameraImage(q);ue.sourceTexture=Q}}}}for(let _e=0;_e<T.length;_e++){const Ye=C[_e],Be=T[_e];Ye!==null&&Be!==void 0&&Be.update(Ye,se,c||o)}ae&&ae(te,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),m=null}const ze=new M0;ze.setAnimationLoop(Ue),this.setAnimationLoop=function(te){ae=te},this.dispose=function(){}}}const Es=new $i,ZU=new Rt;function JU(t,e){function n(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,x0(t)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,x,E,y){g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&h(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,x,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,n(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,n(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,n(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===_n&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,n(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===_n&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,n(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,n(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=e.get(g),E=x.envMap,y=x.envMapRotation;E&&(p.envMap.value=E,Es.copy(y),Es.x*=-1,Es.y*=-1,Es.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),p.envMapRotation.value.setFromMatrix4(ZU.makeRotationFromEuler(Es)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,n(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=E*.5,g.map&&(p.map.value=g.map,n(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,n(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,n(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,n(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,x){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===_n&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const x=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function QU(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const y=E.program;i.uniformBlockBinding(x,y)}function c(x,E){let y=s[x.id];y===void 0&&(m(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",p));const T=E.program;i.updateUBOMapping(x,T);const C=e.render.frame;r[x.id]!==C&&(f(x),r[x.id]=C)}function u(x){const E=d();x.__bindingPointIndex=E;const y=t.createBuffer(),T=x.__size,C=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,T,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,y),y}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const E=s[x.id],y=x.uniforms,T=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let C=0,L=y.length;C<L;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,N=S.length;M<N;M++){const D=S[M];if(h(D,C,M,T)===!0){const U=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let B=0;B<V.length;B++){const w=V[B],A=_(w);typeof w=="number"||typeof w=="boolean"?(D.__data[0]=w,t.bufferSubData(t.UNIFORM_BUFFER,U+$,D.__data)):w.isMatrix3?(D.__data[0]=w.elements[0],D.__data[1]=w.elements[1],D.__data[2]=w.elements[2],D.__data[3]=0,D.__data[4]=w.elements[3],D.__data[5]=w.elements[4],D.__data[6]=w.elements[5],D.__data[7]=0,D.__data[8]=w.elements[6],D.__data[9]=w.elements[7],D.__data[10]=w.elements[8],D.__data[11]=0):(w.toArray(D.__data,$),$+=A.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(x,E,y,T){const C=x.value,L=E+"_"+y;if(T[L]===void 0)return typeof C=="number"||typeof C=="boolean"?T[L]=C:T[L]=C.clone(),!0;{const S=T[L];if(typeof C=="number"||typeof C=="boolean"){if(S!==C)return T[L]=C,!0}else if(S.equals(C)===!1)return S.copy(C),!0}return!1}function m(x){const E=x.uniforms;let y=0;const T=16;for(let L=0,S=E.length;L<S;L++){const M=Array.isArray(E[L])?E[L]:[E[L]];for(let N=0,D=M.length;N<D;N++){const U=M[N],V=Array.isArray(U.value)?U.value:[U.value];for(let $=0,B=V.length;$<B;$++){const w=V[$],A=_(w),O=y%T,X=O%A.boundary,oe=O+X;y+=X,oe!==0&&T-oe<A.storage&&(y+=T-oe),U.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=A.storage}}}const C=y%T;return C>0&&(y+=T-C),x.__size=y,x.__cache={},this}function _(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",x),E}function p(x){const E=x.target;E.removeEventListener("dispose",p);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(const x in s)t.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}const eF=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function tF(){return ii===null&&(ii=new H2(eF,16,16,Lr,Gi),ii.name="DFG_LUT",ii.minFilter=tn,ii.magFilter=tn,ii.wrapS=Fi,ii.wrapT=Fi,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class nF{constructor(e={}){const{canvas:n=s2(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=On}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=h,p=new Set([gd,md,pd]),g=new Set([On,Si,No,Uo,dd,hd]),x=new Uint32Array(4),E=new Int32Array(4);let y=null,T=null;const C=[],L=[];let S=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let N=!1;this._outputColorSpace=Un;let D=0,U=0,V=null,$=-1,B=null;const w=new Nt,A=new Nt;let O=null;const X=new ct(0);let oe=0,he=n.width,ie=n.height,ae=1,Ue=null,ze=null;const te=new Nt(0,0,he,ie),se=new Nt(0,0,he,ie);let _e=!1;const Ye=new m0;let Be=!1,$e=!1;const F=new Rt,z=new W,q=new Nt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function fe(){return V===null?ae:1}let I=i;function ve(P,G){return n.getContext(P,G)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ud}`),n.addEventListener("webglcontextlost",ke,!1),n.addEventListener("webglcontextrestored",Je,!1),n.addEventListener("webglcontextcreationerror",Tt,!1),I===null){const G="webgl2";if(I=ve(G,P),I===null)throw ve(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw dt("WebGLRenderer: "+P.message),P}let me,ce,ge,R,b,k,Y,re,j,Ae,ye,Fe,He,xe,be,Ce,De,Ie,Qe,H,we,Ee,Oe;function Se(){me=new nN(I),me.init(),we=new XU(I,me),ce=new YI(I,me,e,we),ge=new WU(I,me),ce.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),R=new rN(I),b=new PU,k=new $U(I,me,ge,b,ce,we,R),Y=new tN(M),re=new uL(I),Ee=new XI(I,re),j=new iN(I,re,R,Ee),Ae=new aN(I,j,re,Ee,R),Ie=new oN(I,ce,k),be=new jI(b),ye=new RU(M,Y,me,ce,Ee,be),Fe=new JU(M,b),He=new DU,xe=new BU(me),De=new $I(M,Y,ge,Ae,m,l),Ce=new GU(M,Ae,ce),Oe=new QU(I,R,ce,ge),Qe=new qI(I,me,R),H=new sN(I,me,R),R.programs=ye.programs,M.capabilities=ce,M.extensions=me,M.properties=b,M.renderLists=He,M.shadowMap=Ce,M.state=ge,M.info=R}Se(),_!==On&&(S=new cN(_,n.width,n.height,s,r));const le=new KU(M,I);this.xr=le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const P=me.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=me.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(P){P!==void 0&&(ae=P,this.setSize(he,ie,!1))},this.getSize=function(P){return P.set(he,ie)},this.setSize=function(P,G,ee=!0){if(le.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}he=P,ie=G,n.width=Math.floor(P*ae),n.height=Math.floor(G*ae),ee===!0&&(n.style.width=P+"px",n.style.height=G+"px"),S!==null&&S.setSize(n.width,n.height),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(he*ae,ie*ae).floor()},this.setDrawingBufferSize=function(P,G,ee){he=P,ie=G,ae=ee,n.width=Math.floor(P*ee),n.height=Math.floor(G*ee),this.setViewport(0,0,P,G)},this.setEffects=function(P){if(_===On){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let G=0;G<P.length;G++)if(P[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(te)},this.setViewport=function(P,G,ee,Z){P.isVector4?te.set(P.x,P.y,P.z,P.w):te.set(P,G,ee,Z),ge.viewport(w.copy(te).multiplyScalar(ae).round())},this.getScissor=function(P){return P.copy(se)},this.setScissor=function(P,G,ee,Z){P.isVector4?se.set(P.x,P.y,P.z,P.w):se.set(P,G,ee,Z),ge.scissor(A.copy(se).multiplyScalar(ae).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(P){ge.setScissorTest(_e=P)},this.setOpaqueSort=function(P){Ue=P},this.setTransparentSort=function(P){ze=P},this.getClearColor=function(P){return P.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(P=!0,G=!0,ee=!0){let Z=0;if(P){let K=!1;if(V!==null){const Pe=V.texture.format;K=p.has(Pe)}if(K){const Pe=V.texture.type,Ne=g.has(Pe),Le=De.getClearColor(),Ve=De.getClearAlpha(),We=Le.r,et=Le.g,st=Le.b;Ne?(x[0]=We,x[1]=et,x[2]=st,x[3]=Ve,I.clearBufferuiv(I.COLOR,0,x)):(E[0]=We,E[1]=et,E[2]=st,E[3]=Ve,I.clearBufferiv(I.COLOR,0,E))}else Z|=I.COLOR_BUFFER_BIT}G&&(Z|=I.DEPTH_BUFFER_BIT),ee&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ke,!1),n.removeEventListener("webglcontextrestored",Je,!1),n.removeEventListener("webglcontextcreationerror",Tt,!1),De.dispose(),He.dispose(),xe.dispose(),b.dispose(),Y.dispose(),Ae.dispose(),Ee.dispose(),Oe.dispose(),ye.dispose(),le.dispose(),le.removeEventListener("sessionstart",wd),le.removeEventListener("sessionend",Td),ps.stop()};function ke(P){P.preventDefault(),xp("WebGLRenderer: Context Lost."),N=!0}function Je(){xp("WebGLRenderer: Context Restored."),N=!1;const P=R.autoReset,G=Ce.enabled,ee=Ce.autoUpdate,Z=Ce.needsUpdate,K=Ce.type;Se(),R.autoReset=P,Ce.enabled=G,Ce.autoUpdate=ee,Ce.needsUpdate=Z,Ce.type=K}function Tt(P){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function _t(P){const G=P.target;G.removeEventListener("dispose",_t),bi(G)}function bi(P){Ei(P),b.remove(P)}function Ei(P){const G=b.get(P).programs;G!==void 0&&(G.forEach(function(ee){ye.releaseProgram(ee)}),P.isShaderMaterial&&ye.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,ee,Z,K,Pe){G===null&&(G=ue);const Ne=K.isMesh&&K.matrixWorld.determinant()<0,Le=P0(P,G,ee,Z,K);ge.setMaterial(Z,Ne);let Ve=ee.index,We=1;if(Z.wireframe===!0){if(Ve=j.getWireframeAttribute(ee),Ve===void 0)return;We=2}const et=ee.drawRange,st=ee.attributes.position;let Xe=et.start*We,xt=(et.start+et.count)*We;Pe!==null&&(Xe=Math.max(Xe,Pe.start*We),xt=Math.min(xt,(Pe.start+Pe.count)*We)),Ve!==null?(Xe=Math.max(Xe,0),xt=Math.min(xt,Ve.count)):st!=null&&(Xe=Math.max(Xe,0),xt=Math.min(xt,st.count));const Dt=xt-Xe;if(Dt<0||Dt===1/0)return;Ee.setup(K,Z,Le,ee,Ve);let Lt,yt=Qe;if(Ve!==null&&(Lt=re.get(Ve),yt=H,yt.setIndex(Lt)),K.isMesh)Z.wireframe===!0?(ge.setLineWidth(Z.wireframeLinewidth*fe()),yt.setMode(I.LINES)):yt.setMode(I.TRIANGLES);else if(K.isLine){let Xt=Z.linewidth;Xt===void 0&&(Xt=1),ge.setLineWidth(Xt*fe()),K.isLineSegments?yt.setMode(I.LINES):K.isLineLoop?yt.setMode(I.LINE_LOOP):yt.setMode(I.LINE_STRIP)}else K.isPoints?yt.setMode(I.POINTS):K.isSprite&&yt.setMode(I.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)bl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))yt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Xt=K._multiDrawStarts,Ge=K._multiDrawCounts,yn=K._multiDrawCount,ft=Ve?re.get(Ve).bytesPerElement:1,Bn=b.get(Z).currentProgram.getUniforms();for(let Qn=0;Qn<yn;Qn++)Bn.setValue(I,"_gl_DrawID",Qn),yt.render(Xt[Qn]/ft,Ge[Qn])}else if(K.isInstancedMesh)yt.renderInstances(Xe,Dt,K.count);else if(ee.isInstancedBufferGeometry){const Xt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ge=Math.min(ee.instanceCount,Xt);yt.renderInstances(Xe,Dt,Ge)}else yt.render(Xe,Dt)};function Ed(P,G,ee){P.transparent===!0&&P.side===fi&&P.forceSinglePass===!1?(P.side=_n,P.needsUpdate=!0,ea(P,G,ee),P.side=ds,P.needsUpdate=!0,ea(P,G,ee),P.side=fi):ea(P,G,ee)}this.compile=function(P,G,ee=null){ee===null&&(ee=P),T=xe.get(ee),T.init(G),L.push(T),ee.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),P!==ee&&P.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights();const Z=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Pe=K.material;if(Pe)if(Array.isArray(Pe))for(let Ne=0;Ne<Pe.length;Ne++){const Le=Pe[Ne];Ed(Le,ee,K),Z.add(Le)}else Ed(Pe,ee,K),Z.add(Pe)}),T=L.pop(),Z},this.compileAsync=function(P,G,ee=null){const Z=this.compile(P,G,ee);return new Promise(K=>{function Pe(){if(Z.forEach(function(Ne){b.get(Ne).currentProgram.isReady()&&Z.delete(Ne)}),Z.size===0){K(P);return}setTimeout(Pe,10)}me.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let rc=null;function R0(P){rc&&rc(P)}function wd(){ps.stop()}function Td(){ps.start()}const ps=new M0;ps.setAnimationLoop(R0),typeof self<"u"&&ps.setContext(self),this.setAnimationLoop=function(P){rc=P,le.setAnimationLoop(P),P===null?ps.stop():ps.start()},le.addEventListener("sessionstart",wd),le.addEventListener("sessionend",Td),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const ee=le.enabled===!0&&le.isPresenting===!0,Z=S!==null&&(V===null||ee)&&S.begin(M,V);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(G),G=le.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,G,V),T=xe.get(P,L.length),T.init(G),L.push(T),F.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ye.setFromProjectionMatrix(F,pi,G.reversedDepth),$e=this.localClippingEnabled,Be=be.init(this.clippingPlanes,$e),y=He.get(P,C.length),y.init(),C.push(y),le.enabled===!0&&le.isPresenting===!0){const Ne=M.xr.getDepthSensingMesh();Ne!==null&&oc(Ne,G,-1/0,M.sortObjects)}oc(P,G,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(Ue,ze),Q=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Q&&De.addToRenderList(y,P),this.info.render.frame++,Be===!0&&be.beginShadows();const K=T.state.shadowsArray;if(Ce.render(K,P,G),Be===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&S.hasRenderPass())===!1){const Ne=y.opaque,Le=y.transmissive;if(T.setupLights(),G.isArrayCamera){const Ve=G.cameras;if(Le.length>0)for(let We=0,et=Ve.length;We<et;We++){const st=Ve[We];Cd(Ne,Le,P,st)}Q&&De.render(P);for(let We=0,et=Ve.length;We<et;We++){const st=Ve[We];Ad(y,P,st,st.viewport)}}else Le.length>0&&Cd(Ne,Le,P,G),Q&&De.render(P),Ad(y,P,G)}V!==null&&U===0&&(k.updateMultisampleRenderTarget(V),k.updateRenderTargetMipmap(V)),Z&&S.end(M),P.isScene===!0&&P.onAfterRender(M,P,G),Ee.resetDefaultState(),$=-1,B=null,L.pop(),L.length>0?(T=L[L.length-1],Be===!0&&be.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?y=C[C.length-1]:y=null};function oc(P,G,ee,Z){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)ee=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)T.pushLight(P),P.castShadow&&T.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ye.intersectsSprite(P)){Z&&q.setFromMatrixPosition(P.matrixWorld).applyMatrix4(F);const Ne=Ae.update(P),Le=P.material;Le.visible&&y.push(P,Ne,Le,ee,q.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ye.intersectsObject(P))){const Ne=Ae.update(P),Le=P.material;if(Z&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),q.copy(P.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),q.copy(Ne.boundingSphere.center)),q.applyMatrix4(P.matrixWorld).applyMatrix4(F)),Array.isArray(Le)){const Ve=Ne.groups;for(let We=0,et=Ve.length;We<et;We++){const st=Ve[We],Xe=Le[st.materialIndex];Xe&&Xe.visible&&y.push(P,Ne,Xe,ee,q.z,st)}}else Le.visible&&y.push(P,Ne,Le,ee,q.z,null)}}const Pe=P.children;for(let Ne=0,Le=Pe.length;Ne<Le;Ne++)oc(Pe[Ne],G,ee,Z)}function Ad(P,G,ee,Z){const{opaque:K,transmissive:Pe,transparent:Ne}=P;T.setupLightsView(ee),Be===!0&&be.setGlobalState(M.clippingPlanes,ee),Z&&ge.viewport(w.copy(Z)),K.length>0&&Qo(K,G,ee),Pe.length>0&&Qo(Pe,G,ee),Ne.length>0&&Qo(Ne,G,ee),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Cd(P,G,ee,Z){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Z.id]===void 0){const Xe=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Z.id]=new xi(1,1,{generateMipmaps:!0,type:Xe?Gi:On,minFilter:Ns,samples:Math.max(4,ce.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Pe=T.state.transmissionRenderTarget[Z.id],Ne=Z.viewport||w;Pe.setSize(Ne.z*M.transmissionResolutionScale,Ne.w*M.transmissionResolutionScale);const Le=M.getRenderTarget(),Ve=M.getActiveCubeFace(),We=M.getActiveMipmapLevel();M.setRenderTarget(Pe),M.getClearColor(X),oe=M.getClearAlpha(),oe<1&&M.setClearColor(16777215,.5),M.clear(),Q&&De.render(ee);const et=M.toneMapping;M.toneMapping=vi;const st=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),T.setupLightsView(Z),Be===!0&&be.setGlobalState(M.clippingPlanes,Z),Qo(P,ee,Z),k.updateMultisampleRenderTarget(Pe),k.updateRenderTargetMipmap(Pe),me.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let xt=0,Dt=G.length;xt<Dt;xt++){const Lt=G[xt],{object:yt,geometry:Xt,material:Ge,group:yn}=Lt;if(Ge.side===fi&&yt.layers.test(Z.layers)){const ft=Ge.side;Ge.side=_n,Ge.needsUpdate=!0,Rd(yt,ee,Z,Xt,Ge,yn),Ge.side=ft,Ge.needsUpdate=!0,Xe=!0}}Xe===!0&&(k.updateMultisampleRenderTarget(Pe),k.updateRenderTargetMipmap(Pe))}M.setRenderTarget(Le,Ve,We),M.setClearColor(X,oe),st!==void 0&&(Z.viewport=st),M.toneMapping=et}function Qo(P,G,ee){const Z=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Pe=P.length;K<Pe;K++){const Ne=P[K],{object:Le,geometry:Ve,group:We}=Ne;let et=Ne.material;et.allowOverride===!0&&Z!==null&&(et=Z),Le.layers.test(ee.layers)&&Rd(Le,G,ee,Ve,et,We)}}function Rd(P,G,ee,Z,K,Pe){P.onBeforeRender(M,G,ee,Z,K,Pe),P.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(M,G,ee,Z,P,Pe),K.transparent===!0&&K.side===fi&&K.forceSinglePass===!1?(K.side=_n,K.needsUpdate=!0,M.renderBufferDirect(ee,G,Z,K,P,Pe),K.side=ds,K.needsUpdate=!0,M.renderBufferDirect(ee,G,Z,K,P,Pe),K.side=fi):M.renderBufferDirect(ee,G,Z,K,P,Pe),P.onAfterRender(M,G,ee,Z,K,Pe)}function ea(P,G,ee){G.isScene!==!0&&(G=ue);const Z=b.get(P),K=T.state.lights,Pe=T.state.shadowsArray,Ne=K.state.version,Le=ye.getParameters(P,K.state,Pe,G,ee),Ve=ye.getProgramCacheKey(Le);let We=Z.programs;Z.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?G.environment:null,Z.fog=G.fog;const et=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;Z.envMap=Y.get(P.envMap||Z.environment,et),Z.envMapRotation=Z.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,We===void 0&&(P.addEventListener("dispose",_t),We=new Map,Z.programs=We);let st=We.get(Ve);if(st!==void 0){if(Z.currentProgram===st&&Z.lightsStateVersion===Ne)return Ld(P,Le),st}else Le.uniforms=ye.getUniforms(P),P.onBeforeCompile(Le,M),st=ye.acquireProgram(Le,Ve),We.set(Ve,st),Z.uniforms=Le.uniforms;const Xe=Z.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=be.uniform),Ld(P,Le),Z.needsLights=D0(P),Z.lightsStateVersion=Ne,Z.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.currentProgram=st,Z.uniformsList=null,st}function Pd(P){if(P.uniformsList===null){const G=P.currentProgram.getUniforms();P.uniformsList=Qa.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function Ld(P,G){const ee=b.get(P);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function P0(P,G,ee,Z,K){G.isScene!==!0&&(G=ue),k.resetTextureUnits();const Pe=G.fog,Ne=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?G.environment:null,Le=V===null?M.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Dr,Ve=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,We=Y.get(Z.envMap||Ne,Ve),et=Z.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,st=!!ee.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Xe=!!ee.morphAttributes.position,xt=!!ee.morphAttributes.normal,Dt=!!ee.morphAttributes.color;let Lt=vi;Z.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Lt=M.toneMapping);const yt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Xt=yt!==void 0?yt.length:0,Ge=b.get(Z),yn=T.state.lights;if(Be===!0&&($e===!0||P!==B)){const Vt=P===B&&Z.id===$;be.setState(Z,P,Vt)}let ft=!1;Z.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==yn.state.version||Ge.outputColorSpace!==Le||K.isBatchedMesh&&Ge.batching===!1||!K.isBatchedMesh&&Ge.batching===!0||K.isBatchedMesh&&Ge.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ge.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ge.instancing===!1||!K.isInstancedMesh&&Ge.instancing===!0||K.isSkinnedMesh&&Ge.skinning===!1||!K.isSkinnedMesh&&Ge.skinning===!0||K.isInstancedMesh&&Ge.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ge.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ge.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ge.instancingMorph===!1&&K.morphTexture!==null||Ge.envMap!==We||Z.fog===!0&&Ge.fog!==Pe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==be.numPlanes||Ge.numIntersection!==be.numIntersection)||Ge.vertexAlphas!==et||Ge.vertexTangents!==st||Ge.morphTargets!==Xe||Ge.morphNormals!==xt||Ge.morphColors!==Dt||Ge.toneMapping!==Lt||Ge.morphTargetsCount!==Xt)&&(ft=!0):(ft=!0,Ge.__version=Z.version);let Bn=Ge.currentProgram;ft===!0&&(Bn=ea(Z,G,K));let Qn=!1,ms=!1,Xs=!1;const Mt=Bn.getUniforms(),Wt=Ge.uniforms;if(ge.useProgram(Bn.program)&&(Qn=!0,ms=!0,Xs=!0),Z.id!==$&&($=Z.id,ms=!0),Qn||B!==P){ge.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Mt.setValue(I,"projectionMatrix",P.projectionMatrix),Mt.setValue(I,"viewMatrix",P.matrixWorldInverse);const ji=Mt.map.cameraPosition;ji!==void 0&&ji.setValue(I,z.setFromMatrixPosition(P.matrixWorld)),ce.logarithmicDepthBuffer&&Mt.setValue(I,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Mt.setValue(I,"isOrthographic",P.isOrthographicCamera===!0),B!==P&&(B=P,ms=!0,Xs=!0)}if(Ge.needsLights&&(yn.state.directionalShadowMap.length>0&&Mt.setValue(I,"directionalShadowMap",yn.state.directionalShadowMap,k),yn.state.spotShadowMap.length>0&&Mt.setValue(I,"spotShadowMap",yn.state.spotShadowMap,k),yn.state.pointShadowMap.length>0&&Mt.setValue(I,"pointShadowMap",yn.state.pointShadowMap,k)),K.isSkinnedMesh){Mt.setOptional(I,K,"bindMatrix"),Mt.setOptional(I,K,"bindMatrixInverse");const Vt=K.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Mt.setValue(I,"boneTexture",Vt.boneTexture,k))}K.isBatchedMesh&&(Mt.setOptional(I,K,"batchingTexture"),Mt.setValue(I,"batchingTexture",K._matricesTexture,k),Mt.setOptional(I,K,"batchingIdTexture"),Mt.setValue(I,"batchingIdTexture",K._indirectTexture,k),Mt.setOptional(I,K,"batchingColorTexture"),K._colorsTexture!==null&&Mt.setValue(I,"batchingColorTexture",K._colorsTexture,k));const Yi=ee.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&Ie.update(K,ee,Bn),(ms||Ge.receiveShadow!==K.receiveShadow)&&(Ge.receiveShadow=K.receiveShadow,Mt.setValue(I,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&G.environment!==null&&(Wt.envMapIntensity.value=G.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=tF()),ms&&(Mt.setValue(I,"toneMappingExposure",M.toneMappingExposure),Ge.needsLights&&L0(Wt,Xs),Pe&&Z.fog===!0&&Fe.refreshFogUniforms(Wt,Pe),Fe.refreshMaterialUniforms(Wt,Z,ae,ie,T.state.transmissionRenderTarget[P.id]),Qa.upload(I,Pd(Ge),Wt,k)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Qa.upload(I,Pd(Ge),Wt,k),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Mt.setValue(I,"center",K.center),Mt.setValue(I,"modelViewMatrix",K.modelViewMatrix),Mt.setValue(I,"normalMatrix",K.normalMatrix),Mt.setValue(I,"modelMatrix",K.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Vt=Z.uniformsGroups;for(let ji=0,qs=Vt.length;ji<qs;ji++){const Dd=Vt[ji];Oe.update(Dd,Bn),Oe.bind(Dd,Bn)}}return Bn}function L0(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function D0(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(P,G,ee){const Z=b.get(P);Z.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),b.get(P.texture).__webglTexture=G,b.get(P.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ee,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,G){const ee=b.get(P);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0};const I0=I.createFramebuffer();this.setRenderTarget=function(P,G=0,ee=0){V=P,D=G,U=ee;let Z=null,K=!1,Pe=!1;if(P){const Le=b.get(P);if(Le.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(I.FRAMEBUFFER,Le.__webglFramebuffer),w.copy(P.viewport),A.copy(P.scissor),O=P.scissorTest,ge.viewport(w),ge.scissor(A),ge.setScissorTest(O),$=-1;return}else if(Le.__webglFramebuffer===void 0)k.setupRenderTarget(P);else if(Le.__hasExternalTextures)k.rebindTextures(P,b.get(P.texture).__webglTexture,b.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const et=P.depthTexture;if(Le.__boundDepthTexture!==et){if(et!==null&&b.has(et)&&(P.width!==et.image.width||P.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(P)}}const Ve=P.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Pe=!0);const We=b.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(We[G])?Z=We[G][ee]:Z=We[G],K=!0):P.samples>0&&k.useMultisampledRTT(P)===!1?Z=b.get(P).__webglMultisampledFramebuffer:Array.isArray(We)?Z=We[ee]:Z=We,w.copy(P.viewport),A.copy(P.scissor),O=P.scissorTest}else w.copy(te).multiplyScalar(ae).floor(),A.copy(se).multiplyScalar(ae).floor(),O=_e;if(ee!==0&&(Z=I0),ge.bindFramebuffer(I.FRAMEBUFFER,Z)&&ge.drawBuffers(P,Z),ge.viewport(w),ge.scissor(A),ge.setScissorTest(O),K){const Le=b.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+G,Le.__webglTexture,ee)}else if(Pe){const Le=G;for(let Ve=0;Ve<P.textures.length;Ve++){const We=b.get(P.textures[Ve]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ve,We.__webglTexture,ee,Le)}}else if(P!==null&&ee!==0){const Le=b.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Le.__webglTexture,ee)}$=-1},this.readRenderTargetPixels=function(P,G,ee,Z,K,Pe,Ne,Le=0){if(!(P&&P.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=b.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve){ge.bindFramebuffer(I.FRAMEBUFFER,Ve);try{const We=P.textures[Le],et=We.format,st=We.type;if(P.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),!ce.textureFormatReadable(et)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(st)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-Z&&ee>=0&&ee<=P.height-K&&I.readPixels(G,ee,Z,K,we.convert(et),we.convert(st),Pe)}finally{const We=V!==null?b.get(V).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(P,G,ee,Z,K,Pe,Ne,Le=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=b.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve)if(G>=0&&G<=P.width-Z&&ee>=0&&ee<=P.height-K){ge.bindFramebuffer(I.FRAMEBUFFER,Ve);const We=P.textures[Le],et=We.format,st=We.type;if(P.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),!ce.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Xe),I.bufferData(I.PIXEL_PACK_BUFFER,Pe.byteLength,I.STREAM_READ),I.readPixels(G,ee,Z,K,we.convert(et),we.convert(st),0);const xt=V!==null?b.get(V).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,xt);const Dt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await r2(I,Dt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Xe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Pe),I.deleteBuffer(Xe),I.deleteSync(Dt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,G=null,ee=0){const Z=Math.pow(2,-ee),K=Math.floor(P.image.width*Z),Pe=Math.floor(P.image.height*Z),Ne=G!==null?G.x:0,Le=G!==null?G.y:0;k.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,ee,0,0,Ne,Le,K,Pe),ge.unbindTexture()};const N0=I.createFramebuffer(),U0=I.createFramebuffer();this.copyTextureToTexture=function(P,G,ee=null,Z=null,K=0,Pe=0){let Ne,Le,Ve,We,et,st,Xe,xt,Dt;const Lt=P.isCompressedTexture?P.mipmaps[Pe]:P.image;if(ee!==null)Ne=ee.max.x-ee.min.x,Le=ee.max.y-ee.min.y,Ve=ee.isBox3?ee.max.z-ee.min.z:1,We=ee.min.x,et=ee.min.y,st=ee.isBox3?ee.min.z:0;else{const Wt=Math.pow(2,-K);Ne=Math.floor(Lt.width*Wt),Le=Math.floor(Lt.height*Wt),P.isDataArrayTexture?Ve=Lt.depth:P.isData3DTexture?Ve=Math.floor(Lt.depth*Wt):Ve=1,We=0,et=0,st=0}Z!==null?(Xe=Z.x,xt=Z.y,Dt=Z.z):(Xe=0,xt=0,Dt=0);const yt=we.convert(G.format),Xt=we.convert(G.type);let Ge;G.isData3DTexture?(k.setTexture3D(G,0),Ge=I.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(k.setTexture2DArray(G,0),Ge=I.TEXTURE_2D_ARRAY):(k.setTexture2D(G,0),Ge=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const yn=I.getParameter(I.UNPACK_ROW_LENGTH),ft=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Bn=I.getParameter(I.UNPACK_SKIP_PIXELS),Qn=I.getParameter(I.UNPACK_SKIP_ROWS),ms=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,We),I.pixelStorei(I.UNPACK_SKIP_ROWS,et),I.pixelStorei(I.UNPACK_SKIP_IMAGES,st);const Xs=P.isDataArrayTexture||P.isData3DTexture,Mt=G.isDataArrayTexture||G.isData3DTexture;if(P.isDepthTexture){const Wt=b.get(P),Yi=b.get(G),Vt=b.get(Wt.__renderTarget),ji=b.get(Yi.__renderTarget);ge.bindFramebuffer(I.READ_FRAMEBUFFER,Vt.__webglFramebuffer),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let qs=0;qs<Ve;qs++)Xs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,b.get(P).__webglTexture,K,st+qs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,b.get(G).__webglTexture,Pe,Dt+qs)),I.blitFramebuffer(We,et,Ne,Le,Xe,xt,Ne,Le,I.DEPTH_BUFFER_BIT,I.NEAREST);ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(K!==0||P.isRenderTargetTexture||b.has(P)){const Wt=b.get(P),Yi=b.get(G);ge.bindFramebuffer(I.READ_FRAMEBUFFER,N0),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,U0);for(let Vt=0;Vt<Ve;Vt++)Xs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.__webglTexture,K,st+Vt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Wt.__webglTexture,K),Mt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yi.__webglTexture,Pe,Dt+Vt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Yi.__webglTexture,Pe),K!==0?I.blitFramebuffer(We,et,Ne,Le,Xe,xt,Ne,Le,I.COLOR_BUFFER_BIT,I.NEAREST):Mt?I.copyTexSubImage3D(Ge,Pe,Xe,xt,Dt+Vt,We,et,Ne,Le):I.copyTexSubImage2D(Ge,Pe,Xe,xt,We,et,Ne,Le);ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Mt?P.isDataTexture||P.isData3DTexture?I.texSubImage3D(Ge,Pe,Xe,xt,Dt,Ne,Le,Ve,yt,Xt,Lt.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(Ge,Pe,Xe,xt,Dt,Ne,Le,Ve,yt,Lt.data):I.texSubImage3D(Ge,Pe,Xe,xt,Dt,Ne,Le,Ve,yt,Xt,Lt):P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Pe,Xe,xt,Ne,Le,yt,Xt,Lt.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Pe,Xe,xt,Lt.width,Lt.height,yt,Lt.data):I.texSubImage2D(I.TEXTURE_2D,Pe,Xe,xt,Ne,Le,yt,Xt,Lt);I.pixelStorei(I.UNPACK_ROW_LENGTH,yn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ms),Pe===0&&G.generateMipmaps&&I.generateMipmap(Ge),ge.unbindTexture()},this.initRenderTarget=function(P){b.get(P).__webglFramebuffer===void 0&&k.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?k.setTextureCube(P,0):P.isData3DTexture?k.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?k.setTexture2DArray(P,0):k.setTexture2D(P,0),ge.unbindTexture()},this.resetState=function(){D=0,U=0,V=null,ge.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}}const iF={class:"brain-3d-container"},sF={class:"brain-overlay"},rF={class:"brain-stats"},oF={class:"stat-item"},aF={class:"stat-value"},lF={class:"stat-item"},cF={class:"stat-value"},uF={class:"stat-item"},fF={class:"stat-value"},dF={key:0,class:"loading-overlay"},hF=30,pF=400,mF=1.5,pm=1200,gF=vn({__name:"Brain3D",props:{stats:{}},setup(t){const e=t,n=Te(),i=Te(!0),s=Te(0),r=Te(0),o=Te(0);let a=null,l=null,c=null,u=null,d=null,f=null,h=null;const m={storage:4886754,thinking:16098851,skill:8311585,core:65345,inactive:3355443};function _(B){return Math.min(pF,Math.max(hF,Math.floor(B*mF)))}function p(B){return Math.min(300,Math.max(10,Math.floor(B*.6)))}const g=St(()=>{var A,O;const B=((A=e.stats)==null?void 0:A.memory_count)||0,w=(O=e.stats)==null?void 0:O.tiered_breakdown;return{total:B,storage:(w==null?void 0:w.storage)??0,thinking:(w==null?void 0:w.thinking)??0,skill:(w==null?void 0:w.skill)??0,activeRegions:[((w==null?void 0:w.storage)??0)>0?1:0,((w==null?void 0:w.thinking)??0)>0?1:0,((w==null?void 0:w.skill)??0)>0?1:0].reduce((X,oe)=>X+oe,0)}});Kn(()=>{x()}),$s(()=>{$()}),qn(()=>e.stats,B=>{B&&N(B)},{deep:!0});function x(){if(!n.value)return;const B=n.value,w=B.clientWidth,A=B.clientHeight;a=new F2,a.background=new ct(1296),l=new Fn(60,w/A,.1,1e3),l.position.z=40,c=new nF({antialias:!0,alpha:!0,powerPreference:"high-performance"}),c.setSize(w,A),c.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),B.appendChild(c.domElement),u=new oo,a.add(u),E(),y(),T(),e.stats&&N(e.stats),U(),window.addEventListener("resize",V),i.value=!1}function E(){if(!u)return;const B=new Tl(6,1),w=new Ps({color:65345,wireframe:!0,transparent:!0,opacity:.3}),A=new Zt(B,w);u.add(A);const O=new Tl(4,1),X=new Ps({color:65345,transparent:!0,opacity:.5}),oe=new Zt(O,X);u.add(oe);const he=new Al(1.5,16,16),ie=new Ps({color:65345,transparent:!0,opacity:.8}),ae=new Zt(he,ie);u.add(ae),[{name:"storage",position:[-5,2,0],color:m.storage},{name:"thinking",position:[5,2,0],color:m.thinking},{name:"skill",position:[0,-4,2],color:m.skill}].forEach(ze=>{const te=new Al(1.2,12,12),se=new Ps({color:ze.color,transparent:!0,opacity:.7}),_e=new Zt(te,se);_e.position.set(ze.position[0],ze.position[1],ze.position[2]),_e.userData={region:ze.name,baseScale:1},u.add(_e);const Ye=new bd(1.5,1.8,32),Be=new Ps({color:ze.color,transparent:!0,opacity:.3,side:fi}),$e=new Zt(Ye,Be);$e.position.set(ze.position[0],ze.position[1],ze.position[2]+.1),$e.userData={region:ze.name},u.add($e)})}function y(){if(!u)return;const B=g.value,w=B.total||50,A=_(w),O=new nn,X=new Float32Array(A*3),oe=new Float32Array(A*3),he=new Float32Array(A),ie=C(B.storage,B.thinking,B.skill);for(let Ue=0;Ue<A;Ue++){const ze=Math.random()*Math.PI*2,te=Math.acos(2*Math.random()-1),se=5+Math.random()*4;X[Ue*3]=se*Math.sin(te)*Math.cos(ze),X[Ue*3+1]=se*Math.sin(te)*Math.sin(ze),X[Ue*3+2]=se*Math.cos(te);const _e=L(ie);oe[Ue*3]=_e.r,oe[Ue*3+1]=_e.g,oe[Ue*3+2]=_e.b,he[Ue]=.5+Math.random()*1.5}O.setAttribute("position",new An(X,3)),O.setAttribute("color",new An(oe,3)),O.setAttribute("size",new An(he,1));const ae=new Cn({uniforms:{uTime:{value:0},uPulseIntensity:{value:1}},vertexShader:`
      attribute float size;
      uniform float uTime;
      uniform float uPulseIntensity;
      varying vec3 vColor;
      
      void main() {
        vColor = color;
        vec3 pos = position;
        float pulse = sin(uTime * 2.0 + position.x * 0.5 + position.y * 0.3) * 0.3 * uPulseIntensity;
        pos += normalize(position) * pulse;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (200.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
        gl_FragColor = vec4(vColor, alpha);
      }
    `,transparent:!0,vertexColors:!0,blending:Uu,depthWrite:!1});f=new zp(O,ae),u.add(f),s.value=A}function T(){if(!u)return;const B=g.value,w=p(B.total||50),A=[];for(let oe=0;oe<w;oe++){const he=Math.random()*Math.PI*2,ie=Math.acos(2*Math.random()-1),ae=5+Math.random()*3,Ue=new W(ae*Math.sin(ie)*Math.cos(he),ae*Math.sin(ie)*Math.sin(he),ae*Math.cos(ie)),ze=Ue.clone().multiplyScalar(.5+Math.random()*.3),te=Math.random()*Math.PI*2,se=Math.acos(2*Math.random()-1),_e=5+Math.random()*3,Ye=new W(_e*Math.sin(se)*Math.cos(te),_e*Math.sin(se)*Math.sin(te),_e*Math.cos(se)),$e=new Q2(Ue,ze,Ye).getPoints(8);A.push(...$e)}const O=new nn().setFromPoints(A),X=new Tf({color:65345,transparent:!0,opacity:.15});h=new X2(O,X),h.userData.isSynapse=!0,u.add(h),r.value=w,o.value=B.activeRegions}function C(B,w,A){const O=B+w+A;return O===0?{storage:.33,thinking:.33,skill:.34}:{storage:B/O,thinking:w/O,skill:A/O}}function L(B){const w=Math.random();let A=0;const O=["storage","thinking","skill"];for(const X of O)if(A+=B[X],w<=A)return new ct(m[X]);return new ct(m.skill)}let S=null,M=0;function N(B){var he,ie,ae;if(!u)return;const w=B.memory_count||0,A=((he=B.tiered_breakdown)==null?void 0:he.storage)||0,O=((ie=B.tiered_breakdown)==null?void 0:ie.thinking)||0,X=((ae=B.tiered_breakdown)==null?void 0:ae.skill)||0;S={particleCount:_(w),synapseCount:p(w),regionOpacities:{},regionScales:{},regionWeights:C(A,O,X)};const oe=Math.max(A,O,X,1);["storage","thinking","skill"].forEach(Ue=>{const ze=Ue==="storage"?A:Ue==="thinking"?O:X;S.regionOpacities[Ue]=ze>0?.3+ze/oe*.7:.15,S.regionScales[Ue]=ze>0?.8+ze/oe*.7:.6}),M=performance.now(),o.value=[A>0,O>0,X>0].filter(Boolean).length}function D(B){if(!S||!u)return;const w=S,A=Math.min(1,B);if(u.children.forEach(O=>{if(!(O instanceof Zt))return;const X=O.userData.region;if(!X)return;const oe=O.material,he=w.regionOpacities[X]??.3,ie=w.regionScales[X]??1;oe.opacity=Xr.lerp(oe.opacity,he,A*.1);const ae=O.scale.x,Ue=Xr.lerp(ae,ie,A*.08);O.scale.setScalar(Ue)}),f&&f.material instanceof Cn){const O=.8+A*.4;f.material.uniforms.uPulseIntensity.value=O}if(h&&h.material instanceof Tf){const O=.1+A*.15;h.material.opacity=Xr.lerp(h.material.opacity,O,A*.05)}s.value=Math.round(Xr.lerp(s.value,w.particleCount,A*.03)),r.value=Math.round(Xr.lerp(r.value,w.synapseCount,A*.03))}function U(){if(!a||!l||!c||!u)return;d=requestAnimationFrame(U);const B=performance.now()*.001;if(u.rotation.y=B*.15,u.rotation.x=Math.sin(B*.3)*.1,f&&f.material instanceof Cn&&(f.material.uniforms.uTime.value=B),S&&M>0){const w=performance.now()-M;D(w/pm),w>pm*3&&(S=null,M=0)}c.render(a,l)}function V(){if(!n.value||!l||!c)return;const B=n.value.clientWidth,w=n.value.clientHeight;l.aspect=B/w,l.updateProjectionMatrix(),c.setSize(B,w)}function $(){d&&(cancelAnimationFrame(d),d=null),window.removeEventListener("resize",V),u&&(u.traverse(B=>{(B instanceof Zt||B instanceof zp||B instanceof g0)&&(B.geometry&&B.geometry.dispose(),B.material&&(Array.isArray(B.material)?B.material.forEach(w=>w.dispose()):B.material.dispose()))}),a&&a.remove(u)),c&&(c.dispose(),c.forceContextLoss(),n.value&&c.domElement.parentNode===n.value&&n.value.removeChild(c.domElement)),a=null,l=null,c=null,u=null,f=null,h=null,S=null}return(B,w)=>(de(),pe("div",iF,[v("div",{ref_key:"canvasRef",ref:n,class:"canvas-wrapper"},null,512),v("div",sF,[v("div",rF,[v("div",oF,[w[0]||(w[0]=v("span",{class:"stat-label"},"神经元",-1)),v("span",aF,ne(s.value),1)]),v("div",lF,[w[1]||(w[1]=v("span",{class:"stat-label"},"突触连接",-1)),v("span",cF,ne(r.value),1)]),v("div",uF,[w[2]||(w[2]=v("span",{class:"stat-label"},"活跃区域",-1)),v("span",fF,ne(o.value),1)])])]),i.value?(de(),pe("div",dF,[...w[3]||(w[3]=[v("div",{class:"loading-spinner"},null,-1),v("p",null,"初始化大脑模型...",-1)])])):it("",!0)]))}}),_F=xn(gF,[["__scopeId","data-v-753278d5"]]),vF={class:"app-container"},xF={class:"main-sidebar"},yF={class:"sidebar-header"},SF={class:"status-label"},MF={class:"sidebar-nav"},bF=["onClick"],EF={class:"nav-icon"},wF={class:"nav-text"},TF={class:"sidebar-actions"},AF={class:"action-grid"},CF=["disabled"],RF={class:"btn-text"},PF=["disabled"],LF={class:"btn-text"},DF={class:"viewport"},IF={class:"top-bar"},NF={class:"view-title"},UF={class:"top-stats"},FF={class:"view-content"},OF={key:0,class:"dashboard-layout"},BF={class:"visual-section card-glass"},kF={class:"graph-section card-glass"},zF={class:"logs-section card-glass"},VF={key:1,class:"full-view card-glass"},HF={key:2,class:"centered-view card-glass"},GF={key:3,class:"full-view card-glass"},WF={key:4,class:"split-view"},$F={key:5,class:"full-view card-glass"},XF={key:6,class:"centered-view card-glass"},qF={key:7,class:"full-view card-glass"},YF={key:0,class:"detail-panel card-glass"},jF={class:"modal-title"},KF={class:"modal-content"},ZF={class:"info-row"},JF={class:"info-section"},QF={class:"meta-grid"},eO={class:"meta-box"},tO={class:"val"},nO={class:"meta-box"},iO={class:"val"},sO={class:"meta-box"},rO={class:"val"},oO={class:"toast-container"},aO=["onClick"],lO={class:"toast-icon"},cO={class:"toast-message"},uO=vn({__name:"App",setup(t){const e=qi(),{graphData:n,isLoading:i,evolutionStatus:s,stats:r}=Nr(e),{toasts:o,dismiss:a}=ed(),l=[{id:"overview",label:"概览",icon:"📊"},{id:"memory-list",label:"记忆列表",icon:"📋"},{id:"write",label:"写入",icon:"✏️"},{id:"tiered",label:"三层记忆",icon:"🧠"},{id:"brain",label:"AI大脑",icon:"🤖"},{id:"llm",label:"LLM交互",icon:"🤖"},{id:"evolution",label:"进化配置",icon:"⚙️"},{id:"merge",label:"合并链",icon:"🔗"}],c=Te("overview"),u=Te(null),d=Te(null),f=Te(!1),h=Te(!1),m=Te(!1),_=gv(null),p=Te({}),g=St(()=>{var A,O;return((A=s.value)==null?void 0:A.enabled)&&((O=s.value)==null?void 0:O.running)}),x=St(()=>{const A=l.find(O=>O.id===c.value);return(A==null?void 0:A.label)||"概览"});Kn(async()=>{e.addLog("初始化系统...","info");try{await e.fetchStats(),e.addLog("加载统计数据完成","success"),await e.fetchGraph(),e.addLog("加载记忆图谱完成","success"),await e.fetchEvolutionStatus(),e.addLog("加载进化状态完成","success")}catch(A){e.addLog("初始化失败: "+A.message,"error")}});function E(A){e.addLog(`点击节点: ${A.label||A.id}`,"info"),d.value=A.id,c.value!=="merge"&&(c.value="merge")}function y(A){u.value=A,e.addLog(`选择记忆: ${A.title}`,"info")}function T(A){e.addLog(`新记忆已写入: ${A}`,"success"),e.fetchStats(),e.fetchGraph()}function C(){e.addLog("记忆已保存","success"),D(),e.fetchStats(),e.fetchGraph()}function L(A){e.addLog(`记忆已删除: ${A}`,"success"),D(),u.value=null,e.fetchStats(),e.fetchGraph()}function S(A){e.addLog(`点击合并链节点: ${A.title}`,"info")}function M(){u.value=null}function N(){u.value&&(_.value=W_,p.value={visible:!0,memory:u.value},m.value=!0)}function D(){m.value=!1,_.value=null,p.value={}}function U(){u.value&&(d.value=u.value.id,c.value="merge",M())}async function V(){f.value=!0,e.addLog("开始重建图谱...","info");try{await Nn.rebuildGraph(),await e.fetchGraph(),e.addLog("图谱重建完成","success")}catch(A){e.addLog("图谱重建失败: "+A.message,"error")}finally{f.value=!1}}async function $(){h.value=!0,e.addLog("触发反思任务...","info");try{await e.reflectMemory(),e.addLog("反思任务已触发","success"),await e.fetchEvolutionStatus()}catch(A){e.addLog("触发反思失败: "+A.message,"error")}finally{h.value=!1}}async function B(){e.addLog("刷新所有数据...","info");try{await Promise.all([e.fetchStats(),e.fetchGraph(),e.fetchEvolutionStatus()]),e.addLog("数据刷新完成","success")}catch(A){e.addLog("数据刷新失败: "+A.message,"error")}}function w(A){return{storage:"存储记忆",thinking:"思维记忆",skill:"技能记忆"}[A||""]||A||"未知"}return(A,O)=>(de(),pe(at,null,[v("div",vF,[O[10]||(O[10]=v("div",{class:"scanline"},null,-1)),v("aside",xF,[v("div",yF,[O[3]||(O[3]=v("h1",{class:"logo"},[us("MEMORY"),v("span",null,"CORE")],-1)),v("div",{class:ht(["status-badge",{"is-active":g.value}])},[O[2]||(O[2]=v("span",{class:"status-dot"},null,-1)),v("span",SF,ne(g.value?"在线":"待机"),1)],2)]),v("nav",MF,[(de(),pe(at,null,It(l,X=>v("button",{key:X.id,class:ht(["nav-item",{active:c.value===X.id}]),onClick:oe=>c.value=X.id},[v("span",EF,ne(X.icon),1),v("span",wF,ne(X.label),1)],10,bF)),64))]),v("div",TF,[v("div",AF,[v("button",{onClick:V,disabled:f.value},[v("span",RF,ne(f.value?"同步中...":"重建图谱"),1)],8,CF),v("button",{onClick:$,disabled:h.value},[v("span",LF,ne(h.value?"思考中...":"反思"),1)],8,PF)]),v("button",{class:"primary-btn",onClick:B},"刷新数据")])]),v("main",DF,[v("header",IF,[v("div",NF,[O[4]||(O[4]=v("span",{class:"path"},"系统 /",-1)),us(" "+ne(x.value),1)]),v("div",UF,[mt(DT)])]),v("div",{class:ht(["content-viewport",{"panel-active":m.value}])},[v("div",FF,[c.value==="overview"?(de(),pe("div",OF,[v("div",BF,[mt(_F,{stats:Me(r)},null,8,["stats"])]),v("div",kF,[mt(hw,{"graph-data":Me(n),"is-loading":Me(i),onNodeClick:E},null,8,["graph-data","is-loading"])]),v("div",zF,[mt(pT)])])):c.value==="memory-list"?(de(),pe("div",VF,[mt(lT,{onMemorySelect:y})])):c.value==="write"?(de(),pe("div",HF,[mt(qT,{onWritten:T})])):c.value==="tiered"?(de(),pe("div",GF,[mt(SA,{onMemorySelect:y})])):c.value==="brain"?(de(),pe("div",WF,[mt(TP,{class:"card-glass"}),mt(b3,{class:"card-glass"})])):c.value==="llm"?(de(),pe("div",$F,[mt(QA)])):c.value==="evolution"?(de(),pe("div",XF,[mt(JC)])):c.value==="merge"?(de(),pe("div",qF,[mt(_R,{"memory-id":d.value,"show-close":!!d.value,onClose:O[0]||(O[0]=X=>d.value=null),onNodeClick:S},null,8,["memory-id","show-close"])])):it("",!0)]),mt(ih,{name:"panel-slide"},{default:fo(()=>[m.value?(de(),pe("div",YF,[(de(),_r(Yv(_.value),Cg(p.value,{onClose:D,onSaved:C,onDeleted:L}),null,16))])):it("",!0)]),_:1})],2)]),mt(ih,{name:"fade"},{default:fo(()=>[u.value?(de(),pe("div",{key:0,class:"modal-overlay",onClick:M},[v("div",{class:"modal-window card-glass",onClick:O[1]||(O[1]=dl(()=>{},["stop"]))},[v("header",jF,[v("h2",null,ne(u.value.title),1),v("button",{class:"close-icon",onClick:M},"×")]),v("div",KF,[v("div",ZF,[O[5]||(O[5]=v("span",{class:"label"},"类型",-1)),v("span",{class:ht(["type-tag",u.value.memory_type])},ne(w(u.value.memory_type)),3)]),v("div",JF,[O[6]||(O[6]=v("h3",null,"内容",-1)),v("p",null,ne(u.value.content),1)]),v("div",QF,[v("div",eO,[O[7]||(O[7]=v("span",{class:"label"},"范围",-1)),v("span",tO,ne(u.value.scope),1)]),v("div",nO,[O[8]||(O[8]=v("span",{class:"label"},"时间",-1)),v("span",iO,ne(u.value.timestamp),1)]),v("div",sO,[O[9]||(O[9]=v("span",{class:"label"},"重要性",-1)),v("span",rO,ne(u.value.importance),1)])]),v("div",{class:"modal-footer"},[v("button",{class:"secondary-btn",onClick:N},"编辑"),v("button",{class:"primary-btn",onClick:U},"查看合并链")])])])])):it("",!0)]),_:1})]),(de(),_r(Qm,{to:"body"},[v("div",oO,[mt(Bg,{name:"toast",tag:"div"},{default:fo(()=>[(de(!0),pe(at,null,It(Me(o),X=>(de(),pe("div",{key:X.id,class:ht(["toast-item",`toast-${X.type}`]),onClick:oe=>Me(a)(X.id)},[v("span",lO,ne({success:"✓",error:"✗",warn:"⚠",info:"ℹ"}[X.type]),1),v("span",cO,ne(X.message),1)],10,aO))),128))]),_:1})])]))],64))}}),fO=xn(uO,[["__scopeId","data-v-1a9018a6"]]),C0=gy(fO),dO=xy();C0.use(dO);C0.mount("#app");
