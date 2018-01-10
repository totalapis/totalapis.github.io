/*! ArcGIS API for JavaScript 4.4 | Copyright (c) 2017 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
define(["dojo/Stateful","dojo/_base/declare","dojo/_base/lang","esri/core/HandleRegistry","esri-playground-js/utils/CodeGenerator","esri-playground-js/utils/ObjectProvider"],function(n,e,t,a,s,i){var c={},o=e([n],{ast:null,config:null,editor:null,statefulObject:null,view:null}),r=function(){c._instance.handles.destroy(),c._instance.handles=null,c._instance.required=null,c._instance=null},l=function(){if(!c._instance){c._instance=new o,c._instance.handles=new a,c._instance.required={paths:[],reqModules:[],commentReqModules:["// Modules required: "],reqVariables:[]};var n=c._instance.watch("ast",function(){var n=c._instance.get("ast");if(n){var e=s.generateCode(n);e=c._instance.required.commentReqModules.join("\n")+"\n\n"+js_beautify(e),c._instance.editor.getDoc().setValue(e),u("ast")}});c._instance.handles.add(n,"ast-handler");var e=c._instance.watch("config",function(){u("config")});c._instance.handles.add(e,"config-handler");var t=c._instance.watch("statefulObject",function(){f(c._instance.config,c._instance.statefulObject);var n=JSON.parse(localStorage.getItem(c._instance.config.className)),e=window.location.hash.split("?")[1],t=e&&JSON.parse(decodeURIComponent(e.split("=")[1]));if(t||n&&n.statefulObject){d(c._instance.statefulObject,t||n.statefulObject);var a=s.constructAST(c._instance);c._instance.set("ast",a)}if(t){var i=window.location.hash;window.location.hash=i.split("?")[0]}});c._instance.handles.add(t,"stateful-handler");var i=c._instance.watch("required",function(){});c._instance.handles.add(i,"required-handler")}return c._instance},u=function(n){var e=c._instance.config&&c._instance.config.className;if(e){var t=JSON.parse(localStorage.getItem(e))||{};t[n]=c._instance.get(n),localStorage.setItem(e,JSON.stringify(t))}},d=function(n,e){for(var t in e)e[t]instanceof Array?n.set(t,e[t]):e[t]instanceof Object?d(n[t],e[t]):null!=e[t]&&"className"!==t&&n.set(t,e[t])},f=function(n,e){for(var t in e)e[t]instanceof i.StatefulClass&&f(n,e[t]);var a=e.watch(function(e,t,a){if(t!=a){Array.isArray(a)&&"color"!==e?a.forEach(function(e){e instanceof i.StatefulClass&&f(n,e)}):a instanceof i.StatefulClass&&f(n,a);var o=s.constructAST(c._instance);c._instance.set("ast",o),u("statefulObject")}});c._instance.handles.add(a,"obj-watch")};return c.getInstance=l,c.destroy=r,c});