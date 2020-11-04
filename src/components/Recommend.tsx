import React, { useEffect } from "react";
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
import {
  changeTotalCountAction,
  initCurrentAlbumAction,
} from "@/actions/albumAction";

interface ISPorps {
  history: any;
  initCurrentAlbum: Function;
  changeTotalCount: Function;
}

const Recommend = (props: ISPorps) => {
  const { initCurrentAlbum, changeTotalCount } = props;

  useEffect(() => {
    Toast.loading("加载中");
    getRecommendSongsFunc();
  }, []);

  const getRecommendSongsFunc = () => {
    getRecommendSongs().then((res: any) => {
      initCurrentAlbum({ tracks: res.data.dailySongs });
      changeTotalCount(res.data.dailySongs.length);
      Toast.hide();
    });
  };

  const handleBack = () => {
    props.history.go(-1);
  };

  return (
    <div className="container">
      <TopTab left={left} onLeft={handleBack}>
        <div className="top__container">
          <p className="top__text">每日推荐</p>
        </div>
      </TopTab>
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
  initCurrentAlbum: (album: {}) => dispatch(initCurrentAlbumAction(album)),
  changePlayList: (list: []) => dispatch(changePlayListAction(list)),
  initSequenceList: (list: []) => dispatch(initSequenceListAction(list)),
  changeTotalCount: (number: number) => {
    dispatch(changeTotalCountAction(number));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
