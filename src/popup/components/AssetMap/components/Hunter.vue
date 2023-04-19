<template>
  <div class="body">
    <div class="f-search">
      <el-text class="mx-5" type="info">查询语法：</el-text>
      <el-input
        v-model="h_sentence"
        class="w-20"
        size="large"
        placeholder="Please Input"
      />
      <el-text class="mx-5" type="info">查询条数：</el-text>
      <el-input-number v-model="h_num" :min="1" class="mx-4" />
      <el-button
        type="success"
        style="height: 38px; margin-left: 15px"
        text
        bg
        :disabled="is_set"
        >查询</el-button
      >
      <download-excel
        class="btn btn-default"
        :data="tableData"
        :fields="json_fields"
        worksheet="My Worksheet"
        name="Output.xls"
      >
        <el-button type="info" style="height: 38px; margin-left: 15px" text bg
          >导出</el-button
        >
      </download-excel>
    </div>
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%; margin-top: 30px"
    >
      <el-table-column type="index" width="50" />
      <el-table-column prop="ip" label="IP" width="130" />
      <el-table-column prop="port" label="Port" width="60" />
      <el-table-column prop="domain" label="Domain" width="150" />
      <el-table-column prop="title" label="Title" />
      <el-table-column prop="country" label="Country" width="90" />
      <template v-slot:empty>
        <el-empty image="../../../assets/hunter.png" description="暂无数据" />
      </template>
    </el-table>
  </div>
</template>

<script>
let Base64 = require('js-base64').Base64
import { hunter_go } from '@/utils/api'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
export default {
  name: 'HunterSearch',
  data() {
    return {
      json_fields: {
        IP: 'ip',
        Port: 'port',
        Domain: 'domain',
        Title: 'title',
        Country: 'country',
      },
      is_set: false,
      h_sentence: '',
      h_num: '',
      hunter_apikey: '',
      tableData: [],
    }
  },
  mounted() {
    chrome.storage.local.get(['hunter_apikey'], (result) => {
      if (result.hunter_apikey === undefined) {
        this.is_set = true
        ElMessage({
          message: '还未配置hunter_api,请先去配置页面完成配置',
          type: 'error',
        })
      } else {
        this.hunter_apikey = result.hunter_apikey
      }
    })
  },
  methods: {
    h_go() {
      this.tableData = []
      let data = {
        api_key: this.hunter_apikey,
        page_size: this.h_num,
        search: Base64.encode(this.h_sentence),
      }
      hunter_go(data).then((res) => {
        console.log(res)
        if (res.code === 200) {
          res.data.arr.forEach((element) => {
            var one_info = {
              ip: element.ip,
              port: element.port,
              domain: element.domain,
              title: element.web_title,
              country: element.country,
            }
            this.tableData.push(one_info)
          })
        } else {
          ElMessage({
            message: res.message,
            type: 'error',
          })
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
