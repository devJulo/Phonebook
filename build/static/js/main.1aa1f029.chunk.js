(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(0),s=t(1),o=t(15),a=t.n(o),c=t(3),u=function(e){var n=e.text,t=e.value,s=e.handleOnChange;return Object(r.jsxs)("div",{children:[n," ",Object(r.jsx)("input",{value:t,onChange:s})]})},i=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(u,{value:e.newSearch,handleOnChange:function(n){var t=n.target.value;e.setNewSearch(t);var r=[];""===(t=t.toLowerCase())?e.persons.map((function(e){return r.push(e)})):e.persons.map((function(e){var n=new RegExp("".concat(t)),s=e.name.toLowerCase();return n.test(s)?r.push(e):r})),e.setPersonsToRender(r)},text:"filter shown with"})})},d=t(6),b=function(e){var n=e.type,t=e.text;return Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:n,children:t})})},m=t(4),l=t.n(m),f="/api/persons",j=function(){return l.a.get(f).then((function(e){return e.data}))},h=j,p=function(e){return l.a.post(f,e).then((function(e){return e.data}))},O=function(e,n){var t=f+e;return l.a.delete(t,n).then((function(){return j()}))},w=function(e,n){var t=f+e;return l.a.put(t,n).then((function(e){return e.data}))},g=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=e.persons.find((function(n){return n.name===e.newName}));if(t){var r="".concat(e.newName||"name"," is already added to phonebook. Do you want to update the phone number ? ");window.confirm(r)&&function(n){var t=e.persons.find((function(e){return e.id===n})),r=Object(d.a)(Object(d.a)({},t),{},{number:e.newNumber});w(n,r).then((function(t){e.setPersons(e.persons.map((function(e){return e.id!==n?e:t}))),e.setPersonsToRender(e.personsToRender.map((function(e){return e.id!==n?e:t}))),e.setNewName(""),e.setNewNumber("")})).then((function(){e.setUpdateMessage("".concat(t.name,"'s number updated")),setTimeout((function(){e.setUpdateMessage(null)}),3e3)})).catch((function(n){e.setErrorMessage("Information of ".concat(t.name," has already been removed from server")),setTimeout((function(){e.setErrorMessage(null)}),5e3)}))}(t.id)}else""===e.newName||""===e.newNumber?alert("please provide a name and a phone number"):function(){var n={name:e.newName,number:e.newNumber};p(n).then((function(n){e.setPersons(e.persons.concat(n)),e.setPersonsToRender(e.persons.concat(n)),e.setNewName(""),e.setNewNumber("")})).then((function(){e.setUpdateMessage("".concat(n.name,"'s number created")),setTimeout((function(){e.setUpdateMessage(null)}),3e3)})).catch((function(t){e.setErrorMessage("Information of ".concat(n.name," has already been removed from server")),setTimeout((function(){e.setErrorMessage(null)}),5e3)}))}()},children:[Object(r.jsx)("h2",{children:"add a new contact"}),Object(r.jsx)(u,{value:e.newName,handleOnChange:function(n){e.setNewName(n.target.value)},text:"name"}),Object(r.jsx)(u,{value:e.newNumber,handleOnChange:function(n){e.setNewNumber(n.target.value)},text:"number"}),Object(r.jsx)(b,{type:"type",text:"add"})]})})},x=function(e){var n=e.person,t=e.handleDelete;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("p",{children:[n.name," ",n.number,Object(r.jsx)("button",{onClick:t,children:"delete"})]})})},N=function(e){return Object(r.jsx)(r.Fragment,{children:e.personsToRender.map((function(n){return Object(r.jsx)(x,{person:n,handleDelete:function(){return function(n){var t=e.persons.find((function(e){return e.id===n}));window.confirm("Delete ".concat(t.name," ?"))&&O(n,t).then((function(n){e.setPersonsToRender(n),e.setPersons(n),e.setNewSearch("")})).catch((function(r){e.setErrorMessage("Information of ".concat(t.name," has already been removed from server")),setTimeout((function(){e.setErrorMessage(null)}),5e3),e.setPersons(e.persons.filter((function(e){return e.id!==n}))),e.setPersonsToRender(e.personsToRender.filter((function(e){return e.id!==n})))}))}(n.id)}},n.name)}))})},v=function(e){var n=e.message;return null===n?null:Object(r.jsx)("div",{style:{borderStyle:"solid",borderColor:"green",padding:"10px",marginBottom:"10px",borderRadius:"20px",background:"#92e692",color:"green"},children:n})},T=function(e){var n=e.message;return null===n?null:Object(r.jsx)("div",{style:{borderStyle:"solid",borderColor:"red",padding:"10px",marginBottom:"10px",borderRadius:"20px",background:"#ffc3c3",color:"red"},children:n})},R=function(){var e=Object(s.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],a=Object(s.useState)(""),u=Object(c.a)(a,2),d=u[0],b=u[1],m=Object(s.useState)(""),l=Object(c.a)(m,2),f=l[0],j=l[1],p=Object(s.useState)(""),O=Object(c.a)(p,2),w=O[0],x=O[1],R=Object(s.useState)(t),P=Object(c.a)(R,2),S=P[0],y=P[1],M=Object(s.useState)(null),E=Object(c.a)(M,2),C=E[0],k=E[1],D=Object(s.useState)(null),F=Object(c.a)(D,2),U=F[0],I=F[1];return Object(s.useEffect)((function(){h().then((function(e){o(e),y(e)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(T,{message:U}),Object(r.jsx)(v,{message:C}),Object(r.jsx)(i,{newSearch:w,setNewSearch:x,persons:t,setPersons:o,newName:d,setNewName:b,newNumber:f,setNewNumber:j,personsToRender:S,setPersonsToRender:y}),Object(r.jsx)(g,{persons:t,setPersons:o,newName:d,setNewName:b,newNumber:f,setNewNumber:j,personsToRender:S,setPersonsToRender:y,setUpdateMessage:k,setErrorMessage:I}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(N,{personsToRender:S,persons:t,setPersonsToRender:y,setPersons:o,setNewSearch:x,setErrorMessage:I})]})};t(38);a.a.render(Object(r.jsx)(R,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1aa1f029.chunk.js.map