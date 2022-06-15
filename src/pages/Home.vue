<template>
  <div class="home">
    <div class="buttonGroup size">
      <div @click="goUpload" class="hvr-fade button size">上传内容</div>
      <el-input-number
        v-model="state.time"
        :min="60"
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
  time: 60,
});
function goUpload() {
  $router.push({
    name: "contentUpload",
  });
}
function goInput() {
  content.changeTime(state.time);
  $router.push({
    name: "contentInput",
  });
}
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
