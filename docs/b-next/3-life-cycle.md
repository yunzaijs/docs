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
import { applicationOptions, useAppStorage } from 'yunzai'
export default () => {
  return applicationOptions({
    // 被执行时
    mounted(e) {
      // 创建存储容器
      const Data = useAppStorage()
      for (const key in Apps) {
        // 实例化 -- 或者对齐进行自由排序
        Data.push(new Apps[key]())
      }
      // 返回让机器人进行的
      return Data
    }
  })
}
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
