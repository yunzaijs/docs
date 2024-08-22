---
sidebar_position: 2
---

# 开发

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 使用者提示

V3开发者可阅读此文档了解Miao-Yunzai机制，写出更合理的代码

:::

## 目录结构

- package.json

> 包配置相比于Yunzai都出了三个本地化模块`#yunzai` `#miao` `#miao.models`

```json
{
  // 包名
  "name": "miao-yunzai",
  "version": "3.1.3",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "app": "node ."
  },
  // js模式的本地模块 等同 import { } from '#yunzai'
  "imports": {
    // 使用 import { } from '#yunzai'
    "#yunzai": "./lib/index.js",
    // 使用 import { } from '#miao'
    "#miao": "./plugins/miao-plugin/components/index.js",
    // 使用 import { } from '#miao.models'
    "#miao.models": "./plugins/miao-plugin/models/index.js"
  }
}
```

### 变化

Miao-Yunzai 对原神插件和喵喵插件进行了耦合，

在安装Miao-Yunzai时，再安装喵喵插件后启动是直接有效的启动方法

同时由原来的Redis存储修改成了`sqlite`，Miao-Yunzai的数据不会和Yunzai互通
