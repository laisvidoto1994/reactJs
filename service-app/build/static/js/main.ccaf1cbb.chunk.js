(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var o=e(0),c=e.n(o),a=e(2),r=e.n(a),i=(e(13),e(3)),u=e(4),s=e(6),l=e(5),h=e(7),d=function(t){function n(){var t;return Object(i.a)(this,n),(t=Object(s.a)(this,Object(l.a)(n).call(this))).state={products:[]},t}return Object(h.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("http://localhost:3001/produtos").then(function(t){return t.json()}).then(function(n){t.setState({products:n})}).catch(function(t){console.log(t)})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",null,"Product List "),"Size: ",this.state.products.length)}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(d,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,n,e){t.exports=e(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.ccaf1cbb.chunk.js.map