(window.webpackJsonp=window.webpackJsonp||[]).push([[10,8],{378:function(t,e){t.exports=function(t){return Map.prototype.entries.call(t)}},381:function(t,e,r){var content=r(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1930a9a0",content,!0,{sourceMap:!1})},382:function(t,e,r){"use strict";var n=r(4),o=r(14),c=r(113),l=r(40),f=r(248),v=r(247),d=r(146),h=r(24),_=r(11),E=r(176),T=r(88),R=r(179);t.exports=function(t,e,r){var m=-1!==t.indexOf("Map"),S=-1!==t.indexOf("Weak"),y=m?"set":"add",w=o[t],I=w&&w.prototype,x=w,k={},A=function(t){var e=I[t];l(I,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(S&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return S&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(S&&!h(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(c(t,"function"!=typeof w||!(S||I.forEach&&!_((function(){(new w).entries().next()})))))x=r.getConstructor(e,t,m,y),f.enable();else if(c(t,!0)){var M=new x,N=M[y](S?{}:-0,1)!=M,O=_((function(){M.has(1)})),z=E((function(t){new w(t)})),C=!S&&_((function(){for(var t=new w,e=5;e--;)t[y](e,e);return!t.has(-0)}));z||((x=e((function(e,r){d(e,x,t);var n=R(new w,e,x);return null!=r&&v(r,n[y],{that:n,AS_ENTRIES:m}),n}))).prototype=I,I.constructor=x),(O||C)&&(A("delete"),A("has"),m&&A("get")),(C||N)&&A(y),S&&I.clear&&delete I.clear}return k[t]=x,n({global:!0,forced:x!=w},k),T(x,t),S||r.setStrong(x,t,m),x}},383:function(t,e,r){"use strict";var n=r(37).f,o=r(78),c=r(177),l=r(85),f=r(146),v=r(247),d=r(180),h=r(178),_=r(33),E=r(248).fastKey,T=r(58),R=T.set,m=T.getterFor;t.exports={getConstructor:function(t,e,r,d){var h=t((function(t,n){f(t,h,e),R(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),_||(t.size=0),null!=n&&v(n,t[d],{that:t,AS_ENTRIES:r})})),T=m(e),S=function(t,e,r){var n,o,c=T(t),l=y(t,e);return l?l.value=r:(c.last=l={index:o=E(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),_?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},y=function(t,e){var r,n=T(t),o=E(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(h.prototype,{clear:function(){for(var t=T(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,_?t.size=0:this.size=0},delete:function(t){var e=this,r=T(e),n=y(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),_?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=T(this),n=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!y(this,t)}}),c(h.prototype,r?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return S(this,0===t?0:t,e)}}:{add:function(t){return S(this,t=0===t?0:t,t)}}),_&&n(h.prototype,"size",{get:function(){return T(this).size}}),h},setStrong:function(t,e,r){var n=e+" Iterator",o=m(e),c=m(n);d(t,e,(function(t,e){R(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),h(e)}}},384:function(t,e,r){"use strict";var n=r(22),o=r(77);t.exports=function(){for(var t,e=n(this),r=o(e.delete),c=!0,l=0,f=arguments.length;l<f;l++)t=r.call(e,arguments[l]),c=c&&t;return!!c}},385:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},387:function(t,e,r){"use strict";var n=r(382),o=r(383);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},388:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(384);n({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},389:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(85),f=r(378),v=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{every:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return!v(e,(function(t,e,n){if(!r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},390:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(53),l=r(22),f=r(77),v=r(85),d=r(145),h=r(378),_=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{filter:function(t){var map=l(this),e=h(map),r=v(t,arguments.length>1?arguments[1]:void 0,3),n=new(d(map,c("Map"))),o=f(n.set);return _(e,(function(t,e){r(e,t,map)&&o.call(n,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},391:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(85),f=r(378),v=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{find:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return v(e,(function(t,e,n){if(r(e,t,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},392:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(85),f=r(378),v=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return v(e,(function(t,e,n){if(r(e,t,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},393:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(378),f=r(385),v=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{includes:function(t){return v(l(c(this)),(function(e,r,n){if(f(r,t))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},394:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(378),f=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(t){return f(l(c(this)),(function(e,r,n){if(r===t)return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},395:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(53),l=r(22),f=r(77),v=r(85),d=r(145),h=r(378),_=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(t){var map=l(this),e=h(map),r=v(t,arguments.length>1?arguments[1]:void 0,3),n=new(d(map,c("Map"))),o=f(n.set);return _(e,(function(t,e){o.call(n,r(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},396:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(53),l=r(22),f=r(77),v=r(85),d=r(145),h=r(378),_=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(t){var map=l(this),e=h(map),r=v(t,arguments.length>1?arguments[1]:void 0,3),n=new(d(map,c("Map"))),o=f(n.set);return _(e,(function(t,e){o.call(n,t,r(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},397:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(77),f=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{merge:function(t){for(var map=c(this),e=l(map.set),r=arguments.length,i=0;i<r;)f(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},398:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(77),f=r(378),v=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(t){var map=c(this),e=f(map),r=arguments.length<2,n=r?void 0:arguments[1];if(l(t),v(e,(function(e,o){r?(r=!1,n=o):n=t(n,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty map with no initial value");return n}})},399:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(85),f=r(378),v=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{some:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return v(e,(function(t,e,n){if(r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},400:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(77);n({target:"Map",proto:!0,real:!0,forced:o},{update:function(t,e){var map=c(this),r=arguments.length;l(e);var n=map.has(t);if(!n&&r<3)throw TypeError("Updating absent value");var o=n?map.get(t):l(r>2?arguments[2]:void 0)(t,map);return map.set(t,e(o,t,map)),map}})},401:function(t,e,r){"use strict";r(381)},402:function(t,e,r){var n=r(17)(!1);n.push([t.i,".SPLogo{height:180px;width:180px;transform:rotateY(1turn);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=n},406:function(t,e,r){"use strict";r.r(e);r(401);var n=r(87),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"SPLogo",attrs:{alt:"Scene Packer Logo",src:"hand-truck.svg"}})}),[],!1,null,null,null);e.default=component.exports},507:function(t,e,r){"use strict";r.r(e);var n=r(87),o=r(114),c=r.n(o),l=r(414),f=r(380),v=r(499),d=r(501),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",{staticClass:"v-card mb-3 py-4"},[r("v-card-title",{staticClass:"headline"},[r("h3",[t._v("I need "),r("em",[t._v("Help!")])])])],1),t._v(" "),r("v-card",{staticClass:"v-card mb-3 py-4"},[r("v-card-text",[r("p",[t._v("This generator tool is meant to help content creators kick start their adventure module. Be sure to have a look at the zip file generated and adjust further as you want. You should still have a read over the "),r("a",{attrs:{href:"https://foundryvtt.com/article/module-development/"}},[t._v("official documentation")]),t._v(" on how to create a module as it will give you a lot of helpful background knowledge.")]),t._v(" "),r("h4",[t._v("How does this work?")]),t._v(" "),r("p",[t._v("The details that you fill in within the form are used to replace values within the "),r("a",{attrs:{href:"https://github.com/sneat/starter-scene-packer"}},[t._v("Starter Scene Packer")]),t._v(" module. The release zip of that module is downloaded within your browser, extracted, edited and then re-zipped before being downloaded to your computer.")]),t._v(" "),r("p",[t._v("None of your information is sent to the server, all processing is done client-side within your browser. View your "),r("code",[t._v("network tab")]),t._v(" in your browser console ("),r("code",[t._v("F12")]),t._v(") to see that")])])],1),t._v(" "),r("v-card",{staticClass:"v-card mb-3 py-4 text-center"},[r("v-card-text",[r("Logo"),t._v(" "),r("p",[t._v("You can contact me on Discord "),r("code",[t._v("blair#9056")]),t._v(" in the "),r("a",{attrs:{href:"https://discord.com/invite/HY3xhBEf2A"}},[t._v("Scene Packer server")]),t._v(" or the "),r("code",[t._v("Foundry VTT server")]),t._v(" if you have questions, comments, queries, suggestions etc.")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Logo:r(406).default}),c()(component,{VCard:l.a,VCardText:f.b,VCardTitle:f.c,VCol:v.a,VRow:d.a})}}]);