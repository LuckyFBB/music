/*
 * @Author: FBB
 * @Date: 2020-09-03 11:27:12
 * @LastEditors: FBB
 * @LastEditTime: 2020-11-08 22:46:27
 * @Description: 滚动组件
 */
import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import BScroll from "better-scroll";
import BScrollConstructor from "better-scroll";

interface ISProps {
  direction?: string;
  click?: boolean;
  children: React.ReactChild;
  refresh?: boolean;
  cx?: string;
  pullUpStatus?: boolean;
  pullUp?: Function;
}

export const Scroll = forwardRef((props: ISProps, ref: any) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  let [bs, setBs] = useState<BScrollConstructor | null>();
  const { direction, click, cx, pullUp, refresh, pullUpStatus } = props;

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
    return () => {
      setBs(null);
    };
  }, []);

  useEffect(() => {
    if (refresh && bs) {
      bs.refresh();
    }
  });

  useEffect(() => {
    if (!bs || !pullUp) return;
    const handlePullUp = () => {
      if (bs && bs.y <= bs.maxScrollY + 100 && pullUpStatus) {
        pullUp();
      }
    };
    bs.on("scrollEnd", handlePullUp);
    return () => {
      bs && bs.off("scrollEnd", handlePullUp);
    };
  }, [pullUp, pullUpStatus, bs]);

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bs) {
        bs.refresh();
        bs.scrollTo(0, 0);
      }
    },
    getBScroll() {
      if (bs) {
        return bs;
      }
    },
  }));

  return (
    <div className={`wrapper ${cx}`} ref={scrollRef}>
      {props.children}
    </div>
  );
});

Scroll.defaultProps = {
  direction: "horizental",
  click: true,
  cx: "",
  refresh: true,
  pullUp: () => {},
  pullUpStatus: false,
};
