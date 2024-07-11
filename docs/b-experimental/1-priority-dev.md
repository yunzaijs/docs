---
sidebar_position: 1
---

# 优先级

:::danger 警告

该文档是实验性的，未上线

:::

V3中的优先级是靠手动控制数字后，机器人进行排序。

在Next中，应用间不再彼此影响，其执行速度，取决于功能处理时间最长的功能。

插件间都会触发的功能，其总时间不会叠加，且互不影响。

基于以上条件，插件内部不再需要手动配置优先级数字。

- 推送顺序决定

```ts title="./index.js"
import { Events } from 'yunzai/core'
import App$1 from './message1.js'
import App$2 from './message2.js'
import App$3 from './message3.js'
import App$4 from './message4.js'
const event = new Events()
event.use(App$1.ok)
event.use(App$2.ok)
event.use(App$3.ok)
event.use(App$4.ok)
export const apps = event.ok
```

在上面的例子中，App$1-$4被顺序推送。

因此其排序的顺序是[$1,$2,$2,$3]

以下更改了顺序

```ts title="./index.js"
import { Events } from 'yunzai/core'
import App$1 from './message1.js'
import App$2 from './message2.js'
import App$3 from './message3.js'
const event = new Events()
event.use(App$3.ok)
event.use(App$1.ok)
event.use(App$2.ok)
export const apps = event.ok
```

可以发现，$3优先被推送，因此其顺序为[$3,$1,$2]

- 定义顺序决定

```ts title="./message.ts"
import { Messages } from 'yunzai/core'
const message = new Messages();
message.response(/^(#|\/)?你好/, async e => {
    e.reply('你好')
})
message.response(/^(#|\/)?你好呀/, async e => {
    e.reply('你好呀')
})
export default message
```

在上面的例子中，消息`你好呀`将触发两个匹配，因为`/^(#|\/)?你好/`也能匹配`你好`开头的消息，

当两个功能都被触发时，其指令顺序为[`/^(#|\/)?你好/`,`/^(#|\/)?你好呀/`]

注意，此时可能会有疑惑，如果是两个`Messages`呢？

根据前面的规则所推断，其前一个`Messsage`内的所有指令，都将比后一个`Message`内的所有指令优先级高

- 元素顺序决定

```ts title="./message.ts"
export default class App extends plugin {
  constructor () {
    // super是必须的
    super()
    // 定义匹配
    this.rule = [
        {
          reg:/^(#|\/)?你好/,
          fnc: this.word1.name
        }, 
        {
          reg:/^(#|\/)?你好呀/,
          fnc: this.word2.name
        }
      ]
  }
  async word1 () {
    this.e.reply('word1')
  }
  async word2(){
    this.e.reply('word2')
  }
}
```

上面的代码中，其执行顺序为[`word1`,`word2`]

显然，其执行顺序就是元素所决定。

看到这里，应该能理解，机器人不会再对指令的顺序做性能上的消耗，

其指令顺序将按照js的解析规则走

这很好理解，也不再用配置繁琐的优先级