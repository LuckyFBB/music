/*
 * @Author: FBB
 * @Date: 2019-08-27 21:35:13
 * @LastEditors: FBB
 * @LastEditTime: 2020-11-09 22:12:26
 * @Description: 首页榜单组件
 */

import React, { useState, useEffect, useRef } from "react";
import { TopTab } from "@/components/widget/TopTab";
import { getHotPlayDetail, getHotPlay } from "@/store/api";
import { TabBar } from "@/components/widget/TabBar";
import { SongBlock } from "@/components/widget/SongBlock";
import left from "@/static/icon/left_arrow.png";
import { connect } from "react-redux";
import { changeMusicTag } from "actions/musicAction";
import { Scroll } from "./widget/Scroll";
import BScrollConstructor from "better-scroll";

const Music = (props: any) => {
  const { musicTag, changeTag } = props;
  const [hotPlayList, setHotPlayList]: [
    Array<{ [propName: string]: string | number }>,
    Function
  ] = useState([]);
  const [hotTagList, setHotTagList]: [[], Function] = useState([]);
  const scrollRef = useRef<BScrollConstructor>();
  const [page, setPage] = useState(0); //当前分页页数
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    getTagList();
  }, []);

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current && scrollRef.current.refresh();
    }
  }, [musicTag]);

  const handleBack = () => {
    props.history.go(-1);
  };

  const getHotPlayDetailFunc = (item: any) => {
    changeTag(item.name);
    getHotPlayDetail(item.name, 0).then((res: any) => {
      const playlists = res.playlists;
      setHotPlayList(playlists);
      setPage(page + 1);
      setHasMore(res.more);
    });
  };

  //处理获取更多singerlist
  const getMoreHotPlay = () => {
    getHotPlayDetail(musicTag, page).then((res: any) => {
      setHotPlayList([...hotPlayList, ...res.playlists]);
      setHasMore(res.more);
      setPage(page + 1);
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
      <TopTab left={left} onLeft={handleBack}>
        <div className="top__container">
          <p className="top__text">歌单广场</p>
        </div>
      </TopTab>
      <TabBar
        current={musicTag}
        tagList={hotTagList}
        onChange={getHotPlayDetailFunc}
      />
      <Scroll ref={scrollRef} pullUpStatus={hasMore} pullUp={getMoreHotPlay}>
        <SongBlock list={hotPlayList} onClick={redirectToSonglistDetail} />
      </Scroll>
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
