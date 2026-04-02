(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _f(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const wt={},lr=[],fi=()=>{},Zp=()=>!1,_l=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),vf=t=>t.startsWith("onUpdate:"),kt=Object.assign,xf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},l0=Object.prototype.hasOwnProperty,ht=(t,e)=>l0.call(t,e),Xe=Array.isArray,cr=t=>Po(t)==="[object Map]",vl=t=>Po(t)==="[object Set]",vd=t=>Po(t)==="[object Date]",Ze=t=>typeof t=="function",Lt=t=>typeof t=="string",_i=t=>typeof t=="symbol",dt=t=>t!==null&&typeof t=="object",Jp=t=>(dt(t)||Ze(t))&&Ze(t.then)&&Ze(t.catch),Qp=Object.prototype.toString,Po=t=>Qp.call(t),c0=t=>Po(t).slice(8,-1),em=t=>Po(t)==="[object Object]",xl=t=>Lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,to=_f(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},u0=/-\w/g,un=yl(t=>t.replace(u0,e=>e.slice(1).toUpperCase())),f0=/\B([A-Z])/g,cs=yl(t=>t.replace(f0,"-$1").toLowerCase()),Sl=yl(t=>t.charAt(0).toUpperCase()+t.slice(1)),jl=yl(t=>t?`on${Sl(t)}`:""),oi=(t,e)=>!Object.is(t,e),Ra=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},tm=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Ml=t=>{const e=parseFloat(t);return isNaN(e)?t:e},d0=t=>{const e=Lt(t)?Number(t):NaN;return isNaN(e)?t:e};let xd;const bl=()=>xd||(xd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vn(t){if(Xe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Lt(i)?g0(i):Vn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Lt(t)||dt(t))return t}const h0=/;(?![^(]*\))/g,p0=/:([^]+)/,m0=/\/\*[^]*?\*\//g;function g0(t){const e={};return t.replace(m0,"").split(h0).forEach(n=>{if(n){const i=n.split(p0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pt(t){let e="";if(Lt(t))e=t;else if(Xe(t))for(let n=0;n<t.length;n++){const i=pt(t[n]);i&&(e+=i+" ")}else if(dt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",v0=_f(_0);function nm(t){return!!t||t===""}function x0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Lo(t[i],e[i]);return n}function Lo(t,e){if(t===e)return!0;let n=vd(t),i=vd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=_i(t),i=_i(e),n||i)return t===e;if(n=Xe(t),i=Xe(e),n||i)return n&&i?x0(t,e):!1;if(n=dt(t),i=dt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Lo(t[o],e[o]))return!1}}return String(t)===String(e)}function y0(t,e){return t.findIndex(n=>Lo(n,e))}const im=t=>!!(t&&t.__v_isRef===!0),te=t=>Lt(t)?t:t==null?"":Xe(t)||dt(t)&&(t.toString===Qp||!Ze(t.toString))?im(t)?te(t.value):JSON.stringify(t,sm,2):String(t),sm=(t,e)=>im(e)?sm(t,e.value):cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Kl(i,r)+" =>"]=s,n),{})}:vl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Kl(n))}:_i(e)?Kl(e):dt(e)&&!Xe(e)&&!em(e)?String(e):e,Kl=(t,e="")=>{var n;return _i(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class rm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){++this._on===1&&(this.prevScope=jt,jt=this)}off(){this._on>0&&--this._on===0&&(jt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function om(t){return new rm(t)}function am(){return jt}function S0(t,e=!1){jt&&jt.cleanups.push(t)}let At;const Zl=new WeakSet;class lm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&jt.active&&jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zl.has(this)&&(Zl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||um(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yd(this),fm(this);const e=At,n=$n;At=this,$n=!0;try{return this.fn()}finally{dm(this),At=e,$n=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mf(e);this.deps=this.depsTail=void 0,yd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Kc(this)&&this.run()}get dirty(){return Kc(this)}}let cm=0,no,io;function um(t,e=!1){if(t.flags|=8,e){t.next=io,io=t;return}t.next=no,no=t}function yf(){cm++}function Sf(){if(--cm>0)return;if(io){let e=io;for(io=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;no;){let e=no;for(no=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function fm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function dm(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Mf(i),M0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Kc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(hm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function hm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===po)||(t.globalVersion=po,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Kc(t))))return;t.flags|=2;const e=t.dep,n=At,i=$n;At=t,$n=!0;try{fm(t);const s=t.fn(t._value);(e.version===0||oi(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{At=n,$n=i,dm(t),t.flags&=-3}}function Mf(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Mf(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function M0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $n=!0;const pm=[];function Oi(){pm.push($n),$n=!1}function Bi(){const t=pm.pop();$n=t===void 0?!0:t}function yd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=At;At=void 0;try{e()}finally{At=n}}}let po=0;class b0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!At||!$n||At===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==At)n=this.activeLink=new b0(At,this),At.deps?(n.prevDep=At.depsTail,At.depsTail.nextDep=n,At.depsTail=n):At.deps=At.depsTail=n,mm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=At.depsTail,n.nextDep=void 0,At.depsTail.nextDep=n,At.depsTail=n,At.deps===n&&(At.deps=i)}return n}trigger(e){this.version++,po++,this.notify(e)}notify(e){yf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Sf()}}}function mm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)mm(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Wa=new WeakMap,Is=Symbol(""),Zc=Symbol(""),mo=Symbol("");function Zt(t,e,n){if($n&&At){let i=Wa.get(t);i||Wa.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new bf),s.map=i,s.key=n),s.track()}}function Di(t,e,n,i,s,r){const o=Wa.get(t);if(!o){po++;return}const a=c=>{c&&c.trigger()};if(yf(),e==="clear")o.forEach(a);else{const c=Xe(t),l=c&&xl(n);if(c&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===mo||!_i(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(mo)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Is)),cr(t)&&a(o.get(Zc)));break;case"delete":c||(a(o.get(Is)),cr(t)&&a(o.get(Zc)));break;case"set":cr(t)&&a(o.get(Is));break}}Sf()}function E0(t,e){const n=Wa.get(t);return n&&n.get(e)}function Gs(t){const e=ot(t);return e===t?e:(Zt(e,"iterate",mo),An(t)?e:e.map(Xn))}function El(t){return Zt(t=ot(t),"iterate",mo),t}function ii(t,e){return ki(t)?gr(di(t)?Xn(e):e):Xn(e)}const w0={__proto__:null,[Symbol.iterator](){return Jl(this,Symbol.iterator,t=>ii(this,t))},concat(...t){return Gs(this).concat(...t.map(e=>Xe(e)?Gs(e):e))},entries(){return Jl(this,"entries",t=>(t[1]=ii(this,t[1]),t))},every(t,e){return Mi(this,"every",t,e,void 0,arguments)},filter(t,e){return Mi(this,"filter",t,e,n=>n.map(i=>ii(this,i)),arguments)},find(t,e){return Mi(this,"find",t,e,n=>ii(this,n),arguments)},findIndex(t,e){return Mi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mi(this,"findLast",t,e,n=>ii(this,n),arguments)},findLastIndex(t,e){return Mi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mi(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ql(this,"includes",t)},indexOf(...t){return Ql(this,"indexOf",t)},join(t){return Gs(this).join(t)},lastIndexOf(...t){return Ql(this,"lastIndexOf",t)},map(t,e){return Mi(this,"map",t,e,void 0,arguments)},pop(){return Ur(this,"pop")},push(...t){return Ur(this,"push",t)},reduce(t,...e){return Sd(this,"reduce",t,e)},reduceRight(t,...e){return Sd(this,"reduceRight",t,e)},shift(){return Ur(this,"shift")},some(t,e){return Mi(this,"some",t,e,void 0,arguments)},splice(...t){return Ur(this,"splice",t)},toReversed(){return Gs(this).toReversed()},toSorted(t){return Gs(this).toSorted(t)},toSpliced(...t){return Gs(this).toSpliced(...t)},unshift(...t){return Ur(this,"unshift",t)},values(){return Jl(this,"values",t=>ii(this,t))}};function Jl(t,e,n){const i=El(t),s=i[e]();return i!==t&&!An(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const T0=Array.prototype;function Mi(t,e,n,i,s,r){const o=El(t),a=o!==t&&!An(t),c=o[e];if(c!==T0[e]){const d=c.apply(t,r);return a?Xn(d):d}let l=n;o!==t&&(a?l=function(d,f){return n.call(this,ii(t,d),f,t)}:n.length>2&&(l=function(d,f){return n.call(this,d,f,t)}));const u=c.call(o,l,i);return a&&s?s(u):u}function Sd(t,e,n,i){const s=El(t),r=s!==t&&!An(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(l,u,d){return a&&(a=!1,l=ii(t,l)),n.call(this,l,ii(t,u),d,t)}):n.length>3&&(o=function(l,u,d){return n.call(this,l,u,d,t)}));const c=s[e](o,...i);return a?ii(t,c):c}function Ql(t,e,n){const i=ot(t);Zt(i,"iterate",mo);const s=i[e](...n);return(s===-1||s===!1)&&Tl(n[0])?(n[0]=ot(n[0]),i[e](...n)):s}function Ur(t,e,n=[]){Oi(),yf();const i=ot(t)[e].apply(t,n);return Sf(),Bi(),i}const A0=_f("__proto__,__v_isRef,__isVue"),gm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_i));function R0(t){_i(t)||(t=String(t));const e=ot(this);return Zt(e,"has",t),e.hasOwnProperty(t)}class _m{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?B0:Sm:r?ym:xm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Xe(e);if(!s){let c;if(o&&(c=w0[n]))return c;if(n==="hasOwnProperty")return R0}const a=Reflect.get(e,n,Rt(e)?e:i);if((_i(n)?gm.has(n):A0(n))||(s||Zt(e,"get",n),r))return a;if(Rt(a)){const c=o&&xl(n)?a:a.value;return s&&dt(c)?Qc(c):c}return dt(a)?s?Qc(a):wl(a):a}}class vm extends _m{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=Xe(e)&&xl(n);if(!this._isShallow){const l=ki(r);if(!An(i)&&!ki(i)&&(r=ot(r),i=ot(i)),!o&&Rt(r)&&!Rt(i))return l||(r.value=i),!0}const a=o?Number(n)<e.length:ht(e,n),c=Reflect.set(e,n,i,Rt(e)?e:s);return e===ot(s)&&(a?oi(i,r)&&Di(e,"set",n,i):Di(e,"add",n,i)),c}deleteProperty(e,n){const i=ht(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Di(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!_i(n)||!gm.has(n))&&Zt(e,"has",n),i}ownKeys(e){return Zt(e,"iterate",Xe(e)?"length":Is),Reflect.ownKeys(e)}}class C0 extends _m{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const P0=new vm,L0=new C0,D0=new vm(!0);const Jc=t=>t,qo=t=>Reflect.getPrototypeOf(t);function I0(t,e,n){return function(...i){const s=this.__v_raw,r=ot(s),o=cr(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),u=n?Jc:e?gr:Xn;return!e&&Zt(r,"iterate",c?Zc:Is),kt(Object.create(l),{next(){const{value:d,done:f}=l.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Yo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function N0(t,e){const n={get(s){const r=this.__v_raw,o=ot(r),a=ot(s);t||(oi(s,a)&&Zt(o,"get",s),Zt(o,"get",a));const{has:c}=qo(o),l=e?Jc:t?gr:Xn;if(c.call(o,s))return l(r.get(s));if(c.call(o,a))return l(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Zt(ot(s),"iterate",Is),s.size},has(s){const r=this.__v_raw,o=ot(r),a=ot(s);return t||(oi(s,a)&&Zt(o,"has",s),Zt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,c=ot(a),l=e?Jc:t?gr:Xn;return!t&&Zt(c,"iterate",Is),a.forEach((u,d)=>s.call(r,l(u),l(d),o))}};return kt(n,t?{add:Yo("add"),set:Yo("set"),delete:Yo("delete"),clear:Yo("clear")}:{add(s){const r=ot(this),o=qo(r),a=ot(s),c=!e&&!An(s)&&!ki(s)?a:s;return o.has.call(r,c)||oi(s,c)&&o.has.call(r,s)||oi(a,c)&&o.has.call(r,a)||(r.add(c),Di(r,"add",c,c)),this},set(s,r){!e&&!An(r)&&!ki(r)&&(r=ot(r));const o=ot(this),{has:a,get:c}=qo(o);let l=a.call(o,s);l||(s=ot(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,r),l?oi(r,u)&&Di(o,"set",s,r):Di(o,"add",s,r),this},delete(s){const r=ot(this),{has:o,get:a}=qo(r);let c=o.call(r,s);c||(s=ot(s),c=o.call(r,s)),a&&a.call(r,s);const l=r.delete(s);return c&&Di(r,"delete",s,void 0),l},clear(){const s=ot(this),r=s.size!==0,o=s.clear();return r&&Di(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=I0(s,t,e)}),n}function Ef(t,e){const n=N0(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ht(n,s)&&s in i?n:i,s,r)}const U0={get:Ef(!1,!1)},F0={get:Ef(!1,!0)},O0={get:Ef(!0,!1)};const xm=new WeakMap,ym=new WeakMap,Sm=new WeakMap,B0=new WeakMap;function k0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function z0(t){return t.__v_skip||!Object.isExtensible(t)?0:k0(c0(t))}function wl(t){return ki(t)?t:wf(t,!1,P0,U0,xm)}function V0(t){return wf(t,!1,D0,F0,ym)}function Qc(t){return wf(t,!0,L0,O0,Sm)}function wf(t,e,n,i,s){if(!dt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=z0(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function di(t){return ki(t)?di(t.__v_raw):!!(t&&t.__v_isReactive)}function ki(t){return!!(t&&t.__v_isReadonly)}function An(t){return!!(t&&t.__v_isShallow)}function Tl(t){return t?!!t.__v_raw:!1}function ot(t){const e=t&&t.__v_raw;return e?ot(e):t}function Tf(t){return!ht(t,"__v_skip")&&Object.isExtensible(t)&&tm(t,"__v_skip",!0),t}const Xn=t=>dt(t)?wl(t):t,gr=t=>dt(t)?Qc(t):t;function Rt(t){return t?t.__v_isRef===!0:!1}function we(t){return Mm(t,!1)}function H0(t){return Mm(t,!0)}function Mm(t,e){return Rt(t)?t:new G0(t,e)}class G0{constructor(e,n){this.dep=new bf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ot(e),this._value=n?e:Xn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||An(e)||ki(e);e=i?e:ot(e),oi(e,n)&&(this._rawValue=e,this._value=i?e:Xn(e),this.dep.trigger())}}function be(t){return Rt(t)?t.value:t}const W0={get:(t,e,n)=>e==="__v_raw"?t:be(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Rt(s)&&!Rt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function bm(t){return di(t)?t:new Proxy(t,W0)}function $0(t){const e=Xe(t)?new Array(t.length):{};for(const n in t)e[n]=Em(t,n);return e}class X0{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=ot(e);let s=!0,r=e;if(!Xe(e)||!xl(String(n)))do s=!Tl(r)||An(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=be(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Rt(this._raw[this._key])){const n=this._object[this._key];if(Rt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return E0(this._raw,this._key)}}class q0{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Y0(t,e,n){return Rt(t)?t:Ze(t)?new q0(t):dt(t)&&arguments.length>1?Em(t,e,n):we(t)}function Em(t,e,n){return new X0(t,e,n)}class j0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new bf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=po-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&At!==this)return um(this,!0),!0}get value(){const e=this.dep.track();return hm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function K0(t,e,n=!1){let i,s;return Ze(t)?i=t:(i=t.get,s=t.set),new j0(i,s,n)}const jo={},$a=new WeakMap;let Ms;function Z0(t,e=!1,n=Ms){if(n){let i=$a.get(n);i||$a.set(n,i=[]),i.push(t)}}function J0(t,e,n=wt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=n,l=y=>s?y:An(y)||s===!1||s===0?Ii(y,1):Ii(y);let u,d,f,h,g=!1,_=!1;if(Rt(t)?(d=()=>t.value,g=An(t)):di(t)?(d=()=>l(t),g=!0):Xe(t)?(_=!0,g=t.some(y=>di(y)||An(y)),d=()=>t.map(y=>{if(Rt(y))return y.value;if(di(y))return l(y);if(Ze(y))return c?c(y,2):y()})):Ze(t)?e?d=c?()=>c(t,2):t:d=()=>{if(f){Oi();try{f()}finally{Bi()}}const y=Ms;Ms=u;try{return c?c(t,3,[h]):t(h)}finally{Ms=y}}:d=fi,e&&s){const y=d,A=s===!0?1/0:s;d=()=>Ii(y(),A)}const p=am(),m=()=>{u.stop(),p&&p.active&&xf(p.effects,u)};if(r&&e){const y=e;e=(...A)=>{y(...A),m()}}let x=_?new Array(t.length).fill(jo):jo;const w=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const A=u.run();if(s||g||(_?A.some((P,L)=>oi(P,x[L])):oi(A,x))){f&&f();const P=Ms;Ms=u;try{const L=[A,x===jo?void 0:_&&x[0]===jo?[]:x,h];x=A,c?c(e,3,L):e(...L)}finally{Ms=P}}}else u.run()};return a&&a(w),u=new lm(d),u.scheduler=o?()=>o(w,!1):w,h=y=>Z0(y,!1,u),f=u.onStop=()=>{const y=$a.get(u);if(y){if(c)c(y,4);else for(const A of y)A();$a.delete(u)}},e?i?w(!0):x=u.run():o?o(w.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Ii(t,e=1/0,n){if(e<=0||!dt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Rt(t))Ii(t.value,e,n);else if(Xe(t))for(let i=0;i<t.length;i++)Ii(t[i],e,n);else if(vl(t)||cr(t))t.forEach(i=>{Ii(i,e,n)});else if(em(t)){for(const i in t)Ii(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ii(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Do(t,e,n,i){try{return i?t(...i):t()}catch(s){Al(s,e,n)}}function qn(t,e,n,i){if(Ze(t)){const s=Do(t,e,n,i);return s&&Jp(s)&&s.catch(r=>{Al(r,e,n)}),s}if(Xe(t)){const s=[];for(let r=0;r<t.length;r++)s.push(qn(t[r],e,n,i));return s}}function Al(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||wt;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,l)===!1)return}a=a.parent}if(r){Oi(),Do(r,null,10,[t,c,l]),Bi();return}}Q0(t,n,s,i,o)}function Q0(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const an=[];let ti=-1;const ur=[];let ns=null,or=0;const wm=Promise.resolve();let Xa=null;function Io(t){const e=Xa||wm;return t?e.then(this?t.bind(this):t):e}function ev(t){let e=ti+1,n=an.length;for(;e<n;){const i=e+n>>>1,s=an[i],r=go(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Af(t){if(!(t.flags&1)){const e=go(t),n=an[an.length-1];!n||!(t.flags&2)&&e>=go(n)?an.push(t):an.splice(ev(e),0,t),t.flags|=1,Tm()}}function Tm(){Xa||(Xa=wm.then(Rm))}function tv(t){Xe(t)?ur.push(...t):ns&&t.id===-1?ns.splice(or+1,0,t):t.flags&1||(ur.push(t),t.flags|=1),Tm()}function Md(t,e,n=ti+1){for(;n<an.length;n++){const i=an[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;an.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Am(t){if(ur.length){const e=[...new Set(ur)].sort((n,i)=>go(n)-go(i));if(ur.length=0,ns){ns.push(...e);return}for(ns=e,or=0;or<ns.length;or++){const n=ns[or];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ns=null,or=0}}const go=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Rm(t){try{for(ti=0;ti<an.length;ti++){const e=an[ti];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Do(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ti<an.length;ti++){const e=an[ti];e&&(e.flags&=-2)}ti=-1,an.length=0,Am(),Xa=null,(an.length||ur.length)&&Rm()}}let wn=null,Cm=null;function qa(t){const e=wn;return wn=t,Cm=t&&t.type.__scopeId||null,e}function eu(t,e=wn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Ka(-1);const r=qa(e);let o;try{o=t(...s)}finally{qa(r),i._d&&Ka(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function It(t,e){if(wn===null)return t;const n=Dl(wn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,c=wt]=e[s];r&&(Ze(r)&&(r={mounted:r,updated:r}),r.deep&&Ii(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function ds(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Oi(),qn(c,n,8,[t.el,a,t,e]),Bi())}}function nv(t,e){if(Jt){let n=Jt.provides;const i=Jt.parent&&Jt.parent.provides;i===n&&(n=Jt.provides=Object.create(i)),n[t]=e}}function so(t,e,n=!1){const i=Df();if(i||Ns){let s=Ns?Ns._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ze(e)?e.call(i&&i.proxy):e}}function iv(){return!!(Df()||Ns)}const sv=Symbol.for("v-scx"),rv=()=>so(sv);function hi(t,e,n){return Pm(t,e,n)}function Pm(t,e,n=wt){const{immediate:i,deep:s,flush:r,once:o}=n,a=kt({},n),c=e&&i||!e&&r!=="post";let l;if(xo){if(r==="sync"){const h=rv();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=fi,h.resume=fi,h.pause=fi,h}}const u=Jt;a.call=(h,g,_)=>qn(h,u,g,_);let d=!1;r==="post"?a.scheduler=h=>{pn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():Af(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=J0(t,e,a);return xo&&(l?l.push(f):c&&f()),f}function ov(t,e,n){const i=this.proxy,s=Lt(t)?t.includes(".")?Lm(i,t):()=>i[t]:t.bind(i,i);let r;Ze(e)?r=e:(r=e.handler,n=e);const o=No(this),a=Pm(s,r.bind(i),n);return o(),a}function Lm(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const av=Symbol("_vte"),Dm=t=>t.__isTeleport,ni=Symbol("_leaveCb"),Fr=Symbol("_enterCb");function lv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yn(()=>{t.isMounted=!0}),Ar(()=>{t.isUnmounting=!0}),t}const Ln=[Function,Array],Im={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ln,onEnter:Ln,onAfterEnter:Ln,onEnterCancelled:Ln,onBeforeLeave:Ln,onLeave:Ln,onAfterLeave:Ln,onLeaveCancelled:Ln,onBeforeAppear:Ln,onAppear:Ln,onAfterAppear:Ln,onAppearCancelled:Ln},Nm=t=>{const e=t.subTree;return e.component?Nm(e.component):e},cv={name:"BaseTransition",props:Im,setup(t,{slots:e}){const n=Df(),i=lv();return()=>{const s=e.default&&Om(e.default(),!0);if(!s||!s.length)return;const r=Um(s),o=ot(t),{mode:a}=o;if(i.isLeaving)return ec(r);const c=bd(r);if(!c)return ec(r);let l=tu(c,o,i,n,d=>l=d);c.type!==ln&&_o(c,l);let u=n.subTree&&bd(n.subTree);if(u&&u.type!==ln&&!Es(u,c)&&Nm(n).type!==ln){let d=tu(u,o,i,n);if(_o(u,d),a==="out-in"&&c.type!==ln)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},ec(r);a==="in-out"&&c.type!==ln?d.delayLeave=(f,h,g)=>{const _=Fm(i,u);_[String(u.key)]=u,f[ni]=()=>{h(),f[ni]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{g(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Um(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ln){e=n;break}}return e}const uv=cv;function Fm(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function tu(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:m,onAfterAppear:x,onAppearCancelled:w}=e,y=String(t.key),A=Fm(n,t),P=(E,U)=>{E&&qn(E,i,9,U)},L=(E,U)=>{const D=U[1];P(E,U),Xe(E)?E.every(F=>F.length<=1)&&D():E.length<=1&&D()},S={mode:o,persisted:a,beforeEnter(E){let U=c;if(!n.isMounted)if(r)U=p||c;else return;E[ni]&&E[ni](!0);const D=A[y];D&&Es(t,D)&&D.el[ni]&&D.el[ni](),P(U,[E])},enter(E){if(A[y]===t)return;let U=l,D=u,F=d;if(!n.isMounted)if(r)U=m||l,D=x||u,F=w||d;else return;let V=!1;E[Fr]=N=>{V||(V=!0,N?P(F,[E]):P(D,[E]),S.delayedLeave&&S.delayedLeave(),E[Fr]=void 0)};const X=E[Fr].bind(null,!1);U?L(U,[E,X]):X()},leave(E,U){const D=String(t.key);if(E[Fr]&&E[Fr](!0),n.isUnmounting)return U();P(f,[E]);let F=!1;E[ni]=X=>{F||(F=!0,U(),X?P(_,[E]):P(g,[E]),E[ni]=void 0,A[D]===t&&delete A[D])};const V=E[ni].bind(null,!1);A[D]=t,h?L(h,[E,V]):V()},clone(E){const U=tu(E,e,n,i,s);return s&&s(U),U}};return S}function ec(t){if(Rl(t))return t=as(t),t.children=null,t}function bd(t){if(!Rl(t))return Dm(t.type)&&t.children?Um(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ze(n.default))return n.default()}}function _o(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_o(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Om(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===mt?(o.patchFlag&128&&s++,i=i.concat(Om(o.children,e,a))):(e||o.type!==ln)&&i.push(a!=null?as(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function yn(t,e){return Ze(t)?kt({name:t.name},e,{setup:t}):t}function Bm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ed(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ya=new WeakMap;function ro(t,e,n,i,s=!1){if(Xe(t)){t.forEach((_,p)=>ro(_,e&&(Xe(e)?e[p]:e),n,i,s));return}if(oo(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ro(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Dl(i.component):i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===wt?a.refs={}:a.refs,d=a.setupState,f=ot(d),h=d===wt?Zp:_=>Ed(u,_)?!1:ht(f,_),g=(_,p)=>!(p&&Ed(u,p));if(l!=null&&l!==c){if(wd(e),Lt(l))u[l]=null,h(l)&&(d[l]=null);else if(Rt(l)){const _=e;g(l,_.k)&&(l.value=null),_.k&&(u[_.k]=null)}}if(Ze(c))Do(c,a,12,[o,u]);else{const _=Lt(c),p=Rt(c);if(_||p){const m=()=>{if(t.f){const x=_?h(c)?d[c]:u[c]:g()||!t.k?c.value:u[t.k];if(s)Xe(x)&&xf(x,r);else if(Xe(x))x.includes(r)||x.push(r);else if(_)u[c]=[r],h(c)&&(d[c]=u[c]);else{const w=[r];g(c,t.k)&&(c.value=w),t.k&&(u[t.k]=w)}}else _?(u[c]=o,h(c)&&(d[c]=o)):p&&(g(c,t.k)&&(c.value=o),t.k&&(u[t.k]=o))};if(o){const x=()=>{m(),Ya.delete(t)};x.id=-1,Ya.set(t,x),pn(x,n)}else wd(t),m()}}}function wd(t){const e=Ya.get(t);e&&(e.flags|=8,Ya.delete(t))}bl().requestIdleCallback;bl().cancelIdleCallback;const oo=t=>!!t.type.__asyncLoader,Rl=t=>t.type.__isKeepAlive;function fv(t,e){km(t,"a",e)}function dv(t,e){km(t,"da",e)}function km(t,e,n=Jt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Cl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Rl(s.parent.vnode)&&hv(i,e,n,s),s=s.parent}}function hv(t,e,n,i){const s=Cl(e,t,i,!0);Rf(()=>{xf(i[e],s)},n)}function Cl(t,e,n=Jt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Oi();const a=No(n),c=qn(e,n,t,o);return a(),Bi(),c});return i?s.unshift(r):s.push(r),r}}const Wi=t=>(e,n=Jt)=>{(!xo||t==="sp")&&Cl(t,(...i)=>e(...i),n)},pv=Wi("bm"),Yn=Wi("m"),mv=Wi("bu"),gv=Wi("u"),Ar=Wi("bum"),Rf=Wi("um"),_v=Wi("sp"),vv=Wi("rtg"),xv=Wi("rtc");function yv(t,e=Jt){Cl("ec",t,e)}const Sv="components",zm=Symbol.for("v-ndc");function Mv(t){return Lt(t)?bv(Sv,t,!1)||t:t||zm}function bv(t,e,n=!0,i=!1){const s=wn||Jt;if(s){const r=s.type;{const a=ox(r,!1);if(a&&(a===e||a===un(e)||a===Sl(un(e))))return r}const o=Td(s[t]||r[t],e)||Td(s.appContext[t],e);return!o&&i?r:o}}function Td(t,e){return t&&(t[e]||t[un(e)]||t[Sl(un(e))])}function Bt(t,e,n,i){let s;const r=n,o=Xe(t);if(o||Lt(t)){const a=o&&di(t);let c=!1,l=!1;a&&(c=!An(t),l=ki(t),t=El(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?l?gr(Xn(t[u])):Xn(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(dt(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,r)}}else s=[];return s}const nu=t=>t?cg(t)?Dl(t):nu(t.parent):null,ao=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nu(t.parent),$root:t=>nu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Hm(t),$forceUpdate:t=>t.f||(t.f=()=>{Af(t.update)}),$nextTick:t=>t.n||(t.n=Io.bind(t.proxy)),$watch:t=>ov.bind(t)}),tc=(t,e)=>t!==wt&&!t.__isScriptSetup&&ht(t,e),Ev={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(tc(i,e))return o[e]=1,i[e];if(s!==wt&&ht(s,e))return o[e]=2,s[e];if(ht(r,e))return o[e]=3,r[e];if(n!==wt&&ht(n,e))return o[e]=4,n[e];iu&&(o[e]=0)}}const l=ao[e];let u,d;if(l)return e==="$attrs"&&Zt(t.attrs,"get",""),l(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==wt&&ht(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ht(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return tc(s,e)?(s[e]=n,!0):i!==wt&&ht(i,e)?(i[e]=n,!0):ht(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let c;return!!(n[a]||t!==wt&&a[0]!=="$"&&ht(t,a)||tc(e,a)||ht(r,a)||ht(i,a)||ht(ao,a)||ht(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ht(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ad(t){return Xe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let iu=!0;function wv(t){const e=Hm(t),n=t.proxy,i=t.ctx;iu=!1,e.beforeCreate&&Rd(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:x,destroyed:w,unmounted:y,render:A,renderTracked:P,renderTriggered:L,errorCaptured:S,serverPrefetch:E,expose:U,inheritAttrs:D,components:F,directives:V,filters:X}=e;if(l&&Tv(l,i,null),o)for(const T in o){const k=o[T];Ze(k)&&(i[T]=k.bind(n))}if(s){const T=s.call(n,n);dt(T)&&(t.data=wl(T))}if(iu=!0,r)for(const T in r){const k=r[T],G=Ze(k)?k.bind(n,n):Ze(k.get)?k.get.bind(n,n):fi,ne=!Ze(k)&&Ze(k.set)?k.set.bind(n):fi,re=St({get:G,set:ne});Object.defineProperty(i,T,{enumerable:!0,configurable:!0,get:()=>re.value,set:pe=>re.value=pe})}if(a)for(const T in a)Vm(a[T],i,n,T);if(c){const T=Ze(c)?c.call(n):c;Reflect.ownKeys(T).forEach(k=>{nv(k,T[k])})}u&&Rd(u,t,"c");function M(T,k){Xe(k)?k.forEach(G=>T(G.bind(n))):k&&T(k.bind(n))}if(M(pv,d),M(Yn,f),M(mv,h),M(gv,g),M(fv,_),M(dv,p),M(yv,S),M(xv,P),M(vv,L),M(Ar,x),M(Rf,y),M(_v,E),Xe(U))if(U.length){const T=t.exposed||(t.exposed={});U.forEach(k=>{Object.defineProperty(T,k,{get:()=>n[k],set:G=>n[k]=G,enumerable:!0})})}else t.exposed||(t.exposed={});A&&t.render===fi&&(t.render=A),D!=null&&(t.inheritAttrs=D),F&&(t.components=F),V&&(t.directives=V),E&&Bm(t)}function Tv(t,e,n=fi){Xe(t)&&(t=su(t));for(const i in t){const s=t[i];let r;dt(s)?"default"in s?r=so(s.from||i,s.default,!0):r=so(s.from||i):r=so(s),Rt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Rd(t,e,n){qn(Xe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Vm(t,e,n,i){let s=i.includes(".")?Lm(n,i):()=>n[i];if(Lt(t)){const r=e[t];Ze(r)&&hi(s,r)}else if(Ze(t))hi(s,t.bind(n));else if(dt(t))if(Xe(t))t.forEach(r=>Vm(r,e,n,i));else{const r=Ze(t.handler)?t.handler.bind(n):e[t.handler];Ze(r)&&hi(s,r,t)}}function Hm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>ja(c,l,o,!0)),ja(c,e,o)),dt(e)&&r.set(e,c),c}function ja(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ja(t,r,n,!0),s&&s.forEach(o=>ja(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Av[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Av={data:Cd,props:Pd,emits:Pd,methods:Yr,computed:Yr,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:Yr,directives:Yr,watch:Cv,provide:Cd,inject:Rv};function Cd(t,e){return e?t?function(){return kt(Ze(t)?t.call(this,this):t,Ze(e)?e.call(this,this):e)}:e:t}function Rv(t,e){return Yr(su(t),su(e))}function su(t){if(Xe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function sn(t,e){return t?[...new Set([].concat(t,e))]:e}function Yr(t,e){return t?kt(Object.create(null),t,e):e}function Pd(t,e){return t?Xe(t)&&Xe(e)?[...new Set([...t,...e])]:kt(Object.create(null),Ad(t),Ad(e??{})):e}function Cv(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const i in e)n[i]=sn(t[i],e[i]);return n}function Gm(){return{app:null,config:{isNativeTag:Zp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pv=0;function Lv(t,e){return function(i,s=null){Ze(i)||(i=kt({},i)),s!=null&&!dt(s)&&(s=null);const r=Gm(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:Pv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:cx,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Ze(u.install)?(o.add(u),u.install(l,...d)):Ze(u)&&(o.add(u),u(l,...d))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,d){return d?(r.components[u]=d,l):r.components[u]},directive(u,d){return d?(r.directives[u]=d,l):r.directives[u]},mount(u,d,f){if(!c){const h=l._ceVNode||yt(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),c=!0,l._container=u,u.__vue_app__=l,Dl(h.component)}},onUnmount(u){a.push(u)},unmount(){c&&(qn(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return r.provides[u]=d,l},runWithContext(u){const d=Ns;Ns=l;try{return u()}finally{Ns=d}}};return l}}let Ns=null;const Dv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${un(e)}Modifiers`]||t[`${cs(e)}Modifiers`];function Iv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||wt;let s=n;const r=e.startsWith("update:"),o=r&&Dv(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Lt(u)?u.trim():u)),o.number&&(s=n.map(Ml)));let a,c=i[a=jl(e)]||i[a=jl(un(e))];!c&&r&&(c=i[a=jl(cs(e))]),c&&qn(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,qn(l,t,6,s)}}const Nv=new WeakMap;function Wm(t,e,n=!1){const i=n?Nv:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ze(t)){const c=l=>{const u=Wm(l,e,!0);u&&(a=!0,kt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(dt(t)&&i.set(t,null),null):(Xe(r)?r.forEach(c=>o[c]=null):kt(o,r),dt(t)&&i.set(t,o),o)}function Pl(t,e){return!t||!_l(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(t,e[0].toLowerCase()+e.slice(1))||ht(t,cs(e))||ht(t,e))}function Ld(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:_}=t,p=qa(t);let m,x;try{if(n.shapeFlag&4){const y=s||i,A=y;m=si(l.call(A,y,u,d,h,f,g)),x=a}else{const y=e;m=si(y.length>1?y(d,{attrs:a,slots:o,emit:c}):y(d,null)),x=e.props?a:Uv(a)}}catch(y){lo.length=0,Al(y,t,1),m=yt(ln)}let w=m;if(x&&_!==!1){const y=Object.keys(x),{shapeFlag:A}=w;y.length&&A&7&&(r&&y.some(vf)&&(x=Fv(x,r)),w=as(w,x,!1,!0))}return n.dirs&&(w=as(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&_o(w,n.transition),m=w,qa(p),m}const Uv=t=>{let e;for(const n in t)(n==="class"||n==="style"||_l(n))&&((e||(e={}))[n]=t[n]);return e},Fv=(t,e)=>{const n={};for(const i in t)(!vf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Ov(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Dd(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if($m(o,i,f)&&!Pl(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Dd(i,o,l):!0:!!o;return!1}function Dd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if($m(e,t,r)&&!Pl(n,r))return!0}return!1}function $m(t,e,n){const i=t[n],s=e[n];return n==="style"&&dt(i)&&dt(s)?!Lo(i,s):i!==s}function Bv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Xm={},qm=()=>Object.create(Xm),Ym=t=>Object.getPrototypeOf(t)===Xm;function kv(t,e,n,i=!1){const s={},r=qm();t.propsDefaults=Object.create(null),jm(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:V0(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function zv(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ot(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Pl(t.emitsOptions,f))continue;const h=e[f];if(c)if(ht(r,f))h!==r[f]&&(r[f]=h,l=!0);else{const g=un(f);s[g]=ru(c,a,g,h,t,!1)}else h!==r[f]&&(r[f]=h,l=!0)}}}else{jm(t,e,s,r)&&(l=!0);let u;for(const d in a)(!e||!ht(e,d)&&((u=cs(d))===d||!ht(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=ru(c,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!ht(e,d))&&(delete r[d],l=!0)}l&&Di(t.attrs,"set","")}function jm(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(to(c))continue;const l=e[c];let u;s&&ht(s,u=un(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Pl(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=ot(n),l=a||wt;for(let u=0;u<r.length;u++){const d=r[u];n[d]=ru(s,c,d,l[d],t,!ht(l,d))}}return o}function ru(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=ht(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ze(c)){const{propsDefaults:l}=s;if(n in l)i=l[n];else{const u=No(s);i=l[n]=c.call(null,e),u()}}else i=c;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===cs(n))&&(i=!0))}return i}const Vv=new WeakMap;function Km(t,e,n=!1){const i=n?Vv:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!Ze(t)){const u=d=>{c=!0;const[f,h]=Km(d,e,!0);kt(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return dt(t)&&i.set(t,lr),lr;if(Xe(r))for(let u=0;u<r.length;u++){const d=un(r[u]);Id(d)&&(o[d]=wt)}else if(r)for(const u in r){const d=un(u);if(Id(d)){const f=r[u],h=o[d]=Xe(f)||Ze(f)?{type:f}:kt({},f),g=h.type;let _=!1,p=!0;if(Xe(g))for(let m=0;m<g.length;++m){const x=g[m],w=Ze(x)&&x.name;if(w==="Boolean"){_=!0;break}else w==="String"&&(p=!1)}else _=Ze(g)&&g.name==="Boolean";h[0]=_,h[1]=p,(_||ht(h,"default"))&&a.push(d)}}const l=[o,a];return dt(t)&&i.set(t,l),l}function Id(t){return t[0]!=="$"&&!to(t)}const Cf=t=>t==="_"||t==="_ctx"||t==="$stable",Pf=t=>Xe(t)?t.map(si):[si(t)],Hv=(t,e,n)=>{if(e._n)return e;const i=eu((...s)=>Pf(e(...s)),n);return i._c=!1,i},Zm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Cf(s))continue;const r=t[s];if(Ze(r))e[s]=Hv(s,r,i);else if(r!=null){const o=Pf(r);e[s]=()=>o}}},Jm=(t,e)=>{const n=Pf(e);t.slots.default=()=>n},Qm=(t,e,n)=>{for(const i in e)(n||!Cf(i))&&(t[i]=e[i])},Gv=(t,e,n)=>{const i=t.slots=qm();if(t.vnode.shapeFlag&32){const s=e._;s?(Qm(i,e,n),n&&tm(i,"_",s,!0)):Zm(e,i)}else e&&Jm(t,e)},Wv=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=wt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Qm(s,e,n):(r=!e.$stable,Zm(e,s)),o=e}else e&&(Jm(t,e),o={default:1});if(r)for(const a in s)!Cf(a)&&o[a]==null&&delete s[a]},pn=jv;function $v(t){return Xv(t)}function Xv(t,e){const n=bl();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=fi,insertStaticContent:g}=t,_=(O,z,q,le=null,Q=null,ce=null,I=void 0,me=null,de=!!z.dynamicChildren)=>{if(O===z)return;O&&!Es(O,z)&&(le=_e(O),pe(O,Q,ce,!0),O=null),z.patchFlag===-2&&(de=!1,z.dynamicChildren=null);const{type:ae,ref:he,shapeFlag:R}=z;switch(ae){case Ll:p(O,z,q,le);break;case ln:m(O,z,q,le);break;case Ca:O==null&&x(z,q,le,I);break;case mt:F(O,z,q,le,Q,ce,I,me,de);break;default:R&1?A(O,z,q,le,Q,ce,I,me,de):R&6?V(O,z,q,le,Q,ce,I,me,de):(R&64||R&128)&&ae.process(O,z,q,le,Q,ce,I,me,de,Ve)}he!=null&&Q?ro(he,O&&O.ref,ce,z||O,!z):he==null&&O&&O.ref!=null&&ro(O.ref,null,ce,O,!0)},p=(O,z,q,le)=>{if(O==null)i(z.el=a(z.children),q,le);else{const Q=z.el=O.el;z.children!==O.children&&l(Q,z.children)}},m=(O,z,q,le)=>{O==null?i(z.el=c(z.children||""),q,le):z.el=O.el},x=(O,z,q,le)=>{[O.el,O.anchor]=g(O.children,z,q,le,O.el,O.anchor)},w=({el:O,anchor:z},q,le)=>{let Q;for(;O&&O!==z;)Q=f(O),i(O,q,le),O=Q;i(z,q,le)},y=({el:O,anchor:z})=>{let q;for(;O&&O!==z;)q=f(O),s(O),O=q;s(z)},A=(O,z,q,le,Q,ce,I,me,de)=>{if(z.type==="svg"?I="svg":z.type==="math"&&(I="mathml"),O==null)P(z,q,le,Q,ce,I,me,de);else{const ae=O.el&&O.el._isVueCE?O.el:null;try{ae&&ae._beginPatch(),E(O,z,Q,ce,I,me,de)}finally{ae&&ae._endPatch()}}},P=(O,z,q,le,Q,ce,I,me)=>{let de,ae;const{props:he,shapeFlag:R,transition:b,dirs:B}=O;if(de=O.el=o(O.type,ce,he&&he.is,he),R&8?u(de,O.children):R&16&&S(O.children,de,null,le,Q,nc(O,ce),I,me),B&&ds(O,null,le,"created"),L(de,O,O.scopeId,I,le),he){for(const ie in he)ie!=="value"&&!to(ie)&&r(de,ie,null,he[ie],ce,le);"value"in he&&r(de,"value",null,he.value,ce),(ae=he.onVnodeBeforeMount)&&Jn(ae,le,O)}B&&ds(O,null,le,"beforeMount");const Y=qv(Q,b);Y&&b.beforeEnter(de),i(de,z,q),((ae=he&&he.onVnodeMounted)||Y||B)&&pn(()=>{ae&&Jn(ae,le,O),Y&&b.enter(de),B&&ds(O,null,le,"mounted")},Q)},L=(O,z,q,le,Q)=>{if(q&&h(O,q),le)for(let ce=0;ce<le.length;ce++)h(O,le[ce]);if(Q){let ce=Q.subTree;if(z===ce||ig(ce.type)&&(ce.ssContent===z||ce.ssFallback===z)){const I=Q.vnode;L(O,I,I.scopeId,I.slotScopeIds,Q.parent)}}},S=(O,z,q,le,Q,ce,I,me,de=0)=>{for(let ae=de;ae<O.length;ae++){const he=O[ae]=me?Li(O[ae]):si(O[ae]);_(null,he,z,q,le,Q,ce,I,me)}},E=(O,z,q,le,Q,ce,I)=>{const me=z.el=O.el;let{patchFlag:de,dynamicChildren:ae,dirs:he}=z;de|=O.patchFlag&16;const R=O.props||wt,b=z.props||wt;let B;if(q&&hs(q,!1),(B=b.onVnodeBeforeUpdate)&&Jn(B,q,z,O),he&&ds(z,O,q,"beforeUpdate"),q&&hs(q,!0),(R.innerHTML&&b.innerHTML==null||R.textContent&&b.textContent==null)&&u(me,""),ae?U(O.dynamicChildren,ae,me,q,le,nc(z,Q),ce):I||k(O,z,me,null,q,le,nc(z,Q),ce,!1),de>0){if(de&16)D(me,R,b,q,Q);else if(de&2&&R.class!==b.class&&r(me,"class",null,b.class,Q),de&4&&r(me,"style",R.style,b.style,Q),de&8){const Y=z.dynamicProps;for(let ie=0;ie<Y.length;ie++){const j=Y[ie],Te=R[j],xe=b[j];(xe!==Te||j==="value")&&r(me,j,Te,xe,Q,q)}}de&1&&O.children!==z.children&&u(me,z.children)}else!I&&ae==null&&D(me,R,b,q,Q);((B=b.onVnodeUpdated)||he)&&pn(()=>{B&&Jn(B,q,z,O),he&&ds(z,O,q,"updated")},le)},U=(O,z,q,le,Q,ce,I)=>{for(let me=0;me<z.length;me++){const de=O[me],ae=z[me],he=de.el&&(de.type===mt||!Es(de,ae)||de.shapeFlag&198)?d(de.el):q;_(de,ae,he,null,le,Q,ce,I,!0)}},D=(O,z,q,le,Q)=>{if(z!==q){if(z!==wt)for(const ce in z)!to(ce)&&!(ce in q)&&r(O,ce,z[ce],null,Q,le);for(const ce in q){if(to(ce))continue;const I=q[ce],me=z[ce];I!==me&&ce!=="value"&&r(O,ce,me,I,Q,le)}"value"in q&&r(O,"value",z.value,q.value,Q)}},F=(O,z,q,le,Q,ce,I,me,de)=>{const ae=z.el=O?O.el:a(""),he=z.anchor=O?O.anchor:a("");let{patchFlag:R,dynamicChildren:b,slotScopeIds:B}=z;B&&(me=me?me.concat(B):B),O==null?(i(ae,q,le),i(he,q,le),S(z.children||[],q,he,Q,ce,I,me,de)):R>0&&R&64&&b&&O.dynamicChildren&&O.dynamicChildren.length===b.length?(U(O.dynamicChildren,b,q,Q,ce,I,me),(z.key!=null||Q&&z===Q.subTree)&&eg(O,z,!0)):k(O,z,q,he,Q,ce,I,me,de)},V=(O,z,q,le,Q,ce,I,me,de)=>{z.slotScopeIds=me,O==null?z.shapeFlag&512?Q.ctx.activate(z,q,le,I,de):X(z,q,le,Q,ce,I,de):N(O,z,de)},X=(O,z,q,le,Q,ce,I)=>{const me=O.component=tx(O,le,Q);if(Rl(O)&&(me.ctx.renderer=Ve),nx(me,!1,I),me.asyncDep){if(Q&&Q.registerDep(me,M,I),!O.el){const de=me.subTree=yt(ln);m(null,de,z,q),O.placeholder=de.el}}else M(me,O,z,q,Q,ce,I)},N=(O,z,q)=>{const le=z.component=O.component;if(Ov(O,z,q))if(le.asyncDep&&!le.asyncResolved){T(le,z,q);return}else le.next=z,le.update();else z.el=O.el,le.vnode=z},M=(O,z,q,le,Q,ce,I)=>{const me=()=>{if(O.isMounted){let{next:R,bu:b,u:B,parent:Y,vnode:ie}=O;{const ke=tg(O);if(ke){R&&(R.el=ie.el,T(O,R,I)),ke.asyncDep.then(()=>{pn(()=>{O.isUnmounted||ae()},Q)});return}}let j=R,Te;hs(O,!1),R?(R.el=ie.el,T(O,R,I)):R=ie,b&&Ra(b),(Te=R.props&&R.props.onVnodeBeforeUpdate)&&Jn(Te,Y,R,ie),hs(O,!0);const xe=Ld(O),Ue=O.subTree;O.subTree=xe,_(Ue,xe,d(Ue.el),_e(Ue),O,Q,ce),R.el=xe.el,j===null&&Bv(O,xe.el),B&&pn(B,Q),(Te=R.props&&R.props.onVnodeUpdated)&&pn(()=>Jn(Te,Y,R,ie),Q)}else{let R;const{el:b,props:B}=z,{bm:Y,m:ie,parent:j,root:Te,type:xe}=O,Ue=oo(z);hs(O,!1),Y&&Ra(Y),!Ue&&(R=B&&B.onVnodeBeforeMount)&&Jn(R,j,z),hs(O,!0);{Te.ce&&Te.ce._hasShadowRoot()&&Te.ce._injectChildStyle(xe,O.parent?O.parent.type:void 0);const ke=O.subTree=Ld(O);_(null,ke,q,le,O,Q,ce),z.el=ke.el}if(ie&&pn(ie,Q),!Ue&&(R=B&&B.onVnodeMounted)){const ke=z;pn(()=>Jn(R,j,ke),Q)}(z.shapeFlag&256||j&&oo(j.vnode)&&j.vnode.shapeFlag&256)&&O.a&&pn(O.a,Q),O.isMounted=!0,z=q=le=null}};O.scope.on();const de=O.effect=new lm(me);O.scope.off();const ae=O.update=de.run.bind(de),he=O.job=de.runIfDirty.bind(de);he.i=O,he.id=O.uid,de.scheduler=()=>Af(he),hs(O,!0),ae()},T=(O,z,q)=>{z.component=O;const le=O.vnode.props;O.vnode=z,O.next=null,zv(O,z.props,le,q),Wv(O,z.children,q),Oi(),Md(O),Bi()},k=(O,z,q,le,Q,ce,I,me,de=!1)=>{const ae=O&&O.children,he=O?O.shapeFlag:0,R=z.children,{patchFlag:b,shapeFlag:B}=z;if(b>0){if(b&128){ne(ae,R,q,le,Q,ce,I,me,de);return}else if(b&256){G(ae,R,q,le,Q,ce,I,me,de);return}}B&8?(he&16&&se(ae,Q,ce),R!==ae&&u(q,R)):he&16?B&16?ne(ae,R,q,le,Q,ce,I,me,de):se(ae,Q,ce,!0):(he&8&&u(q,""),B&16&&S(R,q,le,Q,ce,I,me,de))},G=(O,z,q,le,Q,ce,I,me,de)=>{O=O||lr,z=z||lr;const ae=O.length,he=z.length,R=Math.min(ae,he);let b;for(b=0;b<R;b++){const B=z[b]=de?Li(z[b]):si(z[b]);_(O[b],B,q,null,Q,ce,I,me,de)}ae>he?se(O,Q,ce,!0,!1,R):S(z,q,le,Q,ce,I,me,de,R)},ne=(O,z,q,le,Q,ce,I,me,de)=>{let ae=0;const he=z.length;let R=O.length-1,b=he-1;for(;ae<=R&&ae<=b;){const B=O[ae],Y=z[ae]=de?Li(z[ae]):si(z[ae]);if(Es(B,Y))_(B,Y,q,null,Q,ce,I,me,de);else break;ae++}for(;ae<=R&&ae<=b;){const B=O[R],Y=z[b]=de?Li(z[b]):si(z[b]);if(Es(B,Y))_(B,Y,q,null,Q,ce,I,me,de);else break;R--,b--}if(ae>R){if(ae<=b){const B=b+1,Y=B<he?z[B].el:le;for(;ae<=b;)_(null,z[ae]=de?Li(z[ae]):si(z[ae]),q,Y,Q,ce,I,me,de),ae++}}else if(ae>b)for(;ae<=R;)pe(O[ae],Q,ce,!0),ae++;else{const B=ae,Y=ae,ie=new Map;for(ae=Y;ae<=b;ae++){const Ae=z[ae]=de?Li(z[ae]):si(z[ae]);Ae.key!=null&&ie.set(Ae.key,ae)}let j,Te=0;const xe=b-Y+1;let Ue=!1,ke=0;const ge=new Array(xe);for(ae=0;ae<xe;ae++)ge[ae]=0;for(ae=B;ae<=R;ae++){const Ae=O[ae];if(Te>=xe){pe(Ae,Q,ce,!0);continue}let Le;if(Ae.key!=null)Le=ie.get(Ae.key);else for(j=Y;j<=b;j++)if(ge[j-Y]===0&&Es(Ae,z[j])){Le=j;break}Le===void 0?pe(Ae,Q,ce,!0):(ge[Le-Y]=ae+1,Le>=ke?ke=Le:Ue=!0,_(Ae,z[Le],q,null,Q,ce,I,me,de),Te++)}const Se=Ue?Yv(ge):lr;for(j=Se.length-1,ae=xe-1;ae>=0;ae--){const Ae=Y+ae,Le=z[Ae],De=z[Ae+1],Qe=Ae+1<he?De.el||ng(De):le;ge[ae]===0?_(null,Le,q,Qe,Q,ce,I,me,de):Ue&&(j<0||ae!==Se[j]?re(Le,q,Qe,2):j--)}}},re=(O,z,q,le,Q=null)=>{const{el:ce,type:I,transition:me,children:de,shapeFlag:ae}=O;if(ae&6){re(O.component.subTree,z,q,le);return}if(ae&128){O.suspense.move(z,q,le);return}if(ae&64){I.move(O,z,q,Ve);return}if(I===mt){i(ce,z,q);for(let R=0;R<de.length;R++)re(de[R],z,q,le);i(O.anchor,z,q);return}if(I===Ca){w(O,z,q);return}if(le!==2&&ae&1&&me)if(le===0)me.beforeEnter(ce),i(ce,z,q),pn(()=>me.enter(ce),Q);else{const{leave:R,delayLeave:b,afterLeave:B}=me,Y=()=>{O.ctx.isUnmounted?s(ce):i(ce,z,q)},ie=()=>{ce._isLeaving&&ce[ni](!0),R(ce,()=>{Y(),B&&B()})};b?b(ce,Y,ie):ie()}else i(ce,z,q)},pe=(O,z,q,le=!1,Q=!1)=>{const{type:ce,props:I,ref:me,children:de,dynamicChildren:ae,shapeFlag:he,patchFlag:R,dirs:b,cacheIndex:B}=O;if(R===-2&&(Q=!1),me!=null&&(Oi(),ro(me,null,q,O,!0),Bi()),B!=null&&(z.renderCache[B]=void 0),he&256){z.ctx.deactivate(O);return}const Y=he&1&&b,ie=!oo(O);let j;if(ie&&(j=I&&I.onVnodeBeforeUnmount)&&Jn(j,z,O),he&6)qe(O.component,q,le);else{if(he&128){O.suspense.unmount(q,le);return}Y&&ds(O,null,z,"beforeUnmount"),he&64?O.type.remove(O,z,q,Ve,le):ae&&!ae.hasOnce&&(ce!==mt||R>0&&R&64)?se(ae,z,q,!1,!0):(ce===mt&&R&384||!Q&&he&16)&&se(de,z,q),le&&Ne(O)}(ie&&(j=I&&I.onVnodeUnmounted)||Y)&&pn(()=>{j&&Jn(j,z,O),Y&&ds(O,null,z,"unmounted")},q)},Ne=O=>{const{type:z,el:q,anchor:le,transition:Q}=O;if(z===mt){We(q,le);return}if(z===Ca){y(O);return}const ce=()=>{s(q),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(O.shapeFlag&1&&Q&&!Q.persisted){const{leave:I,delayLeave:me}=Q,de=()=>I(q,ce);me?me(O.el,ce,de):de()}else ce()},We=(O,z)=>{let q;for(;O!==z;)q=f(O),s(O),O=q;s(z)},qe=(O,z,q)=>{const{bum:le,scope:Q,job:ce,subTree:I,um:me,m:de,a:ae}=O;Nd(de),Nd(ae),le&&Ra(le),Q.stop(),ce&&(ce.flags|=8,pe(I,O,z,q)),me&&pn(me,z),pn(()=>{O.isUnmounted=!0},z)},se=(O,z,q,le=!1,Q=!1,ce=0)=>{for(let I=ce;I<O.length;I++)pe(O[I],z,q,le,Q)},_e=O=>{if(O.shapeFlag&6)return _e(O.component.subTree);if(O.shapeFlag&128)return O.suspense.next();const z=f(O.anchor||O.el),q=z&&z[av];return q?f(q):z};let ve=!1;const Ye=(O,z,q)=>{let le;O==null?z._vnode&&(pe(z._vnode,null,null,!0),le=z._vnode.component):_(z._vnode||null,O,z,null,null,null,q),z._vnode=O,ve||(ve=!0,Md(le),Am(),ve=!1)},Ve={p:_,um:pe,m:re,r:Ne,mt:X,mc:S,pc:k,pbc:U,n:_e,o:t};return{render:Ye,hydrate:void 0,createApp:Lv(Ye)}}function nc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function qv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function eg(t,e,n=!1){const i=t.children,s=e.children;if(Xe(i)&&Xe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Li(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&eg(o,a)),a.type===Ll&&(a.patchFlag===-1&&(a=s[r]=Li(a)),a.el=o.el),a.type===ln&&!a.el&&(a.el=o.el)}}function Yv(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function tg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tg(e)}function Nd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function ng(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?ng(e.subTree):null}const ig=t=>t.__isSuspense;function jv(t,e){e&&e.pendingBranch?Xe(t)?e.effects.push(...t):e.effects.push(t):tv(t)}const mt=Symbol.for("v-fgt"),Ll=Symbol.for("v-txt"),ln=Symbol.for("v-cmt"),Ca=Symbol.for("v-stc"),lo=[];let Tn=null;function ue(t=!1){lo.push(Tn=t?null:[])}function Kv(){lo.pop(),Tn=lo[lo.length-1]||null}let vo=1;function Ka(t,e=!1){vo+=t,t<0&&Tn&&e&&(Tn.hasOnce=!0)}function sg(t){return t.dynamicChildren=vo>0?Tn||lr:null,Kv(),vo>0&&Tn&&Tn.push(t),t}function fe(t,e,n,i,s,r){return sg(v(t,e,n,i,s,r,!0))}function rg(t,e,n,i,s){return sg(yt(t,e,n,i,s,!0))}function Za(t){return t?t.__v_isVNode===!0:!1}function Es(t,e){return t.type===e.type&&t.key===e.key}const og=({key:t})=>t??null,Pa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Lt(t)||Rt(t)||Ze(t)?{i:wn,r:t,k:e,f:!!n}:t:null);function v(t,e=null,n=null,i=0,s=null,r=t===mt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&og(e),ref:e&&Pa(e),scopeId:Cm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wn};return a?(Lf(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Lt(n)?8:16),vo>0&&!o&&Tn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Tn.push(c),c}const yt=Zv;function Zv(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===zm)&&(t=ln),Za(t)){const a=as(t,e,!0);return n&&Lf(a,n),vo>0&&!r&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(t)]=a:Tn.push(a)),a.patchFlag=-2,a}if(ax(t)&&(t=t.__vccOpts),e){e=Jv(e);let{class:a,style:c}=e;a&&!Lt(a)&&(e.class=pt(a)),dt(c)&&(Tl(c)&&!Xe(c)&&(c=kt({},c)),e.style=Vn(c))}const o=Lt(t)?1:ig(t)?128:Dm(t)?64:dt(t)?4:Ze(t)?2:0;return v(t,e,n,i,s,o,r,!0)}function Jv(t){return t?Tl(t)||Ym(t)?kt({},t):t:null}function as(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=t,l=e?lg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&og(l),ref:e&&e.ref?n&&r?Xe(r)?r.concat(Pa(e)):[r,Pa(e)]:Pa(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&as(t.ssContent),ssFallback:t.ssFallback&&as(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&_o(u,c.clone(u)),u}function _r(t=" ",e=0){return yt(Ll,null,t,e)}function ag(t,e){const n=yt(Ca,null,t);return n.staticCount=e,n}function nt(t="",e=!1){return e?(ue(),rg(ln,null,t)):yt(ln,null,t)}function si(t){return t==null||typeof t=="boolean"?yt(ln):Xe(t)?yt(mt,null,t.slice()):Za(t)?Li(t):yt(Ll,null,String(t))}function Li(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:as(t)}function Lf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Xe(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Lf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ym(e)?e._ctx=wn:s===3&&wn&&(wn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:wn},n=32):(e=String(e),i&64?(n=16,e=[_r(e)]):n=8);t.children=e,t.shapeFlag|=n}function lg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=pt([e.class,i.class]));else if(s==="style")e.style=Vn([e.style,i.style]);else if(_l(s)){const r=e[s],o=i[s];o&&r!==o&&!(Xe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Jn(t,e,n,i=null){qn(t,e,7,[n,i])}const Qv=Gm();let ex=0;function tx(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Qv,r={uid:ex++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Km(i,s),emitsOptions:Wm(i,s),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:i.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Iv.bind(null,r),t.ce&&t.ce(r),r}let Jt=null;const Df=()=>Jt||wn;let Ja,ou;{const t=bl(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ja=e("__VUE_INSTANCE_SETTERS__",n=>Jt=n),ou=e("__VUE_SSR_SETTERS__",n=>xo=n)}const No=t=>{const e=Jt;return Ja(t),t.scope.on(),()=>{t.scope.off(),Ja(e)}},Ud=()=>{Jt&&Jt.scope.off(),Ja(null)};function cg(t){return t.vnode.shapeFlag&4}let xo=!1;function nx(t,e=!1,n=!1){e&&ou(e);const{props:i,children:s}=t.vnode,r=cg(t);kv(t,i,r,e),Gv(t,s,n||e);const o=r?ix(t,e):void 0;return e&&ou(!1),o}function ix(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ev);const{setup:i}=n;if(i){Oi();const s=t.setupContext=i.length>1?rx(t):null,r=No(t),o=Do(i,t,0,[t.props,s]),a=Jp(o);if(Bi(),r(),(a||t.sp)&&!oo(t)&&Bm(t),a){if(o.then(Ud,Ud),e)return o.then(c=>{Fd(t,c)}).catch(c=>{Al(c,t,0)});t.asyncDep=o}else Fd(t,o)}else ug(t)}function Fd(t,e,n){Ze(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:dt(e)&&(t.setupState=bm(e)),ug(t)}function ug(t,e,n){const i=t.type;t.render||(t.render=i.render||fi);{const s=No(t);Oi();try{wv(t)}finally{Bi(),s()}}}const sx={get(t,e){return Zt(t,"get",""),t[e]}};function rx(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sx),slots:t.slots,emit:t.emit,expose:e}}function Dl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(bm(Tf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ao)return ao[n](t)},has(e,n){return n in e||n in ao}})):t.proxy}function ox(t,e=!0){return Ze(t)?t.displayName||t.name:t.name||e&&t.__name}function ax(t){return Ze(t)&&"__vccOpts"in t}const St=(t,e)=>K0(t,e,xo);function lx(t,e,n){try{Ka(-1);const i=arguments.length;return i===2?dt(e)&&!Xe(e)?Za(e)?yt(t,null,[e]):yt(t,e):yt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Za(n)&&(n=[n]),yt(t,e,n))}finally{Ka(1)}}const cx="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let au;const Od=typeof window<"u"&&window.trustedTypes;if(Od)try{au=Od.createPolicy("vue",{createHTML:t=>t})}catch{}const fg=au?t=>au.createHTML(t):t=>t,ux="http://www.w3.org/2000/svg",fx="http://www.w3.org/1998/Math/MathML",Pi=typeof document<"u"?document:null,Bd=Pi&&Pi.createElement("template"),dx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Pi.createElementNS(ux,t):e==="mathml"?Pi.createElementNS(fx,t):n?Pi.createElement(t,{is:n}):Pi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Pi.createTextNode(t),createComment:t=>Pi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Bd.innerHTML=fg(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Bd.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yi="transition",Or="animation",yo=Symbol("_vtc"),dg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hx=kt({},Im,dg),px=t=>(t.displayName="Transition",t.props=hx,t),kd=px((t,{slots:e})=>lx(uv,mx(t),e)),ps=(t,e=[])=>{Xe(t)?t.forEach(n=>n(...e)):t&&t(...e)},zd=t=>t?Xe(t)?t.some(e=>e.length>1):t.length>1:!1;function mx(t){const e={};for(const F in t)F in dg||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=gx(s),_=g&&g[0],p=g&&g[1],{onBeforeEnter:m,onEnter:x,onEnterCancelled:w,onLeave:y,onLeaveCancelled:A,onBeforeAppear:P=m,onAppear:L=x,onAppearCancelled:S=w}=e,E=(F,V,X,N)=>{F._enterCancelled=N,ms(F,V?u:a),ms(F,V?l:o),X&&X()},U=(F,V)=>{F._isLeaving=!1,ms(F,d),ms(F,h),ms(F,f),V&&V()},D=F=>(V,X)=>{const N=F?L:x,M=()=>E(V,F,X);ps(N,[V,M]),Vd(()=>{ms(V,F?c:r),bi(V,F?u:a),zd(N)||Hd(V,i,_,M)})};return kt(e,{onBeforeEnter(F){ps(m,[F]),bi(F,r),bi(F,o)},onBeforeAppear(F){ps(P,[F]),bi(F,c),bi(F,l)},onEnter:D(!1),onAppear:D(!0),onLeave(F,V){F._isLeaving=!0;const X=()=>U(F,V);bi(F,d),F._enterCancelled?(bi(F,f),$d(F)):($d(F),bi(F,f)),Vd(()=>{F._isLeaving&&(ms(F,d),bi(F,h),zd(y)||Hd(F,i,p,X))}),ps(y,[F,X])},onEnterCancelled(F){E(F,!1,void 0,!0),ps(w,[F])},onAppearCancelled(F){E(F,!0,void 0,!0),ps(S,[F])},onLeaveCancelled(F){U(F),ps(A,[F])}})}function gx(t){if(t==null)return null;if(dt(t))return[ic(t.enter),ic(t.leave)];{const e=ic(t);return[e,e]}}function ic(t){return d0(t)}function bi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[yo]||(t[yo]=new Set)).add(e)}function ms(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[yo];n&&(n.delete(e),n.size||(t[yo]=void 0))}function Vd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let _x=0;function Hd(t,e,n,i){const s=t._endId=++_x,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:c}=vx(t,e);if(!o)return i();const l=o+"end";let u=0;const d=()=>{t.removeEventListener(l,f),r()},f=h=>{h.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),t.addEventListener(l,f)}function vx(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(`${Yi}Delay`),r=i(`${Yi}Duration`),o=Gd(s,r),a=i(`${Or}Delay`),c=i(`${Or}Duration`),l=Gd(a,c);let u=null,d=0,f=0;e===Yi?o>0&&(u=Yi,d=o,f=r.length):e===Or?l>0&&(u=Or,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Yi:Or:null,f=u?u===Yi?r.length:c.length:0);const h=u===Yi&&/\b(?:transform|all)(?:,|$)/.test(i(`${Yi}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function Gd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Wd(n)+Wd(t[i])))}function Wd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function $d(t){return(t?t.ownerDocument:document).body.offsetHeight}function xx(t,e,n){const i=t[yo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Xd=Symbol("_vod"),yx=Symbol("_vsh"),Sx=Symbol(""),Mx=/(?:^|;)\s*display\s*:/;function bx(t,e,n){const i=t.style,s=Lt(n);let r=!1;if(n&&!s){if(e)if(Lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&La(i,a,"")}else for(const o in e)n[o]==null&&La(i,o,"");for(const o in n)o==="display"&&(r=!0),La(i,o,n[o])}else if(s){if(e!==n){const o=i[Sx];o&&(n+=";"+o),i.cssText=n,r=Mx.test(n)}}else e&&t.removeAttribute("style");Xd in t&&(t[Xd]=r?i.display:"",t[yx]&&(i.display="none"))}const qd=/\s*!important$/;function La(t,e,n){if(Xe(n))n.forEach(i=>La(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Ex(t,e);qd.test(n)?t.setProperty(cs(i),n.replace(qd,""),"important"):t[i]=n}}const Yd=["Webkit","Moz","ms"],sc={};function Ex(t,e){const n=sc[e];if(n)return n;let i=un(e);if(i!=="filter"&&i in t)return sc[e]=i;i=Sl(i);for(let s=0;s<Yd.length;s++){const r=Yd[s]+i;if(r in t)return sc[e]=r}return e}const jd="http://www.w3.org/1999/xlink";function Kd(t,e,n,i,s,r=v0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(jd,e.slice(6,e.length)):t.setAttributeNS(jd,e,n):n==null||r&&!nm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":_i(n)?String(n):n)}function Zd(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?fg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=nm(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ws(t,e,n,i){t.addEventListener(e,n,i)}function wx(t,e,n,i){t.removeEventListener(e,n,i)}const Jd=Symbol("_vei");function Tx(t,e,n,i,s=null){const r=t[Jd]||(t[Jd]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=Ax(e);if(i){const l=r[e]=Px(i,s);ws(t,a,l,c)}else o&&(wx(t,a,o,c),r[e]=void 0)}}const Qd=/(?:Once|Passive|Capture)$/;function Ax(t){let e;if(Qd.test(t)){e={};let i;for(;i=t.match(Qd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let rc=0;const Rx=Promise.resolve(),Cx=()=>rc||(Rx.then(()=>rc=0),rc=Date.now());function Px(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;qn(Lx(i,n.value),e,5,[i])};return n.value=t,n.attached=Cx(),n}function Lx(t,e){if(Xe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const eh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Dx=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?xx(t,i,o):e==="style"?bx(t,n,i):_l(e)?vf(e)||Tx(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ix(t,e,i,o))?(Zd(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kd(t,e,i,o,r,e!=="value")):t._isVueCE&&(Nx(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Lt(i)))?Zd(t,un(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Kd(t,e,i,o))};function Ix(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&eh(e)&&Ze(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return eh(e)&&Lt(n)?!1:e in t}function Nx(t,e){const n=t._def.props;if(!n)return!1;const i=un(e);return Array.isArray(n)?n.some(s=>un(s)===i):Object.keys(n).some(s=>un(s)===i)}const Qa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Xe(e)?n=>Ra(e,n):e};function Ux(t){t.target.composing=!0}function th(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fr=Symbol("_assign");function nh(t,e,n){return e&&(t=t.trim()),n&&(t=Ml(t)),t}const en={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[fr]=Qa(s);const r=i||s.props&&s.props.type==="number";ws(t,e?"change":"input",o=>{o.target.composing||t[fr](nh(t.value,n,r))}),(n||r)&&ws(t,"change",()=>{t.value=nh(t.value,n,r)}),e||(ws(t,"compositionstart",Ux),ws(t,"compositionend",th),ws(t,"change",th))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[fr]=Qa(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Ml(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===c)||(t.value=c))}},co={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=vl(e);ws(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ml(el(o)):el(o));t[fr](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,Io(()=>{t._assigning=!1})}),t[fr]=Qa(i)},mounted(t,{value:e}){ih(t,e)},beforeUpdate(t,e,n){t[fr]=Qa(n)},updated(t,{value:e}){t._assigning||ih(t,e)}};function ih(t,e){const n=t.multiple,i=Xe(e);if(!(n&&!i&&!vl(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=el(o);if(n)if(i){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=y0(e,a)>-1}else o.selected=e.has(a);else if(Lo(el(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function el(t){return"_value"in t?t._value:t.value}const Fx=["ctrl","shift","alt","meta"],Ox={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Fx.some(n=>t[`${n}Key`]&&!e.includes(n))},tl=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Ox[e[o]];if(a&&a(s,e))return}return t(s,...r)})},Bx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},If=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=cs(s.key);if(e.some(o=>o===r||Bx[o]===r))return t(s)})},kx=kt({patchProp:Dx},dx);let sh;function zx(){return sh||(sh=$v(kx))}const Vx=(...t)=>{const e=zx().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Gx(i);if(!s)return;const r=e._component;!Ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Hx(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Hx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Gx(t){return Lt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let hg;const Il=t=>hg=t,pg=Symbol();function lu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var uo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(uo||(uo={}));function Wx(){const t=om(!0),e=t.run(()=>we({}));let n=[],i=[];const s=Tf({install(r){Il(s),s._a=r,r.provide(pg,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const mg=()=>{};function rh(t,e,n,i=mg){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&am()&&S0(s),s}function Ws(t,...e){t.slice().forEach(n=>{n(...e)})}const $x=t=>t(),oh=Symbol(),oc=Symbol();function cu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];lu(s)&&lu(i)&&t.hasOwnProperty(n)&&!Rt(i)&&!di(i)?t[n]=cu(s,i):t[n]=i}return t}const Xx=Symbol();function qx(t){return!lu(t)||!t.hasOwnProperty(Xx)}const{assign:ts}=Object;function Yx(t){return!!(Rt(t)&&t.effect)}function jx(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=$0(n.state.value[t]);return ts(u,r,Object.keys(o||{}).reduce((d,f)=>(d[f]=Tf(St(()=>{Il(n);const h=n._s.get(t);return o[f].call(h,h)})),d),{}))}return c=gg(t,l,e,n,i,!0),c}function gg(t,e,n={},i,s,r){let o;const a=ts({actions:{}},n),c={deep:!0};let l,u,d=[],f=[],h;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={});let _;function p(S){let E;l=u=!1,typeof S=="function"?(S(i.state.value[t]),E={type:uo.patchFunction,storeId:t,events:h}):(cu(i.state.value[t],S),E={type:uo.patchObject,payload:S,storeId:t,events:h});const U=_=Symbol();Io().then(()=>{_===U&&(l=!0)}),u=!0,Ws(d,E,i.state.value[t])}const m=r?function(){const{state:E}=n,U=E?E():{};this.$patch(D=>{ts(D,U)})}:mg;function x(){o.stop(),d=[],f=[],i._s.delete(t)}const w=(S,E="")=>{if(oh in S)return S[oc]=E,S;const U=function(){Il(i);const D=Array.from(arguments),F=[],V=[];function X(T){F.push(T)}function N(T){V.push(T)}Ws(f,{args:D,name:U[oc],store:A,after:X,onError:N});let M;try{M=S.apply(this&&this.$id===t?this:A,D)}catch(T){throw Ws(V,T),T}return M instanceof Promise?M.then(T=>(Ws(F,T),T)).catch(T=>(Ws(V,T),Promise.reject(T))):(Ws(F,M),M)};return U[oh]=!0,U[oc]=E,U},y={_p:i,$id:t,$onAction:rh.bind(null,f),$patch:p,$reset:m,$subscribe(S,E={}){const U=rh(d,S,E.detached,()=>D()),D=o.run(()=>hi(()=>i.state.value[t],F=>{(E.flush==="sync"?u:l)&&S({storeId:t,type:uo.direct,events:h},F)},ts({},c,E)));return U},$dispose:x},A=wl(y);i._s.set(t,A);const L=(i._a&&i._a.runWithContext||$x)(()=>i._e.run(()=>(o=om()).run(()=>e({action:w}))));for(const S in L){const E=L[S];if(Rt(E)&&!Yx(E)||di(E))r||(g&&qx(E)&&(Rt(E)?E.value=g[S]:cu(E,g[S])),i.state.value[t][S]=E);else if(typeof E=="function"){const U=w(E,S);L[S]=U,a.actions[S]=E}}return ts(A,L),ts(ot(A),L),Object.defineProperty(A,"$state",{get:()=>i.state.value[t],set:S=>{p(E=>{ts(E,S)})}}),i._p.forEach(S=>{ts(A,o.run(()=>S({store:A,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate(A.$state,g),l=!0,u=!0,A}/*! #__NO_SIDE_EFFECTS__ */function Nf(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,c){const l=iv();return a=a||(l?so(pg,null):null),a&&Il(a),a=hg,a._s.has(i)||(r?gg(i,e,s,a):jx(i,s,a)),a._s.get(i)}return o.$id=i,o}function Rr(t){{const e=ot(t),n={};for(const i in e){const s=e[i];s.effect?n[i]=St({get:()=>t[i],set(r){t[i]=r}}):(Rt(s)||di(s))&&(n[i]=Y0(t,i))}return n}}function _g(t,e){return function(){return t.apply(e,arguments)}}const{toString:Kx}=Object.prototype,{getPrototypeOf:Uf}=Object,{iterator:Nl,toStringTag:vg}=Symbol,Ul=(t=>e=>{const n=Kx.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),jn=t=>(t=t.toLowerCase(),e=>Ul(e)===t),Fl=t=>e=>typeof e===t,{isArray:Cr}=Array,vr=Fl("undefined");function Uo(t){return t!==null&&!vr(t)&&t.constructor!==null&&!vr(t.constructor)&&_n(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const xg=jn("ArrayBuffer");function Zx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&xg(t.buffer),e}const Jx=Fl("string"),_n=Fl("function"),yg=Fl("number"),Fo=t=>t!==null&&typeof t=="object",Qx=t=>t===!0||t===!1,Da=t=>{if(Ul(t)!=="object")return!1;const e=Uf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(vg in t)&&!(Nl in t)},ey=t=>{if(!Fo(t)||Uo(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},ty=jn("Date"),ny=jn("File"),iy=t=>!!(t&&typeof t.uri<"u"),sy=t=>t&&typeof t.getParts<"u",ry=jn("Blob"),oy=jn("FileList"),ay=t=>Fo(t)&&_n(t.pipe);function ly(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const ah=ly(),lh=typeof ah.FormData<"u"?ah.FormData:void 0,cy=t=>{let e;return t&&(lh&&t instanceof lh||_n(t.append)&&((e=Ul(t))==="formdata"||e==="object"&&_n(t.toString)&&t.toString()==="[object FormData]"))},uy=jn("URLSearchParams"),[fy,dy,hy,py]=["ReadableStream","Request","Response","Headers"].map(jn),my=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Oo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Cr(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(Uo(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function Sg(t,e){if(Uo(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const Cs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Mg=t=>!vr(t)&&t!==Cs;function uu(){const{caseless:t,skipUndefined:e}=Mg(this)&&this||{},n={},i=(s,r)=>{if(r==="__proto__"||r==="constructor"||r==="prototype")return;const o=t&&Sg(n,r)||r;Da(n[o])&&Da(s)?n[o]=uu(n[o],s):Da(s)?n[o]=uu({},s):Cr(s)?n[o]=s.slice():(!e||!vr(s))&&(n[o]=s)};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&Oo(arguments[s],i);return n}const gy=(t,e,n,{allOwnKeys:i}={})=>(Oo(e,(s,r)=>{n&&_n(s)?Object.defineProperty(t,r,{value:_g(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),_y=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),vy=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},xy=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Uf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},yy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Sy=t=>{if(!t)return null;if(Cr(t))return t;let e=t.length;if(!yg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},My=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Uf(Uint8Array)),by=(t,e)=>{const i=(t&&t[Nl]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},Ey=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},wy=jn("HTMLFormElement"),Ty=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),ch=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Ay=jn("RegExp"),bg=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Oo(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},Ry=t=>{bg(t,(e,n)=>{if(_n(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(_n(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Cy=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Cr(t)?i(t):i(String(t).split(e)),n},Py=()=>{},Ly=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Dy(t){return!!(t&&_n(t.append)&&t[vg]==="FormData"&&t[Nl])}const Iy=t=>{const e=new Array(10),n=(i,s)=>{if(Fo(i)){if(e.indexOf(i)>=0)return;if(Uo(i))return i;if(!("toJSON"in i)){e[s]=i;const r=Cr(i)?[]:{};return Oo(i,(o,a)=>{const c=n(o,s+1);!vr(c)&&(r[a]=c)}),e[s]=void 0,r}}return i};return n(t,0)},Ny=jn("AsyncFunction"),Uy=t=>t&&(Fo(t)||_n(t))&&_n(t.then)&&_n(t.catch),Eg=((t,e)=>t?setImmediate:e?((n,i)=>(Cs.addEventListener("message",({source:s,data:r})=>{s===Cs&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),Cs.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",_n(Cs.postMessage)),Fy=typeof queueMicrotask<"u"?queueMicrotask.bind(Cs):typeof process<"u"&&process.nextTick||Eg,Oy=t=>t!=null&&_n(t[Nl]),J={isArray:Cr,isArrayBuffer:xg,isBuffer:Uo,isFormData:cy,isArrayBufferView:Zx,isString:Jx,isNumber:yg,isBoolean:Qx,isObject:Fo,isPlainObject:Da,isEmptyObject:ey,isReadableStream:fy,isRequest:dy,isResponse:hy,isHeaders:py,isUndefined:vr,isDate:ty,isFile:ny,isReactNativeBlob:iy,isReactNative:sy,isBlob:ry,isRegExp:Ay,isFunction:_n,isStream:ay,isURLSearchParams:uy,isTypedArray:My,isFileList:oy,forEach:Oo,merge:uu,extend:gy,trim:my,stripBOM:_y,inherits:vy,toFlatObject:xy,kindOf:Ul,kindOfTest:jn,endsWith:yy,toArray:Sy,forEachEntry:by,matchAll:Ey,isHTMLForm:wy,hasOwnProperty:ch,hasOwnProp:ch,reduceDescriptors:bg,freezeMethods:Ry,toObjectSet:Cy,toCamelCase:Ty,noop:Py,toFiniteNumber:Ly,findKey:Sg,global:Cs,isContextDefined:Mg,isSpecCompliantForm:Dy,toJSONObject:Iy,isAsyncFn:Ny,isThenable:Uy,setImmediate:Eg,asap:Fy,isIterable:Oy};let Ke=class wg extends Error{static from(e,n,i,s,r,o){const a=new wg(e.message,n||e.code,i,s,r);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:J.toJSONObject(this.config),code:this.code,status:this.status}}};Ke.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Ke.ERR_BAD_OPTION="ERR_BAD_OPTION";Ke.ECONNABORTED="ECONNABORTED";Ke.ETIMEDOUT="ETIMEDOUT";Ke.ERR_NETWORK="ERR_NETWORK";Ke.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Ke.ERR_DEPRECATED="ERR_DEPRECATED";Ke.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Ke.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Ke.ERR_CANCELED="ERR_CANCELED";Ke.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Ke.ERR_INVALID_URL="ERR_INVALID_URL";const By=null;function fu(t){return J.isPlainObject(t)||J.isArray(t)}function Tg(t){return J.endsWith(t,"[]")?t.slice(0,-2):t}function ac(t,e,n){return t?t.concat(e).map(function(s,r){return s=Tg(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function ky(t){return J.isArray(t)&&!t.some(fu)}const zy=J.toFlatObject(J,{},null,function(e){return/^is[A-Z]/.test(e)});function Ol(t,e,n){if(!J.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=J.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,p){return!J.isUndefined(p[_])});const i=n.metaTokens,s=n.visitor||u,r=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&J.isSpecCompliantForm(e);if(!J.isFunction(s))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(J.isDate(g))return g.toISOString();if(J.isBoolean(g))return g.toString();if(!c&&J.isBlob(g))throw new Ke("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(g)||J.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,_,p){let m=g;if(J.isReactNative(e)&&J.isReactNativeBlob(g))return e.append(ac(p,_,r),l(g)),!1;if(g&&!p&&typeof g=="object"){if(J.endsWith(_,"{}"))_=i?_:_.slice(0,-2),g=JSON.stringify(g);else if(J.isArray(g)&&ky(g)||(J.isFileList(g)||J.endsWith(_,"[]"))&&(m=J.toArray(g)))return _=Tg(_),m.forEach(function(w,y){!(J.isUndefined(w)||w===null)&&e.append(o===!0?ac([_],y,r):o===null?_:_+"[]",l(w))}),!1}return fu(g)?!0:(e.append(ac(p,_,r),l(g)),!1)}const d=[],f=Object.assign(zy,{defaultVisitor:u,convertValue:l,isVisitable:fu});function h(g,_){if(!J.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));d.push(g),J.forEach(g,function(m,x){(!(J.isUndefined(m)||m===null)&&s.call(e,m,J.isString(x)?x.trim():x,_,f))===!0&&h(m,_?_.concat(x):[x])}),d.pop()}}if(!J.isObject(t))throw new TypeError("data must be an object");return h(t),e}function uh(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Ff(t,e){this._pairs=[],t&&Ol(t,this,e)}const Ag=Ff.prototype;Ag.append=function(e,n){this._pairs.push([e,n])};Ag.toString=function(e){const n=e?function(i){return e.call(this,i,uh)}:uh;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Vy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Rg(t,e,n){if(!e)return t;const i=n&&n.encode||Vy,s=J.isFunction(n)?{serialize:n}:n,r=s&&s.serialize;let o;if(r?o=r(e,s):o=J.isURLSearchParams(e)?e.toString():new Ff(e,s).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class fh{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){J.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Of={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Hy=typeof URLSearchParams<"u"?URLSearchParams:Ff,Gy=typeof FormData<"u"?FormData:null,Wy=typeof Blob<"u"?Blob:null,$y={isBrowser:!0,classes:{URLSearchParams:Hy,FormData:Gy,Blob:Wy},protocols:["http","https","file","blob","url","data"]},Bf=typeof window<"u"&&typeof document<"u",du=typeof navigator=="object"&&navigator||void 0,Xy=Bf&&(!du||["ReactNative","NativeScript","NS"].indexOf(du.product)<0),qy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Yy=Bf&&window.location.href||"http://localhost",jy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Bf,hasStandardBrowserEnv:Xy,hasStandardBrowserWebWorkerEnv:qy,navigator:du,origin:Yy},Symbol.toStringTag,{value:"Module"})),Qt={...jy,...$y};function Ky(t,e){return Ol(t,new Qt.classes.URLSearchParams,{visitor:function(n,i,s,r){return Qt.isNode&&J.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function Zy(t){return J.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Jy(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Cg(t){function e(n,i,s,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=r>=n.length;return o=!o&&J.isArray(s)?s.length:o,c?(J.hasOwnProp(s,o)?s[o]=[s[o],i]:s[o]=i,!a):((!s[o]||!J.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&J.isArray(s[o])&&(s[o]=Jy(s[o])),!a)}if(J.isFormData(t)&&J.isFunction(t.entries)){const n={};return J.forEachEntry(t,(i,s)=>{e(Zy(i),s,n,0)}),n}return null}function Qy(t,e,n){if(J.isString(t))try{return(e||JSON.parse)(t),J.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Bo={transitional:Of,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=J.isObject(e);if(r&&J.isHTMLForm(e)&&(e=new FormData(e)),J.isFormData(e))return s?JSON.stringify(Cg(e)):e;if(J.isArrayBuffer(e)||J.isBuffer(e)||J.isStream(e)||J.isFile(e)||J.isBlob(e)||J.isReadableStream(e))return e;if(J.isArrayBufferView(e))return e.buffer;if(J.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Ky(e,this.formSerializer).toString();if((a=J.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ol(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return r||s?(n.setContentType("application/json",!1),Qy(e)):e}],transformResponse:[function(e){const n=this.transitional||Bo.transitional,i=n&&n.forcedJSONParsing,s=this.responseType==="json";if(J.isResponse(e)||J.isReadableStream(e))return e;if(e&&J.isString(e)&&(i&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?Ke.from(a,Ke.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qt.classes.FormData,Blob:Qt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],t=>{Bo.headers[t]={}});const eS=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),tS=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&eS[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},dh=Symbol("internals");function Br(t){return t&&String(t).trim().toLowerCase()}function Ia(t){return t===!1||t==null?t:J.isArray(t)?t.map(Ia):String(t)}function nS(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const iS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function lc(t,e,n,i,s){if(J.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!J.isString(e)){if(J.isString(i))return e.indexOf(i)!==-1;if(J.isRegExp(i))return i.test(e)}}function sS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function rS(t,e){const n=J.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let vn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,c,l){const u=Br(c);if(!u)throw new Error("header name must be a non-empty string");const d=J.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||c]=Ia(a))}const o=(a,c)=>J.forEach(a,(l,u)=>r(l,u,c));if(J.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(J.isString(e)&&(e=e.trim())&&!iS(e))o(tS(e),n);else if(J.isObject(e)&&J.isIterable(e)){let a={},c,l;for(const u of e){if(!J.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?J.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=Br(e),e){const i=J.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return nS(s);if(J.isFunction(n))return n.call(this,s,i);if(J.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Br(e),e){const i=J.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||lc(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=Br(o),o){const a=J.findKey(i,o);a&&(!n||lc(i,i[a],a,n))&&(delete i[a],s=!0)}}return J.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||lc(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return J.forEach(this,(s,r)=>{const o=J.findKey(i,r);if(o){n[o]=Ia(s),delete n[r];return}const a=e?sS(r):String(r).trim();a!==r&&delete n[r],n[a]=Ia(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return J.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&J.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[dh]=this[dh]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Br(o);i[a]||(rS(s,o),i[a]=!0)}return J.isArray(e)?e.forEach(r):r(e),this}};vn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);J.reduceDescriptors(vn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});J.freezeMethods(vn);function cc(t,e){const n=this||Bo,i=e||n,s=vn.from(i.headers);let r=i.data;return J.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Pg(t){return!!(t&&t.__CANCEL__)}let ko=class extends Ke{constructor(e,n,i){super(e??"canceled",Ke.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Lg(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ke("Request failed with status code "+n.status,[Ke.ERR_BAD_REQUEST,Ke.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function oS(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function aS(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=i[r];o||(o=l),n[s]=c,i[s]=l;let d=r,f=0;for(;d!==s;)f+=n[d++],d=d%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),l-o<e)return;const h=u&&l-u;return h?Math.round(f*1e3/h):void 0}}function lS(t,e){let n=0,i=1e3/e,s,r;const o=(l,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...l)};return[(...l)=>{const u=Date.now(),d=u-n;d>=i?o(l,u):(s=l,r||(r=setTimeout(()=>{r=null,o(s)},i-d)))},()=>s&&o(s)]}const nl=(t,e,n=3)=>{let i=0;const s=aS(50,250);return lS(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,c=o-i,l=s(c),u=o<=a;i=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},hh=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},ph=t=>(...e)=>J.asap(()=>t(...e)),cS=Qt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Qt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Qt.origin),Qt.navigator&&/(msie|trident)/i.test(Qt.navigator.userAgent)):()=>!0,uS=Qt.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];J.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),J.isString(i)&&a.push(`path=${i}`),J.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),J.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function fS(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function dS(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Dg(t,e,n){let i=!fS(e);return t&&(i||n==!1)?dS(t,e):e}const mh=t=>t instanceof vn?{...t}:t;function Bs(t,e){e=e||{};const n={};function i(l,u,d,f){return J.isPlainObject(l)&&J.isPlainObject(u)?J.merge.call({caseless:f},l,u):J.isPlainObject(u)?J.merge({},u):J.isArray(u)?u.slice():u}function s(l,u,d,f){if(J.isUndefined(u)){if(!J.isUndefined(l))return i(void 0,l,d,f)}else return i(l,u,d,f)}function r(l,u){if(!J.isUndefined(u))return i(void 0,u)}function o(l,u){if(J.isUndefined(u)){if(!J.isUndefined(l))return i(void 0,l)}else return i(void 0,u)}function a(l,u,d){if(d in e)return i(l,u);if(d in t)return i(void 0,l)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,d)=>s(mh(l),mh(u),d,!0)};return J.forEach(Object.keys({...t,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const d=J.hasOwnProp(c,u)?c[u]:s,f=d(t[u],e[u],u);J.isUndefined(f)&&d!==a||(n[u]=f)}),n}const Ig=t=>{const e=Bs({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:r,headers:o,auth:a}=e;if(e.headers=o=vn.from(o),e.url=Rg(Dg(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),J.isFormData(n)){if(Qt.hasStandardBrowserEnv||Qt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(J.isFunction(n.getHeaders)){const c=n.getHeaders(),l=["content-type","content-length"];Object.entries(c).forEach(([u,d])=>{l.includes(u.toLowerCase())&&o.set(u,d)})}}if(Qt.hasStandardBrowserEnv&&(i&&J.isFunction(i)&&(i=i(e)),i||i!==!1&&cS(e.url))){const c=s&&r&&uS.read(r);c&&o.set(s,c)}return e},hS=typeof XMLHttpRequest<"u",pS=hS&&function(t){return new Promise(function(n,i){const s=Ig(t);let r=s.data;const o=vn.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,d,f,h,g;function _(){h&&h(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function m(){if(!p)return;const w=vn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),A={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:w,config:t,request:p};Lg(function(L){n(L),_()},function(L){i(L),_()},A),p=null}"onloadend"in p?p.onloadend=m:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(m)},p.onabort=function(){p&&(i(new Ke("Request aborted",Ke.ECONNABORTED,t,p)),p=null)},p.onerror=function(y){const A=y&&y.message?y.message:"Network Error",P=new Ke(A,Ke.ERR_NETWORK,t,p);P.event=y||null,i(P),p=null},p.ontimeout=function(){let y=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const A=s.transitional||Of;s.timeoutErrorMessage&&(y=s.timeoutErrorMessage),i(new Ke(y,A.clarifyTimeoutError?Ke.ETIMEDOUT:Ke.ECONNABORTED,t,p)),p=null},r===void 0&&o.setContentType(null),"setRequestHeader"in p&&J.forEach(o.toJSON(),function(y,A){p.setRequestHeader(A,y)}),J.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),a&&a!=="json"&&(p.responseType=s.responseType),l&&([f,g]=nl(l,!0),p.addEventListener("progress",f)),c&&p.upload&&([d,h]=nl(c),p.upload.addEventListener("progress",d),p.upload.addEventListener("loadend",h)),(s.cancelToken||s.signal)&&(u=w=>{p&&(i(!w||w.type?new ko(null,t,p):w),p.abort(),p=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const x=oS(s.url);if(x&&Qt.protocols.indexOf(x)===-1){i(new Ke("Unsupported protocol "+x+":",Ke.ERR_BAD_REQUEST,t));return}p.send(r||null)})},mS=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,s;const r=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;i.abort(u instanceof Ke?u:new ko(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,r(new Ke(`timeout of ${e}ms exceeded`,Ke.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),t=null)};t.forEach(l=>l.addEventListener("abort",r));const{signal:c}=i;return c.unsubscribe=()=>J.asap(a),c}},gS=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},_S=async function*(t,e){for await(const n of vS(t))yield*gS(n,e)},vS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},gh=(t,e,n,i)=>{const s=_S(t,e);let r=0,o,a=c=>{o||(o=!0,i&&i(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let d=u.byteLength;if(n){let f=r+=d;n(f)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},_h=64*1024,{isFunction:Ko}=J,xS=(({Request:t,Response:e})=>({Request:t,Response:e}))(J.global),{ReadableStream:vh,TextEncoder:xh}=J.global,yh=(t,...e)=>{try{return!!t(...e)}catch{return!1}},yS=t=>{t=J.merge.call({skipUndefined:!0},xS,t);const{fetch:e,Request:n,Response:i}=t,s=e?Ko(e):typeof fetch=="function",r=Ko(n),o=Ko(i);if(!s)return!1;const a=s&&Ko(vh),c=s&&(typeof xh=="function"?(g=>_=>g.encode(_))(new xh):async g=>new Uint8Array(await new n(g).arrayBuffer())),l=r&&a&&yh(()=>{let g=!1;const _=new n(Qt.origin,{body:new vh,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!_}),u=o&&a&&yh(()=>J.isReadableStream(new i("").body)),d={stream:u&&(g=>g.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!d[g]&&(d[g]=(_,p)=>{let m=_&&_[g];if(m)return m.call(_);throw new Ke(`Response type '${g}' is not supported`,Ke.ERR_NOT_SUPPORT,p)})});const f=async g=>{if(g==null)return 0;if(J.isBlob(g))return g.size;if(J.isSpecCompliantForm(g))return(await new n(Qt.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(J.isArrayBufferView(g)||J.isArrayBuffer(g))return g.byteLength;if(J.isURLSearchParams(g)&&(g=g+""),J.isString(g))return(await c(g)).byteLength},h=async(g,_)=>{const p=J.toFiniteNumber(g.getContentLength());return p??f(_)};return async g=>{let{url:_,method:p,data:m,signal:x,cancelToken:w,timeout:y,onDownloadProgress:A,onUploadProgress:P,responseType:L,headers:S,withCredentials:E="same-origin",fetchOptions:U}=Ig(g),D=e||fetch;L=L?(L+"").toLowerCase():"text";let F=mS([x,w&&w.toAbortSignal()],y),V=null;const X=F&&F.unsubscribe&&(()=>{F.unsubscribe()});let N;try{if(P&&l&&p!=="get"&&p!=="head"&&(N=await h(S,m))!==0){let re=new n(_,{method:"POST",body:m,duplex:"half"}),pe;if(J.isFormData(m)&&(pe=re.headers.get("content-type"))&&S.setContentType(pe),re.body){const[Ne,We]=hh(N,nl(ph(P)));m=gh(re.body,_h,Ne,We)}}J.isString(E)||(E=E?"include":"omit");const M=r&&"credentials"in n.prototype,T={...U,signal:F,method:p.toUpperCase(),headers:S.normalize().toJSON(),body:m,duplex:"half",credentials:M?E:void 0};V=r&&new n(_,T);let k=await(r?D(V,U):D(_,T));const G=u&&(L==="stream"||L==="response");if(u&&(A||G&&X)){const re={};["status","statusText","headers"].forEach(qe=>{re[qe]=k[qe]});const pe=J.toFiniteNumber(k.headers.get("content-length")),[Ne,We]=A&&hh(pe,nl(ph(A),!0))||[];k=new i(gh(k.body,_h,Ne,()=>{We&&We(),X&&X()}),re)}L=L||"text";let ne=await d[J.findKey(d,L)||"text"](k,g);return!G&&X&&X(),await new Promise((re,pe)=>{Lg(re,pe,{data:ne,headers:vn.from(k.headers),status:k.status,statusText:k.statusText,config:g,request:V})})}catch(M){throw X&&X(),M&&M.name==="TypeError"&&/Load failed|fetch/i.test(M.message)?Object.assign(new Ke("Network Error",Ke.ERR_NETWORK,g,V,M&&M.response),{cause:M.cause||M}):Ke.from(M,M&&M.code,g,V,M&&M.response)}}},SS=new Map,Ng=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,c,l,u=SS;for(;a--;)c=r[a],l=u.get(c),l===void 0&&u.set(c,l=a?new Map:yS(e)),u=l;return l};Ng();const kf={http:By,xhr:pS,fetch:{get:Ng}};J.forEach(kf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Sh=t=>`- ${t}`,MS=t=>J.isFunction(t)||t===null||t===!1;function bS(t,e){t=J.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!MS(i)&&(s=kf[(a=String(i)).toLowerCase()],s===void 0))throw new Ke(`Unknown adapter '${a}'`);if(s&&(J.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Sh).join(`
`):" "+Sh(o[0]):"as no adapter specified";throw new Ke("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s}const Ug={getAdapter:bS,adapters:kf};function uc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ko(null,t)}function Mh(t){return uc(t),t.headers=vn.from(t.headers),t.data=cc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Ug.getAdapter(t.adapter||Bo.adapter,t)(t).then(function(i){return uc(t),i.data=cc.call(t,t.transformResponse,i),i.headers=vn.from(i.headers),i},function(i){return Pg(i)||(uc(t),i&&i.response&&(i.response.data=cc.call(t,t.transformResponse,i.response),i.response.headers=vn.from(i.response.headers))),Promise.reject(i)})}const Fg="1.13.6",Bl={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Bl[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const bh={};Bl.transitional=function(e,n,i){function s(r,o){return"[Axios v"+Fg+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Ke(s(o," has been removed"+(n?" in "+n:"")),Ke.ERR_DEPRECATED);return n&&!bh[o]&&(bh[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};Bl.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function ES(t,e,n){if(typeof t!="object")throw new Ke("options must be an object",Ke.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=e[r];if(o){const a=t[r],c=a===void 0||o(a,r,t);if(c!==!0)throw new Ke("option "+r+" must be "+c,Ke.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ke("Unknown option "+r,Ke.ERR_BAD_OPTION)}}const Na={assertOptions:ES,validators:Bl},Dn=Na.validators;let Us=class{constructor(e){this.defaults=e||{},this.interceptors={request:new fh,response:new fh}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?r&&!String(i.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+r):i.stack=r}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Bs(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Na.assertOptions(i,{silentJSONParsing:Dn.transitional(Dn.boolean),forcedJSONParsing:Dn.transitional(Dn.boolean),clarifyTimeoutError:Dn.transitional(Dn.boolean),legacyInterceptorReqResOrdering:Dn.transitional(Dn.boolean)},!1),s!=null&&(J.isFunction(s)?n.paramsSerializer={serialize:s}:Na.assertOptions(s,{encode:Dn.function,serialize:Dn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Na.assertOptions(n,{baseUrl:Dn.spelling("baseURL"),withXsrfToken:Dn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&J.merge(r.common,r[n.method]);r&&J.forEach(["delete","get","head","post","put","patch","common"],g=>{delete r[g]}),n.headers=vn.concat(o,r);const a=[];let c=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(n)===!1)return;c=c&&_.synchronous;const p=n.transitional||Of;p&&p.legacyInterceptorReqResOrdering?a.unshift(_.fulfilled,_.rejected):a.push(_.fulfilled,_.rejected)});const l=[];this.interceptors.response.forEach(function(_){l.push(_.fulfilled,_.rejected)});let u,d=0,f;if(!c){const g=[Mh.bind(this),void 0];for(g.unshift(...a),g.push(...l),f=g.length,u=Promise.resolve(n);d<f;)u=u.then(g[d++],g[d++]);return u}f=a.length;let h=n;for(;d<f;){const g=a[d++],_=a[d++];try{h=g(h)}catch(p){_.call(this,p);break}}try{u=Mh.call(this,h)}catch(g){return Promise.reject(g)}for(d=0,f=l.length;d<f;)u=u.then(l[d++],l[d++]);return u}getUri(e){e=Bs(this.defaults,e);const n=Dg(e.baseURL,e.url,e.allowAbsoluteUrls);return Rg(n,e.params,e.paramsSerializer)}};J.forEach(["delete","get","head","options"],function(e){Us.prototype[e]=function(n,i){return this.request(Bs(i||{},{method:e,url:n,data:(i||{}).data}))}});J.forEach(["post","put","patch"],function(e){function n(i){return function(r,o,a){return this.request(Bs(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Us.prototype[e]=n(),Us.prototype[e+"Form"]=n(!0)});let wS=class Og{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new ko(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Og(function(s){e=s}),cancel:e}}};function TS(t){return function(n){return t.apply(null,n)}}function AS(t){return J.isObject(t)&&t.isAxiosError===!0}const hu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(hu).forEach(([t,e])=>{hu[e]=t});function Bg(t){const e=new Us(t),n=_g(Us.prototype.request,e);return J.extend(n,Us.prototype,e,{allOwnKeys:!0}),J.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Bg(Bs(t,s))},n}const Ut=Bg(Bo);Ut.Axios=Us;Ut.CanceledError=ko;Ut.CancelToken=wS;Ut.isCancel=Pg;Ut.VERSION=Fg;Ut.toFormData=Ol;Ut.AxiosError=Ke;Ut.Cancel=Ut.CanceledError;Ut.all=function(e){return Promise.all(e)};Ut.spread=TS;Ut.isAxiosError=AS;Ut.mergeConfig=Bs;Ut.AxiosHeaders=vn;Ut.formToJSON=t=>Cg(J.isHTMLForm(t)?new FormData(t):t);Ut.getAdapter=Ug.getAdapter;Ut.HttpStatusCode=hu;Ut.default=Ut;const{Axios:GF,AxiosError:WF,CanceledError:$F,isCancel:XF,CancelToken:qF,VERSION:YF,all:jF,Cancel:KF,isAxiosError:ZF,spread:JF,toFormData:QF,AxiosHeaders:eO,HttpStatusCode:tO,formToJSON:nO,getAdapter:iO,mergeConfig:sO}=Ut,$s=new Map;function fc(t){const{method:e,url:n,params:i,data:s}=t;return[e,n,JSON.stringify(i),JSON.stringify(s)].join("&")}function RS(t){return t.interceptors.request.use(e=>{const n=fc(e);if($s.has(n)){const s=$s.get(n);s==null||s.abort(),$s.delete(n)}const i=new AbortController;return e.signal=i.signal,$s.set(n,i),e.metadata={startTime:Date.now()},e},e=>Promise.reject(e)),t.interceptors.response.use(e=>{var s,r;const n=fc(e.config);$s.delete(n);const i=Date.now()-(((s=e.config.metadata)==null?void 0:s.startTime)||Date.now());return i>3e3&&console.warn(`[API] Slow response: ${(r=e.config.method)==null?void 0:r.toUpperCase()} ${e.config.url} took ${i}ms`),e},async e=>{var r,o,a;const n=e.config;if(n){const c=fc(n);$s.delete(c)}if(e.name==="CanceledError"||e.code==="ERR_CANCELED")return Promise.reject({deduplicated:!0,message:"请求已去重"});const i=(r=e.response)==null?void 0:r.status,s=(o=e.config)==null?void 0:o.url;return i===401?(console.error("[API] 未授权，请检查认证信息"),Promise.reject({status:401,message:"未授权",url:s})):i===403?(console.error("[API] 禁止访问，权限不足"),Promise.reject({status:403,message:"权限不足",url:s})):i===404?(console.warn(`[API] 资源不存在: ${s}`),Promise.reject({status:404,message:"资源不存在",url:s})):i===429?(console.warn("[API] 请求过于频繁，请稍后重试"),Promise.reject({status:429,message:"请求过于频繁",url:s})):i&&i>=500?(console.error(`[API] 服务端错误 ${i}: ${s}`),Promise.reject({status:i,message:`服务端错误 (${i})`,url:s})):e.code==="ECONNREFUSED"||e.code==="ERR_NETWORK"?(console.error("[API] 无法连接到服务器 (http://localhost:22888)"),Promise.reject({code:"NETWORK_ERROR",message:"无法连接到记忆服务器，请确认后端服务已启动"})):e.code==="ETIMEDOUT"||(a=e.message)!=null&&a.includes("timeout")?(console.error(`[API] 请求超时: ${s}`),Promise.reject({code:"TIMEOUT",message:"请求超时，请稍后重试"})):(console.error("[API] 未知错误:",e.message),Promise.reject({code:"UNKNOWN",message:e.message||"未知错误"}))}),t}const CS=2,PS=1e3;async function LS(t){return new Promise(e=>setTimeout(e,t))}async function bt(t,e=CS,n=PS){let i=null;for(let s=0;s<=e;s++)try{return await t()}catch(r){if(i=r,s<e&&DS(r)){console.warn(`[Retry] 第 ${s+1} 次重试... (${r.message})`),await LS(n*(s+1));continue}break}throw i}function DS(t){var i,s;if(!t)return!1;const e=["ECONNRESET","ETIMEDOUT","ECONNREFUSED","ERR_NETWORK"],n=[502,503,504,429];return e.includes(t.code)||n.includes(t.status)||((i=t.message)==null?void 0:i.includes("timeout"))||((s=t.message)==null?void 0:s.includes("network"))}const Et=RS(Ut.create({baseURL:"http://localhost:22888",timeout:3e4})),mn={async getStats(){return(await bt(()=>Et.get("/dashboard/stats"))).data},async getGraph(t=7,e=1e3,n=!1){return(await bt(()=>Et.get("/dashboard/graph",{params:{days:t,max_nodes:e,memory_only:n}}))).data},async searchMemories(t,e=20){return(await bt(()=>Et.get("/dashboard/memory/search",{params:{query:t,limit:e}}))).data},async getMemoryDetail(t){return(await bt(()=>Et.get(`/dashboard/memory/${t}`))).data},async updateMemory(t,e){return(await bt(()=>Et.post("/dashboard/memory/update",{memory_id:t,content:e.content,user_id:e.user_id,title:e.title,keywords:e.keywords}))).data},async writeMemory(t){return(await bt(()=>Et.post("/memory/write",t))).data},async readMemory(t){return(await bt(()=>Et.post("/memory/read",t))).data},async deleteMemory(t,e){return(await bt(()=>Et.post("/memory/delete",{memory_id:t,user_id:e}))).data},async reflectMemory(t){return(await bt(()=>Et.post("/memory/reflect",null,{params:{user_id:t}}))).data},async rebuildGraph(){return(await bt(()=>Et.post("/dashboard/rebuild_graph"))).data},async getLogs(){return(await bt(()=>Et.get("/logs"))).data}},li={async getStats(){return(await bt(()=>Et.get("/tiered/stats"))).data},async getMergedMemories(){return(await bt(()=>Et.get("/tiered/merged"))).data},async getMergeChain(t){return(await bt(()=>Et.get(`/tiered/memory/${t}/merge-chain`))).data},async triggerDailyReflection(){return(await bt(()=>Et.post("/tiered/daily-reflection/trigger"))).data},async writeStorage(t){return(await bt(()=>Et.post("/tiered/storage/write",t))).data},async writeThinking(t){return(await bt(()=>Et.post("/tiered/thinking/write",t))).data},async writeSkill(t){return(await bt(()=>Et.post("/tiered/skill/write",t))).data},async queryMemories(t){return(await bt(()=>Et.get("/tiered/query",{params:t}))).data},async getMemory(t){return(await bt(()=>Et.get(`/tiered/memory/${t}`))).data},async getMemoryTrace(t){return(await bt(()=>Et.get(`/tiered/memory/${t}/trace`))).data},async submitFeedback(t,e){return(await bt(()=>Et.post(`/tiered/memory/${t}/feedback`,e))).data},async summarizeMemories(t){return(await bt(()=>Et.post("/tiered/summarize",{memory_ids:t}))).data}},Eh={async getStatus(){return(await bt(()=>Et.get("/dashboard/evolution/status"))).data},async setProfile(t){return(await bt(()=>Et.post("/dashboard/evolution/profile",null,{params:{profile:t}}))).data}},IS={async getStatus(){return(await bt(()=>Et.get("/dashboard/llm/status"))).data},async getInteractions(t=50){return(await bt(()=>Et.get("/dashboard/llm/interactions",{params:{limit:t}}))).data}},$i=Nf("memory",()=>{const t=we([]),e=we(null),n=we({nodes:[],links:[]}),i=we(null),s=we(null),r=we([]),o=we("all"),a=we("neural"),c=we("standard"),l=we(""),u=we([]),d=we(!1),f=we(null),h=St(()=>o.value==="all"?t.value:t.value.filter(M=>M.memory_type===o.value)),g=St(()=>({storage:t.value.filter(M=>M.memory_type==="storage").length,thinking:t.value.filter(M=>M.memory_type==="thinking").length,skill:t.value.filter(M=>M.memory_type==="skill").length,total:t.value.length}));async function _(){try{i.value=await mn.getStats()}catch(M){f.value="Failed to fetch stats",console.error(M)}}async function p(M=7,T=1e3){try{d.value=!0,n.value=await mn.getGraph(M,T)}catch(k){f.value="Failed to fetch graph",console.error(k)}finally{d.value=!1}}async function m(){try{s.value=await Eh.getStatus()}catch(M){f.value="Failed to fetch evolution status",console.error(M)}}async function x(M){try{d.value=!0,l.value=M;const T=await mn.searchMemories(M);u.value=T.items.map(k=>{var G;return{...k,content_type:"note",keywords:[],tags:[],char_count:((G=k.content)==null?void 0:G.length)||0,importance:.5}})}catch(T){f.value="Failed to search memories",console.error(T)}finally{d.value=!1}}async function w(M){try{await Eh.setProfile(M),c.value=M,await m()}catch(T){f.value="Failed to set evolution profile",console.error(T)}}function y(M){o.value=M}function A(M){a.value=M}function P(M,T="info"){const k={time:new Date().toLocaleTimeString(),message:M,type:T};r.value.push(k),r.value.length>50&&r.value.shift()}function L(){r.value=[]}async function S(M,T,k="default",G,ne){try{d.value=!0;const re=await mn.updateMemory(M,{content:T,user_id:k,title:G,keywords:ne});return P(`Memory updated: ${M}`,"success"),re}catch(re){throw f.value="Failed to update memory",P(`Failed to update memory: ${M}`,"error"),console.error(re),re}finally{d.value=!1}}async function E(M,T="default"){try{d.value=!0;const k=await mn.deleteMemory(M,T);return P(`Memory deleted: ${M}`,"success"),k}catch(k){throw f.value="Failed to delete memory",P(`Failed to delete memory: ${M}`,"error"),console.error(k),k}finally{d.value=!1}}async function U(M){try{d.value=!0;const T=await mn.writeMemory(M);return P(`Memory written: ${T.id}`,"success"),T}catch(T){throw f.value="Failed to write memory",P("Failed to write memory","error"),console.error(T),T}finally{d.value=!1}}async function D(M="default"){try{d.value=!0;const T=await mn.reflectMemory(M);return P("Memory reflection completed","success"),T}catch(T){throw f.value="Failed to reflect memory",P("Failed to reflect memory","error"),console.error(T),T}finally{d.value=!1}}async function F(){try{d.value=!0;const M=await mn.rebuildGraph();return P("Graph rebuilt successfully","success"),M}catch(M){throw f.value="Failed to rebuild graph",P("Failed to rebuild graph","error"),console.error(M),M}finally{d.value=!1}}async function V(M,T){try{d.value=!0;const k=await li.submitFeedback(M,T);return P(`Feedback submitted for: ${M}`,"success"),k}catch(k){throw f.value="Failed to submit feedback",P(`Failed to submit feedback for: ${M}`,"error"),console.error(k),k}finally{d.value=!1}}async function X(M){try{d.value=!0;const T=await li.summarizeMemories(M);return P(`Summarized ${M.length} memories`,"success"),T}catch(T){throw f.value="Failed to summarize memories",P("Failed to summarize memories","error"),console.error(T),T}finally{d.value=!1}}async function N(){try{const M=await mn.getLogs();M&&M.length>0&&(r.value=M.slice(0,50).map(T=>({time:T.time,message:T.message,type:["info","success","error","warn"].includes(T.type)?T.type:"info"})))}catch(M){console.error("Failed to fetch logs:",M)}}return{memories:t,currentMemory:e,graphData:n,stats:i,evolutionStatus:s,logs:r,currentMemoryType:o,currentViewMode:a,currentProfile:c,searchQuery:l,searchResults:u,isLoading:d,error:f,filteredMemories:h,memoryCountByType:g,fetchStats:_,fetchGraph:p,fetchEvolutionStatus:m,searchMemories:x,setEvolutionProfile:w,setMemoryType:y,setViewMode:A,addLog:P,clearLogs:L,updateMemory:S,deleteMemory:E,writeMemory:U,reflectMemory:D,rebuildGraph:F,submitFeedback:V,summarizeMemories:X,fetchLogs:N}});class wh extends Map{constructor(e,n=FS){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const[i,s]of e)this.set(i,s)}get(e){return super.get(Th(this,e))}has(e){return super.has(Th(this,e))}set(e,n){return super.set(NS(this,e),n)}delete(e){return super.delete(US(this,e))}}function Th({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):n}function NS({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):(t.set(i,n),n)}function US({_intern:t,_key:e},n){const i=e(n);return t.has(i)&&(n=t.get(i),t.delete(i)),n}function FS(t){return t!==null&&typeof t=="object"?t.valueOf():t}var OS={value:()=>{}};function kl(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Ua(n)}function Ua(t){this._=t}function BS(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",s=n.indexOf(".");if(s>=0&&(i=n.slice(s+1),n=n.slice(0,s)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Ua.prototype=kl.prototype={constructor:Ua,on:function(t,e){var n=this._,i=BS(t+"",n),s,r=-1,o=i.length;if(arguments.length<2){for(;++r<o;)if((s=(t=i[r]).type)&&(s=kS(n[s],t.name)))return s;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++r<o;)if(s=(t=i[r]).type)n[s]=Ah(n[s],t.name,e);else if(e==null)for(s in n)n[s]=Ah(n[s],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Ua(t)},call:function(t,e){if((s=arguments.length-2)>0)for(var n=new Array(s),i=0,s,r;i<s;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],i=0,s=r.length;i<s;++i)r[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],s=0,r=i.length;s<r;++s)i[s].value.apply(e,n)}};function kS(t,e){for(var n=0,i=t.length,s;n<i;++n)if((s=t[n]).name===e)return s.value}function Ah(t,e,n){for(var i=0,s=t.length;i<s;++i)if(t[i].name===e){t[i]=OS,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var pu="http://www.w3.org/1999/xhtml";const Rh={svg:"http://www.w3.org/2000/svg",xhtml:pu,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function zl(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),Rh.hasOwnProperty(e)?{space:Rh[e],local:t}:t}function zS(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===pu&&e.documentElement.namespaceURI===pu?e.createElement(t):e.createElementNS(n,t)}}function VS(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function kg(t){var e=zl(t);return(e.local?VS:zS)(e)}function HS(){}function zf(t){return t==null?HS:function(){return this.querySelector(t)}}function GS(t){typeof t!="function"&&(t=zf(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=new Array(o),c,l,u=0;u<o;++u)(c=r[u])&&(l=t.call(c,c.__data__,u,r))&&("__data__"in c&&(l.__data__=c.__data__),a[u]=l);return new Pn(i,this._parents)}function WS(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function $S(){return[]}function zg(t){return t==null?$S:function(){return this.querySelectorAll(t)}}function XS(t){return function(){return WS(t.apply(this,arguments))}}function qS(t){typeof t=="function"?t=XS(t):t=zg(t);for(var e=this._groups,n=e.length,i=[],s=[],r=0;r<n;++r)for(var o=e[r],a=o.length,c,l=0;l<a;++l)(c=o[l])&&(i.push(t.call(c,c.__data__,l,o)),s.push(c));return new Pn(i,s)}function Vg(t){return function(){return this.matches(t)}}function Hg(t){return function(e){return e.matches(t)}}var YS=Array.prototype.find;function jS(t){return function(){return YS.call(this.children,t)}}function KS(){return this.firstElementChild}function ZS(t){return this.select(t==null?KS:jS(typeof t=="function"?t:Hg(t)))}var JS=Array.prototype.filter;function QS(){return Array.from(this.children)}function eM(t){return function(){return JS.call(this.children,t)}}function tM(t){return this.selectAll(t==null?QS:eM(typeof t=="function"?t:Hg(t)))}function nM(t){typeof t!="function"&&(t=Vg(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=[],c,l=0;l<o;++l)(c=r[l])&&t.call(c,c.__data__,l,r)&&a.push(c);return new Pn(i,this._parents)}function Gg(t){return new Array(t.length)}function iM(){return new Pn(this._enter||this._groups.map(Gg),this._parents)}function il(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}il.prototype={constructor:il,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function sM(t){return function(){return t}}function rM(t,e,n,i,s,r){for(var o=0,a,c=e.length,l=r.length;o<l;++o)(a=e[o])?(a.__data__=r[o],i[o]=a):n[o]=new il(t,r[o]);for(;o<c;++o)(a=e[o])&&(s[o]=a)}function oM(t,e,n,i,s,r,o){var a,c,l=new Map,u=e.length,d=r.length,f=new Array(u),h;for(a=0;a<u;++a)(c=e[a])&&(f[a]=h=o.call(c,c.__data__,a,e)+"",l.has(h)?s[a]=c:l.set(h,c));for(a=0;a<d;++a)h=o.call(t,r[a],a,r)+"",(c=l.get(h))?(i[a]=c,c.__data__=r[a],l.delete(h)):n[a]=new il(t,r[a]);for(a=0;a<u;++a)(c=e[a])&&l.get(f[a])===c&&(s[a]=c)}function aM(t){return t.__data__}function lM(t,e){if(!arguments.length)return Array.from(this,aM);var n=e?oM:rM,i=this._parents,s=this._groups;typeof t!="function"&&(t=sM(t));for(var r=s.length,o=new Array(r),a=new Array(r),c=new Array(r),l=0;l<r;++l){var u=i[l],d=s[l],f=d.length,h=cM(t.call(u,u&&u.__data__,l,i)),g=h.length,_=a[l]=new Array(g),p=o[l]=new Array(g),m=c[l]=new Array(f);n(u,d,_,p,m,h,e);for(var x=0,w=0,y,A;x<g;++x)if(y=_[x]){for(x>=w&&(w=x+1);!(A=p[w])&&++w<g;);y._next=A||null}}return o=new Pn(o,i),o._enter=a,o._exit=c,o}function cM(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function uM(){return new Pn(this._exit||this._groups.map(Gg),this._parents)}function fM(t,e,n){var i=this.enter(),s=this,r=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(s=e(s),s&&(s=s.selection())),n==null?r.remove():n(r),i&&s?i.merge(s).order():s}function dM(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,s=n.length,r=i.length,o=Math.min(s,r),a=new Array(s),c=0;c<o;++c)for(var l=n[c],u=i[c],d=l.length,f=a[c]=new Array(d),h,g=0;g<d;++g)(h=l[g]||u[g])&&(f[g]=h);for(;c<s;++c)a[c]=n[c];return new Pn(a,this._parents)}function hM(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],s=i.length-1,r=i[s],o;--s>=0;)(o=i[s])&&(r&&o.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(o,r),r=o);return this}function pM(t){t||(t=mM);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,s=new Array(i),r=0;r<i;++r){for(var o=n[r],a=o.length,c=s[r]=new Array(a),l,u=0;u<a;++u)(l=o[u])&&(c[u]=l);c.sort(e)}return new Pn(s,this._parents).order()}function mM(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function gM(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function _M(){return Array.from(this)}function vM(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],s=0,r=i.length;s<r;++s){var o=i[s];if(o)return o}return null}function xM(){let t=0;for(const e of this)++t;return t}function yM(){return!this.node()}function SM(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var s=e[n],r=0,o=s.length,a;r<o;++r)(a=s[r])&&t.call(a,a.__data__,r,s);return this}function MM(t){return function(){this.removeAttribute(t)}}function bM(t){return function(){this.removeAttributeNS(t.space,t.local)}}function EM(t,e){return function(){this.setAttribute(t,e)}}function wM(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function TM(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function AM(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function RM(t,e){var n=zl(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?bM:MM:typeof e=="function"?n.local?AM:TM:n.local?wM:EM)(n,e))}function Wg(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function CM(t){return function(){this.style.removeProperty(t)}}function PM(t,e,n){return function(){this.style.setProperty(t,e,n)}}function LM(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function DM(t,e,n){return arguments.length>1?this.each((e==null?CM:typeof e=="function"?LM:PM)(t,e,n??"")):xr(this.node(),t)}function xr(t,e){return t.style.getPropertyValue(e)||Wg(t).getComputedStyle(t,null).getPropertyValue(e)}function IM(t){return function(){delete this[t]}}function NM(t,e){return function(){this[t]=e}}function UM(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function FM(t,e){return arguments.length>1?this.each((e==null?IM:typeof e=="function"?UM:NM)(t,e)):this.node()[t]}function $g(t){return t.trim().split(/^|\s+/)}function Vf(t){return t.classList||new Xg(t)}function Xg(t){this._node=t,this._names=$g(t.getAttribute("class")||"")}Xg.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function qg(t,e){for(var n=Vf(t),i=-1,s=e.length;++i<s;)n.add(e[i])}function Yg(t,e){for(var n=Vf(t),i=-1,s=e.length;++i<s;)n.remove(e[i])}function OM(t){return function(){qg(this,t)}}function BM(t){return function(){Yg(this,t)}}function kM(t,e){return function(){(e.apply(this,arguments)?qg:Yg)(this,t)}}function zM(t,e){var n=$g(t+"");if(arguments.length<2){for(var i=Vf(this.node()),s=-1,r=n.length;++s<r;)if(!i.contains(n[s]))return!1;return!0}return this.each((typeof e=="function"?kM:e?OM:BM)(n,e))}function VM(){this.textContent=""}function HM(t){return function(){this.textContent=t}}function GM(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function WM(t){return arguments.length?this.each(t==null?VM:(typeof t=="function"?GM:HM)(t)):this.node().textContent}function $M(){this.innerHTML=""}function XM(t){return function(){this.innerHTML=t}}function qM(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function YM(t){return arguments.length?this.each(t==null?$M:(typeof t=="function"?qM:XM)(t)):this.node().innerHTML}function jM(){this.nextSibling&&this.parentNode.appendChild(this)}function KM(){return this.each(jM)}function ZM(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function JM(){return this.each(ZM)}function QM(t){var e=typeof t=="function"?t:kg(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function eb(){return null}function tb(t,e){var n=typeof t=="function"?t:kg(t),i=e==null?eb:typeof e=="function"?e:zf(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function nb(){var t=this.parentNode;t&&t.removeChild(this)}function ib(){return this.each(nb)}function sb(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function rb(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function ob(t){return this.select(t?rb:sb)}function ab(t){return arguments.length?this.property("__data__",t):this.node().__data__}function lb(t){return function(e){t.call(this,e,this.__data__)}}function cb(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function ub(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,s=e.length,r;n<s;++n)r=e[n],(!t.type||r.type===t.type)&&r.name===t.name?this.removeEventListener(r.type,r.listener,r.options):e[++i]=r;++i?e.length=i:delete this.__on}}}function fb(t,e,n){return function(){var i=this.__on,s,r=lb(e);if(i){for(var o=0,a=i.length;o<a;++o)if((s=i[o]).type===t.type&&s.name===t.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=r,s.options=n),s.value=e;return}}this.addEventListener(t.type,r,n),s={type:t.type,name:t.name,value:e,listener:r,options:n},i?i.push(s):this.__on=[s]}}function db(t,e,n){var i=cb(t+""),s,r=i.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,l=a.length,u;c<l;++c)for(s=0,u=a[c];s<r;++s)if((o=i[s]).type===u.type&&o.name===u.name)return u.value}return}for(a=e?fb:ub,s=0;s<r;++s)this.each(a(i[s],e,n));return this}function jg(t,e,n){var i=Wg(t),s=i.CustomEvent;typeof s=="function"?s=new s(e,n):(s=i.document.createEvent("Event"),n?(s.initEvent(e,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(e,!1,!1)),t.dispatchEvent(s)}function hb(t,e){return function(){return jg(this,t,e)}}function pb(t,e){return function(){return jg(this,t,e.apply(this,arguments))}}function mb(t,e){return this.each((typeof e=="function"?pb:hb)(t,e))}function*gb(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],s=0,r=i.length,o;s<r;++s)(o=i[s])&&(yield o)}var Kg=[null];function Pn(t,e){this._groups=t,this._parents=e}function zo(){return new Pn([[document.documentElement]],Kg)}function _b(){return this}Pn.prototype=zo.prototype={constructor:Pn,select:GS,selectAll:qS,selectChild:ZS,selectChildren:tM,filter:nM,data:lM,enter:iM,exit:uM,join:fM,merge:dM,selection:_b,order:hM,sort:pM,call:gM,nodes:_M,node:vM,size:xM,empty:yM,each:SM,attr:RM,style:DM,property:FM,classed:zM,text:WM,html:YM,raise:KM,lower:JM,append:QM,insert:tb,remove:ib,clone:ob,datum:ab,on:db,dispatch:mb,[Symbol.iterator]:gb};function yr(t){return typeof t=="string"?new Pn([[document.querySelector(t)]],[document.documentElement]):new Pn([[t]],Kg)}function vb(t){let e;for(;e=t.sourceEvent;)t=e;return t}function Ch(t,e){if(t=vb(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var s=e.getBoundingClientRect();return[t.clientX-s.left-e.clientLeft,t.clientY-s.top-e.clientTop]}}return[t.pageX,t.pageY]}const xb={passive:!1},So={capture:!0,passive:!1};function dc(t){t.stopImmediatePropagation()}function dr(t){t.preventDefault(),t.stopImmediatePropagation()}function yb(t){var e=t.document.documentElement,n=yr(t).on("dragstart.drag",dr,So);"onselectstart"in e?n.on("selectstart.drag",dr,So):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function Sb(t,e){var n=t.document.documentElement,i=yr(t).on("dragstart.drag",null);e&&(i.on("click.drag",dr,So),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Zo=t=>()=>t;function mu(t,{sourceEvent:e,subject:n,target:i,identifier:s,active:r,x:o,y:a,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:s,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}mu.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function Mb(t){return!t.ctrlKey&&!t.button}function bb(){return this.parentNode}function Eb(t,e){return e??{x:t.x,y:t.y}}function wb(){return navigator.maxTouchPoints||"ontouchstart"in this}function Zg(){var t=Mb,e=bb,n=Eb,i=wb,s={},r=kl("start","drag","end"),o=0,a,c,l,u,d=0;function f(y){y.on("mousedown.drag",h).filter(i).on("touchstart.drag",p).on("touchmove.drag",m,xb).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(y,A){if(!(u||!t.call(this,y,A))){var P=w(this,e.call(this,y,A),y,A,"mouse");P&&(yr(y.view).on("mousemove.drag",g,So).on("mouseup.drag",_,So),yb(y.view),dc(y),l=!1,a=y.clientX,c=y.clientY,P("start",y))}}function g(y){if(dr(y),!l){var A=y.clientX-a,P=y.clientY-c;l=A*A+P*P>d}s.mouse("drag",y)}function _(y){yr(y.view).on("mousemove.drag mouseup.drag",null),Sb(y.view,l),dr(y),s.mouse("end",y)}function p(y,A){if(t.call(this,y,A)){var P=y.changedTouches,L=e.call(this,y,A),S=P.length,E,U;for(E=0;E<S;++E)(U=w(this,L,y,A,P[E].identifier,P[E]))&&(dc(y),U("start",y,P[E]))}}function m(y){var A=y.changedTouches,P=A.length,L,S;for(L=0;L<P;++L)(S=s[A[L].identifier])&&(dr(y),S("drag",y,A[L]))}function x(y){var A=y.changedTouches,P=A.length,L,S;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),L=0;L<P;++L)(S=s[A[L].identifier])&&(dc(y),S("end",y,A[L]))}function w(y,A,P,L,S,E){var U=r.copy(),D=Ch(E||P,A),F,V,X;if((X=n.call(y,new mu("beforestart",{sourceEvent:P,target:f,identifier:S,active:o,x:D[0],y:D[1],dx:0,dy:0,dispatch:U}),L))!=null)return F=X.x-D[0]||0,V=X.y-D[1]||0,function N(M,T,k){var G=D,ne;switch(M){case"start":s[S]=N,ne=o++;break;case"end":delete s[S],--o;case"drag":D=Ch(k||T,A),ne=o;break}U.call(M,y,new mu(M,{sourceEvent:T,subject:X,target:f,identifier:S,active:ne,x:D[0]+F,y:D[1]+V,dx:D[0]-G[0],dy:D[1]-G[1],dispatch:U}),L)}}return f.filter=function(y){return arguments.length?(t=typeof y=="function"?y:Zo(!!y),f):t},f.container=function(y){return arguments.length?(e=typeof y=="function"?y:Zo(y),f):e},f.subject=function(y){return arguments.length?(n=typeof y=="function"?y:Zo(y),f):n},f.touchable=function(y){return arguments.length?(i=typeof y=="function"?y:Zo(!!y),f):i},f.on=function(){var y=r.on.apply(r,arguments);return y===r?f:y},f.clickDistance=function(y){return arguments.length?(d=(y=+y)*y,f):Math.sqrt(d)},f}function Hf(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Jg(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function Vo(){}var Mo=.7,sl=1/Mo,hr="\\s*([+-]?\\d+)\\s*",bo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",pi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Tb=/^#([0-9a-f]{3,8})$/,Ab=new RegExp(`^rgb\\(${hr},${hr},${hr}\\)$`),Rb=new RegExp(`^rgb\\(${pi},${pi},${pi}\\)$`),Cb=new RegExp(`^rgba\\(${hr},${hr},${hr},${bo}\\)$`),Pb=new RegExp(`^rgba\\(${pi},${pi},${pi},${bo}\\)$`),Lb=new RegExp(`^hsl\\(${bo},${pi},${pi}\\)$`),Db=new RegExp(`^hsla\\(${bo},${pi},${pi},${bo}\\)$`),Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Hf(Vo,Eo,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Lh,formatHex:Lh,formatHex8:Ib,formatHsl:Nb,formatRgb:Dh,toString:Dh});function Lh(){return this.rgb().formatHex()}function Ib(){return this.rgb().formatHex8()}function Nb(){return Qg(this).formatHsl()}function Dh(){return this.rgb().formatRgb()}function Eo(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=Tb.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?Ih(e):n===3?new gn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Jo(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Jo(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=Ab.exec(t))?new gn(e[1],e[2],e[3],1):(e=Rb.exec(t))?new gn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=Cb.exec(t))?Jo(e[1],e[2],e[3],e[4]):(e=Pb.exec(t))?Jo(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Lb.exec(t))?Fh(e[1],e[2]/100,e[3]/100,1):(e=Db.exec(t))?Fh(e[1],e[2]/100,e[3]/100,e[4]):Ph.hasOwnProperty(t)?Ih(Ph[t]):t==="transparent"?new gn(NaN,NaN,NaN,0):null}function Ih(t){return new gn(t>>16&255,t>>8&255,t&255,1)}function Jo(t,e,n,i){return i<=0&&(t=e=n=NaN),new gn(t,e,n,i)}function Ub(t){return t instanceof Vo||(t=Eo(t)),t?(t=t.rgb(),new gn(t.r,t.g,t.b,t.opacity)):new gn}function gu(t,e,n,i){return arguments.length===1?Ub(t):new gn(t,e,n,i??1)}function gn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}Hf(gn,gu,Jg(Vo,{brighter(t){return t=t==null?sl:Math.pow(sl,t),new gn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Mo:Math.pow(Mo,t),new gn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new gn(Fs(this.r),Fs(this.g),Fs(this.b),rl(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Nh,formatHex:Nh,formatHex8:Fb,formatRgb:Uh,toString:Uh}));function Nh(){return`#${Ps(this.r)}${Ps(this.g)}${Ps(this.b)}`}function Fb(){return`#${Ps(this.r)}${Ps(this.g)}${Ps(this.b)}${Ps((isNaN(this.opacity)?1:this.opacity)*255)}`}function Uh(){const t=rl(this.opacity);return`${t===1?"rgb(":"rgba("}${Fs(this.r)}, ${Fs(this.g)}, ${Fs(this.b)}${t===1?")":`, ${t})`}`}function rl(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Fs(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Ps(t){return t=Fs(t),(t<16?"0":"")+t.toString(16)}function Fh(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Hn(t,e,n,i)}function Qg(t){if(t instanceof Hn)return new Hn(t.h,t.s,t.l,t.opacity);if(t instanceof Vo||(t=Eo(t)),!t)return new Hn;if(t instanceof Hn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,s=Math.min(e,n,i),r=Math.max(e,n,i),o=NaN,a=r-s,c=(r+s)/2;return a?(e===r?o=(n-i)/a+(n<i)*6:n===r?o=(i-e)/a+2:o=(e-n)/a+4,a/=c<.5?r+s:2-r-s,o*=60):a=c>0&&c<1?0:o,new Hn(o,a,c,t.opacity)}function Ob(t,e,n,i){return arguments.length===1?Qg(t):new Hn(t,e,n,i??1)}function Hn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}Hf(Hn,Ob,Jg(Vo,{brighter(t){return t=t==null?sl:Math.pow(sl,t),new Hn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Mo:Math.pow(Mo,t),new Hn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,s=2*n-i;return new gn(hc(t>=240?t-240:t+120,s,i),hc(t,s,i),hc(t<120?t+240:t-120,s,i),this.opacity)},clamp(){return new Hn(Oh(this.h),Qo(this.s),Qo(this.l),rl(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=rl(this.opacity);return`${t===1?"hsl(":"hsla("}${Oh(this.h)}, ${Qo(this.s)*100}%, ${Qo(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Oh(t){return t=(t||0)%360,t<0?t+360:t}function Qo(t){return Math.max(0,Math.min(1,t||0))}function hc(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const e_=t=>()=>t;function Bb(t,e){return function(n){return t+n*e}}function kb(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function zb(t){return(t=+t)==1?t_:function(e,n){return n-e?kb(e,n,t):e_(isNaN(e)?n:e)}}function t_(t,e){var n=e-t;return n?Bb(t,n):e_(isNaN(t)?e:t)}const Bh=function t(e){var n=zb(e);function i(s,r){var o=n((s=gu(s)).r,(r=gu(r)).r),a=n(s.g,r.g),c=n(s.b,r.b),l=t_(s.opacity,r.opacity);return function(u){return s.r=o(u),s.g=a(u),s.b=c(u),s.opacity=l(u),s+""}}return i.gamma=t,i}(1);function is(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var _u=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,pc=new RegExp(_u.source,"g");function Vb(t){return function(){return t}}function Hb(t){return function(e){return t(e)+""}}function Gb(t,e){var n=_u.lastIndex=pc.lastIndex=0,i,s,r,o=-1,a=[],c=[];for(t=t+"",e=e+"";(i=_u.exec(t))&&(s=pc.exec(e));)(r=s.index)>n&&(r=e.slice(n,r),a[o]?a[o]+=r:a[++o]=r),(i=i[0])===(s=s[0])?a[o]?a[o]+=s:a[++o]=s:(a[++o]=null,c.push({i:o,x:is(i,s)})),n=pc.lastIndex;return n<e.length&&(r=e.slice(n),a[o]?a[o]+=r:a[++o]=r),a.length<2?c[0]?Hb(c[0].x):Vb(e):(e=c.length,function(l){for(var u=0,d;u<e;++u)a[(d=c[u]).i]=d.x(l);return a.join("")})}var kh=180/Math.PI,vu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function n_(t,e,n,i,s,r){var o,a,c;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(c=t*n+e*i)&&(n-=t*c,i-=e*c),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,c/=a),t*i<e*n&&(t=-t,e=-e,c=-c,o=-o),{translateX:s,translateY:r,rotate:Math.atan2(e,t)*kh,skewX:Math.atan(c)*kh,scaleX:o,scaleY:a}}var ea;function Wb(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?vu:n_(e.a,e.b,e.c,e.d,e.e,e.f)}function $b(t){return t==null||(ea||(ea=document.createElementNS("http://www.w3.org/2000/svg","g")),ea.setAttribute("transform",t),!(t=ea.transform.baseVal.consolidate()))?vu:(t=t.matrix,n_(t.a,t.b,t.c,t.d,t.e,t.f))}function i_(t,e,n,i){function s(l){return l.length?l.pop()+" ":""}function r(l,u,d,f,h,g){if(l!==d||u!==f){var _=h.push("translate(",null,e,null,n);g.push({i:_-4,x:is(l,d)},{i:_-2,x:is(u,f)})}else(d||f)&&h.push("translate("+d+e+f+n)}function o(l,u,d,f){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),f.push({i:d.push(s(d)+"rotate(",null,i)-2,x:is(l,u)})):u&&d.push(s(d)+"rotate("+u+i)}function a(l,u,d,f){l!==u?f.push({i:d.push(s(d)+"skewX(",null,i)-2,x:is(l,u)}):u&&d.push(s(d)+"skewX("+u+i)}function c(l,u,d,f,h,g){if(l!==d||u!==f){var _=h.push(s(h)+"scale(",null,",",null,")");g.push({i:_-4,x:is(l,d)},{i:_-2,x:is(u,f)})}else(d!==1||f!==1)&&h.push(s(h)+"scale("+d+","+f+")")}return function(l,u){var d=[],f=[];return l=t(l),u=t(u),r(l.translateX,l.translateY,u.translateX,u.translateY,d,f),o(l.rotate,u.rotate,d,f),a(l.skewX,u.skewX,d,f),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,d,f),l=u=null,function(h){for(var g=-1,_=f.length,p;++g<_;)d[(p=f[g]).i]=p.x(h);return d.join("")}}}var Xb=i_(Wb,"px, ","px)","deg)"),qb=i_($b,", ",")",")"),Sr=0,jr=0,kr=0,s_=1e3,ol,Kr,al=0,ks=0,Vl=0,wo=typeof performance=="object"&&performance.now?performance:Date,r_=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Gf(){return ks||(r_(Yb),ks=wo.now()+Vl)}function Yb(){ks=0}function ll(){this._call=this._time=this._next=null}ll.prototype=Wf.prototype={constructor:ll,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?Gf():+n)+(e==null?0:+e),!this._next&&Kr!==this&&(Kr?Kr._next=this:ol=this,Kr=this),this._call=t,this._time=n,xu()},stop:function(){this._call&&(this._call=null,this._time=1/0,xu())}};function Wf(t,e,n){var i=new ll;return i.restart(t,e,n),i}function jb(){Gf(),++Sr;for(var t=ol,e;t;)(e=ks-t._time)>=0&&t._call.call(void 0,e),t=t._next;--Sr}function zh(){ks=(al=wo.now())+Vl,Sr=jr=0;try{jb()}finally{Sr=0,Zb(),ks=0}}function Kb(){var t=wo.now(),e=t-al;e>s_&&(Vl-=e,al=t)}function Zb(){for(var t,e=ol,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:ol=n);Kr=t,xu(i)}function xu(t){if(!Sr){jr&&(jr=clearTimeout(jr));var e=t-ks;e>24?(t<1/0&&(jr=setTimeout(zh,t-wo.now()-Vl)),kr&&(kr=clearInterval(kr))):(kr||(al=wo.now(),kr=setInterval(Kb,s_)),Sr=1,r_(zh))}}function Vh(t,e,n){var i=new ll;return e=e==null?0:+e,i.restart(s=>{i.stop(),t(s+e)},e,n),i}var Jb=kl("start","end","cancel","interrupt"),Qb=[],o_=0,Hh=1,yu=2,Fa=3,Gh=4,Su=5,Oa=6;function Hl(t,e,n,i,s,r){var o=t.__transition;if(!o)t.__transition={};else if(n in o)return;eE(t,n,{name:e,index:i,group:s,on:Jb,tween:Qb,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:o_})}function $f(t,e){var n=Kn(t,e);if(n.state>o_)throw new Error("too late; already scheduled");return n}function xi(t,e){var n=Kn(t,e);if(n.state>Fa)throw new Error("too late; already running");return n}function Kn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function eE(t,e,n){var i=t.__transition,s;i[e]=n,n.timer=Wf(r,0,n.time);function r(l){n.state=Hh,n.timer.restart(o,n.delay,n.time),n.delay<=l&&o(l-n.delay)}function o(l){var u,d,f,h;if(n.state!==Hh)return c();for(u in i)if(h=i[u],h.name===n.name){if(h.state===Fa)return Vh(o);h.state===Gh?(h.state=Oa,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[u]):+u<e&&(h.state=Oa,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[u])}if(Vh(function(){n.state===Fa&&(n.state=Gh,n.timer.restart(a,n.delay,n.time),a(l))}),n.state=yu,n.on.call("start",t,t.__data__,n.index,n.group),n.state===yu){for(n.state=Fa,s=new Array(f=n.tween.length),u=0,d=-1;u<f;++u)(h=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(s[++d]=h);s.length=d+1}}function a(l){for(var u=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(c),n.state=Su,1),d=-1,f=s.length;++d<f;)s[d].call(t,u);n.state===Su&&(n.on.call("end",t,t.__data__,n.index,n.group),c())}function c(){n.state=Oa,n.timer.stop(),delete i[e];for(var l in i)return;delete t.__transition}}function tE(t,e){var n=t.__transition,i,s,r=!0,o;if(n){e=e==null?null:e+"";for(o in n){if((i=n[o]).name!==e){r=!1;continue}s=i.state>yu&&i.state<Su,i.state=Oa,i.timer.stop(),i.on.call(s?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[o]}r&&delete t.__transition}}function nE(t){return this.each(function(){tE(this,t)})}function iE(t,e){var n,i;return function(){var s=xi(this,t),r=s.tween;if(r!==n){i=n=r;for(var o=0,a=i.length;o<a;++o)if(i[o].name===e){i=i.slice(),i.splice(o,1);break}}s.tween=i}}function sE(t,e,n){var i,s;if(typeof n!="function")throw new Error;return function(){var r=xi(this,t),o=r.tween;if(o!==i){s=(i=o).slice();for(var a={name:e,value:n},c=0,l=s.length;c<l;++c)if(s[c].name===e){s[c]=a;break}c===l&&s.push(a)}r.tween=s}}function rE(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=Kn(this.node(),n).tween,s=0,r=i.length,o;s<r;++s)if((o=i[s]).name===t)return o.value;return null}return this.each((e==null?iE:sE)(n,t,e))}function Xf(t,e,n){var i=t._id;return t.each(function(){var s=xi(this,i);(s.value||(s.value={}))[e]=n.apply(this,arguments)}),function(s){return Kn(s,i).value[e]}}function a_(t,e){var n;return(typeof e=="number"?is:e instanceof Eo?Bh:(n=Eo(e))?(e=n,Bh):Gb)(t,e)}function oE(t){return function(){this.removeAttribute(t)}}function aE(t){return function(){this.removeAttributeNS(t.space,t.local)}}function lE(t,e,n){var i,s=n+"",r;return function(){var o=this.getAttribute(t);return o===s?null:o===i?r:r=e(i=o,n)}}function cE(t,e,n){var i,s=n+"",r;return function(){var o=this.getAttributeNS(t.space,t.local);return o===s?null:o===i?r:r=e(i=o,n)}}function uE(t,e,n){var i,s,r;return function(){var o,a=n(this),c;return a==null?void this.removeAttribute(t):(o=this.getAttribute(t),c=a+"",o===c?null:o===i&&c===s?r:(s=c,r=e(i=o,a)))}}function fE(t,e,n){var i,s,r;return function(){var o,a=n(this),c;return a==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),c=a+"",o===c?null:o===i&&c===s?r:(s=c,r=e(i=o,a)))}}function dE(t,e){var n=zl(t),i=n==="transform"?qb:a_;return this.attrTween(t,typeof e=="function"?(n.local?fE:uE)(n,i,Xf(this,"attr."+t,e)):e==null?(n.local?aE:oE)(n):(n.local?cE:lE)(n,i,e))}function hE(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function pE(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function mE(t,e){var n,i;function s(){var r=e.apply(this,arguments);return r!==i&&(n=(i=r)&&pE(t,r)),n}return s._value=e,s}function gE(t,e){var n,i;function s(){var r=e.apply(this,arguments);return r!==i&&(n=(i=r)&&hE(t,r)),n}return s._value=e,s}function _E(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=zl(t);return this.tween(n,(i.local?mE:gE)(i,e))}function vE(t,e){return function(){$f(this,t).delay=+e.apply(this,arguments)}}function xE(t,e){return e=+e,function(){$f(this,t).delay=e}}function yE(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?vE:xE)(e,t)):Kn(this.node(),e).delay}function SE(t,e){return function(){xi(this,t).duration=+e.apply(this,arguments)}}function ME(t,e){return e=+e,function(){xi(this,t).duration=e}}function bE(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?SE:ME)(e,t)):Kn(this.node(),e).duration}function EE(t,e){if(typeof e!="function")throw new Error;return function(){xi(this,t).ease=e}}function wE(t){var e=this._id;return arguments.length?this.each(EE(e,t)):Kn(this.node(),e).ease}function TE(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;xi(this,t).ease=n}}function AE(t){if(typeof t!="function")throw new Error;return this.each(TE(this._id,t))}function RE(t){typeof t!="function"&&(t=Vg(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=[],c,l=0;l<o;++l)(c=r[l])&&t.call(c,c.__data__,l,r)&&a.push(c);return new zi(i,this._parents,this._name,this._id)}function CE(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,s=n.length,r=Math.min(i,s),o=new Array(i),a=0;a<r;++a)for(var c=e[a],l=n[a],u=c.length,d=o[a]=new Array(u),f,h=0;h<u;++h)(f=c[h]||l[h])&&(d[h]=f);for(;a<i;++a)o[a]=e[a];return new zi(o,this._parents,this._name,this._id)}function PE(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function LE(t,e,n){var i,s,r=PE(e)?$f:xi;return function(){var o=r(this,t),a=o.on;a!==i&&(s=(i=a).copy()).on(e,n),o.on=s}}function DE(t,e){var n=this._id;return arguments.length<2?Kn(this.node(),n).on.on(t):this.each(LE(n,t,e))}function IE(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function NE(){return this.on("end.remove",IE(this._id))}function UE(t){var e=this._name,n=this._id;typeof t!="function"&&(t=zf(t));for(var i=this._groups,s=i.length,r=new Array(s),o=0;o<s;++o)for(var a=i[o],c=a.length,l=r[o]=new Array(c),u,d,f=0;f<c;++f)(u=a[f])&&(d=t.call(u,u.__data__,f,a))&&("__data__"in u&&(d.__data__=u.__data__),l[f]=d,Hl(l[f],e,n,f,l,Kn(u,n)));return new zi(r,this._parents,e,n)}function FE(t){var e=this._name,n=this._id;typeof t!="function"&&(t=zg(t));for(var i=this._groups,s=i.length,r=[],o=[],a=0;a<s;++a)for(var c=i[a],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=t.call(u,u.__data__,d,c),h,g=Kn(u,n),_=0,p=f.length;_<p;++_)(h=f[_])&&Hl(h,e,n,_,f,g);r.push(f),o.push(u)}return new zi(r,o,e,n)}var OE=zo.prototype.constructor;function BE(){return new OE(this._groups,this._parents)}function kE(t,e){var n,i,s;return function(){var r=xr(this,t),o=(this.style.removeProperty(t),xr(this,t));return r===o?null:r===n&&o===i?s:s=e(n=r,i=o)}}function l_(t){return function(){this.style.removeProperty(t)}}function zE(t,e,n){var i,s=n+"",r;return function(){var o=xr(this,t);return o===s?null:o===i?r:r=e(i=o,n)}}function VE(t,e,n){var i,s,r;return function(){var o=xr(this,t),a=n(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(t),xr(this,t))),o===c?null:o===i&&c===s?r:(s=c,r=e(i=o,a))}}function HE(t,e){var n,i,s,r="style."+e,o="end."+r,a;return function(){var c=xi(this,t),l=c.on,u=c.value[r]==null?a||(a=l_(e)):void 0;(l!==n||s!==u)&&(i=(n=l).copy()).on(o,s=u),c.on=i}}function GE(t,e,n){var i=(t+="")=="transform"?Xb:a_;return e==null?this.styleTween(t,kE(t,i)).on("end.style."+t,l_(t)):typeof e=="function"?this.styleTween(t,VE(t,i,Xf(this,"style."+t,e))).each(HE(this._id,t)):this.styleTween(t,zE(t,i,e),n).on("end.style."+t,null)}function WE(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function $E(t,e,n){var i,s;function r(){var o=e.apply(this,arguments);return o!==s&&(i=(s=o)&&WE(t,o,n)),i}return r._value=e,r}function XE(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,$E(t,e,n??""))}function qE(t){return function(){this.textContent=t}}function YE(t){return function(){var e=t(this);this.textContent=e??""}}function jE(t){return this.tween("text",typeof t=="function"?YE(Xf(this,"text",t)):qE(t==null?"":t+""))}function KE(t){return function(e){this.textContent=t.call(this,e)}}function ZE(t){var e,n;function i(){var s=t.apply(this,arguments);return s!==n&&(e=(n=s)&&KE(s)),e}return i._value=t,i}function JE(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,ZE(t))}function QE(){for(var t=this._name,e=this._id,n=c_(),i=this._groups,s=i.length,r=0;r<s;++r)for(var o=i[r],a=o.length,c,l=0;l<a;++l)if(c=o[l]){var u=Kn(c,e);Hl(c,t,n,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new zi(i,this._parents,t,n)}function e1(){var t,e,n=this,i=n._id,s=n.size();return new Promise(function(r,o){var a={value:o},c={value:function(){--s===0&&r()}};n.each(function(){var l=xi(this,i),u=l.on;u!==t&&(e=(t=u).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(c)),l.on=e}),s===0&&r()})}var t1=0;function zi(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function c_(){return++t1}var Ei=zo.prototype;zi.prototype={constructor:zi,select:UE,selectAll:FE,selectChild:Ei.selectChild,selectChildren:Ei.selectChildren,filter:RE,merge:CE,selection:BE,transition:QE,call:Ei.call,nodes:Ei.nodes,node:Ei.node,size:Ei.size,empty:Ei.empty,each:Ei.each,on:DE,attr:dE,attrTween:_E,style:GE,styleTween:XE,text:jE,textTween:JE,remove:NE,tween:rE,delay:yE,duration:bE,ease:wE,easeVarying:AE,end:e1,[Symbol.iterator]:Ei[Symbol.iterator]};function n1(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var i1={time:null,delay:0,duration:250,ease:n1};function s1(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function r1(t){var e,n;t instanceof zi?(e=t._id,t=t._name):(e=c_(),(n=i1).time=Gf(),t=t==null?null:t+"");for(var i=this._groups,s=i.length,r=0;r<s;++r)for(var o=i[r],a=o.length,c,l=0;l<a;++l)(c=o[l])&&Hl(c,t,e,l,o,n||s1(c,e));return new zi(i,this._parents,t,e)}zo.prototype.interrupt=nE;zo.prototype.transition=r1;function u_(t,e){var n,i=1;t==null&&(t=0),e==null&&(e=0);function s(){var r,o=n.length,a,c=0,l=0;for(r=0;r<o;++r)a=n[r],c+=a.x,l+=a.y;for(c=(c/o-t)*i,l=(l/o-e)*i,r=0;r<o;++r)a=n[r],a.x-=c,a.y-=l}return s.initialize=function(r){n=r},s.x=function(r){return arguments.length?(t=+r,s):t},s.y=function(r){return arguments.length?(e=+r,s):e},s.strength=function(r){return arguments.length?(i=+r,s):i},s}function o1(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return f_(this.cover(e,n),e,n,t)}function f_(t,e,n,i){if(isNaN(e)||isNaN(n))return t;var s,r=t._root,o={data:i},a=t._x0,c=t._y0,l=t._x1,u=t._y1,d,f,h,g,_,p,m,x;if(!r)return t._root=o,t;for(;r.length;)if((_=e>=(d=(a+l)/2))?a=d:l=d,(p=n>=(f=(c+u)/2))?c=f:u=f,s=r,!(r=r[m=p<<1|_]))return s[m]=o,t;if(h=+t._x.call(null,r.data),g=+t._y.call(null,r.data),e===h&&n===g)return o.next=r,s?s[m]=o:t._root=o,t;do s=s?s[m]=new Array(4):t._root=new Array(4),(_=e>=(d=(a+l)/2))?a=d:l=d,(p=n>=(f=(c+u)/2))?c=f:u=f;while((m=p<<1|_)===(x=(g>=f)<<1|h>=d));return s[x]=r,s[m]=o,t}function a1(t){var e,n,i=t.length,s,r,o=new Array(i),a=new Array(i),c=1/0,l=1/0,u=-1/0,d=-1/0;for(n=0;n<i;++n)isNaN(s=+this._x.call(null,e=t[n]))||isNaN(r=+this._y.call(null,e))||(o[n]=s,a[n]=r,s<c&&(c=s),s>u&&(u=s),r<l&&(l=r),r>d&&(d=r));if(c>u||l>d)return this;for(this.cover(c,l).cover(u,d),n=0;n<i;++n)f_(this,o[n],a[n],t[n]);return this}function l1(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,i=this._y0,s=this._x1,r=this._y1;if(isNaN(n))s=(n=Math.floor(t))+1,r=(i=Math.floor(e))+1;else{for(var o=s-n||1,a=this._root,c,l;n>t||t>=s||i>e||e>=r;)switch(l=(e<i)<<1|t<n,c=new Array(4),c[l]=a,a=c,o*=2,l){case 0:s=n+o,r=i+o;break;case 1:n=s-o,r=i+o;break;case 2:s=n+o,i=r-o;break;case 3:n=s-o,i=r-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=n,this._y0=i,this._x1=s,this._y1=r,this}function c1(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function u1(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function cn(t,e,n,i,s){this.node=t,this.x0=e,this.y0=n,this.x1=i,this.y1=s}function f1(t,e,n){var i,s=this._x0,r=this._y0,o,a,c,l,u=this._x1,d=this._y1,f=[],h=this._root,g,_;for(h&&f.push(new cn(h,s,r,u,d)),n==null?n=1/0:(s=t-n,r=e-n,u=t+n,d=e+n,n*=n);g=f.pop();)if(!(!(h=g.node)||(o=g.x0)>u||(a=g.y0)>d||(c=g.x1)<s||(l=g.y1)<r))if(h.length){var p=(o+c)/2,m=(a+l)/2;f.push(new cn(h[3],p,m,c,l),new cn(h[2],o,m,p,l),new cn(h[1],p,a,c,m),new cn(h[0],o,a,p,m)),(_=(e>=m)<<1|t>=p)&&(g=f[f.length-1],f[f.length-1]=f[f.length-1-_],f[f.length-1-_]=g)}else{var x=t-+this._x.call(null,h.data),w=e-+this._y.call(null,h.data),y=x*x+w*w;if(y<n){var A=Math.sqrt(n=y);s=t-A,r=e-A,u=t+A,d=e+A,i=h.data}}return i}function d1(t){if(isNaN(u=+this._x.call(null,t))||isNaN(d=+this._y.call(null,t)))return this;var e,n=this._root,i,s,r,o=this._x0,a=this._y0,c=this._x1,l=this._y1,u,d,f,h,g,_,p,m;if(!n)return this;if(n.length)for(;;){if((g=u>=(f=(o+c)/2))?o=f:c=f,(_=d>=(h=(a+l)/2))?a=h:l=h,e=n,!(n=n[p=_<<1|g]))return this;if(!n.length)break;(e[p+1&3]||e[p+2&3]||e[p+3&3])&&(i=e,m=p)}for(;n.data!==t;)if(s=n,!(n=n.next))return this;return(r=n.next)&&delete n.next,s?(r?s.next=r:delete s.next,this):e?(r?e[p]=r:delete e[p],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(i?i[m]=n:this._root=n),this):(this._root=r,this)}function h1(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function p1(){return this._root}function m1(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function g1(t){var e=[],n,i=this._root,s,r,o,a,c;for(i&&e.push(new cn(i,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(i=n.node,r=n.x0,o=n.y0,a=n.x1,c=n.y1)&&i.length){var l=(r+a)/2,u=(o+c)/2;(s=i[3])&&e.push(new cn(s,l,u,a,c)),(s=i[2])&&e.push(new cn(s,r,u,l,c)),(s=i[1])&&e.push(new cn(s,l,o,a,u)),(s=i[0])&&e.push(new cn(s,r,o,l,u))}return this}function _1(t){var e=[],n=[],i;for(this._root&&e.push(new cn(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var s=i.node;if(s.length){var r,o=i.x0,a=i.y0,c=i.x1,l=i.y1,u=(o+c)/2,d=(a+l)/2;(r=s[0])&&e.push(new cn(r,o,a,u,d)),(r=s[1])&&e.push(new cn(r,u,a,c,d)),(r=s[2])&&e.push(new cn(r,o,d,u,l)),(r=s[3])&&e.push(new cn(r,u,d,c,l))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.y0,i.x1,i.y1);return this}function v1(t){return t[0]}function x1(t){return arguments.length?(this._x=t,this):this._x}function y1(t){return t[1]}function S1(t){return arguments.length?(this._y=t,this):this._y}function qf(t,e,n){var i=new Yf(e??v1,n??y1,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function Yf(t,e,n,i,s,r){this._x=t,this._y=e,this._x0=n,this._y0=i,this._x1=s,this._y1=r,this._root=void 0}function Wh(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var hn=qf.prototype=Yf.prototype;hn.copy=function(){var t=new Yf(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=Wh(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var s=0;s<4;++s)(i=e.source[s])&&(i.length?n.push({source:i,target:e.target[s]=new Array(4)}):e.target[s]=Wh(i));return t};hn.add=o1;hn.addAll=a1;hn.cover=l1;hn.data=c1;hn.extent=u1;hn.find=f1;hn.remove=d1;hn.removeAll=h1;hn.root=p1;hn.size=m1;hn.visit=g1;hn.visitAfter=_1;hn.x=x1;hn.y=S1;function Os(t){return function(){return t}}function rs(t){return(t()-.5)*1e-6}function M1(t){return t.x+t.vx}function b1(t){return t.y+t.vy}function d_(t){var e,n,i,s=1,r=1;typeof t!="function"&&(t=Os(t==null?1:+t));function o(){for(var l,u=e.length,d,f,h,g,_,p,m=0;m<r;++m)for(d=qf(e,M1,b1).visitAfter(a),l=0;l<u;++l)f=e[l],_=n[f.index],p=_*_,h=f.x+f.vx,g=f.y+f.vy,d.visit(x);function x(w,y,A,P,L){var S=w.data,E=w.r,U=_+E;if(S){if(S.index>f.index){var D=h-S.x-S.vx,F=g-S.y-S.vy,V=D*D+F*F;V<U*U&&(D===0&&(D=rs(i),V+=D*D),F===0&&(F=rs(i),V+=F*F),V=(U-(V=Math.sqrt(V)))/V*s,f.vx+=(D*=V)*(U=(E*=E)/(p+E)),f.vy+=(F*=V)*U,S.vx-=D*(U=1-U),S.vy-=F*U)}return}return y>h+U||P<h-U||A>g+U||L<g-U}}function a(l){if(l.data)return l.r=n[l.data.index];for(var u=l.r=0;u<4;++u)l[u]&&l[u].r>l.r&&(l.r=l[u].r)}function c(){if(e){var l,u=e.length,d;for(n=new Array(u),l=0;l<u;++l)d=e[l],n[d.index]=+t(d,l,e)}}return o.initialize=function(l,u){e=l,i=u,c()},o.iterations=function(l){return arguments.length?(r=+l,o):r},o.strength=function(l){return arguments.length?(s=+l,o):s},o.radius=function(l){return arguments.length?(t=typeof l=="function"?l:Os(+l),c(),o):t},o}function E1(t){return t.index}function $h(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}function h_(t){var e=E1,n=d,i,s=Os(30),r,o,a,c,l,u=1;t==null&&(t=[]);function d(p){return 1/Math.min(a[p.source.index],a[p.target.index])}function f(p){for(var m=0,x=t.length;m<u;++m)for(var w=0,y,A,P,L,S,E,U;w<x;++w)y=t[w],A=y.source,P=y.target,L=P.x+P.vx-A.x-A.vx||rs(l),S=P.y+P.vy-A.y-A.vy||rs(l),E=Math.sqrt(L*L+S*S),E=(E-r[w])/E*p*i[w],L*=E,S*=E,P.vx-=L*(U=c[w]),P.vy-=S*U,A.vx+=L*(U=1-U),A.vy+=S*U}function h(){if(o){var p,m=o.length,x=t.length,w=new Map(o.map((A,P)=>[e(A,P,o),A])),y;for(p=0,a=new Array(m);p<x;++p)y=t[p],y.index=p,typeof y.source!="object"&&(y.source=$h(w,y.source)),typeof y.target!="object"&&(y.target=$h(w,y.target)),a[y.source.index]=(a[y.source.index]||0)+1,a[y.target.index]=(a[y.target.index]||0)+1;for(p=0,c=new Array(x);p<x;++p)y=t[p],c[p]=a[y.source.index]/(a[y.source.index]+a[y.target.index]);i=new Array(x),g(),r=new Array(x),_()}}function g(){if(o)for(var p=0,m=t.length;p<m;++p)i[p]=+n(t[p],p,t)}function _(){if(o)for(var p=0,m=t.length;p<m;++p)r[p]=+s(t[p],p,t)}return f.initialize=function(p,m){o=p,l=m,h()},f.links=function(p){return arguments.length?(t=p,h(),f):t},f.id=function(p){return arguments.length?(e=p,f):e},f.iterations=function(p){return arguments.length?(u=+p,f):u},f.strength=function(p){return arguments.length?(n=typeof p=="function"?p:Os(+p),g(),f):n},f.distance=function(p){return arguments.length?(s=typeof p=="function"?p:Os(+p),_(),f):s},f}const w1=1664525,T1=1013904223,Xh=4294967296;function A1(){let t=1;return()=>(t=(w1*t+T1)%Xh)/Xh}function R1(t){return t.x}function C1(t){return t.y}var P1=10,L1=Math.PI*(3-Math.sqrt(5));function p_(t){var e,n=1,i=.001,s=1-Math.pow(i,1/300),r=0,o=.6,a=new Map,c=Wf(d),l=kl("tick","end"),u=A1();t==null&&(t=[]);function d(){f(),l.call("tick",e),n<i&&(c.stop(),l.call("end",e))}function f(_){var p,m=t.length,x;_===void 0&&(_=1);for(var w=0;w<_;++w)for(n+=(r-n)*s,a.forEach(function(y){y(n)}),p=0;p<m;++p)x=t[p],x.fx==null?x.x+=x.vx*=o:(x.x=x.fx,x.vx=0),x.fy==null?x.y+=x.vy*=o:(x.y=x.fy,x.vy=0);return e}function h(){for(var _=0,p=t.length,m;_<p;++_){if(m=t[_],m.index=_,m.fx!=null&&(m.x=m.fx),m.fy!=null&&(m.y=m.fy),isNaN(m.x)||isNaN(m.y)){var x=P1*Math.sqrt(.5+_),w=_*L1;m.x=x*Math.cos(w),m.y=x*Math.sin(w)}(isNaN(m.vx)||isNaN(m.vy))&&(m.vx=m.vy=0)}}function g(_){return _.initialize&&_.initialize(t,u),_}return h(),e={tick:f,restart:function(){return c.restart(d),e},stop:function(){return c.stop(),e},nodes:function(_){return arguments.length?(t=_,h(),a.forEach(g),e):t},alpha:function(_){return arguments.length?(n=+_,e):n},alphaMin:function(_){return arguments.length?(i=+_,e):i},alphaDecay:function(_){return arguments.length?(s=+_,e):+s},alphaTarget:function(_){return arguments.length?(r=+_,e):r},velocityDecay:function(_){return arguments.length?(o=1-_,e):1-o},randomSource:function(_){return arguments.length?(u=_,a.forEach(g),e):u},force:function(_,p){return arguments.length>1?(p==null?a.delete(_):a.set(_,g(p)),e):a.get(_)},find:function(_,p,m){var x=0,w=t.length,y,A,P,L,S;for(m==null?m=1/0:m*=m,x=0;x<w;++x)L=t[x],y=_-L.x,A=p-L.y,P=y*y+A*A,P<m&&(S=L,m=P);return S},on:function(_,p){return arguments.length>1?(l.on(_,p),e):l.on(_)}}}function m_(){var t,e,n,i,s=Os(-30),r,o=1,a=1/0,c=.81;function l(h){var g,_=t.length,p=qf(t,R1,C1).visitAfter(d);for(i=h,g=0;g<_;++g)e=t[g],p.visit(f)}function u(){if(t){var h,g=t.length,_;for(r=new Array(g),h=0;h<g;++h)_=t[h],r[_.index]=+s(_,h,t)}}function d(h){var g=0,_,p,m=0,x,w,y;if(h.length){for(x=w=y=0;y<4;++y)(_=h[y])&&(p=Math.abs(_.value))&&(g+=_.value,m+=p,x+=p*_.x,w+=p*_.y);h.x=x/m,h.y=w/m}else{_=h,_.x=_.data.x,_.y=_.data.y;do g+=r[_.data.index];while(_=_.next)}h.value=g}function f(h,g,_,p){if(!h.value)return!0;var m=h.x-e.x,x=h.y-e.y,w=p-g,y=m*m+x*x;if(w*w/c<y)return y<a&&(m===0&&(m=rs(n),y+=m*m),x===0&&(x=rs(n),y+=x*x),y<o&&(y=Math.sqrt(o*y)),e.vx+=m*h.value*i/y,e.vy+=x*h.value*i/y),!0;if(h.length||y>=a)return;(h.data!==e||h.next)&&(m===0&&(m=rs(n),y+=m*m),x===0&&(x=rs(n),y+=x*x),y<o&&(y=Math.sqrt(o*y)));do h.data!==e&&(w=r[h.data.index]*i/y,e.vx+=m*w,e.vy+=x*w);while(h=h.next)}return l.initialize=function(h,g){t=h,n=g,u()},l.strength=function(h){return arguments.length?(s=typeof h=="function"?h:Os(+h),u(),l):s},l.distanceMin=function(h){return arguments.length?(o=h*h,l):Math.sqrt(o)},l.distanceMax=function(h){return arguments.length?(a=h*h,l):Math.sqrt(a)},l.theta=function(h){return arguments.length?(c=h*h,l):Math.sqrt(c)},l}function D1(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}const qh=Symbol("implicit");function g_(){var t=new wh,e=[],n=[],i=qh;function s(r){let o=t.get(r);if(o===void 0){if(i!==qh)return i;t.set(r,o=e.push(r)-1)}return n[o%n.length]}return s.domain=function(r){if(!arguments.length)return e.slice();e=[],t=new wh;for(const o of r)t.has(o)||t.set(o,e.push(o)-1);return s},s.range=function(r){return arguments.length?(n=Array.from(r),s):n.slice()},s.unknown=function(r){return arguments.length?(i=r,s):i},s.copy=function(){return g_(e,n).unknown(i)},D1.apply(s,arguments),s}function Zr(t,e,n){this.k=t,this.x=e,this.y=n}Zr.prototype={constructor:Zr,scale:function(t){return t===1?this:new Zr(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Zr(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Zr.prototype;const I1={class:"memory-graph"},N1={key:0,class:"loading-overlay"},U1={key:1,class:"empty-placeholder"},F1=yn({__name:"MemoryGraph",props:{graphData:{},isLoading:{type:Boolean}},emits:["nodeClick"],setup(t,{emit:e}){const n=t,i=e,s=we();let r=null,o=null;const a=g_().domain(["storage","thinking","skill","entity","category"]).range(["#00ff41","#ff00ff","#00ffff","#ffff00","#ff6b6b"]);Yn(()=>{s.value&&c()}),hi(()=>n.graphData,h=>{h.nodes.length>0&&l(h)},{deep:!0}),Ar(()=>{r&&r.stop()});function c(){if(!s.value)return;const h=s.value.clientWidth,g=s.value.clientHeight;o=yr(s.value).append("svg").attr("width",h).attr("height",g),o.append("defs").append("marker").attr("id","arrowhead").attr("viewBox","-0 -5 10 10").attr("refX",20).attr("refY",0).attr("orient","auto").attr("markerWidth",6).attr("markerHeight",6).append("path").attr("d","M 0,-5 L 10,0 L 0,5").attr("fill","#00ff41")}function l(h){if(!o||!s.value)return;const g=s.value.clientWidth,_=s.value.clientHeight;o.selectAll("*").remove(),r=p_(h.nodes).force("link",h_(h.links).id(x=>x.id).distance(100)).force("charge",m_().strength(-300)).force("center",u_(g/2,_/2)).force("collision",d_().radius(30));const p=o.append("g").selectAll("line").data(h.links).enter().append("line").attr("stroke","#00ff41").attr("stroke-opacity",.6).attr("stroke-width",1.5),m=o.append("g").selectAll("circle").data(h.nodes).enter().append("circle").attr("r",8).attr("fill",x=>a(x.type)||"#00ff41").attr("stroke","#fff").attr("stroke-width",2).style("cursor","pointer").call(Zg().on("start",u).on("drag",d).on("end",f)).on("click",(x,w)=>{i("nodeClick",w)});m.append("title").text(x=>x.label||x.id),r.on("tick",()=>{p.attr("x1",x=>x.source.x).attr("y1",x=>x.source.y).attr("x2",x=>x.target.x).attr("y2",x=>x.target.y),m.attr("cx",x=>x.x).attr("cy",x=>x.y)})}function u(h){!h.active&&r&&r.alphaTarget(.3).restart(),h.subject.fx=h.subject.x(h.subject).fy=h.subject.y}function d(h){h.subject.fx=h.x,h.subject.fy=h.y}function f(h){!h.active&&r&&r.alphaTarget(0),h.subject.fx=null,h.subject.fy=null}return(h,g)=>(ue(),fe("div",I1,[v("div",{ref_key:"containerRef",ref:s,class:"graph-container"},null,512),t.isLoading?(ue(),fe("div",N1,[...g[0]||(g[0]=[v("div",{class:"loading-spinner"},null,-1),v("p",null,"加载图谱中...",-1)])])):nt("",!0),!t.isLoading&&t.graphData.nodes.length===0?(ue(),fe("div",U1,[...g[1]||(g[1]=[v("h2",null,"暂无认知数据",-1),v("p",null,"当前记忆库尚未经过认知分析，图谱暂时无法显示。",-1)])])):nt("",!0)]))}}),Sn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},O1=Sn(F1,[["__scopeId","data-v-b5be093d"]]),B1={class:"memory-list-panel panel"},k1={class:"tiered-stats"},z1={class:"stat-item"},V1={class:"stat-value"},H1={class:"stat-item"},G1={class:"stat-value"},W1={class:"stat-item"},$1={class:"stat-value"},X1={class:"stat-item"},q1={class:"stat-value"},Y1={class:"memory-type-tabs"},j1=["onClick"],K1={class:"memory-search-box"},Z1={key:0,class:"memory-list"},J1={key:0,class:"memory-item-placeholder"},Q1=["onClick"],ew={class:"memory-header"},tw={class:"memory-time"},nw={class:"memory-title"},iw={class:"memory-content-preview"},sw={key:0,class:"memory-keywords"},rw={key:1,class:"memory-item-placeholder"},ow={key:2,class:"pagination"},aw=["disabled"],lw={class:"page-info"},cw=["disabled"],uw={class:"detail-body"},fw={class:"detail-row"},dw={class:"detail-value"},hw={class:"detail-row"},pw={class:"detail-value"},mw={class:"detail-row"},gw={class:"detail-value"},_w={key:0,class:"detail-row"},vw={class:"detail-value"},xw={class:"detail-row"},yw={class:"detail-value"},Sw={class:"detail-content"},Mw={class:"detail-body"},bw={class:"edit-row"},Ew={class:"edit-row"},ww={class:"edit-row"},ta=50,Tw=yn({__name:"MemoryList",emits:["memorySelect"],setup(t,{emit:e}){const n=e,i=$i(),{memories:s,memoryCountByType:r,isLoading:o}=Rr(i),a=St(()=>i.currentMemoryType),c=we(""),l=we(1),u=we(null),d=we(null),f=we(!1),h=we(!1),g=we(null),_=we(""),p=[{label:"全部",value:"all"},{label:"技能",value:"skill"},{label:"思维",value:"thinking"},{label:"存储",value:"storage"}],m=St(()=>r.value),x=St(()=>{let M=s.value;if(a.value!=="all"&&(M=M.filter(T=>T.memory_type===a.value)),c.value.trim()){const T=c.value.toLowerCase();M=M.filter(k=>{var G,ne,re;return((G=k.content)==null?void 0:G.toLowerCase().includes(T))||((ne=k.title)==null?void 0:ne.toLowerCase().includes(T))||((re=k.keywords)==null?void 0:re.some(pe=>pe.toLowerCase().includes(T)))})}return M}),w=St(()=>{const M=(l.value-1)*ta,T=M+ta;return x.value.slice(M,T)}),y=St(()=>Math.ceil(x.value.length/ta));hi([()=>a.value,c],()=>{l.value=1}),Yn(()=>{A()});async function A(){try{const M=await mn.searchMemories("",1e3);s.value=M.items.map(T=>({id:T.memory_id||T.id,content:T.content,title:T.title,memory_type:T.memory_type||"storage",keywords:T.keywords||[],tags:T.tags||[],timestamp:T.timestamp,scope:T.scope,user_id:T.user_id,importance:T.importance||.5}))}catch(M){console.error("加载记忆失败:",M)}}function P(M){i.setMemoryType(M)}function L(M){u.value=M.id,d.value=M,f.value=!0,n("memorySelect",M)}function S(){f.value=!1,d.value=null,u.value=null}function E(){var M;d.value&&(g.value={...d.value},_.value=((M=d.value.keywords)==null?void 0:M.join(", "))||"",h.value=!0,f.value=!1)}function U(){h.value=!1,g.value=null,_.value=""}async function D(){if(g.value)try{const M={...g.value,keywords:_.value.split(",").map(k=>k.trim()).filter(k=>k)};await mn.updateMemory(M.id,{content:M.content,user_id:M.user_id||"default",title:M.title,keywords:M.keywords});const T=s.value.findIndex(k=>k.id===M.id);T!==-1&&(s.value[T]=M),h.value=!1,g.value=null,await A()}catch(M){console.error("保存记忆失败:",M),alert("保存失败: "+M.message)}}async function F(){if(d.value&&confirm(`确定要删除记忆 "${d.value.title||d.value.id}" 吗？`))try{await mn.deleteMemory(d.value.id,d.value.user_id||"default"),s.value=s.value.filter(M=>{var T;return M.id!==((T=d.value)==null?void 0:T.id)}),S(),await A()}catch(M){console.error("删除记忆失败:",M),alert("删除失败: "+M.message)}}function V(){l.value=1}function X(M){return{storage:"存储",thinking:"思维",skill:"技能"}[M||""]||M||"未知"}function N(M){if(!M)return"";const T=new Date(M),G=new Date().getTime()-T.getTime(),ne=Math.floor(G/6e4),re=Math.floor(G/36e5),pe=Math.floor(G/864e5);return ne<1?"刚刚":ne<60?`${ne}分钟前`:re<24?`${re}小时前`:pe<30?`${pe}天前`:T.toLocaleDateString()}return(M,T)=>{var k;return ue(),fe("div",B1,[T[24]||(T[24]=v("h1",null,"记忆列表",-1)),v("div",k1,[v("div",z1,[T[8]||(T[8]=v("span",{class:"stat-label"},"技能",-1)),v("span",V1,te(m.value.skill),1)]),v("div",H1,[T[9]||(T[9]=v("span",{class:"stat-label"},"思维",-1)),v("span",G1,te(m.value.thinking),1)]),v("div",W1,[T[10]||(T[10]=v("span",{class:"stat-label"},"存储",-1)),v("span",$1,te(m.value.storage),1)]),v("div",X1,[T[11]||(T[11]=v("span",{class:"stat-label"},"总计",-1)),v("span",q1,te(m.value.total),1)])]),v("div",Y1,[(ue(),fe(mt,null,Bt(p,G=>v("button",{key:G.value,class:pt(["memory-tab",{active:a.value===G.value}]),onClick:ne=>P(G.value)},te(G.label),11,j1)),64))]),v("div",K1,[It(v("input",{"onUpdate:modelValue":T[0]||(T[0]=G=>c.value=G),type:"text",placeholder:"搜索记忆...",onKeyup:If(V,["enter"])},null,544),[[en,c.value]]),v("button",{onClick:V},"🔍")]),be(o)?(ue(),fe("div",rw,[...T[12]||(T[12]=[v("div",{class:"loading-spinner"},null,-1),_r(" 加载中... ",-1)])])):(ue(),fe("div",Z1,[w.value.length===0?(ue(),fe("div",J1," 暂无记忆 ")):(ue(!0),fe(mt,{key:1},Bt(w.value,G=>{var ne,re,pe;return ue(),fe("div",{key:G.id,class:pt(["memory-item",[G.memory_type,{selected:u.value===G.id}]]),onClick:Ne=>L(G)},[v("div",ew,[v("span",{class:pt(["memory-type-badge",G.memory_type])},te(X(G.memory_type)),3),v("span",tw,te(N(G.timestamp)),1)]),v("div",nw,te(G.title||((ne=G.content)==null?void 0:ne.slice(0,50))+"..."),1),v("div",iw,te((re=G.content)==null?void 0:re.slice(0,80))+"...",1),(pe=G.keywords)!=null&&pe.length?(ue(),fe("div",sw,[(ue(!0),fe(mt,null,Bt(G.keywords.slice(0,3),Ne=>(ue(),fe("span",{key:Ne,class:"keyword-tag"},te(Ne),1))),128))])):nt("",!0)],10,Q1)}),128))])),y.value>1?(ue(),fe("div",ow,[v("button",{class:"page-btn",disabled:l.value===1,onClick:T[1]||(T[1]=G=>l.value--)}," ← ",8,aw),v("span",lw,te(l.value)+" / "+te(y.value),1),v("button",{class:"page-btn",disabled:l.value===y.value,onClick:T[2]||(T[2]=G=>l.value++)}," → ",8,cw),v("span",{class:"page-size"},"每页 "+te(ta)+" 条")])):nt("",!0),f.value&&d.value?(ue(),fe("div",{key:3,class:"memory-detail-modal",onClick:S},[v("div",{class:"memory-detail-content",onClick:T[3]||(T[3]=tl(()=>{},["stop"]))},[v("div",{class:"detail-header"},[T[13]||(T[13]=v("h3",null,"记忆详情",-1)),v("button",{class:"close-btn",onClick:S},"×")]),v("div",uw,[v("div",fw,[T[14]||(T[14]=v("span",{class:"detail-label"},"ID:",-1)),v("span",dw,te(d.value.id),1)]),v("div",hw,[T[15]||(T[15]=v("span",{class:"detail-label"},"类型:",-1)),v("span",pw,[v("span",{class:pt(["memory-type-badge",d.value.memory_type])},te(X(d.value.memory_type)),3)])]),v("div",mw,[T[16]||(T[16]=v("span",{class:"detail-label"},"标题:",-1)),v("span",gw,te(d.value.title||"无标题"),1)]),(k=d.value.keywords)!=null&&k.length?(ue(),fe("div",_w,[T[17]||(T[17]=v("span",{class:"detail-label"},"关键词:",-1)),v("span",vw,[(ue(!0),fe(mt,null,Bt(d.value.keywords,G=>(ue(),fe("span",{key:G,class:"keyword-tag"},te(G),1))),128))])])):nt("",!0),v("div",xw,[T[18]||(T[18]=v("span",{class:"detail-label"},"时间:",-1)),v("span",yw,te(d.value.timestamp),1)]),T[19]||(T[19]=v("div",{class:"detail-row"},[v("span",{class:"detail-label"},"内容:")],-1)),v("div",Sw,te(d.value.content),1)]),v("div",{class:"detail-actions"},[v("button",{class:"action-btn edit",onClick:E},"✏️ 编辑"),v("button",{class:"action-btn delete",onClick:F},"🗑️ 删除")])])])):nt("",!0),h.value&&g.value?(ue(),fe("div",{key:4,class:"memory-detail-modal",onClick:U},[v("div",{class:"memory-detail-content edit-mode",onClick:T[7]||(T[7]=tl(()=>{},["stop"]))},[v("div",{class:"detail-header"},[T[20]||(T[20]=v("h3",null,"编辑记忆",-1)),v("button",{class:"close-btn",onClick:U},"×")]),v("div",Mw,[v("div",bw,[T[21]||(T[21]=v("label",null,"标题:",-1)),It(v("input",{"onUpdate:modelValue":T[4]||(T[4]=G=>g.value.title=G),type:"text",placeholder:"记忆标题"},null,512),[[en,g.value.title]])]),v("div",Ew,[T[22]||(T[22]=v("label",null,"关键词 (逗号分隔):",-1)),It(v("input",{"onUpdate:modelValue":T[5]||(T[5]=G=>_.value=G),type:"text",placeholder:"关键词1, 关键词2"},null,512),[[en,_.value]])]),v("div",ww,[T[23]||(T[23]=v("label",null,"内容:",-1)),It(v("textarea",{"onUpdate:modelValue":T[6]||(T[6]=G=>g.value.content=G),rows:"8",placeholder:"记忆内容..."},null,512),[[en,g.value.content]])])]),v("div",{class:"detail-actions"},[v("button",{class:"action-btn save",onClick:D},"💾 保存"),v("button",{class:"action-btn cancel",onClick:U},"❌ 取消")])])])):nt("",!0)])}}}),Aw=Sn(Tw,[["__scopeId","data-v-5725e82f"]]),Rw={class:"log-panel panel"},Cw={class:"log-time"},Pw={class:"log-message"},Lw={key:0,class:"log-placeholder"},Dw=yn({__name:"LogPanel",setup(t){const e=$i(),{logs:n}=Rr(e),i=we();let s=null;Yn(()=>{e.fetchLogs(),s=window.setInterval(()=>{e.fetchLogs()},3e3)}),Ar(()=>{s&&clearInterval(s)}),hi(n,()=>{Io(()=>{i.value&&(i.value.scrollTop=i.value.scrollHeight)})},{deep:!0});function r(){e.clearLogs()}return(o,a)=>(ue(),fe("div",Rw,[v("div",{class:"log-header"},[a[0]||(a[0]=v("h3",null,"系统日志",-1)),v("button",{class:"clear-btn",onClick:r},"清空")]),v("div",{class:"log-content",ref_key:"logContentRef",ref:i},[(ue(!0),fe(mt,null,Bt(be(n),(c,l)=>(ue(),fe("div",{key:l,class:pt(["log-entry",c.type])},[v("span",Cw,"["+te(c.time)+"]",1),v("span",Pw,te(c.message),1)],2))),128)),be(n).length===0?(ue(),fe("div",Lw," 暂无日志 ")):nt("",!0)],512)]))}}),Iw=Sn(Dw,[["__scopeId","data-v-7e5fe813"]]),Nw={class:"stats-panel-compact"},Uw={key:0,class:"stats-row"},Fw={class:"stat-item"},Ow={class:"stat-value"},Bw={class:"stat-item"},kw={class:"stat-value"},zw={class:"stat-item"},Vw={class:"stat-value"},Hw={class:"stat-item"},Gw={class:"stat-value"},Ww={class:"stat-item"},$w={class:"stat-item"},Xw={class:"stat-value provider"},qw=["title"],Yw={class:"stat-value data-path"},jw={key:1,class:"stats-loading"},Kw=yn({__name:"StatsPanel",setup(t){const e=$i(),{stats:n,evolutionStatus:i}=Rr(e),s=r=>{if(!r)return"未知";if(r.startsWith("/Users/")){const o=r.split("/"),a=o.indexOf("Users")+2;if(a>1&&a<o.length)return"~/"+o.slice(a).join("/")}return r.length>20?"..."+r.slice(-17):r};return(r,o)=>{var a,c,l,u,d;return ue(),fe("div",Nw,[be(n)?(ue(),fe("div",Uw,[v("div",Fw,[v("span",Ow,te(be(n).memory_count||0),1),o[0]||(o[0]=v("span",{class:"stat-label"},"记忆",-1))]),o[7]||(o[7]=v("div",{class:"stat-divider"},null,-1)),v("div",Bw,[v("span",kw,te(((a=be(n).tiered_breakdown)==null?void 0:a.skill)||0),1),o[1]||(o[1]=v("span",{class:"stat-label"},"技能",-1))]),v("div",zw,[v("span",Vw,te(((c=be(n).tiered_breakdown)==null?void 0:c.thinking)||0),1),o[2]||(o[2]=v("span",{class:"stat-label"},"思维",-1))]),v("div",Hw,[v("span",Gw,te(((l=be(n).tiered_breakdown)==null?void 0:l.storage)||0),1),o[3]||(o[3]=v("span",{class:"stat-label"},"存储",-1))]),o[8]||(o[8]=v("div",{class:"stat-divider"},null,-1)),v("div",Ww,[v("span",{class:pt(["stat-value","status",(u=be(i))!=null&&u.enabled?"active":"inactive"])},te((d=be(i))!=null&&d.enabled?"运行中":"已停止"),3),o[4]||(o[4]=v("span",{class:"stat-label"},"进化",-1))]),v("div",$w,[v("span",Xw,te(be(n).preferred_provider||"无"),1),o[5]||(o[5]=v("span",{class:"stat-label"},"模型",-1))]),o[9]||(o[9]=v("div",{class:"stat-divider"},null,-1)),v("div",{class:"stat-item data-path-item",title:be(n).data_path||"未知"},[v("span",Yw,te(s(be(n).data_path)),1),o[6]||(o[6]=v("span",{class:"stat-label"},"数据",-1))],8,qw)])):(ue(),fe("div",jw," 加载中... "))])}}}),Zw=Sn(Kw,[["__scopeId","data-v-129c8bf3"]]),mc="default_user",__=Nf("auth",()=>{const t=we(mc),e=we(!0),n=we({id:mc,name:mc}),i=St(()=>t.value);function s(a){t.value=a,n.value.id=a,n.value.name=a}function r(){const a=localStorage.getItem("mcp_memory_user_id");a&&s(a)}function o(a){localStorage.setItem("mcp_memory_user_id",a),s(a)}return r(),{currentUserId:t,isAuthenticated:e,userInfo:n,getCurrentUserId:i,setUserId:s,loadUserFromStorage:r,saveUserToStorage:o}}),Jw={class:"memory-writer panel"},Qw={class:"write-mode-tabs"},eT={class:"form-group"},tT={class:"form-group"},nT={key:0,class:"error-text"},iT={class:"form-group"},sT={class:"form-row"},rT={class:"form-group"},oT={key:0,class:"form-group"},aT={key:1,class:"form-group"},lT={class:"form-actions"},cT=["disabled"],uT={key:0,class:"success-message"},fT={key:1,class:"error-message"},dT=yn({__name:"MemoryWriter",emits:["written"],setup(t,{emit:e}){const n=e,i=$i(),s=__(),r=we("normal"),o=we(!1),a=we(""),c=we(""),l=we({title:"",content:"",scope:"project",memory_type:"storage",content_type:"note",keywords:[]}),u=we({content:""}),d=St({get:()=>l.value.keywords.join(", "),set:p=>{l.value.keywords=p.split(",").map(m=>m.trim()).filter(m=>m)}}),f=St(()=>l.value.content.trim().length>0);function h(){return u.value.content="",l.value.content.trim()?!0:(u.value.content="请输入记忆内容",!1)}function g(){l.value={title:"",content:"",scope:"project",memory_type:"storage",content_type:"note",keywords:[]},u.value={content:""},a.value="",c.value=""}async function _(){if(h()){o.value=!0,a.value="",c.value="";try{let p;const m=s.getCurrentUserId;if(r.value==="normal")p=await mn.writeMemory({content:l.value.content,user_id:m,title:l.value.title||void 0,scope:l.value.scope,keywords:l.value.keywords.length>0?l.value.keywords:void 0,content_type:l.value.content_type}),i.addLog("记忆写入成功","success");else{const x={content:l.value.content,user_id:m,title:l.value.title||void 0,keywords:l.value.keywords.length>0?l.value.keywords:void 0};l.value.memory_type==="storage"?p=await li.writeStorage(x):l.value.memory_type==="thinking"?p=await li.writeThinking(x):p=await li.writeSkill(x);const y={storage:"存储记忆",thinking:"思维记忆",skill:"技能记忆"}[l.value.memory_type]||"记忆";i.addLog(`${y}写入成功`,"success")}a.value=`记忆写入成功！ID: ${p.id}`,n("written",p.id),l.value={title:"",content:"",scope:l.value.scope,memory_type:l.value.memory_type,content_type:l.value.content_type,keywords:[]},await i.fetchStats()}catch(p){const m=p.message||"未知错误";c.value=`写入失败: ${m}`,i.addLog("写入失败: "+m,"error")}finally{o.value=!1}}}return(p,m)=>(ue(),fe("div",Jw,[m[17]||(m[17]=v("h3",null,"记忆写入",-1)),v("div",Qw,[v("button",{class:pt(["mode-tab",{active:r.value==="normal"}]),onClick:m[0]||(m[0]=x=>r.value="normal")}," 普通写入 ",2),v("button",{class:pt(["mode-tab",{active:r.value==="tiered"}]),onClick:m[1]||(m[1]=x=>r.value="tiered")}," 分层写入 ",2)]),v("div",eT,[m[8]||(m[8]=v("label",null,"标题",-1)),It(v("input",{"onUpdate:modelValue":m[2]||(m[2]=x=>l.value.title=x),type:"text",placeholder:"记忆标题（可选）"},null,512),[[en,l.value.title]])]),v("div",tT,[m[9]||(m[9]=v("label",null,[_r("内容 "),v("span",{class:"required"},"*")],-1)),It(v("textarea",{"onUpdate:modelValue":m[3]||(m[3]=x=>l.value.content=x),rows:"6",placeholder:"输入记忆内容...",class:pt({"input-error":u.value.content})},null,2),[[en,l.value.content]]),u.value.content?(ue(),fe("span",nT,te(u.value.content),1)):nt("",!0)]),v("div",iT,[m[10]||(m[10]=v("label",null,"关键词",-1)),It(v("input",{"onUpdate:modelValue":m[4]||(m[4]=x=>d.value=x),type:"text",placeholder:"关键词1, 关键词2, ..."},null,512),[[en,d.value]])]),v("div",sT,[v("div",rT,[m[12]||(m[12]=v("label",null,"作用域",-1)),It(v("select",{"onUpdate:modelValue":m[5]||(m[5]=x=>l.value.scope=x)},[...m[11]||(m[11]=[v("option",{value:"project"},"项目",-1),v("option",{value:"global"},"全局",-1)])],512),[[co,l.value.scope]])]),r.value==="tiered"?(ue(),fe("div",oT,[m[14]||(m[14]=v("label",null,"记忆类型",-1)),It(v("select",{"onUpdate:modelValue":m[6]||(m[6]=x=>l.value.memory_type=x)},[...m[13]||(m[13]=[v("option",{value:"storage"},"存储记忆 💾",-1),v("option",{value:"thinking"},"思维记忆 💭",-1),v("option",{value:"skill"},"技能记忆 ⚡",-1)])],512),[[co,l.value.memory_type]])])):nt("",!0),r.value==="normal"?(ue(),fe("div",aT,[m[16]||(m[16]=v("label",null,"内容类型",-1)),It(v("select",{"onUpdate:modelValue":m[7]||(m[7]=x=>l.value.content_type=x)},[...m[15]||(m[15]=[ag('<option value="note" data-v-aeea853e>笔记</option><option value="task" data-v-aeea853e>任务</option><option value="summary" data-v-aeea853e>摘要</option><option value="code" data-v-aeea853e>代码</option><option value="config" data-v-aeea853e>配置</option><option value="workflow" data-v-aeea853e>工作流</option>',6)])],512),[[co,l.value.content_type]])])):nt("",!0)]),v("div",lT,[v("button",{class:"btn-reset",onClick:g},"重置"),v("button",{class:"btn-write",onClick:_,disabled:o.value||!f.value},te(o.value?"写入中...":"写入记忆"),9,cT)]),a.value?(ue(),fe("div",uT,te(a.value),1)):nt("",!0),c.value?(ue(),fe("div",fT,te(c.value),1)):nt("",!0)]))}}),hT=Sn(dT,[["__scopeId","data-v-aeea853e"]]),pT={class:"modal-body"},mT={class:"form-group"},gT={class:"form-group"},_T={class:"form-group"},vT={class:"form-row"},xT={class:"form-group"},yT={class:"form-group"},ST={class:"form-actions"},MT=["disabled"],bT=yn({__name:"MemoryEditor",props:{visible:{type:Boolean},memory:{}},emits:["close","saved","deleted"],setup(t,{emit:e}){const n=t,i=e,s=$i(),r=we(!1),o=we({title:"",content:"",scope:"project",memory_type:"storage",keywords:[]}),a=St({get:()=>o.value.keywords.join(", "),set:d=>{o.value.keywords=d.split(",").map(f=>f.trim()).filter(f=>f)}});hi(()=>n.memory,d=>{d&&(o.value={title:d.title||"",content:d.content||"",scope:d.scope||"project",memory_type:d.memory_type||"storage",keywords:d.keywords||[]})},{immediate:!0});function c(){i("close")}async function l(){if(n.memory){r.value=!0;try{await s.updateMemory(n.memory.id,o.value.content),s.addLog("记忆已更新","success"),i("saved"),c()}catch(d){s.addLog("更新失败: "+d.message,"error")}finally{r.value=!1}}}async function u(){if(n.memory&&confirm("确定要删除这条记忆吗？此操作不可撤销。"))try{await s.deleteMemory(n.memory.id),s.addLog("记忆已删除","success"),i("deleted",n.memory.id),c()}catch(d){s.addLog("删除失败: "+d.message,"error")}}return(d,f)=>t.visible?(ue(),fe("div",{key:0,class:"memory-editor-modal",onClick:c},[v("div",{class:"modal-content",onClick:f[5]||(f[5]=tl(()=>{},["stop"]))},[v("div",{class:"modal-header"},[f[6]||(f[6]=v("h2",null,"编辑记忆",-1)),v("button",{class:"close-btn",onClick:c},"×")]),v("div",pT,[v("div",mT,[f[7]||(f[7]=v("label",null,"标题",-1)),It(v("input",{"onUpdate:modelValue":f[0]||(f[0]=h=>o.value.title=h),type:"text",placeholder:"记忆标题"},null,512),[[en,o.value.title]])]),v("div",gT,[f[8]||(f[8]=v("label",null,"内容",-1)),It(v("textarea",{"onUpdate:modelValue":f[1]||(f[1]=h=>o.value.content=h),rows:"10",placeholder:"记忆内容"},null,512),[[en,o.value.content]])]),v("div",_T,[f[9]||(f[9]=v("label",null,"关键词（用逗号分隔）",-1)),It(v("input",{"onUpdate:modelValue":f[2]||(f[2]=h=>a.value=h),type:"text",placeholder:"关键词1, 关键词2, ..."},null,512),[[en,a.value]])]),v("div",vT,[v("div",xT,[f[11]||(f[11]=v("label",null,"作用域",-1)),It(v("select",{"onUpdate:modelValue":f[3]||(f[3]=h=>o.value.scope=h)},[...f[10]||(f[10]=[v("option",{value:"project"},"项目",-1),v("option",{value:"global"},"全局",-1)])],512),[[co,o.value.scope]])]),v("div",yT,[f[13]||(f[13]=v("label",null,"记忆类型",-1)),It(v("select",{"onUpdate:modelValue":f[4]||(f[4]=h=>o.value.memory_type=h)},[...f[12]||(f[12]=[v("option",{value:"storage"},"存储记忆",-1),v("option",{value:"thinking"},"思维记忆",-1),v("option",{value:"skill"},"技能记忆",-1)])],512),[[co,o.value.memory_type]])])]),v("div",ST,[v("button",{class:"btn-secondary",onClick:c},"取消"),t.memory?(ue(),fe("button",{key:0,class:"btn-danger",onClick:u},"删除")):nt("",!0),v("button",{class:"btn-primary",onClick:l,disabled:r.value},te(r.value?"保存中...":"保存"),9,MT)])])])])):nt("",!0)}}),ET=Sn(bT,[["__scopeId","data-v-05d49056"]]),wT={class:"tiered-memory-panel panel"},TT={class:"tier-tabs"},AT=["onClick"],RT={class:"tier-icon"},CT={class:"write-section"},PT={class:"form-group"},LT={class:"form-group"},DT={class:"form-group"},IT=["disabled"],NT={class:"query-section"},UT={class:"query-form"},FT=["disabled"],OT={class:"query-results"},BT={key:0,class:"empty-placeholder"},kT=["onClick"],zT={class:"result-title"},VT={class:"result-preview"},HT={class:"result-meta"},GT={class:"result-time"},WT={class:"tier-stats"},$T={class:"stat-item"},XT={class:"stat-value"},qT={class:"stat-item"},YT={class:"stat-value"},jT={class:"stat-item"},KT={class:"stat-value"},ZT=yn({__name:"TieredMemoryPanel",emits:["memorySelect"],setup(t,{emit:e}){const n=e,i=$i(),s=__(),r=[{label:"存储记忆",value:"storage",icon:"💾"},{label:"思维记忆",value:"thinking",icon:"💭"},{label:"技能记忆",value:"skill",icon:"⚡"}],o=we("storage"),a=we({title:"",content:"",keywords:""}),c=we(!1),l=we(""),u=we(!1),d=we([]),f=St(()=>{var w;return((w=r.find(y=>y.value===o.value))==null?void 0:w.label)||""}),h=St(()=>i.memoryCountByType);function g(w){o.value=w,d.value=[]}async function _(){if(!a.value.content.trim()){i.addLog("请输入记忆内容","warn");return}c.value=!0;try{const w=a.value.keywords.split(",").map(A=>A.trim()).filter(A=>A),y=s.getCurrentUserId;o.value==="storage"?await li.writeStorage({content:a.value.content,user_id:y,title:a.value.title,keywords:w}):o.value==="thinking"?await li.writeThinking({content:a.value.content,user_id:y,title:a.value.title,keywords:w}):o.value==="skill"&&await li.writeSkill({content:a.value.content,user_id:y,title:a.value.title,keywords:w}),i.addLog(`${f.value}写入成功`,"success"),a.value={title:"",content:"",keywords:""},await i.fetchStats()}catch(w){i.addLog("写入失败: "+w.message,"error")}finally{c.value=!1}}async function p(){if(!l.value.trim()){i.addLog("请输入查询内容","warn");return}u.value=!0;try{const w=await li.queryMemories({query:l.value,user_id:s.getCurrentUserId,memory_type:o.value,top_k:10});d.value=w.memories||[],i.addLog(`查询到 ${d.value.length} 条记忆`,"success")}catch(w){i.addLog("查询失败: "+w.message,"error")}finally{u.value=!1}}function m(w){n("memorySelect",w)}function x(w){return new Date(w).toLocaleString("zh-CN")}return(w,y)=>(ue(),fe("div",wT,[y[7]||(y[7]=v("h3",null,"三层记忆管理",-1)),v("div",TT,[(ue(),fe(mt,null,Bt(r,A=>v("button",{key:A.value,class:pt(["tier-tab",{active:o.value===A.value}]),onClick:P=>g(A.value)},[v("span",RT,te(A.icon),1),_r(" "+te(A.label),1)],10,AT)),64))]),v("div",CT,[v("h4",null,"写入"+te(f.value),1),v("div",PT,[It(v("input",{"onUpdate:modelValue":y[0]||(y[0]=A=>a.value.title=A),type:"text",placeholder:"标题（可选）"},null,512),[[en,a.value.title]])]),v("div",LT,[It(v("textarea",{"onUpdate:modelValue":y[1]||(y[1]=A=>a.value.content=A),rows:"5",placeholder:"记忆内容..."},null,512),[[en,a.value.content]])]),v("div",DT,[It(v("input",{"onUpdate:modelValue":y[2]||(y[2]=A=>a.value.keywords=A),type:"text",placeholder:"关键词（逗号分隔）"},null,512),[[en,a.value.keywords]])]),v("button",{class:"btn-write",onClick:_,disabled:c.value},te(c.value?"写入中...":"写入记忆"),9,IT)]),v("div",NT,[v("h4",null,"查询"+te(f.value),1),v("div",UT,[It(v("input",{"onUpdate:modelValue":y[3]||(y[3]=A=>l.value=A),type:"text",placeholder:"输入查询内容...",onKeyup:If(p,["enter"])},null,544),[[en,l.value]]),v("button",{onClick:p,disabled:u.value},te(u.value?"查询中...":"查询"),9,FT)]),v("div",OT,[d.value.length===0?(ue(),fe("div",BT," 暂无查询结果 ")):nt("",!0),(ue(!0),fe(mt,null,Bt(d.value,A=>{var P;return ue(),fe("div",{key:A.id,class:"result-item",onClick:L=>m(A)},[v("div",zT,te(A.title||"无标题"),1),v("div",VT,te((P=A.content)==null?void 0:P.substring(0,100))+"...",1),v("div",HT,[v("span",GT,te(x(A.timestamp)),1)])],8,kT)}),128))])]),v("div",WT,[v("div",$T,[y[4]||(y[4]=v("span",{class:"stat-label"},"存储层",-1)),v("span",XT,te(h.value.storage),1)]),v("div",qT,[y[5]||(y[5]=v("span",{class:"stat-label"},"思维层",-1)),v("span",YT,te(h.value.thinking),1)]),v("div",jT,[y[6]||(y[6]=v("span",{class:"stat-label"},"技能层",-1)),v("span",KT,te(h.value.skill),1)])])]))}}),JT=Sn(ZT,[["__scopeId","data-v-1b46c3c2"]]),QT={class:"llm-interactions-panel panel"},eA={class:"panel-header"},tA=["disabled"],nA={class:"stats-summary"},iA={class:"stat-item"},sA={class:"stat-value"},rA={class:"stat-item"},oA={class:"stat-value"},aA={class:"stat-item"},lA={class:"stat-value"},cA={class:"interactions-list"},uA={key:0,class:"loading-placeholder"},fA={key:1,class:"empty-placeholder"},dA=["onClick"],hA={class:"interaction-header"},pA={class:"interaction-model"},mA={class:"interaction-time"},gA={class:"interaction-stats"},_A={class:"token-info"},vA={class:"stat-badge input-token"},xA={class:"stat-badge output-token"},yA={key:0,class:"interaction-detail"},SA={class:"detail-section"},MA={class:"detail-content prompt"},bA={class:"detail-section"},EA={class:"detail-content response"},wA={key:0,class:"pagination"},TA=["disabled"],AA={class:"page-info"},RA=["disabled"],gc=10,CA=yn({__name:"LLMInteractions",setup(t){const e=we([]),n=we(!1),i=we(1),s=we(null),r=St(()=>e.value.reduce((g,_)=>g+(_.input_tokens||0)+(_.output_tokens||0),0)),o=St(()=>{if(e.value.length===0)return 0;const g=e.value.reduce((_,p)=>_+(p.response_time||0),0);return Math.round(g/e.value.length)}),a=St(()=>Math.ceil(e.value.length/gc)),c=St(()=>{const g=(i.value-1)*gc,_=g+gc;return e.value.slice(g,_)});async function l(){n.value=!0;try{const g=await IS.getInteractions(100);e.value=g.interactions||g.items||g||[]}catch(g){console.error("Failed to load LLM interactions:",g),e.value=[]}finally{n.value=!1}}function u(g){s.value=s.value===g?null:g}function d(g){return new Date(g).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function f(g,_){return g?g.length<=_?g:g.substring(0,_)+"...":""}function h(g){return g<1e3?"fast":g<3e3?"medium":"slow"}return Yn(()=>{l()}),(g,_)=>(ue(),fe("div",QT,[v("div",eA,[_[2]||(_[2]=v("h3",null,"LLM 交互历史",-1)),v("button",{class:"refresh-btn",onClick:l,disabled:n.value},te(n.value?"加载中...":"刷新"),9,tA)]),v("div",nA,[v("div",iA,[_[3]||(_[3]=v("span",{class:"stat-label"},"总交互",-1)),v("span",sA,te(e.value.length),1)]),v("div",rA,[_[4]||(_[4]=v("span",{class:"stat-label"},"总Token",-1)),v("span",oA,te(r.value),1)]),v("div",aA,[_[5]||(_[5]=v("span",{class:"stat-label"},"平均响应",-1)),v("span",lA,te(o.value)+"ms",1)])]),v("div",cA,[n.value?(ue(),fe("div",uA," 加载中... ")):c.value.length===0?(ue(),fe("div",fA," 暂无交互记录 ")):(ue(!0),fe(mt,{key:2},Bt(c.value,p=>(ue(),fe("div",{key:p.id,class:"interaction-item",onClick:m=>u(p.id)},[v("div",hA,[v("span",pA,te(p.model),1),v("span",mA,te(d(p.timestamp)),1)]),v("div",gA,[v("span",_A,[v("span",vA,"输入: "+te(p.input_tokens||0),1),v("span",xA,"输出: "+te(p.output_tokens||0),1)]),v("span",{class:pt(["response-time",h(p.response_time)])},te(p.response_time||0)+"ms ",3)]),s.value===p.id?(ue(),fe("div",yA,[v("div",SA,[_[6]||(_[6]=v("div",{class:"detail-label"},"提示词:",-1)),v("div",MA,te(f(p.prompt,500)),1)]),v("div",bA,[_[7]||(_[7]=v("div",{class:"detail-label"},"响应:",-1)),v("div",EA,te(f(p.response,500)),1)])])):nt("",!0)],8,dA))),128))]),a.value>1?(ue(),fe("div",wA,[v("button",{class:"page-btn",disabled:i.value===1,onClick:_[0]||(_[0]=p=>i.value--)}," 上一页 ",8,TA),v("span",AA,te(i.value)+" / "+te(a.value),1),v("button",{class:"page-btn",disabled:i.value===a.value,onClick:_[1]||(_[1]=p=>i.value++)}," 下一页 ",8,RA)])):nt("",!0)]))}}),PA=Sn(CA,[["__scopeId","data-v-ab845488"]]),LA={class:"evolution-config panel"},DA={key:0,class:"config-content"},IA={class:"status-header"},NA={class:"status-text"},UA={class:"config-section"},FA={class:"profile-selector"},OA=["onClick","disabled"],BA={class:"profile-icon"},kA={class:"profile-name"},zA={class:"profile-desc"},VA={class:"config-section"},HA={class:"status-grid"},GA={class:"status-item"},WA={class:"status-item"},$A={class:"status-item"},XA={class:"status-item"},qA={class:"config-section"},YA={class:"stats-grid"},jA={class:"stat-item"},KA={class:"stat-value"},ZA={class:"stat-item"},JA={class:"stat-value"},QA={class:"stat-item"},eR={class:"stat-value"},tR={class:"config-section"},nR={class:"time-info"},iR={class:"time-item"},sR={class:"time-value"},rR={class:"time-item"},oR={class:"time-value"},aR={class:"time-item"},lR={class:"time-value"},cR={class:"config-section"},uR={class:"activity-info"},fR={key:0,class:"activity-item"},dR={class:"activity-time"},hR={key:1,class:"activity-item"},pR={class:"activity-time"},mR={key:2,class:"activity-item"},gR={class:"activity-time"},_R={key:0,class:"reflection-note"},vR={key:0,class:"error-section"},xR={class:"error-message"},yR={class:"config-section"},SR={class:"llm-info"},MR={class:"llm-item"},bR={key:0,class:"llm-item"},ER={class:"llm-value"},wR={key:1,class:"llm-item"},TR={class:"llm-value"},AR={key:1,class:"loading"},RR=yn({__name:"EvolutionConfig",setup(t){const e=$i(),{evolutionStatus:n,currentProfile:i,isLoading:s}=Rr(e),r=[{value:"light",label:"轻度",icon:"🐢",desc:"低频率扫描和反思，适合资源受限环境"},{value:"standard",label:"标准",icon:"🚀",desc:"平衡的扫描和反思频率，适合大多数场景"},{value:"aggressive",label:"激进",icon:"⚡",desc:"高频率扫描和反思，适合快速迭代场景"}],o=St(()=>n.value?n.value.enabled?n.value.running?"运行中":"已暂停":"已停止":"未知"),a=St(()=>{const d=r.find(f=>f.value===i.value);return(d==null?void 0:d.desc)||""});function c(d){return d?d<60?`${d} 秒`:d<3600?`${Math.floor(d/60)} 分钟`:`${Math.floor(d/3600)} 小时`:"-"}function l(d){if(!d)return"-";try{return new Date(d).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return d}}async function u(d){d!==i.value&&await e.setEvolutionProfile(d)}return Yn(()=>{e.fetchEvolutionStatus()}),(d,f)=>{var h,g,_,p,m;return ue(),fe("div",LA,[f[24]||(f[24]=v("h3",null,"进化配置",-1)),be(n)?(ue(),fe("div",DA,[v("div",IA,[v("div",{class:pt(["status-indicator",{active:be(n).enabled&&be(n).running}])},null,2),v("span",NA,te(o.value),1)]),v("div",UA,[f[0]||(f[0]=v("h4",null,"进化模式",-1)),v("div",FA,[(ue(),fe(mt,null,Bt(r,x=>v("button",{key:x.value,class:pt(["profile-btn",{active:be(i)===x.value}]),onClick:w=>u(x.value),disabled:be(s)},[v("span",BA,te(x.icon),1),v("span",kA,te(x.label),1)],10,OA)),64))]),v("div",zA,te(a.value),1)]),v("div",VA,[f[5]||(f[5]=v("h4",null,"运行状态",-1)),v("div",HA,[v("div",GA,[f[1]||(f[1]=v("span",{class:"item-label"},"扫描任务",-1)),v("span",{class:pt(["item-value",be(n).scan_task_running?"running":"idle"])},te(be(n).scan_task_running?"运行中":"空闲"),3)]),v("div",WA,[f[2]||(f[2]=v("span",{class:"item-label"},"反思任务",-1)),v("span",{class:pt(["item-value",be(n).reflection_task_running?"running":"idle"])},te(be(n).reflection_task_running?"运行中":"空闲"),3)]),v("div",$A,[f[3]||(f[3]=v("span",{class:"item-label"},"日反思",-1)),v("span",{class:pt(["item-value",(h=be(n).daily_reflection)!=null&&h.running?"running":"idle"])},te((g=be(n).daily_reflection)!=null&&g.running?"运行中":"空闲"),3)]),v("div",XA,[f[4]||(f[4]=v("span",{class:"item-label"},"自适应",-1)),v("span",{class:pt(["item-value",be(n).adaptive?"active":"inactive"])},te(be(n).adaptive?"开启":"关闭"),3)])])]),v("div",qA,[f[9]||(f[9]=v("h4",null,"统计数据",-1)),v("div",YA,[v("div",jA,[v("div",KA,te(be(n).total_scanned),1),f[6]||(f[6]=v("div",{class:"stat-label"},"总扫描数",-1))]),v("div",ZA,[v("div",JA,te(be(n).last_scan_processed),1),f[7]||(f[7]=v("div",{class:"stat-label"},"上次处理",-1))]),v("div",QA,[v("div",eR,te(((_=be(n).daily_reflection)==null?void 0:_.total_reflections)||0),1),f[8]||(f[8]=v("div",{class:"stat-label"},"反思次数",-1))])])]),v("div",tR,[f[13]||(f[13]=v("h4",null,"时间配置",-1)),v("div",nR,[v("div",iR,[f[10]||(f[10]=v("span",{class:"time-label"},"扫描间隔",-1)),v("span",sR,te(c(be(n).scan_interval_seconds)),1)]),v("div",rR,[f[11]||(f[11]=v("span",{class:"time-label"},"反思间隔",-1)),v("span",oR,te(c(be(n).reflection_interval_seconds)),1)]),v("div",aR,[f[12]||(f[12]=v("span",{class:"time-label"},"扫描批次",-1)),v("span",lR,te(be(n).scan_batch_size)+" 条",1)])])]),v("div",cR,[f[17]||(f[17]=v("h4",null,"最近活动",-1)),v("div",uR,[be(n).last_scan_time?(ue(),fe("div",fR,[f[14]||(f[14]=v("span",{class:"activity-label"},"上次扫描",-1)),v("span",dR,te(l(be(n).last_scan_time)),1)])):nt("",!0),be(n).last_reflection_time?(ue(),fe("div",hR,[f[15]||(f[15]=v("span",{class:"activity-label"},"上次反思",-1)),v("span",pR,te(l(be(n).last_reflection_time)),1)])):nt("",!0),(p=be(n).daily_reflection)!=null&&p.next_reflection?(ue(),fe("div",mR,[f[16]||(f[16]=v("span",{class:"activity-label"},"下次反思",-1)),v("span",gR,te(be(n).daily_reflection.next_reflection),1)])):nt("",!0)]),be(n).last_reflection_note?(ue(),fe("div",_R,te(be(n).last_reflection_note),1)):nt("",!0)]),be(n).last_error?(ue(),fe("div",vR,[f[18]||(f[18]=v("div",{class:"error-label"},"最近错误",-1)),v("div",xR,te(be(n).last_error),1)])):nt("",!0),v("div",yR,[f[22]||(f[22]=v("h4",null,"LLM 配置",-1)),v("div",SR,[v("div",MR,[f[19]||(f[19]=v("span",{class:"llm-label"},"LLM 状态",-1)),v("span",{class:pt(["llm-value",be(n).llm_enabled?"enabled":"disabled"])},te(be(n).llm_enabled?"已启用":"未启用"),3)]),be(n).preferred_provider?(ue(),fe("div",bR,[f[20]||(f[20]=v("span",{class:"llm-label"},"提供商",-1)),v("span",ER,te(be(n).preferred_provider),1)])):nt("",!0),(m=be(n).available_providers)!=null&&m.length?(ue(),fe("div",wR,[f[21]||(f[21]=v("span",{class:"llm-label"},"可用提供商",-1)),v("span",TR,te(be(n).available_providers.join(", ")),1)])):nt("",!0)])])])):(ue(),fe("div",AR,[...f[23]||(f[23]=[v("span",{class:"loading-text"},"加载中...",-1)])]))])}}}),CR=Sn(RR,[["__scopeId","data-v-59d141f4"]]),PR={class:"merge-chain-viewer panel"},LR={class:"header"},DR={key:0,class:"empty-placeholder"},IR={key:1,class:"loading-overlay"},NR={key:2,class:"error-message"},UR={class:"chain-info"},FR={class:"info-item"},OR={class:"info-value"},BR={class:"info-item"},kR={class:"info-value"},zR={class:"info-item"},VR={class:"info-value"},HR={key:0,class:"merge-history"},GR={class:"history-list"},WR={class:"history-time"},$R={class:"history-desc"},XR={key:4,class:"empty-placeholder"},qR=yn({__name:"MergeChainViewer",props:{memoryId:{},showClose:{type:Boolean}},emits:["close","nodeClick"],setup(t,{emit:e}){const n=t,i=e,s=$i(),r=we(),o=we(!1),a=we(null),c=we(null);let l=null,u=null;hi(()=>n.memoryId,x=>{x?d(x):(c.value=null,f())},{immediate:!0}),Yn(()=>{n.memoryId&&d(n.memoryId)}),Ar(()=>{u&&u.stop()});async function d(x){o.value=!0,a.value=null;try{const w=await li.getMergeChain(x);c.value=w,s.addLog("合并链加载成功","success"),await Io(),r.value&&w&&h(w)}catch(w){a.value="加载合并链失败: "+w.message,s.addLog("加载合并链失败","error")}finally{o.value=!1}}function f(){l&&l.selectAll("*").remove()}function h(x){if(!r.value)return;f();const w=r.value.clientWidth,y=280;l=yr(r.value).append("svg").attr("width",w).attr("height",y);const A=[],P=[];if(x.current&&A.push({id:x.current.id,title:x.current.title||x.current.id,type:"current"}),x.sources&&x.sources.length>0&&x.sources.forEach(U=>{A.push({id:U.id,title:U.title||U.id,type:"source"}),P.push({source:U.id,target:x.current.id,relation:"merged_to"})}),A.length===0)return;u=p_(A).force("link",h_(P).id(U=>U.id).distance(80)).force("charge",m_().strength(-200)).force("center",u_(w/2,y/2)).force("collision",d_().radius(35)),l.append("defs").append("marker").attr("id","arrowhead-merge").attr("viewBox","-0 -5 10 10").attr("refX",25).attr("refY",0).attr("orient","auto").attr("markerWidth",6).attr("markerHeight",6).append("path").attr("d","M 0,-5 L 10,0 L 0,5").attr("fill","#00ff41");const S=l.append("g").selectAll("line").data(P).enter().append("line").attr("stroke","#00ff41").attr("stroke-opacity",.6).attr("stroke-width",2).attr("marker-end","url(#arrowhead-merge)"),E=l.append("g").selectAll("g").data(A).enter().append("g").style("cursor","pointer").call(Zg().on("start",g).on("drag",_).on("end",p)).on("click",(U,D)=>{i("nodeClick",D)});E.append("circle").attr("r",U=>U.type==="current"?20:15).attr("fill",U=>U.type==="current"?"#00ff41":"rgba(0, 255, 65, 0.3)").attr("stroke","#00ff41").attr("stroke-width",2),E.append("text").attr("dy",4).attr("text-anchor","middle").attr("fill",U=>U.type==="current"?"#000":"#00ff41").attr("font-size","10px").attr("font-weight","bold").text(U=>U.title.length>6?U.title.substring(0,6)+"...":U.title),E.append("title").text(U=>`${U.title}
${U.memory_type||"未知类型"}`),u.on("tick",()=>{S.attr("x1",U=>U.source.x).attr("y1",U=>U.source.y).attr("x2",U=>U.target.x).attr("y2",U=>U.target.y),E.attr("transform",U=>`translate(${U.x},${U.y})`)})}function g(x){!x.active&&u&&u.alphaTarget(.3).restart(),x.subject.fx=x.subject.x,x.subject.fy=x.subject.y}function _(x){x.subject.fx=x.x,x.subject.fy=x.y}function p(x){!x.active&&u&&u.alphaTarget(0),x.subject.fx=null,x.subject.fy=null}function m(x){return x?new Date(x).toLocaleString("zh-CN"):"-"}return(x,w)=>{var y,A,P,L;return ue(),fe("div",PR,[v("div",LR,[w[1]||(w[1]=v("h3",null,"记忆合并链",-1)),t.showClose?(ue(),fe("button",{key:0,class:"btn-close",onClick:w[0]||(w[0]=S=>i("close"))},"×")):nt("",!0)]),t.memoryId?o.value?(ue(),fe("div",IR,[...w[3]||(w[3]=[v("div",{class:"loading-spinner"},null,-1),v("p",null,"加载合并链中...",-1)])])):a.value?(ue(),fe("div",NR,[v("p",null,te(a.value),1)])):c.value?(ue(),fe(mt,{key:3},[v("div",UR,[v("div",FR,[w[4]||(w[4]=v("span",{class:"info-label"},"当前记忆",-1)),v("span",OR,te(((y=c.value.current)==null?void 0:y.title)||((A=c.value.current)==null?void 0:A.id)),1)]),v("div",BR,[w[5]||(w[5]=v("span",{class:"info-label"},"合并深度",-1)),v("span",kR,te(c.value.depth||0),1)]),v("div",zR,[w[6]||(w[6]=v("span",{class:"info-label"},"来源数量",-1)),v("span",VR,te(((P=c.value.sources)==null?void 0:P.length)||0),1)])]),v("div",{ref_key:"graphContainer",ref:r,class:"graph-container"},null,512),(L=c.value.merge_history)!=null&&L.length?(ue(),fe("div",HR,[w[7]||(w[7]=v("h4",null,"合并历史",-1)),v("div",GR,[(ue(!0),fe(mt,null,Bt(c.value.merge_history,(S,E)=>(ue(),fe("div",{key:E,class:"history-item"},[v("div",WR,te(m(S.timestamp)),1),v("div",$R,te(S.description||"合并操作"),1)]))),128))])])):nt("",!0)],64)):(ue(),fe("div",XR,[...w[8]||(w[8]=[v("p",null,"暂无合并链数据",-1)])])):(ue(),fe("div",DR,[...w[2]||(w[2]=[v("p",null,"请选择一个记忆查看其合并链",-1)])]))])}}}),YR=Sn(qR,[["__scopeId","data-v-09b8e911"]]),v_=Nf("brain",()=>{const t=we(null),e=we(!1),n=we(null),i=we(null);async function s(){e.value=!0,n.value=null;try{const M=await fetch("/brain/status");if(!M.ok)throw new Error("Failed to fetch brain status");t.value=await M.json(),i.value=new Date}catch(M){n.value="获取AI大脑状态失败",console.error("Failed to fetch brain status:",M)}finally{e.value=!1}}async function r(M,T={}){e.value=!0,n.value=null;try{const k=await fetch("/brain/input",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:M,context:T})});if(!k.ok)throw new Error("Failed to process input");return await k.json()}catch(k){throw n.value="处理输入失败",console.error("Failed to process input:",k),k}finally{e.value=!1}}async function o(M,T={}){e.value=!0,n.value=null;try{const k=await fetch("/brain/retrieve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:M,context:T})});if(!k.ok)throw new Error("Failed to retrieve memory");return await k.json()}catch(k){throw n.value="检索记忆失败",console.error("Failed to retrieve memory:",k),k}finally{e.value=!1}}async function a(){e.value=!0,n.value=null;try{const M=await fetch("/brain/reflection",{method:"POST",headers:{"Content-Type":"application/json"}});if(!M.ok)throw new Error("Failed to trigger reflection");return await M.json()}catch(M){throw n.value="触发自我反思失败",console.error("Failed to trigger reflection:",M),M}finally{e.value=!1}}async function c(M){e.value=!0,n.value=null;try{const T=await fetch("/brain/hypotheses",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({context:M})});if(!T.ok)throw new Error("Failed to generate hypotheses");return(await T.json()).hypotheses}catch(T){throw n.value="生成假设失败",console.error("Failed to generate hypotheses:",T),T}finally{e.value=!1}}async function l(M){e.value=!0,n.value=null;try{const T=await fetch("/brain/hypotheses/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hypothesis:M})});if(!T.ok)throw new Error("Failed to test hypothesis");return await T.json()}catch(T){throw n.value="测试假设失败",console.error("Failed to test hypothesis:",T),T}finally{e.value=!1}}async function u(M){e.value=!0,n.value=null;try{const T=await fetch("/brain/evolve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({experiences:M})});if(!T.ok)throw new Error("Failed to evolve brain");return await T.json()}catch(T){throw n.value="进化AI大脑失败",console.error("Failed to evolve brain:",T),T}finally{e.value=!1}}function d(){var M;return(M=t.value)==null?void 0:M.self_awareness}function f(){var M;return(M=t.value)==null?void 0:M.active_cognition}function h(){var M;return(M=t.value)==null?void 0:M.value_system}function g(){var M;return(M=t.value)==null?void 0:M.dynamic_memory}function _(){var M;return(M=t.value)==null?void 0:M.metacognition}function p(){if(!t.value)return[];const M=[],T=new Date;for(let k=6;k>=0;k--){const G=new Date(T);G.setDate(G.getDate()-k),M.push({date:G.toISOString().split("T")[0],success_rate:.6+Math.random()*.35})}return M}function m(){var M,T,k;return((k=(T=(M=t.value)==null?void 0:M.self_awareness)==null?void 0:T.capabilities)==null?void 0:k.slice(0,6))||[]}function x(){var M,T,k;return((k=(T=(M=t.value)==null?void 0:M.self_awareness)==null?void 0:T.goals)==null?void 0:k.slice(0,4))||[]}function w(){var T,k;const M=((k=(T=t.value)==null?void 0:T.value_system)==null?void 0:k.weights)||{};return{novelty:M.novelty||.25,utility:M.utility||.25,emotional:M.emotional||.25,frequency:M.frequency||.25}}function y(M){return(M*100).toFixed(0)+"%"}function A(M){return M>.7?"high":M>.4?"medium":"low"}function P(M){return M>.7?"high":M>.4?"medium":"low"}function L(M){return M>.8?"high":M>.5?"medium":"low"}function S(M){if(!M)return"N/A";const T=M.total_score||0;return T>=.75?"高价值":T>=.5?"中等价值":"低价值"}function E(M){return{accuracy:"准确性",efficiency:"效率",creativity:"创造性",empathy:"同理心",learning:"学习能力",safety:"安全性",curiosity:"好奇心",reliability:"可靠性",novelty:"新颖性",utility:"实用性",emotional:"情感强度",frequency:"使用频率"}[M]||M}function U(M){return M>.05?"up":M<-.05?"down":"stable"}function D(M){const T=U(M);return T==="up"?"📈":T==="down"?"📉":"➡️"}function F(){n.value=null}async function V(){try{const M=await fetch("/brain/export");if(!M.ok)throw new Error("Export failed");return await M.json()}catch(M){throw n.value="导出大脑状态失败",console.error("Export failed:",M),M}}async function X(M){try{const T=await fetch("/brain/import",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(M)});if(!T.ok)throw new Error("Import failed");return await T.json()}catch(T){throw n.value="导入大脑状态失败",console.error("Import failed:",T),T}}async function N(){try{const M=await fetch("/brain/compatibility");if(!M.ok)throw new Error("Compatibility check failed");return await M.json()}catch(M){throw n.value="兼容性检查失败",console.error("Compatibility check failed:",M),M}}return{brainStatus:t,isLoading:e,error:n,lastUpdate:i,fetchBrainStatus:s,processInput:r,retrieveMemory:o,triggerSelfReflection:a,generateHypotheses:c,testHypothesis:l,evolveBrain:u,getSelfAwareness:d,getCognitionStatus:f,getValueSystem:h,getDynamicMemory:g,getMetacognition:_,getLearningTrends:p,getDisplayedCapabilities:m,getTopGoals:x,getValueChart:w,formatPercent:y,getLoadClass:A,getFocusClass:P,getConfidenceClass:L,formatValueCategory:S,formatValueName:E,getTrendClass:U,getTrendIcon:D,clearError:F,exportBrain:V,importBrain:X,checkCompatibility:N}}),jR={class:"brain-status panel"},KR={class:"awareness-section"},ZR={class:"awareness-grid"},JR={class:"awareness-card"},QR={class:"card-content"},eC={class:"card-value"},tC={class:"card-version"},nC={class:"awareness-card"},iC={class:"card-content"},sC={class:"capabilities-list"},rC={class:"awareness-card"},oC={class:"card-content"},aC={key:0,class:"goals-list"},lC={class:"goal-progress"},cC={class:"goal-name"},uC=["value"],fC={key:1,class:"no-goals"},dC={class:"awareness-card"},hC={class:"card-content"},pC={class:"evolution-info"},mC={class:"evolution-generation"},gC={class:"total-experiences"},_C={class:"cognition-section"},vC={class:"cognition-grid"},xC={class:"cognition-card"},yC={class:"card-content"},SC={class:"cognition-stats"},MC={class:"stat-row"},bC={class:"stat-value"},EC={class:"stat-row"},wC={class:"stat-value"},TC={class:"cognition-card"},AC={class:"card-content"},RC={class:"cognition-stats"},CC={class:"stat-row"},PC={class:"stat-value"},LC={class:"stat-row"},DC={class:"stat-value"},IC={class:"value-section"},NC={class:"value-stats"},UC={class:"value-chart"},FC={class:"chart-item"},OC={class:"chart-item"},BC={class:"chart-item"},kC={class:"chart-item"},zC={class:"memory-section"},VC={class:"memory-stats"},HC={class:"memory-pie"},GC={class:"metacognition-section"},WC={class:"metacognition-stats"},$C={class:"meta-grid"},XC={class:"meta-item"},qC={class:"meta-item"},YC={class:"meta-item"},jC={key:0,class:"detected-biases"},KC={class:"biases-list"},ZC={class:"status-footer"},JC={class:"cycle-info"},QC={class:"cycle-count"},eP={class:"last-update"},tP=["disabled"],nP=yn({__name:"BrainStatus",setup(t){const e=v_(),{isLoading:n,lastUpdate:i}=Rr(e),s=St(()=>e.getValueChart()),r=St(()=>i.value?i.value.toLocaleTimeString("zh-CN"):"从未更新"),o=St(()=>{const l=e.getMetacognition();return(l==null?void 0:l.detected_biases)||[]});let a=null;Yn(()=>{e.fetchBrainStatus(),a=window.setInterval(()=>{e.fetchBrainStatus()},5e3)}),Rf(()=>{a&&clearInterval(a)});function c(){e.fetchBrainStatus()}return(l,u)=>{var d,f,h,g,_,p,m,x,w,y,A,P,L,S,E,U,D,F,V,X,N,M,T,k,G,ne;return ue(),fe("div",jR,[u[30]||(u[30]=v("h3",null,"🧠 AI大脑状态",-1)),v("div",KR,[u[8]||(u[8]=v("h4",null,"自我意识",-1)),v("div",ZR,[v("div",JR,[u[1]||(u[1]=v("div",{class:"card-icon"},"🤖",-1)),v("div",QR,[u[0]||(u[0]=v("div",{class:"card-title"},"身份认知",-1)),v("div",eC,te(((d=be(e).getSelfAwareness())==null?void 0:d.identity)||"AI Brain"),1),v("div",tC,"v"+te(((f=be(e).getSelfAwareness())==null?void 0:f.version)||"1.0.0"),1)])]),v("div",nC,[u[3]||(u[3]=v("div",{class:"card-icon"},"⚡",-1)),v("div",iC,[u[2]||(u[2]=v("div",{class:"card-title"},"核心能力",-1)),v("div",sC,[(ue(!0),fe(mt,null,Bt(be(e).getDisplayedCapabilities(),re=>(ue(),fe("div",{key:re},te(re),1))),128))])])]),v("div",rC,[u[5]||(u[5]=v("div",{class:"card-icon"},"🎯",-1)),v("div",oC,[u[4]||(u[4]=v("div",{class:"card-title"},"当前目标",-1)),be(e).getTopGoals().length>0?(ue(),fe("div",aC,[(ue(!0),fe(mt,null,Bt(be(e).getTopGoals(),re=>(ue(),fe("div",{key:re.goal_id},[v("div",lC,[v("span",cC,te(re.description),1),v("progress",{value:re.progress*100,max:"100"},null,8,uC)])]))),128))])):(ue(),fe("div",fC,"暂无活跃目标"))])]),v("div",dC,[u[7]||(u[7]=v("div",{class:"card-icon"},"💎",-1)),v("div",hC,[u[6]||(u[6]=v("div",{class:"card-title"},"进化状态",-1)),v("div",pC,[v("div",mC,"第 "+te(((h=be(e).getSelfAwareness())==null?void 0:h.evolution_generation)||0)+" 代",1),v("div",gC,te(((g=be(e).getSelfAwareness())==null?void 0:g.total_experiences)||0)+" 次经验",1)])])])])]),v("div",_C,[u[17]||(u[17]=v("h4",null,"主动认知",-1)),v("div",vC,[v("div",xC,[u[12]||(u[12]=v("div",{class:"card-icon"},"👁️",-1)),v("div",yC,[u[11]||(u[11]=v("div",{class:"card-title"},"注意力系统",-1)),v("div",SC,[v("div",MC,[u[9]||(u[9]=v("span",{class:"stat-label"},"阈值",-1)),v("span",bC,te(((p=(_=be(e).getCognitionStatus())==null?void 0:_.attention_threshold)==null?void 0:p.toFixed(2))||"N/A"),1)]),v("div",EC,[u[10]||(u[10]=v("span",{class:"stat-label"},"待处理问题",-1)),v("span",wC,te(((m=be(e).getCognitionStatus())==null?void 0:m.pending_questions)||0),1)])])])]),v("div",TC,[u[16]||(u[16]=v("div",{class:"card-icon"},"🔍",-1)),v("div",AC,[u[15]||(u[15]=v("div",{class:"card-title"},"好奇心引擎",-1)),v("div",RC,[v("div",CC,[u[13]||(u[13]=v("span",{class:"stat-label"},"好奇心水平",-1)),v("span",PC,te(be(e).formatPercent(((x=be(e).getCognitionStatus())==null?void 0:x.curiosity_level)||0)),1)]),v("div",LC,[u[14]||(u[14]=v("span",{class:"stat-label"},"待验证假设",-1)),v("span",DC,te(((w=be(e).getCognitionStatus())==null?void 0:w.pending_hypotheses)||0),1)])])])])])]),v("div",IC,[u[22]||(u[22]=v("h4",null,"价值判断系统",-1)),v("div",NC,[v("div",UC,[v("div",FC,[v("div",{class:"chart-bar",style:Vn({width:s.value.novelty*100+"%"})},null,4),u[18]||(u[18]=v("div",{class:"chart-label"},"新颖性",-1))]),v("div",OC,[v("div",{class:"chart-bar",style:Vn({width:s.value.utility*100+"%"})},null,4),u[19]||(u[19]=v("div",{class:"chart-label"},"实用性",-1))]),v("div",BC,[v("div",{class:"chart-bar",style:Vn({width:s.value.emotional*100+"%"})},null,4),u[20]||(u[20]=v("div",{class:"chart-label"},"情感强度",-1))]),v("div",kC,[v("div",{class:"chart-bar",style:Vn({width:s.value.frequency*100+"%"})},null,4),u[21]||(u[21]=v("div",{class:"chart-label"},"使用频率",-1))])])])]),v("div",zC,[u[24]||(u[24]=v("h4",null,"动态记忆",-1)),v("div",VC,[v("div",HC,[v("div",{class:"pie-segment active",style:Vn({flex:((y=be(e).getDynamicMemory())==null?void 0:y.active_memories)||0})},null,4),v("div",{class:"pie-segment consolidated",style:Vn({flex:((A=be(e).getDynamicMemory())==null?void 0:A.consolidated_memories)||0})},null,4),v("div",{class:"pie-segment decaying",style:Vn({flex:((P=be(e).getDynamicMemory())==null?void 0:P.decaying_memories)||0})},null,4),v("div",{class:"pie-segment forgotten",style:Vn({flex:((L=be(e).getDynamicMemory())==null?void 0:L.forgotten_memories)||0})},null,4),u[23]||(u[23]=ag('<div class="pie-legend" data-v-50b29f8a><div class="legend-item active" data-v-50b29f8a></div> 活跃 <div class="legend-item consolidated" data-v-50b29f8a></div> 巩固 <div class="legend-item decaying" data-v-50b29f8a></div> 衰退 <div class="legend-item forgotten" data-v-50b29f8a></div> 遗忘 </div>',1))])])]),v("div",GC,[u[29]||(u[29]=v("h4",null,"元认知",-1)),v("div",WC,[v("div",$C,[v("div",XC,[u[25]||(u[25]=v("div",{class:"meta-label"},"认知负荷",-1)),v("div",{class:pt(["meta-value",be(e).getLoadClass(((E=(S=be(e).getMetacognition())==null?void 0:S.current_state)==null?void 0:E.cognitive_load)||0)])},te(be(e).formatPercent(((D=(U=be(e).getMetacognition())==null?void 0:U.current_state)==null?void 0:D.cognitive_load)||0)),3)]),v("div",qC,[u[26]||(u[26]=v("div",{class:"meta-label"},"专注度",-1)),v("div",{class:pt(["meta-value",be(e).getFocusClass(((V=(F=be(e).getMetacognition())==null?void 0:F.current_state)==null?void 0:V.focus_level)||0)])},te(be(e).formatPercent(((N=(X=be(e).getMetacognition())==null?void 0:X.current_state)==null?void 0:N.focus_level)||0)),3)]),v("div",YC,[u[27]||(u[27]=v("div",{class:"meta-label"},"自信度",-1)),v("div",{class:pt(["meta-value",be(e).getConfidenceClass(((T=(M=be(e).getMetacognition())==null?void 0:M.current_state)==null?void 0:T.confidence_level)||0)])},te(be(e).formatPercent(((G=(k=be(e).getMetacognition())==null?void 0:k.current_state)==null?void 0:G.confidence_level)||0)),3)])]),o.value.length>0?(ue(),fe("div",jC,[u[28]||(u[28]=v("h5",null,"检测到的认知偏差",-1)),v("div",KC,[(ue(!0),fe(mt,null,Bt(o.value,re=>(ue(),fe("div",{key:re,class:"bias-item"},te(re),1))),128))])])):nt("",!0)])]),v("div",ZC,[v("div",JC,[v("span",QC,"总周期: "+te(((ne=be(e).brainStatus)==null?void 0:ne.total_cycles)||0),1),v("span",eP,"最后更新: "+te(r.value),1)]),v("button",{onClick:c,disabled:be(n),class:"refresh-btn"},te(be(n)?"刷新中...":"刷新状态"),9,tP)])])}}}),iP=Sn(nP,[["__scopeId","data-v-50b29f8a"]]),sP={class:"brain-interaction panel"},rP={class:"interaction-section"},oP={class:"input-form"},aP={class:"form-actions"},lP=["disabled"],cP={key:0,class:"result-display"},uP={class:"result-content"},fP={class:"result-section"},dP={class:"result-value"},hP={class:"result-section"},pP={class:"result-value"},mP={key:0,class:"result-section"},gP={class:"result-value"},_P={key:1,class:"result-actions"},vP={class:"actions-tags"},xP={key:2,class:"result-questions"},yP={class:"questions-list"},SP={class:"interaction-section"},MP={class:"retrieval-form"},bP=["disabled"],EP={key:0,class:"result-display"},wP={class:"results-list"},TP={class:"memory-content"},AP={class:"memory-meta"},RP={class:"meta-relevance"},CP={key:0,class:"meta-type"},PP={key:1,class:"result-display empty"},LP={class:"interaction-section"},DP={class:"reflection-actions"},IP=["disabled"],NP={key:0,class:"result-display"},UP={class:"reflection-summary"},FP={class:"summary-item"},OP={class:"summary-value"},BP={class:"summary-item"},kP={class:"summary-value"},zP={class:"summary-item"},VP={key:0,class:"summary-item"},HP={class:"recommendations-list"},GP={class:"interaction-section"},WP={class:"hypothesis-form"},$P=["disabled"],XP={key:0,class:"hypotheses-list"},qP={class:"hypothesis-content"},YP={class:"hypothesis-description"},jP={class:"hypothesis-confidence"},KP={class:"hypothesis-actions"},ZP=["onClick","disabled"],JP={key:1,class:"empty-message"},QP=yn({__name:"BrainInteraction",setup(t){const e=v_(),n=we(""),i=we(""),s=we(!1),r=we(!1),o=we(!1),a=we(!1),c=we(!1),l=we(null),u=we(null),d=we(null),f=we([]),h=we(!1);async function g(){if(n.value.trim()){s.value=!0,l.value=null;try{const S=await e.processInput(n.value);l.value=S}catch(S){console.error("Failed to process input:",S),alert("处理输入失败: "+S.message)}finally{s.value=!1}}}function _(){n.value="",l.value=null}async function p(){if(i.value.trim()){r.value=!0,u.value=null;try{const S=await e.retrieveMemory(i.value);u.value=S}catch(S){console.error("Failed to retrieve memory:",S),alert("检索记忆失败: "+S.message)}finally{r.value=!1}}}async function m(){o.value=!0,d.value=null;try{const S=await e.triggerSelfReflection();d.value=S,setTimeout(()=>e.fetchBrainStatus(),2e3)}catch(S){console.error("Failed to trigger reflection:",S),alert("触发自我反思失败: "+S.message)}finally{o.value=!1}}async function x(){const S="基于当前记忆系统的分析";a.value=!0,h.value=!0,f.value=[];try{const E=await e.generateHypotheses(S);f.value=E}catch(E){console.error("Failed to generate hypotheses:",E),alert("生成假设失败: "+E.message)}finally{a.value=!1}}async function w(S){c.value=!0;try{await e.testHypothesis(S),alert("假设测试已启动，请稍后查看结果"),S.status="testing"}catch(E){console.error("Failed to test hypothesis:",E),alert("测试假设失败: "+E.message)}finally{c.value=!1}}function y(S){return e.formatValueCategory(S)}function A(S){return{memory_created:"创建记忆",associations_created:"创建联想",content_filtered:"内容过滤",questions_generated:"生成问题"}[S]||S}function P(S){return{storage:"存储",thinking:"思维",skill:"技能"}[S]||S}function L(S){return{pending:"待验证",testing:"测试中",confirmed:"已确认",rejected:"已拒绝"}[S]||S}return(S,E)=>{var U,D,F,V,X,N,M,T,k,G;return ue(),fe("div",sP,[E[18]||(E[18]=v("h3",null,"🧠 AI大脑交互",-1)),v("div",rP,[E[8]||(E[8]=v("h4",null,"认知处理",-1)),v("div",oP,[It(v("textarea",{"onUpdate:modelValue":E[0]||(E[0]=ne=>n.value=ne),placeholder:"输入要让AI大脑处理的内容...",class:"brain-input",rows:"4"},null,512),[[en,n.value]]),v("div",aP,[v("button",{onClick:g,disabled:s.value},te(s.value?"处理中...":"处理输入"),9,lP),v("button",{onClick:_,class:"secondary"},"清除")])]),l.value?(ue(),fe("div",cP,[E[7]||(E[7]=v("h5",null,"处理结果",-1)),v("div",uP,[v("div",fP,[E[2]||(E[2]=v("span",{class:"result-label"},"注意力分数:",-1)),v("span",dP,te((U=l.value.attention_score)==null?void 0:U.toFixed(2)),1)]),v("div",hP,[E[3]||(E[3]=v("span",{class:"result-label"},"价值评估:",-1)),v("span",pP,te(y(l.value.value_assessment)),1)]),((D=l.value.memories_created)==null?void 0:D.length)>0?(ue(),fe("div",mP,[E[4]||(E[4]=v("span",{class:"result-label"},"创建记忆:",-1)),v("span",gP,te(l.value.memories_created.length)+" 条",1)])):nt("",!0),(F=l.value.actions_taken)!=null&&F.length?(ue(),fe("div",_P,[E[5]||(E[5]=v("span",{class:"actions-label"},"执行操作:",-1)),v("div",vP,[(ue(!0),fe(mt,null,Bt(l.value.actions_taken,ne=>(ue(),fe("span",{key:ne,class:"action-tag"},te(A(ne)),1))),128))])])):nt("",!0),l.value.questions_generated&&l.value.questions_generated.length>0?(ue(),fe("div",xP,[E[6]||(E[6]=v("span",{class:"questions-label"},"生成问题:",-1)),v("div",yP,[(ue(!0),fe(mt,null,Bt(l.value.questions_generated,(ne,re)=>(ue(),fe("div",{key:re,class:"question-item"},te(ne),1))),128))])])):nt("",!0)])])):nt("",!0)]),v("div",SP,[E[10]||(E[10]=v("h4",null,"智能检索",-1)),v("div",MP,[It(v("input",{"onUpdate:modelValue":E[1]||(E[1]=ne=>i.value=ne),placeholder:"输入检索查询...",class:"retrieval-input",onKeyup:If(p,["enter"])},null,544),[[en,i.value]]),v("button",{onClick:p,disabled:r.value},te(r.value?"检索中...":"检索记忆"),9,bP)]),u.value&&u.value.memories&&u.value.memories.length>0?(ue(),fe("div",EP,[v("h5",null,"检索结果 (置信度: "+te(((V=u.value.confidence)==null?void 0:V.toFixed(2))||"N/A")+")",1),v("div",wP,[(ue(!0),fe(mt,null,Bt(u.value.memories,ne=>{var re;return ue(),fe("div",{key:ne.memory_id,class:"memory-item"},[v("div",TP,te(ne.content||"记忆内容..."),1),v("div",AP,[v("span",RP,"相关度: "+te((re=ne.relevance)==null?void 0:re.toFixed(2)),1),ne.memory_type?(ue(),fe("span",CP,"类型: "+te(P(ne.memory_type)),1)):nt("",!0)])])}),128))])])):u.value?(ue(),fe("div",PP,[...E[9]||(E[9]=[v("h5",null,"检索结果",-1),v("p",{class:"empty-message"},"未找到相关记忆",-1)])])):nt("",!0)]),v("div",LP,[E[16]||(E[16]=v("h4",null,"自我反思",-1)),v("div",DP,[v("button",{onClick:m,disabled:o.value},te(o.value?"反思中...":"触发自我反思"),9,IP)]),d.value?(ue(),fe("div",NP,[E[15]||(E[15]=v("h5",null,"反思结果",-1)),v("div",UP,[v("div",FP,[E[11]||(E[11]=v("span",{class:"summary-label"},"记忆总数:",-1)),v("span",OP,te(((X=d.value.memory_state)==null?void 0:X.total_memories)||"N/A"),1)]),v("div",BP,[E[12]||(E[12]=v("span",{class:"summary-label"},"学习效率:",-1)),v("span",kP,te(((M=(N=d.value.learning_efficiency)==null?void 0:N.efficiency_score)==null?void 0:M.toFixed(2))||"N/A"),1)]),v("div",zP,[E[13]||(E[13]=v("span",{class:"summary-label"},"认知偏差:",-1)),v("span",{class:pt(["summary-value",{"has-biases":((T=d.value.detected_biases)==null?void 0:T.length)>0}])},te(((k=d.value.detected_biases)==null?void 0:k.length)||0)+" 个 ",3)]),((G=d.value.recommendations)==null?void 0:G.length)>0?(ue(),fe("div",VP,[E[14]||(E[14]=v("span",{class:"summary-label"},"建议:",-1)),v("div",HP,[(ue(!0),fe(mt,null,Bt(d.value.recommendations.slice(0,3),(ne,re)=>(ue(),fe("div",{key:re,class:"recommendation-item"},te(ne),1))),128))])])):nt("",!0)])])):nt("",!0)]),v("div",GP,[E[17]||(E[17]=v("h4",null,"假设推理",-1)),v("div",WP,[v("button",{onClick:x,disabled:a.value}," 生成假设 ",8,$P),f.value.length>0?(ue(),fe("div",XP,[(ue(!0),fe(mt,null,Bt(f.value,ne=>{var re,pe;return ue(),fe("div",{key:ne.hypothesis_id,class:"hypothesis-item"},[v("div",qP,[v("span",YP,te(ne.description),1),v("span",jP," 置信度: "+te((re=ne.confidence)==null?void 0:re.toFixed(2)),1),v("span",{class:pt(["hypothesis-status",(pe=ne.status)==null?void 0:pe.toLowerCase()])},te(L(ne.status)),3)]),v("div",KP,[v("button",{onClick:Ne=>w(ne),size:"small",disabled:c.value}," 测试 ",8,ZP)])])}),128))])):h.value?(ue(),fe("div",JP," 暂无假设 ")):nt("",!0)])])])}}}),e3=Sn(QP,[["__scopeId","data-v-7a4e23dd"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jf="183",t3=0,Yh=1,n3=2,Ba=1,i3=2,Jr=3,ls=0,xn=1,ai=2,Ui=0,pr=1,Mu=2,jh=3,Kh=4,s3=5,Ts=100,r3=101,o3=102,a3=103,l3=104,c3=200,u3=201,f3=202,d3=203,bu=204,Eu=205,h3=206,p3=207,m3=208,g3=209,_3=210,v3=211,x3=212,y3=213,S3=214,wu=0,Tu=1,Au=2,Mr=3,Ru=4,Cu=5,Pu=6,Lu=7,x_=0,M3=1,b3=2,mi=0,y_=1,S_=2,M_=3,b_=4,E_=5,w_=6,T_=7,A_=300,zs=301,br=302,_c=303,vc=304,Gl=306,Du=1e3,Ni=1001,Iu=1002,$t=1003,E3=1004,na=1005,tn=1006,xc=1007,Ls=1008,Fn=1009,R_=1010,C_=1011,To=1012,Kf=1013,vi=1014,ci=1015,Vi=1016,Zf=1017,Jf=1018,Ao=1020,P_=35902,L_=35899,D_=1021,I_=1022,Wn=1023,Hi=1026,Ds=1027,N_=1028,Qf=1029,Er=1030,ed=1031,td=1033,ka=33776,za=33777,Va=33778,Ha=33779,Nu=35840,Uu=35841,Fu=35842,Ou=35843,Bu=36196,ku=37492,zu=37496,Vu=37488,Hu=37489,Gu=37490,Wu=37491,$u=37808,Xu=37809,qu=37810,Yu=37811,ju=37812,Ku=37813,Zu=37814,Ju=37815,Qu=37816,ef=37817,tf=37818,nf=37819,sf=37820,rf=37821,of=36492,af=36494,lf=36495,cf=36283,uf=36284,ff=36285,df=36286,w3=3200,T3=0,A3=1,ss="",Nn="srgb",wr="srgb-linear",cl="linear",_t="srgb",Xs=7680,Zh=519,R3=512,C3=513,P3=514,nd=515,L3=516,D3=517,id=518,I3=519,Jh=35044,Qh="300 es",ui=2e3,ul=2001;function N3(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function U3(){const t=fl("canvas");return t.style.display="block",t}const ep={};function tp(...t){const e="THREE."+t.shift();console.log(e,...t)}function U_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function je(...t){t=U_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ft(...t){t=U_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function dl(...t){const e=t.join(" ");e in ep||(ep[e]=!0,je(...t))}function F3(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const O3={[wu]:Tu,[Au]:Pu,[Ru]:Lu,[Mr]:Cu,[Tu]:wu,[Pu]:Au,[Lu]:Ru,[Cu]:Mr};class Pr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let np=1234567;const fo=Math.PI/180,Ro=180/Math.PI;function Lr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function rt(t,e,n){return Math.max(e,Math.min(n,t))}function sd(t,e){return(t%e+e)%e}function B3(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function k3(t,e,n){return t!==e?(n-t)/(e-t):0}function ho(t,e,n){return(1-n)*t+n*e}function z3(t,e,n,i){return ho(t,e,1-Math.exp(-n*i))}function V3(t,e=1){return e-Math.abs(sd(t,e*2)-e)}function H3(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function G3(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function W3(t,e){return t+Math.floor(Math.random()*(e-t+1))}function $3(t,e){return t+Math.random()*(e-t)}function X3(t){return t*(.5-Math.random())}function q3(t){t!==void 0&&(np=t);let e=np+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y3(t){return t*fo}function j3(t){return t*Ro}function K3(t){return(t&t-1)===0&&t!==0}function Z3(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function J3(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Q3(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),c=o(n/2),l=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),h=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":t.set(a*u,c*d,c*f,a*l);break;case"YZY":t.set(c*f,a*u,c*d,a*l);break;case"ZXZ":t.set(c*d,c*f,a*u,a*l);break;case"XZX":t.set(a*u,c*g,c*h,a*l);break;case"YXY":t.set(c*h,a*u,c*g,a*l);break;case"ZYZ":t.set(c*g,c*h,a*u,a*l);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ar(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const zr={DEG2RAD:fo,RAD2DEG:Ro,generateUUID:Lr,clamp:rt,euclideanModulo:sd,mapLinear:B3,inverseLerp:k3,lerp:ho,damp:z3,pingpong:V3,smoothstep:H3,smootherstep:G3,randInt:W3,randFloat:$3,randFloatSpread:X3,seededRandom:q3,degToRad:Y3,radToDeg:j3,isPowerOfTwo:K3,ceilPowerOfTwo:Z3,floorPowerOfTwo:J3,setQuaternionFromProperEuler:Q3,normalize:rn,denormalize:ar};class ct{constructor(e=0,n=0){ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dr{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||c!==f||l!==h||u!==g){let p=c*f+l*h+u*g+d*_;p<0&&(f=-f,h=-h,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){const x=Math.acos(p),w=Math.sin(x);m=Math.sin(m*x)/w,a=Math.sin(a*x)/w,c=c*m+f*a,l=l*m+h*a,u=u*m+g*a,d=d*m+_*a}else{c=c*m+f*a,l=l*m+h*a,u=u*m+g*a,d=d*m+_*a;const x=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=x,l*=x,u*=x,d*=x}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return e[n]=a*g+u*d+c*h-l*f,e[n+1]=c*g+u*f+l*d-a*h,e[n+2]=l*g+u*h+a*f-c*d,e[n+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),f=c(i/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-n;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+o*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ip.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new $,ip=new Dr;class tt{constructor(e,n,i,s,r,o,a,c,l){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,c,l)}set(e,n,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=s[0],p=s[3],m=s[6],x=s[1],w=s[4],y=s[7],A=s[2],P=s[5],L=s[8];return r[0]=o*_+a*x+c*A,r[3]=o*p+a*w+c*P,r[6]=o*m+a*y+c*L,r[1]=l*_+u*x+d*A,r[4]=l*p+u*w+d*P,r[7]=l*m+u*y+d*L,r[2]=f*_+h*x+g*A,r[5]=f*p+h*w+g*P,r[8]=f*m+h*y+g*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*r,h=l*r-o*c,g=n*d+i*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*n-s*c)*_,e[5]=(s*r-a*n)*_,e[6]=h*_,e[7]=(i*c-l*n)*_,e[8]=(o*n-i*r)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Sc.makeScale(e,n)),this}rotate(e){return this.premultiply(Sc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Sc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sc=new tt,sp=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rp=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e2(){const t={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?cl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return dl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return dl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[wr]:{primaries:e,whitePoint:i,transfer:cl,toXYZ:sp,fromXYZ:rp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:sp,fromXYZ:rp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),t}const at=e2();function Fi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function mr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qs;class t2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qs===void 0&&(qs=fl("canvas")),qs.width=e.width,qs.height=e.height;const s=qs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=qs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fi(n[i]/255)*255):n[i]=Fi(n[i]);return{data:n,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let n2=0;class rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n2++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Mc(s[o].image)):r.push(Mc(s[o]))}else r=Mc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Mc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?t2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let i2=0;const bc=new $;class fn extends Pr{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Ni,s=Ni,r=tn,o=Ls,a=Wn,c=Fn,l=fn.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i2++}),this.uuid=Lr(),this.name="",this.source=new rd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bc).x}get height(){return this.source.getSize(bc).y}get depth(){return this.source.getSize(bc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){je(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){je(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Du:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Iu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Du:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Iu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=A_;fn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,s=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(l+1)/2,y=(h+1)/2,A=(m+1)/2,P=(u+f)/4,L=(d+_)/4,S=(g+p)/4;return w>y&&w>A?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=P/i,r=L/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=P/s,r=S/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=L/r,s=S/r),this.set(i,s,r,n),this}let x=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-_)/x,this.z=(f-u)/x,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this.w=rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this.w=rt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class s2 extends Pr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new fn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new rd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends s2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class F_ extends fn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class r2 extends fn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ct{constructor(e,n,i,s,r,o,a,c,l,u,d,f,h,g,_,p){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,c,l,u,d,f,h,g,_,p)}set(e,n,i,s,r,o,a,c,l,u,d,f,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Ys.setFromMatrixColumn(e,0).length(),r=1/Ys.setFromMatrixColumn(e,1).length(),o=1/Ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,_=a*d;n[0]=c*u,n[4]=-c*d,n[8]=l,n[1]=h+g*l,n[5]=f-_*l,n[9]=-a*c,n[2]=_-f*l,n[6]=g+h*l,n[10]=o*c}else if(e.order==="YXZ"){const f=c*u,h=c*d,g=l*u,_=l*d;n[0]=f+_*a,n[4]=g*a-h,n[8]=o*l,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=_+f*a,n[10]=o*c}else if(e.order==="ZXY"){const f=c*u,h=c*d,g=l*u,_=l*d;n[0]=f-_*a,n[4]=-o*d,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,_=a*d;n[0]=c*u,n[4]=g*l-h,n[8]=f*l+_,n[1]=c*d,n[5]=_*l+f,n[9]=h*l-g,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const f=o*c,h=o*l,g=a*c,_=a*l;n[0]=c*u,n[4]=_-f*d,n[8]=g*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=h*d+g,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*c,h=o*l,g=a*c,_=a*l;n[0]=c*u,n[4]=-d,n[8]=l*u,n[1]=f*d+_,n[5]=o*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=a*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o2,e,a2)}lookAt(e,n,i){const s=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),ji.crossVectors(i,bn),ji.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),ji.crossVectors(i,bn)),ji.normalize(),ia.crossVectors(bn,ji),s[0]=ji.x,s[4]=ia.x,s[8]=bn.x,s[1]=ji.y,s[5]=ia.y,s[9]=bn.y,s[2]=ji.z,s[6]=ia.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],p=i[10],m=i[14],x=i[3],w=i[7],y=i[11],A=i[15],P=s[0],L=s[4],S=s[8],E=s[12],U=s[1],D=s[5],F=s[9],V=s[13],X=s[2],N=s[6],M=s[10],T=s[14],k=s[3],G=s[7],ne=s[11],re=s[15];return r[0]=o*P+a*U+c*X+l*k,r[4]=o*L+a*D+c*N+l*G,r[8]=o*S+a*F+c*M+l*ne,r[12]=o*E+a*V+c*T+l*re,r[1]=u*P+d*U+f*X+h*k,r[5]=u*L+d*D+f*N+h*G,r[9]=u*S+d*F+f*M+h*ne,r[13]=u*E+d*V+f*T+h*re,r[2]=g*P+_*U+p*X+m*k,r[6]=g*L+_*D+p*N+m*G,r[10]=g*S+_*F+p*M+m*ne,r[14]=g*E+_*V+p*T+m*re,r[3]=x*P+w*U+y*X+A*k,r[7]=x*L+w*D+y*N+A*G,r[11]=x*S+w*F+y*M+A*ne,r[15]=x*E+w*V+y*T+A*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15],x=c*h-l*f,w=a*h-l*d,y=a*f-c*d,A=o*h-l*u,P=o*f-c*u,L=o*d-a*u;return n*(_*x-p*w+m*y)-i*(g*x-p*A+m*P)+s*(g*w-_*A+m*L)-r*(g*y-_*P+p*L)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],x=n*a-i*o,w=n*c-s*o,y=n*l-r*o,A=i*c-s*a,P=i*l-r*a,L=s*l-r*c,S=u*_-d*g,E=u*p-f*g,U=u*m-h*g,D=d*p-f*_,F=d*m-h*_,V=f*m-h*p,X=x*V-w*F+y*D+A*U-P*E+L*S;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/X;return e[0]=(a*V-c*F+l*D)*N,e[1]=(s*F-i*V-r*D)*N,e[2]=(_*L-p*P+m*A)*N,e[3]=(f*P-d*L-h*A)*N,e[4]=(c*U-o*V-l*E)*N,e[5]=(n*V-s*U+r*E)*N,e[6]=(p*y-g*L-m*w)*N,e[7]=(u*L-f*y+h*w)*N,e[8]=(o*F-a*U+l*S)*N,e[9]=(i*U-n*F-r*S)*N,e[10]=(g*P-_*y+m*x)*N,e[11]=(d*y-u*P-h*x)*N,e[12]=(a*E-o*D-c*S)*N,e[13]=(n*D-i*E+s*S)*N,e[14]=(_*w-g*A-p*x)*N,e[15]=(u*A-d*w+f*x)*N,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,u=o+o,d=a+a,f=r*l,h=r*u,g=r*d,_=o*u,p=o*d,m=a*d,x=c*l,w=c*u,y=c*d,A=i.x,P=i.y,L=i.z;return s[0]=(1-(_+m))*A,s[1]=(h+y)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(h-y)*P,s[5]=(1-(f+m))*P,s[6]=(p+x)*P,s[7]=0,s[8]=(g+w)*L,s[9]=(p-x)*L,s[10]=(1-(f+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Ys.set(s[0],s[1],s[2]).length();const a=Ys.set(s[4],s[5],s[6]).length(),c=Ys.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Bn.copy(this);const l=1/o,u=1/a,d=1/c;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,n.setFromRotationMatrix(Bn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,n,i,s,r,o,a=ui,c=!1){const l=this.elements,u=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===ui)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ul)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=ui,c=!1){const l=this.elements,u=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),h=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===ui)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===ul)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ys=new $,Bn=new Ct,o2=new $(0,0,0),a2=new $(1,1,1),ji=new $,ia=new $,bn=new $,op=new Ct,ap=new Dr;class Gi{constructor(e=0,n=0,i=0,s=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(op,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ap.setFromEuler(this),this.setFromQuaternion(ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class O_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l2=0;const lp=new $,js=new Dr,wi=new Ct,sa=new $,Vr=new $,c2=new $,u2=new Dr,cp=new $(1,0,0),up=new $(0,1,0),fp=new $(0,0,1),dp={type:"added"},f2={type:"removed"},Ks={type:"childadded",child:null},Ec={type:"childremoved",child:null};class dn extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l2++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new $,n=new Gi,i=new Dr,s=new $(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new tt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new O_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return js.setFromAxisAngle(e,n),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,n){return js.setFromAxisAngle(e,n),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(cp,e)}rotateY(e){return this.rotateOnAxis(up,e)}rotateZ(e){return this.rotateOnAxis(fp,e)}translateOnAxis(e,n){return lp.copy(e).applyQuaternion(this.quaternion),this.position.add(lp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(cp,e)}translateY(e){return this.translateOnAxis(up,e)}translateZ(e){return this.translateOnAxis(fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?sa.copy(e):sa.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Vr,sa,this.up):wi.lookAt(sa,Vr,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(wi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dp),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(f2),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dp),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,c2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,u2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}dn.DEFAULT_UP=new $(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qr extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d2={type:"move"};class wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d2)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const B_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Tc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=at.workingColorSpace){if(e=sd(e,1),n=rt(n,0,1),i=rt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Tc(o,r,e+1/3),this.g=Tc(o,r,e),this.b=Tc(o,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,n=Nn){function i(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=B_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return at.workingToColorSpace(Yt.copy(this),e),Math.round(rt(Yt.r*255,0,255))*65536+Math.round(rt(Yt.g*255,0,255))*256+Math.round(rt(Yt.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.workingToColorSpace(Yt.copy(this),n);const i=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=at.workingColorSpace){return at.workingToColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Nn){at.workingToColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,s=Yt.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+n,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ki),e.getHSL(ra);const i=ho(Ki.h,ra.h,n),s=ho(Ki.s,ra.s,n),r=ho(Ki.l,ra.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new lt;lt.NAMES=B_;class h2 extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const kn=new $,Ti=new $,Ac=new $,Ai=new $,Zs=new $,Js=new $,hp=new $,Rc=new $,Cc=new $,Pc=new $,Lc=new Nt,Dc=new Nt,Ic=new Nt;class Gn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),kn.subVectors(e,n),s.cross(kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){kn.subVectors(s,n),Ti.subVectors(i,n),Ac.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(Ti),c=kn.dot(Ac),l=Ti.dot(Ti),u=Ti.dot(Ac),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-h-g,g,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,s,r,o,a,c){return this.getBarycoord(e,n,i,s,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ai.x),c.addScaledVector(o,Ai.y),c.addScaledVector(a,Ai.z),c)}static getInterpolatedAttribute(e,n,i,s,r,o){return Lc.setScalar(0),Dc.setScalar(0),Ic.setScalar(0),Lc.fromBufferAttribute(e,n),Dc.fromBufferAttribute(e,i),Ic.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Lc,r.x),o.addScaledVector(Dc,r.y),o.addScaledVector(Ic,r.z),o}static isFrontFacing(e,n,i,s){return kn.subVectors(i,n),Ti.subVectors(e,n),kn.cross(Ti).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),kn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Zs.subVectors(s,i),Js.subVectors(r,i),Rc.subVectors(e,i);const c=Zs.dot(Rc),l=Js.dot(Rc);if(c<=0&&l<=0)return n.copy(i);Cc.subVectors(e,s);const u=Zs.dot(Cc),d=Js.dot(Cc);if(u>=0&&d<=u)return n.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(Zs,o);Pc.subVectors(e,r);const h=Zs.dot(Pc),g=Js.dot(Pc);if(g>=0&&h<=g)return n.copy(r);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),n.copy(i).addScaledVector(Js,a);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return hp.subVectors(r,s),a=(d-u)/(d-u+(h-g)),n.copy(s).addScaledVector(hp,a);const m=1/(p+_+f);return o=_*m,a=f*m,n.copy(i).addScaledVector(Zs,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ho{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oa.copy(i.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),aa.subVectors(this.max,Hr),Qs.subVectors(e.a,Hr),er.subVectors(e.b,Hr),tr.subVectors(e.c,Hr),Zi.subVectors(er,Qs),Ji.subVectors(tr,er),gs.subVectors(Qs,tr);let n=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-gs.z,gs.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,gs.z,0,-gs.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-gs.y,gs.x,0];return!Nc(n,Qs,er,tr,aa)||(n=[1,0,0,0,1,0,0,0,1],!Nc(n,Qs,er,tr,aa))?!1:(la.crossVectors(Zi,Ji),n=[la.x,la.y,la.z],Nc(n,Qs,er,tr,aa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new $,new $,new $,new $,new $,new $,new $,new $],zn=new $,oa=new Ho,Qs=new $,er=new $,tr=new $,Zi=new $,Ji=new $,gs=new $,Hr=new $,aa=new $,la=new $,_s=new $;function Nc(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){_s.fromArray(t,r);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),c=e.dot(_s),l=n.dot(_s),u=i.dot(_s);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ft=new $,ca=new ct;let p2=0;class Rn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Jh,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ca.fromBufferAttribute(this,n),ca.applyMatrix3(e),this.setXY(n,ca.x,ca.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ar(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ar(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ar(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ar(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ar(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jh&&(e.usage=this.usage),e}}class k_ extends Rn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class z_ extends Rn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ot extends Rn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const m2=new Ho,Gr=new $,Uc=new $;class Go{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):m2.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const n=Gr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(Uc)),this.expandByPoint(Gr.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let g2=0;const In=new Ct,Fc=new dn,nr=new $,En=new Ho,Wr=new Ho,Gt=new $;class nn extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g2++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N3(e)?z_:k_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ot(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(En.min,Wr.min),En.expandByPoint(Gt),Gt.addVectors(En.max,Wr.max),En.expandByPoint(Gt)):(En.expandByPoint(Wr.min),En.expandByPoint(Wr.max))}En.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Gt.fromBufferAttribute(a,l),c&&(nr.fromBufferAttribute(e,l),Gt.add(nr)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let S=0;S<i.count;S++)a[S]=new $,c[S]=new $;const l=new $,u=new $,d=new $,f=new ct,h=new ct,g=new ct,_=new $,p=new $;function m(S,E,U){l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,U),f.fromBufferAttribute(r,S),h.fromBufferAttribute(r,E),g.fromBufferAttribute(r,U),u.sub(l),d.sub(l),h.sub(f),g.sub(f);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[S].add(_),a[E].add(_),a[U].add(_),c[S].add(p),c[E].add(p),c[U].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,E=x.length;S<E;++S){const U=x[S],D=U.start,F=U.count;for(let V=D,X=D+F;V<X;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const w=new $,y=new $,A=new $,P=new $;function L(S){A.fromBufferAttribute(s,S),P.copy(A);const E=a[S];w.copy(E),w.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(P,E);const D=y.dot(c[S])<0?-1:1;o.setXYZW(S,w.x,w.y,w.z,D)}for(let S=0,E=x.length;S<E;++S){const U=x[S],D=U.start,F=U.count;for(let V=D,X=D+F;V<X;V+=3)L(e.getX(V+0)),L(e.getX(V+1)),L(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new $,r=new $,o=new $,a=new $,c=new $,l=new $,u=new $,d=new $;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let h=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?h=c[_]*a.data.stride+a.offset:h=c[_]*u;for(let m=0;m<u;m++)f[g++]=l[h++]}return new Rn(f,u,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new nn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);n.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=e(f,i);c.push(h)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(n))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _2=0;class Ir extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_2++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=pr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=Eu,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){je(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){je(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bu&&(i.blendSrc=this.blendSrc),this.blendDst!==Eu&&(i.blendDst=this.blendDst),this.blendEquation!==Ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new $,Oc=new $,ua=new $,Qi=new $,Bc=new $,fa=new $,kc=new $;class od{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Oc.copy(e).add(n).multiplyScalar(.5),ua.copy(n).sub(e).normalize(),Qi.copy(this.origin).sub(Oc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(ua),a=Qi.dot(this.direction),c=-Qi.dot(ua),l=Qi.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Oc).addScaledVector(ua,f),h}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,s,r){Bc.subVectors(n,e),fa.subVectors(i,e),kc.crossVectors(Bc,fa);let o=this.direction.dot(kc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const c=a*this.direction.dot(fa.crossVectors(Qi,fa));if(c<0)return null;const l=a*this.direction.dot(Bc.cross(Qi));if(l<0||c+l>o)return null;const u=-a*Qi.dot(kc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class As extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=x_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pp=new Ct,vs=new od,da=new Go,mp=new $,ha=new $,pa=new $,ma=new $,zc=new $,ga=new $,gp=new $,_a=new $;class Kt extends dn{constructor(e=new nn,n=new As){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ga.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(zc.fromBufferAttribute(d,e),o?ga.addScaledVector(zc,u):ga.addScaledVector(zc.sub(n),u))}n.add(ga)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(da.containsPoint(vs.origin)===!1&&(vs.intersectSphere(da,mp)===null||vs.origin.distanceToSquared(mp)>(e.far-e.near)**2))&&(pp.copy(r).invert(),vs.copy(e.ray).applyMatrix4(pp),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vs)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],x=Math.max(p.start,h.start),w=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let y=x,A=w;y<A;y+=3){const P=a.getX(y),L=a.getX(y+1),S=a.getX(y+2);s=va(this,m,e,i,l,u,d,P,L,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),w=a.getX(p+1),y=a.getX(p+2);s=va(this,o,e,i,l,u,d,x,w,y),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],x=Math.max(p.start,h.start),w=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let y=x,A=w;y<A;y+=3){const P=y,L=y+1,S=y+2;s=va(this,m,e,i,l,u,d,P,L,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const x=p,w=p+1,y=p+2;s=va(this,o,e,i,l,u,d,x,w,y),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}}}function v2(t,e,n,i,s,r,o,a){let c;if(e.side===xn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ls,a),c===null)return null;_a.copy(a),_a.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(_a);return l<n.near||l>n.far?null:{distance:l,point:_a.clone(),object:t}}function va(t,e,n,i,s,r,o,a,c,l){t.getVertexPosition(a,ha),t.getVertexPosition(c,pa),t.getVertexPosition(l,ma);const u=v2(t,e,n,i,ha,pa,ma,gp);if(u){const d=new $;Gn.getBarycoord(gp,ha,pa,ma,d),s&&(u.uv=Gn.getInterpolatedAttribute(s,a,c,l,d,new ct)),r&&(u.uv1=Gn.getInterpolatedAttribute(r,a,c,l,d,new ct)),o&&(u.normal=Gn.getInterpolatedAttribute(o,a,c,l,d,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new $,materialIndex:0};Gn.getNormal(ha,pa,ma,f.normal),u.face=f,u.barycoord=d}return u}class x2 extends fn{constructor(e=null,n=1,i=1,s,r,o,a,c,l=$t,u=$t,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vc=new $,y2=new $,S2=new tt;class bs{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Vc.subVectors(i,n).cross(y2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Vc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||S2.getNormalMatrix(e),s=this.coplanarPoint(Vc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Go,M2=new ct(.5,.5),xa=new $;class V_{constructor(e=new bs,n=new bs,i=new bs,s=new bs,r=new bs,o=new bs){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],h=r[7],g=r[8],_=r[9],p=r[10],m=r[11],x=r[12],w=r[13],y=r[14],A=r[15];if(s[0].setComponents(l-o,h-u,m-g,A-x).normalize(),s[1].setComponents(l+o,h+u,m+g,A+x).normalize(),s[2].setComponents(l+a,h+d,m+_,A+w).normalize(),s[3].setComponents(l-a,h-d,m-_,A-w).normalize(),i)s[4].setComponents(c,f,p,y).normalize(),s[5].setComponents(l-c,h-f,m-p,A-y).normalize();else if(s[4].setComponents(l-c,h-f,m-p,A-y).normalize(),n===ui)s[5].setComponents(l+c,h+f,m+p,A+y).normalize();else if(n===ul)s[5].setComponents(c,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const n=M2.distanceTo(e.center);return xs.radius=.7071067811865476+n,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(xa.x=s.normal.x>0?e.max.x:e.min.x,xa.y=s.normal.y>0?e.max.y:e.min.y,xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hf extends Ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hl=new $,pl=new $,_p=new Ct,$r=new od,ya=new Go,Hc=new $,vp=new $;class H_ extends dn{constructor(e=new nn,n=new hf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)hl.fromBufferAttribute(n,s-1),pl.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=hl.distanceTo(pl);e.setAttribute("lineDistance",new Ot(i,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;_p.copy(s).invert(),$r.copy(e.ray).applyMatrix4(_p);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,p=g-1;_<p;_+=l){const m=u.getX(_),x=u.getX(_+1),w=Sa(this,e,$r,c,m,x,_);w&&n.push(w)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(h),m=Sa(this,e,$r,c,_,p,g-1);m&&n.push(m)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=h,p=g-1;_<p;_+=l){const m=Sa(this,e,$r,c,_,_+1,_);m&&n.push(m)}if(this.isLineLoop){const _=Sa(this,e,$r,c,g-1,h,g-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sa(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(hl.fromBufferAttribute(a,s),pl.fromBufferAttribute(a,r),n.distanceSqToSegment(hl,pl,Hc,vp)>i)return;Hc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Hc);if(!(l<e.near||l>e.far))return{distance:l,point:vp.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const xp=new $,yp=new $;class b2 extends H_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)xp.fromBufferAttribute(n,s),yp.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+xp.distanceTo(yp);e.setAttribute("lineDistance",new Ot(i,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class E2 extends Ir{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sp=new Ct,pf=new od,Ma=new Go,ba=new $;class Mp extends dn{constructor(e=new nn,n=new E2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(s),Ma.radius+=r,e.ray.intersectsSphere(Ma)===!1)return;Sp.copy(s).invert(),pf.copy(e.ray).applyMatrix4(Sp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,_=h;g<_;g++){const p=l.getX(g);ba.fromBufferAttribute(d,p),bp(ba,p,c,s,e,n,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,_=h;g<_;g++)ba.fromBufferAttribute(d,g),bp(ba,g,c,s,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bp(t,e,n,i,s,r,o){const a=pf.distanceSqToPoint(t);if(a<n){const c=new $;pf.closestPointToPoint(t,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class G_ extends fn{constructor(e=[],n=zs,i,s,r,o,a,c,l,u){super(e,n,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Co extends fn{constructor(e,n,i=vi,s,r,o,a=$t,c=$t,l,u=Hi,d=1){if(u!==Hi&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class w2 extends Co{constructor(e,n=vi,i=zs,s,r,o=$t,a=$t,c,l=Hi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class W_ extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wo extends nn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(d,2));function g(_,p,m,x,w,y,A,P,L,S,E){const U=y/L,D=A/S,F=y/2,V=A/2,X=P/2,N=L+1,M=S+1;let T=0,k=0;const G=new $;for(let ne=0;ne<M;ne++){const re=ne*D-V;for(let pe=0;pe<N;pe++){const Ne=pe*U-F;G[_]=Ne*x,G[p]=re*w,G[m]=X,l.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[m]=P>0?1:-1,u.push(G.x,G.y,G.z),d.push(pe/L),d.push(1-ne/S),T+=1}}for(let ne=0;ne<S;ne++)for(let re=0;re<L;re++){const pe=f+re+N*ne,Ne=f+re+N*(ne+1),We=f+(re+1)+N*(ne+1),qe=f+(re+1)+N*ne;c.push(pe,Ne,qe),c.push(Ne,We,qe),k+=6}a.addGroup(h,k,E),h+=k,f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ad extends nn{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(r.slice(),3)),this.setAttribute("uv",new Ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const w=new $,y=new $,A=new $;for(let P=0;P<n.length;P+=3)h(n[P+0],w),h(n[P+1],y),h(n[P+2],A),c(w,y,A,x)}function c(x,w,y,A){const P=A+1,L=[];for(let S=0;S<=P;S++){L[S]=[];const E=x.clone().lerp(y,S/P),U=w.clone().lerp(y,S/P),D=P-S;for(let F=0;F<=D;F++)F===0&&S===P?L[S][F]=E:L[S][F]=E.clone().lerp(U,F/D)}for(let S=0;S<P;S++)for(let E=0;E<2*(P-S)-1;E++){const U=Math.floor(E/2);E%2===0?(f(L[S][U+1]),f(L[S+1][U]),f(L[S][U])):(f(L[S][U+1]),f(L[S+1][U+1]),f(L[S+1][U]))}}function l(x){const w=new $;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(x),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function u(){const x=new $;for(let w=0;w<r.length;w+=3){x.x=r[w+0],x.y=r[w+1],x.z=r[w+2];const y=p(x)/2/Math.PI+.5,A=m(x)/Math.PI+.5;o.push(y,1-A)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){const w=o[x+0],y=o[x+2],A=o[x+4],P=Math.max(w,y,A),L=Math.min(w,y,A);P>.9&&L<.1&&(w<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function h(x,w){const y=x*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){const x=new $,w=new $,y=new $,A=new $,P=new ct,L=new ct,S=new ct;for(let E=0,U=0;E<r.length;E+=9,U+=6){x.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),P.set(o[U+0],o[U+1]),L.set(o[U+2],o[U+3]),S.set(o[U+4],o[U+5]),A.copy(x).add(w).add(y).divideScalar(3);const D=p(A);_(P,U+0,x,D),_(L,U+2,w,D),_(S,U+4,y,D)}}function _(x,w,y,A){A<0&&x.x===1&&(o[w]=x.x-1),y.x===0&&y.z===0&&(o[w]=A/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ad(e.vertices,e.indices,e.radius,e.detail)}}class T2{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let s=0;const r=i.length;let o;n?o=n:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=n||(o.isVector2?new ct:new $);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new $,s=[],r=[],o=[],a=new $,c=new Ct;for(let h=0;h<=e;h++){const g=h/e;s[h]=this.getTangentAt(g,new $)}r[0]=new $,o[0]=new $;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(n===!0){let h=Math.acos(rt(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function A2(t,e){const n=1-t;return n*n*e}function R2(t,e){return 2*(1-t)*t*e}function C2(t,e){return t*t*e}function Gc(t,e,n,i){return A2(t,e)+R2(t,n)+C2(t,i)}class P2 extends T2{constructor(e=new $,n=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new $){const i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Gc(e,s.x,r.x,o.x),Gc(e,s.y,r.y,o.y),Gc(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ml extends ad{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ml(e.radius,e.detail)}}class Wl extends nn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,f=n/c,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const x=m*f-o;for(let w=0;w<l;w++){const y=w*d-r;g.push(y,-x,0),_.push(0,0,1),p.push(w/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){const w=x+l*m,y=x+l*(m+1),A=x+1+l*(m+1),P=x+1+l*m;h.push(w,y,P),h.push(y,A,P)}this.setIndex(h),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ld extends nn{constructor(e=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=e;const f=(n-e)/s,h=new $,g=new ct;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){const m=r+p/i*o;h.x=d*Math.cos(m),h.y=d*Math.sin(m),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/n+1)/2,g.y=(h.y/n+1)/2,u.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){const p=_*(i+1);for(let m=0;m<i;m++){const x=m+p,w=x,y=x+i+1,A=x+i+2,P=x+1;a.push(w,y,P),a.push(y,A,P)}}this.setIndex(a),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(l,3)),this.setAttribute("uv",new Ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ld(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gl extends nn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new $,f=new $,h=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const x=[],w=m/i;let y=0;m===0&&o===0?y=.5/n:m===i&&c===Math.PI&&(y=-.5/n);for(let A=0;A<=n;A++){const P=A/n;d.x=-e*Math.cos(s+P*r)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(s+P*r)*Math.sin(o+w*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(P+y,1-w),x.push(l++)}u.push(x)}for(let m=0;m<i;m++)for(let x=0;x<n;x++){const w=u[m][x+1],y=u[m][x],A=u[m+1][x],P=u[m+1][x+1];(m!==0||o>0)&&h.push(w,y,P),(m!==i-1||c<Math.PI)&&h.push(y,A,P)}this.setIndex(h),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Tr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=Tr(t[n]);for(const s in i)e[s]=i[s]}return e}function L2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const D2={clone:Tr,merge:on};var I2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I2,this.fragmentShader=N2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=L2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class U2 extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class F2 extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O2 extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ea=new $,wa=new Dr,Qn=new $;class X_ extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ea,wa,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,wa,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Ea,wa,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,wa,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const es=new $,Ep=new ct,wp=new ct;class Un extends X_{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ro*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,n){return this.getViewBounds(e,Ep,wp),n.subVectors(wp,Ep)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fo*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class q_ extends X_{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ir=-90,sr=1;class B2 extends dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Un(ir,sr,e,n);s.layers=this.layers,this.add(s);const r=new Un(ir,sr,e,n);r.layers=this.layers,this.add(r);const o=new Un(ir,sr,e,n);o.layers=this.layers,this.add(o);const a=new Un(ir,sr,e,n);a.layers=this.layers,this.add(a);const c=new Un(ir,sr,e,n);c.layers=this.layers,this.add(c);const l=new Un(ir,sr,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,c]=n;for(const l of n)this.remove(l);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class k2 extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Tp(t,e,n,i){const s=z2(i);switch(n){case D_:return t*e;case N_:return t*e/s.components*s.byteLength;case Qf:return t*e/s.components*s.byteLength;case Er:return t*e*2/s.components*s.byteLength;case ed:return t*e*2/s.components*s.byteLength;case I_:return t*e*3/s.components*s.byteLength;case Wn:return t*e*4/s.components*s.byteLength;case td:return t*e*4/s.components*s.byteLength;case ka:case za:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Va:case Ha:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uu:case Ou:return Math.max(t,16)*Math.max(e,8)/4;case Nu:case Fu:return Math.max(t,8)*Math.max(e,8)/2;case Bu:case ku:case Vu:case Hu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zu:case Gu:case Wu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $u:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case qu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ju:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ju:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Qu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ef:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case tf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case nf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case sf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case rf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case of:case af:case lf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case cf:case uf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ff:case df:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function z2(t){switch(t){case Fn:case R_:return{byteLength:1,components:1};case To:case C_:case Vi:return{byteLength:2,components:1};case Zf:case Jf:return{byteLength:2,components:4};case vi:case Kf:case ci:return{byteLength:4,components:1};case P_:case L_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jf}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Y_(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function V2(t){const e=new WeakMap;function n(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=t.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=t.SHORT;else if(l instanceof Uint32Array)h=t.UNSIGNED_INT;else if(l instanceof Int32Array)h=t.INT;else if(l instanceof Int8Array)h=t.BYTE;else if(l instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(t.bindBuffer(l,a),d.length===0)t.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];t.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var H2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G2=`#ifdef USE_ALPHAHASH
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
#endif`,W2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y2=`#ifdef USE_AOMAP
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
#endif`,j2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K2=`#ifdef USE_BATCHING
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
#endif`,Z2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eL=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tL=`#ifdef USE_IRIDESCENCE
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
#endif`,nL=`#ifdef USE_BUMPMAP
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
#endif`,iL=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fL=`#define PI 3.141592653589793
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
} // validated`,dL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hL=`vec3 transformedNormal = objectNormal;
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
#endif`,pL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_L=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vL="gl_FragColor = linearToOutputTexel( gl_FragColor );",xL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yL=`#ifdef USE_ENVMAP
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
#endif`,SL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ML=`#ifdef USE_ENVMAP
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
#endif`,bL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EL=`#ifdef USE_ENVMAP
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
#endif`,wL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CL=`#ifdef USE_GRADIENTMAP
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
}`,PL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IL=`uniform bool receiveShadow;
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
#endif`,NL=`#ifdef USE_ENVMAP
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
#endif`,UL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kL=`PhysicalMaterial material;
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
#endif`,zL=`uniform sampler2D dfgLUT;
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
}`,VL=`
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
#endif`,HL=`#if defined( RE_IndirectDiffuse )
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
#endif`,GL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$L=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZL=`#if defined( USE_POINTS_UV )
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
#endif`,JL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iD=`#ifdef USE_MORPHTARGETS
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
#endif`,sD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oD=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uD=`#ifdef USE_NORMALMAP
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
#endif`,fD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gD=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_D=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ED=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TD=`float getShadowMask() {
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
}`,AD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RD=`#ifdef USE_SKINNING
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
#endif`,CD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PD=`#ifdef USE_SKINNING
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
#endif`,LD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ID=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ND=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UD=`#ifdef USE_TRANSMISSION
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
#endif`,FD=`#ifdef USE_TRANSMISSION
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
#endif`,OD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HD=`uniform sampler2D t2D;
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
}`,GD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$D=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qD=`#include <common>
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
}`,YD=`#if DEPTH_PACKING == 3200
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
}`,jD=`#define DISTANCE
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
}`,KD=`#define DISTANCE
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
}`,ZD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QD=`uniform float scale;
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
}`,eI=`uniform vec3 diffuse;
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
}`,tI=`#include <common>
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
}`,nI=`uniform vec3 diffuse;
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
}`,iI=`#define LAMBERT
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
}`,sI=`#define LAMBERT
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
}`,rI=`#define MATCAP
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
}`,oI=`#define MATCAP
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
}`,aI=`#define NORMAL
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
}`,lI=`#define NORMAL
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
}`,cI=`#define PHONG
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
}`,uI=`#define PHONG
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
}`,fI=`#define STANDARD
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
}`,dI=`#define STANDARD
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
}`,hI=`#define TOON
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
}`,pI=`#define TOON
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
}`,mI=`uniform float size;
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
}`,gI=`uniform vec3 diffuse;
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
}`,_I=`#include <common>
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
}`,vI=`uniform vec3 color;
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
}`,xI=`uniform float rotation;
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
}`,yI=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:H2,alphahash_pars_fragment:G2,alphamap_fragment:W2,alphamap_pars_fragment:$2,alphatest_fragment:X2,alphatest_pars_fragment:q2,aomap_fragment:Y2,aomap_pars_fragment:j2,batching_pars_vertex:K2,batching_vertex:Z2,begin_vertex:J2,beginnormal_vertex:Q2,bsdfs:eL,iridescence_fragment:tL,bumpmap_pars_fragment:nL,clipping_planes_fragment:iL,clipping_planes_pars_fragment:sL,clipping_planes_pars_vertex:rL,clipping_planes_vertex:oL,color_fragment:aL,color_pars_fragment:lL,color_pars_vertex:cL,color_vertex:uL,common:fL,cube_uv_reflection_fragment:dL,defaultnormal_vertex:hL,displacementmap_pars_vertex:pL,displacementmap_vertex:mL,emissivemap_fragment:gL,emissivemap_pars_fragment:_L,colorspace_fragment:vL,colorspace_pars_fragment:xL,envmap_fragment:yL,envmap_common_pars_fragment:SL,envmap_pars_fragment:ML,envmap_pars_vertex:bL,envmap_physical_pars_fragment:NL,envmap_vertex:EL,fog_vertex:wL,fog_pars_vertex:TL,fog_fragment:AL,fog_pars_fragment:RL,gradientmap_pars_fragment:CL,lightmap_pars_fragment:PL,lights_lambert_fragment:LL,lights_lambert_pars_fragment:DL,lights_pars_begin:IL,lights_toon_fragment:UL,lights_toon_pars_fragment:FL,lights_phong_fragment:OL,lights_phong_pars_fragment:BL,lights_physical_fragment:kL,lights_physical_pars_fragment:zL,lights_fragment_begin:VL,lights_fragment_maps:HL,lights_fragment_end:GL,logdepthbuf_fragment:WL,logdepthbuf_pars_fragment:$L,logdepthbuf_pars_vertex:XL,logdepthbuf_vertex:qL,map_fragment:YL,map_pars_fragment:jL,map_particle_fragment:KL,map_particle_pars_fragment:ZL,metalnessmap_fragment:JL,metalnessmap_pars_fragment:QL,morphinstance_vertex:eD,morphcolor_vertex:tD,morphnormal_vertex:nD,morphtarget_pars_vertex:iD,morphtarget_vertex:sD,normal_fragment_begin:rD,normal_fragment_maps:oD,normal_pars_fragment:aD,normal_pars_vertex:lD,normal_vertex:cD,normalmap_pars_fragment:uD,clearcoat_normal_fragment_begin:fD,clearcoat_normal_fragment_maps:dD,clearcoat_pars_fragment:hD,iridescence_pars_fragment:pD,opaque_fragment:mD,packing:gD,premultiplied_alpha_fragment:_D,project_vertex:vD,dithering_fragment:xD,dithering_pars_fragment:yD,roughnessmap_fragment:SD,roughnessmap_pars_fragment:MD,shadowmap_pars_fragment:bD,shadowmap_pars_vertex:ED,shadowmap_vertex:wD,shadowmask_pars_fragment:TD,skinbase_vertex:AD,skinning_pars_vertex:RD,skinning_vertex:CD,skinnormal_vertex:PD,specularmap_fragment:LD,specularmap_pars_fragment:DD,tonemapping_fragment:ID,tonemapping_pars_fragment:ND,transmission_fragment:UD,transmission_pars_fragment:FD,uv_pars_fragment:OD,uv_pars_vertex:BD,uv_vertex:kD,worldpos_vertex:zD,background_vert:VD,background_frag:HD,backgroundCube_vert:GD,backgroundCube_frag:WD,cube_vert:$D,cube_frag:XD,depth_vert:qD,depth_frag:YD,distance_vert:jD,distance_frag:KD,equirect_vert:ZD,equirect_frag:JD,linedashed_vert:QD,linedashed_frag:eI,meshbasic_vert:tI,meshbasic_frag:nI,meshlambert_vert:iI,meshlambert_frag:sI,meshmatcap_vert:rI,meshmatcap_frag:oI,meshnormal_vert:aI,meshnormal_frag:lI,meshphong_vert:cI,meshphong_frag:uI,meshphysical_vert:fI,meshphysical_frag:dI,meshtoon_vert:hI,meshtoon_frag:pI,points_vert:mI,points_frag:gI,shadow_vert:_I,shadow_frag:vI,sprite_vert:xI,sprite_frag:yI},Re={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ri={basic:{uniforms:on([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:on([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:on([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:on([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:on([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new lt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:on([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:on([Re.points,Re.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:on([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:on([Re.common,Re.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:on([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:on([Re.sprite,Re.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:on([Re.common,Re.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:on([Re.lights,Re.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ri.physical={uniforms:on([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Ta={r:0,b:0,g:0},ys=new Gi,SI=new Ct;function MI(t,e,n,i,s,r){const o=new lt(0);let a=s===!0?0:1,c,l,u=null,d=0,f=null;function h(x){let w=x.isScene===!0?x.background:null;if(w&&w.isTexture){const y=x.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(x){let w=!1;const y=h(x);y===null?p(o,a):y&&y.isColor&&(p(y,1),w=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(x,w){const y=h(w);y&&(y.isCubeTexture||y.mapping===Gl)?(l===void 0&&(l=new Kt(new Wo(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Tr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),ys.copy(w.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(SI.makeRotationFromEuler(ys)),l.material.toneMapped=at.getTransfer(y.colorSpace)!==_t,(u!==y||d!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Kt(new Wl(2,2),new Cn({name:"BackgroundMaterial",uniforms:Tr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=at.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,w){x.getRGB(Ta,$_(t)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,w,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,w=1){o.set(x),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:g,addToRenderList:_,dispose:m}}function bI(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(D,F,V,X,N){let M=!1;const T=d(D,X,V,F);r!==T&&(r=T,l(r.object)),M=h(D,X,V,N),M&&g(D,X,V,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(M||o)&&(o=!1,y(D,F,V,X),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return t.createVertexArray()}function l(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function d(D,F,V,X){const N=X.wireframe===!0;let M=i[F.id];M===void 0&&(M={},i[F.id]=M);const T=D.isInstancedMesh===!0?D.id:0;let k=M[T];k===void 0&&(k={},M[T]=k);let G=k[V.id];G===void 0&&(G={},k[V.id]=G);let ne=G[N];return ne===void 0&&(ne=f(c()),G[N]=ne),ne}function f(D){const F=[],V=[],X=[];for(let N=0;N<n;N++)F[N]=0,V[N]=0,X[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:X,object:D,attributes:{},index:null}}function h(D,F,V,X){const N=r.attributes,M=F.attributes;let T=0;const k=V.getAttributes();for(const G in k)if(k[G].location>=0){const re=N[G];let pe=M[G];if(pe===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),re===void 0||re.attribute!==pe||pe&&re.data!==pe.data)return!0;T++}return r.attributesNum!==T||r.index!==X}function g(D,F,V,X){const N={},M=F.attributes;let T=0;const k=V.getAttributes();for(const G in k)if(k[G].location>=0){let re=M[G];re===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));const pe={};pe.attribute=re,re&&re.data&&(pe.data=re.data),N[G]=pe,T++}r.attributes=N,r.attributesNum=T,r.index=X}function _(){const D=r.newAttributes;for(let F=0,V=D.length;F<V;F++)D[F]=0}function p(D){m(D,0)}function m(D,F){const V=r.newAttributes,X=r.enabledAttributes,N=r.attributeDivisors;V[D]=1,X[D]===0&&(t.enableVertexAttribArray(D),X[D]=1),N[D]!==F&&(t.vertexAttribDivisor(D,F),N[D]=F)}function x(){const D=r.newAttributes,F=r.enabledAttributes;for(let V=0,X=F.length;V<X;V++)F[V]!==D[V]&&(t.disableVertexAttribArray(V),F[V]=0)}function w(D,F,V,X,N,M,T){T===!0?t.vertexAttribIPointer(D,F,V,N,M):t.vertexAttribPointer(D,F,V,X,N,M)}function y(D,F,V,X){_();const N=X.attributes,M=V.getAttributes(),T=F.defaultAttributeValues;for(const k in M){const G=M[k];if(G.location>=0){let ne=N[k];if(ne===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){const re=ne.normalized,pe=ne.itemSize,Ne=e.get(ne);if(Ne===void 0)continue;const We=Ne.buffer,qe=Ne.type,se=Ne.bytesPerElement,_e=qe===t.INT||qe===t.UNSIGNED_INT||ne.gpuType===Kf;if(ne.isInterleavedBufferAttribute){const ve=ne.data,Ye=ve.stride,Ve=ne.offset;if(ve.isInstancedInterleavedBuffer){for(let $e=0;$e<G.locationSize;$e++)m(G.location+$e,ve.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let $e=0;$e<G.locationSize;$e++)p(G.location+$e);t.bindBuffer(t.ARRAY_BUFFER,We);for(let $e=0;$e<G.locationSize;$e++)w(G.location+$e,pe/G.locationSize,qe,re,Ye*se,(Ve+pe/G.locationSize*$e)*se,_e)}else{if(ne.isInstancedBufferAttribute){for(let ve=0;ve<G.locationSize;ve++)m(G.location+ve,ne.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ve=0;ve<G.locationSize;ve++)p(G.location+ve);t.bindBuffer(t.ARRAY_BUFFER,We);for(let ve=0;ve<G.locationSize;ve++)w(G.location+ve,pe/G.locationSize,qe,re,pe*se,pe/G.locationSize*ve*se,_e)}}else if(T!==void 0){const re=T[k];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(G.location,re);break;case 3:t.vertexAttrib3fv(G.location,re);break;case 4:t.vertexAttrib4fv(G.location,re);break;default:t.vertexAttrib1fv(G.location,re)}}}}x()}function A(){E();for(const D in i){const F=i[D];for(const V in F){const X=F[V];for(const N in X){const M=X[N];for(const T in M)u(M[T].object),delete M[T];delete X[N]}}delete i[D]}}function P(D){if(i[D.id]===void 0)return;const F=i[D.id];for(const V in F){const X=F[V];for(const N in X){const M=X[N];for(const T in M)u(M[T].object),delete M[T];delete X[N]}}delete i[D.id]}function L(D){for(const F in i){const V=i[F];for(const X in V){const N=V[X];if(N[D.id]===void 0)continue;const M=N[D.id];for(const T in M)u(M[T].object),delete M[T];delete N[D.id]}}}function S(D){for(const F in i){const V=i[F],X=D.isInstancedMesh===!0?D.id:0,N=V[X];if(N!==void 0){for(const M in N){const T=N[M];for(const k in T)u(T[k].object),delete T[k];delete N[M]}delete V[X],Object.keys(V).length===0&&delete i[F]}}}function E(){U(),o=!0,r!==s&&(r=s,l(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfObject:S,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function EI(t,e,n){let i;function s(l){i=l}function r(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,d){d!==0&&(t.drawArraysInstanced(i,l,u,d),n.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];n.update(h,i,1)}function c(l,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wI(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Wn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const S=L===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Fn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ci&&!S)}function c(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(je("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),P=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:w,maxFragmentUniforms:y,maxSamples:A,samples:P}}function TI(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new bs,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=t.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const x=r?0:i,w=x*4;let y=m.clippingState||null;c.value=y,y=u(g,f,w,h);for(let A=0;A!==w;++A)y[A]=n[A];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=h+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,y=h;w!==_;++w,y+=4)o.copy(d[w]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const os=4,Ap=[.125,.215,.35,.446,.526,.582],Rs=20,AI=256,Xr=new q_,Rp=new lt;let Wc=null,$c=0,Xc=0,qc=!1;const RI=new $;class Cp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=RI}=r;Wc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,$c,Xc),this._renderer.xr.enabled=qc,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Vi,format:Wn,colorSpace:wr,depthBuffer:!1},s=Pp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CI(r)),this._blurMaterial=LI(r,e,n),this._ggxMaterial=PI(r,e,n)}return s}_compileMaterial(e){const n=new Kt(new nn,e);this._renderer.compile(n,Xr)}_sceneToCubeUV(e,n,i,s,r){const c=new Un(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Rp),d.toneMapping=mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kt(new Wo,new As({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,m=!0):(p.color.copy(Rp),m=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[w],r.y,r.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[w]));const A=this._cubeSize;rr(s,y*A,w>2?A:0,A,A),d.setRenderTarget(s),m&&d.render(_,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===zs||e.mapping===br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lp());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;rr(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,Xr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=0+l*1.25,h=d*f,{_lodMax:g}=this,_=this._sizeLods[i],p=3*_*(i>g-os?i-g+os:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-n,rr(r,p,m,3*_,2*_),s.setRenderTarget(r),s.render(a,Xr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,rr(e,p,m,3*_,2*_),s.setRenderTarget(e),s.render(a,Xr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Rs-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):Rs;p>Rs&&je(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Rs}`);const m=[];let x=0;for(let L=0;L<Rs;++L){const S=L/_,E=Math.exp(-S*S/2);m.push(E),L===0?x+=E:L<p&&(x+=2*E)}for(let L=0;L<m.length;L++)m[L]=m[L]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;const y=this._sizeLods[s],A=3*y*(s>w-os?s-w+os:0),P=4*(this._cubeSize-y);rr(n,A,P,3*y,2*y),c.setRenderTarget(n),c.render(d,Xr)}}function CI(t){const e=[],n=[],i=[];let s=t;const r=t-os+1+Ap.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>t-os?c=Ap[o-t+os-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*h),w=new Float32Array(p*g*h),y=new Float32Array(m*g*h);for(let P=0;P<h;P++){const L=P%3*2/3-1,S=P>2?0:-1,E=[L,S,0,L+2/3,S,0,L+2/3,S+1,0,L,S,0,L+2/3,S+1,0,L,S+1,0];x.set(E,_*g*P),w.set(f,p*g*P);const U=[P,P,P,P,P,P];y.set(U,m*g*P)}const A=new nn;A.setAttribute("position",new Rn(x,_)),A.setAttribute("uv",new Rn(w,p)),A.setAttribute("faceIndex",new Rn(y,m)),i.push(new Kt(A,null)),s>os&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Pp(t,e,n){const i=new gi(t,e,n);return i.texture.mapping=Gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rr(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function PI(t,e,n){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AI,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$l(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function LI(t,e,n){const i=new Float32Array(Rs),s=new $(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$l(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Lp(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Dp(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function $l(){return`

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
	`}class j_ extends gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new G_(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wo(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Ui});r.uniforms.tEquirect.value=n;const o=new Kt(s,r),a=n.minFilter;return n.minFilter===Ls&&(n.minFilter=tn),new B2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function DI(t){let e=new WeakMap,n=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===_c||h===vc)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const _=new j_(g.height);return _.fromEquirectangularTexture(t,f),e.set(f,_),f.addEventListener("dispose",l),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,g=h===_c||h===vc,_=h===zs||h===br;if(g||_){let p=n.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Cp(t)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return g&&x&&x.height>0||_&&x&&c(x)?(i===null&&(i=new Cp(t)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,h){return h===_c?f.mapping=zs:h===vc&&(f.mapping=br),f}function c(f){let h=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&h++;return h===g}function l(f){const h=f.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function II(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&dl("WebGLRenderer: "+i+" extension not supported."),s}}}function NI(t,e,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function l(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(h!==null){const x=h.array;_=h.version;for(let w=0,y=x.length;w<y;w+=3){const A=x[w+0],P=x[w+1],L=x[w+2];f.push(A,P,P,L,L,A)}}else{const x=g.array;_=g.version;for(let w=0,y=x.length/3-1;w<y;w+=3){const A=w+0,P=w+1,L=w+2;f.push(A,P,P,L,L,A)}}const p=new(g.count>=65535?z_:k_)(f,1);p.version=_;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function UI(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function l(f,h,g){g!==0&&(t.drawElementsInstanced(i,h,r,f*o,g),n.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];n.update(p,i,1)}function d(f,h,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/o,h[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=h[x]*_[x];n.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function FI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function OI(t,e,n){const i=new WeakMap,s=new Nt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let U=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",U)};var h=U;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let A=a.attributes.position.count*y,P=1;A>e.maxTextureSize&&(P=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*P*4*d),S=new F_(L,A,P,d);S.type=ci,S.needsUpdate=!0;const E=y*4;for(let D=0;D<d;D++){const F=m[D],V=x[D],X=w[D],N=A*P*4*D;for(let M=0;M<F.count;M++){const T=M*E;g===!0&&(s.fromBufferAttribute(F,M),L[N+T+0]=s.x,L[N+T+1]=s.y,L[N+T+2]=s.z,L[N+T+3]=0),_===!0&&(s.fromBufferAttribute(V,M),L[N+T+4]=s.x,L[N+T+5]=s.y,L[N+T+6]=s.z,L[N+T+7]=0),p===!0&&(s.fromBufferAttribute(X,M),L[N+T+8]=s.x,L[N+T+9]=s.y,L[N+T+10]=s.z,L[N+T+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:S,size:new ct(A,P)},i.set(a,f),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",_),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function BI(t,e,n,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const kI={[y_]:"LINEAR_TONE_MAPPING",[S_]:"REINHARD_TONE_MAPPING",[M_]:"CINEON_TONE_MAPPING",[b_]:"ACES_FILMIC_TONE_MAPPING",[w_]:"AGX_TONE_MAPPING",[T_]:"NEUTRAL_TONE_MAPPING",[E_]:"CUSTOM_TONE_MAPPING"};function zI(t,e,n,i,s){const r=new gi(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),o=new gi(e,n,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),a=new nn;a.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ot([0,2,0,0,2,0],2));const c=new U2({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Kt(a,c),u=new q_(-1,1,1,-1,0,1);let d=null,f=null,h=!1,g,_=null,p=[],m=!1;this.setSize=function(x,w){r.setSize(x,w),o.setSize(x,w);for(let y=0;y<p.length;y++){const A=p[y];A.setSize&&A.setSize(x,w)}},this.setEffects=function(x){p=x,m=p.length>0&&p[0].isRenderPass===!0;const w=r.width,y=r.height;for(let A=0;A<p.length;A++){const P=p[A];P.setSize&&P.setSize(w,y)}},this.begin=function(x,w){if(h||x.toneMapping===mi&&p.length===0)return!1;if(_=w,w!==null){const y=w.width,A=w.height;(r.width!==y||r.height!==A)&&this.setSize(y,A)}return m===!1&&x.setRenderTarget(r),g=x.toneMapping,x.toneMapping=mi,!0},this.hasRenderPass=function(){return m},this.end=function(x,w){x.toneMapping=g,h=!0;let y=r,A=o;for(let P=0;P<p.length;P++){const L=p[P];if(L.enabled!==!1&&(L.render(x,A,y,w),L.needsSwap!==!1)){const S=y;y=A,A=S}}if(d!==x.outputColorSpace||f!==x.toneMapping){d=x.outputColorSpace,f=x.toneMapping,c.defines={},at.getTransfer(d)===_t&&(c.defines.SRGB_TRANSFER="");const P=kI[f];P&&(c.defines[P]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(_),x.render(l,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const K_=new fn,mf=new Co(1,1),Z_=new F_,J_=new r2,Q_=new G_,Ip=[],Np=[],Up=new Float32Array(16),Fp=new Float32Array(9),Op=new Float32Array(4);function Nr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Ip[s];if(r===void 0&&(r=new Float32Array(s),Ip[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xl(t,e){let n=Np[e];n===void 0&&(n=new Int32Array(e),Np[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function VI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function HI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function GI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function WI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function $I(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Op.set(i),t.uniformMatrix2fv(this.addr,!1,Op),Vt(n,i)}}function XI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Fp.set(i),t.uniformMatrix3fv(this.addr,!1,Fp),Vt(n,i)}}function qI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Up.set(i),t.uniformMatrix4fv(this.addr,!1,Up),Vt(n,i)}}function YI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function jI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function KI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function ZI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function JI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function QI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function eN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function tN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function nN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(mf.compareFunction=n.isReversedDepthBuffer()?id:nd,r=mf):r=K_,n.setTexture2D(e||r,s)}function iN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||J_,s)}function sN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Q_,s)}function rN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Z_,s)}function oN(t){switch(t){case 5126:return VI;case 35664:return HI;case 35665:return GI;case 35666:return WI;case 35674:return $I;case 35675:return XI;case 35676:return qI;case 5124:case 35670:return YI;case 35667:case 35671:return jI;case 35668:case 35672:return KI;case 35669:case 35673:return ZI;case 5125:return JI;case 36294:return QI;case 36295:return eN;case 36296:return tN;case 35678:case 36198:case 36298:case 36306:case 35682:return nN;case 35679:case 36299:case 36307:return iN;case 35680:case 36300:case 36308:case 36293:return sN;case 36289:case 36303:case 36311:case 36292:return rN}}function aN(t,e){t.uniform1fv(this.addr,e)}function lN(t,e){const n=Nr(e,this.size,2);t.uniform2fv(this.addr,n)}function cN(t,e){const n=Nr(e,this.size,3);t.uniform3fv(this.addr,n)}function uN(t,e){const n=Nr(e,this.size,4);t.uniform4fv(this.addr,n)}function fN(t,e){const n=Nr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dN(t,e){const n=Nr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hN(t,e){const n=Nr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pN(t,e){t.uniform1iv(this.addr,e)}function mN(t,e){t.uniform2iv(this.addr,e)}function gN(t,e){t.uniform3iv(this.addr,e)}function _N(t,e){t.uniform4iv(this.addr,e)}function vN(t,e){t.uniform1uiv(this.addr,e)}function xN(t,e){t.uniform2uiv(this.addr,e)}function yN(t,e){t.uniform3uiv(this.addr,e)}function SN(t,e){t.uniform4uiv(this.addr,e)}function MN(t,e,n){const i=this.cache,s=e.length,r=Xl(n,s);zt(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=mf:o=K_;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function bN(t,e,n){const i=this.cache,s=e.length,r=Xl(n,s);zt(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||J_,r[o])}function EN(t,e,n){const i=this.cache,s=e.length,r=Xl(n,s);zt(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Q_,r[o])}function wN(t,e,n){const i=this.cache,s=e.length,r=Xl(n,s);zt(i,r)||(t.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Z_,r[o])}function TN(t){switch(t){case 5126:return aN;case 35664:return lN;case 35665:return cN;case 35666:return uN;case 35674:return fN;case 35675:return dN;case 35676:return hN;case 5124:case 35670:return pN;case 35667:case 35671:return mN;case 35668:case 35672:return gN;case 35669:case 35673:return _N;case 5125:return vN;case 36294:return xN;case 36295:return yN;case 36296:return SN;case 35678:case 36198:case 36298:case 36306:case 35682:return MN;case 35679:case 36299:case 36307:return bN;case 35680:case 36300:case 36308:case 36293:return EN;case 36289:case 36303:case 36311:case 36292:return wN}}class AN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=oN(n.type)}}class RN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TN(n.type)}}class CN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function Bp(t,e){t.seq.push(e),t.map[e.id]=e}function PN(t,e,n){const i=t.name,s=i.length;for(Yc.lastIndex=0;;){const r=Yc.exec(i),o=Yc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bp(n,l===void 0?new AN(a,t,e):new RN(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new CN(a),Bp(n,d)),n=d}}}class Ga{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),c=e.getUniformLocation(n,a.name);PN(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function kp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const LN=37297;let DN=0;function IN(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const zp=new tt;function NN(t){at._getMatrix(zp,at.workingColorSpace,t);const e=`mat3( ${zp.elements.map(n=>n.toFixed(4))} )`;switch(at.getTransfer(t)){case cl:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Vp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+IN(t.getShaderSource(e),a)}else return r}function UN(t,e){const n=NN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const FN={[y_]:"Linear",[S_]:"Reinhard",[M_]:"Cineon",[b_]:"ACESFilmic",[w_]:"AgX",[T_]:"Neutral",[E_]:"Custom"};function ON(t,e){const n=FN[e];return n===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Aa=new $;function BN(){at.getLuminanceCoefficients(Aa);const t=Aa.x.toFixed(4),e=Aa.y.toFixed(4),n=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function zN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function VN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function eo(t){return t!==""}function Hp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HN=/^[ \t]*#include +<([\w\d./]+)>/gm;function gf(t){return t.replace(HN,WN)}const GN=new Map;function WN(t,e){let n=it[e];if(n===void 0){const i=GN.get(e);if(i!==void 0)n=it[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gf(n)}const $N=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wp(t){return t.replace($N,XN)}function XN(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $p(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const qN={[Ba]:"SHADOWMAP_TYPE_PCF",[Jr]:"SHADOWMAP_TYPE_VSM"};function YN(t){return qN[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jN={[zs]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE",[Gl]:"ENVMAP_TYPE_CUBE_UV"};function KN(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":jN[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const ZN={[br]:"ENVMAP_MODE_REFRACTION"};function JN(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":ZN[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QN={[x_]:"ENVMAP_BLENDING_MULTIPLY",[M3]:"ENVMAP_BLENDING_MIX",[b3]:"ENVMAP_BLENDING_ADD"};function eU(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":QN[t.combine]||"ENVMAP_BLENDING_NONE"}function tU(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function nU(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=YN(n),l=KN(n),u=JN(n),d=eU(n),f=tU(n),h=kN(n),g=zN(r),_=s.createProgram();let p,m,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(eo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(eo).join(`
`),m.length>0&&(m+=`
`)):(p=[$p(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),m=[$p(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?it.tonemapping_pars_fragment:"",n.toneMapping!==mi?ON("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,UN("linearToOutputTexel",n.outputColorSpace),BN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(eo).join(`
`)),o=gf(o),o=Hp(o,n),o=Gp(o,n),a=gf(a),a=Hp(a,n),a=Gp(a,n),o=Wp(o),a=Wp(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=x+p+o,y=x+m+a,A=kp(s,s.VERTEX_SHADER,w),P=kp(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,P),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(D){if(t.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(A)||"",X=s.getShaderInfoLog(P)||"",N=F.trim(),M=V.trim(),T=X.trim();let k=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,A,P);else{const ne=Vp(s,A,"vertex"),re=Vp(s,P,"fragment");ft("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+ne+`
`+re)}else N!==""?je("WebGLProgram: Program Info Log:",N):(M===""||T==="")&&(G=!1);G&&(D.diagnostics={runnable:k,programLog:N,vertexShader:{log:M,prefix:p},fragmentShader:{log:T,prefix:m}})}s.deleteShader(A),s.deleteShader(P),S=new Ga(s,_),E=VN(s,_)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,LN)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DN++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=P,this}let iU=0;class sU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new rU(e),n.set(e,i)),i}}class rU{constructor(e){this.id=iU++,this.code=e,this.usedTimes=0}}function oU(t,e,n,i,s,r){const o=new O_,a=new sU,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function _(S,E,U,D,F){const V=D.fog,X=F.geometry,N=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,M=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,T=e.get(S.envMap||N,M),k=T&&T.mapping===Gl?T.image.height:null,G=h[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&je("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ne=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,re=ne!==void 0?ne.length:0;let pe=0;X.morphAttributes.position!==void 0&&(pe=1),X.morphAttributes.normal!==void 0&&(pe=2),X.morphAttributes.color!==void 0&&(pe=3);let Ne,We,qe,se;if(G){const gt=ri[G];Ne=gt.vertexShader,We=gt.fragmentShader}else Ne=S.vertexShader,We=S.fragmentShader,a.update(S),qe=a.getVertexShaderID(S),se=a.getFragmentShaderID(S);const _e=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),Ye=F.isInstancedMesh===!0,Ve=F.isBatchedMesh===!0,$e=!!S.map,O=!!S.matcap,z=!!T,q=!!S.aoMap,le=!!S.lightMap,Q=!!S.bumpMap,ce=!!S.normalMap,I=!!S.displacementMap,me=!!S.emissiveMap,de=!!S.metalnessMap,ae=!!S.roughnessMap,he=S.anisotropy>0,R=S.clearcoat>0,b=S.dispersion>0,B=S.iridescence>0,Y=S.sheen>0,ie=S.transmission>0,j=he&&!!S.anisotropyMap,Te=R&&!!S.clearcoatMap,xe=R&&!!S.clearcoatNormalMap,Ue=R&&!!S.clearcoatRoughnessMap,ke=B&&!!S.iridescenceMap,ge=B&&!!S.iridescenceThicknessMap,Se=Y&&!!S.sheenColorMap,Ae=Y&&!!S.sheenRoughnessMap,Le=!!S.specularMap,De=!!S.specularColorMap,Qe=!!S.specularIntensityMap,H=ie&&!!S.transmissionMap,Ee=ie&&!!S.thicknessMap,Me=!!S.gradientMap,Fe=!!S.alphaMap,ye=S.alphaTest>0,oe=!!S.alphaHash,Oe=!!S.extensions;let Je=mi;S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Je=t.toneMapping);const Tt={shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:Ne,fragmentShader:We,defines:S.defines,customVertexShaderID:qe,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ve,batchingColor:Ve&&F._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&F.instanceColor!==null,instancingMorph:Ye&&F.morphTexture!==null,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:wr,alphaToCoverage:!!S.alphaToCoverage,map:$e,matcap:O,envMap:z,envMapMode:z&&T.mapping,envMapCubeUVHeight:k,aoMap:q,lightMap:le,bumpMap:Q,normalMap:ce,displacementMap:I,emissiveMap:me,normalMapObjectSpace:ce&&S.normalMapType===A3,normalMapTangentSpace:ce&&S.normalMapType===T3,metalnessMap:de,roughnessMap:ae,anisotropy:he,anisotropyMap:j,clearcoat:R,clearcoatMap:Te,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ue,dispersion:b,iridescence:B,iridescenceMap:ke,iridescenceThicknessMap:ge,sheen:Y,sheenColorMap:Se,sheenRoughnessMap:Ae,specularMap:Le,specularColorMap:De,specularIntensityMap:Qe,transmission:ie,transmissionMap:H,thicknessMap:Ee,gradientMap:Me,opaque:S.transparent===!1&&S.blending===pr&&S.alphaToCoverage===!1,alphaMap:Fe,alphaTest:ye,alphaHash:oe,combine:S.combine,mapUv:$e&&g(S.map.channel),aoMapUv:q&&g(S.aoMap.channel),lightMapUv:le&&g(S.lightMap.channel),bumpMapUv:Q&&g(S.bumpMap.channel),normalMapUv:ce&&g(S.normalMap.channel),displacementMapUv:I&&g(S.displacementMap.channel),emissiveMapUv:me&&g(S.emissiveMap.channel),metalnessMapUv:de&&g(S.metalnessMap.channel),roughnessMapUv:ae&&g(S.roughnessMap.channel),anisotropyMapUv:j&&g(S.anisotropyMap.channel),clearcoatMapUv:Te&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(S.sheenRoughnessMap.channel),specularMapUv:Le&&g(S.specularMap.channel),specularColorMapUv:De&&g(S.specularColorMap.channel),specularIntensityMapUv:Qe&&g(S.specularIntensityMap.channel),transmissionMapUv:H&&g(S.transmissionMap.channel),thicknessMapUv:Ee&&g(S.thicknessMap.channel),alphaMapUv:Fe&&g(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ce||he),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&($e||Fe),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||X.attributes.normal===void 0&&ce===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:Je,decodeVideoTexture:$e&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:me&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ai,flipSided:S.side===xn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Oe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&S.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)E.push(U),E.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(m(E,S),x(E,S),E.push(t.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function m(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function w(S){const E=h[S.type];let U;if(E){const D=ri[E];U=D2.clone(D.uniforms)}else U=S.uniforms;return U}function y(S,E){let U=u.get(E);return U!==void 0?++U.usedTimes:(U=new nU(t,E,S,s),l.push(U),u.set(E,U)),U}function A(S){if(--S.usedTimes===0){const E=l.indexOf(S);l[E]=l[l.length-1],l.pop(),u.delete(S.cacheKey),S.destroy()}}function P(S){a.remove(S)}function L(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:w,acquireProgram:y,releaseProgram:A,releaseShaderCache:P,programs:l,dispose:L}}function aU(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,c){t.get(o)[a]=c}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function lU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Xp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qp(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,_,p,m){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:g,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},t[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=g,x.materialVariant=o(f),x.groupOrder=_,x.renderOrder=f.renderOrder,x.z=p,x.group=m),e++,x}function c(f,h,g,_,p,m){const x=a(f,h,g,_,p,m);g.transmission>0?i.push(x):g.transparent===!0?s.push(x):n.push(x)}function l(f,h,g,_,p,m){const x=a(f,h,g,_,p,m);g.transmission>0?i.unshift(x):g.transparent===!0?s.unshift(x):n.unshift(x)}function u(f,h){n.length>1&&n.sort(f||lU),i.length>1&&i.sort(h||Xp),s.length>1&&s.sort(h||Xp)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function cU(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new qp,t.set(i,[o])):s>=r.length?(o=new qp,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function uU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new lt};break;case"SpotLight":n={position:new $,direction:new $,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function fU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dU=0;function hU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function pU(t){const e=new uU,n=fU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);const s=new $,r=new Ct,o=new Ct;function a(l){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,g=0,_=0,p=0,m=0,x=0,w=0,y=0,A=0,P=0,L=0;l.sort(hU);for(let E=0,U=l.length;E<U;E++){const D=l[E],F=D.color,V=D.intensity,X=D.distance;let N=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Er?N=D.shadow.map.texture:N=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=F.r*V,d+=F.g*V,f+=F.b*V;else if(D.isLightProbe){for(let M=0;M<9;M++)i.probe[M].addScaledVector(D.sh.coefficients[M],V);L++}else if(D.isDirectionalLight){const M=e.get(D);if(M.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const T=D.shadow,k=n.get(D);k.shadowIntensity=T.intensity,k.shadowBias=T.bias,k.shadowNormalBias=T.normalBias,k.shadowRadius=T.radius,k.shadowMapSize=T.mapSize,i.directionalShadow[h]=k,i.directionalShadowMap[h]=N,i.directionalShadowMatrix[h]=D.shadow.matrix,x++}i.directional[h]=M,h++}else if(D.isSpotLight){const M=e.get(D);M.position.setFromMatrixPosition(D.matrixWorld),M.color.copy(F).multiplyScalar(V),M.distance=X,M.coneCos=Math.cos(D.angle),M.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),M.decay=D.decay,i.spot[_]=M;const T=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,T.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[_]=T.matrix,D.castShadow){const k=n.get(D);k.shadowIntensity=T.intensity,k.shadowBias=T.bias,k.shadowNormalBias=T.normalBias,k.shadowRadius=T.radius,k.shadowMapSize=T.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=N,y++}_++}else if(D.isRectAreaLight){const M=e.get(D);M.color.copy(F).multiplyScalar(V),M.halfWidth.set(D.width*.5,0,0),M.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=M,p++}else if(D.isPointLight){const M=e.get(D);if(M.color.copy(D.color).multiplyScalar(D.intensity),M.distance=D.distance,M.decay=D.decay,D.castShadow){const T=D.shadow,k=n.get(D);k.shadowIntensity=T.intensity,k.shadowBias=T.bias,k.shadowNormalBias=T.normalBias,k.shadowRadius=T.radius,k.shadowMapSize=T.mapSize,k.shadowCameraNear=T.camera.near,k.shadowCameraFar=T.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=D.shadow.matrix,w++}i.point[g]=M,g++}else if(D.isHemisphereLight){const M=e.get(D);M.skyColor.copy(D.color).multiplyScalar(V),M.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[m]=M,m++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==h||S.pointLength!==g||S.spotLength!==_||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==x||S.numPointShadows!==w||S.numSpotShadows!==y||S.numSpotMaps!==A||S.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+A-P,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,S.directionalLength=h,S.pointLength=g,S.spotLength=_,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=x,S.numPointShadows=w,S.numSpotShadows=y,S.numSpotMaps=A,S.numLightProbes=L,i.version=dU++)}function c(l,u){let d=0,f=0,h=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,x=l.length;m<x;m++){const w=l[m];if(w.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(w.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(w.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:i}}function Yp(t){const e=new pU(t),n=[],i=[];function s(u){l.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function c(u){e.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function mU(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Yp(t),e.set(s,[a])):r>=o.length?(a=new Yp(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const gU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_U=`uniform sampler2D shadow_pass;
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
}`,vU=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],xU=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],jp=new Ct,qr=new $,jc=new $;function yU(t,e,n){let i=new V_;const s=new ct,r=new ct,o=new Nt,a=new F2,c=new O2,l={},u=n.maxTextureSize,d={[ls]:xn,[xn]:ls,[ai]:ai},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:gU,fragmentShader:_U}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Kt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ba;let m=this.type;this.render=function(P,L,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;this.type===i3&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ba);const E=t.getRenderTarget(),U=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Ui),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=m!==this.type;V&&L.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(N=>N.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,N=P.length;X<N;X++){const M=P[X],T=M.shadow;if(T===void 0){je("WebGLShadowMap:",M,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;s.copy(T.mapSize);const k=T.getFrameExtents();s.multiply(k),r.copy(T.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/k.x),s.x=r.x*k.x,T.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/k.y),s.y=r.y*k.y,T.mapSize.y=r.y));const G=t.state.buffers.depth.getReversed();if(T.camera._reversedDepth=G,T.map===null||V===!0){if(T.map!==null&&(T.map.depthTexture!==null&&(T.map.depthTexture.dispose(),T.map.depthTexture=null),T.map.dispose()),this.type===Jr){if(M.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}T.map=new gi(s.x,s.y,{format:Er,type:Vi,minFilter:tn,magFilter:tn,generateMipmaps:!1}),T.map.texture.name=M.name+".shadowMap",T.map.depthTexture=new Co(s.x,s.y,ci),T.map.depthTexture.name=M.name+".shadowMapDepth",T.map.depthTexture.format=Hi,T.map.depthTexture.compareFunction=null,T.map.depthTexture.minFilter=$t,T.map.depthTexture.magFilter=$t}else M.isPointLight?(T.map=new j_(s.x),T.map.depthTexture=new w2(s.x,vi)):(T.map=new gi(s.x,s.y),T.map.depthTexture=new Co(s.x,s.y,vi)),T.map.depthTexture.name=M.name+".shadowMap",T.map.depthTexture.format=Hi,this.type===Ba?(T.map.depthTexture.compareFunction=G?id:nd,T.map.depthTexture.minFilter=tn,T.map.depthTexture.magFilter=tn):(T.map.depthTexture.compareFunction=null,T.map.depthTexture.minFilter=$t,T.map.depthTexture.magFilter=$t);T.camera.updateProjectionMatrix()}const ne=T.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<ne;re++){if(T.map.isWebGLCubeRenderTarget)t.setRenderTarget(T.map,re),t.clear();else{re===0&&(t.setRenderTarget(T.map),t.clear());const pe=T.getViewport(re);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),F.viewport(o)}if(M.isPointLight){const pe=T.camera,Ne=T.matrix,We=M.distance||pe.far;We!==pe.far&&(pe.far=We,pe.updateProjectionMatrix()),qr.setFromMatrixPosition(M.matrixWorld),pe.position.copy(qr),jc.copy(pe.position),jc.add(vU[re]),pe.up.copy(xU[re]),pe.lookAt(jc),pe.updateMatrixWorld(),Ne.makeTranslation(-qr.x,-qr.y,-qr.z),jp.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),T._frustum.setFromProjectionMatrix(jp,pe.coordinateSystem,pe.reversedDepth)}else T.updateMatrices(M);i=T.getFrustum(),y(L,S,T.camera,M,this.type)}T.isPointLightShadow!==!0&&this.type===Jr&&x(T,S),T.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(E,U,D)};function x(P,L){const S=e.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new gi(s.x,s.y,{format:Er,type:Vi})),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(L,null,S,f,_,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(L,null,S,h,_,null)}function w(P,L,S,E){let U=null;const D=S.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)U=D;else if(U=S.isPointLight===!0?c:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const F=U.uuid,V=L.uuid;let X=l[F];X===void 0&&(X={},l[F]=X);let N=X[V];N===void 0&&(N=U.clone(),X[V]=N,L.addEventListener("dispose",A)),U=N}if(U.visible=L.visible,U.wireframe=L.wireframe,E===Jr?U.side=L.shadowSide!==null?L.shadowSide:L.side:U.side=L.shadowSide!==null?L.shadowSide:d[L.side],U.alphaMap=L.alphaMap,U.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,U.map=L.map,U.clipShadows=L.clipShadows,U.clippingPlanes=L.clippingPlanes,U.clipIntersection=L.clipIntersection,U.displacementMap=L.displacementMap,U.displacementScale=L.displacementScale,U.displacementBias=L.displacementBias,U.wireframeLinewidth=L.wireframeLinewidth,U.linewidth=L.linewidth,S.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const F=t.properties.get(U);F.light=S}return U}function y(P,L,S,E,U){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&U===Jr)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,P.matrixWorld);const V=e.update(P),X=P.material;if(Array.isArray(X)){const N=V.groups;for(let M=0,T=N.length;M<T;M++){const k=N[M],G=X[k.materialIndex];if(G&&G.visible){const ne=w(P,G,E,U);P.onBeforeShadow(t,P,L,S,V,ne,k),t.renderBufferDirect(S,null,V,ne,P,k),P.onAfterShadow(t,P,L,S,V,ne,k)}}}else if(X.visible){const N=w(P,X,E,U);P.onBeforeShadow(t,P,L,S,V,N,null),t.renderBufferDirect(S,null,V,N,P,null),P.onAfterShadow(t,P,L,S,V,N,null)}}const F=P.children;for(let V=0,X=F.length;V<X;V++)y(F[V],L,S,E,U)}function A(P){P.target.removeEventListener("dispose",A);for(const S in l){const E=l[S],U=P.target.uuid;U in E&&(E[U].dispose(),delete E[U])}}}function SU(t,e){function n(){let H=!1;const Ee=new Nt;let Me=null;const Fe=new Nt(0,0,0,0);return{setMask:function(ye){Me!==ye&&!H&&(t.colorMask(ye,ye,ye,ye),Me=ye)},setLocked:function(ye){H=ye},setClear:function(ye,oe,Oe,Je,Tt){Tt===!0&&(ye*=Je,oe*=Je,Oe*=Je),Ee.set(ye,oe,Oe,Je),Fe.equals(Ee)===!1&&(t.clearColor(ye,oe,Oe,Je),Fe.copy(Ee))},reset:function(){H=!1,Me=null,Fe.set(-1,0,0,0)}}}function i(){let H=!1,Ee=!1,Me=null,Fe=null,ye=null;return{setReversed:function(oe){if(Ee!==oe){const Oe=e.get("EXT_clip_control");oe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Ee=oe;const Je=ye;ye=null,this.setClear(Je)}},getReversed:function(){return Ee},setTest:function(oe){oe?_e(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(oe){Me!==oe&&!H&&(t.depthMask(oe),Me=oe)},setFunc:function(oe){if(Ee&&(oe=O3[oe]),Fe!==oe){switch(oe){case wu:t.depthFunc(t.NEVER);break;case Tu:t.depthFunc(t.ALWAYS);break;case Au:t.depthFunc(t.LESS);break;case Mr:t.depthFunc(t.LEQUAL);break;case Ru:t.depthFunc(t.EQUAL);break;case Cu:t.depthFunc(t.GEQUAL);break;case Pu:t.depthFunc(t.GREATER);break;case Lu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Fe=oe}},setLocked:function(oe){H=oe},setClear:function(oe){ye!==oe&&(ye=oe,Ee&&(oe=1-oe),t.clearDepth(oe))},reset:function(){H=!1,Me=null,Fe=null,ye=null,Ee=!1}}}function s(){let H=!1,Ee=null,Me=null,Fe=null,ye=null,oe=null,Oe=null,Je=null,Tt=null;return{setTest:function(gt){H||(gt?_e(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(gt){Ee!==gt&&!H&&(t.stencilMask(gt),Ee=gt)},setFunc:function(gt,yi,Si){(Me!==gt||Fe!==yi||ye!==Si)&&(t.stencilFunc(gt,yi,Si),Me=gt,Fe=yi,ye=Si)},setOp:function(gt,yi,Si){(oe!==gt||Oe!==yi||Je!==Si)&&(t.stencilOp(gt,yi,Si),oe=gt,Oe=yi,Je=Si)},setLocked:function(gt){H=gt},setClear:function(gt){Tt!==gt&&(t.clearStencil(gt),Tt=gt)},reset:function(){H=!1,Ee=null,Me=null,Fe=null,ye=null,oe=null,Oe=null,Je=null,Tt=null}}}const r=new n,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,_=!1,p=null,m=null,x=null,w=null,y=null,A=null,P=null,L=new lt(0,0,0),S=0,E=!1,U=null,D=null,F=null,V=null,X=null;const N=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let M=!1,T=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(k)[1]),M=T>=1):k.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),M=T>=2);let G=null,ne={};const re=t.getParameter(t.SCISSOR_BOX),pe=t.getParameter(t.VIEWPORT),Ne=new Nt().fromArray(re),We=new Nt().fromArray(pe);function qe(H,Ee,Me,Fe){const ye=new Uint8Array(4),oe=t.createTexture();t.bindTexture(H,oe),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<Me;Oe++)H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?t.texImage3D(Ee,0,t.RGBA,1,1,Fe,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(Ee+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return oe}const se={};se[t.TEXTURE_2D]=qe(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=qe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=qe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=qe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(t.DEPTH_TEST),o.setFunc(Mr),Q(!1),ce(Yh),_e(t.CULL_FACE),q(Ui);function _e(H){u[H]!==!0&&(t.enable(H),u[H]=!0)}function ve(H){u[H]!==!1&&(t.disable(H),u[H]=!1)}function Ye(H,Ee){return d[H]!==Ee?(t.bindFramebuffer(H,Ee),d[H]=Ee,H===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Ee),H===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Ve(H,Ee){let Me=h,Fe=!1;if(H){Me=f.get(Ee),Me===void 0&&(Me=[],f.set(Ee,Me));const ye=H.textures;if(Me.length!==ye.length||Me[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,Oe=ye.length;oe<Oe;oe++)Me[oe]=t.COLOR_ATTACHMENT0+oe;Me.length=ye.length,Fe=!0}}else Me[0]!==t.BACK&&(Me[0]=t.BACK,Fe=!0);Fe&&t.drawBuffers(Me)}function $e(H){return g!==H?(t.useProgram(H),g=H,!0):!1}const O={[Ts]:t.FUNC_ADD,[r3]:t.FUNC_SUBTRACT,[o3]:t.FUNC_REVERSE_SUBTRACT};O[a3]=t.MIN,O[l3]=t.MAX;const z={[c3]:t.ZERO,[u3]:t.ONE,[f3]:t.SRC_COLOR,[bu]:t.SRC_ALPHA,[_3]:t.SRC_ALPHA_SATURATE,[m3]:t.DST_COLOR,[h3]:t.DST_ALPHA,[d3]:t.ONE_MINUS_SRC_COLOR,[Eu]:t.ONE_MINUS_SRC_ALPHA,[g3]:t.ONE_MINUS_DST_COLOR,[p3]:t.ONE_MINUS_DST_ALPHA,[v3]:t.CONSTANT_COLOR,[x3]:t.ONE_MINUS_CONSTANT_COLOR,[y3]:t.CONSTANT_ALPHA,[S3]:t.ONE_MINUS_CONSTANT_ALPHA};function q(H,Ee,Me,Fe,ye,oe,Oe,Je,Tt,gt){if(H===Ui){_===!0&&(ve(t.BLEND),_=!1);return}if(_===!1&&(_e(t.BLEND),_=!0),H!==s3){if(H!==p||gt!==E){if((m!==Ts||y!==Ts)&&(t.blendEquation(t.FUNC_ADD),m=Ts,y=Ts),gt)switch(H){case pr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mu:t.blendFunc(t.ONE,t.ONE);break;case jh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ft("WebGLState: Invalid blending: ",H);break}else switch(H){case pr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case jh:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kh:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",H);break}x=null,w=null,A=null,P=null,L.set(0,0,0),S=0,p=H,E=gt}return}ye=ye||Ee,oe=oe||Me,Oe=Oe||Fe,(Ee!==m||ye!==y)&&(t.blendEquationSeparate(O[Ee],O[ye]),m=Ee,y=ye),(Me!==x||Fe!==w||oe!==A||Oe!==P)&&(t.blendFuncSeparate(z[Me],z[Fe],z[oe],z[Oe]),x=Me,w=Fe,A=oe,P=Oe),(Je.equals(L)===!1||Tt!==S)&&(t.blendColor(Je.r,Je.g,Je.b,Tt),L.copy(Je),S=Tt),p=H,E=!1}function le(H,Ee){H.side===ai?ve(t.CULL_FACE):_e(t.CULL_FACE);let Me=H.side===xn;Ee&&(Me=!Me),Q(Me),H.blending===pr&&H.transparent===!1?q(Ui):q(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const Fe=H.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),me(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(H){U!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),U=H)}function ce(H){H!==t3?(_e(t.CULL_FACE),H!==D&&(H===Yh?t.cullFace(t.BACK):H===n3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),D=H}function I(H){H!==F&&(M&&t.lineWidth(H),F=H)}function me(H,Ee,Me){H?(_e(t.POLYGON_OFFSET_FILL),(V!==Ee||X!==Me)&&(V=Ee,X=Me,o.getReversed()&&(Ee=-Ee),t.polygonOffset(Ee,Me))):ve(t.POLYGON_OFFSET_FILL)}function de(H){H?_e(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function ae(H){H===void 0&&(H=t.TEXTURE0+N-1),G!==H&&(t.activeTexture(H),G=H)}function he(H,Ee,Me){Me===void 0&&(G===null?Me=t.TEXTURE0+N-1:Me=G);let Fe=ne[Me];Fe===void 0&&(Fe={type:void 0,texture:void 0},ne[Me]=Fe),(Fe.type!==H||Fe.texture!==Ee)&&(G!==Me&&(t.activeTexture(Me),G=Me),t.bindTexture(H,Ee||se[H]),Fe.type=H,Fe.texture=Ee)}function R(){const H=ne[G];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(H){ft("WebGLState:",H)}}function B(){try{t.compressedTexImage3D(...arguments)}catch(H){ft("WebGLState:",H)}}function Y(){try{t.texSubImage2D(...arguments)}catch(H){ft("WebGLState:",H)}}function ie(){try{t.texSubImage3D(...arguments)}catch(H){ft("WebGLState:",H)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(H){ft("WebGLState:",H)}}function Te(){try{t.compressedTexSubImage3D(...arguments)}catch(H){ft("WebGLState:",H)}}function xe(){try{t.texStorage2D(...arguments)}catch(H){ft("WebGLState:",H)}}function Ue(){try{t.texStorage3D(...arguments)}catch(H){ft("WebGLState:",H)}}function ke(){try{t.texImage2D(...arguments)}catch(H){ft("WebGLState:",H)}}function ge(){try{t.texImage3D(...arguments)}catch(H){ft("WebGLState:",H)}}function Se(H){Ne.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),Ne.copy(H))}function Ae(H){We.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),We.copy(H))}function Le(H,Ee){let Me=l.get(Ee);Me===void 0&&(Me=new WeakMap,l.set(Ee,Me));let Fe=Me.get(H);Fe===void 0&&(Fe=t.getUniformBlockIndex(Ee,H.name),Me.set(H,Fe))}function De(H,Ee){const Fe=l.get(Ee).get(H);c.get(Ee)!==Fe&&(t.uniformBlockBinding(Ee,Fe,H.__bindingPointIndex),c.set(Ee,Fe))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},G=null,ne={},d={},f=new WeakMap,h=[],g=null,_=!1,p=null,m=null,x=null,w=null,y=null,A=null,P=null,L=new lt(0,0,0),S=0,E=!1,U=null,D=null,F=null,V=null,X=null,Ne.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_e,disable:ve,bindFramebuffer:Ye,drawBuffers:Ve,useProgram:$e,setBlending:q,setMaterial:le,setFlipSided:Q,setCullFace:ce,setLineWidth:I,setPolygonOffset:me,setScissorTest:de,activeTexture:ae,bindTexture:he,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:B,texImage2D:ke,texImage3D:ge,updateUBOMapping:Le,uniformBlockBinding:De,texStorage2D:xe,texStorage3D:Ue,texSubImage2D:Y,texSubImage3D:ie,compressedTexSubImage2D:j,compressedTexSubImage3D:Te,scissor:Se,viewport:Ae,reset:Qe}}function MU(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return h?new OffscreenCanvas(R,b):fl("canvas")}function _(R,b,B){let Y=1;const ie=he(R);if((ie.width>B||ie.height>B)&&(Y=B/Math.max(ie.width,ie.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Y*ie.width),Te=Math.floor(Y*ie.height);d===void 0&&(d=g(j,Te));const xe=b?g(j,Te):d;return xe.width=j,xe.height=Te,xe.getContext("2d").drawImage(R,0,0,j,Te),je("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+j+"x"+Te+")."),xe}else return"data"in R&&je("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){t.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function w(R,b,B,Y,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=b;if(b===t.RED&&(B===t.FLOAT&&(j=t.R32F),B===t.HALF_FLOAT&&(j=t.R16F),B===t.UNSIGNED_BYTE&&(j=t.R8)),b===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.R8UI),B===t.UNSIGNED_SHORT&&(j=t.R16UI),B===t.UNSIGNED_INT&&(j=t.R32UI),B===t.BYTE&&(j=t.R8I),B===t.SHORT&&(j=t.R16I),B===t.INT&&(j=t.R32I)),b===t.RG&&(B===t.FLOAT&&(j=t.RG32F),B===t.HALF_FLOAT&&(j=t.RG16F),B===t.UNSIGNED_BYTE&&(j=t.RG8)),b===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RG8UI),B===t.UNSIGNED_SHORT&&(j=t.RG16UI),B===t.UNSIGNED_INT&&(j=t.RG32UI),B===t.BYTE&&(j=t.RG8I),B===t.SHORT&&(j=t.RG16I),B===t.INT&&(j=t.RG32I)),b===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RGB8UI),B===t.UNSIGNED_SHORT&&(j=t.RGB16UI),B===t.UNSIGNED_INT&&(j=t.RGB32UI),B===t.BYTE&&(j=t.RGB8I),B===t.SHORT&&(j=t.RGB16I),B===t.INT&&(j=t.RGB32I)),b===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),B===t.UNSIGNED_INT&&(j=t.RGBA32UI),B===t.BYTE&&(j=t.RGBA8I),B===t.SHORT&&(j=t.RGBA16I),B===t.INT&&(j=t.RGBA32I)),b===t.RGB&&(B===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),b===t.RGBA){const Te=ie?cl:at.getTransfer(Y);B===t.FLOAT&&(j=t.RGBA32F),B===t.HALF_FLOAT&&(j=t.RGBA16F),B===t.UNSIGNED_BYTE&&(j=Te===_t?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(R,b){let B;return R?b===null||b===vi||b===Ao?B=t.DEPTH24_STENCIL8:b===ci?B=t.DEPTH32F_STENCIL8:b===To&&(B=t.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===vi||b===Ao?B=t.DEPTH_COMPONENT24:b===ci?B=t.DEPTH_COMPONENT32F:b===To&&(B=t.DEPTH_COMPONENT16),B}function A(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==$t&&R.minFilter!==tn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function P(R){const b=R.target;b.removeEventListener("dispose",P),S(b),b.isVideoTexture&&u.delete(b)}function L(R){const b=R.target;b.removeEventListener("dispose",L),U(b)}function S(R){const b=i.get(R);if(b.__webglInit===void 0)return;const B=R.source,Y=f.get(B);if(Y){const ie=Y[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(R),Object.keys(Y).length===0&&f.delete(B)}i.remove(R)}function E(R){const b=i.get(R);t.deleteTexture(b.__webglTexture);const B=R.source,Y=f.get(B);delete Y[b.__cacheKey],o.memory.textures--}function U(R){const b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let ie=0;ie<b.__webglFramebuffer[Y].length;ie++)t.deleteFramebuffer(b.__webglFramebuffer[Y][ie]);else t.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)t.deleteFramebuffer(b.__webglFramebuffer[Y]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=R.textures;for(let Y=0,ie=B.length;Y<ie;Y++){const j=i.get(B[Y]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(B[Y])}i.remove(R)}let D=0;function F(){D=0}function V(){const R=D;return R>=s.maxTextures&&je("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function X(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function N(R,b){const B=i.get(R);if(R.isVideoTexture&&de(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const Y=R.image;if(Y===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{se(B,R,b);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+b)}function M(R,b){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){se(B,R,b);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+b)}function T(R,b){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){se(B,R,b);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+b)}function k(R,b){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){_e(B,R,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+b)}const G={[Du]:t.REPEAT,[Ni]:t.CLAMP_TO_EDGE,[Iu]:t.MIRRORED_REPEAT},ne={[$t]:t.NEAREST,[E3]:t.NEAREST_MIPMAP_NEAREST,[na]:t.NEAREST_MIPMAP_LINEAR,[tn]:t.LINEAR,[xc]:t.LINEAR_MIPMAP_NEAREST,[Ls]:t.LINEAR_MIPMAP_LINEAR},re={[R3]:t.NEVER,[I3]:t.ALWAYS,[C3]:t.LESS,[nd]:t.LEQUAL,[P3]:t.EQUAL,[id]:t.GEQUAL,[L3]:t.GREATER,[D3]:t.NOTEQUAL};function pe(R,b){if(b.type===ci&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===tn||b.magFilter===xc||b.magFilter===na||b.magFilter===Ls||b.minFilter===tn||b.minFilter===xc||b.minFilter===na||b.minFilter===Ls)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,G[b.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,G[b.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,G[b.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ne[b.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ne[b.minFilter]),b.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,re[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$t||b.minFilter!==na&&b.minFilter!==Ls||b.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ne(R,b){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P));const Y=b.source;let ie=f.get(Y);ie===void 0&&(ie={},f.set(Y,ie));const j=X(b);if(j!==R.__cacheKey){ie[j]===void 0&&(ie[j]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ie[j].usedTimes++;const Te=ie[R.__cacheKey];Te!==void 0&&(ie[R.__cacheKey].usedTimes--,Te.usedTimes===0&&E(b)),R.__cacheKey=j,R.__webglTexture=ie[j].texture}return B}function We(R,b,B){return Math.floor(Math.floor(R/B)/b)}function qe(R,b,B,Y){const j=R.updateRanges;if(j.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,B,Y,b.data);else{j.sort((ge,Se)=>ge.start-Se.start);let Te=0;for(let ge=1;ge<j.length;ge++){const Se=j[Te],Ae=j[ge],Le=Se.start+Se.count,De=We(Ae.start,b.width,4),Qe=We(Se.start,b.width,4);Ae.start<=Le+1&&De===Qe&&We(Ae.start+Ae.count-1,b.width,4)===De?Se.count=Math.max(Se.count,Ae.start+Ae.count-Se.start):(++Te,j[Te]=Ae)}j.length=Te+1;const xe=t.getParameter(t.UNPACK_ROW_LENGTH),Ue=t.getParameter(t.UNPACK_SKIP_PIXELS),ke=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let ge=0,Se=j.length;ge<Se;ge++){const Ae=j[ge],Le=Math.floor(Ae.start/4),De=Math.ceil(Ae.count/4),Qe=Le%b.width,H=Math.floor(Le/b.width),Ee=De,Me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,H),n.texSubImage2D(t.TEXTURE_2D,0,Qe,H,Ee,Me,B,Y,b.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,xe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(t.UNPACK_SKIP_ROWS,ke)}}function se(R,b,B){let Y=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=t.TEXTURE_3D);const ie=Ne(R,b),j=b.source;n.bindTexture(Y,R.__webglTexture,t.TEXTURE0+B);const Te=i.get(j);if(j.version!==Te.__version||ie===!0){n.activeTexture(t.TEXTURE0+B);const xe=at.getPrimaries(at.workingColorSpace),Ue=b.colorSpace===ss?null:at.getPrimaries(b.colorSpace),ke=b.colorSpace===ss||xe===Ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ge=_(b.image,!1,s.maxTextureSize);ge=ae(b,ge);const Se=r.convert(b.format,b.colorSpace),Ae=r.convert(b.type);let Le=w(b.internalFormat,Se,Ae,b.colorSpace,b.isVideoTexture);pe(Y,b);let De;const Qe=b.mipmaps,H=b.isVideoTexture!==!0,Ee=Te.__version===void 0||ie===!0,Me=j.dataReady,Fe=A(b,ge);if(b.isDepthTexture)Le=y(b.format===Ds,b.type),Ee&&(H?n.texStorage2D(t.TEXTURE_2D,1,Le,ge.width,ge.height):n.texImage2D(t.TEXTURE_2D,0,Le,ge.width,ge.height,0,Se,Ae,null));else if(b.isDataTexture)if(Qe.length>0){H&&Ee&&n.texStorage2D(t.TEXTURE_2D,Fe,Le,Qe[0].width,Qe[0].height);for(let ye=0,oe=Qe.length;ye<oe;ye++)De=Qe[ye],H?Me&&n.texSubImage2D(t.TEXTURE_2D,ye,0,0,De.width,De.height,Se,Ae,De.data):n.texImage2D(t.TEXTURE_2D,ye,Le,De.width,De.height,0,Se,Ae,De.data);b.generateMipmaps=!1}else H?(Ee&&n.texStorage2D(t.TEXTURE_2D,Fe,Le,ge.width,ge.height),Me&&qe(b,ge,Se,Ae)):n.texImage2D(t.TEXTURE_2D,0,Le,ge.width,ge.height,0,Se,Ae,ge.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){H&&Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,Le,Qe[0].width,Qe[0].height,ge.depth);for(let ye=0,oe=Qe.length;ye<oe;ye++)if(De=Qe[ye],b.format!==Wn)if(Se!==null)if(H){if(Me)if(b.layerUpdates.size>0){const Oe=Tp(De.width,De.height,b.format,b.type);for(const Je of b.layerUpdates){const Tt=De.data.subarray(Je*Oe/De.data.BYTES_PER_ELEMENT,(Je+1)*Oe/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ye,0,0,Je,De.width,De.height,1,Se,Tt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ye,0,0,0,De.width,De.height,ge.depth,Se,De.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ye,Le,De.width,De.height,ge.depth,0,De.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ye,0,0,0,De.width,De.height,ge.depth,Se,Ae,De.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ye,Le,De.width,De.height,ge.depth,0,Se,Ae,De.data)}else{H&&Ee&&n.texStorage2D(t.TEXTURE_2D,Fe,Le,Qe[0].width,Qe[0].height);for(let ye=0,oe=Qe.length;ye<oe;ye++)De=Qe[ye],b.format!==Wn?Se!==null?H?Me&&n.compressedTexSubImage2D(t.TEXTURE_2D,ye,0,0,De.width,De.height,Se,De.data):n.compressedTexImage2D(t.TEXTURE_2D,ye,Le,De.width,De.height,0,De.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Me&&n.texSubImage2D(t.TEXTURE_2D,ye,0,0,De.width,De.height,Se,Ae,De.data):n.texImage2D(t.TEXTURE_2D,ye,Le,De.width,De.height,0,Se,Ae,De.data)}else if(b.isDataArrayTexture)if(H){if(Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,Le,ge.width,ge.height,ge.depth),Me)if(b.layerUpdates.size>0){const ye=Tp(ge.width,ge.height,b.format,b.type);for(const oe of b.layerUpdates){const Oe=ge.data.subarray(oe*ye/ge.data.BYTES_PER_ELEMENT,(oe+1)*ye/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,ge.width,ge.height,1,Se,Ae,Oe)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Se,Ae,ge.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ge.width,ge.height,ge.depth,0,Se,Ae,ge.data);else if(b.isData3DTexture)H?(Ee&&n.texStorage3D(t.TEXTURE_3D,Fe,Le,ge.width,ge.height,ge.depth),Me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Se,Ae,ge.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ge.width,ge.height,ge.depth,0,Se,Ae,ge.data);else if(b.isFramebufferTexture){if(Ee)if(H)n.texStorage2D(t.TEXTURE_2D,Fe,Le,ge.width,ge.height);else{let ye=ge.width,oe=ge.height;for(let Oe=0;Oe<Fe;Oe++)n.texImage2D(t.TEXTURE_2D,Oe,Le,ye,oe,0,Se,Ae,null),ye>>=1,oe>>=1}}else if(Qe.length>0){if(H&&Ee){const ye=he(Qe[0]);n.texStorage2D(t.TEXTURE_2D,Fe,Le,ye.width,ye.height)}for(let ye=0,oe=Qe.length;ye<oe;ye++)De=Qe[ye],H?Me&&n.texSubImage2D(t.TEXTURE_2D,ye,0,0,Se,Ae,De):n.texImage2D(t.TEXTURE_2D,ye,Le,Se,Ae,De);b.generateMipmaps=!1}else if(H){if(Ee){const ye=he(ge);n.texStorage2D(t.TEXTURE_2D,Fe,Le,ye.width,ye.height)}Me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Ae,ge)}else n.texImage2D(t.TEXTURE_2D,0,Le,Se,Ae,ge);p(b)&&m(Y),Te.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function _e(R,b,B){if(b.image.length!==6)return;const Y=Ne(R,b),ie=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const j=i.get(ie);if(ie.version!==j.__version||Y===!0){n.activeTexture(t.TEXTURE0+B);const Te=at.getPrimaries(at.workingColorSpace),xe=b.colorSpace===ss?null:at.getPrimaries(b.colorSpace),Ue=b.colorSpace===ss||Te===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ke=b.isCompressedTexture||b.image[0].isCompressedTexture,ge=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let oe=0;oe<6;oe++)!ke&&!ge?Se[oe]=_(b.image[oe],!0,s.maxCubemapSize):Se[oe]=ge?b.image[oe].image:b.image[oe],Se[oe]=ae(b,Se[oe]);const Ae=Se[0],Le=r.convert(b.format,b.colorSpace),De=r.convert(b.type),Qe=w(b.internalFormat,Le,De,b.colorSpace),H=b.isVideoTexture!==!0,Ee=j.__version===void 0||Y===!0,Me=ie.dataReady;let Fe=A(b,Ae);pe(t.TEXTURE_CUBE_MAP,b);let ye;if(ke){H&&Ee&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,Qe,Ae.width,Ae.height);for(let oe=0;oe<6;oe++){ye=Se[oe].mipmaps;for(let Oe=0;Oe<ye.length;Oe++){const Je=ye[Oe];b.format!==Wn?Le!==null?H?Me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,0,0,Je.width,Je.height,Le,Je.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,Qe,Je.width,Je.height,0,Je.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,0,0,Je.width,Je.height,Le,De,Je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,Qe,Je.width,Je.height,0,Le,De,Je.data)}}}else{if(ye=b.mipmaps,H&&Ee){ye.length>0&&Fe++;const oe=he(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,Qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ge){H?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Se[oe].width,Se[oe].height,Le,De,Se[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,Se[oe].width,Se[oe].height,0,Le,De,Se[oe].data);for(let Oe=0;Oe<ye.length;Oe++){const Tt=ye[Oe].image[oe].image;H?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,0,0,Tt.width,Tt.height,Le,De,Tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,Qe,Tt.width,Tt.height,0,Le,De,Tt.data)}}else{H?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Le,De,Se[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,Le,De,Se[oe]);for(let Oe=0;Oe<ye.length;Oe++){const Je=ye[Oe];H?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,0,0,Le,De,Je.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,Qe,Le,De,Je.image[oe])}}}p(b)&&m(t.TEXTURE_CUBE_MAP),j.__version=ie.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ve(R,b,B,Y,ie,j){const Te=r.convert(B.format,B.colorSpace),xe=r.convert(B.type),Ue=w(B.internalFormat,Te,xe,B.colorSpace),ke=i.get(b),ge=i.get(B);if(ge.__renderTarget=b,!ke.__hasExternalTextures){const Se=Math.max(1,b.width>>j),Ae=Math.max(1,b.height>>j);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,j,Ue,Se,Ae,b.depth,0,Te,xe,null):n.texImage2D(ie,j,Ue,Se,Ae,0,Te,xe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),me(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ie,ge.__webglTexture,0,I(b)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ie,ge.__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(R,b,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),b.depthBuffer){const Y=b.depthTexture,ie=Y&&Y.isDepthTexture?Y.type:null,j=y(b.stencilBuffer,ie),Te=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;me(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(b),j,b.width,b.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(b),j,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,j,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,R)}else{const Y=b.textures;for(let ie=0;ie<Y.length;ie++){const j=Y[ie],Te=r.convert(j.format,j.colorSpace),xe=r.convert(j.type),Ue=w(j.internalFormat,Te,xe,j.colorSpace);me(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(b),Ue,b.width,b.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(b),Ue,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Ue,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ve(R,b,B){const Y=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(b.depthTexture);if(ie.__renderTarget=b,(!ie.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),ie.__webglTexture===void 0){ie.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),pe(t.TEXTURE_CUBE_MAP,b.depthTexture);const ke=r.convert(b.depthTexture.format),ge=r.convert(b.depthTexture.type);let Se;b.depthTexture.format===Hi?Se=t.DEPTH_COMPONENT24:b.depthTexture.format===Ds&&(Se=t.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Se,b.width,b.height,0,ke,ge,null)}}else N(b.depthTexture,0);const j=ie.__webglTexture,Te=I(b),xe=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,Ue=b.depthTexture.format===Ds?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===Hi)me(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ue,xe,j,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Ue,xe,j,0);else if(b.depthTexture.format===Ds)me(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ue,xe,j,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Ue,xe,j,0);else throw new Error("Unknown depthTexture format")}function $e(R){const b=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const ie=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",ie)};Y.addEventListener("dispose",ie),b.__depthDisposeCallback=ie}b.__boundDepthTexture=Y}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let Y=0;Y<6;Y++)Ve(b.__webglFramebuffer[Y],R,Y);else{const Y=R.texture.mipmaps;Y&&Y.length>0?Ve(b.__webglFramebuffer[0],R,0):Ve(b.__webglFramebuffer,R,0)}else if(B){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=t.createRenderbuffer(),Ye(b.__webglDepthbuffer[Y],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,j)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),Ye(b.__webglDepthbuffer,R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,j)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function O(R,b,B){const Y=i.get(R);b!==void 0&&ve(Y.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&$e(R)}function z(R){const b=R.texture,B=i.get(R),Y=i.get(b);R.addEventListener("dispose",L);const ie=R.textures,j=R.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=b.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[xe]=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)B.__webglFramebuffer[xe][Ue]=t.createFramebuffer()}else B.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let xe=0;xe<b.mipmaps.length;xe++)B.__webglFramebuffer[xe]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Te)for(let xe=0,Ue=ie.length;xe<Ue;xe++){const ke=i.get(ie[xe]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&me(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xe=0;xe<ie.length;xe++){const Ue=ie[xe];B.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[xe]);const ke=r.convert(Ue.format,Ue.colorSpace),ge=r.convert(Ue.type),Se=w(Ue.internalFormat,ke,ge,Ue.colorSpace,R.isXRRenderTarget===!0),Ae=I(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,Se,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,B.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ye(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),pe(t.TEXTURE_CUBE_MAP,b);for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)ve(B.__webglFramebuffer[xe][Ue],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue);else ve(B.__webglFramebuffer[xe],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);p(b)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let xe=0,Ue=ie.length;xe<Ue;xe++){const ke=ie[xe],ge=i.get(ke);let Se=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Se=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,ge.__webglTexture),pe(Se,ke),ve(B.__webglFramebuffer,R,ke,t.COLOR_ATTACHMENT0+xe,Se,0),p(ke)&&m(Se)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,Y.__webglTexture),pe(xe,b),b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)ve(B.__webglFramebuffer[Ue],R,b,t.COLOR_ATTACHMENT0,xe,Ue);else ve(B.__webglFramebuffer,R,b,t.COLOR_ATTACHMENT0,xe,0);p(b)&&m(xe),n.unbindTexture()}R.depthBuffer&&$e(R)}function q(R){const b=R.textures;for(let B=0,Y=b.length;B<Y;B++){const ie=b[B];if(p(ie)){const j=x(R),Te=i.get(ie).__webglTexture;n.bindTexture(j,Te),m(j),n.unbindTexture()}}}const le=[],Q=[];function ce(R){if(R.samples>0){if(me(R)===!1){const b=R.textures,B=R.width,Y=R.height;let ie=t.COLOR_BUFFER_BIT;const j=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(R),xe=b.length>1;if(xe)for(let ke=0;ke<b.length;ke++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Ue=R.texture.mipmaps;Ue&&Ue.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ke=0;ke<b.length;ke++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),xe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ke]);const ge=i.get(b[ke]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ge,0)}t.blitFramebuffer(0,0,B,Y,0,0,B,Y,ie,t.NEAREST),c===!0&&(le.length=0,Q.length=0,le.push(t.COLOR_ATTACHMENT0+ke),R.depthBuffer&&R.resolveDepthBuffer===!1&&(le.push(j),Q.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Q)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let ke=0;ke<b.length;ke++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ke]);const ge=i.get(b[ke]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const b=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function I(R){return Math.min(s.maxSamples,R.samples)}function me(R){const b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function de(R){const b=o.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function ae(R,b){const B=R.colorSpace,Y=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==wr&&B!==ss&&(at.getTransfer(B)===_t?(Y!==Wn||ie!==Fn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",B)),b}function he(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=N,this.setTexture2DArray=M,this.setTexture3D=T,this.setTextureCube=k,this.rebindTextures=O,this.setupRenderTarget=z,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function bU(t,e){function n(i,s=ss){let r;const o=at.getTransfer(s);if(i===Fn)return t.UNSIGNED_BYTE;if(i===Zf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===P_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===L_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===R_)return t.BYTE;if(i===C_)return t.SHORT;if(i===To)return t.UNSIGNED_SHORT;if(i===Kf)return t.INT;if(i===vi)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===Vi)return t.HALF_FLOAT;if(i===D_)return t.ALPHA;if(i===I_)return t.RGB;if(i===Wn)return t.RGBA;if(i===Hi)return t.DEPTH_COMPONENT;if(i===Ds)return t.DEPTH_STENCIL;if(i===N_)return t.RED;if(i===Qf)return t.RED_INTEGER;if(i===Er)return t.RG;if(i===ed)return t.RG_INTEGER;if(i===td)return t.RGBA_INTEGER;if(i===ka||i===za||i===Va||i===Ha)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nu||i===Uu||i===Fu||i===Ou)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ou)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bu||i===ku||i===zu||i===Vu||i===Hu||i===Gu||i===Wu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bu||i===ku)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vu)return r.COMPRESSED_R11_EAC;if(i===Hu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Gu)return r.COMPRESSED_RG11_EAC;if(i===Wu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$u||i===Xu||i===qu||i===Yu||i===ju||i===Ku||i===Zu||i===Ju||i===Qu||i===ef||i===tf||i===nf||i===sf||i===rf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$u)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ju)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ku)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ju)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ef)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tf)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nf)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sf)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rf)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===of||i===af||i===lf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===of)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===af)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cf||i===uf||i===ff||i===df)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===cf)return r.COMPRESSED_RED_RGTC1_EXT;if(i===uf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ff)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===df)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ao?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const EU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wU=`
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

}`;class TU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new W_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Cn({vertexShader:EU,fragmentShader:wU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kt(new Wl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AU extends Pr{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",p=new TU,m={},x=n.getContextAttributes();let w=null,y=null;const A=[],P=[],L=new ct;let S=null;const E=new Un;E.viewport=new Nt;const U=new Un;U.viewport=new Nt;const D=[E,U],F=new k2;let V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let _e=A[se];return _e===void 0&&(_e=new wc,A[se]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(se){let _e=A[se];return _e===void 0&&(_e=new wc,A[se]=_e),_e.getGripSpace()},this.getHand=function(se){let _e=A[se];return _e===void 0&&(_e=new wc,A[se]=_e),_e.getHandSpace()};function N(se){const _e=P.indexOf(se.inputSource);if(_e===-1)return;const ve=A[_e];ve!==void 0&&(ve.update(se.inputSource,se.frame,l||o),ve.dispatchEvent({type:se.type,data:se.inputSource}))}function M(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",M),s.removeEventListener("inputsourceschange",T);for(let se=0;se<A.length;se++){const _e=P[se];_e!==null&&(P[se]=null,A[se].disconnect(_e))}V=null,X=null,p.reset();for(const se in m)delete m[se];e.setRenderTarget(w),h=null,f=null,d=null,s=null,y=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(se){l=se},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",M),s.addEventListener("inputsourceschange",T),x.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ye=null,Ve=null;x.depth&&(Ve=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=x.stencil?Ds:Hi,Ye=x.stencil?Ao:vi);const $e={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer($e),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new gi(f.textureWidth,f.textureHeight,{format:Wn,type:Fn,depthTexture:new Co(f.textureWidth,f.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,ve),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new gi(h.framebufferWidth,h.framebufferHeight,{format:Wn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function T(se){for(let _e=0;_e<se.removed.length;_e++){const ve=se.removed[_e],Ye=P.indexOf(ve);Ye>=0&&(P[Ye]=null,A[Ye].disconnect(ve))}for(let _e=0;_e<se.added.length;_e++){const ve=se.added[_e];let Ye=P.indexOf(ve);if(Ye===-1){for(let $e=0;$e<A.length;$e++)if($e>=P.length){P.push(ve),Ye=$e;break}else if(P[$e]===null){P[$e]=ve,Ye=$e;break}if(Ye===-1)break}const Ve=A[Ye];Ve&&Ve.connect(ve)}}const k=new $,G=new $;function ne(se,_e,ve){k.setFromMatrixPosition(_e.matrixWorld),G.setFromMatrixPosition(ve.matrixWorld);const Ye=k.distanceTo(G),Ve=_e.projectionMatrix.elements,$e=ve.projectionMatrix.elements,O=Ve[14]/(Ve[10]-1),z=Ve[14]/(Ve[10]+1),q=(Ve[9]+1)/Ve[5],le=(Ve[9]-1)/Ve[5],Q=(Ve[8]-1)/Ve[0],ce=($e[8]+1)/$e[0],I=O*Q,me=O*ce,de=Ye/(-Q+ce),ae=de*-Q;if(_e.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ae),se.translateZ(de),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ve[10]===-1)se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const he=O+de,R=z+de,b=I-ae,B=me+(Ye-ae),Y=q*z/R*he,ie=le*z/R*he;se.projectionMatrix.makePerspective(b,B,Y,ie,he,R),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function re(se,_e){_e===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(_e.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let _e=se.near,ve=se.far;p.texture!==null&&(p.depthNear>0&&(_e=p.depthNear),p.depthFar>0&&(ve=p.depthFar)),F.near=U.near=E.near=_e,F.far=U.far=E.far=ve,(V!==F.near||X!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,X=F.far),F.layers.mask=se.layers.mask|6,E.layers.mask=F.layers.mask&-5,U.layers.mask=F.layers.mask&-3;const Ye=se.parent,Ve=F.cameras;re(F,Ye);for(let $e=0;$e<Ve.length;$e++)re(Ve[$e],Ye);Ve.length===2?ne(F,E,U):F.projectionMatrix.copy(E.projectionMatrix),pe(se,F,Ye)};function pe(se,_e,ve){ve===null?se.matrix.copy(_e.matrixWorld):(se.matrix.copy(ve.matrixWorld),se.matrix.invert(),se.matrix.multiply(_e.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ro*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(se){c=se,f!==null&&(f.fixedFoveation=se),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=se)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(se){return m[se]};let Ne=null;function We(se,_e){if(u=_e.getViewerPose(l||o),g=_e,u!==null){const ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Ye=!1;ve.length!==F.cameras.length&&(F.cameras.length=0,Ye=!0);for(let z=0;z<ve.length;z++){const q=ve[z];let le=null;if(h!==null)le=h.getViewport(q);else{const ce=d.getViewSubImage(f,q);le=ce.viewport,z===0&&(e.setRenderTargetTextures(y,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(y))}let Q=D[z];Q===void 0&&(Q=new Un,Q.layers.enable(z),Q.viewport=new Nt,D[z]=Q),Q.matrix.fromArray(q.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(q.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(le.x,le.y,le.width,le.height),z===0&&(F.matrix.copy(Q.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ye===!0&&F.cameras.push(Q)}const Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const z=d.getDepthInformation(ve[0]);z&&z.isValid&&z.texture&&p.init(z,s.renderState)}if(Ve&&Ve.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let z=0;z<ve.length;z++){const q=ve[z].camera;if(q){let le=m[q];le||(le=new W_,m[q]=le);const Q=d.getCameraImage(q);le.sourceTexture=Q}}}}for(let ve=0;ve<A.length;ve++){const Ye=P[ve],Ve=A[ve];Ye!==null&&Ve!==void 0&&Ve.update(Ye,_e,l||o)}Ne&&Ne(se,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),g=null}const qe=new Y_;qe.setAnimationLoop(We),this.setAnimationLoop=function(se){Ne=se},this.dispose=function(){}}}const Ss=new Gi,RU=new Ct;function CU(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,$_(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,w,y){m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,x,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===xn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===xn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),w=x.envMap,y=x.envMapRotation;w&&(p.envMap.value=w,Ss.copy(y),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),p.envMapRotation.value.setFromMatrix4(RU.makeRotationFromEuler(Ss)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=w*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function PU(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,w){const y=w.program;i.uniformBlockBinding(x,y)}function l(x,w){let y=s[x.id];y===void 0&&(g(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",p));const A=w.program;i.updateUBOMapping(x,A);const P=e.render.frame;r[x.id]!==P&&(f(x),r[x.id]=P)}function u(x){const w=d();x.__bindingPointIndex=w;const y=t.createBuffer(),A=x.__size,P=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,y),y}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const w=s[x.id],y=x.uniforms,A=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let P=0,L=y.length;P<L;P++){const S=Array.isArray(y[P])?y[P]:[y[P]];for(let E=0,U=S.length;E<U;E++){const D=S[E];if(h(D,P,E,A)===!0){const F=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let N=0;N<V.length;N++){const M=V[N],T=_(M);typeof M=="number"||typeof M=="boolean"?(D.__data[0]=M,t.bufferSubData(t.UNIFORM_BUFFER,F+X,D.__data)):M.isMatrix3?(D.__data[0]=M.elements[0],D.__data[1]=M.elements[1],D.__data[2]=M.elements[2],D.__data[3]=0,D.__data[4]=M.elements[3],D.__data[5]=M.elements[4],D.__data[6]=M.elements[5],D.__data[7]=0,D.__data[8]=M.elements[6],D.__data[9]=M.elements[7],D.__data[10]=M.elements[8],D.__data[11]=0):(M.toArray(D.__data,X),X+=T.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(x,w,y,A){const P=x.value,L=w+"_"+y;if(A[L]===void 0)return typeof P=="number"||typeof P=="boolean"?A[L]=P:A[L]=P.clone(),!0;{const S=A[L];if(typeof P=="number"||typeof P=="boolean"){if(S!==P)return A[L]=P,!0}else if(S.equals(P)===!1)return S.copy(P),!0}return!1}function g(x){const w=x.uniforms;let y=0;const A=16;for(let L=0,S=w.length;L<S;L++){const E=Array.isArray(w[L])?w[L]:[w[L]];for(let U=0,D=E.length;U<D;U++){const F=E[U],V=Array.isArray(F.value)?F.value:[F.value];for(let X=0,N=V.length;X<N;X++){const M=V[X],T=_(M),k=y%A,G=k%T.boundary,ne=k+G;y+=G,ne!==0&&A-ne<T.storage&&(y+=A-ne),F.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=T.storage}}}const P=y%A;return P>0&&(y+=A-P),x.__size=y,x.__cache={},this}function _(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",x),w}function p(x){const w=x.target;w.removeEventListener("dispose",p);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(const x in s)t.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}const LU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ei=null;function DU(){return ei===null&&(ei=new x2(LU,16,16,Er,Vi),ei.name="DFG_LUT",ei.minFilter=tn,ei.magFilter=tn,ei.wrapS=Ni,ei.wrapT=Ni,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}class IU{constructor(e={}){const{canvas:n=U3(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Fn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=h,p=new Set([td,ed,Qf]),m=new Set([Fn,vi,To,Ao,Zf,Jf]),x=new Uint32Array(4),w=new Int32Array(4);let y=null,A=null;const P=[],L=[];let S=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let U=!1;this._outputColorSpace=Nn;let D=0,F=0,V=null,X=-1,N=null;const M=new Nt,T=new Nt;let k=null;const G=new lt(0);let ne=0,re=n.width,pe=n.height,Ne=1,We=null,qe=null;const se=new Nt(0,0,re,pe),_e=new Nt(0,0,re,pe);let ve=!1;const Ye=new V_;let Ve=!1,$e=!1;const O=new Ct,z=new $,q=new Nt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ce(){return V===null?Ne:1}let I=i;function me(C,W){return n.getContext(C,W)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jf}`),n.addEventListener("webglcontextlost",Oe,!1),n.addEventListener("webglcontextrestored",Je,!1),n.addEventListener("webglcontextcreationerror",Tt,!1),I===null){const W="webgl2";if(I=me(W,C),I===null)throw me(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw ft("WebGLRenderer: "+C.message),C}let de,ae,he,R,b,B,Y,ie,j,Te,xe,Ue,ke,ge,Se,Ae,Le,De,Qe,H,Ee,Me,Fe;function ye(){de=new II(I),de.init(),Ee=new bU(I,de),ae=new wI(I,de,e,Ee),he=new SU(I,de),ae.reversedDepthBuffer&&f&&he.buffers.depth.setReversed(!0),R=new FI(I),b=new aU,B=new MU(I,de,he,b,ae,Ee,R),Y=new DI(E),ie=new V2(I),Me=new bI(I,ie),j=new NI(I,ie,R,Me),Te=new BI(I,j,ie,Me,R),De=new OI(I,ae,B),Se=new TI(b),xe=new oU(E,Y,de,ae,Me,Se),Ue=new CU(E,b),ke=new cU,ge=new mU(de),Le=new MI(E,Y,he,Te,g,c),Ae=new yU(E,Te,ae),Fe=new PU(I,R,ae,he),Qe=new EI(I,de,R),H=new UI(I,de,R),R.programs=xe.programs,E.capabilities=ae,E.extensions=de,E.properties=b,E.renderLists=ke,E.shadowMap=Ae,E.state=he,E.info=R}ye(),_!==Fn&&(S=new zI(_,n.width,n.height,s,r));const oe=new AU(E,I);this.xr=oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=de.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=de.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(C){C!==void 0&&(Ne=C,this.setSize(re,pe,!1))},this.getSize=function(C){return C.set(re,pe)},this.setSize=function(C,W,ee=!0){if(oe.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}re=C,pe=W,n.width=Math.floor(C*Ne),n.height=Math.floor(W*Ne),ee===!0&&(n.style.width=C+"px",n.style.height=W+"px"),S!==null&&S.setSize(n.width,n.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(re*Ne,pe*Ne).floor()},this.setDrawingBufferSize=function(C,W,ee){re=C,pe=W,Ne=ee,n.width=Math.floor(C*ee),n.height=Math.floor(W*ee),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(_===Fn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(se)},this.setViewport=function(C,W,ee,Z){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,W,ee,Z),he.viewport(M.copy(se).multiplyScalar(Ne).round())},this.getScissor=function(C){return C.copy(_e)},this.setScissor=function(C,W,ee,Z){C.isVector4?_e.set(C.x,C.y,C.z,C.w):_e.set(C,W,ee,Z),he.scissor(T.copy(_e).multiplyScalar(Ne).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(C){he.setScissorTest(ve=C)},this.setOpaqueSort=function(C){We=C},this.setTransparentSort=function(C){qe=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,ee=!0){let Z=0;if(C){let K=!1;if(V!==null){const Ce=V.texture.format;K=p.has(Ce)}if(K){const Ce=V.texture.type,Ie=m.has(Ce),Pe=Le.getClearColor(),Be=Le.getClearAlpha(),He=Pe.r,et=Pe.g,st=Pe.b;Ie?(x[0]=He,x[1]=et,x[2]=st,x[3]=Be,I.clearBufferuiv(I.COLOR,0,x)):(w[0]=He,w[1]=et,w[2]=st,w[3]=Be,I.clearBufferiv(I.COLOR,0,w))}else Z|=I.COLOR_BUFFER_BIT}W&&(Z|=I.DEPTH_BUFFER_BIT),ee&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Oe,!1),n.removeEventListener("webglcontextrestored",Je,!1),n.removeEventListener("webglcontextcreationerror",Tt,!1),Le.dispose(),ke.dispose(),ge.dispose(),b.dispose(),Y.dispose(),Te.dispose(),Me.dispose(),Fe.dispose(),xe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ud),oe.removeEventListener("sessionend",fd),us.stop()};function Oe(C){C.preventDefault(),tp("WebGLRenderer: Context Lost."),U=!0}function Je(){tp("WebGLRenderer: Context Restored."),U=!1;const C=R.autoReset,W=Ae.enabled,ee=Ae.autoUpdate,Z=Ae.needsUpdate,K=Ae.type;ye(),R.autoReset=C,Ae.enabled=W,Ae.autoUpdate=ee,Ae.needsUpdate=Z,Ae.type=K}function Tt(C){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function gt(C){const W=C.target;W.removeEventListener("dispose",gt),yi(W)}function yi(C){Si(C),b.remove(C)}function Si(C){const W=b.get(C).programs;W!==void 0&&(W.forEach(function(ee){xe.releaseProgram(ee)}),C.isShaderMaterial&&xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ee,Z,K,Ce){W===null&&(W=le);const Ie=K.isMesh&&K.matrixWorld.determinant()<0,Pe=n0(C,W,ee,Z,K);he.setMaterial(Z,Ie);let Be=ee.index,He=1;if(Z.wireframe===!0){if(Be=j.getWireframeAttribute(ee),Be===void 0)return;He=2}const et=ee.drawRange,st=ee.attributes.position;let Ge=et.start*He,vt=(et.start+et.count)*He;Ce!==null&&(Ge=Math.max(Ge,Ce.start*He),vt=Math.min(vt,(Ce.start+Ce.count)*He)),Be!==null?(Ge=Math.max(Ge,0),vt=Math.min(vt,Be.count)):st!=null&&(Ge=Math.max(Ge,0),vt=Math.min(vt,st.count));const Dt=vt-Ge;if(Dt<0||Dt===1/0)return;Me.setup(K,Z,Pe,ee,Be);let Pt,xt=Qe;if(Be!==null&&(Pt=ie.get(Be),xt=H,xt.setIndex(Pt)),K.isMesh)Z.wireframe===!0?(he.setLineWidth(Z.wireframeLinewidth*ce()),xt.setMode(I.LINES)):xt.setMode(I.TRIANGLES);else if(K.isLine){let Xt=Z.linewidth;Xt===void 0&&(Xt=1),he.setLineWidth(Xt*ce()),K.isLineSegments?xt.setMode(I.LINES):K.isLineLoop?xt.setMode(I.LINE_LOOP):xt.setMode(I.LINE_STRIP)}else K.isPoints?xt.setMode(I.POINTS):K.isSprite&&xt.setMode(I.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)dl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))xt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Xt=K._multiDrawStarts,ze=K._multiDrawCounts,Mn=K._multiDrawCount,ut=Be?ie.get(Be).bytesPerElement:1,On=b.get(Z).currentProgram.getUniforms();for(let Zn=0;Zn<Mn;Zn++)On.setValue(I,"_gl_DrawID",Zn),xt.render(Xt[Zn]/ut,ze[Zn])}else if(K.isInstancedMesh)xt.renderInstances(Ge,Dt,K.count);else if(ee.isInstancedBufferGeometry){const Xt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,ze=Math.min(ee.instanceCount,Xt);xt.renderInstances(Ge,Dt,ze)}else xt.render(Ge,Dt)};function cd(C,W,ee){C.transparent===!0&&C.side===ai&&C.forceSinglePass===!1?(C.side=xn,C.needsUpdate=!0,Xo(C,W,ee),C.side=ls,C.needsUpdate=!0,Xo(C,W,ee),C.side=ai):Xo(C,W,ee)}this.compile=function(C,W,ee=null){ee===null&&(ee=C),A=ge.get(ee),A.init(W),L.push(A),ee.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(A.pushLight(K),K.castShadow&&A.pushShadow(K))}),C!==ee&&C.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(A.pushLight(K),K.castShadow&&A.pushShadow(K))}),A.setupLights();const Z=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ce=K.material;if(Ce)if(Array.isArray(Ce))for(let Ie=0;Ie<Ce.length;Ie++){const Pe=Ce[Ie];cd(Pe,ee,K),Z.add(Pe)}else cd(Ce,ee,K),Z.add(Ce)}),A=L.pop(),Z},this.compileAsync=function(C,W,ee=null){const Z=this.compile(C,W,ee);return new Promise(K=>{function Ce(){if(Z.forEach(function(Ie){b.get(Ie).currentProgram.isReady()&&Z.delete(Ie)}),Z.size===0){K(C);return}setTimeout(Ce,10)}de.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let ql=null;function t0(C){ql&&ql(C)}function ud(){us.stop()}function fd(){us.start()}const us=new Y_;us.setAnimationLoop(t0),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(C){ql=C,oe.setAnimationLoop(C),C===null?us.stop():us.start()},oe.addEventListener("sessionstart",ud),oe.addEventListener("sessionend",fd),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const ee=oe.enabled===!0&&oe.isPresenting===!0,Z=S!==null&&(V===null||ee)&&S.begin(E,V);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(W),W=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,W,V),A=ge.get(C,L.length),A.init(W),L.push(A),O.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ye.setFromProjectionMatrix(O,ui,W.reversedDepth),$e=this.localClippingEnabled,Ve=Se.init(this.clippingPlanes,$e),y=ke.get(C,P.length),y.init(),P.push(y),oe.enabled===!0&&oe.isPresenting===!0){const Ie=E.xr.getDepthSensingMesh();Ie!==null&&Yl(Ie,W,-1/0,E.sortObjects)}Yl(C,W,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(We,qe),Q=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Q&&Le.addToRenderList(y,C),this.info.render.frame++,Ve===!0&&Se.beginShadows();const K=A.state.shadowsArray;if(Ae.render(K,C,W),Ve===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&S.hasRenderPass())===!1){const Ie=y.opaque,Pe=y.transmissive;if(A.setupLights(),W.isArrayCamera){const Be=W.cameras;if(Pe.length>0)for(let He=0,et=Be.length;He<et;He++){const st=Be[He];hd(Ie,Pe,C,st)}Q&&Le.render(C);for(let He=0,et=Be.length;He<et;He++){const st=Be[He];dd(y,C,st,st.viewport)}}else Pe.length>0&&hd(Ie,Pe,C,W),Q&&Le.render(C),dd(y,C,W)}V!==null&&F===0&&(B.updateMultisampleRenderTarget(V),B.updateRenderTargetMipmap(V)),Z&&S.end(E),C.isScene===!0&&C.onAfterRender(E,C,W),Me.resetDefaultState(),X=-1,N=null,L.pop(),L.length>0?(A=L[L.length-1],Ve===!0&&Se.setGlobalState(E.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function Yl(C,W,ee,Z){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)A.pushLight(C),C.castShadow&&A.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ye.intersectsSprite(C)){Z&&q.setFromMatrixPosition(C.matrixWorld).applyMatrix4(O);const Ie=Te.update(C),Pe=C.material;Pe.visible&&y.push(C,Ie,Pe,ee,q.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ye.intersectsObject(C))){const Ie=Te.update(C),Pe=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),q.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),q.copy(Ie.boundingSphere.center)),q.applyMatrix4(C.matrixWorld).applyMatrix4(O)),Array.isArray(Pe)){const Be=Ie.groups;for(let He=0,et=Be.length;He<et;He++){const st=Be[He],Ge=Pe[st.materialIndex];Ge&&Ge.visible&&y.push(C,Ie,Ge,ee,q.z,st)}}else Pe.visible&&y.push(C,Ie,Pe,ee,q.z,null)}}const Ce=C.children;for(let Ie=0,Pe=Ce.length;Ie<Pe;Ie++)Yl(Ce[Ie],W,ee,Z)}function dd(C,W,ee,Z){const{opaque:K,transmissive:Ce,transparent:Ie}=C;A.setupLightsView(ee),Ve===!0&&Se.setGlobalState(E.clippingPlanes,ee),Z&&he.viewport(M.copy(Z)),K.length>0&&$o(K,W,ee),Ce.length>0&&$o(Ce,W,ee),Ie.length>0&&$o(Ie,W,ee),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function hd(C,W,ee,Z){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Z.id]===void 0){const Ge=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Z.id]=new gi(1,1,{generateMipmaps:!0,type:Ge?Vi:Fn,minFilter:Ls,samples:Math.max(4,ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Ce=A.state.transmissionRenderTarget[Z.id],Ie=Z.viewport||M;Ce.setSize(Ie.z*E.transmissionResolutionScale,Ie.w*E.transmissionResolutionScale);const Pe=E.getRenderTarget(),Be=E.getActiveCubeFace(),He=E.getActiveMipmapLevel();E.setRenderTarget(Ce),E.getClearColor(G),ne=E.getClearAlpha(),ne<1&&E.setClearColor(16777215,.5),E.clear(),Q&&Le.render(ee);const et=E.toneMapping;E.toneMapping=mi;const st=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),A.setupLightsView(Z),Ve===!0&&Se.setGlobalState(E.clippingPlanes,Z),$o(C,ee,Z),B.updateMultisampleRenderTarget(Ce),B.updateRenderTargetMipmap(Ce),de.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let vt=0,Dt=W.length;vt<Dt;vt++){const Pt=W[vt],{object:xt,geometry:Xt,material:ze,group:Mn}=Pt;if(ze.side===ai&&xt.layers.test(Z.layers)){const ut=ze.side;ze.side=xn,ze.needsUpdate=!0,pd(xt,ee,Z,Xt,ze,Mn),ze.side=ut,ze.needsUpdate=!0,Ge=!0}}Ge===!0&&(B.updateMultisampleRenderTarget(Ce),B.updateRenderTargetMipmap(Ce))}E.setRenderTarget(Pe,Be,He),E.setClearColor(G,ne),st!==void 0&&(Z.viewport=st),E.toneMapping=et}function $o(C,W,ee){const Z=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Ce=C.length;K<Ce;K++){const Ie=C[K],{object:Pe,geometry:Be,group:He}=Ie;let et=Ie.material;et.allowOverride===!0&&Z!==null&&(et=Z),Pe.layers.test(ee.layers)&&pd(Pe,W,ee,Be,et,He)}}function pd(C,W,ee,Z,K,Ce){C.onBeforeRender(E,W,ee,Z,K,Ce),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(E,W,ee,Z,C,Ce),K.transparent===!0&&K.side===ai&&K.forceSinglePass===!1?(K.side=xn,K.needsUpdate=!0,E.renderBufferDirect(ee,W,Z,K,C,Ce),K.side=ls,K.needsUpdate=!0,E.renderBufferDirect(ee,W,Z,K,C,Ce),K.side=ai):E.renderBufferDirect(ee,W,Z,K,C,Ce),C.onAfterRender(E,W,ee,Z,K,Ce)}function Xo(C,W,ee){W.isScene!==!0&&(W=le);const Z=b.get(C),K=A.state.lights,Ce=A.state.shadowsArray,Ie=K.state.version,Pe=xe.getParameters(C,K.state,Ce,W,ee),Be=xe.getProgramCacheKey(Pe);let He=Z.programs;Z.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,Z.fog=W.fog;const et=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Z.envMap=Y.get(C.envMap||Z.environment,et),Z.envMapRotation=Z.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,He===void 0&&(C.addEventListener("dispose",gt),He=new Map,Z.programs=He);let st=He.get(Be);if(st!==void 0){if(Z.currentProgram===st&&Z.lightsStateVersion===Ie)return gd(C,Pe),st}else Pe.uniforms=xe.getUniforms(C),C.onBeforeCompile(Pe,E),st=xe.acquireProgram(Pe,Be),He.set(Be,st),Z.uniforms=Pe.uniforms;const Ge=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=Se.uniform),gd(C,Pe),Z.needsLights=s0(C),Z.lightsStateVersion=Ie,Z.needsLights&&(Ge.ambientLightColor.value=K.state.ambient,Ge.lightProbe.value=K.state.probe,Ge.directionalLights.value=K.state.directional,Ge.directionalLightShadows.value=K.state.directionalShadow,Ge.spotLights.value=K.state.spot,Ge.spotLightShadows.value=K.state.spotShadow,Ge.rectAreaLights.value=K.state.rectArea,Ge.ltc_1.value=K.state.rectAreaLTC1,Ge.ltc_2.value=K.state.rectAreaLTC2,Ge.pointLights.value=K.state.point,Ge.pointLightShadows.value=K.state.pointShadow,Ge.hemisphereLights.value=K.state.hemi,Ge.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ge.spotLightMatrix.value=K.state.spotLightMatrix,Ge.spotLightMap.value=K.state.spotLightMap,Ge.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.currentProgram=st,Z.uniformsList=null,st}function md(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Ga.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function gd(C,W){const ee=b.get(C);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function n0(C,W,ee,Z,K){W.isScene!==!0&&(W=le),B.resetTextureUnits();const Ce=W.fog,Ie=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?W.environment:null,Pe=V===null?E.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:wr,Be=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,He=Y.get(Z.envMap||Ie,Be),et=Z.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,st=!!ee.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ge=!!ee.morphAttributes.position,vt=!!ee.morphAttributes.normal,Dt=!!ee.morphAttributes.color;let Pt=mi;Z.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Pt=E.toneMapping);const xt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Xt=xt!==void 0?xt.length:0,ze=b.get(Z),Mn=A.state.lights;if(Ve===!0&&($e===!0||C!==N)){const Ht=C===N&&Z.id===X;Se.setState(Z,C,Ht)}let ut=!1;Z.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Mn.state.version||ze.outputColorSpace!==Pe||K.isBatchedMesh&&ze.batching===!1||!K.isBatchedMesh&&ze.batching===!0||K.isBatchedMesh&&ze.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ze.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ze.instancing===!1||!K.isInstancedMesh&&ze.instancing===!0||K.isSkinnedMesh&&ze.skinning===!1||!K.isSkinnedMesh&&ze.skinning===!0||K.isInstancedMesh&&ze.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ze.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ze.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ze.instancingMorph===!1&&K.morphTexture!==null||ze.envMap!==He||Z.fog===!0&&ze.fog!==Ce||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Se.numPlanes||ze.numIntersection!==Se.numIntersection)||ze.vertexAlphas!==et||ze.vertexTangents!==st||ze.morphTargets!==Ge||ze.morphNormals!==vt||ze.morphColors!==Dt||ze.toneMapping!==Pt||ze.morphTargetsCount!==Xt)&&(ut=!0):(ut=!0,ze.__version=Z.version);let On=ze.currentProgram;ut===!0&&(On=Xo(Z,W,K));let Zn=!1,fs=!1,Vs=!1;const Mt=On.getUniforms(),Wt=ze.uniforms;if(he.useProgram(On.program)&&(Zn=!0,fs=!0,Vs=!0),Z.id!==X&&(X=Z.id,fs=!0),Zn||N!==C){he.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Mt.setValue(I,"projectionMatrix",C.projectionMatrix),Mt.setValue(I,"viewMatrix",C.matrixWorldInverse);const qi=Mt.map.cameraPosition;qi!==void 0&&qi.setValue(I,z.setFromMatrixPosition(C.matrixWorld)),ae.logarithmicDepthBuffer&&Mt.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Mt.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),N!==C&&(N=C,fs=!0,Vs=!0)}if(ze.needsLights&&(Mn.state.directionalShadowMap.length>0&&Mt.setValue(I,"directionalShadowMap",Mn.state.directionalShadowMap,B),Mn.state.spotShadowMap.length>0&&Mt.setValue(I,"spotShadowMap",Mn.state.spotShadowMap,B),Mn.state.pointShadowMap.length>0&&Mt.setValue(I,"pointShadowMap",Mn.state.pointShadowMap,B)),K.isSkinnedMesh){Mt.setOptional(I,K,"bindMatrix"),Mt.setOptional(I,K,"bindMatrixInverse");const Ht=K.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Mt.setValue(I,"boneTexture",Ht.boneTexture,B))}K.isBatchedMesh&&(Mt.setOptional(I,K,"batchingTexture"),Mt.setValue(I,"batchingTexture",K._matricesTexture,B),Mt.setOptional(I,K,"batchingIdTexture"),Mt.setValue(I,"batchingIdTexture",K._indirectTexture,B),Mt.setOptional(I,K,"batchingColorTexture"),K._colorsTexture!==null&&Mt.setValue(I,"batchingColorTexture",K._colorsTexture,B));const Xi=ee.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&De.update(K,ee,On),(fs||ze.receiveShadow!==K.receiveShadow)&&(ze.receiveShadow=K.receiveShadow,Mt.setValue(I,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&W.environment!==null&&(Wt.envMapIntensity.value=W.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=DU()),fs&&(Mt.setValue(I,"toneMappingExposure",E.toneMappingExposure),ze.needsLights&&i0(Wt,Vs),Ce&&Z.fog===!0&&Ue.refreshFogUniforms(Wt,Ce),Ue.refreshMaterialUniforms(Wt,Z,Ne,pe,A.state.transmissionRenderTarget[C.id]),Ga.upload(I,md(ze),Wt,B)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ga.upload(I,md(ze),Wt,B),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Mt.setValue(I,"center",K.center),Mt.setValue(I,"modelViewMatrix",K.modelViewMatrix),Mt.setValue(I,"normalMatrix",K.normalMatrix),Mt.setValue(I,"modelMatrix",K.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Ht=Z.uniformsGroups;for(let qi=0,Hs=Ht.length;qi<Hs;qi++){const _d=Ht[qi];Fe.update(_d,On),Fe.bind(_d,On)}}return On}function i0(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function s0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,W,ee){const Z=b.get(C);Z.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=W,b.get(C.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ee,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const ee=b.get(C);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0};const r0=I.createFramebuffer();this.setRenderTarget=function(C,W=0,ee=0){V=C,D=W,F=ee;let Z=null,K=!1,Ce=!1;if(C){const Pe=b.get(C);if(Pe.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(I.FRAMEBUFFER,Pe.__webglFramebuffer),M.copy(C.viewport),T.copy(C.scissor),k=C.scissorTest,he.viewport(M),he.scissor(T),he.setScissorTest(k),X=-1;return}else if(Pe.__webglFramebuffer===void 0)B.setupRenderTarget(C);else if(Pe.__hasExternalTextures)B.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(Pe.__boundDepthTexture!==et){if(et!==null&&b.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(C)}}const Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ce=!0);const He=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(He[W])?Z=He[W][ee]:Z=He[W],K=!0):C.samples>0&&B.useMultisampledRTT(C)===!1?Z=b.get(C).__webglMultisampledFramebuffer:Array.isArray(He)?Z=He[ee]:Z=He,M.copy(C.viewport),T.copy(C.scissor),k=C.scissorTest}else M.copy(se).multiplyScalar(Ne).floor(),T.copy(_e).multiplyScalar(Ne).floor(),k=ve;if(ee!==0&&(Z=r0),he.bindFramebuffer(I.FRAMEBUFFER,Z)&&he.drawBuffers(C,Z),he.viewport(M),he.scissor(T),he.setScissorTest(k),K){const Pe=b.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pe.__webglTexture,ee)}else if(Ce){const Pe=W;for(let Be=0;Be<C.textures.length;Be++){const He=b.get(C.textures[Be]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Be,He.__webglTexture,ee,Pe)}}else if(C!==null&&ee!==0){const Pe=b.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pe.__webglTexture,ee)}X=-1},this.readRenderTargetPixels=function(C,W,ee,Z,K,Ce,Ie,Pe=0){if(!(C&&C.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){he.bindFramebuffer(I.FRAMEBUFFER,Be);try{const He=C.textures[Pe],et=He.format,st=He.type;if(C.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pe),!ae.textureFormatReadable(et)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(st)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-Z&&ee>=0&&ee<=C.height-K&&I.readPixels(W,ee,Z,K,Ee.convert(et),Ee.convert(st),Ce)}finally{const He=V!==null?b.get(V).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(C,W,ee,Z,K,Ce,Ie,Pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be)if(W>=0&&W<=C.width-Z&&ee>=0&&ee<=C.height-K){he.bindFramebuffer(I.FRAMEBUFFER,Be);const He=C.textures[Pe],et=He.format,st=He.type;if(C.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pe),!ae.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ge),I.bufferData(I.PIXEL_PACK_BUFFER,Ce.byteLength,I.STREAM_READ),I.readPixels(W,ee,Z,K,Ee.convert(et),Ee.convert(st),0);const vt=V!==null?b.get(V).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,vt);const Dt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await F3(I,Dt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ge),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ce),I.deleteBuffer(Ge),I.deleteSync(Dt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,ee=0){const Z=Math.pow(2,-ee),K=Math.floor(C.image.width*Z),Ce=Math.floor(C.image.height*Z),Ie=W!==null?W.x:0,Pe=W!==null?W.y:0;B.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,ee,0,0,Ie,Pe,K,Ce),he.unbindTexture()};const o0=I.createFramebuffer(),a0=I.createFramebuffer();this.copyTextureToTexture=function(C,W,ee=null,Z=null,K=0,Ce=0){let Ie,Pe,Be,He,et,st,Ge,vt,Dt;const Pt=C.isCompressedTexture?C.mipmaps[Ce]:C.image;if(ee!==null)Ie=ee.max.x-ee.min.x,Pe=ee.max.y-ee.min.y,Be=ee.isBox3?ee.max.z-ee.min.z:1,He=ee.min.x,et=ee.min.y,st=ee.isBox3?ee.min.z:0;else{const Wt=Math.pow(2,-K);Ie=Math.floor(Pt.width*Wt),Pe=Math.floor(Pt.height*Wt),C.isDataArrayTexture?Be=Pt.depth:C.isData3DTexture?Be=Math.floor(Pt.depth*Wt):Be=1,He=0,et=0,st=0}Z!==null?(Ge=Z.x,vt=Z.y,Dt=Z.z):(Ge=0,vt=0,Dt=0);const xt=Ee.convert(W.format),Xt=Ee.convert(W.type);let ze;W.isData3DTexture?(B.setTexture3D(W,0),ze=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(B.setTexture2DArray(W,0),ze=I.TEXTURE_2D_ARRAY):(B.setTexture2D(W,0),ze=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Mn=I.getParameter(I.UNPACK_ROW_LENGTH),ut=I.getParameter(I.UNPACK_IMAGE_HEIGHT),On=I.getParameter(I.UNPACK_SKIP_PIXELS),Zn=I.getParameter(I.UNPACK_SKIP_ROWS),fs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,He),I.pixelStorei(I.UNPACK_SKIP_ROWS,et),I.pixelStorei(I.UNPACK_SKIP_IMAGES,st);const Vs=C.isDataArrayTexture||C.isData3DTexture,Mt=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const Wt=b.get(C),Xi=b.get(W),Ht=b.get(Wt.__renderTarget),qi=b.get(Xi.__renderTarget);he.bindFramebuffer(I.READ_FRAMEBUFFER,Ht.__webglFramebuffer),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Hs=0;Hs<Be;Hs++)Vs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,b.get(C).__webglTexture,K,st+Hs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,b.get(W).__webglTexture,Ce,Dt+Hs)),I.blitFramebuffer(He,et,Ie,Pe,Ge,vt,Ie,Pe,I.DEPTH_BUFFER_BIT,I.NEAREST);he.bindFramebuffer(I.READ_FRAMEBUFFER,null),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||b.has(C)){const Wt=b.get(C),Xi=b.get(W);he.bindFramebuffer(I.READ_FRAMEBUFFER,o0),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,a0);for(let Ht=0;Ht<Be;Ht++)Vs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.__webglTexture,K,st+Ht):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Wt.__webglTexture,K),Mt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xi.__webglTexture,Ce,Dt+Ht):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xi.__webglTexture,Ce),K!==0?I.blitFramebuffer(He,et,Ie,Pe,Ge,vt,Ie,Pe,I.COLOR_BUFFER_BIT,I.NEAREST):Mt?I.copyTexSubImage3D(ze,Ce,Ge,vt,Dt+Ht,He,et,Ie,Pe):I.copyTexSubImage2D(ze,Ce,Ge,vt,He,et,Ie,Pe);he.bindFramebuffer(I.READ_FRAMEBUFFER,null),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Mt?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(ze,Ce,Ge,vt,Dt,Ie,Pe,Be,xt,Xt,Pt.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(ze,Ce,Ge,vt,Dt,Ie,Pe,Be,xt,Pt.data):I.texSubImage3D(ze,Ce,Ge,vt,Dt,Ie,Pe,Be,xt,Xt,Pt):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ce,Ge,vt,Ie,Pe,xt,Xt,Pt.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ce,Ge,vt,Pt.width,Pt.height,xt,Pt.data):I.texSubImage2D(I.TEXTURE_2D,Ce,Ge,vt,Ie,Pe,xt,Xt,Pt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Mn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut),I.pixelStorei(I.UNPACK_SKIP_PIXELS,On),I.pixelStorei(I.UNPACK_SKIP_ROWS,Zn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,fs),Ce===0&&W.generateMipmaps&&I.generateMipmap(ze),he.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&B.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?B.setTextureCube(C,0):C.isData3DTexture?B.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?B.setTexture2DArray(C,0):B.setTexture2D(C,0),he.unbindTexture()},this.resetState=function(){D=0,F=0,V=null,he.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),n.unpackColorSpace=at._getUnpackColorSpace()}}const NU={class:"brain-3d-container"},UU={class:"brain-overlay"},FU={class:"brain-stats"},OU={class:"stat-item"},BU={class:"stat-value"},kU={class:"stat-item"},zU={class:"stat-value"},VU={class:"stat-item"},HU={class:"stat-value"},GU={key:0,class:"loading-overlay"},WU=30,$U=400,XU=1.5,Kp=1200,qU=yn({__name:"Brain3D",props:{stats:{}},setup(t){const e=t,n=we(),i=we(!0),s=we(0),r=we(0),o=we(0);let a=null,c=null,l=null,u=null,d=null,f=null,h=null;const g={storage:4886754,thinking:16098851,skill:8311585,core:65345,inactive:3355443};function _(N){return Math.min($U,Math.max(WU,Math.floor(N*XU)))}function p(N){return Math.min(300,Math.max(10,Math.floor(N*.6)))}const m=St(()=>{var T,k;const N=((T=e.stats)==null?void 0:T.memory_count)||0,M=(k=e.stats)==null?void 0:k.tiered_breakdown;return{total:N,storage:(M==null?void 0:M.storage)??0,thinking:(M==null?void 0:M.thinking)??0,skill:(M==null?void 0:M.skill)??0,activeRegions:[((M==null?void 0:M.storage)??0)>0?1:0,((M==null?void 0:M.thinking)??0)>0?1:0,((M==null?void 0:M.skill)??0)>0?1:0].reduce((G,ne)=>G+ne,0)}});Yn(()=>{x()}),Ar(()=>{X()}),hi(()=>e.stats,N=>{N&&U(N)},{deep:!0});function x(){if(!n.value)return;const N=n.value,M=N.clientWidth,T=N.clientHeight;a=new h2,a.background=new lt(1296),c=new Un(60,M/T,.1,1e3),c.position.z=40,l=new IU({antialias:!0,alpha:!0,powerPreference:"high-performance"}),l.setSize(M,T),l.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),N.appendChild(l.domElement),u=new Qr,a.add(u),w(),y(),A(),e.stats&&U(e.stats),F(),window.addEventListener("resize",V),i.value=!1}function w(){if(!u)return;const N=new ml(6,1),M=new As({color:65345,wireframe:!0,transparent:!0,opacity:.3}),T=new Kt(N,M);u.add(T);const k=new ml(4,1),G=new As({color:65345,transparent:!0,opacity:.5}),ne=new Kt(k,G);u.add(ne);const re=new gl(1.5,16,16),pe=new As({color:65345,transparent:!0,opacity:.8}),Ne=new Kt(re,pe);u.add(Ne),[{name:"storage",position:[-5,2,0],color:g.storage},{name:"thinking",position:[5,2,0],color:g.thinking},{name:"skill",position:[0,-4,2],color:g.skill}].forEach(qe=>{const se=new gl(1.2,12,12),_e=new As({color:qe.color,transparent:!0,opacity:.7}),ve=new Kt(se,_e);ve.position.set(qe.position[0],qe.position[1],qe.position[2]),ve.userData={region:qe.name,baseScale:1},u.add(ve);const Ye=new ld(1.5,1.8,32),Ve=new As({color:qe.color,transparent:!0,opacity:.3,side:ai}),$e=new Kt(Ye,Ve);$e.position.set(qe.position[0],qe.position[1],qe.position[2]+.1),$e.userData={region:qe.name},u.add($e)})}function y(){if(!u)return;const N=m.value,M=N.total||50,T=_(M),k=new nn,G=new Float32Array(T*3),ne=new Float32Array(T*3),re=new Float32Array(T),pe=P(N.storage,N.thinking,N.skill);for(let We=0;We<T;We++){const qe=Math.random()*Math.PI*2,se=Math.acos(2*Math.random()-1),_e=5+Math.random()*4;G[We*3]=_e*Math.sin(se)*Math.cos(qe),G[We*3+1]=_e*Math.sin(se)*Math.sin(qe),G[We*3+2]=_e*Math.cos(se);const ve=L(pe);ne[We*3]=ve.r,ne[We*3+1]=ve.g,ne[We*3+2]=ve.b,re[We]=.5+Math.random()*1.5}k.setAttribute("position",new Rn(G,3)),k.setAttribute("color",new Rn(ne,3)),k.setAttribute("size",new Rn(re,1));const Ne=new Cn({uniforms:{uTime:{value:0},uPulseIntensity:{value:1}},vertexShader:`
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
    `,transparent:!0,vertexColors:!0,blending:Mu,depthWrite:!1});f=new Mp(k,Ne),u.add(f),s.value=T}function A(){if(!u)return;const N=m.value,M=p(N.total||50),T=[];for(let ne=0;ne<M;ne++){const re=Math.random()*Math.PI*2,pe=Math.acos(2*Math.random()-1),Ne=5+Math.random()*3,We=new $(Ne*Math.sin(pe)*Math.cos(re),Ne*Math.sin(pe)*Math.sin(re),Ne*Math.cos(pe)),qe=We.clone().multiplyScalar(.5+Math.random()*.3),se=Math.random()*Math.PI*2,_e=Math.acos(2*Math.random()-1),ve=5+Math.random()*3,Ye=new $(ve*Math.sin(_e)*Math.cos(se),ve*Math.sin(_e)*Math.sin(se),ve*Math.cos(_e)),$e=new P2(We,qe,Ye).getPoints(8);T.push(...$e)}const k=new nn().setFromPoints(T),G=new hf({color:65345,transparent:!0,opacity:.15});h=new b2(k,G),h.userData.isSynapse=!0,u.add(h),r.value=M,o.value=N.activeRegions}function P(N,M,T){const k=N+M+T;return k===0?{storage:.33,thinking:.33,skill:.34}:{storage:N/k,thinking:M/k,skill:T/k}}function L(N){const M=Math.random();let T=0;const k=["storage","thinking","skill"];for(const G of k)if(T+=N[G],M<=T)return new lt(g[G]);return new lt(g.skill)}let S=null,E=0;function U(N){var re,pe,Ne;if(!u)return;const M=N.memory_count||0,T=((re=N.tiered_breakdown)==null?void 0:re.storage)||0,k=((pe=N.tiered_breakdown)==null?void 0:pe.thinking)||0,G=((Ne=N.tiered_breakdown)==null?void 0:Ne.skill)||0;S={particleCount:_(M),synapseCount:p(M),regionOpacities:{},regionScales:{},regionWeights:P(T,k,G)};const ne=Math.max(T,k,G,1);["storage","thinking","skill"].forEach(We=>{const qe=We==="storage"?T:We==="thinking"?k:G;S.regionOpacities[We]=qe>0?.3+qe/ne*.7:.15,S.regionScales[We]=qe>0?.8+qe/ne*.7:.6}),E=performance.now(),o.value=[T>0,k>0,G>0].filter(Boolean).length}function D(N){if(!S||!u)return;const M=S,T=Math.min(1,N);if(u.children.forEach(k=>{if(!(k instanceof Kt))return;const G=k.userData.region;if(!G)return;const ne=k.material,re=M.regionOpacities[G]??.3,pe=M.regionScales[G]??1;ne.opacity=zr.lerp(ne.opacity,re,T*.1);const Ne=k.scale.x,We=zr.lerp(Ne,pe,T*.08);k.scale.setScalar(We)}),f&&f.material instanceof Cn){const k=.8+T*.4;f.material.uniforms.uPulseIntensity.value=k}if(h&&h.material instanceof hf){const k=.1+T*.15;h.material.opacity=zr.lerp(h.material.opacity,k,T*.05)}s.value=Math.round(zr.lerp(s.value,M.particleCount,T*.03)),r.value=Math.round(zr.lerp(r.value,M.synapseCount,T*.03))}function F(){if(!a||!c||!l||!u)return;d=requestAnimationFrame(F);const N=performance.now()*.001;if(u.rotation.y=N*.15,u.rotation.x=Math.sin(N*.3)*.1,f&&f.material instanceof Cn&&(f.material.uniforms.uTime.value=N),S&&E>0){const M=performance.now()-E;D(M/Kp),M>Kp*3&&(S=null,E=0)}l.render(a,c)}function V(){if(!n.value||!c||!l)return;const N=n.value.clientWidth,M=n.value.clientHeight;c.aspect=N/M,c.updateProjectionMatrix(),l.setSize(N,M)}function X(){d&&(cancelAnimationFrame(d),d=null),window.removeEventListener("resize",V),u&&(u.traverse(N=>{(N instanceof Kt||N instanceof Mp||N instanceof H_)&&(N.geometry&&N.geometry.dispose(),N.material&&(Array.isArray(N.material)?N.material.forEach(M=>M.dispose()):N.material.dispose()))}),a&&a.remove(u)),l&&(l.dispose(),l.forceContextLoss(),n.value&&l.domElement.parentNode===n.value&&n.value.removeChild(l.domElement)),a=null,c=null,l=null,u=null,f=null,h=null,S=null}return(N,M)=>(ue(),fe("div",NU,[v("div",{ref_key:"canvasRef",ref:n,class:"canvas-wrapper"},null,512),v("div",UU,[v("div",FU,[v("div",OU,[M[0]||(M[0]=v("span",{class:"stat-label"},"神经元",-1)),v("span",BU,te(s.value),1)]),v("div",kU,[M[1]||(M[1]=v("span",{class:"stat-label"},"突触连接",-1)),v("span",zU,te(r.value),1)]),v("div",VU,[M[2]||(M[2]=v("span",{class:"stat-label"},"活跃区域",-1)),v("span",HU,te(o.value),1)])])]),i.value?(ue(),fe("div",GU,[...M[3]||(M[3]=[v("div",{class:"loading-spinner"},null,-1),v("p",null,"初始化大脑模型...",-1)])])):nt("",!0)]))}}),YU=Sn(qU,[["__scopeId","data-v-753278d5"]]),jU={class:"app-container"},KU={class:"main-sidebar"},ZU={class:"sidebar-header"},JU={class:"status-label"},QU={class:"sidebar-nav"},eF=["onClick"],tF={class:"nav-icon"},nF={class:"nav-text"},iF={class:"sidebar-actions"},sF={class:"action-grid"},rF=["disabled"],oF={class:"btn-text"},aF=["disabled"],lF={class:"btn-text"},cF={class:"viewport"},uF={class:"top-bar"},fF={class:"view-title"},dF={class:"top-stats"},hF={class:"view-content"},pF={key:0,class:"dashboard-layout"},mF={class:"visual-section card-glass"},gF={class:"graph-section card-glass"},_F={class:"logs-section card-glass"},vF={key:1,class:"full-view card-glass"},xF={key:2,class:"centered-view card-glass"},yF={key:3,class:"full-view card-glass"},SF={key:4,class:"split-view"},MF={key:5,class:"full-view card-glass"},bF={key:6,class:"centered-view card-glass"},EF={key:7,class:"full-view card-glass"},wF={key:0,class:"detail-panel card-glass"},TF={class:"modal-title"},AF={class:"modal-content"},RF={class:"info-row"},CF={class:"info-section"},PF={class:"meta-grid"},LF={class:"meta-box"},DF={class:"val"},IF={class:"meta-box"},NF={class:"val"},UF={class:"meta-box"},FF={class:"val"},OF=yn({__name:"App",setup(t){const e=$i(),{graphData:n,isLoading:i,evolutionStatus:s,stats:r}=Rr(e),o=[{id:"overview",label:"概览",icon:"📊"},{id:"memory-list",label:"记忆列表",icon:"📋"},{id:"write",label:"写入",icon:"✏️"},{id:"tiered",label:"三层记忆",icon:"🧠"},{id:"brain",label:"AI大脑",icon:"🤖"},{id:"llm",label:"LLM交互",icon:"🤖"},{id:"evolution",label:"进化配置",icon:"⚙️"},{id:"merge",label:"合并链",icon:"🔗"}],a=we("overview"),c=we(null),l=we(null),u=we(!1),d=we(!1),f=we(!1),h=H0(null),g=we({}),_=St(()=>{var N,M;return((N=s.value)==null?void 0:N.enabled)&&((M=s.value)==null?void 0:M.running)}),p=St(()=>{const N=o.find(M=>M.id===a.value);return(N==null?void 0:N.label)||"概览"});Yn(async()=>{e.addLog("初始化系统...","info");try{await e.fetchStats(),e.addLog("加载统计数据完成","success"),await e.fetchGraph(),e.addLog("加载记忆图谱完成","success"),await e.fetchEvolutionStatus(),e.addLog("加载进化状态完成","success")}catch(N){e.addLog("初始化失败: "+N.message,"error")}});function m(N){e.addLog(`点击节点: ${N.label||N.id}`,"info"),l.value=N.id,a.value!=="merge"&&(a.value="merge")}function x(N){c.value=N,e.addLog(`选择记忆: ${N.title}`,"info")}function w(N){e.addLog(`新记忆已写入: ${N}`,"success"),e.fetchStats(),e.fetchGraph()}function y(){e.addLog("记忆已保存","success"),E(),e.fetchStats(),e.fetchGraph()}function A(N){e.addLog(`记忆已删除: ${N}`,"success"),E(),c.value=null,e.fetchStats(),e.fetchGraph()}function P(N){e.addLog(`点击合并链节点: ${N.title}`,"info")}function L(){c.value=null}function S(){c.value&&(h.value=ET,g.value={visible:!0,memory:c.value},f.value=!0)}function E(){f.value=!1,h.value=null,g.value={}}function U(){c.value&&(l.value=c.value.id,a.value="merge",L())}async function D(){u.value=!0,e.addLog("开始重建图谱...","info");try{await mn.rebuildGraph(),await e.fetchGraph(),e.addLog("图谱重建完成","success")}catch(N){e.addLog("图谱重建失败: "+N.message,"error")}finally{u.value=!1}}async function F(){d.value=!0,e.addLog("触发反思任务...","info");try{await e.reflectMemory(),e.addLog("反思任务已触发","success"),await e.fetchEvolutionStatus()}catch(N){e.addLog("触发反思失败: "+N.message,"error")}finally{d.value=!1}}async function V(){e.addLog("刷新所有数据...","info");try{await Promise.all([e.fetchStats(),e.fetchGraph(),e.fetchEvolutionStatus()]),e.addLog("数据刷新完成","success")}catch(N){e.addLog("数据刷新失败: "+N.message,"error")}}function X(N){return{storage:"存储记忆",thinking:"思维记忆",skill:"技能记忆"}[N||""]||N||"未知"}return(N,M)=>(ue(),fe("div",jU,[M[10]||(M[10]=v("div",{class:"scanline"},null,-1)),v("aside",KU,[v("div",ZU,[M[3]||(M[3]=v("h1",{class:"logo"},[_r("MEMORY"),v("span",null,"CORE")],-1)),v("div",{class:pt(["status-badge",{"is-active":_.value}])},[M[2]||(M[2]=v("span",{class:"status-dot"},null,-1)),v("span",JU,te(_.value?"在线":"待机"),1)],2)]),v("nav",QU,[(ue(),fe(mt,null,Bt(o,T=>v("button",{key:T.id,class:pt(["nav-item",{active:a.value===T.id}]),onClick:k=>a.value=T.id},[v("span",tF,te(T.icon),1),v("span",nF,te(T.label),1)],10,eF)),64))]),v("div",iF,[v("div",sF,[v("button",{onClick:D,disabled:u.value},[v("span",oF,te(u.value?"同步中...":"重建图谱"),1)],8,rF),v("button",{onClick:F,disabled:d.value},[v("span",lF,te(d.value?"思考中...":"反思"),1)],8,aF)]),v("button",{class:"primary-btn",onClick:V},"刷新数据")])]),v("main",cF,[v("header",uF,[v("div",fF,[M[4]||(M[4]=v("span",{class:"path"},"系统 /",-1)),_r(" "+te(p.value),1)]),v("div",dF,[yt(Zw)])]),v("div",{class:pt(["content-viewport",{"panel-active":f.value}])},[v("div",hF,[a.value==="overview"?(ue(),fe("div",pF,[v("div",mF,[yt(YU,{stats:be(r)},null,8,["stats"])]),v("div",gF,[yt(O1,{"graph-data":be(n),"is-loading":be(i),onNodeClick:m},null,8,["graph-data","is-loading"])]),v("div",_F,[yt(Iw)])])):a.value==="memory-list"?(ue(),fe("div",vF,[yt(Aw,{onMemorySelect:x})])):a.value==="write"?(ue(),fe("div",xF,[yt(hT,{onWritten:w})])):a.value==="tiered"?(ue(),fe("div",yF,[yt(JT,{onMemorySelect:x})])):a.value==="brain"?(ue(),fe("div",SF,[yt(iP,{class:"card-glass"}),yt(e3,{class:"card-glass"})])):a.value==="llm"?(ue(),fe("div",MF,[yt(PA)])):a.value==="evolution"?(ue(),fe("div",bF,[yt(CR)])):a.value==="merge"?(ue(),fe("div",EF,[yt(YR,{"memory-id":l.value,"show-close":!!l.value,onClose:M[0]||(M[0]=T=>l.value=null),onNodeClick:P},null,8,["memory-id","show-close"])])):nt("",!0)]),yt(kd,{name:"panel-slide"},{default:eu(()=>[f.value?(ue(),fe("div",wF,[(ue(),rg(Mv(h.value),lg(g.value,{onClose:E,onSaved:y,onDeleted:A}),null,16))])):nt("",!0)]),_:1})],2)]),yt(kd,{name:"fade"},{default:eu(()=>[c.value?(ue(),fe("div",{key:0,class:"modal-overlay",onClick:L},[v("div",{class:"modal-window card-glass",onClick:M[1]||(M[1]=tl(()=>{},["stop"]))},[v("header",TF,[v("h2",null,te(c.value.title),1),v("button",{class:"close-icon",onClick:L},"×")]),v("div",AF,[v("div",RF,[M[5]||(M[5]=v("span",{class:"label"},"类型",-1)),v("span",{class:pt(["type-tag",c.value.memory_type])},te(X(c.value.memory_type)),3)]),v("div",CF,[M[6]||(M[6]=v("h3",null,"内容",-1)),v("p",null,te(c.value.content),1)]),v("div",PF,[v("div",LF,[M[7]||(M[7]=v("span",{class:"label"},"范围",-1)),v("span",DF,te(c.value.scope),1)]),v("div",IF,[M[8]||(M[8]=v("span",{class:"label"},"时间",-1)),v("span",NF,te(c.value.timestamp),1)]),v("div",UF,[M[9]||(M[9]=v("span",{class:"label"},"重要性",-1)),v("span",FF,te(c.value.importance),1)])]),v("div",{class:"modal-footer"},[v("button",{class:"secondary-btn",onClick:S},"编辑"),v("button",{class:"primary-btn",onClick:U},"查看合并链")])])])])):nt("",!0)]),_:1})]))}}),BF=Sn(OF,[["__scopeId","data-v-73776a06"]]),e0=Vx(BF),kF=Wx();e0.use(kF);e0.mount("#app");
