(window.webpackJsonpfriends=window.webpackJsonpfriends||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(2),o=t.n(c),l=(t(13),t(14),t(3)),i=t(4),s=t(6),h=t(5),u=t(7),m=function(e){e.id;var n=e.name,t=e.email;return r.a.createElement("div",{className:"bg-light-yellow dib br3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"phot",src:"https://robohash.org/".concat(n)}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))},d=function(e){var n=e.fans,t=n.map(function(e,t){return r.a.createElement(m,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})});return r.a.createElement("div",null,t)},f=function(e){e.searchfield;var n=e.searchchange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"bg-lightest-blue dib br3 ma2 grow bw2 shadow-5",type:"search",placeholder:"search friends",onChange:n}))},w=(t(15),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)}),g=function(e){function n(){var e;return Object(l.a)(this,n),(e=Object(s.a)(this,Object(h.a)(n).call(this))).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={fans:[],searchfield:""},e}return Object(u.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e.setState({fans:n})})}},{key:"render",value:function(){var e=this.state,n=e.fans,t=e.searchfield,a=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return 0===n.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Friends List"),r.a.createElement(f,{searchchange:this.onSearchChange}),r.a.createElement(w,null,r.a.createElement(d,{fans:a})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,n,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.9ba8f19f.chunk.js.map