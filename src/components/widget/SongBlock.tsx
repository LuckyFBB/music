/*
 * @Author: FBB
 * @Date: 2019-08-25 17:19:35
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-12 16:00:50
 * @Description: 歌单组件
 */
import React from "react";
import play from "@/static/home/play.png";

interface ISProps {
  list: Array<{}>;
  onClick: (id: number) => void;
}

export const SongBlock = (props: ISProps) => {
  const { list, onClick } = props;
  return (
    <div className="songblock">
      {list.map((item: any) => {
        const playCount = item.playCount || item.playcount;
        return (
          <div
            key={item.id}
            className="songblock__item"
            onClick={() => onClick(item.id)}
          >
            <img className="img" src={item.picUrl || item.coverImgUrl} alt="" />
            <p className="title">{item.name}</p>
            <div className="fixed">
              <img className="fixed__img" src={play} alt="" />
              <span className="fixed__number">
                {(playCount / 10000).toFixed()}万
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
