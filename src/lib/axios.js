// lib/axios.js
import axios from 'axios'
import store from '../store'

class AjaxRequest {
  // eslint-disable-next-line no-useless-constructor
  constructor () {
    // 定义一些公共配置
    // ajax 请求的地址
    this.baseURL =
      process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/'
    // ajax 请求超时时间
    this.timeout = 2000
  }

  merge (options) {
    // 合并公共参数和用户传过来的参数
    return { baseURL: this.baseURL, timeout: this.timeout, ...options }
  }

  // eslint-disable-next-line class-methods-use-this
  setInterceptors (instance) {
    // 设置响应拦截器
    instance.interceptors.response.use(
      res => {
        // 让loading 隐藏
        console.log('请求完成之后')
        store.dispatch('hideloading')
        return res.data
      },
      err => Promise.reject(err)
    )
    // 设置请求拦截器
    instance.interceptors.request.use(
      config => {
        // 让loading显示
        store.dispatch('showloading')
        // eslint-disable-next-line no-param-reassign
        config.headers.authorization = 'token'
        return config
      },
      err => Promise.reject(err)
    )
  }

  // eslint-disable-next-line class-methods-use-this
  request (options) {
    // 实现axios的实例调用
    const instance = axios.create()
    // setInterceptors 设置拦截器的方法
    this.setInterceptors(instance)
    // opt 就是合并后的参数
    const opt = this.merge(options)
    return instance(opt)
  }
}
export default new AjaxRequest()
// AjaxRequest.request({
//   url:'/list',
//   data:{
//     a:1
//   }
// })