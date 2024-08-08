---
sidebar_position: 2
---

# 开发

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 使用者提示

V3开发者可阅读此文档了解此处以Miao-Yunzai机制，以写出更具有兼容性的代码

:::

## 目录结构

- config/default_config

原始的配置文件，启动后会复制一份至config/config/\*.yaml

`yaml` 机器人常用的配置文件格式

- lib

工程目录，是包含yunzai所有逻辑处理的js文件

- plugins

插件目录，存放实际的交互功能也是用于扩展功能的js文件

- app.js

入口文件，可使用`node app`进行默认启动，但推荐配置设定好的指令启动

- package.json

node包配置

```json
{
  // 包名
  "name": "miao-yunzai",
  // 版本
  "version": "3.1.3",
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
  "devDependencies": {},
  // js模式的本地模块 等同 import { } from '#yunzai'
  "imports": {
    "#yunzai": "./lib/index.js",
    // 使用 import { } from '#miao'
    "#miao": "./plugins/miao-plugin/components/index.js",
    // 使用 import { } from '#miao.models'
    "#miao.models": "./plugins/miao-plugin/models/index.js"
  }
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
        reg: /^#你好$/,
        fnc: this.post.name
      }
    ]
  }
  async post() {
    this.e.reply('发送消息')
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
        reg: /^#你好$/,
        fnc: this.post.name
      }
    ]
  }

  async post() {
    this.e.reply('发送消息')
  }
}
```

  </TabItem>
</Tabs>

启动机器人后，在聊天窗口发送`#你好`可触发效果

- #yunzai

这是新增，统一的接口，你可以本地模块中找到所有被yunzai暴露在外的接口

同时也是Miao引进且推荐使用的

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

    this.task = {}
  }

  async start() {
    //
  }
}
```

请使用原生方法

```js
import { Bot } from '#yunzai'
import schedule from 'node-schedule'
// 订阅消息
schedule.scheduleJob('', () => {
  const user_id = 999999999
  Bot.pickUser(user_id).sendMsg('xxx')
})
```

这样也是不推荐的

```js
import schedule from 'node-schedule'
import { Word } from './apps.js'
// new 了一堆方法
schedule.scheduleJob('', new Word().start)
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
        reg: /^#你好$/,
        fnc: this.post.name
      }
    ]
  }

  async post() {
    this.e.reply('发送消息')
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
        reg: /^#你好$/,
        fnc: this.post.name
        //
      }
    ]
    // 越小优先级越高，即优先执行
    this.priority = 300
  }

  async post() {
    this.e.reply('发送消息')
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
        reg: /^#你好$/,
        fnc: this.post.name,
        // 默认为 all
        permission: 'master'
      }
    ]
  }

  async post() {
    this.e.reply('请输入密码')
    // 脱离Plugin机制，重复执行start函数
    this.setContext('start')
  }

  async start() {
    this.e.reply(`你的密码为${this.e.msg}`)

    // 结束
    this.finish('start')
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
        reg: /^#你好$/,
        fnc: this.post.name
      }
    ]
  }

  async post() {
    this.e.reply('发送消息')

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
        reg: /^#你好$/,
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

:::tip 注意

推荐使用全球最流程的框架，任何版本都可以采用此设计进行开发

[react-puppeteer](https://github.com/lemonade-lab/react-puppeteer)

:::

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
        reg: /^#你好$/,
        fnc: this.post.name
      }
    ]
  }

  async post() {
    makeForwardMsg(this.e, ['发送消息'], '这是一条被转发的消息的备注')
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
