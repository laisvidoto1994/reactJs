(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),l=(n(13),n(1)),i=n(2),s=n(4),u=n(3),m=n(5),p=(n(15),n(16),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("button",{onClick:function(){e.props.funcaoClick(e.props.label)}},this.props.label)}}]),t}(a.Component)),h=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("p",null,"Cliquei no: ",this.props.text)}}]),t}(a.Component);a.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={value:n.props.value,imageUrl:"https://png.pngtree.com/element_origin_min_pic/16/11/20/185831763f61465.jpg",dados:["tag1","tag2","tag3"]},n.estilo={fontSize:20,fontWeight:"bold"},n.handleIncrement=function(){n.setState({value:n.state.value+1})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"formatCount",value:function(){var e=this.state.value;o.a.createElement("h1",null,"Zero");return 0===e?"Zero":e}},{key:"renderTags",value:function(){return 0===this.state.dados.length?"n\xe3o h\xe1 dados!":o.a.createElement("ul",null,this.state.dados.map(function(e){return o.a.createElement("li",{key:e},e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"espacamento1 espacamento3"},o.a.createElement("div",null,o.a.createElement("span",{className:"espacamento2",style:this.estilo},this.formatCount()),o.a.createElement("button",{className:"corCinza",onClick:this.handleIncrement},"Increment"),o.a.createElement("button",{className:"espacamento3 corVermelho",onClick:this.props.onDelete},"delete"),o.a.createElement("br",null),o.a.createElement("br",null)))}}]),t}(a.Component),f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={counters:[{id:1,value:4},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},n.handleDelete=function(){console.log("passou aqui")},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.state.counters.map(function(t){return o.a.createElement(d,{key:t.id,onDelete:e.handleDelete,value:t.value,selected:!0,id:t.id})}))}}]),t}(a.Component);c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.19cacfed.chunk.js.map