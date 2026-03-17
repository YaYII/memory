(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function df(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const bt={},rr=[],ui=()=>{},Gp=()=>!1,fl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),hf=t=>t.startsWith("onUpdate:"),Bt=Object.assign,pf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},tv=Object.prototype.hasOwnProperty,ht=(t,e)=>tv.call(t,e),We=Array.isArray,or=t=>bo(t)==="[object Map]",dl=t=>bo(t)==="[object Set]",dd=t=>bo(t)==="[object Date]",Ye=t=>typeof t=="function",Pt=t=>typeof t=="string",gi=t=>typeof t=="symbol",ft=t=>t!==null&&typeof t=="object",Wp=t=>(ft(t)||Ye(t))&&Ye(t.then)&&Ye(t.catch),$p=Object.prototype.toString,bo=t=>$p.call(t),nv=t=>bo(t).slice(8,-1),Xp=t=>bo(t)==="[object Object]",hl=t=>Pt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zr=df(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},iv=/-\w/g,ln=pl(t=>t.replace(iv,e=>e.slice(1).toUpperCase())),sv=/\B([A-Z])/g,ls=pl(t=>t.replace(sv,"-$1").toLowerCase()),ml=pl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gl=pl(t=>t?`on${ml(t)}`:""),ri=(t,e)=>!Object.is(t,e),Ma=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},qp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},gl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},rv=t=>{const e=Pt(t)?Number(t):NaN;return isNaN(e)?t:e};let hd;const _l=()=>hd||(hd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zn(t){if(We(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Pt(i)?cv(i):zn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Pt(t)||ft(t))return t}const ov=/;(?![^(]*\))/g,av=/:([^]+)/,lv=/\/\*[^]*?\*\//g;function cv(t){const e={};return t.replace(lv,"").split(ov).forEach(n=>{if(n){const i=n.split(av);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pt(t){let e="";if(Pt(t))e=t;else if(We(t))for(let n=0;n<t.length;n++){const i=pt(t[n]);i&&(e+=i+" ")}else if(ft(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const uv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fv=df(uv);function Yp(t){return!!t||t===""}function dv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Eo(t[i],e[i]);return n}function Eo(t,e){if(t===e)return!0;let n=dd(t),i=dd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=gi(t),i=gi(e),n||i)return t===e;if(n=We(t),i=We(e),n||i)return n&&i?dv(t,e):!1;if(n=ft(t),i=ft(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Eo(t[o],e[o]))return!1}}return String(t)===String(e)}function hv(t,e){return t.findIndex(n=>Eo(n,e))}const jp=t=>!!(t&&t.__v_isRef===!0),te=t=>Pt(t)?t:t==null?"":We(t)||ft(t)&&(t.toString===$p||!Ye(t.toString))?jp(t)?te(t.value):JSON.stringify(t,Kp,2):String(t),Kp=(t,e)=>jp(e)?Kp(t,e.value):or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Wl(i,r)+" =>"]=s,n),{})}:dl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wl(n))}:gi(e)?Wl(e):ft(e)&&!We(e)&&!Xp(e)?String(e):e,Wl=(t,e="")=>{var n;return gi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class Zp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Yt;try{return Yt=this,e()}finally{Yt=n}}}on(){++this._on===1&&(this.prevScope=Yt,Yt=this)}off(){this._on>0&&--this._on===0&&(Yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Jp(t){return new Zp(t)}function Qp(){return Yt}function pv(t,e=!1){Yt&&Yt.cleanups.push(t)}let Tt;const $l=new WeakSet;class em{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&Yt.active&&Yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$l.has(this)&&($l.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pd(this),im(this);const e=Tt,n=Wn;Tt=this,Wn=!0;try{return this.fn()}finally{sm(this),Tt=e,Wn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_f(e);this.deps=this.depsTail=void 0,pd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$c(this)&&this.run()}get dirty(){return $c(this)}}let tm=0,Jr,Qr;function nm(t,e=!1){if(t.flags|=8,e){t.next=Qr,Qr=t;return}t.next=Jr,Jr=t}function mf(){tm++}function gf(){if(--tm>0)return;if(Qr){let e=Qr;for(Qr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Jr;){let e=Jr;for(Jr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function im(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sm(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),_f(i),mv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function $c(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function rm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ao)||(t.globalVersion=ao,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!$c(t))))return;t.flags|=2;const e=t.dep,n=Tt,i=Wn;Tt=t,Wn=!0;try{im(t);const s=t.fn(t._value);(e.version===0||ri(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Tt=n,Wn=i,sm(t),t.flags&=-3}}function _f(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)_f(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function mv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Wn=!0;const om=[];function Fi(){om.push(Wn),Wn=!1}function Oi(){const t=om.pop();Wn=t===void 0?!0:t}function pd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Tt;Tt=void 0;try{e()}finally{Tt=n}}}let ao=0;class gv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Tt||!Wn||Tt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Tt)n=this.activeLink=new gv(Tt,this),Tt.deps?(n.prevDep=Tt.depsTail,Tt.depsTail.nextDep=n,Tt.depsTail=n):Tt.deps=Tt.depsTail=n,am(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Tt.depsTail,n.nextDep=void 0,Tt.depsTail.nextDep=n,Tt.depsTail=n,Tt.deps===n&&(Tt.deps=i)}return n}trigger(e){this.version++,ao++,this.notify(e)}notify(e){mf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gf()}}}function am(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)am(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ba=new WeakMap,Ds=Symbol(""),Xc=Symbol(""),lo=Symbol("");function Kt(t,e,n){if(Wn&&Tt){let i=Ba.get(t);i||Ba.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new vf),s.map=i,s.key=n),s.track()}}function Li(t,e,n,i,s,r){const o=Ba.get(t);if(!o){ao++;return}const a=c=>{c&&c.trigger()};if(mf(),e==="clear")o.forEach(a);else{const c=We(t),l=c&&hl(n);if(c&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===lo||!gi(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(lo)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Ds)),or(t)&&a(o.get(Xc)));break;case"delete":c||(a(o.get(Ds)),or(t)&&a(o.get(Xc)));break;case"set":or(t)&&a(o.get(Ds));break}}gf()}function _v(t,e){const n=Ba.get(t);return n&&n.get(e)}function Hs(t){const e=st(t);return e===t?e:(Kt(e,"iterate",lo),wn(t)?e:e.map($n))}function vl(t){return Kt(t=st(t),"iterate",lo),t}function ni(t,e){return Bi(t)?hr(fi(t)?$n(e):e):$n(e)}const vv={__proto__:null,[Symbol.iterator](){return Xl(this,Symbol.iterator,t=>ni(this,t))},concat(...t){return Hs(this).concat(...t.map(e=>We(e)?Hs(e):e))},entries(){return Xl(this,"entries",t=>(t[1]=ni(this,t[1]),t))},every(t,e){return Si(this,"every",t,e,void 0,arguments)},filter(t,e){return Si(this,"filter",t,e,n=>n.map(i=>ni(this,i)),arguments)},find(t,e){return Si(this,"find",t,e,n=>ni(this,n),arguments)},findIndex(t,e){return Si(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Si(this,"findLast",t,e,n=>ni(this,n),arguments)},findLastIndex(t,e){return Si(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Si(this,"forEach",t,e,void 0,arguments)},includes(...t){return ql(this,"includes",t)},indexOf(...t){return ql(this,"indexOf",t)},join(t){return Hs(this).join(t)},lastIndexOf(...t){return ql(this,"lastIndexOf",t)},map(t,e){return Si(this,"map",t,e,void 0,arguments)},pop(){return Lr(this,"pop")},push(...t){return Lr(this,"push",t)},reduce(t,...e){return md(this,"reduce",t,e)},reduceRight(t,...e){return md(this,"reduceRight",t,e)},shift(){return Lr(this,"shift")},some(t,e){return Si(this,"some",t,e,void 0,arguments)},splice(...t){return Lr(this,"splice",t)},toReversed(){return Hs(this).toReversed()},toSorted(t){return Hs(this).toSorted(t)},toSpliced(...t){return Hs(this).toSpliced(...t)},unshift(...t){return Lr(this,"unshift",t)},values(){return Xl(this,"values",t=>ni(this,t))}};function Xl(t,e,n){const i=vl(t),s=i[e]();return i!==t&&!wn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const xv=Array.prototype;function Si(t,e,n,i,s,r){const o=vl(t),a=o!==t&&!wn(t),c=o[e];if(c!==xv[e]){const d=c.apply(t,r);return a?$n(d):d}let l=n;o!==t&&(a?l=function(d,f){return n.call(this,ni(t,d),f,t)}:n.length>2&&(l=function(d,f){return n.call(this,d,f,t)}));const u=c.call(o,l,i);return a&&s?s(u):u}function md(t,e,n,i){const s=vl(t),r=s!==t&&!wn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(l,u,d){return a&&(a=!1,l=ni(t,l)),n.call(this,l,ni(t,u),d,t)}):n.length>3&&(o=function(l,u,d){return n.call(this,l,u,d,t)}));const c=s[e](o,...i);return a?ni(t,c):c}function ql(t,e,n){const i=st(t);Kt(i,"iterate",lo);const s=i[e](...n);return(s===-1||s===!1)&&yl(n[0])?(n[0]=st(n[0]),i[e](...n)):s}function Lr(t,e,n=[]){Fi(),mf();const i=st(t)[e].apply(t,n);return gf(),Oi(),i}const yv=df("__proto__,__v_isRef,__isVue"),lm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gi));function Sv(t){gi(t)||(t=String(t));const e=st(this);return Kt(e,"has",t),e.hasOwnProperty(t)}class cm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?Lv:hm:r?dm:fm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!s){let c;if(o&&(c=vv[n]))return c;if(n==="hasOwnProperty")return Sv}const a=Reflect.get(e,n,At(e)?e:i);if((gi(n)?lm.has(n):yv(n))||(s||Kt(e,"get",n),r))return a;if(At(a)){const c=o&&hl(n)?a:a.value;return s&&ft(c)?Yc(c):c}return ft(a)?s?Yc(a):xl(a):a}}class um extends cm{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=We(e)&&hl(n);if(!this._isShallow){const l=Bi(r);if(!wn(i)&&!Bi(i)&&(r=st(r),i=st(i)),!o&&At(r)&&!At(i))return l||(r.value=i),!0}const a=o?Number(n)<e.length:ht(e,n),c=Reflect.set(e,n,i,At(e)?e:s);return e===st(s)&&(a?ri(i,r)&&Li(e,"set",n,i):Li(e,"add",n,i)),c}deleteProperty(e,n){const i=ht(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Li(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!gi(n)||!lm.has(n))&&Kt(e,"has",n),i}ownKeys(e){return Kt(e,"iterate",We(e)?"length":Ds),Reflect.ownKeys(e)}}class Mv extends cm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const bv=new um,Ev=new Mv,wv=new um(!0);const qc=t=>t,Vo=t=>Reflect.getPrototypeOf(t);function Tv(t,e,n){return function(...i){const s=this.__v_raw,r=st(s),o=or(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),u=n?qc:e?hr:$n;return!e&&Kt(r,"iterate",c?Xc:Ds),Bt(Object.create(l),{next(){const{value:d,done:f}=l.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Ho(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Av(t,e){const n={get(s){const r=this.__v_raw,o=st(r),a=st(s);t||(ri(s,a)&&Kt(o,"get",s),Kt(o,"get",a));const{has:c}=Vo(o),l=e?qc:t?hr:$n;if(c.call(o,s))return l(r.get(s));if(c.call(o,a))return l(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Kt(st(s),"iterate",Ds),s.size},has(s){const r=this.__v_raw,o=st(r),a=st(s);return t||(ri(s,a)&&Kt(o,"has",s),Kt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,c=st(a),l=e?qc:t?hr:$n;return!t&&Kt(c,"iterate",Ds),a.forEach((u,d)=>s.call(r,l(u),l(d),o))}};return Bt(n,t?{add:Ho("add"),set:Ho("set"),delete:Ho("delete"),clear:Ho("clear")}:{add(s){const r=st(this),o=Vo(r),a=st(s),c=!e&&!wn(s)&&!Bi(s)?a:s;return o.has.call(r,c)||ri(s,c)&&o.has.call(r,s)||ri(a,c)&&o.has.call(r,a)||(r.add(c),Li(r,"add",c,c)),this},set(s,r){!e&&!wn(r)&&!Bi(r)&&(r=st(r));const o=st(this),{has:a,get:c}=Vo(o);let l=a.call(o,s);l||(s=st(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,r),l?ri(r,u)&&Li(o,"set",s,r):Li(o,"add",s,r),this},delete(s){const r=st(this),{has:o,get:a}=Vo(r);let c=o.call(r,s);c||(s=st(s),c=o.call(r,s)),a&&a.call(r,s);const l=r.delete(s);return c&&Li(r,"delete",s,void 0),l},clear(){const s=st(this),r=s.size!==0,o=s.clear();return r&&Li(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Tv(s,t,e)}),n}function xf(t,e){const n=Av(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ht(n,s)&&s in i?n:i,s,r)}const Cv={get:xf(!1,!1)},Rv={get:xf(!1,!0)},Pv={get:xf(!0,!1)};const fm=new WeakMap,dm=new WeakMap,hm=new WeakMap,Lv=new WeakMap;function Dv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Iv(t){return t.__v_skip||!Object.isExtensible(t)?0:Dv(nv(t))}function xl(t){return Bi(t)?t:yf(t,!1,bv,Cv,fm)}function Nv(t){return yf(t,!1,wv,Rv,dm)}function Yc(t){return yf(t,!0,Ev,Pv,hm)}function yf(t,e,n,i,s){if(!ft(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=Iv(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function fi(t){return Bi(t)?fi(t.__v_raw):!!(t&&t.__v_isReactive)}function Bi(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function yl(t){return t?!!t.__v_raw:!1}function st(t){const e=t&&t.__v_raw;return e?st(e):t}function Sf(t){return!ht(t,"__v_skip")&&Object.isExtensible(t)&&qp(t,"__v_skip",!0),t}const $n=t=>ft(t)?xl(t):t,hr=t=>ft(t)?Yc(t):t;function At(t){return t?t.__v_isRef===!0:!1}function we(t){return pm(t,!1)}function Uv(t){return pm(t,!0)}function pm(t,e){return At(t)?t:new Fv(t,e)}class Fv{constructor(e,n){this.dep=new vf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:st(e),this._value=n?e:$n(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||wn(e)||Bi(e);e=i?e:st(e),ri(e,n)&&(this._rawValue=e,this._value=i?e:$n(e),this.dep.trigger())}}function be(t){return At(t)?t.value:t}const Ov={get:(t,e,n)=>e==="__v_raw"?t:be(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return At(s)&&!At(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function mm(t){return fi(t)?t:new Proxy(t,Ov)}function Bv(t){const e=We(t)?new Array(t.length):{};for(const n in t)e[n]=gm(t,n);return e}class kv{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=st(e);let s=!0,r=e;if(!We(e)||!hl(String(n)))do s=!yl(r)||wn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=be(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&At(this._raw[this._key])){const n=this._object[this._key];if(At(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return _v(this._raw,this._key)}}class zv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Vv(t,e,n){return At(t)?t:Ye(t)?new zv(t):ft(t)&&arguments.length>1?gm(t,e,n):we(t)}function gm(t,e,n){return new kv(t,e,n)}class Hv{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new vf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ao-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Tt!==this)return nm(this,!0),!0}get value(){const e=this.dep.track();return rm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Gv(t,e,n=!1){let i,s;return Ye(t)?i=t:(i=t.get,s=t.set),new Hv(i,s,n)}const Go={},ka=new WeakMap;let Ss;function Wv(t,e=!1,n=Ss){if(n){let i=ka.get(n);i||ka.set(n,i=[]),i.push(t)}}function $v(t,e,n=bt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=n,l=y=>s?y:wn(y)||s===!1||s===0?Di(y,1):Di(y);let u,d,f,h,g=!1,_=!1;if(At(t)?(d=()=>t.value,g=wn(t)):fi(t)?(d=()=>l(t),g=!0):We(t)?(_=!0,g=t.some(y=>fi(y)||wn(y)),d=()=>t.map(y=>{if(At(y))return y.value;if(fi(y))return l(y);if(Ye(y))return c?c(y,2):y()})):Ye(t)?e?d=c?()=>c(t,2):t:d=()=>{if(f){Fi();try{f()}finally{Oi()}}const y=Ss;Ss=u;try{return c?c(t,3,[h]):t(h)}finally{Ss=y}}:d=ui,e&&s){const y=d,C=s===!0?1/0:s;d=()=>Di(y(),C)}const p=Qp(),m=()=>{u.stop(),p&&p.active&&pf(p.effects,u)};if(r&&e){const y=e;e=(...C)=>{y(...C),m()}}let x=_?new Array(t.length).fill(Go):Go;const E=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const C=u.run();if(s||g||(_?C.some((A,L)=>ri(A,x[L])):ri(C,x))){f&&f();const A=Ss;Ss=u;try{const L=[C,x===Go?void 0:_&&x[0]===Go?[]:x,h];x=C,c?c(e,3,L):e(...L)}finally{Ss=A}}}else u.run()};return a&&a(E),u=new em(d),u.scheduler=o?()=>o(E,!1):E,h=y=>Wv(y,!1,u),f=u.onStop=()=>{const y=ka.get(u);if(y){if(c)c(y,4);else for(const C of y)C();ka.delete(u)}},e?i?E(!0):x=u.run():o?o(E.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Di(t,e=1/0,n){if(e<=0||!ft(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,At(t))Di(t.value,e,n);else if(We(t))for(let i=0;i<t.length;i++)Di(t[i],e,n);else if(dl(t)||or(t))t.forEach(i=>{Di(i,e,n)});else if(Xp(t)){for(const i in t)Di(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Di(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wo(t,e,n,i){try{return i?t(...i):t()}catch(s){Sl(s,e,n)}}function Xn(t,e,n,i){if(Ye(t)){const s=wo(t,e,n,i);return s&&Wp(s)&&s.catch(r=>{Sl(r,e,n)}),s}if(We(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Xn(t[r],e,n,i));return s}}function Sl(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||bt;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,l)===!1)return}a=a.parent}if(r){Fi(),wo(r,null,10,[t,c,l]),Oi();return}}Xv(t,n,s,i,o)}function Xv(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const rn=[];let ei=-1;const ar=[];let ts=null,sr=0;const _m=Promise.resolve();let za=null;function To(t){const e=za||_m;return t?e.then(this?t.bind(this):t):e}function qv(t){let e=ei+1,n=rn.length;for(;e<n;){const i=e+n>>>1,s=rn[i],r=co(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Mf(t){if(!(t.flags&1)){const e=co(t),n=rn[rn.length-1];!n||!(t.flags&2)&&e>=co(n)?rn.push(t):rn.splice(qv(e),0,t),t.flags|=1,vm()}}function vm(){za||(za=_m.then(ym))}function Yv(t){We(t)?ar.push(...t):ts&&t.id===-1?ts.splice(sr+1,0,t):t.flags&1||(ar.push(t),t.flags|=1),vm()}function gd(t,e,n=ei+1){for(;n<rn.length;n++){const i=rn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;rn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function xm(t){if(ar.length){const e=[...new Set(ar)].sort((n,i)=>co(n)-co(i));if(ar.length=0,ts){ts.push(...e);return}for(ts=e,sr=0;sr<ts.length;sr++){const n=ts[sr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ts=null,sr=0}}const co=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ym(t){try{for(ei=0;ei<rn.length;ei++){const e=rn[ei];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ei<rn.length;ei++){const e=rn[ei];e&&(e.flags&=-2)}ei=-1,rn.length=0,xm(),za=null,(rn.length||ar.length)&&ym()}}let bn=null,Sm=null;function Va(t){const e=bn;return bn=t,Sm=t&&t.type.__scopeId||null,e}function jc(t,e=bn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Wa(-1);const r=Va(e);let o;try{o=t(...s)}finally{Va(r),i._d&&Wa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Dt(t,e){if(bn===null)return t;const n=Tl(bn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,c=bt]=e[s];r&&(Ye(r)&&(r={mounted:r,updated:r}),r.deep&&Di(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function fs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Fi(),Xn(c,n,8,[t.el,a,t,e]),Oi())}}function jv(t,e){if(Zt){let n=Zt.provides;const i=Zt.parent&&Zt.parent.provides;i===n&&(n=Zt.provides=Object.create(i)),n[t]=e}}function eo(t,e,n=!1){const i=Af();if(i||Is){let s=Is?Is._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ye(e)?e.call(i&&i.proxy):e}}function Kv(){return!!(Af()||Is)}const Zv=Symbol.for("v-scx"),Jv=()=>eo(Zv);function di(t,e,n){return Mm(t,e,n)}function Mm(t,e,n=bt){const{immediate:i,deep:s,flush:r,once:o}=n,a=Bt({},n),c=e&&i||!e&&r!=="post";let l;if(ho){if(r==="sync"){const h=Jv();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=ui,h.resume=ui,h.pause=ui,h}}const u=Zt;a.call=(h,g,_)=>Xn(h,u,g,_);let d=!1;r==="post"?a.scheduler=h=>{hn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():Mf(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=$v(t,e,a);return ho&&(l?l.push(f):c&&f()),f}function Qv(t,e,n){const i=this.proxy,s=Pt(t)?t.includes(".")?bm(i,t):()=>i[t]:t.bind(i,i);let r;Ye(e)?r=e:(r=e.handler,n=e);const o=Ao(this),a=Mm(s,r.bind(i),n);return o(),a}function bm(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const e0=Symbol("_vte"),Em=t=>t.__isTeleport,ti=Symbol("_leaveCb"),Dr=Symbol("_enterCb");function t0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qn(()=>{t.isMounted=!0}),Er(()=>{t.isUnmounting=!0}),t}const Rn=[Function,Array],wm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rn,onEnter:Rn,onAfterEnter:Rn,onEnterCancelled:Rn,onBeforeLeave:Rn,onLeave:Rn,onAfterLeave:Rn,onLeaveCancelled:Rn,onBeforeAppear:Rn,onAppear:Rn,onAfterAppear:Rn,onAppearCancelled:Rn},Tm=t=>{const e=t.subTree;return e.component?Tm(e.component):e},n0={name:"BaseTransition",props:wm,setup(t,{slots:e}){const n=Af(),i=t0();return()=>{const s=e.default&&Rm(e.default(),!0);if(!s||!s.length)return;const r=Am(s),o=st(t),{mode:a}=o;if(i.isLeaving)return Yl(r);const c=_d(r);if(!c)return Yl(r);let l=Kc(c,o,i,n,d=>l=d);c.type!==on&&uo(c,l);let u=n.subTree&&_d(n.subTree);if(u&&u.type!==on&&!bs(u,c)&&Tm(n).type!==on){let d=Kc(u,o,i,n);if(uo(u,d),a==="out-in"&&c.type!==on)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Yl(r);a==="in-out"&&c.type!==on?d.delayLeave=(f,h,g)=>{const _=Cm(i,u);_[String(u.key)]=u,f[ti]=()=>{h(),f[ti]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{g(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Am(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==on){e=n;break}}return e}const i0=n0;function Cm(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Kc(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:m,onAfterAppear:x,onAppearCancelled:E}=e,y=String(t.key),C=Cm(n,t),A=(M,U)=>{M&&Xn(M,i,9,U)},L=(M,U)=>{const D=U[1];A(M,U),We(M)?M.every(N=>N.length<=1)&&D():M.length<=1&&D()},S={mode:o,persisted:a,beforeEnter(M){let U=c;if(!n.isMounted)if(r)U=p||c;else return;M[ti]&&M[ti](!0);const D=C[y];D&&bs(t,D)&&D.el[ti]&&D.el[ti](),A(U,[M])},enter(M){if(C[y]===t)return;let U=l,D=u,N=d;if(!n.isMounted)if(r)U=m||l,D=x||u,N=E||d;else return;let z=!1;M[Dr]=k=>{z||(z=!0,k?A(N,[M]):A(D,[M]),S.delayedLeave&&S.delayedLeave(),M[Dr]=void 0)};const G=M[Dr].bind(null,!1);U?L(U,[M,G]):G()},leave(M,U){const D=String(t.key);if(M[Dr]&&M[Dr](!0),n.isUnmounting)return U();A(f,[M]);let N=!1;M[ti]=G=>{N||(N=!0,U(),G?A(_,[M]):A(g,[M]),M[ti]=void 0,C[D]===t&&delete C[D])};const z=M[ti].bind(null,!1);C[D]=t,h?L(h,[M,z]):z()},clone(M){const U=Kc(M,e,n,i,s);return s&&s(U),U}};return S}function Yl(t){if(Ml(t))return t=os(t),t.children=null,t}function _d(t){if(!Ml(t))return Em(t.type)&&t.children?Am(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ye(n.default))return n.default()}}function uo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,uo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rm(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===mt?(o.patchFlag&128&&s++,i=i.concat(Rm(o.children,e,a))):(e||o.type!==on)&&i.push(a!=null?os(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function xn(t,e){return Ye(t)?Bt({name:t.name},e,{setup:t}):t}function Pm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function vd(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ha=new WeakMap;function to(t,e,n,i,s=!1){if(We(t)){t.forEach((_,p)=>to(_,e&&(We(e)?e[p]:e),n,i,s));return}if(no(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&to(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Tl(i.component):i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===bt?a.refs={}:a.refs,d=a.setupState,f=st(d),h=d===bt?Gp:_=>vd(u,_)?!1:ht(f,_),g=(_,p)=>!(p&&vd(u,p));if(l!=null&&l!==c){if(xd(e),Pt(l))u[l]=null,h(l)&&(d[l]=null);else if(At(l)){const _=e;g(l,_.k)&&(l.value=null),_.k&&(u[_.k]=null)}}if(Ye(c))wo(c,a,12,[o,u]);else{const _=Pt(c),p=At(c);if(_||p){const m=()=>{if(t.f){const x=_?h(c)?d[c]:u[c]:g()||!t.k?c.value:u[t.k];if(s)We(x)&&pf(x,r);else if(We(x))x.includes(r)||x.push(r);else if(_)u[c]=[r],h(c)&&(d[c]=u[c]);else{const E=[r];g(c,t.k)&&(c.value=E),t.k&&(u[t.k]=E)}}else _?(u[c]=o,h(c)&&(d[c]=o)):p&&(g(c,t.k)&&(c.value=o),t.k&&(u[t.k]=o))};if(o){const x=()=>{m(),Ha.delete(t)};x.id=-1,Ha.set(t,x),hn(x,n)}else xd(t),m()}}}function xd(t){const e=Ha.get(t);e&&(e.flags|=8,Ha.delete(t))}_l().requestIdleCallback;_l().cancelIdleCallback;const no=t=>!!t.type.__asyncLoader,Ml=t=>t.type.__isKeepAlive;function s0(t,e){Lm(t,"a",e)}function r0(t,e){Lm(t,"da",e)}function Lm(t,e,n=Zt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(bl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Ml(s.parent.vnode)&&o0(i,e,n,s),s=s.parent}}function o0(t,e,n,i){const s=bl(e,t,i,!0);bf(()=>{pf(i[e],s)},n)}function bl(t,e,n=Zt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Fi();const a=Ao(n),c=Xn(e,n,t,o);return a(),Oi(),c});return i?s.unshift(r):s.push(r),r}}const Gi=t=>(e,n=Zt)=>{(!ho||t==="sp")&&bl(t,(...i)=>e(...i),n)},a0=Gi("bm"),qn=Gi("m"),l0=Gi("bu"),c0=Gi("u"),Er=Gi("bum"),bf=Gi("um"),u0=Gi("sp"),f0=Gi("rtg"),d0=Gi("rtc");function h0(t,e=Zt){bl("ec",t,e)}const p0="components",Dm=Symbol.for("v-ndc");function m0(t){return Pt(t)?g0(p0,t,!1)||t:t||Dm}function g0(t,e,n=!0,i=!1){const s=bn||Zt;if(s){const r=s.type;{const a=Q0(r,!1);if(a&&(a===e||a===ln(e)||a===ml(ln(e))))return r}const o=yd(s[t]||r[t],e)||yd(s.appContext[t],e);return!o&&i?r:o}}function yd(t,e){return t&&(t[e]||t[ln(e)]||t[ml(ln(e))])}function Ot(t,e,n,i){let s;const r=n,o=We(t);if(o||Pt(t)){const a=o&&fi(t);let c=!1,l=!1;a&&(c=!wn(t),l=Bi(t),t=vl(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?l?hr($n(t[u])):$n(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(ft(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,r)}}else s=[];return s}const Zc=t=>t?tg(t)?Tl(t):Zc(t.parent):null,io=Bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zc(t.parent),$root:t=>Zc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Nm(t),$forceUpdate:t=>t.f||(t.f=()=>{Mf(t.update)}),$nextTick:t=>t.n||(t.n=To.bind(t.proxy)),$watch:t=>Qv.bind(t)}),jl=(t,e)=>t!==bt&&!t.__isScriptSetup&&ht(t,e),_0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(jl(i,e))return o[e]=1,i[e];if(s!==bt&&ht(s,e))return o[e]=2,s[e];if(ht(r,e))return o[e]=3,r[e];if(n!==bt&&ht(n,e))return o[e]=4,n[e];Jc&&(o[e]=0)}}const l=io[e];let u,d;if(l)return e==="$attrs"&&Kt(t.attrs,"get",""),l(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==bt&&ht(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ht(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return jl(s,e)?(s[e]=n,!0):i!==bt&&ht(i,e)?(i[e]=n,!0):ht(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let c;return!!(n[a]||t!==bt&&a[0]!=="$"&&ht(t,a)||jl(e,a)||ht(r,a)||ht(i,a)||ht(io,a)||ht(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ht(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sd(t){return We(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Jc=!0;function v0(t){const e=Nm(t),n=t.proxy,i=t.ctx;Jc=!1,e.beforeCreate&&Md(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:x,destroyed:E,unmounted:y,render:C,renderTracked:A,renderTriggered:L,errorCaptured:S,serverPrefetch:M,expose:U,inheritAttrs:D,components:N,directives:z,filters:G}=e;if(l&&x0(l,i,null),o)for(const T in o){const V=o[T];Ye(V)&&(i[T]=V.bind(n))}if(s){const T=s.call(n,n);ft(T)&&(t.data=xl(T))}if(Jc=!0,r)for(const T in r){const V=r[T],X=Ye(V)?V.bind(n,n):Ye(V.get)?V.get.bind(n,n):ui,re=!Ye(V)&&Ye(V.set)?V.set.bind(n):ui,ce=Et({get:X,set:re});Object.defineProperty(i,T,{enumerable:!0,configurable:!0,get:()=>ce.value,set:pe=>ce.value=pe})}if(a)for(const T in a)Im(a[T],i,n,T);if(c){const T=Ye(c)?c.call(n):c;Reflect.ownKeys(T).forEach(V=>{jv(V,T[V])})}u&&Md(u,t,"c");function w(T,V){We(V)?V.forEach(X=>T(X.bind(n))):V&&T(V.bind(n))}if(w(a0,d),w(qn,f),w(l0,h),w(c0,g),w(s0,_),w(r0,p),w(h0,S),w(d0,A),w(f0,L),w(Er,x),w(bf,y),w(u0,M),We(U))if(U.length){const T=t.exposed||(t.exposed={});U.forEach(V=>{Object.defineProperty(T,V,{get:()=>n[V],set:X=>n[V]=X,enumerable:!0})})}else t.exposed||(t.exposed={});C&&t.render===ui&&(t.render=C),D!=null&&(t.inheritAttrs=D),N&&(t.components=N),z&&(t.directives=z),M&&Pm(t)}function x0(t,e,n=ui){We(t)&&(t=Qc(t));for(const i in t){const s=t[i];let r;ft(s)?"default"in s?r=eo(s.from||i,s.default,!0):r=eo(s.from||i):r=eo(s),At(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Md(t,e,n){Xn(We(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Im(t,e,n,i){let s=i.includes(".")?bm(n,i):()=>n[i];if(Pt(t)){const r=e[t];Ye(r)&&di(s,r)}else if(Ye(t))di(s,t.bind(n));else if(ft(t))if(We(t))t.forEach(r=>Im(r,e,n,i));else{const r=Ye(t.handler)?t.handler.bind(n):e[t.handler];Ye(r)&&di(s,r,t)}}function Nm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>Ga(c,l,o,!0)),Ga(c,e,o)),ft(e)&&r.set(e,c),c}function Ga(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ga(t,r,n,!0),s&&s.forEach(o=>Ga(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=y0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const y0={data:bd,props:Ed,emits:Ed,methods:Wr,computed:Wr,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:Wr,directives:Wr,watch:M0,provide:bd,inject:S0};function bd(t,e){return e?t?function(){return Bt(Ye(t)?t.call(this,this):t,Ye(e)?e.call(this,this):e)}:e:t}function S0(t,e){return Wr(Qc(t),Qc(e))}function Qc(t){if(We(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nn(t,e){return t?[...new Set([].concat(t,e))]:e}function Wr(t,e){return t?Bt(Object.create(null),t,e):e}function Ed(t,e){return t?We(t)&&We(e)?[...new Set([...t,...e])]:Bt(Object.create(null),Sd(t),Sd(e??{})):e}function M0(t,e){if(!t)return e;if(!e)return t;const n=Bt(Object.create(null),t);for(const i in e)n[i]=nn(t[i],e[i]);return n}function Um(){return{app:null,config:{isNativeTag:Gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let b0=0;function E0(t,e){return function(i,s=null){Ye(i)||(i=Bt({},i)),s!=null&&!ft(s)&&(s=null);const r=Um(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:b0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:nx,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Ye(u.install)?(o.add(u),u.install(l,...d)):Ye(u)&&(o.add(u),u(l,...d))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,d){return d?(r.components[u]=d,l):r.components[u]},directive(u,d){return d?(r.directives[u]=d,l):r.directives[u]},mount(u,d,f){if(!c){const h=l._ceVNode||yt(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),c=!0,l._container=u,u.__vue_app__=l,Tl(h.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Xn(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return r.provides[u]=d,l},runWithContext(u){const d=Is;Is=l;try{return u()}finally{Is=d}}};return l}}let Is=null;const w0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ln(e)}Modifiers`]||t[`${ls(e)}Modifiers`];function T0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||bt;let s=n;const r=e.startsWith("update:"),o=r&&w0(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Pt(u)?u.trim():u)),o.number&&(s=n.map(gl)));let a,c=i[a=Gl(e)]||i[a=Gl(ln(e))];!c&&r&&(c=i[a=Gl(ls(e))]),c&&Xn(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xn(l,t,6,s)}}const A0=new WeakMap;function Fm(t,e,n=!1){const i=n?A0:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ye(t)){const c=l=>{const u=Fm(l,e,!0);u&&(a=!0,Bt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(ft(t)&&i.set(t,null),null):(We(r)?r.forEach(c=>o[c]=null):Bt(o,r),ft(t)&&i.set(t,o),o)}function El(t,e){return!t||!fl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(t,e[0].toLowerCase()+e.slice(1))||ht(t,ls(e))||ht(t,e))}function wd(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:_}=t,p=Va(t);let m,x;try{if(n.shapeFlag&4){const y=s||i,C=y;m=ii(l.call(C,y,u,d,h,f,g)),x=a}else{const y=e;m=ii(y.length>1?y(d,{attrs:a,slots:o,emit:c}):y(d,null)),x=e.props?a:C0(a)}}catch(y){so.length=0,Sl(y,t,1),m=yt(on)}let E=m;if(x&&_!==!1){const y=Object.keys(x),{shapeFlag:C}=E;y.length&&C&7&&(r&&y.some(hf)&&(x=R0(x,r)),E=os(E,x,!1,!0))}return n.dirs&&(E=os(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&uo(E,n.transition),m=E,Va(p),m}const C0=t=>{let e;for(const n in t)(n==="class"||n==="style"||fl(n))&&((e||(e={}))[n]=t[n]);return e},R0=(t,e)=>{const n={};for(const i in t)(!hf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function P0(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Td(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Om(o,i,f)&&!El(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Td(i,o,l):!0:!!o;return!1}function Td(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Om(e,t,r)&&!El(n,r))return!0}return!1}function Om(t,e,n){const i=t[n],s=e[n];return n==="style"&&ft(i)&&ft(s)?!Eo(i,s):i!==s}function L0({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Bm={},km=()=>Object.create(Bm),zm=t=>Object.getPrototypeOf(t)===Bm;function D0(t,e,n,i=!1){const s={},r=km();t.propsDefaults=Object.create(null),Vm(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Nv(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function I0(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=st(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(El(t.emitsOptions,f))continue;const h=e[f];if(c)if(ht(r,f))h!==r[f]&&(r[f]=h,l=!0);else{const g=ln(f);s[g]=eu(c,a,g,h,t,!1)}else h!==r[f]&&(r[f]=h,l=!0)}}}else{Vm(t,e,s,r)&&(l=!0);let u;for(const d in a)(!e||!ht(e,d)&&((u=ls(d))===d||!ht(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=eu(c,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!ht(e,d))&&(delete r[d],l=!0)}l&&Li(t.attrs,"set","")}function Vm(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Zr(c))continue;const l=e[c];let u;s&&ht(s,u=ln(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:El(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=st(n),l=a||bt;for(let u=0;u<r.length;u++){const d=r[u];n[d]=eu(s,c,d,l[d],t,!ht(l,d))}}return o}function eu(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=ht(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(c)){const{propsDefaults:l}=s;if(n in l)i=l[n];else{const u=Ao(s);i=l[n]=c.call(null,e),u()}}else i=c;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ls(n))&&(i=!0))}return i}const N0=new WeakMap;function Hm(t,e,n=!1){const i=n?N0:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!Ye(t)){const u=d=>{c=!0;const[f,h]=Hm(d,e,!0);Bt(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ft(t)&&i.set(t,rr),rr;if(We(r))for(let u=0;u<r.length;u++){const d=ln(r[u]);Ad(d)&&(o[d]=bt)}else if(r)for(const u in r){const d=ln(u);if(Ad(d)){const f=r[u],h=o[d]=We(f)||Ye(f)?{type:f}:Bt({},f),g=h.type;let _=!1,p=!0;if(We(g))for(let m=0;m<g.length;++m){const x=g[m],E=Ye(x)&&x.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(p=!1)}else _=Ye(g)&&g.name==="Boolean";h[0]=_,h[1]=p,(_||ht(h,"default"))&&a.push(d)}}const l=[o,a];return ft(t)&&i.set(t,l),l}function Ad(t){return t[0]!=="$"&&!Zr(t)}const Ef=t=>t==="_"||t==="_ctx"||t==="$stable",wf=t=>We(t)?t.map(ii):[ii(t)],U0=(t,e,n)=>{if(e._n)return e;const i=jc((...s)=>wf(e(...s)),n);return i._c=!1,i},Gm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Ef(s))continue;const r=t[s];if(Ye(r))e[s]=U0(s,r,i);else if(r!=null){const o=wf(r);e[s]=()=>o}}},Wm=(t,e)=>{const n=wf(e);t.slots.default=()=>n},$m=(t,e,n)=>{for(const i in e)(n||!Ef(i))&&(t[i]=e[i])},F0=(t,e,n)=>{const i=t.slots=km();if(t.vnode.shapeFlag&32){const s=e._;s?($m(i,e,n),n&&qp(i,"_",s,!0)):Gm(e,i)}else e&&Wm(t,e)},O0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=bt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:$m(s,e,n):(r=!e.$stable,Gm(e,s)),o=e}else e&&(Wm(t,e),o={default:1});if(r)for(const a in s)!Ef(a)&&o[a]==null&&delete s[a]},hn=H0;function B0(t){return k0(t)}function k0(t,e){const n=_l();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=ui,insertStaticContent:g}=t,_=(F,B,q,oe=null,Q=null,le=null,I=void 0,me=null,de=!!B.dynamicChildren)=>{if(F===B)return;F&&!bs(F,B)&&(oe=ye(F),pe(F,Q,le,!0),F=null),B.patchFlag===-2&&(de=!1,B.dynamicChildren=null);const{type:se,ref:he,shapeFlag:R}=B;switch(se){case wl:p(F,B,q,oe);break;case on:m(F,B,q,oe);break;case ba:F==null&&x(B,q,oe,I);break;case mt:N(F,B,q,oe,Q,le,I,me,de);break;default:R&1?C(F,B,q,oe,Q,le,I,me,de):R&6?z(F,B,q,oe,Q,le,I,me,de):(R&64||R&128)&&se.process(F,B,q,oe,Q,le,I,me,de,He)}he!=null&&Q?to(he,F&&F.ref,le,B||F,!B):he==null&&F&&F.ref!=null&&to(F.ref,null,le,F,!0)},p=(F,B,q,oe)=>{if(F==null)i(B.el=a(B.children),q,oe);else{const Q=B.el=F.el;B.children!==F.children&&l(Q,B.children)}},m=(F,B,q,oe)=>{F==null?i(B.el=c(B.children||""),q,oe):B.el=F.el},x=(F,B,q,oe)=>{[F.el,F.anchor]=g(F.children,B,q,oe,F.el,F.anchor)},E=({el:F,anchor:B},q,oe)=>{let Q;for(;F&&F!==B;)Q=f(F),i(F,q,oe),F=Q;i(B,q,oe)},y=({el:F,anchor:B})=>{let q;for(;F&&F!==B;)q=f(F),s(F),F=q;s(B)},C=(F,B,q,oe,Q,le,I,me,de)=>{if(B.type==="svg"?I="svg":B.type==="math"&&(I="mathml"),F==null)A(B,q,oe,Q,le,I,me,de);else{const se=F.el&&F.el._isVueCE?F.el:null;try{se&&se._beginPatch(),M(F,B,Q,le,I,me,de)}finally{se&&se._endPatch()}}},A=(F,B,q,oe,Q,le,I,me)=>{let de,se;const{props:he,shapeFlag:R,transition:b,dirs:O}=F;if(de=F.el=o(F.type,le,he&&he.is,he),R&8?u(de,F.children):R&16&&S(F.children,de,null,oe,Q,Kl(F,le),I,me),O&&fs(F,null,oe,"created"),L(de,F,F.scopeId,I,oe),he){for(const ne in he)ne!=="value"&&!Zr(ne)&&r(de,ne,null,he[ne],le,oe);"value"in he&&r(de,"value",null,he.value,le),(se=he.onVnodeBeforeMount)&&Zn(se,oe,F)}O&&fs(F,null,oe,"beforeMount");const Y=z0(Q,b);Y&&b.beforeEnter(de),i(de,B,q),((se=he&&he.onVnodeMounted)||Y||O)&&hn(()=>{se&&Zn(se,oe,F),Y&&b.enter(de),O&&fs(F,null,oe,"mounted")},Q)},L=(F,B,q,oe,Q)=>{if(q&&h(F,q),oe)for(let le=0;le<oe.length;le++)h(F,oe[le]);if(Q){let le=Q.subTree;if(B===le||jm(le.type)&&(le.ssContent===B||le.ssFallback===B)){const I=Q.vnode;L(F,I,I.scopeId,I.slotScopeIds,Q.parent)}}},S=(F,B,q,oe,Q,le,I,me,de=0)=>{for(let se=de;se<F.length;se++){const he=F[se]=me?Pi(F[se]):ii(F[se]);_(null,he,B,q,oe,Q,le,I,me)}},M=(F,B,q,oe,Q,le,I)=>{const me=B.el=F.el;let{patchFlag:de,dynamicChildren:se,dirs:he}=B;de|=F.patchFlag&16;const R=F.props||bt,b=B.props||bt;let O;if(q&&ds(q,!1),(O=b.onVnodeBeforeUpdate)&&Zn(O,q,B,F),he&&fs(B,F,q,"beforeUpdate"),q&&ds(q,!0),(R.innerHTML&&b.innerHTML==null||R.textContent&&b.textContent==null)&&u(me,""),se?U(F.dynamicChildren,se,me,q,oe,Kl(B,Q),le):I||V(F,B,me,null,q,oe,Kl(B,Q),le,!1),de>0){if(de&16)D(me,R,b,q,Q);else if(de&2&&R.class!==b.class&&r(me,"class",null,b.class,Q),de&4&&r(me,"style",R.style,b.style,Q),de&8){const Y=B.dynamicProps;for(let ne=0;ne<Y.length;ne++){const j=Y[ne],Te=R[j],_e=b[j];(_e!==Te||j==="value")&&r(me,j,Te,_e,Q,q)}}de&1&&F.children!==B.children&&u(me,B.children)}else!I&&se==null&&D(me,R,b,q,Q);((O=b.onVnodeUpdated)||he)&&hn(()=>{O&&Zn(O,q,B,F),he&&fs(B,F,q,"updated")},oe)},U=(F,B,q,oe,Q,le,I)=>{for(let me=0;me<B.length;me++){const de=F[me],se=B[me],he=de.el&&(de.type===mt||!bs(de,se)||de.shapeFlag&198)?d(de.el):q;_(de,se,he,null,oe,Q,le,I,!0)}},D=(F,B,q,oe,Q)=>{if(B!==q){if(B!==bt)for(const le in B)!Zr(le)&&!(le in q)&&r(F,le,B[le],null,Q,oe);for(const le in q){if(Zr(le))continue;const I=q[le],me=B[le];I!==me&&le!=="value"&&r(F,le,me,I,Q,oe)}"value"in q&&r(F,"value",B.value,q.value,Q)}},N=(F,B,q,oe,Q,le,I,me,de)=>{const se=B.el=F?F.el:a(""),he=B.anchor=F?F.anchor:a("");let{patchFlag:R,dynamicChildren:b,slotScopeIds:O}=B;O&&(me=me?me.concat(O):O),F==null?(i(se,q,oe),i(he,q,oe),S(B.children||[],q,he,Q,le,I,me,de)):R>0&&R&64&&b&&F.dynamicChildren&&F.dynamicChildren.length===b.length?(U(F.dynamicChildren,b,q,Q,le,I,me),(B.key!=null||Q&&B===Q.subTree)&&Xm(F,B,!0)):V(F,B,q,he,Q,le,I,me,de)},z=(F,B,q,oe,Q,le,I,me,de)=>{B.slotScopeIds=me,F==null?B.shapeFlag&512?Q.ctx.activate(B,q,oe,I,de):G(B,q,oe,Q,le,I,de):k(F,B,de)},G=(F,B,q,oe,Q,le,I)=>{const me=F.component=Y0(F,oe,Q);if(Ml(F)&&(me.ctx.renderer=He),j0(me,!1,I),me.asyncDep){if(Q&&Q.registerDep(me,w,I),!F.el){const de=me.subTree=yt(on);m(null,de,B,q),F.placeholder=de.el}}else w(me,F,B,q,Q,le,I)},k=(F,B,q)=>{const oe=B.component=F.component;if(P0(F,B,q))if(oe.asyncDep&&!oe.asyncResolved){T(oe,B,q);return}else oe.next=B,oe.update();else B.el=F.el,oe.vnode=B},w=(F,B,q,oe,Q,le,I)=>{const me=()=>{if(F.isMounted){let{next:R,bu:b,u:O,parent:Y,vnode:ne}=F;{const Be=qm(F);if(Be){R&&(R.el=ne.el,T(F,R,I)),Be.asyncDep.then(()=>{hn(()=>{F.isUnmounted||se()},Q)});return}}let j=R,Te;ds(F,!1),R?(R.el=ne.el,T(F,R,I)):R=ne,b&&Ma(b),(Te=R.props&&R.props.onVnodeBeforeUpdate)&&Zn(Te,Y,R,ne),ds(F,!0);const _e=wd(F),Ne=F.subTree;F.subTree=_e,_(Ne,_e,d(Ne.el),ye(Ne),F,Q,le),R.el=_e.el,j===null&&L0(F,_e.el),O&&hn(O,Q),(Te=R.props&&R.props.onVnodeUpdated)&&hn(()=>Zn(Te,Y,R,ne),Q)}else{let R;const{el:b,props:O}=B,{bm:Y,m:ne,parent:j,root:Te,type:_e}=F,Ne=no(B);ds(F,!1),Y&&Ma(Y),!Ne&&(R=O&&O.onVnodeBeforeMount)&&Zn(R,j,B),ds(F,!0);{Te.ce&&Te.ce._hasShadowRoot()&&Te.ce._injectChildStyle(_e,F.parent?F.parent.type:void 0);const Be=F.subTree=wd(F);_(null,Be,q,oe,F,Q,le),B.el=Be.el}if(ne&&hn(ne,Q),!Ne&&(R=O&&O.onVnodeMounted)){const Be=B;hn(()=>Zn(R,j,Be),Q)}(B.shapeFlag&256||j&&no(j.vnode)&&j.vnode.shapeFlag&256)&&F.a&&hn(F.a,Q),F.isMounted=!0,B=q=oe=null}};F.scope.on();const de=F.effect=new em(me);F.scope.off();const se=F.update=de.run.bind(de),he=F.job=de.runIfDirty.bind(de);he.i=F,he.id=F.uid,de.scheduler=()=>Mf(he),ds(F,!0),se()},T=(F,B,q)=>{B.component=F;const oe=F.vnode.props;F.vnode=B,F.next=null,I0(F,B.props,oe,q),O0(F,B.children,q),Fi(),gd(F),Oi()},V=(F,B,q,oe,Q,le,I,me,de=!1)=>{const se=F&&F.children,he=F?F.shapeFlag:0,R=B.children,{patchFlag:b,shapeFlag:O}=B;if(b>0){if(b&128){re(se,R,q,oe,Q,le,I,me,de);return}else if(b&256){X(se,R,q,oe,Q,le,I,me,de);return}}O&8?(he&16&&ae(se,Q,le),R!==se&&u(q,R)):he&16?O&16?re(se,R,q,oe,Q,le,I,me,de):ae(se,Q,le,!0):(he&8&&u(q,""),O&16&&S(R,q,oe,Q,le,I,me,de))},X=(F,B,q,oe,Q,le,I,me,de)=>{F=F||rr,B=B||rr;const se=F.length,he=B.length,R=Math.min(se,he);let b;for(b=0;b<R;b++){const O=B[b]=de?Pi(B[b]):ii(B[b]);_(F[b],O,q,null,Q,le,I,me,de)}se>he?ae(F,Q,le,!0,!1,R):S(B,q,oe,Q,le,I,me,de,R)},re=(F,B,q,oe,Q,le,I,me,de)=>{let se=0;const he=B.length;let R=F.length-1,b=he-1;for(;se<=R&&se<=b;){const O=F[se],Y=B[se]=de?Pi(B[se]):ii(B[se]);if(bs(O,Y))_(O,Y,q,null,Q,le,I,me,de);else break;se++}for(;se<=R&&se<=b;){const O=F[R],Y=B[b]=de?Pi(B[b]):ii(B[b]);if(bs(O,Y))_(O,Y,q,null,Q,le,I,me,de);else break;R--,b--}if(se>R){if(se<=b){const O=b+1,Y=O<he?B[O].el:oe;for(;se<=b;)_(null,B[se]=de?Pi(B[se]):ii(B[se]),q,Y,Q,le,I,me,de),se++}}else if(se>b)for(;se<=R;)pe(F[se],Q,le,!0),se++;else{const O=se,Y=se,ne=new Map;for(se=Y;se<=b;se++){const Ae=B[se]=de?Pi(B[se]):ii(B[se]);Ae.key!=null&&ne.set(Ae.key,se)}let j,Te=0;const _e=b-Y+1;let Ne=!1,Be=0;const ge=new Array(_e);for(se=0;se<_e;se++)ge[se]=0;for(se=O;se<=R;se++){const Ae=F[se];if(Te>=_e){pe(Ae,Q,le,!0);continue}let Le;if(Ae.key!=null)Le=ne.get(Ae.key);else for(j=Y;j<=b;j++)if(ge[j-Y]===0&&bs(Ae,B[j])){Le=j;break}Le===void 0?pe(Ae,Q,le,!0):(ge[Le-Y]=se+1,Le>=Be?Be=Le:Ne=!0,_(Ae,B[Le],q,null,Q,le,I,me,de),Te++)}const xe=Ne?V0(ge):rr;for(j=xe.length-1,se=_e-1;se>=0;se--){const Ae=Y+se,Le=B[Ae],De=B[Ae+1],Ze=Ae+1<he?De.el||Ym(De):oe;ge[se]===0?_(null,Le,q,Ze,Q,le,I,me,de):Ne&&(j<0||se!==xe[j]?ce(Le,q,Ze,2):j--)}}},ce=(F,B,q,oe,Q=null)=>{const{el:le,type:I,transition:me,children:de,shapeFlag:se}=F;if(se&6){ce(F.component.subTree,B,q,oe);return}if(se&128){F.suspense.move(B,q,oe);return}if(se&64){I.move(F,B,q,He);return}if(I===mt){i(le,B,q);for(let R=0;R<de.length;R++)ce(de[R],B,q,oe);i(F.anchor,B,q);return}if(I===ba){E(F,B,q);return}if(oe!==2&&se&1&&me)if(oe===0)me.beforeEnter(le),i(le,B,q),hn(()=>me.enter(le),Q);else{const{leave:R,delayLeave:b,afterLeave:O}=me,Y=()=>{F.ctx.isUnmounted?s(le):i(le,B,q)},ne=()=>{le._isLeaving&&le[ti](!0),R(le,()=>{Y(),O&&O()})};b?b(le,Y,ne):ne()}else i(le,B,q)},pe=(F,B,q,oe=!1,Q=!1)=>{const{type:le,props:I,ref:me,children:de,dynamicChildren:se,shapeFlag:he,patchFlag:R,dirs:b,cacheIndex:O}=F;if(R===-2&&(Q=!1),me!=null&&(Fi(),to(me,null,q,F,!0),Oi()),O!=null&&(B.renderCache[O]=void 0),he&256){B.ctx.deactivate(F);return}const Y=he&1&&b,ne=!no(F);let j;if(ne&&(j=I&&I.onVnodeBeforeUnmount)&&Zn(j,B,F),he&6)dt(F.component,q,oe);else{if(he&128){F.suspense.unmount(q,oe);return}Y&&fs(F,null,B,"beforeUnmount"),he&64?F.type.remove(F,B,q,He,oe):se&&!se.hasOnce&&(le!==mt||R>0&&R&64)?ae(se,B,q,!1,!0):(le===mt&&R&384||!Q&&he&16)&&ae(de,B,q),oe&&Ge(F)}(ne&&(j=I&&I.onVnodeUnmounted)||Y)&&hn(()=>{j&&Zn(j,B,F),Y&&fs(F,null,B,"unmounted")},q)},Ge=F=>{const{type:B,el:q,anchor:oe,transition:Q}=F;if(B===mt){ut(q,oe);return}if(B===ba){y(F);return}const le=()=>{s(q),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(F.shapeFlag&1&&Q&&!Q.persisted){const{leave:I,delayLeave:me}=Q,de=()=>I(q,le);me?me(F.el,le,de):de()}else le()},ut=(F,B)=>{let q;for(;F!==B;)q=f(F),s(F),F=q;s(B)},dt=(F,B,q)=>{const{bum:oe,scope:Q,job:le,subTree:I,um:me,m:de,a:se}=F;Cd(de),Cd(se),oe&&Ma(oe),Q.stop(),le&&(le.flags|=8,pe(I,F,B,q)),me&&hn(me,B),hn(()=>{F.isUnmounted=!0},B)},ae=(F,B,q,oe=!1,Q=!1,le=0)=>{for(let I=le;I<F.length;I++)pe(F[I],B,q,oe,Q)},ye=F=>{if(F.shapeFlag&6)return ye(F.component.subTree);if(F.shapeFlag&128)return F.suspense.next();const B=f(F.anchor||F.el),q=B&&B[e0];return q?f(q):B};let Me=!1;const je=(F,B,q)=>{let oe;F==null?B._vnode&&(pe(B._vnode,null,null,!0),oe=B._vnode.component):_(B._vnode||null,F,B,null,null,null,q),B._vnode=F,Me||(Me=!0,gd(oe),xm(),Me=!1)},He={p:_,um:pe,m:ce,r:Ge,mt:G,mc:S,pc:V,pbc:U,n:ye,o:t};return{render:je,hydrate:void 0,createApp:E0(je)}}function Kl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ds({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function z0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Xm(t,e,n=!1){const i=t.children,s=e.children;if(We(i)&&We(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Pi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Xm(o,a)),a.type===wl&&(a.patchFlag===-1&&(a=s[r]=Pi(a)),a.el=o.el),a.type===on&&!a.el&&(a.el=o.el)}}function V0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function qm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qm(e)}function Cd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Ym(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Ym(e.subTree):null}const jm=t=>t.__isSuspense;function H0(t,e){e&&e.pendingBranch?We(t)?e.effects.push(...t):e.effects.push(t):Yv(t)}const mt=Symbol.for("v-fgt"),wl=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),ba=Symbol.for("v-stc"),so=[];let En=null;function ue(t=!1){so.push(En=t?null:[])}function G0(){so.pop(),En=so[so.length-1]||null}let fo=1;function Wa(t,e=!1){fo+=t,t<0&&En&&e&&(En.hasOnce=!0)}function Km(t){return t.dynamicChildren=fo>0?En||rr:null,G0(),fo>0&&En&&En.push(t),t}function fe(t,e,n,i,s,r){return Km(v(t,e,n,i,s,r,!0))}function Zm(t,e,n,i,s){return Km(yt(t,e,n,i,s,!0))}function $a(t){return t?t.__v_isVNode===!0:!1}function bs(t,e){return t.type===e.type&&t.key===e.key}const Jm=({key:t})=>t??null,Ea=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Pt(t)||At(t)||Ye(t)?{i:bn,r:t,k:e,f:!!n}:t:null);function v(t,e=null,n=null,i=0,s=null,r=t===mt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jm(e),ref:e&&Ea(e),scopeId:Sm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bn};return a?(Tf(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Pt(n)?8:16),fo>0&&!o&&En&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&En.push(c),c}const yt=W0;function W0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Dm)&&(t=on),$a(t)){const a=os(t,e,!0);return n&&Tf(a,n),fo>0&&!r&&En&&(a.shapeFlag&6?En[En.indexOf(t)]=a:En.push(a)),a.patchFlag=-2,a}if(ex(t)&&(t=t.__vccOpts),e){e=$0(e);let{class:a,style:c}=e;a&&!Pt(a)&&(e.class=pt(a)),ft(c)&&(yl(c)&&!We(c)&&(c=Bt({},c)),e.style=zn(c))}const o=Pt(t)?1:jm(t)?128:Em(t)?64:ft(t)?4:Ye(t)?2:0;return v(t,e,n,i,s,o,r,!0)}function $0(t){return t?yl(t)||zm(t)?Bt({},t):t:null}function os(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=t,l=e?eg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Jm(l),ref:e&&e.ref?n&&r?We(r)?r.concat(Ea(e)):[r,Ea(e)]:Ea(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&os(t.ssContent),ssFallback:t.ssFallback&&os(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&uo(u,c.clone(u)),u}function pr(t=" ",e=0){return yt(wl,null,t,e)}function Qm(t,e){const n=yt(ba,null,t);return n.staticCount=e,n}function et(t="",e=!1){return e?(ue(),Zm(on,null,t)):yt(on,null,t)}function ii(t){return t==null||typeof t=="boolean"?yt(on):We(t)?yt(mt,null,t.slice()):$a(t)?Pi(t):yt(wl,null,String(t))}function Pi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:os(t)}function Tf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(We(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Tf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!zm(e)?e._ctx=bn:s===3&&bn&&(bn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:bn},n=32):(e=String(e),i&64?(n=16,e=[pr(e)]):n=8);t.children=e,t.shapeFlag|=n}function eg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=pt([e.class,i.class]));else if(s==="style")e.style=zn([e.style,i.style]);else if(fl(s)){const r=e[s],o=i[s];o&&r!==o&&!(We(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Zn(t,e,n,i=null){Xn(t,e,7,[n,i])}const X0=Um();let q0=0;function Y0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||X0,r={uid:q0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hm(i,s),emitsOptions:Fm(i,s),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:i.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=T0.bind(null,r),t.ce&&t.ce(r),r}let Zt=null;const Af=()=>Zt||bn;let Xa,tu;{const t=_l(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Xa=e("__VUE_INSTANCE_SETTERS__",n=>Zt=n),tu=e("__VUE_SSR_SETTERS__",n=>ho=n)}const Ao=t=>{const e=Zt;return Xa(t),t.scope.on(),()=>{t.scope.off(),Xa(e)}},Rd=()=>{Zt&&Zt.scope.off(),Xa(null)};function tg(t){return t.vnode.shapeFlag&4}let ho=!1;function j0(t,e=!1,n=!1){e&&tu(e);const{props:i,children:s}=t.vnode,r=tg(t);D0(t,i,r,e),F0(t,s,n||e);const o=r?K0(t,e):void 0;return e&&tu(!1),o}function K0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,_0);const{setup:i}=n;if(i){Fi();const s=t.setupContext=i.length>1?J0(t):null,r=Ao(t),o=wo(i,t,0,[t.props,s]),a=Wp(o);if(Oi(),r(),(a||t.sp)&&!no(t)&&Pm(t),a){if(o.then(Rd,Rd),e)return o.then(c=>{Pd(t,c)}).catch(c=>{Sl(c,t,0)});t.asyncDep=o}else Pd(t,o)}else ng(t)}function Pd(t,e,n){Ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ft(e)&&(t.setupState=mm(e)),ng(t)}function ng(t,e,n){const i=t.type;t.render||(t.render=i.render||ui);{const s=Ao(t);Fi();try{v0(t)}finally{Oi(),s()}}}const Z0={get(t,e){return Kt(t,"get",""),t[e]}};function J0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Z0),slots:t.slots,emit:t.emit,expose:e}}function Tl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(mm(Sf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in io)return io[n](t)},has(e,n){return n in e||n in io}})):t.proxy}function Q0(t,e=!0){return Ye(t)?t.displayName||t.name:t.name||e&&t.__name}function ex(t){return Ye(t)&&"__vccOpts"in t}const Et=(t,e)=>Gv(t,e,ho);function tx(t,e,n){try{Wa(-1);const i=arguments.length;return i===2?ft(e)&&!We(e)?$a(e)?yt(t,null,[e]):yt(t,e):yt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&$a(n)&&(n=[n]),yt(t,e,n))}finally{Wa(1)}}const nx="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nu;const Ld=typeof window<"u"&&window.trustedTypes;if(Ld)try{nu=Ld.createPolicy("vue",{createHTML:t=>t})}catch{}const ig=nu?t=>nu.createHTML(t):t=>t,ix="http://www.w3.org/2000/svg",sx="http://www.w3.org/1998/Math/MathML",Ri=typeof document<"u"?document:null,Dd=Ri&&Ri.createElement("template"),rx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Ri.createElementNS(ix,t):e==="mathml"?Ri.createElementNS(sx,t):n?Ri.createElement(t,{is:n}):Ri.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Ri.createTextNode(t),createComment:t=>Ri.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ri.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Dd.innerHTML=ig(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Dd.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qi="transition",Ir="animation",po=Symbol("_vtc"),sg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ox=Bt({},wm,sg),ax=t=>(t.displayName="Transition",t.props=ox,t),Id=ax((t,{slots:e})=>tx(i0,lx(t),e)),hs=(t,e=[])=>{We(t)?t.forEach(n=>n(...e)):t&&t(...e)},Nd=t=>t?We(t)?t.some(e=>e.length>1):t.length>1:!1;function lx(t){const e={};for(const N in t)N in sg||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=cx(s),_=g&&g[0],p=g&&g[1],{onBeforeEnter:m,onEnter:x,onEnterCancelled:E,onLeave:y,onLeaveCancelled:C,onBeforeAppear:A=m,onAppear:L=x,onAppearCancelled:S=E}=e,M=(N,z,G,k)=>{N._enterCancelled=k,ps(N,z?u:a),ps(N,z?l:o),G&&G()},U=(N,z)=>{N._isLeaving=!1,ps(N,d),ps(N,h),ps(N,f),z&&z()},D=N=>(z,G)=>{const k=N?L:x,w=()=>M(z,N,G);hs(k,[z,w]),Ud(()=>{ps(z,N?c:r),Mi(z,N?u:a),Nd(k)||Fd(z,i,_,w)})};return Bt(e,{onBeforeEnter(N){hs(m,[N]),Mi(N,r),Mi(N,o)},onBeforeAppear(N){hs(A,[N]),Mi(N,c),Mi(N,l)},onEnter:D(!1),onAppear:D(!0),onLeave(N,z){N._isLeaving=!0;const G=()=>U(N,z);Mi(N,d),N._enterCancelled?(Mi(N,f),kd(N)):(kd(N),Mi(N,f)),Ud(()=>{N._isLeaving&&(ps(N,d),Mi(N,h),Nd(y)||Fd(N,i,p,G))}),hs(y,[N,G])},onEnterCancelled(N){M(N,!1,void 0,!0),hs(E,[N])},onAppearCancelled(N){M(N,!0,void 0,!0),hs(S,[N])},onLeaveCancelled(N){U(N),hs(C,[N])}})}function cx(t){if(t==null)return null;if(ft(t))return[Zl(t.enter),Zl(t.leave)];{const e=Zl(t);return[e,e]}}function Zl(t){return rv(t)}function Mi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[po]||(t[po]=new Set)).add(e)}function ps(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[po];n&&(n.delete(e),n.size||(t[po]=void 0))}function Ud(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ux=0;function Fd(t,e,n,i){const s=t._endId=++ux,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:c}=fx(t,e);if(!o)return i();const l=o+"end";let u=0;const d=()=>{t.removeEventListener(l,f),r()},f=h=>{h.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),t.addEventListener(l,f)}function fx(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(`${qi}Delay`),r=i(`${qi}Duration`),o=Od(s,r),a=i(`${Ir}Delay`),c=i(`${Ir}Duration`),l=Od(a,c);let u=null,d=0,f=0;e===qi?o>0&&(u=qi,d=o,f=r.length):e===Ir?l>0&&(u=Ir,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?qi:Ir:null,f=u?u===qi?r.length:c.length:0);const h=u===qi&&/\b(?:transform|all)(?:,|$)/.test(i(`${qi}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function Od(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Bd(n)+Bd(t[i])))}function Bd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function kd(t){return(t?t.ownerDocument:document).body.offsetHeight}function dx(t,e,n){const i=t[po];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const zd=Symbol("_vod"),hx=Symbol("_vsh"),px=Symbol(""),mx=/(?:^|;)\s*display\s*:/;function gx(t,e,n){const i=t.style,s=Pt(n);let r=!1;if(n&&!s){if(e)if(Pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&wa(i,a,"")}else for(const o in e)n[o]==null&&wa(i,o,"");for(const o in n)o==="display"&&(r=!0),wa(i,o,n[o])}else if(s){if(e!==n){const o=i[px];o&&(n+=";"+o),i.cssText=n,r=mx.test(n)}}else e&&t.removeAttribute("style");zd in t&&(t[zd]=r?i.display:"",t[hx]&&(i.display="none"))}const Vd=/\s*!important$/;function wa(t,e,n){if(We(n))n.forEach(i=>wa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=_x(t,e);Vd.test(n)?t.setProperty(ls(i),n.replace(Vd,""),"important"):t[i]=n}}const Hd=["Webkit","Moz","ms"],Jl={};function _x(t,e){const n=Jl[e];if(n)return n;let i=ln(e);if(i!=="filter"&&i in t)return Jl[e]=i;i=ml(i);for(let s=0;s<Hd.length;s++){const r=Hd[s]+i;if(r in t)return Jl[e]=r}return e}const Gd="http://www.w3.org/1999/xlink";function Wd(t,e,n,i,s,r=fv(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gd,e.slice(6,e.length)):t.setAttributeNS(Gd,e,n):n==null||r&&!Yp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":gi(n)?String(n):n)}function $d(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ig(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Yp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Es(t,e,n,i){t.addEventListener(e,n,i)}function vx(t,e,n,i){t.removeEventListener(e,n,i)}const Xd=Symbol("_vei");function xx(t,e,n,i,s=null){const r=t[Xd]||(t[Xd]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=yx(e);if(i){const l=r[e]=bx(i,s);Es(t,a,l,c)}else o&&(vx(t,a,o,c),r[e]=void 0)}}const qd=/(?:Once|Passive|Capture)$/;function yx(t){let e;if(qd.test(t)){e={};let i;for(;i=t.match(qd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ls(t.slice(2)),e]}let Ql=0;const Sx=Promise.resolve(),Mx=()=>Ql||(Sx.then(()=>Ql=0),Ql=Date.now());function bx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Xn(Ex(i,n.value),e,5,[i])};return n.value=t,n.attached=Mx(),n}function Ex(t,e){if(We(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Yd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wx=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?dx(t,i,o):e==="style"?gx(t,n,i):fl(e)?hf(e)||xx(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tx(t,e,i,o))?($d(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wd(t,e,i,o,r,e!=="value")):t._isVueCE&&(Ax(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Pt(i)))?$d(t,ln(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Wd(t,e,i,o))};function Tx(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yd(e)&&Ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yd(e)&&Pt(n)?!1:e in t}function Ax(t,e){const n=t._def.props;if(!n)return!1;const i=ln(e);return Array.isArray(n)?n.some(s=>ln(s)===i):Object.keys(n).some(s=>ln(s)===i)}const qa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return We(e)?n=>Ma(e,n):e};function Cx(t){t.target.composing=!0}function jd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const lr=Symbol("_assign");function Kd(t,e,n){return e&&(t=t.trim()),n&&(t=gl(t)),t}const Qt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[lr]=qa(s);const r=i||s.props&&s.props.type==="number";Es(t,e?"change":"input",o=>{o.target.composing||t[lr](Kd(t.value,n,r))}),(n||r)&&Es(t,"change",()=>{t.value=Kd(t.value,n,r)}),e||(Es(t,"compositionstart",Cx),Es(t,"compositionend",jd),Es(t,"change",jd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[lr]=qa(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?gl(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===c)||(t.value=c))}},ro={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=dl(e);Es(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?gl(Ya(o)):Ya(o));t[lr](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,To(()=>{t._assigning=!1})}),t[lr]=qa(i)},mounted(t,{value:e}){Zd(t,e)},beforeUpdate(t,e,n){t[lr]=qa(n)},updated(t,{value:e}){t._assigning||Zd(t,e)}};function Zd(t,e){const n=t.multiple,i=We(e);if(!(n&&!i&&!dl(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=Ya(o);if(n)if(i){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=hv(e,a)>-1}else o.selected=e.has(a);else if(Eo(Ya(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ya(t){return"_value"in t?t._value:t.value}const Rx=["ctrl","shift","alt","meta"],Px={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Rx.some(n=>t[`${n}Key`]&&!e.includes(n))},ja=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Px[e[o]];if(a&&a(s,e))return}return t(s,...r)})},Lx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Cf=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=ls(s.key);if(e.some(o=>o===r||Lx[o]===r))return t(s)})},Dx=Bt({patchProp:wx},rx);let Jd;function Ix(){return Jd||(Jd=B0(Dx))}const Nx=(...t)=>{const e=Ix().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Fx(i);if(!s)return;const r=e._component;!Ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Ux(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ux(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Fx(t){return Pt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let rg;const Al=t=>rg=t,og=Symbol();function iu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var oo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(oo||(oo={}));function Ox(){const t=Jp(!0),e=t.run(()=>we({}));let n=[],i=[];const s=Sf({install(r){Al(s),s._a=r,r.provide(og,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ag=()=>{};function Qd(t,e,n,i=ag){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Qp()&&pv(s),s}function Gs(t,...e){t.slice().forEach(n=>{n(...e)})}const Bx=t=>t(),eh=Symbol(),ec=Symbol();function su(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];iu(s)&&iu(i)&&t.hasOwnProperty(n)&&!At(i)&&!fi(i)?t[n]=su(s,i):t[n]=i}return t}const kx=Symbol();function zx(t){return!iu(t)||!t.hasOwnProperty(kx)}const{assign:es}=Object;function Vx(t){return!!(At(t)&&t.effect)}function Hx(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Bv(n.state.value[t]);return es(u,r,Object.keys(o||{}).reduce((d,f)=>(d[f]=Sf(Et(()=>{Al(n);const h=n._s.get(t);return o[f].call(h,h)})),d),{}))}return c=lg(t,l,e,n,i,!0),c}function lg(t,e,n={},i,s,r){let o;const a=es({actions:{}},n),c={deep:!0};let l,u,d=[],f=[],h;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={});let _;function p(S){let M;l=u=!1,typeof S=="function"?(S(i.state.value[t]),M={type:oo.patchFunction,storeId:t,events:h}):(su(i.state.value[t],S),M={type:oo.patchObject,payload:S,storeId:t,events:h});const U=_=Symbol();To().then(()=>{_===U&&(l=!0)}),u=!0,Gs(d,M,i.state.value[t])}const m=r?function(){const{state:M}=n,U=M?M():{};this.$patch(D=>{es(D,U)})}:ag;function x(){o.stop(),d=[],f=[],i._s.delete(t)}const E=(S,M="")=>{if(eh in S)return S[ec]=M,S;const U=function(){Al(i);const D=Array.from(arguments),N=[],z=[];function G(T){N.push(T)}function k(T){z.push(T)}Gs(f,{args:D,name:U[ec],store:C,after:G,onError:k});let w;try{w=S.apply(this&&this.$id===t?this:C,D)}catch(T){throw Gs(z,T),T}return w instanceof Promise?w.then(T=>(Gs(N,T),T)).catch(T=>(Gs(z,T),Promise.reject(T))):(Gs(N,w),w)};return U[eh]=!0,U[ec]=M,U},y={_p:i,$id:t,$onAction:Qd.bind(null,f),$patch:p,$reset:m,$subscribe(S,M={}){const U=Qd(d,S,M.detached,()=>D()),D=o.run(()=>di(()=>i.state.value[t],N=>{(M.flush==="sync"?u:l)&&S({storeId:t,type:oo.direct,events:h},N)},es({},c,M)));return U},$dispose:x},C=xl(y);i._s.set(t,C);const L=(i._a&&i._a.runWithContext||Bx)(()=>i._e.run(()=>(o=Jp()).run(()=>e({action:E}))));for(const S in L){const M=L[S];if(At(M)&&!Vx(M)||fi(M))r||(g&&zx(M)&&(At(M)?M.value=g[S]:su(M,g[S])),i.state.value[t][S]=M);else if(typeof M=="function"){const U=E(M,S);L[S]=U,a.actions[S]=M}}return es(C,L),es(st(C),L),Object.defineProperty(C,"$state",{get:()=>i.state.value[t],set:S=>{p(M=>{es(M,S)})}}),i._p.forEach(S=>{es(C,o.run(()=>S({store:C,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate(C.$state,g),l=!0,u=!0,C}/*! #__NO_SIDE_EFFECTS__ */function Rf(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,c){const l=Kv();return a=a||(l?eo(og,null):null),a&&Al(a),a=rg,a._s.has(i)||(r?lg(i,e,s,a):Hx(i,s,a)),a._s.get(i)}return o.$id=i,o}function wr(t){{const e=st(t),n={};for(const i in e){const s=e[i];s.effect?n[i]=Et({get:()=>t[i],set(r){t[i]=r}}):(At(s)||fi(s))&&(n[i]=Vv(t,i))}return n}}function cg(t,e){return function(){return t.apply(e,arguments)}}const{toString:Gx}=Object.prototype,{getPrototypeOf:Pf}=Object,{iterator:Cl,toStringTag:ug}=Symbol,Rl=(t=>e=>{const n=Gx.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Yn=t=>(t=t.toLowerCase(),e=>Rl(e)===t),Pl=t=>e=>typeof e===t,{isArray:Tr}=Array,mr=Pl("undefined");function Co(t){return t!==null&&!mr(t)&&t.constructor!==null&&!mr(t.constructor)&&gn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const fg=Yn("ArrayBuffer");function Wx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&fg(t.buffer),e}const $x=Pl("string"),gn=Pl("function"),dg=Pl("number"),Ro=t=>t!==null&&typeof t=="object",Xx=t=>t===!0||t===!1,Ta=t=>{if(Rl(t)!=="object")return!1;const e=Pf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(ug in t)&&!(Cl in t)},qx=t=>{if(!Ro(t)||Co(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Yx=Yn("Date"),jx=Yn("File"),Kx=t=>!!(t&&typeof t.uri<"u"),Zx=t=>t&&typeof t.getParts<"u",Jx=Yn("Blob"),Qx=Yn("FileList"),ey=t=>Ro(t)&&gn(t.pipe);function ty(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const th=ty(),nh=typeof th.FormData<"u"?th.FormData:void 0,ny=t=>{let e;return t&&(nh&&t instanceof nh||gn(t.append)&&((e=Rl(t))==="formdata"||e==="object"&&gn(t.toString)&&t.toString()==="[object FormData]"))},iy=Yn("URLSearchParams"),[sy,ry,oy,ay]=["ReadableStream","Request","Response","Headers"].map(Yn),ly=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Po(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Tr(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(Co(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function hg(t,e){if(Co(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const Cs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,pg=t=>!mr(t)&&t!==Cs;function ru(){const{caseless:t,skipUndefined:e}=pg(this)&&this||{},n={},i=(s,r)=>{if(r==="__proto__"||r==="constructor"||r==="prototype")return;const o=t&&hg(n,r)||r;Ta(n[o])&&Ta(s)?n[o]=ru(n[o],s):Ta(s)?n[o]=ru({},s):Tr(s)?n[o]=s.slice():(!e||!mr(s))&&(n[o]=s)};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&Po(arguments[s],i);return n}const cy=(t,e,n,{allOwnKeys:i}={})=>(Po(e,(s,r)=>{n&&gn(s)?Object.defineProperty(t,r,{value:cg(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),uy=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),fy=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},dy=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Pf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},hy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},py=t=>{if(!t)return null;if(Tr(t))return t;let e=t.length;if(!dg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},my=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Pf(Uint8Array)),gy=(t,e)=>{const i=(t&&t[Cl]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},_y=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},vy=Yn("HTMLFormElement"),xy=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),ih=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),yy=Yn("RegExp"),mg=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Po(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},Sy=t=>{mg(t,(e,n)=>{if(gn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(gn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},My=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Tr(t)?i(t):i(String(t).split(e)),n},by=()=>{},Ey=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function wy(t){return!!(t&&gn(t.append)&&t[ug]==="FormData"&&t[Cl])}const Ty=t=>{const e=new Array(10),n=(i,s)=>{if(Ro(i)){if(e.indexOf(i)>=0)return;if(Co(i))return i;if(!("toJSON"in i)){e[s]=i;const r=Tr(i)?[]:{};return Po(i,(o,a)=>{const c=n(o,s+1);!mr(c)&&(r[a]=c)}),e[s]=void 0,r}}return i};return n(t,0)},Ay=Yn("AsyncFunction"),Cy=t=>t&&(Ro(t)||gn(t))&&gn(t.then)&&gn(t.catch),gg=((t,e)=>t?setImmediate:e?((n,i)=>(Cs.addEventListener("message",({source:s,data:r})=>{s===Cs&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),Cs.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",gn(Cs.postMessage)),Ry=typeof queueMicrotask<"u"?queueMicrotask.bind(Cs):typeof process<"u"&&process.nextTick||gg,Py=t=>t!=null&&gn(t[Cl]),J={isArray:Tr,isArrayBuffer:fg,isBuffer:Co,isFormData:ny,isArrayBufferView:Wx,isString:$x,isNumber:dg,isBoolean:Xx,isObject:Ro,isPlainObject:Ta,isEmptyObject:qx,isReadableStream:sy,isRequest:ry,isResponse:oy,isHeaders:ay,isUndefined:mr,isDate:Yx,isFile:jx,isReactNativeBlob:Kx,isReactNative:Zx,isBlob:Jx,isRegExp:yy,isFunction:gn,isStream:ey,isURLSearchParams:iy,isTypedArray:my,isFileList:Qx,forEach:Po,merge:ru,extend:cy,trim:ly,stripBOM:uy,inherits:fy,toFlatObject:dy,kindOf:Rl,kindOfTest:Yn,endsWith:hy,toArray:py,forEachEntry:gy,matchAll:_y,isHTMLForm:vy,hasOwnProperty:ih,hasOwnProp:ih,reduceDescriptors:mg,freezeMethods:Sy,toObjectSet:My,toCamelCase:xy,noop:by,toFiniteNumber:Ey,findKey:hg,global:Cs,isContextDefined:pg,isSpecCompliantForm:wy,toJSONObject:Ty,isAsyncFn:Ay,isThenable:Cy,setImmediate:gg,asap:Ry,isIterable:Py};let $e=class _g extends Error{static from(e,n,i,s,r,o){const a=new _g(e.message,n||e.code,i,s,r);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:J.toJSONObject(this.config),code:this.code,status:this.status}}};$e.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";$e.ERR_BAD_OPTION="ERR_BAD_OPTION";$e.ECONNABORTED="ECONNABORTED";$e.ETIMEDOUT="ETIMEDOUT";$e.ERR_NETWORK="ERR_NETWORK";$e.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";$e.ERR_DEPRECATED="ERR_DEPRECATED";$e.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";$e.ERR_BAD_REQUEST="ERR_BAD_REQUEST";$e.ERR_CANCELED="ERR_CANCELED";$e.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";$e.ERR_INVALID_URL="ERR_INVALID_URL";const Ly=null;function ou(t){return J.isPlainObject(t)||J.isArray(t)}function vg(t){return J.endsWith(t,"[]")?t.slice(0,-2):t}function tc(t,e,n){return t?t.concat(e).map(function(s,r){return s=vg(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function Dy(t){return J.isArray(t)&&!t.some(ou)}const Iy=J.toFlatObject(J,{},null,function(e){return/^is[A-Z]/.test(e)});function Ll(t,e,n){if(!J.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=J.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,p){return!J.isUndefined(p[_])});const i=n.metaTokens,s=n.visitor||u,r=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&J.isSpecCompliantForm(e);if(!J.isFunction(s))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(J.isDate(g))return g.toISOString();if(J.isBoolean(g))return g.toString();if(!c&&J.isBlob(g))throw new $e("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(g)||J.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,_,p){let m=g;if(J.isReactNative(e)&&J.isReactNativeBlob(g))return e.append(tc(p,_,r),l(g)),!1;if(g&&!p&&typeof g=="object"){if(J.endsWith(_,"{}"))_=i?_:_.slice(0,-2),g=JSON.stringify(g);else if(J.isArray(g)&&Dy(g)||(J.isFileList(g)||J.endsWith(_,"[]"))&&(m=J.toArray(g)))return _=vg(_),m.forEach(function(E,y){!(J.isUndefined(E)||E===null)&&e.append(o===!0?tc([_],y,r):o===null?_:_+"[]",l(E))}),!1}return ou(g)?!0:(e.append(tc(p,_,r),l(g)),!1)}const d=[],f=Object.assign(Iy,{defaultVisitor:u,convertValue:l,isVisitable:ou});function h(g,_){if(!J.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));d.push(g),J.forEach(g,function(m,x){(!(J.isUndefined(m)||m===null)&&s.call(e,m,J.isString(x)?x.trim():x,_,f))===!0&&h(m,_?_.concat(x):[x])}),d.pop()}}if(!J.isObject(t))throw new TypeError("data must be an object");return h(t),e}function sh(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Lf(t,e){this._pairs=[],t&&Ll(t,this,e)}const xg=Lf.prototype;xg.append=function(e,n){this._pairs.push([e,n])};xg.toString=function(e){const n=e?function(i){return e.call(this,i,sh)}:sh;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ny(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function yg(t,e,n){if(!e)return t;const i=n&&n.encode||Ny,s=J.isFunction(n)?{serialize:n}:n,r=s&&s.serialize;let o;if(r?o=r(e,s):o=J.isURLSearchParams(e)?e.toString():new Lf(e,s).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class rh{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){J.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Df={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Uy=typeof URLSearchParams<"u"?URLSearchParams:Lf,Fy=typeof FormData<"u"?FormData:null,Oy=typeof Blob<"u"?Blob:null,By={isBrowser:!0,classes:{URLSearchParams:Uy,FormData:Fy,Blob:Oy},protocols:["http","https","file","blob","url","data"]},If=typeof window<"u"&&typeof document<"u",au=typeof navigator=="object"&&navigator||void 0,ky=If&&(!au||["ReactNative","NativeScript","NS"].indexOf(au.product)<0),zy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Vy=If&&window.location.href||"http://localhost",Hy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:If,hasStandardBrowserEnv:ky,hasStandardBrowserWebWorkerEnv:zy,navigator:au,origin:Vy},Symbol.toStringTag,{value:"Module"})),Jt={...Hy,...By};function Gy(t,e){return Ll(t,new Jt.classes.URLSearchParams,{visitor:function(n,i,s,r){return Jt.isNode&&J.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function Wy(t){return J.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function $y(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Sg(t){function e(n,i,s,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=r>=n.length;return o=!o&&J.isArray(s)?s.length:o,c?(J.hasOwnProp(s,o)?s[o]=[s[o],i]:s[o]=i,!a):((!s[o]||!J.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&J.isArray(s[o])&&(s[o]=$y(s[o])),!a)}if(J.isFormData(t)&&J.isFunction(t.entries)){const n={};return J.forEachEntry(t,(i,s)=>{e(Wy(i),s,n,0)}),n}return null}function Xy(t,e,n){if(J.isString(t))try{return(e||JSON.parse)(t),J.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Lo={transitional:Df,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=J.isObject(e);if(r&&J.isHTMLForm(e)&&(e=new FormData(e)),J.isFormData(e))return s?JSON.stringify(Sg(e)):e;if(J.isArrayBuffer(e)||J.isBuffer(e)||J.isStream(e)||J.isFile(e)||J.isBlob(e)||J.isReadableStream(e))return e;if(J.isArrayBufferView(e))return e.buffer;if(J.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Gy(e,this.formSerializer).toString();if((a=J.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ll(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return r||s?(n.setContentType("application/json",!1),Xy(e)):e}],transformResponse:[function(e){const n=this.transitional||Lo.transitional,i=n&&n.forcedJSONParsing,s=this.responseType==="json";if(J.isResponse(e)||J.isReadableStream(e))return e;if(e&&J.isString(e)&&(i&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?$e.from(a,$e.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jt.classes.FormData,Blob:Jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],t=>{Lo.headers[t]={}});const qy=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Yy=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&qy[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},oh=Symbol("internals");function Nr(t){return t&&String(t).trim().toLowerCase()}function Aa(t){return t===!1||t==null?t:J.isArray(t)?t.map(Aa):String(t)}function jy(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const Ky=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function nc(t,e,n,i,s){if(J.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!J.isString(e)){if(J.isString(i))return e.indexOf(i)!==-1;if(J.isRegExp(i))return i.test(e)}}function Zy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function Jy(t,e){const n=J.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let _n=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,c,l){const u=Nr(c);if(!u)throw new Error("header name must be a non-empty string");const d=J.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||c]=Aa(a))}const o=(a,c)=>J.forEach(a,(l,u)=>r(l,u,c));if(J.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(J.isString(e)&&(e=e.trim())&&!Ky(e))o(Yy(e),n);else if(J.isObject(e)&&J.isIterable(e)){let a={},c,l;for(const u of e){if(!J.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?J.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=Nr(e),e){const i=J.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return jy(s);if(J.isFunction(n))return n.call(this,s,i);if(J.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Nr(e),e){const i=J.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||nc(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=Nr(o),o){const a=J.findKey(i,o);a&&(!n||nc(i,i[a],a,n))&&(delete i[a],s=!0)}}return J.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||nc(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return J.forEach(this,(s,r)=>{const o=J.findKey(i,r);if(o){n[o]=Aa(s),delete n[r];return}const a=e?Zy(r):String(r).trim();a!==r&&delete n[r],n[a]=Aa(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return J.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&J.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[oh]=this[oh]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Nr(o);i[a]||(Jy(s,o),i[a]=!0)}return J.isArray(e)?e.forEach(r):r(e),this}};_n.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);J.reduceDescriptors(_n.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});J.freezeMethods(_n);function ic(t,e){const n=this||Lo,i=e||n,s=_n.from(i.headers);let r=i.data;return J.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Mg(t){return!!(t&&t.__CANCEL__)}let Do=class extends $e{constructor(e,n,i){super(e??"canceled",$e.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function bg(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new $e("Request failed with status code "+n.status,[$e.ERR_BAD_REQUEST,$e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Qy(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function eS(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=i[r];o||(o=l),n[s]=c,i[s]=l;let d=r,f=0;for(;d!==s;)f+=n[d++],d=d%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),l-o<e)return;const h=u&&l-u;return h?Math.round(f*1e3/h):void 0}}function tS(t,e){let n=0,i=1e3/e,s,r;const o=(l,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...l)};return[(...l)=>{const u=Date.now(),d=u-n;d>=i?o(l,u):(s=l,r||(r=setTimeout(()=>{r=null,o(s)},i-d)))},()=>s&&o(s)]}const Ka=(t,e,n=3)=>{let i=0;const s=eS(50,250);return tS(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,c=o-i,l=s(c),u=o<=a;i=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},ah=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},lh=t=>(...e)=>J.asap(()=>t(...e)),nS=Jt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Jt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Jt.origin),Jt.navigator&&/(msie|trident)/i.test(Jt.navigator.userAgent)):()=>!0,iS=Jt.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];J.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),J.isString(i)&&a.push(`path=${i}`),J.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),J.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function sS(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function rS(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Eg(t,e,n){let i=!sS(e);return t&&(i||n==!1)?rS(t,e):e}const ch=t=>t instanceof _n?{...t}:t;function Os(t,e){e=e||{};const n={};function i(l,u,d,f){return J.isPlainObject(l)&&J.isPlainObject(u)?J.merge.call({caseless:f},l,u):J.isPlainObject(u)?J.merge({},u):J.isArray(u)?u.slice():u}function s(l,u,d,f){if(J.isUndefined(u)){if(!J.isUndefined(l))return i(void 0,l,d,f)}else return i(l,u,d,f)}function r(l,u){if(!J.isUndefined(u))return i(void 0,u)}function o(l,u){if(J.isUndefined(u)){if(!J.isUndefined(l))return i(void 0,l)}else return i(void 0,u)}function a(l,u,d){if(d in e)return i(l,u);if(d in t)return i(void 0,l)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,d)=>s(ch(l),ch(u),d,!0)};return J.forEach(Object.keys({...t,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const d=J.hasOwnProp(c,u)?c[u]:s,f=d(t[u],e[u],u);J.isUndefined(f)&&d!==a||(n[u]=f)}),n}const wg=t=>{const e=Os({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:r,headers:o,auth:a}=e;if(e.headers=o=_n.from(o),e.url=yg(Eg(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),J.isFormData(n)){if(Jt.hasStandardBrowserEnv||Jt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(J.isFunction(n.getHeaders)){const c=n.getHeaders(),l=["content-type","content-length"];Object.entries(c).forEach(([u,d])=>{l.includes(u.toLowerCase())&&o.set(u,d)})}}if(Jt.hasStandardBrowserEnv&&(i&&J.isFunction(i)&&(i=i(e)),i||i!==!1&&nS(e.url))){const c=s&&r&&iS.read(r);c&&o.set(s,c)}return e},oS=typeof XMLHttpRequest<"u",aS=oS&&function(t){return new Promise(function(n,i){const s=wg(t);let r=s.data;const o=_n.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,d,f,h,g;function _(){h&&h(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function m(){if(!p)return;const E=_n.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:E,config:t,request:p};bg(function(L){n(L),_()},function(L){i(L),_()},C),p=null}"onloadend"in p?p.onloadend=m:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(m)},p.onabort=function(){p&&(i(new $e("Request aborted",$e.ECONNABORTED,t,p)),p=null)},p.onerror=function(y){const C=y&&y.message?y.message:"Network Error",A=new $e(C,$e.ERR_NETWORK,t,p);A.event=y||null,i(A),p=null},p.ontimeout=function(){let y=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const C=s.transitional||Df;s.timeoutErrorMessage&&(y=s.timeoutErrorMessage),i(new $e(y,C.clarifyTimeoutError?$e.ETIMEDOUT:$e.ECONNABORTED,t,p)),p=null},r===void 0&&o.setContentType(null),"setRequestHeader"in p&&J.forEach(o.toJSON(),function(y,C){p.setRequestHeader(C,y)}),J.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),a&&a!=="json"&&(p.responseType=s.responseType),l&&([f,g]=Ka(l,!0),p.addEventListener("progress",f)),c&&p.upload&&([d,h]=Ka(c),p.upload.addEventListener("progress",d),p.upload.addEventListener("loadend",h)),(s.cancelToken||s.signal)&&(u=E=>{p&&(i(!E||E.type?new Do(null,t,p):E),p.abort(),p=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const x=Qy(s.url);if(x&&Jt.protocols.indexOf(x)===-1){i(new $e("Unsupported protocol "+x+":",$e.ERR_BAD_REQUEST,t));return}p.send(r||null)})},lS=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,s;const r=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;i.abort(u instanceof $e?u:new Do(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,r(new $e(`timeout of ${e}ms exceeded`,$e.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),t=null)};t.forEach(l=>l.addEventListener("abort",r));const{signal:c}=i;return c.unsubscribe=()=>J.asap(a),c}},cS=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},uS=async function*(t,e){for await(const n of fS(t))yield*cS(n,e)},fS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},uh=(t,e,n,i)=>{const s=uS(t,e);let r=0,o,a=c=>{o||(o=!0,i&&i(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let d=u.byteLength;if(n){let f=r+=d;n(f)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},fh=64*1024,{isFunction:Wo}=J,dS=(({Request:t,Response:e})=>({Request:t,Response:e}))(J.global),{ReadableStream:dh,TextEncoder:hh}=J.global,ph=(t,...e)=>{try{return!!t(...e)}catch{return!1}},hS=t=>{t=J.merge.call({skipUndefined:!0},dS,t);const{fetch:e,Request:n,Response:i}=t,s=e?Wo(e):typeof fetch=="function",r=Wo(n),o=Wo(i);if(!s)return!1;const a=s&&Wo(dh),c=s&&(typeof hh=="function"?(g=>_=>g.encode(_))(new hh):async g=>new Uint8Array(await new n(g).arrayBuffer())),l=r&&a&&ph(()=>{let g=!1;const _=new n(Jt.origin,{body:new dh,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!_}),u=o&&a&&ph(()=>J.isReadableStream(new i("").body)),d={stream:u&&(g=>g.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!d[g]&&(d[g]=(_,p)=>{let m=_&&_[g];if(m)return m.call(_);throw new $e(`Response type '${g}' is not supported`,$e.ERR_NOT_SUPPORT,p)})});const f=async g=>{if(g==null)return 0;if(J.isBlob(g))return g.size;if(J.isSpecCompliantForm(g))return(await new n(Jt.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(J.isArrayBufferView(g)||J.isArrayBuffer(g))return g.byteLength;if(J.isURLSearchParams(g)&&(g=g+""),J.isString(g))return(await c(g)).byteLength},h=async(g,_)=>{const p=J.toFiniteNumber(g.getContentLength());return p??f(_)};return async g=>{let{url:_,method:p,data:m,signal:x,cancelToken:E,timeout:y,onDownloadProgress:C,onUploadProgress:A,responseType:L,headers:S,withCredentials:M="same-origin",fetchOptions:U}=wg(g),D=e||fetch;L=L?(L+"").toLowerCase():"text";let N=lS([x,E&&E.toAbortSignal()],y),z=null;const G=N&&N.unsubscribe&&(()=>{N.unsubscribe()});let k;try{if(A&&l&&p!=="get"&&p!=="head"&&(k=await h(S,m))!==0){let ce=new n(_,{method:"POST",body:m,duplex:"half"}),pe;if(J.isFormData(m)&&(pe=ce.headers.get("content-type"))&&S.setContentType(pe),ce.body){const[Ge,ut]=ah(k,Ka(lh(A)));m=uh(ce.body,fh,Ge,ut)}}J.isString(M)||(M=M?"include":"omit");const w=r&&"credentials"in n.prototype,T={...U,signal:N,method:p.toUpperCase(),headers:S.normalize().toJSON(),body:m,duplex:"half",credentials:w?M:void 0};z=r&&new n(_,T);let V=await(r?D(z,U):D(_,T));const X=u&&(L==="stream"||L==="response");if(u&&(C||X&&G)){const ce={};["status","statusText","headers"].forEach(dt=>{ce[dt]=V[dt]});const pe=J.toFiniteNumber(V.headers.get("content-length")),[Ge,ut]=C&&ah(pe,Ka(lh(C),!0))||[];V=new i(uh(V.body,fh,Ge,()=>{ut&&ut(),G&&G()}),ce)}L=L||"text";let re=await d[J.findKey(d,L)||"text"](V,g);return!X&&G&&G(),await new Promise((ce,pe)=>{bg(ce,pe,{data:re,headers:_n.from(V.headers),status:V.status,statusText:V.statusText,config:g,request:z})})}catch(w){throw G&&G(),w&&w.name==="TypeError"&&/Load failed|fetch/i.test(w.message)?Object.assign(new $e("Network Error",$e.ERR_NETWORK,g,z,w&&w.response),{cause:w.cause||w}):$e.from(w,w&&w.code,g,z,w&&w.response)}}},pS=new Map,Tg=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,c,l,u=pS;for(;a--;)c=r[a],l=u.get(c),l===void 0&&u.set(c,l=a?new Map:hS(e)),u=l;return l};Tg();const Nf={http:Ly,xhr:aS,fetch:{get:Tg}};J.forEach(Nf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const mh=t=>`- ${t}`,mS=t=>J.isFunction(t)||t===null||t===!1;function gS(t,e){t=J.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!mS(i)&&(s=Nf[(a=String(i)).toLowerCase()],s===void 0))throw new $e(`Unknown adapter '${a}'`);if(s&&(J.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(mh).join(`
`):" "+mh(o[0]):"as no adapter specified";throw new $e("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s}const Ag={getAdapter:gS,adapters:Nf};function sc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Do(null,t)}function gh(t){return sc(t),t.headers=_n.from(t.headers),t.data=ic.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Ag.getAdapter(t.adapter||Lo.adapter,t)(t).then(function(i){return sc(t),i.data=ic.call(t,t.transformResponse,i),i.headers=_n.from(i.headers),i},function(i){return Mg(i)||(sc(t),i&&i.response&&(i.response.data=ic.call(t,t.transformResponse,i.response),i.response.headers=_n.from(i.response.headers))),Promise.reject(i)})}const Cg="1.13.6",Dl={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Dl[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const _h={};Dl.transitional=function(e,n,i){function s(r,o){return"[Axios v"+Cg+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new $e(s(o," has been removed"+(n?" in "+n:"")),$e.ERR_DEPRECATED);return n&&!_h[o]&&(_h[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};Dl.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function _S(t,e,n){if(typeof t!="object")throw new $e("options must be an object",$e.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=e[r];if(o){const a=t[r],c=a===void 0||o(a,r,t);if(c!==!0)throw new $e("option "+r+" must be "+c,$e.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new $e("Unknown option "+r,$e.ERR_BAD_OPTION)}}const Ca={assertOptions:_S,validators:Dl},Pn=Ca.validators;let Ns=class{constructor(e){this.defaults=e||{},this.interceptors={request:new rh,response:new rh}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?r&&!String(i.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+r):i.stack=r}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Os(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Ca.assertOptions(i,{silentJSONParsing:Pn.transitional(Pn.boolean),forcedJSONParsing:Pn.transitional(Pn.boolean),clarifyTimeoutError:Pn.transitional(Pn.boolean),legacyInterceptorReqResOrdering:Pn.transitional(Pn.boolean)},!1),s!=null&&(J.isFunction(s)?n.paramsSerializer={serialize:s}:Ca.assertOptions(s,{encode:Pn.function,serialize:Pn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ca.assertOptions(n,{baseUrl:Pn.spelling("baseURL"),withXsrfToken:Pn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&J.merge(r.common,r[n.method]);r&&J.forEach(["delete","get","head","post","put","patch","common"],g=>{delete r[g]}),n.headers=_n.concat(o,r);const a=[];let c=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(n)===!1)return;c=c&&_.synchronous;const p=n.transitional||Df;p&&p.legacyInterceptorReqResOrdering?a.unshift(_.fulfilled,_.rejected):a.push(_.fulfilled,_.rejected)});const l=[];this.interceptors.response.forEach(function(_){l.push(_.fulfilled,_.rejected)});let u,d=0,f;if(!c){const g=[gh.bind(this),void 0];for(g.unshift(...a),g.push(...l),f=g.length,u=Promise.resolve(n);d<f;)u=u.then(g[d++],g[d++]);return u}f=a.length;let h=n;for(;d<f;){const g=a[d++],_=a[d++];try{h=g(h)}catch(p){_.call(this,p);break}}try{u=gh.call(this,h)}catch(g){return Promise.reject(g)}for(d=0,f=l.length;d<f;)u=u.then(l[d++],l[d++]);return u}getUri(e){e=Os(this.defaults,e);const n=Eg(e.baseURL,e.url,e.allowAbsoluteUrls);return yg(n,e.params,e.paramsSerializer)}};J.forEach(["delete","get","head","options"],function(e){Ns.prototype[e]=function(n,i){return this.request(Os(i||{},{method:e,url:n,data:(i||{}).data}))}});J.forEach(["post","put","patch"],function(e){function n(i){return function(r,o,a){return this.request(Os(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Ns.prototype[e]=n(),Ns.prototype[e+"Form"]=n(!0)});let vS=class Rg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Do(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Rg(function(s){e=s}),cancel:e}}};function xS(t){return function(n){return t.apply(null,n)}}function yS(t){return J.isObject(t)&&t.isAxiosError===!0}const lu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(lu).forEach(([t,e])=>{lu[e]=t});function Pg(t){const e=new Ns(t),n=cg(Ns.prototype.request,e);return J.extend(n,Ns.prototype,e,{allOwnKeys:!0}),J.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Pg(Os(t,s))},n}const Nt=Pg(Lo);Nt.Axios=Ns;Nt.CanceledError=Do;Nt.CancelToken=vS;Nt.isCancel=Mg;Nt.VERSION=Cg;Nt.toFormData=Ll;Nt.AxiosError=$e;Nt.Cancel=Nt.CanceledError;Nt.all=function(e){return Promise.all(e)};Nt.spread=xS;Nt.isAxiosError=yS;Nt.mergeConfig=Os;Nt.AxiosHeaders=_n;Nt.formToJSON=t=>Sg(J.isHTMLForm(t)?new FormData(t):t);Nt.getAdapter=Ag.getAdapter;Nt.HttpStatusCode=lu;Nt.default=Nt;const{Axios:uF,AxiosError:fF,CanceledError:dF,isCancel:hF,CancelToken:pF,VERSION:mF,all:gF,Cancel:_F,isAxiosError:vF,spread:xF,toFormData:yF,AxiosHeaders:SF,HttpStatusCode:MF,formToJSON:bF,getAdapter:EF,mergeConfig:wF}=Nt,Mt=Nt.create({baseURL:"http://localhost:22888",timeout:3e4}),pn={async getStats(){return(await Mt.get("/dashboard/stats")).data},async getGraph(t=7,e=1e3,n=!1){return(await Mt.get("/dashboard/graph",{params:{days:t,max_nodes:e,memory_only:n}})).data},async searchMemories(t,e=20){return(await Mt.get("/dashboard/memory/search",{params:{query:t,limit:e}})).data},async getMemoryDetail(t){return(await Mt.get(`/dashboard/memory/${t}`)).data},async updateMemory(t,e){return(await Mt.post("/dashboard/memory/update",{memory_id:t,content:e.content,user_id:e.user_id,title:e.title,keywords:e.keywords})).data},async writeMemory(t){return(await Mt.post("/memory/write",t)).data},async readMemory(t){return(await Mt.post("/memory/read",t)).data},async deleteMemory(t,e){return(await Mt.post("/memory/delete",{memory_id:t,user_id:e})).data},async reflectMemory(t){return(await Mt.post("/memory/reflect",null,{params:{user_id:t}})).data},async rebuildGraph(){return(await Mt.post("/dashboard/rebuild_graph")).data},async getLogs(){return(await Mt.get("/dashboard/logs")).data}},ai={async getStats(){return(await Mt.get("/tiered/stats")).data},async getMergedMemories(){return(await Mt.get("/tiered/merged")).data},async getMergeChain(t){return(await Mt.get(`/tiered/memory/${t}/merge-chain`)).data},async triggerDailyReflection(){return(await Mt.post("/tiered/daily-reflection/trigger")).data},async writeStorage(t){return(await Mt.post("/tiered/storage/write",t)).data},async writeThinking(t){return(await Mt.post("/tiered/thinking/write",t)).data},async writeSkill(t){return(await Mt.post("/tiered/skill/write",t)).data},async queryMemories(t){return(await Mt.get("/tiered/query",{params:t})).data},async getMemory(t){return(await Mt.get(`/tiered/memory/${t}`)).data},async getMemoryTrace(t){return(await Mt.get(`/tiered/memory/${t}/trace`)).data},async submitFeedback(t,e){return(await Mt.post(`/tiered/memory/${t}/feedback`,e)).data},async summarizeMemories(t){return(await Mt.post("/tiered/summarize",{memory_ids:t})).data}},vh={async getStatus(){return(await Mt.get("/dashboard/evolution/status")).data},async setProfile(t){return(await Mt.post("/dashboard/evolution/profile",null,{params:{profile:t}})).data}},SS={async getStatus(){return(await Mt.get("/dashboard/llm/status")).data},async getInteractions(t=50){return(await Mt.get("/dashboard/llm/interactions",{params:{limit:t}})).data}},Wi=Rf("memory",()=>{const t=we([]),e=we(null),n=we({nodes:[],links:[]}),i=we(null),s=we(null),r=we([]),o=we("all"),a=we("neural"),c=we("standard"),l=we(""),u=we([]),d=we(!1),f=we(null),h=Et(()=>o.value==="all"?t.value:t.value.filter(w=>w.memory_type===o.value)),g=Et(()=>({storage:t.value.filter(w=>w.memory_type==="storage").length,thinking:t.value.filter(w=>w.memory_type==="thinking").length,skill:t.value.filter(w=>w.memory_type==="skill").length,total:t.value.length}));async function _(){try{i.value=await pn.getStats()}catch(w){f.value="Failed to fetch stats",console.error(w)}}async function p(w=7,T=1e3){try{d.value=!0,n.value=await pn.getGraph(w,T)}catch(V){f.value="Failed to fetch graph",console.error(V)}finally{d.value=!1}}async function m(){try{s.value=await vh.getStatus()}catch(w){f.value="Failed to fetch evolution status",console.error(w)}}async function x(w){try{d.value=!0,l.value=w;const T=await pn.searchMemories(w);u.value=T.items.map(V=>{var X;return{...V,content_type:"note",keywords:[],tags:[],char_count:((X=V.content)==null?void 0:X.length)||0,importance:.5}})}catch(T){f.value="Failed to search memories",console.error(T)}finally{d.value=!1}}async function E(w){try{await vh.setProfile(w),c.value=w,await m()}catch(T){f.value="Failed to set evolution profile",console.error(T)}}function y(w){o.value=w}function C(w){a.value=w}function A(w,T="info"){const V={time:new Date().toLocaleTimeString(),message:w,type:T};r.value.push(V),r.value.length>50&&r.value.shift()}function L(){r.value=[]}async function S(w,T,V="default",X,re){try{d.value=!0;const ce=await pn.updateMemory(w,{content:T,user_id:V,title:X,keywords:re});return A(`Memory updated: ${w}`,"success"),ce}catch(ce){throw f.value="Failed to update memory",A(`Failed to update memory: ${w}`,"error"),console.error(ce),ce}finally{d.value=!1}}async function M(w,T="default"){try{d.value=!0;const V=await pn.deleteMemory(w,T);return A(`Memory deleted: ${w}`,"success"),V}catch(V){throw f.value="Failed to delete memory",A(`Failed to delete memory: ${w}`,"error"),console.error(V),V}finally{d.value=!1}}async function U(w){try{d.value=!0;const T=await pn.writeMemory(w);return A(`Memory written: ${T.id}`,"success"),T}catch(T){throw f.value="Failed to write memory",A("Failed to write memory","error"),console.error(T),T}finally{d.value=!1}}async function D(w="default"){try{d.value=!0;const T=await pn.reflectMemory(w);return A("Memory reflection completed","success"),T}catch(T){throw f.value="Failed to reflect memory",A("Failed to reflect memory","error"),console.error(T),T}finally{d.value=!1}}async function N(){try{d.value=!0;const w=await pn.rebuildGraph();return A("Graph rebuilt successfully","success"),w}catch(w){throw f.value="Failed to rebuild graph",A("Failed to rebuild graph","error"),console.error(w),w}finally{d.value=!1}}async function z(w,T){try{d.value=!0;const V=await ai.submitFeedback(w,T);return A(`Feedback submitted for: ${w}`,"success"),V}catch(V){throw f.value="Failed to submit feedback",A(`Failed to submit feedback for: ${w}`,"error"),console.error(V),V}finally{d.value=!1}}async function G(w){try{d.value=!0;const T=await ai.summarizeMemories(w);return A(`Summarized ${w.length} memories`,"success"),T}catch(T){throw f.value="Failed to summarize memories",A("Failed to summarize memories","error"),console.error(T),T}finally{d.value=!1}}async function k(){try{const w=await pn.getLogs();w.logs&&w.logs.length>0&&(r.value=w.logs.slice(0,50).map(T=>({time:T.time,message:T.message,type:["info","success","error","warn"].includes(T.type)?T.type:"info"})))}catch(w){console.error("Failed to fetch logs:",w)}}return{memories:t,currentMemory:e,graphData:n,stats:i,evolutionStatus:s,logs:r,currentMemoryType:o,currentViewMode:a,currentProfile:c,searchQuery:l,searchResults:u,isLoading:d,error:f,filteredMemories:h,memoryCountByType:g,fetchStats:_,fetchGraph:p,fetchEvolutionStatus:m,searchMemories:x,setEvolutionProfile:E,setMemoryType:y,setViewMode:C,addLog:A,clearLogs:L,updateMemory:S,deleteMemory:M,writeMemory:U,reflectMemory:D,rebuildGraph:N,submitFeedback:z,summarizeMemories:G,fetchLogs:k}});class xh extends Map{constructor(e,n=ES){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const[i,s]of e)this.set(i,s)}get(e){return super.get(yh(this,e))}has(e){return super.has(yh(this,e))}set(e,n){return super.set(MS(this,e),n)}delete(e){return super.delete(bS(this,e))}}function yh({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):n}function MS({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):(t.set(i,n),n)}function bS({_intern:t,_key:e},n){const i=e(n);return t.has(i)&&(n=t.get(i),t.delete(i)),n}function ES(t){return t!==null&&typeof t=="object"?t.valueOf():t}var wS={value:()=>{}};function Il(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Ra(n)}function Ra(t){this._=t}function TS(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",s=n.indexOf(".");if(s>=0&&(i=n.slice(s+1),n=n.slice(0,s)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Ra.prototype=Il.prototype={constructor:Ra,on:function(t,e){var n=this._,i=TS(t+"",n),s,r=-1,o=i.length;if(arguments.length<2){for(;++r<o;)if((s=(t=i[r]).type)&&(s=AS(n[s],t.name)))return s;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++r<o;)if(s=(t=i[r]).type)n[s]=Sh(n[s],t.name,e);else if(e==null)for(s in n)n[s]=Sh(n[s],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Ra(t)},call:function(t,e){if((s=arguments.length-2)>0)for(var n=new Array(s),i=0,s,r;i<s;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],i=0,s=r.length;i<s;++i)r[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],s=0,r=i.length;s<r;++s)i[s].value.apply(e,n)}};function AS(t,e){for(var n=0,i=t.length,s;n<i;++n)if((s=t[n]).name===e)return s.value}function Sh(t,e,n){for(var i=0,s=t.length;i<s;++i)if(t[i].name===e){t[i]=wS,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var cu="http://www.w3.org/1999/xhtml";const Mh={svg:"http://www.w3.org/2000/svg",xhtml:cu,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Nl(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),Mh.hasOwnProperty(e)?{space:Mh[e],local:t}:t}function CS(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===cu&&e.documentElement.namespaceURI===cu?e.createElement(t):e.createElementNS(n,t)}}function RS(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Lg(t){var e=Nl(t);return(e.local?RS:CS)(e)}function PS(){}function Uf(t){return t==null?PS:function(){return this.querySelector(t)}}function LS(t){typeof t!="function"&&(t=Uf(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=new Array(o),c,l,u=0;u<o;++u)(c=r[u])&&(l=t.call(c,c.__data__,u,r))&&("__data__"in c&&(l.__data__=c.__data__),a[u]=l);return new An(i,this._parents)}function DS(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function IS(){return[]}function Dg(t){return t==null?IS:function(){return this.querySelectorAll(t)}}function NS(t){return function(){return DS(t.apply(this,arguments))}}function US(t){typeof t=="function"?t=NS(t):t=Dg(t);for(var e=this._groups,n=e.length,i=[],s=[],r=0;r<n;++r)for(var o=e[r],a=o.length,c,l=0;l<a;++l)(c=o[l])&&(i.push(t.call(c,c.__data__,l,o)),s.push(c));return new An(i,s)}function Ig(t){return function(){return this.matches(t)}}function Ng(t){return function(e){return e.matches(t)}}var FS=Array.prototype.find;function OS(t){return function(){return FS.call(this.children,t)}}function BS(){return this.firstElementChild}function kS(t){return this.select(t==null?BS:OS(typeof t=="function"?t:Ng(t)))}var zS=Array.prototype.filter;function VS(){return Array.from(this.children)}function HS(t){return function(){return zS.call(this.children,t)}}function GS(t){return this.selectAll(t==null?VS:HS(typeof t=="function"?t:Ng(t)))}function WS(t){typeof t!="function"&&(t=Ig(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=[],c,l=0;l<o;++l)(c=r[l])&&t.call(c,c.__data__,l,r)&&a.push(c);return new An(i,this._parents)}function Ug(t){return new Array(t.length)}function $S(){return new An(this._enter||this._groups.map(Ug),this._parents)}function Za(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Za.prototype={constructor:Za,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function XS(t){return function(){return t}}function qS(t,e,n,i,s,r){for(var o=0,a,c=e.length,l=r.length;o<l;++o)(a=e[o])?(a.__data__=r[o],i[o]=a):n[o]=new Za(t,r[o]);for(;o<c;++o)(a=e[o])&&(s[o]=a)}function YS(t,e,n,i,s,r,o){var a,c,l=new Map,u=e.length,d=r.length,f=new Array(u),h;for(a=0;a<u;++a)(c=e[a])&&(f[a]=h=o.call(c,c.__data__,a,e)+"",l.has(h)?s[a]=c:l.set(h,c));for(a=0;a<d;++a)h=o.call(t,r[a],a,r)+"",(c=l.get(h))?(i[a]=c,c.__data__=r[a],l.delete(h)):n[a]=new Za(t,r[a]);for(a=0;a<u;++a)(c=e[a])&&l.get(f[a])===c&&(s[a]=c)}function jS(t){return t.__data__}function KS(t,e){if(!arguments.length)return Array.from(this,jS);var n=e?YS:qS,i=this._parents,s=this._groups;typeof t!="function"&&(t=XS(t));for(var r=s.length,o=new Array(r),a=new Array(r),c=new Array(r),l=0;l<r;++l){var u=i[l],d=s[l],f=d.length,h=ZS(t.call(u,u&&u.__data__,l,i)),g=h.length,_=a[l]=new Array(g),p=o[l]=new Array(g),m=c[l]=new Array(f);n(u,d,_,p,m,h,e);for(var x=0,E=0,y,C;x<g;++x)if(y=_[x]){for(x>=E&&(E=x+1);!(C=p[E])&&++E<g;);y._next=C||null}}return o=new An(o,i),o._enter=a,o._exit=c,o}function ZS(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function JS(){return new An(this._exit||this._groups.map(Ug),this._parents)}function QS(t,e,n){var i=this.enter(),s=this,r=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(s=e(s),s&&(s=s.selection())),n==null?r.remove():n(r),i&&s?i.merge(s).order():s}function eM(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,s=n.length,r=i.length,o=Math.min(s,r),a=new Array(s),c=0;c<o;++c)for(var l=n[c],u=i[c],d=l.length,f=a[c]=new Array(d),h,g=0;g<d;++g)(h=l[g]||u[g])&&(f[g]=h);for(;c<s;++c)a[c]=n[c];return new An(a,this._parents)}function tM(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],s=i.length-1,r=i[s],o;--s>=0;)(o=i[s])&&(r&&o.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(o,r),r=o);return this}function nM(t){t||(t=iM);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,s=new Array(i),r=0;r<i;++r){for(var o=n[r],a=o.length,c=s[r]=new Array(a),l,u=0;u<a;++u)(l=o[u])&&(c[u]=l);c.sort(e)}return new An(s,this._parents).order()}function iM(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function sM(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function rM(){return Array.from(this)}function oM(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],s=0,r=i.length;s<r;++s){var o=i[s];if(o)return o}return null}function aM(){let t=0;for(const e of this)++t;return t}function lM(){return!this.node()}function cM(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var s=e[n],r=0,o=s.length,a;r<o;++r)(a=s[r])&&t.call(a,a.__data__,r,s);return this}function uM(t){return function(){this.removeAttribute(t)}}function fM(t){return function(){this.removeAttributeNS(t.space,t.local)}}function dM(t,e){return function(){this.setAttribute(t,e)}}function hM(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function pM(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function mM(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function gM(t,e){var n=Nl(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?fM:uM:typeof e=="function"?n.local?mM:pM:n.local?hM:dM)(n,e))}function Fg(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function _M(t){return function(){this.style.removeProperty(t)}}function vM(t,e,n){return function(){this.style.setProperty(t,e,n)}}function xM(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function yM(t,e,n){return arguments.length>1?this.each((e==null?_M:typeof e=="function"?xM:vM)(t,e,n??"")):gr(this.node(),t)}function gr(t,e){return t.style.getPropertyValue(e)||Fg(t).getComputedStyle(t,null).getPropertyValue(e)}function SM(t){return function(){delete this[t]}}function MM(t,e){return function(){this[t]=e}}function bM(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function EM(t,e){return arguments.length>1?this.each((e==null?SM:typeof e=="function"?bM:MM)(t,e)):this.node()[t]}function Og(t){return t.trim().split(/^|\s+/)}function Ff(t){return t.classList||new Bg(t)}function Bg(t){this._node=t,this._names=Og(t.getAttribute("class")||"")}Bg.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function kg(t,e){for(var n=Ff(t),i=-1,s=e.length;++i<s;)n.add(e[i])}function zg(t,e){for(var n=Ff(t),i=-1,s=e.length;++i<s;)n.remove(e[i])}function wM(t){return function(){kg(this,t)}}function TM(t){return function(){zg(this,t)}}function AM(t,e){return function(){(e.apply(this,arguments)?kg:zg)(this,t)}}function CM(t,e){var n=Og(t+"");if(arguments.length<2){for(var i=Ff(this.node()),s=-1,r=n.length;++s<r;)if(!i.contains(n[s]))return!1;return!0}return this.each((typeof e=="function"?AM:e?wM:TM)(n,e))}function RM(){this.textContent=""}function PM(t){return function(){this.textContent=t}}function LM(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function DM(t){return arguments.length?this.each(t==null?RM:(typeof t=="function"?LM:PM)(t)):this.node().textContent}function IM(){this.innerHTML=""}function NM(t){return function(){this.innerHTML=t}}function UM(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function FM(t){return arguments.length?this.each(t==null?IM:(typeof t=="function"?UM:NM)(t)):this.node().innerHTML}function OM(){this.nextSibling&&this.parentNode.appendChild(this)}function BM(){return this.each(OM)}function kM(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function zM(){return this.each(kM)}function VM(t){var e=typeof t=="function"?t:Lg(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function HM(){return null}function GM(t,e){var n=typeof t=="function"?t:Lg(t),i=e==null?HM:typeof e=="function"?e:Uf(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function WM(){var t=this.parentNode;t&&t.removeChild(this)}function $M(){return this.each(WM)}function XM(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function qM(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function YM(t){return this.select(t?qM:XM)}function jM(t){return arguments.length?this.property("__data__",t):this.node().__data__}function KM(t){return function(e){t.call(this,e,this.__data__)}}function ZM(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function JM(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,s=e.length,r;n<s;++n)r=e[n],(!t.type||r.type===t.type)&&r.name===t.name?this.removeEventListener(r.type,r.listener,r.options):e[++i]=r;++i?e.length=i:delete this.__on}}}function QM(t,e,n){return function(){var i=this.__on,s,r=KM(e);if(i){for(var o=0,a=i.length;o<a;++o)if((s=i[o]).type===t.type&&s.name===t.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=r,s.options=n),s.value=e;return}}this.addEventListener(t.type,r,n),s={type:t.type,name:t.name,value:e,listener:r,options:n},i?i.push(s):this.__on=[s]}}function eb(t,e,n){var i=ZM(t+""),s,r=i.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,l=a.length,u;c<l;++c)for(s=0,u=a[c];s<r;++s)if((o=i[s]).type===u.type&&o.name===u.name)return u.value}return}for(a=e?QM:JM,s=0;s<r;++s)this.each(a(i[s],e,n));return this}function Vg(t,e,n){var i=Fg(t),s=i.CustomEvent;typeof s=="function"?s=new s(e,n):(s=i.document.createEvent("Event"),n?(s.initEvent(e,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(e,!1,!1)),t.dispatchEvent(s)}function tb(t,e){return function(){return Vg(this,t,e)}}function nb(t,e){return function(){return Vg(this,t,e.apply(this,arguments))}}function ib(t,e){return this.each((typeof e=="function"?nb:tb)(t,e))}function*sb(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],s=0,r=i.length,o;s<r;++s)(o=i[s])&&(yield o)}var Hg=[null];function An(t,e){this._groups=t,this._parents=e}function Io(){return new An([[document.documentElement]],Hg)}function rb(){return this}An.prototype=Io.prototype={constructor:An,select:LS,selectAll:US,selectChild:kS,selectChildren:GS,filter:WS,data:KS,enter:$S,exit:JS,join:QS,merge:eM,selection:rb,order:tM,sort:nM,call:sM,nodes:rM,node:oM,size:aM,empty:lM,each:cM,attr:gM,style:yM,property:EM,classed:CM,text:DM,html:FM,raise:BM,lower:zM,append:VM,insert:GM,remove:$M,clone:YM,datum:jM,on:eb,dispatch:ib,[Symbol.iterator]:sb};function _r(t){return typeof t=="string"?new An([[document.querySelector(t)]],[document.documentElement]):new An([[t]],Hg)}function ob(t){let e;for(;e=t.sourceEvent;)t=e;return t}function bh(t,e){if(t=ob(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var s=e.getBoundingClientRect();return[t.clientX-s.left-e.clientLeft,t.clientY-s.top-e.clientTop]}}return[t.pageX,t.pageY]}const ab={passive:!1},mo={capture:!0,passive:!1};function rc(t){t.stopImmediatePropagation()}function cr(t){t.preventDefault(),t.stopImmediatePropagation()}function lb(t){var e=t.document.documentElement,n=_r(t).on("dragstart.drag",cr,mo);"onselectstart"in e?n.on("selectstart.drag",cr,mo):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function cb(t,e){var n=t.document.documentElement,i=_r(t).on("dragstart.drag",null);e&&(i.on("click.drag",cr,mo),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const $o=t=>()=>t;function uu(t,{sourceEvent:e,subject:n,target:i,identifier:s,active:r,x:o,y:a,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:s,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}uu.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function ub(t){return!t.ctrlKey&&!t.button}function fb(){return this.parentNode}function db(t,e){return e??{x:t.x,y:t.y}}function hb(){return navigator.maxTouchPoints||"ontouchstart"in this}function Gg(){var t=ub,e=fb,n=db,i=hb,s={},r=Il("start","drag","end"),o=0,a,c,l,u,d=0;function f(y){y.on("mousedown.drag",h).filter(i).on("touchstart.drag",p).on("touchmove.drag",m,ab).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(y,C){if(!(u||!t.call(this,y,C))){var A=E(this,e.call(this,y,C),y,C,"mouse");A&&(_r(y.view).on("mousemove.drag",g,mo).on("mouseup.drag",_,mo),lb(y.view),rc(y),l=!1,a=y.clientX,c=y.clientY,A("start",y))}}function g(y){if(cr(y),!l){var C=y.clientX-a,A=y.clientY-c;l=C*C+A*A>d}s.mouse("drag",y)}function _(y){_r(y.view).on("mousemove.drag mouseup.drag",null),cb(y.view,l),cr(y),s.mouse("end",y)}function p(y,C){if(t.call(this,y,C)){var A=y.changedTouches,L=e.call(this,y,C),S=A.length,M,U;for(M=0;M<S;++M)(U=E(this,L,y,C,A[M].identifier,A[M]))&&(rc(y),U("start",y,A[M]))}}function m(y){var C=y.changedTouches,A=C.length,L,S;for(L=0;L<A;++L)(S=s[C[L].identifier])&&(cr(y),S("drag",y,C[L]))}function x(y){var C=y.changedTouches,A=C.length,L,S;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),L=0;L<A;++L)(S=s[C[L].identifier])&&(rc(y),S("end",y,C[L]))}function E(y,C,A,L,S,M){var U=r.copy(),D=bh(M||A,C),N,z,G;if((G=n.call(y,new uu("beforestart",{sourceEvent:A,target:f,identifier:S,active:o,x:D[0],y:D[1],dx:0,dy:0,dispatch:U}),L))!=null)return N=G.x-D[0]||0,z=G.y-D[1]||0,function k(w,T,V){var X=D,re;switch(w){case"start":s[S]=k,re=o++;break;case"end":delete s[S],--o;case"drag":D=bh(V||T,C),re=o;break}U.call(w,y,new uu(w,{sourceEvent:T,subject:G,target:f,identifier:S,active:re,x:D[0]+N,y:D[1]+z,dx:D[0]-X[0],dy:D[1]-X[1],dispatch:U}),L)}}return f.filter=function(y){return arguments.length?(t=typeof y=="function"?y:$o(!!y),f):t},f.container=function(y){return arguments.length?(e=typeof y=="function"?y:$o(y),f):e},f.subject=function(y){return arguments.length?(n=typeof y=="function"?y:$o(y),f):n},f.touchable=function(y){return arguments.length?(i=typeof y=="function"?y:$o(!!y),f):i},f.on=function(){var y=r.on.apply(r,arguments);return y===r?f:y},f.clickDistance=function(y){return arguments.length?(d=(y=+y)*y,f):Math.sqrt(d)},f}function Of(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Wg(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function No(){}var go=.7,Ja=1/go,ur="\\s*([+-]?\\d+)\\s*",_o="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",hi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",pb=/^#([0-9a-f]{3,8})$/,mb=new RegExp(`^rgb\\(${ur},${ur},${ur}\\)$`),gb=new RegExp(`^rgb\\(${hi},${hi},${hi}\\)$`),_b=new RegExp(`^rgba\\(${ur},${ur},${ur},${_o}\\)$`),vb=new RegExp(`^rgba\\(${hi},${hi},${hi},${_o}\\)$`),xb=new RegExp(`^hsl\\(${_o},${hi},${hi}\\)$`),yb=new RegExp(`^hsla\\(${_o},${hi},${hi},${_o}\\)$`),Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Of(No,vo,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:wh,formatHex:wh,formatHex8:Sb,formatHsl:Mb,formatRgb:Th,toString:Th});function wh(){return this.rgb().formatHex()}function Sb(){return this.rgb().formatHex8()}function Mb(){return $g(this).formatHsl()}function Th(){return this.rgb().formatRgb()}function vo(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=pb.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?Ah(e):n===3?new mn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Xo(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Xo(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=mb.exec(t))?new mn(e[1],e[2],e[3],1):(e=gb.exec(t))?new mn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=_b.exec(t))?Xo(e[1],e[2],e[3],e[4]):(e=vb.exec(t))?Xo(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=xb.exec(t))?Ph(e[1],e[2]/100,e[3]/100,1):(e=yb.exec(t))?Ph(e[1],e[2]/100,e[3]/100,e[4]):Eh.hasOwnProperty(t)?Ah(Eh[t]):t==="transparent"?new mn(NaN,NaN,NaN,0):null}function Ah(t){return new mn(t>>16&255,t>>8&255,t&255,1)}function Xo(t,e,n,i){return i<=0&&(t=e=n=NaN),new mn(t,e,n,i)}function bb(t){return t instanceof No||(t=vo(t)),t?(t=t.rgb(),new mn(t.r,t.g,t.b,t.opacity)):new mn}function fu(t,e,n,i){return arguments.length===1?bb(t):new mn(t,e,n,i??1)}function mn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}Of(mn,fu,Wg(No,{brighter(t){return t=t==null?Ja:Math.pow(Ja,t),new mn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?go:Math.pow(go,t),new mn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new mn(Us(this.r),Us(this.g),Us(this.b),Qa(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ch,formatHex:Ch,formatHex8:Eb,formatRgb:Rh,toString:Rh}));function Ch(){return`#${Rs(this.r)}${Rs(this.g)}${Rs(this.b)}`}function Eb(){return`#${Rs(this.r)}${Rs(this.g)}${Rs(this.b)}${Rs((isNaN(this.opacity)?1:this.opacity)*255)}`}function Rh(){const t=Qa(this.opacity);return`${t===1?"rgb(":"rgba("}${Us(this.r)}, ${Us(this.g)}, ${Us(this.b)}${t===1?")":`, ${t})`}`}function Qa(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Us(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Rs(t){return t=Us(t),(t<16?"0":"")+t.toString(16)}function Ph(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Vn(t,e,n,i)}function $g(t){if(t instanceof Vn)return new Vn(t.h,t.s,t.l,t.opacity);if(t instanceof No||(t=vo(t)),!t)return new Vn;if(t instanceof Vn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,s=Math.min(e,n,i),r=Math.max(e,n,i),o=NaN,a=r-s,c=(r+s)/2;return a?(e===r?o=(n-i)/a+(n<i)*6:n===r?o=(i-e)/a+2:o=(e-n)/a+4,a/=c<.5?r+s:2-r-s,o*=60):a=c>0&&c<1?0:o,new Vn(o,a,c,t.opacity)}function wb(t,e,n,i){return arguments.length===1?$g(t):new Vn(t,e,n,i??1)}function Vn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}Of(Vn,wb,Wg(No,{brighter(t){return t=t==null?Ja:Math.pow(Ja,t),new Vn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?go:Math.pow(go,t),new Vn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,s=2*n-i;return new mn(oc(t>=240?t-240:t+120,s,i),oc(t,s,i),oc(t<120?t+240:t-120,s,i),this.opacity)},clamp(){return new Vn(Lh(this.h),qo(this.s),qo(this.l),Qa(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Qa(this.opacity);return`${t===1?"hsl(":"hsla("}${Lh(this.h)}, ${qo(this.s)*100}%, ${qo(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Lh(t){return t=(t||0)%360,t<0?t+360:t}function qo(t){return Math.max(0,Math.min(1,t||0))}function oc(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const Xg=t=>()=>t;function Tb(t,e){return function(n){return t+n*e}}function Ab(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function Cb(t){return(t=+t)==1?qg:function(e,n){return n-e?Ab(e,n,t):Xg(isNaN(e)?n:e)}}function qg(t,e){var n=e-t;return n?Tb(t,n):Xg(isNaN(t)?e:t)}const Dh=function t(e){var n=Cb(e);function i(s,r){var o=n((s=fu(s)).r,(r=fu(r)).r),a=n(s.g,r.g),c=n(s.b,r.b),l=qg(s.opacity,r.opacity);return function(u){return s.r=o(u),s.g=a(u),s.b=c(u),s.opacity=l(u),s+""}}return i.gamma=t,i}(1);function ns(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var du=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ac=new RegExp(du.source,"g");function Rb(t){return function(){return t}}function Pb(t){return function(e){return t(e)+""}}function Lb(t,e){var n=du.lastIndex=ac.lastIndex=0,i,s,r,o=-1,a=[],c=[];for(t=t+"",e=e+"";(i=du.exec(t))&&(s=ac.exec(e));)(r=s.index)>n&&(r=e.slice(n,r),a[o]?a[o]+=r:a[++o]=r),(i=i[0])===(s=s[0])?a[o]?a[o]+=s:a[++o]=s:(a[++o]=null,c.push({i:o,x:ns(i,s)})),n=ac.lastIndex;return n<e.length&&(r=e.slice(n),a[o]?a[o]+=r:a[++o]=r),a.length<2?c[0]?Pb(c[0].x):Rb(e):(e=c.length,function(l){for(var u=0,d;u<e;++u)a[(d=c[u]).i]=d.x(l);return a.join("")})}var Ih=180/Math.PI,hu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Yg(t,e,n,i,s,r){var o,a,c;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(c=t*n+e*i)&&(n-=t*c,i-=e*c),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,c/=a),t*i<e*n&&(t=-t,e=-e,c=-c,o=-o),{translateX:s,translateY:r,rotate:Math.atan2(e,t)*Ih,skewX:Math.atan(c)*Ih,scaleX:o,scaleY:a}}var Yo;function Db(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?hu:Yg(e.a,e.b,e.c,e.d,e.e,e.f)}function Ib(t){return t==null||(Yo||(Yo=document.createElementNS("http://www.w3.org/2000/svg","g")),Yo.setAttribute("transform",t),!(t=Yo.transform.baseVal.consolidate()))?hu:(t=t.matrix,Yg(t.a,t.b,t.c,t.d,t.e,t.f))}function jg(t,e,n,i){function s(l){return l.length?l.pop()+" ":""}function r(l,u,d,f,h,g){if(l!==d||u!==f){var _=h.push("translate(",null,e,null,n);g.push({i:_-4,x:ns(l,d)},{i:_-2,x:ns(u,f)})}else(d||f)&&h.push("translate("+d+e+f+n)}function o(l,u,d,f){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),f.push({i:d.push(s(d)+"rotate(",null,i)-2,x:ns(l,u)})):u&&d.push(s(d)+"rotate("+u+i)}function a(l,u,d,f){l!==u?f.push({i:d.push(s(d)+"skewX(",null,i)-2,x:ns(l,u)}):u&&d.push(s(d)+"skewX("+u+i)}function c(l,u,d,f,h,g){if(l!==d||u!==f){var _=h.push(s(h)+"scale(",null,",",null,")");g.push({i:_-4,x:ns(l,d)},{i:_-2,x:ns(u,f)})}else(d!==1||f!==1)&&h.push(s(h)+"scale("+d+","+f+")")}return function(l,u){var d=[],f=[];return l=t(l),u=t(u),r(l.translateX,l.translateY,u.translateX,u.translateY,d,f),o(l.rotate,u.rotate,d,f),a(l.skewX,u.skewX,d,f),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,d,f),l=u=null,function(h){for(var g=-1,_=f.length,p;++g<_;)d[(p=f[g]).i]=p.x(h);return d.join("")}}}var Nb=jg(Db,"px, ","px)","deg)"),Ub=jg(Ib,", ",")",")"),vr=0,$r=0,Ur=0,Kg=1e3,el,Xr,tl=0,Bs=0,Ul=0,xo=typeof performance=="object"&&performance.now?performance:Date,Zg=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Bf(){return Bs||(Zg(Fb),Bs=xo.now()+Ul)}function Fb(){Bs=0}function nl(){this._call=this._time=this._next=null}nl.prototype=kf.prototype={constructor:nl,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?Bf():+n)+(e==null?0:+e),!this._next&&Xr!==this&&(Xr?Xr._next=this:el=this,Xr=this),this._call=t,this._time=n,pu()},stop:function(){this._call&&(this._call=null,this._time=1/0,pu())}};function kf(t,e,n){var i=new nl;return i.restart(t,e,n),i}function Ob(){Bf(),++vr;for(var t=el,e;t;)(e=Bs-t._time)>=0&&t._call.call(void 0,e),t=t._next;--vr}function Nh(){Bs=(tl=xo.now())+Ul,vr=$r=0;try{Ob()}finally{vr=0,kb(),Bs=0}}function Bb(){var t=xo.now(),e=t-tl;e>Kg&&(Ul-=e,tl=t)}function kb(){for(var t,e=el,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:el=n);Xr=t,pu(i)}function pu(t){if(!vr){$r&&($r=clearTimeout($r));var e=t-Bs;e>24?(t<1/0&&($r=setTimeout(Nh,t-xo.now()-Ul)),Ur&&(Ur=clearInterval(Ur))):(Ur||(tl=xo.now(),Ur=setInterval(Bb,Kg)),vr=1,Zg(Nh))}}function Uh(t,e,n){var i=new nl;return e=e==null?0:+e,i.restart(s=>{i.stop(),t(s+e)},e,n),i}var zb=Il("start","end","cancel","interrupt"),Vb=[],Jg=0,Fh=1,mu=2,Pa=3,Oh=4,gu=5,La=6;function Fl(t,e,n,i,s,r){var o=t.__transition;if(!o)t.__transition={};else if(n in o)return;Hb(t,n,{name:e,index:i,group:s,on:zb,tween:Vb,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:Jg})}function zf(t,e){var n=jn(t,e);if(n.state>Jg)throw new Error("too late; already scheduled");return n}function vi(t,e){var n=jn(t,e);if(n.state>Pa)throw new Error("too late; already running");return n}function jn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function Hb(t,e,n){var i=t.__transition,s;i[e]=n,n.timer=kf(r,0,n.time);function r(l){n.state=Fh,n.timer.restart(o,n.delay,n.time),n.delay<=l&&o(l-n.delay)}function o(l){var u,d,f,h;if(n.state!==Fh)return c();for(u in i)if(h=i[u],h.name===n.name){if(h.state===Pa)return Uh(o);h.state===Oh?(h.state=La,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[u]):+u<e&&(h.state=La,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[u])}if(Uh(function(){n.state===Pa&&(n.state=Oh,n.timer.restart(a,n.delay,n.time),a(l))}),n.state=mu,n.on.call("start",t,t.__data__,n.index,n.group),n.state===mu){for(n.state=Pa,s=new Array(f=n.tween.length),u=0,d=-1;u<f;++u)(h=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(s[++d]=h);s.length=d+1}}function a(l){for(var u=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(c),n.state=gu,1),d=-1,f=s.length;++d<f;)s[d].call(t,u);n.state===gu&&(n.on.call("end",t,t.__data__,n.index,n.group),c())}function c(){n.state=La,n.timer.stop(),delete i[e];for(var l in i)return;delete t.__transition}}function Gb(t,e){var n=t.__transition,i,s,r=!0,o;if(n){e=e==null?null:e+"";for(o in n){if((i=n[o]).name!==e){r=!1;continue}s=i.state>mu&&i.state<gu,i.state=La,i.timer.stop(),i.on.call(s?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[o]}r&&delete t.__transition}}function Wb(t){return this.each(function(){Gb(this,t)})}function $b(t,e){var n,i;return function(){var s=vi(this,t),r=s.tween;if(r!==n){i=n=r;for(var o=0,a=i.length;o<a;++o)if(i[o].name===e){i=i.slice(),i.splice(o,1);break}}s.tween=i}}function Xb(t,e,n){var i,s;if(typeof n!="function")throw new Error;return function(){var r=vi(this,t),o=r.tween;if(o!==i){s=(i=o).slice();for(var a={name:e,value:n},c=0,l=s.length;c<l;++c)if(s[c].name===e){s[c]=a;break}c===l&&s.push(a)}r.tween=s}}function qb(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=jn(this.node(),n).tween,s=0,r=i.length,o;s<r;++s)if((o=i[s]).name===t)return o.value;return null}return this.each((e==null?$b:Xb)(n,t,e))}function Vf(t,e,n){var i=t._id;return t.each(function(){var s=vi(this,i);(s.value||(s.value={}))[e]=n.apply(this,arguments)}),function(s){return jn(s,i).value[e]}}function Qg(t,e){var n;return(typeof e=="number"?ns:e instanceof vo?Dh:(n=vo(e))?(e=n,Dh):Lb)(t,e)}function Yb(t){return function(){this.removeAttribute(t)}}function jb(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Kb(t,e,n){var i,s=n+"",r;return function(){var o=this.getAttribute(t);return o===s?null:o===i?r:r=e(i=o,n)}}function Zb(t,e,n){var i,s=n+"",r;return function(){var o=this.getAttributeNS(t.space,t.local);return o===s?null:o===i?r:r=e(i=o,n)}}function Jb(t,e,n){var i,s,r;return function(){var o,a=n(this),c;return a==null?void this.removeAttribute(t):(o=this.getAttribute(t),c=a+"",o===c?null:o===i&&c===s?r:(s=c,r=e(i=o,a)))}}function Qb(t,e,n){var i,s,r;return function(){var o,a=n(this),c;return a==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),c=a+"",o===c?null:o===i&&c===s?r:(s=c,r=e(i=o,a)))}}function eE(t,e){var n=Nl(t),i=n==="transform"?Ub:Qg;return this.attrTween(t,typeof e=="function"?(n.local?Qb:Jb)(n,i,Vf(this,"attr."+t,e)):e==null?(n.local?jb:Yb)(n):(n.local?Zb:Kb)(n,i,e))}function tE(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function nE(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function iE(t,e){var n,i;function s(){var r=e.apply(this,arguments);return r!==i&&(n=(i=r)&&nE(t,r)),n}return s._value=e,s}function sE(t,e){var n,i;function s(){var r=e.apply(this,arguments);return r!==i&&(n=(i=r)&&tE(t,r)),n}return s._value=e,s}function rE(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=Nl(t);return this.tween(n,(i.local?iE:sE)(i,e))}function oE(t,e){return function(){zf(this,t).delay=+e.apply(this,arguments)}}function aE(t,e){return e=+e,function(){zf(this,t).delay=e}}function lE(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?oE:aE)(e,t)):jn(this.node(),e).delay}function cE(t,e){return function(){vi(this,t).duration=+e.apply(this,arguments)}}function uE(t,e){return e=+e,function(){vi(this,t).duration=e}}function fE(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?cE:uE)(e,t)):jn(this.node(),e).duration}function dE(t,e){if(typeof e!="function")throw new Error;return function(){vi(this,t).ease=e}}function hE(t){var e=this._id;return arguments.length?this.each(dE(e,t)):jn(this.node(),e).ease}function pE(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;vi(this,t).ease=n}}function mE(t){if(typeof t!="function")throw new Error;return this.each(pE(this._id,t))}function gE(t){typeof t!="function"&&(t=Ig(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r=e[s],o=r.length,a=i[s]=[],c,l=0;l<o;++l)(c=r[l])&&t.call(c,c.__data__,l,r)&&a.push(c);return new ki(i,this._parents,this._name,this._id)}function _E(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,s=n.length,r=Math.min(i,s),o=new Array(i),a=0;a<r;++a)for(var c=e[a],l=n[a],u=c.length,d=o[a]=new Array(u),f,h=0;h<u;++h)(f=c[h]||l[h])&&(d[h]=f);for(;a<i;++a)o[a]=e[a];return new ki(o,this._parents,this._name,this._id)}function vE(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function xE(t,e,n){var i,s,r=vE(e)?zf:vi;return function(){var o=r(this,t),a=o.on;a!==i&&(s=(i=a).copy()).on(e,n),o.on=s}}function yE(t,e){var n=this._id;return arguments.length<2?jn(this.node(),n).on.on(t):this.each(xE(n,t,e))}function SE(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function ME(){return this.on("end.remove",SE(this._id))}function bE(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Uf(t));for(var i=this._groups,s=i.length,r=new Array(s),o=0;o<s;++o)for(var a=i[o],c=a.length,l=r[o]=new Array(c),u,d,f=0;f<c;++f)(u=a[f])&&(d=t.call(u,u.__data__,f,a))&&("__data__"in u&&(d.__data__=u.__data__),l[f]=d,Fl(l[f],e,n,f,l,jn(u,n)));return new ki(r,this._parents,e,n)}function EE(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Dg(t));for(var i=this._groups,s=i.length,r=[],o=[],a=0;a<s;++a)for(var c=i[a],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=t.call(u,u.__data__,d,c),h,g=jn(u,n),_=0,p=f.length;_<p;++_)(h=f[_])&&Fl(h,e,n,_,f,g);r.push(f),o.push(u)}return new ki(r,o,e,n)}var wE=Io.prototype.constructor;function TE(){return new wE(this._groups,this._parents)}function AE(t,e){var n,i,s;return function(){var r=gr(this,t),o=(this.style.removeProperty(t),gr(this,t));return r===o?null:r===n&&o===i?s:s=e(n=r,i=o)}}function e_(t){return function(){this.style.removeProperty(t)}}function CE(t,e,n){var i,s=n+"",r;return function(){var o=gr(this,t);return o===s?null:o===i?r:r=e(i=o,n)}}function RE(t,e,n){var i,s,r;return function(){var o=gr(this,t),a=n(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(t),gr(this,t))),o===c?null:o===i&&c===s?r:(s=c,r=e(i=o,a))}}function PE(t,e){var n,i,s,r="style."+e,o="end."+r,a;return function(){var c=vi(this,t),l=c.on,u=c.value[r]==null?a||(a=e_(e)):void 0;(l!==n||s!==u)&&(i=(n=l).copy()).on(o,s=u),c.on=i}}function LE(t,e,n){var i=(t+="")=="transform"?Nb:Qg;return e==null?this.styleTween(t,AE(t,i)).on("end.style."+t,e_(t)):typeof e=="function"?this.styleTween(t,RE(t,i,Vf(this,"style."+t,e))).each(PE(this._id,t)):this.styleTween(t,CE(t,i,e),n).on("end.style."+t,null)}function DE(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function IE(t,e,n){var i,s;function r(){var o=e.apply(this,arguments);return o!==s&&(i=(s=o)&&DE(t,o,n)),i}return r._value=e,r}function NE(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,IE(t,e,n??""))}function UE(t){return function(){this.textContent=t}}function FE(t){return function(){var e=t(this);this.textContent=e??""}}function OE(t){return this.tween("text",typeof t=="function"?FE(Vf(this,"text",t)):UE(t==null?"":t+""))}function BE(t){return function(e){this.textContent=t.call(this,e)}}function kE(t){var e,n;function i(){var s=t.apply(this,arguments);return s!==n&&(e=(n=s)&&BE(s)),e}return i._value=t,i}function zE(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,kE(t))}function VE(){for(var t=this._name,e=this._id,n=t_(),i=this._groups,s=i.length,r=0;r<s;++r)for(var o=i[r],a=o.length,c,l=0;l<a;++l)if(c=o[l]){var u=jn(c,e);Fl(c,t,n,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new ki(i,this._parents,t,n)}function HE(){var t,e,n=this,i=n._id,s=n.size();return new Promise(function(r,o){var a={value:o},c={value:function(){--s===0&&r()}};n.each(function(){var l=vi(this,i),u=l.on;u!==t&&(e=(t=u).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(c)),l.on=e}),s===0&&r()})}var GE=0;function ki(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function t_(){return++GE}var bi=Io.prototype;ki.prototype={constructor:ki,select:bE,selectAll:EE,selectChild:bi.selectChild,selectChildren:bi.selectChildren,filter:gE,merge:_E,selection:TE,transition:VE,call:bi.call,nodes:bi.nodes,node:bi.node,size:bi.size,empty:bi.empty,each:bi.each,on:yE,attr:eE,attrTween:rE,style:LE,styleTween:NE,text:OE,textTween:zE,remove:ME,tween:qb,delay:lE,duration:fE,ease:hE,easeVarying:mE,end:HE,[Symbol.iterator]:bi[Symbol.iterator]};function WE(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var $E={time:null,delay:0,duration:250,ease:WE};function XE(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function qE(t){var e,n;t instanceof ki?(e=t._id,t=t._name):(e=t_(),(n=$E).time=Bf(),t=t==null?null:t+"");for(var i=this._groups,s=i.length,r=0;r<s;++r)for(var o=i[r],a=o.length,c,l=0;l<a;++l)(c=o[l])&&Fl(c,t,e,l,o,n||XE(c,e));return new ki(i,this._parents,t,e)}Io.prototype.interrupt=Wb;Io.prototype.transition=qE;function n_(t,e){var n,i=1;t==null&&(t=0),e==null&&(e=0);function s(){var r,o=n.length,a,c=0,l=0;for(r=0;r<o;++r)a=n[r],c+=a.x,l+=a.y;for(c=(c/o-t)*i,l=(l/o-e)*i,r=0;r<o;++r)a=n[r],a.x-=c,a.y-=l}return s.initialize=function(r){n=r},s.x=function(r){return arguments.length?(t=+r,s):t},s.y=function(r){return arguments.length?(e=+r,s):e},s.strength=function(r){return arguments.length?(i=+r,s):i},s}function YE(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return i_(this.cover(e,n),e,n,t)}function i_(t,e,n,i){if(isNaN(e)||isNaN(n))return t;var s,r=t._root,o={data:i},a=t._x0,c=t._y0,l=t._x1,u=t._y1,d,f,h,g,_,p,m,x;if(!r)return t._root=o,t;for(;r.length;)if((_=e>=(d=(a+l)/2))?a=d:l=d,(p=n>=(f=(c+u)/2))?c=f:u=f,s=r,!(r=r[m=p<<1|_]))return s[m]=o,t;if(h=+t._x.call(null,r.data),g=+t._y.call(null,r.data),e===h&&n===g)return o.next=r,s?s[m]=o:t._root=o,t;do s=s?s[m]=new Array(4):t._root=new Array(4),(_=e>=(d=(a+l)/2))?a=d:l=d,(p=n>=(f=(c+u)/2))?c=f:u=f;while((m=p<<1|_)===(x=(g>=f)<<1|h>=d));return s[x]=r,s[m]=o,t}function jE(t){var e,n,i=t.length,s,r,o=new Array(i),a=new Array(i),c=1/0,l=1/0,u=-1/0,d=-1/0;for(n=0;n<i;++n)isNaN(s=+this._x.call(null,e=t[n]))||isNaN(r=+this._y.call(null,e))||(o[n]=s,a[n]=r,s<c&&(c=s),s>u&&(u=s),r<l&&(l=r),r>d&&(d=r));if(c>u||l>d)return this;for(this.cover(c,l).cover(u,d),n=0;n<i;++n)i_(this,o[n],a[n],t[n]);return this}function KE(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,i=this._y0,s=this._x1,r=this._y1;if(isNaN(n))s=(n=Math.floor(t))+1,r=(i=Math.floor(e))+1;else{for(var o=s-n||1,a=this._root,c,l;n>t||t>=s||i>e||e>=r;)switch(l=(e<i)<<1|t<n,c=new Array(4),c[l]=a,a=c,o*=2,l){case 0:s=n+o,r=i+o;break;case 1:n=s-o,r=i+o;break;case 2:s=n+o,i=r-o;break;case 3:n=s-o,i=r-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=n,this._y0=i,this._x1=s,this._y1=r,this}function ZE(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function JE(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function an(t,e,n,i,s){this.node=t,this.x0=e,this.y0=n,this.x1=i,this.y1=s}function QE(t,e,n){var i,s=this._x0,r=this._y0,o,a,c,l,u=this._x1,d=this._y1,f=[],h=this._root,g,_;for(h&&f.push(new an(h,s,r,u,d)),n==null?n=1/0:(s=t-n,r=e-n,u=t+n,d=e+n,n*=n);g=f.pop();)if(!(!(h=g.node)||(o=g.x0)>u||(a=g.y0)>d||(c=g.x1)<s||(l=g.y1)<r))if(h.length){var p=(o+c)/2,m=(a+l)/2;f.push(new an(h[3],p,m,c,l),new an(h[2],o,m,p,l),new an(h[1],p,a,c,m),new an(h[0],o,a,p,m)),(_=(e>=m)<<1|t>=p)&&(g=f[f.length-1],f[f.length-1]=f[f.length-1-_],f[f.length-1-_]=g)}else{var x=t-+this._x.call(null,h.data),E=e-+this._y.call(null,h.data),y=x*x+E*E;if(y<n){var C=Math.sqrt(n=y);s=t-C,r=e-C,u=t+C,d=e+C,i=h.data}}return i}function e1(t){if(isNaN(u=+this._x.call(null,t))||isNaN(d=+this._y.call(null,t)))return this;var e,n=this._root,i,s,r,o=this._x0,a=this._y0,c=this._x1,l=this._y1,u,d,f,h,g,_,p,m;if(!n)return this;if(n.length)for(;;){if((g=u>=(f=(o+c)/2))?o=f:c=f,(_=d>=(h=(a+l)/2))?a=h:l=h,e=n,!(n=n[p=_<<1|g]))return this;if(!n.length)break;(e[p+1&3]||e[p+2&3]||e[p+3&3])&&(i=e,m=p)}for(;n.data!==t;)if(s=n,!(n=n.next))return this;return(r=n.next)&&delete n.next,s?(r?s.next=r:delete s.next,this):e?(r?e[p]=r:delete e[p],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(i?i[m]=n:this._root=n),this):(this._root=r,this)}function t1(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function n1(){return this._root}function i1(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function s1(t){var e=[],n,i=this._root,s,r,o,a,c;for(i&&e.push(new an(i,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(i=n.node,r=n.x0,o=n.y0,a=n.x1,c=n.y1)&&i.length){var l=(r+a)/2,u=(o+c)/2;(s=i[3])&&e.push(new an(s,l,u,a,c)),(s=i[2])&&e.push(new an(s,r,u,l,c)),(s=i[1])&&e.push(new an(s,l,o,a,u)),(s=i[0])&&e.push(new an(s,r,o,l,u))}return this}function r1(t){var e=[],n=[],i;for(this._root&&e.push(new an(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var s=i.node;if(s.length){var r,o=i.x0,a=i.y0,c=i.x1,l=i.y1,u=(o+c)/2,d=(a+l)/2;(r=s[0])&&e.push(new an(r,o,a,u,d)),(r=s[1])&&e.push(new an(r,u,a,c,d)),(r=s[2])&&e.push(new an(r,o,d,u,l)),(r=s[3])&&e.push(new an(r,u,d,c,l))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.y0,i.x1,i.y1);return this}function o1(t){return t[0]}function a1(t){return arguments.length?(this._x=t,this):this._x}function l1(t){return t[1]}function c1(t){return arguments.length?(this._y=t,this):this._y}function Hf(t,e,n){var i=new Gf(e??o1,n??l1,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function Gf(t,e,n,i,s,r){this._x=t,this._y=e,this._x0=n,this._y0=i,this._x1=s,this._y1=r,this._root=void 0}function Bh(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var fn=Hf.prototype=Gf.prototype;fn.copy=function(){var t=new Gf(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=Bh(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var s=0;s<4;++s)(i=e.source[s])&&(i.length?n.push({source:i,target:e.target[s]=new Array(4)}):e.target[s]=Bh(i));return t};fn.add=YE;fn.addAll=jE;fn.cover=KE;fn.data=ZE;fn.extent=JE;fn.find=QE;fn.remove=e1;fn.removeAll=t1;fn.root=n1;fn.size=i1;fn.visit=s1;fn.visitAfter=r1;fn.x=a1;fn.y=c1;function Fs(t){return function(){return t}}function ss(t){return(t()-.5)*1e-6}function u1(t){return t.x+t.vx}function f1(t){return t.y+t.vy}function s_(t){var e,n,i,s=1,r=1;typeof t!="function"&&(t=Fs(t==null?1:+t));function o(){for(var l,u=e.length,d,f,h,g,_,p,m=0;m<r;++m)for(d=Hf(e,u1,f1).visitAfter(a),l=0;l<u;++l)f=e[l],_=n[f.index],p=_*_,h=f.x+f.vx,g=f.y+f.vy,d.visit(x);function x(E,y,C,A,L){var S=E.data,M=E.r,U=_+M;if(S){if(S.index>f.index){var D=h-S.x-S.vx,N=g-S.y-S.vy,z=D*D+N*N;z<U*U&&(D===0&&(D=ss(i),z+=D*D),N===0&&(N=ss(i),z+=N*N),z=(U-(z=Math.sqrt(z)))/z*s,f.vx+=(D*=z)*(U=(M*=M)/(p+M)),f.vy+=(N*=z)*U,S.vx-=D*(U=1-U),S.vy-=N*U)}return}return y>h+U||A<h-U||C>g+U||L<g-U}}function a(l){if(l.data)return l.r=n[l.data.index];for(var u=l.r=0;u<4;++u)l[u]&&l[u].r>l.r&&(l.r=l[u].r)}function c(){if(e){var l,u=e.length,d;for(n=new Array(u),l=0;l<u;++l)d=e[l],n[d.index]=+t(d,l,e)}}return o.initialize=function(l,u){e=l,i=u,c()},o.iterations=function(l){return arguments.length?(r=+l,o):r},o.strength=function(l){return arguments.length?(s=+l,o):s},o.radius=function(l){return arguments.length?(t=typeof l=="function"?l:Fs(+l),c(),o):t},o}function d1(t){return t.index}function kh(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}function r_(t){var e=d1,n=d,i,s=Fs(30),r,o,a,c,l,u=1;t==null&&(t=[]);function d(p){return 1/Math.min(a[p.source.index],a[p.target.index])}function f(p){for(var m=0,x=t.length;m<u;++m)for(var E=0,y,C,A,L,S,M,U;E<x;++E)y=t[E],C=y.source,A=y.target,L=A.x+A.vx-C.x-C.vx||ss(l),S=A.y+A.vy-C.y-C.vy||ss(l),M=Math.sqrt(L*L+S*S),M=(M-r[E])/M*p*i[E],L*=M,S*=M,A.vx-=L*(U=c[E]),A.vy-=S*U,C.vx+=L*(U=1-U),C.vy+=S*U}function h(){if(o){var p,m=o.length,x=t.length,E=new Map(o.map((C,A)=>[e(C,A,o),C])),y;for(p=0,a=new Array(m);p<x;++p)y=t[p],y.index=p,typeof y.source!="object"&&(y.source=kh(E,y.source)),typeof y.target!="object"&&(y.target=kh(E,y.target)),a[y.source.index]=(a[y.source.index]||0)+1,a[y.target.index]=(a[y.target.index]||0)+1;for(p=0,c=new Array(x);p<x;++p)y=t[p],c[p]=a[y.source.index]/(a[y.source.index]+a[y.target.index]);i=new Array(x),g(),r=new Array(x),_()}}function g(){if(o)for(var p=0,m=t.length;p<m;++p)i[p]=+n(t[p],p,t)}function _(){if(o)for(var p=0,m=t.length;p<m;++p)r[p]=+s(t[p],p,t)}return f.initialize=function(p,m){o=p,l=m,h()},f.links=function(p){return arguments.length?(t=p,h(),f):t},f.id=function(p){return arguments.length?(e=p,f):e},f.iterations=function(p){return arguments.length?(u=+p,f):u},f.strength=function(p){return arguments.length?(n=typeof p=="function"?p:Fs(+p),g(),f):n},f.distance=function(p){return arguments.length?(s=typeof p=="function"?p:Fs(+p),_(),f):s},f}const h1=1664525,p1=1013904223,zh=4294967296;function m1(){let t=1;return()=>(t=(h1*t+p1)%zh)/zh}function g1(t){return t.x}function _1(t){return t.y}var v1=10,x1=Math.PI*(3-Math.sqrt(5));function o_(t){var e,n=1,i=.001,s=1-Math.pow(i,1/300),r=0,o=.6,a=new Map,c=kf(d),l=Il("tick","end"),u=m1();t==null&&(t=[]);function d(){f(),l.call("tick",e),n<i&&(c.stop(),l.call("end",e))}function f(_){var p,m=t.length,x;_===void 0&&(_=1);for(var E=0;E<_;++E)for(n+=(r-n)*s,a.forEach(function(y){y(n)}),p=0;p<m;++p)x=t[p],x.fx==null?x.x+=x.vx*=o:(x.x=x.fx,x.vx=0),x.fy==null?x.y+=x.vy*=o:(x.y=x.fy,x.vy=0);return e}function h(){for(var _=0,p=t.length,m;_<p;++_){if(m=t[_],m.index=_,m.fx!=null&&(m.x=m.fx),m.fy!=null&&(m.y=m.fy),isNaN(m.x)||isNaN(m.y)){var x=v1*Math.sqrt(.5+_),E=_*x1;m.x=x*Math.cos(E),m.y=x*Math.sin(E)}(isNaN(m.vx)||isNaN(m.vy))&&(m.vx=m.vy=0)}}function g(_){return _.initialize&&_.initialize(t,u),_}return h(),e={tick:f,restart:function(){return c.restart(d),e},stop:function(){return c.stop(),e},nodes:function(_){return arguments.length?(t=_,h(),a.forEach(g),e):t},alpha:function(_){return arguments.length?(n=+_,e):n},alphaMin:function(_){return arguments.length?(i=+_,e):i},alphaDecay:function(_){return arguments.length?(s=+_,e):+s},alphaTarget:function(_){return arguments.length?(r=+_,e):r},velocityDecay:function(_){return arguments.length?(o=1-_,e):1-o},randomSource:function(_){return arguments.length?(u=_,a.forEach(g),e):u},force:function(_,p){return arguments.length>1?(p==null?a.delete(_):a.set(_,g(p)),e):a.get(_)},find:function(_,p,m){var x=0,E=t.length,y,C,A,L,S;for(m==null?m=1/0:m*=m,x=0;x<E;++x)L=t[x],y=_-L.x,C=p-L.y,A=y*y+C*C,A<m&&(S=L,m=A);return S},on:function(_,p){return arguments.length>1?(l.on(_,p),e):l.on(_)}}}function a_(){var t,e,n,i,s=Fs(-30),r,o=1,a=1/0,c=.81;function l(h){var g,_=t.length,p=Hf(t,g1,_1).visitAfter(d);for(i=h,g=0;g<_;++g)e=t[g],p.visit(f)}function u(){if(t){var h,g=t.length,_;for(r=new Array(g),h=0;h<g;++h)_=t[h],r[_.index]=+s(_,h,t)}}function d(h){var g=0,_,p,m=0,x,E,y;if(h.length){for(x=E=y=0;y<4;++y)(_=h[y])&&(p=Math.abs(_.value))&&(g+=_.value,m+=p,x+=p*_.x,E+=p*_.y);h.x=x/m,h.y=E/m}else{_=h,_.x=_.data.x,_.y=_.data.y;do g+=r[_.data.index];while(_=_.next)}h.value=g}function f(h,g,_,p){if(!h.value)return!0;var m=h.x-e.x,x=h.y-e.y,E=p-g,y=m*m+x*x;if(E*E/c<y)return y<a&&(m===0&&(m=ss(n),y+=m*m),x===0&&(x=ss(n),y+=x*x),y<o&&(y=Math.sqrt(o*y)),e.vx+=m*h.value*i/y,e.vy+=x*h.value*i/y),!0;if(h.length||y>=a)return;(h.data!==e||h.next)&&(m===0&&(m=ss(n),y+=m*m),x===0&&(x=ss(n),y+=x*x),y<o&&(y=Math.sqrt(o*y)));do h.data!==e&&(E=r[h.data.index]*i/y,e.vx+=m*E,e.vy+=x*E);while(h=h.next)}return l.initialize=function(h,g){t=h,n=g,u()},l.strength=function(h){return arguments.length?(s=typeof h=="function"?h:Fs(+h),u(),l):s},l.distanceMin=function(h){return arguments.length?(o=h*h,l):Math.sqrt(o)},l.distanceMax=function(h){return arguments.length?(a=h*h,l):Math.sqrt(a)},l.theta=function(h){return arguments.length?(c=h*h,l):Math.sqrt(c)},l}function y1(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}const Vh=Symbol("implicit");function l_(){var t=new xh,e=[],n=[],i=Vh;function s(r){let o=t.get(r);if(o===void 0){if(i!==Vh)return i;t.set(r,o=e.push(r)-1)}return n[o%n.length]}return s.domain=function(r){if(!arguments.length)return e.slice();e=[],t=new xh;for(const o of r)t.has(o)||t.set(o,e.push(o)-1);return s},s.range=function(r){return arguments.length?(n=Array.from(r),s):n.slice()},s.unknown=function(r){return arguments.length?(i=r,s):i},s.copy=function(){return l_(e,n).unknown(i)},y1.apply(s,arguments),s}function qr(t,e,n){this.k=t,this.x=e,this.y=n}qr.prototype={constructor:qr,scale:function(t){return t===1?this:new qr(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new qr(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};qr.prototype;const S1={class:"memory-graph"},M1={key:0,class:"loading-overlay"},b1={key:1,class:"empty-placeholder"},E1=xn({__name:"MemoryGraph",props:{graphData:{},isLoading:{type:Boolean}},emits:["nodeClick"],setup(t,{emit:e}){const n=t,i=e,s=we();let r=null,o=null;const a=l_().domain(["storage","thinking","skill","entity","category"]).range(["#00ff41","#ff00ff","#00ffff","#ffff00","#ff6b6b"]);qn(()=>{s.value&&c()}),di(()=>n.graphData,h=>{h.nodes.length>0&&l(h)},{deep:!0}),Er(()=>{r&&r.stop()});function c(){if(!s.value)return;const h=s.value.clientWidth,g=s.value.clientHeight;o=_r(s.value).append("svg").attr("width",h).attr("height",g),o.append("defs").append("marker").attr("id","arrowhead").attr("viewBox","-0 -5 10 10").attr("refX",20).attr("refY",0).attr("orient","auto").attr("markerWidth",6).attr("markerHeight",6).append("path").attr("d","M 0,-5 L 10,0 L 0,5").attr("fill","#00ff41")}function l(h){if(!o||!s.value)return;const g=s.value.clientWidth,_=s.value.clientHeight;o.selectAll("*").remove(),r=o_(h.nodes).force("link",r_(h.links).id(x=>x.id).distance(100)).force("charge",a_().strength(-300)).force("center",n_(g/2,_/2)).force("collision",s_().radius(30));const p=o.append("g").selectAll("line").data(h.links).enter().append("line").attr("stroke","#00ff41").attr("stroke-opacity",.6).attr("stroke-width",1.5),m=o.append("g").selectAll("circle").data(h.nodes).enter().append("circle").attr("r",8).attr("fill",x=>a(x.type)||"#00ff41").attr("stroke","#fff").attr("stroke-width",2).style("cursor","pointer").call(Gg().on("start",u).on("drag",d).on("end",f)).on("click",(x,E)=>{i("nodeClick",E)});m.append("title").text(x=>x.label||x.id),r.on("tick",()=>{p.attr("x1",x=>x.source.x).attr("y1",x=>x.source.y).attr("x2",x=>x.target.x).attr("y2",x=>x.target.y),m.attr("cx",x=>x.x).attr("cy",x=>x.y)})}function u(h){!h.active&&r&&r.alphaTarget(.3).restart(),h.subject.fx=h.subject.x(h.subject).fy=h.subject.y}function d(h){h.subject.fx=h.x,h.subject.fy=h.y}function f(h){!h.active&&r&&r.alphaTarget(0),h.subject.fx=null,h.subject.fy=null}return(h,g)=>(ue(),fe("div",S1,[v("div",{ref_key:"containerRef",ref:s,class:"graph-container"},null,512),t.isLoading?(ue(),fe("div",M1,[...g[0]||(g[0]=[v("div",{class:"loading-spinner"},null,-1),v("p",null,"加载图谱中...",-1)])])):et("",!0),!t.isLoading&&t.graphData.nodes.length===0?(ue(),fe("div",b1,[...g[1]||(g[1]=[v("h2",null,"暂无认知数据",-1),v("p",null,"当前记忆库尚未经过认知分析，图谱暂时无法显示。",-1)])])):et("",!0)]))}}),Cn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},w1=Cn(E1,[["__scopeId","data-v-b5be093d"]]),T1={class:"memory-list-panel panel"},A1={class:"tiered-stats"},C1={class:"stat-item"},R1={class:"stat-value"},P1={class:"stat-item"},L1={class:"stat-value"},D1={class:"stat-item"},I1={class:"stat-value"},N1={class:"stat-item"},U1={class:"stat-value"},F1={class:"memory-type-tabs"},O1=["onClick"],B1={class:"memory-search-box"},k1={key:0,class:"memory-list"},z1={key:0,class:"memory-item-placeholder"},V1=["onClick"],H1={class:"memory-header"},G1={class:"memory-time"},W1={class:"memory-title"},$1={class:"memory-content-preview"},X1={key:0,class:"memory-keywords"},q1={key:1,class:"memory-item-placeholder"},Y1={key:2,class:"pagination"},j1=["disabled"],K1={class:"page-info"},Z1=["disabled"],J1={class:"detail-body"},Q1={class:"detail-row"},ew={class:"detail-value"},tw={class:"detail-row"},nw={class:"detail-value"},iw={class:"detail-row"},sw={class:"detail-value"},rw={key:0,class:"detail-row"},ow={class:"detail-value"},aw={class:"detail-row"},lw={class:"detail-value"},cw={class:"detail-content"},uw={class:"detail-body"},fw={class:"edit-row"},dw={class:"edit-row"},hw={class:"edit-row"},jo=50,pw=xn({__name:"MemoryList",emits:["memorySelect"],setup(t,{emit:e}){const n=e,i=Wi(),{memories:s,memoryCountByType:r,isLoading:o}=wr(i),a=Et(()=>i.currentMemoryType),c=we(""),l=we(1),u=we(null),d=we(null),f=we(!1),h=we(!1),g=we(null),_=we(""),p=[{label:"全部",value:"all"},{label:"技能",value:"skill"},{label:"思维",value:"thinking"},{label:"存储",value:"storage"}],m=Et(()=>r.value),x=Et(()=>{let w=s.value;if(a.value!=="all"&&(w=w.filter(T=>T.memory_type===a.value)),c.value.trim()){const T=c.value.toLowerCase();w=w.filter(V=>{var X,re,ce;return((X=V.content)==null?void 0:X.toLowerCase().includes(T))||((re=V.title)==null?void 0:re.toLowerCase().includes(T))||((ce=V.keywords)==null?void 0:ce.some(pe=>pe.toLowerCase().includes(T)))})}return w}),E=Et(()=>{const w=(l.value-1)*jo,T=w+jo;return x.value.slice(w,T)}),y=Et(()=>Math.ceil(x.value.length/jo));di([()=>a.value,c],()=>{l.value=1}),qn(()=>{C()});async function C(){try{const w=await pn.searchMemories("",1e3);s.value=w.items.map(T=>({id:T.memory_id||T.id,content:T.content,title:T.title,memory_type:T.memory_type||"storage",keywords:T.keywords||[],tags:T.tags||[],timestamp:T.timestamp,scope:T.scope,user_id:T.user_id,importance:T.importance||.5}))}catch(w){console.error("加载记忆失败:",w)}}function A(w){i.setMemoryType(w)}function L(w){u.value=w.id,d.value=w,f.value=!0,n("memorySelect",w)}function S(){f.value=!1,d.value=null,u.value=null}function M(){var w;d.value&&(g.value={...d.value},_.value=((w=d.value.keywords)==null?void 0:w.join(", "))||"",h.value=!0,f.value=!1)}function U(){h.value=!1,g.value=null,_.value=""}async function D(){if(g.value)try{const w={...g.value,keywords:_.value.split(",").map(V=>V.trim()).filter(V=>V)};await pn.updateMemory(w.id,{content:w.content,user_id:w.user_id||"default",title:w.title,keywords:w.keywords});const T=s.value.findIndex(V=>V.id===w.id);T!==-1&&(s.value[T]=w),h.value=!1,g.value=null,await C()}catch(w){console.error("保存记忆失败:",w),alert("保存失败: "+w.message)}}async function N(){if(d.value&&confirm(`确定要删除记忆 "${d.value.title||d.value.id}" 吗？`))try{await pn.deleteMemory(d.value.id,d.value.user_id||"default"),s.value=s.value.filter(w=>{var T;return w.id!==((T=d.value)==null?void 0:T.id)}),S(),await C()}catch(w){console.error("删除记忆失败:",w),alert("删除失败: "+w.message)}}function z(){l.value=1}function G(w){return{storage:"存储",thinking:"思维",skill:"技能"}[w||""]||w||"未知"}function k(w){if(!w)return"";const T=new Date(w),X=new Date().getTime()-T.getTime(),re=Math.floor(X/6e4),ce=Math.floor(X/36e5),pe=Math.floor(X/864e5);return re<1?"刚刚":re<60?`${re}分钟前`:ce<24?`${ce}小时前`:pe<30?`${pe}天前`:T.toLocaleDateString()}return(w,T)=>{var V;return ue(),fe("div",T1,[T[24]||(T[24]=v("h1",null,"记忆列表",-1)),v("div",A1,[v("div",C1,[T[8]||(T[8]=v("span",{class:"stat-label"},"技能",-1)),v("span",R1,te(m.value.skill),1)]),v("div",P1,[T[9]||(T[9]=v("span",{class:"stat-label"},"思维",-1)),v("span",L1,te(m.value.thinking),1)]),v("div",D1,[T[10]||(T[10]=v("span",{class:"stat-label"},"存储",-1)),v("span",I1,te(m.value.storage),1)]),v("div",N1,[T[11]||(T[11]=v("span",{class:"stat-label"},"总计",-1)),v("span",U1,te(m.value.total),1)])]),v("div",F1,[(ue(),fe(mt,null,Ot(p,X=>v("button",{key:X.value,class:pt(["memory-tab",{active:a.value===X.value}]),onClick:re=>A(X.value)},te(X.label),11,O1)),64))]),v("div",B1,[Dt(v("input",{"onUpdate:modelValue":T[0]||(T[0]=X=>c.value=X),type:"text",placeholder:"搜索记忆...",onKeyup:Cf(z,["enter"])},null,544),[[Qt,c.value]]),v("button",{onClick:z},"🔍")]),be(o)?(ue(),fe("div",q1,[...T[12]||(T[12]=[v("div",{class:"loading-spinner"},null,-1),pr(" 加载中... ",-1)])])):(ue(),fe("div",k1,[E.value.length===0?(ue(),fe("div",z1," 暂无记忆 ")):(ue(!0),fe(mt,{key:1},Ot(E.value,X=>{var re,ce,pe;return ue(),fe("div",{key:X.id,class:pt(["memory-item",[X.memory_type,{selected:u.value===X.id}]]),onClick:Ge=>L(X)},[v("div",H1,[v("span",{class:pt(["memory-type-badge",X.memory_type])},te(G(X.memory_type)),3),v("span",G1,te(k(X.timestamp)),1)]),v("div",W1,te(X.title||((re=X.content)==null?void 0:re.slice(0,50))+"..."),1),v("div",$1,te((ce=X.content)==null?void 0:ce.slice(0,80))+"...",1),(pe=X.keywords)!=null&&pe.length?(ue(),fe("div",X1,[(ue(!0),fe(mt,null,Ot(X.keywords.slice(0,3),Ge=>(ue(),fe("span",{key:Ge,class:"keyword-tag"},te(Ge),1))),128))])):et("",!0)],10,V1)}),128))])),y.value>1?(ue(),fe("div",Y1,[v("button",{class:"page-btn",disabled:l.value===1,onClick:T[1]||(T[1]=X=>l.value--)}," ← ",8,j1),v("span",K1,te(l.value)+" / "+te(y.value),1),v("button",{class:"page-btn",disabled:l.value===y.value,onClick:T[2]||(T[2]=X=>l.value++)}," → ",8,Z1),v("span",{class:"page-size"},"每页 "+te(jo)+" 条")])):et("",!0),f.value&&d.value?(ue(),fe("div",{key:3,class:"memory-detail-modal",onClick:S},[v("div",{class:"memory-detail-content",onClick:T[3]||(T[3]=ja(()=>{},["stop"]))},[v("div",{class:"detail-header"},[T[13]||(T[13]=v("h3",null,"记忆详情",-1)),v("button",{class:"close-btn",onClick:S},"×")]),v("div",J1,[v("div",Q1,[T[14]||(T[14]=v("span",{class:"detail-label"},"ID:",-1)),v("span",ew,te(d.value.id),1)]),v("div",tw,[T[15]||(T[15]=v("span",{class:"detail-label"},"类型:",-1)),v("span",nw,[v("span",{class:pt(["memory-type-badge",d.value.memory_type])},te(G(d.value.memory_type)),3)])]),v("div",iw,[T[16]||(T[16]=v("span",{class:"detail-label"},"标题:",-1)),v("span",sw,te(d.value.title||"无标题"),1)]),(V=d.value.keywords)!=null&&V.length?(ue(),fe("div",rw,[T[17]||(T[17]=v("span",{class:"detail-label"},"关键词:",-1)),v("span",ow,[(ue(!0),fe(mt,null,Ot(d.value.keywords,X=>(ue(),fe("span",{key:X,class:"keyword-tag"},te(X),1))),128))])])):et("",!0),v("div",aw,[T[18]||(T[18]=v("span",{class:"detail-label"},"时间:",-1)),v("span",lw,te(d.value.timestamp),1)]),T[19]||(T[19]=v("div",{class:"detail-row"},[v("span",{class:"detail-label"},"内容:")],-1)),v("div",cw,te(d.value.content),1)]),v("div",{class:"detail-actions"},[v("button",{class:"action-btn edit",onClick:M},"✏️ 编辑"),v("button",{class:"action-btn delete",onClick:N},"🗑️ 删除")])])])):et("",!0),h.value&&g.value?(ue(),fe("div",{key:4,class:"memory-detail-modal",onClick:U},[v("div",{class:"memory-detail-content edit-mode",onClick:T[7]||(T[7]=ja(()=>{},["stop"]))},[v("div",{class:"detail-header"},[T[20]||(T[20]=v("h3",null,"编辑记忆",-1)),v("button",{class:"close-btn",onClick:U},"×")]),v("div",uw,[v("div",fw,[T[21]||(T[21]=v("label",null,"标题:",-1)),Dt(v("input",{"onUpdate:modelValue":T[4]||(T[4]=X=>g.value.title=X),type:"text",placeholder:"记忆标题"},null,512),[[Qt,g.value.title]])]),v("div",dw,[T[22]||(T[22]=v("label",null,"关键词 (逗号分隔):",-1)),Dt(v("input",{"onUpdate:modelValue":T[5]||(T[5]=X=>_.value=X),type:"text",placeholder:"关键词1, 关键词2"},null,512),[[Qt,_.value]])]),v("div",hw,[T[23]||(T[23]=v("label",null,"内容:",-1)),Dt(v("textarea",{"onUpdate:modelValue":T[6]||(T[6]=X=>g.value.content=X),rows:"8",placeholder:"记忆内容..."},null,512),[[Qt,g.value.content]])])]),v("div",{class:"detail-actions"},[v("button",{class:"action-btn save",onClick:D},"💾 保存"),v("button",{class:"action-btn cancel",onClick:U},"❌ 取消")])])])):et("",!0)])}}}),mw=Cn(pw,[["__scopeId","data-v-5725e82f"]]),gw={class:"log-panel panel"},_w={class:"log-time"},vw={class:"log-message"},xw={key:0,class:"log-placeholder"},yw=xn({__name:"LogPanel",setup(t){const e=Wi(),{logs:n}=wr(e),i=we();let s=null;qn(()=>{e.fetchLogs(),s=window.setInterval(()=>{e.fetchLogs()},3e3)}),Er(()=>{s&&clearInterval(s)}),di(n,()=>{To(()=>{i.value&&(i.value.scrollTop=i.value.scrollHeight)})},{deep:!0});function r(){e.clearLogs()}return(o,a)=>(ue(),fe("div",gw,[v("div",{class:"log-header"},[a[0]||(a[0]=v("h3",null,"系统日志",-1)),v("button",{class:"clear-btn",onClick:r},"清空")]),v("div",{class:"log-content",ref_key:"logContentRef",ref:i},[(ue(!0),fe(mt,null,Ot(be(n),(c,l)=>(ue(),fe("div",{key:l,class:pt(["log-entry",c.type])},[v("span",_w,"["+te(c.time)+"]",1),v("span",vw,te(c.message),1)],2))),128)),be(n).length===0?(ue(),fe("div",xw," 暂无日志 ")):et("",!0)],512)]))}}),Sw=Cn(yw,[["__scopeId","data-v-7e5fe813"]]),Mw={class:"stats-panel-compact"},bw={key:0,class:"stats-row"},Ew={class:"stat-item"},ww={class:"stat-value"},Tw={class:"stat-item"},Aw={class:"stat-value"},Cw={class:"stat-item"},Rw={class:"stat-value"},Pw={class:"stat-item"},Lw={class:"stat-value"},Dw={class:"stat-item"},Iw={class:"stat-item"},Nw={class:"stat-value provider"},Uw={key:1,class:"stats-loading"},Fw=xn({__name:"StatsPanel",setup(t){const e=Wi(),{stats:n,evolutionStatus:i}=wr(e);return(s,r)=>{var o,a,c,l,u;return ue(),fe("div",Mw,[be(n)?(ue(),fe("div",bw,[v("div",Ew,[v("span",ww,te(be(n).memory_count||0),1),r[0]||(r[0]=v("span",{class:"stat-label"},"记忆",-1))]),r[6]||(r[6]=v("div",{class:"stat-divider"},null,-1)),v("div",Tw,[v("span",Aw,te(((o=be(n).tiered_breakdown)==null?void 0:o.skill)||0),1),r[1]||(r[1]=v("span",{class:"stat-label"},"技能",-1))]),v("div",Cw,[v("span",Rw,te(((a=be(n).tiered_breakdown)==null?void 0:a.thinking)||0),1),r[2]||(r[2]=v("span",{class:"stat-label"},"思维",-1))]),v("div",Pw,[v("span",Lw,te(((c=be(n).tiered_breakdown)==null?void 0:c.storage)||0),1),r[3]||(r[3]=v("span",{class:"stat-label"},"存储",-1))]),r[7]||(r[7]=v("div",{class:"stat-divider"},null,-1)),v("div",Dw,[v("span",{class:pt(["stat-value","status",(l=be(i))!=null&&l.enabled?"active":"inactive"])},te((u=be(i))!=null&&u.enabled?"运行中":"已停止"),3),r[4]||(r[4]=v("span",{class:"stat-label"},"进化",-1))]),v("div",Iw,[v("span",Nw,te(be(n).preferred_provider||"无"),1),r[5]||(r[5]=v("span",{class:"stat-label"},"模型",-1))])])):(ue(),fe("div",Uw," 加载中... "))])}}}),Ow=Cn(Fw,[["__scopeId","data-v-ea547069"]]),lc="default_user",c_=Rf("auth",()=>{const t=we(lc),e=we(!0),n=we({id:lc,name:lc}),i=Et(()=>t.value);function s(a){t.value=a,n.value.id=a,n.value.name=a}function r(){const a=localStorage.getItem("mcp_memory_user_id");a&&s(a)}function o(a){localStorage.setItem("mcp_memory_user_id",a),s(a)}return r(),{currentUserId:t,isAuthenticated:e,userInfo:n,getCurrentUserId:i,setUserId:s,loadUserFromStorage:r,saveUserToStorage:o}}),Bw={class:"memory-writer panel"},kw={class:"write-mode-tabs"},zw={class:"form-group"},Vw={class:"form-group"},Hw={key:0,class:"error-text"},Gw={class:"form-group"},Ww={class:"form-row"},$w={class:"form-group"},Xw={key:0,class:"form-group"},qw={key:1,class:"form-group"},Yw={class:"form-actions"},jw=["disabled"],Kw={key:0,class:"success-message"},Zw={key:1,class:"error-message"},Jw=xn({__name:"MemoryWriter",emits:["written"],setup(t,{emit:e}){const n=e,i=Wi(),s=c_(),r=we("normal"),o=we(!1),a=we(""),c=we(""),l=we({title:"",content:"",scope:"project",memory_type:"storage",content_type:"note",keywords:[]}),u=we({content:""}),d=Et({get:()=>l.value.keywords.join(", "),set:p=>{l.value.keywords=p.split(",").map(m=>m.trim()).filter(m=>m)}}),f=Et(()=>l.value.content.trim().length>0);function h(){return u.value.content="",l.value.content.trim()?!0:(u.value.content="请输入记忆内容",!1)}function g(){l.value={title:"",content:"",scope:"project",memory_type:"storage",content_type:"note",keywords:[]},u.value={content:""},a.value="",c.value=""}async function _(){if(h()){o.value=!0,a.value="",c.value="";try{let p;const m=s.getCurrentUserId;if(r.value==="normal")p=await pn.writeMemory({content:l.value.content,user_id:m,title:l.value.title||void 0,scope:l.value.scope,keywords:l.value.keywords.length>0?l.value.keywords:void 0,content_type:l.value.content_type}),i.addLog("记忆写入成功","success");else{const x={content:l.value.content,user_id:m,title:l.value.title||void 0,keywords:l.value.keywords.length>0?l.value.keywords:void 0};l.value.memory_type==="storage"?p=await ai.writeStorage(x):l.value.memory_type==="thinking"?p=await ai.writeThinking(x):p=await ai.writeSkill(x);const y={storage:"存储记忆",thinking:"思维记忆",skill:"技能记忆"}[l.value.memory_type]||"记忆";i.addLog(`${y}写入成功`,"success")}a.value=`记忆写入成功！ID: ${p.id}`,n("written",p.id),l.value={title:"",content:"",scope:l.value.scope,memory_type:l.value.memory_type,content_type:l.value.content_type,keywords:[]},await i.fetchStats()}catch(p){const m=p.message||"未知错误";c.value=`写入失败: ${m}`,i.addLog("写入失败: "+m,"error")}finally{o.value=!1}}}return(p,m)=>(ue(),fe("div",Bw,[m[17]||(m[17]=v("h3",null,"记忆写入",-1)),v("div",kw,[v("button",{class:pt(["mode-tab",{active:r.value==="normal"}]),onClick:m[0]||(m[0]=x=>r.value="normal")}," 普通写入 ",2),v("button",{class:pt(["mode-tab",{active:r.value==="tiered"}]),onClick:m[1]||(m[1]=x=>r.value="tiered")}," 分层写入 ",2)]),v("div",zw,[m[8]||(m[8]=v("label",null,"标题",-1)),Dt(v("input",{"onUpdate:modelValue":m[2]||(m[2]=x=>l.value.title=x),type:"text",placeholder:"记忆标题（可选）"},null,512),[[Qt,l.value.title]])]),v("div",Vw,[m[9]||(m[9]=v("label",null,[pr("内容 "),v("span",{class:"required"},"*")],-1)),Dt(v("textarea",{"onUpdate:modelValue":m[3]||(m[3]=x=>l.value.content=x),rows:"6",placeholder:"输入记忆内容...",class:pt({"input-error":u.value.content})},null,2),[[Qt,l.value.content]]),u.value.content?(ue(),fe("span",Hw,te(u.value.content),1)):et("",!0)]),v("div",Gw,[m[10]||(m[10]=v("label",null,"关键词",-1)),Dt(v("input",{"onUpdate:modelValue":m[4]||(m[4]=x=>d.value=x),type:"text",placeholder:"关键词1, 关键词2, ..."},null,512),[[Qt,d.value]])]),v("div",Ww,[v("div",$w,[m[12]||(m[12]=v("label",null,"作用域",-1)),Dt(v("select",{"onUpdate:modelValue":m[5]||(m[5]=x=>l.value.scope=x)},[...m[11]||(m[11]=[v("option",{value:"project"},"项目",-1),v("option",{value:"global"},"全局",-1)])],512),[[ro,l.value.scope]])]),r.value==="tiered"?(ue(),fe("div",Xw,[m[14]||(m[14]=v("label",null,"记忆类型",-1)),Dt(v("select",{"onUpdate:modelValue":m[6]||(m[6]=x=>l.value.memory_type=x)},[...m[13]||(m[13]=[v("option",{value:"storage"},"存储记忆 💾",-1),v("option",{value:"thinking"},"思维记忆 💭",-1),v("option",{value:"skill"},"技能记忆 ⚡",-1)])],512),[[ro,l.value.memory_type]])])):et("",!0),r.value==="normal"?(ue(),fe("div",qw,[m[16]||(m[16]=v("label",null,"内容类型",-1)),Dt(v("select",{"onUpdate:modelValue":m[7]||(m[7]=x=>l.value.content_type=x)},[...m[15]||(m[15]=[Qm('<option value="note" data-v-aeea853e>笔记</option><option value="task" data-v-aeea853e>任务</option><option value="summary" data-v-aeea853e>摘要</option><option value="code" data-v-aeea853e>代码</option><option value="config" data-v-aeea853e>配置</option><option value="workflow" data-v-aeea853e>工作流</option>',6)])],512),[[ro,l.value.content_type]])])):et("",!0)]),v("div",Yw,[v("button",{class:"btn-reset",onClick:g},"重置"),v("button",{class:"btn-write",onClick:_,disabled:o.value||!f.value},te(o.value?"写入中...":"写入记忆"),9,jw)]),a.value?(ue(),fe("div",Kw,te(a.value),1)):et("",!0),c.value?(ue(),fe("div",Zw,te(c.value),1)):et("",!0)]))}}),Qw=Cn(Jw,[["__scopeId","data-v-aeea853e"]]),eT={class:"modal-body"},tT={class:"form-group"},nT={class:"form-group"},iT={class:"form-group"},sT={class:"form-row"},rT={class:"form-group"},oT={class:"form-group"},aT={class:"form-actions"},lT=["disabled"],cT=xn({__name:"MemoryEditor",props:{visible:{type:Boolean},memory:{}},emits:["close","saved","deleted"],setup(t,{emit:e}){const n=t,i=e,s=Wi(),r=we(!1),o=we({title:"",content:"",scope:"project",memory_type:"storage",keywords:[]}),a=Et({get:()=>o.value.keywords.join(", "),set:d=>{o.value.keywords=d.split(",").map(f=>f.trim()).filter(f=>f)}});di(()=>n.memory,d=>{d&&(o.value={title:d.title||"",content:d.content||"",scope:d.scope||"project",memory_type:d.memory_type||"storage",keywords:d.keywords||[]})},{immediate:!0});function c(){i("close")}async function l(){if(n.memory){r.value=!0;try{await s.updateMemory(n.memory.id,o.value.content),s.addLog("记忆已更新","success"),i("saved"),c()}catch(d){s.addLog("更新失败: "+d.message,"error")}finally{r.value=!1}}}async function u(){if(n.memory&&confirm("确定要删除这条记忆吗？此操作不可撤销。"))try{await s.deleteMemory(n.memory.id),s.addLog("记忆已删除","success"),i("deleted",n.memory.id),c()}catch(d){s.addLog("删除失败: "+d.message,"error")}}return(d,f)=>t.visible?(ue(),fe("div",{key:0,class:"memory-editor-modal",onClick:c},[v("div",{class:"modal-content",onClick:f[5]||(f[5]=ja(()=>{},["stop"]))},[v("div",{class:"modal-header"},[f[6]||(f[6]=v("h2",null,"编辑记忆",-1)),v("button",{class:"close-btn",onClick:c},"×")]),v("div",eT,[v("div",tT,[f[7]||(f[7]=v("label",null,"标题",-1)),Dt(v("input",{"onUpdate:modelValue":f[0]||(f[0]=h=>o.value.title=h),type:"text",placeholder:"记忆标题"},null,512),[[Qt,o.value.title]])]),v("div",nT,[f[8]||(f[8]=v("label",null,"内容",-1)),Dt(v("textarea",{"onUpdate:modelValue":f[1]||(f[1]=h=>o.value.content=h),rows:"10",placeholder:"记忆内容"},null,512),[[Qt,o.value.content]])]),v("div",iT,[f[9]||(f[9]=v("label",null,"关键词（用逗号分隔）",-1)),Dt(v("input",{"onUpdate:modelValue":f[2]||(f[2]=h=>a.value=h),type:"text",placeholder:"关键词1, 关键词2, ..."},null,512),[[Qt,a.value]])]),v("div",sT,[v("div",rT,[f[11]||(f[11]=v("label",null,"作用域",-1)),Dt(v("select",{"onUpdate:modelValue":f[3]||(f[3]=h=>o.value.scope=h)},[...f[10]||(f[10]=[v("option",{value:"project"},"项目",-1),v("option",{value:"global"},"全局",-1)])],512),[[ro,o.value.scope]])]),v("div",oT,[f[13]||(f[13]=v("label",null,"记忆类型",-1)),Dt(v("select",{"onUpdate:modelValue":f[4]||(f[4]=h=>o.value.memory_type=h)},[...f[12]||(f[12]=[v("option",{value:"storage"},"存储记忆",-1),v("option",{value:"thinking"},"思维记忆",-1),v("option",{value:"skill"},"技能记忆",-1)])],512),[[ro,o.value.memory_type]])])]),v("div",aT,[v("button",{class:"btn-secondary",onClick:c},"取消"),t.memory?(ue(),fe("button",{key:0,class:"btn-danger",onClick:u},"删除")):et("",!0),v("button",{class:"btn-primary",onClick:l,disabled:r.value},te(r.value?"保存中...":"保存"),9,lT)])])])])):et("",!0)}}),uT=Cn(cT,[["__scopeId","data-v-05d49056"]]),fT={class:"tiered-memory-panel panel"},dT={class:"tier-tabs"},hT=["onClick"],pT={class:"tier-icon"},mT={class:"write-section"},gT={class:"form-group"},_T={class:"form-group"},vT={class:"form-group"},xT=["disabled"],yT={class:"query-section"},ST={class:"query-form"},MT=["disabled"],bT={class:"query-results"},ET={key:0,class:"empty-placeholder"},wT=["onClick"],TT={class:"result-title"},AT={class:"result-preview"},CT={class:"result-meta"},RT={class:"result-time"},PT={class:"tier-stats"},LT={class:"stat-item"},DT={class:"stat-value"},IT={class:"stat-item"},NT={class:"stat-value"},UT={class:"stat-item"},FT={class:"stat-value"},OT=xn({__name:"TieredMemoryPanel",emits:["memorySelect"],setup(t,{emit:e}){const n=e,i=Wi(),s=c_(),r=[{label:"存储记忆",value:"storage",icon:"💾"},{label:"思维记忆",value:"thinking",icon:"💭"},{label:"技能记忆",value:"skill",icon:"⚡"}],o=we("storage"),a=we({title:"",content:"",keywords:""}),c=we(!1),l=we(""),u=we(!1),d=we([]),f=Et(()=>{var E;return((E=r.find(y=>y.value===o.value))==null?void 0:E.label)||""}),h=Et(()=>i.memoryCountByType);function g(E){o.value=E,d.value=[]}async function _(){if(!a.value.content.trim()){i.addLog("请输入记忆内容","warn");return}c.value=!0;try{const E=a.value.keywords.split(",").map(C=>C.trim()).filter(C=>C),y=s.getCurrentUserId;o.value==="storage"?await ai.writeStorage({content:a.value.content,user_id:y,title:a.value.title,keywords:E}):o.value==="thinking"?await ai.writeThinking({content:a.value.content,user_id:y,title:a.value.title,keywords:E}):o.value==="skill"&&await ai.writeSkill({content:a.value.content,user_id:y,title:a.value.title,keywords:E}),i.addLog(`${f.value}写入成功`,"success"),a.value={title:"",content:"",keywords:""},await i.fetchStats()}catch(E){i.addLog("写入失败: "+E.message,"error")}finally{c.value=!1}}async function p(){if(!l.value.trim()){i.addLog("请输入查询内容","warn");return}u.value=!0;try{const E=await ai.queryMemories({query:l.value,user_id:s.getCurrentUserId,memory_type:o.value,top_k:10});d.value=E.memories||[],i.addLog(`查询到 ${d.value.length} 条记忆`,"success")}catch(E){i.addLog("查询失败: "+E.message,"error")}finally{u.value=!1}}function m(E){n("memorySelect",E)}function x(E){return new Date(E).toLocaleString("zh-CN")}return(E,y)=>(ue(),fe("div",fT,[y[7]||(y[7]=v("h3",null,"三层记忆管理",-1)),v("div",dT,[(ue(),fe(mt,null,Ot(r,C=>v("button",{key:C.value,class:pt(["tier-tab",{active:o.value===C.value}]),onClick:A=>g(C.value)},[v("span",pT,te(C.icon),1),pr(" "+te(C.label),1)],10,hT)),64))]),v("div",mT,[v("h4",null,"写入"+te(f.value),1),v("div",gT,[Dt(v("input",{"onUpdate:modelValue":y[0]||(y[0]=C=>a.value.title=C),type:"text",placeholder:"标题（可选）"},null,512),[[Qt,a.value.title]])]),v("div",_T,[Dt(v("textarea",{"onUpdate:modelValue":y[1]||(y[1]=C=>a.value.content=C),rows:"5",placeholder:"记忆内容..."},null,512),[[Qt,a.value.content]])]),v("div",vT,[Dt(v("input",{"onUpdate:modelValue":y[2]||(y[2]=C=>a.value.keywords=C),type:"text",placeholder:"关键词（逗号分隔）"},null,512),[[Qt,a.value.keywords]])]),v("button",{class:"btn-write",onClick:_,disabled:c.value},te(c.value?"写入中...":"写入记忆"),9,xT)]),v("div",yT,[v("h4",null,"查询"+te(f.value),1),v("div",ST,[Dt(v("input",{"onUpdate:modelValue":y[3]||(y[3]=C=>l.value=C),type:"text",placeholder:"输入查询内容...",onKeyup:Cf(p,["enter"])},null,544),[[Qt,l.value]]),v("button",{onClick:p,disabled:u.value},te(u.value?"查询中...":"查询"),9,MT)]),v("div",bT,[d.value.length===0?(ue(),fe("div",ET," 暂无查询结果 ")):et("",!0),(ue(!0),fe(mt,null,Ot(d.value,C=>{var A;return ue(),fe("div",{key:C.id,class:"result-item",onClick:L=>m(C)},[v("div",TT,te(C.title||"无标题"),1),v("div",AT,te((A=C.content)==null?void 0:A.substring(0,100))+"...",1),v("div",CT,[v("span",RT,te(x(C.timestamp)),1)])],8,wT)}),128))])]),v("div",PT,[v("div",LT,[y[4]||(y[4]=v("span",{class:"stat-label"},"存储层",-1)),v("span",DT,te(h.value.storage),1)]),v("div",IT,[y[5]||(y[5]=v("span",{class:"stat-label"},"思维层",-1)),v("span",NT,te(h.value.thinking),1)]),v("div",UT,[y[6]||(y[6]=v("span",{class:"stat-label"},"技能层",-1)),v("span",FT,te(h.value.skill),1)])])]))}}),BT=Cn(OT,[["__scopeId","data-v-1b46c3c2"]]),kT={class:"llm-interactions-panel panel"},zT={class:"panel-header"},VT=["disabled"],HT={class:"stats-summary"},GT={class:"stat-item"},WT={class:"stat-value"},$T={class:"stat-item"},XT={class:"stat-value"},qT={class:"stat-item"},YT={class:"stat-value"},jT={class:"interactions-list"},KT={key:0,class:"loading-placeholder"},ZT={key:1,class:"empty-placeholder"},JT=["onClick"],QT={class:"interaction-header"},eA={class:"interaction-model"},tA={class:"interaction-time"},nA={class:"interaction-stats"},iA={class:"token-info"},sA={class:"stat-badge input-token"},rA={class:"stat-badge output-token"},oA={key:0,class:"interaction-detail"},aA={class:"detail-section"},lA={class:"detail-content prompt"},cA={class:"detail-section"},uA={class:"detail-content response"},fA={key:0,class:"pagination"},dA=["disabled"],hA={class:"page-info"},pA=["disabled"],cc=10,mA=xn({__name:"LLMInteractions",setup(t){const e=we([]),n=we(!1),i=we(1),s=we(null),r=Et(()=>e.value.reduce((g,_)=>g+(_.input_tokens||0)+(_.output_tokens||0),0)),o=Et(()=>{if(e.value.length===0)return 0;const g=e.value.reduce((_,p)=>_+(p.response_time||0),0);return Math.round(g/e.value.length)}),a=Et(()=>Math.ceil(e.value.length/cc)),c=Et(()=>{const g=(i.value-1)*cc,_=g+cc;return e.value.slice(g,_)});async function l(){n.value=!0;try{const g=await SS.getInteractions(100);e.value=g.interactions||g.items||g||[]}catch(g){console.error("Failed to load LLM interactions:",g),e.value=[]}finally{n.value=!1}}function u(g){s.value=s.value===g?null:g}function d(g){return new Date(g).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function f(g,_){return g?g.length<=_?g:g.substring(0,_)+"...":""}function h(g){return g<1e3?"fast":g<3e3?"medium":"slow"}return qn(()=>{l()}),(g,_)=>(ue(),fe("div",kT,[v("div",zT,[_[2]||(_[2]=v("h3",null,"LLM 交互历史",-1)),v("button",{class:"refresh-btn",onClick:l,disabled:n.value},te(n.value?"加载中...":"刷新"),9,VT)]),v("div",HT,[v("div",GT,[_[3]||(_[3]=v("span",{class:"stat-label"},"总交互",-1)),v("span",WT,te(e.value.length),1)]),v("div",$T,[_[4]||(_[4]=v("span",{class:"stat-label"},"总Token",-1)),v("span",XT,te(r.value),1)]),v("div",qT,[_[5]||(_[5]=v("span",{class:"stat-label"},"平均响应",-1)),v("span",YT,te(o.value)+"ms",1)])]),v("div",jT,[n.value?(ue(),fe("div",KT," 加载中... ")):c.value.length===0?(ue(),fe("div",ZT," 暂无交互记录 ")):(ue(!0),fe(mt,{key:2},Ot(c.value,p=>(ue(),fe("div",{key:p.id,class:"interaction-item",onClick:m=>u(p.id)},[v("div",QT,[v("span",eA,te(p.model),1),v("span",tA,te(d(p.timestamp)),1)]),v("div",nA,[v("span",iA,[v("span",sA,"输入: "+te(p.input_tokens||0),1),v("span",rA,"输出: "+te(p.output_tokens||0),1)]),v("span",{class:pt(["response-time",h(p.response_time)])},te(p.response_time||0)+"ms ",3)]),s.value===p.id?(ue(),fe("div",oA,[v("div",aA,[_[6]||(_[6]=v("div",{class:"detail-label"},"提示词:",-1)),v("div",lA,te(f(p.prompt,500)),1)]),v("div",cA,[_[7]||(_[7]=v("div",{class:"detail-label"},"响应:",-1)),v("div",uA,te(f(p.response,500)),1)])])):et("",!0)],8,JT))),128))]),a.value>1?(ue(),fe("div",fA,[v("button",{class:"page-btn",disabled:i.value===1,onClick:_[0]||(_[0]=p=>i.value--)}," 上一页 ",8,dA),v("span",hA,te(i.value)+" / "+te(a.value),1),v("button",{class:"page-btn",disabled:i.value===a.value,onClick:_[1]||(_[1]=p=>i.value++)}," 下一页 ",8,pA)])):et("",!0)]))}}),gA=Cn(mA,[["__scopeId","data-v-ab845488"]]),_A={class:"evolution-config panel"},vA={key:0,class:"config-content"},xA={class:"status-header"},yA={class:"status-text"},SA={class:"config-section"},MA={class:"profile-selector"},bA=["onClick","disabled"],EA={class:"profile-icon"},wA={class:"profile-name"},TA={class:"profile-desc"},AA={class:"config-section"},CA={class:"status-grid"},RA={class:"status-item"},PA={class:"status-item"},LA={class:"status-item"},DA={class:"status-item"},IA={class:"config-section"},NA={class:"stats-grid"},UA={class:"stat-item"},FA={class:"stat-value"},OA={class:"stat-item"},BA={class:"stat-value"},kA={class:"stat-item"},zA={class:"stat-value"},VA={class:"config-section"},HA={class:"time-info"},GA={class:"time-item"},WA={class:"time-value"},$A={class:"time-item"},XA={class:"time-value"},qA={class:"time-item"},YA={class:"time-value"},jA={class:"config-section"},KA={class:"activity-info"},ZA={key:0,class:"activity-item"},JA={class:"activity-time"},QA={key:1,class:"activity-item"},eC={class:"activity-time"},tC={key:2,class:"activity-item"},nC={class:"activity-time"},iC={key:0,class:"reflection-note"},sC={key:0,class:"error-section"},rC={class:"error-message"},oC={class:"config-section"},aC={class:"llm-info"},lC={class:"llm-item"},cC={key:0,class:"llm-item"},uC={class:"llm-value"},fC={key:1,class:"llm-item"},dC={class:"llm-value"},hC={key:1,class:"loading"},pC=xn({__name:"EvolutionConfig",setup(t){const e=Wi(),{evolutionStatus:n,currentProfile:i,isLoading:s}=wr(e),r=[{value:"light",label:"轻度",icon:"🐢",desc:"低频率扫描和反思，适合资源受限环境"},{value:"standard",label:"标准",icon:"🚀",desc:"平衡的扫描和反思频率，适合大多数场景"},{value:"aggressive",label:"激进",icon:"⚡",desc:"高频率扫描和反思，适合快速迭代场景"}],o=Et(()=>n.value?n.value.enabled?n.value.running?"运行中":"已暂停":"已停止":"未知"),a=Et(()=>{const d=r.find(f=>f.value===i.value);return(d==null?void 0:d.desc)||""});function c(d){return d?d<60?`${d} 秒`:d<3600?`${Math.floor(d/60)} 分钟`:`${Math.floor(d/3600)} 小时`:"-"}function l(d){if(!d)return"-";try{return new Date(d).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return d}}async function u(d){d!==i.value&&await e.setEvolutionProfile(d)}return qn(()=>{e.fetchEvolutionStatus()}),(d,f)=>{var h,g,_,p,m;return ue(),fe("div",_A,[f[24]||(f[24]=v("h3",null,"进化配置",-1)),be(n)?(ue(),fe("div",vA,[v("div",xA,[v("div",{class:pt(["status-indicator",{active:be(n).enabled&&be(n).running}])},null,2),v("span",yA,te(o.value),1)]),v("div",SA,[f[0]||(f[0]=v("h4",null,"进化模式",-1)),v("div",MA,[(ue(),fe(mt,null,Ot(r,x=>v("button",{key:x.value,class:pt(["profile-btn",{active:be(i)===x.value}]),onClick:E=>u(x.value),disabled:be(s)},[v("span",EA,te(x.icon),1),v("span",wA,te(x.label),1)],10,bA)),64))]),v("div",TA,te(a.value),1)]),v("div",AA,[f[5]||(f[5]=v("h4",null,"运行状态",-1)),v("div",CA,[v("div",RA,[f[1]||(f[1]=v("span",{class:"item-label"},"扫描任务",-1)),v("span",{class:pt(["item-value",be(n).scan_task_running?"running":"idle"])},te(be(n).scan_task_running?"运行中":"空闲"),3)]),v("div",PA,[f[2]||(f[2]=v("span",{class:"item-label"},"反思任务",-1)),v("span",{class:pt(["item-value",be(n).reflection_task_running?"running":"idle"])},te(be(n).reflection_task_running?"运行中":"空闲"),3)]),v("div",LA,[f[3]||(f[3]=v("span",{class:"item-label"},"日反思",-1)),v("span",{class:pt(["item-value",(h=be(n).daily_reflection)!=null&&h.running?"running":"idle"])},te((g=be(n).daily_reflection)!=null&&g.running?"运行中":"空闲"),3)]),v("div",DA,[f[4]||(f[4]=v("span",{class:"item-label"},"自适应",-1)),v("span",{class:pt(["item-value",be(n).adaptive?"active":"inactive"])},te(be(n).adaptive?"开启":"关闭"),3)])])]),v("div",IA,[f[9]||(f[9]=v("h4",null,"统计数据",-1)),v("div",NA,[v("div",UA,[v("div",FA,te(be(n).total_scanned),1),f[6]||(f[6]=v("div",{class:"stat-label"},"总扫描数",-1))]),v("div",OA,[v("div",BA,te(be(n).last_scan_processed),1),f[7]||(f[7]=v("div",{class:"stat-label"},"上次处理",-1))]),v("div",kA,[v("div",zA,te(((_=be(n).daily_reflection)==null?void 0:_.total_reflections)||0),1),f[8]||(f[8]=v("div",{class:"stat-label"},"反思次数",-1))])])]),v("div",VA,[f[13]||(f[13]=v("h4",null,"时间配置",-1)),v("div",HA,[v("div",GA,[f[10]||(f[10]=v("span",{class:"time-label"},"扫描间隔",-1)),v("span",WA,te(c(be(n).scan_interval_seconds)),1)]),v("div",$A,[f[11]||(f[11]=v("span",{class:"time-label"},"反思间隔",-1)),v("span",XA,te(c(be(n).reflection_interval_seconds)),1)]),v("div",qA,[f[12]||(f[12]=v("span",{class:"time-label"},"扫描批次",-1)),v("span",YA,te(be(n).scan_batch_size)+" 条",1)])])]),v("div",jA,[f[17]||(f[17]=v("h4",null,"最近活动",-1)),v("div",KA,[be(n).last_scan_time?(ue(),fe("div",ZA,[f[14]||(f[14]=v("span",{class:"activity-label"},"上次扫描",-1)),v("span",JA,te(l(be(n).last_scan_time)),1)])):et("",!0),be(n).last_reflection_time?(ue(),fe("div",QA,[f[15]||(f[15]=v("span",{class:"activity-label"},"上次反思",-1)),v("span",eC,te(l(be(n).last_reflection_time)),1)])):et("",!0),(p=be(n).daily_reflection)!=null&&p.next_reflection?(ue(),fe("div",tC,[f[16]||(f[16]=v("span",{class:"activity-label"},"下次反思",-1)),v("span",nC,te(be(n).daily_reflection.next_reflection),1)])):et("",!0)]),be(n).last_reflection_note?(ue(),fe("div",iC,te(be(n).last_reflection_note),1)):et("",!0)]),be(n).last_error?(ue(),fe("div",sC,[f[18]||(f[18]=v("div",{class:"error-label"},"最近错误",-1)),v("div",rC,te(be(n).last_error),1)])):et("",!0),v("div",oC,[f[22]||(f[22]=v("h4",null,"LLM 配置",-1)),v("div",aC,[v("div",lC,[f[19]||(f[19]=v("span",{class:"llm-label"},"LLM 状态",-1)),v("span",{class:pt(["llm-value",be(n).llm_enabled?"enabled":"disabled"])},te(be(n).llm_enabled?"已启用":"未启用"),3)]),be(n).preferred_provider?(ue(),fe("div",cC,[f[20]||(f[20]=v("span",{class:"llm-label"},"提供商",-1)),v("span",uC,te(be(n).preferred_provider),1)])):et("",!0),(m=be(n).available_providers)!=null&&m.length?(ue(),fe("div",fC,[f[21]||(f[21]=v("span",{class:"llm-label"},"可用提供商",-1)),v("span",dC,te(be(n).available_providers.join(", ")),1)])):et("",!0)])])])):(ue(),fe("div",hC,[...f[23]||(f[23]=[v("span",{class:"loading-text"},"加载中...",-1)])]))])}}}),mC=Cn(pC,[["__scopeId","data-v-59d141f4"]]),gC={class:"merge-chain-viewer panel"},_C={class:"header"},vC={key:0,class:"empty-placeholder"},xC={key:1,class:"loading-overlay"},yC={key:2,class:"error-message"},SC={class:"chain-info"},MC={class:"info-item"},bC={class:"info-value"},EC={class:"info-item"},wC={class:"info-value"},TC={class:"info-item"},AC={class:"info-value"},CC={key:0,class:"merge-history"},RC={class:"history-list"},PC={class:"history-time"},LC={class:"history-desc"},DC={key:4,class:"empty-placeholder"},IC=xn({__name:"MergeChainViewer",props:{memoryId:{},showClose:{type:Boolean}},emits:["close","nodeClick"],setup(t,{emit:e}){const n=t,i=e,s=Wi(),r=we(),o=we(!1),a=we(null),c=we(null);let l=null,u=null;di(()=>n.memoryId,x=>{x?d(x):(c.value=null,f())},{immediate:!0}),qn(()=>{n.memoryId&&d(n.memoryId)}),Er(()=>{u&&u.stop()});async function d(x){o.value=!0,a.value=null;try{const E=await ai.getMergeChain(x);c.value=E,s.addLog("合并链加载成功","success"),await To(),r.value&&E&&h(E)}catch(E){a.value="加载合并链失败: "+E.message,s.addLog("加载合并链失败","error")}finally{o.value=!1}}function f(){l&&l.selectAll("*").remove()}function h(x){if(!r.value)return;f();const E=r.value.clientWidth,y=280;l=_r(r.value).append("svg").attr("width",E).attr("height",y);const C=[],A=[];if(x.current&&C.push({id:x.current.id,title:x.current.title||x.current.id,type:"current"}),x.sources&&x.sources.length>0&&x.sources.forEach(U=>{C.push({id:U.id,title:U.title||U.id,type:"source"}),A.push({source:U.id,target:x.current.id,relation:"merged_to"})}),C.length===0)return;u=o_(C).force("link",r_(A).id(U=>U.id).distance(80)).force("charge",a_().strength(-200)).force("center",n_(E/2,y/2)).force("collision",s_().radius(35)),l.append("defs").append("marker").attr("id","arrowhead-merge").attr("viewBox","-0 -5 10 10").attr("refX",25).attr("refY",0).attr("orient","auto").attr("markerWidth",6).attr("markerHeight",6).append("path").attr("d","M 0,-5 L 10,0 L 0,5").attr("fill","#00ff41");const S=l.append("g").selectAll("line").data(A).enter().append("line").attr("stroke","#00ff41").attr("stroke-opacity",.6).attr("stroke-width",2).attr("marker-end","url(#arrowhead-merge)"),M=l.append("g").selectAll("g").data(C).enter().append("g").style("cursor","pointer").call(Gg().on("start",g).on("drag",_).on("end",p)).on("click",(U,D)=>{i("nodeClick",D)});M.append("circle").attr("r",U=>U.type==="current"?20:15).attr("fill",U=>U.type==="current"?"#00ff41":"rgba(0, 255, 65, 0.3)").attr("stroke","#00ff41").attr("stroke-width",2),M.append("text").attr("dy",4).attr("text-anchor","middle").attr("fill",U=>U.type==="current"?"#000":"#00ff41").attr("font-size","10px").attr("font-weight","bold").text(U=>U.title.length>6?U.title.substring(0,6)+"...":U.title),M.append("title").text(U=>`${U.title}
${U.memory_type||"未知类型"}`),u.on("tick",()=>{S.attr("x1",U=>U.source.x).attr("y1",U=>U.source.y).attr("x2",U=>U.target.x).attr("y2",U=>U.target.y),M.attr("transform",U=>`translate(${U.x},${U.y})`)})}function g(x){!x.active&&u&&u.alphaTarget(.3).restart(),x.subject.fx=x.subject.x,x.subject.fy=x.subject.y}function _(x){x.subject.fx=x.x,x.subject.fy=x.y}function p(x){!x.active&&u&&u.alphaTarget(0),x.subject.fx=null,x.subject.fy=null}function m(x){return x?new Date(x).toLocaleString("zh-CN"):"-"}return(x,E)=>{var y,C,A,L;return ue(),fe("div",gC,[v("div",_C,[E[1]||(E[1]=v("h3",null,"记忆合并链",-1)),t.showClose?(ue(),fe("button",{key:0,class:"btn-close",onClick:E[0]||(E[0]=S=>i("close"))},"×")):et("",!0)]),t.memoryId?o.value?(ue(),fe("div",xC,[...E[3]||(E[3]=[v("div",{class:"loading-spinner"},null,-1),v("p",null,"加载合并链中...",-1)])])):a.value?(ue(),fe("div",yC,[v("p",null,te(a.value),1)])):c.value?(ue(),fe(mt,{key:3},[v("div",SC,[v("div",MC,[E[4]||(E[4]=v("span",{class:"info-label"},"当前记忆",-1)),v("span",bC,te(((y=c.value.current)==null?void 0:y.title)||((C=c.value.current)==null?void 0:C.id)),1)]),v("div",EC,[E[5]||(E[5]=v("span",{class:"info-label"},"合并深度",-1)),v("span",wC,te(c.value.depth||0),1)]),v("div",TC,[E[6]||(E[6]=v("span",{class:"info-label"},"来源数量",-1)),v("span",AC,te(((A=c.value.sources)==null?void 0:A.length)||0),1)])]),v("div",{ref_key:"graphContainer",ref:r,class:"graph-container"},null,512),(L=c.value.merge_history)!=null&&L.length?(ue(),fe("div",CC,[E[7]||(E[7]=v("h4",null,"合并历史",-1)),v("div",RC,[(ue(!0),fe(mt,null,Ot(c.value.merge_history,(S,M)=>(ue(),fe("div",{key:M,class:"history-item"},[v("div",PC,te(m(S.timestamp)),1),v("div",LC,te(S.description||"合并操作"),1)]))),128))])])):et("",!0)],64)):(ue(),fe("div",DC,[...E[8]||(E[8]=[v("p",null,"暂无合并链数据",-1)])])):(ue(),fe("div",vC,[...E[2]||(E[2]=[v("p",null,"请选择一个记忆查看其合并链",-1)])]))])}}}),NC=Cn(IC,[["__scopeId","data-v-09b8e911"]]),u_=Rf("brain",()=>{const t=we(null),e=we(!1),n=we(null),i=we(null);async function s(){e.value=!0,n.value=null;try{const w=await fetch("/brain/status");if(!w.ok)throw new Error("Failed to fetch brain status");t.value=await w.json(),i.value=new Date}catch(w){n.value="获取AI大脑状态失败",console.error("Failed to fetch brain status:",w)}finally{e.value=!1}}async function r(w,T={}){e.value=!0,n.value=null;try{const V=await fetch("/brain/input",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:w,context:T})});if(!V.ok)throw new Error("Failed to process input");return await V.json()}catch(V){throw n.value="处理输入失败",console.error("Failed to process input:",V),V}finally{e.value=!1}}async function o(w,T={}){e.value=!0,n.value=null;try{const V=await fetch("/brain/retrieve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:w,context:T})});if(!V.ok)throw new Error("Failed to retrieve memory");return await V.json()}catch(V){throw n.value="检索记忆失败",console.error("Failed to retrieve memory:",V),V}finally{e.value=!1}}async function a(){e.value=!0,n.value=null;try{const w=await fetch("/brain/reflection",{method:"POST",headers:{"Content-Type":"application/json"}});if(!w.ok)throw new Error("Failed to trigger reflection");return await w.json()}catch(w){throw n.value="触发自我反思失败",console.error("Failed to trigger reflection:",w),w}finally{e.value=!1}}async function c(w){e.value=!0,n.value=null;try{const T=await fetch("/brain/hypotheses",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({context:w})});if(!T.ok)throw new Error("Failed to generate hypotheses");return(await T.json()).hypotheses}catch(T){throw n.value="生成假设失败",console.error("Failed to generate hypotheses:",T),T}finally{e.value=!1}}async function l(w){e.value=!0,n.value=null;try{const T=await fetch("/brain/hypotheses/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hypothesis:w})});if(!T.ok)throw new Error("Failed to test hypothesis");return await T.json()}catch(T){throw n.value="测试假设失败",console.error("Failed to test hypothesis:",T),T}finally{e.value=!1}}async function u(w){e.value=!0,n.value=null;try{const T=await fetch("/brain/evolve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({experiences:w})});if(!T.ok)throw new Error("Failed to evolve brain");return await T.json()}catch(T){throw n.value="进化AI大脑失败",console.error("Failed to evolve brain:",T),T}finally{e.value=!1}}function d(){var w;return(w=t.value)==null?void 0:w.self_awareness}function f(){var w;return(w=t.value)==null?void 0:w.active_cognition}function h(){var w;return(w=t.value)==null?void 0:w.value_system}function g(){var w;return(w=t.value)==null?void 0:w.dynamic_memory}function _(){var w;return(w=t.value)==null?void 0:w.metacognition}function p(){if(!t.value)return[];const w=[],T=new Date;for(let V=6;V>=0;V--){const X=new Date(T);X.setDate(X.getDate()-V),w.push({date:X.toISOString().split("T")[0],success_rate:.6+Math.random()*.35})}return w}function m(){var w,T,V;return((V=(T=(w=t.value)==null?void 0:w.self_awareness)==null?void 0:T.capabilities)==null?void 0:V.slice(0,6))||[]}function x(){var w,T,V;return((V=(T=(w=t.value)==null?void 0:w.self_awareness)==null?void 0:T.goals)==null?void 0:V.slice(0,4))||[]}function E(){var T,V;const w=((V=(T=t.value)==null?void 0:T.value_system)==null?void 0:V.weights)||{};return{novelty:w.novelty||.25,utility:w.utility||.25,emotional:w.emotional||.25,frequency:w.frequency||.25}}function y(w){return(w*100).toFixed(0)+"%"}function C(w){return w>.7?"high":w>.4?"medium":"low"}function A(w){return w>.7?"high":w>.4?"medium":"low"}function L(w){return w>.8?"high":w>.5?"medium":"low"}function S(w){if(!w)return"N/A";const T=w.total_score||0;return T>=.75?"高价值":T>=.5?"中等价值":"低价值"}function M(w){return{accuracy:"准确性",efficiency:"效率",creativity:"创造性",empathy:"同理心",learning:"学习能力",safety:"安全性",curiosity:"好奇心",reliability:"可靠性",novelty:"新颖性",utility:"实用性",emotional:"情感强度",frequency:"使用频率"}[w]||w}function U(w){return w>.05?"up":w<-.05?"down":"stable"}function D(w){const T=U(w);return T==="up"?"📈":T==="down"?"📉":"➡️"}function N(){n.value=null}async function z(){try{const w=await fetch("/brain/export");if(!w.ok)throw new Error("Export failed");return await w.json()}catch(w){throw n.value="导出大脑状态失败",console.error("Export failed:",w),w}}async function G(w){try{const T=await fetch("/brain/import",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)});if(!T.ok)throw new Error("Import failed");return await T.json()}catch(T){throw n.value="导入大脑状态失败",console.error("Import failed:",T),T}}async function k(){try{const w=await fetch("/brain/compatibility");if(!w.ok)throw new Error("Compatibility check failed");return await w.json()}catch(w){throw n.value="兼容性检查失败",console.error("Compatibility check failed:",w),w}}return{brainStatus:t,isLoading:e,error:n,lastUpdate:i,fetchBrainStatus:s,processInput:r,retrieveMemory:o,triggerSelfReflection:a,generateHypotheses:c,testHypothesis:l,evolveBrain:u,getSelfAwareness:d,getCognitionStatus:f,getValueSystem:h,getDynamicMemory:g,getMetacognition:_,getLearningTrends:p,getDisplayedCapabilities:m,getTopGoals:x,getValueChart:E,formatPercent:y,getLoadClass:C,getFocusClass:A,getConfidenceClass:L,formatValueCategory:S,formatValueName:M,getTrendClass:U,getTrendIcon:D,clearError:N,exportBrain:z,importBrain:G,checkCompatibility:k}}),UC={class:"brain-status panel"},FC={class:"awareness-section"},OC={class:"awareness-grid"},BC={class:"awareness-card"},kC={class:"card-content"},zC={class:"card-value"},VC={class:"card-version"},HC={class:"awareness-card"},GC={class:"card-content"},WC={class:"capabilities-list"},$C={class:"awareness-card"},XC={class:"card-content"},qC={key:0,class:"goals-list"},YC={class:"goal-progress"},jC={class:"goal-name"},KC=["value"],ZC={key:1,class:"no-goals"},JC={class:"awareness-card"},QC={class:"card-content"},eR={class:"evolution-info"},tR={class:"evolution-generation"},nR={class:"total-experiences"},iR={class:"cognition-section"},sR={class:"cognition-grid"},rR={class:"cognition-card"},oR={class:"card-content"},aR={class:"cognition-stats"},lR={class:"stat-row"},cR={class:"stat-value"},uR={class:"stat-row"},fR={class:"stat-value"},dR={class:"cognition-card"},hR={class:"card-content"},pR={class:"cognition-stats"},mR={class:"stat-row"},gR={class:"stat-value"},_R={class:"stat-row"},vR={class:"stat-value"},xR={class:"value-section"},yR={class:"value-stats"},SR={class:"value-chart"},MR={class:"chart-item"},bR={class:"chart-item"},ER={class:"chart-item"},wR={class:"chart-item"},TR={class:"memory-section"},AR={class:"memory-stats"},CR={class:"memory-pie"},RR={class:"metacognition-section"},PR={class:"metacognition-stats"},LR={class:"meta-grid"},DR={class:"meta-item"},IR={class:"meta-item"},NR={class:"meta-item"},UR={key:0,class:"detected-biases"},FR={class:"biases-list"},OR={class:"status-footer"},BR={class:"cycle-info"},kR={class:"cycle-count"},zR={class:"last-update"},VR=["disabled"],HR=xn({__name:"BrainStatus",setup(t){const e=u_(),{isLoading:n,lastUpdate:i}=wr(e),s=Et(()=>e.getValueChart()),r=Et(()=>i.value?i.value.toLocaleTimeString("zh-CN"):"从未更新"),o=Et(()=>{const l=e.getMetacognition();return(l==null?void 0:l.detected_biases)||[]});let a=null;qn(()=>{e.fetchBrainStatus(),a=window.setInterval(()=>{e.fetchBrainStatus()},5e3)}),bf(()=>{a&&clearInterval(a)});function c(){e.fetchBrainStatus()}return(l,u)=>{var d,f,h,g,_,p,m,x,E,y,C,A,L,S,M,U,D,N,z,G,k,w,T,V,X,re;return ue(),fe("div",UC,[u[30]||(u[30]=v("h3",null,"🧠 AI大脑状态",-1)),v("div",FC,[u[8]||(u[8]=v("h4",null,"自我意识",-1)),v("div",OC,[v("div",BC,[u[1]||(u[1]=v("div",{class:"card-icon"},"🤖",-1)),v("div",kC,[u[0]||(u[0]=v("div",{class:"card-title"},"身份认知",-1)),v("div",zC,te(((d=be(e).getSelfAwareness())==null?void 0:d.identity)||"AI Brain"),1),v("div",VC,"v"+te(((f=be(e).getSelfAwareness())==null?void 0:f.version)||"1.0.0"),1)])]),v("div",HC,[u[3]||(u[3]=v("div",{class:"card-icon"},"⚡",-1)),v("div",GC,[u[2]||(u[2]=v("div",{class:"card-title"},"核心能力",-1)),v("div",WC,[(ue(!0),fe(mt,null,Ot(be(e).getDisplayedCapabilities(),ce=>(ue(),fe("div",{key:ce},te(ce),1))),128))])])]),v("div",$C,[u[5]||(u[5]=v("div",{class:"card-icon"},"🎯",-1)),v("div",XC,[u[4]||(u[4]=v("div",{class:"card-title"},"当前目标",-1)),be(e).getTopGoals().length>0?(ue(),fe("div",qC,[(ue(!0),fe(mt,null,Ot(be(e).getTopGoals(),ce=>(ue(),fe("div",{key:ce.goal_id},[v("div",YC,[v("span",jC,te(ce.description),1),v("progress",{value:ce.progress*100,max:"100"},null,8,KC)])]))),128))])):(ue(),fe("div",ZC,"暂无活跃目标"))])]),v("div",JC,[u[7]||(u[7]=v("div",{class:"card-icon"},"💎",-1)),v("div",QC,[u[6]||(u[6]=v("div",{class:"card-title"},"进化状态",-1)),v("div",eR,[v("div",tR,"第 "+te(((h=be(e).getSelfAwareness())==null?void 0:h.evolution_generation)||0)+" 代",1),v("div",nR,te(((g=be(e).getSelfAwareness())==null?void 0:g.total_experiences)||0)+" 次经验",1)])])])])]),v("div",iR,[u[17]||(u[17]=v("h4",null,"主动认知",-1)),v("div",sR,[v("div",rR,[u[12]||(u[12]=v("div",{class:"card-icon"},"👁️",-1)),v("div",oR,[u[11]||(u[11]=v("div",{class:"card-title"},"注意力系统",-1)),v("div",aR,[v("div",lR,[u[9]||(u[9]=v("span",{class:"stat-label"},"阈值",-1)),v("span",cR,te(((p=(_=be(e).getCognitionStatus())==null?void 0:_.attention_threshold)==null?void 0:p.toFixed(2))||"N/A"),1)]),v("div",uR,[u[10]||(u[10]=v("span",{class:"stat-label"},"待处理问题",-1)),v("span",fR,te(((m=be(e).getCognitionStatus())==null?void 0:m.pending_questions)||0),1)])])])]),v("div",dR,[u[16]||(u[16]=v("div",{class:"card-icon"},"🔍",-1)),v("div",hR,[u[15]||(u[15]=v("div",{class:"card-title"},"好奇心引擎",-1)),v("div",pR,[v("div",mR,[u[13]||(u[13]=v("span",{class:"stat-label"},"好奇心水平",-1)),v("span",gR,te(be(e).formatPercent(((x=be(e).getCognitionStatus())==null?void 0:x.curiosity_level)||0)),1)]),v("div",_R,[u[14]||(u[14]=v("span",{class:"stat-label"},"待验证假设",-1)),v("span",vR,te(((E=be(e).getCognitionStatus())==null?void 0:E.pending_hypotheses)||0),1)])])])])])]),v("div",xR,[u[22]||(u[22]=v("h4",null,"价值判断系统",-1)),v("div",yR,[v("div",SR,[v("div",MR,[v("div",{class:"chart-bar",style:zn({width:s.value.novelty*100+"%"})},null,4),u[18]||(u[18]=v("div",{class:"chart-label"},"新颖性",-1))]),v("div",bR,[v("div",{class:"chart-bar",style:zn({width:s.value.utility*100+"%"})},null,4),u[19]||(u[19]=v("div",{class:"chart-label"},"实用性",-1))]),v("div",ER,[v("div",{class:"chart-bar",style:zn({width:s.value.emotional*100+"%"})},null,4),u[20]||(u[20]=v("div",{class:"chart-label"},"情感强度",-1))]),v("div",wR,[v("div",{class:"chart-bar",style:zn({width:s.value.frequency*100+"%"})},null,4),u[21]||(u[21]=v("div",{class:"chart-label"},"使用频率",-1))])])])]),v("div",TR,[u[24]||(u[24]=v("h4",null,"动态记忆",-1)),v("div",AR,[v("div",CR,[v("div",{class:"pie-segment active",style:zn({flex:((y=be(e).getDynamicMemory())==null?void 0:y.active_memories)||0})},null,4),v("div",{class:"pie-segment consolidated",style:zn({flex:((C=be(e).getDynamicMemory())==null?void 0:C.consolidated_memories)||0})},null,4),v("div",{class:"pie-segment decaying",style:zn({flex:((A=be(e).getDynamicMemory())==null?void 0:A.decaying_memories)||0})},null,4),v("div",{class:"pie-segment forgotten",style:zn({flex:((L=be(e).getDynamicMemory())==null?void 0:L.forgotten_memories)||0})},null,4),u[23]||(u[23]=Qm('<div class="pie-legend" data-v-50b29f8a><div class="legend-item active" data-v-50b29f8a></div> 活跃 <div class="legend-item consolidated" data-v-50b29f8a></div> 巩固 <div class="legend-item decaying" data-v-50b29f8a></div> 衰退 <div class="legend-item forgotten" data-v-50b29f8a></div> 遗忘 </div>',1))])])]),v("div",RR,[u[29]||(u[29]=v("h4",null,"元认知",-1)),v("div",PR,[v("div",LR,[v("div",DR,[u[25]||(u[25]=v("div",{class:"meta-label"},"认知负荷",-1)),v("div",{class:pt(["meta-value",be(e).getLoadClass(((M=(S=be(e).getMetacognition())==null?void 0:S.current_state)==null?void 0:M.cognitive_load)||0)])},te(be(e).formatPercent(((D=(U=be(e).getMetacognition())==null?void 0:U.current_state)==null?void 0:D.cognitive_load)||0)),3)]),v("div",IR,[u[26]||(u[26]=v("div",{class:"meta-label"},"专注度",-1)),v("div",{class:pt(["meta-value",be(e).getFocusClass(((z=(N=be(e).getMetacognition())==null?void 0:N.current_state)==null?void 0:z.focus_level)||0)])},te(be(e).formatPercent(((k=(G=be(e).getMetacognition())==null?void 0:G.current_state)==null?void 0:k.focus_level)||0)),3)]),v("div",NR,[u[27]||(u[27]=v("div",{class:"meta-label"},"自信度",-1)),v("div",{class:pt(["meta-value",be(e).getConfidenceClass(((T=(w=be(e).getMetacognition())==null?void 0:w.current_state)==null?void 0:T.confidence_level)||0)])},te(be(e).formatPercent(((X=(V=be(e).getMetacognition())==null?void 0:V.current_state)==null?void 0:X.confidence_level)||0)),3)])]),o.value.length>0?(ue(),fe("div",UR,[u[28]||(u[28]=v("h5",null,"检测到的认知偏差",-1)),v("div",FR,[(ue(!0),fe(mt,null,Ot(o.value,ce=>(ue(),fe("div",{key:ce,class:"bias-item"},te(ce),1))),128))])])):et("",!0)])]),v("div",OR,[v("div",BR,[v("span",kR,"总周期: "+te(((re=be(e).brainStatus)==null?void 0:re.total_cycles)||0),1),v("span",zR,"最后更新: "+te(r.value),1)]),v("button",{onClick:c,disabled:be(n),class:"refresh-btn"},te(be(n)?"刷新中...":"刷新状态"),9,VR)])])}}}),GR=Cn(HR,[["__scopeId","data-v-50b29f8a"]]),WR={class:"brain-interaction panel"},$R={class:"interaction-section"},XR={class:"input-form"},qR={class:"form-actions"},YR=["disabled"],jR={key:0,class:"result-display"},KR={class:"result-content"},ZR={class:"result-section"},JR={class:"result-value"},QR={class:"result-section"},eP={class:"result-value"},tP={key:0,class:"result-section"},nP={class:"result-value"},iP={key:1,class:"result-actions"},sP={class:"actions-tags"},rP={key:2,class:"result-questions"},oP={class:"questions-list"},aP={class:"interaction-section"},lP={class:"retrieval-form"},cP=["disabled"],uP={key:0,class:"result-display"},fP={class:"results-list"},dP={class:"memory-content"},hP={class:"memory-meta"},pP={class:"meta-relevance"},mP={key:0,class:"meta-type"},gP={key:1,class:"result-display empty"},_P={class:"interaction-section"},vP={class:"reflection-actions"},xP=["disabled"],yP={key:0,class:"result-display"},SP={class:"reflection-summary"},MP={class:"summary-item"},bP={class:"summary-value"},EP={class:"summary-item"},wP={class:"summary-value"},TP={class:"summary-item"},AP={key:0,class:"summary-item"},CP={class:"recommendations-list"},RP={class:"interaction-section"},PP={class:"hypothesis-form"},LP=["disabled"],DP={key:0,class:"hypotheses-list"},IP={class:"hypothesis-content"},NP={class:"hypothesis-description"},UP={class:"hypothesis-confidence"},FP={class:"hypothesis-actions"},OP=["onClick","disabled"],BP={key:1,class:"empty-message"},kP=xn({__name:"BrainInteraction",setup(t){const e=u_(),n=we(""),i=we(""),s=we(!1),r=we(!1),o=we(!1),a=we(!1),c=we(!1),l=we(null),u=we(null),d=we(null),f=we([]),h=we(!1);async function g(){if(n.value.trim()){s.value=!0,l.value=null;try{const S=await e.processInput(n.value);l.value=S}catch(S){console.error("Failed to process input:",S),alert("处理输入失败: "+S.message)}finally{s.value=!1}}}function _(){n.value="",l.value=null}async function p(){if(i.value.trim()){r.value=!0,u.value=null;try{const S=await e.retrieveMemory(i.value);u.value=S}catch(S){console.error("Failed to retrieve memory:",S),alert("检索记忆失败: "+S.message)}finally{r.value=!1}}}async function m(){o.value=!0,d.value=null;try{const S=await e.triggerSelfReflection();d.value=S,setTimeout(()=>e.fetchBrainStatus(),2e3)}catch(S){console.error("Failed to trigger reflection:",S),alert("触发自我反思失败: "+S.message)}finally{o.value=!1}}async function x(){const S="基于当前记忆系统的分析";a.value=!0,h.value=!0,f.value=[];try{const M=await e.generateHypotheses(S);f.value=M}catch(M){console.error("Failed to generate hypotheses:",M),alert("生成假设失败: "+M.message)}finally{a.value=!1}}async function E(S){c.value=!0;try{await e.testHypothesis(S),alert("假设测试已启动，请稍后查看结果"),S.status="testing"}catch(M){console.error("Failed to test hypothesis:",M),alert("测试假设失败: "+M.message)}finally{c.value=!1}}function y(S){return e.formatValueCategory(S)}function C(S){return{memory_created:"创建记忆",associations_created:"创建联想",content_filtered:"内容过滤",questions_generated:"生成问题"}[S]||S}function A(S){return{storage:"存储",thinking:"思维",skill:"技能"}[S]||S}function L(S){return{pending:"待验证",testing:"测试中",confirmed:"已确认",rejected:"已拒绝"}[S]||S}return(S,M)=>{var U,D,N,z,G,k,w,T,V,X;return ue(),fe("div",WR,[M[18]||(M[18]=v("h3",null,"🧠 AI大脑交互",-1)),v("div",$R,[M[8]||(M[8]=v("h4",null,"认知处理",-1)),v("div",XR,[Dt(v("textarea",{"onUpdate:modelValue":M[0]||(M[0]=re=>n.value=re),placeholder:"输入要让AI大脑处理的内容...",class:"brain-input",rows:"4"},null,512),[[Qt,n.value]]),v("div",qR,[v("button",{onClick:g,disabled:s.value},te(s.value?"处理中...":"处理输入"),9,YR),v("button",{onClick:_,class:"secondary"},"清除")])]),l.value?(ue(),fe("div",jR,[M[7]||(M[7]=v("h5",null,"处理结果",-1)),v("div",KR,[v("div",ZR,[M[2]||(M[2]=v("span",{class:"result-label"},"注意力分数:",-1)),v("span",JR,te((U=l.value.attention_score)==null?void 0:U.toFixed(2)),1)]),v("div",QR,[M[3]||(M[3]=v("span",{class:"result-label"},"价值评估:",-1)),v("span",eP,te(y(l.value.value_assessment)),1)]),((D=l.value.memories_created)==null?void 0:D.length)>0?(ue(),fe("div",tP,[M[4]||(M[4]=v("span",{class:"result-label"},"创建记忆:",-1)),v("span",nP,te(l.value.memories_created.length)+" 条",1)])):et("",!0),(N=l.value.actions_taken)!=null&&N.length?(ue(),fe("div",iP,[M[5]||(M[5]=v("span",{class:"actions-label"},"执行操作:",-1)),v("div",sP,[(ue(!0),fe(mt,null,Ot(l.value.actions_taken,re=>(ue(),fe("span",{key:re,class:"action-tag"},te(C(re)),1))),128))])])):et("",!0),l.value.questions_generated&&l.value.questions_generated.length>0?(ue(),fe("div",rP,[M[6]||(M[6]=v("span",{class:"questions-label"},"生成问题:",-1)),v("div",oP,[(ue(!0),fe(mt,null,Ot(l.value.questions_generated,(re,ce)=>(ue(),fe("div",{key:ce,class:"question-item"},te(re),1))),128))])])):et("",!0)])])):et("",!0)]),v("div",aP,[M[10]||(M[10]=v("h4",null,"智能检索",-1)),v("div",lP,[Dt(v("input",{"onUpdate:modelValue":M[1]||(M[1]=re=>i.value=re),placeholder:"输入检索查询...",class:"retrieval-input",onKeyup:Cf(p,["enter"])},null,544),[[Qt,i.value]]),v("button",{onClick:p,disabled:r.value},te(r.value?"检索中...":"检索记忆"),9,cP)]),u.value&&u.value.memories&&u.value.memories.length>0?(ue(),fe("div",uP,[v("h5",null,"检索结果 (置信度: "+te(((z=u.value.confidence)==null?void 0:z.toFixed(2))||"N/A")+")",1),v("div",fP,[(ue(!0),fe(mt,null,Ot(u.value.memories,re=>{var ce;return ue(),fe("div",{key:re.memory_id,class:"memory-item"},[v("div",dP,te(re.content||"记忆内容..."),1),v("div",hP,[v("span",pP,"相关度: "+te((ce=re.relevance)==null?void 0:ce.toFixed(2)),1),re.memory_type?(ue(),fe("span",mP,"类型: "+te(A(re.memory_type)),1)):et("",!0)])])}),128))])])):u.value?(ue(),fe("div",gP,[...M[9]||(M[9]=[v("h5",null,"检索结果",-1),v("p",{class:"empty-message"},"未找到相关记忆",-1)])])):et("",!0)]),v("div",_P,[M[16]||(M[16]=v("h4",null,"自我反思",-1)),v("div",vP,[v("button",{onClick:m,disabled:o.value},te(o.value?"反思中...":"触发自我反思"),9,xP)]),d.value?(ue(),fe("div",yP,[M[15]||(M[15]=v("h5",null,"反思结果",-1)),v("div",SP,[v("div",MP,[M[11]||(M[11]=v("span",{class:"summary-label"},"记忆总数:",-1)),v("span",bP,te(((G=d.value.memory_state)==null?void 0:G.total_memories)||"N/A"),1)]),v("div",EP,[M[12]||(M[12]=v("span",{class:"summary-label"},"学习效率:",-1)),v("span",wP,te(((w=(k=d.value.learning_efficiency)==null?void 0:k.efficiency_score)==null?void 0:w.toFixed(2))||"N/A"),1)]),v("div",TP,[M[13]||(M[13]=v("span",{class:"summary-label"},"认知偏差:",-1)),v("span",{class:pt(["summary-value",{"has-biases":((T=d.value.detected_biases)==null?void 0:T.length)>0}])},te(((V=d.value.detected_biases)==null?void 0:V.length)||0)+" 个 ",3)]),((X=d.value.recommendations)==null?void 0:X.length)>0?(ue(),fe("div",AP,[M[14]||(M[14]=v("span",{class:"summary-label"},"建议:",-1)),v("div",CP,[(ue(!0),fe(mt,null,Ot(d.value.recommendations.slice(0,3),(re,ce)=>(ue(),fe("div",{key:ce,class:"recommendation-item"},te(re),1))),128))])])):et("",!0)])])):et("",!0)]),v("div",RP,[M[17]||(M[17]=v("h4",null,"假设推理",-1)),v("div",PP,[v("button",{onClick:x,disabled:a.value}," 生成假设 ",8,LP),f.value.length>0?(ue(),fe("div",DP,[(ue(!0),fe(mt,null,Ot(f.value,re=>{var ce,pe;return ue(),fe("div",{key:re.hypothesis_id,class:"hypothesis-item"},[v("div",IP,[v("span",NP,te(re.description),1),v("span",UP," 置信度: "+te((ce=re.confidence)==null?void 0:ce.toFixed(2)),1),v("span",{class:pt(["hypothesis-status",(pe=re.status)==null?void 0:pe.toLowerCase()])},te(L(re.status)),3)]),v("div",FP,[v("button",{onClick:Ge=>E(re),size:"small",disabled:c.value}," 测试 ",8,OP)])])}),128))])):h.value?(ue(),fe("div",BP," 暂无假设 ")):et("",!0)])])])}}}),zP=Cn(kP,[["__scopeId","data-v-7a4e23dd"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wf="183",VP=0,Hh=1,HP=2,Da=1,GP=2,Yr=3,as=0,vn=1,oi=2,Ni=0,fr=1,_u=2,Gh=3,Wh=4,WP=5,ws=100,$P=101,XP=102,qP=103,YP=104,jP=200,KP=201,ZP=202,JP=203,vu=204,xu=205,QP=206,e3=207,t3=208,n3=209,i3=210,s3=211,r3=212,o3=213,a3=214,yu=0,Su=1,Mu=2,xr=3,bu=4,Eu=5,wu=6,Tu=7,f_=0,l3=1,c3=2,pi=0,d_=1,h_=2,p_=3,m_=4,g_=5,__=6,v_=7,x_=300,ks=301,yr=302,uc=303,fc=304,Ol=306,Au=1e3,Ii=1001,Cu=1002,Wt=1003,u3=1004,Ko=1005,en=1006,dc=1007,Ps=1008,Nn=1009,y_=1010,S_=1011,yo=1012,$f=1013,_i=1014,li=1015,zi=1016,Xf=1017,qf=1018,So=1020,M_=35902,b_=35899,E_=1021,w_=1022,Gn=1023,Vi=1026,Ls=1027,T_=1028,Yf=1029,Sr=1030,jf=1031,Kf=1033,Ia=33776,Na=33777,Ua=33778,Fa=33779,Ru=35840,Pu=35841,Lu=35842,Du=35843,Iu=36196,Nu=37492,Uu=37496,Fu=37488,Ou=37489,Bu=37490,ku=37491,zu=37808,Vu=37809,Hu=37810,Gu=37811,Wu=37812,$u=37813,Xu=37814,qu=37815,Yu=37816,ju=37817,Ku=37818,Zu=37819,Ju=37820,Qu=37821,ef=36492,tf=36494,nf=36495,sf=36283,rf=36284,of=36285,af=36286,f3=3200,d3=0,h3=1,is="",Dn="srgb",Mr="srgb-linear",il="linear",_t="srgb",Ws=7680,$h=519,p3=512,m3=513,g3=514,Zf=515,_3=516,v3=517,Jf=518,x3=519,Xh=35044,qh="300 es",ci=2e3,sl=2001;function y3(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function rl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function S3(){const t=rl("canvas");return t.style.display="block",t}const Yh={};function jh(...t){const e="THREE."+t.shift();console.log(e,...t)}function A_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Xe(...t){t=A_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ct(...t){t=A_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ol(...t){const e=t.join(" ");e in Yh||(Yh[e]=!0,Xe(...t))}function M3(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const b3={[yu]:Su,[Mu]:wu,[bu]:Tu,[xr]:Eu,[Su]:yu,[wu]:Mu,[Tu]:bu,[Eu]:xr};class Ar{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=Math.PI/180,lf=180/Math.PI;function Uo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function it(t,e,n){return Math.max(e,Math.min(n,t))}function E3(t,e){return(t%e+e)%e}function pc(t,e,n){return(1-n)*t+n*e}function Fr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cr{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||c!==f||l!==h||u!==g){let p=c*f+l*h+u*g+d*_;p<0&&(f=-f,h=-h,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){const x=Math.acos(p),E=Math.sin(x);m=Math.sin(m*x)/E,a=Math.sin(a*x)/E,c=c*m+f*a,l=l*m+h*a,u=u*m+g*a,d=d*m+_*a}else{c=c*m+f*a,l=l*m+h*a,u=u*m+g*a,d=d*m+_*a;const x=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=x,l*=x,u*=x,d*=x}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return e[n]=a*g+u*d+c*h-l*f,e[n+1]=c*g+u*f+l*d-a*h,e[n+2]=l*g+u*h+a*f-c*d,e[n+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),f=c(i/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-n;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+o*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mc=new $,Kh=new Cr;class Qe{constructor(e,n,i,s,r,o,a,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,c,l)}set(e,n,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=s[0],p=s[3],m=s[6],x=s[1],E=s[4],y=s[7],C=s[2],A=s[5],L=s[8];return r[0]=o*_+a*x+c*C,r[3]=o*p+a*E+c*A,r[6]=o*m+a*y+c*L,r[1]=l*_+u*x+d*C,r[4]=l*p+u*E+d*A,r[7]=l*m+u*y+d*L,r[2]=f*_+h*x+g*C,r[5]=f*p+h*E+g*A,r[8]=f*m+h*y+g*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*r,h=l*r-o*c,g=n*d+i*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*n-s*c)*_,e[5]=(s*r-a*n)*_,e[6]=h*_,e[7]=(i*c-l*n)*_,e[8]=(o*n-i*r)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(gc.makeScale(e,n)),this}rotate(e){return this.premultiply(gc.makeRotation(-e)),this}translate(e,n){return this.premultiply(gc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gc=new Qe,Zh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w3(){const t={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?il:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ol("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ol("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Mr]:{primaries:e,whitePoint:i,transfer:il,toXYZ:Zh,fromXYZ:Jh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Zh,fromXYZ:Jh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),t}const ot=w3();function Ui(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function dr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $s;class T3{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$s===void 0&&($s=rl("canvas")),$s.width=e.width,$s.height=e.height;const s=$s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=$s}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=rl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ui(n[i]/255)*255):n[i]=Ui(n[i]);return{data:n,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A3=0;class Qf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A3++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_c(s[o].image)):r.push(_c(s[o]))}else r=_c(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function _c(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?T3.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let C3=0;const vc=new $;class cn extends Ar{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Ii,s=Ii,r=en,o=Ps,a=Gn,c=Nn,l=cn.DEFAULT_ANISOTROPY,u=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C3++}),this.uuid=Uo(),this.name="",this.source=new Qf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vc).x}get height(){return this.source.getSize(vc).y}get depth(){return this.source.getSize(vc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Xe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Xe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==x_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Au:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case Cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Au:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case Cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=x_;cn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,s=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(l+1)/2,y=(h+1)/2,C=(m+1)/2,A=(u+f)/4,L=(d+_)/4,S=(g+p)/4;return E>y&&E>C?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=L/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=S/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=L/r,s=S/r),this.set(i,s,r,n),this}let x=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-_)/x,this.z=(f-u)/x,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this.w=it(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this.w=it(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R3 extends Ar{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new cn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Qf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends R3{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class C_ extends cn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P3 extends cn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ct{constructor(e,n,i,s,r,o,a,c,l,u,d,f,h,g,_,p){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,c,l,u,d,f,h,g,_,p)}set(e,n,i,s,r,o,a,c,l,u,d,f,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,_=a*d;n[0]=c*u,n[4]=-c*d,n[8]=l,n[1]=h+g*l,n[5]=f-_*l,n[9]=-a*c,n[2]=_-f*l,n[6]=g+h*l,n[10]=o*c}else if(e.order==="YXZ"){const f=c*u,h=c*d,g=l*u,_=l*d;n[0]=f+_*a,n[4]=g*a-h,n[8]=o*l,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=_+f*a,n[10]=o*c}else if(e.order==="ZXY"){const f=c*u,h=c*d,g=l*u,_=l*d;n[0]=f-_*a,n[4]=-o*d,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,_=a*d;n[0]=c*u,n[4]=g*l-h,n[8]=f*l+_,n[1]=c*d,n[5]=_*l+f,n[9]=h*l-g,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const f=o*c,h=o*l,g=a*c,_=a*l;n[0]=c*u,n[4]=_-f*d,n[8]=g*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=h*d+g,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*c,h=o*l,g=a*c,_=a*l;n[0]=c*u,n[4]=-d,n[8]=l*u,n[1]=f*d+_,n[5]=o*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=a*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L3,e,D3)}lookAt(e,n,i){const s=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Yi.crossVectors(i,Sn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Yi.crossVectors(i,Sn)),Yi.normalize(),Zo.crossVectors(Sn,Yi),s[0]=Yi.x,s[4]=Zo.x,s[8]=Sn.x,s[1]=Yi.y,s[5]=Zo.y,s[9]=Sn.y,s[2]=Yi.z,s[6]=Zo.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],p=i[10],m=i[14],x=i[3],E=i[7],y=i[11],C=i[15],A=s[0],L=s[4],S=s[8],M=s[12],U=s[1],D=s[5],N=s[9],z=s[13],G=s[2],k=s[6],w=s[10],T=s[14],V=s[3],X=s[7],re=s[11],ce=s[15];return r[0]=o*A+a*U+c*G+l*V,r[4]=o*L+a*D+c*k+l*X,r[8]=o*S+a*N+c*w+l*re,r[12]=o*M+a*z+c*T+l*ce,r[1]=u*A+d*U+f*G+h*V,r[5]=u*L+d*D+f*k+h*X,r[9]=u*S+d*N+f*w+h*re,r[13]=u*M+d*z+f*T+h*ce,r[2]=g*A+_*U+p*G+m*V,r[6]=g*L+_*D+p*k+m*X,r[10]=g*S+_*N+p*w+m*re,r[14]=g*M+_*z+p*T+m*ce,r[3]=x*A+E*U+y*G+C*V,r[7]=x*L+E*D+y*k+C*X,r[11]=x*S+E*N+y*w+C*re,r[15]=x*M+E*z+y*T+C*ce,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15],x=c*h-l*f,E=a*h-l*d,y=a*f-c*d,C=o*h-l*u,A=o*f-c*u,L=o*d-a*u;return n*(_*x-p*E+m*y)-i*(g*x-p*C+m*A)+s*(g*E-_*C+m*L)-r*(g*y-_*A+p*L)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],x=n*a-i*o,E=n*c-s*o,y=n*l-r*o,C=i*c-s*a,A=i*l-r*a,L=s*l-r*c,S=u*_-d*g,M=u*p-f*g,U=u*m-h*g,D=d*p-f*_,N=d*m-h*_,z=f*m-h*p,G=x*z-E*N+y*D+C*U-A*M+L*S;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/G;return e[0]=(a*z-c*N+l*D)*k,e[1]=(s*N-i*z-r*D)*k,e[2]=(_*L-p*A+m*C)*k,e[3]=(f*A-d*L-h*C)*k,e[4]=(c*U-o*z-l*M)*k,e[5]=(n*z-s*U+r*M)*k,e[6]=(p*y-g*L-m*E)*k,e[7]=(u*L-f*y+h*E)*k,e[8]=(o*N-a*U+l*S)*k,e[9]=(i*U-n*N-r*S)*k,e[10]=(g*A-_*y+m*x)*k,e[11]=(d*y-u*A-h*x)*k,e[12]=(a*M-o*D-c*S)*k,e[13]=(n*D-i*M+s*S)*k,e[14]=(_*E-g*C-p*x)*k,e[15]=(u*C-d*E+f*x)*k,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,u=o+o,d=a+a,f=r*l,h=r*u,g=r*d,_=o*u,p=o*d,m=a*d,x=c*l,E=c*u,y=c*d,C=i.x,A=i.y,L=i.z;return s[0]=(1-(_+m))*C,s[1]=(h+y)*C,s[2]=(g-E)*C,s[3]=0,s[4]=(h-y)*A,s[5]=(1-(f+m))*A,s[6]=(p+x)*A,s[7]=0,s[8]=(g+E)*L,s[9]=(p-x)*L,s[10]=(1-(f+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Xs.set(s[0],s[1],s[2]).length();const a=Xs.set(s[4],s[5],s[6]).length(),c=Xs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),On.copy(this);const l=1/o,u=1/a,d=1/c;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,n.setFromRotationMatrix(On),i.x=o,i.y=a,i.z=c,this}makePerspective(e,n,i,s,r,o,a=ci,c=!1){const l=this.elements,u=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===ci)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===sl)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=ci,c=!1){const l=this.elements,u=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),h=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===ci)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===sl)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xs=new $,On=new Ct,L3=new $(0,0,0),D3=new $(1,1,1),Yi=new $,Zo=new $,Sn=new $,Qh=new Ct,ep=new Cr;class Hi{constructor(e=0,n=0,i=0,s=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ep.setFromEuler(this),this.setFromQuaternion(ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class R_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I3=0;const tp=new $,qs=new Cr,Ei=new Ct,Jo=new $,Or=new $,N3=new $,U3=new Cr,np=new $(1,0,0),ip=new $(0,1,0),sp=new $(0,0,1),rp={type:"added"},F3={type:"removed"},Ys={type:"childadded",child:null},xc={type:"childremoved",child:null};class un extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I3++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new $,n=new Hi,i=new Cr,s=new $(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Qe}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qs.setFromAxisAngle(e,n),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,n){return qs.setFromAxisAngle(e,n),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(np,e)}rotateY(e){return this.rotateOnAxis(ip,e)}rotateZ(e){return this.rotateOnAxis(sp,e)}translateOnAxis(e,n){return tp.copy(e).applyQuaternion(this.quaternion),this.position.add(tp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(np,e)}translateY(e){return this.translateOnAxis(ip,e)}translateZ(e){return this.translateOnAxis(sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Jo.copy(e):Jo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Or,Jo,this.up):Ei.lookAt(Jo,Or,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(Ei),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rp),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(F3),xc.child=e,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rp),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,N3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,U3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}un.DEFAULT_UP=new $(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jr extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O3={type:"move"};class yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O3)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new jr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const P_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Sc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ot.workingColorSpace){if(e=E3(e,1),n=it(n,0,1),i=it(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Sc(o,r,e+1/3),this.g=Sc(o,r,e),this.b=Sc(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,n=Dn){function i(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const i=P_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return ot.workingToColorSpace(qt.copy(this),e),Math.round(it(qt.r*255,0,255))*65536+Math.round(it(qt.g*255,0,255))*256+Math.round(it(qt.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.workingToColorSpace(qt.copy(this),n);const i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=ot.workingColorSpace){return ot.workingToColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Dn){ot.workingToColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,s=qt.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(Qo);const i=pc(ji.h,Qo.h,n),s=pc(ji.s,Qo.s,n),r=pc(ji.l,Qo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new rt;rt.NAMES=P_;class B3 extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Bn=new $,wi=new $,Mc=new $,Ti=new $,js=new $,Ks=new $,op=new $,bc=new $,Ec=new $,wc=new $,Tc=new It,Ac=new It,Cc=new It;class Hn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Bn.subVectors(e,n),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Bn.subVectors(s,n),wi.subVectors(i,n),Mc.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(wi),c=Bn.dot(Mc),l=wi.dot(wi),u=wi.dot(Mc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-h-g,g,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,s,r,o,a,c){return this.getBarycoord(e,n,i,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static getInterpolatedAttribute(e,n,i,s,r,o){return Tc.setScalar(0),Ac.setScalar(0),Cc.setScalar(0),Tc.fromBufferAttribute(e,n),Ac.fromBufferAttribute(e,i),Cc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Tc,r.x),o.addScaledVector(Ac,r.y),o.addScaledVector(Cc,r.z),o}static isFrontFacing(e,n,i,s){return Bn.subVectors(i,n),wi.subVectors(e,n),Bn.cross(wi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Bn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,i),Ks.subVectors(r,i),bc.subVectors(e,i);const c=js.dot(bc),l=Ks.dot(bc);if(c<=0&&l<=0)return n.copy(i);Ec.subVectors(e,s);const u=js.dot(Ec),d=Ks.dot(Ec);if(u>=0&&d<=u)return n.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(js,o);wc.subVectors(e,r);const h=js.dot(wc),g=Ks.dot(wc);if(g>=0&&h<=g)return n.copy(r);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),n.copy(i).addScaledVector(Ks,a);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return op.subVectors(r,s),a=(d-u)/(d-u+(h-g)),n.copy(s).addScaledVector(op,a);const m=1/(p+_+f);return o=_*m,a=f*m,n.copy(i).addScaledVector(js,o).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fo{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),ta.subVectors(this.max,Br),Zs.subVectors(e.a,Br),Js.subVectors(e.b,Br),Qs.subVectors(e.c,Br),Ki.subVectors(Js,Zs),Zi.subVectors(Qs,Js),ms.subVectors(Zs,Qs);let n=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-ms.z,ms.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,ms.z,0,-ms.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-ms.y,ms.x,0];return!Rc(n,Zs,Js,Qs,ta)||(n=[1,0,0,0,1,0,0,0,1],!Rc(n,Zs,Js,Qs,ta))?!1:(na.crossVectors(Ki,Zi),n=[na.x,na.y,na.z],Rc(n,Zs,Js,Qs,ta))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new $,new $,new $,new $,new $,new $,new $,new $],kn=new $,ea=new Fo,Zs=new $,Js=new $,Qs=new $,Ki=new $,Zi=new $,ms=new $,Br=new $,ta=new $,na=new $,gs=new $;function Rc(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){gs.fromArray(t,r);const a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=e.dot(gs),l=n.dot(gs),u=i.dot(gs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ut=new $,ia=new at;let k3=0;class Tn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Xh,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ia.fromBufferAttribute(this,n),ia.applyMatrix3(e),this.setXY(n,ia.x,ia.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fr(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fr(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fr(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xh&&(e.usage=this.usage),e}}class L_ extends Tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class D_ extends Tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ft extends Tn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const z3=new Fo,kr=new $,Pc=new $;class Oo{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):z3.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);const n=kr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(kr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Pc)),this.expandByPoint(kr.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let V3=0;const Ln=new Ct,Lc=new un,er=new $,Mn=new Fo,zr=new Fo,Ht=new $;class tn extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V3++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y3(e)?D_:L_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Mn.min,zr.min),Mn.expandByPoint(Ht),Ht.addVectors(Mn.max,zr.max),Mn.expandByPoint(Ht)):(Mn.expandByPoint(zr.min),Mn.expandByPoint(zr.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ht.fromBufferAttribute(a,l),c&&(er.fromBufferAttribute(e,l),Ht.add(er)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let S=0;S<i.count;S++)a[S]=new $,c[S]=new $;const l=new $,u=new $,d=new $,f=new at,h=new at,g=new at,_=new $,p=new $;function m(S,M,U){l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,U),f.fromBufferAttribute(r,S),h.fromBufferAttribute(r,M),g.fromBufferAttribute(r,U),u.sub(l),d.sub(l),h.sub(f),g.sub(f);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[S].add(_),a[M].add(_),a[U].add(_),c[S].add(p),c[M].add(p),c[U].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,M=x.length;S<M;++S){const U=x[S],D=U.start,N=U.count;for(let z=D,G=D+N;z<G;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const E=new $,y=new $,C=new $,A=new $;function L(S){C.fromBufferAttribute(s,S),A.copy(C);const M=a[S];E.copy(M),E.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(A,M);const D=y.dot(c[S])<0?-1:1;o.setXYZW(S,E.x,E.y,E.z,D)}for(let S=0,M=x.length;S<M;++S){const U=x[S],D=U.start,N=U.count;for(let z=D,G=D+N;z<G;z+=3)L(e.getX(z+0)),L(e.getX(z+1)),L(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new $,r=new $,o=new $,a=new $,c=new $,l=new $,u=new $,d=new $;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let h=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?h=c[_]*a.data.stride+a.offset:h=c[_]*u;for(let m=0;m<u;m++)f[g++]=l[h++]}return new Tn(f,u,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new tn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);n.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=e(f,i);c.push(h)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(n))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let H3=0;class Rr extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H3++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=fr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vu,this.blendDst=xu,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Xe(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Xe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==as&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vu&&(i.blendSrc=this.blendSrc),this.blendDst!==xu&&(i.blendDst=this.blendDst),this.blendEquation!==ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new $,Dc=new $,sa=new $,Ji=new $,Ic=new $,ra=new $,Nc=new $;class ed{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Dc.copy(e).add(n).multiplyScalar(.5),sa.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(Dc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(sa),a=Ji.dot(this.direction),c=-Ji.dot(sa),l=Ji.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Dc).addScaledVector(sa,f),h}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,s,r){Ic.subVectors(n,e),ra.subVectors(i,e),Nc.crossVectors(Ic,ra);let o=this.direction.dot(Nc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const c=a*this.direction.dot(ra.crossVectors(Ji,ra));if(c<0)return null;const l=a*this.direction.dot(Ic.cross(Ji));if(l<0||c+l>o)return null;const u=-a*Ji.dot(Nc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ts extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=f_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ap=new Ct,_s=new ed,oa=new Oo,lp=new $,aa=new $,la=new $,ca=new $,Uc=new $,ua=new $,cp=new $,fa=new $;class jt extends un{constructor(e=new tn,n=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ua.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Uc.fromBufferAttribute(d,e),o?ua.addScaledVector(Uc,u):ua.addScaledVector(Uc.sub(n),u))}n.add(ua)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(oa.containsPoint(_s.origin)===!1&&(_s.intersectSphere(oa,lp)===null||_s.origin.distanceToSquared(lp)>(e.far-e.near)**2))&&(ap.copy(r).invert(),_s.copy(e.ray).applyMatrix4(ap),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_s)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],x=Math.max(p.start,h.start),E=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let y=x,C=E;y<C;y+=3){const A=a.getX(y),L=a.getX(y+1),S=a.getX(y+2);s=da(this,m,e,i,l,u,d,A,L,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);s=da(this,o,e,i,l,u,d,x,E,y),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],x=Math.max(p.start,h.start),E=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let y=x,C=E;y<C;y+=3){const A=y,L=y+1,S=y+2;s=da(this,m,e,i,l,u,d,A,L,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const x=p,E=p+1,y=p+2;s=da(this,o,e,i,l,u,d,x,E,y),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}}}function G3(t,e,n,i,s,r,o,a){let c;if(e.side===vn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===as,a),c===null)return null;fa.copy(a),fa.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(fa);return l<n.near||l>n.far?null:{distance:l,point:fa.clone(),object:t}}function da(t,e,n,i,s,r,o,a,c,l){t.getVertexPosition(a,aa),t.getVertexPosition(c,la),t.getVertexPosition(l,ca);const u=G3(t,e,n,i,aa,la,ca,cp);if(u){const d=new $;Hn.getBarycoord(cp,aa,la,ca,d),s&&(u.uv=Hn.getInterpolatedAttribute(s,a,c,l,d,new at)),r&&(u.uv1=Hn.getInterpolatedAttribute(r,a,c,l,d,new at)),o&&(u.normal=Hn.getInterpolatedAttribute(o,a,c,l,d,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new $,materialIndex:0};Hn.getNormal(aa,la,ca,f.normal),u.face=f,u.barycoord=d}return u}class W3 extends cn{constructor(e=null,n=1,i=1,s,r,o,a,c,l=Wt,u=Wt,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fc=new $,$3=new $,X3=new Qe;class Ms{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Fc.subVectors(i,n).cross($3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Fc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||X3.getNormalMatrix(e),s=this.coplanarPoint(Fc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Oo,q3=new at(.5,.5),ha=new $;class I_{constructor(e=new Ms,n=new Ms,i=new Ms,s=new Ms,r=new Ms,o=new Ms){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ci,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],h=r[7],g=r[8],_=r[9],p=r[10],m=r[11],x=r[12],E=r[13],y=r[14],C=r[15];if(s[0].setComponents(l-o,h-u,m-g,C-x).normalize(),s[1].setComponents(l+o,h+u,m+g,C+x).normalize(),s[2].setComponents(l+a,h+d,m+_,C+E).normalize(),s[3].setComponents(l-a,h-d,m-_,C-E).normalize(),i)s[4].setComponents(c,f,p,y).normalize(),s[5].setComponents(l-c,h-f,m-p,C-y).normalize();else if(s[4].setComponents(l-c,h-f,m-p,C-y).normalize(),n===ci)s[5].setComponents(l+c,h+f,m+p,C+y).normalize();else if(n===sl)s[5].setComponents(c,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const n=q3.distanceTo(e.center);return vs.radius=.7071067811865476+n,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(ha.x=s.normal.x>0?e.max.x:e.min.x,ha.y=s.normal.y>0?e.max.y:e.min.y,ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class N_ extends Rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const al=new $,ll=new $,up=new Ct,Vr=new ed,pa=new Oo,Oc=new $,fp=new $;class U_ extends un{constructor(e=new tn,n=new N_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)al.fromBufferAttribute(n,s-1),ll.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=al.distanceTo(ll);e.setAttribute("lineDistance",new Ft(i,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;up.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(up);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,p=g-1;_<p;_+=l){const m=u.getX(_),x=u.getX(_+1),E=ma(this,e,Vr,c,m,x,_);E&&n.push(E)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(h),m=ma(this,e,Vr,c,_,p,g-1);m&&n.push(m)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=h,p=g-1;_<p;_+=l){const m=ma(this,e,Vr,c,_,_+1,_);m&&n.push(m)}if(this.isLineLoop){const _=ma(this,e,Vr,c,g-1,h,g-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ma(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(al.fromBufferAttribute(a,s),ll.fromBufferAttribute(a,r),n.distanceSqToSegment(al,ll,Oc,fp)>i)return;Oc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Oc);if(!(l<e.near||l>e.far))return{distance:l,point:fp.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const dp=new $,hp=new $;class Y3 extends U_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)dp.fromBufferAttribute(n,s),hp.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+dp.distanceTo(hp);e.setAttribute("lineDistance",new Ft(i,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class j3 extends Rr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pp=new Ct,cf=new ed,ga=new Oo,_a=new $;class mp extends un{constructor(e=new tn,n=new j3){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;pp.copy(s).invert(),cf.copy(e.ray).applyMatrix4(pp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,_=h;g<_;g++){const p=l.getX(g);_a.fromBufferAttribute(d,p),gp(_a,p,c,s,e,n,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,_=h;g<_;g++)_a.fromBufferAttribute(d,g),gp(_a,g,c,s,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gp(t,e,n,i,s,r,o){const a=cf.distanceSqToPoint(t);if(a<n){const c=new $;cf.closestPointToPoint(t,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class F_ extends cn{constructor(e=[],n=ks,i,s,r,o,a,c,l,u){super(e,n,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mo extends cn{constructor(e,n,i=_i,s,r,o,a=Wt,c=Wt,l,u=Vi,d=1){if(u!==Vi&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class K3 extends Mo{constructor(e,n=_i,i=ks,s,r,o=Wt,a=Wt,c,l=Vi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class O_ extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bo extends tn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(d,2));function g(_,p,m,x,E,y,C,A,L,S,M){const U=y/L,D=C/S,N=y/2,z=C/2,G=A/2,k=L+1,w=S+1;let T=0,V=0;const X=new $;for(let re=0;re<w;re++){const ce=re*D-z;for(let pe=0;pe<k;pe++){const Ge=pe*U-N;X[_]=Ge*x,X[p]=ce*E,X[m]=G,l.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[m]=A>0?1:-1,u.push(X.x,X.y,X.z),d.push(pe/L),d.push(1-re/S),T+=1}}for(let re=0;re<S;re++)for(let ce=0;ce<L;ce++){const pe=f+ce+k*re,Ge=f+ce+k*(re+1),ut=f+(ce+1)+k*(re+1),dt=f+(ce+1)+k*re;c.push(pe,Ge,dt),c.push(Ge,ut,dt),V+=6}a.addGroup(h,V,M),h+=V,f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class td extends tn{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(r.slice(),3)),this.setAttribute("uv",new Ft(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const E=new $,y=new $,C=new $;for(let A=0;A<n.length;A+=3)h(n[A+0],E),h(n[A+1],y),h(n[A+2],C),c(E,y,C,x)}function c(x,E,y,C){const A=C+1,L=[];for(let S=0;S<=A;S++){L[S]=[];const M=x.clone().lerp(y,S/A),U=E.clone().lerp(y,S/A),D=A-S;for(let N=0;N<=D;N++)N===0&&S===A?L[S][N]=M:L[S][N]=M.clone().lerp(U,N/D)}for(let S=0;S<A;S++)for(let M=0;M<2*(A-S)-1;M++){const U=Math.floor(M/2);M%2===0?(f(L[S][U+1]),f(L[S+1][U]),f(L[S][U])):(f(L[S][U+1]),f(L[S+1][U+1]),f(L[S+1][U]))}}function l(x){const E=new $;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(x),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function u(){const x=new $;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];const y=p(x)/2/Math.PI+.5,C=m(x)/Math.PI+.5;o.push(y,1-C)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){const E=o[x+0],y=o[x+2],C=o[x+4],A=Math.max(E,y,C),L=Math.min(E,y,C);A>.9&&L<.1&&(E<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function h(x,E){const y=x*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function g(){const x=new $,E=new $,y=new $,C=new $,A=new at,L=new at,S=new at;for(let M=0,U=0;M<r.length;M+=9,U+=6){x.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),A.set(o[U+0],o[U+1]),L.set(o[U+2],o[U+3]),S.set(o[U+4],o[U+5]),C.copy(x).add(E).add(y).divideScalar(3);const D=p(C);_(A,U+0,x,D),_(L,U+2,E,D),_(S,U+4,y,D)}}function _(x,E,y,C){C<0&&x.x===1&&(o[E]=x.x-1),y.x===0&&y.z===0&&(o[E]=C/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new td(e.vertices,e.indices,e.radius,e.detail)}}class Z3{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let s=0;const r=i.length;let o;n?o=n:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=n||(o.isVector2?new at:new $);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new $,s=[],r=[],o=[],a=new $,c=new Ct;for(let h=0;h<=e;h++){const g=h/e;s[h]=this.getTangentAt(g,new $)}r[0]=new $,o[0]=new $;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(it(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(n===!0){let h=Math.acos(it(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function J3(t,e){const n=1-t;return n*n*e}function Q3(t,e){return 2*(1-t)*t*e}function e2(t,e){return t*t*e}function Bc(t,e,n,i){return J3(t,e)+Q3(t,n)+e2(t,i)}class t2 extends Z3{constructor(e=new $,n=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new $){const i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Bc(e,s.x,r.x,o.x),Bc(e,s.y,r.y,o.y),Bc(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cl extends td{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new cl(e.radius,e.detail)}}class Bl extends tn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,f=n/c,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const x=m*f-o;for(let E=0;E<l;E++){const y=E*d-r;g.push(y,-x,0),_.push(0,0,1),p.push(E/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){const E=x+l*m,y=x+l*(m+1),C=x+1+l*(m+1),A=x+1+l*m;h.push(E,y,A),h.push(y,C,A)}this.setIndex(h),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.widthSegments,e.heightSegments)}}class nd extends tn{constructor(e=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=e;const f=(n-e)/s,h=new $,g=new at;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){const m=r+p/i*o;h.x=d*Math.cos(m),h.y=d*Math.sin(m),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/n+1)/2,g.y=(h.y/n+1)/2,u.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){const p=_*(i+1);for(let m=0;m<i;m++){const x=m+p,E=x,y=x+i+1,C=x+i+2,A=x+1;a.push(E,y,A),a.push(y,C,A)}}this.setIndex(a),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(l,3)),this.setAttribute("uv",new Ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ul extends tn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new $,f=new $,h=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const x=[],E=m/i;let y=0;m===0&&o===0?y=.5/n:m===i&&c===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const A=C/n;d.x=-e*Math.cos(s+A*r)*Math.sin(o+E*a),d.y=e*Math.cos(o+E*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(A+y,1-E),x.push(l++)}u.push(x)}for(let m=0;m<i;m++)for(let x=0;x<n;x++){const E=u[m][x+1],y=u[m][x],C=u[m+1][x],A=u[m+1][x+1];(m!==0||o>0)&&h.push(E,y,A),(m!==i-1||c<Math.PI)&&h.push(y,C,A)}this.setIndex(h),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function br(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=br(t[n]);for(const s in i)e[s]=i[s]}return e}function n2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function B_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const i2={clone:br,merge:sn};var s2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s2,this.fragmentShader=r2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=n2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class o2 extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class a2 extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l2 extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const va=new $,xa=new Cr,Jn=new $;class k_ extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(va,xa,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,xa,Jn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(va,xa,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,xa,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new $,_p=new at,vp=new at;class In extends k_{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lf*2*Math.atan(Math.tan(hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,_p,vp),n.subVectors(vp,_p)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class z_ extends k_{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const tr=-90,nr=1;class c2 extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(tr,nr,e,n);s.layers=this.layers,this.add(s);const r=new In(tr,nr,e,n);r.layers=this.layers,this.add(r);const o=new In(tr,nr,e,n);o.layers=this.layers,this.add(o);const a=new In(tr,nr,e,n);a.layers=this.layers,this.add(a);const c=new In(tr,nr,e,n);c.layers=this.layers,this.add(c);const l=new In(tr,nr,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,c]=n;for(const l of n)this.remove(l);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class u2 extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function xp(t,e,n,i){const s=f2(i);switch(n){case E_:return t*e;case T_:return t*e/s.components*s.byteLength;case Yf:return t*e/s.components*s.byteLength;case Sr:return t*e*2/s.components*s.byteLength;case jf:return t*e*2/s.components*s.byteLength;case w_:return t*e*3/s.components*s.byteLength;case Gn:return t*e*4/s.components*s.byteLength;case Kf:return t*e*4/s.components*s.byteLength;case Ia:case Na:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Fa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pu:case Du:return Math.max(t,16)*Math.max(e,8)/4;case Ru:case Lu:return Math.max(t,8)*Math.max(e,8)/2;case Iu:case Nu:case Fu:case Ou:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Uu:case Bu:case ku:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case $u:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ju:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Zu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ju:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ef:case tf:case nf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case sf:case rf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case of:case af:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function f2(t){switch(t){case Nn:case y_:return{byteLength:1,components:1};case yo:case S_:case zi:return{byteLength:2,components:1};case Xf:case qf:return{byteLength:2,components:4};case _i:case $f:case li:return{byteLength:4,components:1};case M_:case b_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wf}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function V_(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function d2(t){const e=new WeakMap;function n(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=t.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=t.SHORT;else if(l instanceof Uint32Array)h=t.UNSIGNED_INT;else if(l instanceof Int32Array)h=t.INT;else if(l instanceof Int8Array)h=t.BYTE;else if(l instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(t.bindBuffer(l,a),d.length===0)t.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];t.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var h2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p2=`#ifdef USE_ALPHAHASH
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
#endif`,m2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x2=`#ifdef USE_AOMAP
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
#endif`,y2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S2=`#ifdef USE_BATCHING
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
#endif`,M2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T2=`#ifdef USE_IRIDESCENCE
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
#endif`,A2=`#ifdef USE_BUMPMAP
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
#endif`,C2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,N2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,U2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,F2=`#define PI 3.141592653589793
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
} // validated`,O2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B2=`vec3 transformedNormal = objectNormal;
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
#endif`,k2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G2="gl_FragColor = linearToOutputTexel( gl_FragColor );",W2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$2=`#ifdef USE_ENVMAP
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
#endif`,X2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q2=`#ifdef USE_ENVMAP
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
#endif`,Y2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j2=`#ifdef USE_ENVMAP
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
#endif`,K2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eL=`#ifdef USE_GRADIENTMAP
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
}`,tL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sL=`uniform bool receiveShadow;
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
#endif`,rL=`#ifdef USE_ENVMAP
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
#endif`,oL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uL=`PhysicalMaterial material;
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
#endif`,fL=`uniform sampler2D dfgLUT;
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
}`,dL=`
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
#endif`,hL=`#if defined( RE_IndirectDiffuse )
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
#endif`,pL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_L=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ML=`#if defined( USE_POINTS_UV )
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
#endif`,bL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CL=`#ifdef USE_MORPHTARGETS
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
#endif`,RL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UL=`#ifdef USE_NORMALMAP
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
#endif`,FL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VL=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$L=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZL=`float getShadowMask() {
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
}`,JL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QL=`#ifdef USE_SKINNING
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
#endif`,eD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tD=`#ifdef USE_SKINNING
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
#endif`,nD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oD=`#ifdef USE_TRANSMISSION
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
#endif`,aD=`#ifdef USE_TRANSMISSION
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
#endif`,lD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hD=`uniform sampler2D t2D;
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
}`,pD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_D=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vD=`#include <common>
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
}`,xD=`#if DEPTH_PACKING == 3200
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
}`,yD=`#define DISTANCE
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
}`,SD=`#define DISTANCE
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
}`,MD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ED=`uniform float scale;
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
}`,wD=`uniform vec3 diffuse;
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
}`,TD=`#include <common>
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
}`,AD=`uniform vec3 diffuse;
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
}`,CD=`#define LAMBERT
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
}`,RD=`#define LAMBERT
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
}`,PD=`#define MATCAP
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
}`,LD=`#define MATCAP
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
}`,DD=`#define NORMAL
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
}`,ID=`#define NORMAL
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
}`,ND=`#define PHONG
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
}`,UD=`#define PHONG
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
}`,FD=`#define STANDARD
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
}`,OD=`#define STANDARD
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
}`,BD=`#define TOON
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
}`,kD=`#define TOON
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
}`,zD=`uniform float size;
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
}`,VD=`uniform vec3 diffuse;
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
}`,HD=`#include <common>
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
}`,GD=`uniform vec3 color;
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
}`,WD=`uniform float rotation;
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
}`,$D=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:h2,alphahash_pars_fragment:p2,alphamap_fragment:m2,alphamap_pars_fragment:g2,alphatest_fragment:_2,alphatest_pars_fragment:v2,aomap_fragment:x2,aomap_pars_fragment:y2,batching_pars_vertex:S2,batching_vertex:M2,begin_vertex:b2,beginnormal_vertex:E2,bsdfs:w2,iridescence_fragment:T2,bumpmap_pars_fragment:A2,clipping_planes_fragment:C2,clipping_planes_pars_fragment:R2,clipping_planes_pars_vertex:P2,clipping_planes_vertex:L2,color_fragment:D2,color_pars_fragment:I2,color_pars_vertex:N2,color_vertex:U2,common:F2,cube_uv_reflection_fragment:O2,defaultnormal_vertex:B2,displacementmap_pars_vertex:k2,displacementmap_vertex:z2,emissivemap_fragment:V2,emissivemap_pars_fragment:H2,colorspace_fragment:G2,colorspace_pars_fragment:W2,envmap_fragment:$2,envmap_common_pars_fragment:X2,envmap_pars_fragment:q2,envmap_pars_vertex:Y2,envmap_physical_pars_fragment:rL,envmap_vertex:j2,fog_vertex:K2,fog_pars_vertex:Z2,fog_fragment:J2,fog_pars_fragment:Q2,gradientmap_pars_fragment:eL,lightmap_pars_fragment:tL,lights_lambert_fragment:nL,lights_lambert_pars_fragment:iL,lights_pars_begin:sL,lights_toon_fragment:oL,lights_toon_pars_fragment:aL,lights_phong_fragment:lL,lights_phong_pars_fragment:cL,lights_physical_fragment:uL,lights_physical_pars_fragment:fL,lights_fragment_begin:dL,lights_fragment_maps:hL,lights_fragment_end:pL,logdepthbuf_fragment:mL,logdepthbuf_pars_fragment:gL,logdepthbuf_pars_vertex:_L,logdepthbuf_vertex:vL,map_fragment:xL,map_pars_fragment:yL,map_particle_fragment:SL,map_particle_pars_fragment:ML,metalnessmap_fragment:bL,metalnessmap_pars_fragment:EL,morphinstance_vertex:wL,morphcolor_vertex:TL,morphnormal_vertex:AL,morphtarget_pars_vertex:CL,morphtarget_vertex:RL,normal_fragment_begin:PL,normal_fragment_maps:LL,normal_pars_fragment:DL,normal_pars_vertex:IL,normal_vertex:NL,normalmap_pars_fragment:UL,clearcoat_normal_fragment_begin:FL,clearcoat_normal_fragment_maps:OL,clearcoat_pars_fragment:BL,iridescence_pars_fragment:kL,opaque_fragment:zL,packing:VL,premultiplied_alpha_fragment:HL,project_vertex:GL,dithering_fragment:WL,dithering_pars_fragment:$L,roughnessmap_fragment:XL,roughnessmap_pars_fragment:qL,shadowmap_pars_fragment:YL,shadowmap_pars_vertex:jL,shadowmap_vertex:KL,shadowmask_pars_fragment:ZL,skinbase_vertex:JL,skinning_pars_vertex:QL,skinning_vertex:eD,skinnormal_vertex:tD,specularmap_fragment:nD,specularmap_pars_fragment:iD,tonemapping_fragment:sD,tonemapping_pars_fragment:rD,transmission_fragment:oD,transmission_pars_fragment:aD,uv_pars_fragment:lD,uv_pars_vertex:cD,uv_vertex:uD,worldpos_vertex:fD,background_vert:dD,background_frag:hD,backgroundCube_vert:pD,backgroundCube_frag:mD,cube_vert:gD,cube_frag:_D,depth_vert:vD,depth_frag:xD,distance_vert:yD,distance_frag:SD,equirect_vert:MD,equirect_frag:bD,linedashed_vert:ED,linedashed_frag:wD,meshbasic_vert:TD,meshbasic_frag:AD,meshlambert_vert:CD,meshlambert_frag:RD,meshmatcap_vert:PD,meshmatcap_frag:LD,meshnormal_vert:DD,meshnormal_frag:ID,meshphong_vert:ND,meshphong_frag:UD,meshphysical_vert:FD,meshphysical_frag:OD,meshtoon_vert:BD,meshtoon_frag:kD,points_vert:zD,points_frag:VD,shadow_vert:HD,shadow_frag:GD,sprite_vert:WD,sprite_frag:$D},Ce={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},si={basic:{uniforms:sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:sn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:sn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:sn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:sn([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:sn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:sn([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:sn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:sn([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:sn([Ce.common,Ce.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:sn([Ce.lights,Ce.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};si.physical={uniforms:sn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ya={r:0,b:0,g:0},xs=new Hi,XD=new Ct;function qD(t,e,n,i,s,r){const o=new rt(0);let a=s===!0?0:1,c,l,u=null,d=0,f=null;function h(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const y=x.backgroundBlurriness>0;E=e.get(E,y)}return E}function g(x){let E=!1;const y=h(x);y===null?p(o,a):y&&y.isColor&&(p(y,1),E=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(x,E){const y=h(E);y&&(y.isCubeTexture||y.mapping===Ol)?(l===void 0&&(l=new jt(new Bo(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:br(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),xs.copy(E.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(XD.makeRotationFromEuler(xs)),l.material.toneMapped=ot.getTransfer(y.colorSpace)!==_t,(u!==y||d!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new jt(new Bl(2,2),new Un({name:"BackgroundMaterial",uniforms:br(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ot.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,E){x.getRGB(ya,B_(t)),n.buffers.color.setClear(ya.r,ya.g,ya.b,E,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,E=1){o.set(x),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:g,addToRenderList:_,dispose:m}}function YD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(D,N,z,G,k){let w=!1;const T=d(D,G,z,N);r!==T&&(r=T,l(r.object)),w=h(D,G,z,k),w&&g(D,G,z,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(w||o)&&(o=!1,y(D,N,z,G),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return t.createVertexArray()}function l(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function d(D,N,z,G){const k=G.wireframe===!0;let w=i[N.id];w===void 0&&(w={},i[N.id]=w);const T=D.isInstancedMesh===!0?D.id:0;let V=w[T];V===void 0&&(V={},w[T]=V);let X=V[z.id];X===void 0&&(X={},V[z.id]=X);let re=X[k];return re===void 0&&(re=f(c()),X[k]=re),re}function f(D){const N=[],z=[],G=[];for(let k=0;k<n;k++)N[k]=0,z[k]=0,G[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:G,object:D,attributes:{},index:null}}function h(D,N,z,G){const k=r.attributes,w=N.attributes;let T=0;const V=z.getAttributes();for(const X in V)if(V[X].location>=0){const ce=k[X];let pe=w[X];if(pe===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),ce===void 0||ce.attribute!==pe||pe&&ce.data!==pe.data)return!0;T++}return r.attributesNum!==T||r.index!==G}function g(D,N,z,G){const k={},w=N.attributes;let T=0;const V=z.getAttributes();for(const X in V)if(V[X].location>=0){let ce=w[X];ce===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor));const pe={};pe.attribute=ce,ce&&ce.data&&(pe.data=ce.data),k[X]=pe,T++}r.attributes=k,r.attributesNum=T,r.index=G}function _(){const D=r.newAttributes;for(let N=0,z=D.length;N<z;N++)D[N]=0}function p(D){m(D,0)}function m(D,N){const z=r.newAttributes,G=r.enabledAttributes,k=r.attributeDivisors;z[D]=1,G[D]===0&&(t.enableVertexAttribArray(D),G[D]=1),k[D]!==N&&(t.vertexAttribDivisor(D,N),k[D]=N)}function x(){const D=r.newAttributes,N=r.enabledAttributes;for(let z=0,G=N.length;z<G;z++)N[z]!==D[z]&&(t.disableVertexAttribArray(z),N[z]=0)}function E(D,N,z,G,k,w,T){T===!0?t.vertexAttribIPointer(D,N,z,k,w):t.vertexAttribPointer(D,N,z,G,k,w)}function y(D,N,z,G){_();const k=G.attributes,w=z.getAttributes(),T=N.defaultAttributeValues;for(const V in w){const X=w[V];if(X.location>=0){let re=k[V];if(re===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),re!==void 0){const ce=re.normalized,pe=re.itemSize,Ge=e.get(re);if(Ge===void 0)continue;const ut=Ge.buffer,dt=Ge.type,ae=Ge.bytesPerElement,ye=dt===t.INT||dt===t.UNSIGNED_INT||re.gpuType===$f;if(re.isInterleavedBufferAttribute){const Me=re.data,je=Me.stride,He=re.offset;if(Me.isInstancedInterleavedBuffer){for(let qe=0;qe<X.locationSize;qe++)m(X.location+qe,Me.meshPerAttribute);D.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let qe=0;qe<X.locationSize;qe++)p(X.location+qe);t.bindBuffer(t.ARRAY_BUFFER,ut);for(let qe=0;qe<X.locationSize;qe++)E(X.location+qe,pe/X.locationSize,dt,ce,je*ae,(He+pe/X.locationSize*qe)*ae,ye)}else{if(re.isInstancedBufferAttribute){for(let Me=0;Me<X.locationSize;Me++)m(X.location+Me,re.meshPerAttribute);D.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Me=0;Me<X.locationSize;Me++)p(X.location+Me);t.bindBuffer(t.ARRAY_BUFFER,ut);for(let Me=0;Me<X.locationSize;Me++)E(X.location+Me,pe/X.locationSize,dt,ce,pe*ae,pe/X.locationSize*Me*ae,ye)}}else if(T!==void 0){const ce=T[V];if(ce!==void 0)switch(ce.length){case 2:t.vertexAttrib2fv(X.location,ce);break;case 3:t.vertexAttrib3fv(X.location,ce);break;case 4:t.vertexAttrib4fv(X.location,ce);break;default:t.vertexAttrib1fv(X.location,ce)}}}}x()}function C(){M();for(const D in i){const N=i[D];for(const z in N){const G=N[z];for(const k in G){const w=G[k];for(const T in w)u(w[T].object),delete w[T];delete G[k]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;const N=i[D.id];for(const z in N){const G=N[z];for(const k in G){const w=G[k];for(const T in w)u(w[T].object),delete w[T];delete G[k]}}delete i[D.id]}function L(D){for(const N in i){const z=i[N];for(const G in z){const k=z[G];if(k[D.id]===void 0)continue;const w=k[D.id];for(const T in w)u(w[T].object),delete w[T];delete k[D.id]}}}function S(D){for(const N in i){const z=i[N],G=D.isInstancedMesh===!0?D.id:0,k=z[G];if(k!==void 0){for(const w in k){const T=k[w];for(const V in T)u(T[V].object),delete T[V];delete k[w]}delete z[G],Object.keys(z).length===0&&delete i[N]}}}function M(){U(),o=!0,r!==s&&(r=s,l(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:U,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function jD(t,e,n){let i;function s(l){i=l}function r(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,d){d!==0&&(t.drawArraysInstanced(i,l,u,d),n.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];n.update(h,i,1)}function c(l,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function KD(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Gn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const S=L===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Nn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==li&&!S)}function c(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(Xe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:y,maxSamples:C,samples:A}}function ZD(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Ms,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=t.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const x=r?0:i,E=x*4;let y=m.clippingState||null;c.value=y,y=u(g,f,E,h);for(let C=0;C!==E;++C)y[C]=n[C];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=h+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,y=h;E!==_;++E,y+=4)o.copy(d[E]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const rs=4,yp=[.125,.215,.35,.446,.526,.582],As=20,JD=256,Hr=new z_,Sp=new rt;let kc=null,zc=0,Vc=0,Hc=!1;const QD=new $;class Mp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=QD}=r;kc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kc,zc,Vc),this._renderer.xr.enabled=Hc,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:zi,format:Gn,colorSpace:Mr,depthBuffer:!1},s=bp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eI(r)),this._blurMaterial=nI(r,e,n),this._ggxMaterial=tI(r,e,n)}return s}_compileMaterial(e){const n=new jt(new tn,e);this._renderer.compile(n,Hr)}_sceneToCubeUV(e,n,i,s,r){const c=new In(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Sp),d.toneMapping=pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new Bo,new Ts({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,m=!0):(p.color.copy(Sp),m=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):y===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));const C=this._cubeSize;ir(s,y*C,E>2?C:0,C,C),d.setRenderTarget(s),m&&d.render(_,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===ks||e.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ir(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,Hr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=0+l*1.25,h=d*f,{_lodMax:g}=this,_=this._sizeLods[i],p=3*_*(i>g-rs?i-g+rs:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-n,ir(r,p,m,3*_,2*_),s.setRenderTarget(r),s.render(a,Hr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,ir(e,p,m,3*_,2*_),s.setRenderTarget(e),s.render(a,Hr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*As-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):As;p>As&&Xe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${As}`);const m=[];let x=0;for(let L=0;L<As;++L){const S=L/_,M=Math.exp(-S*S/2);m.push(M),L===0?x+=M:L<p&&(x+=2*M)}for(let L=0;L<m.length;L++)m[L]=m[L]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const y=this._sizeLods[s],C=3*y*(s>E-rs?s-E+rs:0),A=4*(this._cubeSize-y);ir(n,C,A,3*y,2*y),c.setRenderTarget(n),c.render(d,Hr)}}function eI(t){const e=[],n=[],i=[];let s=t;const r=t-rs+1+yp.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>t-rs?c=yp[o-t+rs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*h),E=new Float32Array(p*g*h),y=new Float32Array(m*g*h);for(let A=0;A<h;A++){const L=A%3*2/3-1,S=A>2?0:-1,M=[L,S,0,L+2/3,S,0,L+2/3,S+1,0,L,S,0,L+2/3,S+1,0,L,S+1,0];x.set(M,_*g*A),E.set(f,p*g*A);const U=[A,A,A,A,A,A];y.set(U,m*g*A)}const C=new tn;C.setAttribute("position",new Tn(x,_)),C.setAttribute("uv",new Tn(E,p)),C.setAttribute("faceIndex",new Tn(y,m)),i.push(new jt(C,null)),s>rs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function bp(t,e,n){const i=new mi(t,e,n);return i.texture.mapping=Ol,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ir(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function tI(t,e,n){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function nI(t,e,n){const i=new Float32Array(As),s=new $(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ep(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function wp(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}class H_ extends mi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new F_(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bo(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Ni});r.uniforms.tEquirect.value=n;const o=new jt(s,r),a=n.minFilter;return n.minFilter===Ps&&(n.minFilter=en),new c2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function iI(t){let e=new WeakMap,n=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===uc||h===fc)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const _=new H_(g.height);return _.fromEquirectangularTexture(t,f),e.set(f,_),f.addEventListener("dispose",l),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,g=h===uc||h===fc,_=h===ks||h===yr;if(g||_){let p=n.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Mp(t)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return g&&x&&x.height>0||_&&x&&c(x)?(i===null&&(i=new Mp(t)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,h){return h===uc?f.mapping=ks:h===fc&&(f.mapping=yr),f}function c(f){let h=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&h++;return h===g}function l(f){const h=f.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function sI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&ol("WebGLRenderer: "+i+" extension not supported."),s}}}function rI(t,e,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function l(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(h!==null){const x=h.array;_=h.version;for(let E=0,y=x.length;E<y;E+=3){const C=x[E+0],A=x[E+1],L=x[E+2];f.push(C,A,A,L,L,C)}}else{const x=g.array;_=g.version;for(let E=0,y=x.length/3-1;E<y;E+=3){const C=E+0,A=E+1,L=E+2;f.push(C,A,A,L,L,C)}}const p=new(g.count>=65535?D_:L_)(f,1);p.version=_;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function oI(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function l(f,h,g){g!==0&&(t.drawElementsInstanced(i,h,r,f*o,g),n.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];n.update(p,i,1)}function d(f,h,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/o,h[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=h[x]*_[x];n.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function aI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function lI(t,e,n){const i=new WeakMap,s=new It;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let U=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",U)};var h=U;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let C=a.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const L=new Float32Array(C*A*4*d),S=new C_(L,C,A,d);S.type=li,S.needsUpdate=!0;const M=y*4;for(let D=0;D<d;D++){const N=m[D],z=x[D],G=E[D],k=C*A*4*D;for(let w=0;w<N.count;w++){const T=w*M;g===!0&&(s.fromBufferAttribute(N,w),L[k+T+0]=s.x,L[k+T+1]=s.y,L[k+T+2]=s.z,L[k+T+3]=0),_===!0&&(s.fromBufferAttribute(z,w),L[k+T+4]=s.x,L[k+T+5]=s.y,L[k+T+6]=s.z,L[k+T+7]=0),p===!0&&(s.fromBufferAttribute(G,w),L[k+T+8]=s.x,L[k+T+9]=s.y,L[k+T+10]=s.z,L[k+T+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:S,size:new at(C,A)},i.set(a,f),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",_),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function cI(t,e,n,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const uI={[d_]:"LINEAR_TONE_MAPPING",[h_]:"REINHARD_TONE_MAPPING",[p_]:"CINEON_TONE_MAPPING",[m_]:"ACES_FILMIC_TONE_MAPPING",[__]:"AGX_TONE_MAPPING",[v_]:"NEUTRAL_TONE_MAPPING",[g_]:"CUSTOM_TONE_MAPPING"};function fI(t,e,n,i,s){const r=new mi(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),o=new mi(e,n,{type:zi,depthBuffer:!1,stencilBuffer:!1}),a=new tn;a.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ft([0,2,0,0,2,0],2));const c=new o2({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new jt(a,c),u=new z_(-1,1,1,-1,0,1);let d=null,f=null,h=!1,g,_=null,p=[],m=!1;this.setSize=function(x,E){r.setSize(x,E),o.setSize(x,E);for(let y=0;y<p.length;y++){const C=p[y];C.setSize&&C.setSize(x,E)}},this.setEffects=function(x){p=x,m=p.length>0&&p[0].isRenderPass===!0;const E=r.width,y=r.height;for(let C=0;C<p.length;C++){const A=p[C];A.setSize&&A.setSize(E,y)}},this.begin=function(x,E){if(h||x.toneMapping===pi&&p.length===0)return!1;if(_=E,E!==null){const y=E.width,C=E.height;(r.width!==y||r.height!==C)&&this.setSize(y,C)}return m===!1&&x.setRenderTarget(r),g=x.toneMapping,x.toneMapping=pi,!0},this.hasRenderPass=function(){return m},this.end=function(x,E){x.toneMapping=g,h=!0;let y=r,C=o;for(let A=0;A<p.length;A++){const L=p[A];if(L.enabled!==!1&&(L.render(x,C,y,E),L.needsSwap!==!1)){const S=y;y=C,C=S}}if(d!==x.outputColorSpace||f!==x.toneMapping){d=x.outputColorSpace,f=x.toneMapping,c.defines={},ot.getTransfer(d)===_t&&(c.defines.SRGB_TRANSFER="");const A=uI[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(_),x.render(l,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const G_=new cn,uf=new Mo(1,1),W_=new C_,$_=new P3,X_=new F_,Tp=[],Ap=[],Cp=new Float32Array(16),Rp=new Float32Array(9),Pp=new Float32Array(4);function Pr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Tp[s];if(r===void 0&&(r=new Float32Array(s),Tp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function zl(t,e){let n=Ap[e];n===void 0&&(n=new Int32Array(e),Ap[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function dI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function hI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function pI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function mI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function gI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Pp.set(i),t.uniformMatrix2fv(this.addr,!1,Pp),zt(n,i)}}function _I(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Rp.set(i),t.uniformMatrix3fv(this.addr,!1,Rp),zt(n,i)}}function vI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Cp.set(i),t.uniformMatrix4fv(this.addr,!1,Cp),zt(n,i)}}function xI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function yI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function SI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function MI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function bI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function EI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function wI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function TI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function AI(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(uf.compareFunction=n.isReversedDepthBuffer()?Jf:Zf,r=uf):r=G_,n.setTexture2D(e||r,s)}function CI(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||$_,s)}function RI(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||X_,s)}function PI(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||W_,s)}function LI(t){switch(t){case 5126:return dI;case 35664:return hI;case 35665:return pI;case 35666:return mI;case 35674:return gI;case 35675:return _I;case 35676:return vI;case 5124:case 35670:return xI;case 35667:case 35671:return yI;case 35668:case 35672:return SI;case 35669:case 35673:return MI;case 5125:return bI;case 36294:return EI;case 36295:return wI;case 36296:return TI;case 35678:case 36198:case 36298:case 36306:case 35682:return AI;case 35679:case 36299:case 36307:return CI;case 35680:case 36300:case 36308:case 36293:return RI;case 36289:case 36303:case 36311:case 36292:return PI}}function DI(t,e){t.uniform1fv(this.addr,e)}function II(t,e){const n=Pr(e,this.size,2);t.uniform2fv(this.addr,n)}function NI(t,e){const n=Pr(e,this.size,3);t.uniform3fv(this.addr,n)}function UI(t,e){const n=Pr(e,this.size,4);t.uniform4fv(this.addr,n)}function FI(t,e){const n=Pr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function OI(t,e){const n=Pr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function BI(t,e){const n=Pr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function kI(t,e){t.uniform1iv(this.addr,e)}function zI(t,e){t.uniform2iv(this.addr,e)}function VI(t,e){t.uniform3iv(this.addr,e)}function HI(t,e){t.uniform4iv(this.addr,e)}function GI(t,e){t.uniform1uiv(this.addr,e)}function WI(t,e){t.uniform2uiv(this.addr,e)}function $I(t,e){t.uniform3uiv(this.addr,e)}function XI(t,e){t.uniform4uiv(this.addr,e)}function qI(t,e,n){const i=this.cache,s=e.length,r=zl(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=uf:o=G_;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function YI(t,e,n){const i=this.cache,s=e.length,r=zl(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||$_,r[o])}function jI(t,e,n){const i=this.cache,s=e.length,r=zl(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||X_,r[o])}function KI(t,e,n){const i=this.cache,s=e.length,r=zl(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||W_,r[o])}function ZI(t){switch(t){case 5126:return DI;case 35664:return II;case 35665:return NI;case 35666:return UI;case 35674:return FI;case 35675:return OI;case 35676:return BI;case 5124:case 35670:return kI;case 35667:case 35671:return zI;case 35668:case 35672:return VI;case 35669:case 35673:return HI;case 5125:return GI;case 36294:return WI;case 36295:return $I;case 36296:return XI;case 35678:case 36198:case 36298:case 36306:case 35682:return qI;case 35679:case 36299:case 36307:return YI;case 35680:case 36300:case 36308:case 36293:return jI;case 36289:case 36303:case 36311:case 36292:return KI}}class JI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=LI(n.type)}}class QI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ZI(n.type)}}class eN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function Lp(t,e){t.seq.push(e),t.map[e.id]=e}function tN(t,e,n){const i=t.name,s=i.length;for(Gc.lastIndex=0;;){const r=Gc.exec(i),o=Gc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Lp(n,l===void 0?new JI(a,t,e):new QI(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new eN(a),Lp(n,d)),n=d}}}class Oa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),c=e.getUniformLocation(n,a.name);tN(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Dp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const nN=37297;let iN=0;function sN(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Ip=new Qe;function rN(t){ot._getMatrix(Ip,ot.workingColorSpace,t);const e=`mat3( ${Ip.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case il:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Np(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+sN(t.getShaderSource(e),a)}else return r}function oN(t,e){const n=rN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const aN={[d_]:"Linear",[h_]:"Reinhard",[p_]:"Cineon",[m_]:"ACESFilmic",[__]:"AgX",[v_]:"Neutral",[g_]:"Custom"};function lN(t,e){const n=aN[e];return n===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sa=new $;function cN(){ot.getLuminanceCoefficients(Sa);const t=Sa.x.toFixed(4),e=Sa.y.toFixed(4),n=Sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function fN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function dN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Kr(t){return t!==""}function Up(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hN=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(t){return t.replace(hN,mN)}const pN=new Map;function mN(t,e){let n=tt[e];if(n===void 0){const i=pN.get(e);if(i!==void 0)n=tt[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ff(n)}const gN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Op(t){return t.replace(gN,_N)}function _N(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const vN={[Da]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function xN(t){return vN[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yN={[ks]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[Ol]:"ENVMAP_TYPE_CUBE_UV"};function SN(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":yN[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const MN={[yr]:"ENVMAP_MODE_REFRACTION"};function bN(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":MN[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EN={[f_]:"ENVMAP_BLENDING_MULTIPLY",[l3]:"ENVMAP_BLENDING_MIX",[c3]:"ENVMAP_BLENDING_ADD"};function wN(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":EN[t.combine]||"ENVMAP_BLENDING_NONE"}function TN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AN(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=xN(n),l=SN(n),u=bN(n),d=wN(n),f=TN(n),h=uN(n),g=fN(r),_=s.createProgram();let p,m,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Kr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`)):(p=[Bp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),m=[Bp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pi?"#define TONE_MAPPING":"",n.toneMapping!==pi?tt.tonemapping_pars_fragment:"",n.toneMapping!==pi?lN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,oN("linearToOutputTexel",n.outputColorSpace),cN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Kr).join(`
`)),o=ff(o),o=Up(o,n),o=Fp(o,n),a=ff(a),a=Up(a,n),a=Fp(a,n),o=Op(o),a=Op(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=x+p+o,y=x+m+a,C=Dp(s,s.VERTEX_SHADER,E),A=Dp(s,s.FRAGMENT_SHADER,y);s.attachShader(_,C),s.attachShader(_,A),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(D){if(t.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(C)||"",G=s.getShaderInfoLog(A)||"",k=N.trim(),w=z.trim(),T=G.trim();let V=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,C,A);else{const re=Np(s,C,"vertex"),ce=Np(s,A,"fragment");ct("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+re+`
`+ce)}else k!==""?Xe("WebGLProgram: Program Info Log:",k):(w===""||T==="")&&(X=!1);X&&(D.diagnostics={runnable:V,programLog:k,vertexShader:{log:w,prefix:p},fragmentShader:{log:T,prefix:m}})}s.deleteShader(C),s.deleteShader(A),S=new Oa(s,_),M=dN(s,_)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,nN)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iN++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let CN=0;class RN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new PN(e),n.set(e,i)),i}}class PN{constructor(e){this.id=CN++,this.code=e,this.usedTimes=0}}function LN(t,e,n,i,s,r){const o=new R_,a=new RN,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function _(S,M,U,D,N){const z=D.fog,G=N.geometry,k=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,w=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,T=e.get(S.envMap||k,w),V=T&&T.mapping===Ol?T.image.height:null,X=h[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Xe("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ce=re!==void 0?re.length:0;let pe=0;G.morphAttributes.position!==void 0&&(pe=1),G.morphAttributes.normal!==void 0&&(pe=2),G.morphAttributes.color!==void 0&&(pe=3);let Ge,ut,dt,ae;if(X){const gt=si[X];Ge=gt.vertexShader,ut=gt.fragmentShader}else Ge=S.vertexShader,ut=S.fragmentShader,a.update(S),dt=a.getVertexShaderID(S),ae=a.getFragmentShaderID(S);const ye=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),je=N.isInstancedMesh===!0,He=N.isBatchedMesh===!0,qe=!!S.map,F=!!S.matcap,B=!!T,q=!!S.aoMap,oe=!!S.lightMap,Q=!!S.bumpMap,le=!!S.normalMap,I=!!S.displacementMap,me=!!S.emissiveMap,de=!!S.metalnessMap,se=!!S.roughnessMap,he=S.anisotropy>0,R=S.clearcoat>0,b=S.dispersion>0,O=S.iridescence>0,Y=S.sheen>0,ne=S.transmission>0,j=he&&!!S.anisotropyMap,Te=R&&!!S.clearcoatMap,_e=R&&!!S.clearcoatNormalMap,Ne=R&&!!S.clearcoatRoughnessMap,Be=O&&!!S.iridescenceMap,ge=O&&!!S.iridescenceThicknessMap,xe=Y&&!!S.sheenColorMap,Ae=Y&&!!S.sheenRoughnessMap,Le=!!S.specularMap,De=!!S.specularColorMap,Ze=!!S.specularIntensityMap,H=ne&&!!S.transmissionMap,Ee=ne&&!!S.thicknessMap,Se=!!S.gradientMap,Ue=!!S.alphaMap,ve=S.alphaTest>0,ie=!!S.alphaHash,Fe=!!S.extensions;let Ke=pi;S.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ke=t.toneMapping);const wt={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:Ge,fragmentShader:ut,defines:S.defines,customVertexShaderID:dt,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:He,batchingColor:He&&N._colorsTexture!==null,instancing:je,instancingColor:je&&N.instanceColor!==null,instancingMorph:je&&N.morphTexture!==null,outputColorSpace:ye===null?t.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Mr,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:F,envMap:B,envMapMode:B&&T.mapping,envMapCubeUVHeight:V,aoMap:q,lightMap:oe,bumpMap:Q,normalMap:le,displacementMap:I,emissiveMap:me,normalMapObjectSpace:le&&S.normalMapType===h3,normalMapTangentSpace:le&&S.normalMapType===d3,metalnessMap:de,roughnessMap:se,anisotropy:he,anisotropyMap:j,clearcoat:R,clearcoatMap:Te,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ne,dispersion:b,iridescence:O,iridescenceMap:Be,iridescenceThicknessMap:ge,sheen:Y,sheenColorMap:xe,sheenRoughnessMap:Ae,specularMap:Le,specularColorMap:De,specularIntensityMap:Ze,transmission:ne,transmissionMap:H,thicknessMap:Ee,gradientMap:Se,opaque:S.transparent===!1&&S.blending===fr&&S.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ve,alphaHash:ie,combine:S.combine,mapUv:qe&&g(S.map.channel),aoMapUv:q&&g(S.aoMap.channel),lightMapUv:oe&&g(S.lightMap.channel),bumpMapUv:Q&&g(S.bumpMap.channel),normalMapUv:le&&g(S.normalMap.channel),displacementMapUv:I&&g(S.displacementMap.channel),emissiveMapUv:me&&g(S.emissiveMap.channel),metalnessMapUv:de&&g(S.metalnessMap.channel),roughnessMapUv:se&&g(S.roughnessMap.channel),anisotropyMapUv:j&&g(S.anisotropyMap.channel),clearcoatMapUv:Te&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(S.sheenRoughnessMap.channel),specularMapUv:Le&&g(S.specularMap.channel),specularColorMapUv:De&&g(S.specularColorMap.channel),specularIntensityMapUv:Ze&&g(S.specularIntensityMap.channel),transmissionMapUv:H&&g(S.transmissionMap.channel),thicknessMapUv:Ee&&g(S.thicknessMap.channel),alphaMapUv:Ue&&g(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(le||he),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(qe||Ue),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||G.attributes.normal===void 0&&le===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:pe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ke,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:me&&S.emissiveMap.isVideoTexture===!0&&ot.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===oi,flipSided:S.side===vn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Fe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&S.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)M.push(U),M.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(m(M,S),x(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function m(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=h[S.type];let U;if(M){const D=si[M];U=i2.clone(D.uniforms)}else U=S.uniforms;return U}function y(S,M){let U=u.get(M);return U!==void 0?++U.usedTimes:(U=new AN(t,M,S,s),l.push(U),u.set(M,U)),U}function C(S){if(--S.usedTimes===0){const M=l.indexOf(S);l[M]=l[l.length-1],l.pop(),u.delete(S.cacheKey),S.destroy()}}function A(S){a.remove(S)}function L(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:C,releaseShaderCache:A,programs:l,dispose:L}}function DN(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,c){t.get(o)[a]=c}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function IN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function kp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zp(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,_,p,m){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:g,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},t[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=g,x.materialVariant=o(f),x.groupOrder=_,x.renderOrder=f.renderOrder,x.z=p,x.group=m),e++,x}function c(f,h,g,_,p,m){const x=a(f,h,g,_,p,m);g.transmission>0?i.push(x):g.transparent===!0?s.push(x):n.push(x)}function l(f,h,g,_,p,m){const x=a(f,h,g,_,p,m);g.transmission>0?i.unshift(x):g.transparent===!0?s.unshift(x):n.unshift(x)}function u(f,h){n.length>1&&n.sort(f||IN),i.length>1&&i.sort(h||kp),s.length>1&&s.sort(h||kp)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function NN(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new zp,t.set(i,[o])):s>=r.length?(o=new zp,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function UN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new rt};break;case"SpotLight":n={position:new $,direction:new $,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function FN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ON=0;function BN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kN(t){const e=new UN,n=FN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);const s=new $,r=new Ct,o=new Ct;function a(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,g=0,_=0,p=0,m=0,x=0,E=0,y=0,C=0,A=0,L=0;l.sort(BN);for(let M=0,U=l.length;M<U;M++){const D=l[M],N=D.color,z=D.intensity,G=D.distance;let k=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Sr?k=D.shadow.map.texture:k=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=N.r*z,d+=N.g*z,f+=N.b*z;else if(D.isLightProbe){for(let w=0;w<9;w++)i.probe[w].addScaledVector(D.sh.coefficients[w],z);L++}else if(D.isDirectionalLight){const w=e.get(D);if(w.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const T=D.shadow,V=n.get(D);V.shadowIntensity=T.intensity,V.shadowBias=T.bias,V.shadowNormalBias=T.normalBias,V.shadowRadius=T.radius,V.shadowMapSize=T.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=k,i.directionalShadowMatrix[h]=D.shadow.matrix,x++}i.directional[h]=w,h++}else if(D.isSpotLight){const w=e.get(D);w.position.setFromMatrixPosition(D.matrixWorld),w.color.copy(N).multiplyScalar(z),w.distance=G,w.coneCos=Math.cos(D.angle),w.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),w.decay=D.decay,i.spot[_]=w;const T=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,T.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[_]=T.matrix,D.castShadow){const V=n.get(D);V.shadowIntensity=T.intensity,V.shadowBias=T.bias,V.shadowNormalBias=T.normalBias,V.shadowRadius=T.radius,V.shadowMapSize=T.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=k,y++}_++}else if(D.isRectAreaLight){const w=e.get(D);w.color.copy(N).multiplyScalar(z),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=w,p++}else if(D.isPointLight){const w=e.get(D);if(w.color.copy(D.color).multiplyScalar(D.intensity),w.distance=D.distance,w.decay=D.decay,D.castShadow){const T=D.shadow,V=n.get(D);V.shadowIntensity=T.intensity,V.shadowBias=T.bias,V.shadowNormalBias=T.normalBias,V.shadowRadius=T.radius,V.shadowMapSize=T.mapSize,V.shadowCameraNear=T.camera.near,V.shadowCameraFar=T.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=w,g++}else if(D.isHemisphereLight){const w=e.get(D);w.skyColor.copy(D.color).multiplyScalar(z),w.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[m]=w,m++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==h||S.pointLength!==g||S.spotLength!==_||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==x||S.numPointShadows!==E||S.numSpotShadows!==y||S.numSpotMaps!==C||S.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,S.directionalLength=h,S.pointLength=g,S.spotLength=_,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=x,S.numPointShadows=E,S.numSpotShadows=y,S.numSpotMaps=C,S.numLightProbes=L,i.version=ON++)}function c(l,u){let d=0,f=0,h=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,x=l.length;m<x;m++){const E=l[m];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(E.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:i}}function Vp(t){const e=new kN(t),n=[],i=[];function s(u){l.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function c(u){e.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function zN(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Vp(t),e.set(s,[a])):r>=o.length?(a=new Vp(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const VN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HN=`uniform sampler2D shadow_pass;
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
}`,GN=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],WN=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Hp=new Ct,Gr=new $,Wc=new $;function $N(t,e,n){let i=new I_;const s=new at,r=new at,o=new It,a=new a2,c=new l2,l={},u=n.maxTextureSize,d={[as]:vn,[vn]:as,[oi]:oi},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:VN,fragmentShader:HN}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da;let m=this.type;this.render=function(A,L,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===GP&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Da);const M=t.getRenderTarget(),U=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Ni),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=m!==this.type;z&&L.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(k=>k.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,k=A.length;G<k;G++){const w=A[G],T=w.shadow;if(T===void 0){Xe("WebGLShadowMap:",w,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;s.copy(T.mapSize);const V=T.getFrameExtents();s.multiply(V),r.copy(T.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,T.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,T.mapSize.y=r.y));const X=t.state.buffers.depth.getReversed();if(T.camera._reversedDepth=X,T.map===null||z===!0){if(T.map!==null&&(T.map.depthTexture!==null&&(T.map.depthTexture.dispose(),T.map.depthTexture=null),T.map.dispose()),this.type===Yr){if(w.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}T.map=new mi(s.x,s.y,{format:Sr,type:zi,minFilter:en,magFilter:en,generateMipmaps:!1}),T.map.texture.name=w.name+".shadowMap",T.map.depthTexture=new Mo(s.x,s.y,li),T.map.depthTexture.name=w.name+".shadowMapDepth",T.map.depthTexture.format=Vi,T.map.depthTexture.compareFunction=null,T.map.depthTexture.minFilter=Wt,T.map.depthTexture.magFilter=Wt}else w.isPointLight?(T.map=new H_(s.x),T.map.depthTexture=new K3(s.x,_i)):(T.map=new mi(s.x,s.y),T.map.depthTexture=new Mo(s.x,s.y,_i)),T.map.depthTexture.name=w.name+".shadowMap",T.map.depthTexture.format=Vi,this.type===Da?(T.map.depthTexture.compareFunction=X?Jf:Zf,T.map.depthTexture.minFilter=en,T.map.depthTexture.magFilter=en):(T.map.depthTexture.compareFunction=null,T.map.depthTexture.minFilter=Wt,T.map.depthTexture.magFilter=Wt);T.camera.updateProjectionMatrix()}const re=T.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<re;ce++){if(T.map.isWebGLCubeRenderTarget)t.setRenderTarget(T.map,ce),t.clear();else{ce===0&&(t.setRenderTarget(T.map),t.clear());const pe=T.getViewport(ce);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),N.viewport(o)}if(w.isPointLight){const pe=T.camera,Ge=T.matrix,ut=w.distance||pe.far;ut!==pe.far&&(pe.far=ut,pe.updateProjectionMatrix()),Gr.setFromMatrixPosition(w.matrixWorld),pe.position.copy(Gr),Wc.copy(pe.position),Wc.add(GN[ce]),pe.up.copy(WN[ce]),pe.lookAt(Wc),pe.updateMatrixWorld(),Ge.makeTranslation(-Gr.x,-Gr.y,-Gr.z),Hp.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),T._frustum.setFromProjectionMatrix(Hp,pe.coordinateSystem,pe.reversedDepth)}else T.updateMatrices(w);i=T.getFrustum(),y(L,S,T.camera,w,this.type)}T.isPointLightShadow!==!0&&this.type===Yr&&x(T,S),T.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(M,U,D)};function x(A,L){const S=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new mi(s.x,s.y,{format:Sr,type:zi})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(L,null,S,f,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(L,null,S,h,_,null)}function E(A,L,S,M){let U=null;const D=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)U=D;else if(U=S.isPointLight===!0?c:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const N=U.uuid,z=L.uuid;let G=l[N];G===void 0&&(G={},l[N]=G);let k=G[z];k===void 0&&(k=U.clone(),G[z]=k,L.addEventListener("dispose",C)),U=k}if(U.visible=L.visible,U.wireframe=L.wireframe,M===Yr?U.side=L.shadowSide!==null?L.shadowSide:L.side:U.side=L.shadowSide!==null?L.shadowSide:d[L.side],U.alphaMap=L.alphaMap,U.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,U.map=L.map,U.clipShadows=L.clipShadows,U.clippingPlanes=L.clippingPlanes,U.clipIntersection=L.clipIntersection,U.displacementMap=L.displacementMap,U.displacementScale=L.displacementScale,U.displacementBias=L.displacementBias,U.wireframeLinewidth=L.wireframeLinewidth,U.linewidth=L.linewidth,S.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const N=t.properties.get(U);N.light=S}return U}function y(A,L,S,M,U){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===Yr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const z=e.update(A),G=A.material;if(Array.isArray(G)){const k=z.groups;for(let w=0,T=k.length;w<T;w++){const V=k[w],X=G[V.materialIndex];if(X&&X.visible){const re=E(A,X,M,U);A.onBeforeShadow(t,A,L,S,z,re,V),t.renderBufferDirect(S,null,z,re,A,V),A.onAfterShadow(t,A,L,S,z,re,V)}}}else if(G.visible){const k=E(A,G,M,U);A.onBeforeShadow(t,A,L,S,z,k,null),t.renderBufferDirect(S,null,z,k,A,null),A.onAfterShadow(t,A,L,S,z,k,null)}}const N=A.children;for(let z=0,G=N.length;z<G;z++)y(N[z],L,S,M,U)}function C(A){A.target.removeEventListener("dispose",C);for(const S in l){const M=l[S],U=A.target.uuid;U in M&&(M[U].dispose(),delete M[U])}}}function XN(t,e){function n(){let H=!1;const Ee=new It;let Se=null;const Ue=new It(0,0,0,0);return{setMask:function(ve){Se!==ve&&!H&&(t.colorMask(ve,ve,ve,ve),Se=ve)},setLocked:function(ve){H=ve},setClear:function(ve,ie,Fe,Ke,wt){wt===!0&&(ve*=Ke,ie*=Ke,Fe*=Ke),Ee.set(ve,ie,Fe,Ke),Ue.equals(Ee)===!1&&(t.clearColor(ve,ie,Fe,Ke),Ue.copy(Ee))},reset:function(){H=!1,Se=null,Ue.set(-1,0,0,0)}}}function i(){let H=!1,Ee=!1,Se=null,Ue=null,ve=null;return{setReversed:function(ie){if(Ee!==ie){const Fe=e.get("EXT_clip_control");ie?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Ee=ie;const Ke=ve;ve=null,this.setClear(Ke)}},getReversed:function(){return Ee},setTest:function(ie){ie?ye(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(ie){Se!==ie&&!H&&(t.depthMask(ie),Se=ie)},setFunc:function(ie){if(Ee&&(ie=b3[ie]),Ue!==ie){switch(ie){case yu:t.depthFunc(t.NEVER);break;case Su:t.depthFunc(t.ALWAYS);break;case Mu:t.depthFunc(t.LESS);break;case xr:t.depthFunc(t.LEQUAL);break;case bu:t.depthFunc(t.EQUAL);break;case Eu:t.depthFunc(t.GEQUAL);break;case wu:t.depthFunc(t.GREATER);break;case Tu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ue=ie}},setLocked:function(ie){H=ie},setClear:function(ie){ve!==ie&&(ve=ie,Ee&&(ie=1-ie),t.clearDepth(ie))},reset:function(){H=!1,Se=null,Ue=null,ve=null,Ee=!1}}}function s(){let H=!1,Ee=null,Se=null,Ue=null,ve=null,ie=null,Fe=null,Ke=null,wt=null;return{setTest:function(gt){H||(gt?ye(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(gt){Ee!==gt&&!H&&(t.stencilMask(gt),Ee=gt)},setFunc:function(gt,xi,yi){(Se!==gt||Ue!==xi||ve!==yi)&&(t.stencilFunc(gt,xi,yi),Se=gt,Ue=xi,ve=yi)},setOp:function(gt,xi,yi){(ie!==gt||Fe!==xi||Ke!==yi)&&(t.stencilOp(gt,xi,yi),ie=gt,Fe=xi,Ke=yi)},setLocked:function(gt){H=gt},setClear:function(gt){wt!==gt&&(t.clearStencil(gt),wt=gt)},reset:function(){H=!1,Ee=null,Se=null,Ue=null,ve=null,ie=null,Fe=null,Ke=null,wt=null}}}const r=new n,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,_=!1,p=null,m=null,x=null,E=null,y=null,C=null,A=null,L=new rt(0,0,0),S=0,M=!1,U=null,D=null,N=null,z=null,G=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let w=!1,T=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(V)[1]),w=T>=1):V.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),w=T>=2);let X=null,re={};const ce=t.getParameter(t.SCISSOR_BOX),pe=t.getParameter(t.VIEWPORT),Ge=new It().fromArray(ce),ut=new It().fromArray(pe);function dt(H,Ee,Se,Ue){const ve=new Uint8Array(4),ie=t.createTexture();t.bindTexture(H,ie),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<Se;Fe++)H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?t.texImage3D(Ee,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(Ee+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return ie}const ae={};ae[t.TEXTURE_2D]=dt(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=dt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=dt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=dt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(t.DEPTH_TEST),o.setFunc(xr),Q(!1),le(Hh),ye(t.CULL_FACE),q(Ni);function ye(H){u[H]!==!0&&(t.enable(H),u[H]=!0)}function Me(H){u[H]!==!1&&(t.disable(H),u[H]=!1)}function je(H,Ee){return d[H]!==Ee?(t.bindFramebuffer(H,Ee),d[H]=Ee,H===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Ee),H===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Ee),!0):!1}function He(H,Ee){let Se=h,Ue=!1;if(H){Se=f.get(Ee),Se===void 0&&(Se=[],f.set(Ee,Se));const ve=H.textures;if(Se.length!==ve.length||Se[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Fe=ve.length;ie<Fe;ie++)Se[ie]=t.COLOR_ATTACHMENT0+ie;Se.length=ve.length,Ue=!0}}else Se[0]!==t.BACK&&(Se[0]=t.BACK,Ue=!0);Ue&&t.drawBuffers(Se)}function qe(H){return g!==H?(t.useProgram(H),g=H,!0):!1}const F={[ws]:t.FUNC_ADD,[$P]:t.FUNC_SUBTRACT,[XP]:t.FUNC_REVERSE_SUBTRACT};F[qP]=t.MIN,F[YP]=t.MAX;const B={[jP]:t.ZERO,[KP]:t.ONE,[ZP]:t.SRC_COLOR,[vu]:t.SRC_ALPHA,[i3]:t.SRC_ALPHA_SATURATE,[t3]:t.DST_COLOR,[QP]:t.DST_ALPHA,[JP]:t.ONE_MINUS_SRC_COLOR,[xu]:t.ONE_MINUS_SRC_ALPHA,[n3]:t.ONE_MINUS_DST_COLOR,[e3]:t.ONE_MINUS_DST_ALPHA,[s3]:t.CONSTANT_COLOR,[r3]:t.ONE_MINUS_CONSTANT_COLOR,[o3]:t.CONSTANT_ALPHA,[a3]:t.ONE_MINUS_CONSTANT_ALPHA};function q(H,Ee,Se,Ue,ve,ie,Fe,Ke,wt,gt){if(H===Ni){_===!0&&(Me(t.BLEND),_=!1);return}if(_===!1&&(ye(t.BLEND),_=!0),H!==WP){if(H!==p||gt!==M){if((m!==ws||y!==ws)&&(t.blendEquation(t.FUNC_ADD),m=ws,y=ws),gt)switch(H){case fr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _u:t.blendFunc(t.ONE,t.ONE);break;case Gh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ct("WebGLState: Invalid blending: ",H);break}else switch(H){case fr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _u:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Gh:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wh:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",H);break}x=null,E=null,C=null,A=null,L.set(0,0,0),S=0,p=H,M=gt}return}ve=ve||Ee,ie=ie||Se,Fe=Fe||Ue,(Ee!==m||ve!==y)&&(t.blendEquationSeparate(F[Ee],F[ve]),m=Ee,y=ve),(Se!==x||Ue!==E||ie!==C||Fe!==A)&&(t.blendFuncSeparate(B[Se],B[Ue],B[ie],B[Fe]),x=Se,E=Ue,C=ie,A=Fe),(Ke.equals(L)===!1||wt!==S)&&(t.blendColor(Ke.r,Ke.g,Ke.b,wt),L.copy(Ke),S=wt),p=H,M=!1}function oe(H,Ee){H.side===oi?Me(t.CULL_FACE):ye(t.CULL_FACE);let Se=H.side===vn;Ee&&(Se=!Se),Q(Se),H.blending===fr&&H.transparent===!1?q(Ni):q(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const Ue=H.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),me(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ye(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(H){U!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),U=H)}function le(H){H!==VP?(ye(t.CULL_FACE),H!==D&&(H===Hh?t.cullFace(t.BACK):H===HP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),D=H}function I(H){H!==N&&(w&&t.lineWidth(H),N=H)}function me(H,Ee,Se){H?(ye(t.POLYGON_OFFSET_FILL),(z!==Ee||G!==Se)&&(z=Ee,G=Se,o.getReversed()&&(Ee=-Ee),t.polygonOffset(Ee,Se))):Me(t.POLYGON_OFFSET_FILL)}function de(H){H?ye(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function se(H){H===void 0&&(H=t.TEXTURE0+k-1),X!==H&&(t.activeTexture(H),X=H)}function he(H,Ee,Se){Se===void 0&&(X===null?Se=t.TEXTURE0+k-1:Se=X);let Ue=re[Se];Ue===void 0&&(Ue={type:void 0,texture:void 0},re[Se]=Ue),(Ue.type!==H||Ue.texture!==Ee)&&(X!==Se&&(t.activeTexture(Se),X=Se),t.bindTexture(H,Ee||ae[H]),Ue.type=H,Ue.texture=Ee)}function R(){const H=re[X];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function O(){try{t.compressedTexImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function Y(){try{t.texSubImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function ne(){try{t.texSubImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function Te(){try{t.compressedTexSubImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function _e(){try{t.texStorage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function Ne(){try{t.texStorage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function Be(){try{t.texImage2D(...arguments)}catch(H){ct("WebGLState:",H)}}function ge(){try{t.texImage3D(...arguments)}catch(H){ct("WebGLState:",H)}}function xe(H){Ge.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),Ge.copy(H))}function Ae(H){ut.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),ut.copy(H))}function Le(H,Ee){let Se=l.get(Ee);Se===void 0&&(Se=new WeakMap,l.set(Ee,Se));let Ue=Se.get(H);Ue===void 0&&(Ue=t.getUniformBlockIndex(Ee,H.name),Se.set(H,Ue))}function De(H,Ee){const Ue=l.get(Ee).get(H);c.get(Ee)!==Ue&&(t.uniformBlockBinding(Ee,Ue,H.__bindingPointIndex),c.set(Ee,Ue))}function Ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},X=null,re={},d={},f=new WeakMap,h=[],g=null,_=!1,p=null,m=null,x=null,E=null,y=null,C=null,A=null,L=new rt(0,0,0),S=0,M=!1,U=null,D=null,N=null,z=null,G=null,Ge.set(0,0,t.canvas.width,t.canvas.height),ut.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:Me,bindFramebuffer:je,drawBuffers:He,useProgram:qe,setBlending:q,setMaterial:oe,setFlipSided:Q,setCullFace:le,setLineWidth:I,setPolygonOffset:me,setScissorTest:de,activeTexture:se,bindTexture:he,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:O,texImage2D:Be,texImage3D:ge,updateUBOMapping:Le,uniformBlockBinding:De,texStorage2D:_e,texStorage3D:Ne,texSubImage2D:Y,texSubImage3D:ne,compressedTexSubImage2D:j,compressedTexSubImage3D:Te,scissor:xe,viewport:Ae,reset:Ze}}function qN(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return h?new OffscreenCanvas(R,b):rl("canvas")}function _(R,b,O){let Y=1;const ne=he(R);if((ne.width>O||ne.height>O)&&(Y=O/Math.max(ne.width,ne.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Y*ne.width),Te=Math.floor(Y*ne.height);d===void 0&&(d=g(j,Te));const _e=b?g(j,Te):d;return _e.width=j,_e.height=Te,_e.getContext("2d").drawImage(R,0,0,j,Te),Xe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+j+"x"+Te+")."),_e}else return"data"in R&&Xe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){t.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(R,b,O,Y,ne=!1){if(R!==null){if(t[R]!==void 0)return t[R];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=b;if(b===t.RED&&(O===t.FLOAT&&(j=t.R32F),O===t.HALF_FLOAT&&(j=t.R16F),O===t.UNSIGNED_BYTE&&(j=t.R8)),b===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(j=t.R8UI),O===t.UNSIGNED_SHORT&&(j=t.R16UI),O===t.UNSIGNED_INT&&(j=t.R32UI),O===t.BYTE&&(j=t.R8I),O===t.SHORT&&(j=t.R16I),O===t.INT&&(j=t.R32I)),b===t.RG&&(O===t.FLOAT&&(j=t.RG32F),O===t.HALF_FLOAT&&(j=t.RG16F),O===t.UNSIGNED_BYTE&&(j=t.RG8)),b===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(j=t.RG8UI),O===t.UNSIGNED_SHORT&&(j=t.RG16UI),O===t.UNSIGNED_INT&&(j=t.RG32UI),O===t.BYTE&&(j=t.RG8I),O===t.SHORT&&(j=t.RG16I),O===t.INT&&(j=t.RG32I)),b===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(j=t.RGB8UI),O===t.UNSIGNED_SHORT&&(j=t.RGB16UI),O===t.UNSIGNED_INT&&(j=t.RGB32UI),O===t.BYTE&&(j=t.RGB8I),O===t.SHORT&&(j=t.RGB16I),O===t.INT&&(j=t.RGB32I)),b===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),O===t.UNSIGNED_INT&&(j=t.RGBA32UI),O===t.BYTE&&(j=t.RGBA8I),O===t.SHORT&&(j=t.RGBA16I),O===t.INT&&(j=t.RGBA32I)),b===t.RGB&&(O===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),b===t.RGBA){const Te=ne?il:ot.getTransfer(Y);O===t.FLOAT&&(j=t.RGBA32F),O===t.HALF_FLOAT&&(j=t.RGBA16F),O===t.UNSIGNED_BYTE&&(j=Te===_t?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(R,b){let O;return R?b===null||b===_i||b===So?O=t.DEPTH24_STENCIL8:b===li?O=t.DEPTH32F_STENCIL8:b===yo&&(O=t.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===_i||b===So?O=t.DEPTH_COMPONENT24:b===li?O=t.DEPTH_COMPONENT32F:b===yo&&(O=t.DEPTH_COMPONENT16),O}function C(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){const b=R.target;b.removeEventListener("dispose",A),S(b),b.isVideoTexture&&u.delete(b)}function L(R){const b=R.target;b.removeEventListener("dispose",L),U(b)}function S(R){const b=i.get(R);if(b.__webglInit===void 0)return;const O=R.source,Y=f.get(O);if(Y){const ne=Y[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(R),Object.keys(Y).length===0&&f.delete(O)}i.remove(R)}function M(R){const b=i.get(R);t.deleteTexture(b.__webglTexture);const O=R.source,Y=f.get(O);delete Y[b.__cacheKey],o.memory.textures--}function U(R){const b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let ne=0;ne<b.__webglFramebuffer[Y].length;ne++)t.deleteFramebuffer(b.__webglFramebuffer[Y][ne]);else t.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)t.deleteFramebuffer(b.__webglFramebuffer[Y]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=R.textures;for(let Y=0,ne=O.length;Y<ne;Y++){const j=i.get(O[Y]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(R)}let D=0;function N(){D=0}function z(){const R=D;return R>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function G(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function k(R,b){const O=i.get(R);if(R.isVideoTexture&&de(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const Y=R.image;if(Y===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(O,R,b);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+b)}function w(R,b){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){ae(O,R,b);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+b)}function T(R,b){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){ae(O,R,b);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+b)}function V(R,b){const O=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){ye(O,R,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+b)}const X={[Au]:t.REPEAT,[Ii]:t.CLAMP_TO_EDGE,[Cu]:t.MIRRORED_REPEAT},re={[Wt]:t.NEAREST,[u3]:t.NEAREST_MIPMAP_NEAREST,[Ko]:t.NEAREST_MIPMAP_LINEAR,[en]:t.LINEAR,[dc]:t.LINEAR_MIPMAP_NEAREST,[Ps]:t.LINEAR_MIPMAP_LINEAR},ce={[p3]:t.NEVER,[x3]:t.ALWAYS,[m3]:t.LESS,[Zf]:t.LEQUAL,[g3]:t.EQUAL,[Jf]:t.GEQUAL,[_3]:t.GREATER,[v3]:t.NOTEQUAL};function pe(R,b){if(b.type===li&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===dc||b.magFilter===Ko||b.magFilter===Ps||b.minFilter===en||b.minFilter===dc||b.minFilter===Ko||b.minFilter===Ps)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,X[b.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,X[b.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,X[b.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,re[b.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,re[b.minFilter]),b.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Wt||b.minFilter!==Ko&&b.minFilter!==Ps||b.type===li&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ge(R,b){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));const Y=b.source;let ne=f.get(Y);ne===void 0&&(ne={},f.set(Y,ne));const j=G(b);if(j!==R.__cacheKey){ne[j]===void 0&&(ne[j]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ne[j].usedTimes++;const Te=ne[R.__cacheKey];Te!==void 0&&(ne[R.__cacheKey].usedTimes--,Te.usedTimes===0&&M(b)),R.__cacheKey=j,R.__webglTexture=ne[j].texture}return O}function ut(R,b,O){return Math.floor(Math.floor(R/O)/b)}function dt(R,b,O,Y){const j=R.updateRanges;if(j.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,O,Y,b.data);else{j.sort((ge,xe)=>ge.start-xe.start);let Te=0;for(let ge=1;ge<j.length;ge++){const xe=j[Te],Ae=j[ge],Le=xe.start+xe.count,De=ut(Ae.start,b.width,4),Ze=ut(xe.start,b.width,4);Ae.start<=Le+1&&De===Ze&&ut(Ae.start+Ae.count-1,b.width,4)===De?xe.count=Math.max(xe.count,Ae.start+Ae.count-xe.start):(++Te,j[Te]=Ae)}j.length=Te+1;const _e=t.getParameter(t.UNPACK_ROW_LENGTH),Ne=t.getParameter(t.UNPACK_SKIP_PIXELS),Be=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let ge=0,xe=j.length;ge<xe;ge++){const Ae=j[ge],Le=Math.floor(Ae.start/4),De=Math.ceil(Ae.count/4),Ze=Le%b.width,H=Math.floor(Le/b.width),Ee=De,Se=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,H),n.texSubImage2D(t.TEXTURE_2D,0,Ze,H,Ee,Se,O,Y,b.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,_e),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(t.UNPACK_SKIP_ROWS,Be)}}function ae(R,b,O){let Y=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=t.TEXTURE_3D);const ne=Ge(R,b),j=b.source;n.bindTexture(Y,R.__webglTexture,t.TEXTURE0+O);const Te=i.get(j);if(j.version!==Te.__version||ne===!0){n.activeTexture(t.TEXTURE0+O);const _e=ot.getPrimaries(ot.workingColorSpace),Ne=b.colorSpace===is?null:ot.getPrimaries(b.colorSpace),Be=b.colorSpace===is||_e===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ge=_(b.image,!1,s.maxTextureSize);ge=se(b,ge);const xe=r.convert(b.format,b.colorSpace),Ae=r.convert(b.type);let Le=E(b.internalFormat,xe,Ae,b.colorSpace,b.isVideoTexture);pe(Y,b);let De;const Ze=b.mipmaps,H=b.isVideoTexture!==!0,Ee=Te.__version===void 0||ne===!0,Se=j.dataReady,Ue=C(b,ge);if(b.isDepthTexture)Le=y(b.format===Ls,b.type),Ee&&(H?n.texStorage2D(t.TEXTURE_2D,1,Le,ge.width,ge.height):n.texImage2D(t.TEXTURE_2D,0,Le,ge.width,ge.height,0,xe,Ae,null));else if(b.isDataTexture)if(Ze.length>0){H&&Ee&&n.texStorage2D(t.TEXTURE_2D,Ue,Le,Ze[0].width,Ze[0].height);for(let ve=0,ie=Ze.length;ve<ie;ve++)De=Ze[ve],H?Se&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,De.width,De.height,xe,Ae,De.data):n.texImage2D(t.TEXTURE_2D,ve,Le,De.width,De.height,0,xe,Ae,De.data);b.generateMipmaps=!1}else H?(Ee&&n.texStorage2D(t.TEXTURE_2D,Ue,Le,ge.width,ge.height),Se&&dt(b,ge,xe,Ae)):n.texImage2D(t.TEXTURE_2D,0,Le,ge.width,ge.height,0,xe,Ae,ge.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){H&&Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ue,Le,Ze[0].width,Ze[0].height,ge.depth);for(let ve=0,ie=Ze.length;ve<ie;ve++)if(De=Ze[ve],b.format!==Gn)if(xe!==null)if(H){if(Se)if(b.layerUpdates.size>0){const Fe=xp(De.width,De.height,b.format,b.type);for(const Ke of b.layerUpdates){const wt=De.data.subarray(Ke*Fe/De.data.BYTES_PER_ELEMENT,(Ke+1)*Fe/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,Ke,De.width,De.height,1,xe,wt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,De.width,De.height,ge.depth,xe,De.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ve,Le,De.width,De.height,ge.depth,0,De.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Se&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,De.width,De.height,ge.depth,xe,Ae,De.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ve,Le,De.width,De.height,ge.depth,0,xe,Ae,De.data)}else{H&&Ee&&n.texStorage2D(t.TEXTURE_2D,Ue,Le,Ze[0].width,Ze[0].height);for(let ve=0,ie=Ze.length;ve<ie;ve++)De=Ze[ve],b.format!==Gn?xe!==null?H?Se&&n.compressedTexSubImage2D(t.TEXTURE_2D,ve,0,0,De.width,De.height,xe,De.data):n.compressedTexImage2D(t.TEXTURE_2D,ve,Le,De.width,De.height,0,De.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Se&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,De.width,De.height,xe,Ae,De.data):n.texImage2D(t.TEXTURE_2D,ve,Le,De.width,De.height,0,xe,Ae,De.data)}else if(b.isDataArrayTexture)if(H){if(Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ue,Le,ge.width,ge.height,ge.depth),Se)if(b.layerUpdates.size>0){const ve=xp(ge.width,ge.height,b.format,b.type);for(const ie of b.layerUpdates){const Fe=ge.data.subarray(ie*ve/ge.data.BYTES_PER_ELEMENT,(ie+1)*ve/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,ge.width,ge.height,1,xe,Ae,Fe)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,xe,Ae,ge.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ge.width,ge.height,ge.depth,0,xe,Ae,ge.data);else if(b.isData3DTexture)H?(Ee&&n.texStorage3D(t.TEXTURE_3D,Ue,Le,ge.width,ge.height,ge.depth),Se&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,xe,Ae,ge.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ge.width,ge.height,ge.depth,0,xe,Ae,ge.data);else if(b.isFramebufferTexture){if(Ee)if(H)n.texStorage2D(t.TEXTURE_2D,Ue,Le,ge.width,ge.height);else{let ve=ge.width,ie=ge.height;for(let Fe=0;Fe<Ue;Fe++)n.texImage2D(t.TEXTURE_2D,Fe,Le,ve,ie,0,xe,Ae,null),ve>>=1,ie>>=1}}else if(Ze.length>0){if(H&&Ee){const ve=he(Ze[0]);n.texStorage2D(t.TEXTURE_2D,Ue,Le,ve.width,ve.height)}for(let ve=0,ie=Ze.length;ve<ie;ve++)De=Ze[ve],H?Se&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,xe,Ae,De):n.texImage2D(t.TEXTURE_2D,ve,Le,xe,Ae,De);b.generateMipmaps=!1}else if(H){if(Ee){const ve=he(ge);n.texStorage2D(t.TEXTURE_2D,Ue,Le,ve.width,ve.height)}Se&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ae,ge)}else n.texImage2D(t.TEXTURE_2D,0,Le,xe,Ae,ge);p(b)&&m(Y),Te.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ye(R,b,O){if(b.image.length!==6)return;const Y=Ge(R,b),ne=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+O);const j=i.get(ne);if(ne.version!==j.__version||Y===!0){n.activeTexture(t.TEXTURE0+O);const Te=ot.getPrimaries(ot.workingColorSpace),_e=b.colorSpace===is?null:ot.getPrimaries(b.colorSpace),Ne=b.colorSpace===is||Te===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Be=b.isCompressedTexture||b.image[0].isCompressedTexture,ge=b.image[0]&&b.image[0].isDataTexture,xe=[];for(let ie=0;ie<6;ie++)!Be&&!ge?xe[ie]=_(b.image[ie],!0,s.maxCubemapSize):xe[ie]=ge?b.image[ie].image:b.image[ie],xe[ie]=se(b,xe[ie]);const Ae=xe[0],Le=r.convert(b.format,b.colorSpace),De=r.convert(b.type),Ze=E(b.internalFormat,Le,De,b.colorSpace),H=b.isVideoTexture!==!0,Ee=j.__version===void 0||Y===!0,Se=ne.dataReady;let Ue=C(b,Ae);pe(t.TEXTURE_CUBE_MAP,b);let ve;if(Be){H&&Ee&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,Ze,Ae.width,Ae.height);for(let ie=0;ie<6;ie++){ve=xe[ie].mipmaps;for(let Fe=0;Fe<ve.length;Fe++){const Ke=ve[Fe];b.format!==Gn?Le!==null?H?Se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,Ke.width,Ke.height,Le,Ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,Ze,Ke.width,Ke.height,0,Ke.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,Ke.width,Ke.height,Le,De,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,Ze,Ke.width,Ke.height,0,Le,De,Ke.data)}}}else{if(ve=b.mipmaps,H&&Ee){ve.length>0&&Ue++;const ie=he(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,Ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ge){H?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,xe[ie].width,xe[ie].height,Le,De,xe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ze,xe[ie].width,xe[ie].height,0,Le,De,xe[ie].data);for(let Fe=0;Fe<ve.length;Fe++){const wt=ve[Fe].image[ie].image;H?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,wt.width,wt.height,Le,De,wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,Ze,wt.width,wt.height,0,Le,De,wt.data)}}else{H?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,De,xe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ze,Le,De,xe[ie]);for(let Fe=0;Fe<ve.length;Fe++){const Ke=ve[Fe];H?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,Le,De,Ke.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,Ze,Le,De,Ke.image[ie])}}}p(b)&&m(t.TEXTURE_CUBE_MAP),j.__version=ne.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Me(R,b,O,Y,ne,j){const Te=r.convert(O.format,O.colorSpace),_e=r.convert(O.type),Ne=E(O.internalFormat,Te,_e,O.colorSpace),Be=i.get(b),ge=i.get(O);if(ge.__renderTarget=b,!Be.__hasExternalTextures){const xe=Math.max(1,b.width>>j),Ae=Math.max(1,b.height>>j);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,j,Ne,xe,Ae,b.depth,0,Te,_e,null):n.texImage2D(ne,j,Ne,xe,Ae,0,Te,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),me(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ne,ge.__webglTexture,0,I(b)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ne,ge.__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(R,b,O){if(t.bindRenderbuffer(t.RENDERBUFFER,R),b.depthBuffer){const Y=b.depthTexture,ne=Y&&Y.isDepthTexture?Y.type:null,j=y(b.stencilBuffer,ne),Te=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;me(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(b),j,b.width,b.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(b),j,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,j,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,R)}else{const Y=b.textures;for(let ne=0;ne<Y.length;ne++){const j=Y[ne],Te=r.convert(j.format,j.colorSpace),_e=r.convert(j.type),Ne=E(j.internalFormat,Te,_e,j.colorSpace);me(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(b),Ne,b.width,b.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(b),Ne,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Ne,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(R,b,O){const Y=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(b.depthTexture);if(ne.__renderTarget=b,(!ne.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),pe(t.TEXTURE_CUBE_MAP,b.depthTexture);const Be=r.convert(b.depthTexture.format),ge=r.convert(b.depthTexture.type);let xe;b.depthTexture.format===Vi?xe=t.DEPTH_COMPONENT24:b.depthTexture.format===Ls&&(xe=t.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,xe,b.width,b.height,0,Be,ge,null)}}else k(b.depthTexture,0);const j=ne.__webglTexture,Te=I(b),_e=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,Ne=b.depthTexture.format===Ls?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===Vi)me(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ne,_e,j,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Ne,_e,j,0);else if(b.depthTexture.format===Ls)me(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ne,_e,j,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Ne,_e,j,0);else throw new Error("Unknown depthTexture format")}function qe(R){const b=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",ne)};Y.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=Y}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(O)for(let Y=0;Y<6;Y++)He(b.__webglFramebuffer[Y],R,Y);else{const Y=R.texture.mipmaps;Y&&Y.length>0?He(b.__webglFramebuffer[0],R,0):He(b.__webglFramebuffer,R,0)}else if(O){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=t.createRenderbuffer(),je(b.__webglDepthbuffer[Y],R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,j)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),je(b.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,j)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function F(R,b,O){const Y=i.get(R);b!==void 0&&Me(Y.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&qe(R)}function B(R){const b=R.texture,O=i.get(R),Y=i.get(b);R.addEventListener("dispose",L);const ne=R.textures,j=R.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=b.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[_e]=[];for(let Ne=0;Ne<b.mipmaps.length;Ne++)O.__webglFramebuffer[_e][Ne]=t.createFramebuffer()}else O.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let _e=0;_e<b.mipmaps.length;_e++)O.__webglFramebuffer[_e]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Te)for(let _e=0,Ne=ne.length;_e<Ne;_e++){const Be=i.get(ne[_e]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&me(R)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _e=0;_e<ne.length;_e++){const Ne=ne[_e];O.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[_e]);const Be=r.convert(Ne.format,Ne.colorSpace),ge=r.convert(Ne.type),xe=E(Ne.internalFormat,Be,ge,Ne.colorSpace,R.isXRRenderTarget===!0),Ae=I(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,O.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),je(O.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),pe(t.TEXTURE_CUBE_MAP,b);for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ne=0;Ne<b.mipmaps.length;Ne++)Me(O.__webglFramebuffer[_e][Ne],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne);else Me(O.__webglFramebuffer[_e],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);p(b)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let _e=0,Ne=ne.length;_e<Ne;_e++){const Be=ne[_e],ge=i.get(Be);let xe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,ge.__webglTexture),pe(xe,Be),Me(O.__webglFramebuffer,R,Be,t.COLOR_ATTACHMENT0+_e,xe,0),p(Be)&&m(xe)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,Y.__webglTexture),pe(_e,b),b.mipmaps&&b.mipmaps.length>0)for(let Ne=0;Ne<b.mipmaps.length;Ne++)Me(O.__webglFramebuffer[Ne],R,b,t.COLOR_ATTACHMENT0,_e,Ne);else Me(O.__webglFramebuffer,R,b,t.COLOR_ATTACHMENT0,_e,0);p(b)&&m(_e),n.unbindTexture()}R.depthBuffer&&qe(R)}function q(R){const b=R.textures;for(let O=0,Y=b.length;O<Y;O++){const ne=b[O];if(p(ne)){const j=x(R),Te=i.get(ne).__webglTexture;n.bindTexture(j,Te),m(j),n.unbindTexture()}}}const oe=[],Q=[];function le(R){if(R.samples>0){if(me(R)===!1){const b=R.textures,O=R.width,Y=R.height;let ne=t.COLOR_BUFFER_BIT;const j=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(R),_e=b.length>1;if(_e)for(let Be=0;Be<b.length;Be++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Ne=R.texture.mipmaps;Ne&&Ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Be=0;Be<b.length;Be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),_e){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Be]);const ge=i.get(b[Be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ge,0)}t.blitFramebuffer(0,0,O,Y,0,0,O,Y,ne,t.NEAREST),c===!0&&(oe.length=0,Q.length=0,oe.push(t.COLOR_ATTACHMENT0+Be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(oe.push(j),Q.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Q)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,oe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let Be=0;Be<b.length;Be++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Be]);const ge=i.get(b[Be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const b=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function I(R){return Math.min(s.maxSamples,R.samples)}function me(R){const b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function de(R){const b=o.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function se(R,b){const O=R.colorSpace,Y=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Mr&&O!==is&&(ot.getTransfer(O)===_t?(Y!==Gn||ne!==Nn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",O)),b}function he(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=k,this.setTexture2DArray=w,this.setTexture3D=T,this.setTextureCube=V,this.rebindTextures=F,this.setupRenderTarget=B,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function YN(t,e){function n(i,s=is){let r;const o=ot.getTransfer(s);if(i===Nn)return t.UNSIGNED_BYTE;if(i===Xf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===qf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===M_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===b_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===y_)return t.BYTE;if(i===S_)return t.SHORT;if(i===yo)return t.UNSIGNED_SHORT;if(i===$f)return t.INT;if(i===_i)return t.UNSIGNED_INT;if(i===li)return t.FLOAT;if(i===zi)return t.HALF_FLOAT;if(i===E_)return t.ALPHA;if(i===w_)return t.RGB;if(i===Gn)return t.RGBA;if(i===Vi)return t.DEPTH_COMPONENT;if(i===Ls)return t.DEPTH_STENCIL;if(i===T_)return t.RED;if(i===Yf)return t.RED_INTEGER;if(i===Sr)return t.RG;if(i===jf)return t.RG_INTEGER;if(i===Kf)return t.RGBA_INTEGER;if(i===Ia||i===Na||i===Ua||i===Fa)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ru||i===Pu||i===Lu||i===Du)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ru)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Du)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Iu||i===Nu||i===Uu||i===Fu||i===Ou||i===Bu||i===ku)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Iu||i===Nu)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Uu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fu)return r.COMPRESSED_R11_EAC;if(i===Ou)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Bu)return r.COMPRESSED_RG11_EAC;if(i===ku)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zu||i===Vu||i===Hu||i===Gu||i===Wu||i===$u||i===Xu||i===qu||i===Yu||i===ju||i===Ku||i===Zu||i===Ju||i===Qu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===zu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$u)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ju)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ku)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ju)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ef||i===tf||i===nf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ef)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sf||i===rf||i===of||i===af)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===sf)return r.COMPRESSED_RED_RGTC1_EXT;if(i===rf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===of)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===af)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const jN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KN=`
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

}`;class ZN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new O_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Un({vertexShader:jN,fragmentShader:KN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jt(new Bl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JN extends Ar{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",p=new ZN,m={},x=n.getContextAttributes();let E=null,y=null;const C=[],A=[],L=new at;let S=null;const M=new In;M.viewport=new It;const U=new In;U.viewport=new It;const D=[M,U],N=new u2;let z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ye=C[ae];return ye===void 0&&(ye=new yc,C[ae]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ae){let ye=C[ae];return ye===void 0&&(ye=new yc,C[ae]=ye),ye.getGripSpace()},this.getHand=function(ae){let ye=C[ae];return ye===void 0&&(ye=new yc,C[ae]=ye),ye.getHandSpace()};function k(ae){const ye=A.indexOf(ae.inputSource);if(ye===-1)return;const Me=C[ye];Me!==void 0&&(Me.update(ae.inputSource,ae.frame,l||o),Me.dispatchEvent({type:ae.type,data:ae.inputSource}))}function w(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",w),s.removeEventListener("inputsourceschange",T);for(let ae=0;ae<C.length;ae++){const ye=A[ae];ye!==null&&(A[ae]=null,C[ae].disconnect(ye))}z=null,G=null,p.reset();for(const ae in m)delete m[ae];e.setRenderTarget(E),h=null,f=null,d=null,s=null,y=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){a=ae,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ae){l=ae},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",w),s.addEventListener("inputsourceschange",T),x.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,je=null,He=null;x.depth&&(He=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=x.stencil?Ls:Vi,je=x.stencil?So:_i);const qe={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(qe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new mi(f.textureWidth,f.textureHeight,{format:Gn,type:Nn,depthTexture:new Mo(f.textureWidth,f.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,Me),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new mi(h.framebufferWidth,h.framebufferHeight,{format:Gn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function T(ae){for(let ye=0;ye<ae.removed.length;ye++){const Me=ae.removed[ye],je=A.indexOf(Me);je>=0&&(A[je]=null,C[je].disconnect(Me))}for(let ye=0;ye<ae.added.length;ye++){const Me=ae.added[ye];let je=A.indexOf(Me);if(je===-1){for(let qe=0;qe<C.length;qe++)if(qe>=A.length){A.push(Me),je=qe;break}else if(A[qe]===null){A[qe]=Me,je=qe;break}if(je===-1)break}const He=C[je];He&&He.connect(Me)}}const V=new $,X=new $;function re(ae,ye,Me){V.setFromMatrixPosition(ye.matrixWorld),X.setFromMatrixPosition(Me.matrixWorld);const je=V.distanceTo(X),He=ye.projectionMatrix.elements,qe=Me.projectionMatrix.elements,F=He[14]/(He[10]-1),B=He[14]/(He[10]+1),q=(He[9]+1)/He[5],oe=(He[9]-1)/He[5],Q=(He[8]-1)/He[0],le=(qe[8]+1)/qe[0],I=F*Q,me=F*le,de=je/(-Q+le),se=de*-Q;if(ye.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(se),ae.translateZ(de),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),He[10]===-1)ae.projectionMatrix.copy(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const he=F+de,R=B+de,b=I-se,O=me+(je-se),Y=q*B/R*he,ne=oe*B/R*he;ae.projectionMatrix.makePerspective(b,O,Y,ne,he,R),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function ce(ae,ye){ye===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ye.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let ye=ae.near,Me=ae.far;p.texture!==null&&(p.depthNear>0&&(ye=p.depthNear),p.depthFar>0&&(Me=p.depthFar)),N.near=U.near=M.near=ye,N.far=U.far=M.far=Me,(z!==N.near||G!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,G=N.far),N.layers.mask=ae.layers.mask|6,M.layers.mask=N.layers.mask&-5,U.layers.mask=N.layers.mask&-3;const je=ae.parent,He=N.cameras;ce(N,je);for(let qe=0;qe<He.length;qe++)ce(He[qe],je);He.length===2?re(N,M,U):N.projectionMatrix.copy(M.projectionMatrix),pe(ae,N,je)};function pe(ae,ye,Me){Me===null?ae.matrix.copy(ye.matrixWorld):(ae.matrix.copy(Me.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ye.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=lf*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(ae){c=ae,f!==null&&(f.fixedFoveation=ae),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ae)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(ae){return m[ae]};let Ge=null;function ut(ae,ye){if(u=ye.getViewerPose(l||o),g=ye,u!==null){const Me=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let je=!1;Me.length!==N.cameras.length&&(N.cameras.length=0,je=!0);for(let B=0;B<Me.length;B++){const q=Me[B];let oe=null;if(h!==null)oe=h.getViewport(q);else{const le=d.getViewSubImage(f,q);oe=le.viewport,B===0&&(e.setRenderTargetTextures(y,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(y))}let Q=D[B];Q===void 0&&(Q=new In,Q.layers.enable(B),Q.viewport=new It,D[B]=Q),Q.matrix.fromArray(q.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(q.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(oe.x,oe.y,oe.width,oe.height),B===0&&(N.matrix.copy(Q.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),je===!0&&N.cameras.push(Q)}const He=s.enabledFeatures;if(He&&He.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const B=d.getDepthInformation(Me[0]);B&&B.isValid&&B.texture&&p.init(B,s.renderState)}if(He&&He.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let B=0;B<Me.length;B++){const q=Me[B].camera;if(q){let oe=m[q];oe||(oe=new O_,m[q]=oe);const Q=d.getCameraImage(q);oe.sourceTexture=Q}}}}for(let Me=0;Me<C.length;Me++){const je=A[Me],He=C[Me];je!==null&&He!==void 0&&He.update(je,ye,l||o)}Ge&&Ge(ae,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),g=null}const dt=new V_;dt.setAnimationLoop(ut),this.setAnimationLoop=function(ae){Ge=ae},this.dispose=function(){}}}const ys=new Hi,QN=new Ct;function eU(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,B_(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,E,y){m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,x,E):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===vn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===vn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),E=x.envMap,y=x.envMapRotation;E&&(p.envMap.value=E,ys.copy(y),ys.x*=-1,ys.y*=-1,ys.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),p.envMapRotation.value.setFromMatrix4(QN.makeRotationFromEuler(ys)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=E*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tU(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,E){const y=E.program;i.uniformBlockBinding(x,y)}function l(x,E){let y=s[x.id];y===void 0&&(g(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",p));const C=E.program;i.updateUBOMapping(x,C);const A=e.render.frame;r[x.id]!==A&&(f(x),r[x.id]=A)}function u(x){const E=d();x.__bindingPointIndex=E;const y=t.createBuffer(),C=x.__size,A=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,y),y}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const E=s[x.id],y=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let A=0,L=y.length;A<L;A++){const S=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,U=S.length;M<U;M++){const D=S[M];if(h(D,A,M,C)===!0){const N=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let G=0;for(let k=0;k<z.length;k++){const w=z[k],T=_(w);typeof w=="number"||typeof w=="boolean"?(D.__data[0]=w,t.bufferSubData(t.UNIFORM_BUFFER,N+G,D.__data)):w.isMatrix3?(D.__data[0]=w.elements[0],D.__data[1]=w.elements[1],D.__data[2]=w.elements[2],D.__data[3]=0,D.__data[4]=w.elements[3],D.__data[5]=w.elements[4],D.__data[6]=w.elements[5],D.__data[7]=0,D.__data[8]=w.elements[6],D.__data[9]=w.elements[7],D.__data[10]=w.elements[8],D.__data[11]=0):(w.toArray(D.__data,G),G+=T.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,N,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(x,E,y,C){const A=x.value,L=E+"_"+y;if(C[L]===void 0)return typeof A=="number"||typeof A=="boolean"?C[L]=A:C[L]=A.clone(),!0;{const S=C[L];if(typeof A=="number"||typeof A=="boolean"){if(S!==A)return C[L]=A,!0}else if(S.equals(A)===!1)return S.copy(A),!0}return!1}function g(x){const E=x.uniforms;let y=0;const C=16;for(let L=0,S=E.length;L<S;L++){const M=Array.isArray(E[L])?E[L]:[E[L]];for(let U=0,D=M.length;U<D;U++){const N=M[U],z=Array.isArray(N.value)?N.value:[N.value];for(let G=0,k=z.length;G<k;G++){const w=z[G],T=_(w),V=y%C,X=V%T.boundary,re=V+X;y+=X,re!==0&&C-re<T.storage&&(y+=C-re),N.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=T.storage}}}const A=y%C;return A>0&&(y+=C-A),x.__size=y,x.__cache={},this}function _(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xe("WebGLRenderer: Unsupported uniform value type.",x),E}function p(x){const E=x.target;E.removeEventListener("dispose",p);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const x in s)t.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}const nU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qn=null;function iU(){return Qn===null&&(Qn=new W3(nU,16,16,Sr,zi),Qn.name="DFG_LUT",Qn.minFilter=en,Qn.magFilter=en,Qn.wrapS=Ii,Qn.wrapT=Ii,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class sU{constructor(e={}){const{canvas:n=S3(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Nn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=h,p=new Set([Kf,jf,Yf]),m=new Set([Nn,_i,yo,So,Xf,qf]),x=new Uint32Array(4),E=new Int32Array(4);let y=null,C=null;const A=[],L=[];let S=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let U=!1;this._outputColorSpace=Dn;let D=0,N=0,z=null,G=-1,k=null;const w=new It,T=new It;let V=null;const X=new rt(0);let re=0,ce=n.width,pe=n.height,Ge=1,ut=null,dt=null;const ae=new It(0,0,ce,pe),ye=new It(0,0,ce,pe);let Me=!1;const je=new I_;let He=!1,qe=!1;const F=new Ct,B=new $,q=new It,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function le(){return z===null?Ge:1}let I=i;function me(P,W){return n.getContext(P,W)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wf}`),n.addEventListener("webglcontextlost",Fe,!1),n.addEventListener("webglcontextrestored",Ke,!1),n.addEventListener("webglcontextcreationerror",wt,!1),I===null){const W="webgl2";if(I=me(W,P),I===null)throw me(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw ct("WebGLRenderer: "+P.message),P}let de,se,he,R,b,O,Y,ne,j,Te,_e,Ne,Be,ge,xe,Ae,Le,De,Ze,H,Ee,Se,Ue;function ve(){de=new sI(I),de.init(),Ee=new YN(I,de),se=new KD(I,de,e,Ee),he=new XN(I,de),se.reversedDepthBuffer&&f&&he.buffers.depth.setReversed(!0),R=new aI(I),b=new DN,O=new qN(I,de,he,b,se,Ee,R),Y=new iI(M),ne=new d2(I),Se=new YD(I,ne),j=new rI(I,ne,R,Se),Te=new cI(I,j,ne,Se,R),De=new lI(I,se,O),xe=new ZD(b),_e=new LN(M,Y,de,se,Se,xe),Ne=new eU(M,b),Be=new NN,ge=new zN(de),Le=new qD(M,Y,he,Te,g,c),Ae=new $N(M,Te,se),Ue=new tU(I,R,se,he),Ze=new jD(I,de,R),H=new oI(I,de,R),R.programs=_e.programs,M.capabilities=se,M.extensions=de,M.properties=b,M.renderLists=Be,M.shadowMap=Ae,M.state=he,M.info=R}ve(),_!==Nn&&(S=new fI(_,n.width,n.height,s,r));const ie=new JN(M,I);this.xr=ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const P=de.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=de.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(P){P!==void 0&&(Ge=P,this.setSize(ce,pe,!1))},this.getSize=function(P){return P.set(ce,pe)},this.setSize=function(P,W,ee=!0){if(ie.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=P,pe=W,n.width=Math.floor(P*Ge),n.height=Math.floor(W*Ge),ee===!0&&(n.style.width=P+"px",n.style.height=W+"px"),S!==null&&S.setSize(n.width,n.height),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(ce*Ge,pe*Ge).floor()},this.setDrawingBufferSize=function(P,W,ee){ce=P,pe=W,Ge=ee,n.width=Math.floor(P*ee),n.height=Math.floor(W*ee),this.setViewport(0,0,P,W)},this.setEffects=function(P){if(_===Nn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let W=0;W<P.length;W++)if(P[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(ae)},this.setViewport=function(P,W,ee,Z){P.isVector4?ae.set(P.x,P.y,P.z,P.w):ae.set(P,W,ee,Z),he.viewport(w.copy(ae).multiplyScalar(Ge).round())},this.getScissor=function(P){return P.copy(ye)},this.setScissor=function(P,W,ee,Z){P.isVector4?ye.set(P.x,P.y,P.z,P.w):ye.set(P,W,ee,Z),he.scissor(T.copy(ye).multiplyScalar(Ge).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(P){he.setScissorTest(Me=P)},this.setOpaqueSort=function(P){ut=P},this.setTransparentSort=function(P){dt=P},this.getClearColor=function(P){return P.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(P=!0,W=!0,ee=!0){let Z=0;if(P){let K=!1;if(z!==null){const Re=z.texture.format;K=p.has(Re)}if(K){const Re=z.texture.type,Ie=m.has(Re),Pe=Le.getClearColor(),Oe=Le.getClearAlpha(),ze=Pe.r,Je=Pe.g,nt=Pe.b;Ie?(x[0]=ze,x[1]=Je,x[2]=nt,x[3]=Oe,I.clearBufferuiv(I.COLOR,0,x)):(E[0]=ze,E[1]=Je,E[2]=nt,E[3]=Oe,I.clearBufferiv(I.COLOR,0,E))}else Z|=I.COLOR_BUFFER_BIT}W&&(Z|=I.DEPTH_BUFFER_BIT),ee&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Fe,!1),n.removeEventListener("webglcontextrestored",Ke,!1),n.removeEventListener("webglcontextcreationerror",wt,!1),Le.dispose(),Be.dispose(),ge.dispose(),b.dispose(),Y.dispose(),Te.dispose(),Se.dispose(),Ue.dispose(),_e.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",sd),ie.removeEventListener("sessionend",rd),cs.stop()};function Fe(P){P.preventDefault(),jh("WebGLRenderer: Context Lost."),U=!0}function Ke(){jh("WebGLRenderer: Context Restored."),U=!1;const P=R.autoReset,W=Ae.enabled,ee=Ae.autoUpdate,Z=Ae.needsUpdate,K=Ae.type;ve(),R.autoReset=P,Ae.enabled=W,Ae.autoUpdate=ee,Ae.needsUpdate=Z,Ae.type=K}function wt(P){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function gt(P){const W=P.target;W.removeEventListener("dispose",gt),xi(W)}function xi(P){yi(P),b.remove(P)}function yi(P){const W=b.get(P).programs;W!==void 0&&(W.forEach(function(ee){_e.releaseProgram(ee)}),P.isShaderMaterial&&_e.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,ee,Z,K,Re){W===null&&(W=oe);const Ie=K.isMesh&&K.matrixWorld.determinant()<0,Pe=j_(P,W,ee,Z,K);he.setMaterial(Z,Ie);let Oe=ee.index,ze=1;if(Z.wireframe===!0){if(Oe=j.getWireframeAttribute(ee),Oe===void 0)return;ze=2}const Je=ee.drawRange,nt=ee.attributes.position;let Ve=Je.start*ze,vt=(Je.start+Je.count)*ze;Re!==null&&(Ve=Math.max(Ve,Re.start*ze),vt=Math.min(vt,(Re.start+Re.count)*ze)),Oe!==null?(Ve=Math.max(Ve,0),vt=Math.min(vt,Oe.count)):nt!=null&&(Ve=Math.max(Ve,0),vt=Math.min(vt,nt.count));const Lt=vt-Ve;if(Lt<0||Lt===1/0)return;Se.setup(K,Z,Pe,ee,Oe);let Rt,xt=Ze;if(Oe!==null&&(Rt=ne.get(Oe),xt=H,xt.setIndex(Rt)),K.isMesh)Z.wireframe===!0?(he.setLineWidth(Z.wireframeLinewidth*le()),xt.setMode(I.LINES)):xt.setMode(I.TRIANGLES);else if(K.isLine){let $t=Z.linewidth;$t===void 0&&($t=1),he.setLineWidth($t*le()),K.isLineSegments?xt.setMode(I.LINES):K.isLineLoop?xt.setMode(I.LINE_LOOP):xt.setMode(I.LINE_STRIP)}else K.isPoints?xt.setMode(I.POINTS):K.isSprite&&xt.setMode(I.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ol("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))xt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const $t=K._multiDrawStarts,ke=K._multiDrawCounts,yn=K._multiDrawCount,lt=Oe?ne.get(Oe).bytesPerElement:1,Fn=b.get(Z).currentProgram.getUniforms();for(let Kn=0;Kn<yn;Kn++)Fn.setValue(I,"_gl_DrawID",Kn),xt.render($t[Kn]/lt,ke[Kn])}else if(K.isInstancedMesh)xt.renderInstances(Ve,Lt,K.count);else if(ee.isInstancedBufferGeometry){const $t=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,ke=Math.min(ee.instanceCount,$t);xt.renderInstances(Ve,Lt,ke)}else xt.render(Ve,Lt)};function id(P,W,ee){P.transparent===!0&&P.side===oi&&P.forceSinglePass===!1?(P.side=vn,P.needsUpdate=!0,zo(P,W,ee),P.side=as,P.needsUpdate=!0,zo(P,W,ee),P.side=oi):zo(P,W,ee)}this.compile=function(P,W,ee=null){ee===null&&(ee=P),C=ge.get(ee),C.init(W),L.push(C),ee.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(C.pushLight(K),K.castShadow&&C.pushShadow(K))}),P!==ee&&P.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(C.pushLight(K),K.castShadow&&C.pushShadow(K))}),C.setupLights();const Z=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Re=K.material;if(Re)if(Array.isArray(Re))for(let Ie=0;Ie<Re.length;Ie++){const Pe=Re[Ie];id(Pe,ee,K),Z.add(Pe)}else id(Re,ee,K),Z.add(Re)}),C=L.pop(),Z},this.compileAsync=function(P,W,ee=null){const Z=this.compile(P,W,ee);return new Promise(K=>{function Re(){if(Z.forEach(function(Ie){b.get(Ie).currentProgram.isReady()&&Z.delete(Ie)}),Z.size===0){K(P);return}setTimeout(Re,10)}de.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Vl=null;function Y_(P){Vl&&Vl(P)}function sd(){cs.stop()}function rd(){cs.start()}const cs=new V_;cs.setAnimationLoop(Y_),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(P){Vl=P,ie.setAnimationLoop(P),P===null?cs.stop():cs.start()},ie.addEventListener("sessionstart",sd),ie.addEventListener("sessionend",rd),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const ee=ie.enabled===!0&&ie.isPresenting===!0,Z=S!==null&&(z===null||ee)&&S.begin(M,z);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(W),W=ie.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,W,z),C=ge.get(P,L.length),C.init(W),L.push(C),F.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),je.setFromProjectionMatrix(F,ci,W.reversedDepth),qe=this.localClippingEnabled,He=xe.init(this.clippingPlanes,qe),y=Be.get(P,A.length),y.init(),A.push(y),ie.enabled===!0&&ie.isPresenting===!0){const Ie=M.xr.getDepthSensingMesh();Ie!==null&&Hl(Ie,W,-1/0,M.sortObjects)}Hl(P,W,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(ut,dt),Q=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Q&&Le.addToRenderList(y,P),this.info.render.frame++,He===!0&&xe.beginShadows();const K=C.state.shadowsArray;if(Ae.render(K,P,W),He===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&S.hasRenderPass())===!1){const Ie=y.opaque,Pe=y.transmissive;if(C.setupLights(),W.isArrayCamera){const Oe=W.cameras;if(Pe.length>0)for(let ze=0,Je=Oe.length;ze<Je;ze++){const nt=Oe[ze];ad(Ie,Pe,P,nt)}Q&&Le.render(P);for(let ze=0,Je=Oe.length;ze<Je;ze++){const nt=Oe[ze];od(y,P,nt,nt.viewport)}}else Pe.length>0&&ad(Ie,Pe,P,W),Q&&Le.render(P),od(y,P,W)}z!==null&&N===0&&(O.updateMultisampleRenderTarget(z),O.updateRenderTargetMipmap(z)),Z&&S.end(M),P.isScene===!0&&P.onAfterRender(M,P,W),Se.resetDefaultState(),G=-1,k=null,L.pop(),L.length>0?(C=L[L.length-1],He===!0&&xe.setGlobalState(M.clippingPlanes,C.state.camera)):C=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function Hl(P,W,ee,Z){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)ee=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)C.pushLight(P),P.castShadow&&C.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||je.intersectsSprite(P)){Z&&q.setFromMatrixPosition(P.matrixWorld).applyMatrix4(F);const Ie=Te.update(P),Pe=P.material;Pe.visible&&y.push(P,Ie,Pe,ee,q.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||je.intersectsObject(P))){const Ie=Te.update(P),Pe=P.material;if(Z&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),q.copy(P.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),q.copy(Ie.boundingSphere.center)),q.applyMatrix4(P.matrixWorld).applyMatrix4(F)),Array.isArray(Pe)){const Oe=Ie.groups;for(let ze=0,Je=Oe.length;ze<Je;ze++){const nt=Oe[ze],Ve=Pe[nt.materialIndex];Ve&&Ve.visible&&y.push(P,Ie,Ve,ee,q.z,nt)}}else Pe.visible&&y.push(P,Ie,Pe,ee,q.z,null)}}const Re=P.children;for(let Ie=0,Pe=Re.length;Ie<Pe;Ie++)Hl(Re[Ie],W,ee,Z)}function od(P,W,ee,Z){const{opaque:K,transmissive:Re,transparent:Ie}=P;C.setupLightsView(ee),He===!0&&xe.setGlobalState(M.clippingPlanes,ee),Z&&he.viewport(w.copy(Z)),K.length>0&&ko(K,W,ee),Re.length>0&&ko(Re,W,ee),Ie.length>0&&ko(Ie,W,ee),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function ad(P,W,ee,Z){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Z.id]===void 0){const Ve=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Z.id]=new mi(1,1,{generateMipmaps:!0,type:Ve?zi:Nn,minFilter:Ps,samples:Math.max(4,se.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const Re=C.state.transmissionRenderTarget[Z.id],Ie=Z.viewport||w;Re.setSize(Ie.z*M.transmissionResolutionScale,Ie.w*M.transmissionResolutionScale);const Pe=M.getRenderTarget(),Oe=M.getActiveCubeFace(),ze=M.getActiveMipmapLevel();M.setRenderTarget(Re),M.getClearColor(X),re=M.getClearAlpha(),re<1&&M.setClearColor(16777215,.5),M.clear(),Q&&Le.render(ee);const Je=M.toneMapping;M.toneMapping=pi;const nt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),C.setupLightsView(Z),He===!0&&xe.setGlobalState(M.clippingPlanes,Z),ko(P,ee,Z),O.updateMultisampleRenderTarget(Re),O.updateRenderTargetMipmap(Re),de.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let vt=0,Lt=W.length;vt<Lt;vt++){const Rt=W[vt],{object:xt,geometry:$t,material:ke,group:yn}=Rt;if(ke.side===oi&&xt.layers.test(Z.layers)){const lt=ke.side;ke.side=vn,ke.needsUpdate=!0,ld(xt,ee,Z,$t,ke,yn),ke.side=lt,ke.needsUpdate=!0,Ve=!0}}Ve===!0&&(O.updateMultisampleRenderTarget(Re),O.updateRenderTargetMipmap(Re))}M.setRenderTarget(Pe,Oe,ze),M.setClearColor(X,re),nt!==void 0&&(Z.viewport=nt),M.toneMapping=Je}function ko(P,W,ee){const Z=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Re=P.length;K<Re;K++){const Ie=P[K],{object:Pe,geometry:Oe,group:ze}=Ie;let Je=Ie.material;Je.allowOverride===!0&&Z!==null&&(Je=Z),Pe.layers.test(ee.layers)&&ld(Pe,W,ee,Oe,Je,ze)}}function ld(P,W,ee,Z,K,Re){P.onBeforeRender(M,W,ee,Z,K,Re),P.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(M,W,ee,Z,P,Re),K.transparent===!0&&K.side===oi&&K.forceSinglePass===!1?(K.side=vn,K.needsUpdate=!0,M.renderBufferDirect(ee,W,Z,K,P,Re),K.side=as,K.needsUpdate=!0,M.renderBufferDirect(ee,W,Z,K,P,Re),K.side=oi):M.renderBufferDirect(ee,W,Z,K,P,Re),P.onAfterRender(M,W,ee,Z,K,Re)}function zo(P,W,ee){W.isScene!==!0&&(W=oe);const Z=b.get(P),K=C.state.lights,Re=C.state.shadowsArray,Ie=K.state.version,Pe=_e.getParameters(P,K.state,Re,W,ee),Oe=_e.getProgramCacheKey(Pe);let ze=Z.programs;Z.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?W.environment:null,Z.fog=W.fog;const Je=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;Z.envMap=Y.get(P.envMap||Z.environment,Je),Z.envMapRotation=Z.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,ze===void 0&&(P.addEventListener("dispose",gt),ze=new Map,Z.programs=ze);let nt=ze.get(Oe);if(nt!==void 0){if(Z.currentProgram===nt&&Z.lightsStateVersion===Ie)return ud(P,Pe),nt}else Pe.uniforms=_e.getUniforms(P),P.onBeforeCompile(Pe,M),nt=_e.acquireProgram(Pe,Oe),ze.set(Oe,nt),Z.uniforms=Pe.uniforms;const Ve=Z.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ve.clippingPlanes=xe.uniform),ud(P,Pe),Z.needsLights=Z_(P),Z.lightsStateVersion=Ie,Z.needsLights&&(Ve.ambientLightColor.value=K.state.ambient,Ve.lightProbe.value=K.state.probe,Ve.directionalLights.value=K.state.directional,Ve.directionalLightShadows.value=K.state.directionalShadow,Ve.spotLights.value=K.state.spot,Ve.spotLightShadows.value=K.state.spotShadow,Ve.rectAreaLights.value=K.state.rectArea,Ve.ltc_1.value=K.state.rectAreaLTC1,Ve.ltc_2.value=K.state.rectAreaLTC2,Ve.pointLights.value=K.state.point,Ve.pointLightShadows.value=K.state.pointShadow,Ve.hemisphereLights.value=K.state.hemi,Ve.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ve.spotLightMatrix.value=K.state.spotLightMatrix,Ve.spotLightMap.value=K.state.spotLightMap,Ve.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.currentProgram=nt,Z.uniformsList=null,nt}function cd(P){if(P.uniformsList===null){const W=P.currentProgram.getUniforms();P.uniformsList=Oa.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function ud(P,W){const ee=b.get(P);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function j_(P,W,ee,Z,K){W.isScene!==!0&&(W=oe),O.resetTextureUnits();const Re=W.fog,Ie=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?W.environment:null,Pe=z===null?M.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Mr,Oe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,ze=Y.get(Z.envMap||Ie,Oe),Je=Z.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,nt=!!ee.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ve=!!ee.morphAttributes.position,vt=!!ee.morphAttributes.normal,Lt=!!ee.morphAttributes.color;let Rt=pi;Z.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Rt=M.toneMapping);const xt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,$t=xt!==void 0?xt.length:0,ke=b.get(Z),yn=C.state.lights;if(He===!0&&(qe===!0||P!==k)){const Vt=P===k&&Z.id===G;xe.setState(Z,P,Vt)}let lt=!1;Z.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==yn.state.version||ke.outputColorSpace!==Pe||K.isBatchedMesh&&ke.batching===!1||!K.isBatchedMesh&&ke.batching===!0||K.isBatchedMesh&&ke.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ke.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ke.instancing===!1||!K.isInstancedMesh&&ke.instancing===!0||K.isSkinnedMesh&&ke.skinning===!1||!K.isSkinnedMesh&&ke.skinning===!0||K.isInstancedMesh&&ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ke.instancingMorph===!1&&K.morphTexture!==null||ke.envMap!==ze||Z.fog===!0&&ke.fog!==Re||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==xe.numPlanes||ke.numIntersection!==xe.numIntersection)||ke.vertexAlphas!==Je||ke.vertexTangents!==nt||ke.morphTargets!==Ve||ke.morphNormals!==vt||ke.morphColors!==Lt||ke.toneMapping!==Rt||ke.morphTargetsCount!==$t)&&(lt=!0):(lt=!0,ke.__version=Z.version);let Fn=ke.currentProgram;lt===!0&&(Fn=zo(Z,W,K));let Kn=!1,us=!1,zs=!1;const St=Fn.getUniforms(),Gt=ke.uniforms;if(he.useProgram(Fn.program)&&(Kn=!0,us=!0,zs=!0),Z.id!==G&&(G=Z.id,us=!0),Kn||k!==P){he.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),St.setValue(I,"projectionMatrix",P.projectionMatrix),St.setValue(I,"viewMatrix",P.matrixWorldInverse);const Xi=St.map.cameraPosition;Xi!==void 0&&Xi.setValue(I,B.setFromMatrixPosition(P.matrixWorld)),se.logarithmicDepthBuffer&&St.setValue(I,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&St.setValue(I,"isOrthographic",P.isOrthographicCamera===!0),k!==P&&(k=P,us=!0,zs=!0)}if(ke.needsLights&&(yn.state.directionalShadowMap.length>0&&St.setValue(I,"directionalShadowMap",yn.state.directionalShadowMap,O),yn.state.spotShadowMap.length>0&&St.setValue(I,"spotShadowMap",yn.state.spotShadowMap,O),yn.state.pointShadowMap.length>0&&St.setValue(I,"pointShadowMap",yn.state.pointShadowMap,O)),K.isSkinnedMesh){St.setOptional(I,K,"bindMatrix"),St.setOptional(I,K,"bindMatrixInverse");const Vt=K.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),St.setValue(I,"boneTexture",Vt.boneTexture,O))}K.isBatchedMesh&&(St.setOptional(I,K,"batchingTexture"),St.setValue(I,"batchingTexture",K._matricesTexture,O),St.setOptional(I,K,"batchingIdTexture"),St.setValue(I,"batchingIdTexture",K._indirectTexture,O),St.setOptional(I,K,"batchingColorTexture"),K._colorsTexture!==null&&St.setValue(I,"batchingColorTexture",K._colorsTexture,O));const $i=ee.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&De.update(K,ee,Fn),(us||ke.receiveShadow!==K.receiveShadow)&&(ke.receiveShadow=K.receiveShadow,St.setValue(I,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&W.environment!==null&&(Gt.envMapIntensity.value=W.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=iU()),us&&(St.setValue(I,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&K_(Gt,zs),Re&&Z.fog===!0&&Ne.refreshFogUniforms(Gt,Re),Ne.refreshMaterialUniforms(Gt,Z,Ge,pe,C.state.transmissionRenderTarget[P.id]),Oa.upload(I,cd(ke),Gt,O)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Oa.upload(I,cd(ke),Gt,O),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&St.setValue(I,"center",K.center),St.setValue(I,"modelViewMatrix",K.modelViewMatrix),St.setValue(I,"normalMatrix",K.normalMatrix),St.setValue(I,"modelMatrix",K.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Vt=Z.uniformsGroups;for(let Xi=0,Vs=Vt.length;Xi<Vs;Xi++){const fd=Vt[Xi];Ue.update(fd,Fn),Ue.bind(fd,Fn)}}return Fn}function K_(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Z_(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(P,W,ee){const Z=b.get(P);Z.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),b.get(P.texture).__webglTexture=W,b.get(P.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ee,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,W){const ee=b.get(P);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0};const J_=I.createFramebuffer();this.setRenderTarget=function(P,W=0,ee=0){z=P,D=W,N=ee;let Z=null,K=!1,Re=!1;if(P){const Pe=b.get(P);if(Pe.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(I.FRAMEBUFFER,Pe.__webglFramebuffer),w.copy(P.viewport),T.copy(P.scissor),V=P.scissorTest,he.viewport(w),he.scissor(T),he.setScissorTest(V),G=-1;return}else if(Pe.__webglFramebuffer===void 0)O.setupRenderTarget(P);else if(Pe.__hasExternalTextures)O.rebindTextures(P,b.get(P.texture).__webglTexture,b.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Je=P.depthTexture;if(Pe.__boundDepthTexture!==Je){if(Je!==null&&b.has(Je)&&(P.width!==Je.image.width||P.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(P)}}const Oe=P.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Re=!0);const ze=b.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ze[W])?Z=ze[W][ee]:Z=ze[W],K=!0):P.samples>0&&O.useMultisampledRTT(P)===!1?Z=b.get(P).__webglMultisampledFramebuffer:Array.isArray(ze)?Z=ze[ee]:Z=ze,w.copy(P.viewport),T.copy(P.scissor),V=P.scissorTest}else w.copy(ae).multiplyScalar(Ge).floor(),T.copy(ye).multiplyScalar(Ge).floor(),V=Me;if(ee!==0&&(Z=J_),he.bindFramebuffer(I.FRAMEBUFFER,Z)&&he.drawBuffers(P,Z),he.viewport(w),he.scissor(T),he.setScissorTest(V),K){const Pe=b.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pe.__webglTexture,ee)}else if(Re){const Pe=W;for(let Oe=0;Oe<P.textures.length;Oe++){const ze=b.get(P.textures[Oe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,ee,Pe)}}else if(P!==null&&ee!==0){const Pe=b.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pe.__webglTexture,ee)}G=-1},this.readRenderTargetPixels=function(P,W,ee,Z,K,Re,Ie,Pe=0){if(!(P&&P.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=b.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){he.bindFramebuffer(I.FRAMEBUFFER,Oe);try{const ze=P.textures[Pe],Je=ze.format,nt=ze.type;if(P.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pe),!se.textureFormatReadable(Je)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(nt)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-Z&&ee>=0&&ee<=P.height-K&&I.readPixels(W,ee,Z,K,Ee.convert(Je),Ee.convert(nt),Re)}finally{const ze=z!==null?b.get(z).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(P,W,ee,Z,K,Re,Ie,Pe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=b.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe)if(W>=0&&W<=P.width-Z&&ee>=0&&ee<=P.height-K){he.bindFramebuffer(I.FRAMEBUFFER,Oe);const ze=P.textures[Pe],Je=ze.format,nt=ze.type;if(P.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pe),!se.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.bufferData(I.PIXEL_PACK_BUFFER,Re.byteLength,I.STREAM_READ),I.readPixels(W,ee,Z,K,Ee.convert(Je),Ee.convert(nt),0);const vt=z!==null?b.get(z).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,vt);const Lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await M3(I,Lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Re),I.deleteBuffer(Ve),I.deleteSync(Lt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,W=null,ee=0){const Z=Math.pow(2,-ee),K=Math.floor(P.image.width*Z),Re=Math.floor(P.image.height*Z),Ie=W!==null?W.x:0,Pe=W!==null?W.y:0;O.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,ee,0,0,Ie,Pe,K,Re),he.unbindTexture()};const Q_=I.createFramebuffer(),ev=I.createFramebuffer();this.copyTextureToTexture=function(P,W,ee=null,Z=null,K=0,Re=0){let Ie,Pe,Oe,ze,Je,nt,Ve,vt,Lt;const Rt=P.isCompressedTexture?P.mipmaps[Re]:P.image;if(ee!==null)Ie=ee.max.x-ee.min.x,Pe=ee.max.y-ee.min.y,Oe=ee.isBox3?ee.max.z-ee.min.z:1,ze=ee.min.x,Je=ee.min.y,nt=ee.isBox3?ee.min.z:0;else{const Gt=Math.pow(2,-K);Ie=Math.floor(Rt.width*Gt),Pe=Math.floor(Rt.height*Gt),P.isDataArrayTexture?Oe=Rt.depth:P.isData3DTexture?Oe=Math.floor(Rt.depth*Gt):Oe=1,ze=0,Je=0,nt=0}Z!==null?(Ve=Z.x,vt=Z.y,Lt=Z.z):(Ve=0,vt=0,Lt=0);const xt=Ee.convert(W.format),$t=Ee.convert(W.type);let ke;W.isData3DTexture?(O.setTexture3D(W,0),ke=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(O.setTexture2DArray(W,0),ke=I.TEXTURE_2D_ARRAY):(O.setTexture2D(W,0),ke=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const yn=I.getParameter(I.UNPACK_ROW_LENGTH),lt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Fn=I.getParameter(I.UNPACK_SKIP_PIXELS),Kn=I.getParameter(I.UNPACK_SKIP_ROWS),us=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Rt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Rt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,Je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,nt);const zs=P.isDataArrayTexture||P.isData3DTexture,St=W.isDataArrayTexture||W.isData3DTexture;if(P.isDepthTexture){const Gt=b.get(P),$i=b.get(W),Vt=b.get(Gt.__renderTarget),Xi=b.get($i.__renderTarget);he.bindFramebuffer(I.READ_FRAMEBUFFER,Vt.__webglFramebuffer),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Vs=0;Vs<Oe;Vs++)zs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,b.get(P).__webglTexture,K,nt+Vs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,b.get(W).__webglTexture,Re,Lt+Vs)),I.blitFramebuffer(ze,Je,Ie,Pe,Ve,vt,Ie,Pe,I.DEPTH_BUFFER_BIT,I.NEAREST);he.bindFramebuffer(I.READ_FRAMEBUFFER,null),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(K!==0||P.isRenderTargetTexture||b.has(P)){const Gt=b.get(P),$i=b.get(W);he.bindFramebuffer(I.READ_FRAMEBUFFER,Q_),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,ev);for(let Vt=0;Vt<Oe;Vt++)zs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.__webglTexture,K,nt+Vt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Gt.__webglTexture,K),St?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$i.__webglTexture,Re,Lt+Vt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$i.__webglTexture,Re),K!==0?I.blitFramebuffer(ze,Je,Ie,Pe,Ve,vt,Ie,Pe,I.COLOR_BUFFER_BIT,I.NEAREST):St?I.copyTexSubImage3D(ke,Re,Ve,vt,Lt+Vt,ze,Je,Ie,Pe):I.copyTexSubImage2D(ke,Re,Ve,vt,ze,Je,Ie,Pe);he.bindFramebuffer(I.READ_FRAMEBUFFER,null),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else St?P.isDataTexture||P.isData3DTexture?I.texSubImage3D(ke,Re,Ve,vt,Lt,Ie,Pe,Oe,xt,$t,Rt.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(ke,Re,Ve,vt,Lt,Ie,Pe,Oe,xt,Rt.data):I.texSubImage3D(ke,Re,Ve,vt,Lt,Ie,Pe,Oe,xt,$t,Rt):P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Re,Ve,vt,Ie,Pe,xt,$t,Rt.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Re,Ve,vt,Rt.width,Rt.height,xt,Rt.data):I.texSubImage2D(I.TEXTURE_2D,Re,Ve,vt,Ie,Pe,xt,$t,Rt);I.pixelStorei(I.UNPACK_ROW_LENGTH,yn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Kn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,us),Re===0&&W.generateMipmaps&&I.generateMipmap(ke),he.unbindTexture()},this.initRenderTarget=function(P){b.get(P).__webglFramebuffer===void 0&&O.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?O.setTextureCube(P,0):P.isData3DTexture?O.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?O.setTexture2DArray(P,0):O.setTexture2D(P,0),he.unbindTexture()},this.resetState=function(){D=0,N=0,z=null,he.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}const rU={class:"brain-3d-container"},oU={class:"brain-overlay"},aU={class:"brain-stats"},lU={class:"stat-item"},cU={class:"stat-value"},uU={class:"stat-item"},fU={class:"stat-value"},dU={class:"stat-item"},hU={class:"stat-value"},pU={key:0,class:"loading-overlay"},mU=xn({__name:"Brain3D",props:{stats:{}},setup(t){const e=t,n=we(),i=we(!0),s=we(0),r=we(0),o=we(0);let a=null,c=null,l=null,u=null,d=null,f=null;const h={storage:4886754,thinking:16098851,skill:8311585};qn(()=>{g()}),Er(()=>{C()}),di(()=>e.stats,A=>{A&&x(A)},{deep:!0});function g(){if(!n.value)return;const A=n.value,L=A.clientWidth,S=A.clientHeight;a=new B3,a.background=new rt(1296),c=new In(60,L/S,.1,1e3),c.position.z=40,l=new sU({antialias:!0,alpha:!0,powerPreference:"high-performance"}),l.setSize(L,S),l.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),A.appendChild(l.domElement),u=new jr,a.add(u),_(),p(),m(),E(),window.addEventListener("resize",y),i.value=!1}function _(){if(!u)return;const A=new cl(6,1),L=new Ts({color:65345,wireframe:!0,transparent:!0,opacity:.3}),S=new jt(A,L);u.add(S);const M=new cl(4,1),U=new Ts({color:65345,transparent:!0,opacity:.5}),D=new jt(M,U);u.add(D);const N=new ul(1.5,16,16),z=new Ts({color:65345,transparent:!0,opacity:.8}),G=new jt(N,z);u.add(G),[{name:"storage",position:[-5,2,0],color:h.storage},{name:"thinking",position:[5,2,0],color:h.thinking},{name:"skill",position:[0,-4,2],color:h.skill}].forEach(w=>{const T=new ul(1.2,12,12),V=new Ts({color:w.color,transparent:!0,opacity:.7}),X=new jt(T,V);X.position.set(w.position[0],w.position[1],w.position[2]),X.userData={region:w.name},u.add(X);const re=new nd(1.5,1.8,32),ce=new Ts({color:w.color,transparent:!0,opacity:.3,side:oi}),pe=new jt(re,ce);pe.position.set(w.position[0],w.position[1],w.position[2]+.1),u.add(pe)})}function p(){if(!u)return;const A=150,L=new tn,S=new Float32Array(A*3),M=new Float32Array(A*3),U=new Float32Array(A);for(let N=0;N<A;N++){const z=Math.random()*Math.PI*2,G=Math.acos(2*Math.random()-1),k=5+Math.random()*4;S[N*3]=k*Math.sin(G)*Math.cos(z),S[N*3+1]=k*Math.sin(G)*Math.sin(z),S[N*3+2]=k*Math.cos(G);const w=Math.random();let T;w<.33?T=new rt(h.storage):w<.66?T=new rt(h.thinking):T=new rt(h.skill),M[N*3]=T.r,M[N*3+1]=T.g,M[N*3+2]=T.b,U[N]=.5+Math.random()*1.5}L.setAttribute("position",new Tn(S,3)),L.setAttribute("color",new Tn(M,3)),L.setAttribute("size",new Tn(U,1));const D=new Un({uniforms:{uTime:{value:0}},vertexShader:`
      attribute float size;
      uniform float uTime;
      varying vec3 vColor;
      
      void main() {
        vColor = color;
        vec3 pos = position;
        float pulse = sin(uTime * 2.0 + position.x * 0.5 + position.y * 0.3) * 0.3;
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
    `,transparent:!0,vertexColors:!0,blending:_u,depthWrite:!1});f=new mp(L,D),u.add(f),s.value=A}function m(){if(!u)return;const A=60,L=[];for(let D=0;D<A;D++){const N=Math.random()*Math.PI*2,z=Math.acos(2*Math.random()-1),G=5+Math.random()*3,k=new $(G*Math.sin(z)*Math.cos(N),G*Math.sin(z)*Math.sin(N),G*Math.cos(z)),w=k.clone().multiplyScalar(.5+Math.random()*.3),T=Math.random()*Math.PI*2,V=Math.acos(2*Math.random()-1),X=5+Math.random()*3,re=new $(X*Math.sin(V)*Math.cos(T),X*Math.sin(V)*Math.sin(T),X*Math.cos(V)),pe=new t2(k,w,re).getPoints(8);L.push(...pe)}const S=new tn().setFromPoints(L),M=new N_({color:65345,transparent:!0,opacity:.15}),U=new Y3(S,M);U.userData.isSynapse=!0,u.add(U),r.value=A,o.value=3}function x(A){var D,N,z;if(!u||!f)return;const L=A.memory_count||0,S=((D=A.tiered_breakdown)==null?void 0:D.storage)||0,M=((N=A.tiered_breakdown)==null?void 0:N.thinking)||0,U=((z=A.tiered_breakdown)==null?void 0:z.skill)||0;u.children.forEach(G=>{if(G.userData.region&&G instanceof jt){const k=G.material;let w=.5;switch(G.userData.region){case"storage":w=.3+S/Math.max(L,1)*.7;break;case"thinking":w=.3+M/Math.max(L,1)*.7;break;case"skill":w=.3+U/Math.max(L,1)*.7;break}k.opacity=w}})}function E(){if(!a||!c||!l||!u)return;d=requestAnimationFrame(E);const A=performance.now()*.001;u.rotation.y=A*.15,u.rotation.x=Math.sin(A*.3)*.1,f&&f.material instanceof Un&&(f.material.uniforms.uTime.value=A),l.render(a,c)}function y(){if(!n.value||!c||!l)return;const A=n.value.clientWidth,L=n.value.clientHeight;c.aspect=A/L,c.updateProjectionMatrix(),l.setSize(A,L)}function C(){d&&(cancelAnimationFrame(d),d=null),window.removeEventListener("resize",y),u&&(u.traverse(A=>{(A instanceof jt||A instanceof mp||A instanceof U_)&&(A.geometry&&A.geometry.dispose(),A.material&&(Array.isArray(A.material)?A.material.forEach(L=>L.dispose()):A.material.dispose()))}),a&&a.remove(u)),l&&(l.dispose(),l.forceContextLoss(),n.value&&l.domElement.parentNode===n.value&&n.value.removeChild(l.domElement)),a=null,c=null,l=null,u=null,f=null}return(A,L)=>(ue(),fe("div",rU,[v("div",{ref_key:"canvasRef",ref:n,class:"canvas-wrapper"},null,512),v("div",oU,[v("div",aU,[v("div",lU,[L[0]||(L[0]=v("span",{class:"stat-label"},"神经元",-1)),v("span",cU,te(s.value),1)]),v("div",uU,[L[1]||(L[1]=v("span",{class:"stat-label"},"突触连接",-1)),v("span",fU,te(r.value),1)]),v("div",dU,[L[2]||(L[2]=v("span",{class:"stat-label"},"活跃区域",-1)),v("span",hU,te(o.value),1)])])]),i.value?(ue(),fe("div",pU,[...L[3]||(L[3]=[v("div",{class:"loading-spinner"},null,-1),v("p",null,"初始化大脑模型...",-1)])])):et("",!0)]))}}),gU=Cn(mU,[["__scopeId","data-v-3cc56395"]]),_U={class:"app-container"},vU={class:"main-sidebar"},xU={class:"sidebar-header"},yU={class:"status-label"},SU={class:"sidebar-nav"},MU=["onClick"],bU={class:"nav-icon"},EU={class:"nav-text"},wU={class:"sidebar-actions"},TU={class:"action-grid"},AU=["disabled"],CU={class:"btn-text"},RU=["disabled"],PU={class:"btn-text"},LU={class:"viewport"},DU={class:"top-bar"},IU={class:"view-title"},NU={class:"top-stats"},UU={class:"view-content"},FU={key:0,class:"dashboard-layout"},OU={class:"visual-section card-glass"},BU={class:"graph-section card-glass"},kU={class:"logs-section card-glass"},zU={key:1,class:"full-view card-glass"},VU={key:2,class:"centered-view card-glass"},HU={key:3,class:"full-view card-glass"},GU={key:4,class:"split-view"},WU={key:5,class:"full-view card-glass"},$U={key:6,class:"centered-view card-glass"},XU={key:7,class:"full-view card-glass"},qU={key:0,class:"detail-panel card-glass"},YU={class:"modal-title"},jU={class:"modal-content"},KU={class:"info-row"},ZU={class:"info-section"},JU={class:"meta-grid"},QU={class:"meta-box"},eF={class:"val"},tF={class:"meta-box"},nF={class:"val"},iF={class:"meta-box"},sF={class:"val"},rF=xn({__name:"App",setup(t){const e=Wi(),{graphData:n,isLoading:i,evolutionStatus:s,stats:r}=wr(e),o=[{id:"overview",label:"概览",icon:"📊"},{id:"memory-list",label:"记忆列表",icon:"📋"},{id:"write",label:"写入",icon:"✏️"},{id:"tiered",label:"三层记忆",icon:"🧠"},{id:"brain",label:"AI大脑",icon:"🤖"},{id:"llm",label:"LLM交互",icon:"🤖"},{id:"evolution",label:"进化配置",icon:"⚙️"},{id:"merge",label:"合并链",icon:"🔗"}],a=we("overview"),c=we(null),l=we(null),u=we(!1),d=we(!1),f=we(!1),h=Uv(null),g=we({}),_=Et(()=>{var k,w;return((k=s.value)==null?void 0:k.enabled)&&((w=s.value)==null?void 0:w.running)}),p=Et(()=>{const k=o.find(w=>w.id===a.value);return(k==null?void 0:k.label)||"概览"});qn(async()=>{e.addLog("初始化系统...","info");try{await e.fetchStats(),e.addLog("加载统计数据完成","success"),await e.fetchGraph(),e.addLog("加载记忆图谱完成","success"),await e.fetchEvolutionStatus(),e.addLog("加载进化状态完成","success")}catch(k){e.addLog("初始化失败: "+k.message,"error")}});function m(k){e.addLog(`点击节点: ${k.label||k.id}`,"info"),l.value=k.id,a.value!=="merge"&&(a.value="merge")}function x(k){c.value=k,e.addLog(`选择记忆: ${k.title}`,"info")}function E(k){e.addLog(`新记忆已写入: ${k}`,"success"),e.fetchStats(),e.fetchGraph()}function y(){e.addLog("记忆已保存","success"),M(),e.fetchStats(),e.fetchGraph()}function C(k){e.addLog(`记忆已删除: ${k}`,"success"),M(),c.value=null,e.fetchStats(),e.fetchGraph()}function A(k){e.addLog(`点击合并链节点: ${k.title}`,"info")}function L(){c.value=null}function S(){c.value&&(h.value=uT,g.value={visible:!0,memory:c.value},f.value=!0)}function M(){f.value=!1,h.value=null,g.value={}}function U(){c.value&&(l.value=c.value.id,a.value="merge",L())}async function D(){u.value=!0,e.addLog("开始重建图谱...","info");try{await pn.rebuildGraph(),await e.fetchGraph(),e.addLog("图谱重建完成","success")}catch(k){e.addLog("图谱重建失败: "+k.message,"error")}finally{u.value=!1}}async function N(){d.value=!0,e.addLog("触发反思任务...","info");try{await e.reflectMemory(),e.addLog("反思任务已触发","success"),await e.fetchEvolutionStatus()}catch(k){e.addLog("触发反思失败: "+k.message,"error")}finally{d.value=!1}}async function z(){e.addLog("刷新所有数据...","info");try{await Promise.all([e.fetchStats(),e.fetchGraph(),e.fetchEvolutionStatus()]),e.addLog("数据刷新完成","success")}catch(k){e.addLog("数据刷新失败: "+k.message,"error")}}function G(k){return{storage:"存储记忆",thinking:"思维记忆",skill:"技能记忆"}[k||""]||k||"未知"}return(k,w)=>(ue(),fe("div",_U,[w[10]||(w[10]=v("div",{class:"scanline"},null,-1)),v("aside",vU,[v("div",xU,[w[3]||(w[3]=v("h1",{class:"logo"},[pr("MEMORY"),v("span",null,"CORE")],-1)),v("div",{class:pt(["status-badge",{"is-active":_.value}])},[w[2]||(w[2]=v("span",{class:"status-dot"},null,-1)),v("span",yU,te(_.value?"在线":"待机"),1)],2)]),v("nav",SU,[(ue(),fe(mt,null,Ot(o,T=>v("button",{key:T.id,class:pt(["nav-item",{active:a.value===T.id}]),onClick:V=>a.value=T.id},[v("span",bU,te(T.icon),1),v("span",EU,te(T.label),1)],10,MU)),64))]),v("div",wU,[v("div",TU,[v("button",{onClick:D,disabled:u.value},[v("span",CU,te(u.value?"同步中...":"重建图谱"),1)],8,AU),v("button",{onClick:N,disabled:d.value},[v("span",PU,te(d.value?"思考中...":"反思"),1)],8,RU)]),v("button",{class:"primary-btn",onClick:z},"刷新数据")])]),v("main",LU,[v("header",DU,[v("div",IU,[w[4]||(w[4]=v("span",{class:"path"},"系统 /",-1)),pr(" "+te(p.value),1)]),v("div",NU,[yt(Ow)])]),v("div",{class:pt(["content-viewport",{"panel-active":f.value}])},[v("div",UU,[a.value==="overview"?(ue(),fe("div",FU,[v("div",OU,[yt(gU,{stats:be(r)},null,8,["stats"])]),v("div",BU,[yt(w1,{"graph-data":be(n),"is-loading":be(i),onNodeClick:m},null,8,["graph-data","is-loading"])]),v("div",kU,[yt(Sw)])])):a.value==="memory-list"?(ue(),fe("div",zU,[yt(mw,{onMemorySelect:x})])):a.value==="write"?(ue(),fe("div",VU,[yt(Qw,{onWritten:E})])):a.value==="tiered"?(ue(),fe("div",HU,[yt(BT,{onMemorySelect:x})])):a.value==="brain"?(ue(),fe("div",GU,[yt(GR,{class:"card-glass"}),yt(zP,{class:"card-glass"})])):a.value==="llm"?(ue(),fe("div",WU,[yt(gA)])):a.value==="evolution"?(ue(),fe("div",$U,[yt(mC)])):a.value==="merge"?(ue(),fe("div",XU,[yt(NC,{"memory-id":l.value,"show-close":!!l.value,onClose:w[0]||(w[0]=T=>l.value=null),onNodeClick:A},null,8,["memory-id","show-close"])])):et("",!0)]),yt(Id,{name:"panel-slide"},{default:jc(()=>[f.value?(ue(),fe("div",qU,[(ue(),Zm(m0(h.value),eg(g.value,{onClose:M,onSaved:y,onDeleted:C}),null,16))])):et("",!0)]),_:1})],2)]),yt(Id,{name:"fade"},{default:jc(()=>[c.value?(ue(),fe("div",{key:0,class:"modal-overlay",onClick:L},[v("div",{class:"modal-window card-glass",onClick:w[1]||(w[1]=ja(()=>{},["stop"]))},[v("header",YU,[v("h2",null,te(c.value.title),1),v("button",{class:"close-icon",onClick:L},"×")]),v("div",jU,[v("div",KU,[w[5]||(w[5]=v("span",{class:"label"},"类型",-1)),v("span",{class:pt(["type-tag",c.value.memory_type])},te(G(c.value.memory_type)),3)]),v("div",ZU,[w[6]||(w[6]=v("h3",null,"内容",-1)),v("p",null,te(c.value.content),1)]),v("div",JU,[v("div",QU,[w[7]||(w[7]=v("span",{class:"label"},"范围",-1)),v("span",eF,te(c.value.scope),1)]),v("div",tF,[w[8]||(w[8]=v("span",{class:"label"},"时间",-1)),v("span",nF,te(c.value.timestamp),1)]),v("div",iF,[w[9]||(w[9]=v("span",{class:"label"},"重要性",-1)),v("span",sF,te(c.value.importance),1)])]),v("div",{class:"modal-footer"},[v("button",{class:"secondary-btn",onClick:S},"编辑"),v("button",{class:"primary-btn",onClick:U},"查看合并链")])])])])):et("",!0)]),_:1})]))}}),q_=Nx(rF),oF=Ox();q_.use(oF);q_.mount("#app");
