import React, { useEffect, useState, useMemo } from "react";
import { TopTab } from "@/components/widget/TopTab";
import left from "@/static/icon/left_arrow.png";
import { getSongDetail, getSongUrl } from "@/store/api";
import PlayBar from "@/components/widget/PlayBar";
import cx from "classnames";
import { connect } from "react-redux";
import {
  changePlayIdAction,
  changeCurrentIndexAction,
  changeCurrentSongAction,
} from "actions/playAction";

const MusicPlay = (props: any) => {
  const {
    playStatus,
    changePlayId,
    playId,
    playList,
    currentIndex,
    changeCurrentIndex,
    changeCurrentSong,
    currentSong,
  } = props;

  const [url, setUrl] = useState("");

  useEffect(() => {
    getSongUrlFunc();
  }, []);

  const handleBack = () => {
    props.history.go(-1);
  };

  const getSongUrlFunc = () => {
    getSongUrl(playId).then((res: any) => {
      setUrl(res.data[0].url);
    });
  };

  useMemo(() => {
    getSongUrlFunc();
  }, [playId]);

  const handleChangeSong = (value: string) => {
    let newSong: any = {};
    let newIndex: number = 0;
    if (value === "pre") {
      newIndex = currentIndex === 0 ? playList.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === playList.length - 1 ? 0 : currentIndex + 1;
    }
    newSong = playList[newIndex];
    changePlayId(newSong.id);
    changeCurrentIndex(newIndex);
    changeCurrentSong(newSong);
  };

  return (
    <div className="play">
      <TopTab
        type="text"
        text={currentSong.name}
        left={left}
        onLeft={handleBack}
      />
      <div className="play__container">
        <div
          className="play__bg"
          style={{ backgroundImage: "url(" + `${currentSong.al.picUrl}` + ")" }}
        />
        <img
          className={cx("play__img", { "play__img--rotate": playStatus })}
          src={currentSong.al.picUrl}
          alt={currentSong.name}
        />
        <PlayBar url={url} onChange={handleChangeSong} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    playStatus: state.playReducer.isPlay,
    playId: state.playReducer.playId,
    currentIndex: state.playReducer.currentIndex,
    currentSong: state.playReducer.currentSong,
    playList: state.playReducer.playList,
  };
};

const mapDispatchToProps = (dispacth: Function) => ({
  changePlayId: (id: number) => dispacth(changePlayIdAction(id)),
  changeCurrentIndex: (index: number) =>
    dispacth(changeCurrentIndexAction(index)),
  changeCurrentSong: (index: number) =>
    dispacth(changeCurrentSongAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlay);
