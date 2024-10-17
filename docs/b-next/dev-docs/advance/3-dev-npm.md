---
sidebar_position: 3
---

# npm

```env title=".npmrc"
/*
!/lib
!/public
```

> 配置项、依赖包请根据实际需要进行调整

```json title="package.json"
{
  "name": "yz-template", //应用名称
  "version": "1.0.0-rc.0", //版本号
  "description": "Yunzai-Next APP", //应用描述
  "author": "author", //作者
  "type": "module",
  "private": true, // 如果发布npm包请去除私有限制
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
  "types": "lib",
  "exports": {
    ".": {
      "import": "./lib/index.js",
      "types": "./lib/index.d.ts"
    }
  },
  "keywords": ["yunzaijs"],
  "publishConfig": {
    "registry": "https://registry.npmjs.org",
    "access": "public"
  }
}
```

## 发布

[点击注册 npm 账户](https://www.npmjs.com/)

```bash title="编译"
yarn run build
```

```sh title="登录"
npm login
```

- publish

```bash title="先打包至本地，确认文件信息"
npm pack
```

```bash title="确认无误后上传"
npm publish
```
