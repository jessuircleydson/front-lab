# Npm

##Para instalar
[nodejs.org](https://nodejs.org/en/download/package-manager/)

*Aqui encontrei as maneiras mais fáceis de instalar o Node e Npm em vários sistemas.*
*No site do [NPM](https://docs.npmjs.com/getting-started/installing-node) também mostram como instalar de outra forma*

##Para iniciar vá até a pasta do projeto e rode o comando:
> npm init

##Em seguida ele pedirá para vc preencher algo assim:

```json
{
  "name": "html",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

*Você verá que foi criado um arquivo ``package.json`` com o que foi preenchido*


##Para instalar um pacote bastar rodar o comando:
> npm install nome_do_pacote --save

**No site da [NPM](https://www.npmjs.com/) você consegue pesquisar por pacotes e ele mostra como você pode instala-los**
