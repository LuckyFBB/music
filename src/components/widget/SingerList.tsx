/*
 * @Author: FBB
 * @Date: 2019-09-03 23:00:39
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-27 17:17:19
 * @Description: 歌手展示列表
 */

import React from "react";
import LazyLoad from "react-lazyload";
import { connect } from "react-redux";

const SingerList = (props: any) => {
  const { singerList, onClick } = props;
  return (
    <div className="singerlist">
      {singerList.map((item: any) => (
        <div
          className="singerlist__item"
          key={item.id}
          onClick={() => onClick(item.id)}
        >
          <LazyLoad scroll={true} height={65}>
            <div className="singerlist__img">
              <img src={item.picUrl} alt={item.name} />
            </div>
          </LazyLoad>
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

const mapStateToProps = (state: any) => ({
  singerList: state.musicReducer.singerList,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SingerList);
