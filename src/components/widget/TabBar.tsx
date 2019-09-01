/*
 * @Author: FBB
 * @Date: 2019-09-01 15:48:24
 * @LastEditors: FBB
 * @LastEditTime: 2019-09-01 21:29:03
 * @Description: 歌单广场tabbar
 */

import React, { useState, useEffect } from 'react'
import cx from 'classnames'

interface ISProps {
  current: number,
  tabs: Array<Object>,
  onChange: () => void
}

export const TabBar = (props: ISProps) => {
  const { tabs } = props

  const [current, setCurrent] = useState(props.current)

  const handleClick = (item: any, index: number) => {
    setCurrent(index)
    console.log(item, index)
  }

  return (
    <div className='tabbar'>
      {tabs.map((item: any, index: number) => (
        <span
          key={item.id}
          className={cx('tabbar__item', { 'tabbar__item--active': index === current })}
          onClick={() => handleClick(item, index)}
        >
          {item.name}
        </span>
      ))}
    </div>
  )
}