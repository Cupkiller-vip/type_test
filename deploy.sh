set -e

pnpm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Cupkiller-vip/type_test.git master:gh-pages

cd -