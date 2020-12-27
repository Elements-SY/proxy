import axios from 'axios'
let APIHOST;
axios.defaults.baseURL = APIHOST
axios.defaults.timeout = 10000
switch (process.env.NODE_ENV) {
  // 开发环境
  case 'development':
    APIHOST = '/api'
    break
  // 测试环境
  case 'testing':
    APIHOST = 'https://cnodejs.org'
    break
  // 生产环境
  default:
    APIHOST = 'https://cnodejs.org'
    break
}

// API method 封装
export const request = function (method, url, params) {
  const config = {
    baseURL: APIHOST,
    method: method.toLocaleUpperCase() || 'GET',
    url,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if (method.toLocaleUpperCase() === 'GET' || method.toLocaleUpperCase() === 'DELETE') {
    config.params = params
  } else {
    config.data = params
  }
  if (!config.url) {
    return
  }
  config.data = config.data || {}
  if (config.method === 'DELETE') {
    config.data = {}
  }
  return axios(config)
}
