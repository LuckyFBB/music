/*
 * @Author: FBB
 * @Date: 2019-08-13 21:34:54
 * @LastEditors: FBB
 * @LastEditTime: 2020-07-07 17:15:44
 */

import React, { useState } from "react";
import { comfirmLoginStatus } from "@/store/api";
import classnames from "classnames";
import { TAB_MAP } from "@/share/enums";

interface ISProps {
  active: string;
  history: any;
}

export const BottomTab = (props: ISProps) => {
  const [active, setActive] = useState(props.active);

  const redirectToPath = (key: string) => {
    setActive(key);
    if (key === "mine" || key === "account") {
      //如果是每日推荐，需要判断是否登录
      comfirmLoginStatus().then(() => {
        props.history.push(key);
      });
    } else {
      props.history.push(key);
    }
  };

  return (
    <div className="tabs">
      {TAB_MAP.map((item) => (
        <div
          className="tabs__item"
          onClick={() => {
            redirectToPath(item.key);
          }}
          key={item.key}
        >
          <div
            className={classnames({
              tabs__active: active === item.key,
            })}
          >
            <img
              alt={item.title}
              className={classnames("tabs__img", {
                "tabs__img--active": active === item.key,
              })}
              src={
                `${active}` === item.key ? item.active_img : item.default_img
              }
            />
          </div>
          <p
            className={classnames(
              `tabs__title ${active === item.key ? "tabs__title--active" : ""}`
            )}
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};
