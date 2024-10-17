---
sidebar_position: 2
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
import { Messages } from 'yunzaijs'
const message = new Messages('message.group')
message.use(
  e => {
    e.reply('hello word')
  },
  // hello #hello /hello
  [/^(#|\/)?hello/]
)
export const Word = message.ok
```

  </TabItem>
  <TabItem value="orange" label="类应用">

```ts title="./message.ts"
import { Application } from 'yunzaijs'
export class Word extends Application<'message.group'> {
  constructor() {
    super('message.group')
    this.rule = [
      {
        // hello #hello /hello
        reg: /^(#|\/)?hello/,
        fnc: this.hello.name
      }
    ]
  }
  //
  hello() {
    this.e.reply('hello word')
  }
}
```

  </TabItem>
</Tabs>

## 配置

配置模块主要分为`系统性常量`和`系统配置器`

- 系统性常量

```ts
import { BOT_NAME } from 'yunzaijs'
```

这是无法修改的,且运行后是不变的

- 系统配置器

```ts
import { ConfigController } from 'yunzaijs'
```

配置器包含了配置文件内的所有参数.

## 图片

:::tip jsxp

[jsxp](https://github.com/lemonade-lab/lvyjs/tree/main/packages/jsxp) 是一个可以在 tsx 环境中,使用 puppeteer 对 React （tsx） 组件进行截图的库

YunzaiJS 默认统一使用 `jsxp 库` 调用 puppeteer 对 React 组件进行生成截图

:::

更多使用详细，请查看：[开发工具](/docs/docs/b-next/dev-docs/advance/dev-tools) 部分的文档

## 其他

:::tip 提示

若有标注废弃的功能，都是即将在未来版本中移除的功能

:::
