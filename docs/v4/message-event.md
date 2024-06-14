---
sidebar_position: 4
---

# 事件

:::tip 提示

此处内容需要阅读前置章节

:::


- 回复

```ts
const callBack = (e) =>{
  e.reply('你好')
}
```

- 图片

```ts
const callBack = (e) =>{
  e.reply(Segment.image(img))
}
```

- 复合


```ts
const callBack = (e) =>{
  e.reply(['这是一张图片', Segment.image(img)])
}
```


- 主人

```ts
const callBack = (e) =>{
  if(!e.isMaster) return 
  e.reply('是主人')
}
```

- 编号

```ts
const callBack = (e) =>{
  e.reply(`你的编号为${e.user_id}`)
}

```