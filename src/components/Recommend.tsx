import React, { useEffect, useState } from "react";
import { TopTab } from "./widget/TopTab";
import { store } from "../store/store";
import bg from "../static/recommend_bg.jpg";
import { SongList } from "./widget/SongList";
import { Toast } from "antd-mobile";

export const Recommend = (props: any) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    Toast.loading("加载中");
    getRecommendSongs();
  }, []);

  const getRecommendSongs = () => {
    store.getRecommendSongs().then((res: any) => {
      setSongs(res.recommend);
      Toast.hide();
    });
  };

  const handleBack = () => {
    props.history.go(-1);
  };

  return (
    <div className="recommend">
      <TopTab text="每日推荐" type="text" left={true} onLeft={handleBack} />
      <div className="recommend__header">
        <img className="recommend__img" src={bg} alt="" />
      </div>
      <div className="recommend__content">
        <SongList tracks={songs} />
      </div>
    </div>
  );
};
