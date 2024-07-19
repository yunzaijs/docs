---
sidebar_position: 11
---

# 生命周期


##  create

```ts
import { applicationOptions } from 'yunzai'
const Data = []
export default () => {
  return applicationOptions({
    // 插件创建时
    create() {
      // 在这里，你需要对 class进行实例化

      // Apps 是所有class集
      // Apps 即 V3中的  export const apps = {}

      for(const key in Apps){
        Data.push(new Apps[key]())
        // 可以发现，机器人不会再反复示例化
        // 而是 进行初始化
        // 此时是没有 this.e 的
        // 也不是 new Apps[key](e)
      }

      // 当然，你也可以选择不进行此操作，但这是不推荐的。

      // 在new的时候，可以发现优先级丢失了。
      // 因为，每个应用都可以自定义自身的排列顺序
      // 可以对 每个app 进行排序。
      // 可以对app内的 rule 进行重新排序
    }
  })
}
```

##  mounted

```ts
import { applicationOptions } from 'yunzai'
const Data = []
export default () => {
  return applicationOptions({
    // 被执行时
    mounted(e) {
      // e 类似于  on(e){}
      // 你可以在此处做 类似于中间件的事
      // 最后，把自身的 数据 返回给机器人
      return Data
    }
  })
}
```

## beforeMount

```ts
import { applicationOptions } from 'yunzai'
const Data = []
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
import { applicationOptions } from 'yunzai'
const Data = []
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
import { applicationOptions } from 'yunzai'
const Data = []
export default () => {
  return applicationOptions({
    response() {
      // 所有指令响应完成之后
    }
  })
}
```