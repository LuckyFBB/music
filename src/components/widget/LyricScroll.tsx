/*
 * @Author: FBB
 * @Date: 2020-08-23 16:47:13
 * @LastEditors: FBB
 * @LastEditTime: 2020-11-04 20:26:30
 * @Description: 歌词滚动组件
 */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSongLyric } from "@/store/api";
import cx from "classnames";

interface ISProps {
  playId: number;
  currentTime: number;
}

const LyricScroll = (props: ISProps) => {
  const { playId, currentTime } = props;
  const [lyriclist, setLyricList] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  let [lyricHeight, setLyricHeight] = useState(0);

  useEffect(() => {
    if (playId === -1) return;
    setLyricHeight(0);
    getSongLyric(playId).then((res: any) => {
      const { lrc } = res;
      if (!lrc) return;
      const lyclist = lrc!.lyric
        .split(/[\n]/)
        .map((item: any) => {
          const temp = item.split(/\[(.+?)\]/);
          return { time: dateToMillisecond(temp[1]), lyc: temp[2] };
        })
        .filter((item: any) => item.lyc)
        .sort((a: any, b: any) => a.time - b.time);
      setLyricList(lyclist);
    });
  }, [playId]);

  useEffect(() => {
    for (let i = 0; i < lyriclist.length - 1; i++) {
      const currLycTime = lyriclist[i]["time"];
      const nextLycTime = lyriclist[i + 1]["time"];
      if (
        currentTime >= currLycTime &&
        currentTime < nextLycTime &&
        currentLine !== i
      ) {
        setCurrentLine(i);
      } else if (currentTime > nextLycTime && i === lyriclist.length - 2) {
        setCurrentLine(lyriclist.length - 1);
      }
    }
  }, [currentTime]);

  useEffect(() => {
    getLyricStyle();
  }, [currentLine]);

  const dateToMillisecond = (date: string) => {
    if (!date) return 999;
    const dateArr = date.split(":");
    const millisecond = parseInt(dateArr[0]) * 60 + Number(dateArr[1]);
    return millisecond;
  };

  const getLyricStyle = () => {
    lyricHeight = -40 + currentLine * 20;
    setLyricHeight(lyricHeight);
  };

  return (
    <div className="lyricContainer">
      <div
        className="lyric"
        style={{
          transform: `translateY(-${lyricHeight}px)`,
        }}
      >
        {lyriclist.length ? (
          lyriclist.map((item: any, index: number) => (
            <p
              className={cx({ current: currentLine === index })}
              key={index}
              id={`${index}`}
            >
              {item.lyc}
            </p>
          ))
        ) : (
          <p className="current">纯音乐，暂无歌词~~</p>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  playId: state.playReducer.playId,
});

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LyricScroll);
