/*
 * @Author: FBB
 * @Date: 2020-11-05 15:32:53
 * @LastEditors: FBB
 * @LastEditTime: 2020-11-05 15:41:46
 * @Description: 点击某个元素外部的hooks
 */
import { RefObject, useEffect } from "react";
const useClickOutSide = (ref: RefObject<HTMLElement>, handler: Function) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as HTMLElement)) {
        return;
      }
      handler(e);
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
};
export default useClickOutSide;
