import React, { useEffect, useState } from "react";
import { TopTab } from "@/components/widget/TopTab";
import { BottomTab } from "@/components/widget/BottomTab";
import { getUserSubcount } from "@/store/api";
import playlist from "@/static/icon/playlist.png";
import radio from "@/static/icon/radio.png";
import right from "@/static/icon/right_arrow.png";

export const Mine = (props: any) => {
  const [createDjRadioCount, setRadioCount] = useState(0);
  const [createdPlaylistCount, setPlaylistCount] = useState(0);
  const getUserSubcountFunc = () => {
    getUserSubcount().then((res: any) => {
      setPlaylistCount(res.createdPlaylistCount);
      setRadioCount(res.createDjRadioCount);
    });
  };
  const MINE_SHOW_LIST = [
    {
      label: "我的电台",
      img: radio,
      value: createDjRadioCount,
    },
    {
      label: "我的收藏",
      img: playlist,
      value: createdPlaylistCount,
    },
  ];
  useEffect(() => {
    getUserSubcountFunc();
  }, []);
  return (
    <div className="container">
      <TopTab type="text" text="我的" />
      <div className="wrapper">
        <div className="mine">
          {MINE_SHOW_LIST.map((item: any) => (
            <div className="line" key={item.label}>
              <div className="left">
                <img className="img" src={item.img} alt={item.label} />
              </div>
              <div className="right">
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
                <img className="arrow" src={right} alt="箭头" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomTab active="mine" history={props.history} />
    </div>
  );
};
