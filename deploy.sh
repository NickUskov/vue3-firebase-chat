set -e

npm run build

cd dist

git init
git add -A
git commit -m 'v0.2.5'

git push -f git@github.com:NickUskov/vue3-firebase-chat.git master:gh-pages

cd -