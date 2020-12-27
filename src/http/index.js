import { request } from './request' // 引入axios的封装方法不带返回拦截

// import { request } from './global' // 引入axios的封装方法带返回拦截

import api from './common'
export const topics = params => {
  // 主题首页
  return request('GET', api.topics, params)
}
