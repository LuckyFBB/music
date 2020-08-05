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
} from "actions/playAction";

const MusicPlay = (props: any) => {
  const {
    playStatus,
    changePlayId,
    playId,
    playList,
    currentIndex,
    changeCurrentIndex,
  } = props;

  const [url, setUrl] = useState("");
  const [pic, setPic] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    getSongDetailFunc();
    getSongUrlFunc();
  }, []);

  const handleBack = () => {
    props.history.go(-1);
  };

  const getSongDetailFunc = () => {
    getSongDetail(playId).then((res: any) => {
      setPic(res.songs[0].al.picUrl);
      setName(res.songs[0].name);
    });
  };

  const getSongUrlFunc = () => {
    getSongUrl(playId).then((res: any) => {
      setUrl(res.data[0].url);
    });
  };

  useMemo(() => {
    getSongDetailFunc();
    getSongUrlFunc();
  }, [playId]);

  const handleChangeSong = (value: string) => {
    let other: any = null;
    let newIndex: number = 0;
    switch (value) {
      case "pre":
        newIndex = currentIndex === 0 ? playList.length - 1 : currentIndex - 1;
        other = playList[newIndex];
        changePlayId(other.id);
        changeCurrentIndex(newIndex);
        return;
      case "next":
        newIndex = currentIndex === playList.length - 1 ? 0 : currentIndex + 1;
        other = playList[newIndex];
        changePlayId(other.id);
        changeCurrentIndex(newIndex);
        return;
    }
  };

  return (
    <div className="play">
      <TopTab type="text" text={name} left={left} onLeft={handleBack} />
      <div className="play__container">
        <div
          className="play__bg"
          style={{ backgroundImage: "url(" + `${pic}` + ")" }}
        />
        <img
          className={cx("play__img", { "play__img--rotate": playStatus })}
          src={pic}
          alt={name}
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
    playList: state.playReducer.playList,
  };
};

const mapDispatchToProps = (dispacth: Function) => ({
  changePlayId: (id: number) => dispacth(changePlayIdAction(id)),
  changeCurrentIndex: (index: number) =>
    dispacth(changeCurrentIndexAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlay);
