---
sidebar_position: 4
---

# 事件

:::tip 提示

该章节内容需要阅读ICQQ相关接口

Yunzai的消息类型经过扩展

部分类型可能未及时补充

:::

## 调用

### 群聊


```ts
import { Messages } from 'yunzai'
const message = new Messages('message.group')
```

- 回复

```ts
message.use(async e => {
    e.reply('你好')
},[/^(#|\/)?你好/])
```

- 图片

```ts
message.use(async e => {
  const img : Buffer | null = null
  e.reply(Segment.image(img))
},[/^(#|\/)?你好/])
```

- 复合


```ts
message.use( async e => {
  const img : Buffer | null = null
  e.reply(['这是一张图片', Segment.image(img)])
},[/^(#|\/)?你好/])
```


### 私聊


```ts
import { Messages } from 'yunzai'
const message = new Messages('message.private')
```

- 回复

```ts
message.response(async e => {
    e.reply('你好')
},[/^(#|\/)?你好/])
```

## 属性

### 群聊

```ts
export interface EventType {
  /**
   * 是否是主人
   */
  isMaster: boolean
  /**
   * 是否是群里
   */
  isGroup: boolean
  /**
   * 是私聊
   */
  isPrivate?: any
  /**
   * 是频道
   */
  isGuild?: any
  /**
   * 用户消息
   */
  msg: string
  /**
   * 用户编号
   */
  user_id:string
  /**
   * 用户名
   */
  user_name: string
  /**
   * 用户头像
   */
  user_avatar: string 
  /**
   * 群号
   */
  group_id: number;
  /**
   * 群名
   */
  group_name: string;
  /**
   *  群头像
   */
  group_avatar: string 
}
```

### 私聊