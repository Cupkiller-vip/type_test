import{c as y,r as k,w as S,o as _,b as z,d as n,t as d,g as P,v as D,h as f,n as C,u as $,i as w,a as x,F as B,j as N,k as r,e as h,l as b,m as R,q as T}from"./index.56178d0b.js";import{_ as U}from"./plugin-vue_export-helper.21dcd24c.js";const j=["data-text"],M={class:"el-input"},F={class:"el-input__wrapper"},q=["id","disabled"],E={name:"InputPart",props:{id:String,content:String,size:Number,isChange:Boolean},setup(p){const u=p,e=y(),t=k({input:"",count:0,correctLength:0,isComplete:!1});function v(){e.isTimeRun||e.countDown()}return S(()=>t.input,s=>{if(s.length<t.correctLength){e.decreaseInput(t.correctLength-s.length),t.correctLength=s.length;return}if(s.slice(t.correctLength,s.length)===u.content.slice(t.correctLength,s.length)){let i=s.length-t.correctLength;e.speedUpdate(i),e.increaseInput(i),t.correctLength=s.length}t.correctLength===u.content.length&&(t.isComplete=!t.isComplete)}),(s,i)=>(_(),z("div",{class:"inputPart",style:C({"--size":p.size*.1+"rem"})},[n("div",{class:"inputText","data-text":t.input.slice(0,t.correctLength)},d(u.content),9,j),n("div",M,[n("div",F,[P(n("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=m=>t.input=m),id:u.id,disabled:t.isComplete,autocomplete:"off",onInput:v,onCopy:i[1]||(i[1]=f(()=>{},["prevent"])),onPaste:i[2]||(i[2]=f(()=>{},["prevent"])),onCut:i[3]||(i[3]=f(()=>{},["prevent"])),class:"el-input__inner",style:C({"--size":p.size*.1+"rem","--realSize":p.size*.08+"rem"})},null,44,q),[[D,t.input]])])])],4))}};var G=U(E,[["__scopeId","data-v-4295ee08"]]);const H={class:"contentInput"},O={class:"main"},A={class:"dataShow"},J={class:"settingInput"},K=T("\u5207\u6362\u4E3B\u9898"),Q=T("\u8FD4\u56DE\u9996\u9875"),Y={name:"ContentInput",setup(p){const u=$(),e=y(),t=k({items:[],size:2});function v(){e.changeTheme()}function s(){u.push({name:"home"}),e.dialogVisible&&e.changeDialogVisible()}function i(){location.reload()}function m(l){let o=l.length/20;for(let a=0;a<o;a++){let c=l.slice(a*20,(a+1)*20);t.items.push(c),e.getRealLength(c.length)}}function I(){let l=0;for(;;){let o=e.text.indexOf(`
`,l);if(o===-1){let c=e.text.slice(l);m(c);break}let a=e.text.slice(l,o);m(a),l=o+1}}return w(()=>{I(),e.resetTime()}),S(()=>e.inputLength,()=>{e.inputLength===e.realLength&&(e.countDownStop(),e.changeDialogVisible())}),(l,o)=>{const a=x("el-slider"),c=x("el-button"),V=x("el-dialog");return _(),z("div",H,[n("div",O,[(_(!0),z(B,null,N(t.items,(g,L)=>(_(),R(G,{key:L,id:String(L),content:g,size:t.size},null,8,["id","content","size"]))),128))]),n("div",A,[n("div",null,"\u5269\u4F59\u65F6\u95F4\uFF1A"+d(r(e).reTime)+"\u79D2",1),n("div",null,"\u77AC\u65F6\u901F\u5EA6\uFF1A"+d(r(e).speed)+"\u5B57/\u5206",1)]),n("div",J,[h(a,{modelValue:t.size,"onUpdate:modelValue":o[0]||(o[0]=g=>t.size=g),min:1,max:3,step:.1,vertical:"",height:"20vh",style:{"justify-content":"center","margin-bottom":"10%"}},null,8,["modelValue","step"]),h(c,{onClick:v},{default:b(()=>[K]),_:1}),h(c,{onClick:s},{default:b(()=>[Q]),_:1})]),h(V,{modelValue:r(e).dialogVisible,"onUpdate:modelValue":o[1]||(o[1]=g=>r(e).dialogVisible=g),title:"\u6570\u636E\u7EDF\u8BA1",width:"30%",center:""},{default:b(()=>[n("div",null,"\u603B\u8BA1\u65F6\u95F4\uFF1A"+d(r(e).time-r(e).reTime)+" \u79D2",1),n("div",null,"\u6700\u9AD8\u901F\u5EA6\uFF1A"+d(r(e).maxSpeed)+" \u5B57/\u5206",1),n("div",null,"\u5E73\u5747\u901F\u5EA6\uFF1A"+d(r(e).averageSpeed)+" \u5B57/\u5206",1),n("div",{class:"buttonGroup size"},[n("div",{class:"button size hvr-fade",onClick:s},"\u8FD4\u56DE\u9996\u9875"),n("div",{class:"button size hvr-fade",onClick:i},"\u91CD\u65B0\u6D4B\u8BD5")])]),_:1},8,["modelValue"])])}}};export{Y as default};
