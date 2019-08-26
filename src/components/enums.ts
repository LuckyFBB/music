/*
 * @Author: FBB
 * @Date: 2019-08-25 21:31:03
 * @LastEditors: FBB
 * @LastEditTime: 2019-08-26 20:21:24
 */
import rank from '../static/home/rank.png'
import recommend from '../static/home/recommend.png'
import music from '../static/home/music.png'
import radio from '../static/home/radio.png'

export const HOME_ICONS = {
  RECOMMEND: '每日推荐',
  MUSIC: '榜单',
  RADIO: '电台',
  RANK: '排行榜'
}

export const HOME_PATH = {
  RECOMMEND: '/recommend',
  MUSIC: 'music',
  RADIO: 'radio',
  RANK: 'rank'
}

export const HOME_ICONS_OPTIONS = [
  [HOME_PATH.RECOMMEND,HOME_ICONS.RECOMMEND, recommend],
  [HOME_PATH.MUSIC, HOME_ICONS.MUSIC, music],
  [HOME_PATH.RADIO, HOME_ICONS.RADIO, radio],
  [HOME_PATH.RANK, HOME_ICONS.RANK, rank],
]