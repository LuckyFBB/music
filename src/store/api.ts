/*
 * @Author: FBB
 * @Date: 2019-12-12 16:55:11
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-12 16:57:13
 * @Description: 请求集和
 */
import request from "@/utils/request";

export const checkMusic = (id: string) => {
  const url = "/check/music";
  const params = { id };
  return request({ url, params });
};
