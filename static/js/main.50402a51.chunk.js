(this.webpackJsonpartzy=this.webpackJsonpartzy||[]).push([[0],{15:function(n,e,t){n.exports=t(22)},22:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t.n(i),r=t(11),l=t.n(r),o=t(6),c=t(1),u=t(2);function s(){var n=Object(c.a)(["\n  position: absolute;\n  z-index: 999;\n  pointer-events: none;\n  width: 24px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 2px solid white;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n"]);return s=function(){return n},n}var d=u.b.div(s()),f=function(){var n=Object(i.useState)({x:200,y:200}),e=Object(o.a)(n,2),t=e[0],r=e[1],l=function(n){r({x:n.pageX,y:n.pageY})};return Object(i.useEffect)((function(){return window.addEventListener("mousemove",l),function(){window.removeEventListener("mousemove",l)}}),[]),a.a.createElement(d,{style:{top:t.y,left:t.x}})};function m(){var n=Object(c.a)(["\n  *, html {\n    margin: 0;\n    box-sizing: border-box;\n    cursor: none;\n\n  }\n  body {\n    background: black;\n    color: white;\n    mix-blend-mode: difference;\n    font-family: 'Cinzel', serif;\n    overflow: hidden;\n  }\n"]);return m=function(){return n},n}var h=Object(u.a)(m()),g=t(3);function v(){var n=Object(c.a)(["\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n\n  svg {\n    width: 30vw;\n    height: 20vh;\n  }\n"]);return v=function(){return n},n}var p=Object(u.b)(g.b.div)(v()),b=function(){return a.a.createElement(p,{initial:{left:0},animate:{y:"-100vh",height:0},transition:{duration:1.5,delay:3}},a.a.createElement(g.b.svg,{viewBox:"0 0 194 83",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement(g.b.path,{initial:{pathLength:0},animate:{pathLength:1},transition:{duration:2.5},d:"M2 45C8.5 50.3333 26 56.4 44 38C62 19.6 68.8333 5.66667 70 1C69.5 15.3333 69.2 45.2 72 50C74.8 54.8 35.8333 30.6667 16 18C12.5 15.7647 9.7 25.1 14.5 29.5C19.3 33.9 32.8333 34.3333 39 34H69L76.5 41L84 40C85 37.3333 88.7 24.7 87.5 23.5C86.3 22.3 78.5 29 82 30.5C85.1667 30.3333 95.6 28.9 96 30.5C96.5 32.5 91.5 49 96 48.5C100.5 48 103 49 108 40C112 32.8 114.333 23.1667 115 18.5C115.167 15.1667 114.9 7.2 112.5 8C109.5 9 107 19.401 107 24.5C107 31 105.5 43.5 114 48C122.5 52.5 121 40.5 128.5 34C134.5 28.8 137.667 31.8333 138.5 34C139 36.5 138.2 42.8 131 48C123.8 53.2 131 48.8333 135.5 46C137.5 48.3333 140.9 56.3 138.5 69.5C136.1 82.7 130.833 80.3333 128.5 77.5C128.167 73.3333 129.1 63.3 135.5 56.5C143.5 48 152 38.5 152.5 34C153 29.5 146.5 47 154 48.5C160 49.7 161.833 41 162 36.5C161.667 48.1667 160.8 72.3 160 75.5C159.2 78.7 156.333 80.5 155 81C152.833 81 149.3 78.7 152.5 69.5C155.7 60.3 167.167 45.3333 172.5 39L189.5 14.5H133.5H78.5",stroke:"white",strokeWidth:4})))};function y(){var n=Object(c.a)(["\n  font-size: 12rem;\n  font-weight: thin;\n  align-self: flex-end;\n  margin-right: 10%;\n"]);return y=function(){return n},n}function x(){var n=Object(c.a)(["\n  display: flex;\n  margin-top: 80px;\n  width: 100%;\n  justify-content: space-between;\n  z-index: 2;\n\n  span {\n    font-size: 1.2rem;  \n    transform: rotateZ(-90deg);\n    max-width: 140px;\n    margin: 0;\n    text-align: center;\n  }\n\n  span + span {\n    transform: rotateZ(90deg);\n  }\n"]);return x=function(){return n},n}function C(){var n=Object(c.a)(["\n  font-size: 6rem;\n  text-align: center;\n"]);return C=function(){return n},n}function E(){var n=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12vh 0 5vh 0;\n\n"]);return E=function(){return n},n}function w(){var n=Object(c.a)(["\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0;\n  z-index: 2;\n  background: white;\n  border-radius: 100px 100px 0 0;  \n  height: 80px;\n  width: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    fill: black;\n    margin: 10px 8px 0 8px;\n    cursor: pointer;\n    transition: transform 0.2s linear;\n\n    &:hover {\n      transform: translateY(-5%);\n    }\n  }\n"]);return w=function(){return n},n}function j(){var n=Object(c.a)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  img {\n    position: absolute;\n    width: 100%;\n    width: 100%;\n    height: 100%;\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(c.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 100%;\n\n  img {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n\n  }\n"]);return O=function(){return n},n}function k(){var n=Object(c.a)(["\n  position: relative;\n  display: flex;\n  height: 100vh;\n  width: 100%;\n\n"]);return k=function(){return n},n}var z=u.b.div(k()),H=Object(u.b)(g.b.div)(O()),L=Object(u.b)(g.b.div)(j()),P=u.b.div(w()),M=Object(u.b)(g.b.div)(E()),S=Object(u.b)(g.b.span)(C()),A=u.b.div(x()),B=Object(u.b)(g.b.span)(y()),I=t(9),J=t(4),R=function(){var n=Object(g.c)(),e=Object(g.c)(),t=Object(i.useState)({left:0,right:1}),r=Object(o.a)(t,2),l=r[0],c=r[1];return a.a.createElement(z,null,a.a.createElement(g.a,{initial:!1,exitBeforeEnter:!0},a.a.createElement(H,{onMouseEnter:function(){n.start("hover")},onMouseLeave:function(){n.start("unHover")},key:l.left,initial:{opacity:0},exit:{opacity:0},animate:{opacity:1},transition:{duration:.4,ease:"linear"}},a.a.createElement(g.b.img,{animate:n,initial:"unHover",variants:{hover:{scale:.6,zIndex:-1},unHover:{scale:1,zIndex:1}},transition:{ease:"linear",duration:.4},src:"/artzy"+"/asset/".concat(J[l.left].file)}),a.a.createElement(M,{initial:"unHover",animate:n,variants:{hover:{opacity:1},unHover:{opacity:0}},transition:{duration:.5,ease:"linear"}},a.a.createElement(S,{initial:"unHover",animate:n,variants:{hover:{opacity:1,y:0},unHover:{opacity:0,y:-60}},transition:{duration:.3,ease:"linear"}},J[l.left].artist),a.a.createElement(A,null,a.a.createElement("span",null,J[l.left].title),a.a.createElement("span",null,J[l.left].method)),a.a.createElement(B,null,J[l.left].date))),a.a.createElement(L,{onMouseEnter:function(){return e.start("hover")},onMouseLeave:function(){return e.start("unHover")},key:l.right,initial:{opacity:0},exit:{opacity:0},animate:{opacity:1},transition:{duration:.4,delay:.1,ease:"linear"}},a.a.createElement(g.b.img,{src:"/artzy"+"/asset/".concat(J[l.right].file),transition:{ease:"linear",duration:.4},animate:e,initial:"unHover",variants:{hover:{scale:.6,zIndex:-1},unHover:{scale:1,zIndex:1}}}),a.a.createElement(M,{initial:"unHover",animate:e,variants:{hover:{opacity:1},unHover:{opacity:0}},transition:{duration:.5,ease:"linear"}},a.a.createElement(S,{initial:"unHover",animate:e,variants:{hover:{opacity:1,y:0},unHover:{opacity:0,y:-60}},transition:{duration:.3,ease:"linear"}},J[l.right].artist),a.a.createElement(A,null,a.a.createElement("span",null,J[l.right].title),a.a.createElement("span",null,J[l.right].method)),a.a.createElement(B,null,J[l.right].date)))),a.a.createElement(P,null,a.a.createElement(I.b,{size:45,onClick:function(){var n=l.right+1;n>J.length-1?c({left:0,right:1}):c({left:n,right:n+1})}}),a.a.createElement(I.a,{size:45,onClick:function(){var n=l.left-1;c(n<0?{left:J.length-2,right:J.length-1}:{left:n-1,right:n})}})))};function W(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  ul {\n    display: flex;\n    list-style: none;\n    font-size: 21px;\n    li {\n      margin-left: 25px;\n    }\n  }\n  button {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    outline: none;\n    background: transparent;\n    height: 40px;\n    width: 60px;\n    margin-left: 30px;\n    border-radius: 30% 30% 30% 30%; \n    div {\n      margin-bottom: 8px;\n      width: 30px;\n      height: 5px;\n      background: white;\n    }\n  }\n"]);return W=function(){return n},n}function D(){var n=Object(c.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  svg {\n    height: 60%;\n  }\n  \n"]);return D=function(){return n},n}function G(){var n=Object(c.a)(["\n  position: fixed;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 6vw;\n  height: 80px;\n  /* background: white; */\n  width: 100%;\n"]);return G=function(){return n},n}var X=u.b.div(G()),Y=u.b.div(D()),Z=u.b.nav(W()),F=function(){return a.a.createElement(X,null,a.a.createElement(Y,null,a.a.createElement("svg",{viewBox:"0 0 194 83",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M2 45C8.5 50.3333 26 56.4 44 38C62 19.6 68.8333 5.66667 70 1C69.5 15.3333 69.2 45.2 72 50C74.8 54.8 35.8333 30.6667 16 18C12.5 15.7647 9.7 25.1 14.5 29.5C19.3 33.9 32.8333 34.3333 39 34H69L76.5 41L84 40C85 37.3333 88.7 24.7 87.5 23.5C86.3 22.3 78.5 29 82 30.5C85.1667 30.3333 95.6 28.9 96 30.5C96.5 32.5 91.5 49 96 48.5C100.5 48 103 49 108 40C112 32.8 114.333 23.1667 115 18.5C115.167 15.1667 114.9 7.2 112.5 8C109.5 9 107 19.401 107 24.5C107 31 105.5 43.5 114 48C122.5 52.5 121 40.5 128.5 34C134.5 28.8 137.667 31.8333 138.5 34C139 36.5 138.2 42.8 131 48C123.8 53.2 131 48.8333 135.5 46C137.5 48.3333 140.9 56.3 138.5 69.5C136.1 82.7 130.833 80.3333 128.5 77.5C128.167 73.3333 129.1 63.3 135.5 56.5C143.5 48 152 38.5 152.5 34C153 29.5 146.5 47 154 48.5C160 49.7 161.833 41 162 36.5C161.667 48.1667 160.8 72.3 160 75.5C159.2 78.7 156.333 80.5 155 81C152.833 81 149.3 78.7 152.5 69.5C155.7 60.3 167.167 45.3333 172.5 39L189.5 14.5H133.5H78.5",stroke:"white",strokeWidth:4}))),a.a.createElement(Z,null,a.a.createElement("ul",null,a.a.createElement("li",null,"Art"),a.a.createElement("li",null,"About"),a.a.createElement("li",null,"More")),a.a.createElement("button",null,a.a.createElement("div",null),a.a.createElement("div",null))))};var N=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),a.a.createElement(f,null),a.a.createElement(b,null),a.a.createElement(F,null),a.a.createElement(R,null))};l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(N,null)),document.getElementById("root"))},4:function(n){n.exports=JSON.parse('[{"key":1,"title":"Saint Jerome in Meditation","artist":"Caravaggio","method":"Oil Painting","date":"1605","file":"1.jpg"},{"key":2,"title":"Meisje met de parel","artist":"Johannes Vermeer","method":"Oil Painting","date":"1665","file":"2.jpg"},{"key":3,"title":"Self portrait","artist":"Antoon van Dyck","method":"Oil Painting","date":"1613","file":"3.jpg"},{"key":4,"title":"Anatomy Lesson","artist":"Rembrandt","method":"Oil Painting","date":"1632","file":"4.jpg"},{"key":5,"title":"Prometheus Bound","artist":"Peter Paul Rubens","method":"Oil Painting","date":"1612","file":"5.jpg"},{"key":6,"title":"Portrait of Lady-in-Waiting","artist":"Peter Paul Rubens","method":"Oil Painting","date":"1620","file":"6.jpg"},{"key":7,"title":"Mary Magdalene as Melancholy","artist":"Artemisia Gentileschi","method":"Oil Painting","date":"1625","file":"7.jpg"},{"key":8,"title":"David with the Head of Goliath","artist":"Caravaggio","method":"Oil Painting","date":"1610","file":"8.jpg"}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.50402a51.chunk.js.map