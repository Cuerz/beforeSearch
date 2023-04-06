<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-text type="success">md5加密</el-text>
          <el-button type="success" @click="Encode" text>加密</el-button>
        </div>
      </template>
      <div class="inputplace">
        <el-text type="primary" style="width: 30%; text-align: center"
          >明文</el-text
        >
        <el-input v-model="input" placeholder="请输入需要加密的内容" />
      </div>
      <div class="inputplace">
        <el-text type="primary" style="width: 30%; text-align: center"
          >32位小写密文</el-text
        >
        <el-input
          v-model="resultLower"
          readonly="true"
          placeholder="32位小写"
        />
      </div>
      <div class="inputplace">
        <el-text type="primary" style="width: 30%; text-align: center"
          >32位大写密文</el-text
        >
        <el-input
          v-model="resultUpper"
          readonly="true"
          placeholder="32位大写"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
import md5 from 'js-md5'
export default {
  name: 'Md5Code',
  data() {
    return {
      input: '',
      resultLower: '',
      resultUpper: '',
    }
  },
  methods: {
    Encode() {
      this.resultLower = md5(this.input)
      this.resultUpper = this.resultLower.toUpperCase()
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

  .inputplace {
    display: flex;
    height: 40px;
    margin: 10px auto 10px;
  }
}
</style>
