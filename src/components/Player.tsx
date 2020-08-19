/*
 * @Author: FBB
 * @Date: 2020-08-16 20:38:10
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-19 20:23:22
 * @Description: 播放器
 */

import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import MiniPlayer from "./widget/MiniPlayer";
import { isEmptyObject, getUrlForSong } from "@/utils/utils";
import { PLAY_TYPE } from "@/share/enums";
import {
  changePlayStateAction,
  changeCurrentSongAction,
  changePlayIdAction,
} from "@/actions/playAction";
import NormalPlayer from "./widget/NormalPlayer";
import { checkMusic } from "@/store/api";
import { Toast } from "antd-mobile";

const Player = (props: any) => {
  const {
    currentSong,
    playId,
    playMode,
    changePlayState,
    currentIndex,
    playList,
    changePlayId,
    changeCurrentIndex,
    changeCurrentSong,
  } = props;

  const [allTime, setAllTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (playId === -1) return;
    checkMusic(playId)
      .then(() => {
        audioRef.current!.src = getUrlForSong(playId);
      })
      .catch(() => {
        Toast.info("暂无版权，为您播放下一首");
        handleChangeCurrentSong("next");
      });
  }, [playId, currentSong]);

  const controlAudio = (
    type: string,
    e?: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (type) {
      case "allTime":
        setAllTime(audioRef.current!.duration);
        break;
      case "changeStatus":
        if (audioRef.current!.paused) {
          audioRef.current!.play();
          changePlayState(true);
        } else {
          audioRef.current!.pause();
          changePlayState(false);
        }
        break;
      case "getCurrentTime":
        setCurrentTime(audioRef.current!.currentTime);
        //当歌曲播放结束
        if (audioRef.current!.currentTime === audioRef.current!.duration) {
          //判断是不是单曲循环
          if (playMode === PLAY_TYPE.PLAY_ONCE) {
            setCurrentTime(0);
            audioRef.current!.play();
            changePlayState(true);
          } else {
            handleChangeCurrentSong("next");
          }
        }
        break;
      case "changeCurrentTime":
        const value = Number(e!.target.value);
        setCurrentTime(value);
        audioRef.current!.currentTime = value;
        if (Math.round(value) === Math.round(audioRef.current!.duration)) {
          changePlayState(false);
        } else {
          audioRef.current!.play();
          changePlayState(true);
        }
        break;
    }
  };

  const handleChangeCurrentSong = (
    value: string,
    event?: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event && event.stopPropagation();
    let newSong: any = {};
    let newIndex: number = 0;
    if (value === "pre") {
      newIndex = currentIndex === 0 ? playList.length - 1 : currentIndex - 1;
    } else if (value == "next") {
      newIndex = currentIndex === playList.length - 1 ? 0 : currentIndex + 1;
    }
    newSong = playList[newIndex];
    changePlayId(newSong.id);
    changeCurrentIndex(newIndex);
    changeCurrentSong(newSong);
  };

  return (
    <div>
      {isEmptyObject(currentSong) ? null : (
        <MiniPlayer controlAudio={controlAudio} />
      )}
      {isEmptyObject(currentSong) ? null : (
        <NormalPlayer
          controlAudio={controlAudio}
          allTime={allTime}
          currentTime={currentTime}
          handleChangeCurrentSong={handleChangeCurrentSong}
        />
      )}
      <audio
        ref={audioRef}
        autoPlay
        onCanPlay={() => controlAudio("allTime")}
        onTimeUpdate={() => controlAudio("getCurrentTime")}
        onError={() => {
          alert("出错了");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  currentSong: state.playReducer.currentSong,
  playId: state.playReducer.playId,
  playMode: state.playReducer.playMode,
  sequenceList: state.playReducer.sequenceList,
  currentIndex: state.playReducer.currentIndex,
  playList: state.playReducer.playList,
});

const mapDispatchToProps = (dispatch: Function) => ({
  changePlayState: (state: boolean) => dispatch(changePlayStateAction(state)),
  changePlayId: (id: number) => dispatch(changePlayIdAction(id)),
  changeCurrentIndex: (index: number) =>
    dispatch(changeCurrentSongAction(index)),
  changeCurrentSong: (song: {}) => dispatch(changeCurrentSongAction(song)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
