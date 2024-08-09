---
sidebar_position: 9
---

# 中间件

:::tip 提示

中间件是有别于大型应用的，是全局生效的

:::

## 编写

```ts title="./middleware/message/star-rail.ts"
import { middlewareOptions, useEvent } from 'yunzai'
// 常量
const srReg = /^#?(\*|星铁|星轨|穹轨|星穹|崩铁|星穹铁道|崩坏星穹铁道|铁道)+/

const onEvent = event => {
  // 要使用一个复杂类型的 event 需要 使用 useEvent
  useEvent(
    e => {
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
    }, // 输入事件 并选择 执行的类型
    [event, 'message.group', 'message.private']
  )
  //
}

// 用户可个性化的配置
type options = { name: string }

//
export default (config?: options) => {
  // 返回中间件
  return middlewareOptions({
    // 类型
    typing: 'message',
    // 插件名
    name: config?.name ?? 'StarRail',
    // on
    on: onEvent
  })
}
```

## 配置

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzai'
import starRail from 'yz-mw-star-rail'
export default defineConfig({
  // 中间件
  middlewares: [starRail()]
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
