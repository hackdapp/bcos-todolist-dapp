(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(n,e,t){n.exports=t(54)},54:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(21),i=t.n(o),c=t(1),u=t(4),s=t.n(u),l=t(6),d=t(22),p=t(27),f=t(23),h=t(8),m=t(28),b=t(5),v=t(2),x=t(36).create({baseURL:"/api/v1",timeout:5e3});function g(){var n=Object(c.a)(["\n  color: ",";\n"]);return g=function(){return n},n}function j(){var n=Object(c.a)(["\n  position: fixed;\n  top: 1px;\n  font-size: 20px;\n  right: 1px;\n"]);return j=function(){return n},n}function w(){var n=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  right: -50px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  margin-bottom: 11px;\n  transition: color 0.2s ease-out;\n  cursor: pointer;\n"]);return w=function(){return n},n}function O(){var n=Object(c.a)(["\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  appearance: none;\n  font-smoothing: antialiased;\n  outline: none;\n"]);return O=function(){return n},n}function y(){var n=Object(c.a)(["\n  white-space: pre-line;\n  word-break: break-all;\n  padding: 15px 60px 15px 15px;\n  margin-left: 45px;\n  display: block;\n  line-height: 1.2;\n  transition: color 0.4s;\n"]);return y=function(){return n},n}function k(){var n=Object(c.a)(["\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return k=function(){return n},n}function I(){var n=Object(c.a)(["\n  width: 440px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]);return I=function(){return n},n}function E(){var n=Object(c.a)(["\n  padding: 16px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n  width: 440px;\n\n  position: relative;\n  margin: 0;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n\n  &:focus {\n    outline: none;\n  }\n"]);return E=function(){return n},n}function S(){var n=Object(c.a)(["\n  background: #fff;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n"]);return S=function(){return n},n}function T(){var n=Object(c.a)(["\n  color: #d2bebe;\n  font-size: 35px;\n"]);return T=function(){return n},n}function z(){var n=Object(c.a)(["\n  color: #ead7d7;\n  font-size: 100px;\n  margin-bottom: -20px;\n"]);return z=function(){return n},n}function C(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return C=function(){return n},n}function D(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return D=function(){return n},n}x.interceptors.response.use(function(n){return n.data},function(n){return Promise.reject(n)});var Q=function(n){function e(n){var t;return Object(d.a)(this,e),(t=Object(p.a)(this,Object(f.a)(e).call(this,n))).state={todoItems:[],newItem:"",pending:!1,calling:!1},t.handleSubmit=t.handleSubmit.bind(Object(b.a)(Object(b.a)(t))),t.handleDeleteTodoItem=t.handleDeleteTodoItem.bind(Object(b.a)(Object(b.a)(t))),t}return Object(m.a)(e,n),Object(h.a)(e,[{key:"render",value:function(){var n=this;return a.a.createElement(L,null,a.a.createElement(B,null,a.a.createElement(J,null,"TodoList DApp."),a.a.createElement(P,null,"Lets get started in developping blockchain-based apps")),a.a.createElement(R,null,a.a.createElement(W,{value:this.state.newItem,placeholder:"What needs to be done ?",onChange:function(e){return n.setState({newItem:e.target.value})},onKeyDown:this.handleSubmit}),this.state.todoItems.length>0&&a.a.createElement(A,null,this.state.todoItems.map(function(e,t){return a.a.createElement(K,{key:t},a.a.createElement(M,null,e.value),a.a.createElement(q,{onClick:function(){return n.handleDeleteTodoItem(t)}},"\xd7"))}))),a.a.createElement(F,null,a.a.createElement(G,{active:this.state.pending,activeColor:"red"},"Transaction Pending"),a.a.createElement(G,{active:this.state.calling,activeColor:"#5eef8b"},"Reading Blockchain")))}}]),Object(h.a)(e,[{key:"componentWillMount",value:function(){var n=Object(l.a)(s.a.mark(function n(){var e;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.handleQueryTodoItems();case 2:e=n.sent,console.log(e),this.setState({todoItems:e});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var n=Object(l.a)(s.a.mark(function n(e){var t;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("Enter"===e.key){n.next=3;break}return n.abrupt("return");case 3:return this.setState({pending:!0}),n.next=6,r=this.state.newItem,x({url:"/todo",method:"post",data:{item:r}});case 6:return n.next=8,this.handleQueryTodoItems();case 8:t=n.sent,this.setState({todoItems:t,newItem:"",pending:!1});case 10:case"end":return n.stop()}var r},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"handleQueryTodoItems",value:function(){var n=Object(l.a)(s.a.mark(function n(){var e;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.setState({calling:!0}),n.next=3,x({url:"/todo/list",method:"get"});case 3:return e=n.sent,this.setState({calling:!1}),n.abrupt("return",e);case 6:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"handleDeleteTodoItem",value:function(){var n=Object(l.a)(s.a.mark(function n(e){var t;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.setState({pending:!0}),n.next=3,x({url:"/todo/".concat(e),method:"delete"});case 3:return n.next=5,this.handleQueryTodoItems();case 5:t=n.sent,this.setState({todoItems:t,pending:!1});case 7:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}]),e}(r.Component),L=v.a.div(D()),B=v.a.div(C()),J=v.a.h1(z()),P=v.a.h2(T()),R=v.a.section(S()),W=v.a.input(E()),A=v.a.ul(I()),K=v.a.li(k()),M=v.a.label(y()),U=v.a.button(O()),q=Object(v.a)(U)(w()),F=v.a.div(j()),G=v.a.div(g(),function(n){return n.active?n.activeColor||"red":"#c7c7c7"});i.a.render(a.a.createElement(Q,null),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.7546e9da.chunk.js.map