<template>
  <div class="main">
    <inputPart
      v-for="(item, index) in state.items"
      :key="index"
      :content="item"
      :size="state.size"
      :isChange="state.isChange"
    ></inputPart>
  </div>
  <div class="adjust">
    <div class="adjustSize">
      <el-slider
        v-model="state.size"
        :min="1"
        :max="4"
        :step="0.2"
        show-input
      ></el-slider>
    </div>
    <div class="adjustTheme">
      <el-button @click="adjustTheme">点我切换主题</el-button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import InputPart from "../components/InputPart.vue";
const state = reactive({
  items: [
    "如果那两个字没有颤抖",
    "我不会 发现我难受",
    "怎么说出口 也不过是分手",
  ],
  size: 1,
  isChange: true,
});
function adjustTheme() {
  state.isChange = !state.isChange;
}
</script>

<style>
.main {
  width: 80%;
  height: 75vh;
}
.adjust {
  display: flex;
  width: 50%;
  justify-content: space-between;
}
.adjustSize {
  width: 75%;
}
</style>
