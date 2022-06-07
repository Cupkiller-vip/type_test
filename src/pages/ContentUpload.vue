<template>
  <el-input
    class="uploadPart"
    v-model="state.text"
    :autosize="{ minRows: 4, maxRows: 10 }"
    type="textarea"
    placeholder="在此输入测试内容"
  />
  <div class="buttonGroup size">
    <div @click="toCancel" class="hvr-fade button size">取消</div>
    <div @click="toConfirm" class="hvr-fade button size">确定</div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { contentStore } from "../stores/content";
import { useRouter } from "vue-router";
const $router = useRouter();
const content = contentStore();
const state = reactive({
  text: "",
});
function toCancel() {
  $router.push({
    name: "home",
  });
}
function toConfirm() {
  content.change(state.text);
  $router.push({
    name: "home",
  });
}
</script>
<style scoped>
.uploadPart {
  width: 80%;
}
.size {
  width: 50%;
  height: 20%;
}
.buttonGroup > .size {
  width: 10%;
  height: 30%;
  font-size: 0.1rem;
}
</style>
