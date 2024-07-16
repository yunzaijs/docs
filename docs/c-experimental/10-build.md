---
sidebar_position: 10
---

# 开发

> 安装应用开发模板

```sh
npm create yunzai@latest -y
cd yunzai
npm install yarn@1.2.1 -y
yarn
```

- package.json

```json5
{
  "name": "system-plugin",
  "version": "1.0.0-rc.0",
  "author": "",
  "description": "QQ Group Bot Plugin",
  // 入口文件
  "main": "./index.js",
  "type": "module",
  "scripts": {},
  // 内部依赖
  "dependencies": {},
  // 内部开发时依赖
  "devDependencies": {},
  // yunzai配置
  "yunzai":{
    // 此处将放置其插件内部在未来可能需要的参数
  }
}
```
