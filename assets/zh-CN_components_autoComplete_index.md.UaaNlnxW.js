import{_ as C,D as s,c,k as a,a as t,I as n,w as E,R as p,o as l}from"./chunks/framework.aeLSa5ZG.js";const y=JSON.parse('{"title":"BAutoComplete 自动填充","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/autoComplete/index.md","filePath":"zh-CN/components/autoComplete/index.md","lastUpdated":1722279371000}'),u={name:"zh-CN/components/autoComplete/index.md"},i={id:"bautocomplete-自动填充",tabindex:"-1"},r=a("a",{class:"header-anchor",href:"#bautocomplete-自动填充","aria-label":'Permalink to "BAutoComplete 自动填充 <Badge type="tip" text="^2.1.3" />"'},"​",-1),d=p('<p>地址检索关键词提示</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BAutoComplete } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue3-baidu-map-gl&#39;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>目前这个组件所使用的百度地图 api 还不稳定 (在写这个组件时候深有体会)</p></div><h2 id="组件示例" tabindex="-1">组件示例 <a class="header-anchor" href="#组件示例" aria-label="Permalink to &quot;组件示例&quot;">​</a></h2>',4),k=a("p",null,"autoComplete/index",-1),D=p('<h2 id="动态组件-props" tabindex="-1">动态组件 Props <a class="header-anchor" href="#动态组件-props" aria-label="Permalink to &quot;动态组件 Props&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>location</td><td>设定返回结果的所属范围。例如“北京市”</td><td><code>string | Point | BMapGL.Map</code></td><td>-</td><td><code>BMapGL.Map</code></td></tr><tr><td>types</td><td>返回数据类型</td><td><code>string[]</code></td><td>-</td><td></td></tr></tbody></table><h2 id="组件事件" tabindex="-1">组件事件 <a class="header-anchor" href="#组件事件" aria-label="Permalink to &quot;组件事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>initd</td><td>组件初始化后，调用的方法，返回一个地图实例</td><td><code>{ map, BmapGL, instance }</code></td></tr><tr><td>unload</td><td>组件卸载时会调用此方法</td><td>-</td></tr><tr><td>searchComplete</td><td>在 input 框中输入字符后，发起列表检索，完成后的回调函数</td><td>((e: Event) =&gt; void)</td></tr><tr><td>highlight</td><td>键盘或者鼠标移动，某条记录高亮之后</td><td>((e: Event) =&gt; void)</td></tr><tr><td>confirm</td><td>鼠标点击或回车选中某条记录后触发</td><td>((e: Event) =&gt; void)</td></tr></tbody></table>',4);function F(h,m,A,g,B,_){const e=s("Badge"),o=s("Demo");return l(),c("div",null,[a("h1",i,[t("BAutoComplete 自动填充 "),n(e,{type:"tip",text:"^2.1.3"}),t(),r]),d,n(o,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E(point%20as%20Point)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBAutoComplete%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20100%25%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40confirm%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EhandleConfirm%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E(point%20as%20Point)%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMarker%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20BMap%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20BAutoComplete%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20BMarker%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20type%20Point%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20useAddressGeocoder%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue3-baidu-map-gl'%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20get%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20point%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EuseAddressGeocoder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EhandleConfirm%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Ee%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20value%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20e%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eitem%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3Eget%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Ecity%20%3Cspan%20class%3D%22token%20operator%22%3E%7C%7C%3C%2Fspan%3E%20value%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Ebusiness%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20value%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eprovince%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%20value%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Ecity%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%20value%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Edistrict%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%20value%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Estreet%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%20value%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Ebusiness%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"autoComplete/index","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20%3Acenter%3D%22(point%20as%20Point)%22%3E%0A%20%20%20%20%3CBAutoComplete%20style%3D%22width%3A%20100%25%22%20%40confirm%3D%22handleConfirm%22%20%2F%3E%0A%20%20%20%20%3CBMarker%20%3Aposition%3D%22(point%20as%20Point)%22%3E%3C%2FBMarker%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20BMap%2C%20BAutoComplete%2C%20BMarker%2C%20type%20Point%2C%20useAddressGeocoder%20%7D%20from%20'vue3-baidu-map-gl'%0A%20%20const%20%7B%20get%2C%20point%20%7D%20%3D%20useAddressGeocoder()%0A%20%20function%20handleConfirm(e)%20%7B%0A%20%20%20%20const%20value%20%3D%20e.item.value%0A%20%20%20%20get(value.city%20%7C%7C%20value.business%2C%20value.province%20%2B%20value.city%20%2B%20value.district%20%2B%20value.street%20%2B%20value.business)%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%3C%2Fstyle%3E%0A",description:""},{default:E(()=>[k]),_:1}),D])}const b=C(u,[["render",F]]);export{y as __pageData,b as default};
