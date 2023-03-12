function ny(t,e){return e.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in t)){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}const ry=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};ry();var E={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fs=Symbol.for("react.element"),iy=Symbol.for("react.portal"),sy=Symbol.for("react.fragment"),oy=Symbol.for("react.strict_mode"),ly=Symbol.for("react.profiler"),ay=Symbol.for("react.provider"),uy=Symbol.for("react.context"),cy=Symbol.for("react.forward_ref"),dy=Symbol.for("react.suspense"),hy=Symbol.for("react.memo"),fy=Symbol.for("react.lazy"),Gd=Symbol.iterator;function py(t){return t===null||typeof t!="object"?null:(t=Gd&&t[Gd]||t["@@iterator"],typeof t=="function"?t:null)}var Sp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ip=Object.assign,kp={};function qr(t,e,n){this.props=t,this.context=e,this.refs=kp,this.updater=n||Sp}qr.prototype.isReactComponent={};qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tp(){}Tp.prototype=qr.prototype;function Ju(t,e,n){this.props=t,this.context=e,this.refs=kp,this.updater=n||Sp}var Zu=Ju.prototype=new Tp;Zu.constructor=Ju;Ip(Zu,qr.prototype);Zu.isPureReactComponent=!0;var Kd=Array.isArray,Np=Object.prototype.hasOwnProperty,ec={current:null},Rp={key:!0,ref:!0,__self:!0,__source:!0};function xp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Np.call(e,r)&&!Rp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:fs,type:t,key:s,ref:o,props:i,_owner:ec.current}}function my(t,e){return{$$typeof:fs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tc(t){return typeof t=="object"&&t!==null&&t.$$typeof===fs}function gy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qd=/\/+/g;function jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gy(""+t.key):e.toString(36)}function Zs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fs:case iy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+jl(o,0):r,Kd(i)?(n="",t!=null&&(n=t.replace(Qd,"$&/")+"/"),Zs(i,e,n,"",function(u){return u})):i!=null&&(tc(i)&&(i=my(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Qd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Kd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+jl(s,l);o+=Zs(s,e,n,a,i)}else if(a=py(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+jl(s,l++),o+=Zs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ds(t,e,n){if(t==null)return t;var r=[],i=0;return Zs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _y(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pe={current:null},eo={transition:null},vy={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:eo,ReactCurrentOwner:ec};B.Children={map:Ds,forEach:function(t,e,n){Ds(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ds(t,function(){e++}),e},toArray:function(t){return Ds(t,function(e){return e})||[]},only:function(t){if(!tc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=qr;B.Fragment=sy;B.Profiler=ly;B.PureComponent=Ju;B.StrictMode=oy;B.Suspense=dy;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vy;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ip({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ec.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Np.call(e,a)&&!Rp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:fs,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:uy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ay,_context:t},t.Consumer=t};B.createElement=xp;B.createFactory=function(t){var e=xp.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:cy,render:t}};B.isValidElement=tc;B.lazy=function(t){return{$$typeof:fy,_payload:{_status:-1,_result:t},_init:_y}};B.memo=function(t,e){return{$$typeof:hy,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=eo.transition;eo.transition={};try{t()}finally{eo.transition=e}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(t,e){return Pe.current.useCallback(t,e)};B.useContext=function(t){return Pe.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return Pe.current.useDeferredValue(t)};B.useEffect=function(t,e){return Pe.current.useEffect(t,e)};B.useId=function(){return Pe.current.useId()};B.useImperativeHandle=function(t,e,n){return Pe.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return Pe.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return Pe.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return Pe.current.useMemo(t,e)};B.useReducer=function(t,e,n){return Pe.current.useReducer(t,e,n)};B.useRef=function(t){return Pe.current.useRef(t)};B.useState=function(t){return Pe.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return Pe.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return Pe.current.useTransition()};B.version="18.2.0";E.exports=B;var Pp=E.exports,Aa=ny({__proto__:null,default:Pp},[E.exports]);/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ui(){return Ui=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ui.apply(this,arguments)}var rn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rn||(rn={}));const Yd="popstate";function yy(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Da("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:go(i)}return Ey(e,n,null,t)}function de(t,e){if(t===!1||t===null||typeof t=="undefined")throw new Error(e)}function wy(){return Math.random().toString(36).substr(2,8)}function qd(t,e){return{usr:t.state,key:t.key,idx:e}}function Da(t,e,n,r){return n===void 0&&(n=null),Ui({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xr(e):e,{state:n,key:e&&e.key||r||wy()})}function go(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ey(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=rn.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(Ui({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){l=rn.Pop;let S=d(),p=S==null?null:S-u;u=S,a&&a({action:l,location:v.location,delta:p})}function h(S,p){l=rn.Push;let f=Da(v.location,S,p);n&&n(f,S),u=d()+1;let g=qd(f,u),w=v.createHref(f);try{o.pushState(g,"",w)}catch{i.location.assign(w)}s&&a&&a({action:l,location:v.location,delta:1})}function m(S,p){l=rn.Replace;let f=Da(v.location,S,p);n&&n(f,S),u=d();let g=qd(f,u),w=v.createHref(f);o.replaceState(g,"",w),s&&a&&a({action:l,location:v.location,delta:0})}function _(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:go(S);return de(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return l},get location(){return t(i,o)},listen(S){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Yd,c),a=S,()=>{i.removeEventListener(Yd,c),a=null}},createHref(S){return e(i,S)},createURL:_,encodeLocation(S){let p=_(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:m,go(S){return o.go(S)}};return v}var Xd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Xd||(Xd={}));function Cy(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Xr(e):e,i=nc(r.pathname||"/",n);if(i==null)return null;let s=Op(t);Sy(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=Ay(s[l],Ly(i));return o}function Op(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(de(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=ln([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(de(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Op(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Py(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Ap(s.path))i(s,o,a)}),e}function Ap(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Ap(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function Sy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Oy(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Iy=/^:\w+$/,ky=3,Ty=2,Ny=1,Ry=10,xy=-2,Jd=t=>t==="*";function Py(t,e){let n=t.split("/"),r=n.length;return n.some(Jd)&&(r+=xy),e&&(r+=Ty),n.filter(i=>!Jd(i)).reduce((i,s)=>i+(Iy.test(s)?ky:s===""?Ny:Ry),r)}function Oy(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ay(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=Dy({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;s.push({params:r,pathname:ln([i,d.pathname]),pathnameBase:zy(ln([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=ln([i,d.pathnameBase]))}return s}function Dy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=My(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let h=l[c]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=by(l[c]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function My(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),rc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ly(t){try{return decodeURI(t)}catch(e){return rc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function by(t,e){try{return decodeURIComponent(t)}catch(n){return rc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function nc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function rc(t,e){if(!t){typeof console!="undefined"&&console.warn(e);try{throw new Error(e)}catch{}}}function Fy(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xr(t):t;return{pathname:n?n.startsWith("/")?n:Uy(n,e):e,search:By(r),hash:$y(i)}}function Uy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Mp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xr(t):(i=Ui({},t),de(!i.pathname||!i.pathname.includes("?"),Vl("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),Vl("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),Vl("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let c=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=Fy(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const ln=t=>t.join("/").replace(/\/\/+/g,"/"),zy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),By=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$y=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Wy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const jy=["post","put","patch","delete"];[...jy];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ma.apply(this,arguments)}function Vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const Hy=typeof Object.is=="function"?Object.is:Vy,{useState:Gy,useEffect:Ky,useLayoutEffect:Qy,useDebugValue:Yy}=Aa;function qy(t,e,n){const r=e(),[{inst:i},s]=Gy({inst:{value:r,getSnapshot:e}});return Qy(()=>{i.value=r,i.getSnapshot=e,Hl(i)&&s({inst:i})},[t,r,e]),Ky(()=>(Hl(i)&&s({inst:i}),t(()=>{Hl(i)&&s({inst:i})})),[t]),Yy(r),r}function Hl(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!Hy(n,r)}catch{return!0}}function Xy(t,e,n){return e()}const Jy=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",Zy=!Jy,e0=Zy?Xy:qy;"useSyncExternalStore"in Aa&&(t=>t.useSyncExternalStore)(Aa);const Lp=E.exports.createContext(null),bp=E.exports.createContext(null),ps=E.exports.createContext(null),ul=E.exports.createContext(null),kn=E.exports.createContext({outlet:null,matches:[]}),Fp=E.exports.createContext(null);function t0(t,e){let{relative:n}=e===void 0?{}:e;ms()||de(!1);let{basename:r,navigator:i}=E.exports.useContext(ps),{hash:s,pathname:o,search:l}=zp(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:ln([r,o])),i.createHref({pathname:a,search:l,hash:s})}function ms(){return E.exports.useContext(ul)!=null}function cl(){return ms()||de(!1),E.exports.useContext(ul).location}function ic(){ms()||de(!1);let{basename:t,navigator:e}=E.exports.useContext(ps),{matches:n}=E.exports.useContext(kn),{pathname:r}=cl(),i=JSON.stringify(Dp(n).map(l=>l.pathnameBase)),s=E.exports.useRef(!1);return E.exports.useEffect(()=>{s.current=!0}),E.exports.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=Mp(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:ln([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}const n0=E.exports.createContext(null);function r0(t){let e=E.exports.useContext(kn).outlet;return e&&E.exports.createElement(n0.Provider,{value:t},e)}function Up(){let{matches:t}=E.exports.useContext(kn),e=t[t.length-1];return e?e.params:{}}function zp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.exports.useContext(kn),{pathname:i}=cl(),s=JSON.stringify(Dp(r).map(o=>o.pathnameBase));return E.exports.useMemo(()=>Mp(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function i0(t,e){ms()||de(!1);let{navigator:n}=E.exports.useContext(ps),r=E.exports.useContext(bp),{matches:i}=E.exports.useContext(kn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=cl(),u;if(e){var d;let v=typeof e=="string"?Xr(e):e;l==="/"||((d=v.pathname)==null?void 0:d.startsWith(l))||de(!1),u=v}else u=a;let c=u.pathname||"/",h=l==="/"?c:c.slice(l.length)||"/",m=Cy(t,{pathname:h}),_=a0(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:ln([l,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:ln([l,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&_?E.exports.createElement(ul.Provider,{value:{location:Ma({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:rn.Pop}},_):_}function s0(){let t=h0(),e=Wy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.exports.createElement(E.exports.Fragment,null,E.exports.createElement("h2",null,"Unexpected Application Error!"),E.exports.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.exports.createElement("pre",{style:i},n):null,s)}class o0 extends E.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.exports.createElement(kn.Provider,{value:this.props.routeContext},E.exports.createElement(Fp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function l0(t){let{routeContext:e,match:n,children:r}=t,i=E.exports.useContext(Lp);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.exports.createElement(kn.Provider,{value:e},r)}function a0(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||de(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||E.exports.createElement(s0,null):null,d=e.concat(r.slice(0,l+1)),c=()=>E.exports.createElement(l0,{match:o,routeContext:{outlet:s,matches:d}},a?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||l===0)?E.exports.createElement(o0,{location:n.location,component:u,error:a,children:c(),routeContext:{outlet:null,matches:d}}):c()},null)}var Zd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Zd||(Zd={}));var _o;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(_o||(_o={}));function u0(t){let e=E.exports.useContext(bp);return e||de(!1),e}function c0(t){let e=E.exports.useContext(kn);return e||de(!1),e}function d0(t){let e=c0(),n=e.matches[e.matches.length-1];return n.route.id||de(!1),n.route.id}function h0(){var t;let e=E.exports.useContext(Fp),n=u0(_o.UseRouteError),r=d0(_o.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function f0(t){return r0(t.context)}function nt(t){de(!1)}function p0(t){let{basename:e="/",children:n=null,location:r,navigationType:i=rn.Pop,navigator:s,static:o=!1}=t;ms()&&de(!1);let l=e.replace(/^\/*/,"/"),a=E.exports.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Xr(r));let{pathname:u="/",search:d="",hash:c="",state:h=null,key:m="default"}=r,_=E.exports.useMemo(()=>{let v=nc(u,l);return v==null?null:{pathname:v,search:d,hash:c,state:h,key:m}},[l,u,d,c,h,m]);return _==null?null:E.exports.createElement(ps.Provider,{value:a},E.exports.createElement(ul.Provider,{children:n,value:{location:_,navigationType:i}}))}function m0(t){let{children:e,location:n}=t,r=E.exports.useContext(Lp),i=r&&!e?r.router.routes:La(e);return i0(i,n)}var eh;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(eh||(eh={}));new Promise(()=>{});function La(t,e){e===void 0&&(e=[]);let n=[];return E.exports.Children.forEach(t,(r,i)=>{if(!E.exports.isValidElement(r))return;if(r.type===E.exports.Fragment){n.push.apply(n,La(r.props.children,e));return}r.type!==nt&&de(!1),!r.props.index||!r.props.children||de(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=La(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ba(){return ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ba.apply(this,arguments)}function g0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function v0(t,e){return t.button===0&&(!e||e==="_self")&&!_0(t)}const y0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function w0(t){let{basename:e,children:n,window:r}=t,i=E.exports.useRef();i.current==null&&(i.current=yy({window:r,v5Compat:!0}));let s=i.current,[o,l]=E.exports.useState({action:s.action,location:s.location});return E.exports.useLayoutEffect(()=>s.listen(l),[s]),E.exports.createElement(p0,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const E0=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",C0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,St=E.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:d}=e,c=g0(e,y0),{basename:h}=E.exports.useContext(ps),m,_=!1;if(typeof u=="string"&&C0.test(u)&&(m=u,E0)){let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),w=nc(g.pathname,h);g.origin===f.origin&&w!=null?u=w+g.search+g.hash:_=!0}let v=t0(u,{relative:i}),S=S0(u,{replace:o,state:l,target:a,preventScrollReset:d,relative:i});function p(f){r&&r(f),f.defaultPrevented||S(f)}return E.exports.createElement("a",ba({},c,{href:m||v,onClick:_||s?r:p,ref:n,target:a}))});var th;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(th||(th={}));var nh;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(nh||(nh={}));function S0(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=ic(),a=cl(),u=zp(t,{relative:o});return E.exports.useCallback(d=>{if(v0(d,n)){d.preventDefault();let c=r!==void 0?r:go(a)===go(u);l(t,{replace:c,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}var Fa={},Bp={exports:{}},Ge={},$p={exports:{}},Wp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,T){var A=x.length;x.push(T);e:for(;0<A;){var U=A-1>>>1,re=x[U];if(0<i(re,T))x[U]=T,x[A]=re,A=U;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var T=x[0],A=x.pop();if(A!==T){x[0]=A;e:for(var U=0,re=x.length,It=re>>>1;U<It;){var kt=2*(U+1)-1,ar=x[kt],An=kt+1,As=x[An];if(0>i(ar,A))An<re&&0>i(As,ar)?(x[U]=As,x[An]=A,U=An):(x[U]=ar,x[kt]=A,U=kt);else if(An<re&&0>i(As,A))x[U]=As,x[An]=A,U=An;else break e}}return T}function i(x,T){var A=x.sortIndex-T.sortIndex;return A!==0?A:x.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,m=!1,_=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(x){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=x)r(u),T.sortIndex=T.expirationTime,e(a,T);else break;T=n(u)}}function w(x){if(v=!1,g(x),!_)if(n(a)!==null)_=!0,oi(k);else{var T=n(u);T!==null&&li(w,T.startTime-x)}}function k(x,T){_=!1,v&&(v=!1,p(O),O=-1),m=!0;var A=h;try{for(g(T),c=n(a);c!==null&&(!(c.expirationTime>T)||x&&!$e());){var U=c.callback;if(typeof U=="function"){c.callback=null,h=c.priorityLevel;var re=U(c.expirationTime<=T);T=t.unstable_now(),typeof re=="function"?c.callback=re:c===n(a)&&r(a),g(T)}else r(a);c=n(a)}if(c!==null)var It=!0;else{var kt=n(u);kt!==null&&li(w,kt.startTime-T),It=!1}return It}finally{c=null,h=A,m=!1}}var R=!1,N=null,O=-1,j=5,L=-1;function $e(){return!(t.unstable_now()-L<j)}function Pn(){if(N!==null){var x=t.unstable_now();L=x;var T=!0;try{T=N(!0,x)}finally{T?On():(R=!1,N=null)}}else R=!1}var On;if(typeof f=="function")On=function(){f(Pn)};else if(typeof MessageChannel!="undefined"){var si=new MessageChannel,Os=si.port2;si.port1.onmessage=Pn,On=function(){Os.postMessage(null)}}else On=function(){S(Pn,0)};function oi(x){N=x,R||(R=!0,On())}function li(x,T){O=S(function(){x(t.unstable_now())},T)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,oi(k))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(x){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var A=h;h=T;try{return x()}finally{h=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,T){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var A=h;h=x;try{return T()}finally{h=A}},t.unstable_scheduleCallback=function(x,T,A){var U=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?U+A:U):A=U,x){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=A+re,x={id:d++,callback:T,priorityLevel:x,startTime:A,expirationTime:re,sortIndex:-1},A>U?(x.sortIndex=A,e(u,x),n(a)===null&&x===n(u)&&(v?(p(O),O=-1):v=!0,li(w,A-U))):(x.sortIndex=re,e(a,x),_||m||(_=!0,oi(k))),x},t.unstable_shouldYield=$e,t.unstable_wrapCallback=function(x){var T=h;return function(){var A=h;h=T;try{return x.apply(this,arguments)}finally{h=A}}}})(Wp);$p.exports=Wp;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp=E.exports,He=$p.exports;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vp=new Set,zi={};function ir(t,e){Fr(t,e),Fr(t+"Capture",e)}function Fr(t,e){for(zi[t]=e,t=0;t<e.length;t++)Vp.add(e[t])}var Lt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Ua=Object.prototype.hasOwnProperty,I0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rh={},ih={};function k0(t){return Ua.call(ih,t)?!0:Ua.call(rh,t)?!1:I0.test(t)?ih[t]=!0:(rh[t]=!0,!1)}function T0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function N0(t,e,n,r){if(e===null||typeof e=="undefined"||T0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Oe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){we[t]=new Oe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];we[e]=new Oe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){we[t]=new Oe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){we[t]=new Oe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){we[t]=new Oe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){we[t]=new Oe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){we[t]=new Oe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){we[t]=new Oe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){we[t]=new Oe(t,5,!1,t.toLowerCase(),null,!1,!1)});var sc=/[\-:]([a-z])/g;function oc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sc,oc);we[e]=new Oe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sc,oc);we[e]=new Oe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sc,oc);we[e]=new Oe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){we[t]=new Oe(t,1,!1,t.toLowerCase(),null,!1,!1)});we.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){we[t]=new Oe(t,1,!1,t.toLowerCase(),null,!0,!0)});function lc(t,e,n,r){var i=we.hasOwnProperty(e)?we[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(N0(e,n,i,r)&&(n=null),r||i===null?k0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jt=jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ms=Symbol.for("react.element"),dr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),za=Symbol.for("react.profiler"),Hp=Symbol.for("react.provider"),Gp=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),Ba=Symbol.for("react.suspense"),$a=Symbol.for("react.suspense_list"),cc=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),Kp=Symbol.for("react.offscreen"),sh=Symbol.iterator;function ai(t){return t===null||typeof t!="object"?null:(t=sh&&t[sh]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,Gl;function wi(t){if(Gl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gl=e&&e[1]||""}return`
`+Gl+t}var Kl=!1;function Ql(t,e){if(!t||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wi(t):""}function R0(t){switch(t.tag){case 5:return wi(t.type);case 16:return wi("Lazy");case 13:return wi("Suspense");case 19:return wi("SuspenseList");case 0:case 2:case 15:return t=Ql(t.type,!1),t;case 11:return t=Ql(t.type.render,!1),t;case 1:return t=Ql(t.type,!0),t;default:return""}}function Wa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hr:return"Fragment";case dr:return"Portal";case za:return"Profiler";case ac:return"StrictMode";case Ba:return"Suspense";case $a:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gp:return(t.displayName||"Context")+".Consumer";case Hp:return(t._context.displayName||"Context")+".Provider";case uc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cc:return e=t.displayName||null,e!==null?e:Wa(t.type)||"Memo";case Qt:e=t._payload,t=t._init;try{return Wa(t(e))}catch{}}return null}function x0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wa(e);case 8:return e===ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function P0(t){var e=Qp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ls(t){t._valueTracker||(t._valueTracker=P0(t))}function Yp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Qp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vo(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function ja(t,e){var n=e.checked;return ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function oh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qp(t,e){e=e.checked,e!=null&&lc(t,"checked",e,!1)}function Va(t,e){qp(t,e);var n=wn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ha(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ha(t,e.type,wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ha(t,e,n){(e!=="number"||vo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ei=Array.isArray;function kr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ga(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ah(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Ei(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wn(n)}}function Xp(t,e){var n=wn(e.value),r=wn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function uh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ka(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bs,Zp=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bs=bs||document.createElement("div"),bs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O0=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(t){O0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ii[e]=Ii[t]})});function em(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ii.hasOwnProperty(t)&&Ii[t]?(""+e).trim():e+"px"}function tm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=em(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var A0=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qa(t,e){if(e){if(A0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Ya(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qa=null;function dc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xa=null,Tr=null,Nr=null;function ch(t){if(t=vs(t)){if(typeof Xa!="function")throw Error(C(280));var e=t.stateNode;e&&(e=ml(e),Xa(t.stateNode,t.type,e))}}function nm(t){Tr?Nr?Nr.push(t):Nr=[t]:Tr=t}function rm(){if(Tr){var t=Tr,e=Nr;if(Nr=Tr=null,ch(t),e)for(t=0;t<e.length;t++)ch(e[t])}}function im(t,e){return t(e)}function sm(){}var Yl=!1;function om(t,e,n){if(Yl)return t(e,n);Yl=!0;try{return im(t,e,n)}finally{Yl=!1,(Tr!==null||Nr!==null)&&(sm(),rm())}}function $i(t,e){var n=t.stateNode;if(n===null)return null;var r=ml(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Ja=!1;if(Lt)try{var ui={};Object.defineProperty(ui,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",ui,ui),window.removeEventListener("test",ui,ui)}catch{Ja=!1}function D0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var ki=!1,yo=null,wo=!1,Za=null,M0={onError:function(t){ki=!0,yo=t}};function L0(t,e,n,r,i,s,o,l,a){ki=!1,yo=null,D0.apply(M0,arguments)}function b0(t,e,n,r,i,s,o,l,a){if(L0.apply(this,arguments),ki){if(ki){var u=yo;ki=!1,yo=null}else throw Error(C(198));wo||(wo=!0,Za=u)}}function sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dh(t){if(sr(t)!==t)throw Error(C(188))}function F0(t){var e=t.alternate;if(!e){if(e=sr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dh(i),t;if(s===r)return dh(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function am(t){return t=F0(t),t!==null?um(t):null}function um(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=um(t);if(e!==null)return e;t=t.sibling}return null}var cm=He.unstable_scheduleCallback,hh=He.unstable_cancelCallback,U0=He.unstable_shouldYield,z0=He.unstable_requestPaint,oe=He.unstable_now,B0=He.unstable_getCurrentPriorityLevel,hc=He.unstable_ImmediatePriority,dm=He.unstable_UserBlockingPriority,Eo=He.unstable_NormalPriority,$0=He.unstable_LowPriority,hm=He.unstable_IdlePriority,dl=null,yt=null;function W0(t){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(dl,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:H0,j0=Math.log,V0=Math.LN2;function H0(t){return t>>>=0,t===0?32:31-(j0(t)/V0|0)|0}var Fs=64,Us=4194304;function Ci(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Co(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ci(l):(s&=o,s!==0&&(r=Ci(s)))}else o=n&~i,o!==0?r=Ci(o):s!==0&&(r=Ci(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function G0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dt(s),l=1<<o,a=i[o];a===-1?((l&n)===0||(l&r)!==0)&&(i[o]=G0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function eu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fm(){var t=Fs;return Fs<<=1,(Fs&4194240)===0&&(Fs=64),t}function ql(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function gs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function Q0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function fc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function pm(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var mm,pc,gm,_m,vm,tu=!1,zs=[],an=null,un=null,cn=null,Wi=new Map,ji=new Map,qt=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fh(t,e){switch(t){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":Wi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(e.pointerId)}}function ci(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=vs(e),e!==null&&pc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function q0(t,e,n,r,i){switch(e){case"focusin":return an=ci(an,t,e,n,r,i),!0;case"dragenter":return un=ci(un,t,e,n,r,i),!0;case"mouseover":return cn=ci(cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wi.set(s,ci(Wi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ji.set(s,ci(ji.get(s)||null,t,e,n,r,i)),!0}return!1}function ym(t){var e=Fn(t.target);if(e!==null){var n=sr(e);if(n!==null){if(e=n.tag,e===13){if(e=lm(n),e!==null){t.blockedOn=e,vm(t.priority,function(){gm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function to(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qa=r,n.target.dispatchEvent(r),qa=null}else return e=vs(n),e!==null&&pc(e),t.blockedOn=n,!1;e.shift()}return!0}function ph(t,e,n){to(t)&&n.delete(e)}function X0(){tu=!1,an!==null&&to(an)&&(an=null),un!==null&&to(un)&&(un=null),cn!==null&&to(cn)&&(cn=null),Wi.forEach(ph),ji.forEach(ph)}function di(t,e){t.blockedOn===e&&(t.blockedOn=null,tu||(tu=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,X0)))}function Vi(t){function e(i){return di(i,t)}if(0<zs.length){di(zs[0],t);for(var n=1;n<zs.length;n++){var r=zs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(an!==null&&di(an,t),un!==null&&di(un,t),cn!==null&&di(cn,t),Wi.forEach(e),ji.forEach(e),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)ym(n),n.blockedOn===null&&qt.shift()}var Rr=jt.ReactCurrentBatchConfig,So=!0;function J0(t,e,n,r){var i=V,s=Rr.transition;Rr.transition=null;try{V=1,mc(t,e,n,r)}finally{V=i,Rr.transition=s}}function Z0(t,e,n,r){var i=V,s=Rr.transition;Rr.transition=null;try{V=4,mc(t,e,n,r)}finally{V=i,Rr.transition=s}}function mc(t,e,n,r){if(So){var i=nu(t,e,n,r);if(i===null)oa(t,e,r,Io,n),fh(t,r);else if(q0(i,t,e,n,r))r.stopPropagation();else if(fh(t,r),e&4&&-1<Y0.indexOf(t)){for(;i!==null;){var s=vs(i);if(s!==null&&mm(s),s=nu(t,e,n,r),s===null&&oa(t,e,r,Io,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else oa(t,e,r,null,n)}}var Io=null;function nu(t,e,n,r){if(Io=null,t=dc(r),t=Fn(t),t!==null)if(e=sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Io=t,null}function wm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B0()){case hc:return 1;case dm:return 4;case Eo:case $0:return 16;case hm:return 536870912;default:return 16}default:return 16}}var sn=null,gc=null,no=null;function Em(){if(no)return no;var t,e=gc,n=e.length,r,i="value"in sn?sn.value:sn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return no=i.slice(t,1<r?1-r:void 0)}function ro(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bs(){return!0}function mh(){return!1}function Ke(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bs:mh,this.isPropagationStopped=mh,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bs)},persist:function(){},isPersistent:Bs}),e}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=Ke(Jr),_s=ne({},Jr,{view:0,detail:0}),ew=Ke(_s),Xl,Jl,hi,hl=ne({},_s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hi&&(hi&&t.type==="mousemove"?(Xl=t.screenX-hi.screenX,Jl=t.screenY-hi.screenY):Jl=Xl=0,hi=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),gh=Ke(hl),tw=ne({},hl,{dataTransfer:0}),nw=Ke(tw),rw=ne({},_s,{relatedTarget:0}),Zl=Ke(rw),iw=ne({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),sw=Ke(iw),ow=ne({},Jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lw=Ke(ow),aw=ne({},Jr,{data:0}),_h=Ke(aw),uw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dw[t])?!!e[t]:!1}function vc(){return hw}var fw=ne({},_s,{key:function(t){if(t.key){var e=uw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(t){return t.type==="keypress"?ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pw=Ke(fw),mw=ne({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vh=Ke(mw),gw=ne({},_s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),_w=Ke(gw),vw=ne({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),yw=Ke(vw),ww=ne({},hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ew=Ke(ww),Cw=[9,13,27,32],yc=Lt&&"CompositionEvent"in window,Ti=null;Lt&&"documentMode"in document&&(Ti=document.documentMode);var Sw=Lt&&"TextEvent"in window&&!Ti,Cm=Lt&&(!yc||Ti&&8<Ti&&11>=Ti),yh=String.fromCharCode(32),wh=!1;function Sm(t,e){switch(t){case"keyup":return Cw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fr=!1;function Iw(t,e){switch(t){case"compositionend":return Im(e);case"keypress":return e.which!==32?null:(wh=!0,yh);case"textInput":return t=e.data,t===yh&&wh?null:t;default:return null}}function kw(t,e){if(fr)return t==="compositionend"||!yc&&Sm(t,e)?(t=Em(),no=gc=sn=null,fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cm&&e.locale!=="ko"?null:e.data;default:return null}}var Tw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Tw[t.type]:e==="textarea"}function km(t,e,n,r){nm(r),e=ko(e,"onChange"),0<e.length&&(n=new _c("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ni=null,Hi=null;function Nw(t){bm(t,0)}function fl(t){var e=gr(t);if(Yp(e))return t}function Rw(t,e){if(t==="change")return e}var Tm=!1;if(Lt){var ea;if(Lt){var ta="oninput"in document;if(!ta){var Ch=document.createElement("div");Ch.setAttribute("oninput","return;"),ta=typeof Ch.oninput=="function"}ea=ta}else ea=!1;Tm=ea&&(!document.documentMode||9<document.documentMode)}function Sh(){Ni&&(Ni.detachEvent("onpropertychange",Nm),Hi=Ni=null)}function Nm(t){if(t.propertyName==="value"&&fl(Hi)){var e=[];km(e,Hi,t,dc(t)),om(Nw,e)}}function xw(t,e,n){t==="focusin"?(Sh(),Ni=e,Hi=n,Ni.attachEvent("onpropertychange",Nm)):t==="focusout"&&Sh()}function Pw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(Hi)}function Ow(t,e){if(t==="click")return fl(e)}function Aw(t,e){if(t==="input"||t==="change")return fl(e)}function Dw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pt=typeof Object.is=="function"?Object.is:Dw;function Gi(t,e){if(pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ua.call(e,i)||!pt(t[i],e[i]))return!1}return!0}function Ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kh(t,e){var n=Ih(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ih(n)}}function Rm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xm(){for(var t=window,e=vo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vo(t.document)}return e}function wc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Mw(t){var e=xm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rm(n.ownerDocument.documentElement,n)){if(r!==null&&wc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=kh(n,s);var o=kh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Lw=Lt&&"documentMode"in document&&11>=document.documentMode,pr=null,ru=null,Ri=null,iu=!1;function Th(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;iu||pr==null||pr!==vo(r)||(r=pr,"selectionStart"in r&&wc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&Gi(Ri,r)||(Ri=r,r=ko(ru,"onSelect"),0<r.length&&(e=new _c("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pr)))}function $s(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mr={animationend:$s("Animation","AnimationEnd"),animationiteration:$s("Animation","AnimationIteration"),animationstart:$s("Animation","AnimationStart"),transitionend:$s("Transition","TransitionEnd")},na={},Pm={};Lt&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function pl(t){if(na[t])return na[t];if(!mr[t])return t;var e=mr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pm)return na[t]=e[n];return t}var Om=pl("animationend"),Am=pl("animationiteration"),Dm=pl("animationstart"),Mm=pl("transitionend"),Lm=new Map,Nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(t,e){Lm.set(t,e),ir(e,[t])}for(var ra=0;ra<Nh.length;ra++){var ia=Nh[ra],bw=ia.toLowerCase(),Fw=ia[0].toUpperCase()+ia.slice(1);Tn(bw,"on"+Fw)}Tn(Om,"onAnimationEnd");Tn(Am,"onAnimationIteration");Tn(Dm,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(Mm,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));function Rh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,b0(r,e,void 0,t),t.currentTarget=null}function bm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Rh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Rh(i,l,u),s=a}}}if(wo)throw t=Za,wo=!1,Za=null,t}function q(t,e){var n=e[uu];n===void 0&&(n=e[uu]=new Set);var r=t+"__bubble";n.has(r)||(Fm(e,t,2,!1),n.add(r))}function sa(t,e,n){var r=0;e&&(r|=4),Fm(n,t,r,e)}var Ws="_reactListening"+Math.random().toString(36).slice(2);function Ki(t){if(!t[Ws]){t[Ws]=!0,Vp.forEach(function(n){n!=="selectionchange"&&(Uw.has(n)||sa(n,!1,t),sa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ws]||(e[Ws]=!0,sa("selectionchange",!1,e))}}function Fm(t,e,n,r){switch(wm(e)){case 1:var i=J0;break;case 4:i=Z0;break;default:i=mc}n=i.bind(null,e,n,t),i=void 0,!Ja||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function oa(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Fn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}om(function(){var u=s,d=dc(n),c=[];e:{var h=Lm.get(t);if(h!==void 0){var m=_c,_=t;switch(t){case"keypress":if(ro(n)===0)break e;case"keydown":case"keyup":m=pw;break;case"focusin":_="focus",m=Zl;break;case"focusout":_="blur",m=Zl;break;case"beforeblur":case"afterblur":m=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=nw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=_w;break;case Om:case Am:case Dm:m=sw;break;case Mm:m=yw;break;case"scroll":m=ew;break;case"wheel":m=Ew;break;case"copy":case"cut":case"paste":m=lw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=vh}var v=(e&4)!==0,S=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=$i(f,p),w!=null&&v.push(Qi(f,w,g)))),S)break;f=f.return}0<v.length&&(h=new m(h,_,null,n,d),c.push({event:h,listeners:v}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==qa&&(_=n.relatedTarget||n.fromElement)&&(Fn(_)||_[bt]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Fn(_):null,_!==null&&(S=sr(_),_!==S||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(v=gh,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=vh,w="onPointerLeave",p="onPointerEnter",f="pointer"),S=m==null?h:gr(m),g=_==null?h:gr(_),h=new v(w,f+"leave",m,n,d),h.target=S,h.relatedTarget=g,w=null,Fn(d)===u&&(v=new v(p,f+"enter",_,n,d),v.target=g,v.relatedTarget=S,w=v),S=w,m&&_)t:{for(v=m,p=_,f=0,g=v;g;g=ur(g))f++;for(g=0,w=p;w;w=ur(w))g++;for(;0<f-g;)v=ur(v),f--;for(;0<g-f;)p=ur(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=ur(v),p=ur(p)}v=null}else v=null;m!==null&&xh(c,h,m,v,!1),_!==null&&S!==null&&xh(c,S,_,v,!0)}}e:{if(h=u?gr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var k=Rw;else if(Eh(h))if(Tm)k=Aw;else{k=Pw;var R=xw}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Ow);if(k&&(k=k(t,u))){km(c,k,n,d);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Ha(h,"number",h.value)}switch(R=u?gr(u):window,t){case"focusin":(Eh(R)||R.contentEditable==="true")&&(pr=R,ru=u,Ri=null);break;case"focusout":Ri=ru=pr=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,Th(c,n,d);break;case"selectionchange":if(Lw)break;case"keydown":case"keyup":Th(c,n,d)}var N;if(yc)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else fr?Sm(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Cm&&n.locale!=="ko"&&(fr||O!=="onCompositionStart"?O==="onCompositionEnd"&&fr&&(N=Em()):(sn=d,gc="value"in sn?sn.value:sn.textContent,fr=!0)),R=ko(u,O),0<R.length&&(O=new _h(O,t,null,n,d),c.push({event:O,listeners:R}),N?O.data=N:(N=Im(n),N!==null&&(O.data=N)))),(N=Sw?Iw(t,n):kw(t,n))&&(u=ko(u,"onBeforeInput"),0<u.length&&(d=new _h("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=N))}bm(c,e)})}function Qi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ko(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$i(t,n),s!=null&&r.unshift(Qi(t,s,i)),s=$i(t,e),s!=null&&r.push(Qi(t,s,i))),t=t.return}return r}function ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=$i(n,s),a!=null&&o.unshift(Qi(n,a,l))):i||(a=$i(n,s),a!=null&&o.push(Qi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zw=/\r\n?/g,Bw=/\u0000|\uFFFD/g;function Ph(t){return(typeof t=="string"?t:""+t).replace(zw,`
`).replace(Bw,"")}function js(t,e,n){if(e=Ph(e),Ph(t)!==e&&n)throw Error(C(425))}function To(){}var su=null,ou=null;function lu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,$w=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,Ww=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh!="undefined"?function(t){return Oh.resolve(null).then(t).catch(jw)}:au;function jw(t){setTimeout(function(){throw t})}function la(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vi(e)}function dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ah(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),vt="__reactFiber$"+Zr,Yi="__reactProps$"+Zr,bt="__reactContainer$"+Zr,uu="__reactEvents$"+Zr,Vw="__reactListeners$"+Zr,Hw="__reactHandles$"+Zr;function Fn(t){var e=t[vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bt]||n[vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ah(t);t!==null;){if(n=t[vt])return n;t=Ah(t)}return e}t=n,n=t.parentNode}return null}function vs(t){return t=t[vt]||t[bt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function ml(t){return t[Yi]||null}var cu=[],_r=-1;function Nn(t){return{current:t}}function J(t){0>_r||(t.current=cu[_r],cu[_r]=null,_r--)}function Y(t,e){_r++,cu[_r]=t.current,t.current=e}var En={},Te=Nn(En),be=Nn(!1),Gn=En;function Ur(t,e){var n=t.type.contextTypes;if(!n)return En;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(t){return t=t.childContextTypes,t!=null}function No(){J(be),J(Te)}function Dh(t,e,n){if(Te.current!==En)throw Error(C(168));Y(Te,e),Y(be,n)}function Um(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,x0(t)||"Unknown",i));return ne({},n,r)}function Ro(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||En,Gn=Te.current,Y(Te,t),Y(be,be.current),!0}function Mh(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Um(t,e,Gn),r.__reactInternalMemoizedMergedChildContext=t,J(be),J(Te),Y(Te,t)):J(be),Y(be,n)}var Nt=null,gl=!1,aa=!1;function zm(t){Nt===null?Nt=[t]:Nt.push(t)}function Gw(t){gl=!0,zm(t)}function Rn(){if(!aa&&Nt!==null){aa=!0;var t=0,e=V;try{var n=Nt;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nt=null,gl=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(t+1)),cm(hc,Rn),i}finally{V=e,aa=!1}}return null}var vr=[],yr=0,xo=null,Po=0,Ye=[],qe=0,Kn=null,Rt=1,xt="";function Dn(t,e){vr[yr++]=Po,vr[yr++]=xo,xo=t,Po=e}function Bm(t,e,n){Ye[qe++]=Rt,Ye[qe++]=xt,Ye[qe++]=Kn,Kn=t;var r=Rt;t=xt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rt=1<<32-dt(e)+i|n<<i|r,xt=s+t}else Rt=1<<s|n<<i|r,xt=t}function Ec(t){t.return!==null&&(Dn(t,1),Bm(t,1,0))}function Cc(t){for(;t===xo;)xo=vr[--yr],vr[yr]=null,Po=vr[--yr],vr[yr]=null;for(;t===Kn;)Kn=Ye[--qe],Ye[qe]=null,xt=Ye[--qe],Ye[qe]=null,Rt=Ye[--qe],Ye[qe]=null}var Ve=null,je=null,Z=!1,st=null;function $m(t,e){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ve=t,je=dn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ve=t,je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kn!==null?{id:Rt,overflow:xt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ve=t,je=null,!0):!1;default:return!1}}function du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hu(t){if(Z){var e=je;if(e){var n=e;if(!Lh(t,e)){if(du(t))throw Error(C(418));e=dn(n.nextSibling);var r=Ve;e&&Lh(t,e)?$m(r,n):(t.flags=t.flags&-4097|2,Z=!1,Ve=t)}}else{if(du(t))throw Error(C(418));t.flags=t.flags&-4097|2,Z=!1,Ve=t}}}function bh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ve=t}function Vs(t){if(t!==Ve)return!1;if(!Z)return bh(t),Z=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lu(t.type,t.memoizedProps)),e&&(e=je)){if(du(t))throw Wm(),Error(C(418));for(;e;)$m(t,e),e=dn(e.nextSibling)}if(bh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){je=dn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}je=null}}else je=Ve?dn(t.stateNode.nextSibling):null;return!0}function Wm(){for(var t=je;t;)t=dn(t.nextSibling)}function zr(){je=Ve=null,Z=!1}function Sc(t){st===null?st=[t]:st.push(t)}var Kw=jt.ReactCurrentBatchConfig;function rt(t,e){if(t&&t.defaultProps){e=ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Oo=Nn(null),Ao=null,wr=null,Ic=null;function kc(){Ic=wr=Ao=null}function Tc(t){var e=Oo.current;J(Oo),t._currentValue=e}function fu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xr(t,e){Ao=t,Ic=wr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(De=!0),t.firstContext=null)}function Ze(t){var e=t._currentValue;if(Ic!==t)if(t={context:t,memoizedValue:e,next:null},wr===null){if(Ao===null)throw Error(C(308));wr=t,Ao.dependencies={lanes:0,firstContext:t}}else wr=wr.next=t;return e}var Un=null;function Nc(t){Un===null?Un=[t]:Un.push(t)}function jm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Nc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ft(t,r)}function Ft(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yt=!1;function Rc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,($&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ft(t,n)}return i=r.interleaved,i===null?(e.next=e,Nc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ft(t,n)}function io(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fc(t,n)}}function Fh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Do(t,e,n,r){var i=t.updateQueue;Yt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,m=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,m=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(m,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(m,c,h):_,h==null)break e;c=ne({},c,h);break e;case 2:Yt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,a=c):d=d.next=m,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yn|=o,t.lanes=o,t.memoizedState=c}}function Uh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Hm=new jp.Component().refs;function pu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _l={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xe(),i=pn(t),s=Dt(r,i);s.payload=e,n!=null&&(s.callback=n),e=hn(t,s,i),e!==null&&(ht(e,t,i,r),io(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xe(),i=pn(t),s=Dt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hn(t,s,i),e!==null&&(ht(e,t,i,r),io(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xe(),r=pn(t),i=Dt(n,r);i.tag=2,e!=null&&(i.callback=e),e=hn(t,i,r),e!==null&&(ht(e,t,r,n),io(e,t,r))}};function zh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Gi(n,r)||!Gi(i,s):!0}function Gm(t,e,n){var r=!1,i=En,s=e.contextType;return typeof s=="object"&&s!==null?s=Ze(s):(i=Fe(e)?Gn:Te.current,r=e.contextTypes,s=(r=r!=null)?Ur(t,i):En),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_l,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_l.enqueueReplaceState(e,e.state,null)}function mu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Hm,Rc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ze(s):(s=Fe(e)?Gn:Te.current,i.context=Ur(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_l.enqueueReplaceState(i,i.state,null),Do(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Hm&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Hs(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $h(t){var e=t._init;return e(t._payload)}function Km(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=mn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,g,w){return f===null||f.tag!==6?(f=ma(g,p.mode,w),f.return=p,f):(f=i(f,g),f.return=p,f)}function a(p,f,g,w){var k=g.type;return k===hr?d(p,f,g.props.children,w,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Qt&&$h(k)===f.type)?(w=i(f,g.props),w.ref=fi(p,f,g),w.return=p,w):(w=co(g.type,g.key,g.props,null,p.mode,w),w.ref=fi(p,f,g),w.return=p,w)}function u(p,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=ga(g,p.mode,w),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function d(p,f,g,w,k){return f===null||f.tag!==7?(f=jn(g,p.mode,w,k),f.return=p,f):(f=i(f,g),f.return=p,f)}function c(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ma(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ms:return g=co(f.type,f.key,f.props,null,p.mode,g),g.ref=fi(p,null,f),g.return=p,g;case dr:return f=ga(f,p.mode,g),f.return=p,f;case Qt:var w=f._init;return c(p,w(f._payload),g)}if(Ei(f)||ai(f))return f=jn(f,p.mode,g,null),f.return=p,f;Hs(p,f)}return null}function h(p,f,g,w){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(p,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ms:return g.key===k?a(p,f,g,w):null;case dr:return g.key===k?u(p,f,g,w):null;case Qt:return k=g._init,h(p,f,k(g._payload),w)}if(Ei(g)||ai(g))return k!==null?null:d(p,f,g,w,null);Hs(p,g)}return null}function m(p,f,g,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,l(f,p,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ms:return p=p.get(w.key===null?g:w.key)||null,a(f,p,w,k);case dr:return p=p.get(w.key===null?g:w.key)||null,u(f,p,w,k);case Qt:var R=w._init;return m(p,f,g,R(w._payload),k)}if(Ei(w)||ai(w))return p=p.get(g)||null,d(f,p,w,k,null);Hs(f,w)}return null}function _(p,f,g,w){for(var k=null,R=null,N=f,O=f=0,j=null;N!==null&&O<g.length;O++){N.index>O?(j=N,N=null):j=N.sibling;var L=h(p,N,g[O],w);if(L===null){N===null&&(N=j);break}t&&N&&L.alternate===null&&e(p,N),f=s(L,f,O),R===null?k=L:R.sibling=L,R=L,N=j}if(O===g.length)return n(p,N),Z&&Dn(p,O),k;if(N===null){for(;O<g.length;O++)N=c(p,g[O],w),N!==null&&(f=s(N,f,O),R===null?k=N:R.sibling=N,R=N);return Z&&Dn(p,O),k}for(N=r(p,N);O<g.length;O++)j=m(N,p,O,g[O],w),j!==null&&(t&&j.alternate!==null&&N.delete(j.key===null?O:j.key),f=s(j,f,O),R===null?k=j:R.sibling=j,R=j);return t&&N.forEach(function($e){return e(p,$e)}),Z&&Dn(p,O),k}function v(p,f,g,w){var k=ai(g);if(typeof k!="function")throw Error(C(150));if(g=k.call(g),g==null)throw Error(C(151));for(var R=k=null,N=f,O=f=0,j=null,L=g.next();N!==null&&!L.done;O++,L=g.next()){N.index>O?(j=N,N=null):j=N.sibling;var $e=h(p,N,L.value,w);if($e===null){N===null&&(N=j);break}t&&N&&$e.alternate===null&&e(p,N),f=s($e,f,O),R===null?k=$e:R.sibling=$e,R=$e,N=j}if(L.done)return n(p,N),Z&&Dn(p,O),k;if(N===null){for(;!L.done;O++,L=g.next())L=c(p,L.value,w),L!==null&&(f=s(L,f,O),R===null?k=L:R.sibling=L,R=L);return Z&&Dn(p,O),k}for(N=r(p,N);!L.done;O++,L=g.next())L=m(N,p,O,L.value,w),L!==null&&(t&&L.alternate!==null&&N.delete(L.key===null?O:L.key),f=s(L,f,O),R===null?k=L:R.sibling=L,R=L);return t&&N.forEach(function(Pn){return e(p,Pn)}),Z&&Dn(p,O),k}function S(p,f,g,w){if(typeof g=="object"&&g!==null&&g.type===hr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ms:e:{for(var k=g.key,R=f;R!==null;){if(R.key===k){if(k=g.type,k===hr){if(R.tag===7){n(p,R.sibling),f=i(R,g.props.children),f.return=p,p=f;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Qt&&$h(k)===R.type){n(p,R.sibling),f=i(R,g.props),f.ref=fi(p,R,g),f.return=p,p=f;break e}n(p,R);break}else e(p,R);R=R.sibling}g.type===hr?(f=jn(g.props.children,p.mode,w,g.key),f.return=p,p=f):(w=co(g.type,g.key,g.props,null,p.mode,w),w.ref=fi(p,f,g),w.return=p,p=w)}return o(p);case dr:e:{for(R=g.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ga(g,p.mode,w),f.return=p,p=f}return o(p);case Qt:return R=g._init,S(p,f,R(g._payload),w)}if(Ei(g))return _(p,f,g,w);if(ai(g))return v(p,f,g,w);Hs(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=ma(g,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return S}var Br=Km(!0),Qm=Km(!1),ys={},wt=Nn(ys),qi=Nn(ys),Xi=Nn(ys);function zn(t){if(t===ys)throw Error(C(174));return t}function xc(t,e){switch(Y(Xi,e),Y(qi,t),Y(wt,ys),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ka(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ka(e,t)}J(wt),Y(wt,e)}function $r(){J(wt),J(qi),J(Xi)}function Ym(t){zn(Xi.current);var e=zn(wt.current),n=Ka(e,t.type);e!==n&&(Y(qi,t),Y(wt,n))}function Pc(t){qi.current===t&&(J(wt),J(qi))}var ee=Nn(0);function Mo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ua=[];function Oc(){for(var t=0;t<ua.length;t++)ua[t]._workInProgressVersionPrimary=null;ua.length=0}var so=jt.ReactCurrentDispatcher,ca=jt.ReactCurrentBatchConfig,Qn=0,te=null,ae=null,fe=null,Lo=!1,xi=!1,Ji=0,Qw=0;function Ee(){throw Error(C(321))}function Ac(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pt(t[n],e[n]))return!1;return!0}function Dc(t,e,n,r,i,s){if(Qn=s,te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,so.current=t===null||t.memoizedState===null?Jw:Zw,t=n(r,i),xi){s=0;do{if(xi=!1,Ji=0,25<=s)throw Error(C(301));s+=1,fe=ae=null,e.updateQueue=null,so.current=eE,t=n(r,i)}while(xi)}if(so.current=bo,e=ae!==null&&ae.next!==null,Qn=0,fe=ae=te=null,Lo=!1,e)throw Error(C(300));return t}function Mc(){var t=Ji!==0;return Ji=0,t}function gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?te.memoizedState=fe=t:fe=fe.next=t,fe}function et(){if(ae===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=fe===null?te.memoizedState:fe.next;if(e!==null)fe=e,ae=t;else{if(t===null)throw Error(C(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},fe===null?te.memoizedState=fe=t:fe=fe.next=t}return fe}function Zi(t,e){return typeof e=="function"?e(t):e}function da(t){var e=et(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Qn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,te.lanes|=d,Yn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,pt(r,e.memoizedState)||(De=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,te.lanes|=s,Yn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ha(t){var e=et(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pt(s,e.memoizedState)||(De=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qm(){}function Xm(t,e){var n=te,r=et(),i=e(),s=!pt(r.memoizedState,i);if(s&&(r.memoizedState=i,De=!0),r=r.queue,Lc(eg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,es(9,Zm.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(C(349));(Qn&30)!==0||Jm(n,e,i)}return i}function Jm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zm(t,e,n,r){e.value=n,e.getSnapshot=r,tg(e)&&ng(t)}function eg(t,e,n){return n(function(){tg(e)&&ng(t)})}function tg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pt(t,n)}catch{return!0}}function ng(t){var e=Ft(t,1);e!==null&&ht(e,t,1,-1)}function Wh(t){var e=gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:t},e.queue=t,t=t.dispatch=Xw.bind(null,te,t),[e.memoizedState,t]}function es(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rg(){return et().memoizedState}function oo(t,e,n,r){var i=gt();te.flags|=t,i.memoizedState=es(1|e,n,void 0,r===void 0?null:r)}function vl(t,e,n,r){var i=et();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&Ac(r,o.deps)){i.memoizedState=es(e,n,s,r);return}}te.flags|=t,i.memoizedState=es(1|e,n,s,r)}function jh(t,e){return oo(8390656,8,t,e)}function Lc(t,e){return vl(2048,8,t,e)}function ig(t,e){return vl(4,2,t,e)}function sg(t,e){return vl(4,4,t,e)}function og(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lg(t,e,n){return n=n!=null?n.concat([t]):null,vl(4,4,og.bind(null,e,t),n)}function bc(){}function ag(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ac(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ug(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ac(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cg(t,e,n){return(Qn&21)===0?(t.baseState&&(t.baseState=!1,De=!0),t.memoizedState=n):(pt(n,e)||(n=fm(),te.lanes|=n,Yn|=n,t.baseState=!0),e)}function Yw(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=ca.transition;ca.transition={};try{t(!1),e()}finally{V=n,ca.transition=r}}function dg(){return et().memoizedState}function qw(t,e,n){var r=pn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hg(t))fg(e,n);else if(n=jm(t,e,n,r),n!==null){var i=xe();ht(n,t,r,i),pg(n,e,r)}}function Xw(t,e,n){var r=pn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hg(t))fg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,pt(l,o)){var a=e.interleaved;a===null?(i.next=i,Nc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=jm(t,e,i,r),n!==null&&(i=xe(),ht(n,t,r,i),pg(n,e,r))}}function hg(t){var e=t.alternate;return t===te||e!==null&&e===te}function fg(t,e){xi=Lo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pg(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fc(t,n)}}var bo={readContext:Ze,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},Jw={readContext:Ze,useCallback:function(t,e){return gt().memoizedState=[t,e===void 0?null:e],t},useContext:Ze,useEffect:jh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,oo(4194308,4,og.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oo(4194308,4,t,e)},useInsertionEffect:function(t,e){return oo(4,2,t,e)},useMemo:function(t,e){var n=gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qw.bind(null,te,t),[r.memoizedState,t]},useRef:function(t){var e=gt();return t={current:t},e.memoizedState=t},useState:Wh,useDebugValue:bc,useDeferredValue:function(t){return gt().memoizedState=t},useTransition:function(){var t=Wh(!1),e=t[0];return t=Yw.bind(null,t[1]),gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=te,i=gt();if(Z){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),ge===null)throw Error(C(349));(Qn&30)!==0||Jm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,jh(eg.bind(null,r,s,t),[t]),r.flags|=2048,es(9,Zm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gt(),e=ge.identifierPrefix;if(Z){var n=xt,r=Rt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ji++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Qw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Zw={readContext:Ze,useCallback:ag,useContext:Ze,useEffect:Lc,useImperativeHandle:lg,useInsertionEffect:ig,useLayoutEffect:sg,useMemo:ug,useReducer:da,useRef:rg,useState:function(){return da(Zi)},useDebugValue:bc,useDeferredValue:function(t){var e=et();return cg(e,ae.memoizedState,t)},useTransition:function(){var t=da(Zi)[0],e=et().memoizedState;return[t,e]},useMutableSource:qm,useSyncExternalStore:Xm,useId:dg,unstable_isNewReconciler:!1},eE={readContext:Ze,useCallback:ag,useContext:Ze,useEffect:Lc,useImperativeHandle:lg,useInsertionEffect:ig,useLayoutEffect:sg,useMemo:ug,useReducer:ha,useRef:rg,useState:function(){return ha(Zi)},useDebugValue:bc,useDeferredValue:function(t){var e=et();return ae===null?e.memoizedState=t:cg(e,ae.memoizedState,t)},useTransition:function(){var t=ha(Zi)[0],e=et().memoizedState;return[t,e]},useMutableSource:qm,useSyncExternalStore:Xm,useId:dg,unstable_isNewReconciler:!1};function Wr(t,e){try{var n="",r=e;do n+=R0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fa(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function gu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tE=typeof WeakMap=="function"?WeakMap:Map;function mg(t,e,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Uo||(Uo=!0,Tu=r),gu(t,e)},n}function gg(t,e,n){n=Dt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){gu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gu(t,e),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mE.bind(null,t,e,n),e.then(t,t))}function Hh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gh(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dt(-1,1),e.tag=2,hn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var nE=jt.ReactCurrentOwner,De=!1;function Re(t,e,n,r){e.child=t===null?Qm(e,null,n,r):Br(e,t.child,n,r)}function Kh(t,e,n,r,i){n=n.render;var s=e.ref;return xr(e,i),r=Dc(t,e,n,r,s,i),n=Mc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ut(t,e,i)):(Z&&n&&Ec(e),e.flags|=1,Re(t,e,r,i),e.child)}function Qh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_g(t,e,s,r,i)):(t=co(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Gi,n(o,r)&&t.ref===e.ref)return Ut(t,e,i)}return e.flags|=1,t=mn(s,r),t.ref=e.ref,t.return=e,e.child=t}function _g(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Gi(s,r)&&t.ref===e.ref)if(De=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(De=!0);else return e.lanes=t.lanes,Ut(t,e,i)}return _u(t,e,n,r,i)}function vg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Cr,We),We|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(Cr,We),We|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(Cr,We),We|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y(Cr,We),We|=r;return Re(t,e,i,n),e.child}function yg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _u(t,e,n,r,i){var s=Fe(n)?Gn:Te.current;return s=Ur(e,s),xr(e,i),n=Dc(t,e,n,r,s,i),r=Mc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ut(t,e,i)):(Z&&r&&Ec(e),e.flags|=1,Re(t,e,n,i),e.child)}function Yh(t,e,n,r,i){if(Fe(n)){var s=!0;Ro(e)}else s=!1;if(xr(e,i),e.stateNode===null)lo(t,e),Gm(e,n,r),mu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=Fe(n)?Gn:Te.current,u=Ur(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Bh(e,o,r,u),Yt=!1;var h=e.memoizedState;o.state=h,Do(e,r,o,i),a=e.memoizedState,l!==r||h!==a||be.current||Yt?(typeof d=="function"&&(pu(e,n,d,r),a=e.memoizedState),(l=Yt||zh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Vm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:rt(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ze(a):(a=Fe(n)?Gn:Te.current,a=Ur(e,a));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Bh(e,o,r,a),Yt=!1,h=e.memoizedState,o.state=h,Do(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||be.current||Yt?(typeof m=="function"&&(pu(e,n,m,r),_=e.memoizedState),(u=Yt||zh(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return vu(t,e,n,r,s,i)}function vu(t,e,n,r,i,s){yg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mh(e,n,!1),Ut(t,e,s);r=e.stateNode,nE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Br(e,t.child,null,s),e.child=Br(e,null,l,s)):Re(t,e,l,s),e.memoizedState=r.state,i&&Mh(e,n,!0),e.child}function wg(t){var e=t.stateNode;e.pendingContext?Dh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dh(t,e.context,!1),xc(t,e.containerInfo)}function qh(t,e,n,r,i){return zr(),Sc(i),e.flags|=256,Re(t,e,n,r),e.child}var yu={dehydrated:null,treeContext:null,retryLane:0};function wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Eg(t,e,n){var r=e.pendingProps,i=ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(ee,i&1),t===null)return hu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=El(o,r,0,null),t=jn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wu(n),e.memoizedState=yu,t):Fc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return rE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=mn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=mn(l,s):(s=jn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?wu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yu,r}return s=t.child,t=s.sibling,r=mn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fc(t,e){return e=El({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gs(t,e,n,r){return r!==null&&Sc(r),Br(e,t.child,null,n),t=Fc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fa(Error(C(422))),Gs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=El({mode:"visible",children:r.children},i,0,null),s=jn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Br(e,t.child,null,o),e.child.memoizedState=wu(o),e.memoizedState=yu,s);if((e.mode&1)===0)return Gs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=fa(s,r,void 0),Gs(t,e,o,r)}if(l=(o&t.childLanes)!==0,De||l){if(r=ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ft(t,i),ht(r,t,i,-1))}return jc(),r=fa(Error(C(421))),Gs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=gE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,je=dn(i.nextSibling),Ve=e,Z=!0,st=null,t!==null&&(Ye[qe++]=Rt,Ye[qe++]=xt,Ye[qe++]=Kn,Rt=t.id,xt=t.overflow,Kn=e),e=Fc(e,r.children),e.flags|=4096,e)}function Xh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fu(t.return,e,n)}function pa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Cg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=ee.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xh(t,n,e);else if(t.tag===19)Xh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(ee,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Mo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Mo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pa(e,!0,n,null,s);break;case"together":pa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function lo(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ut(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yn|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=mn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iE(t,e,n){switch(e.tag){case 3:wg(e),zr();break;case 5:Ym(e);break;case 1:Fe(e.type)&&Ro(e);break;case 4:xc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(Oo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(ee,ee.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Eg(t,e,n):(Y(ee,ee.current&1),t=Ut(t,e,n),t!==null?t.sibling:null);Y(ee,ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Cg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ee,ee.current),r)break;return null;case 22:case 23:return e.lanes=0,vg(t,e,n)}return Ut(t,e,n)}var Sg,Eu,Ig,kg;Sg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eu=function(){};Ig=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zn(wt.current);var s=null;switch(n){case"input":i=ja(t,i),r=ja(t,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=Ga(t,i),r=Ga(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=To)}Qa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};kg=function(t,e,n,r){n!==r&&(e.flags|=4)};function pi(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ce(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sE(t,e,n){var r=e.pendingProps;switch(Cc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(e),null;case 1:return Fe(e.type)&&No(),Ce(e),null;case 3:return r=e.stateNode,$r(),J(be),J(Te),Oc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,st!==null&&(xu(st),st=null))),Eu(t,e),Ce(e),null;case 5:Pc(e);var i=zn(Xi.current);if(n=e.type,t!==null&&e.stateNode!=null)Ig(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Ce(e),null}if(t=zn(wt.current),Vs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vt]=e,r[Yi]=s,t=(e.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<Si.length;i++)q(Si[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":oh(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":ah(r,s),q("invalid",r)}Qa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&js(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&js(r.textContent,l,t),i=["children",""+l]):zi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":Ls(r),lh(r,s,!0);break;case"textarea":Ls(r),uh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=To)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vt]=e,t[Yi]=r,Sg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ya(n,r),n){case"dialog":q("cancel",t),q("close",t),i=r;break;case"iframe":case"object":case"embed":q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Si.length;i++)q(Si[i],t);i=r;break;case"source":q("error",t),i=r;break;case"img":case"image":case"link":q("error",t),q("load",t),i=r;break;case"details":q("toggle",t),i=r;break;case"input":oh(t,r),i=ja(t,r),q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),q("invalid",t);break;case"textarea":ah(t,r),i=Ga(t,r),q("invalid",t);break;default:i=r}Qa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?tm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Zp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Bi(t,a):typeof a=="number"&&Bi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&q("scroll",t):a!=null&&lc(t,s,a,o))}switch(n){case"input":Ls(t),lh(t,r,!1);break;case"textarea":Ls(t),uh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?kr(t,!!r.multiple,s,!1):r.defaultValue!=null&&kr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=To)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ce(e),null;case 6:if(t&&e.stateNode!=null)kg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=zn(Xi.current),zn(wt.current),Vs(e)){if(r=e.stateNode,n=e.memoizedProps,r[vt]=e,(s=r.nodeValue!==n)&&(t=Ve,t!==null))switch(t.tag){case 3:js(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&js(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=e,e.stateNode=r}return Ce(e),null;case 13:if(J(ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Z&&je!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Wm(),zr(),e.flags|=98560,s=!1;else if(s=Vs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[vt]=e}else zr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ce(e),s=!1}else st!==null&&(xu(st),st=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ee.current&1)!==0?ce===0&&(ce=3):jc())),e.updateQueue!==null&&(e.flags|=4),Ce(e),null);case 4:return $r(),Eu(t,e),t===null&&Ki(e.stateNode.containerInfo),Ce(e),null;case 10:return Tc(e.type._context),Ce(e),null;case 17:return Fe(e.type)&&No(),Ce(e),null;case 19:if(J(ee),s=e.memoizedState,s===null)return Ce(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)pi(s,!1);else{if(ce!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Mo(t),o!==null){for(e.flags|=128,pi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(ee,ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&oe()>jr&&(e.flags|=128,r=!0,pi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Mo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Z)return Ce(e),null}else 2*oe()-s.renderingStartTime>jr&&n!==1073741824&&(e.flags|=128,r=!0,pi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=oe(),e.sibling=null,n=ee.current,Y(ee,r?n&1|2:n&1),e):(Ce(e),null);case 22:case 23:return Wc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(We&1073741824)!==0&&(Ce(e),e.subtreeFlags&6&&(e.flags|=8192)):Ce(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function oE(t,e){switch(Cc(e),e.tag){case 1:return Fe(e.type)&&No(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $r(),J(be),J(Te),Oc(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Pc(e),null;case 13:if(J(ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));zr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(ee),null;case 4:return $r(),null;case 10:return Tc(e.type._context),null;case 22:case 23:return Wc(),null;case 24:return null;default:return null}}var Ks=!1,Ie=!1,lE=typeof WeakSet=="function"?WeakSet:Set,P=null;function Er(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(t,e,r)}else n.current=null}function Cu(t,e,n){try{n()}catch(r){ie(t,e,r)}}var Jh=!1;function aE(t,e){if(su=So,t=xm(),wc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var m;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(m=c.firstChild)!==null;)h=c,c=m;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(m=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ou={focusedElem:t,selectionRange:n},So=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,S=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:rt(e.type,v),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){ie(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return _=Jh,Jh=!1,_}function Pi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Cu(e,n,s)}i=i.next}while(i!==r)}}function yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Su(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tg(t){var e=t.alternate;e!==null&&(t.alternate=null,Tg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vt],delete e[Yi],delete e[uu],delete e[Vw],delete e[Hw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ng(t){return t.tag===5||t.tag===3||t.tag===4}function Zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Iu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=To));else if(r!==4&&(t=t.child,t!==null))for(Iu(t,e,n),t=t.sibling;t!==null;)Iu(t,e,n),t=t.sibling}function ku(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ku(t,e,n),t=t.sibling;t!==null;)ku(t,e,n),t=t.sibling}var _e=null,it=!1;function Gt(t,e,n){for(n=n.child;n!==null;)Rg(t,e,n),n=n.sibling}function Rg(t,e,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(dl,n)}catch{}switch(n.tag){case 5:Ie||Er(n,e);case 6:var r=_e,i=it;_e=null,Gt(t,e,n),_e=r,it=i,_e!==null&&(it?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(it?(t=_e,n=n.stateNode,t.nodeType===8?la(t.parentNode,n):t.nodeType===1&&la(t,n),Vi(t)):la(_e,n.stateNode));break;case 4:r=_e,i=it,_e=n.stateNode.containerInfo,it=!0,Gt(t,e,n),_e=r,it=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Cu(n,e,o),i=i.next}while(i!==r)}Gt(t,e,n);break;case 1:if(!Ie&&(Er(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ie(n,e,l)}Gt(t,e,n);break;case 21:Gt(t,e,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Gt(t,e,n),Ie=r):Gt(t,e,n);break;default:Gt(t,e,n)}}function ef(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lE),e.forEach(function(r){var i=_E.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,it=!1;break e;case 3:_e=l.stateNode.containerInfo,it=!0;break e;case 4:_e=l.stateNode.containerInfo,it=!0;break e}l=l.return}if(_e===null)throw Error(C(160));Rg(s,o,i),_e=null,it=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xg(e,t),e=e.sibling}function xg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tt(e,t),mt(t),r&4){try{Pi(3,t,t.return),yl(3,t)}catch(v){ie(t,t.return,v)}try{Pi(5,t,t.return)}catch(v){ie(t,t.return,v)}}break;case 1:tt(e,t),mt(t),r&512&&n!==null&&Er(n,n.return);break;case 5:if(tt(e,t),mt(t),r&512&&n!==null&&Er(n,n.return),t.flags&32){var i=t.stateNode;try{Bi(i,"")}catch(v){ie(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&qp(i,s),Ya(l,o);var u=Ya(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?tm(i,c):d==="dangerouslySetInnerHTML"?Zp(i,c):d==="children"?Bi(i,c):lc(i,d,c,u)}switch(l){case"input":Va(i,s);break;case"textarea":Xp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?kr(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?kr(i,!!s.multiple,s.defaultValue,!0):kr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Yi]=s}catch(v){ie(t,t.return,v)}}break;case 6:if(tt(e,t),mt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ie(t,t.return,v)}}break;case 3:if(tt(e,t),mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vi(e.containerInfo)}catch(v){ie(t,t.return,v)}break;case 4:tt(e,t),mt(t);break;case 13:tt(e,t),mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bc=oe())),r&4&&ef(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ie=(u=Ie)||d,tt(e,t),Ie=u):tt(e,t),mt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&(t.mode&1)!==0)for(P=t,d=t.child;d!==null;){for(c=P=d;P!==null;){switch(h=P,m=h.child,h.tag){case 0:case 11:case 14:case 15:Pi(4,h,h.return);break;case 1:Er(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){ie(r,n,v)}}break;case 5:Er(h,h.return);break;case 22:if(h.memoizedState!==null){nf(c);continue}}m!==null?(m.return=h,P=m):nf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=em("display",o))}catch(v){ie(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){ie(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:tt(e,t),mt(t),r&4&&ef(t);break;case 21:break;default:tt(e,t),mt(t)}}function mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ng(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bi(i,""),r.flags&=-33);var s=Zh(t);ku(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Zh(t);Iu(t,l,o);break;default:throw Error(C(161))}}catch(a){ie(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uE(t,e,n){P=t,Pg(t)}function Pg(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ks;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ie;l=Ks;var u=Ie;if(Ks=o,(Ie=a)&&!u)for(P=i;P!==null;)o=P,a=o.child,o.tag===22&&o.memoizedState!==null?rf(i):a!==null?(a.return=o,P=a):rf(i);for(;s!==null;)P=s,Pg(s),s=s.sibling;P=i,Ks=l,Ie=u}tf(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,P=s):tf(t)}}function tf(t){for(;P!==null;){var e=P;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ie||yl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Uh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Uh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Vi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ie||e.flags&512&&Su(e)}catch(h){ie(e,e.return,h)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function nf(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function rf(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yl(4,e)}catch(a){ie(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ie(e,i,a)}}var s=e.return;try{Su(e)}catch(a){ie(e,s,a)}break;case 5:var o=e.return;try{Su(e)}catch(a){ie(e,o,a)}}}catch(a){ie(e,e.return,a)}if(e===t){P=null;break}var l=e.sibling;if(l!==null){l.return=e.return,P=l;break}P=e.return}}var cE=Math.ceil,Fo=jt.ReactCurrentDispatcher,Uc=jt.ReactCurrentOwner,Je=jt.ReactCurrentBatchConfig,$=0,ge=null,le=null,ye=0,We=0,Cr=Nn(0),ce=0,ts=null,Yn=0,wl=0,zc=0,Oi=null,Ae=null,Bc=0,jr=1/0,Tt=null,Uo=!1,Tu=null,fn=null,Qs=!1,on=null,zo=0,Ai=0,Nu=null,ao=-1,uo=0;function xe(){return($&6)!==0?oe():ao!==-1?ao:ao=oe()}function pn(t){return(t.mode&1)===0?1:($&2)!==0&&ye!==0?ye&-ye:Kw.transition!==null?(uo===0&&(uo=fm()),uo):(t=V,t!==0||(t=window.event,t=t===void 0?16:wm(t.type)),t)}function ht(t,e,n,r){if(50<Ai)throw Ai=0,Nu=null,Error(C(185));gs(t,n,r),(($&2)===0||t!==ge)&&(t===ge&&(($&2)===0&&(wl|=n),ce===4&&Xt(t,ye)),Ue(t,r),n===1&&$===0&&(e.mode&1)===0&&(jr=oe()+500,gl&&Rn()))}function Ue(t,e){var n=t.callbackNode;K0(t,e);var r=Co(t,t===ge?ye:0);if(r===0)n!==null&&hh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hh(n),e===1)t.tag===0?Gw(sf.bind(null,t)):zm(sf.bind(null,t)),Ww(function(){($&6)===0&&Rn()}),n=null;else{switch(pm(r)){case 1:n=hc;break;case 4:n=dm;break;case 16:n=Eo;break;case 536870912:n=hm;break;default:n=Eo}n=Ug(n,Og.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Og(t,e){if(ao=-1,uo=0,($&6)!==0)throw Error(C(327));var n=t.callbackNode;if(Pr()&&t.callbackNode!==n)return null;var r=Co(t,t===ge?ye:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Bo(t,r);else{e=r;var i=$;$|=2;var s=Dg();(ge!==t||ye!==e)&&(Tt=null,jr=oe()+500,Wn(t,e));do try{fE();break}catch(l){Ag(t,l)}while(1);kc(),Fo.current=s,$=i,le!==null?e=0:(ge=null,ye=0,e=ce)}if(e!==0){if(e===2&&(i=eu(t),i!==0&&(r=i,e=Ru(t,i))),e===1)throw n=ts,Wn(t,0),Xt(t,r),Ue(t,oe()),n;if(e===6)Xt(t,r);else{if(i=t.current.alternate,(r&30)===0&&!dE(i)&&(e=Bo(t,r),e===2&&(s=eu(t),s!==0&&(r=s,e=Ru(t,s))),e===1))throw n=ts,Wn(t,0),Xt(t,r),Ue(t,oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Mn(t,Ae,Tt);break;case 3:if(Xt(t,r),(r&130023424)===r&&(e=Bc+500-oe(),10<e)){if(Co(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=au(Mn.bind(null,t,Ae,Tt),e);break}Mn(t,Ae,Tt);break;case 4:if(Xt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cE(r/1960))-r,10<r){t.timeoutHandle=au(Mn.bind(null,t,Ae,Tt),r);break}Mn(t,Ae,Tt);break;case 5:Mn(t,Ae,Tt);break;default:throw Error(C(329))}}}return Ue(t,oe()),t.callbackNode===n?Og.bind(null,t):null}function Ru(t,e){var n=Oi;return t.current.memoizedState.isDehydrated&&(Wn(t,e).flags|=256),t=Bo(t,e),t!==2&&(e=Ae,Ae=n,e!==null&&xu(e)),t}function xu(t){Ae===null?Ae=t:Ae.push.apply(Ae,t)}function dE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xt(t,e){for(e&=~zc,e&=~wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function sf(t){if(($&6)!==0)throw Error(C(327));Pr();var e=Co(t,0);if((e&1)===0)return Ue(t,oe()),null;var n=Bo(t,e);if(t.tag!==0&&n===2){var r=eu(t);r!==0&&(e=r,n=Ru(t,r))}if(n===1)throw n=ts,Wn(t,0),Xt(t,e),Ue(t,oe()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mn(t,Ae,Tt),Ue(t,oe()),null}function $c(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(jr=oe()+500,gl&&Rn())}}function qn(t){on!==null&&on.tag===0&&($&6)===0&&Pr();var e=$;$|=1;var n=Je.transition,r=V;try{if(Je.transition=null,V=1,t)return t()}finally{V=r,Je.transition=n,$=e,($&6)===0&&Rn()}}function Wc(){We=Cr.current,J(Cr)}function Wn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$w(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Cc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&No();break;case 3:$r(),J(be),J(Te),Oc();break;case 5:Pc(r);break;case 4:$r();break;case 13:J(ee);break;case 19:J(ee);break;case 10:Tc(r.type._context);break;case 22:case 23:Wc()}n=n.return}if(ge=t,le=t=mn(t.current,null),ye=We=e,ce=0,ts=null,zc=wl=Yn=0,Ae=Oi=null,Un!==null){for(e=0;e<Un.length;e++)if(n=Un[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Un=null}return t}function Ag(t,e){do{var n=le;try{if(kc(),so.current=bo,Lo){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lo=!1}if(Qn=0,fe=ae=te=null,xi=!1,Ji=0,Uc.current=null,n===null||n.return===null){ce=1,ts=e,le=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ye,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if((d.mode&1)===0&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Hh(o);if(m!==null){m.flags&=-257,Gh(m,o,l,s,e),m.mode&1&&Vh(s,u,e),e=m,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if((e&1)===0){Vh(s,u,e),jc();break e}a=Error(C(426))}}else if(Z&&l.mode&1){var S=Hh(o);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),Gh(S,o,l,s,e),Sc(Wr(a,l));break e}}s=a=Wr(a,l),ce!==4&&(ce=2),Oi===null?Oi=[s]:Oi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=mg(s,a,e);Fh(s,p);break e;case 1:l=a;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(fn===null||!fn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=gg(s,l,e);Fh(s,w);break e}}s=s.return}while(s!==null)}Lg(n)}catch(k){e=k,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function Dg(){var t=Fo.current;return Fo.current=bo,t===null?bo:t}function jc(){(ce===0||ce===3||ce===2)&&(ce=4),ge===null||(Yn&268435455)===0&&(wl&268435455)===0||Xt(ge,ye)}function Bo(t,e){var n=$;$|=2;var r=Dg();(ge!==t||ye!==e)&&(Tt=null,Wn(t,e));do try{hE();break}catch(i){Ag(t,i)}while(1);if(kc(),$=n,Fo.current=r,le!==null)throw Error(C(261));return ge=null,ye=0,ce}function hE(){for(;le!==null;)Mg(le)}function fE(){for(;le!==null&&!U0();)Mg(le)}function Mg(t){var e=Fg(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?Lg(t):le=e,Uc.current=null}function Lg(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=sE(n,e,We),n!==null){le=n;return}}else{if(n=oE(n,e),n!==null){n.flags&=32767,le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ce=6,le=null;return}}if(e=e.sibling,e!==null){le=e;return}le=e=t}while(e!==null);ce===0&&(ce=5)}function Mn(t,e,n){var r=V,i=Je.transition;try{Je.transition=null,V=1,pE(t,e,n,r)}finally{Je.transition=i,V=r}return null}function pE(t,e,n,r){do Pr();while(on!==null);if(($&6)!==0)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Q0(t,s),t===ge&&(le=ge=null,ye=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Qs||(Qs=!0,Ug(Eo,function(){return Pr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Je.transition,Je.transition=null;var o=V;V=1;var l=$;$|=4,Uc.current=null,aE(t,n),xg(n,t),Mw(ou),So=!!su,ou=su=null,t.current=n,uE(n),z0(),$=l,V=o,Je.transition=s}else t.current=n;if(Qs&&(Qs=!1,on=t,zo=i),s=t.pendingLanes,s===0&&(fn=null),W0(n.stateNode),Ue(t,oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Uo)throw Uo=!1,t=Tu,Tu=null,t;return(zo&1)!==0&&t.tag!==0&&Pr(),s=t.pendingLanes,(s&1)!==0?t===Nu?Ai++:(Ai=0,Nu=t):Ai=0,Rn(),null}function Pr(){if(on!==null){var t=pm(zo),e=Je.transition,n=V;try{if(Je.transition=null,V=16>t?16:t,on===null)var r=!1;else{if(t=on,on=null,zo=0,($&6)!==0)throw Error(C(331));var i=$;for($|=4,P=t.current;P!==null;){var s=P,o=s.child;if((P.flags&16)!==0){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Pi(8,d,s)}var c=d.child;if(c!==null)c.return=d,P=c;else for(;P!==null;){d=P;var h=d.sibling,m=d.return;if(Tg(d),d===u){P=null;break}if(h!==null){h.return=m,P=h;break}P=m}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}P=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Pi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,P=g;else e:for(o=f;P!==null;){if(l=P,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:yl(9,l)}}catch(k){ie(l,l.return,k)}if(l===o){P=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,P=w;break e}P=l.return}}if($=i,Rn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(dl,t)}catch{}r=!0}return r}finally{V=n,Je.transition=e}}return!1}function of(t,e,n){e=Wr(n,e),e=mg(t,e,1),t=hn(t,e,1),e=xe(),t!==null&&(gs(t,1,e),Ue(t,e))}function ie(t,e,n){if(t.tag===3)of(t,t,n);else for(;e!==null;){if(e.tag===3){of(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){t=Wr(n,t),t=gg(e,t,1),e=hn(e,t,1),t=xe(),e!==null&&(gs(e,1,t),Ue(e,t));break}}e=e.return}}function mE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xe(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(ye&n)===n&&(ce===4||ce===3&&(ye&130023424)===ye&&500>oe()-Bc?Wn(t,0):zc|=n),Ue(t,e)}function bg(t,e){e===0&&((t.mode&1)===0?e=1:(e=Us,Us<<=1,(Us&130023424)===0&&(Us=4194304)));var n=xe();t=Ft(t,e),t!==null&&(gs(t,e,n),Ue(t,n))}function gE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bg(t,n)}function _E(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),bg(t,n)}var Fg;Fg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||be.current)De=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return De=!1,iE(t,e,n);De=(t.flags&131072)!==0}else De=!1,Z&&(e.flags&1048576)!==0&&Bm(e,Po,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;lo(t,e),t=e.pendingProps;var i=Ur(e,Te.current);xr(e,n),i=Dc(null,e,r,t,i,n);var s=Mc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Fe(r)?(s=!0,Ro(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rc(e),i.updater=_l,e.stateNode=i,i._reactInternals=e,mu(e,r,t,n),e=vu(null,e,r,!0,s,n)):(e.tag=0,Z&&s&&Ec(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(lo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=yE(r),t=rt(r,t),i){case 0:e=_u(null,e,r,t,n);break e;case 1:e=Yh(null,e,r,t,n);break e;case 11:e=Kh(null,e,r,t,n);break e;case 14:e=Qh(null,e,r,rt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),_u(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),Yh(t,e,r,i,n);case 3:e:{if(wg(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Vm(t,e),Do(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wr(Error(C(423)),e),e=qh(t,e,r,n,i);break e}else if(r!==i){i=Wr(Error(C(424)),e),e=qh(t,e,r,n,i);break e}else for(je=dn(e.stateNode.containerInfo.firstChild),Ve=e,Z=!0,st=null,n=Qm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zr(),r===i){e=Ut(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return Ym(e),t===null&&hu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,lu(r,i)?o=null:s!==null&&lu(r,s)&&(e.flags|=32),yg(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&hu(e),null;case 13:return Eg(t,e,n);case 4:return xc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Br(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),Kh(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(Oo,r._currentValue),r._currentValue=o,s!==null)if(pt(s.value,o)){if(s.children===i.children&&!be.current){e=Ut(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Dt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),fu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),fu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xr(e,n),i=Ze(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=rt(r,e.pendingProps),i=rt(r.type,i),Qh(t,e,r,i,n);case 15:return _g(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),lo(t,e),e.tag=1,Fe(r)?(t=!0,Ro(e)):t=!1,xr(e,n),Gm(e,r,i),mu(e,r,i,n),vu(null,e,r,!0,t,n);case 19:return Cg(t,e,n);case 22:return vg(t,e,n)}throw Error(C(156,e.tag))};function Ug(t,e){return cm(t,e)}function vE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(t,e,n,r){return new vE(t,e,n,r)}function Vc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yE(t){if(typeof t=="function")return Vc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uc)return 11;if(t===cc)return 14}return 2}function mn(t,e){var n=t.alternate;return n===null?(n=Xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function co(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hr:return jn(n.children,i,s,e);case ac:o=8,i|=8;break;case za:return t=Xe(12,n,e,i|2),t.elementType=za,t.lanes=s,t;case Ba:return t=Xe(13,n,e,i),t.elementType=Ba,t.lanes=s,t;case $a:return t=Xe(19,n,e,i),t.elementType=$a,t.lanes=s,t;case Kp:return El(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hp:o=10;break e;case Gp:o=9;break e;case uc:o=11;break e;case cc:o=14;break e;case Qt:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Xe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function jn(t,e,n,r){return t=Xe(7,t,r,e),t.lanes=n,t}function El(t,e,n,r){return t=Xe(22,t,r,e),t.elementType=Kp,t.lanes=n,t.stateNode={isHidden:!1},t}function ma(t,e,n){return t=Xe(6,t,null,e),t.lanes=n,t}function ga(t,e,n){return e=Xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hc(t,e,n,r,i,s,o,l,a){return t=new wE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rc(s),t}function EE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zg(t){if(!t)return En;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Fe(n))return Um(t,n,e)}return e}function Bg(t,e,n,r,i,s,o,l,a){return t=Hc(n,r,!0,t,i,s,o,l,a),t.context=zg(null),n=t.current,r=xe(),i=pn(n),s=Dt(r,i),s.callback=e!=null?e:null,hn(n,s,i),t.current.lanes=i,gs(t,i,r),Ue(t,r),t}function Cl(t,e,n,r){var i=e.current,s=xe(),o=pn(i);return n=zg(n),e.context===null?e.context=n:e.pendingContext=n,e=Dt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hn(i,e,o),t!==null&&(ht(t,i,o,s),io(t,i,o)),o}function $o(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gc(t,e){lf(t,e),(t=t.alternate)&&lf(t,e)}function CE(){return null}var $g=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kc(t){this._internalRoot=t}Sl.prototype.render=Kc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Cl(t,e,null,null)};Sl.prototype.unmount=Kc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qn(function(){Cl(null,t,null,null)}),e[bt]=null}};function Sl(t){this._internalRoot=t}Sl.prototype.unstable_scheduleHydration=function(t){if(t){var e=_m();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qt.length&&e!==0&&e<qt[n].priority;n++);qt.splice(n,0,t),n===0&&ym(t)}};function Qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function af(){}function SE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=$o(o);s.call(u)}}var o=Bg(e,r,t,0,null,!1,!1,"",af);return t._reactRootContainer=o,t[bt]=o.current,Ki(t.nodeType===8?t.parentNode:t),qn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=$o(a);l.call(u)}}var a=Hc(t,0,!1,null,null,!1,!1,"",af);return t._reactRootContainer=a,t[bt]=a.current,Ki(t.nodeType===8?t.parentNode:t),qn(function(){Cl(e,a,n,r)}),a}function kl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=$o(o);l.call(a)}}Cl(e,o,t,i)}else o=SE(n,e,t,i,r);return $o(o)}mm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ci(e.pendingLanes);n!==0&&(fc(e,n|1),Ue(e,oe()),($&6)===0&&(jr=oe()+500,Rn()))}break;case 13:qn(function(){var r=Ft(t,1);if(r!==null){var i=xe();ht(r,t,1,i)}}),Gc(t,1)}};pc=function(t){if(t.tag===13){var e=Ft(t,134217728);if(e!==null){var n=xe();ht(e,t,134217728,n)}Gc(t,134217728)}};gm=function(t){if(t.tag===13){var e=pn(t),n=Ft(t,e);if(n!==null){var r=xe();ht(n,t,e,r)}Gc(t,e)}};_m=function(){return V};vm=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};Xa=function(t,e,n){switch(e){case"input":if(Va(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ml(r);if(!i)throw Error(C(90));Yp(r),Va(r,i)}}}break;case"textarea":Xp(t,n);break;case"select":e=n.value,e!=null&&kr(t,!!n.multiple,e,!1)}};im=$c;sm=qn;var IE={usingClientEntryPoint:!1,Events:[vs,gr,ml,nm,rm,$c]},mi={findFiberByHostInstance:Fn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},kE={bundleType:mi.bundleType,version:mi.version,rendererPackageName:mi.rendererPackageName,rendererConfig:mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=am(t),t===null?null:t.stateNode},findFiberByHostInstance:mi.findFiberByHostInstance||CE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ys.isDisabled&&Ys.supportsFiber)try{dl=Ys.inject(kE),yt=Ys}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IE;Ge.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qc(e))throw Error(C(200));return EE(t,e,null,n)};Ge.createRoot=function(t,e){if(!Qc(t))throw Error(C(299));var n=!1,r="",i=$g;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hc(t,1,!1,null,null,n,!1,r,i),t[bt]=e.current,Ki(t.nodeType===8?t.parentNode:t),new Kc(e)};Ge.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=am(e),t=t===null?null:t.stateNode,t};Ge.flushSync=function(t){return qn(t)};Ge.hydrate=function(t,e,n){if(!Il(e))throw Error(C(200));return kl(null,t,e,!0,n)};Ge.hydrateRoot=function(t,e,n){if(!Qc(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$g;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bg(e,null,t,1,n!=null?n:null,i,!1,s,o),t[bt]=e.current,Ki(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Sl(e)};Ge.render=function(t,e,n){if(!Il(e))throw Error(C(200));return kl(null,t,e,!1,n)};Ge.unmountComponentAtNode=function(t){if(!Il(t))throw Error(C(40));return t._reactRootContainer?(qn(function(){kl(null,null,t,!1,function(){t._reactRootContainer=null,t[bt]=null})}),!0):!1};Ge.unstable_batchedUpdates=$c;Ge.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Il(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return kl(t,e,n,!1,r)};Ge.version="18.2.0-next-9e3b772b8-20220608";function Wg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wg)}catch(t){console.error(t)}}Wg(),Bp.exports=Ge;var uf=Bp.exports;Fa.createRoot=uf.createRoot,Fa.hydrateRoot=uf.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw ei(e)},ei=function(t){return new Error("Firebase Database ("+jg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},TE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(h=64)),r.push(n[d],n[c],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new NE;const h=s<<2|l>>4;if(r.push(h),u!==64){const m=l<<4&240|u>>2;if(r.push(m),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class NE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hg=function(t){const e=Vg(t);return Yc.encodeByteArray(e,!0)},Wo=function(t){return Hg(t).replace(/\./g,"")},jo=function(t){try{return Yc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t){return Gg(void 0,t)}function Gg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xE(n)||(t[n]=Gg(t[n],e[n]));return t}function xE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=()=>PE().__FIREBASE_DEFAULTS__,AE=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DE=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jo(t[1]);return e&&JSON.parse(e)},qc=()=>{try{return OE()||AE()||DE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kg=t=>{var e,n;return(n=(e=qc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ME=t=>{const e=Kg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},LE=()=>{var t;return(t=qc())===null||t===void 0?void 0:t.config},Qg=t=>{var e;return(e=qc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Wo(JSON.stringify(n)),Wo(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function FE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UE(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qg(){return jg.NODE_ADMIN===!0}function zE(){try{return typeof indexedDB=="object"}catch{return!1}}function BE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$E,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ws.prototype.create)}}class ws{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?WE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new xn(i,l,r)}}function WE(t,e){return t.replace(jE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ns(jo(s[0])||""),n=ns(jo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},VE=function(t){const e=Xg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},HE=function(t){const e=Xg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Pu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ho(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cf(s)&&cf(o)){if(!Ho(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function KE(t,e){const n=new QE(t,e);return n.subscribe.bind(n)}class QE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_a),i.error===void 0&&(i.error=_a),i.complete===void 0&&(i.complete=_a);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _a(){}function Jc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Tl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZE(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JE(t){return t===Ln?void 0:t}function ZE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const tC={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},nC=H.INFO,rC={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},iC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=nC,this._logHandler=iC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const sC=(t,e)=>e.some(n=>t instanceof n);let df,hf;function oC(){return df||(df=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lC(){return hf||(hf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jg=new WeakMap,Ou=new WeakMap,Zg=new WeakMap,va=new WeakMap,ed=new WeakMap;function aC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jg.set(n,t)}).catch(()=>{}),ed.set(e,t),e}function uC(t){if(Ou.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ou.set(t,e)}let Au={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ou.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cC(t){Au=t(Au)}function dC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ya(this),e,...n);return Zg.set(r,e.sort?e.sort():[e]),gn(r)}:lC().includes(t)?function(...e){return t.apply(ya(this),e),gn(Jg.get(this))}:function(...e){return gn(t.apply(ya(this),e))}}function hC(t){return typeof t=="function"?dC(t):(t instanceof IDBTransaction&&uC(t),sC(t,oC())?new Proxy(t,Au):t)}function gn(t){if(t instanceof IDBRequest)return aC(t);if(va.has(t))return va.get(t);const e=hC(t);return e!==t&&(va.set(t,e),ed.set(e,t)),e}const ya=t=>ed.get(t);function fC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=gn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(gn(o.result),a.oldVersion,a.newVersion,gn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const pC=["get","getKey","getAll","getAllKeys","count"],mC=["put","add","delete","clear"],wa=new Map;function ff(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wa.get(e))return wa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return wa.set(e,s),s}cC(t=>({...t,get:(e,n,r)=>ff(e,n)||t.get(e,n,r),has:(e,n)=>!!ff(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_C(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _C(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Du="@firebase/app",pf="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Zc("@firebase/app"),vC="@firebase/app-compat",yC="@firebase/analytics-compat",wC="@firebase/analytics",EC="@firebase/app-check-compat",CC="@firebase/app-check",SC="@firebase/auth",IC="@firebase/auth-compat",kC="@firebase/database",TC="@firebase/database-compat",NC="@firebase/functions",RC="@firebase/functions-compat",xC="@firebase/installations",PC="@firebase/installations-compat",OC="@firebase/messaging",AC="@firebase/messaging-compat",DC="@firebase/performance",MC="@firebase/performance-compat",LC="@firebase/remote-config",bC="@firebase/remote-config-compat",FC="@firebase/storage",UC="@firebase/storage-compat",zC="@firebase/firestore",BC="@firebase/firestore-compat",$C="firebase",WC="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="[DEFAULT]",jC={[Du]:"fire-core",[vC]:"fire-core-compat",[wC]:"fire-analytics",[yC]:"fire-analytics-compat",[CC]:"fire-app-check",[EC]:"fire-app-check-compat",[SC]:"fire-auth",[IC]:"fire-auth-compat",[kC]:"fire-rtdb",[TC]:"fire-rtdb-compat",[NC]:"fire-fn",[RC]:"fire-fn-compat",[xC]:"fire-iid",[PC]:"fire-iid-compat",[OC]:"fire-fcm",[AC]:"fire-fcm-compat",[DC]:"fire-perf",[MC]:"fire-perf-compat",[LC]:"fire-rc",[bC]:"fire-rc-compat",[FC]:"fire-gcs",[UC]:"fire-gcs-compat",[zC]:"fire-fst",[BC]:"fire-fst-compat","fire-js":"fire-js",[$C]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new Map,Lu=new Map;function VC(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hr(t){const e=t.name;if(Lu.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;Lu.set(e,t);for(const n of Go.values())VC(n,t);return!0}function td(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_n=new ws("app","Firebase",HC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=WC;function e_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _n.create("bad-app-name",{appName:String(i)});if(n||(n=LE()),!n)throw _n.create("no-options");const s=Go.get(i);if(s){if(Ho(n,s.options)&&Ho(r,s.config))return s;throw _n.create("duplicate-app",{appName:i})}const o=new eC(i);for(const a of Lu.values())o.addComponent(a);const l=new GC(n,r,o);return Go.set(i,l),l}function t_(t=Mu){const e=Go.get(t);if(!e&&t===Mu)return e_();if(!e)throw _n.create("no-app",{appName:t});return e}function vn(t,e,n){var r;let i=(r=jC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(l.join(" "));return}Hr(new Xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="firebase-heartbeat-database",QC=1,rs="firebase-heartbeat-store";let Ea=null;function n_(){return Ea||(Ea=fC(KC,QC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rs)}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),Ea}async function YC(t){try{return(await n_()).transaction(rs).objectStore(rs).get(r_(t))}catch(e){if(e instanceof xn)Jn.warn(e.message);else{const n=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function mf(t,e){try{const r=(await n_()).transaction(rs,"readwrite");return await r.objectStore(rs).put(e,r_(t)),r.done}catch(n){if(n instanceof xn)Jn.warn(n.message);else{const r=_n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(r.message)}}}function r_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=1024,XC=30*24*60*60*1e3;class JC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=XC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gf(),{heartbeatsToSend:n,unsentEntries:r}=ZC(this._heartbeatsCache.heartbeats),i=Wo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gf(){return new Date().toISOString().substring(0,10)}function ZC(t,e=qC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_f(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_f(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zE()?BE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await YC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _f(t){return Wo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t){Hr(new Xn("platform-logger",e=>new gC(e),"PRIVATE")),Hr(new Xn("heartbeat",e=>new JC(e),"PRIVATE")),vn(Du,pf,t),vn(Du,pf,"esm2017"),vn("fire-js","")}tS("");var nS="firebase",rS="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(nS,rS,"app");const iS="AIzaSyA5m8gQWshAvZBnM_jo4OhZ_NuDO43RZmo",sS="bantr-game.firebaseapp.com",oS="bantr-game",lS="bantr-game.appspot.com",aS="38996573697",uS="1:38996573697:web:3c37a4edd076693d5f4a00";function cS(){return e_({apiKey:iS,authDomain:sS,projectId:oS,storageBucket:lS,messagingSenderId:aS,appId:uS})}const dS=E.exports.createContext(),vf="@firebase/database",yf="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i_="";function hS(t){i_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ns(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fS(e)}}catch{}return new pS},Bn=s_("localStorage"),bu=s_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Zc("@firebase/database"),mS=function(){let t=1;return function(){return t++}}(),o_=function(t){const e=qE(t),n=new GE;n.update(e);const r=n.digest();return Yc.encodeByteArray(r)},Cs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Cs.apply(null,r):typeof r=="object"?e+=me(r):e+=r,e+=" "}return e};let Vn=null,wf=!0;const gS=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Or.logLevel=H.VERBOSE,Vn=Or.log.bind(Or),e&&bu.set("logging_enabled",!0)):typeof t=="function"?Vn=t:(Vn=null,bu.remove("logging_enabled"))},ke=function(...t){if(wf===!0&&(wf=!1,Vn===null&&bu.get("logging_enabled")===!0&&gS(!0)),Vn){const e=Cs.apply(null,t);Vn(e)}},Ss=function(t){return function(...e){ke(t,...e)}},Fu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Cs(...t);Or.error(e)},zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Cs(...t)}`;throw Or.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+Cs(...t);Or.warn(e)},_S=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},l_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},vS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Gr="[MIN_NAME]",Zn="[MAX_NAME]",ni=function(t,e){if(t===e)return 0;if(t===Gr||e===Zn)return-1;if(e===Gr||t===Zn)return 1;{const n=Ef(t),r=Ef(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},yS=function(t,e){return t===e?0:t<e?-1:1},gi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},nd=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=me(e[r]),n+=":",n+=nd(t[e[r]]);return n+="}",n},a_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const u_=function(t){I(!l_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},wS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ES=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function CS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const SS=new RegExp("^-?(0*)\\d{1,10}$"),IS=-2147483648,kS=2147483647,Ef=function(t){if(SS.test(t)){const e=Number(t);if(e>=IS&&e<=kS)return e}return null},ri=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},TS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Di=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class Ar{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ar.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="5",c_="v",d_="s",h_="r",f_="f",p_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,m_="ls",g_="p",Uu="ac",__="websocket",v_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function xS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function w_(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===__)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===v_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xS(t)&&(n.ns=t.namespace);const i=[];return Be(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(){this.counters_={}}incrementCounter(e,n=1){Vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return RE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca={},Sa={};function id(t){const e=t.toString();return Ca[e]||(Ca[e]=new PS),Ca[e]}function OS(t,e){const n=t.toString();return Sa[n]||(Sa[n]=e()),Sa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ri(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="start",DS="close",MS="pLPCommand",LS="pRTLPCB",E_="id",C_="pw",S_="ser",bS="cb",FS="seg",US="ts",zS="d",BS="dframe",I_=1870,k_=30,$S=I_-k_,WS=25e3,jS=3e4;class Sr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ss(e),this.stats_=id(n),this.urlFn=a=>(this.appCheckToken&&(a[Uu]=this.appCheckToken),w_(n,v_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new AS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jS)),vS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Cf)this.id=l,this.password=a;else if(o===DS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Cf]="t",r[S_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[bS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[c_]=rd,this.transportSessionId&&(r[d_]=this.transportSessionId),this.lastSessionId&&(r[m_]=this.lastSessionId),this.applicationId&&(r[g_]=this.applicationId),this.appCheckToken&&(r[Uu]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&p_.test(location.hostname)&&(r[h_]=f_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Sr.forceAllow_=!0}static forceDisallow(){Sr.forceDisallow_=!0}static isAvailable(){return Sr.forceAllow_?!0:!Sr.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!wS()&&!ES()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Hg(n),i=a_(r,$S);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[BS]="t",r[E_]=e,r[C_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mS(),window[MS+this.uniqueCallbackIdentifier]=e,window[LS+this.uniqueCallbackIdentifier]=n,this.myIFrame=sd.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;s='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ke("frame writing exception"),l.stack&&ke(l.stack),ke(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[E_]=this.myID,e[C_]=this.myPW,e[S_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+k_+r.length<=I_;){const o=this.pendingSegs.shift();r=r+"&"+FS+i+"="+o.seg+"&"+US+i+"="+o.ts+"&"+zS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(WS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=16384,HS=45e3;let Ko=null;typeof MozWebSocket!="undefined"?Ko=MozWebSocket:typeof WebSocket!="undefined"&&(Ko=WebSocket);class ot{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ss(this.connId),this.stats_=id(n),this.connURL=ot.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[c_]=rd,typeof location!="undefined"&&location.hostname&&p_.test(location.hostname)&&(o[h_]=f_),n&&(o[d_]=n),r&&(o[m_]=r),i&&(o[Uu]=i),s&&(o[g_]=s),w_(e,__,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bn.set("previous_websocket_failure",!0);try{let r;qg(),this.mySock=new Ko(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ko!==null&&!ot.forceDisallow_}static previouslyFailed(){return Bn.isInMemoryStorage||Bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ns(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=a_(n,VS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Sr,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ot&&ot.isAvailable();let r=n&&!ot.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ot];else{const i=this.transports_=[];for(const s of is.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);is.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}is.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=6e4,KS=5e3,QS=10*1024,YS=100*1024,Ia="t",Sf="d",qS="s",If="r",XS="e",kf="o",Tf="a",Nf="n",Rf="p",JS="h";class ZS{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ss("c:"+this.id+":"),this.transportManager_=new is(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Di(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ia in e){const n=e[Ia];n===Tf?this.upgradeIfSecondaryHealthy_():n===If?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===kf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gi("t",e),r=gi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Rf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Tf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Nf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gi("t",e),r=gi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gi(Ia,e);if(Sf in e){const r=e[Sf];if(n===JS){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Nf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qS?this.onConnectionShutdown_(r):n===If?this.onReset_(r):n===XS?Fu("Server Error: "+r):n===kf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),rd!==r&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Di(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(GS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Di(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(KS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Rf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends N_{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Xc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qo}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=32,Pf=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new G("")}function b(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Cn(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function R_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function eI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function x_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function P_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=b(t),r=b(e);if(n===null)return e;if(n===r)return Me(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function od(t,e){if(Cn(t)!==Cn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function at(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Cn(t)>Cn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class tI{constructor(e,n){this.errorPrefix_=n,this.parts_=x_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nl(this.parts_[r]);O_(this)}}function nI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nl(e),O_(t)}function rI(t){const e=t.parts_.pop();t.byteLength_-=Nl(e),t.parts_.length>0&&(t.byteLength_-=1)}function O_(t){if(t.byteLength_>Pf)throw new Error(t.errorPrefix_+"has a key path longer than "+Pf+" bytes ("+t.byteLength_+").");if(t.parts_.length>xf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xf+") or object contains a cycle "+bn(t))}function bn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends N_{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ld}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=1e3,iI=60*5*1e3,Of=30*1e3,sI=1.3,oI=3e4,lI="server_kill",Af=3;class Mt extends T_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Mt.nextPersistentConnectionId_++,this.log_=Ss("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_i,this.maxReconnectDelay_=iI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!qg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ld.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(me(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Tl,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Mt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vt(e,"w")){const r=Vr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||HE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Of)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=VE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fu("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>oI&&(this.reconnectDelay_=_i),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new ZS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{ze(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(lI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&ze(c),a())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pu(this.interruptReasons_)&&(this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>nd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Af&&(this.reconnectDelay_=Of,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Af&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+i_.replace(/\./g,"-")]=1,Xc()?e["framework.cordova"]=1:Yg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qo.getInstance().currentlyOnline();return Pu(this.interruptReasons_)&&e}}Mt.nextPersistentConnectionId_=0;Mt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Gr,e),i=new F(Gr,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs;class A_ extends Rl{static get __EMPTY_NODE(){return qs}static set __EMPTY_NODE(e){qs=e}compare(e,n){return ni(e.name,n.name)}isDefinedOn(e){throw ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Zn,qs)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,qs)}toString(){return".key"}}const Dr=new A_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:pe.RED,this.left=i!=null?i:Le.EMPTY_NODE,this.right=s!=null?s:Le.EMPTY_NODE}copy(e,n,r,i,s){return new pe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pe.RED=!0;pe.BLACK=!1;class aI{copy(e,n,r,i,s){return this}insert(e,n,r){return new pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pe.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xs(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new aI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e){return ni(t.name,e.name)}function ad(t,e){return ni(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu;function cI(t){zu=t}const D_=function(t){return typeof t=="number"?"number:"+u_(t):"string:"+t},M_=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vt(e,".sv"),"Priority must be a string or number.")}else I(t===zu||t.isEmpty(),"priority of unexpected type.");I(t===zu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Df;class he{constructor(e,n=he.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),M_(this.priorityNode_)}static set __childrenNodeConstructor(e){Df=e}static get __childrenNodeConstructor(){return Df}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new he(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:b(e)===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:he.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=b(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,he.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+D_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=u_(this.value_):e+=this.value_,this.lazyHash_=o_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===he.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof he.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=he.VALUE_TYPE_ORDER.indexOf(n),s=he.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}he.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L_,b_;function dI(t){L_=t}function hI(t){b_=t}class fI extends Rl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ni(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Zn,new he("[PRIORITY-POST]",b_))}makePost(e,n){const r=L_(e);return new F(n,new he("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new fI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=Math.log(2);class mI{constructor(e){const n=s=>parseInt(Math.log(s)/pI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yo=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new pe(h,c.node,pe.BLACK,null,null);{const m=parseInt(d/2,10)+a,_=i(a,m),v=i(m+1,u);return c=t[m],h=n?n(c):c,new pe(h,c.node,pe.BLACK,_,v)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,v){const S=c-_,p=c;c-=_;const f=i(S+1,p),g=t[S],w=n?n(g):g;m(new pe(w,g.node,v,null,f))},m=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),S=Math.pow(2,a.count-(_+1));v?h(S,pe.BLACK):(h(S,pe.BLACK),h(S,pe.RED))}return d},o=new mI(t.length),l=s(o);return new Le(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka;const cr={};class Pt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(cr&&se,"ChildrenNode.ts has not been loaded"),ka=ka||new Pt({".priority":cr},{".priority":se}),ka}get(e){const n=Vr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return Vt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Dr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Yo(r,e.getCompare()):l=cr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Pt(d,u)}addToIndexes(e,n){const r=Vo(this.indexes_,(i,s)=>{const o=Vr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===cr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Yo(l,o.getCompare())}else return cr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new Pt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Vo(this.indexes_,i=>{if(i===cr)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new Pt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi;class D{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&M_(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return vi||(vi=new D(new Le(ad),null,Pt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vi}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vi:n}}getChild(e){const n=b(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?vi:this.priorityNode_;return new D(i,o,s)}}updateChild(e,n){const r=b(e);if(r===null)return n;{I(b(e)!==".priority"||Cn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(se,(o,l)=>{n[o]=l.val(e),r++,s&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+D_(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":o_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Is?-1:0}withIndex(e){if(e===Dr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Dr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),i=n.getIterator(se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dr?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gI extends D{constructor(){super(new Le(ad),D.EMPTY_NODE,Pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const Is=new gI;Object.defineProperties(F,{MIN:{value:new F(Gr,D.EMPTY_NODE)},MAX:{value:new F(Zn,Is)}});A_.__EMPTY_NODE=D.EMPTY_NODE;he.__childrenNodeConstructor=D;cI(Is);hI(Is);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=!0;function ve(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new he(n,ve(e))}if(!(t instanceof Array)&&_I){const n=[];let r=!1;if(Be(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ve(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return D.EMPTY_NODE;const s=Yo(n,uI,o=>o.name,ad);if(r){const o=Yo(n,se.getCompare());return new D(s,ve(e),new Pt({".priority":o},{".priority":se}))}else return new D(s,ve(e),Pt.Default)}else{let n=D.EMPTY_NODE;return Be(t,(r,i)=>{if(Vt(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}dI(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI extends Rl{constructor(e){super(),this.indexPath_=e,I(!z(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ni(e.name,n.name):s}makePost(e,n){const r=ve(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,Is);return new F(Zn,e)}toString(){return x_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI extends Rl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ni(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=ve(e);return new F(n,r)}toString(){return".value"}}const wI=new yI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t){return{type:"value",snapshotNode:t}}function Kr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ss(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function os(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function EI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ss(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Kr(n,r)):o.trackChildChange(os(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(i,s)=>{n.hasChild(i)||r.trackChildChange(ss(i,s))}),n.isLeafNode()||n.forEachChild(se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(os(i,s,o))}else r.trackChildChange(Kr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.indexedFilter_=new ud(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ls.getStartPost_(e),this.endPost_=ls.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const s=this;return n.forEachChild(se,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ls(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=D.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,m)=>c(m,h)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new F(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,a);if(d&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(os(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ss(n,c));const v=l.updateImmediateChild(n,D.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Kr(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(ss(u.name,u.node)),s.trackChildChange(Kr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gr}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new cd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function SI(t){return t.loadsAllData()?new ud(t.getIndex()):t.hasLimit()?new CI(t):new ls(t)}function Mf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===se?n="$priority":t.index_===wI?n="$value":t.index_===Dr?n="$key":(I(t.index_ instanceof vI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Lf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends T_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ss("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=qo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Mf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Vr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=qo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Mf(e._queryParams),r=e._path.toString(),i=new Tl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ti(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ns(l.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(){return{value:null,children:new Map}}function U_(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=b(e);t.children.has(r)||t.children.set(r,Xo());const i=t.children.get(r);e=K(e),U_(i,e,n)}}function Bu(t,e,n){t.value!==null?n(e,t.value):kI(t,(r,i)=>{const s=new G(e.toString()+"/"+r);Bu(i,s,n)})}function kI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Be(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=10*1e3,NI=30*1e3,RI=5*60*1e3;class xI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new TI(e);const r=bf+(NI-bf)*Math.random();Di(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Be(e,(i,s)=>{s>0&&Vt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Di(this.reportStats_.bind(this),Math.floor(Math.random()*2*RI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ut||(ut={}));function z_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function dd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ut.ACK_USER_WRITE,this.source=z_()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new Jo(W(),n,this.revert)}}else return I(b(this.path)===e,"operationForChild called for unrelated child."),new Jo(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.source=e,this.path=n,this.type=ut.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new as(this.source,W()):new as(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ut.OVERWRITE}operationForChild(e){return z(this.path)?new er(this.source,W(),this.snap.getImmediateChild(e)):new er(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ut.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new er(this.source,W(),n.value):new us(this.source,W(),n)}else return I(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new us(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=b(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function OI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(EI(o.childName,o.snapshotNode))}),yi(t,i,"child_removed",e,r,n),yi(t,i,"child_added",e,r,n),yi(t,i,"child_moved",s,r,n),yi(t,i,"child_changed",e,r,n),yi(t,i,"value",e,r,n),i}function yi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>DI(t,l,a)),o.forEach(l=>{const a=AI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function AI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function DI(t,e,n){if(e.childName==null||n.childName==null)throw ei("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t,e){return{eventCache:t,serverCache:e}}function Mi(t,e,n,r){return xl(new tr(e,n,r),t.serverCache)}function B_(t,e,n,r){return xl(t.eventCache,new tr(e,n,r))}function $u(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function nr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta;const MI=()=>(Ta||(Ta=new Le(yS)),Ta);class X{constructor(e,n=MI()){this.value=e,this.children=n}static fromObject(e){let n=new X(null);return Be(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(z(e))return null;{const r=b(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:ue(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=b(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new X(null)}}set(e,n){if(z(e))return new X(n,this.children);{const r=b(e),s=(this.children.get(r)||new X(null)).set(K(e),n),o=this.children.insert(r,s);return new X(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=b(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new X(null):new X(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=b(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(z(e))return n;{const r=b(e),s=(this.children.get(r)||new X(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new X(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=b(e),o=this.children.get(s);return o?o.findOnPath_(K(e),ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=b(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),ue(n,i),r):new X(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new X(null))}}function Li(t,e,n){if(z(e))return new ft(new X(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Me(i,e);return s=s.updateChild(o,n),new ft(t.writeTree_.set(i,s))}else{const i=new X(n),s=t.writeTree_.setTree(e,i);return new ft(s)}}}function Ff(t,e,n){let r=t;return Be(n,(i,s)=>{r=Li(r,ue(e,i),s)}),r}function Uf(t,e){if(z(e))return ft.empty();{const n=t.writeTree_.setTree(e,new X(null));return new ft(n)}}function Wu(t,e){return or(t,e)!=null}function or(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function zf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function yn(t,e){if(z(e))return t;{const n=or(t,e);return n!=null?new ft(new X(n)):new ft(t.writeTree_.subtree(e))}}function ju(t){return t.writeTree_.isEmpty()}function Qr(t,e){return $_(W(),t.writeTree_,e)}function $_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=$_(ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ue(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t,e){return H_(e,t)}function LI(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Li(t.visibleWrites,e,n)),t.lastWriteId=r}function bI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function FI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&UI(l,r.path)?i=!1:at(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return zI(t),!0;if(r.snap)t.visibleWrites=Uf(t.visibleWrites,r.path);else{const l=r.children;Be(l,a=>{t.visibleWrites=Uf(t.visibleWrites,ue(r.path,a))})}return!0}else return!1}function UI(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(ue(t.path,n),e))return!0;return!1}function zI(t){t.visibleWrites=W_(t.allWrites,BI,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function BI(t){return t.visible}function W_(t,e,n){let r=ft.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)at(n,o)?(l=Me(n,o),r=Li(r,l,s.snap)):at(o,n)&&(l=Me(o,n),r=Li(r,W(),s.snap.getChild(l)));else if(s.children){if(at(n,o))l=Me(n,o),r=Ff(r,l,s.children);else if(at(o,n))if(l=Me(o,n),z(l))r=Ff(r,W(),s.children);else{const a=Vr(s.children,b(l));if(a){const u=a.getChild(K(l));r=Li(r,W(),u)}}}else throw ei("WriteRecord should have .snap or .children")}}return r}function j_(t,e,n,r,i){if(!r&&!i){const s=or(t.visibleWrites,e);if(s!=null)return s;{const o=yn(t.visibleWrites,e);if(ju(o))return n;if(n==null&&!Wu(o,W()))return null;{const l=n||D.EMPTY_NODE;return Qr(o,l)}}}else{const s=yn(t.visibleWrites,e);if(!i&&ju(s))return n;if(!i&&n==null&&!Wu(s,W()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(at(u.path,e)||at(e,u.path))},l=W_(t.allWrites,o,e),a=n||D.EMPTY_NODE;return Qr(l,a)}}}function $I(t,e,n){let r=D.EMPTY_NODE;const i=or(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=yn(t.visibleWrites,e);return n.forEachChild(se,(o,l)=>{const a=Qr(yn(s,new G(o)),l);r=r.updateImmediateChild(o,a)}),zf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=yn(t.visibleWrites,e);return zf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function WI(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ue(e,n);if(Wu(t.visibleWrites,s))return null;{const o=yn(t.visibleWrites,s);return ju(o)?i.getChild(n):Qr(o,i.getChild(n))}}function jI(t,e,n,r){const i=ue(e,n),s=or(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=yn(t.visibleWrites,i);return Qr(o,r.getNode().getImmediateChild(n))}else return null}function VI(t,e){return or(t.visibleWrites,e)}function HI(t,e,n,r,i,s,o){let l;const a=yn(t.visibleWrites,e),u=or(a,W());if(u!=null)l=u;else if(n!=null)l=Qr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=h.getNext();for(;m&&d.length<i;)c(m,r)!==0&&d.push(m),m=h.getNext();return d}else return[]}function GI(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function Zo(t,e,n,r){return j_(t.writeTree,t.treePath,e,n,r)}function pd(t,e){return $I(t.writeTree,t.treePath,e)}function Bf(t,e,n,r){return WI(t.writeTree,t.treePath,e,n,r)}function el(t,e){return VI(t.writeTree,ue(t.treePath,e))}function KI(t,e,n,r,i,s){return HI(t.writeTree,t.treePath,e,n,r,i,s)}function md(t,e,n){return jI(t.writeTree,t.treePath,e,n)}function V_(t,e){return H_(ue(t.treePath,e),t.writeTree)}function H_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,os(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ss(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Kr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,os(r,e.snapshotNode,i.oldSnap));else throw ei("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const G_=new YI;class gd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return md(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:nr(this.viewCache_),s=KI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t){return{filter:t}}function XI(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function JI(t,e,n,r,i){const s=new QI;let o,l;if(n.type===ut.OVERWRITE){const u=n;u.source.fromUser?o=Vu(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=tl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ut.MERGE){const u=n;u.source.fromUser?o=ek(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Hu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ut.ACK_USER_WRITE){const u=n;u.revert?o=rk(t,e,u.path,r,i,s):o=tk(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ut.LISTEN_COMPLETE)o=nk(t,e,n.path,r,s);else throw ei("Unknown operation type: "+n.type);const a=s.getChanges();return ZI(e,o,a),{viewCache:o,changes:a}}function ZI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$u(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(F_($u(e)))}}function K_(t,e,n,r,i,s){const o=e.eventCache;if(el(r,n)!=null)return e;{let l,a;if(z(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=nr(e),d=u instanceof D?u:D.EMPTY_NODE,c=pd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Zo(r,nr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=b(n);if(u===".priority"){I(Cn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Bf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=K(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Bf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=md(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Mi(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function tl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(z(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),m,null)}else{const m=b(n);if(!a.isCompleteForPath(n)&&Cn(n)>1)return e;const _=K(n),S=a.getNode().getImmediateChild(m).updateChild(_,r);m===".priority"?u=d.updatePriority(a.getNode(),S):u=d.updateChild(a.getNode(),m,S,_,G_,null)}const c=B_(e,u,a.isFullyInitialized()||z(n),d.filtersNodes()),h=new gd(i,c,s);return K_(t,c,n,i,h,l)}function Vu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new gd(i,e,s);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Mi(e,u,!0,t.filter.filtersNodes());else{const c=b(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Mi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=K(n),m=l.getNode().getImmediateChild(c);let _;if(z(h))_=r;else{const v=d.getCompleteChild(c);v!=null?R_(h)===".priority"&&v.getChild(P_(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=D.EMPTY_NODE}if(m.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Mi(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function $f(t,e){return t.eventCache.isCompleteForChild(e)}function ek(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=ue(n,a);$f(e,b(d))&&(l=Vu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=ue(n,a);$f(e,b(d))||(l=Vu(t,l,d,u,i,s,o))}),l}function Wf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Hu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;z(n)?u=r:u=new X(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const m=e.serverCache.getNode().getImmediateChild(c),_=Wf(t,m,h);a=tl(t,a,new G(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const m=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!m){const _=e.serverCache.getNode().getImmediateChild(c),v=Wf(t,_,h);a=tl(t,a,new G(c),v,i,s,o,l)}}),a}function tk(t,e,n,r,i,s,o){if(el(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(z(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return tl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(z(n)){let u=new X(null);return a.getNode().forEachChild(Dr,(d,c)=>{u=u.set(new G(d),c)}),Hu(t,e,n,u,i,s,l,o)}else return e}else{let u=new X(null);return r.foreach((d,c)=>{const h=ue(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Hu(t,e,n,u,i,s,l,o)}}function nk(t,e,n,r,i){const s=e.serverCache,o=B_(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return K_(t,o,n,r,G_,i)}function rk(t,e,n,r,i,s){let o;if(el(r,n)!=null)return e;{const l=new gd(r,e,i),a=e.eventCache.getNode();let u;if(z(n)||b(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Zo(r,nr(e));else{const c=e.serverCache.getNode();I(c instanceof D,"serverChildren would be complete if leaf node"),d=pd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=b(n);let c=md(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,K(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,D.EMPTY_NODE,K(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zo(r,nr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||el(r,W())!=null,Mi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ud(r.getIndex()),s=SI(r);this.processor_=qI(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(D.EMPTY_NODE,l.getNode(),null),d=new tr(a,o.isFullyInitialized(),i.filtersNodes()),c=new tr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=xl(c,d),this.eventGenerator_=new PI(this.query_)}get query(){return this.query_}}function sk(t){return t.viewCache_.serverCache.getNode()}function ok(t,e){const n=nr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(b(e)).isEmpty())?n.getChild(e):null}function jf(t){return t.eventRegistrations_.length===0}function lk(t,e){t.eventRegistrations_.push(e)}function Vf(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Hf(t,e,n,r){e.type===ut.MERGE&&e.source.queryId!==null&&(I(nr(t.viewCache_),"We should always have a full cache before handling merges"),I($u(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=JI(t.processor_,i,e,n,r);return XI(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Q_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ak(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(s,o)=>{r.push(Kr(s,o))}),n.isFullyInitialized()&&r.push(F_(n.getNode())),Q_(t,r,n.getNode(),e)}function Q_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return OI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nl;class uk{constructor(){this.views=new Map}}function ck(t){I(!nl,"__referenceConstructor has already been defined"),nl=t}function dk(){return I(nl,"Reference.ts has not been loaded"),nl}function hk(t){return t.views.size===0}function _d(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),Hf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Hf(o,e,n,r));return s}}function fk(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Zo(n,i?r:null),a=!1;l?a=!0:r instanceof D?(l=pd(n,r),a=!1):(l=D.EMPTY_NODE,a=!1);const u=xl(new tr(l,a,!1),new tr(r,i,!1));return new ik(e,u)}return o}function pk(t,e,n,r,i,s){const o=fk(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),lk(o,n),ak(o,n)}function mk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Sn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Vf(u,n,r)),jf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Vf(a,n,r)),jf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Sn(t)&&s.push(new(dk())(e._repo,e._path)),{removed:s,events:o}}function Y_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Mr(t,e){let n=null;for(const r of t.views.values())n=n||ok(r,e);return n}function q_(t,e){if(e._queryParams.loadsAllData())return Pl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function X_(t,e){return q_(t,e)!=null}function Sn(t){return Pl(t)!=null}function Pl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl;function gk(t){I(!rl,"__referenceConstructor has already been defined"),rl=t}function _k(){return I(rl,"Reference.ts has not been loaded"),rl}let vk=1;class Gf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=GI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function J_(t,e,n,r,i){return LI(t.pendingWriteTree_,e,n,r,i),i?ks(t,new er(z_(),e,n)):[]}function $n(t,e,n=!1){const r=bI(t.pendingWriteTree_,e);if(FI(t.pendingWriteTree_,e)){let s=new X(null);return r.snap!=null?s=s.set(W(),!0):Be(r.children,o=>{s=s.set(new G(o),!0)}),ks(t,new Jo(r.path,s,n))}else return[]}function Ol(t,e,n){return ks(t,new er(dd(),e,n))}function yk(t,e,n){const r=X.fromObject(n);return ks(t,new us(dd(),e,r))}function wk(t,e){return ks(t,new as(dd(),e))}function Ek(t,e,n){const r=yd(t,n);if(r){const i=wd(r),s=i.path,o=i.queryId,l=Me(s,e),a=new as(hd(o),l);return Ed(t,s,a)}else return[]}function Gu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||X_(o,e))){const a=mk(o,e,n,r);hk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,m)=>Sn(m));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=Ik(h);for(let _=0;_<m.length;++_){const v=m[_],S=v.query,p=tv(t,v);t.listenProvider_.startListening(bi(S),il(t,S),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(bi(e),null):u.forEach(h=>{const m=t.queryToTagMap.get(Al(h));t.listenProvider_.stopListening(bi(h),m)}))}kk(t,u)}return l}function Ck(t,e,n,r){const i=yd(t,r);if(i!=null){const s=wd(i),o=s.path,l=s.queryId,a=Me(o,e),u=new er(hd(l),a,n);return Ed(t,o,u)}else return[]}function Sk(t,e,n,r){const i=yd(t,r);if(i){const s=wd(i),o=s.path,l=s.queryId,a=Me(o,e),u=X.fromObject(n),d=new us(hd(l),a,u);return Ed(t,o,d)}else return[]}function Kf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const _=Me(h,i);s=s||Mr(m,_),o=o||Sn(m)});let l=t.syncPointTree_.get(i);l?(o=o||Sn(l),s=s||Mr(l,W())):(l=new uk,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const v=Mr(_,W());v&&(s=s.updateImmediateChild(m,v))}));const u=X_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Al(e);I(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=Tk();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const d=fd(t.pendingWriteTree_,i);let c=pk(l,e,n,d,s,a);if(!u&&!o&&!r){const h=q_(l,e);c=c.concat(Nk(t,e,h))}return c}function vd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Me(o,e),u=Mr(l,a);if(u)return u});return j_(i,e,s,n,!0)}function ks(t,e){return Z_(e,t.syncPointTree_,null,fd(t.pendingWriteTree_,W()))}function Z_(t,e,n,r){if(z(t.path))return ev(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=Mr(i,W()));let s=[];const o=b(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=V_(r,o);s=s.concat(Z_(l,a,u,d))}return i&&(s=s.concat(_d(i,t,r,n))),s}}function ev(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=Mr(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=V_(r,o),d=t.operationForChild(o);d&&(s=s.concat(ev(d,l,a,u)))}),i&&(s=s.concat(_d(i,t,r,n))),s}function tv(t,e){const n=e.query,r=il(t,n);return{hashFn:()=>(sk(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Ek(t,n._path,r):wk(t,n._path);{const s=CS(i,n);return Gu(t,n,null,s)}}}}function il(t,e){const n=Al(e);return t.queryToTagMap.get(n)}function Al(t){return t._path.toString()+"$"+t._queryIdentifier}function yd(t,e){return t.tagToQueryMap.get(e)}function wd(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function Ed(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=fd(t.pendingWriteTree_,e);return _d(r,n,i,null)}function Ik(t){return t.fold((e,n,r)=>{if(n&&Sn(n))return[Pl(n)];{let i=[];return n&&(i=Y_(n)),Be(r,(s,o)=>{i=i.concat(o)}),i}})}function bi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(_k())(t._repo,t._path):t}function kk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Al(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Tk(){return vk++}function Nk(t,e,n){const r=e._path,i=il(t,e),s=tv(t,n),o=t.listenProvider_.startListening(bi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)I(!Sn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!z(u)&&d&&Sn(d))return[Pl(d).query];{let h=[];return d&&(h=h.concat(Y_(d).map(m=>m.query))),Be(c,(m,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(bi(d),il(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Cd(n)}node(){return this.node_}}class Sd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new Sd(this.syncTree_,n)}node(){return vd(this.syncTree_,this.path_)}}const Rk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Qf=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return xk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Pk(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},xk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Pk=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Ok=function(t,e,n,r){return Id(e,new Sd(n,t),r)},nv=function(t,e,n){return Id(t,new Cd(e),n)};function Id(t,e,n){const r=t.getPriority().val(),i=Qf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Qf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new he(l,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new he(i))),o.forEachChild(se,(l,a)=>{const u=Id(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Td(t,e){let n=e instanceof G?e:new G(e),r=t,i=b(n);for(;i!==null;){const s=Vr(r.node.children,i)||{children:{},childCount:0};r=new kd(i,r,s),n=K(n),i=b(n)}return r}function ii(t){return t.node.value}function rv(t,e){t.node.value=e,Ku(t)}function iv(t){return t.node.childCount>0}function Ak(t){return ii(t)===void 0&&!iv(t)}function Dl(t,e){Be(t.node.children,(n,r)=>{e(new kd(n,t,r))})}function sv(t,e,n,r){n&&!r&&e(t),Dl(t,i=>{sv(i,e,!0,r)}),n&&r&&e(t)}function Dk(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ts(t){return new G(t.parent===null?t.name:Ts(t.parent)+"/"+t.name)}function Ku(t){t.parent!==null&&Mk(t.parent,t.name,t)}function Mk(t,e,n){const r=Ak(n),i=Vt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ku(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ku(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=/[\[\].#$\/\u0000-\u001F\u007F]/,bk=/[\[\].#$\u0000-\u001F\u007F]/,Na=10*1024*1024,ov=function(t){return typeof t=="string"&&t.length!==0&&!Lk.test(t)},lv=function(t){return typeof t=="string"&&t.length!==0&&!bk.test(t)},Fk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lv(t)},av=function(t,e,n,r){r&&e===void 0||Nd(Jc(t,"value"),e,n)},Nd=function(t,e,n){const r=n instanceof G?new tI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+bn(r));if(typeof e=="function")throw new Error(t+"contains a function "+bn(r)+" with contents = "+e.toString());if(l_(e))throw new Error(t+"contains "+e.toString()+" "+bn(r));if(typeof e=="string"&&e.length>Na/3&&Nl(e)>Na)throw new Error(t+"contains a string greater than "+Na+" utf8 bytes "+bn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ov(o)))throw new Error(t+" contains an invalid key ("+o+") "+bn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nI(r,o),Nd(t,l,r),rI(r)}),i&&s)throw new Error(t+' contains ".value" child '+bn(r)+" in addition to actual children.")}},uv=function(t,e,n,r){if(!(r&&n===void 0)&&!lv(n))throw new Error(Jc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Uk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),uv(t,e,n,r)},Rd=function(t,e){if(b(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},zk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ov(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Fk(n))throw new Error(Jc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!od(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function cv(t,e,n){xd(t,n),dv(t,r=>od(r,e))}function Bt(t,e,n){xd(t,n),dv(t,r=>at(r,e)||at(e,r))}function dv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?($k(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function $k(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Vn&&ke("event: "+n.toString()),ri(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="repo_interrupt",jk=25;class Vk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xo(),this.transactionQueueTree_=new kd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hk(t,e,n){if(t.stats_=id(t.repoInfo_),t.forceRestClient_||TS())t.server_=new qo(t.repoInfo_,(r,i,s,o)=>{Yf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>qf(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Mt(t.repoInfo_,e,(r,i,s,o)=>{Yf(t,r,i,s,o)},r=>{qf(t,r)},r=>{Gk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=OS(t.repoInfo_,()=>new xI(t.stats_,t.server_)),t.infoData_=new II,t.infoSyncTree_=new Gf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ol(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Od(t,"connected",!1),t.serverSyncTree_=new Gf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Bt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function hv(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Pd(t){return Rk({timestamp:hv(t)})}function Yf(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Vo(n,u=>ve(u));o=Sk(t.serverSyncTree_,s,a,i)}else{const a=ve(n);o=Ck(t.serverSyncTree_,s,a,i)}else if(r){const a=Vo(n,u=>ve(u));o=yk(t.serverSyncTree_,s,a)}else{const a=ve(n);o=Ol(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Ml(t,s)),Bt(t.eventQueue_,l,o)}function qf(t,e){Od(t,"connected",e),e===!1&&Qk(t)}function Gk(t,e){Be(e,(n,r)=>{Od(t,n,r)})}function Od(t,e,n){const r=new G("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=Ol(t.infoSyncTree_,r,i);Bt(t.eventQueue_,r,s)}function fv(t){return t.nextWriteId_++}function Kk(t,e,n,r,i){Ad(t,"set",{path:e.toString(),value:n,priority:r});const s=Pd(t),o=ve(n,r),l=vd(t.serverSyncTree_,e),a=nv(o,l,s),u=fv(t),d=J_(t.serverSyncTree_,e,a,u,!0);xd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const _=h==="ok";_||ze("set at "+e+" failed: "+h);const v=$n(t.serverSyncTree_,u,!_);Bt(t.eventQueue_,e,v),Xk(t,i,h,m)});const c=vv(t,e);Ml(t,c),Bt(t.eventQueue_,c,[])}function Qk(t){Ad(t,"onDisconnectEvents");const e=Pd(t),n=Xo();Bu(t.onDisconnect_,W(),(i,s)=>{const o=Ok(i,s,t.serverSyncTree_,e);U_(n,i,o)});let r=[];Bu(n,W(),(i,s)=>{r=r.concat(Ol(t.serverSyncTree_,i,s));const o=vv(t,i);Ml(t,o)}),t.onDisconnect_=Xo(),Bt(t.eventQueue_,W(),r)}function Yk(t,e,n){let r;b(e._path)===".info"?r=Kf(t.infoSyncTree_,e,n):r=Kf(t.serverSyncTree_,e,n),cv(t.eventQueue_,e._path,r)}function Xf(t,e,n){let r;b(e._path)===".info"?r=Gu(t.infoSyncTree_,e,n):r=Gu(t.serverSyncTree_,e,n),cv(t.eventQueue_,e._path,r)}function qk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Wk)}function Ad(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function Xk(t,e,n,r){e&&ri(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function pv(t,e,n){return vd(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function Dd(t,e=t.transactionQueueTree_){if(e||Ll(t,e),ii(e)){const n=gv(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Jk(t,Ts(e),n)}else iv(e)&&Dl(e,n=>{Dd(t,n)})}function Jk(t,e,n){const r=n.map(u=>u.currentWriteId),i=pv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Me(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ad(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat($n(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ll(t,Td(t.transactionQueueTree_,e)),Dd(t,t.transactionQueueTree_),Bt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ri(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{ze("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Ml(t,e)}},o)}function Ml(t,e){const n=mv(t,e),r=Ts(n),i=gv(t,n);return Zk(t,i,r),r}function Zk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Me(n,a.path);let d=!1,c;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat($n(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=jk)d=!0,c="maxretry",i=i.concat($n(t.serverSyncTree_,a.currentWriteId,!0));else{const h=pv(t,a.path,o);a.currentInputSnapshot=h;const m=e[l].update(h.val());if(m!==void 0){Nd("transaction failed: Data returned ",m,a.path);let _=ve(m);typeof m=="object"&&m!=null&&Vt(m,".priority")||(_=_.updatePriority(h.getPriority()));const S=a.currentWriteId,p=Pd(t),f=nv(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=fv(t),o.splice(o.indexOf(S),1),i=i.concat(J_(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat($n(t.serverSyncTree_,S,!0))}else d=!0,c="nodata",i=i.concat($n(t.serverSyncTree_,a.currentWriteId,!0))}Bt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Ll(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ri(r[l]);Dd(t,t.transactionQueueTree_)}function mv(t,e){let n,r=t.transactionQueueTree_;for(n=b(e);n!==null&&ii(r)===void 0;)r=Td(r,n),e=K(e),n=b(e);return r}function gv(t,e){const n=[];return _v(t,e,n),n.sort((r,i)=>r.order-i.order),n}function _v(t,e,n){const r=ii(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Dl(e,i=>{_v(t,i,n)})}function Ll(t,e){const n=ii(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,rv(e,n.length>0?n:void 0)}Dl(e,r=>{Ll(t,r)})}function vv(t,e){const n=Ts(mv(t,e)),r=Td(t.transactionQueueTree_,e);return Dk(r,i=>{Ra(t,i)}),Ra(t,r),sv(r,i=>{Ra(t,i)}),n}function Ra(t,e){const n=ii(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat($n(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?rv(e,void 0):n.length=s+1,Bt(t.eventQueue_,Ts(e),i);for(let o=0;o<r.length;o++)ri(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function tT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const Jf=function(t,e){const n=nT(t),r=n.namespace;n.domain==="firebase.com"&&zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_S();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new y_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},nT=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=eT(t.substring(d,c)));const h=tT(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",rT=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Zf.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Zf.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class wv{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:R_(this._path)}get ref(){return new Ht(this._repo,this._path)}get _queryIdentifier(){const e=Lf(this._queryParams),n=nd(e);return n==="{}"?"default":n}get _queryObject(){return Lf(this._queryParams)}isEqual(e){if(e=Qe(e),!(e instanceof Md))return!1;const n=this._repo===e._repo,r=od(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+eI(this._path)}}class Ht extends Md{constructor(e,n){super(e,n,new cd,!1)}get parent(){const e=P_(this._path);return e===null?null:new Ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=Yr(this.ref,e);return new cs(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new cs(i,Yr(this.ref,r),se)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Se(t,e){return t=Qe(t),t._checkNotDeleted("ref"),e!==void 0?Yr(t._root,e):t._root}function Yr(t,e){return t=Qe(t),b(t._path)===null?Uk("child","path",e,!1):uv("child","path",e,!1),new Ht(t._repo,ue(t._path,e))}function sT(t,e){t=Qe(t),Rd("push",t._path),av("push",e,t._path,!0);const n=hv(t._repo),r=rT(n),i=Yr(t,r),s=Yr(t,r);let o;return e!=null?o=Jt(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function oT(t){return Rd("remove",t._path),Jt(t,null)}function Jt(t,e){t=Qe(t),Rd("set",t._path),av("set",e,t._path,!1);const n=new Tl;return Kk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Ld{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new yv("value",this,new cs(e.snapshotNode,new Ht(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new wv(this,e,n):null}matches(e){return e instanceof Ld?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class bd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new wv(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const r=Yr(new Ht(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new yv(e.type,this,new cs(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof bd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function lT(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{Xf(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new iT(n,s||void 0),l=e==="value"?new Ld(o):new bd(e,o);return Yk(t._repo,t,l),()=>Xf(t._repo,t,l)}function lt(t,e,n,r){return lT(t,"value",e,n,r)}ck(Ht);gk(Ht);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="FIREBASE_DATABASE_EMULATOR_HOST",Qu={};let uT=!1;function cT(t,e,n,r){t.repoInfo_=new y_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function dT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Jf(s,i),l=o.repoInfo,a,u;typeof process!="undefined"&&process.env&&(u=process.env[aT]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Jf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Ar(Ar.OWNER):new RS(t.name,t.options,e);zk("Invalid Firebase Database URL",o),z(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=fT(l,t,d,new NS(t.name,n));return new pT(c,t)}function hT(t,e){const n=Qu[e];(!n||n[t.key]!==t)&&zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qk(t),delete n[t.key]}function fT(t,e,n,r){let i=Qu[e.name];i||(i={},Qu[e.name]=i);let s=i[t.toURLString()];return s&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Vk(t,uT,n,r),i[t.toURLString()]=s,s}class pT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ht(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function lr(t=t_(),e){const n=td(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=ME("database");r&&mT(n,...r)}return n}function mT(t,e,n,r={}){t=Qe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ar(Ar.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:bE(r.mockUserToken,t.app.options.projectId);s=new Ar(o)}cT(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){hS(Es),Hr(new Xn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return dT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),vn(vf,yf,t),vn(vf,yf,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T={".sv":"timestamp"};function ep(){return _T}Mt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};gT();function Fd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ev(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vT=Ev,Cv=new ws("auth","Firebase",Ev());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new Zc("@firebase/auth");function ho(t,...e){tp.logLevel<=H.ERROR&&tp.error(`Auth (${Es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw Ud(t,...e)}function Et(t,...e){return Ud(t,...e)}function yT(t,e,n){const r=Object.assign(Object.assign({},vT()),{[e]:n});return new ws("auth","Firebase",r).create(e,{appName:t.name})}function Ud(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Cv.create(t,...e)}function M(t,e,...n){if(!t)throw Ud(e,...n)}function Ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ho(e),new Error(e)}function Wt(t,e){t||Ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=new Map;function At(t){Wt(t instanceof Function,"Expected a class definition");let e=np.get(t);return e?(Wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,np.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t,e){const n=td(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ho(s,e!=null?e:{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function ET(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(At);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function CT(){return rp()==="http:"||rp()==="https:"}function rp(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CT()||FE()||"connection"in navigator)?navigator.onLine:!0}function IT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wt(n>e,"Short delay should be less than long delay!"),this.isMobile=Xc()||Yg()}get(){return ST()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t,e){Wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=new Ns(3e4,6e4);function Iv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bl(t,e,n,r,i={}){return kv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ti(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Sv.fetch()(Nv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function kv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kT),e);try{const i=new NT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Js(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Js(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Js(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Js(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yT(t,d,u);$t(t,d)}}catch(i){if(i instanceof xn)throw i;$t(t,"internal-error",{message:String(i)})}}async function Tv(t,e,n,r,i={}){const s=await bl(t,e,n,r,i);return"mfaPendingCredential"in s&&$t(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Nv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zd(t.config,i):`${t.config.apiScheme}://${i}`}class NT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),TT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Js(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Et(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(t,e){return bl(t,"POST","/v1/accounts:delete",e)}async function xT(t,e){return bl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PT(t,e=!1){const n=Qe(t),r=await n.getIdToken(e),i=Bd(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fi(xa(i.auth_time)),issuedAtTime:Fi(xa(i.iat)),expirationTime:Fi(xa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xa(t){return Number(t)*1e3}function Bd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const i=jo(n);return i?JSON.parse(i):(ho("Failed to decode base64 JWT payload"),null)}catch(i){return ho("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function OT(t){const e=Bd(t);return M(e,"internal-error"),M(typeof e.exp!="undefined","internal-error"),M(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&AT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fi(this.lastLoginAt),this.creationTime=Fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ds(t,xT(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bT(s.providerUserInfo):[],l=LT(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Rv(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function MT(t){const e=Qe(t);await sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bT(t){return t.map(e=>{var{providerId:n}=e,r=Fd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(t,e){const n=await kv(t,{},async()=>{const r=ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Nv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Sv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken!="undefined","internal-error"),M(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):OT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hs;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,e){M(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Hn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Fd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ds(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PT(this,e)}reload(){return MT(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ds(this,RT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:w,isAnonymous:k,providerData:R,stsTokenManager:N}=n;M(g&&N,e,"internal-error");const O=hs.fromJSON(this.name,N);M(typeof g=="string",e,"internal-error"),Kt(c,e.name),Kt(h,e.name),M(typeof w=="boolean",e,"internal-error"),M(typeof k=="boolean",e,"internal-error"),Kt(m,e.name),Kt(_,e.name),Kt(v,e.name),Kt(S,e.name),Kt(p,e.name),Kt(f,e.name);const j=new Hn({uid:g,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:k,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:O,createdAt:p,lastLoginAt:f});return R&&Array.isArray(R)&&(j.providerData=R.map(L=>Object.assign({},L))),S&&(j._redirectEventId=S),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new hs;i.updateFromServerResponse(n);const s=new Hn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await sl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xv.type="NONE";const ip=xv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t,e,n){return`firebase:${t}:${e}:${n}`}class Lr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=fo(this.userKey,i.apiKey,s),this.fullPersistenceKey=fo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Lr(At(ip),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||At(ip);const o=fo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Hn._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Lr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Lr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Av(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mv(e))return"Blackberry";if(Lv(e))return"Webos";if($d(e))return"Safari";if((e.includes("chrome/")||Ov(e))&&!e.includes("edge/"))return"Chrome";if(Dv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pv(t=Ne()){return/firefox\//i.test(t)}function $d(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ov(t=Ne()){return/crios\//i.test(t)}function Av(t=Ne()){return/iemobile/i.test(t)}function Dv(t=Ne()){return/android/i.test(t)}function Mv(t=Ne()){return/blackberry/i.test(t)}function Lv(t=Ne()){return/webos/i.test(t)}function Fl(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UT(t=Ne()){var e;return Fl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zT(){return UE()&&document.documentMode===10}function bv(t=Ne()){return Fl(t)||Dv(t)||Lv(t)||Mv(t)||/windows phone/i.test(t)||Av(t)}function BT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t,e=[]){let n;switch(t){case"Browser":n=sp(Ne());break;case"Worker":n=`${sp(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Es}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new op(this),this.idTokenSubscription=new op(this),this.beforeStateQueue=new $T(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Qe(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ws("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&At(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ul(t){return Qe(t)}class op{constructor(e){this.auth=e,this.observer=null,this.addObserver=KE(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function jT(t,e,n){const r=Ul(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Uv(e),{host:o,port:l}=VT(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||HT()}function Uv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VT(t){const e=Uv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:lp(o)}}}function lp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,n){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(t,e){return Tv(t,"POST","/v1/accounts:signInWithIdp",Iv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="http://localhost";class rr extends zv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Fd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return br(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,br(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,br(e,n)}buildRequest(){const e={requestUri:GT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ti(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Bv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Rs{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rr._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return en.credential(n,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Rs{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Rs{constructor(){super("twitter.com")}static credential(e,n){return rr._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT(t,e){return Tv(t,"POST","/v1/accounts:signUp",Iv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Hn._fromIdTokenResponse(e,r,i),o=ap(r);return new In({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ap(r);return new In({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ap(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(t){var e;const n=Ul(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new In({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await KT(n,{returnSecureToken:!0}),i=await In._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends xn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ol.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ol(e,n,r,i)}}function $v(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ol._fromErrorAndOperation(t,s,e,r):s})}async function YT(t,e,n=!1){const r=await ds(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return In._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ds(t,$v(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Bd(s.idToken);M(o,r,"internal-error");const{sub:l}=o;return M(t.uid===l,r,"user-mismatch"),In._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(t,e,n=!1){const r="signIn",i=await $v(t,r,e),s=await In._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function JT(t,e,n,r){return Qe(t).onIdTokenChanged(e,n,r)}function ZT(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}function e1(t,e,n,r){return Qe(t).onAuthStateChanged(e,n,r)}const ll="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ll,"1"),this.storage.removeItem(ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(){const t=Ne();return $d(t)||Fl(t)}const n1=1e3,r1=10;class jv extends Wv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=t1()&&BT(),this.fallbackToPolling=bv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,r1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},n1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jv.type="LOCAL";const i1=jv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv extends Wv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vv.type="SESSION";const Hv=Vv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await s1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Wd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return window}function l1(t){Ct().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(){return typeof Ct().WorkerGlobalScope!="undefined"&&typeof Ct().importScripts=="function"}async function a1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function u1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function c1(){return Gv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="firebaseLocalStorageDb",d1=1,al="firebaseLocalStorage",Qv="fbase_key";class xs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bl(t,e){return t.transaction([al],e?"readwrite":"readonly").objectStore(al)}function h1(){const t=indexedDB.deleteDatabase(Kv);return new xs(t).toPromise()}function qu(){const t=indexedDB.open(Kv,d1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(al,{keyPath:Qv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(al)?e(r):(r.close(),await h1(),e(await qu()))})})}async function up(t,e,n){const r=Bl(t,!0).put({[Qv]:e,value:n});return new xs(r).toPromise()}async function f1(t,e){const n=Bl(t,!1).get(e),r=await new xs(n).toPromise();return r===void 0?null:r.value}function cp(t,e){const n=Bl(t,!0).delete(e);return new xs(n).toPromise()}const p1=800,m1=3;class Yv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>m1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zl._getInstance(c1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await a1(),!this.activeServiceWorker)return;this.sender=new o1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||u1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qu();return await up(e,ll,"1"),await cp(e,ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>up(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>f1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bl(i,!1).getAll();return new xs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),p1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yv.type="LOCAL";const g1=Yv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function v1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Et("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_1().appendChild(r)})}function y1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ns(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t,e){return e?At(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends zv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return br(e,this._buildIdpRequest())}_linkToIdToken(e,n){return br(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return br(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function E1(t){return XT(t.auth,new jd(t),t.bypassAuthState)}function C1(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),qT(n,new jd(t),t.bypassAuthState)}async function S1(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),YT(n,new jd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return E1;case"linkViaPopup":case"linkViaRedirect":return S1;case"reauthViaPopup":case"reauthViaRedirect":return C1;default:$t(this.auth,"internal-error")}}resolve(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=new Ns(2e3,1e4);class Ir extends qv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const e=Wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,I1.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="pendingRedirect",po=new Map;class T1 extends qv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const r=await N1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function N1(t,e){const n=P1(e),r=x1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function R1(t,e){po.set(t._key(),e)}function x1(t){return At(t._redirectPersistence)}function P1(t){return fo(k1,t.config.apiKey,t.name)}async function O1(t,e,n=!1){const r=Ul(t),i=w1(r,e),o=await new T1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=10*60*1e3;class D1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!M1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A1&&this.cachedEventUids.clear(),this.cachedEventUids.has(dp(e))}saveEventToCache(e){this.cachedEventUids.add(dp(e)),this.lastProcessedEventTime=Date.now()}}function dp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function M1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(t,e={}){return bl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F1=/^https?/;async function U1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await L1(t);for(const n of e)try{if(z1(n))return}catch{}$t(t,"unauthorized-domain")}function z1(t){const e=Yu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!F1.test(n))return!1;if(b1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=new Ns(3e4,6e4);function hp(){const t=Ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $1(t){return new Promise((e,n)=>{var r,i,s;function o(){hp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hp(),n(Et(t,"network-request-failed"))},timeout:B1.get()})}if(!((i=(r=Ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ct().gapi)===null||s===void 0)&&s.load)o();else{const l=y1("iframefcb");return Ct()[l]=()=>{gapi.load?o():n(Et(t,"network-request-failed"))},v1(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw mo=null,e})}let mo=null;function W1(t){return mo=mo||$1(t),mo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=new Ns(5e3,15e3),V1="__/auth/iframe",H1="emulator/auth/iframe",G1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},K1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Q1(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zd(e,H1):`https://${t.config.authDomain}/${V1}`,r={apiKey:e.apiKey,appName:t.name,v:Es},i=K1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ti(r).slice(1)}`}async function Y1(t){const e=await W1(t),n=Ct().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:Q1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:G1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Et(t,"network-request-failed"),l=Ct().setTimeout(()=>{s(o)},j1.get());function a(){Ct().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},X1=500,J1=600,Z1="_blank",eN="http://localhost";class fp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tN(t,e,n,r=X1,i=J1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},q1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ne().toLowerCase();n&&(l=Ov(u)?Z1:n),Pv(u)&&(e=e||eN,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(UT(u)&&l!=="_self")return nN(e||"",l),new fp(null);const c=window.open(e||"",l,d);M(c,t,"popup-blocked");try{c.focus()}catch{}return new fp(c)}function nN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN="__/auth/handler",iN="emulator/auth/handler";function pp(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Es,eventId:i};if(e instanceof Bv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof Rs){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${sN(t)}?${ti(l).slice(1)}`}function sN({config:t}){return t.emulator?zd(t,iN):`https://${t.authDomain}/${rN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="webStorageSupport";class oN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hv,this._completeRedirectFn=O1,this._overrideRedirectResult=R1}async _openPopup(e,n,r,i){var s;Wt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=pp(e,n,r,Yu(),i);return tN(e,o,Wd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),l1(pp(e,n,r,Yu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Wt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Y1(e),r=new D1(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pa,{type:Pa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pa];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=U1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bv()||$d()||Fl()}}const lN=oN;var mp="@firebase/auth",gp="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cN(t){Hr(new Xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{M(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),M(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fv(t)},d=new WT(l,a,u);return ET(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hr(new Xn("auth-internal",e=>{const n=Ul(e.getProvider("auth").getImmediate());return(r=>new aN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(mp,gp,uN(t)),vn(mp,gp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=5*60,hN=Qg("authIdTokenMaxAge")||dN;let _p=null;const fN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hN)return;const i=n==null?void 0:n.token;_p!==i&&(_p=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Jv(t=t_()){const e=td(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wT(t,{popupRedirectResolver:lN,persistence:[g1,i1,Hv]}),r=Qg("authTokenSyncURL");if(r){const s=fN(r);ZT(n,s,()=>s(n.currentUser)),JT(n,o=>s(o))}const i=Kg("auth");return i&&jT(n,`http://${i}`),n}cN("Browser");const vp="bantr__uid";function Xu(t){const e=localStorage.getItem(vp),n={...t,uid:e||(t==null?void 0:t.uid)};return n!=null&&n.uid&&localStorage.setItem(vp,n==null?void 0:n.uid),n}async function pN(){try{const t=Jv(),{user:e}=await QT(t);return{user:Xu(e),error:null}}catch(t){return{user:null,error:t}}}function mN(){const[t,e]=E.exports.useState(null),n=Jv();return E.exports.useEffect(()=>e1(n,i=>{e(s=>(s==null?void 0:s.uid)!==(i==null?void 0:i.uid)?Xu(i):Xu(s))}),[n]),t}function Ps(t,e){const n=mN(),r=n==null?void 0:n.uid,[i,s]=E.exports.useState({});return E.exports.useEffect(()=>{const o=Se(t,`user/${e}/${r}`);lt(o,async l=>{const a=l.val();s(a)})},[r,e]),{uid:r,...i}}function Vd(){var r,i,s;const t=document.location.search,e=(s=(i=(r=t==null?void 0:t.split("room="))==null?void 0:r[1])==null?void 0:i.split("&"))==null?void 0:s[0];return e?e.replace(/[^0-9]/gi,"").substring(0,8):null}var Hd={exports:{}},$l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gN=E.exports,_N=Symbol.for("react.element"),vN=Symbol.for("react.fragment"),yN=Object.prototype.hasOwnProperty,wN=gN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,EN={key:!0,ref:!0,__self:!0,__source:!0};function Zv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)yN.call(e,r)&&!EN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_N,type:t,key:s,ref:o,props:i,_owner:wN.current}}$l.Fragment=vN;$l.jsx=Zv;$l.jsxs=Zv;Hd.exports=$l;const y=Hd.exports.jsx,Q=Hd.exports.jsxs;function CN(){const t=localStorage.getItem("bantr__room"),e=lr(),n=Ps(e,t),r=(n==null?void 0:n.name)||"someone";return Q("div",{className:"Layout",children:[y("h3",{className:"MyUserName",children:r}),y("h1",{className:"AppTitle",children:y(St,{to:"/match",children:"bantr"})}),y(f0,{})]})}const _t={ted:{name:"Ted Lasso"},rebecca:{name:"Rebecca Welton"},sam:{name:"Sam Obisanya"},jamie:{name:"Jamie Tartt"},roy:{name:"Roy Kent"},keeley:{name:"Keeley Jones"},beard:{name:"Coach Beard"},dani:{name:"Dani Rojas"},nathan:{name:"Nathan Shelley"},rupert:{name:"Rupert Mannion"},flo:{name:"Flo 'Sassy' Collins"}};function SN({characterId:t,setCharacterId:e}){const n=Object.keys(_t).map(o=>({id:o,..._t==null?void 0:_t[o]})),s=[{id:"",name:"Choose..."},...n].map(o=>y("option",{value:o==null?void 0:o.id,default:(o==null?void 0:o.id)==="",children:o==null?void 0:o.name},o==null?void 0:o.id));return y("div",{children:y("select",{value:t,onChange:o=>e(o.target.value),children:s})})}const Oa="bantr__room";function IN(){const t=lr(),e=ic(),n=localStorage.getItem(Oa)||"",[r,i]=E.exports.useState(n);E.exports.useEffect(()=>{const k=Vd();!k||(localStorage.setItem(Oa,k),i(k))},[]);const s=k=>{const N=k.target.value.replace(/[^0-9]/gi,"").substring(0,8);localStorage.setItem(Oa,N),i(N)},o=Ps(t,r),l=(o==null?void 0:o.name)||"",a=(o==null?void 0:o.realName)||"",u=o==null?void 0:o.character,[d,c]=E.exports.useState("");E.exports.useEffect(()=>{c(l)},[l]);const[h,m]=E.exports.useState("");E.exports.useEffect(()=>{m(a)},[a]);const[_,v]=E.exports.useState();return E.exports.useEffect(()=>{v(u)},[u]),y("div",{children:y("div",{className:"Home Section",children:Q("div",{className:"UserNameForm Center",children:[y("p",{children:"Room Code:"}),y("input",{type:"text",value:r,onChange:s}),y("p",{children:"Your Real Name:"}),y("input",{type:"text",value:h,onChange:k=>m(k.target.value.trim())}),y("p",{children:"Your Screen Name:"}),y("input",{type:"text",value:d,onChange:k=>{const N=k.target.value.replace(/[^a-z0-9]/gi,"_");c(N)}}),y("p",{children:"Your Character:"}),y(SN,{characterId:_,setCharacterId:v}),(!d||!h)&&y("p",{children:"Enter your real name and screen name."}),!r&&y("p",{children:"Enter a room code to play."}),!_&&y("p",{children:"Choose a character to play."}),y("button",{className:"PlayButton",onClick:async()=>{var L;const k=await pN(),R=(L=k==null?void 0:k.user)==null?void 0:L.uid,N=d||"",O=h||"",j=Se(t,`user/${r}/${R}`);await Jt(j,{name:N,realName:O,character:_,room:r}),d&&h&&r&&_&&e("/match")},children:y("span",{children:"Play"})})]})})})}function yp(){return y("div",{children:Q("div",{className:"Section Center",children:[y("h2",{children:"Page Not Found"}),y("p",{children:"Sorry about that!"}),y(St,{to:"/",children:"Back to Home"})]})})}const kN=2e3,ct={green_heart:"\u{1F49A}",soccer_ball:"\u26BD",red_flag:"\u{1F6A9}"};function Wl(t,e){return t<e?`${t}~${e}`:`${e}~${t}`}function TN({reactionId:t,sendReaction:e,isSet:n}){const r=ct==null?void 0:ct[t];return y("div",{className:`Reaction ${n?"On":"Off"}`,onClick:()=>e(t,!n),children:y("span",{children:r})})}function NN({reactions:t,sendReaction:e}){const r=Object.keys(t).length>0?"HasReactions":"NoReactions",i=Object.keys(ct).map(s=>y(TN,{reactionId:s,sendReaction:e,isSet:t==null?void 0:t[s]},s));return y("div",{className:`ReactionBar ${r}`,children:i})}function RN({reactions:t}){return y("div",{className:"Reactions",children:Object.keys(t).map(e=>y("div",{className:"Reaction",children:ct==null?void 0:ct[e]},e))})}function xN({content:t}){const n=t.split(`
`).map((r,i)=>y("p",{children:r},i));return y("div",{children:n})}function PN({myUid:t,from:e,sendReaction:n,content:r,reactions:i,isViewOnly:s}){return Q("div",{className:"MessageTile",children:[y("div",{className:`MessageBox ${t===e?"MyMessage":"TheirMessage"}`,children:y(xN,{content:r})}),(t!==e||s)&&y(RN,{reactions:i}),t!==e&&!s&&y(NN,{reactions:i,sendReaction:n})]})}function ON(t,e){const[n,r]=t.split("~");return n===e?r:n}function ey(t,e,n){const[r,i]=E.exports.useState({});E.exports.useEffect(()=>{const a=Se(t,`user/${e}`);lt(a,async u=>{const d=u.val()||{};i(d)})},[]);const s=Object.keys(r).map(a=>({uid:a,...r[a]}))||[],[o,l]=E.exports.useState({});return E.exports.useEffect(()=>{const a=Se(t,`live/${e}/${n}`);lt(a,async u=>{const d=u.val()||{};l(d)})},[e,n]),{allUsers:s,liveMap:o}}function ty(t){const{roomId:e,chatId:n,uid:r,isViewOnly:i}=t,s=lr(),[o,l]=E.exports.useState({});E.exports.useEffect(()=>{const T=Se(s,`user/${e}/${r}`);lt(T,async A=>{const U=A.val()||{};l(U)})},[r]);const a=ON(n,r),[u,d]=E.exports.useState({}),c=(u==null?void 0:u.name)||"someone";E.exports.useEffect(()=>{const T=Se(s,`user/${e}/${a}`);lt(T,async A=>{const U=A.val()||{};d(U)})},[a]);const[h,m]=E.exports.useState({}),_=Se(s,`chat/${e}/${n}`);E.exports.useEffect(()=>{lt(_,async T=>{const A=T.val()||{};m(A)})},[]);const[v,S]=E.exports.useState({});E.exports.useEffect(()=>{const T=Se(s,`reaction/${e}/${n}`);lt(T,async A=>{const U=A.val()||{};S(U)})},[]);const[p,f]=E.exports.useState(),g=async T=>{const A=T.target.value;f(A)},w=async()=>{if(!p||i)return;const T={type:"message",timestamp:ep(),from:r,room:e,content:p};await sT(_,T),f("");const A=Se(s,`live/${e}/${a}/${r}/latest`);await Jt(A,T);const U=Se(s,`live/${e}/${r}/${a}/latest`);await Jt(U,T)},k=async(T,A,U,re,It,kt)=>{if(i)return;const ar=Se(s,`reaction/${e}/${U}/${re}/${It}`);kt?await Jt(ar,{timestamp:ep(),from:T,to:A,room:e}):await oT(ar)},R=Object.keys(h).map(T=>({id:T,...h[T],reactions:(v==null?void 0:v[T])||{}})).sort((T,A)=>T.timestamp-A.timestamp),N=T=>(A,U)=>{k(r,a,n,T,A,U)},O=async T=>{if(i)return;const A=Se(s,`live/${e}/${a}/${r}/typing`);await Jt(A,T),T&&setTimeout(async()=>{await Jt(A,!1)},kN)},[j,L]=E.exports.useState(!1);E.exports.useEffect(()=>{if(i)return;const T=Se(s,`live/${e}/${r}`);lt(T,async A=>{var It;const U=A.val()||{},re=(It=U==null?void 0:U[a])==null?void 0:It.typing;L(re)})},[e,r,a]);const $e=i?"ViewOnly":"LiveChat",Pn=i?`/results?room=${e}`:"/chat",On=y("div",{className:"MessageTile TypingMessage",children:y("div",{className:"MessageBox TheirMessage",children:Q("p",{children:[y("span",{className:"TypingDot",children:"."}),y("span",{className:"TypingDot",children:"."}),y("span",{className:"TypingDot",children:"."})]})})},"typing"),si=R.map(T=>y(PN,{myUid:r,sendReaction:N(T.id),isViewOnly:i,...T},T.id)),Os=i||!j?si:[...si,On],oi=y("p",{className:"Starter",children:"No messages yet. It's time to banter."}),li=Os.length>0?Os:oi,x=Q("div",{className:"Sender",children:[y("textarea",{className:"SendContent",onChange:g,onKeyPress:()=>O(!0),onBlur:()=>O(!1),value:p}),y("button",{className:"SendButton",onClick:w,children:y("span",{children:"Send"})})]});return Q("div",{children:[y("h2",{className:"PageTitle TheirUserName",children:c}),y(St,{to:Pn,className:"BackLink",children:"< Back"}),y("div",{className:`Chat ${$e}`,children:y("div",{className:"ChatWrapper",children:y("div",{children:li})})}),!i&&x]})}const AN=1e3*60;function DN({live:t,myUid:e}){if(!(t!=null&&t.latest))return y("p",{children:"Chat"});const n=t.latest,r=(n==null?void 0:n.from)===e?"You":"Them",i=n==null?void 0:n.content,s=`${r}: ${i}`;return y("p",{children:s})}function MN({live:t}){if(!(t!=null&&t.latest))return y("p",{children:"New Match"});const e=t.latest,n=(Date.now()-(e==null?void 0:e.timestamp))/AN,r=Math.max(Math.floor(n),0),i=r>=60?"too long ago":`${r}m ago`;return y("p",{children:i})}function LN({myUid:t,user:e,live:n}){var s;const r=Wl(t,e==null?void 0:e.uid),i=((s=n==null?void 0:n.latest)==null?void 0:s.from)===t?"ThemNext":"YouNext";return Q(St,{className:`MatchTile ${i}`,to:`/chat/${r}`,children:[Q("div",{className:"Teaser",children:[y("h3",{children:(e==null?void 0:e.name)||"No Name Yet"}),y(MN,{live:n})]}),y("div",{className:"ChatIcon",children:y(DN,{live:n,myUid:t})})]})}function bN(){const t=lr(),e=localStorage.getItem("bantr__room"),n=Ps(t,e),r=n==null?void 0:n.uid,{allUsers:i,liveMap:s}=ey(t,e,r),o=i.filter(u=>u.uid!==r).map(u=>y(LN,{myUid:r,user:u,live:(s==null?void 0:s[u==null?void 0:u.uid])||{}},u.uid)),l=y("p",{className:"Center",children:"No one is nearby."}),a=o.length>0?o:l;return Q("div",{children:[y("h2",{className:"PageTitle",children:"suggestions for you"}),y("div",{className:"MatchResults",children:a}),Q("p",{className:"BottomLinks",children:[y(St,{to:"/",children:"< Change Room/Name"}),y(St,{to:"/chat",children:"Chats >"})]})]})}function FN(t){var o,l;const e=((o=t.live.latest)==null?void 0:o.from)===t.myUid?"You":"Them",n=(l=t.live.latest)==null?void 0:l.content,r=n?`${e}: ${n}`:"start a conversation",s=`/chat/${Wl(t.myUid,t.uid)}`;return y(St,{to:s,children:Q("div",{className:"InboxChat",children:[y("div",{className:"Half UserHalf",children:y("h4",{children:t==null?void 0:t.name})}),y("div",{className:"Half MessageHalf",children:y("p",{children:r})}),y("div",{className:`ChatLight ${e}`})]})})}function UN(t){return t.map(n=>y(FN,{...n},n.uid))}function zN(){const t=lr(),e=localStorage.getItem("bantr__room"),n=Ps(t,e),r=n==null?void 0:n.uid,{allUsers:i,liveMap:s}=ey(t,e,r),o=i.filter(c=>c.uid!==r).map(c=>({...c,myUid:r,live:(s==null?void 0:s[c==null?void 0:c.uid])||{typing:!1,latest:{}}})).sort((c,h)=>{var v,S;const m=((v=c.live.latest)==null?void 0:v.timestamp)||0;return(((S=h.live.latest)==null?void 0:S.timestamp)||0)-m}),l=o.filter(c=>{var h,m;return((h=c.live.latest)==null?void 0:h.from)&&((m=c.live.latest)==null?void 0:m.from)!==r}),a=o.filter(c=>{var h,m;return((h=c.live.latest)==null?void 0:h.from)&&((m=c.live.latest)==null?void 0:m.from)===r}),u=o.filter(c=>{var h;return!((h=c.live.latest)!=null&&h.from)}),d=[...l,...a,...u];return Q("div",{children:[y("h2",{className:"PageTitle",children:"you've been bantred"}),y(St,{to:"/match",className:"BackLink",children:"< Back"}),Q("div",{className:"Inbox",children:[y("h3",{children:"your messages"}),UN(d)]})]})}function BN(){const t=lr(),e=localStorage.getItem("bantr__room"),n=Ps(t,e),r=n==null?void 0:n.uid,{chatId:i}=Up();return y(ty,{roomId:e,chatId:i,uid:r,isViewOnly:!1})}function $N(){const t=Vd(),{myUid:e,theirUid:n}=Up(),r=Wl(e,n);return y(ty,{roomId:t,chatId:r,uid:e,isViewOnly:!0})}function WN(t,e){return Object.values(t).reduce((n,r)=>[...n,...Object.values(r)],[]).reduce((n,r)=>{const i=Object.keys(r).map(s=>({reaction:s,...r[s]})).filter(s=>s.room===e);return[...n,...i]},[])}function wp(t){return t.reduce((e,n)=>({...e,[n.reaction]:((e==null?void 0:e[n.reaction])||0)+1}),{})}function jN(t,e){const{positives:n,negatives:r,total:i}=t.reduce((o,l)=>({positives:o.positives+(l.reaction!=="red_flag"?1:0),negatives:o.negatives+(l.reaction==="red_flag"?1:0),total:o.total+1}),{positives:0,negatives:0,total:0}),s=Object.keys(e).length;return s>0?(n-r)/s:0}function VN(t){return Q("span",{className:"ReactionCount",children:[y("span",{children:t.emoji}),y("span",{children:(t==null?void 0:t.count)||0})]})}function Ep(t){t.reactions;const e=Object.keys(ct).map(n=>{var r;return{reaction:n,emoji:ct==null?void 0:ct[n],count:(r=t.reactions)==null?void 0:r[n]}}).map(n=>y(VN,{...n},n.reaction));return y("p",{className:"ReactionCounts",children:e})}function HN(t){var v;const{roomId:e,matches:n}=t,[r,i]=E.exports.useState(0);function s(){i(S=>S===0?n.length-1:S-1)}function o(){i(S=>(S+1)%n.length)}const l=(n==null?void 0:n[r])||{},a={name:"No Character"},u=(_t==null?void 0:_t[t.character])||a,d=(_t==null?void 0:_t[l.character])||a,c=`/bantr/image/${t.character}.jpeg`,h=`/bantr/image/${l.character}.jpeg`,m=`/chat/view/${t.uid}/${l.uid}?room=${e}`,_=((v=l==null?void 0:l.loveFactor)==null?void 0:v.toFixed(3))||0;return y("div",{className:"UserResultWrapper",children:Q("div",{className:"UserResult",children:[Q("div",{className:"ResultBlock UserBlock",children:[y("h3",{children:t.realName}),y("h4",{children:t.name}),y("h5",{children:u.name}),y(Ep,{reactions:l.theirCounts}),y("p",{children:"Reactions Received"})]}),Q("div",{className:"ResultBlock MatchBlock",children:[Q("h3",{children:[t.realName,"'s #",r+1," Match"]}),Q("p",{children:["Love Factor: ",_]}),y("button",{onClick:s,children:"<"}),Q("div",{className:"MatchPhotoPair",children:[y("div",{className:"MatchPhoto",children:y("img",{src:c,alt:u.name})}),y("div",{className:"MatchPhoto",children:y("img",{src:h,alt:d.name})})]}),y("button",{onClick:o,children:">"}),y("p",{children:y(St,{to:m,children:"View Chat"})})]}),Q("div",{className:"ResultBlock UserBlock",children:[y("h3",{children:l.realName}),y("h4",{children:l.name}),y("h5",{children:d.name}),y(Ep,{reactions:l.myCounts}),y("p",{children:"Reactions Received"})]})]})})}function GN(){const t=lr(),e=Vd(),[n,r]=E.exports.useState({});E.exports.useEffect(()=>{const h=Se(t,`user/${e}`);lt(h,async m=>{const _=m.val()||{};r(_)})},[e]);const i=Object.keys(n).map(h=>({uid:h,...n[h]})),[s,o]=E.exports.useState({});E.exports.useEffect(()=>{const h=Se(t,`reaction/${e}`);lt(h,async m=>{const _=m.val()||{};o(_)})},[e]);const[l,a]=E.exports.useState({});E.exports.useEffect(()=>{const h=Se(t,`chat/${e}`);lt(h,async m=>{const _=m.val()||{};a(_)})},[e]);const u=i.map(h=>{var _;const m=i.map(v=>{const S=Wl(h.uid,v.uid),p=(s==null?void 0:s[S])||{},f={[S]:p},g=WN(f,e),w=g.filter(O=>O.from===h.uid),k=g.filter(O=>O.from===v.uid),R=(l==null?void 0:l[S])||{},N=jN(w,R);return{...v,loveFactor:N,myCounts:wp(w),theirCounts:wp(k),totalReactions:g.length}}).sort((v,S)=>v.loveFactor!==S.loveFactor?S.loveFactor-v.loveFactor:S.totalReactions-v.totalReactions).filter(v=>v.uid!==h.uid);return{...h,matches:m,bestLoveFactor:((_=m==null?void 0:m[0])==null?void 0:_.loveFactor)||0}}).sort((h,m)=>m.bestLoveFactor-h.bestLoveFactor),d=y("p",{children:"No results yet."}),c=u.map(h=>y(HN,{roomId:e,...h},h.uid));return y("div",{children:Q("div",{className:"Section Center",children:[y("h2",{children:"Results"}),y("p",{className:"ScrollMessage",children:"Scroll horizontally to see each match."}),y("div",{className:"AllUserResults",children:c.length>0?c:d}),y("br",{}),y(St,{to:"/",children:"Back to Home"})]})})}const KN="/bantr",Cp="bantr__pathname";function QN(){const t=ic();return E.exports.useEffect(()=>{const e=localStorage.getItem(Cp);if(e){localStorage.setItem(Cp,"");const n=e.substring(KN.length);t(n)}},[t]),Q(m0,{children:[Q(nt,{element:y(CN,{}),children:[y(nt,{index:!0,element:y(IN,{})}),y(nt,{path:"match",element:y(bN,{})}),Q(nt,{path:"chat",children:[y(nt,{index:!0,element:y(zN,{})}),y(nt,{path:":chatId",element:y(BN,{})}),y(nt,{path:"view/:myUid/:theirUid",element:y($N,{})})]}),y(nt,{path:"results",element:y(GN,{})}),y(nt,{path:"*",element:y(yp,{})})]}),y(nt,{path:"*",element:y(yp,{})})]})}function YN(){const t=cS();return y("div",{className:"App Theme",children:y(dS.Provider,{value:t,children:y(QN,{})})})}document.title="Bantr";Fa.createRoot(document.getElementById("root")).render(y(Pp.StrictMode,{children:y(w0,{basename:"bantr",children:y(YN,{})})}));
