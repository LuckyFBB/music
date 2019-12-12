/*
 * @Author: FBB
 * @Date: 2019-12-12 15:01:04
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-12 20:56:51
 * @Description: 某些工具类方法集和
 */

export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export const getStorage = (key: string) => {
  return localStorage.getItem(key);
};

/**
 * @description: 获得Options渲染值
 */
export const getOptionsVlaue = (options: Array<[any, any]>, value: any) => {
  const target = options.find(_ => _[0] === value);
  return target ? target[1] : "";
};
