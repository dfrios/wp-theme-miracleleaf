var Hn=(rt,W)=>()=>(W||rt((W={exports:{}}).exports,W),W.exports);var Yn=Hn((xn,_e)=>{(function(){const W=document.createElement("link").relList;if(W&&W.supports&&W.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))tt(T);new MutationObserver(T=>{for(const G of T)if(G.type==="childList")for(const I of G.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&tt(I)}).observe(document,{childList:!0,subtree:!0});function K(T){const G={};return T.integrity&&(G.integrity=T.integrity),T.referrerPolicy&&(G.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?G.credentials="include":T.crossOrigin==="anonymous"?G.credentials="omit":G.credentials="same-origin",G}function tt(T){if(T.ep)return;T.ep=!0;const G=K(T);fetch(T.href,G)}})();function Sn(rt,W){for(var K=0;K<W.length;K++){var tt=W[K];tt.enumerable=tt.enumerable||!1,tt.configurable=!0,"value"in tt&&(tt.writable=!0),Object.defineProperty(rt,tt.key,tt)}}function qn(rt,W,K){W&&Sn(rt.prototype,W),K&&Sn(rt,K),Object.defineProperty(rt,"prototype",{writable:!1})}/*!
 * Splide.js
 * Version  : 4.1.2
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var Te,le;Te=void 0,le=function(){var rt="(prefers-reduced-motion: reduce)",W=4,K=5,tt={CREATED:1,MOUNTED:2,IDLE:3,MOVING:W,SCROLLING:K,DRAGGING:6,DESTROYED:7};function T(t){t.length=0}function G(t,i,e){return Array.prototype.slice.call(t,i,e)}function I(t){return t.bind.apply(t,[null].concat(G(arguments,1)))}function fe(){}var Fe=setTimeout;function je(t){return requestAnimationFrame(t)}function Qt(t,i){return typeof i===t}function Nt(t){return!pe(t)&&Qt("object",t)}var de=Array.isArray,Re=I(Qt,"function"),pt=I(Qt,"string"),It=I(Qt,"undefined");function pe(t){return t===null}function We(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Tt(t){return de(t)?t:[t]}function et(t,i){Tt(t).forEach(i)}function he(t,i){return-1<t.indexOf(i)}function Zt(t,i){return t.push.apply(t,Tt(i)),t}function ct(t,i,e){t&&et(i,function(n){n&&t.classList[e?"add":"remove"](n)})}function st(t,i){ct(t,pt(i)?i.split(" "):i,!0)}function _t(t,i){et(i,t.appendChild.bind(t))}function ve(t,i){et(t,function(e){var n=(i||e).parentNode;n&&n.insertBefore(e,i)})}function Ft(t,i){return We(t)&&(t.msMatchesSelector||t.matches).call(t,i)}function Xe(t,i){return t=t?G(t.children):[],i?t.filter(function(e){return Ft(e,i)}):t}function jt(t,i){return i?Xe(t,i)[0]:t.firstElementChild}var Rt=Object.keys;function bt(t,i,e){t&&(e?Rt(t).reverse():Rt(t)).forEach(function(n){n!=="__proto__"&&i(t[n],n)})}function Wt(t){return G(arguments,1).forEach(function(i){bt(i,function(e,n){t[n]=i[n]})}),t}function ht(t){return G(arguments,1).forEach(function(i){bt(i,function(e,n){de(e)?t[n]=e.slice():Nt(e)?t[n]=ht({},Nt(t[n])?t[n]:{},e):t[n]=e})}),t}function Ge(t,i){et(i||Rt(t),function(e){delete t[e]})}function at(t,i){et(t,function(e){et(i,function(n){e&&e.removeAttribute(n)})})}function M(t,i,e){Nt(i)?bt(i,function(n,r){M(t,r,n)}):et(t,function(n){pe(e)||e===""?at(n,i):n.setAttribute(i,String(e))})}function Lt(t,i,e){return t=document.createElement(t),i&&(pt(i)?st:M)(t,i),e&&_t(e,t),t}function ot(t,i,e){if(It(e))return getComputedStyle(t)[i];pe(e)||(t.style[i]=""+e)}function Xt(t,i){ot(t,"display",i)}function Be(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function ut(t,i){return t.getAttribute(i)}function He(t,i){return t&&t.classList.contains(i)}function nt(t){return t.getBoundingClientRect()}function wt(t){et(t,function(i){i&&i.parentNode&&i.parentNode.removeChild(i)})}function qe(t){return jt(new DOMParser().parseFromString(t,"text/html").body)}function lt(t,i){t.preventDefault(),i&&(t.stopPropagation(),t.stopImmediatePropagation())}function Ye(t,i){return t&&t.querySelector(i)}function ge(t,i){return i?G(t.querySelectorAll(i)):[]}function ft(t,i){ct(t,i,!1)}function me(t){return t.timeStamp}function Et(t){return pt(t)?t:t?t+"px":""}var Gt="splide",ye="data-"+Gt;function Bt(t,i){if(!t)throw new Error("["+Gt+"] "+(i||""))}var vt=Math.min,$t=Math.max,te=Math.floor,Ht=Math.ceil,J=Math.abs;function Ue(t,i,e){return J(t-i)<e}function ee(t,o,e,n){var r=vt(o,e),o=$t(o,e);return n?r<t&&t<o:r<=t&&t<=o}function kt(t,r,e){var n=vt(r,e),r=$t(r,e);return vt($t(n,t),r)}function be(t){return(0<t)-(t<0)}function we(t,i){return et(i,function(e){t=t.replace("%s",""+e)}),t}function Ee(t){return t<10?"0"+t:""+t}var Ke={};function Je(){var t=[];function i(e,n,r){et(e,function(o){o&&et(n,function(c){c.split(" ").forEach(function(s){s=s.split("."),r(o,s[0],s[1])})})})}return{bind:function(e,n,r,o){i(e,n,function(c,s,h){var l="addEventListener"in c,f=l?c.removeEventListener.bind(c,s,r,o):c.removeListener.bind(c,r);l?c.addEventListener(s,r,o):c.addListener(r),t.push([c,s,h,r,f])})},unbind:function(e,n,r){i(e,n,function(o,c,s){t=t.filter(function(h){return!!(h[0]!==o||h[1]!==c||h[2]!==s||r&&h[3]!==r)||(h[4](),!1)})})},dispatch:function(e,n,r){var o;return typeof CustomEvent=="function"?o=new CustomEvent(n,{bubbles:!0,detail:r}):(o=document.createEvent("CustomEvent")).initCustomEvent(n,!0,!1,r),e.dispatchEvent(o),o},destroy:function(){t.forEach(function(e){e[4]()}),T(t)}}}var St="mounted",gt="move",qt="moved",Ve="click",Pn="active",Ln="inactive",kn="visible",Cn="hidden",B="refresh",V="updated",Yt="resize",Se="resized",xe="scroll",Ct="scrolled",Qe="destroy",Ze="navigation:mounted",$e="autoplay:play",tn="autoplay:pause",en="lazyload:loaded",nn="sk",rn="sh";function j(t){var i=t?t.event.bus:document.createDocumentFragment(),e=Je();return t&&t.event.on(Qe,e.destroy),Wt(e,{bus:i,on:function(n,r){e.bind(i,Tt(n).join(" "),function(o){r.apply(r,de(o.detail)?o.detail:[])})},off:I(e.unbind,i),emit:function(n){e.dispatch(i,n,G(arguments,1))}})}function ne(t,i,e,n){var r,o,c=Date.now,s=0,h=!0,l=0;function f(){if(!h){if(s=t?vt((c()-r)/t,1):1,e&&e(s),1<=s&&(i(),r=c(),n&&++l>=n))return w();o=je(f)}}function w(){h=!0}function m(){o&&cancelAnimationFrame(o),h=!(o=s=0)}return{start:function(v){v||m(),r=c()-(v?s*t:0),h=!1,o=je(f)},rewind:function(){r=c(),s=0,e&&e(s)},pause:w,cancel:m,set:function(v){t=v},isPaused:function(){return h}}}function An(t){var i=t;return{set:function(e){i=e},is:function(e){return he(Tt(e),i)}}}var xt="Arrow",ie=xt+"Left",re=xt+"Right",At=xt+"Up",xt=xt+"Down",oe="ttb",Pe={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[At,re],ArrowRight:[xt,ie]},dt="role",Ot="tabindex",R="aria-",Ut=R+"controls",on=R+"current",un=R+"selected",it=R+"label",Le=R+"labelledby",sn=R+"hidden",ke=R+"orientation",Kt=R+"roledescription",an=R+"live",cn=R+"busy",ln=R+"atomic",Ce=[dt,Ot,"disabled",Ut,on,it,Le,sn,ke,Kt],R=Gt+"__",Ae=Gt,fn=R+"track",On=R+"list",ue=R+"slide",dn=ue+"--clone",Mn=ue+"__container",Oe=R+"arrows",se=R+"arrow",pn=se+"--prev",hn=se+"--next",ae=R+"pagination",vn=ae+"__page",Dn=R+"progress__bar",zn=R+"toggle",Nn=R+"sr",Pt="is-active",gn="is-prev",mn="is-next",Me="is-visible",De="is-loading",yn="is-focus-in",bn="is-overflow",In=[Pt,Me,gn,mn,De,yn,bn],wn="touchstart mousedown",ze="touchmove mousemove",Ne="touchend touchcancel mouseup click",Mt="slide",Dt="loop",Jt="fade";function Tn(t,i,e,n){var r,o=j(t),c=o.on,s=o.emit,h=o.bind,l=t.Components,f=t.root,w=t.options,m=w.isNavigation,v=w.updateOnMove,E=w.i18n,y=w.pagination,u=w.slideFocus,a=l.Direction.resolve,P=ut(n,"style"),x=ut(n,it),S=-1<e,g=jt(n,"."+Mn);function C(){var d=t.splides.map(function(p){return p=p.splide.Components.Slides.getAt(i),p?p.slide.id:""}).join(" ");M(n,it,we(E.slideX,(S?e:i)+1)),M(n,Ut,d),M(n,dt,u?"button":""),u&&at(n,Kt)}function N(){r||D()}function D(){var d,p,k;r||(d=t.index,(k=A())!==He(n,Pt)&&(ct(n,Pt,k),M(n,on,m&&k||""),s(k?Pn:Ln,b)),k=function(){if(t.is(Jt))return A();var z=nt(l.Elements.track),H=nt(n),F=a("left",!0),$=a("right",!0);return te(z[F])<=Ht(H[F])&&te(H[$])<=Ht(z[$])}(),p=!k&&(!A()||S),t.state.is([W,K])||M(n,sn,p||""),M(ge(n,w.focusableNodes||""),Ot,p?-1:""),u&&M(n,Ot,p?-1:0),k!==He(n,Me)&&(ct(n,Me,k),s(k?kn:Cn,b)),k||document.activeElement!==n||(p=l.Slides.getAt(t.index))&&Be(p.slide),ct(n,gn,i===d-1),ct(n,mn,i===d+1))}function A(){var d=t.index;return d===i||w.cloneStatus&&d===e}var b={index:i,slideIndex:e,slide:n,container:g,isClone:S,mount:function(){S||(n.id=f.id+"-slide"+Ee(i+1),M(n,dt,y?"tabpanel":"group"),M(n,Kt,E.slide),M(n,it,x||we(E.slideLabel,[i+1,t.length]))),h(n,"click",I(s,Ve,b)),h(n,"keydown",I(s,nn,b)),c([qt,rn,Ct],D),c(Ze,C),v&&c(gt,N)},destroy:function(){r=!0,o.destroy(),ft(n,In),at(n,Ce),M(n,"style",P),M(n,it,x||"")},update:D,style:function(d,p,k){ot(k&&g||n,d,p)},isWithin:function(d,p){return d=J(d-i),(d=S||!w.rewind&&!t.is(Dt)?d:vt(d,t.length-d))<=p}};return b}var _n=ye+"-interval",zt={passive:!1,capture:!0},Fn={Spacebar:" ",Right:re,Left:ie,Up:At,Down:xt};function Ie(t){return t=pt(t)?t:t.key,Fn[t]||t}var En="keydown",Vt=ye+"-lazy",ce=Vt+"-srcset",jn="["+Vt+"], ["+ce+"]",Rn=[" ","Enter"],Wn=Object.freeze({__proto__:null,Media:function(t,i,e){var n=t.state,r=e.breakpoints||{},o=e.reducedMotion||{},c=Je(),s=[];function h(m){m&&c.destroy()}function l(m,v){v=matchMedia(v),c.bind(v,"change",f),s.push([m,v])}function f(){var m=n.is(7),v=e.direction,E=s.reduce(function(y,u){return ht(y,u[1].matches?u[0]:{})},{});Ge(e),w(E),e.destroy?t.destroy(e.destroy==="completely"):m?(h(!0),t.mount()):v!==e.direction&&t.refresh()}function w(m,v,E){ht(e,m),v&&ht(Object.getPrototypeOf(e),m),!E&&n.is(1)||t.emit(V,e)}return{setup:function(){var m=e.mediaQuery==="min";Rt(r).sort(function(v,E){return m?+v-+E:+E-+v}).forEach(function(v){l(r[v],"("+(m?"min":"max")+"-width:"+v+"px)")}),l(o,rt),f()},destroy:h,reduce:function(m){matchMedia(rt).matches&&(m?ht(e,o):Ge(e,Rt(o)))},set:w}},Direction:function(t,i,e){return{resolve:function(n,r,o){var c=(o=o||e.direction)!=="rtl"||r?o===oe?0:-1:1;return Pe[n]&&Pe[n][c]||n.replace(/width|left|right/i,function(s,h){return s=Pe[s.toLowerCase()][c]||s,0<h?s.charAt(0).toUpperCase()+s.slice(1):s})},orient:function(n){return n*(e.direction==="rtl"?1:-1)}}},Elements:function(t,i,e){var n,r,o,c=j(t),s=c.on,h=c.bind,l=t.root,f=e.i18n,w={},m=[],v=[],E=[];function y(){n=P("."+fn),r=jt(n,"."+On),Bt(n&&r,"A track/list element is missing."),Zt(m,Xe(r,"."+ue+":not(."+dn+")")),bt({arrows:Oe,pagination:ae,prev:pn,next:hn,bar:Dn,toggle:zn},function(C,N){w[N]=P("."+C)}),Wt(w,{root:l,track:n,list:r,slides:m});var S=l.id||function(C){return""+C+Ee(Ke[C]=(Ke[C]||0)+1)}(Gt),g=e.role;l.id=S,n.id=n.id||S+"-track",r.id=r.id||S+"-list",!ut(l,dt)&&l.tagName!=="SECTION"&&g&&M(l,dt,g),M(l,Kt,f.carousel),M(r,dt,"presentation"),a()}function u(S){var g=Ce.concat("style");T(m),ft(l,v),ft(n,E),at([n,r],g),at(l,S?g:["style",Kt])}function a(){ft(l,v),ft(n,E),v=x(Ae),E=x(fn),st(l,v),st(n,E),M(l,it,e.label),M(l,Le,e.labelledby)}function P(S){return S=Ye(l,S),S&&function(g,C){if(Re(g.closest))return g.closest(C);for(var N=g;N&&N.nodeType===1&&!Ft(N,C);)N=N.parentElement;return N}(S,"."+Ae)===l?S:void 0}function x(S){return[S+"--"+e.type,S+"--"+e.direction,e.drag&&S+"--draggable",e.isNavigation&&S+"--nav",S===Ae&&Pt]}return Wt(w,{setup:y,mount:function(){s(B,u),s(B,y),s(V,a),h(document,wn+" keydown",function(S){o=S.type==="keydown"},{capture:!0}),h(l,"focusin",function(){ct(l,yn,!!o)})},destroy:u})},Slides:function(t,i,e){var n=j(t),r=n.on,o=n.emit,c=n.bind,s=(n=i.Elements).slides,h=n.list,l=[];function f(){s.forEach(function(u,a){m(u,a,-1)})}function w(){E(function(u){u.destroy()}),T(l)}function m(u,a,P){a=Tn(t,a,P,u),a.mount(),l.push(a),l.sort(function(x,S){return x.index-S.index})}function v(u){return u?y(function(a){return!a.isClone}):l}function E(u,a){v(a).forEach(u)}function y(u){return l.filter(Re(u)?u:function(a){return pt(u)?Ft(a.slide,u):he(Tt(u),a.index)})}return{mount:function(){f(),r(B,w),r(B,f)},destroy:w,update:function(){E(function(u){u.update()})},register:m,get:v,getIn:function(u){var a=i.Controller,P=a.toIndex(u),x=a.hasFocus()?1:e.perPage;return y(function(S){return ee(S.index,P,P+x-1)})},getAt:function(u){return y(u)[0]},add:function(u,a){et(u,function(P){var x,S,g;We(P=pt(P)?qe(P):P)&&((x=s[a])?ve(P,x):_t(h,P),st(P,e.classes.slide),x=P,S=I(o,Yt),x=ge(x,"img"),(g=x.length)?x.forEach(function(C){c(C,"load error",function(){--g||S()})}):S())}),o(B)},remove:function(u){wt(y(u).map(function(a){return a.slide})),o(B)},forEach:E,filter:y,style:function(u,a,P){E(function(x){x.style(u,a,P)})},getLength:function(u){return(u?s:l).length},isEnough:function(){return l.length>e.perPage}}},Layout:function(t,i,e){var n,r,o,c=(l=j(t)).on,s=l.bind,h=l.emit,l=i.Slides,f=i.Direction.resolve,w=(i=i.Elements).root,m=i.track,v=i.list,E=l.getAt,y=l.style;function u(){n=e.direction===oe,ot(w,"maxWidth",Et(e.width)),ot(m,f("paddingLeft"),P(!1)),ot(m,f("paddingRight"),P(!0)),a(!0)}function a(d){var p=nt(w);!d&&r.width===p.width&&r.height===p.height||(ot(m,"height",function(){var k="";return n&&(Bt(k=x(),"height or heightRatio is missing."),k="calc("+k+" - "+P(!1)+" - "+P(!0)+")"),k}()),y(f("marginRight"),Et(e.gap)),y("width",e.autoWidth?null:Et(e.fixedWidth)||(n?"":S())),y("height",Et(e.fixedHeight)||(n?e.autoHeight?null:S():x()),!0),r=p,h(Se),o!==(o=b())&&(ct(w,bn,o),h("overflow",o)))}function P(k){var p=e.padding,k=f(k?"right":"left");return p&&Et(p[k]||(Nt(p)?0:p))||"0px"}function x(){return Et(e.height||nt(v).width*e.heightRatio)}function S(){var d=Et(e.gap);return"calc((100%"+(d&&" + "+d)+")/"+(e.perPage||1)+(d&&" - "+d)+")"}function g(){return nt(v)[f("width")]}function C(d,p){return d=E(d||0),d?nt(d.slide)[f("width")]+(p?0:A()):0}function N(z,p){var k,z=E(z);return z?(z=nt(z.slide)[f("right")],k=nt(v)[f("left")],J(z-k)+(p?0:A())):0}function D(d){return N(t.length-1)-N(0)+C(0,d)}function A(){var d=E(0);return d&&parseFloat(ot(d.slide,f("marginRight")))||0}function b(){return t.is(Jt)||D(!0)>g()}return{mount:function(){var d,p;u(),s(window,"resize load",(d=I(h,Yt),p=ne(0,d,null,1),function(){p.isPaused()&&p.start()})),c([V,B],u),c(Yt,a)},resize:a,listSize:g,slideSize:C,sliderSize:D,totalSize:N,getPadding:function(d){return parseFloat(ot(m,f("padding"+(d?"Right":"Left"))))||0},isOverflow:b}},Clones:function(t,i,e){var n,r=j(t),o=r.on,c=i.Elements,s=i.Slides,h=i.Direction.resolve,l=[];function f(){if(o(B,w),o([V,Yt],v),n=E()){var y=n,u=s.get().slice(),a=u.length;if(a){for(;u.length<y;)Zt(u,u);Zt(u.slice(-y),u.slice(0,y)).forEach(function(P,x){var S=x<y,g=function(C,N){return C=C.cloneNode(!0),st(C,e.classes.clone),C.id=t.root.id+"-clone"+Ee(N+1),C}(P.slide,x);S?ve(g,u[0].slide):_t(c.list,g),Zt(l,g),s.register(g,x-y+(S?0:a),P.index)})}i.Layout.resize(!0)}}function w(){m(),f()}function m(){wt(l),T(l),r.destroy()}function v(){var y=E();n!==y&&(n<y||!y)&&r.emit(B)}function E(){var y,u=e.clones;return t.is(Dt)?It(u)&&(u=(y=e[h("fixedWidth")]&&i.Layout.slideSize(0))&&Ht(nt(c.track)[h("width")]/y)||e[h("autoWidth")]&&t.length||2*e.perPage):u=0,u}return{mount:f,destroy:m}},Move:function(t,i,e){var n,r=j(t),o=r.on,c=r.emit,s=t.state.set,h=(r=i.Layout).slideSize,l=r.getPadding,f=r.totalSize,w=r.listSize,m=r.sliderSize,v=(r=i.Direction).resolve,E=r.orient,y=(r=i.Elements).list,u=r.track;function a(){i.Controller.isBusy()||(i.Scroll.cancel(),P(t.index),i.Slides.update())}function P(b){x(N(b,!0))}function x(b,d){t.is(Jt)||(d=d?b:function(p){{var k,z;t.is(Dt)&&(k=C(p),z=k>i.Controller.getEnd(),(k<0||z)&&(p=S(p,z)))}return p}(b),ot(y,"transform","translate"+v("X")+"("+d+"px)"),b!==d&&c(rn))}function S(b,d){var p=b-A(d),k=m();return b-=E(k*(Ht(J(p)/k)||1))*(d?1:-1)}function g(){x(D(),!0),n.cancel()}function C(b){for(var d=i.Slides.get(),p=0,k=1/0,z=0;z<d.length;z++){var H=d[z].index,F=J(N(H,!0)-b);if(!(F<=k))break;k=F,p=H}return p}function N(b,d){var p=E(f(b-1)-(b=b,(p=e.focus)==="center"?(w()-h(b,!0))/2:+p*h(b)||0));return d?(b=p,b=e.trimSpace&&t.is(Mt)?kt(b,0,E(m(!0)-w())):b):p}function D(){var b=v("left");return nt(y)[b]-nt(u)[b]+E(l(!1))}function A(b){return N(b?i.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){n=i.Transition,o([St,Se,V,B],a)},move:function(b,d,p,k){var z,H;b!==d&&(z=p<b,H=E(S(D(),z)),z?0<=H:H<=y[v("scrollWidth")]-nt(u)[v("width")])&&(g(),x(S(D(),p<b),!0)),s(W),c(gt,d,p,b),n.start(d,function(){s(3),c(qt,d,p,b),k&&k()})},jump:P,translate:x,shift:S,cancel:g,toIndex:C,toPosition:N,getPosition:D,getLimit:A,exceededLimit:function(k,d){d=It(d)?D():d;var p=k!==!0&&E(d)<E(A(!1)),k=k!==!1&&E(d)>E(A(!0));return p||k},reposition:a}},Controller:function(t,i,e){var n,r,o,c,s=j(t),h=s.on,l=s.emit,f=i.Move,w=f.getPosition,m=f.getLimit,v=f.toPosition,E=(s=i.Slides).isEnough,y=s.getLength,u=e.omitEnd,a=t.is(Dt),P=t.is(Mt),x=I(A,!1),S=I(A,!0),g=e.start||0,C=g;function N(){r=y(!0),o=e.perMove,c=e.perPage,n=p();var L=kt(g,0,u?n:r-1);L!==g&&(g=L,f.reposition())}function D(){n!==p()&&l("ei")}function A(L,U){var q=o||(F()?1:c),q=b(g+q*(L?-1:1),g,!(o||F()));return q===-1&&P&&!Ue(w(),m(!L),1)?L?0:n:U?q:d(q)}function b(L,U,q){var Q;return E()||F()?((Q=function(Y){if(P&&e.trimSpace==="move"&&Y!==g)for(var O=w();O===v(Y,!0)&&ee(Y,0,t.length-1,!e.rewind);)Y<g?--Y:++Y;return Y}(L))!==L&&(U=L,L=Q,q=!1),L<0||n<L?L=o||!ee(0,L,U,!0)&&!ee(n,U,L,!0)?a?q?L<0?-(r%c||c):r:L:e.rewind?L<0?n:0:-1:k(z(L)):q&&L!==U&&(L=k(z(U)+(L<U?-1:1)))):L=-1,L}function d(L){return a?(L+r)%r||0:L}function p(){for(var L=r-(F()||a&&o?1:c);u&&0<L--;)if(v(r-1,!0)!==v(L,!0)){L++;break}return kt(L,0,r-1)}function k(L){return kt(F()?L:c*L,0,n)}function z(L){return F()?vt(L,n):te((n<=L?r-1:L)/c)}function H(L){L!==g&&(C=g,g=L)}function F(){return!It(e.focus)||e.isNavigation}function $(){return t.state.is([W,K])&&!!e.waitForTransition}return{mount:function(){N(),h([V,B,"ei"],N),h(Se,D)},go:function(L,U,q){var Q;$()||-1<(Q=d(L=function(Y){var O=g;{var _,X;pt(Y)?(X=Y.match(/([+\-<>])(\d+)?/)||[],_=X[1],X=X[2],_==="+"||_==="-"?O=b(g+ +(""+_+(+X||1)),g):_===">"?O=X?k(+X):x(!0):_==="<"&&(O=S(!0))):O=a?Y:kt(Y,0,n)}return O}(L)))&&(U||Q!==g)&&(H(Q),f.move(L,Q,C,q))},scroll:function(L,U,q,Q){i.Scroll.scroll(L,U,q,function(){var Y=d(f.toIndex(w()));H(u?vt(Y,n):Y),Q&&Q()})},getNext:x,getPrev:S,getAdjacent:A,getEnd:p,setIndex:H,getIndex:function(L){return L?C:g},toIndex:k,toPage:z,toDest:function(L){return L=f.toIndex(L),P?kt(L,0,n):L},hasFocus:F,isBusy:$}},Arrows:function(t,i,e){var n,r,o=j(t),c=o.on,s=o.bind,h=o.emit,l=e.classes,f=e.i18n,w=i.Elements,m=i.Controller,v=w.arrows,E=w.track,y=v,u=w.prev,a=w.next,P={};function x(){var A=e.arrows;!A||u&&a||(y=v||Lt("div",l.arrows),u=N(!0),a=N(!1),n=!0,_t(y,[u,a]),v||ve(y,E)),u&&a&&(Wt(P,{prev:u,next:a}),Xt(y,A?"":"none"),st(y,r=Oe+"--"+e.direction),A&&(c([St,qt,B,Ct,"ei"],D),s(a,"click",I(C,">")),s(u,"click",I(C,"<")),D(),M([u,a],Ut,E.id),h("arrows:mounted",u,a))),c(V,S)}function S(){g(),x()}function g(){o.destroy(),ft(y,r),n?(wt(v?[u,a]:y),u=a=null):at([u,a],Ce)}function C(A){m.go(A,!0)}function N(A){return qe('<button class="'+l.arrow+" "+(A?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function D(){var A,b,d,p;u&&a&&(p=t.index,A=m.getPrev(),b=m.getNext(),d=-1<A&&p<A?f.last:f.prev,p=-1<b&&b<p?f.first:f.next,u.disabled=A<0,a.disabled=b<0,M(u,it,d),M(a,it,p),h("arrows:updated",u,a,A,b))}return{arrows:P,mount:x,destroy:g,update:D}},Autoplay:function(t,i,e){var n,r,o=j(t),c=o.on,s=o.bind,h=o.emit,l=ne(e.interval,t.go.bind(t,">"),function(g){var C=w.bar;C&&ot(C,"width",100*g+"%"),h("autoplay:playing",g)}),f=l.isPaused,w=i.Elements,m=(o=i.Elements).root,v=o.toggle,E=e.autoplay,y=E==="pause";function u(){f()&&i.Slides.isEnough()&&(l.start(!e.resetProgress),r=n=y=!1,x(),h($e))}function a(g){y=!!(g=g===void 0?!0:g),x(),f()||(l.pause(),h(tn))}function P(){y||(n||r?a(!1):u())}function x(){v&&(ct(v,Pt,!y),M(v,it,e.i18n[y?"play":"pause"]))}function S(g){g=i.Slides.getAt(g),l.set(g&&+ut(g.slide,_n)||e.interval)}return{mount:function(){E&&(e.pauseOnHover&&s(m,"mouseenter mouseleave",function(g){n=g.type==="mouseenter",P()}),e.pauseOnFocus&&s(m,"focusin focusout",function(g){r=g.type==="focusin",P()}),v&&s(v,"click",function(){y?u():a(!0)}),c([gt,xe,B],l.rewind),c(gt,S),v&&M(v,Ut,w.track.id),y||u(),x())},destroy:l.cancel,play:u,pause:a,isPaused:f}},Cover:function(t,i,e){var n=j(t).on;function r(c){i.Slides.forEach(function(s){var h=jt(s.container||s.slide,"img");h&&h.src&&o(c,h,s)})}function o(c,s,h){h.style("background",c?'center/cover no-repeat url("'+s.src+'")':"",!0),Xt(s,c?"none":"")}return{mount:function(){e.cover&&(n(en,I(o,!0)),n([St,V,B],I(r,!0)))},destroy:I(r,!1)}},Scroll:function(t,i,e){var n,r,o=j(t),c=o.on,s=o.emit,h=t.state.set,l=i.Move,f=l.getPosition,w=l.getLimit,m=l.exceededLimit,v=l.translate,E=t.is(Mt),y=1;function u(g,C,p,D,A){var b,d=f(),p=(x(),!p||E&&m()||(p=i.Layout.sliderSize(),b=be(g)*p*te(J(g)/p)||0,g=l.toPosition(i.Controller.toDest(g%p))+b),Ue(d,g,1));y=1,C=p?0:C||$t(J(g-d)/1.5,800),r=D,n=ne(C,a,I(P,d,g,A),1),h(K),s(xe),n.start()}function a(){h(3),r&&r(),s(Ct)}function P(g,C,N,b){var A=f(),b=(g+(C-g)*(C=b,(g=e.easingFunc)?g(C):1-Math.pow(1-C,4))-A)*y;v(A+b),E&&!N&&m()&&(y*=.6,J(b)<10&&u(w(m(!0)),600,!1,r,!0))}function x(){n&&n.cancel()}function S(){n&&!n.isPaused()&&(x(),a())}return{mount:function(){c(gt,x),c([V,B],S)},destroy:x,scroll:u,cancel:S}},Drag:function(t,i,e){var n,r,o,c,s,h,l,f,w=j(t),m=w.on,v=w.emit,E=w.bind,y=w.unbind,u=t.state,a=i.Move,P=i.Scroll,x=i.Controller,S=i.Elements.track,g=i.Media.reduce,C=(w=i.Direction).resolve,N=w.orient,D=a.getPosition,A=a.exceededLimit,b=!1;function d(){var O=e.drag;Y(!O),c=O==="free"}function p(O){var _,X,Z;h=!1,l||(_=Q(O),X=O.target,Z=e.noDrag,Ft(X,"."+vn+", ."+se)||Z&&Ft(X,Z)||!_&&O.button||(x.isBusy()?lt(O,!0):(f=_?S:window,s=u.is([W,K]),o=null,E(f,ze,k,zt),E(f,Ne,z,zt),a.cancel(),P.cancel(),F(O))))}function k(O){var _,X,Z,mt,yt;u.is(6)||(u.set(6),v("drag")),O.cancelable&&(s?(a.translate(n+$(O)/(b&&t.is(Mt)?5:1)),yt=200<L(O),_=b!==(b=A()),(yt||_)&&F(O),h=!0,v("dragging"),lt(O)):J($(yt=O))>J($(yt,!0))&&(_=O,X=e.dragMinThreshold,Z=Nt(X),mt=Z&&X.mouse||0,Z=(Z?X.touch:+X)||10,s=J($(_))>(Q(_)?Z:mt),lt(O)))}function z(O){var _,X,Z;u.is(6)&&(u.set(3),v("dragged")),s&&(X=function(mt){return D()+be(mt)*vt(J(mt)*(e.flickPower||600),c?1/0:i.Layout.listSize()*(e.flickMaxPages||1))}(_=function(mt){if(t.is(Dt)||!b){var yt=L(mt);if(yt&&yt<200)return $(mt)/yt}return 0}(_=O)),Z=e.rewind&&e.rewindByDrag,g(!1),c?x.scroll(X,0,e.snap):t.is(Jt)?x.go(N(be(_))<0?Z?"<":"-":Z?">":"+"):t.is(Mt)&&b&&Z?x.go(A(!0)?">":"<"):x.go(x.toDest(X),!0),g(!0),lt(O)),y(f,ze,k),y(f,Ne,z),s=!1}function H(O){!l&&h&&lt(O,!0)}function F(O){o=r,r=O,n=D()}function $(O,_){return q(O,_)-q(U(O),_)}function L(O){return me(O)-me(U(O))}function U(O){return r===O&&o||r}function q(O,_){return(Q(O)?O.changedTouches[0]:O)["page"+C(_?"Y":"X")]}function Q(O){return typeof TouchEvent<"u"&&O instanceof TouchEvent}function Y(O){l=O}return{mount:function(){E(S,ze,fe,zt),E(S,Ne,fe,zt),E(S,wn,p,zt),E(S,"click",H,{capture:!0}),E(S,"dragstart",lt),m([St,V],d)},disable:Y,isDragging:function(){return s}}},Keyboard:function(t,i,e){var n,r,o=j(t),c=o.on,s=o.bind,h=o.unbind,l=t.root,f=i.Direction.resolve;function w(){var y=e.keyboard;y&&(n=y==="global"?window:l,s(n,En,E))}function m(){h(n,En)}function v(){var y=r;r=!0,Fe(function(){r=y})}function E(y){r||((y=Ie(y))===f(ie)?t.go("<"):y===f(re)&&t.go(">"))}return{mount:function(){w(),c(V,m),c(V,w),c(gt,v)},destroy:m,disable:function(y){r=y}}},LazyLoad:function(t,i,e){var n=j(t),r=n.on,o=n.off,c=n.bind,s=n.emit,h=e.lazyLoad==="sequential",l=[qt,Ct],f=[];function w(){T(f),i.Slides.forEach(function(u){ge(u.slide,jn).forEach(function(a){var P=ut(a,Vt),x=ut(a,ce);P===a.src&&x===a.srcset||(P=e.classes.spinner,P=jt(x=a.parentElement,"."+P)||Lt("span",P,x),f.push([a,u,P]),a.src||Xt(a,"none"))})}),(h?y:(o(l),r(l,m),m))()}function m(){(f=f.filter(function(u){var a=e.perPage*((e.preloadPages||1)+1)-1;return!u[1].isWithin(t.index,a)||v(u)})).length||o(l)}function v(u){var a=u[0];st(u[1].slide,De),c(a,"load error",I(E,u)),M(a,"src",ut(a,Vt)),M(a,"srcset",ut(a,ce)),at(a,Vt),at(a,ce)}function E(u,a){var P=u[0],x=u[1];ft(x.slide,De),a.type!=="error"&&(wt(u[2]),Xt(P,""),s(en,P,x),s(Yt)),h&&y()}function y(){f.length&&v(f.shift())}return{mount:function(){e.lazyLoad&&(w(),r(B,w))},destroy:I(T,f),check:m}},Pagination:function(t,i,e){var n,r,o=j(t),c=o.on,s=o.emit,h=o.bind,l=i.Slides,f=i.Elements,w=i.Controller,m=w.hasFocus,v=w.getIndex,E=w.go,y=i.Direction.resolve,u=f.pagination,a=[];function P(){n&&(wt(u?G(n.children):n),ft(n,r),T(a),n=null),o.destroy()}function x(D){E(">"+D,!0)}function S(D,A){var b=a.length,d=Ie(A),k=g(),p=-1,k=(d===y(re,!1,k)?p=++D%b:d===y(ie,!1,k)?p=(--D+b)%b:d==="Home"?p=0:d==="End"&&(p=b-1),a[p]);k&&(Be(k.button),E(">"+p),lt(A,!0))}function g(){return e.paginationDirection||e.direction}function C(D){return a[w.toPage(D)]}function N(){var D,A=C(v(!0)),b=C(v());A&&(ft(D=A.button,Pt),at(D,un),M(D,Ot,-1)),b&&(st(D=b.button,Pt),M(D,un,!0),M(D,Ot,"")),s("pagination:updated",{list:n,items:a},A,b)}return{items:a,mount:function D(){P(),c([V,B,"ei"],D);var A=e.pagination;if(u&&Xt(u,A?"":"none"),A){c([gt,xe,Ct],N);var A=t.length,b=e.classes,d=e.i18n,p=e.perPage,k=m()?w.getEnd()+1:Ht(A/p);st(n=u||Lt("ul",b.pagination,f.track.parentElement),r=ae+"--"+g()),M(n,dt,"tablist"),M(n,it,d.select),M(n,ke,g()===oe?"vertical":"");for(var z=0;z<k;z++){var H=Lt("li",null,n),F=Lt("button",{class:b.page,type:"button"},H),$=l.getIn(z).map(function(q){return q.slide.id}),L=!m()&&1<p?d.pageX:d.slideX;h(F,"click",I(x,z)),e.paginationKeyboard&&h(F,"keydown",I(S,z)),M(H,dt,"presentation"),M(F,dt,"tab"),M(F,Ut,$.join(" ")),M(F,it,we(L,z+1)),M(F,Ot,-1),a.push({li:H,button:F,page:z})}N(),s("pagination:mounted",{list:n,items:a},C(t.index))}},destroy:P,getAt:C,update:N}},Sync:function(t,i,e){var n=e.isNavigation,r=e.slideFocus,o=[];function c(){var m,v;t.splides.forEach(function(E){E.isParent||(h(t,E.splide),h(E.splide,t))}),n&&(m=j(t),(v=m.on)(Ve,f),v(nn,w),v([St,V],l),o.push(m),m.emit(Ze,t.splides))}function s(){o.forEach(function(m){m.destroy()}),T(o)}function h(m,v){m=j(m),m.on(gt,function(E,y,u){v.go(v.is(Dt)?u:E)}),o.push(m)}function l(){M(i.Elements.list,ke,e.direction===oe?"vertical":"")}function f(m){t.go(m.index)}function w(m,v){he(Rn,Ie(v))&&(f(m),lt(v))}return{setup:I(i.Media.set,{slideFocus:It(r)?n:r},!0),mount:c,destroy:s,remount:function(){s(),c()}}},Wheel:function(t,i,e){var n=j(t).bind,r=0;function o(c){var s,h,l,f,w;c.cancelable&&(s=(w=c.deltaY)<0,h=me(c),l=e.wheelMinThreshold||0,f=e.wheelSleep||0,J(w)>l&&f<h-r&&(t.go(s?"<":">"),r=h),w=s,e.releaseWheel&&!t.state.is(W)&&i.Controller.getAdjacent(w)===-1||lt(c))}return{mount:function(){e.wheel&&n(i.Elements.track,"wheel",o,zt)}}},Live:function(t,i,e){var n=j(t).on,r=i.Elements.track,o=e.live&&!e.isNavigation,c=Lt("span",Nn),s=ne(90,I(h,!1));function h(f){M(r,cn,f),f?(_t(r,c),s.start()):(wt(c),s.cancel())}function l(f){o&&M(r,an,f?"off":"polite")}return{mount:function(){o&&(l(!i.Autoplay.isPaused()),M(r,ln,!0),c.textContent="…",n($e,I(l,!0)),n(tn,I(l,!1)),n([qt,Ct],I(h,!0)))},disable:l,destroy:function(){at(r,[an,ln,cn]),wt(c)}}}}),Xn={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:{slide:ue,clone:dn,arrows:Oe,arrow:se,prev:pn,next:hn,pagination:ae,page:vn,spinner:R+"spinner"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Gn(t,i,e){var n=i.Slides;function r(){n.forEach(function(o){o.style("transform","translateX(-"+100*o.index+"%)")})}return{mount:function(){j(t).on([St,B],r)},start:function(o,c){n.style("transition","opacity "+e.speed+"ms "+e.easing),Fe(c)},cancel:fe}}function Bn(t,i,e){var n,r=i.Move,o=i.Controller,c=i.Scroll,s=i.Elements.list,h=I(ot,s,"transition");function l(){h(""),c.cancel()}return{mount:function(){j(t).bind(s,"transitionend",function(f){f.target===s&&n&&(l(),n())})},start:function(f,w){var m=r.toPosition(f,!0),v=r.getPosition(),E=function(y){var u=e.rewindSpeed;if(t.is(Mt)&&u){var a=o.getIndex(!0),P=o.getEnd();if(a===0&&P<=y||P<=a&&y===0)return u}return e.speed}(f);1<=J(m-v)&&1<=E?e.useScroll?c.scroll(m,E,!1,w):(h("transform "+E+"ms "+e.easing),r.translate(m,!0),n=w):(r.jump(f),w())},cancel:l}}return At=function(){function t(e,n){this.event=j(),this.Components={},this.state=An(1),this.splides=[],this.n={},this.t={},e=pt(e)?Ye(document,e):e,Bt(e,e+" is invalid."),n=ht({label:ut(this.root=e,it)||"",labelledby:ut(e,Le)||""},Xn,t.defaults,n||{});try{ht(n,JSON.parse(ut(e,ye)))}catch{Bt(!1,"Invalid JSON")}this.n=Object.create(ht({},n))}var i=t.prototype;return i.mount=function(e,n){var r=this,o=this.state,c=this.Components;return Bt(o.is([1,7]),"Already mounted!"),o.set(1),this.i=c,this.r=n||this.r||(this.is(Jt)?Gn:Bn),this.t=e||this.t,bt(Wt({},Wn,this.t,{Transition:this.r}),function(s,h){s=s(r,c,r.n),(c[h]=s).setup&&s.setup()}),bt(c,function(s){s.mount&&s.mount()}),this.emit(St),st(this.root,"is-initialized"),o.set(3),this.emit("ready"),this},i.sync=function(e){return this.splides.push({splide:e}),e.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this.i.Sync.remount(),e.Components.Sync.remount()),this},i.go=function(e){return this.i.Controller.go(e),this},i.on=function(e,n){return this.event.on(e,n),this},i.off=function(e){return this.event.off(e),this},i.emit=function(e){var n;return(n=this.event).emit.apply(n,[e].concat(G(arguments,1))),this},i.add=function(e,n){return this.i.Slides.add(e,n),this},i.remove=function(e){return this.i.Slides.remove(e),this},i.is=function(e){return this.n.type===e},i.refresh=function(){return this.emit(B),this},i.destroy=function(e){e===void 0&&(e=!0);var n=this.event,r=this.state;return r.is(1)?j(this).on("ready",this.destroy.bind(this,e)):(bt(this.i,function(o){o.destroy&&o.destroy(e)},!0),n.emit(Qe),n.destroy(),e&&T(this.splides),r.set(7)),this},qn(t,[{key:"options",get:function(){return this.n},set:function(e){this.i.Media.set(e,!0,!0)}},{key:"length",get:function(){return this.i.Slides.getLength(!0)}},{key:"index",get:function(){return this.i.Controller.getIndex()}}]),t}(),At.defaults={},At.STATES=tt,At},typeof xn=="object"&&typeof _e<"u"?_e.exports=le():typeof define=="function"&&define.amd?define(le):(Te=typeof globalThis<"u"?globalThis:Te||self).Splide=le()});export default Yn();
