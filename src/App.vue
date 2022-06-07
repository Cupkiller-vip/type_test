<template>
  <router-view></router-view>
</template>

<script setup>
import Home from "./pages/Home.vue";
function refreshRem() {
  let docEl = document.documentElement;
  let width = docEl.getBoundingClientRect().width;
  let rem = width / 10;
  docEl.style.fontSize = rem + "px";
}
window.addEventListener("load", refreshRem);
window.addEventListener("resize", refreshRem);
</script>
<style>
body {
  margin: 0;
  min-height: 100vh;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 楷体;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.buttonGroup {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--el-color-primary);
  margin: 0 10%;
  cursor: pointer;
}
.hvr-fade {
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  overflow: hidden;
  transition-duration: 0.3s;
  transition-property: color, background-color;
}
.hvr-fade:hover,
.hvr-fade:focus,
.hvr-fade:active {
  background-color: #2098d1;
  color: white;
}
</style>
