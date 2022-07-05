<template>
  <div class="home">
    <div class="title">打字测试</div>
    <div class="buttonGroup size">
      <div @click="goUpload" class="hvr-fade button size">上传内容</div>
      <el-input-number
        v-model="state.time"
        :min="5"
        :max="300"
      ></el-input-number>
      <div @click="goInput" class="hvr-fade button size">进入测试</div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { contentStore } from "../stores/content";
const content = contentStore();
const $router = useRouter();
const state = reactive({
  time: 5,
});
function goUpload() {
  $router.push({
    name: "contentUpload",
  });
}
function goInput() {
  content.changeTime(state.time);
  localStorage.setItem("time", `{"time":${state.time}}`);
  $router.push({
    name: "contentInput",
  });
}
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  margin: 0.2rem 0;
  font-size: 0.5rem;
}
.buttonGroup {
  flex-direction: row;
}
.size {
  width: 50%;
  height: 20%;
}
.buttonGroup > .size {
  width: 25%;
  height: 75%;
  font-size: 0.25rem;
}
.el-input-number {
  display: flex;
}
</style>
