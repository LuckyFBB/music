/*
 * @Author: FBB
 * @Date: 2019-08-13 21:34:54
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-09 21:46:19
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import mine from "../../static/icon/mine.png";
import mine_active from "../../static/icon/mine_active.png";
import singer from "../../static/icon/singer.png";
import singer_active from "../../static/icon/singer_active.png";
import account from "../../static/icon/account.png";
import account_active from "../../static/icon/account_active.png";
import home from "../../static/icon/home.png";
import home_active from "../../static/icon/home_active.png";

interface ISProps {
  active: string;
}

const TAB_MAP = [
  {
    key: "home",
    title: "发现",
    default_img: home,
    active_img: home_active,
    link: "/home"
  },
  {
    key: "singer",
    title: "歌手",
    default_img: singer,
    active_img: singer_active,
    link: "/singer"
  },
  {
    key: "mine",
    title: "我的",
    default_img: mine,
    active_img: mine_active,
    link: "/home"
  },
  {
    key: "account",
    title: "账号",
    default_img: account,
    active_img: account_active,
    link: "/account"
  }
];

export const BottomTab = (props: ISProps) => {
  const [active, setActive] = useState(props.active);

  return (
    <div className="tabs">
      {TAB_MAP.map(item => (
        <Link to={item.link} key={item.key}>
          <div
            className="tabs__item"
            onClick={() => {
              setActive(item.key);
            }}
          >
            <div
              className={classnames({
                tabs__active: active === item.key
              })}
            >
              <img
                alt={item.title}
                className={classnames("tabs__img", {
                  "tabs__img--active": active === item.key
                })}
                src={
                  `${active}` === item.key ? item.active_img : item.default_img
                }
              />
            </div>
            <p
              className={classnames(
                `tabs__title ${
                  active === item.key ? "tabs__title--active" : ""
                }`
              )}
            >
              {item.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
