---
sidebar_position: 6
---

# 中间件

:::tip 提示

中间件是有别于大型应用的，是全局生效的中间处理函数

:::

## 编写

```ts title="@yunzaijs/mys/message.js"
import { middlewareOptions, useEvent } from 'yunzaijs'
const srReg = /^#?(\*|星铁|星轨|穹轨|星穹|崩铁|星穹铁道|崩坏星穹铁道|铁道)+/
const zzzReg = /^#?(%|zzz|绝区零|ZZZ)+/
export default () => {
  // 返回中间件
  return middlewareOptions({
    // 类型
    typing: 'message',
    // 间件名
    name: 'mys-message',
    // 处理事件
    on: event => {
      useEvent(
        e => {
          //
          if (srReg.test(e.msg)) {
            // 设置为星铁
            e.game = 'sr'
          } else if (zzzReg.test(e.msg)) {
            e.game = 'zzz'
          }
          //
          if (srReg.test(e.msg)) {
            // 重置消息 -- 转为喵喵插件的消息格式
            e.msg = e.msg.replace(srReg, '#星铁')
          } else if (zzzReg.test(e.msg)) {
            // 重置消息 -- 转为ZZZ插件的消息格式
            e.msg = e.msg.replace(srReg, '#绝区零')
          }
        },
        [event, 'message.group', 'message.private']
      )
    }
  })
}
```

## 配置

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzaijs'
export default defineConfig({
  middlewares: ['@yunzaijs/mys/mw']
})
```

## 使用

```ts
import { Messages } from 'yunzaijs'
const message = new Messages('message.group')
message.use(
  e => {
    // 默认 gs
    console.log('game', e.game)
    // 发送 * 变成了 #星铁
    // 发送 % 变成了 #绝区零
    console.log('msg', e.msg)
  },
  // hello #hello /hello
  [/^#绝区零信息/]
)
export const Word = message.ok
```
