/*
 * @Author: FBB
 * @Date: 2019-08-25 17:19:35
 * @LastEditors: FBB
 * @LastEditTime: 2019-08-25 17:38:35
 * @Description: 歌单组件
 */
import React from 'react'

/* interface ISProps {
  list:[]
} */

export const SongList = (props: any) => {
  return (
    <div className='songlist'>
      {props.list.map((item: any) => (
        <div key={item.id} className='songlist__item'>
          <img src={item.picUrl} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}