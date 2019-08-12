import React from 'react'
import { BottomTab } from './widget/BottomTab'
import { TopTab } from './widget/TopTab';

export const Home = () => {
  return (
    <div className='home'>
      <TopTab />
      <BottomTab active='home' />
    </div>
  )
}