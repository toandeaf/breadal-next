if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let a={};const r=e=>n(e,c),o={module:{uri:c},exports:a,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(t(...e),a)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WG-1cPl0pWwJUQ2BQFiOV/_buildManifest.js",revision:"WG-1cPl0pWwJUQ2BQFiOV"},{url:"/_next/static/WG-1cPl0pWwJUQ2BQFiOV/_middlewareManifest.js",revision:"WG-1cPl0pWwJUQ2BQFiOV"},{url:"/_next/static/WG-1cPl0pWwJUQ2BQFiOV/_ssgManifest.js",revision:"WG-1cPl0pWwJUQ2BQFiOV"},{url:"/_next/static/chunks/framework-6e4ba497ae0c8a3f.js",revision:"WG-1cPl0pWwJUQ2BQFiOV"},{url:"/_next/static/chunks/main-d52644f8e98a2f80.js",revision:"WG-1cPl0pWwJUQ2BQFiOV"},{url:"/_next/static/chunks/pages/_app-c58e8964bc18822f.js",revision:"WG-1cPl0pWwJUQ2BQFiOV"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"WG-1cPl0pWwJUQ2BQFiOV"},{url:"/_next/static/chunks/pages/contact-51bbe1e135eb007d.js",revision:"WG-1cPl0pWwJUQ2BQFiOV"},{url:"/_next/static/chunks/pages/deals-6b5e7464b6742f48.js",revision:"WG-1cPl0pWwJUQ2BQFiOV"},{url:"/_next/static/chunks/pages/index-262c5473d52a9c86.js",revision:"WG-1cPl0pWwJUQ2BQFiOV"},{url:"/_next/static/chunks/pages/newQuote-d32ceb20b9926a0b.js",revision:"WG-1cPl0pWwJUQ2BQFiOV"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"WG-1cPl0pWwJUQ2BQFiOV"},{url:"/_next/static/chunks/webpack-f8fe1f0eb2299c5d.js",revision:"WG-1cPl0pWwJUQ2BQFiOV"},{url:"/_next/static/css/b572e0673a581490.css",revision:"WG-1cPl0pWwJUQ2BQFiOV"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/manifest.json",revision:"cb5d82113725c6b6ec44b350804c4717"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
