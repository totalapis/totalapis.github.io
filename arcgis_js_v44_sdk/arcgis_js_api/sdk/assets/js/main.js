/*! ArcGIS API for JavaScript 4.4 | Copyright (c) 2017 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
require(["SessionManager","dojo/query","dojo/topic","calcite-web","esri/config","documentation/download","dojo/NodeList-dom","dojo/NodeList-manipulate","dojo/NodeList-traverse","dojo/_base/event","dojo/domReady!"],function(o,n,e,i,t){function a(){o.loggedIn()&&o.developerSubscription()&&n(".js-account-settings").removeClass("hide")}function r(o,n){for(var e=0;e<n.length;e++)if(o.match(n[e]))return!0;return!1}i.init(),window.calcite=i,t.request.proxyUrl="/proxy",window.console||function(){var o=function(){},n=["log","debug","info","warn","error","assert","dir","dirxml","group","groupEnd","time","timeEnd","count","trace","profile","profileEnd"];window.console={};for(var e=0;e<n.length;e++)window.console[n[e]]=o}(),n("body").on("click",function(o){var e=n("#down-arrow"),i=n(".logo-wrap");o.target==e[0]&&"visible"!==siteNav[0].className?i.addClass("expanded"):i.removeClass("expanded")}),function(){if(o.loggedIn()){n("body").addClass("logged-in");var e=window.location,i=e.origin,t=r(e.pathname,["sign-up","developer-beta","developer-trial"]),a=r(e.pathname,["applications","usage","hosted-data"]),d=o.isPublicAccount();d&&(t||a)?window.location=i+"/downloads/":!d&&t&&(window.location=i+"/applications/")}}(),function(){window.hljs&&Array.prototype.forEach&&hljs.initHighlighting()}(),function(){e.subscribe("session:organization",function(){n("[data-user-avatar]").forEach(function(e){var i=n(e).attr("data-user-avatar")[0];e.src=o.avatar(i)}),n("[data-first-name]").text(o.firstName()),n("[data-full-name]").text(o.profile.fullName),n("[data-username]").text(o.username()),n("[data-profile-link]").attr("href",o.developerSubscription()?"/account/profile":o.orgUrl()+"/home/user.html")}),o.loggedIn()&&"ontouchstart"in window&&n("#logged-in-navigation a").first().on("click",function(o){o.preventDefault()});var i=SiteConfig.portal+"/rest/oauth2/signout?redirect_uri="+SiteConfig.destination;n(".js-log-out").attr("href",i)}(),o.organization||e.subscribe("session:organization",function(){a()})});