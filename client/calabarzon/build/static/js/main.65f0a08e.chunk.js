(this.webpackJsonpcalabarzon=this.webpackJsonpcalabarzon||[]).push([[0],{102:function(e,a,t){e.exports={left:"login_left__aSEAi",right:"login_right__Wsk4f",map:"login_map__A0f_g",form_login:"login_form_login__lgO7-"}},122:function(e,a,t){e.exports=t(142)},126:function(e,a,t){},129:function(e,a,t){},132:function(e,a,t){e.exports=t.p+"static/media/logo.ccb5fc73.png"},141:function(e,a){},142:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),l=t.n(c),s=(t(126),t(127),t(128),t(129),t(59)),o=t(50),u=t(14),i=Object(n.createContext)({isOpen:!0,isMobile:!0,previousWidth:-1,page:"home"}),m=Object(n.createContext)({loggedIn:!1}),p=Object(n.createContext)(0),d=Object(n.createContext)((new Date).getFullYear().toString()),E=function(e){var a=e.children,t=Object(n.useState)(0),c=Object(u.a)(t,2),l=c[0],s=c[1],o=Object(n.useState)({isOpen:!0,isMobile:!0,previousWidth:-1,page:"home"}),E=Object(u.a)(o,2),b=E[0],h=E[1],f=Object(n.useState)((new Date).getFullYear().toString()),g=Object(u.a)(f,2),v=g[0],O=g[1],y=Object(n.useState)({loggedIn:!1}),w=Object(u.a)(y,2),j=w[0],x=w[1];return r.a.createElement(i.Provider,{value:{app:b,setApp:h}},r.a.createElement(m.Provider,{value:{user:j,setUser:x}},r.a.createElement(p.Provider,{value:{brgy:l,setBrgy:s}},r.a.createElement(d.Provider,{value:{date:v,setDate:O}},a))))},b=t(16),h=t.n(b),f=t(18),g=t(37),v={ENV:"dev",title:"Calabarzon",host:"http://localhost:5000",headers:{Accept:"application/json","Content-Type":"application/json"}},O=t(32),y=t(52),w=t(156),j=t(152),x=t(145),C=t(146),N=t(102),S=t.n(N),I=(t(132),t(20)),k=t(19),T=t(9),_=Object(o.f)((function(e){var a=e.history,t=Object(n.useContext)(m).setUser,c=Object(n.useState)(!1),l=Object(u.a)(c,2),s=l[0],o=l[1],i=function(){var e=Object(g.a)(h.a.mark((function e(n){var r,c,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),r={headers:v.headers,method:"POST",body:JSON.stringify(Object(f.a)({},n))},e.next=4,fetch("".concat(v.host,"/auth"),r);case 4:return c=e.sent,e.next=7,c.json();case 7:if(l=e.sent,console.log(l),"fail"!=l.status){e.next=12;break}return d(),e.abrupt("return");case 12:if(t({loggedIn:!0,accountType:l.account_type}),localStorage.setItem("accountType",l.account_type),"admin"!=l.account_type){e.next=17;break}return e.next=17,a.push("/admin");case 17:return e.next=19,a.push("/home");case 19:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){document.title=v.title+" | Login"}),[]);var p=O.a().shape({username:O.b().required("Username is required."),password:O.b().required("Password is required"),brgy:O.b().required("Brgy is required")}),d=function(){return I.b.error("Error Invalid Username or Password",{containerId:"A"})};return r.a.createElement("div",null,r.a.createElement(I.a,{enableMultiContainer:!0,containerId:"A",position:I.b.POSITION.TOP_RIGHT}),r.a.createElement("div",{className:S.a.left+" shadow"},r.a.createElement(w.a,{className:S.a.form_login+" shadow"},r.a.createElement("h3",{style:{paddingBottom:"10px"}},"Login"),r.a.createElement(y.b,{initialValues:{username:"",password:"",brgy:"anos"},validationSchema:p,onSubmit:function(e){return i(e)}},(function(e){var a=e.errors,t=e.touched,n=e.handleChange,c=e.values;return r.a.createElement(y.a,null,r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Username"),r.a.createElement(j.a.Control,{size:"sm",type:"text",name:"username",value:c.username,onChange:n,isInvalid:t.username&&a.username,placeholder:"Enter Username"}),r.a.createElement(j.a.Control.Feedback,{type:"invalid"},a.username)),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Password"),r.a.createElement(x.a,{size:"sm"},r.a.createElement(j.a.Control,{type:s?"text":"password",name:"password",value:c.password,onChange:n,isInvalid:t.password&&a.password,placeholder:"Enter Password"}),r.a.createElement(x.a.Append,null,r.a.createElement(x.a.Text,null,r.a.createElement(k.a,{icon:s?T.f:T.g,style:{cursor:"pointer"},onClick:function(){return o(!s)}})))),r.a.createElement("div",{className:"text-danger"},t.password&&a.password?r.a.createElement("small",null,a.password):r.a.createElement(r.a.Fragment,null))),r.a.createElement(C.a,{className:"shadow",block:!0,variant:"success",size:"sm",type:"submit"},"Login"))})))),r.a.createElement("div",{className:S.a.right}))})),P=t(4),A=t.n(P),z=t(148),U=t(154),D=t(153),L=t(155),q=t(147),B=Object(o.f)((function(e){var a=e.history,t=Object(n.useContext)(i),c=t.app,l=t.setApp;return r.a.createElement(U.a,{bg:"light",className:"navbar shadow-sm p-3 mb-3 bg-white rounded",expand:!0},r.a.createElement(C.a,{variant:"outline-success",onClick:function(){return l(Object(f.a)({},c,{isOpen:!c.isOpen}))}},r.a.createElement(k.a,{icon:T.a})),r.a.createElement(U.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(U.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(D.a,{className:"mr-auto pl-2",navbar:!0}),r.a.createElement(D.a,{className:"ml-auto pt-2",navbar:!0},r.a.createElement(L.a,{placement:"auto",overlay:r.a.createElement(q.a,null,"Sign Out")},r.a.createElement(D.a.Link,{onClick:function(e){e.preventDefault(),a.push("/login"),localStorage.removeItem("accountType"),localStorage.removeItem("brgy")},href:"#"},r.a.createElement(k.a,{size:"lg",icon:T.k}))))))})),H=[{name:"Home",page:"home",icon:T.h,account_type:["user","admin"]},{name:"Prediction",page:"prediction",icon:T.c,account_type:["user","admin"]},{name:"Data Visualization",page:"visualization",icon:T.b,account_type:["user","admin"]},{name:"Dataset",page:"dataset",icon:T.e,account_type:["admin","user"]},{name:"Account",page:"account",icon:T.n,account_type:["admin"]},{name:"About",page:"about",icon:T.i,account_type:["user","admin"]}],F=Object(o.f)((function(){var e=Object(n.useContext)(i),a=e.app,t=e.setApp;return r.a.createElement("div",{className:A()("sidebar shadow",{"is-open":a.isOpen})},r.a.createElement("div",{className:"sidebar-header pt-3 pb-3"},r.a.createElement(C.a,{variant:"link",onClick:function(){return t(Object(f.a)({},a,{isOpen:!a.isOpen}))},style:{color:"#000"},className:"mt-4"},r.a.createElement(k.a,{icon:T.l,pull:"right",size:"xs"}))),r.a.createElement(D.a,{className:"flex-column pt-2"},H.map((function(e,t){if(e.account_type.includes(localStorage.getItem("accountType")))return r.a.createElement(D.a.Item,{key:t,className:A()({active:e.page==a.page})},r.a.createElement(s.b,{className:"nav-link",to:"/".concat(e.page)},r.a.createElement(k.a,{icon:e.icon,className:"mr-2"}),e.name))}))))})),G=function(e){var a=e.children,t=Object(n.useContext)(i),c=t.app,l=t.setApp;return r.a.createElement("div",{className:"App wrapper"},r.a.createElement(F,null),r.a.createElement(z.a,{fluid:!0,className:A()("content",{"is-open":c.isOpen})},r.a.createElement(B,{toggle:function(){return l(Object(f.a)({},c,{IsOpen:!c.isOpen}))}}),a))},J=function(){return r.a.createElement(G,null)},M=function(){return r.a.createElement(G,null)},V=t(149),W=t(117),Y=t(150),R=function(){var e=Object(n.useContext)(i),a=e.app,t=e.setApp,c=Object(n.useState)([]),l=Object(u.a)(c,2),s=l[0],o=l[1];function m(){return(m=Object(g.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v.host,"/dataset/",2017));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,o(t),console.log(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){document.title=v.title+" | Dataset",t(Object(f.a)({},a,{page:"dataset"})),localStorage.page="dataset"}),[]),Object(n.useLayoutEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),r.a.createElement(G,null,r.a.createElement(V.a,null,r.a.createElement(W.a,{sm:12,md:12},r.a.createElement(C.a,{size:"sm",variant:"outline-success mb-3",className:"float-right",onClick:function(){}},"New Entry")),r.a.createElement(W.a,{className:"text-center",sm:12,md:12},r.a.createElement(Y.a,{striped:!0,bordered:!0,hover:!0,size:"sm",responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Year"),r.a.createElement("th",null,"Brgy"),r.a.createElement("th",null,"Sex"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Disease Code"),r.a.createElement("th",null,"Cases"),r.a.createElement("th",{width:"15%"},"Action"))),r.a.createElement("tbody",null,s.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,a+1),r.a.createElement("td",null,e.Year))})))))))},K=t(151),Q=t(116),X=(t(141),function(){var e=Object(n.useContext)(i),a=e.app,t=e.setApp,c=Object(n.useState)([]),l=Object(u.a)(c,2),s=l[0],o=l[1],m=Object(n.useState)(!1),p=Object(u.a)(m,2),d=p[0],E=p[1],b=Object(n.useState)(!1),N=Object(u.a)(b,2),S=N[0],_=N[1],P=Object(n.useState)(!1),A=Object(u.a)(P,2),U=A[0],D=A[1],L=Object(n.useState)(!1),q=Object(u.a)(L,2),B=q[0],H=q[1],F=Object(n.useState)({index:0}),J=Object(u.a)(F,2),M=J[0],R=J[1],X=Object(n.useState)(0),Z=Object(u.a)(X,2),$=Z[0],ee=Z[1];function ae(){return te.apply(this,arguments)}function te(){return(te=Object(g.a)(h.a.mark((function e(){var a,t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:v.headers},e.next=3,fetch("".concat(v.host,"/accounts"),a);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,o(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(){return(ne=Object(g.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log($),a={headers:v.headers,method:"DELETE",body:JSON.stringify({userIndex:$})},e.next=4,fetch("".concat(v.host,"/accounts"),a);case 4:return t=e.sent,e.next=7,t.json();case 7:e.sent,le(),ae(),pe();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){return(re=Object(g.a)(h.a.mark((function e(a){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),t={headers:v.headers,method:"PUT",body:JSON.stringify(Object(f.a)({index:M.index},a))},e.next=4,fetch("".concat(v.host,"/accounts"),t);case 4:return n=e.sent,e.next=7,n.json();case 7:e.sent,se(),ae(),H(!1),de();case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return(ce=Object(g.a)(h.a.mark((function e(a){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:v.headers,method:"POST",body:JSON.stringify(Object(f.a)({},a))},e.next=3,fetch("".concat(v.host,"/accounts"),t);case 3:return n=e.sent,e.next=6,n.json();case 6:e.sent,oe(),ae(),H(!1),me();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){document.title=v.title+" | Account List",t(Object(f.a)({},a,{page:"account"})),localStorage.page="account"}),[]),Object(n.useLayoutEffect)((function(){ae()}),[]);var le=function(){E(!1)},se=function(){_(!1)},oe=function(){D(!1)},ue=O.a().shape({username:O.b().required("Username is required."),password:O.b().required("Password is required.")}),ie=O.a().shape({password:O.b().required("Password is required.")}),me=function(){return I.b.info("New User Added!",{containerId:"NEW"})},pe=function(){return I.b.info("Delete Success!",{containerId:"DELETE"})},de=function(){return I.b.info("Update Success!",{containerId:"UPDATE"})};return r.a.createElement(G,null,r.a.createElement(I.a,{enableMultiContainer:!0,containerId:"NEW",position:I.b.POSITION.TOP_RIGHT})," ",r.a.createElement(I.a,{enableMultiContainer:!0,containerId:"DELETE",position:I.b.POSITION.TOP_RIGHT}),r.a.createElement(I.a,{enableMultiContainer:!0,containerId:"UPDATE",position:I.b.POSITION.TOP_RIGHT}),r.a.createElement(z.a,null,r.a.createElement(V.a,{className:"mb-2"},r.a.createElement(W.a,{sm:12,md:12},r.a.createElement(C.a,{className:"mr-1 float-right",size:"sm",variant:"outline-success",onClick:function(){D(!0)}},r.a.createElement(k.a,{icon:T.j,className:"mr-2"}),"New Account"))),r.a.createElement(V.a,null,r.a.createElement(W.a,{sm:12,md:12},r.a.createElement(w.a,{className:"p-2 text-center"},r.a.createElement(Y.a,{bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Username"),r.a.createElement("th",{width:"35%"},"Action"))),r.a.createElement("tbody",null,s.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,a+1),r.a.createElement("td",null,e.username),r.a.createElement("td",null,r.a.createElement(C.a,{className:"mr-1",size:"sm",variant:"outline-danger",onClick:function(){return function(e){ee(e),E(!0)}(a)}},r.a.createElement(k.a,{icon:T.m,className:"mr-2"}),"Delete"),r.a.createElement(C.a,{size:"sm",variant:"outline-secondary",onClick:function(){return t={index:a,brgy:e.brgy},R(t),void _(!0);var t}},r.a.createElement(k.a,{icon:T.d,className:"mr-2"}),"Update Password")))})))))))),r.a.createElement(K.a,{show:d,onHide:le},r.a.createElement(K.a.Header,{closeButton:!0},r.a.createElement(K.a.Title,null,"Confirm")),r.a.createElement(K.a.Body,null,"Are you sure you want to delete?"),r.a.createElement(K.a.Footer,null,r.a.createElement(C.a,{variant:"danger",onClick:function(){return function(){return ne.apply(this,arguments)}()}},"Yes"),r.a.createElement(C.a,{variant:"outline-secondary",onClick:le},"No"))),r.a.createElement(K.a,{show:S,onHide:se},r.a.createElement(y.b,{initialValues:{password:""},validationSchema:ie,onSubmit:function(e){return function(e){return re.apply(this,arguments)}(e)}},(function(e){var a=e.errors,t=e.touched,n=e.handleChange,c=e.values;return r.a.createElement(y.a,null,r.a.createElement(K.a.Header,{closeButton:!0},r.a.createElement(K.a.Title,null,"Update User Password")),r.a.createElement(K.a.Body,null,r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Password"),r.a.createElement(x.a,{size:"sm"},r.a.createElement(Q.a,{name:"password",type:B?"text":"password",isInvalid:t.password&&a.password,value:c.password,onChange:n,placeholder:"Enter new password"}),r.a.createElement(x.a.Append,null,r.a.createElement(x.a.Text,null,r.a.createElement(k.a,{icon:B?T.f:T.g,style:{cursor:"pointer"},onClick:function(){return H(!B)}})))),r.a.createElement("div",{className:"text-danger"},t.password&&a.password?r.a.createElement("small",null,a.password):r.a.createElement(r.a.Fragment,null)))),r.a.createElement(K.a.Footer,null,r.a.createElement(C.a,{type:"submit",variant:"success",size:"sm"},"Save"),r.a.createElement(C.a,{size:"sm",variant:"outline-secondary",onClick:se},"Cancel")))}))),r.a.createElement(K.a,{show:U,onHide:oe},r.a.createElement(y.b,{initialValues:{username:"",password:""},validationSchema:ue,onSubmit:function(e){return function(e){return ce.apply(this,arguments)}(e)}},(function(e){var a=e.errors,t=e.touched,n=e.handleChange,c=e.values;return r.a.createElement(y.a,null,r.a.createElement(K.a.Header,{closeButton:!0},r.a.createElement(K.a.Title,null,"New User")),r.a.createElement(K.a.Body,null,r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Username"),r.a.createElement(Q.a,{size:"sm",type:"text",name:"username",value:c.username,onChange:n,isInvalid:t.username&&a.username,placeholder:"Enter Username"}),r.a.createElement(j.a.Control.Feedback,{type:"invalid"},a.username)),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Password"),r.a.createElement(x.a,{size:"sm"},r.a.createElement(Q.a,{name:"password",type:B?"text":"password",isInvalid:t.password&&a.password,value:c.password,onChange:n,placeholder:"Enter new password"}),r.a.createElement(x.a.Append,null,r.a.createElement(x.a.Text,null,r.a.createElement(k.a,{icon:B?T.f:T.g,style:{cursor:"pointer"},onClick:function(){return H(!B)}})))),r.a.createElement("div",{className:"text-danger"},t.password&&a.password?r.a.createElement("small",null,a.password):r.a.createElement(r.a.Fragment,null)))),r.a.createElement(K.a.Footer,null,r.a.createElement(C.a,{size:"sm",type:"submit",className:"shadow",variant:"success"},"Save"),r.a.createElement(C.a,{size:"sm",variant:"outline-secondary",onClick:oe},"Cancel")))}))))}),Z=function(){return r.a.createElement(G,null)},$=function(){return r.a.createElement(G,null)},ee=function(){return r.a.createElement(s.a,null,r.a.createElement(E,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:["/","/login"],component:_}),r.a.createElement(o.a,{path:"/home",component:J}),r.a.createElement(o.a,{path:"/about",component:M}),r.a.createElement(o.a,{path:"/dataset",component:R}),r.a.createElement(o.a,{path:"/account",component:X}),r.a.createElement(o.a,{path:"/prediction",component:Z}),r.a.createElement(o.a,{path:"/visualization",component:$}))))};l.a.render(r.a.createElement(ee,null),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.65f0a08e.chunk.js.map