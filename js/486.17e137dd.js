"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[486,236],{3486:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(3396);function l(e,t,n,l,r,i){const d=(0,a.up)("sensor-list",!0);return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(d,{title:"sensor-list",content:"This page is under construction",description:"list based view of sensors"})])}var r=n(7139);function i(e,t,n,l,i,d){const s=(0,a.up)("v-card-title"),p=(0,a.up)("v-card-text"),o=(0,a.up)("v-card");return(0,a.wg)(),(0,a.j4)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.title),1)])),_:1}),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.content),1)])),_:1}),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.description),1)])),_:1})])),_:1})}var d=n(3238),s=n(6572),p=n(1888),o=(0,a.aZ)({name:"sensor-list",props:{title:{type:String,required:!0},content:{type:String,required:!0},description:{type:String,required:!0}},components:{VCard:d._,VCardTitle:s.E,VCardText:p.Z},methods:{},setup(){(0,a.wF)((()=>{})),(0,a.bv)((()=>{})),(0,a.Xn)((()=>{})),(0,a.ic)((()=>{})),(0,a.Jd)((()=>{})),(0,a.Ah)((()=>{})),(0,a.d1)((()=>{}))}}),u=n(89);const c=(0,u.Z)(o,[["render",i]]);var v=c,m={name:"MyView",components:{SensorList:v}};const f=(0,u.Z)(m,[["render",l]]);var g=f},3238:function(e,t,n){n.d(t,{_:function(){return w}});var a=n(3396),l=n(8434),r=n(320),i=n(9888);const d=(0,r.aZ)({name:"VCardActions",setup(e,t){let{slots:n}=t;return(0,l.AF)({VBtn:{variant:"text"}}),(0,i.L)((()=>(0,a.Wm)("div",{class:"v-card-actions"},[n.default?.()]))),{}}});var s=n(6596),p=n(1888),o=n(836),u=n(8694),c=n(3824),v=n(5221),m=n(1617),f=n(6791),g=n(2718),b=n(9694),y=n(4544),k=n(2465),W=n(5180),I=n(489),A=n(4231),C=n(6183),_=n(1138),S=n(7041);const w=(0,r.ev)()({name:"VCard",directives:{Ripple:c.H},props:{appendAvatar:String,appendIcon:m.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m.lE,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...(0,S.x$)(),...(0,g.m)(),...(0,b.f)(),...(0,y.x)(),...(0,k.c)(),...(0,f.fF)(),...(0,W.y)(),...(0,I.F)(),...(0,A.I)(),...(0,C.GN)(),...(0,_.Q)(),...(0,v.bk)({variant:"elevated"})},setup(e,t){let{attrs:n,slots:l}=t;const{themeClasses:r}=(0,S.ER)(e),{borderClasses:c}=(0,g.P)(e),{colorClasses:m,colorStyles:_,variantClasses:w}=(0,v.c1)(e),{densityClasses:V}=(0,b.t)(e),{dimensionStyles:x}=(0,y.$)(e),{elevationClasses:h}=(0,k.Y)(e),{loaderClasses:E}=(0,f.U2)(e),{locationStyles:B}=(0,W.T)(e),{positionClasses:Z}=(0,I.K)(e),{roundedClasses:z}=(0,A.b)(e),F=(0,C.nB)(e,n),L=(0,a.Fl)((()=>!1!==e.link&&F.isLink.value)),U=(0,a.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||F.isClickable.value)));return(0,i.L)((()=>{const t=L.value?"a":e.tag,n=!(!l.title&&!e.title),i=!(!l.subtitle&&!e.subtitle),g=n||i,b=!!(l.append||e.appendAvatar||e.appendIcon),y=!!(l.prepend||e.prependAvatar||e.prependIcon),k=!(!l.image&&!e.image),W=g||y||b,I=!(!l.text&&!e.text);return(0,a.wy)((0,a.Wm)(t,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":U.value},r.value,c.value,m.value,V.value,h.value,E.value,Z.value,z.value,w.value],style:[_.value,x.value,B.value],href:F.href.value,onClick:U.value&&F.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[k&&(0,a.Wm)(o.z,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[(0,a.Wm)("div",{class:"v-card__image"},[l.image?.()??(0,a.Wm)(u.f,null,null)])]}),(0,a.Wm)(f.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:l.loader}),W&&(0,a.Wm)(s._,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:l.item,prepend:l.prepend,title:l.title,subtitle:l.subtitle,append:l.append}),I&&(0,a.Wm)(p.Z,{key:"text"},{default:()=>[l.text?.()??e.text]}),l.default?.(),l.actions&&(0,a.Wm)(d,null,{default:l.actions}),(0,v.Ux)(U.value,"v-card")]}),[[(0,a.Q2)("ripple"),U.value&&e.ripple]])})),{}}})},6596:function(e,t,n){n.d(t,{_:function(){return v}});var a=n(3396),l=n(652),r=n(1114);const i=(0,r.J)("v-card-subtitle");var d=n(6572),s=n(836),p=n(1617),o=n(9694),u=n(320),c=n(9888);const v=(0,u.ev)()({name:"VCardItem",props:{appendAvatar:String,appendIcon:p.lE,prependAvatar:String,prependIcon:p.lE,subtitle:String,title:String,...(0,o.f)()},setup(e,t){let{slots:n}=t;return(0,c.L)((()=>{const t=!!(e.prependAvatar||e.prependIcon||n.prepend),r=!!(e.appendAvatar||e.appendIcon||n.append),p=!(!e.title&&!n.title),o=!(!e.subtitle&&!n.subtitle);return(0,a.Wm)("div",{class:"v-card-item"},[t&&(0,a.Wm)(s.z,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[(0,a.Wm)("div",{class:"v-card-item__prepend"},[n.prepend?.()??(0,a.Wm)(l.V,null,null)])]}),(0,a.Wm)("div",{class:"v-card-item__content"},[p&&(0,a.Wm)(d.E,{key:"title"},{default:()=>[n.title?.()??e.title]}),o&&(0,a.Wm)(i,{key:"subtitle"},{default:()=>[n.subtitle?.()??e.subtitle]}),n.default?.()]),r&&(0,a.Wm)(s.z,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[(0,a.Wm)("div",{class:"v-card-item__append"},[n.append?.()??(0,a.Wm)(l.V,null,null)])]})])})),{}}})},1888:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(1114);const l=(0,a.J)("v-card-text")},6572:function(e,t,n){n.d(t,{E:function(){return l}});var a=n(1114);const l=(0,a.J)("v-card-title")}}]);
//# sourceMappingURL=486.17e137dd.js.map