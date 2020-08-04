/*
 * @Author: FBB
 * @Date: 2020-08-04 14:11:07
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-04 15:53:18
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
