---
sidebar_position: 7
---

# 机制

:::tip 提示

此处内容需要阅读前置章节

:::

## 观察者

> 用于观察群或某个用户，进行重复性执行或校验的行为

```ts
import { Observer, Messages } from 'yunzai'
const message = new Messages('message.private')
message.use(
  e => {
    // 创建
    const Obs = new Observer('message.private')

    // 推送 询问
    Obs.use(
      // e 事件  next 多个use控制  close 关闭所有use
      // 每次事件来临都出发 use ，仅当close执行时结束
      (e, next, close) => {
        if (e.msg == '/close') {
          e.reply('close password')
          close()
        }

        if (/^123456$/.test(e.msg)) {
          e.reply('ture password')
          close()
        } else {
          e.reply('input password')
        }

        // 继续 如果 Observer use还有的话
        next()

        // 条件，仅支持  账号和群号
      },
      [e.user_id]
    )

    // 触发提示
    e.reply('input password')
  },
  // login #login /login
  [/^(#|\/)?login$/]
)
export const Word = message.ok
```

## 记时器

> 即指定某一事件后执行的行为，基于原生的InterVal接口

```ts
import { setBotInterVal, Messages, clearBotInterVal } from 'yunzai'

const Uids = []

const ID = setBotInterVal(Bot => {
  for (const user_id of Uids) {
    Bot.pickFriend(user_id).sendMsg('hello interval')
  }
  // 每分钟执行一次
}, 60 * 1000)

const message = new Messages('message.private')
message.use(
  e => {
    clearBotInterVal(ID)
  },
  // close #close /close
  [/^(#|\/)?close$/]
)
export const Word = message.ok
```

## 定时任务

> 进行更复杂的时间行为，如指定每天某点进行

```ts
import { setBotTask, Messages, clearBotTask } from 'yunzai'

const Uids = []

const Job = setBotTask(Bot => {
  for (const user_id of Uids) {
    Bot.pickFriend(user_id).sendMsg('hello task')
  }
  // 每天12点执行
}, '0 12 * * *')

const message = new Messages('message.private')
message.use(
  e => {
    clearBotTask(Job)
  },
  // close #close /close
  [/^(#|\/)?close$/]
)

export const Word = message.ok
```
