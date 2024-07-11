---
sidebar_position: 4
---

# 存储  

:::tip 提示
中间件是实验性的，正在测试中...
:::

### localStorage

用于代替浏览器环境下的localStorage永久存储方案

```ts
import { localStorage } from 'yunzai/db'
```

### levelStroe

基于`levelup`和`leveldown`


```ts
import { levelStorage } from 'yunzai/db'
```

### Redis

> 待废弃

```ts
import { Redis } from 'yunzai/db'
```

### ioRedis

> 待上线

```ts
import { ioRedis } from 'yunzai/db'
```
