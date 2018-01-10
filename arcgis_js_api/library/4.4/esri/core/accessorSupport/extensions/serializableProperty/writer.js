// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/lang","./type"],function(m,f,g,h){function k(a,c,d,b){g.setObject(d,e(a,b),c)}function e(a,c){return a&&"function"===typeof a.write?a.write({},c):a&&"function"===typeof a.toJSON?a.toJSON():a}function l(a,c,d,b){null===a?a=null:a&&"function"===typeof a.map?(a=a.map(function(a){return e(a,b)}),"function"===typeof a.toArray&&(a=a.toArray())):a=[e(a,b)];g.setObject(d,a,c)}Object.defineProperty(f,"__esModule",{value:!0});f.create=function(a,c,d,b){b.write&&!b.write.writer&&
!1!==b.write.enabled&&(c||h.isCollection(a)?b.write.writer=l:b.write.writer=k)}});