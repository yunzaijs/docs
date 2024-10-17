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

> 每次提交代码前，husky 会自动执行`pre-commit`文件中的命令，检查代码格式是否符合规范。

> 如果不符合规范，则提交会被阻止并自动开始格式化代码，

> 等待格式化完成后，再次`git add .`、`git commit -m "xxx"`提交即可。
