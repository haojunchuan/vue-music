webpackJsonp([2],{"21It":function(t,e,n){"use strict";var r=n("FtD3");t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},"5VQ+":function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},"7GwW":function(t,e,n){"use strict";var r=n("cGG2"),o=n("21It"),i=n("DQCr"),s=n("oJlt"),a=n("GHBc"),u=n("FtD3"),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("thJu");t.exports=function(t){return new Promise(function(e,f){var d=t.data,p=t.headers;r.isFormData(d)&&delete p["Content-Type"];var l=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in l||a(t.url)||(l=new window.XDomainRequest,h="onload",m=!0,l.onprogress=function(){},l.ontimeout=function(){}),t.auth){var g=t.auth.username||"",v=t.auth.password||"";p.Authorization="Basic "+c(g+":"+v)}if(l.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,l[h]=function(){if(l&&(4===l.readyState||m)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?l.response:l.responseText,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:n,config:t,request:l};o(e,f,r),l=null}},l.onerror=function(){f(u("Network Error",t,null,l)),l=null},l.ontimeout=function(){f(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var y=n("p1b6"),w=(t.withCredentials||a(t.url))&&t.xsrfCookieName?y.read(t.xsrfCookieName):void 0;w&&(p[t.xsrfHeaderName]=w)}if("setRequestHeader"in l&&r.forEach(p,function(t,e){void 0===d&&"content-type"===e.toLowerCase()?delete p[e]:l.setRequestHeader(e,t)}),t.withCredentials&&(l.withCredentials=!0),t.responseType)try{l.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){l&&(l.abort(),f(t),l=null)}),void 0===d&&(d=null),l.send(d)})}},AQXD:function(t,e,n){var r=n("Upec");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("1796a2a4",r,!0)},DQCr:function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n("cGG2");t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(r(e)+"="+r(t))}))}),i=s.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},FtD3:function(t,e,n){"use strict";var r=n("t8qj");t.exports=function(t,e,n,o,i){var s=new Error(t);return r(s,e,n,o,i)}},GHBc:function(t,e,n){"use strict";var r=n("cGG2");t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return!0}},"JP+z":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},KCLY:function(t,e,n){"use strict";(function(e){function r(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=n("cGG2"),i=n("5VQ+"),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n("7GwW"):void 0!==e&&(t=n("7GwW")),t}(),transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){a.headers[t]={}}),o.forEach(["post","put","patch"],function(t){a.headers[t]=o.merge(s)}),t.exports=a}).call(e,n("W2nU"))},NSSj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Dd8w"),o=n.n(r),i=n("woOf"),s=n.n(i),a=n("kvay"),u=n("NYxO"),c=n("m40h"),f=n("T452"),d=n("PvFA"),p=n("9cIF"),l={components:{MusicList:a.a},created:function(){this._getSongList()},data:function(){return{songs:[]}},methods:{_getSongList:function(){var t=this;this.disc.content_id?Object(c.c)(this.disc.content_id).then(function(e){e.code===f.a&&(t.songs=t._normalizeSongs(e.cdlist[0].songlist))}):this.$router.push("/recommend")},_normalizeSongs:function(t){var e=[];return t.forEach(function(t){t.songid&&t.albumid&&Object(p.b)(t.songmid).then(function(n){n.url_mid.data.midurlinfo[0].vkey;var r=n.url_mid.data.midurlinfo[0].purl;s()(t,{url:r}),e.push(Object(d.a)(t))}).catch(function(t){console.log(t)})}),e}},computed:o()({},Object(u.c)(["disc"]),{title:function(){return this.disc.title},bgImage:function(){return this.disc.cover}})},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{title:this.title,bgImage:this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]},m=n("VU/8")(l,h,!1,function(t){n("AQXD")},"data-v-28678600",null);e.default=m.exports},Re3r:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},TNV1:function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},Upec:function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,"\n.slide-enter-active[data-v-28678600],\n.slide-leave-active[data-v-28678600] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.slide-enter[data-v-28678600],\n.slide-leave-to[data-v-28678600] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}","",{version:3,sources:["/Users/yudong/Documents/myproject/vue-music/src/components/disc/disc.vue"],names:[],mappings:";AACA;;EAEE,6BAA6B;EAC7B,qBAAqB;CACtB;AACD;;EAEE,2CAA2C;UACnC,mCAAmC;CAC5C",file:"disc.vue",sourcesContent:["\n.slide-enter-active[data-v-28678600],\n.slide-leave-active[data-v-28678600] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.slide-enter[data-v-28678600],\n.slide-leave-to[data-v-28678600] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},XmWM:function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=n("KCLY"),i=n("cGG2"),s=n("fuGk"),a=n("xLtR");r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),(t=i.merge(o,this.defaults,{method:"get"},t)).method=t.method.toLowerCase();var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},cGG2:function(t,e,n){"use strict";function r(t){return"[object Array]"===f.call(t)}function o(t){return null!==t&&"object"==typeof t}function i(t){return"[object Function]"===f.call(t)}function s(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function a(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=a(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)s(arguments[n],t);return e}var u=n("JP+z"),c=n("Re3r"),f=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:function(t){return"[object ArrayBuffer]"===f.call(t)},isBuffer:c,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:o,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===f.call(t)},isFile:function(t){return"[object File]"===f.call(t)},isBlob:function(t){return"[object Blob]"===f.call(t)},isFunction:i,isStream:function(t){return o(t)&&i(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:s,merge:a,extend:function(t,e,n){return s(e,function(e,r){t[r]=n&&"function"==typeof e?u(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},cWxy:function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n("dVOP");r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},dIwP:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},dVOP:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},fuGk:function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n("cGG2");r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},m40h:function(t,e,n){"use strict";e.b=function(){var t=o()({},s.b,{plarform:"h5",uin:0,needNewCode:1});return Object(i.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,s.c)},e.a=function(){return Object(i.a)("https://u.y.qq.com/cgi-bin/musicu.fcg",{g_tk:5381,hostUin:0,format:"json",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",data:{recomPlaylist:{method:"get_hot_recommend",param:{async:1,cmd:2},module:"playlist.HotRecommendServer"}}},"")},e.c=function(t){var e=o()({},s.b,{g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp",disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return u.a.get("/get_cdinfo",{params:e}).then(function(t){return t.data})};var r=n("woOf"),o=n.n(r),i=n("Gak4"),s=n("T452"),a=n("mtWM"),u=n.n(a)},mtWM:function(t,e,n){t.exports=n("tIFN")},oJlt:function(t,e,n){"use strict";var r=n("cGG2"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,s={};return t?(r.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}}),s):s}},p1b6:function(t,e,n){"use strict";var r=n("cGG2");t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},pBtG:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},pxG4:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},qRfI:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},t8qj:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},tIFN:function(t,e,n){"use strict";function r(t){var e=new s(t),n=i(s.prototype.request,e);return o.extend(n,s.prototype,e),o.extend(n,e),n}var o=n("cGG2"),i=n("JP+z"),s=n("XmWM"),a=n("KCLY"),u=r(a);u.Axios=s,u.create=function(t){return r(o.merge(a,t))},u.Cancel=n("dVOP"),u.CancelToken=n("cWxy"),u.isCancel=n("pBtG"),u.all=function(t){return Promise.all(t)},u.spread=n("pxG4"),t.exports=u,t.exports.default=u},thJu:function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";(r.prototype=new Error).code=5,r.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,i=String(t),s="",a=0,u=o;i.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&e>>8-a%1*8)){if((n=i.charCodeAt(a+=.75))>255)throw new r;e=e<<8|n}return s}},xLtR:function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n("cGG2"),i=n("TNV1"),s=n("pBtG"),a=n("KCLY"),u=n("dIwP"),c=n("qRfI");t.exports=function(t){r(t),t.baseURL&&!u(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});return(t.adapter||a.adapter)(t).then(function(e){return r(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(r(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}}});
//# sourceMappingURL=2.f66fb1f8edae6aaa1853.js.map