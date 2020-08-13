/*
 * @Author: FBB
 * @Date: 2019-09-01 15:48:24
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-04 19:22:50
 * @Description: 歌单广场tabbar
 */

import React from "react";
import cx from "classnames";

interface ISProps {
  onChange: (tag: string) => void; //改变tag的点击函数
  current: string; //当前的tag
  tagList: Array<{ [propName: string]: string | number }>; //渲染的taglist
}

export const TabBar = (props: ISProps) => {
  const { onChange, current, tagList } = props;
  const handleClick = (item: any) => {
    onChange(item);
  };

  return (
    <div className="tabbar">
      {tagList.map((item: any) => (
        <span
          key={item.id}
          className={cx("tabbar__item", {
            "tabbar__item--active": current === item.name,
          })}
          onClick={() => handleClick(item)}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};
