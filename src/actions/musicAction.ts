/*
 * @Author: FBB
 * @Date: 2020-08-04 14:11:07
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-27 17:07:59
 * @Description:
 */

export const changeMusicTag = (tag: string) => ({
  type: "CHANGE_MUSIC_TAG",
  preload: tag,
});

export const changeSingerTag = (tag: string) => ({
  type: "CHANGE_SINGER_TAG",
  preload: tag,
});

export const changeSingerListAction = (list: []) => ({
  type: "CHANGE_SINGER_LIST",
  preload: list,
});
