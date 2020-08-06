/*
 * @Author: FBB
 * @Date: 2020-08-06 10:45:49
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-06 11:10:12
 * @Description: 歌单的reducer
 */

interface IState {
  currentAlbum: {};
  totalCount: number;
}

export const InitialState: IState = {
  currentAlbum: {},
  totalCount: -1,
};

export const albumReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case "INIT_CURRENT_ALBUM":
      return Object.assign({}, state, { currentAlbum: action.preload });
    case "CHANGE_TOTAL_COUNT":
      return Object.assign({}, state, { totalCount: action.preload });
    default:
      return state;
  }
};
