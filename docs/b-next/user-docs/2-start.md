---
sidebar_position: 1
---

# 使用

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 使用者提示

运行并控制机器人

:::

## 一、运行

```sh title="启动"
yarn run app
```

```sh title="重新登录"
yarn run app --relogin
```

```sh title="进程托管"
yarn run start
```

```sh title="杀死进程"
yarn run kill
```

> 更多内容，请阅读 [PM2](https://pm2.keymetrics.io/) 使用文档

## 二 、拓展模块的安装及配置

[拓展模块库](/docs/docs/category/module-shop)

:::tip YunzaiJS 支持模块化拓展功能

可对YunzaiJS进行安装扩展模块并配置，
丰富机器人功能、增强机器人体验

:::

模块配置文件字段说明：

- `applications`：应用列表，所有启用的模块应用在此字段处配置（可以浅理解为`插件`）
- `middlewares`：中间件列表，所有启用的中间件模块在此字段处配置 （特殊处理模块）

:::caution 中间件处理模块会对全部`applications`生效
:::

用户侧配置文件详解：

### 应用及中间件配置

最新版本支持 js 和 json 格式的模块配置文件，推荐使用json格式的配置文件，选择其中一个即可：

1. **yunzai.config.js**：

配置文件路径： `bot/yunzai.config.js`

不推荐未掌握js便修改此文件，

请注意如果使用了此配置文件，在`移除`模块时需要修改此文件删除对应模块的配置

```ts title="yunzai.config.js"
import { defineConfig } from 'yunzaijs'
export default defineConfig({
  applications: ['@yunzaijs/system'], // 所有模块应用
  middlewares: ['@yunzaijs/mys/runtime', '@yunzaijs/mw'] // 所有中间件
})
```

2. **yunzai.config.json**：

配置文件路径： `bot/yunzai.config.json`

使用json格式的配置文件需要`手动创建`，

请注意`移除`模块时需要修改此文件删除对应模块的配置

```json title="yunzai.config.json"
{
  "applications": ["@yunzaijs/system"],
  "middlewares": ["@yunzaijs/mys/runtime", "@yunzaijs/mys/mw"]
}
```

### 安装及配置演示

如下为 `修仙` 模块（插件）的安装及配置演示：

1. 安装 `yz-xiuxian` 模块

```sh
yarn add yz-xiuxian -W
```

2. 创建yunzai.config.json文件并写入以下内容

```json title="yunzai.config.json"
{
  "applications": ["yz-xiuxian"]
}
```

3. 其他讲解

> 可以理解为，V3是自动档，Next是手动挡

- Yunzai-V3

1. V3的逻辑是遍历plugins目录下所有js文件或子目录下的index.js文件，通过加载入口文件，将插件注册到机器人中。

2. 通过git工具对代码进行管理

3. 需要手动进行依赖安装，同时确保该插件的`package.json`文件中有标注依赖，若依赖缺失，则需要手动添加缺失的依赖（可根据终端的报错日志提示进行安装），否则无法正常进行后续操作。

- YunzaiJS

1. 使用了node模块化设计，通过默认的 包管理器`yarn` 对模块进行版本管理

2. 可以随时通过指令切换任意稳定版本

```sh title="版本切换示例"
# 最初版
yarn add yz-xiuxian@1.0.0 -W
# 最新版
yarn add yz-xiuxian@latest
# 指定版本x.x.x
yarn add yz-xiuxian@x.x.x -W
```

3. 一般情况下，无需修改yunzai.config.json文件。

> 除非对该模块进行了删除，那就必须修改 `yunzai-bot/yunzai.config.json` 确保不再加载该模块，
> 在模块安装的那一刻 [Yarn - JavaScript 软件包管理器](https://www.yarnpkg.cn/) 就已经接管并自动管理该模块和它的依赖，除非开发者发布模块时，关联的其他依赖配置不全，才需要手动添加。

```sh title="删除yu-xiuxian模块示例"
yarn remove yz-xiuxian
```

## 三 、Yunzai-V3 插件的安装

仅 [BOT PE](https://github.com/yunzaijs/yunzai-bot) 配置了 `V3` 插件的兼容。

### 克隆插件

进入插件库，找到需要的且能使用的插件，按照插件的说明仅仅克隆下载插件：[Yunzai-Bot V3 插件仓库](https://github.com/yhArcadia/Yunzai-Bot-plugins-index)

### 安装依赖

进入`bot`目录，执行 `yarn` 命令安装依赖即可。无需使用对应插件说明的 `pnpm install` 或 `pnpm i` 命令。

### 喵喵插件和genshin插件的支持

> 当前仅有喵崽环境支持几乎所有的米游类插件

> 需要此环境的bot务必执行补丁脚本并安装原神和喵喵插件

如需使用 genshin插件 和 miao-plugin，可使用以下方式安装：

bot根目录执行：

- 执行补丁

```sh
node lib/miao-yunzai.js
```

- 安装喵喵插件

```sh
git clone --depth=1 https://github.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
```

```sh
# or
git clone --depth=1 https://gitee.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
```

- 安装原神插件

```sh
git clone --depth=1 -b deploy https://github.com/yunzaijs/genshin.git ./plugins/genshin/
```

```sh
# or
git clone --depth=1 -b deploy https://gitee.com/yunzaijs/genshin.git ./plugins/genshin/
```

- 如果不需要使用，可执行去除环境命令

```sh
node lib/miao-yunzai.js --delete
```
