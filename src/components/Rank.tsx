/*
 * @Author: FBB
 * @Date: 2019-08-26 20:19:16
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-16 17:40:40
 * @Description: 排行榜
 */

import React, { useEffect, useState } from "react";
import { TopTab } from "@/components/widget/TopTab";
import { BottomTab } from "@/components/widget/BottomTab";
import { RankList } from "@/components/widget/RankList";
import { getTopListDetail } from "@/store/api";
import { Toast } from "antd-mobile";
import left from "@/static/icon/left_arrow.png";

export const Rank = (props: any) => {
  const [rankList, setRankList] = useState([]);
  useEffect(() => {
    Toast.loading("加载中");
    getTopListDetailFunc();
  }, []);

  const getTopListDetailFunc = () => {
    getTopListDetail().then((res: any) => {
      setRankList(res.list);
      Toast.hide();
    });
  };

  const handleBack = () => {
    props.history.go(-1);
  };

  const redirectToSonglistDetail = (id: string) => {
    props.history.push(`/music/${id}`);
  };

  return (
    <div className="rank">
      <TopTab type="text" text="排行榜" left={left} onLeft={handleBack} />
      <div className="rank__container">
        <div className="rank__content">
          <div className="rank__title">官方榜</div>
          <RankList
            ranklist={rankList.slice(0, 4)}
            type="line"
            onClick={redirectToSonglistDetail}
          />
        </div>
        <div className="rank__content">
          <div className="rank__title">推荐磅</div>
          <RankList
            ranklist={rankList.slice(4)}
            type="block"
            onClick={redirectToSonglistDetail}
          />
        </div>
      </div>
      <BottomTab active="home" history={props.history} />
    </div>
  );
};
