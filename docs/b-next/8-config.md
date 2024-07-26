---
sidebar_position: 8
---

# 配置

:::tip 提示

可对Yunzai进行化扩展的配置文件

:::

> 不再推荐使用危险且不可控的js便利读取

> Next里，期望是已知要进行的脚本程序

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzai'
import runtime from 'yz-mw-runtime'
import starRail from 'yz-mw-star-rail'
import system from 'yz-system'
export default defineConfig({
  // 应用
  applications: [system()],
  // 中间件
  middlewares: [runtime(), starRail()]
})
```
