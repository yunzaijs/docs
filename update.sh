#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'add'

git push -f git@github.com:ningmengchongshui/Miao-Yunzai-Docs.git master:main