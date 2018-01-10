// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/webgl-engine/materials/internal/BlendLayers.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\r\n\x3csnippets\x3e\r\n\r\n\x3csnippet name\x3d"vertexShaderBlendLayers"\x3e\x3c![CDATA[\r\n  $vsprecisionf\r\n\r\n\tattribute vec3 $position;\r\n\tattribute vec2 $uv0;\r\n\r\n\tuniform float scale;\r\n\tuniform vec2 offset;\r\n\r\n\tvarying vec2 uv;\r\n\r\n\tvoid main(void) {\r\n\t\tgl_Position \x3d vec4($position, 1.0);\r\n\t\tuv \x3d $uv0 * scale + offset;;\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fragmentShaderBlendLayers"\x3e\x3c![CDATA[\r\n  $fsprecisionf\r\n\r\n\tvarying vec2 uv;\r\n\r\n\tuniform sampler2D tex;\r\n\tuniform float opacity;\r\n\r\n\tvoid main() {\r\n\t\tvec4 color \x3d texture2D(tex, uv);\r\n\r\n    // Note: output in pre-multiplied alpha for correct alpha compositing\r\n\t\tgl_FragColor \x3d vec4(color.xyz, 1.0) * color.a * opacity;\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c/snippets\x3e\r\n'}});
define(["dojo/text!./BlendLayers.xml","../../../../webgl/Program","../../lib/DefaultVertexAttributeLocations"],function(b,c,d){return{loadShaders:function(a,g,e,f){a._parse(b);a=new c(f,a.vertexShaderBlendLayers,a.fragmentShaderBlendLayers,d.Default3D);e.add("blendLayers",a)}}});