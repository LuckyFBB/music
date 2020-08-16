/*
 * @Author: FBB
 * @Date: 2019-09-08 21:46:38
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-16 20:13:18
 * @Description: 歌手所有歌曲展示
 */

import React, { useEffect, useState, useMemo } from "react";
import { TopTab } from "@/components/widget/TopTab";
import { getSingerPlayDetail } from "@/store/api";
import SongList from "@/components/widget/SongList";
import left from "@/static/icon/left_arrow.png";
import { connect } from "react-redux";
import {
  changePlayListAction,
  initSequenceListAction,
} from "@/actions/playAction";
import {
  changeTotalCountAction,
  initCurrentAlbumAction,
} from "@/actions/albumAction";

const SingerSongList = (props: any) => {
  const { id } = props.match.params;
  const { changePlayList, changeSequenceList, changeTotalCount } = props;
  const [artist, setArtist]: [
    { [propName: string]: string },
    Function
  ] = useState({});

  useEffect(() => {
    getSingerPlayDetailFunc();
  }, []);

  const getSingerPlayDetailFunc = () => {
    getSingerPlayDetail(id).then((res: any) => {
      setArtist(res.artist);
      changeSequenceList(res.hotSongs);
      changePlayList(res.hotSongs);
      changeTotalCount(res.hotSongs.length);
    });
  };

  const handleBack = () => {
    props.history.go(-1);
  };

  return (
    <div className="singerdetail">
      <TopTab onLeft={handleBack} type="text" text={artist.name} left={left} />
      <div className="singerdetail__header">
        <div className="button">收藏歌手</div>
        <img className="img" src={artist.picUrl} alt="" />
      </div>
      <div className="singerdetail__content">
        <SongList history={props.history} type="singer" />
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Function) => ({
  changePlayList: (list: []) => {
    dispatch(changePlayListAction(list));
  },
  changeSequenceList: (list: []) => {
    dispatch(initSequenceListAction(list));
  },
  changeTotalCount: (number: number) => {
    dispatch(changeTotalCountAction(number));
  },
  initCurrentAlbum: (album: {}) => {
    dispatch(initCurrentAlbumAction(album));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingerSongList);
