import{R as i}from"./chunks/theme.DGF-SU4f.js";import{U as o,am as u,an as l,ao as c,ap as f,aq as d,ar as m,as as h,at as g,au as A,av as y,d as v,u as w,y as P,x as C,aw as R,ax as b,ay as E,aj as S}from"./chunks/framework.n6hqIsqL.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(i),T=v({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=w();return P(()=>{C(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&R(),b(),E(),s.setup&&s.setup(),()=>S(s.Layout)}});async function x(){globalThis.__VITEPRESS__=!0;const e=D(),a=j();a.provide(l,e);const t=c(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function j(){return g(T)}function D(){let e=o,a;return A(t=>{let n=y(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&x().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{x as createApp};
