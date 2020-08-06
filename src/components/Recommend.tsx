import React, { useEffect, useState } from "react";
import { TopTab } from "@/components/widget/TopTab";
import { getRecommendSongs } from "@/store/api";
import bg from "@/static/recommend_bg.jpg";
import SongList from "@/components/widget/SongList";
import { Toast } from "antd-mobile";
import left from "@/static/icon/left_arrow.png";

export const Recommend = (props: any) => {
  const [songs, setSongs]: [[], Function] = useState([]);

  useEffect(() => {
    Toast.loading("加载中");
    getRecommendSongsFunc();
  }, []);

  const getRecommendSongsFunc = () => {
    getRecommendSongs().then((res: any) => {
      setSongs(res.recommend);
      Toast.hide();
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
        {/* <SongList tracks={songs} history={props.history} /> */}
      </div>
    </div>
  );
};
