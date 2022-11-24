(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n,a=c(8),s=c.n(a),r=c(7),i=c(17),o=c(6),l=c(15),d=c(16),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(4);!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(n||(n={}));var O={status:n.ALL,query:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/QUERY":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"filter/STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},f=function(e){return{type:"todos/ADD",payload:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/ADD"===t.type?t.payload:e},p=Object(o.combineReducers)({currentTodo:b,filter:m,todos:x}),v=Object(o.createStore)(p,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(d.a))),y=c(9),N=c(3),g=c(5),T=c.n(g),E=c(0),w=(c(26),c(27),c(13)),k=c.n(w),L=r.b,S=r.c,C=c(1),A=function(){var e=L(),t=S((function(e){return e.todos})),c=S((function(e){return e.currentTodo})),a=S((function(e){return e.filter.status})),s=S((function(e){return e.filter.query})),r=Object(E.useMemo)((function(){return t.filter((function(e){switch(a){case n.ACTIVE:return!e.completed;case n.COMPLETED:return e.completed;case n.ALL:default:return e}})).filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}))}),[a,t,s]);return Object(C.jsxs)(C.Fragment,{children:[0===r.length&&Object(C.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(C.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("th",{children:"Title"}),Object(C.jsx)("th",{children:" "})]})}),Object(C.jsx)("tbody",{children:r.map((function(t){return Object(C.jsxs)("tr",{"data-cy":"todo",children:[Object(C.jsx)("td",{className:"is-vcentered",children:t.id}),Object(C.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(C.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("td",{className:"is-vcentered is-expanded",children:Object(C.jsx)("p",{className:k()({"has-text-success":t.completed,"has-text-danger":!t.completed}),children:t.title})}),Object(C.jsx)("td",{className:"has-text-right is-vcentered",children:Object(C.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(t){e(u(t))}(t)},children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:k()("far",{"fa-eye":(null===c||void 0===c?void 0:c.id)!==t.id,"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===t.id})})})})})]},t.id)}))})]})]})},D=function(){return Object(C.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("span",{className:"select",children:Object(C.jsxs)("select",{"data-cy":"statusSelect",children:[Object(C.jsx)("option",{value:"all",children:n.ALL}),Object(C.jsx)("option",{value:"active",children:n.ACTIVE}),Object(C.jsx)("option",{value:"completed",children:n.COMPLETED})]})})}),Object(C.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(C.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search..."}),Object(C.jsx)("span",{className:"icon is-left",children:Object(C.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(C.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(C.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})},M=(c(29),function(){return Object(C.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(C.jsx)("div",{className:"Loader__content"})})});function I(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=500,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var P=function(){var e=L(),t=S((function(e){return e.currentTodo})),c=Object(E.useState)(null),n=Object(N.a)(c,2),a=n[0],s=n[1],r=Object(E.useState)(!0),i=Object(N.a)(r,2),o=i[0],l=i[1];Object(E.useEffect)((function(){var e=function(){var e=Object(y.a)(T.a.mark((function e(t){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I("/users/".concat(t));case 3:c=e.sent,s(c),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Not defined");case 10:return e.prev=10,l(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}();t&&e(t.userId)}),[t]);return Object(C.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(C.jsx)("div",{className:"modal-background"}),o?Object(C.jsx)(M,{}):Object(C.jsxs)("div",{className:"modal-card",children:[Object(C.jsxs)("header",{className:"modal-card-head",children:[Object(C.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(C.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"modal-close",onClick:function(){return e(j())}})]}),Object(C.jsxs)("div",{className:"modal-card-body",children:[Object(C.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(C.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(C.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(C.jsx)("strong",{className:"has-text-danger",children:"Planned"}),a&&Object(C.jsxs)(C.Fragment,{children:[" by ",Object(C.jsx)("a",{href:"mailto:".concat(a.email),children:a.name})]})]})]})]})]})},V=function(){var e=L(),t=S((function(e){return e.currentTodo})),c=Object(E.useState)(!0),n=Object(N.a)(c,2),a=n[0],s=n[1];return Object(E.useEffect)((function(){var t=function(){var t=Object(y.a)(T.a.mark((function t(){var c;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I("/todos");case 3:c=t.sent,e(f(c)),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),new Error("Not defined");case 10:return t.prev=10,s(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"section",children:Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"box",children:[Object(C.jsx)("h1",{className:"title",children:"Todos:"}),Object(C.jsx)("div",{className:"block",children:Object(C.jsx)(D,{})}),Object(C.jsx)("div",{className:"block",children:a?Object(C.jsx)(M,{}):Object(C.jsx)(A,{})})]})})}),t&&Object(C.jsx)(P,{})]})},_=function(){return Object(C.jsx)(r.a,{store:v,children:Object(C.jsx)(i.a,{children:Object(C.jsx)(V,{})})})};s.a.render(Object(C.jsx)(_,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.6163ec3f.chunk.js.map