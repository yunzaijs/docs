---
sidebar_position: 2
---

# 插件开发

## 创建您的第一个应用

```jsx
// plugin 是全局的
export class Word extends plugin {
  constructor () {
    super({
      name: '应用名',
      dsc: '说明',
      event: 'message',
      priority: 700,
      rule: [
        {
          reg:/^(#|\/)?你好/,
          fnc: 'hello'
        },
      ]
    })
  }
  async hello () {
    await this.e.reply('你好')
    return true
  }
}
```

## 发送特殊消息

```jsx 
export class Word extends plugin {
  constructor () {
    super({
      name: '应用名',
      dsc: '说明',
      event: 'message',
      priority: 700,
      rule: [
        {
          reg:/^(#|\/)?你好/,
          fnc: 'hello'
        },
      ]
    })
  }
  async hello () {
    // segment 是全局的
    const img: Buffer = null
    await this.e.reply(segment.buffer(img))
    return true
  }
}
```
