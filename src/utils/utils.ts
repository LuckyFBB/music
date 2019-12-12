/*
 * @Author: FBB
 * @Date: 2019-12-12 15:01:04
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-12 15:06:27
 * @Description: 某些工具类方法集和
 */

export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export const getStorage = (key: string) => {
  return localStorage.getItem(key);
};
