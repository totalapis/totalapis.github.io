// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,b){Object.defineProperty(b,"__esModule",{value:!0});b.process=function(a){if(a.json&&a.json.origins){var c=a.json.origins,b={portalItem:["portal-item"],webScene:["web-scene"],webMap:["web-map"],webDocument:["web-scene","web-map"],"web-document":["web-scene","web-map"]};a=function(a){if(c[a]){var d=c[a];b[a].forEach(function(a){c[a]=d});delete c[a]}};for(var d in b)a(d)}}});