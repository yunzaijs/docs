---
sidebar_position: 3
---

# 周期

:::tip 提示

指一个插件从开始到结束过程中会执行的函数

:::

## create

```ts
import { applicationOptions, useAppStorage } from 'yunzai'
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
import { Application, applicationOptions, useEvent } from 'yunzai'
import * as apps from './apps.js'
export default () => {
  // 预先存储
  const rules: {
    reg: RegExp | string
    key: string
  }[] = []
  // options
  return applicationOptions({
    create() {
      // created
      for (const key in apps) {
        // 推类型
        const app: typeof Application.prototype = new apps[key]()
        // 用  reg 和 key 连接起来。
        // 也可以进行自由排序
        for (const rule of app.rule) {
          rules.push({
            reg: rule.reg,
            key: key
          })
        }
      }
    },
    async mounted(e) {
      // 存储
      const data = []
      // 如果key不存在
      const cache = {}
      // 使用event以确保得到正常类型
      await useEvent(
        e => {
          for (const item of rules) {
            // 匹配正则
            // 存在key
            // 第一次new
            if (new RegExp(item.reg).test(e.msg) && apps[item.key] && !cache[item.key]) {
              cache[item.key] = true
              data.push(new apps[item.key]())
            }
          }
        },
        // 推倒为message类型的event
        [e, 'message']
      )
      // back
      return data
    }
  })
}

export * from './apps.js'
```

## beforeMount

```ts
import { applicationOptions, useAppStorage } from 'yunzai'
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
import { applicationOptions, useAppStorage } from 'yunzai'
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
import { applicationOptions, useAppStorage } from 'yunzai'
export default () => {
  return applicationOptions({
    response() {
      // 所有指令响应完成之后
    }
  })
}
```
