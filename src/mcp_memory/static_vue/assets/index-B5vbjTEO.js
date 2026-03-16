(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const St={},or=[],ai=()=>{},Xp=()=>!1,cl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ff=t=>t.startsWith("onUpdate:"),Ot=Object.assign,df=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},r0=Object.prototype.hasOwnProperty,mt=(t,e)=>r0.call(t,e),Ge=Array.isArray,ar=t=>Mo(t)==="[object Map]",ul=t=>Mo(t)==="[object Set]",pd=t=>Mo(t)==="[object Date]",Ye=t=>typeof t=="function",Pt=t=>typeof t=="string",di=t=>typeof t=="symbol",ht=t=>t!==null&&typeof t=="object",qp=t=>(ht(t)||Ye(t))&&Ye(t.then)&&Ye(t.catch),Yp=Object.prototype.toString,Mo=t=>Yp.call(t),o0=t=>Mo(t).slice(8,-1),jp=t=>Mo(t)==="[object Object]",fl=t=>Pt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,jr=uf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},a0=/-\w/g,an=dl(t=>t.replace(a0,e=>e.slice(1).toUpperCase())),l0=/\B([A-Z])/g,cs=dl(t=>t.replace(l0,"-$1").toLowerCase()),hl=dl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vl=dl(t=>t?`on${hl(t)}`:""),si=(t,e)=>!Object.is(t,e),Ma=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Kp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},pl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},c0=t=>{const e=Pt(t)?Number(t):NaN;return isNaN(e)?t:e};let md;const ml=()=>md||(md=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bn(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Pt(i)?h0(i):Bn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Pt(t)||ht(t))return t}const u0=/;(?![^(]*\))/g,f0=/:([^]+)/,d0=/\/\*[^]*?\*\//g;function h0(t){const e={};return t.replace(d0,"").split(u0).forEach(n=>{if(n){const i=n.split(f0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function lt(t){let e="";if(Pt(t))e=t;else if(Ge(t))for(let n=0;n<t.length;n++){const i=lt(t[n]);i&&(e+=i+" ")}else if(ht(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",m0=uf(p0);function Jp(t){return!!t||t===""}function g0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=bo(t[i],e[i]);return n}function bo(t,e){if(t===e)return!0;let n=pd(t),i=pd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=di(t),i=di(e),n||i)return t===e;if(n=Ge(t),i=Ge(e),n||i)return n&&i?g0(t,e):!1;if(n=ht(t),i=ht(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!bo(t[o],e[o]))return!1}}return String(t)===String(e)}function _0(t,e){return t.findIndex(n=>bo(n,e))}const Zp=t=>!!(t&&t.__v_isRef===!0),te=t=>Pt(t)?t:t==null?"":Ge(t)||ht(t)&&(t.toString===Yp||!Ye(t.toString))?Zp(t)?te(t.value):JSON.stringify(t,Qp,2):String(t),Qp=(t,e)=>Zp(e)?Qp(t,e.value):ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Hl(i,r)+" =>"]=s,n),{})}:ul(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Hl(n))}:di(e)?Hl(e):ht(e)&&!Ge(e)&&!jp(e)?String(e):e,Hl=(t,e="")=>{var n;return di(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class em{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Yt;try{return Yt=this,e()}finally{Yt=n}}}on(){++this._on===1&&(this.prevScope=Yt,Yt=this)}off(){this._on>0&&--this._on===0&&(Yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function tm(t){return new em(t)}function nm(){return Yt}function v0(t,e=!1){Yt&&Yt.cleanups.push(t)}let bt;const Gl=new WeakSet;class im{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&Yt.active&&Yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gl.has(this)&&(Gl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gd(this),om(this);const e=bt,n=Gn;bt=this,Gn=!0;try{return this.fn()}finally{am(this),bt=e,Gn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)mf(e);this.deps=this.depsTail=void 0,gd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wc(this)&&this.run()}get dirty(){return Wc(this)}}let sm=0,Kr,Jr;function rm(t,e=!1){if(t.flags|=8,e){t.next=Jr,Jr=t;return}t.next=Kr,Kr=t}function hf(){sm++}function pf(){if(--sm>0)return;if(Jr){let e=Jr;for(Jr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Kr;){let e=Kr;for(Kr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function om(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function am(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),mf(i),x0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Wc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function lm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ro)||(t.globalVersion=ro,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Wc(t))))return;t.flags|=2;const e=t.dep,n=bt,i=Gn;bt=t,Gn=!0;try{om(t);const s=t.fn(t._value);(e.version===0||si(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{bt=n,Gn=i,am(t),t.flags&=-3}}function mf(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)mf(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function x0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gn=!0;const cm=[];function ki(){cm.push(Gn),Gn=!1}function zi(){const t=cm.pop();Gn=t===void 0?!0:t}function gd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=bt;bt=void 0;try{e()}finally{bt=n}}}let ro=0;class y0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!bt||!Gn||bt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==bt)n=this.activeLink=new y0(bt,this),bt.deps?(n.prevDep=bt.depsTail,bt.depsTail.nextDep=n,bt.depsTail=n):bt.deps=bt.depsTail=n,um(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=bt.depsTail,n.nextDep=void 0,bt.depsTail.nextDep=n,bt.depsTail=n,bt.deps===n&&(bt.deps=i)}return n}trigger(e){this.version++,ro++,this.notify(e)}notify(e){hf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{pf()}}}function um(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)um(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ba=new WeakMap,Ds=Symbol(""),$c=Symbol(""),oo=Symbol("");function jt(t,e,n){if(Gn&&bt){let i=Ba.get(t);i||Ba.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new gf),s.map=i,s.key=n),s.track()}}function Di(t,e,n,i,s,r){const o=Ba.get(t);if(!o){ro++;return}const a=c=>{c&&c.trigger()};if(hf(),e==="clear")o.forEach(a);else{const c=Ge(t),l=c&&fl(n);if(c&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===oo||!di(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(oo)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Ds)),ar(t)&&a(o.get($c)));break;case"delete":c||(a(o.get(Ds)),ar(t)&&a(o.get($c)));break;case"set":ar(t)&&a(o.get(Ds));break}}pf()}function S0(t,e){const n=Ba.get(t);return n&&n.get(e)}function Gs(t){const e=rt(t);return e===t?e:(jt(e,"iterate",oo),An(t)?e:e.map(Wn))}function gl(t){return jt(t=rt(t),"iterate",oo),t}function ti(t,e){return Vi(t)?pr(li(t)?Wn(e):e):Wn(e)}const M0={__proto__:null,[Symbol.iterator](){return Wl(this,Symbol.iterator,t=>ti(this,t))},concat(...t){return Gs(this).concat(...t.map(e=>Ge(e)?Gs(e):e))},entries(){return Wl(this,"entries",t=>(t[1]=ti(this,t[1]),t))},every(t,e){return Si(this,"every",t,e,void 0,arguments)},filter(t,e){return Si(this,"filter",t,e,n=>n.map(i=>ti(this,i)),arguments)},find(t,e){return Si(this,"find",t,e,n=>ti(this,n),arguments)},findIndex(t,e){return Si(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Si(this,"findLast",t,e,n=>ti(this,n),arguments)},findLastIndex(t,e){return Si(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Si(this,"forEach",t,e,void 0,arguments)},includes(...t){return $l(this,"includes",t)},indexOf(...t){return $l(this,"indexOf",t)},join(t){return Gs(this).join(t)},lastIndexOf(...t){return $l(this,"lastIndexOf",t)},map(t,e){return Si(this,"map",t,e,void 0,arguments)},pop(){return Cr(this,"pop")},push(...t){return Cr(this,"push",t)},reduce(t,...e){return _d(this,"reduce",t,e)},reduceRight(t,...e){return _d(this,"reduceRight",t,e)},shift(){return Cr(this,"shift")},some(t,e){return Si(this,"some",t,e,void 0,arguments)},splice(...t){return Cr(this,"splice",t)},toReversed(){return Gs(this).toReversed()},toSorted(t){return Gs(this).toSorted(t)},toSpliced(...t){return Gs(this).toSpliced(...t)},unshift(...t){return Cr(this,"unshift",t)},values(){return Wl(this,"values",t=>ti(this,t))}};function Wl(t,e,n){const i=gl(t),s=i[e]();return i!==t&&!An(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const b0=Array.prototype;function Si(t,e,n,i,s,r){const o=gl(t),a=o!==t&&!An(t),c=o[e];if(c!==b0[e]){const d=c.apply(t,r);return a?Wn(d):d}let l=n;o!==t&&(a?l=function(d,f){return n.call(this,ti(t,d),f,t)}:n.length>2&&(l=function(d,f){return n.call(this,d,f,t)}));const u=c.call(o,l,i);return a&&s?s(u):u}function _d(t,e,n,i){const s=gl(t),r=s!==t&&!An(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(l,u,d){return a&&(a=!1,l=ti(t,l)),n.call(this,l,ti(t,u),d,t)}):n.length>3&&(o=function(l,u,d){return n.call(this,l,u,d,t)}));const c=s[e](o,...i);return a?ti(t,c):c}function $l(t,e,n){const i=rt(t);jt(i,"iterate",oo);const s=i[e](...n);return(s===-1||s===!1)&&vl(n[0])?(n[0]=rt(n[0]),i[e](...n)):s}function Cr(t,e,n=[]){ki(),hf();const i=rt(t)[e].apply(t,n);return pf(),zi(),i}const E0=uf("__proto__,__v_isRef,__isVue"),fm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(di));function w0(t){di(t)||(t=String(t));const e=rt(this);return jt(e,"has",t),e.hasOwnProperty(t)}class dm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?U0:gm:r?mm:pm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ge(e);if(!s){let c;if(o&&(c=M0[n]))return c;if(n==="hasOwnProperty")return w0}const a=Reflect.get(e,n,Tt(e)?e:i);if((di(n)?fm.has(n):E0(n))||(s||jt(e,"get",n),r))return a;if(Tt(a)){const c=o&&fl(n)?a:a.value;return s&&ht(c)?qc(c):c}return ht(a)?s?qc(a):_l(a):a}}class hm extends dm{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=Ge(e)&&fl(n);if(!this._isShallow){const l=Vi(r);if(!An(i)&&!Vi(i)&&(r=rt(r),i=rt(i)),!o&&Tt(r)&&!Tt(i))return l||(r.value=i),!0}const a=o?Number(n)<e.length:mt(e,n),c=Reflect.set(e,n,i,Tt(e)?e:s);return e===rt(s)&&(a?si(i,r)&&Di(e,"set",n,i):Di(e,"add",n,i)),c}deleteProperty(e,n){const i=mt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Di(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!di(n)||!fm.has(n))&&jt(e,"has",n),i}ownKeys(e){return jt(e,"iterate",Ge(e)?"length":Ds),Reflect.ownKeys(e)}}class T0 extends dm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const A0=new hm,R0=new T0,C0=new hm(!0);const Xc=t=>t,Vo=t=>Reflect.getPrototypeOf(t);function P0(t,e,n){return function(...i){const s=this.__v_raw,r=rt(s),o=ar(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),u=n?Xc:e?pr:Wn;return!e&&jt(r,"iterate",c?$c:Ds),Ot(Object.create(l),{next(){const{value:d,done:f}=l.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Ho(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function L0(t,e){const n={get(s){const r=this.__v_raw,o=rt(r),a=rt(s);t||(si(s,a)&&jt(o,"get",s),jt(o,"get",a));const{has:c}=Vo(o),l=e?Xc:t?pr:Wn;if(c.call(o,s))return l(r.get(s));if(c.call(o,a))return l(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&jt(rt(s),"iterate",Ds),s.size},has(s){const r=this.__v_raw,o=rt(r),a=rt(s);return t||(si(s,a)&&jt(o,"has",s),jt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,c=rt(a),l=e?Xc:t?pr:Wn;return!t&&jt(c,"iterate",Ds),a.forEach((u,d)=>s.call(r,l(u),l(d),o))}};return Ot(n,t?{add:Ho("add"),set:Ho("set"),delete:Ho("delete"),clear:Ho("clear")}:{add(s){const r=rt(this),o=Vo(r),a=rt(s),c=!e&&!An(s)&&!Vi(s)?a:s;return o.has.call(r,c)||si(s,c)&&o.has.call(r,s)||si(a,c)&&o.has.call(r,a)||(r.add(c),Di(r,"add",c,c)),this},set(s,r){!e&&!An(r)&&!Vi(r)&&(r=rt(r));const o=rt(this),{has:a,get:c}=Vo(o);let l=a.call(o,s);l||(s=rt(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,r),l?si(r,u)&&Di(o,"set",s,r):Di(o,"add",s,r),this},delete(s){const r=rt(this),{has:o,get:a}=Vo(r);let c=o.call(r,s);c||(s=rt(s),c=o.call(r,s)),a&&a.call(r,s);const l=r.delete(s);return c&&Di(r,"delete",s,void 0),l},clear(){const s=rt(this),r=s.size!==0,o=s.clear();return r&&Di(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=P0(s,t,e)}),n}function _f(t,e){const n=L0(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(mt(n,s)&&s in i?n:i,s,r)}const D0={get:_f(!1,!1)},I0={get:_f(!1,!0)},N0={get:_f(!0,!1)};const pm=new WeakMap,mm=new WeakMap,gm=new WeakMap,U0=new WeakMap;function F0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function O0(t){return t.__v_skip||!Object.isExtensible(t)?0:F0(o0(t))}function _l(t){return Vi(t)?t:vf(t,!1,A0,D0,pm)}function B0(t){return vf(t,!1,C0,I0,mm)}function qc(t){return vf(t,!0,R0,N0,gm)}function vf(t,e,n,i,s){if(!ht(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=O0(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function li(t){return Vi(t)?li(t.__v_raw):!!(t&&t.__v_isReactive)}function Vi(t){return!!(t&&t.__v_isReadonly)}function An(t){return!!(t&&t.__v_isShallow)}function vl(t){return t?!!t.__v_raw:!1}function rt(t){const e=t&&t.__v_raw;return e?rt(e):t}function xf(t){return!mt(t,"__v_skip")&&Object.isExtensible(t)&&Kp(t,"__v_skip",!0),t}const Wn=t=>ht(t)?_l(t):t,pr=t=>ht(t)?qc(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function we(t){return _m(t,!1)}function k0(t){return _m(t,!0)}function _m(t,e){return Tt(t)?t:new z0(t,e)}class z0{constructor(e,n){this.dep=new gf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:rt(e),this._value=n?e:Wn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||An(e)||Vi(e);e=i?e:rt(e),si(e,n)&&(this._rawValue=e,this._value=i?e:Wn(e),this.dep.trigger())}}function Se(t){return Tt(t)?t.value:t}const V0={get:(t,e,n)=>e==="__v_raw"?t:Se(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Tt(s)&&!Tt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function vm(t){return li(t)?t:new Proxy(t,V0)}function H0(t){const e=Ge(t)?new Array(t.length):{};for(const n in t)e[n]=xm(t,n);return e}class G0{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=rt(e);let s=!0,r=e;if(!Ge(e)||!fl(String(n)))do s=!vl(r)||An(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Se(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Tt(this._raw[this._key])){const n=this._object[this._key];if(Tt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return S0(this._raw,this._key)}}class W0{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function $0(t,e,n){return Tt(t)?t:Ye(t)?new W0(t):ht(t)&&arguments.length>1?xm(t,e,n):we(t)}function xm(t,e,n){return new G0(t,e,n)}class X0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ro-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return rm(this,!0),!0}get value(){const e=this.dep.track();return lm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function q0(t,e,n=!1){let i,s;return Ye(t)?i=t:(i=t.get,s=t.set),new X0(i,s,n)}const Go={},ka=new WeakMap;let Ms;function Y0(t,e=!1,n=Ms){if(n){let i=ka.get(n);i||ka.set(n,i=[]),i.push(t)}}function j0(t,e,n=St){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=n,l=y=>s?y:An(y)||s===!1||s===0?Ii(y,1):Ii(y);let u,d,f,h,g=!1,_=!1;if(Tt(t)?(d=()=>t.value,g=An(t)):li(t)?(d=()=>l(t),g=!0):Ge(t)?(_=!0,g=t.some(y=>li(y)||An(y)),d=()=>t.map(y=>{if(Tt(y))return y.value;if(li(y))return l(y);if(Ye(y))return c?c(y,2):y()})):Ye(t)?e?d=c?()=>c(t,2):t:d=()=>{if(f){ki();try{f()}finally{zi()}}const y=Ms;Ms=u;try{return c?c(t,3,[h]):t(h)}finally{Ms=y}}:d=ai,e&&s){const y=d,w=s===!0?1/0:s;d=()=>Ii(y(),w)}const p=nm(),m=()=>{u.stop(),p&&p.active&&df(p.effects,u)};if(r&&e){const y=e;e=(...w)=>{y(...w),m()}}let v=_?new Array(t.length).fill(Go):Go;const E=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const w=u.run();if(s||g||(_?w.some((R,D)=>si(R,v[D])):si(w,v))){f&&f();const R=Ms;Ms=u;try{const D=[w,v===Go?void 0:_&&v[0]===Go?[]:v,h];v=w,c?c(e,3,D):e(...D)}finally{Ms=R}}}else u.run()};return a&&a(E),u=new im(d),u.scheduler=o?()=>o(E,!1):E,h=y=>Y0(y,!1,u),f=u.onStop=()=>{const y=ka.get(u);if(y){if(c)c(y,4);else for(const w of y)w();ka.delete(u)}},e?i?E(!0):v=u.run():o?o(E.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Ii(t,e=1/0,n){if(e<=0||!ht(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Tt(t))Ii(t.value,e,n);else if(Ge(t))for(let i=0;i<t.length;i++)Ii(t[i],e,n);else if(ul(t)||ar(t))t.forEach(i=>{Ii(i,e,n)});else if(jp(t)){for(const i in t)Ii(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ii(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Eo(t,e,n,i){try{return i?t(...i):t()}catch(s){xl(s,e,n)}}function $n(t,e,n,i){if(Ye(t)){const s=Eo(t,e,n,i);return s&&qp(s)&&s.catch(r=>{xl(r,e,n)}),s}if(Ge(t)){const s=[];for(let r=0;r<t.length;r++)s.push($n(t[r],e,n,i));return s}}function xl(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||St;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,l)===!1)return}a=a.parent}if(r){ki(),Eo(r,null,10,[t,c,l]),zi();return}}K0(t,n,s,i,o)}function K0(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const nn=[];let Zn=-1;const lr=[];let ns=null,rr=0;const ym=Promise.resolve();let za=null;function wo(t){const e=za||ym;return t?e.then(this?t.bind(this):t):e}function J0(t){let e=Zn+1,n=nn.length;for(;e<n;){const i=e+n>>>1,s=nn[i],r=ao(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function yf(t){if(!(t.flags&1)){const e=ao(t),n=nn[nn.length-1];!n||!(t.flags&2)&&e>=ao(n)?nn.push(t):nn.splice(J0(e),0,t),t.flags|=1,Sm()}}function Sm(){za||(za=ym.then(bm))}function Z0(t){Ge(t)?lr.push(...t):ns&&t.id===-1?ns.splice(rr+1,0,t):t.flags&1||(lr.push(t),t.flags|=1),Sm()}function vd(t,e,n=Zn+1){for(;n<nn.length;n++){const i=nn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;nn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Mm(t){if(lr.length){const e=[...new Set(lr)].sort((n,i)=>ao(n)-ao(i));if(lr.length=0,ns){ns.push(...e);return}for(ns=e,rr=0;rr<ns.length;rr++){const n=ns[rr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ns=null,rr=0}}const ao=t=>t.id==null?t.flags&2?-1:1/0:t.id;function bm(t){try{for(Zn=0;Zn<nn.length;Zn++){const e=nn[Zn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Eo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Zn<nn.length;Zn++){const e=nn[Zn];e&&(e.flags&=-2)}Zn=-1,nn.length=0,Mm(),za=null,(nn.length||lr.length)&&bm()}}let En=null,Em=null;function Va(t){const e=En;return En=t,Em=t&&t.type.__scopeId||null,e}function wm(t,e=En,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Wa(-1);const r=Va(e);let o;try{o=t(...s)}finally{Va(r),i._d&&Wa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ft(t,e){if(En===null)return t;const n=El(En),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,c=St]=e[s];r&&(Ye(r)&&(r={mounted:r,updated:r}),r.deep&&Ii(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function ds(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(ki(),$n(c,n,8,[t.el,a,t,e]),zi())}}function Q0(t,e){if(Kt){let n=Kt.provides;const i=Kt.parent&&Kt.parent.provides;i===n&&(n=Kt.provides=Object.create(i)),n[t]=e}}function Zr(t,e,n=!1){const i=Tf();if(i||Is){let s=Is?Is._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ye(e)?e.call(i&&i.proxy):e}}function ev(){return!!(Tf()||Is)}const tv=Symbol.for("v-scx"),nv=()=>Zr(tv);function Fi(t,e,n){return Tm(t,e,n)}function Tm(t,e,n=St){const{immediate:i,deep:s,flush:r,once:o}=n,a=Ot({},n),c=e&&i||!e&&r!=="post";let l;if(uo){if(r==="sync"){const h=nv();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=ai,h.resume=ai,h.pause=ai,h}}const u=Kt;a.call=(h,g,_)=>$n(h,u,g,_);let d=!1;r==="post"?a.scheduler=h=>{hn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():yf(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=j0(t,e,a);return uo&&(l?l.push(f):c&&f()),f}function iv(t,e,n){const i=this.proxy,s=Pt(t)?t.includes(".")?Am(i,t):()=>i[t]:t.bind(i,i);let r;Ye(e)?r=e:(r=e.handler,n=e);const o=Ao(this),a=Tm(s,r.bind(i),n);return o(),a}function Am(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const sv=Symbol("_vte"),Rm=t=>t.__isTeleport,ei=Symbol("_leaveCb"),Pr=Symbol("_enterCb");function rv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gi(()=>{t.isMounted=!0}),To(()=>{t.isUnmounting=!0}),t}const Pn=[Function,Array],Cm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pn,onEnter:Pn,onAfterEnter:Pn,onEnterCancelled:Pn,onBeforeLeave:Pn,onLeave:Pn,onAfterLeave:Pn,onLeaveCancelled:Pn,onBeforeAppear:Pn,onAppear:Pn,onAfterAppear:Pn,onAppearCancelled:Pn},Pm=t=>{const e=t.subTree;return e.component?Pm(e.component):e},ov={name:"BaseTransition",props:Cm,setup(t,{slots:e}){const n=Tf(),i=rv();return()=>{const s=e.default&&Im(e.default(),!0);if(!s||!s.length)return;const r=Lm(s),o=rt(t),{mode:a}=o;if(i.isLeaving)return Xl(r);const c=xd(r);if(!c)return Xl(r);let l=Yc(c,o,i,n,d=>l=d);c.type!==sn&&lo(c,l);let u=n.subTree&&xd(n.subTree);if(u&&u.type!==sn&&!Es(u,c)&&Pm(n).type!==sn){let d=Yc(u,o,i,n);if(lo(u,d),a==="out-in"&&c.type!==sn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Xl(r);a==="in-out"&&c.type!==sn?d.delayLeave=(f,h,g)=>{const _=Dm(i,u);_[String(u.key)]=u,f[ei]=()=>{h(),f[ei]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{g(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Lm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==sn){e=n;break}}return e}const av=ov;function Dm(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Yc(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:m,onAfterAppear:v,onAppearCancelled:E}=e,y=String(t.key),w=Dm(n,t),R=(M,N)=>{M&&$n(M,i,9,N)},D=(M,N)=>{const P=N[1];R(M,N),Ge(M)?M.every(F=>F.length<=1)&&P():M.length<=1&&P()},S={mode:o,persisted:a,beforeEnter(M){let N=c;if(!n.isMounted)if(r)N=p||c;else return;M[ei]&&M[ei](!0);const P=w[y];P&&Es(t,P)&&P.el[ei]&&P.el[ei](),R(N,[M])},enter(M){if(w[y]===t)return;let N=l,P=u,F=d;if(!n.isMounted)if(r)N=m||l,P=v||u,F=E||d;else return;let k=!1;M[Pr]=U=>{k||(k=!0,U?R(F,[M]):R(P,[M]),S.delayedLeave&&S.delayedLeave(),M[Pr]=void 0)};const V=M[Pr].bind(null,!1);N?D(N,[M,V]):V()},leave(M,N){const P=String(t.key);if(M[Pr]&&M[Pr](!0),n.isUnmounting)return N();R(f,[M]);let F=!1;M[ei]=V=>{F||(F=!0,N(),V?R(_,[M]):R(g,[M]),M[ei]=void 0,w[P]===t&&delete w[P])};const k=M[ei].bind(null,!1);w[P]=t,h?D(h,[M,k]):k()},clone(M){const N=Yc(M,e,n,i,s);return s&&s(N),N}};return S}function Xl(t){if(yl(t))return t=as(t),t.children=null,t}function xd(t){if(!yl(t))return Rm(t.type)&&t.children?Lm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ye(n.default))return n.default()}}function lo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Im(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ft?(o.patchFlag&128&&s++,i=i.concat(Im(o.children,e,a))):(e||o.type!==sn)&&i.push(a!=null?as(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function un(t,e){return Ye(t)?Ot({name:t.name},e,{setup:t}):t}function Nm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function yd(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ha=new WeakMap;function Qr(t,e,n,i,s=!1){if(Ge(t)){t.forEach((_,p)=>Qr(_,e&&(Ge(e)?e[p]:e),n,i,s));return}if(eo(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Qr(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?El(i.component):i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===St?a.refs={}:a.refs,d=a.setupState,f=rt(d),h=d===St?Xp:_=>yd(u,_)?!1:mt(f,_),g=(_,p)=>!(p&&yd(u,p));if(l!=null&&l!==c){if(Sd(e),Pt(l))u[l]=null,h(l)&&(d[l]=null);else if(Tt(l)){const _=e;g(l,_.k)&&(l.value=null),_.k&&(u[_.k]=null)}}if(Ye(c))Eo(c,a,12,[o,u]);else{const _=Pt(c),p=Tt(c);if(_||p){const m=()=>{if(t.f){const v=_?h(c)?d[c]:u[c]:g()||!t.k?c.value:u[t.k];if(s)Ge(v)&&df(v,r);else if(Ge(v))v.includes(r)||v.push(r);else if(_)u[c]=[r],h(c)&&(d[c]=u[c]);else{const E=[r];g(c,t.k)&&(c.value=E),t.k&&(u[t.k]=E)}}else _?(u[c]=o,h(c)&&(d[c]=o)):p&&(g(c,t.k)&&(c.value=o),t.k&&(u[t.k]=o))};if(o){const v=()=>{m(),Ha.delete(t)};v.id=-1,Ha.set(t,v),hn(v,n)}else Sd(t),m()}}}function Sd(t){const e=Ha.get(t);e&&(e.flags|=8,Ha.delete(t))}ml().requestIdleCallback;ml().cancelIdleCallback;const eo=t=>!!t.type.__asyncLoader,yl=t=>t.type.__isKeepAlive;function lv(t,e){Um(t,"a",e)}function cv(t,e){Um(t,"da",e)}function Um(t,e,n=Kt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Sl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)yl(s.parent.vnode)&&uv(i,e,n,s),s=s.parent}}function uv(t,e,n,i){const s=Sl(e,t,i,!0);Sf(()=>{df(i[e],s)},n)}function Sl(t,e,n=Kt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ki();const a=Ao(n),c=$n(e,n,t,o);return a(),zi(),c});return i?s.unshift(r):s.push(r),r}}const $i=t=>(e,n=Kt)=>{(!uo||t==="sp")&&Sl(t,(...i)=>e(...i),n)},fv=$i("bm"),gi=$i("m"),dv=$i("bu"),hv=$i("u"),To=$i("bum"),Sf=$i("um"),pv=$i("sp"),mv=$i("rtg"),gv=$i("rtc");function _v(t,e=Kt){Sl("ec",t,e)}const vv="components",Fm=Symbol.for("v-ndc");function xv(t){return Pt(t)?yv(vv,t,!1)||t:t||Fm}function yv(t,e,n=!0,i=!1){const s=En||Kt;if(s){const r=s.type;{const a=ix(r,!1);if(a&&(a===e||a===an(e)||a===hl(an(e))))return r}const o=Md(s[t]||r[t],e)||Md(s.appContext[t],e);return!o&&i?r:o}}function Md(t,e){return t&&(t[e]||t[an(e)]||t[hl(an(e))])}function It(t,e,n,i){let s;const r=n,o=Ge(t);if(o||Pt(t)){const a=o&&li(t);let c=!1,l=!1;a&&(c=!An(t),l=Vi(t),t=gl(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?l?pr(Wn(t[u])):Wn(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(ht(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,r)}}else s=[];return s}const jc=t=>t?sg(t)?El(t):jc(t.parent):null,to=Ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jc(t.parent),$root:t=>jc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Bm(t),$forceUpdate:t=>t.f||(t.f=()=>{yf(t.update)}),$nextTick:t=>t.n||(t.n=wo.bind(t.proxy)),$watch:t=>iv.bind(t)}),ql=(t,e)=>t!==St&&!t.__isScriptSetup&&mt(t,e),Sv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(ql(i,e))return o[e]=1,i[e];if(s!==St&&mt(s,e))return o[e]=2,s[e];if(mt(r,e))return o[e]=3,r[e];if(n!==St&&mt(n,e))return o[e]=4,n[e];Kc&&(o[e]=0)}}const l=to[e];let u,d;if(l)return e==="$attrs"&&jt(t.attrs,"get",""),l(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==St&&mt(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,mt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return ql(s,e)?(s[e]=n,!0):i!==St&&mt(i,e)?(i[e]=n,!0):mt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let c;return!!(n[a]||t!==St&&a[0]!=="$"&&mt(t,a)||ql(e,a)||mt(r,a)||mt(i,a)||mt(to,a)||mt(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:mt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bd(t){return Ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kc=!0;function Mv(t){const e=Bm(t),n=t.proxy,i=t.ctx;Kc=!1,e.beforeCreate&&Ed(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:v,destroyed:E,unmounted:y,render:w,renderTracked:R,renderTriggered:D,errorCaptured:S,serverPrefetch:M,expose:N,inheritAttrs:P,components:F,directives:k,filters:V}=e;if(l&&bv(l,i,null),o)for(const L in o){const G=o[L];Ye(G)&&(i[L]=G.bind(n))}if(s){const L=s.call(n,n);ht(L)&&(t.data=_l(L))}if(Kc=!0,r)for(const L in r){const G=r[L],ae=Ye(G)?G.bind(n,n):Ye(G.get)?G.get.bind(n,n):ai,fe=!Ye(G)&&Ye(G.set)?G.set.bind(n):ai,he=wt({get:ae,set:fe});Object.defineProperty(i,L,{enumerable:!0,configurable:!0,get:()=>he.value,set:ve=>he.value=ve})}if(a)for(const L in a)Om(a[L],i,n,L);if(c){const L=Ye(c)?c.call(n):c;Reflect.ownKeys(L).forEach(G=>{Q0(G,L[G])})}u&&Ed(u,t,"c");function C(L,G){Ge(G)?G.forEach(ae=>L(ae.bind(n))):G&&L(G.bind(n))}if(C(fv,d),C(gi,f),C(dv,h),C(hv,g),C(lv,_),C(cv,p),C(_v,S),C(gv,R),C(mv,D),C(To,v),C(Sf,y),C(pv,M),Ge(N))if(N.length){const L=t.exposed||(t.exposed={});N.forEach(G=>{Object.defineProperty(L,G,{get:()=>n[G],set:ae=>n[G]=ae,enumerable:!0})})}else t.exposed||(t.exposed={});w&&t.render===ai&&(t.render=w),P!=null&&(t.inheritAttrs=P),F&&(t.components=F),k&&(t.directives=k),M&&Nm(t)}function bv(t,e,n=ai){Ge(t)&&(t=Jc(t));for(const i in t){const s=t[i];let r;ht(s)?"default"in s?r=Zr(s.from||i,s.default,!0):r=Zr(s.from||i):r=Zr(s),Tt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ed(t,e,n){$n(Ge(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Om(t,e,n,i){let s=i.includes(".")?Am(n,i):()=>n[i];if(Pt(t)){const r=e[t];Ye(r)&&Fi(s,r)}else if(Ye(t))Fi(s,t.bind(n));else if(ht(t))if(Ge(t))t.forEach(r=>Om(r,e,n,i));else{const r=Ye(t.handler)?t.handler.bind(n):e[t.handler];Ye(r)&&Fi(s,r,t)}}function Bm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>Ga(c,l,o,!0)),Ga(c,e,o)),ht(e)&&r.set(e,c),c}function Ga(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ga(t,r,n,!0),s&&s.forEach(o=>Ga(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ev[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ev={data:wd,props:Td,emits:Td,methods:Hr,computed:Hr,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:Hr,directives:Hr,watch:Tv,provide:wd,inject:wv};function wd(t,e){return e?t?function(){return Ot(Ye(t)?t.call(this,this):t,Ye(e)?e.call(this,this):e)}:e:t}function wv(t,e){return Hr(Jc(t),Jc(e))}function Jc(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function en(t,e){return t?[...new Set([].concat(t,e))]:e}function Hr(t,e){return t?Ot(Object.create(null),t,e):e}function Td(t,e){return t?Ge(t)&&Ge(e)?[...new Set([...t,...e])]:Ot(Object.create(null),bd(t),bd(e??{})):e}function Tv(t,e){if(!t)return e;if(!e)return t;const n=Ot(Object.create(null),t);for(const i in e)n[i]=en(t[i],e[i]);return n}function km(){return{app:null,config:{isNativeTag:Xp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Av=0;function Rv(t,e){return function(i,s=null){Ye(i)||(i=Ot({},i)),s!=null&&!ht(s)&&(s=null);const r=km(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:Av++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ox,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Ye(u.install)?(o.add(u),u.install(l,...d)):Ye(u)&&(o.add(u),u(l,...d))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,d){return d?(r.components[u]=d,l):r.components[u]},directive(u,d){return d?(r.directives[u]=d,l):r.directives[u]},mount(u,d,f){if(!c){const h=l._ceVNode||Dt(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),c=!0,l._container=u,u.__vue_app__=l,El(h.component)}},onUnmount(u){a.push(u)},unmount(){c&&($n(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return r.provides[u]=d,l},runWithContext(u){const d=Is;Is=l;try{return u()}finally{Is=d}}};return l}}let Is=null;const Cv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${an(e)}Modifiers`]||t[`${cs(e)}Modifiers`];function Pv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||St;let s=n;const r=e.startsWith("update:"),o=r&&Cv(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Pt(u)?u.trim():u)),o.number&&(s=n.map(pl)));let a,c=i[a=Vl(e)]||i[a=Vl(an(e))];!c&&r&&(c=i[a=Vl(cs(e))]),c&&$n(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$n(l,t,6,s)}}const Lv=new WeakMap;function zm(t,e,n=!1){const i=n?Lv:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ye(t)){const c=l=>{const u=zm(l,e,!0);u&&(a=!0,Ot(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(ht(t)&&i.set(t,null),null):(Ge(r)?r.forEach(c=>o[c]=null):Ot(o,r),ht(t)&&i.set(t,o),o)}function Ml(t,e){return!t||!cl(e)?!1:(e=e.slice(2).replace(/Once$/,""),mt(t,e[0].toLowerCase()+e.slice(1))||mt(t,cs(e))||mt(t,e))}function Ad(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:_}=t,p=Va(t);let m,v;try{if(n.shapeFlag&4){const y=s||i,w=y;m=ni(l.call(w,y,u,d,h,f,g)),v=a}else{const y=e;m=ni(y.length>1?y(d,{attrs:a,slots:o,emit:c}):y(d,null)),v=e.props?a:Dv(a)}}catch(y){no.length=0,xl(y,t,1),m=Dt(sn)}let E=m;if(v&&_!==!1){const y=Object.keys(v),{shapeFlag:w}=E;y.length&&w&7&&(r&&y.some(ff)&&(v=Iv(v,r)),E=as(E,v,!1,!0))}return n.dirs&&(E=as(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&lo(E,n.transition),m=E,Va(p),m}const Dv=t=>{let e;for(const n in t)(n==="class"||n==="style"||cl(n))&&((e||(e={}))[n]=t[n]);return e},Iv=(t,e)=>{const n={};for(const i in t)(!ff(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Nv(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Rd(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Vm(o,i,f)&&!Ml(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Rd(i,o,l):!0:!!o;return!1}function Rd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Vm(e,t,r)&&!Ml(n,r))return!0}return!1}function Vm(t,e,n){const i=t[n],s=e[n];return n==="style"&&ht(i)&&ht(s)?!bo(i,s):i!==s}function Uv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hm={},Gm=()=>Object.create(Hm),Wm=t=>Object.getPrototypeOf(t)===Hm;function Fv(t,e,n,i=!1){const s={},r=Gm();t.propsDefaults=Object.create(null),$m(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:B0(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Ov(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=rt(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Ml(t.emitsOptions,f))continue;const h=e[f];if(c)if(mt(r,f))h!==r[f]&&(r[f]=h,l=!0);else{const g=an(f);s[g]=Zc(c,a,g,h,t,!1)}else h!==r[f]&&(r[f]=h,l=!0)}}}else{$m(t,e,s,r)&&(l=!0);let u;for(const d in a)(!e||!mt(e,d)&&((u=cs(d))===d||!mt(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Zc(c,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!mt(e,d))&&(delete r[d],l=!0)}l&&Di(t.attrs,"set","")}function $m(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(jr(c))continue;const l=e[c];let u;s&&mt(s,u=an(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ml(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=rt(n),l=a||St;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Zc(s,c,d,l[d],t,!mt(l,d))}}return o}function Zc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=mt(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(c)){const{propsDefaults:l}=s;if(n in l)i=l[n];else{const u=Ao(s);i=l[n]=c.call(null,e),u()}}else i=c;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===cs(n))&&(i=!0))}return i}const Bv=new WeakMap;function Xm(t,e,n=!1){const i=n?Bv:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!Ye(t)){const u=d=>{c=!0;const[f,h]=Xm(d,e,!0);Ot(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ht(t)&&i.set(t,or),or;if(Ge(r))for(let u=0;u<r.length;u++){const d=an(r[u]);Cd(d)&&(o[d]=St)}else if(r)for(const u in r){const d=an(u);if(Cd(d)){const f=r[u],h=o[d]=Ge(f)||Ye(f)?{type:f}:Ot({},f),g=h.type;let _=!1,p=!0;if(Ge(g))for(let m=0;m<g.length;++m){const v=g[m],E=Ye(v)&&v.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(p=!1)}else _=Ye(g)&&g.name==="Boolean";h[0]=_,h[1]=p,(_||mt(h,"default"))&&a.push(d)}}const l=[o,a];return ht(t)&&i.set(t,l),l}function Cd(t){return t[0]!=="$"&&!jr(t)}const Mf=t=>t==="_"||t==="_ctx"||t==="$stable",bf=t=>Ge(t)?t.map(ni):[ni(t)],kv=(t,e,n)=>{if(e._n)return e;const i=wm((...s)=>bf(e(...s)),n);return i._c=!1,i},qm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Mf(s))continue;const r=t[s];if(Ye(r))e[s]=kv(s,r,i);else if(r!=null){const o=bf(r);e[s]=()=>o}}},Ym=(t,e)=>{const n=bf(e);t.slots.default=()=>n},jm=(t,e,n)=>{for(const i in e)(n||!Mf(i))&&(t[i]=e[i])},zv=(t,e,n)=>{const i=t.slots=Gm();if(t.vnode.shapeFlag&32){const s=e._;s?(jm(i,e,n),n&&Kp(i,"_",s,!0)):qm(e,i)}else e&&Ym(t,e)},Vv=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=St;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:jm(s,e,n):(r=!e.$stable,qm(e,s)),o=e}else e&&(Ym(t,e),o={default:1});if(r)for(const a in s)!Mf(a)&&o[a]==null&&delete s[a]},hn=Xv;function Hv(t){return Gv(t)}function Gv(t,e){const n=ml();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=ai,insertStaticContent:g}=t,_=(O,z,X,se=null,Z=null,oe=null,I=void 0,pe=null,ce=!!z.dynamicChildren)=>{if(O===z)return;O&&!Es(O,z)&&(se=ye(O),ve(O,Z,oe,!0),O=null),z.patchFlag===-2&&(ce=!1,z.dynamicChildren=null);const{type:ie,ref:ue,shapeFlag:T}=z;switch(ie){case bl:p(O,z,X,se);break;case sn:m(O,z,X,se);break;case ba:O==null&&v(z,X,se,I);break;case ft:F(O,z,X,se,Z,oe,I,pe,ce);break;default:T&1?w(O,z,X,se,Z,oe,I,pe,ce):T&6?k(O,z,X,se,Z,oe,I,pe,ce):(T&64||T&128)&&ie.process(O,z,X,se,Z,oe,I,pe,ce,He)}ue!=null&&Z?Qr(ue,O&&O.ref,oe,z||O,!z):ue==null&&O&&O.ref!=null&&Qr(O.ref,null,oe,O,!0)},p=(O,z,X,se)=>{if(O==null)i(z.el=a(z.children),X,se);else{const Z=z.el=O.el;z.children!==O.children&&l(Z,z.children)}},m=(O,z,X,se)=>{O==null?i(z.el=c(z.children||""),X,se):z.el=O.el},v=(O,z,X,se)=>{[O.el,O.anchor]=g(O.children,z,X,se,O.el,O.anchor)},E=({el:O,anchor:z},X,se)=>{let Z;for(;O&&O!==z;)Z=f(O),i(O,X,se),O=Z;i(z,X,se)},y=({el:O,anchor:z})=>{let X;for(;O&&O!==z;)X=f(O),s(O),O=X;s(z)},w=(O,z,X,se,Z,oe,I,pe,ce)=>{if(z.type==="svg"?I="svg":z.type==="math"&&(I="mathml"),O==null)R(z,X,se,Z,oe,I,pe,ce);else{const ie=O.el&&O.el._isVueCE?O.el:null;try{ie&&ie._beginPatch(),M(O,z,Z,oe,I,pe,ce)}finally{ie&&ie._endPatch()}}},R=(O,z,X,se,Z,oe,I,pe)=>{let ce,ie;const{props:ue,shapeFlag:T,transition:b,dirs:B}=O;if(ce=O.el=o(O.type,oe,ue&&ue.is,ue),T&8?u(ce,O.children):T&16&&S(O.children,ce,null,se,Z,Yl(O,oe),I,pe),B&&ds(O,null,se,"created"),D(ce,O,O.scopeId,I,se),ue){for(const ee in ue)ee!=="value"&&!jr(ee)&&r(ce,ee,null,ue[ee],oe,se);"value"in ue&&r(ce,"value",null,ue.value,oe),(ie=ue.onVnodeBeforeMount)&&jn(ie,se,O)}B&&ds(O,null,se,"beforeMount");const q=Wv(Z,b);q&&b.beforeEnter(ce),i(ce,z,X),((ie=ue&&ue.onVnodeMounted)||q||B)&&hn(()=>{ie&&jn(ie,se,O),q&&b.enter(ce),B&&ds(O,null,se,"mounted")},Z)},D=(O,z,X,se,Z)=>{if(X&&h(O,X),se)for(let oe=0;oe<se.length;oe++)h(O,se[oe]);if(Z){let oe=Z.subTree;if(z===oe||Qm(oe.type)&&(oe.ssContent===z||oe.ssFallback===z)){const I=Z.vnode;D(O,I,I.scopeId,I.slotScopeIds,Z.parent)}}},S=(O,z,X,se,Z,oe,I,pe,ce=0)=>{for(let ie=ce;ie<O.length;ie++){const ue=O[ie]=pe?Li(O[ie]):ni(O[ie]);_(null,ue,z,X,se,Z,oe,I,pe)}},M=(O,z,X,se,Z,oe,I)=>{const pe=z.el=O.el;let{patchFlag:ce,dynamicChildren:ie,dirs:ue}=z;ce|=O.patchFlag&16;const T=O.props||St,b=z.props||St;let B;if(X&&hs(X,!1),(B=b.onVnodeBeforeUpdate)&&jn(B,X,z,O),ue&&ds(z,O,X,"beforeUpdate"),X&&hs(X,!0),(T.innerHTML&&b.innerHTML==null||T.textContent&&b.textContent==null)&&u(pe,""),ie?N(O.dynamicChildren,ie,pe,X,se,Yl(z,Z),oe):I||G(O,z,pe,null,X,se,Yl(z,Z),oe,!1),ce>0){if(ce&16)P(pe,T,b,X,Z);else if(ce&2&&T.class!==b.class&&r(pe,"class",null,b.class,Z),ce&4&&r(pe,"style",T.style,b.style,Z),ce&8){const q=z.dynamicProps;for(let ee=0;ee<q.length;ee++){const Y=q[ee],Te=T[Y],ge=b[Y];(ge!==Te||Y==="value")&&r(pe,Y,Te,ge,Z,X)}}ce&1&&O.children!==z.children&&u(pe,z.children)}else!I&&ie==null&&P(pe,T,b,X,Z);((B=b.onVnodeUpdated)||ue)&&hn(()=>{B&&jn(B,X,z,O),ue&&ds(z,O,X,"updated")},se)},N=(O,z,X,se,Z,oe,I)=>{for(let pe=0;pe<z.length;pe++){const ce=O[pe],ie=z[pe],ue=ce.el&&(ce.type===ft||!Es(ce,ie)||ce.shapeFlag&198)?d(ce.el):X;_(ce,ie,ue,null,se,Z,oe,I,!0)}},P=(O,z,X,se,Z)=>{if(z!==X){if(z!==St)for(const oe in z)!jr(oe)&&!(oe in X)&&r(O,oe,z[oe],null,Z,se);for(const oe in X){if(jr(oe))continue;const I=X[oe],pe=z[oe];I!==pe&&oe!=="value"&&r(O,oe,pe,I,Z,se)}"value"in X&&r(O,"value",z.value,X.value,Z)}},F=(O,z,X,se,Z,oe,I,pe,ce)=>{const ie=z.el=O?O.el:a(""),ue=z.anchor=O?O.anchor:a("");let{patchFlag:T,dynamicChildren:b,slotScopeIds:B}=z;B&&(pe=pe?pe.concat(B):B),O==null?(i(ie,X,se),i(ue,X,se),S(z.children||[],X,ue,Z,oe,I,pe,ce)):T>0&&T&64&&b&&O.dynamicChildren&&O.dynamicChildren.length===b.length?(N(O.dynamicChildren,b,X,Z,oe,I,pe),(z.key!=null||Z&&z===Z.subTree)&&Km(O,z,!0)):G(O,z,X,ue,Z,oe,I,pe,ce)},k=(O,z,X,se,Z,oe,I,pe,ce)=>{z.slotScopeIds=pe,O==null?z.shapeFlag&512?Z.ctx.activate(z,X,se,I,ce):V(z,X,se,Z,oe,I,ce):U(O,z,ce)},V=(O,z,X,se,Z,oe,I)=>{const pe=O.component=Zv(O,se,Z);if(yl(O)&&(pe.ctx.renderer=He),Qv(pe,!1,I),pe.asyncDep){if(Z&&Z.registerDep(pe,C,I),!O.el){const ce=pe.subTree=Dt(sn);m(null,ce,z,X),O.placeholder=ce.el}}else C(pe,O,z,X,Z,oe,I)},U=(O,z,X)=>{const se=z.component=O.component;if(Nv(O,z,X))if(se.asyncDep&&!se.asyncResolved){L(se,z,X);return}else se.next=z,se.update();else z.el=O.el,se.vnode=z},C=(O,z,X,se,Z,oe,I)=>{const pe=()=>{if(O.isMounted){let{next:T,bu:b,u:B,parent:q,vnode:ee}=O;{const Be=Jm(O);if(Be){T&&(T.el=ee.el,L(O,T,I)),Be.asyncDep.then(()=>{hn(()=>{O.isUnmounted||ie()},Z)});return}}let Y=T,Te;hs(O,!1),T?(T.el=ee.el,L(O,T,I)):T=ee,b&&Ma(b),(Te=T.props&&T.props.onVnodeBeforeUpdate)&&jn(Te,q,T,ee),hs(O,!0);const ge=Ad(O),Ne=O.subTree;O.subTree=ge,_(Ne,ge,d(Ne.el),ye(Ne),O,Z,oe),T.el=ge.el,Y===null&&Uv(O,ge.el),B&&hn(B,Z),(Te=T.props&&T.props.onVnodeUpdated)&&hn(()=>jn(Te,q,T,ee),Z)}else{let T;const{el:b,props:B}=z,{bm:q,m:ee,parent:Y,root:Te,type:ge}=O,Ne=eo(z);hs(O,!1),q&&Ma(q),!Ne&&(T=B&&B.onVnodeBeforeMount)&&jn(T,Y,z),hs(O,!0);{Te.ce&&Te.ce._hasShadowRoot()&&Te.ce._injectChildStyle(ge,O.parent?O.parent.type:void 0);const Be=O.subTree=Ad(O);_(null,Be,X,se,O,Z,oe),z.el=Be.el}if(ee&&hn(ee,Z),!Ne&&(T=B&&B.onVnodeMounted)){const Be=z;hn(()=>jn(T,Y,Be),Z)}(z.shapeFlag&256||Y&&eo(Y.vnode)&&Y.vnode.shapeFlag&256)&&O.a&&hn(O.a,Z),O.isMounted=!0,z=X=se=null}};O.scope.on();const ce=O.effect=new im(pe);O.scope.off();const ie=O.update=ce.run.bind(ce),ue=O.job=ce.runIfDirty.bind(ce);ue.i=O,ue.id=O.uid,ce.scheduler=()=>yf(ue),hs(O,!0),ie()},L=(O,z,X)=>{z.component=O;const se=O.vnode.props;O.vnode=z,O.next=null,Ov(O,z.props,se,X),Vv(O,z.children,X),ki(),vd(O),zi()},G=(O,z,X,se,Z,oe,I,pe,ce=!1)=>{const ie=O&&O.children,ue=O?O.shapeFlag:0,T=z.children,{patchFlag:b,shapeFlag:B}=z;if(b>0){if(b&128){fe(ie,T,X,se,Z,oe,I,pe,ce);return}else if(b&256){ae(ie,T,X,se,Z,oe,I,pe,ce);return}}B&8?(ue&16&&re(ie,Z,oe),T!==ie&&u(X,T)):ue&16?B&16?fe(ie,T,X,se,Z,oe,I,pe,ce):re(ie,Z,oe,!0):(ue&8&&u(X,""),B&16&&S(T,X,se,Z,oe,I,pe,ce))},ae=(O,z,X,se,Z,oe,I,pe,ce)=>{O=O||or,z=z||or;const ie=O.length,ue=z.length,T=Math.min(ie,ue);let b;for(b=0;b<T;b++){const B=z[b]=ce?Li(z[b]):ni(z[b]);_(O[b],B,X,null,Z,oe,I,pe,ce)}ie>ue?re(O,Z,oe,!0,!1,T):S(z,X,se,Z,oe,I,pe,ce,T)},fe=(O,z,X,se,Z,oe,I,pe,ce)=>{let ie=0;const ue=z.length;let T=O.length-1,b=ue-1;for(;ie<=T&&ie<=b;){const B=O[ie],q=z[ie]=ce?Li(z[ie]):ni(z[ie]);if(Es(B,q))_(B,q,X,null,Z,oe,I,pe,ce);else break;ie++}for(;ie<=T&&ie<=b;){const B=O[T],q=z[b]=ce?Li(z[b]):ni(z[b]);if(Es(B,q))_(B,q,X,null,Z,oe,I,pe,ce);else break;T--,b--}if(ie>T){if(ie<=b){const B=b+1,q=B<ue?z[B].el:se;for(;ie<=b;)_(null,z[ie]=ce?Li(z[ie]):ni(z[ie]),X,q,Z,oe,I,pe,ce),ie++}}else if(ie>b)for(;ie<=T;)ve(O[ie],Z,oe,!0),ie++;else{const B=ie,q=ie,ee=new Map;for(ie=q;ie<=b;ie++){const Ae=z[ie]=ce?Li(z[ie]):ni(z[ie]);Ae.key!=null&&ee.set(Ae.key,ie)}let Y,Te=0;const ge=b-q+1;let Ne=!1,Be=0;const me=new Array(ge);for(ie=0;ie<ge;ie++)me[ie]=0;for(ie=B;ie<=T;ie++){const Ae=O[ie];if(Te>=ge){ve(Ae,Z,oe,!0);continue}let Le;if(Ae.key!=null)Le=ee.get(Ae.key);else for(Y=q;Y<=b;Y++)if(me[Y-q]===0&&Es(Ae,z[Y])){Le=Y;break}Le===void 0?ve(Ae,Z,oe,!0):(me[Le-q]=ie+1,Le>=Be?Be=Le:Ne=!0,_(Ae,z[Le],X,null,Z,oe,I,pe,ce),Te++)}const xe=Ne?$v(me):or;for(Y=xe.length-1,ie=ge-1;ie>=0;ie--){const Ae=q+ie,Le=z[Ae],De=z[Ae+1],Ze=Ae+1<ue?De.el||Zm(De):se;me[ie]===0?_(null,Le,X,Ze,Z,oe,I,pe,ce):Ne&&(Y<0||ie!==xe[Y]?he(Le,X,Ze,2):Y--)}}},he=(O,z,X,se,Z=null)=>{const{el:oe,type:I,transition:pe,children:ce,shapeFlag:ie}=O;if(ie&6){he(O.component.subTree,z,X,se);return}if(ie&128){O.suspense.move(z,X,se);return}if(ie&64){I.move(O,z,X,He);return}if(I===ft){i(oe,z,X);for(let T=0;T<ce.length;T++)he(ce[T],z,X,se);i(O.anchor,z,X);return}if(I===ba){E(O,z,X);return}if(se!==2&&ie&1&&pe)if(se===0)pe.beforeEnter(oe),i(oe,z,X),hn(()=>pe.enter(oe),Z);else{const{leave:T,delayLeave:b,afterLeave:B}=pe,q=()=>{O.ctx.isUnmounted?s(oe):i(oe,z,X)},ee=()=>{oe._isLeaving&&oe[ei](!0),T(oe,()=>{q(),B&&B()})};b?b(oe,q,ee):ee()}else i(oe,z,X)},ve=(O,z,X,se=!1,Z=!1)=>{const{type:oe,props:I,ref:pe,children:ce,dynamicChildren:ie,shapeFlag:ue,patchFlag:T,dirs:b,cacheIndex:B}=O;if(T===-2&&(Z=!1),pe!=null&&(ki(),Qr(pe,null,X,O,!0),zi()),B!=null&&(z.renderCache[B]=void 0),ue&256){z.ctx.deactivate(O);return}const q=ue&1&&b,ee=!eo(O);let Y;if(ee&&(Y=I&&I.onVnodeBeforeUnmount)&&jn(Y,z,O),ue&6)pt(O.component,X,se);else{if(ue&128){O.suspense.unmount(X,se);return}q&&ds(O,null,z,"beforeUnmount"),ue&64?O.type.remove(O,z,X,He,se):ie&&!ie.hasOnce&&(oe!==ft||T>0&&T&64)?re(ie,z,X,!1,!0):(oe===ft&&T&384||!Z&&ue&16)&&re(ce,z,X),se&&We(O)}(ee&&(Y=I&&I.onVnodeUnmounted)||q)&&hn(()=>{Y&&jn(Y,z,O),q&&ds(O,null,z,"unmounted")},X)},We=O=>{const{type:z,el:X,anchor:se,transition:Z}=O;if(z===ft){dt(X,se);return}if(z===ba){y(O);return}const oe=()=>{s(X),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(O.shapeFlag&1&&Z&&!Z.persisted){const{leave:I,delayLeave:pe}=Z,ce=()=>I(X,oe);pe?pe(O.el,oe,ce):ce()}else oe()},dt=(O,z)=>{let X;for(;O!==z;)X=f(O),s(O),O=X;s(z)},pt=(O,z,X)=>{const{bum:se,scope:Z,job:oe,subTree:I,um:pe,m:ce,a:ie}=O;Pd(ce),Pd(ie),se&&Ma(se),Z.stop(),oe&&(oe.flags|=8,ve(I,O,z,X)),pe&&hn(pe,z),hn(()=>{O.isUnmounted=!0},z)},re=(O,z,X,se=!1,Z=!1,oe=0)=>{for(let I=oe;I<O.length;I++)ve(O[I],z,X,se,Z)},ye=O=>{if(O.shapeFlag&6)return ye(O.component.subTree);if(O.shapeFlag&128)return O.suspense.next();const z=f(O.anchor||O.el),X=z&&z[sv];return X?f(X):z};let be=!1;const je=(O,z,X)=>{let se;O==null?z._vnode&&(ve(z._vnode,null,null,!0),se=z._vnode.component):_(z._vnode||null,O,z,null,null,null,X),z._vnode=O,be||(be=!0,vd(se),Mm(),be=!1)},He={p:_,um:ve,m:he,r:We,mt:V,mc:S,pc:G,pbc:N,n:ye,o:t};return{render:je,hydrate:void 0,createApp:Rv(je)}}function Yl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Wv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Km(t,e,n=!1){const i=t.children,s=e.children;if(Ge(i)&&Ge(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Li(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Km(o,a)),a.type===bl&&(a.patchFlag===-1&&(a=s[r]=Li(a)),a.el=o.el),a.type===sn&&!a.el&&(a.el=o.el)}}function $v(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Jm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jm(e)}function Pd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Zm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Zm(e.subTree):null}const Qm=t=>t.__isSuspense;function Xv(t,e){e&&e.pendingBranch?Ge(t)?e.effects.push(...t):e.effects.push(t):Z0(t)}const ft=Symbol.for("v-fgt"),bl=Symbol.for("v-txt"),sn=Symbol.for("v-cmt"),ba=Symbol.for("v-stc"),no=[];let wn=null;function le(t=!1){no.push(wn=t?null:[])}function qv(){no.pop(),wn=no[no.length-1]||null}let co=1;function Wa(t,e=!1){co+=t,t<0&&wn&&e&&(wn.hasOnce=!0)}function eg(t){return t.dynamicChildren=co>0?wn||or:null,qv(),co>0&&wn&&wn.push(t),t}function de(t,e,n,i,s,r){return eg(x(t,e,n,i,s,r,!0))}function Ci(t,e,n,i,s){return eg(Dt(t,e,n,i,s,!0))}function $a(t){return t?t.__v_isVNode===!0:!1}function Es(t,e){return t.type===e.type&&t.key===e.key}const tg=({key:t})=>t??null,Ea=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Pt(t)||Tt(t)||Ye(t)?{i:En,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,i=0,s=null,r=t===ft?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tg(e),ref:e&&Ea(e),scopeId:Em,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:En};return a?(wf(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Pt(n)?8:16),co>0&&!o&&wn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&wn.push(c),c}const Dt=Yv;function Yv(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Fm)&&(t=sn),$a(t)){const a=as(t,e,!0);return n&&wf(a,n),co>0&&!r&&wn&&(a.shapeFlag&6?wn[wn.indexOf(t)]=a:wn.push(a)),a.patchFlag=-2,a}if(sx(t)&&(t=t.__vccOpts),e){e=jv(e);let{class:a,style:c}=e;a&&!Pt(a)&&(e.class=lt(a)),ht(c)&&(vl(c)&&!Ge(c)&&(c=Ot({},c)),e.style=Bn(c))}const o=Pt(t)?1:Qm(t)?128:Rm(t)?64:ht(t)?4:Ye(t)?2:0;return x(t,e,n,i,s,o,r,!0)}function jv(t){return t?vl(t)||Wm(t)?Ot({},t):t:null}function as(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=t,l=e?ig(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&tg(l),ref:e&&e.ref?n&&r?Ge(r)?r.concat(Ea(e)):[r,Ea(e)]:Ea(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&as(t.ssContent),ssFallback:t.ssFallback&&as(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&lo(u,c.clone(u)),u}function Ef(t=" ",e=0){return Dt(bl,null,t,e)}function ng(t,e){const n=Dt(ba,null,t);return n.staticCount=e,n}function Je(t="",e=!1){return e?(le(),Ci(sn,null,t)):Dt(sn,null,t)}function ni(t){return t==null||typeof t=="boolean"?Dt(sn):Ge(t)?Dt(ft,null,t.slice()):$a(t)?Li(t):Dt(bl,null,String(t))}function Li(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:as(t)}function wf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ge(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),wf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Wm(e)?e._ctx=En:s===3&&En&&(En.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:En},n=32):(e=String(e),i&64?(n=16,e=[Ef(e)]):n=8);t.children=e,t.shapeFlag|=n}function ig(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=lt([e.class,i.class]));else if(s==="style")e.style=Bn([e.style,i.style]);else if(cl(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ge(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function jn(t,e,n,i=null){$n(t,e,7,[n,i])}const Kv=km();let Jv=0;function Zv(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Kv,r={uid:Jv++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new em(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xm(i,s),emitsOptions:zm(i,s),emit:null,emitted:null,propsDefaults:St,inheritAttrs:i.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Pv.bind(null,r),t.ce&&t.ce(r),r}let Kt=null;const Tf=()=>Kt||En;let Xa,Qc;{const t=ml(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Xa=e("__VUE_INSTANCE_SETTERS__",n=>Kt=n),Qc=e("__VUE_SSR_SETTERS__",n=>uo=n)}const Ao=t=>{const e=Kt;return Xa(t),t.scope.on(),()=>{t.scope.off(),Xa(e)}},Ld=()=>{Kt&&Kt.scope.off(),Xa(null)};function sg(t){return t.vnode.shapeFlag&4}let uo=!1;function Qv(t,e=!1,n=!1){e&&Qc(e);const{props:i,children:s}=t.vnode,r=sg(t);Fv(t,i,r,e),zv(t,s,n||e);const o=r?ex(t,e):void 0;return e&&Qc(!1),o}function ex(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Sv);const{setup:i}=n;if(i){ki();const s=t.setupContext=i.length>1?nx(t):null,r=Ao(t),o=Eo(i,t,0,[t.props,s]),a=qp(o);if(zi(),r(),(a||t.sp)&&!eo(t)&&Nm(t),a){if(o.then(Ld,Ld),e)return o.then(c=>{Dd(t,c)}).catch(c=>{xl(c,t,0)});t.asyncDep=o}else Dd(t,o)}else rg(t)}function Dd(t,e,n){Ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ht(e)&&(t.setupState=vm(e)),rg(t)}function rg(t,e,n){const i=t.type;t.render||(t.render=i.render||ai);{const s=Ao(t);ki();try{Mv(t)}finally{zi(),s()}}}const tx={get(t,e){return jt(t,"get",""),t[e]}};function nx(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,tx),slots:t.slots,emit:t.emit,expose:e}}function El(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vm(xf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in to)return to[n](t)},has(e,n){return n in e||n in to}})):t.proxy}function ix(t,e=!0){return Ye(t)?t.displayName||t.name:t.name||e&&t.__name}function sx(t){return Ye(t)&&"__vccOpts"in t}const wt=(t,e)=>q0(t,e,uo);function rx(t,e,n){try{Wa(-1);const i=arguments.length;return i===2?ht(e)&&!Ge(e)?$a(e)?Dt(t,null,[e]):Dt(t,e):Dt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&$a(n)&&(n=[n]),Dt(t,e,n))}finally{Wa(1)}}const ox="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let eu;const Id=typeof window<"u"&&window.trustedTypes;if(Id)try{eu=Id.createPolicy("vue",{createHTML:t=>t})}catch{}const og=eu?t=>eu.createHTML(t):t=>t,ax="http://www.w3.org/2000/svg",lx="http://www.w3.org/1998/Math/MathML",Pi=typeof document<"u"?document:null,Nd=Pi&&Pi.createElement("template"),cx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Pi.createElementNS(ax,t):e==="mathml"?Pi.createElementNS(lx,t):n?Pi.createElement(t,{is:n}):Pi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Pi.createTextNode(t),createComment:t=>Pi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Nd.innerHTML=og(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Nd.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yi="transition",Lr="animation",fo=Symbol("_vtc"),ag={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ux=Ot({},Cm,ag),fx=t=>(t.displayName="Transition",t.props=ux,t),dx=fx((t,{slots:e})=>rx(av,hx(t),e)),ps=(t,e=[])=>{Ge(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ud=t=>t?Ge(t)?t.some(e=>e.length>1):t.length>1:!1;function hx(t){const e={};for(const F in t)F in ag||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=px(s),_=g&&g[0],p=g&&g[1],{onBeforeEnter:m,onEnter:v,onEnterCancelled:E,onLeave:y,onLeaveCancelled:w,onBeforeAppear:R=m,onAppear:D=v,onAppearCancelled:S=E}=e,M=(F,k,V,U)=>{F._enterCancelled=U,ms(F,k?u:a),ms(F,k?l:o),V&&V()},N=(F,k)=>{F._isLeaving=!1,ms(F,d),ms(F,h),ms(F,f),k&&k()},P=F=>(k,V)=>{const U=F?D:v,C=()=>M(k,F,V);ps(U,[k,C]),Fd(()=>{ms(k,F?c:r),Mi(k,F?u:a),Ud(U)||Od(k,i,_,C)})};return Ot(e,{onBeforeEnter(F){ps(m,[F]),Mi(F,r),Mi(F,o)},onBeforeAppear(F){ps(R,[F]),Mi(F,c),Mi(F,l)},onEnter:P(!1),onAppear:P(!0),onLeave(F,k){F._isLeaving=!0;const V=()=>N(F,k);Mi(F,d),F._enterCancelled?(Mi(F,f),zd(F)):(zd(F),Mi(F,f)),Fd(()=>{F._isLeaving&&(ms(F,d),Mi(F,h),Ud(y)||Od(F,i,p,V))}),ps(y,[F,V])},onEnterCancelled(F){M(F,!1,void 0,!0),ps(E,[F])},onAppearCancelled(F){M(F,!0,void 0,!0),ps(S,[F])},onLeaveCancelled(F){N(F),ps(w,[F])}})}function px(t){if(t==null)return null;if(ht(t))return[jl(t.enter),jl(t.leave)];{const e=jl(t);return[e,e]}}function jl(t){return c0(t)}function Mi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[fo]||(t[fo]=new Set)).add(e)}function ms(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[fo];n&&(n.delete(e),n.size||(t[fo]=void 0))}function Fd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let mx=0;function Od(t,e,n,i){const s=t._endId=++mx,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:c}=gx(t,e);if(!o)return i();const l=o+"end";let u=0;const d=()=>{t.removeEventListener(l,f),r()},f=h=>{h.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),t.addEventListener(l,f)}function gx(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(`${Yi}Delay`),r=i(`${Yi}Duration`),o=Bd(s,r),a=i(`${Lr}Delay`),c=i(`${Lr}Duration`),l=Bd(a,c);let u=null,d=0,f=0;e===Yi?o>0&&(u=Yi,d=o,f=r.length):e===Lr?l>0&&(u=Lr,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Yi:Lr:null,f=u?u===Yi?r.length:c.length:0);const h=u===Yi&&/\b(?:transform|all)(?:,|$)/.test(i(`${Yi}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function Bd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>kd(n)+kd(t[i])))}function kd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function zd(t){return(t?t.ownerDocument:document).body.offsetHeight}function _x(t,e,n){const i=t[fo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Vd=Symbol("_vod"),vx=Symbol("_vsh"),xx=Symbol(""),yx=/(?:^|;)\s*display\s*:/;function Sx(t,e,n){const i=t.style,s=Pt(n);let r=!1;if(n&&!s){if(e)if(Pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&wa(i,a,"")}else for(const o in e)n[o]==null&&wa(i,o,"");for(const o in n)o==="display"&&(r=!0),wa(i,o,n[o])}else if(s){if(e!==n){const o=i[xx];o&&(n+=";"+o),i.cssText=n,r=yx.test(n)}}else e&&t.removeAttribute("style");Vd in t&&(t[Vd]=r?i.display:"",t[vx]&&(i.display="none"))}const Hd=/\s*!important$/;function wa(t,e,n){if(Ge(n))n.forEach(i=>wa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Mx(t,e);Hd.test(n)?t.setProperty(cs(i),n.replace(Hd,""),"important"):t[i]=n}}const Gd=["Webkit","Moz","ms"],Kl={};function Mx(t,e){const n=Kl[e];if(n)return n;let i=an(e);if(i!=="filter"&&i in t)return Kl[e]=i;i=hl(i);for(let s=0;s<Gd.length;s++){const r=Gd[s]+i;if(r in t)return Kl[e]=r}return e}const Wd="http://www.w3.org/1999/xlink";function $d(t,e,n,i,s,r=m0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Wd,e.slice(6,e.length)):t.setAttributeNS(Wd,e,n):n==null||r&&!Jp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":di(n)?String(n):n)}function Xd(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?og(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Jp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ws(t,e,n,i){t.addEventListener(e,n,i)}function bx(t,e,n,i){t.removeEventListener(e,n,i)}const qd=Symbol("_vei");function Ex(t,e,n,i,s=null){const r=t[qd]||(t[qd]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=wx(e);if(i){const l=r[e]=Rx(i,s);ws(t,a,l,c)}else o&&(bx(t,a,o,c),r[e]=void 0)}}const Yd=/(?:Once|Passive|Capture)$/;function wx(t){let e;if(Yd.test(t)){e={};let i;for(;i=t.match(Yd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let Jl=0;const Tx=Promise.resolve(),Ax=()=>Jl||(Tx.then(()=>Jl=0),Jl=Date.now());function Rx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;$n(Cx(i,n.value),e,5,[i])};return n.value=t,n.attached=Ax(),n}function Cx(t,e){if(Ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const jd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Px=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?_x(t,i,o):e==="style"?Sx(t,n,i):cl(e)?ff(e)||Ex(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Lx(t,e,i,o))?(Xd(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$d(t,e,i,o,r,e!=="value")):t._isVueCE&&(Dx(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Pt(i)))?Xd(t,an(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),$d(t,e,i,o))};function Lx(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&jd(e)&&Ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return jd(e)&&Pt(n)?!1:e in t}function Dx(t,e){const n=t._def.props;if(!n)return!1;const i=an(e);return Array.isArray(n)?n.some(s=>an(s)===i):Object.keys(n).some(s=>an(s)===i)}const qa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ge(e)?n=>Ma(e,n):e};function Ix(t){t.target.composing=!0}function Kd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cr=Symbol("_assign");function Jd(t,e,n){return e&&(t=t.trim()),n&&(t=pl(t)),t}const on={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[cr]=qa(s);const r=i||s.props&&s.props.type==="number";ws(t,e?"change":"input",o=>{o.target.composing||t[cr](Jd(t.value,n,r))}),(n||r)&&ws(t,"change",()=>{t.value=Jd(t.value,n,r)}),e||(ws(t,"compositionstart",Ix),ws(t,"compositionend",Kd),ws(t,"change",Kd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[cr]=qa(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?pl(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===c)||(t.value=c))}},io={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=ul(e);ws(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?pl(Ya(o)):Ya(o));t[cr](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,wo(()=>{t._assigning=!1})}),t[cr]=qa(i)},mounted(t,{value:e}){Zd(t,e)},beforeUpdate(t,e,n){t[cr]=qa(n)},updated(t,{value:e}){t._assigning||Zd(t,e)}};function Zd(t,e){const n=t.multiple,i=Ge(e);if(!(n&&!i&&!ul(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=Ya(o);if(n)if(i){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=_0(e,a)>-1}else o.selected=e.has(a);else if(bo(Ya(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ya(t){return"_value"in t?t._value:t.value}const Nx=["ctrl","shift","alt","meta"],Ux={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Nx.some(n=>t[`${n}Key`]&&!e.includes(n))},lg=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Ux[e[o]];if(a&&a(s,e))return}return t(s,...r)})},Fx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Af=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=cs(s.key);if(e.some(o=>o===r||Fx[o]===r))return t(s)})},Ox=Ot({patchProp:Px},cx);let Qd;function Bx(){return Qd||(Qd=Hv(Ox))}const kx=(...t)=>{const e=Bx().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Vx(i);if(!s)return;const r=e._component;!Ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,zx(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function zx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Vx(t){return Pt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let cg;const wl=t=>cg=t,ug=Symbol();function tu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var so;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(so||(so={}));function Hx(){const t=tm(!0),e=t.run(()=>we({}));let n=[],i=[];const s=xf({install(r){wl(s),s._a=r,r.provide(ug,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const fg=()=>{};function eh(t,e,n,i=fg){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&nm()&&v0(s),s}function Ws(t,...e){t.slice().forEach(n=>{n(...e)})}const Gx=t=>t(),th=Symbol(),Zl=Symbol();function nu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];tu(s)&&tu(i)&&t.hasOwnProperty(n)&&!Tt(i)&&!li(i)?t[n]=nu(s,i):t[n]=i}return t}const Wx=Symbol();function $x(t){return!tu(t)||!t.hasOwnProperty(Wx)}const{assign:ts}=Object;function Xx(t){return!!(Tt(t)&&t.effect)}function qx(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=H0(n.state.value[t]);return ts(u,r,Object.keys(o||{}).reduce((d,f)=>(d[f]=xf(wt(()=>{wl(n);const h=n._s.get(t);return o[f].call(h,h)})),d),{}))}return c=dg(t,l,e,n,i,!0),c}function dg(t,e,n={},i,s,r){let o;const a=ts({actions:{}},n),c={deep:!0};let l,u,d=[],f=[],h;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={});let _;function p(S){let M;l=u=!1,typeof S=="function"?(S(i.state.value[t]),M={type:so.patchFunction,storeId:t,events:h}):(nu(i.state.value[t],S),M={type:so.patchObject,payload:S,storeId:t,events:h});const N=_=Symbol();wo().then(()=>{_===N&&(l=!0)}),u=!0,Ws(d,M,i.state.value[t])}const m=r?function(){const{state:M}=n,N=M?M():{};this.$patch(P=>{ts(P,N)})}:fg;function v(){o.stop(),d=[],f=[],i._s.delete(t)}const E=(S,M="")=>{if(th in S)return S[Zl]=M,S;const N=function(){wl(i);const P=Array.from(arguments),F=[],k=[];function V(L){F.push(L)}function U(L){k.push(L)}Ws(f,{args:P,name:N[Zl],store:w,after:V,onError:U});let C;try{C=S.apply(this&&this.$id===t?this:w,P)}catch(L){throw Ws(k,L),L}return C instanceof Promise?C.then(L=>(Ws(F,L),L)).catch(L=>(Ws(k,L),Promise.reject(L))):(Ws(F,C),C)};return N[th]=!0,N[Zl]=M,N},y={_p:i,$id:t,$onAction:eh.bind(null,f),$patch:p,$reset:m,$subscribe(S,M={}){const N=eh(d,S,M.detached,()=>P()),P=o.run(()=>Fi(()=>i.state.value[t],F=>{(M.flush==="sync"?u:l)&&S({storeId:t,type:so.direct,events:h},F)},ts({},c,M)));return N},$dispose:v},w=_l(y);i._s.set(t,w);const D=(i._a&&i._a.runWithContext||Gx)(()=>i._e.run(()=>(o=tm()).run(()=>e({action:E}))));for(const S in D){const M=D[S];if(Tt(M)&&!Xx(M)||li(M))r||(g&&$x(M)&&(Tt(M)?M.value=g[S]:nu(M,g[S])),i.state.value[t][S]=M);else if(typeof M=="function"){const N=E(M,S);D[S]=N,a.actions[S]=M}}return ts(w,D),ts(rt(w),D),Object.defineProperty(w,"$state",{get:()=>i.state.value[t],set:S=>{p(M=>{ts(M,S)})}}),i._p.forEach(S=>{ts(w,o.run(()=>S({store:w,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate(w.$state,g),l=!0,u=!0,w}/*! #__NO_SIDE_EFFECTS__ */function Rf(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,c){const l=ev();return a=a||(l?Zr(ug,null):null),a&&wl(a),a=cg,a._s.has(i)||(r?dg(i,e,s,a):qx(i,s,a)),a._s.get(i)}return o.$id=i,o}function Er(t){{const e=rt(t),n={};for(const i in e){const s=e[i];s.effect?n[i]=wt({get:()=>t[i],set(r){t[i]=r}}):(Tt(s)||li(s))&&(n[i]=$0(t,i))}return n}}function hg(t,e){return function(){return t.apply(e,arguments)}}const{toString:Yx}=Object.prototype,{getPrototypeOf:Cf}=Object,{iterator:Tl,toStringTag:pg}=Symbol,Al=(t=>e=>{const n=Yx.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Xn=t=>(t=t.toLowerCase(),e=>Al(e)===t),Rl=t=>e=>typeof e===t,{isArray:wr}=Array,mr=Rl("undefined");function Ro(t){return t!==null&&!mr(t)&&t.constructor!==null&&!mr(t.constructor)&&mn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const mg=Xn("ArrayBuffer");function jx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&mg(t.buffer),e}const Kx=Rl("string"),mn=Rl("function"),gg=Rl("number"),Co=t=>t!==null&&typeof t=="object",Jx=t=>t===!0||t===!1,Ta=t=>{if(Al(t)!=="object")return!1;const e=Cf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(pg in t)&&!(Tl in t)},Zx=t=>{if(!Co(t)||Ro(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Qx=Xn("Date"),ey=Xn("File"),ty=t=>!!(t&&typeof t.uri<"u"),ny=t=>t&&typeof t.getParts<"u",iy=Xn("Blob"),sy=Xn("FileList"),ry=t=>Co(t)&&mn(t.pipe);function oy(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const nh=oy(),ih=typeof nh.FormData<"u"?nh.FormData:void 0,ay=t=>{let e;return t&&(ih&&t instanceof ih||mn(t.append)&&((e=Al(t))==="formdata"||e==="object"&&mn(t.toString)&&t.toString()==="[object FormData]"))},ly=Xn("URLSearchParams"),[cy,uy,fy,dy]=["ReadableStream","Request","Response","Headers"].map(Xn),hy=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Po(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),wr(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(Ro(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function _g(t,e){if(Ro(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const Rs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,vg=t=>!mr(t)&&t!==Rs;function iu(){const{caseless:t,skipUndefined:e}=vg(this)&&this||{},n={},i=(s,r)=>{if(r==="__proto__"||r==="constructor"||r==="prototype")return;const o=t&&_g(n,r)||r;Ta(n[o])&&Ta(s)?n[o]=iu(n[o],s):Ta(s)?n[o]=iu({},s):wr(s)?n[o]=s.slice():(!e||!mr(s))&&(n[o]=s)};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&Po(arguments[s],i);return n}const py=(t,e,n,{allOwnKeys:i}={})=>(Po(e,(s,r)=>{n&&mn(s)?Object.defineProperty(t,r,{value:hg(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),my=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),gy=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},_y=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Cf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},vy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},xy=t=>{if(!t)return null;if(wr(t))return t;let e=t.length;if(!gg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},yy=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Cf(Uint8Array)),Sy=(t,e)=>{const i=(t&&t[Tl]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},My=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},by=Xn("HTMLFormElement"),Ey=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),sh=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),wy=Xn("RegExp"),xg=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Po(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},Ty=t=>{xg(t,(e,n)=>{if(mn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(mn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ay=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return wr(t)?i(t):i(String(t).split(e)),n},Ry=()=>{},Cy=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Py(t){return!!(t&&mn(t.append)&&t[pg]==="FormData"&&t[Tl])}const Ly=t=>{const e=new Array(10),n=(i,s)=>{if(Co(i)){if(e.indexOf(i)>=0)return;if(Ro(i))return i;if(!("toJSON"in i)){e[s]=i;const r=wr(i)?[]:{};return Po(i,(o,a)=>{const c=n(o,s+1);!mr(c)&&(r[a]=c)}),e[s]=void 0,r}}return i};return n(t,0)},Dy=Xn("AsyncFunction"),Iy=t=>t&&(Co(t)||mn(t))&&mn(t.then)&&mn(t.catch),yg=((t,e)=>t?setImmediate:e?((n,i)=>(Rs.addEventListener("message",({source:s,data:r})=>{s===Rs&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),Rs.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",mn(Rs.postMessage)),Ny=typeof queueMicrotask<"u"?queueMicrotask.bind(Rs):typeof process<"u"&&process.nextTick||yg,Uy=t=>t!=null&&mn(t[Tl]),J={isArray:wr,isArrayBuffer:mg,isBuffer:Ro,isFormData:ay,isArrayBufferView:jx,isString:Kx,isNumber:gg,isBoolean:Jx,isObject:Co,isPlainObject:Ta,isEmptyObject:Zx,isReadableStream:cy,isRequest:uy,isResponse:fy,isHeaders:dy,isUndefined:mr,isDate:Qx,isFile:ey,isReactNativeBlob:ty,isReactNative:ny,isBlob:iy,isRegExp:wy,isFunction:mn,isStream:ry,isURLSearchParams:ly,isTypedArray:yy,isFileList:sy,forEach:Po,merge:iu,extend:py,trim:hy,stripBOM:my,inherits:gy,toFlatObject:_y,kindOf:Al,kindOfTest:Xn,endsWith:vy,toArray:xy,forEachEntry:Sy,matchAll:My,isHTMLForm:by,hasOwnProperty:sh,hasOwnProp:sh,reduceDescriptors:xg,freezeMethods:Ty,toObjectSet:Ay,toCamelCase:Ey,noop:Ry,toFiniteNumber:Cy,findKey:_g,global:Rs,isContextDefined:vg,isSpecCompliantForm:Py,toJSONObject:Ly,isAsyncFn:Dy,isThenable:Iy,setImmediate:yg,asap:Ny,isIterable:Uy};let $e=class Sg extends Error{static from(e,n,i,s,r,o){const a=new Sg(e.message,n||e.code,i,s,r);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:J.toJSONObject(this.config),code:this.code,status:this.status}}};$e.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";$e.ERR_BAD_OPTION="ERR_BAD_OPTION";$e.ECONNABORTED="ECONNABORTED";$e.ETIMEDOUT="ETIMEDOUT";$e.ERR_NETWORK="ERR_NETWORK";$e.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";$e.ERR_DEPRECATED="ERR_DEPRECATED";$e.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";$e.ERR_BAD_REQUEST="ERR_BAD_REQUEST";$e.ERR_CANCELED="ERR_CANCELED";$e.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";$e.ERR_INVALID_URL="ERR_INVALID_URL";const Fy=null;function su(t){return J.isPlainObject(t)||J.isArray(t)}function Mg(t){return J.endsWith(t,"[]")?t.slice(0,-2):t}function Ql(t,e,n){return t?t.concat(e).map(function(s,r){return s=Mg(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function Oy(t){return J.isArray(t)&&!t.some(su)}const By=J.toFlatObject(J,{},null,function(e){return/^is[A-Z]/.test(e)});function Cl(t,e,n){if(!J.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=J.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,p){return!J.isUndefined(p[_])});const i=n.metaTokens,s=n.visitor||u,r=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&J.isSpecCompliantForm(e);if(!J.isFunction(s))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(J.isDate(g))return g.toISOString();if(J.isBoolean(g))return g.toString();if(!c&&J.isBlob(g))throw new $e("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(g)||J.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,_,p){let m=g;if(J.isReactNative(e)&&J.isReactNativeBlob(g))return e.append(Ql(p,_,r),l(g)),!1;if(g&&!p&&typeof g=="object"){if(J.endsWith(_,"{}"))_=i?_:_.slice(0,-2),g=JSON.stringify(g);else if(J.isArray(g)&&Oy(g)||(J.isFileList(g)||J.endsWith(_,"[]"))&&(m=J.toArray(g)))return _=Mg(_),m.forEach(function(E,y){!(J.isUndefined(E)||E===null)&&e.append(o===!0?Ql([_],y,r):o===null?_:_+"[]",l(E))}),!1}return su(g)?!0:(e.append(Ql(p,_,r),l(g)),!1)}const d=[],f=Object.assign(By,{defaultVisitor:u,convertValue:l,isVisitable:su});function h(g,_){if(!J.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));d.push(g),J.forEach(g,function(m,v){(!(J.isUndefined(m)||m===null)&&s.call(e,m,J.isString(v)?v.trim():v,_,f))===!0&&h(m,_?_.concat(v):[v])}),d.pop()}}if(!J.isObject(t))throw new TypeError("data must be an object");return h(t),e}function rh(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Pf(t,e){this._pairs=[],t&&Cl(t,this,e)}const bg=Pf.prototype;bg.append=function(e,n){this._pairs.push([e,n])};bg.toString=function(e){const n=e?function(i){return e.call(this,i,rh)}:rh;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function ky(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Eg(t,e,n){if(!e)return t;const i=n&&n.encode||ky,s=J.isFunction(n)?{serialize:n}:n,r=s&&s.serialize;let o;if(r?o=r(e,s):o=J.isURLSearchParams(e)?e.toString():new Pf(e,s).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class oh{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){J.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Lf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},zy=typeof URLSearchParams<"u"?URLSearchParams:Pf,Vy=typeof FormData<"u"?FormData:null,Hy=typeof Blob<"u"?Blob:null,Gy={isBrowser:!0,classes:{URLSearchParams:zy,FormData:Vy,Blob:Hy},protocols:["http","https","file","blob","url","data"]},Df=typeof window<"u"&&typeof document<"u",ru=typeof navigator=="object"&&navigator||void 0,Wy=Df&&(!ru||["ReactNative","NativeScript","NS"].indexOf(ru.product)<0),$y=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Xy=Df&&window.location.href||"http://localhost",qy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Df,hasStandardBrowserEnv:Wy,hasStandardBrowserWebWorkerEnv:$y,navigator:ru,origin:Xy},Symbol.toStringTag,{value:"Module"})),Jt={...qy,...Gy};function Yy(t,e){return Cl(t,new Jt.classes.URLSearchParams,{visitor:function(n,i,s,r){return Jt.isNode&&J.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function jy(t){return J.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Ky(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function wg(t){function e(n,i,s,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=r>=n.length;return o=!o&&J.isArray(s)?s.length:o,c?(J.hasOwnProp(s,o)?s[o]=[s[o],i]:s[o]=i,!a):((!s[o]||!J.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&J.isArray(s[o])&&(s[o]=Ky(s[o])),!a)}if(J.isFormData(t)&&J.isFunction(t.entries)){const n={};return J.forEachEntry(t,(i,s)=>{e(jy(i),s,n,0)}),n}return null}function Jy(t,e,n){if(J.isString(t))try{return(e||JSON.parse)(t),J.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Lo={transitional:Lf,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=J.isObject(e);if(r&&J.isHTMLForm(e)&&(e=new FormData(e)),J.isFormData(e))return s?JSON.stringify(wg(e)):e;if(J.isArrayBuffer(e)||J.isBuffer(e)||J.isStream(e)||J.isFile(e)||J.isBlob(e)||J.isReadableStream(e))return e;if(J.isArrayBufferView(e))return e.buffer;if(J.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Yy(e,this.formSerializer).toString();if((a=J.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Cl(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return r||s?(n.setContentType("application/json",!1),Jy(e)):e}],transformResponse:[function(e){const n=this.transitional||Lo.transitional,i=n&&n.forcedJSONParsing,s=this.responseType==="json";if(J.isResponse(e)||J.isReadableStream(e))return e;if(e&&J.isString(e)&&(i&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?$e.from(a,$e.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jt.classes.FormData,Blob:Jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],t=>{Lo.headers[t]={}});const Zy=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qy=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&Zy[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},ah=Symbol("internals");function Dr(t){return t&&String(t).trim().toLowerCase()}function Aa(t){return t===!1||t==null?t:J.isArray(t)?t.map(Aa):String(t)}function eS(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const tS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ec(t,e,n,i,s){if(J.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!J.isString(e)){if(J.isString(i))return e.indexOf(i)!==-1;if(J.isRegExp(i))return i.test(e)}}function nS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function iS(t,e){const n=J.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let gn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,c,l){const u=Dr(c);if(!u)throw new Error("header name must be a non-empty string");const d=J.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||c]=Aa(a))}const o=(a,c)=>J.forEach(a,(l,u)=>r(l,u,c));if(J.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(J.isString(e)&&(e=e.trim())&&!tS(e))o(Qy(e),n);else if(J.isObject(e)&&J.isIterable(e)){let a={},c,l;for(const u of e){if(!J.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?J.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=Dr(e),e){const i=J.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return eS(s);if(J.isFunction(n))return n.call(this,s,i);if(J.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Dr(e),e){const i=J.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||ec(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=Dr(o),o){const a=J.findKey(i,o);a&&(!n||ec(i,i[a],a,n))&&(delete i[a],s=!0)}}return J.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||ec(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return J.forEach(this,(s,r)=>{const o=J.findKey(i,r);if(o){n[o]=Aa(s),delete n[r];return}const a=e?nS(r):String(r).trim();a!==r&&delete n[r],n[a]=Aa(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return J.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&J.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[ah]=this[ah]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Dr(o);i[a]||(iS(s,o),i[a]=!0)}return J.isArray(e)?e.forEach(r):r(e),this}};gn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);J.reduceDescriptors(gn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});J.freezeMethods(gn);function tc(t,e){const n=this||Lo,i=e||n,s=gn.from(i.headers);let r=i.data;return J.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Tg(t){return!!(t&&t.__CANCEL__)}let Do=class extends $e{constructor(e,n,i){super(e??"canceled",$e.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Ag(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new $e("Request failed with status code "+n.status,[$e.ERR_BAD_REQUEST,$e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function sS(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function rS(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=i[r];o||(o=l),n[s]=c,i[s]=l;let d=r,f=0;for(;d!==s;)f+=n[d++],d=d%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),l-o<e)return;const h=u&&l-u;return h?Math.round(f*1e3/h):void 0}}function oS(t,e){let n=0,i=1e3/e,s,r;const o=(l,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...l)};return[(...l)=>{const u=Date.now(),d=u-n;d>=i?o(l,u):(s=l,r||(r=setTimeout(()=>{r=null,o(s)},i-d)))},()=>s&&o(s)]}const ja=(t,e,n=3)=>{let i=0;const s=rS(50,250);return oS(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,c=o-i,l=s(c),u=o<=a;i=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},lh=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},ch=t=>(...e)=>J.asap(()=>t(...e)),aS=Jt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Jt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Jt.origin),Jt.navigator&&/(msie|trident)/i.test(Jt.navigator.userAgent)):()=>!0,lS=Jt.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];J.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),J.isString(i)&&a.push(`path=${i}`),J.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),J.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function cS(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function uS(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Rg(t,e,n){let i=!cS(e);return t&&(i||n==!1)?uS(t,e):e}const uh=t=>t instanceof gn?{...t}:t;function Os(t,e){e=e||{};const n={};function i(l,u,d,f){return J.isPlainObject(l)&&J.isPlainObject(u)?J.merge.call({caseless:f},l,u):J.isPlainObject(u)?J.merge({},u):J.isArray(u)?u.slice():u}function s(l,u,d,f){if(J.isUndefined(u)){if(!J.isUndefined(l))return i(void 0,l,d,f)}else return i(l,u,d,f)}function r(l,u){if(!J.isUndefined(u))return i(void 0,u)}function o(l,u){if(J.isUndefined(u)){if(!J.isUndefined(l))return i(void 0,l)}else return i(void 0,u)}function a(l,u,d){if(d in e)return i(l,u);if(d in t)return i(void 0,l)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,d)=>s(uh(l),uh(u),d,!0)};return J.forEach(Object.keys({...t,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const d=J.hasOwnProp(c,u)?c[u]:s,f=d(t[u],e[u],u);J.isUndefined(f)&&d!==a||(n[u]=f)}),n}const Cg=t=>{const e=Os({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:r,headers:o,auth:a}=e;if(e.headers=o=gn.from(o),e.url=Eg(Rg(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),J.isFormData(n)){if(Jt.hasStandardBrowserEnv||Jt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(J.isFunction(n.getHeaders)){const c=n.getHeaders(),l=["content-type","content-length"];Object.entries(c).forEach(([u,d])=>{l.includes(u.toLowerCase())&&o.set(u,d)})}}if(Jt.hasStandardBrowserEnv&&(i&&J.isFunction(i)&&(i=i(e)),i||i!==!1&&aS(e.url))){const c=s&&r&&lS.read(r);c&&o.set(s,c)}return e},fS=typeof XMLHttpRequest<"u",dS=fS&&function(t){return new Promise(function(n,i){const s=Cg(t);let r=s.data;const o=gn.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,d,f,h,g;function _(){h&&h(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function m(){if(!p)return;const E=gn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),w={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:E,config:t,request:p};Ag(function(D){n(D),_()},function(D){i(D),_()},w),p=null}"onloadend"in p?p.onloadend=m:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(m)},p.onabort=function(){p&&(i(new $e("Request aborted",$e.ECONNABORTED,t,p)),p=null)},p.onerror=function(y){const w=y&&y.message?y.message:"Network Error",R=new $e(w,$e.ERR_NETWORK,t,p);R.event=y||null,i(R),p=null},p.ontimeout=function(){let y=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const w=s.transitional||Lf;s.timeoutErrorMessage&&(y=s.timeoutErrorMessage),i(new $e(y,w.clarifyTimeoutError?$e.ETIMEDOUT:$e.ECONNABORTED,t,p)),p=null},r===void 0&&o.setContentType(null),"setRequestHeader"in p&&J.forEach(o.toJSON(),function(y,w){p.setRequestHeader(w,y)}),J.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),a&&a!=="json"&&(p.responseType=s.responseType),l&&([f,g]=ja(l,!0),p.addEventListener("progress",f)),c&&p.upload&&([d,h]=ja(c),p.upload.addEventListener("progress",d),p.upload.addEventListener("loadend",h)),(s.cancelToken||s.signal)&&(u=E=>{p&&(i(!E||E.type?new Do(null,t,p):E),p.abort(),p=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const v=sS(s.url);if(v&&Jt.protocols.indexOf(v)===-1){i(new $e("Unsupported protocol "+v+":",$e.ERR_BAD_REQUEST,t));return}p.send(r||null)})},hS=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,s;const r=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;i.abort(u instanceof $e?u:new Do(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,r(new $e(`timeout of ${e}ms exceeded`,$e.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),t=null)};t.forEach(l=>l.addEventListener("abort",r));const{signal:c}=i;return c.unsubscribe=()=>J.asap(a),c}},pS=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},mS=async function*(t,e){for await(const n of gS(t))yield*pS(n,e)},gS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},fh=(t,e,n,i)=>{const s=mS(t,e);let r=0,o,a=c=>{o||(o=!0,i&&i(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let d=u.byteLength;if(n){let f=r+=d;n(f)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},dh=64*1024,{isFunction:Wo}=J,_S=(({Request:t,Response:e})=>({Request:t,Response:e}))(J.global),{ReadableStream:hh,TextEncoder:ph}=J.global,mh=(t,...e)=>{try{return!!t(...e)}catch{return!1}},vS=t=>{t=J.merge.call({skipUndefined:!0},_S,t);const{fetch:e,Request:n,Response:i}=t,s=e?Wo(e):typeof fetch=="function",r=Wo(n),o=Wo(i);if(!s)return!1;const a=s&&Wo(hh),c=s&&(typeof ph=="function"?(g=>_=>g.encode(_))(new ph):async g=>new Uint8Array(await new n(g).arrayBuffer())),l=r&&a&&mh(()=>{let g=!1;const _=new n(Jt.origin,{body:new hh,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!_}),u=o&&a&&mh(()=>J.isReadableStream(new i("").body)),d={stream:u&&(g=>g.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!d[g]&&(d[g]=(_,p)=>{let m=_&&_[g];if(m)return m.call(_);throw new $e(`Response type '${g}' is not supported`,$e.ERR_NOT_SUPPORT,p)})});const f=async g=>{if(g==null)return 0;if(J.isBlob(g))return g.size;if(J.isSpecCompliantForm(g))return(await new n(Jt.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(J.isArrayBufferView(g)||J.isArrayBuffer(g))return g.byteLength;if(J.isURLSearchParams(g)&&(g=g+""),J.isString(g))return(await c(g)).byteLength},h=async(g,_)=>{const p=J.toFiniteNumber(g.getContentLength());return p??f(_)};return async g=>{let{url:_,method:p,data:m,signal:v,cancelToken:E,timeout:y,onDownloadProgress:w,onUploadProgress:R,responseType:D,headers:S,withCredentials:M="same-origin",fetchOptions:N}=Cg(g),P=e||fetch;D=D?(D+"").toLowerCase():"text";let F=hS([v,E&&E.toAbortSignal()],y),k=null;const V=F&&F.unsubscribe&&(()=>{F.unsubscribe()});let U;try{if(R&&l&&p!=="get"&&p!=="head"&&(U=await h(S,m))!==0){let he=new n(_,{method:"POST",body:m,duplex:"half"}),ve;if(J.isFormData(m)&&(ve=he.headers.get("content-type"))&&S.setContentType(ve),he.body){const[We,dt]=lh(U,ja(ch(R)));m=fh(he.body,dh,We,dt)}}J.isString(M)||(M=M?"include":"omit");const C=r&&"credentials"in n.prototype,L={...N,signal:F,method:p.toUpperCase(),headers:S.normalize().toJSON(),body:m,duplex:"half",credentials:C?M:void 0};k=r&&new n(_,L);let G=await(r?P(k,N):P(_,L));const ae=u&&(D==="stream"||D==="response");if(u&&(w||ae&&V)){const he={};["status","statusText","headers"].forEach(pt=>{he[pt]=G[pt]});const ve=J.toFiniteNumber(G.headers.get("content-length")),[We,dt]=w&&lh(ve,ja(ch(w),!0))||[];G=new i(fh(G.body,dh,We,()=>{dt&&dt(),V&&V()}),he)}D=D||"text";let fe=await d[J.findKey(d,D)||"text"](G,g);return!ae&&V&&V(),await new Promise((he,ve)=>{Ag(he,ve,{data:fe,headers:gn.from(G.headers),status:G.status,statusText:G.statusText,config:g,request:k})})}catch(C){throw V&&V(),C&&C.name==="TypeError"&&/Load failed|fetch/i.test(C.message)?Object.assign(new $e("Network Error",$e.ERR_NETWORK,g,k,C&&C.response),{cause:C.cause||C}):$e.from(C,C&&C.code,g,k,C&&C.response)}}},xS=new Map,Pg=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,c,l,u=xS;for(;a--;)c=r[a],l=u.get(c),l===void 0&&u.set(c,l=a?new Map:vS(e)),u=l;return l};Pg();const If={http:Fy,xhr:dS,fetch:{get:Pg}};J.forEach(If,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const gh=t=>`- ${t}`,yS=t=>J.isFunction(t)||t===null||t===!1;function SS(t,e){t=J.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!yS(i)&&(s=If[(a=String(i)).toLowerCase()],s===void 0))throw new $e(`Unknown adapter '${a}'`);if(s&&(J.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(gh).join(`
`):" "+gh(o[0]):"as no adapter specified";throw new $e("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s}const Lg={getAdapter:SS,adapters:If};function nc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Do(null,t)}function _h(t){return nc(t),t.headers=gn.from(t.headers),t.data=tc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Lg.getAdapter(t.adapter||Lo.adapter,t)(t).then(function(i){return nc(t),i.data=tc.call(t,t.transformResponse,i),i.headers=gn.from(i.headers),i},function(i){return Tg(i)||(nc(t),i&&i.response&&(i.response.data=tc.call(t,t.transformResponse,i.response),i.response.headers=gn.from(i.response.headers))),Promise.reject(i)})}const Dg="1.13.6",Pl={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Pl[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const vh={};Pl.transitional=function(e,n,i){function s(r,o){return"[Axios v"+Dg+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new $e(s(o," has been removed"+(n?" in "+n:"")),$e.ERR_DEPRECATED);return n&&!vh[o]&&(vh[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};Pl.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function MS(t,e,n){if(typeof t!="object")throw new $e("options must be an object",$e.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=e[r];if(o){const a=t[r],c=a===void 0||o(a,r,t);if(c!==!0)throw new $e("option "+r+" must be "+c,$e.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new $e("Unknown option "+r,$e.ERR_BAD_OPTION)}}const Ra={assertOptions:MS,validators:Pl},Ln=Ra.validators;let Ns=class{constructor(e){this.defaults=e||{},this.interceptors={request:new oh,response:new oh}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?r&&!String(i.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+r):i.stack=r}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Os(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Ra.assertOptions(i,{silentJSONParsing:Ln.transitional(Ln.boolean),forcedJSONParsing:Ln.transitional(Ln.boolean),clarifyTimeoutError:Ln.transitional(Ln.boolean),legacyInterceptorReqResOrdering:Ln.transitional(Ln.boolean)},!1),s!=null&&(J.isFunction(s)?n.paramsSerializer={serialize:s}:Ra.assertOptions(s,{encode:Ln.function,serialize:Ln.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ra.assertOptions(n,{baseUrl:Ln.spelling("baseURL"),withXsrfToken:Ln.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&J.merge(r.common,r[n.method]);r&&J.forEach(["delete","get","head","post","put","patch","common"],g=>{delete r[g]}),n.headers=gn.concat(o,r);const a=[];let c=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(n)===!1)return;c=c&&_.synchronous;const p=n.transitional||Lf;p&&p.legacyInterceptorReqResOrdering?a.unshift(_.fulfilled,_.rejected):a.push(_.fulfilled,_.rejected)});const l=[];this.interceptors.response.forEach(function(_){l.push(_.fulfilled,_.rejected)});let u,d=0,f;if(!c){const g=[_h.bind(this),void 0];for(g.unshift(...a),g.push(...l),f=g.length,u=Promise.resolve(n);d<f;)u=u.then(g[d++],g[d++]);return u}f=a.length;let h=n;for(;d<f;){const g=a[d++],_=a[d++];try{h=g(h)}catch(p){_.call(this,p);break}}try{u=_h.call(this,h)}catch(g){return Promise.reject(g)}for(d=0,f=l.length;d<f;)u=u.then(l[d++],l[d++]);return u}getUri(e){e=Os(this.defaults,e);const n=Rg(e.baseURL,e.url,e.allowAbsoluteUrls);return Eg(n,e.params,e.paramsSerializer)}};J.forEach(["delete","get","head","options"],function(e){Ns.prototype[e]=function(n,i){return this.request(Os(i||{},{method:e,url:n,data:(i||{}).data}))}});J.forEach(["post","put","patch"],function(e){function n(i){return function(r,o,a){return this.request(Os(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Ns.prototype[e]=n(),Ns.prototype[e+"Form"]=n(!0)});let bS=class Ig{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Do(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Ig(function(s){e=s}),cancel:e}}};function ES(t){return function(n){return t.apply(null,n)}}function wS(t){return J.isObject(t)&&t.isAxiosError===!0}const ou={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ou).forEach(([t,e])=>{ou[e]=t});function Ng(t){const e=new Ns(t),n=hg(Ns.prototype.request,e);return J.extend(n,Ns.prototype,e,{allOwnKeys:!0}),J.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Ng(Os(t,s))},n}const Nt=Ng(Lo);Nt.Axios=Ns;Nt.CanceledError=Do;Nt.CancelToken=bS;Nt.isCancel=Tg;Nt.VERSION=Dg;Nt.toFormData=Cl;Nt.AxiosError=$e;Nt.Cancel=Nt.CanceledError;Nt.all=function(e){return Promise.all(e)};Nt.spread=ES;Nt.isAxiosError=wS;Nt.mergeConfig=Os;Nt.AxiosHeaders=gn;Nt.formToJSON=t=>wg(J.isHTMLForm(t)?new FormData(t):t);Nt.getAdapter=Lg.getAdapter;Nt.HttpStatusCode=ou;Nt.default=Nt;const{Axios:aF,AxiosError:lF,CanceledError:cF,isCancel:uF,CancelToken:fF,VERSION:dF,all:hF,Cancel:pF,isAxiosError:mF,spread:gF,toFormData:_F,AxiosHeaders:vF,HttpStatusCode:xF,formToJSON:yF,getAdapter:SF,mergeConfig:MF}=Nt,Et=Nt.create({baseURL:"http://localhost:22888",timeout:3e4}),Qn={async getStats(){return(await Et.get("/dashboard/stats")).data},async getGraph(t=7,e=1e3,n=!1){return(await Et.get("/dashboard/graph",{params:{days:t,max_nodes:e,memory_only:n}})).data},async searchMemories(t,e=20){return(await Et.get("/dashboard/memory/search",{params:{query:t,limit:e}})).data},async getMemoryDetail(t){return(await Et.get(`/dashboard/memory/${t}`)).data},async updateMemory(t,e,n){return(await Et.post("/dashboard/memory/update",{memory_id:t,content:e,user_id:n})).data},async writeMemory(t){return(await Et.post("/memory/write",t)).data},async readMemory(t){return(await Et.post("/memory/read",t)).data},async deleteMemory(t,e){return(await Et.post("/memory/delete",{memory_id:t,user_id:e})).data},async reflectMemory(t){return(await Et.post("/memory/reflect",null,{params:{user_id:t}})).data},async rebuildGraph(){return(await Et.post("/dashboard/rebuild_graph")).data}},Vn={async getStats(){return(await Et.get("/tiered/stats")).data},async getMergedMemories(){return(await Et.get("/tiered/merged")).data},async getMergeChain(t){return(await Et.get(`/tiered/memory/${t}/merge-chain`)).data},async triggerDailyReflection(){return(await Et.post("/tiered/daily-reflection/trigger")).data},async writeStorage(t){return(await Et.post("/tiered/storage/write",t)).data},async writeThinking(t){return(await Et.post("/tiered/thinking/write",t)).data},async writeSkill(t){return(await Et.post("/tiered/skill/write",t)).data},async queryMemories(t){return(await Et.get("/tiered/query",{params:t})).data},async getMemory(t){return(await Et.get(`/tiered/memory/${t}`)).data},async getMemoryTrace(t){return(await Et.get(`/tiered/memory/${t}/trace`)).data},async submitFeedback(t,e){return(await Et.post(`/tiered/memory/${t}/feedback`,e)).data},async summarizeMemories(t){return(await Et.post("/tiered/summarize",{memory_ids:t})).data}},xh={async getStatus(){return(await Et.get("/dashboard/evolution/status")).data},async setProfile(t){return(await Et.post("/dashboard/evolution/profile",null,{params:{profile:t}})).data}},TS={async getStatus(){return(await Et.get("/dashboard/llm/status")).data},async getInteractions(t=50){return(await Et.get("/dashboard/llm/interactions",{params:{limit:t}})).data}},_i=Rf("memory",()=>{const t=we([]),e=we(null),n=we({nodes:[],links:[]}),i=we(null),s=we(null),r=we([]),o=we("all"),a=we("neural"),c=we("standard"),l=we(""),u=we([]),d=we(!1),f=we(null),h=wt(()=>o.value==="all"?t.value:t.value.filter(U=>U.memory_type===o.value)),g=wt(()=>({storage:t.value.filter(U=>U.memory_type==="storage").length,thinking:t.value.filter(U=>U.memory_type==="thinking").length,skill:t.value.filter(U=>U.memory_type==="skill").length,total:t.value.length}));async function _(){try{i.value=await Qn.getStats()}catch(U){f.value="Failed to fetch stats",console.error(U)}}async function p(U=7,C=1e3){try{d.value=!0,n.value=await Qn.getGraph(U,C)}catch(L){f.value="Failed to fetch graph",console.error(L)}finally{d.value=!1}}async function m(){try{s.value=await xh.getStatus()}catch(U){f.value="Failed to fetch evolution status",console.error(U)}}async function v(U){try{d.value=!0,l.value=U;const C=await Qn.searchMemories(U);u.value=C.items.map(L=>{var G;return{...L,content_type:"note",keywords:[],tags:[],char_count:((G=L.content)==null?void 0:G.length)||0,importance:.5}})}catch(C){f.value="Failed to search memories",console.error(C)}finally{d.value=!1}}async function E(U){try{await xh.setProfile(U),c.value=U,await m()}catch(C){f.value="Failed to set evolution profile",console.error(C)}}function y(U){o.value=U}function w(U){a.value=U}function R(U,C="info"){const L={time:new Date().toLocaleTimeString(),message:U,type:C};r.value.push(L),r.value.length>50&&r.value.shift()}function D(){r.value=[]}async function S(U,C,L="default"){try{d.value=!0;const G=await Qn.updateMemory(U,C,L);return R(`Memory updated: ${U}`,"success"),G}catch(G){throw f.value="Failed to update memory",R(`Failed to update memory: ${U}`,"error"),console.error(G),G}finally{d.value=!1}}async function M(U,C="default"){try{d.value=!0;const L=await Qn.deleteMemory(U,C);return R(`Memory deleted: ${U}`,"success"),L}catch(L){throw f.value="Failed to delete memory",R(`Failed to delete memory: ${U}`,"error"),console.error(L),L}finally{d.value=!1}}async function N(U){try{d.value=!0;const C=await Qn.writeMemory(U);return R(`Memory written: ${C.id}`,"success"),C}catch(C){throw f.value="Failed to write memory",R("Failed to write memory","error"),console.error(C),C}finally{d.value=!1}}async function P(U="default"){try{d.value=!0;const C=await Qn.reflectMemory(U);return R("Memory reflection completed","success"),C}catch(C){throw f.value="Failed to reflect memory",R("Failed to reflect memory","error"),console.error(C),C}finally{d.value=!1}}async function F(){try{d.value=!0;const U=await Qn.rebuildGraph();return R("Graph rebuilt successfully","success"),U}catch(U){throw f.value="Failed to rebuild graph",R("Failed to rebuild graph","error"),console.error(U),U}finally{d.value=!1}}async function k(U,C){try{d.value=!0;const L=await Vn.submitFeedback(U,C);return R(`Feedback submitted for: ${U}`,"success"),L}catch(L){throw f.value="Failed to submit feedback",R(`Failed to submit feedback for: ${U}`,"error"),console.error(L),L}finally{d.value=!1}}async function V(U){try{d.value=!0;const C=await Vn.summarizeMemories(U);return R(`Summarized ${U.length} memories`,"success"),C}catch(C){throw f.value="Failed to summarize memories",R("Failed to summarize memories","error"),console.error(C),C}finally{d.value=!1}}return{memories:t,currentMemory:e,graphData:n,stats:i,evolutionStatus:s,logs:r,currentMemoryType:o,currentViewMode:a,currentProfile:c,searchQuery:l,searchResults:u,isLoading:d,error:f,filteredMemories:h,memoryCountByType:g,fetchStats:_,fetchGraph:p,fetchEvolutionStatus:m,searchMemories:v,setEvolutionProfile:E,setMemoryType:y,setViewMode:w,addLog:R,clearLogs:D,updateMemory:S,deleteMemory:M,writeMemory:N,reflectMemory:P,rebuildGraph:F,submitFeedback:k,summarizeMemories:V}});class yh extends Map{constructor(e,n=CS){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const[i,s]of e)this.set(i,s)}get(e){return super.get(Sh(this,e))}has(e){return super.has(Sh(this,e))}set(e,n){return super.set(AS(this,e),n)}delete(e){return super.delete(RS(this,e))}}function Sh({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):n}function AS({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):(t.set(i,n),n)}function RS({_intern:t,_key:e},n){const i=e(n);return t.has(i)&&(n=t.get(i),t.delete(i)),n}function CS(t){return t!==null&&typeof t=="object"?t.valueOf():t}var PS={value:()=>{}};function Ll(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Ca(n)}function Ca(t){this._=t}function LS(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",s=n.indexOf(".");if(s>=0&&(i=n.slice(s+1),n=n.slice(0,s)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Ca.prototype=Ll.prototype={constructor:Ca,on:function(t,e){var n=this._,i=LS(t+"",n),s,r=-1,o=i.length;if(arguments.length<2){for(;++r<o;)if((s=(t=i[r]).type)&&(s=DS(n[s],t.name)))return s;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++r<o;)if(s=(t=i[r]).type)n[s]=Mh(n[s],t.name,e);else if(e==null)for(s in n)n[s]=Mh(n[s],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Ca(t)},call:function(t,e){if((s=arguments.length-2)>0)for(var n=new Array(s),i=0,s,r;i<s;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],i=0,s=r.length;i<s;++i)r[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],s=0,r=i.length;s<r;++s)i[s].value.apply(e,n)}};function DS(t,e){for(var n=0,i=t.length,s;n<i;++n)if((s=t[n]).name===e)return s.value}function Mh(t,e,n){for(var i=0,s=t.length;i<s;++i)if(t[i].name===e){t[i]=PS,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var au="http://www.w3.org/1999/xhtml";const bh={svg:"http://www.w3.org/2000/svg",xhtml:au,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Dl(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),bh.hasOwnProperty(e)?{space:bh[e],local:t}:t}function IS(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===au&&e.documentElement.namespaceURI===au?e.createElement(t):e.createElementNS(n,t)}}function NS(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Ug(t){var e=Dl(t);return(e.local?NS:IS)(e)}function US(){}function Nf(t){return t==null?US:function(){return this.querySelector(t)}}function FS(t){typeof t!="function"&&(t=Nf(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=new Array(o),c,l,u=0;u<o;++u)(c=r[u])&&(l=t.call(c,c.__data__,u,r))&&("__data__"in c&&(l.__data__=c.__data__),a[u]=l);return new Cn(i,this._parents)}function OS(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function BS(){return[]}function Fg(t){return t==null?BS:function(){return this.querySelectorAll(t)}}function kS(t){return function(){return OS(t.apply(this,arguments))}}function zS(t){typeof t=="function"?t=kS(t):t=Fg(t);for(var e=this._groups,n=e.length,i=[],s=[],r=0;r<n;++r)for(var o=e[r],a=o.length,c,l=0;l<a;++l)(c=o[l])&&(i.push(t.call(c,c.__data__,l,o)),s.push(c));return new Cn(i,s)}function Og(t){return function(){return this.matches(t)}}function Bg(t){return function(e){return e.matches(t)}}var VS=Array.prototype.find;function HS(t){return function(){return VS.call(this.children,t)}}function GS(){return this.firstElementChild}function WS(t){return this.select(t==null?GS:HS(typeof t=="function"?t:Bg(t)))}var $S=Array.prototype.filter;function XS(){return Array.from(this.children)}function qS(t){return function(){return $S.call(this.children,t)}}function YS(t){return this.selectAll(t==null?XS:qS(typeof t=="function"?t:Bg(t)))}function jS(t){typeof t!="function"&&(t=Og(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=[],c,l=0;l<o;++l)(c=r[l])&&t.call(c,c.__data__,l,r)&&a.push(c);return new Cn(i,this._parents)}function kg(t){return new Array(t.length)}function KS(){return new Cn(this._enter||this._groups.map(kg),this._parents)}function Ka(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Ka.prototype={constructor:Ka,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function JS(t){return function(){return t}}function ZS(t,e,n,i,s,r){for(var o=0,a,c=e.length,l=r.length;o<l;++o)(a=e[o])?(a.__data__=r[o],i[o]=a):n[o]=new Ka(t,r[o]);for(;o<c;++o)(a=e[o])&&(s[o]=a)}function QS(t,e,n,i,s,r,o){var a,c,l=new Map,u=e.length,d=r.length,f=new Array(u),h;for(a=0;a<u;++a)(c=e[a])&&(f[a]=h=o.call(c,c.__data__,a,e)+"",l.has(h)?s[a]=c:l.set(h,c));for(a=0;a<d;++a)h=o.call(t,r[a],a,r)+"",(c=l.get(h))?(i[a]=c,c.__data__=r[a],l.delete(h)):n[a]=new Ka(t,r[a]);for(a=0;a<u;++a)(c=e[a])&&l.get(f[a])===c&&(s[a]=c)}function eM(t){return t.__data__}function tM(t,e){if(!arguments.length)return Array.from(this,eM);var n=e?QS:ZS,i=this._parents,s=this._groups;typeof t!="function"&&(t=JS(t));for(var r=s.length,o=new Array(r),a=new Array(r),c=new Array(r),l=0;l<r;++l){var u=i[l],d=s[l],f=d.length,h=nM(t.call(u,u&&u.__data__,l,i)),g=h.length,_=a[l]=new Array(g),p=o[l]=new Array(g),m=c[l]=new Array(f);n(u,d,_,p,m,h,e);for(var v=0,E=0,y,w;v<g;++v)if(y=_[v]){for(v>=E&&(E=v+1);!(w=p[E])&&++E<g;);y._next=w||null}}return o=new Cn(o,i),o._enter=a,o._exit=c,o}function nM(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function iM(){return new Cn(this._exit||this._groups.map(kg),this._parents)}function sM(t,e,n){var i=this.enter(),s=this,r=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(s=e(s),s&&(s=s.selection())),n==null?r.remove():n(r),i&&s?i.merge(s).order():s}function rM(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,s=n.length,r=i.length,o=Math.min(s,r),a=new Array(s),c=0;c<o;++c)for(var l=n[c],u=i[c],d=l.length,f=a[c]=new Array(d),h,g=0;g<d;++g)(h=l[g]||u[g])&&(f[g]=h);for(;c<s;++c)a[c]=n[c];return new Cn(a,this._parents)}function oM(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],s=i.length-1,r=i[s],o;--s>=0;)(o=i[s])&&(r&&o.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(o,r),r=o);return this}function aM(t){t||(t=lM);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,s=new Array(i),r=0;r<i;++r){for(var o=n[r],a=o.length,c=s[r]=new Array(a),l,u=0;u<a;++u)(l=o[u])&&(c[u]=l);c.sort(e)}return new Cn(s,this._parents).order()}function lM(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function cM(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function uM(){return Array.from(this)}function fM(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],s=0,r=i.length;s<r;++s){var o=i[s];if(o)return o}return null}function dM(){let t=0;for(const e of this)++t;return t}function hM(){return!this.node()}function pM(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var s=e[n],r=0,o=s.length,a;r<o;++r)(a=s[r])&&t.call(a,a.__data__,r,s);return this}function mM(t){return function(){this.removeAttribute(t)}}function gM(t){return function(){this.removeAttributeNS(t.space,t.local)}}function _M(t,e){return function(){this.setAttribute(t,e)}}function vM(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function xM(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function yM(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function SM(t,e){var n=Dl(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?gM:mM:typeof e=="function"?n.local?yM:xM:n.local?vM:_M)(n,e))}function zg(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function MM(t){return function(){this.style.removeProperty(t)}}function bM(t,e,n){return function(){this.style.setProperty(t,e,n)}}function EM(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function wM(t,e,n){return arguments.length>1?this.each((e==null?MM:typeof e=="function"?EM:bM)(t,e,n??"")):gr(this.node(),t)}function gr(t,e){return t.style.getPropertyValue(e)||zg(t).getComputedStyle(t,null).getPropertyValue(e)}function TM(t){return function(){delete this[t]}}function AM(t,e){return function(){this[t]=e}}function RM(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function CM(t,e){return arguments.length>1?this.each((e==null?TM:typeof e=="function"?RM:AM)(t,e)):this.node()[t]}function Vg(t){return t.trim().split(/^|\s+/)}function Uf(t){return t.classList||new Hg(t)}function Hg(t){this._node=t,this._names=Vg(t.getAttribute("class")||"")}Hg.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Gg(t,e){for(var n=Uf(t),i=-1,s=e.length;++i<s;)n.add(e[i])}function Wg(t,e){for(var n=Uf(t),i=-1,s=e.length;++i<s;)n.remove(e[i])}function PM(t){return function(){Gg(this,t)}}function LM(t){return function(){Wg(this,t)}}function DM(t,e){return function(){(e.apply(this,arguments)?Gg:Wg)(this,t)}}function IM(t,e){var n=Vg(t+"");if(arguments.length<2){for(var i=Uf(this.node()),s=-1,r=n.length;++s<r;)if(!i.contains(n[s]))return!1;return!0}return this.each((typeof e=="function"?DM:e?PM:LM)(n,e))}function NM(){this.textContent=""}function UM(t){return function(){this.textContent=t}}function FM(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function OM(t){return arguments.length?this.each(t==null?NM:(typeof t=="function"?FM:UM)(t)):this.node().textContent}function BM(){this.innerHTML=""}function kM(t){return function(){this.innerHTML=t}}function zM(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function VM(t){return arguments.length?this.each(t==null?BM:(typeof t=="function"?zM:kM)(t)):this.node().innerHTML}function HM(){this.nextSibling&&this.parentNode.appendChild(this)}function GM(){return this.each(HM)}function WM(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function $M(){return this.each(WM)}function XM(t){var e=typeof t=="function"?t:Ug(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function qM(){return null}function YM(t,e){var n=typeof t=="function"?t:Ug(t),i=e==null?qM:typeof e=="function"?e:Nf(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function jM(){var t=this.parentNode;t&&t.removeChild(this)}function KM(){return this.each(jM)}function JM(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function ZM(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function QM(t){return this.select(t?ZM:JM)}function eb(t){return arguments.length?this.property("__data__",t):this.node().__data__}function tb(t){return function(e){t.call(this,e,this.__data__)}}function nb(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function ib(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,s=e.length,r;n<s;++n)r=e[n],(!t.type||r.type===t.type)&&r.name===t.name?this.removeEventListener(r.type,r.listener,r.options):e[++i]=r;++i?e.length=i:delete this.__on}}}function sb(t,e,n){return function(){var i=this.__on,s,r=tb(e);if(i){for(var o=0,a=i.length;o<a;++o)if((s=i[o]).type===t.type&&s.name===t.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=r,s.options=n),s.value=e;return}}this.addEventListener(t.type,r,n),s={type:t.type,name:t.name,value:e,listener:r,options:n},i?i.push(s):this.__on=[s]}}function rb(t,e,n){var i=nb(t+""),s,r=i.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,l=a.length,u;c<l;++c)for(s=0,u=a[c];s<r;++s)if((o=i[s]).type===u.type&&o.name===u.name)return u.value}return}for(a=e?sb:ib,s=0;s<r;++s)this.each(a(i[s],e,n));return this}function $g(t,e,n){var i=zg(t),s=i.CustomEvent;typeof s=="function"?s=new s(e,n):(s=i.document.createEvent("Event"),n?(s.initEvent(e,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(e,!1,!1)),t.dispatchEvent(s)}function ob(t,e){return function(){return $g(this,t,e)}}function ab(t,e){return function(){return $g(this,t,e.apply(this,arguments))}}function lb(t,e){return this.each((typeof e=="function"?ab:ob)(t,e))}function*cb(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],s=0,r=i.length,o;s<r;++s)(o=i[s])&&(yield o)}var Xg=[null];function Cn(t,e){this._groups=t,this._parents=e}function Io(){return new Cn([[document.documentElement]],Xg)}function ub(){return this}Cn.prototype=Io.prototype={constructor:Cn,select:FS,selectAll:zS,selectChild:WS,selectChildren:YS,filter:jS,data:tM,enter:KS,exit:iM,join:sM,merge:rM,selection:ub,order:oM,sort:aM,call:cM,nodes:uM,node:fM,size:dM,empty:hM,each:pM,attr:SM,style:wM,property:CM,classed:IM,text:OM,html:VM,raise:GM,lower:$M,append:XM,insert:YM,remove:KM,clone:QM,datum:eb,on:rb,dispatch:lb,[Symbol.iterator]:cb};function _r(t){return typeof t=="string"?new Cn([[document.querySelector(t)]],[document.documentElement]):new Cn([[t]],Xg)}function fb(t){let e;for(;e=t.sourceEvent;)t=e;return t}function Eh(t,e){if(t=fb(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var s=e.getBoundingClientRect();return[t.clientX-s.left-e.clientLeft,t.clientY-s.top-e.clientTop]}}return[t.pageX,t.pageY]}const db={passive:!1},ho={capture:!0,passive:!1};function ic(t){t.stopImmediatePropagation()}function ur(t){t.preventDefault(),t.stopImmediatePropagation()}function hb(t){var e=t.document.documentElement,n=_r(t).on("dragstart.drag",ur,ho);"onselectstart"in e?n.on("selectstart.drag",ur,ho):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function pb(t,e){var n=t.document.documentElement,i=_r(t).on("dragstart.drag",null);e&&(i.on("click.drag",ur,ho),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const $o=t=>()=>t;function lu(t,{sourceEvent:e,subject:n,target:i,identifier:s,active:r,x:o,y:a,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:s,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}lu.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function mb(t){return!t.ctrlKey&&!t.button}function gb(){return this.parentNode}function _b(t,e){return e??{x:t.x,y:t.y}}function vb(){return navigator.maxTouchPoints||"ontouchstart"in this}function qg(){var t=mb,e=gb,n=_b,i=vb,s={},r=Ll("start","drag","end"),o=0,a,c,l,u,d=0;function f(y){y.on("mousedown.drag",h).filter(i).on("touchstart.drag",p).on("touchmove.drag",m,db).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(y,w){if(!(u||!t.call(this,y,w))){var R=E(this,e.call(this,y,w),y,w,"mouse");R&&(_r(y.view).on("mousemove.drag",g,ho).on("mouseup.drag",_,ho),hb(y.view),ic(y),l=!1,a=y.clientX,c=y.clientY,R("start",y))}}function g(y){if(ur(y),!l){var w=y.clientX-a,R=y.clientY-c;l=w*w+R*R>d}s.mouse("drag",y)}function _(y){_r(y.view).on("mousemove.drag mouseup.drag",null),pb(y.view,l),ur(y),s.mouse("end",y)}function p(y,w){if(t.call(this,y,w)){var R=y.changedTouches,D=e.call(this,y,w),S=R.length,M,N;for(M=0;M<S;++M)(N=E(this,D,y,w,R[M].identifier,R[M]))&&(ic(y),N("start",y,R[M]))}}function m(y){var w=y.changedTouches,R=w.length,D,S;for(D=0;D<R;++D)(S=s[w[D].identifier])&&(ur(y),S("drag",y,w[D]))}function v(y){var w=y.changedTouches,R=w.length,D,S;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),D=0;D<R;++D)(S=s[w[D].identifier])&&(ic(y),S("end",y,w[D]))}function E(y,w,R,D,S,M){var N=r.copy(),P=Eh(M||R,w),F,k,V;if((V=n.call(y,new lu("beforestart",{sourceEvent:R,target:f,identifier:S,active:o,x:P[0],y:P[1],dx:0,dy:0,dispatch:N}),D))!=null)return F=V.x-P[0]||0,k=V.y-P[1]||0,function U(C,L,G){var ae=P,fe;switch(C){case"start":s[S]=U,fe=o++;break;case"end":delete s[S],--o;case"drag":P=Eh(G||L,w),fe=o;break}N.call(C,y,new lu(C,{sourceEvent:L,subject:V,target:f,identifier:S,active:fe,x:P[0]+F,y:P[1]+k,dx:P[0]-ae[0],dy:P[1]-ae[1],dispatch:N}),D)}}return f.filter=function(y){return arguments.length?(t=typeof y=="function"?y:$o(!!y),f):t},f.container=function(y){return arguments.length?(e=typeof y=="function"?y:$o(y),f):e},f.subject=function(y){return arguments.length?(n=typeof y=="function"?y:$o(y),f):n},f.touchable=function(y){return arguments.length?(i=typeof y=="function"?y:$o(!!y),f):i},f.on=function(){var y=r.on.apply(r,arguments);return y===r?f:y},f.clickDistance=function(y){return arguments.length?(d=(y=+y)*y,f):Math.sqrt(d)},f}function Ff(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Yg(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function No(){}var po=.7,Ja=1/po,fr="\\s*([+-]?\\d+)\\s*",mo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",ci="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",xb=/^#([0-9a-f]{3,8})$/,yb=new RegExp(`^rgb\\(${fr},${fr},${fr}\\)$`),Sb=new RegExp(`^rgb\\(${ci},${ci},${ci}\\)$`),Mb=new RegExp(`^rgba\\(${fr},${fr},${fr},${mo}\\)$`),bb=new RegExp(`^rgba\\(${ci},${ci},${ci},${mo}\\)$`),Eb=new RegExp(`^hsl\\(${mo},${ci},${ci}\\)$`),wb=new RegExp(`^hsla\\(${mo},${ci},${ci},${mo}\\)$`),wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ff(No,go,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Th,formatHex:Th,formatHex8:Tb,formatHsl:Ab,formatRgb:Ah,toString:Ah});function Th(){return this.rgb().formatHex()}function Tb(){return this.rgb().formatHex8()}function Ab(){return jg(this).formatHsl()}function Ah(){return this.rgb().formatRgb()}function go(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=xb.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?Rh(e):n===3?new pn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Xo(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Xo(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=yb.exec(t))?new pn(e[1],e[2],e[3],1):(e=Sb.exec(t))?new pn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=Mb.exec(t))?Xo(e[1],e[2],e[3],e[4]):(e=bb.exec(t))?Xo(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Eb.exec(t))?Lh(e[1],e[2]/100,e[3]/100,1):(e=wb.exec(t))?Lh(e[1],e[2]/100,e[3]/100,e[4]):wh.hasOwnProperty(t)?Rh(wh[t]):t==="transparent"?new pn(NaN,NaN,NaN,0):null}function Rh(t){return new pn(t>>16&255,t>>8&255,t&255,1)}function Xo(t,e,n,i){return i<=0&&(t=e=n=NaN),new pn(t,e,n,i)}function Rb(t){return t instanceof No||(t=go(t)),t?(t=t.rgb(),new pn(t.r,t.g,t.b,t.opacity)):new pn}function cu(t,e,n,i){return arguments.length===1?Rb(t):new pn(t,e,n,i??1)}function pn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}Ff(pn,cu,Yg(No,{brighter(t){return t=t==null?Ja:Math.pow(Ja,t),new pn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?po:Math.pow(po,t),new pn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new pn(Us(this.r),Us(this.g),Us(this.b),Za(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ch,formatHex:Ch,formatHex8:Cb,formatRgb:Ph,toString:Ph}));function Ch(){return`#${Cs(this.r)}${Cs(this.g)}${Cs(this.b)}`}function Cb(){return`#${Cs(this.r)}${Cs(this.g)}${Cs(this.b)}${Cs((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ph(){const t=Za(this.opacity);return`${t===1?"rgb(":"rgba("}${Us(this.r)}, ${Us(this.g)}, ${Us(this.b)}${t===1?")":`, ${t})`}`}function Za(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Us(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Cs(t){return t=Us(t),(t<16?"0":"")+t.toString(16)}function Lh(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new kn(t,e,n,i)}function jg(t){if(t instanceof kn)return new kn(t.h,t.s,t.l,t.opacity);if(t instanceof No||(t=go(t)),!t)return new kn;if(t instanceof kn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,s=Math.min(e,n,i),r=Math.max(e,n,i),o=NaN,a=r-s,c=(r+s)/2;return a?(e===r?o=(n-i)/a+(n<i)*6:n===r?o=(i-e)/a+2:o=(e-n)/a+4,a/=c<.5?r+s:2-r-s,o*=60):a=c>0&&c<1?0:o,new kn(o,a,c,t.opacity)}function Pb(t,e,n,i){return arguments.length===1?jg(t):new kn(t,e,n,i??1)}function kn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}Ff(kn,Pb,Yg(No,{brighter(t){return t=t==null?Ja:Math.pow(Ja,t),new kn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?po:Math.pow(po,t),new kn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,s=2*n-i;return new pn(sc(t>=240?t-240:t+120,s,i),sc(t,s,i),sc(t<120?t+240:t-120,s,i),this.opacity)},clamp(){return new kn(Dh(this.h),qo(this.s),qo(this.l),Za(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Za(this.opacity);return`${t===1?"hsl(":"hsla("}${Dh(this.h)}, ${qo(this.s)*100}%, ${qo(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Dh(t){return t=(t||0)%360,t<0?t+360:t}function qo(t){return Math.max(0,Math.min(1,t||0))}function sc(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const Kg=t=>()=>t;function Lb(t,e){return function(n){return t+n*e}}function Db(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function Ib(t){return(t=+t)==1?Jg:function(e,n){return n-e?Db(e,n,t):Kg(isNaN(e)?n:e)}}function Jg(t,e){var n=e-t;return n?Lb(t,n):Kg(isNaN(t)?e:t)}const Ih=function t(e){var n=Ib(e);function i(s,r){var o=n((s=cu(s)).r,(r=cu(r)).r),a=n(s.g,r.g),c=n(s.b,r.b),l=Jg(s.opacity,r.opacity);return function(u){return s.r=o(u),s.g=a(u),s.b=c(u),s.opacity=l(u),s+""}}return i.gamma=t,i}(1);function is(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var uu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,rc=new RegExp(uu.source,"g");function Nb(t){return function(){return t}}function Ub(t){return function(e){return t(e)+""}}function Fb(t,e){var n=uu.lastIndex=rc.lastIndex=0,i,s,r,o=-1,a=[],c=[];for(t=t+"",e=e+"";(i=uu.exec(t))&&(s=rc.exec(e));)(r=s.index)>n&&(r=e.slice(n,r),a[o]?a[o]+=r:a[++o]=r),(i=i[0])===(s=s[0])?a[o]?a[o]+=s:a[++o]=s:(a[++o]=null,c.push({i:o,x:is(i,s)})),n=rc.lastIndex;return n<e.length&&(r=e.slice(n),a[o]?a[o]+=r:a[++o]=r),a.length<2?c[0]?Ub(c[0].x):Nb(e):(e=c.length,function(l){for(var u=0,d;u<e;++u)a[(d=c[u]).i]=d.x(l);return a.join("")})}var Nh=180/Math.PI,fu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Zg(t,e,n,i,s,r){var o,a,c;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(c=t*n+e*i)&&(n-=t*c,i-=e*c),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,c/=a),t*i<e*n&&(t=-t,e=-e,c=-c,o=-o),{translateX:s,translateY:r,rotate:Math.atan2(e,t)*Nh,skewX:Math.atan(c)*Nh,scaleX:o,scaleY:a}}var Yo;function Ob(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?fu:Zg(e.a,e.b,e.c,e.d,e.e,e.f)}function Bb(t){return t==null||(Yo||(Yo=document.createElementNS("http://www.w3.org/2000/svg","g")),Yo.setAttribute("transform",t),!(t=Yo.transform.baseVal.consolidate()))?fu:(t=t.matrix,Zg(t.a,t.b,t.c,t.d,t.e,t.f))}function Qg(t,e,n,i){function s(l){return l.length?l.pop()+" ":""}function r(l,u,d,f,h,g){if(l!==d||u!==f){var _=h.push("translate(",null,e,null,n);g.push({i:_-4,x:is(l,d)},{i:_-2,x:is(u,f)})}else(d||f)&&h.push("translate("+d+e+f+n)}function o(l,u,d,f){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),f.push({i:d.push(s(d)+"rotate(",null,i)-2,x:is(l,u)})):u&&d.push(s(d)+"rotate("+u+i)}function a(l,u,d,f){l!==u?f.push({i:d.push(s(d)+"skewX(",null,i)-2,x:is(l,u)}):u&&d.push(s(d)+"skewX("+u+i)}function c(l,u,d,f,h,g){if(l!==d||u!==f){var _=h.push(s(h)+"scale(",null,",",null,")");g.push({i:_-4,x:is(l,d)},{i:_-2,x:is(u,f)})}else(d!==1||f!==1)&&h.push(s(h)+"scale("+d+","+f+")")}return function(l,u){var d=[],f=[];return l=t(l),u=t(u),r(l.translateX,l.translateY,u.translateX,u.translateY,d,f),o(l.rotate,u.rotate,d,f),a(l.skewX,u.skewX,d,f),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,d,f),l=u=null,function(h){for(var g=-1,_=f.length,p;++g<_;)d[(p=f[g]).i]=p.x(h);return d.join("")}}}var kb=Qg(Ob,"px, ","px)","deg)"),zb=Qg(Bb,", ",")",")"),vr=0,Gr=0,Ir=0,e_=1e3,Qa,Wr,el=0,Bs=0,Il=0,_o=typeof performance=="object"&&performance.now?performance:Date,t_=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Of(){return Bs||(t_(Vb),Bs=_o.now()+Il)}function Vb(){Bs=0}function tl(){this._call=this._time=this._next=null}tl.prototype=Bf.prototype={constructor:tl,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?Of():+n)+(e==null?0:+e),!this._next&&Wr!==this&&(Wr?Wr._next=this:Qa=this,Wr=this),this._call=t,this._time=n,du()},stop:function(){this._call&&(this._call=null,this._time=1/0,du())}};function Bf(t,e,n){var i=new tl;return i.restart(t,e,n),i}function Hb(){Of(),++vr;for(var t=Qa,e;t;)(e=Bs-t._time)>=0&&t._call.call(void 0,e),t=t._next;--vr}function Uh(){Bs=(el=_o.now())+Il,vr=Gr=0;try{Hb()}finally{vr=0,Wb(),Bs=0}}function Gb(){var t=_o.now(),e=t-el;e>e_&&(Il-=e,el=t)}function Wb(){for(var t,e=Qa,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Qa=n);Wr=t,du(i)}function du(t){if(!vr){Gr&&(Gr=clearTimeout(Gr));var e=t-Bs;e>24?(t<1/0&&(Gr=setTimeout(Uh,t-_o.now()-Il)),Ir&&(Ir=clearInterval(Ir))):(Ir||(el=_o.now(),Ir=setInterval(Gb,e_)),vr=1,t_(Uh))}}function Fh(t,e,n){var i=new tl;return e=e==null?0:+e,i.restart(s=>{i.stop(),t(s+e)},e,n),i}var $b=Ll("start","end","cancel","interrupt"),Xb=[],n_=0,Oh=1,hu=2,Pa=3,Bh=4,pu=5,La=6;function Nl(t,e,n,i,s,r){var o=t.__transition;if(!o)t.__transition={};else if(n in o)return;qb(t,n,{name:e,index:i,group:s,on:$b,tween:Xb,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:n_})}function kf(t,e){var n=qn(t,e);if(n.state>n_)throw new Error("too late; already scheduled");return n}function vi(t,e){var n=qn(t,e);if(n.state>Pa)throw new Error("too late; already running");return n}function qn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function qb(t,e,n){var i=t.__transition,s;i[e]=n,n.timer=Bf(r,0,n.time);function r(l){n.state=Oh,n.timer.restart(o,n.delay,n.time),n.delay<=l&&o(l-n.delay)}function o(l){var u,d,f,h;if(n.state!==Oh)return c();for(u in i)if(h=i[u],h.name===n.name){if(h.state===Pa)return Fh(o);h.state===Bh?(h.state=La,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[u]):+u<e&&(h.state=La,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[u])}if(Fh(function(){n.state===Pa&&(n.state=Bh,n.timer.restart(a,n.delay,n.time),a(l))}),n.state=hu,n.on.call("start",t,t.__data__,n.index,n.group),n.state===hu){for(n.state=Pa,s=new Array(f=n.tween.length),u=0,d=-1;u<f;++u)(h=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(s[++d]=h);s.length=d+1}}function a(l){for(var u=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(c),n.state=pu,1),d=-1,f=s.length;++d<f;)s[d].call(t,u);n.state===pu&&(n.on.call("end",t,t.__data__,n.index,n.group),c())}function c(){n.state=La,n.timer.stop(),delete i[e];for(var l in i)return;delete t.__transition}}function Yb(t,e){var n=t.__transition,i,s,r=!0,o;if(n){e=e==null?null:e+"";for(o in n){if((i=n[o]).name!==e){r=!1;continue}s=i.state>hu&&i.state<pu,i.state=La,i.timer.stop(),i.on.call(s?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[o]}r&&delete t.__transition}}function jb(t){return this.each(function(){Yb(this,t)})}function Kb(t,e){var n,i;return function(){var s=vi(this,t),r=s.tween;if(r!==n){i=n=r;for(var o=0,a=i.length;o<a;++o)if(i[o].name===e){i=i.slice(),i.splice(o,1);break}}s.tween=i}}function Jb(t,e,n){var i,s;if(typeof n!="function")throw new Error;return function(){var r=vi(this,t),o=r.tween;if(o!==i){s=(i=o).slice();for(var a={name:e,value:n},c=0,l=s.length;c<l;++c)if(s[c].name===e){s[c]=a;break}c===l&&s.push(a)}r.tween=s}}function Zb(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=qn(this.node(),n).tween,s=0,r=i.length,o;s<r;++s)if((o=i[s]).name===t)return o.value;return null}return this.each((e==null?Kb:Jb)(n,t,e))}function zf(t,e,n){var i=t._id;return t.each(function(){var s=vi(this,i);(s.value||(s.value={}))[e]=n.apply(this,arguments)}),function(s){return qn(s,i).value[e]}}function i_(t,e){var n;return(typeof e=="number"?is:e instanceof go?Ih:(n=go(e))?(e=n,Ih):Fb)(t,e)}function Qb(t){return function(){this.removeAttribute(t)}}function eE(t){return function(){this.removeAttributeNS(t.space,t.local)}}function tE(t,e,n){var i,s=n+"",r;return function(){var o=this.getAttribute(t);return o===s?null:o===i?r:r=e(i=o,n)}}function nE(t,e,n){var i,s=n+"",r;return function(){var o=this.getAttributeNS(t.space,t.local);return o===s?null:o===i?r:r=e(i=o,n)}}function iE(t,e,n){var i,s,r;return function(){var o,a=n(this),c;return a==null?void this.removeAttribute(t):(o=this.getAttribute(t),c=a+"",o===c?null:o===i&&c===s?r:(s=c,r=e(i=o,a)))}}function sE(t,e,n){var i,s,r;return function(){var o,a=n(this),c;return a==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),c=a+"",o===c?null:o===i&&c===s?r:(s=c,r=e(i=o,a)))}}function rE(t,e){var n=Dl(t),i=n==="transform"?zb:i_;return this.attrTween(t,typeof e=="function"?(n.local?sE:iE)(n,i,zf(this,"attr."+t,e)):e==null?(n.local?eE:Qb)(n):(n.local?nE:tE)(n,i,e))}function oE(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function aE(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function lE(t,e){var n,i;function s(){var r=e.apply(this,arguments);return r!==i&&(n=(i=r)&&aE(t,r)),n}return s._value=e,s}function cE(t,e){var n,i;function s(){var r=e.apply(this,arguments);return r!==i&&(n=(i=r)&&oE(t,r)),n}return s._value=e,s}function uE(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=Dl(t);return this.tween(n,(i.local?lE:cE)(i,e))}function fE(t,e){return function(){kf(this,t).delay=+e.apply(this,arguments)}}function dE(t,e){return e=+e,function(){kf(this,t).delay=e}}function hE(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?fE:dE)(e,t)):qn(this.node(),e).delay}function pE(t,e){return function(){vi(this,t).duration=+e.apply(this,arguments)}}function mE(t,e){return e=+e,function(){vi(this,t).duration=e}}function gE(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?pE:mE)(e,t)):qn(this.node(),e).duration}function _E(t,e){if(typeof e!="function")throw new Error;return function(){vi(this,t).ease=e}}function vE(t){var e=this._id;return arguments.length?this.each(_E(e,t)):qn(this.node(),e).ease}function xE(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;vi(this,t).ease=n}}function yE(t){if(typeof t!="function")throw new Error;return this.each(xE(this._id,t))}function SE(t){typeof t!="function"&&(t=Og(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=[],c,l=0;l<o;++l)(c=r[l])&&t.call(c,c.__data__,l,r)&&a.push(c);return new Hi(i,this._parents,this._name,this._id)}function ME(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,s=n.length,r=Math.min(i,s),o=new Array(i),a=0;a<r;++a)for(var c=e[a],l=n[a],u=c.length,d=o[a]=new Array(u),f,h=0;h<u;++h)(f=c[h]||l[h])&&(d[h]=f);for(;a<i;++a)o[a]=e[a];return new Hi(o,this._parents,this._name,this._id)}function bE(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function EE(t,e,n){var i,s,r=bE(e)?kf:vi;return function(){var o=r(this,t),a=o.on;a!==i&&(s=(i=a).copy()).on(e,n),o.on=s}}function wE(t,e){var n=this._id;return arguments.length<2?qn(this.node(),n).on.on(t):this.each(EE(n,t,e))}function TE(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function AE(){return this.on("end.remove",TE(this._id))}function RE(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Nf(t));for(var i=this._groups,s=i.length,r=new Array(s),o=0;o<s;++o)for(var a=i[o],c=a.length,l=r[o]=new Array(c),u,d,f=0;f<c;++f)(u=a[f])&&(d=t.call(u,u.__data__,f,a))&&("__data__"in u&&(d.__data__=u.__data__),l[f]=d,Nl(l[f],e,n,f,l,qn(u,n)));return new Hi(r,this._parents,e,n)}function CE(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Fg(t));for(var i=this._groups,s=i.length,r=[],o=[],a=0;a<s;++a)for(var c=i[a],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=t.call(u,u.__data__,d,c),h,g=qn(u,n),_=0,p=f.length;_<p;++_)(h=f[_])&&Nl(h,e,n,_,f,g);r.push(f),o.push(u)}return new Hi(r,o,e,n)}var PE=Io.prototype.constructor;function LE(){return new PE(this._groups,this._parents)}function DE(t,e){var n,i,s;return function(){var r=gr(this,t),o=(this.style.removeProperty(t),gr(this,t));return r===o?null:r===n&&o===i?s:s=e(n=r,i=o)}}function s_(t){return function(){this.style.removeProperty(t)}}function IE(t,e,n){var i,s=n+"",r;return function(){var o=gr(this,t);return o===s?null:o===i?r:r=e(i=o,n)}}function NE(t,e,n){var i,s,r;return function(){var o=gr(this,t),a=n(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(t),gr(this,t))),o===c?null:o===i&&c===s?r:(s=c,r=e(i=o,a))}}function UE(t,e){var n,i,s,r="style."+e,o="end."+r,a;return function(){var c=vi(this,t),l=c.on,u=c.value[r]==null?a||(a=s_(e)):void 0;(l!==n||s!==u)&&(i=(n=l).copy()).on(o,s=u),c.on=i}}function FE(t,e,n){var i=(t+="")=="transform"?kb:i_;return e==null?this.styleTween(t,DE(t,i)).on("end.style."+t,s_(t)):typeof e=="function"?this.styleTween(t,NE(t,i,zf(this,"style."+t,e))).each(UE(this._id,t)):this.styleTween(t,IE(t,i,e),n).on("end.style."+t,null)}function OE(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function BE(t,e,n){var i,s;function r(){var o=e.apply(this,arguments);return o!==s&&(i=(s=o)&&OE(t,o,n)),i}return r._value=e,r}function kE(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,BE(t,e,n??""))}function zE(t){return function(){this.textContent=t}}function VE(t){return function(){var e=t(this);this.textContent=e??""}}function HE(t){return this.tween("text",typeof t=="function"?VE(zf(this,"text",t)):zE(t==null?"":t+""))}function GE(t){return function(e){this.textContent=t.call(this,e)}}function WE(t){var e,n;function i(){var s=t.apply(this,arguments);return s!==n&&(e=(n=s)&&GE(s)),e}return i._value=t,i}function $E(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,WE(t))}function XE(){for(var t=this._name,e=this._id,n=r_(),i=this._groups,s=i.length,r=0;r<s;++r)for(var o=i[r],a=o.length,c,l=0;l<a;++l)if(c=o[l]){var u=qn(c,e);Nl(c,t,n,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Hi(i,this._parents,t,n)}function qE(){var t,e,n=this,i=n._id,s=n.size();return new Promise(function(r,o){var a={value:o},c={value:function(){--s===0&&r()}};n.each(function(){var l=vi(this,i),u=l.on;u!==t&&(e=(t=u).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(c)),l.on=e}),s===0&&r()})}var YE=0;function Hi(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function r_(){return++YE}var bi=Io.prototype;Hi.prototype={constructor:Hi,select:RE,selectAll:CE,selectChild:bi.selectChild,selectChildren:bi.selectChildren,filter:SE,merge:ME,selection:LE,transition:XE,call:bi.call,nodes:bi.nodes,node:bi.node,size:bi.size,empty:bi.empty,each:bi.each,on:wE,attr:rE,attrTween:uE,style:FE,styleTween:kE,text:HE,textTween:$E,remove:AE,tween:Zb,delay:hE,duration:gE,ease:vE,easeVarying:yE,end:qE,[Symbol.iterator]:bi[Symbol.iterator]};function jE(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var KE={time:null,delay:0,duration:250,ease:jE};function JE(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function ZE(t){var e,n;t instanceof Hi?(e=t._id,t=t._name):(e=r_(),(n=KE).time=Of(),t=t==null?null:t+"");for(var i=this._groups,s=i.length,r=0;r<s;++r)for(var o=i[r],a=o.length,c,l=0;l<a;++l)(c=o[l])&&Nl(c,t,e,l,o,n||JE(c,e));return new Hi(i,this._parents,t,e)}Io.prototype.interrupt=jb;Io.prototype.transition=ZE;function o_(t,e){var n,i=1;t==null&&(t=0),e==null&&(e=0);function s(){var r,o=n.length,a,c=0,l=0;for(r=0;r<o;++r)a=n[r],c+=a.x,l+=a.y;for(c=(c/o-t)*i,l=(l/o-e)*i,r=0;r<o;++r)a=n[r],a.x-=c,a.y-=l}return s.initialize=function(r){n=r},s.x=function(r){return arguments.length?(t=+r,s):t},s.y=function(r){return arguments.length?(e=+r,s):e},s.strength=function(r){return arguments.length?(i=+r,s):i},s}function QE(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return a_(this.cover(e,n),e,n,t)}function a_(t,e,n,i){if(isNaN(e)||isNaN(n))return t;var s,r=t._root,o={data:i},a=t._x0,c=t._y0,l=t._x1,u=t._y1,d,f,h,g,_,p,m,v;if(!r)return t._root=o,t;for(;r.length;)if((_=e>=(d=(a+l)/2))?a=d:l=d,(p=n>=(f=(c+u)/2))?c=f:u=f,s=r,!(r=r[m=p<<1|_]))return s[m]=o,t;if(h=+t._x.call(null,r.data),g=+t._y.call(null,r.data),e===h&&n===g)return o.next=r,s?s[m]=o:t._root=o,t;do s=s?s[m]=new Array(4):t._root=new Array(4),(_=e>=(d=(a+l)/2))?a=d:l=d,(p=n>=(f=(c+u)/2))?c=f:u=f;while((m=p<<1|_)===(v=(g>=f)<<1|h>=d));return s[v]=r,s[m]=o,t}function e1(t){var e,n,i=t.length,s,r,o=new Array(i),a=new Array(i),c=1/0,l=1/0,u=-1/0,d=-1/0;for(n=0;n<i;++n)isNaN(s=+this._x.call(null,e=t[n]))||isNaN(r=+this._y.call(null,e))||(o[n]=s,a[n]=r,s<c&&(c=s),s>u&&(u=s),r<l&&(l=r),r>d&&(d=r));if(c>u||l>d)return this;for(this.cover(c,l).cover(u,d),n=0;n<i;++n)a_(this,o[n],a[n],t[n]);return this}function t1(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,i=this._y0,s=this._x1,r=this._y1;if(isNaN(n))s=(n=Math.floor(t))+1,r=(i=Math.floor(e))+1;else{for(var o=s-n||1,a=this._root,c,l;n>t||t>=s||i>e||e>=r;)switch(l=(e<i)<<1|t<n,c=new Array(4),c[l]=a,a=c,o*=2,l){case 0:s=n+o,r=i+o;break;case 1:n=s-o,r=i+o;break;case 2:s=n+o,i=r-o;break;case 3:n=s-o,i=r-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=n,this._y0=i,this._x1=s,this._y1=r,this}function n1(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function i1(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function rn(t,e,n,i,s){this.node=t,this.x0=e,this.y0=n,this.x1=i,this.y1=s}function s1(t,e,n){var i,s=this._x0,r=this._y0,o,a,c,l,u=this._x1,d=this._y1,f=[],h=this._root,g,_;for(h&&f.push(new rn(h,s,r,u,d)),n==null?n=1/0:(s=t-n,r=e-n,u=t+n,d=e+n,n*=n);g=f.pop();)if(!(!(h=g.node)||(o=g.x0)>u||(a=g.y0)>d||(c=g.x1)<s||(l=g.y1)<r))if(h.length){var p=(o+c)/2,m=(a+l)/2;f.push(new rn(h[3],p,m,c,l),new rn(h[2],o,m,p,l),new rn(h[1],p,a,c,m),new rn(h[0],o,a,p,m)),(_=(e>=m)<<1|t>=p)&&(g=f[f.length-1],f[f.length-1]=f[f.length-1-_],f[f.length-1-_]=g)}else{var v=t-+this._x.call(null,h.data),E=e-+this._y.call(null,h.data),y=v*v+E*E;if(y<n){var w=Math.sqrt(n=y);s=t-w,r=e-w,u=t+w,d=e+w,i=h.data}}return i}function r1(t){if(isNaN(u=+this._x.call(null,t))||isNaN(d=+this._y.call(null,t)))return this;var e,n=this._root,i,s,r,o=this._x0,a=this._y0,c=this._x1,l=this._y1,u,d,f,h,g,_,p,m;if(!n)return this;if(n.length)for(;;){if((g=u>=(f=(o+c)/2))?o=f:c=f,(_=d>=(h=(a+l)/2))?a=h:l=h,e=n,!(n=n[p=_<<1|g]))return this;if(!n.length)break;(e[p+1&3]||e[p+2&3]||e[p+3&3])&&(i=e,m=p)}for(;n.data!==t;)if(s=n,!(n=n.next))return this;return(r=n.next)&&delete n.next,s?(r?s.next=r:delete s.next,this):e?(r?e[p]=r:delete e[p],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(i?i[m]=n:this._root=n),this):(this._root=r,this)}function o1(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function a1(){return this._root}function l1(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function c1(t){var e=[],n,i=this._root,s,r,o,a,c;for(i&&e.push(new rn(i,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(i=n.node,r=n.x0,o=n.y0,a=n.x1,c=n.y1)&&i.length){var l=(r+a)/2,u=(o+c)/2;(s=i[3])&&e.push(new rn(s,l,u,a,c)),(s=i[2])&&e.push(new rn(s,r,u,l,c)),(s=i[1])&&e.push(new rn(s,l,o,a,u)),(s=i[0])&&e.push(new rn(s,r,o,l,u))}return this}function u1(t){var e=[],n=[],i;for(this._root&&e.push(new rn(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var s=i.node;if(s.length){var r,o=i.x0,a=i.y0,c=i.x1,l=i.y1,u=(o+c)/2,d=(a+l)/2;(r=s[0])&&e.push(new rn(r,o,a,u,d)),(r=s[1])&&e.push(new rn(r,u,a,c,d)),(r=s[2])&&e.push(new rn(r,o,d,u,l)),(r=s[3])&&e.push(new rn(r,u,d,c,l))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.y0,i.x1,i.y1);return this}function f1(t){return t[0]}function d1(t){return arguments.length?(this._x=t,this):this._x}function h1(t){return t[1]}function p1(t){return arguments.length?(this._y=t,this):this._y}function Vf(t,e,n){var i=new Hf(e??f1,n??h1,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function Hf(t,e,n,i,s,r){this._x=t,this._y=e,this._x0=n,this._y0=i,this._x1=s,this._y1=r,this._root=void 0}function kh(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var fn=Vf.prototype=Hf.prototype;fn.copy=function(){var t=new Hf(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=kh(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var s=0;s<4;++s)(i=e.source[s])&&(i.length?n.push({source:i,target:e.target[s]=new Array(4)}):e.target[s]=kh(i));return t};fn.add=QE;fn.addAll=e1;fn.cover=t1;fn.data=n1;fn.extent=i1;fn.find=s1;fn.remove=r1;fn.removeAll=o1;fn.root=a1;fn.size=l1;fn.visit=c1;fn.visitAfter=u1;fn.x=d1;fn.y=p1;function Fs(t){return function(){return t}}function rs(t){return(t()-.5)*1e-6}function m1(t){return t.x+t.vx}function g1(t){return t.y+t.vy}function l_(t){var e,n,i,s=1,r=1;typeof t!="function"&&(t=Fs(t==null?1:+t));function o(){for(var l,u=e.length,d,f,h,g,_,p,m=0;m<r;++m)for(d=Vf(e,m1,g1).visitAfter(a),l=0;l<u;++l)f=e[l],_=n[f.index],p=_*_,h=f.x+f.vx,g=f.y+f.vy,d.visit(v);function v(E,y,w,R,D){var S=E.data,M=E.r,N=_+M;if(S){if(S.index>f.index){var P=h-S.x-S.vx,F=g-S.y-S.vy,k=P*P+F*F;k<N*N&&(P===0&&(P=rs(i),k+=P*P),F===0&&(F=rs(i),k+=F*F),k=(N-(k=Math.sqrt(k)))/k*s,f.vx+=(P*=k)*(N=(M*=M)/(p+M)),f.vy+=(F*=k)*N,S.vx-=P*(N=1-N),S.vy-=F*N)}return}return y>h+N||R<h-N||w>g+N||D<g-N}}function a(l){if(l.data)return l.r=n[l.data.index];for(var u=l.r=0;u<4;++u)l[u]&&l[u].r>l.r&&(l.r=l[u].r)}function c(){if(e){var l,u=e.length,d;for(n=new Array(u),l=0;l<u;++l)d=e[l],n[d.index]=+t(d,l,e)}}return o.initialize=function(l,u){e=l,i=u,c()},o.iterations=function(l){return arguments.length?(r=+l,o):r},o.strength=function(l){return arguments.length?(s=+l,o):s},o.radius=function(l){return arguments.length?(t=typeof l=="function"?l:Fs(+l),c(),o):t},o}function _1(t){return t.index}function zh(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}function c_(t){var e=_1,n=d,i,s=Fs(30),r,o,a,c,l,u=1;t==null&&(t=[]);function d(p){return 1/Math.min(a[p.source.index],a[p.target.index])}function f(p){for(var m=0,v=t.length;m<u;++m)for(var E=0,y,w,R,D,S,M,N;E<v;++E)y=t[E],w=y.source,R=y.target,D=R.x+R.vx-w.x-w.vx||rs(l),S=R.y+R.vy-w.y-w.vy||rs(l),M=Math.sqrt(D*D+S*S),M=(M-r[E])/M*p*i[E],D*=M,S*=M,R.vx-=D*(N=c[E]),R.vy-=S*N,w.vx+=D*(N=1-N),w.vy+=S*N}function h(){if(o){var p,m=o.length,v=t.length,E=new Map(o.map((w,R)=>[e(w,R,o),w])),y;for(p=0,a=new Array(m);p<v;++p)y=t[p],y.index=p,typeof y.source!="object"&&(y.source=zh(E,y.source)),typeof y.target!="object"&&(y.target=zh(E,y.target)),a[y.source.index]=(a[y.source.index]||0)+1,a[y.target.index]=(a[y.target.index]||0)+1;for(p=0,c=new Array(v);p<v;++p)y=t[p],c[p]=a[y.source.index]/(a[y.source.index]+a[y.target.index]);i=new Array(v),g(),r=new Array(v),_()}}function g(){if(o)for(var p=0,m=t.length;p<m;++p)i[p]=+n(t[p],p,t)}function _(){if(o)for(var p=0,m=t.length;p<m;++p)r[p]=+s(t[p],p,t)}return f.initialize=function(p,m){o=p,l=m,h()},f.links=function(p){return arguments.length?(t=p,h(),f):t},f.id=function(p){return arguments.length?(e=p,f):e},f.iterations=function(p){return arguments.length?(u=+p,f):u},f.strength=function(p){return arguments.length?(n=typeof p=="function"?p:Fs(+p),g(),f):n},f.distance=function(p){return arguments.length?(s=typeof p=="function"?p:Fs(+p),_(),f):s},f}const v1=1664525,x1=1013904223,Vh=4294967296;function y1(){let t=1;return()=>(t=(v1*t+x1)%Vh)/Vh}function S1(t){return t.x}function M1(t){return t.y}var b1=10,E1=Math.PI*(3-Math.sqrt(5));function u_(t){var e,n=1,i=.001,s=1-Math.pow(i,1/300),r=0,o=.6,a=new Map,c=Bf(d),l=Ll("tick","end"),u=y1();t==null&&(t=[]);function d(){f(),l.call("tick",e),n<i&&(c.stop(),l.call("end",e))}function f(_){var p,m=t.length,v;_===void 0&&(_=1);for(var E=0;E<_;++E)for(n+=(r-n)*s,a.forEach(function(y){y(n)}),p=0;p<m;++p)v=t[p],v.fx==null?v.x+=v.vx*=o:(v.x=v.fx,v.vx=0),v.fy==null?v.y+=v.vy*=o:(v.y=v.fy,v.vy=0);return e}function h(){for(var _=0,p=t.length,m;_<p;++_){if(m=t[_],m.index=_,m.fx!=null&&(m.x=m.fx),m.fy!=null&&(m.y=m.fy),isNaN(m.x)||isNaN(m.y)){var v=b1*Math.sqrt(.5+_),E=_*E1;m.x=v*Math.cos(E),m.y=v*Math.sin(E)}(isNaN(m.vx)||isNaN(m.vy))&&(m.vx=m.vy=0)}}function g(_){return _.initialize&&_.initialize(t,u),_}return h(),e={tick:f,restart:function(){return c.restart(d),e},stop:function(){return c.stop(),e},nodes:function(_){return arguments.length?(t=_,h(),a.forEach(g),e):t},alpha:function(_){return arguments.length?(n=+_,e):n},alphaMin:function(_){return arguments.length?(i=+_,e):i},alphaDecay:function(_){return arguments.length?(s=+_,e):+s},alphaTarget:function(_){return arguments.length?(r=+_,e):r},velocityDecay:function(_){return arguments.length?(o=1-_,e):1-o},randomSource:function(_){return arguments.length?(u=_,a.forEach(g),e):u},force:function(_,p){return arguments.length>1?(p==null?a.delete(_):a.set(_,g(p)),e):a.get(_)},find:function(_,p,m){var v=0,E=t.length,y,w,R,D,S;for(m==null?m=1/0:m*=m,v=0;v<E;++v)D=t[v],y=_-D.x,w=p-D.y,R=y*y+w*w,R<m&&(S=D,m=R);return S},on:function(_,p){return arguments.length>1?(l.on(_,p),e):l.on(_)}}}function f_(){var t,e,n,i,s=Fs(-30),r,o=1,a=1/0,c=.81;function l(h){var g,_=t.length,p=Vf(t,S1,M1).visitAfter(d);for(i=h,g=0;g<_;++g)e=t[g],p.visit(f)}function u(){if(t){var h,g=t.length,_;for(r=new Array(g),h=0;h<g;++h)_=t[h],r[_.index]=+s(_,h,t)}}function d(h){var g=0,_,p,m=0,v,E,y;if(h.length){for(v=E=y=0;y<4;++y)(_=h[y])&&(p=Math.abs(_.value))&&(g+=_.value,m+=p,v+=p*_.x,E+=p*_.y);h.x=v/m,h.y=E/m}else{_=h,_.x=_.data.x,_.y=_.data.y;do g+=r[_.data.index];while(_=_.next)}h.value=g}function f(h,g,_,p){if(!h.value)return!0;var m=h.x-e.x,v=h.y-e.y,E=p-g,y=m*m+v*v;if(E*E/c<y)return y<a&&(m===0&&(m=rs(n),y+=m*m),v===0&&(v=rs(n),y+=v*v),y<o&&(y=Math.sqrt(o*y)),e.vx+=m*h.value*i/y,e.vy+=v*h.value*i/y),!0;if(h.length||y>=a)return;(h.data!==e||h.next)&&(m===0&&(m=rs(n),y+=m*m),v===0&&(v=rs(n),y+=v*v),y<o&&(y=Math.sqrt(o*y)));do h.data!==e&&(E=r[h.data.index]*i/y,e.vx+=m*E,e.vy+=v*E);while(h=h.next)}return l.initialize=function(h,g){t=h,n=g,u()},l.strength=function(h){return arguments.length?(s=typeof h=="function"?h:Fs(+h),u(),l):s},l.distanceMin=function(h){return arguments.length?(o=h*h,l):Math.sqrt(o)},l.distanceMax=function(h){return arguments.length?(a=h*h,l):Math.sqrt(a)},l.theta=function(h){return arguments.length?(c=h*h,l):Math.sqrt(c)},l}function w1(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}const Hh=Symbol("implicit");function d_(){var t=new yh,e=[],n=[],i=Hh;function s(r){let o=t.get(r);if(o===void 0){if(i!==Hh)return i;t.set(r,o=e.push(r)-1)}return n[o%n.length]}return s.domain=function(r){if(!arguments.length)return e.slice();e=[],t=new yh;for(const o of r)t.has(o)||t.set(o,e.push(o)-1);return s},s.range=function(r){return arguments.length?(n=Array.from(r),s):n.slice()},s.unknown=function(r){return arguments.length?(i=r,s):i},s.copy=function(){return d_(e,n).unknown(i)},w1.apply(s,arguments),s}function $r(t,e,n){this.k=t,this.x=e,this.y=n}$r.prototype={constructor:$r,scale:function(t){return t===1?this:new $r(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new $r(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};$r.prototype;const T1={class:"memory-graph"},A1={key:0,class:"loading-overlay"},R1={key:1,class:"empty-placeholder"},C1=un({__name:"MemoryGraph",props:{graphData:{},isLoading:{type:Boolean}},emits:["nodeClick"],setup(t,{emit:e}){const n=t,i=e,s=we();let r=null,o=null;const a=d_().domain(["storage","thinking","skill","entity","category"]).range(["#00ff41","#ff00ff","#00ffff","#ffff00","#ff6b6b"]);gi(()=>{s.value&&c()}),Fi(()=>n.graphData,h=>{h.nodes.length>0&&l(h)},{deep:!0}),To(()=>{r&&r.stop()});function c(){if(!s.value)return;const h=s.value.clientWidth,g=s.value.clientHeight;o=_r(s.value).append("svg").attr("width",h).attr("height",g),o.append("defs").append("marker").attr("id","arrowhead").attr("viewBox","-0 -5 10 10").attr("refX",20).attr("refY",0).attr("orient","auto").attr("markerWidth",6).attr("markerHeight",6).append("path").attr("d","M 0,-5 L 10,0 L 0,5").attr("fill","#00ff41")}function l(h){if(!o||!s.value)return;const g=s.value.clientWidth,_=s.value.clientHeight;o.selectAll("*").remove(),r=u_(h.nodes).force("link",c_(h.links).id(v=>v.id).distance(100)).force("charge",f_().strength(-300)).force("center",o_(g/2,_/2)).force("collision",l_().radius(30));const p=o.append("g").selectAll("line").data(h.links).enter().append("line").attr("stroke","#00ff41").attr("stroke-opacity",.6).attr("stroke-width",1.5),m=o.append("g").selectAll("circle").data(h.nodes).enter().append("circle").attr("r",8).attr("fill",v=>a(v.type)||"#00ff41").attr("stroke","#fff").attr("stroke-width",2).style("cursor","pointer").call(qg().on("start",u).on("drag",d).on("end",f)).on("click",(v,E)=>{i("nodeClick",E)});m.append("title").text(v=>v.label||v.id),r.on("tick",()=>{p.attr("x1",v=>v.source.x).attr("y1",v=>v.source.y).attr("x2",v=>v.target.x).attr("y2",v=>v.target.y),m.attr("cx",v=>v.x).attr("cy",v=>v.y)})}function u(h){!h.active&&r&&r.alphaTarget(.3).restart(),h.subject.fx=h.subject.x(h.subject).fy=h.subject.y}function d(h){h.subject.fx=h.x,h.subject.fy=h.y}function f(h){!h.active&&r&&r.alphaTarget(0),h.subject.fx=null,h.subject.fy=null}return(h,g)=>(le(),de("div",T1,[x("div",{ref_key:"containerRef",ref:s,class:"graph-container"},null,512),t.isLoading?(le(),de("div",A1,[...g[0]||(g[0]=[x("div",{class:"loading-spinner"},null,-1),x("p",null,"加载图谱中...",-1)])])):Je("",!0),!t.isLoading&&t.graphData.nodes.length===0?(le(),de("div",R1,[...g[1]||(g[1]=[x("h2",null,"暂无认知数据",-1),x("p",null,"当前记忆库尚未经过认知分析，图谱暂时无法显示。",-1)])])):Je("",!0)]))}}),vn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},P1=vn(C1,[["__scopeId","data-v-b5be093d"]]),L1={class:"memory-list-panel panel"},D1={class:"memory-type-tabs"},I1=["onClick"],N1={class:"tiered-stats"},U1={class:"stat-item"},F1={class:"stat-value"},O1={class:"stat-item"},B1={class:"stat-value"},k1={class:"stat-item"},z1={class:"stat-value"},V1={class:"memory-list"},H1={key:0,class:"memory-item-placeholder"},G1={key:1,class:"memory-item-placeholder"},W1=["onClick"],$1={class:"memory-title"},X1={class:"memory-meta"},q1={class:"memory-time"},Y1={class:"memory-search-box"},j1=un({__name:"MemoryList",emits:["memorySelect"],setup(t,{emit:e}){const n=e,i=_i(),{filteredMemories:s,memoryCountByType:r,isLoading:o}=Er(i),a=wt(()=>i.currentMemoryType),c=we(""),l=[{label:"全部",value:"all"},{label:"技能记忆",value:"skill"},{label:"思维记忆",value:"thinking"},{label:"存储记忆",value:"storage"}],u=wt(()=>r.value);function d(p){i.setMemoryType(p)}function f(p){n("memorySelect",p)}function h(){c.value.trim()&&i.searchMemories(c.value)}function g(p){return{storage:"存储",thinking:"思维",skill:"技能"}[p||""]||p||"未知"}function _(p){const m=new Date(p),E=new Date().getTime()-m.getTime(),y=Math.floor(E/6e4),w=Math.floor(E/36e5),R=Math.floor(E/864e5);return y<60?`${y}分钟前`:w<24?`${w}小时前`:`${R}天前`}return(p,m)=>(le(),de("div",L1,[m[4]||(m[4]=x("h1",null,"三层记忆系统",-1)),x("div",D1,[(le(),de(ft,null,It(l,v=>x("button",{key:v.value,class:lt(["memory-tab",{active:a.value===v.value}]),onClick:E=>d(v.value)},te(v.label),11,I1)),64))]),x("div",N1,[x("div",U1,[m[1]||(m[1]=x("span",{class:"stat-label"},"技能",-1)),x("span",F1,te(u.value.skill),1)]),x("div",O1,[m[2]||(m[2]=x("span",{class:"stat-label"},"思维",-1)),x("span",B1,te(u.value.thinking),1)]),x("div",k1,[m[3]||(m[3]=x("span",{class:"stat-label"},"存储",-1)),x("span",z1,te(u.value.storage),1)])]),x("div",V1,[Se(o)?(le(),de("div",H1," 加载中... ")):Se(s).length===0?(le(),de("div",G1," 暂无记忆 ")):(le(!0),de(ft,{key:2},It(Se(s),v=>(le(),de("div",{key:v.id,class:"memory-item",onClick:E=>f(v)},[x("div",$1,te(v.title),1),x("div",X1,[x("span",{class:lt(["memory-type-badge",v.memory_type])},te(g(v.memory_type)),3),x("span",q1,te(_(v.timestamp)),1)])],8,W1))),128))]),x("div",Y1,[Ft(x("input",{"onUpdate:modelValue":m[0]||(m[0]=v=>c.value=v),type:"text",placeholder:"搜索三层记忆...",onKeyup:Af(h,["enter"])},null,544),[[on,c.value]]),x("button",{onClick:h},"搜索")])]))}}),K1=vn(j1,[["__scopeId","data-v-1bcd0231"]]),J1={class:"log-panel panel"},Z1={class:"log-time"},Q1={class:"log-message"},ew={key:0,class:"log-placeholder"},tw=un({__name:"LogPanel",setup(t){const e=_i(),{logs:n}=Er(e),i=we();Fi(n,()=>{wo(()=>{i.value&&(i.value.scrollTop=i.value.scrollHeight)})},{deep:!0});function s(){e.clearLogs()}return(r,o)=>(le(),de("div",J1,[x("div",{class:"log-header"},[o[0]||(o[0]=x("h3",null,"系统日志",-1)),x("button",{class:"clear-btn",onClick:s},"清空")]),x("div",{class:"log-content",ref_key:"logContentRef",ref:i},[(le(!0),de(ft,null,It(Se(n),(a,c)=>(le(),de("div",{key:c,class:lt(["log-entry",a.type])},[x("span",Z1,"["+te(a.time)+"]",1),x("span",Q1,te(a.message),1)],2))),128)),Se(n).length===0?(le(),de("div",ew," 暂无日志 ")):Je("",!0)],512)]))}}),nw=vn(tw,[["__scopeId","data-v-17bbce0b"]]),iw={class:"stats-panel panel"},sw={key:0,class:"stats-grid"},rw={class:"stat-card"},ow={class:"stat-info"},aw={class:"stat-value"},lw={class:"stat-card"},cw={class:"stat-info"},uw={class:"stat-value"},fw={class:"stat-card"},dw={class:"stat-info"},hw={class:"stat-value"},pw={class:"stat-card"},mw={class:"stat-info"},gw={class:"stat-value"},_w={key:1,class:"evolution-status"},vw={class:"status-item"},xw={class:"status-item"},yw={class:"status-value"},Sw={class:"status-item"},Mw={class:"status-value"},bw={key:2,class:"llm-status"},Ew={class:"status-item"},ww={class:"status-value"},Tw=un({__name:"StatsPanel",setup(t){const e=_i(),{stats:n,evolutionStatus:i}=Er(e),s=wt(()=>{var o;return((o=n.value)==null?void 0:o.llm_enabled)||!1}),r=wt(()=>{var o;return((o=n.value)==null?void 0:o.preferred_provider)||"未配置"});return(o,a)=>(le(),de("div",iw,[a[14]||(a[14]=x("h3",null,"系统状态",-1)),Se(n)?(le(),de("div",sw,[x("div",rw,[a[1]||(a[1]=x("div",{class:"stat-icon"},"📊",-1)),x("div",ow,[x("div",aw,te(Se(n).memory_count),1),a[0]||(a[0]=x("div",{class:"stat-label"},"总记忆数",-1))])]),x("div",lw,[a[3]||(a[3]=x("div",{class:"stat-icon"},"🧠",-1)),x("div",cw,[x("div",uw,te(Se(n).tiered_count),1),a[2]||(a[2]=x("div",{class:"stat-label"},"三层记忆",-1))])]),x("div",fw,[a[5]||(a[5]=x("div",{class:"stat-icon"},"⚡",-1)),x("div",dw,[x("div",hw,te(Se(n).tiered_breakdown.skill),1),a[4]||(a[4]=x("div",{class:"stat-label"},"技能记忆",-1))])]),x("div",pw,[a[7]||(a[7]=x("div",{class:"stat-icon"},"💭",-1)),x("div",mw,[x("div",gw,te(Se(n).tiered_breakdown.thinking),1),a[6]||(a[6]=x("div",{class:"stat-label"},"思维记忆",-1))])])])):Je("",!0),Se(i)?(le(),de("div",_w,[a[11]||(a[11]=x("h4",null,"进化系统",-1)),x("div",vw,[a[8]||(a[8]=x("span",{class:"status-label"},"状态:",-1)),x("span",{class:lt(["status-value",Se(i).enabled?"active":"inactive"])},te(Se(i).enabled?"运行中":"已停止"),3)]),x("div",xw,[a[9]||(a[9]=x("span",{class:"status-label"},"模式:",-1)),x("span",yw,te(Se(i).profile),1)]),x("div",Sw,[a[10]||(a[10]=x("span",{class:"status-label"},"扫描次数:",-1)),x("span",Mw,te(Se(i).total_scanned),1)])])):Je("",!0),s.value?(le(),de("div",bw,[a[13]||(a[13]=x("h4",null,"LLM 状态",-1)),x("div",Ew,[a[12]||(a[12]=x("span",{class:"status-label"},"提供商:",-1)),x("span",ww,te(r.value),1)])])):Je("",!0)]))}}),Aw=vn(Tw,[["__scopeId","data-v-36d19230"]]),oc="default_user",h_=Rf("auth",()=>{const t=we(oc),e=we(!0),n=we({id:oc,name:oc}),i=wt(()=>t.value);function s(a){t.value=a,n.value.id=a,n.value.name=a}function r(){const a=localStorage.getItem("mcp_memory_user_id");a&&s(a)}function o(a){localStorage.setItem("mcp_memory_user_id",a),s(a)}return r(),{currentUserId:t,isAuthenticated:e,userInfo:n,getCurrentUserId:i,setUserId:s,loadUserFromStorage:r,saveUserToStorage:o}}),Rw={class:"memory-writer panel"},Cw={class:"write-mode-tabs"},Pw={class:"form-group"},Lw={class:"form-group"},Dw={key:0,class:"error-text"},Iw={class:"form-group"},Nw={class:"form-row"},Uw={class:"form-group"},Fw={key:0,class:"form-group"},Ow={key:1,class:"form-group"},Bw={class:"form-actions"},kw=["disabled"],zw={key:0,class:"success-message"},Vw={key:1,class:"error-message"},Hw=un({__name:"MemoryWriter",emits:["written"],setup(t,{emit:e}){const n=e,i=_i(),s=h_(),r=we("normal"),o=we(!1),a=we(""),c=we(""),l=we({title:"",content:"",scope:"project",memory_type:"storage",content_type:"note",keywords:[]}),u=we({content:""}),d=wt({get:()=>l.value.keywords.join(", "),set:p=>{l.value.keywords=p.split(",").map(m=>m.trim()).filter(m=>m)}}),f=wt(()=>l.value.content.trim().length>0);function h(){return u.value.content="",l.value.content.trim()?!0:(u.value.content="请输入记忆内容",!1)}function g(){l.value={title:"",content:"",scope:"project",memory_type:"storage",content_type:"note",keywords:[]},u.value={content:""},a.value="",c.value=""}async function _(){if(h()){o.value=!0,a.value="",c.value="";try{let p;const m=s.getCurrentUserId;if(r.value==="normal")p=await Qn.writeMemory({content:l.value.content,user_id:m,title:l.value.title||void 0,scope:l.value.scope,keywords:l.value.keywords.length>0?l.value.keywords:void 0,content_type:l.value.content_type}),i.addLog("记忆写入成功","success");else{const v={content:l.value.content,user_id:m,title:l.value.title||void 0,keywords:l.value.keywords.length>0?l.value.keywords:void 0};l.value.memory_type==="storage"?p=await Vn.writeStorage(v):l.value.memory_type==="thinking"?p=await Vn.writeThinking(v):p=await Vn.writeSkill(v);const y={storage:"存储记忆",thinking:"思维记忆",skill:"技能记忆"}[l.value.memory_type]||"记忆";i.addLog(`${y}写入成功`,"success")}a.value=`记忆写入成功！ID: ${p.id}`,n("written",p.id),l.value={title:"",content:"",scope:l.value.scope,memory_type:l.value.memory_type,content_type:l.value.content_type,keywords:[]},await i.fetchStats()}catch(p){const m=p.message||"未知错误";c.value=`写入失败: ${m}`,i.addLog("写入失败: "+m,"error")}finally{o.value=!1}}}return(p,m)=>(le(),de("div",Rw,[m[17]||(m[17]=x("h3",null,"记忆写入",-1)),x("div",Cw,[x("button",{class:lt(["mode-tab",{active:r.value==="normal"}]),onClick:m[0]||(m[0]=v=>r.value="normal")}," 普通写入 ",2),x("button",{class:lt(["mode-tab",{active:r.value==="tiered"}]),onClick:m[1]||(m[1]=v=>r.value="tiered")}," 分层写入 ",2)]),x("div",Pw,[m[8]||(m[8]=x("label",null,"标题",-1)),Ft(x("input",{"onUpdate:modelValue":m[2]||(m[2]=v=>l.value.title=v),type:"text",placeholder:"记忆标题（可选）"},null,512),[[on,l.value.title]])]),x("div",Lw,[m[9]||(m[9]=x("label",null,[Ef("内容 "),x("span",{class:"required"},"*")],-1)),Ft(x("textarea",{"onUpdate:modelValue":m[3]||(m[3]=v=>l.value.content=v),rows:"6",placeholder:"输入记忆内容...",class:lt({"input-error":u.value.content})},null,2),[[on,l.value.content]]),u.value.content?(le(),de("span",Dw,te(u.value.content),1)):Je("",!0)]),x("div",Iw,[m[10]||(m[10]=x("label",null,"关键词",-1)),Ft(x("input",{"onUpdate:modelValue":m[4]||(m[4]=v=>d.value=v),type:"text",placeholder:"关键词1, 关键词2, ..."},null,512),[[on,d.value]])]),x("div",Nw,[x("div",Uw,[m[12]||(m[12]=x("label",null,"作用域",-1)),Ft(x("select",{"onUpdate:modelValue":m[5]||(m[5]=v=>l.value.scope=v)},[...m[11]||(m[11]=[x("option",{value:"project"},"项目",-1),x("option",{value:"global"},"全局",-1)])],512),[[io,l.value.scope]])]),r.value==="tiered"?(le(),de("div",Fw,[m[14]||(m[14]=x("label",null,"记忆类型",-1)),Ft(x("select",{"onUpdate:modelValue":m[6]||(m[6]=v=>l.value.memory_type=v)},[...m[13]||(m[13]=[x("option",{value:"storage"},"存储记忆 💾",-1),x("option",{value:"thinking"},"思维记忆 💭",-1),x("option",{value:"skill"},"技能记忆 ⚡",-1)])],512),[[io,l.value.memory_type]])])):Je("",!0),r.value==="normal"?(le(),de("div",Ow,[m[16]||(m[16]=x("label",null,"内容类型",-1)),Ft(x("select",{"onUpdate:modelValue":m[7]||(m[7]=v=>l.value.content_type=v)},[...m[15]||(m[15]=[ng('<option value="note" data-v-aeea853e>笔记</option><option value="task" data-v-aeea853e>任务</option><option value="summary" data-v-aeea853e>摘要</option><option value="code" data-v-aeea853e>代码</option><option value="config" data-v-aeea853e>配置</option><option value="workflow" data-v-aeea853e>工作流</option>',6)])],512),[[io,l.value.content_type]])])):Je("",!0)]),x("div",Bw,[x("button",{class:"btn-reset",onClick:g},"重置"),x("button",{class:"btn-write",onClick:_,disabled:o.value||!f.value},te(o.value?"写入中...":"写入记忆"),9,kw)]),a.value?(le(),de("div",zw,te(a.value),1)):Je("",!0),c.value?(le(),de("div",Vw,te(c.value),1)):Je("",!0)]))}}),Gw=vn(Hw,[["__scopeId","data-v-aeea853e"]]),Ww={class:"modal-body"},$w={class:"form-group"},Xw={class:"form-group"},qw={class:"form-group"},Yw={class:"form-row"},jw={class:"form-group"},Kw={class:"form-group"},Jw={class:"form-actions"},Zw=["disabled"],Qw=un({__name:"MemoryEditor",props:{visible:{type:Boolean},memory:{}},emits:["close","saved","deleted"],setup(t,{emit:e}){const n=t,i=e,s=_i(),r=we(!1),o=we({title:"",content:"",scope:"project",memory_type:"storage",keywords:[]}),a=wt({get:()=>o.value.keywords.join(", "),set:d=>{o.value.keywords=d.split(",").map(f=>f.trim()).filter(f=>f)}});Fi(()=>n.memory,d=>{d&&(o.value={title:d.title||"",content:d.content||"",scope:d.scope||"project",memory_type:d.memory_type||"storage",keywords:d.keywords||[]})},{immediate:!0});function c(){i("close")}async function l(){if(n.memory){r.value=!0;try{await s.updateMemory(n.memory.id,o.value.content),s.addLog("记忆已更新","success"),i("saved"),c()}catch(d){s.addLog("更新失败: "+d.message,"error")}finally{r.value=!1}}}async function u(){if(n.memory&&confirm("确定要删除这条记忆吗？此操作不可撤销。"))try{await s.deleteMemory(n.memory.id),s.addLog("记忆已删除","success"),i("deleted",n.memory.id),c()}catch(d){s.addLog("删除失败: "+d.message,"error")}}return(d,f)=>t.visible?(le(),de("div",{key:0,class:"memory-editor-modal",onClick:c},[x("div",{class:"modal-content",onClick:f[5]||(f[5]=lg(()=>{},["stop"]))},[x("div",{class:"modal-header"},[f[6]||(f[6]=x("h2",null,"编辑记忆",-1)),x("button",{class:"close-btn",onClick:c},"×")]),x("div",Ww,[x("div",$w,[f[7]||(f[7]=x("label",null,"标题",-1)),Ft(x("input",{"onUpdate:modelValue":f[0]||(f[0]=h=>o.value.title=h),type:"text",placeholder:"记忆标题"},null,512),[[on,o.value.title]])]),x("div",Xw,[f[8]||(f[8]=x("label",null,"内容",-1)),Ft(x("textarea",{"onUpdate:modelValue":f[1]||(f[1]=h=>o.value.content=h),rows:"10",placeholder:"记忆内容"},null,512),[[on,o.value.content]])]),x("div",qw,[f[9]||(f[9]=x("label",null,"关键词（用逗号分隔）",-1)),Ft(x("input",{"onUpdate:modelValue":f[2]||(f[2]=h=>a.value=h),type:"text",placeholder:"关键词1, 关键词2, ..."},null,512),[[on,a.value]])]),x("div",Yw,[x("div",jw,[f[11]||(f[11]=x("label",null,"作用域",-1)),Ft(x("select",{"onUpdate:modelValue":f[3]||(f[3]=h=>o.value.scope=h)},[...f[10]||(f[10]=[x("option",{value:"project"},"项目",-1),x("option",{value:"global"},"全局",-1)])],512),[[io,o.value.scope]])]),x("div",Kw,[f[13]||(f[13]=x("label",null,"记忆类型",-1)),Ft(x("select",{"onUpdate:modelValue":f[4]||(f[4]=h=>o.value.memory_type=h)},[...f[12]||(f[12]=[x("option",{value:"storage"},"存储记忆",-1),x("option",{value:"thinking"},"思维记忆",-1),x("option",{value:"skill"},"技能记忆",-1)])],512),[[io,o.value.memory_type]])])]),x("div",Jw,[x("button",{class:"btn-secondary",onClick:c},"取消"),t.memory?(le(),de("button",{key:0,class:"btn-danger",onClick:u},"删除")):Je("",!0),x("button",{class:"btn-primary",onClick:l,disabled:r.value},te(r.value?"保存中...":"保存"),9,Zw)])])])])):Je("",!0)}}),eT=vn(Qw,[["__scopeId","data-v-05d49056"]]),tT={class:"tiered-memory-panel panel"},nT={class:"tier-tabs"},iT=["onClick"],sT={class:"tier-icon"},rT={class:"write-section"},oT={class:"form-group"},aT={class:"form-group"},lT={class:"form-group"},cT=["disabled"],uT={class:"query-section"},fT={class:"query-form"},dT=["disabled"],hT={class:"query-results"},pT={key:0,class:"empty-placeholder"},mT=["onClick"],gT={class:"result-title"},_T={class:"result-preview"},vT={class:"result-meta"},xT={class:"result-time"},yT={class:"tier-stats"},ST={class:"stat-item"},MT={class:"stat-value"},bT={class:"stat-item"},ET={class:"stat-value"},wT={class:"stat-item"},TT={class:"stat-value"},AT=un({__name:"TieredMemoryPanel",emits:["memorySelect"],setup(t,{emit:e}){const n=e,i=_i(),s=h_(),r=[{label:"存储记忆",value:"storage",icon:"💾"},{label:"思维记忆",value:"thinking",icon:"💭"},{label:"技能记忆",value:"skill",icon:"⚡"}],o=we("storage"),a=we({title:"",content:"",keywords:""}),c=we(!1),l=we(""),u=we(!1),d=we([]),f=wt(()=>{var E;return((E=r.find(y=>y.value===o.value))==null?void 0:E.label)||""}),h=wt(()=>i.memoryCountByType);function g(E){o.value=E,d.value=[]}async function _(){if(!a.value.content.trim()){i.addLog("请输入记忆内容","warn");return}c.value=!0;try{const E=a.value.keywords.split(",").map(w=>w.trim()).filter(w=>w),y=s.getCurrentUserId;o.value==="storage"?await Vn.writeStorage({content:a.value.content,user_id:y,title:a.value.title,keywords:E}):o.value==="thinking"?await Vn.writeThinking({content:a.value.content,user_id:y,title:a.value.title,keywords:E}):o.value==="skill"&&await Vn.writeSkill({content:a.value.content,user_id:y,title:a.value.title,keywords:E}),i.addLog(`${f.value}写入成功`,"success"),a.value={title:"",content:"",keywords:""},await i.fetchStats()}catch(E){i.addLog("写入失败: "+E.message,"error")}finally{c.value=!1}}async function p(){if(!l.value.trim()){i.addLog("请输入查询内容","warn");return}u.value=!0;try{const E=await Vn.queryMemories({query:l.value,user_id:s.getCurrentUserId,memory_type:o.value,top_k:10});d.value=E.memories||[],i.addLog(`查询到 ${d.value.length} 条记忆`,"success")}catch(E){i.addLog("查询失败: "+E.message,"error")}finally{u.value=!1}}function m(E){n("memorySelect",E)}function v(E){return new Date(E).toLocaleString("zh-CN")}return(E,y)=>(le(),de("div",tT,[y[7]||(y[7]=x("h3",null,"三层记忆管理",-1)),x("div",nT,[(le(),de(ft,null,It(r,w=>x("button",{key:w.value,class:lt(["tier-tab",{active:o.value===w.value}]),onClick:R=>g(w.value)},[x("span",sT,te(w.icon),1),Ef(" "+te(w.label),1)],10,iT)),64))]),x("div",rT,[x("h4",null,"写入"+te(f.value),1),x("div",oT,[Ft(x("input",{"onUpdate:modelValue":y[0]||(y[0]=w=>a.value.title=w),type:"text",placeholder:"标题（可选）"},null,512),[[on,a.value.title]])]),x("div",aT,[Ft(x("textarea",{"onUpdate:modelValue":y[1]||(y[1]=w=>a.value.content=w),rows:"5",placeholder:"记忆内容..."},null,512),[[on,a.value.content]])]),x("div",lT,[Ft(x("input",{"onUpdate:modelValue":y[2]||(y[2]=w=>a.value.keywords=w),type:"text",placeholder:"关键词（逗号分隔）"},null,512),[[on,a.value.keywords]])]),x("button",{class:"btn-write",onClick:_,disabled:c.value},te(c.value?"写入中...":"写入记忆"),9,cT)]),x("div",uT,[x("h4",null,"查询"+te(f.value),1),x("div",fT,[Ft(x("input",{"onUpdate:modelValue":y[3]||(y[3]=w=>l.value=w),type:"text",placeholder:"输入查询内容...",onKeyup:Af(p,["enter"])},null,544),[[on,l.value]]),x("button",{onClick:p,disabled:u.value},te(u.value?"查询中...":"查询"),9,dT)]),x("div",hT,[d.value.length===0?(le(),de("div",pT," 暂无查询结果 ")):Je("",!0),(le(!0),de(ft,null,It(d.value,w=>{var R;return le(),de("div",{key:w.id,class:"result-item",onClick:D=>m(w)},[x("div",gT,te(w.title||"无标题"),1),x("div",_T,te((R=w.content)==null?void 0:R.substring(0,100))+"...",1),x("div",vT,[x("span",xT,te(v(w.timestamp)),1)])],8,mT)}),128))])]),x("div",yT,[x("div",ST,[y[4]||(y[4]=x("span",{class:"stat-label"},"存储层",-1)),x("span",MT,te(h.value.storage),1)]),x("div",bT,[y[5]||(y[5]=x("span",{class:"stat-label"},"思维层",-1)),x("span",ET,te(h.value.thinking),1)]),x("div",wT,[y[6]||(y[6]=x("span",{class:"stat-label"},"技能层",-1)),x("span",TT,te(h.value.skill),1)])])]))}}),RT=vn(AT,[["__scopeId","data-v-1b46c3c2"]]),CT={class:"llm-interactions-panel panel"},PT={class:"panel-header"},LT=["disabled"],DT={class:"stats-summary"},IT={class:"stat-item"},NT={class:"stat-value"},UT={class:"stat-item"},FT={class:"stat-value"},OT={class:"stat-item"},BT={class:"stat-value"},kT={class:"interactions-list"},zT={key:0,class:"loading-placeholder"},VT={key:1,class:"empty-placeholder"},HT=["onClick"],GT={class:"interaction-header"},WT={class:"interaction-model"},$T={class:"interaction-time"},XT={class:"interaction-stats"},qT={class:"token-info"},YT={class:"stat-badge input-token"},jT={class:"stat-badge output-token"},KT={key:0,class:"interaction-detail"},JT={class:"detail-section"},ZT={class:"detail-content prompt"},QT={class:"detail-section"},eA={class:"detail-content response"},tA={key:0,class:"pagination"},nA=["disabled"],iA={class:"page-info"},sA=["disabled"],ac=10,rA=un({__name:"LLMInteractions",setup(t){const e=we([]),n=we(!1),i=we(1),s=we(null),r=wt(()=>e.value.reduce((g,_)=>g+(_.input_tokens||0)+(_.output_tokens||0),0)),o=wt(()=>{if(e.value.length===0)return 0;const g=e.value.reduce((_,p)=>_+(p.response_time||0),0);return Math.round(g/e.value.length)}),a=wt(()=>Math.ceil(e.value.length/ac)),c=wt(()=>{const g=(i.value-1)*ac,_=g+ac;return e.value.slice(g,_)});async function l(){n.value=!0;try{const g=await TS.getInteractions(100);e.value=g.interactions||g.items||g||[]}catch(g){console.error("Failed to load LLM interactions:",g),e.value=[]}finally{n.value=!1}}function u(g){s.value=s.value===g?null:g}function d(g){return new Date(g).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function f(g,_){return g?g.length<=_?g:g.substring(0,_)+"...":""}function h(g){return g<1e3?"fast":g<3e3?"medium":"slow"}return gi(()=>{l()}),(g,_)=>(le(),de("div",CT,[x("div",PT,[_[2]||(_[2]=x("h3",null,"LLM 交互历史",-1)),x("button",{class:"refresh-btn",onClick:l,disabled:n.value},te(n.value?"加载中...":"刷新"),9,LT)]),x("div",DT,[x("div",IT,[_[3]||(_[3]=x("span",{class:"stat-label"},"总交互",-1)),x("span",NT,te(e.value.length),1)]),x("div",UT,[_[4]||(_[4]=x("span",{class:"stat-label"},"总Token",-1)),x("span",FT,te(r.value),1)]),x("div",OT,[_[5]||(_[5]=x("span",{class:"stat-label"},"平均响应",-1)),x("span",BT,te(o.value)+"ms",1)])]),x("div",kT,[n.value?(le(),de("div",zT," 加载中... ")):c.value.length===0?(le(),de("div",VT," 暂无交互记录 ")):(le(!0),de(ft,{key:2},It(c.value,p=>(le(),de("div",{key:p.id,class:"interaction-item",onClick:m=>u(p.id)},[x("div",GT,[x("span",WT,te(p.model),1),x("span",$T,te(d(p.timestamp)),1)]),x("div",XT,[x("span",qT,[x("span",YT,"输入: "+te(p.input_tokens||0),1),x("span",jT,"输出: "+te(p.output_tokens||0),1)]),x("span",{class:lt(["response-time",h(p.response_time)])},te(p.response_time||0)+"ms ",3)]),s.value===p.id?(le(),de("div",KT,[x("div",JT,[_[6]||(_[6]=x("div",{class:"detail-label"},"提示词:",-1)),x("div",ZT,te(f(p.prompt,500)),1)]),x("div",QT,[_[7]||(_[7]=x("div",{class:"detail-label"},"响应:",-1)),x("div",eA,te(f(p.response,500)),1)])])):Je("",!0)],8,HT))),128))]),a.value>1?(le(),de("div",tA,[x("button",{class:"page-btn",disabled:i.value===1,onClick:_[0]||(_[0]=p=>i.value--)}," 上一页 ",8,nA),x("span",iA,te(i.value)+" / "+te(a.value),1),x("button",{class:"page-btn",disabled:i.value===a.value,onClick:_[1]||(_[1]=p=>i.value++)}," 下一页 ",8,sA)])):Je("",!0)]))}}),oA=vn(rA,[["__scopeId","data-v-ab845488"]]),aA={class:"evolution-config panel"},lA={key:0,class:"config-content"},cA={class:"status-header"},uA={class:"status-text"},fA={class:"config-section"},dA={class:"profile-selector"},hA=["onClick","disabled"],pA={class:"profile-icon"},mA={class:"profile-name"},gA={class:"profile-desc"},_A={class:"config-section"},vA={class:"status-grid"},xA={class:"status-item"},yA={class:"status-item"},SA={class:"status-item"},MA={class:"status-item"},bA={class:"config-section"},EA={class:"stats-grid"},wA={class:"stat-item"},TA={class:"stat-value"},AA={class:"stat-item"},RA={class:"stat-value"},CA={class:"stat-item"},PA={class:"stat-value"},LA={class:"config-section"},DA={class:"time-info"},IA={class:"time-item"},NA={class:"time-value"},UA={class:"time-item"},FA={class:"time-value"},OA={class:"time-item"},BA={class:"time-value"},kA={class:"config-section"},zA={class:"activity-info"},VA={key:0,class:"activity-item"},HA={class:"activity-time"},GA={key:1,class:"activity-item"},WA={class:"activity-time"},$A={key:2,class:"activity-item"},XA={class:"activity-time"},qA={key:0,class:"reflection-note"},YA={key:0,class:"error-section"},jA={class:"error-message"},KA={class:"config-section"},JA={class:"llm-info"},ZA={class:"llm-item"},QA={key:0,class:"llm-item"},eR={class:"llm-value"},tR={key:1,class:"llm-item"},nR={class:"llm-value"},iR={key:1,class:"loading"},sR=un({__name:"EvolutionConfig",setup(t){const e=_i(),{evolutionStatus:n,currentProfile:i,isLoading:s}=Er(e),r=[{value:"light",label:"轻度",icon:"🐢",desc:"低频率扫描和反思，适合资源受限环境"},{value:"standard",label:"标准",icon:"🚀",desc:"平衡的扫描和反思频率，适合大多数场景"},{value:"aggressive",label:"激进",icon:"⚡",desc:"高频率扫描和反思，适合快速迭代场景"}],o=wt(()=>n.value?n.value.enabled?n.value.running?"运行中":"已暂停":"已停止":"未知"),a=wt(()=>{const d=r.find(f=>f.value===i.value);return(d==null?void 0:d.desc)||""});function c(d){return d?d<60?`${d} 秒`:d<3600?`${Math.floor(d/60)} 分钟`:`${Math.floor(d/3600)} 小时`:"-"}function l(d){if(!d)return"-";try{return new Date(d).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return d}}async function u(d){d!==i.value&&await e.setEvolutionProfile(d)}return gi(()=>{e.fetchEvolutionStatus()}),(d,f)=>{var h,g,_,p,m;return le(),de("div",aA,[f[24]||(f[24]=x("h3",null,"进化配置",-1)),Se(n)?(le(),de("div",lA,[x("div",cA,[x("div",{class:lt(["status-indicator",{active:Se(n).enabled&&Se(n).running}])},null,2),x("span",uA,te(o.value),1)]),x("div",fA,[f[0]||(f[0]=x("h4",null,"进化模式",-1)),x("div",dA,[(le(),de(ft,null,It(r,v=>x("button",{key:v.value,class:lt(["profile-btn",{active:Se(i)===v.value}]),onClick:E=>u(v.value),disabled:Se(s)},[x("span",pA,te(v.icon),1),x("span",mA,te(v.label),1)],10,hA)),64))]),x("div",gA,te(a.value),1)]),x("div",_A,[f[5]||(f[5]=x("h4",null,"运行状态",-1)),x("div",vA,[x("div",xA,[f[1]||(f[1]=x("span",{class:"item-label"},"扫描任务",-1)),x("span",{class:lt(["item-value",Se(n).scan_task_running?"running":"idle"])},te(Se(n).scan_task_running?"运行中":"空闲"),3)]),x("div",yA,[f[2]||(f[2]=x("span",{class:"item-label"},"反思任务",-1)),x("span",{class:lt(["item-value",Se(n).reflection_task_running?"running":"idle"])},te(Se(n).reflection_task_running?"运行中":"空闲"),3)]),x("div",SA,[f[3]||(f[3]=x("span",{class:"item-label"},"日反思",-1)),x("span",{class:lt(["item-value",(h=Se(n).daily_reflection)!=null&&h.running?"running":"idle"])},te((g=Se(n).daily_reflection)!=null&&g.running?"运行中":"空闲"),3)]),x("div",MA,[f[4]||(f[4]=x("span",{class:"item-label"},"自适应",-1)),x("span",{class:lt(["item-value",Se(n).adaptive?"active":"inactive"])},te(Se(n).adaptive?"开启":"关闭"),3)])])]),x("div",bA,[f[9]||(f[9]=x("h4",null,"统计数据",-1)),x("div",EA,[x("div",wA,[x("div",TA,te(Se(n).total_scanned),1),f[6]||(f[6]=x("div",{class:"stat-label"},"总扫描数",-1))]),x("div",AA,[x("div",RA,te(Se(n).last_scan_processed),1),f[7]||(f[7]=x("div",{class:"stat-label"},"上次处理",-1))]),x("div",CA,[x("div",PA,te(((_=Se(n).daily_reflection)==null?void 0:_.total_reflections)||0),1),f[8]||(f[8]=x("div",{class:"stat-label"},"反思次数",-1))])])]),x("div",LA,[f[13]||(f[13]=x("h4",null,"时间配置",-1)),x("div",DA,[x("div",IA,[f[10]||(f[10]=x("span",{class:"time-label"},"扫描间隔",-1)),x("span",NA,te(c(Se(n).scan_interval_seconds)),1)]),x("div",UA,[f[11]||(f[11]=x("span",{class:"time-label"},"反思间隔",-1)),x("span",FA,te(c(Se(n).reflection_interval_seconds)),1)]),x("div",OA,[f[12]||(f[12]=x("span",{class:"time-label"},"扫描批次",-1)),x("span",BA,te(Se(n).scan_batch_size)+" 条",1)])])]),x("div",kA,[f[17]||(f[17]=x("h4",null,"最近活动",-1)),x("div",zA,[Se(n).last_scan_time?(le(),de("div",VA,[f[14]||(f[14]=x("span",{class:"activity-label"},"上次扫描",-1)),x("span",HA,te(l(Se(n).last_scan_time)),1)])):Je("",!0),Se(n).last_reflection_time?(le(),de("div",GA,[f[15]||(f[15]=x("span",{class:"activity-label"},"上次反思",-1)),x("span",WA,te(l(Se(n).last_reflection_time)),1)])):Je("",!0),(p=Se(n).daily_reflection)!=null&&p.next_reflection?(le(),de("div",$A,[f[16]||(f[16]=x("span",{class:"activity-label"},"下次反思",-1)),x("span",XA,te(Se(n).daily_reflection.next_reflection),1)])):Je("",!0)]),Se(n).last_reflection_note?(le(),de("div",qA,te(Se(n).last_reflection_note),1)):Je("",!0)]),Se(n).last_error?(le(),de("div",YA,[f[18]||(f[18]=x("div",{class:"error-label"},"最近错误",-1)),x("div",jA,te(Se(n).last_error),1)])):Je("",!0),x("div",KA,[f[22]||(f[22]=x("h4",null,"LLM 配置",-1)),x("div",JA,[x("div",ZA,[f[19]||(f[19]=x("span",{class:"llm-label"},"LLM 状态",-1)),x("span",{class:lt(["llm-value",Se(n).llm_enabled?"enabled":"disabled"])},te(Se(n).llm_enabled?"已启用":"未启用"),3)]),Se(n).preferred_provider?(le(),de("div",QA,[f[20]||(f[20]=x("span",{class:"llm-label"},"提供商",-1)),x("span",eR,te(Se(n).preferred_provider),1)])):Je("",!0),(m=Se(n).available_providers)!=null&&m.length?(le(),de("div",tR,[f[21]||(f[21]=x("span",{class:"llm-label"},"可用提供商",-1)),x("span",nR,te(Se(n).available_providers.join(", ")),1)])):Je("",!0)])])])):(le(),de("div",iR,[...f[23]||(f[23]=[x("span",{class:"loading-text"},"加载中...",-1)])]))])}}}),rR=vn(sR,[["__scopeId","data-v-4154a459"]]),oR={class:"memory-feedback panel"},aR={class:"feedback-form"},lR={class:"form-group"},cR={class:"form-group"},uR={class:"rating-stars"},fR=["onClick"],dR={class:"rating-text"},hR={class:"form-group"},pR={class:"useful-buttons"},mR={class:"form-group"},gR=["disabled"],_R={class:"feedback-history"},vR={key:0,class:"empty-placeholder"},xR={class:"history-header"},yR={class:"history-id"},SR={class:"history-time"},MR={class:"history-content"},bR={class:"history-rating"},ER={key:0,class:"history-comment"},Gh="memory_feedback_history",wR=un({__name:"MemoryFeedback",setup(t){const e=_i(),n=we(""),i=we(0),s=we(null),r=we(""),o=we(!1),a=we([]);gi(()=>{c()});function c(){try{const d=localStorage.getItem(Gh);d&&(a.value=JSON.parse(d))}catch(d){console.error("加载反馈历史失败:",d)}}function l(){try{localStorage.setItem(Gh,JSON.stringify(a.value))}catch(d){console.error("保存反馈历史失败:",d)}}async function u(){if(!n.value.trim()){e.addLog("请输入记忆ID","warn");return}o.value=!0;try{await Vn.submitFeedback(n.value,{rating:i.value>0?i.value:void 0,useful:s.value===null?void 0:s.value,comment:r.value.trim()||void 0});const d={memoryId:n.value,rating:i.value,useful:s.value,comment:r.value,timestamp:new Date().toLocaleString("zh-CN")};a.value.unshift(d),a.value.length>20&&a.value.pop(),l(),e.addLog("反馈提交成功","success"),n.value="",i.value=0,s.value=null,r.value=""}catch(d){e.addLog("反馈提交失败: "+d.message,"error")}finally{o.value=!1}}return(d,f)=>(le(),de("div",oR,[f[10]||(f[10]=x("h3",null,"记忆反馈",-1)),x("div",aR,[f[8]||(f[8]=x("h4",null,"提交反馈",-1)),x("div",lR,[f[4]||(f[4]=x("label",null,"记忆ID",-1)),Ft(x("input",{"onUpdate:modelValue":f[0]||(f[0]=h=>n.value=h),type:"text",placeholder:"输入记忆ID..."},null,512),[[on,n.value]])]),x("div",cR,[f[5]||(f[5]=x("label",null,"评分",-1)),x("div",uR,[(le(),de(ft,null,It(5,h=>x("span",{key:h,class:lt(["star",{active:i.value>=h}]),onClick:g=>i.value=h},"★",10,fR)),64)),x("span",dR,te(i.value>0?`${i.value} 星`:"未评分"),1)])]),x("div",hR,[f[6]||(f[6]=x("label",null,"有用性",-1)),x("div",pR,[x("button",{class:lt(["useful-btn",{active:s.value===!0}]),onClick:f[1]||(f[1]=h=>s.value=!0)},"是",2),x("button",{class:lt(["useful-btn",{active:s.value===!1}]),onClick:f[2]||(f[2]=h=>s.value=!1)},"否",2)])]),x("div",mR,[f[7]||(f[7]=x("label",null,"评论",-1)),Ft(x("textarea",{"onUpdate:modelValue":f[3]||(f[3]=h=>r.value=h),rows:"3",placeholder:"输入您的反馈评论..."},null,512),[[on,r.value]])]),x("button",{class:"btn-submit",onClick:u,disabled:o.value||!n.value},te(o.value?"提交中...":"提交反馈"),9,gR)]),x("div",_R,[f[9]||(f[9]=x("h4",null,"反馈历史",-1)),a.value.length===0?(le(),de("div",vR," 暂无反馈记录 ")):Je("",!0),(le(!0),de(ft,null,It(a.value,(h,g)=>(le(),de("div",{key:g,class:"history-item"},[x("div",xR,[x("span",yR,te(h.memoryId.substring(0,8))+"...",1),x("span",SR,te(h.timestamp),1)]),x("div",MR,[x("span",bR,[(le(),de(ft,null,It(5,_=>x("span",{key:_,class:lt(["mini-star",{active:h.rating>=_}])},"★",2)),64))]),x("span",{class:lt(["history-useful",h.useful?"yes":"no"])},te(h.useful?"有用":"无用"),3)]),h.comment?(le(),de("div",ER,te(h.comment),1)):Je("",!0)]))),128))])]))}}),TR=vn(wR,[["__scopeId","data-v-f389155a"]]),AR={class:"merge-chain-viewer panel"},RR={class:"header"},CR={key:0,class:"empty-placeholder"},PR={key:1,class:"loading-overlay"},LR={key:2,class:"error-message"},DR={class:"chain-info"},IR={class:"info-item"},NR={class:"info-value"},UR={class:"info-item"},FR={class:"info-value"},OR={class:"info-item"},BR={class:"info-value"},kR={key:0,class:"merge-history"},zR={class:"history-list"},VR={class:"history-time"},HR={class:"history-desc"},GR={key:4,class:"empty-placeholder"},WR=un({__name:"MergeChainViewer",props:{memoryId:{},showClose:{type:Boolean}},emits:["close","nodeClick"],setup(t,{emit:e}){const n=t,i=e,s=_i(),r=we(),o=we(!1),a=we(null),c=we(null);let l=null,u=null;Fi(()=>n.memoryId,v=>{v?d(v):(c.value=null,f())},{immediate:!0}),gi(()=>{n.memoryId&&d(n.memoryId)}),To(()=>{u&&u.stop()});async function d(v){o.value=!0,a.value=null;try{const E=await Vn.getMergeChain(v);c.value=E,s.addLog("合并链加载成功","success"),await wo(),r.value&&E&&h(E)}catch(E){a.value="加载合并链失败: "+E.message,s.addLog("加载合并链失败","error")}finally{o.value=!1}}function f(){l&&l.selectAll("*").remove()}function h(v){if(!r.value)return;f();const E=r.value.clientWidth,y=280;l=_r(r.value).append("svg").attr("width",E).attr("height",y);const w=[],R=[];if(v.current&&w.push({id:v.current.id,title:v.current.title||v.current.id,type:"current"}),v.sources&&v.sources.length>0&&v.sources.forEach(N=>{w.push({id:N.id,title:N.title||N.id,type:"source"}),R.push({source:N.id,target:v.current.id,relation:"merged_to"})}),w.length===0)return;u=u_(w).force("link",c_(R).id(N=>N.id).distance(80)).force("charge",f_().strength(-200)).force("center",o_(E/2,y/2)).force("collision",l_().radius(35)),l.append("defs").append("marker").attr("id","arrowhead-merge").attr("viewBox","-0 -5 10 10").attr("refX",25).attr("refY",0).attr("orient","auto").attr("markerWidth",6).attr("markerHeight",6).append("path").attr("d","M 0,-5 L 10,0 L 0,5").attr("fill","#00ff41");const S=l.append("g").selectAll("line").data(R).enter().append("line").attr("stroke","#00ff41").attr("stroke-opacity",.6).attr("stroke-width",2).attr("marker-end","url(#arrowhead-merge)"),M=l.append("g").selectAll("g").data(w).enter().append("g").style("cursor","pointer").call(qg().on("start",g).on("drag",_).on("end",p)).on("click",(N,P)=>{i("nodeClick",P)});M.append("circle").attr("r",N=>N.type==="current"?20:15).attr("fill",N=>N.type==="current"?"#00ff41":"rgba(0, 255, 65, 0.3)").attr("stroke","#00ff41").attr("stroke-width",2),M.append("text").attr("dy",4).attr("text-anchor","middle").attr("fill",N=>N.type==="current"?"#000":"#00ff41").attr("font-size","10px").attr("font-weight","bold").text(N=>N.title.length>6?N.title.substring(0,6)+"...":N.title),M.append("title").text(N=>`${N.title}
${N.memory_type||"未知类型"}`),u.on("tick",()=>{S.attr("x1",N=>N.source.x).attr("y1",N=>N.source.y).attr("x2",N=>N.target.x).attr("y2",N=>N.target.y),M.attr("transform",N=>`translate(${N.x},${N.y})`)})}function g(v){!v.active&&u&&u.alphaTarget(.3).restart(),v.subject.fx=v.subject.x,v.subject.fy=v.subject.y}function _(v){v.subject.fx=v.x,v.subject.fy=v.y}function p(v){!v.active&&u&&u.alphaTarget(0),v.subject.fx=null,v.subject.fy=null}function m(v){return v?new Date(v).toLocaleString("zh-CN"):"-"}return(v,E)=>{var y,w,R,D;return le(),de("div",AR,[x("div",RR,[E[1]||(E[1]=x("h3",null,"记忆合并链",-1)),t.showClose?(le(),de("button",{key:0,class:"btn-close",onClick:E[0]||(E[0]=S=>i("close"))},"×")):Je("",!0)]),t.memoryId?o.value?(le(),de("div",PR,[...E[3]||(E[3]=[x("div",{class:"loading-spinner"},null,-1),x("p",null,"加载合并链中...",-1)])])):a.value?(le(),de("div",LR,[x("p",null,te(a.value),1)])):c.value?(le(),de(ft,{key:3},[x("div",DR,[x("div",IR,[E[4]||(E[4]=x("span",{class:"info-label"},"当前记忆",-1)),x("span",NR,te(((y=c.value.current)==null?void 0:y.title)||((w=c.value.current)==null?void 0:w.id)),1)]),x("div",UR,[E[5]||(E[5]=x("span",{class:"info-label"},"合并深度",-1)),x("span",FR,te(c.value.depth||0),1)]),x("div",OR,[E[6]||(E[6]=x("span",{class:"info-label"},"来源数量",-1)),x("span",BR,te(((R=c.value.sources)==null?void 0:R.length)||0),1)])]),x("div",{ref_key:"graphContainer",ref:r,class:"graph-container"},null,512),(D=c.value.merge_history)!=null&&D.length?(le(),de("div",kR,[E[7]||(E[7]=x("h4",null,"合并历史",-1)),x("div",zR,[(le(!0),de(ft,null,It(c.value.merge_history,(S,M)=>(le(),de("div",{key:M,class:"history-item"},[x("div",VR,te(m(S.timestamp)),1),x("div",HR,te(S.description||"合并操作"),1)]))),128))])])):Je("",!0)],64)):(le(),de("div",GR,[...E[8]||(E[8]=[x("p",null,"暂无合并链数据",-1)])])):(le(),de("div",CR,[...E[2]||(E[2]=[x("p",null,"请选择一个记忆查看其合并链",-1)])]))])}}}),$R=vn(WR,[["__scopeId","data-v-09b8e911"]]),p_=Rf("brain",()=>{const t=we(null),e=we(!1),n=we(null),i=we(null);async function s(){e.value=!0,n.value=null;try{const C=await fetch("/brain/status");if(!C.ok)throw new Error("Failed to fetch brain status");t.value=await C.json(),i.value=new Date}catch(C){n.value="获取AI大脑状态失败",console.error("Failed to fetch brain status:",C)}finally{e.value=!1}}async function r(C,L={}){e.value=!0,n.value=null;try{const G=await fetch("/brain/input",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:C,context:L})});if(!G.ok)throw new Error("Failed to process input");return await G.json()}catch(G){throw n.value="处理输入失败",console.error("Failed to process input:",G),G}finally{e.value=!1}}async function o(C,L={}){e.value=!0,n.value=null;try{const G=await fetch("/brain/retrieve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:C,context:L})});if(!G.ok)throw new Error("Failed to retrieve memory");return await G.json()}catch(G){throw n.value="检索记忆失败",console.error("Failed to retrieve memory:",G),G}finally{e.value=!1}}async function a(){e.value=!0,n.value=null;try{const C=await fetch("/brain/reflection",{method:"POST",headers:{"Content-Type":"application/json"}});if(!C.ok)throw new Error("Failed to trigger reflection");return await C.json()}catch(C){throw n.value="触发自我反思失败",console.error("Failed to trigger reflection:",C),C}finally{e.value=!1}}async function c(C){e.value=!0,n.value=null;try{const L=await fetch("/brain/hypotheses",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({context:C})});if(!L.ok)throw new Error("Failed to generate hypotheses");return(await L.json()).hypotheses}catch(L){throw n.value="生成假设失败",console.error("Failed to generate hypotheses:",L),L}finally{e.value=!1}}async function l(C){e.value=!0,n.value=null;try{const L=await fetch("/brain/hypotheses/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hypothesis:C})});if(!L.ok)throw new Error("Failed to test hypothesis");return await L.json()}catch(L){throw n.value="测试假设失败",console.error("Failed to test hypothesis:",L),L}finally{e.value=!1}}async function u(C){e.value=!0,n.value=null;try{const L=await fetch("/brain/evolve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({experiences:C})});if(!L.ok)throw new Error("Failed to evolve brain");return await L.json()}catch(L){throw n.value="进化AI大脑失败",console.error("Failed to evolve brain:",L),L}finally{e.value=!1}}function d(){var C;return(C=t.value)==null?void 0:C.self_awareness}function f(){var C;return(C=t.value)==null?void 0:C.active_cognition}function h(){var C;return(C=t.value)==null?void 0:C.value_system}function g(){var C;return(C=t.value)==null?void 0:C.dynamic_memory}function _(){var C;return(C=t.value)==null?void 0:C.metacognition}function p(){if(!t.value)return[];const C=[],L=new Date;for(let G=6;G>=0;G--){const ae=new Date(L);ae.setDate(ae.getDate()-G),C.push({date:ae.toISOString().split("T")[0],success_rate:.6+Math.random()*.35})}return C}function m(){var C,L,G;return((G=(L=(C=t.value)==null?void 0:C.self_awareness)==null?void 0:L.capabilities)==null?void 0:G.slice(0,6))||[]}function v(){var C,L,G;return((G=(L=(C=t.value)==null?void 0:C.self_awareness)==null?void 0:L.goals)==null?void 0:G.slice(0,4))||[]}function E(){var L,G;const C=((G=(L=t.value)==null?void 0:L.value_system)==null?void 0:G.weights)||{};return{novelty:C.novelty||.25,utility:C.utility||.25,emotional:C.emotional||.25,frequency:C.frequency||.25}}function y(C){return(C*100).toFixed(0)+"%"}function w(C){return C>.7?"high":C>.4?"medium":"low"}function R(C){return C>.7?"high":C>.4?"medium":"low"}function D(C){return C>.8?"high":C>.5?"medium":"low"}function S(C){if(!C)return"N/A";const L=C.total_score||0;return L>=.75?"高价值":L>=.5?"中等价值":"低价值"}function M(C){return{accuracy:"准确性",efficiency:"效率",creativity:"创造性",empathy:"同理心",learning:"学习能力",safety:"安全性",curiosity:"好奇心",reliability:"可靠性",novelty:"新颖性",utility:"实用性",emotional:"情感强度",frequency:"使用频率"}[C]||C}function N(C){return C>.05?"up":C<-.05?"down":"stable"}function P(C){const L=N(C);return L==="up"?"📈":L==="down"?"📉":"➡️"}function F(){n.value=null}async function k(){try{const C=await fetch("/brain/export");if(!C.ok)throw new Error("Export failed");return await C.json()}catch(C){throw n.value="导出大脑状态失败",console.error("Export failed:",C),C}}async function V(C){try{const L=await fetch("/brain/import",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)});if(!L.ok)throw new Error("Import failed");return await L.json()}catch(L){throw n.value="导入大脑状态失败",console.error("Import failed:",L),L}}async function U(){try{const C=await fetch("/brain/compatibility");if(!C.ok)throw new Error("Compatibility check failed");return await C.json()}catch(C){throw n.value="兼容性检查失败",console.error("Compatibility check failed:",C),C}}return{brainStatus:t,isLoading:e,error:n,lastUpdate:i,fetchBrainStatus:s,processInput:r,retrieveMemory:o,triggerSelfReflection:a,generateHypotheses:c,testHypothesis:l,evolveBrain:u,getSelfAwareness:d,getCognitionStatus:f,getValueSystem:h,getDynamicMemory:g,getMetacognition:_,getLearningTrends:p,getDisplayedCapabilities:m,getTopGoals:v,getValueChart:E,formatPercent:y,getLoadClass:w,getFocusClass:R,getConfidenceClass:D,formatValueCategory:S,formatValueName:M,getTrendClass:N,getTrendIcon:P,clearError:F,exportBrain:k,importBrain:V,checkCompatibility:U}}),XR={class:"brain-status panel"},qR={class:"awareness-section"},YR={class:"awareness-grid"},jR={class:"awareness-card"},KR={class:"card-content"},JR={class:"card-value"},ZR={class:"card-version"},QR={class:"awareness-card"},eC={class:"card-content"},tC={class:"capabilities-list"},nC={class:"awareness-card"},iC={class:"card-content"},sC={key:0,class:"goals-list"},rC={class:"goal-progress"},oC={class:"goal-name"},aC=["value"],lC={key:1,class:"no-goals"},cC={class:"awareness-card"},uC={class:"card-content"},fC={class:"evolution-info"},dC={class:"evolution-generation"},hC={class:"total-experiences"},pC={class:"cognition-section"},mC={class:"cognition-grid"},gC={class:"cognition-card"},_C={class:"card-content"},vC={class:"cognition-stats"},xC={class:"stat-row"},yC={class:"stat-value"},SC={class:"stat-row"},MC={class:"stat-value"},bC={class:"cognition-card"},EC={class:"card-content"},wC={class:"cognition-stats"},TC={class:"stat-row"},AC={class:"stat-value"},RC={class:"stat-row"},CC={class:"stat-value"},PC={class:"value-section"},LC={class:"value-stats"},DC={class:"value-chart"},IC={class:"chart-item"},NC={class:"chart-item"},UC={class:"chart-item"},FC={class:"chart-item"},OC={class:"memory-section"},BC={class:"memory-stats"},kC={class:"memory-pie"},zC={class:"metacognition-section"},VC={class:"metacognition-stats"},HC={class:"meta-grid"},GC={class:"meta-item"},WC={class:"meta-item"},$C={class:"meta-item"},XC={key:0,class:"detected-biases"},qC={class:"biases-list"},YC={class:"status-footer"},jC={class:"cycle-info"},KC={class:"cycle-count"},JC={class:"last-update"},ZC=["disabled"],QC=un({__name:"BrainStatus",setup(t){const e=p_(),{isLoading:n,lastUpdate:i}=Er(e),s=wt(()=>e.getValueChart()),r=wt(()=>i.value?i.value.toLocaleTimeString("zh-CN"):"从未更新"),o=wt(()=>{const l=e.getMetacognition();return(l==null?void 0:l.detected_biases)||[]});let a=null;gi(()=>{e.fetchBrainStatus(),a=window.setInterval(()=>{e.fetchBrainStatus()},5e3)}),Sf(()=>{a&&clearInterval(a)});function c(){e.fetchBrainStatus()}return(l,u)=>{var d,f,h,g,_,p,m,v,E,y,w,R,D,S,M,N,P,F,k,V,U,C,L,G,ae,fe;return le(),de("div",XR,[u[30]||(u[30]=x("h3",null,"🧠 AI大脑状态",-1)),x("div",qR,[u[8]||(u[8]=x("h4",null,"自我意识",-1)),x("div",YR,[x("div",jR,[u[1]||(u[1]=x("div",{class:"card-icon"},"🤖",-1)),x("div",KR,[u[0]||(u[0]=x("div",{class:"card-title"},"身份认知",-1)),x("div",JR,te(((d=Se(e).getSelfAwareness())==null?void 0:d.identity)||"AI Brain"),1),x("div",ZR,"v"+te(((f=Se(e).getSelfAwareness())==null?void 0:f.version)||"1.0.0"),1)])]),x("div",QR,[u[3]||(u[3]=x("div",{class:"card-icon"},"⚡",-1)),x("div",eC,[u[2]||(u[2]=x("div",{class:"card-title"},"核心能力",-1)),x("div",tC,[(le(!0),de(ft,null,It(Se(e).getDisplayedCapabilities(),he=>(le(),de("div",{key:he},te(he),1))),128))])])]),x("div",nC,[u[5]||(u[5]=x("div",{class:"card-icon"},"🎯",-1)),x("div",iC,[u[4]||(u[4]=x("div",{class:"card-title"},"当前目标",-1)),Se(e).getTopGoals().length>0?(le(),de("div",sC,[(le(!0),de(ft,null,It(Se(e).getTopGoals(),he=>(le(),de("div",{key:he.goal_id},[x("div",rC,[x("span",oC,te(he.description),1),x("progress",{value:he.progress*100,max:"100"},null,8,aC)])]))),128))])):(le(),de("div",lC,"暂无活跃目标"))])]),x("div",cC,[u[7]||(u[7]=x("div",{class:"card-icon"},"💎",-1)),x("div",uC,[u[6]||(u[6]=x("div",{class:"card-title"},"进化状态",-1)),x("div",fC,[x("div",dC,"第 "+te(((h=Se(e).getSelfAwareness())==null?void 0:h.evolution_generation)||0)+" 代",1),x("div",hC,te(((g=Se(e).getSelfAwareness())==null?void 0:g.total_experiences)||0)+" 次经验",1)])])])])]),x("div",pC,[u[17]||(u[17]=x("h4",null,"主动认知",-1)),x("div",mC,[x("div",gC,[u[12]||(u[12]=x("div",{class:"card-icon"},"👁️",-1)),x("div",_C,[u[11]||(u[11]=x("div",{class:"card-title"},"注意力系统",-1)),x("div",vC,[x("div",xC,[u[9]||(u[9]=x("span",{class:"stat-label"},"阈值",-1)),x("span",yC,te(((p=(_=Se(e).getCognitionStatus())==null?void 0:_.attention_threshold)==null?void 0:p.toFixed(2))||"N/A"),1)]),x("div",SC,[u[10]||(u[10]=x("span",{class:"stat-label"},"待处理问题",-1)),x("span",MC,te(((m=Se(e).getCognitionStatus())==null?void 0:m.pending_questions)||0),1)])])])]),x("div",bC,[u[16]||(u[16]=x("div",{class:"card-icon"},"🔍",-1)),x("div",EC,[u[15]||(u[15]=x("div",{class:"card-title"},"好奇心引擎",-1)),x("div",wC,[x("div",TC,[u[13]||(u[13]=x("span",{class:"stat-label"},"好奇心水平",-1)),x("span",AC,te(Se(e).formatPercent(((v=Se(e).getCognitionStatus())==null?void 0:v.curiosity_level)||0)),1)]),x("div",RC,[u[14]||(u[14]=x("span",{class:"stat-label"},"待验证假设",-1)),x("span",CC,te(((E=Se(e).getCognitionStatus())==null?void 0:E.pending_hypotheses)||0),1)])])])])])]),x("div",PC,[u[22]||(u[22]=x("h4",null,"价值判断系统",-1)),x("div",LC,[x("div",DC,[x("div",IC,[x("div",{class:"chart-bar",style:Bn({width:s.value.novelty*100+"%"})},null,4),u[18]||(u[18]=x("div",{class:"chart-label"},"新颖性",-1))]),x("div",NC,[x("div",{class:"chart-bar",style:Bn({width:s.value.utility*100+"%"})},null,4),u[19]||(u[19]=x("div",{class:"chart-label"},"实用性",-1))]),x("div",UC,[x("div",{class:"chart-bar",style:Bn({width:s.value.emotional*100+"%"})},null,4),u[20]||(u[20]=x("div",{class:"chart-label"},"情感强度",-1))]),x("div",FC,[x("div",{class:"chart-bar",style:Bn({width:s.value.frequency*100+"%"})},null,4),u[21]||(u[21]=x("div",{class:"chart-label"},"使用频率",-1))])])])]),x("div",OC,[u[24]||(u[24]=x("h4",null,"动态记忆",-1)),x("div",BC,[x("div",kC,[x("div",{class:"pie-segment active",style:Bn({flex:((y=Se(e).getDynamicMemory())==null?void 0:y.active_memories)||0})},null,4),x("div",{class:"pie-segment consolidated",style:Bn({flex:((w=Se(e).getDynamicMemory())==null?void 0:w.consolidated_memories)||0})},null,4),x("div",{class:"pie-segment decaying",style:Bn({flex:((R=Se(e).getDynamicMemory())==null?void 0:R.decaying_memories)||0})},null,4),x("div",{class:"pie-segment forgotten",style:Bn({flex:((D=Se(e).getDynamicMemory())==null?void 0:D.forgotten_memories)||0})},null,4),u[23]||(u[23]=ng('<div class="pie-legend" data-v-50b29f8a><div class="legend-item active" data-v-50b29f8a></div> 活跃 <div class="legend-item consolidated" data-v-50b29f8a></div> 巩固 <div class="legend-item decaying" data-v-50b29f8a></div> 衰退 <div class="legend-item forgotten" data-v-50b29f8a></div> 遗忘 </div>',1))])])]),x("div",zC,[u[29]||(u[29]=x("h4",null,"元认知",-1)),x("div",VC,[x("div",HC,[x("div",GC,[u[25]||(u[25]=x("div",{class:"meta-label"},"认知负荷",-1)),x("div",{class:lt(["meta-value",Se(e).getLoadClass(((M=(S=Se(e).getMetacognition())==null?void 0:S.current_state)==null?void 0:M.cognitive_load)||0)])},te(Se(e).formatPercent(((P=(N=Se(e).getMetacognition())==null?void 0:N.current_state)==null?void 0:P.cognitive_load)||0)),3)]),x("div",WC,[u[26]||(u[26]=x("div",{class:"meta-label"},"专注度",-1)),x("div",{class:lt(["meta-value",Se(e).getFocusClass(((k=(F=Se(e).getMetacognition())==null?void 0:F.current_state)==null?void 0:k.focus_level)||0)])},te(Se(e).formatPercent(((U=(V=Se(e).getMetacognition())==null?void 0:V.current_state)==null?void 0:U.focus_level)||0)),3)]),x("div",$C,[u[27]||(u[27]=x("div",{class:"meta-label"},"自信度",-1)),x("div",{class:lt(["meta-value",Se(e).getConfidenceClass(((L=(C=Se(e).getMetacognition())==null?void 0:C.current_state)==null?void 0:L.confidence_level)||0)])},te(Se(e).formatPercent(((ae=(G=Se(e).getMetacognition())==null?void 0:G.current_state)==null?void 0:ae.confidence_level)||0)),3)])]),o.value.length>0?(le(),de("div",XC,[u[28]||(u[28]=x("h5",null,"检测到的认知偏差",-1)),x("div",qC,[(le(!0),de(ft,null,It(o.value,he=>(le(),de("div",{key:he,class:"bias-item"},te(he),1))),128))])])):Je("",!0)])]),x("div",YC,[x("div",jC,[x("span",KC,"总周期: "+te(((fe=Se(e).brainStatus)==null?void 0:fe.total_cycles)||0),1),x("span",JC,"最后更新: "+te(r.value),1)]),x("button",{onClick:c,disabled:Se(n),class:"refresh-btn"},te(Se(n)?"刷新中...":"刷新状态"),9,ZC)])])}}}),eP=vn(QC,[["__scopeId","data-v-50b29f8a"]]),tP={class:"brain-interaction panel"},nP={class:"interaction-section"},iP={class:"input-form"},sP={class:"form-actions"},rP=["disabled"],oP={key:0,class:"result-display"},aP={class:"result-content"},lP={class:"result-section"},cP={class:"result-value"},uP={class:"result-section"},fP={class:"result-value"},dP={key:0,class:"result-section"},hP={class:"result-value"},pP={key:1,class:"result-actions"},mP={class:"actions-tags"},gP={key:2,class:"result-questions"},_P={class:"questions-list"},vP={class:"interaction-section"},xP={class:"retrieval-form"},yP=["disabled"],SP={key:0,class:"result-display"},MP={class:"results-list"},bP={class:"memory-content"},EP={class:"memory-meta"},wP={class:"meta-relevance"},TP={key:0,class:"meta-type"},AP={key:1,class:"result-display empty"},RP={class:"interaction-section"},CP={class:"reflection-actions"},PP=["disabled"],LP={key:0,class:"result-display"},DP={class:"reflection-summary"},IP={class:"summary-item"},NP={class:"summary-value"},UP={class:"summary-item"},FP={class:"summary-value"},OP={class:"summary-item"},BP={key:0,class:"summary-item"},kP={class:"recommendations-list"},zP={class:"interaction-section"},VP={class:"hypothesis-form"},HP=["disabled"],GP={key:0,class:"hypotheses-list"},WP={class:"hypothesis-content"},$P={class:"hypothesis-description"},XP={class:"hypothesis-confidence"},qP={class:"hypothesis-actions"},YP=["onClick","disabled"],jP={key:1,class:"empty-message"},KP=un({__name:"BrainInteraction",setup(t){const e=p_(),n=we(""),i=we(""),s=we(!1),r=we(!1),o=we(!1),a=we(!1),c=we(!1),l=we(null),u=we(null),d=we(null),f=we([]),h=we(!1);async function g(){if(n.value.trim()){s.value=!0,l.value=null;try{const S=await e.processInput(n.value);l.value=S}catch(S){console.error("Failed to process input:",S),alert("处理输入失败: "+S.message)}finally{s.value=!1}}}function _(){n.value="",l.value=null}async function p(){if(i.value.trim()){r.value=!0,u.value=null;try{const S=await e.retrieveMemory(i.value);u.value=S}catch(S){console.error("Failed to retrieve memory:",S),alert("检索记忆失败: "+S.message)}finally{r.value=!1}}}async function m(){o.value=!0,d.value=null;try{const S=await e.triggerSelfReflection();d.value=S,setTimeout(()=>e.fetchBrainStatus(),2e3)}catch(S){console.error("Failed to trigger reflection:",S),alert("触发自我反思失败: "+S.message)}finally{o.value=!1}}async function v(){const S="基于当前记忆系统的分析";a.value=!0,h.value=!0,f.value=[];try{const M=await e.generateHypotheses(S);f.value=M}catch(M){console.error("Failed to generate hypotheses:",M),alert("生成假设失败: "+M.message)}finally{a.value=!1}}async function E(S){c.value=!0;try{await e.testHypothesis(S),alert("假设测试已启动，请稍后查看结果"),S.status="testing"}catch(M){console.error("Failed to test hypothesis:",M),alert("测试假设失败: "+M.message)}finally{c.value=!1}}function y(S){return e.formatValueCategory(S)}function w(S){return{memory_created:"创建记忆",associations_created:"创建联想",content_filtered:"内容过滤",questions_generated:"生成问题"}[S]||S}function R(S){return{storage:"存储",thinking:"思维",skill:"技能"}[S]||S}function D(S){return{pending:"待验证",testing:"测试中",confirmed:"已确认",rejected:"已拒绝"}[S]||S}return(S,M)=>{var N,P,F,k,V,U,C,L,G,ae;return le(),de("div",tP,[M[18]||(M[18]=x("h3",null,"🧠 AI大脑交互",-1)),x("div",nP,[M[8]||(M[8]=x("h4",null,"认知处理",-1)),x("div",iP,[Ft(x("textarea",{"onUpdate:modelValue":M[0]||(M[0]=fe=>n.value=fe),placeholder:"输入要让AI大脑处理的内容...",class:"brain-input",rows:"4"},null,512),[[on,n.value]]),x("div",sP,[x("button",{onClick:g,disabled:s.value},te(s.value?"处理中...":"处理输入"),9,rP),x("button",{onClick:_,class:"secondary"},"清除")])]),l.value?(le(),de("div",oP,[M[7]||(M[7]=x("h5",null,"处理结果",-1)),x("div",aP,[x("div",lP,[M[2]||(M[2]=x("span",{class:"result-label"},"注意力分数:",-1)),x("span",cP,te((N=l.value.attention_score)==null?void 0:N.toFixed(2)),1)]),x("div",uP,[M[3]||(M[3]=x("span",{class:"result-label"},"价值评估:",-1)),x("span",fP,te(y(l.value.value_assessment)),1)]),((P=l.value.memories_created)==null?void 0:P.length)>0?(le(),de("div",dP,[M[4]||(M[4]=x("span",{class:"result-label"},"创建记忆:",-1)),x("span",hP,te(l.value.memories_created.length)+" 条",1)])):Je("",!0),(F=l.value.actions_taken)!=null&&F.length?(le(),de("div",pP,[M[5]||(M[5]=x("span",{class:"actions-label"},"执行操作:",-1)),x("div",mP,[(le(!0),de(ft,null,It(l.value.actions_taken,fe=>(le(),de("span",{key:fe,class:"action-tag"},te(w(fe)),1))),128))])])):Je("",!0),l.value.questions_generated&&l.value.questions_generated.length>0?(le(),de("div",gP,[M[6]||(M[6]=x("span",{class:"questions-label"},"生成问题:",-1)),x("div",_P,[(le(!0),de(ft,null,It(l.value.questions_generated,(fe,he)=>(le(),de("div",{key:he,class:"question-item"},te(fe),1))),128))])])):Je("",!0)])])):Je("",!0)]),x("div",vP,[M[10]||(M[10]=x("h4",null,"智能检索",-1)),x("div",xP,[Ft(x("input",{"onUpdate:modelValue":M[1]||(M[1]=fe=>i.value=fe),placeholder:"输入检索查询...",class:"retrieval-input",onKeyup:Af(p,["enter"])},null,544),[[on,i.value]]),x("button",{onClick:p,disabled:r.value},te(r.value?"检索中...":"检索记忆"),9,yP)]),u.value&&u.value.memories&&u.value.memories.length>0?(le(),de("div",SP,[x("h5",null,"检索结果 (置信度: "+te(((k=u.value.confidence)==null?void 0:k.toFixed(2))||"N/A")+")",1),x("div",MP,[(le(!0),de(ft,null,It(u.value.memories,fe=>{var he;return le(),de("div",{key:fe.memory_id,class:"memory-item"},[x("div",bP,te(fe.content||"记忆内容..."),1),x("div",EP,[x("span",wP,"相关度: "+te((he=fe.relevance)==null?void 0:he.toFixed(2)),1),fe.memory_type?(le(),de("span",TP,"类型: "+te(R(fe.memory_type)),1)):Je("",!0)])])}),128))])])):u.value?(le(),de("div",AP,[...M[9]||(M[9]=[x("h5",null,"检索结果",-1),x("p",{class:"empty-message"},"未找到相关记忆",-1)])])):Je("",!0)]),x("div",RP,[M[16]||(M[16]=x("h4",null,"自我反思",-1)),x("div",CP,[x("button",{onClick:m,disabled:o.value},te(o.value?"反思中...":"触发自我反思"),9,PP)]),d.value?(le(),de("div",LP,[M[15]||(M[15]=x("h5",null,"反思结果",-1)),x("div",DP,[x("div",IP,[M[11]||(M[11]=x("span",{class:"summary-label"},"记忆总数:",-1)),x("span",NP,te(((V=d.value.memory_state)==null?void 0:V.total_memories)||"N/A"),1)]),x("div",UP,[M[12]||(M[12]=x("span",{class:"summary-label"},"学习效率:",-1)),x("span",FP,te(((C=(U=d.value.learning_efficiency)==null?void 0:U.efficiency_score)==null?void 0:C.toFixed(2))||"N/A"),1)]),x("div",OP,[M[13]||(M[13]=x("span",{class:"summary-label"},"认知偏差:",-1)),x("span",{class:lt(["summary-value",{"has-biases":((L=d.value.detected_biases)==null?void 0:L.length)>0}])},te(((G=d.value.detected_biases)==null?void 0:G.length)||0)+" 个 ",3)]),((ae=d.value.recommendations)==null?void 0:ae.length)>0?(le(),de("div",BP,[M[14]||(M[14]=x("span",{class:"summary-label"},"建议:",-1)),x("div",kP,[(le(!0),de(ft,null,It(d.value.recommendations.slice(0,3),(fe,he)=>(le(),de("div",{key:he,class:"recommendation-item"},te(fe),1))),128))])])):Je("",!0)])])):Je("",!0)]),x("div",zP,[M[17]||(M[17]=x("h4",null,"假设推理",-1)),x("div",VP,[x("button",{onClick:v,disabled:a.value}," 生成假设 ",8,HP),f.value.length>0?(le(),de("div",GP,[(le(!0),de(ft,null,It(f.value,fe=>{var he,ve;return le(),de("div",{key:fe.hypothesis_id,class:"hypothesis-item"},[x("div",WP,[x("span",$P,te(fe.description),1),x("span",XP," 置信度: "+te((he=fe.confidence)==null?void 0:he.toFixed(2)),1),x("span",{class:lt(["hypothesis-status",(ve=fe.status)==null?void 0:ve.toLowerCase()])},te(D(fe.status)),3)]),x("div",qP,[x("button",{onClick:We=>E(fe),size:"small",disabled:c.value}," 测试 ",8,YP)])])}),128))])):h.value?(le(),de("div",jP," 暂无假设 ")):Je("",!0)])])])}}}),JP=vn(KP,[["__scopeId","data-v-7a4e23dd"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gf="183",ZP=0,Wh=1,QP=2,Da=1,e3=2,Xr=3,ls=0,_n=1,Ni=2,Oi=0,dr=1,mu=2,$h=3,Xh=4,t3=5,Ts=100,n3=101,i3=102,s3=103,r3=104,o3=200,a3=201,l3=202,c3=203,gu=204,_u=205,u3=206,f3=207,d3=208,h3=209,p3=210,m3=211,g3=212,_3=213,v3=214,vu=0,xu=1,yu=2,xr=3,Su=4,Mu=5,bu=6,Eu=7,Wf=0,x3=1,y3=2,ui=0,m_=1,g_=2,__=3,v_=4,x_=5,y_=6,S_=7,M_=300,ks=301,yr=302,lc=303,cc=304,Ul=306,wu=1e3,Ui=1001,Tu=1002,Gt=1003,S3=1004,jo=1005,Zt=1006,uc=1007,Ps=1008,bn=1009,b_=1010,E_=1011,vo=1012,$f=1013,hi=1014,ri=1015,Gi=1016,Xf=1017,qf=1018,xo=1020,w_=35902,T_=35899,A_=1021,R_=1022,Hn=1023,Wi=1026,Ls=1027,C_=1028,Yf=1029,Sr=1030,jf=1031,Kf=1033,Ia=33776,Na=33777,Ua=33778,Fa=33779,Au=35840,Ru=35841,Cu=35842,Pu=35843,Lu=36196,Du=37492,Iu=37496,Nu=37488,Uu=37489,Fu=37490,Ou=37491,Bu=37808,ku=37809,zu=37810,Vu=37811,Hu=37812,Gu=37813,Wu=37814,$u=37815,Xu=37816,qu=37817,Yu=37818,ju=37819,Ku=37820,Ju=37821,Zu=36492,Qu=36494,ef=36495,tf=36283,nf=36284,sf=36285,rf=36286,M3=3200,P_=0,b3=1,ss="",In="srgb",Mr="srgb-linear",nl="linear",_t="srgb",$s=7680,qh=519,E3=512,w3=513,T3=514,Jf=515,A3=516,R3=517,Zf=518,C3=519,Yh=35044,jh="300 es",oi=2e3,yo=2001;function P3(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function L3(){const t=il("canvas");return t.style.display="block",t}const Kh={};function Jh(...t){const e="THREE."+t.shift();console.log(e,...t)}function L_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function qe(...t){t=L_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ut(...t){t=L_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function sl(...t){const e=t.join(" ");e in Kh||(Kh[e]=!0,qe(...t))}function D3(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const I3={[vu]:xu,[yu]:bu,[Su]:Eu,[xr]:Mu,[xu]:vu,[bu]:yu,[Eu]:Su,[Mu]:xr};class Tr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=Math.PI/180,of=180/Math.PI;function Uo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function st(t,e,n){return Math.max(e,Math.min(n,t))}function N3(t,e){return(t%e+e)%e}function dc(t,e,n){return(1-n)*t+n*e}function Nr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,n=0){ot.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ar{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||c!==f||l!==h||u!==g){let p=c*f+l*h+u*g+d*_;p<0&&(f=-f,h=-h,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){const v=Math.acos(p),E=Math.sin(v);m=Math.sin(m*v)/E,a=Math.sin(a*v)/E,c=c*m+f*a,l=l*m+h*a,u=u*m+g*a,d=d*m+_*a}else{c=c*m+f*a,l=l*m+h*a,u=u*m+g*a,d=d*m+_*a;const v=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=v,l*=v,u*=v,d*=v}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return e[n]=a*g+u*d+c*h-l*f,e[n+1]=c*g+u*f+l*d-a*h,e[n+2]=l*g+u*h+a*f-c*d,e[n+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),f=c(i/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-n;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+o*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hc=new $,Zh=new Ar;class et{constructor(e,n,i,s,r,o,a,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,c,l)}set(e,n,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=s[0],p=s[3],m=s[6],v=s[1],E=s[4],y=s[7],w=s[2],R=s[5],D=s[8];return r[0]=o*_+a*v+c*w,r[3]=o*p+a*E+c*R,r[6]=o*m+a*y+c*D,r[1]=l*_+u*v+d*w,r[4]=l*p+u*E+d*R,r[7]=l*m+u*y+d*D,r[2]=f*_+h*v+g*w,r[5]=f*p+h*E+g*R,r[8]=f*m+h*y+g*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*r,h=l*r-o*c,g=n*d+i*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*n-s*c)*_,e[5]=(s*r-a*n)*_,e[6]=h*_,e[7]=(i*c-l*n)*_,e[8]=(o*n-i*r)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pc.makeScale(e,n)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new et,Qh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function U3(){const t={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?nl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return sl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return sl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Mr]:{primaries:e,whitePoint:i,transfer:nl,toXYZ:Qh,fromXYZ:ep,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Qh,fromXYZ:ep,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),t}const at=U3();function Bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function hr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xs;class F3{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xs===void 0&&(Xs=il("canvas")),Xs.width=e.width,Xs.height=e.height;const s=Xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Xs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=il("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bi(n[i]/255)*255):n[i]=Bi(n[i]);return{data:n,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O3=0;class Qf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O3++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mc(s[o].image)):r.push(mc(s[o]))}else r=mc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function mc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?F3.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let B3=0;const gc=new $;class ln extends Tr{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Ui,s=Ui,r=Zt,o=Ps,a=Hn,c=bn,l=ln.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B3++}),this.uuid=Uo(),this.name="",this.source=new Qf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gc).x}get height(){return this.source.getSize(gc).y}get depth(){return this.source.getSize(gc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){qe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){qe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==M_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wu:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case Tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wu:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case Tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=M_;ln.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,s=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(l+1)/2,y=(h+1)/2,w=(m+1)/2,R=(u+f)/4,D=(d+_)/4,S=(g+p)/4;return E>y&&E>w?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=R/i,r=D/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=R/s,r=S/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=D/r,s=S/r),this.set(i,s,r,n),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(f-u)/v,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this.w=st(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this.w=st(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k3 extends Tr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new ln(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Qf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends k3{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class D_ extends ln{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class z3 extends ln{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class At{constructor(e,n,i,s,r,o,a,c,l,u,d,f,h,g,_,p){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,c,l,u,d,f,h,g,_,p)}set(e,n,i,s,r,o,a,c,l,u,d,f,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,_=a*d;n[0]=c*u,n[4]=-c*d,n[8]=l,n[1]=h+g*l,n[5]=f-_*l,n[9]=-a*c,n[2]=_-f*l,n[6]=g+h*l,n[10]=o*c}else if(e.order==="YXZ"){const f=c*u,h=c*d,g=l*u,_=l*d;n[0]=f+_*a,n[4]=g*a-h,n[8]=o*l,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=_+f*a,n[10]=o*c}else if(e.order==="ZXY"){const f=c*u,h=c*d,g=l*u,_=l*d;n[0]=f-_*a,n[4]=-o*d,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,_=a*d;n[0]=c*u,n[4]=g*l-h,n[8]=f*l+_,n[1]=c*d,n[5]=_*l+f,n[9]=h*l-g,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const f=o*c,h=o*l,g=a*c,_=a*l;n[0]=c*u,n[4]=_-f*d,n[8]=g*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=h*d+g,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*c,h=o*l,g=a*c,_=a*l;n[0]=c*u,n[4]=-d,n[8]=l*u,n[1]=f*d+_,n[5]=o*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=a*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V3,e,H3)}lookAt(e,n,i){const s=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),ji.crossVectors(i,yn),ji.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),ji.crossVectors(i,yn)),ji.normalize(),Ko.crossVectors(yn,ji),s[0]=ji.x,s[4]=Ko.x,s[8]=yn.x,s[1]=ji.y,s[5]=Ko.y,s[9]=yn.y,s[2]=ji.z,s[6]=Ko.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],p=i[10],m=i[14],v=i[3],E=i[7],y=i[11],w=i[15],R=s[0],D=s[4],S=s[8],M=s[12],N=s[1],P=s[5],F=s[9],k=s[13],V=s[2],U=s[6],C=s[10],L=s[14],G=s[3],ae=s[7],fe=s[11],he=s[15];return r[0]=o*R+a*N+c*V+l*G,r[4]=o*D+a*P+c*U+l*ae,r[8]=o*S+a*F+c*C+l*fe,r[12]=o*M+a*k+c*L+l*he,r[1]=u*R+d*N+f*V+h*G,r[5]=u*D+d*P+f*U+h*ae,r[9]=u*S+d*F+f*C+h*fe,r[13]=u*M+d*k+f*L+h*he,r[2]=g*R+_*N+p*V+m*G,r[6]=g*D+_*P+p*U+m*ae,r[10]=g*S+_*F+p*C+m*fe,r[14]=g*M+_*k+p*L+m*he,r[3]=v*R+E*N+y*V+w*G,r[7]=v*D+E*P+y*U+w*ae,r[11]=v*S+E*F+y*C+w*fe,r[15]=v*M+E*k+y*L+w*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15],v=c*h-l*f,E=a*h-l*d,y=a*f-c*d,w=o*h-l*u,R=o*f-c*u,D=o*d-a*u;return n*(_*v-p*E+m*y)-i*(g*v-p*w+m*R)+s*(g*E-_*w+m*D)-r*(g*y-_*R+p*D)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=n*a-i*o,E=n*c-s*o,y=n*l-r*o,w=i*c-s*a,R=i*l-r*a,D=s*l-r*c,S=u*_-d*g,M=u*p-f*g,N=u*m-h*g,P=d*p-f*_,F=d*m-h*_,k=f*m-h*p,V=v*k-E*F+y*P+w*N-R*M+D*S;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/V;return e[0]=(a*k-c*F+l*P)*U,e[1]=(s*F-i*k-r*P)*U,e[2]=(_*D-p*R+m*w)*U,e[3]=(f*R-d*D-h*w)*U,e[4]=(c*N-o*k-l*M)*U,e[5]=(n*k-s*N+r*M)*U,e[6]=(p*y-g*D-m*E)*U,e[7]=(u*D-f*y+h*E)*U,e[8]=(o*F-a*N+l*S)*U,e[9]=(i*N-n*F-r*S)*U,e[10]=(g*R-_*y+m*v)*U,e[11]=(d*y-u*R-h*v)*U,e[12]=(a*M-o*P-c*S)*U,e[13]=(n*P-i*M+s*S)*U,e[14]=(_*E-g*w-p*v)*U,e[15]=(u*w-d*E+f*v)*U,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,u=o+o,d=a+a,f=r*l,h=r*u,g=r*d,_=o*u,p=o*d,m=a*d,v=c*l,E=c*u,y=c*d,w=i.x,R=i.y,D=i.z;return s[0]=(1-(_+m))*w,s[1]=(h+y)*w,s[2]=(g-E)*w,s[3]=0,s[4]=(h-y)*R,s[5]=(1-(f+m))*R,s[6]=(p+v)*R,s[7]=0,s[8]=(g+E)*D,s[9]=(p-v)*D,s[10]=(1-(f+_))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=qs.set(s[0],s[1],s[2]).length();const a=qs.set(s[4],s[5],s[6]).length(),c=qs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Un.copy(this);const l=1/o,u=1/a,d=1/c;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,n.setFromRotationMatrix(Un),i.x=o,i.y=a,i.z=c,this}makePerspective(e,n,i,s,r,o,a=oi,c=!1){const l=this.elements,u=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===oi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===yo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=oi,c=!1){const l=this.elements,u=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),h=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===oi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===yo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qs=new $,Un=new At,V3=new $(0,0,0),H3=new $(1,1,1),ji=new $,Ko=new $,yn=new $,tp=new At,np=new Ar;class pi{constructor(e=0,n=0,i=0,s=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class I_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let G3=0;const ip=new $,Ys=new Ar,Ei=new At,Jo=new $,Ur=new $,W3=new $,$3=new Ar,sp=new $(1,0,0),rp=new $(0,1,0),op=new $(0,0,1),ap={type:"added"},X3={type:"removed"},js={type:"childadded",child:null},_c={type:"childremoved",child:null};class Qt extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G3++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new $,n=new pi,i=new Ar,s=new $(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new et}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(sp,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(op,e)}translateOnAxis(e,n){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sp,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Jo.copy(e):Jo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Ur,Jo,this.up):Ei.lookAt(Jo,Ur,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Ei),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ap),js.child=e,this.dispatchEvent(js),js.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(X3),_c.child=e,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ap),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,W3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,$3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Qt.DEFAULT_UP=new $(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qr extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q3={type:"move"};class vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q3)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const N_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function xc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=at.workingColorSpace){if(e=N3(e,1),n=st(n,0,1),i=st(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=xc(o,r,e+1/3),this.g=xc(o,r,e),this.b=xc(o,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,n=In){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=N_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return at.workingToColorSpace(qt.copy(this),e),Math.round(st(qt.r*255,0,255))*65536+Math.round(st(qt.g*255,0,255))*256+Math.round(st(qt.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.workingToColorSpace(qt.copy(this),n);const i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=at.workingColorSpace){return at.workingToColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=In){at.workingToColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,s=qt.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+n,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ki),e.getHSL(Zo);const i=dc(Ki.h,Zo.h,n),s=dc(Ki.s,Zo.s,n),r=dc(Ki.l,Zo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new it;it.NAMES=N_;class ed{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(e),this.density=n}clone(){return new ed(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Y3 extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fn=new $,wi=new $,yc=new $,Ti=new $,Ks=new $,Js=new $,lp=new $,Sc=new $,Mc=new $,bc=new $,Ec=new Ct,wc=new Ct,Tc=new Ct;class zn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Fn.subVectors(e,n),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Fn.subVectors(s,n),wi.subVectors(i,n),yc.subVectors(e,n);const o=Fn.dot(Fn),a=Fn.dot(wi),c=Fn.dot(yc),l=wi.dot(wi),u=wi.dot(yc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-h-g,g,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,s,r,o,a,c){return this.getBarycoord(e,n,i,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static getInterpolatedAttribute(e,n,i,s,r,o){return Ec.setScalar(0),wc.setScalar(0),Tc.setScalar(0),Ec.fromBufferAttribute(e,n),wc.fromBufferAttribute(e,i),Tc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ec,r.x),o.addScaledVector(wc,r.y),o.addScaledVector(Tc,r.z),o}static isFrontFacing(e,n,i,s){return Fn.subVectors(i,n),wi.subVectors(e,n),Fn.cross(wi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Fn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Ks.subVectors(s,i),Js.subVectors(r,i),Sc.subVectors(e,i);const c=Ks.dot(Sc),l=Js.dot(Sc);if(c<=0&&l<=0)return n.copy(i);Mc.subVectors(e,s);const u=Ks.dot(Mc),d=Js.dot(Mc);if(u>=0&&d<=u)return n.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(Ks,o);bc.subVectors(e,r);const h=Ks.dot(bc),g=Js.dot(bc);if(g>=0&&h<=g)return n.copy(r);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),n.copy(i).addScaledVector(Js,a);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return lp.subVectors(r,s),a=(d-u)/(d-u+(h-g)),n.copy(s).addScaledVector(lp,a);const m=1/(p+_+f);return o=_*m,a=f*m,n.copy(i).addScaledVector(Ks,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fo{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),ea.subVectors(this.max,Fr),Zs.subVectors(e.a,Fr),Qs.subVectors(e.b,Fr),er.subVectors(e.c,Fr),Ji.subVectors(Qs,Zs),Zi.subVectors(er,Qs),gs.subVectors(Zs,er);let n=[0,-Ji.z,Ji.y,0,-Zi.z,Zi.y,0,-gs.z,gs.y,Ji.z,0,-Ji.x,Zi.z,0,-Zi.x,gs.z,0,-gs.x,-Ji.y,Ji.x,0,-Zi.y,Zi.x,0,-gs.y,gs.x,0];return!Ac(n,Zs,Qs,er,ea)||(n=[1,0,0,0,1,0,0,0,1],!Ac(n,Zs,Qs,er,ea))?!1:(ta.crossVectors(Ji,Zi),n=[ta.x,ta.y,ta.z],Ac(n,Zs,Qs,er,ea))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new $,new $,new $,new $,new $,new $,new $,new $],On=new $,Qo=new Fo,Zs=new $,Qs=new $,er=new $,Ji=new $,Zi=new $,gs=new $,Fr=new $,ea=new $,ta=new $,_s=new $;function Ac(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){_s.fromArray(t,r);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),c=e.dot(_s),l=n.dot(_s),u=i.dot(_s);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ut=new $,na=new ot;let j3=0;class Rn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:j3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yh,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)na.fromBufferAttribute(this,n),na.applyMatrix3(e),this.setXY(n,na.x,na.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Nr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Nr(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Nr(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Nr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Nr(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yh&&(e.usage=this.usage),e}}class U_ extends Rn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class F_ extends Rn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Wt extends Rn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const K3=new Fo,Or=new $,Rc=new $;class Oo{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):K3.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);const n=Or.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Or,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Rc)),this.expandByPoint(Or.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let J3=0;const Dn=new At,Cc=new Qt,tr=new $,Sn=new Fo,Br=new Fo,Vt=new $;class cn extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J3++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P3(e)?F_:U_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wt(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(Sn.min,Br.min),Sn.expandByPoint(Vt),Vt.addVectors(Sn.max,Br.max),Sn.expandByPoint(Vt)):(Sn.expandByPoint(Br.min),Sn.expandByPoint(Br.max))}Sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Vt.fromBufferAttribute(a,l),c&&(tr.fromBufferAttribute(e,l),Vt.add(tr)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let S=0;S<i.count;S++)a[S]=new $,c[S]=new $;const l=new $,u=new $,d=new $,f=new ot,h=new ot,g=new ot,_=new $,p=new $;function m(S,M,N){l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,N),f.fromBufferAttribute(r,S),h.fromBufferAttribute(r,M),g.fromBufferAttribute(r,N),u.sub(l),d.sub(l),h.sub(f),g.sub(f);const P=1/(h.x*g.y-g.x*h.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(P),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(P),a[S].add(_),a[M].add(_),a[N].add(_),c[S].add(p),c[M].add(p),c[N].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let S=0,M=v.length;S<M;++S){const N=v[S],P=N.start,F=N.count;for(let k=P,V=P+F;k<V;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new $,y=new $,w=new $,R=new $;function D(S){w.fromBufferAttribute(s,S),R.copy(w);const M=a[S];E.copy(M),E.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(R,M);const P=y.dot(c[S])<0?-1:1;o.setXYZW(S,E.x,E.y,E.z,P)}for(let S=0,M=v.length;S<M;++S){const N=v[S],P=N.start,F=N.count;for(let k=P,V=P+F;k<V;k+=3)D(e.getX(k+0)),D(e.getX(k+1)),D(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new $,r=new $,o=new $,a=new $,c=new $,l=new $,u=new $,d=new $;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let h=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?h=c[_]*a.data.stride+a.offset:h=c[_]*u;for(let m=0;m<u;m++)f[g++]=l[h++]}return new Rn(f,u,d)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);n.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=e(f,i);c.push(h)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(n))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Z3=0;class zs extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z3++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=dr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gu,this.blendDst=_u,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){qe(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){qe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gu&&(i.blendSrc=this.blendSrc),this.blendDst!==_u&&(i.blendDst=this.blendDst),this.blendEquation!==Ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ri=new $,Pc=new $,ia=new $,Qi=new $,Lc=new $,sa=new $,Dc=new $;class td{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Pc.copy(e).add(n).multiplyScalar(.5),ia.copy(n).sub(e).normalize(),Qi.copy(this.origin).sub(Pc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(ia),a=Qi.dot(this.direction),c=-Qi.dot(ia),l=Qi.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Pc).addScaledVector(ia,f),h}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),s=Ri.dot(Ri)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,s,r){Lc.subVectors(n,e),sa.subVectors(i,e),Dc.crossVectors(Lc,sa);let o=this.direction.dot(Dc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const c=a*this.direction.dot(sa.crossVectors(Qi,sa));if(c<0)return null;const l=a*this.direction.dot(Lc.cross(Qi));if(l<0||c+l>o)return null;const u=-a*Qi.dot(Dc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nd extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cp=new At,vs=new td,ra=new Oo,up=new $,oa=new $,aa=new $,la=new $,Ic=new $,ca=new $,fp=new $,ua=new $;class Tn extends Qt{constructor(e=new cn,n=new nd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ca.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Ic.fromBufferAttribute(d,e),o?ca.addScaledVector(Ic,u):ca.addScaledVector(Ic.sub(n),u))}n.add(ca)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(ra.containsPoint(vs.origin)===!1&&(vs.intersectSphere(ra,up)===null||vs.origin.distanceToSquared(up)>(e.far-e.near)**2))&&(cp.copy(r).invert(),vs.copy(e.ray).applyMatrix4(cp),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vs)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],v=Math.max(p.start,h.start),E=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let y=v,w=E;y<w;y+=3){const R=a.getX(y),D=a.getX(y+1),S=a.getX(y+2);s=fa(this,m,e,i,l,u,d,R,D,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const v=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);s=fa(this,o,e,i,l,u,d,v,E,y),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],v=Math.max(p.start,h.start),E=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let y=v,w=E;y<w;y+=3){const R=y,D=y+1,S=y+2;s=fa(this,m,e,i,l,u,d,R,D,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const v=p,E=p+1,y=p+2;s=fa(this,o,e,i,l,u,d,v,E,y),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}}}function Q3(t,e,n,i,s,r,o,a){let c;if(e.side===_n?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ls,a),c===null)return null;ua.copy(a),ua.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(ua);return l<n.near||l>n.far?null:{distance:l,point:ua.clone(),object:t}}function fa(t,e,n,i,s,r,o,a,c,l){t.getVertexPosition(a,oa),t.getVertexPosition(c,aa),t.getVertexPosition(l,la);const u=Q3(t,e,n,i,oa,aa,la,fp);if(u){const d=new $;zn.getBarycoord(fp,oa,aa,la,d),s&&(u.uv=zn.getInterpolatedAttribute(s,a,c,l,d,new ot)),r&&(u.uv1=zn.getInterpolatedAttribute(r,a,c,l,d,new ot)),o&&(u.normal=zn.getInterpolatedAttribute(o,a,c,l,d,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new $,materialIndex:0};zn.getNormal(oa,aa,la,f.normal),u.face=f,u.barycoord=d}return u}class e2 extends ln{constructor(e=null,n=1,i=1,s,r,o,a,c,l=Gt,u=Gt,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nc=new $,t2=new $,n2=new et;class bs{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Nc.subVectors(i,n).cross(t2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Nc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||n2.getNormalMatrix(e),s=this.coplanarPoint(Nc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Oo,i2=new ot(.5,.5),da=new $;class id{constructor(e=new bs,n=new bs,i=new bs,s=new bs,r=new bs,o=new bs){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],h=r[7],g=r[8],_=r[9],p=r[10],m=r[11],v=r[12],E=r[13],y=r[14],w=r[15];if(s[0].setComponents(l-o,h-u,m-g,w-v).normalize(),s[1].setComponents(l+o,h+u,m+g,w+v).normalize(),s[2].setComponents(l+a,h+d,m+_,w+E).normalize(),s[3].setComponents(l-a,h-d,m-_,w-E).normalize(),i)s[4].setComponents(c,f,p,y).normalize(),s[5].setComponents(l-c,h-f,m-p,w-y).normalize();else if(s[4].setComponents(l-c,h-f,m-p,w-y).normalize(),n===oi)s[5].setComponents(l+c,h+f,m+p,w+y).normalize();else if(n===yo)s[5].setComponents(c,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const n=i2.distanceTo(e.center);return xs.radius=.7071067811865476+n,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(da.x=s.normal.x>0?e.max.x:e.min.x,da.y=s.normal.y>0?e.max.y:e.min.y,da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O_ extends zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rl=new $,ol=new $,dp=new At,kr=new td,ha=new Oo,Uc=new $,hp=new $;class s2 extends Qt{constructor(e=new cn,n=new O_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)rl.fromBufferAttribute(n,s-1),ol.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=rl.distanceTo(ol);e.setAttribute("lineDistance",new Wt(i,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,e.ray.intersectsSphere(ha)===!1)return;dp.copy(s).invert(),kr.copy(e.ray).applyMatrix4(dp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,p=g-1;_<p;_+=l){const m=u.getX(_),v=u.getX(_+1),E=pa(this,e,kr,c,m,v,_);E&&n.push(E)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(h),m=pa(this,e,kr,c,_,p,g-1);m&&n.push(m)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=h,p=g-1;_<p;_+=l){const m=pa(this,e,kr,c,_,_+1,_);m&&n.push(m)}if(this.isLineLoop){const _=pa(this,e,kr,c,g-1,h,g-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pa(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(rl.fromBufferAttribute(a,s),ol.fromBufferAttribute(a,r),n.distanceSqToSegment(rl,ol,Uc,hp)>i)return;Uc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Uc);if(!(l<e.near||l>e.far))return{distance:l,point:hp.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const pp=new $,mp=new $;class r2 extends s2{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)pp.fromBufferAttribute(n,s),mp.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+pp.distanceTo(mp);e.setAttribute("lineDistance",new Wt(i,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B_ extends zs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gp=new At,af=new td,ma=new Oo,ga=new $;class o2 extends Qt{constructor(e=new cn,n=new B_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;gp.copy(s).invert(),af.copy(e.ray).applyMatrix4(gp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,_=h;g<_;g++){const p=l.getX(g);ga.fromBufferAttribute(d,p),_p(ga,p,c,s,e,n,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,_=h;g<_;g++)ga.fromBufferAttribute(d,g),_p(ga,g,c,s,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _p(t,e,n,i,s,r,o){const a=af.distanceSqToPoint(t);if(a<n){const c=new $;af.closestPointToPoint(t,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class k_ extends ln{constructor(e=[],n=ks,i,s,r,o,a,c,l,u){super(e,n,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class So extends ln{constructor(e,n,i=hi,s,r,o,a=Gt,c=Gt,l,u=Wi,d=1){if(u!==Wi&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class a2 extends So{constructor(e,n=hi,i=ks,s,r,o=Gt,a=Gt,c,l=Wi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class z_ extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bo extends cn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(d,2));function g(_,p,m,v,E,y,w,R,D,S,M){const N=y/D,P=w/S,F=y/2,k=w/2,V=R/2,U=D+1,C=S+1;let L=0,G=0;const ae=new $;for(let fe=0;fe<C;fe++){const he=fe*P-k;for(let ve=0;ve<U;ve++){const We=ve*N-F;ae[_]=We*v,ae[p]=he*E,ae[m]=V,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[p]=0,ae[m]=R>0?1:-1,u.push(ae.x,ae.y,ae.z),d.push(ve/D),d.push(1-fe/S),L+=1}}for(let fe=0;fe<S;fe++)for(let he=0;he<D;he++){const ve=f+he+U*fe,We=f+he+U*(fe+1),dt=f+(he+1)+U*(fe+1),pt=f+(he+1)+U*fe;c.push(ve,We,pt),c.push(We,dt,pt),G+=6}a.addGroup(h,G,M),h+=G,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sd extends cn{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(r.slice(),3)),this.setAttribute("uv",new Wt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const E=new $,y=new $,w=new $;for(let R=0;R<n.length;R+=3)h(n[R+0],E),h(n[R+1],y),h(n[R+2],w),c(E,y,w,v)}function c(v,E,y,w){const R=w+1,D=[];for(let S=0;S<=R;S++){D[S]=[];const M=v.clone().lerp(y,S/R),N=E.clone().lerp(y,S/R),P=R-S;for(let F=0;F<=P;F++)F===0&&S===R?D[S][F]=M:D[S][F]=M.clone().lerp(N,F/P)}for(let S=0;S<R;S++)for(let M=0;M<2*(R-S)-1;M++){const N=Math.floor(M/2);M%2===0?(f(D[S][N+1]),f(D[S+1][N]),f(D[S][N])):(f(D[S][N+1]),f(D[S+1][N+1]),f(D[S+1][N]))}}function l(v){const E=new $;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(v),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function u(){const v=new $;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];const y=p(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;o.push(y,1-w)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const E=o[v+0],y=o[v+2],w=o[v+4],R=Math.max(E,y,w),D=Math.min(E,y,w);R>.9&&D<.1&&(E<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function h(v,E){const y=v*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function g(){const v=new $,E=new $,y=new $,w=new $,R=new ot,D=new ot,S=new ot;for(let M=0,N=0;M<r.length;M+=9,N+=6){v.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),R.set(o[N+0],o[N+1]),D.set(o[N+2],o[N+3]),S.set(o[N+4],o[N+5]),w.copy(v).add(E).add(y).divideScalar(3);const P=p(w);_(R,N+0,v,P),_(D,N+2,E,P),_(S,N+4,y,P)}}function _(v,E,y,w){w<0&&v.x===1&&(o[E]=v.x-1),y.x===0&&y.z===0&&(o[E]=w/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sd(e.vertices,e.indices,e.radius,e.detail)}}class al extends sd{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new al(e.radius,e.detail)}}class Fl extends cn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,f=n/c,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const v=m*f-o;for(let E=0;E<l;E++){const y=E*d-r;g.push(y,-v,0),_.push(0,0,1),p.push(E/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const E=v+l*m,y=v+l*(m+1),w=v+1+l*(m+1),R=v+1+l*m;h.push(E,y,R),h.push(y,w,R)}this.setIndex(h),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ll extends cn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new $,f=new $,h=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const v=[],E=m/i;let y=0;m===0&&o===0?y=.5/n:m===i&&c===Math.PI&&(y=-.5/n);for(let w=0;w<=n;w++){const R=w/n;d.x=-e*Math.cos(s+R*r)*Math.sin(o+E*a),d.y=e*Math.cos(o+E*a),d.z=e*Math.sin(s+R*r)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(R+y,1-E),v.push(l++)}u.push(v)}for(let m=0;m<i;m++)for(let v=0;v<n;v++){const E=u[m][v+1],y=u[m][v],w=u[m+1][v],R=u[m+1][v+1];(m!==0||o>0)&&h.push(E,y,R),(m!==i-1||c<Math.PI)&&h.push(y,w,R)}this.setIndex(h),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function br(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=br(t[n]);for(const s in i)e[s]=i[s]}return e}function l2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function V_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const c2={clone:br,merge:tn};var u2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u2,this.fragmentShader=f2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=l2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class d2 extends mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fc extends zs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new it(16777215),this.specular=new it(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=P_,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Wf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class h2 extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p2 extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class H_ extends Qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Oc=new At,vp=new $,xp=new $;class m2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new id,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;vp.setFromMatrixPosition(e.matrixWorld),n.position.copy(vp),xp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(xp),n.updateMatrixWorld(),Oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===yo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _a=new $,va=new Ar,Kn=new $;class G_ extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_a,va,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,va,Kn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(_a,va,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,va,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const es=new $,yp=new ot,Sp=new ot;class Mn extends G_{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=of*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return of*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,n){return this.getViewBounds(e,yp,Sp),n.subVectors(Sp,yp)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class g2 extends m2{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}}class xa extends H_{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new g2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class W_ extends G_{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class _2 extends H_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const nr=-90,ir=1;class v2 extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(nr,ir,e,n);s.layers=this.layers,this.add(s);const r=new Mn(nr,ir,e,n);r.layers=this.layers,this.add(r);const o=new Mn(nr,ir,e,n);o.layers=this.layers,this.add(o);const a=new Mn(nr,ir,e,n);a.layers=this.layers,this.add(a);const c=new Mn(nr,ir,e,n);c.layers=this.layers,this.add(c);const l=new Mn(nr,ir,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,c]=n;for(const l of n)this.remove(l);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class x2 extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Mp(t,e,n,i){const s=y2(i);switch(n){case A_:return t*e;case C_:return t*e/s.components*s.byteLength;case Yf:return t*e/s.components*s.byteLength;case Sr:return t*e*2/s.components*s.byteLength;case jf:return t*e*2/s.components*s.byteLength;case R_:return t*e*3/s.components*s.byteLength;case Hn:return t*e*4/s.components*s.byteLength;case Kf:return t*e*4/s.components*s.byteLength;case Ia:case Na:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Fa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ru:case Pu:return Math.max(t,16)*Math.max(e,8)/4;case Au:case Cu:return Math.max(t,8)*Math.max(e,8)/2;case Lu:case Du:case Nu:case Uu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Iu:case Fu:case Ou:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ku:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case zu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $u:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case qu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ju:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ku:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ju:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Zu:case Qu:case ef:return Math.ceil(t/4)*Math.ceil(e/4)*16;case tf:case nf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case sf:case rf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function y2(t){switch(t){case bn:case b_:return{byteLength:1,components:1};case vo:case E_:case Gi:return{byteLength:2,components:1};case Xf:case qf:return{byteLength:2,components:4};case hi:case $f:case ri:return{byteLength:4,components:1};case w_:case T_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gf}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $_(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function S2(t){const e=new WeakMap;function n(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=t.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=t.SHORT;else if(l instanceof Uint32Array)h=t.UNSIGNED_INT;else if(l instanceof Int32Array)h=t.INT;else if(l instanceof Int8Array)h=t.BYTE;else if(l instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(t.bindBuffer(l,a),d.length===0)t.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];t.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var M2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b2=`#ifdef USE_ALPHAHASH
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
#endif`,E2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R2=`#ifdef USE_AOMAP
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
#endif`,C2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P2=`#ifdef USE_BATCHING
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
#endif`,L2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U2=`#ifdef USE_IRIDESCENCE
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
#endif`,F2=`#ifdef USE_BUMPMAP
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
#endif`,O2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$2=`#define PI 3.141592653589793
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
} // validated`,X2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q2=`vec3 transformedNormal = objectNormal;
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
#endif`,Y2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z2="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eL=`#ifdef USE_ENVMAP
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
#endif`,tL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nL=`#ifdef USE_ENVMAP
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
#endif`,iL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sL=`#ifdef USE_ENVMAP
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
#endif`,rL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cL=`#ifdef USE_GRADIENTMAP
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
}`,uL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hL=`uniform bool receiveShadow;
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
#endif`,pL=`#ifdef USE_ENVMAP
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
#endif`,mL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_L=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xL=`PhysicalMaterial material;
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
#endif`,yL=`uniform sampler2D dfgLUT;
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
}`,SL=`
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
#endif`,ML=`#if defined( RE_IndirectDiffuse )
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
#endif`,bL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LL=`#if defined( USE_POINTS_UV )
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
#endif`,DL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OL=`#ifdef USE_MORPHTARGETS
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
#endif`,BL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WL=`#ifdef USE_NORMALMAP
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
#endif`,$L=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KL=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,JL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oD=`float getShadowMask() {
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
}`,aD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lD=`#ifdef USE_SKINNING
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
#endif`,cD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uD=`#ifdef USE_SKINNING
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
#endif`,fD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mD=`#ifdef USE_TRANSMISSION
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
#endif`,gD=`#ifdef USE_TRANSMISSION
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
#endif`,_D=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MD=`uniform sampler2D t2D;
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
}`,bD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ED=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AD=`#include <common>
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
}`,RD=`#if DEPTH_PACKING == 3200
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
}`,CD=`#define DISTANCE
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
}`,PD=`#define DISTANCE
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
}`,LD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ID=`uniform float scale;
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
}`,ND=`uniform vec3 diffuse;
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
}`,UD=`#include <common>
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
}`,FD=`uniform vec3 diffuse;
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
}`,OD=`#define LAMBERT
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
}`,BD=`#define LAMBERT
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
}`,kD=`#define MATCAP
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
}`,zD=`#define MATCAP
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
}`,VD=`#define NORMAL
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
}`,HD=`#define NORMAL
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
}`,GD=`#define PHONG
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
}`,WD=`#define PHONG
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
}`,$D=`#define STANDARD
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
}`,XD=`#define STANDARD
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
}`,qD=`#define TOON
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
}`,YD=`#define TOON
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
}`,jD=`uniform float size;
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
}`,KD=`uniform vec3 diffuse;
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
}`,JD=`#include <common>
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
}`,ZD=`uniform vec3 color;
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
}`,QD=`uniform float rotation;
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
}`,eI=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:M2,alphahash_pars_fragment:b2,alphamap_fragment:E2,alphamap_pars_fragment:w2,alphatest_fragment:T2,alphatest_pars_fragment:A2,aomap_fragment:R2,aomap_pars_fragment:C2,batching_pars_vertex:P2,batching_vertex:L2,begin_vertex:D2,beginnormal_vertex:I2,bsdfs:N2,iridescence_fragment:U2,bumpmap_pars_fragment:F2,clipping_planes_fragment:O2,clipping_planes_pars_fragment:B2,clipping_planes_pars_vertex:k2,clipping_planes_vertex:z2,color_fragment:V2,color_pars_fragment:H2,color_pars_vertex:G2,color_vertex:W2,common:$2,cube_uv_reflection_fragment:X2,defaultnormal_vertex:q2,displacementmap_pars_vertex:Y2,displacementmap_vertex:j2,emissivemap_fragment:K2,emissivemap_pars_fragment:J2,colorspace_fragment:Z2,colorspace_pars_fragment:Q2,envmap_fragment:eL,envmap_common_pars_fragment:tL,envmap_pars_fragment:nL,envmap_pars_vertex:iL,envmap_physical_pars_fragment:pL,envmap_vertex:sL,fog_vertex:rL,fog_pars_vertex:oL,fog_fragment:aL,fog_pars_fragment:lL,gradientmap_pars_fragment:cL,lightmap_pars_fragment:uL,lights_lambert_fragment:fL,lights_lambert_pars_fragment:dL,lights_pars_begin:hL,lights_toon_fragment:mL,lights_toon_pars_fragment:gL,lights_phong_fragment:_L,lights_phong_pars_fragment:vL,lights_physical_fragment:xL,lights_physical_pars_fragment:yL,lights_fragment_begin:SL,lights_fragment_maps:ML,lights_fragment_end:bL,logdepthbuf_fragment:EL,logdepthbuf_pars_fragment:wL,logdepthbuf_pars_vertex:TL,logdepthbuf_vertex:AL,map_fragment:RL,map_pars_fragment:CL,map_particle_fragment:PL,map_particle_pars_fragment:LL,metalnessmap_fragment:DL,metalnessmap_pars_fragment:IL,morphinstance_vertex:NL,morphcolor_vertex:UL,morphnormal_vertex:FL,morphtarget_pars_vertex:OL,morphtarget_vertex:BL,normal_fragment_begin:kL,normal_fragment_maps:zL,normal_pars_fragment:VL,normal_pars_vertex:HL,normal_vertex:GL,normalmap_pars_fragment:WL,clearcoat_normal_fragment_begin:$L,clearcoat_normal_fragment_maps:XL,clearcoat_pars_fragment:qL,iridescence_pars_fragment:YL,opaque_fragment:jL,packing:KL,premultiplied_alpha_fragment:JL,project_vertex:ZL,dithering_fragment:QL,dithering_pars_fragment:eD,roughnessmap_fragment:tD,roughnessmap_pars_fragment:nD,shadowmap_pars_fragment:iD,shadowmap_pars_vertex:sD,shadowmap_vertex:rD,shadowmask_pars_fragment:oD,skinbase_vertex:aD,skinning_pars_vertex:lD,skinning_vertex:cD,skinnormal_vertex:uD,specularmap_fragment:fD,specularmap_pars_fragment:dD,tonemapping_fragment:hD,tonemapping_pars_fragment:pD,transmission_fragment:mD,transmission_pars_fragment:gD,uv_pars_fragment:_D,uv_pars_vertex:vD,uv_vertex:xD,worldpos_vertex:yD,background_vert:SD,background_frag:MD,backgroundCube_vert:bD,backgroundCube_frag:ED,cube_vert:wD,cube_frag:TD,depth_vert:AD,depth_frag:RD,distance_vert:CD,distance_frag:PD,equirect_vert:LD,equirect_frag:DD,linedashed_vert:ID,linedashed_frag:ND,meshbasic_vert:UD,meshbasic_frag:FD,meshlambert_vert:OD,meshlambert_frag:BD,meshmatcap_vert:kD,meshmatcap_frag:zD,meshnormal_vert:VD,meshnormal_frag:HD,meshphong_vert:GD,meshphong_frag:WD,meshphysical_vert:$D,meshphysical_frag:XD,meshtoon_vert:qD,meshtoon_frag:YD,points_vert:jD,points_frag:KD,shadow_vert:JD,shadow_frag:ZD,sprite_vert:QD,sprite_frag:eI},Re={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},ii={basic:{uniforms:tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:tn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:tn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new it(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:tn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:tn([Re.points,Re.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:tn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:tn([Re.common,Re.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:tn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:tn([Re.sprite,Re.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:tn([Re.common,Re.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:tn([Re.lights,Re.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ii.physical={uniforms:tn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ya={r:0,b:0,g:0},ys=new pi,tI=new At;function nI(t,e,n,i,s,r){const o=new it(0);let a=s===!0?0:1,c,l,u=null,d=0,f=null;function h(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const y=v.backgroundBlurriness>0;E=e.get(E,y)}return E}function g(v){let E=!1;const y=h(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),E=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(v,E){const y=h(E);y&&(y.isCubeTexture||y.mapping===Ul)?(l===void 0&&(l=new Tn(new Bo(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:br(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),ys.copy(E.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tI.makeRotationFromEuler(ys)),l.material.toneMapped=at.getTransfer(y.colorSpace)!==_t,(u!==y||d!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Tn(new Fl(2,2),new mi({name:"BackgroundMaterial",uniforms:br(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=at.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,E){v.getRGB(ya,V_(t)),n.buffers.color.setClear(ya.r,ya.g,ya.b,E,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:g,addToRenderList:_,dispose:m}}function iI(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(P,F,k,V,U){let C=!1;const L=d(P,V,k,F);r!==L&&(r=L,l(r.object)),C=h(P,V,k,U),C&&g(P,V,k,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(C||o)&&(o=!1,y(P,F,k,V),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return t.createVertexArray()}function l(P){return t.bindVertexArray(P)}function u(P){return t.deleteVertexArray(P)}function d(P,F,k,V){const U=V.wireframe===!0;let C=i[F.id];C===void 0&&(C={},i[F.id]=C);const L=P.isInstancedMesh===!0?P.id:0;let G=C[L];G===void 0&&(G={},C[L]=G);let ae=G[k.id];ae===void 0&&(ae={},G[k.id]=ae);let fe=ae[U];return fe===void 0&&(fe=f(c()),ae[U]=fe),fe}function f(P){const F=[],k=[],V=[];for(let U=0;U<n;U++)F[U]=0,k[U]=0,V[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:V,object:P,attributes:{},index:null}}function h(P,F,k,V){const U=r.attributes,C=F.attributes;let L=0;const G=k.getAttributes();for(const ae in G)if(G[ae].location>=0){const he=U[ae];let ve=C[ae];if(ve===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(ve=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(ve=P.instanceColor)),he===void 0||he.attribute!==ve||ve&&he.data!==ve.data)return!0;L++}return r.attributesNum!==L||r.index!==V}function g(P,F,k,V){const U={},C=F.attributes;let L=0;const G=k.getAttributes();for(const ae in G)if(G[ae].location>=0){let he=C[ae];he===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(he=P.instanceColor));const ve={};ve.attribute=he,he&&he.data&&(ve.data=he.data),U[ae]=ve,L++}r.attributes=U,r.attributesNum=L,r.index=V}function _(){const P=r.newAttributes;for(let F=0,k=P.length;F<k;F++)P[F]=0}function p(P){m(P,0)}function m(P,F){const k=r.newAttributes,V=r.enabledAttributes,U=r.attributeDivisors;k[P]=1,V[P]===0&&(t.enableVertexAttribArray(P),V[P]=1),U[P]!==F&&(t.vertexAttribDivisor(P,F),U[P]=F)}function v(){const P=r.newAttributes,F=r.enabledAttributes;for(let k=0,V=F.length;k<V;k++)F[k]!==P[k]&&(t.disableVertexAttribArray(k),F[k]=0)}function E(P,F,k,V,U,C,L){L===!0?t.vertexAttribIPointer(P,F,k,U,C):t.vertexAttribPointer(P,F,k,V,U,C)}function y(P,F,k,V){_();const U=V.attributes,C=k.getAttributes(),L=F.defaultAttributeValues;for(const G in C){const ae=C[G];if(ae.location>=0){let fe=U[G];if(fe===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),fe!==void 0){const he=fe.normalized,ve=fe.itemSize,We=e.get(fe);if(We===void 0)continue;const dt=We.buffer,pt=We.type,re=We.bytesPerElement,ye=pt===t.INT||pt===t.UNSIGNED_INT||fe.gpuType===$f;if(fe.isInterleavedBufferAttribute){const be=fe.data,je=be.stride,He=fe.offset;if(be.isInstancedInterleavedBuffer){for(let Xe=0;Xe<ae.locationSize;Xe++)m(ae.location+Xe,be.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Xe=0;Xe<ae.locationSize;Xe++)p(ae.location+Xe);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let Xe=0;Xe<ae.locationSize;Xe++)E(ae.location+Xe,ve/ae.locationSize,pt,he,je*re,(He+ve/ae.locationSize*Xe)*re,ye)}else{if(fe.isInstancedBufferAttribute){for(let be=0;be<ae.locationSize;be++)m(ae.location+be,fe.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let be=0;be<ae.locationSize;be++)p(ae.location+be);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let be=0;be<ae.locationSize;be++)E(ae.location+be,ve/ae.locationSize,pt,he,ve*re,ve/ae.locationSize*be*re,ye)}}else if(L!==void 0){const he=L[G];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(ae.location,he);break;case 3:t.vertexAttrib3fv(ae.location,he);break;case 4:t.vertexAttrib4fv(ae.location,he);break;default:t.vertexAttrib1fv(ae.location,he)}}}}v()}function w(){M();for(const P in i){const F=i[P];for(const k in F){const V=F[k];for(const U in V){const C=V[U];for(const L in C)u(C[L].object),delete C[L];delete V[U]}}delete i[P]}}function R(P){if(i[P.id]===void 0)return;const F=i[P.id];for(const k in F){const V=F[k];for(const U in V){const C=V[U];for(const L in C)u(C[L].object),delete C[L];delete V[U]}}delete i[P.id]}function D(P){for(const F in i){const k=i[F];for(const V in k){const U=k[V];if(U[P.id]===void 0)continue;const C=U[P.id];for(const L in C)u(C[L].object),delete C[L];delete U[P.id]}}}function S(P){for(const F in i){const k=i[F],V=P.isInstancedMesh===!0?P.id:0,U=k[V];if(U!==void 0){for(const C in U){const L=U[C];for(const G in L)u(L[G].object),delete L[G];delete U[C]}delete k[V],Object.keys(k).length===0&&delete i[F]}}}function M(){N(),o=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function sI(t,e,n){let i;function s(l){i=l}function r(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,d){d!==0&&(t.drawArraysInstanced(i,l,u,d),n.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];n.update(h,i,1)}function c(l,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rI(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Hn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const S=D===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==bn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ri&&!S)}function c(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(qe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:y,maxSamples:w,samples:R}}function oI(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new bs,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=t.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const v=r?0:i,E=v*4;let y=m.clippingState||null;c.value=y,y=u(g,f,E,h);for(let w=0;w!==E;++w)y[w]=n[w];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=h+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,y=h;E!==_;++E,y+=4)o.copy(d[E]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const os=4,bp=[.125,.215,.35,.446,.526,.582],As=20,aI=256,zr=new W_,Ep=new it;let Bc=null,kc=0,zc=0,Vc=!1;const lI=new $;class wp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=lI}=r;Bc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bc,kc,zc),this._renderer.xr.enabled=Vc,e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Gi,format:Hn,colorSpace:Mr,depthBuffer:!1},s=Tp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tp(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cI(r)),this._blurMaterial=fI(r,e,n),this._ggxMaterial=uI(r,e,n)}return s}_compileMaterial(e){const n=new Tn(new cn,e);this._renderer.compile(n,zr)}_sceneToCubeUV(e,n,i,s,r){const c=new Mn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Ep),d.toneMapping=ui,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tn(new Bo,new nd({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,m=!0):(p.color.copy(Ep),m=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):y===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));const w=this._cubeSize;sr(s,y*w,E>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(_,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===ks||e.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ap());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;sr(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,zr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=0+l*1.25,h=d*f,{_lodMax:g}=this,_=this._sizeLods[i],p=3*_*(i>g-os?i-g+os:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-n,sr(r,p,m,3*_,2*_),s.setRenderTarget(r),s.render(a,zr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,sr(e,p,m,3*_,2*_),s.setRenderTarget(e),s.render(a,zr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*As-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):As;p>As&&qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${As}`);const m=[];let v=0;for(let D=0;D<As;++D){const S=D/_,M=Math.exp(-S*S/2);m.push(M),D===0?v+=M:D<p&&(v+=2*M)}for(let D=0;D<m.length;D++)m[D]=m[D]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const y=this._sizeLods[s],w=3*y*(s>E-os?s-E+os:0),R=4*(this._cubeSize-y);sr(n,w,R,3*y,2*y),c.setRenderTarget(n),c.render(d,zr)}}function cI(t){const e=[],n=[],i=[];let s=t;const r=t-os+1+bp.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>t-os?c=bp[o-t+os-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*h),E=new Float32Array(p*g*h),y=new Float32Array(m*g*h);for(let R=0;R<h;R++){const D=R%3*2/3-1,S=R>2?0:-1,M=[D,S,0,D+2/3,S,0,D+2/3,S+1,0,D,S,0,D+2/3,S+1,0,D,S+1,0];v.set(M,_*g*R),E.set(f,p*g*R);const N=[R,R,R,R,R,R];y.set(N,m*g*R)}const w=new cn;w.setAttribute("position",new Rn(v,_)),w.setAttribute("uv",new Rn(E,p)),w.setAttribute("faceIndex",new Rn(y,m)),i.push(new Tn(w,null)),s>os&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Tp(t,e,n){const i=new fi(t,e,n);return i.texture.mapping=Ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sr(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function uI(t,e,n){return new mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aI,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function fI(t,e,n){const i=new Float32Array(As),s=new $(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ap(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Rp(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ol(){return`

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
	`}class X_ extends fi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new k_(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bo(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Oi});r.uniforms.tEquirect.value=n;const o=new Tn(s,r),a=n.minFilter;return n.minFilter===Ps&&(n.minFilter=Zt),new v2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function dI(t){let e=new WeakMap,n=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===lc||h===cc)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const _=new X_(g.height);return _.fromEquirectangularTexture(t,f),e.set(f,_),f.addEventListener("dispose",l),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,g=h===lc||h===cc,_=h===ks||h===yr;if(g||_){let p=n.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new wp(t)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),p.texture;if(p!==void 0)return p.texture;{const v=f.image;return g&&v&&v.height>0||_&&v&&c(v)?(i===null&&(i=new wp(t)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,h){return h===lc?f.mapping=ks:h===cc&&(f.mapping=yr),f}function c(f){let h=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&h++;return h===g}function l(f){const h=f.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function hI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&sl("WebGLRenderer: "+i+" extension not supported."),s}}}function pI(t,e,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function l(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(h!==null){const v=h.array;_=h.version;for(let E=0,y=v.length;E<y;E+=3){const w=v[E+0],R=v[E+1],D=v[E+2];f.push(w,R,R,D,D,w)}}else{const v=g.array;_=g.version;for(let E=0,y=v.length/3-1;E<y;E+=3){const w=E+0,R=E+1,D=E+2;f.push(w,R,R,D,D,w)}}const p=new(g.count>=65535?F_:U_)(f,1);p.version=_;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function mI(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function l(f,h,g){g!==0&&(t.drawElementsInstanced(i,h,r,f*o,g),n.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];n.update(p,i,1)}function d(f,h,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/o,h[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,_,0,g);let m=0;for(let v=0;v<g;v++)m+=h[v]*_[v];n.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function gI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ut("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function _I(t,e,n){const i=new WeakMap,s=new Ct;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let N=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",N)};var h=N;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let w=a.attributes.position.count*y,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const D=new Float32Array(w*R*4*d),S=new D_(D,w,R,d);S.type=ri,S.needsUpdate=!0;const M=y*4;for(let P=0;P<d;P++){const F=m[P],k=v[P],V=E[P],U=w*R*4*P;for(let C=0;C<F.count;C++){const L=C*M;g===!0&&(s.fromBufferAttribute(F,C),D[U+L+0]=s.x,D[U+L+1]=s.y,D[U+L+2]=s.z,D[U+L+3]=0),_===!0&&(s.fromBufferAttribute(k,C),D[U+L+4]=s.x,D[U+L+5]=s.y,D[U+L+6]=s.z,D[U+L+7]=0),p===!0&&(s.fromBufferAttribute(V,C),D[U+L+8]=s.x,D[U+L+9]=s.y,D[U+L+10]=s.z,D[U+L+11]=V.itemSize===4?s.w:1)}}f={count:d,texture:S,size:new ot(w,R)},i.set(a,f),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",_),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function vI(t,e,n,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const xI={[m_]:"LINEAR_TONE_MAPPING",[g_]:"REINHARD_TONE_MAPPING",[__]:"CINEON_TONE_MAPPING",[v_]:"ACES_FILMIC_TONE_MAPPING",[y_]:"AGX_TONE_MAPPING",[S_]:"NEUTRAL_TONE_MAPPING",[x_]:"CUSTOM_TONE_MAPPING"};function yI(t,e,n,i,s){const r=new fi(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),o=new fi(e,n,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),a=new cn;a.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const c=new d2({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Tn(a,c),u=new W_(-1,1,1,-1,0,1);let d=null,f=null,h=!1,g,_=null,p=[],m=!1;this.setSize=function(v,E){r.setSize(v,E),o.setSize(v,E);for(let y=0;y<p.length;y++){const w=p[y];w.setSize&&w.setSize(v,E)}},this.setEffects=function(v){p=v,m=p.length>0&&p[0].isRenderPass===!0;const E=r.width,y=r.height;for(let w=0;w<p.length;w++){const R=p[w];R.setSize&&R.setSize(E,y)}},this.begin=function(v,E){if(h||v.toneMapping===ui&&p.length===0)return!1;if(_=E,E!==null){const y=E.width,w=E.height;(r.width!==y||r.height!==w)&&this.setSize(y,w)}return m===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=ui,!0},this.hasRenderPass=function(){return m},this.end=function(v,E){v.toneMapping=g,h=!0;let y=r,w=o;for(let R=0;R<p.length;R++){const D=p[R];if(D.enabled!==!1&&(D.render(v,w,y,E),D.needsSwap!==!1)){const S=y;y=w,w=S}}if(d!==v.outputColorSpace||f!==v.toneMapping){d=v.outputColorSpace,f=v.toneMapping,c.defines={},at.getTransfer(d)===_t&&(c.defines.SRGB_TRANSFER="");const R=xI[f];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(_),v.render(l,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const q_=new ln,lf=new So(1,1),Y_=new D_,j_=new z3,K_=new k_,Cp=[],Pp=[],Lp=new Float32Array(16),Dp=new Float32Array(9),Ip=new Float32Array(4);function Rr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Cp[s];if(r===void 0&&(r=new Float32Array(s),Cp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bl(t,e){let n=Pp[e];n===void 0&&(n=new Int32Array(e),Pp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function SI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function MI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function bI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function EI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function wI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;Ip.set(i),t.uniformMatrix2fv(this.addr,!1,Ip),kt(n,i)}}function TI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;Dp.set(i),t.uniformMatrix3fv(this.addr,!1,Dp),kt(n,i)}}function AI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;Lp.set(i),t.uniformMatrix4fv(this.addr,!1,Lp),kt(n,i)}}function RI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function CI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function PI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function LI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function DI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function II(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function NI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function UI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function FI(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(lf.compareFunction=n.isReversedDepthBuffer()?Zf:Jf,r=lf):r=q_,n.setTexture2D(e||r,s)}function OI(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||j_,s)}function BI(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||K_,s)}function kI(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Y_,s)}function zI(t){switch(t){case 5126:return SI;case 35664:return MI;case 35665:return bI;case 35666:return EI;case 35674:return wI;case 35675:return TI;case 35676:return AI;case 5124:case 35670:return RI;case 35667:case 35671:return CI;case 35668:case 35672:return PI;case 35669:case 35673:return LI;case 5125:return DI;case 36294:return II;case 36295:return NI;case 36296:return UI;case 35678:case 36198:case 36298:case 36306:case 35682:return FI;case 35679:case 36299:case 36307:return OI;case 35680:case 36300:case 36308:case 36293:return BI;case 36289:case 36303:case 36311:case 36292:return kI}}function VI(t,e){t.uniform1fv(this.addr,e)}function HI(t,e){const n=Rr(e,this.size,2);t.uniform2fv(this.addr,n)}function GI(t,e){const n=Rr(e,this.size,3);t.uniform3fv(this.addr,n)}function WI(t,e){const n=Rr(e,this.size,4);t.uniform4fv(this.addr,n)}function $I(t,e){const n=Rr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XI(t,e){const n=Rr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function qI(t,e){const n=Rr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function YI(t,e){t.uniform1iv(this.addr,e)}function jI(t,e){t.uniform2iv(this.addr,e)}function KI(t,e){t.uniform3iv(this.addr,e)}function JI(t,e){t.uniform4iv(this.addr,e)}function ZI(t,e){t.uniform1uiv(this.addr,e)}function QI(t,e){t.uniform2uiv(this.addr,e)}function eN(t,e){t.uniform3uiv(this.addr,e)}function tN(t,e){t.uniform4uiv(this.addr,e)}function nN(t,e,n){const i=this.cache,s=e.length,r=Bl(n,s);Bt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=lf:o=q_;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function iN(t,e,n){const i=this.cache,s=e.length,r=Bl(n,s);Bt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||j_,r[o])}function sN(t,e,n){const i=this.cache,s=e.length,r=Bl(n,s);Bt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||K_,r[o])}function rN(t,e,n){const i=this.cache,s=e.length,r=Bl(n,s);Bt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Y_,r[o])}function oN(t){switch(t){case 5126:return VI;case 35664:return HI;case 35665:return GI;case 35666:return WI;case 35674:return $I;case 35675:return XI;case 35676:return qI;case 5124:case 35670:return YI;case 35667:case 35671:return jI;case 35668:case 35672:return KI;case 35669:case 35673:return JI;case 5125:return ZI;case 36294:return QI;case 36295:return eN;case 36296:return tN;case 35678:case 36198:case 36298:case 36306:case 35682:return nN;case 35679:case 36299:case 36307:return iN;case 35680:case 36300:case 36308:case 36293:return sN;case 36289:case 36303:case 36311:case 36292:return rN}}class aN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zI(n.type)}}class lN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oN(n.type)}}class cN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Hc=/(\w+)(\])?(\[|\.)?/g;function Np(t,e){t.seq.push(e),t.map[e.id]=e}function uN(t,e,n){const i=t.name,s=i.length;for(Hc.lastIndex=0;;){const r=Hc.exec(i),o=Hc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Np(n,l===void 0?new aN(a,t,e):new lN(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new cN(a),Np(n,d)),n=d}}}class Oa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),c=e.getUniformLocation(n,a.name);uN(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Up(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const fN=37297;let dN=0;function hN(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Fp=new et;function pN(t){at._getMatrix(Fp,at.workingColorSpace,t);const e=`mat3( ${Fp.elements.map(n=>n.toFixed(4))} )`;switch(at.getTransfer(t)){case nl:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Op(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+hN(t.getShaderSource(e),a)}else return r}function mN(t,e){const n=pN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const gN={[m_]:"Linear",[g_]:"Reinhard",[__]:"Cineon",[v_]:"ACESFilmic",[y_]:"AgX",[S_]:"Neutral",[x_]:"Custom"};function _N(t,e){const n=gN[e];return n===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sa=new $;function vN(){at.getLuminanceCoefficients(Sa);const t=Sa.x.toFixed(4),e=Sa.y.toFixed(4),n=Sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function yN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function SN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Yr(t){return t!==""}function Bp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MN=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(t){return t.replace(MN,EN)}const bN=new Map;function EN(t,e){let n=tt[e];if(n===void 0){const i=bN.get(e);if(i!==void 0)n=tt[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cf(n)}const wN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zp(t){return t.replace(wN,TN)}function TN(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const AN={[Da]:"SHADOWMAP_TYPE_PCF",[Xr]:"SHADOWMAP_TYPE_VSM"};function RN(t){return AN[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CN={[ks]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[Ul]:"ENVMAP_TYPE_CUBE_UV"};function PN(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":CN[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const LN={[yr]:"ENVMAP_MODE_REFRACTION"};function DN(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":LN[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IN={[Wf]:"ENVMAP_BLENDING_MULTIPLY",[x3]:"ENVMAP_BLENDING_MIX",[y3]:"ENVMAP_BLENDING_ADD"};function NN(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":IN[t.combine]||"ENVMAP_BLENDING_NONE"}function UN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function FN(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=RN(n),l=PN(n),u=DN(n),d=NN(n),f=UN(n),h=xN(n),g=yN(r),_=s.createProgram();let p,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Yr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`)):(p=[Vp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),m=[Vp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ui?"#define TONE_MAPPING":"",n.toneMapping!==ui?tt.tonemapping_pars_fragment:"",n.toneMapping!==ui?_N("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,mN("linearToOutputTexel",n.outputColorSpace),vN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Yr).join(`
`)),o=cf(o),o=Bp(o,n),o=kp(o,n),a=cf(a),a=Bp(a,n),a=kp(a,n),o=zp(o),a=zp(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=v+p+o,y=v+m+a,w=Up(s,s.VERTEX_SHADER,E),R=Up(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,R),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(P){if(t.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(w)||"",V=s.getShaderInfoLog(R)||"",U=F.trim(),C=k.trim(),L=V.trim();let G=!0,ae=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,w,R);else{const fe=Op(s,w,"vertex"),he=Op(s,R,"fragment");ut("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+fe+`
`+he)}else U!==""?qe("WebGLProgram: Program Info Log:",U):(C===""||L==="")&&(ae=!1);ae&&(P.diagnostics={runnable:G,programLog:U,vertexShader:{log:C,prefix:p},fragmentShader:{log:L,prefix:m}})}s.deleteShader(w),s.deleteShader(R),S=new Oa(s,_),M=SN(s,_)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,fN)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dN++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}let ON=0;class BN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new kN(e),n.set(e,i)),i}}class kN{constructor(e){this.id=ON++,this.code=e,this.usedTimes=0}}function zN(t,e,n,i,s,r){const o=new I_,a=new BN,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function _(S,M,N,P,F){const k=P.fog,V=F.geometry,U=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,C=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,L=e.get(S.envMap||U,C),G=L&&L.mapping===Ul?L.image.height:null,ae=h[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&qe("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,he=fe!==void 0?fe.length:0;let ve=0;V.morphAttributes.position!==void 0&&(ve=1),V.morphAttributes.normal!==void 0&&(ve=2),V.morphAttributes.color!==void 0&&(ve=3);let We,dt,pt,re;if(ae){const gt=ii[ae];We=gt.vertexShader,dt=gt.fragmentShader}else We=S.vertexShader,dt=S.fragmentShader,a.update(S),pt=a.getVertexShaderID(S),re=a.getFragmentShaderID(S);const ye=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),je=F.isInstancedMesh===!0,He=F.isBatchedMesh===!0,Xe=!!S.map,O=!!S.matcap,z=!!L,X=!!S.aoMap,se=!!S.lightMap,Z=!!S.bumpMap,oe=!!S.normalMap,I=!!S.displacementMap,pe=!!S.emissiveMap,ce=!!S.metalnessMap,ie=!!S.roughnessMap,ue=S.anisotropy>0,T=S.clearcoat>0,b=S.dispersion>0,B=S.iridescence>0,q=S.sheen>0,ee=S.transmission>0,Y=ue&&!!S.anisotropyMap,Te=T&&!!S.clearcoatMap,ge=T&&!!S.clearcoatNormalMap,Ne=T&&!!S.clearcoatRoughnessMap,Be=B&&!!S.iridescenceMap,me=B&&!!S.iridescenceThicknessMap,xe=q&&!!S.sheenColorMap,Ae=q&&!!S.sheenRoughnessMap,Le=!!S.specularMap,De=!!S.specularColorMap,Ze=!!S.specularIntensityMap,H=ee&&!!S.transmissionMap,Ee=ee&&!!S.thicknessMap,Me=!!S.gradientMap,Ue=!!S.alphaMap,_e=S.alphaTest>0,ne=!!S.alphaHash,Fe=!!S.extensions;let Ke=ui;S.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ke=t.toneMapping);const Mt={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:We,fragmentShader:dt,defines:S.defines,customVertexShaderID:pt,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:He,batchingColor:He&&F._colorsTexture!==null,instancing:je,instancingColor:je&&F.instanceColor!==null,instancingMorph:je&&F.morphTexture!==null,outputColorSpace:ye===null?t.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Mr,alphaToCoverage:!!S.alphaToCoverage,map:Xe,matcap:O,envMap:z,envMapMode:z&&L.mapping,envMapCubeUVHeight:G,aoMap:X,lightMap:se,bumpMap:Z,normalMap:oe,displacementMap:I,emissiveMap:pe,normalMapObjectSpace:oe&&S.normalMapType===b3,normalMapTangentSpace:oe&&S.normalMapType===P_,metalnessMap:ce,roughnessMap:ie,anisotropy:ue,anisotropyMap:Y,clearcoat:T,clearcoatMap:Te,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ne,dispersion:b,iridescence:B,iridescenceMap:Be,iridescenceThicknessMap:me,sheen:q,sheenColorMap:xe,sheenRoughnessMap:Ae,specularMap:Le,specularColorMap:De,specularIntensityMap:Ze,transmission:ee,transmissionMap:H,thicknessMap:Ee,gradientMap:Me,opaque:S.transparent===!1&&S.blending===dr&&S.alphaToCoverage===!1,alphaMap:Ue,alphaTest:_e,alphaHash:ne,combine:S.combine,mapUv:Xe&&g(S.map.channel),aoMapUv:X&&g(S.aoMap.channel),lightMapUv:se&&g(S.lightMap.channel),bumpMapUv:Z&&g(S.bumpMap.channel),normalMapUv:oe&&g(S.normalMap.channel),displacementMapUv:I&&g(S.displacementMap.channel),emissiveMapUv:pe&&g(S.emissiveMap.channel),metalnessMapUv:ce&&g(S.metalnessMap.channel),roughnessMapUv:ie&&g(S.roughnessMap.channel),anisotropyMapUv:Y&&g(S.anisotropyMap.channel),clearcoatMapUv:Te&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(S.sheenRoughnessMap.channel),specularMapUv:Le&&g(S.specularMap.channel),specularColorMapUv:De&&g(S.specularColorMap.channel),specularIntensityMapUv:Ze&&g(S.specularIntensityMap.channel),transmissionMapUv:H&&g(S.transmissionMap.channel),thicknessMapUv:Ee&&g(S.thicknessMap.channel),alphaMapUv:Ue&&g(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(oe||ue),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Xe||Ue),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||V.attributes.normal===void 0&&oe===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Xe&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:pe&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ni,flipSided:S.side===_n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Fe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&S.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)M.push(N),M.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(m(M,S),v(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function m(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=h[S.type];let N;if(M){const P=ii[M];N=c2.clone(P.uniforms)}else N=S.uniforms;return N}function y(S,M){let N=u.get(M);return N!==void 0?++N.usedTimes:(N=new FN(t,M,S,s),l.push(N),u.set(M,N)),N}function w(S){if(--S.usedTimes===0){const M=l.indexOf(S);l[M]=l[l.length-1],l.pop(),u.delete(S.cacheKey),S.destroy()}}function R(S){a.remove(S)}function D(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:w,releaseShaderCache:R,programs:l,dispose:D}}function VN(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,c){t.get(o)[a]=c}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function HN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Hp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gp(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,_,p,m){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:g,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},t[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=g,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=m),e++,v}function c(f,h,g,_,p,m){const v=a(f,h,g,_,p,m);g.transmission>0?i.push(v):g.transparent===!0?s.push(v):n.push(v)}function l(f,h,g,_,p,m){const v=a(f,h,g,_,p,m);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):n.unshift(v)}function u(f,h){n.length>1&&n.sort(f||HN),i.length>1&&i.sort(h||Hp),s.length>1&&s.sort(h||Hp)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function GN(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Gp,t.set(i,[o])):s>=r.length?(o=new Gp,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function WN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new it};break;case"SpotLight":n={position:new $,direction:new $,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function $N(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let XN=0;function qN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YN(t){const e=new WN,n=$N(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);const s=new $,r=new At,o=new At;function a(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,g=0,_=0,p=0,m=0,v=0,E=0,y=0,w=0,R=0,D=0;l.sort(qN);for(let M=0,N=l.length;M<N;M++){const P=l[M],F=P.color,k=P.intensity,V=P.distance;let U=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Sr?U=P.shadow.map.texture:U=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=F.r*k,d+=F.g*k,f+=F.b*k;else if(P.isLightProbe){for(let C=0;C<9;C++)i.probe[C].addScaledVector(P.sh.coefficients[C],k);D++}else if(P.isDirectionalLight){const C=e.get(P);if(C.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const L=P.shadow,G=n.get(P);G.shadowIntensity=L.intensity,G.shadowBias=L.bias,G.shadowNormalBias=L.normalBias,G.shadowRadius=L.radius,G.shadowMapSize=L.mapSize,i.directionalShadow[h]=G,i.directionalShadowMap[h]=U,i.directionalShadowMatrix[h]=P.shadow.matrix,v++}i.directional[h]=C,h++}else if(P.isSpotLight){const C=e.get(P);C.position.setFromMatrixPosition(P.matrixWorld),C.color.copy(F).multiplyScalar(k),C.distance=V,C.coneCos=Math.cos(P.angle),C.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),C.decay=P.decay,i.spot[_]=C;const L=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,L.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[_]=L.matrix,P.castShadow){const G=n.get(P);G.shadowIntensity=L.intensity,G.shadowBias=L.bias,G.shadowNormalBias=L.normalBias,G.shadowRadius=L.radius,G.shadowMapSize=L.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=U,y++}_++}else if(P.isRectAreaLight){const C=e.get(P);C.color.copy(F).multiplyScalar(k),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=C,p++}else if(P.isPointLight){const C=e.get(P);if(C.color.copy(P.color).multiplyScalar(P.intensity),C.distance=P.distance,C.decay=P.decay,P.castShadow){const L=P.shadow,G=n.get(P);G.shadowIntensity=L.intensity,G.shadowBias=L.bias,G.shadowNormalBias=L.normalBias,G.shadowRadius=L.radius,G.shadowMapSize=L.mapSize,G.shadowCameraNear=L.camera.near,G.shadowCameraFar=L.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=P.shadow.matrix,E++}i.point[g]=C,g++}else if(P.isHemisphereLight){const C=e.get(P);C.skyColor.copy(P.color).multiplyScalar(k),C.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[m]=C,m++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==h||S.pointLength!==g||S.spotLength!==_||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==v||S.numPointShadows!==E||S.numSpotShadows!==y||S.numSpotMaps!==w||S.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=D,S.directionalLength=h,S.pointLength=g,S.spotLength=_,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=v,S.numPointShadows=E,S.numSpotShadows=y,S.numSpotMaps=w,S.numLightProbes=D,i.version=XN++)}function c(l,u){let d=0,f=0,h=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const E=l[m];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(E.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:i}}function Wp(t){const e=new YN(t),n=[],i=[];function s(u){l.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function c(u){e.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function jN(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Wp(t),e.set(s,[a])):r>=o.length?(a=new Wp(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const KN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JN=`uniform sampler2D shadow_pass;
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
}`,ZN=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],QN=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],$p=new At,Vr=new $,Gc=new $;function eU(t,e,n){let i=new id;const s=new ot,r=new ot,o=new Ct,a=new h2,c=new p2,l={},u=n.maxTextureSize,d={[ls]:_n,[_n]:ls,[Ni]:Ni},f=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:KN,fragmentShader:JN}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da;let m=this.type;this.render=function(R,D,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===e3&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Da);const M=t.getRenderTarget(),N=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Oi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=m!==this.type;k&&D.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(U=>U.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,U=R.length;V<U;V++){const C=R[V],L=C.shadow;if(L===void 0){qe("WebGLShadowMap:",C,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const G=L.getFrameExtents();s.multiply(G),r.copy(L.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,L.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,L.mapSize.y=r.y));const ae=t.state.buffers.depth.getReversed();if(L.camera._reversedDepth=ae,L.map===null||k===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Xr){if(C.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new fi(s.x,s.y,{format:Sr,type:Gi,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),L.map.texture.name=C.name+".shadowMap",L.map.depthTexture=new So(s.x,s.y,ri),L.map.depthTexture.name=C.name+".shadowMapDepth",L.map.depthTexture.format=Wi,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Gt,L.map.depthTexture.magFilter=Gt}else C.isPointLight?(L.map=new X_(s.x),L.map.depthTexture=new a2(s.x,hi)):(L.map=new fi(s.x,s.y),L.map.depthTexture=new So(s.x,s.y,hi)),L.map.depthTexture.name=C.name+".shadowMap",L.map.depthTexture.format=Wi,this.type===Da?(L.map.depthTexture.compareFunction=ae?Zf:Jf,L.map.depthTexture.minFilter=Zt,L.map.depthTexture.magFilter=Zt):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Gt,L.map.depthTexture.magFilter=Gt);L.camera.updateProjectionMatrix()}const fe=L.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<fe;he++){if(L.map.isWebGLCubeRenderTarget)t.setRenderTarget(L.map,he),t.clear();else{he===0&&(t.setRenderTarget(L.map),t.clear());const ve=L.getViewport(he);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),F.viewport(o)}if(C.isPointLight){const ve=L.camera,We=L.matrix,dt=C.distance||ve.far;dt!==ve.far&&(ve.far=dt,ve.updateProjectionMatrix()),Vr.setFromMatrixPosition(C.matrixWorld),ve.position.copy(Vr),Gc.copy(ve.position),Gc.add(ZN[he]),ve.up.copy(QN[he]),ve.lookAt(Gc),ve.updateMatrixWorld(),We.makeTranslation(-Vr.x,-Vr.y,-Vr.z),$p.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),L._frustum.setFromProjectionMatrix($p,ve.coordinateSystem,ve.reversedDepth)}else L.updateMatrices(C);i=L.getFrustum(),y(D,S,L.camera,C,this.type)}L.isPointLightShadow!==!0&&this.type===Xr&&v(L,S),L.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(M,N,P)};function v(R,D){const S=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new fi(s.x,s.y,{format:Sr,type:Gi})),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(D,null,S,f,_,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(D,null,S,h,_,null)}function E(R,D,S,M){let N=null;const P=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)N=P;else if(N=S.isPointLight===!0?c:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const F=N.uuid,k=D.uuid;let V=l[F];V===void 0&&(V={},l[F]=V);let U=V[k];U===void 0&&(U=N.clone(),V[k]=U,D.addEventListener("dispose",w)),N=U}if(N.visible=D.visible,N.wireframe=D.wireframe,M===Xr?N.side=D.shadowSide!==null?D.shadowSide:D.side:N.side=D.shadowSide!==null?D.shadowSide:d[D.side],N.alphaMap=D.alphaMap,N.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,N.map=D.map,N.clipShadows=D.clipShadows,N.clippingPlanes=D.clippingPlanes,N.clipIntersection=D.clipIntersection,N.displacementMap=D.displacementMap,N.displacementScale=D.displacementScale,N.displacementBias=D.displacementBias,N.wireframeLinewidth=D.wireframeLinewidth,N.linewidth=D.linewidth,S.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const F=t.properties.get(N);F.light=S}return N}function y(R,D,S,M,N){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&N===Xr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);const k=e.update(R),V=R.material;if(Array.isArray(V)){const U=k.groups;for(let C=0,L=U.length;C<L;C++){const G=U[C],ae=V[G.materialIndex];if(ae&&ae.visible){const fe=E(R,ae,M,N);R.onBeforeShadow(t,R,D,S,k,fe,G),t.renderBufferDirect(S,null,k,fe,R,G),R.onAfterShadow(t,R,D,S,k,fe,G)}}}else if(V.visible){const U=E(R,V,M,N);R.onBeforeShadow(t,R,D,S,k,U,null),t.renderBufferDirect(S,null,k,U,R,null),R.onAfterShadow(t,R,D,S,k,U,null)}}const F=R.children;for(let k=0,V=F.length;k<V;k++)y(F[k],D,S,M,N)}function w(R){R.target.removeEventListener("dispose",w);for(const S in l){const M=l[S],N=R.target.uuid;N in M&&(M[N].dispose(),delete M[N])}}}function tU(t,e){function n(){let H=!1;const Ee=new Ct;let Me=null;const Ue=new Ct(0,0,0,0);return{setMask:function(_e){Me!==_e&&!H&&(t.colorMask(_e,_e,_e,_e),Me=_e)},setLocked:function(_e){H=_e},setClear:function(_e,ne,Fe,Ke,Mt){Mt===!0&&(_e*=Ke,ne*=Ke,Fe*=Ke),Ee.set(_e,ne,Fe,Ke),Ue.equals(Ee)===!1&&(t.clearColor(_e,ne,Fe,Ke),Ue.copy(Ee))},reset:function(){H=!1,Me=null,Ue.set(-1,0,0,0)}}}function i(){let H=!1,Ee=!1,Me=null,Ue=null,_e=null;return{setReversed:function(ne){if(Ee!==ne){const Fe=e.get("EXT_clip_control");ne?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Ee=ne;const Ke=_e;_e=null,this.setClear(Ke)}},getReversed:function(){return Ee},setTest:function(ne){ne?ye(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(ne){Me!==ne&&!H&&(t.depthMask(ne),Me=ne)},setFunc:function(ne){if(Ee&&(ne=I3[ne]),Ue!==ne){switch(ne){case vu:t.depthFunc(t.NEVER);break;case xu:t.depthFunc(t.ALWAYS);break;case yu:t.depthFunc(t.LESS);break;case xr:t.depthFunc(t.LEQUAL);break;case Su:t.depthFunc(t.EQUAL);break;case Mu:t.depthFunc(t.GEQUAL);break;case bu:t.depthFunc(t.GREATER);break;case Eu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ue=ne}},setLocked:function(ne){H=ne},setClear:function(ne){_e!==ne&&(_e=ne,Ee&&(ne=1-ne),t.clearDepth(ne))},reset:function(){H=!1,Me=null,Ue=null,_e=null,Ee=!1}}}function s(){let H=!1,Ee=null,Me=null,Ue=null,_e=null,ne=null,Fe=null,Ke=null,Mt=null;return{setTest:function(gt){H||(gt?ye(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(gt){Ee!==gt&&!H&&(t.stencilMask(gt),Ee=gt)},setFunc:function(gt,xi,yi){(Me!==gt||Ue!==xi||_e!==yi)&&(t.stencilFunc(gt,xi,yi),Me=gt,Ue=xi,_e=yi)},setOp:function(gt,xi,yi){(ne!==gt||Fe!==xi||Ke!==yi)&&(t.stencilOp(gt,xi,yi),ne=gt,Fe=xi,Ke=yi)},setLocked:function(gt){H=gt},setClear:function(gt){Mt!==gt&&(t.clearStencil(gt),Mt=gt)},reset:function(){H=!1,Ee=null,Me=null,Ue=null,_e=null,ne=null,Fe=null,Ke=null,Mt=null}}}const r=new n,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,_=!1,p=null,m=null,v=null,E=null,y=null,w=null,R=null,D=new it(0,0,0),S=0,M=!1,N=null,P=null,F=null,k=null,V=null;const U=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let C=!1,L=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(G)[1]),C=L>=1):G.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),C=L>=2);let ae=null,fe={};const he=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),We=new Ct().fromArray(he),dt=new Ct().fromArray(ve);function pt(H,Ee,Me,Ue){const _e=new Uint8Array(4),ne=t.createTexture();t.bindTexture(H,ne),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<Me;Fe++)H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?t.texImage3D(Ee,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(Ee+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return ne}const re={};re[t.TEXTURE_2D]=pt(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=pt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=pt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=pt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(t.DEPTH_TEST),o.setFunc(xr),Z(!1),oe(Wh),ye(t.CULL_FACE),X(Oi);function ye(H){u[H]!==!0&&(t.enable(H),u[H]=!0)}function be(H){u[H]!==!1&&(t.disable(H),u[H]=!1)}function je(H,Ee){return d[H]!==Ee?(t.bindFramebuffer(H,Ee),d[H]=Ee,H===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Ee),H===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Ee),!0):!1}function He(H,Ee){let Me=h,Ue=!1;if(H){Me=f.get(Ee),Me===void 0&&(Me=[],f.set(Ee,Me));const _e=H.textures;if(Me.length!==_e.length||Me[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,Fe=_e.length;ne<Fe;ne++)Me[ne]=t.COLOR_ATTACHMENT0+ne;Me.length=_e.length,Ue=!0}}else Me[0]!==t.BACK&&(Me[0]=t.BACK,Ue=!0);Ue&&t.drawBuffers(Me)}function Xe(H){return g!==H?(t.useProgram(H),g=H,!0):!1}const O={[Ts]:t.FUNC_ADD,[n3]:t.FUNC_SUBTRACT,[i3]:t.FUNC_REVERSE_SUBTRACT};O[s3]=t.MIN,O[r3]=t.MAX;const z={[o3]:t.ZERO,[a3]:t.ONE,[l3]:t.SRC_COLOR,[gu]:t.SRC_ALPHA,[p3]:t.SRC_ALPHA_SATURATE,[d3]:t.DST_COLOR,[u3]:t.DST_ALPHA,[c3]:t.ONE_MINUS_SRC_COLOR,[_u]:t.ONE_MINUS_SRC_ALPHA,[h3]:t.ONE_MINUS_DST_COLOR,[f3]:t.ONE_MINUS_DST_ALPHA,[m3]:t.CONSTANT_COLOR,[g3]:t.ONE_MINUS_CONSTANT_COLOR,[_3]:t.CONSTANT_ALPHA,[v3]:t.ONE_MINUS_CONSTANT_ALPHA};function X(H,Ee,Me,Ue,_e,ne,Fe,Ke,Mt,gt){if(H===Oi){_===!0&&(be(t.BLEND),_=!1);return}if(_===!1&&(ye(t.BLEND),_=!0),H!==t3){if(H!==p||gt!==M){if((m!==Ts||y!==Ts)&&(t.blendEquation(t.FUNC_ADD),m=Ts,y=Ts),gt)switch(H){case dr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mu:t.blendFunc(t.ONE,t.ONE);break;case $h:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ut("WebGLState: Invalid blending: ",H);break}else switch(H){case dr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case $h:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xh:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",H);break}v=null,E=null,w=null,R=null,D.set(0,0,0),S=0,p=H,M=gt}return}_e=_e||Ee,ne=ne||Me,Fe=Fe||Ue,(Ee!==m||_e!==y)&&(t.blendEquationSeparate(O[Ee],O[_e]),m=Ee,y=_e),(Me!==v||Ue!==E||ne!==w||Fe!==R)&&(t.blendFuncSeparate(z[Me],z[Ue],z[ne],z[Fe]),v=Me,E=Ue,w=ne,R=Fe),(Ke.equals(D)===!1||Mt!==S)&&(t.blendColor(Ke.r,Ke.g,Ke.b,Mt),D.copy(Ke),S=Mt),p=H,M=!1}function se(H,Ee){H.side===Ni?be(t.CULL_FACE):ye(t.CULL_FACE);let Me=H.side===_n;Ee&&(Me=!Me),Z(Me),H.blending===dr&&H.transparent===!1?X(Oi):X(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const Ue=H.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),pe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ye(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function Z(H){N!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),N=H)}function oe(H){H!==ZP?(ye(t.CULL_FACE),H!==P&&(H===Wh?t.cullFace(t.BACK):H===QP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),P=H}function I(H){H!==F&&(C&&t.lineWidth(H),F=H)}function pe(H,Ee,Me){H?(ye(t.POLYGON_OFFSET_FILL),(k!==Ee||V!==Me)&&(k=Ee,V=Me,o.getReversed()&&(Ee=-Ee),t.polygonOffset(Ee,Me))):be(t.POLYGON_OFFSET_FILL)}function ce(H){H?ye(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function ie(H){H===void 0&&(H=t.TEXTURE0+U-1),ae!==H&&(t.activeTexture(H),ae=H)}function ue(H,Ee,Me){Me===void 0&&(ae===null?Me=t.TEXTURE0+U-1:Me=ae);let Ue=fe[Me];Ue===void 0&&(Ue={type:void 0,texture:void 0},fe[Me]=Ue),(Ue.type!==H||Ue.texture!==Ee)&&(ae!==Me&&(t.activeTexture(Me),ae=Me),t.bindTexture(H,Ee||re[H]),Ue.type=H,Ue.texture=Ee)}function T(){const H=fe[ae];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(H){ut("WebGLState:",H)}}function B(){try{t.compressedTexImage3D(...arguments)}catch(H){ut("WebGLState:",H)}}function q(){try{t.texSubImage2D(...arguments)}catch(H){ut("WebGLState:",H)}}function ee(){try{t.texSubImage3D(...arguments)}catch(H){ut("WebGLState:",H)}}function Y(){try{t.compressedTexSubImage2D(...arguments)}catch(H){ut("WebGLState:",H)}}function Te(){try{t.compressedTexSubImage3D(...arguments)}catch(H){ut("WebGLState:",H)}}function ge(){try{t.texStorage2D(...arguments)}catch(H){ut("WebGLState:",H)}}function Ne(){try{t.texStorage3D(...arguments)}catch(H){ut("WebGLState:",H)}}function Be(){try{t.texImage2D(...arguments)}catch(H){ut("WebGLState:",H)}}function me(){try{t.texImage3D(...arguments)}catch(H){ut("WebGLState:",H)}}function xe(H){We.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),We.copy(H))}function Ae(H){dt.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),dt.copy(H))}function Le(H,Ee){let Me=l.get(Ee);Me===void 0&&(Me=new WeakMap,l.set(Ee,Me));let Ue=Me.get(H);Ue===void 0&&(Ue=t.getUniformBlockIndex(Ee,H.name),Me.set(H,Ue))}function De(H,Ee){const Ue=l.get(Ee).get(H);c.get(Ee)!==Ue&&(t.uniformBlockBinding(Ee,Ue,H.__bindingPointIndex),c.set(Ee,Ue))}function Ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ae=null,fe={},d={},f=new WeakMap,h=[],g=null,_=!1,p=null,m=null,v=null,E=null,y=null,w=null,R=null,D=new it(0,0,0),S=0,M=!1,N=null,P=null,F=null,k=null,V=null,We.set(0,0,t.canvas.width,t.canvas.height),dt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:be,bindFramebuffer:je,drawBuffers:He,useProgram:Xe,setBlending:X,setMaterial:se,setFlipSided:Z,setCullFace:oe,setLineWidth:I,setPolygonOffset:pe,setScissorTest:ce,activeTexture:ie,bindTexture:ue,unbindTexture:T,compressedTexImage2D:b,compressedTexImage3D:B,texImage2D:Be,texImage3D:me,updateUBOMapping:Le,uniformBlockBinding:De,texStorage2D:ge,texStorage3D:Ne,texSubImage2D:q,texSubImage3D:ee,compressedTexSubImage2D:Y,compressedTexSubImage3D:Te,scissor:xe,viewport:Ae,reset:Ze}}function nU(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return h?new OffscreenCanvas(T,b):il("canvas")}function _(T,b,B){let q=1;const ee=ue(T);if((ee.width>B||ee.height>B)&&(q=B/Math.max(ee.width,ee.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(q*ee.width),Te=Math.floor(q*ee.height);d===void 0&&(d=g(Y,Te));const ge=b?g(Y,Te):d;return ge.width=Y,ge.height=Te,ge.getContext("2d").drawImage(T,0,0,Y,Te),qe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Te+")."),ge}else return"data"in T&&qe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function p(T){return T.generateMipmaps}function m(T){t.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(T,b,B,q,ee=!1){if(T!==null){if(t[T]!==void 0)return t[T];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=b;if(b===t.RED&&(B===t.FLOAT&&(Y=t.R32F),B===t.HALF_FLOAT&&(Y=t.R16F),B===t.UNSIGNED_BYTE&&(Y=t.R8)),b===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.R8UI),B===t.UNSIGNED_SHORT&&(Y=t.R16UI),B===t.UNSIGNED_INT&&(Y=t.R32UI),B===t.BYTE&&(Y=t.R8I),B===t.SHORT&&(Y=t.R16I),B===t.INT&&(Y=t.R32I)),b===t.RG&&(B===t.FLOAT&&(Y=t.RG32F),B===t.HALF_FLOAT&&(Y=t.RG16F),B===t.UNSIGNED_BYTE&&(Y=t.RG8)),b===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RG8UI),B===t.UNSIGNED_SHORT&&(Y=t.RG16UI),B===t.UNSIGNED_INT&&(Y=t.RG32UI),B===t.BYTE&&(Y=t.RG8I),B===t.SHORT&&(Y=t.RG16I),B===t.INT&&(Y=t.RG32I)),b===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),B===t.UNSIGNED_INT&&(Y=t.RGB32UI),B===t.BYTE&&(Y=t.RGB8I),B===t.SHORT&&(Y=t.RGB16I),B===t.INT&&(Y=t.RGB32I)),b===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),B===t.UNSIGNED_INT&&(Y=t.RGBA32UI),B===t.BYTE&&(Y=t.RGBA8I),B===t.SHORT&&(Y=t.RGBA16I),B===t.INT&&(Y=t.RGBA32I)),b===t.RGB&&(B===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),b===t.RGBA){const Te=ee?nl:at.getTransfer(q);B===t.FLOAT&&(Y=t.RGBA32F),B===t.HALF_FLOAT&&(Y=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Y=Te===_t?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(T,b){let B;return T?b===null||b===hi||b===xo?B=t.DEPTH24_STENCIL8:b===ri?B=t.DEPTH32F_STENCIL8:b===vo&&(B=t.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===hi||b===xo?B=t.DEPTH_COMPONENT24:b===ri?B=t.DEPTH_COMPONENT32F:b===vo&&(B=t.DEPTH_COMPONENT16),B}function w(T,b){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Gt&&T.minFilter!==Zt?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function R(T){const b=T.target;b.removeEventListener("dispose",R),S(b),b.isVideoTexture&&u.delete(b)}function D(T){const b=T.target;b.removeEventListener("dispose",D),N(b)}function S(T){const b=i.get(T);if(b.__webglInit===void 0)return;const B=T.source,q=f.get(B);if(q){const ee=q[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(T),Object.keys(q).length===0&&f.delete(B)}i.remove(T)}function M(T){const b=i.get(T);t.deleteTexture(b.__webglTexture);const B=T.source,q=f.get(B);delete q[b.__cacheKey],o.memory.textures--}function N(T){const b=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let ee=0;ee<b.__webglFramebuffer[q].length;ee++)t.deleteFramebuffer(b.__webglFramebuffer[q][ee]);else t.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)t.deleteFramebuffer(b.__webglFramebuffer[q]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=T.textures;for(let q=0,ee=B.length;q<ee;q++){const Y=i.get(B[q]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(B[q])}i.remove(T)}let P=0;function F(){P=0}function k(){const T=P;return T>=s.maxTextures&&qe("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function V(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function U(T,b){const B=i.get(T);if(T.isVideoTexture&&ce(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const q=T.image;if(q===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{re(B,T,b);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+b)}function C(T,b){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){re(B,T,b);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+b)}function L(T,b){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){re(B,T,b);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+b)}function G(T,b){const B=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&B.__version!==T.version){ye(B,T,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+b)}const ae={[wu]:t.REPEAT,[Ui]:t.CLAMP_TO_EDGE,[Tu]:t.MIRRORED_REPEAT},fe={[Gt]:t.NEAREST,[S3]:t.NEAREST_MIPMAP_NEAREST,[jo]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[uc]:t.LINEAR_MIPMAP_NEAREST,[Ps]:t.LINEAR_MIPMAP_LINEAR},he={[E3]:t.NEVER,[C3]:t.ALWAYS,[w3]:t.LESS,[Jf]:t.LEQUAL,[T3]:t.EQUAL,[Zf]:t.GEQUAL,[A3]:t.GREATER,[R3]:t.NOTEQUAL};function ve(T,b){if(b.type===ri&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Zt||b.magFilter===uc||b.magFilter===jo||b.magFilter===Ps||b.minFilter===Zt||b.minFilter===uc||b.minFilter===jo||b.minFilter===Ps)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,ae[b.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,ae[b.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,ae[b.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,fe[b.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,fe[b.minFilter]),b.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,he[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Gt||b.minFilter!==jo&&b.minFilter!==Ps||b.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function We(T,b){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",R));const q=b.source;let ee=f.get(q);ee===void 0&&(ee={},f.set(q,ee));const Y=V(b);if(Y!==T.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[Y].usedTimes++;const Te=ee[T.__cacheKey];Te!==void 0&&(ee[T.__cacheKey].usedTimes--,Te.usedTimes===0&&M(b)),T.__cacheKey=Y,T.__webglTexture=ee[Y].texture}return B}function dt(T,b,B){return Math.floor(Math.floor(T/B)/b)}function pt(T,b,B,q){const Y=T.updateRanges;if(Y.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,B,q,b.data);else{Y.sort((me,xe)=>me.start-xe.start);let Te=0;for(let me=1;me<Y.length;me++){const xe=Y[Te],Ae=Y[me],Le=xe.start+xe.count,De=dt(Ae.start,b.width,4),Ze=dt(xe.start,b.width,4);Ae.start<=Le+1&&De===Ze&&dt(Ae.start+Ae.count-1,b.width,4)===De?xe.count=Math.max(xe.count,Ae.start+Ae.count-xe.start):(++Te,Y[Te]=Ae)}Y.length=Te+1;const ge=t.getParameter(t.UNPACK_ROW_LENGTH),Ne=t.getParameter(t.UNPACK_SKIP_PIXELS),Be=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let me=0,xe=Y.length;me<xe;me++){const Ae=Y[me],Le=Math.floor(Ae.start/4),De=Math.ceil(Ae.count/4),Ze=Le%b.width,H=Math.floor(Le/b.width),Ee=De,Me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,H),n.texSubImage2D(t.TEXTURE_2D,0,Ze,H,Ee,Me,B,q,b.data)}T.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ge),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(t.UNPACK_SKIP_ROWS,Be)}}function re(T,b,B){let q=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=t.TEXTURE_3D);const ee=We(T,b),Y=b.source;n.bindTexture(q,T.__webglTexture,t.TEXTURE0+B);const Te=i.get(Y);if(Y.version!==Te.__version||ee===!0){n.activeTexture(t.TEXTURE0+B);const ge=at.getPrimaries(at.workingColorSpace),Ne=b.colorSpace===ss?null:at.getPrimaries(b.colorSpace),Be=b.colorSpace===ss||ge===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let me=_(b.image,!1,s.maxTextureSize);me=ie(b,me);const xe=r.convert(b.format,b.colorSpace),Ae=r.convert(b.type);let Le=E(b.internalFormat,xe,Ae,b.colorSpace,b.isVideoTexture);ve(q,b);let De;const Ze=b.mipmaps,H=b.isVideoTexture!==!0,Ee=Te.__version===void 0||ee===!0,Me=Y.dataReady,Ue=w(b,me);if(b.isDepthTexture)Le=y(b.format===Ls,b.type),Ee&&(H?n.texStorage2D(t.TEXTURE_2D,1,Le,me.width,me.height):n.texImage2D(t.TEXTURE_2D,0,Le,me.width,me.height,0,xe,Ae,null));else if(b.isDataTexture)if(Ze.length>0){H&&Ee&&n.texStorage2D(t.TEXTURE_2D,Ue,Le,Ze[0].width,Ze[0].height);for(let _e=0,ne=Ze.length;_e<ne;_e++)De=Ze[_e],H?Me&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,De.width,De.height,xe,Ae,De.data):n.texImage2D(t.TEXTURE_2D,_e,Le,De.width,De.height,0,xe,Ae,De.data);b.generateMipmaps=!1}else H?(Ee&&n.texStorage2D(t.TEXTURE_2D,Ue,Le,me.width,me.height),Me&&pt(b,me,xe,Ae)):n.texImage2D(t.TEXTURE_2D,0,Le,me.width,me.height,0,xe,Ae,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){H&&Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ue,Le,Ze[0].width,Ze[0].height,me.depth);for(let _e=0,ne=Ze.length;_e<ne;_e++)if(De=Ze[_e],b.format!==Hn)if(xe!==null)if(H){if(Me)if(b.layerUpdates.size>0){const Fe=Mp(De.width,De.height,b.format,b.type);for(const Ke of b.layerUpdates){const Mt=De.data.subarray(Ke*Fe/De.data.BYTES_PER_ELEMENT,(Ke+1)*Fe/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,Ke,De.width,De.height,1,xe,Mt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,De.width,De.height,me.depth,xe,De.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,Le,De.width,De.height,me.depth,0,De.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,De.width,De.height,me.depth,xe,Ae,De.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,Le,De.width,De.height,me.depth,0,xe,Ae,De.data)}else{H&&Ee&&n.texStorage2D(t.TEXTURE_2D,Ue,Le,Ze[0].width,Ze[0].height);for(let _e=0,ne=Ze.length;_e<ne;_e++)De=Ze[_e],b.format!==Hn?xe!==null?H?Me&&n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,De.width,De.height,xe,De.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,Le,De.width,De.height,0,De.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Me&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,De.width,De.height,xe,Ae,De.data):n.texImage2D(t.TEXTURE_2D,_e,Le,De.width,De.height,0,xe,Ae,De.data)}else if(b.isDataArrayTexture)if(H){if(Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ue,Le,me.width,me.height,me.depth),Me)if(b.layerUpdates.size>0){const _e=Mp(me.width,me.height,b.format,b.type);for(const ne of b.layerUpdates){const Fe=me.data.subarray(ne*_e/me.data.BYTES_PER_ELEMENT,(ne+1)*_e/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,me.width,me.height,1,xe,Ae,Fe)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,xe,Ae,me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,me.width,me.height,me.depth,0,xe,Ae,me.data);else if(b.isData3DTexture)H?(Ee&&n.texStorage3D(t.TEXTURE_3D,Ue,Le,me.width,me.height,me.depth),Me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,xe,Ae,me.data)):n.texImage3D(t.TEXTURE_3D,0,Le,me.width,me.height,me.depth,0,xe,Ae,me.data);else if(b.isFramebufferTexture){if(Ee)if(H)n.texStorage2D(t.TEXTURE_2D,Ue,Le,me.width,me.height);else{let _e=me.width,ne=me.height;for(let Fe=0;Fe<Ue;Fe++)n.texImage2D(t.TEXTURE_2D,Fe,Le,_e,ne,0,xe,Ae,null),_e>>=1,ne>>=1}}else if(Ze.length>0){if(H&&Ee){const _e=ue(Ze[0]);n.texStorage2D(t.TEXTURE_2D,Ue,Le,_e.width,_e.height)}for(let _e=0,ne=Ze.length;_e<ne;_e++)De=Ze[_e],H?Me&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,xe,Ae,De):n.texImage2D(t.TEXTURE_2D,_e,Le,xe,Ae,De);b.generateMipmaps=!1}else if(H){if(Ee){const _e=ue(me);n.texStorage2D(t.TEXTURE_2D,Ue,Le,_e.width,_e.height)}Me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ae,me)}else n.texImage2D(t.TEXTURE_2D,0,Le,xe,Ae,me);p(b)&&m(q),Te.__version=Y.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ye(T,b,B){if(b.image.length!==6)return;const q=We(T,b),ee=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+B);const Y=i.get(ee);if(ee.version!==Y.__version||q===!0){n.activeTexture(t.TEXTURE0+B);const Te=at.getPrimaries(at.workingColorSpace),ge=b.colorSpace===ss?null:at.getPrimaries(b.colorSpace),Ne=b.colorSpace===ss||Te===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Be=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,xe=[];for(let ne=0;ne<6;ne++)!Be&&!me?xe[ne]=_(b.image[ne],!0,s.maxCubemapSize):xe[ne]=me?b.image[ne].image:b.image[ne],xe[ne]=ie(b,xe[ne]);const Ae=xe[0],Le=r.convert(b.format,b.colorSpace),De=r.convert(b.type),Ze=E(b.internalFormat,Le,De,b.colorSpace),H=b.isVideoTexture!==!0,Ee=Y.__version===void 0||q===!0,Me=ee.dataReady;let Ue=w(b,Ae);ve(t.TEXTURE_CUBE_MAP,b);let _e;if(Be){H&&Ee&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,Ze,Ae.width,Ae.height);for(let ne=0;ne<6;ne++){_e=xe[ne].mipmaps;for(let Fe=0;Fe<_e.length;Fe++){const Ke=_e[Fe];b.format!==Hn?Le!==null?H?Me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,0,0,Ke.width,Ke.height,Le,Ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,Ze,Ke.width,Ke.height,0,Ke.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,0,0,Ke.width,Ke.height,Le,De,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,Ze,Ke.width,Ke.height,0,Le,De,Ke.data)}}}else{if(_e=b.mipmaps,H&&Ee){_e.length>0&&Ue++;const ne=ue(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,Ze,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(me){H?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,xe[ne].width,xe[ne].height,Le,De,xe[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ze,xe[ne].width,xe[ne].height,0,Le,De,xe[ne].data);for(let Fe=0;Fe<_e.length;Fe++){const Mt=_e[Fe].image[ne].image;H?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,0,0,Mt.width,Mt.height,Le,De,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,Ze,Mt.width,Mt.height,0,Le,De,Mt.data)}}else{H?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Le,De,xe[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ze,Le,De,xe[ne]);for(let Fe=0;Fe<_e.length;Fe++){const Ke=_e[Fe];H?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,0,0,Le,De,Ke.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,Ze,Le,De,Ke.image[ne])}}}p(b)&&m(t.TEXTURE_CUBE_MAP),Y.__version=ee.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function be(T,b,B,q,ee,Y){const Te=r.convert(B.format,B.colorSpace),ge=r.convert(B.type),Ne=E(B.internalFormat,Te,ge,B.colorSpace),Be=i.get(b),me=i.get(B);if(me.__renderTarget=b,!Be.__hasExternalTextures){const xe=Math.max(1,b.width>>Y),Ae=Math.max(1,b.height>>Y);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Y,Ne,xe,Ae,b.depth,0,Te,ge,null):n.texImage2D(ee,Y,Ne,xe,Ae,0,Te,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),pe(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,ee,me.__webglTexture,0,I(b)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,ee,me.__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(T,b,B){if(t.bindRenderbuffer(t.RENDERBUFFER,T),b.depthBuffer){const q=b.depthTexture,ee=q&&q.isDepthTexture?q.type:null,Y=y(b.stencilBuffer,ee),Te=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;pe(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(b),Y,b.width,b.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(b),Y,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Y,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,T)}else{const q=b.textures;for(let ee=0;ee<q.length;ee++){const Y=q[ee],Te=r.convert(Y.format,Y.colorSpace),ge=r.convert(Y.type),Ne=E(Y.internalFormat,Te,ge,Y.colorSpace);pe(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(b),Ne,b.width,b.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(b),Ne,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Ne,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(T,b,B){const q=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(b.depthTexture);if(ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ve(t.TEXTURE_CUBE_MAP,b.depthTexture);const Be=r.convert(b.depthTexture.format),me=r.convert(b.depthTexture.type);let xe;b.depthTexture.format===Wi?xe=t.DEPTH_COMPONENT24:b.depthTexture.format===Ls&&(xe=t.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,xe,b.width,b.height,0,Be,me,null)}}else U(b.depthTexture,0);const Y=ee.__webglTexture,Te=I(b),ge=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,Ne=b.depthTexture.format===Ls?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===Wi)pe(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ne,ge,Y,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Ne,ge,Y,0);else if(b.depthTexture.format===Ls)pe(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ne,ge,Y,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Ne,ge,Y,0);else throw new Error("Unknown depthTexture format")}function Xe(T){const b=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){const ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",ee)};q.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=q}if(T.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)He(b.__webglFramebuffer[q],T,q);else{const q=T.texture.mipmaps;q&&q.length>0?He(b.__webglFramebuffer[0],T,0):He(b.__webglFramebuffer,T,0)}else if(B){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=t.createRenderbuffer(),je(b.__webglDepthbuffer[q],T,!1);else{const ee=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Y)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),je(b.__webglDepthbuffer,T,!1);else{const ee=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Y)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function O(T,b,B){const q=i.get(T);b!==void 0&&be(q.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Xe(T)}function z(T){const b=T.texture,B=i.get(T),q=i.get(b);T.addEventListener("dispose",D);const ee=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Te=ee.length>1;if(Te||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=b.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[ge]=[];for(let Ne=0;Ne<b.mipmaps.length;Ne++)B.__webglFramebuffer[ge][Ne]=t.createFramebuffer()}else B.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)B.__webglFramebuffer[ge]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Te)for(let ge=0,Ne=ee.length;ge<Ne;ge++){const Be=i.get(ee[ge]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&pe(T)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ge=0;ge<ee.length;ge++){const Ne=ee[ge];B.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ge]);const Be=r.convert(Ne.format,Ne.colorSpace),me=r.convert(Ne.type),xe=E(Ne.internalFormat,Be,me,Ne.colorSpace,T.isXRRenderTarget===!0),Ae=I(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,xe,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,B.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),je(B.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ve(t.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ne=0;Ne<b.mipmaps.length;Ne++)be(B.__webglFramebuffer[ge][Ne],T,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne);else be(B.__webglFramebuffer[ge],T,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(b)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let ge=0,Ne=ee.length;ge<Ne;ge++){const Be=ee[ge],me=i.get(Be);let xe=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xe=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,me.__webglTexture),ve(xe,Be),be(B.__webglFramebuffer,T,Be,t.COLOR_ATTACHMENT0+ge,xe,0),p(Be)&&m(xe)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ge=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,q.__webglTexture),ve(ge,b),b.mipmaps&&b.mipmaps.length>0)for(let Ne=0;Ne<b.mipmaps.length;Ne++)be(B.__webglFramebuffer[Ne],T,b,t.COLOR_ATTACHMENT0,ge,Ne);else be(B.__webglFramebuffer,T,b,t.COLOR_ATTACHMENT0,ge,0);p(b)&&m(ge),n.unbindTexture()}T.depthBuffer&&Xe(T)}function X(T){const b=T.textures;for(let B=0,q=b.length;B<q;B++){const ee=b[B];if(p(ee)){const Y=v(T),Te=i.get(ee).__webglTexture;n.bindTexture(Y,Te),m(Y),n.unbindTexture()}}}const se=[],Z=[];function oe(T){if(T.samples>0){if(pe(T)===!1){const b=T.textures,B=T.width,q=T.height;let ee=t.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(T),ge=b.length>1;if(ge)for(let Be=0;Be<b.length;Be++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Ne=T.texture.mipmaps;Ne&&Ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Be=0;Be<b.length;Be++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Be]);const me=i.get(b[Be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,me,0)}t.blitFramebuffer(0,0,B,q,0,0,B,q,ee,t.NEAREST),c===!0&&(se.length=0,Z.length=0,se.push(t.COLOR_ATTACHMENT0+Be),T.depthBuffer&&T.resolveDepthBuffer===!1&&(se.push(Y),Z.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Be=0;Be<b.length;Be++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Be]);const me=i.get(b[Be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const b=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function I(T){return Math.min(s.maxSamples,T.samples)}function pe(T){const b=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(T){const b=o.render.frame;u.get(T)!==b&&(u.set(T,b),T.update())}function ie(T,b){const B=T.colorSpace,q=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Mr&&B!==ss&&(at.getTransfer(B)===_t?(q!==Hn||ee!==bn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",B)),b}function ue(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=U,this.setTexture2DArray=C,this.setTexture3D=L,this.setTextureCube=G,this.rebindTextures=O,this.setupRenderTarget=z,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iU(t,e){function n(i,s=ss){let r;const o=at.getTransfer(s);if(i===bn)return t.UNSIGNED_BYTE;if(i===Xf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===qf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===w_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===T_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===b_)return t.BYTE;if(i===E_)return t.SHORT;if(i===vo)return t.UNSIGNED_SHORT;if(i===$f)return t.INT;if(i===hi)return t.UNSIGNED_INT;if(i===ri)return t.FLOAT;if(i===Gi)return t.HALF_FLOAT;if(i===A_)return t.ALPHA;if(i===R_)return t.RGB;if(i===Hn)return t.RGBA;if(i===Wi)return t.DEPTH_COMPONENT;if(i===Ls)return t.DEPTH_STENCIL;if(i===C_)return t.RED;if(i===Yf)return t.RED_INTEGER;if(i===Sr)return t.RG;if(i===jf)return t.RG_INTEGER;if(i===Kf)return t.RGBA_INTEGER;if(i===Ia||i===Na||i===Ua||i===Fa)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Au||i===Ru||i===Cu||i===Pu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Au)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ru)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lu||i===Du||i===Iu||i===Nu||i===Uu||i===Fu||i===Ou)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Lu||i===Du)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Iu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nu)return r.COMPRESSED_R11_EAC;if(i===Uu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Fu)return r.COMPRESSED_RG11_EAC;if(i===Ou)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bu||i===ku||i===zu||i===Vu||i===Hu||i===Gu||i===Wu||i===$u||i===Xu||i===qu||i===Yu||i===ju||i===Ku||i===Ju)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ku)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$u)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ju)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ku)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ju)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zu||i===Qu||i===ef)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Zu)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ef)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tf||i===nf||i===sf||i===rf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===tf)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const sU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rU=`
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

}`;class oU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new z_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new mi({vertexShader:sU,fragmentShader:rU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tn(new Fl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aU extends Tr{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",p=new oU,m={},v=n.getContextAttributes();let E=null,y=null;const w=[],R=[],D=new ot;let S=null;const M=new Mn;M.viewport=new Ct;const N=new Mn;N.viewport=new Ct;const P=[M,N],F=new x2;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ye=w[re];return ye===void 0&&(ye=new vc,w[re]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(re){let ye=w[re];return ye===void 0&&(ye=new vc,w[re]=ye),ye.getGripSpace()},this.getHand=function(re){let ye=w[re];return ye===void 0&&(ye=new vc,w[re]=ye),ye.getHandSpace()};function U(re){const ye=R.indexOf(re.inputSource);if(ye===-1)return;const be=w[ye];be!==void 0&&(be.update(re.inputSource,re.frame,l||o),be.dispatchEvent({type:re.type,data:re.inputSource}))}function C(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",C),s.removeEventListener("inputsourceschange",L);for(let re=0;re<w.length;re++){const ye=R[re];ye!==null&&(R[re]=null,w[re].disconnect(ye))}k=null,V=null,p.reset();for(const re in m)delete m[re];e.setRenderTarget(E),h=null,f=null,d=null,s=null,y=null,pt.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",C),s.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,je=null,He=null;v.depth&&(He=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=v.stencil?Ls:Wi,je=v.stencil?xo:hi);const Xe={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new fi(f.textureWidth,f.textureHeight,{format:Hn,type:bn,depthTexture:new So(f.textureWidth,f.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,be),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new fi(h.framebufferWidth,h.framebufferHeight,{format:Hn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function L(re){for(let ye=0;ye<re.removed.length;ye++){const be=re.removed[ye],je=R.indexOf(be);je>=0&&(R[je]=null,w[je].disconnect(be))}for(let ye=0;ye<re.added.length;ye++){const be=re.added[ye];let je=R.indexOf(be);if(je===-1){for(let Xe=0;Xe<w.length;Xe++)if(Xe>=R.length){R.push(be),je=Xe;break}else if(R[Xe]===null){R[Xe]=be,je=Xe;break}if(je===-1)break}const He=w[je];He&&He.connect(be)}}const G=new $,ae=new $;function fe(re,ye,be){G.setFromMatrixPosition(ye.matrixWorld),ae.setFromMatrixPosition(be.matrixWorld);const je=G.distanceTo(ae),He=ye.projectionMatrix.elements,Xe=be.projectionMatrix.elements,O=He[14]/(He[10]-1),z=He[14]/(He[10]+1),X=(He[9]+1)/He[5],se=(He[9]-1)/He[5],Z=(He[8]-1)/He[0],oe=(Xe[8]+1)/Xe[0],I=O*Z,pe=O*oe,ce=je/(-Z+oe),ie=ce*-Z;if(ye.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ie),re.translateZ(ce),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),He[10]===-1)re.projectionMatrix.copy(ye.projectionMatrix),re.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const ue=O+ce,T=z+ce,b=I-ie,B=pe+(je-ie),q=X*z/T*ue,ee=se*z/T*ue;re.projectionMatrix.makePerspective(b,B,q,ee,ue,T),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function he(re,ye){ye===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ye.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let ye=re.near,be=re.far;p.texture!==null&&(p.depthNear>0&&(ye=p.depthNear),p.depthFar>0&&(be=p.depthFar)),F.near=N.near=M.near=ye,F.far=N.far=M.far=be,(k!==F.near||V!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,V=F.far),F.layers.mask=re.layers.mask|6,M.layers.mask=F.layers.mask&-5,N.layers.mask=F.layers.mask&-3;const je=re.parent,He=F.cameras;he(F,je);for(let Xe=0;Xe<He.length;Xe++)he(He[Xe],je);He.length===2?fe(F,M,N):F.projectionMatrix.copy(M.projectionMatrix),ve(re,F,je)};function ve(re,ye,be){be===null?re.matrix.copy(ye.matrixWorld):(re.matrix.copy(be.matrixWorld),re.matrix.invert(),re.matrix.multiply(ye.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ye.projectionMatrix),re.projectionMatrixInverse.copy(ye.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=of*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(re){c=re,f!==null&&(f.fixedFoveation=re),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=re)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(re){return m[re]};let We=null;function dt(re,ye){if(u=ye.getViewerPose(l||o),g=ye,u!==null){const be=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let je=!1;be.length!==F.cameras.length&&(F.cameras.length=0,je=!0);for(let z=0;z<be.length;z++){const X=be[z];let se=null;if(h!==null)se=h.getViewport(X);else{const oe=d.getViewSubImage(f,X);se=oe.viewport,z===0&&(e.setRenderTargetTextures(y,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(y))}let Z=P[z];Z===void 0&&(Z=new Mn,Z.layers.enable(z),Z.viewport=new Ct,P[z]=Z),Z.matrix.fromArray(X.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(X.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(se.x,se.y,se.width,se.height),z===0&&(F.matrix.copy(Z.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),je===!0&&F.cameras.push(Z)}const He=s.enabledFeatures;if(He&&He.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const z=d.getDepthInformation(be[0]);z&&z.isValid&&z.texture&&p.init(z,s.renderState)}if(He&&He.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let z=0;z<be.length;z++){const X=be[z].camera;if(X){let se=m[X];se||(se=new z_,m[X]=se);const Z=d.getCameraImage(X);se.sourceTexture=Z}}}}for(let be=0;be<w.length;be++){const je=R[be],He=w[be];je!==null&&He!==void 0&&He.update(je,ye,l||o)}We&&We(re,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),g=null}const pt=new $_;pt.setAnimationLoop(dt),this.setAnimationLoop=function(re){We=re},this.dispose=function(){}}}const Ss=new pi,lU=new At;function cU(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,V_(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,E,y){m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,E):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_n&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_n&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),E=v.envMap,y=v.envMapRotation;E&&(p.envMap.value=E,Ss.copy(y),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),p.envMapRotation.value.setFromMatrix4(lU.makeRotationFromEuler(Ss)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=E*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uU(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,E){const y=E.program;i.uniformBlockBinding(v,y)}function l(v,E){let y=s[v.id];y===void 0&&(g(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",p));const w=E.program;i.updateUBOMapping(v,w);const R=e.render.frame;r[v.id]!==R&&(f(v),r[v.id]=R)}function u(v){const E=d();v.__bindingPointIndex=E;const y=t.createBuffer(),w=v.__size,R=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,w,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const E=s[v.id],y=v.uniforms,w=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let R=0,D=y.length;R<D;R++){const S=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,N=S.length;M<N;M++){const P=S[M];if(h(P,R,M,w)===!0){const F=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let U=0;U<k.length;U++){const C=k[U],L=_(C);typeof C=="number"||typeof C=="boolean"?(P.__data[0]=C,t.bufferSubData(t.UNIFORM_BUFFER,F+V,P.__data)):C.isMatrix3?(P.__data[0]=C.elements[0],P.__data[1]=C.elements[1],P.__data[2]=C.elements[2],P.__data[3]=0,P.__data[4]=C.elements[3],P.__data[5]=C.elements[4],P.__data[6]=C.elements[5],P.__data[7]=0,P.__data[8]=C.elements[6],P.__data[9]=C.elements[7],P.__data[10]=C.elements[8],P.__data[11]=0):(C.toArray(P.__data,V),V+=L.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(v,E,y,w){const R=v.value,D=E+"_"+y;if(w[D]===void 0)return typeof R=="number"||typeof R=="boolean"?w[D]=R:w[D]=R.clone(),!0;{const S=w[D];if(typeof R=="number"||typeof R=="boolean"){if(S!==R)return w[D]=R,!0}else if(S.equals(R)===!1)return S.copy(R),!0}return!1}function g(v){const E=v.uniforms;let y=0;const w=16;for(let D=0,S=E.length;D<S;D++){const M=Array.isArray(E[D])?E[D]:[E[D]];for(let N=0,P=M.length;N<P;N++){const F=M[N],k=Array.isArray(F.value)?F.value:[F.value];for(let V=0,U=k.length;V<U;V++){const C=k[V],L=_(C),G=y%w,ae=G%L.boundary,fe=G+ae;y+=ae,fe!==0&&w-fe<L.storage&&(y+=w-fe),F.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=L.storage}}}const R=y%w;return R>0&&(y+=w-R),v.__size=y,v.__cache={},this}function _(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",v),E}function p(v){const E=v.target;E.removeEventListener("dispose",p);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const v in s)t.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}const fU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function dU(){return Jn===null&&(Jn=new e2(fU,16,16,Sr,Gi),Jn.name="DFG_LUT",Jn.minFilter=Zt,Jn.magFilter=Zt,Jn.wrapS=Ui,Jn.wrapT=Ui,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class hU{constructor(e={}){const{canvas:n=L3(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=bn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=h,p=new Set([Kf,jf,Yf]),m=new Set([bn,hi,vo,xo,Xf,qf]),v=new Uint32Array(4),E=new Int32Array(4);let y=null,w=null;const R=[],D=[];let S=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let N=!1;this._outputColorSpace=In;let P=0,F=0,k=null,V=-1,U=null;const C=new Ct,L=new Ct;let G=null;const ae=new it(0);let fe=0,he=n.width,ve=n.height,We=1,dt=null,pt=null;const re=new Ct(0,0,he,ve),ye=new Ct(0,0,he,ve);let be=!1;const je=new id;let He=!1,Xe=!1;const O=new At,z=new $,X=new Ct,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function oe(){return k===null?We:1}let I=i;function pe(A,W){return n.getContext(A,W)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gf}`),n.addEventListener("webglcontextlost",Fe,!1),n.addEventListener("webglcontextrestored",Ke,!1),n.addEventListener("webglcontextcreationerror",Mt,!1),I===null){const W="webgl2";if(I=pe(W,A),I===null)throw pe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw ut("WebGLRenderer: "+A.message),A}let ce,ie,ue,T,b,B,q,ee,Y,Te,ge,Ne,Be,me,xe,Ae,Le,De,Ze,H,Ee,Me,Ue;function _e(){ce=new hI(I),ce.init(),Ee=new iU(I,ce),ie=new rI(I,ce,e,Ee),ue=new tU(I,ce),ie.reversedDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),T=new gI(I),b=new VN,B=new nU(I,ce,ue,b,ie,Ee,T),q=new dI(M),ee=new S2(I),Me=new iI(I,ee),Y=new pI(I,ee,T,Me),Te=new vI(I,Y,ee,Me,T),De=new _I(I,ie,B),xe=new oI(b),ge=new zN(M,q,ce,ie,Me,xe),Ne=new cU(M,b),Be=new GN,me=new jN(ce),Le=new nI(M,q,ue,Te,g,c),Ae=new eU(M,Te,ie),Ue=new uU(I,T,ie,ue),Ze=new sI(I,ce,T),H=new mI(I,ce,T),T.programs=ge.programs,M.capabilities=ie,M.extensions=ce,M.properties=b,M.renderLists=Be,M.shadowMap=Ae,M.state=ue,M.info=T}_e(),_!==bn&&(S=new yI(_,n.width,n.height,s,r));const ne=new aU(M,I);this.xr=ne,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return We},this.setPixelRatio=function(A){A!==void 0&&(We=A,this.setSize(he,ve,!1))},this.getSize=function(A){return A.set(he,ve)},this.setSize=function(A,W,Q=!0){if(ne.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}he=A,ve=W,n.width=Math.floor(A*We),n.height=Math.floor(W*We),Q===!0&&(n.style.width=A+"px",n.style.height=W+"px"),S!==null&&S.setSize(n.width,n.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(he*We,ve*We).floor()},this.setDrawingBufferSize=function(A,W,Q){he=A,ve=W,We=Q,n.width=Math.floor(A*Q),n.height=Math.floor(W*Q),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(_===bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,W,Q,K){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,W,Q,K),ue.viewport(C.copy(re).multiplyScalar(We).round())},this.getScissor=function(A){return A.copy(ye)},this.setScissor=function(A,W,Q,K){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,W,Q,K),ue.scissor(L.copy(ye).multiplyScalar(We).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(A){ue.setScissorTest(be=A)},this.setOpaqueSort=function(A){dt=A},this.setTransparentSort=function(A){pt=A},this.getClearColor=function(A){return A.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,Q=!0){let K=0;if(A){let j=!1;if(k!==null){const Ce=k.texture.format;j=p.has(Ce)}if(j){const Ce=k.texture.type,Ie=m.has(Ce),Pe=Le.getClearColor(),Oe=Le.getClearAlpha(),ze=Pe.r,Qe=Pe.g,nt=Pe.b;Ie?(v[0]=ze,v[1]=Qe,v[2]=nt,v[3]=Oe,I.clearBufferuiv(I.COLOR,0,v)):(E[0]=ze,E[1]=Qe,E[2]=nt,E[3]=Oe,I.clearBufferiv(I.COLOR,0,E))}else K|=I.COLOR_BUFFER_BIT}W&&(K|=I.DEPTH_BUFFER_BIT),Q&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Fe,!1),n.removeEventListener("webglcontextrestored",Ke,!1),n.removeEventListener("webglcontextcreationerror",Mt,!1),Le.dispose(),Be.dispose(),me.dispose(),b.dispose(),q.dispose(),Te.dispose(),Me.dispose(),Ue.dispose(),ge.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",od),ne.removeEventListener("sessionend",ad),us.stop()};function Fe(A){A.preventDefault(),Jh("WebGLRenderer: Context Lost."),N=!0}function Ke(){Jh("WebGLRenderer: Context Restored."),N=!1;const A=T.autoReset,W=Ae.enabled,Q=Ae.autoUpdate,K=Ae.needsUpdate,j=Ae.type;_e(),T.autoReset=A,Ae.enabled=W,Ae.autoUpdate=Q,Ae.needsUpdate=K,Ae.type=j}function Mt(A){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const W=A.target;W.removeEventListener("dispose",gt),xi(W)}function xi(A){yi(A),b.remove(A)}function yi(A){const W=b.get(A).programs;W!==void 0&&(W.forEach(function(Q){ge.releaseProgram(Q)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Q,K,j,Ce){W===null&&(W=se);const Ie=j.isMesh&&j.matrixWorld.determinant()<0,Pe=Q_(A,W,Q,K,j);ue.setMaterial(K,Ie);let Oe=Q.index,ze=1;if(K.wireframe===!0){if(Oe=Y.getWireframeAttribute(Q),Oe===void 0)return;ze=2}const Qe=Q.drawRange,nt=Q.attributes.position;let Ve=Qe.start*ze,vt=(Qe.start+Qe.count)*ze;Ce!==null&&(Ve=Math.max(Ve,Ce.start*ze),vt=Math.min(vt,(Ce.start+Ce.count)*ze)),Oe!==null?(Ve=Math.max(Ve,0),vt=Math.min(vt,Oe.count)):nt!=null&&(Ve=Math.max(Ve,0),vt=Math.min(vt,nt.count));const Lt=vt-Ve;if(Lt<0||Lt===1/0)return;Me.setup(j,K,Pe,Q,Oe);let Rt,xt=Ze;if(Oe!==null&&(Rt=ee.get(Oe),xt=H,xt.setIndex(Rt)),j.isMesh)K.wireframe===!0?(ue.setLineWidth(K.wireframeLinewidth*oe()),xt.setMode(I.LINES)):xt.setMode(I.TRIANGLES);else if(j.isLine){let $t=K.linewidth;$t===void 0&&($t=1),ue.setLineWidth($t*oe()),j.isLineSegments?xt.setMode(I.LINES):j.isLineLoop?xt.setMode(I.LINE_LOOP):xt.setMode(I.LINE_STRIP)}else j.isPoints?xt.setMode(I.POINTS):j.isSprite&&xt.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)sl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))xt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const $t=j._multiDrawStarts,ke=j._multiDrawCounts,xn=j._multiDrawCount,ct=Oe?ee.get(Oe).bytesPerElement:1,Nn=b.get(K).currentProgram.getUniforms();for(let Yn=0;Yn<xn;Yn++)Nn.setValue(I,"_gl_DrawID",Yn),xt.render($t[Yn]/ct,ke[Yn])}else if(j.isInstancedMesh)xt.renderInstances(Ve,Lt,j.count);else if(Q.isInstancedBufferGeometry){const $t=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ke=Math.min(Q.instanceCount,$t);xt.renderInstances(Ve,Lt,ke)}else xt.render(Ve,Lt)};function rd(A,W,Q){A.transparent===!0&&A.side===Ni&&A.forceSinglePass===!1?(A.side=_n,A.needsUpdate=!0,zo(A,W,Q),A.side=ls,A.needsUpdate=!0,zo(A,W,Q),A.side=Ni):zo(A,W,Q)}this.compile=function(A,W,Q=null){Q===null&&(Q=A),w=me.get(Q),w.init(W),D.push(w),Q.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),A!==Q&&A.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights();const K=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ce=j.material;if(Ce)if(Array.isArray(Ce))for(let Ie=0;Ie<Ce.length;Ie++){const Pe=Ce[Ie];rd(Pe,Q,j),K.add(Pe)}else rd(Ce,Q,j),K.add(Ce)}),w=D.pop(),K},this.compileAsync=function(A,W,Q=null){const K=this.compile(A,W,Q);return new Promise(j=>{function Ce(){if(K.forEach(function(Ie){b.get(Ie).currentProgram.isReady()&&K.delete(Ie)}),K.size===0){j(A);return}setTimeout(Ce,10)}ce.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let kl=null;function Z_(A){kl&&kl(A)}function od(){us.stop()}function ad(){us.start()}const us=new $_;us.setAnimationLoop(Z_),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(A){kl=A,ne.setAnimationLoop(A),A===null?us.stop():us.start()},ne.addEventListener("sessionstart",od),ne.addEventListener("sessionend",ad),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const Q=ne.enabled===!0&&ne.isPresenting===!0,K=S!==null&&(k===null||Q)&&S.begin(M,k);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(W),W=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,W,k),w=me.get(A,D.length),w.init(W),D.push(w),O.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),je.setFromProjectionMatrix(O,oi,W.reversedDepth),Xe=this.localClippingEnabled,He=xe.init(this.clippingPlanes,Xe),y=Be.get(A,R.length),y.init(),R.push(y),ne.enabled===!0&&ne.isPresenting===!0){const Ie=M.xr.getDepthSensingMesh();Ie!==null&&zl(Ie,W,-1/0,M.sortObjects)}zl(A,W,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(dt,pt),Z=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Z&&Le.addToRenderList(y,A),this.info.render.frame++,He===!0&&xe.beginShadows();const j=w.state.shadowsArray;if(Ae.render(j,A,W),He===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&S.hasRenderPass())===!1){const Ie=y.opaque,Pe=y.transmissive;if(w.setupLights(),W.isArrayCamera){const Oe=W.cameras;if(Pe.length>0)for(let ze=0,Qe=Oe.length;ze<Qe;ze++){const nt=Oe[ze];cd(Ie,Pe,A,nt)}Z&&Le.render(A);for(let ze=0,Qe=Oe.length;ze<Qe;ze++){const nt=Oe[ze];ld(y,A,nt,nt.viewport)}}else Pe.length>0&&cd(Ie,Pe,A,W),Z&&Le.render(A),ld(y,A,W)}k!==null&&F===0&&(B.updateMultisampleRenderTarget(k),B.updateRenderTargetMipmap(k)),K&&S.end(M),A.isScene===!0&&A.onAfterRender(M,A,W),Me.resetDefaultState(),V=-1,U=null,D.pop(),D.length>0?(w=D[D.length-1],He===!0&&xe.setGlobalState(M.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function zl(A,W,Q,K){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||je.intersectsSprite(A)){K&&X.setFromMatrixPosition(A.matrixWorld).applyMatrix4(O);const Ie=Te.update(A),Pe=A.material;Pe.visible&&y.push(A,Ie,Pe,Q,X.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||je.intersectsObject(A))){const Ie=Te.update(A),Pe=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),X.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),X.copy(Ie.boundingSphere.center)),X.applyMatrix4(A.matrixWorld).applyMatrix4(O)),Array.isArray(Pe)){const Oe=Ie.groups;for(let ze=0,Qe=Oe.length;ze<Qe;ze++){const nt=Oe[ze],Ve=Pe[nt.materialIndex];Ve&&Ve.visible&&y.push(A,Ie,Ve,Q,X.z,nt)}}else Pe.visible&&y.push(A,Ie,Pe,Q,X.z,null)}}const Ce=A.children;for(let Ie=0,Pe=Ce.length;Ie<Pe;Ie++)zl(Ce[Ie],W,Q,K)}function ld(A,W,Q,K){const{opaque:j,transmissive:Ce,transparent:Ie}=A;w.setupLightsView(Q),He===!0&&xe.setGlobalState(M.clippingPlanes,Q),K&&ue.viewport(C.copy(K)),j.length>0&&ko(j,W,Q),Ce.length>0&&ko(Ce,W,Q),Ie.length>0&&ko(Ie,W,Q),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function cd(A,W,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[K.id]===void 0){const Ve=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[K.id]=new fi(1,1,{generateMipmaps:!0,type:Ve?Gi:bn,minFilter:Ps,samples:Math.max(4,ie.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Ce=w.state.transmissionRenderTarget[K.id],Ie=K.viewport||C;Ce.setSize(Ie.z*M.transmissionResolutionScale,Ie.w*M.transmissionResolutionScale);const Pe=M.getRenderTarget(),Oe=M.getActiveCubeFace(),ze=M.getActiveMipmapLevel();M.setRenderTarget(Ce),M.getClearColor(ae),fe=M.getClearAlpha(),fe<1&&M.setClearColor(16777215,.5),M.clear(),Z&&Le.render(Q);const Qe=M.toneMapping;M.toneMapping=ui;const nt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),w.setupLightsView(K),He===!0&&xe.setGlobalState(M.clippingPlanes,K),ko(A,Q,K),B.updateMultisampleRenderTarget(Ce),B.updateRenderTargetMipmap(Ce),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let vt=0,Lt=W.length;vt<Lt;vt++){const Rt=W[vt],{object:xt,geometry:$t,material:ke,group:xn}=Rt;if(ke.side===Ni&&xt.layers.test(K.layers)){const ct=ke.side;ke.side=_n,ke.needsUpdate=!0,ud(xt,Q,K,$t,ke,xn),ke.side=ct,ke.needsUpdate=!0,Ve=!0}}Ve===!0&&(B.updateMultisampleRenderTarget(Ce),B.updateRenderTargetMipmap(Ce))}M.setRenderTarget(Pe,Oe,ze),M.setClearColor(ae,fe),nt!==void 0&&(K.viewport=nt),M.toneMapping=Qe}function ko(A,W,Q){const K=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Ce=A.length;j<Ce;j++){const Ie=A[j],{object:Pe,geometry:Oe,group:ze}=Ie;let Qe=Ie.material;Qe.allowOverride===!0&&K!==null&&(Qe=K),Pe.layers.test(Q.layers)&&ud(Pe,W,Q,Oe,Qe,ze)}}function ud(A,W,Q,K,j,Ce){A.onBeforeRender(M,W,Q,K,j,Ce),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(M,W,Q,K,A,Ce),j.transparent===!0&&j.side===Ni&&j.forceSinglePass===!1?(j.side=_n,j.needsUpdate=!0,M.renderBufferDirect(Q,W,K,j,A,Ce),j.side=ls,j.needsUpdate=!0,M.renderBufferDirect(Q,W,K,j,A,Ce),j.side=Ni):M.renderBufferDirect(Q,W,K,j,A,Ce),A.onAfterRender(M,W,Q,K,j,Ce)}function zo(A,W,Q){W.isScene!==!0&&(W=se);const K=b.get(A),j=w.state.lights,Ce=w.state.shadowsArray,Ie=j.state.version,Pe=ge.getParameters(A,j.state,Ce,W,Q),Oe=ge.getProgramCacheKey(Pe);let ze=K.programs;K.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,K.fog=W.fog;const Qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;K.envMap=q.get(A.envMap||K.environment,Qe),K.envMapRotation=K.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",gt),ze=new Map,K.programs=ze);let nt=ze.get(Oe);if(nt!==void 0){if(K.currentProgram===nt&&K.lightsStateVersion===Ie)return dd(A,Pe),nt}else Pe.uniforms=ge.getUniforms(A),A.onBeforeCompile(Pe,M),nt=ge.acquireProgram(Pe,Oe),ze.set(Oe,nt),K.uniforms=Pe.uniforms;const Ve=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=xe.uniform),dd(A,Pe),K.needsLights=t0(A),K.lightsStateVersion=Ie,K.needsLights&&(Ve.ambientLightColor.value=j.state.ambient,Ve.lightProbe.value=j.state.probe,Ve.directionalLights.value=j.state.directional,Ve.directionalLightShadows.value=j.state.directionalShadow,Ve.spotLights.value=j.state.spot,Ve.spotLightShadows.value=j.state.spotShadow,Ve.rectAreaLights.value=j.state.rectArea,Ve.ltc_1.value=j.state.rectAreaLTC1,Ve.ltc_2.value=j.state.rectAreaLTC2,Ve.pointLights.value=j.state.point,Ve.pointLightShadows.value=j.state.pointShadow,Ve.hemisphereLights.value=j.state.hemi,Ve.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ve.spotLightMatrix.value=j.state.spotLightMatrix,Ve.spotLightMap.value=j.state.spotLightMap,Ve.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=nt,K.uniformsList=null,nt}function fd(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Oa.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function dd(A,W){const Q=b.get(A);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function Q_(A,W,Q,K,j){W.isScene!==!0&&(W=se),B.resetTextureUnits();const Ce=W.fog,Ie=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?W.environment:null,Pe=k===null?M.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Mr,Oe=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,ze=q.get(K.envMap||Ie,Oe),Qe=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,nt=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!Q.morphAttributes.position,vt=!!Q.morphAttributes.normal,Lt=!!Q.morphAttributes.color;let Rt=ui;K.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Rt=M.toneMapping);const xt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,$t=xt!==void 0?xt.length:0,ke=b.get(K),xn=w.state.lights;if(He===!0&&(Xe===!0||A!==U)){const zt=A===U&&K.id===V;xe.setState(K,A,zt)}let ct=!1;K.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==xn.state.version||ke.outputColorSpace!==Pe||j.isBatchedMesh&&ke.batching===!1||!j.isBatchedMesh&&ke.batching===!0||j.isBatchedMesh&&ke.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ke.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||j.isInstancedMesh&&ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ke.instancingMorph===!1&&j.morphTexture!==null||ke.envMap!==ze||K.fog===!0&&ke.fog!==Ce||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==xe.numPlanes||ke.numIntersection!==xe.numIntersection)||ke.vertexAlphas!==Qe||ke.vertexTangents!==nt||ke.morphTargets!==Ve||ke.morphNormals!==vt||ke.morphColors!==Lt||ke.toneMapping!==Rt||ke.morphTargetsCount!==$t)&&(ct=!0):(ct=!0,ke.__version=K.version);let Nn=ke.currentProgram;ct===!0&&(Nn=zo(K,W,j));let Yn=!1,fs=!1,Vs=!1;const yt=Nn.getUniforms(),Ht=ke.uniforms;if(ue.useProgram(Nn.program)&&(Yn=!0,fs=!0,Vs=!0),K.id!==V&&(V=K.id,fs=!0),Yn||U!==A){ue.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),yt.setValue(I,"projectionMatrix",A.projectionMatrix),yt.setValue(I,"viewMatrix",A.matrixWorldInverse);const qi=yt.map.cameraPosition;qi!==void 0&&qi.setValue(I,z.setFromMatrixPosition(A.matrixWorld)),ie.logarithmicDepthBuffer&&yt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&yt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,fs=!0,Vs=!0)}if(ke.needsLights&&(xn.state.directionalShadowMap.length>0&&yt.setValue(I,"directionalShadowMap",xn.state.directionalShadowMap,B),xn.state.spotShadowMap.length>0&&yt.setValue(I,"spotShadowMap",xn.state.spotShadowMap,B),xn.state.pointShadowMap.length>0&&yt.setValue(I,"pointShadowMap",xn.state.pointShadowMap,B)),j.isSkinnedMesh){yt.setOptional(I,j,"bindMatrix"),yt.setOptional(I,j,"bindMatrixInverse");const zt=j.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),yt.setValue(I,"boneTexture",zt.boneTexture,B))}j.isBatchedMesh&&(yt.setOptional(I,j,"batchingTexture"),yt.setValue(I,"batchingTexture",j._matricesTexture,B),yt.setOptional(I,j,"batchingIdTexture"),yt.setValue(I,"batchingIdTexture",j._indirectTexture,B),yt.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&yt.setValue(I,"batchingColorTexture",j._colorsTexture,B));const Xi=Q.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&De.update(j,Q,Nn),(fs||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,yt.setValue(I,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&W.environment!==null&&(Ht.envMapIntensity.value=W.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=dU()),fs&&(yt.setValue(I,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&e0(Ht,Vs),Ce&&K.fog===!0&&Ne.refreshFogUniforms(Ht,Ce),Ne.refreshMaterialUniforms(Ht,K,We,ve,w.state.transmissionRenderTarget[A.id]),Oa.upload(I,fd(ke),Ht,B)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Oa.upload(I,fd(ke),Ht,B),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&yt.setValue(I,"center",j.center),yt.setValue(I,"modelViewMatrix",j.modelViewMatrix),yt.setValue(I,"normalMatrix",j.normalMatrix),yt.setValue(I,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const zt=K.uniformsGroups;for(let qi=0,Hs=zt.length;qi<Hs;qi++){const hd=zt[qi];Ue.update(hd,Nn),Ue.bind(hd,Nn)}}return Nn}function e0(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function t0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,W,Q){const K=b.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=W,b.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const Q=b.get(A);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0};const n0=I.createFramebuffer();this.setRenderTarget=function(A,W=0,Q=0){k=A,P=W,F=Q;let K=null,j=!1,Ce=!1;if(A){const Pe=b.get(A);if(Pe.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(I.FRAMEBUFFER,Pe.__webglFramebuffer),C.copy(A.viewport),L.copy(A.scissor),G=A.scissorTest,ue.viewport(C),ue.scissor(L),ue.setScissorTest(G),V=-1;return}else if(Pe.__webglFramebuffer===void 0)B.setupRenderTarget(A);else if(Pe.__hasExternalTextures)B.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qe=A.depthTexture;if(Pe.__boundDepthTexture!==Qe){if(Qe!==null&&b.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(A)}}const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ce=!0);const ze=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[W])?K=ze[W][Q]:K=ze[W],j=!0):A.samples>0&&B.useMultisampledRTT(A)===!1?K=b.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?K=ze[Q]:K=ze,C.copy(A.viewport),L.copy(A.scissor),G=A.scissorTest}else C.copy(re).multiplyScalar(We).floor(),L.copy(ye).multiplyScalar(We).floor(),G=be;if(Q!==0&&(K=n0),ue.bindFramebuffer(I.FRAMEBUFFER,K)&&ue.drawBuffers(A,K),ue.viewport(C),ue.scissor(L),ue.setScissorTest(G),j){const Pe=b.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pe.__webglTexture,Q)}else if(Ce){const Pe=W;for(let Oe=0;Oe<A.textures.length;Oe++){const ze=b.get(A.textures[Oe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,Q,Pe)}}else if(A!==null&&Q!==0){const Pe=b.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pe.__webglTexture,Q)}V=-1},this.readRenderTargetPixels=function(A,W,Q,K,j,Ce,Ie,Pe=0){if(!(A&&A.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){ue.bindFramebuffer(I.FRAMEBUFFER,Oe);try{const ze=A.textures[Pe],Qe=ze.format,nt=ze.type;if(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pe),!ie.textureFormatReadable(Qe)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(nt)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-K&&Q>=0&&Q<=A.height-j&&I.readPixels(W,Q,K,j,Ee.convert(Qe),Ee.convert(nt),Ce)}finally{const ze=k!==null?b.get(k).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,W,Q,K,j,Ce,Ie,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe)if(W>=0&&W<=A.width-K&&Q>=0&&Q<=A.height-j){ue.bindFramebuffer(I.FRAMEBUFFER,Oe);const ze=A.textures[Pe],Qe=ze.format,nt=ze.type;if(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pe),!ie.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.bufferData(I.PIXEL_PACK_BUFFER,Ce.byteLength,I.STREAM_READ),I.readPixels(W,Q,K,j,Ee.convert(Qe),Ee.convert(nt),0);const vt=k!==null?b.get(k).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,vt);const Lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await D3(I,Lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ce),I.deleteBuffer(Ve),I.deleteSync(Lt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,Q=0){const K=Math.pow(2,-Q),j=Math.floor(A.image.width*K),Ce=Math.floor(A.image.height*K),Ie=W!==null?W.x:0,Pe=W!==null?W.y:0;B.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,Q,0,0,Ie,Pe,j,Ce),ue.unbindTexture()};const i0=I.createFramebuffer(),s0=I.createFramebuffer();this.copyTextureToTexture=function(A,W,Q=null,K=null,j=0,Ce=0){let Ie,Pe,Oe,ze,Qe,nt,Ve,vt,Lt;const Rt=A.isCompressedTexture?A.mipmaps[Ce]:A.image;if(Q!==null)Ie=Q.max.x-Q.min.x,Pe=Q.max.y-Q.min.y,Oe=Q.isBox3?Q.max.z-Q.min.z:1,ze=Q.min.x,Qe=Q.min.y,nt=Q.isBox3?Q.min.z:0;else{const Ht=Math.pow(2,-j);Ie=Math.floor(Rt.width*Ht),Pe=Math.floor(Rt.height*Ht),A.isDataArrayTexture?Oe=Rt.depth:A.isData3DTexture?Oe=Math.floor(Rt.depth*Ht):Oe=1,ze=0,Qe=0,nt=0}K!==null?(Ve=K.x,vt=K.y,Lt=K.z):(Ve=0,vt=0,Lt=0);const xt=Ee.convert(W.format),$t=Ee.convert(W.type);let ke;W.isData3DTexture?(B.setTexture3D(W,0),ke=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(B.setTexture2DArray(W,0),ke=I.TEXTURE_2D_ARRAY):(B.setTexture2D(W,0),ke=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const xn=I.getParameter(I.UNPACK_ROW_LENGTH),ct=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Nn=I.getParameter(I.UNPACK_SKIP_PIXELS),Yn=I.getParameter(I.UNPACK_SKIP_ROWS),fs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Rt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Rt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,nt);const Vs=A.isDataArrayTexture||A.isData3DTexture,yt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Ht=b.get(A),Xi=b.get(W),zt=b.get(Ht.__renderTarget),qi=b.get(Xi.__renderTarget);ue.bindFramebuffer(I.READ_FRAMEBUFFER,zt.__webglFramebuffer),ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Hs=0;Hs<Oe;Hs++)Vs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,b.get(A).__webglTexture,j,nt+Hs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,b.get(W).__webglTexture,Ce,Lt+Hs)),I.blitFramebuffer(ze,Qe,Ie,Pe,Ve,vt,Ie,Pe,I.DEPTH_BUFFER_BIT,I.NEAREST);ue.bindFramebuffer(I.READ_FRAMEBUFFER,null),ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||b.has(A)){const Ht=b.get(A),Xi=b.get(W);ue.bindFramebuffer(I.READ_FRAMEBUFFER,i0),ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,s0);for(let zt=0;zt<Oe;zt++)Vs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.__webglTexture,j,nt+zt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ht.__webglTexture,j),yt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xi.__webglTexture,Ce,Lt+zt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xi.__webglTexture,Ce),j!==0?I.blitFramebuffer(ze,Qe,Ie,Pe,Ve,vt,Ie,Pe,I.COLOR_BUFFER_BIT,I.NEAREST):yt?I.copyTexSubImage3D(ke,Ce,Ve,vt,Lt+zt,ze,Qe,Ie,Pe):I.copyTexSubImage2D(ke,Ce,Ve,vt,ze,Qe,Ie,Pe);ue.bindFramebuffer(I.READ_FRAMEBUFFER,null),ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else yt?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(ke,Ce,Ve,vt,Lt,Ie,Pe,Oe,xt,$t,Rt.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(ke,Ce,Ve,vt,Lt,Ie,Pe,Oe,xt,Rt.data):I.texSubImage3D(ke,Ce,Ve,vt,Lt,Ie,Pe,Oe,xt,$t,Rt):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ce,Ve,vt,Ie,Pe,xt,$t,Rt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ce,Ve,vt,Rt.width,Rt.height,xt,Rt.data):I.texSubImage2D(I.TEXTURE_2D,Ce,Ve,vt,Ie,Pe,xt,$t,Rt);I.pixelStorei(I.UNPACK_ROW_LENGTH,xn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Nn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,fs),Ce===0&&W.generateMipmaps&&I.generateMipmap(ke),ue.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&B.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?B.setTextureCube(A,0):A.isData3DTexture?B.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?B.setTexture2DArray(A,0):B.setTexture2D(A,0),ue.unbindTexture()},this.resetState=function(){P=0,F=0,k=null,ue.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),n.unpackColorSpace=at._getUnpackColorSpace()}}const pU={class:"brain-3d-container"},mU={class:"brain-overlay"},gU={class:"brain-stats"},_U={class:"stat-item"},vU={class:"stat-value"},xU={class:"stat-item"},yU={class:"stat-value"},SU={class:"stat-item"},MU={class:"stat-value"},bU={key:0,class:"loading-overlay"},EU=un({__name:"Brain3D",props:{stats:{}},setup(t){const e=t,n=we(),i=we(!0),s=we(0),r=we(0),o=we(0);let a=null,c=null,l=null,u=null,d=null,f=null,h=null;const g={storage:4886754,thinking:16098851,skill:8311585};gi(()=>{_()}),To(()=>{D()}),Fi(()=>e.stats,S=>{S&&y(S)},{deep:!0});function _(){if(!n.value)return;const S=n.value,M=S.clientWidth,N=S.clientHeight;a=new Y3,a.background=new it(1296),a.fog=new ed(1296,.02),c=new Mn(60,M/N,.1,1e3),c.position.z=30,l=new hU({antialias:!0,alpha:!0}),l.setSize(M,N),l.setPixelRatio(window.devicePixelRatio),S.appendChild(l.domElement),u=new qr,a.add(u),p(),m(),v(),E(),w(),window.addEventListener("resize",R),i.value=!1}function p(){if(!u)return;const S=new al(8,2),M=new Fc({color:6666,emissive:65345,emissiveIntensity:.1,transparent:!0,opacity:.8,wireframe:!0}),N=new Tn(S,M);u.add(N);const P=new al(5,1),F=new Fc({color:65345,emissive:65345,emissiveIntensity:.5,transparent:!0,opacity:.3}),k=new Tn(P,F);u.add(k),[{name:"storage",position:[-6,3,0],color:g.storage},{name:"thinking",position:[6,3,0],color:g.thinking},{name:"skill",position:[0,-5,3],color:g.skill}].forEach(U=>{const C=new ll(2.5,32,32),L=new Fc({color:U.color,emissive:U.color,emissiveIntensity:.3,transparent:!0,opacity:.6}),G=new Tn(C,L);G.position.set(U.position[0],U.position[1],U.position[2]),G.userData={region:U.name},u.add(G);const ae=new ll(3,32,32),fe=new nd({color:U.color,transparent:!0,opacity:.1}),he=new Tn(ae,fe);he.position.copy(G.position),u.add(he)})}function m(){if(!u)return;const S=500,M=new cn,N=new Float32Array(S*3),P=new Float32Array(S*3);for(let k=0;k<S;k++){const V=Math.random()*Math.PI*2,U=Math.acos(2*Math.random()-1),C=8+Math.random()*6;N[k*3]=C*Math.sin(U)*Math.cos(V),N[k*3+1]=C*Math.sin(U)*Math.sin(V),N[k*3+2]=C*Math.cos(U);const L=Math.random();let G;L<.33?G=new it(g.storage):L<.66?G=new it(g.thinking):G=new it(g.skill),P[k*3]=G.r,P[k*3+1]=G.g,P[k*3+2]=G.b}M.setAttribute("position",new Rn(N,3)),M.setAttribute("color",new Rn(P,3));const F=new B_({size:.15,vertexColors:!0,transparent:!0,opacity:.8,blending:mu});f=new o2(M,F),u.add(f),s.value=S}function v(){if(!u)return;const S=200,M=new cn,N=new Float32Array(S*6);for(let F=0;F<S;F++){const k=Math.random()*Math.PI*2,V=Math.acos(2*Math.random()-1),U=8+Math.random()*4,C=Math.random()*Math.PI*2,L=Math.acos(2*Math.random()-1),G=8+Math.random()*4;N[F*6]=U*Math.sin(V)*Math.cos(k),N[F*6+1]=U*Math.sin(V)*Math.sin(k),N[F*6+2]=U*Math.cos(V),N[F*6+3]=G*Math.sin(L)*Math.cos(C),N[F*6+4]=G*Math.sin(L)*Math.sin(C),N[F*6+5]=G*Math.cos(L)}M.setAttribute("position",new Rn(N,3));const P=new O_({color:65345,transparent:!0,opacity:.15});h=new r2(M,P),u.add(h),r.value=S,o.value=3}function E(){if(!a)return;const S=new _2(4210752,2);a.add(S);const M=new xa(65345,2,50);M.position.set(0,0,0),a.add(M);const N=new xa(g.storage,1,20);N.position.set(-6,3,0),a.add(N);const P=new xa(g.thinking,1,20);P.position.set(6,3,0),a.add(P);const F=new xa(g.skill,1,20);F.position.set(0,-5,3),a.add(F)}function y(S){var k,V,U;if(!u)return;const M=S.memory_count||0,N=((k=S.tiered_breakdown)==null?void 0:k.storage)||0,P=((V=S.tiered_breakdown)==null?void 0:V.thinking)||0,F=((U=S.tiered_breakdown)==null?void 0:U.skill)||0;u.children.forEach(C=>{if(C.userData.region){const L=C.material;let G=.3;switch(C.userData.region){case"storage":G=.3+N/Math.max(M,1)*.7;break;case"thinking":G=.3+P/Math.max(M,1)*.7;break;case"skill":G=.3+F/Math.max(M,1)*.7;break}L.emissiveIntensity=G}})}function w(){if(!(!a||!c||!l||!u)){if(d=requestAnimationFrame(w),u.rotation.y+=.002,u.rotation.x=Math.sin(Date.now()*5e-4)*.1,f){const S=f.geometry.attributes.position.array,M=Date.now()*.001;for(let N=0;N<S.length;N+=3){const P=N/3,F=Math.sin(M+P*.1)*.5;S[N+2]+=F*.01}f.geometry.attributes.position.needsUpdate=!0}l.render(a,c)}}function R(){if(!n.value||!c||!l)return;const S=n.value.clientWidth,M=n.value.clientHeight;c.aspect=S/M,c.updateProjectionMatrix(),l.setSize(S,M)}function D(){d&&cancelAnimationFrame(d),window.removeEventListener("resize",R),l&&(l.dispose(),n.value&&l.domElement.parentNode===n.value&&n.value.removeChild(l.domElement)),a=null,c=null,l=null,u=null,f=null,h=null}return(S,M)=>(le(),de("div",pU,[x("div",{ref_key:"canvasRef",ref:n,class:"canvas-wrapper"},null,512),x("div",mU,[x("div",gU,[x("div",_U,[M[0]||(M[0]=x("span",{class:"stat-label"},"神经元",-1)),x("span",vU,te(s.value),1)]),x("div",xU,[M[1]||(M[1]=x("span",{class:"stat-label"},"突触连接",-1)),x("span",yU,te(r.value),1)]),x("div",SU,[M[2]||(M[2]=x("span",{class:"stat-label"},"活跃区域",-1)),x("span",MU,te(o.value),1)])])]),i.value?(le(),de("div",bU,[...M[3]||(M[3]=[x("div",{class:"loading-spinner"},null,-1),x("p",null,"初始化大脑模型...",-1)])])):Je("",!0)]))}}),wU=vn(EU,[["__scopeId","data-v-e30ab36f"]]),TU={class:"dashboard"},AU={class:"sidebar"},RU={class:"sidebar-header"},CU={class:"nav-tabs"},PU=["onClick"],LU={class:"tab-icon"},DU={class:"tab-label"},IU={class:"action-buttons"},NU=["disabled"],UU=["disabled"],FU={class:"sidebar-footer"},OU={class:"main-content"},BU={key:0,class:"overview-container"},kU={class:"brain-3d-section"},zU={key:3,class:"brain-container"},VU={key:0,class:"right-panel"},HU={class:"modal-header"},GU={class:"modal-body"},WU={class:"detail-section"},$U={class:"detail-section"},XU={key:0,class:"detail-section"},qU={class:"keywords"},YU={class:"detail-section"},jU={class:"metadata"},KU={class:"meta-item"},JU={class:"meta-value"},ZU={class:"meta-item"},QU={class:"meta-value"},eF={class:"meta-item"},tF={class:"meta-value"},nF=un({__name:"App",setup(t){const e=_i(),{graphData:n,isLoading:i,evolutionStatus:s,stats:r}=Er(e),o=[{id:"overview",label:"概览",icon:"📊"},{id:"write",label:"写入",icon:"✏️"},{id:"tiered",label:"三层记忆",icon:"🧠"},{id:"brain",label:"AI大脑",icon:"🤖"},{id:"llm",label:"LLM交互",icon:"🤖"},{id:"evolution",label:"进化配置",icon:"⚙️"},{id:"feedback",label:"反馈",icon:"💬"},{id:"merge",label:"合并链",icon:"🔗"}],a=we("overview"),c=we(null),l=we(null),u=we(!1),d=we(!1),f=we(!1),h=k0(null),g=we({}),_=wt(()=>{var V,U;return((V=s.value)==null?void 0:V.enabled)&&((U=s.value)==null?void 0:U.running)});gi(async()=>{e.addLog("初始化系统...","info");try{await e.fetchStats(),e.addLog("加载统计数据完成","success"),await e.fetchGraph(),e.addLog("加载记忆图谱完成","success"),await e.fetchEvolutionStatus(),e.addLog("加载进化状态完成","success")}catch(V){e.addLog("初始化失败: "+V.message,"error")}});function p(V){e.addLog(`点击节点: ${V.label||V.id}`,"info"),l.value=V.id,a.value!=="merge"&&(a.value="merge")}function m(V){c.value=V,e.addLog(`选择记忆: ${V.title}`,"info")}function v(V){e.addLog(`新记忆已写入: ${V}`,"success"),e.fetchStats(),e.fetchGraph()}function E(){e.addLog("记忆已保存","success"),S(),e.fetchStats(),e.fetchGraph()}function y(V){e.addLog(`记忆已删除: ${V}`,"success"),S(),c.value=null,e.fetchStats(),e.fetchGraph()}function w(V){e.addLog(`点击合并链节点: ${V.title}`,"info")}function R(){c.value=null}function D(){c.value&&(h.value=eT,g.value={visible:!0,memory:c.value},f.value=!0)}function S(){f.value=!1,h.value=null,g.value={}}function M(){c.value&&(l.value=c.value.id,a.value="merge",R())}async function N(){u.value=!0,e.addLog("开始重建图谱...","info");try{await Qn.rebuildGraph(),await e.fetchGraph(),e.addLog("图谱重建完成","success")}catch(V){e.addLog("图谱重建失败: "+V.message,"error")}finally{u.value=!1}}async function P(){d.value=!0,e.addLog("触发反思任务...","info");try{await e.reflectMemory(),e.addLog("反思任务已触发","success"),await e.fetchEvolutionStatus()}catch(V){e.addLog("触发反思失败: "+V.message,"error")}finally{d.value=!1}}async function F(){e.addLog("刷新所有数据...","info");try{await Promise.all([e.fetchStats(),e.fetchGraph(),e.fetchEvolutionStatus()]),e.addLog("数据刷新完成","success")}catch(V){e.addLog("数据刷新失败: "+V.message,"error")}}function k(V){return{storage:"存储记忆",thinking:"思维记忆",skill:"技能记忆"}[V||""]||V||"未知"}return(V,U)=>{var C;return le(),de("div",TU,[U[10]||(U[10]=x("div",{class:"scanline"},null,-1)),x("div",AU,[x("div",RU,[U[2]||(U[2]=x("h1",{class:"logo"},"Memory System",-1)),x("div",{class:lt(["status-indicator",{active:_.value}])},null,2)]),x("nav",CU,[(le(),de(ft,null,It(o,L=>x("button",{key:L.id,class:lt(["nav-tab",{active:a.value===L.id}]),onClick:G=>a.value=L.id},[x("span",LU,te(L.icon),1),x("span",DU,te(L.label),1)],10,PU)),64))]),x("div",IU,[x("button",{class:"action-btn",onClick:N,disabled:u.value},te(u.value?"重建中...":"重建图谱"),9,NU),x("button",{class:"action-btn",onClick:P,disabled:d.value},te(d.value?"反思中...":"触发反思"),9,UU),x("button",{class:"action-btn",onClick:F}," 刷新数据 ")]),x("div",FU,[Dt(Aw),a.value==="brain"?(le(),Ci(eP,{key:0})):Je("",!0)])]),x("div",OU,[x("div",{class:lt(["content-area",{"with-panel":f.value}])},[a.value==="overview"?(le(),de("div",BU,[x("div",kU,[Dt(wU,{stats:Se(r)},null,8,["stats"])]),Dt(P1,{"graph-data":Se(n),"is-loading":Se(i),onNodeClick:p},null,8,["graph-data","is-loading"]),Dt(K1,{onMemorySelect:m}),Dt(nw)])):a.value==="write"?(le(),Ci(Gw,{key:1,onWritten:v})):a.value==="tiered"?(le(),Ci(RT,{key:2,onMemorySelect:m})):a.value==="brain"?(le(),de("div",zU,[Dt(JP)])):a.value==="llm"?(le(),Ci(oA,{key:4})):a.value==="evolution"?(le(),Ci(rR,{key:5})):a.value==="feedback"?(le(),Ci(TR,{key:6})):a.value==="merge"?(le(),Ci($R,{key:7,"memory-id":l.value,"show-close":!!l.value,onClose:U[0]||(U[0]=L=>l.value=null),onNodeClick:w},null,8,["memory-id","show-close"])):Je("",!0)],2),Dt(dx,{name:"slide"},{default:wm(()=>[f.value?(le(),de("div",VU,[(le(),Ci(xv(h.value),ig(g.value,{onClose:S,onSaved:E,onDeleted:y}),null,16))])):Je("",!0)]),_:1})]),c.value?(le(),de("div",{key:0,class:"memory-detail-modal",onClick:R},[x("div",{class:"modal-content",onClick:U[1]||(U[1]=lg(()=>{},["stop"]))},[x("div",HU,[x("h2",null,te(c.value.title),1),x("div",{class:"modal-actions"},[x("button",{class:"edit-btn",onClick:D},"编辑"),x("button",{class:"close-btn",onClick:R},"×")])]),x("div",GU,[x("div",WU,[U[3]||(U[3]=x("h4",null,"类型",-1)),x("span",{class:lt(["type-badge",c.value.memory_type])},te(k(c.value.memory_type)),3)]),x("div",$U,[U[4]||(U[4]=x("h4",null,"内容",-1)),x("p",null,te(c.value.content),1)]),(C=c.value.keywords)!=null&&C.length?(le(),de("div",XU,[U[5]||(U[5]=x("h4",null,"关键词",-1)),x("div",qU,[(le(!0),de(ft,null,It(c.value.keywords,L=>(le(),de("span",{key:L,class:"keyword-tag"},te(L),1))),128))])])):Je("",!0),x("div",YU,[U[9]||(U[9]=x("h4",null,"元数据",-1)),x("div",jU,[x("div",KU,[U[6]||(U[6]=x("span",{class:"meta-label"},"作用域:",-1)),x("span",JU,te(c.value.scope),1)]),x("div",ZU,[U[7]||(U[7]=x("span",{class:"meta-label"},"时间:",-1)),x("span",QU,te(c.value.timestamp),1)]),x("div",eF,[U[8]||(U[8]=x("span",{class:"meta-label"},"重要性:",-1)),x("span",tF,te(c.value.importance),1)])])]),x("div",{class:"detail-section"},[x("button",{class:"view-chain-btn",onClick:M}," 查看合并链 ")])])])])):Je("",!0)])}}}),J_=kx(nF),iF=Hx();J_.use(iF);J_.mount("#app");
