<!--
 * @Author: FBB
 * @Date: 2019-08-13 21:34:54
 * @LastEditors: FBB
 * @LastEditTime: 2020-08-22 15:28:48
 * @Description:
-->

### music task/third_version

- todos

  1. ~~音乐界面图片旋转~~
  2. ~~音乐小化播放~~
  3. 音乐分页加载
  4. ~~图片懒加载(使用 react-lazy)~~
  5. 添加歌词

- problem and solution
  1. NormalPlayer 展示时为遮盖层，当底层为 scroll 时，在遮盖层能够触发底层滚动
     解决方案：为遮盖层添加 touchmove 监听事件，调用 e.preventDefault()，[具体解决方案](https://www.jianshu.com/p/bf4b3693a4f1)。
  2. ts 中使用 useRef()这个 hook 函数，类型设置。在 player 中使用 audio，我们使用 ref 来拿到当前的 audio。
     ```js
     const audioRef = useRef();
     //...省略
     audioRef.current.src = xxx; //在进行赋值的时候报错current为未定义
     ```
     解决方案：需要给 useRef()传入一个初始值，并且定义当前初始值的类型，[关于 useRef](https://zhuanlan.zhihu.com/p/105276393)
  3. 使用 CSS 旋转图片，暂停时停留在当前位置
     使用 animation-play-state 属性，但是兼容有问题，[具体解决方案](https://www.jianshu.com/p/1fb1a3bba129)
