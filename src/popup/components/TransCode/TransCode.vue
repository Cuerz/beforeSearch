<template>
  <div class="main">
    <el-menu
      class="el-menu-main"
      mode="horizontal"
      default-active="/transcode/base64"
      router="true"
    >
      <el-menu-item class="menu-item" index="/transcode/base64">base64</el-menu-item>
      <el-menu-item class="menu-item" index="/transcode/url">url</el-menu-item>
      <el-menu-item class="menu-item" index="/transcode/md5">md5</el-menu-item>
      <el-menu-item class="menu-item" index="/transcode/unicode">unicode</el-menu-item>
      <el-menu-item class="menu-item" index="/transcode/hex">hex</el-menu-item>
    </el-menu>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'TransCode',
}
</script>

<style lang="less" scoped>
.main{
  height: 520px;
  .menu-item {
  height: 39px;
}

}

</style>
