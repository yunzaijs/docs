---
sidebar_position: 3
---

# 开发

## 安装

:::tip 提示

你将要学习如何开发一个npm应用

:::

- 创建

```bash
npm create yunzai@latest -y
cd yunzaib # 进入
```

- 包管理

```bash
npm install yarn@1.19.1 -y
```

- 安装依赖

```bash
yarn
```

- 启动机器人

```bash
yarn app
```

指令合集

```bash
npm create yunzai@latest -y
cd yunzaib
npm install yarn@1.19.1 -y
yarn
yarn app
```

### 发布

[点击注册 npm 账户](https://www.npmjs.com/)

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

```bash
npm publish
```

### 源码

[create-yunzai](https://github.com/yunzai-org/create-yunzai/tree/main/bin/template)
