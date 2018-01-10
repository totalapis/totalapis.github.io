// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ./IdGen ./Util ./BoundingInfo ./ComponentUtils".split(" "),function(f,x,u,t,v,w){f=function(){function a(e,c,b){this.singleUse=!1;this.componentAABB=null;this.id=a.__idGen.gen(c);this.data=e;this.boundingInfos=b||[];t.assert(1<=e.faces.length)}a.prototype.getId=function(){return this.id};a.prototype.getData=function(){return this.data};Object.defineProperty(a.prototype,"numGroups",{get:function(){return this.data.faces.length},enumerable:!0,configurable:!0});a.prototype.getNumGroups=
function(){return this.numGroups};a.prototype.getComponentCount=function(){return w.componentCount(this.data.componentOffsets)};a.prototype.getComponentAABB=function(e,c){null==this.componentAABB&&(this.componentAABB=this._computeComponentAABB());for(var b=0;6>b;b++)c[b]=this.componentAABB[6*e+b];return c};a.prototype._computeComponentAABB=function(){for(var e=this.getComponentCount(),c=new Float32Array(6*e),b=0;b<e;b++)this._calculateAABB(0,b,c,6*b);return c};a.prototype._calculateAABB=function(e,
c,b,g){void 0===g&&(g=0);var d=this.data.faces[e];e=d.indices[d.positionKey];var d=this.data.vertexAttributes[d.positionKey].data,a=this.data.componentOffsets,k=a.length?a[c+1]:e.length,l=Infinity,m=Infinity,n=Infinity,p=-Infinity,q=-Infinity,r=-Infinity;for(c=a.length?a[c]:0;c<k;c++)var h=3*e[c],a=d[h],f=d[h+1],h=d[h+2],l=Math.min(l,a),m=Math.min(m,f),n=Math.min(n,h),p=Math.max(p,a),q=Math.max(q,f),r=Math.max(r,h);b?(b[g]=l,b[g+1]=m,b[g+2]=n,b[g+3]=p,b[g+4]=q,b[g+5]=r):b=[l,m,n,p,q,r];return b};
a.prototype.calculateBoundingInfo=function(e,a){e=this.data.faces[e];var b="triangle"===e.type?3:1,c=e.indices[e.positionKey];if(0===c.length)for(var c=new Uint32Array(b),d=0;d<b;++d)c[d]=d;d=c.length;t.assert(0===d%b);for(var f=d/b,k=new Uint32Array(f),d=0;d<f;++d)k[d]=d;return new v(k,b,c,this.data.vertexAttributes[e.positionKey],a)};a.prototype.getBoundingInfo=function(a){var c=this.boundingInfos[a];null==c&&(c=this.calculateBoundingInfo(a),this.boundingInfos[a]=c);return c};a.prototype.invalidateBoundingInfo=
function(){this.boundingInfos=[]};return a}();f.__idGen=new u;return f});