!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){const n=document.getElementById("gameCanvas"),i=n.getContext("2d");let o=50,l=50,r=10,c=10,u=250,f=250;const d=100,a=10;let s=0,p=0;const y=2;let h=!1;function v(t,e,n,i,o,l){t.fillStyle=l,t.fillRect(e,n,i,o)}function g(){(s>=y||p>=y)&&(s=0,p=0,h=!0),o=n.width/2,l=n.height/2,r=-r}function m(t){h&&(s=0,p=0,h=!1),n.removeEventListener("click",m)}document.addEventListener("DOMContentLoaded",function(){setInterval(function(){!function(){if(!h){if(f+d/2<l-35?f+=6:f-=6,l+=c,(o+=r)<0)if(l>u&&l<u+d){r=-r;const t=l-(u+d/2);c=.35*t}else g(),p++;if(o>n.width)if(l>f&&l<f+d){r=-r;const t=l-(f+d/2);c=.35*t}else g(),s++;l<0&&(c=-c),l>n.height&&(c=-c)}}(),function(t,e){if(h){e.font="20px Georgia",e.fillStyle="white",e.fillText("Click to Continue",200,200);let n=s>p?"1":"2";return e.fillText(`Congtatulations, player ${n} win!`,200,400),void t.addEventListener("click",m)}var n,i,r,c,d;v(e,0,0,t.width,t.height,"black"),v(e,0,u,a,100,"white"),v(e,t.width-a,f,a,100,"white"),e.fillText(s,100,100),e.fillText(p,t.width-100,100),i=o,r=l,c=10,d="white",(n=e).fillStyle=d,n.beginPath(),n.arc(i,r,c,0,2*Math.PI,!0),n.fill()}(n,i)},1e3/30),n.addEventListener("mousemove",function(t){let e=function({clientX:t,clientY:e}){const i=n.getBoundingClientRect(),o=document.documentElement,l=t-i.left-o.scrollLeft,r=e-i.top-o.scrollTop;return{x:l,y:r}}(t);u=e.y-d/2})})}]);