/*
 * @Author: FBB
 * @Date: 2019-08-27 21:35:13
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-08 20:07:57
 * @Description: 首页榜单组件
 */

import React, { useState, useEffect } from "react";
import { TopTab } from "./widget/TopTab";
import { store } from "../store/store";
import { TabBar } from "./widget/TabBar";
import { SongBlock } from "./widget/SongBlock";

export const Music = (props: any) => {
  const [tag, setTag] = useState("");
  const [hotPlayList, setHotPlayList]: [
    Array<{ [propName: string]: string | number }>,
    Function
  ] = useState([]);
  const [hotTagList, setHotTagList]: [[], Function] = useState([]);

  useEffect(() => {
    getTagList();
  }, []);
  const handleBack = () => {
    props.history.go(-1);
  };

  const getHotPlayDetail = (item: any) => {
    setTag(item.name);
    store.getHotPlayDetail(item.name).then((res: any) => {
      setHotPlayList(res.playlists);
    });
  };

  const getTagList = () => {
    store.getHotPlay().then((res: any) => {
      setHotTagList(res.tags);
      getHotPlayDetail(res.tags[0]);
    });
  };

  const redirectToSonglistDetail = (id: string) => {
    props.history.push(`/songlist/${id}`);
  };

  return (
    <div className="music">
      <TopTab text="歌单广场" left={true} type="text" onLeft={handleBack} />
      <TabBar current={tag} tagList={hotTagList} onChange={getHotPlayDetail} />
      <div className="music__content">
        <SongBlock list={hotPlayList} onClick={redirectToSonglistDetail} />
      </div>
    </div>
  );
};
