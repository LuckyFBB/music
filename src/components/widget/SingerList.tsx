/*
 * @Author: FBB
 * @Date: 2019-09-03 23:00:39
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-08 21:15:18
 * @Description: 歌手展示列表
 */

import React from "react";

export const SingerList = (props: any) => {
  const { list, onClick } = props;
  return (
    <div className="singerlist">
      {list.map((item: any) => (
        <div className="singerlist__item" key={item.id} onClick={()=>onClick(item.id)}>
          <div className="singerlist__img">
            <img src={item.picUrl} alt={item.name} />
          </div>
          <div className="singerlist__content">
            <p className="name">{item.name}</p>
            <p className="album">专辑数量：{item.albumSize}</p>
            <p className="music">歌曲数量：{item.musicSize}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
