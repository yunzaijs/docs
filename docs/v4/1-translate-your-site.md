---
sidebar_position: 1
---

# 安装

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 使用者提示

V4会保持对V3的支持，但不保留对V2的支持，因此，V3内的所有V2写法都将在新版中失效。

:::

> 必要环境 Windows/Linux + Chrome/Chromium/Edge

> 必要环境 Node.js > 16.14.0 + Redis > 4.0.0

> 推荐环境 Node.js ~ 18.18.2 + Redis ~ 6.0.0

> 推荐使用NVM对Node.js进行版本管理

- 安装源码

```sh
git clone --depth=1 https://github.com/yunzai-org/yunzaijs.git
```

- 进入目录

```sh
cd yunzaijs
```

- 安装依赖

```sh
npm install pnpm -g
pnpm install
```

- 启动

```sh
npm run app
```

- 重新登录

```sh
npm run login
```

- 进程托管

```sh
npm run start
```

- 杀死进程

```sh
npm run kill
```

> 更多内容，请阅读 [pm2](https://pm2.keymetrics.io/) 使用文档