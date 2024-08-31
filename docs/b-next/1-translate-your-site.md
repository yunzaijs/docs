---
sidebar_position: 1
---

# 安装

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 使用者提示

学习如何安装Yunzai机器人

:::

- 安装代码
  
[点击了解 yunzai-bot 仓库](https://github.com/yunzai-org/yunzai-bot)

```sh
git clone --depth=1 https://github.com/yunzai-org/yunzai-bot.git
cd yunzai-bot
```

- 安装依赖

```sh
# 国内镜像，已安装可忽视
npm config set registry https://registry.npmmirror.com
```

> 不推荐pnpm和cnpm

```sh
# yarn 不能使用2.x版本，它无法使用link
npm install yarn@1.19.1 -g
```

<Tabs>
  <TabItem value="16" label="node>=18" default>

> 如果 node < 18 需要加参数 `--ignore-engines`

```sh
yarn install
```

  </TabItem>
  <TabItem value="18" label="node<18" default>

```sh
yarn install --ignore-engines
```

  </TabItem>
</Tabs>
