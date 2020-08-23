/*
 * @Author: FBB
 * @Date: 2020-08-23 16:47:13
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-23 20:58:26
 * @Description: 歌词滚动组件
 */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSongLyric } from "@/store/api";
import { transform } from "@babel/core";

interface ISProps {
  playId: number;
  currentTime: number;
}

const LyricScroll = (props: ISProps) => {
  const { playId, currentTime } = props;
  const [lyriclist, setLyricList] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (playId === -1) return;
    setCurrentLine(0);
    getSongLyric(playId).then((res: any) => {
      const { lrc } = res;
      const lyclist = lrc!.lyric
        .split(/[\n]/)
        .map((item: any) => {
          const temp = item.split(/\[(.+?)\]/);
          return { time: dateToMillisecond(temp[1]), lyc: temp[2] };
        })
        .filter((item: any) => item.lyc);
      console.log(lyclist);
      setLyricList(lyclist);
    });
  }, [playId]);

  useEffect(() => {
    for (let i = 0; i < lyriclist.length - 1; i++) {
      const currLycTime = lyriclist[i]["time"];
      const nextLycTime = lyriclist[i + 1]["time"];
      const currentLyc = lyriclist[i]["lyc"];
      if (
        currentTime > currLycTime &&
        currentTime < nextLycTime &&
        currentLine !== i
      ) {
        console.log(currentLyc, (currentLyc as string).length);
        setCurrentLine(i);
      }
    }
  }, [currentTime]);

  const dateToMillisecond = (date: string) => {
    if (!date) return 999;
    const dateArr = date.split(":");
    const millisecond = parseInt(dateArr[0]) * 60 + Number(dateArr[1]);
    return millisecond;
  };

  const lyricStyle = (line: number) => ({
    transform: `translateY(-${20 * (line - 2)}px)`,
  });

  return (
    <div className="lyricContainer">
      <div className="lyric" style={lyricStyle(currentLine)}>
        {lyriclist.map((item: any, index: number) => (
          <p key={index} style={currentLine === index ? { color: "#fff" } : {}}>
            {item.lyc}
          </p>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  playId: state.playReducer.playId,
});

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LyricScroll);
