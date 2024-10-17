---
sidebar_position: 1
---

# 开始

## 模版

:::tip 提示

你将要学习如何开发一个npm应用

:::

> [入门 教学 (bilibili)](https://www.bilibili.com/video/BV1fBpUeDEE3)

- 创建

```bash
npm create yunzaijs@latest -y
cd yunzaib # 进入
```

超时连接可尝试使用镜像

```sh
npm create --registry=https://registry.npmmirror.com yunzaijs@latest -y
cd yunzaib
```

```bash title="包管理"
npm install yarn@1.19.1 -y
```

```bash title="安装依赖"
yarn install
```

```bash title="启动机器人"
yarn run app
```

## 源码

[create-yunzai](https://github.com/yunzaijs/core/tree/main/packages/create-yunzaijs/bin/template)
