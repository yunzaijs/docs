---
sidebar_position: 1
---

# 周期

:::tip 提示

指一个插件从开始到结束过程中会执行的函数

:::

## create

```ts
import { applicationOptions, useAppStorage } from 'yunzaijs'
export default () => {
  return applicationOptions({
    // 插件创建时
    create() {
      // 所有初始化行为都应该在此处进行
      // 请避免使用 await造成阻塞
    }
  })
}
```

## mounted

```ts
import { Application, applicationOptions, useEvent } from 'yunzaijs'
import * as Apps from './apps.js'
export default () => {
  // 预先存储
  const Rules: {
    reg: RegExp | string
    key: string
  }[] = []
  // options
  return applicationOptions({
    create() {
      // created
      for (const key in Apps) {
        // 推类型
        const app: typeof Application.prototype = new Apps[key]()
        // 用  reg 和 key 连接起来。
        // 也可以进行自由排序
        for (const rule of app.rule) {
          Rules.push({
            reg: rule.reg,
            key: key
          })
        }
      }
    },
    async mounted(e) {
      // 存储
      const Data = []
      // 如果key不存在
      const Cache = {}
      // 使用event以确保得到正常类型
      await useEvent(
        e => {
          for (const Item of Rules) {
            // 匹配正则
            // 存在key
            // 第一次new
            if (new RegExp(Item.reg).test(e.msg) && Apps[Item.key] && !Cache[Item.key]) {
              Cache[Item.key] = true
              Data.push(new Apps[Item.key]())
            }
          }
        },
        // 推倒为message类型的event
        [e, 'message']
      )
      // back
      return Data
    }
  })
}
```

## beforeMount

```ts
import { applicationOptions, useAppStorage } from 'yunzaijs'
export default () => {
  return applicationOptions({
    // 被执行之前，也是被所有中间件执行之前
    // 反之，mounted 是中间件执行之后
    beforeMount(e) {
      //
    }
  })
}
```

## response

```ts
import { applicationOptions, useAppStorage } from 'yunzaijs'
export default () => {
  return applicationOptions({
    response() {
      // 指令被响应之后
      // 可以选择打印 被执行的是谁
    }
  })
}
```

## afterResponse

```ts
import { applicationOptions, useAppStorage } from 'yunzaijs'
export default () => {
  return applicationOptions({
    response() {
      // 所有指令响应完成之后
    }
  })
}
```
