"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Serok's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"85937fb7fd6b45454174d0ff71bf40ac",url:"./404.html"},{revision:"cc34650bd2298aa8436e9fb89d39c258",url:"./about-codestyle/index.html"},{revision:"fdf725eff92786596f4259d3c8ba25ad",url:"./about-splay/index.html"},{revision:"a459d3b9591c8fec51b80b074faf8d45",url:"./about/index.html"},{revision:"523ce736df300df109caafa760103f82",url:"./archives/2018/04/index.html"},{revision:"aeb5ebf3123b1782c97c8896225770db",url:"./archives/2018/index.html"},{revision:"a6f71a88439a174d94e5573a4db85069",url:"./archives/2019/02/index.html"},{revision:"50911c1326be858a31225927b637b8bb",url:"./archives/2019/07/index.html"},{revision:"8b7b05088d01b66f0280641bf4620991",url:"./archives/2019/11/index.html"},{revision:"d3e4a8aac0cfc90f2eb75d53c74d2df9",url:"./archives/2019/index.html"},{revision:"e9c79ee5255fb3706433a11bd0a5dab7",url:"./archives/2020/01/index.html"},{revision:"a3146a1f23a9f9a7ddb60890e3e18136",url:"./archives/2020/02/index.html"},{revision:"93873e710be512dd2fb12a0d4d6dd683",url:"./archives/2020/04/index.html"},{revision:"ff5e4fb2d93802734d0e6b72217a16c6",url:"./archives/2020/05/index.html"},{revision:"20c25fc9e87cd837f3f34a56e254f108",url:"./archives/2020/06/index.html"},{revision:"1f3bae9472b60076ce1da668842dbe4d",url:"./archives/2020/07/index.html"},{revision:"a9c22ac8ac8334dce55a782b8dcf3743",url:"./archives/2020/08/index.html"},{revision:"add8d36bb06334a6070e27e3a17bad9b",url:"./archives/2020/index.html"},{revision:"8a79c01376c287e3efdbf07352e07e9e",url:"./archives/2020/page/2/index.html"},{revision:"95632221cbd730e4e5292b5db5c6de6b",url:"./archives/2020/page/3/index.html"},{revision:"a33ee02098d89e26687561d86d3a2151",url:"./archives/index.html"},{revision:"a54a328134f6cc590b0e669410c63570",url:"./archives/page/2/index.html"},{revision:"6f0b05558739d344a55b325abe24dd82",url:"./archives/page/3/index.html"},{revision:"e0b274da38c8be0867b9083809bdfac1",url:"./butterfly-aplayer/index.html"},{revision:"cdfc58c1bef6dbb26be0be1ba657197c",url:"./catchcat/index.html"},{revision:"90ea17e8b4b6fc7f1eff868d47d88d44",url:"./categories/Hexo/index.html"},{revision:"f5f9bd2f2055a78d485b86db353600b5",url:"./categories/index.html"},{revision:"459c18d870d9ec0f88550a64c3c81cab",url:"./categories/小说-随笔/index.html"},{revision:"270a75d4ef712cf55d955595135905d9",url:"./categories/小说-随笔/星/index.html"},{revision:"a01fee68c43539a50bb705536dc838a5",url:"./categories/小说-随笔/未来/index.html"},{revision:"de5e6deb8342da9e6eb46d35e494c0ec",url:"./categories/小说-随笔/陌上/index.html"},{revision:"e75d088206a5733d9e5073de8383e280",url:"./categories/算法/index.html"},{revision:"d3ce44c9314ae2a5c8301061d102c9b2",url:"./categories/算法/page/2/index.html"},{revision:"657e73e9d3229f4a447d4de20466de26",url:"./cf387d/index.html"},{revision:"f1ba9d2b4a77500c2ae067e658c078f2",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"eabc7a97b52cb288f2847e942d78af70",url:"./dp-knapsack/index.html"},{revision:"ad248b1ee7cd2a78523f937459c7afef",url:"./dp-noip-tg/index.html"},{revision:"506790cb0504041622f002a03f6e318c",url:"./friends/index.html"},{revision:"bfe82e43de1922cbef449c9902facec1",url:"./future/index.html"},{revision:"35a9762e63ad952d77046ecb2b8ffbc0",url:"./graph-theory/index.html"},{revision:"f4086170f6fbef95ea932a9ee590a773",url:"./hexo-gulp-pwa/index.html"},{revision:"c0f86ad2e168c841cbdc2ab01cb2badc",url:"./hexo-ssh-deploy/index.html"},{revision:"e5a1125b3db591aa97c67baa199ad955",url:"./hexo-vercel/index.html"},{revision:"7daf77e9832af64d53c0f7969a98087d",url:"./index.html"},{revision:"d95e6f39385c50c361e6383360ee3250",url:"./js/main.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"6bebed368a1bbcb630dd146cefb103b7",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"080fdfcacffc6828826484645140af50",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"5b26f58076202394a66cde8b885f3225",url:"./js/tw_cn.js"},{revision:"e57c4c90806ca839dfe2b70b3cc6b6b8",url:"./js/utils.js"},{revision:"901d9d7c117ad38e8435d88fe0628b69",url:"./lete/index.html"},{revision:"650b3cc8cbf2b13b0e1352d97cbe4869",url:"./manifest.json"},{revision:"544c4372f83802668a5c619721573d88",url:"./match-template/index.html"},{revision:"c33b4a0f3d291544b64197ceff665f0f",url:"./maximum-flow/index.html"},{revision:"23818a3b8482e6b74802eebffa54d732",url:"./messageboard/index.html"},{revision:"32bfb76892afa9f97f3aeb78ac40f9fd",url:"./minimum-cut/index.html"},{revision:"bbda66b58d0dcd24a633aa5fa57b8242",url:"./mo-shang/index.html"},{revision:"c507814faf8d74b975df2d5bfbf01ed0",url:"./monotonous-queue/index.html"},{revision:"ea277348e66f813b8ce587a8ad78d7cc",url:"./network-flow-deloop/index.html"},{revision:"ff1c1631fbe8ffccc3c2f946e58dfec2",url:"./network-flow-dijkstra/index.html"},{revision:"8327af64f61b89a21f46450aad459f76",url:"./network-flow-template/index.html"},{revision:"0e599d6eacf340f04df35e6a5a908369",url:"./numa/index.html"},{revision:"7ace82cb0f3f3e8866f856c35ea877ea",url:"./page/2/index.html"},{revision:"0640799dc46f71ced80e0bfc68ea931a",url:"./page/3/index.html"},{revision:"bf4cfb03700b7f0a84292473c2697bbf",url:"./ruler-method/index.html"},{revision:"4464efcb8766d9e8bd471ea0abacee97",url:"./self/consola.woff2"},{revision:"9dde10b888afb8149fd692c8cfbcaf07",url:"./self/consolas.css"},{revision:"b26ba949aa4c7e850d32fe8b47a43e35",url:"./self/optimize.css"},{revision:"eb41f508de2ab230ab78cda10aee7536",url:"./self/prismjs.css"},{revision:"468d8f7da94dba0f4d7409fa0fb7ebad",url:"./self/tomorrow.css"},{revision:"07f2ef43e0665e9f0e3a5fe0cf4dc443",url:"./she-jiang/index.html"},{revision:"466c20cf74e5cff62aa78671b2b34c8b",url:"./snow/index.html"},{revision:"9776b734da3128d9b95c24abc01c057a",url:"./star/index.html"},{revision:"f6e2cd9d0f022294de047375a1403362",url:"./still-using-stl-sort/index.html"},{revision:"5370e91e88b48d2b59c938ae73c96e24",url:"./stl-set/index.html"},{revision:"e82ee2b2e4614e27027fe4cecd625797",url:"./tags/Aplayer/index.html"},{revision:"29ffdc6fc86797c82aa7bd4af122ea51",url:"./tags/Butterfly/index.html"},{revision:"bef2f8a665b5e7646c21055d576b416d",url:"./tags/DFS/index.html"},{revision:"653c85b204bab98a6351dd90c1d7df07",url:"./tags/DP/index.html"},{revision:"7406c150d231b8b687a15201ce8605ab",url:"./tags/GitHub/index.html"},{revision:"fb43ace63e9c58e6cf3d331fcd6ab294",url:"./tags/Gulp/index.html"},{revision:"145ebfb68806e371b2fb631b2ee2cc4a",url:"./tags/Hexo/index.html"},{revision:"a0b3c0879b40aae929db51d8c21cc395",url:"./tags/index.html"},{revision:"4a48df687aff1d60c4c3a1ef32ef2608",url:"./tags/PB-DS/index.html"},{revision:"955b18d0c175ce4f6d5232277a03ae88",url:"./tags/PWA/index.html"},{revision:"07fcb4c4abcac3d5b4fedf8663c47695",url:"./tags/SSH/index.html"},{revision:"f1e3fbac3c35059a7ec3ca6b007745db",url:"./tags/STL/index.html"},{revision:"12de24a90e68c62205ec8f37131b7d86",url:"./tags/Vercel/index.html"},{revision:"d325fe09eeb1c116036ec7bc0ed8cc5f",url:"./tags/二分图/index.html"},{revision:"36d58b58846578659fd37bec239e990c",url:"./tags/最小割/index.html"},{revision:"c961b17fdd7096c346cff0c71257dca6",url:"./tags/最短路/index.html"},{revision:"e49a7de46d8282edd872d14a4b3d06cb",url:"./tags/匹配/index.html"},{revision:"094d87fb4c52992b6c2fbe5367b5be65",url:"./tags/单调队列/index.html"},{revision:"778de182a55eb94daf8ddf1d225bb86f",url:"./tags/博客/index.html"},{revision:"df61d72b0acea1302a86633f11e5dd4c",url:"./tags/双指针/index.html"},{revision:"22dcf44c87ec9fdf073196ece5c35a17",url:"./tags/图论/index.html"},{revision:"7e7a31a86b079dd18114a8139aacb142",url:"./tags/小说/index.html"},{revision:"d1df555b26f9db28757f0c78dd5d7f87",url:"./tags/尺取法/index.html"},{revision:"f9853b11d9ab58feb421a7531cb2ea6b",url:"./tags/平衡树/index.html"},{revision:"93f3bff4b87911cd00f4a2eb623735e6",url:"./tags/应用程序/index.html"},{revision:"496b38f31a884c0bf7a081f69b75ffe9",url:"./tags/排序/index.html"},{revision:"ae1fb3d855385a0402254645d43645af",url:"./tags/数据结构/index.html"},{revision:"edd5aa3b0d01081c7541a1601070e944",url:"./tags/树/index.html"},{revision:"647c48ef9182858ee4d21fc12c9c8a4c",url:"./tags/码风/index.html"},{revision:"f30e83a1fff1332ca72ab14d4483c772",url:"./tags/算法/index.html"},{revision:"2da1a9260b3b4558c8ad9f4c30f23a99",url:"./tags/算法/page/2/index.html"},{revision:"d989093732f13881cf1fc9c390f05f31",url:"./tags/网络流/index.html"},{revision:"005bdb38a98d3f7e47c3b58e26900181",url:"./tags/背包/index.html"},{revision:"532ccce6b88d0c3eaf505639b4be5cb3",url:"./tags/记忆化搜索/index.html"},{revision:"0ee6a9850e0a6116fdae552c940f41e9",url:"./tags/部署/index.html"},{revision:"edabbc278cb5f53cc73c9e57614ad52f",url:"./tags/随笔/index.html"},{revision:"68f4b8b04977d84a95e24c9ed9f7a7eb",url:"./terminal-extra/index.html"},{revision:"1bce5142d0ca1ceeb332215fd0d54d7d",url:"./valine/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.dogedoge\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/rmt\.dogedoge\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();