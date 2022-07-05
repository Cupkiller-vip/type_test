<template>
  <div class="animate__animated animate__fadeIn all">
    <what-martix
      :circleColor="content.isDark ? `rgba(255,255,255,0.5)` : undefined"
      :mouseCircleColor="content.isDark ? `rgba(250,246,72,0.5)` : undefined"
    ></what-martix>
    <router-view class="fill changeTheme"></router-view>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { contentStore } from "./stores/content";
const content = contentStore();
const root = document.querySelector(":root");
function refreshRem() {
  let docEl = document.documentElement;
  let width = docEl.getBoundingClientRect().width;
  let rem = width / 10;
  docEl.style.fontSize = rem + "px";
}
window.addEventListener("load", refreshRem);
window.addEventListener("resize", refreshRem);
watch(
  () => content.isDark,
  (newValue) => {
    if (newValue) {
      root.style.setProperty("--color", "white");
      root.style.setProperty("--background-color", "black");
    } else {
      root.style.setProperty("--color", "black");
      root.style.setProperty("--background-color", "white");
    }
  }
);
</script>
<style>
:root {
  --color: black;
  --background-color: white;
}
body {
  margin: 0;
  min-height: 100vh;
  text-rendering: optimizeLegibility;
  font-family: 楷体;
}
input {
  font-family: 楷体;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.all,
.fill {
  width: 100%;
  height: 100%;
}
.fill {
  color: var(--color);
  background-color: var(--background-color);
}
.changeTheme {
  transition: 0.7s background-color, color ease-out;
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
  border-radius: 3% / 9%;
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
  background-color: var(--el-color-primary-light-3);
  color: white;
}
.el-dialog__header {
  font-size: 0.1rem;
}
</style>
