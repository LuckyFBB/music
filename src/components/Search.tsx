/*
 * @Author: FBB
 * @Date: 2019-09-16 22:09:04
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-16 22:21:37
 * @Description: 搜索页面
 */

import React from "react";
import { TopTab } from "./widget/TopTab";
import left from "../static/icon/left_arrow.png";
import search from "../static/icon/search.png";

export const Search = (props: any) => {
  const handleBack = () => {
    props.history.go(-1);
  };
  return (
    <div>
      <TopTab type="search" left={left} onLeft={handleBack} right={search} />
    </div>
  );
};
