/*
 * @Author: FBB
 * @Date: 2020-09-03 11:27:12
 * @LastEditors: FBB
 * @LastEditTime: 2020-09-03 20:46:21
 * @Description: 滚动组件
 */
import React, { useRef, useEffect, useState } from "react";
import BScroll from "better-scroll";
import BScrollConstructor from "better-scroll";

interface ISProps {
  direction?: string;
  click?: boolean;
  children: any;
  refresh?: boolean;
  cx?: string;
  pullUpStatus?: boolean;
  pullUp?: Function;
}

export const Scroll = (props: ISProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  let [bs, setBs] = useState<BScrollConstructor>();
  const { direction, refresh, click, cx } = props;

  useEffect(() => {
    if (scrollRef.current) {
      bs = new BScroll(scrollRef.current, {
        scrollY: direction === "horizental",
        scrollX: direction === "vertical",
        click,
        probeType: 3,
      });
    }
    setBs(bs);
  }, [props.children]);

  useEffect(() => {
    if (refresh && bs) {
      bs.refresh();
      bs.scrollTo(0, 10);
    }
  }, [bs]);

  return (
    <div className={`wrapper ${cx}`} ref={scrollRef}>
      {props.children}
    </div>
  );
};

Scroll.defaultProps = {
  direction: "horizental",
  refresh: true,
  click: true,
  cx: "",
  pullUp: null,
  pullUpStatus: false,
};
