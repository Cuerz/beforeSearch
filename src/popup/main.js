import { createApp } from 'vue'
import App from './components/App.vue'
import router from '@/utils/router'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

