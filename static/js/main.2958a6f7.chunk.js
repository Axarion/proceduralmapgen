(this.webpackJsonpproceduralmapgen=this.webpackJsonpproceduralmapgen||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),l=a.n(o),i=(a(15),a(4)),c=a(5),s=a(6),m=a(8),u=a(7),h=a(1),d=a(9),v=(a(16),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={dimensions:30,maxTunnels:100,maxLength:8},a.onClick=a.onClick.bind(Object(h.a)(a)),a.onChange=a.onChange.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"createArray",value:function(e,t){for(var a=[],n=0;n<t;n++){a.push([]);for(var r=0;r<t;r++)a[n].push(e)}return a}},{key:"onChange",value:function(e){this.setState(Object(i.a)({},e.target.name,this.validator(e.target.value)))}},{key:"validator",value:function(e){var t=Number(e);return isNaN(t)?0:t}},{key:"createMap",value:function(){for(var e,t=this.state.dimensions,a=this.state.maxTunnels,n=this.state.maxLength,r=this.createArray(1,t),o=Math.floor(Math.random()*t),l=Math.floor(Math.random()*t),i=[[-1,0],[1,0],[0,-1],[0,1]],c=[];a&&t&&n;){do{e=i[Math.floor(Math.random()*i.length)]}while(e[0]===-c[0]&&e[1]===-c[1]||e[0]===c[0]&&e[1]===c[1]);for(var s=Math.ceil(Math.random()*n),m=0;m<s&&!(0===o&&-1===e[0]||0===l&&-1===e[1]||o===t-1&&1===e[0]||l===t-1&&1===e[1]);)r[o][l]=0,o+=e[0],l+=e[1],m++;m&&(c=e,a--)}return r}},{key:"onClick",value:function(e){this.forceUpdate()}},{key:"render",value:function(){var e=this.createMap();return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group row text-center"},r.a.createElement("div",{className:"inline"},r.a.createElement("label",null,"dimensions"),r.a.createElement("input",{className:"form-control",name:"dimensions",type:"text",maxLength:"2",value:this.state.dimensions,onChange:this.onChange})),r.a.createElement("div",{className:"inline"},r.a.createElement("label",null,"maxTunnels"),r.a.createElement("input",{className:"form-control",name:"maxTunnels",type:"text",maxLength:"3",value:this.state.maxTunnels,onChange:this.onChange})),r.a.createElement("div",{className:"inline"},r.a.createElement("label",null,"maxLength"),r.a.createElement("input",{className:"form-control",name:"maxLength",type:"text",maxLength:"3",value:this.state.maxLength,onChange:this.onChange}))),r.a.createElement("table",{className:"grid",onClick:this.onClick},r.a.createElement("thead",null,e.map((function(e,t){return r.a.createElement("tr",{key:t},e.map((function(e,t){return r.a.createElement("td",{className:1===e?"wall":"tunnel",key:t}," ")})))})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.2958a6f7.chunk.js.map