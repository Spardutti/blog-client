(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{139:function(e,t){},141:function(e,t){},154:function(e,t){},156:function(e,t){},184:function(e,t){},186:function(e,t){},187:function(e,t){},192:function(e,t){},194:function(e,t){},213:function(e,t){},225:function(e,t){},228:function(e,t){},246:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){},260:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(127),r=n.n(c),s=n(9),o=n(17),i=n(5),u=n(128),l=n.n(u),j=n(10),b=n.n(j),d=n(20),p=n(262),h=(n(246),n(0)),f=function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(i.f)(),u=e.setPostData,l=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://warm-ravine-05729.herokuapp.com/blog");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var t=Object(d.a)(b.a.mark((function t(n){var a,c,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.userData){t.next=13;break}return a=n.target.id,e.setPostId(a),t.next=5,fetch("https://warm-ravine-05729.herokuapp.com/blog/"+a);case 5:return c=t.sent,t.next=8,c.json();case 8:r=t.sent,u(r),o.push("/blog-client/post"),t.next=14;break;case 13:alert("Please log in");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){l()}),[]),Object(h.jsx)("div",{className:"home-container",children:c?c.map((function(e){return Object(h.jsxs)("div",{id:e._id,onClick:j,className:"posts-container",children:[Object(h.jsx)("h1",{id:e._id,children:e.title}),Object(h.jsx)("div",{className:"texts-container",id:e._id,children:e.text})]},e._id)})):Object(h.jsx)("div",{className:"spinner",children:Object(h.jsx)(p.a,{color:"primary"})})})},m=(n(255),function(e){var t=Object(i.f)();return Object(h.jsxs)("div",{className:"nav-container",children:[Object(h.jsx)("h1",{children:"Bloggin Blog"}),Object(h.jsx)("div",{className:"links-container",children:e.userData?Object(h.jsxs)("div",{className:"nav-items",children:[Object(h.jsx)(o.b,{to:"/blog-client/",children:"Home"}),Object(h.jsxs)("p",{children:["Hi, ",e.userData.username]}),Object(h.jsx)("form",{method:"GET",action:"/logout",children:Object(h.jsx)("button",{onClick:function(n){e.setUserData(),localStorage.clear(),t.push("/"),n.preventDefault()},children:"Log out"})})]}):Object(h.jsxs)("div",{className:"nav-items",children:[Object(h.jsx)(o.b,{to:"/blog-client/",children:"Home"}),Object(h.jsx)(o.b,{to:"/blog-client/new/user",children:"Sign up"}),Object(h.jsx)(o.b,{to:"/blog-client/login",children:"Log in"})]})})]})}),O=(n(256),function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(),u=Object(s.a)(o,2),l=u[0],j=u[1],p=Object(i.f)(),f=function(){var t=Object(d.a)(b.a.mark((function t(n){var a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("https://warm-ravine-05729.herokuapp.com/login",{method:"POST",body:JSON.stringify({username:c,password:l}),headers:{"Content-Type":"application/json"}});case 3:return a=t.sent,t.next=6,a.json();case 6:(r=t.sent)&&(localStorage.setItem("token",r.token),e.setUserData(r.user),p.push("/blog-client/"));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"login-container",children:[Object(h.jsx)("form",{method:"POST",action:"/login",className:"login-form"}),Object(h.jsx)("input",{required:!0,type:"text",name:"username",placeholder:"username",onChange:function(e){r(e.target.value)}}),Object(h.jsx)("input",{required:!0,type:"password",name:"password",placeholder:"password",onChange:function(e){j(e.target.value)}}),Object(h.jsx)("button",{type:"submit",onClick:f,children:"Log in"})]})}),x=(n(257),n(131)),g=n.n(x),v=function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),l=u[0],j=u[1];Object(a.useEffect)((function(){r(localStorage.getItem("token"))}),[]);var p=function(){var t=Object(d.a)(b.a.mark((function t(n){var a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l){t.next=5;break}alert("Please add a comment"),n.preventDefault(),t.next=14;break;case 5:return n.preventDefault(),t.next=8,fetch("https://warm-ravine-05729.herokuapp.com/blog/"+e.postId,{method:"PUT",body:JSON.stringify({author:e.userData,text:l}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+c}});case 8:return a=t.sent,t.next=11,a.json();case 11:r=t.sent,j(""),e.setPostData(r);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=Object(i.f)();return e.postData?Object(h.jsxs)("div",{className:"post-container",children:[Object(h.jsx)("h1",{children:e.postData.title}),Object(h.jsx)("div",{className:"text-container",children:Object(h.jsx)("p",{children:e.postData.text})}),Object(h.jsxs)("div",{className:"addcomment-form",children:[Object(h.jsxs)("form",{method:"PUT",action:"/blog/:id",children:[Object(h.jsx)("textarea",{rows:"10",type:"text",value:l,onChange:function(e){j(e.target.value)},placeholder:"Enter a comment..."}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:p,children:"Add"})})]}),Object(h.jsx)("div",{onClick:function(){e.setPostData(),j(),f.push("/blog-client/")},className:"goback-arrow",children:Object(h.jsx)("i",{className:"fas fa-arrow-left"})})]}),e.postData.comments.map((function(e){var t=g()(e.time).fromNow();return Object(h.jsxs)("div",{className:"comment-container",children:[Object(h.jsx)("p",{className:"comment-text",children:e.text}),Object(h.jsxs)("div",{className:"comment-author",children:[Object(h.jsxs)("p",{children:["@",e.author]}),Object(h.jsx)("p",{children:t})]})]},e._id)}))]}):null},w=(n(258),function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(),u=Object(s.a)(o,2),l=u[0],j=u[1],p=Object(a.useState)(),f=Object(s.a)(p,2),m=f[0],O=f[1],x=Object(a.useState)(),g=Object(s.a)(x,2),v=g[0],w=g[1],k=Object(i.f)(),D=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://warm-ravine-05729.herokuapp.com/new/user",{method:"POST",body:JSON.stringify({username:l,password:m,confirm:v}),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).errors&&r(a.errors),"User already exist"===a.msg?r([{msg:"Username already exist"}]):(r([{msg:"User created!"}]),setTimeout((function(){k.push("/login")}),1e3));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"signup-form",children:[Object(h.jsx)("form",{method:"POST",action:"/new/user"}),Object(h.jsx)("input",{onChange:function(e){j(e.target.value)},required:!0,type:"text",name:"username",placeholder:"Enter username"}),Object(h.jsx)("input",{onChange:function(e){O(e.target.value)},required:!0,type:"password",name:"password",placeholder:"Enter password"}),Object(h.jsx)("input",{onChange:function(e){w(e.target.value)},required:!0,type:"password",name:"confirm",placeholder:"Confirm password"}),Object(h.jsx)("button",{onClick:D,type:"submit",children:"Sign up"}),c?c.map((function(e,t){return Object(h.jsx)("p",{className:"errors",children:e.msg},t)})):null]})});var k=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),u=Object(s.a)(r,2),j=u[0],b=u[1],d=Object(a.useState)(),p=Object(s.a)(d,2),x=p[0],g=p[1];return Object(a.useEffect)((function(){!function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token"),t=l.a.decode(e);new Date(1e3*t.exp)<new Date(Date.now())?localStorage.clear():t&&b(t)}}()}),[]),Object(h.jsxs)(o.a,{children:[Object(h.jsx)("div",{children:Object(h.jsx)(m,{userData:j,setUserData:b})}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/blog-client/",component:f,children:Object(h.jsx)(f,{userData:j,setPostData:c,postId:x,setPostId:g})}),Object(h.jsx)(i.a,{path:"/blog-client/login",children:Object(h.jsx)(O,{setUserData:b})}),Object(h.jsx)(i.a,{path:"/blog-client/post",children:Object(h.jsx)(v,{postData:n,userData:j,postId:x,setPostId:g,setPostData:c})}),Object(h.jsx)(i.a,{path:"/blog-client/new/user",children:Object(h.jsx)(w,{})})]})]})};n(259);r.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.6683c182.chunk.js.map