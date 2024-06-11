---
sidebar_position: 2
---

# 特性

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

```ts
// 配置相关
import {  } from 'yunzai/config'
// 核心模块
import {  } from 'yunzai/core'
// 数据操作
import {  } from 'yunzai/db'
// 米游接口
import {  } from 'yunzai/mys'
// 工具类
import {  } from 'yunzai/utils'
```

## 差异

V3中`segment`和`plugin`都是全局的，

在V4,我们更推荐你从核心模块中导出

```ts
import { segment , plugin } from 'yunzai/core'
```


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
import { plugin } from 'yunzai/core'
export default class App extends plugin {
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

 

##  图片

你无需再写原生的html，React将为你进行组件和管理

[学习 React.js](https://react.docschina.org/)

你无需再写原生从css !

tailwindcss将识别plugins目录下的tsx和jsx文件

为你自动生成css , 存放在`./public/output.css`

[学习 tailwindcss](https://www.tailwindcss.cn/)

> 要记得 VScode 安装插件 `Tailwind CSS IntelliSense`

> 插件间浏览器都将独立控制

### 组件

```ts
// ./hello.tsx
import React from 'react'
export type DataType = {
  name: string
}
export type PropsType = {
  data: DataType
}
export default function App({ data }: PropsType) {
  return (
    <div className="text-red-500 p-2 text-xl m-80">Hello, {data.name}!</div>
  )
}
```

### 封装

```ts
// ./image.tsx
import React from 'react'
import { Component, Puppeteer } from 'yunzai/utils'
import Hello, { type DataType } from './hello.tsx'
// 初始化 组件渲染对象
const Com = new Component()
export class Image {
  Pup:typeof Puppeteer.prototype = null 
  /**
  * 初始化运行Puppeteer
  */
  constructor() {
    // init
    this.Pup = new Puppeteer()
    // start
    this.Pup.start()
  }

  /**
  * 注意，不设置json_dir时，
  * html_head路径应该是../public/output.css
  * 且html_head默认值路径也是../public/output.css
  * 因此，不增加其他head的话，html_head和join_dir都可以省略
  */
  #HtmlHead = `<link rel="stylesheet" href="../../public/output.css"></link>`
  
  /**
   * 为指定用户生成html 生成指定数据下的html文件
   * @returns
   */
  getHelloComponent(uid: number, data: DataType) {
    // 生成 html 地址 或 html字符串
    const Address = Com.create(<Hello data={data} />, {
      // html/hello/uid.html
      join_dir: 'hello',
      html_name: `${uid}.html`,
      html_head: this.#HtmlHead,
      // 不生成文件，返回的将是html字符串
      // file_create:false
    })
    return this.Pup.render(Address)
  }
}
// 初始化 图片生成对象
export const imgae = new Image()
```
### 截图

```ts
// ./apps.tsx
import { Messages } from 'yunzai/core'
import { imgae } from './image.tsx'
const message = new Messages();
message.response(/^你好/, async e => {
  const UID = e.user_id
   // render 是异步的，因此此处也是异步的
  const img = await imgae.getHelloComponent(UID, { name: 'word' })
  // 判断是否成功
  if(typeof img !== 'boolean' ) {
    e.reply(segment.buffer(img))
  }else{
    e.repluy('你好')
  }
})
```

##  热开发

### 启动

```sh
npm run image
```

### 配置

该文件放置于插件目录下

命名为 routes.jsx 或 routes.tsx

启动热开发时，将读取该配置

```ts
// ./routes.tsx
import React from "react"
import { type RouterType } from "yunzai/image/types"
import Hello from "./hello.tsx"
const Config: RouterType = [
  {
    url: "/",
    element: <Hello data={{ name: "word" }} />
  }
]
export default Config
```