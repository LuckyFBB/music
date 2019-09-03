/*
 * @Author: FBB
 * @Date: 2019-08-25 17:19:35
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-02 23:12:18
 * @Description: 歌单组件
 */
import React from "react";
import play from "../../static/home/play.png";

/* interface ISProps {
  list:[]
} */

export const SongList = (props: any) => {
  return (
    <div className="songlist">
      {props.list.map((item: any) => (
        <div key={item.id} className="songlist__item">
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