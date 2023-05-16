"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[6214],{2846:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7327),l=t(3968);t(2407);class i extends l.Hn{static fields(){return{id:this.string(""),name:this.string(""),position_name:this.string(""),organization:this.string(""),logo:this.attr(null),contact_information:this.attr(null)}}}(0,a.Z)(i,"entity","responsible_party")},6214:function(e,n,t){t.r(n),t.d(n,{default:function(){return W}});var a=t(3396);function l(e,n,t,l,i,o){const r=(0,a.up)("ResponsibleParty",!0);return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r)])}function i(e,n,t,l,i,o){const r=(0,a.up)("v-card-title"),s=(0,a.up)("v-text-field"),u=(0,a.up)("v-card-item"),p=(0,a.up)("v-form"),d=(0,a.up)("v-btn"),m=(0,a.up)("v-card-text"),c=(0,a.up)("v-card");return(0,a.wg)(),(0,a.j4)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Create new 'ResponsibleParty'")])),_:1}),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"id",modelValue:e.responsibleParty.id,"onUpdate:modelValue":n[0]||(n[0]=n=>e.responsibleParty.id=n),hint:"A value uniquely identifying a party (individual or organization).","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"name",modelValue:e.responsibleParty.name,"onUpdate:modelValue":n[1]||(n[1]=n=>e.responsibleParty.name=n),hint:"The name of the organization or the individual.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"position_name",modelValue:e.responsibleParty.position_name,"onUpdate:modelValue":n[2]||(n[2]=n=>e.responsibleParty.position_name=n),hint:"Role or position of the responsible person.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"organization",modelValue:e.responsibleParty.organization,"onUpdate:modelValue":n[3]||(n[3]=n=>e.responsibleParty.organization=n),hint:"Organization/affiliation of the individual/responsible person. In case of an organization, the name property should be used and this property is not to be used.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"logo",modelValue:e.responsibleParty.logo,"onUpdate:modelValue":n[4]||(n[4]=n=>e.responsibleParty.logo=n),hint:"Graphic identifying a party","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"contact_information",modelValue:e.responsibleParty.contact_information,"onUpdate:modelValue":n[5]||(n[5]=n=>e.responsibleParty.contact_information=n),hint:"Contact information","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(d,{onClick:e.createResponsibleParty},{default:(0,a.w5)((()=>[(0,a.Uk)("Create ResponsibleParty")])),_:1},8,["onClick"])])),_:1})])),_:1})}t(774);var o=t(4870),r=t(3238),s=t(6572),u=t(1888),p=t(1209),d=t(2900),m=t(240),c=t(6422),b=t(870),f=t(3968),h=t(1995),y=t(5708),V=t(2846),g=(0,a.aZ)({name:"ResponsiblePartyForm",props:{},methods:{parseLinks(e){let n;return n=e&&e.length>0?JSON.stringify(e):"",n}},components:{VCard:r._,VCardTitle:s.E,VCardText:u.Z,VCardItem:p._,VTextField:d.hw,VSelect:m.r,VForm:c.O,VBtn:b.T,VueDatePicker:y.Z,LinkForm:h.Z},setup(){const e=(0,o.iH)([]),n=e=>{console.log("updating links"),a.value.links=e},t=(0,f.lL)(V.Z),a=(0,o.iH)(t.make()),l=async()=>{let e={};Object.assign(e,a.value),await t.save(e),i()},i=()=>{Object.assign(a.value,t.make())};return{responsibleParty:a,createResponsibleParty:l,resetResponsibleParty:i,links:e,updateLinks:n}}}),_=t(89);const P=(0,_.Z)(g,[["render",i]]);var v=P,w={name:"responsiblePartyForm",components:{ResponsibleParty:v}};const k=(0,_.Z)(w,[["render",l]]);var W=k}}]);
//# sourceMappingURL=6214.e071d0bf.js.map