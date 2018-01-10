// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(a,c,e,f){Object.defineProperty(c,"__esModule",{value:!0});a=function(a){function b(b,c){var d=a.call(this,"esri.views.3d.input.handlers.PointerDownCancelAnimation",!0)||this;d.view=b;d.registerIncoming("pointer-down",c,function(a){return d._handlePointerDown(a)});return d}e(b,a);b.prototype._handlePointerDown=function(a){this.view.navigation.stop()};return b}(f.InputHandler);c.PointerDownCancelAnimation=
a});