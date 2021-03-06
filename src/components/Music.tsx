/*
 * @Author: FBB
 * @Date: 2019-08-27 21:35:13
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-16 17:16:49
 * @Description: 首页榜单组件
 */

import React, { useState, useEffect } from "react";
import { TopTab } from "@/components/widget/TopTab";
import { getHotPlayDetail, getHotPlay } from "@/store/api";
import { TabBar } from "@/components/widget/TabBar";
import { SongBlock } from "@/components/widget/SongBlock";
import left from "@/static/icon/left_arrow.png";
import { connect } from "react-redux";
import { changeMusicTag } from "actions/musicAction";

const Music = (props: any) => {
  const { musicTag, changeTag } = props;
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

  const getHotPlayDetailFunc = (item: any) => {
    changeTag(item.name);
    getHotPlayDetail(item.name).then((res: any) => {
      const playlists = res.playlists;
      if (item.name === "华语" || item.name === "流行") {
        playlists.splice(0, 1);
      }
      setHotPlayList(playlists);
    });
  };

  const getTagList = () => {
    getHotPlay().then((res: any) => {
      setHotTagList(res.tags);
      getHotPlayDetailFunc({ name: musicTag });
    });
  };

  const redirectToSonglistDetail = (id: number) => {
    props.history.push(`/music/${id}`);
  };

  return (
    <div className="music">
      <TopTab text="歌单广场" left={left} type="text" onLeft={handleBack} />
      <TabBar
        current={musicTag}
        tagList={hotTagList}
        onChange={getHotPlayDetailFunc}
      />
      <div className="music__content">
        <SongBlock list={hotPlayList} onClick={redirectToSonglistDetail} />
      </div>
    </div>
  );
};

const mapStateProps = (state: any) => ({
  musicTag: state.musicReducer.musicTag,
});

const mapDispatchToProps = (dispatch: Function) => ({
  changeTag: (tag: string) => dispatch(changeMusicTag(tag)),
});

export default connect(mapStateProps, mapDispatchToProps)(Music);
