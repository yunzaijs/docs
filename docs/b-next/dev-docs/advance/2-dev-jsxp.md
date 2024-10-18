---
sidebar_position: 2
---

# jsxp

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

```sh title="安装"
yarn add jsxp -W
```

> 自动搜索浏览器内核

```js title=".puppeteerrc.cjs"
/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = require('jsxp/.puppeteerrc')
```

```json title="tsconfig.json"
{
  "include": ["src/**/*"],
  "extends": ["lvyjs/tsconfig.json"]
  // 未了解 lvyjs 请阅读上一章节
}
```

### 使用示例

```tsx title="src/hello.tsx"
// 示例react组件
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

```ts title="src/image.tsx"
//示例 调用jsxp默认截图渲染方法，当然也可以自定义并拓展截图方法
import React from 'react'
import {  render, ObtainProps } from 'jsxp'
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

```ts title="src/index.ts"
import { pictureRender } from './image.tsx'
const img: Buffer | false = await pictureRender(123456, {})
if (img) {
  // 可fs保存到本地
}
```

### 本地调试

```ts title="lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { createServer as useJSXP } from 'jsxp'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineConfig({
  plugins: [
    {
      name: 'lvy-view-app',
      useApp: () => {
        // 启动jsxp本地调试
        if (process.argv.includes('--view')) useJSXP()
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

```tsx title="jsxp.config.tsx"
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

```sh title="使用lvyjs启动截图热开发"
npx lvy dev --view
```

### 背景图

```tsx
import React from 'react'
import { BackgroundImage } from 'jsxp'
import img_url from './resources/example.pn'
import img_svg from './resources/example.svg'
import img_example from './resources/example.png'
export default function Word() {
  return (
    <html>
      <body>
        <BackgroundImage url={img_url} size="100% 100%">
          我有了一个背景图
        </BackgroundImage>
        <img src={img_svg} />
        <img src={img_example} />
      </body>
    </html>
  )
}
```

### 样式资源

```tsx title="./link.tsx"
import { createRequire, LinkStyleSheet, LinkESM } from 'jsxp'
import css_url from '../../resources/css/hello.css'
const require = createRequire(import.meta.url)
export const Link = () => {
  return (
    <html>
      <head>
        <LinkStyleSheet src={css_url} />
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
import React from 'react'
import { LinkStyleSheet } from 'jsxp'
import css_output from './input.css'
export default (_ = {}) => {
  return (
    <html>
      <head>
        <LinkStyleSheet src={css_output} />
      </head>
      <body>
        <div className="show-image p-8 w-full "></div>
      </body>
    </html>
  )
}
```

### CSS预处理器

```js title="postcss.config.cjs"
module.exports = {
  plugins: {
    // 允许使用import导入css文件
    'postcss-import': {},
    // 允许使用嵌套语法
    'postcss-simple-vars': {},
    // nested
    'postcss-nested': {},
    // tailwindcss
    'tailwindcss': {},
    // 增加浏览器前缀
    'autoprefixer': {},
    // 内联url资源
    'postcss-url': {
      url: 'inline'
    },
    // 压缩css
    'cssnano': {
      preset: 'default'
    }
  }
}
```
