(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"===typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(701)}])},4373:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(1799),o=n(9396),i=n(5893),s=(n(7294),n(1664)),u=n.n(s);function c(e){var t=e.target||(e.href.startsWith("http")?"_blank":void 0);return(0,i.jsx)(u(),(0,o.Z)((0,r.Z)({},e),{passHref:!0,children:(0,i.jsx)("a",{target:t,rel:"_blank"===t?"noreferrer noopener":void 0,className:e.className,children:e.children})}))}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,i=n(7273).Z,s=o(n(7294)),u=n(6273),c=n(2725),a=n(3462),l=n(1018),f=n(7190),d=n(1210),h=n(8684),p={};function m(e,t,n,r){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;p[t+"%"+n+(o?"%"+o:"")]=!0}}var v=s.default.forwardRef((function(e,t){var n,o=e.href,v=e.as,y=e.children,_=e.prefetch,g=e.passHref,b=e.replace,x=e.shallow,S=e.scroll,j=e.locale,w=e.onClick,C=e.onMouseEnter,O=e.onTouchStart,R=e.legacyBehavior,k=void 0===R?!0!==Boolean(!1):R,T=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,!k||"string"!==typeof n&&"number"!==typeof n||(n=s.default.createElement("a",null,n));var F=!1!==_,z=s.default.useContext(a.RouterContext),E=s.default.useContext(l.AppRouterContext);E&&(z=E);var P,L=s.default.useMemo((function(){var e=r(u.resolveHref(z,o,!0),2),t=e[0],n=e[1];return{href:t,as:v?u.resolveHref(z,v):n||t}}),[z,o,v]),M=L.href,N=L.as,A=s.default.useRef(M),I=s.default.useRef(N);k&&(P=s.default.Children.only(n));var Z=k?P&&"object"===typeof P&&P.ref:t,B=r(f.useIntersection({rootMargin:"200px"}),3),D=B[0],H=B[1],U=B[2],q=s.default.useCallback((function(e){I.current===N&&A.current===M||(U(),I.current=N,A.current=M),D(e),Z&&("function"===typeof Z?Z(e):"object"===typeof Z&&(Z.current=e))}),[N,Z,M,U,D]);s.default.useEffect((function(){var e=H&&F&&u.isLocalURL(M),t="undefined"!==typeof j?j:z&&z.locale,n=p[M+"%"+N+(t?"%"+t:"")];e&&!n&&m(z,M,N,{locale:t})}),[N,M,H,j,F,z]);var K={ref:q,onClick:function(e){k||"function"!==typeof w||w(e),k&&P.props&&"function"===typeof P.props.onClick&&P.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,a,l,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:a,scroll:c}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};l?s.default.startTransition(d):d()}}(e,z,M,N,b,x,S,j,Boolean(E),F)},onMouseEnter:function(e){k||"function"!==typeof C||C(e),k&&P.props&&"function"===typeof P.props.onMouseEnter&&P.props.onMouseEnter(e),!F&&E||u.isLocalURL(M)&&m(z,M,N,{priority:!0})},onTouchStart:function(e){k||"function"!==typeof O||O(e),k&&P.props&&"function"===typeof P.props.onTouchStart&&P.props.onTouchStart(e),!F&&E||u.isLocalURL(M)&&m(z,M,N,{priority:!0})}};if(!k||g||"a"===P.type&&!("href"in P.props)){var G="undefined"!==typeof j?j:z&&z.locale,X=z&&z.isLocaleDomain&&d.getDomainLocale(N,G,z.locales,z.domainLocales);K.href=X||h.addBasePath(c.addLocale(N,G,z&&z.defaultLocale))}return k?s.default.cloneElement(P,K):s.default.createElement("a",Object.assign({},T,K),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,a=e.disabled||!s,l=r(o.useState(!1),2),f=l[0],d=l[1],h=r(o.useState(null),2),p=h[0],m=h[1];o.useEffect((function(){if(s){if(a||f)return;if(p&&p.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=u.get(r)))return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:i,elements:o},c.push(n),u.set(n,t),t}(n),o=r.id,i=r.observer,s=r.elements;return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),u.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(p,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!f){var r=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(r)}}}),[p,a,n,t,f]);var v=o.useCallback((function(){d(!1)}),[]);return[m,f,v]};var o=n(7294),i=n(9311),s="function"===typeof IntersectionObserver,u=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var i=r.default.createContext(null);t.LayoutRouterContext=i;var s=r.default.createContext(null);t.GlobalLayoutRouterContext=s;var u=r.default.createContext(null);t.TemplateContext=u},1045:function(e,t,n){var r=n(3454),o=n(7294);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=i(o);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c="undefined"!==typeof r&&r.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){var e,t,n,r=function(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,o=t.optimizeForSpeed,i=void 0===o?c:o;f(a(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",f("boolean"===typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var s=document.querySelector('meta[property="csp-nonce"]');this._nonce=s?s.getAttribute("content"):null},o=r.prototype;return o.setOptimizeForSpeed=function(e){f("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),f(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},o.isOptimizeForSpeed=function(){return this._optimizeForSpeed},o.inject=function(){var e=this;if(f(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(c||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},o.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},o.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},o.insertRule=function(e,t){if(f(a(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(o){return c||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},o.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){c||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];f(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},o.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];f(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},o.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]},o.cssRules=function(){var e=this;return this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[])},o.makeStyleTag=function(e,t,n){t&&f(a(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},e=r,(t=[{key:"length",get:function(){return this._rulesCount}}])&&u(e.prototype,t),n&&u(e,n),r}();function f(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},h={};function p(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return h[r]||(h[r]="jsx-"+d(e+"-"+n)),h[r]}function m(e,t){var n=e+t;return h[n]||(h[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[n]}var v=function(){var e=function(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,i=void 0!==o&&o;this._sheet=r||new l({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),r&&"boolean"===typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var n=e[0],r=e[1];return s.default.createElement("style",{id:"__"+n,key:"__"+n,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var o=p(r,n);return{styleId:o,rules:Array.isArray(t)?t.map((function(e){return m(o,e)})):[m(o,t)]}}return{styleId:p(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();var y=o.createContext(null);function _(){return new v}function g(){return o.useContext(y)}y.displayName="StyleSheetContext";var b=s.default.useInsertionEffect||s.default.useLayoutEffect,x=_();function S(e){var t=x||g();return t?(b((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}S.dynamic=function(e){return e.map((function(e){return p(e[0],e[1])})).join(" ")},t.style=S},357:function(e,t,n){"use strict";e.exports=n(1045).style},701:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(1799),o=n(9396),i=n(5893),s=n(357),u=n.n(s),c=n(9008),a=n.n(c),l=n(4373);function f(e){return(0,i.jsx)("a",{href:e.href,target:"_blank",mr:1,style:{color:"var(--mint)",borderRadius:"50%",display:"inline-flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px"},children:(0,i.jsx)("ion-icon",{name:e.name})})}n(2747);function d(e){var t,n=e.Component,s=e.pageProps;return t=s.markdoc?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("nav",{className:"jsx-34199c8b5c2f6710",children:[(0,i.jsxs)("div",{className:"jsx-34199c8b5c2f6710",children:[(0,i.jsx)(f,{href:"https://twitter.com/fixitup2",name:"logo-twitter"}),(0,i.jsx)(f,{href:"https://github.com/mfix22",name:"logo-github"})]}),(0,i.jsx)(l.r,{className:"item",href:"/observations",children:"observations"})]}),(0,i.jsxs)("main",{className:"jsx-34199c8b5c2f6710",children:[(0,i.jsx)("h1",{className:"jsx-34199c8b5c2f6710",children:s.markdoc.frontmatter.title}),(0,i.jsx)(n,(0,o.Z)((0,r.Z)({},s),{className:"jsx-34199c8b5c2f6710 "+(s&&null!=s.className&&s.className||"")}))]}),(0,i.jsx)(u(),{id:"34199c8b5c2f6710",children:"nav.jsx-34199c8b5c2f6710{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end}nav.jsx-34199c8b5c2f6710 .item{margin-right:10px;margin-bottom:8px;font-size:10px}"})]}):(0,i.jsx)(n,(0,r.Z)({},s)),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"Mike Fix"}),(0,i.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Reenie+Beanie|Bitter",rel:"stylesheet"})]}),(0,i.jsx)("script",{src:"https://unpkg.com/ionicons@4.4.2/dist/ionicons.js"}),t]})}},2747:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,c=[],a=!1,l=-1;function f(){a&&u&&(a=!1,u.length?c=u.concat(c):l=-1,c.length&&d())}function d(){if(!a){var e=s(f);a=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||a||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},s=!0;try{t[e](i,i.exports,r),s=!1}finally{s&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.d(t,{Z:function(){return o}})},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);