// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","../ViewState","./Container"],function(m,n,h,k,l){return function(f){function c(){var a=null!==f&&f.apply(this,arguments)||this;a._childrenRenderParameters={budget:null,context:null,devicePixelRatio:1,state:new k,stationary:!0};a.hidpi=!1;return a}h(c,f);c.prototype.createElement=function(){var a=document.createElement("canvas");a.setAttribute("class","esri-display-object");return a};c.prototype.setElement=function(a){this.element=
a};c.prototype.doRender=function(a){var b=this.element,d=b.style;if(this.visible){var e=a.state,g=a.devicePixelRatio,c=e.width,e=e.height;b.width=c*(this.hidpi?g:1);b.height=e*(this.hidpi?g:1);d.display="block";d.opacity=""+this.opacity;d.width=c+"px";d.height=e+"px";f.prototype.doRender.call(this,a)}else d.display="none"};c.prototype.prepareChildrenRenderParameters=function(a){var b=this._childrenRenderParameters;b.budget=a.budget;b.context=this.element.getContext("2d");b.devicePixelRatio=a.devicePixelRatio;
b.state.copy(a.state);b.state.pixelRatio=this.hidpi?a.devicePixelRatio:1;b.stationary=a.stationary;return b};c.prototype.beforeRenderChildren=function(a,b){a=b.context;var d=b.state;a.save();if(d.spatialReference.isWrappable){var e=d.width,c=d.height;b=d.rotation*Math.PI/180;var f=Math.round(e*Math.abs(Math.cos(b))+c*Math.abs(Math.sin(b))),d=d.worldScreenWidth;d<f&&(e*=.5,c*=.5,b&&(a.translate(e,c),a.rotate(b),a.translate(-e,-c)),a.beginPath(),a.rect(e-.5*d,c-.5*f,d,f),a.closePath(),b&&(a.translate(e,
c),a.rotate(-b),a.translate(-e,-c)),a.clip("evenodd"))}};c.prototype.afterRenderChildren=function(a,b){b.context.restore()};c.prototype.renderChild=function(a,b){b.context.save();a.processRender(b);b.context.restore()};return c}(l)});