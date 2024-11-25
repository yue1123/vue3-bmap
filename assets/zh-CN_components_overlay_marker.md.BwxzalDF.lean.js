import{_ as E,c as C,I as a,w as o,j as n,al as s,a as t,D as l,o as c}from"./chunks/framework.n6hqIsqL.js";const s2=JSON.parse('{"title":"BMarker 标注点","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/overlay/marker.md","filePath":"zh-CN/components/overlay/marker.md","lastUpdated":1732562503000}'),u={name:"zh-CN/components/overlay/marker.md"},D=s("",4),r=n("p",null,"overlay/marker",-1),d=n("h2",{id:"动态渲染",tabindex:"-1"},[t("动态渲染 "),n("a",{class:"header-anchor",href:"#动态渲染","aria-label":'Permalink to "动态渲染"'},"​")],-1),M=n("p",null,"有时候需要根据动态数据，渲染 marker，点击更新按钮查看效果。",-1),i=n("p",null,"overlay/dyynmicMaker",-1),k=s("",3),A={tabindex:"0"},g=n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"可选值"),n("th",null,"默认值"),n("th",null,"版本")])],-1),F=n("td",null,"zIndex",-1),N=n("td",null,"显示层级",-1),z=n("td",null,[n("code",null,"number")],-1),I=n("td",null,"-",-1),j=n("td",null,"-",-1),m=n("tr",null,[n("td",null,"position"),n("td",null,"标注点的坐标"),n("td",null,[n("code",null,"{ lng: number, lat: number}")]),n("td",null,"-"),n("td",null,[n("code",null,"required")]),n("td",null,"-")],-1),y=n("tr",null,[n("td",null,"offset"),n("td",null,"标注点的像素偏移"),n("td",null,[n("code",null," {x: number, y: number }")]),n("td",null,"-"),n("td"),n("td",null,"-")],-1),B=n("tr",null,[n("td",null,"icon"),n("td",null,[t("标注点的图标。可使用默认图标，也可"),n("a",{href:"#自定义图标"},"自定义图标")]),n("td",null,[n("code",null,"string ")]),n("td",null,[n("code",null,"simple_red / simple_blue...")]),n("td",null,"-"),n("td",null,"-")],-1),T=n("tr",null,[n("td",null,"rotation"),n("td",null,"旋转角度"),n("td",null,[n("code",null,"number ")]),n("td",null,"-"),n("td"),n("td",null,"-")],-1),h=n("tr",null,[n("td",null,"enableDragging"),n("td",null,"是否启用拖拽"),n("td",null,[n("code",null,"boolean ")]),n("td",null,"-"),n("td",null,[n("code",null," true")]),n("td",null,"-")],-1),_=n("tr",null,[n("td",null,"enableMassClear"),n("td",null,[t("是否在调用 "),n("code",null,"map.clearOverlays"),t(" 清除此覆盖物")]),n("td",null,[n("code",null,"boolean ")]),n("td",null,"-"),n("td",null,[n("code",null,"true ")]),n("td",null,"-")],-1),x=n("td",null,"visible",-1),b=n("td",null,"是否显示",-1),O=n("td",null,[n("code",null,"boolean")],-1),L=n("td",null,"-",-1),Q=n("td",null,[n("code",null,"true")],-1),S=s("",7),w={tabindex:"0"},U=n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"默认值"),n("th",null,"版本")])],-1),v=n("tr",null,[n("td",null,"anchor"),n("td",null,"图标的定位点相对于图标左上角的偏移值"),n("td",null,[n("code",null,"{ x: number, y: number }")]),n("td",null,"-"),n("td",null,"-")],-1),P=n("tr",null,[n("td",null,"imageOffset"),n("td",null,"图标所用的图片相对于可视区域的偏移值，此功能的作用等同于 CSS 中的 background-position 属性"),n("td",null,[n("code",null,"{ x: number, y: number }")]),n("td",null,"-"),n("td",null,"-")],-1),f=n("td",null,"size",-1),Y=n("td",null,"图标可视区域的大小",-1),q=n("td",null,[n("code",null,"{ width: number, height: number }")],-1),Z=n("td",null,[n("code",null,"required")],-1),V=n("tr",null,[n("td",null,"imageSize"),n("td",null,"图标所用的图片的大小，此功能的作用等同于 CSS 中的 background-size 属性。可用于实现高清屏的高清效果"),n("td",null,[n("code",null,"{ width: number, height: number }")]),n("td",null,"-"),n("td",null,"-")],-1),R=n("tr",null,[n("td",null,"imageUrl"),n("td",null,"图标所用图像资源的位置"),n("td",null,[n("code",null,"string")]),n("td",null,[n("code",null,"required")]),n("td",null,"-")],-1),G=n("tr",null,[n("td",null,"printImageUrl"),n("td",null,"设置 icon 打印图片的 url，该打印图片只针对 IE6 有效，解决 IE6 使用 PNG 滤镜导致的错位问题。如果您的 icon 没有使用 PNG 格式图片或者没有使用 CSS Sprites 技术，则可忽略此配置"),n("td",null,[n("code",null,"string ")]),n("td",null,"-"),n("td",null,"-")],-1),W=s("",2);function J(X,H,$,K,n2,a2){const p=l("Demo"),e=l("Badge");return c(),C("div",null,[D,a(p,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E16%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%E8%B5%B7%E7%82%B9%E5%9B%BE%E6%A0%87%20--%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AzIndex%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E99%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.403901%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Estart%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%E7%BB%88%E7%82%B9%E5%9B%BE%E6%A0%87%20--%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.404901%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eend%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%E7%BA%A2%E8%89%B2%E5%9B%BE%E6%A0%871%20--%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.405901%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ered1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%E7%BA%A2%E8%89%B2%E5%9B%BE%E6%A0%872%20--%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.403901%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Esimple_red%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87%20--%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.400901%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%0A%20%20%20%20%20%20%20%20imageUrl%3A%20'data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQgNEMxMi45NTQzIDQgNCAxMi45NTQzIDQgMjRDNCAzNS4wNDU3IDEyLjk1NDMgNDQgMjQgNDRDMzUuMDQ1NyA0NCA0NCAzNS4wNDU3IDQ0IDI0QzQ0IDEyLjk1NDMgMzUuMDQ1NyA0IDI0IDRaTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkuMTgzMyA0NS40NzE2QzE4Ljk4OTggNDUuMjIxOSAxOC45ODk4IDQyLjk5NzMgMTkuMTgzMyAzOC43OThDMTcuMTExNCAzOC44Njk2IDE1LjgwMjQgMzguNzI1OCAxNS4yNTYzIDM4LjM2NjdDMTQuNDM3IDM3LjgyOCAxMy42MTY5IDM2LjE2NjcgMTIuODg5MSAzNC45OTU5QzEyLjE2MTQgMzMuODI1MSAxMC41NDYzIDMzLjY0IDkuODk0MDUgMzMuMzc4M0M5LjI0MTgyIDMzLjExNjUgOS4wNzgwOSAzMi4wNDk2IDExLjY5MTMgMzIuODU2NUMxNC4zMDQ0IDMzLjY2MzQgMTQuNDMxOSAzNS44NjA3IDE1LjI1NjMgMzYuMzc0NUMxNi4wODA2IDM2Ljg4ODMgMTguMDUxNSAzNi42NjM1IDE4Ljk0NDggMzYuMjUxOUMxOS44MzgyIDM1Ljg0MDMgMTkuNzcyNCAzNC4zMDc4IDE5LjkzMTcgMzMuNzAwN0MyMC4xMzMxIDMzLjEzNCAxOS40MjMzIDMzLjAwODMgMTkuNDA3NyAzMy4wMDM3QzE4LjUzNTUgMzMuMDAzNyAxMy45NTM5IDMyLjAwNzMgMTIuNjk1NSAyNy41NzA2QzExLjQzNyAyMy4xMzQgMTMuMDU4MSAyMC4yMzQxIDEzLjkyMjkgMTguOTg3NUMxNC40OTk1IDE4LjE1NjQgMTQuNDQ4NSAxNi4zODUyIDEzLjc2OTkgMTMuNjczN0MxNi4yMzM1IDEzLjM1ODkgMTguMTM0NyAxNC4xMzQzIDE5LjQ3MzQgMTYuMDAwMUMxOS40NzQ3IDE2LjAxMDggMjEuMjI4NSAxNC45NTcyIDI0LjAwMDMgMTQuOTU3MkMyNi43NzIgMTQuOTU3MiAyNy43NTUzIDE1LjgxNTQgMjguNTE0MiAxNi4wMDAxQzI5LjI3MzEgMTYuMTg0OCAyOS44OCAxMi43MzQxIDM0LjU2NjggMTMuNjczN0MzMy41ODgzIDE1LjU5NjkgMzIuNzY4OSAxOC4wMDAxIDMzLjM5NDMgMTguOTg3NUMzNC4wMTk4IDE5Ljk3NDkgMzYuNDc0NSAyMy4xMTQ3IDM0Ljk2NjYgMjcuNTcwNkMzMy45NjE0IDMwLjU0MTMgMzEuOTg1MyAzMi4zNTIzIDI5LjAzODQgMzMuMDAzN0MyOC43MDA1IDMzLjExMTUgMjguNTMxNSAzMy4yODU1IDI4LjUzMTUgMzMuNTI1NUMyOC41MzE1IDMzLjg4NTYgMjguOTg4NCAzMy45MjQ5IDI5LjY0NjUgMzUuNjExN0MzMC4wODUzIDM2LjczNjIgMzAuMTE3IDM5Ljk0OCAyOS43NDE2IDQ1LjI0N0MyOC43OTA2IDQ1LjQ4OTEgMjguMDUwOCA0NS42NTE2IDI3LjUyMjEgNDUuNzM0N0MyNi41ODQ3IDQ1Ljg4MiAyNS41NjY5IDQ1Ljk2NDYgMjQuNTY2OSA0NS45OTY1QzIzLjU2NjkgNDYuMDI4NCAyMy4yMTk2IDQ2LjAyNDggMjEuODM3IDQ1Ljg5NjFDMjAuOTE1NCA0NS44MTAzIDIwLjAzMDggNDUuNjY4OCAxOS4xODMzIDQ1LjQ3MTZaIiBmaWxsPSIjMDAwMDAwIi8%2BPC9zdmc%2B'%2C%0A%20%20%20%20%20%20%20%20size%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20width%3A%20100%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%20100%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3EenableDragging%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/marker","raw-source":"%3Ctemplate%3E%0A%20%20%20%20%3CBMap%20%3Azoom%3D%2216%22%3E%0A%20%20%20%20%20%20%3C!--%20%E8%B5%B7%E7%82%B9%E5%9B%BE%E6%A0%87%20--%3E%0A%20%20%20%20%20%20%3CBMarker%20%3AzIndex%3D%2299%22%20%3Aposition%3D%22%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.403901%20%7D%22%20icon%3D%22start%22%20%2F%3E%0A%20%20%20%20%20%20%3C!--%20%E7%BB%88%E7%82%B9%E5%9B%BE%E6%A0%87%20--%3E%0A%20%20%20%20%20%20%3CBMarker%20%3Aposition%3D%22%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.404901%20%7D%22%20icon%3D%22end%22%20%2F%3E%0A%20%20%20%20%20%20%3C!--%20%E7%BA%A2%E8%89%B2%E5%9B%BE%E6%A0%871%20--%3E%0A%20%20%20%20%20%20%3CBMarker%20%3Aposition%3D%22%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.405901%20%7D%22%20icon%3D%22red1%22%20%2F%3E%0A%20%20%20%20%20%20%3C!--%20%E7%BA%A2%E8%89%B2%E5%9B%BE%E6%A0%872%20--%3E%0A%20%20%20%20%20%20%3CBMarker%20%3Aposition%3D%22%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.403901%20%7D%22%20icon%3D%22simple_red%22%20%2F%3E%0A%20%20%20%20%20%20%3C!--%20%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87%20--%3E%0A%20%20%20%20%20%20%3CBMarker%0A%20%20%20%20%20%20%3Aposition%3D%22%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.400901%20%7D%22%0A%20%20%20%20%20%20%3Aicon%3D%22%7B%0A%20%20%20%20%20%20%20%20imageUrl%3A%20'data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQgNEMxMi45NTQzIDQgNCAxMi45NTQzIDQgMjRDNCAzNS4wNDU3IDEyLjk1NDMgNDQgMjQgNDRDMzUuMDQ1NyA0NCA0NCAzNS4wNDU3IDQ0IDI0QzQ0IDEyLjk1NDMgMzUuMDQ1NyA0IDI0IDRaTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkuMTgzMyA0NS40NzE2QzE4Ljk4OTggNDUuMjIxOSAxOC45ODk4IDQyLjk5NzMgMTkuMTgzMyAzOC43OThDMTcuMTExNCAzOC44Njk2IDE1LjgwMjQgMzguNzI1OCAxNS4yNTYzIDM4LjM2NjdDMTQuNDM3IDM3LjgyOCAxMy42MTY5IDM2LjE2NjcgMTIuODg5MSAzNC45OTU5QzEyLjE2MTQgMzMuODI1MSAxMC41NDYzIDMzLjY0IDkuODk0MDUgMzMuMzc4M0M5LjI0MTgyIDMzLjExNjUgOS4wNzgwOSAzMi4wNDk2IDExLjY5MTMgMzIuODU2NUMxNC4zMDQ0IDMzLjY2MzQgMTQuNDMxOSAzNS44NjA3IDE1LjI1NjMgMzYuMzc0NUMxNi4wODA2IDM2Ljg4ODMgMTguMDUxNSAzNi42NjM1IDE4Ljk0NDggMzYuMjUxOUMxOS44MzgyIDM1Ljg0MDMgMTkuNzcyNCAzNC4zMDc4IDE5LjkzMTcgMzMuNzAwN0MyMC4xMzMxIDMzLjEzNCAxOS40MjMzIDMzLjAwODMgMTkuNDA3NyAzMy4wMDM3QzE4LjUzNTUgMzMuMDAzNyAxMy45NTM5IDMyLjAwNzMgMTIuNjk1NSAyNy41NzA2QzExLjQzNyAyMy4xMzQgMTMuMDU4MSAyMC4yMzQxIDEzLjkyMjkgMTguOTg3NUMxNC40OTk1IDE4LjE1NjQgMTQuNDQ4NSAxNi4zODUyIDEzLjc2OTkgMTMuNjczN0MxNi4yMzM1IDEzLjM1ODkgMTguMTM0NyAxNC4xMzQzIDE5LjQ3MzQgMTYuMDAwMUMxOS40NzQ3IDE2LjAxMDggMjEuMjI4NSAxNC45NTcyIDI0LjAwMDMgMTQuOTU3MkMyNi43NzIgMTQuOTU3MiAyNy43NTUzIDE1LjgxNTQgMjguNTE0MiAxNi4wMDAxQzI5LjI3MzEgMTYuMTg0OCAyOS44OCAxMi43MzQxIDM0LjU2NjggMTMuNjczN0MzMy41ODgzIDE1LjU5NjkgMzIuNzY4OSAxOC4wMDAxIDMzLjM5NDMgMTguOTg3NUMzNC4wMTk4IDE5Ljk3NDkgMzYuNDc0NSAyMy4xMTQ3IDM0Ljk2NjYgMjcuNTcwNkMzMy45NjE0IDMwLjU0MTMgMzEuOTg1MyAzMi4zNTIzIDI5LjAzODQgMzMuMDAzN0MyOC43MDA1IDMzLjExMTUgMjguNTMxNSAzMy4yODU1IDI4LjUzMTUgMzMuNTI1NUMyOC41MzE1IDMzLjg4NTYgMjguOTg4NCAzMy45MjQ5IDI5LjY0NjUgMzUuNjExN0MzMC4wODUzIDM2LjczNjIgMzAuMTE3IDM5Ljk0OCAyOS43NDE2IDQ1LjI0N0MyOC43OTA2IDQ1LjQ4OTEgMjguMDUwOCA0NS42NTE2IDI3LjUyMjEgNDUuNzM0N0MyNi41ODQ3IDQ1Ljg4MiAyNS41NjY5IDQ1Ljk2NDYgMjQuNTY2OSA0NS45OTY1QzIzLjU2NjkgNDYuMDI4NCAyMy4yMTk2IDQ2LjAyNDggMjEuODM3IDQ1Ljg5NjFDMjAuOTE1NCA0NS44MTAzIDIwLjAzMDggNDUuNjY4OCAxOS4xODMzIDQ1LjQ3MTZaIiBmaWxsPSIjMDAwMDAwIi8%2BPC9zdmc%2B'%2C%0A%20%20%20%20%20%20%20%20size%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20width%3A%20100%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%20100%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%22%0A%20%20%20%20%20%20enableDragging%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FBMap%3E%0A%20%20%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E5%9C%A8%E5%9C%B0%E5%9B%BE%E4%B8%8A%E6%B7%BB%E5%8A%A0%E6%A0%87%E8%AE%B0%E7%82%B9%EF%BC%8C%E9%80%9A%E8%BF%87%20icon%20%E6%8C%87%E5%AE%9A%E6%98%BE%E7%A4%BA%E5%9B%BE%E6%A0%87%2C%20%E5%B0%9D%E8%AF%95%E6%8B%96%E5%8A%A8%E5%9B%BE%E7%89%87%3C%2Fp%3E%0A"},{default:o(()=>[r]),_:1}),d,M,a(p,{class:"p-bottom",source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20BMap%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20BMarker%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20_Point%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue3-baidu-map-gl'%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20center%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elng%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E113.5213534078%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elat%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E27.6907991732%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20data%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E_Point%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3Ecenter%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EhandleUpdate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20data%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20Array%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Efrom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elength%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E10%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Emap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20random%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20Math%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Erandom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E*%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E0.05%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20posLng%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20Math%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Erandom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E0.5%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3F%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20posLat%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20Math%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Erandom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E0.5%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3F%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elat%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20center%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Elat%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%20random%20%3Cspan%20class%3D%22token%20operator%22%3E*%3C%2Fspan%3E%20posLat%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elng%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20center%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Elng%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%3C%2Fspan%3E%20random%20%3Cspan%20class%3D%22token%20operator%22%3E*%3C%2Fspan%3E%20posLng%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecenter%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-for%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E(item%2C%20index)%20in%20data%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Akey%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eindex%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eitem%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eloc_red%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ebutton%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EhandleUpdate%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%9B%B4%E6%96%B0%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/dyynmicMaker","raw-source":"%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20BMap%2C%20BMarker%2C%20_Point%20%7D%20from%20'vue3-baidu-map-gl'%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%0A%20%20const%20center%20%3D%20%7B%20lng%3A%20113.5213534078%2C%20lat%3A%2027.6907991732%20%7D%0A%20%20const%20data%20%3D%20ref%3C_Point%5B%5D%3E(%5Bcenter%5D)%0A%0A%20%20const%20handleUpdate%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20data.value%20%3D%20Array.from(%7B%20length%3A%2010%20%7D).map(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20random%20%3D%20Math.random()%20*%200.05%0A%20%20%20%20%20%20const%20posLng%20%3D%20Math.random()%20%3E%200.5%20%3F%20-1%20%3A%201%0A%20%20%20%20%20%20const%20posLat%20%3D%20Math.random()%20%3E%200.5%20%3F%20-1%20%3A%201%0A%20%20%20%20%20%20return%20%7B%20lat%3A%20center.lat%20%2B%20random%20*%20posLat%2C%20lng%3A%20center.lng%20%2B%20random%20*%20posLng%20%7D%0A%20%20%20%20%7D)%0A%20%20%7D%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3CBMap%20%3Acenter%3D%22center%22%3E%0A%20%20%20%20%3CBMarker%20v-for%3D%22(item%2C%20index)%20in%20data%22%20%3Akey%3D%22index%22%20%3Aposition%3D%22item%22%20icon%3D%22loc_red%22%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%20%20%3Cbutton%20class%3D%22myButton%20no-m-b%22%20type%3D%22button%22%20%40click%3D%22handleUpdate%22%3E%E6%9B%B4%E6%96%B0%3C%2Fbutton%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:o(()=>[i]),_:1}),k,n("table",A,[g,n("tbody",null,[n("tr",null,[F,N,z,I,j,n("td",null,[a(e,{type:"tip",text:"^0.0.35"})])]),m,y,B,T,h,_,n("tr",null,[x,b,O,L,Q,n("td",null,[a(e,{type:"tip",text:"^2.2.0"})])])])]),S,n("table",w,[U,n("tbody",null,[v,P,n("tr",null,[f,Y,q,Z,n("td",null,[a(e,{type:"tip",text:"^2.3.3"})])]),V,R,G])]),W])}const e2=E(u,[["render",J]]);export{s2 as __pageData,e2 as default};
