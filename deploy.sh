#!/usr/bin/env sh

set -e
npm install
npm run build
cd build/
git init
git add -A
git commit -m 'add'
git push -f git@github.com:ningmengchongshui/Miao-Yunzai-Docs.git master:docs