import React, { useEffect, useState } from "react";
import { TopTab } from "@/components/widget/TopTab";
import left from "@/static/icon/left_arrow.png";
import { store } from "@/store/store";
import { PlayBar } from "@/components/widget/PlayBar";
import cx from "classnames";

export const MusicPlay = (props: any) => {
  const { id } = props.match.params;
  const [url, setUrl] = useState("");
  const [pic, setPic] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    getSongDetail();
    getSongUrl();
  }, []);

  const handleBack = () => {
    props.history.go(-1);
  };

  const getSongDetail = () => {
    store.getSongDetail(id).then((res: any) => {
      setPic(res.songs[0].al.picUrl);
      setName(res.songs[0].name);
    });
  };

  const getSongUrl = () => {
    store.getSongUrl(id).then((res: any) => {
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
          className={cx("play__img", "play__img--rotate")}
          src={pic}
          alt={name}
        />
        <PlayBar url={url} />
      </div>
    </div>
  );
};
