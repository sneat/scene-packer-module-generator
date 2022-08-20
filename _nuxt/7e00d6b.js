(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{429:function(e,t,o){"use strict";(function(e){var n=o(133),r=o(18),l=o(34),c=(o(112),o(56),o(72),o(62),o(23),o(461),o(462),o(463),o(464),o(465),o(466),o(467),o(468),o(469),o(470),o(471),o(472),o(473),o(474),o(475),o(476),o(477),o(478),o(479),o(480),o(481),o(482),o(483),o(484),o(485),o(280),o(31),o(10),o(57),o(36),o(9),o(8),o(63),o(37),o(64),o(44),o(53),o(281),o(487)),d=o(486),v=/^[^#@:]{2,32}#[0-9]{4}$/,m=[{type:"Actor",name:"actors"},{type:"Adventure",name:"adventure"},{type:"Cards",name:"cards"},{type:"Item",name:"items"},{type:"JournalEntry",name:"journals"},{type:"Macro",name:"macros"},{type:"Scene",name:"maps"},{type:"Playlist",name:"playlists"},{type:"RollTable",name:"rolltables"}];t.a={props:{scenePackerIntegration:Boolean},data:function(){var e=this;return{adventureName:"",moduleName:"",description:"",author:"",discord:"",patreon:"",url:"",packs:["Actor","Cards","Item","JournalEntry","Macro","Playlist","RollTable","Scene"],welcomeJournal:"",system:"",additionalJournals:[{value:""}],additionalMacros:[{value:""}],additionalModulePacks:[{value:""}],creaturePacks:[{value:"dnd5e.monsters"}],actorLabel:"",cardLabel:"",itemLabel:"",journalLabel:"",macroLabel:"",sceneLabel:"",playlistLabel:"",adventureLabel:"",rollLabel:"",packHint:"Optional. If you want the label to be something other than the adventure name, enter it here.",isFormValid:!1,processing:!1,moduleNameAutomatic:!0,loader:null,rules:{required:function(e){return!!e||"Required."},moduleName:function(e){return e===d(e,{lower:!0,remove:/[*+~.()'"!:@]/g})||"All lowercase, no special characters, use hyphens instead of spaces."},discord:function(e){return!e||v.test(e)||"Invalid Discord ID."},url:function(t){return!t||e.isURL(t)||"Invalid Module URL."},noBackslash:function(e){return!e.includes("\\")||'Cannot use the "\\" character.'},system:function(t){return!e.requiresSystem||t&&t===d(t,{lower:!0,remove:/[*+~.()'"!:@]/g})||"Required when an Actor or Item compendium is used."}}}},computed:{includesAdventure:function(){return this.packs.includes("Adventure")},requiresSystem:function(){return this.packs.includes("Actor")||this.packs.includes("Item")}},watch:{loader:function(){var e=this,t=this.loader;this[t]=!this[t],setTimeout((function(){return e[t]=!1}),3e3),this.loader=null}},methods:{generate:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function o(){var l,d,data,v,f,h,y,k,_,w,x,N,L,S,A,C,M,P;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.processing=!0,o.prev=1,o.next=4,fetch("https://scene-packer-module-generator.herokuapp.com/https://github.com/sneat/starter-scene-packer/releases/latest/download/starter-scene-packer.zip");case 4:return l=o.sent,o.t0=Uint8Array,o.next=8,l.arrayBuffer();case 8:for(o.t1=o.sent,d=new o.t0(o.t1),data={},v=0,f=Object.entries(c.b(d));v<f.length;v++)h=Object(r.a)(f[v],2),y=h[0],k=h[1],data["".concat(t.moduleName,"/").concat(y)]=k;return(_=JSON.parse(e.prototype.toString.call(data["".concat(t.moduleName,"/module.json")],"utf8"))).author=t.author,w={name:t.author},t.patreon&&(w.patreon=t.patreon),t.discord&&(w.discord=t.discord),_.authors=[w],_.title=t.adventureName,_.description=t.description,_.id=t.moduleName,_.name=t.moduleName,_.version="1.0.0",_.url=t.url,_.download="",_.manifest="",delete _.media,_.packs=_.packs.filter((function(e){return t.packs.includes(e.entity)})),_.packs.forEach((function(e){e.label=t.adventureName,t["".concat(e.type.toLowerCase(),"Label")]&&(e.label=t["".concat(e.type.toLowerCase(),"Label")]),!t.system||"Actor"!==e.type&&"Item"!==e.type&&"Adventure"!==e.type||(e.system=t.system)})),m.forEach((function(e){t.packs.includes(e.type)||delete data["".concat(t.moduleName,"/packs/").concat(e.name,".db")]})),t.scenePackerIntegration||(delete _.dependencies,delete _.relationships),data["".concat(t.moduleName,"/module.json")]=c.a(JSON.stringify(_,null,2)),x=t.packs.includes("Actor")?["".concat(t.moduleName,".actors")].concat(Object(n.a)(t.creaturePacks.filter((function(a){return a.value})).map((function(a){return a.value})))):[],N=t.packs.includes("JournalEntry")?["".concat(t.moduleName,".journals")]:[],L=t.packs.includes("Macro")?["".concat(t.moduleName,".macros")]:[],S=t.packs.includes("Playlist")?["".concat(t.moduleName,".playlists")]:[],(A=t.additionalModulePacks.filter((function(e){return e.value})).map((function(e){return e.value}))).includes(t.moduleName)||A.unshift(t.moduleName),t.includesAdventure&&(delete _.minimumCoreVersion,delete _.compatibleCoreVersion,_.compatibility.minimum="10",delete _.name,delete _.author,delete _.dependencies),C=e.prototype.toString.call(data["".concat(t.moduleName,"/scripts/init.js")],"utf8").replace(/const adventureName = '.+';/,"const adventureName = '".concat(t.escapeSingleQuotes(t.adventureName),"';")).replace(/const moduleName = '.+';/,"const moduleName = '".concat(t.moduleName,"';")).replace(/const welcomeJournal = '.+';/,"const welcomeJournal = '".concat(t.escapeSingleQuotes(t.welcomeJournal),"';")).replace(/const additionalJournals = \[.+];/,"const additionalJournals = ".concat(JSON.stringify(t.additionalJournals.filter((function(e){return e.value})).map((function(e){return e.value}))),";")).replace(/const additionalMacros = \[.+];/,"const additionalMacros = ".concat(JSON.stringify(t.additionalMacros.filter((function(e){return e.value})).map((function(e){return e.value}))),";")).replace(/const additionalModulePacks = \[.+];/,"const additionalModulePacks = ".concat(JSON.stringify(A),";")).replace(/const creaturePacks = \[.+];/,"const creaturePacks = ".concat(JSON.stringify(x),";")).replace(/const journalPacks = \[.+];/,"const journalPacks = ".concat(JSON.stringify(N),";")).replace(/const macroPacks = \[.+];/,"const macroPacks = ".concat(JSON.stringify(L),";")).replace(/const playlistPacks = \[.+];/,"const playlistPacks = ".concat(JSON.stringify(S),";")),t.scenePackerIntegration||(C="// Module specific code goes here. See https://foundryvtt.com/article/module-development/ for help."),data["".concat(t.moduleName,"/scripts/init.js")]=c.a(C),data["".concat(t.moduleName,"/module.json")]=c.a(JSON.stringify(_,null,2)),M=c.c(data),o.next=46,new Response(M).blob();case 46:P=o.sent,t.download(P),t.processing=!1,o.next=55;break;case 51:throw o.prev=51,o.t2=o.catch(1),t.processing=!1,o.t2;case 55:case"end":return o.stop()}}),o,null,[[1,51]])})))()},download:function(e){var t="".concat(this.moduleName,".zip");if(void 0===window.navigator.msSaveBlob){var o=URL.createObjectURL(e),n=document.createElement("a");n.style.display="none",n.setAttribute("href",o),n.setAttribute("download",t),void 0===n.download&&n.setAttribute("target","_blank"),n.click(),setTimeout((function(){URL.revokeObjectURL(o)}),200)}else window.navigator.msSaveBlob(e,t)},generateModuleName:function(){this.moduleNameAutomatic&&this.doSlug(null,!0)},markModuleNameAsManual:function(){this.moduleNameAutomatic=!1},doSlug:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=t?this.adventureName:this.moduleName||this.adventureName;this.moduleName=d(o,{lower:!0,remove:/[*+~.()'"!:@]/g})},escapeSingleQuotes:function(e){return e.replace("'","\\'")},isURL:function(e){var t;try{t=new URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol},addField:function(e){e.push({value:""})}}}}).call(this,o(460).Buffer)},457:function(e,t,o){"use strict";o.r(t);var n=o(429).a,r=o(91),l=o(131),c=o.n(l),d=o(564),v=o(210),m=o(496),f=o(428),h=o(562),y=o(552),k=o(553),_=o(188),w=o(498),x=o(554),N=o(490),L=o(555),S=o(556),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-form",{ref:"form",model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[o("v-card",{staticClass:"mb-3 py-4 d-flex justify-center"},[o("v-card-text",[o("v-row",[o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-text-field",{attrs:{label:"Adventure Name*",placeholder:"My cool adventure module",hint:"The name of your adventure module as seen by end users.",rules:[e.rules.required,e.rules.noBackslash],required:""},on:{keyup:e.generateModuleName},model:{value:e.adventureName,callback:function(t){e.adventureName="string"==typeof t?t.trim():t},expression:"adventureName"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-text-field",{attrs:{label:"Module Name*",placeholder:"my-cool-adventure-module",hint:"All lowercase, no special characters, use hyphens instead of spaces or periods.",rules:[e.rules.required,e.rules.moduleName],required:""},on:{keyup:e.markModuleNameAsManual},scopedSlots:e._u([{key:"append-outer",fn:function(){return[o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[o("v-icon",e._g({on:{click:e.doSlug}},n),[e._v("\n                    mdi-format-letter-case-lower\n                  ")])]}}])},[e._v("\n                Convert to lower case\n              ")])]},proxy:!0}]),model:{value:e.moduleName,callback:function(t){e.moduleName="string"==typeof t?t.trim():t},expression:"moduleName"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{label:"Module Description*",placeholder:"A short description of the adventure module. Use this field to give an overview of your adventure, or to describe when or where your module should be used.",hint:"This text can be used to describe the adventure, list contact information, or any other information you feel is important to provide.",rules:[e.rules.required],required:""},model:{value:e.description,callback:function(t){e.description="string"==typeof t?t.trim():t},expression:"description"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-text-field",{attrs:{label:"Author Name*",placeholder:"John Smith",hint:"The name you want people to know you by.",rules:[e.rules.required],required:""},model:{value:e.author,callback:function(t){e.author="string"==typeof t?t.trim():t},expression:"author"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-text-field",{attrs:{label:"Discord ID",placeholder:"JohnSmith#1234",hint:"Optional. If you want your Discord ID to be shown in your module details.",rules:[e.rules.discord]},model:{value:e.discord,callback:function(t){e.discord="string"==typeof t?t.trim():t},expression:"discord"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-text-field",{attrs:{label:"Module URL",placeholder:"https://example.com/my-cool-adventure-module",hint:"Optional. A public URL that links to more information about your adventure module.",rules:[e.rules.url]},model:{value:e.url,callback:function(t){e.url="string"==typeof t?t.trim():t},expression:"url"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("p",[e._v("\n            Include Compendium Packs:\n            "),o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"}},"v-icon",r,!1),n),[e._v("\n                  mdi-help\n                ")])]}}])},[e._v(" "),o("span",[e._v("Choose the compendium packs that you want your module to contain.\n                You can specify a different label for each pack (the default value is the name of the module).")])])],1)])],1),e._v(" "),o("v-row",[o("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[o("v-checkbox",{attrs:{value:"Scene"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-text-field",{attrs:{label:"Scenes",placeholder:e.adventureName,hint:e.packHint},model:{value:e.sceneLabel,callback:function(t){e.sceneLabel="string"==typeof t?t.trim():t},expression:"sceneLabel"}})],1),e._v(" "),o("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[o("v-checkbox",{attrs:{value:"Actor"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-text-field",{attrs:{label:"Actors",placeholder:e.adventureName,hint:e.packHint},model:{value:e.actorLabel,callback:function(t){e.actorLabel="string"==typeof t?t.trim():t},expression:"actorLabel"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[o("v-checkbox",{attrs:{value:"JournalEntry"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-text-field",{attrs:{label:"Journals",placeholder:e.adventureName,hint:e.packHint},model:{value:e.journalLabel,callback:function(t){e.journalLabel="string"==typeof t?t.trim():t},expression:"journalLabel"}})],1),e._v(" "),o("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[o("v-checkbox",{attrs:{value:"Item"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-text-field",{attrs:{label:"Items",placeholder:e.adventureName,hint:e.packHint},model:{value:e.itemLabel,callback:function(t){e.itemLabel="string"==typeof t?t.trim():t},expression:"itemLabel"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[o("v-checkbox",{attrs:{value:"RollTable"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-text-field",{attrs:{label:"Roll Tables",placeholder:e.adventureName,hint:e.packHint},model:{value:e.rollLabel,callback:function(t){e.rollLabel="string"==typeof t?t.trim():t},expression:"rollLabel"}})],1),e._v(" "),o("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[o("v-checkbox",{attrs:{value:"Macro"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-text-field",{attrs:{label:"Macros",placeholder:e.adventureName,hint:e.packHint},model:{value:e.macroLabel,callback:function(t){e.macroLabel="string"==typeof t?t.trim():t},expression:"macroLabel"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[o("v-checkbox",{attrs:{value:"Card"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-text-field",{attrs:{label:"Cards",placeholder:e.adventureName,hint:e.packHint},model:{value:e.cardLabel,callback:function(t){e.cardLabel="string"==typeof t?t.trim():t},expression:"cardLabel"}})],1),e._v(" "),o("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[o("v-checkbox",{attrs:{value:"Playlist"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-text-field",{attrs:{label:"Playlists",placeholder:e.adventureName,hint:e.packHint},model:{value:e.playlistLabel,callback:function(t){e.playlistLabel="string"==typeof t?t.trim():t},expression:"playlistLabel"}})],1),e._v(" "),o("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[o("v-checkbox",{attrs:{value:"Adventure"},model:{value:e.packs,callback:function(t){e.packs=t},expression:"packs"}}),e._v(" "),o("v-text-field",{attrs:{label:"Adventure",placeholder:e.adventureName,hint:e.packHint},model:{value:e.adventureLabel,callback:function(t){e.adventureLabel="string"==typeof t?t.trim():t},expression:"adventureLabel"}})],1)],1),e._v(" "),e.includesAdventure?o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("v-alert",{attrs:{outlined:"",dense:"",type:"warning"}},[o("code",[e._v("Adventure packs")]),e._v(" are only supported in Foundry VTT version 10 and above. Selecting\n            an "),o("code",[e._v("Adventure pack")]),e._v(" pack will set your module's minimum supported version to version 10.\n          ")])],1)],1):e._e(),e._v(" "),e.requiresSystem?o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("p",[e._v("\n            Foundry VTT version 10 and above now requires the "),o("a",{attrs:{href:"https://foundryvtt.com/packages/systems",target:"_blank"}},[e._v("system")]),e._v("\n            to be specified for Actor and Item compendium packs.\n            "),o("v-text-field",{attrs:{label:"System*",placeholder:"dnd5e",hint:"Must be the id format, not the label of the system (e.g. pf2e rather than Pathfinder Second Edition).",rules:[e.rules.system]},model:{value:e.system,callback:function(t){e.system="string"==typeof t?t.trim():t},expression:"system"}})],1)])],1):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Welcome Journal",placeholder:"Introduction",hint:"Optional. The name (case sensitive) of a Journal entry you want to be automatically shown to the end user when they first import your adventure module."},model:{value:e.welcomeJournal,callback:function(t){e.welcomeJournal="string"==typeof t?t.trim():t},expression:"welcomeJournal"}})],1)],1):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("p",[e._v("\n            Additional Journals to Import:\n            "),o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"}},"v-icon",r,!1),n),[e._v("\n                  mdi-help\n                ")])]}}],null,!1,1433155604)},[e._v(" "),o("span",[e._v("The (case sensitive) name of any additional Journal entries you want to automatically be imported when your adventure module is activated. Leave any blank that you do not need.")])])],1)])],1):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[e._l(e.additionalJournals,(function(input,t){return o("v-col",{key:"additionalJournal-"+t,staticClass:"py-0",attrs:{cols:"10",md:"3"}},[o("v-text-field",{staticClass:"py-0",attrs:{label:"Journal name",placeholder:"Credits",hint:"Optional. The (case sensitive) name of a Journal entry you want to automatically be imported."},model:{value:input.value,callback:function(t){e.$set(input,"value","string"==typeof t?t.trim():t)},expression:"input.value"}})],1)})),e._v(" "),o("v-col",{attrs:{cols:"1"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"},on:{click:function(t){return e.addField(e.additionalJournals)}}},"v-icon",r,!1),n),[e._v("\n                mdi-plus\n              ")])]}}],null,!1,371560308)},[e._v(" "),o("span",[e._v("Add another Journal to automatically import.")])])],1)],2):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("p",[e._v("\n            Additional Macros to Import:\n            "),o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"}},"v-icon",r,!1),n),[e._v("\n                  mdi-help\n                ")])]}}],null,!1,1433155604)},[e._v(" "),o("span",[e._v("The (case sensitive) name of any additional Macros you want to automatically be imported when your adventure module is activated. Leave any blank that you do not need.")])])],1)])],1):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[e._l(e.additionalMacros,(function(input,t){return o("v-col",{key:"additionalMacros-"+t,staticClass:"py-0",attrs:{cols:"10",md:"3"}},[o("v-text-field",{staticClass:"py-0",attrs:{label:"Macro name",placeholder:"My Macro",hint:"Optional. The (case sensitive) name of a Macro you want to automatically be imported."},model:{value:input.value,callback:function(t){e.$set(input,"value","string"==typeof t?t.trim():t)},expression:"input.value"}})],1)})),e._v(" "),o("v-col",{attrs:{cols:"1"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"},on:{click:function(t){return e.addField(e.additionalMacros)}}},"v-icon",r,!1),n),[e._v("\n                mdi-plus\n              ")])]}}],null,!1,675013639)},[e._v(" "),o("span",[e._v("Add another Macro to automatically import.")])])],1)],2):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("p",[e._v("\n            Additional Actor packs to search within:\n            "),o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"}},"v-icon",r,!1),n),[e._v("\n                  mdi-help\n                ")])]}}],null,!1,1433155604)},[e._v(" "),o("span",[e._v("List any additional compendium actor pack names to search within when importing and linking an actor. The list is searched progressively, with your actor pack being checked first. Empty the field if you aren't wanting D&D 5e.")])])],1)])],1):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[e._l(e.creaturePacks,(function(input,t){return o("v-col",{key:"creaturePacks-"+t,staticClass:"py-0",attrs:{cols:"10",md:"3"}},[o("v-text-field",{staticClass:"py-0",attrs:{label:"Pack name",placeholder:"pf2e.pathfinder-bestiary",hint:"The compendium pack name."},model:{value:input.value,callback:function(t){e.$set(input,"value","string"==typeof t?t.trim():t)},expression:"input.value"}})],1)})),e._v(" "),o("v-col",{attrs:{cols:"1"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"},on:{click:function(t){return e.addField(e.creaturePacks)}}},"v-icon",r,!1),n),[e._v("\n                mdi-plus\n              ")])]}}],null,!1,4177394966)},[e._v(" "),o("span",[e._v("Add another actor compendium to automatically search within.")])])],1)],2):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[o("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[o("p",[e._v("\n            List of Modules or Systems whose compendium packs can be searched within:\n            "),o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"}},"v-icon",r,!1),n),[e._v("\n                  mdi-help\n                ")])]}}],null,!1,1433155604)},[e._v(" "),o("span",[e._v("List any additional Module or System identifier to search within when searching for entities. The list is searched progressively, with your pack and any packs listed above being checked first.")])])],1)])],1):e._e(),e._v(" "),e.scenePackerIntegration?o("v-row",[e._l(e.additionalModulePacks,(function(input,t){return o("v-col",{key:"additionalModulePacks-"+t,staticClass:"py-0",attrs:{cols:"10",md:"3"}},[o("v-text-field",{staticClass:"py-0",attrs:{label:"Module name",placeholder:"dnd5e",hint:"The module or system identifier."},model:{value:input.value,callback:function(t){e.$set(input,"value","string"==typeof t?t.trim():t)},expression:"input.value"}})],1)})),e._v(" "),o("v-col",{attrs:{cols:"1"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[o("v-icon",e._g(e._b({attrs:{color:"primary"},on:{click:function(t){return e.addField(e.additionalModulePacks)}}},"v-icon",r,!1),n),[e._v("\n                mdi-plus\n              ")])]}}],null,!1,3810974326)},[e._v(" "),o("span",[e._v("Add another module to automatically search within.")])])],1)],2):e._e()],1)],1),e._v(" "),o("v-card",{staticClass:"mb-3 py-4 d-flex justify-center"},[o("v-card-actions",[o("v-btn",{attrs:{color:"primary",disabled:!e.isFormValid||e.processing,loading:e.processing},on:{click:e.generate}},[e._v("\n        Download Module\n        "),o("v-icon",{attrs:{right:"",dark:""}},[e._v("\n          mdi-cloud-download\n        ")])],1)],1),e._v(" "),o("v-progress-linear",{attrs:{active:e.processing,indeterminate:"",absolute:"",top:""}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VAlert:d.a,VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VCheckbox:h.a,VCol:y.a,VForm:k.a,VIcon:_.a,VProgressLinear:w.a,VRow:x.a,VTextField:N.a,VTextarea:L.a,VTooltip:S.a})}}]);