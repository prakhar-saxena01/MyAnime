(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"172f":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-card",[r("q-card-section",{staticClass:"row items-center q-py-sm"},[r("div",{staticClass:"text-center text-h6"},[e._v(e._s(e.anime.title))]),r("q-space"),r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ml-md",attrs:{icon:"close",flat:"",round:"",dense:"",color:"grey"}})],1),r("q-separator"),r("q-card-section",[r("q-list",{staticClass:"column"},[r("div",{staticClass:"row"},[r("q-item-section",[r("q-item-label",{directives:[{name:"t",rawName:"v-t",value:"selectProvider",expression:"'selectProvider'"}],staticClass:"q-pt-none",attrs:{header:""}}),r("provider-select",{attrs:{value:e.provider,"options-dense":"",tooltip:!1},on:{input:e.updateProvider}})],1)],1)])],1),r("q-separator")],1)},i=[],a=r("2f62"),o={props:{anime:{type:Object,required:!0}},computed:{...Object(a["c"])("store",["providerByAnimeTitle"]),provider(){return this.providerByAnimeTitle(this.anime.title)}},methods:{...Object(a["d"])("store",["setProvider"]),updateProvider(e){this.setProvider({title:this.anime.title,provider:e})}}},c=o,n=r("2877"),l=r("f09f"),p=r("a370"),d=r("2c91"),v=r("9c40"),m=r("eb85"),u=r("1c1c"),q=r("4074"),b=r("0170"),f=r("7f67"),w=r("eebe"),h=r.n(w),C=Object(n["a"])(c,s,i,!1,null,null,null);t["default"]=C.exports;h()(C,"components",{QCard:l["a"],QCardSection:p["a"],QSpace:d["a"],QBtn:v["a"],QSeparator:m["a"],QList:u["a"],QItemSection:q["a"],QItemLabel:b["a"]}),h()(C,"directives",{ClosePopup:f["a"]})}}]);