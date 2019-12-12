/*
 * @Author: FBB
 * @Date: 2019-12-03 16:09:18
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-08 15:14:58
 * @Description: 播放列表reducer
 */
interface IState {
  showList: any[];
  playList: any[];
  playStatus: string;
}

export const InitialState: IState = {
  showList: [],
  playList: [],
  playStatus: "1"
};

export const list = (state = InitialState, action: any) => {
  switch (action.type) {
    case "INIT_LIST":
      return Object.assign({}, state, { showList: action.preload });
    default:
      return state;
  }
};
