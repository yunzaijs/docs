#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
git init
git add .
git commit -m 'docs: 修改文档'
git push -f git@github.com:ningmengchongshui/Miao-Yunzai-Docs.git master:main