---
sidebar_position: 7
---

# 插件配置

:::danger 警告

该文档是实验性的，未上线

:::


配置一个`package.json`

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