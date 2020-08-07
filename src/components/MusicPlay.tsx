import React, { useEffect, useState, useMemo } from "react";
import { TopTab } from "@/components/widget/TopTab";
import ShowPlaylist from "@/components/widget/ShowPlayList";
import left from "@/static/icon/left_arrow.png";
import { getSongUrl } from "@/store/api";
import PlayBar from "@/components/widget/PlayBar";
import cx from "classnames";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
  changePlayIdAction,
  changeCurrentIndexAction,
  changeCurrentSongAction,
  changePlayStateAction,
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
    changePlayState,
  } = props;

  const [url, setUrl] = useState("");
  const [showPlaylist, setShowPlaylist] = useState(false);

  useEffect(() => {
    getSongUrlFunc();
    changePlayState(true);
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

  const handleChangeCurrentSongByIcon = (
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

  const handleChangeCurrentSongByList = (index: number) => {
    const newSong = playList[index];
    changePlayId(newSong.id);
    changeCurrentIndex(index);
    changeCurrentSong(newSong);
  };

  const handleShowPlayList = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event && event.stopPropagation();
    setShowPlaylist(true);
  };

  return (
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
          style={{ backgroundImage: "url(" + `${currentSong.al.picUrl}` + ")" }}
        />
        <img
          className={cx("play__img", { "play__img--rotate": playStatus })}
          src={currentSong.al.picUrl}
          alt={currentSong.name}
        />
        <PlayBar
          url={url}
          changeCurrentSong={handleChangeCurrentSongByIcon}
          showPlayList={handleShowPlayList}
        />
        <CSSTransition
          in={showPlaylist}
          timeout={1000}
          classNames="fade"
          unmountOnExit
        >
          <ShowPlaylist
            changeCurrentSong={handleChangeCurrentSongByList}
          />
        </CSSTransition>
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
  changePlayState: (state: boolean) => dispacth(changePlayStateAction(state)),
  changeCurrentIndex: (index: number) =>
    dispacth(changeCurrentIndexAction(index)),
  changeCurrentSong: (index: number) =>
    dispacth(changeCurrentSongAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlay);
