if(!self.define){let s,l={};const n=(n,r)=>(n=new URL(n+".js",r).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(r,e)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(l[i])return;let u={};const o=s=>n(s,i),c={module:{uri:i},exports:u,require:o};l[i]=Promise.all(r.map((s=>c[s]||o(s)))).then((s=>(e(...s),u)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"opencdms-app"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/browserconfig.xml",revision:"a65aeab3c87bb868e33032c49b186280"},{url:"/css/115.daeae7ff.css",revision:null},{url:"/css/236.79325677.css",revision:null},{url:"/css/238.79325677.css",revision:null},{url:"/css/246.79325677.css",revision:null},{url:"/css/267.79325677.css",revision:null},{url:"/css/268.79325677.css",revision:null},{url:"/css/287.79325677.css",revision:null},{url:"/css/360.79325677.css",revision:null},{url:"/css/437.79325677.css",revision:null},{url:"/css/453.79325677.css",revision:null},{url:"/css/486.79325677.css",revision:null},{url:"/css/490.79325677.css",revision:null},{url:"/css/560.79325677.css",revision:null},{url:"/css/562.79325677.css",revision:null},{url:"/css/567.79325677.css",revision:null},{url:"/css/591.79325677.css",revision:null},{url:"/css/601.79325677.css",revision:null},{url:"/css/690.22fe0d5a.css",revision:null},{url:"/css/705.79325677.css",revision:null},{url:"/css/752.79325677.css",revision:null},{url:"/css/778.79325677.css",revision:null},{url:"/css/784.79325677.css",revision:null},{url:"/css/799.79325677.css",revision:null},{url:"/css/870.79325677.css",revision:null},{url:"/css/89.79325677.css",revision:null},{url:"/css/938.79325677.css",revision:null},{url:"/css/969.b08372a7.css",revision:null},{url:"/css/982.79325677.css",revision:null},{url:"/css/app.9c39186c.css",revision:null},{url:"/css/chunk-vendors.c377b23d.css",revision:null},{url:"/css/dashboard.f928842d.css",revision:null},{url:"/data/hosts.psv",revision:"011e65944905cbce9dd18ad2ce55ba34"},{url:"/fonts/MaterialIcons-Regular.14b0bb77.woff",revision:null},{url:"/fonts/MaterialIcons-Regular.a973ee76.eot",revision:null},{url:"/fonts/MaterialIcons-Regular.d1b99623.woff2",revision:null},{url:"/fonts/MaterialIcons-Regular.fa58bcb9.ttf",revision:null},{url:"/fonts/materialdesignicons-webfont.27a0fd11.woff2",revision:null},{url:"/fonts/materialdesignicons-webfont.2f788fed.woff",revision:null},{url:"/fonts/materialdesignicons-webfont.325befe2.ttf",revision:null},{url:"/fonts/materialdesignicons-webfont.7df0a622.eot",revision:null},{url:"/forms/host.yaml",revision:"74100cd947b463438aa8c0c98ba2fa8d"},{url:"/index.html",revision:"9b729062d8d1ee3bde649665067ed7c5"},{url:"/js/115.81f97ac2.js",revision:null},{url:"/js/238.999b0ac9.js",revision:null},{url:"/js/246.cae1fd8e.js",revision:null},{url:"/js/267.9baa6598.js",revision:null},{url:"/js/268.fb5a8a05.js",revision:null},{url:"/js/280.8ee1528e.js",revision:null},{url:"/js/287.36f77724.js",revision:null},{url:"/js/360.6e56c836.js",revision:null},{url:"/js/368.e420bd33.js",revision:null},{url:"/js/437.9e1d7a2e.js",revision:null},{url:"/js/453.7e3ec5f5.js",revision:null},{url:"/js/486.17e137dd.js",revision:null},{url:"/js/490.ec5fffe1.js",revision:null},{url:"/js/560.cd049a25.js",revision:null},{url:"/js/562.d9669c74.js",revision:null},{url:"/js/567.79773edd.js",revision:null},{url:"/js/591.7729888a.js",revision:null},{url:"/js/601.1b974e17.js",revision:null},{url:"/js/690.0ca1d58a.js",revision:null},{url:"/js/705.cb03695e.js",revision:null},{url:"/js/752.6b31ee71.js",revision:null},{url:"/js/778.dde2b239.js",revision:null},{url:"/js/784.4988c338.js",revision:null},{url:"/js/799.d5bb0033.js",revision:null},{url:"/js/870.ee15f287.js",revision:null},{url:"/js/89.7df4afc0.js",revision:null},{url:"/js/938.b650b0ec.js",revision:null},{url:"/js/969.445b84aa.js",revision:null},{url:"/js/982.fee6643d.js",revision:null},{url:"/js/app.d01bce42.js",revision:null},{url:"/js/chunk-vendors.63029c7f.js",revision:null},{url:"/js/dashboard.5344cce9.js",revision:null},{url:"/layers-2x.png",revision:"4f0283c6ce28e888000e978e537a6a56"},{url:"/layers.png",revision:"a6137456ed160d7606981aa57c559898"},{url:"/manifest.json",revision:"e2182979d6df8cf96b70b404a19ac876"},{url:"/marker-icon-2x.png",revision:"401d815dc206b8dc1b17cd0e37695975"},{url:"/marker-icon.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/marker-shadow.png",revision:"44a526eed258222515aa21eaffd14a96"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
