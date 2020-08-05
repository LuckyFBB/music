/*
 * @Author: FBB
 * @Date: 2019-09-08 16:49:52
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-05 17:16:33
 * @Description: 歌曲展示列表
 */

import React from "react";
import play from "@/static/icon/play.png";
import more from "@/static/icon/more_gray.png";
import { checkMusic } from "@/store/api";
import { Toast } from "antd-mobile";
import { connect } from "react-redux";
import {
  changeCurrentIndexAction,
  changePlayIdAction,
} from "@/actions/playAction";

interface ISProp {
  tracks: any[];
  history: any;
  changeCurrentIndex: Function;
  changePlayId: Function;
}

const SongList = (props: ISProp) => {
  const { tracks, changeCurrentIndex, changePlayId } = props;

  const handleClick = (id: string, index: number) => {
    changeCurrentIndex(index);
    changePlayId(id);
    checkMusic(id).then((res: any) => {
      if (res.success) {
        props.history.push(`/play/${id}`);
      } else {
        Toast.show(res.message);
      }
    });
  };

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
        {tracks.map((item: any, index: number) => {
          const ar = item.ar || item.artists;
          const al = item.al || item.album;
          return (
            <div
              className="item"
              key={item.id}
              onClick={() => handleClick(item.id, index)}
            >
              <span className="index">{index + 1}</span>
              <div className="content">
                <p className="song">{item.name}</p>
                <p className="ar">
                  {ar.map((item: any) => (
                    <span key={item.name}>{item.name}</span>
                  ))}
                  <span>-</span>
                  <span>{al.name}</span>
                </p>
              </div>
              <img src={more} alt="更多" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  currentIndex: state.playReducer.currentIndex,
});

const mapDispatchToProps = (dispatch: Function) => ({
  changeCurrentIndex: (index: number) =>
    dispatch(changeCurrentIndexAction(index)),
  changePlayId: (index: number) => dispatch(changePlayIdAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
