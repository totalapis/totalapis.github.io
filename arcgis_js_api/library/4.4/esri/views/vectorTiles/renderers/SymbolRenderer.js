// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","./IconRenderer","./SDFRenderer"],function(q,r,c,d){return function(){function a(){this._iconRenderer=new c;this._sdfRenderer=new d}a.prototype.dispose=function(){this._iconRenderer&&(this._iconRenderer.dispose(),this._iconRenderer=null);this._sdfRenderer&&(this._sdfRenderer.dispose(),this._sdfRenderer=null)};a.prototype.render=function(a,b,e,f,g,h,k,c,d,l,m,p,n){b.hasData()&&(0<b.markerPerPageElementsMap.size&&!b.isSDF&&this._iconRenderer.render(a,b,e,f,g,h,k,c,l,m,n),
0<b.glyphPerPageElementsMap.size&&this._sdfRenderer.render(a,b,e,f,g,h,k,d,l,m,p,n))};return a}()});