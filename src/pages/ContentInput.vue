<template>
  <div class="contentInput">
    <div class="main">
      <inputPart
        v-for="(item, index) in state.items"
        :key="index"
        :id="String(index)"
        :content="item"
        :size="state.size"
        :isChange="state.isChange"
      ></inputPart>
    </div>
    <div class="dataShow">
      <div>剩余时间：{{ content.reTime }}秒</div>
      <div>瞬时速度：{{ content.speed }}字/秒</div>
    </div>
    <div class="settingInput">
      <el-slider
        v-model="state.size"
        :min="1"
        :max="3"
        :step="0.1"
        vertical
        height="25vh"
        style="justify-content: center; margin-bottom: 10%"
      ></el-slider>
      <el-button @click="adjustTheme">切换主题</el-button>
      <el-button @click="backHome">返回首页</el-button>
    </div>
    <el-dialog
      v-model="content.dialogVisible"
      title="数据统计"
      width="30%"
      center
    >
      <div>总计时间：{{ content.time }} 秒</div>
      <div>最高速度：{{ content.maxSpeed }} 字/秒</div>
      <div>平均速度：{{ content.averageSpeed }} 字/秒</div>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { contentStore } from "../stores/content";
import inputPart from "../components/InputPart.vue";
import { useRouter } from "vue-router";
const $router = useRouter();
const content = contentStore();
const state = reactive({
  items: [],
  size: 1,
  isChange: true,
});
function adjustTheme() {
  state.isChange = !state.isChange;
}
function backHome() {
  $router.push({
    name: "home",
  });
}
function textProcessing() {
  let rows = content.text.length / 20;
  for (let i = 0; i < rows; i++) {
    let j = i + 1;
    state.items.push(content.text.slice(i * 20, j * 20));
  }
}
onMounted(() => {
  textProcessing();
});
</script>

<style>
.contentInput {
  display: flex;
  justify-content: center;
}
.main {
  display: flex;
  flex-direction: column;
  width: 70%;
  min-height: 75vh;
}
.dataShow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 20vh;
  height: 40vh;
  top: 30vh;
  left: 0.1rem;
  font-size: 0.1rem;
}
.settingInput {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  height: 40vh;
  top: 30vh;
  right: 0.1rem;
}
.el-slider__runway {
  flex: none;
}
.el-slider__button-wrapper {
  line-height: 0;
}
.el-button + .el-button {
  margin-left: 0;
}
</style>
