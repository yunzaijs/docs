---
sidebar_position: 10
---

# 开发应用

:::tip 提示

你将要学习如何开发一个npm应用

:::

## 安装模板

```bash
npm create yunzai@latest -y
cd yunzai
npm install yarn@1.2.1 -y
yarn
```

## 重新开始

### 运行

- 初始化package

```bash
npm init -y
```

- 安装开发框架

```bash
npm install yarn@1.12.1 -y
yarn add react puppeteer react-puppeteer -W
yarn add yunzai  -D
```

- 安装ts环境

```bash
yarn add ts-node -D
yarn add typescript -D
```

> tsconfig.json

```json
{
  "include": ["src"],
  "extends": "yunzai/tsconfig/tsconfig.json"
}
```

- 创建基础文件

> src/global.env.d.ts

```ts
/// <reference types="yunzai/global" />
```

> src/react-puppeteer.env.d.ts

```ts
/// <reference types="react-puppeteer/env" />
```

> src/index.ts

```ts
import { applicationOptions, useAppStorage } from 'yunzai'
const Data = useAppStorage()
export default () => {
  return applicationOptions({
    // 插件创建时
    create() {},
    // 被执行时
    mounted() {
      return Data
    }
  })
}
```

> yunzai.config.js

```js
import { defineConfig } from 'yunzai'
import Example from './src/index.js'
export default defineConfig({
  applications: [Example()]
})
```

> src/main.js

```js
import { Client, Loader, createLogin, Processor } from 'yunzai'
setTimeout(async () => {
  // 输入login配置
  await createLogin()
  // 运行客户端
  await Client.run().then(async () => {
    // 读取yunzai.config.js
    await Processor.install()
  })
}, 0)
```

> package.json

```json
{
  "type": "module",
  "scripts": {
    "app": "node --no-warnings=ExperimentalWarning --loader ts-node/esm src/main.js"
  }
}
```

```bash
yarn app
```

### 消息

> src/apps.ts

```ts
import { Messages } from 'yunzai'
const message = new Messages('message.group')
message.use(
  e => {
    e.reply('你好')
  },
  [/^(#|\/)?你好/]
)
export const Test = message.ok
```

> src/index.ts

```ts
import { applicationOptions } from 'yunzai'
import * as Apps from './apps.js'
const Data = []
export default () => {
  return applicationOptions({
    // 插件创建时
    create() {
      for (const key in Apps) {
        Data.push(new Apps[key]())
      }
    },
    // 被执行时
    mounted() {
      // useEvent

      return Data
    }
  })
}
```

### 热开发

```bash
yarn add nodemon -W
```

> package.json

```json
{
  "scripts": {
    "app": "node --no-warnings=ExperimentalWarning --loader ts-node/esm src/main.js",
    "dev": "nodemon"
  }
}
```

> nodemon.json

```json
{
  "exec": "npm run app",
  "verbose": true,
  "delay": 1000,
  "restartable": "rs",
  "watch": ["src"],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,ts,tsx,jsx"
}
```

```bash
yarn dev
```

### 打包

- 安装打包环境

```bash
yarn add rollup -D
yarn add @rollup/plugin-terser -D
yarn add @rollup/plugin-typescript -D
```

> rollup.config.js

```js
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
/**
 * @type {import("rollup").RollupOptions[]}
 */
export default [
  {
    // src 目录
    input: './src/index.ts',
    output: {
      // lib 目录
      dir: 'lib',
      format: 'es',
      sourcemap: false,
      // 保持结构
      preserveModules: true
    },
    plugins: [
      typescript({
        compilerOptions: {
          declaration: true,
          declarationDir: 'lib/types'
        }
      }),
      // 开启代码压缩
      terser()
    ],
    onwarn: (warning, warn) => {
      // 忽略与无法解析the导入相关the警告信息
      if (warning.code === 'UNRESOLVED_IMPORT') return
      // 继续使用默认the警告处理
      warn(warning)
    }
  }
]
```

> package.json

```json
{
  "scripts": {
    "build": "rollup --config rollup.config.js"
  }
}
```

```bash
yarn build
```

### 发布依赖

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
  "types": "lib/types",
  "exports": {
    // 默认导出
    ".": {
      "import": "./lib/index.js",
      "types": "./lib/types/index.d.ts"
    }
  },
  // 关联yunzai
  "keywords": ["yunzai"],
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
