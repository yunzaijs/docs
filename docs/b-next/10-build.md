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
npm inin -y
```

- 安装开发框架

```bash
npm install yarn@1.12.1 -y
yarn add react-puppeteer -W
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

> src/index.ts

```ts
import { applicationOptions } from 'yunzai'
const Data = []
export default () => {
  return applicationOptions({
    // 插件创建时
    create() {
    
    },
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
  applications:[ Example() ]
})
```

> src/main.ts


```ts
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
    "app": "node --no-warnings=ExperimentalWarning --loader ts-node/esm src/main.ts"
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
const message = new Messages({
  event: 'message.group'
})
message.response(/^(#|\/)?你好/, async e => {
    e.reply('你好')
})
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
      for(const key in Apps){
        Data.push(new Apps[key]())
      }
    },
    // 被执行时
    mounted() {
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
    "app": "node --no-warnings=ExperimentalWarning --loader ts-node/esm src/main.ts",
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
// import { terser } from '@rollup/plugin-terser'
/**
 * @type {import("rollup").RollupOptions[]}
 */
export default [
  {
    // 输入
    input: './src/index.ts',
    output: {
      // 输出
      file: 'index.js',
      format: 'es',
      sourcemap: false
    },
    plugins: [
      typescript({
        compilerOptions: {
          declaration: true,
          declarationDir: 'types'
        }
      })
      // 开启代码压缩
      // terser()
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
  "files": [
    "index.js",
    "types"
  ],
  "types": "types",
  "exports": {
    ".": {
      "import": "./index.js",
      "types": "./types/index.d.ts"
    }
  },
  "keywords": [
    "yunzai"
  ],
  "publishConfig": {
    "registry": "https://registry.npmjs.org"
  }
}
```

- publish

```bash
npm publish
```
