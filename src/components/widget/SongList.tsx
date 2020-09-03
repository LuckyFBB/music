/*
 * @Author: FBB
 * @Date: 2019-09-08 16:49:52
 * @LastEditors: FBB
 * @LastEditTime: 2020-09-03 15:14:41
 * @Description: 歌曲展示列表
 */

import React, { useCallback, useEffect } from "react";
import play from "@/static/icon/play.png";
import more from "@/static/icon/more_gray.png";
import { connect } from "react-redux";
import {
  changeCurrentIndexAction,
  changePlayIdAction,
  changeCurrentSongAction,
  changePlayListAction,
  initSequenceListAction,
  changePlayStateAction,
} from "@/actions/playAction";
import { PLAY_TYPE } from "@/share/enums";
import { randomList } from "@/utils/utils";
import BScroll from "better-scroll";
import { Scroll } from "./Scroll";

interface ISProp {
  history: any;
  currentAlbum: any;
  totalCount: number;
  type?: string;
  playMode: number;
  changePlayId: Function;
  changePlayList: Function;
  changePlayState: Function;
  initSequenceList: Function;
  changeCurrentSong: Function;
  changeCurrentIndex: Function;
}

const SongList = (props: ISProp) => {
  const {
    playMode,
    changeCurrentIndex,
    changePlayId,
    currentAlbum,
    totalCount,
    changeCurrentSong,
    initSequenceList,
    type,
    changePlayList,
    changePlayState,
  } = props;

  const handleClick = (id: string, index: number) => {
    changeCurrentIndex(index);
    changePlayId(id);
    playMode === PLAY_TYPE.PLAY_RANDOM
      ? changePlayList(randomList(currentAlbum.tracks))
      : changePlayList(currentAlbum.tracks);
    initSequenceList(currentAlbum.tracks);
    changeCurrentSong(currentAlbum.tracks[index]);
    changePlayState(true);
  };

  return (
    <div className="songlist">
      <div className="songlist__header">
        <div className="left">
          <img src={play} alt="播放" />
          <span className="title">
            播放全部<span className="subtitle">共{totalCount}首</span>
          </span>
        </div>
        {type !== "singer" && (
          <div className="right">
            <div className="button">收藏歌单</div>
          </div>
        )}
      </div>
      <Scroll>
        <div className="songlist__content">
          {currentAlbum.tracks &&
            currentAlbum.tracks.map((item: any, index: number) => {
              const ar = item.ar || item.artists;
              const al = item.al || item.album;
              return (
                <div
                  className="item"
                  key={item.id}
                  onClick={() => handleClick(item.id, index)}
                >
                  <span className="index">{index + 1}</span>
                  <div className="content">
                    <p className="song">{item.name}</p>
                    <p className="ar">
                      {ar.map((item: any) => (
                        <span key={item.name}>{item.name}</span>
                      ))}
                      <span>-</span>
                      <span>{al.name}</span>
                    </p>
                  </div>
                  <img src={more} alt="更多" />
                </div>
              );
            })}
        </div>
      </Scroll>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  currentIndex: state.playReducer.currentIndex,
  currentAlbum: state.albumReducer.currentAlbum,
  totalCount: state.albumReducer.totalCount,
  playMode: state.playReducer.playMode,
});

const mapDispatchToProps = (dispatch: Function) => ({
  changeCurrentIndex: (index: number) =>
    dispatch(changeCurrentIndexAction(index)),
  changePlayId: (index: number) => dispatch(changePlayIdAction(index)),
  changeCurrentSong: (song: {}) => {
    dispatch(changeCurrentSongAction(song));
  },
  changePlayList: (list: []) => {
    dispatch(changePlayListAction(list));
  },
  initSequenceList: (list: []) => {
    dispatch(initSequenceListAction(list));
  },
  changePlayState: (state: boolean) => {
    dispatch(changePlayStateAction(state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
