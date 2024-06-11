---
sidebar_position: 1
---

# 安装

:::tip 使用者提示

你应该积极使用 V3 ，它仍然是长期支持并维护的版本。

:::

> 必要环境 Windows/Linux + Chrome/Chromium/Edge

> 必要环境 Node.js>16.14.0 + Redis>5.0.0

> 推荐环境 Node.js=18.18.2 + Redis>6.0.0

> 推荐使用NVM对Node.js进行版本管理

## 使用教程

- 安装源码

```sh
git clone --depth=1 -b dev https://github.com/yoimiya-kokomi/Miao-Yunzai.git
```

- 进入目录

```sh
cd Miao-Yunzai
```

- 安装插件(计划移除中...)

```sh
git clone --depth=1 https://github.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
```

- 安装依赖

```sh
npm install pnpm -g
pnpm install
```

- 连接代码

提供名为yunzai的本地环境给其他应用

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
