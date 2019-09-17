/*
 * @Author: FBB
 * @Date: 2019-09-09 21:42:57
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-17 22:04:44
 * @Description: 账号信息展示页
 */

import React, { useEffect } from "react";
import { BottomTab } from "./widget/BottomTab";
import { TopTab } from "./widget/TopTab";
import { store } from "../store/store";
import { Toast } from "antd-mobile";

export const Account = (props: any) => {
  useEffect(() => {
    comfirmStatus();
  }, []);

  const comfirmStatus = () => {
    store.comfirmLoginStatus().then((res: any) => {
      if (res.code === 200) {
        getUserDetail(res.profile.userId);
      } else {
        Toast.show("尚未登录，前去登录");
        window.setTimeout(() => {
          props.history.push("/login");
        });
      }
    });
  };

  const getUserDetail = (uid: string) => {
    store.getUserDetail(uid).then(res => {
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
