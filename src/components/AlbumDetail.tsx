/*
 * @Author: FBB
 * @Date: 2019-09-07 21:21:58
 * @LastEditors: FBB
 * @LastEditTime: 2020-09-02 16:31:24
 * @Description: 歌单详情
 */

import React, { useEffect } from "react";
import { getPlayDetail } from "@/store/api";
import { TopTab } from "@/components/widget/TopTab";
import play from "@/static/home/play.png";
import SongList from "@/components/widget/SongList";
import { ACTION_MAP } from "@/share/enums";
import left from "@/static/icon/left_arrow.png";
import { connect } from "react-redux";
import {
  initCurrentAlbumAction,
  changeTotalCountAction,
} from "@/actions/albumAction";

const AlbumDetail = (props: any) => {
  const { id } = props.match.params;
  const { initCurrentAlbum, currentAlbum, changeTotalCount } = props;

  useEffect(() => {
    getSonglist();
  }, [id]);

  const getSonglist = () => {
    getPlayDetail(id).then((res: any) => {
      initCurrentAlbum(res.playlist);
      changeTotalCount(res.playlist.tracks.length);
    });
  };

  const handleBack = () => {
    props.history.go(-1);
  };

  return (
    <div className="album">
      <TopTab type="text" text="歌单" left={left} onLeft={handleBack} />
      <div className="album__header">
        <img className="bg" src={currentAlbum.coverImgUrl} alt="" />
        <div className="detail">
          <div className="cover">
            {currentAlbum.coverImgUrl && (
              <img
                className="cover__img"
                src={currentAlbum.coverImgUrl as string}
                alt=""
              />
            )}
            <div className="cover__fixed">
              <img src={play} alt="播放" />
              <span>
                {((currentAlbum.playCount as number) / 10000).toFixed(0)}万
              </span>
            </div>
          </div>
          <div className="content">
            <p className="title">{currentAlbum.name}</p>
            <div className="creator">
              {currentAlbum.creator && (
                <React.Fragment>
                  <img
                    className="avatar"
                    src={currentAlbum.creator.avatarUrl}
                    alt=""
                  />
                  <span className="nick">{currentAlbum.creator.nickname}</span>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
        <div className="action">
          {ACTION_MAP.map((item: any, index: number) => (
            <div className="action__item" key={index}>
              <img src={item.icon} alt={item.title} className="img" />
              <p className="title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="album__content">
        <SongList history={props.history} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  sequenceList: state.playReducer.sequenceList,
  currentAlbum: state.albumReducer.currentAlbum,
});

const mapDispatchToProps = (dispatch: Function) => ({
  initCurrentAlbum: (album: {}) => dispatch(initCurrentAlbumAction(album)),
  changeTotalCount: (number: number) =>
    dispatch(changeTotalCountAction(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
