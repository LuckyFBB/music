/*
 * @Author: FBB
 * @Date: 2019-09-09 21:42:57
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-09 23:13:23
 * @Description: 账号信息展示页
 */

import React, { useEffect } from "react";
import { BottomTab } from "./widget/BottomTab";
import { TopTab } from "./widget/TopTab";
import { store } from "../store/store";
import { Toast } from "antd-mobile";

export const Account = (props: any) => {
  const uid = store.getStorage("uid");
  useEffect(() => {
    const isLogin = !!uid;
    if (!isLogin) {
      Toast.show("未登录，前去登录");
      setTimeout(() => {
        props.history.push("/login");
      }, 1000);
    }
    getUserDetail();
  }, []);

  const getUserDetail = () => {
    store.getUserDetail(uid as string).then(res => {
      console.log(res);
    });
  };

  return (
    <div className="account">
      <TopTab type="text" text="账号" />
      <BottomTab active="account" />
    </div>
  );
};
