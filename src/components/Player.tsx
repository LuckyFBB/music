/*
 * @Author: FBB
 * @Date: 2020-08-16 20:38:10
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-16 21:37:16
 * @Description: 播放器
 */

import React from "react";
import { connect } from "react-redux";
import MiniPlayer from "./widget/MiniPlayer";
import { isEmptyObject, getUrlForSong } from "@/utils/utils";

const Player = (props: any) => {
  const { currentSong, playId } = props;
  return (
    <div>
      {isEmptyObject(currentSong) ? null : <MiniPlayer />}
      <audio src={getUrlForSong(playId)} autoPlay />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  currentSong: state.playReducer.currentSong,
  playId: state.playReducer.playId,
});

const mapDispatchToProps = () => ({}); 

export default connect(mapStateToProps, mapDispatchToProps)(Player);
