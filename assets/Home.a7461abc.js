import{u as i,r as u,a as l,o as _,c as p,b as t,d}from"./index.67aac498.js";import{_ as v,c as f}from"./plugin-vue_export-helper.db5de753.js";const b={class:"home"},h={class:"buttonGroup size"},g={name:"Home",setup(x){const s=f(),o=i(),e=u({time:5});function a(){o.push({name:"contentUpload"})}function c(){s.changeTime(e.time),localStorage.setItem("time",`{"time":${e.time}}`),o.push({name:"contentInput"})}return(V,n)=>{const m=l("el-input-number");return _(),p("div",b,[t("div",h,[t("div",{onClick:a,class:"hvr-fade button size"},"\u4E0A\u4F20\u5185\u5BB9"),d(m,{modelValue:e.time,"onUpdate:modelValue":n[0]||(n[0]=r=>e.time=r),min:5,max:300},null,8,["modelValue"]),t("div",{onClick:c,class:"hvr-fade button size"},"\u8FDB\u5165\u6D4B\u8BD5")])])}}};var z=v(g,[["__scopeId","data-v-65ef456b"]]);export{z as default};
