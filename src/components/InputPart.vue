<template>
  <div class="inputPart" :style="{ '--size': size * 0.1 + 'rem' }">
    <div
      class="inputText"
      :data-text="state.input.slice(0, state.correctLength)"
    >
      {{ props.content }}
    </div>
    <div class="el-input">
      <div class="el-input__wrapper">
        <input
          type="text"
          v-model="state.input"
          :id="props.id"
          :disabled="state.isComplete"
          autocomplete="off"
          @input="timeRun"
          @copy.prevent="() => {}"
          @paste.prevent="() => {}"
          @cut.prevent="() => {}"
          class="el-input__inner"
          :style="{
            '--size': size * 0.1 + 'rem',
            '--realSize': size * 0.08 + 'rem',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { contentStore } from "../stores/content";
const content = contentStore();
const props = defineProps({
  id: String,
  content: String,
  size: Number,
  isChange: Boolean,
});
const state = reactive({
  input: "",
  count: 0,
  correctLength: 0,
  isComplete: false,
});
function timeRun() {
  if (!content.isTimeRun) {
    content.countDown();
  }
}
watch(
  () => state.input,
  (newVal) => {
    if (newVal.length < state.correctLength) {
      content.decreaseInput(state.correctLength - newVal.length);
      state.correctLength = newVal.length;
      return;
    }
    if (
      newVal.slice(state.correctLength, newVal.length) ===
      props.content.slice(state.correctLength, newVal.length)
    ) {
      let changeTextLength = newVal.length - state.correctLength;
      content.speedUpdate(changeTextLength);
      content.increaseInput(changeTextLength);
      state.correctLength = newVal.length;
    }
    if (state.correctLength === props.content.length) {
      state.isComplete = !state.isComplete;
    }
  }
);
</script>

<style scoped>
.inputPart {
  font-size: var(--size);
}
.inputText {
  position: relative;
}
.inputText::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  -webkit-background-clip: text;
  background-clip: text;
  background-color: yellow;
  color: transparent;
}
.el-input {
  height: var(--size);
}
:deep(.el-input__inner) {
  height: var(--realSize);
  font-size: var(--realSize);
}
</style>
