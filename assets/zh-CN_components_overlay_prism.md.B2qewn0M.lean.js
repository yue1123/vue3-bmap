import{_ as l,c,I as t,w as E,j as a,al as n,a as s,D as e,o as u}from"./chunks/framework.n6hqIsqL.js";const V=JSON.parse('{"title":"BPrism 3d 棱柱","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/overlay/prism.md","filePath":"zh-CN/components/overlay/prism.md","lastUpdated":1724785300000}'),C={name:"zh-CN/components/overlay/prism.md"},d=n("",4),i=a("p",null,"overlay/prism",-1),r=n("",3),D={tabindex:"0"},F=a("thead",null,[a("tr",null,[a("th",null,"属性"),a("th",null,"说明"),a("th",null,"类型"),a("th",null,"可选值"),a("th",null,"默认值"),a("th",null,"版本")])],-1),k=a("tr",null,[a("td",null,"path"),a("td",null,"多边形的坐标数组"),a("td",null,[a("code",null,"{ lng: number, lat: number}[]")]),a("td",null,"-"),a("td",null,[a("code",null,"required")]),a("td",null,"-")],-1),A=a("tr",null,[a("td",null,"altitude"),a("td",null,"3d 棱柱高度"),a("td",null,[a("code",null,"number")]),a("td",null,"-"),a("td",null,[a("code",null,"required")]),a("td",null,"-")],-1),h=a("tr",null,[a("td",null,"topFillColor"),a("td",null,"顶面填充颜色"),a("td",null,[a("code",null,"string ")]),a("td",null,"-"),a("td",null,[a("code",null,"#fff")]),a("td",null,"-")],-1),m=a("tr",null,[a("td",null,"topFillOpacity"),a("td",null,"顶面填充颜色透明度"),a("td",null,[a("code",null,"number")]),a("td",null,[a("code",null,"0-1")]),a("td",null,"-"),a("td",null,"-")],-1),_=a("tr",null,[a("td",null,"sideFillColor"),a("td",null,"侧面填充颜色"),a("td",null,[a("code",null,"string")]),a("td",null,"-"),a("td"),a("td",null,"-")],-1),v=a("tr",null,[a("td",null,"sideFillOpacity"),a("td",null,"侧面填充颜色透明度"),a("td",null,[a("code",null,"number")]),a("td",null,[a("code",null,"0-1")]),a("td",null,[a("code",null,"#fff")]),a("td",null,"-")],-1),B=a("tr",null,[a("td",null,"enableMassClear"),a("td",null,[s("是否在调用 "),a("code",null,"map.clearOverlays"),s(" 清除此覆盖物")]),a("td",null,[a("code",null,"boolean")]),a("td",null,"-"),a("td",null,[a("code",null," true")]),a("td",null,"-")],-1),b=a("td",null,"visible",-1),g=a("td",null,"是否显示",-1),y=a("td",null,[a("code",null,"boolean")],-1),f=a("td",null,"-",-1),P=a("td",null,[a("code",null,"true")],-1),q=n("",2);function T(O,x,S,w,I,M){const o=e("Demo"),p=e("Badge");return u(),c("div",null,[d,t(o,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E10%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Atilt%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E50%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3EenableScrollWheelZoom%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3EmapStyleId%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E980161f3645989feac25a0da15da4178%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40initd%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EhandleInitd%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBPrism%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3EisBoundary%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Apath%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EpathPoints%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AautoCenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Efalse%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AtopFillOpacity%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EtopFillOpacity%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AsideFillOpacity%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E0.9%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aaltitude%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E5000%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3EsideFillColor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%235679ea%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3EtopFillColor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%235679ea%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40mouseover%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EhandleMouseover%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40mouseout%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EhandleMouseout%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20useAreaBoundary%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue3-baidu-map-gl'%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20topFillOpacity%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Enumber%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E0.5%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20area%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Estring%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'%E5%8C%97%E4%BA%AC%E5%B8%82'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eboundaries%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20pathPoints%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20get%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EuseAreaBoundary%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EhandleInitd%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3Eget%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Earea%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EhandleMouseover%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20topFillOpacity%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EhandleMouseout%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20topFillOpacity%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E0.5%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/prism","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%0A%20%20%20%20v-bind%3D%22%24attrs%22%0A%20%20%20%20%3Azoom%3D%2210%22%0A%20%20%20%20%3Atilt%3D%2250%22%0A%20%20%20%20enableScrollWheelZoom%0A%20%20%20%20mapStyleId%3D%22980161f3645989feac25a0da15da4178%22%0A%20%20%20%20%40initd%3D%22handleInitd%22%0A%20%20%3E%0A%20%20%20%20%3CBPrism%0A%20%20%20%20%20%20isBoundary%0A%20%20%20%20%20%20%3Apath%3D%22pathPoints%22%0A%20%20%20%20%20%20%3AautoCenter%3D%22false%22%0A%20%20%20%20%20%20%3AtopFillOpacity%3D%22topFillOpacity%22%0A%20%20%20%20%20%20%3AsideFillOpacity%3D%220.9%22%0A%20%20%20%20%20%20%3Aaltitude%3D%225000%22%0A%20%20%20%20%20%20sideFillColor%3D%22%235679ea%22%0A%20%20%20%20%20%20topFillColor%3D%22%235679ea%22%0A%20%20%20%20%20%20%40mouseover%3D%22handleMouseover%22%0A%20%20%20%20%20%20%40mouseout%3D%22handleMouseout%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20import%20%7B%20useAreaBoundary%20%7D%20from%20'vue3-baidu-map-gl'%0A%20%20const%20topFillOpacity%20%3D%20ref%3Cnumber%3E(0.5)%0A%20%20const%20area%20%3D%20ref%3Cstring%3E('%E5%8C%97%E4%BA%AC%E5%B8%82')%0A%20%20const%20%7B%20boundaries%3A%20pathPoints%2C%20get%20%7D%20%3D%20useAreaBoundary()%0A%0A%20%20function%20handleInitd()%20%7B%0A%20%20%20%20get(area.value)%0A%20%20%7D%0A%0A%20%20function%20handleMouseover()%20%7B%0A%20%20%20%20topFillOpacity.value%20%3D%201%0A%20%20%7D%0A%0A%20%20function%20handleMouseout()%20%7B%0A%20%20%20%20topFillOpacity.value%20%3D%200.5%0A%20%20%7D%0A%3C%2Fscript%3E%0A",description:"%3Cp%3E%E7%BB%93%E5%90%88%20%3Ca%20href%3D%22..%2Fhooks%2FuseAreaBoundary%22%3E%3Ccode%3EuseAreaBoundary%3C%2Fcode%3E%3C%2Fa%3E%20hooks%2C%20%E5%B9%B6%E9%80%9A%E8%BF%87%E6%8C%87%E5%AE%9A%20%3Ccode%3Eprops.isBoundary%3C%2Fcode%3E%20%E4%B8%BA%20%3Ccode%3Etrue%3C%2Fcode%3E%20%E5%AE%9E%E7%8E%B0%203d%20%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%9F%9F%E6%98%BE%E7%A4%BA%E6%95%88%E6%9E%9C%3C%2Fp%3E%0A"},{default:E(()=>[i]),_:1}),r,a("table",D,[F,a("tbody",null,[k,A,h,m,_,v,B,a("tr",null,[b,g,y,f,P,a("td",null,[t(p,{type:"tip",text:"^2.2.0"})])])])]),q])}const z=l(C,[["render",T]]);export{V as __pageData,z as default};
