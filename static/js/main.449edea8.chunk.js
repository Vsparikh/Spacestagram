(this.webpackJsonpspacestagram=this.webpackJsonpspacestagram||[]).push([[0],{86:function(t,e,a){},97:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(10),i=a.n(r),s=(a(86),a(12)),o=a(125),j=a(130),l=a(128),d=a(45),u=a(6),b=Object(o.a)((function(t){return{Loading:{width:"100%",height:"100%",top:"50%",left:"50%","& > * + *":{marginLeft:t.spacing(3)}}}})),h=function(){var t=b();return Object(u.jsxs)(l.a,{container:!0,justifyContent:"center",alignItems:"center",direction:"column",style:{minHeight:"100vh"},children:[Object(u.jsx)(l.a,{item:!0,xs:6,children:Object(u.jsx)(d.a,{variant:"h1",color:"primary",align:"center",children:"Loading"})}),Object(u.jsx)(l.a,{item:!0,xs:3,children:Object(u.jsxs)("div",{className:t.Loading,children:[Object(u.jsx)(j.a,{}),Object(u.jsx)(j.a,{color:"secondary"}),Object(u.jsx)(j.a,{})]})})]})},O=a(131),x=a(132),g=a(133),f=a(134),m=a(135),p=a(63),y=a.n(p),D=a(44),v=a(43),S=Object(o.a)((function(t){return{title:{flexGrow:1},card:{maxWidth:600,marginTop:20,marginLeft:"auto",marginRight:"auto"},media:{height:0,paddingTop:"56.25%",maxHeight:"50vh"}}})),C=function(t){var e=t.cardData,a=S();console.log(e);var c=e.hdurl?e.hdurl:e.url,r=Object(n.useReducer)((function(t){return!t}),!1),i=Object(s.a)(r,2),o=i[0],j=i[1];return Object(u.jsxs)(O.a,{className:a.card,children:[Object(u.jsx)(x.a,{title:e.title,subheader:e.date}),Object(u.jsx)(g.a,{className:a.media,image:c}),Object(u.jsx)(f.a,{children:Object(u.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:e.explanation})}),Object(u.jsx)(m.a,{"aria-label":"like this content",onClick:j,children:Object(u.jsx)(y.a,{style:{color:o?D.a[900]:v.a[900]}})})]})},w=a(136),E=a(137),A=function(t){var e=t.data;return Object(u.jsx)(w.a,{children:e.map((function(t){return Object(u.jsx)(E.a,{children:Object(u.jsx)(C,{cardData:t})},t.date)}))})},R=a(138),k=a(139),N=Object(o.a)((function(t){return{title:{flexGrow:1}}})),P=function(){var t=N();return Object(u.jsx)(R.a,{position:"static",children:Object(u.jsxs)(k.a,{children:[Object(u.jsx)(d.a,{variant:"h5",color:"inherit",className:t.title,children:"Spacestagram"}),Object(u.jsx)(d.a,{variant:"subtitle2",color:"inherit",children:"Brought to you by NASA's Astronomy Photo of the Day(APOD) API"})]})})},I=a(64),M=a(14),B=a(140),L=function(t){var e=t.startDate,a=t.onStartDateChange,n=t.endDate,c=t.onEndDateChange;return Object(u.jsxs)(M.a,{utils:I.a,children:[Object(u.jsx)(l.a,{container:!0,justifyContent:"space-around",children:Object(u.jsx)(B.a,{margin:"normal",id:"start-date-picker",label:"Start Date ",format:"MM/dd/yyyy",value:e,disableFuture:"true",onChange:a,KeyboardButtonProps:{"aria-label":"change start date"}})}),Object(u.jsx)(l.a,{container:!0,justifyContent:"space-around",children:Object(u.jsx)(B.a,{margin:"normal",id:"end-date-picker",label:"End Date ",format:"MM/dd/yyyy",value:n,onChange:c,disableFuture:"true",shouldDisableDate:function(t){return console.log(t<=e),t>=e&&t<=new Date},KeyboardButtonProps:{"aria-label":"change end date"}})})]})};var F=function(){var t=Object(n.useState)(null),e=Object(s.a)(t,2),a=e[0],c=e[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),o=i[0],j=i[1],l=Object(n.useState)(null),d=Object(s.a)(l,2),b=d[0],O=d[1],x=Object(n.useState)(new Date),g=Object(s.a)(x,2),f=g[0],m=g[1],p=Object(n.useState)(new Date),y=Object(s.a)(p,2),D=y[0],v=y[1];return Object(n.useEffect)((function(){j(!0),fetch("https://api.nasa.gov/planetary/apod?api_key=sPjwtonfszbaCuXD47EWYC8XGBUmn1oj2s6Y6y6d&start_date=".concat(f.toISOString().slice(0,10),"&end_date=").concat(D.toISOString().slice(0,10))).then((function(t){return t.json()})).then(c).then((function(){return j(!1)})).catch(O)}),[f,D]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(P,{}),Object(u.jsx)(L,{startDate:f,endDate:D,onStartDateChange:function(t){m(t)},on:!0,onEndDateChange:function(t){v(t)}}),o?Object(u.jsx)(h,{}):b?Object(u.jsx)("pre",{children:JSON.stringify(b,null,2)}):a?Object(u.jsx)(A,{data:a}):Object(u.jsx)("p",{children:"ERROR: NO DATA RETURED FROM API"})]})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.449edea8.chunk.js.map