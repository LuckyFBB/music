/*
 * @Author: FBB
 * @Date: 2020-08-16 20:42:51
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-17 21:55:32
 * @Description: 小化播放器
 */

import React from "react";
import { connect } from "react-redux";
import close from "@/static/icon/close_white.png";
import pauseImg from "@/static/playBar/pause.png";
import playImg from "@/static/playBar/play.png";
import { changeFullSreenAction } from "@/actions/playAction";
import { CSSTransition } from "react-transition-group";

interface ISProps {
  currentSong: any;
  playStatus: boolean;
  controlAudio: Function;
  changeFullSreen: Function;
  isFull: boolean;
}
const MiniPlayer = (props: ISProps) => {
  const {
    currentSong,
    playStatus,
    controlAudio,
    changeFullSreen,
    isFull,
  } = props;
  return (
    <CSSTransition in={!isFull} timeout={1000} unmountOnExit>
      <div className="miniPlayer">
        <img
          src={currentSong.al.picUrl}
          className="song"
          onClick={() => {
            changeFullSreen(true);
          }}
        />
        <img
          src={playStatus ? pauseImg : playImg}
          alt=""
          className="close"
          onClick={() => controlAudio("changeStatus")}
        />
      </div>
    </CSSTransition>
  );
};

const mapStateToProps = (state: any) => ({
  currentSong: state.playReducer.currentSong,
  playStatus: state.playReducer.playStatus,
  isFull: state.playReducer.isFull,
});

const mapDispatchToProps = (dispatch: Function) => ({
  changeFullSreen: (isFull: boolean) => dispatch(changeFullSreenAction(isFull)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer);
