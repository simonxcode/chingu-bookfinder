(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(3),r=n.n(l),i=(n(15),n(4)),u=n(5),c=n(7),h=n(6),m=n(1),s=n(8);function d(e){return o.a.createElement("div",null,e.bookcard.map(function(e,t){return o.a.createElement("div",{key:t},o.a.createElement("div",null,o.a.createElement("img",{src:e.image,alt:e.title})),o.a.createElement("div",null,e.title),o.a.createElement("div",null,"Author: ",e.authors),o.a.createElement("div",null,"Publisher: ",e.publisher),o.a.createElement("div",null,o.a.createElement("a",{href:e.infoLink},o.a.createElement("button",null,"More Info"))))}))}var v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={query:"",bookcard:[]},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({query:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.fetchData()}},{key:"fetchData",value:function(){var e=this;fetch("".concat("https://www.googleapis.com/books/v1/volumes?","q=").concat(this.state.query,"&key=").concat("AIzaSyAKEzqn36DCHQCQHLZ4g2oAr3Sq79EV3T4")).then(function(e){return e.json()}).then(function(t){var n=t.items.map(function(e){return{image:e.volumeInfo.imageLinks.thumbnail,title:e.volumeInfo.title,authors:e.volumeInfo.authors[0],publisher:e.volumeInfo.publisher,link:e.volumeInfo.infoLink}});e.setState({bookcard:n})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,o.a.createElement("input",{type:"text",value:this.state.query,onChange:this.handleChange,placeholder:"search book title or author..."})),o.a.createElement("input",{type:"submit",value:"Submit"})),o.a.createElement("div",null,o.a.createElement(d,{bookcard:this.state.bookcard})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ae15e85d.chunk.js.map