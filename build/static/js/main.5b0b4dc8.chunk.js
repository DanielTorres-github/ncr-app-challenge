(this["webpackJsonpncr-challenge"]=this["webpackJsonpncr-challenge"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(19),s=n(10),a=n(2),o=n(4),i=n(3);function j(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),j=Object(o.a)(a,2),u=j[0],l=j[1];function d(){return 0===u}function b(){return Math.floor(n.length/5)===u}return Object(c.useEffect)((function(){fetch("https://api.npoint.io/97d89162575a9d816661").then((function(e){return e.json()})).then((function(e){r(e.cuentas.filter((function(e){return function(e){return"$"===e.moneda||"u$s"===e.moneda}(e)&&function(e){return e.n.trim()}(e)&&function(e){return"CC"===e.tipo_letras||"CA"===e.tipo_letras}(e)})))}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:"Consulta saldo"}),Object(i.jsx)("h1",{children:"Seleccionar cuenta a consultar"}),Object(i.jsxs)("div",{className:"accountContainer",children:[!d()&&Object(i.jsx)("button",{className:"accountBox",onClick:function(){l(u-1)},children:Object(i.jsx)("p",{children:"atras"})}),function(){var e=d()||b()?5:4,t=d()||b()?0:1;return n.slice(u*e+t,u*e+e+t)}().map((function(e,t){return Object(i.jsx)("div",{className:"accountBox",children:Object(i.jsxs)(s.b,{to:"/detail/".concat(e.n),children:[Object(i.jsx)("p",{children:"CC"===e.tipo_letras?"Cuenta Corriente":"Caja De Ahorro"}),Object(i.jsx)("p",{children:e.n})]})},t)})),!b()&&Object(i.jsx)("button",{className:"accountBox",onClick:function(){l(u+1)},children:Object(i.jsx)("p",{children:"mas opciones"})})]})]})}function u(){var e=Object(a.o)().id,t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],j=n[1];return Object(c.useEffect)((function(){fetch("https://api.npoint.io/97d89162575a9d816661").then((function(e){return e.json()})).then((function(t){j(t.cuentas.filter((function(e){return function(e){return"$"===e.moneda||"u$s"===e.moneda}(e)&&function(e){return e.n.trim()}(e)&&function(e){return"CC"===e.tipo_letras||"CA"===e.tipo_letras}(e)})).find((function(t){return t.n===e})))}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Consulta de saldo"}),Object(i.jsx)("h1",{children:"Este es tu saldo actual"}),Object(i.jsxs)("p",{children:["Saldo de la cuenta: ",r.moneda," ",r.saldo]}),Object(i.jsxs)("p",{children:["Tipo de Cuenta:"," ","CC"===r.tipo_letras?"Cuenta corriente":"Caja de Ahorro"," ","en ","$"===r.moneda?"Pesos":"Dolares"]}),Object(i.jsxs)("p",{children:["Numero de cuenta: ",r.n]}),Object(i.jsx)(s.b,{to:"/",children:Object(i.jsx)("button",{className:"accountBox",children:Object(i.jsx)("p",{children:"salir"})})})]})}n(29);function l(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(s.a,{children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("div",{className:"banner"}),Object(i.jsxs)(a.c,{children:[Object(i.jsx)(a.a,{path:"/",element:Object(i.jsx)(j,{})}),Object(i.jsx)(a.a,{path:"/detail/:id",element:Object(i.jsx)(u,{})})]})]})})})}var d=document.getElementById("root");Object(r.createRoot)(d).render(Object(i.jsx)(c.StrictMode,{children:Object(i.jsx)(l,{})}))}},[[30,1,2]]]);
//# sourceMappingURL=main.5b0b4dc8.chunk.js.map