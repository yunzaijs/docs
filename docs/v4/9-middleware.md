---
sidebar_position: 9
---

# 中间件

:::tip 提示
中间件是实验性的，正在测试中...

:::


## 消息中间件

```ts  title="./middleware/message/star-rail.ts"
import { type EventType } from 'yunzai/core'
export default class StarRail {
  // 即是属性名，也是执行顺序
  static names = ['msg']

  // 事件
  e: EventType = null

  // 识别正则
  srReg = /^#?(\*|星铁|星轨|穹轨|星穹|崩铁|星穹铁道|崩坏星穹铁道|铁道)+/

  constructor(e: EventType) {
    this.e = e
  }

  msg = () => {
    // 匹配到 * 就置换成为 #星铁
    if (this.srReg.test(this.e.msg)) {
      // 重置消息 -- 
      // 这是喵喵插件内正确的匹配规则 即可  #星铁绑定uid
      // 但每一次 发送 #星铁 都觉得麻烦时
      // 可以进行置换，让匹配匹配支持更多响应
      this.e.msg = this.e.msg.replace(this.srReg, '#星铁')
    }
    return this.e.msg
  }
}
```


## 事件中间件


