---
title: O que é ROS? Entenda o Robot Operating System de uma vez por todas!
description: A strong, little quadcopter in need of better performance
keywords: Keys separated with commas
hero_alt: Hero alternative text
headline: Page's Headline
subheadline: Page's SubHeadline
cta: Call to Action
summary:
  - link: about-ros
    title: O que é ROS? Como funciona o Robot Operating System
  - link: about-ros/beginner-commands
    title: Instalação e primeiros comandos no ROS
  - link: about-ros/ros-with-turtle-bot
    title: Entendendo ROS com o Turtle Simulator
  - link: about-ros/writing-package-with-python
    title: Programando para ROS com Python
---

このページはまだ翻訳されていません。

---

## Entendendo os Robôs - Pense em um robô como sendo uma pessoa

Para entender como funciona o Robot Operating System vamos supor que um robô seja um ser humano.

Ele possui partes como mãos, braços, pernas e o cérebro é quem controla tudo de forma perfeita e sincronizada.

O cérebro humano é um órgão que funciona de forma instintiva, porém, o cérebro de um robô funciona de forma programática e calculada.

Para uma simples tarefa, como por exemplo levantar um objeto, o cérebro humano envia instintivamente a quantidade de energia necessária para os braços e as mãos, com o intuito de erguer o objeto de forma suave e sem movimentos bruscos.

O cérebro de um robô precisa ser programado para realizar o mesmo efeito ao erguer um objeto.

![I must be a robot then](https://media4.giphy.com/media/S0hxMGYFhEMzm/200.gif '{"style":{"maxWidth":"50%","float":"right"},"description":"Somos praticamente robôs super avançados e com um sistema de controle - quase - perfeito"}')

Ele precisa conhecer o peso do objeto, calcular a quantidade de energia necessária para levantá-lo com seus braços mecânicos, para assim então, enviar os comandos corretos e erguer de forma suave e sem realizar movimentos bruscos.

O cérebro humano é tão magnífico que, para todo tipo de tarefa mecânica, utiliza inconscientemente de infinitas variáveis em seus cálculos.

Você não pensa conscientemente no ângulo correto para inclinar a sua coluna para se equilibrar ao levantar uma caixa de 10kg, por exemplo. É tudo instintivamente calculado pelo seu cérebro.

Já sistemas operacionais de robôs precisam ter previamente programados os comportamentos diante das tarefas a serem executadas, levando em consideração dados de sensores, limitações mecânicas, especificações de fábrica dos componentes e muitas outras variáveis relacionadas.

![Gundam](https://31.media.tumblr.com/b60eb3179227a561106516e53555a168/tumblr_nov7x572rH1u3lccdo1_500.gif '{"style": {"maxWidth":"70%", "float":"left"},"description":"Sim, seria muito louco se eles existissem."}')

Por isso AINDA não temos robôs funcionais como Gundams ou EVAs dos animes japoneses.

Seriam necessárias centenas de pessoas para programar o funcionamento de cada parte mecânica do robô, um sistema que sincronizaria tudo de forma milimétrica para manter o equilíbrio durante os movimentos e milhares de horas de testes e simulações. 

Além de milhões de dólares para o projeto... 

Obviamente, quase todos os robôs não se parecem com seres humanos. Podemos considerar pequenos sensores de torneiras ou grandes máquinas industriais como robôs.

Porém, o funcionamento pode ser entendido fazendo uma analogia ao funcionamento de um cérebro humano e essa será a forma como irei explicar mais adiante.

### O problema no aprendizado da robótica

Dois alunos doutorandos da Universidade de Stanford trabalhavam no laboratório de robótica quando perceberam que havia uma certa dificuldade no aprendizado de outros estudantes.

> *"Enquanto trabalhavam em robôs para realizar tarefas de manipulação em ambientes humanos, os dois alunos notaram que muitos de seus colegas tinham seu progresso atrasado pela natureza diversa da robótica: um desenvolvedor de software poderia não ter o conhecimento de hardware necessário, alguém que trabalha no estado-da-arte em planejamemento de rotas poderia não ter conhecimentos em visão computacional, por exemplo. Para remediar essa situação , os dois estudantes se propuseram a fazer um sistema base, que proveria um ponto de partida para todos na academia trabalharem em cima."*
>
> [**Robot Operating Sistem - Wikipedia**](https://pt.wikipedia.org/wiki/Robot_Operating_System)

Para se trabalhar com robótica são exigidas muitas áreas de conhecimento. A **natureza diversa da robótica** citada no texto é justamente o que dificulta o aprendizado sobre o desenvolvimento de robôs.

Você precisaria conhecer sobre matemática, física, eletrônica, programação, hardwares, softwares e etc caso queira criar um robô do zero. É muita coisa!

Por isso alguns estudantes em Stanford encontraram dificuldades. No geral, as pessoas são especialistas em determinados assuntos e extremamente leigas em outros.

Então os dois estudantes, Eric Berger e Keenan Wyrobek, tiveram a idéia de criar um sistema que seria o ponto de partida para o aprendizado sobre robótica.

Eles não criaram um sistema da qual possibilitaria que qualquer um criasse robôs sem ter os conhecimentos necessários (Infelizmente). 

Entretanto, eles criaram uma ferramenta capaz de unificar os abrangentes conceitos da robótica de uma forma simples, porém muito completa.

Qualquer um que deseja criar um robô hoje pode começar aprendendo pelo Robot Operating System - ROS - criado pelos dois doutorandos de Stanford.

Inclusive, muitos projetos de robótica hoje são baseados em ROS, pois possui código fonte aberto e muitas contribuições vieram da sua própria comunidade de utilizadores.

Portanto é uma ótima ferramenta para você que quer aprender sobre robótica e controle de robôs.

Já vou adiantando aqui que ROS não é a única forma de se desenvolver e trabalhar com robôs. É só mais uma alternativa e uma das mais utilizadas no planeta.

E adianto também que não é tão fácil aprender ROS, pois eu tive uma grande dificuldade no começo.

Mas eu prometo que vou fazer o meu melhor para fazer com que você entenda o ROS, mesmo que você não tenha um conhecimento básico sobre o assunto. Continue lendo para entender.

---

## Afinal, o que faz o ROS?

![Panda eating bamboo](https://media3.giphy.com/media/jenIWU63oKK0o/giphy.gif '{"style": {"maxWidth":"70%", "float":"left"}}')

Ursos panda só se alimentam de bambus. Na verdade 1% de sua alimentação pode ser através de outras fontes de alimento como ovos e insetos.

No entanto, bambus são a dieta principal deste urso. Ele pode chegar a comer incríveis 40kg de bambu por dia. Seu habitat natural deve ser um grande bambuzal para que possa sobreviver.

Tal ecossistema deve possuir o solo, a umidade, a temperatura ideais para que haja bambu em abundância para que os pandas se alimentem. Se você soltar um panda no deserto, ele não sobrevive.

Então podemos dizer que **pandas não funcionam e não se desenvolvem** em ambientes desertos.

Este papo sobre pandas e ecossistema foi a melhor maneira que eu encontrei para ilustrar a essência do ROS de forma simples.

Para se criar um robô complexamente integrado, onde suas partes robóticas podem comunicar entre si e ter diversos centros de controle integrados, é necessário ter um ambiente que permite fazer isso.

O Robot Operating System é um sistema operacional propriamente dito que roda em Linux e cria um ecossistema capaz comandar partes robóticas, realizar abstrações de componentes, simulações e leituras de sensores.

Dando exemplos mais práticos, em um PC com ROS você pode conectar um controle de Playstation 4 e utilizá-lo para controlar um drone. Você pode também programar diferentes comportamentos de partes mecânicas de um robô, como por exemplo as ventoinhas de resfriamento, de acordo com os dados vindos de seu termômetro digital interno.

Então, podemos dizer que **robôs podem funcionar e ser desenvolvidos** em ambientes ROS, pois ele foi criado para esta finalidade. É como se fosse um vasto bambuzal para uma família de pandas.

Como o nome já diz, é uma ferramenta para **operar robôs** e não para criar robôs. Você pode criar aplicações de operação de robôs com o ROS, mas a parte de design e escolha de componentes é um assunto à parte.

Portanto, é o ambiente completo para quem deseja programar e comandar robôs de todos os portes. E as possibilidades são ilimitadas graças à quantidade de ferramentas desenvolvidas e distribuídas pela comunidade de seus usuários.

---

## Como funciona o ROS?

Como falei anteriormente, o Robot Operating System funciona apenas em sistemas operacionais Linux. Infelizmente, as versões para outros sistemas operacionais são incompletos ou não funcionam como deveriam, por isso recomendo que utilizem o ROS no Ubuntu, pois todas as explicações aqui serão com base nesta premissa.

Eu explico passo-a-passo o processo de instalação na [segunda parte deste tutorial](beginner-commands). Nesta parte iremos focar somente no entendimento do conceito do ROS e de seu funcionamento.

No computador, o sistema operacional serve para operar em conjunto os hardwares do PC para torná-lo utilizável. Você não consegue fazer nada com uma placa vídeo ou uma placa de rede se eles não estiverem em uma máquina com um sistema operacional. Isoladamente os hardwares são praticamente inúteis.

O conceito do ROS é parecido. Sem um sistema operacional as partes internas do robô não possuem função.

O ROS é um framework IPC - Intra Process Communication Framework. Significa que ele é uma opção para fazer a a comunicação entre os drivers dos diferentes sensores e atuadores que um robô possa ter.

E graças à sua natureza *open source* e a contribuição da sua comunidade de usuários existem muitos pacotes de softwares disponibilizados para ajudar no desenvolvimento para robótica. Explico detalhadamente mais para frente.

A finalidade do ROS também é a padronização na metodologia de criação de robôs para que toda a comunidade possa se beneficiar disso e não ter que reinventar a roda.

### Os conceitos básicos do ROS

Para entender como funciona o ROS é necessário conhecer os conceitos mais básicos que explicarei individualmente nesta seção.

A [Documentação Oficial do ROS](http://wiki.ros.org/ROS/Concepts) explica tecnicamente todos os conceitos, porém, eu tive uma certa dificuldade para aprender digerir toda a informação contida lá. Isto porque os conceitos se misturam e os termos são todos interrelacionados.

Portanto escreverei aqui de forma que talvez pudesse ter me ajudado no processo de aprendizado desde o início.

Durante os seus estudos sobre ROS, você encontrará termos como ***Master, Nodes, Namespaces, Topics, Messages, Publish/Subscribe, Services e Packages***. E estes serão explicados à seguir.

### O Mestre - Quem registra e conhece tudo

![Master](https://pandorafms.com/blog/wp-content/uploads/2020/05/centralize-monitoring-featured.jpg '{"style":{"maxWidth" :"100%", "float":"none"},"description":"O Master é o centro do ecossistema ROS"}')

Como vimos anteriormente, o ROS é um ambiente padronizado para operação de robôs. Este ambiente possui suas características e no seu núcleo, existe o conceito do mestre.

O Master é o nome dado ao núcleo principal do ROS e ele é o responsável pelo registro de informações para a integração de todas as partes.

Se o robô fosse uma um sistema de administração de funcionários de uma empresa, por exemplo, os sensores e atuadores seriam os seus funcionários e as suas informações devem estar registradas no master para garantir que todos possuam suas funções e possam se comunicar.

Caso um funcionário não esteja cadastrado no master, seria impossível um supervisor atribuir uma tarefa para ele, por exemplo.

No ROS, o master funciona como este sistema central, onde todos os periféricos dependem das informações registradas nele para poder funcionar e se comunicar.

Portanto, **o Master é o primeiro recurso que deve ser inicializado no ROS** pelo comando ```roscore``` do terminal e, uma vez iniciado, pode receber o registro dos nodes, parâmetros, tópicos e services.

### Nodes - Os nós que conectam o master aos recursos

![Nodes](https://www.bgc.bard.edu/images/khipuimage.jpg,660x660 '{"style":{"maxWidth" :"100%", "float":"none"},"description":"Imagine nodes como nós em cordas"}')


> *Os nodes são processos que performam computação. O ROS foi projetado para ser modular em uma escala refinada; um sistema de controle de robô geralmente contém muitos **nós (nodes)**. Por exemplo, um node controla um telêmetro a laser, um outro controla os motores das rodas, um outro rastreia a localização, um outro executa o planejamento do caminho e por aí vai...*
>
> [**ROS Concepts - ros.org**](http://wiki.ros.org/ROS/Concepts)

Como em uma corda, os nós ficam entre uma ponta e a outra. Em uma extremidade fica o master e cada corda o conecta a um recurso do ROS que performa algum tipo de computação.

Os nós podem ser, por exemplo, drivers de sensores, controladores de atuadores ou simplesmente registradores de informações para um arquivo de *log*. 

Todo node deve ter um propósito modular isolado, o que significa que, por exemplo, um node de driver de GPS deve servir apenas para esta funcionalidade sem incluir funções de outros atuadores.

Esta arquitetura modular permite a execução dos processos de forma descentralizada. Se houver um problema em algum node, os outros nodes não serão afetados e isso facilita a busca por erros e a manutenção do sistema.

Quando iniciados, os nodes se registram ao master e podem então se comunicar com outros nodes.

Um exemplo prático disso pode ser um node de termômetro se comunica com o node do motor para que ele possa diminuir a potência ou desligar quando o sistema atingir certa temperatura.

Em toda a estrutura do ROS, os recursos recebem ***names*** que será o conceito explicado à seguir.

### Namespaces - A identidade dos recursos

O ROS estrutura seus recursos hierarquicamente por meio de ***names***, ou seja, cada recurso possui seu nome único que pode ser utilizado também para referenciar a outros recursos relacionados.

Tal serviço de nomes pode ser chamado de ***Namespaces***. Veja um exemplo de como estes recursos podem ser nomeados:

```javascript
/*Nomes de nodes*/

  /rosout

/*Nomes de topics*/

  /bebop/states/ardrone3/PilotingState/FlyingStateChanged
  /bebop/states/common/CommonState/BatteryStateChanged
  /bebop/states/common/FlightPlanState/AvailabilityStateChanged
  /bebop/states/common/FlightPlanState/ComponentStateListChanged
```

Como pode notar, este método de nomes facilita a identificação dos recursos e de suas localizações. 

É como se fossem arquivos dentro de pastas em sistemas operacionais. Para utilizá-los, você percorre pasta a pasta para encontrar o recurso desejado. 

Você pode saber com [mais detalhes sobre names aqui](http://wiki.ros.org/Names).

Agora que você já tem o contexto do *Master, dos Nodes e da identidade de recursos através de namespaces*, o próximo conceito é o mais importante para entender parte do processo de funcionamento do ROS.

### Topic - O assunto de interesse

![Topic](https://index.ros.org/doc/ros2/_images/Nodes-TopicandService.gif '{"style": {"maxWidth":"100%"},"description": "Loop infinito shake wii remote, shake arms"}')

Vamos recapitular o processo de funcionamento do ROS com o que vimos até aqui. 

1. O ***Master*** inicia
2. Cria-se um ecossistema para registro de recursos através de *Namespaces*.
3. Os ***Nodes*** de recursos registram-se ao ***Master***

O próximo item da lista ocorre junto com a inicialização dos nodes e é o que permite o controle dos robôs no ambiente do ROS. Os nodes registram os **tópicos de interesse** no master quando iniciados. 

Antes de me aprofundar, deixe-me contextualizar este mecanismo com um exemplo que talvez você já vivenciou. 

Você já entrou em algum blog ou site do assunto de seu interesse e encontrou um campo de texto onde o autor pede para que você coloque o seu endereço de email para que ele possa enviar conteúdos exclusivos?

E então, caso você coloque o seu email e se inscreva na *mailing list*, você recebe periodicamente emails da pessoa com informações sobre o assunto e, futuramente, uma oferta para você aproveitar uma oportunidade única...

O ROS controla robôs de forma parecida com esta ferramenta de Marketing Digital. Os *nodes* registram no master os tópicos da qual ele publica(*publish*) e possui interesse para se inscrever(*subscribe*). 

Cada tópico é fortemente tipificado através do conceito de *messages*, que são os tipos de mensagens da qual o tópico pode ser publicado. Uma vez registrados com os seus tipos de mensagem, qualquer *node* pode se inscrever ou publicar no mesmo tópico.

Ao se inscrever em um tópico, o *node* aguarda por uma publicação de mensagem neste tópico para performar uma ação. Em outras palavras, quando o *node* responsável pela publicação deste tópico publica uma mensagem, o *node* inscrito neste tópico recebe a mensagem e executa uma ação baseada ou não no conteúdo da mensagem.

Deixe-me dar um exemplo prático disto. Imagine um ambiente ROS conectado a um [controle de Nintendo Wii (package wiimote)](https://wiki.ros.org/wiimote) e um robô dançarino com driver para ROS.

**Vamos supor** que os *nodes* foram iniciados e que os tópicos foram registrados com os seguintes *namespaces*:

```javascript
/* Nodes Iniciados */
  /wiimote_node
  /dancer_node

/* Tópicos registrados pelo wiimote (fictício) */
  (pub) /wiimote/classic
  (pub) /wiimote/nunchuk

/* Tópicos registrados pelo dancer (fictício+) */
  (pub) /dancer/shake/rightarm
  (pub) /dancer/shake/leftarm
```

Todas as ações realizadas no *Wii Remote*(classic) ou no *Nunchuck*(nunchuk) são publicadas nos seus respectivos tópicos com seus parâmetros como conteúdo da mensagem.

Por exemplo, se alguém chacoalhar o *Nunchuck*, uma mensagem do tipo ```joy``` com o valor de ```shake right angle -10``` (tipo e valores fictícios) é publicada no tópico ```/wiimote/nunchuk```. É como se o controle dissesse ao *master*: "Ei, eu estou chacoalhando o *nunchuck* com ângulo direito no valor de -10 !"

No caso do nosso *dancer*, o robô aguarda a publicação de seus tópicos registrados para poder mover seus braços. 

O nosso objetivo neste exemplo é criar um *node* controlador para conectar as funções do controle de Wii com as funções de controle do dancer. O novo *node* deve fazer com que, quando o Wii Remote e o Nunchuk chacoalharem, comandarem os braços do robô dançarino para chacoalharem na mesma direção.

O novo *node* poderá registrar o seguinte:

```javascript
/* Node Iniciado */
  /wii_dancer_controller

/* Tópicos registrados pelo wii_dancer_controller (fictício) */
  (sub) /wiimote/classic
  (sub) /wiimote/nunchuk
  (pub) /dancer/shake/rightarm
  (pub) /dancer/shake/leftarm
```

Note que nenhum novo tópico será registrado no *master*. A diferença é que o novo node tem interesse nas publicações do *wiimote*, portanto ele se inscreve (subscribe) em seus tópicos.

Todas as vezes em que o *wiimote* publica novas mensagens em seus tópicos o *wii_dancer_controller* as recebe, pois está inscrito. Seu papel agora é publicar as mensagens corretas nos tópicos de *dancer* todas as vezes em que os tópicos do *wiimote* forem publicados.

![Wii Controller](https://thumbs.gfycat.com/FemaleDeepKarakul-max-1mb.gif '{"style": {"float":"right"},"description": "Loop infinito shake wii remote, shake arms"}')

Assim, caso o controle receba uma ação de ```shake right angle -10```, o novo *node* pode lapidar a mensagem recebida e enviar o comando correto para os braços de *dancer*.

Se tudo correr bem em nosso ambiente ROS, conseguiremos reproduzir o efeito semelhante ao *gif*.

Vale destacar que este mecanismo de troca de mensagens é uma comunicação anônima e de apenas uma via. Um *node subscriber* recebe a mensagem de um outro *node publisher*, porém, o *publisher* não recebe uma resposta do *subscriber*, portanto, nem sabe qual node está recebendo suas mensagens. Para atingir este efeito, existem as *services*, da qual falarei mais adiante.

### Messages - O conteúdo do assunto

Se os *topics* são o assunto, as *messages* são o conteúdo dos tópicos quando publicados.

No caso do nosso robô dançarino, os braços do robô se movimentam de acordo com o conteúdo da mensagem publicada pelo controle do Wii.

No ROS, os tipos das mensagens são muito importantes. Raramente um controlador envia o tipo de mensagem 100% compatível a um atuador pois, na grande maioria das vezes, os fabricantes e as necessidades dos projetos são diferentes.

Desta forma, é necessário que criemos *nodes* que adaptem as mensagens para alcançar a compatibilidade entre os recursos de nossa aplicação para robôs.

Os *nodes* podem até tentar publicar mensagens com tipos diferentes das registradas, porém, a comunicação não ocorre com os nodes inscritos. A comunicação só ocorre quando a mensagem corresponder com o tipo do tópico registrado no master.

Você pode conhecer melhor este conceito através [deste link](http://wiki.ros.org/Messages)

### Services - a interação com requisição e resposta

Você já conheceu o mecanismo ```publish/subscribe``` por tópicos e viu que é uma interação de uma via e de relação muitos-para-muitos entre *nodes*, ou seja, quaisquer *nodes* podem se inscrever a um tópico sem que o *node* publicador saiba quem são os *nodes* inscritos.

Mas em aplicações reais existem casos em que os *node* precisam de uma relação de bi-direcional, onde os *nodes* requisitantes necessitam de uma informação específica de outro *node* para poder realizar alguma ação.

![Bear Trophy Camera](https://i0.wp.com/bdn-data.s3.amazonaws.com/uploads/2020/12/Trail-Cam-120220-Downeast-Lakes-Land-Trust-2.png?ssl=1 '{"style":{"float":"left","maxWidth":"50%"}}')

Um exemplo prático disto seria a sua utilização em componentes de um robô câmera para filmar animais na floresta.

Um sensor termal apontado na mesma direção da lente da câmera pode disparar o comando para a câmera iniciar as filmagens. Porém, como a câmera não conhece as condições de iluminação do instante em que o animal passar pelo caminho, um sensor de luz pode "avisá-la" sobre tais condições.

A primeira interação pode acontecer na forma de publicação e inscrição. Quando o sensor termal detectar um animal em sua frente, seu *node* publica uma mensagem em um tópico da qual o *node* da câmera está inscrita.

Porém, a segunda interação necessita de uma resposta para que a câmera possa decidir se realizará as imagens naquele momento no modo diurno ou noturno. Antes de iniciar as filmagens, o *node* da câmera requisita ao *node* do sensor de luz sobre as condições de iluminação daquele momento e, com a resposta retornada, inicia as filmagens no modo correto.

Desta forma funcionam as ```services``` no ROS. É como se fossem interações de mensagens entre um cliente e um servidor.

Vale ressaltar que o *node* da câmera não solicitou uma resposta ao *node* do sensor óptico enviando algum parâmetro específico. Entretanto, através dos ```services``` é possível fazer o envio de parâmetros de requisição para receber respostas personalizadas. 

As mensagens de requisição e resposta são registradas no master como ```services``` e também são fortemente tipificadas como as ```messages```. No entanto, deve-se declarar tanto os tipos da mensagem de requisição quanto os tipos da mensagem de resposta para que os ```services``` funcionem corretamente.

---

## Packages - pacotes de Software

Finalmente, falarei sobre os *packages* que são pacotes de software feitos para serem utilizados no ROS. Segundo o ROS Wiki:

> *Os ```packages``` podem conter nodes, uma biblioteca independente do ROS, um conjunto de dados, arquivos de configuração, parte de códigos de terceiros ou qualquer outra coisa que constitua logicamente um módulo útil.*
>
> [**ROS Packages - ros.org**](http://wiki.ros.org/Packages)

No começo, quando eu não conhecia nada sobre o ROS e tentava seguir tutoriais para controlar o meu Drone, o tempo todo citavam o termo ```package``` e eu não sabia como identificá-lo. Portanto, resolvi falar um pouco aqui, pois eu utilizaremos este termo durante este tutorial e talvez você passe pela mesma dificuldade que eu passei.

Tudo o que desenvolveram e disponibilizaram na comunidade para o ROS são ```packages```. Inclusive, se você iniciar o desenvolvimento de alguma aplicação para o ROS, esta aplicação também será um package.

Qualquer um pode começar a desenvolver um package e disponibilizar para a comunidade e é isso o que faz do ROS uma forte ferramenta para desenvolvimento de aplicações para robôs.

Você pode controlar robôs no ROS por meio de comandos no Terminal, mas para tornar o controle mais robusto e escalável, você deve desenvolver um ```package```.

Mas fique tranquilo, pois na continuação deste tutorial, você aprenderá como começar a desenvolver um package.

---

## Conclusão

Quando iniciei minha pesquisa e não sabia absolutamente nada sobre ROS, me deparei com todos esses termos em meio à infinitos materiais disponíveis na internet.

Meu intuito com esta postagem era apresentar o conceito de funcionamento do ROS a partir da explicação de cada um destes termos, pois eu acredito que se eu tivesse começado desta forma, teria tido menos dificuldades.

O Robot Operating System não é uma ferramenta fácil de se entender. Eu demorei um pouco para entender que ele não era uma ferramenta para desenvolver robôs, mas sim, para desenvolver aplicações para controlar robôs.

Para entendê-lo de forma mais simples foi preciso usar bastante a imaginação. Com bastante tempo por causa da pandemia e muita persistência, este conteúdo foi o resultado que obtive e transmito para você.

Portanto, vamos relembrar o que foi dito aqui em forma de tópicos:

- O ROS é um ambiente para controle de robôs.
- O ```master``` é o *Deus* deste ambiente, que registra todos os nodes, tópicos, serviços e parâmetros.
- Os ```nodes``` são os processos que performam computação e se conectam a recursos e atuadores.
- Os ```topics``` são os assuntos das quais os *nodes* se interessam e podem publicar.
- As ```messages``` são o conteúdo dos tópicos e possuem tipos definidos para que haja a comunicação entre *nodes*.
- ```publish/subscribe``` é o método para a comunicação unidirecional entre os *nodes*.
- Os ```services``` são utilizados para a comunicação bi-direcional entre os *nodes*.
- ```nodes, topics, services e packages``` são registrados no ```master``` através de *Namespaces*.
- Os ```packages``` são pacotes de software úteis para a aplicação para robôs no ROS.

Na [próxima etapa deste tutorial](/posts/about-ros/beginner-commands) vamos por a mão na massa, instalar o ROS e começar a executar nossos primeiros comandos para conhecermos os ROS.

Espero que este tutorial tenha servido de guia para você começar a explorar este mundo complexo que é a robótica e o ROS e que pelo menos alguma coisa aqui tenha feito sentido para você!

Um forte abraço.

Gabriel Toshinori Nakano

---

#### **Referências para esta Postagem**

- **ROS.org**
  - [ROS Concepts](http://wiki.ros.org/ROS/Concepts)
  - [ROS Nodes](http://wiki.ros.org/Nodes)
  - [ROS2 Nodes](https://index.ros.org/doc/ros2/Tutorials/Understanding-ROS2-Nodes/)
  - [ROS Nameservice](http://wiki.ros.org/Names)
  - [ROS Topics](http://wiki.ros.org/Topics)
  - [ROS Messages](http://wiki.ros.org/Messages)
  - [ROS Services](http://wiki.ros.org/Services)
  - [ROS Packages](http://wiki.ros.org/Packages)
  - [Package Wii Remote Driver - wiimote](https://wiki.ros.org/wiimote)
- **Outras Referências**
  - [Wikipedia](https://pt.wikipedia.org/wiki/Robot_Operating_System)
- **Aprofundamento teórico**
  - [What is a ROS Service?](https://roboticsbackend.com/what-is-a-ros-service/)
  - [A Gentle Introduction to ROS - Services Chapter](https://cse.sc.edu/~jokane/agitr/agitr-small-service.pdf)

---