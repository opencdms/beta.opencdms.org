"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[7473],{3050:function(e,t,l){l.d(t,{Z:function(){return d}});var a=l(7327),i=l(3968),n=(l(2407),l(6709));class d extends i.Hn{static fields(){return{id:this.string(""),media_type_id:this.string(""),media_type:this.belongsTo(n.Z,"media_type_id"),description:this.string(""),created:this.string(""),creator:this.string(""),rights:this.number(null),source:this.string(""),data:this.attr(null)}}}(0,a.Z)(d,"entity","media")},7473:function(e,t,l){l.r(t),l.d(t,{default:function(){return C}});var a=l(3396);function i(e,t,l,i,n,d){const u=(0,a.up)("Media",!0);return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(u)])}function n(e,t,l,i,n,d){const u=(0,a.up)("v-card-title"),m=(0,a.up)("v-text-field"),r=(0,a.up)("v-card-item"),s=(0,a.up)("v-select"),o=(0,a.up)("VueDatePicker"),p=(0,a.up)("v-form"),c=(0,a.up)("v-btn"),h=(0,a.up)("v-card-text"),V=(0,a.up)("v-card");return(0,a.wg)(),(0,a.j4)(V,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Create new 'Media'")])),_:1}),(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"id",modelValue:e.media.id,"onUpdate:modelValue":t[0]||(t[0]=t=>e.media.id=t),hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{items:e.mediaTypeOptions,"item-title":"name","item-value":"id",label:"media_type",modelValue:e.media.media_type,"onUpdate:modelValue":t[1]||(t[1]=t=>e.media.media_type=t),hint:e.mediaTypeOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"description",modelValue:e.media.description,"onUpdate:modelValue":t[2]||(t[2]=t=>e.media.description=t),hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(o,{label:"created",modelValue:e.media.created,"onUpdate:modelValue":t[3]||(t[3]=t=>e.media.created=t),hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"creator",modelValue:e.media.creator,"onUpdate:modelValue":t[4]||(t[4]=t=>e.media.creator=t),hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"rights",modelValue:e.media.rights,"onUpdate:modelValue":t[5]||(t[5]=t=>e.media.rights=t),type:"number",hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"source",modelValue:e.media.source,"onUpdate:modelValue":t[6]||(t[6]=t=>e.media.source=t),hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"data",modelValue:e.media.data,"onUpdate:modelValue":t[7]||(t[7]=t=>e.media.data=t),hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(c,{onClick:e.createMedia},{default:(0,a.w5)((()=>[(0,a.Uk)("Create Media")])),_:1},8,["onClick"])])),_:1})])),_:1})}l(774);var d=l(4870),u=l(3238),m=l(6572),r=l(1888),s=l(1209),o=l(2900),p=l(240),c=l(6422),h=l(870),V=l(3968),_=l(1995),f=l(5708),v=l(6709),W=l(3050),w=(0,a.aZ)({name:"MediaForm",props:{},methods:{parseLinks(e){let t;return t=e&&e.length>0?JSON.stringify(e):"",t}},components:{VCard:u._,VCardTitle:m.E,VCardText:r.Z,VCardItem:s._,VTextField:o.hw,VSelect:p.r,VForm:c.O,VBtn:h.T,VueDatePicker:f.Z,LinkForm:_.Z},setup(){const e=(0,d.iH)([]),t=e=>{console.log("updating links"),m.value.links=e},l=(0,V.lL)(v.Z),i=(0,a.Fl)((()=>l.all())),n=(0,a.Fl)((()=>null!==m.value.media_type?"description"in m.value.media_type?m.value.media_type.description:"":"Select media_type")),u=(0,V.lL)(W.Z),m=(0,d.iH)(u.make()),r=async()=>{let e={};Object.assign(e,m.value),await u.save(e),s()},s=()=>{Object.assign(m.value,u.make())};return{media:m,createMedia:r,resetMedia:s,links:e,updateLinks:t,mediaTypeOptions:i,mediaTypeOptionsHint:n}}}),g=l(89);const k=(0,g.Z)(w,[["render",n]]);var y=k,b={name:"mediaForm",components:{Media:y}};const Z=(0,g.Z)(b,[["render",i]]);var C=Z}}]);
//# sourceMappingURL=7473.21f1a41b.js.map