/*
 * @Authors: FBB
 * @Date: 2019-08-13 21:34:54
 * @LastEditors: FBB
 * @LastEditTime: 2019-08-21 21:10:25
 */

import React from 'react'
import { BottomTab } from './widget/BottomTab'
import { TopTab } from './widget/TopTab';

export const Home = () => {
  return (
    <div className='home'>
      <TopTab left={false} right={false} type='search'/>
      <BottomTab active='home' />
    </div>
  )
}