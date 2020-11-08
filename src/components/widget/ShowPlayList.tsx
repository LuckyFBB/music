/*
 * @Author: FBB
 * @Date: 2020-08-07 13:56:55
 * @LastEditors: FBB
 * @LastEditTime: 2020-11-05 14:30:10
 * @Description: showPlaylist组件，
 */
import React from "react";
import { connect } from "react-redux";
import more from "@/static/icon/more_gray.png";
import play from "@/static/icon/headphones.png";
import {
  changePlayIdAction,
  changeCurrentIndexAction,
  changeCurrentSongAction,
} from "@/actions/playAction";
import { Scroll } from "./Scroll";

const showPlaylist = (props: any) => {
  const {
    playList,
    changeCurrentSong,
    currentIndex,
    changePlayId,
    changeCurrentIndex,
  } = props;

  const handleChangeCurrentSong = (index: number) => {
    const newSong = playList[index] as any;
    changePlayId(newSong.id);
    changeCurrentIndex(index);
    changeCurrentSong(newSong);
  };

  return (
    <div className="playlist">
      <div className="title">播放列表</div>
      <Scroll>
        <div className="songlist__content">
          {playList.map((item: any, index: number) => {
            const ar = item.ar || item.artists;
            const al = item.al || item.album;
            return (
              <div
                className="item"
                key={item.id}
                onClick={() => handleChangeCurrentSong(index)}
              >
                <div className="index">
                  {currentIndex === index && <img src={play} alt="" />}
                </div>
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
      </Scroll>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  playList: state.playReducer.playList,
  currentIndex: state.playReducer.currentIndex,
});
const mapDispatchToProps = (dispatch: Function) => ({
  changePlayId: (id: number) => dispatch(changePlayIdAction(id)),
  changeCurrentIndex: (index: number) =>
    dispatch(changeCurrentIndexAction(index)),
  changeCurrentSong: (song: {}) => dispatch(changeCurrentSongAction(song)),
});
export default connect(mapStateToProps, mapDispatchToProps)(showPlaylist);
