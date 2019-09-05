import React, { useEffect, useState } from "react";
import { store } from "../store/store";
import { TopTab } from "./widget/TopTab";

export const SongListDetail = (props: any) => {
  const { id } = props.match.params;

  const [playlist, setPlaylist]: [
    { [propName: string]: string | number | [] | object },
    Function
  ] = useState({});

  const [creator, setCreator]: [
    { [propName: string]: string },
    Function
  ] = useState({});

  useEffect(() => {
    getSonglist();
  }, []);

  const getSonglist = () => {
    store.getPlayDetail(id).then((res: any) => {
      setPlaylist(res.playlist);
      setCreator(res.playlist.creator);
    });
  };

  const handleBack = () => {
    props.history.go(-1);
  };

  return (
    <div className="songlistDetail">
      <TopTab type="text" text="歌单" left={true} onLeft={handleBack} />
      <div
        className="songlistDetail__bg"
        style={{ backgroundImage: "url(" + `${playlist.coverImgUrl}` + ")" }}
      ></div>
      <div className="songlistDetail__header">
        {playlist.coverImgUrl && (
          <img className="bg" src={playlist.coverImgUrl as string} />
        )}
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
    </div>
  );
};
