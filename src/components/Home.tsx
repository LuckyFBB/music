/*
 * @Authors: FBB
 * @Date: 2019-08-13 21:34:54
 * @LastEditors: FBB
 * @LastEditTime: 2019-08-22 23:27:07
 */

import React, { useEffect, useState } from 'react'
import { BottomTab } from './widget/BottomTab'
import { TopTab } from './widget/TopTab';
import { store } from '../store/store'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Home = () => {

  const [bannerList, setBannerList] = useState([])
  useEffect(() => {
    getBannerList(1)
  },[])

  const getBannerList = (type: number) => {
    store.getBannerList(type).then((res: any) => {
      setBannerList(res.banners)
    })
  }
  
  return (
    <div className='home'>
      <TopTab left={false} right={false} type='text' text='云音乐' />
      <div className='home__banner'>
        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} showArrows={false}>
          {bannerList.map((item: any) => (
            <div className='banner__item' key={item.picUrl}>
              <img src={item.picUrl} alt=""/>
            </div>
          ))}
        </Carousel>
      </div>
      <BottomTab active='home' />
    </div>
  )
}