/*
 * @Author: FBB
 * @Date: 2019-12-12 17:13:16
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-06 10:08:40
 * @Description: reducer包裹器
 */
import { createStore, compose } from "redux";

import reducer from "@/reducers";
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers());

export default store;
