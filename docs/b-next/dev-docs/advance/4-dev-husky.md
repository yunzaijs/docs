---
sidebar_position: 4
---

# husky

:::tip husky

[husky](https://github.com/typicode/husky) 是一个 git 钩子工具，它可以帮助我们在提交代码前或提交代码后，自动执行一些脚本，比如格式化代码、eslint 检查、单元测试等。

YunzaiJS 默认统一使用 husky 进行代码检查

:::

### 安装

```sh title="安装husky"
yarn add husky -D
```

```sh title="安装prettier"
yarn add prettier -D
```

### 配置

- `./package.json`

```json
{
  "scripts": {
    "format": "prettier --write .", //格式化代码
    "check-format": "git diff --exit-code", //检查代码格式
    "prepare": "husky" //自动安装husky
  }
}
```

- 创建钩子文件`./.husky/pre-commit`

```sh
# 格式化代码
npm run format

# 检查一致性
npm run check-format
```

- `./.prettierignore`

```yaml title=".prettierignore"
# 配置文件，用于定义 Prettier 的格式化时忽略的文件和目录
# 请根据项目实际情况修改

# Node dependencies
node_modules

# yunzaib dev/config
config/**/*
data/**/*
temp/**/*

# app
example.js
apps.js

# Logs
logs
*.log

*.md
```

- `./.prettierrc.json`

```json title=".prettierrc.json"
// 配置文件，用于定义 Prettier 的格式化规则
{
  "$schema": "https://json.schemastore.org/prettierrc", // 指定 JSON Schema 的位置
  "semi": true, // 是否在语句末尾添加分号
  "tabWidth": 2, // 设置缩进的空格数
  "singleQuote": true, // 使用单引号而不是双引号
  "printWidth": 160, // 一行的最大字符数
  "trailingComma": "none", // 是否在多行结构的最后一行添加逗号
  "useTabs": false, // 是否使用制表符代替空格
  "proseWrap": "preserve", // 保持 Markdown 文本的换行处理
  "arrowParens": "avoid", // 在只有一个参数的箭头函数中省略括号
  "bracketSpacing": true, // 对对象字面量中的大括号内添加空格
  "endOfLine": "auto", // 根据操作系统自动处理行尾符号
  "quoteProps": "consistent", // 确保对象属性的引号使用一致
  "vueIndentScriptAndStyle": true // 在 Vue 文件中缩进 script 和 style 标签内容
}
```

> 每次提交代码前，husky 会自动执行`pre-commit`文件中的命令，检查代码格式是否符合规范。

> 如果不符合规范，则提交会被阻止并自动开始格式化代码，

> 等待格式化完成后，再次`git add .`、`git commit -m "xxx"`提交即可。
