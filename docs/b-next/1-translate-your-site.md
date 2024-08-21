---
sidebar_position: 1
---

# 安装

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 使用者提示

学习如何安装Yunzai机器人

:::

- 安装源码

> 请在合适目录中执行，确保具有合理的权限

[阅读 yunzai-next 源码](https://github.com/yunzai-org/yunzai-next)

```sh
git clone --depth=1 https://github.com/yunzai-org/yunzai-next.git
cd yunzai-next
```

> 不需要开发插件的用户

> 可使用纯js纯配置纯模块纯享版，大小百K

[阅读 yunzai-bot 源码](https://github.com/yunzai-org/yunzai-bot)

```sh
git clone --depth=1 https://github.com/yunzai-org/yunzai-bot.git
cd yunzai-bot
```

- 安装依赖

```sh
# 国内镜像，已安装可忽视
npm config set registry https://registry.npmmirror.com
```

> 不推荐npm、pnpm、cnpm等

```sh
# yarn 不能使用2.x版本，它无法使用link
npm install yarn@1.19.1 -g
```

<Tabs>
  <TabItem value="16" label="node>=18" default>

> 如果 node < 18 需要加参数 `--ignore-engines`

```sh
yarn
```

  </TabItem>
  <TabItem value="18" label="node<18" default>

```sh
yarn --ignore-engines
```

  </TabItem>
</Tabs>
