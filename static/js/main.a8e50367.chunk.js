(this.webpackJsonpjinflix=this.webpackJsonpjinflix||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noPosterSmall.11c0d9e2.jpg"},73:function(e,t,n){"use strict";n.r(t);var r,a=n(1),i=n.n(a),c=n(38),o=n.n(c),s=n(12),l=n(13),p=n(15),u=n(14),d=n(3),j=n(2),h=n(39),b=Object(j.a)(r||(r=Object(d.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;600;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');\n\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    * {\n        box-sizing:border-box;\n    }\n    body {\n        font-family: 'Baloo Tamma 2', 'Nanum Pen Script',  'Noto Sans KR', cursive;\n        font-size: 12px;\n        background-color:rgba(20,20,20,1);\n        color: white;\n        padding-top: 50px;\n        transform: skew(-0.1deg);\n    }\n\n    p, a, h1, h2, h3, h4, h5, h6, span{\n        transform: skew(-0.1deg);\n    }\n"])),h.a),g=n(19),x=n(5),m=n(10),O=n.n(m),v=n(17),f=n(43),y=n.n(f).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"10923b261ba94d897ac6b81148314a3f",laungage:"en-US"}});y.get("tv/popular");var _,w,k,T,R,S,M,z,C,U,P,F,I,J,N,V,B,A,D,L,q,K,E,G,H,Q,W,X,Y,Z,$,ee=function(){return y.get("movie/now_playing")},te=function(){return y.get("movie/upcoming")},ne=function(){return y.get("movie/popular")},re=function(e){return y.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ae=function(e){return y.get("search/movie",{params:{query:encodeURIComponent(e)}})},ie=function(){return y.get("tv/top_rated")},ce=function(){return y.get("tv/popular")},oe=function(){return y.get("tv/airing_today")},se=function(e){return y.get("tv/".concat(e),{params:{append_to_response:"videos"}})},le=function(e){return y.get("search/tv",{params:{query:encodeURIComponent(e)}})},pe=n(16),ue=n(0),de=j.c.div(_||(_=Object(d.a)(["\n    :not(:last-child){\nmargin-bottom: 50px;\n    }"]))),je=j.c.span(w||(w=Object(d.a)(["\nfont-size: 18px;\nfont-weight: 600;\n"]))),he=j.c.div(k||(k=Object(d.a)(["\nmargin-top: 25px;\ndisplay: grid;\ngrid-template-columns:repeat(auto-fill, 125px);\ngrid-gap: 25px;\n"]))),be=function(e){var t=e.title,n=e.children;return Object(ue.jsxs)(de,{children:[Object(ue.jsx)(je,{children:t}),Object(ue.jsx)(he,{children:n})]})},ge=j.c.div(T||(T=Object(d.a)(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    font-size: 52px;\n    padding-top: 100px;\n    "]))),xe=function(){return Object(ue.jsx)(ge,{children:Object(ue.jsx)("span",{role:"img","aria-label":"Loading",children:"\u23f0"})})},me=j.c.div(R||(R=Object(d.a)(["\nwidth: 100vw;\ndisplay: flex;\njustify-content: center;\npadding-top: 50px;\n"]))),Oe=j.c.span(S||(S=Object(d.a)(["\ncolor: ",";\nfont-weight: 600;\nfont-size: 24px;\n"])),(function(e){return e.color})),ve=function(e){var t=e.text,n=e.color;return Object(ue.jsx)(me,{children:Object(ue.jsx)(Oe,{color:n,children:t})})},fe=j.c.div(M||(M=Object(d.a)(["\nfont-size: 12px;"]))),ye=j.c.div(z||(z=Object(d.a)(["\nbackground-image: url(",");\nheight: 180px;\nbackground-size: cover;\nborder-radius: 4px;\nbackgtound-position: center center;\ntransition: opacity 0.2s linear;\n"])),(function(e){return e.bgUrl})),_e=j.c.span(C||(C=Object(d.a)(["\nposition: absolute;\nbottom: 6px;\nright: 5px;\nopacity: 0;\ntransition: opacity 0.2s linear;\n"]))),we=j.c.div(U||(U=Object(d.a)(["\nmargin-bottom: 5px;\nposition: relative;\n        &: hover{\n    "," {\n        opacity: 0.3;\n    }\n    "," {\n        opacity: 1;\n    }\n}\n"])),ye,_e),ke=j.c.span(P||(P=Object(d.a)(["\ndisplay: block;\nmargin-bottom: 3px;\n"]))),Te=j.c.span(F||(F=Object(d.a)(["\nfont - size: 10px;\ncolor: rgba(255, 255, 255, 0.5);\n"]))),Re=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(ue.jsx)(g.b,{to:s?"/movie/".concat(t):"/tv/".concat(t),children:Object(ue.jsxs)(fe,{children:[Object(ue.jsxs)(we,{children:[Object(ue.jsx)(ye,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(37).default}),Object(ue.jsxs)(_e,{children:[Object(ue.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50"})," ",i,"/10"]})]}),Object(ue.jsx)(ke,{children:a.length>20?"".concat(a.substring(0,18),"..."):a}),Object(ue.jsx)(Te,{children:c})]})})},Se=j.c.div(I||(I=Object(d.a)(["\npadding: 20px;"]))),Me=function(e){var t=e.nowPlaying,n=e.upComing,r=e.popular,a=e.error;return e.loading?Object(ue.jsx)(xe,{}):Object(ue.jsxs)(Se,{children:[Object(ue.jsx)(pe.a,{children:Object(ue.jsx)("title",{children:"Movies | JinFlix"})}),t&&t.length>0&&Object(ue.jsx)(be,{title:"Now Playing",children:t.map((function(e){return Object(ue.jsx)(Re,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date},e.id)}))}),n&&n.length>0&&Object(ue.jsx)(be,{title:"UpComing Movies",children:n.map((function(e){return Object(ue.jsx)(Re,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date},e.id)}))}),r&&r.length>0&&Object(ue.jsx)(be,{title:"Popular Movies",children:r.map((function(e){return Object(ue.jsx)(Re,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date},e.id)}))}),a&&Object(ue.jsx)(ve,{color:"#e74c3c",text:a})]})},ze=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upComing:null,popular:null,error:null,loading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(O.a.mark((function e(){var t,n,r,a,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee();case 3:return t=e.sent.data.results,e.next=6,te();case 6:return n=e.sent,r=n.data.results,e.next=10,ne();case 10:a=e.sent,i=a.data.results,this.setState({nowPlaying:t,upComing:r,popular:i}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),this.setState({error:"Can't find Movies info."});case 18:return e.prev=18,this.setState({loading:!1}),e.finish(18);case 21:case"end":return e.stop()}}),e,this,[[0,15,18,21]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upComing,r=e.popular,a=e.error,i=e.loading;return console.log(this.state),Object(ue.jsx)(Me,{nowPlaying:t,upComing:n,popular:r,error:a,loading:i})}}]),n}(i.a.Component),Ce=j.c.div(J||(J=Object(d.a)(["\npadding: 20px;"]))),Ue=function(e){var t=e.topRated,n=e.airingToday,r=e.popular,a=e.error;return e.loading?Object(ue.jsx)(xe,{}):Object(ue.jsxs)(Ce,{children:[Object(ue.jsx)(pe.a,{children:Object(ue.jsx)("title",{children:"TV | JinFlix"})}),t&&t.length>0&&Object(ue.jsx)(be,{title:"Top Rated",children:t.map((function(e){return Object(ue.jsx)(Re,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date},e.id)}))}),r&&r.length>0&&Object(ue.jsx)(be,{title:"Popular",children:r.map((function(e){return Object(ue.jsx)(Re,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date},e.id)}))}),n&&n.length>0&&Object(ue.jsx)(be,{title:"Airing Today",children:n.map((function(e){return Object(ue.jsx)(Re,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date},e.id)}))}),a&&Object(ue.jsx)(ve,{color:"#e74c3c",text:a})]})},Pe=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,airingToday:null,popular:null,error:null,loading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(O.a.mark((function e(){var t,n,r,a,i,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie();case 3:return t=e.sent,n=t.data.results,e.next=7,oe();case 7:return r=e.sent,a=r.data.results,e.next=11,ce();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,airingToday:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find Movies info."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.airingToday,r=e.popular,a=e.error,i=e.loading;return console.log(this.state),Object(ue.jsx)(Ue,{topRated:t,popular:r,airingToday:n,error:a,loading:i})}}]),n}(i.a.Component),Fe=j.c.div(N||(N=Object(d.a)(["\npadding: 20px;"]))),Ie=j.c.form(V||(V=Object(d.a)(["\nmargin-bottom: 50px;"]))),Je=j.c.input(B||(B=Object(d.a)(["\nall: unset;\nfont-size: 28px;\nwidth:100%;"]))),Ne=function(e){var t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading,c=e.handlesubmit,o=e.updateTerm;return Object(ue.jsxs)(Fe,{children:[Object(ue.jsx)(pe.a,{children:Object(ue.jsx)("title",{children:"Search | JinFlix"})}),Object(ue.jsx)(Ie,{onSubmit:c,children:Object(ue.jsx)(Je,{placeholder:"Search Movie or TV show...",type:"text",value:r,onChange:o})}),i?Object(ue.jsx)(xe,{}):Object(ue.jsxs)(ue.Fragment,{children:[t&&t.length>0&&Object(ue.jsx)(be,{title:"Movie Results",children:t.map((function(e){return Object(ue.jsx)(Re,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date},e.id)}))}),n&&n.length>0&&Object(ue.jsx)(be,{title:"tv Results",children:n.map((function(e){return Object(ue.jsx)(Re,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date},e.id)}))})]}),a&&Object(ue.jsx)(ve,{color:"#e74c3c",text:a}),n&&t&&0===n.length&&0===t.length&&Object(ue.jsx)(ve,{text:"Nothing Found for: ".concat(r),color:"#e74c3c"})]})},Ve=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},e.handlesubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(v.a)(O.a.mark((function t(){var n,r,a,i,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,ae(n);case 5:return r=t.sent,a=r.data.results,t.next=9,le(n);case 9:i=t.sent,c=i.data.results,e.setState({movieResults:a,tvResults:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't Search"});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading;return console.log(this.state),Object(ue.jsx)(Ne,{movieResults:t,tvResults:n,searchTerm:r,error:a,loading:i,handlesubmit:this.handlesubmit,updateTerm:this.updateTerm})}}]),n}(i.a.Component),Be=j.c.header(A||(A=Object(d.a)(["\ncolor: white;\nposition:fixed;\ntop: 0px;\nleft: 0px;\nwidth: 100%;\nheight: 50px;\ndisplay: flex;\nalign-items: center;\npadding: 0px 10px;\nbackground-color: rgba(20,20,20,0.8); \nz-index: 10;\nbox-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);\n"]))),Ae=j.c.ul(D||(D=Object(d.a)(["\n    display: flex;\n"]))),De=j.c.li(L||(L=Object(d.a)(["\nwidth: 50px;\nheight: 50px;\ntext-align: center;\nborder-bottom: 3px solid ",";\ntransition: border-bottom 0.5s ease-in-out; \n"])),(function(e){return e.current?"#3498db":"transparent"})),Le=Object(j.c)(g.b)(q||(q=Object(d.a)(["\nheight: 50px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"]))),qe=Object(x.g)((function(e){var t=e.location.pathname;return Object(ue.jsx)(Be,{children:Object(ue.jsxs)(Ae,{children:[Object(ue.jsx)(De,{current:"/"===t,children:Object(ue.jsx)(Le,{to:"/",children:"Movies"})}),Object(ue.jsx)(De,{current:"/TV"===t,children:Object(ue.jsx)(Le,{to:"/TV",children:"TV"})}),Object(ue.jsx)(De,{current:"/search"===t,children:Object(ue.jsx)(Le,{to:"/search",children:"Search"})})]})})})),Ke=j.c.div(K||(K=Object(d.a)(["\nheight: calc(100vh);\nwidth: 100%;\nposition: relative;\npadding: 50px;\n"]))),Ee=j.c.div(E||(E=Object(d.a)(["\n    display: flex;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n    background-color: rgba(45,45,45,0.3);\n    border-radius: 10px;\n"]))),Ge=j.c.div(G||(G=Object(d.a)(["\n    width: 30%;\n    background-image: url(",");\nbackground-position: center center;\nbackground-size: cover;\nheight:100%;\nborder-radius: 5px;\n"])),(function(e){return e.bgImage})),He=j.c.div(H||(H=Object(d.a)(["\nposition: absolute;\ntop: 0px;\nleft: 0;\nwidth: 100%;\nheight: 100%;\nbackground-image: url(",");\nbackground-position: center center;\nbackground-size: cover;\nfilter: blur(5px);\nopacitiy: 0.5;\nz-index: 0;\n"])),(function(e){return e.bgImage})),Qe=j.c.div(Q||(Q=Object(d.a)(["\n width: 50%;\n margin: 30px 50px;\n"]))),We=j.c.h3(W||(W=Object(d.a)(["\n    font-size: 32px;\n    margin: 10px 0px;\n    font-weight: 600;\n"]))),Xe=j.c.div(X||(X=Object(d.a)(["\n    margin: 20px 0px;\n"]))),Ye=j.c.span(Y||(Y=Object(d.a)(["\nfont-size: 18px;\n"]))),Ze=j.c.span(Z||(Z=Object(d.a)(["\nmargin: 0px 10px;\n"]))),$e=j.c.p($||($=Object(d.a)(["\n    font-size: 22px;\n    font-weight: 700;\n    opacity: 0.9;\n    line-height: 1.5;\n    width: 50%;\n"]))),et=function(e){var t=e.result;e.error;return e.loading?Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(pe.a,{children:Object(ue.jsx)("title",{children:"Loading | JinFlix"})}),Object(ue.jsx)(xe,{})]}):Object(ue.jsxs)(Ke,{children:[Object(ue.jsx)(pe.a,{children:Object(ue.jsxs)("title",{children:[" ",t.original_title?t.original_title:t.original_name," | JinFlix"]})}),Object(ue.jsx)(He,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(ue.jsxs)(Ee,{children:[Object(ue.jsx)(Ge,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(37).default}),Object(ue.jsxs)(Qe,{children:[Object(ue.jsx)(We,{children:t.original_title?t.original_title:t.original_name}),Object(ue.jsxs)(Xe,{children:[Object(ue.jsx)(Ye,{children:t.release_date?t.release_date:t.first_air_date}),Object(ue.jsx)(Ze,{children:"\u25fe"}),Object(ue.jsxs)(Ye,{children:[t.runtime?t.runtime:t.episode_run_time," min"]}),Object(ue.jsx)(Ze,{children:"\u25fe"}),Object(ue.jsx)(Ye,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?"".concat(e.name," "):"".concat(e.name," / ")}))})]}),Object(ue.jsx)($e,{children:t.overview})]})]})]})},tt=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var r;Object(s.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie")},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(v.a)(O.a.mark((function e(){var t,n,r,a,i,c,o,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,t.location.pathname,a=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!a){e.next=14;break}return e.next=10,re(i);case 10:o=e.sent,c=o.data,e.next=18;break;case 14:return e.next=16,se(i);case 16:s=e.sent,c=s.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"can't find"});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return console.log(this.state),console.log(t),Object(ue.jsx)(et,{result:t,error:n,loading:r})}}]),n}(i.a.Component),nt=function(){return Object(ue.jsx)(g.a,{children:Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(qe,{}),Object(ue.jsxs)(x.d,{children:[Object(ue.jsx)(x.b,{path:"/",exact:!0,component:ze}),Object(ue.jsx)(x.b,{path:"/TV",exact:!0,component:Pe}),Object(ue.jsx)(x.b,{path:"/TV/popular",render:function(){return Object(ue.jsx)("h1",{children:"Popular"})}}),Object(ue.jsx)(x.b,{path:"/search",component:Ve}),Object(ue.jsx)(x.b,{path:"/movie/:id",component:tt}),Object(ue.jsx)(x.b,{path:"/tv/:id",component:tt}),Object(ue.jsx)(x.a,{from:"*",to:"/"})]})]})})},rt=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(nt,{}),Object(ue.jsx)(b,{})]})}}]),n}(a.Component);o.a.render(Object(ue.jsx)(rt,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.a8e50367.chunk.js.map