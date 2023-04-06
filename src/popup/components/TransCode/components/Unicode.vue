<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-text type="success">Unicode编码</el-text>
          <el-button type="success" @click="encodeUnicode" text
            >中文转Unicode</el-button
          >
          <el-button type="success" @click="A2U" text>Ascii转Unicode</el-button>
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
          <el-text type="warning">Unicode解码</el-text>
          <el-button type="warning" @click="decodeUnicode" text
            >Unicode转中文</el-button
          >
          <el-button type="warning" @click="U2A" text>Unicode转Ascii</el-button>
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
  name: 'UnicodeCode',
  data() {
    return {
      encodetext: '',
      decodetext: '',
    }
  },
  methods: {
    // 中文转Unicode
    encodeUnicode() {
      let res = []
      for (let i = 0; i < this.encodetext.length; i++) {
        res[i] = ('00' + this.encodetext.charCodeAt(i).toString(16)).slice(-4)
      }
      this.decodetext = '\\u' + res.join('\\u')
    },

    // Ascii转Unicode
    A2U() {
      var reserved = ''
      for (var i = 0; i < this.encodetext.length; i++) {
        reserved += '&#' + this.encodetext.charCodeAt(i) + ';'
      }
      this.decodetext = reserved
    },

    // Unicode转中文
    decodeUnicode() {
      this.encodetext = unescape(this.decodetext.replace(/\\u/gi, '%u'))
    },

    // Unicode转Ascii
    U2A() {
      var reserved = ''
      var code = this.decodetext.match(/&#(d+);/g)

      if (code === null) {
        this.encodetext = this.decodetext
      }
      for (var i = 0; i < code.length; i++) {
        reserved += String.fromCharCode(code[i].replace(/[&#;]/g, ''))
      }
      this.encodetext = reserved
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
