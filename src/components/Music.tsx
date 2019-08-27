/*
 * @Author: FBB
 * @Date: 2019-08-27 21:35:13
 * @LastEditors: FBB
 * @LastEditTime: 2019-08-27 21:43:59
 * @Description: 首页榜单组件
 */

import React from 'react'
import { TopTab } from './widget/TopTab';

export const Music = (props: any) => {

  const handleBack = () => {
    props.history.go(-1)
  }
  return (
    <TopTab text='歌单广场' left={true} type='text' onLeft={handleBack} />
  )
}