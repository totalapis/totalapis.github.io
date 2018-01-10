// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports dojo/io-query ./TextureCollection ./ResourceController ../../../identity/IdentityManager ../../../core/watchUtils ../webgl-engine/lib/screenSizePerspectiveUtils".split(" "),function(f,g,h,l,m,n,p,k){Object.defineProperty(g,"__esModule",{value:!0});f=function(){function c(a){var b=this;this.streamDataSupplier=this.textures=null;this.tokens={};this.graphicsOwners=[];this.screenSizePerspectiveHandle=null;var d=m.ClientType.SYMBOLOGY;this.stage=a.stage;this.focusTracker=a.focusTracker;
this.resourceController=a.resourceController;this.streamDataSupplier=this.resourceController.registerClient(this,d,{addUrlToken:function(a){return b.addUrlToken(a)}});this.textures=new l(this.streamDataSupplier,a.stage,{preMultiplyAlpha:!0,wrapClamp:!0});this.screenSizePerspectiveSettings=k.getSettings(a.viewingMode);this.screenSizePerspectiveSettingsLabels=k.getLabelSettings(a.viewingMode)}c.prototype.destroy=function(){this.resourceController.deregisterClient(this);this.streamDataSupplier=this.textures=
null};c.prototype.addGraphicsOwner=function(a){var b=this;this.graphicsOwners.push(a);var d=null;a.layerView&&(d=p.init(a.layerView,"layer.screenSizePerspectiveEnabled",function(){return b.updateScreenSizePerspectiveEnabled()}));return{remove:function(){d&&(d.remove(),d=null,b.updateScreenSizePerspectiveEnabled())}}};c.prototype.updateScreenSizePerspectiveEnabled=function(){var a=this,b=this.graphicsOwners.some(function(a){return a.layerView&&!0===a.layerView.get("layer.screenSizePerspectiveEnabled")});
b&&!this.screenSizePerspectiveHandle?(this.screenSizePerspectiveHandle=this.focusTracker.events.on("distanceToSurfaceChanged",function(){return a.updateScreenSizePerspectiveSettings()}),this.updateScreenSizePerspectiveSettings()):!b&&this.screenSizePerspectiveHandle&&(this.screenSizePerspectiveHandle.remove(),this.screenSizePerspectiveHandle=null)};c.prototype.updateScreenSizePerspectiveSettings=function(){var a=this.focusTracker;e.distance=a.distanceToSurface;e.fovY=a.fovY;this.screenSizePerspectiveSettings.update(e);
this.screenSizePerspectiveSettingsLabels.update(e);this.stage.setNeedsRender()};c.prototype.addUrlToken=function(a){if(0===a.indexOf("data:"))return a;var b=a.match(/^(((?:https?:)?\/\/[^\/]+).*?)(?:\?(.*))?$/);if(!b)return a;var d=b[1],c=b[2],b=h.queryToObject(b[3]||"");"token"in b||(null==this.tokens[c]&&(a=n.findCredential(a),this.tokens[c]=a&&a.token||""),this.tokens[c]&&(b.token=this.tokens[c]));return(c=h.objectToQuery(b))?d+"?"+c:d};return c}();g.SharedSymbolResources=f;var e={distance:0,fovY:0};
g.default=f});