import request from "../utils/request";

/*
 * @Author: FBB
 * @Date: 2019-08-22 22:22:45
 * @LastEditors: FBB
 * @LastEditTime: 2019-08-22 22:26:45
 */
class Store {
  public getBannerList = (type: number) => {
    const url = '/banner'
    const pre = {
      type: type
    }
    return request({ url, pre })
  }
}

export const store = new Store()