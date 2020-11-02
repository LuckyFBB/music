/*
 * @Author: FBB
 * @Date: 2019-08-13 21:34:54
 * @LastEditors: FBB
 * @LastEditTime: 2020-11-02 22:13:19
 */

import React, { CSSProperties, useState } from "react";

interface ISProps {
  left?: string;
  right?: string;
  type: string;
  text?: string;
  placeholder?: string;
  style?: CSSProperties;
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
    style,
    text = "云音乐",
    placeholder = "请输入",
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
    <div className="top" style={style}>
      {left && (
        <img
          className="top__slideimg img--left"
          src={left}
          alt=""
          onClick={onLeft}
        />
      )}
      <div className="top__container">{renderTop(type)}</div>
      {right && (
        <div className="top__right">
          <img
            className="top__slideimg img--right"
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
