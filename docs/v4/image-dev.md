---
sidebar_position: 3
---

# 图片

:::tip 注意

此内容专业性较高，请仔细了解相关技术文档再阅读

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

```tsx
// ./image.tsx
import React from 'react'
import { Component, Puppeteer } from 'yunzai/utils'
import Hello, { PropsType } from '../system/hello.tsx'
// 初始化 组件渲染对象
const Com = new Component()
export class Image {
    Pup: typeof Puppeteer.prototype = null
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
     * 为指定用户生成html 生成指定数据下的html文件
     * @returns
     */
    createHello(uid: number, Props: PropsType) {
        // 生成 html 地址 或 html字符串
        const Address = Com.create(<Hello {...Props} />, {
            // html/hello/uid.html
            join_dir: 'hello',
            html_name: `${uid}.html`,
        })
        return this.Pup.render(Address)
    }
}
// 初始化 图片生成对象
export const imgae = new Image()
```
  



### 截图

```ts
// ./apps.ts
import { Messages , Segment } from 'yunzai/core'
import { imgae } from './image.tsx'
const message = new Messages();
message.response(/^你好/, async e => {
  const UID = e.user_id
   // render 是异步的，因此此处也是异步的
  const img = await imgae.createHello(UID, {
    data: { name: 'word' }
  })
  // 判断是否成功
  if(typeof img !== 'boolean' ) {
    // 图片
    e.reply(Segment.image(img))
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

启动热开发时，每次请求都将重新访问

```ts
// ./routes.tsx
import React from "react"
import { type RouterType } from "yunzai/image/types"
import Hello from "./hello.tsx"
const Config: RouterType = [
  {
    url: "/hello",
    element: <Hello data={{ name: "word" }} />
    // options: 选项
  }
]
export default Config
```

## 技巧

### 动态组件

```ts
import React from "react"
import { type RouterType } from "yunzai/image/types"
import { createDynamic } from 'yunzai/utils'
const require = createDynamic(import.meta.url)
const Hello = (await require('./views/hello.tsx')).default;
const Config: RouterType = [
  {
    url: "/hello",
    element: <Hello data={{ name: "word" }} />
  }
]
export default Config
```

使用`createDynamic`将创建一个动态模块,被包裹起来的组件,称之为动态组件.

当前脚本再执行时,其内部关联的所有动态组件都将再次被重新执行.

动态组件是危险的,请确保他仅用于包裹一个可预测的纯组件.

如果组件内执行了其他代码,如连接redis等,都将触发重新连接.


### 文件引入

```ts
// ./hello.tsx
import React from 'react'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const url  = require('./resources/example.png')
export default function App() {
  return (
    <img src={url} />  
  )
}
```

### 截图方块


Puppeteer 截图是默认body

你可以指定截图的元素为`section`

也可以设置`section`为指定的高度

```ts
export default function App({ data }: PropsType) {
  return (
    <div className="text-red-500 p-2 text-xl m-80">Hello, {data.name}!
      <section className="h-[80rem] w-[90rem]">
        嘎嘎
      </section>
    </div>
  )
}
```

```tsx
export class Image {
    createHello(uid: number, Props: PropsType) {
        const Address = Com.create(<Hello {...Props} />, {
            join_dir: 'hello',
            html_name: `${uid}.html`,
        })
        return this.Pup.render(Address,{
          tab:'section'
        })
    }
}
```

### 元素插入

```ts
import React from "react";
import { Component, Puppeteer } from "yunzai/utils";
import { createRequire } from 'module'
import Hello, { PropsType } from "../system/hello.tsx";
// 注意，引入js。jsx，tsx，tsx，node将是当代码解析，无法当组件资源
const require = createRequire(import.meta.url);
const Com = new Component();
const Pup = new Puppeteer();
//
export function createHello(uid: number, Props: PropsType) {
  //
  const Link = () =>{
    return (
      <>
        <link
          rel="stylesheet"
          href={require("../../resources/css/output.css")}
        />
        <link
          rel="stylesheet"
          href={require("../../resources/css/hello.css")}
        />
      </>
    );
  };
  //
  const script = `
    <script>
          const dom = document.getElementById("root");
    </script>
    `;
  //
  const Address = Com.create(<Hello {...Props} />, {
    join_dir: "hello",
    html_name: `${uid}.html`,
    // 插入头部内容,
    // 可直接html字符串，
    // 也可以使用render组件
    html_head: Com.render(<Link />),
    // body底部 插入额外脚本
    // 也可使用 render渲染组件
    head_body: script,
  });
  return Pup.render(Address);
}
```

