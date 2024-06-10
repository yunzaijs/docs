---
sidebar_position: 2
---

# 插件开发


需要了解js class 继承

## 创建您的第一个应用


```jsx
import plugin from '../../../lib/plugins/plugin.js'
export class Word extends plugin {
  constructor () {
    super({
      name: '应用名',
      dsc: '说明',
      event: 'message',
      priority: 700,
      rule: [
        {
          reg:/^你好/,
          fnc: 'hello'
        },
      ]
    })
  }
  async hello (e) {
    await e.reply('你好')
    return true
  }
}
```
