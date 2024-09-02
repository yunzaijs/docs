---
sidebar_position: 1
---

# 使用

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 使用者提示

运行并控制机器人

:::

## 一、运行

- 启动

```sh
yarn run app
```

- 重新登录

```sh
yarn run app --relogin
```

- 进程托管

```sh
yarn run start
```

- 杀死进程

```sh
yarn run kill
```

> 更多内容，请阅读 [PM2](https://pm2.keymetrics.io/) 使用文档

## 二 、拓展模块的安装及配置

[拓展模块库](/docs/docs/category/module-shop)

:::tip Yunzai-Next 支持模块化拓展功能

可对Yunzai进行安装扩展模块并配置，
丰富机器人功能、增强机器人体验

:::

模块配置文件字段说明：

- `applications`：应用列表，所有启用的模块应用在此字段处配置（可以浅理解为`插件`）
- `middlewares`：中间件列表，所有启用的中间件模块在此字段处配置 （特殊处理模块）

:::caution 中间件处理模块会对全部`applications`生效
:::

用户侧配置文件详解：

### 应用及中间件配置

最新版本支持 js 和 json 格式的模块配置文件，推荐使用json格式的配置文件，选择其中一个即可：

1. **yunzai.config.js**：

配置文件路径： `yunzai-bot/yunzai.config.js`

不推荐未掌握js便修改此文件，

请注意如果使用了此配置文件，在`移除`模块时需要修改此文件删除对应模块的配置

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzai'
export default defineConfig({
  applications: ['yz-system'], // 所有模块应用
  middlewares: ['yunzai-mys/runtime', 'yunzai-mys/mw'] // 所有中间件
})
```

2. **yunzai.config.json**：

配置文件路径： `yunzai-bot/yunzai.config.json`

使用json格式的配置文件需要`手动创建`，

请注意`移除`模块时需要修改此文件删除对应模块的配置

```json title="yunzai.config.json"
{
  "applications": ["yz-system"],
  "middlewares": ["yunzai-mys/runtime", "yunzai-mys/mw"]
}
```

### 安装及配置演示

如下为 `修仙` 模块（插件）的安装及配置演示：

1. 安装 `yz-xiuxian` 模块

```sh
yarn add yz-xiuxian -W
```

2. 创建yunzai.config.json文件并写入以下内容

```json title="yunzai.config.json"
{
  "applications": ["yz-xiuxian"]
}
```

3. 其他讲解

可以理解为，V3是自动档，Next是手动挡

- V3

V3的逻辑是去plugins目录便利所有js文件或子目录下的index.js文件

借助git对代码进行管理

此时，需要继续进行依赖安装，同时确保该插件有标注依赖，否则无法正常进行后续操作

- Next

当前版本，使用了node模块化设计，通过依赖对模块进行版本管理

可以随时用指令切换任意稳定的版本

```sh
# 最初版
yarn add yz-xiuxian@1.0.0 -W
# 最新版
yarn add yz-xiuxian@latest
```

一般情况下，并不需要去修改yunzai.config.json文件

除非你对该模块进行了删除

```sh
yarn remove yz-xiuxian
```

那就必须修改yunzai.config.json确保不会再加载该模块

在安装的那一刻yarn就已经为你管理好所需要的模块

除非开发者没有记得在发布模块时，配置好关联的其他依赖
