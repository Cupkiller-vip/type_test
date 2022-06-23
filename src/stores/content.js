import { defineStore } from "pinia/dist/pinia";

export const contentStore = defineStore({
  id: "content",
  state: () => {
    return {
      text: "又回到最初的起点记忆中你青涩的脸又回到最初的起点记忆中你青涩的脸",
      inputLength: 0,
      time: undefined,
      reTime: undefined,
      startTime: undefined,
      endTime: undefined,
      lastTime: undefined,
      nowTime: undefined,
      countDownGo: undefined,
      isTimeRun: false,
      dialogVisible: false,
      speed: 0,
      maxSpeed: 0,
    };
  },
  getters: {
    averageSpeed: (state) => {
      return ((state.inputLength * 60) / state.time).toFixed();
    },
  },
  actions: {
    changeText(text) {
      this.text = text;
    },
    changeTime(time) {
      this.time = time;
    },
    resetTime() {
      this.reTime = this.time;
    },
    changeDialogVisible() {
      this.dialogVisible = !this.dialogVisible;
    },
    increaseInput(length) {
      this.inputLength = this.inputLength + length;
    },
    decreaseInput(length) {
      this.inputLength = this.inputLength - length;
    },
    countDown() {
      this.startTime = new Date().getTime();
      this.lastTime = new Date().getTime();
      this.isTimeRun = true;
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
        this.changeDialogVisible();
      } else {
        this.countDownGo = setTimeout(() => this.countDownSetting(), nextTime);
      }
    },
    speedUpdate(changeTextLength) {
      this.nowTime = new Date().getTime();
      this.speed = (
        (changeTextLength * 1000.0 * 60) /
        (this.nowTime - this.lastTime)
      ).toFixed();
      this.lastTime = this.nowTime;
      if (this.maxSpeed < this.speed) {
        this.maxSpeed = this.speed;
      }
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "text",
        storage: localStorage,
        paths: ["text"],
      },
      {
        key: "time",
        storage: localStorage,
        paths: ["time"],
      },
    ],
  },
});
