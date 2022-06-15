<template>
  <div class="home">
    <div class="buttonGroup size">
      <div @click="goUpload" class="hvr-fade button size">上传内容</div>
      <div @click="goInput" class="hvr-fade button size">进入测试</div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { contentStore } from "../stores/content";
const content = contentStore();
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
onMounted(() => {
  content.changeTime();
});
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
</style>
