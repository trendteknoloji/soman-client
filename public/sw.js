if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const r=e=>t(e,n),u={module:{uri:n},exports:c,require:r};s[n]=Promise.all(a.map((e=>u[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"6af2499306eb2c6508c3683a614ade61"},{url:"/_next/static/chunks/1114-96a4a7ff113b4dda.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/2093-46f2327a3fb9a08e.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/231-1b49b230dbddc6cb.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/2488-5a5e8d05b662ee1b.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/370-7b9aaf61f7aa643f.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/4584-470bdea32a9e1895.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/4868-904cdb947fe72a67.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/570-5872a906c38bf4d2.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/7023-9d97733afc0513d4.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/7297-f336ba7517bdf9ca.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/748-7f4caa7d78aba9fd.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/8090-d307c6f3abc8401b.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/9957-aeac752ca8275d50.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/adminUsers/%5Bid%5D/page-dabb014e0b162657.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/adminUsers/addnew/page-c3d889908c9955d4.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/adminUsers/layout-b468392442ddb25c.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/adminUsers/page-4360a5c24a27d8d6.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/home/page-7e16e2de3043ac03.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/layout-2e013d4ac578ea24.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/me/edit/layout-5bac4fdcb5443fba.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/me/edit/page-ccdb1e6cb54bccb4.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/me/layout-58caea0b65ca3d0c.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/me/page-cd5d4cce1e6a80c0.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/members/%5Bid%5D/connector/layout-3d6f44e3e14acf80.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/members/%5Bid%5D/connector/page-dcfea0cec68c70ff.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/members/%5Bid%5D/page-711ae6a77f71b67c.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/members/addnew/page-6e737f4a5187d210.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/members/layout-ef39259bef148b07.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/members/page-9abcfc897e42e9e0.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/page-7d979cbeefe42981.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/reports/layout-b50e97249286c872.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/reports/page-5a1b903518c84180.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/settings/layout-cc99a47eb9a59460.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/(authenticated)/settings/page-cf40864dd9edca63.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/_not-found/page-f9613b65ebf313a0.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/auth/layout-6081a40b58f42cae.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/auth/login/checkEmail/page-e890f29ecfb8e89a.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/auth/login/layout-3f3d73bb526e0be2.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/auth/login/page-d6e38025325f9689.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/auth/magicLink/page-578484b084fa109e.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/auth/register/layout-365463e3437903d7.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/auth/register/page-26927ff2da88e27f.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/auth/register/verify/layout-44377368caa7890f.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/auth/register/verify/page-60d1aac2638bd687.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/layout-ea631c19d16ca732.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/app/not-found-06fe6775384464a1.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/fd9d1056-3fe631acf73782ec.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/framework-a63c59c368572696.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/main-7d86dbc5d3d180ab.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/main-app-f3fa55884725fc0d.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/pages/_app-00b74eae5e8dab51.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/pages/_error-c72a1f77a3c0be1b.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-e3774f25309cbad3.js",revision:"zemWFKCDklYG-sJb_WmCH"},{url:"/_next/static/css/3b254b9c6374f20f.css",revision:"3b254b9c6374f20f"},{url:"/_next/static/css/c0b88121725f3145.css",revision:"c0b88121725f3145"},{url:"/_next/static/css/ce4e029b326b8207.css",revision:"ce4e029b326b8207"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/fa-brands-400.13428122.ttf",revision:"13428122"},{url:"/_next/static/media/fa-brands-400.60e5c9d3.woff2",revision:"60e5c9d3"},{url:"/_next/static/media/fa-regular-400.6f7d0aec.woff2",revision:"6f7d0aec"},{url:"/_next/static/media/fa-regular-400.d151c40a.ttf",revision:"d151c40a"},{url:"/_next/static/media/fa-solid-900.bd6c2137.ttf",revision:"bd6c2137"},{url:"/_next/static/media/fa-solid-900.cece584e.woff2",revision:"cece584e"},{url:"/_next/static/media/fa-v4compatibility.9b501f80.ttf",revision:"9b501f80"},{url:"/_next/static/media/fa-v4compatibility.e43d1602.woff2",revision:"e43d1602"},{url:"/_next/static/zemWFKCDklYG-sJb_WmCH/_buildManifest.js",revision:"b222cbf4d8e1f47e27a8925222733e53"},{url:"/_next/static/zemWFKCDklYG-sJb_WmCH/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/img/avatar-place-holder.png",revision:"6ed8eb465ed764659f7c19e246633a75"},{url:"/img/icon.png",revision:"9a1f9d915e1bdd42fc6b164871b04185"},{url:"/img/screenshot01.jpg",revision:"256f0f442d2d2c4aceb377ada2367036"},{url:"/manifest.json",revision:"4bd5ccf2874657674852711394c2bd11"},{url:"/placeholder-user.jpg",revision:"7ee6562646feae6d6d77e2c72e204591"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));