//>>built
define("dojo/_base/lang dojo/_base/declare dojo/_base/connect dojo/_base/array dojo/dom-geometry dojo/_base/fx dojo/fx dojo/sniff ./Base ./_PlotEvents ./common ../axis2d/common dojox/gfx dojox/gfx/matrix dojox/gfx/fx dojox/lang/functional dojox/lang/utils dojo/fx/easing".split(" "),function(B,V,I,J,Q,K,W,L,X,Y,R,S,C,Z,ca,T,U,aa){return V("dojox.charting.plot2d.Spider",[X,Y],{defaultParams:{labels:!0,ticks:!1,fixed:!0,precision:1,labelOffset:-10,labelStyle:"default",htmlLabels:!0,startAngle:-90,divisions:3,
axisColor:"",axisWidth:0,spiderColor:"",spiderWidth:0,seriesWidth:0,seriesFillAlpha:.2,spiderOrigin:.16,markerSize:3,spiderType:"polygon",animationType:aa.backOut,animate:null,axisTickFont:"",axisTickFontColor:"",axisFont:"",axisFontColor:""},optionalParams:{radius:0,font:"",fontColor:""},constructor:function(a,b){this.opt=B.clone(this.defaultParams);U.updateWithObject(this.opt,b);U.updateWithPattern(this.opt,b,this.optionalParams);this.dyn=[];this.datas={};this.labelKey=[];this.oldSeriePoints={};
this.animate=null===this.opt.animate?{}:this.opt.animate;this.animations={}},clear:function(){this.inherited(arguments);this.dyn=[];this.axes=[];this.datas={};this.labelKey=[];this.oldSeriePoints={};this.animations={};return this},setAxis:function(a){a&&(void 0!=a.opt.min&&(this.datas[a.name].min=a.opt.min),void 0!=a.opt.max&&(this.datas[a.name].max=a.opt.max));return this},addSeries:function(a){this.series.push(a);for(var b in a.data){var e=a.data[b],h=this.datas[b];h?(h.vlist.push(e),h.min=Math.min(h.min,
e),h.max=Math.max(h.max,e)):(h="__"+b,this.axes.push(h),this[h]=b,this.datas[b]={min:e,max:e,vlist:[e]})}if(0>=this.labelKey.length)for(b in a.data)this.labelKey.push(b);return this},getSeriesStats:function(){return R.collectSimpleStats(this.series,function(a){return null===a})},render:function(a,b){if(!this.dirty)return this;this.dirty=!1;this.cleanGroup();var e=this.group,h=this.chart.theme;this.resetEvents();if(!this.series||!this.series.length)return this;var c=this.opt,f=h.axis,d=(a.width-b.l-
b.r)/2,m=(a.height-b.t-b.b)/2,l=Math.min(d,m),q=c.font||f.majorTick&&f.majorTick.font||f.tick&&f.tick.font||"normal normal normal 7pt Tahoma",p=c.axisFont||f.tick&&f.tick.titleFont||"normal normal normal 11pt Tahoma",v=c.axisTickFontColor||f.majorTick&&f.majorTick.fontColor||f.tick&&f.tick.fontColor||"silver",N=c.axisFontColor||f.tick&&f.tick.titleFontColor||"black",x=c.axisColor||f.tick&&f.tick.axisColor||"silver",k=c.spiderColor||f.tick&&f.tick.spiderColor||"silver",ba=c.axisWidth||f.stroke&&f.stroke.width||
2,y=c.spiderWidth||f.stroke&&f.stroke.width||2,f=c.seriesWidth||f.stroke&&f.stroke.width||2,g=C.normalizedLength(C.splitFontString(p).size),E=Z._degToRad(c.startAngle),B,t,M,u,r,z,w=c.spiderOrigin,D=3<=c.divisions?c.divisions:3,I=c.markerSize,K=c.spiderType,L=c.animationType,O=-10>c.labelOffset?c.labelOffset:-10,n;c.labels&&(l=J.map(this.series,function(b){return b.name},this),l=T.foldl1(T.map(l,function(b){return C._base._getTextBox(b,{font:h.series.font}).w},this),"Math.max(a, b)")/2,l=Math.min(d-
2*l,m-g)+O,B=l-O);"radius"in c&&(l=c.radius,B=l-O);l/=1.2;b={cx:b.l+d,cy:b.t+m,r:l};for(d=0;d<this.series.length;d++)if(n=this.series[d],this.dirty||n.dirty){if(n.cleanGroup(),g=n.data,null!==g&&(m=this._getObjectLength(g),!t||0>=t.length))if(t=[],M=[],z=[],this._buildPoints(t,m,b,l,E,!0,a),this._buildPoints(M,m,b,l*w,E,!0,a),this._buildPoints(z,m,b,B,E,!1,a),2<D)for(u=[],r=[],g=0;g<D-2;g++)u[g]=[],this._buildPoints(u[g],m,b,l*(w+(1-w)*(g+1)/(D-1)),E,!0,a),r[g]=l*(w+(1-w)*(g+1)/(D-1))}else h.skip();
m=e.createGroup();x={color:x,width:ba};d={color:k,width:y};for(g=t.length-1;0<=g;--g)k=t[g],y={x:k.x+.2*(k.x-b.cx),y:k.y+.2*(k.y-b.cy)},k={x:k.x+.2*(k.x-b.cx)/2,y:k.y+.2*(k.y-b.cy)/2},m.createLine({x1:b.cx,y1:b.cy,x2:y.x,y2:y.y}).setStroke(x),this._drawArrow(m,y,k,x);m=e.createGroup();for(g=z.length-1;0<=g;--g)k=z[g],y=C._base._getTextBox(this.labelKey[g],{font:p}).w||0,x=this.opt.htmlLabels&&"vml"!=C.renderer?"html":"gfx",k=S.createText[x](this.chart,m,Q.isBodyLtr()||"html"!=x?k.x:k.x+y-a.width,
k.y,"middle",this.labelKey[g],p,N),this.opt.htmlLabels&&this.htmlElements.push(k);p=e.createGroup();if("polygon"==K){if(p.createPolyline(t).setStroke(d),p.createPolyline(M).setStroke(d),0<u.length)for(g=u.length-1;0<=g;--g)p.createPolyline(u[g]).setStroke(d)}else if(p.createCircle({cx:b.cx,cy:b.cy,r:l}).setStroke(d),p.createCircle({cx:b.cx,cy:b.cy,r:l*w}).setStroke(d),0<r.length)for(g=r.length-1;0<=g;--g)p.createCircle({cx:b.cx,cy:b.cy,r:r[g]}).setStroke(d);m=this._getObjectLength(this.datas);N=e.createGroup();
u=0;for(var F in this.datas){r=this.datas[F];t=r.min;r=r.max;r-=t;p=E+2*Math.PI*u/m;for(d=0;d<D;d++)z=t+r*d/(D-1),k=this._getCoordinate(b,l*(w+(1-w)*d/(D-1)),p,a),z=this._getLabel(z),y=C._base._getTextBox(z,{font:q}).w||0,x=this.opt.htmlLabels&&"vml"!=C.renderer?"html":"gfx",this.opt.htmlLabels&&this.htmlElements.push(S.createText[x](this.chart,N,Q.isBodyLtr()||"html"!=x?k.x:k.x+y-a.width,k.y,"start",z,q,v));u++}this.chart.seriesShapes={};for(d=this.series.length-1;0<=d;d--)if(n=this.series[d],g=
n.data,null!==g){var q=h.next("spider",[c,n]),G=C.normalizeColor(q.series.fill),q={color:q.series.fill,width:f};G.a=c.seriesFillAlpha;n.dyn={fill:G,stroke:q};if(!n.hidden){var A=[],H=[];u=0;for(F in g)r=this.datas[F],t=r.min,r=r.max,r-=t,v=g[F],p=E+2*Math.PI*u/m,k=this._getCoordinate(b,l*(w+(1-w)*(v-t)/r),p,a),A.push(k),H.push({sname:n.name,key:F,data:v}),u++;A[A.length]=A[0];H[H.length]=H[0];var v=this._getBoundary(A),P=n.group,q=this._createSeriesEntry(P,this.oldSeriePoints[n.name]||M,A,G,q,l,w,
I,L);this.chart.seriesShapes[n.name]=q;this.oldSeriePoints[n.name]=A;this._connectEvents({element:"spider_poly",index:d,id:"spider_poly_"+n.name,run:n,plot:this,shape:q.poly,parent:P,brect:v,cx:b.cx,cy:b.cy,cr:l,f:G,s:e});this._connectEvents({element:"spider_plot",index:d,id:"spider_plot_"+n.name,run:n,plot:this,shape:n.group});J.forEach(q.circles,function(b,a){this._connectEvents({element:"spider_circle",index:a,id:"spider_circle_"+n.name+a,run:n,plot:this,shape:b,parent:P,tdata:H[a],cx:A[a].x,cy:A[a].y,
f:G,s:e})},this)}}return this},_createSeriesEntry:function(a,b,e,h,c,f,d,m,l){f=this.animate?b:e;var q=a.createPolyline(f).setFill(h).setStroke(c),p=[];for(d=0;d<f.length;d++){var v=f[d],v=a.createCircle({cx:v.x,cy:v.y,r:m}).setFill(h).setStroke(c);p.push(v)}this.animate&&(h=J.map(e,function(a,c){a=new K.Animation(B.delegate({duration:1E3,easing:l,curve:[b[c].y,a.y]},this.animate));var d=p[c];I.connect(a,"onAnimate",function(a){var b=q.getShape();b.points[c].y=a;q.setShape(b);b=d.getShape();b.cy=
a;d.setShape(b)});return a},this),e=J.map(e,function(a,c){a=new K.Animation(B.delegate({duration:1E3,easing:l,curve:[b[c].x,a.x]},this.animate));var d=p[c];I.connect(a,"onAnimate",function(a){var b=q.getShape();b.points[c].x=a;q.setShape(b);b=d.getShape();b.cx=a;d.setShape(b)});return a},this),W.combine(h.concat(e)).play());return{group:a,poly:q,circles:p}},plotEvent:function(a){"spider_plot"==a.element&&("onmouseover"!=a.type||L("ie")||a.shape.moveToFront())},tooltipFunc:function(a){return"spider_circle"==
a.element?a.tdata.sname+"\x3cbr/\x3e"+a.tdata.key+"\x3cbr/\x3e"+a.tdata.data:null},_getBoundary:function(a){for(var b=a[0].x,e=a[0].x,h=a[0].y,c=a[0].y,f=0;f<a.length;f++)var d=a[f],b=Math.max(d.x,b),h=Math.max(d.y,h),e=Math.min(d.x,e),c=Math.min(d.y,c);return{x:e,y:c,width:b-e,height:h-c}},_drawArrow:function(a,b,e,h){var c=Math.sqrt(Math.pow(e.x-b.x,2)+Math.pow(e.y-b.y,2)),f=(e.y-b.y)/c,d=(e.x-b.x)/c;a.createPolyline([b,{x:e.x+c/3*-f,y:e.y+c/3*d},{x:e.x+c/3*f,y:e.y+c/3*-d}]).setFill(h.color).setStroke(h)},
_buildPoints:function(a,b,e,h,c,f,d){for(var m=0;m<b;m++)a.push(this._getCoordinate(e,h,c+2*Math.PI*m/b,d));f&&a.push(this._getCoordinate(e,h,c+2*Math.PI,d))},_getCoordinate:function(a,b,e,h){var c=a.cx+b*Math.cos(e);L("dojo-bidi")&&this.chart.isRightToLeft()&&h&&(c=h.width-c);return{x:c,y:a.cy+b*Math.sin(e)}},_getObjectLength:function(a){var b=0;if(B.isObject(a))for(var e in a)b++;return b},_getLabel:function(a){return R.getLabel(a,this.opt.fixed,this.opt.precision)}})});