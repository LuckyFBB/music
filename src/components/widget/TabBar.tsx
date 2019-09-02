/*
 * @Author: FBB
 * @Date: 2019-09-01 15:48:24
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-02 23:08:47
 * @Description: 歌单广场tabbar
 */

import React, { useState, useEffect } from "react";
import cx from "classnames";
import { store } from "../../store/store";

interface ISProps {
  changHotPlayDetail: (tag: string) => void;
}

export const TabBar = (props: ISProps) => {
  const { changHotPlayDetail } = props;

  const [tag, setTag] = useState("");
  const [hotTagList, setHotTagList]: [
    Array<{ [propName: string]: string | number }>,
    Function
  ] = useState([]);

  useEffect(() => {
    getHotPlayList();
  }, []);

  const getHotPlayList = () => {
    store.getHotPlay().then((res: any) => {
      setHotTagList(res.tags);
      setTag(res.tags[0].name);
      changHotPlayDetail(res.tags[0].name);
    });
  };

  const handleClick = (item: any) => {
    setTag(item.name);
    changHotPlayDetail(item.name);
  };

  return (
    <div className="tabbar">
      {hotTagList.map((item: any) => (
        <span
          key={item.id}
          className={cx("tabbar__item", {
            "tabbar__item--active": tag === item.name
          })}
          onClick={() => handleClick(item)}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};
