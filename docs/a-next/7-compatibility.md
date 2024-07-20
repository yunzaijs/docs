---
sidebar_position: 7
---

# 兼容升级

:::tip 提示

如果插件需要升级到Next，该文档或许有所帮助。

:::

## V2升级为Next

xiaoyao-cvs 是经典v2集成插件

接下来以此为例，讲述如何从v2升级为Next

```ts title="./index.ts"
import { Plugin } from 'yunzai'
// v2 的插件集
import * as application from './apps/index.js'
// 扩展 fun(e,....) 的方法
import { render } from './adapter/render.js'
/**
 * V2转义成V3
 * @param rule V2指令对象
 * @param sourceObject v2插件文件对象
 * @returns calss
 */
const assignPropertiesAndMethods = (rules, sourceObject) => {
  // 制作一个 rule
  const rule = Object.keys(rules).map(item => ({
    // 其他参数
    ...rules[item],
    // 确保拥有func
    fnc: item
  }))
  // 制作一个class
  class APP extends Plugin {
    // 初始化
    constructor() {
      // 继承
      super()
      // 绑定 rule
      this.rule = rule
      // 绑定func
      for (const key in sourceObject) {
        // 接纳函数
        if (sourceObject[key] instanceof Function) {
          // 以无this指向函数来确保可以改变this指向为class，并按规则扩展函数参数
          this[key] = () => sourceObject[key].call(this, this.e, { render })
        }
      }
    }
  }
  return APP
}
// 变成一个 class
const xiaoyao = assignPropertiesAndMethods(application['rule'], application)
// 把class 作为 apps的属性并导出
export const apps = { xiaoyao }
```

## V3升级为Next

### 差异

- 全局变量

V3中`segment`、`plugin`、`Bot`和`redis`都是全局的，

请避免生产全局对象，该行为会对环境造成污染，产生不可估计的影响

在Next,我们更推荐你从核心模块中导出。

```ts
import { Segment, Plugin, Bot } from 'yunzai'
import { Redis } from 'yunzai'
```

V3的命名是混乱的，毫无章法的

但在Next中，导出的量都尽可能的使用大写开头，而函数使用驼峰命名。

- 调用

```ts title="./message.ts"
export default class App extends plugin {
  constructor(e) {
    // 废弃，不再通过super传参
    // super({rule:[]})

    // 使用
    super()
    this.rule = [
      //
    ]

    // 废弃，不需要自己赋值
    this.e = e
  }

  async test(e) {
    // e参数废弃，其方法无法使用类型提示
    e.reply('')
    // 推荐使用
    // highlight-next-line
    this.e.reply('')
  }
}
```

```ts title="./message.ts"
export default class App extends plugin {
  constructor() {
    super()
  }
  async test() {
    // 警告性写法！！！
    // 请勿将任何非boolean值的变量让机器人接收
    return this.e.reply('')

    // 你的函数，应该是一个只返回boolean的纯函数
    // 用于控制机器人是否继续执行下一个函数

    // 正确写法，先执行发送，再结束
    // highlight-next-line
    this.e.reply('')
    return

    // 或者等待执行完毕，再结束
    await this.e.reply('')
    return
  }
}
```

```ts title="./message.ts"
export default class App extends plugin {
  constructor() {
    super()
  }
  async test() {
    // 返回值，必然是 bool 值，若为true才会继续匹配其他指令！
    // 这在V3中是不同的，V3默认贪婪模式。而Next当且仅当为true时，继续向后执行
    // highlight-next-line
    return true
  }
}
```

### lib目录

:::danger 警告

lib文件夹已全部废弃。你需要从对应的模块中使用原功能。模块内部标注废弃的方法都计划在未来中移除。

:::

- lib/common/common.js

```ts
// bot类方法
import * as common from 'yunzai'
// 工具类方法
import { sleep } from 'yunzai'
```

- lib/puppeteer/puppeteer.js

```ts
import { puppeteer } from 'yunzai'
```

- lib/plugin/plugin.js

```ts
import { Plugin as plugin } from 'yunzai'
```

- renderers/puppeteer/index.js

```ts
import { renderers } from 'yunzai'
```

- renderers/puppeteer/lib/puppeteer.js

```ts
import { Renderers } from 'yunzai'
```

- lib/config/config.js

```ts
import { ConfigController as cfg } from 'yunzai'
```

- lib/renderer/renderer.js

```ts
import { Renderer } from 'yunzai'
```

- lib/renderer/loader.js

```ts
import { renderer } from 'yunzai'
```
