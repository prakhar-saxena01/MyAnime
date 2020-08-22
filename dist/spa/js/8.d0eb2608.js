(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{7023:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.display?i("q-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"anime-episode",class:{small:t.isSmallElement,"on-hover":t.$q.platform.is.desktop}},[i("q-resize-observer",{attrs:{debounce:"200"},on:{resize:t.handleResize}}),i("a",{staticClass:"column justify-between full-height",attrs:{href:t.episodeUrl,target:"_blank","aria-label":t.aria},on:{mousedown:function(t){t.preventDefault()}}},[i("q-img",{staticClass:"full-height",attrs:{src:t.anime.cover,basic:"","spinner-color":"primary"},on:{load:function(e){return t.$emit("loaded",t.anime.title)},error:function(e){return t.$emit("loaded",t.anime.title)}}}),i("div",{staticClass:"absolute-full hoverable overlay column justify-center"},[i("q-btn",{ref:"fabSettings",staticClass:"absolute-top-left q-ma-sm",attrs:{"fab-mini":"",icon:"settings",color:"white","text-color":"primary",tabindex:"0","aria-label":t.$t("settings")},on:{click:function(e){return e.preventDefault(),t.preventFocus("fabSettings")}}},[i("q-tooltip",{attrs:{"transition-show":"jump-right","transition-hide":"jump-left",anchor:"center right",self:"center left",offset:[10,10],"content-class":["text-primary","bg-white"]}},[t._v("\n          "+t._s(t.$t("settings"))+"\n        ")]),i("q-menu",{staticClass:"z-max",attrs:{offset:[0,5]}},[i("anime-settings",{attrs:{anime:t.anime}})],1)],1),i("q-btn",{ref:"fabNext",staticClass:"absolute-top-right q-ma-sm",attrs:{fab:!t.isSmallElement,"fab-mini":t.isSmallElement,"text-color":t.anime.isLastEpisode?"positive":"accent",icon:t.anime.isLastEpisode?"library_add_check":"queue_play_next",loading:t.updating,color:"white",tabindex:"0","aria-label":t.nextLabel},on:{click:function(e){return e.preventDefault(),t.nextEpisode(e)}}},[t.anime.isLastEpisode?t._e():i("q-badge",{attrs:{color:"secondary",floating:""}},[t._v(t._s(t.anime.nextEpisode))]),i("q-tooltip",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up",anchor:"bottom left",self:"top middle",offset:[10,8],"content-class":[t.anime.isLastEpisode?"text-positive":"text-secondary","bg-white"]}},[t._v(t._s(t.nextLabel)+"\n        ")])],1),i("h1",{staticClass:"col-auto full-width q-px-xs q-mt-auto q-pt-xl"},[t._v(t._s(t.anime.title))]),i("div",{class:"column full-width q-pa-"+(t.isSmallElement?"xs":"sm")+" q-mt-auto"},[t.formattedAiringDate?i("div",{staticClass:"row justify-center full-width",class:"q-mb-"+(t.isSmallElement?"sm":"md")},[i("h2",{staticClass:"full-width fit-text"},[i("q-icon",{staticClass:"q-mr-xs",attrs:{name:"schedule"}}),t._v(" "+t._s(t.formattedAiringDate))],1)]):t._e(),i("q-chip",{staticClass:"col-auto bg-white overflow-hidden",class:{"q-pb-xs":t.anime.totalEpisodes,"q-pa-none":t.isSmallElement,"q-pa-xs":!t.isSmallElement},attrs:{size:t.isSmallElement?"sm":"md","text-color":t.anime.isLastEpisode?"positive":"secondary"}},[i("div",{staticClass:"row justify-center full-width"},[t._v("\n            "+t._s(t.$t("episode"))+" "+t._s(t.anime.nextEpisode)+"\n            "),t.anime.totalEpisodes&&!t.isSmallElement?i("span",{staticClass:"q-pl-xs"},[t._v("/ "+t._s(t.anime.totalEpisodes))]):t._e()]),t.anime.totalEpisodes?i("q-linear-progress",{staticClass:"absolute-bottom",attrs:{value:t.anime.progress,color:t.anime.isLastEpisode?"positive":"secondary"}}):t._e()],1)],1)],1)],1)],1):t._e()},a=[],n=i("1315"),r=i("2f62"),o={props:{anime:{type:Object,required:!0}},data(){return{width:0,updating:!1}},computed:{...Object(r["c"])("store",["providerByAnimeTitle"]),...Object(r["e"])("store",["typeFilter","airingStatusFilter"]),...Object(r["e"])("store",{calendarEntry(t){return t.calendar[this.anime.title]}}),provider(){return this.providerByAnimeTitle(this.anime.title)},nextLabel(){return this.$t(this.anime.isLastEpisode?"complete":"nextEpisode")},aria(){return`${this.anime.title} ${this.$t("episode")} ${this.anime.nextEpisode}`},display(){return!this.anime.isCompleted&&(this.nextEpisodeIsAired&&this.airingStatusFilter.includes("already-aired")||!this.nextEpisodeIsAired&&this.airingStatusFilter.includes("not-yet-aired"))&&this.typeFilter.includes(this.anime.type)},broadcast(){if(this.anime.broadcast&&this.anime.broadcast.weekday){const t=n["DateTime"].fromFormat(`${this.anime.broadcast.weekday} ${this.anime.broadcast.time||"23:59"}`,"EEEE HH:mm",{zone:"Asia/Tokyo"}).toLocal();if(this.anime.airingDate){const e=this.anime.airingDate.startOf("week").plus({weeks:this.anime.nextEpisode-1,days:t.weekday-1,hours:t.hour+this.provider.value.offset,minutes:t.minute});return{date:e,precision:this.anime.airingDatePrecision}}return{date:t,precision:"day"}}return null},nextCalendarAiringEpisode(){if(this.calendarEntry){const t=Math.min(...Object.keys(this.calendarEntry).map(t=>parseInt(t,10)));if(!this.anime.totalEpisodes||t<=this.anime.totalEpisodes)return t}return null},nextEpisodeCalendarAiringDate(){if(this.calendarEntry){const t=this.calendarEntry[this.anime.nextEpisode];if(t)return{date:n["DateTime"].fromISO(t).toLocal().plus({hours:this.provider.value.offset}),precision:"day"}}return null},nextEpisodeAiringDate(){if("finished airing"!==this.anime.airingStatus){if(this.nextEpisodeCalendarAiringDate)return this.nextEpisodeCalendarAiringDate;if(this.broadcast)return this.broadcast;if("not yet aired"===this.anime.airingStatus&&this.anime.airingDate&&1===this.anime.nextEpisode)return{date:this.anime.airingDate.plus(0),precision:this.anime.airingDatePrecision}}return null},nextEpisodeIsAired(){return"finished airing"===this.anime.airingStatus||this.nextCalendarAiringEpisode&&this.anime.nextEpisode<this.nextCalendarAiringEpisode||this.anime.isAired&&this.nextEpisodeAiringDate&&this.nextEpisodeAiringDate.date<=n["DateTime"].local()},formattedAiringDate(){if(this.nextEpisodeIsAired)return null;if(!this.nextEpisodeAiringDate)return"?";const{date:t,precision:e}=this.nextEpisodeAiringDate,i=n["DateTime"].local(),s=Math.ceil(Math.abs(t.diff(i,"hours").toObject().hours));if(s<=24)return t.day===i.day?t.toRelative():t.toRelativeCalendar();if("day"===e){const e=t.weekdayLong,i=t.toLocaleString(this.isSmallElement?n["DateTime"].DATE_FULL:n["DateTime"].DATE_MED);return this.isSmallElement?i:`${e} ${i}`}return"month"===e?t.toLocaleString({month:"long",year:"numeric"}):t.toLocaleString({year:"numeric"})},episodeUrl(){return this.provider.value.episodeUrl(this.anime,this.anime.nextEpisode)},isSmallElement(){return this.width<185}},mounted(){this.width=this.$el.offsetWidth,this.display||this.$emit("loaded",this.anime.title)},methods:{...Object(r["b"])("store",["updateEpisode"]),handleResize(t){t.width!==this.width&&(this.width=t.width)},nextEpisode(){this.updating=!0;const t=this.anime.isLastEpisode,e=this.anime.status;this.updateEpisode(this.anime).then(({ok:i})=>{i&&(t?this.$q.notify({message:this.$t("completed",{title:this.anime.title}),color:"positive"}):this.$q.notify({message:this.$t("updated",{title:this.anime.title,episode:this.anime.lastWatchedEpisode}),color:"primary"}),"watching"!==e&&this.$q.notify({message:this.$t("statusChanged",{title:this.anime.title,status:this.$t("status.watching")}),type:"info",html:!0}))}).finally(()=>{this.updating=!1}),this.preventFocus("fabNext")},preventFocus(t){this.$refs[t].$el.focus(),this.$refs[t].$el.blur()}}},l=o,d=i("2877"),m=i("f09f"),h=i("3980"),c=i("068f"),p=i("9c40"),u=i("05c0"),f=i("4e73"),E=i("58a8"),g=i("0016"),b=i("b047"),x=i("6b1d"),y=i("714f"),v=i("eebe"),w=i.n(v),q=Object(d["a"])(l,s,a,!1,null,null,null);e["default"]=q.exports;w()(q,"components",{QCard:m["a"],QResizeObserver:h["a"],QImg:c["a"],QBtn:p["a"],QTooltip:u["a"],QMenu:f["a"],QBadge:E["a"],QIcon:g["a"],QChip:b["a"],QLinearProgress:x["a"]}),w()(q,"directives",{Ripple:y["a"]})}}]);