import { defineStore } from "pinia/dist/pinia";

export const contentStore = defineStore({
  id: "content",
  state: () => {
    return {
      text: "又回到最初的起点记忆中你青涩的脸又回到最初的起点记忆中你青涩的脸",
      time: Number,
      reTime: Number,
      startTime: Number,
      endTime: Number,
      countDownGo: undefined,
    };
  },
  actions: {
    changeText(text) {
      this.text = text;
    },
    changeTime() {
      this.time = 5;
      this.reTime = 5;
    },
    countDown() {
      this.startTime = new Date().getTime();
      this.countDownGo = setTimeout(() => this.countDownSetting(), 1000);
    },
    countDownSetting() {
      this.reTime--;
      this.endTime = new Date().getTime();
      let nextTime =
        1000 - this.endTime + this.startTime + (this.time - this.reTime) * 1000;
      if (nextTime < 0) {
        nextTime = 0;
      }
      if (this.reTime <= 0) {
        clearTimeout(this.countDownGo);
      } else {
        this.countDownGo = setTimeout(() => this.countDownSetting(), nextTime);
      }
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});
