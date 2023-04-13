<template>
  <div class="main">
    <el-menu
      class="el-menu-main"
      mode="horizontal"
      default-active="/assetmap/fofa"
      router="true"
    >
      <el-menu-item class="menu-item" index="/assetmap/fofa">fofa</el-menu-item>
      <el-menu-item class="menu-item" index="/assetmap/hunter">hunter</el-menu-item>
    </el-menu>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'AssetMap',
}
</script>

<style lang="less" scoped>
.main {
  height: 520px;
  .menu-item {
    height: 39px;
  }
}
</style>
