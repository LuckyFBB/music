/*
 * @Author: FBB
 * @Date: 2020-08-31 15:33:49
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-31 22:05:14
 * @Description: 字母表
 */
import React from "react";
import { getAlphabet } from "@/utils/utils";
import cx from "classnames";

interface ISProps {
  initial: string;
  onChange: Function;
}

export const Alphabet = (props: ISProps) => {
  const { initial, onChange } = props;
  return (
    <ul className="alphabet">
      {getAlphabet().map((item) => (
        <li
          key={item}
          className={cx({ current: initial === item })}
          onClick={() => onChange(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
