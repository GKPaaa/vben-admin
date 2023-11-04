<template>
  <div class="Smegma">
  </div>
  <div class="loginInfo">123</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.loginInfo {
  position: absolute;
  top: 50%;
  right: 5vw;
  margin-top: -20vh;
  width: 30vw;
  height: 40vh;
  opacity: 0;
  background-color: #fff;
  animation: loginshow 0.8s linear 1.2s 1 normal forwards;
  box-shadow: 0 0 10px 5px #ddd;
}

@keyframes loginshow {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.2;
  }

  100% {
    opacity: 1;
  }
}

.Smegma {
  width: 100vw;
  height: 100vh;
  background-color: #ddd;
  animation-name: LeftToRight;
  /* 2、动画持续时间 */
  animation-duration: 0.4s;
  /* 3、动画执行速度 */
  animation-timing-function: linear;
  /* 4、等待时长 */
  animation-delay: 1.2s;
  /* 5、设置动画播放次数 */
  // animation-iteration-count: infinite;
  /* 6、设置动画是否反向播放 */
  // animation-direction: alternate;
  /* 7、动画结束时应用最后一帧 */
  animation-fill-mode: forwards;
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
}


@keyframes LeftToRight {
  0% {}

  25% {
    background-color: pink;
    width: 80vw;
  }

  100% {
    background-color: skyblue;
    width: 50vw;

  }
}
</style>