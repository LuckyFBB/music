/*
 * @Author: FBB
 * @Date: 2019-12-12 17:25:26
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-06 11:09:50
 * @Description:
 */
import { combineReducers } from "redux";
import { playReducer } from "./playReducer";
import { musicReducer } from "./musicReducer";
import { albumReducer } from "./albumReducer";

export default combineReducers({
  playReducer,
  musicReducer,
  albumReducer,
});
