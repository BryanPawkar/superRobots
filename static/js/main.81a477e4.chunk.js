(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),i=n.n(o),s=n(5),c=n(1),l=n(15),u=n(16);n(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(28);var d=n(3),h=n(4),E=n(7),m=n(6),p=n(11),f=function(e){var t=e.name,n=e.mail,r=e.id;return a.a.createElement("div",{className:"br2 pa2 ma2 bg-light-pink grow ba dib shadow-5 tc "},a.a.createElement("img",{src:"https://robohash.org/".concat(r),alt:"Foto de Perfil"}),a.a.createElement("h2",null,t),a.a.createElement("p",null,n))},y=function(e){var t=e.robots,n=t.map((function(e,n){return a.a.createElement(f,{key:t[n].id,id:t[n].id,name:t[n].name,mail:t[n].email})}));return a.a.createElement("div",{style:{marginTop:"3em"}},n)},b=function(e){var t=e.id,n=e.name,r=e.mail;return a.a.createElement("div",{className:"br2 pa2 ma2 bg-light-blue grow ba dib shadow-5 tc kittys"},a.a.createElement("img",{src:"https://robohash.org/".concat(t,"?set=set4"),alt:"Foto de Kitty"}),a.a.createElement("h2",null,n),a.a.createElement("p",null,r))},g=function(e){var t=e.kittys,n=t.map((function(e,n){return a.a.createElement(b,{key:t[n].id,id:t[n].id,name:t[n].name,mail:t[n].email})}));return a.a.createElement("div",{style:{paddingTop:"3em",background:"linear-gradient( to left, rgb(40, 177, 184), #ffa3d7)"}},n)},v=function(e){var t=e.searchChange;return a.a.createElement("div",{style:{boxShadow:"0px 15px 15px 0px #0000007d",borderBottom:"1px solid #0000007d"}},a.a.createElement("input",{type:"search",placeholder:"find a friend",onChange:t}))},S=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",height:"1000px"}},e.children)},O=function(e){Object(E.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooop there is an issue..."):this.props.children}}]),n}(r.Component),T=(n(29),function(e){Object(E.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots(),this.props.onRequestKittys()}},{key:"render",value:function(){var e=this.props,t=e.searchfield,n=e.withEveryChange,r=e.robots,o=e.kittys,i=e.isPending,s=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return i?a.a.createElement("h1",{className:"tc"},"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1 dim"},"RoboFriends 1.0"),a.a.createElement(v,{searchChange:n}),a.a.createElement(S,null,a.a.createElement(O,null,a.a.createElement(y,{robots:s}))),a.a.createElement("h1",{className:"f1 pa5 kitty"},"Kitty Friends"),a.a.createElement(S,null,a.a.createElement(O,null,a.a.createElement(g,{kittys:c}))))}}]),n}(r.Component)),R=Object(s.b)((function(e){var t;return t={searchfield:e.searchToys.searchfield,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error,kittys:e.requestKittys.kittys},Object(p.a)(t,"isPending",e.requestKittys.kitty),Object(p.a)(t,"error",e.requestKittys.error),t}),(function(e){return{withEveryChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))},onRequestKittys:function(){return e((function(e){e({type:"REQUEST_KITTYS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_KITTYS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_KITTYS_FAILED",payload:t})}))}))}}}))(T),_={searchfield:""},j={isPending:!1,robots:[],error:""},C={isPending:!1,kittys:[],error:""},w=Object(l.createLogger)(),k=Object(c.c)({searchToys:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchfield:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}},requestKittys:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_KITTYS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_KITTYS_SUCCESS":case"REQUEST_KITTYS_FAILED":return Object.assign({},e,{kittys:t.payload,isPending:!1});default:return e}}}),I=Object(c.d)(k,Object(c.a)(u.a,w));i.a.render(a.a.createElement(s.a,{store:I},a.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.81a477e4.chunk.js.map