/*
 * @Author: FBB
 * @Date: 2019-09-08 21:46:38
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-08 22:16:47
 * @Description: 歌手所有歌曲展示
 */

import React, { useEffect, useState } from "react";
import { TopTab } from "./widget/TopTab";
import { store } from "../store/store";
import { SongList } from "./widget/SongList";

export const SingerDetail = (props: any) => {
  const { id } = props.match.params;

  const [artist, setArtist]: [
    { [propName: string]: string },
    Function
  ] = useState({});

  const [hotSongs, setHotSongs] = useState([]);

  useEffect(() => {
    getSingerPlayDetail();
  }, []);

  const getSingerPlayDetail = () => {
    store.getSingerPlayDetail(id).then((res: any) => {
      setArtist(res.artist);
      setHotSongs(res.hotSongs);
    });
  };

  const handleBack = () => {
    props.history.go(-1);
  };

  return (
    <div className="singerdetail">
      <TopTab onLeft={handleBack} type="text" text={artist.name} left={true} />
      <div className="singerdetail__header">
        <img className="img" src={artist.picUrl} />
      </div>
      <div className='singerdetail__content'>
        <SongList tracks={hotSongs} />
      </div>
    </div>
  );
};
