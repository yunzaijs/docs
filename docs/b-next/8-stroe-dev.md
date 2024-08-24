---
sidebar_position: 8
---

# 存储

:::tip 提示

提供对基本的数据存储接口

:::

### localStorage

> 用于代替浏览器环境下的localStorage永久存储方案

```ts
import { localStorage } from 'yunzai'
```

- 设置

```ts
const KEY = 'yunzai:data'
localStorage.set(KEY, 'hello word')
```

- 获取

```ts
const KEY = 'yunzai:data'
const Data = localStorage.get(KEY)
console.log(Data) // hello word
```

### Redis

> Redis长期保留

```ts
import { Redis } from 'yunzai'
```

> 更推荐高新版本的的ioRedis

```ts
yarn add ioredis -W
```
