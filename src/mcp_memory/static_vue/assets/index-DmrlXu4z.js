(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Mt={},or=[],li=()=>{},Yp=()=>!1,fl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),pf=t=>t.startsWith("onUpdate:"),Ot=Object.assign,mf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},o0=Object.prototype.hasOwnProperty,mt=(t,e)=>o0.call(t,e),We=Array.isArray,ar=t=>Mo(t)==="[object Map]",dl=t=>Mo(t)==="[object Set]",gd=t=>Mo(t)==="[object Date]",je=t=>typeof t=="function",Dt=t=>typeof t=="string",pi=t=>typeof t=="symbol",ht=t=>t!==null&&typeof t=="object",jp=t=>(ht(t)||je(t))&&je(t.then)&&je(t.catch),Kp=Object.prototype.toString,Mo=t=>Kp.call(t),a0=t=>Mo(t).slice(8,-1),Jp=t=>Mo(t)==="[object Object]",hl=t=>Dt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,jr=hf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},l0=/-\w/g,an=pl(t=>t.replace(l0,e=>e.slice(1).toUpperCase())),c0=/\B([A-Z])/g,cs=pl(t=>t.replace(c0,"-$1").toLowerCase()),ml=pl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wl=pl(t=>t?`on${ml(t)}`:""),ri=(t,e)=>!Object.is(t,e),ba=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Zp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},gl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},u0=t=>{const e=Dt(t)?Number(t):NaN;return isNaN(e)?t:e};let _d;const _l=()=>_d||(_d=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kn(t){if(We(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Dt(i)?p0(i):kn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Dt(t)||ht(t))return t}const f0=/;(?![^(]*\))/g,d0=/:([^]+)/,h0=/\/\*[^]*?\*\//g;function p0(t){const e={};return t.replace(h0,"").split(f0).forEach(n=>{if(n){const i=n.split(d0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function rt(t){let e="";if(Dt(t))e=t;else if(We(t))for(let n=0;n<t.length;n++){const i=rt(t[n]);i&&(e+=i+" ")}else if(ht(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const m0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",g0=hf(m0);function Qp(t){return!!t||t===""}function _0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=bo(t[i],e[i]);return n}function bo(t,e){if(t===e)return!0;let n=gd(t),i=gd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=pi(t),i=pi(e),n||i)return t===e;if(n=We(t),i=We(e),n||i)return n&&i?_0(t,e):!1;if(n=ht(t),i=ht(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!bo(t[o],e[o]))return!1}}return String(t)===String(e)}function v0(t,e){return t.findIndex(n=>bo(n,e))}const em=t=>!!(t&&t.__v_isRef===!0),Z=t=>Dt(t)?t:t==null?"":We(t)||ht(t)&&(t.toString===Kp||!je(t.toString))?em(t)?Z(t.value):JSON.stringify(t,tm,2):String(t),tm=(t,e)=>em(e)?tm(t,e.value):ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[$l(i,r)+" =>"]=s,n),{})}:dl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$l(n))}:pi(e)?$l(e):ht(e)&&!We(e)&&!Jp(e)?String(e):e,$l=(t,e="")=>{var n;return pi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class nm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){++this._on===1&&(this.prevScope=jt,jt=this)}off(){this._on>0&&--this._on===0&&(jt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function im(t){return new nm(t)}function sm(){return jt}function x0(t,e=!1){jt&&jt.cleanups.push(t)}let Et;const Xl=new WeakSet;class rm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&jt.active&&jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xl.has(this)&&(Xl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||am(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vd(this),lm(this);const e=Et,n=Wn;Et=this,Wn=!0;try{return this.fn()}finally{cm(this),Et=e,Wn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vf(e);this.deps=this.depsTail=void 0,vd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qc(this)&&this.run()}get dirty(){return qc(this)}}let om=0,Kr,Jr;function am(t,e=!1){if(t.flags|=8,e){t.next=Jr,Jr=t;return}t.next=Kr,Kr=t}function gf(){om++}function _f(){if(--om>0)return;if(Jr){let e=Jr;for(Jr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Kr;){let e=Kr;for(Kr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function lm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cm(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),vf(i),y0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function qc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(um(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function um(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ro)||(t.globalVersion=ro,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!qc(t))))return;t.flags|=2;const e=t.dep,n=Et,i=Wn;Et=t,Wn=!0;try{lm(t);const s=t.fn(t._value);(e.version===0||ri(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=n,Wn=i,cm(t),t.flags&=-3}}function vf(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)vf(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function y0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Wn=!0;const fm=[];function ki(){fm.push(Wn),Wn=!1}function zi(){const t=fm.pop();Wn=t===void 0?!0:t}function vd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Et;Et=void 0;try{e()}finally{Et=n}}}let ro=0;class S0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!Wn||Et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Et)n=this.activeLink=new S0(Et,this),Et.deps?(n.prevDep=Et.depsTail,Et.depsTail.nextDep=n,Et.depsTail=n):Et.deps=Et.depsTail=n,dm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Et.depsTail,n.nextDep=void 0,Et.depsTail.nextDep=n,Et.depsTail=n,Et.deps===n&&(Et.deps=i)}return n}trigger(e){this.version++,ro++,this.notify(e)}notify(e){gf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{_f()}}}function dm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)dm(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ka=new WeakMap,Ds=Symbol(""),Yc=Symbol(""),oo=Symbol("");function Kt(t,e,n){if(Wn&&Et){let i=ka.get(t);i||ka.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new xf),s.map=i,s.key=n),s.track()}}function Ii(t,e,n,i,s,r){const o=ka.get(t);if(!o){ro++;return}const a=c=>{c&&c.trigger()};if(gf(),e==="clear")o.forEach(a);else{const c=We(t),l=c&&hl(n);if(c&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===oo||!pi(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(oo)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Ds)),ar(t)&&a(o.get(Yc)));break;case"delete":c||(a(o.get(Ds)),ar(t)&&a(o.get(Yc)));break;case"set":ar(t)&&a(o.get(Ds));break}}_f()}function M0(t,e){const n=ka.get(t);return n&&n.get(e)}function Gs(t){const e=ot(t);return e===t?e:(Kt(e,"iterate",oo),Rn(t)?e:e.map($n))}function vl(t){return Kt(t=ot(t),"iterate",oo),t}function ni(t,e){return Vi(t)?pr(ci(t)?$n(e):e):$n(e)}const b0={__proto__:null,[Symbol.iterator](){return ql(this,Symbol.iterator,t=>ni(this,t))},concat(...t){return Gs(this).concat(...t.map(e=>We(e)?Gs(e):e))},entries(){return ql(this,"entries",t=>(t[1]=ni(this,t[1]),t))},every(t,e){return Mi(this,"every",t,e,void 0,arguments)},filter(t,e){return Mi(this,"filter",t,e,n=>n.map(i=>ni(this,i)),arguments)},find(t,e){return Mi(this,"find",t,e,n=>ni(this,n),arguments)},findIndex(t,e){return Mi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mi(this,"findLast",t,e,n=>ni(this,n),arguments)},findLastIndex(t,e){return Mi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mi(this,"forEach",t,e,void 0,arguments)},includes(...t){return Yl(this,"includes",t)},indexOf(...t){return Yl(this,"indexOf",t)},join(t){return Gs(this).join(t)},lastIndexOf(...t){return Yl(this,"lastIndexOf",t)},map(t,e){return Mi(this,"map",t,e,void 0,arguments)},pop(){return Cr(this,"pop")},push(...t){return Cr(this,"push",t)},reduce(t,...e){return xd(this,"reduce",t,e)},reduceRight(t,...e){return xd(this,"reduceRight",t,e)},shift(){return Cr(this,"shift")},some(t,e){return Mi(this,"some",t,e,void 0,arguments)},splice(...t){return Cr(this,"splice",t)},toReversed(){return Gs(this).toReversed()},toSorted(t){return Gs(this).toSorted(t)},toSpliced(...t){return Gs(this).toSpliced(...t)},unshift(...t){return Cr(this,"unshift",t)},values(){return ql(this,"values",t=>ni(this,t))}};function ql(t,e,n){const i=vl(t),s=i[e]();return i!==t&&!Rn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const E0=Array.prototype;function Mi(t,e,n,i,s,r){const o=vl(t),a=o!==t&&!Rn(t),c=o[e];if(c!==E0[e]){const d=c.apply(t,r);return a?$n(d):d}let l=n;o!==t&&(a?l=function(d,f){return n.call(this,ni(t,d),f,t)}:n.length>2&&(l=function(d,f){return n.call(this,d,f,t)}));const u=c.call(o,l,i);return a&&s?s(u):u}function xd(t,e,n,i){const s=vl(t),r=s!==t&&!Rn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(l,u,d){return a&&(a=!1,l=ni(t,l)),n.call(this,l,ni(t,u),d,t)}):n.length>3&&(o=function(l,u,d){return n.call(this,l,u,d,t)}));const c=s[e](o,...i);return a?ni(t,c):c}function Yl(t,e,n){const i=ot(t);Kt(i,"iterate",oo);const s=i[e](...n);return(s===-1||s===!1)&&yl(n[0])?(n[0]=ot(n[0]),i[e](...n)):s}function Cr(t,e,n=[]){ki(),gf();const i=ot(t)[e].apply(t,n);return _f(),zi(),i}const w0=hf("__proto__,__v_isRef,__isVue"),hm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pi));function T0(t){pi(t)||(t=String(t));const e=ot(this);return Kt(e,"has",t),e.hasOwnProperty(t)}class pm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?F0:vm:r?_m:gm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!s){let c;if(o&&(c=b0[n]))return c;if(n==="hasOwnProperty")return T0}const a=Reflect.get(e,n,Tt(e)?e:i);if((pi(n)?hm.has(n):w0(n))||(s||Kt(e,"get",n),r))return a;if(Tt(a)){const c=o&&hl(n)?a:a.value;return s&&ht(c)?Kc(c):c}return ht(a)?s?Kc(a):xl(a):a}}class mm extends pm{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=We(e)&&hl(n);if(!this._isShallow){const l=Vi(r);if(!Rn(i)&&!Vi(i)&&(r=ot(r),i=ot(i)),!o&&Tt(r)&&!Tt(i))return l||(r.value=i),!0}const a=o?Number(n)<e.length:mt(e,n),c=Reflect.set(e,n,i,Tt(e)?e:s);return e===ot(s)&&(a?ri(i,r)&&Ii(e,"set",n,i):Ii(e,"add",n,i)),c}deleteProperty(e,n){const i=mt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Ii(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!pi(n)||!hm.has(n))&&Kt(e,"has",n),i}ownKeys(e){return Kt(e,"iterate",We(e)?"length":Ds),Reflect.ownKeys(e)}}class A0 extends pm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const R0=new mm,C0=new A0,P0=new mm(!0);const jc=t=>t,Vo=t=>Reflect.getPrototypeOf(t);function L0(t,e,n){return function(...i){const s=this.__v_raw,r=ot(s),o=ar(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),u=n?jc:e?pr:$n;return!e&&Kt(r,"iterate",c?Yc:Ds),Ot(Object.create(l),{next(){const{value:d,done:f}=l.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Ho(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function D0(t,e){const n={get(s){const r=this.__v_raw,o=ot(r),a=ot(s);t||(ri(s,a)&&Kt(o,"get",s),Kt(o,"get",a));const{has:c}=Vo(o),l=e?jc:t?pr:$n;if(c.call(o,s))return l(r.get(s));if(c.call(o,a))return l(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Kt(ot(s),"iterate",Ds),s.size},has(s){const r=this.__v_raw,o=ot(r),a=ot(s);return t||(ri(s,a)&&Kt(o,"has",s),Kt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,c=ot(a),l=e?jc:t?pr:$n;return!t&&Kt(c,"iterate",Ds),a.forEach((u,d)=>s.call(r,l(u),l(d),o))}};return Ot(n,t?{add:Ho("add"),set:Ho("set"),delete:Ho("delete"),clear:Ho("clear")}:{add(s){const r=ot(this),o=Vo(r),a=ot(s),c=!e&&!Rn(s)&&!Vi(s)?a:s;return o.has.call(r,c)||ri(s,c)&&o.has.call(r,s)||ri(a,c)&&o.has.call(r,a)||(r.add(c),Ii(r,"add",c,c)),this},set(s,r){!e&&!Rn(r)&&!Vi(r)&&(r=ot(r));const o=ot(this),{has:a,get:c}=Vo(o);let l=a.call(o,s);l||(s=ot(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,r),l?ri(r,u)&&Ii(o,"set",s,r):Ii(o,"add",s,r),this},delete(s){const r=ot(this),{has:o,get:a}=Vo(r);let c=o.call(r,s);c||(s=ot(s),c=o.call(r,s)),a&&a.call(r,s);const l=r.delete(s);return c&&Ii(r,"delete",s,void 0),l},clear(){const s=ot(this),r=s.size!==0,o=s.clear();return r&&Ii(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=L0(s,t,e)}),n}function yf(t,e){const n=D0(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(mt(n,s)&&s in i?n:i,s,r)}const I0={get:yf(!1,!1)},N0={get:yf(!1,!0)},U0={get:yf(!0,!1)};const gm=new WeakMap,_m=new WeakMap,vm=new WeakMap,F0=new WeakMap;function O0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function B0(t){return t.__v_skip||!Object.isExtensible(t)?0:O0(a0(t))}function xl(t){return Vi(t)?t:Sf(t,!1,R0,I0,gm)}function k0(t){return Sf(t,!1,P0,N0,_m)}function Kc(t){return Sf(t,!0,C0,U0,vm)}function Sf(t,e,n,i,s){if(!ht(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=B0(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function ci(t){return Vi(t)?ci(t.__v_raw):!!(t&&t.__v_isReactive)}function Vi(t){return!!(t&&t.__v_isReadonly)}function Rn(t){return!!(t&&t.__v_isShallow)}function yl(t){return t?!!t.__v_raw:!1}function ot(t){const e=t&&t.__v_raw;return e?ot(e):t}function Mf(t){return!mt(t,"__v_skip")&&Object.isExtensible(t)&&Zp(t,"__v_skip",!0),t}const $n=t=>ht(t)?xl(t):t,pr=t=>ht(t)?Kc(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function Ee(t){return xm(t,!1)}function z0(t){return xm(t,!0)}function xm(t,e){return Tt(t)?t:new V0(t,e)}class V0{constructor(e,n){this.dep=new xf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ot(e),this._value=n?e:$n(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Rn(e)||Vi(e);e=i?e:ot(e),ri(e,n)&&(this._rawValue=e,this._value=i?e:$n(e),this.dep.trigger())}}function be(t){return Tt(t)?t.value:t}const H0={get:(t,e,n)=>e==="__v_raw"?t:be(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Tt(s)&&!Tt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function ym(t){return ci(t)?t:new Proxy(t,H0)}function G0(t){const e=We(t)?new Array(t.length):{};for(const n in t)e[n]=Sm(t,n);return e}class W0{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=ot(e);let s=!0,r=e;if(!We(e)||!hl(String(n)))do s=!yl(r)||Rn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=be(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Tt(this._raw[this._key])){const n=this._object[this._key];if(Tt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return M0(this._raw,this._key)}}class $0{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function X0(t,e,n){return Tt(t)?t:je(t)?new $0(t):ht(t)&&arguments.length>1?Sm(t,e,n):Ee(t)}function Sm(t,e,n){return new W0(t,e,n)}class q0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new xf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ro-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return am(this,!0),!0}get value(){const e=this.dep.track();return um(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Y0(t,e,n=!1){let i,s;return je(t)?i=t:(i=t.get,s=t.set),new q0(i,s,n)}const Go={},za=new WeakMap;let Ms;function j0(t,e=!1,n=Ms){if(n){let i=za.get(n);i||za.set(n,i=[]),i.push(t)}}function K0(t,e,n=Mt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=n,l=S=>s?S:Rn(S)||s===!1||s===0?Ni(S,1):Ni(S);let u,d,f,h,g=!1,v=!1;if(Tt(t)?(d=()=>t.value,g=Rn(t)):ci(t)?(d=()=>l(t),g=!0):We(t)?(v=!0,g=t.some(S=>ci(S)||Rn(S)),d=()=>t.map(S=>{if(Tt(S))return S.value;if(ci(S))return l(S);if(je(S))return c?c(S,2):S()})):je(t)?e?d=c?()=>c(t,2):t:d=()=>{if(f){ki();try{f()}finally{zi()}}const S=Ms;Ms=u;try{return c?c(t,3,[h]):t(h)}finally{Ms=S}}:d=li,e&&s){const S=d,A=s===!0?1/0:s;d=()=>Ni(S(),A)}const p=sm(),m=()=>{u.stop(),p&&p.active&&mf(p.effects,u)};if(r&&e){const S=e;e=(...A)=>{S(...A),m()}}let x=v?new Array(t.length).fill(Go):Go;const E=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const A=u.run();if(s||g||(v?A.some((P,D)=>ri(P,x[D])):ri(A,x))){f&&f();const P=Ms;Ms=u;try{const D=[A,x===Go?void 0:v&&x[0]===Go?[]:x,h];x=A,c?c(e,3,D):e(...D)}finally{Ms=P}}}else u.run()};return a&&a(E),u=new rm(d),u.scheduler=o?()=>o(E,!1):E,h=S=>j0(S,!1,u),f=u.onStop=()=>{const S=za.get(u);if(S){if(c)c(S,4);else for(const A of S)A();za.delete(u)}},e?i?E(!0):x=u.run():o?o(E.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Ni(t,e=1/0,n){if(e<=0||!ht(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Tt(t))Ni(t.value,e,n);else if(We(t))for(let i=0;i<t.length;i++)Ni(t[i],e,n);else if(dl(t)||ar(t))t.forEach(i=>{Ni(i,e,n)});else if(Jp(t)){for(const i in t)Ni(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ni(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Eo(t,e,n,i){try{return i?t(...i):t()}catch(s){Sl(s,e,n)}}function Xn(t,e,n,i){if(je(t)){const s=Eo(t,e,n,i);return s&&jp(s)&&s.catch(r=>{Sl(r,e,n)}),s}if(We(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Xn(t[r],e,n,i));return s}}function Sl(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Mt;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,l)===!1)return}a=a.parent}if(r){ki(),Eo(r,null,10,[t,c,l]),zi();return}}J0(t,n,s,i,o)}function J0(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const sn=[];let ei=-1;const lr=[];let ns=null,rr=0;const Mm=Promise.resolve();let Va=null;function wo(t){const e=Va||Mm;return t?e.then(this?t.bind(this):t):e}function Z0(t){let e=ei+1,n=sn.length;for(;e<n;){const i=e+n>>>1,s=sn[i],r=ao(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function bf(t){if(!(t.flags&1)){const e=ao(t),n=sn[sn.length-1];!n||!(t.flags&2)&&e>=ao(n)?sn.push(t):sn.splice(Z0(e),0,t),t.flags|=1,bm()}}function bm(){Va||(Va=Mm.then(wm))}function Q0(t){We(t)?lr.push(...t):ns&&t.id===-1?ns.splice(rr+1,0,t):t.flags&1||(lr.push(t),t.flags|=1),bm()}function yd(t,e,n=ei+1){for(;n<sn.length;n++){const i=sn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;sn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Em(t){if(lr.length){const e=[...new Set(lr)].sort((n,i)=>ao(n)-ao(i));if(lr.length=0,ns){ns.push(...e);return}for(ns=e,rr=0;rr<ns.length;rr++){const n=ns[rr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ns=null,rr=0}}const ao=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wm(t){try{for(ei=0;ei<sn.length;ei++){const e=sn[ei];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Eo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ei<sn.length;ei++){const e=sn[ei];e&&(e.flags&=-2)}ei=-1,sn.length=0,Em(),Va=null,(sn.length||lr.length)&&wm()}}let wn=null,Tm=null;function Ha(t){const e=wn;return wn=t,Tm=t&&t.type.__scopeId||null,e}function Am(t,e=wn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&$a(-1);const r=Ha(e);let o;try{o=t(...s)}finally{Ha(r),i._d&&$a(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Rt(t,e){if(wn===null)return t;const n=Al(wn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,c=Mt]=e[s];r&&(je(r)&&(r={mounted:r,updated:r}),r.deep&&Ni(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function ds(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(ki(),Xn(c,n,8,[t.el,a,t,e]),zi())}}function ev(t,e){if(Jt){let n=Jt.provides;const i=Jt.parent&&Jt.parent.provides;i===n&&(n=Jt.provides=Object.create(i)),n[t]=e}}function Zr(t,e,n=!1){const i=Rf();if(i||Is){let s=Is?Is._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&je(e)?e.call(i&&i.proxy):e}}function tv(){return!!(Rf()||Is)}const nv=Symbol.for("v-scx"),iv=()=>Zr(nv);function ui(t,e,n){return Rm(t,e,n)}function Rm(t,e,n=Mt){const{immediate:i,deep:s,flush:r,once:o}=n,a=Ot({},n),c=e&&i||!e&&r!=="post";let l;if(uo){if(r==="sync"){const h=iv();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=li,h.resume=li,h.pause=li,h}}const u=Jt;a.call=(h,g,v)=>Xn(h,u,g,v);let d=!1;r==="post"?a.scheduler=h=>{hn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():bf(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=K0(t,e,a);return uo&&(l?l.push(f):c&&f()),f}function sv(t,e,n){const i=this.proxy,s=Dt(t)?t.includes(".")?Cm(i,t):()=>i[t]:t.bind(i,i);let r;je(e)?r=e:(r=e.handler,n=e);const o=Ao(this),a=Rm(s,r.bind(i),n);return o(),a}function Cm(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const rv=Symbol("_vte"),Pm=t=>t.__isTeleport,ti=Symbol("_leaveCb"),Pr=Symbol("_enterCb");function ov(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qn(()=>{t.isMounted=!0}),To(()=>{t.isUnmounting=!0}),t}const Ln=[Function,Array],Lm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ln,onEnter:Ln,onAfterEnter:Ln,onEnterCancelled:Ln,onBeforeLeave:Ln,onLeave:Ln,onAfterLeave:Ln,onLeaveCancelled:Ln,onBeforeAppear:Ln,onAppear:Ln,onAfterAppear:Ln,onAppearCancelled:Ln},Dm=t=>{const e=t.subTree;return e.component?Dm(e.component):e},av={name:"BaseTransition",props:Lm,setup(t,{slots:e}){const n=Rf(),i=ov();return()=>{const s=e.default&&Um(e.default(),!0);if(!s||!s.length)return;const r=Im(s),o=ot(t),{mode:a}=o;if(i.isLeaving)return jl(r);const c=Sd(r);if(!c)return jl(r);let l=Jc(c,o,i,n,d=>l=d);c.type!==rn&&lo(c,l);let u=n.subTree&&Sd(n.subTree);if(u&&u.type!==rn&&!Es(u,c)&&Dm(n).type!==rn){let d=Jc(u,o,i,n);if(lo(u,d),a==="out-in"&&c.type!==rn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},jl(r);a==="in-out"&&c.type!==rn?d.delayLeave=(f,h,g)=>{const v=Nm(i,u);v[String(u.key)]=u,f[ti]=()=>{h(),f[ti]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{g(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Im(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==rn){e=n;break}}return e}const lv=av;function Nm(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Jc(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:p,onAppear:m,onAfterAppear:x,onAppearCancelled:E}=e,S=String(t.key),A=Nm(n,t),P=(M,I)=>{M&&Xn(M,i,9,I)},D=(M,I)=>{const L=I[1];P(M,I),We(M)?M.every(F=>F.length<=1)&&L():M.length<=1&&L()},y={mode:o,persisted:a,beforeEnter(M){let I=c;if(!n.isMounted)if(r)I=p||c;else return;M[ti]&&M[ti](!0);const L=A[S];L&&Es(t,L)&&L.el[ti]&&L.el[ti](),P(I,[M])},enter(M){if(A[S]===t)return;let I=l,L=u,F=d;if(!n.isMounted)if(r)I=m||l,L=x||u,F=E||d;else return;let k=!1;M[Pr]=U=>{k||(k=!0,U?P(F,[M]):P(L,[M]),y.delayedLeave&&y.delayedLeave(),M[Pr]=void 0)};const V=M[Pr].bind(null,!1);I?D(I,[M,V]):V()},leave(M,I){const L=String(t.key);if(M[Pr]&&M[Pr](!0),n.isUnmounting)return I();P(f,[M]);let F=!1;M[ti]=V=>{F||(F=!0,I(),V?P(v,[M]):P(g,[M]),M[ti]=void 0,A[L]===t&&delete A[L])};const k=M[ti].bind(null,!1);A[L]=t,h?D(h,[M,k]):k()},clone(M){const I=Jc(M,e,n,i,s);return s&&s(I),I}};return y}function jl(t){if(Ml(t))return t=as(t),t.children=null,t}function Sd(t){if(!Ml(t))return Pm(t.type)&&t.children?Im(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&je(n.default))return n.default()}}function lo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Um(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===at?(o.patchFlag&128&&s++,i=i.concat(Um(o.children,e,a))):(e||o.type!==rn)&&i.push(a!=null?as(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function un(t,e){return je(t)?Ot({name:t.name},e,{setup:t}):t}function Fm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Md(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ga=new WeakMap;function Qr(t,e,n,i,s=!1){if(We(t)){t.forEach((v,p)=>Qr(v,e&&(We(e)?e[p]:e),n,i,s));return}if(eo(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Qr(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Al(i.component):i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Mt?a.refs={}:a.refs,d=a.setupState,f=ot(d),h=d===Mt?Yp:v=>Md(u,v)?!1:mt(f,v),g=(v,p)=>!(p&&Md(u,p));if(l!=null&&l!==c){if(bd(e),Dt(l))u[l]=null,h(l)&&(d[l]=null);else if(Tt(l)){const v=e;g(l,v.k)&&(l.value=null),v.k&&(u[v.k]=null)}}if(je(c))Eo(c,a,12,[o,u]);else{const v=Dt(c),p=Tt(c);if(v||p){const m=()=>{if(t.f){const x=v?h(c)?d[c]:u[c]:g()||!t.k?c.value:u[t.k];if(s)We(x)&&mf(x,r);else if(We(x))x.includes(r)||x.push(r);else if(v)u[c]=[r],h(c)&&(d[c]=u[c]);else{const E=[r];g(c,t.k)&&(c.value=E),t.k&&(u[t.k]=E)}}else v?(u[c]=o,h(c)&&(d[c]=o)):p&&(g(c,t.k)&&(c.value=o),t.k&&(u[t.k]=o))};if(o){const x=()=>{m(),Ga.delete(t)};x.id=-1,Ga.set(t,x),hn(x,n)}else bd(t),m()}}}function bd(t){const e=Ga.get(t);e&&(e.flags|=8,Ga.delete(t))}_l().requestIdleCallback;_l().cancelIdleCallback;const eo=t=>!!t.type.__asyncLoader,Ml=t=>t.type.__isKeepAlive;function cv(t,e){Om(t,"a",e)}function uv(t,e){Om(t,"da",e)}function Om(t,e,n=Jt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(bl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Ml(s.parent.vnode)&&fv(i,e,n,s),s=s.parent}}function fv(t,e,n,i){const s=bl(e,t,i,!0);Ef(()=>{mf(i[e],s)},n)}function bl(t,e,n=Jt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ki();const a=Ao(n),c=Xn(e,n,t,o);return a(),zi(),c});return i?s.unshift(r):s.push(r),r}}const $i=t=>(e,n=Jt)=>{(!uo||t==="sp")&&bl(t,(...i)=>e(...i),n)},dv=$i("bm"),qn=$i("m"),hv=$i("bu"),pv=$i("u"),To=$i("bum"),Ef=$i("um"),mv=$i("sp"),gv=$i("rtg"),_v=$i("rtc");function vv(t,e=Jt){bl("ec",t,e)}const xv="components",Bm=Symbol.for("v-ndc");function yv(t){return Dt(t)?Sv(xv,t,!1)||t:t||Bm}function Sv(t,e,n=!0,i=!1){const s=wn||Jt;if(s){const r=s.type;{const a=sx(r,!1);if(a&&(a===e||a===an(e)||a===ml(an(e))))return r}const o=Ed(s[t]||r[t],e)||Ed(s.appContext[t],e);return!o&&i?r:o}}function Ed(t,e){return t&&(t[e]||t[an(e)]||t[ml(an(e))])}function Ct(t,e,n,i){let s;const r=n,o=We(t);if(o||Dt(t)){const a=o&&ci(t);let c=!1,l=!1;a&&(c=!Rn(t),l=Vi(t),t=vl(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?l?pr($n(t[u])):$n(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(ht(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,r)}}else s=[];return s}const Zc=t=>t?og(t)?Al(t):Zc(t.parent):null,to=Ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zc(t.parent),$root:t=>Zc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zm(t),$forceUpdate:t=>t.f||(t.f=()=>{bf(t.update)}),$nextTick:t=>t.n||(t.n=wo.bind(t.proxy)),$watch:t=>sv.bind(t)}),Kl=(t,e)=>t!==Mt&&!t.__isScriptSetup&&mt(t,e),Mv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Kl(i,e))return o[e]=1,i[e];if(s!==Mt&&mt(s,e))return o[e]=2,s[e];if(mt(r,e))return o[e]=3,r[e];if(n!==Mt&&mt(n,e))return o[e]=4,n[e];Qc&&(o[e]=0)}}const l=to[e];let u,d;if(l)return e==="$attrs"&&Kt(t.attrs,"get",""),l(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Mt&&mt(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,mt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Kl(s,e)?(s[e]=n,!0):i!==Mt&&mt(i,e)?(i[e]=n,!0):mt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let c;return!!(n[a]||t!==Mt&&a[0]!=="$"&&mt(t,a)||Kl(e,a)||mt(r,a)||mt(i,a)||mt(to,a)||mt(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:mt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function wd(t){return We(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qc=!0;function bv(t){const e=zm(t),n=t.proxy,i=t.ctx;Qc=!1,e.beforeCreate&&Td(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:v,deactivated:p,beforeDestroy:m,beforeUnmount:x,destroyed:E,unmounted:S,render:A,renderTracked:P,renderTriggered:D,errorCaptured:y,serverPrefetch:M,expose:I,inheritAttrs:L,components:F,directives:k,filters:V}=e;if(l&&Ev(l,i,null),o)for(const w in o){const H=o[w];je(H)&&(i[w]=H.bind(n))}if(s){const w=s.call(n,n);ht(w)&&(t.data=xl(w))}if(Qc=!0,r)for(const w in r){const H=r[w],X=je(H)?H.bind(n,n):je(H.get)?H.get.bind(n,n):li,oe=!je(H)&&je(H.set)?H.set.bind(n):li,de=yt({get:X,set:oe});Object.defineProperty(i,w,{enumerable:!0,configurable:!0,get:()=>de.value,set:ge=>de.value=ge})}if(a)for(const w in a)km(a[w],i,n,w);if(c){const w=je(c)?c.call(n):c;Reflect.ownKeys(w).forEach(H=>{ev(H,w[H])})}u&&Td(u,t,"c");function T(w,H){We(H)?H.forEach(X=>w(X.bind(n))):H&&w(H.bind(n))}if(T(dv,d),T(qn,f),T(hv,h),T(pv,g),T(cv,v),T(uv,p),T(vv,y),T(_v,P),T(gv,D),T(To,x),T(Ef,S),T(mv,M),We(I))if(I.length){const w=t.exposed||(t.exposed={});I.forEach(H=>{Object.defineProperty(w,H,{get:()=>n[H],set:X=>n[H]=X,enumerable:!0})})}else t.exposed||(t.exposed={});A&&t.render===li&&(t.render=A),L!=null&&(t.inheritAttrs=L),F&&(t.components=F),k&&(t.directives=k),M&&Fm(t)}function Ev(t,e,n=li){We(t)&&(t=eu(t));for(const i in t){const s=t[i];let r;ht(s)?"default"in s?r=Zr(s.from||i,s.default,!0):r=Zr(s.from||i):r=Zr(s),Tt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Td(t,e,n){Xn(We(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function km(t,e,n,i){let s=i.includes(".")?Cm(n,i):()=>n[i];if(Dt(t)){const r=e[t];je(r)&&ui(s,r)}else if(je(t))ui(s,t.bind(n));else if(ht(t))if(We(t))t.forEach(r=>km(r,e,n,i));else{const r=je(t.handler)?t.handler.bind(n):e[t.handler];je(r)&&ui(s,r,t)}}function zm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>Wa(c,l,o,!0)),Wa(c,e,o)),ht(e)&&r.set(e,c),c}function Wa(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Wa(t,r,n,!0),s&&s.forEach(o=>Wa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=wv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const wv={data:Ad,props:Rd,emits:Rd,methods:Hr,computed:Hr,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:Hr,directives:Hr,watch:Av,provide:Ad,inject:Tv};function Ad(t,e){return e?t?function(){return Ot(je(t)?t.call(this,this):t,je(e)?e.call(this,this):e)}:e:t}function Tv(t,e){return Hr(eu(t),eu(e))}function eu(t){if(We(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function Hr(t,e){return t?Ot(Object.create(null),t,e):e}function Rd(t,e){return t?We(t)&&We(e)?[...new Set([...t,...e])]:Ot(Object.create(null),wd(t),wd(e??{})):e}function Av(t,e){if(!t)return e;if(!e)return t;const n=Ot(Object.create(null),t);for(const i in e)n[i]=tn(t[i],e[i]);return n}function Vm(){return{app:null,config:{isNativeTag:Yp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rv=0;function Cv(t,e){return function(i,s=null){je(i)||(i=Ot({},i)),s!=null&&!ht(s)&&(s=null);const r=Vm(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:Rv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ax,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&je(u.install)?(o.add(u),u.install(l,...d)):je(u)&&(o.add(u),u(l,...d))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,d){return d?(r.components[u]=d,l):r.components[u]},directive(u,d){return d?(r.directives[u]=d,l):r.directives[u]},mount(u,d,f){if(!c){const h=l._ceVNode||Nt(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),c=!0,l._container=u,u.__vue_app__=l,Al(h.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Xn(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return r.provides[u]=d,l},runWithContext(u){const d=Is;Is=l;try{return u()}finally{Is=d}}};return l}}let Is=null;const Pv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${an(e)}Modifiers`]||t[`${cs(e)}Modifiers`];function Lv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Mt;let s=n;const r=e.startsWith("update:"),o=r&&Pv(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Dt(u)?u.trim():u)),o.number&&(s=n.map(gl)));let a,c=i[a=Wl(e)]||i[a=Wl(an(e))];!c&&r&&(c=i[a=Wl(cs(e))]),c&&Xn(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xn(l,t,6,s)}}const Dv=new WeakMap;function Hm(t,e,n=!1){const i=n?Dv:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!je(t)){const c=l=>{const u=Hm(l,e,!0);u&&(a=!0,Ot(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(ht(t)&&i.set(t,null),null):(We(r)?r.forEach(c=>o[c]=null):Ot(o,r),ht(t)&&i.set(t,o),o)}function El(t,e){return!t||!fl(e)?!1:(e=e.slice(2).replace(/Once$/,""),mt(t,e[0].toLowerCase()+e.slice(1))||mt(t,cs(e))||mt(t,e))}function Cd(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:v}=t,p=Ha(t);let m,x;try{if(n.shapeFlag&4){const S=s||i,A=S;m=ii(l.call(A,S,u,d,h,f,g)),x=a}else{const S=e;m=ii(S.length>1?S(d,{attrs:a,slots:o,emit:c}):S(d,null)),x=e.props?a:Iv(a)}}catch(S){no.length=0,Sl(S,t,1),m=Nt(rn)}let E=m;if(x&&v!==!1){const S=Object.keys(x),{shapeFlag:A}=E;S.length&&A&7&&(r&&S.some(pf)&&(x=Nv(x,r)),E=as(E,x,!1,!0))}return n.dirs&&(E=as(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&lo(E,n.transition),m=E,Ha(p),m}const Iv=t=>{let e;for(const n in t)(n==="class"||n==="style"||fl(n))&&((e||(e={}))[n]=t[n]);return e},Nv=(t,e)=>{const n={};for(const i in t)(!pf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Uv(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Pd(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Gm(o,i,f)&&!El(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Pd(i,o,l):!0:!!o;return!1}function Pd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Gm(e,t,r)&&!El(n,r))return!0}return!1}function Gm(t,e,n){const i=t[n],s=e[n];return n==="style"&&ht(i)&&ht(s)?!bo(i,s):i!==s}function Fv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wm={},$m=()=>Object.create(Wm),Xm=t=>Object.getPrototypeOf(t)===Wm;function Ov(t,e,n,i=!1){const s={},r=$m();t.propsDefaults=Object.create(null),qm(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:k0(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Bv(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ot(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(El(t.emitsOptions,f))continue;const h=e[f];if(c)if(mt(r,f))h!==r[f]&&(r[f]=h,l=!0);else{const g=an(f);s[g]=tu(c,a,g,h,t,!1)}else h!==r[f]&&(r[f]=h,l=!0)}}}else{qm(t,e,s,r)&&(l=!0);let u;for(const d in a)(!e||!mt(e,d)&&((u=cs(d))===d||!mt(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=tu(c,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!mt(e,d))&&(delete r[d],l=!0)}l&&Ii(t.attrs,"set","")}function qm(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(jr(c))continue;const l=e[c];let u;s&&mt(s,u=an(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:El(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=ot(n),l=a||Mt;for(let u=0;u<r.length;u++){const d=r[u];n[d]=tu(s,c,d,l[d],t,!mt(l,d))}}return o}function tu(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=mt(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&je(c)){const{propsDefaults:l}=s;if(n in l)i=l[n];else{const u=Ao(s);i=l[n]=c.call(null,e),u()}}else i=c;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===cs(n))&&(i=!0))}return i}const kv=new WeakMap;function Ym(t,e,n=!1){const i=n?kv:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!je(t)){const u=d=>{c=!0;const[f,h]=Ym(d,e,!0);Ot(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ht(t)&&i.set(t,or),or;if(We(r))for(let u=0;u<r.length;u++){const d=an(r[u]);Ld(d)&&(o[d]=Mt)}else if(r)for(const u in r){const d=an(u);if(Ld(d)){const f=r[u],h=o[d]=We(f)||je(f)?{type:f}:Ot({},f),g=h.type;let v=!1,p=!0;if(We(g))for(let m=0;m<g.length;++m){const x=g[m],E=je(x)&&x.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(p=!1)}else v=je(g)&&g.name==="Boolean";h[0]=v,h[1]=p,(v||mt(h,"default"))&&a.push(d)}}const l=[o,a];return ht(t)&&i.set(t,l),l}function Ld(t){return t[0]!=="$"&&!jr(t)}const wf=t=>t==="_"||t==="_ctx"||t==="$stable",Tf=t=>We(t)?t.map(ii):[ii(t)],zv=(t,e,n)=>{if(e._n)return e;const i=Am((...s)=>Tf(e(...s)),n);return i._c=!1,i},jm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(wf(s))continue;const r=t[s];if(je(r))e[s]=zv(s,r,i);else if(r!=null){const o=Tf(r);e[s]=()=>o}}},Km=(t,e)=>{const n=Tf(e);t.slots.default=()=>n},Jm=(t,e,n)=>{for(const i in e)(n||!wf(i))&&(t[i]=e[i])},Vv=(t,e,n)=>{const i=t.slots=$m();if(t.vnode.shapeFlag&32){const s=e._;s?(Jm(i,e,n),n&&Zp(i,"_",s,!0)):jm(e,i)}else e&&Km(t,e)},Hv=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Mt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Jm(s,e,n):(r=!e.$stable,jm(e,s)),o=e}else e&&(Km(t,e),o={default:1});if(r)for(const a in s)!wf(a)&&o[a]==null&&delete s[a]},hn=qv;function Gv(t){return Wv(t)}function Wv(t,e){const n=_l();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=li,insertStaticContent:g}=t,v=(O,z,q,ae=null,ee=null,ce=null,N=void 0,pe=null,fe=!!z.dynamicChildren)=>{if(O===z)return;O&&!Es(O,z)&&(ae=ye(O),ge(O,ee,ce,!0),O=null),z.patchFlag===-2&&(fe=!1,z.dynamicChildren=null);const{type:re,ref:he,shapeFlag:R}=z;switch(re){case wl:p(O,z,q,ae);break;case rn:m(O,z,q,ae);break;case Ea:O==null&&x(z,q,ae,N);break;case at:F(O,z,q,ae,ee,ce,N,pe,fe);break;default:R&1?A(O,z,q,ae,ee,ce,N,pe,fe):R&6?k(O,z,q,ae,ee,ce,N,pe,fe):(R&64||R&128)&&re.process(O,z,q,ae,ee,ce,N,pe,fe,He)}he!=null&&ee?Qr(he,O&&O.ref,ce,z||O,!z):he==null&&O&&O.ref!=null&&Qr(O.ref,null,ce,O,!0)},p=(O,z,q,ae)=>{if(O==null)i(z.el=a(z.children),q,ae);else{const ee=z.el=O.el;z.children!==O.children&&l(ee,z.children)}},m=(O,z,q,ae)=>{O==null?i(z.el=c(z.children||""),q,ae):z.el=O.el},x=(O,z,q,ae)=>{[O.el,O.anchor]=g(O.children,z,q,ae,O.el,O.anchor)},E=({el:O,anchor:z},q,ae)=>{let ee;for(;O&&O!==z;)ee=f(O),i(O,q,ae),O=ee;i(z,q,ae)},S=({el:O,anchor:z})=>{let q;for(;O&&O!==z;)q=f(O),s(O),O=q;s(z)},A=(O,z,q,ae,ee,ce,N,pe,fe)=>{if(z.type==="svg"?N="svg":z.type==="math"&&(N="mathml"),O==null)P(z,q,ae,ee,ce,N,pe,fe);else{const re=O.el&&O.el._isVueCE?O.el:null;try{re&&re._beginPatch(),M(O,z,ee,ce,N,pe,fe)}finally{re&&re._endPatch()}}},P=(O,z,q,ae,ee,ce,N,pe)=>{let fe,re;const{props:he,shapeFlag:R,transition:b,dirs:B}=O;if(fe=O.el=o(O.type,ce,he&&he.is,he),R&8?u(fe,O.children):R&16&&y(O.children,fe,null,ae,ee,Jl(O,ce),N,pe),B&&ds(O,null,ae,"created"),D(fe,O,O.scopeId,N,ae),he){for(const ne in he)ne!=="value"&&!jr(ne)&&r(fe,ne,null,he[ne],ce,ae);"value"in he&&r(fe,"value",null,he.value,ce),(re=he.onVnodeBeforeMount)&&Jn(re,ae,O)}B&&ds(O,null,ae,"beforeMount");const Y=$v(ee,b);Y&&b.beforeEnter(fe),i(fe,z,q),((re=he&&he.onVnodeMounted)||Y||B)&&hn(()=>{re&&Jn(re,ae,O),Y&&b.enter(fe),B&&ds(O,null,ae,"mounted")},ee)},D=(O,z,q,ae,ee)=>{if(q&&h(O,q),ae)for(let ce=0;ce<ae.length;ce++)h(O,ae[ce]);if(ee){let ce=ee.subTree;if(z===ce||tg(ce.type)&&(ce.ssContent===z||ce.ssFallback===z)){const N=ee.vnode;D(O,N,N.scopeId,N.slotScopeIds,ee.parent)}}},y=(O,z,q,ae,ee,ce,N,pe,fe=0)=>{for(let re=fe;re<O.length;re++){const he=O[re]=pe?Di(O[re]):ii(O[re]);v(null,he,z,q,ae,ee,ce,N,pe)}},M=(O,z,q,ae,ee,ce,N)=>{const pe=z.el=O.el;let{patchFlag:fe,dynamicChildren:re,dirs:he}=z;fe|=O.patchFlag&16;const R=O.props||Mt,b=z.props||Mt;let B;if(q&&hs(q,!1),(B=b.onVnodeBeforeUpdate)&&Jn(B,q,z,O),he&&ds(z,O,q,"beforeUpdate"),q&&hs(q,!0),(R.innerHTML&&b.innerHTML==null||R.textContent&&b.textContent==null)&&u(pe,""),re?I(O.dynamicChildren,re,pe,q,ae,Jl(z,ee),ce):N||H(O,z,pe,null,q,ae,Jl(z,ee),ce,!1),fe>0){if(fe&16)L(pe,R,b,q,ee);else if(fe&2&&R.class!==b.class&&r(pe,"class",null,b.class,ee),fe&4&&r(pe,"style",R.style,b.style,ee),fe&8){const Y=z.dynamicProps;for(let ne=0;ne<Y.length;ne++){const j=Y[ne],Te=R[j],_e=b[j];(_e!==Te||j==="value")&&r(pe,j,Te,_e,ee,q)}}fe&1&&O.children!==z.children&&u(pe,z.children)}else!N&&re==null&&L(pe,R,b,q,ee);((B=b.onVnodeUpdated)||he)&&hn(()=>{B&&Jn(B,q,z,O),he&&ds(z,O,q,"updated")},ae)},I=(O,z,q,ae,ee,ce,N)=>{for(let pe=0;pe<z.length;pe++){const fe=O[pe],re=z[pe],he=fe.el&&(fe.type===at||!Es(fe,re)||fe.shapeFlag&198)?d(fe.el):q;v(fe,re,he,null,ae,ee,ce,N,!0)}},L=(O,z,q,ae,ee)=>{if(z!==q){if(z!==Mt)for(const ce in z)!jr(ce)&&!(ce in q)&&r(O,ce,z[ce],null,ee,ae);for(const ce in q){if(jr(ce))continue;const N=q[ce],pe=z[ce];N!==pe&&ce!=="value"&&r(O,ce,pe,N,ee,ae)}"value"in q&&r(O,"value",z.value,q.value,ee)}},F=(O,z,q,ae,ee,ce,N,pe,fe)=>{const re=z.el=O?O.el:a(""),he=z.anchor=O?O.anchor:a("");let{patchFlag:R,dynamicChildren:b,slotScopeIds:B}=z;B&&(pe=pe?pe.concat(B):B),O==null?(i(re,q,ae),i(he,q,ae),y(z.children||[],q,he,ee,ce,N,pe,fe)):R>0&&R&64&&b&&O.dynamicChildren&&O.dynamicChildren.length===b.length?(I(O.dynamicChildren,b,q,ee,ce,N,pe),(z.key!=null||ee&&z===ee.subTree)&&Zm(O,z,!0)):H(O,z,q,he,ee,ce,N,pe,fe)},k=(O,z,q,ae,ee,ce,N,pe,fe)=>{z.slotScopeIds=pe,O==null?z.shapeFlag&512?ee.ctx.activate(z,q,ae,N,fe):V(z,q,ae,ee,ce,N,fe):U(O,z,fe)},V=(O,z,q,ae,ee,ce,N)=>{const pe=O.component=Qv(O,ae,ee);if(Ml(O)&&(pe.ctx.renderer=He),ex(pe,!1,N),pe.asyncDep){if(ee&&ee.registerDep(pe,T,N),!O.el){const fe=pe.subTree=Nt(rn);m(null,fe,z,q),O.placeholder=fe.el}}else T(pe,O,z,q,ee,ce,N)},U=(O,z,q)=>{const ae=z.component=O.component;if(Uv(O,z,q))if(ae.asyncDep&&!ae.asyncResolved){w(ae,z,q);return}else ae.next=z,ae.update();else z.el=O.el,ae.vnode=z},T=(O,z,q,ae,ee,ce,N)=>{const pe=()=>{if(O.isMounted){let{next:R,bu:b,u:B,parent:Y,vnode:ne}=O;{const Be=Qm(O);if(Be){R&&(R.el=ne.el,w(O,R,N)),Be.asyncDep.then(()=>{hn(()=>{O.isUnmounted||re()},ee)});return}}let j=R,Te;hs(O,!1),R?(R.el=ne.el,w(O,R,N)):R=ne,b&&ba(b),(Te=R.props&&R.props.onVnodeBeforeUpdate)&&Jn(Te,Y,R,ne),hs(O,!0);const _e=Cd(O),Ne=O.subTree;O.subTree=_e,v(Ne,_e,d(Ne.el),ye(Ne),O,ee,ce),R.el=_e.el,j===null&&Fv(O,_e.el),B&&hn(B,ee),(Te=R.props&&R.props.onVnodeUpdated)&&hn(()=>Jn(Te,Y,R,ne),ee)}else{let R;const{el:b,props:B}=z,{bm:Y,m:ne,parent:j,root:Te,type:_e}=O,Ne=eo(z);hs(O,!1),Y&&ba(Y),!Ne&&(R=B&&B.onVnodeBeforeMount)&&Jn(R,j,z),hs(O,!0);{Te.ce&&Te.ce._hasShadowRoot()&&Te.ce._injectChildStyle(_e,O.parent?O.parent.type:void 0);const Be=O.subTree=Cd(O);v(null,Be,q,ae,O,ee,ce),z.el=Be.el}if(ne&&hn(ne,ee),!Ne&&(R=B&&B.onVnodeMounted)){const Be=z;hn(()=>Jn(R,j,Be),ee)}(z.shapeFlag&256||j&&eo(j.vnode)&&j.vnode.shapeFlag&256)&&O.a&&hn(O.a,ee),O.isMounted=!0,z=q=ae=null}};O.scope.on();const fe=O.effect=new rm(pe);O.scope.off();const re=O.update=fe.run.bind(fe),he=O.job=fe.runIfDirty.bind(fe);he.i=O,he.id=O.uid,fe.scheduler=()=>bf(he),hs(O,!0),re()},w=(O,z,q)=>{z.component=O;const ae=O.vnode.props;O.vnode=z,O.next=null,Bv(O,z.props,ae,q),Hv(O,z.children,q),ki(),yd(O),zi()},H=(O,z,q,ae,ee,ce,N,pe,fe=!1)=>{const re=O&&O.children,he=O?O.shapeFlag:0,R=z.children,{patchFlag:b,shapeFlag:B}=z;if(b>0){if(b&128){oe(re,R,q,ae,ee,ce,N,pe,fe);return}else if(b&256){X(re,R,q,ae,ee,ce,N,pe,fe);return}}B&8?(he&16&&le(re,ee,ce),R!==re&&u(q,R)):he&16?B&16?oe(re,R,q,ae,ee,ce,N,pe,fe):le(re,ee,ce,!0):(he&8&&u(q,""),B&16&&y(R,q,ae,ee,ce,N,pe,fe))},X=(O,z,q,ae,ee,ce,N,pe,fe)=>{O=O||or,z=z||or;const re=O.length,he=z.length,R=Math.min(re,he);let b;for(b=0;b<R;b++){const B=z[b]=fe?Di(z[b]):ii(z[b]);v(O[b],B,q,null,ee,ce,N,pe,fe)}re>he?le(O,ee,ce,!0,!1,R):y(z,q,ae,ee,ce,N,pe,fe,R)},oe=(O,z,q,ae,ee,ce,N,pe,fe)=>{let re=0;const he=z.length;let R=O.length-1,b=he-1;for(;re<=R&&re<=b;){const B=O[re],Y=z[re]=fe?Di(z[re]):ii(z[re]);if(Es(B,Y))v(B,Y,q,null,ee,ce,N,pe,fe);else break;re++}for(;re<=R&&re<=b;){const B=O[R],Y=z[b]=fe?Di(z[b]):ii(z[b]);if(Es(B,Y))v(B,Y,q,null,ee,ce,N,pe,fe);else break;R--,b--}if(re>R){if(re<=b){const B=b+1,Y=B<he?z[B].el:ae;for(;re<=b;)v(null,z[re]=fe?Di(z[re]):ii(z[re]),q,Y,ee,ce,N,pe,fe),re++}}else if(re>b)for(;re<=R;)ge(O[re],ee,ce,!0),re++;else{const B=re,Y=re,ne=new Map;for(re=Y;re<=b;re++){const Ae=z[re]=fe?Di(z[re]):ii(z[re]);Ae.key!=null&&ne.set(Ae.key,re)}let j,Te=0;const _e=b-Y+1;let Ne=!1,Be=0;const me=new Array(_e);for(re=0;re<_e;re++)me[re]=0;for(re=B;re<=R;re++){const Ae=O[re];if(Te>=_e){ge(Ae,ee,ce,!0);continue}let Le;if(Ae.key!=null)Le=ne.get(Ae.key);else for(j=Y;j<=b;j++)if(me[j-Y]===0&&Es(Ae,z[j])){Le=j;break}Le===void 0?ge(Ae,ee,ce,!0):(me[Le-Y]=re+1,Le>=Be?Be=Le:Ne=!0,v(Ae,z[Le],q,null,ee,ce,N,pe,fe),Te++)}const xe=Ne?Xv(me):or;for(j=xe.length-1,re=_e-1;re>=0;re--){const Ae=Y+re,Le=z[Ae],De=z[Ae+1],Ze=Ae+1<he?De.el||eg(De):ae;me[re]===0?v(null,Le,q,Ze,ee,ce,N,pe,fe):Ne&&(j<0||re!==xe[j]?de(Le,q,Ze,2):j--)}}},de=(O,z,q,ae,ee=null)=>{const{el:ce,type:N,transition:pe,children:fe,shapeFlag:re}=O;if(re&6){de(O.component.subTree,z,q,ae);return}if(re&128){O.suspense.move(z,q,ae);return}if(re&64){N.move(O,z,q,He);return}if(N===at){i(ce,z,q);for(let R=0;R<fe.length;R++)de(fe[R],z,q,ae);i(O.anchor,z,q);return}if(N===Ea){E(O,z,q);return}if(ae!==2&&re&1&&pe)if(ae===0)pe.beforeEnter(ce),i(ce,z,q),hn(()=>pe.enter(ce),ee);else{const{leave:R,delayLeave:b,afterLeave:B}=pe,Y=()=>{O.ctx.isUnmounted?s(ce):i(ce,z,q)},ne=()=>{ce._isLeaving&&ce[ti](!0),R(ce,()=>{Y(),B&&B()})};b?b(ce,Y,ne):ne()}else i(ce,z,q)},ge=(O,z,q,ae=!1,ee=!1)=>{const{type:ce,props:N,ref:pe,children:fe,dynamicChildren:re,shapeFlag:he,patchFlag:R,dirs:b,cacheIndex:B}=O;if(R===-2&&(ee=!1),pe!=null&&(ki(),Qr(pe,null,q,O,!0),zi()),B!=null&&(z.renderCache[B]=void 0),he&256){z.ctx.deactivate(O);return}const Y=he&1&&b,ne=!eo(O);let j;if(ne&&(j=N&&N.onVnodeBeforeUnmount)&&Jn(j,z,O),he&6)pt(O.component,q,ae);else{if(he&128){O.suspense.unmount(q,ae);return}Y&&ds(O,null,z,"beforeUnmount"),he&64?O.type.remove(O,z,q,He,ae):re&&!re.hasOnce&&(ce!==at||R>0&&R&64)?le(re,z,q,!1,!0):(ce===at&&R&384||!ee&&he&16)&&le(fe,z,q),ae&&Ge(O)}(ne&&(j=N&&N.onVnodeUnmounted)||Y)&&hn(()=>{j&&Jn(j,z,O),Y&&ds(O,null,z,"unmounted")},q)},Ge=O=>{const{type:z,el:q,anchor:ae,transition:ee}=O;if(z===at){dt(q,ae);return}if(z===Ea){S(O);return}const ce=()=>{s(q),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(O.shapeFlag&1&&ee&&!ee.persisted){const{leave:N,delayLeave:pe}=ee,fe=()=>N(q,ce);pe?pe(O.el,ce,fe):fe()}else ce()},dt=(O,z)=>{let q;for(;O!==z;)q=f(O),s(O),O=q;s(z)},pt=(O,z,q)=>{const{bum:ae,scope:ee,job:ce,subTree:N,um:pe,m:fe,a:re}=O;Dd(fe),Dd(re),ae&&ba(ae),ee.stop(),ce&&(ce.flags|=8,ge(N,O,z,q)),pe&&hn(pe,z),hn(()=>{O.isUnmounted=!0},z)},le=(O,z,q,ae=!1,ee=!1,ce=0)=>{for(let N=ce;N<O.length;N++)ge(O[N],z,q,ae,ee)},ye=O=>{if(O.shapeFlag&6)return ye(O.component.subTree);if(O.shapeFlag&128)return O.suspense.next();const z=f(O.anchor||O.el),q=z&&z[rv];return q?f(q):z};let Me=!1;const Ke=(O,z,q)=>{let ae;O==null?z._vnode&&(ge(z._vnode,null,null,!0),ae=z._vnode.component):v(z._vnode||null,O,z,null,null,null,q),z._vnode=O,Me||(Me=!0,yd(ae),Em(),Me=!1)},He={p:v,um:ge,m:de,r:Ge,mt:V,mc:y,pc:H,pbc:I,n:ye,o:t};return{render:Ke,hydrate:void 0,createApp:Cv(Ke)}}function Jl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function $v(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Zm(t,e,n=!1){const i=t.children,s=e.children;if(We(i)&&We(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Di(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Zm(o,a)),a.type===wl&&(a.patchFlag===-1&&(a=s[r]=Di(a)),a.el=o.el),a.type===rn&&!a.el&&(a.el=o.el)}}function Xv(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Qm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qm(e)}function Dd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function eg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?eg(e.subTree):null}const tg=t=>t.__isSuspense;function qv(t,e){e&&e.pendingBranch?We(t)?e.effects.push(...t):e.effects.push(t):Q0(t)}const at=Symbol.for("v-fgt"),wl=Symbol.for("v-txt"),rn=Symbol.for("v-cmt"),Ea=Symbol.for("v-stc"),no=[];let Tn=null;function ie(t=!1){no.push(Tn=t?null:[])}function Yv(){no.pop(),Tn=no[no.length-1]||null}let co=1;function $a(t,e=!1){co+=t,t<0&&Tn&&e&&(Tn.hasOnce=!0)}function ng(t){return t.dynamicChildren=co>0?Tn||or:null,Yv(),co>0&&Tn&&Tn.push(t),t}function ue(t,e,n,i,s,r){return ng(_(t,e,n,i,s,r,!0))}function Pi(t,e,n,i,s){return ng(Nt(t,e,n,i,s,!0))}function Xa(t){return t?t.__v_isVNode===!0:!1}function Es(t,e){return t.type===e.type&&t.key===e.key}const ig=({key:t})=>t??null,wa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Dt(t)||Tt(t)||je(t)?{i:wn,r:t,k:e,f:!!n}:t:null);function _(t,e=null,n=null,i=0,s=null,r=t===at?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ig(e),ref:e&&wa(e),scopeId:Tm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wn};return a?(Af(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Dt(n)?8:16),co>0&&!o&&Tn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Tn.push(c),c}const Nt=jv;function jv(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Bm)&&(t=rn),Xa(t)){const a=as(t,e,!0);return n&&Af(a,n),co>0&&!r&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(t)]=a:Tn.push(a)),a.patchFlag=-2,a}if(rx(t)&&(t=t.__vccOpts),e){e=Kv(e);let{class:a,style:c}=e;a&&!Dt(a)&&(e.class=rt(a)),ht(c)&&(yl(c)&&!We(c)&&(c=Ot({},c)),e.style=kn(c))}const o=Dt(t)?1:tg(t)?128:Pm(t)?64:ht(t)?4:je(t)?2:0;return _(t,e,n,i,s,o,r,!0)}function Kv(t){return t?yl(t)||Xm(t)?Ot({},t):t:null}function as(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=t,l=e?rg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ig(l),ref:e&&e.ref?n&&r?We(r)?r.concat(wa(e)):[r,wa(e)]:wa(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&as(t.ssContent),ssFallback:t.ssFallback&&as(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&lo(u,c.clone(u)),u}function Tl(t=" ",e=0){return Nt(wl,null,t,e)}function sg(t,e){const n=Nt(Ea,null,t);return n.staticCount=e,n}function $e(t="",e=!1){return e?(ie(),Pi(rn,null,t)):Nt(rn,null,t)}function ii(t){return t==null||typeof t=="boolean"?Nt(rn):We(t)?Nt(at,null,t.slice()):Xa(t)?Di(t):Nt(wl,null,String(t))}function Di(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:as(t)}function Af(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(We(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Af(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Xm(e)?e._ctx=wn:s===3&&wn&&(wn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:wn},n=32):(e=String(e),i&64?(n=16,e=[Tl(e)]):n=8);t.children=e,t.shapeFlag|=n}function rg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=rt([e.class,i.class]));else if(s==="style")e.style=kn([e.style,i.style]);else if(fl(s)){const r=e[s],o=i[s];o&&r!==o&&!(We(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Jn(t,e,n,i=null){Xn(t,e,7,[n,i])}const Jv=Vm();let Zv=0;function Qv(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Jv,r={uid:Zv++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ym(i,s),emitsOptions:Hm(i,s),emit:null,emitted:null,propsDefaults:Mt,inheritAttrs:i.inheritAttrs,ctx:Mt,data:Mt,props:Mt,attrs:Mt,slots:Mt,refs:Mt,setupState:Mt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Lv.bind(null,r),t.ce&&t.ce(r),r}let Jt=null;const Rf=()=>Jt||wn;let qa,nu;{const t=_l(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};qa=e("__VUE_INSTANCE_SETTERS__",n=>Jt=n),nu=e("__VUE_SSR_SETTERS__",n=>uo=n)}const Ao=t=>{const e=Jt;return qa(t),t.scope.on(),()=>{t.scope.off(),qa(e)}},Id=()=>{Jt&&Jt.scope.off(),qa(null)};function og(t){return t.vnode.shapeFlag&4}let uo=!1;function ex(t,e=!1,n=!1){e&&nu(e);const{props:i,children:s}=t.vnode,r=og(t);Ov(t,i,r,e),Vv(t,s,n||e);const o=r?tx(t,e):void 0;return e&&nu(!1),o}function tx(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Mv);const{setup:i}=n;if(i){ki();const s=t.setupContext=i.length>1?ix(t):null,r=Ao(t),o=Eo(i,t,0,[t.props,s]),a=jp(o);if(zi(),r(),(a||t.sp)&&!eo(t)&&Fm(t),a){if(o.then(Id,Id),e)return o.then(c=>{Nd(t,c)}).catch(c=>{Sl(c,t,0)});t.asyncDep=o}else Nd(t,o)}else ag(t)}function Nd(t,e,n){je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ht(e)&&(t.setupState=ym(e)),ag(t)}function ag(t,e,n){const i=t.type;t.render||(t.render=i.render||li);{const s=Ao(t);ki();try{bv(t)}finally{zi(),s()}}}const nx={get(t,e){return Kt(t,"get",""),t[e]}};function ix(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,nx),slots:t.slots,emit:t.emit,expose:e}}function Al(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ym(Mf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in to)return to[n](t)},has(e,n){return n in e||n in to}})):t.proxy}function sx(t,e=!0){return je(t)?t.displayName||t.name:t.name||e&&t.__name}function rx(t){return je(t)&&"__vccOpts"in t}const yt=(t,e)=>Y0(t,e,uo);function ox(t,e,n){try{$a(-1);const i=arguments.length;return i===2?ht(e)&&!We(e)?Xa(e)?Nt(t,null,[e]):Nt(t,e):Nt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Xa(n)&&(n=[n]),Nt(t,e,n))}finally{$a(1)}}const ax="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let iu;const Ud=typeof window<"u"&&window.trustedTypes;if(Ud)try{iu=Ud.createPolicy("vue",{createHTML:t=>t})}catch{}const lg=iu?t=>iu.createHTML(t):t=>t,lx="http://www.w3.org/2000/svg",cx="http://www.w3.org/1998/Math/MathML",Li=typeof document<"u"?document:null,Fd=Li&&Li.createElement("template"),ux={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Li.createElementNS(lx,t):e==="mathml"?Li.createElementNS(cx,t):n?Li.createElement(t,{is:n}):Li.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Li.createTextNode(t),createComment:t=>Li.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Li.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Fd.innerHTML=lg(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Fd.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yi="transition",Lr="animation",fo=Symbol("_vtc"),cg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},fx=Ot({},Lm,cg),dx=t=>(t.displayName="Transition",t.props=fx,t),hx=dx((t,{slots:e})=>ox(lv,px(t),e)),ps=(t,e=[])=>{We(t)?t.forEach(n=>n(...e)):t&&t(...e)},Od=t=>t?We(t)?t.some(e=>e.length>1):t.length>1:!1;function px(t){const e={};for(const F in t)F in cg||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=mx(s),v=g&&g[0],p=g&&g[1],{onBeforeEnter:m,onEnter:x,onEnterCancelled:E,onLeave:S,onLeaveCancelled:A,onBeforeAppear:P=m,onAppear:D=x,onAppearCancelled:y=E}=e,M=(F,k,V,U)=>{F._enterCancelled=U,ms(F,k?u:a),ms(F,k?l:o),V&&V()},I=(F,k)=>{F._isLeaving=!1,ms(F,d),ms(F,h),ms(F,f),k&&k()},L=F=>(k,V)=>{const U=F?D:x,T=()=>M(k,F,V);ps(U,[k,T]),Bd(()=>{ms(k,F?c:r),bi(k,F?u:a),Od(U)||kd(k,i,v,T)})};return Ot(e,{onBeforeEnter(F){ps(m,[F]),bi(F,r),bi(F,o)},onBeforeAppear(F){ps(P,[F]),bi(F,c),bi(F,l)},onEnter:L(!1),onAppear:L(!0),onLeave(F,k){F._isLeaving=!0;const V=()=>I(F,k);bi(F,d),F._enterCancelled?(bi(F,f),Hd(F)):(Hd(F),bi(F,f)),Bd(()=>{F._isLeaving&&(ms(F,d),bi(F,h),Od(S)||kd(F,i,p,V))}),ps(S,[F,V])},onEnterCancelled(F){M(F,!1,void 0,!0),ps(E,[F])},onAppearCancelled(F){M(F,!0,void 0,!0),ps(y,[F])},onLeaveCancelled(F){I(F),ps(A,[F])}})}function mx(t){if(t==null)return null;if(ht(t))return[Zl(t.enter),Zl(t.leave)];{const e=Zl(t);return[e,e]}}function Zl(t){return u0(t)}function bi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[fo]||(t[fo]=new Set)).add(e)}function ms(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[fo];n&&(n.delete(e),n.size||(t[fo]=void 0))}function Bd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let gx=0;function kd(t,e,n,i){const s=t._endId=++gx,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:c}=_x(t,e);if(!o)return i();const l=o+"end";let u=0;const d=()=>{t.removeEventListener(l,f),r()},f=h=>{h.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),t.addEventListener(l,f)}function _x(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(`${Yi}Delay`),r=i(`${Yi}Duration`),o=zd(s,r),a=i(`${Lr}Delay`),c=i(`${Lr}Duration`),l=zd(a,c);let u=null,d=0,f=0;e===Yi?o>0&&(u=Yi,d=o,f=r.length):e===Lr?l>0&&(u=Lr,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Yi:Lr:null,f=u?u===Yi?r.length:c.length:0);const h=u===Yi&&/\b(?:transform|all)(?:,|$)/.test(i(`${Yi}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function zd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Vd(n)+Vd(t[i])))}function Vd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Hd(t){return(t?t.ownerDocument:document).body.offsetHeight}function vx(t,e,n){const i=t[fo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Gd=Symbol("_vod"),xx=Symbol("_vsh"),yx=Symbol(""),Sx=/(?:^|;)\s*display\s*:/;function Mx(t,e,n){const i=t.style,s=Dt(n);let r=!1;if(n&&!s){if(e)if(Dt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ta(i,a,"")}else for(const o in e)n[o]==null&&Ta(i,o,"");for(const o in n)o==="display"&&(r=!0),Ta(i,o,n[o])}else if(s){if(e!==n){const o=i[yx];o&&(n+=";"+o),i.cssText=n,r=Sx.test(n)}}else e&&t.removeAttribute("style");Gd in t&&(t[Gd]=r?i.display:"",t[xx]&&(i.display="none"))}const Wd=/\s*!important$/;function Ta(t,e,n){if(We(n))n.forEach(i=>Ta(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=bx(t,e);Wd.test(n)?t.setProperty(cs(i),n.replace(Wd,""),"important"):t[i]=n}}const $d=["Webkit","Moz","ms"],Ql={};function bx(t,e){const n=Ql[e];if(n)return n;let i=an(e);if(i!=="filter"&&i in t)return Ql[e]=i;i=ml(i);for(let s=0;s<$d.length;s++){const r=$d[s]+i;if(r in t)return Ql[e]=r}return e}const Xd="http://www.w3.org/1999/xlink";function qd(t,e,n,i,s,r=g0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xd,e.slice(6,e.length)):t.setAttributeNS(Xd,e,n):n==null||r&&!Qp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":pi(n)?String(n):n)}function Yd(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?lg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Qp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ws(t,e,n,i){t.addEventListener(e,n,i)}function Ex(t,e,n,i){t.removeEventListener(e,n,i)}const jd=Symbol("_vei");function wx(t,e,n,i,s=null){const r=t[jd]||(t[jd]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=Tx(e);if(i){const l=r[e]=Cx(i,s);ws(t,a,l,c)}else o&&(Ex(t,a,o,c),r[e]=void 0)}}const Kd=/(?:Once|Passive|Capture)$/;function Tx(t){let e;if(Kd.test(t)){e={};let i;for(;i=t.match(Kd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let ec=0;const Ax=Promise.resolve(),Rx=()=>ec||(Ax.then(()=>ec=0),ec=Date.now());function Cx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Xn(Px(i,n.value),e,5,[i])};return n.value=t,n.attached=Rx(),n}function Px(t,e){if(We(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Jd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Lx=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?vx(t,i,o):e==="style"?Mx(t,n,i):fl(e)?pf(e)||wx(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dx(t,e,i,o))?(Yd(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qd(t,e,i,o,r,e!=="value")):t._isVueCE&&(Ix(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Dt(i)))?Yd(t,an(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),qd(t,e,i,o))};function Dx(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jd(e)&&je(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Jd(e)&&Dt(n)?!1:e in t}function Ix(t,e){const n=t._def.props;if(!n)return!1;const i=an(e);return Array.isArray(n)?n.some(s=>an(s)===i):Object.keys(n).some(s=>an(s)===i)}const Ya=t=>{const e=t.props["onUpdate:modelValue"]||!1;return We(e)?n=>ba(e,n):e};function Nx(t){t.target.composing=!0}function Zd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cr=Symbol("_assign");function Qd(t,e,n){return e&&(t=t.trim()),n&&(t=gl(t)),t}const Ht={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[cr]=Ya(s);const r=i||s.props&&s.props.type==="number";ws(t,e?"change":"input",o=>{o.target.composing||t[cr](Qd(t.value,n,r))}),(n||r)&&ws(t,"change",()=>{t.value=Qd(t.value,n,r)}),e||(ws(t,"compositionstart",Nx),ws(t,"compositionend",Zd),ws(t,"change",Zd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[cr]=Ya(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?gl(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===c)||(t.value=c))}},io={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=dl(e);ws(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?gl(ja(o)):ja(o));t[cr](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,wo(()=>{t._assigning=!1})}),t[cr]=Ya(i)},mounted(t,{value:e}){eh(t,e)},beforeUpdate(t,e,n){t[cr]=Ya(n)},updated(t,{value:e}){t._assigning||eh(t,e)}};function eh(t,e){const n=t.multiple,i=We(e);if(!(n&&!i&&!dl(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=ja(o);if(n)if(i){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=v0(e,a)>-1}else o.selected=e.has(a);else if(bo(ja(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ja(t){return"_value"in t?t._value:t.value}const Ux=["ctrl","shift","alt","meta"],Fx={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ux.some(n=>t[`${n}Key`]&&!e.includes(n))},Ka=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Fx[e[o]];if(a&&a(s,e))return}return t(s,...r)})},Ox={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Cf=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=cs(s.key);if(e.some(o=>o===r||Ox[o]===r))return t(s)})},Bx=Ot({patchProp:Lx},ux);let th;function kx(){return th||(th=Gv(Bx))}const zx=(...t)=>{const e=kx().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Hx(i);if(!s)return;const r=e._component;!je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Vx(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Vx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Hx(t){return Dt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ug;const Rl=t=>ug=t,fg=Symbol();function su(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var so;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(so||(so={}));function Gx(){const t=im(!0),e=t.run(()=>Ee({}));let n=[],i=[];const s=Mf({install(r){Rl(s),s._a=r,r.provide(fg,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const dg=()=>{};function nh(t,e,n,i=dg){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&sm()&&x0(s),s}function Ws(t,...e){t.slice().forEach(n=>{n(...e)})}const Wx=t=>t(),ih=Symbol(),tc=Symbol();function ru(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];su(s)&&su(i)&&t.hasOwnProperty(n)&&!Tt(i)&&!ci(i)?t[n]=ru(s,i):t[n]=i}return t}const $x=Symbol();function Xx(t){return!su(t)||!t.hasOwnProperty($x)}const{assign:ts}=Object;function qx(t){return!!(Tt(t)&&t.effect)}function Yx(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=G0(n.state.value[t]);return ts(u,r,Object.keys(o||{}).reduce((d,f)=>(d[f]=Mf(yt(()=>{Rl(n);const h=n._s.get(t);return o[f].call(h,h)})),d),{}))}return c=hg(t,l,e,n,i,!0),c}function hg(t,e,n={},i,s,r){let o;const a=ts({actions:{}},n),c={deep:!0};let l,u,d=[],f=[],h;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={});let v;function p(y){let M;l=u=!1,typeof y=="function"?(y(i.state.value[t]),M={type:so.patchFunction,storeId:t,events:h}):(ru(i.state.value[t],y),M={type:so.patchObject,payload:y,storeId:t,events:h});const I=v=Symbol();wo().then(()=>{v===I&&(l=!0)}),u=!0,Ws(d,M,i.state.value[t])}const m=r?function(){const{state:M}=n,I=M?M():{};this.$patch(L=>{ts(L,I)})}:dg;function x(){o.stop(),d=[],f=[],i._s.delete(t)}const E=(y,M="")=>{if(ih in y)return y[tc]=M,y;const I=function(){Rl(i);const L=Array.from(arguments),F=[],k=[];function V(w){F.push(w)}function U(w){k.push(w)}Ws(f,{args:L,name:I[tc],store:A,after:V,onError:U});let T;try{T=y.apply(this&&this.$id===t?this:A,L)}catch(w){throw Ws(k,w),w}return T instanceof Promise?T.then(w=>(Ws(F,w),w)).catch(w=>(Ws(k,w),Promise.reject(w))):(Ws(F,T),T)};return I[ih]=!0,I[tc]=M,I},S={_p:i,$id:t,$onAction:nh.bind(null,f),$patch:p,$reset:m,$subscribe(y,M={}){const I=nh(d,y,M.detached,()=>L()),L=o.run(()=>ui(()=>i.state.value[t],F=>{(M.flush==="sync"?u:l)&&y({storeId:t,type:so.direct,events:h},F)},ts({},c,M)));return I},$dispose:x},A=xl(S);i._s.set(t,A);const D=(i._a&&i._a.runWithContext||Wx)(()=>i._e.run(()=>(o=im()).run(()=>e({action:E}))));for(const y in D){const M=D[y];if(Tt(M)&&!qx(M)||ci(M))r||(g&&Xx(M)&&(Tt(M)?M.value=g[y]:ru(M,g[y])),i.state.value[t][y]=M);else if(typeof M=="function"){const I=E(M,y);D[y]=I,a.actions[y]=M}}return ts(A,D),ts(ot(A),D),Object.defineProperty(A,"$state",{get:()=>i.state.value[t],set:y=>{p(M=>{ts(M,y)})}}),i._p.forEach(y=>{ts(A,o.run(()=>y({store:A,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate(A.$state,g),l=!0,u=!0,A}/*! #__NO_SIDE_EFFECTS__ */function Pf(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,c){const l=tv();return a=a||(l?Zr(fg,null):null),a&&Rl(a),a=ug,a._s.has(i)||(r?hg(i,e,s,a):Yx(i,s,a)),a._s.get(i)}return o.$id=i,o}function Er(t){{const e=ot(t),n={};for(const i in e){const s=e[i];s.effect?n[i]=yt({get:()=>t[i],set(r){t[i]=r}}):(Tt(s)||ci(s))&&(n[i]=X0(t,i))}return n}}function pg(t,e){return function(){return t.apply(e,arguments)}}const{toString:jx}=Object.prototype,{getPrototypeOf:Lf}=Object,{iterator:Cl,toStringTag:mg}=Symbol,Pl=(t=>e=>{const n=jx.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Yn=t=>(t=t.toLowerCase(),e=>Pl(e)===t),Ll=t=>e=>typeof e===t,{isArray:wr}=Array,mr=Ll("undefined");function Ro(t){return t!==null&&!mr(t)&&t.constructor!==null&&!mr(t.constructor)&&mn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const gg=Yn("ArrayBuffer");function Kx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&gg(t.buffer),e}const Jx=Ll("string"),mn=Ll("function"),_g=Ll("number"),Co=t=>t!==null&&typeof t=="object",Zx=t=>t===!0||t===!1,Aa=t=>{if(Pl(t)!=="object")return!1;const e=Lf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(mg in t)&&!(Cl in t)},Qx=t=>{if(!Co(t)||Ro(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},ey=Yn("Date"),ty=Yn("File"),ny=t=>!!(t&&typeof t.uri<"u"),iy=t=>t&&typeof t.getParts<"u",sy=Yn("Blob"),ry=Yn("FileList"),oy=t=>Co(t)&&mn(t.pipe);function ay(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const sh=ay(),rh=typeof sh.FormData<"u"?sh.FormData:void 0,ly=t=>{let e;return t&&(rh&&t instanceof rh||mn(t.append)&&((e=Pl(t))==="formdata"||e==="object"&&mn(t.toString)&&t.toString()==="[object FormData]"))},cy=Yn("URLSearchParams"),[uy,fy,dy,hy]=["ReadableStream","Request","Response","Headers"].map(Yn),py=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Po(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),wr(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(Ro(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function vg(t,e){if(Ro(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const Rs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,xg=t=>!mr(t)&&t!==Rs;function ou(){const{caseless:t,skipUndefined:e}=xg(this)&&this||{},n={},i=(s,r)=>{if(r==="__proto__"||r==="constructor"||r==="prototype")return;const o=t&&vg(n,r)||r;Aa(n[o])&&Aa(s)?n[o]=ou(n[o],s):Aa(s)?n[o]=ou({},s):wr(s)?n[o]=s.slice():(!e||!mr(s))&&(n[o]=s)};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&Po(arguments[s],i);return n}const my=(t,e,n,{allOwnKeys:i}={})=>(Po(e,(s,r)=>{n&&mn(s)?Object.defineProperty(t,r,{value:pg(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),gy=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),_y=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},vy=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Lf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},xy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},yy=t=>{if(!t)return null;if(wr(t))return t;let e=t.length;if(!_g(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Sy=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Lf(Uint8Array)),My=(t,e)=>{const i=(t&&t[Cl]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},by=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Ey=Yn("HTMLFormElement"),wy=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),oh=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Ty=Yn("RegExp"),yg=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Po(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},Ay=t=>{yg(t,(e,n)=>{if(mn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(mn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ry=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return wr(t)?i(t):i(String(t).split(e)),n},Cy=()=>{},Py=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Ly(t){return!!(t&&mn(t.append)&&t[mg]==="FormData"&&t[Cl])}const Dy=t=>{const e=new Array(10),n=(i,s)=>{if(Co(i)){if(e.indexOf(i)>=0)return;if(Ro(i))return i;if(!("toJSON"in i)){e[s]=i;const r=wr(i)?[]:{};return Po(i,(o,a)=>{const c=n(o,s+1);!mr(c)&&(r[a]=c)}),e[s]=void 0,r}}return i};return n(t,0)},Iy=Yn("AsyncFunction"),Ny=t=>t&&(Co(t)||mn(t))&&mn(t.then)&&mn(t.catch),Sg=((t,e)=>t?setImmediate:e?((n,i)=>(Rs.addEventListener("message",({source:s,data:r})=>{s===Rs&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),Rs.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",mn(Rs.postMessage)),Uy=typeof queueMicrotask<"u"?queueMicrotask.bind(Rs):typeof process<"u"&&process.nextTick||Sg,Fy=t=>t!=null&&mn(t[Cl]),Q={isArray:wr,isArrayBuffer:gg,isBuffer:Ro,isFormData:ly,isArrayBufferView:Kx,isString:Jx,isNumber:_g,isBoolean:Zx,isObject:Co,isPlainObject:Aa,isEmptyObject:Qx,isReadableStream:uy,isRequest:fy,isResponse:dy,isHeaders:hy,isUndefined:mr,isDate:ey,isFile:ty,isReactNativeBlob:ny,isReactNative:iy,isBlob:sy,isRegExp:Ty,isFunction:mn,isStream:oy,isURLSearchParams:cy,isTypedArray:Sy,isFileList:ry,forEach:Po,merge:ou,extend:my,trim:py,stripBOM:gy,inherits:_y,toFlatObject:vy,kindOf:Pl,kindOfTest:Yn,endsWith:xy,toArray:yy,forEachEntry:My,matchAll:by,isHTMLForm:Ey,hasOwnProperty:oh,hasOwnProp:oh,reduceDescriptors:yg,freezeMethods:Ay,toObjectSet:Ry,toCamelCase:wy,noop:Cy,toFiniteNumber:Py,findKey:vg,global:Rs,isContextDefined:xg,isSpecCompliantForm:Ly,toJSONObject:Dy,isAsyncFn:Iy,isThenable:Ny,setImmediate:Sg,asap:Uy,isIterable:Fy};let Xe=class Mg extends Error{static from(e,n,i,s,r,o){const a=new Mg(e.message,n||e.code,i,s,r);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Q.toJSONObject(this.config),code:this.code,status:this.status}}};Xe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Xe.ERR_BAD_OPTION="ERR_BAD_OPTION";Xe.ECONNABORTED="ECONNABORTED";Xe.ETIMEDOUT="ETIMEDOUT";Xe.ERR_NETWORK="ERR_NETWORK";Xe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Xe.ERR_DEPRECATED="ERR_DEPRECATED";Xe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Xe.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Xe.ERR_CANCELED="ERR_CANCELED";Xe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Xe.ERR_INVALID_URL="ERR_INVALID_URL";const Oy=null;function au(t){return Q.isPlainObject(t)||Q.isArray(t)}function bg(t){return Q.endsWith(t,"[]")?t.slice(0,-2):t}function nc(t,e,n){return t?t.concat(e).map(function(s,r){return s=bg(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function By(t){return Q.isArray(t)&&!t.some(au)}const ky=Q.toFlatObject(Q,{},null,function(e){return/^is[A-Z]/.test(e)});function Dl(t,e,n){if(!Q.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=Q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,p){return!Q.isUndefined(p[v])});const i=n.metaTokens,s=n.visitor||u,r=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&Q.isSpecCompliantForm(e);if(!Q.isFunction(s))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(Q.isDate(g))return g.toISOString();if(Q.isBoolean(g))return g.toString();if(!c&&Q.isBlob(g))throw new Xe("Blob is not supported. Use a Buffer instead.");return Q.isArrayBuffer(g)||Q.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,v,p){let m=g;if(Q.isReactNative(e)&&Q.isReactNativeBlob(g))return e.append(nc(p,v,r),l(g)),!1;if(g&&!p&&typeof g=="object"){if(Q.endsWith(v,"{}"))v=i?v:v.slice(0,-2),g=JSON.stringify(g);else if(Q.isArray(g)&&By(g)||(Q.isFileList(g)||Q.endsWith(v,"[]"))&&(m=Q.toArray(g)))return v=bg(v),m.forEach(function(E,S){!(Q.isUndefined(E)||E===null)&&e.append(o===!0?nc([v],S,r):o===null?v:v+"[]",l(E))}),!1}return au(g)?!0:(e.append(nc(p,v,r),l(g)),!1)}const d=[],f=Object.assign(ky,{defaultVisitor:u,convertValue:l,isVisitable:au});function h(g,v){if(!Q.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(g),Q.forEach(g,function(m,x){(!(Q.isUndefined(m)||m===null)&&s.call(e,m,Q.isString(x)?x.trim():x,v,f))===!0&&h(m,v?v.concat(x):[x])}),d.pop()}}if(!Q.isObject(t))throw new TypeError("data must be an object");return h(t),e}function ah(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Df(t,e){this._pairs=[],t&&Dl(t,this,e)}const Eg=Df.prototype;Eg.append=function(e,n){this._pairs.push([e,n])};Eg.toString=function(e){const n=e?function(i){return e.call(this,i,ah)}:ah;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function zy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function wg(t,e,n){if(!e)return t;const i=n&&n.encode||zy,s=Q.isFunction(n)?{serialize:n}:n,r=s&&s.serialize;let o;if(r?o=r(e,s):o=Q.isURLSearchParams(e)?e.toString():new Df(e,s).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class lh{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Q.forEach(this.handlers,function(i){i!==null&&e(i)})}}const If={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Vy=typeof URLSearchParams<"u"?URLSearchParams:Df,Hy=typeof FormData<"u"?FormData:null,Gy=typeof Blob<"u"?Blob:null,Wy={isBrowser:!0,classes:{URLSearchParams:Vy,FormData:Hy,Blob:Gy},protocols:["http","https","file","blob","url","data"]},Nf=typeof window<"u"&&typeof document<"u",lu=typeof navigator=="object"&&navigator||void 0,$y=Nf&&(!lu||["ReactNative","NativeScript","NS"].indexOf(lu.product)<0),Xy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",qy=Nf&&window.location.href||"http://localhost",Yy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Nf,hasStandardBrowserEnv:$y,hasStandardBrowserWebWorkerEnv:Xy,navigator:lu,origin:qy},Symbol.toStringTag,{value:"Module"})),Zt={...Yy,...Wy};function jy(t,e){return Dl(t,new Zt.classes.URLSearchParams,{visitor:function(n,i,s,r){return Zt.isNode&&Q.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function Ky(t){return Q.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Jy(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Tg(t){function e(n,i,s,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=r>=n.length;return o=!o&&Q.isArray(s)?s.length:o,c?(Q.hasOwnProp(s,o)?s[o]=[s[o],i]:s[o]=i,!a):((!s[o]||!Q.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&Q.isArray(s[o])&&(s[o]=Jy(s[o])),!a)}if(Q.isFormData(t)&&Q.isFunction(t.entries)){const n={};return Q.forEachEntry(t,(i,s)=>{e(Ky(i),s,n,0)}),n}return null}function Zy(t,e,n){if(Q.isString(t))try{return(e||JSON.parse)(t),Q.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Lo={transitional:If,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=Q.isObject(e);if(r&&Q.isHTMLForm(e)&&(e=new FormData(e)),Q.isFormData(e))return s?JSON.stringify(Tg(e)):e;if(Q.isArrayBuffer(e)||Q.isBuffer(e)||Q.isStream(e)||Q.isFile(e)||Q.isBlob(e)||Q.isReadableStream(e))return e;if(Q.isArrayBufferView(e))return e.buffer;if(Q.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return jy(e,this.formSerializer).toString();if((a=Q.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Dl(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return r||s?(n.setContentType("application/json",!1),Zy(e)):e}],transformResponse:[function(e){const n=this.transitional||Lo.transitional,i=n&&n.forcedJSONParsing,s=this.responseType==="json";if(Q.isResponse(e)||Q.isReadableStream(e))return e;if(e&&Q.isString(e)&&(i&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?Xe.from(a,Xe.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Zt.classes.FormData,Blob:Zt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Q.forEach(["delete","get","head","post","put","patch"],t=>{Lo.headers[t]={}});const Qy=Q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),eS=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&Qy[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},ch=Symbol("internals");function Dr(t){return t&&String(t).trim().toLowerCase()}function Ra(t){return t===!1||t==null?t:Q.isArray(t)?t.map(Ra):String(t)}function tS(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const nS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ic(t,e,n,i,s){if(Q.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!Q.isString(e)){if(Q.isString(i))return e.indexOf(i)!==-1;if(Q.isRegExp(i))return i.test(e)}}function iS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function sS(t,e){const n=Q.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let gn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,c,l){const u=Dr(c);if(!u)throw new Error("header name must be a non-empty string");const d=Q.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||c]=Ra(a))}const o=(a,c)=>Q.forEach(a,(l,u)=>r(l,u,c));if(Q.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(Q.isString(e)&&(e=e.trim())&&!nS(e))o(eS(e),n);else if(Q.isObject(e)&&Q.isIterable(e)){let a={},c,l;for(const u of e){if(!Q.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?Q.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=Dr(e),e){const i=Q.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return tS(s);if(Q.isFunction(n))return n.call(this,s,i);if(Q.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Dr(e),e){const i=Q.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||ic(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=Dr(o),o){const a=Q.findKey(i,o);a&&(!n||ic(i,i[a],a,n))&&(delete i[a],s=!0)}}return Q.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||ic(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return Q.forEach(this,(s,r)=>{const o=Q.findKey(i,r);if(o){n[o]=Ra(s),delete n[r];return}const a=e?iS(r):String(r).trim();a!==r&&delete n[r],n[a]=Ra(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return Q.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&Q.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[ch]=this[ch]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Dr(o);i[a]||(sS(s,o),i[a]=!0)}return Q.isArray(e)?e.forEach(r):r(e),this}};gn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Q.reduceDescriptors(gn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});Q.freezeMethods(gn);function sc(t,e){const n=this||Lo,i=e||n,s=gn.from(i.headers);let r=i.data;return Q.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Ag(t){return!!(t&&t.__CANCEL__)}let Do=class extends Xe{constructor(e,n,i){super(e??"canceled",Xe.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Rg(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Xe("Request failed with status code "+n.status,[Xe.ERR_BAD_REQUEST,Xe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function rS(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function oS(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=i[r];o||(o=l),n[s]=c,i[s]=l;let d=r,f=0;for(;d!==s;)f+=n[d++],d=d%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),l-o<e)return;const h=u&&l-u;return h?Math.round(f*1e3/h):void 0}}function aS(t,e){let n=0,i=1e3/e,s,r;const o=(l,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...l)};return[(...l)=>{const u=Date.now(),d=u-n;d>=i?o(l,u):(s=l,r||(r=setTimeout(()=>{r=null,o(s)},i-d)))},()=>s&&o(s)]}const Ja=(t,e,n=3)=>{let i=0;const s=oS(50,250);return aS(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,c=o-i,l=s(c),u=o<=a;i=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},uh=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},fh=t=>(...e)=>Q.asap(()=>t(...e)),lS=Zt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Zt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Zt.origin),Zt.navigator&&/(msie|trident)/i.test(Zt.navigator.userAgent)):()=>!0,cS=Zt.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];Q.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),Q.isString(i)&&a.push(`path=${i}`),Q.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),Q.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function uS(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function fS(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Cg(t,e,n){let i=!uS(e);return t&&(i||n==!1)?fS(t,e):e}const dh=t=>t instanceof gn?{...t}:t;function Os(t,e){e=e||{};const n={};function i(l,u,d,f){return Q.isPlainObject(l)&&Q.isPlainObject(u)?Q.merge.call({caseless:f},l,u):Q.isPlainObject(u)?Q.merge({},u):Q.isArray(u)?u.slice():u}function s(l,u,d,f){if(Q.isUndefined(u)){if(!Q.isUndefined(l))return i(void 0,l,d,f)}else return i(l,u,d,f)}function r(l,u){if(!Q.isUndefined(u))return i(void 0,u)}function o(l,u){if(Q.isUndefined(u)){if(!Q.isUndefined(l))return i(void 0,l)}else return i(void 0,u)}function a(l,u,d){if(d in e)return i(l,u);if(d in t)return i(void 0,l)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,d)=>s(dh(l),dh(u),d,!0)};return Q.forEach(Object.keys({...t,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const d=Q.hasOwnProp(c,u)?c[u]:s,f=d(t[u],e[u],u);Q.isUndefined(f)&&d!==a||(n[u]=f)}),n}const Pg=t=>{const e=Os({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:r,headers:o,auth:a}=e;if(e.headers=o=gn.from(o),e.url=wg(Cg(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),Q.isFormData(n)){if(Zt.hasStandardBrowserEnv||Zt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(Q.isFunction(n.getHeaders)){const c=n.getHeaders(),l=["content-type","content-length"];Object.entries(c).forEach(([u,d])=>{l.includes(u.toLowerCase())&&o.set(u,d)})}}if(Zt.hasStandardBrowserEnv&&(i&&Q.isFunction(i)&&(i=i(e)),i||i!==!1&&lS(e.url))){const c=s&&r&&cS.read(r);c&&o.set(s,c)}return e},dS=typeof XMLHttpRequest<"u",hS=dS&&function(t){return new Promise(function(n,i){const s=Pg(t);let r=s.data;const o=gn.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,d,f,h,g;function v(){h&&h(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function m(){if(!p)return;const E=gn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),A={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:E,config:t,request:p};Rg(function(D){n(D),v()},function(D){i(D),v()},A),p=null}"onloadend"in p?p.onloadend=m:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(m)},p.onabort=function(){p&&(i(new Xe("Request aborted",Xe.ECONNABORTED,t,p)),p=null)},p.onerror=function(S){const A=S&&S.message?S.message:"Network Error",P=new Xe(A,Xe.ERR_NETWORK,t,p);P.event=S||null,i(P),p=null},p.ontimeout=function(){let S=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const A=s.transitional||If;s.timeoutErrorMessage&&(S=s.timeoutErrorMessage),i(new Xe(S,A.clarifyTimeoutError?Xe.ETIMEDOUT:Xe.ECONNABORTED,t,p)),p=null},r===void 0&&o.setContentType(null),"setRequestHeader"in p&&Q.forEach(o.toJSON(),function(S,A){p.setRequestHeader(A,S)}),Q.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),a&&a!=="json"&&(p.responseType=s.responseType),l&&([f,g]=Ja(l,!0),p.addEventListener("progress",f)),c&&p.upload&&([d,h]=Ja(c),p.upload.addEventListener("progress",d),p.upload.addEventListener("loadend",h)),(s.cancelToken||s.signal)&&(u=E=>{p&&(i(!E||E.type?new Do(null,t,p):E),p.abort(),p=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const x=rS(s.url);if(x&&Zt.protocols.indexOf(x)===-1){i(new Xe("Unsupported protocol "+x+":",Xe.ERR_BAD_REQUEST,t));return}p.send(r||null)})},pS=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,s;const r=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;i.abort(u instanceof Xe?u:new Do(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,r(new Xe(`timeout of ${e}ms exceeded`,Xe.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),t=null)};t.forEach(l=>l.addEventListener("abort",r));const{signal:c}=i;return c.unsubscribe=()=>Q.asap(a),c}},mS=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},gS=async function*(t,e){for await(const n of _S(t))yield*mS(n,e)},_S=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},hh=(t,e,n,i)=>{const s=gS(t,e);let r=0,o,a=c=>{o||(o=!0,i&&i(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let d=u.byteLength;if(n){let f=r+=d;n(f)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},ph=64*1024,{isFunction:Wo}=Q,vS=(({Request:t,Response:e})=>({Request:t,Response:e}))(Q.global),{ReadableStream:mh,TextEncoder:gh}=Q.global,_h=(t,...e)=>{try{return!!t(...e)}catch{return!1}},xS=t=>{t=Q.merge.call({skipUndefined:!0},vS,t);const{fetch:e,Request:n,Response:i}=t,s=e?Wo(e):typeof fetch=="function",r=Wo(n),o=Wo(i);if(!s)return!1;const a=s&&Wo(mh),c=s&&(typeof gh=="function"?(g=>v=>g.encode(v))(new gh):async g=>new Uint8Array(await new n(g).arrayBuffer())),l=r&&a&&_h(()=>{let g=!1;const v=new n(Zt.origin,{body:new mh,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!v}),u=o&&a&&_h(()=>Q.isReadableStream(new i("").body)),d={stream:u&&(g=>g.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!d[g]&&(d[g]=(v,p)=>{let m=v&&v[g];if(m)return m.call(v);throw new Xe(`Response type '${g}' is not supported`,Xe.ERR_NOT_SUPPORT,p)})});const f=async g=>{if(g==null)return 0;if(Q.isBlob(g))return g.size;if(Q.isSpecCompliantForm(g))return(await new n(Zt.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(Q.isArrayBufferView(g)||Q.isArrayBuffer(g))return g.byteLength;if(Q.isURLSearchParams(g)&&(g=g+""),Q.isString(g))return(await c(g)).byteLength},h=async(g,v)=>{const p=Q.toFiniteNumber(g.getContentLength());return p??f(v)};return async g=>{let{url:v,method:p,data:m,signal:x,cancelToken:E,timeout:S,onDownloadProgress:A,onUploadProgress:P,responseType:D,headers:y,withCredentials:M="same-origin",fetchOptions:I}=Pg(g),L=e||fetch;D=D?(D+"").toLowerCase():"text";let F=pS([x,E&&E.toAbortSignal()],S),k=null;const V=F&&F.unsubscribe&&(()=>{F.unsubscribe()});let U;try{if(P&&l&&p!=="get"&&p!=="head"&&(U=await h(y,m))!==0){let de=new n(v,{method:"POST",body:m,duplex:"half"}),ge;if(Q.isFormData(m)&&(ge=de.headers.get("content-type"))&&y.setContentType(ge),de.body){const[Ge,dt]=uh(U,Ja(fh(P)));m=hh(de.body,ph,Ge,dt)}}Q.isString(M)||(M=M?"include":"omit");const T=r&&"credentials"in n.prototype,w={...I,signal:F,method:p.toUpperCase(),headers:y.normalize().toJSON(),body:m,duplex:"half",credentials:T?M:void 0};k=r&&new n(v,w);let H=await(r?L(k,I):L(v,w));const X=u&&(D==="stream"||D==="response");if(u&&(A||X&&V)){const de={};["status","statusText","headers"].forEach(pt=>{de[pt]=H[pt]});const ge=Q.toFiniteNumber(H.headers.get("content-length")),[Ge,dt]=A&&uh(ge,Ja(fh(A),!0))||[];H=new i(hh(H.body,ph,Ge,()=>{dt&&dt(),V&&V()}),de)}D=D||"text";let oe=await d[Q.findKey(d,D)||"text"](H,g);return!X&&V&&V(),await new Promise((de,ge)=>{Rg(de,ge,{data:oe,headers:gn.from(H.headers),status:H.status,statusText:H.statusText,config:g,request:k})})}catch(T){throw V&&V(),T&&T.name==="TypeError"&&/Load failed|fetch/i.test(T.message)?Object.assign(new Xe("Network Error",Xe.ERR_NETWORK,g,k,T&&T.response),{cause:T.cause||T}):Xe.from(T,T&&T.code,g,k,T&&T.response)}}},yS=new Map,Lg=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,c,l,u=yS;for(;a--;)c=r[a],l=u.get(c),l===void 0&&u.set(c,l=a?new Map:xS(e)),u=l;return l};Lg();const Uf={http:Oy,xhr:hS,fetch:{get:Lg}};Q.forEach(Uf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const vh=t=>`- ${t}`,SS=t=>Q.isFunction(t)||t===null||t===!1;function MS(t,e){t=Q.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!SS(i)&&(s=Uf[(a=String(i)).toLowerCase()],s===void 0))throw new Xe(`Unknown adapter '${a}'`);if(s&&(Q.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(vh).join(`
`):" "+vh(o[0]):"as no adapter specified";throw new Xe("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s}const Dg={getAdapter:MS,adapters:Uf};function rc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Do(null,t)}function xh(t){return rc(t),t.headers=gn.from(t.headers),t.data=sc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Dg.getAdapter(t.adapter||Lo.adapter,t)(t).then(function(i){return rc(t),i.data=sc.call(t,t.transformResponse,i),i.headers=gn.from(i.headers),i},function(i){return Ag(i)||(rc(t),i&&i.response&&(i.response.data=sc.call(t,t.transformResponse,i.response),i.response.headers=gn.from(i.response.headers))),Promise.reject(i)})}const Ig="1.13.6",Il={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Il[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const yh={};Il.transitional=function(e,n,i){function s(r,o){return"[Axios v"+Ig+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Xe(s(o," has been removed"+(n?" in "+n:"")),Xe.ERR_DEPRECATED);return n&&!yh[o]&&(yh[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};Il.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function bS(t,e,n){if(typeof t!="object")throw new Xe("options must be an object",Xe.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=e[r];if(o){const a=t[r],c=a===void 0||o(a,r,t);if(c!==!0)throw new Xe("option "+r+" must be "+c,Xe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Xe("Unknown option "+r,Xe.ERR_BAD_OPTION)}}const Ca={assertOptions:bS,validators:Il},Dn=Ca.validators;let Ns=class{constructor(e){this.defaults=e||{},this.interceptors={request:new lh,response:new lh}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?r&&!String(i.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+r):i.stack=r}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Os(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Ca.assertOptions(i,{silentJSONParsing:Dn.transitional(Dn.boolean),forcedJSONParsing:Dn.transitional(Dn.boolean),clarifyTimeoutError:Dn.transitional(Dn.boolean),legacyInterceptorReqResOrdering:Dn.transitional(Dn.boolean)},!1),s!=null&&(Q.isFunction(s)?n.paramsSerializer={serialize:s}:Ca.assertOptions(s,{encode:Dn.function,serialize:Dn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ca.assertOptions(n,{baseUrl:Dn.spelling("baseURL"),withXsrfToken:Dn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&Q.merge(r.common,r[n.method]);r&&Q.forEach(["delete","get","head","post","put","patch","common"],g=>{delete r[g]}),n.headers=gn.concat(o,r);const a=[];let c=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(n)===!1)return;c=c&&v.synchronous;const p=n.transitional||If;p&&p.legacyInterceptorReqResOrdering?a.unshift(v.fulfilled,v.rejected):a.push(v.fulfilled,v.rejected)});const l=[];this.interceptors.response.forEach(function(v){l.push(v.fulfilled,v.rejected)});let u,d=0,f;if(!c){const g=[xh.bind(this),void 0];for(g.unshift(...a),g.push(...l),f=g.length,u=Promise.resolve(n);d<f;)u=u.then(g[d++],g[d++]);return u}f=a.length;let h=n;for(;d<f;){const g=a[d++],v=a[d++];try{h=g(h)}catch(p){v.call(this,p);break}}try{u=xh.call(this,h)}catch(g){return Promise.reject(g)}for(d=0,f=l.length;d<f;)u=u.then(l[d++],l[d++]);return u}getUri(e){e=Os(this.defaults,e);const n=Cg(e.baseURL,e.url,e.allowAbsoluteUrls);return wg(n,e.params,e.paramsSerializer)}};Q.forEach(["delete","get","head","options"],function(e){Ns.prototype[e]=function(n,i){return this.request(Os(i||{},{method:e,url:n,data:(i||{}).data}))}});Q.forEach(["post","put","patch"],function(e){function n(i){return function(r,o,a){return this.request(Os(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Ns.prototype[e]=n(),Ns.prototype[e+"Form"]=n(!0)});let ES=class Ng{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Do(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Ng(function(s){e=s}),cancel:e}}};function wS(t){return function(n){return t.apply(null,n)}}function TS(t){return Q.isObject(t)&&t.isAxiosError===!0}const cu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(cu).forEach(([t,e])=>{cu[e]=t});function Ug(t){const e=new Ns(t),n=pg(Ns.prototype.request,e);return Q.extend(n,Ns.prototype,e,{allOwnKeys:!0}),Q.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Ug(Os(t,s))},n}const Ut=Ug(Lo);Ut.Axios=Ns;Ut.CanceledError=Do;Ut.CancelToken=ES;Ut.isCancel=Ag;Ut.VERSION=Ig;Ut.toFormData=Dl;Ut.AxiosError=Xe;Ut.Cancel=Ut.CanceledError;Ut.all=function(e){return Promise.all(e)};Ut.spread=wS;Ut.isAxiosError=TS;Ut.mergeConfig=Os;Ut.AxiosHeaders=gn;Ut.formToJSON=t=>Tg(Q.isHTMLForm(t)?new FormData(t):t);Ut.getAdapter=Dg.getAdapter;Ut.HttpStatusCode=cu;Ut.default=Ut;const{Axios:IF,AxiosError:NF,CanceledError:UF,isCancel:FF,CancelToken:OF,VERSION:BF,all:kF,Cancel:zF,isAxiosError:VF,spread:HF,toFormData:GF,AxiosHeaders:WF,HttpStatusCode:$F,formToJSON:XF,getAdapter:qF,mergeConfig:YF}=Ut,wt=Ut.create({baseURL:"http://localhost:22888",timeout:3e4}),Mn={async getStats(){return(await wt.get("/dashboard/stats")).data},async getGraph(t=7,e=1e3,n=!1){return(await wt.get("/dashboard/graph",{params:{days:t,max_nodes:e,memory_only:n}})).data},async searchMemories(t,e=20){return(await wt.get("/dashboard/memory/search",{params:{query:t,limit:e}})).data},async getMemoryDetail(t){return(await wt.get(`/dashboard/memory/${t}`)).data},async updateMemory(t,e){return(await wt.post("/dashboard/memory/update",{memory_id:t,content:e.content,user_id:e.user_id,title:e.title,keywords:e.keywords})).data},async writeMemory(t){return(await wt.post("/memory/write",t)).data},async readMemory(t){return(await wt.post("/memory/read",t)).data},async deleteMemory(t,e){return(await wt.post("/memory/delete",{memory_id:t,user_id:e})).data},async reflectMemory(t){return(await wt.post("/memory/reflect",null,{params:{user_id:t}})).data},async rebuildGraph(){return(await wt.post("/dashboard/rebuild_graph")).data}},Hn={async getStats(){return(await wt.get("/tiered/stats")).data},async getMergedMemories(){return(await wt.get("/tiered/merged")).data},async getMergeChain(t){return(await wt.get(`/tiered/memory/${t}/merge-chain`)).data},async triggerDailyReflection(){return(await wt.post("/tiered/daily-reflection/trigger")).data},async writeStorage(t){return(await wt.post("/tiered/storage/write",t)).data},async writeThinking(t){return(await wt.post("/tiered/thinking/write",t)).data},async writeSkill(t){return(await wt.post("/tiered/skill/write",t)).data},async queryMemories(t){return(await wt.get("/tiered/query",{params:t})).data},async getMemory(t){return(await wt.get(`/tiered/memory/${t}`)).data},async getMemoryTrace(t){return(await wt.get(`/tiered/memory/${t}/trace`)).data},async submitFeedback(t,e){return(await wt.post(`/tiered/memory/${t}/feedback`,e)).data},async summarizeMemories(t){return(await wt.post("/tiered/summarize",{memory_ids:t})).data}},Sh={async getStatus(){return(await wt.get("/dashboard/evolution/status")).data},async setProfile(t){return(await wt.post("/dashboard/evolution/profile",null,{params:{profile:t}})).data}},AS={async getStatus(){return(await wt.get("/dashboard/llm/status")).data},async getInteractions(t=50){return(await wt.get("/dashboard/llm/interactions",{params:{limit:t}})).data}},vi=Pf("memory",()=>{const t=Ee([]),e=Ee(null),n=Ee({nodes:[],links:[]}),i=Ee(null),s=Ee(null),r=Ee([]),o=Ee("all"),a=Ee("neural"),c=Ee("standard"),l=Ee(""),u=Ee([]),d=Ee(!1),f=Ee(null),h=yt(()=>o.value==="all"?t.value:t.value.filter(U=>U.memory_type===o.value)),g=yt(()=>({storage:t.value.filter(U=>U.memory_type==="storage").length,thinking:t.value.filter(U=>U.memory_type==="thinking").length,skill:t.value.filter(U=>U.memory_type==="skill").length,total:t.value.length}));async function v(){try{i.value=await Mn.getStats()}catch(U){f.value="Failed to fetch stats",console.error(U)}}async function p(U=7,T=1e3){try{d.value=!0,n.value=await Mn.getGraph(U,T)}catch(w){f.value="Failed to fetch graph",console.error(w)}finally{d.value=!1}}async function m(){try{s.value=await Sh.getStatus()}catch(U){f.value="Failed to fetch evolution status",console.error(U)}}async function x(U){try{d.value=!0,l.value=U;const T=await Mn.searchMemories(U);u.value=T.items.map(w=>{var H;return{...w,content_type:"note",keywords:[],tags:[],char_count:((H=w.content)==null?void 0:H.length)||0,importance:.5}})}catch(T){f.value="Failed to search memories",console.error(T)}finally{d.value=!1}}async function E(U){try{await Sh.setProfile(U),c.value=U,await m()}catch(T){f.value="Failed to set evolution profile",console.error(T)}}function S(U){o.value=U}function A(U){a.value=U}function P(U,T="info"){const w={time:new Date().toLocaleTimeString(),message:U,type:T};r.value.push(w),r.value.length>50&&r.value.shift()}function D(){r.value=[]}async function y(U,T,w="default",H,X){try{d.value=!0;const oe=await Mn.updateMemory(U,{content:T,user_id:w,title:H,keywords:X});return P(`Memory updated: ${U}`,"success"),oe}catch(oe){throw f.value="Failed to update memory",P(`Failed to update memory: ${U}`,"error"),console.error(oe),oe}finally{d.value=!1}}async function M(U,T="default"){try{d.value=!0;const w=await Mn.deleteMemory(U,T);return P(`Memory deleted: ${U}`,"success"),w}catch(w){throw f.value="Failed to delete memory",P(`Failed to delete memory: ${U}`,"error"),console.error(w),w}finally{d.value=!1}}async function I(U){try{d.value=!0;const T=await Mn.writeMemory(U);return P(`Memory written: ${T.id}`,"success"),T}catch(T){throw f.value="Failed to write memory",P("Failed to write memory","error"),console.error(T),T}finally{d.value=!1}}async function L(U="default"){try{d.value=!0;const T=await Mn.reflectMemory(U);return P("Memory reflection completed","success"),T}catch(T){throw f.value="Failed to reflect memory",P("Failed to reflect memory","error"),console.error(T),T}finally{d.value=!1}}async function F(){try{d.value=!0;const U=await Mn.rebuildGraph();return P("Graph rebuilt successfully","success"),U}catch(U){throw f.value="Failed to rebuild graph",P("Failed to rebuild graph","error"),console.error(U),U}finally{d.value=!1}}async function k(U,T){try{d.value=!0;const w=await Hn.submitFeedback(U,T);return P(`Feedback submitted for: ${U}`,"success"),w}catch(w){throw f.value="Failed to submit feedback",P(`Failed to submit feedback for: ${U}`,"error"),console.error(w),w}finally{d.value=!1}}async function V(U){try{d.value=!0;const T=await Hn.summarizeMemories(U);return P(`Summarized ${U.length} memories`,"success"),T}catch(T){throw f.value="Failed to summarize memories",P("Failed to summarize memories","error"),console.error(T),T}finally{d.value=!1}}return{memories:t,currentMemory:e,graphData:n,stats:i,evolutionStatus:s,logs:r,currentMemoryType:o,currentViewMode:a,currentProfile:c,searchQuery:l,searchResults:u,isLoading:d,error:f,filteredMemories:h,memoryCountByType:g,fetchStats:v,fetchGraph:p,fetchEvolutionStatus:m,searchMemories:x,setEvolutionProfile:E,setMemoryType:S,setViewMode:A,addLog:P,clearLogs:D,updateMemory:y,deleteMemory:M,writeMemory:I,reflectMemory:L,rebuildGraph:F,submitFeedback:k,summarizeMemories:V}});class Mh extends Map{constructor(e,n=PS){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const[i,s]of e)this.set(i,s)}get(e){return super.get(bh(this,e))}has(e){return super.has(bh(this,e))}set(e,n){return super.set(RS(this,e),n)}delete(e){return super.delete(CS(this,e))}}function bh({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):n}function RS({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):(t.set(i,n),n)}function CS({_intern:t,_key:e},n){const i=e(n);return t.has(i)&&(n=t.get(i),t.delete(i)),n}function PS(t){return t!==null&&typeof t=="object"?t.valueOf():t}var LS={value:()=>{}};function Nl(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Pa(n)}function Pa(t){this._=t}function DS(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",s=n.indexOf(".");if(s>=0&&(i=n.slice(s+1),n=n.slice(0,s)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Pa.prototype=Nl.prototype={constructor:Pa,on:function(t,e){var n=this._,i=DS(t+"",n),s,r=-1,o=i.length;if(arguments.length<2){for(;++r<o;)if((s=(t=i[r]).type)&&(s=IS(n[s],t.name)))return s;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++r<o;)if(s=(t=i[r]).type)n[s]=Eh(n[s],t.name,e);else if(e==null)for(s in n)n[s]=Eh(n[s],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Pa(t)},call:function(t,e){if((s=arguments.length-2)>0)for(var n=new Array(s),i=0,s,r;i<s;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],i=0,s=r.length;i<s;++i)r[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],s=0,r=i.length;s<r;++s)i[s].value.apply(e,n)}};function IS(t,e){for(var n=0,i=t.length,s;n<i;++n)if((s=t[n]).name===e)return s.value}function Eh(t,e,n){for(var i=0,s=t.length;i<s;++i)if(t[i].name===e){t[i]=LS,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var uu="http://www.w3.org/1999/xhtml";const wh={svg:"http://www.w3.org/2000/svg",xhtml:uu,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ul(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),wh.hasOwnProperty(e)?{space:wh[e],local:t}:t}function NS(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===uu&&e.documentElement.namespaceURI===uu?e.createElement(t):e.createElementNS(n,t)}}function US(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Fg(t){var e=Ul(t);return(e.local?US:NS)(e)}function FS(){}function Ff(t){return t==null?FS:function(){return this.querySelector(t)}}function OS(t){typeof t!="function"&&(t=Ff(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=new Array(o),c,l,u=0;u<o;++u)(c=r[u])&&(l=t.call(c,c.__data__,u,r))&&("__data__"in c&&(l.__data__=c.__data__),a[u]=l);return new Pn(i,this._parents)}function BS(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function kS(){return[]}function Og(t){return t==null?kS:function(){return this.querySelectorAll(t)}}function zS(t){return function(){return BS(t.apply(this,arguments))}}function VS(t){typeof t=="function"?t=zS(t):t=Og(t);for(var e=this._groups,n=e.length,i=[],s=[],r=0;r<n;++r)for(var o=e[r],a=o.length,c,l=0;l<a;++l)(c=o[l])&&(i.push(t.call(c,c.__data__,l,o)),s.push(c));return new Pn(i,s)}function Bg(t){return function(){return this.matches(t)}}function kg(t){return function(e){return e.matches(t)}}var HS=Array.prototype.find;function GS(t){return function(){return HS.call(this.children,t)}}function WS(){return this.firstElementChild}function $S(t){return this.select(t==null?WS:GS(typeof t=="function"?t:kg(t)))}var XS=Array.prototype.filter;function qS(){return Array.from(this.children)}function YS(t){return function(){return XS.call(this.children,t)}}function jS(t){return this.selectAll(t==null?qS:YS(typeof t=="function"?t:kg(t)))}function KS(t){typeof t!="function"&&(t=Bg(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=[],c,l=0;l<o;++l)(c=r[l])&&t.call(c,c.__data__,l,r)&&a.push(c);return new Pn(i,this._parents)}function zg(t){return new Array(t.length)}function JS(){return new Pn(this._enter||this._groups.map(zg),this._parents)}function Za(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Za.prototype={constructor:Za,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function ZS(t){return function(){return t}}function QS(t,e,n,i,s,r){for(var o=0,a,c=e.length,l=r.length;o<l;++o)(a=e[o])?(a.__data__=r[o],i[o]=a):n[o]=new Za(t,r[o]);for(;o<c;++o)(a=e[o])&&(s[o]=a)}function eM(t,e,n,i,s,r,o){var a,c,l=new Map,u=e.length,d=r.length,f=new Array(u),h;for(a=0;a<u;++a)(c=e[a])&&(f[a]=h=o.call(c,c.__data__,a,e)+"",l.has(h)?s[a]=c:l.set(h,c));for(a=0;a<d;++a)h=o.call(t,r[a],a,r)+"",(c=l.get(h))?(i[a]=c,c.__data__=r[a],l.delete(h)):n[a]=new Za(t,r[a]);for(a=0;a<u;++a)(c=e[a])&&l.get(f[a])===c&&(s[a]=c)}function tM(t){return t.__data__}function nM(t,e){if(!arguments.length)return Array.from(this,tM);var n=e?eM:QS,i=this._parents,s=this._groups;typeof t!="function"&&(t=ZS(t));for(var r=s.length,o=new Array(r),a=new Array(r),c=new Array(r),l=0;l<r;++l){var u=i[l],d=s[l],f=d.length,h=iM(t.call(u,u&&u.__data__,l,i)),g=h.length,v=a[l]=new Array(g),p=o[l]=new Array(g),m=c[l]=new Array(f);n(u,d,v,p,m,h,e);for(var x=0,E=0,S,A;x<g;++x)if(S=v[x]){for(x>=E&&(E=x+1);!(A=p[E])&&++E<g;);S._next=A||null}}return o=new Pn(o,i),o._enter=a,o._exit=c,o}function iM(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function sM(){return new Pn(this._exit||this._groups.map(zg),this._parents)}function rM(t,e,n){var i=this.enter(),s=this,r=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(s=e(s),s&&(s=s.selection())),n==null?r.remove():n(r),i&&s?i.merge(s).order():s}function oM(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,s=n.length,r=i.length,o=Math.min(s,r),a=new Array(s),c=0;c<o;++c)for(var l=n[c],u=i[c],d=l.length,f=a[c]=new Array(d),h,g=0;g<d;++g)(h=l[g]||u[g])&&(f[g]=h);for(;c<s;++c)a[c]=n[c];return new Pn(a,this._parents)}function aM(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],s=i.length-1,r=i[s],o;--s>=0;)(o=i[s])&&(r&&o.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(o,r),r=o);return this}function lM(t){t||(t=cM);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,s=new Array(i),r=0;r<i;++r){for(var o=n[r],a=o.length,c=s[r]=new Array(a),l,u=0;u<a;++u)(l=o[u])&&(c[u]=l);c.sort(e)}return new Pn(s,this._parents).order()}function cM(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function uM(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function fM(){return Array.from(this)}function dM(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],s=0,r=i.length;s<r;++s){var o=i[s];if(o)return o}return null}function hM(){let t=0;for(const e of this)++t;return t}function pM(){return!this.node()}function mM(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var s=e[n],r=0,o=s.length,a;r<o;++r)(a=s[r])&&t.call(a,a.__data__,r,s);return this}function gM(t){return function(){this.removeAttribute(t)}}function _M(t){return function(){this.removeAttributeNS(t.space,t.local)}}function vM(t,e){return function(){this.setAttribute(t,e)}}function xM(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function yM(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function SM(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function MM(t,e){var n=Ul(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?_M:gM:typeof e=="function"?n.local?SM:yM:n.local?xM:vM)(n,e))}function Vg(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function bM(t){return function(){this.style.removeProperty(t)}}function EM(t,e,n){return function(){this.style.setProperty(t,e,n)}}function wM(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function TM(t,e,n){return arguments.length>1?this.each((e==null?bM:typeof e=="function"?wM:EM)(t,e,n??"")):gr(this.node(),t)}function gr(t,e){return t.style.getPropertyValue(e)||Vg(t).getComputedStyle(t,null).getPropertyValue(e)}function AM(t){return function(){delete this[t]}}function RM(t,e){return function(){this[t]=e}}function CM(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function PM(t,e){return arguments.length>1?this.each((e==null?AM:typeof e=="function"?CM:RM)(t,e)):this.node()[t]}function Hg(t){return t.trim().split(/^|\s+/)}function Of(t){return t.classList||new Gg(t)}function Gg(t){this._node=t,this._names=Hg(t.getAttribute("class")||"")}Gg.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Wg(t,e){for(var n=Of(t),i=-1,s=e.length;++i<s;)n.add(e[i])}function $g(t,e){for(var n=Of(t),i=-1,s=e.length;++i<s;)n.remove(e[i])}function LM(t){return function(){Wg(this,t)}}function DM(t){return function(){$g(this,t)}}function IM(t,e){return function(){(e.apply(this,arguments)?Wg:$g)(this,t)}}function NM(t,e){var n=Hg(t+"");if(arguments.length<2){for(var i=Of(this.node()),s=-1,r=n.length;++s<r;)if(!i.contains(n[s]))return!1;return!0}return this.each((typeof e=="function"?IM:e?LM:DM)(n,e))}function UM(){this.textContent=""}function FM(t){return function(){this.textContent=t}}function OM(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function BM(t){return arguments.length?this.each(t==null?UM:(typeof t=="function"?OM:FM)(t)):this.node().textContent}function kM(){this.innerHTML=""}function zM(t){return function(){this.innerHTML=t}}function VM(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function HM(t){return arguments.length?this.each(t==null?kM:(typeof t=="function"?VM:zM)(t)):this.node().innerHTML}function GM(){this.nextSibling&&this.parentNode.appendChild(this)}function WM(){return this.each(GM)}function $M(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function XM(){return this.each($M)}function qM(t){var e=typeof t=="function"?t:Fg(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function YM(){return null}function jM(t,e){var n=typeof t=="function"?t:Fg(t),i=e==null?YM:typeof e=="function"?e:Ff(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function KM(){var t=this.parentNode;t&&t.removeChild(this)}function JM(){return this.each(KM)}function ZM(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function QM(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function eb(t){return this.select(t?QM:ZM)}function tb(t){return arguments.length?this.property("__data__",t):this.node().__data__}function nb(t){return function(e){t.call(this,e,this.__data__)}}function ib(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function sb(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,s=e.length,r;n<s;++n)r=e[n],(!t.type||r.type===t.type)&&r.name===t.name?this.removeEventListener(r.type,r.listener,r.options):e[++i]=r;++i?e.length=i:delete this.__on}}}function rb(t,e,n){return function(){var i=this.__on,s,r=nb(e);if(i){for(var o=0,a=i.length;o<a;++o)if((s=i[o]).type===t.type&&s.name===t.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=r,s.options=n),s.value=e;return}}this.addEventListener(t.type,r,n),s={type:t.type,name:t.name,value:e,listener:r,options:n},i?i.push(s):this.__on=[s]}}function ob(t,e,n){var i=ib(t+""),s,r=i.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,l=a.length,u;c<l;++c)for(s=0,u=a[c];s<r;++s)if((o=i[s]).type===u.type&&o.name===u.name)return u.value}return}for(a=e?rb:sb,s=0;s<r;++s)this.each(a(i[s],e,n));return this}function Xg(t,e,n){var i=Vg(t),s=i.CustomEvent;typeof s=="function"?s=new s(e,n):(s=i.document.createEvent("Event"),n?(s.initEvent(e,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(e,!1,!1)),t.dispatchEvent(s)}function ab(t,e){return function(){return Xg(this,t,e)}}function lb(t,e){return function(){return Xg(this,t,e.apply(this,arguments))}}function cb(t,e){return this.each((typeof e=="function"?lb:ab)(t,e))}function*ub(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],s=0,r=i.length,o;s<r;++s)(o=i[s])&&(yield o)}var qg=[null];function Pn(t,e){this._groups=t,this._parents=e}function Io(){return new Pn([[document.documentElement]],qg)}function fb(){return this}Pn.prototype=Io.prototype={constructor:Pn,select:OS,selectAll:VS,selectChild:$S,selectChildren:jS,filter:KS,data:nM,enter:JS,exit:sM,join:rM,merge:oM,selection:fb,order:aM,sort:lM,call:uM,nodes:fM,node:dM,size:hM,empty:pM,each:mM,attr:MM,style:TM,property:PM,classed:NM,text:BM,html:HM,raise:WM,lower:XM,append:qM,insert:jM,remove:JM,clone:eb,datum:tb,on:ob,dispatch:cb,[Symbol.iterator]:ub};function _r(t){return typeof t=="string"?new Pn([[document.querySelector(t)]],[document.documentElement]):new Pn([[t]],qg)}function db(t){let e;for(;e=t.sourceEvent;)t=e;return t}function Th(t,e){if(t=db(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var s=e.getBoundingClientRect();return[t.clientX-s.left-e.clientLeft,t.clientY-s.top-e.clientTop]}}return[t.pageX,t.pageY]}const hb={passive:!1},ho={capture:!0,passive:!1};function oc(t){t.stopImmediatePropagation()}function ur(t){t.preventDefault(),t.stopImmediatePropagation()}function pb(t){var e=t.document.documentElement,n=_r(t).on("dragstart.drag",ur,ho);"onselectstart"in e?n.on("selectstart.drag",ur,ho):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function mb(t,e){var n=t.document.documentElement,i=_r(t).on("dragstart.drag",null);e&&(i.on("click.drag",ur,ho),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const $o=t=>()=>t;function fu(t,{sourceEvent:e,subject:n,target:i,identifier:s,active:r,x:o,y:a,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:s,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}fu.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function gb(t){return!t.ctrlKey&&!t.button}function _b(){return this.parentNode}function vb(t,e){return e??{x:t.x,y:t.y}}function xb(){return navigator.maxTouchPoints||"ontouchstart"in this}function Yg(){var t=gb,e=_b,n=vb,i=xb,s={},r=Nl("start","drag","end"),o=0,a,c,l,u,d=0;function f(S){S.on("mousedown.drag",h).filter(i).on("touchstart.drag",p).on("touchmove.drag",m,hb).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(S,A){if(!(u||!t.call(this,S,A))){var P=E(this,e.call(this,S,A),S,A,"mouse");P&&(_r(S.view).on("mousemove.drag",g,ho).on("mouseup.drag",v,ho),pb(S.view),oc(S),l=!1,a=S.clientX,c=S.clientY,P("start",S))}}function g(S){if(ur(S),!l){var A=S.clientX-a,P=S.clientY-c;l=A*A+P*P>d}s.mouse("drag",S)}function v(S){_r(S.view).on("mousemove.drag mouseup.drag",null),mb(S.view,l),ur(S),s.mouse("end",S)}function p(S,A){if(t.call(this,S,A)){var P=S.changedTouches,D=e.call(this,S,A),y=P.length,M,I;for(M=0;M<y;++M)(I=E(this,D,S,A,P[M].identifier,P[M]))&&(oc(S),I("start",S,P[M]))}}function m(S){var A=S.changedTouches,P=A.length,D,y;for(D=0;D<P;++D)(y=s[A[D].identifier])&&(ur(S),y("drag",S,A[D]))}function x(S){var A=S.changedTouches,P=A.length,D,y;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),D=0;D<P;++D)(y=s[A[D].identifier])&&(oc(S),y("end",S,A[D]))}function E(S,A,P,D,y,M){var I=r.copy(),L=Th(M||P,A),F,k,V;if((V=n.call(S,new fu("beforestart",{sourceEvent:P,target:f,identifier:y,active:o,x:L[0],y:L[1],dx:0,dy:0,dispatch:I}),D))!=null)return F=V.x-L[0]||0,k=V.y-L[1]||0,function U(T,w,H){var X=L,oe;switch(T){case"start":s[y]=U,oe=o++;break;case"end":delete s[y],--o;case"drag":L=Th(H||w,A),oe=o;break}I.call(T,S,new fu(T,{sourceEvent:w,subject:V,target:f,identifier:y,active:oe,x:L[0]+F,y:L[1]+k,dx:L[0]-X[0],dy:L[1]-X[1],dispatch:I}),D)}}return f.filter=function(S){return arguments.length?(t=typeof S=="function"?S:$o(!!S),f):t},f.container=function(S){return arguments.length?(e=typeof S=="function"?S:$o(S),f):e},f.subject=function(S){return arguments.length?(n=typeof S=="function"?S:$o(S),f):n},f.touchable=function(S){return arguments.length?(i=typeof S=="function"?S:$o(!!S),f):i},f.on=function(){var S=r.on.apply(r,arguments);return S===r?f:S},f.clickDistance=function(S){return arguments.length?(d=(S=+S)*S,f):Math.sqrt(d)},f}function Bf(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function jg(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function No(){}var po=.7,Qa=1/po,fr="\\s*([+-]?\\d+)\\s*",mo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",fi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",yb=/^#([0-9a-f]{3,8})$/,Sb=new RegExp(`^rgb\\(${fr},${fr},${fr}\\)$`),Mb=new RegExp(`^rgb\\(${fi},${fi},${fi}\\)$`),bb=new RegExp(`^rgba\\(${fr},${fr},${fr},${mo}\\)$`),Eb=new RegExp(`^rgba\\(${fi},${fi},${fi},${mo}\\)$`),wb=new RegExp(`^hsl\\(${mo},${fi},${fi}\\)$`),Tb=new RegExp(`^hsla\\(${mo},${fi},${fi},${mo}\\)$`),Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Bf(No,go,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Rh,formatHex:Rh,formatHex8:Ab,formatHsl:Rb,formatRgb:Ch,toString:Ch});function Rh(){return this.rgb().formatHex()}function Ab(){return this.rgb().formatHex8()}function Rb(){return Kg(this).formatHsl()}function Ch(){return this.rgb().formatRgb()}function go(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=yb.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?Ph(e):n===3?new pn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Xo(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Xo(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=Sb.exec(t))?new pn(e[1],e[2],e[3],1):(e=Mb.exec(t))?new pn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=bb.exec(t))?Xo(e[1],e[2],e[3],e[4]):(e=Eb.exec(t))?Xo(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=wb.exec(t))?Ih(e[1],e[2]/100,e[3]/100,1):(e=Tb.exec(t))?Ih(e[1],e[2]/100,e[3]/100,e[4]):Ah.hasOwnProperty(t)?Ph(Ah[t]):t==="transparent"?new pn(NaN,NaN,NaN,0):null}function Ph(t){return new pn(t>>16&255,t>>8&255,t&255,1)}function Xo(t,e,n,i){return i<=0&&(t=e=n=NaN),new pn(t,e,n,i)}function Cb(t){return t instanceof No||(t=go(t)),t?(t=t.rgb(),new pn(t.r,t.g,t.b,t.opacity)):new pn}function du(t,e,n,i){return arguments.length===1?Cb(t):new pn(t,e,n,i??1)}function pn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}Bf(pn,du,jg(No,{brighter(t){return t=t==null?Qa:Math.pow(Qa,t),new pn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?po:Math.pow(po,t),new pn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new pn(Us(this.r),Us(this.g),Us(this.b),el(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Lh,formatHex:Lh,formatHex8:Pb,formatRgb:Dh,toString:Dh}));function Lh(){return`#${Cs(this.r)}${Cs(this.g)}${Cs(this.b)}`}function Pb(){return`#${Cs(this.r)}${Cs(this.g)}${Cs(this.b)}${Cs((isNaN(this.opacity)?1:this.opacity)*255)}`}function Dh(){const t=el(this.opacity);return`${t===1?"rgb(":"rgba("}${Us(this.r)}, ${Us(this.g)}, ${Us(this.b)}${t===1?")":`, ${t})`}`}function el(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Us(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Cs(t){return t=Us(t),(t<16?"0":"")+t.toString(16)}function Ih(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new zn(t,e,n,i)}function Kg(t){if(t instanceof zn)return new zn(t.h,t.s,t.l,t.opacity);if(t instanceof No||(t=go(t)),!t)return new zn;if(t instanceof zn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,s=Math.min(e,n,i),r=Math.max(e,n,i),o=NaN,a=r-s,c=(r+s)/2;return a?(e===r?o=(n-i)/a+(n<i)*6:n===r?o=(i-e)/a+2:o=(e-n)/a+4,a/=c<.5?r+s:2-r-s,o*=60):a=c>0&&c<1?0:o,new zn(o,a,c,t.opacity)}function Lb(t,e,n,i){return arguments.length===1?Kg(t):new zn(t,e,n,i??1)}function zn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}Bf(zn,Lb,jg(No,{brighter(t){return t=t==null?Qa:Math.pow(Qa,t),new zn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?po:Math.pow(po,t),new zn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,s=2*n-i;return new pn(ac(t>=240?t-240:t+120,s,i),ac(t,s,i),ac(t<120?t+240:t-120,s,i),this.opacity)},clamp(){return new zn(Nh(this.h),qo(this.s),qo(this.l),el(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=el(this.opacity);return`${t===1?"hsl(":"hsla("}${Nh(this.h)}, ${qo(this.s)*100}%, ${qo(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Nh(t){return t=(t||0)%360,t<0?t+360:t}function qo(t){return Math.max(0,Math.min(1,t||0))}function ac(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const Jg=t=>()=>t;function Db(t,e){return function(n){return t+n*e}}function Ib(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function Nb(t){return(t=+t)==1?Zg:function(e,n){return n-e?Ib(e,n,t):Jg(isNaN(e)?n:e)}}function Zg(t,e){var n=e-t;return n?Db(t,n):Jg(isNaN(t)?e:t)}const Uh=function t(e){var n=Nb(e);function i(s,r){var o=n((s=du(s)).r,(r=du(r)).r),a=n(s.g,r.g),c=n(s.b,r.b),l=Zg(s.opacity,r.opacity);return function(u){return s.r=o(u),s.g=a(u),s.b=c(u),s.opacity=l(u),s+""}}return i.gamma=t,i}(1);function is(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var hu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,lc=new RegExp(hu.source,"g");function Ub(t){return function(){return t}}function Fb(t){return function(e){return t(e)+""}}function Ob(t,e){var n=hu.lastIndex=lc.lastIndex=0,i,s,r,o=-1,a=[],c=[];for(t=t+"",e=e+"";(i=hu.exec(t))&&(s=lc.exec(e));)(r=s.index)>n&&(r=e.slice(n,r),a[o]?a[o]+=r:a[++o]=r),(i=i[0])===(s=s[0])?a[o]?a[o]+=s:a[++o]=s:(a[++o]=null,c.push({i:o,x:is(i,s)})),n=lc.lastIndex;return n<e.length&&(r=e.slice(n),a[o]?a[o]+=r:a[++o]=r),a.length<2?c[0]?Fb(c[0].x):Ub(e):(e=c.length,function(l){for(var u=0,d;u<e;++u)a[(d=c[u]).i]=d.x(l);return a.join("")})}var Fh=180/Math.PI,pu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Qg(t,e,n,i,s,r){var o,a,c;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(c=t*n+e*i)&&(n-=t*c,i-=e*c),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,c/=a),t*i<e*n&&(t=-t,e=-e,c=-c,o=-o),{translateX:s,translateY:r,rotate:Math.atan2(e,t)*Fh,skewX:Math.atan(c)*Fh,scaleX:o,scaleY:a}}var Yo;function Bb(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?pu:Qg(e.a,e.b,e.c,e.d,e.e,e.f)}function kb(t){return t==null||(Yo||(Yo=document.createElementNS("http://www.w3.org/2000/svg","g")),Yo.setAttribute("transform",t),!(t=Yo.transform.baseVal.consolidate()))?pu:(t=t.matrix,Qg(t.a,t.b,t.c,t.d,t.e,t.f))}function e_(t,e,n,i){function s(l){return l.length?l.pop()+" ":""}function r(l,u,d,f,h,g){if(l!==d||u!==f){var v=h.push("translate(",null,e,null,n);g.push({i:v-4,x:is(l,d)},{i:v-2,x:is(u,f)})}else(d||f)&&h.push("translate("+d+e+f+n)}function o(l,u,d,f){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),f.push({i:d.push(s(d)+"rotate(",null,i)-2,x:is(l,u)})):u&&d.push(s(d)+"rotate("+u+i)}function a(l,u,d,f){l!==u?f.push({i:d.push(s(d)+"skewX(",null,i)-2,x:is(l,u)}):u&&d.push(s(d)+"skewX("+u+i)}function c(l,u,d,f,h,g){if(l!==d||u!==f){var v=h.push(s(h)+"scale(",null,",",null,")");g.push({i:v-4,x:is(l,d)},{i:v-2,x:is(u,f)})}else(d!==1||f!==1)&&h.push(s(h)+"scale("+d+","+f+")")}return function(l,u){var d=[],f=[];return l=t(l),u=t(u),r(l.translateX,l.translateY,u.translateX,u.translateY,d,f),o(l.rotate,u.rotate,d,f),a(l.skewX,u.skewX,d,f),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,d,f),l=u=null,function(h){for(var g=-1,v=f.length,p;++g<v;)d[(p=f[g]).i]=p.x(h);return d.join("")}}}var zb=e_(Bb,"px, ","px)","deg)"),Vb=e_(kb,", ",")",")"),vr=0,Gr=0,Ir=0,t_=1e3,tl,Wr,nl=0,Bs=0,Fl=0,_o=typeof performance=="object"&&performance.now?performance:Date,n_=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function kf(){return Bs||(n_(Hb),Bs=_o.now()+Fl)}function Hb(){Bs=0}function il(){this._call=this._time=this._next=null}il.prototype=zf.prototype={constructor:il,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?kf():+n)+(e==null?0:+e),!this._next&&Wr!==this&&(Wr?Wr._next=this:tl=this,Wr=this),this._call=t,this._time=n,mu()},stop:function(){this._call&&(this._call=null,this._time=1/0,mu())}};function zf(t,e,n){var i=new il;return i.restart(t,e,n),i}function Gb(){kf(),++vr;for(var t=tl,e;t;)(e=Bs-t._time)>=0&&t._call.call(void 0,e),t=t._next;--vr}function Oh(){Bs=(nl=_o.now())+Fl,vr=Gr=0;try{Gb()}finally{vr=0,$b(),Bs=0}}function Wb(){var t=_o.now(),e=t-nl;e>t_&&(Fl-=e,nl=t)}function $b(){for(var t,e=tl,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:tl=n);Wr=t,mu(i)}function mu(t){if(!vr){Gr&&(Gr=clearTimeout(Gr));var e=t-Bs;e>24?(t<1/0&&(Gr=setTimeout(Oh,t-_o.now()-Fl)),Ir&&(Ir=clearInterval(Ir))):(Ir||(nl=_o.now(),Ir=setInterval(Wb,t_)),vr=1,n_(Oh))}}function Bh(t,e,n){var i=new il;return e=e==null?0:+e,i.restart(s=>{i.stop(),t(s+e)},e,n),i}var Xb=Nl("start","end","cancel","interrupt"),qb=[],i_=0,kh=1,gu=2,La=3,zh=4,_u=5,Da=6;function Ol(t,e,n,i,s,r){var o=t.__transition;if(!o)t.__transition={};else if(n in o)return;Yb(t,n,{name:e,index:i,group:s,on:Xb,tween:qb,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:i_})}function Vf(t,e){var n=jn(t,e);if(n.state>i_)throw new Error("too late; already scheduled");return n}function xi(t,e){var n=jn(t,e);if(n.state>La)throw new Error("too late; already running");return n}function jn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function Yb(t,e,n){var i=t.__transition,s;i[e]=n,n.timer=zf(r,0,n.time);function r(l){n.state=kh,n.timer.restart(o,n.delay,n.time),n.delay<=l&&o(l-n.delay)}function o(l){var u,d,f,h;if(n.state!==kh)return c();for(u in i)if(h=i[u],h.name===n.name){if(h.state===La)return Bh(o);h.state===zh?(h.state=Da,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[u]):+u<e&&(h.state=Da,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[u])}if(Bh(function(){n.state===La&&(n.state=zh,n.timer.restart(a,n.delay,n.time),a(l))}),n.state=gu,n.on.call("start",t,t.__data__,n.index,n.group),n.state===gu){for(n.state=La,s=new Array(f=n.tween.length),u=0,d=-1;u<f;++u)(h=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(s[++d]=h);s.length=d+1}}function a(l){for(var u=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(c),n.state=_u,1),d=-1,f=s.length;++d<f;)s[d].call(t,u);n.state===_u&&(n.on.call("end",t,t.__data__,n.index,n.group),c())}function c(){n.state=Da,n.timer.stop(),delete i[e];for(var l in i)return;delete t.__transition}}function jb(t,e){var n=t.__transition,i,s,r=!0,o;if(n){e=e==null?null:e+"";for(o in n){if((i=n[o]).name!==e){r=!1;continue}s=i.state>gu&&i.state<_u,i.state=Da,i.timer.stop(),i.on.call(s?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[o]}r&&delete t.__transition}}function Kb(t){return this.each(function(){jb(this,t)})}function Jb(t,e){var n,i;return function(){var s=xi(this,t),r=s.tween;if(r!==n){i=n=r;for(var o=0,a=i.length;o<a;++o)if(i[o].name===e){i=i.slice(),i.splice(o,1);break}}s.tween=i}}function Zb(t,e,n){var i,s;if(typeof n!="function")throw new Error;return function(){var r=xi(this,t),o=r.tween;if(o!==i){s=(i=o).slice();for(var a={name:e,value:n},c=0,l=s.length;c<l;++c)if(s[c].name===e){s[c]=a;break}c===l&&s.push(a)}r.tween=s}}function Qb(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=jn(this.node(),n).tween,s=0,r=i.length,o;s<r;++s)if((o=i[s]).name===t)return o.value;return null}return this.each((e==null?Jb:Zb)(n,t,e))}function Hf(t,e,n){var i=t._id;return t.each(function(){var s=xi(this,i);(s.value||(s.value={}))[e]=n.apply(this,arguments)}),function(s){return jn(s,i).value[e]}}function s_(t,e){var n;return(typeof e=="number"?is:e instanceof go?Uh:(n=go(e))?(e=n,Uh):Ob)(t,e)}function eE(t){return function(){this.removeAttribute(t)}}function tE(t){return function(){this.removeAttributeNS(t.space,t.local)}}function nE(t,e,n){var i,s=n+"",r;return function(){var o=this.getAttribute(t);return o===s?null:o===i?r:r=e(i=o,n)}}function iE(t,e,n){var i,s=n+"",r;return function(){var o=this.getAttributeNS(t.space,t.local);return o===s?null:o===i?r:r=e(i=o,n)}}function sE(t,e,n){var i,s,r;return function(){var o,a=n(this),c;return a==null?void this.removeAttribute(t):(o=this.getAttribute(t),c=a+"",o===c?null:o===i&&c===s?r:(s=c,r=e(i=o,a)))}}function rE(t,e,n){var i,s,r;return function(){var o,a=n(this),c;return a==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),c=a+"",o===c?null:o===i&&c===s?r:(s=c,r=e(i=o,a)))}}function oE(t,e){var n=Ul(t),i=n==="transform"?Vb:s_;return this.attrTween(t,typeof e=="function"?(n.local?rE:sE)(n,i,Hf(this,"attr."+t,e)):e==null?(n.local?tE:eE)(n):(n.local?iE:nE)(n,i,e))}function aE(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function lE(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function cE(t,e){var n,i;function s(){var r=e.apply(this,arguments);return r!==i&&(n=(i=r)&&lE(t,r)),n}return s._value=e,s}function uE(t,e){var n,i;function s(){var r=e.apply(this,arguments);return r!==i&&(n=(i=r)&&aE(t,r)),n}return s._value=e,s}function fE(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=Ul(t);return this.tween(n,(i.local?cE:uE)(i,e))}function dE(t,e){return function(){Vf(this,t).delay=+e.apply(this,arguments)}}function hE(t,e){return e=+e,function(){Vf(this,t).delay=e}}function pE(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?dE:hE)(e,t)):jn(this.node(),e).delay}function mE(t,e){return function(){xi(this,t).duration=+e.apply(this,arguments)}}function gE(t,e){return e=+e,function(){xi(this,t).duration=e}}function _E(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?mE:gE)(e,t)):jn(this.node(),e).duration}function vE(t,e){if(typeof e!="function")throw new Error;return function(){xi(this,t).ease=e}}function xE(t){var e=this._id;return arguments.length?this.each(vE(e,t)):jn(this.node(),e).ease}function yE(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;xi(this,t).ease=n}}function SE(t){if(typeof t!="function")throw new Error;return this.each(yE(this._id,t))}function ME(t){typeof t!="function"&&(t=Bg(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=[],c,l=0;l<o;++l)(c=r[l])&&t.call(c,c.__data__,l,r)&&a.push(c);return new Hi(i,this._parents,this._name,this._id)}function bE(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,s=n.length,r=Math.min(i,s),o=new Array(i),a=0;a<r;++a)for(var c=e[a],l=n[a],u=c.length,d=o[a]=new Array(u),f,h=0;h<u;++h)(f=c[h]||l[h])&&(d[h]=f);for(;a<i;++a)o[a]=e[a];return new Hi(o,this._parents,this._name,this._id)}function EE(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function wE(t,e,n){var i,s,r=EE(e)?Vf:xi;return function(){var o=r(this,t),a=o.on;a!==i&&(s=(i=a).copy()).on(e,n),o.on=s}}function TE(t,e){var n=this._id;return arguments.length<2?jn(this.node(),n).on.on(t):this.each(wE(n,t,e))}function AE(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function RE(){return this.on("end.remove",AE(this._id))}function CE(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Ff(t));for(var i=this._groups,s=i.length,r=new Array(s),o=0;o<s;++o)for(var a=i[o],c=a.length,l=r[o]=new Array(c),u,d,f=0;f<c;++f)(u=a[f])&&(d=t.call(u,u.__data__,f,a))&&("__data__"in u&&(d.__data__=u.__data__),l[f]=d,Ol(l[f],e,n,f,l,jn(u,n)));return new Hi(r,this._parents,e,n)}function PE(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Og(t));for(var i=this._groups,s=i.length,r=[],o=[],a=0;a<s;++a)for(var c=i[a],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=t.call(u,u.__data__,d,c),h,g=jn(u,n),v=0,p=f.length;v<p;++v)(h=f[v])&&Ol(h,e,n,v,f,g);r.push(f),o.push(u)}return new Hi(r,o,e,n)}var LE=Io.prototype.constructor;function DE(){return new LE(this._groups,this._parents)}function IE(t,e){var n,i,s;return function(){var r=gr(this,t),o=(this.style.removeProperty(t),gr(this,t));return r===o?null:r===n&&o===i?s:s=e(n=r,i=o)}}function r_(t){return function(){this.style.removeProperty(t)}}function NE(t,e,n){var i,s=n+"",r;return function(){var o=gr(this,t);return o===s?null:o===i?r:r=e(i=o,n)}}function UE(t,e,n){var i,s,r;return function(){var o=gr(this,t),a=n(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(t),gr(this,t))),o===c?null:o===i&&c===s?r:(s=c,r=e(i=o,a))}}function FE(t,e){var n,i,s,r="style."+e,o="end."+r,a;return function(){var c=xi(this,t),l=c.on,u=c.value[r]==null?a||(a=r_(e)):void 0;(l!==n||s!==u)&&(i=(n=l).copy()).on(o,s=u),c.on=i}}function OE(t,e,n){var i=(t+="")=="transform"?zb:s_;return e==null?this.styleTween(t,IE(t,i)).on("end.style."+t,r_(t)):typeof e=="function"?this.styleTween(t,UE(t,i,Hf(this,"style."+t,e))).each(FE(this._id,t)):this.styleTween(t,NE(t,i,e),n).on("end.style."+t,null)}function BE(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function kE(t,e,n){var i,s;function r(){var o=e.apply(this,arguments);return o!==s&&(i=(s=o)&&BE(t,o,n)),i}return r._value=e,r}function zE(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,kE(t,e,n??""))}function VE(t){return function(){this.textContent=t}}function HE(t){return function(){var e=t(this);this.textContent=e??""}}function GE(t){return this.tween("text",typeof t=="function"?HE(Hf(this,"text",t)):VE(t==null?"":t+""))}function WE(t){return function(e){this.textContent=t.call(this,e)}}function $E(t){var e,n;function i(){var s=t.apply(this,arguments);return s!==n&&(e=(n=s)&&WE(s)),e}return i._value=t,i}function XE(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,$E(t))}function qE(){for(var t=this._name,e=this._id,n=o_(),i=this._groups,s=i.length,r=0;r<s;++r)for(var o=i[r],a=o.length,c,l=0;l<a;++l)if(c=o[l]){var u=jn(c,e);Ol(c,t,n,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Hi(i,this._parents,t,n)}function YE(){var t,e,n=this,i=n._id,s=n.size();return new Promise(function(r,o){var a={value:o},c={value:function(){--s===0&&r()}};n.each(function(){var l=xi(this,i),u=l.on;u!==t&&(e=(t=u).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(c)),l.on=e}),s===0&&r()})}var jE=0;function Hi(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function o_(){return++jE}var Ei=Io.prototype;Hi.prototype={constructor:Hi,select:CE,selectAll:PE,selectChild:Ei.selectChild,selectChildren:Ei.selectChildren,filter:ME,merge:bE,selection:DE,transition:qE,call:Ei.call,nodes:Ei.nodes,node:Ei.node,size:Ei.size,empty:Ei.empty,each:Ei.each,on:TE,attr:oE,attrTween:fE,style:OE,styleTween:zE,text:GE,textTween:XE,remove:RE,tween:Qb,delay:pE,duration:_E,ease:xE,easeVarying:SE,end:YE,[Symbol.iterator]:Ei[Symbol.iterator]};function KE(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var JE={time:null,delay:0,duration:250,ease:KE};function ZE(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function QE(t){var e,n;t instanceof Hi?(e=t._id,t=t._name):(e=o_(),(n=JE).time=kf(),t=t==null?null:t+"");for(var i=this._groups,s=i.length,r=0;r<s;++r)for(var o=i[r],a=o.length,c,l=0;l<a;++l)(c=o[l])&&Ol(c,t,e,l,o,n||ZE(c,e));return new Hi(i,this._parents,t,e)}Io.prototype.interrupt=Kb;Io.prototype.transition=QE;function a_(t,e){var n,i=1;t==null&&(t=0),e==null&&(e=0);function s(){var r,o=n.length,a,c=0,l=0;for(r=0;r<o;++r)a=n[r],c+=a.x,l+=a.y;for(c=(c/o-t)*i,l=(l/o-e)*i,r=0;r<o;++r)a=n[r],a.x-=c,a.y-=l}return s.initialize=function(r){n=r},s.x=function(r){return arguments.length?(t=+r,s):t},s.y=function(r){return arguments.length?(e=+r,s):e},s.strength=function(r){return arguments.length?(i=+r,s):i},s}function e1(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return l_(this.cover(e,n),e,n,t)}function l_(t,e,n,i){if(isNaN(e)||isNaN(n))return t;var s,r=t._root,o={data:i},a=t._x0,c=t._y0,l=t._x1,u=t._y1,d,f,h,g,v,p,m,x;if(!r)return t._root=o,t;for(;r.length;)if((v=e>=(d=(a+l)/2))?a=d:l=d,(p=n>=(f=(c+u)/2))?c=f:u=f,s=r,!(r=r[m=p<<1|v]))return s[m]=o,t;if(h=+t._x.call(null,r.data),g=+t._y.call(null,r.data),e===h&&n===g)return o.next=r,s?s[m]=o:t._root=o,t;do s=s?s[m]=new Array(4):t._root=new Array(4),(v=e>=(d=(a+l)/2))?a=d:l=d,(p=n>=(f=(c+u)/2))?c=f:u=f;while((m=p<<1|v)===(x=(g>=f)<<1|h>=d));return s[x]=r,s[m]=o,t}function t1(t){var e,n,i=t.length,s,r,o=new Array(i),a=new Array(i),c=1/0,l=1/0,u=-1/0,d=-1/0;for(n=0;n<i;++n)isNaN(s=+this._x.call(null,e=t[n]))||isNaN(r=+this._y.call(null,e))||(o[n]=s,a[n]=r,s<c&&(c=s),s>u&&(u=s),r<l&&(l=r),r>d&&(d=r));if(c>u||l>d)return this;for(this.cover(c,l).cover(u,d),n=0;n<i;++n)l_(this,o[n],a[n],t[n]);return this}function n1(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,i=this._y0,s=this._x1,r=this._y1;if(isNaN(n))s=(n=Math.floor(t))+1,r=(i=Math.floor(e))+1;else{for(var o=s-n||1,a=this._root,c,l;n>t||t>=s||i>e||e>=r;)switch(l=(e<i)<<1|t<n,c=new Array(4),c[l]=a,a=c,o*=2,l){case 0:s=n+o,r=i+o;break;case 1:n=s-o,r=i+o;break;case 2:s=n+o,i=r-o;break;case 3:n=s-o,i=r-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=n,this._y0=i,this._x1=s,this._y1=r,this}function i1(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function s1(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function on(t,e,n,i,s){this.node=t,this.x0=e,this.y0=n,this.x1=i,this.y1=s}function r1(t,e,n){var i,s=this._x0,r=this._y0,o,a,c,l,u=this._x1,d=this._y1,f=[],h=this._root,g,v;for(h&&f.push(new on(h,s,r,u,d)),n==null?n=1/0:(s=t-n,r=e-n,u=t+n,d=e+n,n*=n);g=f.pop();)if(!(!(h=g.node)||(o=g.x0)>u||(a=g.y0)>d||(c=g.x1)<s||(l=g.y1)<r))if(h.length){var p=(o+c)/2,m=(a+l)/2;f.push(new on(h[3],p,m,c,l),new on(h[2],o,m,p,l),new on(h[1],p,a,c,m),new on(h[0],o,a,p,m)),(v=(e>=m)<<1|t>=p)&&(g=f[f.length-1],f[f.length-1]=f[f.length-1-v],f[f.length-1-v]=g)}else{var x=t-+this._x.call(null,h.data),E=e-+this._y.call(null,h.data),S=x*x+E*E;if(S<n){var A=Math.sqrt(n=S);s=t-A,r=e-A,u=t+A,d=e+A,i=h.data}}return i}function o1(t){if(isNaN(u=+this._x.call(null,t))||isNaN(d=+this._y.call(null,t)))return this;var e,n=this._root,i,s,r,o=this._x0,a=this._y0,c=this._x1,l=this._y1,u,d,f,h,g,v,p,m;if(!n)return this;if(n.length)for(;;){if((g=u>=(f=(o+c)/2))?o=f:c=f,(v=d>=(h=(a+l)/2))?a=h:l=h,e=n,!(n=n[p=v<<1|g]))return this;if(!n.length)break;(e[p+1&3]||e[p+2&3]||e[p+3&3])&&(i=e,m=p)}for(;n.data!==t;)if(s=n,!(n=n.next))return this;return(r=n.next)&&delete n.next,s?(r?s.next=r:delete s.next,this):e?(r?e[p]=r:delete e[p],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(i?i[m]=n:this._root=n),this):(this._root=r,this)}function a1(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function l1(){return this._root}function c1(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function u1(t){var e=[],n,i=this._root,s,r,o,a,c;for(i&&e.push(new on(i,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(i=n.node,r=n.x0,o=n.y0,a=n.x1,c=n.y1)&&i.length){var l=(r+a)/2,u=(o+c)/2;(s=i[3])&&e.push(new on(s,l,u,a,c)),(s=i[2])&&e.push(new on(s,r,u,l,c)),(s=i[1])&&e.push(new on(s,l,o,a,u)),(s=i[0])&&e.push(new on(s,r,o,l,u))}return this}function f1(t){var e=[],n=[],i;for(this._root&&e.push(new on(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var s=i.node;if(s.length){var r,o=i.x0,a=i.y0,c=i.x1,l=i.y1,u=(o+c)/2,d=(a+l)/2;(r=s[0])&&e.push(new on(r,o,a,u,d)),(r=s[1])&&e.push(new on(r,u,a,c,d)),(r=s[2])&&e.push(new on(r,o,d,u,l)),(r=s[3])&&e.push(new on(r,u,d,c,l))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.y0,i.x1,i.y1);return this}function d1(t){return t[0]}function h1(t){return arguments.length?(this._x=t,this):this._x}function p1(t){return t[1]}function m1(t){return arguments.length?(this._y=t,this):this._y}function Gf(t,e,n){var i=new Wf(e??d1,n??p1,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function Wf(t,e,n,i,s,r){this._x=t,this._y=e,this._x0=n,this._y0=i,this._x1=s,this._y1=r,this._root=void 0}function Vh(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var fn=Gf.prototype=Wf.prototype;fn.copy=function(){var t=new Wf(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=Vh(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var s=0;s<4;++s)(i=e.source[s])&&(i.length?n.push({source:i,target:e.target[s]=new Array(4)}):e.target[s]=Vh(i));return t};fn.add=e1;fn.addAll=t1;fn.cover=n1;fn.data=i1;fn.extent=s1;fn.find=r1;fn.remove=o1;fn.removeAll=a1;fn.root=l1;fn.size=c1;fn.visit=u1;fn.visitAfter=f1;fn.x=h1;fn.y=m1;function Fs(t){return function(){return t}}function rs(t){return(t()-.5)*1e-6}function g1(t){return t.x+t.vx}function _1(t){return t.y+t.vy}function c_(t){var e,n,i,s=1,r=1;typeof t!="function"&&(t=Fs(t==null?1:+t));function o(){for(var l,u=e.length,d,f,h,g,v,p,m=0;m<r;++m)for(d=Gf(e,g1,_1).visitAfter(a),l=0;l<u;++l)f=e[l],v=n[f.index],p=v*v,h=f.x+f.vx,g=f.y+f.vy,d.visit(x);function x(E,S,A,P,D){var y=E.data,M=E.r,I=v+M;if(y){if(y.index>f.index){var L=h-y.x-y.vx,F=g-y.y-y.vy,k=L*L+F*F;k<I*I&&(L===0&&(L=rs(i),k+=L*L),F===0&&(F=rs(i),k+=F*F),k=(I-(k=Math.sqrt(k)))/k*s,f.vx+=(L*=k)*(I=(M*=M)/(p+M)),f.vy+=(F*=k)*I,y.vx-=L*(I=1-I),y.vy-=F*I)}return}return S>h+I||P<h-I||A>g+I||D<g-I}}function a(l){if(l.data)return l.r=n[l.data.index];for(var u=l.r=0;u<4;++u)l[u]&&l[u].r>l.r&&(l.r=l[u].r)}function c(){if(e){var l,u=e.length,d;for(n=new Array(u),l=0;l<u;++l)d=e[l],n[d.index]=+t(d,l,e)}}return o.initialize=function(l,u){e=l,i=u,c()},o.iterations=function(l){return arguments.length?(r=+l,o):r},o.strength=function(l){return arguments.length?(s=+l,o):s},o.radius=function(l){return arguments.length?(t=typeof l=="function"?l:Fs(+l),c(),o):t},o}function v1(t){return t.index}function Hh(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}function u_(t){var e=v1,n=d,i,s=Fs(30),r,o,a,c,l,u=1;t==null&&(t=[]);function d(p){return 1/Math.min(a[p.source.index],a[p.target.index])}function f(p){for(var m=0,x=t.length;m<u;++m)for(var E=0,S,A,P,D,y,M,I;E<x;++E)S=t[E],A=S.source,P=S.target,D=P.x+P.vx-A.x-A.vx||rs(l),y=P.y+P.vy-A.y-A.vy||rs(l),M=Math.sqrt(D*D+y*y),M=(M-r[E])/M*p*i[E],D*=M,y*=M,P.vx-=D*(I=c[E]),P.vy-=y*I,A.vx+=D*(I=1-I),A.vy+=y*I}function h(){if(o){var p,m=o.length,x=t.length,E=new Map(o.map((A,P)=>[e(A,P,o),A])),S;for(p=0,a=new Array(m);p<x;++p)S=t[p],S.index=p,typeof S.source!="object"&&(S.source=Hh(E,S.source)),typeof S.target!="object"&&(S.target=Hh(E,S.target)),a[S.source.index]=(a[S.source.index]||0)+1,a[S.target.index]=(a[S.target.index]||0)+1;for(p=0,c=new Array(x);p<x;++p)S=t[p],c[p]=a[S.source.index]/(a[S.source.index]+a[S.target.index]);i=new Array(x),g(),r=new Array(x),v()}}function g(){if(o)for(var p=0,m=t.length;p<m;++p)i[p]=+n(t[p],p,t)}function v(){if(o)for(var p=0,m=t.length;p<m;++p)r[p]=+s(t[p],p,t)}return f.initialize=function(p,m){o=p,l=m,h()},f.links=function(p){return arguments.length?(t=p,h(),f):t},f.id=function(p){return arguments.length?(e=p,f):e},f.iterations=function(p){return arguments.length?(u=+p,f):u},f.strength=function(p){return arguments.length?(n=typeof p=="function"?p:Fs(+p),g(),f):n},f.distance=function(p){return arguments.length?(s=typeof p=="function"?p:Fs(+p),v(),f):s},f}const x1=1664525,y1=1013904223,Gh=4294967296;function S1(){let t=1;return()=>(t=(x1*t+y1)%Gh)/Gh}function M1(t){return t.x}function b1(t){return t.y}var E1=10,w1=Math.PI*(3-Math.sqrt(5));function f_(t){var e,n=1,i=.001,s=1-Math.pow(i,1/300),r=0,o=.6,a=new Map,c=zf(d),l=Nl("tick","end"),u=S1();t==null&&(t=[]);function d(){f(),l.call("tick",e),n<i&&(c.stop(),l.call("end",e))}function f(v){var p,m=t.length,x;v===void 0&&(v=1);for(var E=0;E<v;++E)for(n+=(r-n)*s,a.forEach(function(S){S(n)}),p=0;p<m;++p)x=t[p],x.fx==null?x.x+=x.vx*=o:(x.x=x.fx,x.vx=0),x.fy==null?x.y+=x.vy*=o:(x.y=x.fy,x.vy=0);return e}function h(){for(var v=0,p=t.length,m;v<p;++v){if(m=t[v],m.index=v,m.fx!=null&&(m.x=m.fx),m.fy!=null&&(m.y=m.fy),isNaN(m.x)||isNaN(m.y)){var x=E1*Math.sqrt(.5+v),E=v*w1;m.x=x*Math.cos(E),m.y=x*Math.sin(E)}(isNaN(m.vx)||isNaN(m.vy))&&(m.vx=m.vy=0)}}function g(v){return v.initialize&&v.initialize(t,u),v}return h(),e={tick:f,restart:function(){return c.restart(d),e},stop:function(){return c.stop(),e},nodes:function(v){return arguments.length?(t=v,h(),a.forEach(g),e):t},alpha:function(v){return arguments.length?(n=+v,e):n},alphaMin:function(v){return arguments.length?(i=+v,e):i},alphaDecay:function(v){return arguments.length?(s=+v,e):+s},alphaTarget:function(v){return arguments.length?(r=+v,e):r},velocityDecay:function(v){return arguments.length?(o=1-v,e):1-o},randomSource:function(v){return arguments.length?(u=v,a.forEach(g),e):u},force:function(v,p){return arguments.length>1?(p==null?a.delete(v):a.set(v,g(p)),e):a.get(v)},find:function(v,p,m){var x=0,E=t.length,S,A,P,D,y;for(m==null?m=1/0:m*=m,x=0;x<E;++x)D=t[x],S=v-D.x,A=p-D.y,P=S*S+A*A,P<m&&(y=D,m=P);return y},on:function(v,p){return arguments.length>1?(l.on(v,p),e):l.on(v)}}}function d_(){var t,e,n,i,s=Fs(-30),r,o=1,a=1/0,c=.81;function l(h){var g,v=t.length,p=Gf(t,M1,b1).visitAfter(d);for(i=h,g=0;g<v;++g)e=t[g],p.visit(f)}function u(){if(t){var h,g=t.length,v;for(r=new Array(g),h=0;h<g;++h)v=t[h],r[v.index]=+s(v,h,t)}}function d(h){var g=0,v,p,m=0,x,E,S;if(h.length){for(x=E=S=0;S<4;++S)(v=h[S])&&(p=Math.abs(v.value))&&(g+=v.value,m+=p,x+=p*v.x,E+=p*v.y);h.x=x/m,h.y=E/m}else{v=h,v.x=v.data.x,v.y=v.data.y;do g+=r[v.data.index];while(v=v.next)}h.value=g}function f(h,g,v,p){if(!h.value)return!0;var m=h.x-e.x,x=h.y-e.y,E=p-g,S=m*m+x*x;if(E*E/c<S)return S<a&&(m===0&&(m=rs(n),S+=m*m),x===0&&(x=rs(n),S+=x*x),S<o&&(S=Math.sqrt(o*S)),e.vx+=m*h.value*i/S,e.vy+=x*h.value*i/S),!0;if(h.length||S>=a)return;(h.data!==e||h.next)&&(m===0&&(m=rs(n),S+=m*m),x===0&&(x=rs(n),S+=x*x),S<o&&(S=Math.sqrt(o*S)));do h.data!==e&&(E=r[h.data.index]*i/S,e.vx+=m*E,e.vy+=x*E);while(h=h.next)}return l.initialize=function(h,g){t=h,n=g,u()},l.strength=function(h){return arguments.length?(s=typeof h=="function"?h:Fs(+h),u(),l):s},l.distanceMin=function(h){return arguments.length?(o=h*h,l):Math.sqrt(o)},l.distanceMax=function(h){return arguments.length?(a=h*h,l):Math.sqrt(a)},l.theta=function(h){return arguments.length?(c=h*h,l):Math.sqrt(c)},l}function T1(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}const Wh=Symbol("implicit");function h_(){var t=new Mh,e=[],n=[],i=Wh;function s(r){let o=t.get(r);if(o===void 0){if(i!==Wh)return i;t.set(r,o=e.push(r)-1)}return n[o%n.length]}return s.domain=function(r){if(!arguments.length)return e.slice();e=[],t=new Mh;for(const o of r)t.has(o)||t.set(o,e.push(o)-1);return s},s.range=function(r){return arguments.length?(n=Array.from(r),s):n.slice()},s.unknown=function(r){return arguments.length?(i=r,s):i},s.copy=function(){return h_(e,n).unknown(i)},T1.apply(s,arguments),s}function $r(t,e,n){this.k=t,this.x=e,this.y=n}$r.prototype={constructor:$r,scale:function(t){return t===1?this:new $r(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new $r(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};$r.prototype;const A1={class:"memory-graph"},R1={key:0,class:"loading-overlay"},C1={key:1,class:"empty-placeholder"},P1=un({__name:"MemoryGraph",props:{graphData:{},isLoading:{type:Boolean}},emits:["nodeClick"],setup(t,{emit:e}){const n=t,i=e,s=Ee();let r=null,o=null;const a=h_().domain(["storage","thinking","skill","entity","category"]).range(["#00ff41","#ff00ff","#00ffff","#ffff00","#ff6b6b"]);qn(()=>{s.value&&c()}),ui(()=>n.graphData,h=>{h.nodes.length>0&&l(h)},{deep:!0}),To(()=>{r&&r.stop()});function c(){if(!s.value)return;const h=s.value.clientWidth,g=s.value.clientHeight;o=_r(s.value).append("svg").attr("width",h).attr("height",g),o.append("defs").append("marker").attr("id","arrowhead").attr("viewBox","-0 -5 10 10").attr("refX",20).attr("refY",0).attr("orient","auto").attr("markerWidth",6).attr("markerHeight",6).append("path").attr("d","M 0,-5 L 10,0 L 0,5").attr("fill","#00ff41")}function l(h){if(!o||!s.value)return;const g=s.value.clientWidth,v=s.value.clientHeight;o.selectAll("*").remove(),r=f_(h.nodes).force("link",u_(h.links).id(x=>x.id).distance(100)).force("charge",d_().strength(-300)).force("center",a_(g/2,v/2)).force("collision",c_().radius(30));const p=o.append("g").selectAll("line").data(h.links).enter().append("line").attr("stroke","#00ff41").attr("stroke-opacity",.6).attr("stroke-width",1.5),m=o.append("g").selectAll("circle").data(h.nodes).enter().append("circle").attr("r",8).attr("fill",x=>a(x.type)||"#00ff41").attr("stroke","#fff").attr("stroke-width",2).style("cursor","pointer").call(Yg().on("start",u).on("drag",d).on("end",f)).on("click",(x,E)=>{i("nodeClick",E)});m.append("title").text(x=>x.label||x.id),r.on("tick",()=>{p.attr("x1",x=>x.source.x).attr("y1",x=>x.source.y).attr("x2",x=>x.target.x).attr("y2",x=>x.target.y),m.attr("cx",x=>x.x).attr("cy",x=>x.y)})}function u(h){!h.active&&r&&r.alphaTarget(.3).restart(),h.subject.fx=h.subject.x(h.subject).fy=h.subject.y}function d(h){h.subject.fx=h.x,h.subject.fy=h.y}function f(h){!h.active&&r&&r.alphaTarget(0),h.subject.fx=null,h.subject.fy=null}return(h,g)=>(ie(),ue("div",A1,[_("div",{ref_key:"containerRef",ref:s,class:"graph-container"},null,512),t.isLoading?(ie(),ue("div",R1,[...g[0]||(g[0]=[_("div",{class:"loading-spinner"},null,-1),_("p",null,"加载图谱中...",-1)])])):$e("",!0),!t.isLoading&&t.graphData.nodes.length===0?(ie(),ue("div",C1,[...g[1]||(g[1]=[_("h2",null,"暂无认知数据",-1),_("p",null,"当前记忆库尚未经过认知分析，图谱暂时无法显示。",-1)])])):$e("",!0)]))}}),vn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},L1=vn(P1,[["__scopeId","data-v-b5be093d"]]),D1={class:"memory-list-panel panel"},I1={class:"tiered-stats"},N1={class:"stat-item"},U1={class:"stat-value"},F1={class:"stat-item"},O1={class:"stat-value"},B1={class:"stat-item"},k1={class:"stat-value"},z1={class:"stat-item"},V1={class:"stat-value"},H1={class:"memory-type-tabs"},G1=["onClick"],W1={class:"memory-search-box"},$1={key:0,class:"memory-list"},X1={key:0,class:"memory-item-placeholder"},q1=["onClick"],Y1={class:"memory-header"},j1={class:"memory-time"},K1={class:"memory-title"},J1={class:"memory-content-preview"},Z1={key:0,class:"memory-keywords"},Q1={key:1,class:"memory-item-placeholder"},ew={key:2,class:"pagination"},tw=["disabled"],nw={class:"page-info"},iw=["disabled"],sw={class:"detail-body"},rw={class:"detail-row"},ow={class:"detail-value"},aw={class:"detail-row"},lw={class:"detail-value"},cw={class:"detail-row"},uw={class:"detail-value"},fw={key:0,class:"detail-row"},dw={class:"detail-value"},hw={class:"detail-row"},pw={class:"detail-value"},mw={class:"detail-content"},gw={class:"detail-body"},_w={class:"edit-row"},vw={class:"edit-row"},xw={class:"edit-row"},jo=50,yw=un({__name:"MemoryList",emits:["memorySelect"],setup(t,{emit:e}){const n=e,i=vi(),{memories:s,memoryCountByType:r,isLoading:o}=Er(i),a=yt(()=>i.currentMemoryType),c=Ee(""),l=Ee(1),u=Ee(null),d=Ee(null),f=Ee(!1),h=Ee(!1),g=Ee(null),v=Ee(""),p=[{label:"全部",value:"all"},{label:"技能",value:"skill"},{label:"思维",value:"thinking"},{label:"存储",value:"storage"}],m=yt(()=>r.value),x=yt(()=>{let T=s.value;if(a.value!=="all"&&(T=T.filter(w=>w.memory_type===a.value)),c.value.trim()){const w=c.value.toLowerCase();T=T.filter(H=>{var X,oe,de;return((X=H.content)==null?void 0:X.toLowerCase().includes(w))||((oe=H.title)==null?void 0:oe.toLowerCase().includes(w))||((de=H.keywords)==null?void 0:de.some(ge=>ge.toLowerCase().includes(w)))})}return T}),E=yt(()=>{const T=(l.value-1)*jo,w=T+jo;return x.value.slice(T,w)}),S=yt(()=>Math.ceil(x.value.length/jo));ui([()=>a.value,c],()=>{l.value=1}),qn(()=>{A()});async function A(){try{const T=await Mn.searchMemories("",1e3);s.value=T.items.map(w=>({id:w.memory_id||w.id,content:w.content,title:w.title,memory_type:w.memory_type||"storage",keywords:w.keywords||[],tags:w.tags||[],timestamp:w.timestamp,scope:w.scope,user_id:w.user_id,importance:w.importance||.5}))}catch(T){console.error("加载记忆失败:",T)}}function P(T){i.setMemoryType(T)}function D(T){u.value=T.id,d.value=T,f.value=!0,n("memorySelect",T)}function y(){f.value=!1,d.value=null,u.value=null}function M(){var T;d.value&&(g.value={...d.value},v.value=((T=d.value.keywords)==null?void 0:T.join(", "))||"",h.value=!0,f.value=!1)}function I(){h.value=!1,g.value=null,v.value=""}async function L(){if(g.value)try{const T={...g.value,keywords:v.value.split(",").map(H=>H.trim()).filter(H=>H)};await Mn.updateMemory(T.id,{content:T.content,user_id:T.user_id||"default",title:T.title,keywords:T.keywords});const w=s.value.findIndex(H=>H.id===T.id);w!==-1&&(s.value[w]=T),h.value=!1,g.value=null,await A()}catch(T){console.error("保存记忆失败:",T),alert("保存失败: "+T.message)}}async function F(){if(d.value&&confirm(`确定要删除记忆 "${d.value.title||d.value.id}" 吗？`))try{await Mn.deleteMemory(d.value.id,d.value.user_id||"default"),s.value=s.value.filter(T=>{var w;return T.id!==((w=d.value)==null?void 0:w.id)}),y(),await A()}catch(T){console.error("删除记忆失败:",T),alert("删除失败: "+T.message)}}function k(){l.value=1}function V(T){return{storage:"存储",thinking:"思维",skill:"技能"}[T||""]||T||"未知"}function U(T){if(!T)return"";const w=new Date(T),X=new Date().getTime()-w.getTime(),oe=Math.floor(X/6e4),de=Math.floor(X/36e5),ge=Math.floor(X/864e5);return oe<1?"刚刚":oe<60?`${oe}分钟前`:de<24?`${de}小时前`:ge<30?`${ge}天前`:w.toLocaleDateString()}return(T,w)=>{var H;return ie(),ue("div",D1,[w[24]||(w[24]=_("h1",null,"记忆列表",-1)),_("div",I1,[_("div",N1,[w[8]||(w[8]=_("span",{class:"stat-label"},"技能",-1)),_("span",U1,Z(m.value.skill),1)]),_("div",F1,[w[9]||(w[9]=_("span",{class:"stat-label"},"思维",-1)),_("span",O1,Z(m.value.thinking),1)]),_("div",B1,[w[10]||(w[10]=_("span",{class:"stat-label"},"存储",-1)),_("span",k1,Z(m.value.storage),1)]),_("div",z1,[w[11]||(w[11]=_("span",{class:"stat-label"},"总计",-1)),_("span",V1,Z(m.value.total),1)])]),_("div",H1,[(ie(),ue(at,null,Ct(p,X=>_("button",{key:X.value,class:rt(["memory-tab",{active:a.value===X.value}]),onClick:oe=>P(X.value)},Z(X.label),11,G1)),64))]),_("div",W1,[Rt(_("input",{"onUpdate:modelValue":w[0]||(w[0]=X=>c.value=X),type:"text",placeholder:"搜索记忆...",onKeyup:Cf(k,["enter"])},null,544),[[Ht,c.value]]),_("button",{onClick:k},"🔍")]),be(o)?(ie(),ue("div",Q1,[...w[12]||(w[12]=[_("div",{class:"loading-spinner"},null,-1),Tl(" 加载中... ",-1)])])):(ie(),ue("div",$1,[E.value.length===0?(ie(),ue("div",X1," 暂无记忆 ")):(ie(!0),ue(at,{key:1},Ct(E.value,X=>{var oe,de,ge;return ie(),ue("div",{key:X.id,class:rt(["memory-item",[X.memory_type,{selected:u.value===X.id}]]),onClick:Ge=>D(X)},[_("div",Y1,[_("span",{class:rt(["memory-type-badge",X.memory_type])},Z(V(X.memory_type)),3),_("span",j1,Z(U(X.timestamp)),1)]),_("div",K1,Z(X.title||((oe=X.content)==null?void 0:oe.slice(0,50))+"..."),1),_("div",J1,Z((de=X.content)==null?void 0:de.slice(0,80))+"...",1),(ge=X.keywords)!=null&&ge.length?(ie(),ue("div",Z1,[(ie(!0),ue(at,null,Ct(X.keywords.slice(0,3),Ge=>(ie(),ue("span",{key:Ge,class:"keyword-tag"},Z(Ge),1))),128))])):$e("",!0)],10,q1)}),128))])),S.value>1?(ie(),ue("div",ew,[_("button",{class:"page-btn",disabled:l.value===1,onClick:w[1]||(w[1]=X=>l.value--)}," ← ",8,tw),_("span",nw,Z(l.value)+" / "+Z(S.value),1),_("button",{class:"page-btn",disabled:l.value===S.value,onClick:w[2]||(w[2]=X=>l.value++)}," → ",8,iw),_("span",{class:"page-size"},"每页 "+Z(jo)+" 条")])):$e("",!0),f.value&&d.value?(ie(),ue("div",{key:3,class:"memory-detail-modal",onClick:y},[_("div",{class:"memory-detail-content",onClick:w[3]||(w[3]=Ka(()=>{},["stop"]))},[_("div",{class:"detail-header"},[w[13]||(w[13]=_("h3",null,"记忆详情",-1)),_("button",{class:"close-btn",onClick:y},"×")]),_("div",sw,[_("div",rw,[w[14]||(w[14]=_("span",{class:"detail-label"},"ID:",-1)),_("span",ow,Z(d.value.id),1)]),_("div",aw,[w[15]||(w[15]=_("span",{class:"detail-label"},"类型:",-1)),_("span",lw,[_("span",{class:rt(["memory-type-badge",d.value.memory_type])},Z(V(d.value.memory_type)),3)])]),_("div",cw,[w[16]||(w[16]=_("span",{class:"detail-label"},"标题:",-1)),_("span",uw,Z(d.value.title||"无标题"),1)]),(H=d.value.keywords)!=null&&H.length?(ie(),ue("div",fw,[w[17]||(w[17]=_("span",{class:"detail-label"},"关键词:",-1)),_("span",dw,[(ie(!0),ue(at,null,Ct(d.value.keywords,X=>(ie(),ue("span",{key:X,class:"keyword-tag"},Z(X),1))),128))])])):$e("",!0),_("div",hw,[w[18]||(w[18]=_("span",{class:"detail-label"},"时间:",-1)),_("span",pw,Z(d.value.timestamp),1)]),w[19]||(w[19]=_("div",{class:"detail-row"},[_("span",{class:"detail-label"},"内容:")],-1)),_("div",mw,Z(d.value.content),1)]),_("div",{class:"detail-actions"},[_("button",{class:"action-btn edit",onClick:M},"✏️ 编辑"),_("button",{class:"action-btn delete",onClick:F},"🗑️ 删除")])])])):$e("",!0),h.value&&g.value?(ie(),ue("div",{key:4,class:"memory-detail-modal",onClick:I},[_("div",{class:"memory-detail-content edit-mode",onClick:w[7]||(w[7]=Ka(()=>{},["stop"]))},[_("div",{class:"detail-header"},[w[20]||(w[20]=_("h3",null,"编辑记忆",-1)),_("button",{class:"close-btn",onClick:I},"×")]),_("div",gw,[_("div",_w,[w[21]||(w[21]=_("label",null,"标题:",-1)),Rt(_("input",{"onUpdate:modelValue":w[4]||(w[4]=X=>g.value.title=X),type:"text",placeholder:"记忆标题"},null,512),[[Ht,g.value.title]])]),_("div",vw,[w[22]||(w[22]=_("label",null,"关键词 (逗号分隔):",-1)),Rt(_("input",{"onUpdate:modelValue":w[5]||(w[5]=X=>v.value=X),type:"text",placeholder:"关键词1, 关键词2"},null,512),[[Ht,v.value]])]),_("div",xw,[w[23]||(w[23]=_("label",null,"内容:",-1)),Rt(_("textarea",{"onUpdate:modelValue":w[6]||(w[6]=X=>g.value.content=X),rows:"8",placeholder:"记忆内容..."},null,512),[[Ht,g.value.content]])])]),_("div",{class:"detail-actions"},[_("button",{class:"action-btn save",onClick:L},"💾 保存"),_("button",{class:"action-btn cancel",onClick:I},"❌ 取消")])])])):$e("",!0)])}}}),Sw=vn(yw,[["__scopeId","data-v-5725e82f"]]),Mw={class:"log-panel panel"},bw={class:"log-time"},Ew={class:"log-message"},ww={key:0,class:"log-placeholder"},Tw=un({__name:"LogPanel",setup(t){const e=vi(),{logs:n}=Er(e),i=Ee();ui(n,()=>{wo(()=>{i.value&&(i.value.scrollTop=i.value.scrollHeight)})},{deep:!0});function s(){e.clearLogs()}return(r,o)=>(ie(),ue("div",Mw,[_("div",{class:"log-header"},[o[0]||(o[0]=_("h3",null,"系统日志",-1)),_("button",{class:"clear-btn",onClick:s},"清空")]),_("div",{class:"log-content",ref_key:"logContentRef",ref:i},[(ie(!0),ue(at,null,Ct(be(n),(a,c)=>(ie(),ue("div",{key:c,class:rt(["log-entry",a.type])},[_("span",bw,"["+Z(a.time)+"]",1),_("span",Ew,Z(a.message),1)],2))),128)),be(n).length===0?(ie(),ue("div",ww," 暂无日志 ")):$e("",!0)],512)]))}}),Aw=vn(Tw,[["__scopeId","data-v-17bbce0b"]]),Rw={class:"stats-panel panel"},Cw={key:0,class:"stats-grid"},Pw={class:"stat-card"},Lw={class:"stat-info"},Dw={class:"stat-value"},Iw={class:"stat-card"},Nw={class:"stat-info"},Uw={class:"stat-value"},Fw={class:"stat-card"},Ow={class:"stat-info"},Bw={class:"stat-value"},kw={class:"stat-card"},zw={class:"stat-info"},Vw={class:"stat-value"},Hw={key:1,class:"evolution-status"},Gw={class:"status-item"},Ww={class:"status-item"},$w={class:"status-value"},Xw={class:"status-item"},qw={class:"status-value"},Yw={key:2,class:"llm-status"},jw={class:"status-item"},Kw={class:"status-value"},Jw=un({__name:"StatsPanel",setup(t){const e=vi(),{stats:n,evolutionStatus:i}=Er(e),s=yt(()=>{var o;return((o=n.value)==null?void 0:o.llm_enabled)||!1}),r=yt(()=>{var o;return((o=n.value)==null?void 0:o.preferred_provider)||"未配置"});return(o,a)=>(ie(),ue("div",Rw,[a[14]||(a[14]=_("h3",null,"系统状态",-1)),be(n)?(ie(),ue("div",Cw,[_("div",Pw,[a[1]||(a[1]=_("div",{class:"stat-icon"},"📊",-1)),_("div",Lw,[_("div",Dw,Z(be(n).memory_count),1),a[0]||(a[0]=_("div",{class:"stat-label"},"总记忆数",-1))])]),_("div",Iw,[a[3]||(a[3]=_("div",{class:"stat-icon"},"🧠",-1)),_("div",Nw,[_("div",Uw,Z(be(n).tiered_count),1),a[2]||(a[2]=_("div",{class:"stat-label"},"三层记忆",-1))])]),_("div",Fw,[a[5]||(a[5]=_("div",{class:"stat-icon"},"⚡",-1)),_("div",Ow,[_("div",Bw,Z(be(n).tiered_breakdown.skill),1),a[4]||(a[4]=_("div",{class:"stat-label"},"技能记忆",-1))])]),_("div",kw,[a[7]||(a[7]=_("div",{class:"stat-icon"},"💭",-1)),_("div",zw,[_("div",Vw,Z(be(n).tiered_breakdown.thinking),1),a[6]||(a[6]=_("div",{class:"stat-label"},"思维记忆",-1))])])])):$e("",!0),be(i)?(ie(),ue("div",Hw,[a[11]||(a[11]=_("h4",null,"进化系统",-1)),_("div",Gw,[a[8]||(a[8]=_("span",{class:"status-label"},"状态:",-1)),_("span",{class:rt(["status-value",be(i).enabled?"active":"inactive"])},Z(be(i).enabled?"运行中":"已停止"),3)]),_("div",Ww,[a[9]||(a[9]=_("span",{class:"status-label"},"模式:",-1)),_("span",$w,Z(be(i).profile),1)]),_("div",Xw,[a[10]||(a[10]=_("span",{class:"status-label"},"扫描次数:",-1)),_("span",qw,Z(be(i).total_scanned),1)])])):$e("",!0),s.value?(ie(),ue("div",Yw,[a[13]||(a[13]=_("h4",null,"LLM 状态",-1)),_("div",jw,[a[12]||(a[12]=_("span",{class:"status-label"},"提供商:",-1)),_("span",Kw,Z(r.value),1)])])):$e("",!0)]))}}),Zw=vn(Jw,[["__scopeId","data-v-36d19230"]]),cc="default_user",p_=Pf("auth",()=>{const t=Ee(cc),e=Ee(!0),n=Ee({id:cc,name:cc}),i=yt(()=>t.value);function s(a){t.value=a,n.value.id=a,n.value.name=a}function r(){const a=localStorage.getItem("mcp_memory_user_id");a&&s(a)}function o(a){localStorage.setItem("mcp_memory_user_id",a),s(a)}return r(),{currentUserId:t,isAuthenticated:e,userInfo:n,getCurrentUserId:i,setUserId:s,loadUserFromStorage:r,saveUserToStorage:o}}),Qw={class:"memory-writer panel"},eT={class:"write-mode-tabs"},tT={class:"form-group"},nT={class:"form-group"},iT={key:0,class:"error-text"},sT={class:"form-group"},rT={class:"form-row"},oT={class:"form-group"},aT={key:0,class:"form-group"},lT={key:1,class:"form-group"},cT={class:"form-actions"},uT=["disabled"],fT={key:0,class:"success-message"},dT={key:1,class:"error-message"},hT=un({__name:"MemoryWriter",emits:["written"],setup(t,{emit:e}){const n=e,i=vi(),s=p_(),r=Ee("normal"),o=Ee(!1),a=Ee(""),c=Ee(""),l=Ee({title:"",content:"",scope:"project",memory_type:"storage",content_type:"note",keywords:[]}),u=Ee({content:""}),d=yt({get:()=>l.value.keywords.join(", "),set:p=>{l.value.keywords=p.split(",").map(m=>m.trim()).filter(m=>m)}}),f=yt(()=>l.value.content.trim().length>0);function h(){return u.value.content="",l.value.content.trim()?!0:(u.value.content="请输入记忆内容",!1)}function g(){l.value={title:"",content:"",scope:"project",memory_type:"storage",content_type:"note",keywords:[]},u.value={content:""},a.value="",c.value=""}async function v(){if(h()){o.value=!0,a.value="",c.value="";try{let p;const m=s.getCurrentUserId;if(r.value==="normal")p=await Mn.writeMemory({content:l.value.content,user_id:m,title:l.value.title||void 0,scope:l.value.scope,keywords:l.value.keywords.length>0?l.value.keywords:void 0,content_type:l.value.content_type}),i.addLog("记忆写入成功","success");else{const x={content:l.value.content,user_id:m,title:l.value.title||void 0,keywords:l.value.keywords.length>0?l.value.keywords:void 0};l.value.memory_type==="storage"?p=await Hn.writeStorage(x):l.value.memory_type==="thinking"?p=await Hn.writeThinking(x):p=await Hn.writeSkill(x);const S={storage:"存储记忆",thinking:"思维记忆",skill:"技能记忆"}[l.value.memory_type]||"记忆";i.addLog(`${S}写入成功`,"success")}a.value=`记忆写入成功！ID: ${p.id}`,n("written",p.id),l.value={title:"",content:"",scope:l.value.scope,memory_type:l.value.memory_type,content_type:l.value.content_type,keywords:[]},await i.fetchStats()}catch(p){const m=p.message||"未知错误";c.value=`写入失败: ${m}`,i.addLog("写入失败: "+m,"error")}finally{o.value=!1}}}return(p,m)=>(ie(),ue("div",Qw,[m[17]||(m[17]=_("h3",null,"记忆写入",-1)),_("div",eT,[_("button",{class:rt(["mode-tab",{active:r.value==="normal"}]),onClick:m[0]||(m[0]=x=>r.value="normal")}," 普通写入 ",2),_("button",{class:rt(["mode-tab",{active:r.value==="tiered"}]),onClick:m[1]||(m[1]=x=>r.value="tiered")}," 分层写入 ",2)]),_("div",tT,[m[8]||(m[8]=_("label",null,"标题",-1)),Rt(_("input",{"onUpdate:modelValue":m[2]||(m[2]=x=>l.value.title=x),type:"text",placeholder:"记忆标题（可选）"},null,512),[[Ht,l.value.title]])]),_("div",nT,[m[9]||(m[9]=_("label",null,[Tl("内容 "),_("span",{class:"required"},"*")],-1)),Rt(_("textarea",{"onUpdate:modelValue":m[3]||(m[3]=x=>l.value.content=x),rows:"6",placeholder:"输入记忆内容...",class:rt({"input-error":u.value.content})},null,2),[[Ht,l.value.content]]),u.value.content?(ie(),ue("span",iT,Z(u.value.content),1)):$e("",!0)]),_("div",sT,[m[10]||(m[10]=_("label",null,"关键词",-1)),Rt(_("input",{"onUpdate:modelValue":m[4]||(m[4]=x=>d.value=x),type:"text",placeholder:"关键词1, 关键词2, ..."},null,512),[[Ht,d.value]])]),_("div",rT,[_("div",oT,[m[12]||(m[12]=_("label",null,"作用域",-1)),Rt(_("select",{"onUpdate:modelValue":m[5]||(m[5]=x=>l.value.scope=x)},[...m[11]||(m[11]=[_("option",{value:"project"},"项目",-1),_("option",{value:"global"},"全局",-1)])],512),[[io,l.value.scope]])]),r.value==="tiered"?(ie(),ue("div",aT,[m[14]||(m[14]=_("label",null,"记忆类型",-1)),Rt(_("select",{"onUpdate:modelValue":m[6]||(m[6]=x=>l.value.memory_type=x)},[...m[13]||(m[13]=[_("option",{value:"storage"},"存储记忆 💾",-1),_("option",{value:"thinking"},"思维记忆 💭",-1),_("option",{value:"skill"},"技能记忆 ⚡",-1)])],512),[[io,l.value.memory_type]])])):$e("",!0),r.value==="normal"?(ie(),ue("div",lT,[m[16]||(m[16]=_("label",null,"内容类型",-1)),Rt(_("select",{"onUpdate:modelValue":m[7]||(m[7]=x=>l.value.content_type=x)},[...m[15]||(m[15]=[sg('<option value="note" data-v-aeea853e>笔记</option><option value="task" data-v-aeea853e>任务</option><option value="summary" data-v-aeea853e>摘要</option><option value="code" data-v-aeea853e>代码</option><option value="config" data-v-aeea853e>配置</option><option value="workflow" data-v-aeea853e>工作流</option>',6)])],512),[[io,l.value.content_type]])])):$e("",!0)]),_("div",cT,[_("button",{class:"btn-reset",onClick:g},"重置"),_("button",{class:"btn-write",onClick:v,disabled:o.value||!f.value},Z(o.value?"写入中...":"写入记忆"),9,uT)]),a.value?(ie(),ue("div",fT,Z(a.value),1)):$e("",!0),c.value?(ie(),ue("div",dT,Z(c.value),1)):$e("",!0)]))}}),pT=vn(hT,[["__scopeId","data-v-aeea853e"]]),mT={class:"modal-body"},gT={class:"form-group"},_T={class:"form-group"},vT={class:"form-group"},xT={class:"form-row"},yT={class:"form-group"},ST={class:"form-group"},MT={class:"form-actions"},bT=["disabled"],ET=un({__name:"MemoryEditor",props:{visible:{type:Boolean},memory:{}},emits:["close","saved","deleted"],setup(t,{emit:e}){const n=t,i=e,s=vi(),r=Ee(!1),o=Ee({title:"",content:"",scope:"project",memory_type:"storage",keywords:[]}),a=yt({get:()=>o.value.keywords.join(", "),set:d=>{o.value.keywords=d.split(",").map(f=>f.trim()).filter(f=>f)}});ui(()=>n.memory,d=>{d&&(o.value={title:d.title||"",content:d.content||"",scope:d.scope||"project",memory_type:d.memory_type||"storage",keywords:d.keywords||[]})},{immediate:!0});function c(){i("close")}async function l(){if(n.memory){r.value=!0;try{await s.updateMemory(n.memory.id,o.value.content),s.addLog("记忆已更新","success"),i("saved"),c()}catch(d){s.addLog("更新失败: "+d.message,"error")}finally{r.value=!1}}}async function u(){if(n.memory&&confirm("确定要删除这条记忆吗？此操作不可撤销。"))try{await s.deleteMemory(n.memory.id),s.addLog("记忆已删除","success"),i("deleted",n.memory.id),c()}catch(d){s.addLog("删除失败: "+d.message,"error")}}return(d,f)=>t.visible?(ie(),ue("div",{key:0,class:"memory-editor-modal",onClick:c},[_("div",{class:"modal-content",onClick:f[5]||(f[5]=Ka(()=>{},["stop"]))},[_("div",{class:"modal-header"},[f[6]||(f[6]=_("h2",null,"编辑记忆",-1)),_("button",{class:"close-btn",onClick:c},"×")]),_("div",mT,[_("div",gT,[f[7]||(f[7]=_("label",null,"标题",-1)),Rt(_("input",{"onUpdate:modelValue":f[0]||(f[0]=h=>o.value.title=h),type:"text",placeholder:"记忆标题"},null,512),[[Ht,o.value.title]])]),_("div",_T,[f[8]||(f[8]=_("label",null,"内容",-1)),Rt(_("textarea",{"onUpdate:modelValue":f[1]||(f[1]=h=>o.value.content=h),rows:"10",placeholder:"记忆内容"},null,512),[[Ht,o.value.content]])]),_("div",vT,[f[9]||(f[9]=_("label",null,"关键词（用逗号分隔）",-1)),Rt(_("input",{"onUpdate:modelValue":f[2]||(f[2]=h=>a.value=h),type:"text",placeholder:"关键词1, 关键词2, ..."},null,512),[[Ht,a.value]])]),_("div",xT,[_("div",yT,[f[11]||(f[11]=_("label",null,"作用域",-1)),Rt(_("select",{"onUpdate:modelValue":f[3]||(f[3]=h=>o.value.scope=h)},[...f[10]||(f[10]=[_("option",{value:"project"},"项目",-1),_("option",{value:"global"},"全局",-1)])],512),[[io,o.value.scope]])]),_("div",ST,[f[13]||(f[13]=_("label",null,"记忆类型",-1)),Rt(_("select",{"onUpdate:modelValue":f[4]||(f[4]=h=>o.value.memory_type=h)},[...f[12]||(f[12]=[_("option",{value:"storage"},"存储记忆",-1),_("option",{value:"thinking"},"思维记忆",-1),_("option",{value:"skill"},"技能记忆",-1)])],512),[[io,o.value.memory_type]])])]),_("div",MT,[_("button",{class:"btn-secondary",onClick:c},"取消"),t.memory?(ie(),ue("button",{key:0,class:"btn-danger",onClick:u},"删除")):$e("",!0),_("button",{class:"btn-primary",onClick:l,disabled:r.value},Z(r.value?"保存中...":"保存"),9,bT)])])])])):$e("",!0)}}),wT=vn(ET,[["__scopeId","data-v-05d49056"]]),TT={class:"tiered-memory-panel panel"},AT={class:"tier-tabs"},RT=["onClick"],CT={class:"tier-icon"},PT={class:"write-section"},LT={class:"form-group"},DT={class:"form-group"},IT={class:"form-group"},NT=["disabled"],UT={class:"query-section"},FT={class:"query-form"},OT=["disabled"],BT={class:"query-results"},kT={key:0,class:"empty-placeholder"},zT=["onClick"],VT={class:"result-title"},HT={class:"result-preview"},GT={class:"result-meta"},WT={class:"result-time"},$T={class:"tier-stats"},XT={class:"stat-item"},qT={class:"stat-value"},YT={class:"stat-item"},jT={class:"stat-value"},KT={class:"stat-item"},JT={class:"stat-value"},ZT=un({__name:"TieredMemoryPanel",emits:["memorySelect"],setup(t,{emit:e}){const n=e,i=vi(),s=p_(),r=[{label:"存储记忆",value:"storage",icon:"💾"},{label:"思维记忆",value:"thinking",icon:"💭"},{label:"技能记忆",value:"skill",icon:"⚡"}],o=Ee("storage"),a=Ee({title:"",content:"",keywords:""}),c=Ee(!1),l=Ee(""),u=Ee(!1),d=Ee([]),f=yt(()=>{var E;return((E=r.find(S=>S.value===o.value))==null?void 0:E.label)||""}),h=yt(()=>i.memoryCountByType);function g(E){o.value=E,d.value=[]}async function v(){if(!a.value.content.trim()){i.addLog("请输入记忆内容","warn");return}c.value=!0;try{const E=a.value.keywords.split(",").map(A=>A.trim()).filter(A=>A),S=s.getCurrentUserId;o.value==="storage"?await Hn.writeStorage({content:a.value.content,user_id:S,title:a.value.title,keywords:E}):o.value==="thinking"?await Hn.writeThinking({content:a.value.content,user_id:S,title:a.value.title,keywords:E}):o.value==="skill"&&await Hn.writeSkill({content:a.value.content,user_id:S,title:a.value.title,keywords:E}),i.addLog(`${f.value}写入成功`,"success"),a.value={title:"",content:"",keywords:""},await i.fetchStats()}catch(E){i.addLog("写入失败: "+E.message,"error")}finally{c.value=!1}}async function p(){if(!l.value.trim()){i.addLog("请输入查询内容","warn");return}u.value=!0;try{const E=await Hn.queryMemories({query:l.value,user_id:s.getCurrentUserId,memory_type:o.value,top_k:10});d.value=E.memories||[],i.addLog(`查询到 ${d.value.length} 条记忆`,"success")}catch(E){i.addLog("查询失败: "+E.message,"error")}finally{u.value=!1}}function m(E){n("memorySelect",E)}function x(E){return new Date(E).toLocaleString("zh-CN")}return(E,S)=>(ie(),ue("div",TT,[S[7]||(S[7]=_("h3",null,"三层记忆管理",-1)),_("div",AT,[(ie(),ue(at,null,Ct(r,A=>_("button",{key:A.value,class:rt(["tier-tab",{active:o.value===A.value}]),onClick:P=>g(A.value)},[_("span",CT,Z(A.icon),1),Tl(" "+Z(A.label),1)],10,RT)),64))]),_("div",PT,[_("h4",null,"写入"+Z(f.value),1),_("div",LT,[Rt(_("input",{"onUpdate:modelValue":S[0]||(S[0]=A=>a.value.title=A),type:"text",placeholder:"标题（可选）"},null,512),[[Ht,a.value.title]])]),_("div",DT,[Rt(_("textarea",{"onUpdate:modelValue":S[1]||(S[1]=A=>a.value.content=A),rows:"5",placeholder:"记忆内容..."},null,512),[[Ht,a.value.content]])]),_("div",IT,[Rt(_("input",{"onUpdate:modelValue":S[2]||(S[2]=A=>a.value.keywords=A),type:"text",placeholder:"关键词（逗号分隔）"},null,512),[[Ht,a.value.keywords]])]),_("button",{class:"btn-write",onClick:v,disabled:c.value},Z(c.value?"写入中...":"写入记忆"),9,NT)]),_("div",UT,[_("h4",null,"查询"+Z(f.value),1),_("div",FT,[Rt(_("input",{"onUpdate:modelValue":S[3]||(S[3]=A=>l.value=A),type:"text",placeholder:"输入查询内容...",onKeyup:Cf(p,["enter"])},null,544),[[Ht,l.value]]),_("button",{onClick:p,disabled:u.value},Z(u.value?"查询中...":"查询"),9,OT)]),_("div",BT,[d.value.length===0?(ie(),ue("div",kT," 暂无查询结果 ")):$e("",!0),(ie(!0),ue(at,null,Ct(d.value,A=>{var P;return ie(),ue("div",{key:A.id,class:"result-item",onClick:D=>m(A)},[_("div",VT,Z(A.title||"无标题"),1),_("div",HT,Z((P=A.content)==null?void 0:P.substring(0,100))+"...",1),_("div",GT,[_("span",WT,Z(x(A.timestamp)),1)])],8,zT)}),128))])]),_("div",$T,[_("div",XT,[S[4]||(S[4]=_("span",{class:"stat-label"},"存储层",-1)),_("span",qT,Z(h.value.storage),1)]),_("div",YT,[S[5]||(S[5]=_("span",{class:"stat-label"},"思维层",-1)),_("span",jT,Z(h.value.thinking),1)]),_("div",KT,[S[6]||(S[6]=_("span",{class:"stat-label"},"技能层",-1)),_("span",JT,Z(h.value.skill),1)])])]))}}),QT=vn(ZT,[["__scopeId","data-v-1b46c3c2"]]),eA={class:"llm-interactions-panel panel"},tA={class:"panel-header"},nA=["disabled"],iA={class:"stats-summary"},sA={class:"stat-item"},rA={class:"stat-value"},oA={class:"stat-item"},aA={class:"stat-value"},lA={class:"stat-item"},cA={class:"stat-value"},uA={class:"interactions-list"},fA={key:0,class:"loading-placeholder"},dA={key:1,class:"empty-placeholder"},hA=["onClick"],pA={class:"interaction-header"},mA={class:"interaction-model"},gA={class:"interaction-time"},_A={class:"interaction-stats"},vA={class:"token-info"},xA={class:"stat-badge input-token"},yA={class:"stat-badge output-token"},SA={key:0,class:"interaction-detail"},MA={class:"detail-section"},bA={class:"detail-content prompt"},EA={class:"detail-section"},wA={class:"detail-content response"},TA={key:0,class:"pagination"},AA=["disabled"],RA={class:"page-info"},CA=["disabled"],uc=10,PA=un({__name:"LLMInteractions",setup(t){const e=Ee([]),n=Ee(!1),i=Ee(1),s=Ee(null),r=yt(()=>e.value.reduce((g,v)=>g+(v.input_tokens||0)+(v.output_tokens||0),0)),o=yt(()=>{if(e.value.length===0)return 0;const g=e.value.reduce((v,p)=>v+(p.response_time||0),0);return Math.round(g/e.value.length)}),a=yt(()=>Math.ceil(e.value.length/uc)),c=yt(()=>{const g=(i.value-1)*uc,v=g+uc;return e.value.slice(g,v)});async function l(){n.value=!0;try{const g=await AS.getInteractions(100);e.value=g.interactions||g.items||g||[]}catch(g){console.error("Failed to load LLM interactions:",g),e.value=[]}finally{n.value=!1}}function u(g){s.value=s.value===g?null:g}function d(g){return new Date(g).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function f(g,v){return g?g.length<=v?g:g.substring(0,v)+"...":""}function h(g){return g<1e3?"fast":g<3e3?"medium":"slow"}return qn(()=>{l()}),(g,v)=>(ie(),ue("div",eA,[_("div",tA,[v[2]||(v[2]=_("h3",null,"LLM 交互历史",-1)),_("button",{class:"refresh-btn",onClick:l,disabled:n.value},Z(n.value?"加载中...":"刷新"),9,nA)]),_("div",iA,[_("div",sA,[v[3]||(v[3]=_("span",{class:"stat-label"},"总交互",-1)),_("span",rA,Z(e.value.length),1)]),_("div",oA,[v[4]||(v[4]=_("span",{class:"stat-label"},"总Token",-1)),_("span",aA,Z(r.value),1)]),_("div",lA,[v[5]||(v[5]=_("span",{class:"stat-label"},"平均响应",-1)),_("span",cA,Z(o.value)+"ms",1)])]),_("div",uA,[n.value?(ie(),ue("div",fA," 加载中... ")):c.value.length===0?(ie(),ue("div",dA," 暂无交互记录 ")):(ie(!0),ue(at,{key:2},Ct(c.value,p=>(ie(),ue("div",{key:p.id,class:"interaction-item",onClick:m=>u(p.id)},[_("div",pA,[_("span",mA,Z(p.model),1),_("span",gA,Z(d(p.timestamp)),1)]),_("div",_A,[_("span",vA,[_("span",xA,"输入: "+Z(p.input_tokens||0),1),_("span",yA,"输出: "+Z(p.output_tokens||0),1)]),_("span",{class:rt(["response-time",h(p.response_time)])},Z(p.response_time||0)+"ms ",3)]),s.value===p.id?(ie(),ue("div",SA,[_("div",MA,[v[6]||(v[6]=_("div",{class:"detail-label"},"提示词:",-1)),_("div",bA,Z(f(p.prompt,500)),1)]),_("div",EA,[v[7]||(v[7]=_("div",{class:"detail-label"},"响应:",-1)),_("div",wA,Z(f(p.response,500)),1)])])):$e("",!0)],8,hA))),128))]),a.value>1?(ie(),ue("div",TA,[_("button",{class:"page-btn",disabled:i.value===1,onClick:v[0]||(v[0]=p=>i.value--)}," 上一页 ",8,AA),_("span",RA,Z(i.value)+" / "+Z(a.value),1),_("button",{class:"page-btn",disabled:i.value===a.value,onClick:v[1]||(v[1]=p=>i.value++)}," 下一页 ",8,CA)])):$e("",!0)]))}}),LA=vn(PA,[["__scopeId","data-v-ab845488"]]),DA={class:"evolution-config panel"},IA={key:0,class:"config-content"},NA={class:"status-header"},UA={class:"status-text"},FA={class:"config-section"},OA={class:"profile-selector"},BA=["onClick","disabled"],kA={class:"profile-icon"},zA={class:"profile-name"},VA={class:"profile-desc"},HA={class:"config-section"},GA={class:"status-grid"},WA={class:"status-item"},$A={class:"status-item"},XA={class:"status-item"},qA={class:"status-item"},YA={class:"config-section"},jA={class:"stats-grid"},KA={class:"stat-item"},JA={class:"stat-value"},ZA={class:"stat-item"},QA={class:"stat-value"},eR={class:"stat-item"},tR={class:"stat-value"},nR={class:"config-section"},iR={class:"time-info"},sR={class:"time-item"},rR={class:"time-value"},oR={class:"time-item"},aR={class:"time-value"},lR={class:"time-item"},cR={class:"time-value"},uR={class:"config-section"},fR={class:"activity-info"},dR={key:0,class:"activity-item"},hR={class:"activity-time"},pR={key:1,class:"activity-item"},mR={class:"activity-time"},gR={key:2,class:"activity-item"},_R={class:"activity-time"},vR={key:0,class:"reflection-note"},xR={key:0,class:"error-section"},yR={class:"error-message"},SR={class:"config-section"},MR={class:"llm-info"},bR={class:"llm-item"},ER={key:0,class:"llm-item"},wR={class:"llm-value"},TR={key:1,class:"llm-item"},AR={class:"llm-value"},RR={key:1,class:"loading"},CR=un({__name:"EvolutionConfig",setup(t){const e=vi(),{evolutionStatus:n,currentProfile:i,isLoading:s}=Er(e),r=[{value:"light",label:"轻度",icon:"🐢",desc:"低频率扫描和反思，适合资源受限环境"},{value:"standard",label:"标准",icon:"🚀",desc:"平衡的扫描和反思频率，适合大多数场景"},{value:"aggressive",label:"激进",icon:"⚡",desc:"高频率扫描和反思，适合快速迭代场景"}],o=yt(()=>n.value?n.value.enabled?n.value.running?"运行中":"已暂停":"已停止":"未知"),a=yt(()=>{const d=r.find(f=>f.value===i.value);return(d==null?void 0:d.desc)||""});function c(d){return d?d<60?`${d} 秒`:d<3600?`${Math.floor(d/60)} 分钟`:`${Math.floor(d/3600)} 小时`:"-"}function l(d){if(!d)return"-";try{return new Date(d).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return d}}async function u(d){d!==i.value&&await e.setEvolutionProfile(d)}return qn(()=>{e.fetchEvolutionStatus()}),(d,f)=>{var h,g,v,p,m;return ie(),ue("div",DA,[f[24]||(f[24]=_("h3",null,"进化配置",-1)),be(n)?(ie(),ue("div",IA,[_("div",NA,[_("div",{class:rt(["status-indicator",{active:be(n).enabled&&be(n).running}])},null,2),_("span",UA,Z(o.value),1)]),_("div",FA,[f[0]||(f[0]=_("h4",null,"进化模式",-1)),_("div",OA,[(ie(),ue(at,null,Ct(r,x=>_("button",{key:x.value,class:rt(["profile-btn",{active:be(i)===x.value}]),onClick:E=>u(x.value),disabled:be(s)},[_("span",kA,Z(x.icon),1),_("span",zA,Z(x.label),1)],10,BA)),64))]),_("div",VA,Z(a.value),1)]),_("div",HA,[f[5]||(f[5]=_("h4",null,"运行状态",-1)),_("div",GA,[_("div",WA,[f[1]||(f[1]=_("span",{class:"item-label"},"扫描任务",-1)),_("span",{class:rt(["item-value",be(n).scan_task_running?"running":"idle"])},Z(be(n).scan_task_running?"运行中":"空闲"),3)]),_("div",$A,[f[2]||(f[2]=_("span",{class:"item-label"},"反思任务",-1)),_("span",{class:rt(["item-value",be(n).reflection_task_running?"running":"idle"])},Z(be(n).reflection_task_running?"运行中":"空闲"),3)]),_("div",XA,[f[3]||(f[3]=_("span",{class:"item-label"},"日反思",-1)),_("span",{class:rt(["item-value",(h=be(n).daily_reflection)!=null&&h.running?"running":"idle"])},Z((g=be(n).daily_reflection)!=null&&g.running?"运行中":"空闲"),3)]),_("div",qA,[f[4]||(f[4]=_("span",{class:"item-label"},"自适应",-1)),_("span",{class:rt(["item-value",be(n).adaptive?"active":"inactive"])},Z(be(n).adaptive?"开启":"关闭"),3)])])]),_("div",YA,[f[9]||(f[9]=_("h4",null,"统计数据",-1)),_("div",jA,[_("div",KA,[_("div",JA,Z(be(n).total_scanned),1),f[6]||(f[6]=_("div",{class:"stat-label"},"总扫描数",-1))]),_("div",ZA,[_("div",QA,Z(be(n).last_scan_processed),1),f[7]||(f[7]=_("div",{class:"stat-label"},"上次处理",-1))]),_("div",eR,[_("div",tR,Z(((v=be(n).daily_reflection)==null?void 0:v.total_reflections)||0),1),f[8]||(f[8]=_("div",{class:"stat-label"},"反思次数",-1))])])]),_("div",nR,[f[13]||(f[13]=_("h4",null,"时间配置",-1)),_("div",iR,[_("div",sR,[f[10]||(f[10]=_("span",{class:"time-label"},"扫描间隔",-1)),_("span",rR,Z(c(be(n).scan_interval_seconds)),1)]),_("div",oR,[f[11]||(f[11]=_("span",{class:"time-label"},"反思间隔",-1)),_("span",aR,Z(c(be(n).reflection_interval_seconds)),1)]),_("div",lR,[f[12]||(f[12]=_("span",{class:"time-label"},"扫描批次",-1)),_("span",cR,Z(be(n).scan_batch_size)+" 条",1)])])]),_("div",uR,[f[17]||(f[17]=_("h4",null,"最近活动",-1)),_("div",fR,[be(n).last_scan_time?(ie(),ue("div",dR,[f[14]||(f[14]=_("span",{class:"activity-label"},"上次扫描",-1)),_("span",hR,Z(l(be(n).last_scan_time)),1)])):$e("",!0),be(n).last_reflection_time?(ie(),ue("div",pR,[f[15]||(f[15]=_("span",{class:"activity-label"},"上次反思",-1)),_("span",mR,Z(l(be(n).last_reflection_time)),1)])):$e("",!0),(p=be(n).daily_reflection)!=null&&p.next_reflection?(ie(),ue("div",gR,[f[16]||(f[16]=_("span",{class:"activity-label"},"下次反思",-1)),_("span",_R,Z(be(n).daily_reflection.next_reflection),1)])):$e("",!0)]),be(n).last_reflection_note?(ie(),ue("div",vR,Z(be(n).last_reflection_note),1)):$e("",!0)]),be(n).last_error?(ie(),ue("div",xR,[f[18]||(f[18]=_("div",{class:"error-label"},"最近错误",-1)),_("div",yR,Z(be(n).last_error),1)])):$e("",!0),_("div",SR,[f[22]||(f[22]=_("h4",null,"LLM 配置",-1)),_("div",MR,[_("div",bR,[f[19]||(f[19]=_("span",{class:"llm-label"},"LLM 状态",-1)),_("span",{class:rt(["llm-value",be(n).llm_enabled?"enabled":"disabled"])},Z(be(n).llm_enabled?"已启用":"未启用"),3)]),be(n).preferred_provider?(ie(),ue("div",ER,[f[20]||(f[20]=_("span",{class:"llm-label"},"提供商",-1)),_("span",wR,Z(be(n).preferred_provider),1)])):$e("",!0),(m=be(n).available_providers)!=null&&m.length?(ie(),ue("div",TR,[f[21]||(f[21]=_("span",{class:"llm-label"},"可用提供商",-1)),_("span",AR,Z(be(n).available_providers.join(", ")),1)])):$e("",!0)])])])):(ie(),ue("div",RR,[...f[23]||(f[23]=[_("span",{class:"loading-text"},"加载中...",-1)])]))])}}}),PR=vn(CR,[["__scopeId","data-v-4154a459"]]),LR={class:"memory-feedback panel"},DR={class:"feedback-form"},IR={class:"form-group"},NR={class:"form-group"},UR={class:"rating-stars"},FR=["onClick"],OR={class:"rating-text"},BR={class:"form-group"},kR={class:"useful-buttons"},zR={class:"form-group"},VR=["disabled"],HR={class:"feedback-history"},GR={key:0,class:"empty-placeholder"},WR={class:"history-header"},$R={class:"history-id"},XR={class:"history-time"},qR={class:"history-content"},YR={class:"history-rating"},jR={key:0,class:"history-comment"},$h="memory_feedback_history",KR=un({__name:"MemoryFeedback",setup(t){const e=vi(),n=Ee(""),i=Ee(0),s=Ee(null),r=Ee(""),o=Ee(!1),a=Ee([]);qn(()=>{c()});function c(){try{const d=localStorage.getItem($h);d&&(a.value=JSON.parse(d))}catch(d){console.error("加载反馈历史失败:",d)}}function l(){try{localStorage.setItem($h,JSON.stringify(a.value))}catch(d){console.error("保存反馈历史失败:",d)}}async function u(){if(!n.value.trim()){e.addLog("请输入记忆ID","warn");return}o.value=!0;try{await Hn.submitFeedback(n.value,{rating:i.value>0?i.value:void 0,useful:s.value===null?void 0:s.value,comment:r.value.trim()||void 0});const d={memoryId:n.value,rating:i.value,useful:s.value,comment:r.value,timestamp:new Date().toLocaleString("zh-CN")};a.value.unshift(d),a.value.length>20&&a.value.pop(),l(),e.addLog("反馈提交成功","success"),n.value="",i.value=0,s.value=null,r.value=""}catch(d){e.addLog("反馈提交失败: "+d.message,"error")}finally{o.value=!1}}return(d,f)=>(ie(),ue("div",LR,[f[10]||(f[10]=_("h3",null,"记忆反馈",-1)),_("div",DR,[f[8]||(f[8]=_("h4",null,"提交反馈",-1)),_("div",IR,[f[4]||(f[4]=_("label",null,"记忆ID",-1)),Rt(_("input",{"onUpdate:modelValue":f[0]||(f[0]=h=>n.value=h),type:"text",placeholder:"输入记忆ID..."},null,512),[[Ht,n.value]])]),_("div",NR,[f[5]||(f[5]=_("label",null,"评分",-1)),_("div",UR,[(ie(),ue(at,null,Ct(5,h=>_("span",{key:h,class:rt(["star",{active:i.value>=h}]),onClick:g=>i.value=h},"★",10,FR)),64)),_("span",OR,Z(i.value>0?`${i.value} 星`:"未评分"),1)])]),_("div",BR,[f[6]||(f[6]=_("label",null,"有用性",-1)),_("div",kR,[_("button",{class:rt(["useful-btn",{active:s.value===!0}]),onClick:f[1]||(f[1]=h=>s.value=!0)},"是",2),_("button",{class:rt(["useful-btn",{active:s.value===!1}]),onClick:f[2]||(f[2]=h=>s.value=!1)},"否",2)])]),_("div",zR,[f[7]||(f[7]=_("label",null,"评论",-1)),Rt(_("textarea",{"onUpdate:modelValue":f[3]||(f[3]=h=>r.value=h),rows:"3",placeholder:"输入您的反馈评论..."},null,512),[[Ht,r.value]])]),_("button",{class:"btn-submit",onClick:u,disabled:o.value||!n.value},Z(o.value?"提交中...":"提交反馈"),9,VR)]),_("div",HR,[f[9]||(f[9]=_("h4",null,"反馈历史",-1)),a.value.length===0?(ie(),ue("div",GR," 暂无反馈记录 ")):$e("",!0),(ie(!0),ue(at,null,Ct(a.value,(h,g)=>(ie(),ue("div",{key:g,class:"history-item"},[_("div",WR,[_("span",$R,Z(h.memoryId.substring(0,8))+"...",1),_("span",XR,Z(h.timestamp),1)]),_("div",qR,[_("span",YR,[(ie(),ue(at,null,Ct(5,v=>_("span",{key:v,class:rt(["mini-star",{active:h.rating>=v}])},"★",2)),64))]),_("span",{class:rt(["history-useful",h.useful?"yes":"no"])},Z(h.useful?"有用":"无用"),3)]),h.comment?(ie(),ue("div",jR,Z(h.comment),1)):$e("",!0)]))),128))])]))}}),JR=vn(KR,[["__scopeId","data-v-f389155a"]]),ZR={class:"merge-chain-viewer panel"},QR={class:"header"},eC={key:0,class:"empty-placeholder"},tC={key:1,class:"loading-overlay"},nC={key:2,class:"error-message"},iC={class:"chain-info"},sC={class:"info-item"},rC={class:"info-value"},oC={class:"info-item"},aC={class:"info-value"},lC={class:"info-item"},cC={class:"info-value"},uC={key:0,class:"merge-history"},fC={class:"history-list"},dC={class:"history-time"},hC={class:"history-desc"},pC={key:4,class:"empty-placeholder"},mC=un({__name:"MergeChainViewer",props:{memoryId:{},showClose:{type:Boolean}},emits:["close","nodeClick"],setup(t,{emit:e}){const n=t,i=e,s=vi(),r=Ee(),o=Ee(!1),a=Ee(null),c=Ee(null);let l=null,u=null;ui(()=>n.memoryId,x=>{x?d(x):(c.value=null,f())},{immediate:!0}),qn(()=>{n.memoryId&&d(n.memoryId)}),To(()=>{u&&u.stop()});async function d(x){o.value=!0,a.value=null;try{const E=await Hn.getMergeChain(x);c.value=E,s.addLog("合并链加载成功","success"),await wo(),r.value&&E&&h(E)}catch(E){a.value="加载合并链失败: "+E.message,s.addLog("加载合并链失败","error")}finally{o.value=!1}}function f(){l&&l.selectAll("*").remove()}function h(x){if(!r.value)return;f();const E=r.value.clientWidth,S=280;l=_r(r.value).append("svg").attr("width",E).attr("height",S);const A=[],P=[];if(x.current&&A.push({id:x.current.id,title:x.current.title||x.current.id,type:"current"}),x.sources&&x.sources.length>0&&x.sources.forEach(I=>{A.push({id:I.id,title:I.title||I.id,type:"source"}),P.push({source:I.id,target:x.current.id,relation:"merged_to"})}),A.length===0)return;u=f_(A).force("link",u_(P).id(I=>I.id).distance(80)).force("charge",d_().strength(-200)).force("center",a_(E/2,S/2)).force("collision",c_().radius(35)),l.append("defs").append("marker").attr("id","arrowhead-merge").attr("viewBox","-0 -5 10 10").attr("refX",25).attr("refY",0).attr("orient","auto").attr("markerWidth",6).attr("markerHeight",6).append("path").attr("d","M 0,-5 L 10,0 L 0,5").attr("fill","#00ff41");const y=l.append("g").selectAll("line").data(P).enter().append("line").attr("stroke","#00ff41").attr("stroke-opacity",.6).attr("stroke-width",2).attr("marker-end","url(#arrowhead-merge)"),M=l.append("g").selectAll("g").data(A).enter().append("g").style("cursor","pointer").call(Yg().on("start",g).on("drag",v).on("end",p)).on("click",(I,L)=>{i("nodeClick",L)});M.append("circle").attr("r",I=>I.type==="current"?20:15).attr("fill",I=>I.type==="current"?"#00ff41":"rgba(0, 255, 65, 0.3)").attr("stroke","#00ff41").attr("stroke-width",2),M.append("text").attr("dy",4).attr("text-anchor","middle").attr("fill",I=>I.type==="current"?"#000":"#00ff41").attr("font-size","10px").attr("font-weight","bold").text(I=>I.title.length>6?I.title.substring(0,6)+"...":I.title),M.append("title").text(I=>`${I.title}
${I.memory_type||"未知类型"}`),u.on("tick",()=>{y.attr("x1",I=>I.source.x).attr("y1",I=>I.source.y).attr("x2",I=>I.target.x).attr("y2",I=>I.target.y),M.attr("transform",I=>`translate(${I.x},${I.y})`)})}function g(x){!x.active&&u&&u.alphaTarget(.3).restart(),x.subject.fx=x.subject.x,x.subject.fy=x.subject.y}function v(x){x.subject.fx=x.x,x.subject.fy=x.y}function p(x){!x.active&&u&&u.alphaTarget(0),x.subject.fx=null,x.subject.fy=null}function m(x){return x?new Date(x).toLocaleString("zh-CN"):"-"}return(x,E)=>{var S,A,P,D;return ie(),ue("div",ZR,[_("div",QR,[E[1]||(E[1]=_("h3",null,"记忆合并链",-1)),t.showClose?(ie(),ue("button",{key:0,class:"btn-close",onClick:E[0]||(E[0]=y=>i("close"))},"×")):$e("",!0)]),t.memoryId?o.value?(ie(),ue("div",tC,[...E[3]||(E[3]=[_("div",{class:"loading-spinner"},null,-1),_("p",null,"加载合并链中...",-1)])])):a.value?(ie(),ue("div",nC,[_("p",null,Z(a.value),1)])):c.value?(ie(),ue(at,{key:3},[_("div",iC,[_("div",sC,[E[4]||(E[4]=_("span",{class:"info-label"},"当前记忆",-1)),_("span",rC,Z(((S=c.value.current)==null?void 0:S.title)||((A=c.value.current)==null?void 0:A.id)),1)]),_("div",oC,[E[5]||(E[5]=_("span",{class:"info-label"},"合并深度",-1)),_("span",aC,Z(c.value.depth||0),1)]),_("div",lC,[E[6]||(E[6]=_("span",{class:"info-label"},"来源数量",-1)),_("span",cC,Z(((P=c.value.sources)==null?void 0:P.length)||0),1)])]),_("div",{ref_key:"graphContainer",ref:r,class:"graph-container"},null,512),(D=c.value.merge_history)!=null&&D.length?(ie(),ue("div",uC,[E[7]||(E[7]=_("h4",null,"合并历史",-1)),_("div",fC,[(ie(!0),ue(at,null,Ct(c.value.merge_history,(y,M)=>(ie(),ue("div",{key:M,class:"history-item"},[_("div",dC,Z(m(y.timestamp)),1),_("div",hC,Z(y.description||"合并操作"),1)]))),128))])])):$e("",!0)],64)):(ie(),ue("div",pC,[...E[8]||(E[8]=[_("p",null,"暂无合并链数据",-1)])])):(ie(),ue("div",eC,[...E[2]||(E[2]=[_("p",null,"请选择一个记忆查看其合并链",-1)])]))])}}}),gC=vn(mC,[["__scopeId","data-v-09b8e911"]]),m_=Pf("brain",()=>{const t=Ee(null),e=Ee(!1),n=Ee(null),i=Ee(null);async function s(){e.value=!0,n.value=null;try{const T=await fetch("/brain/status");if(!T.ok)throw new Error("Failed to fetch brain status");t.value=await T.json(),i.value=new Date}catch(T){n.value="获取AI大脑状态失败",console.error("Failed to fetch brain status:",T)}finally{e.value=!1}}async function r(T,w={}){e.value=!0,n.value=null;try{const H=await fetch("/brain/input",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:T,context:w})});if(!H.ok)throw new Error("Failed to process input");return await H.json()}catch(H){throw n.value="处理输入失败",console.error("Failed to process input:",H),H}finally{e.value=!1}}async function o(T,w={}){e.value=!0,n.value=null;try{const H=await fetch("/brain/retrieve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:T,context:w})});if(!H.ok)throw new Error("Failed to retrieve memory");return await H.json()}catch(H){throw n.value="检索记忆失败",console.error("Failed to retrieve memory:",H),H}finally{e.value=!1}}async function a(){e.value=!0,n.value=null;try{const T=await fetch("/brain/reflection",{method:"POST",headers:{"Content-Type":"application/json"}});if(!T.ok)throw new Error("Failed to trigger reflection");return await T.json()}catch(T){throw n.value="触发自我反思失败",console.error("Failed to trigger reflection:",T),T}finally{e.value=!1}}async function c(T){e.value=!0,n.value=null;try{const w=await fetch("/brain/hypotheses",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({context:T})});if(!w.ok)throw new Error("Failed to generate hypotheses");return(await w.json()).hypotheses}catch(w){throw n.value="生成假设失败",console.error("Failed to generate hypotheses:",w),w}finally{e.value=!1}}async function l(T){e.value=!0,n.value=null;try{const w=await fetch("/brain/hypotheses/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hypothesis:T})});if(!w.ok)throw new Error("Failed to test hypothesis");return await w.json()}catch(w){throw n.value="测试假设失败",console.error("Failed to test hypothesis:",w),w}finally{e.value=!1}}async function u(T){e.value=!0,n.value=null;try{const w=await fetch("/brain/evolve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({experiences:T})});if(!w.ok)throw new Error("Failed to evolve brain");return await w.json()}catch(w){throw n.value="进化AI大脑失败",console.error("Failed to evolve brain:",w),w}finally{e.value=!1}}function d(){var T;return(T=t.value)==null?void 0:T.self_awareness}function f(){var T;return(T=t.value)==null?void 0:T.active_cognition}function h(){var T;return(T=t.value)==null?void 0:T.value_system}function g(){var T;return(T=t.value)==null?void 0:T.dynamic_memory}function v(){var T;return(T=t.value)==null?void 0:T.metacognition}function p(){if(!t.value)return[];const T=[],w=new Date;for(let H=6;H>=0;H--){const X=new Date(w);X.setDate(X.getDate()-H),T.push({date:X.toISOString().split("T")[0],success_rate:.6+Math.random()*.35})}return T}function m(){var T,w,H;return((H=(w=(T=t.value)==null?void 0:T.self_awareness)==null?void 0:w.capabilities)==null?void 0:H.slice(0,6))||[]}function x(){var T,w,H;return((H=(w=(T=t.value)==null?void 0:T.self_awareness)==null?void 0:w.goals)==null?void 0:H.slice(0,4))||[]}function E(){var w,H;const T=((H=(w=t.value)==null?void 0:w.value_system)==null?void 0:H.weights)||{};return{novelty:T.novelty||.25,utility:T.utility||.25,emotional:T.emotional||.25,frequency:T.frequency||.25}}function S(T){return(T*100).toFixed(0)+"%"}function A(T){return T>.7?"high":T>.4?"medium":"low"}function P(T){return T>.7?"high":T>.4?"medium":"low"}function D(T){return T>.8?"high":T>.5?"medium":"low"}function y(T){if(!T)return"N/A";const w=T.total_score||0;return w>=.75?"高价值":w>=.5?"中等价值":"低价值"}function M(T){return{accuracy:"准确性",efficiency:"效率",creativity:"创造性",empathy:"同理心",learning:"学习能力",safety:"安全性",curiosity:"好奇心",reliability:"可靠性",novelty:"新颖性",utility:"实用性",emotional:"情感强度",frequency:"使用频率"}[T]||T}function I(T){return T>.05?"up":T<-.05?"down":"stable"}function L(T){const w=I(T);return w==="up"?"📈":w==="down"?"📉":"➡️"}function F(){n.value=null}async function k(){try{const T=await fetch("/brain/export");if(!T.ok)throw new Error("Export failed");return await T.json()}catch(T){throw n.value="导出大脑状态失败",console.error("Export failed:",T),T}}async function V(T){try{const w=await fetch("/brain/import",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T)});if(!w.ok)throw new Error("Import failed");return await w.json()}catch(w){throw n.value="导入大脑状态失败",console.error("Import failed:",w),w}}async function U(){try{const T=await fetch("/brain/compatibility");if(!T.ok)throw new Error("Compatibility check failed");return await T.json()}catch(T){throw n.value="兼容性检查失败",console.error("Compatibility check failed:",T),T}}return{brainStatus:t,isLoading:e,error:n,lastUpdate:i,fetchBrainStatus:s,processInput:r,retrieveMemory:o,triggerSelfReflection:a,generateHypotheses:c,testHypothesis:l,evolveBrain:u,getSelfAwareness:d,getCognitionStatus:f,getValueSystem:h,getDynamicMemory:g,getMetacognition:v,getLearningTrends:p,getDisplayedCapabilities:m,getTopGoals:x,getValueChart:E,formatPercent:S,getLoadClass:A,getFocusClass:P,getConfidenceClass:D,formatValueCategory:y,formatValueName:M,getTrendClass:I,getTrendIcon:L,clearError:F,exportBrain:k,importBrain:V,checkCompatibility:U}}),_C={class:"brain-status panel"},vC={class:"awareness-section"},xC={class:"awareness-grid"},yC={class:"awareness-card"},SC={class:"card-content"},MC={class:"card-value"},bC={class:"card-version"},EC={class:"awareness-card"},wC={class:"card-content"},TC={class:"capabilities-list"},AC={class:"awareness-card"},RC={class:"card-content"},CC={key:0,class:"goals-list"},PC={class:"goal-progress"},LC={class:"goal-name"},DC=["value"],IC={key:1,class:"no-goals"},NC={class:"awareness-card"},UC={class:"card-content"},FC={class:"evolution-info"},OC={class:"evolution-generation"},BC={class:"total-experiences"},kC={class:"cognition-section"},zC={class:"cognition-grid"},VC={class:"cognition-card"},HC={class:"card-content"},GC={class:"cognition-stats"},WC={class:"stat-row"},$C={class:"stat-value"},XC={class:"stat-row"},qC={class:"stat-value"},YC={class:"cognition-card"},jC={class:"card-content"},KC={class:"cognition-stats"},JC={class:"stat-row"},ZC={class:"stat-value"},QC={class:"stat-row"},e3={class:"stat-value"},t3={class:"value-section"},n3={class:"value-stats"},i3={class:"value-chart"},s3={class:"chart-item"},r3={class:"chart-item"},o3={class:"chart-item"},a3={class:"chart-item"},l3={class:"memory-section"},c3={class:"memory-stats"},u3={class:"memory-pie"},f3={class:"metacognition-section"},d3={class:"metacognition-stats"},h3={class:"meta-grid"},p3={class:"meta-item"},m3={class:"meta-item"},g3={class:"meta-item"},_3={key:0,class:"detected-biases"},v3={class:"biases-list"},x3={class:"status-footer"},y3={class:"cycle-info"},S3={class:"cycle-count"},M3={class:"last-update"},b3=["disabled"],E3=un({__name:"BrainStatus",setup(t){const e=m_(),{isLoading:n,lastUpdate:i}=Er(e),s=yt(()=>e.getValueChart()),r=yt(()=>i.value?i.value.toLocaleTimeString("zh-CN"):"从未更新"),o=yt(()=>{const l=e.getMetacognition();return(l==null?void 0:l.detected_biases)||[]});let a=null;qn(()=>{e.fetchBrainStatus(),a=window.setInterval(()=>{e.fetchBrainStatus()},5e3)}),Ef(()=>{a&&clearInterval(a)});function c(){e.fetchBrainStatus()}return(l,u)=>{var d,f,h,g,v,p,m,x,E,S,A,P,D,y,M,I,L,F,k,V,U,T,w,H,X,oe;return ie(),ue("div",_C,[u[30]||(u[30]=_("h3",null,"🧠 AI大脑状态",-1)),_("div",vC,[u[8]||(u[8]=_("h4",null,"自我意识",-1)),_("div",xC,[_("div",yC,[u[1]||(u[1]=_("div",{class:"card-icon"},"🤖",-1)),_("div",SC,[u[0]||(u[0]=_("div",{class:"card-title"},"身份认知",-1)),_("div",MC,Z(((d=be(e).getSelfAwareness())==null?void 0:d.identity)||"AI Brain"),1),_("div",bC,"v"+Z(((f=be(e).getSelfAwareness())==null?void 0:f.version)||"1.0.0"),1)])]),_("div",EC,[u[3]||(u[3]=_("div",{class:"card-icon"},"⚡",-1)),_("div",wC,[u[2]||(u[2]=_("div",{class:"card-title"},"核心能力",-1)),_("div",TC,[(ie(!0),ue(at,null,Ct(be(e).getDisplayedCapabilities(),de=>(ie(),ue("div",{key:de},Z(de),1))),128))])])]),_("div",AC,[u[5]||(u[5]=_("div",{class:"card-icon"},"🎯",-1)),_("div",RC,[u[4]||(u[4]=_("div",{class:"card-title"},"当前目标",-1)),be(e).getTopGoals().length>0?(ie(),ue("div",CC,[(ie(!0),ue(at,null,Ct(be(e).getTopGoals(),de=>(ie(),ue("div",{key:de.goal_id},[_("div",PC,[_("span",LC,Z(de.description),1),_("progress",{value:de.progress*100,max:"100"},null,8,DC)])]))),128))])):(ie(),ue("div",IC,"暂无活跃目标"))])]),_("div",NC,[u[7]||(u[7]=_("div",{class:"card-icon"},"💎",-1)),_("div",UC,[u[6]||(u[6]=_("div",{class:"card-title"},"进化状态",-1)),_("div",FC,[_("div",OC,"第 "+Z(((h=be(e).getSelfAwareness())==null?void 0:h.evolution_generation)||0)+" 代",1),_("div",BC,Z(((g=be(e).getSelfAwareness())==null?void 0:g.total_experiences)||0)+" 次经验",1)])])])])]),_("div",kC,[u[17]||(u[17]=_("h4",null,"主动认知",-1)),_("div",zC,[_("div",VC,[u[12]||(u[12]=_("div",{class:"card-icon"},"👁️",-1)),_("div",HC,[u[11]||(u[11]=_("div",{class:"card-title"},"注意力系统",-1)),_("div",GC,[_("div",WC,[u[9]||(u[9]=_("span",{class:"stat-label"},"阈值",-1)),_("span",$C,Z(((p=(v=be(e).getCognitionStatus())==null?void 0:v.attention_threshold)==null?void 0:p.toFixed(2))||"N/A"),1)]),_("div",XC,[u[10]||(u[10]=_("span",{class:"stat-label"},"待处理问题",-1)),_("span",qC,Z(((m=be(e).getCognitionStatus())==null?void 0:m.pending_questions)||0),1)])])])]),_("div",YC,[u[16]||(u[16]=_("div",{class:"card-icon"},"🔍",-1)),_("div",jC,[u[15]||(u[15]=_("div",{class:"card-title"},"好奇心引擎",-1)),_("div",KC,[_("div",JC,[u[13]||(u[13]=_("span",{class:"stat-label"},"好奇心水平",-1)),_("span",ZC,Z(be(e).formatPercent(((x=be(e).getCognitionStatus())==null?void 0:x.curiosity_level)||0)),1)]),_("div",QC,[u[14]||(u[14]=_("span",{class:"stat-label"},"待验证假设",-1)),_("span",e3,Z(((E=be(e).getCognitionStatus())==null?void 0:E.pending_hypotheses)||0),1)])])])])])]),_("div",t3,[u[22]||(u[22]=_("h4",null,"价值判断系统",-1)),_("div",n3,[_("div",i3,[_("div",s3,[_("div",{class:"chart-bar",style:kn({width:s.value.novelty*100+"%"})},null,4),u[18]||(u[18]=_("div",{class:"chart-label"},"新颖性",-1))]),_("div",r3,[_("div",{class:"chart-bar",style:kn({width:s.value.utility*100+"%"})},null,4),u[19]||(u[19]=_("div",{class:"chart-label"},"实用性",-1))]),_("div",o3,[_("div",{class:"chart-bar",style:kn({width:s.value.emotional*100+"%"})},null,4),u[20]||(u[20]=_("div",{class:"chart-label"},"情感强度",-1))]),_("div",a3,[_("div",{class:"chart-bar",style:kn({width:s.value.frequency*100+"%"})},null,4),u[21]||(u[21]=_("div",{class:"chart-label"},"使用频率",-1))])])])]),_("div",l3,[u[24]||(u[24]=_("h4",null,"动态记忆",-1)),_("div",c3,[_("div",u3,[_("div",{class:"pie-segment active",style:kn({flex:((S=be(e).getDynamicMemory())==null?void 0:S.active_memories)||0})},null,4),_("div",{class:"pie-segment consolidated",style:kn({flex:((A=be(e).getDynamicMemory())==null?void 0:A.consolidated_memories)||0})},null,4),_("div",{class:"pie-segment decaying",style:kn({flex:((P=be(e).getDynamicMemory())==null?void 0:P.decaying_memories)||0})},null,4),_("div",{class:"pie-segment forgotten",style:kn({flex:((D=be(e).getDynamicMemory())==null?void 0:D.forgotten_memories)||0})},null,4),u[23]||(u[23]=sg('<div class="pie-legend" data-v-50b29f8a><div class="legend-item active" data-v-50b29f8a></div> 活跃 <div class="legend-item consolidated" data-v-50b29f8a></div> 巩固 <div class="legend-item decaying" data-v-50b29f8a></div> 衰退 <div class="legend-item forgotten" data-v-50b29f8a></div> 遗忘 </div>',1))])])]),_("div",f3,[u[29]||(u[29]=_("h4",null,"元认知",-1)),_("div",d3,[_("div",h3,[_("div",p3,[u[25]||(u[25]=_("div",{class:"meta-label"},"认知负荷",-1)),_("div",{class:rt(["meta-value",be(e).getLoadClass(((M=(y=be(e).getMetacognition())==null?void 0:y.current_state)==null?void 0:M.cognitive_load)||0)])},Z(be(e).formatPercent(((L=(I=be(e).getMetacognition())==null?void 0:I.current_state)==null?void 0:L.cognitive_load)||0)),3)]),_("div",m3,[u[26]||(u[26]=_("div",{class:"meta-label"},"专注度",-1)),_("div",{class:rt(["meta-value",be(e).getFocusClass(((k=(F=be(e).getMetacognition())==null?void 0:F.current_state)==null?void 0:k.focus_level)||0)])},Z(be(e).formatPercent(((U=(V=be(e).getMetacognition())==null?void 0:V.current_state)==null?void 0:U.focus_level)||0)),3)]),_("div",g3,[u[27]||(u[27]=_("div",{class:"meta-label"},"自信度",-1)),_("div",{class:rt(["meta-value",be(e).getConfidenceClass(((w=(T=be(e).getMetacognition())==null?void 0:T.current_state)==null?void 0:w.confidence_level)||0)])},Z(be(e).formatPercent(((X=(H=be(e).getMetacognition())==null?void 0:H.current_state)==null?void 0:X.confidence_level)||0)),3)])]),o.value.length>0?(ie(),ue("div",_3,[u[28]||(u[28]=_("h5",null,"检测到的认知偏差",-1)),_("div",v3,[(ie(!0),ue(at,null,Ct(o.value,de=>(ie(),ue("div",{key:de,class:"bias-item"},Z(de),1))),128))])])):$e("",!0)])]),_("div",x3,[_("div",y3,[_("span",S3,"总周期: "+Z(((oe=be(e).brainStatus)==null?void 0:oe.total_cycles)||0),1),_("span",M3,"最后更新: "+Z(r.value),1)]),_("button",{onClick:c,disabled:be(n),class:"refresh-btn"},Z(be(n)?"刷新中...":"刷新状态"),9,b3)])])}}}),w3=vn(E3,[["__scopeId","data-v-50b29f8a"]]),T3={class:"brain-interaction panel"},A3={class:"interaction-section"},R3={class:"input-form"},C3={class:"form-actions"},P3=["disabled"],L3={key:0,class:"result-display"},D3={class:"result-content"},I3={class:"result-section"},N3={class:"result-value"},U3={class:"result-section"},F3={class:"result-value"},O3={key:0,class:"result-section"},B3={class:"result-value"},k3={key:1,class:"result-actions"},z3={class:"actions-tags"},V3={key:2,class:"result-questions"},H3={class:"questions-list"},G3={class:"interaction-section"},W3={class:"retrieval-form"},$3=["disabled"],X3={key:0,class:"result-display"},q3={class:"results-list"},Y3={class:"memory-content"},j3={class:"memory-meta"},K3={class:"meta-relevance"},J3={key:0,class:"meta-type"},Z3={key:1,class:"result-display empty"},Q3={class:"interaction-section"},eP={class:"reflection-actions"},tP=["disabled"],nP={key:0,class:"result-display"},iP={class:"reflection-summary"},sP={class:"summary-item"},rP={class:"summary-value"},oP={class:"summary-item"},aP={class:"summary-value"},lP={class:"summary-item"},cP={key:0,class:"summary-item"},uP={class:"recommendations-list"},fP={class:"interaction-section"},dP={class:"hypothesis-form"},hP=["disabled"],pP={key:0,class:"hypotheses-list"},mP={class:"hypothesis-content"},gP={class:"hypothesis-description"},_P={class:"hypothesis-confidence"},vP={class:"hypothesis-actions"},xP=["onClick","disabled"],yP={key:1,class:"empty-message"},SP=un({__name:"BrainInteraction",setup(t){const e=m_(),n=Ee(""),i=Ee(""),s=Ee(!1),r=Ee(!1),o=Ee(!1),a=Ee(!1),c=Ee(!1),l=Ee(null),u=Ee(null),d=Ee(null),f=Ee([]),h=Ee(!1);async function g(){if(n.value.trim()){s.value=!0,l.value=null;try{const y=await e.processInput(n.value);l.value=y}catch(y){console.error("Failed to process input:",y),alert("处理输入失败: "+y.message)}finally{s.value=!1}}}function v(){n.value="",l.value=null}async function p(){if(i.value.trim()){r.value=!0,u.value=null;try{const y=await e.retrieveMemory(i.value);u.value=y}catch(y){console.error("Failed to retrieve memory:",y),alert("检索记忆失败: "+y.message)}finally{r.value=!1}}}async function m(){o.value=!0,d.value=null;try{const y=await e.triggerSelfReflection();d.value=y,setTimeout(()=>e.fetchBrainStatus(),2e3)}catch(y){console.error("Failed to trigger reflection:",y),alert("触发自我反思失败: "+y.message)}finally{o.value=!1}}async function x(){const y="基于当前记忆系统的分析";a.value=!0,h.value=!0,f.value=[];try{const M=await e.generateHypotheses(y);f.value=M}catch(M){console.error("Failed to generate hypotheses:",M),alert("生成假设失败: "+M.message)}finally{a.value=!1}}async function E(y){c.value=!0;try{await e.testHypothesis(y),alert("假设测试已启动，请稍后查看结果"),y.status="testing"}catch(M){console.error("Failed to test hypothesis:",M),alert("测试假设失败: "+M.message)}finally{c.value=!1}}function S(y){return e.formatValueCategory(y)}function A(y){return{memory_created:"创建记忆",associations_created:"创建联想",content_filtered:"内容过滤",questions_generated:"生成问题"}[y]||y}function P(y){return{storage:"存储",thinking:"思维",skill:"技能"}[y]||y}function D(y){return{pending:"待验证",testing:"测试中",confirmed:"已确认",rejected:"已拒绝"}[y]||y}return(y,M)=>{var I,L,F,k,V,U,T,w,H,X;return ie(),ue("div",T3,[M[18]||(M[18]=_("h3",null,"🧠 AI大脑交互",-1)),_("div",A3,[M[8]||(M[8]=_("h4",null,"认知处理",-1)),_("div",R3,[Rt(_("textarea",{"onUpdate:modelValue":M[0]||(M[0]=oe=>n.value=oe),placeholder:"输入要让AI大脑处理的内容...",class:"brain-input",rows:"4"},null,512),[[Ht,n.value]]),_("div",C3,[_("button",{onClick:g,disabled:s.value},Z(s.value?"处理中...":"处理输入"),9,P3),_("button",{onClick:v,class:"secondary"},"清除")])]),l.value?(ie(),ue("div",L3,[M[7]||(M[7]=_("h5",null,"处理结果",-1)),_("div",D3,[_("div",I3,[M[2]||(M[2]=_("span",{class:"result-label"},"注意力分数:",-1)),_("span",N3,Z((I=l.value.attention_score)==null?void 0:I.toFixed(2)),1)]),_("div",U3,[M[3]||(M[3]=_("span",{class:"result-label"},"价值评估:",-1)),_("span",F3,Z(S(l.value.value_assessment)),1)]),((L=l.value.memories_created)==null?void 0:L.length)>0?(ie(),ue("div",O3,[M[4]||(M[4]=_("span",{class:"result-label"},"创建记忆:",-1)),_("span",B3,Z(l.value.memories_created.length)+" 条",1)])):$e("",!0),(F=l.value.actions_taken)!=null&&F.length?(ie(),ue("div",k3,[M[5]||(M[5]=_("span",{class:"actions-label"},"执行操作:",-1)),_("div",z3,[(ie(!0),ue(at,null,Ct(l.value.actions_taken,oe=>(ie(),ue("span",{key:oe,class:"action-tag"},Z(A(oe)),1))),128))])])):$e("",!0),l.value.questions_generated&&l.value.questions_generated.length>0?(ie(),ue("div",V3,[M[6]||(M[6]=_("span",{class:"questions-label"},"生成问题:",-1)),_("div",H3,[(ie(!0),ue(at,null,Ct(l.value.questions_generated,(oe,de)=>(ie(),ue("div",{key:de,class:"question-item"},Z(oe),1))),128))])])):$e("",!0)])])):$e("",!0)]),_("div",G3,[M[10]||(M[10]=_("h4",null,"智能检索",-1)),_("div",W3,[Rt(_("input",{"onUpdate:modelValue":M[1]||(M[1]=oe=>i.value=oe),placeholder:"输入检索查询...",class:"retrieval-input",onKeyup:Cf(p,["enter"])},null,544),[[Ht,i.value]]),_("button",{onClick:p,disabled:r.value},Z(r.value?"检索中...":"检索记忆"),9,$3)]),u.value&&u.value.memories&&u.value.memories.length>0?(ie(),ue("div",X3,[_("h5",null,"检索结果 (置信度: "+Z(((k=u.value.confidence)==null?void 0:k.toFixed(2))||"N/A")+")",1),_("div",q3,[(ie(!0),ue(at,null,Ct(u.value.memories,oe=>{var de;return ie(),ue("div",{key:oe.memory_id,class:"memory-item"},[_("div",Y3,Z(oe.content||"记忆内容..."),1),_("div",j3,[_("span",K3,"相关度: "+Z((de=oe.relevance)==null?void 0:de.toFixed(2)),1),oe.memory_type?(ie(),ue("span",J3,"类型: "+Z(P(oe.memory_type)),1)):$e("",!0)])])}),128))])])):u.value?(ie(),ue("div",Z3,[...M[9]||(M[9]=[_("h5",null,"检索结果",-1),_("p",{class:"empty-message"},"未找到相关记忆",-1)])])):$e("",!0)]),_("div",Q3,[M[16]||(M[16]=_("h4",null,"自我反思",-1)),_("div",eP,[_("button",{onClick:m,disabled:o.value},Z(o.value?"反思中...":"触发自我反思"),9,tP)]),d.value?(ie(),ue("div",nP,[M[15]||(M[15]=_("h5",null,"反思结果",-1)),_("div",iP,[_("div",sP,[M[11]||(M[11]=_("span",{class:"summary-label"},"记忆总数:",-1)),_("span",rP,Z(((V=d.value.memory_state)==null?void 0:V.total_memories)||"N/A"),1)]),_("div",oP,[M[12]||(M[12]=_("span",{class:"summary-label"},"学习效率:",-1)),_("span",aP,Z(((T=(U=d.value.learning_efficiency)==null?void 0:U.efficiency_score)==null?void 0:T.toFixed(2))||"N/A"),1)]),_("div",lP,[M[13]||(M[13]=_("span",{class:"summary-label"},"认知偏差:",-1)),_("span",{class:rt(["summary-value",{"has-biases":((w=d.value.detected_biases)==null?void 0:w.length)>0}])},Z(((H=d.value.detected_biases)==null?void 0:H.length)||0)+" 个 ",3)]),((X=d.value.recommendations)==null?void 0:X.length)>0?(ie(),ue("div",cP,[M[14]||(M[14]=_("span",{class:"summary-label"},"建议:",-1)),_("div",uP,[(ie(!0),ue(at,null,Ct(d.value.recommendations.slice(0,3),(oe,de)=>(ie(),ue("div",{key:de,class:"recommendation-item"},Z(oe),1))),128))])])):$e("",!0)])])):$e("",!0)]),_("div",fP,[M[17]||(M[17]=_("h4",null,"假设推理",-1)),_("div",dP,[_("button",{onClick:x,disabled:a.value}," 生成假设 ",8,hP),f.value.length>0?(ie(),ue("div",pP,[(ie(!0),ue(at,null,Ct(f.value,oe=>{var de,ge;return ie(),ue("div",{key:oe.hypothesis_id,class:"hypothesis-item"},[_("div",mP,[_("span",gP,Z(oe.description),1),_("span",_P," 置信度: "+Z((de=oe.confidence)==null?void 0:de.toFixed(2)),1),_("span",{class:rt(["hypothesis-status",(ge=oe.status)==null?void 0:ge.toLowerCase()])},Z(D(oe.status)),3)]),_("div",vP,[_("button",{onClick:Ge=>E(oe),size:"small",disabled:c.value}," 测试 ",8,xP)])])}),128))])):h.value?(ie(),ue("div",yP," 暂无假设 ")):$e("",!0)])])])}}}),MP=vn(SP,[["__scopeId","data-v-7a4e23dd"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $f="183",bP=0,Xh=1,EP=2,Ia=1,wP=2,Xr=3,ls=0,_n=1,Ui=2,Oi=0,dr=1,vu=2,qh=3,Yh=4,TP=5,Ts=100,AP=101,RP=102,CP=103,PP=104,LP=200,DP=201,IP=202,NP=203,xu=204,yu=205,UP=206,FP=207,OP=208,BP=209,kP=210,zP=211,VP=212,HP=213,GP=214,Su=0,Mu=1,bu=2,xr=3,Eu=4,wu=5,Tu=6,Au=7,Xf=0,WP=1,$P=2,di=0,g_=1,__=2,v_=3,x_=4,y_=5,S_=6,M_=7,b_=300,ks=301,yr=302,fc=303,dc=304,Bl=306,Ru=1e3,Fi=1001,Cu=1002,Wt=1003,XP=1004,Ko=1005,Qt=1006,hc=1007,Ps=1008,En=1009,E_=1010,w_=1011,vo=1012,qf=1013,mi=1014,oi=1015,Gi=1016,Yf=1017,jf=1018,xo=1020,T_=35902,A_=35899,R_=1021,C_=1022,Gn=1023,Wi=1026,Ls=1027,P_=1028,Kf=1029,Sr=1030,Jf=1031,Zf=1033,Na=33776,Ua=33777,Fa=33778,Oa=33779,Pu=35840,Lu=35841,Du=35842,Iu=35843,Nu=36196,Uu=37492,Fu=37496,Ou=37488,Bu=37489,ku=37490,zu=37491,Vu=37808,Hu=37809,Gu=37810,Wu=37811,$u=37812,Xu=37813,qu=37814,Yu=37815,ju=37816,Ku=37817,Ju=37818,Zu=37819,Qu=37820,ef=37821,tf=36492,nf=36494,sf=36495,rf=36283,of=36284,af=36285,lf=36286,qP=3200,L_=0,YP=1,ss="",Nn="srgb",Mr="srgb-linear",sl="linear",_t="srgb",$s=7680,jh=519,jP=512,KP=513,JP=514,Qf=515,ZP=516,QP=517,ed=518,e2=519,Kh=35044,Jh="300 es",ai=2e3,yo=2001;function t2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function rl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function n2(){const t=rl("canvas");return t.style.display="block",t}const Zh={};function Qh(...t){const e="THREE."+t.shift();console.log(e,...t)}function D_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ye(...t){t=D_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ft(...t){t=D_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ol(...t){const e=t.join(" ");e in Zh||(Zh[e]=!0,Ye(...t))}function i2(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const s2={[Su]:Mu,[bu]:Tu,[Eu]:Au,[xr]:wu,[Mu]:Su,[Tu]:bu,[Au]:Eu,[wu]:xr};class Tr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pc=Math.PI/180,cf=180/Math.PI;function Uo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function st(t,e,n){return Math.max(e,Math.min(n,t))}function r2(t,e){return(t%e+e)%e}function mc(t,e,n){return(1-n)*t+n*e}function Nr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class lt{constructor(e=0,n=0){lt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ar{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3];if(d!==v||c!==f||l!==h||u!==g){let p=c*f+l*h+u*g+d*v;p<0&&(f=-f,h=-h,g=-g,v=-v,p=-p);let m=1-a;if(p<.9995){const x=Math.acos(p),E=Math.sin(x);m=Math.sin(m*x)/E,a=Math.sin(a*x)/E,c=c*m+f*a,l=l*m+h*a,u=u*m+g*a,d=d*m+v*a}else{c=c*m+f*a,l=l*m+h*a,u=u*m+g*a,d=d*m+v*a;const x=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=x,l*=x,u*=x,d*=x}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return e[n]=a*g+u*d+c*h-l*f,e[n+1]=c*g+u*f+l*d-a*h,e[n+2]=l*g+u*h+a*f-c*d,e[n+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),f=c(i/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-n;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+o*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ep.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ep.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new $,ep=new Ar;class et{constructor(e,n,i,s,r,o,a,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,c,l)}set(e,n,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=s[0],p=s[3],m=s[6],x=s[1],E=s[4],S=s[7],A=s[2],P=s[5],D=s[8];return r[0]=o*v+a*x+c*A,r[3]=o*p+a*E+c*P,r[6]=o*m+a*S+c*D,r[1]=l*v+u*x+d*A,r[4]=l*p+u*E+d*P,r[7]=l*m+u*S+d*D,r[2]=f*v+h*x+g*A,r[5]=f*p+h*E+g*P,r[8]=f*m+h*S+g*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*r,h=l*r-o*c,g=n*d+i*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*l-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(u*n-s*c)*v,e[5]=(s*r-a*n)*v,e[6]=h*v,e[7]=(i*c-l*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_c.makeScale(e,n)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,n){return this.premultiply(_c.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new et,tp=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),np=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o2(){const t={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?sl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ol("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ol("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Mr]:{primaries:e,whitePoint:i,transfer:sl,toXYZ:tp,fromXYZ:np,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:tp,fromXYZ:np,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),t}const ct=o2();function Bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function hr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xs;class a2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xs===void 0&&(Xs=rl("canvas")),Xs.width=e.width,Xs.height=e.height;const s=Xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Xs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=rl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bi(n[i]/255)*255):n[i]=Bi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let l2=0;class td{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l2++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vc(s[o].image)):r.push(vc(s[o]))}else r=vc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?a2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let c2=0;const xc=new $;class ln extends Tr{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Fi,s=Fi,r=Qt,o=Ps,a=Gn,c=En,l=ln.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c2++}),this.uuid=Uo(),this.name="",this.source=new td(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xc).x}get height(){return this.source.getSize(xc).y}get depth(){return this.source.getSize(xc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ye(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ye(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==b_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ru:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ru:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=b_;ln.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,s=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(l+1)/2,S=(h+1)/2,A=(m+1)/2,P=(u+f)/4,D=(d+v)/4,y=(g+p)/4;return E>S&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=P/i,r=D/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=P/s,r=y/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=D/r,s=y/r),this.set(i,s,r,n),this}let x=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-v)/x,this.z=(f-u)/x,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this.w=st(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this.w=st(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class u2 extends Tr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new ln(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new td(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends u2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class I_ extends ln{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f2 extends ln{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class At{constructor(e,n,i,s,r,o,a,c,l,u,d,f,h,g,v,p){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,c,l,u,d,f,h,g,v,p)}set(e,n,i,s,r,o,a,c,l,u,d,f,h,g,v,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,v=a*d;n[0]=c*u,n[4]=-c*d,n[8]=l,n[1]=h+g*l,n[5]=f-v*l,n[9]=-a*c,n[2]=v-f*l,n[6]=g+h*l,n[10]=o*c}else if(e.order==="YXZ"){const f=c*u,h=c*d,g=l*u,v=l*d;n[0]=f+v*a,n[4]=g*a-h,n[8]=o*l,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=v+f*a,n[10]=o*c}else if(e.order==="ZXY"){const f=c*u,h=c*d,g=l*u,v=l*d;n[0]=f-v*a,n[4]=-o*d,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=v-f*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,v=a*d;n[0]=c*u,n[4]=g*l-h,n[8]=f*l+v,n[1]=c*d,n[5]=v*l+f,n[9]=h*l-g,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const f=o*c,h=o*l,g=a*c,v=a*l;n[0]=c*u,n[4]=v-f*d,n[8]=g*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=h*d+g,n[10]=f-v*d}else if(e.order==="XZY"){const f=o*c,h=o*l,g=a*c,v=a*l;n[0]=c*u,n[4]=-d,n[8]=l*u,n[1]=f*d+v,n[5]=o*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=a*u,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d2,e,h2)}lookAt(e,n,i){const s=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),ji.crossVectors(i,yn),ji.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),ji.crossVectors(i,yn)),ji.normalize(),Jo.crossVectors(yn,ji),s[0]=ji.x,s[4]=Jo.x,s[8]=yn.x,s[1]=ji.y,s[5]=Jo.y,s[9]=yn.y,s[2]=ji.z,s[6]=Jo.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],p=i[10],m=i[14],x=i[3],E=i[7],S=i[11],A=i[15],P=s[0],D=s[4],y=s[8],M=s[12],I=s[1],L=s[5],F=s[9],k=s[13],V=s[2],U=s[6],T=s[10],w=s[14],H=s[3],X=s[7],oe=s[11],de=s[15];return r[0]=o*P+a*I+c*V+l*H,r[4]=o*D+a*L+c*U+l*X,r[8]=o*y+a*F+c*T+l*oe,r[12]=o*M+a*k+c*w+l*de,r[1]=u*P+d*I+f*V+h*H,r[5]=u*D+d*L+f*U+h*X,r[9]=u*y+d*F+f*T+h*oe,r[13]=u*M+d*k+f*w+h*de,r[2]=g*P+v*I+p*V+m*H,r[6]=g*D+v*L+p*U+m*X,r[10]=g*y+v*F+p*T+m*oe,r[14]=g*M+v*k+p*w+m*de,r[3]=x*P+E*I+S*V+A*H,r[7]=x*D+E*L+S*U+A*X,r[11]=x*y+E*F+S*T+A*oe,r[15]=x*M+E*k+S*w+A*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],p=e[11],m=e[15],x=c*h-l*f,E=a*h-l*d,S=a*f-c*d,A=o*h-l*u,P=o*f-c*u,D=o*d-a*u;return n*(v*x-p*E+m*S)-i*(g*x-p*A+m*P)+s*(g*E-v*A+m*D)-r*(g*S-v*P+p*D)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],p=e[14],m=e[15],x=n*a-i*o,E=n*c-s*o,S=n*l-r*o,A=i*c-s*a,P=i*l-r*a,D=s*l-r*c,y=u*v-d*g,M=u*p-f*g,I=u*m-h*g,L=d*p-f*v,F=d*m-h*v,k=f*m-h*p,V=x*k-E*F+S*L+A*I-P*M+D*y;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/V;return e[0]=(a*k-c*F+l*L)*U,e[1]=(s*F-i*k-r*L)*U,e[2]=(v*D-p*P+m*A)*U,e[3]=(f*P-d*D-h*A)*U,e[4]=(c*I-o*k-l*M)*U,e[5]=(n*k-s*I+r*M)*U,e[6]=(p*S-g*D-m*E)*U,e[7]=(u*D-f*S+h*E)*U,e[8]=(o*F-a*I+l*y)*U,e[9]=(i*I-n*F-r*y)*U,e[10]=(g*P-v*S+m*x)*U,e[11]=(d*S-u*P-h*x)*U,e[12]=(a*M-o*L-c*y)*U,e[13]=(n*L-i*M+s*y)*U,e[14]=(v*E-g*A-p*x)*U,e[15]=(u*A-d*E+f*x)*U,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,u=o+o,d=a+a,f=r*l,h=r*u,g=r*d,v=o*u,p=o*d,m=a*d,x=c*l,E=c*u,S=c*d,A=i.x,P=i.y,D=i.z;return s[0]=(1-(v+m))*A,s[1]=(h+S)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(h-S)*P,s[5]=(1-(f+m))*P,s[6]=(p+x)*P,s[7]=0,s[8]=(g+E)*D,s[9]=(p-x)*D,s[10]=(1-(f+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=qs.set(s[0],s[1],s[2]).length();const a=qs.set(s[4],s[5],s[6]).length(),c=qs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Fn.copy(this);const l=1/o,u=1/a,d=1/c;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,n.setFromRotationMatrix(Fn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,n,i,s,r,o,a=ai,c=!1){const l=this.elements,u=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===ai)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===yo)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=ai,c=!1){const l=this.elements,u=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),h=-(i+s)/(i-s);let g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===ai)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===yo)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qs=new $,Fn=new At,d2=new $(0,0,0),h2=new $(1,1,1),ji=new $,Jo=new $,yn=new $,ip=new At,sp=new Ar;class gi{constructor(e=0,n=0,i=0,s=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ip,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sp.setFromEuler(this),this.setFromQuaternion(sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class N_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p2=0;const rp=new $,Ys=new Ar,wi=new At,Zo=new $,Ur=new $,m2=new $,g2=new Ar,op=new $(1,0,0),ap=new $(0,1,0),lp=new $(0,0,1),cp={type:"added"},_2={type:"removed"},js={type:"childadded",child:null},yc={type:"childremoved",child:null};class en extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p2++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new $,n=new gi,i=new Ar,s=new $(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new et}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(op,e)}rotateY(e){return this.rotateOnAxis(ap,e)}rotateZ(e){return this.rotateOnAxis(lp,e)}translateOnAxis(e,n){return rp.copy(e).applyQuaternion(this.quaternion),this.position.add(rp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(op,e)}translateY(e){return this.translateOnAxis(ap,e)}translateZ(e){return this.translateOnAxis(lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Zo.copy(e):Zo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Ur,Zo,this.up):wi.lookAt(Zo,Ur,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(wi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cp),js.child=e,this.dispatchEvent(js),js.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_2),yc.child=e,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cp),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,m2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,g2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}en.DEFAULT_UP=new $(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qr extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v2={type:"move"};class Sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(v2)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const U_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Mc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ct.workingColorSpace){if(e=r2(e,1),n=st(n,0,1),i=st(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Mc(o,r,e+1/3),this.g=Mc(o,r,e),this.b=Mc(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,n=Nn){function i(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=U_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return ct.workingToColorSpace(Yt.copy(this),e),Math.round(st(Yt.r*255,0,255))*65536+Math.round(st(Yt.g*255,0,255))*256+Math.round(st(Yt.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.workingToColorSpace(Yt.copy(this),n);const i=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.workingToColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Nn){ct.workingToColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,s=Yt.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+n,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ki),e.getHSL(Qo);const i=mc(Ki.h,Qo.h,n),s=mc(Ki.s,Qo.s,n),r=mc(Ki.l,Qo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new it;it.NAMES=U_;class nd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(e),this.density=n}clone(){return new nd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class x2 extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const On=new $,Ti=new $,bc=new $,Ai=new $,Ks=new $,Js=new $,up=new $,Ec=new $,wc=new $,Tc=new $,Ac=new Lt,Rc=new Lt,Cc=new Lt;class Vn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),On.subVectors(e,n),s.cross(On);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){On.subVectors(s,n),Ti.subVectors(i,n),bc.subVectors(e,n);const o=On.dot(On),a=On.dot(Ti),c=On.dot(bc),l=Ti.dot(Ti),u=Ti.dot(bc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-h-g,g,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,s,r,o,a,c){return this.getBarycoord(e,n,i,s,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ai.x),c.addScaledVector(o,Ai.y),c.addScaledVector(a,Ai.z),c)}static getInterpolatedAttribute(e,n,i,s,r,o){return Ac.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),Ac.fromBufferAttribute(e,n),Rc.fromBufferAttribute(e,i),Cc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ac,r.x),o.addScaledVector(Rc,r.y),o.addScaledVector(Cc,r.z),o}static isFrontFacing(e,n,i,s){return On.subVectors(i,n),Ti.subVectors(e,n),On.cross(Ti).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),On.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Ks.subVectors(s,i),Js.subVectors(r,i),Ec.subVectors(e,i);const c=Ks.dot(Ec),l=Js.dot(Ec);if(c<=0&&l<=0)return n.copy(i);wc.subVectors(e,s);const u=Ks.dot(wc),d=Js.dot(wc);if(u>=0&&d<=u)return n.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(Ks,o);Tc.subVectors(e,r);const h=Ks.dot(Tc),g=Js.dot(Tc);if(g>=0&&h<=g)return n.copy(r);const v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),n.copy(i).addScaledVector(Js,a);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return up.subVectors(r,s),a=(d-u)/(d-u+(h-g)),n.copy(s).addScaledVector(up,a);const m=1/(p+v+f);return o=v*m,a=f*m,n.copy(i).addScaledVector(Ks,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fo{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),ta.subVectors(this.max,Fr),Zs.subVectors(e.a,Fr),Qs.subVectors(e.b,Fr),er.subVectors(e.c,Fr),Ji.subVectors(Qs,Zs),Zi.subVectors(er,Qs),gs.subVectors(Zs,er);let n=[0,-Ji.z,Ji.y,0,-Zi.z,Zi.y,0,-gs.z,gs.y,Ji.z,0,-Ji.x,Zi.z,0,-Zi.x,gs.z,0,-gs.x,-Ji.y,Ji.x,0,-Zi.y,Zi.x,0,-gs.y,gs.x,0];return!Pc(n,Zs,Qs,er,ta)||(n=[1,0,0,0,1,0,0,0,1],!Pc(n,Zs,Qs,er,ta))?!1:(na.crossVectors(Ji,Zi),n=[na.x,na.y,na.z],Pc(n,Zs,Qs,er,ta))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new $,new $,new $,new $,new $,new $,new $,new $],Bn=new $,ea=new Fo,Zs=new $,Qs=new $,er=new $,Ji=new $,Zi=new $,gs=new $,Fr=new $,ta=new $,na=new $,_s=new $;function Pc(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){_s.fromArray(t,r);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),c=e.dot(_s),l=n.dot(_s),u=i.dot(_s);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ft=new $,ia=new lt;let y2=0;class Cn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Kh,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ia.fromBufferAttribute(this,n),ia.applyMatrix3(e),this.setXY(n,ia.x,ia.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Nr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Nr(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Nr(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Nr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Nr(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kh&&(e.usage=this.usage),e}}class F_ extends Cn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class O_ extends Cn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends Cn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const S2=new Fo,Or=new $,Lc=new $;class Oo{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):S2.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);const n=Or.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Or,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Lc)),this.expandByPoint(Or.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let M2=0;const In=new At,Dc=new en,tr=new $,Sn=new Fo,Br=new Fo,Vt=new $;class cn extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M2++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t2(e)?O_:F_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(Sn.min,Br.min),Sn.expandByPoint(Vt),Vt.addVectors(Sn.max,Br.max),Sn.expandByPoint(Vt)):(Sn.expandByPoint(Br.min),Sn.expandByPoint(Br.max))}Sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Vt.fromBufferAttribute(a,l),c&&(tr.fromBufferAttribute(e,l),Vt.add(tr)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let y=0;y<i.count;y++)a[y]=new $,c[y]=new $;const l=new $,u=new $,d=new $,f=new lt,h=new lt,g=new lt,v=new $,p=new $;function m(y,M,I){l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,I),f.fromBufferAttribute(r,y),h.fromBufferAttribute(r,M),g.fromBufferAttribute(r,I),u.sub(l),d.sub(l),h.sub(f),g.sub(f);const L=1/(h.x*g.y-g.x*h.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(L),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(L),a[y].add(v),a[M].add(v),a[I].add(v),c[y].add(p),c[M].add(p),c[I].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,M=x.length;y<M;++y){const I=x[y],L=I.start,F=I.count;for(let k=L,V=L+F;k<V;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new $,S=new $,A=new $,P=new $;function D(y){A.fromBufferAttribute(s,y),P.copy(A);const M=a[y];E.copy(M),E.sub(A.multiplyScalar(A.dot(M))).normalize(),S.crossVectors(P,M);const L=S.dot(c[y])<0?-1:1;o.setXYZW(y,E.x,E.y,E.z,L)}for(let y=0,M=x.length;y<M;++y){const I=x[y],L=I.start,F=I.count;for(let k=L,V=L+F;k<V;k+=3)D(e.getX(k+0)),D(e.getX(k+1)),D(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new $,r=new $,o=new $,a=new $,c=new $,l=new $,u=new $,d=new $;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let h=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let m=0;m<u;m++)f[g++]=l[h++]}return new Cn(f,u,d)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);n.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=e(f,i);c.push(h)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(n))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let b2=0;class zs extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b2++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=dr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xu,this.blendDst=yu,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ye(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ye(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xu&&(i.blendSrc=this.blendSrc),this.blendDst!==yu&&(i.blendDst=this.blendDst),this.blendEquation!==Ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new $,Ic=new $,sa=new $,Qi=new $,Nc=new $,ra=new $,Uc=new $;class id{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Ic.copy(e).add(n).multiplyScalar(.5),sa.copy(n).sub(e).normalize(),Qi.copy(this.origin).sub(Ic);const r=e.distanceTo(n)*.5,o=-this.direction.dot(sa),a=Qi.dot(this.direction),c=-Qi.dot(sa),l=Qi.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ic).addScaledVector(sa,f),h}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,s,r){Nc.subVectors(n,e),ra.subVectors(i,e),Uc.crossVectors(Nc,ra);let o=this.direction.dot(Uc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const c=a*this.direction.dot(ra.crossVectors(Qi,ra));if(c<0)return null;const l=a*this.direction.dot(Nc.cross(Qi));if(l<0||c+l>o)return null;const u=-a*Qi.dot(Uc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sd extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fp=new At,vs=new id,oa=new Oo,dp=new $,aa=new $,la=new $,ca=new $,Fc=new $,ua=new $,hp=new $,fa=new $;class An extends en{constructor(e=new cn,n=new sd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ua.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Fc.fromBufferAttribute(d,e),o?ua.addScaledVector(Fc,u):ua.addScaledVector(Fc.sub(n),u))}n.add(ua)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(oa.containsPoint(vs.origin)===!1&&(vs.intersectSphere(oa,dp)===null||vs.origin.distanceToSquared(dp)>(e.far-e.near)**2))&&(fp.copy(r).invert(),vs.copy(e.ray).applyMatrix4(fp),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vs)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],x=Math.max(p.start,h.start),E=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let S=x,A=E;S<A;S+=3){const P=a.getX(S),D=a.getX(S+1),y=a.getX(S+2);s=da(this,m,e,i,l,u,d,P,D,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let p=g,m=v;p<m;p+=3){const x=a.getX(p),E=a.getX(p+1),S=a.getX(p+2);s=da(this,o,e,i,l,u,d,x,E,S),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],x=Math.max(p.start,h.start),E=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let S=x,A=E;S<A;S+=3){const P=S,D=S+1,y=S+2;s=da(this,m,e,i,l,u,d,P,D,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let p=g,m=v;p<m;p+=3){const x=p,E=p+1,S=p+2;s=da(this,o,e,i,l,u,d,x,E,S),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}}}function E2(t,e,n,i,s,r,o,a){let c;if(e.side===_n?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ls,a),c===null)return null;fa.copy(a),fa.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(fa);return l<n.near||l>n.far?null:{distance:l,point:fa.clone(),object:t}}function da(t,e,n,i,s,r,o,a,c,l){t.getVertexPosition(a,aa),t.getVertexPosition(c,la),t.getVertexPosition(l,ca);const u=E2(t,e,n,i,aa,la,ca,hp);if(u){const d=new $;Vn.getBarycoord(hp,aa,la,ca,d),s&&(u.uv=Vn.getInterpolatedAttribute(s,a,c,l,d,new lt)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,a,c,l,d,new lt)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,c,l,d,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new $,materialIndex:0};Vn.getNormal(aa,la,ca,f.normal),u.face=f,u.barycoord=d}return u}class w2 extends ln{constructor(e=null,n=1,i=1,s,r,o,a,c,l=Wt,u=Wt,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oc=new $,T2=new $,A2=new et;class bs{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Oc.subVectors(i,n).cross(T2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Oc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||A2.getNormalMatrix(e),s=this.coplanarPoint(Oc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Oo,R2=new lt(.5,.5),ha=new $;class rd{constructor(e=new bs,n=new bs,i=new bs,s=new bs,r=new bs,o=new bs){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],h=r[7],g=r[8],v=r[9],p=r[10],m=r[11],x=r[12],E=r[13],S=r[14],A=r[15];if(s[0].setComponents(l-o,h-u,m-g,A-x).normalize(),s[1].setComponents(l+o,h+u,m+g,A+x).normalize(),s[2].setComponents(l+a,h+d,m+v,A+E).normalize(),s[3].setComponents(l-a,h-d,m-v,A-E).normalize(),i)s[4].setComponents(c,f,p,S).normalize(),s[5].setComponents(l-c,h-f,m-p,A-S).normalize();else if(s[4].setComponents(l-c,h-f,m-p,A-S).normalize(),n===ai)s[5].setComponents(l+c,h+f,m+p,A+S).normalize();else if(n===yo)s[5].setComponents(c,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const n=R2.distanceTo(e.center);return xs.radius=.7071067811865476+n,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(ha.x=s.normal.x>0?e.max.x:e.min.x,ha.y=s.normal.y>0?e.max.y:e.min.y,ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class B_ extends zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const al=new $,ll=new $,pp=new At,kr=new id,pa=new Oo,Bc=new $,mp=new $;class C2 extends en{constructor(e=new cn,n=new B_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)al.fromBufferAttribute(n,s-1),ll.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=al.distanceTo(ll);e.setAttribute("lineDistance",new $t(i,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;pp.copy(s).invert(),kr.copy(e.ray).applyMatrix4(pp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=h,p=g-1;v<p;v+=l){const m=u.getX(v),x=u.getX(v+1),E=ma(this,e,kr,c,m,x,v);E&&n.push(E)}if(this.isLineLoop){const v=u.getX(g-1),p=u.getX(h),m=ma(this,e,kr,c,v,p,g-1);m&&n.push(m)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=h,p=g-1;v<p;v+=l){const m=ma(this,e,kr,c,v,v+1,v);m&&n.push(m)}if(this.isLineLoop){const v=ma(this,e,kr,c,g-1,h,g-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ma(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(al.fromBufferAttribute(a,s),ll.fromBufferAttribute(a,r),n.distanceSqToSegment(al,ll,Bc,mp)>i)return;Bc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Bc);if(!(l<e.near||l>e.far))return{distance:l,point:mp.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const gp=new $,_p=new $;class P2 extends C2{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)gp.fromBufferAttribute(n,s),_p.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+gp.distanceTo(_p);e.setAttribute("lineDistance",new $t(i,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class k_ extends zs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vp=new At,uf=new id,ga=new Oo,_a=new $;class L2 extends en{constructor(e=new cn,n=new k_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;vp.copy(s).invert(),uf.copy(e.ray).applyMatrix4(vp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,v=h;g<v;g++){const p=l.getX(g);_a.fromBufferAttribute(d,p),xp(_a,p,c,s,e,n,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,v=h;g<v;g++)_a.fromBufferAttribute(d,g),xp(_a,g,c,s,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xp(t,e,n,i,s,r,o){const a=uf.distanceSqToPoint(t);if(a<n){const c=new $;uf.closestPointToPoint(t,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class z_ extends ln{constructor(e=[],n=ks,i,s,r,o,a,c,l,u){super(e,n,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class So extends ln{constructor(e,n,i=mi,s,r,o,a=Wt,c=Wt,l,u=Wi,d=1){if(u!==Wi&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new td(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class D2 extends So{constructor(e,n=mi,i=ks,s,r,o=Wt,a=Wt,c,l=Wi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class V_ extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bo extends cn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(d,2));function g(v,p,m,x,E,S,A,P,D,y,M){const I=S/D,L=A/y,F=S/2,k=A/2,V=P/2,U=D+1,T=y+1;let w=0,H=0;const X=new $;for(let oe=0;oe<T;oe++){const de=oe*L-k;for(let ge=0;ge<U;ge++){const Ge=ge*I-F;X[v]=Ge*x,X[p]=de*E,X[m]=V,l.push(X.x,X.y,X.z),X[v]=0,X[p]=0,X[m]=P>0?1:-1,u.push(X.x,X.y,X.z),d.push(ge/D),d.push(1-oe/y),w+=1}}for(let oe=0;oe<y;oe++)for(let de=0;de<D;de++){const ge=f+de+U*oe,Ge=f+de+U*(oe+1),dt=f+(de+1)+U*(oe+1),pt=f+(de+1)+U*oe;c.push(ge,Ge,pt),c.push(Ge,dt,pt),H+=6}a.addGroup(h,H,M),h+=H,f+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class od extends cn{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const E=new $,S=new $,A=new $;for(let P=0;P<n.length;P+=3)h(n[P+0],E),h(n[P+1],S),h(n[P+2],A),c(E,S,A,x)}function c(x,E,S,A){const P=A+1,D=[];for(let y=0;y<=P;y++){D[y]=[];const M=x.clone().lerp(S,y/P),I=E.clone().lerp(S,y/P),L=P-y;for(let F=0;F<=L;F++)F===0&&y===P?D[y][F]=M:D[y][F]=M.clone().lerp(I,F/L)}for(let y=0;y<P;y++)for(let M=0;M<2*(P-y)-1;M++){const I=Math.floor(M/2);M%2===0?(f(D[y][I+1]),f(D[y+1][I]),f(D[y][I])):(f(D[y][I+1]),f(D[y+1][I+1]),f(D[y+1][I]))}}function l(x){const E=new $;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(x),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function u(){const x=new $;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];const S=p(x)/2/Math.PI+.5,A=m(x)/Math.PI+.5;o.push(S,1-A)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){const E=o[x+0],S=o[x+2],A=o[x+4],P=Math.max(E,S,A),D=Math.min(E,S,A);P>.9&&D<.1&&(E<.2&&(o[x+0]+=1),S<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function h(x,E){const S=x*3;E.x=e[S+0],E.y=e[S+1],E.z=e[S+2]}function g(){const x=new $,E=new $,S=new $,A=new $,P=new lt,D=new lt,y=new lt;for(let M=0,I=0;M<r.length;M+=9,I+=6){x.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),S.set(r[M+6],r[M+7],r[M+8]),P.set(o[I+0],o[I+1]),D.set(o[I+2],o[I+3]),y.set(o[I+4],o[I+5]),A.copy(x).add(E).add(S).divideScalar(3);const L=p(A);v(P,I+0,x,L),v(D,I+2,E,L),v(y,I+4,S,L)}}function v(x,E,S,A){A<0&&x.x===1&&(o[E]=x.x-1),S.x===0&&S.z===0&&(o[E]=A/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new od(e.vertices,e.indices,e.radius,e.detail)}}class cl extends od{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new cl(e.radius,e.detail)}}class kl extends cn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,f=n/c,h=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const x=m*f-o;for(let E=0;E<l;E++){const S=E*d-r;g.push(S,-x,0),v.push(0,0,1),p.push(E/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){const E=x+l*m,S=x+l*(m+1),A=x+1+l*(m+1),P=x+1+l*m;h.push(E,S,P),h.push(S,A,P)}this.setIndex(h),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ul extends cn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new $,f=new $,h=[],g=[],v=[],p=[];for(let m=0;m<=i;m++){const x=[],E=m/i;let S=0;m===0&&o===0?S=.5/n:m===i&&c===Math.PI&&(S=-.5/n);for(let A=0;A<=n;A++){const P=A/n;d.x=-e*Math.cos(s+P*r)*Math.sin(o+E*a),d.y=e*Math.cos(o+E*a),d.z=e*Math.sin(s+P*r)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(P+S,1-E),x.push(l++)}u.push(x)}for(let m=0;m<i;m++)for(let x=0;x<n;x++){const E=u[m][x+1],S=u[m][x],A=u[m+1][x],P=u[m+1][x+1];(m!==0||o>0)&&h.push(E,S,P),(m!==i-1||c<Math.PI)&&h.push(S,A,P)}this.setIndex(h),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function br(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=br(t[n]);for(const s in i)e[s]=i[s]}return e}function I2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function H_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const N2={clone:br,merge:nn};var U2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U2,this.fragmentShader=F2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=I2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class O2 extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kc extends zs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new it(16777215),this.specular=new it(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=L_,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Xf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class B2 extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k2 extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class G_ extends en{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const zc=new At,yp=new $,Sp=new $;class z2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rd,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;yp.setFromMatrixPosition(e.matrixWorld),n.position.copy(yp),Sp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Sp),n.updateMatrixWorld(),zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===yo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const va=new $,xa=new Ar,Zn=new $;class W_ extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(va,xa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,xa,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(va,xa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,xa,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const es=new $,Mp=new lt,bp=new lt;class bn extends W_{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=cf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cf*2*Math.atan(Math.tan(pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,n){return this.getViewBounds(e,Mp,bp),n.subVectors(bp,Mp)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class V2 extends z2{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}}class ya extends G_{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new V2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class $_ extends W_{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class H2 extends G_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const nr=-90,ir=1;class G2 extends en{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(nr,ir,e,n);s.layers=this.layers,this.add(s);const r=new bn(nr,ir,e,n);r.layers=this.layers,this.add(r);const o=new bn(nr,ir,e,n);o.layers=this.layers,this.add(o);const a=new bn(nr,ir,e,n);a.layers=this.layers,this.add(a);const c=new bn(nr,ir,e,n);c.layers=this.layers,this.add(c);const l=new bn(nr,ir,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,c]=n;for(const l of n)this.remove(l);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class W2 extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ep(t,e,n,i){const s=$2(i);switch(n){case R_:return t*e;case P_:return t*e/s.components*s.byteLength;case Kf:return t*e/s.components*s.byteLength;case Sr:return t*e*2/s.components*s.byteLength;case Jf:return t*e*2/s.components*s.byteLength;case C_:return t*e*3/s.components*s.byteLength;case Gn:return t*e*4/s.components*s.byteLength;case Zf:return t*e*4/s.components*s.byteLength;case Na:case Ua:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fa:case Oa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lu:case Iu:return Math.max(t,16)*Math.max(e,8)/4;case Pu:case Du:return Math.max(t,8)*Math.max(e,8)/2;case Nu:case Uu:case Ou:case Bu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fu:case ku:case zu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case $u:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case qu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ju:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ku:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ju:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Zu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ef:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case tf:case nf:case sf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rf:case of:return Math.ceil(t/4)*Math.ceil(e/4)*8;case af:case lf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $2(t){switch(t){case En:case E_:return{byteLength:1,components:1};case vo:case w_:case Gi:return{byteLength:2,components:1};case Yf:case jf:return{byteLength:2,components:4};case mi:case qf:case oi:return{byteLength:4,components:1};case T_:case A_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$f}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$f);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X_(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function X2(t){const e=new WeakMap;function n(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=t.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=t.SHORT;else if(l instanceof Uint32Array)h=t.UNSIGNED_INT;else if(l instanceof Int32Array)h=t.INT;else if(l instanceof Int8Array)h=t.BYTE;else if(l instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(t.bindBuffer(l,a),d.length===0)t.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const v=d[h];t.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var q2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y2=`#ifdef USE_ALPHAHASH
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
#endif`,j2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q2=`#ifdef USE_AOMAP
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
#endif`,eL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tL=`#ifdef USE_BATCHING
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
#endif`,nL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rL=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oL=`#ifdef USE_IRIDESCENCE
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
#endif`,aL=`#ifdef USE_BUMPMAP
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
#endif`,lL=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gL=`#define PI 3.141592653589793
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
} // validated`,_L=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vL=`vec3 transformedNormal = objectNormal;
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
#endif`,xL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ML=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bL="gl_FragColor = linearToOutputTexel( gl_FragColor );",EL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wL=`#ifdef USE_ENVMAP
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
#endif`,TL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AL=`#ifdef USE_ENVMAP
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
#endif`,RL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CL=`#ifdef USE_ENVMAP
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
#endif`,PL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NL=`#ifdef USE_GRADIENTMAP
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
}`,UL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BL=`uniform bool receiveShadow;
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
#endif`,kL=`#ifdef USE_ENVMAP
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
#endif`,zL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WL=`PhysicalMaterial material;
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
#endif`,$L=`uniform sampler2D dfgLUT;
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
}`,XL=`
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
#endif`,qL=`#if defined( RE_IndirectDiffuse )
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
#endif`,YL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nD=`#if defined( USE_POINTS_UV )
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
#endif`,iD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lD=`#ifdef USE_MORPHTARGETS
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
#endif`,cD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fD=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mD=`#ifdef USE_NORMALMAP
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
#endif`,gD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_D=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SD=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,MD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ED=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LD=`float getShadowMask() {
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
}`,DD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ID=`#ifdef USE_SKINNING
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
#endif`,ND=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UD=`#ifdef USE_SKINNING
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
#endif`,FD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zD=`#ifdef USE_TRANSMISSION
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
#endif`,VD=`#ifdef USE_TRANSMISSION
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
#endif`,HD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$D=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qD=`uniform sampler2D t2D;
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
}`,YD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZD=`#include <common>
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
}`,QD=`#if DEPTH_PACKING == 3200
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
}`,eI=`#define DISTANCE
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
}`,tI=`#define DISTANCE
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
}`,nI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sI=`uniform float scale;
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
}`,rI=`uniform vec3 diffuse;
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
}`,oI=`#include <common>
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
}`,aI=`uniform vec3 diffuse;
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
}`,lI=`#define LAMBERT
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
}`,cI=`#define LAMBERT
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
}`,uI=`#define MATCAP
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
}`,fI=`#define MATCAP
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
}`,dI=`#define NORMAL
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
}`,hI=`#define NORMAL
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
}`,pI=`#define PHONG
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
}`,mI=`#define PHONG
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
}`,gI=`#define STANDARD
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
}`,_I=`#define STANDARD
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
}`,vI=`#define TOON
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
}`,xI=`#define TOON
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
}`,yI=`uniform float size;
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
}`,SI=`uniform vec3 diffuse;
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
}`,MI=`#include <common>
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
}`,bI=`uniform vec3 color;
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
}`,EI=`uniform float rotation;
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
}`,wI=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:q2,alphahash_pars_fragment:Y2,alphamap_fragment:j2,alphamap_pars_fragment:K2,alphatest_fragment:J2,alphatest_pars_fragment:Z2,aomap_fragment:Q2,aomap_pars_fragment:eL,batching_pars_vertex:tL,batching_vertex:nL,begin_vertex:iL,beginnormal_vertex:sL,bsdfs:rL,iridescence_fragment:oL,bumpmap_pars_fragment:aL,clipping_planes_fragment:lL,clipping_planes_pars_fragment:cL,clipping_planes_pars_vertex:uL,clipping_planes_vertex:fL,color_fragment:dL,color_pars_fragment:hL,color_pars_vertex:pL,color_vertex:mL,common:gL,cube_uv_reflection_fragment:_L,defaultnormal_vertex:vL,displacementmap_pars_vertex:xL,displacementmap_vertex:yL,emissivemap_fragment:SL,emissivemap_pars_fragment:ML,colorspace_fragment:bL,colorspace_pars_fragment:EL,envmap_fragment:wL,envmap_common_pars_fragment:TL,envmap_pars_fragment:AL,envmap_pars_vertex:RL,envmap_physical_pars_fragment:kL,envmap_vertex:CL,fog_vertex:PL,fog_pars_vertex:LL,fog_fragment:DL,fog_pars_fragment:IL,gradientmap_pars_fragment:NL,lightmap_pars_fragment:UL,lights_lambert_fragment:FL,lights_lambert_pars_fragment:OL,lights_pars_begin:BL,lights_toon_fragment:zL,lights_toon_pars_fragment:VL,lights_phong_fragment:HL,lights_phong_pars_fragment:GL,lights_physical_fragment:WL,lights_physical_pars_fragment:$L,lights_fragment_begin:XL,lights_fragment_maps:qL,lights_fragment_end:YL,logdepthbuf_fragment:jL,logdepthbuf_pars_fragment:KL,logdepthbuf_pars_vertex:JL,logdepthbuf_vertex:ZL,map_fragment:QL,map_pars_fragment:eD,map_particle_fragment:tD,map_particle_pars_fragment:nD,metalnessmap_fragment:iD,metalnessmap_pars_fragment:sD,morphinstance_vertex:rD,morphcolor_vertex:oD,morphnormal_vertex:aD,morphtarget_pars_vertex:lD,morphtarget_vertex:cD,normal_fragment_begin:uD,normal_fragment_maps:fD,normal_pars_fragment:dD,normal_pars_vertex:hD,normal_vertex:pD,normalmap_pars_fragment:mD,clearcoat_normal_fragment_begin:gD,clearcoat_normal_fragment_maps:_D,clearcoat_pars_fragment:vD,iridescence_pars_fragment:xD,opaque_fragment:yD,packing:SD,premultiplied_alpha_fragment:MD,project_vertex:bD,dithering_fragment:ED,dithering_pars_fragment:wD,roughnessmap_fragment:TD,roughnessmap_pars_fragment:AD,shadowmap_pars_fragment:RD,shadowmap_pars_vertex:CD,shadowmap_vertex:PD,shadowmask_pars_fragment:LD,skinbase_vertex:DD,skinning_pars_vertex:ID,skinning_vertex:ND,skinnormal_vertex:UD,specularmap_fragment:FD,specularmap_pars_fragment:OD,tonemapping_fragment:BD,tonemapping_pars_fragment:kD,transmission_fragment:zD,transmission_pars_fragment:VD,uv_pars_fragment:HD,uv_pars_vertex:GD,uv_vertex:WD,worldpos_vertex:$D,background_vert:XD,background_frag:qD,backgroundCube_vert:YD,backgroundCube_frag:jD,cube_vert:KD,cube_frag:JD,depth_vert:ZD,depth_frag:QD,distance_vert:eI,distance_frag:tI,equirect_vert:nI,equirect_frag:iI,linedashed_vert:sI,linedashed_frag:rI,meshbasic_vert:oI,meshbasic_frag:aI,meshlambert_vert:lI,meshlambert_frag:cI,meshmatcap_vert:uI,meshmatcap_frag:fI,meshnormal_vert:dI,meshnormal_frag:hI,meshphong_vert:pI,meshphong_frag:mI,meshphysical_vert:gI,meshphysical_frag:_I,meshtoon_vert:vI,meshtoon_frag:xI,points_vert:yI,points_frag:SI,shadow_vert:MI,shadow_frag:bI,sprite_vert:EI,sprite_frag:wI},Re={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},si={basic:{uniforms:nn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:nn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:nn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:nn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:nn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new it(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:nn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:nn([Re.points,Re.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:nn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:nn([Re.common,Re.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:nn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:nn([Re.sprite,Re.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:nn([Re.common,Re.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:nn([Re.lights,Re.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};si.physical={uniforms:nn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Sa={r:0,b:0,g:0},ys=new gi,TI=new At;function AI(t,e,n,i,s,r){const o=new it(0);let a=s===!0?0:1,c,l,u=null,d=0,f=null;function h(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const S=x.backgroundBlurriness>0;E=e.get(E,S)}return E}function g(x){let E=!1;const S=h(x);S===null?p(o,a):S&&S.isColor&&(p(S,1),E=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(x,E){const S=h(E);S&&(S.isCubeTexture||S.mapping===Bl)?(l===void 0&&(l=new An(new Bo(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:br(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),ys.copy(E.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(TI.makeRotationFromEuler(ys)),l.material.toneMapped=ct.getTransfer(S.colorSpace)!==_t,(u!==S||d!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new An(new kl(2,2),new _i({name:"BackgroundMaterial",uniforms:br(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ct.getTransfer(S.colorSpace)!==_t,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,E){x.getRGB(Sa,H_(t)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,E,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,E=1){o.set(x),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:g,addToRenderList:v,dispose:m}}function RI(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(L,F,k,V,U){let T=!1;const w=d(L,V,k,F);r!==w&&(r=w,l(r.object)),T=h(L,V,k,U),T&&g(L,V,k,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(T||o)&&(o=!1,S(L,F,k,V),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return t.createVertexArray()}function l(L){return t.bindVertexArray(L)}function u(L){return t.deleteVertexArray(L)}function d(L,F,k,V){const U=V.wireframe===!0;let T=i[F.id];T===void 0&&(T={},i[F.id]=T);const w=L.isInstancedMesh===!0?L.id:0;let H=T[w];H===void 0&&(H={},T[w]=H);let X=H[k.id];X===void 0&&(X={},H[k.id]=X);let oe=X[U];return oe===void 0&&(oe=f(c()),X[U]=oe),oe}function f(L){const F=[],k=[],V=[];for(let U=0;U<n;U++)F[U]=0,k[U]=0,V[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:V,object:L,attributes:{},index:null}}function h(L,F,k,V){const U=r.attributes,T=F.attributes;let w=0;const H=k.getAttributes();for(const X in H)if(H[X].location>=0){const de=U[X];let ge=T[X];if(ge===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(ge=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(ge=L.instanceColor)),de===void 0||de.attribute!==ge||ge&&de.data!==ge.data)return!0;w++}return r.attributesNum!==w||r.index!==V}function g(L,F,k,V){const U={},T=F.attributes;let w=0;const H=k.getAttributes();for(const X in H)if(H[X].location>=0){let de=T[X];de===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(de=L.instanceColor));const ge={};ge.attribute=de,de&&de.data&&(ge.data=de.data),U[X]=ge,w++}r.attributes=U,r.attributesNum=w,r.index=V}function v(){const L=r.newAttributes;for(let F=0,k=L.length;F<k;F++)L[F]=0}function p(L){m(L,0)}function m(L,F){const k=r.newAttributes,V=r.enabledAttributes,U=r.attributeDivisors;k[L]=1,V[L]===0&&(t.enableVertexAttribArray(L),V[L]=1),U[L]!==F&&(t.vertexAttribDivisor(L,F),U[L]=F)}function x(){const L=r.newAttributes,F=r.enabledAttributes;for(let k=0,V=F.length;k<V;k++)F[k]!==L[k]&&(t.disableVertexAttribArray(k),F[k]=0)}function E(L,F,k,V,U,T,w){w===!0?t.vertexAttribIPointer(L,F,k,U,T):t.vertexAttribPointer(L,F,k,V,U,T)}function S(L,F,k,V){v();const U=V.attributes,T=k.getAttributes(),w=F.defaultAttributeValues;for(const H in T){const X=T[H];if(X.location>=0){let oe=U[H];if(oe===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),oe!==void 0){const de=oe.normalized,ge=oe.itemSize,Ge=e.get(oe);if(Ge===void 0)continue;const dt=Ge.buffer,pt=Ge.type,le=Ge.bytesPerElement,ye=pt===t.INT||pt===t.UNSIGNED_INT||oe.gpuType===qf;if(oe.isInterleavedBufferAttribute){const Me=oe.data,Ke=Me.stride,He=oe.offset;if(Me.isInstancedInterleavedBuffer){for(let qe=0;qe<X.locationSize;qe++)m(X.location+qe,Me.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let qe=0;qe<X.locationSize;qe++)p(X.location+qe);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let qe=0;qe<X.locationSize;qe++)E(X.location+qe,ge/X.locationSize,pt,de,Ke*le,(He+ge/X.locationSize*qe)*le,ye)}else{if(oe.isInstancedBufferAttribute){for(let Me=0;Me<X.locationSize;Me++)m(X.location+Me,oe.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Me=0;Me<X.locationSize;Me++)p(X.location+Me);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let Me=0;Me<X.locationSize;Me++)E(X.location+Me,ge/X.locationSize,pt,de,ge*le,ge/X.locationSize*Me*le,ye)}}else if(w!==void 0){const de=w[H];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(X.location,de);break;case 3:t.vertexAttrib3fv(X.location,de);break;case 4:t.vertexAttrib4fv(X.location,de);break;default:t.vertexAttrib1fv(X.location,de)}}}}x()}function A(){M();for(const L in i){const F=i[L];for(const k in F){const V=F[k];for(const U in V){const T=V[U];for(const w in T)u(T[w].object),delete T[w];delete V[U]}}delete i[L]}}function P(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const k in F){const V=F[k];for(const U in V){const T=V[U];for(const w in T)u(T[w].object),delete T[w];delete V[U]}}delete i[L.id]}function D(L){for(const F in i){const k=i[F];for(const V in k){const U=k[V];if(U[L.id]===void 0)continue;const T=U[L.id];for(const w in T)u(T[w].object),delete T[w];delete U[L.id]}}}function y(L){for(const F in i){const k=i[F],V=L.isInstancedMesh===!0?L.id:0,U=k[V];if(U!==void 0){for(const T in U){const w=U[T];for(const H in w)u(w[H].object),delete w[H];delete U[T]}delete k[V],Object.keys(k).length===0&&delete i[F]}}}function M(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfObject:y,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function CI(t,e,n){let i;function s(l){i=l}function r(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,d){d!==0&&(t.drawArraysInstanced(i,l,u,d),n.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];n.update(h,i,1)}function c(l,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function PI(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Gn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const y=D===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==En&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==oi&&!y)}function c(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(Ye("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),P=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:S,maxSamples:A,samples:P}}function LI(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new bs,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=t.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const x=r?0:i,E=x*4;let S=m.clippingState||null;c.value=S,S=u(g,f,E,h);for(let A=0;A!==E;++A)S[A]=n[A];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const m=h+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,S=h;E!==v;++E,S+=4)o.copy(d[E]).applyMatrix4(x,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}const os=4,wp=[.125,.215,.35,.446,.526,.582],As=20,DI=256,zr=new $_,Tp=new it;let Vc=null,Hc=0,Gc=0,Wc=!1;const II=new $;class Ap{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=II}=r;Vc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Hc,Gc),this._renderer.xr.enabled=Wc,e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Gi,format:Gn,colorSpace:Mr,depthBuffer:!1},s=Rp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rp(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=NI(r)),this._blurMaterial=FI(r,e,n),this._ggxMaterial=UI(r,e,n)}return s}_compileMaterial(e){const n=new An(new cn,e);this._renderer.compile(n,zr)}_sceneToCubeUV(e,n,i,s,r){const c=new bn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Tp),d.toneMapping=di,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new An(new Bo,new sd({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let m=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,m=!0):(p.color.copy(Tp),m=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):S===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));const A=this._cubeSize;sr(s,S*A,E>2?A:0,A,A),d.setRenderTarget(s),m&&d.render(v,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===ks||e.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cp());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;sr(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,zr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=0+l*1.25,h=d*f,{_lodMax:g}=this,v=this._sizeLods[i],p=3*v*(i>g-os?i-g+os:0),m=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-n,sr(r,p,m,3*v,2*v),s.setRenderTarget(r),s.render(a,zr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,sr(e,p,m,3*v,2*v),s.setRenderTarget(e),s.render(a,zr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*As-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):As;p>As&&Ye(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${As}`);const m=[];let x=0;for(let D=0;D<As;++D){const y=D/v,M=Math.exp(-y*y/2);m.push(M),D===0?x+=M:D<p&&(x+=2*M)}for(let D=0;D<m.length;D++)m[D]=m[D]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const S=this._sizeLods[s],A=3*S*(s>E-os?s-E+os:0),P=4*(this._cubeSize-S);sr(n,A,P,3*S,2*S),c.setRenderTarget(n),c.render(d,zr)}}function NI(t){const e=[],n=[],i=[];let s=t;const r=t-os+1+wp.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>t-os?c=wp[o-t+os-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,v=3,p=2,m=1,x=new Float32Array(v*g*h),E=new Float32Array(p*g*h),S=new Float32Array(m*g*h);for(let P=0;P<h;P++){const D=P%3*2/3-1,y=P>2?0:-1,M=[D,y,0,D+2/3,y,0,D+2/3,y+1,0,D,y,0,D+2/3,y+1,0,D,y+1,0];x.set(M,v*g*P),E.set(f,p*g*P);const I=[P,P,P,P,P,P];S.set(I,m*g*P)}const A=new cn;A.setAttribute("position",new Cn(x,v)),A.setAttribute("uv",new Cn(E,p)),A.setAttribute("faceIndex",new Cn(S,m)),i.push(new An(A,null)),s>os&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Rp(t,e,n){const i=new hi(t,e,n);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sr(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function UI(t,e,n){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DI,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function FI(t,e,n){const i=new Float32Array(As),s=new $(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Cp(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Pp(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}class q_ extends hi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new z_(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bo(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Oi});r.uniforms.tEquirect.value=n;const o=new An(s,r),a=n.minFilter;return n.minFilter===Ps&&(n.minFilter=Qt),new G2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function OI(t){let e=new WeakMap,n=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===fc||h===dc)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const v=new q_(g.height);return v.fromEquirectangularTexture(t,f),e.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,g=h===fc||h===dc,v=h===ks||h===yr;if(g||v){let p=n.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Ap(t)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return g&&x&&x.height>0||v&&x&&c(x)?(i===null&&(i=new Ap(t)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,h){return h===fc?f.mapping=ks:h===dc&&(f.mapping=yr),f}function c(f){let h=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&h++;return h===g}function l(f){const h=f.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function BI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&ol("WebGLRenderer: "+i+" extension not supported."),s}}}function kI(t,e,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function l(d){const f=[],h=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(h!==null){const x=h.array;v=h.version;for(let E=0,S=x.length;E<S;E+=3){const A=x[E+0],P=x[E+1],D=x[E+2];f.push(A,P,P,D,D,A)}}else{const x=g.array;v=g.version;for(let E=0,S=x.length/3-1;E<S;E+=3){const A=E+0,P=E+1,D=E+2;f.push(A,P,P,D,D,A)}}const p=new(g.count>=65535?O_:F_)(f,1);p.version=v;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function zI(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function l(f,h,g){g!==0&&(t.drawElementsInstanced(i,h,r,f*o,g),n.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];n.update(p,i,1)}function d(f,h,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/o,h[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,v,0,g);let m=0;for(let x=0;x<g;x++)m+=h[x]*v[x];n.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function VI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function HI(t,e,n){const i=new WeakMap,s=new Lt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let I=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",I)};var h=I;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),p===!0&&(S=3);let A=a.attributes.position.count*S,P=1;A>e.maxTextureSize&&(P=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const D=new Float32Array(A*P*4*d),y=new I_(D,A,P,d);y.type=oi,y.needsUpdate=!0;const M=S*4;for(let L=0;L<d;L++){const F=m[L],k=x[L],V=E[L],U=A*P*4*L;for(let T=0;T<F.count;T++){const w=T*M;g===!0&&(s.fromBufferAttribute(F,T),D[U+w+0]=s.x,D[U+w+1]=s.y,D[U+w+2]=s.z,D[U+w+3]=0),v===!0&&(s.fromBufferAttribute(k,T),D[U+w+4]=s.x,D[U+w+5]=s.y,D[U+w+6]=s.z,D[U+w+7]=0),p===!0&&(s.fromBufferAttribute(V,T),D[U+w+8]=s.x,D[U+w+9]=s.y,D[U+w+10]=s.z,D[U+w+11]=V.itemSize===4?s.w:1)}}f={count:d,texture:y,size:new lt(A,P)},i.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function GI(t,e,n,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const WI={[g_]:"LINEAR_TONE_MAPPING",[__]:"REINHARD_TONE_MAPPING",[v_]:"CINEON_TONE_MAPPING",[x_]:"ACES_FILMIC_TONE_MAPPING",[S_]:"AGX_TONE_MAPPING",[M_]:"NEUTRAL_TONE_MAPPING",[y_]:"CUSTOM_TONE_MAPPING"};function $I(t,e,n,i,s){const r=new hi(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),o=new hi(e,n,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),a=new cn;a.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new $t([0,2,0,0,2,0],2));const c=new O2({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new An(a,c),u=new $_(-1,1,1,-1,0,1);let d=null,f=null,h=!1,g,v=null,p=[],m=!1;this.setSize=function(x,E){r.setSize(x,E),o.setSize(x,E);for(let S=0;S<p.length;S++){const A=p[S];A.setSize&&A.setSize(x,E)}},this.setEffects=function(x){p=x,m=p.length>0&&p[0].isRenderPass===!0;const E=r.width,S=r.height;for(let A=0;A<p.length;A++){const P=p[A];P.setSize&&P.setSize(E,S)}},this.begin=function(x,E){if(h||x.toneMapping===di&&p.length===0)return!1;if(v=E,E!==null){const S=E.width,A=E.height;(r.width!==S||r.height!==A)&&this.setSize(S,A)}return m===!1&&x.setRenderTarget(r),g=x.toneMapping,x.toneMapping=di,!0},this.hasRenderPass=function(){return m},this.end=function(x,E){x.toneMapping=g,h=!0;let S=r,A=o;for(let P=0;P<p.length;P++){const D=p[P];if(D.enabled!==!1&&(D.render(x,A,S,E),D.needsSwap!==!1)){const y=S;S=A,A=y}}if(d!==x.outputColorSpace||f!==x.toneMapping){d=x.outputColorSpace,f=x.toneMapping,c.defines={},ct.getTransfer(d)===_t&&(c.defines.SRGB_TRANSFER="");const P=WI[f];P&&(c.defines[P]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(v),x.render(l,u),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const Y_=new ln,ff=new So(1,1),j_=new I_,K_=new f2,J_=new z_,Lp=[],Dp=[],Ip=new Float32Array(16),Np=new Float32Array(9),Up=new Float32Array(4);function Rr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Lp[s];if(r===void 0&&(r=new Float32Array(s),Lp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Vl(t,e){let n=Dp[e];n===void 0&&(n=new Int32Array(e),Dp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function XI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function qI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function YI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function jI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function KI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;Up.set(i),t.uniformMatrix2fv(this.addr,!1,Up),kt(n,i)}}function JI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;Np.set(i),t.uniformMatrix3fv(this.addr,!1,Np),kt(n,i)}}function ZI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;Ip.set(i),t.uniformMatrix4fv(this.addr,!1,Ip),kt(n,i)}}function QI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function tN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function nN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function iN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function rN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function oN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function aN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(ff.compareFunction=n.isReversedDepthBuffer()?ed:Qf,r=ff):r=Y_,n.setTexture2D(e||r,s)}function lN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||K_,s)}function cN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||J_,s)}function uN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||j_,s)}function fN(t){switch(t){case 5126:return XI;case 35664:return qI;case 35665:return YI;case 35666:return jI;case 35674:return KI;case 35675:return JI;case 35676:return ZI;case 5124:case 35670:return QI;case 35667:case 35671:return eN;case 35668:case 35672:return tN;case 35669:case 35673:return nN;case 5125:return iN;case 36294:return sN;case 36295:return rN;case 36296:return oN;case 35678:case 36198:case 36298:case 36306:case 35682:return aN;case 35679:case 36299:case 36307:return lN;case 35680:case 36300:case 36308:case 36293:return cN;case 36289:case 36303:case 36311:case 36292:return uN}}function dN(t,e){t.uniform1fv(this.addr,e)}function hN(t,e){const n=Rr(e,this.size,2);t.uniform2fv(this.addr,n)}function pN(t,e){const n=Rr(e,this.size,3);t.uniform3fv(this.addr,n)}function mN(t,e){const n=Rr(e,this.size,4);t.uniform4fv(this.addr,n)}function gN(t,e){const n=Rr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _N(t,e){const n=Rr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vN(t,e){const n=Rr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function xN(t,e){t.uniform1iv(this.addr,e)}function yN(t,e){t.uniform2iv(this.addr,e)}function SN(t,e){t.uniform3iv(this.addr,e)}function MN(t,e){t.uniform4iv(this.addr,e)}function bN(t,e){t.uniform1uiv(this.addr,e)}function EN(t,e){t.uniform2uiv(this.addr,e)}function wN(t,e){t.uniform3uiv(this.addr,e)}function TN(t,e){t.uniform4uiv(this.addr,e)}function AN(t,e,n){const i=this.cache,s=e.length,r=Vl(n,s);Bt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=ff:o=Y_;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function RN(t,e,n){const i=this.cache,s=e.length,r=Vl(n,s);Bt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||K_,r[o])}function CN(t,e,n){const i=this.cache,s=e.length,r=Vl(n,s);Bt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||J_,r[o])}function PN(t,e,n){const i=this.cache,s=e.length,r=Vl(n,s);Bt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||j_,r[o])}function LN(t){switch(t){case 5126:return dN;case 35664:return hN;case 35665:return pN;case 35666:return mN;case 35674:return gN;case 35675:return _N;case 35676:return vN;case 5124:case 35670:return xN;case 35667:case 35671:return yN;case 35668:case 35672:return SN;case 35669:case 35673:return MN;case 5125:return bN;case 36294:return EN;case 36295:return wN;case 36296:return TN;case 35678:case 36198:case 36298:case 36306:case 35682:return AN;case 35679:case 36299:case 36307:return RN;case 35680:case 36300:case 36308:case 36293:return CN;case 36289:case 36303:case 36311:case 36292:return PN}}class DN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fN(n.type)}}class IN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LN(n.type)}}class NN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function Fp(t,e){t.seq.push(e),t.map[e.id]=e}function UN(t,e,n){const i=t.name,s=i.length;for($c.lastIndex=0;;){const r=$c.exec(i),o=$c.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Fp(n,l===void 0?new DN(a,t,e):new IN(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new NN(a),Fp(n,d)),n=d}}}class Ba{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),c=e.getUniformLocation(n,a.name);UN(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Op(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const FN=37297;let ON=0;function BN(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Bp=new et;function kN(t){ct._getMatrix(Bp,ct.workingColorSpace,t);const e=`mat3( ${Bp.elements.map(n=>n.toFixed(4))} )`;switch(ct.getTransfer(t)){case sl:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function kp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+BN(t.getShaderSource(e),a)}else return r}function zN(t,e){const n=kN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const VN={[g_]:"Linear",[__]:"Reinhard",[v_]:"Cineon",[x_]:"ACESFilmic",[S_]:"AgX",[M_]:"Neutral",[y_]:"Custom"};function HN(t,e){const n=VN[e];return n===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ma=new $;function GN(){ct.getLuminanceCoefficients(Ma);const t=Ma.x.toFixed(4),e=Ma.y.toFixed(4),n=Ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function $N(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function XN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Yr(t){return t!==""}function zp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qN=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(t){return t.replace(qN,jN)}const YN=new Map;function jN(t,e){let n=tt[e];if(n===void 0){const i=YN.get(e);if(i!==void 0)n=tt[i],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return df(n)}const KN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hp(t){return t.replace(KN,JN)}function JN(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const ZN={[Ia]:"SHADOWMAP_TYPE_PCF",[Xr]:"SHADOWMAP_TYPE_VSM"};function QN(t){return ZN[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eU={[ks]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[Bl]:"ENVMAP_TYPE_CUBE_UV"};function tU(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":eU[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const nU={[yr]:"ENVMAP_MODE_REFRACTION"};function iU(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":nU[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sU={[Xf]:"ENVMAP_BLENDING_MULTIPLY",[WP]:"ENVMAP_BLENDING_MIX",[$P]:"ENVMAP_BLENDING_ADD"};function rU(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":sU[t.combine]||"ENVMAP_BLENDING_NONE"}function oU(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aU(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=QN(n),l=tU(n),u=iU(n),d=rU(n),f=oU(n),h=WN(n),g=$N(r),v=s.createProgram();let p,m,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Yr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`)):(p=[Gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),m=[Gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==di?"#define TONE_MAPPING":"",n.toneMapping!==di?tt.tonemapping_pars_fragment:"",n.toneMapping!==di?HN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,zN("linearToOutputTexel",n.outputColorSpace),GN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Yr).join(`
`)),o=df(o),o=zp(o,n),o=Vp(o,n),a=df(a),a=zp(a,n),a=Vp(a,n),o=Hp(o),a=Hp(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=x+p+o,S=x+m+a,A=Op(s,s.VERTEX_SHADER,E),P=Op(s,s.FRAGMENT_SHADER,S);s.attachShader(v,A),s.attachShader(v,P),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function D(L){if(t.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(A)||"",V=s.getShaderInfoLog(P)||"",U=F.trim(),T=k.trim(),w=V.trim();let H=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,A,P);else{const oe=kp(s,A,"vertex"),de=kp(s,P,"fragment");ft("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+oe+`
`+de)}else U!==""?Ye("WebGLProgram: Program Info Log:",U):(T===""||w==="")&&(X=!1);X&&(L.diagnostics={runnable:H,programLog:U,vertexShader:{log:T,prefix:p},fragmentShader:{log:w,prefix:m}})}s.deleteShader(A),s.deleteShader(P),y=new Ba(s,v),M=XN(s,v)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,FN)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ON++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=P,this}let lU=0;class cU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uU(e),n.set(e,i)),i}}class uU{constructor(e){this.id=lU++,this.code=e,this.usedTimes=0}}function fU(t,e,n,i,s,r){const o=new N_,a=new cU,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function v(y,M,I,L,F){const k=L.fog,V=F.geometry,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,T=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,w=e.get(y.envMap||U,T),H=w&&w.mapping===Bl?w.image.height:null,X=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Ye("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=oe!==void 0?oe.length:0;let ge=0;V.morphAttributes.position!==void 0&&(ge=1),V.morphAttributes.normal!==void 0&&(ge=2),V.morphAttributes.color!==void 0&&(ge=3);let Ge,dt,pt,le;if(X){const gt=si[X];Ge=gt.vertexShader,dt=gt.fragmentShader}else Ge=y.vertexShader,dt=y.fragmentShader,a.update(y),pt=a.getVertexShaderID(y),le=a.getFragmentShaderID(y);const ye=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),Ke=F.isInstancedMesh===!0,He=F.isBatchedMesh===!0,qe=!!y.map,O=!!y.matcap,z=!!w,q=!!y.aoMap,ae=!!y.lightMap,ee=!!y.bumpMap,ce=!!y.normalMap,N=!!y.displacementMap,pe=!!y.emissiveMap,fe=!!y.metalnessMap,re=!!y.roughnessMap,he=y.anisotropy>0,R=y.clearcoat>0,b=y.dispersion>0,B=y.iridescence>0,Y=y.sheen>0,ne=y.transmission>0,j=he&&!!y.anisotropyMap,Te=R&&!!y.clearcoatMap,_e=R&&!!y.clearcoatNormalMap,Ne=R&&!!y.clearcoatRoughnessMap,Be=B&&!!y.iridescenceMap,me=B&&!!y.iridescenceThicknessMap,xe=Y&&!!y.sheenColorMap,Ae=Y&&!!y.sheenRoughnessMap,Le=!!y.specularMap,De=!!y.specularColorMap,Ze=!!y.specularIntensityMap,G=ne&&!!y.transmissionMap,we=ne&&!!y.thicknessMap,Se=!!y.gradientMap,Ue=!!y.alphaMap,ve=y.alphaTest>0,se=!!y.alphaHash,Fe=!!y.extensions;let Je=di;y.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Je=t.toneMapping);const bt={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:Ge,fragmentShader:dt,defines:y.defines,customVertexShaderID:pt,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:He,batchingColor:He&&F._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&F.instanceColor!==null,instancingMorph:Ke&&F.morphTexture!==null,outputColorSpace:ye===null?t.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Mr,alphaToCoverage:!!y.alphaToCoverage,map:qe,matcap:O,envMap:z,envMapMode:z&&w.mapping,envMapCubeUVHeight:H,aoMap:q,lightMap:ae,bumpMap:ee,normalMap:ce,displacementMap:N,emissiveMap:pe,normalMapObjectSpace:ce&&y.normalMapType===YP,normalMapTangentSpace:ce&&y.normalMapType===L_,metalnessMap:fe,roughnessMap:re,anisotropy:he,anisotropyMap:j,clearcoat:R,clearcoatMap:Te,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ne,dispersion:b,iridescence:B,iridescenceMap:Be,iridescenceThicknessMap:me,sheen:Y,sheenColorMap:xe,sheenRoughnessMap:Ae,specularMap:Le,specularColorMap:De,specularIntensityMap:Ze,transmission:ne,transmissionMap:G,thicknessMap:we,gradientMap:Se,opaque:y.transparent===!1&&y.blending===dr&&y.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ve,alphaHash:se,combine:y.combine,mapUv:qe&&g(y.map.channel),aoMapUv:q&&g(y.aoMap.channel),lightMapUv:ae&&g(y.lightMap.channel),bumpMapUv:ee&&g(y.bumpMap.channel),normalMapUv:ce&&g(y.normalMap.channel),displacementMapUv:N&&g(y.displacementMap.channel),emissiveMapUv:pe&&g(y.emissiveMap.channel),metalnessMapUv:fe&&g(y.metalnessMap.channel),roughnessMapUv:re&&g(y.roughnessMap.channel),anisotropyMapUv:j&&g(y.anisotropyMap.channel),clearcoatMapUv:Te&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(y.sheenRoughnessMap.channel),specularMapUv:Le&&g(y.specularMap.channel),specularColorMapUv:De&&g(y.specularColorMap.channel),specularIntensityMapUv:Ze&&g(y.specularIntensityMap.channel),transmissionMapUv:G&&g(y.transmissionMap.channel),thicknessMapUv:we&&g(y.thicknessMap.channel),alphaMapUv:Ue&&g(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ce||he),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(qe||Ue),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||V.attributes.normal===void 0&&ce===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Je,decodeVideoTexture:qe&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===_t,decodeVideoTextureEmissive:pe&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===_t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ui,flipSided:y.side===_n,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Fe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&y.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)M.push(I),M.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(m(M,y),x(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function m(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function E(y){const M=h[y.type];let I;if(M){const L=si[M];I=N2.clone(L.uniforms)}else I=y.uniforms;return I}function S(y,M){let I=u.get(M);return I!==void 0?++I.usedTimes:(I=new aU(t,M,y,s),l.push(I),u.set(M,I)),I}function A(y){if(--y.usedTimes===0){const M=l.indexOf(y);l[M]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function P(y){a.remove(y)}function D(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:E,acquireProgram:S,releaseProgram:A,releaseShaderCache:P,programs:l,dispose:D}}function dU(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,c){t.get(o)[a]=c}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function hU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Wp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $p(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,v,p,m){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:g,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:p,group:m},t[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=g,x.materialVariant=o(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=p,x.group=m),e++,x}function c(f,h,g,v,p,m){const x=a(f,h,g,v,p,m);g.transmission>0?i.push(x):g.transparent===!0?s.push(x):n.push(x)}function l(f,h,g,v,p,m){const x=a(f,h,g,v,p,m);g.transmission>0?i.unshift(x):g.transparent===!0?s.unshift(x):n.unshift(x)}function u(f,h){n.length>1&&n.sort(f||hU),i.length>1&&i.sort(h||Wp),s.length>1&&s.sort(h||Wp)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function pU(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new $p,t.set(i,[o])):s>=r.length?(o=new $p,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function mU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new it};break;case"SpotLight":n={position:new $,direction:new $,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function gU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _U=0;function vU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function xU(t){const e=new mU,n=gU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);const s=new $,r=new At,o=new At;function a(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,g=0,v=0,p=0,m=0,x=0,E=0,S=0,A=0,P=0,D=0;l.sort(vU);for(let M=0,I=l.length;M<I;M++){const L=l[M],F=L.color,k=L.intensity,V=L.distance;let U=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Sr?U=L.shadow.map.texture:U=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=F.r*k,d+=F.g*k,f+=F.b*k;else if(L.isLightProbe){for(let T=0;T<9;T++)i.probe[T].addScaledVector(L.sh.coefficients[T],k);D++}else if(L.isDirectionalLight){const T=e.get(L);if(T.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const w=L.shadow,H=n.get(L);H.shadowIntensity=w.intensity,H.shadowBias=w.bias,H.shadowNormalBias=w.normalBias,H.shadowRadius=w.radius,H.shadowMapSize=w.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=U,i.directionalShadowMatrix[h]=L.shadow.matrix,x++}i.directional[h]=T,h++}else if(L.isSpotLight){const T=e.get(L);T.position.setFromMatrixPosition(L.matrixWorld),T.color.copy(F).multiplyScalar(k),T.distance=V,T.coneCos=Math.cos(L.angle),T.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),T.decay=L.decay,i.spot[v]=T;const w=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,w.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[v]=w.matrix,L.castShadow){const H=n.get(L);H.shadowIntensity=w.intensity,H.shadowBias=w.bias,H.shadowNormalBias=w.normalBias,H.shadowRadius=w.radius,H.shadowMapSize=w.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=U,S++}v++}else if(L.isRectAreaLight){const T=e.get(L);T.color.copy(F).multiplyScalar(k),T.halfWidth.set(L.width*.5,0,0),T.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=T,p++}else if(L.isPointLight){const T=e.get(L);if(T.color.copy(L.color).multiplyScalar(L.intensity),T.distance=L.distance,T.decay=L.decay,L.castShadow){const w=L.shadow,H=n.get(L);H.shadowIntensity=w.intensity,H.shadowBias=w.bias,H.shadowNormalBias=w.normalBias,H.shadowRadius=w.radius,H.shadowMapSize=w.mapSize,H.shadowCameraNear=w.camera.near,H.shadowCameraFar=w.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=L.shadow.matrix,E++}i.point[g]=T,g++}else if(L.isHemisphereLight){const T=e.get(L);T.skyColor.copy(L.color).multiplyScalar(k),T.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[m]=T,m++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==h||y.pointLength!==g||y.spotLength!==v||y.rectAreaLength!==p||y.hemiLength!==m||y.numDirectionalShadows!==x||y.numPointShadows!==E||y.numSpotShadows!==S||y.numSpotMaps!==A||y.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+A-P,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,y.directionalLength=h,y.pointLength=g,y.spotLength=v,y.rectAreaLength=p,y.hemiLength=m,y.numDirectionalShadows=x,y.numPointShadows=E,y.numSpotShadows=S,y.numSpotMaps=A,y.numLightProbes=D,i.version=_U++)}function c(l,u){let d=0,f=0,h=0,g=0,v=0;const p=u.matrixWorldInverse;for(let m=0,x=l.length;m<x;m++){const E=l[m];if(E.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(E.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(E.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:i}}function Xp(t){const e=new xU(t),n=[],i=[];function s(u){l.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function c(u){e.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function yU(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Xp(t),e.set(s,[a])):r>=o.length?(a=new Xp(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const SU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MU=`uniform sampler2D shadow_pass;
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
}`,bU=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],EU=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],qp=new At,Vr=new $,Xc=new $;function wU(t,e,n){let i=new rd;const s=new lt,r=new lt,o=new Lt,a=new B2,c=new k2,l={},u=n.maxTextureSize,d={[ls]:_n,[_n]:ls,[Ui]:Ui},f=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:SU,fragmentShader:MU}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new An(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia;let m=this.type;this.render=function(P,D,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;this.type===wP&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ia);const M=t.getRenderTarget(),I=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Oi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=m!==this.type;k&&D.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(U=>U.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,U=P.length;V<U;V++){const T=P[V],w=T.shadow;if(w===void 0){Ye("WebGLShadowMap:",T,"has no shadow.");continue}if(w.autoUpdate===!1&&w.needsUpdate===!1)continue;s.copy(w.mapSize);const H=w.getFrameExtents();s.multiply(H),r.copy(w.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,w.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,w.mapSize.y=r.y));const X=t.state.buffers.depth.getReversed();if(w.camera._reversedDepth=X,w.map===null||k===!0){if(w.map!==null&&(w.map.depthTexture!==null&&(w.map.depthTexture.dispose(),w.map.depthTexture=null),w.map.dispose()),this.type===Xr){if(T.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}w.map=new hi(s.x,s.y,{format:Sr,type:Gi,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),w.map.texture.name=T.name+".shadowMap",w.map.depthTexture=new So(s.x,s.y,oi),w.map.depthTexture.name=T.name+".shadowMapDepth",w.map.depthTexture.format=Wi,w.map.depthTexture.compareFunction=null,w.map.depthTexture.minFilter=Wt,w.map.depthTexture.magFilter=Wt}else T.isPointLight?(w.map=new q_(s.x),w.map.depthTexture=new D2(s.x,mi)):(w.map=new hi(s.x,s.y),w.map.depthTexture=new So(s.x,s.y,mi)),w.map.depthTexture.name=T.name+".shadowMap",w.map.depthTexture.format=Wi,this.type===Ia?(w.map.depthTexture.compareFunction=X?ed:Qf,w.map.depthTexture.minFilter=Qt,w.map.depthTexture.magFilter=Qt):(w.map.depthTexture.compareFunction=null,w.map.depthTexture.minFilter=Wt,w.map.depthTexture.magFilter=Wt);w.camera.updateProjectionMatrix()}const oe=w.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<oe;de++){if(w.map.isWebGLCubeRenderTarget)t.setRenderTarget(w.map,de),t.clear();else{de===0&&(t.setRenderTarget(w.map),t.clear());const ge=w.getViewport(de);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),F.viewport(o)}if(T.isPointLight){const ge=w.camera,Ge=w.matrix,dt=T.distance||ge.far;dt!==ge.far&&(ge.far=dt,ge.updateProjectionMatrix()),Vr.setFromMatrixPosition(T.matrixWorld),ge.position.copy(Vr),Xc.copy(ge.position),Xc.add(bU[de]),ge.up.copy(EU[de]),ge.lookAt(Xc),ge.updateMatrixWorld(),Ge.makeTranslation(-Vr.x,-Vr.y,-Vr.z),qp.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),w._frustum.setFromProjectionMatrix(qp,ge.coordinateSystem,ge.reversedDepth)}else w.updateMatrices(T);i=w.getFrustum(),S(D,y,w.camera,T,this.type)}w.isPointLightShadow!==!0&&this.type===Xr&&x(w,y),w.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(M,I,L)};function x(P,D){const y=e.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new hi(s.x,s.y,{format:Sr,type:Gi})),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(D,null,y,f,v,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(D,null,y,h,v,null)}function E(P,D,y,M){let I=null;const L=y.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)I=L;else if(I=y.isPointLight===!0?c:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const F=I.uuid,k=D.uuid;let V=l[F];V===void 0&&(V={},l[F]=V);let U=V[k];U===void 0&&(U=I.clone(),V[k]=U,D.addEventListener("dispose",A)),I=U}if(I.visible=D.visible,I.wireframe=D.wireframe,M===Xr?I.side=D.shadowSide!==null?D.shadowSide:D.side:I.side=D.shadowSide!==null?D.shadowSide:d[D.side],I.alphaMap=D.alphaMap,I.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,I.map=D.map,I.clipShadows=D.clipShadows,I.clippingPlanes=D.clippingPlanes,I.clipIntersection=D.clipIntersection,I.displacementMap=D.displacementMap,I.displacementScale=D.displacementScale,I.displacementBias=D.displacementBias,I.wireframeLinewidth=D.wireframeLinewidth,I.linewidth=D.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const F=t.properties.get(I);F.light=y}return I}function S(P,D,y,M,I){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&I===Xr)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,P.matrixWorld);const k=e.update(P),V=P.material;if(Array.isArray(V)){const U=k.groups;for(let T=0,w=U.length;T<w;T++){const H=U[T],X=V[H.materialIndex];if(X&&X.visible){const oe=E(P,X,M,I);P.onBeforeShadow(t,P,D,y,k,oe,H),t.renderBufferDirect(y,null,k,oe,P,H),P.onAfterShadow(t,P,D,y,k,oe,H)}}}else if(V.visible){const U=E(P,V,M,I);P.onBeforeShadow(t,P,D,y,k,U,null),t.renderBufferDirect(y,null,k,U,P,null),P.onAfterShadow(t,P,D,y,k,U,null)}}const F=P.children;for(let k=0,V=F.length;k<V;k++)S(F[k],D,y,M,I)}function A(P){P.target.removeEventListener("dispose",A);for(const y in l){const M=l[y],I=P.target.uuid;I in M&&(M[I].dispose(),delete M[I])}}}function TU(t,e){function n(){let G=!1;const we=new Lt;let Se=null;const Ue=new Lt(0,0,0,0);return{setMask:function(ve){Se!==ve&&!G&&(t.colorMask(ve,ve,ve,ve),Se=ve)},setLocked:function(ve){G=ve},setClear:function(ve,se,Fe,Je,bt){bt===!0&&(ve*=Je,se*=Je,Fe*=Je),we.set(ve,se,Fe,Je),Ue.equals(we)===!1&&(t.clearColor(ve,se,Fe,Je),Ue.copy(we))},reset:function(){G=!1,Se=null,Ue.set(-1,0,0,0)}}}function i(){let G=!1,we=!1,Se=null,Ue=null,ve=null;return{setReversed:function(se){if(we!==se){const Fe=e.get("EXT_clip_control");se?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),we=se;const Je=ve;ve=null,this.setClear(Je)}},getReversed:function(){return we},setTest:function(se){se?ye(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(se){Se!==se&&!G&&(t.depthMask(se),Se=se)},setFunc:function(se){if(we&&(se=s2[se]),Ue!==se){switch(se){case Su:t.depthFunc(t.NEVER);break;case Mu:t.depthFunc(t.ALWAYS);break;case bu:t.depthFunc(t.LESS);break;case xr:t.depthFunc(t.LEQUAL);break;case Eu:t.depthFunc(t.EQUAL);break;case wu:t.depthFunc(t.GEQUAL);break;case Tu:t.depthFunc(t.GREATER);break;case Au:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ue=se}},setLocked:function(se){G=se},setClear:function(se){ve!==se&&(ve=se,we&&(se=1-se),t.clearDepth(se))},reset:function(){G=!1,Se=null,Ue=null,ve=null,we=!1}}}function s(){let G=!1,we=null,Se=null,Ue=null,ve=null,se=null,Fe=null,Je=null,bt=null;return{setTest:function(gt){G||(gt?ye(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(gt){we!==gt&&!G&&(t.stencilMask(gt),we=gt)},setFunc:function(gt,yi,Si){(Se!==gt||Ue!==yi||ve!==Si)&&(t.stencilFunc(gt,yi,Si),Se=gt,Ue=yi,ve=Si)},setOp:function(gt,yi,Si){(se!==gt||Fe!==yi||Je!==Si)&&(t.stencilOp(gt,yi,Si),se=gt,Fe=yi,Je=Si)},setLocked:function(gt){G=gt},setClear:function(gt){bt!==gt&&(t.clearStencil(gt),bt=gt)},reset:function(){G=!1,we=null,Se=null,Ue=null,ve=null,se=null,Fe=null,Je=null,bt=null}}}const r=new n,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,v=!1,p=null,m=null,x=null,E=null,S=null,A=null,P=null,D=new it(0,0,0),y=0,M=!1,I=null,L=null,F=null,k=null,V=null;const U=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let T=!1,w=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(w=parseFloat(/^WebGL (\d)/.exec(H)[1]),T=w>=1):H.indexOf("OpenGL ES")!==-1&&(w=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),T=w>=2);let X=null,oe={};const de=t.getParameter(t.SCISSOR_BOX),ge=t.getParameter(t.VIEWPORT),Ge=new Lt().fromArray(de),dt=new Lt().fromArray(ge);function pt(G,we,Se,Ue){const ve=new Uint8Array(4),se=t.createTexture();t.bindTexture(G,se),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<Se;Fe++)G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(we+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return se}const le={};le[t.TEXTURE_2D]=pt(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=pt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[t.TEXTURE_2D_ARRAY]=pt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=pt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(t.DEPTH_TEST),o.setFunc(xr),ee(!1),ce(Xh),ye(t.CULL_FACE),q(Oi);function ye(G){u[G]!==!0&&(t.enable(G),u[G]=!0)}function Me(G){u[G]!==!1&&(t.disable(G),u[G]=!1)}function Ke(G,we){return d[G]!==we?(t.bindFramebuffer(G,we),d[G]=we,G===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=we),G===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=we),!0):!1}function He(G,we){let Se=h,Ue=!1;if(G){Se=f.get(we),Se===void 0&&(Se=[],f.set(we,Se));const ve=G.textures;if(Se.length!==ve.length||Se[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Fe=ve.length;se<Fe;se++)Se[se]=t.COLOR_ATTACHMENT0+se;Se.length=ve.length,Ue=!0}}else Se[0]!==t.BACK&&(Se[0]=t.BACK,Ue=!0);Ue&&t.drawBuffers(Se)}function qe(G){return g!==G?(t.useProgram(G),g=G,!0):!1}const O={[Ts]:t.FUNC_ADD,[AP]:t.FUNC_SUBTRACT,[RP]:t.FUNC_REVERSE_SUBTRACT};O[CP]=t.MIN,O[PP]=t.MAX;const z={[LP]:t.ZERO,[DP]:t.ONE,[IP]:t.SRC_COLOR,[xu]:t.SRC_ALPHA,[kP]:t.SRC_ALPHA_SATURATE,[OP]:t.DST_COLOR,[UP]:t.DST_ALPHA,[NP]:t.ONE_MINUS_SRC_COLOR,[yu]:t.ONE_MINUS_SRC_ALPHA,[BP]:t.ONE_MINUS_DST_COLOR,[FP]:t.ONE_MINUS_DST_ALPHA,[zP]:t.CONSTANT_COLOR,[VP]:t.ONE_MINUS_CONSTANT_COLOR,[HP]:t.CONSTANT_ALPHA,[GP]:t.ONE_MINUS_CONSTANT_ALPHA};function q(G,we,Se,Ue,ve,se,Fe,Je,bt,gt){if(G===Oi){v===!0&&(Me(t.BLEND),v=!1);return}if(v===!1&&(ye(t.BLEND),v=!0),G!==TP){if(G!==p||gt!==M){if((m!==Ts||S!==Ts)&&(t.blendEquation(t.FUNC_ADD),m=Ts,S=Ts),gt)switch(G){case dr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vu:t.blendFunc(t.ONE,t.ONE);break;case qh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ft("WebGLState: Invalid blending: ",G);break}else switch(G){case dr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case qh:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yh:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",G);break}x=null,E=null,A=null,P=null,D.set(0,0,0),y=0,p=G,M=gt}return}ve=ve||we,se=se||Se,Fe=Fe||Ue,(we!==m||ve!==S)&&(t.blendEquationSeparate(O[we],O[ve]),m=we,S=ve),(Se!==x||Ue!==E||se!==A||Fe!==P)&&(t.blendFuncSeparate(z[Se],z[Ue],z[se],z[Fe]),x=Se,E=Ue,A=se,P=Fe),(Je.equals(D)===!1||bt!==y)&&(t.blendColor(Je.r,Je.g,Je.b,bt),D.copy(Je),y=bt),p=G,M=!1}function ae(G,we){G.side===Ui?Me(t.CULL_FACE):ye(t.CULL_FACE);let Se=G.side===_n;we&&(Se=!Se),ee(Se),G.blending===dr&&G.transparent===!1?q(Oi):q(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const Ue=G.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),pe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ye(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(G){I!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),I=G)}function ce(G){G!==bP?(ye(t.CULL_FACE),G!==L&&(G===Xh?t.cullFace(t.BACK):G===EP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),L=G}function N(G){G!==F&&(T&&t.lineWidth(G),F=G)}function pe(G,we,Se){G?(ye(t.POLYGON_OFFSET_FILL),(k!==we||V!==Se)&&(k=we,V=Se,o.getReversed()&&(we=-we),t.polygonOffset(we,Se))):Me(t.POLYGON_OFFSET_FILL)}function fe(G){G?ye(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function re(G){G===void 0&&(G=t.TEXTURE0+U-1),X!==G&&(t.activeTexture(G),X=G)}function he(G,we,Se){Se===void 0&&(X===null?Se=t.TEXTURE0+U-1:Se=X);let Ue=oe[Se];Ue===void 0&&(Ue={type:void 0,texture:void 0},oe[Se]=Ue),(Ue.type!==G||Ue.texture!==we)&&(X!==Se&&(t.activeTexture(Se),X=Se),t.bindTexture(G,we||le[G]),Ue.type=G,Ue.texture=we)}function R(){const G=oe[X];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(G){ft("WebGLState:",G)}}function B(){try{t.compressedTexImage3D(...arguments)}catch(G){ft("WebGLState:",G)}}function Y(){try{t.texSubImage2D(...arguments)}catch(G){ft("WebGLState:",G)}}function ne(){try{t.texSubImage3D(...arguments)}catch(G){ft("WebGLState:",G)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(G){ft("WebGLState:",G)}}function Te(){try{t.compressedTexSubImage3D(...arguments)}catch(G){ft("WebGLState:",G)}}function _e(){try{t.texStorage2D(...arguments)}catch(G){ft("WebGLState:",G)}}function Ne(){try{t.texStorage3D(...arguments)}catch(G){ft("WebGLState:",G)}}function Be(){try{t.texImage2D(...arguments)}catch(G){ft("WebGLState:",G)}}function me(){try{t.texImage3D(...arguments)}catch(G){ft("WebGLState:",G)}}function xe(G){Ge.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),Ge.copy(G))}function Ae(G){dt.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),dt.copy(G))}function Le(G,we){let Se=l.get(we);Se===void 0&&(Se=new WeakMap,l.set(we,Se));let Ue=Se.get(G);Ue===void 0&&(Ue=t.getUniformBlockIndex(we,G.name),Se.set(G,Ue))}function De(G,we){const Ue=l.get(we).get(G);c.get(we)!==Ue&&(t.uniformBlockBinding(we,Ue,G.__bindingPointIndex),c.set(we,Ue))}function Ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},X=null,oe={},d={},f=new WeakMap,h=[],g=null,v=!1,p=null,m=null,x=null,E=null,S=null,A=null,P=null,D=new it(0,0,0),y=0,M=!1,I=null,L=null,F=null,k=null,V=null,Ge.set(0,0,t.canvas.width,t.canvas.height),dt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:Me,bindFramebuffer:Ke,drawBuffers:He,useProgram:qe,setBlending:q,setMaterial:ae,setFlipSided:ee,setCullFace:ce,setLineWidth:N,setPolygonOffset:pe,setScissorTest:fe,activeTexture:re,bindTexture:he,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:B,texImage2D:Be,texImage3D:me,updateUBOMapping:Le,uniformBlockBinding:De,texStorage2D:_e,texStorage3D:Ne,texSubImage2D:Y,texSubImage3D:ne,compressedTexSubImage2D:j,compressedTexSubImage3D:Te,scissor:xe,viewport:Ae,reset:Ze}}function AU(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return h?new OffscreenCanvas(R,b):rl("canvas")}function v(R,b,B){let Y=1;const ne=he(R);if((ne.width>B||ne.height>B)&&(Y=B/Math.max(ne.width,ne.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Y*ne.width),Te=Math.floor(Y*ne.height);d===void 0&&(d=g(j,Te));const _e=b?g(j,Te):d;return _e.width=j,_e.height=Te,_e.getContext("2d").drawImage(R,0,0,j,Te),Ye("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+j+"x"+Te+")."),_e}else return"data"in R&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){t.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(R,b,B,Y,ne=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=b;if(b===t.RED&&(B===t.FLOAT&&(j=t.R32F),B===t.HALF_FLOAT&&(j=t.R16F),B===t.UNSIGNED_BYTE&&(j=t.R8)),b===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.R8UI),B===t.UNSIGNED_SHORT&&(j=t.R16UI),B===t.UNSIGNED_INT&&(j=t.R32UI),B===t.BYTE&&(j=t.R8I),B===t.SHORT&&(j=t.R16I),B===t.INT&&(j=t.R32I)),b===t.RG&&(B===t.FLOAT&&(j=t.RG32F),B===t.HALF_FLOAT&&(j=t.RG16F),B===t.UNSIGNED_BYTE&&(j=t.RG8)),b===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RG8UI),B===t.UNSIGNED_SHORT&&(j=t.RG16UI),B===t.UNSIGNED_INT&&(j=t.RG32UI),B===t.BYTE&&(j=t.RG8I),B===t.SHORT&&(j=t.RG16I),B===t.INT&&(j=t.RG32I)),b===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RGB8UI),B===t.UNSIGNED_SHORT&&(j=t.RGB16UI),B===t.UNSIGNED_INT&&(j=t.RGB32UI),B===t.BYTE&&(j=t.RGB8I),B===t.SHORT&&(j=t.RGB16I),B===t.INT&&(j=t.RGB32I)),b===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),B===t.UNSIGNED_INT&&(j=t.RGBA32UI),B===t.BYTE&&(j=t.RGBA8I),B===t.SHORT&&(j=t.RGBA16I),B===t.INT&&(j=t.RGBA32I)),b===t.RGB&&(B===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),b===t.RGBA){const Te=ne?sl:ct.getTransfer(Y);B===t.FLOAT&&(j=t.RGBA32F),B===t.HALF_FLOAT&&(j=t.RGBA16F),B===t.UNSIGNED_BYTE&&(j=Te===_t?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(R,b){let B;return R?b===null||b===mi||b===xo?B=t.DEPTH24_STENCIL8:b===oi?B=t.DEPTH32F_STENCIL8:b===vo&&(B=t.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===mi||b===xo?B=t.DEPTH_COMPONENT24:b===oi?B=t.DEPTH_COMPONENT32F:b===vo&&(B=t.DEPTH_COMPONENT16),B}function A(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==Qt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function P(R){const b=R.target;b.removeEventListener("dispose",P),y(b),b.isVideoTexture&&u.delete(b)}function D(R){const b=R.target;b.removeEventListener("dispose",D),I(b)}function y(R){const b=i.get(R);if(b.__webglInit===void 0)return;const B=R.source,Y=f.get(B);if(Y){const ne=Y[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(R),Object.keys(Y).length===0&&f.delete(B)}i.remove(R)}function M(R){const b=i.get(R);t.deleteTexture(b.__webglTexture);const B=R.source,Y=f.get(B);delete Y[b.__cacheKey],o.memory.textures--}function I(R){const b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let ne=0;ne<b.__webglFramebuffer[Y].length;ne++)t.deleteFramebuffer(b.__webglFramebuffer[Y][ne]);else t.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)t.deleteFramebuffer(b.__webglFramebuffer[Y]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=R.textures;for(let Y=0,ne=B.length;Y<ne;Y++){const j=i.get(B[Y]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(B[Y])}i.remove(R)}let L=0;function F(){L=0}function k(){const R=L;return R>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function V(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function U(R,b){const B=i.get(R);if(R.isVideoTexture&&fe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const Y=R.image;if(Y===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{le(B,R,b);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+b)}function T(R,b){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){le(B,R,b);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+b)}function w(R,b){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){le(B,R,b);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+b)}function H(R,b){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){ye(B,R,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+b)}const X={[Ru]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[Cu]:t.MIRRORED_REPEAT},oe={[Wt]:t.NEAREST,[XP]:t.NEAREST_MIPMAP_NEAREST,[Ko]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[hc]:t.LINEAR_MIPMAP_NEAREST,[Ps]:t.LINEAR_MIPMAP_LINEAR},de={[jP]:t.NEVER,[e2]:t.ALWAYS,[KP]:t.LESS,[Qf]:t.LEQUAL,[JP]:t.EQUAL,[ed]:t.GEQUAL,[ZP]:t.GREATER,[QP]:t.NOTEQUAL};function ge(R,b){if(b.type===oi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Qt||b.magFilter===hc||b.magFilter===Ko||b.magFilter===Ps||b.minFilter===Qt||b.minFilter===hc||b.minFilter===Ko||b.minFilter===Ps)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,X[b.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,X[b.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,X[b.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,oe[b.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,oe[b.minFilter]),b.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,de[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Wt||b.minFilter!==Ko&&b.minFilter!==Ps||b.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ge(R,b){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P));const Y=b.source;let ne=f.get(Y);ne===void 0&&(ne={},f.set(Y,ne));const j=V(b);if(j!==R.__cacheKey){ne[j]===void 0&&(ne[j]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[j].usedTimes++;const Te=ne[R.__cacheKey];Te!==void 0&&(ne[R.__cacheKey].usedTimes--,Te.usedTimes===0&&M(b)),R.__cacheKey=j,R.__webglTexture=ne[j].texture}return B}function dt(R,b,B){return Math.floor(Math.floor(R/B)/b)}function pt(R,b,B,Y){const j=R.updateRanges;if(j.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,B,Y,b.data);else{j.sort((me,xe)=>me.start-xe.start);let Te=0;for(let me=1;me<j.length;me++){const xe=j[Te],Ae=j[me],Le=xe.start+xe.count,De=dt(Ae.start,b.width,4),Ze=dt(xe.start,b.width,4);Ae.start<=Le+1&&De===Ze&&dt(Ae.start+Ae.count-1,b.width,4)===De?xe.count=Math.max(xe.count,Ae.start+Ae.count-xe.start):(++Te,j[Te]=Ae)}j.length=Te+1;const _e=t.getParameter(t.UNPACK_ROW_LENGTH),Ne=t.getParameter(t.UNPACK_SKIP_PIXELS),Be=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let me=0,xe=j.length;me<xe;me++){const Ae=j[me],Le=Math.floor(Ae.start/4),De=Math.ceil(Ae.count/4),Ze=Le%b.width,G=Math.floor(Le/b.width),we=De,Se=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,G),n.texSubImage2D(t.TEXTURE_2D,0,Ze,G,we,Se,B,Y,b.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,_e),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(t.UNPACK_SKIP_ROWS,Be)}}function le(R,b,B){let Y=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=t.TEXTURE_3D);const ne=Ge(R,b),j=b.source;n.bindTexture(Y,R.__webglTexture,t.TEXTURE0+B);const Te=i.get(j);if(j.version!==Te.__version||ne===!0){n.activeTexture(t.TEXTURE0+B);const _e=ct.getPrimaries(ct.workingColorSpace),Ne=b.colorSpace===ss?null:ct.getPrimaries(b.colorSpace),Be=b.colorSpace===ss||_e===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let me=v(b.image,!1,s.maxTextureSize);me=re(b,me);const xe=r.convert(b.format,b.colorSpace),Ae=r.convert(b.type);let Le=E(b.internalFormat,xe,Ae,b.colorSpace,b.isVideoTexture);ge(Y,b);let De;const Ze=b.mipmaps,G=b.isVideoTexture!==!0,we=Te.__version===void 0||ne===!0,Se=j.dataReady,Ue=A(b,me);if(b.isDepthTexture)Le=S(b.format===Ls,b.type),we&&(G?n.texStorage2D(t.TEXTURE_2D,1,Le,me.width,me.height):n.texImage2D(t.TEXTURE_2D,0,Le,me.width,me.height,0,xe,Ae,null));else if(b.isDataTexture)if(Ze.length>0){G&&we&&n.texStorage2D(t.TEXTURE_2D,Ue,Le,Ze[0].width,Ze[0].height);for(let ve=0,se=Ze.length;ve<se;ve++)De=Ze[ve],G?Se&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,De.width,De.height,xe,Ae,De.data):n.texImage2D(t.TEXTURE_2D,ve,Le,De.width,De.height,0,xe,Ae,De.data);b.generateMipmaps=!1}else G?(we&&n.texStorage2D(t.TEXTURE_2D,Ue,Le,me.width,me.height),Se&&pt(b,me,xe,Ae)):n.texImage2D(t.TEXTURE_2D,0,Le,me.width,me.height,0,xe,Ae,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){G&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ue,Le,Ze[0].width,Ze[0].height,me.depth);for(let ve=0,se=Ze.length;ve<se;ve++)if(De=Ze[ve],b.format!==Gn)if(xe!==null)if(G){if(Se)if(b.layerUpdates.size>0){const Fe=Ep(De.width,De.height,b.format,b.type);for(const Je of b.layerUpdates){const bt=De.data.subarray(Je*Fe/De.data.BYTES_PER_ELEMENT,(Je+1)*Fe/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,Je,De.width,De.height,1,xe,bt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,De.width,De.height,me.depth,xe,De.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ve,Le,De.width,De.height,me.depth,0,De.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Se&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,De.width,De.height,me.depth,xe,Ae,De.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ve,Le,De.width,De.height,me.depth,0,xe,Ae,De.data)}else{G&&we&&n.texStorage2D(t.TEXTURE_2D,Ue,Le,Ze[0].width,Ze[0].height);for(let ve=0,se=Ze.length;ve<se;ve++)De=Ze[ve],b.format!==Gn?xe!==null?G?Se&&n.compressedTexSubImage2D(t.TEXTURE_2D,ve,0,0,De.width,De.height,xe,De.data):n.compressedTexImage2D(t.TEXTURE_2D,ve,Le,De.width,De.height,0,De.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Se&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,De.width,De.height,xe,Ae,De.data):n.texImage2D(t.TEXTURE_2D,ve,Le,De.width,De.height,0,xe,Ae,De.data)}else if(b.isDataArrayTexture)if(G){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ue,Le,me.width,me.height,me.depth),Se)if(b.layerUpdates.size>0){const ve=Ep(me.width,me.height,b.format,b.type);for(const se of b.layerUpdates){const Fe=me.data.subarray(se*ve/me.data.BYTES_PER_ELEMENT,(se+1)*ve/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,me.width,me.height,1,xe,Ae,Fe)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,xe,Ae,me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,me.width,me.height,me.depth,0,xe,Ae,me.data);else if(b.isData3DTexture)G?(we&&n.texStorage3D(t.TEXTURE_3D,Ue,Le,me.width,me.height,me.depth),Se&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,xe,Ae,me.data)):n.texImage3D(t.TEXTURE_3D,0,Le,me.width,me.height,me.depth,0,xe,Ae,me.data);else if(b.isFramebufferTexture){if(we)if(G)n.texStorage2D(t.TEXTURE_2D,Ue,Le,me.width,me.height);else{let ve=me.width,se=me.height;for(let Fe=0;Fe<Ue;Fe++)n.texImage2D(t.TEXTURE_2D,Fe,Le,ve,se,0,xe,Ae,null),ve>>=1,se>>=1}}else if(Ze.length>0){if(G&&we){const ve=he(Ze[0]);n.texStorage2D(t.TEXTURE_2D,Ue,Le,ve.width,ve.height)}for(let ve=0,se=Ze.length;ve<se;ve++)De=Ze[ve],G?Se&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,xe,Ae,De):n.texImage2D(t.TEXTURE_2D,ve,Le,xe,Ae,De);b.generateMipmaps=!1}else if(G){if(we){const ve=he(me);n.texStorage2D(t.TEXTURE_2D,Ue,Le,ve.width,ve.height)}Se&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ae,me)}else n.texImage2D(t.TEXTURE_2D,0,Le,xe,Ae,me);p(b)&&m(Y),Te.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ye(R,b,B){if(b.image.length!==6)return;const Y=Ge(R,b),ne=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const j=i.get(ne);if(ne.version!==j.__version||Y===!0){n.activeTexture(t.TEXTURE0+B);const Te=ct.getPrimaries(ct.workingColorSpace),_e=b.colorSpace===ss?null:ct.getPrimaries(b.colorSpace),Ne=b.colorSpace===ss||Te===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Be=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,xe=[];for(let se=0;se<6;se++)!Be&&!me?xe[se]=v(b.image[se],!0,s.maxCubemapSize):xe[se]=me?b.image[se].image:b.image[se],xe[se]=re(b,xe[se]);const Ae=xe[0],Le=r.convert(b.format,b.colorSpace),De=r.convert(b.type),Ze=E(b.internalFormat,Le,De,b.colorSpace),G=b.isVideoTexture!==!0,we=j.__version===void 0||Y===!0,Se=ne.dataReady;let Ue=A(b,Ae);ge(t.TEXTURE_CUBE_MAP,b);let ve;if(Be){G&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,Ze,Ae.width,Ae.height);for(let se=0;se<6;se++){ve=xe[se].mipmaps;for(let Fe=0;Fe<ve.length;Fe++){const Je=ve[Fe];b.format!==Gn?Le!==null?G?Se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,Je.width,Je.height,Le,Je.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,Ze,Je.width,Je.height,0,Je.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,Je.width,Je.height,Le,De,Je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,Ze,Je.width,Je.height,0,Le,De,Je.data)}}}else{if(ve=b.mipmaps,G&&we){ve.length>0&&Ue++;const se=he(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,Ze,se.width,se.height)}for(let se=0;se<6;se++)if(me){G?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,xe[se].width,xe[se].height,Le,De,xe[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,xe[se].width,xe[se].height,0,Le,De,xe[se].data);for(let Fe=0;Fe<ve.length;Fe++){const bt=ve[Fe].image[se].image;G?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,bt.width,bt.height,Le,De,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,Ze,bt.width,bt.height,0,Le,De,bt.data)}}else{G?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,De,xe[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,Le,De,xe[se]);for(let Fe=0;Fe<ve.length;Fe++){const Je=ve[Fe];G?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,Le,De,Je.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,Ze,Le,De,Je.image[se])}}}p(b)&&m(t.TEXTURE_CUBE_MAP),j.__version=ne.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Me(R,b,B,Y,ne,j){const Te=r.convert(B.format,B.colorSpace),_e=r.convert(B.type),Ne=E(B.internalFormat,Te,_e,B.colorSpace),Be=i.get(b),me=i.get(B);if(me.__renderTarget=b,!Be.__hasExternalTextures){const xe=Math.max(1,b.width>>j),Ae=Math.max(1,b.height>>j);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,j,Ne,xe,Ae,b.depth,0,Te,_e,null):n.texImage2D(ne,j,Ne,xe,Ae,0,Te,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),pe(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ne,me.__webglTexture,0,N(b)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ne,me.__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ke(R,b,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),b.depthBuffer){const Y=b.depthTexture,ne=Y&&Y.isDepthTexture?Y.type:null,j=S(b.stencilBuffer,ne),Te=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;pe(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,N(b),j,b.width,b.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,N(b),j,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,j,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,R)}else{const Y=b.textures;for(let ne=0;ne<Y.length;ne++){const j=Y[ne],Te=r.convert(j.format,j.colorSpace),_e=r.convert(j.type),Ne=E(j.internalFormat,Te,_e,j.colorSpace);pe(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,N(b),Ne,b.width,b.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,N(b),Ne,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Ne,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(R,b,B){const Y=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(b.depthTexture);if(ne.__renderTarget=b,(!ne.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),ge(t.TEXTURE_CUBE_MAP,b.depthTexture);const Be=r.convert(b.depthTexture.format),me=r.convert(b.depthTexture.type);let xe;b.depthTexture.format===Wi?xe=t.DEPTH_COMPONENT24:b.depthTexture.format===Ls&&(xe=t.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,xe,b.width,b.height,0,Be,me,null)}}else U(b.depthTexture,0);const j=ne.__webglTexture,Te=N(b),_e=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,Ne=b.depthTexture.format===Ls?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===Wi)pe(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ne,_e,j,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Ne,_e,j,0);else if(b.depthTexture.format===Ls)pe(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ne,_e,j,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Ne,_e,j,0);else throw new Error("Unknown depthTexture format")}function qe(R){const b=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",ne)};Y.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=Y}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let Y=0;Y<6;Y++)He(b.__webglFramebuffer[Y],R,Y);else{const Y=R.texture.mipmaps;Y&&Y.length>0?He(b.__webglFramebuffer[0],R,0):He(b.__webglFramebuffer,R,0)}else if(B){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=t.createRenderbuffer(),Ke(b.__webglDepthbuffer[Y],R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,j)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),Ke(b.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,j)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function O(R,b,B){const Y=i.get(R);b!==void 0&&Me(Y.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&qe(R)}function z(R){const b=R.texture,B=i.get(R),Y=i.get(b);R.addEventListener("dispose",D);const ne=R.textures,j=R.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=b.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[_e]=[];for(let Ne=0;Ne<b.mipmaps.length;Ne++)B.__webglFramebuffer[_e][Ne]=t.createFramebuffer()}else B.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let _e=0;_e<b.mipmaps.length;_e++)B.__webglFramebuffer[_e]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Te)for(let _e=0,Ne=ne.length;_e<Ne;_e++){const Be=i.get(ne[_e]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&pe(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _e=0;_e<ne.length;_e++){const Ne=ne[_e];B.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[_e]);const Be=r.convert(Ne.format,Ne.colorSpace),me=r.convert(Ne.type),xe=E(Ne.internalFormat,Be,me,Ne.colorSpace,R.isXRRenderTarget===!0),Ae=N(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,B.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ke(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),ge(t.TEXTURE_CUBE_MAP,b);for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ne=0;Ne<b.mipmaps.length;Ne++)Me(B.__webglFramebuffer[_e][Ne],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne);else Me(B.__webglFramebuffer[_e],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);p(b)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let _e=0,Ne=ne.length;_e<Ne;_e++){const Be=ne[_e],me=i.get(Be);let xe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,me.__webglTexture),ge(xe,Be),Me(B.__webglFramebuffer,R,Be,t.COLOR_ATTACHMENT0+_e,xe,0),p(Be)&&m(xe)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,Y.__webglTexture),ge(_e,b),b.mipmaps&&b.mipmaps.length>0)for(let Ne=0;Ne<b.mipmaps.length;Ne++)Me(B.__webglFramebuffer[Ne],R,b,t.COLOR_ATTACHMENT0,_e,Ne);else Me(B.__webglFramebuffer,R,b,t.COLOR_ATTACHMENT0,_e,0);p(b)&&m(_e),n.unbindTexture()}R.depthBuffer&&qe(R)}function q(R){const b=R.textures;for(let B=0,Y=b.length;B<Y;B++){const ne=b[B];if(p(ne)){const j=x(R),Te=i.get(ne).__webglTexture;n.bindTexture(j,Te),m(j),n.unbindTexture()}}}const ae=[],ee=[];function ce(R){if(R.samples>0){if(pe(R)===!1){const b=R.textures,B=R.width,Y=R.height;let ne=t.COLOR_BUFFER_BIT;const j=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(R),_e=b.length>1;if(_e)for(let Be=0;Be<b.length;Be++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Ne=R.texture.mipmaps;Ne&&Ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Be=0;Be<b.length;Be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),_e){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Be]);const me=i.get(b[Be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,me,0)}t.blitFramebuffer(0,0,B,Y,0,0,B,Y,ne,t.NEAREST),c===!0&&(ae.length=0,ee.length=0,ae.push(t.COLOR_ATTACHMENT0+Be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ae.push(j),ee.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ee)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let Be=0;Be<b.length;Be++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Be]);const me=i.get(b[Be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const b=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function N(R){return Math.min(s.maxSamples,R.samples)}function pe(R){const b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function fe(R){const b=o.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function re(R,b){const B=R.colorSpace,Y=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Mr&&B!==ss&&(ct.getTransfer(B)===_t?(Y!==Gn||ne!==En)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",B)),b}function he(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=U,this.setTexture2DArray=T,this.setTexture3D=w,this.setTextureCube=H,this.rebindTextures=O,this.setupRenderTarget=z,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function RU(t,e){function n(i,s=ss){let r;const o=ct.getTransfer(s);if(i===En)return t.UNSIGNED_BYTE;if(i===Yf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===jf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===T_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===A_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===E_)return t.BYTE;if(i===w_)return t.SHORT;if(i===vo)return t.UNSIGNED_SHORT;if(i===qf)return t.INT;if(i===mi)return t.UNSIGNED_INT;if(i===oi)return t.FLOAT;if(i===Gi)return t.HALF_FLOAT;if(i===R_)return t.ALPHA;if(i===C_)return t.RGB;if(i===Gn)return t.RGBA;if(i===Wi)return t.DEPTH_COMPONENT;if(i===Ls)return t.DEPTH_STENCIL;if(i===P_)return t.RED;if(i===Kf)return t.RED_INTEGER;if(i===Sr)return t.RG;if(i===Jf)return t.RG_INTEGER;if(i===Zf)return t.RGBA_INTEGER;if(i===Na||i===Ua||i===Fa||i===Oa)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pu||i===Lu||i===Du||i===Iu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Pu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Du)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Iu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nu||i===Uu||i===Fu||i===Ou||i===Bu||i===ku||i===zu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Nu||i===Uu)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ou)return r.COMPRESSED_R11_EAC;if(i===Bu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ku)return r.COMPRESSED_RG11_EAC;if(i===zu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vu||i===Hu||i===Gu||i===Wu||i===$u||i===Xu||i===qu||i===Yu||i===ju||i===Ku||i===Ju||i===Zu||i===Qu||i===ef)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$u)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ju)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ku)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ju)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ef)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tf||i===nf||i===sf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===tf)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rf||i===of||i===af||i===lf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===rf)return r.COMPRESSED_RED_RGTC1_EXT;if(i===of)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===af)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const CU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PU=`
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

}`;class LU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new V_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new _i({vertexShader:CU,fragmentShader:PU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new An(new kl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DU extends Tr{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null;const v=typeof XRWebGLBinding<"u",p=new LU,m={},x=n.getContextAttributes();let E=null,S=null;const A=[],P=[],D=new lt;let y=null;const M=new bn;M.viewport=new Lt;const I=new bn;I.viewport=new Lt;const L=[M,I],F=new W2;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let ye=A[le];return ye===void 0&&(ye=new Sc,A[le]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(le){let ye=A[le];return ye===void 0&&(ye=new Sc,A[le]=ye),ye.getGripSpace()},this.getHand=function(le){let ye=A[le];return ye===void 0&&(ye=new Sc,A[le]=ye),ye.getHandSpace()};function U(le){const ye=P.indexOf(le.inputSource);if(ye===-1)return;const Me=A[ye];Me!==void 0&&(Me.update(le.inputSource,le.frame,l||o),Me.dispatchEvent({type:le.type,data:le.inputSource}))}function T(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",T),s.removeEventListener("inputsourceschange",w);for(let le=0;le<A.length;le++){const ye=P[le];ye!==null&&(P[le]=null,A[le].disconnect(ye))}k=null,V=null,p.reset();for(const le in m)delete m[le];e.setRenderTarget(E),h=null,f=null,d=null,s=null,S=null,pt.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(le){l=le},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",T),s.addEventListener("inputsourceschange",w),x.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ke=null,He=null;x.depth&&(He=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=x.stencil?Ls:Wi,Ke=x.stencil?xo:mi);const qe={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(qe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new hi(f.textureWidth,f.textureHeight,{format:Gn,type:En,depthTexture:new So(f.textureWidth,f.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,Me),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new hi(h.framebufferWidth,h.framebufferHeight,{format:Gn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function w(le){for(let ye=0;ye<le.removed.length;ye++){const Me=le.removed[ye],Ke=P.indexOf(Me);Ke>=0&&(P[Ke]=null,A[Ke].disconnect(Me))}for(let ye=0;ye<le.added.length;ye++){const Me=le.added[ye];let Ke=P.indexOf(Me);if(Ke===-1){for(let qe=0;qe<A.length;qe++)if(qe>=P.length){P.push(Me),Ke=qe;break}else if(P[qe]===null){P[qe]=Me,Ke=qe;break}if(Ke===-1)break}const He=A[Ke];He&&He.connect(Me)}}const H=new $,X=new $;function oe(le,ye,Me){H.setFromMatrixPosition(ye.matrixWorld),X.setFromMatrixPosition(Me.matrixWorld);const Ke=H.distanceTo(X),He=ye.projectionMatrix.elements,qe=Me.projectionMatrix.elements,O=He[14]/(He[10]-1),z=He[14]/(He[10]+1),q=(He[9]+1)/He[5],ae=(He[9]-1)/He[5],ee=(He[8]-1)/He[0],ce=(qe[8]+1)/qe[0],N=O*ee,pe=O*ce,fe=Ke/(-ee+ce),re=fe*-ee;if(ye.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(re),le.translateZ(fe),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),He[10]===-1)le.projectionMatrix.copy(ye.projectionMatrix),le.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const he=O+fe,R=z+fe,b=N-re,B=pe+(Ke-re),Y=q*z/R*he,ne=ae*z/R*he;le.projectionMatrix.makePerspective(b,B,Y,ne,he,R),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function de(le,ye){ye===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(ye.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let ye=le.near,Me=le.far;p.texture!==null&&(p.depthNear>0&&(ye=p.depthNear),p.depthFar>0&&(Me=p.depthFar)),F.near=I.near=M.near=ye,F.far=I.far=M.far=Me,(k!==F.near||V!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,V=F.far),F.layers.mask=le.layers.mask|6,M.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;const Ke=le.parent,He=F.cameras;de(F,Ke);for(let qe=0;qe<He.length;qe++)de(He[qe],Ke);He.length===2?oe(F,M,I):F.projectionMatrix.copy(M.projectionMatrix),ge(le,F,Ke)};function ge(le,ye,Me){Me===null?le.matrix.copy(ye.matrixWorld):(le.matrix.copy(Me.matrixWorld),le.matrix.invert(),le.matrix.multiply(ye.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(ye.projectionMatrix),le.projectionMatrixInverse.copy(ye.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=cf*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(le){c=le,f!==null&&(f.fixedFoveation=le),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=le)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(le){return m[le]};let Ge=null;function dt(le,ye){if(u=ye.getViewerPose(l||o),g=ye,u!==null){const Me=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Ke=!1;Me.length!==F.cameras.length&&(F.cameras.length=0,Ke=!0);for(let z=0;z<Me.length;z++){const q=Me[z];let ae=null;if(h!==null)ae=h.getViewport(q);else{const ce=d.getViewSubImage(f,q);ae=ce.viewport,z===0&&(e.setRenderTargetTextures(S,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(S))}let ee=L[z];ee===void 0&&(ee=new bn,ee.layers.enable(z),ee.viewport=new Lt,L[z]=ee),ee.matrix.fromArray(q.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(q.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ae.x,ae.y,ae.width,ae.height),z===0&&(F.matrix.copy(ee.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ke===!0&&F.cameras.push(ee)}const He=s.enabledFeatures;if(He&&He.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const z=d.getDepthInformation(Me[0]);z&&z.isValid&&z.texture&&p.init(z,s.renderState)}if(He&&He.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let z=0;z<Me.length;z++){const q=Me[z].camera;if(q){let ae=m[q];ae||(ae=new V_,m[q]=ae);const ee=d.getCameraImage(q);ae.sourceTexture=ee}}}}for(let Me=0;Me<A.length;Me++){const Ke=P[Me],He=A[Me];Ke!==null&&He!==void 0&&He.update(Ke,ye,l||o)}Ge&&Ge(le,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),g=null}const pt=new X_;pt.setAnimationLoop(dt),this.setAnimationLoop=function(le){Ge=le},this.dispose=function(){}}}const Ss=new gi,IU=new At;function NU(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,H_(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,E,S){m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,x,E):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_n&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_n&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),E=x.envMap,S=x.envMapRotation;E&&(p.envMap.value=E,Ss.copy(S),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),p.envMapRotation.value.setFromMatrix4(IU.makeRotationFromEuler(Ss)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=E*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function UU(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,E){const S=E.program;i.uniformBlockBinding(x,S)}function l(x,E){let S=s[x.id];S===void 0&&(g(x),S=u(x),s[x.id]=S,x.addEventListener("dispose",p));const A=E.program;i.updateUBOMapping(x,A);const P=e.render.frame;r[x.id]!==P&&(f(x),r[x.id]=P)}function u(x){const E=d();x.__bindingPointIndex=E;const S=t.createBuffer(),A=x.__size,P=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,S),S}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const E=s[x.id],S=x.uniforms,A=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let P=0,D=S.length;P<D;P++){const y=Array.isArray(S[P])?S[P]:[S[P]];for(let M=0,I=y.length;M<I;M++){const L=y[M];if(h(L,P,M,A)===!0){const F=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let U=0;U<k.length;U++){const T=k[U],w=v(T);typeof T=="number"||typeof T=="boolean"?(L.__data[0]=T,t.bufferSubData(t.UNIFORM_BUFFER,F+V,L.__data)):T.isMatrix3?(L.__data[0]=T.elements[0],L.__data[1]=T.elements[1],L.__data[2]=T.elements[2],L.__data[3]=0,L.__data[4]=T.elements[3],L.__data[5]=T.elements[4],L.__data[6]=T.elements[5],L.__data[7]=0,L.__data[8]=T.elements[6],L.__data[9]=T.elements[7],L.__data[10]=T.elements[8],L.__data[11]=0):(T.toArray(L.__data,V),V+=w.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(x,E,S,A){const P=x.value,D=E+"_"+S;if(A[D]===void 0)return typeof P=="number"||typeof P=="boolean"?A[D]=P:A[D]=P.clone(),!0;{const y=A[D];if(typeof P=="number"||typeof P=="boolean"){if(y!==P)return A[D]=P,!0}else if(y.equals(P)===!1)return y.copy(P),!0}return!1}function g(x){const E=x.uniforms;let S=0;const A=16;for(let D=0,y=E.length;D<y;D++){const M=Array.isArray(E[D])?E[D]:[E[D]];for(let I=0,L=M.length;I<L;I++){const F=M[I],k=Array.isArray(F.value)?F.value:[F.value];for(let V=0,U=k.length;V<U;V++){const T=k[V],w=v(T),H=S%A,X=H%w.boundary,oe=H+X;S+=X,oe!==0&&A-oe<w.storage&&(S+=A-oe),F.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=w.storage}}}const P=S%A;return P>0&&(S+=A-P),x.__size=S,x.__cache={},this}function v(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",x),E}function p(x){const E=x.target;E.removeEventListener("dispose",p);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const x in s)t.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}const FU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qn=null;function OU(){return Qn===null&&(Qn=new w2(FU,16,16,Sr,Gi),Qn.name="DFG_LUT",Qn.minFilter=Qt,Qn.magFilter=Qt,Qn.wrapS=Fi,Qn.wrapT=Fi,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class BU{constructor(e={}){const{canvas:n=n2(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=En}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=h,p=new Set([Zf,Jf,Kf]),m=new Set([En,mi,vo,xo,Yf,jf]),x=new Uint32Array(4),E=new Int32Array(4);let S=null,A=null;const P=[],D=[];let y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let I=!1;this._outputColorSpace=Nn;let L=0,F=0,k=null,V=-1,U=null;const T=new Lt,w=new Lt;let H=null;const X=new it(0);let oe=0,de=n.width,ge=n.height,Ge=1,dt=null,pt=null;const le=new Lt(0,0,de,ge),ye=new Lt(0,0,de,ge);let Me=!1;const Ke=new rd;let He=!1,qe=!1;const O=new At,z=new $,q=new Lt,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function ce(){return k===null?Ge:1}let N=i;function pe(C,W){return n.getContext(C,W)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$f}`),n.addEventListener("webglcontextlost",Fe,!1),n.addEventListener("webglcontextrestored",Je,!1),n.addEventListener("webglcontextcreationerror",bt,!1),N===null){const W="webgl2";if(N=pe(W,C),N===null)throw pe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw ft("WebGLRenderer: "+C.message),C}let fe,re,he,R,b,B,Y,ne,j,Te,_e,Ne,Be,me,xe,Ae,Le,De,Ze,G,we,Se,Ue;function ve(){fe=new BI(N),fe.init(),we=new RU(N,fe),re=new PI(N,fe,e,we),he=new TU(N,fe),re.reversedDepthBuffer&&f&&he.buffers.depth.setReversed(!0),R=new VI(N),b=new dU,B=new AU(N,fe,he,b,re,we,R),Y=new OI(M),ne=new X2(N),Se=new RI(N,ne),j=new kI(N,ne,R,Se),Te=new GI(N,j,ne,Se,R),De=new HI(N,re,B),xe=new LI(b),_e=new fU(M,Y,fe,re,Se,xe),Ne=new NU(M,b),Be=new pU,me=new yU(fe),Le=new AI(M,Y,he,Te,g,c),Ae=new wU(M,Te,re),Ue=new UU(N,R,re,he),Ze=new CI(N,fe,R),G=new zI(N,fe,R),R.programs=_e.programs,M.capabilities=re,M.extensions=fe,M.properties=b,M.renderLists=Be,M.shadowMap=Ae,M.state=he,M.info=R}ve(),v!==En&&(y=new $I(v,n.width,n.height,s,r));const se=new DU(M,N);this.xr=se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(C){C!==void 0&&(Ge=C,this.setSize(de,ge,!1))},this.getSize=function(C){return C.set(de,ge)},this.setSize=function(C,W,te=!0){if(se.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}de=C,ge=W,n.width=Math.floor(C*Ge),n.height=Math.floor(W*Ge),te===!0&&(n.style.width=C+"px",n.style.height=W+"px"),y!==null&&y.setSize(n.width,n.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(de*Ge,ge*Ge).floor()},this.setDrawingBufferSize=function(C,W,te){de=C,ge=W,Ge=te,n.width=Math.floor(C*te),n.height=Math.floor(W*te),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(v===En){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(le)},this.setViewport=function(C,W,te,J){C.isVector4?le.set(C.x,C.y,C.z,C.w):le.set(C,W,te,J),he.viewport(T.copy(le).multiplyScalar(Ge).round())},this.getScissor=function(C){return C.copy(ye)},this.setScissor=function(C,W,te,J){C.isVector4?ye.set(C.x,C.y,C.z,C.w):ye.set(C,W,te,J),he.scissor(w.copy(ye).multiplyScalar(Ge).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(C){he.setScissorTest(Me=C)},this.setOpaqueSort=function(C){dt=C},this.setTransparentSort=function(C){pt=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,te=!0){let J=0;if(C){let K=!1;if(k!==null){const Ce=k.texture.format;K=p.has(Ce)}if(K){const Ce=k.texture.type,Ie=m.has(Ce),Pe=Le.getClearColor(),Oe=Le.getClearAlpha(),ze=Pe.r,Qe=Pe.g,nt=Pe.b;Ie?(x[0]=ze,x[1]=Qe,x[2]=nt,x[3]=Oe,N.clearBufferuiv(N.COLOR,0,x)):(E[0]=ze,E[1]=Qe,E[2]=nt,E[3]=Oe,N.clearBufferiv(N.COLOR,0,E))}else J|=N.COLOR_BUFFER_BIT}W&&(J|=N.DEPTH_BUFFER_BIT),te&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Fe,!1),n.removeEventListener("webglcontextrestored",Je,!1),n.removeEventListener("webglcontextcreationerror",bt,!1),Le.dispose(),Be.dispose(),me.dispose(),b.dispose(),Y.dispose(),Te.dispose(),Se.dispose(),Ue.dispose(),_e.dispose(),se.dispose(),se.removeEventListener("sessionstart",ld),se.removeEventListener("sessionend",cd),us.stop()};function Fe(C){C.preventDefault(),Qh("WebGLRenderer: Context Lost."),I=!0}function Je(){Qh("WebGLRenderer: Context Restored."),I=!1;const C=R.autoReset,W=Ae.enabled,te=Ae.autoUpdate,J=Ae.needsUpdate,K=Ae.type;ve(),R.autoReset=C,Ae.enabled=W,Ae.autoUpdate=te,Ae.needsUpdate=J,Ae.type=K}function bt(C){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function gt(C){const W=C.target;W.removeEventListener("dispose",gt),yi(W)}function yi(C){Si(C),b.remove(C)}function Si(C){const W=b.get(C).programs;W!==void 0&&(W.forEach(function(te){_e.releaseProgram(te)}),C.isShaderMaterial&&_e.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,te,J,K,Ce){W===null&&(W=ae);const Ie=K.isMesh&&K.matrixWorld.determinant()<0,Pe=e0(C,W,te,J,K);he.setMaterial(J,Ie);let Oe=te.index,ze=1;if(J.wireframe===!0){if(Oe=j.getWireframeAttribute(te),Oe===void 0)return;ze=2}const Qe=te.drawRange,nt=te.attributes.position;let Ve=Qe.start*ze,vt=(Qe.start+Qe.count)*ze;Ce!==null&&(Ve=Math.max(Ve,Ce.start*ze),vt=Math.min(vt,(Ce.start+Ce.count)*ze)),Oe!==null?(Ve=Math.max(Ve,0),vt=Math.min(vt,Oe.count)):nt!=null&&(Ve=Math.max(Ve,0),vt=Math.min(vt,nt.count));const It=vt-Ve;if(It<0||It===1/0)return;Se.setup(K,J,Pe,te,Oe);let Pt,xt=Ze;if(Oe!==null&&(Pt=ne.get(Oe),xt=G,xt.setIndex(Pt)),K.isMesh)J.wireframe===!0?(he.setLineWidth(J.wireframeLinewidth*ce()),xt.setMode(N.LINES)):xt.setMode(N.TRIANGLES);else if(K.isLine){let Xt=J.linewidth;Xt===void 0&&(Xt=1),he.setLineWidth(Xt*ce()),K.isLineSegments?xt.setMode(N.LINES):K.isLineLoop?xt.setMode(N.LINE_LOOP):xt.setMode(N.LINE_STRIP)}else K.isPoints?xt.setMode(N.POINTS):K.isSprite&&xt.setMode(N.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ol("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))xt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Xt=K._multiDrawStarts,ke=K._multiDrawCounts,xn=K._multiDrawCount,ut=Oe?ne.get(Oe).bytesPerElement:1,Un=b.get(J).currentProgram.getUniforms();for(let Kn=0;Kn<xn;Kn++)Un.setValue(N,"_gl_DrawID",Kn),xt.render(Xt[Kn]/ut,ke[Kn])}else if(K.isInstancedMesh)xt.renderInstances(Ve,It,K.count);else if(te.isInstancedBufferGeometry){const Xt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ke=Math.min(te.instanceCount,Xt);xt.renderInstances(Ve,It,ke)}else xt.render(Ve,It)};function ad(C,W,te){C.transparent===!0&&C.side===Ui&&C.forceSinglePass===!1?(C.side=_n,C.needsUpdate=!0,zo(C,W,te),C.side=ls,C.needsUpdate=!0,zo(C,W,te),C.side=Ui):zo(C,W,te)}this.compile=function(C,W,te=null){te===null&&(te=C),A=me.get(te),A.init(W),D.push(A),te.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(A.pushLight(K),K.castShadow&&A.pushShadow(K))}),C!==te&&C.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(A.pushLight(K),K.castShadow&&A.pushShadow(K))}),A.setupLights();const J=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ce=K.material;if(Ce)if(Array.isArray(Ce))for(let Ie=0;Ie<Ce.length;Ie++){const Pe=Ce[Ie];ad(Pe,te,K),J.add(Pe)}else ad(Ce,te,K),J.add(Ce)}),A=D.pop(),J},this.compileAsync=function(C,W,te=null){const J=this.compile(C,W,te);return new Promise(K=>{function Ce(){if(J.forEach(function(Ie){b.get(Ie).currentProgram.isReady()&&J.delete(Ie)}),J.size===0){K(C);return}setTimeout(Ce,10)}fe.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Hl=null;function Q_(C){Hl&&Hl(C)}function ld(){us.stop()}function cd(){us.start()}const us=new X_;us.setAnimationLoop(Q_),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(C){Hl=C,se.setAnimationLoop(C),C===null?us.stop():us.start()},se.addEventListener("sessionstart",ld),se.addEventListener("sessionend",cd),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;const te=se.enabled===!0&&se.isPresenting===!0,J=y!==null&&(k===null||te)&&y.begin(M,k);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(W),W=se.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,W,k),A=me.get(C,D.length),A.init(W),D.push(A),O.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ke.setFromProjectionMatrix(O,ai,W.reversedDepth),qe=this.localClippingEnabled,He=xe.init(this.clippingPlanes,qe),S=Be.get(C,P.length),S.init(),P.push(S),se.enabled===!0&&se.isPresenting===!0){const Ie=M.xr.getDepthSensingMesh();Ie!==null&&Gl(Ie,W,-1/0,M.sortObjects)}Gl(C,W,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(dt,pt),ee=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ee&&Le.addToRenderList(S,C),this.info.render.frame++,He===!0&&xe.beginShadows();const K=A.state.shadowsArray;if(Ae.render(K,C,W),He===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&y.hasRenderPass())===!1){const Ie=S.opaque,Pe=S.transmissive;if(A.setupLights(),W.isArrayCamera){const Oe=W.cameras;if(Pe.length>0)for(let ze=0,Qe=Oe.length;ze<Qe;ze++){const nt=Oe[ze];fd(Ie,Pe,C,nt)}ee&&Le.render(C);for(let ze=0,Qe=Oe.length;ze<Qe;ze++){const nt=Oe[ze];ud(S,C,nt,nt.viewport)}}else Pe.length>0&&fd(Ie,Pe,C,W),ee&&Le.render(C),ud(S,C,W)}k!==null&&F===0&&(B.updateMultisampleRenderTarget(k),B.updateRenderTargetMipmap(k)),J&&y.end(M),C.isScene===!0&&C.onAfterRender(M,C,W),Se.resetDefaultState(),V=-1,U=null,D.pop(),D.length>0?(A=D[D.length-1],He===!0&&xe.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Gl(C,W,te,J){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)A.pushLight(C),C.castShadow&&A.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ke.intersectsSprite(C)){J&&q.setFromMatrixPosition(C.matrixWorld).applyMatrix4(O);const Ie=Te.update(C),Pe=C.material;Pe.visible&&S.push(C,Ie,Pe,te,q.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ke.intersectsObject(C))){const Ie=Te.update(C),Pe=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),q.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),q.copy(Ie.boundingSphere.center)),q.applyMatrix4(C.matrixWorld).applyMatrix4(O)),Array.isArray(Pe)){const Oe=Ie.groups;for(let ze=0,Qe=Oe.length;ze<Qe;ze++){const nt=Oe[ze],Ve=Pe[nt.materialIndex];Ve&&Ve.visible&&S.push(C,Ie,Ve,te,q.z,nt)}}else Pe.visible&&S.push(C,Ie,Pe,te,q.z,null)}}const Ce=C.children;for(let Ie=0,Pe=Ce.length;Ie<Pe;Ie++)Gl(Ce[Ie],W,te,J)}function ud(C,W,te,J){const{opaque:K,transmissive:Ce,transparent:Ie}=C;A.setupLightsView(te),He===!0&&xe.setGlobalState(M.clippingPlanes,te),J&&he.viewport(T.copy(J)),K.length>0&&ko(K,W,te),Ce.length>0&&ko(Ce,W,te),Ie.length>0&&ko(Ie,W,te),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function fd(C,W,te,J){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[J.id]===void 0){const Ve=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[J.id]=new hi(1,1,{generateMipmaps:!0,type:Ve?Gi:En,minFilter:Ps,samples:Math.max(4,re.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Ce=A.state.transmissionRenderTarget[J.id],Ie=J.viewport||T;Ce.setSize(Ie.z*M.transmissionResolutionScale,Ie.w*M.transmissionResolutionScale);const Pe=M.getRenderTarget(),Oe=M.getActiveCubeFace(),ze=M.getActiveMipmapLevel();M.setRenderTarget(Ce),M.getClearColor(X),oe=M.getClearAlpha(),oe<1&&M.setClearColor(16777215,.5),M.clear(),ee&&Le.render(te);const Qe=M.toneMapping;M.toneMapping=di;const nt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),A.setupLightsView(J),He===!0&&xe.setGlobalState(M.clippingPlanes,J),ko(C,te,J),B.updateMultisampleRenderTarget(Ce),B.updateRenderTargetMipmap(Ce),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let vt=0,It=W.length;vt<It;vt++){const Pt=W[vt],{object:xt,geometry:Xt,material:ke,group:xn}=Pt;if(ke.side===Ui&&xt.layers.test(J.layers)){const ut=ke.side;ke.side=_n,ke.needsUpdate=!0,dd(xt,te,J,Xt,ke,xn),ke.side=ut,ke.needsUpdate=!0,Ve=!0}}Ve===!0&&(B.updateMultisampleRenderTarget(Ce),B.updateRenderTargetMipmap(Ce))}M.setRenderTarget(Pe,Oe,ze),M.setClearColor(X,oe),nt!==void 0&&(J.viewport=nt),M.toneMapping=Qe}function ko(C,W,te){const J=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Ce=C.length;K<Ce;K++){const Ie=C[K],{object:Pe,geometry:Oe,group:ze}=Ie;let Qe=Ie.material;Qe.allowOverride===!0&&J!==null&&(Qe=J),Pe.layers.test(te.layers)&&dd(Pe,W,te,Oe,Qe,ze)}}function dd(C,W,te,J,K,Ce){C.onBeforeRender(M,W,te,J,K,Ce),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(M,W,te,J,C,Ce),K.transparent===!0&&K.side===Ui&&K.forceSinglePass===!1?(K.side=_n,K.needsUpdate=!0,M.renderBufferDirect(te,W,J,K,C,Ce),K.side=ls,K.needsUpdate=!0,M.renderBufferDirect(te,W,J,K,C,Ce),K.side=Ui):M.renderBufferDirect(te,W,J,K,C,Ce),C.onAfterRender(M,W,te,J,K,Ce)}function zo(C,W,te){W.isScene!==!0&&(W=ae);const J=b.get(C),K=A.state.lights,Ce=A.state.shadowsArray,Ie=K.state.version,Pe=_e.getParameters(C,K.state,Ce,W,te),Oe=_e.getProgramCacheKey(Pe);let ze=J.programs;J.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,J.fog=W.fog;const Qe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;J.envMap=Y.get(C.envMap||J.environment,Qe),J.envMapRotation=J.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,ze===void 0&&(C.addEventListener("dispose",gt),ze=new Map,J.programs=ze);let nt=ze.get(Oe);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===Ie)return pd(C,Pe),nt}else Pe.uniforms=_e.getUniforms(C),C.onBeforeCompile(Pe,M),nt=_e.acquireProgram(Pe,Oe),ze.set(Oe,nt),J.uniforms=Pe.uniforms;const Ve=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=xe.uniform),pd(C,Pe),J.needsLights=n0(C),J.lightsStateVersion=Ie,J.needsLights&&(Ve.ambientLightColor.value=K.state.ambient,Ve.lightProbe.value=K.state.probe,Ve.directionalLights.value=K.state.directional,Ve.directionalLightShadows.value=K.state.directionalShadow,Ve.spotLights.value=K.state.spot,Ve.spotLightShadows.value=K.state.spotShadow,Ve.rectAreaLights.value=K.state.rectArea,Ve.ltc_1.value=K.state.rectAreaLTC1,Ve.ltc_2.value=K.state.rectAreaLTC2,Ve.pointLights.value=K.state.point,Ve.pointLightShadows.value=K.state.pointShadow,Ve.hemisphereLights.value=K.state.hemi,Ve.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ve.spotLightMatrix.value=K.state.spotLightMatrix,Ve.spotLightMap.value=K.state.spotLightMap,Ve.pointShadowMatrix.value=K.state.pointShadowMatrix),J.currentProgram=nt,J.uniformsList=null,nt}function hd(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Ba.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function pd(C,W){const te=b.get(C);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function e0(C,W,te,J,K){W.isScene!==!0&&(W=ae),B.resetTextureUnits();const Ce=W.fog,Ie=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?W.environment:null,Pe=k===null?M.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Mr,Oe=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,ze=Y.get(J.envMap||Ie,Oe),Qe=J.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,nt=!!te.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ve=!!te.morphAttributes.position,vt=!!te.morphAttributes.normal,It=!!te.morphAttributes.color;let Pt=di;J.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Pt=M.toneMapping);const xt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Xt=xt!==void 0?xt.length:0,ke=b.get(J),xn=A.state.lights;if(He===!0&&(qe===!0||C!==U)){const zt=C===U&&J.id===V;xe.setState(J,C,zt)}let ut=!1;J.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==xn.state.version||ke.outputColorSpace!==Pe||K.isBatchedMesh&&ke.batching===!1||!K.isBatchedMesh&&ke.batching===!0||K.isBatchedMesh&&ke.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ke.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ke.instancing===!1||!K.isInstancedMesh&&ke.instancing===!0||K.isSkinnedMesh&&ke.skinning===!1||!K.isSkinnedMesh&&ke.skinning===!0||K.isInstancedMesh&&ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ke.instancingMorph===!1&&K.morphTexture!==null||ke.envMap!==ze||J.fog===!0&&ke.fog!==Ce||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==xe.numPlanes||ke.numIntersection!==xe.numIntersection)||ke.vertexAlphas!==Qe||ke.vertexTangents!==nt||ke.morphTargets!==Ve||ke.morphNormals!==vt||ke.morphColors!==It||ke.toneMapping!==Pt||ke.morphTargetsCount!==Xt)&&(ut=!0):(ut=!0,ke.__version=J.version);let Un=ke.currentProgram;ut===!0&&(Un=zo(J,W,K));let Kn=!1,fs=!1,Vs=!1;const St=Un.getUniforms(),Gt=ke.uniforms;if(he.useProgram(Un.program)&&(Kn=!0,fs=!0,Vs=!0),J.id!==V&&(V=J.id,fs=!0),Kn||U!==C){he.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),St.setValue(N,"projectionMatrix",C.projectionMatrix),St.setValue(N,"viewMatrix",C.matrixWorldInverse);const qi=St.map.cameraPosition;qi!==void 0&&qi.setValue(N,z.setFromMatrixPosition(C.matrixWorld)),re.logarithmicDepthBuffer&&St.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&St.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),U!==C&&(U=C,fs=!0,Vs=!0)}if(ke.needsLights&&(xn.state.directionalShadowMap.length>0&&St.setValue(N,"directionalShadowMap",xn.state.directionalShadowMap,B),xn.state.spotShadowMap.length>0&&St.setValue(N,"spotShadowMap",xn.state.spotShadowMap,B),xn.state.pointShadowMap.length>0&&St.setValue(N,"pointShadowMap",xn.state.pointShadowMap,B)),K.isSkinnedMesh){St.setOptional(N,K,"bindMatrix"),St.setOptional(N,K,"bindMatrixInverse");const zt=K.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),St.setValue(N,"boneTexture",zt.boneTexture,B))}K.isBatchedMesh&&(St.setOptional(N,K,"batchingTexture"),St.setValue(N,"batchingTexture",K._matricesTexture,B),St.setOptional(N,K,"batchingIdTexture"),St.setValue(N,"batchingIdTexture",K._indirectTexture,B),St.setOptional(N,K,"batchingColorTexture"),K._colorsTexture!==null&&St.setValue(N,"batchingColorTexture",K._colorsTexture,B));const Xi=te.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&De.update(K,te,Un),(fs||ke.receiveShadow!==K.receiveShadow)&&(ke.receiveShadow=K.receiveShadow,St.setValue(N,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&W.environment!==null&&(Gt.envMapIntensity.value=W.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=OU()),fs&&(St.setValue(N,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&t0(Gt,Vs),Ce&&J.fog===!0&&Ne.refreshFogUniforms(Gt,Ce),Ne.refreshMaterialUniforms(Gt,J,Ge,ge,A.state.transmissionRenderTarget[C.id]),Ba.upload(N,hd(ke),Gt,B)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ba.upload(N,hd(ke),Gt,B),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&St.setValue(N,"center",K.center),St.setValue(N,"modelViewMatrix",K.modelViewMatrix),St.setValue(N,"normalMatrix",K.normalMatrix),St.setValue(N,"modelMatrix",K.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const zt=J.uniformsGroups;for(let qi=0,Hs=zt.length;qi<Hs;qi++){const md=zt[qi];Ue.update(md,Un),Ue.bind(md,Un)}}return Un}function t0(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function n0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,W,te){const J=b.get(C);J.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=W,b.get(C.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:te,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const te=b.get(C);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0};const i0=N.createFramebuffer();this.setRenderTarget=function(C,W=0,te=0){k=C,L=W,F=te;let J=null,K=!1,Ce=!1;if(C){const Pe=b.get(C);if(Pe.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(N.FRAMEBUFFER,Pe.__webglFramebuffer),T.copy(C.viewport),w.copy(C.scissor),H=C.scissorTest,he.viewport(T),he.scissor(w),he.setScissorTest(H),V=-1;return}else if(Pe.__webglFramebuffer===void 0)B.setupRenderTarget(C);else if(Pe.__hasExternalTextures)B.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Qe=C.depthTexture;if(Pe.__boundDepthTexture!==Qe){if(Qe!==null&&b.has(Qe)&&(C.width!==Qe.image.width||C.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(C)}}const Oe=C.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ce=!0);const ze=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[W])?J=ze[W][te]:J=ze[W],K=!0):C.samples>0&&B.useMultisampledRTT(C)===!1?J=b.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?J=ze[te]:J=ze,T.copy(C.viewport),w.copy(C.scissor),H=C.scissorTest}else T.copy(le).multiplyScalar(Ge).floor(),w.copy(ye).multiplyScalar(Ge).floor(),H=Me;if(te!==0&&(J=i0),he.bindFramebuffer(N.FRAMEBUFFER,J)&&he.drawBuffers(C,J),he.viewport(T),he.scissor(w),he.setScissorTest(H),K){const Pe=b.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pe.__webglTexture,te)}else if(Ce){const Pe=W;for(let Oe=0;Oe<C.textures.length;Oe++){const ze=b.get(C.textures[Oe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,te,Pe)}}else if(C!==null&&te!==0){const Pe=b.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pe.__webglTexture,te)}V=-1},this.readRenderTargetPixels=function(C,W,te,J,K,Ce,Ie,Pe=0){if(!(C&&C.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){he.bindFramebuffer(N.FRAMEBUFFER,Oe);try{const ze=C.textures[Pe],Qe=ze.format,nt=ze.type;if(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Pe),!re.textureFormatReadable(Qe)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(nt)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-J&&te>=0&&te<=C.height-K&&N.readPixels(W,te,J,K,we.convert(Qe),we.convert(nt),Ce)}finally{const ze=k!==null?b.get(k).__webglFramebuffer:null;he.bindFramebuffer(N.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,W,te,J,K,Ce,Ie,Pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe)if(W>=0&&W<=C.width-J&&te>=0&&te<=C.height-K){he.bindFramebuffer(N.FRAMEBUFFER,Oe);const ze=C.textures[Pe],Qe=ze.format,nt=ze.type;if(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Pe),!re.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ve),N.bufferData(N.PIXEL_PACK_BUFFER,Ce.byteLength,N.STREAM_READ),N.readPixels(W,te,J,K,we.convert(Qe),we.convert(nt),0);const vt=k!==null?b.get(k).__webglFramebuffer:null;he.bindFramebuffer(N.FRAMEBUFFER,vt);const It=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await i2(N,It,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ve),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ce),N.deleteBuffer(Ve),N.deleteSync(It),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,te=0){const J=Math.pow(2,-te),K=Math.floor(C.image.width*J),Ce=Math.floor(C.image.height*J),Ie=W!==null?W.x:0,Pe=W!==null?W.y:0;B.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,te,0,0,Ie,Pe,K,Ce),he.unbindTexture()};const s0=N.createFramebuffer(),r0=N.createFramebuffer();this.copyTextureToTexture=function(C,W,te=null,J=null,K=0,Ce=0){let Ie,Pe,Oe,ze,Qe,nt,Ve,vt,It;const Pt=C.isCompressedTexture?C.mipmaps[Ce]:C.image;if(te!==null)Ie=te.max.x-te.min.x,Pe=te.max.y-te.min.y,Oe=te.isBox3?te.max.z-te.min.z:1,ze=te.min.x,Qe=te.min.y,nt=te.isBox3?te.min.z:0;else{const Gt=Math.pow(2,-K);Ie=Math.floor(Pt.width*Gt),Pe=Math.floor(Pt.height*Gt),C.isDataArrayTexture?Oe=Pt.depth:C.isData3DTexture?Oe=Math.floor(Pt.depth*Gt):Oe=1,ze=0,Qe=0,nt=0}J!==null?(Ve=J.x,vt=J.y,It=J.z):(Ve=0,vt=0,It=0);const xt=we.convert(W.format),Xt=we.convert(W.type);let ke;W.isData3DTexture?(B.setTexture3D(W,0),ke=N.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(B.setTexture2DArray(W,0),ke=N.TEXTURE_2D_ARRAY):(B.setTexture2D(W,0),ke=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const xn=N.getParameter(N.UNPACK_ROW_LENGTH),ut=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Un=N.getParameter(N.UNPACK_SKIP_PIXELS),Kn=N.getParameter(N.UNPACK_SKIP_ROWS),fs=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Pt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Pt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,Qe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,nt);const Vs=C.isDataArrayTexture||C.isData3DTexture,St=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const Gt=b.get(C),Xi=b.get(W),zt=b.get(Gt.__renderTarget),qi=b.get(Xi.__renderTarget);he.bindFramebuffer(N.READ_FRAMEBUFFER,zt.__webglFramebuffer),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Hs=0;Hs<Oe;Hs++)Vs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,b.get(C).__webglTexture,K,nt+Hs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,b.get(W).__webglTexture,Ce,It+Hs)),N.blitFramebuffer(ze,Qe,Ie,Pe,Ve,vt,Ie,Pe,N.DEPTH_BUFFER_BIT,N.NEAREST);he.bindFramebuffer(N.READ_FRAMEBUFFER,null),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||b.has(C)){const Gt=b.get(C),Xi=b.get(W);he.bindFramebuffer(N.READ_FRAMEBUFFER,s0),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,r0);for(let zt=0;zt<Oe;zt++)Vs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Gt.__webglTexture,K,nt+zt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Gt.__webglTexture,K),St?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Xi.__webglTexture,Ce,It+zt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Xi.__webglTexture,Ce),K!==0?N.blitFramebuffer(ze,Qe,Ie,Pe,Ve,vt,Ie,Pe,N.COLOR_BUFFER_BIT,N.NEAREST):St?N.copyTexSubImage3D(ke,Ce,Ve,vt,It+zt,ze,Qe,Ie,Pe):N.copyTexSubImage2D(ke,Ce,Ve,vt,ze,Qe,Ie,Pe);he.bindFramebuffer(N.READ_FRAMEBUFFER,null),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else St?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(ke,Ce,Ve,vt,It,Ie,Pe,Oe,xt,Xt,Pt.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(ke,Ce,Ve,vt,It,Ie,Pe,Oe,xt,Pt.data):N.texSubImage3D(ke,Ce,Ve,vt,It,Ie,Pe,Oe,xt,Xt,Pt):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ce,Ve,vt,Ie,Pe,xt,Xt,Pt.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ce,Ve,vt,Pt.width,Pt.height,xt,Pt.data):N.texSubImage2D(N.TEXTURE_2D,Ce,Ve,vt,Ie,Pe,xt,Xt,Pt);N.pixelStorei(N.UNPACK_ROW_LENGTH,xn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Un),N.pixelStorei(N.UNPACK_SKIP_ROWS,Kn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,fs),Ce===0&&W.generateMipmaps&&N.generateMipmap(ke),he.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&B.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?B.setTextureCube(C,0):C.isData3DTexture?B.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?B.setTexture2DArray(C,0):B.setTexture2D(C,0),he.unbindTexture()},this.resetState=function(){L=0,F=0,k=null,he.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=ct._getUnpackColorSpace()}}const kU={class:"brain-3d-container"},zU={class:"brain-overlay"},VU={class:"brain-stats"},HU={class:"stat-item"},GU={class:"stat-value"},WU={class:"stat-item"},$U={class:"stat-value"},XU={class:"stat-item"},qU={class:"stat-value"},YU={key:0,class:"loading-overlay"},jU=un({__name:"Brain3D",props:{stats:{}},setup(t){const e=t,n=Ee(),i=Ee(!0),s=Ee(0),r=Ee(0),o=Ee(0);let a=null,c=null,l=null,u=null,d=null,f=null,h=null;const g={storage:4886754,thinking:16098851,skill:8311585};qn(()=>{v()}),To(()=>{D()}),ui(()=>e.stats,y=>{y&&S(y)},{deep:!0});function v(){if(!n.value)return;const y=n.value,M=y.clientWidth,I=y.clientHeight;a=new x2,a.background=new it(1296),a.fog=new nd(1296,.02),c=new bn(60,M/I,.1,1e3),c.position.z=30,l=new BU({antialias:!0,alpha:!0}),l.setSize(M,I),l.setPixelRatio(window.devicePixelRatio),y.appendChild(l.domElement),u=new qr,a.add(u),p(),m(),x(),E(),A(),window.addEventListener("resize",P),i.value=!1}function p(){if(!u)return;const y=new cl(8,2),M=new kc({color:6666,emissive:65345,emissiveIntensity:.1,transparent:!0,opacity:.8,wireframe:!0}),I=new An(y,M);u.add(I);const L=new cl(5,1),F=new kc({color:65345,emissive:65345,emissiveIntensity:.5,transparent:!0,opacity:.3}),k=new An(L,F);u.add(k),[{name:"storage",position:[-6,3,0],color:g.storage},{name:"thinking",position:[6,3,0],color:g.thinking},{name:"skill",position:[0,-5,3],color:g.skill}].forEach(U=>{const T=new ul(2.5,32,32),w=new kc({color:U.color,emissive:U.color,emissiveIntensity:.3,transparent:!0,opacity:.6}),H=new An(T,w);H.position.set(U.position[0],U.position[1],U.position[2]),H.userData={region:U.name},u.add(H);const X=new ul(3,32,32),oe=new sd({color:U.color,transparent:!0,opacity:.1}),de=new An(X,oe);de.position.copy(H.position),u.add(de)})}function m(){if(!u)return;const y=500,M=new cn,I=new Float32Array(y*3),L=new Float32Array(y*3);for(let k=0;k<y;k++){const V=Math.random()*Math.PI*2,U=Math.acos(2*Math.random()-1),T=8+Math.random()*6;I[k*3]=T*Math.sin(U)*Math.cos(V),I[k*3+1]=T*Math.sin(U)*Math.sin(V),I[k*3+2]=T*Math.cos(U);const w=Math.random();let H;w<.33?H=new it(g.storage):w<.66?H=new it(g.thinking):H=new it(g.skill),L[k*3]=H.r,L[k*3+1]=H.g,L[k*3+2]=H.b}M.setAttribute("position",new Cn(I,3)),M.setAttribute("color",new Cn(L,3));const F=new k_({size:.15,vertexColors:!0,transparent:!0,opacity:.8,blending:vu});f=new L2(M,F),u.add(f),s.value=y}function x(){if(!u)return;const y=200,M=new cn,I=new Float32Array(y*6);for(let F=0;F<y;F++){const k=Math.random()*Math.PI*2,V=Math.acos(2*Math.random()-1),U=8+Math.random()*4,T=Math.random()*Math.PI*2,w=Math.acos(2*Math.random()-1),H=8+Math.random()*4;I[F*6]=U*Math.sin(V)*Math.cos(k),I[F*6+1]=U*Math.sin(V)*Math.sin(k),I[F*6+2]=U*Math.cos(V),I[F*6+3]=H*Math.sin(w)*Math.cos(T),I[F*6+4]=H*Math.sin(w)*Math.sin(T),I[F*6+5]=H*Math.cos(w)}M.setAttribute("position",new Cn(I,3));const L=new B_({color:65345,transparent:!0,opacity:.15});h=new P2(M,L),u.add(h),r.value=y,o.value=3}function E(){if(!a)return;const y=new H2(4210752,2);a.add(y);const M=new ya(65345,2,50);M.position.set(0,0,0),a.add(M);const I=new ya(g.storage,1,20);I.position.set(-6,3,0),a.add(I);const L=new ya(g.thinking,1,20);L.position.set(6,3,0),a.add(L);const F=new ya(g.skill,1,20);F.position.set(0,-5,3),a.add(F)}function S(y){var k,V,U;if(!u)return;const M=y.memory_count||0,I=((k=y.tiered_breakdown)==null?void 0:k.storage)||0,L=((V=y.tiered_breakdown)==null?void 0:V.thinking)||0,F=((U=y.tiered_breakdown)==null?void 0:U.skill)||0;u.children.forEach(T=>{if(T.userData.region){const w=T.material;let H=.3;switch(T.userData.region){case"storage":H=.3+I/Math.max(M,1)*.7;break;case"thinking":H=.3+L/Math.max(M,1)*.7;break;case"skill":H=.3+F/Math.max(M,1)*.7;break}w.emissiveIntensity=H}})}function A(){if(!(!a||!c||!l||!u)){if(d=requestAnimationFrame(A),u.rotation.y+=.002,u.rotation.x=Math.sin(Date.now()*5e-4)*.1,f){const y=f.geometry.attributes.position.array,M=Date.now()*.001;for(let I=0;I<y.length;I+=3){const L=I/3,F=Math.sin(M+L*.1)*.5;y[I+2]+=F*.01}f.geometry.attributes.position.needsUpdate=!0}l.render(a,c)}}function P(){if(!n.value||!c||!l)return;const y=n.value.clientWidth,M=n.value.clientHeight;c.aspect=y/M,c.updateProjectionMatrix(),l.setSize(y,M)}function D(){d&&cancelAnimationFrame(d),window.removeEventListener("resize",P),l&&(l.dispose(),n.value&&l.domElement.parentNode===n.value&&n.value.removeChild(l.domElement)),a=null,c=null,l=null,u=null,f=null,h=null}return(y,M)=>(ie(),ue("div",kU,[_("div",{ref_key:"canvasRef",ref:n,class:"canvas-wrapper"},null,512),_("div",zU,[_("div",VU,[_("div",HU,[M[0]||(M[0]=_("span",{class:"stat-label"},"神经元",-1)),_("span",GU,Z(s.value),1)]),_("div",WU,[M[1]||(M[1]=_("span",{class:"stat-label"},"突触连接",-1)),_("span",$U,Z(r.value),1)]),_("div",XU,[M[2]||(M[2]=_("span",{class:"stat-label"},"活跃区域",-1)),_("span",qU,Z(o.value),1)])])]),i.value?(ie(),ue("div",YU,[...M[3]||(M[3]=[_("div",{class:"loading-spinner"},null,-1),_("p",null,"初始化大脑模型...",-1)])])):$e("",!0)]))}}),KU=vn(jU,[["__scopeId","data-v-e30ab36f"]]),JU={class:"dashboard"},ZU={class:"sidebar"},QU={class:"sidebar-header"},eF={class:"nav-tabs"},tF=["onClick"],nF={class:"tab-icon"},iF={class:"tab-label"},sF={class:"action-buttons"},rF=["disabled"],oF=["disabled"],aF={class:"sidebar-footer"},lF={class:"main-content"},cF={key:0,class:"overview-container"},uF={class:"brain-3d-section"},fF={key:1,class:"memory-list-container"},dF={key:4,class:"brain-container"},hF={key:0,class:"right-panel"},pF={class:"modal-header"},mF={class:"modal-body"},gF={class:"detail-section"},_F={class:"detail-section"},vF={key:0,class:"detail-section"},xF={class:"keywords"},yF={class:"detail-section"},SF={class:"metadata"},MF={class:"meta-item"},bF={class:"meta-value"},EF={class:"meta-item"},wF={class:"meta-value"},TF={class:"meta-item"},AF={class:"meta-value"},RF=un({__name:"App",setup(t){const e=vi(),{graphData:n,isLoading:i,evolutionStatus:s,stats:r}=Er(e),o=[{id:"overview",label:"概览",icon:"📊"},{id:"memory-list",label:"记忆列表",icon:"📋"},{id:"write",label:"写入",icon:"✏️"},{id:"tiered",label:"三层记忆",icon:"🧠"},{id:"brain",label:"AI大脑",icon:"🤖"},{id:"llm",label:"LLM交互",icon:"🤖"},{id:"evolution",label:"进化配置",icon:"⚙️"},{id:"feedback",label:"反馈",icon:"💬"},{id:"merge",label:"合并链",icon:"🔗"}],a=Ee("overview"),c=Ee(null),l=Ee(null),u=Ee(!1),d=Ee(!1),f=Ee(!1),h=z0(null),g=Ee({}),v=yt(()=>{var V,U;return((V=s.value)==null?void 0:V.enabled)&&((U=s.value)==null?void 0:U.running)});qn(async()=>{e.addLog("初始化系统...","info");try{await e.fetchStats(),e.addLog("加载统计数据完成","success"),await e.fetchGraph(),e.addLog("加载记忆图谱完成","success"),await e.fetchEvolutionStatus(),e.addLog("加载进化状态完成","success")}catch(V){e.addLog("初始化失败: "+V.message,"error")}});function p(V){e.addLog(`点击节点: ${V.label||V.id}`,"info"),l.value=V.id,a.value!=="merge"&&(a.value="merge")}function m(V){c.value=V,e.addLog(`选择记忆: ${V.title}`,"info")}function x(V){e.addLog(`新记忆已写入: ${V}`,"success"),e.fetchStats(),e.fetchGraph()}function E(){e.addLog("记忆已保存","success"),y(),e.fetchStats(),e.fetchGraph()}function S(V){e.addLog(`记忆已删除: ${V}`,"success"),y(),c.value=null,e.fetchStats(),e.fetchGraph()}function A(V){e.addLog(`点击合并链节点: ${V.title}`,"info")}function P(){c.value=null}function D(){c.value&&(h.value=wT,g.value={visible:!0,memory:c.value},f.value=!0)}function y(){f.value=!1,h.value=null,g.value={}}function M(){c.value&&(l.value=c.value.id,a.value="merge",P())}async function I(){u.value=!0,e.addLog("开始重建图谱...","info");try{await Mn.rebuildGraph(),await e.fetchGraph(),e.addLog("图谱重建完成","success")}catch(V){e.addLog("图谱重建失败: "+V.message,"error")}finally{u.value=!1}}async function L(){d.value=!0,e.addLog("触发反思任务...","info");try{await e.reflectMemory(),e.addLog("反思任务已触发","success"),await e.fetchEvolutionStatus()}catch(V){e.addLog("触发反思失败: "+V.message,"error")}finally{d.value=!1}}async function F(){e.addLog("刷新所有数据...","info");try{await Promise.all([e.fetchStats(),e.fetchGraph(),e.fetchEvolutionStatus()]),e.addLog("数据刷新完成","success")}catch(V){e.addLog("数据刷新失败: "+V.message,"error")}}function k(V){return{storage:"存储记忆",thinking:"思维记忆",skill:"技能记忆"}[V||""]||V||"未知"}return(V,U)=>{var T;return ie(),ue("div",JU,[U[10]||(U[10]=_("div",{class:"scanline"},null,-1)),_("div",ZU,[_("div",QU,[U[2]||(U[2]=_("h1",{class:"logo"},"Memory System",-1)),_("div",{class:rt(["status-indicator",{active:v.value}])},null,2)]),_("nav",eF,[(ie(),ue(at,null,Ct(o,w=>_("button",{key:w.id,class:rt(["nav-tab",{active:a.value===w.id}]),onClick:H=>a.value=w.id},[_("span",nF,Z(w.icon),1),_("span",iF,Z(w.label),1)],10,tF)),64))]),_("div",sF,[_("button",{class:"action-btn",onClick:I,disabled:u.value},Z(u.value?"重建中...":"重建图谱"),9,rF),_("button",{class:"action-btn",onClick:L,disabled:d.value},Z(d.value?"反思中...":"触发反思"),9,oF),_("button",{class:"action-btn",onClick:F}," 刷新数据 ")]),_("div",aF,[Nt(Zw),a.value==="brain"?(ie(),Pi(w3,{key:0})):$e("",!0)])]),_("div",lF,[_("div",{class:rt(["content-area",{"with-panel":f.value}])},[a.value==="overview"?(ie(),ue("div",cF,[_("div",uF,[Nt(KU,{stats:be(r)},null,8,["stats"])]),Nt(L1,{"graph-data":be(n),"is-loading":be(i),onNodeClick:p},null,8,["graph-data","is-loading"]),Nt(Aw)])):a.value==="memory-list"?(ie(),ue("div",fF,[Nt(Sw,{onMemorySelect:m})])):a.value==="write"?(ie(),Pi(pT,{key:2,onWritten:x})):a.value==="tiered"?(ie(),Pi(QT,{key:3,onMemorySelect:m})):a.value==="brain"?(ie(),ue("div",dF,[Nt(MP)])):a.value==="llm"?(ie(),Pi(LA,{key:5})):a.value==="evolution"?(ie(),Pi(PR,{key:6})):a.value==="feedback"?(ie(),Pi(JR,{key:7})):a.value==="merge"?(ie(),Pi(gC,{key:8,"memory-id":l.value,"show-close":!!l.value,onClose:U[0]||(U[0]=w=>l.value=null),onNodeClick:A},null,8,["memory-id","show-close"])):$e("",!0)],2),Nt(hx,{name:"slide"},{default:Am(()=>[f.value?(ie(),ue("div",hF,[(ie(),Pi(yv(h.value),rg(g.value,{onClose:y,onSaved:E,onDeleted:S}),null,16))])):$e("",!0)]),_:1})]),c.value?(ie(),ue("div",{key:0,class:"memory-detail-modal",onClick:P},[_("div",{class:"modal-content",onClick:U[1]||(U[1]=Ka(()=>{},["stop"]))},[_("div",pF,[_("h2",null,Z(c.value.title),1),_("div",{class:"modal-actions"},[_("button",{class:"edit-btn",onClick:D},"编辑"),_("button",{class:"close-btn",onClick:P},"×")])]),_("div",mF,[_("div",gF,[U[3]||(U[3]=_("h4",null,"类型",-1)),_("span",{class:rt(["type-badge",c.value.memory_type])},Z(k(c.value.memory_type)),3)]),_("div",_F,[U[4]||(U[4]=_("h4",null,"内容",-1)),_("p",null,Z(c.value.content),1)]),(T=c.value.keywords)!=null&&T.length?(ie(),ue("div",vF,[U[5]||(U[5]=_("h4",null,"关键词",-1)),_("div",xF,[(ie(!0),ue(at,null,Ct(c.value.keywords,w=>(ie(),ue("span",{key:w,class:"keyword-tag"},Z(w),1))),128))])])):$e("",!0),_("div",yF,[U[9]||(U[9]=_("h4",null,"元数据",-1)),_("div",SF,[_("div",MF,[U[6]||(U[6]=_("span",{class:"meta-label"},"作用域:",-1)),_("span",bF,Z(c.value.scope),1)]),_("div",EF,[U[7]||(U[7]=_("span",{class:"meta-label"},"时间:",-1)),_("span",wF,Z(c.value.timestamp),1)]),_("div",TF,[U[8]||(U[8]=_("span",{class:"meta-label"},"重要性:",-1)),_("span",AF,Z(c.value.importance),1)])])]),_("div",{class:"detail-section"},[_("button",{class:"view-chain-btn",onClick:M}," 查看合并链 ")])])])])):$e("",!0)])}}}),Z_=zx(RF),CF=Gx();Z_.use(CF);Z_.mount("#app");
