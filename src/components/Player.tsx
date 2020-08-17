/*
 * @Author: FBB
 * @Date: 2020-08-16 20:38:10
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-17 22:54:05
 * @Description: 播放器
 */

import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import MiniPlayer from "./widget/MiniPlayer";
import { isEmptyObject, getUrlForSong, getOptionsVlaue } from "@/utils/utils";
import { PLAY_TYPE_IMG, PLAY_TYPE } from "@/share/enums";
import { changePlayStateAction } from "@/actions/playAction";
import NormalPlayer from "./widget/NormalPlayer";

const Player = (props: any) => {
  const { currentSong, playId, playMode, changePlayState } = props;

  const [allTime, setAllTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current!.src = getUrlForSong(playId);
  }, [playId, currentSong]);

  const controlAudio = (type: string) => {
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
          } /* else {
            changeCurrentSong("next");
          } */
        }
        break;
    }
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
        />
      )}
      <audio ref={audioRef} autoPlay />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  currentSong: state.playReducer.currentSong,
  playId: state.playReducer.playId,
  playMode: state.playReducer.playMode,
  sequenceList: state.playReducer.sequenceList,
});

const mapDispatchToProps = (dispatch: Function) => ({
  changePlayState: (state: boolean) => dispatch(changePlayStateAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
