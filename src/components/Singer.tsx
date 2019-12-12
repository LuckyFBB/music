import React, { useState, useEffect } from "react";
import { TopTab } from "@/components/widget/TopTab";
import { BottomTab } from "@/components/widget/BottomTab";
import { TabBar } from "@/components/widget/TabBar";
import { store } from "@/store/store";
import { SingerList } from "@/components/widget/SingerList";
import { TAG_LIST } from "@/share/enums";

export const Singer = (props: any) => {
  const [tag, setTag] = useState("热门");
  const [singerList, setSingerList] = useState([]);

  useEffect(() => {
    getTopSinger();
  }, []);

  const changeSingerCategory = (item: any) => {
    setTag(item.name);
    if (item.id === 0) {
      getTopSinger();
    } else {
      getCategorySinger(item.id);
    }
  };

  const getTopSinger = () => {
    store.getTopSinger().then((res: any) => {
      setSingerList(res.artists);
    });
  };

  const getCategorySinger = (cat: number) => {
    store.getCategorySinger(cat).then((res: any) => {
      setSingerList(res.artists);
    });
  };

  const redirectToSinger = (id: string) => {
    props.history.push(`/singerlist/${id}`);
  };

  return (
    <div className="singer">
      <TopTab text="歌手" type="text" />
      <TabBar
        current={tag}
        tagList={TAG_LIST}
        onChange={changeSingerCategory}
      />
      <div className="singer__container">
        <SingerList list={singerList} onClick={redirectToSinger} />
      </div>
      <BottomTab active="singer" />
    </div>
  );
};
