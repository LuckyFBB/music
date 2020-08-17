/*
 * @Author: FBB
 * @Date: 2019-12-03 16:04:03
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-17 21:15:44
 * @Description:
 */

export const initSequenceListAction = (list: []) => ({
  type: "INIT_SEQUENCE_LIST",
  preload: list,
});

export const changePlayListAction = (list: []) => ({
  type: "CHANGE_PLAY_LIST",
  preload: list,
});

export const changeCurrentIndexAction = (index: number) => ({
  type: "CHANGE_CURRENT_INDEX",
  preload: index,
});

export const changeCurrentSongAction = (song: {}) => ({
  type: "CHANGE_CURRENT_SONG",
  preload: song,
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

export const changeFullSreenAction = (isFull: boolean) => ({
  type: "CHANGE_FULLSREEN",
  preload: isFull,
});
