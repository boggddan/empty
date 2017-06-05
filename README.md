## Создание нового нового проекта


* *Инициализация проекта [**Yarn**](https://yarnpkg.com/lang/en/)*

```bash
yarn init --yes
```

* [*Gulp*](http://gulpjs.com/)

```bash
yarn global add gulp-cli
yarn add gulpjs/gulp#4.0 --dev

yarn add gulp-sass --dev
yarn add gulp-notify --dev
yarn add gulp-plumber --dev
yarn add gulp-connect --dev
yarn add del --dev
yarn add gulp-concat --dev

yarn add gulp-slim --dev
yarn add gulp-coffee --dev
```

* [*Babel*](https://babeljs.io/)

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

* Библиотеки для JS
  1. [*JQuery*](https://jquery.com/)

  ```bash
  yarn add jquery
  ```

  2. [*Moment.js*](https://momentjs.com/)

  ```bash
  yarn add moment
  ```

* [*Git*](https://git-scm.com/)

```bash
git init
git add .
git commit -am 'First'

git remote add origin https://github.com/boggddan/empty.git
git push --set-upstream origin master
```

## Добавление проекта

#### 1. *Скачиваем проект с [**GitHub**](https://github.com/boggddan/empty) в текущую папку*

```bash
git clone https://github.com/boggddan/empty.git
```

#### 2. *Переходим в папку с проектом*

```bash
cd empty
```

#### 3. *Запускаем [**Yarn**](https://yarnpkg.com/lang/en/) для добавления всех*

```bash
yarn install
```

#### 4. *Запускаем [**Gulp**](http://gulpjs.com/) для выполения задач*

```bash
gulp
```

#### 5. *Let's go! :octocat:*