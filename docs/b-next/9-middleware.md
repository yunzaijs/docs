---
sidebar_position: 9
---

# 中间件

:::tip 提示

中间件是有别于大型应用的，是全局生效的

:::

## 编写

```ts title="yunzai-mys/middleware.js"
import { middlewareOptions, useEvent } from 'yunzai'
const srReg = /^#?(\*|星铁|星轨|穹轨|星穹|崩铁|星穹铁道|崩坏星穹铁道|铁道)+/
const zzzReg = /^#?(%|zzz|绝区零|ZZZ)+/
type options = { name: string }
export default (config?: options) => {
  // 返回中间件
  return middlewareOptions({
    // 类型
    typing: 'message',
    // 间件名
    name: config?.name ?? 'mys',
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
import { defineConfig } from 'yunzai'
import MYS from 'yunzai-mys/mw'
export default defineConfig({
  // 中间件
  middlewares: [MYS()]
})
```

## 更复杂的状况

- 公用中间件

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzai'
// xiuxian中间件
import xiuxian, { mw as mwXiuxian } from 'yz-xiuxian'
// xiuxian宗门玩法扩展
import xiuxianAss from 'yz-xiuxian-ass'
// xiuxian家园玩法扩展
import xiuxianHome from 'yz-xiuxian-home'
//
export default defineConfig({
  applications: [xiuxian(), xiuxianAss(), xiuxianHome()],
  // xiuxian中间件
  middlewares: [mwXiuxian()]
})
```

上面的修仙插件，还额外提供了中间件，提供给所有app要扩展xiuxian的模块

一但开发者对xiuxian模块的扩展逐渐增加，有必要把重复的逻辑进行整理

- 通过中间件修改

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzai'
// xiuxian中间件
import xiuxian from 'yz-xiuxian'
// xiuxian宗门玩法扩展
import xiuxianAss, { mw as mwXiuxianAss } from 'yz-xiuxian-ass2'
export default defineConfig({
  applications: [xiuxian(), xiuxianAss()],
  // ass中间件
  middlewares: [mwXiuxianAss()]
})
```

有的开发可能会想要提供中间件，来影响xiuxian模块的数据

- 模块接口

我们更推荐，模块可以在需求出现时，开放更合理的接口给其他模块

```ts title="./apps.js"
import { Messages } from 'yunzai'
import { API } from 'xiuxian'
const message = new Messages('message.group')
message.use(
  e => {
    e.reply('你好')
    // API 此时 yz-xiuxian-ass 依赖了 xiuxian。
    // 而xiuxian也提供了丰富的接口
    // 从而更便捷的且自由的扩展功能
  },
  [/^(#|\/)?你好/]
)
export const Word = message.ok
```
