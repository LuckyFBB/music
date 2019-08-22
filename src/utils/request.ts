/*
 * @Author: FBB
 * @Date: 2019-08-22 22:18:13
 * @LastEditors: FBB
 * @LastEditTime: 2019-08-22 22:25:08
 */
import axios from 'axios'
import { Toast } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css';

//默认请求地址
axios.defaults.baseURL = 'http://musicapi.leanapp.cn'

//处理跨域
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

//默认请求时间
axios.defaults.timeout = 10000

// 添加请求拦截器
axios.interceptors.request.use(config => {
  return config;
}, error => {  //请求错误处理
  Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    console.log(response)
    if (response.status === 200 && response.data.code === 200) {
      return Promise.resolve(response.data)
    } else {
      Toast.info(response.data.msg)
      return Promise.reject(response.data)
    }
  },
  error => {
    console.log('error', Toast)
    Toast.info('请求失败')
    return Promise.reject(error)
  }
)

const request = (config: any) => {
  if (!config.method || config.method.toLowerCase() === 'get') {
    config.params = config.params
  }
  return axios(config)
}

export default request