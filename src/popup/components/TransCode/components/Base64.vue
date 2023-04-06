<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-text type="success">base64编码</el-text>
          <el-button type="success" @click="Encode" text>编码</el-button>
        </div>
      </template>
      <el-input
        v-model="encodetext"
        :autosize="{ minRows: 3, maxRows: 5 }"
        type="textarea"
        placeholder="请输入需要编码的内容"
      />
    </el-card>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-text type="warning">base64解码</el-text>
          <el-button type="warning" @click="Decode" text>解码</el-button>
        </div>
      </template>
      <el-input
        v-model="decodetext"
        :autosize="{ minRows: 3, maxRows: 5 }"
        type="textarea"
        placeholder="请输入需要解码的内容"
      />
    </el-card>
  </div>
</template>

<script>
let Base64 = require('js-base64').Base64

export default {
  name: 'Base64Code',
  data() {
    return {
      encodetext: '',
      decodetext: '',
    }
  },
  methods: {
    Encode() {
      this.decodetext = Base64.encode(this.encodetext)
    },
    Decode() {
      this.encodetext = Base64.decode(this.decodetext)
    },
  },
}
</script>

<style lang="less" scoped>
.box-card {
  width: 480px;
  margin: 35px auto 10px;

  :deep(.el-card__header) {
    padding: 5px 20px;

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
