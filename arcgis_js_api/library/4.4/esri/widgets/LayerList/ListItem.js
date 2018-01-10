// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Collection ../../support/Action ../../layers/support/Sublayer ../../core/Identifiable ../../core/HandleRegistry ../../core/watchUtils ./support/layerListUtils ../../core/accessorSupport/decorators".split(" "),function(b,u,l,e,m,g,n,p,q,r,t,h,d){var k=g.ofType(g.ofType(n));b=f=function(b){function c(a){a=b.call(this)||this;a._handles=new r;a.actionsSections=new k;a.actionsOpen=
!1;a.children=new (g.ofType(f));a.error=null;a.open=!1;a.view=null;a.visible=null;return a}l(c,b);c.prototype.destroy=function(){this._handles.destroy();this.view=this._handles=null};Object.defineProperty(c.prototype,"layer",{set:function(a){this._set("layer",a);this._watchLayerProperties(a)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"layerView",{get:function(){return this._findLayerView(this.layer)||null},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"title",
{get:function(){return this.get("layer.title")||""},set:function(a){void 0===a?this._clearOverride("title"):this._override("title",a)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"updating",{get:function(){var a=this.layerView;return a?a.updating:this._isLayerUpdating(this.layer)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"visibleAtCurrentScale",{get:function(){return!h.isLayerOutsideScaleRange(this.layer,this.get("view.scale"))},enumerable:!0,configurable:!0});
Object.defineProperty(c.prototype,"visibilityMode",{get:function(){return h.findLayerVisibilityMode(this.layer)||"independent"},enumerable:!0,configurable:!0});c.prototype.clone=function(){return new f({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,children:this.children.clone(),layer:this.layer,open:this.open,title:this.title,view:this.view,visible:this.visible})};c.prototype._addChildren=function(a){var b=this;this.children.removeAll();if(a){var c=[];a.forEach(function(a){h.canDisplayLayer(a)&&
(a=new f({layer:a,view:b.view}),c.unshift(a))});this.children.addMany(c)}};c.prototype._watchSublayerChanges=function(a){var b=this;a&&this._handles.add(a.on("change",function(){b._addChildren(a)}),"layer")};c.prototype._initializeChildLayers=function(a){this._addChildren(a);this._watchSublayerChanges(a)};c.prototype._watchLayerProperties=function(a){var b=this;if(this._handles&&(this._handles.remove("layer"),a)){var c=h.getNormalizedChildLayerProperty(a);c&&this._handles.add(t.init(a,c,function(){b._initializeChildLayers(a[c])}),
"layer")}};c.prototype._findLayerView=function(a){if(a){var b=this.get("view.allLayerViews");if(b)return b.find(function(b){return b.layer===a})}};c.prototype._isLayerUpdating=function(a){return a instanceof p?!1:"loading"===a.loadStatus};return c}(d.declared(m,q));e([d.property({type:k})],b.prototype,"actionsSections",void 0);e([d.property()],b.prototype,"actionsOpen",void 0);e([d.property({type:g})],b.prototype,"children",void 0);e([d.aliasOf("layer.loadError")],b.prototype,"error",void 0);e([d.property({value:null})],
b.prototype,"layer",null);e([d.property({dependsOn:["layer","view"],readOnly:!0})],b.prototype,"layerView",null);e([d.property()],b.prototype,"open",void 0);e([d.property({dependsOn:["layer.title"]})],b.prototype,"title",null);e([d.property({dependsOn:["layer.loadStatus","layerView.updating"],readOnly:!0})],b.prototype,"updating",null);e([d.property({value:null})],b.prototype,"view",void 0);e([d.aliasOf("layer.visible")],b.prototype,"visible",void 0);e([d.property({dependsOn:["layer.minScale","layer.maxScale",
"view.scale"],readOnly:!0})],b.prototype,"visibleAtCurrentScale",null);e([d.property({dependsOn:["layer.visibilityMode"],readOnly:!0})],b.prototype,"visibilityMode",null);b=f=e([d.subclass("esri.widgets.LayerList.ListItem")],b);var f;return b});