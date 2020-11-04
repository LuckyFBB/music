/*
 * @Author: FBB
 * @Date: 2019-08-13 21:34:54
 * @LastEditors: FBB
 * @LastEditTime: 2020-11-04 21:31:03
 */

import React, { CSSProperties } from "react";

interface ISProps {
  left?: string;
  right?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  onLeft?: () => void;
  onRight?: (value?: string) => void;
}

export const TopTab: React.FC<ISProps> = (props) => {
  const { left, right, onRight, onLeft, style, children } = props;
  return (
    <div className="top" style={style}>
      {left && (
        <div className="top__side">
          <img
            src={left}
            alt=""
            onClick={() => {
              onLeft && onLeft();
            }}
          />
        </div>
      )}
      {children}
      {right && (
        <div className="top__side">
          <img
            src={right}
            alt=""
            onClick={() => {
              onRight && onRight();
            }}
          />
        </div>
      )}
    </div>
  );
};
