/*
 * @Author: FBB
 * @Date: 2019-12-12 16:55:11
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-04 19:21:09
 * @Description: 请求集和
 */
import request from "@/utils/request";

/**
 * @description: 音乐是否可用
 * @param {string} id -歌曲id
 * @return:
 * @author: FBB
 */
export const checkMusic = (id: string) => {
  const url = "/check/music";
  const params = { id };
  return request({ url, params });
};

/**
 * @description: 获取banner
 * @param {number} type -资源类型
 * @return:
 * @author: FBB
 */
export const getBanner = (type: number) => {
  const url = "/banner";
  const params = {
    type,
  };
  return request({ url, params });
};

/**
 * @description: 获取推荐歌单
 * @param {number} limit -取出数量,默认为 30
 * @return:
 * @author: FBB
 */
export const getPersonalized = (limit: number) => {
  const url = "/personalized";
  const params = {
    limit,
  };
  return request({ url, params });
};

/**
 * @description: 获取排行榜详情
 * @param
 * @return:
 * @author: FBB
 */
export const getTopListDetail = () => {
  const url = "/toplist/detail";
  return request({ url });
};

/**
 * @description: 获取歌单分类详情
 * @return:
 * @author: FBB
 */
export const getHotPlay = () => {
  const url = "/playlist/hot";
  return request({ url });
};
/**
 * @description: 获取歌单详情
 * @param {string} cat - 类别
 * @return:
 * @author: FBB
 */
export const getHotPlayDetail = (cat: string) => {
  const url = "/top/playlist";
  const params = {
    cat,
    limit: 51,
  };
  return request({ url, params });
};

/**
 *
 */
/**
 * @description: 获取歌手分类
 * @param {number} type  -歌手类型
 * @param {number} area  -歌手类型
 * @param {string} initial -首字母索引查找参数
 * @param {number} offset -偏移数量，用于分页
 * @param {number} limit -数量
 * @return:
 * @author: FBB
 */
export const getCategorySinger = (
  type: number,
  area: number,
  initial?: string,
  offset?: number,
  limit?: number
) => {
  const url = "/artist/list";
  const params = {
    type,
    area,
    initial,
    offset,
    limit: 20,
  };
  return request({ url, params });
};

/**
 * 通过邮箱登录
 */
/**
 * @description:
 * @param {string} email -163 网易邮箱
 * @param {string} password -密码
 * @return:
 * @author: FBB
 */
export const submitLoginByEmail = (email: string, password: string) => {
  const url = "/login";
  const params = {
    email,
    password,
  };
  return request({ url, params });
};

/**
 * @description: 获取歌单下的歌曲详情
 * @param {string} id -歌单id
 * @return:
 * @author: FBB
 */
/**
 *
 */
export const getPlayDetail = (id: string) => {
  const url = "/playlist/detail";
  const params = {
    id,
  };
  return request({ url, params });
};

/**
 * @description: 获取歌手歌曲列表
 * @param {string} 歌手 id
 * @return:
 * @author: FBB
 */
export const getSingerPlayDetail = (id: string) => {
  const url = "/artists";
  const params = {
    id,
  };
  return request({ url, params });
};

/**
 * @description: 用户详情资料，需要登录
 * @param {type}
 * @return:
 * @author: FBB
 */
export const getUserDetail = (uid: string) => {
  const url = "/user/detail";
  const params = {
    uid,
  };
  return request({ url, params });
};

/**
 * @description: 获取每日推荐歌曲，需要登录
 * @param {type}
 * @return:
 */
export const getRecommendSongs = () => {
  const url = "/recommend/songs";
  return request({ url });
};

/**
 * @description: 获取每日推荐歌单，需要登录
 * @param {type}
 * @return:
 * @author: FBB
 */
export const getRecommendResource = () => {
  const url = "/recommend/resource";
  return request({ url });
};

/**
 * @description: 获取用户当前登陆状态
 * @param {type}
 * @return:
 * @author: FBB
 */
export const comfirmLoginStatus = () => {
  const url = "/login/status";
  return request({ url });
};

/**
 * @description: 获取默认搜索关键字
 * @param {type}
 * @return:
 * @author: FBB
 */
export const getSearchDefault = () => {
  const url = "/search/default";
  return request({ url });
};

/**
 * @description: 获取热门搜索
 * @param {type}
 * @return:
 * @author: FBB
 */
export const getSearchHotDetail = () => {
  const url = "/search/hot/detail";
  return request({ url });
};

/**
 * @description:
 * @param {type}
 * @return:
 */
export const getSearchKeywords = (keywords: string) => {
  const url = "/search";
  const params = {
    keywords,
  };
  return request({ url, params });
};

/**
 * @description: 退出登录
 * @param {type}
 * @return:
 */
export const loginOut = () => {
  const url = "/logout";
  return request({ url });
};

/**
 * @description: 刷新登录状态
 * @param {type}
 * @return:
 */
export const refreshLogin = () => {
  const url = "/login/refresh";
  return request({ url });
};

/**
 * @description: 获取用户信息 , 歌单，收藏，mv, dj 数量
 * @param {type}
 * @return:
 */
export const getUserSubcount = () => {
  const url = "/user/subcount";
  return request({ url });
};

/**
 * @description: 获取歌曲详情
 * @param {id}
 * @return:
 * @author: FBB
 */
export const getSongDetail = (id: string) => {
  const url = "/song/detail";
  const params = {
    ids: id,
  };
  return request({ url, params });
};

/**
 * @description: 获取歌曲url
 * @param {id}
 * @return:
 * @author: FBB
 */
export const getSongUrl = (id: string) => {
  const url = "/song/url";
  const params = {
    id,
  };
  return request({ url, params });
};
