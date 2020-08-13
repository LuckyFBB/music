/*
 * @Author: FBB
 * @Date: 2020-08-04 14:16:26
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-04 19:10:31
 * @Description:
 */

interface IState {
  musicTag: string;
  singerTag: string;
}

interface IAction {
  preload: any;
  type: string;
}

export const InitialState: IState = {
  musicTag: "华语",
  singerTag: "华语男歌手",
};

export const musicReducer = (state = InitialState, action: IAction) => {
  switch (action.type) {
    case "CHANGE_MUSIC_TAG":
      return Object.assign({}, state, { musicTag: action.preload });
    case "CHANGE_SINGER_TAG":
      return Object.assign({}, state, { singerTag: action.preload });
    default:
      return state;
  }
};
