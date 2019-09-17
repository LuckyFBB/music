/*
 * @Author: FBB
 * @Date: 2019-09-16 22:09:04
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-17 23:04:23
 * @Description: 搜索页面
 */

import React, { useEffect, useState } from "react";
import { TopTab } from "./widget/TopTab";
import left from "../static/icon/left_arrow.png";
import search from "../static/icon/search.png";
import { store } from "../store/store";
import { SearchList } from "./widget/SearchList";

export const Search = (props: any) => {
  const [searchList, setSearchList]: [
    Array<{ [propName: string]: string }>,
    Function
  ] = useState([]);
  useEffect(() => {
    getSearchDefault();
    getSearchHotDetail();
  }, []);

  const getSearchDefault = () => {
    store.getSearchDefault().then((res: any) => {
      //todo
    });
  };

  const getSearchHotDetail = () => {
    store.getSearchHotDetail().then((res: any) => {
      setSearchList(res.data);
    });
  };

  const handleBack = () => {
    props.history.go(-1);
  };
  return (
    <div className="search">
      <TopTab type="search" left={left} onLeft={handleBack} right={search} />
      <div className="search__content">
        <SearchList list={searchList} title='热搜榜'/>
      </div>
    </div>
  );
};
