/*
 * @Author: FBB
 * @Date: 2019-08-13 21:34:54
 * @LastEditors: FBB
 * @LastEditTime: 2019-08-26 20:36:43
 */

import React from 'react'
import left from '../../static/icon/left_arrow.png'
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
          <div className='top__text'>{props.text || '云音乐'}</div>
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
      {props.left && <div className='top__left'>
        <img className='top__slideimg' src={left} alt='' />
      </div>}
      <div className='top__container'>
        {renderTop(props.type)}
      </div>
      {props.right && <div className='top__right'>right</div>}
    </div>
  )
}