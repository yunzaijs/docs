---
sidebar_position: 1
---

# 安装

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip 使用者提示

Next用户可阅读此文档进行体验，请阅读下一章的后续教程

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

<TabItem value="3" label="Ubuntu/Debian">

> 示例系统 Ubuntu 24.04 LTS / Debian 12.0 X86 2H2G

- 确保apt包是最新的

```sh
sudo apt update
sudo apt install wget -y
sudo apt install curl -y
```

- 安装NVM

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

- 添加NVM环境环境

`~/.bashrc`

```sh
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
source ~/.bashrc # 刷新环境
nvm -v # 版本
```

- 安装 Node.js@18.20.3

```bash
# 安装
nvm install 18.20.3
# 使用
nvm use 18.20.3
# 校验版本
node -v
npm -v
```

- 安装git

```sh
apt install git
```

- 安装redis

```sh
apt install build-essential tcl -y
# 进入目录包目录
cd /usr/local
# 下载
wget  "http://download.redis.io/releases/redis-6.2.13.tar.gz"
# 解压
tar zxvf "redis-6.2.13.tar.gz"
# 进入redis目录
cd redis-6.2.13
# 编译
make
make install
# 启动
./src/redis-server --daemonize yes
```

- 安装chromium

```sh
sudo apt install chromium-browser
```

  </TabItem>

  <TabItem value="4" label="Centos">

> 示例系统 Centos 7.9 X86 2H2G

- 确保yum包是最新的

```sh
sudo yum update -y
sudo yum install wget -y
sudo yum install curl -y
```

- 安装NVM

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

- 添加NVM环境环境

`~/.bashrc`

```sh
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
source ~/.bashrc # 刷新环境
nvm -v # 版本
```

- 安装 Node.js@16.14.0

> Centos8以下无法使用官方源的Node V18

```bash
# 安装
nvm install 16.14.0
# 使用
nvm use 16.14.0
# 校验版本
node -v
npm -v
```

- 安装git

```sh
yum install git
```

- 安装redis

```sh
# 进入目录包目录
cd /usr/local
# 下载
wget  "http://download.redis.io/releases/redis-6.2.13.tar.gz"
# 解压
tar zxvf "redis-6.2.13.tar.gz"
# 进入redis目录
cd redis-6.2.13
# 编译
make
make install
# 启动
./src/redis-server --daemonize yes
```

- 安装 Chromium

```sh
yum  install chromium -y
```

</TabItem>

</Tabs>

出现意外？阅读[常见问题](../x-other/3-common-problem.md)

- 安装源码

> 请在合适目录中执行，确保具有合理的权限

```sh
git clone --depth=1 https://github.com/yunzai-org/yunzaijs.git
```

- 进入目录

```sh
cd yunzaijs
```

- 安装依赖

```sh
# 国内镜像，已安装可忽视
npm config set registry https://registry.npmmirror.com
```

> 不推荐npm、pnpm、cnpm等

```sh
# yarn 不能使用2.x版本，它无法使用link
npm install yarn@1.19.1 -g
```

<Tabs>
  <TabItem value="16" label="node>=18" default>

> 如果 node < 18 需要加参数 `--ignore-engines`

```sh
yarn
```

  </TabItem>
  <TabItem value="18" label="node<18" default>

```sh
yarn --ignore-engines
```

  </TabItem>
</Tabs>

<Tabs>
  <TabItem value="正式环境" label="正式环境">

- 编译

```sh
yarn build
```

- 启动

```sh
yarn app
```

- 重新登录

```sh
yarn login
```

- 进程托管

```sh
yarn start
```

- 杀死进程

```sh
yarn kill
```

> 更多内容，请阅读 [PM2](https://pm2.keymetrics.io/) 使用文档

</TabItem>
<TabItem value="测试环境" label="测试环境">

- 启动

```sh
yarn test
```

- 重新登录

```sh
yarn test login
```

  </TabItem>
</Tabs>
