---
sidebar_position: 1
---

# 安装

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 使用者提示

V3 即将迎来停更，新版内容和改动较多，请仔细阅读后再进行.

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