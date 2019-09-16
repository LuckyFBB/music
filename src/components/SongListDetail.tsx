import React, { useEffect, useState } from "react";
import { store } from "../store/store";
import { TopTab } from "./widget/TopTab";
import play from "../static/home/play.png";
import { SongList } from "./widget/SongList";
import { ACTION_MAP } from "./enums";
import left from "../static/icon/left_arrow.png";

export const SongListDetail = (props: any) => {
  const { id } = props.match.params;

  const [playlist, setPlaylist]: [
    { [propName: string]: string | number },
    Function
  ] = useState({});

  const [creator, setCreator]: [
    { [propName: string]: string },
    Function
  ] = useState({});

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getSonglist();
  }, []);

  const getSonglist = () => {
    store.getPlayDetail(id).then((res: any) => {
      setPlaylist(res.playlist);
      setCreator(res.playlist.creator);
      setTracks(res.playlist.tracks);
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
        style={{ backgroundImage: "url(" + `${playlist.coverImgUrl}` + ")" }}
      ></div>
      <div className="songlistDetail__header">
        <div className="container">
          <div className="bg">
            {playlist.coverImgUrl && (
              <img className="bg__cover" src={playlist.coverImgUrl as string} />
            )}
            <div className="bg__fixed">
              <img src={play} alt="播放" />
              <span>
                {((playlist.playCount as number) / 10000).toFixed(0)}万
              </span>
            </div>
          </div>
          <div className="content">
            <p className="title">{playlist.name}</p>
            <div className="creator">
              {creator.avatarUrl && (
                <img className="avatar" src={creator.avatarUrl} />
              )}
              <span className="nick">{creator.nickname}</span>
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
        <SongList tracks={tracks} />
      </div>
    </div>
  );
};
