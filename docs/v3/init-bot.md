---
sidebar_position: 1
---

# 安装

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::danger 开发者提示

如果你是开发者，你需要阅读V3文档后继续阅读V4

:::

> 必要环境 Windows/Linux + Chrome/Chromium/Edge

> 必要环境 Node.js>16.14.0 + Redis>5.0.0

> 推荐环境 Node.js=18.18.2 + Redis>6.0.0

> 推荐使用NVM对Node.js进行版本管理

## 克隆项目

> 请根据网络情况选择Github安装或Gitee安装

<Tabs>
  <TabItem value="apple" label="Github" default>
```sh
git clone --depth=1 https://github.com/yoimiya-kokomi/Miao-Yunzai.git
cd Miao-Yunzai 
git clone --depth=1 https://github.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
```
  </TabItem>
  <TabItem value="orange" label="Gitee">
```sh
git clone --depth=1 https://gitee.com/yoimiya-kokomi/Miao-Yunzai.git
cd Miao-Yunzai 
git clone --depth=1 https://gitee.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
```
  </TabItem>
</Tabs>

### 安装[pnpm](https://pnpm.io/zh/installation)

> 已安装的可以跳过

```sh
npm install pnpm -g
```

###  安装依赖

> 外网环境请修改的本地npm配置.npmrc

```sh
# 直接安装
pnpm install -P
```

### 运行

> 首次运行按提示输入登录

```sh
npm run app
```

### 登录

```sh
npm run login
```

### 托管

```sh
npm run start
```