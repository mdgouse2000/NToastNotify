!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},writable:!0,configurable:!0})},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,s){function i(e){try{u(o.next(e))}catch(e){s(e)}}function a(e){try{u(o.throw(e))}catch(e){s(e)}}function u(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,a)}u((o=o.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){var n,o,r,s,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=o[2&s[0]?"return":s[0]?"throw":"next"])&&!(r=r.call(o,s[1])).done)return r;switch(o=0,r&&(s=[0,r.value]),s[0]){case 0:case 1:r=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,o=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(6===s[0]&&i.label<r[1]){i.label=r[1],r=s;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(s);break}r[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],o=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),n(0);var s=function(){function e(){this.options=null,this.fetchHeaderValue="Fetch"}return e.prototype.init=function(t){this.options=Object.assign({},e.defaults,t),this.options.disableAjaxToasts||(this.interceptXmlRequest(),this.interceptNativeFetch()),this.handleEvents()},e.prototype.ensureLibExists=function(){return!!this.libPresentAlready()||this.loadLibAsync()},e.prototype.libPresentAlready=function(){return void 0!==window[this.options.libraryDetails.varName]},e.prototype.loadLibAsync=function(){return Promise.all([this.loadStyleAsync(),this.loadScriptAsync()])},e.prototype.loadScriptAsync=function(){var e=this;return new Promise(function(t,n){if(e.options.libraryDetails.scriptSrc){var o=document.createElement("script");o.setAttribute("src",e.options.libraryDetails.scriptSrc),o.onload=function(){t()},o.onerror=function(e){n(e.message)},document.head.appendChild(o)}else t()})},e.prototype.loadStyleAsync=function(){var e=this;return new Promise(function(t,n){if(e.options.libraryDetails.scriptSrc){var o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.type="text/css",o.href=e.options.libraryDetails.styleHref,o.onload=function(){t()},o.onerror=function(e){n(e.message)},document.head.appendChild(o)}else t()})},e.prototype.handleEvents=function(){document&&document.addEventListener(this.options.firstLoadEvent,this.domContentLoadedHandler.bind(this))},e.prototype.interceptNativeFetch=function(){var e=this,t=window.fetch;t&&(window.fetch=function(){var n=arguments[0];e.prepareRequestInfo(n);var o=arguments.length>1?arguments[1]:{};return e.prepareReuqestInit(o),t.apply(this,[n,o])})},e.prototype.prepareRequestInfo=function(e){e instanceof Request&&e.headers.append(this.options.requestHeaderKey,this.fetchHeaderValue)},e.prototype.prepareReuqestInit=function(e){if(e)if(e.headers)e.headers instanceof Headers?e.headers.set(this.options.requestHeaderKey,this.fetchHeaderValue):e.headers instanceof Object?e.headers[this.options.requestHeaderKey]=this.fetchHeaderValue:console.warn("NToastNotify header not set. Toast notification will not work");else{var t=new Headers;t.set(this.options.requestHeaderKey,this.fetchHeaderValue),e.headers=t}},e.prototype.getMessagesFromFetchResponse=function(e){var t=e.headers.get(this.options.responseHeaderKey);return t?JSON.parse(t):null},e.prototype.interceptXmlRequest=function(){var e=this,t=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(){this.addEventListener("load",e.xmlRequestOnLoadHandler.bind(e,this)),t.apply(this,arguments)}},e.prototype.xmlRequestOnLoadHandler=function(e){var t=this.getMessagesFromXmlResponse(e);this.showMessages(t)},e.prototype.getMessagesFromXmlResponse=function(e){if(e.getAllResponseHeaders().indexOf(this.options.responseHeaderKey)>-1){var t=e.getResponseHeader(this.options.responseHeaderKey);if(t)return JSON.parse(t)}return null},e.prototype.domContentLoadedHandler=function(){return o(this,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return[4,this.ensureLibExists()];case 1:return e.sent(),this.overrideLibDefaults(),this.showMessages(this.options.messages),[2]}})})},e.prototype.showMessages=function(e){var t=this;e&&e.length&&e.forEach(function(e){t.showMessage(e)})},e}();t.NToastNotify=s},,function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.showMessage=function(e){var t=[],n=e.options;t.push(e.message),t.push(n.title),e.options&&t.push(e.options),toastr&&toastr[n.type.toLowerCase()].apply(toastr,t)},t.prototype.overrideLibDefaults=function(){this.options.libraryDetails.options&&toastr&&(toastr.options=this.options.libraryDetails.options)},t}(n(1).NToastNotify);t.nToastNotify=new s}]));