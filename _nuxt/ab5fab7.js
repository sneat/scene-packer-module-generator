(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6,8],{378:function(t,e){t.exports=function(t){return Map.prototype.entries.call(t)}},381:function(t,e,r){var content=r(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1930a9a0",content,!0,{sourceMap:!1})},382:function(t,e,r){"use strict";var n=r(4),o=r(14),c=r(113),l=r(40),f=r(248),v=r(247),d=r(146),h=r(24),T=r(11),E=r(176),_=r(88),R=r(179);t.exports=function(t,e,r){var S=-1!==t.indexOf("Map"),x=-1!==t.indexOf("Weak"),y=S?"set":"add",I=o[t],m=I&&I.prototype,w=I,k={},A=function(t){var e=m[t];l(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(x&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return x&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(x&&!h(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(c(t,"function"!=typeof I||!(x||m.forEach&&!T((function(){(new I).entries().next()})))))w=r.getConstructor(e,t,S,y),f.enable();else if(c(t,!0)){var M=new w,N=M[y](x?{}:-0,1)!=M,O=T((function(){M.has(1)})),V=E((function(t){new I(t)})),C=!x&&T((function(){for(var t=new I,e=5;e--;)t[y](e,e);return!t.has(-0)}));V||((w=e((function(e,r){d(e,w,t);var n=R(new I,e,w);return null!=r&&v(r,n[y],{that:n,AS_ENTRIES:S}),n}))).prototype=m,m.constructor=w),(O||C)&&(A("delete"),A("has"),S&&A("get")),(C||N)&&A(y),x&&m.clear&&delete m.clear}return k[t]=w,n({global:!0,forced:w!=I},k),_(w,t),x||r.setStrong(w,t,S),w}},383:function(t,e,r){"use strict";var n=r(37).f,o=r(78),c=r(177),l=r(85),f=r(146),v=r(247),d=r(180),h=r(178),T=r(33),E=r(248).fastKey,_=r(58),R=_.set,S=_.getterFor;t.exports={getConstructor:function(t,e,r,d){var h=t((function(t,n){f(t,h,e),R(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),T||(t.size=0),null!=n&&v(n,t[d],{that:t,AS_ENTRIES:r})})),_=S(e),x=function(t,e,r){var n,o,c=_(t),l=y(t,e);return l?l.value=r:(c.last=l={index:o=E(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),T?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},y=function(t,e){var r,n=_(t),o=E(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(h.prototype,{clear:function(){for(var t=_(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,T?t.size=0:this.size=0},delete:function(t){var e=this,r=_(e),n=y(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),T?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=_(this),n=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!y(this,t)}}),c(h.prototype,r?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return x(this,0===t?0:t,e)}}:{add:function(t){return x(this,t=0===t?0:t,t)}}),T&&n(h.prototype,"size",{get:function(){return _(this).size}}),h},setStrong:function(t,e,r){var n=e+" Iterator",o=S(e),c=S(n);d(t,e,(function(t,e){R(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),h(e)}}},384:function(t,e,r){"use strict";var n=r(22),o=r(77);t.exports=function(){for(var t,e=n(this),r=o(e.delete),c=!0,l=0,f=arguments.length;l<f;l++)t=r.call(e,arguments[l]),c=c&&t;return!!c}},385:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},387:function(t,e,r){"use strict";var n=r(382),o=r(383);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},388:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(384);n({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},389:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(85),f=r(378),v=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{every:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return!v(e,(function(t,e,n){if(!r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},390:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(53),l=r(22),f=r(77),v=r(85),d=r(145),h=r(378),T=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{filter:function(t){var map=l(this),e=h(map),r=v(t,arguments.length>1?arguments[1]:void 0,3),n=new(d(map,c("Map"))),o=f(n.set);return T(e,(function(t,e){r(e,t,map)&&o.call(n,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},391:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(85),f=r(378),v=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{find:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return v(e,(function(t,e,n){if(r(e,t,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},392:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(85),f=r(378),v=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return v(e,(function(t,e,n){if(r(e,t,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},393:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(378),f=r(385),v=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{includes:function(t){return v(l(c(this)),(function(e,r,n){if(f(r,t))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},394:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(378),f=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(t){return f(l(c(this)),(function(e,r,n){if(r===t)return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},395:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(53),l=r(22),f=r(77),v=r(85),d=r(145),h=r(378),T=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(t){var map=l(this),e=h(map),r=v(t,arguments.length>1?arguments[1]:void 0,3),n=new(d(map,c("Map"))),o=f(n.set);return T(e,(function(t,e){o.call(n,r(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},396:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(53),l=r(22),f=r(77),v=r(85),d=r(145),h=r(378),T=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(t){var map=l(this),e=h(map),r=v(t,arguments.length>1?arguments[1]:void 0,3),n=new(d(map,c("Map"))),o=f(n.set);return T(e,(function(t,e){o.call(n,t,r(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},397:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(77),f=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{merge:function(t){for(var map=c(this),e=l(map.set),r=arguments.length,i=0;i<r;)f(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},398:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(77),f=r(378),v=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(t){var map=c(this),e=f(map),r=arguments.length<2,n=r?void 0:arguments[1];if(l(t),v(e,(function(e,o){r?(r=!1,n=o):n=t(n,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty map with no initial value");return n}})},399:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(85),f=r(378),v=r(247);n({target:"Map",proto:!0,real:!0,forced:o},{some:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return v(e,(function(t,e,n){if(r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},400:function(t,e,r){"use strict";var n=r(4),o=r(57),c=r(22),l=r(77);n({target:"Map",proto:!0,real:!0,forced:o},{update:function(t,e){var map=c(this),r=arguments.length;l(e);var n=map.has(t);if(!n&&r<3)throw TypeError("Updating absent value");var o=n?map.get(t):l(r>2?arguments[2]:void 0)(t,map);return map.set(t,e(o,t,map)),map}})},401:function(t,e,r){"use strict";r(381)},402:function(t,e,r){var n=r(17)(!1);n.push([t.i,".SPLogo{height:180px;width:180px;transform:rotateY(1turn);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=n},403:function(t,e,r){var content=r(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("b9c66ec0",content,!0,{sourceMap:!1})},406:function(t,e,r){"use strict";r.r(e);r(401);var n=r(87),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"SPLogo",attrs:{alt:"Scene Packer Logo",src:"hand-truck.svg"}})}),[],!1,null,null,null);e.default=component.exports},408:function(t,e,r){"use strict";r(403)},409:function(t,e,r){var n=r(17)(!1);n.push([t.i,".FVTTLogo{height:180px;width:180px}",""]),t.exports=n},453:function(t,e,r){"use strict";r.r(e);r(408);var n=r(87),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"FVTTLogo",attrs:{alt:"Foundry VTT Logo",src:"fvtt-d20.png"}})}),[],!1,null,null,null);e.default=component.exports},504:function(t,e,r){"use strict";r.r(e);var n=r(87),o=r(114),c=r.n(o),l=r(246),f=r(414),v=r(380),d=r(499),h=r(501),T=(r(257),r(1)),E=Object(T.g)("spacer","div","v-spacer"),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",{staticClass:"logo mb-3 py-4 d-flex justify-center"},[r("FVTTLogo"),t._v(" "),r("Logo")],1),t._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("\n        Welcome to the Scene Packer module generator\n      ")]),t._v(" "),r("v-card-text",[r("p",[t._v("This generator will help you create a "),r("a",{attrs:{href:"https://foundryvtt.com/"}},[t._v("Foundry VTT")]),t._v(" module that is initialised with "),r("a",{attrs:{href:"https://foundryvtt.com/packages/scene-packer"}},[t._v("Scene Packer")]),t._v(".")]),t._v(" "),r("p",[t._v("Select whether you have an existing module that you want to incorporate Scene Packer into, or whether it's a new module that you are creating.")]),t._v(" "),r("p",[t._v("\n          The generator works entirely\n          "),r("NuxtLink",{attrs:{to:"/help"}},[t._v("\n            client-side\n          ")]),t._v(", nothing is transferred to the server. Your secrets are safe with you! "),r("NuxtLink",{attrs:{to:"/help"}},[t._v("\n            Need help?\n          ")])],1),t._v(" "),r("hr",{staticClass:"my-3"})]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",nuxt:"",to:"/new-module"}},[t._v("\n          New module\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{FVTTLogo:r(453).default,Logo:r(406).default}),c()(component,{VBtn:l.a,VCard:f.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VCol:d.a,VRow:h.a,VSpacer:E})}}]);