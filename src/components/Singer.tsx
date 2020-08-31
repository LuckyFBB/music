import React, { useState, useEffect } from "react";
import { TopTab } from "@/components/widget/TopTab";
import { BottomTab } from "@/components/widget/BottomTab";
import { TabBar } from "@/components/widget/TabBar";
import { getCategorySinger } from "@/store/api";
import SingerList from "@/components/widget/SingerList";
import { HasMore } from "@/components/widget/HasMore";
import { TAG_LIST } from "@/share/enums";
import { connect } from "react-redux";
import { changeSingerTag, changeSingerListAction } from "actions/musicAction";
import { Alphabet } from "./widget/Alphabet";

const Singer = (props: any) => {
  const { singerTag, changeTag, changeSingerList, singerList } = props;
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoding] = useState(false);
  const [page, setPage] = useState(0); //当前分页页数
  const [initial, setInitial] = useState(""); //当前靠字母搜索

  const getSingerTypeByName = () => {
    return TAG_LIST.filter((item) => {
      return item.name === singerTag;
    })[0];
  };

  const { type, area } = getSingerTypeByName();

  useEffect(() => {
    setIsLoding(true);
    getCategorySingerFunc();
  }, []);

  useEffect(() => {
    console.log(1111);
    getCategorySingerFunc();
  }, [singerTag, initial]);

  //处理第一次获取当前tag下的singerlist
  const getCategorySingerFunc = () => {
    setIsLoding(true);
    getCategorySinger(type, area, 0, initial).then((res: any) => {
      changeSingerList(res.artists);
      setHasMore(res.more);
      setIsLoding(false);
      setPage(1);
    });
  };

  //处理获取更多singerlist
  const getMoreSinger = () => {
    getCategorySinger(type, area, page, initial).then((res: any) => {
      changeSingerList([...singerList, ...res.artists]);
      setHasMore(res.more);
      setIsLoding(false);
      setPage(page + 1);
    });
  };

  const handleChangeSingerTag = (item: any) => {
    if (item.name === singerTag) return;
    setInitial("");
    changeTag(item.name);
  };

  const redirectToSinger = (id: string) => {
    props.history.push(`/singer/${id}`);
  };

  return (
    <div className="singer">
      <TopTab text="歌手" type="text" />
      <TabBar
        current={singerTag}
        tagList={TAG_LIST}
        onChange={(item) => handleChangeSingerTag(item)}
      />
      <div className="singer__container">
        <SingerList onClick={redirectToSinger} />
      </div>
      <Alphabet
        initial={initial}
        onChange={(item: string) => setInitial(item)}
      />
      {hasMore && <HasMore handleMore={getMoreSinger} isLoading={isLoading} />}
      <BottomTab active="singer" history={props.history} />
    </div>
  );
};

const mapStateProps = (state: any) => ({
  singerTag: state.musicReducer.singerTag,
  singerList: state.musicReducer.singerList,
});

const mapDispatchToProps = (dispatch: Function) => ({
  changeTag: (tag: string) => dispatch(changeSingerTag(tag)),
  changeSingerList: (list: []) => dispatch(changeSingerListAction(list)),
});

export default connect(mapStateProps, mapDispatchToProps)(Singer);
