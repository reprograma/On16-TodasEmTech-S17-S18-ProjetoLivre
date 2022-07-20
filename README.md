# Projeto Final - S17 e 18 <br> 

🎵  oooooh aonde nós chegooou! valeu a pena esperaaaar! 🎵 <br> <br>

![tais araujo comemorando](https://media.giphy.com/media/5Tfe4Tlizrc07bsSCj/giphy.gif) <br> <br>

Depois de tanta coisa, finalmente chegamos nos momentos finais, ansiedade tá a mil, né minha filha?! 

Mas ainda precisamos internalizar algumas coisinhas pra aí sim ter nosso projetinho final 100% dentro dos conformes. <br>

Bora descobrir quais sao essas coisinhas? <br> <br> Vale lembrar que o material aqui do readme é um complemento do material do nosso [slide](https://github.com/reprograma/On16-TodasEmTech-S17-S18-ProjetoLivre/blob/main/material/PROJETO-FINAL.pdf)

### * Documentaçao & Swagger

Bora documentar? <br> <br>

![nazare entrando em colapso](https://media.giphy.com/media/8rtbZnQ5yH2XtKHB3q/giphy.gif)

Segue esse passo a passo q eh sucesso:

1. Abro meu projeto

2. Abro o terminal na raiz do projeto

3. Executo os seguintes comandos:
```
     $ npm i swagger-autogen swagger-ui-express (isso fará a instalacao do swagger autogen no nosso projeto)
     $ touch swagger.js (isso fará com que um arquivo swagger seja criado no nosso projeto)
     $ mkdir swagger/  (isso fará com que uma pasta swagger seja criada no nosso projeto)
```

4. Depois da criação da pasta, vamos no arquivo swagger.js e adicionamos esse pedaço de código: <br>

```
     const swaggerAutogen = require('swagger-autogen')();
     const outputFile = './swagger/swagger_output.json';
     const endpointsFiles = ['./src/app.js'];
     swaggerAutogen(outputFile, endpointsFiles);
```
5. Iremos lá no nosso package.json e faremos a seguinte alteraçao:
```
  "script”: {
   "start": "nodemon server.js",
   "swagger-autogen": "node swagger.js",
 }
 ```

6. Em seguida digitaremos o seguinte comando la no terminal:

`npm run swagger-autogen`

Note que foi criado um arquivo chamado _swagger_output.json_ dentro da nossa pasta swagger. <br>

Parabéns, vc ja tem sua documentação!!!! <br>

Bora deixar nossa documentaçao mais visual? <br>

7. Vamos lá no nosso app.js e adicionaremos o seguinte código: <br>

``` 
    const swaggerUi = require('swagger-ui-express');

    const swaggerFile = require('../swagger/swagger_output.json');

    app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
```

8. Em seguida, inicializaremos nosso projeto, é so digitar no terminal: <br>

```$ npm start```

9. Feito isso, acessaremos a nossa rota  <br>

```localhost:3000/minha-rota-de-documentacao``` <br>

PS: Estou usando a porta 3000, caso vc esteja usando alguma diferente, use ela, beleza? <br> <br>


### * Deploy & Heroku

Bora deployar? <br>


#### Antes de tudo, precisamos realizar algumas mudanças no seu projeto <br>

Primeiramente, precisamos criar um arquivo chamado _Procfile_. 

O heroku espera que esse arquivo esteja na raiz do seu projeto, onde fica o server.js, package.json e package-lock.json. <br>
Então, vamos abrir o terminal na raiz do nosso projeto e digitar o seguinte comando:

     `touch Procfile`

O Procfile é que vai guiar os primeiros comandos para rodar seu projeto. <br>
![img](https://raw.githubusercontent.com/reprograma/On16-TodasEmTech-S17-S18-ProjetoLivre/main/material/procfile.png) <br>

Dentro desse arquivo vamos digitar:

 `web: npm install && node server.js` <br>
 
 ![img](https://raw.githubusercontent.com/reprograma/On16-TodasEmTech-S17-S18-ProjetoLivre/main/material/procfileinside.png) <br>

Beleza, May! E agora? <br>

Fez todos os passos anteriores? Seu código ta sem erro?
Vamo deployar pra ver se ta tudo ok? 

Primeiro, você vai precisar subir as alterações feitas no seu projeto:
```
          git add .
         (pra adicionar os arquivos alterados)
          git commit -m 'meu commit'
         (pra commitar os arquivos alterados)
          git push origin minha-branch
         (pra subir pro repositorio os arquivos alterados)
```
 
Feito isso, vamos conhecer nosso amigo Heroku! <br>

![vamo faze oq](https://media.giphy.com/media/TidHfACqQif3q/giphy.gif) <br>


1. Iremos conectar nosso repositório com o heroku, para isso precisaremos criar uma conta no [heroku](https://www.heroku.com),
e criar o primeiro app clicando no botão _"new"_.

2. Coloque o nome do seu projeto e escolha a região em que o seu projeto ficará, pode escolher os EUA ou Europa, não faz diferença nesse caso. <br>
![imagem](https://raw.githubusercontent.com/analuizasampaio/on12-s18-deploy-projeto-final/main/imagens_tutorial/Untitled%202.png)

3. Na area de deploy conecte-se à sua conta no Github como método de deployment.

4. Em seguida, encontre o github do projeto que você deseja dar deploy, e entao escolha qual branch deseja dar deploy.
![imagem](https://raw.githubusercontent.com/reprograma/On16-TodasEmTech-S17-S18-ProjetoLivre/main/material/reponame.png)


#### Conectando o Cluster com o projeto no Heroku

Agora, lá na aba Settings, vamos adicionar as variáveis de ambiente necessárias para o projeto. <br>
Em Settings vamos para a área de Config Vars <br>

Vamos criar as variáveis de ambiente do projeto, em Config Vars clicamos em Reveal Config Vars. 
Teremos então o campo de KEY (chave) e o campo de VALUE (valor), nele colocaremos a chave e o valor criado por nós no arquivo de configuração do banco de dados do seu projeto a MONGODB_URI <br>
![alt](https://raw.githubusercontent.com/reprograma/On16-TodasEmTech-S17-S18-ProjetoLivre/main/material/configvar.png) <br>
Depois de adicionar o nome da variável e o valor clicamos em add
Se você tem outras variáveis de ambiente no seu .env, como o SECRET, PORT ou qualquer outra que seu projeto dependa pra funcionar você também deve fazer esse processo de adicionar nas config vars as chaves e os valores correspondentes. <br>


Depois disso, voltaremos acessaremos a aba de Deploy novamente. Seguiremos para Manual Deploy(fica la no final da pagina), selecionaremos a branch e entao clicaremos em Deploy Branch <br>
![alt](https://raw.githubusercontent.com/analuizasampaio/on12-s18-deploy-projeto-final/main/imagens_tutorial/Untitled%207.png) <br>

Em seguida, um terminalzinho aparecerá para você. <br>
![alt](https://github.com/analuizasampaio/on12-s18-deploy-projeto-final/raw/main/imagens_tutorial/Untitled%208.png) <br>
Mas logo ele vai ficar todo verdinho <br> ![alt](https://github.com/analuizasampaio/on12-s18-deploy-projeto-final/raw/main/imagens_tutorial/Untitled%209.png) <br> e você pode clicar em View, para abrir sua linda api. <br>

### Dicas da May
1. Ative o deploy automático para que toda vez que vc der push nessa branch as modificações automaticamente sejam atualizadas

2. Lembre-se de conferir se na aba de 'Settings' tem 'Node.js' no seu buildpack. <br>
Ih, May! Checkei e não tem, o que faço? Você vai clicar em 'add buildpack' e selecionar um dos buildbacks oficiais ou a URL, no caso do Node.js é só selecionar o ícone dele e salvar em 'Save changes'.

3. Confiram se as variáveis de ambiente estão configuradas certinhas. (As que voce colocar no Heroku devem estar iguais a que está no seu arquivo .env)

4. Confira se você está usando a palavra PORT pra identificar a porta, o Heroku so reconhece se for PORT, evite usar DB_PORT, DATA_BASE_PORT, CONFIG_PORT ou algo do tipo. <br>

May, fiz todo o passo a passo mas ainda tá dando erro: vem no [SAC da May](https://wa.me/+5581992584285)! Vamos resolver essa bronca :purple_heart:

Deu certo? Parabéns! Nossa rota está no ar! 🎊 <br>

A arquitetura do projeto final, vai ficar parecida com essa aqui que a [Gaia](https://github.com/Gaia-Maria) criou pra gente: <br>

```
ARQUITETURA MVC - EXEMPLO (adapte para o seu projeto)

  📁 PROJETOFINAL (essa é a pasta raiz) 
  | 
  |-  📁 node_modules ( dentro da pasta raiz)
  |
  |-  📁 Swagger (dentro da pasta raiz)
  |         |- 📄 Swagger.json 
  |
  |-  📁 src (dentro da pasta raiz)
  |    |
  |    |- 📁 database  (dentro src)
  |         |- 📄 mongooseConnect.js  
  |
  |    |- 📁 controllers  (dentro src)
  |         |- 📄 xController.js  
  |         |- 📄 yController.js  
  |  
  |    |- 📁 models (dentro src)
  |         |- 📄 xModel.js  
  |         |- 📄 yModel.js  
  |  
  |    |- 📁 routes  (dentro src)
  |         |- 📄 xRoutes.js   
  |         |- 📄 yRoutes.js 
  |
  |    |- 📁 test (dentro src)
  |         |- 📄 x.test.js
  |
  |    |- 📄 app.js (dentro src)
  |
  |- 📄 Procfile (pasta raiz - esse é o heroku gatinhas)
  |- 📄 Swagger.js (pasta raiz)
  |- 📄 .eslintrc (pasta raiz) - surge depois de *Escolhas do ESlint* (instalação acima))
  |- 📄 .env (pasta raiz
  |- 📄 .env.example (pasta raiz)
  |- 📄 .gitignore  (pasta raiz)
  |- 📄 package-lock.json  (pasta raiz)
  |- 📄 pakage.json (pasta raiz)
  |- 📄 README.md  (pasta raiz)
  |- 📄 server.js  (pasta raiz)
```
