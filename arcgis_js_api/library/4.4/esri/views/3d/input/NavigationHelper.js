// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../lib/glMatrix ../support/earthUtils ../webgl-engine/lib/Util ../support/mathUtils".split(" "),function(m,n,a,p,q,r){Object.defineProperty(n,"__esModule",{value:!0});m=function(){function f(b){this.picker=b;this.earthUtils=p;this._axisTmp1=a.vec3d.create();this._axisTmp2=a.vec3d.create();this._axisTmp3=a.vec3d.create();this._tmpTransform2=a.mat4d.create();this.spherical=new t(this);this.planar=new u(this)}f.prototype.normalizeRotationDelta=function(a){for(;a>Math.PI;)a-=2*
Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;return a};f.prototype.rotationFromPointsAroundAxis=function(b,d,c){var e=this._axisTmp1,g=this._axisTmp2,h=this._axisTmp3;a.vec3d.set(b,g);a.vec3d.set(d,h);b=a.vec3d.dot(g,c);d=a.vec3d.dot(h,c);a.vec3d.scale(c,b,e);a.vec3d.subtract(g,e);a.vec3d.normalize(g);a.vec3d.scale(c,d,e);a.vec3d.subtract(h,e);a.vec3d.normalize(h);b=a.vec3d.dot(g,h);a.vec3d.cross(c,g,e);c=a.vec3d.dot(h,e);return Math.atan2(c,b)};f.prototype.applyRotation=function(b,d,c,e){var g=this._tmpTransform2;
a.mat4d.identity(g);a.mat4d.rotate(g,e,c);a.vec3d.subtract(b.eye,d);a.mat4d.multiplyVec3(g,b.eye,b.eye);a.vec3d.add(b.eye,d);a.vec3d.subtract(b.center,d);a.mat4d.multiplyVec3(g,b.center,b.center);a.vec3d.add(b.center,d);a.mat4d.multiplyVec3(g,b.up,b.up);b.markViewDirty()};return f}();n.NavigationHelper=m;var u=function(){function f(b){this._helper=b;this._tmpForward=a.vec3d.create();this._tmpP0=a.vec3d.create();this._tmpP1=a.vec3d.create()}f.prototype.applyZoom=function(b,d,c,e,g){b=this._tmpForward;
g=1-g;a.vec3d.subtract(e,c.eye,b);var h=a.vec3d.length(b),f=h*(1-g);0<=g&&4>f&&(f=4);f=d.navigation.limitAltitude(f,e,b,h);1E-6>Math.abs(h-f)||(g=-(f-h)/h,a.vec3d.scale(b,g),a.vec3d.add(c.eye,b),a.vec3d.lerp(c.center,e,g),d.navigation.fixTargetUpVector(),c.markViewDirty())};f.prototype.intersectPlaneFromScreenPoint=function(b,d,c,e){var g=this._tmpP0,f=this._tmpP1;this._helper.picker.createPickRay(c,null,d.viewMatrix,g,f);a.vec3d.subtract(f,g);d=a.vec3d.dot(b.normal,f);if(0===d)return!1;b=a.vec3d.dot(b.normal,
g)-b.distance;a.vec3d.add(g,a.vec3d.scale(f,-b/d,e),e);return!0};f.prototype.computePointCenter=function(b,d){a.vec3d.set3(0,0,0,d);for(var c=0;c<b.length;c++)a.vec3d.add(d,b[c]);a.vec3d.scale(d,1/b.length)};return f}(),t=function(){function f(b){this._helper=b;this._tmpForward=a.vec3d.create();this._tmpP0=a.vec3d.create();this._tmpP1=a.vec3d.create();this._tmpAxis=a.vec3d.create();this._tmpTransform=a.mat4d.create()}f.prototype.applyZoom=function(b,d,c,e){var g=this._tmpForward;a.vec3d.subtract(c.center,
c.eye,g);b/=a.vec3d.length(c.center);var f=1-b,k=a.vec3d.length(g),l;l=d.navigation.limitAltitude(k*e,c.center,g,k);e=l/k;1E-6>Math.abs(k-l)||(a.vec3d.scale(c.center,b+f*e),a.vec3d.scale(g,e),a.vec3d.subtract(c.center,g,c.eye),c.markViewDirty(),d.navigation.applyConstraints(c))};f.prototype.makeRenderCoordSpherePoint=function(b,d,c,e){this._helper.picker.createPickRay(c,null,d.viewMatrix,this._tmpP0,this._tmpP1);a.vec3d.subtract(this._tmpP1,d.eye);this.intersect(b,d.eye,this._tmpP1,e)||this.closestPointOnSilhouette(b,
d.eye,this._tmpP0,e)};f.prototype.intersect=function(a,d,c,e){return q.raySphereClosestPositive(d,c,a,e)};f.prototype.closestPointOnSilhouette=function(b,d,c,e){var g=this._tmpAxis,f=this._tmpTransform;a.vec3d.cross(d,c,g);a.vec3d.cross(g,d,e);a.vec3d.scale(e,1/a.vec3d.length(e)*b);b=-r.asin(b/a.vec3d.length(d));a.mat4d.identity(f);a.mat4d.rotate(f,b,g);a.mat4d.multiplyVec3(f,e)};f.prototype.rotationFromPoints=function(b,d,c,e){a.vec3d.cross(d,c,e);return-Math.acos(1-a.vec3d.dist2(d,c)/(2*b*b))};
f.prototype.computePointCenter=function(b,d,c){a.vec3d.set3(0,0,0,c);for(var e=0;e<b.length;e++)a.vec3d.add(c,b[e]);a.vec3d.normalize(c);a.vec3d.scale(c,d)};return f}()});