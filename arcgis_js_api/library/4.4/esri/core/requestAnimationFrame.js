// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","./global","dojo/sniff","./now"],function(c,d,e,a,f){c=a("ff");d=a("ie");var h=a("webkit");a=a("opera");var g=f(),b=e.requestAnimationFrame;b||(b=e[(h&&"webkit"||c&&"moz"||a&&"o"||d&&"ms")+"RequestAnimationFrame"])||(b=function(a){var b=f(),c=Math.max(0,16-(b-g)),d=e.setTimeout(function(){a(f())},c);g=b+c;return d});return b});