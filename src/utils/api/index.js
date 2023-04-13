/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable */

import request from '../axios/request.js'

export function fofa_go(data) {
  return request({
    url: 'https://fofa.info/api/v1/search/all',
    method: 'get',
    params: {
      email: data.email,
      key: data.key,
      size: data.size,
      qbase64: data.qbase64,
      fields: 'ip,port,domain,title,server',
      full: true,
    },
  })
}

export function hunter_go(data) {
  return request({
    url: 'https://hunter.qianxin.com/openApi/search',
    method: 'get',
    params: {
      'api-key': data.api_key,
      search: data.search,
      page: 1,
      page_size: data.page_size,
    },
  })
}
