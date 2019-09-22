/*
 * @Author: FBB
 * @Date: 2019-09-09 21:42:57
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-22 15:59:54
 * @Description: 账号信息展示页
 */

import React, { useEffect, useState } from "react";
import { BottomTab } from "./widget/BottomTab";
import { TopTab } from "./widget/TopTab";
import { store } from "../store/store";
import { Toast } from "antd-mobile";
import edit from "../static/icon/edit.png";

export const Account = (props: any) => {
  const [profile, setProfile]: [
    { [propName: string]: string },
    Function
  ] = useState({});

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
    store.getUserDetail(uid).then((res: any) => {
      setProfile(res.profile);
    });
  };

  const handleLoginout = () => {
    store.loginOut().then(res => {
      console.log(res);
    });
  };

  return (
    <div className="account">
      <TopTab type="text" text="账号" />
      <div className="account__content">
        <div
          className="account__bg"
          style={{ backgroundImage: "url(" + `${profile.backgroundUrl}` + ")" }}
        ></div>
        <div className="account__header">
          <img src={profile.avatarUrl} alt="" />
          <span className="nick">{profile.nickname}</span>
        </div>
        <div className="account__show">
          <div className="item">
            <span className="title">关注</span>
            <span className="subtitle">{profile.follows}</span>
          </div>
          <div className="item">
            <span className="title">粉丝</span>
            <span className="subtitle">{profile.followeds}</span>
          </div>
          <div className="item">
            <span className="title">歌单</span>
            <span className="subtitle">{profile.playlistCount}</span>
          </div>
          <div className="item">
            <span className="title">编辑资料</span>
            <img className="img" src={edit} alt="edit" />
          </div>
        </div>
        <div className="account__button" onClick={handleLoginout}>
          退出登录
        </div>
      </div>
      <BottomTab active="account" />
    </div>
  );
};
