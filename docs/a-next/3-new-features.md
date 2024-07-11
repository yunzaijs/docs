---
sidebar_position: 3
---

# 模块

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::tip 提示

所有行为都应该是从推荐的模块中导出，这是统一的接口规范。

:::


## 核心


```ts
import * as Core from 'yunzai/core'
```

<Tabs>
  <TabItem value="apple" label="函数应用" default>

```ts title="./message.ts"
import { Messages } from 'yunzai/core'
const message = new Messages({
  event: 'message.group'
})
message.response(/^(#|\/)?你好/, async e => {
    e.reply('你好')
})
export default message
```

  </TabItem>
  <TabItem value="orange" label="类应用">

```ts title="./message.ts"
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

  </TabItem>
</Tabs>

## 配置

```ts 
import * as Config from 'yunzai/config'
```

配置模块主要分为`系统性常量`和`系统配置器`

- 系统性常量

```ts
import { BOT_NAME } from 'yunzai/config'
```

这是无法修改的,存在于内容,且运行后不变的

- 系统配置器

```ts
import { ConfigController } from 'yunzai/config'
```

配置器包含了配置文件内的所有参数.

## 工具

```ts 
import * as Utils from 'yunzai/utils'
```

该模块是与机器人运行无关的,但与config系统有关的.

主要辅助开发者更快的实现业务,而不再需要关注方法的实现
