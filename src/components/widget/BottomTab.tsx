/*
 * @Author: FBB
 * @Date: 2019-08-13 21:34:54
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-12 16:00:19
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { TAB_MAP } from "@/components/enums";

interface ISProps {
  active: string;
}

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
