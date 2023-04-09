<template>
  <div class="main">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-text type="success">资产测绘配置</el-text>
        </div>
      </template>
      <el-form :model="info" label-width="120px">
        <el-form-item label="FOFA email">
          <el-input v-model="info.fofa_email" />
        </el-form-item>
        <el-form-item label="FOFA apikey">
          <el-input v-model="info.fofa_apikey" type="password" show-password />
        </el-form-item>
        <el-form-item label="Hunter apikey">
          <el-input
            v-model="info.hunter_apikey"
            type="password"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

export default {
  name: 'GlobalConfig',
  data() {
    return {
      info: {
        fofa_email: '',
        fofa_apikey: '',
        hunter_apikey: '',
      },
    }
  },
  mounted() {
    chrome.storage.local.get(
      ['fofa_email', 'fofa_apikey', 'hunter_apikey'],
      (result) => {
        this.info.fofa_email = result.fofa_email
        this.info.fofa_apikey = result.fofa_apikey
        this.info.hunter_apikey = result.hunter_apikey
      }
    )
  },
  methods: {
    save() {
      chrome.storage.local.set(
        {
          fofa_email: this.info.fofa_email,
          fofa_apikey: this.info.fofa_apikey,
          hunter_apikey: this.info.hunter_apikey,
        },
        function () {
          console.log('save success')
          ElMessage({
            message: '保存成功',
            type: 'success',
          })
        }
      )
    },
    reset() {
      chrome.storage.local.clear(() => {
        console.log('remove all')
        ElMessage({
          message: '清除成功',
          type: 'success',
        })
        this.info.fofa_email = ''
        this.info.fofa_apikey = ''
        this.info.hunter_apikey = ''
      })
    },
  },
}
</script>

<style lang="less" scoped>
.main {
  height: 520px;

  .box-card {
    width: 480px;
    margin: 35px auto 10px;

    :deep(.el-card__header) {
      padding: 5px 20px;

      .card-header {
        height: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
</style>
