import { defineStore } from "pinia/dist/pinia";

export const contentStore = defineStore({
  id: "content",
  state: () => {
    return {
      text: "",
    };
  },
  actions: {
    change(text) {
      this.text = text;
    },
  },
  persist: {
    enabled: true,
  },
});
