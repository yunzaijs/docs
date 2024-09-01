---
sidebar_position: 2
---

# 开发文档

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 使用者提示

V3开发者可阅读此文档了解Yunzai机制，写出更合理的代码

:::

## 目录结构

- config/default_config

原始的配置文件，启动后会复制一份至config/config/\*.yaml

`yaml` Yunzai机器人常用的配置文件格式

[点击了解 Yaml](https://juejin.cn/post/7389406751546212363?searchId=202408221121559490198C88B1EF576F23)

- lib

工程目录，是包含yunzai所有逻辑处理的js文件

- plugins

插件目录，存放实际的交互功能也是用于扩展功能的js文件

- app.js

入口文件，可使用`node app`进行默认启动，但推荐配置设定好的指令启动

- package.json

[如果对node不太了解，可点击阅读了解 package.json](https://juejin.cn/post/7145001740696289317?searchId=20240822112607D68A9DDE8B88F25627C3)

```json
{
  // 包名
  "name": "yunzai",
  // 版本
  "version": "3.0.0",
  // 入口文件
  "main": "app.js",
  // module 是node新标准
  "type": "module",
  "scripts": {
    // 脚本配置 ，执行方式为 npm run app
    "app": "node ."
  },
  // 工程依赖
  "dependencies": {
    "yaml": "^2.4.1"
  },
  // 开发时依赖，当对于npm包来说的
  "devDependencies": {}
}
```

- other

其他文件都是扩展或管理工程等配置文件

## 你的第一个插件

推荐使用`VS code`，并安装扩展`Path Intellisense` `Prettier` `Chinese`

新建文件 `plugins/my-plugin/index.js`

<Tabs>
  <TabItem value="16" label="标准的" default>

```js
import { Plugin } from '#yunzai'
class Word extends Plugin {
  constructor() {
    super()
    // 名称
    this.name = 'Word'
    // 可省略
    // this.event = 'message'
    // 匹配
    this.rule = [
      {
        // #hello
        reg: /^#hello$/,
        fnc: this.post.name
      }
    ]
  }
  async post() {
    this.e.reply('hello world')
  }
}
export const apps = { Word }
```

  </TabItem>
  <TabItem value="18" label="其他的" default>

> 其实直接export class也是可以的，V3的设计是很宽松的，但推荐使用早期推荐的apps常规写法

```js
import { Plugin } from '#yunzai'
export class Word extends Plugin {
  constructor() {
    super()
    // 名称
    this.name = 'Word'
    // 匹配
    this.rule = [
      {
        // #hello
        reg: /^#hello$/,
        fnc: this.post.name
      }
    ]
  }

  async post() {
    this.e.reply('hello world')
  }
}
```

  </TabItem>
</Tabs>

启动机器人后，在聊天窗口发送`#hello`可触发效果

- #yunzai

这在是Miao和Next才新增了都本地化接口，在此文章中使用仅仅只为来方便编写文档

### 不匹配的

```js
import { Plugin } from '#yunzai'
export class friend extends Plugin {
  constructor() {
    super()
    // 名称
    this.name = 'autoFriend'
    // 朋友请求
    this.event = 'request.friend'
  }

  async accept() {
    // accept 是不需要匹配就先执行的方法
  }
}
```

### 主动消息

```js
import { Bot } from '#yunzai'

const user_id = 999999999
Bot.pickUser(user_id).sendMsg('xxx')

// 实际上，这是e.reply的内部执行的方法
```

### 任务

一个不健康的设计

```js
import { Plugin } from '#yunzai'
export class Word extends Plugin {
  constructor() {
    super()
    //
    this.task = {
      cron: '',
      fnc: this.start.name
    }
  }

  async start() {
    //
  }
}
```

这样也是不推荐的

```js
import schedule from 'node-schedule'
import { Word } from './apps.js'
// new 了一堆方法
schedule.scheduleJob('', new Word().start)
```

请使用原生方法

```js
import { Bot } from '#yunzai'
import schedule from 'node-schedule'
// 订阅消息
schedule.scheduleJob('', () => {
  const user_id = 999999999
  Bot.pickUser(user_id).sendMsg('hello word')
})
```

### 数据库

```js
import { Redis } from '#yunzai'
```

### 权限控制

```js
import { Plugin } from '#yunzai'
export class Word extends Plugin {
  constructor() {
    super()
    // 名称
    this.name = 'Word'
    // 匹配
    this.rule = [
      {
        // #hello
        reg: /^#hello$/,
        fnc: this.post.name,
        // 默认为 all
        permission: 'master'
      }
    ]
  }

  async post() {
    this.e.reply('hello word')
    return
  }
}
```

### 优先级

```js
import { Plugin } from '#yunzai'
export class Word extends Plugin {
  constructor() {
    super()
    // 名称
    this.name = 'Word'
    // 匹配
    this.rule = [
      {
        // #hello
        reg: /^#hello$/,
        fnc: this.post.name
        //
      }
    ]
    // 越小优先级越高，即优先执行
    this.priority = 300
  }

  async post() {
    this.e.reply('hello word')
  }
}
```

### 上下文

```js
import { Plugin } from '#yunzai'
export class Word extends Plugin {
  constructor() {
    super()
    // 名称
    this.name = 'Word'
    // 匹配
    this.rule = [
      {
        // #hello
        reg: /^#hello$/,
        fnc: this.post.name
      }
    ]
  }

  async post() {
    this.e.reply('input password')
    // 脱离Plugin机制，重复执行start函数
    this.setContext('vPassword')
  }

  async vPassword() {
    this.e.reply(`your password is ${this.e.msg}`)
    // 结束
    this.finish('vPassword')
  }
}
```

### 贪婪匹配

```js
import { Plugin } from '#yunzai'
export class Word extends Plugin {
  constructor() {
    super()
    // 名称
    this.name = 'Word'
    // 匹配
    this.rule = [
      {
        // #hello
        reg: /^#hello$/,
        fnc: this.post.name
      }
    ]
  }

  async post() {
    this.e.reply('hello word')

    // 将持续匹配后续指令
    return false
  }
}
```

### 截图

```js
import { puppeteer } from '#yunzai'
import { segment } from 'icqq'
export class Word extends Plugin {
  constructor() {
    super()
    // 名称
    this.name = 'Word'
    // 匹配
    this.rule = [
      {
        // #hello
        reg: /^#hello$/,
        fnc: this.post.name
      }
    ]
  }

  async post() {
    // puppeteer 使用了非常有年代的模版引擎 art-template
    // https://aui.github.io/art-template/
    const buffer = await puppeteer.screenshot('./html/my.html', {
      // data
    })
    //
    this.e.reply(segment.image(buffer))
    // this.e.reply(['一张图片', segment.image(buffer)])
    return
  }
}
```

截图的写法各不相同，同时截图功能并不依赖于机器人，因此模块已被标注废弃

你可以在自己的应用中配置puppeteer的版本和写法，避免不同的Yunzai环境异常环境

### 工具类

- 消息转发

```js
import { makeForwardMsg } from '#yunzai'
import { Plugin } from '#yunzai'
export class Word extends Plugin {
  constructor() {
    super()
    // 名称
    this.name = 'Word'
    // 可省略
    // this.event = 'message'
    // 匹配
    this.rule = [
      {
        // #hello
        reg: /^#hello$/,
        fnc: this.post.name
      }
    ]
  }

  async post() {
    const Message = await makeForwardMsg(this.e, ['hello', 'word'], 'this is makeForwardMsg')
    this.e.reply(Message)
    return
  }
}
```

- 文件下载

```js
import { downFile } from '#yunzai'
downFile('下载地址', '保存路径')
```

- 沉睡

不健康的函数

```js
import { sleep } from '#yunzai'
```

你应该使用更流行的写法

```js
import { promisify } from 'util'
// setTimeout 是原生方法
const sleep = promisify(setTimeout)
```

- 群聊转私聊

不健康的函数

```js
import { relpyPrivate } from '#yunzai'

// 看似简化了，其实会造成部分开发者不熟悉icqq接口
relpyPrivate('xxx')
```

其原型为

```js
import { Bot } from '#yunzai'
const friend = Bot.fl.get(userId)
if (friend) {
  Bot.pickUser(userId).sendMsg(msg)
}
```

## Icqq

更多内容可阅读Icqq相关源码
