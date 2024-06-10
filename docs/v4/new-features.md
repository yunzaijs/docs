---
sidebar_position: 2
---

# 新特性

支持TS、TSX环境，提供Miao-Yunzai完全的类型声明及其开发文档。

## 回调

```ts
// your-plugin/message.ts
import { Messages } from '#miao/core'
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

## 继承

```ts
// your-plugin/message.ts
import { plugin } from '#miao/core'
export default class Word extends plugin {
  constructor () {
    super({
      priority: 700,
      rule: [
        {
          reg:/^你好/,
          fnc: 'hello'
        },
      ]
    })
  }
  async hello (e) {
    await e.reply('你好')
    return true
  }
}
```

## 导出

```ts
// your-plugin/index.ts
import { Events } from '#miao/core'
import app from './message.js'
// import app2 from './message2.js'
const event = new Events()
event.use(app.ok)
// event.use(app2.ok)
export const apps = event.ok
```

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
import React from 'react'
import { Component, Puppeteer } from '#miao/utils'
import Hello, { type DataType } from './hello.tsx'
// 初始化 组件渲染对象
const Com = new Component()
export class Image {
  Pup:typeof Puppeteer.prototype = null 

  /**
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
import { imgae } from './image.tsx'
// render 是异步的，因此  此处也是异步的
const img = await imgae.getHelloComponent(1715713638, { name: 'word' })
e.reply(segment.buffer(img))
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
import React from "react"
import { type RouterType } from "#image/types"
import Hello from "./hello.tsx"
const Config: RouterType = [
  {
    url: "/",
    element: <Hello data={{ name: "word" }}> </Hello>
  }
]
export default Config
```