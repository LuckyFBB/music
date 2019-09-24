import React, { useEffect, useState } from "react";
import { TopTab } from "./widget/TopTab";
import left from "../static/icon/left_arrow.png";
import { store } from "../store/store";

export const MusicPlay = (props: any) => {
  const { id } = props.match.params;
  const [url, setUrl] = useState("");
  const [pic, setPic] = useState("");
  const [artist, setArtist] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    getSongDetail();
    getSongUrl();
  });

  const handleBack = () => {
    props.history.go(-1);
  };

  const getSongDetail = () => {
    store.getSongDetail(id).then((res: any) => {
      setPic(res.songs[0].al.picUrl);
      setArtist(res.songs[0].ar.ar);
      setName(res.name);
    });
  };

  const getSongUrl = () => {
    store.getSongUrl(id).then((res: any) => {
      setUrl(res.data.url);
    });
  };

  return (
    <div className="play">
      <TopTab type="text" text="播放" left={left} onLeft={handleBack} />
      <div className="play__container">
        <div
          className="play__bg"
          style={{ backgroundImage: "url(" + `${pic}` + ")" }}
        ></div>
        <img className="play__img" src={pic} alt={name} />
      </div>
    </div>
  );
};
