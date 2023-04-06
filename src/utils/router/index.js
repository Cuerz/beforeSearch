import { createRouter, createWebHashHistory } from 'vue-router'
import TransCode from '@/popup/components/TransCode/TransCode.vue'
import Base64Code from '@/popup/components/TransCode/components/Base64.vue'
import UrlCode from '@/popup/components/TransCode/components/Url.vue'
import Md5Code from '@/popup/components/TransCode/components/Md5.vue'
import UnicodeCode from '@/popup/components/TransCode/components/Unicode.vue'
import HexCode from '@/popup/components/TransCode/components/Hex.vue'
import GlobalConfig from '@/popup/components/GlobalConfig.vue'

const routes = [
  {
    path: '/',
    redirect: '/transcode',
  },
  {
    path: '/transcode',
    redirect: '/transcode/base64',
    name: 'transcode',
    component: TransCode,
    children: [
      {
        path: 'base64',
        name: 'base64',
        component: Base64Code,
      },
      {
        path: 'url',
        name: 'url',
        component: UrlCode,
      },
      {
        path: 'md5',
        name: 'md5',
        component: Md5Code,
      },
      {
        path: 'unicode',
        name: 'unicode',
        component: UnicodeCode,
      },
      {
        path: 'hex',
        name: 'hex',
        component: HexCode,
      },
    ],
  },
  {
    path: '/globalconfig',
    name: 'globalconfig',
    component: GlobalConfig,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
