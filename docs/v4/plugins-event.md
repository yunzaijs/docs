---
sidebar_position: 5
---

# 机制

:::tip 提示

此处内容需要阅读前置章节

:::


- 上下文

```ts
export default class App extends plugin {
  constructor () {
    // super是必须的
    super()
    // 定义匹配
    this.rule = [
        {
          reg:/^(#|\/)?登录账号$/,
          fnc: this.userLogin.name
        },
      ]
  }
  async userLogin () {
    this.e.reply('请输入密码')
    this.setContext(this.vPassword.name)
    return true
  }
  async vPassword(){
    if(/^123456$/.test(this.e.msg)){
      this.finish(this.vPassword.name)
    }else{
      this.e.reply('请输入密码')
    }
    return true
  }
}
```