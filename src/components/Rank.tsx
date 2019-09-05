/*
 * @Author: FBB
 * @Date: 2019-08-26 20:19:16
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-05 23:44:44
 * @Description: 排行榜
 */

import React, { useEffect, useState } from "react";
import { TopTab } from "./widget/TopTab";
import { BottomTab } from "./widget/BottomTab";
import { RankList } from "./widget/RankList";
import { store } from "../store/store";
import { Toast } from "antd-mobile";

export const Rank = (props: any) => {
  const [rankList, setRankList] = useState([]);
  useEffect(() => {
    Toast.loading("加载中");
    getTopListDetail();
  }, []);

  const getTopListDetail = () => {
    store.getTopListDetail().then((res: any) => {
      setRankList(res.list);
      Toast.hide();
    });
  };

  const handleBack = () => {
    props.history.go(-1);
  };

  const redirectToSonglistDetail = (id: string) => {
    props.history.push(`/songlist/${id}`);
  };

  return (
    <div className="rank">
      <TopTab type="text" text="排行榜" left={true} onLeft={handleBack} />
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
      <BottomTab active="home" />
    </div>
  );
};
