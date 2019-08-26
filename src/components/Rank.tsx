/*
 * @Author: FBB
 * @Date: 2019-08-26 20:19:16
 * @LastEditors: FBB
 * @LastEditTime: 2019-08-26 22:46:42
 * @Description: 排行榜
 */

import React, { useEffect, useState } from 'react'
import { TopTab } from './widget/TopTab';
import { BottomTab } from './widget/BottomTab';
import { RankList } from './widget/RankList'
import { store } from '../store/store';

export const Rank = () => {
  const [rankList, setRankList] = useState([])
  useEffect(() => {
    getTopListDetail()
  }, [])

  const getTopListDetail = () => {
    store.getTopListDetail().then((res: any) => {
      setRankList(res.list)
    })
  }
  return (
    <div className='rank'>
      <TopTab type='text' text='排行榜' left={true} />
      <div className='rank__container'>
        <div className='rank__content'>
          <div className='rank__title'>官方榜</div>
          <RankList ranklist={rankList.slice(0, 4)} type='line' />
        </div>
        <div className='rank__content'>
          <div className='rank__title'>推荐磅</div>
          <RankList ranklist={rankList.slice(4)} type='block' />
        </div>
      </div>
      <BottomTab active='home' />
    </div>
  )
}