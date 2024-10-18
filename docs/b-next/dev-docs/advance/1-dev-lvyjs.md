---
sidebar_position: 1
---

# lvyjs

使用开发工具提高开发效率，提升开发体验。

## 安装

:::tip lvyjs

基于 tsx、esbuld、rollup 所构建的，为 nodejs 应用设计的开发工具。

YunzaiJS 默认统一使用 lvyjs 进行开发

:::

| Project | Status                | Description  |
| ------- | --------------------- | ------------ |
| [lvyjs] | [![lvyjs-s]][lvyjs-p] | 打包开发工具 |

[lvyjs]: https://github.com/lemonade-lab/alemonjs/tree/main/packages/lvyjs
[lvyjs-s]: https://img.shields.io/npm/v/lvyjs.svg
[lvyjs-p]: https://www.npmjs.com/package/lvyjs

> 使用方法

- 安装 `lvyjs`

```sh title="若使用yunzaiJS开发模版则无需安装，直接使用"
npm install lvyjs -D
```

- `./tsconfig.json`

```json
{
  "include": ["src/**/*", "jsxp.config.tsx"],
  "extends": "lvyjs/tsconfig.json"
}
```

- `./lvy.config.ts`

```ts title="./lvy.config.ts"
import { defineConfig } from 'lvyjs'
// 处理 yunzaijs 相关
const useYunzai = async () => {
  const { Client, createLogin, Processor } = await import('yunzaijs')
  setTimeout(async () => {
    await createLogin()
    Client.run()
      .then(() => Processor.install(['yunzai.config.ts', 'yunzai.config.json']))
      .catch(console.error)
  }, 0)
}

export default defineConfig({
  plugins: [
    {
      name: 'yunzaijs',
      useApp: () => {
        if (process.argv.includes('--yunzai')) useYunzai()
      }
    }
  ]
})
```

## 使用

### 非模块文件引入

```ts title="src/index.ts"
import img_url from './asstes/test.ong'
console.log('string', img_url)
```

### 别名引用

```json title="tsconfig.json"
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      // 设置别名，方便路径引用
      "@src/*": ["src/*"]
    }
  }
}
```

```ts title="./lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineConfig({
  build: {
    alias: {
      // 编译时将 @src 别名替换为 src 保证路径正确
      entries: [{ find: '@src', replacement: join(__dirname, 'src') }]
    }
  }
})
```

```ts
import img_url from '@src/asstes/test.ong'
console.log('string', img_url)
```

### 移除注释

```ts title="./lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineConfig({
  build: {
    alias: {
      entries: [{ find: '@src', replacement: join(__dirname, 'src') }]
    },
    typescript: {
      // 打包时移除注释，如果需要其他配置，参考typeScript库的 CompilerOptions
      removeComments: true
    }
  }
})
```

### 压缩代码

```sh title="安装压缩插件"
yarn add rollup-plugin-terser -D
```

```ts title="./lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
// 导入压缩插件
import { terser } from 'rollup-plugin-terser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineConfig({
  build: {
    alias: {
      entries: [{ find: '@src', replacement: join(__dirname, 'src') }]
    },
    typescript: {
      removeComments: true
    },
    plugins: [terser()] // 使用压缩插件压缩代码
  }
})
```

## 打包

> 需完成上文的配置

> 默认对 `./src` 目录打包并输出到 `./lib` 目录

```sh title="编译打包"
yarn run build
```
