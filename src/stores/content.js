import { defineStore } from "pinia/dist/pinia";

export const contentStore = defineStore({
  id: "content",
  state: () => {
    return {
      text: "又回到最初的起点\n记忆中你青涩的脸",
      inputLength: 0,
      realLength: 0,
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
      isDark: false,
    };
  },
  getters: {
    averageSpeed: (state) => {
      return (
        (state.inputLength / (state.lastTime - state.startTime)) *
        60000
      ).toFixed();
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
    getRealLength(length) {
      this.realLength = this.realLength + length;
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
        this.countDownStop();
        this.changeDialogVisible();
      } else {
        this.countDownGo = setTimeout(() => this.countDownSetting(), nextTime);
      }
    },
    countDownStop() {
      clearTimeout(this.countDownGo);
      this.isTimeRun = false;
    },
    speedUpdate(changeTextLength) {
      this.nowTime = new Date().getTime();
      this.speed = (
        (changeTextLength * 1000 * 60) /
        (this.nowTime - this.lastTime)
      ).toFixed();
      if (Number(this.maxSpeed) < Number(this.speed)) {
        this.maxSpeed = this.speed;
      }
      this.lastTime = this.nowTime;
    },
    changeTheme() {
      this.isDark = !this.isDark;
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
