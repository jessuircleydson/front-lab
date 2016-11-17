# Bower

##Para instala
> npm install -g bower

##Agora va no seu repositório e inicie o bower com:
> bower init
*Isso criará o arquivo bower.json onde será salvo as referências de libs que você for usando*

##Para instalar uma lib você pode:
> bower search nome_da_lib_aqui
*usar bower search para procurar a lib que quer usar*
###E ao achar sua lib, para instalar basta apenas:
> bower install nome_da_lib_aqui --save ou bower install url_do_repositório --save

**A flag _--save_ serve para dizer que você quer gravar a referência dessa lib no arquivo _bower.json_ **
**Posteriormente em outro projeto você basta apenas copiar o _bower.json_ e na pasta onde ele estiver usar o comando _bower install_ que instalará todas as libs referenciadas no arquivo _bower.json_**

