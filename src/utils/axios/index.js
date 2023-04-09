import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
// create an axios instance
const service = axios.create({
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000, // request timeout
})

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data
    return Promise.resolve(res)
  },
  (error) => {
    console.log('err' + error) // for debug
    ElMessage({
      message: error.message,
      type: 'error',
    })
    return Promise.reject(error)
  }
)

export default service
