// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(f,h,k,l){Object.defineProperty(h,"__esModule",{value:!0});f=function(f){function g(a,b,c){var d=f.call(this,"esri.views.2d.input.handlers.KeyRotate",!0)||this;d.view=a;d.keys=b;d._keyToDirection=(e={},e[b.clockwiseOption1]="clockwise",e[b.clockwiseOption2]="clockwise",e[b.counterClockwiseOption1]="counterClockwise",e[b.counterClockwiseOption2]="counterClockwise",e[b.resetOption1]="reset",
e[b.resetOption2]="reset",e);d.registerIncoming("key-down",c,function(a){return d._handleKeyDown(a)});d.registerIncoming("key-up",c,function(a){return d._handleKeyUp(a)});return d;var e}k(g,f);g.prototype._handleKeyDown=function(a){a.data.repeat||this._handleKey(a,!0)};g.prototype._handleKeyUp=function(a){this._handleKey(a,!1)};g.prototype._handleKey=function(a,b){var c=a.modifiers;0<c.size&&!c.has("Shift")||!this.view.constraints.rotationEnabled||!(c=this._keyToDirection[a.data.key])||(b?"clockwise"===
c?this.view.navigation.continousRotateClockwise():"counterClockwise"===c?this.view.navigation.continousRotateCounterclockwise():this.view.navigation.resetRotation():this.view.navigation.stop(),a.stopPropagation())};return g}(l.InputHandler);h.KeyRotate=f});