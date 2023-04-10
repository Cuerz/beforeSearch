<template>
  <div class="body">
    <div class="f-search">
      <el-text class="mx-5" type="info">查询语法：</el-text>
      <el-input
        v-model="f_sentence"
        class="w-20"
        size="large"
        placeholder="Please Input"
      />
      <el-button
        type="success"
        style="height: 38px; margin-left: 50px"
        @click="f_go"
        plain
        >查询</el-button
      >
    </div>
    <el-table :data="tableData" border stripe style="width: 100%;margin-top: 30px;">
      <el-table-column prop="id" label="ID" width="50" />
      <el-table-column prop="ip" label="IP" width="130" />
      <el-table-column prop="port" label="Port" width="80" />
      <el-table-column prop="domain" label="Domain" width="150" />
      <el-table-column prop="title" label="Title" />
      <el-table-column prop="server" label="Server" width="80" />
      <template v-slot:empty>
        <el-empty image="../../../assets/fofa.png" description="暂无数据" />
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'FofaSearch',
  data() {
    return {
      f_sentence: '',
      tableData: [],
    }
  },
  methods: {
    f_go() {},
  },
}
</script>

<style lang="less" scoped>
.body {
  padding: 20px 10px;
  .f-search {
    text-align: center;
    size: 12px;
    display: flex;

    .mx-5 {
      width: 90px;
    }

    .w-20 {
      width: 160px;
    }
  }
}
</style>
