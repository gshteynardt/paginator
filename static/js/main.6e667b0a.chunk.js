(this.webpackJsonppagination=this.webpackJsonppagination||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(7),l=n.n(a),c=(n(15),n(9)),o=(n(16),n(17),n(6)),s=n(10),u=n(8),f=n.n(u),p=n(1),b=function(e){var t=e.active,n=e.ellipsis,r=e.children,i=e.onClick,a=Object(s.a)(e,["active","ellipsis","children","onClick"]);return Object(p.jsx)("button",Object(o.a)(Object(o.a)({},a),{},{className:f()("Paginator__Item",{Paginator__Item_ellipsis:n},{Paginator__Item_active:t}),onClick:i,children:r}))},d=function(e,t){return e===t},j=Object(r.memo)(b,d),g=function(e){var t=e.items;return Object(p.jsx)("ul",{className:"Paginator",children:t.map((function(e,t){var n=e.type,r=e.page,i=e.selected,a=e.icon,l=e.onClick,c=e.disabled;return Object(p.jsx)("li",{children:Object(p.jsxs)(j,{onClick:l,active:i,ellipsis:n.includes("ellipsis"),disabled:c,children:["page"===n&&r,n.includes("ellipsis")&&"...",a&&a]})},t)}))})},O=function(e,t){return e===t},v=Object(r.memo)(g,O),h=n(2);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var x=r.createElement("path",{d:"M8 1.5L1 8l7 6.5",stroke:"#1A1A1A",strokeWidth:1.6,strokeLinejoin:"round"});function w(e,t){var n=e.title,i=e.titleId,a=y(e,["title","titleId"]);return r.createElement("svg",m({width:9,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},a),n?r.createElement("title",{id:i},n):null,x)}var _=r.forwardRef(w);n.p;function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var C=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.495 1.005a.7.7 0 10-.99.99L5.51 7 .505 12.005a.7.7 0 00.99.99l5.5-5.5a.7.7 0 000-.99l-5.5-5.5zm5 0a.7.7 0 00-.99.99L10.51 7l-5.005 5.005a.7.7 0 00.99.99l5.5-5.5a.7.7 0 000-.99l-5.5-5.5z",fill:"#1A1A1A"});function A(e,t){var n=e.title,i=e.titleId,a=k(e,["title","titleId"]);return r.createElement("svg",P({width:13,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},a),n?r.createElement("title",{id:i},n):null,C)}var I=r.forwardRef(A),E=(n.p,Object(p.jsx)(_,{})),M=Object(p.jsx)(_,{className:"Paginator__Arrow Paginator__Arrow_rotate"}),S={first:Object(p.jsx)(I,{className:"Paginator__Arrow Paginator__Arrow_rotate"}),previous:E,next:M,last:Object(p.jsx)(I,{})};var L=function(){var e=Object(r.useState)(1),t=Object(c.a)(e,2),n=function(e){var t=e.count,n=e.boundaryCount,r=e.siblingCount,i=e.page,a=void 0===i?1:i,l=e.onClick,c=function(e,t){var n=t-e+1;return Array.from({length:n},(function(t,n){return e+n}))},o=c(1,Math.min(n,t)),s=c(Math.max(t-n+1,n+1),t),u=Math.max(Math.min(a-r,t-n-2*r-1),n+2),f=Math.min(Math.max(a+r,n+2*r+2),s.length>0?s[0]-2:t-1),p=["first"].concat(["previous"],Object(h.a)(o),Object(h.a)(u>n+2?["start-ellipsis"]:n+1<t-n?[n+1]:[]),Object(h.a)(c(u,f)),Object(h.a)(f<t-n-1?["end-ellipsis"]:t-n>n?[t-n]:[]),Object(h.a)(s),["next"],["last"]),b=function(e){switch(e){case"first":return 1;case"previous":return a-1;case"next":return a+1;case"last":return t;default:return 1}};return p.map((function(e){return"number"===typeof e?{onClick:function(t){l(e)},type:"page",page:e,selected:e===a}:{onClick:function(t){l(b(e))},type:e,page:b(e),selected:!1,icon:"first"===e||"previous"===e||"next"===e||"last"===e?S[e]:null,disabled:e.includes("ellipsis")||"previous"===e&&a<=1||"next"===e&&a>=t}}))}({count:50,boundaryCount:1,siblingCount:1,defaultPage:1,page:t[0],onClick:t[1]});return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(v,{items:n})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),r(e),i(e),a(e),l(e)}))};l.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root")),N()}},[[19,1,2]]]);
//# sourceMappingURL=main.6e667b0a.chunk.js.map