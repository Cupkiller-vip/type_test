<template>
  <canvas id="canvas" class="canvas"> </canvas>
  <router-view class="animate__animated animate__fadeInUp fill"></router-view>
</template>

<script setup>
import { onMounted } from "vue";
function refreshRem() {
  let docEl = document.documentElement;
  let width = docEl.getBoundingClientRect().width;
  let rem = width / 10;
  docEl.style.fontSize = rem + "px";
}
window.addEventListener("load", refreshRem);
window.addEventListener("resize", refreshRem);

onMounted(() => {
  class Circle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.r = Math.random() * 10;
      this._mx = Math.random();
      this._my = Math.random();
    }
    drawCircle(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 360);
      ctx.closePath();
      ctx.fillStyle = "rgba(204,204,204,0.3)";
      ctx.fill();
    }
    drawLine(ctx, _circle) {
      let dx = this.x - _circle.x;
      let dy = this.y - _circle.y;
      let d = Math.sqrt(dx * dx + dy * dy);
      if (d < 150) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(_circle.x, _circle.y);
        ctx.closePath();
        ctx.strokeStyle = "rgba(204, 204, 204, 0.3)";
        ctx.stroke();
      }
    }
    move(w, h) {
      this._mx = this.x < w && this.x > 0 ? this._mx : -this._mx;
      this._my = this.y < h && this.y > 0 ? this._my : -this._my;
      this.x += this._mx / 2;
      this.y += this._my / 2;
    }
  }
  class CurrentCircle extends Circle {
    constructor(x, y) {
      super(x, y);
    }
    drawCircle(ctx) {
      ctx.beginPath();
      this.r = this.r < 14 && this.r > 1 ? this.r + (Math.random() * 2 - 1) : 2;
      ctx.arc(this.x, this.y, this.r, 0, 360);
      ctx.closePath();
      ctx.fillStyle = "rgba(255, 77, 54, 0.6)";
      ctx.fill();
    }
  }
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let w = (canvas.width = canvas.offsetWidth);
  let h = (canvas.height = canvas.offsetHeight);
  let circles = [];
  let current_circle = new CurrentCircle(0, 0);

  let draw = function () {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < circles.length; i++) {
      circles[i].move(w, h);
      circles[i].drawCircle(ctx);
      for (let j = i + 1; j < circles.length; j++) {
        circles[i].drawLine(ctx, circles[j]);
      }
    }
    if (current_circle.x) {
      current_circle.drawCircle(ctx);
      for (var k = 1; k < circles.length; k++) {
        current_circle.drawLine(ctx, circles[k]);
      }
    }
    requestAnimationFrame(draw);
  };

  let init = function (num) {
    for (var i = 0; i < num; i++) {
      circles.push(new Circle(Math.random() * w, Math.random() * h));
    }
    draw();
  };
  window.addEventListener("load", init(60));
  window.onmousemove = function (e) {
    e = e || window.event;
    current_circle.x = e.clientX;
    current_circle.y = e.clientY;
  };
  window.onmouseout = function () {
    current_circle.x = null;
    current_circle.y = null;
  };
});
</script>
<style>
body {
  margin: 0;
  min-height: 100vh;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 楷体;
}
.canvas {
  position: fixed;
  width: 100%;
  height: 100vh;
}
input {
  font-family: 楷体;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.fill {
  width: 100%;
  height: 100%;
}
.buttonGroup {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--el-color-primary);
  margin: 0 10%;
  cursor: pointer;
  border-radius: 3% / 9%;
}
.hvr-fade {
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  overflow: hidden;
  transition-duration: 0.3s;
  transition-property: color, background-color;
}
.hvr-fade:hover,
.hvr-fade:focus,
.hvr-fade:active {
  background-color: var(--el-color-primary-light-3);
  color: white;
}
.el-dialog__header {
  font-size: 0.1rem;
}
</style>
