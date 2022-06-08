<template>
  <div class="contentInput">
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
      <div>
        <el-button @click="adjustTheme">点我切换主题</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { contentStore } from "../stores/content";
import inputPart from "../components/InputPart.vue";
const content = contentStore();
const state = reactive({
  items: [],
  size: 1,
  isChange: true,
});
function adjustTheme() {
  state.isChange = !state.isChange;
}
onMounted(() => {
  let rows = content.text.length / 10;
  for (let i = 0; i < rows; i++) {
    let j = i + 1;
    state.items.push(content.text.slice(i * 10, j * 10));
  }
});
</script>

<style>
.contentInput {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.main {
  width: 80%;
  min-height: 75vh;
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
