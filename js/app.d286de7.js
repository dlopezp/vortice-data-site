(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{0:function(e,t){},"07Dp":function(e,t,n){"use strict";n.d(t,"b",function(){return u});var r=n("a/Iw"),a=n("pG75"),u={currentSession:"currentSession",login:"login",logout:"logout",completeNewPassword:"completeNewPassword"},i=function(e){var t=e.commit;return r["b"].currentSession().then(function(e){return t(a["b"].ADD_USER,{user:e}),e}).catch(function(){return t(a["b"].ADD_USER,{user:null})})},o=function(e,t){var n=e.dispatch,a=t.username,i=t.password;return r["b"].signIn(a,i).then(function(e){return e.challengeName?e:n(u.currentSession)})},s=function(e){var t=e.commit;return r["b"].signOut().then(function(e){t(a["b"].ADD_USER,{user:null})})},c=function(e,t){var n=e.dispatch,a=t.user,i=t.password;return r["b"].completeNewPassword(a,i).then(function(){return n(u.currentSession)})};t["a"]={currentSession:i,login:o,logout:s,completeNewPassword:c}},1:function(e,t,n){e.exports=n("LzkT")},"3q6B":function(e,t,n){"use strict";var r={users:{},units:{},metas:{},strProvenSquads:{},statsBase:{},guilds:{},players:{},playerUnits:{},playerMetas:{},platoonRequirements:{},platoons:{}},a=n("vUYO"),u=n("cfRH"),i=n("SJxL");n.d(t,"b",function(){return o});var o="vortice";t["a"]={namespaced:!0,name:o,state:r,getters:a["a"],mutations:u["a"],actions:i["a"],mutationsTypes:u["b"]}},"6N+0":function(e,t,n){"use strict";n.d(t,"b",function(){return r});var r={currentUser:"currentUser",username:"username",roles:"roles"},a=function(e){return e.user},u=function(e){return e.user&&e.user.idToken.payload["cognito:username"]},i=function(e){return e.user?JSON.parse(e.user.idToken.payload["custom:role"]):null};t["a"]={currentUser:a,username:u,roles:i}},Hl11:function(e,t,n){},LzkT:function(e,t,n){"use strict";n.r(t);n("rGqo"),n("oRQL"),n("0UuB"),n("Hl11"),n("fm0S");var r=n("Kw5r"),a=n("6E/o"),u=n("cFFF"),i=n("IEC1"),o=n("zxLP"),s=n("Rqni"),c=n("MqH6"),l=n("8wy3"),d=n("zmdN"),f=n("SC7v"),h=n("UrUt"),p=n("EYBb"),m=n("HlXa"),g=n("UG+o"),v=n("uNnR"),y=n("fUOT"),S=n("kci6"),G=n("xgT5"),b=n("YqlJ"),E=n("Ztd7"),B=n("ezih"),C=n("U/5N"),I=n("YYYh"),D=n("WTFv"),R=n("rINx"),w=n("lUGP"),T=n("wfli"),U=n("vJud"),P=n("dkar"),O=n("ZYCo"),A=n("3CNK"),M=n("OggR"),k=n("eelU"),q=n("XYut"),N=n("MFSH"),Q=n("bduK"),j=n("nlhR"),L=n("Cfpk"),K=n("A4jm"),x=n("S/Rk"),_=n("CVJq"),H=n("UlvI"),Y=n("FSbK"),z=n("Ezub"),V=n("Z4Cl"),J=n("qaCD");r["a"].use(a["a"],{config:{},components:{QLayout:u["a"],QLayoutHeader:i["a"],QLayoutDrawer:o["a"],QPageContainer:s["a"],QPage:c["a"],QToolbar:l["a"],QToolbarTitle:d["a"],QBtn:f["a"],QIcon:h["a"],QList:p["a"],QListHeader:m["a"],QItem:g["a"],QItemMain:v["a"],QItemSide:y["a"],QItemSeparator:S["a"],QTable:G["a"],QTh:b["a"],QTr:E["a"],QTd:B["a"],QTableColumns:C["a"],QSearch:I["a"],QSelect:D["a"],QCollapsible:R["a"],QItemTile:w["a"],QOptionGroup:T["a"],QToggle:U["a"],QCard:P["a"],QCardTitle:O["a"],QCardMedia:A["a"],QCardMain:M["a"],QField:k["a"],QInput:q["a"],QCardSeparator:N["a"],QCardActions:Q["a"],QBtnDropdown:j["a"],QBtnToggle:L["a"],QDialog:K["a"],QChip:x["a"],QModal:_["a"],QCheckbox:H["a"]},directives:{Ripple:Y["a"]},plugins:{Notify:z["a"],Dialog:V["a"],Loading:J["a"]}});var F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},Z=[];F._withStripped=!0;var W=n("MVZn"),X=n.n(W),$=n("L2JU"),ee=n("l2SU"),te=n("07Dp"),ne=Object($["a"])(ee["b"]),re=ne.mapActions,ae={methods:X()({},re({currentSession:te["b"].currentSession})),mounted:function(){this.currentSession()}},ue=n("3q6B"),ie=n("SJxL"),oe=Object($["a"])(ue["b"]),se=oe.mapActions,ce={name:"App",mixins:[ae],methods:X()({},se({fetchData:ie["b"].fetchData})),mounted:function(){this.fetchData()}},le=ce,de=n("KHd+"),fe=Object(de["a"])(le,F,Z,!1,null,null,null);fe.options.__file="App.vue";var he=fe.exports;n("f3/d");r["a"].use($["b"]);var pe=function(){var e=new $["b"].Store({modules:{vortice:ue["a"],auth:ee["a"]}});return e.subscribe(function(t,n){var r="".concat(ue["a"].name,"/").concat(ue["a"].mutationsTypes.setMetas);if(t.type===r){var a="".concat(ue["a"].name,"/").concat(ue["a"].mutationsTypes.setPlayerMetas);e.commit(a,t.payload)}}),e},me=n("jE9Z"),ge=[{path:"/",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return n.e(3).then(n.bind(null,"iyQ6"))}}]},{path:"/sign-in",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return n.e(4).then(n.bind(null,"T8hi"))}}]},{path:"/guilds",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return n.e(5).then(n.bind(null,"naMy"))}}]},{path:"/guild/:guildId/gear",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return Promise.all([n.e(1),n.e(6)]).then(n.bind(null,"asjm"))}}]},{path:"/guild/:guildId/roster",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return Promise.all([n.e(1),n.e(7)]).then(n.bind(null,"h+qS"))}}]},{path:"/guild/:guildId/str-score",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return n.e(8).then(n.bind(null,"dnmF"))}}]},{path:"/guild/:guildId/rating",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return Promise.all([n.e(1),n.e(9)]).then(n.bind(null,"in4M"))}}]},{path:"/guild/:guildId/units",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return n.e(10).then(n.bind(null,"Gr/j"))}}]},{path:"/guild/:guildId/platoons",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return n.e(11).then(n.bind(null,"DZH+"))}}]},{path:"/vortice/gear",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return Promise.all([n.e(1),n.e(12)]).then(n.bind(null,"RSWC"))}}]},{path:"/vortice/roster",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return Promise.all([n.e(1),n.e(13)]).then(n.bind(null,"MhVj"))}}]},{path:"/vortice/rating",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return Promise.all([n.e(1),n.e(14)]).then(n.bind(null,"5OZz"))}}]},{path:"/vortice/str-score",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return n.e(15).then(n.bind(null,"dv4F"))}}]},{path:"/metas",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return n.e(16).then(n.bind(null,"jP/h"))}}],meta:{requiresAuth:!0}},{path:"/str-proven-squads",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return n.e(17).then(n.bind(null,"JlNt"))}}],meta:{requiresAuth:!0}},{path:"/users",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return n.e(18).then(n.bind(null,"BRs5"))}}],meta:{requiresAuth:!0}},{path:"/platoons",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return n.e(19).then(n.bind(null,"i6jT"))}}]},{path:"/stats",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return Promise.all([n.e(1),n.e(20)]).then(n.bind(null,"x5P4"))}}]},{path:"/units-stats",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return Promise.all([n.e(1),n.e(21)]).then(n.bind(null,"EYPr"))}}]},{path:"/users-stats",component:function(){return n.e(0).then(n.bind(null,"8kEK"))},children:[{path:"",component:function(){return Promise.all([n.e(1),n.e(22)]).then(n.bind(null,"emCf"))}}]}];ge.push({path:"*",component:function(){return n.e(23).then(n.bind(null,"5R6h"))}});var ve=ge;r["a"].use(me["a"]);var ye=function(){var e=new me["a"]({scrollBehavior:function(){return{y:0}},routes:ve,mode:"hash",base:""});return e},Se=function(){var e="function"===typeof pe?pe():pe,t="function"===typeof ye?ye({store:e}):ye;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(he)}};return{app:n,store:e,router:t}},Ge=n("qSUR"),be={failed:"Action failed",success:"Action was successful"},Ee={"en-us":be},Be=function(e){var t=e.app,n=e.Vue;n.use(Ge["a"]),t.i18n=new Ge["a"]({locale:"en-us",fallbackLocale:"en-us",messages:Ee})},Ce=n("vDqi"),Ie=n.n(Ce),De=function(e){var t=e.Vue;Ie.a.defaults.baseURL="https://vortice-data.s3.eu-west-3.amazonaws.com",t.prototype.$axios=Ie.a},Re=n("Mb3Q"),we=function(e){e.app;var t=e.router,n=e.store;e.Vue;Object(Re["sync"])(n,t)},Te=n("Hc5T"),Ue=n.n(Te),Pe=function(e){var t=e.Vue;t.use(Ue.a)},Oe=n("uZRx"),Ae=n.n(Oe);Ae.a.configure({Auth:{identityPoolId:"eu-west-1:ae7ef2b7-1595-4050-9ec3-3d64b9c8dfa7",region:"eu-west-1",userPoolId:"eu-west-1_l3UPbQXgK",userPoolWebClientId:"7kcvnq77a4i4k9nmnu5o8rutje",mandatorySignIn:!1}}),window.Auth=Ae.a.Auth;var Me=function(e){e.Vue},ke=function(e){e.app;var t=e.store,n=e.router;e.Vue;n.beforeEach(function(e,n,r){if(e.matched.every(function(e){return!e.meta.requiresAuth}))return r();t.dispatch("".concat(ee["b"],"/").concat(te["b"].currentSession)).then(function(e){if(e)return r();r({path:"/"})}).catch(function(){return r({path:"/"})})})},qe=Se(),Ne=qe.app,Qe=qe.store,je=qe.router;[Be,De,we,Pe,Me,ke].forEach(function(e){e({app:Ne,router:je,store:Qe,Vue:r["a"],ssrContext:null})}),new r["a"](Ne)},SJxL:function(e,t,n){"use strict";n("ls82");var r=n("yXPU"),a=n.n(r),u=(n("hhXQ"),n("VRzm"),n("rGqo"),n("yt8O"),n("cfRH")),i=n("MVZn"),o=n.n(i),s=n("vDqi"),c=n.n(s),l="https://52e1ua8b1i.execute-api.eu-west-1.amazonaws.com/dev",d=function(e){return c.a.get("/guild-".concat(e,".json")).then(function(e){return e.data})},f=function(){return c.a.get("/characters.json").then(function(e){return e.data})},h=function(){return c.a.get("".concat(l,"/units")).then(function(e){return e.data})},p=function(){return c.a.get("/ships.json").then(function(e){return e.data})},m=function(){return c.a.get("/stats.json").then(function(e){return e.data})},g=function(){return c.a.get("".concat(l,"/guilds")).then(function(e){return e.data})},v=function(){return c.a.get("".concat(l,"/metas")).then(function(e){return e.data})},y=function(e){return c.a.put("".concat(l,"/metas"),{metas:e})},S=function(){return c.a.get("".concat(l,"/strProvenSquads")).then(function(e){return e.data})},G=function(e){return c.a.put("".concat(l,"/strProvenSquads"),{strProvenSquads:e})},b=function(){return c.a.get("".concat(l,"/users")).then(function(e){return e.data}).then(function(e){return e.map(function(e){return{id:e.username,username:e.username,email:e.type,roles:JSON.parse(e.role)}})})},E=function(e){return c.a.post("".concat(l,"/users"),o()({},e,{role:JSON.stringify(e.roles)}))},B=function(){var e=a()(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://vortice-server.herokuapp.com/guild-preview/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=a()(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("".concat(l,"/guilds"),t);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),I=function(e){return c.a.delete("".concat(l,"/guilds/").concat(e))},D=n("qaCD");n.d(t,"b",function(){return R});var R={fetchData:"fetchData",fetchGuild:"fetchGuild",fetchUnits:"fetchUnits",fetchCharacters:"fetchCharacters",fetchShips:"fetchShips",fetchMetas:"fetchMetas",fetchStrProvenSquads:"fetchStrProvenSquads",fetchUsers:"fetchUsers",fetchStatsBase:"fetchStatsBase",fetchCommunityGuilds:"fetchCommunityGuilds",previewGuild:"previewGuild",createGuild:"createGuild",deleteGuild:"deleteGuild",setMetas:"setMetas",removeMeta:"removeMeta",setStrProvenSquads:"setStrProvenSquads",createUser:"createUser"},w=function(e){var t=e.dispatch,n=e.getters;return D["a"].show(),Promise.all([t(R.fetchUnits),t(R.fetchMetas),t(R.fetchStrProvenSquads),t(R.fetchStatsBase),t(R.fetchCommunityGuilds)]).then(function(){var e=Object.values(n.guilds).map(function(e){return e.id});return Promise.all(e.map(function(e){return t(R.fetchGuild,{guildId:e})}))}).then(function(){return t(R.fetchUsers)}).then(function(){return D["a"].hide()})},T=function(e,t){var n=e.commit,r=t.guildId;return d(r).then(function(e){return n(u["b"].setGuild,{id:r,guild:e})})},U=function(e){var t=e.commit;return h().then(function(e){return t(u["b"].setUnits,{units:e})})},P=function(e){var t=e.commit;return f().then(function(e){return t(u["b"].setCharacters,{characters:e})})},O=function(e){var t=e.commit;return p().then(function(e){return t(u["b"].setShips,{ships:e})})},A=function(e){var t=e.commit;return v().then(function(e){return t(u["b"].setMetas,{metas:e})})},M=function(e){var t=e.commit;return S().then(function(e){return t(u["b"].setStrProvenSquads,{strProvenSquads:e})})},k=function(e){var t=e.commit;return b().then(function(e){return t(u["b"].setUsers,{users:e})})},q=function(e){var t=e.commit;return m().then(function(e){return t(u["b"].setStatsBase,{stats:e})})},N=function(e){var t=e.commit;return g().then(function(e){return t(u["b"].setCommunityGuilds,{guilds:e})})},Q=function(){var e=a()(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=n.leaderAllyCode,e.next=3,B(r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=a()(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.guild,e.next=4,C(a);case 4:r(u["b"].ADD_COMMUNITY_GUILD,{guild:a});case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=a()(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.guildId,e.next=4,I(a);case 4:r(u["b"].DELETE_GUILD,{guildId:a});case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),K=function(e,t){var n=e.commit,r=t.metas;return y(r).then(function(){return n(u["b"].setMetas,{metas:r})})},x=function(e,t){var n=e.commit,r=t.id;n(u["b"].removeMeta,{id:r})},_=function(e,t){var n=e.commit,r=t.strProvenSquads;return G(r).then(function(){return n(u["b"].setStrProvenSquads,{strProvenSquads:r})})},H=function(e,t){var n=e.commit,r=t.user;return E(r).then(function(){var e={id:r.username,email:r.email,roles:r.roles};n(u["b"].addUser,{user:e})})};t["a"]={fetchData:w,fetchGuild:T,fetchUnits:U,fetchCharacters:P,fetchShips:O,fetchMetas:A,fetchStrProvenSquads:M,fetchUsers:k,fetchStatsBase:q,fetchCommunityGuilds:N,previewGuild:Q,createGuild:j,deleteGuild:L,setMetas:K,removeMeta:x,setStrProvenSquads:_,createUser:H}},"a/Iw":function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"c",function(){return u});var r=n("uZRx"),a={NEW_PASSWORD_REQUIRED:"NEW_PASSWORD_REQUIRED"},u={ADMIN:"Admin",OFFICIAL:"Official"};t["b"]={currentAuthenticatedUser:function(){return r["Auth"].currentAuthenticatedUser()},currentSession:function(){return r["Auth"].currentSession()},currentUser:function(){return r["Auth"].currentUserInfo()},signIn:function(e,t){return r["Auth"].signIn(e,t)},signOut:function(){return r["Auth"].signOut()},completeNewPassword:function(e,t){return r["Auth"].completeNewPassword(e,t)}}},cfRH:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var r=n("QILm"),a=n.n(r),u=n("lSNA"),i=n.n(u),o=(n("rGqo"),n("yt8O"),n("RW0V"),n("MVZn")),s=n.n(o),c=n("Kw5r"),l={setRootGuild:"setRootGuild",setGuild:"setGuild",setUnits:"setUnits",setMetas:"setMetas",removeMeta:"removeMeta",setPlayerMetas:"setPlayerMetas",setStrProvenSquads:"setStrProvenSquads",setUsers:"setUsers",addUser:"addUser",setStatsBase:"setStatsBase",setCommunityGuilds:"setCommunityGuilds",DELETE_GUILD:"DELETE_GUILD",ADD_COMMUNITY_GUILD:"ADD_COMMUNITY_GUILD"},d=function(e,t){var n=t.guild,r=s()({},n,{players:[]}),a=r.units,u=Object.keys(a).reduce(function(e,t){var n=a[t],r=n[6]||0,u=n[7]||0,o=r+u;return o>9?e:s()({},e,i()({},t,{6:r,7:u}))},{});e.platoonRequirements=u},f=function(e,t){var n=t.id,r=t.guild,a=n,u=s()({},r,{players:[]}),o={},l={},d={},f={};r.players.forEach(function(t){u.players.push(t.id),l[t.id]={},d[t.id]={},o[t.id]=s()({},t,{hasSwgohGgAccount:"X",totalBtPlattons:0,totalTopCharactersPower:t.charactersGearElevenPower+t.charactersGearTwelvePower+t.charactersGearThirteenPower,totalGearElevenCharacters:t.charactersGearElevenTotal,totalGearTwelveCharacters:t.charactersGearTwelveTotal,totalGearThirteenCharacters:t.charactersGearThirteenTotal,units:[]}),t.units.forEach(function(n){var r=n.id,a=t.id,u=o[a],c=d[a];u.units.push(r),l[a][r]=n;var h=f[r]||{1:[],2:[],3:[],4:[],5:[],6:[],7:[]};h[n.stars].push(a),f=s()({},f,i()({},r,h));var p=2===n.type?13:n.gear;if(p>10){var m=!!e.metas[r];m&&(c[r]=p)}})}),c["a"].set(e.guilds,a,s()({},e.guilds[a],u)),c["a"].set(e.platoons,a,f),c["a"].set(e.players,a,o),c["a"].set(e.playerUnits,a,l),e.playerMetas=s()({},e.playerMetas,d)},h=function(e,t){var n=t.units;e.units=n},p=function(e,t){var n=t.metas;e.metas=n},m=function(e,t){var n=t.id,r=e.metas,u=(r[n],a()(r,[n]));e.metas=u},g=function(e,t){var n=t.metas,r={};Object.keys(e.playerUnits).forEach(function(t){Object.keys(e.playerUnits[t]).forEach(function(a){var u=e.playerUnits[t][a],o=Object.keys(u).reduce(function(e,t){var r=u[t];return n[r.id]?2===r.type?s()({},e,i()({},r.id,13)):r.gear<11?e:s()({},e,i()({},r.id,r.gear)):e},{});r[a]=o})}),e.playerMetas=r},v=function(e,t){var n=t.strProvenSquads;e.strProvenSquads=n},y=function(e,t){var n=t.users;e.users=n.reduce(function(e,t){return s()({},e,i()({},t.username,t))},{})},S=function(e,t){var n=t.user;e.users=s()({},e.users,i()({},n.username,n))},G=function(e,t){var n=t.stats;e.statsBase=n},b=function(e,t){var n=t.guilds;e.guilds=n.reduce(function(e,t){return s()({},e,i()({},t.id,t))},{})},E=function(e,t){var n=t.guildId,r=e.guilds,u=(r[n],a()(r,[n]));e.guilds=u;var i=e.platoons,o=(i[n],a()(i,[n]));e.platoons=o;var s=e.playerUnits,c=(s[n],a()(s,[n]));e.playerUnits=c;var l=e.players,d=(l[n],a()(l,[n]));e.players=d},B=function(e,t){var n=t.guild;e.guilds=s()({},e.guilds,i()({},n.id,n))};t["a"]={setRootGuild:d,setGuild:f,setUnits:h,removeMeta:m,setPlayerMetas:g,setMetas:p,setStrProvenSquads:v,setUsers:y,addUser:S,setStatsBase:G,setCommunityGuilds:b,DELETE_GUILD:E,ADD_COMMUNITY_GUILD:B}},fm0S:function(e,t,n){},l2SU:function(e,t,n){"use strict";var r={user:null},a=n("6N+0"),u=n("pG75"),i=n("07Dp");n.d(t,"b",function(){return o});var o="auth";t["a"]={namespaced:!0,state:r,getters:a["a"],mutations:u["a"],actions:i["a"],mutationsTypes:u["b"]}},pG75:function(e,t,n){"use strict";n.d(t,"b",function(){return r});var r={ADD_USER:"ADD_USER"},a=function(e,t){var n=t.user;e.user=n};t["a"]={ADD_USER:a}},vUYO:function(e,t,n){"use strict";var r=n("lSNA"),a=n.n(r),u=n("MVZn"),i=n.n(u),o=(n("hhXQ"),n("rGqo"),n("yt8O"),n("RW0V"),n("f3/d"),n("Vd3H"),n("Z2Ku"),n("L9s1"),n("91GP"),{11:5,12:15}),s={COMMANDERLUKESKYWALKER:7,DEATHTROOPER:7,HANSOLO:7},c={REYJEDITRAINING:7,BB8:7,RESISTANCETROOPER:7},l={VISASMARR:7,REY:7,R2D2_LEGENDARY:7,HERMITYODA:7},d={g11:2,g12:10,g13:18},f={g11:5,g12:20,g13:35},h={GEONOSIANBROODALPHA:{gear:12,zetas:["UNIQUEABILITY_GEONOSIANBROODALPHA01_NAME"]},GEONOSIANSOLDIER:{gear:12},GEONOSIANSPY:{gear:12},POGGLETHELESSER:{gear:12},SUNFAC:{gear:12}},p={SHAAKTI:{gear:13,relic:5},CT5555:{gear:13,relic:7},CT7567:{gear:13,relic:4},ARCTROOPER501ST:{gear:13,relic:7},CT210408:{gear:13,relic:7}},m=function(e,t){if(!e)return!1;var n=Object.assign({gear:0,relic:0,zetas:[]},t);if(e.gear<n.gear)return!1;if(e.relic<n.relic)return!1;var r=e.zetas.map(function(e){return e.nameKey}),a=n.zetas.map(function(e){return r.includes(e)}).every(Boolean);return a},g=function(e,t){return Object.keys(t).reduce(function(n,r){var a=e[r],u=t[r];return n.push(m(a,u)),n},[]).every(Boolean)},v=function(e,t){return Object.keys(t).filter(function(n){var r=e[n];return!!r&&!(r.stars<t[n])}).map(function(t){return e[t]})},y=function(e){return 0+e.charactersGearElevenTotal*d.g11+e.charactersGearTwelveTotal*d.g12+e.charactersGearThirteenTotal*d.g13},S=function(e){var t=v(e,s).filter(function(e){return e.gear>10&&e.stars>5});if(3!==t.length)return 0;var n=t.reduce(function(e,t){return e+o[t.gear]||0},0);return n},G=function(e){var t=v(e,c).filter(function(e){return e.gear>10&&e.stars>5});if(3!==t.length)return 0;var n=v(e,l).filter(function(e){return e.gear>10&&e.stars>5});if(n.length<2)return 0;var r=t.reduce(function(e,t){return e+o[t.gear]},0),a=n.map(function(e){return o[e.gear]}).sort(),u=r+a[0]+a[1];return u},b=function(e,t){var n=t[e.id];if(!n)return 0;var r=Object.values(n).map(function(e){return e?25:0}).reduce(function(e,t){return e+t},0);return r},E=function(e){var t=0+e.totalMetaGearElevenCharacters*f.g11+e.totalMetaGearTwelveCharacters*f.g12+e.totalMetaGearThirteenCharacters*f.g13;return t},B=function(e,t){return g(t,h)?5*(f.g12+d.g12):0},C=function(e,t){return g(t,p)?5*(f.g13+d.g13):0},I=function(e){var t=0+parseInt(e.totalTopCharactersPower/1e4,10)+2*e.totalBtPlattons+y(e)+E(e);return t},D={A:32,B:16,C:8,D:4,E:1},R=function(e){if(e<60)return 0;var t=[{goal:120,score:D.A},{goal:100,score:D.B},{goal:85,score:D.C},{goal:70,score:D.D},{goal:60,score:D.E}];return O(t,e)},w=function(e){if(e<3e4)return 0;var t=[{goal:45e3,score:D.B},{goal:4e4,score:D.C},{goal:35e3,score:D.D},{goal:3e4,score:D.E}];return O(t,e)},T=function(e){if(e<22e3)return 0;var t=[{goal:35e3,score:D.B},{goal:3e4,score:D.C},{goal:26e3,score:D.D},{goal:22e3,score:D.E}];return O(t,e)},U=function(e){if(e<1550)return 0;var t=[{goal:2400,score:D.B},{goal:2125,score:D.C},{goal:1800,score:D.D},{goal:1550,score:D.E}];return O(t,e)},P=function(e){if(e<2345)return 0;var t=[{goal:3515,score:D.B},{goal:3125,score:D.C},{goal:2735,score:D.D},{goal:2345,score:D.E}];return O(t,e)},O=function(e,t){return e.filter(function(e){return e.goal<=t}).map(function(e){return e.score}).reduce(function(e,t){return t>e?t:e},0)},A={speedBonusScore:R,protectionBonusScore:w,healthBonusScore:T,physicalDamageBonusScore:U,specialDamageBonusScore:P,bonusScore:O};n.d(t,"b",function(){return k});var M={SHIP:2,CHARACTER:1},k={currentGuildId:"currentGuildId",currentGuildName:"currentGuildName",unit:"unit",unitName:"unitName",playerName:"playerName",guilds:"guilds",units:"units",metas:"metas",platoonRequirements:"platoonRequirements",strProvenSquads:"strProvenSquads",players:"players",users:"users",gearByGuild:"gearByGuild",currentGear:"currentGear",communityGear:"communityGear",rosterByGuild:"rosterByGuild",currentRoster:"currentRoster",communityRoster:"communityRoster",ratingByGuld:"ratingByGuld",currentRating:"currentRating",communityRating:"communityRating",strScoreByGuild:"strScoreByGuild",currentStrScore:"currentStrScore",communityStrScore:"communityStrScore",unitsByGuild:"unitsByGuild",currentUnits:"currentUnits",statsByGuild:"statsByGuild",stats:"stats",statsByChar:"statsByChar",playerStats:"playerStats",statsBase:"statsBase"},q=function e(t){return t.reduce(function(t,n){return t.concat(Array.isArray(n)?e(n):n)},[])},N=function(e,t,n,r){return n.route.params.guildId},Q=function(e,t){var n=e.guilds[t.currentGuildId];return n?n.name:""},j=function(e){return function(t){return e.units[t]}},L=function(e){return function(t){return e.units[t].name}},K=function(e){return function(t,n){return e.players[n][t].name}},x=function(e){return e.guilds},_=function(e){return e.units},H=function(e){return e.metas},Y=function(e){return e.platoonRequirements},z=function(e){return e.strProvenSquads},V=function(e){return e.players},J=function(e){return e.users},F=function(e){return function(t){if(!Object.keys(e.players).length)return[];if(!e.players[t])return[];var n=e.guilds[t],r=n.name,a=(n.allyCodes||[]).map(function(n){var a=e.players[t][n],u=a.charactersGearElevenPower+a.charactersGearTwelvePower+a.totalGearThirteenCharacters,o=e.playerMetas[a.id]||{},s=e.playerUnits[t][n]||{};a.totalMetaGearElevenCharacters=Object.values(o).filter(function(e){return 11===e}).length,a.totalMetaGearTwelveCharacters=Object.values(o).filter(function(e){return 12===e}).length,a.totalMetaGearThirteenCharacters=Object.values(o).filter(function(e){return 13===e}).length;var c=B(a,s),l=C(a,s),d=i()({},a,{topCharactersPG:u,topCharactersTotal:a.charactersGearElevenTotal+a.charactersGearTwelveTotal+a.charactersGearThirteenTotal,topCharactersPercent:(100*u/a.power).toFixed(2),zetas:a.zetasTotal,guild:r,watRequirements:c,kamRequirements:l,vorticeScore:I(a)+c+l});return d});return a}},Z=function(e,t){return t.currentGuildId&&e.guilds[t.currentGuildId]?t.gearByGuild(t.currentGuildId):[]},W=function(e,t){return q(Object.keys(e.guilds).map(function(e){return t.gearByGuild(e)}))},X=function(e){return function(t){if(!Object.keys(e.players).length)return[];if(!e.players[t])return[];var n=e.guilds[t],r=n.name,a=e.units;return q((n.allyCodes||[]).map(function(n){var u=e.players[t][n];return u.units.map(function(i){var o=e.playerUnits[t][n][i],s=a[o.id];return{relic:o.relic,name:u.name,unitName:s.name,stars:o.stars,level:o.level,gear:o.gear,power:o.power,zetas:o.zetas.length,guild:r}})}))}},$=function(e,t){return t.currentGuildId&&e.playerUnits[t.currentGuildId]?t.rosterByGuild(t.currentGuildId):[]},ee=function(e,t){return q(Object.keys(e.guilds).map(function(e){return t.rosterByGuild(e)}))},te=function(e){return function(t){if(!Object.keys(e.players).length)return[];if(!e.players[t])return[];var n=e.guilds[t],r=n.name,a=(n.allyCodes||[]).map(function(n){var a=e.players[t][n],u=e.playerUnits[t][a.id]||{},o=e.playerMetas[a.id]||{};a.totalMetaGearElevenCharacters=Object.values(o).filter(function(e){return 11===e}).length,a.totalMetaGearTwelveCharacters=Object.values(o).filter(function(e){return 12===e}).length,a.totalMetaGearThirteenCharacters=Object.values(o).filter(function(e){return 13===e}).length;var s=parseInt(a.totalTopCharactersPower/1e3,10),c=a.charactersGearElevenTotal+a.charactersGearTwelveTotal+a.charactersGearThirteenTotal,l=0,d=B(a,u),f=C(a,u),h=I(a)+l+d+f,p=i()({},a,{totalTopCharactersPower:s,totalTopCharacters:c,strScore:l,watScore:d,kamScore:f,totalScore:h,guild:r});return p});return a}},ne=function(e,t){return t.currentGuildId&&e.guilds[t.currentGuildId]?t.ratingByGuild(t.currentGuildId):[]},re=function(e,t){return q(Object.keys(e.guilds).map(function(e){return t.ratingByGuild(e)}))},ae=function(e){return function(t){if(!Object.keys(e.players).length)return[];if(!e.players[t])return[];var n=e.guilds[t],r=n.name,a=(n.allyCodes||[]).map(function(n){var a=e.players[t][n],u=e.playerUnits[t][a.id],o=S(u),s=G(u),c=b(a,e.strProvenSquads),l=i()({},a,{guild:r,chexmixScore:o,resistanceScore:s,strProvedSquadsScore:c,total:o+s+c});return l});return a}},ue=function(e,t){return t.currentGuildId&&e.guilds[t.currentGuildId]?t.strScoreByGuild(t.currentGuildId):[]},ie=function(e,t){return q(Object.keys(e.guilds).map(function(e){return t.strScoreByGuild(e)}))},oe=function(e,t){return function(t){return Object.keys(e.platoons[t]||{}).map(function(n){return i()({},e.units[n],e.platoons[t][n])})}},se=function(e,t){return t.currentGuildId&&e.guilds[t.currentGuildId]?t.unitsByGuild(t.currentGuildId):[]},ce=function(e,t){return function(t){if(!Object.keys(e.players).length)return[];if(!e.players[t])return[];var n=e.guilds[t],r=n.name,a=e.units;return q((n.allyCodes||[]).map(function(n){var u=e.players[t][n];return u.units.filter(function(e){return a[e]&&a[e].type===M.CHARACTER}).map(function(o){var s=e.playerUnits[t][n][o];return i()({guild:r,playerId:n,name:u.name,unitId:s.id,unit:a[s.id].name,role:a[s.id].role,level:s.level,gear:s.gear,relic:s.relic,pg:s.power,zetas:s.zetas.length},s.stats)})}))}},le=function(e,t){return q(Object.keys(e.guilds).map(function(e){return t.statsByGuild(e)}))},de=function(e,t){var n=t.stats;return n.map(function(e){var n=13===e.gear?t.statsBase["g13relic".concat(e.relic)][e.unitId]:t.statsBase.g12plus5[e.unitId];if(!n)return 0;var r=n.speed,a=n.health,u=n.protection,o=n.specialDamage,s=n.physicalDamage,c=e.health-a,l=e.speed-r,d=e.protection-u,f=e.specialDamage-o,h=e.physicalDamage-s,p=A.healthBonusScore(c),m=A.speedBonusScore(l),g=A.protectionBonusScore(d),v=A.specialDamageBonusScore(f),y=A.physicalDamageBonusScore(h),S=0+p+m+g+Math.max(v,y);return i()({},e,{speedBase:r,speedIncrement:l,speedBonus:m,healthBase:a,healthIncrement:c,healthBonus:p,protectionBase:u,protectionIncrement:d,protectionBonus:g,specialDamageBase:o,specialDamageIncrement:f,specialDamageBonus:v,physicalDamageBase:s,physicalDamageIncrement:h,physicalDamageBonus:y,score:S})}).filter(function(e){return e.score})},fe=function(e,t){var n,r,u,o,s=t.statsByChar,c={},l={score:0,healthB:0,healthC:0,healthD:0,healthE:0,speedA:0,speedB:0,speedC:0,speedD:0,speedE:0,protectionB:0,protectionC:0,protectionD:0,protectionE:0,damageB:0,damageC:0,damageD:0,damageE:0},d=(n={},a()(n,D.B,"healthB"),a()(n,D.C,"healthC"),a()(n,D.D,"healthD"),a()(n,D.E,"healthE"),n),f=(r={},a()(r,D.A,"speedA"),a()(r,D.B,"speedB"),a()(r,D.C,"speedC"),a()(r,D.D,"speedD"),a()(r,D.E,"speedE"),r),h=(u={},a()(u,D.B,"protectionB"),a()(u,D.C,"protectionC"),a()(u,D.D,"protectionD"),a()(u,D.E,"protectionE"),u),p=(o={},a()(o,D.B,"damageB"),a()(o,D.C,"damageC"),a()(o,D.D,"damageD"),a()(o,D.E,"damageE"),o);return s.forEach(function(e){var t=c[e.playerId]||i()({playerId:e.playerId,name:e.name,guild:e.guild},l);t.score+=e.score;var n=d[e.healthBonus];n&&t[n]++;var r=f[e.speedBonus];r&&t[r]++;var a=h[e.protectionBonus];a&&t[a]++;var u=Math.max(e.physicalDamageBonus,e.specialDamageBonus),o=p[u];o&&t[o]++,c[e.playerId]=t}),Object.values(c)},he=function(e){return e.statsBase};t["a"]={currentGuildId:N,currentGuildName:Q,unit:j,unitName:L,playerName:K,guilds:x,units:_,metas:H,platoonRequirements:Y,strProvenSquads:z,players:V,users:J,gearByGuild:F,communityGear:W,currentGear:Z,ratingByGuild:te,communityRating:re,currentRating:ne,rosterByGuild:X,communityRoster:ee,currentRoster:$,strScoreByGuild:ae,currentStrScore:ue,communityStrScore:ie,unitsByGuild:oe,currentUnits:se,statsByGuild:ce,stats:le,statsByChar:de,playerStats:fe,statsBase:he}}},[[1,25,24]]]);