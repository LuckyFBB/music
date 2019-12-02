/*
 * @Author: FBB
 * @Date: 2019-12-02 11:09:02
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-02 17:27:06
 * @Description: 音乐播放等相关操作
 */
import React, { useState } from "react";
import pre from "../../static/playBar/pre.png";
import next from "../../static/playBar/next.png";
import pause from "../../static/playBar/pause.png";
import play from "../../static/playBar/play.png";
import list from "../../static/playBar/list.png";
import { PLAY_TYPE } from "../enums";

interface ISprops {
  url: string;
}

export const PlayBar = (props: ISprops) => {
  const { url } = props;
  const [allTime, setAllTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlay, setIsPlay] = useState(true);
  const [mode, setMode] = useState(1);

  const controlAudio = (type: string, e?: any) => {
    const audio = document.getElementById(`audio`) as HTMLAudioElement;
    switch (type) {
      case "allTime":
        setAllTime(audio.duration);
        break;
      case "changeStatus":
        if (audio.paused) {
          audio.play();
          setIsPlay(true);
        } else {
          audio.pause();
          setIsPlay(false);
        }
        break;
      case "pause":
        audio.pause();
        setIsPlay(false);
        break;
      case "changeCurrentTime":
        const value = e.target.value as number;
        setCurrentTime(value);
        audio.currentTime = value;
        if (Math.round(value) === Math.round(audio.duration)) {
          setIsPlay(false);
        } else {
          audio.play();
          setIsPlay(true);
        }
        break;
      case "getCurrentTime":
        setCurrentTime(audio.currentTime);
        if (audio.currentTime === audio.duration) {
          setIsPlay(false);
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
    const newMode = (mode + 1) % 3;
    setMode(newMode);
  };

  const getMode = () => {
    return PLAY_TYPE[mode];
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
            src={isPlay ? pause : play}
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
