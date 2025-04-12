---
sidebar_position: 0
---

# 开始

:::tip 提示

yunzaijs 已全面采用lvyjs作为开发构建工具，如果你对 nodejs不熟悉，可阅读[https://lvyjs.dev/](https://lvyjs.dev/)

:::

> [入门 教学 (bilibili)](https://www.bilibili.com/video/BV1fBpUeDEE3)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 初始化

```sh title="国内镜像，已安装可忽视"
npm config set registry https://registry.npmmirror.com
```

```sh title="文档统一采用yarn依赖工具"
npm install yarn@1.19.1 -g
yarn install
```

```sh title="使用模板"
npm create lvyjs@latest -y # 选择 yunzaijs
cd yunzaib
yarn install
```

## 启动

```sh title="无自重启模式启动"
yarn run dev --no-watch
```

## 编译

```sh title="编译代码"
yarn run build
```

> 输出目录 lib

## PM2

```shell title="安装PM2"
yarn add pm2 -D
```

```yaml title="alemon.config.yaml"
pm2:
  name: 'qq'
  # 生产模式，入口可选择只向打包生产后的文件
  script: 'node lib/main.js'
```

### 配置

`pm2.config.cjs`

```js title="pm2.config.cjs"
const fs = require('fs')
const yaml = require('yaml')
const data = fs.readFileSync('./alemon.config.yaml', 'utf8')
const config = yaml.parse(data)
const app = config?.pm2 ?? {}
/**
 * @type {{ apps: import("pm2").StartOptions[] }}
 */
module.exports = {
  apps: [
    {
      ...app,
      env: {
        // 确保是生产环境
        NODE_ENV: 'production',
        ...(app?.env ?? {})
      }
    }
  ]
}
```

### 启动

```sh
# start
npx pm2 startOrRestart pm2.config.cjs
# stop
npx pm2 stop pm2.config.cjs
# delete
npx pm2 delete pm2.config.cjs
# kill
npx pm2 kill
# logs
npx pm2 logs
```
