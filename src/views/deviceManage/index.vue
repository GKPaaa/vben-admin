<template>
  <div class="common-layout">
    <el-container>
      <el-menu background-color="#3a3e45" text-color="#fff" style="min-height: calc(100vh - 100px);"
        :default-active="defaultRoute" @select="handleSelect" class="el-menu-vertical-demo" :collapse="isCollapse"
        @open="handleOpen" @close="handleClose">
        <div class="cl-f pl-10 df ai-ct h-60">{{ isCollapse ? '系统' : '消防子系统' }}</div>
        <el-menu-item index="monitor">
          <el-icon>
            <Tickets />
          </el-icon>
          <template #title>火灾检测报警系统</template>
        </el-menu-item>
        <el-menu-item class="mt-10" index="water">
          <el-icon>
            <Tickets />
          </el-icon>
          <template #title>消防水监测系统</template>
        </el-menu-item>
        <el-menu-item class="mt-10" index="hydrant">
          <el-icon>
            <Tickets />
          </el-icon>
          <template #title>室外消防栓系统</template>
        </el-menu-item>
        <el-menu-item class="mt-10" index="electric">
          <el-icon>
            <Tickets />
          </el-icon>
          <template #title>智慧安全用电系统</template>
        </el-menu-item>
        <el-menu-item class="mt-10" index="video">
          <el-icon>
            <Tickets />
          </el-icon>
          <template #title>视频监控系统</template>
        </el-menu-item>
      </el-menu>



      <el-container>
        <el-header class="bg-45 cl-f df ai-ct jc-sb">

          <el-icon @click="open" class="pointer">
            <Expand v-if="isCollapse" />
            <Fold v-else />
          </el-icon>

        </el-header>
        <el-main class="bg-dd" style="padding: 12px 0 0 0;">
          <transition name="custom-classes" enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut">
            <router-view></router-view>
          </transition>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, watch } from 'vue'
import { Tickets, Fold, Expand } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
const router = useRouter()
onBeforeMount(() => {
  defaultRoute.value = router.currentRoute.value.name
})
const isCollapse = ref(false)
const defaultRoute: any = ref('monitor')
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const open = () => {
  isCollapse.value = !isCollapse.value
}
const handleSelect = (key: string, keyPath: string[]) => {
  router.push({ name: key })
}
// 监听路由变化 激活左侧菜单栏选项
watch(() => router.currentRoute.value, (n, o) => {
  defaultRoute.value = n.name || 'monitor'
}, { deep: true })
</script>

<style lang="scss" scoped>
.common-layout {
  .el-menu {
    border-right: none;
  }
}
</style>