---
sidebar_position: 1
---

# 安装

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip BOT

普通用户推荐使用 BOT PE 仓库，其配置了对 Yunzai-V3 插件的兼容，适合绝大多数用户使用。

:::

### 克隆代码

```sh title="BOT PE"
git clone --depth=1 https://github.com/yunzaijs/bot.git ./yunzai-bot
```

仓库地址：[BOT PE](https://github.com/yunzaijs/bot)

### 安装依赖

```sh title="切换到yunzai-bot根目录"
cd yunzai-bot
```

```sh title="更换npm镜像源，加速依赖包下载"
npm config set registry https://registry.npmmirror.com
```

> 如已配置镜像，请可忽视

```sh title="yarn 不能使用2.x版本，它无法使用link"
npm install yarn@1.19.1 -g
```

> 安装[Yarn - JavaScript 软件包管理器](https://www.yarnpkg.cn/)

> 不推荐pnpm和cnpm

<Tabs>
   <TabItem value="16" label="node版本>=18" default>

> 如果 node版本 < 18 需要加参数 `--ignore-engines`

```sh title="执行依赖安装"
yarn install
```

  </TabItem>
  <TabItem value="18" label="node版本<18" default>

```sh title="执行依赖安装"
yarn install --ignore-engines
```

  </TabItem>
</Tabs>
