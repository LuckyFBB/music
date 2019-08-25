/*
 * @Author: FBB
 * @Date: 2019-08-23 09:15:31
 * @LastEditors: FBB
 * @LastEditTime: 2019-08-25 16:48:33
 * @Description: 所有请求
 */

import request from "../utils/request";

class Store {
  public getBanner = (type: number) => {
    const url = '/banner'
    const pre = {
      type
    }
    return request({ url, pre })
  }

  public getPersonalized = (limit: number) => {
    const url = '/personalized'
    const pre = {
      limit
    }
    return request({ url, pre })
  }
}

export const store = new Store()