"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Serok's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"4b8f7b32cbf9908ae5ccb7d4bb5d69d5",url:"./404.html"},{revision:"19eeb7f5adcaac7e44e2bc89be19f63b",url:"./about-codestyle/index.html"},{revision:"5731df82fdfd758288847678c69982af",url:"./about-splay/index.html"},{revision:"45a2e33388df0522c99da3463678aab9",url:"./about/index.html"},{revision:"793e01fbb1990c7239f515b5e3b929d5",url:"./archives/2018/04/index.html"},{revision:"1e09c27fb8509bcfa175791c99c6e275",url:"./archives/2018/index.html"},{revision:"487634d25b0f8a10b97ac9bdbfdce30e",url:"./archives/2019/02/index.html"},{revision:"81da77752dbb47bdbb4e664d1983ced6",url:"./archives/2019/07/index.html"},{revision:"2952ad0542af6da057728e1194311327",url:"./archives/2019/11/index.html"},{revision:"6a286c75a1473c8e45681c3463267e48",url:"./archives/2019/index.html"},{revision:"a7934d1b66519a23f7c432b836f25aec",url:"./archives/2020/01/index.html"},{revision:"d3be50fb573d757014d21518e0d95111",url:"./archives/2020/02/index.html"},{revision:"64718cfd29cc9c2f4cbc9f8efd34fcca",url:"./archives/2020/04/index.html"},{revision:"e6539f0f6fa1cc8a3896d4681976eedb",url:"./archives/2020/05/index.html"},{revision:"edfa135bb944c2398d0572fafe579775",url:"./archives/2020/06/index.html"},{revision:"38ac4c933d1a4b93cddebfbaae64e004",url:"./archives/2020/07/index.html"},{revision:"b816fdcc64a0904c68c9ae254131d279",url:"./archives/2020/index.html"},{revision:"a106b4a575288497f696bac0beb9a9aa",url:"./archives/2020/page/2/index.html"},{revision:"3b45a700bfb90ed656435d80c878f7a0",url:"./archives/index.html"},{revision:"38e59125517baed16e5b290b2615a2e2",url:"./archives/page/2/index.html"},{revision:"0c10acb54a22abd65516cb25eb871b43",url:"./categories/Hexo/index.html"},{revision:"8fe011b202d59f29730a760545e0d90a",url:"./categories/index.html"},{revision:"9aaa78692d0ca1f61da10abfc0ad0eb2",url:"./categories/小说-随笔/index.html"},{revision:"da7d91b6dc51114a0aaae385d23e8056",url:"./categories/小说-随笔/星/index.html"},{revision:"3266615ed96e7b814d7987b32d2092bd",url:"./categories/小说-随笔/未来/index.html"},{revision:"1315d8dfb3c3005e6d82c05f06bccfc2",url:"./categories/小说-随笔/陌上/index.html"},{revision:"9099bcab84ebca8ad18452e4a8907be0",url:"./categories/算法/index.html"},{revision:"b9d39ccb1b25739331e735131c5c65c7",url:"./categories/算法/page/2/index.html"},{revision:"c08d953c9d294756e521484816628d05",url:"./cf387d/index.html"},{revision:"386bda85726294db876d1b44de889666",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"1d73081520cd8b0c0c313982c4a1a593",url:"./dp-knapsack/index.html"},{revision:"504ddd7f4c34b43bb9fa5ac6100ccc1f",url:"./dp-noip-tg/index.html"},{revision:"853254f5cd1ca913291e2954db13a2d5",url:"./friends/index.html"},{revision:"39334a89310c81cd964f93214e234be1",url:"./future/index.html"},{revision:"e76cd28ee4791bd25279a09e57c035ef",url:"./hexo-ssh-deploy/index.html"},{revision:"4e9bf12f4365712bf87572b2bf8dfbb2",url:"./image/pwa/manifest.json"},{revision:"cab817ebcb32540c0d3931eabcbf2ce4",url:"./index.html"},{revision:"125fa8cc0f50b559881e6b0be97b3db2",url:"./js/main.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"bb643bd9c2ac59f6ce2a1251b8014624",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"080fdfcacffc6828826484645140af50",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"0176913a28754a766910352489a24a69",url:"./js/tw_cn.js"},{revision:"ed14620aa57998a9d3f887c1989f5365",url:"./js/utils.js"},{revision:"91f5a34c85dc6a4119bf973f9f4a4202",url:"./lete/index.html"},{revision:"3d743da13ba4bfd933f59754783d2bc4",url:"./match-template/index.html"},{revision:"ea065b26bd53ac199c84717deaeadcda",url:"./maximum-flow/index.html"},{revision:"4f2d4dd6077733332a169d006781acf6",url:"./minimum-cut/index.html"},{revision:"5f30118ac13a642f6751c2a7b9e02a03",url:"./mo-shang/index.html"},{revision:"423e7b2dc76e40a224e3da79b80847e3",url:"./monotonous-queue/index.html"},{revision:"7f1a5196169b7c5a7d94be0b26b324d6",url:"./network-flow-deloop/index.html"},{revision:"7ceb4024c53b60abd1aa0394808c0ae2",url:"./network-flow-dijkstra/index.html"},{revision:"c1ed68841ec04d8fc2bdf1c484b837bf",url:"./network-flow-template/index.html"},{revision:"10637b9c4ff3752acee2278a918d949d",url:"./numa/index.html"},{revision:"1f9373c5bfe28ee21f64fe594d80cab8",url:"./page/2/index.html"},{revision:"a98235e30ed710e3c48523a6d49d1741",url:"./ruler-method/index.html"},{revision:"4464efcb8766d9e8bd471ea0abacee97",url:"./self/consola.woff2"},{revision:"9dde10b888afb8149fd692c8cfbcaf07",url:"./self/consolas.css"},{revision:"7448d26f6c8fca4998d25ff31ab9606e",url:"./self/optimize.css"},{revision:"7be51c01927de35a3cd074faba9ba39e",url:"./self/tomorrow.css"},{revision:"27fa40653a5a45165db68324084b4ee8",url:"./she-jiang/index.html"},{revision:"d427fa56d2cb75f3fe0b8c108771465f",url:"./snow/index.html"},{revision:"67504f31b5772ad362fe4a36cc3d05bf",url:"./star/index.html"},{revision:"31b989cdf348f1ba01a76ae2c4167208",url:"./still-using-stl-sort/index.html"},{revision:"215f6ad2f44ccfa8547deee1ff415032",url:"./tags/DP/index.html"},{revision:"7c03a1757180e5aa3c718ec6aa6b7fa6",url:"./tags/GitHub/index.html"},{revision:"859637f5934aa3f178a413ad6074f361",url:"./tags/Hexo/index.html"},{revision:"d06ab70195a717cac5d9b3742c506bd9",url:"./tags/index.html"},{revision:"2b3f84a0d3cd7ba7d1a3dc01e5747701",url:"./tags/PB-DS/index.html"},{revision:"c8b30cb57b451e072ca8818d22a72a89",url:"./tags/SSH/index.html"},{revision:"d2dc313b047daf2c202678613a6a65c7",url:"./tags/STL/index.html"},{revision:"ec39fa69bde8494fa783352c1767483c",url:"./tags/二分图/index.html"},{revision:"c0b0ff4d13a6b19514f3f2bfa966788c",url:"./tags/最小割/index.html"},{revision:"7495792d1b0da42f57814ba74a275416",url:"./tags/最短路/index.html"},{revision:"8c8c54707096ebc4e98167b962946e37",url:"./tags/匹配/index.html"},{revision:"9c92c121a0859122d94c2a38014aecf4",url:"./tags/单调队列/index.html"},{revision:"226f60f17d6118ee5baba6ce834c0e3f",url:"./tags/博客/index.html"},{revision:"4d500d280c749445748b24534b3569c1",url:"./tags/双指针/index.html"},{revision:"a73634bfb1ab0be88d2aecd844812e35",url:"./tags/图论/index.html"},{revision:"52ee0d551ae88f34ed297283a19eae80",url:"./tags/小说/index.html"},{revision:"e9777f2c176ef9c7305a7d4f2afa1886",url:"./tags/尺取法/index.html"},{revision:"ff57c07d809ab832199beb5982bf501c",url:"./tags/平衡树/index.html"},{revision:"0d74b85627babf9fc3adf68cd9e36ce3",url:"./tags/扫描线/index.html"},{revision:"e9b6a9095ecaf518e9bd0ffa31a60571",url:"./tags/排序/index.html"},{revision:"08ba371672f28127a2df68731172c513",url:"./tags/数据结构/index.html"},{revision:"bfa2093178b241ae4ac76613d5356389",url:"./tags/树/index.html"},{revision:"23127ca55b8171a4b749c233333f2351",url:"./tags/树状数组/index.html"},{revision:"0b6664357470ee6fa52594a7b7911659",url:"./tags/码风/index.html"},{revision:"b91a70b88ceb5700654acaeb257d2a61",url:"./tags/算法/index.html"},{revision:"d6384392605195b408007222eb09ae73",url:"./tags/算法/page/2/index.html"},{revision:"bc8eba8861561b558cb750641a9a9240",url:"./tags/线段树/index.html"},{revision:"1ed490c58dff3b3bc23073ee0de9b245",url:"./tags/网络流/index.html"},{revision:"c82a4f4b4c3286822d6d629de24d030f",url:"./tags/背包/index.html"},{revision:"a9b45057185eebcc7a86c01a5f7a61e0",url:"./tags/记忆化搜索/index.html"},{revision:"7027b60a08c48a58f241821fe719946e",url:"./tags/部署/index.html"},{revision:"6f8d17fa4ae1ff760978b8481cc88f2e",url:"./tags/随笔/index.html"},{revision:"3220992200f3747a95b48c4397c8b181",url:"./terminal-extra/index.html"},{revision:"1f42aab34c7e2ce5984178ae0ef309fd",url:"./tree-seg-scan/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();