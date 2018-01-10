/*! ArcGIS API for JavaScript 4.4 | Copyright (c) 2017 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
"use strict";require(["esri-playground-js/utils/CurrentState","esri-playground-js/utils/mainUtils","esri-playground-js/utils/Initializer","esri-playground-js/utils/DataProvider","dojo/dom","dojo/on","dojo/domReady!"],function(e,i,n,s,t,a){function l(){var i=window.location.hash,s=e.getInstance();i.toLowerCase().indexOf("3d")>-1?(g.style.display="none",w.style.display="none",s.set("view",n.getView(!0))):(w.style.display="block",s.set("view",n.getView()))}function o(){var s=window.location.hash,t=e.getInstance();l();var a=s.split("=")[1];if(a){d.style.display="none",y.style.display="flex",u.style.display="block",f.style.display="inline";var o=a.split("?")[0],w=require.toUrl("esri-playground-data")+"/"+o,I=w.split("/").pop().split(".")[0],b=I.toLowerCase().indexOf("3d")>-1;I.toLowerCase().indexOf("picture")>-1||b||I.toLowerCase().indexOf("webstyle")>-1?g.style.display="none":g.style.display="inline-block";var v=JSON.parse(localStorage.getItem(I));v&&v.config&&!b&&(r=i.parseConfig(v.config,!0)),(!r||r&&-1===w.indexOf(r.className))&&(r=i.parseConfig(w,!0)),t.set("config",r),p.innerHTML=r.className+": ",c.innerHTML=r.summary,n.init()}else d.style.display="flex",y.style.display="none",u.style.display="none",f.style.display="none",p.innerHTML="",c.innerHTML="A code generator application",n.clearGraphicsLayer2D()}var r=null,d=t.byId("selectionBlock"),y=t.byId("generatorBlock"),p=t.byId("pageTitle"),c=t.byId("pageSubTitle"),g=(t.byId("playArea"),t.byId("viewsOptions")),u=t.byId("mapOptions"),f=t.byId("searchBtn"),w=t.byId("share");a(window,"hashchange",function(e){!!e.oldURL.split("state")[1]||(n.reset(),o())}),n.initMsgCenterHandlers(),l(),e.getInstance().view.then(function(){var i=require.toUrl("esri-playground-data")+"/index-config.json";s.getJsonData(i,!0).then(function(i){n.initSelectionHandlers(e.getInstance().view.map,i)})}),o()});