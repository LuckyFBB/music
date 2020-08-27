/*
 * @Author: FBB
 * @Date: 2020-08-04 14:16:26
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-27 17:06:34
 * @Description:
 */

interface IState {
  musicTag: string;
  singerTag: string;
  singerList: [];
}

interface IAction {
  preload: any;
  type: string;
}

export const InitialState: IState = {
  musicTag: "华语",
  singerTag: "华语男歌手",
  singerList: [],
};

export const musicReducer = (state = InitialState, action: IAction) => {
  switch (action.type) {
    case "CHANGE_MUSIC_TAG":
      return Object.assign({}, state, { musicTag: action.preload });
    case "CHANGE_SINGER_TAG":
      return Object.assign({}, state, { singerTag: action.preload });
    case "CHANGE_SINGER_LIST":
      return Object.assign({}, state, { singerList: action.preload });
    default:
      return state;
  }
};
