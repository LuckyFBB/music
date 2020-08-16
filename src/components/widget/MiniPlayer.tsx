/*
 * @Author: FBB
 * @Date: 2020-08-16 20:42:51
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-16 22:11:51
 * @Description: 小化播放器
 */

import React from "react";
import { connect } from "react-redux";
import close from "@/static/icon/close_white.png";

interface ISProps {
  currentSong: any;
}
const MiniPlayer = (props: ISProps) => {
  const { currentSong } = props;
  return (
    <div className="miniPlayer">
      <img src={currentSong.al.picUrl} className="song" />
      <img src={close} className="close" />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  currentSong: state.playReducer.currentSong,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer);
