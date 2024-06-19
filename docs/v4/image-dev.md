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

[点击 学习 React.js](https://react.docschina.org/)


> VScode 安装插件 `ES7+ React/Redux/React-Native snippets`

- 无需再写原生的css

tailwindcss将自动识别jsx中的class并生成css

> 默认设置识别plugins目录, 并存放在`./public/output.css`

[点击 学习 tailwindcss](https://www.tailwindcss.cn/)

丰富的`tailwindcss`组件将节省你的开发成本

> VScode 安装插件 `Tailwind CSS IntelliSense`

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
import { Picture } from 'yunzai/utils'
import Hello, { PropsType } from './hello.tsx'
export class Image extends Picture {
    constructor() {
        // 继承实例
        super()
        // 启动
        this.Pup.start()
    }
    /**
     * 为指定用户生成html 生成指定数据下的html文件
     * @returns
     */
    createHello(uid: number, Props: PropsType) {
        // 生成 html 地址 或 html字符串
        const Address = this.Com.create(<Hello {...Props} />, {
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
import { imgae } from './image.ts'
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
import { type RouterType } from "yunzai/image"
import * as hellos from './hello.tsx'
import { createDynamicComponent } from 'yunzai/utils'
const dynamic = createDynamicComponent(import.meta.url)
const Hello = (await dynamic<typeof hellos>('./hello.tsx')).default;
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

> VScode 安装插件 `Path Intellisense`

### 动态组件

```ts
import * as hellos from './hello.tsx'
import { createDynamicComponent } from 'yunzai/utils'
const dynamic = createDynamicComponent(import.meta.url)
/**
 * 
 * 该方法可被重复执行
 * 并触发dynamic重新加载
 * @param Props 
 * @returns 
 */
async function DynamicHello(Props: Parameters<typeof hellos.default>[0]) {
  const Hello = (await dynamic<typeof hellos>('./hello.tsx')).default
  return <Hello {...Props} />
}
```

使用`createDynamicComponent`将创建一个动态组件.

当前脚本再执行时,其内部关联的所有动态组件都将再次被重新执行.

:::danger 警告

动态组件是危险的,请确保他仅用于包裹一个可预测的纯组件.
如果组件内额外的执行代码，都将触发重复执行.
生产环境下，即env.NODE_ENV=='production'下，禁用动态模块。

:::

### 文件引入

```ts
import React from "react";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// 相对路径
const url = require("./resources/example.png");
// 样式内引入
const styles = {
  background: `url(${url})`,
  backgroundSize: "100% 100%",
};
export default function App() {
  return (
    <>
      <div style={styles}></div>
      <img src={url} />
    </>
  );
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
export class Image extends Picture {
    createHello(uid: number, Props: PropsType) {
        const Address = this.Com.create(<Hello {...Props} />, {
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
const Link = () => {
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
const script = `<script> const dom = document.getElementById("root"); </script>`;
export class Image extends Picture {
    createHello(uid: number, Props: PropsType) {
        const Address = this.Com.create(<Hello {...Props} />, {
            join_dir: "hello",
            html_name: `${uid}.html`,
            // 插入头部内容,
            // 可直接html字符串，
            // 也可以使用render组件
            html_head: this.Com.render(<Link />),
            // body底部 插入额外脚本
            // 也可使用 render渲染组件
            head_body: script,
        });
        return this.Pup.render(Address);
    }
}
```

