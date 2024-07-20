---
sidebar_position: 2
---

# 开始

:::tip 提示

学习如何开始创建一个最简单的应用

:::

### 匹配响应

创建文件`./plugins/your-plugin/index.ts`并编写示例代码

```ts title="./plugins/your-plugin/index.ts"
import { Messages } from 'yunzai'
const message = new Messages({
  event: 'message.group'
})
message.response(/^(#|\/)?你好/, async e => {
  e.reply('你好')
})
export const apps = {
  App$1: message.ok
}
```

上述文件中，实例化了一个`Messages`实例。

实例回应正则，并执行对应的回调函数。

回调函数从 事件对象 里执行回复方法。

将一个`apps`进行导出，让`YunzaiJS`进行识别

### 响应集成

```ts title="./plugins/your-plugin/apps/hello.ts"
import { Messages } from 'yunzai'
const message = new Messages({
  event: 'message.group'
})
message.response(/^(#|\/)?你好呀/, async e => {
  e.reply('你好呀')
})
message.response(/^(#|\/)?你好哇/, async e => {
  e.reply('你好哇')
})
export default message.ok
```

```ts title="./plugins/your-plugin/apps/dark.ts"
import { Messages } from 'yunzai'
const message = new Messages({
  event: 'message.group'
})
message.response(/^(#|\/)?嘎嘎/, async e => {
  e.reply('嘎嘎')
})
export default message.ok
```

```ts title="./plugins/your-plugin/apps/index.ts"
import App$1 from './hello.js'
import App$2 from './dark.js'
export { App$1, App$2 }
```

```ts title="./plugins/your-plugin/index.ts"
export * as apps from './apps/index.js'
```
