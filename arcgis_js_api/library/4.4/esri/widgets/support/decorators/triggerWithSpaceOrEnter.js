// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/Logger","./accessibleHandler"],function(d,a,b,c){Object.defineProperty(a,"__esModule",{value:!0});a.triggerWithSpaceOrEnter=function(){b.getLogger("esri.widgets.support.decorators.triggerWithSpaceOrEnter").warn("@triggerWithSpaceOrEnter is deprecated, use @accessibleHandler instead.");return c.accessibleHandler.apply(this,arguments)}});