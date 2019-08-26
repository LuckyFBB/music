/*
 * @Author: FBB
 * @Date: 2019-08-23 09:15:31
 * @LastEditors: FBB
 * @LastEditTime: 2019-08-26 21:09:14
 * @Description: 所有请求
 */

import request from "../utils/request";

class Store {
  //获取banner
  public getBanner = (type: number) => {
    const url = '/banner'
    const params = {
      type
    }
    return request({ url, params })
  }

  //获取推荐歌单
  public getPersonalized = (limit: number) => {
    const url = '/personalized'
    const pre = {
      limit
    }
    return request({ url, pre })
  }

  //获取排行榜详情
  public getTopListDetail = () => {
    const url = '/toplist/detail'
    return request({ url })
  }
}

export const store = new Store()