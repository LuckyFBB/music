/*
 * @Author: FBB
 * @Date: 2019-08-23 09:15:31
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-18 23:02:46
 * @Description: 所有请求
 */

import request from "../utils/request";

class Store {
  /**
   * 设置localStorage
   */
  public setStorage = (key: string, value: string) => {
    window.localStorage.setItem(key, value);
  };

  /**
   * 获取localStorage
   */
  public getStorage = (key: string) => {
    return window.localStorage.getItem(key) || undefined;
  };

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

  /**
   *获取歌手歌曲列表
   */
  public getSingerPlayDetail = (id: string) => {
    const url = "artists";
    const params = {
      id
    };
    return request({ url, params });
  };

  /**
   * @description: 用户详情资料，需要登录
   * @param {type}
   * @return:
   * @author: FBB
   */
  public getUserDetail = (uid: string) => {
    const url = "/user/detail";
    const params = {
      uid
    };
    return request({ url, params });
  };

  /**
   * @description: 获取每日推荐歌曲，需要登录
   * @param {type}
   * @return:
   */
  public getRecommendSongs = () => {
    const url = "/recommend/songs";
    return request({ url });
  };

  /**
   * @description: 获取每日推荐歌单，需要登录
   * @param {type}
   * @return:
   * @author: FBB
   */
  public getRecommendResource = () => {
    const url = "/recommend/resource";
    return request({ url });
  };

  /**
   * @description: 获取用户当前登陆状态
   * @param {type}
   * @return:
   * @author: FBB
   */
  public comfirmLoginStatus = () => {
    const url = "/login/status";
    return request({ url });
  };

  /**
   * @description: 获取默认搜索关键字
   * @param {type}
   * @return:
   * @author: FBB
   */
  public getSearchDefault = () => {
    const url = "/search/default";
    return request({ url });
  };

  /**
   * @description: 获取热门搜索
   * @param {type}
   * @return:
   * @author: FBB
   */
  public getSearchHotDetail = () => {
    const url = "/search/hot/detail";
    return request({ url });
  };

  /**
   * @description:
   * @param {type}
   * @return:
   */
  public getSearchKeywords = (keywords: string) => {
    const url = "/search";
    const params = {
      keywords
    };
    return request({ url, params });
  };
}

export const store = new Store();
