"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[6457],{6457:function(e,a,l){l.r(a),l.d(a,{default:function(){return b}});var n=l(3396);function t(e,a,l,t,d,i){const u=(0,n.up)("MediaType",!0);return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(u)])}function d(e,a,l,t,d,i){const u=(0,n.up)("v-card-title"),p=(0,n.up)("v-text-field"),r=(0,n.up)("v-card-item"),m=(0,n.up)("v-form"),o=(0,n.up)("v-btn"),s=(0,n.up)("v-card-text"),c=(0,n.up)("v-card");return(0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Create new 'MediaType'")])),_:1}),(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{label:"id",modelValue:e.mediaType.id,"onUpdate:modelValue":a[0]||(a[0]=a=>e.mediaType.id=a),hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{label:"name",modelValue:e.mediaType.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.mediaType.name=a),hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{label:"description",modelValue:e.mediaType.description,"onUpdate:modelValue":a[2]||(a[2]=a=>e.mediaType.description=a),hint:"Type of media uploaded","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(o,{onClick:e.createMediaType},{default:(0,n.w5)((()=>[(0,n.Uk)("Create MediaType")])),_:1},8,["onClick"])])),_:1})])),_:1})}l(774);var i=l(4870),u=l(3238),p=l(6572),r=l(1888),m=l(1209),o=l(2900),s=l(240),c=l(6422),T=l(870),f=l(3968),y=l(1995),V=l(5708),k=l(6709),v=(0,n.aZ)({name:"MediaTypeForm",props:{},methods:{parseLinks(e){let a;return a=e&&e.length>0?JSON.stringify(e):"",a}},components:{VCard:u._,VCardTitle:p.E,VCardText:r.Z,VCardItem:m._,VTextField:o.hw,VSelect:s.r,VForm:c.O,VBtn:T.T,VueDatePicker:V.Z,LinkForm:y.Z},setup(){const e=(0,i.iH)([]),a=e=>{console.log("updating links"),n.value.links=e},l=(0,f.lL)(k.Z),n=(0,i.iH)(l.make()),t=async()=>{let e={};Object.assign(e,n.value),await l.save(e),d()},d=()=>{Object.assign(n.value,l.make())};return{mediaType:n,createMediaType:t,resetMediaType:d,links:e,updateLinks:a}}}),w=l(89);const h=(0,w.Z)(v,[["render",d]]);var _=h,W={name:"mediaTypeForm",components:{MediaType:_}};const C=(0,w.Z)(W,[["render",t]]);var b=C}}]);
//# sourceMappingURL=6457.f55146ad.js.map