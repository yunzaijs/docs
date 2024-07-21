---
sidebar_position: 3
---

# 模块

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 提示

所有行为都应该是从推荐的模块中导出，这是统一的接口规范。

:::

## 消息

<Tabs>
  <TabItem value="apple" label="函数应用" default>

```ts title="./message.ts"
import { Messages } from 'yunzai'
const message = new Messages('message.group')
message.use(
  e => {
    e.reply('你好')
  },
  [/^(#|\/)?你好/]
)
export default message
```

  </TabItem>
  <TabItem value="orange" label="类应用">

```ts title="./message.ts"
import { Application } from 'yunzai'
export default class App extends Application<'message.group'> {
  constructor() {
    super('message.group')
    this.rule = [
      {
        reg: /^(#|\/)?你好/,
        fnc: this.hello.name
      }
    ]
  }
  //
  hello() {
    this.e.reply('你好')
  }
}
```

  </TabItem>
</Tabs>

## 配置

配置模块主要分为`系统性常量`和`系统配置器`

- 系统性常量

```ts
import { BOT_NAME } from 'yunzai'
```

这是无法修改的,存在于内容,且运行后不变的

- 系统配置器

```ts
import { ConfigController } from 'yunzai'
```

配置器包含了配置文件内的所有参数.

## 原神

> 不推荐使用原神相关接口，未来版本将进行转移

```ts
import { GSCfg } from 'yunzai'
```

米游接口 -- 非米游插件禁止使用
