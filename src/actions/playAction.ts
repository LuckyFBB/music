/*
 * @Author: FBB
 * @Date: 2019-12-03 16:04:03
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-12 20:51:56
 * @Description:
 */

export const initList = (list: []) => ({
  type: "INIT_LIST",
  preload: list
});

export const changePlayState = (status: boolean) => ({
  type: "CHANGE_PALY_STATE",
  preload: status
});

export const changePlayMode = (mode: number) => ({
  type: "CHANGE_PLAY_MODE",
  preload: mode
});
