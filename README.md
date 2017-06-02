## Создание нового нового проекта


* *Инициализация проекта*
```bash
yarn init --yes
```

* *Gulp*
```bash
yarn global add gulp-cli
yarn add gulpjs/gulp#4.0 --dev

yarn add gulp-sass --dev
yarn add gulp-notify --dev
yarn add gulp-plumber --dev
yarn add gulp-connect --dev
yarn add del --dev

yarn add gulp-slim --dev
yarn add gulp-coffee --dev
```

* *Babel*
```bash
yarn add babel-cli babel-preset-env --dev
```

* *Добавление файлов для работы с **Gulp**, **Babel** и **Git***
```bash
touch ./{gulpfile.babel.js,.babelrc,.gitignore,README.md}

echo '{ "presets": ["env"] }' > .babelrc
echo 'node_modules' > .gitignore
echo 'app' >> .gitignore
```

* *Git*
```bash
git init
git add .
git commit -am 'First'

git remote add origin https://github.com/boggddan/empty.git
git push --set-upstream origin master
```

## Добавление проекта

#### 1. *Скачиваем проект с **Git** в текущую папку*
```bash
git clone https://github.com/boggddan/empty.git
```

#### 2. Переходим в папку
```bash
cd empty
```

#### 3. *Запускаем **Yarn** для добавления всех*
```bash
yarn install
```

#### 4. *Запускаем **Gulp** для выполения задач*
```bash
gulp
```

#### 5. *Let's go! :octocat:*