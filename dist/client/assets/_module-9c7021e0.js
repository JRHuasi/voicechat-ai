import{S as x,i as B,s as A,e as h,a as k,c as m,b as v,g as z,d as u,f as C,h as g,j as $,k as d,l as D,n as b,r as K,m as y,o as Q,p as R,q as W,t as X,u as Y,v as S,w as Z,x as ee,y as te,z as se,B as F,C as le,D as ne,E as N,F as V,G as w,H as ae,I as oe,J as re,K as T,L as E,M as O}from"./index-e5b06665.js";function ie(o){let t,s,e,l="INICIO",i,n,r,_="Voz a Texto",c,a,f,U="Texto a IA",j,L;return{c(){t=h("div"),s=h("div"),e=h("button"),e.textContent=l,i=k(),n=h("div"),r=h("button"),r.textContent=_,c=k(),a=h("div"),f=h("button"),f.textContent=U,this.h()},l(I){t=m(I,"DIV",{class:!0});var p=v(t);s=m(p,"DIV",{});var q=v(s);e=m(q,"BUTTON",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-egjkye"&&(e.textContent=l),q.forEach(u),i=C(p),n=m(p,"DIV",{});var M=v(n);r=m(M,"BUTTON",{class:!0,"data-svelte-h":!0}),z(r)!=="svelte-1fta8mb"&&(r.textContent=_),M.forEach(u),c=C(p),a=m(p,"DIV",{});var P=v(a);f=m(P,"BUTTON",{class:!0,"data-svelte-h":!0}),z(f)!=="svelte-1528nye"&&(f.textContent=U),P.forEach(u),p.forEach(u),this.h()},h(){g(e,"class","svelte-13zj0of"),g(r,"class","svelte-13zj0of"),g(f,"class","svelte-13zj0of"),g(t,"class","container svelte-13zj0of")},m(I,p){$(I,t,p),d(t,s),d(s,e),d(t,i),d(t,n),d(n,r),d(t,c),d(t,a),d(a,f),j||(L=[D(e,"click",o[1]),D(r,"click",o[2]),D(f,"click",o[3])],j=!0)},p:b,i:b,o:b,d(I){I&&u(t),j=!1,K(L)}}}function ce(o,t,s){let e;return y(o,Q,r=>s(0,e=r)),[e,()=>e("/"),()=>e("/voiceToText"),()=>e("/textToAI")]}class fe extends x{constructor(t){super(),B(this,t,ce,ie,A,{})}}function G(o,t,s){const e=o.slice();return e[3]=t[s],e}function H(o){let t,s,e=o[3].title+"",l,i,n;return{c(){t=h("li"),s=h("a"),l=X(e),n=k(),this.h()},l(r){t=m(r,"LI",{});var _=v(t);s=m(_,"A",{href:!0});var c=v(s);l=Y(c,e),c.forEach(u),n=C(_),_.forEach(u),this.h()},h(){g(s,"href",i=o[2](o[3].path)),S(t,"isActive",o[1](o[3].path))},m(r,_){$(r,t,_),d(t,s),d(s,l),d(t,n)},p(r,_){_&1&&e!==(e=r[3].title+"")&&Z(l,e),_&5&&i!==(i=r[2](r[3].path))&&g(s,"href",i),_&3&&S(t,"isActive",r[1](r[3].path))},d(r){r&&u(t)}}}function _e(o){let t,s=R(o[0].linkableChildren),e=[];for(let l=0;l<s.length;l+=1)e[l]=H(G(o,s,l));return{c(){t=h("ul");for(let l=0;l<e.length;l+=1)e[l].c()},l(l){t=m(l,"UL",{});var i=v(t);for(let n=0;n<e.length;n+=1)e[n].l(i);i.forEach(u)},m(l,i){$(l,t,i);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,null)},p(l,[i]){if(i&7){s=R(l[0].linkableChildren);let n;for(n=0;n<s.length;n+=1){const r=G(l,s,n);e[n]?e[n].p(r,i):(e[n]=H(r),e[n].c(),e[n].m(t,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},i:b,o:b,d(l){l&&u(t),W(e,l)}}}function ue(o,t,s){let e,l,i;return y(o,ee,n=>s(0,e=n)),y(o,te,n=>s(1,l=n)),y(o,se,n=>s(2,i=n)),[e,l,i]}class de extends x{constructor(t){super(),B(this,t,ue,_e,A,{})}}function J(o){let t;return{c(){t=h("div"),this.h()},l(s){t=m(s,"DIV",{class:!0}),v(t).forEach(u),this.h()},h(){g(t,"class","progress-bar svelte-lrs1n1")},m(s,e){$(s,t,e)},d(s){s&&u(t)}}}function he(o){let t,s=o[0]&&J();return{c(){s&&s.c(),t=F()},l(e){s&&s.l(e),t=F()},m(e,l){s&&s.m(e,l),$(e,t,l)},p(e,[l]){e[0]?s||(s=J(),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},i:b,o:b,d(e){e&&u(t),s&&s.d(e)}}}function me(o,t,s){let e;return y(o,le,l=>s(0,e=l)),[e]}class pe extends x{constructor(t){super(),B(this,t,me,he,A,{})}}function ve(o){let t,s,e,l,i,n,r;t=new pe({}),e=new fe({}),i=new de({});const _=o[1].default,c=ne(_,o,o[0],null);return{c(){N(t.$$.fragment),s=k(),N(e.$$.fragment),l=k(),N(i.$$.fragment),n=k(),c&&c.c()},l(a){V(t.$$.fragment,a),s=C(a),V(e.$$.fragment,a),l=C(a),V(i.$$.fragment,a),n=C(a),c&&c.l(a)},m(a,f){w(t,a,f),$(a,s,f),w(e,a,f),$(a,l,f),w(i,a,f),$(a,n,f),c&&c.m(a,f),r=!0},p(a,[f]){c&&c.p&&(!r||f&1)&&ae(c,_,a,a[0],r?re(_,a[0],f,null):oe(a[0]),null)},i(a){r||(T(t.$$.fragment,a),T(e.$$.fragment,a),T(i.$$.fragment,a),T(c,a),r=!0)},o(a){E(t.$$.fragment,a),E(e.$$.fragment,a),E(i.$$.fragment,a),E(c,a),r=!1},d(a){a&&(u(s),u(l),u(n)),O(t,a),O(e,a),O(i,a),c&&c.d(a)}}}function $e(o,t,s){let{$$slots:e={},$$scope:l}=t;return o.$$set=i=>{"$$scope"in i&&s(0,l=i.$$scope)},[l,e]}class be extends x{constructor(t){super(),B(this,t,$e,ve,A,{})}}export{be as default};
