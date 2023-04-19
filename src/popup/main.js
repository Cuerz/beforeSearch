import { createApp } from 'vue'
import App from './components/App.vue'
import router from '@/utils/router'
import 'element-plus/dist/index.css'
import JsonExcel from 'vue-json-excel3'

const app = createApp(App)
app.use(router)
app.component('downloadExcel', JsonExcel)
app.mount('#app')
