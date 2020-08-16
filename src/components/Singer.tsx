import React, { useState, useEffect } from "react";
import { TopTab } from "@/components/widget/TopTab";
import { BottomTab } from "@/components/widget/BottomTab";
import { TabBar } from "@/components/widget/TabBar";
import { getCategorySinger } from "@/store/api";
import { SingerList } from "@/components/widget/SingerList";
import { TAG_LIST } from "@/share/enums";
import { connect } from "react-redux";
import { changeSingerTag } from "actions/musicAction";

const Singer = (props: any) => {
  const { singerTag, changeTag } = props;
  const [singerList, setSingerList] = useState([]);

  useEffect(() => {
    const { type, area } = getSingerTypeByName();
    getCategorySingerFunc(type, area);
  }, []);

  const changeSingerCategory = (item: any) => {
    changeTag(item.name);
    getCategorySingerFunc(item.type, item.area);
  };

  const getCategorySingerFunc = (type: number, area: number) => {
    getCategorySinger(type, area).then((res: any) => {
      setSingerList(res.artists);
    });
  };

  const redirectToSinger = (id: string) => {
    props.history.push(`/singer/${id}`);
  };

  const getSingerTypeByName = () => {
    return TAG_LIST.filter((item) => {
      return item.name === singerTag;
    })[0];
  };

  return (
    <div className="singer">
      <TopTab text="歌手" type="text" />
      <TabBar
        current={singerTag}
        tagList={TAG_LIST}
        onChange={changeSingerCategory}
      />
      <div className="singer__container">
        <SingerList list={singerList} onClick={redirectToSinger} />
      </div>
      <BottomTab active="singer" history={props.history} />
    </div>
  );
};

const mapStateProps = (state: any) => ({
  singerTag: state.musicReducer.singerTag,
});

const mapDispatchToProps = (dispatch: Function) => ({
  changeTag: (tag: string) => dispatch(changeSingerTag(tag)),
});

export default connect(mapStateProps, mapDispatchToProps)(Singer);
