/*
 * @Author: FBB
 * @Date: 2020-08-17 21:29:25
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-22 15:01:35
 * @Description: 全屏的播放器
 */

import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import ShowPlaylist from "@/components/widget/ShowPlayList";
import { connect } from "react-redux";
import pre from "@/static/playBar/pre.png";
import next from "@/static/playBar/next.png";
import pauseImg from "@/static/playBar/pause.png";
import playImg from "@/static/playBar/play.png";
import list from "@/static/playBar/list.png";
import {
  changeCurrentIndexAction,
  changePlayListAction,
  changeCurrentSongAction,
  changeFullSreenAction,
  changePlayModeAction,
} from "@/actions/playAction";
import { TopTab } from "./TopTab";
import cx from "classnames";
import left from "@/static/icon/left_arrow.png";
import { getOptionsVlaue, randomList, findIndex } from "@/utils/utils";
import { PLAY_TYPE_IMG, PLAY_TYPE } from "@/share/enums";

interface ISPorps {
  playStatus: boolean;
  currentSong: any;
  playMode: number;
  isFull: boolean;
  sequenceList: [];
  allTime: number;
  currentTime: number;
  changeMode: Function;
  controlAudio: Function;
  changePlayList: Function;
  changeFullSreen: Function;
  changeCurrentSong: Function;
  changeCurrentIndex: Function;
  handleChangeCurrentSong: Function;
}

const NormalPlayer = (props: ISPorps) => {
  const {
    playStatus,
    changeCurrentIndex,
    currentSong,
    playMode,
    changePlayList,
    isFull,
    changeFullSreen,
    sequenceList,
    changeMode,
    controlAudio,
    allTime,
    currentTime,
    handleChangeCurrentSong,
  } = props;

  const [showPlaylist, setShowPlaylist] = useState(false);
  useEffect(() => {
    isFull &&
      document.getElementsByClassName("play")[0].addEventListener(
        "touchmove",
        (event) => {
          event.preventDefault();
        },
        { passive: false }
      );
  }, [isFull]);
  const handleBack = () => {
    changeFullSreen(false);
  };

  const getStyle = () => {
    const process = `${(currentTime / allTime) * 100}%`;
    return {
      background: `linear-gradient(to right, #ffffff 0%,#ffffff ${process},#c7c7c7 ${process},#c7c7c7)`,
    };
  };

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

  return (
    <CSSTransition in={isFull} timeout={1000} unmountOnExit>
      <div className="play">
        <TopTab
          type="text"
          text={currentSong.name}
          left={left}
          onLeft={handleBack}
        />
        <div
          className="play__container"
          onClick={() => {
            setShowPlaylist(false);
          }}
        >
          <div
            className="play__bg"
            style={{
              backgroundImage: "url(" + `${currentSong.al.picUrl}` + ")",
            }}
          />
          <img
            className={cx("play__img", "rotate", {
              "rotate--paused": !playStatus,
            })}
            src={currentSong.al.picUrl}
            alt={currentSong.name}
          />
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
              <div
                className="img__wrapper"
                onClick={(e) => handleChangeMode(e)}
              >
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
          <CSSTransition
            in={showPlaylist}
            timeout={1000}
            classNames="fade"
            unmountOnExit
          >
            <ShowPlaylist />
          </CSSTransition>
        </div>
      </div>
    </CSSTransition>
  );
};

const mapStateToProps = (state: any) => ({
  playStatus: state.playReducer.playStatus,
  currentIndex: state.playReducer.currentIndex,
  currentSong: state.playReducer.currentSong,
  playList: state.playReducer.playList,
  playMode: state.playReducer.playMode,
  isFull: state.playReducer.isFull,
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

export default connect(mapStateToProps, mapDispatchToProps)(NormalPlayer);
