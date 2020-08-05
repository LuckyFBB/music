/*
 * @Author: FBB
 * @Date: 2019-12-03 16:04:03
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-05 16:39:01
 * @Description:
 */

export const initShowListAction = (list: []) => ({
  type: "INIT_SHOW_LIST",
  preload: list,
});

export const changePlayListAction = (list: []) => ({
  type: "CHANGE_PLAY_LIST",
  preload: list,
});

export const changeCurrentIndexAction = (index: number) => ({
  type: "CHANGE_CURRENTINDEX",
  preload: index,
});

export const changePlayIdAction = (id: number) => ({
  type: "CHANGE_PLAY_ID",
  preload: id,
});

export const changePlayStateAction = (status: boolean) => ({
  type: "CHANGE_PLAY_STATE",
  preload: status,
});

export const changePlayModeAction = (mode: number) => ({
  type: "CHANGE_PLAY_MODE",
  preload: mode,
});
