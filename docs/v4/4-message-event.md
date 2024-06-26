---
sidebar_position: 4
---

# 事件

:::tip 提示

此处内容需要阅读前置章节

:::

## 调用


- 回复

```ts
const callBack = (e) =>{
  e.reply('你好')
}
```

- 图片

```ts
const callBack = (e) =>{
  const img : Buffer | null = null
  e.reply(Segment.image(img))
}
```

- 复合


```ts
const callBack = (e) =>{
  const img : Buffer | null = null
  e.reply(['这是一张图片', Segment.image(img)])
}
```

## 字段

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