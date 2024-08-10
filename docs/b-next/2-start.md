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
yarn build
```

- 启动

```sh
yarn app
```

- 重新登录

```sh
yarn login
```

- 进程托管

```sh
yarn start
```

- 杀死进程

```sh
yarn kill
```

> 更多内容，请阅读 [PM2](https://pm2.keymetrics.io/) 使用文档

</TabItem>
<TabItem value="测试环境" label="测试环境">

- 启动

```sh
yarn test
```

- 重新登录

```sh
yarn test login
```

  </TabItem>
</Tabs>

## 配置

:::tip 提示

可对Yunzai进行化扩展的配置文件

:::

下面是用户侧配置源码内容

可通过安装模块增强机器人体验

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzai'
import runtime from 'yz-mw-runtime' // runtime中间件
import starRail from 'yz-mw-star-rail' // 星铁中间件
import system from 'yz-system' // 系统模块
export default defineConfig({
  applications: [system()], // 所有模块应用
  middlewares: [runtime(), starRail()] // 所有中间件
})
```

- 安装示例

```sh
yarn add yz-xiuxian -W
```

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzai'
import xiuxian from 'yz-xiuxian' // 增加这一行
export default defineConfig({
  applications: [xiuxian()] // 修改这一行
})
```

完整的配置如下

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzai'
import runtime from 'yz-mw-runtime'
import starRail from 'yz-mw-star-rail'
import system from 'yz-system'
import xiuxian from 'yz-xiuxian' // 增加这一行
export default defineConfig({
  applications: [system()，xiuxian()], // 修改这一行
  middlewares: [runtime(), starRail()]
})
```

> 不再推荐使用危险且不可控的js便利读取

> Next里，期望是已知要进行的脚本程序
