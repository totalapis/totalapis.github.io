/*! ArcGIS API for JavaScript 4.4 | Copyright (c) 2017 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
define(["esri/geometry/Point","esri/geometry/Polyline","esri/geometry/Polygon","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/PictureMarkerSymbol","esri/symbols/PictureFillSymbol","esri/symbols/TextSymbol","esri/layers/FeatureLayer"],function(e,r,i,l,s,t,o,c,m,n){var a={},y=function(e){switch(e){case"simple-marker-symbol":return new n({url:"http://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/CaliforniaCities/FeatureServer/0"});case"simple-line-symbol":return new n({url:"https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/USA_Freeway_System/FeatureServer/2"});case"simple-fill-symbol":return new n({url:"https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3"})}},S=function(l){var s=new r({paths:[[[-115.57,34.53],[-118,34.5],[-118.58,32.85]]],spatialReference:{wkid:4326}}),t=new e({x:-118,y:34.5,spatialReference:{wkid:4326}}),o=new i({rings:[[[-118.63,34.52],[-117.57,35.53],[-116.52,34.5],[-115.49,33.48],[-119.64,33.29],[-118.63,34.52],[-118.63,34.52]]],spatialReference:{wkid:4326}});switch(l){case"SimpleLineSymbol":case"CartographicLineSymbol":case"LineSymbol3D":return s;case"SimpleMarkerSymbol":case"PictureMarkerSymbol":case"TextSymbol":case"PointSymbol3D":case"WebStyleSymbol":return t;case"SimpleFillSymbol":case"PictureFillSymbol":case"PolygonSymbol3D":case"MeshSymbol3D":return o}},u=function(e){switch(e){case"SimpleMarkerSymbol":return new l({style:"diamond",size:100,color:"#40d47e"});case"PictureMarkerSymbol":return new o({url:require.toUrl("esri-playground-img")+"/js.png",width:100,height:100});case"TextSymbol":return new m({text:"arcgis-js-api",font:{size:40,weight:"bold",family:"Titillium Web"},verticalAlignment:"middle",color:"#e74c3c"});case"SimpleLineSymbol":return new s({width:10,color:[0,197,255,1]});case"SimpleFillSymbol":return new t({outline:{width:5,color:"#e74c3c"},color:[152,230,0,.25]});case"PictureFillSymbol":return new c({url:require.toUrl("esri-playground-img")+"/js.png",width:240,height:240})}};return a.getGeometry=S,a.getSymbol=u,a.getLayer=y,a});