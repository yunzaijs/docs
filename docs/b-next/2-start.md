---
sidebar_position: 1
---

# 使用

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 使用者提示

运行并控制机器人，开发者可阅读后续教程

:::

## 运行

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

## 配置

:::tip 提示

可对Yunzai进行扩展的配置文件，
通过安装模块增强机器人体验

:::

下面是用户侧配置源码内容

> 不推荐未掌握js便修改此文件

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzai'
export default defineConfig({
  applications: ['yz-system'], // 所有模块应用
  middlewares: ['yunzai-mys/runtime', 'yunzai-mys/mw'] // 所有中间件
})
```

使用json配置表示为

```json title="yunzai.config.json"
{
 "applications":["yz-system"],
 "middlewares":["yunzai-mys/runtime", "yunzai-mys/mw"]
}
```

> 中间件即全部app都会生效的中间处理模块

- 安装示例

```sh
yarn add yz-xiuxian -W
```

创建yunzai.config.json文件并写入以下内容

```json title="yunzai.config.json"
{
 "applications":["yz-xiuxian"]
}
```

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
