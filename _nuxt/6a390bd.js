(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6,8],{399:function(t,e,r){var n=r(32);t.exports=function(t){return n(Map.prototype.entries,t)}},403:function(t,e,r){var content=r(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("3fe3cba8",content,!0,{sourceMap:!1})},404:function(t,e,r){"use strict";var n=r(5),o=r(3),c=r(6),f=r(125),l=r(40),v=r(269),d=r(268),h=r(163),_=r(20),T=r(30),E=r(7),S=r(192),R=r(94),x=r(195);t.exports=function(t,e,r){var m=-1!==t.indexOf("Map"),I=-1!==t.indexOf("Weak"),y=m?"set":"add",w=o[t],k=w&&w.prototype,M=w,A={},N=function(t){var e=c(k[t]);l(k,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(I&&!T(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return I&&!T(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(I&&!T(t))&&e(this,0===t?0:t)}:function(t,r){return e(this,0===t?0:t,r),this})};if(f(t,!_(w)||!(I||k.forEach&&!E((function(){(new w).entries().next()})))))M=r.getConstructor(e,t,m,y),v.enable();else if(f(t,!0)){var O=new M,V=O[y](I?{}:-0,1)!=O,P=E((function(){O.has(1)})),C=S((function(t){new w(t)})),L=!I&&E((function(){for(var t=new w,e=5;e--;)t[y](e,e);return!t.has(-0)}));C||((M=e((function(t,e){h(t,k);var r=x(new w,t,M);return null!=e&&d(e,r[y],{that:r,AS_ENTRIES:m}),r}))).prototype=k,k.constructor=M),(P||L)&&(N("delete"),N("has"),m&&N("get")),(L||V)&&N(y),I&&k.clear&&delete k.clear}return A[t]=M,n({global:!0,forced:M!=w},A),R(M,t),I||r.setStrong(M,t,m),M}},405:function(t,e,r){"use strict";var n=r(39).f,o=r(83),c=r(193),f=r(70),l=r(163),v=r(268),d=r(196),h=r(194),_=r(29),T=r(269).fastKey,E=r(61),S=E.set,R=E.getterFor;t.exports={getConstructor:function(t,e,r,d){var h=t((function(t,n){l(t,E),S(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),_||(t.size=0),null!=n&&v(n,t[d],{that:t,AS_ENTRIES:r})})),E=h.prototype,x=R(e),m=function(t,e,r){var n,o,c=x(t),f=I(t,e);return f?f.value=r:(c.last=f={index:o=T(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=f),n&&(n.next=f),_?c.size++:t.size++,"F"!==o&&(c.index[o]=f)),t},I=function(t,e){var r,n=x(t),o=T(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(E,{clear:function(){for(var t=x(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,_?t.size=0:this.size=0},delete:function(t){var e=this,r=x(e),n=I(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),_?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=x(this),n=f(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!I(this,t)}}),c(E,r?{get:function(t){var e=I(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),_&&n(E,"size",{get:function(){return x(this).size}}),h},setStrong:function(t,e,r){var n=e+" Iterator",o=R(e),c=R(n);d(t,e,(function(t,e){S(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),h(e)}}},406:function(t,e,r){"use strict";var n=r(32),o=r(82),c=r(23);t.exports=function(){for(var t,e=c(this),r=o(e.delete),f=!0,l=0,v=arguments.length;l<v;l++)t=n(r,e,arguments[l]),f=f&&t;return!!f}},407:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},408:function(t,e,r){"use strict";r(404)("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(405))},409:function(t,e,r){"use strict";r(5)({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:r(406)})},410:function(t,e,r){"use strict";var n=r(5),o=r(23),c=r(70),f=r(399),l=r(268);n({target:"Map",proto:!0,real:!0,forced:!0},{every:function(t){var map=o(this),e=f(map),r=c(t,arguments.length>1?arguments[1]:void 0);return!l(e,(function(t,e,n){if(!r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},411:function(t,e,r){"use strict";var n=r(5),o=r(53),c=r(70),f=r(32),l=r(82),v=r(23),d=r(162),h=r(399),_=r(268);n({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(t){var map=v(this),e=h(map),r=c(t,arguments.length>1?arguments[1]:void 0),n=new(d(map,o("Map"))),T=l(n.set);return _(e,(function(t,e){r(e,t,map)&&f(T,n,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},412:function(t,e,r){"use strict";var n=r(5),o=r(23),c=r(70),f=r(399),l=r(268);n({target:"Map",proto:!0,real:!0,forced:!0},{find:function(t){var map=o(this),e=f(map),r=c(t,arguments.length>1?arguments[1]:void 0);return l(e,(function(t,e,n){if(r(e,t,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},413:function(t,e,r){"use strict";var n=r(5),o=r(23),c=r(70),f=r(399),l=r(268);n({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(t){var map=o(this),e=f(map),r=c(t,arguments.length>1?arguments[1]:void 0);return l(e,(function(t,e,n){if(r(e,t,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},414:function(t,e,r){"use strict";var n=r(5),o=r(23),c=r(399),f=r(407),l=r(268);n({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(t){return l(c(o(this)),(function(e,r,n){if(f(r,t))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},415:function(t,e,r){"use strict";var n=r(5),o=r(23),c=r(399),f=r(268);n({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(t){return f(c(o(this)),(function(e,r,n){if(r===t)return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},416:function(t,e,r){"use strict";var n=r(5),o=r(53),c=r(70),f=r(32),l=r(82),v=r(23),d=r(162),h=r(399),_=r(268);n({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(t){var map=v(this),e=h(map),r=c(t,arguments.length>1?arguments[1]:void 0),n=new(d(map,o("Map"))),T=l(n.set);return _(e,(function(t,e){f(T,n,r(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},417:function(t,e,r){"use strict";var n=r(5),o=r(53),c=r(70),f=r(32),l=r(82),v=r(23),d=r(162),h=r(399),_=r(268);n({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(t){var map=v(this),e=h(map),r=c(t,arguments.length>1?arguments[1]:void 0),n=new(d(map,o("Map"))),T=l(n.set);return _(e,(function(t,e){f(T,n,t,r(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},418:function(t,e,r){"use strict";var n=r(5),o=r(82),c=r(23),f=r(268);n({target:"Map",proto:!0,real:!0,forced:!0},{merge:function(t){for(var map=c(this),e=o(map.set),r=arguments.length,i=0;i<r;)f(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},419:function(t,e,r){"use strict";var n=r(5),o=r(3),c=r(23),f=r(82),l=r(399),v=r(268),d=o.TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(t){var map=c(this),e=l(map),r=arguments.length<2,n=r?void 0:arguments[1];if(f(t),v(e,(function(e,o){r?(r=!1,n=o):n=t(n,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw d("Reduce of empty map with no initial value");return n}})},420:function(t,e,r){"use strict";var n=r(5),o=r(23),c=r(70),f=r(399),l=r(268);n({target:"Map",proto:!0,real:!0,forced:!0},{some:function(t){var map=o(this),e=f(map),r=c(t,arguments.length>1?arguments[1]:void 0);return l(e,(function(t,e,n){if(r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},421:function(t,e,r){"use strict";var n=r(5),o=r(3),c=r(32),f=r(23),l=r(82),v=o.TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{update:function(t,e){var map=f(this),r=l(map.get),n=l(map.has),o=l(map.set),d=arguments.length;l(e);var h=c(n,map,t);if(!h&&d<3)throw v("Updating absent value");var _=h?c(r,map,t):l(d>2?arguments[2]:void 0)(t,map);return c(o,map,t,e(_,t,map)),map}})},423:function(t,e,r){"use strict";r(403)},424:function(t,e,r){var n=r(18)(!1);n.push([t.i,".SPLogo{height:180px;width:180px;transform:rotateY(1turn);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=n},425:function(t,e,r){var content=r(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("b9c66ec0",content,!0,{sourceMap:!1})},429:function(t,e,r){"use strict";r.r(e);r(423);var n=r(91),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"SPLogo",attrs:{alt:"Scene Packer Logo",src:"/scene-packer-module-generator/hand-truck.svg"}})}),[],!1,null,null,null);e.default=component.exports},460:function(t,e,r){"use strict";r(425)},461:function(t,e,r){var n=r(18)(!1);n.push([t.i,".FVTTLogo{height:180px;width:180px}",""]),t.exports=n},477:function(t,e,r){"use strict";r.r(e);r(460);var n=r(91),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"FVTTLogo",attrs:{alt:"Foundry VTT Logo",src:"/scene-packer-module-generator/fvtt-d20.png"}})}),[],!1,null,null,null);e.default=component.exports},525:function(t,e,r){"use strict";r.r(e);var n=r(91),o=r(124),c=r.n(o),f=r(267),l=r(467),v=r(401),d=r(520),h=r(522),_=(r(278),r(1)),T=Object(_.h)("spacer","div","v-spacer"),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",{staticClass:"logo mb-3 py-4 d-flex justify-center"},[r("FVTTLogo"),t._v(" "),r("ScenePackerLogo")],1),t._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("\n        Welcome to the Scene Packer module generator\n      ")]),t._v(" "),r("v-card-text",[r("p",[t._v("This generator will help you create a "),r("a",{attrs:{href:"https://foundryvtt.com/"}},[t._v("Foundry VTT")]),t._v(" module that is initialised with "),r("a",{attrs:{href:"https://foundryvtt.com/packages/scene-packer"}},[t._v("Scene Packer")]),t._v(".")]),t._v(" "),r("p",[t._v("Select below to create a "),r("code",[t._v("New Module")]),t._v(" with Scene Packer initialised, or a "),r("code",[t._v("Standalone Module")]),t._v(" that has no integrations.")]),t._v(" "),r("p",[t._v("\n          The generator works entirely\n          "),r("NuxtLink",{attrs:{to:"/help"}},[t._v("\n            client-side\n          ")]),t._v(", nothing is transferred to the server. Your secrets are safe with you! "),r("NuxtLink",{attrs:{to:"/help"}},[t._v("\n            Need help?\n          ")])],1),t._v(" "),r("p",[t._v("If you are looking to create a "),r("code",[t._v("Shared Compendium Module")]),t._v(" to share actors/items/journals between your worlds, select the "),r("code",[t._v("New Module")]),t._v(" option below.")]),t._v(" "),r("hr",{staticClass:"my-3"})]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"secondary",nuxt:"",to:"/standalone-module"}},[t._v("\n          Standalone module\n        ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",nuxt:"",to:"/new-module"}},[t._v("\n          New module\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{FVTTLogo:r(477).default,ScenePackerLogo:r(429).default}),c()(component,{VBtn:f.a,VCard:l.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VCol:d.a,VRow:h.a,VSpacer:T})}}]);