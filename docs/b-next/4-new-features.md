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
export const Word = message.ok
```

  </TabItem>
  <TabItem value="orange" label="类应用">

```ts title="./message.ts"
import { Application } from 'yunzai'
export class Word extends Application<'message.group'> {
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

这是无法修改的,且运行后是不变的

- 系统配置器

```ts
import { ConfigController } from 'yunzai'
```

配置器包含了配置文件内的所有参数.

## 图片

:::tip 注意

该模块设计已独立成库，
任何版本都可以采用此设计进行开发

[react-puppeteer](https://github.com/lemonade-lab/react-puppeteer)

:::

## 其他

:::tip 提示

若有标注废弃的功能，都是即将在未来版本中移除的功能

:::
