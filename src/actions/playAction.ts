/*
 * @Author: FBB
 * @Date: 2019-12-03 16:04:03
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-04 15:13:26
 * @Description:
 */

export const addTodo = (list: []) => ({  
  type: "INIT_LIST",
  preload: list
});
