// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/lang"],function(d,e,c){return function(){function b(a){a?this.set(a):(this.mode=null,this.offset=0,this.featureExpression=null,this.hasOffsetAdjustment=!1)}b.prototype.set=function(a){this.mode=a.mode;this.offset=a.offset;this.featureExpression=a.featureExpression?c.clone(a.featureExpression):null;this.hasOffsetAdjustment=a.hasOffsetAdjustment};return b}()});