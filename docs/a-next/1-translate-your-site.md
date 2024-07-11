---
sidebar_position: 1
---

# 安装

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 使用者提示

Next会保持对V3的支持，但不保留对V2的支持，因此，V3内的所有V2写法都将在新版中失效。

:::


<Tabs>
  <TabItem value="q" label="Windows" default>
  
推荐系统 Windows10 | Windows11 

> 其他windows版本请安装 [Google Chrome](https://www.google.cn/intl/zh-CN/chrome/) / [Edge](https://www.microsoft.com/zh-cn/edge)

必要数据库 [Redis-x64-5.0.14.1.msi](https://github.com/tporadowski/redis/releases)

必要环境 [Node.js@18.20.3](https://nodejs.org/zh-cn)

> 推荐使用[nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases)对Node.js进行版本切换

> Node.js 版本必须大于16.14.0且双数版本

必要工具 [Git Download for Windows](https://git-scm.com/)

> git必须全部点击默认next，其他地址可能会造成git损坏

  </TabItem>
  <TabItem value="2" label="MacOS">

推荐系统 MacOS12 | MacOS14

> 非最新的系统不保证其成功性

必要工具 Git 一般 MacOS 自带

```bash
git --version # 校验git版本，未安装会提示下载常用工具包
```

必要数据库 [Redis-7.4.2](https://redis.io/downloads/)

> 需要进行编译，请自行翻阅相关文章

必要工具 [brew](https://brew.sh/)

```bash
# 下载
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

```bash
# 添加环境环境
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.bash_profile
```
```bash
# 添加环境环境
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
```

```bash
# 刷新环境
source ~/.bash_profile && source ~/.zshrc
```

必要工具 npm

```bash
# 安装
brew install nvm
```

```bash
# 添加环境
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bash_profile
# This loads nvm
echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.bash_profile
# This loads nvm bash_completion
echo '[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"' >> ~/.bash_profile
```

```bash
# 添加环境
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
# This loads nvm
echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zshrc
# This loads nvm bash_completion
echo '[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"' >> ~/.zshrc
```

```bash
# 刷新环境
source ~/.bash_profile && source ~/.zshrc
```

必要环境 Node.js@18.20.3
```bash
# 安装
nvm install 18.20.3
# 使用
nvm use 18.20.3
# 校验版本
node -v
npm -v
```

  </TabItem>
  <TabItem value="3" label="Centos X86">

> 必要环境  Chromium

> 推荐环境 Node.js ~ 18.18.2 + Redis ~ 6.0.0

> 推荐使用NVM对Node.js进行版本管理

  </TabItem>
  <TabItem value="4" label="Ubuntu X86">

> 必要环境  Chromium

> 推荐环境 Node.js ~ 18.18.2 + Redis ~ 6.0.0

> 推荐使用NVM对Node.js进行版本管理

  </TabItem>
</Tabs>

出现意外？阅读[常见问题](../x-other/3-common-problem.md)

- 安装源码

```sh 
git clone --depth=1 https://github.com/yunzai-org/yunzaijs.git
```

- 进入目录

```sh
cd yunzaijs
```

- 安装依赖

<Tabs>
  <TabItem value="pnpm" label="pnpm">

```sh
# 国内镜像，已安装可忽视
npm config set registry https://registry.npmmirror.com
```

```sh
# 已安装可忽视
npm install pnpm -g
# 加载
pnpm install
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```sh
# 国内镜像，已安装可忽视
npm config set registry https://registry.npmmirror.com
```

```sh
# yarn 不能使用2.x版本，它无法使用link
npm install yarn@1.12.1 -g
# 加载
yarn
```

  </TabItem>
</Tabs>



- 启动

```sh
npm run app
```

- 重新登录

```sh
npm run login
```

- 进程托管

```sh
npm run start
```

- 杀死进程

```sh
npm run kill
```

> 更多内容，请阅读 [PM2](https://pm2.keymetrics.io/) 使用文档