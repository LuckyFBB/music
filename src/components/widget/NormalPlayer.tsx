/*
 * @Author: FBB
 * @Date: 2020-08-17 21:29:25
 * @LastEditors: FBB
 * @LastEditTime: 2020-11-08 20:29:00
 * @Description: 全屏的播放器
 */

import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import ShowPlaylist from "@/components/widget/ShowPlayList";
import { connect } from "react-redux";
import {
  changeCurrentSongAction,
  changeFullSreenAction,
} from "@/actions/playAction";
import { TopTab } from "./TopTab";
import cx from "classnames";
import left from "@/static/icon/left_arrow.png";
import PlayBar from "./PlayBar";
import LyricScroll from "./LyricScroll";

interface ISPorps {
  playStatus: boolean;
  currentSong: any;
  isFull: boolean;
  allTime: number;
  currentTime: number;
  controlAudio: Function;
  changeFullSreen: Function;
  handleChangeCurrentSong: Function;
}

const NormalPlayer = (props: ISPorps) => {
  const {
    playStatus,
    currentSong,
    isFull,
    changeFullSreen,
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

  return (
    <CSSTransition
      in={isFull}
      timeout={300}
      unmountOnExit
      mountOnEnter
      appear={true}
      classNames="full"
    >
      <div className="play">
        <div className="play__top">
          <TopTab
            left={left}
            onLeft={handleBack}
            style={{ backgroundColor: "unset" }}
          >
            <div className="top__container">
              <p className="top__text top__text--marquee ">
                {currentSong.name}
              </p>
            </div>
          </TopTab>
        </div>
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
          <LyricScroll currentTime={currentTime} />
          <PlayBar
            currentTime={currentTime}
            allTime={allTime}
            controlAudio={controlAudio}
            handleChangeCurrentSong={handleChangeCurrentSong}
            setShowPlaylist={setShowPlaylist}
          />
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
  currentSong: state.playReducer.currentSong,
  isFull: state.playReducer.isFull,
});

const mapDispatchToProps = (dispatch: Function) => ({
  changeCurrentSong: (song: {}) => dispatch(changeCurrentSongAction(song)),
  changeFullSreen: (isFull: boolean) => dispatch(changeFullSreenAction(isFull)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NormalPlayer);
