// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","./TileKey"],function(y,z,A,n){var h=new n(0,0,0,0),f=new Map,g=[],k=[];return function(){function d(a){this._previousResolution=Number.POSITIVE_INFINITY;this.cachePolicy="keep";this.tileIndex=new Map;this.tiles=[];this.acquireTile=a.acquireTile;this.releaseTile=a.releaseTile;this.tileInfoView=a.tileInfoView;a.cachePolicy&&(this.cachePolicy=a.cachePolicy)}d.prototype.destroy=function(){this.tileIndex.clear()};d.prototype.update=function(a){var p=
this,c=this.tileIndex,d=this.tileInfoView.getTileCoverage(a.state);if(d){var e=d.spans,q=d.lodInfo,t=q.level,b=a.state.resolution,l=!a.stationary&&b>this._previousResolution;this._previousResolution=b;this.tiles.length=0;f.clear();var u=0,v=0;if(0<e.length)for(var r=0;r<e.length;r++){a=e[r];for(var n=a.row,w=a.colTo,m=a.colFrom;m<=w;m++)u++,a=h.set(t,n,q.normalizeCol(m),q.getWorldForColumn(m)).id,c.has(a)?(b=c.get(a),b.attached?(f.set(a,b),v++):b.attached||l||this._addParentTile(a,f)):(b=this.acquireTile(h),
this.tileIndex.set(a,b),l||this._addParentTile(a,f))}var x=v===u;k.length=0;g.length=0;c.forEach(function(a,b){h.set(b);if(!f.has(b)){var c=p.tileInfoView.intersects(d,h);!c||!l&&x?"purge"===p.cachePolicy?g.push(b):(h.level>t||!c)&&g.push(b):a.attached?k.push(b):l&&g.push(b)}});for(e=0;e<k.length;e++)a=k[e],(b=c.get(a))&&b.attached&&f.set(a,b);for(e=0;e<g.length;e++)a=g[e],b=c.get(a),this.releaseTile(b),c["delete"](a);f.forEach(function(a){return p.tiles.push(a)});k.length=0;g.length=0;f.clear()}};
d.prototype._addParentTile=function(a,d){for(var c=null;a=this.tileInfoView.getTileParentId(a);)if(this.tileIndex.has(a)&&(c=this.tileIndex.get(a))&&c.attached){d.has(c.key.id)||d.set(c.key.id,c);break}};return d}()});