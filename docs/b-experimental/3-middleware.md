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
  // 其元素顺序即执行顺序
  static names = ['msg']

  // 上流得到的
  e: EventType

  // 识别正则
  srReg = /^#?(\*|星铁|星轨|穹轨|星穹|崩铁|星穹铁道|崩坏星穹铁道|铁道)+/

  // 回调
  callNames = {
    msg: () => {
      // 发现星铁消息
      if (this.srReg.test(this.e.msg)) {
        // 重置消息 -- 这是喵喵插件内 正确的匹配规则 即可  #星铁绑定uid
        this.e.msg = this.e.msg.replace(this.srReg, '#星铁')
      }
      return this.e.msg
    }
  }
}

```

## 事件中间件

```ts  
// 待完善。。。
```
