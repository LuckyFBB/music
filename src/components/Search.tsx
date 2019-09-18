/*
 * @Author: FBB
 * @Date: 2019-09-16 22:09:04
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-18 23:04:34
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
  const [searchValue, setSearchValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  useEffect(() => {
    getSearchDefault();
    getSearchHotDetail();
  }, []);

  const getSearchDefault = () => {
    store.getSearchDefault().then((res: any) => {
      //todo
      setPlaceholder(res.data.showKeyword);
      setSearchValue(res.data.realkeyword);
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

  const getSearchKeywords = (key: string) => {
    store.getSearchKeywords(key).then(res => {
      //todo
      console.log(res);
    });
  };

  const handleSearch = (value?: string | undefined) => {
    value = value ? value : searchValue;
    getSearchKeywords(value);
  };
  return (
    <div className="search">
      <TopTab
        type="search"
        left={left}
        onLeft={handleBack}
        right={search}
        placeholder={placeholder}
        onRight={handleSearch}
      />
      <div className="search__content">
        <SearchList list={searchList} title="热搜榜" />
      </div>
    </div>
  );
};
