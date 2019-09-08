/*
 * @Author: FBB
 * @Date: 2019-08-25 17:19:35
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-08 16:54:09
 * @Description: 歌单组件
 */
import React from "react";
import play from "../../static/home/play.png";

/* interface ISProps {
  list:[]
} */

export const SongBlock = (props: any) => {
  const { list, onClick } = props;
  return (
    <div className="songblock">
      {list.map((item: any) => (
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
              {(item.playCount / 10000).toFixed()}万
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
