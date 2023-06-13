import{_ as l,c as D,G as s,C as d,A as t,S as n,a,H as e,o as c}from"./chunks/framework.ded5427d.js";const _=JSON.parse('{"title":"BMarker 标注点","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/overlay/marker.md","filePath":"zh-CN/components/overlay/marker.md","lastUpdated":1686668757000}'),E={name:"zh-CN/components/overlay/marker.md"},p=n('<h1 id="bmarker-标注点" tabindex="-1">BMarker 标注点 <a class="header-anchor" href="#bmarker-标注点" aria-label="Permalink to &quot;BMarker 标注点&quot;">​</a></h1><p>在地图上绘制点</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BMarker</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="组件示例" tabindex="-1">组件示例 <a class="header-anchor" href="#组件示例" aria-label="Permalink to &quot;组件示例&quot;">​</a></h2><p>在地图上添加标记点，通过 icon 指定显示图标</p>',5),u=t("p",null,"overlay/marker",-1),C=n('<h2 id="静态组件-props" tabindex="-1">静态组件 Props <a class="header-anchor" href="#静态组件-props" aria-label="Permalink to &quot;静态组件 Props&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>鼠标移到 marker 上的显示内容</td><td><code>string</code></td><td>-</td></tr><tr><td>draggingCursor</td><td>拖拽标注时的鼠标指针样式。此属性值需遵循 CSS 的<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/cursor" target="_blank" rel="noreferrer">cursor</a>属性规范</td><td><code>string</code></td><td>-</td></tr><tr><td>raiseOnDrag</td><td>拖拽标注时，标注是否开启离开地图表面效果</td><td><code> boolean</code></td><td><code>false</code></td></tr><tr><td>enableClicking</td><td>是否响应点击事件</td><td><code> boolean</code></td><td><code>true</code></td></tr></tbody></table><h2 id="动态组件-props" tabindex="-1">动态组件 Props <a class="header-anchor" href="#动态组件-props" aria-label="Permalink to &quot;动态组件 Props&quot;">​</a></h2>',3),r=t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"可选值"),t("th",null,"默认值"),t("th",null,"版本")])],-1),i=t("td",null,"zIndex",-1),A=t("td",null,"显示层级",-1),g=t("td",null,[t("code",null,"number")],-1),N=t("td",null,"-",-1),z=t("td",null,"-",-1),I=t("tr",null,[t("td",null,"position"),t("td",null,"标注点的坐标"),t("td",null,[t("code",null,"{ lng: number, lat: number}")]),t("td",null,"-"),t("td",null,[t("code",null,"required")]),t("td",null,"-")],-1),k=t("tr",null,[t("td",null,"offset"),t("td",null,"标注点的像素偏移"),t("td",null,[t("code",null," {x: number, y: number }")]),t("td",null,"-"),t("td"),t("td",null,"-")],-1),j=t("tr",null,[t("td",null,"icon"),t("td",null,[a("标注点的图标。可使用默认图标，也可"),t("a",{href:"#自定义图标"},"自定义图标")]),t("td",null,[t("code",null,"string ")]),t("td",null,[t("code",null,"simple_red / simple_blue...")]),t("td",null,"-"),t("td",null,"-")],-1),T=t("tr",null,[t("td",null,"rotation"),t("td",null,"旋转角度"),t("td",null,[t("code",null,"number ")]),t("td",null,"-"),t("td"),t("td",null,"-")],-1),y=t("tr",null,[t("td",null,"enableDragging"),t("td",null,"是否启用拖拽"),t("td",null,[t("code",null,"boolean ")]),t("td",null,"-"),t("td",null,[t("code",null," true")]),t("td",null,"-")],-1),m=t("tr",null,[t("td",null,"enableMassClear"),t("td",null,[a("是否在调用 "),t("code",null,"map.clearOverlays"),a(" 清除此覆盖物")]),t("td",null,[t("code",null,"boolean ")]),t("td",null,"-"),t("td",null,[t("code",null,"true ")]),t("td",null,"-")],-1),F=n('<h2 id="默认图标可选值" tabindex="-1">默认图标可选值 <a class="header-anchor" href="#默认图标可选值" aria-label="Permalink to &quot;默认图标可选值&quot;">​</a></h2><p>simple_red , simple_blue , loc_red , loc_blue , start , end , location</p><p>红色图标: red1 , red2 , red3 , red4 , red5 , red6 , red7 , red8 , red9 , red10</p><p>蓝色图标: blue1 , blue2 , blue3 , blue4 , blue5 , blue6 , blue7 , blue8 , blue9 , blue10</p><p>其余图标可根据下图自行定位裁切:</p><p><img src="https://mapopen.bj.bcebos.com/cms/react-bmap/markers_new2x_fbb9e99.png" alt="https://mapopen.bj.bcebos.com/cms/react-bmap/markers_new2x_fbb9e99.png"></p><h2 id="自定义图标" tabindex="-1">自定义图标 <a class="header-anchor" href="#自定义图标" aria-label="Permalink to &quot;自定义图标&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>anchor</td><td>图标的定位点相对于图标左上角的偏移值</td><td><code>{ x: number, y: number }</code></td><td>-</td></tr><tr><td>imageOffset</td><td>图标所用的图片相对于可视区域的偏移值，此功能的作用等同于 CSS 中的 background-position 属性</td><td><code>{ x: number, y: number }</code></td><td>-</td></tr><tr><td>imageSize</td><td>图标所用的图片的大小，此功能的作用等同于 CSS 中的 background-size 属性。可用于实现高清屏的高清效果</td><td><code>{ width: number, height: number }</code></td><td><code>required</code></td></tr><tr><td>imageUrl</td><td>图标所用图像资源的位置</td><td><code>string</code></td><td><code>required</code></td></tr><tr><td>printImageUrl</td><td>设置 icon 打印图片的 url，该打印图片只针对 IE6 有效，解决 IE6 使用 PNG 滤镜导致的错位问题。如果您的 icon 没有使用 PNG 格式图片或者没有使用 CSS Sprites 技术，则可忽略此配置</td><td><code>string </code></td><td>-</td></tr></tbody></table><h2 id="组件事件" tabindex="-1">组件事件 <a class="header-anchor" href="#组件事件" aria-label="Permalink to &quot;组件事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>initd</td><td>组件初始化后，调用的方法，返回一个地图实例</td><td><code>{ map, BmapGL, instance }</code></td></tr><tr><td>unload</td><td>组件卸载时会调用此方法</td><td>-</td></tr><tr><td>click</td><td>鼠标左键单击事件的回调函数。当双击时，产生的事件序列为：click -&gt; click -&gt; dblclick</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>dblclick</td><td>鼠标左键双击事件的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>mousedown</td><td>鼠标左键在该覆盖物上按下的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>mouseup</td><td>鼠标左键在该覆盖物上抬起的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>mouseout</td><td>鼠标指针移出该覆盖物事件的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>mouseover</td><td>鼠标指针移入该覆盖物事件的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>remove</td><td>该覆盖物被移除的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>infowindowclose</td><td>infowindow 关闭事件的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>infowindowopen</td><td>infowindow 打开事件的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>dragstart</td><td>拖拽覆盖物开始事件的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>dragging</td><td>覆盖物拖拽中事件的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>dragend</td><td>拖拽覆盖物结束事件的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>rightclick</td><td>鼠标右键单击事件的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr></tbody></table>',10);function O(x,L,Q,h,B,b){const o=e("Demo"),M=e("Badge");return c(),D("div",null,[p,s(o,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E16%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%E8%B5%B7%E7%82%B9%E5%9B%BE%E6%A0%87%20--%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AzIndex%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E99%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.403901%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Estart%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%E7%BB%88%E7%82%B9%E5%9B%BE%E6%A0%87%20--%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.404901%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eend%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%E7%BA%A2%E8%89%B2%E5%9B%BE%E6%A0%871%20--%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.405901%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ered1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%E7%BA%A2%E8%89%B2%E5%9B%BE%E6%A0%872%20--%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.403901%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Esimple_red%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87%20--%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.400901%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%0A%20%20%20%20%20%20%20%20imageUrl%3A%20'data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQgNEMxMi45NTQzIDQgNCAxMi45NTQzIDQgMjRDNCAzNS4wNDU3IDEyLjk1NDMgNDQgMjQgNDRDMzUuMDQ1NyA0NCA0NCAzNS4wNDU3IDQ0IDI0QzQ0IDEyLjk1NDMgMzUuMDQ1NyA0IDI0IDRaTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkuMTgzMyA0NS40NzE2QzE4Ljk4OTggNDUuMjIxOSAxOC45ODk4IDQyLjk5NzMgMTkuMTgzMyAzOC43OThDMTcuMTExNCAzOC44Njk2IDE1LjgwMjQgMzguNzI1OCAxNS4yNTYzIDM4LjM2NjdDMTQuNDM3IDM3LjgyOCAxMy42MTY5IDM2LjE2NjcgMTIuODg5MSAzNC45OTU5QzEyLjE2MTQgMzMuODI1MSAxMC41NDYzIDMzLjY0IDkuODk0MDUgMzMuMzc4M0M5LjI0MTgyIDMzLjExNjUgOS4wNzgwOSAzMi4wNDk2IDExLjY5MTMgMzIuODU2NUMxNC4zMDQ0IDMzLjY2MzQgMTQuNDMxOSAzNS44NjA3IDE1LjI1NjMgMzYuMzc0NUMxNi4wODA2IDM2Ljg4ODMgMTguMDUxNSAzNi42NjM1IDE4Ljk0NDggMzYuMjUxOUMxOS44MzgyIDM1Ljg0MDMgMTkuNzcyNCAzNC4zMDc4IDE5LjkzMTcgMzMuNzAwN0MyMC4xMzMxIDMzLjEzNCAxOS40MjMzIDMzLjAwODMgMTkuNDA3NyAzMy4wMDM3QzE4LjUzNTUgMzMuMDAzNyAxMy45NTM5IDMyLjAwNzMgMTIuNjk1NSAyNy41NzA2QzExLjQzNyAyMy4xMzQgMTMuMDU4MSAyMC4yMzQxIDEzLjkyMjkgMTguOTg3NUMxNC40OTk1IDE4LjE1NjQgMTQuNDQ4NSAxNi4zODUyIDEzLjc2OTkgMTMuNjczN0MxNi4yMzM1IDEzLjM1ODkgMTguMTM0NyAxNC4xMzQzIDE5LjQ3MzQgMTYuMDAwMUMxOS40NzQ3IDE2LjAxMDggMjEuMjI4NSAxNC45NTcyIDI0LjAwMDMgMTQuOTU3MkMyNi43NzIgMTQuOTU3MiAyNy43NTUzIDE1LjgxNTQgMjguNTE0MiAxNi4wMDAxQzI5LjI3MzEgMTYuMTg0OCAyOS44OCAxMi43MzQxIDM0LjU2NjggMTMuNjczN0MzMy41ODgzIDE1LjU5NjkgMzIuNzY4OSAxOC4wMDAxIDMzLjM5NDMgMTguOTg3NUMzNC4wMTk4IDE5Ljk3NDkgMzYuNDc0NSAyMy4xMTQ3IDM0Ljk2NjYgMjcuNTcwNkMzMy45NjE0IDMwLjU0MTMgMzEuOTg1MyAzMi4zNTIzIDI5LjAzODQgMzMuMDAzN0MyOC43MDA1IDMzLjExMTUgMjguNTMxNSAzMy4yODU1IDI4LjUzMTUgMzMuNTI1NUMyOC41MzE1IDMzLjg4NTYgMjguOTg4NCAzMy45MjQ5IDI5LjY0NjUgMzUuNjExN0MzMC4wODUzIDM2LjczNjIgMzAuMTE3IDM5Ljk0OCAyOS43NDE2IDQ1LjI0N0MyOC43OTA2IDQ1LjQ4OTEgMjguMDUwOCA0NS42NTE2IDI3LjUyMjEgNDUuNzM0N0MyNi41ODQ3IDQ1Ljg4MiAyNS41NjY5IDQ1Ljk2NDYgMjQuNTY2OSA0NS45OTY1QzIzLjU2NjkgNDYuMDI4NCAyMy4yMTk2IDQ2LjAyNDggMjEuODM3IDQ1Ljg5NjFDMjAuOTE1NCA0NS44MTAzIDIwLjAzMDggNDUuNjY4OCAxOS4xODMzIDQ1LjQ3MTZaIiBmaWxsPSIjMDAwMDAwIi8%2BPC9zdmc%2B'%2C%0A%20%20%20%20%20%20%20%20imageSize%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20width%3A%20100%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%20100%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3EenableDragging%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/marker","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%20%3Azoom%3D%2216%22%3E%0A%20%20%20%20%3C!--%20%E8%B5%B7%E7%82%B9%E5%9B%BE%E6%A0%87%20--%3E%0A%20%20%20%20%3CBMarker%20%3AzIndex%3D%2299%22%20%3Aposition%3D%22%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.403901%20%7D%22%20icon%3D%22start%22%20%2F%3E%0A%20%20%20%20%3C!--%20%E7%BB%88%E7%82%B9%E5%9B%BE%E6%A0%87%20--%3E%0A%20%20%20%20%3CBMarker%20%3Aposition%3D%22%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.404901%20%7D%22%20icon%3D%22end%22%20%2F%3E%0A%20%20%20%20%3C!--%20%E7%BA%A2%E8%89%B2%E5%9B%BE%E6%A0%871%20--%3E%0A%20%20%20%20%3CBMarker%20%3Aposition%3D%22%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.405901%20%7D%22%20icon%3D%22red1%22%20%2F%3E%0A%20%20%20%20%3C!--%20%E7%BA%A2%E8%89%B2%E5%9B%BE%E6%A0%872%20--%3E%0A%20%20%20%20%3CBMarker%20%3Aposition%3D%22%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.403901%20%7D%22%20icon%3D%22simple_red%22%20%2F%3E%0A%20%20%20%20%3C!--%20%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87%20--%3E%0A%20%20%20%20%3CBMarker%0A%20%20%20%20%20%20%3Aposition%3D%22%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.400901%20%7D%22%0A%20%20%20%20%20%20%3Aicon%3D%22%7B%0A%20%20%20%20%20%20%20%20imageUrl%3A%20'data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQgNEMxMi45NTQzIDQgNCAxMi45NTQzIDQgMjRDNCAzNS4wNDU3IDEyLjk1NDMgNDQgMjQgNDRDMzUuMDQ1NyA0NCA0NCAzNS4wNDU3IDQ0IDI0QzQ0IDEyLjk1NDMgMzUuMDQ1NyA0IDI0IDRaTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkuMTgzMyA0NS40NzE2QzE4Ljk4OTggNDUuMjIxOSAxOC45ODk4IDQyLjk5NzMgMTkuMTgzMyAzOC43OThDMTcuMTExNCAzOC44Njk2IDE1LjgwMjQgMzguNzI1OCAxNS4yNTYzIDM4LjM2NjdDMTQuNDM3IDM3LjgyOCAxMy42MTY5IDM2LjE2NjcgMTIuODg5MSAzNC45OTU5QzEyLjE2MTQgMzMuODI1MSAxMC41NDYzIDMzLjY0IDkuODk0MDUgMzMuMzc4M0M5LjI0MTgyIDMzLjExNjUgOS4wNzgwOSAzMi4wNDk2IDExLjY5MTMgMzIuODU2NUMxNC4zMDQ0IDMzLjY2MzQgMTQuNDMxOSAzNS44NjA3IDE1LjI1NjMgMzYuMzc0NUMxNi4wODA2IDM2Ljg4ODMgMTguMDUxNSAzNi42NjM1IDE4Ljk0NDggMzYuMjUxOUMxOS44MzgyIDM1Ljg0MDMgMTkuNzcyNCAzNC4zMDc4IDE5LjkzMTcgMzMuNzAwN0MyMC4xMzMxIDMzLjEzNCAxOS40MjMzIDMzLjAwODMgMTkuNDA3NyAzMy4wMDM3QzE4LjUzNTUgMzMuMDAzNyAxMy45NTM5IDMyLjAwNzMgMTIuNjk1NSAyNy41NzA2QzExLjQzNyAyMy4xMzQgMTMuMDU4MSAyMC4yMzQxIDEzLjkyMjkgMTguOTg3NUMxNC40OTk1IDE4LjE1NjQgMTQuNDQ4NSAxNi4zODUyIDEzLjc2OTkgMTMuNjczN0MxNi4yMzM1IDEzLjM1ODkgMTguMTM0NyAxNC4xMzQzIDE5LjQ3MzQgMTYuMDAwMUMxOS40NzQ3IDE2LjAxMDggMjEuMjI4NSAxNC45NTcyIDI0LjAwMDMgMTQuOTU3MkMyNi43NzIgMTQuOTU3MiAyNy43NTUzIDE1LjgxNTQgMjguNTE0MiAxNi4wMDAxQzI5LjI3MzEgMTYuMTg0OCAyOS44OCAxMi43MzQxIDM0LjU2NjggMTMuNjczN0MzMy41ODgzIDE1LjU5NjkgMzIuNzY4OSAxOC4wMDAxIDMzLjM5NDMgMTguOTg3NUMzNC4wMTk4IDE5Ljk3NDkgMzYuNDc0NSAyMy4xMTQ3IDM0Ljk2NjYgMjcuNTcwNkMzMy45NjE0IDMwLjU0MTMgMzEuOTg1MyAzMi4zNTIzIDI5LjAzODQgMzMuMDAzN0MyOC43MDA1IDMzLjExMTUgMjguNTMxNSAzMy4yODU1IDI4LjUzMTUgMzMuNTI1NUMyOC41MzE1IDMzLjg4NTYgMjguOTg4NCAzMy45MjQ5IDI5LjY0NjUgMzUuNjExN0MzMC4wODUzIDM2LjczNjIgMzAuMTE3IDM5Ljk0OCAyOS43NDE2IDQ1LjI0N0MyOC43OTA2IDQ1LjQ4OTEgMjguMDUwOCA0NS42NTE2IDI3LjUyMjEgNDUuNzM0N0MyNi41ODQ3IDQ1Ljg4MiAyNS41NjY5IDQ1Ljk2NDYgMjQuNTY2OSA0NS45OTY1QzIzLjU2NjkgNDYuMDI4NCAyMy4yMTk2IDQ2LjAyNDggMjEuODM3IDQ1Ljg5NjFDMjAuOTE1NCA0NS44MTAzIDIwLjAzMDggNDUuNjY4OCAxOS4xODMzIDQ1LjQ3MTZaIiBmaWxsPSIjMDAwMDAwIi8%2BPC9zdmc%2B'%2C%0A%20%20%20%20%20%20%20%20imageSize%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20width%3A%20100%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%20100%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%22%0A%20%20%20%20%20%20enableDragging%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E6%8B%96%E5%8A%A8%E5%9B%BE%E7%89%87%E8%AF%95%E8%AF%95%3C%2Fp%3E%0A"},{default:d(()=>[u]),_:1}),C,t("table",null,[r,t("tbody",null,[t("tr",null,[i,A,g,N,z,t("td",null,[s(M,{type:"tip",text:"^0.0.35"})])]),I,k,j,T,y,m])]),F])}const U=l(E,[["render",O]]);export{_ as __pageData,U as default};
