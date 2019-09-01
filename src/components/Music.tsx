/*
 * @Author: FBB
 * @Date: 2019-08-27 21:35:13
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-01 16:24:23
 * @Description: 首页榜单组件
 */

import React, { useEffect, useState } from 'react'
import { TopTab } from './widget/TopTab';
import { store } from '../store/store';
import { TabBar } from './widget/TabBar';

export const Music = (props: any) => {
  const [hotPlayList, setHotPlayList] = useState([])

  useEffect(() => {
    getHotPlayList()
  }, [])

  const getHotPlayList = () => {
    store.getHotPlay().then((res: any) => {
      setHotPlayList(res.tags)
    })
  }

  const handleBack = () => {
    props.history.go(-1)
  }

  const changeTabBar = () => {

  }

  return (
    <div className='music'>
      <TopTab text='歌单广场' left={true} type='text' onLeft={handleBack} />
      <TabBar tabs={hotPlayList} current={0} onChange={changeTabBar} />
    </div>

  )
}