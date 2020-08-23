/*
 * @Author: FBB
 * @Date: 2020-08-23 16:27:41
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-23 19:40:13
 * @Description: 控制音乐播放
 */

import React from "react";
import { connect } from "react-redux";
import pre from "@/static/playBar/pre.png";
import next from "@/static/playBar/next.png";
import pauseImg from "@/static/playBar/pause.png";
import playImg from "@/static/playBar/play.png";
import list from "@/static/playBar/list.png";
import {
  changePlayModeAction,
  changeCurrentIndexAction,
  changeCurrentSongAction,
  changeFullSreenAction,
  changePlayListAction,
} from "@/actions/playAction";
import { PLAY_TYPE, PLAY_TYPE_IMG } from "@/share/enums";
import { randomList, findIndex, getOptionsVlaue } from "@/utils/utils";

interface ISProps {
  currentTime: number;
  allTime: number;
  playMode: number;
  playStatus: boolean;
  sequenceList: [];
  currentSong: {};
  changeMode: Function;
  changePlayList: Function;
  changeCurrentIndex: Function;
  controlAudio: Function;
  handleChangeCurrentSong: Function;
  setShowPlaylist: Function;
}

const PlayBar = (props: ISProps) => {
  const {
    currentTime,
    allTime,
    playMode,
    sequenceList,
    playStatus,
    currentSong,
    changeMode,
    changePlayList,
    controlAudio,
    changeCurrentIndex,
    handleChangeCurrentSong,
    setShowPlaylist,
  } = props;

  const handleChangeMode = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const newMode = (playMode + 1) % 3;
    changeMode(newMode);
    if (newMode === PLAY_TYPE.PLAY_RANDOM) {
      const randomlist = randomList(sequenceList);
      changePlayList(randomlist);
      changeCurrentIndex(findIndex(currentSong, randomlist));
    } else if (newMode === PLAY_TYPE.PLAY_LOOP) {
      changePlayList(sequenceList);
      changeCurrentIndex(findIndex(currentSong, sequenceList));
    }
  };

  const getMode = () => {
    return getOptionsVlaue(PLAY_TYPE_IMG, playMode);
  };

  const millisecondToDate = (time: number) => {
    const second = Math.floor(time % 60);
    let minite = Math.floor(time / 60);
    return `${minite}:${second >= 10 ? second : `0${second}`}`;
  };

  const getStyle = () => {
    const process = `${(currentTime / allTime) * 100}%`;
    return {
      background: `linear-gradient(to right, #ffffff 0%,#ffffff ${process},#c7c7c7 ${process},#c7c7c7)`,
    };
  };

  return (
    <div className="playBar">
      <div className="audio">
        <span>{millisecondToDate(currentTime)}</span>
        <div className="process">
          <input
            style={getStyle()}
            type="range"
            step="0.01"
            max={allTime}
            value={currentTime}
            onChange={(e) => controlAudio("changeCurrentTime", e)}
          />
        </div>
        <span>{millisecondToDate(allTime)}</span>
      </div>
      <div className="action">
        <div className="img__wrapper" onClick={(e) => handleChangeMode(e)}>
          <img src={getMode()} alt="" />
        </div>
        <div
          className="img__wrapper"
          onClick={(e) => handleChangeCurrentSong("pre", e)}
        >
          <img src={pre} alt="" />
        </div>
        <div className="img__wrapper--bigger">
          <img
            src={playStatus ? pauseImg : playImg}
            alt=""
            onClick={() => controlAudio("changeStatus")}
          />
        </div>
        <div
          className="img__wrapper"
          onClick={(e) => handleChangeCurrentSong("next", e)}
        >
          <img src={next} alt="" />
        </div>
        <div
          className="img__wrapper"
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            setShowPlaylist(true);
          }}
        >
          <img src={list} alt="" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  playStatus: state.playReducer.playStatus,
  currentIndex: state.playReducer.currentIndex,
  currentSong: state.playReducer.currentSong,
  playList: state.playReducer.playList,
  playMode: state.playReducer.playMode,
  sequenceList: state.playReducer.sequenceList,
});

const mapDispatchToProps = (dispatch: Function) => ({
  changeCurrentIndex: (index: number) =>
    dispatch(changeCurrentIndexAction(index)),
  changeCurrentSong: (song: {}) => dispatch(changeCurrentSongAction(song)),
  changePlayList: (list: []) => dispatch(changePlayListAction(list)),
  changeFullSreen: (isFull: boolean) => dispatch(changeFullSreenAction(isFull)),
  changeMode: (value: number) => dispatch(changePlayModeAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);
