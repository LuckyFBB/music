import React, { useEffect, useState } from "react";
import { getPlayDetail } from "@/store/api";
import { TopTab } from "@/components/widget/TopTab";
import play from "@/static/home/play.png";
import SongList from "@/components/widget/SongList";
import { ACTION_MAP } from "@/share/enums";
import left from "@/static/icon/left_arrow.png";
import { connect } from "react-redux";
import {
  changePlayListAction,
  initSequenceListAction,
} from "actions/playAction";
import {
  initCurrentAlbumAction,
  changeTotalCountAction,
} from "@/actions/albumAction";

const SongListDetail = (props: any) => {
  const { id } = props.match.params;
  const {
    changePlayList,
    initSequenceList,
    initCurrentAlbum,
    currentAlbum,
    changeTotalCount,
  } = props;

  useEffect(() => {
    getSonglist();
  }, [id]);

  const getSonglist = () => {
    getPlayDetail(id).then((res: any) => {
      initCurrentAlbum(res.playlist);
      changePlayList(res.playlist.tracks);
      initSequenceList(res.playlist.tracks);
      changeTotalCount(res.playlist.tracks.length);
    });
  };

  const handleBack = () => {
    props.history.go(-1);
  };

  return (
    <div className="songlistDetail">
      <TopTab type="text" text="歌单" left={left} onLeft={handleBack} />
      <div
        className="songlistDetail__bg"
        style={{ backgroundImage: `url("${currentAlbum.coverImgUrl}")` }}
      ></div>
      <div className="songlistDetail__header">
        <div className="container">
          <div className="bg">
            {currentAlbum.coverImgUrl && (
              <img
                className="bg__cover"
                src={currentAlbum.coverImgUrl as string}
                alt=""
              />
            )}
            <div className="bg__fixed">
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
      <div className="songlistDetail__content">
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
  changePlayList: (list: []) => dispatch(changePlayListAction(list)),
  initSequenceList: (list: []) => dispatch(initSequenceListAction(list)),
  initCurrentAlbum: (album: {}) => dispatch(initCurrentAlbumAction(album)),
  changeTotalCount: (number: number) =>
    dispatch(changeTotalCountAction(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongListDetail);
