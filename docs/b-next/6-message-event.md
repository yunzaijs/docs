---
sidebar_position: 6
---

# 事件

:::tip 提示

Yunzai 基于 Icqq的事件进行扩展，部分类型可能未进行补充，会有类型爆红

:::

## 群聊

```ts
export interface EventType {
  isMaster: boolean // 是否是主人
  isGroup: boolean // 是否是群里
  isPrivate?: boolean // 是私聊
  isGuild?: boolean // 是频道
  msg: string // 用户消息
  user_id: string // 用户编号
  user_name: string // 用户名
  user_avatar: string // 用户头像
  group_id: number // 群号
  group_name: string // 群名
  group_avatar: string // 群头像
}
```

### 回复

```ts
import { Messages } from 'yunzai'
const message = new Messages('message.group')
message.use(
  e => {
    e.reply('hello word')
  },
  // hello #hello /hello
  [/^(#|\/)?hello/]
)
export const Word = message.ok
```

### 图片

```ts
import { Messages, Segment } from 'yunzai'
const message = new Messages('message.group')
message.use(
  e => {
    const img: Buffer | null = null
    e.reply(Segment.image(img))
  },
  // hello #hello /hello
  [/^(#|\/)?hello/]
)
export const Word = message.ok
```

#######复合

```ts
import { Messages, Segment } from 'yunzai'
const message = new Messages('message.group')
message.use(
  e => {
    const img: Buffer | null = null
    e.reply(['这是一张图片', Segment.image(img)])
  },
  // hello #hello /hello
  [/^(#|\/)?hello/]
)
export const Word = message.ok
```

### 转发

```ts
import { Messages, Segment, makeForwardMsg } from 'yunzai'
const message = new Messages('message.group')
message.use(
  async e => {
    const Message = await makeForwardMsg(this.e, ['hello', 'word'], 'this is makeForwardMsg')
    e.reply(Message)
  },
  // hello #hello /hello
  [/^(#|\/)?hello/]
)
export const Word = message.ok
```

### 转私聊

```ts
import { Messages, Bot } from 'yunzai'
const message = new Messages('message.group')
message.ues(
  e => {
    const UID = e.user_id
    // 存在好友
    const friend = Bot.fl.get(UID)
    if (friend) {
      Bot.pickUser(UID).sendMsg('hell word')
    } else {
      e.reply('hello word')
    }
  },
  // hello #hello /hello
  [/^(#|\/)?hello/]
)
export const Word = message.ok
```

## 私聊

```ts
export interface EventType {
  isMaster: boolean // 是否是主人
  isGroup: boolean // 是否是群里
  isPrivate?: boolean // 是私聊
  isGuild?: boolean // 是频道
  msg: string // 用户消息
  user_id: string // 用户编号
  user_name: string // 用户名
  user_avatar: string // 用户头像
}
```

### 回复

```ts
import { Messages } from 'yunzai'
const message = new Messages('message.private')
message.ues(
  e => {
    e.reply('hello word')
  },
  // hello #hello /hello
  [/^(#|\/)?hello/]
)
export const Word = message.ok
```

### 复合

```ts
import { Messages, Segment } from 'yunzai'
const message = new Messages('message.private')
message.use(
  e => {
    const img: Buffer | null = null
    e.reply(['这是一张图片', Segment.image(img)])
  },
  // hello #hello /hello
  [/^(#|\/)?hello/]
)
export const Word = message.ok
```
