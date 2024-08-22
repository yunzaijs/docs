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

<Tabs>
  <TabItem value="正式环境" label="正式环境">

- 编译

```sh
yarn run build
```

- 启动

```sh
yarn run app
```

- 重新登录

```sh
yarn run login
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

</TabItem>
<TabItem value="测试环境" label="测试环境">

- 启动

```sh
yarn run test
```

- 重新登录

```sh
yarn run test login
```

  </TabItem>
</Tabs>

## 配置

:::tip 提示

可对Yunzai进行化扩展的配置文件，
通过安装模块增强机器人体验

:::

下面是用户侧配置源码内容

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzai'
export default defineConfig({
  applications: ['yz-system'], // 所有模块应用
  middlewares: ['yz-mw-runtime', 'yz-mw-star-rail'] // 所有中间件
})
```

也可以既字符串有传入模块

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzai'
import system from 'yz-system' // 系统模块
export default defineConfig({
  applications: [system()], // 所有模块应用
  middlewares: ['yz-mw-runtime', 'yz-mw-star-rail'] // 所有中间件
})
```

> 中间件即全部app都会生效的中间处理模块

- 安装示例

```sh
yarn add yz-xiuxian -W
```

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzai'
export default defineConfig({
  applications: ['yz-xiuxian'] // 修改这一行
})
```

完整的配置如下

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzai'
export default defineConfig({
  applications: ['yz-system', 'yz-xiuxian'], // 所有模块应用
  middlewares: ['yz-mw-runtime', 'yz-mw-star-rail'] // 所有中间件
})
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

一般情况下，并不需要去修改yunzai.config.js文件

除非你对该模块进行了删除

```sh
yarn remove yz-xiuxian
```

那就必须修改yunzai.config.js确保不会再加载该模块

在安装的那一刻yarn就已经为你管理好所需要的模块

除非开发者没有记得在发布模块时，配置好关联的其他依赖
