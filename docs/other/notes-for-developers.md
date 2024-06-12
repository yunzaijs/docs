---
sidebar_position: 3
---

# 维护需知

##  提交

```ts
/**
 * feature：新功能
 * update：更新某功能
 * fix：修补某功能
 * refactor：重构某个功能
 * optimize: 优化构建工具或运行时性能
 * style：仅样式改动
 * docs：仅文档新增/改动
 * chore：构建过程或辅助工具的变动
 */
```

##   注释风格

```ts
/**
 * 返回false
 * @param T 任意字符串
 * @returns false
 */
function getTest(T: string) {
  return false
}
```

##  命名风格

```ts
// 获得test值
function getTest(T: string) {}
// 设置
function setTest(T: string) {}
// 删除
function delTest(T: string) {}
// 获取某数据依据为id
function getDataById(T: string) {}

// 系统常量
const ENV_TEST = 'dev'

// 局域常量
const MyName = 'yunzai'

// 可修改变量
let values = ''

// 禁止使用 var values = ''

// 声明数组
const Arr = []

// 不推荐  new

// 声明对象
const Obj = {}

// 不推荐new
```

## 废弃

lib文件夹将在未来逐渐放弃，在版本发布后，开发者需要有意识的对此变化做出调整.

```ts
// 已废弃
--lib / puppeteer
// 无扩展性，计划废弃
--lib / renderer
// 非机器人框架的核心处理代码
// 消耗服务器内存，无扩展性，计划废弃
--lib / tools / web.js / test.js / log.js / ksr.js
// 计划废弃
--renderers

// 其他内容逐步优化。。。
```
