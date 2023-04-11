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
