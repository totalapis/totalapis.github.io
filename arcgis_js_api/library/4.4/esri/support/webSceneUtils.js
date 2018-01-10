// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","../core/Error"],function(c,a,b){Object.defineProperty(a,"__esModule",{value:!0});a.createCopyError=function(){return new b("webscene:failed-to-copy-embedded-resources","Copying of embedded resources is currently not supported")};a.isCopyError=function(a){return a&&"webscene:failed-to-copy-embedded-resources"===a.name}});