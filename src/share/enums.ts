/*
 * @Author: FBB
 * @Date: 2019-08-25 21:31:03
 * @LastEditors: FBB
 * @LastEditTime: 2020-07-07 17:08:19
 */
import rank from "@/static/home/rank.png";
import recommend from "@/static/home/recommend.png";
import music from "@/static/home/music.png";
import radio from "@/static/home/radio.png";
import more from "@/static/icon/more.png";
import collect from "@/static/icon/collect.png";
import like from "@/static/icon/like.png";
import comment from "@/static/icon/comment.png";
import mine from "@/static/icon/mine.png";
import mine_active from "@/static/icon/mine_active.png";
import singer from "@/static/icon/singer.png";
import singer_active from "@/static/icon/singer_active.png";
import account from "@/static/icon/account.png";
import account_active from "@/static/icon/account_active.png";
import home from "@/static/icon/home.png";
import home_active from "@/static/icon/home_active.png";
import play_loop from "@/static/playBar/play_loop.png";
import play_once from "@/static/playBar/play_once.png";
import play_random from "@/static/playBar/play_random.png";

export const HOME_ICONS = {
  RECOMMEND: "每日推荐",
  MUSIC: "榜单",
  RADIO: "电台",
  RANK: "排行榜",
};

export const HOME_PATH = {
  RECOMMEND: "recommend",
  MUSIC: "music",
  RADIO: "radio",
  RANK: "rank",
};

export const HOME_ICONS_OPTIONS = [
  [HOME_PATH.RECOMMEND, HOME_ICONS.RECOMMEND, recommend],
  [HOME_PATH.MUSIC, HOME_ICONS.MUSIC, music],
  [HOME_PATH.RADIO, HOME_ICONS.RADIO, radio],
  [HOME_PATH.RANK, HOME_ICONS.RANK, rank],
];

/*
 * 歌单详情页面操作
 */
export const ACTION_MAP = [
  {
    icon: comment,
    title: "评论",
  },
  {
    icon: like,
    title: "点赞",
  },
  {
    icon: collect,
    title: "收藏",
  },
  {
    icon: more,
    title: "更多",
  },
];

/*
 * 歌手分类
 */
export const TAG_LIST = [
  {
    name: "热门",
    id: 0,
  },
  {
    name: "华语男歌手",
    id: 1001,
  },
  {
    name: "华语女歌手",
    id: 1002,
  },
  {
    name: "华语组合/乐队 ",
    id: 1003,
  },
  {
    name: "欧美男歌手",
    id: 2001,
  },
  {
    name: "欧美女歌手",
    id: 2002,
  },
  {
    name: "欧美组合/乐队",
    id: 2003,
  },
  {
    name: "日本男歌手",
    id: 6001,
  },
  {
    name: "日本女歌手",
    id: 6002,
  },
  {
    name: "日本组合/乐队",
    id: 6003,
  },
  {
    name: "韩国男歌手",
    id: 7001,
  },
  {
    name: "韩国女歌手",
    id: 7002,
  },
  {
    name: "韩国组合/乐队",
    id: 7003,
  },
  {
    name: "其他男歌手",
    id: 4001,
  },
  {
    name: "其他女歌手",
    id: 4002,
  },
  {
    name: "其他组合/乐队",
    id: 4003,
  },
];

/*
 * 底部导航栏
 */
export const TAB_MAP = [
  {
    key: "home",
    title: "发现",
    default_img: home,
    active_img: home_active,
  },
  {
    key: "singer",
    title: "歌手",
    default_img: singer,
    active_img: singer_active,
  },
  {
    key: "mine",
    title: "我的",
    default_img: mine,
    active_img: mine_active,
  },
  {
    key: "account",
    title: "账号",
    default_img: account,
    active_img: account_active,
  },
];

/**
 * 播放方式
 */
export enum PLAY_TYPE {
  PLAY_ONCE = 0,
  PLAY_LOOP = 1,
  PLAY_RANDOM = 2,
}

export const PLAY_TYPE_OPTIONS = [
  [PLAY_TYPE.PLAY_ONCE, "单曲循环"],
  [PLAY_TYPE.PLAY_LOOP, "列表循环"],
  [PLAY_TYPE.PLAY_RANDOM, "随机播放"],
];

export const PLAY_TYPE_IMG: Array<[any, any]> = [
  [PLAY_TYPE.PLAY_ONCE, play_once],
  [PLAY_TYPE.PLAY_LOOP, play_loop],
  [PLAY_TYPE.PLAY_RANDOM, play_random],
];
