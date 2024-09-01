---
sidebar_position: 1
---

# 安装

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 使用者提示

学习如何安装Yunzai机器人

:::

### 克隆代码

```sh
git clone --depth=1 https://github.com/yunzai-org/yunzai-bot.git
```

仓库地址：[yunzai-bot](https://github.com/yunzai-org/yunzai-bot)

### 安装依赖

1. 切换到yunzai-bot根目录

```sh
cd yunzai-bot
```

2. 更换npm镜像源，加速依赖包下载

```sh
npm config set registry https://registry.npmmirror.com
```

> 如已配置镜像，请可忽视

3. 安装yarn包管理器，`yarn 不能使用2.x版本，它无法使用link`

```sh
npm install yarn@1.19.1 -g
```

> 不推荐pnpm和cnpm

4. 执行依赖安装

<Tabs>
   <TabItem value="16" label="node版本>=18" default>

> 如果 node版本 < 18 需要加参数 `--ignore-engines`

```sh
yarn install
```

  </TabItem>
  <TabItem value="18" label="node版本<18" default>

```sh
yarn install --ignore-engines
```

  </TabItem>
</Tabs>
