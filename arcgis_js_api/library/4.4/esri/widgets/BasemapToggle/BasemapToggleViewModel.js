// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../support/basemapUtils ../../core/Accessor ../../core/Evented ../../support/basemapDefinitions ../../support/basemapUtils".split(" "),function(b,n,g,e,d,h,k,l,m,f){b=function(b){function c(a){a=b.call(this,a)||this;a._basemapCache={};a.nextBasemap=f.ensureType("hybrid",a._basemapCache);a.view=null;a.toggle=a.toggle.bind(a);return a}g(c,b);c.prototype.destroy=
function(){this.view=null};Object.defineProperty(c.prototype,"activeBasemap",{get:function(){return f.ensureType(this.get("view.map.basemap")||"topo",this._basemapCache)},enumerable:!0,configurable:!0});c.prototype.castNextBasemap=function(a){return f.ensureType(a,this._basemapCache)};Object.defineProperty(c.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0});c.prototype.toggle=function(){if("disabled"!==this.state){var a=this.activeBasemap,
b=this.nextBasemap;this.view.map.basemap=b;this.nextBasemap=a;this.emit("toggle",{previous:a,current:b})}};c.getThumbnailUrl=function(a){if(!a)return null;var b=a.thumbnailUrl;return b?b:(b=h.getWellKnownBasemapId(a))?m[b].thumbnailUrl:(a=a.baseLayers.find(function(a){return!!a.get("portalItem.thumbnailUrl")}))?a.get("portalItem.thumbnailUrl"):null};return c}(d.declared(k,l));e([d.property({dependsOn:["view.map.basemap"],readOnly:!0})],b.prototype,"activeBasemap",null);e([d.property()],b.prototype,
"nextBasemap",void 0);e([d.cast("nextBasemap")],b.prototype,"castNextBasemap",null);e([d.property({dependsOn:["view.ready"],readOnly:!0})],b.prototype,"state",null);e([d.property()],b.prototype,"view",void 0);return b=e([d.subclass("esri.widgets.BasemapToggle.BasemapToggleViewModel")],b)});