/*
 * @Author: FBB
 * @Date: 2019-09-08 16:49:52
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-08 20:10:08
 * @Description: 歌曲展示列表
 */

import React from "react";
import play from "../../static/icon/play.png";
import more from "../../static/icon/more_gray.png";

export const SongList = (props: any) => {
  const { tracks } = props;
  return (
    <div className="songlist">
      <div className="songlist__header">
        <div className="left">
          <img src={play} alt="播放" />
          <span className="title">
            播放全部<span className="subtitle">共{tracks.length}首</span>
          </span>
        </div>
        <div className="right">
          <div className="button">收藏歌单</div>
        </div>
      </div>
      <div className="songlist__content">
        {tracks.map((item: any, index: number) => (
          <div className="item" key={item.id}>
            <span className="index">{index + 1}</span>
            <div className="content">
              <p className="song">{item.name}</p>
              <p className="ar">
                {item.ar.map((item: any) => (
                  <span key={item.name}>{item.name}</span>
                ))}
                <span>-</span>
                <span>{item.al.name}</span>
              </p>
            </div>
            <img src={more} alt="更多" />
          </div>
        ))}
      </div>
    </div>
  );
};
