(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{386:function(t,e,o){"use strict";(function(t){var r=o(116),n=o(29),l=(o(98),o(59),o(20),o(420),o(424),o(426),o(427),o(428),o(429),o(430),o(431),o(432),o(433),o(434),o(435),o(436),o(437),o(438),o(439),o(441),o(442),o(443),o(444),o(445),o(446),o(447),o(448),o(449),o(5),o(50),o(30),o(7),o(49),o(60),o(26),o(61),o(34),o(62),o(42),o(48),o(250),o(451)),c=o(450),d=/^[^#@:]{2,32}#[0-9]{4}$/;e.a={data:function(){var t=this;return{adventureName:"",moduleName:"",description:"",author:"",discord:"",patreon:"",url:"",packs:["Scene","Actor","JournalEntry","Item","RollTable","Macro","Playlist"],welcomeJournal:"",additionalJournals:[{value:""}],additionalMacros:[{value:""}],creaturePacks:[{value:"dnd5e.monsters"}],isFormValid:!1,processing:!1,loader:null,rules:{required:function(t){return!!t||"Required."},moduleName:function(t){return t===c(t).toLowerCase()||"All lowercase, no special characters, use hyphons instead of spaces."},discord:function(t){return!t||d.test(t)||"Invalid Discord ID."},url:function(e){return!e||t.isURL(e)||"Invalid Module URL."}}}},watch:{loader:function(){var t=this,e=this.loader;this[e]=!this[e],setTimeout((function(){return t[e]=!1}),3e3),this.loader=null}},methods:{generate:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n,c,data,d,v,m,f,h,y,k,_,w;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e.processing=!0,o.prev=1,o.next=4,fetch("https://cors-anywhere.ardittristan.workers.dev/corsproxy/?apiurl=https://github.com/sneat/starter-scene-packer/releases/latest/download/starter-scene-packer.zip");case 4:return n=o.sent,o.t0=Uint8Array,o.next=8,n.arrayBuffer();case 8:return o.t1=o.sent,c=new o.t0(o.t1),data=l.b(c),(d=JSON.parse(t.prototype.toString.call(data["module.json"],"utf8"))).author=e.author,v={name:e.author},e.patreon&&(v.patreon=e.patreon),e.discord&&(v.discord=e.discord),d.authors=[v],d.title=e.adventureName,d.description=e.description,d.name=e.moduleName,d.version="1.0.0",d.url=e.url,d.download="",d.manifest="",delete d.media,d.packs=d.packs.filter((function(t){return e.packs.includes(t.entity)})),data["module.json"]=l.a(JSON.stringify(d,null,2)),m=e.packs.includes("Actor")?["".concat(e.moduleName,".actors")].concat(Object(r.a)(e.creaturePacks.map((function(a){return a.value})))):[],f=e.packs.includes("JournalEntry")?["".concat(e.moduleName,".journals")]:[],h=e.packs.includes("Macro")?["".concat(e.moduleName,".macros")]:[],y=e.packs.includes("Playlist")?["".concat(e.moduleName,".playlists")]:[],k=t.prototype.toString.call(data["scripts/init.js"],"utf8").replace(/const adventureName = '.+';/,"const adventureName = '".concat(e.escapeSingleQuotes(e.adventureName),"';")).replace(/const moduleName = '.+';/,"const moduleName = '".concat(e.moduleName,"';")).replace(/const welcomeJournal = '.+';/,"const welcomeJournal = '".concat(e.escapeSingleQuotes(e.welcomeJournal),"';")).replace(/const additionalJournals = \[.+\];/,"const additionalJournals = ".concat(JSON.stringify(e.additionalJournals.map((function(t){return t.value}))),";")).replace(/const additionalMacros = \[.+\];/,"const additionalMacros = ".concat(JSON.stringify(e.additionalMacros.map((function(t){return t.value}))),";")).replace(/const creaturePacks = \[.+\];/,"const creaturePacks = ".concat(JSON.stringify(m),";")).replace(/const journalPacks = \[.+\];/,"const journalPacks = ".concat(JSON.stringify(f),";")).replace(/const macroPacks = \[.+\];/,"const macroPacks = ".concat(JSON.stringify(h),";")).replace(/const playlistPacks = \[.+\];/,"const playlistPacks = ".concat(JSON.stringify(y),";")),data["scripts/init.js"]=l.a(k),_=l.c(data),o.next=36,new Response(_).blob();case 36:w=o.sent,e.download(w),e.processing=!1,o.next=45;break;case 41:throw o.prev=41,o.t2=o.catch(1),e.processing=!1,o.t2;case 45:case"end":return o.stop()}}),o,null,[[1,41]])})))()},download:function(t){var e="".concat(this.moduleName,".zip");if(void 0===window.navigator.msSaveBlob){var o=URL.createObjectURL(t),r=document.createElement("a");r.style.display="none",r.setAttribute("href",o),r.setAttribute("download",e),void 0===r.download&&r.setAttribute("target","_blank"),r.click(),setTimeout((function(){URL.revokeObjectURL(o)}),200)}else window.navigator.msSaveBlob(t,e)},doSlug:function(){var t=this.moduleName||this.adventureName;this.moduleName=c(t).toLowerCase()},escapeSingleQuotes:function(t){return t.replace("'","\\'").replace("\\","\\\\")},isURL:function(t){var e;try{e=new URL(t)}catch(t){return!1}return"http:"===e.protocol||"https:"===e.protocol},addField:function(t){t.push({value:""})}}}}).call(this,o(419).Buffer)},452:function(t,e,o){"use strict";o.r(e);var r=o(386).a,n=o(87),l=o(114),c=o.n(l),d=o(246),v=o(414),m=o(380),f=o(505),h=o(499),y=o(500),k=o(169),_=o(416),w=o(501),x=o(410),J=o(502),N=o(503),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-form",{ref:"form",model:{value:t.isFormValid,callback:function(e){t.isFormValid=e},expression:"isFormValid"}},[o("v-card",{staticClass:"mb-3 py-4 d-flex justify-center"},[o("v-card-text",[o("v-row",[o("v-col",{attrs:{cols:"6"}},[o("v-text-field",{attrs:{label:"Adventure Name*",placeholder:"My cool adventure module",hint:"The name of your adventure module as seen by end users.",rules:[t.rules.required],required:""},model:{value:t.adventureName,callback:function(e){t.adventureName="string"==typeof e?e.trim():e},expression:"adventureName"}})],1),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("v-text-field",{attrs:{label:"Module Name*",placeholder:"my-cool-adventure-module",hint:"All lowercase, no special characters, use hyphons instead of spaces or periods.",rules:[t.rules.required,t.rules.moduleName],required:""},scopedSlots:t._u([{key:"append-outer",fn:function(){return[o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-icon",t._g({on:{click:t.doSlug}},r),[t._v("\n                    mdi-format-letter-case-lower\n                  ")])]}}])},[t._v("\n                Convert to lower case\n              ")])]},proxy:!0}]),model:{value:t.moduleName,callback:function(e){t.moduleName="string"==typeof e?e.trim():e},expression:"moduleName"}})],1)],1),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{label:"Module Description*",placeholder:"A short description of the adventure module. Use this field to give an overview of your adventure, or to describe when or where your module should be used.",hint:"This text can be used to describe the adventure, list contact information, or any other information you feel is important to provide.",rules:[t.rules.required],required:""},model:{value:t.description,callback:function(e){t.description="string"==typeof e?e.trim():e},expression:"description"}})],1)],1),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{label:"Author Name*",placeholder:"John Smith",hint:"The name you want people to know you by.",rules:[t.rules.required],required:""},model:{value:t.author,callback:function(e){t.author="string"==typeof e?e.trim():e},expression:"author"}})],1),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{label:"Discord ID",placeholder:"JohnSmith#1234",hint:"Optional. If you want your Discord ID to be shown in your module details.",rules:[t.rules.discord]},model:{value:t.discord,callback:function(e){t.discord="string"==typeof e?e.trim():e},expression:"discord"}})],1),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{label:"Module URL",placeholder:"https://example.com/my-cool-adventure-module",hint:"Optional. A public URL that links to more information about your adventure module.",rules:[t.rules.url]},model:{value:t.url,callback:function(e){t.url="string"==typeof e?e.trim():e},expression:"url"}})],1)],1),t._v(" "),o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("p",[t._v("\n            Include Compendium Packs:\n            "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-icon",t._g(t._b({attrs:{color:"primary"}},"v-icon",n,!1),r),[t._v("\n                  mdi-help\n                ")])]}}])},[t._v(" "),o("span",[t._v("Choose the compendium packs that you want your module to contain.")])])],1)])],1),t._v(" "),o("v-row",{staticClass:"mt-0"},[o("v-col",{staticClass:"d-flex flex-wrap pt-0",attrs:{cols:"12"}},[o("v-checkbox",{staticClass:"px-2 pt-0",attrs:{label:"Scenes",value:"Scene"},model:{value:t.packs,callback:function(e){t.packs=e},expression:"packs"}}),t._v(" "),o("v-checkbox",{staticClass:"px-2 pt-0",attrs:{label:"Actors",value:"Actor"},model:{value:t.packs,callback:function(e){t.packs=e},expression:"packs"}}),t._v(" "),o("v-checkbox",{staticClass:"px-2 pt-0",attrs:{label:"Journals",value:"JournalEntry"},model:{value:t.packs,callback:function(e){t.packs=e},expression:"packs"}}),t._v(" "),o("v-checkbox",{staticClass:"px-2 pt-0",attrs:{label:"Items",value:"Item"},model:{value:t.packs,callback:function(e){t.packs=e},expression:"packs"}}),t._v(" "),o("v-checkbox",{staticClass:"px-2 pt-0",attrs:{label:"Roll Tables",value:"RollTable"},model:{value:t.packs,callback:function(e){t.packs=e},expression:"packs"}}),t._v(" "),o("v-checkbox",{staticClass:"px-2 pt-0",attrs:{label:"Macros",value:"Macro"},model:{value:t.packs,callback:function(e){t.packs=e},expression:"packs"}}),t._v(" "),o("v-checkbox",{staticClass:"px-2 pt-0",attrs:{label:"Playlists",value:"Playlist"},model:{value:t.packs,callback:function(e){t.packs=e},expression:"packs"}})],1)],1),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Welcome Journal",placeholder:"Introduction",hint:"Optional. The name (case sensitive) of a Journal entry you want to be automatically shown to the end user when they first import your adventure module."},model:{value:t.welcomeJournal,callback:function(e){t.welcomeJournal="string"==typeof e?e.trim():e},expression:"welcomeJournal"}})],1)],1),t._v(" "),o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("p",[t._v("\n            Additional Journals to Import:\n            "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-icon",t._g(t._b({attrs:{color:"primary"}},"v-icon",n,!1),r),[t._v("\n                  mdi-help\n                ")])]}}])},[t._v(" "),o("span",[t._v("The (case sensitive) name of any additional Journal entries you want to automatically be imported when your adventure module is activated. Leave any blank that you do not need.")])])],1)])],1),t._v(" "),o("v-row",[t._l(t.additionalJournals,(function(input,e){return o("v-col",{key:"additionalJournal-"+e,staticClass:"py-0",attrs:{cols:"3"}},[o("v-text-field",{staticClass:"py-0",attrs:{label:"Journal name",placeholder:"Credits",hint:"Optional. The (case sensitive) name of a Journal entry you want to automatically be imported."},model:{value:input.value,callback:function(e){t.$set(input,"value","string"==typeof e?e.trim():e)},expression:"input.value"}})],1)})),t._v(" "),o("v-col",{attrs:{cols:"1"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-icon",t._g(t._b({attrs:{color:"primary"},on:{click:function(e){return t.addField(t.additionalJournals)}}},"v-icon",n,!1),r),[t._v("\n                mdi-plus\n              ")])]}}])},[t._v(" "),o("span",[t._v("Add another Journal to automatically import.")])])],1)],2),t._v(" "),o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("p",[t._v("\n            Additional Macros to Import:\n            "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-icon",t._g(t._b({attrs:{color:"primary"}},"v-icon",n,!1),r),[t._v("\n                  mdi-help\n                ")])]}}])},[t._v(" "),o("span",[t._v("The (case sensitive) name of any additional Macros you want to automatically be imported when your adventure module is activated. Leave any blank that you do not need.")])])],1)])],1),t._v(" "),o("v-row",[t._l(t.additionalMacros,(function(input,e){return o("v-col",{key:"additionalMacros-"+e,staticClass:"py-0",attrs:{cols:"3"}},[o("v-text-field",{staticClass:"py-0",attrs:{label:"Macro name",placeholder:"My Macro",hint:"Optional. The (case sensitive) name of a Macro you want to automatically be imported."},model:{value:input.value,callback:function(e){t.$set(input,"value","string"==typeof e?e.trim():e)},expression:"input.value"}})],1)})),t._v(" "),o("v-col",{attrs:{cols:"1"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-icon",t._g(t._b({attrs:{color:"primary"},on:{click:function(e){return t.addField(t.additionalMacros)}}},"v-icon",n,!1),r),[t._v("\n                mdi-plus\n              ")])]}}])},[t._v(" "),o("span",[t._v("Add another Macro to automatically import.")])])],1)],2),t._v(" "),o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("p",[t._v("\n            Additional Actor packs to search within:\n            "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-icon",t._g(t._b({attrs:{color:"primary"}},"v-icon",n,!1),r),[t._v("\n                  mdi-help\n                ")])]}}])},[t._v(" "),o("span",[t._v("List any additional compendium actor pack names to search within when importing and linking an actor. The list is searched progressively, with your actor pack being checked first. Empty the field if you aren't wanting D&D 5e.")])])],1)])],1),t._v(" "),o("v-row",[t._l(t.creaturePacks,(function(input,e){return o("v-col",{key:"creaturePacks-"+e,staticClass:"py-0",attrs:{cols:"3"}},[o("v-text-field",{staticClass:"py-0",attrs:{label:"Pack name",placeholder:"pf2e.pathfinder-bestiary",hint:"The compendium pack name."},model:{value:input.value,callback:function(e){t.$set(input,"value","string"==typeof e?e.trim():e)},expression:"input.value"}})],1)})),t._v(" "),o("v-col",{attrs:{cols:"1"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-icon",t._g(t._b({attrs:{color:"primary"},on:{click:function(e){return t.addField(t.creaturePacks)}}},"v-icon",n,!1),r),[t._v("\n                mdi-plus\n              ")])]}}])},[t._v(" "),o("span",[t._v("Add another actor compendium to automatically search within.")])])],1)],2)],1)],1),t._v(" "),o("v-card",{staticClass:"mb-3 py-4 d-flex justify-center"},[o("v-card-actions",[o("v-btn",{attrs:{color:"primary",disabled:!t.isFormValid||t.processing,loading:t.processing},on:{click:t.generate}},[t._v("\n        Download Module\n        "),o("v-icon",{attrs:{right:"",dark:""}},[t._v("\n          mdi-cloud-download\n        ")])],1)],1),t._v(" "),o("v-progress-linear",{attrs:{active:t.processing,indeterminate:"",absolute:"",top:""}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.b,VCheckbox:f.a,VCol:h.a,VForm:y.a,VIcon:k.a,VProgressLinear:_.a,VRow:w.a,VTextField:x.a,VTextarea:J.a,VTooltip:N.a})}}]);