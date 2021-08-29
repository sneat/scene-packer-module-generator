(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{381:function(e,t,o){"use strict";(function(e){var n=o(116),r=o(29),l=(o(98),o(58),o(20),o(412),o(413),o(414),o(415),o(416),o(417),o(418),o(419),o(420),o(421),o(422),o(423),o(424),o(425),o(426),o(427),o(428),o(429),o(430),o(431),o(432),o(433),o(434),o(435),o(436),o(5),o(50),o(30),o(8),o(49),o(60),o(7),o(26),o(61),o(34),o(62),o(41),o(48),o(249),o(438)),c=o(437),d=/^[^#@:]{2,32}#[0-9]{4}$/;t.a={props:{scenePackerIntegration:Boolean},data:function(){var e=this;return{adventureName:"",moduleName:"",description:"",author:"",discord:"",patreon:"",url:"",packs:["Scene","Actor","JournalEntry","Item","RollTable","Macro","Playlist"],welcomeJournal:"",additionalJournals:[{value:""}],additionalMacros:[{value:""}],creaturePacks:[{value:"dnd5e.monsters"}],isFormValid:!1,processing:!1,loader:null,rules:{required:function(e){return!!e||"Required."},moduleName:function(e){return e===c(e).toLowerCase()||"All lowercase, no special characters, use hyphons instead of spaces."},discord:function(e){return!e||d.test(e)||"Invalid Discord ID."},url:function(t){return!t||e.isURL(t)||"Invalid Module URL."}}}},watch:{loader:function(){var e=this,t=this.loader;this[t]=!this[t],setTimeout((function(){return e[t]=!1}),3e3),this.loader=null}},methods:{generate:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r,c,data,d,v,m,f,h,y,k,_,w;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.processing=!0,o.prev=1,o.next=4,fetch("https://scene-packer-module-generator.herokuapp.com/https://github.com/sneat/starter-scene-packer/releases/latest/download/starter-scene-packer.zip");case 4:return r=o.sent,o.t0=Uint8Array,o.next=8,r.arrayBuffer();case 8:return o.t1=o.sent,c=new o.t0(o.t1),data=l.b(c),(d=JSON.parse(e.prototype.toString.call(data["module.json"],"utf8"))).author=t.author,v={name:t.author},t.patreon&&(v.patreon=t.patreon),t.discord&&(v.discord=t.discord),d.authors=[v],d.title=t.adventureName,d.description=t.description,d.name=t.moduleName,d.version="1.0.0",d.url=t.url,d.download="",d.manifest="",delete d.media,d.packs=d.packs.filter((function(e){return t.packs.includes(e.entity)})),d.packs.forEach((function(e){e.label=t.adventureName})),t.scenePackerIntegration||(d.dependencies=[]),data["module.json"]=l.a(JSON.stringify(d,null,2)),m=t.packs.includes("Actor")?["".concat(t.moduleName,".actors")].concat(Object(n.a)(t.creaturePacks.map((function(a){return a.value})))):[],f=t.packs.includes("JournalEntry")?["".concat(t.moduleName,".journals")]:[],h=t.packs.includes("Macro")?["".concat(t.moduleName,".macros")]:[],y=t.packs.includes("Playlist")?["".concat(t.moduleName,".playlists")]:[],k=e.prototype.toString.call(data["scripts/init.js"],"utf8").replace(/const adventureName = '.+';/,"const adventureName = '".concat(t.escapeSingleQuotes(t.adventureName),"';")).replace(/const moduleName = '.+';/,"const moduleName = '".concat(t.moduleName,"';")).replace(/const welcomeJournal = '.+';/,"const welcomeJournal = '".concat(t.escapeSingleQuotes(t.welcomeJournal),"';")).replace(/const additionalJournals = \[.+\];/,"const additionalJournals = ".concat(JSON.stringify(t.additionalJournals.filter((function(e){return e.value})).map((function(e){return e.value}))),";")).replace(/const additionalMacros = \[.+\];/,"const additionalMacros = ".concat(JSON.stringify(t.additionalMacros.filter((function(e){return e.value})).map((function(e){return e.value}))),";")).replace(/const creaturePacks = \[.+\];/,"const creaturePacks = ".concat(JSON.stringify(m),";")).replace(/const journalPacks = \[.+\];/,"const journalPacks = ".concat(JSON.stringify(f),";")).replace(/const macroPacks = \[.+\];/,"const macroPacks = ".concat(JSON.stringify(h),";")).replace(/const playlistPacks = \[.+\];/,"const playlistPacks = ".concat(JSON.stringify(y),";")),t.scenePackerIntegration||(k="// Module specific code goes here. See https://foundryvtt.com/article/module-development/ for help."),data["scripts/init.js"]=l.a(k),_=l.c(data),o.next=39,new Response(_).blob();case 39:w=o.sent,t.download(w),t.processing=!1,o.next=48;break;case 44:throw o.prev=44,o.t2=o.catch(1),t.processing=!1,o.t2;case 48:case"end":return o.stop()}}),o,null,[[1,44]])})))()},download:function(e){var t="".concat(this.moduleName,".zip");if(void 0===window.navigator.msSaveBlob){var o=URL.createObjectURL(e),n=document.createElement("a");n.style.display="none",n.setAttribute("href",o),n.setAttribute("download",t),void 0===n.download&&n.setAttribute("target","_blank"),n.click(),setTimeout((function(){URL.revokeObjectURL(o)}),200)}else window.navigator.msSaveBlob(e,t)},doSlug:function(){var e=this.moduleName||this.adventureName;this.moduleName=c(e).toLowerCase()},escapeSingleQuotes:function(e){return e.replace("'","\\'").replace("\\","\\\\")},isURL:function(e){var t;try{t=new URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol},addField:function(e){e.push({value:""})}}}}).call(this,o(411).Buffer)},407:function(e,t,o){"use strict";o.r(t);var n=o(381).a,r=o(86),l=o(113),c=o.n(l),d=o(246),v=o(446),m=o(380),f=o(505),h=o(499),y=o(500),k=o(169),_=o(448),w=o(501),x=o(441),N=o(502),J=o(503),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-form",{ref:"form",model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[o("v-card",{staticClass:"mb-3 py-4 d-flex justify-center"},[o("v-card-text",[o("v-row",[o("v-col",{attrs:{cols:"6"}},[o("v-text-field",{attrs:{label:"Adventure Name*",placeholder:"My cool adventure module",hint:"The name of your adventure module as seen by end users.",rules:[e.rules.required],required:""},model:{value:e.adventureName,callback:function(t){e.adventureName="string"==typeof t?t.trim():t},expression:"adventureName"}})],1),e._v(" "),o("v-col",{attrs:{cols:"6"}},[o("v-text-field",{attrs:{label:"Module Name*",placeholder:"my-cool-adventure-module",hint:"All lowercase, no special characters, use hyphons instead of spaces or periods.",rules:[e.rules.required,e.rules.moduleName],required:""},scopedSlots:e._u([{key:"append-outer",fn:function(){return[o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[o("v-icon",e._g({on:{click:e.doSlug}},n),[e._v("\n                    mdi-format-letter-case-lower\n                  ")])]}}])},[e._v("\n                Convert to lower case\n              ")])]},proxy:!0}]),model:{value:e.moduleName,callback:function(t){e.moduleName="string"==typeof t?t.trim():t},expression:"moduleName"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{label:"Module Description*",placeholder:"A short description of the adventure module. Use this field to give an overview of your adventure, or to describe when or where your module should be used.",hint:"This text can be used to describe the adventure, list contact information, or any other information you feel is important to provide.",rules:[e.rules.required],required:""},model:{value:e.description,callback:function(t){e.description="string"==typeof t?t.trim():t},expression:"description"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{label:"Author Name*",placeholder:"John Smith",hint:"The name you want people to know you by.",rules:[e.rules.required],required:""},model:{value:e.author,callback:function(t){e.author="string"==typeof t?t.trim():t},expression:"author"}})],1),e._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{label:"Discord ID",placeholder:"JohnSmith#1234",hint:"Optional. If you want your Discord ID to be shown in your module details.",rules:[e.rules.discord]},model:{value:e.discord,callback:function(t){e.discord="string"==typeof t?t.trim():t},expression:"discord"}})],1),e._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-text-field",{attrs:{label:"Module URL",placeholder:"https://example.com/my-cool-adventure-module",hint:"Optional. A public URL that links to more information about your adventure module.",rules:[e.rules.url]},model:{value:e.url,callback:function(t){e.url="string"==typeof t?t.trim():t},expression:"url"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("p",[e._v("\n            Include Compendium Packs:\n            "),o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"}},"v-icon",r,!1),n),[e._v("\n                  mdi-help\n                ")])]}}])},[e._v(" "),o("span",[e._v("Choose the compendium packs that you want your module to contain.")])])],1)])],1),e._v(" "),o("v-row",{staticClass:"mt-0"},[o("v-col",{staticClass:"d-flex flex-wrap pt-0",attrs:{cols:"12"}},[o("v-checkbox",{staticClass:"px-2 pt-0",attrs:{label:"Scenes",value:"Scene"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-checkbox",{staticClass:"px-2 pt-0",attrs:{label:"Actors",value:"Actor"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-checkbox",{staticClass:"px-2 pt-0",attrs:{label:"Journals",value:"JournalEntry"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-checkbox",{staticClass:"px-2 pt-0",attrs:{label:"Items",value:"Item"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-checkbox",{staticClass:"px-2 pt-0",attrs:{label:"Roll Tables",value:"RollTable"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-checkbox",{staticClass:"px-2 pt-0",attrs:{label:"Macros",value:"Macro"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-checkbox",{staticClass:"px-2 pt-0",attrs:{label:"Playlists",value:"Playlist"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}})],1)],1),e._v(" "),e.scenePackerIntegration?o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Welcome Journal",placeholder:"Introduction",hint:"Optional. The name (case sensitive) of a Journal entry you want to be automatically shown to the end user when they first import your adventure module."},model:{value:e.welcomeJournal,callback:function(t){e.welcomeJournal="string"==typeof t?t.trim():t},expression:"welcomeJournal"}})],1)],1):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("p",[e._v("\n            Additional Journals to Import:\n            "),o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"}},"v-icon",r,!1),n),[e._v("\n                  mdi-help\n                ")])]}}],null,!1,1433155604)},[e._v(" "),o("span",[e._v("The (case sensitive) name of any additional Journal entries you want to automatically be imported when your adventure module is activated. Leave any blank that you do not need.")])])],1)])],1):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[e._l(e.additionalJournals,(function(input,t){return o("v-col",{key:"additionalJournal-"+t,staticClass:"py-0",attrs:{cols:"3"}},[o("v-text-field",{staticClass:"py-0",attrs:{label:"Journal name",placeholder:"Credits",hint:"Optional. The (case sensitive) name of a Journal entry you want to automatically be imported."},model:{value:input.value,callback:function(t){e.$set(input,"value","string"==typeof t?t.trim():t)},expression:"input.value"}})],1)})),e._v(" "),o("v-col",{attrs:{cols:"1"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"},on:{click:function(t){return e.addField(e.additionalJournals)}}},"v-icon",r,!1),n),[e._v("\n                mdi-plus\n              ")])]}}],null,!1,371560308)},[e._v(" "),o("span",[e._v("Add another Journal to automatically import.")])])],1)],2):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("p",[e._v("\n            Additional Macros to Import:\n            "),o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"}},"v-icon",r,!1),n),[e._v("\n                  mdi-help\n                ")])]}}],null,!1,1433155604)},[e._v(" "),o("span",[e._v("The (case sensitive) name of any additional Macros you want to automatically be imported when your adventure module is activated. Leave any blank that you do not need.")])])],1)])],1):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[e._l(e.additionalMacros,(function(input,t){return o("v-col",{key:"additionalMacros-"+t,staticClass:"py-0",attrs:{cols:"3"}},[o("v-text-field",{staticClass:"py-0",attrs:{label:"Macro name",placeholder:"My Macro",hint:"Optional. The (case sensitive) name of a Macro you want to automatically be imported."},model:{value:input.value,callback:function(t){e.$set(input,"value","string"==typeof t?t.trim():t)},expression:"input.value"}})],1)})),e._v(" "),o("v-col",{attrs:{cols:"1"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"},on:{click:function(t){return e.addField(e.additionalMacros)}}},"v-icon",r,!1),n),[e._v("\n                mdi-plus\n              ")])]}}],null,!1,675013639)},[e._v(" "),o("span",[e._v("Add another Macro to automatically import.")])])],1)],2):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("p",[e._v("\n            Additional Actor packs to search within:\n            "),o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"}},"v-icon",r,!1),n),[e._v("\n                  mdi-help\n                ")])]}}],null,!1,1433155604)},[e._v(" "),o("span",[e._v("List any additional compendium actor pack names to search within when importing and linking an actor. The list is searched progressively, with your actor pack being checked first. Empty the field if you aren't wanting D&D 5e.")])])],1)])],1):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[e._l(e.creaturePacks,(function(input,t){return o("v-col",{key:"creaturePacks-"+t,staticClass:"py-0",attrs:{cols:"3"}},[o("v-text-field",{staticClass:"py-0",attrs:{label:"Pack name",placeholder:"pf2e.pathfinder-bestiary",hint:"The compendium pack name."},model:{value:input.value,callback:function(t){e.$set(input,"value","string"==typeof t?t.trim():t)},expression:"input.value"}})],1)})),e._v(" "),o("v-col",{attrs:{cols:"1"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"},on:{click:function(t){return e.addField(e.creaturePacks)}}},"v-icon",r,!1),n),[e._v("\n                mdi-plus\n              ")])]}}],null,!1,4177394966)},[e._v(" "),o("span",[e._v("Add another actor compendium to automatically search within.")])])],1)],2):e._e()],1)],1),e._v(" "),o("v-card",{staticClass:"mb-3 py-4 d-flex justify-center"},[o("v-card-actions",[o("v-btn",{attrs:{color:"primary",disabled:!e.isFormValid||e.processing,loading:e.processing},on:{click:e.generate}},[e._v("\n        Download Module\n        "),o("v-icon",{attrs:{right:"",dark:""}},[e._v("\n          mdi-cloud-download\n        ")])],1)],1),e._v(" "),o("v-progress-linear",{attrs:{active:e.processing,indeterminate:"",absolute:"",top:""}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.b,VCheckbox:f.a,VCol:h.a,VForm:y.a,VIcon:k.a,VProgressLinear:_.a,VRow:w.a,VTextField:x.a,VTextarea:N.a,VTooltip:J.a})}}]);