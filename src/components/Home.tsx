/*
 * @Author: FBB
 * @Date: 2019-08-13 21:34:54
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-16 20:24:52
 * @Description: 首页
 */

import React, { useEffect, useState } from "react";
import { BottomTab } from "@/components/widget/BottomTab";
import { TopTab } from "@/components/widget/TopTab";
import { getBanner, getPersonalized, comfirmLoginStatus } from "@/store/api";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HOME_ICONS_OPTIONS } from "@/share/enums";
import { SongBlock } from "@/components/widget/SongBlock";
import { Toast } from "antd-mobile";
import search from "@/static/icon/search.png";

export const Home = (props: any) => {
  const [bannerList, setBannerList] = useState([]);
  const [personalizedList, setPersonalizedList]: [
    Array<{ [propName: string]: string }>,
    Function
  ] = useState([]); //热门推荐歌单

  useEffect(() => {
    Toast.loading("加载中");
    getBannerList(1);
    getPersonalizedList();
    //comfirmStatus();
  }, []);

  //获取banner
  const getBannerList = (type: number) => {
    getBanner(type).then((res: any) => {
      setBannerList(res.banners);
    });
  };

  //获取热门推荐
  const getPersonalizedList = (limit: number = 30) => {
    getPersonalized(limit).then((res: any) => {
      setPersonalizedList(res.result);
      Toast.hide();
    });
  };

  const redirectToPath = (path: string) => {
    if (path === "recommend") {
      //如果是每日推荐，需要判断是否登录
      comfirmLoginStatus().then(() => {
        props.history.push(path);
      });
    } else if (path === "radio") {
      alert("还在开发,未上线");
    } else {
      props.history.push(path);
    }
  };

  const redirectToSonglistDetail = (id: number) => {
    props.history.push(`/music/${id}`);
  };

  return (
    <div className="home">
      <TopTab
        type="text"
        text="云音乐"
        right={search}
        onRight={() => redirectToPath("/search")}
      />
      <div className="home__container">
        <div className="home__banner">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
          >
            {bannerList.map((item: any, index: number) => (
              <div className="banner__item" key={index}>
                <img src={item.pic} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="home__icons">
          {HOME_ICONS_OPTIONS.map(([path, title, icon]) => (
            <div
              className="icon__item"
              key={title}
              onClick={() => redirectToPath(path)}
            >
              <div className="item__img">
                <img src={icon} alt={title} />
              </div>
              <p className="item__title">{title}</p>
            </div>
          ))}
        </div>
        <div className="home__personalized">
          <div className="personalized__header">
            <span className="title">推荐歌单</span>
            <span className="redirect" onClick={() => redirectToPath("/music")}>
              歌单广场
            </span>
          </div>
          <div className="personalized__content">
            <SongBlock
              list={personalizedList.slice(0, 6)}
              onClick={redirectToSonglistDetail}
            />
          </div>
        </div>
      </div>
      <BottomTab active="home" history={props.history} />
    </div>
  );
};
