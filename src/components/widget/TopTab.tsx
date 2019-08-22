/*
 * @Author: FBB
 * @Date: 2019-08-13 21:34:54
 * @LastEditors: FBB
 * @LastEditTime: 2019-08-22 22:11:37
 */

import React from 'react'
interface ISProps {
  left?: boolean,
  right?: boolean,
  type: string,
  text?: string
}

export const TopTab = (props: ISProps) => {
  const renderTop = (type: string) => {
    switch (type) {
      case 'text':
        return (
          <div className='top__text'>{props.text}</div>
        )
      case 'search':
        return (
          <div className='top__search'>
            <input type="text" placeholder='请输入' />
          </div>
        )
    }
  }
  return (
    <div className='top'>
      {props.left && <div className='top__left'>left</div>}
      <div className='top__container'>
        {renderTop(props.type)}
      </div>
      {props.right && <div className='top__right'>right</div>}
    </div>
  )
}