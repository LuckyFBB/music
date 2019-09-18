import React, { useEffect, useState } from "react";
import { TopTab } from "./widget/TopTab";
import { store } from "../store/store";
import bg from "../static/recommend_bg.jpg";
import { SongList } from "./widget/SongList";
import { Toast } from "antd-mobile";
import left from "../static/icon/left_arrow.png";

export const Recommend = (props: any) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    Toast.loading("加载中");
    getRecommendSongs();
  }, []);

  const getRecommendSongs = () => {
    store
      .getRecommendSongs()
      .then((res: any) => {
        setSongs(res.recommend);
        Toast.hide();
      })
      .catch(err => {
        if (err.code === 301) {
          Toast.show("尚未登录，前去登录");
          window.setTimeout(() => {
            props.history.push("/login");
          }, 1000);
        }
      });
  };

  const handleBack = () => {
    props.history.go(-1);
  };

  return (
    <div className="recommend">
      <TopTab text="每日推荐" type="text" left={left} onLeft={handleBack} />
      <div className="recommend__header">
        <img className="recommend__img" src={bg} alt="" />
      </div>
      <div className="recommend__content">
        <SongList tracks={songs} />
      </div>
    </div>
  );
};