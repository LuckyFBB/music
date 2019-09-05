/*
 * @Author: FBB
 * @Date: 2019-08-23 09:15:31
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-05 22:30:02
 * @Description: 所有请求
 */

import request from "../utils/request";

class Store {
  //获取banner
  public getBanner = (type: number) => {
    const url = "/banner";
    const params = {
      type
    };
    return request({ url, params });
  };

  //获取推荐歌单
  public getPersonalized = (limit: number) => {
    const url = "/personalized";
    const pre = {
      limit
    };
    return request({ url, pre });
  };

  //获取排行榜详情
  public getTopListDetail = () => {
    const url = "/toplist/detail";
    return request({ url });
  };

  //获取歌单分类详情
  public getHotPlay = () => {
    const url = "/playlist/hot";
    return request({ url });
  };

  /* 获取歌单详情 */
  public getHotPlayDetail = (tag: string) => {
    const url = "/top/playlist";
    const params = {
      cat: tag
    };
    return request({ url, params });
  };

  /**
   * 获取歌手热门列表
   */

  public getTopSinger = (offset = 0, limit = 50) => {
    const url = "/top/artists";
    const params = {
      offset,
      limit
    };
    return request({ url, params });
  };

  /**
   * 获取歌手分类
   */
  public getCategorySinger = (
    cat: number,
    initial?: string,
    offset?: number,
    limit?: number
  ) => {
    const url = "/artist/list";
    const params = {
      cat,
      initial,
      offset,
      limit
    };
    return request({ url, params });
  };

  /**
   * 通过邮箱登录
   */
  public submitLoginByEmail = (email: string, password: string) => {
    const url = "/login";
    const params = {
      email,
      password
    };
    return request({ url, params });
  };

  /**
   *获取歌单下的歌曲详情
   */
  public getPlayDetail = (id: string) => {
    const url = "playlist/detail";
    const params = {
      id
    };
    return request({ url, params });
  };
}

export const store = new Store();
