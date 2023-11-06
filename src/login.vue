<template>
  <div class="Smegma">
  </div>
  <div class="loginInfo br-24 p-0160 df jc-ct ai-ct fl-dc ">

    <el-input v-model="login.account" placeholder="请输入账号" class="input-with-select mb-10">
      <template #prepend>
        <el-button :icon="User" />
      </template>
    </el-input>

    <el-input v-model="login.password" placeholder="请输入密码" class="input-with-select mb-12">
      <template #prepend>
        <el-button :icon="Lock" />
      </template>
    </el-input>
    <el-button color="#626aef" :loading="login.isloading" @click="loginin" class="w-100p">{{ login.txt }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { Ref, ref } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter()
type logintype = {
  account: string,
  password: string,
  isloading: boolean,
  txt: string
}
const login: Ref<logintype> = ref({
  account: '',
  password: '',
  isloading: false,
  txt: '登录'
})

const loginin = (): void => {
  login.value.isloading = true
  login.value.txt = '正在登录，请稍等...'
  router.push({ name: 'home' })
  // setTimeout(() => {
  //   login.value.isloading = false
  //   login.value.txt = '登  录'
  // }, 800);
  // console.log(login.value);

}
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
  animation: loginshow 0.5s linear 0s 1 normal forwards;
  box-shadow: 0 0 10px 5px #ddd;
}

@keyframes loginshow {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
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
  animation-delay: 0.4;
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