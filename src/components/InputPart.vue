<template>
  <div class="inputPart" :style="{ '--size': size * 0.1 + 'rem' }">
    <div :class="{ contentDay: isChange, contentNight: !isChange }">
      {{ props.content }}
    </div>
    <el-input
      v-model="state.input"
      :id="props.id"
      :disabled="state.isComplete"
      :style="{
        '--size': size * 0.1 + 'rem',
        '--realSize': size * 0.08 + 'rem',
      }"
    ></el-input>
  </div>
</template>

<script setup>
import { reactive, defineProps, watch, onMounted } from "vue";
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
const eventObj = new KeyboardEvent("keydown", {
  key: "Tab",
  code: "Tab",
});
watch(
  () => state.input,
  (newVal) => {
    if (newVal.length < state.correctLength) {
      state.correctLength--;
      return;
    }
    if (
      newVal.slice(state.correctLength, newVal.length) ===
      props.content.slice(state.correctLength, newVal.length)
    ) {
      state.correctLength = newVal.length;
    }
    if (state.correctLength === props.content.length) {
      state.isComplete = !state.isComplete;
    }
  }
);
onMounted(() => {
//   window.addEventListener("keydown", (e) => {
//     console.log(e);
//   });
//   window.dispatchEvent(eventObj);
});
</script>

<style scoped>
.inputPart {
  font-size: var(--size);
}
.contentDay {
  background-color: white;
  color: black;
}
.contentNight {
  background-color: black;
  color: white;
}
.el-input {
  height: var(--size);
}
:deep(.el-input__inner) {
  height: var(--realSize);
  font-size: var(--realSize);
}
</style>
