webpackJsonp([3],{TpbY:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("WT6e"),_=function(){},i=t("fg6F"),u=t("GoJJ"),o=t("Xjw4"),r=t("ItHS"),a=t("bfOx"),c=t("qgt0"),s=function(){function n(n,l,t){this.http=n,this.router=l,this.ref=t,this.gap=15}return n.prototype.ngOnInit=function(){var n=this;this.http.get(c.a.teamMienUrl+"/index.json").toPromise().then(function(l){for(var t=l,e=0;e<t.length;e++)t[e].img=c.a.teamMienUrl+"/"+t[e].img;n._members=t,setTimeout(function(){n.items=Array.prototype.slice.call(n.ref.nativeElement.querySelectorAll(".content")),n.waterFall()},300)}),window.addEventListener("resize",function(){n.waterFall()})},n.prototype.teamBuilding=function(){this.router.navigateByUrl("/team-building")},n.prototype.waterFall=function(){for(var n=(this.getClient().width-6*this.gap)/5,l=[],t=0;t<this.items.length;t++)if(this.items[t].style.width=n+"px",t<5)this.items[t].style.top=0,this.items[t].style.left=this.gap+(n+this.gap)*t+"px",l.push(this.items[t].offsetHeight);else{for(var e=l[0],_=0,i=0;i<l.length;i++)e>l[i]&&(e=l[i],_=i);this.items[t].style.top=l[_]+this.gap+"px",this.items[t].style.left=this.items[_].offsetLeft+"px",l[_]=l[_]+this.items[t].offsetHeight+this.gap}this.ref.nativeElement.querySelector("main").style.height=this.maxYelement().maxHeight+80+"px"},n.prototype.maxYelement=function(){var n=this.items.sort(function(n,l){return Number(n.style.top.replace("px",""))+Number(n.style.height.replace("px",""))>Number(l.style.top.replace("px",""))+Number(l.style.height.replace("px",""))?-1:1});return{maxHeight:n[0].offsetTop+n[0].offsetHeight}},n.prototype.getClient=function(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}},n.prototype.getScrollTop=function(){return window.pageYOffset||document.documentElement.scrollTop},n}(),m=e._3({encapsulation:0,styles:[["main[_ngcontent-%COMP%]{width:100%}.slogan[_ngcontent-%COMP%]{width:100%;font-size:18px;padding:0 10px 30px;margin-top:20px;text-align:center}.container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.content[_ngcontent-%COMP%]{width:15%;position:absolute;border:1px solid #d9d9d9;border-radius:5px;padding:10px;overflow:hidden}.member[_ngcontent-%COMP%]{overflow:hidden}.member[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:100%;border-radius:5px;overflow:hidden}.member[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:14px;margin-top:10px}.intro[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;left:0;bottom:calc(-100%);-webkit-transition:all .2s ease-in-out .2s;transition:all .2s ease-in-out .2s}.intro[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;background-color:rgba(0,0,0,.8);color:#fff}.intro[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;width:100%;left:0;top:50%;padding:10px;-webkit-transform:translateY(-50%);transform:translateY(-50%);word-wrap:break-word;word-break:normal;line-height:200%;text-align:center}.content[_ngcontent-%COMP%]:hover   .intro[_ngcontent-%COMP%]{-webkit-transform:translateY(calc(-100%));transform:translateY(calc(-100%))}"]],data:{}});function p(n){return e._29(0,[(n()(),e._5(0,0,null,null,21,null,null,null,null,null,null,null)),(n()(),e._27(-1,null,["\n      "])),(n()(),e._5(2,0,null,null,18,"div",[["class","content"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.memberInfo(n.context.$implicit)&&e),e},null,null)),(n()(),e._27(-1,null,["\n        "])),(n()(),e._5(4,0,null,null,6,"div",[["class","member"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n          "])),(n()(),e._5(6,0,null,null,0,"img",[["class","img"]],[[8,"src",4]],null,null,null,null)),(n()(),e._27(-1,null,["\n          "])),(n()(),e._5(8,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),e._27(9,null,["",""])),(n()(),e._27(-1,null,["\n        "])),(n()(),e._27(-1,null,["\n        "])),(n()(),e._5(12,0,null,null,7,"div",[["class","intro"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n          "])),(n()(),e._5(14,0,null,null,4,"div",[["class","text"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n            "])),(n()(),e._5(16,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e._27(17,null,["",""])),(n()(),e._27(-1,null,["\n          "])),(n()(),e._27(-1,null,["\n        "])),(n()(),e._27(-1,null,["\n      "])),(n()(),e._27(-1,null,["\n    "]))],null,function(n,l){n(l,6,0,e._8(1,"",l.context.$implicit.img,"")),n(l,9,0,l.context.$implicit.name),n(l,17,0,l.context.$implicit.intro)})}function d(n){return e._29(0,[(n()(),e._5(0,0,null,null,15,"main",[],null,null,null,null,null)),(n()(),e._27(-1,null,["\n  "])),(n()(),e._5(2,0,null,null,6,"div",[["class","slogan"]],null,null,null,null,null)),(n()(),e._27(-1,null,["We are a Team , Everything is nothing .\n    "])),(n()(),e._5(4,0,null,null,3,"button",[["nz-button",""],["nzType","primary"]],null,[[null,"click"]],function(n,l,t){var _=!0,i=n.component;return"click"===l&&(_=!1!==e._17(n,6).onClick()&&_),"click"===l&&(_=!1!==i.teamBuilding()&&_),_},i.k,i.a)),e._23(512,null,u.C,u.C,[e.B]),e._4(6,1097728,null,0,u.c,[e.k,e.h,e.B,u.C],{nzType:[0,"nzType"],nzSize:[1,"nzSize"]},null),(n()(),e._27(-1,0,["\u56e2\u961f\u5efa\u8bbe"])),(n()(),e._27(-1,null,["\n  "])),(n()(),e._27(-1,null,["\n  "])),(n()(),e._5(10,0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n    "])),(n()(),e._0(16777216,null,null,1,null,p)),e._4(13,802816,null,0,o.l,[e.O,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e._27(-1,null,["\n  "])),(n()(),e._27(-1,null,["\n"]))],function(n,l){var t=l.component;n(l,6,0,"primary","small"),n(l,13,0,t._members)},null)}var g=e._1("app-team-mien",s,function(n){return e._29(0,[(n()(),e._5(0,0,null,null,1,"app-team-mien",[],null,null,null,d,m)),e._4(1,114688,null,0,s,[r.c,a.l,e.k],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),h=t("6sdf"),f=t("7DMc"),x=t("9Sd6"),b=t("XHgV"),v=t("1T37"),w=t("+j5Y"),y=t("bkcK"),O=function(){};t.d(l,"TeamMienModuleNgFactory",function(){return M});var M=e._2(_,[],function(n){return e._13([e._14(512,e.j,e.Y,[[8,[i.u,i.v,i.w,i.x,i.y,i.z,g]],[3,e.j],e.v]),e._14(4608,o.o,o.n,[e.s,[2,o.x]]),e._14(4608,h.b,h.b,[]),e._14(4608,f.k,f.k,[]),e._14(5120,u._150,u._152,[[3,u._150],u._151]),e._14(4608,o.e,o.e,[e.s]),e._14(5120,u._73,u._98,[[3,u._73],u._140,u._150,o.e]),e._14(6144,x.b,null,[o.d]),e._14(4608,x.c,x.c,[[2,x.b]]),e._14(4608,b.a,b.a,[]),e._14(5120,v.c,v.a,[[3,v.c],e.x,b.a]),e._14(5120,v.f,v.e,[[3,v.f],b.a,e.x]),e._14(4608,w.k,w.k,[v.c,v.f,e.x,o.d]),e._14(5120,w.f,w.l,[[3,w.f],o.d]),e._14(4608,w.i,w.i,[v.f,o.d]),e._14(5120,w.g,w.o,[[3,w.g],o.d]),e._14(4608,w.d,w.d,[w.k,w.f,e.j,w.i,w.g,e.g,e.p,e.x,o.d]),e._14(5120,w.m,w.n,[w.d]),e._14(5120,u.I,u.J,[o.d,[3,u.I]]),e._14(4608,u.V,u.V,[]),e._14(4608,u._16,u._16,[]),e._14(4608,u._124,u._124,[w.d,e.p,e.j,e.g]),e._14(4608,u._130,u._130,[w.d,e.p,e.j,e.g]),e._14(4608,u._137,u._137,[[3,u._137]]),e._14(4608,u._139,u._139,[w.d,u._150,u._137]),e._14(512,o.c,o.c,[]),e._14(512,h.c,h.c,[]),e._14(512,u.b,u.b,[]),e._14(512,f.j,f.j,[]),e._14(512,f.d,f.d,[]),e._14(512,u._155,u._155,[]),e._14(512,u._154,u._154,[]),e._14(512,u._157,u._157,[]),e._14(512,x.a,x.a,[]),e._14(512,y.c,y.c,[]),e._14(512,b.b,b.b,[]),e._14(512,v.b,v.b,[]),e._14(512,w.h,w.h,[]),e._14(512,u.e,u.e,[]),e._14(512,u._23,u._23,[]),e._14(512,u.o,u.o,[]),e._14(512,u.t,u.t,[]),e._14(512,u.v,u.v,[]),e._14(512,u.E,u.E,[]),e._14(512,u.L,u.L,[]),e._14(512,u.G,u.G,[]),e._14(512,u.N,u.N,[]),e._14(512,u.P,u.P,[]),e._14(512,u.W,u.W,[]),e._14(512,u._0,u._0,[]),e._14(512,u._2,u._2,[]),e._14(512,u._5,u._5,[]),e._14(512,u._8,u._8,[]),e._14(512,u._12,u._12,[]),e._14(512,u._21,u._21,[]),e._14(512,u._14,u._14,[]),e._14(512,u._25,u._25,[]),e._14(512,u._27,u._27,[]),e._14(512,u._29,u._29,[]),e._14(512,u._31,u._31,[]),e._14(512,u._33,u._33,[]),e._14(512,u._35,u._35,[]),e._14(512,u._42,u._42,[]),e._14(512,u._47,u._47,[]),e._14(512,u._50,u._50,[]),e._14(512,u._53,u._53,[]),e._14(512,u._57,u._57,[]),e._14(512,u._61,u._61,[]),e._14(512,u._63,u._63,[]),e._14(512,u._66,u._66,[]),e._14(512,u._74,u._74,[]),e._14(512,u._72,u._72,[]),e._14(512,u._94,u._94,[]),e._14(512,u._96,u._96,[]),e._14(512,u._105,u._105,[]),e._14(512,u._109,u._109,[]),e._14(512,u._113,u._113,[]),e._14(512,u._117,u._117,[]),e._14(512,u._119,u._119,[]),e._14(512,u._125,u._125,[]),e._14(512,u._131,u._131,[]),e._14(512,u._133,u._133,[]),e._14(512,u._135,u._135,[]),e._14(512,u._141,u._141,[]),e._14(512,u._143,u._143,[]),e._14(512,u._145,u._145,[]),e._14(512,u.a,u.a,[]),e._14(512,a.m,a.m,[[2,a.r],[2,a.l]]),e._14(512,O,O,[]),e._14(512,_,_,[]),e._14(256,u._151,!1,[]),e._14(256,u._140,void 0,[]),e._14(256,u._121,{nzDuration:3e3,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),e._14(256,u._128,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),e._14(1024,a.j,function(){return[[{path:"",component:s}]]},[])])})}});