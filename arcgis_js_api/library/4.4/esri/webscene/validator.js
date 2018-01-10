// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","./libs/ajv/ajv.bundle","./schema"],function(d,e,a,c){var b=new a({allErrors:!0,extendRefs:!0});b.addSchema(c.json,"#webScene_schema.json");return{validate:function(a){return b.validate("#webScene_schema.json",a)?[]:b.errors.map(function(a){return""+(a.dataPath?a.dataPath+": ":"")+a.message})}}});