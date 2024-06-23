---
sidebar_position: 8
---

# 兼容性升级

:::tip 提示

如果你的插件是从V3升级到V4，该文档或许对你有所帮助

:::

## 差异

- 全局变量

V3中`segment`、`plugin`、`Bot`和`redis`都是全局的，

请避免生产全局对象，该行为会对环境造成污染，产生不可估计的影响

在V4,我们更推荐你从核心模块中导出。

```ts
import { Segment , Plugin , Bot } from 'yunzai/core'
import { Redis } from 'yunzai/db'
```

V3的命名是混乱的，毫无章法的

但在V4中，导出的量都尽可能的使用大写开头，而函数使用驼峰命名。

- 系统性常量

```ts
import { BOT_NAME } from 'yunzai/config'
```

不可更改且固定的值，将采用全`大写`加`_`符号命名

- 调用

```ts title="./message.ts"
export default class App extends plugin {
  constructor (e) {
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

  async test(e){
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
  constructor () {
    super()
  }
  async test(){
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
  constructor () {
    super()
  }
  async test(){
    // 返回值，必然是 bool 值，若为true才会继续匹配其他指令！
    // 这在V3中是不同的，V3默认贪婪模式。而V4当且仅当为true时，继续向后执行
    // highlight-next-line
    return true
  }
}
```

- 单例应用

创建文件`plugins/example/index.js`

并写入以下代码后，把单例插件放置在`plugins/example/apps`目录

```js title="./index.js"
import fs from 'node:fs'
const files = fs.readdirSync('./plugins/example/apps').filter(file => file.endsWith('.js'))
const arr = []
files.forEach((file) => {
  arr.push(import(`./apps/${file}`))
})
const ret = await Promise.allSettled(arr)
const apps = {}
for (const i in files) {
  const name = files[i].replace('.js', '')
  if (ret[i].status !== 'fulfilled') {
    logger.error(`载入插件错误：${logger.red(name)}`)
    logger.error(ret[i].reason)
    continue
  }
  apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}
export { apps }
```

## lib目录

## 废弃

lib文件夹已全部废弃。

你需要从对应的模块中使用原功能

- lib/common/common.js

```ts
// bot类方法
import * as common from 'yunzai/core'
// 工具类方法
import { sleep } from 'yunzai/utils'
```

- lib/puppeteer/puppeteer.js

```ts
import { puppeteer } from 'yunzai/utils'
```

- lib/plugin/plugin.js

```ts
import { Plugin as plugin } from 'yunzai/core'
```

- renderers/puppeteer/index.js

```ts
import { renderers } from 'yunzai/utils'
```
- renderers/puppeteer/lib/puppeteer.js

```ts
import { Renderers } from 'yunzai/utils'
```

- lib/config/config.js

```ts
import { ConfigController as cfg } from 'yunzai/config'
```


- lib/renderer/renderer.js

```ts
import { Renderer } from 'yunzai/utils'
```

- lib/renderer/loader.js

```ts
import { renderer } from 'yunzai/utils'
```