// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/kebabDictionary ./support/Symbol3DMaterial ./support/ElevationInfo ../core/accessorSupport/decorators".split(" "),function(d,k,e,c,b,f,g,h,a){d=f({Icon:"icon",Object:"object",Line:"line",Path:"path",Fill:"fill",Extrude:"extrude",Text:"text"});b=function(b){function a(a){a=b.call(this)||this;a.enabled=!0;a.material=null;a.type=null;return a}e(a,b);a.prototype.writeEnabled=function(a,
b){a||(b.enabled=a)};return a}(a.declared(b));c([a.property()],b.prototype,"enabled",void 0);c([a.writer("enabled")],b.prototype,"writeEnabled",null);c([a.property({type:h,json:{read:!1,write:!1}})],b.prototype,"elevationInfo",void 0);c([a.property({type:g.default,json:{write:!0}})],b.prototype,"material",void 0);c([a.property({type:String,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:d.write}}})],b.prototype,"type",void 0);b=c([a.subclass("esri.symbols.Symbol3DLayer")],b);(b||(b={})).typeJSONDictionary=
d;return b});