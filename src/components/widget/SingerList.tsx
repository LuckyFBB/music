import React from "react";

export const SingerList = (props: any) => {
  const { list } = props;
  return (
    <div className="singerlist">
      {list.map((item: any) => (
        <div className="singerlist__item" key={item.id}>
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
