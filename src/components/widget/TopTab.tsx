/*
 * @Author: FBB
 * @Date: 2019-08-13 21:34:54
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-18 23:00:07
 */

import React, { useState } from "react";

interface ISProps {
  left?: string;
  right?: string;
  type: string;
  text?: string;
  placeholder?: string;
  onLeft?: () => void;
  onRight?: (value?: string) => void;
}

export const TopTab = (props: ISProps) => {
  const {
    left,
    right,
    onRight,
    onLeft,
    type,
    text = "云音乐",
    placeholder = "请输入"
  } = props;
  const [value, setValue] = useState("");
  const renderTop = (type: string) => {
    switch (type) {
      case "text":
        return <div className="top__text">{text}</div>;
      case "search":
        return (
          <div className="top__search">
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
            />
          </div>
        );
    }
  };
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="top">
      {left && (
        <div className="top__left">
          <img className="top__slideimg 1" src={left} alt="" onClick={onLeft} />
        </div>
      )}
      <div className="top__container">{renderTop(type)}</div>
      {right && (
        <div className="top__right">
          <img
            className="top__slideimg"
            src={right}
            alt=""
            onClick={() => {
              onRight && onRight(value);
            }}
          />
        </div>
      )}
    </div>
  );
};
