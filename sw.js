if(!self.define){let e,s={};const n=(n,o)=>(n=new URL(n+".js",o).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,l)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let i={};const r=e=>n(e,a),t={module:{uri:a},exports:i,require:r};s[a]=Promise.all(o.map((e=>t[e]||r(e)))).then((e=>(l(...e),i)))}}define(["./workbox-8c9736bb"],(function(e){"use strict";e.setCacheNameDetails({prefix:"bundle-prefetch"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"102f42ca2a7511d8bb6cd507ef7b12ef"},{url:"assets/app.CCmjgpae.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.BVyFwV8F.js",revision:null},{url:"assets/chunks/bmap-draw.min.4O0BZXxI.js",revision:null},{url:"assets/chunks/commonjsHelpers.Cpj98o6Y.js",revision:null},{url:"assets/chunks/framework.n6hqIsqL.js",revision:null},{url:"assets/chunks/mapvthree.umd.1cz8IRaC.js",revision:null},{url:"assets/chunks/theme.-bEKLWFY.js",revision:null},{url:"assets/chunks/vanilla-tilt.es2015.DBgKETYq.js",revision:null},{url:"assets/chunks/virtual_pwa-register.F33dMvvE.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.6F88UWle.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.B_6ZJHoI.js",revision:null},{url:"assets/index.md.CiNBW8e4.js",revision:null},{url:"assets/index.md.CiNBW8e4.lean.js",revision:null},{url:"assets/inter-italic-cyrillic-ext.r48I6akx.woff2",revision:null},{url:"assets/inter-italic-cyrillic.By2_1cv3.woff2",revision:null},{url:"assets/inter-italic-greek-ext.1u6EdAuj.woff2",revision:null},{url:"assets/inter-italic-greek.DJ8dCoTZ.woff2",revision:null},{url:"assets/inter-italic-latin-ext.CN1xVJS-.woff2",revision:null},{url:"assets/inter-italic-latin.C2AdPX0b.woff2",revision:null},{url:"assets/inter-italic-vietnamese.BSbpV94h.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2",revision:null},{url:"assets/inter-roman-cyrillic.C5lxZ8CY.woff2",revision:null},{url:"assets/inter-roman-greek-ext.CqjqNYQ-.woff2",revision:null},{url:"assets/inter-roman-greek.BBVDIX6e.woff2",revision:null},{url:"assets/inter-roman-latin-ext.4ZJIpNVo.woff2",revision:null},{url:"assets/inter-roman-latin.Di8DUHzh.woff2",revision:null},{url:"assets/inter-roman-vietnamese.BjW4sHH5.woff2",revision:null},{url:"assets/sponsor.md.rapiUBvt.js",revision:null},{url:"assets/sponsor.md.rapiUBvt.lean.js",revision:null},{url:"assets/style.DQDgy0V6.css",revision:null},{url:"assets/zh-CN_components_autoComplete_index.md.DQoPodUL.js",revision:null},{url:"assets/zh-CN_components_autoComplete_index.md.DQoPodUL.lean.js",revision:null},{url:"assets/zh-CN_components_control_citylist.md.uLczJt12.js",revision:null},{url:"assets/zh-CN_components_control_citylist.md.uLczJt12.lean.js",revision:null},{url:"assets/zh-CN_components_control_context-menu.md.ymt5YPFp.js",revision:null},{url:"assets/zh-CN_components_control_context-menu.md.ymt5YPFp.lean.js",revision:null},{url:"assets/zh-CN_components_control_copyright.md.BXr3tWie.js",revision:null},{url:"assets/zh-CN_components_control_copyright.md.BXr3tWie.lean.js",revision:null},{url:"assets/zh-CN_components_control_custom.md.mA4ICBXG.js",revision:null},{url:"assets/zh-CN_components_control_custom.md.mA4ICBXG.lean.js",revision:null},{url:"assets/zh-CN_components_control_location.md.BISwXaNg.js",revision:null},{url:"assets/zh-CN_components_control_location.md.BISwXaNg.lean.js",revision:null},{url:"assets/zh-CN_components_control_navigation3d.md.Ft2w-rsN.js",revision:null},{url:"assets/zh-CN_components_control_navigation3d.md.Ft2w-rsN.lean.js",revision:null},{url:"assets/zh-CN_components_control_panorama-control.md.CfR8VVZi.js",revision:null},{url:"assets/zh-CN_components_control_panorama-control.md.CfR8VVZi.lean.js",revision:null},{url:"assets/zh-CN_components_control_scale.md.DuVkT0Hk.js",revision:null},{url:"assets/zh-CN_components_control_scale.md.DuVkT0Hk.lean.js",revision:null},{url:"assets/zh-CN_components_control_zoom.md.vmZan6vN.js",revision:null},{url:"assets/zh-CN_components_control_zoom.md.vmZan6vN.lean.js",revision:null},{url:"assets/zh-CN_components_layer_district-layer.md.gp0MGNvv.js",revision:null},{url:"assets/zh-CN_components_layer_district-layer.md.gp0MGNvv.lean.js",revision:null},{url:"assets/zh-CN_components_layer_panorama-coverage.md.DGi9wvoW.js",revision:null},{url:"assets/zh-CN_components_layer_panorama-coverage.md.DGi9wvoW.lean.js",revision:null},{url:"assets/zh-CN_components_map.md.QTK8yFhV.js",revision:null},{url:"assets/zh-CN_components_map.md.QTK8yFhV.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_bezierCurve.md.B_ppttYG.js",revision:null},{url:"assets/zh-CN_components_overlay_bezierCurve.md.B_ppttYG.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_circle.md.pa5wWVpk.js",revision:null},{url:"assets/zh-CN_components_overlay_circle.md.pa5wWVpk.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_ground-overlay.md.DUChyj6g.js",revision:null},{url:"assets/zh-CN_components_overlay_ground-overlay.md.DUChyj6g.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_infowindow.md.Ct8o2KOQ.js",revision:null},{url:"assets/zh-CN_components_overlay_infowindow.md.Ct8o2KOQ.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_label.md.BrGf0ABD.js",revision:null},{url:"assets/zh-CN_components_overlay_label.md.BrGf0ABD.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_mapMask.md.C8jk-9AH.js",revision:null},{url:"assets/zh-CN_components_overlay_mapMask.md.C8jk-9AH.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_marker.md.D_cVCEpz.js",revision:null},{url:"assets/zh-CN_components_overlay_marker.md.D_cVCEpz.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_marker3d.md.DBnGeUZO.js",revision:null},{url:"assets/zh-CN_components_overlay_marker3d.md.DBnGeUZO.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_polygon.md.BWeZXyb8.js",revision:null},{url:"assets/zh-CN_components_overlay_polygon.md.BWeZXyb8.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_polyline.md.CDBAW4zY.js",revision:null},{url:"assets/zh-CN_components_overlay_polyline.md.CDBAW4zY.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_prism.md.B2qewn0M.js",revision:null},{url:"assets/zh-CN_components_overlay_prism.md.B2qewn0M.lean.js",revision:null},{url:"assets/zh-CN_expand_bmap-draw.md.i3gnZ90D.js",revision:null},{url:"assets/zh-CN_expand_bmap-draw.md.i3gnZ90D.lean.js",revision:null},{url:"assets/zh-CN_expand_mapv.md.CkKUmVIe.js",revision:null},{url:"assets/zh-CN_expand_mapv.md.CkKUmVIe.lean.js",revision:null},{url:"assets/zh-CN_guide_breaking-changes.md.BfxDBOML.js",revision:null},{url:"assets/zh-CN_guide_breaking-changes.md.BfxDBOML.lean.js",revision:null},{url:"assets/zh-CN_guide_com-events.md.D6sVTlpx.js",revision:null},{url:"assets/zh-CN_guide_com-events.md.D6sVTlpx.lean.js",revision:null},{url:"assets/zh-CN_guide_config.md.CWKE5CPM.js",revision:null},{url:"assets/zh-CN_guide_config.md.CWKE5CPM.lean.js",revision:null},{url:"assets/zh-CN_guide_faq.md.DLloHY_Y.js",revision:null},{url:"assets/zh-CN_guide_faq.md.DLloHY_Y.lean.js",revision:null},{url:"assets/zh-CN_guide_installation.md.CE9TKwIt.js",revision:null},{url:"assets/zh-CN_guide_installation.md.CE9TKwIt.lean.js",revision:null},{url:"assets/zh-CN_guide_introduction.md.BFOZaG2g.js",revision:null},{url:"assets/zh-CN_guide_introduction.md.BFOZaG2g.lean.js",revision:null},{url:"assets/zh-CN_guide_quick-start.md.COKMMbVx.js",revision:null},{url:"assets/zh-CN_guide_quick-start.md.COKMMbVx.lean.js",revision:null},{url:"assets/zh-CN_hooks_useAddressGeocoder.md.B-3kHth6.js",revision:null},{url:"assets/zh-CN_hooks_useAddressGeocoder.md.B-3kHth6.lean.js",revision:null},{url:"assets/zh-CN_hooks_useAreaBoundary.md.CC8ZAf6w.js",revision:null},{url:"assets/zh-CN_hooks_useAreaBoundary.md.CC8ZAf6w.lean.js",revision:null},{url:"assets/zh-CN_hooks_useBrowserLocation.md.3DNDeBXx.js",revision:null},{url:"assets/zh-CN_hooks_useBrowserLocation.md.3DNDeBXx.lean.js",revision:null},{url:"assets/zh-CN_hooks_useDefaultMarkerIcons.md.Djxvwufr.js",revision:null},{url:"assets/zh-CN_hooks_useDefaultMarkerIcons.md.Djxvwufr.lean.js",revision:null},{url:"assets/zh-CN_hooks_useIpLocation.md.DEuBASB_.js",revision:null},{url:"assets/zh-CN_hooks_useIpLocation.md.DEuBASB_.lean.js",revision:null},{url:"assets/zh-CN_hooks_usePoint.md.CaVondzo.js",revision:null},{url:"assets/zh-CN_hooks_usePoint.md.CaVondzo.lean.js",revision:null},{url:"assets/zh-CN_hooks_usePointConvertor.md.DRPIMBVL.js",revision:null},{url:"assets/zh-CN_hooks_usePointConvertor.md.DRPIMBVL.lean.js",revision:null},{url:"assets/zh-CN_hooks_usePointGeocoder.md.Dik6QxCV.js",revision:null},{url:"assets/zh-CN_hooks_usePointGeocoder.md.Dik6QxCV.lean.js",revision:null},{url:"assets/zh-CN_hooks_useTrackAnimation.md.2lbxwdWN.js",revision:null},{url:"assets/zh-CN_hooks_useTrackAnimation.md.2lbxwdWN.lean.js",revision:null},{url:"assets/zh-CN_hooks_useViewAnimation.md.DLT_1V89.js",revision:null},{url:"assets/zh-CN_hooks_useViewAnimation.md.DLT_1V89.lean.js",revision:null},{url:"assets/zh-CN_index.md.CEKXJMZO.js",revision:null},{url:"assets/zh-CN_index.md.CEKXJMZO.lean.js",revision:null},{url:"beijing.json",revision:"8ca7c8460514609870281b24078bbf81"},{url:"bounds.svg",revision:"b5001c3bffdaad6a5244df2d49a08e07"},{url:"enable-volar.png",revision:"c6c5d4487d32007fc6a6adb9297fdd6c"},{url:"enable-volar1.png",revision:"aa9e7916f5bcbf6e1aeca8e9dfaa573c"},{url:"hashmap.json",revision:"97095fd9a07c40209d020ab54a04865b"},{url:"icons/icon-192x192.png",revision:"df23467819a90f7f0e57cd0d1bf67e3f"},{url:"icons/icon-512x512.png",revision:"05d42d8e81c2ea43916b9bc98b9ac56c"},{url:"icons/maskable-icon-512x512.png",revision:"ee74635d9d737b7be78efd9ad166af07"},{url:"index.html",revision:"988e44d4de9b757c79b1e1a879ae9473"},{url:"logo-shadow.svg",revision:"8fc534bd92b643a27be3927a763e7951"},{url:"logo.png",revision:"31283fbfca0afc60e809b49ca96ce068"},{url:"logo.svg",revision:"3790581a3ce09985efd90ecc6ac5a9d6"},{url:"not-enable-volar.png",revision:"a682f49b4e025eea643f713deffb30da"},{url:"not-enable-volar1.png",revision:"514ab5f4fe331ff8855d66957ef24c09"},{url:"sponsor.html",revision:"7d9f7a92074207e2f8087787f8838748"},{url:"zh-CN/components/autoComplete/index.html",revision:"463855411229445350bacc9f7aeafa7b"},{url:"zh-CN/components/control/citylist.html",revision:"fd03d363fe4044c4044902266aff8636"},{url:"zh-CN/components/control/context-menu.html",revision:"43d77d7a9b6367a980a6df53eee535d1"},{url:"zh-CN/components/control/copyright.html",revision:"70a6865e42d7c20710f7cb7c0178f996"},{url:"zh-CN/components/control/custom.html",revision:"b6537d380206781160d47b64e01567a9"},{url:"zh-CN/components/control/location.html",revision:"48a5b78d22aa702a616ee18a89d7d526"},{url:"zh-CN/components/control/navigation3d.html",revision:"b9a6a61612d2932560db027b0c984e00"},{url:"zh-CN/components/control/panorama-control.html",revision:"7481ae70ee28c9019662498016008c7a"},{url:"zh-CN/components/control/scale.html",revision:"c3b36092f64e6f868995741d0d99dc14"},{url:"zh-CN/components/control/zoom.html",revision:"52e02db6d5a37f54d6701edae78e4564"},{url:"zh-CN/components/layer/district-layer.html",revision:"910e7cc00d99e23ee7fd223605794fa6"},{url:"zh-CN/components/layer/panorama-coverage.html",revision:"542729109922f368b0430d5fb0db706c"},{url:"zh-CN/components/map.html",revision:"8dd2aaf2495833d37572217c408e1d9d"},{url:"zh-CN/components/overlay/bezierCurve.html",revision:"1fb013058c26f1efe0672b3ea7fd087d"},{url:"zh-CN/components/overlay/circle.html",revision:"787c7c8d59e4f4ab9ef86748c60ce3d5"},{url:"zh-CN/components/overlay/ground-overlay.html",revision:"e8bbf56cdb9179ec0d3ecf59bae35f06"},{url:"zh-CN/components/overlay/infowindow.html",revision:"71a458f2835af70b7ac867e96f70636d"},{url:"zh-CN/components/overlay/label.html",revision:"2e1b0b9461b4570ff63e7c564eeeaa3a"},{url:"zh-CN/components/overlay/mapMask.html",revision:"24150cebc760fafe96479ee7615face4"},{url:"zh-CN/components/overlay/marker.html",revision:"d1204b530be6c7978c9385c3f8622bb7"},{url:"zh-CN/components/overlay/marker3d.html",revision:"b7eb97ff3791161d979ddf0f5a336fe8"},{url:"zh-CN/components/overlay/polygon.html",revision:"e7ee8fe0db35a226bc3f0d1aaa781d31"},{url:"zh-CN/components/overlay/polyline.html",revision:"c8822f707707405b8393e82139f6619f"},{url:"zh-CN/components/overlay/prism.html",revision:"07fde128a6433b31591fe99dd5e0d2e7"},{url:"zh-CN/expand/bmap-draw.html",revision:"9e1f8e317c2a733ea059edf0f42c04f3"},{url:"zh-CN/expand/mapv.html",revision:"93fe80c3208131e51549015cca64b37f"},{url:"zh-CN/guide/breaking-changes.html",revision:"aa16001527809f9c9c2082dc53db2da1"},{url:"zh-CN/guide/com-events.html",revision:"0beec3f58cae9392d60c4a90cb3e1930"},{url:"zh-CN/guide/config.html",revision:"61fa63428108847c8a7b78f50e269642"},{url:"zh-CN/guide/faq.html",revision:"e0835e63032f41440775b96af86aecd7"},{url:"zh-CN/guide/installation.html",revision:"62b7a2e8479f0a163c4df4aa75ee6f67"},{url:"zh-CN/guide/introduction.html",revision:"f7b7283a42f73de9805e6ba07b20ffb9"},{url:"zh-CN/guide/quick-start.html",revision:"bb8d74316857c53821479772ce51fcd0"},{url:"zh-CN/hooks/useAddressGeocoder.html",revision:"e1339734d560ca1a9b865ec3f0e1970b"},{url:"zh-CN/hooks/useAreaBoundary.html",revision:"ace2e0a143fccee14910b430c7e9246c"},{url:"zh-CN/hooks/useBrowserLocation.html",revision:"589811826c4b2a73a9a3c7d41daee641"},{url:"zh-CN/hooks/useDefaultMarkerIcons.html",revision:"99f98f23a4d9542dab29288f515e13ba"},{url:"zh-CN/hooks/useIpLocation.html",revision:"f757cef641854602420f0445f60320e3"},{url:"zh-CN/hooks/usePoint.html",revision:"7b95ca6cad99d96f50a82fc5b9416547"},{url:"zh-CN/hooks/usePointConvertor.html",revision:"55b45de6a5b9b0b5e7f911c90ee30ecd"},{url:"zh-CN/hooks/usePointGeocoder.html",revision:"4cb590fc293e4c4fc144869908af7384"},{url:"zh-CN/hooks/useTrackAnimation.html",revision:"c98950608b79fd08f76705aa3ba32a99"},{url:"zh-CN/hooks/useViewAnimation.html",revision:"305a4fe5188bf135ab319e0ddd9e642b"},{url:"zh-CN/index.html",revision:"4dfaf13c05d60aa3705b37050d3bd9fe"},{url:"manifest.webmanifest",revision:"47e773587c46881dd5c19db9f20147e7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/vue3\x2dbaidu\x2dmap\x2dgl\/(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/sponsor(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/autoComplete\/index(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/citylist(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/context\x2dmenu(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/copyright(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/custom(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/location(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/navigation3d(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/panorama\x2dcontrol(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/scale(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/zoom(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/layer\/district\x2dlayer(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/layer\/panorama\x2dcoverage(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/map(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/bezierCurve(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/circle(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/ground\x2doverlay(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/infowindow(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/label(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/mapMask(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/marker(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/marker3d(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/polygon(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/polyline(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/prism(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/expand\/bmap\x2ddraw(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/expand\/mapv(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/guide\/breaking\x2dchanges(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/guide\/com\x2devents(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/guide\/config(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/guide\/faq(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/guide\/installation(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/guide\/introduction(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/guide\/quick\x2dstart(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/useAddressGeocoder(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/useAreaBoundary(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/useBrowserLocation(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/useDefaultMarkerIcons(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/useIpLocation(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/usePoint(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/usePointConvertor(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/usePointGeocoder(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/useTrackAnimation(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/useViewAnimation(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/index(\.html)?$/]})),e.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/.*/i,new e.CacheFirst({cacheName:"animated-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:15,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/img\.shields\.io\/.*/i,new e.NetworkFirst({cacheName:"dynamic-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:15,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i,new e.NetworkFirst({cacheName:"jsdelivr-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/api\.github\.com\/.*/i,new e.NetworkFirst({cacheName:"github-api-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\.glb$/i,new e.CacheFirst({cacheName:"3d-model-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute((({request:e,sameOrigin:s})=>s&&"navigate"===e.mode),new e.NetworkOnly({plugins:[{handlerDidError:async()=>Response.redirect("404",302),cacheWillUpdate:async()=>null}]}),"GET")}));
