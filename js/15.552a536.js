(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{AtJo:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",[e._v("Puntuación Equipos STR - "+e._s(e.title))]),r("q-table",{attrs:{title:"Puntuación Equipos STR",data:e.strScore,columns:e.columns,filter:e.filter,"row-key":"name",pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-left",fn:function(t){return[r("div",[r("q-search",{staticClass:"col-6",attrs:{"hide-underline":"",color:"secondary"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)]}},{key:"top-right",fn:function(e){return[r("q-btn",{attrs:{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullscreen}})]}}])})],1)},a=[];n._withStripped=!0;var l={name:"name",required:!0,label:"Miembro",align:"left",field:"name",sortable:!0},i={name:"guild",required:!0,label:"Gremio",align:"left",field:"guild",sortable:!0},o={name:"chexmixScore",required:!0,label:"Chexmix",align:"left",field:"chexmixScore",sortable:!0},c={name:"resistanceScore",required:!0,label:"Resistencia",align:"left",field:"resistanceScore",sortable:!0},s={name:"strProvedSquadsScore",required:!0,label:"Capturas",align:"left",field:"strProvedSquadsScore",sortable:!0},u={name:"total",required:!0,label:"Total",align:"left",field:"total",sortable:!0},d=[l,i,o,c,s,u],f={name:"STRScoreTable",props:{strScore:Array,title:String},data:function(){return{columns:d,pagination:{page:1,rowsPerPage:15},filter:""}}},p=f,S=r("KHd+"),b=Object(S["a"])(p,n,a,!1,null,null,null);b.options.__file="StrScoreTable.vue";t["a"]=b.exports},"bH/H":function(e,t,r){"use strict";var n=r("qizA"),a=r.n(n);a.a},dv4F:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{attrs:{padding:""}},[r("StrScoreTable",{attrs:{strScore:e.strScore,title:"Comunidad"}})],1)},a=[];n._withStripped=!0;var l=r("MVZn"),i=r.n(l),o=r("L2JU"),c=r("3q6B"),s=r("vUYO"),u=r("AtJo"),d=Object(o["a"])(c["b"]),f=d.mapGetters,p={name:"PageVorticeStrScore",components:{StrScoreTable:u["a"]},computed:i()({},f({strScore:s["b"].communityStrScore}))},S=p,b=(r("bH/H"),r("KHd+")),m=Object(b["a"])(S,n,a,!1,null,null,null);m.options.__file="VorticeStrScore.vue";t["default"]=m.exports},qizA:function(e,t,r){}}]);