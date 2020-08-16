import React, { useEffect, useState } from "react";
import { TopTab } from "@/components/widget/TopTab";
import { getRecommendSongs } from "@/store/api";
import bg from "@/static/recommend_bg.jpg";
import SongList from "@/components/widget/SongList";
import { Toast } from "antd-mobile";
import left from "@/static/icon/left_arrow.png";
import { connect } from "react-redux";
import {
  changePlayListAction,
  initSequenceListAction,
} from "@/actions/playAction";
import { changeTotalCountAction } from "@/actions/albumAction";

interface ISPorps {
  history: any;
  changePlayList: Function;
  initSequenceList: Function;
  changeTotalCount: Function;
}

const Recommend = (props: ISPorps) => {
  const { changePlayList, initSequenceList, changeTotalCount } = props;

  useEffect(() => {
    Toast.loading("加载中");
    getRecommendSongsFunc();
  }, []);

  const getRecommendSongsFunc = () => {
    getRecommendSongs().then((res: any) => {
      changePlayList(res.data.dailySongs);
      initSequenceList(res.data.dailySongs);
      changeTotalCount(res.data.dailySongs.length);
      Toast.hide();
    });
  };

  const handleBack = () => {
    props.history.go(-1);
  };

  return (
    <div className="recommend">
      <TopTab text="每日推荐" type="text" left={left} onLeft={handleBack} />
      <div className="recommend__header">
        <img className="recommend__img" src={bg} alt="" />
      </div>
      <div className="recommend__content">
        <SongList history={props.history} />
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Function) => ({
  changePlayList: (list: []) => dispatch(changePlayListAction(list)),
  initSequenceList: (list: []) => dispatch(initSequenceListAction(list)),
  changeTotalCount: (number: number) => {
    dispatch(changeTotalCountAction(number));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
