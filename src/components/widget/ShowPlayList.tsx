/*
 * @Author: FBB
 * @Date: 2020-08-07 13:56:55
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-07 17:25:40
 * @Description: showPlaylist组件，
 */
import React from "react";
import { connect } from "react-redux";
import more from "@/static/icon/more_gray.png";

const showPlaylist = (props: any) => {
  const { playList, changeCurrentSong } = props;
  return (
    <div className="playlist">
      <div className="title">播放列表</div>
      <div className="songlist__content">
        {playList.map((item: any, index: number) => {
          const ar = item.ar || item.artists;
          const al = item.al || item.album;
          return (
            <div
              className="item"
              key={item.id}
              onClick={() => changeCurrentSong(index)}
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
  playList: state.playReducer.playList,
});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(showPlaylist);
