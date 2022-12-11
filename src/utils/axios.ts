import axios from 'axios'

const BASE_URL = import.meta.env.DEV ? '/api/v1' : 'http://baidu.com'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  // headers: {'Content-Type': 'application/json'}
});



// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


export type ApiResponse<T = any> = {
  data: T,
  message: string,
  extra: {},
  code: string,
  success: boolean,
  error?: {},
  timestamp?: string
}
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  if(response.status >= 200 && response.status < 300) {
    return response.data
  }
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance