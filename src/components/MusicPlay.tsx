import React, { useEffect, useState } from "react";
import { TopTab } from "@/components/widget/TopTab";
import left from "@/static/icon/left_arrow.png";
import { getSongDetail, getSongUrl } from "@/store/api";
import PlayBar from "@/components/widget/PlayBar";
import cx from "classnames";
import { connect } from "react-redux";

const MusicPlay = (props: any) => {
  const { playStatus } = props;
  const { id } = props.match.params;
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
    getSongDetail(id).then((res: any) => {
      setPic(res.songs[0].al.picUrl);
      setName(res.songs[0].name);
    });
  };

  const getSongUrlFunc = () => {
    getSongUrl(id).then((res: any) => {
      setUrl(res.data[0].url);
    });
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
        <PlayBar url={url} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  playStatus: state.playReducer.isPlay,
});

export default connect(mapStateToProps)(MusicPlay);
