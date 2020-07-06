/*
 * @Author: FBB
 * @Date: 2019-08-22 22:18:13
 * @LastEditors: FBB
 * @LastEditTime: 2020-07-06 15:02:30
 */
import axios from "axios";
import { Toast } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

//默认请求地址
axios.defaults.baseURL = "http://localhost:3000";

//处理跨域
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

//默认请求时间
axios.defaults.timeout = 100000;

//处理登陆之后，接口依旧返回301
axios.defaults.withCredentials = true;

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    //请求错误处理
    Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const data = response.data || {};
    const { code, msg, message } = data;
    if (code === 200 || response.status === 200) {
      return Promise.resolve(response.data);
    }
    Toast.info(msg || message || "系统异常");
    return Promise.reject(response);
  },
  (error) => {
    const status = error.response.status;
    if (status === 301) {
      Toast.fail("尚未登录");
    } else if (status) {
      Toast.fail(`Http Error: ${status}`);
    }
    return Promise.reject(error);
  }
);

const request = (config: any) => {
  if (!config.method || config.method.toLowerCase() === "get") {
    //config.params = config.params
  }
  return axios(config);
};

export default request;
