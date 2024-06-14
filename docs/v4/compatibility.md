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

在V4,我们更推荐你从核心模块中导出

```ts
import { Segment , Plugin , Redis , Bot } from 'yunzai/core'
```

V3的命名是混乱的，毫无章法的

但在V4中，导出的量都尽可能的使用大写开头，而函数使用驼峰命名

- 系统性常量

```ts
import { BOT_NAME } from 'yunzai/config'
```

不可更改且固定的值，将采用全`大写`加`_`符号命名

- 调用

```ts
export default class App extends plugin {
  constructor () {
    super()
  }
  async vPassword(e){
    // tudo  e参数废弃，其方法无法使用类型提示
    e.reply('')
    // 推荐使用
    this.e.reply('')
  }
}
```

```ts
export default class App extends plugin {
  constructor (e) {
    super()
    // 未来将废弃，不需要自己赋值this.e
    this.e = e
  }
  async vPassword(e){
    // tudo  e参数废弃，其方法无法使用类型提示
    e.reply('')
    // 推荐使用
    this.e.reply('')
  }
}
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