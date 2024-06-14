---
sidebar_position: 3
---

# 图片

:::tip 注意

此内容专业性较高，请仔细了解相关技术文档再阅读此

:::


### 特性

- 无需再写原生的html

强大的现代化框架React.js将为你管理组件和代码

[学习 React.js](https://react.docschina.org/)

- 无需再写原生的css

tailwindcss将自动识别jsx中的class并生成css

> 默认设置识别plugins目录, 并存放在`./public/output.css`

[学习 tailwindcss](https://www.tailwindcss.cn/)

丰富的`tailwindcss`组件将节省你的开发成本

- 更好的生成式

统一的编写风格更容易让GPT理解，并生成美观的代码

> 要记得 VScode 安装插件 `Tailwind CSS IntelliSense`

- 独立的浏览器控制

机器人不再为你主动连接

你可以为自己的应用创建属于自己的环境

此后，不再担心崩溃后影响其他应用

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
  createHello(uid: number, data: DataType) {
    // 生成 html 地址 或 html字符串
    const Address = Com.create(<Hello data={data} />, {
      // html/hello/uid.html
      join_dir: 'hello',
      html_name: `${uid}.html`,
      html_head: this.#HtmlHead,
      // 在底部增加其他内容
      // html_body: `<script src=""> </script>`
      // 不生成文件，返回的将是html字符串
      // file_create:false,
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
import { Messages , Segment } from 'yunzai/core'
import { imgae } from './image.tsx'
const message = new Messages();
message.response(/^你好/, async e => {
  const UID = e.user_id
   // render 是异步的，因此此处也是异步的
  const img = await imgae.createHello(UID, { name: 'word' })
  // 判断是否成功
  if(typeof img !== 'boolean' ) {
    // 图片
    e.reply(Segment.buffer(img))
  }else{
    e.reply('你好')
  }
})
export default message
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
    // options: 不需要配置HtmlHead的outpu.css
  }
]
export default Config
```
