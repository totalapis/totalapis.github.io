/*! ArcGIS API for JavaScript 4.4 | Copyright (c) 2017 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
var URLSearchParams=URLSearchParams||function(){"use strict";function t(t){var r,o,a,s,c,u,h=Object.create(null);if(this[f]=h,t)if("string"==typeof t)for("?"===t.charAt(0)&&(t=t.slice(1)),s=t.split("&"),c=0,u=s.length;c<u;c++)a=s[c],r=a.indexOf("="),-1<r?e(h,n(a.slice(0,r)),n(a.slice(r+1))):a.length&&e(h,n(a),"");else if(i(t))for(c=0,u=t.length;c<u;c++)a=t[c],e(h,a[0],a[1]);else for(o in t)e(h,o,t[o])}function e(t,e,n){e in t?t[e].push(""+n):t[e]=i(n)?n:[""+n]}function n(t){return decodeURIComponent(t.replace(s," "))}function r(t){return encodeURIComponent(t).replace(a,u)}var i=Array.isArray,o=t.prototype,a=/[!'\(\)~]|%20|%00/g,s=/\+/g,c={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},u=function(t){return c[t]},h=function(){try{return!!Symbol.iterator}catch(t){return!1}}(),f="__URLSearchParams__:"+Math.random();o.append=function(t,n){e(this[f],t,n)},o.delete=function(t){delete this[f][t]},o.get=function(t){var e=this[f];return t in e?e[t][0]:null},o.getAll=function(t){var e=this[f];return t in e?e[t].slice(0):[]},o.has=function(t){return t in this[f]},o.set=function(t,e){this[f][t]=[""+e]},o.forEach=function(t,e){var n=this[f];Object.getOwnPropertyNames(n).forEach(function(r){n[r].forEach(function(n){t.call(e,n,r,this)},this)},this)},o.keys=function(){var t=[];this.forEach(function(e,n){t.push(n)});var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return h&&(e[Symbol.iterator]=function(){return e}),e},o.values=function(){var t=[];this.forEach(function(e){t.push(e)});var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return h&&(e[Symbol.iterator]=function(){return e}),e},o.entries=function(){var t=[];this.forEach(function(e,n){t.push([n,e])});var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return h&&(e[Symbol.iterator]=function(){return e}),e},h&&(o[Symbol.iterator]=o.entries),o.toJSON=function(){return{}},o.toString=function(){var t,e,n,i,o=this[f],a=[];for(e in o)for(n=r(e),t=0,i=o[e];t<i.length;t++)a.push(n+"="+r(i[t]));return a.join("&")};var l=Object.defineProperty,p=Object.getOwnPropertyDescriptor,v=function(t){function e(e,n){o.append.call(this,e,n),e=this.toString(),t.set.call(this._usp,e?"?"+e:"")}function n(e){o.delete.call(this,e),e=this.toString(),t.set.call(this._usp,e?"?"+e:"")}function r(e,n){o.set.call(this,e,n),e=this.toString(),t.set.call(this._usp,e?"?"+e:"")}return function(t,i){return t.append=e,t.delete=n,t.set=r,l(t,"_usp",{configurable:!0,writable:!0,value:i})}},d=function(t){return function(e,n){return l(e,"_searchParams",{configurable:!0,writable:!0,value:t(n,e)}),n}},m=function(e){var n=e.append;e.append=o.append,t.call(e,e._usp.search.slice(1)),e.append=n},g=function(t,e){if(!(t instanceof e))throw new TypeError("'searchParams' accessed on an object that does not implement interface "+e.name)},y=function(e){var n,r=e.prototype,i=p(r,"searchParams"),o=p(r,"href"),a=p(r,"search");!i&&a&&a.set&&(n=d(v(a)),Object.defineProperties(r,{href:{get:function(){return o.get.call(this)},set:function(t){var e=this._searchParams;o.set.call(this,t),e&&m(e)}},search:{get:function(){return a.get.call(this)},set:function(t){var e=this._searchParams;a.set.call(this,t),e&&m(e)}},searchParams:{get:function(){return g(this,e),this._searchParams||n(this,new t(this.search.slice(1)))},set:function(t){g(this,e),n(this,t)}}}))};return y(HTMLAnchorElement),/^function|object$/.test(typeof URL)&&URL.prototype&&y(URL),t}();"sort"in URLSearchParams.prototype||(URLSearchParams.prototype.sort=function(){for(var t,e,n,r=this.entries(),i=r.next(),o=i.done,a=[],s=Object.create(null);!o;)n=i.value,e=n[0],a.push(e),e in s||(s[e]=[]),s[e].push(n[1]),i=r.next(),o=i.done;for(a.sort(),t=0;t<a.length;t++)this.delete(a[t]);for(t=0;t<a.length;t++)e=a[t],this.append(e,s[e].shift())});