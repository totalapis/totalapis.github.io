// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../Graphic ../../../core/Accessor ../../../core/Collection ../../../core/Promise".split(" "),function(d,k,e,c,a,f,b,g,h){d=g.ofType(f);b=function(b){function a(a){a=b.call(this)||this;a.updating=!1;return a}e(a,b);a.prototype.normalizeCtorArgs=function(a){this._set("layer",a.layer);this._set("layerView",a.layerView);this._set("graphics",a.graphics);
return{}};return a}(a.declared(b,h));c([a.property({readOnly:!0})],b.prototype,"layer",void 0);c([a.property({readOnly:!0})],b.prototype,"layerView",void 0);c([a.property({type:d,readOnly:!0})],b.prototype,"graphics",void 0);c([a.property()],b.prototype,"updating",void 0);return b=c([a.subclass("esri.layers.graphics.controllers.MemoryController")],b)});