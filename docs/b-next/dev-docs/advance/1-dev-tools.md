---
sidebar_position: 1
---

# 开发工具

使用开发工具提高开发效率，提升开发体验。

## LVYJS

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
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@src/*": ["src/*"]
    }
  },
  "include": ["src/**/*", "jsxp.config.tsx"],
  "extends": "lvyjs/tsconfig.json" // 继承 lvyjs 的 tsconfig，需安装 lvyjs
}
```

- `./lvy.config.ts`

```ts
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineConfig({
  plugins: [
    {
      name: 'yunzaijs',
      useApp: async () => {
        if (process.argv.includes('--yunzai')) {
          const { Client, createLogin, Processor } = await import('yunzaijs')
          setTimeout(async () => {
            await createLogin()
            Client.run()
              .then(() => Processor.install(['yunzai.config.ts', 'yunzai.config.json']))
              .catch(console.error)
          }, 0)
        }
      }
    },
    {
      name: 'jsxp',
      useApp: async () => {
        if (process.argv.includes('--view')) {
          const { createServer } = await import('jsxp')
          createServer()
        }
      }
    }
  ],
  build: {
    alias: {
      entries: [{ find: '@src', replacement: join(__dirname, 'src') }]
    }
  }
})
```

- `./package.json`

  配置项、依赖包请根据实际需要进行调整

```json title="开发模版 package.json"
{
  "name": "yz-template", //应用名称
  "version": "1.0.0-rc.0", //版本号
  "description": "Yunzai-Next APP", //应用描述
  "author": "author", //作者
  "type": "module",
  "private": true, //如果发布到npm，是否公开发布让其他人使用，true即不公开
  "scripts": {
    "app": "node lib/main.js", //启动应用
    "dev": "lvy dev --yunzai", //启动开发环境下的应用
    "view": "lvy dev --view", //截图热开发
    "build": "lvy build", //编译打包
    "start": "pm2 startOrRestart pm2.config.cjs", //pm2 启动应用
    "bundle": "rollup --config rollup.config.js", //若使用rollup打包需配置此项
    "stop": "pm2 stop pm2.config.cjs", //pm2 停止应用
    "delete": "pm2 delete pm2.config.cjs", //pm2 删除应用
    "format": "prettier --write .", //格式化代码
    "check-format": "git diff --exit-code", //检查代码格式
    "prepare": "husky" //自动安装husky，该部分请查看后面的文档
  },
  "dependencies": {
    //生产环境依赖包
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "jsxp": "^1.0.4"
  },
  "devDependencies": {
    //开发环境依赖包
    "@types/lodash-es": "^4.17.12",
    "@types/node": "^20.8.5",
    "@types/node-schedule": "^2.1.7",
    "@types/react": "^18.3.4",
    "husky": "^9.1.5",
    "icqq": "^0.6.10",
    "lvyjs": "^0.1.0",
    "prettier": "^3.0.3",
    "tailwindcss": "^3.4.10",
    "typescript": "^5.4.5",
    "yunzaijs": "^1.0.0-rc.4"
  },
  "files": [
    //发布到npm时，需要发布的文件，请根据实际情况调整
    "public",
    "lib",
    "CHANGELOG.md",
    "README.md",
    "package.json",
    "LICENSE",
    ".puppeteerrc.cjs"
  ],
  "types": "lib",
  "exports": {
    ".": {
      "import": "./lib/index.js",
      "types": "./lib/index.d.ts"
    }
  },
  "keywords": ["yunzaijs"],
  "publishConfig": {
    "registry": "https://registry.npmjs.org"
  }
}
```

### 打包

> 需完成上文的配置

> 默认对 `./src` 目录打包并输出到 `./lib` 目录

```sh title="编译打包"
yarn run build
```

## 截图

:::tip jsxp

[jsxp](https://github.com/lemonade-lab/lvyjs/tree/main/packages/jsxp) 是一个可以在 tsx 环境中,使用 puppeteer 对 React （tsx） 组件进行截图的库

yunzaiJS 默认统一使用 jsxp 调用 puppeteer 对 React 组件进行生成截图

:::

| Project | Status              | Description |
| ------- | ------------------- | ----------- |
| [jsxp]  | [![jsxp-s]][jsxp-p] | 打包工具    |

[jsxp]: https://github.com/lemonade-lab/alemonjs/tree/main/packages/jsxp
[jsxp-s]: https://img.shields.io/npm/v/jsxp.svg
[jsxp-p]: https://www.npmjs.com/package/jsxp

> 若使用VScode进行开发：安装插件 `ES7+ React/Redux/React-Native snippets`

```sh title="安装jsxp"
yarn add jsxp -W
```

- `./.puppeteerrc.cjs`

> 自动搜索浏览器内核

```cjs
/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = require('jsxp/.puppeteerrc')
```

- 配置 `./tsconfig.json`

```json
{
  "include": ["src/**/*"],
  "extends": ["jsxp/tsconfig.json"]
}
```

### 使用示例

```tsx
// 示例react组件 src/hello.tsx
import React from 'react'
export default () => {
  return (
    <html>
      <body>
        <div> hello React ! </div>
      </body>
    </html>
  )
}
```

```ts
//src/image.tsx
//示例 调用jsxp默认截图渲染方法，当然也可以自定义并拓展截图方法
import React from 'react'
import { pictureRender, render, ObtainProps } from 'jsxp'
import Hello from './hello.tsx'
export const pictureRender = (uid: number, Props: ObtainProps<typeof Hello>) => {
  // 生成 html 地址 或 html字符串
  return render({
    // html/hello/uid.html
    path: 'hello',
    name: `${uid}.html`,
    component: <Hello {...Props} />
  })
}
```

```ts
// src/index.ts
import { pictureRender } from './image.tsx'
const img: Buffer | false = await pictureRender(123456, {})
if (img) {
  // 可fs保存到本地
}
```

### 本地调试

- `./tsconfig.json`

```json
{
  "include": ["jsxp.config.tsx"]
}
```

- `./jsxp.config.tsx`

```tsx
import React from 'react'
//import Music from './music.js'
import Hello from './hello.tsx'
import { defineConfig } from 'jsxp'
export default defineConfig({
  routes: {
    '/hello': {
      component: <Hello data={(123456, {})} />
    }
    // 本地调试时，可以添加更多本地组件进行调试
    /* '/music': {
      component: <Music />
    } */
  }
})
```

- dev

> 若单独使用jsxp，可使用以下命令启动本地调试

```sh title="启动截图热开发"
npx jsxp dev
```

> 若使用lvyjs，需完成上文lvyjs的配置

```sh title="若使用lvyjs可使用以下命令启动截图热开发"
yarn run view
```

### 扩展功能

> VScode 安装插件 `Path Intellisense`

#### 文件引入

`createRequire` 请确保引入的是项目目录下的文件

```ts
import React from 'react'
import { BackgroundImage, createRequire } from 'jsxp'
const require = createRequire(import.meta.url)
export default function Word() {
  return (
    <html>
      <body>
        <BackgroundImage url={require('./resources/example.png')} size="100% 100%">
          我有了一个背景图
        </BackgroundImage>
        <img src={require('./resources/example.svg')} />
        <img src={require('./resources/example.png')} />
      </body>
    </html>
  )
}
```

#### 元素插入

```tsx title="./link.tsx"
import { createRequire, LinkStyleSheet, LinkESM } from 'jsxp'
const require = createRequire(import.meta.url)
export const Link = () => {
  return (
    <html>
      <head>
        <LinkStyleSheet src={require('../../resources/css/hello.css')} />
      </head>
      <body>
        <LinkESM src={require('../../resources/js/hello.js')} />
      </body>
    </html>
  )
}
```

#### tailwindcss

```sh
yarn add tailwind -W
```

- `./input.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  user-select: none;
}
```

- `./tailwind.config.js`

```js
/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['src/**/*.{jsx.tsx.html}']
}
```

##### 使用lvyjs:

```tsx
import { LinkStyleSheet } from 'jsxp'
import React from 'react'
import css_output from './input.css' //引入入口文件
export default (_ = {}) => {
  return (
    <html>
      <head>
        <LinkStyleSheet src={css_output} /> //使用input.css
      </head>
      <body>
        <div className="show-image p-8 w-full "></div>
      </body>
    </html>
  )
}
```

接着使用lvjs 进行编译打包，即可自动生产 tailwindcss 的样式文件，并使用。

##### 不使用lvyjs进行编译打包

可手动执行 tailwindcss 脚本生产 css 文件, 并引入到 head 组件

- output

`npx` 本地 `-i` 输入 `-o` 输出 `-m` 压缩

```sh
npx tailwindcss -i ./input.css -o ./output.css -m
```

- link.tsx

```tsx
import React from 'react'
import { createRequire, LinkStyleSheet } from 'jsxp'
const require = createRequire(import.meta.url)
export const Link = () => <LinkStyleSheet src={require('./output.css')} />
```

```ts
import { LinkStyleSheet } from 'jsxp'
import React from 'react'
import link from './link.tsx'
export default (_ = {}) => {
  return (
    <html>
      <head>
        {link} //使用output.css
      </head>
      <body>
        <div className="show-image p-8 w-full "></div>
      </body>
    </html>
  )
}
```

## Husky

:::tip husky

[husky](https://github.com/typicode/husky) 是一个 git 钩子工具，它可以帮助我们在提交代码前或提交代码后，自动执行一些脚本，比如格式化代码、eslint 检查、单元测试等。

YunzaiJS 默认统一使用 husky 进行代码检查

:::

### 安装

```sh title="安装husky"
yarn add husky -D
```

```sh title="安装prettier"
yarn add prettier -D
```

### 配置

- `./package.json`

```json
{
  "scripts": {
    "format": "prettier --write .", //格式化代码
    "check-format": "git diff --exit-code", //检查代码格式
    "prepare": "husky" //自动安装husky
  }
}
```

- 创建钩子文件`./.husky/pre-commit`

```sh
# 格式化代码
npm run format

# 检查一致性
npm run check-format
```

> 每次提交代码前，husky 会自动执行`pre-commit`文件中的命令，检查代码格式是否符合规范。

> 如果不符合规范，则提交会被阻止并自动开始格式化代码，

> 等待格式化完成后，再次`git add .`、`git commit -m "xxx"`提交即可。
