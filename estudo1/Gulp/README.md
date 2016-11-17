# Gulp

## Para instalar
> npm install --global gulp-cli

## Agora va na pasta do seu projeto e dentro dela inicie o npm
> npm init

## Então instale o Gulp em seu projeto
> npm install --save-dev gulp

## Crie o arquivo gulpfile.js dentro do seu projeto
*É nesse aquivo que você configura suas tasks*

```javascript
var gulp = require('gulp');

gulp.task('default', function() {
  // aqui vai o código que sua task executará
});
```

## Va até sua pasta pelo terminal, e execute o comando abaixo para rodar o gulp
> gulp

**A task chamada 'default' que você criou será executada**
