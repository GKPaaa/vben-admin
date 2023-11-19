<template>
  <div class="df jc-sb ai-ct h-100p ">
    <div class="nowrap df">
      logo
      <div class="logoImg">应急管理措施</div>
    </div>
    <div class="fl-1 df jc-sb p-0160  cl-f">
      <el-menu background-color="#282c33" text-color="#fff" :default-active="activeIndex"
        class="el-menu-demo topcheck df jc-ct ai-ct " mode="horizontal" @select="handleSelect">
        <el-menu-item style="padding: 0 10px;height: 30px;" index="1">综合走势</el-menu-item>
        <el-menu-item style="padding: 0 6px;height: 30px;" index="device">设备管理</el-menu-item>
        <el-menu-item style="padding: 0 6px;height: 30px;" index="3">告警管理</el-menu-item>
        <el-menu-item style="padding: 0 6px;height: 30px;" index="4">巡检管理</el-menu-item>
        <el-menu-item style="padding: 0 6px;height: 30px;" index="5">故障管理</el-menu-item>
        <el-menu-item style="padding: 0 6px;height: 30px;" index="6">值班室管理</el-menu-item>
        <el-menu-item style="padding: 0 6px;height: 30px;" index="7">隐患管理</el-menu-item>
        <el-menu-item style="padding: 0 6px;height: 30px;" index="8">相关设置</el-menu-item>
      </el-menu>
    </div>
    <el-popover trigger="click">
      <template #default>
        <el-button class="w-100p" link @click="loginout">退出登录</el-button>
      </template>
      <template #reference>
        <div :title="loginName" class="fs-12 pointer w-m60 df ai-ct jc-ct">
          <span class="loginset">{{ loginName }}</span>
          <el-icon>
            <Setting />
          </el-icon>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { Setting } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
let loginName = ref('')
const activeIndex: any = ref('1')

loginName.value = localStorage.getItem('Name')!
const router = useRouter();
const loginout = () => {
  router.push({
    name: 'login'
  })
}
onBeforeMount(() => {
  activeIndex.value = router.currentRoute.value.meta.upRoute || router.currentRoute.value.name
})
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  router.push({ name: key })
}
</script>

<style lang="scss" scoped>
.topcheck {
  width: 100%;
}

/* 在你的代码的顶层 */
@media screen and (max-width: 900px) {
  .loginset {
    display: none;
  }

  .topcheck {
    width: 600px;
  }

  .logoImg {
    display: none;
  }
}
</style>