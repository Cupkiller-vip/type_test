import { defineStore } from "pinia/dist/pinia";

export const contentStore = defineStore({
  id: "content",
  state: () => {
    return {
      text: "又回到最初的起点记忆中你青涩的脸我们终于来到了这一天桌垫下的老照片无数回忆连结今天男孩要赴女孩最后的约",
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
