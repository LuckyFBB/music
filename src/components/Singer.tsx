import React, { useState, useEffect } from "react";
import { TopTab } from "./widget/TopTab";
import { BottomTab } from "./widget/BottomTab";
import { TabBar } from "./widget/TabBar";
import { store } from "../store/store";
import { SingerList } from "./widget/SingerList";

const tagList = [
  {
    name: "热门",
    id: 0
  },
  {
    name: "华语男歌手",
    id: 1001
  },
  {
    name: "华语女歌手",
    id: 1002
  },
  {
    name: "华语组合/乐队 ",
    id: 1003
  },
  {
    name: "欧美男歌手",
    id: 2001
  },
  {
    name: "欧美女歌手",
    id: 2002
  },
  {
    name: "欧美组合/乐队",
    id: 2003
  },
  {
    name: "日本男歌手",
    id: 6001
  },
  {
    name: "日本女歌手",
    id: 6002
  },
  {
    name: "日本组合/乐队",
    id: 6003
  },
  {
    name: "韩国男歌手",
    id: 7001
  },
  {
    name: "韩国女歌手",
    id: 7002
  },
  {
    name: "韩国组合/乐队",
    id: 7003
  },
  {
    name: "其他男歌手",
    id: 4001
  },
  {
    name: "其他女歌手",
    id: 4002
  },
  {
    name: "其他组合/乐队",
    id: 4003
  }
];

export const Singer = () => {
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

  return (
    <div className="singer">
      <TopTab text="歌手" type="text" />
      <TabBar current={tag} tagList={tagList} onChange={changeSingerCategory} />
      <div className="singer__container">
        <SingerList list={singerList} />
      </div>
      <BottomTab active="singer" />
    </div>
  );
};
