import { PLAY_TYPE } from "@/share/enums";

/*
 * @Author: FBB
 * @Date: 2019-12-03 16:09:18
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-06 14:59:25
 * @Description: 播放列表reducer
 */
interface IState {
  sequenceList: any[];
  playList: any[];
  playStatus: true;
  playMode: number;
  playId: number;
  currentIndex: number;
  currentSong: {};
}

export const InitialState: IState = {
  sequenceList: [],
  playList: [],
  playStatus: true,
  playMode: PLAY_TYPE.PLAY_LOOP,
  playId: 0,
  currentSong: {},
  currentIndex: -1,
};

export const playReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case "INIT_SEQUENCE_LIST":
      return Object.assign({}, state, { sequenceList: action.preload });
    case "CHANGE_CURRENT_INDEX":
      return Object.assign({}, state, { currentIndex: action.preload });
    case "CHANGE_CURRENT_SONG":
      return Object.assign({}, state, { currentSong: action.preload });
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
