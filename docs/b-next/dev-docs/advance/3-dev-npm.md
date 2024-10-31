---
sidebar_position: 3
---

# npm

## `./.npmrc`

:::tip .npmrc

`./.npmrc` 为npm的配置文件

用于配置 npm 的行为和选项，它可以设置镜像源、代理等配置。

更多配置请参考 [官方文档](https://docs.npmjs.com/cli/v10/configuring-npm/npmrc), [中文文档](https://npm.nodejs.cn/cli/v10/configuring-npm/npmrc)

:::

```env title=".npmrc"
# 以下是一些示例配置，请勿照搬，请根据实际情况进行配置

# 为项目单独设置镜像
registry=https://registry.npmmirror.com
# 不生成lock
package-lock=false
```

## `./.npmignore`

:::tip .npmignore

`.npmignore`： 是一种黑名单机制。

用于指定在执行 npm publish 时，哪些文件和文件夹应该被排除在外。

这是特定用于包发布的文件，主要用来管理项目中哪些文件应当包含在最终发布的 npm 包中。

:::

```env title=".npmignore"
# 忽略文件或文件夹，请根据需要请自行配置，示例：

# 默认会自动排除的文件或文件夹，无需重复配置：
# node_modules .git .hg .svn .npmrc .gitignore .npmignore 等

# 首先排除所有文件或文件夹
/**
# 然后 ! 开头 逐一添加需要发布的文件或文件夹取消忽略，按照实际情况设置
!/lib
!/public
```

## 配置 `package.json`

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
  //"files"，用于发布npm包时，指定发布的文件或文件夹。建议优先使用 .npmignore 进行配置。
  //优先级：package.json 的 "files" 字段 > .npmignore 文件> .gitignore 文件
  "files": ["example"],
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

  > 先打包至本地，确认文件信息，确保您的 .npmignore 或 files 配置有效无误后，再发布至 npm。

```bash title="打包至本地"
npm pack
```

```bash title="确认无误后上传"
npm publish
```
