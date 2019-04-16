#!/usr/bin/env sh

npm run docs:build
​
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:idev365-team/zsxq-font-end.git master

cd -