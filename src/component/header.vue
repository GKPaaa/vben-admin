<template>
  <div class="df jc-sb ai-ct h-100p">
    <p>logo</p>
    <!-- <p class="pointer">退出登录</p> -->
    <el-popover trigger="click">
      <template #default>
        <el-button class="w-100p" link @click="loginout">退出登录</el-button>
      </template>
      <template #reference>
        <el-icon class="pointer">
          <Setting />
        </el-icon>
      </template>
      <!-- <el-button>trigger me</el-button> -->

    </el-popover>

  </div>
</template>

<script setup lang="ts">
import { Setting } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
const router = useRouter();
const loginout = () => {
  router.push({
    name: 'login'
  })
}
</script>

<style lang="scss" scoped></style>