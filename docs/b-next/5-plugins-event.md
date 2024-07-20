---
sidebar_position: 5
---

# 机制

:::tip 提示

此处内容需要阅读前置章节

:::

## 消息

- 观察者

```ts 
import { Observer, Messages } from 'yunzai'

const Word = new Messages('message.private')

Word.use((e) => {
  
  e.reply('请输入密码')
  // 创建
  const O = new Observer('message.private')

  // 推送 询问
  O.use((e, next, close) => {

    if (e.msg == '/close') {
      e.reply('取消输入')
      close()
    }

    if(/^123456$/.test(e.msg)){
      e.reply('校验成功')
      close()
    }else{
      e.reply('请输入密码')
    }

    // 继续 如果 Observer use还有的话
    next()

     // 条件，仅支持  账号和群号
  }, [e.user_id])

}, [/^(#|\/)?登录账号$/])
```

## 定时


```ts
import { setBotInterVal, Observer, Messages , clearBotInterVal } from "yunzai";

let uids = []

const ID = setBotInterVal((Bot) => {
  // 定时图送主动消息
  for(const uid of uids){
    Bot.pickFriend(uid).sendMsg("消息嘎嘎");
  }
}, 60 * 1000);

const Word = new Messages("message.private");

Word.use(
  (e) => {
    clearBotInterVal(ID);
  },
  [/^(#|\/)?取消订阅$/]
);

```