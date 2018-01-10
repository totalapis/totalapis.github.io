// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/accessorSupport/decorators"],function(f,a,d){Object.defineProperty(a,"__esModule",{value:!0});a.vmProperty=function(a){var b=this;console.warn("@vmProperty is deprecated, use @aliasOf instead");return function(e,c){d.property.call(b,{aliasOf:"viewModel."+(a||c)}).call(b,e,c)}}});