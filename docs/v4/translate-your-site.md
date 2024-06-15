---
sidebar_position: 1
---

# 安装

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 使用者提示

新版内容和改动较多，请仔细阅读后再进行

:::

> 必要环境 Windows/Linux + Chrome/Chromium/Edge

> 必要环境 Node.js > 16.14.0 + Redis> 5.0.0

> 推荐环境 Node.js ~ 18.18.2 + Redis ~ 6.0.0

> 推荐使用NVM对Node.js进行版本管理

- 安装源码

<Tabs>
  <TabItem value="apple" label="Github" default>

```sh
git clone --depth=1 -b dev https://github.com/yoimiya-kokomi/Miao-Yunzai.git
```

  </TabItem>
  <TabItem value="orange" label="Gitee">

```sh
git clone --depth=1 -b dev https://gitee.com/yoimiya-kokomi/Miao-Yunzai.git
```

  </TabItem>
</Tabs>


- 进入目录

```sh
cd Miao-Yunzai
```

- 安装插件(计划移除中...)

<Tabs>
  <TabItem value="apple" label="Github" default>

```sh
# 原神插件
git clone --depth=1 -b genshin https://github.com/yoimiya-kokomi/Miao-Yunzai.git ./plugins/genshin/

# 喵喵插件
git clone --depth=1 https://github.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
```

  </TabItem>
  <TabItem value="orange" label="Gitee">

```sh
# 原神插件
git clone --depth=1 -b genshin https://gitee.com/yoimiya-kokomi/Miao-Yunzai.git ./plugins/genshin/

# 喵喵插件
git clone --depth=1 https://gitee.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
```

  </TabItem>
</Tabs>


- 安装依赖

```sh
npm install pnpm -g
pnpm install
```

- 连接代码

```sh
npm link
npm link yunzai
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
