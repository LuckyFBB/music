/*
 * @Author: FBB
 * @Date: 2019-12-12 17:25:26
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-04 15:13:52
 * @Description:
 */
import { combineReducers } from "redux";
import { playReducer } from "./playReducer";
import { musicReducer } from "./musicReducer";

export default combineReducers({
  playReducer,
  musicReducer,
});
