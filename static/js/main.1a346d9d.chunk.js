(this["webpackJsonpwe-all-learn"]=this["webpackJsonpwe-all-learn"]||[]).push([[0],{106:function(e,t,a){e.exports=a(249)},249:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),o=(a(43),a(104)),i=a(16),s=a(253),u=a(99),m=a.n(u),d=Object(n.createContext)(),h=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],c=a[1];Object(n.useEffect)((function(){window.localStorage.setItem("learns",JSON.stringify(l))}),[l]);return r.a.createElement(d.Provider,{value:{learns:l,addLearn:function(e,t){console.log(l),c(m.a.orderBy([].concat(Object(o.a)(l),[{date:e,description:t,id:Object(s.a)()}]),["date"],["desc"]))},removeLearn:function(e){c(l.filter((function(t){return t.id!==e})))},editLearn:function(e,t){for(var a=l,n=0;n<l.length;n++)l[n].id===e&&(a[n].description=t,c(a))}}},e.children)},v=function(){var e=Object(n.useContext)(d).learns;return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row text-center"},r.a.createElement("span",{className:"heart-falling"},"\u2764"),r.a.createElement("span",{className:"heart-falling"},"\u2764"),r.a.createElement("span",{className:"heart-falling"},"\u2764"),r.a.createElement("span",{className:"heart-falling"},"\u2764"),r.a.createElement("span",{className:"heart-falling"},"\u2764")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},e.length>0&&r.a.createElement("h2",null,"I learned ",e.length," things..."),e.length<=0&&r.a.createElement("h2",null,"Start learning new things!"))),r.a.createElement("div",{className:"row info"},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,"Not every day needs to be productive or involve shipping code. But every day is about learning something new whether it be about technology, life lessons, and the why - why we do the things we do. Life is short."))))},E=a(42),f=function(e){var t=e.learn,a=Object(n.useContext)(d),l=a.removeLearn,c=a.editLearn,o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],m=s[1],h=Object(n.useState)(t.description),v=Object(i.a)(h,2),f=v[0],g=v[1];return r.a.createElement("div",{className:"container mt-5"},r.a.createElement(E.a,null,r.a.createElement("div",{class:"learning-cards"},r.a.createElement(E.b,{title:t.date,secondaryFooterActions:[{content:"Delete Entry",destructive:!0,onAction:function(){return l(t.id)}}],primaryFooterAction:u?{content:"Save changes",onAction:function(){c(t.id,f),m(!1)}}:{content:"Change what you learned",onAction:function(){m(!0)}}},r.a.createElement(E.b.Section,null,u?r.a.createElement("textarea",{className:"text-edit",name:"textarea",rows:"4",cols:"5",placeholder:"what you learned",value:f,onChange:function(e){return g(e.target.value)},required:!0}):t.description)))))},g=function(e){var t=Object(n.useContext)(d).learns;return r.a.createElement("div",null,r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(f,{learn:e,key:e.id})}))))},p=(a(247),a(248),a(103)),b=function(e){Object(p.a)(e);var t=Object(n.useContext)(d).addLearn,a=Object(n.useState)(""),l=Object(i.a)(a,2),c=l[0],o=l[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),m=u[0],h=u[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c,m),o(""),h("")}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{class:"col-3"},r.a.createElement("input",{type:"date",placeholder:"date",value:c,onChange:function(e){return o(e.target.value)},required:!0})),r.a.createElement("div",{className:"col-9"},r.a.createElement("textarea",{name:"textarea",rows:"4",cols:"5",placeholder:"What I learned",value:m,onChange:function(e){return h(e.target.value)},required:!0}))),r.a.createElement("input",{type:"submit",className:"submit-learn",value:"Add what I learned"}))};var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container mt-5"},r.a.createElement(h,null,r.a.createElement(v,null),r.a.createElement(b,null),r.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.1a346d9d.chunk.js.map