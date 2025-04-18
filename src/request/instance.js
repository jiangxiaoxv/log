import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL

const instance = axios.create({
  baseURL, //请求URL前缀
  timeout: 50000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 设置token请求头
    // config.headers['token'] = token
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    if (response.status != 200) {
      console.log(response)
    }
    return response.data
  },
  function (error) {
    const data = error.response

    return Promise.reject(error)
  }
)
export default instance
