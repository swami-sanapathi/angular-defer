import{b as H,d as S}from"./chunk-427AOKNY.js";import"./chunk-LIVYS4BP.js";import{$ as p,Aa as h,Fa as b,Ha as l,Oa as g,Pa as u,Sa as v,Ta as C,U as d,W as x,aa as m,cb as s,db as r,eb as y,fb as P,hb as _,ib as o,mb as c,rb as M}from"./chunk-OJTWMRHI.js";function w(n,e){if(n&1){let t=P();s(0,"div",2)(1,"ul",3)(2,"li",4)(3,"a",5),_("click",function(){return p(t),o().activePanelId.set("html"),m(!1)}),c(4," HTML "),r()(),s(5,"li",4)(6,"a",6),_("click",function(){return p(t),o().activePanelId.set("ts"),m(!1)}),c(7," TS "),r()()(),s(8,"div",7),y(9,"div",8)(10,"div",9),r()()}if(n&2){let t=o();l(2),g("aria-selected",t.activePanelId()==="html"),l(3),g("aria-selected",t.activePanelId()==="ts"),l(4),u("innerHTML",t.snippets().htmlHtml,h)("hidden",t.activePanelId()!=="html"),l(1),u("innerHTML",t.snippets().tsHtml,h)("hidden",t.activePanelId()!=="ts")}}function T(){let n=d(S),e=d(H),t=b({tsHtml:"",htmlHtml:""});return Promise.all([fetch(`/angular-defer/assets/snippets${n.url}/ts.html`).then(i=>i.text()),fetch(`/angular-defer/assets/snippets${n.url}/html.html`).then(i=>i.text())]).then(([i,a])=>{t.set({tsHtml:e.bypassSecurityTrustHtml(i),htmlHtml:e.bypassSecurityTrustHtml(a)})}),t.asReadonly()}var z=(()=>{let e=class e{constructor(){this.snippets=T(),this.activePanelId=b("html")}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=x({type:e,selectors:[["app-snippet-dialog-content"]],standalone:!0,features:[M],decls:3,vars:1,consts:[["id","tabs-title",1,"sr-only"],["class","tabs-container"],[1,"tabs-container"],["aria-labelledby","tabs-title","role","tablist"],["role","tab"],["id","html-tab","href","#html",3,"click"],["id","ts-tab","href","#ts",3,"click"],[1,"tabs-panels"],["id","html","aria-labelledby","html-tab",3,"innerHTML","hidden"],["id","ts","aria-labelledby","ts-tab",3,"innerHTML","hidden"]],template:function(a,f){a&1&&(s(0,"span",0),c(1,"Snippet Tabs"),r(),v(2,w,11,6,"div",1)),a&2&&(l(2),C(2,f.snippets().tsHtml&&f.snippets().htmlHtml?2:-1))},styles:[".sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}[_nghost-%COMP%]{flex:1}.tabs-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.tabs-panels[_ngcontent-%COMP%]{flex:1}.tabs-panels[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:100%}.tabs-panels[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]     pre{overflow:auto;padding:1rem;height:98%}[role=tablist][_ngcontent-%COMP%]{display:flex;list-style-type:none;gap:1rem;padding-inline-start:1rem;align-items:center}[role=tab][_ngcontent-%COMP%]{padding:1rem}[aria-selected=true][_ngcontent-%COMP%]{border-radius:.5rem;border:1px solid var(--main-accent-color);box-shadow:3px 3px 5px var(--main-accent-color)}"],changeDetection:0});let n=e;return n})();export{z as SnippetDialogContent};
