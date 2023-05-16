"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[787],{440:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var l=n(3396);function i(e,t,n,i,r,o){const s=(0,l.up)("deployment-list",!0);return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(s,{title:"deployment-list",content:"This page is under construction",description:"list of deployed sensors"})])}var r=n(7139);const o=["href"];function s(e,t,n,i,s,a){const c=(0,l.up)("v-card-title"),u=(0,l.up)("VTextField"),d=(0,l.up)("VDataTable"),f=(0,l.up)("v-card-text"),p=(0,l.up)("v-card");return(0,l.wg)(),(0,l.j4)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Stations")])),_:1}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{style:{width:"400px"},modelValue:e.search,"onUpdate:modelValue":t[0]||(t[0]=t=>e.search=t),"prepend-icon":"mdi-text-search",label:"search","single-line":"","hide-details":""},null,8,["modelValue"]),(0,l.Wm)(d,{headers:e.headers,items:e.items,search:e.search,dense:"",small:""},{"item.id":(0,l.w5)((({item:t})=>[(0,l._)("a",{href:e.getIDLink(t.raw.id)},(0,r.zw)(t.raw.id),9,o)])),"item.links":(0,l.w5)((({item:t})=>[(0,l.Uk)((0,r.zw)(e.parseLinks(t.raw.links)),1)])),_:1},8,["headers","items","search"])])),_:1})])),_:1})}var a=n(3238),c=n(6572),u=n(1888),d=n(4870),f=n(5557),p=n(2900),m=n(3968),y=(n(774),n(621)),h=(0,l.aZ)({name:"station-list",props:{connection:{type:String,default:"/data/deployments.psv"}},components:{VCard:a._,VCardTitle:c.E,VCardText:u.Z,VDataTable:f.y,VTextField:p.hw},methods:{parseLinks(e){let t;return t=e&&e.length>0?JSON.stringify(e):"",t},getIDLink(e){return"/#/deployment/"+e}},setup(e){const t=(0,d.iH)([]),n=((0,d.iH)([]),(0,d.iH)("")),i=(0,d.iH)([{key:"",order:"desc"}]),r=(0,d.iH)([]),o=((0,d.iH)([]),(0,m.lL)(y.Z));console.log((0,m.lL)(y.Z).piniaStore());return(0,l.bv)((async()=>{r.value=o.all(),t.value=Object.keys(r.value[0]).map((e=>({title:e,value:e,key:e,sortable:!0}))),console.log(o.all()),console.log(t),console.log(o.all())})),{headers:t,items:r,search:n,sortBy:i}}}),v=n(89);const g=(0,v.Z)(h,[["render",s]]);var w=g,k={name:"MyView",components:{DeploymentList:w}};const F=(0,v.Z)(k,[["render",i]]);var b=F},1819:function(e,t,n){n.d(t,{L0:function(){return u},Up:function(){return a}});n(7658);var l=n(3766),i=n(131),r=n(3396),o=n(4870);const s=(e,t,n)=>null==e||null==t?-1:e.toString().toLocaleLowerCase().indexOf(t.toString().toLocaleLowerCase()),a=(0,l.U)({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function c(e,t,n){const l=[],r=n?.default??s,o=!!n?.filterKeys&&(0,i.FT)(n.filterKeys),a=Object.keys(n?.customKeyFilter??{}).length;if(!e?.length)return l;e:for(let s=0;s<e.length;s++){const c=e[s],u={},d={};let f=-1;if(t&&!n?.noFilter){if("object"===typeof c){const e=o||Object.keys(c);for(const l of e){const e=(0,i.qF)(c,l,c),o=n?.customKeyFilter?.[l];if(f=o?o(e,t,c):r(e,t,c),-1!==f&&!1!==f)o?u[l]=f:d[l]=f;else if("every"===n?.filterMode)continue e}}else f=r(c,t,c),-1!==f&&!1!==f&&(d.title=f);const e=Object.keys(d).length,l=Object.keys(u).length;if(!e&&!l)continue;if("union"===n?.filterMode&&l!==a&&!e)continue;if("intersection"===n?.filterMode&&(l!==a||!e))continue}l.push({index:s,matches:{...d,...u}})}return l}function u(e,t,n,l){const i=(0,r.Fl)((()=>"string"!==typeof n?.value&&"number"!==typeof n?.value?"":String(n.value))),s=(0,o.iH)([]),a=(0,o.iH)(new Map);function u(e){return a.value.get(e.value)}return(0,r.m0)((()=>{s.value=[],a.value=new Map;const n=(0,o.SU)(t),r=c(n,i.value,{customKeyFilter:e.customKeyFilter,default:e.customFilter,filterKeys:(0,o.SU)(l?.filterKeys)??e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter});r.forEach((e=>{let{index:t,matches:l}=e;const i=n[t];s.value.push(i),a.value.set(i.value,l)}))})),{filteredItems:s,filteredMatches:a,getMatches:u}}}}]);
//# sourceMappingURL=787.6e85c282.js.map