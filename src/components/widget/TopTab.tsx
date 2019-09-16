/*
 * @Author: FBB
 * @Date: 2019-08-13 21:34:54
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-16 22:08:36
 */

import React from "react";

interface ISProps {
  left?: string;
  right?: string;
  type: string;
  text?: string;
  onLeft?: () => void;
  onRight?: () => void;
}

export const TopTab = (props: ISProps) => {
  const { left, right, onRight, onLeft, type, text } = props;
  const renderTop = (type: string) => {
    switch (type) {
      case "text":
        return <div className="top__text">{text || "云音乐"}</div>;
      case "search":
        return (
          <div className="top__search">
            <input type="text" placeholder="请输入" />
          </div>
        );
    }
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
          <img className="top__slideimg" src={right} alt="" onClick={onRight} />
        </div>
      )}
    </div>
  );
};
