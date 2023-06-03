import{_ as l,c,G as a,C as p,A as t,S as s,H as o,o as d}from"./chunks/framework.ded5427d.js";const x=JSON.parse('{"title":"BLocation 定位控件","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/control/location.md","filePath":"zh-CN/components/control/location.md","lastUpdated":1685802323000}'),r={name:"zh-CN/components/control/location.md"},i=s('<h1 id="blocation-定位控件" tabindex="-1">BLocation 定位控件 <a class="header-anchor" href="#blocation-定位控件" aria-label="Permalink to &quot;BLocation 定位控件&quot;">​</a></h1><p>定位控件，默认位于地图右下角</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BLocation</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="组件示例" tabindex="-1">组件示例 <a class="header-anchor" href="#组件示例" aria-label="Permalink to &quot;组件示例&quot;">​</a></h2>',4),h=t("p",null,"control/location",-1),u=s('<h2 id="静态组件-props" tabindex="-1">静态组件 Props <a class="header-anchor" href="#静态组件-props" aria-label="Permalink to &quot;静态组件 Props&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>anchor</td><td>控件的停靠位置</td><td><code>string</code></td><td><a href="#anchor">anchor</a></td><td><code>BMAP_ANCHOR_BOTTOM_RIGHT</code></td></tr><tr><td>offset</td><td>控件的偏移值</td><td><code>{x: number, y: number }</code></td><td>-</td><td><code>{ x: 18, y: 18 }</code></td></tr></tbody></table><h2 id="anchor" tabindex="-1">anchor <a class="header-anchor" href="#anchor" aria-label="Permalink to &quot;anchor&quot;">​</a></h2><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>BMAP_ANCHOR_TOP_LEFT</td><td>左上</td></tr><tr><td>BMAP_ANCHOR_TOP_RIGHT</td><td>右上</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_LEFT</td><td>左下</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_RIGHT</td><td>右下</td></tr></tbody></table><h2 id="组件事件" tabindex="-1">组件事件 <a class="header-anchor" href="#组件事件" aria-label="Permalink to &quot;组件事件&quot;">​</a></h2>',5),_=t("thead",null,[t("tr",null,[t("th",null,"事件名"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"版本")])],-1),C=t("tr",null,[t("td",null,"initd"),t("td",null,"组件初始化后，调用的方法，返回一个地图实例"),t("td",null,[t("code",null,"{ map, BmapGL, instance }")]),t("td",null,"-")],-1),E=t("tr",null,[t("td",null,"unload"),t("td",null,"组件卸载时会调用此方法"),t("td",null,"-"),t("td",null,"-")],-1),F=t("td",null,"locationSuccess",-1),D=t("td",null,"定位成功时会调用此方法",-1),m=t("td",null,[t("code",null,"{Event}")],-1),A=t("td",null,"locationError",-1),B=t("td",null,"定位失败时会调用此方法",-1),b=t("td",null,[t("code",null,"{Event}")],-1);function k(y,T,f,P,g,N){const e=o("Demo"),n=o("Badge");return d(),c("div",null,[i,a(e,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBLocation%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"control/location","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%3E%0A%20%20%20%20%3CBLocation%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:p(()=>[h]),_:1}),u,t("table",null,[_,t("tbody",null,[C,E,t("tr",null,[F,D,m,t("td",null,[a(n,{type:"tip",text:"^0.0.39"})])]),t("tr",null,[A,B,b,t("td",null,[a(n,{type:"tip",text:"^0.0.39"})])])])])])}const M=l(r,[["render",k]]);export{x as __pageData,M as default};
