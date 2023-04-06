<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-text type="success">Hex编码</el-text>
          <el-button type="success" @click="utf8ToHex" text>编码</el-button>
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
          <el-text type="warning">Hex解码</el-text>
          <el-button type="warning" @click="hexToUtf8" text>解码</el-button>
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
export default {
  name: 'HexCode',
  data() {
    return {
      encodetext: '',
      decodetext: '',
    }
  },
  methods: {
    utf8ToHex() {
      const utf8encoder = new TextEncoder()
      const rb = utf8encoder.encode(this.encodetext)
      let r = ''
      for (const b of rb) {
        r += ('0' + b.toString(16)).slice(-2)
      }
      this.decodetext = r
    },
    hexToUtf8() {
      this.encodetext = decodeURIComponent(
        this.decodetext
          .replace(/\s+/g, '') // remove spaces
          .replace(/[0-9a-f]{2}/g, '%$&') // add '%' before each 2 characters
      )
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
