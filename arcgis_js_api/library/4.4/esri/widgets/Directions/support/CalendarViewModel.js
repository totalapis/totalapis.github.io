// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/Accessor ../../../moment".split(" "),function(b,g,e,c,a,f,d){b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.value=d();return a}e(a,b);a.prototype.castValue=function(a){return d(a)};return a}(a.declared(f));c([a.property()],b.prototype,"state",void 0);c([a.property()],b.prototype,"value",void 0);c([a.cast("value")],
b.prototype,"castValue",null);return b=c([a.subclass("esri.widgets.Directions.CalendarViewModel")],b)});