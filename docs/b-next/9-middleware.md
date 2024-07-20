---
sidebar_position: 9
---

# 中间件

- 编写

```ts  title="./middleware/message/star-rail.ts"
import { middlewareOptions, useEvent } from 'yunzai'
const srReg = /^#?(\*|星铁|星轨|穹轨|星穹|崩铁|星穹铁道|崩坏星穹铁道|铁道)+/
type options = { name: string }
export default (config?: options) => {
  // 返回中间件
  return middlewareOptions({
    // 类型
    typing: 'message',
    // 插件名
    name: config?.name ?? 'StarRail',
    //
    on: event => {

      // 要使用一个复杂类型的 event 需要 使用 useEvent
      useEvent( e => {
          Object.defineProperty(e, 'isSr', {
            get: () => e.game === 'sr',
            set: v => (e.game = v ? 'sr' : 'gs')
          })
          Object.defineProperty(e, 'isGs', {
            get: () => e.game === 'gs',
            set: v => (e.game = v ? 'gs' : 'sr')
          })
          if (srReg.test(e.msg)) {
            // 设置为星铁
            e.game = 'sr'
          }
          // 发现星铁消息
          if (srReg.test(e.msg)) {
            // 重置消息 -- 这是喵喵插件内 正确的匹配规则 即可  #星铁绑定uid
            e.msg = e.msg.replace(srReg, '#星铁')
          }
        },

        // 输入 
        [event, 'message.group', 'message.private']
      )

      //
    }
  })
}
```

- 配置

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzai'
import starRail from 'yz-mw-star-rail'
//
export default defineConfig({
  // 中间件
  middlewares: [starRail()]
})
```
