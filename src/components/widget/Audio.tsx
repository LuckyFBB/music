import React, { useState } from "react";
import more from "../../static/icon/more_music.png";
import next from "../../static/icon/next.png";
import pre from "../../static/icon/previous.png";
import play from "../../static/icon/play_one.png";
import random from "../../static/icon/random.png";
import pause from "../../static/icon/pause.png";

export const Audio = (props: any) => {
  const [isPlay, setPlay] = useState(true);
  //const [isMuted] = useState(false);
  //const [volume] = useState(13);
  const [allTime, setAllTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //操作音频
  const controlAudio = (action: string) => {
    const audio = document.getElementById("audio") as HTMLAudioElement;
    switch (action) {
      case "allTime":
        setAllTime(audio.duration);
        audio.play();
        break;
      case "pause":
        setPlay(false);
        audio.pause();
        break;
      case "play":
        setPlay(true);
        audio.play();
        break;
      case "getCurrentTime":
        setCurrentTime(audio.currentTime);
        if (audio.currentTime === audio.duration) {
          setPlay(false);
        }
        break;
    }
  };

  //计算时间
  const millisecondToDate = (time: number) => {
    const second = Math.floor(time % 60);
    const minite = Math.floor(time / 60);
    return `${minite}:${second >= 10 ? second : `0${second}`}`;
  };
  return (
    <div className="audio">
      <audio
        src={props.url}
        id="audio"
        autoPlay={true}
        onCanPlay={() => controlAudio("allTime")}
        onTimeUpdate={() => controlAudio("getCurrentTime")}
      />
      <div className="audio__process">
        <span>{millisecondToDate(currentTime)}</span>
        <div className="process">
          <div
            className="circle"
            style={{ left: `${(currentTime / allTime) * 100}%` }}
          />
        </div>
        <span>{millisecondToDate(allTime)}</span>
      </div>
      <div className="audio__action">
        <img className="item item--more" src={random} alt="" />
        <img className="item" src={pre} alt="" />
        <img
          className="item item--big"
          src={isPlay ? play : pause}
          alt=""
          onClick={() => {
            controlAudio(isPlay ? "pause" : "play");
          }}
        />
        <img className="item" src={next} alt="" />
        <img className="item item--more" src={more} alt="" />
      </div>
    </div>
  );
};
