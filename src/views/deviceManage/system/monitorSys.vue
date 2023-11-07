<template>
  <div class="df jc-sb mb-10">
    <div class="bg-f fl-2 mr-10 ov-h h-80 df fl-dc jc-ct p-0160">
      <div class="df jc-sb ai-ct">
        <p class="fs-18 fw-700">火灾检测报警系统</p>
        <el-button :icon="RefreshRight">刷新</el-button>
      </div>
      <div class="fs-12">数据更新时间：2023/11/7</div>
    </div>
    <div class="bg-f fl-1 mr-10 ov-h h-80">2</div>
    <div class="bg-f fl-1 mr-10 ov-h h-80">3</div>
    <div class="bg-f fl-1 mr-10 ov-h h-80">4</div>
    <div class="bg-f fl-1 mr-10 ov-h h-80">5</div>
    <div class="bg-f fl-1 mr-10 ov-h h-80">6</div>
    <div class="bg-f fl-1  ov-h h-80">7</div>
  </div>




  <div class="bg-f table">
    1232312
  </div>
</template>
<script setup lang="ts">
import { RefreshRight } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.table {
  height: calc(100% - 90px);
}
</style>