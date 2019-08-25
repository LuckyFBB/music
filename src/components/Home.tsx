/*
 * @Authors: FBB
 * @Date: 2019-08-13 21:34:54
 * @LastEditors: FBB
 * @LastEditTime: 2019-08-25 23:16:33
 */

import React, { useEffect, useState } from 'react'
import { BottomTab } from './widget/BottomTab'
import { TopTab } from './widget/TopTab';
import { store } from '../store/store'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HOME_ICONS_OPTIONS } from './enums'
import { SongList } from './widget/SongList';

export const Home = () => {
  const [bannerList, setBannerList] = useState([])
  const [personalizedList, setPersonalizedList] = useState([])   //热门推荐歌单

  useEffect(() => {
    getBannerList(1)
    getPersonalizedList()
  }, [])

  //获取banner
  const getBannerList = (type: number) => {
    store.getBanner(type).then((res: any) => {
      setBannerList(res.banners)
    })
  }

  //获取热门推荐
  const getPersonalizedList = (limit: number = 0) => {
    store.getPersonalized(limit).then((res: any) => {
      setPersonalizedList(res.result)
    })
  }

  return (
    <div className='home'>
      <TopTab left={false} right={false} type='text' text='云音乐' />
      <div className='home__block'></div>
      <div className='home__banner'>
        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} showArrows={false}>
          {bannerList.map((item: any) => (
            <div className='banner__item' key={item.picUrl}>
              <img src={item.picUrl} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className='home__icons'>
        {HOME_ICONS_OPTIONS.map(([title, icon]) => (
          <div className='icon__item' key={title}>
            <div className='item__img'>
              <img src={icon} alt={title} />
            </div>
            <p className='item__title'>{title}</p>
          </div>
        ))}
      </div>
      <div className='home__personalized'>
        <div className='personalized__header'>
          <span className='title'>推荐歌单</span>
          <span className='redirect'>歌单广场</span>
        </div>
        <div className='personalized__content'>
          <SongList list={personalizedList.slice(0, 6)} />
        </div>
      </div>
      <BottomTab active='home' />
    </div>
  )
}