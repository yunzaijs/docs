---
sidebar_position: 5
---

# 机制

:::tip 提示

此处内容需要阅读前置章节

:::

## 观察者

> 用于观察群或某个用户，进行重复性执行或校验的行为

```ts
import { Observer, Messages } from 'yunzai'
const Word = new Messages('message.private')
Word.use(
  e => {
    // 创建
    const Obs = new Observer('message.private')

    // 推送 询问
    Obs.use(
      // e 事件  next 多个use控制  close 关闭所有use
      // 每次事件来临都出发 use ，仅当close执行时结束
      (e, next, close) => {
        if (e.msg == '/close') {
          e.reply('取消输入')
          close()
        }

        if (/^123456$/.test(e.msg)) {
          e.reply('校验成功')
          close()
        } else {
          e.reply('请输入密码')
        }

        // 继续 如果 Observer use还有的话
        next()

        // 条件，仅支持  账号和群号
      },
      [e.user_id]
    )

    // 触发提示
    e.reply('请输入密码')
  },
  [/^(#|\/)?登录账号$/]
)
```

## 记时器

> 即指定某一事件后执行的行为，基于原生的InterVal接口

```ts
import { setBotInterVal, Messages, clearBotInterVal } from 'yunzai'

let uids = []

const ID = setBotInterVal(Bot => {
  for (const uid of uids) {
    Bot.pickFriend(uid).sendMsg('消息嘎嘎')
  }
  // 每分钟执行一次
}, 60 * 1000)

const Word = new Messages('message.private')
Word.use(
  e => {
    clearBotInterVal(ID)
  },
  [/^(#|\/)?取消记时$/]
)
```

## 定时任务

> 进行更复杂的时间行为，如指定每天某点进行

```ts
import { setBotTask, Messages, clearBotTask } from 'yunzai'

let uids = []

const Job = setBotTask(Bot => {
  for (const uid of uids) {
    Bot.pickFriend(uid).sendMsg('消息嘎嘎')
  }
  // 每天12点执行
}, '0 12 * * *')

const Word = new Messages('message.private')
Word.use(
  e => {
    clearBotTask(Job)
  },
  [/^(#|\/)?取消任务$/]
)
```
