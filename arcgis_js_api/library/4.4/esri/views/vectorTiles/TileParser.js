// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports dojo/promise/all ../../core/promiseUtils ../../core/executeAsync ../../core/pbf ./SourceLayerData ./Feature ./BackgroundBucket ./FillBucket ./LineBucket ./SymbolBucket ./TileClipper".split(" "),function(N,O,G,C,D,v,H,I,J,K,L,M,l){return function(){function g(b,a,e){this._pbfTile=new v(new Uint8Array(b),new DataView(b));this._tile=a;this._connection=e;this._layers=a.getLayers();e=a.tileKey.split("/").map(parseFloat);var c=e[0];b=e[1];e=e[2];this._level=c;a.refKey&&(a=a.refKey.split("/").map(parseFloat)[0],
a=c-a,0<a&&(c=(1<<a)-1,this._tileClipper=new l.TileClipper(a,b&c,e&c)));this._tileClipper||(this._tileClipper=new l.SimpleBuilder)}g.prototype.parse=function(){for(var b=this,a=this._parseTileData(this._pbfTile),e=this._layers,c=e.length,g=this._level,d,h=[],m={},l=new Set,c=c-1;0<=c;c--)if(d=e[c],!(d.minzoom&&g<d.minzoom||d.maxzoom&&g>=d.maxzoom||d.layout&&"none"===d.layout.visibility))if(0===d.type)d=this._createBucket(d),h.push(d);else{var r=d.sourceLayer,n=a[r];n&&(l.add(r),d=this._createBucket(d))&&
(d.layerIndex=c,d.layerExtent=n.extent,(n=m[r])||(n=m[r]=[]),n.push(d))}var v=10*(this._level+1),p=[],w=[],t=[],E=[],x=this._tileClipper,y=new Set,z={},A=[];l.forEach(function(b){return A.push(b)});var u=0,q=0,B=A.length;return D(function(){if(6===b._tile.status)return!0;switch(u){case 0:if(q<B){var d=A[q++],e=a[d],k=m[d];if(k&&0!==k.length)for(d=e.getData();d.next(2);){var c=new I(d.getMessage(),e),f=c.values;if(f&&(f=f._minzoom)&&f>=v)continue;for(var g=0,F=k;g<F.length;g++)f=F[g],f.pushFeature(c)}}else{e=
b._tile;for(d in m)for(k=m[d],c=0;c<k.length;c++)f=k[c],f.hasFeatures()&&(3===f.layer.type?(p.push(f),e.addBucket(f)):f.layer.refLayerId?t.push(f):(w.push(f),E[f.layer.id]=f));u=1;q=0;B=p.length}break;case 1:q<B?p[q++].getResources(x,y,z):u=2}return 2===u},50).then(function(){if(6===b._tile.status)return[];var a=[],d=b._tile.getWorkerTileHandler(),c;0<y.size&&(c=d.fetchSprites(y,b._connection),a.push(c));for(var e in z)c=z[e],0<c.size&&(c=d.fetchGlyphs(b._tile.tileKey,e,c,b._connection),a.push(c));
return G(a).then(function(a){if(6===b._tile.status)return[];var d=0,c=0,e=w.length;return D(function(){if(6===b._tile.status)return!0;switch(d){case 0:if(c<e){var a=w[c++];a.processFeatures(x,b._tile);h.push(a)}else d=1,c=0,e=t.length;break;case 1:for(var f=0;f<t.length;f++){var a=t[f],g=E[a.layer.refLayerId];g&&(g.assignBufferInfo(a),h.push(a))}d=2;c=0;e=p.length;break;case 2:c<e?(a=p[c++],a.processFeatures(x,b._tile),h.push(a)):d=3}return 3===d},50).then(function(){h.sort(function(a,b){return a.layerIndex-
b.layerIndex});return h})}).otherwise(function(a){return C.reject(Error(a))})}).otherwise(function(a){return C.reject(Error(a))})};g.prototype._parseTileData=function(b){for(var a={};b.next();)switch(b.tag()){case 3:var e=new H(b.getMessage());a[e.name]=e;break;default:b.skip()}return a};g.prototype._createBucket=function(b){switch(b.type){case 0:return this._createBackgroundBucket(b);case 1:return this._createFillBucket(b);case 2:return this._createLineBucket(b);case 3:return this._createSymbolBucket(b)}};
g.prototype._createBackgroundBucket=function(b){return new J(b,this._level)};g.prototype._createFillBucket=function(b){var a=this._tile;return new K(b,this._level,a.polygonVertexBuffer,a.polygonIndexBuffer,a.polygonOutlineVertexBuffer,a.polygonOutlineIndexBuffer)};g.prototype._createLineBucket=function(b){var a=this._tile;return new L(b,this._level,a.lineVertexBuffer,a.lineIndexBuffer)};g.prototype._createSymbolBucket=function(b){var a=this._tile;return new M(b,this._level,a.markerVertexBuffer,a.markerIndexBuffer,
a.textVertexBuffer,a.textIndexBuffer,a.placementEngine,a.getWorkerTileHandler())};return g}()});