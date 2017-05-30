#
yarn init --yes
yarn global add gulp-cli
yarn add gulpjs/gulp#4.0 --dev

yarn add gulp-sass --dev
yarn add gulp-notify --dev
yarn add gulp-plumber --dev
yarn add gulp-connect --dev
yarn add del --dev

yarn add gulp-slim --dev
yarn add gulp-coffee --dev

yarn add babel-cli babel-preset-env --dev

touch ./{gulpfile.babel.js,.babelrc,.gitignore,README.md}

echo '{ "presets": ["env"] }' > .babelrc
echo 'node_modules' > .gitignore
echo 'app' >> .gitignore

git init
git add .
git commit -am 'First'

git remote add origin https://github.com/boggddan/empty.git
git push --set-upstream origin master

# Что нужно сделать
git clone 