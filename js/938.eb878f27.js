"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[938,236],{938:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(3396);function l(e,t,n,l,d,i){const r=(0,a.up)("deployment-list",!0);return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r,{title:"deployment-list",content:"This page is under construction",description:"list of deployed sensors"})])}var d=n(7139);function i(e,t,n,l,i,r){const s=(0,a.up)("v-card-title"),p=(0,a.up)("v-card-text"),o=(0,a.up)("v-card");return(0,a.wg)(),(0,a.j4)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,d.zw)(e.title),1)])),_:1}),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,d.zw)(e.content),1)])),_:1}),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,d.zw)(e.description),1)])),_:1})])),_:1})}var r=n(5661),s=n(6572),p=n(1888),o=(0,a.aZ)({name:"deployment-list",props:{title:{type:String,required:!0},content:{type:String,required:!0},description:{type:String,required:!0}},components:{VCard:r._,VCardTitle:s.E,VCardText:p.Z},methods:{},setup(){(0,a.wF)((()=>{})),(0,a.bv)((()=>{})),(0,a.Xn)((()=>{})),(0,a.ic)((()=>{})),(0,a.Jd)((()=>{})),(0,a.Ah)((()=>{})),(0,a.d1)((()=>{}))}}),u=n(89);const c=(0,u.Z)(o,[["render",i]]);var v=c,m={name:"MyView",components:{DeploymentList:v}};const f=(0,u.Z)(m,[["render",l]]);var y=f},5661:function(e,t,n){n.d(t,{_:function(){return E}});var a=n(3396),l=n(8434),d=n(320),i=n(9888);const r=(0,d.aZ)({name:"VCardActions",setup(e,t){let{slots:n}=t;return(0,l.AF)({VBtn:{variant:"text"}}),(0,i.L)((()=>(0,a.Wm)("div",{class:"v-card-actions"},[n.default?.()]))),{}}});var s=n(652),p=n(1114);const o=(0,p.J)("v-card-subtitle");var u=n(6572),c=n(836),v=n(1617),m=n(9694);const f=(0,d.ev)()({name:"VCardItem",props:{appendAvatar:String,appendIcon:v.lE,prependAvatar:String,prependIcon:v.lE,subtitle:String,title:String,...(0,m.f)()},setup(e,t){let{slots:n}=t;return(0,i.L)((()=>{const t=!!(e.prependAvatar||e.prependIcon||n.prepend),l=!!(e.appendAvatar||e.appendIcon||n.append),d=!(!e.title&&!n.title),i=!(!e.subtitle&&!n.subtitle);return(0,a.Wm)("div",{class:"v-card-item"},[t&&(0,a.Wm)(c.z,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[(0,a.Wm)("div",{class:"v-card-item__prepend"},[n.prepend?.()??(0,a.Wm)(s.V,null,null)])]}),(0,a.Wm)("div",{class:"v-card-item__content"},[d&&(0,a.Wm)(u.E,{key:"title"},{default:()=>[n.title?.()??e.title]}),i&&(0,a.Wm)(o,{key:"subtitle"},{default:()=>[n.subtitle?.()??e.subtitle]}),n.default?.()]),l&&(0,a.Wm)(c.z,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[(0,a.Wm)("div",{class:"v-card-item__append"},[n.append?.()??(0,a.Wm)(s.V,null,null)])]})])})),{}}});var y=n(1888),g=n(8694),b=n(3824),k=n(5221),W=n(6791),I=n(2718),A=n(4544),C=n(2465),S=n(5180),_=n(489),V=n(4231),w=n(6183),x=n(1138),h=n(7041);const E=(0,d.ev)()({name:"VCard",directives:{Ripple:b.H},props:{appendAvatar:String,appendIcon:v.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:v.lE,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...(0,h.x$)(),...(0,I.m)(),...(0,m.f)(),...(0,A.x)(),...(0,C.c)(),...(0,W.fF)(),...(0,S.y)(),...(0,_.F)(),...(0,V.I)(),...(0,w.GN)(),...(0,x.Q)(),...(0,k.bk)({variant:"elevated"})},setup(e,t){let{attrs:n,slots:l}=t;const{themeClasses:d}=(0,h.ER)(e),{borderClasses:s}=(0,I.P)(e),{colorClasses:p,colorStyles:o,variantClasses:u}=(0,k.c1)(e),{densityClasses:v}=(0,m.t)(e),{dimensionStyles:b}=(0,A.$)(e),{elevationClasses:x}=(0,C.Y)(e),{loaderClasses:E}=(0,W.U2)(e),{locationStyles:B}=(0,S.T)(e),{positionClasses:Z}=(0,_.K)(e),{roundedClasses:z}=(0,V.b)(e),F=(0,w.nB)(e,n),L=(0,a.Fl)((()=>!1!==e.link&&F.isLink.value)),U=(0,a.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||F.isClickable.value)));return(0,i.L)((()=>{const t=L.value?"a":e.tag,n=!(!l.title&&!e.title),i=!(!l.subtitle&&!e.subtitle),m=n||i,I=!!(l.append||e.appendAvatar||e.appendIcon),A=!!(l.prepend||e.prependAvatar||e.prependIcon),C=!(!l.image&&!e.image),S=m||A||I,_=!(!l.text&&!e.text);return(0,a.wy)((0,a.Wm)(t,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":U.value},d.value,s.value,p.value,v.value,x.value,E.value,Z.value,z.value,u.value],style:[o.value,b.value,B.value],href:F.href.value,onClick:U.value&&F.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[C&&(0,a.Wm)(c.z,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[(0,a.Wm)("div",{class:"v-card__image"},[l.image?.()??(0,a.Wm)(g.f,null,null)])]}),(0,a.Wm)(W.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:l.loader}),S&&(0,a.Wm)(f,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:l.item,prepend:l.prepend,title:l.title,subtitle:l.subtitle,append:l.append}),_&&(0,a.Wm)(y.Z,{key:"text"},{default:()=>[l.text?.()??e.text]}),l.default?.(),l.actions&&(0,a.Wm)(r,null,{default:l.actions}),(0,k.Ux)(U.value,"v-card")]}),[[(0,a.Q2)("ripple"),U.value&&e.ripple]])})),{}}})},1888:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(1114);const l=(0,a.J)("v-card-text")},6572:function(e,t,n){n.d(t,{E:function(){return l}});var a=n(1114);const l=(0,a.J)("v-card-title")}}]);
//# sourceMappingURL=938.eb878f27.js.map