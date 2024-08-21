---
sidebar_position: 3
---

# 开发

## 安装

:::tip 提示

你将要学习如何开发一个npm应用

:::

> [入门 教学 (bilibili)](https://www.bilibili.com/video/BV1fBpUeDEE3)

- 创建

```bash
npm create yunzai@latest -y
cd yunzaib # 进入
```

超时连接可尝试使用镜像

```sh
npm create --registry=https://registry.npmmirror.com yunzai@latest -y
cd yunzaib
```

- 包管理

```bash
npm install yarn@1.19.1 -y
```

- 安装依赖

```bash
yarn run
```

- 启动机器人

```bash
yarn run app
```

### 发布

[点击注册 npm 账户](https://www.npmjs.com/)

- 编译

```bash
yarn run build
```

- 登录

```sh
npm login
```

- package.json

```json
{
  // 要上传的文件夹
  "files": ["public", "assets", "lib"],
  // 类型文件夹
  "types": "lib",
  // 到导出配置
  "exports": {
    // 默认导出
    ".": {
      "import": "./lib/index.js",
      "types": "./lib/index.d.ts"
    }
  },
  // 关联yunzai
  "keywords": ["yunzai"],
  // 上传配置
  "publishConfig": {
    // publish地址为官方 npm
    "registry": "https://registry.npmjs.org"
  }
}
```

- publish

先打包至本地，确认文件信息

```bash
npm pack
```

确认无误后上传

```bash
npm publish
```

### 源码

[create-yunzai](https://github.com/yunzai-org/create-yunzai/tree/main/bin/template)
