import { PLAY_TYPE } from "@/share/enums";

/*
 * @Author: FBB
 * @Date: 2019-12-03 16:09:18
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-05 16:37:51
 * @Description: 播放列表reducer
 */
interface IState {
  showList: any[];
  playList: any[];
  playStatus: true;
  playMode: number;
  playId: number;
  currentIndex: number;
}

export const InitialState: IState = {
  showList: [],
  playList: [],
  playStatus: true,
  playMode: PLAY_TYPE.PLAY_LOOP,
  playId: 0,
  currentIndex: -1,
};

export const playReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case "INIT_SHOW_LIST":
      return Object.assign({}, state, { showList: action.preload });
    case "CHANGE_CURRENTINDEX":
      return Object.assign({}, state, { currentIndex: action.preload });
    case "CHANGE_PLAY_ID":
      return Object.assign({}, state, { playId: action.preload });
    case "CHANGE_PLAY_LIST":
      return Object.assign({}, state, { playList: action.preload });
    case "CHANGE_PLAY_STATE":
      return Object.assign({}, state, { playStatus: action.preload });
    case "CHANGE_PLAY_MODE":
      return Object.assign({}, state, { playMode: action.preload });
    default:
      return state;
  }
};
