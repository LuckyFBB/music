import { PLAY_TYPE } from "@/share/enums";

/*
 * @Author: FBB
 * @Date: 2019-12-03 16:09:18
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-12 20:53:57
 * @Description: 播放列表reducer
 */
interface IState {
  showList: any[];
  playList: any[];
  playStatus: true;
  playMode: number;
}

export const InitialState: IState = {
  showList: [],
  playList: [],
  playStatus: true,
  playMode: PLAY_TYPE.PLAY_LOOP
};

export const playReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case "INIT_LIST":
      return Object.assign({}, state, { showList: action.preload });
    case "CHANGE_PALY_STATE":
      return Object.assign({}, state, { playStatus: action.preload });
    case "CHANGE_PLAY_MODE":
      return Object.assign({}, state, { playMode: action.preload });
    default:
      return state;
  }
};
