/*
 * @Author: FBB
 * @Date: 2020-08-06 10:49:53
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-06 11:06:11
 * @Description: album的action
 */

export const initCurrentAlbumAction = (album: {}) => ({
  type: "INIT_CURRENT_ALBUM",
  preload: album,
});

export const changeTotalCountAction = (number: number) => ({
  type: "CHANGE_TOTAL_COUNT",
  preload: number,
});
