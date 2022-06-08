<template>
  <div class="home">
    <div @click="goUpload" class="hvr-fade button size">上传内容</div>
    <div @click="goInput" class="hvr-fade button size">进入测试</div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const $router = useRouter();
function goUpload() {
  $router.push({
    name: "contentUpload",
  });
}
function goInput() {
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
  width: 20%;
  height: 20%;
  font-size: 0.3rem;
}
</style>
