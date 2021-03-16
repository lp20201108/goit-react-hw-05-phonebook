(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{22:function(t,e,n){t.exports={btnRemove:"ContactListItem_btnRemove__16Umn",contactListItem:"ContactListItem_contactListItem__2yepK"}},23:function(t,e,n){t.exports={label:"Filter_label__2h4r9",inputFilter:"Filter_inputFilter__dkkHE"}},29:function(t,e,n){t.exports={contactList:"ContactsList_contactList__3M0u8",message:"ContactsList_message__3PoEO"}},30:function(t,e,n){t.exports={container:"App_container__hBUO7",root:"App_root__3hRQI"}},38:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(10),s=n.n(o),i=(n(38),n(11)),l=n(12),u=n(16),b=n(14),m=n(3),j=n(8),h=n(19),d=n(28),p=n(4),O=n(25),f=Object(p.b)("contacts/add",(function(t){return{payload:Object(d.a)({id:Object(O.a)()},t)}})),v=Object(p.b)("contacts/remove"),x=Object(p.b)("contacts/filter"),_=n(9),g=n.n(_),C=n(1),N=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(j.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.props.contacts.find((function(e){return e.name===t.state.name})),a=t.props.contacts.find((function(e){return e.number===t.state.number}));n?alert("This contact NAME already exists\n         as Name:".concat(n.name," Tel:").concat(n.number)):a?alert("This contact NUMBER already exists as\n         Tel:".concat(a.number," Name:").concat(a.name)):t.state.name?t.state.number?(t.props.onSubmit({name:t.state.name,number:t.state.number}),t.setState({name:"",number:""})):alert("Please, enter the contact number"):alert("Please, enter the contact name")},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("form",{onSubmit:this.handleSubmit,className:g.a.contactForm,children:[Object(C.jsxs)("label",{htmlFor:"name",className:g.a.label,children:["Name",Object(C.jsx)("input",{name:"name",type:"text",className:g.a.contactInput,placeholder:"insert name",onChange:this.handleChange,value:this.state.name})]}),Object(C.jsxs)("label",{htmlFor:"number",className:g.a.label,children:["Number",Object(C.jsx)("input",{name:"number",type:"text",className:g.a.contactInput,placeholder:"insert number",onChange:this.handleChange,value:this.state.number})]}),Object(C.jsx)("button",{type:"submit",className:g.a.btn,children:"Add contact"})]})}}]),n}(c.Component),y=Object(m.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e){return t(f(e))}}}))(N),F=n(22),k=n.n(F),I=function(t){var e=t.id,n=t.name,a=t.number,c=t.handleRemove;return Object(C.jsxs)("li",{className:k.a.contactListItem,children:[Object(C.jsx)("span",{className:"contactName",children:n}),Object(C.jsxs)("span",{className:"contactNumber",children:[" ",a]}),Object(C.jsx)("button",{onClick:function(){return c(e)},className:k.a.btnRemove,children:"Delete"})]})},L=n(29),R=n.n(L),w=Object(m.b)(null,(function(t){return{handleRemove:function(e){return t(v(e))}}}))((function(t){var e=t.visibleContacts,n=t.handleRemove;return e.length?Object(C.jsx)("ul",{className:"contactsList",children:e.map((function(t){var e=t.id,a=void 0===e?Object(h.uuid)():e,c=t.name,r=t.number;return Object(C.jsx)(I,{id:a,name:c,number:r,handleRemove:n},a)}))}):Object(C.jsx)("p",{className:R.a.message,children:"Phonebook is empty!"})})),S=n(23),P=n.n(S),A=Object(m.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{handleChange:function(e){return t(x(e.target.value))}}}))((function(t){var e=t.filter,n=t.handleChange;return Object(C.jsxs)("label",{className:P.a.label,children:["Find contacts by name",Object(C.jsx)("input",{className:P.a.inputFilter,name:"filter",type:"text",placeholder:"search contact",onChange:n,value:e})]})})),E=n(30),T=n.n(E),M=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:T.a.container,children:[Object(C.jsx)("h1",{className:"titlePhonebook",children:"Phonebook"}),Object(C.jsx)(y,{}),Object(C.jsx)("h2",{className:"title",children:"Contacts"}),Object(C.jsx)(A,{}),Object(C.jsx)(w,{visibleContacts:this.props.contacts})]})})}}]),n}(c.Component),B=Object(m.b)((function(t){var e=t.contacts,n=e.filter,a=e.items;return console.log(n,a),{contacts:function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(a,n),filter:n,isContactIncludes:!!a.length}}))(M),U=n(31),D=n(15),H=n(5),J=n(32),Q=n.n(J),q=n(33),z=n.n(q),G=n(2),K=Object(p.c)([],(a={},Object(j.a)(a,f,(function(t,e){var n=e.payload;return[].concat(Object(D.a)(t),[n])})),Object(j.a)(a,v,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),W=Object(p.c)("",Object(j.a)({},x,(function(t,e){return e.payload}))),V=Object(G.c)({items:K,filter:W}),X=[].concat(Object(D.a)(Object(p.d)({serializableCheck:{ignoredActions:[H.a,H.f,H.b,H.c,H.d,H.e]}})),[z.a]),Y={key:"contacts",storage:Q.a,blacklist:["filter"]},Z=Object(p.a)({reducer:{contacts:Object(H.g)(Y,V)},middleware:X,devTools:!1}),$=Object(H.h)(Z);s.a.render(Object(C.jsx)(m.a,{store:Z,children:Object(C.jsx)(U.a,{loading:null,persistor:$,children:Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(B,{})})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__2hrQg",label:"ContactForm_label__2EGvh",contactInput:"ContactForm_contactInput__2dPHh",btn:"ContactForm_btn__3W8gq"}}},[[51,1,2]]]);
//# sourceMappingURL=main.0485a22e.chunk.js.map