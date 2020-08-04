/*
 * @Author: FBB
 * @Date: 2019-12-02 11:09:02
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-12 20:56:16
 * @Description: 音乐播放等相关操作
 */
import React, { useState } from "react";
import pre from "@/static/playBar/pre.png";
import next from "@/static/playBar/next.png";
import pauseImg from "@/static/playBar/pause.png";
import playImg from "@/static/playBar/play.png";
import list from "@/static/playBar/list.png";
import { PLAY_TYPE_IMG } from "@/share/enums";
import { connect } from "react-redux";
import { changePlayState, changePlayMode } from "@/actions/playAction";
import { getOptionsVlaue } from "@/utils/utils";

interface ISprops {
  url: string;
  playStatus: boolean;
  playMode: number;
  play: Function;
  pause: Function;
  changeMode: Function;
}

const PlayBar = (props: ISprops) => {
  const { url, play, pause, playStatus, playMode, changeMode } = props;
  const [allTime, setAllTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const controlAudio = (type: string, e?: any) => {
    const audio = document.getElementById(`audio`) as HTMLAudioElement;
    switch (type) {
      case "allTime":
        setAllTime(audio.duration);
        break;
      case "changeStatus":
        if (audio.paused) {
          audio.play();
          play();
        } else {
          audio.pause();
          pause();
        }
        break;
      case "pause":
        audio.pause();
        pause();
        break;
      case "changeCurrentTime":
        const value = e.target.value as number;
        setCurrentTime(value);
        audio.currentTime = value;
        if (Math.round(value) === Math.round(audio.duration)) {
          pause();
        } else {
          audio.play();
          play();
        }
        break;
      case "getCurrentTime":
        setCurrentTime(audio.currentTime);
        if (audio.currentTime === audio.duration) {
          pause();
        }
        break;
    }
  };

  const millisecondToDate = (time: number) => {
    const second = Math.floor(time % 60);
    let minite = Math.floor(time / 60);
    return `${minite}:${second >= 10 ? second : `0${second}`}`;
  };

  const getStyle = () => {
    const process = `${(currentTime / allTime) * 100}%`;
    return {
      background: `linear-gradient(to right, #ffffff 0%,#ffffff ${process},#c7c7c7 ${process},#c7c7c7)`
    };
  };

  const handleChangeMode = () => {
    const newMode = (playMode + 1) % 3;
    changeMode(newMode);
  };

  const getMode = () => {
    return getOptionsVlaue(PLAY_TYPE_IMG, playMode);
  };

  return (
    <div className="playBar">
      <audio
        src={url}
        id="audio"
        autoPlay
        onCanPlay={() => controlAudio("allTime")}
        onTimeUpdate={() => controlAudio("getCurrentTime")}
      />
      <div className="audio">
        <span>{millisecondToDate(currentTime)}</span>
        <div className="process">
          <input
            style={getStyle()}
            type="range"
            step="0.01"
            max={allTime}
            value={currentTime}
            onChange={e => controlAudio("changeCurrentTime", e)}
          />
        </div>
        <span>{millisecondToDate(allTime)}</span>
      </div>
      <div className="action">
        <div className="img__wrapper" onClick={handleChangeMode}>
          <img src={getMode()} alt="" />
        </div>
        <div className="img__wrapper">
          <img src={pre} alt="" />
        </div>
        <div className="img__wrapper--bigger">
          <img
            src={playStatus ? pauseImg : playImg}
            alt=""
            onClick={() => controlAudio("changeStatus")}
          />
        </div>
        <div className="img__wrapper">
          <img src={next} alt="" />
        </div>
        <div className="img__wrapper">
          <img src={list} alt="" />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  playStatus: state.playReducer.playStatus,
  playMode: state.playReducer.playMode
});

const mapDispatchToProps = (dispatch: Function) => {
  return {
    play: () => dispatch(changePlayState(true)),
    pause: () => dispatch(changePlayState(false)),
    changeMode: (value: number) => dispatch(changePlayMode(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);