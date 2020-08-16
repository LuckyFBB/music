/*
 * @Author: FBB
 * @Date: 2019-12-12 15:01:04
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-16 21:20:22
 * @Description: 某些工具类方法集和
 */

/**
 * @description: 设置localStorage
 */
export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

/**
 * @description: 获取localStorage
 */
export const getStorage = (key: string) => {
  return localStorage.getItem(key);
};

/**
 * @description: 获得Options渲染值
 */
export const getOptionsVlaue = (options: Array<[any, any]>, value: any) => {
  const target = options.find((_) => _[0] === value);
  return target ? target[1] : "";
};

/**
 * @description: 随机数
 * @param {type}
 * @return {type}
 * @author: FBB
 */
export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * @description: 随机排列歌曲顺序
 * @param {array} list -需要排序的列表
 * @return {type}
 * @author: FBB
 */
export const randomList = (list: []) => {
  const new_arr: [] = [];
  list.forEach((item) => new_arr.push(item));
  for (let i = 0; i < new_arr.length; i++) {
    let j = getRandomInt(0, i);
    const temp = new_arr[i];
    new_arr[i] = new_arr[j];
    new_arr[j] = temp;
  }
  return new_arr;
};

/**
 * @description: 根据歌曲查找它在列表的index
 * @param {object} song -待查找歌曲
 * @param {array} list -查找列表
 * @return {type}
 * @author: FBB
 */
export const findIndex = (song: any, list: []) => {
  return list.findIndex((item: any) => {
    return item.id === song.id;
  });
};

/**
 * @description: 判断对象是否为空
 * @param {object} obj -待判断对象
 * @return {type}
 * @author: FBB
 */

export const isEmptyObject = (obj: any) =>
  !obj || Object.keys(obj).length === 0;

/**
 * @description:
 * @param {type}
 * @return {type}
 * @author: FBB
 */

export const getUrlForSong = (id: number) =>
  `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
