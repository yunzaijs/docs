---
sidebar_position: 2
---

# 新特性

支持TS、TSX环境，提供Miao-Yunzai完全的类型声明及其开发文档。

## 消息回调

```ts
import { Messages } from '@Miao/core/index.js'
const message = new Messages({
  priority: 9000
})
message.response(/^你好/, async e => {
  e.reply('你好')
})
```

##  图片开发

你无需再写原生的html，React将为你进行组件和管理

[学习 React.js](https://react.docschina.org/)

你无需再写原生从css !

tailwindcss将识别plugins目录下的tsx和jsx文件

为你自动生成css , 存放在`./public/output.css`

[学习 tailwindcss](https://www.tailwindcss.cn/)

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
import { Component, Puppeteer } from '@Miao/utils/index.js'
import Hello, { type DataType } from './hello.tsx'
const Com = new Component()
export class Image {
  Pup = null
  constructor() {
    // init
    this.Pup = new Puppeteer()
    // start
    this.Pup.start()
  }
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
      /**
       * 注意，不设置json_dir时，
       * html_head路径应该是../public/output.css
       * 且html_head默认值路径也是../public/output.css
       * 因此，不增加其他head的话，html_head和join_dir都可以省略
       * { html_name: `${uid}.html`}
       */
      html_head: `<link rel="stylesheet" href="../../public/output.css"></link>`,
      // 不生成文件，返回的将是html字符串
      // file_create:false
    })
    return Pup.render(Address)
  }
}
export const imgae = new Image()
```

### 截图

```ts
import { imgae } from './image.tsx'
// render 是异步的，因此  此处也是异步的
const img = await imgae.getHelloComponent(1715713638, { name: 'word' })
e.reply(segment.buffer(img))
```

##  热开发图片

### 启动

```sh
npm run image
```

### 配置

该文件放置于插件目录下，命名为 routes.jsx或 routes.tsx。启动热开发时，将读取该配置

```ts
import React from 'react'
import { type RouterType } from '../image/types.js'
import Hello from './hello.tsx'
export default [
  {
    url: '/',
    element: <Hello data={{ name: 'word' }}></Hello>
  }
] as RouterType

```