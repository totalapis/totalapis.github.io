// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","./webgl-debug"],function(f,a,e){Object.defineProperty(a,"__esModule",{value:!0});var c=null,d=[];a.enabled=!1;a.begin=function(){a.enabled&&(c=[])};a.trace=function(b){a.enabled&&null!=c&&c.push(b)};a.end=function(){if(a.enabled){var b=c;c=null;b&&(d.forEach(function(a){return a(b)}),d.length=0);return b}};a.instrumentContext=function(b){return a.enabled?e.makeDebugContext(b,void 0,function(b,d){a.enabled&&c&&c.push("gl."+b+"("+e.glFunctionArgsToString(b,d)+")")}):b};
a.request=function(a){d.push(a)}});