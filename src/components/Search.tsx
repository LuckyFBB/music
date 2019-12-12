/*
 * @Author: FBB
 * @Date: 2019-09-16 22:09:04
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-12 15:58:22
 * @Description: 搜索页面
 */

import React, { useEffect, useState } from "react";
import { TopTab } from "@/components/widget/TopTab";
import left from "@/static/icon/left_arrow.png";
import search from "@/static/icon/search.png";
import cancel from "@/static/icon/cancel.png";
import { store } from "@/store/store";
import { SearchList } from "@/components/widget/SearchList";

export const Search = (props: any) => {
  const [hotList, setHotList]: [
    Array<{ [propName: string]: string }>,
    Function
  ] = useState([]);
  const [searchList, setSearchList]: [
    Array<{ [propName: string]: string }>,
    Function
  ] = useState([]);
  const [status, setStatus] = useState(false); //false显示搜索按钮，true显示取消搜索
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
      setHotList(res.data);
    });
  };

  const handleBack = () => {
    props.history.go(-1);
  };

  const getSearchKeywords = (key: string) => {
    store.getSearchKeywords(key).then((res: any) => {
      setSearchList(res.result.songs);
    });
  };

  const handleSearch = (value?: string | undefined) => {
    value = value ? value : searchValue;
    setStatus(!status);
    !status && getSearchKeywords(value); //取消的时候，不请求接口
  };

  return (
    <div className="search">
      <TopTab
        type="search"
        left={left}
        onLeft={handleBack}
        right={status ? cancel : search}
        placeholder={placeholder}
        onRight={handleSearch}
      />
      {status ? (
        <div className="search__hot">
          <SearchList list={searchList} title="搜索结果" type="content" />
        </div>
      ) : (
        <div className="search__hot">
          <SearchList hot={hotList} title="热搜榜" type="hot" />
        </div>
      )}
    </div>
  );
};
