---
sidebar_position: 2
---

# 模块

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::tip 环境提示

支持TS、TSX环境，提供Miao-Yunzai完全的类型声明及其开发文档。

:::

## 模块

你的所有行为，都应该是从推荐模块中导出，这是统一的接口规范。

此后，你的行为才不会因内部结构更改而造成后续不兼容状况,

在未来，你的应用将在任何形式的机器人中得以解析

只要该机器人给你提供名为`yunzai`的机器人包

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

## 差异

V3中`segment`和`plugin`都是全局的，

在V4,我们更推荐你从核心模块中导出

```ts
import { Segment , Plugin } from 'yunzai/core'
```

V3的命名是混乱的，毫无章法的

但在V4中，导出的量都尽可能的使用大写开头，而函数使用驼峰命名


## 开发

<Tabs>
  <TabItem value="apple" label="回调" default>

```ts
// your-plugin/message.ts
import { Messages } from 'yunzai/core'
const message = new Messages({
   priority: 700,
});
message.response(/^你好/, async e => {
    e.reply('你好')
})
// message.response(/^你好2/, async e => {
//     e.reply('你好2')
// })
export default message
```

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

  </TabItem>
  <TabItem value="orange" label="继承">

```ts
// your-plugin/message.ts
import { Plugin } from 'yunzai/core'
export default class App extends Plugin {
  constructor () {
    super({
      priority: 700,
    })
    this.rule = [
        {
          reg:/^你好/,
          fnc: this.hello.name
        },
      ]
  }
  async hello (e) {
    await e.reply('你好')
    return true
  }
}
```

```ts
// your-plugin/index.ts
import { Events } from 'yunzai/core'
import App$1 from './message.js'
const event = new Events()
event.use(App$1)
export const apps = event.ok
```

  </TabItem>
</Tabs>

 