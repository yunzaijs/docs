---
sidebar_position: 2
---

# 模块

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::tip 提示

支持TS、TSX环境，提供Miao-Yunzai完全的类型声明及其开发文档。

:::

## 模块

所有行为都应该是从推荐的模块中导出，这是统一的接口规范。

- 导入

```ts
// 配置相关
import * as Config from 'yunzai/config'
// 核心模块
import * as Core from 'yunzai/core'
// 数据操作
import * as DB from 'yunzai/db'
// 米游接口
import * as MYS from 'yunzai/mys'
// 工具类
import * as Utils from 'yunzai/utils'
```

- 使用

```ts
import * as Core from 'yunzai/core'
export default class App extends Core.Plugin {
  //
}
```

## 开发

<Tabs>
  <TabItem value="apple" label="回调" default>

这是新增的函数式编程，用于开发常规的匹配回调

```ts
// your-plugin/message.ts
import { Messages } from 'yunzai/core'
const message = new Messages();
message.response(/^(#|\/)?你好/, async e => {
    e.reply('你好')
})
// message.response(/^你好2/, async e => {
//     e.reply('你好2')
// })
export default message
```

在上面的代码中，机器人会接收消息时，若消息匹配到开头为`你好`将执行对应的回调函数。

函数从当前事件`e`(Event)中，执行回复函数，并发送你好。

```ts
// your-plugin/index.ts
import { Events } from 'yunzai/core'
import app from './message.js'
// import app2 from './message2.js'
const event = new Events()
event.use(app.ok)
// event.use(app2.ok)
export const apps = event.ok
```
通过Events收集回调事件，并导出名为`apps`的变量，此变量机器人将识别后加载。

  </TabItem>
  <TabItem value="orange" label="继承">

配置更丰富，且功能复杂的继承机制

```ts
// your-plugin/message.ts
import { Plugin } from 'yunzai/core'
export default class App extends Plugin {
  constructor () {
    super()
    this.priority = 700
    this.rule = [
        {
          reg:/^(#|\/)?你好/,
          fnc: this.hello.name
        },
      ]
  }
  async hello () {
    this.e.reply('你好')
  }
}
```

在上面的代码中，机器人会接收消息时，若消息匹配到开头为`你好`将执行对应的函数。

函数从当前事件`this.e`(Event)中，执行回复函数，并发送你好。

```ts
// your-plugin/index.ts
import { Events } from 'yunzai/core'
import App$1 from './message.js'
const event = new Events()
event.use(App$1)
export const apps = event.ok
```

通过Events收集回调事件，并导出名为`apps`的变量，此变量机器人将识别后加载。

  </TabItem>
</Tabs>