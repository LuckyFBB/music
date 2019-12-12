/*
 * @Author: FBB
 * @Date: 2019-12-12 17:13:16
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-12 19:32:46
 * @Description: reducer包裹器
 */
import { createStore } from "redux";

import reducer from "@/reducers";

const store = createStore(reducer);

export default store;
