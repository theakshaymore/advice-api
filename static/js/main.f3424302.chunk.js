(this["webpackJsonpget-advice"]=this["webpackJsonpget-advice"]||[]).push([[0],{11:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),i=t(3),r=t.n(i),a=(t(9),t(4)),d=t(0);var j=function(){var e=Object(s.useState)(""),c=Object(a.a)(e,2),t=c[0],n=c[1];return Object(s.useEffect)((function(){fetch("https://api.adviceslip.com/advice").then((function(e){return e.json()})).then((function(e){n(e.slip),console.log(e)})).catch((function(e){console.log(e)}))}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{class:"card",children:[Object(d.jsx)("div",{class:"card-header",children:"YOUR ADVICE\u2728"}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h5",{class:"card-title",children:Object(d.jsx)("div",{className:"alert alert-secondary",role:"alert",children:t.advice})}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{class:"btn btn-secondary",onClick:function(){window.location.reload()},children:"Get Another Advice"})]})]})]})})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))},9:function(e,c,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.f3424302.chunk.js.map