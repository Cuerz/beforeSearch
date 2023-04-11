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
      <el-text class="mx-5" type="info">查询条数：</el-text>
      <el-input-number v-model="f_num" :min="1" class="mx-4" />
      <el-button
        type="success"
        style="height: 38px; margin-left: 50px"
        text
        bg
        :disabled="is_set"
        @click="f_go"
        >查询</el-button
      >
    </div>
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%; margin-top: 30px"
    >
      <el-table-column type="index" width="50" />
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
let Base64 = require('js-base64').Base64
import { fofa_go } from '@/utils/api'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
export default {
  name: 'FofaSearch',
  data() {
    return {
      is_set: false,
      f_sentence: '',
      f_num: '',
      fofa_email: '',
      fofa_apikey: '',
      tableData: [],
    }
  },
  mounted() {
    chrome.storage.local.get(['fofa_email', 'fofa_apikey'], (result) => {
      if (result.fofa_email === undefined || result.fofa_apikey === undefined) {
        this.is_set = true
        ElMessage({
          message: '还未配置fofa_api,请先去配置页面完成配置',
          type: 'error',
        })
      } else {
        this.fofa_email = result.fofa_email
        this.fofa_apikey = result.fofa_apikey
      }
    })
  },
  methods: {
    f_go() {
      let data = {
        email: this.fofa_email,
        key: this.fofa_apikey,
        size: this.f_num,
        qbase64: Base64.encode(this.f_sentence),
      }
      fofa_go(data).then((res) => {
        if (!res.error) {
          res.results.forEach(element => {
            var one_info = {
              ip: element[0],
              port: element[1],
              domain: element[2],
              title: element[3],
              server: element[4],
            }
            this.tableData.push(one_info)
          });
        }
      })
    },
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
