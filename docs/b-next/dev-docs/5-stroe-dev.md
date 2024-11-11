---
sidebar_position: 5
---

# 存储

:::tip 提示

提供对基本的数据存储接口

:::

### Redis

```ts
import { Redis } from 'yunzaijs'
```

```ts
Redis.set('yunzai:user', '123456')
const uid = await Redis.get('yunzai:user')
console.log(uid) // 123456
```
