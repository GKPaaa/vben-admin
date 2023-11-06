<template>
  <div class="common-layout" id="home">
    <el-container>
      <el-header class="top">
        <Header />
      </el-header>
      <el-main class="center">Main</el-main>
      <el-footer class="bottom df jc-ct ai-ct fl-dc">
        <p class="cl-75 fs-12">杭州市晟元数字有限科技公司 @3023~1998</p>
        <p class="cl-75 fs-12">杭州市民中心</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from "./component/header.vue";
</script>

<style lang="scss" scoped>
#home {
  .top {
    height: 60px !important;
  }

  .center {
    height: calc(100vh - 100px);
  }

  .bottom {
    height: 40px !important;
  }
}
</style>