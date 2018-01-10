// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","./previewSymbol2D","./previewSymbol3D"],function(e,a,c,d){Object.defineProperty(a,"__esModule",{value:!0});a.renderPreviewHTML=function(b,a){return-1===b.type.indexOf("3d")?c.previewSymbol2D(b,a):d.previewSymbol3D(b,a)}});