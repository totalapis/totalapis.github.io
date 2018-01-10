// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("../../../geometry/SpatialReference ../../../geometry/Extent ../../../geometry/support/webMercatorUtils ./mathUtils ./earthUtils ../lib/glMatrix ./cameraUtilsInternal".split(" "),function(w,G,H,k,B,C,I){function D(e,b,f){var h=d.create(),a=d.create();d.cross(e,E,q);0===d.dot(q,q)&&d.cross(e,F,q);l.identity(n);l.rotate(n,-k.deg2rad(b),e);l.rotate(n,-k.deg2rad(f),q);d.cross(q,e,a);d.normalize(a);l.multiplyVec3(n,a);d.normalize(e,h);l.multiplyVec3(n,d.negate(h));return{direction:h,up:a}}function z(e){var b=
e[1];e[1]=-e[2];e[2]=b}function A(e,b){b=D(b,e.heading,e.tilt);e.up=b.up;return e}var K={headingTiltToDirectionUp:D,directionToHeadingTilt:function(e,b,f,h){var a=q,c=m;d.normalize(e,a);d.cross(a,E,m);0===d.dot(m,m)&&d.cross(a,F,m);d.cross(m,a,c);return I.directionToHeadingTilt(b,f,h,a,c)},eyeForCenterWithHeadingTilt:function(e,b,f,h){var a={eye:d.create(),tilt:h,heading:f},c=q;c[0]=e[0];c[1]=e[2];c[2]=-e[1];f=k.deg2rad(f);var g=k.deg2rad(h);h=Math.sin(f);f=Math.cos(f);var p=Math.sin(g),x=Math.cos(g),
v=d.length(c);if(1E-8>Math.abs(g))g=b+v;else var l=v/p,u=k.asin(b/l),g=l*Math.sin(Math.PI-g-u);var l=p*b,x=x*b,u=f*l,m=g-x,n=m*m,y=b*b*p*p,p=f*f*y,y=h*h*y,r=c[1]*m,t=p*(p+n-c[1]*c[1]);if(0>t)return d.scale(c,g/v,a.eye),a.tilt=0,a;var w=Math.sqrt(t),t=p+n,r=0<f?-w+r:w+r;if(1E-8>Math.abs(t))return 1E-8>v?(a.eye[0]=0,a.eye[1]=0,a.eye[2]=b):d.scale(c,g/v,a.eye),a.tilt=0,z(a.eye),A(a,e);a.eye[1]=r/t;t=a.eye[1]*a.eye[1];b=1-t;r=Math.sqrt(b);u=p*t+y-2*u*a.eye[1]*r*m+b*n;if(1E-8>Math.abs(u))return d.scale(c,
g/v,a.eye),a.tilt=0,z(a.eye),A(a,e);a.eye[0]=(b*(g*c[0]-x*c[0])-l*r*(c[0]*a.eye[1]*f+c[2]*h))/u;a.eye[2]=(b*(g*c[2]-x*c[2])-l*r*(c[2]*a.eye[1]*f-c[0]*h))/u;d.scale(a.eye,g);z(a.eye);return A(a,e)},lookAtTiltToEyeTilt:function(e,b,f){e=d.length(e);b=k.asin(b/(Math.sqrt(b*b+e*e-2*b*e*Math.cos(Math.PI-f))/Math.sin(f)));return k.rad2deg(f-b)},eyeTiltToLookAtTilt:function(e,b,f){f=k.deg2rad(f);e=d.length(e);return k.asin(b/(e/Math.sin(f)))+f},toExtent:function(e,b,f,d,a){var c;c=b.latitude;b=b.longitude;
var g=B.getLonDeltaForDistance(b,c,f)/2;f=b-g;b+=g;c=k.deg2rad(c);g=B.earthRadius;c=(1+Math.sin(c))/(1-Math.sin(c));var h=(c+1)*Math.tan(d/g/2);c=1.5*Math.PI-2*Math.atan(.5*(h+Math.sqrt(4*c+h*h)));d=c+d/g;g=function(a){var b=Math.PI/2;a=k.cyclical2PI.normalize(a,-b);a>b&&(a=Math.PI-a);return a};c=g(c);d=g(d);d<c&&(g=d,d=c,c=g);c=Math.max(k.rad2deg(c),-90);d=Math.min(k.rad2deg(d),90);b=J.monotonic(f,b);180<b-f&&(g=(b-f-180)/2,f+=g,b-=g);a?(a.xmin=f,a.ymin=c,a.xmax=b,a.ymax=d,a.spatialReference=w.WGS84):
a=new G(f,c,b,d,w.WGS84);e.spatialReference&&e.spatialReference.isWebMercator&&H.geographicToWebMercator(a,!1,a);return a}},d=C.vec3d,l=C.mat4d,E=d.createFrom(0,0,1),F=d.normalize(d.createFrom(1,1,1)),J=new k.Cyclical(-180,180),n=l.create(),q=d.create(),m=d.create();return K});