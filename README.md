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
const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./src/app.js'];

swaggerAutogen(outputFile, endpointsFiles);
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
   "start": "nodemon index.js",
   "swagger-autogen": "node swagger.js",
 }
 ```

6. Em seguida digitaremos o seguinte comando la no terminal:

`npm run swagger-autogen`

Note que foi criado um arquivo chamado _swagger_output.json_ dentro da nossa pasta swagger. <br>

Parabéns, vc ja tem sua documentação!!!! <br>

Bora deixar nossa documentaçao mais visual? <br>

7. Vamos lá no nosso app.js e adicionaremos o seguinte código: <br>

``` const swaggerUi = require('swagger-ui-express');

    const swaggerFile = require('../swagger/swagger_output.json');

    app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
```

8. Em seguida, inicializaremos nosso projeto, é so digitar no terminal: <br>

`npm start`

9. Feito isso, acessaremos a nossa rota  <br>

`localhost:8080/minha-rota-de-documentacao` <br>

PS: Estou usando a porta 8080, caso vc esteja usando alguma diferente, use ela, beleza? <br> <br>


### * Deploy & Heroku <br>
Bora deployar? <br> <br>
![vamo faze oq](https://media.giphy.com/media/TidHfACqQif3q/giphy.gif) <br>
1. Iremos conectar nosso repositório com o heroku, para isso precisaremos criar uma conta no (heroku)[https://www.heroku.com],
e criar o primeiro app clicando no botão _"new"_.

2. Coloque o nome do seu projeto e escolha a região em que o seu projeto ficará, pode escolher os EUA ou Europa, não faz diferença nesse caso. <br>
![imagem](https://raw.githubusercontent.com/analuizasampaio/on12-s18-deploy-projeto-final/main/imagens_tutorial/Untitled%202.png)

3. Na area de deploy conecte-se à sua conta no Github como método de deployment.

4. Em seguida, encontre o github do projeto que você deseja dar deploy, e entao escolha qual branch deseja dar deploy.


