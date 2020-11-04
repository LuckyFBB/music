/*
 * @Author: FBB
 * @Date: 2019-08-26 21:16:24
 * @LastEditors: FBB
 * @LastEditTime: 2020-09-02 14:04:30
 * @Description: 排行榜item
 */

import React from "react";

export const RankList = (props: any) => {
  const { type, ranklist, onClick } = props;

  const renderRankList = (ranklist: any, type: string) => {
    switch (type) {
      case "block":
        return (
          <div className="ranklist__block">
            {ranklist.map((item: any) => (
              <div
                className="block__img"
                key={item.id}
                onClick={() => {
                  onClick(item.id);
                }}
              >
                {/* <LazyLoad scroll={true} height={100}> */}
                <img src={item.coverImgUrl} alt="" />
                {/* </LazyLoad> */}
                <div className="block__fixed">{item.updateFrequency}</div>
              </div>
            ))}
          </div>
        );
      case "line":
        return (
          <div className="ranklist__line">
            {ranklist.map((item: any) => (
              <div
                className="line__item"
                key={item.id}
                onClick={() => {
                  onClick(item.id);
                }}
              >
                <div className="line__left">
                  {/* <LazyLoad scroll={true} height={120}> */}
                  <img className="line__img" src={item.coverImgUrl} alt="" />
                  {/* </LazyLoad> */}
                  <div className="line__fixed">{item.updateFrequency}</div>
                </div>
                <div className="line__content">
                  {item.tracks.map((track: any, index: number) => (
                    <div className="content" key={index}>
                      <span>{index + 1}. </span>
                      <span>{track.first}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
    }
  };
  return <>{renderRankList(ranklist, type)}</>;
};
