---
sidebar_position: 5
---

# 模块

:::danger 警告

该文档是实验性的，未上线

:::


## 数据

> 不推荐使用 Sqlite 已计划移除

```ts 
import { Sqlite } from 'yunzai/db'
```

> Redis 废弃，将更改为ioRedis，以支持更多特性

> 当且仅当redis被调用时，进行连接

```ts 
import { Redis } from 'yunzai/db'
```

## 原神


> 不推荐使用，未来版本将废弃

```ts 
import * as MYS from 'yunzai/mys'
```

米游接口 -- 非米游插件禁止使用
