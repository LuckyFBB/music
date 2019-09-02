/*
 * @Author: FBB
 * @Date: 2019-08-27 21:35:13
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-02 23:25:35
 * @Description: 首页榜单组件
 */

import React, { useState } from "react";
import { TopTab } from "./widget/TopTab";
import { store } from "../store/store";
import { TabBar } from "./widget/TabBar";
import { SongList } from "./widget/SongList";

export const Music = (props: any) => {
  const [hotPlayList, setHotPlayList]: [
    Array<{ [propName: string]: string | number }>,
    Function
  ] = useState([]);
  const handleBack = () => {
    props.history.go(-1);
  };

  const getHotPlayDetail = (tag: string) => {
    store.getHotPlayDetail(tag).then((res: any) => {
      setHotPlayList(res.playlists);
    });
  };

  return (
    <div className="music">
      <TopTab text="歌单广场" left={true} type="text" onLeft={handleBack} />
      <TabBar changHotPlayDetail={getHotPlayDetail} />
      <div className="music__content">
        <SongList list={hotPlayList} />
      </div>
    </div>
  );
};
