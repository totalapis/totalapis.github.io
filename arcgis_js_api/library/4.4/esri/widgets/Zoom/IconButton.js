// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../support/widget ../Widget".split(" "),function(b,h,f,a,c,d,g){b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.enabled=!0;a.iconClass="";a.title="";return a}f(a,b);a.prototype.render=function(){var a=this.enabled?0:-1,b=(c={},c["esri-disabled"]=!this.enabled,c["esri-interactive"]=this.enabled,c),c=(e={},e[this.iconClass]=!!this.iconClass,
e);return d.tsx("div",{bind:this,class:"esri-widget-button esri-widget",classes:b,onclick:this._triggerAction,onkeydown:this._triggerAction,role:"button",tabIndex:a,title:this.title},d.tsx("span",{"aria-hidden":"true",role:"presentation",class:"esri-icon",classes:c}),d.tsx("span",{class:"esri-icon-font-fallback-text"},this.title));var c,e};a.prototype._triggerAction=function(){this.action.call(this)};return a}(c.declared(g));a([c.property()],b.prototype,"action",void 0);a([c.property(),d.renderable()],
b.prototype,"enabled",void 0);a([c.property(),d.renderable()],b.prototype,"iconClass",void 0);a([c.property(),d.renderable()],b.prototype,"title",void 0);a([d.accessibleHandler()],b.prototype,"_triggerAction",null);return b=a([c.subclass("esri.widgets.IconButton")],b)});