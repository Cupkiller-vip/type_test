import{u,c as p,r as d,a as i,o as _,b as m,e as x,d as t}from"./index.56178d0b.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";const v={class:"contentUpload"},h={name:"ContentUpload",setup(C){const o=u(),n=p(),e=d({text:""});function s(){o.push({name:"home"})}function c(){n.changeText(e.text),localStorage.setItem("text",`{"text":${JSON.stringify(e.text)}}`),o.push({name:"home"})}return(U,a)=>{const l=i("el-input");return _(),m("div",v,[x(l,{class:"uploadPart",modelValue:e.text,"onUpdate:modelValue":a[0]||(a[0]=r=>e.text=r),autosize:{minRows:4,maxRows:10},type:"textarea",placeholder:"\u5728\u6B64\u8F93\u5165\u6D4B\u8BD5\u5185\u5BB9"},null,8,["modelValue"]),t("div",{class:"buttonGroup size"},[t("div",{onClick:s,class:"hvr-fade button size"},"\u53D6\u6D88"),t("div",{onClick:c,class:"hvr-fade button size"},"\u786E\u5B9A")])])}}};var g=f(h,[["__scopeId","data-v-0f50f37c"]]);export{g as default};