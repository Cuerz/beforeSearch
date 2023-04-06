<template>
  <div class="popup">
    <el-container>
      <el-header class="popup-header">
        <el-menu
          class="el-menu-main"
          mode="horizontal"
          default-active="/transcode"
          router="true"
        >
          <el-menu-item class="menu-item" index="/transcode"
            >编码转换</el-menu-item
          >
          <el-menu-item class="menu-item" index="2" disabled
            >资产测绘</el-menu-item
          >
          <el-menu-item class="menu-item" index="3" disabled
            >信息收集</el-menu-item
          >
          <el-menu-item class="menu-item" index="4" disabled
            >敏感信息</el-menu-item
          >
          <el-menu-item class="menu-item" index="/globalconfig"
            >插件配置</el-menu-item
          >
        </el-menu>
      </el-header>
      <el-main class="popup-body">
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.popup {
  width: 680px;
  height: auto;
  color: red;

  .popup-header {
    height: auto;
    padding: 0 10px;

    .menu-item {
      height: 43px;
    }
  }

  .popup-body {
    background-color: #f8fafb;
    padding: 3px 10px;
  }
}
</style>
