(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6,8],{393:function(t,e,r){var n=r(28);t.exports=function(t){return n(Map.prototype.entries,t)}},397:function(t,e,r){var content=r(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("1930a9a0",content,!0,{sourceMap:!1})},398:function(t,e,r){"use strict";var n=r(5),o=r(3),c=r(6),l=r(124),f=r(40),v=r(264),d=r(263),h=r(160),_=r(20),T=r(30),E=r(7),S=r(188),R=r(95),m=r(191);t.exports=function(t,e,r){var x=-1!==t.indexOf("Map"),I=-1!==t.indexOf("Weak"),y=x?"set":"add",w=o[t],k=w&&w.prototype,M=w,A={},N=function(t){var e=c(k[t]);f(k,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(I&&!T(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return I&&!T(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(I&&!T(t))&&e(this,0===t?0:t)}:function(t,r){return e(this,0===t?0:t,r),this})};if(l(t,!_(w)||!(I||k.forEach&&!E((function(){(new w).entries().next()})))))M=r.getConstructor(e,t,x,y),v.enable();else if(l(t,!0)){var O=new M,V=O[y](I?{}:-0,1)!=O,C=E((function(){O.has(1)})),L=S((function(t){new w(t)})),P=!I&&E((function(){for(var t=new w,e=5;e--;)t[y](e,e);return!t.has(-0)}));L||((M=e((function(t,e){h(t,k);var r=m(new w,t,M);return null!=e&&d(e,r[y],{that:r,AS_ENTRIES:x}),r}))).prototype=k,k.constructor=M),(C||P)&&(N("delete"),N("has"),x&&N("get")),(P||V)&&N(y),I&&k.clear&&delete k.clear}return A[t]=M,n({global:!0,forced:M!=w},A),R(M,t),I||r.setStrong(M,t,x),M}},399:function(t,e,r){"use strict";var n=r(39).f,o=r(84),c=r(189),l=r(73),f=r(160),v=r(263),d=r(192),h=r(190),_=r(34),T=r(264).fastKey,E=r(61),S=E.set,R=E.getterFor;t.exports={getConstructor:function(t,e,r,d){var h=t((function(t,n){f(t,E),S(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),_||(t.size=0),null!=n&&v(n,t[d],{that:t,AS_ENTRIES:r})})),E=h.prototype,m=R(e),x=function(t,e,r){var n,o,c=m(t),l=I(t,e);return l?l.value=r:(c.last=l={index:o=T(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),_?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},I=function(t,e){var r,n=m(t),o=T(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(E,{clear:function(){for(var t=m(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,_?t.size=0:this.size=0},delete:function(t){var e=this,r=m(e),n=I(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),_?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=m(this),n=l(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!I(this,t)}}),c(E,r?{get:function(t){var e=I(this,t);return e&&e.value},set:function(t,e){return x(this,0===t?0:t,e)}}:{add:function(t){return x(this,t=0===t?0:t,t)}}),_&&n(E,"size",{get:function(){return m(this).size}}),h},setStrong:function(t,e,r){var n=e+" Iterator",o=R(e),c=R(n);d(t,e,(function(t,e){S(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),h(e)}}},400:function(t,e,r){"use strict";var n=r(28),o=r(83),c=r(23);t.exports=function(){for(var t,e=c(this),r=o(e.delete),l=!0,f=0,v=arguments.length;f<v;f++)t=n(r,e,arguments[f]),l=l&&t;return!!l}},401:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},402:function(t,e,r){"use strict";r(398)("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(399))},403:function(t,e,r){"use strict";r(5)({target:"Map",proto:!0,real:!0,forced:r(59)},{deleteAll:r(400)})},404:function(t,e,r){"use strict";var n=r(5),o=r(59),c=r(23),l=r(73),f=r(393),v=r(263);n({target:"Map",proto:!0,real:!0,forced:o},{every:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0);return!v(e,(function(t,e,n){if(!r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},405:function(t,e,r){"use strict";var n=r(59),o=r(5),c=r(52),l=r(73),f=r(28),v=r(83),d=r(23),h=r(159),_=r(393),T=r(263);o({target:"Map",proto:!0,real:!0,forced:n},{filter:function(t){var map=d(this),e=_(map),r=l(t,arguments.length>1?arguments[1]:void 0),n=new(h(map,c("Map"))),o=v(n.set);return T(e,(function(t,e){r(e,t,map)&&f(o,n,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},406:function(t,e,r){"use strict";var n=r(5),o=r(59),c=r(23),l=r(73),f=r(393),v=r(263);n({target:"Map",proto:!0,real:!0,forced:o},{find:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0);return v(e,(function(t,e,n){if(r(e,t,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},407:function(t,e,r){"use strict";var n=r(5),o=r(59),c=r(23),l=r(73),f=r(393),v=r(263);n({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0);return v(e,(function(t,e,n){if(r(e,t,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},408:function(t,e,r){"use strict";var n=r(59),o=r(5),c=r(23),l=r(393),f=r(401),v=r(263);o({target:"Map",proto:!0,real:!0,forced:n},{includes:function(t){return v(l(c(this)),(function(e,r,n){if(f(r,t))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},409:function(t,e,r){"use strict";var n=r(5),o=r(59),c=r(23),l=r(393),f=r(263);n({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(t){return f(l(c(this)),(function(e,r,n){if(r===t)return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},410:function(t,e,r){"use strict";var n=r(59),o=r(5),c=r(52),l=r(73),f=r(28),v=r(83),d=r(23),h=r(159),_=r(393),T=r(263);o({target:"Map",proto:!0,real:!0,forced:n},{mapKeys:function(t){var map=d(this),e=_(map),r=l(t,arguments.length>1?arguments[1]:void 0),n=new(h(map,c("Map"))),o=v(n.set);return T(e,(function(t,e){f(o,n,r(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},411:function(t,e,r){"use strict";var n=r(59),o=r(5),c=r(52),l=r(73),f=r(28),v=r(83),d=r(23),h=r(159),_=r(393),T=r(263);o({target:"Map",proto:!0,real:!0,forced:n},{mapValues:function(t){var map=d(this),e=_(map),r=l(t,arguments.length>1?arguments[1]:void 0),n=new(h(map,c("Map"))),o=v(n.set);return T(e,(function(t,e){f(o,n,t,r(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},412:function(t,e,r){"use strict";var n=r(5),o=r(59),c=r(83),l=r(23),f=r(263);n({target:"Map",proto:!0,real:!0,forced:o},{merge:function(t){for(var map=l(this),e=c(map.set),r=arguments.length,i=0;i<r;)f(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},413:function(t,e,r){"use strict";var n=r(5),o=r(3),c=r(59),l=r(23),f=r(83),v=r(393),d=r(263),h=o.TypeError;n({target:"Map",proto:!0,real:!0,forced:c},{reduce:function(t){var map=l(this),e=v(map),r=arguments.length<2,n=r?void 0:arguments[1];if(f(t),d(e,(function(e,o){r?(r=!1,n=o):n=t(n,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw h("Reduce of empty map with no initial value");return n}})},414:function(t,e,r){"use strict";var n=r(5),o=r(59),c=r(23),l=r(73),f=r(393),v=r(263);n({target:"Map",proto:!0,real:!0,forced:o},{some:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0);return v(e,(function(t,e,n){if(r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},415:function(t,e,r){"use strict";var n=r(59),o=r(5),c=r(3),l=r(28),f=r(23),v=r(83),d=c.TypeError;o({target:"Map",proto:!0,real:!0,forced:n},{update:function(t,e){var map=f(this),r=v(map.get),n=v(map.has),o=v(map.set),c=arguments.length;v(e);var h=l(n,map,t);if(!h&&c<3)throw d("Updating absent value");var _=h?l(r,map,t):v(c>2?arguments[2]:void 0)(t,map);return l(o,map,t,e(_,t,map)),map}})},417:function(t,e,r){"use strict";r(397)},418:function(t,e,r){var n=r(18)(!1);n.push([t.i,".SPLogo{height:180px;width:180px;transform:rotateY(1turn);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=n},419:function(t,e,r){var content=r(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("b9c66ec0",content,!0,{sourceMap:!1})},423:function(t,e,r){"use strict";r.r(e);r(417);var n=r(92),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"SPLogo",attrs:{alt:"Scene Packer Logo",src:"/scene-packer-module-generator/hand-truck.svg"}})}),[],!1,null,null,null);e.default=component.exports},454:function(t,e,r){"use strict";r(419)},455:function(t,e,r){var n=r(18)(!1);n.push([t.i,".FVTTLogo{height:180px;width:180px}",""]),t.exports=n},471:function(t,e,r){"use strict";r.r(e);r(454);var n=r(92),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"FVTTLogo",attrs:{alt:"Foundry VTT Logo",src:"/scene-packer-module-generator/fvtt-d20.png"}})}),[],!1,null,null,null);e.default=component.exports},519:function(t,e,r){"use strict";r.r(e);var n=r(92),o=r(123),c=r.n(o),l=r(262),f=r(461),v=r(395),d=r(514),h=r(516),_=(r(272),r(1)),T=Object(_.h)("spacer","div","v-spacer"),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",{staticClass:"logo mb-3 py-4 d-flex justify-center"},[r("FVTTLogo"),t._v(" "),r("Logo")],1),t._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("\n        Welcome to the Scene Packer module generator\n      ")]),t._v(" "),r("v-card-text",[r("p",[t._v("This generator will help you create a "),r("a",{attrs:{href:"https://foundryvtt.com/"}},[t._v("Foundry VTT")]),t._v(" module that is initialised with "),r("a",{attrs:{href:"https://foundryvtt.com/packages/scene-packer"}},[t._v("Scene Packer")]),t._v(".")]),t._v(" "),r("p",[t._v("Select below to create a "),r("code",[t._v("New Module")]),t._v(" with Scene Packer initialised, or a "),r("code",[t._v("Standalone Module")]),t._v(" that has no integrations.")]),t._v(" "),r("p",[t._v("\n          The generator works entirely\n          "),r("NuxtLink",{attrs:{to:"/help"}},[t._v("client-side")]),t._v(", nothing is transferred to the server. Your secrets are safe with you! "),r("NuxtLink",{attrs:{to:"/help"}},[t._v("Need help?")])],1),t._v(" "),r("p",[t._v("If you are looking to create a "),r("code",[t._v("Shared Compendium Module")]),t._v(" to share actors/items/journals between your worlds, select the "),r("code",[t._v("Standalone module")]),t._v(" option below.")]),t._v(" "),r("hr",{staticClass:"my-3"})]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"secondary",nuxt:"",to:"/standalone-module"}},[t._v("\n          Standalone module\n        ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",nuxt:"",to:"/new-module"}},[t._v("\n          New module\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{FVTTLogo:r(471).default,Logo:r(423).default}),c()(component,{VBtn:l.a,VCard:f.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VCol:d.a,VRow:h.a,VSpacer:T})}}]);