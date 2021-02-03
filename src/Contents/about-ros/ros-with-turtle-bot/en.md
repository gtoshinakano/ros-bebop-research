---
title: Aprenda o Robot Operating System através do Turtle Simulator
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

This page hasn't been translated yet

---
## Antes de começar

Se você ainda não instalou o ROS no Ubuntu, sugiro que você o instale seguindo [este tutorial](/posts/about-ros/beginner-commands).

Se você já o instalou e quer entender como funcionam os recursos do ROS como ```o master, os nodes, os topics, publish/subscribe e os services```, este tutorial será muito útil para você!

Este tutorial foi feito para estudantes que não possuem muitos conhecimentos de desenvolvimento e nem de robótica, mas precisam aprender ou possui curiosidade em conhecer o Robot Operating System.

Vamos lá!

---

![Interacting with robots](https://www.nttdata.com/my/en/-/media/nttdataapac/common-images/foresight/technology-trend-environment--aware-robotics/foresight-environmentcognitiverobot-gridview-818x560.jpg '{"style":{"maxWidth" :"100%"}}')

## ROS - Um ambiente para operação de robôs

Como vimos na [Introdução aos conceitos do ROS](/posts/about-ros), trata-se de um software que cria um ecossistema virtual para poder operar robôs. 

Neste contexto, podemos considerar como robôs tanto pequenos sensores quanto grandes máquinas industriais integradas.

**Isto quer dizer que você precisa ter conectados sensores/atuadores em seu PC para poder utilizar o ROS?**

Em teoria, a resposta para esta pergunta é sim. Entretanto, o ROS também foi feito para realizar simulações de robôs e é com um simulador de robôs que iremos prosseguir com este tutorial.

---

## Apresentando o Turtle Simulator

![Ubuntu](https://spectrum.ieee.org/image/MzAzMjI5Nw.jpeg '{"style":{"maxWidth" :"100%"}}')

Com o Ubuntu e o ROS instalados em sua máquina, vamos por a mão na massa para controlar o seu primeiro robô!

O turtlesim é um simulador criado para ensinar os conceitos de ROS para iniciantes e a maioria dos tutoriais que você encontra pela internet começa a ensinar a partir dele.

Ele é um [package](http://wiki.ros.org/turtlesim#:~:text=turtlesim%20is%20a%20tool%20made%20for%20teaching%20ROS%20and%20ROS%20packages.) que vem instalado por padrão em praticamente todas as versões do ROS e se você seguiu o processo instalação por este tutorial, provavelmente ele estará instalado em seu PC.

Para confirmar se ele está instalado em seu PC, vamos começar por um comando para procurar por ```packages``` instalados em sua implementação do ROS. Abra o terminal ```Ctrl+Alt+T``` e digite:

```
$ rospack list | grep turtle
```

Este comando irá procurar os packages ROS instalados que possuem a entrada **turtle** em seu nome. Caso esteja instalado, o **turtlesim** virá como uma das respostas para o comando. (Você não precisa realizar este comando sempre que for executar um ```package```, o demonstrei apenas para confirmar a instalação)

Confirmada a presença do **turtlesim** podemos iniciar o seu node, mas antes, vamos por etapas.

### 1. Iniciando o Master

Como venho falando em todas as partes deste tutorial, o ```master``` é o ecossistema principal de um ambiente ROS. Precisamos dele iniciado para que possamos utilizar seus recursos.

É impossível iniciar um ```node``` sem que o ```master``` esteja iniciado. Portanto, temos que executar o comando ```roscore``` para iniciá-lo.

Então, em uma aba do terminal, digite:

```
$ roscore
```

Isto irá iniciar um servidor Master no seu PC. Como ele é um processo de primeiro plano, ou seja, um processo de execução contínua, ele continuará rodando enquanto você não o encerrar (para encerrá-lo futuramente, pressione o atalho ```Ctrl+C``` no terminal)

Agora ele estará pronto para receber os registros de ```nodes, topics, messages e services```, como explicado detalhadamente na primeira parte deste tutorial.

### 2. Iniciando o seu primeiro Node

Com o master executando, abra uma nova aba do terminal com ```Ctrl+Shift+T``` e execute o seguinte comando para iniciar o **turtlesim**:

```
$ rosrun turtlesim turtlesim_node
```

Este comando ```rosrun``` procurará pelo package de nome **turtlesim**, executará o executável **turtlesim_node** e, *Voilà*, seu primeiro robô tartaruga estará simulado!

![Seu primeiro turtlesim](/static/images/rosrun-turtle.png '{"style": {"maxWidth": "100%"},"description": "Abrirá uma nova janela com uma tartaruga no meio e ela será o seu primeiro robô controlado pelo ROS!"}') 

Este processo fará com que os ```nodes``` do **turtlesim** package sejam iniciados.

Para visualizar os ```nodes``` iniciados em um novo terminal, digite o comando:

```
$ rosnode list
```

Você verá o namespace ```/turtlesim``` na lista e, para ver mais detalhes sobre ele, digite o comando:

```
$ rosnode info turtlesim


/* -------- Mensagem de retorno -------- */
Node [/turtlesim]
Publications: 
 * /rosout [rosgraph_msgs/Log]
 * /turtle1/color_sensor [turtlesim/Color]
 * /turtle1/pose [turtlesim/Pose]

Subscriptions: 
 * /turtle1/cmd_vel [unknown type]

Services: 
 * /clear
 * /kill
 * /reset
 * /spawn
 * /turtle1/set_pen
 * /turtle1/teleport_absolute
 * /turtle1/teleport_relative
 * /turtlesim/get_loggers
 * /turtlesim/set_logger_level


contacting node http://hgu-student:35917/ ...
Pid: 2630
Connections:
 * topic: /rosout
    * to: /rosout
    * direction: outbound
    * transport: TCPROS
```

Se você analisar esta mensagem você poderá observar que todos os recursos ROS relacionados a este node irão aparecer:

- O ```namespace``` do node
- Os ```topics``` que ele publica e os seus tipos de ```[message]``` 
- Os ```topics``` em que ele se inscreve e os seus tipos de ```[message]```
- Os ```services``` que ele fornece para todo o ambiente ROS
- E outras informações a mais de conexão

São todos os conceitos que eu expliquei na [primeira parte deste tutorial](/posts/about-ros).

### 3. Controlando a sua Tartaruga

O que fizemos até agora foi simular um robô tartaruga conectado ao PC iniciando o seu driver através do ```node``` **turtlesim**.

Agora precisamos conectar um controlador para ele. Mas antes disso, vamos relembrar como acontece o controle através dos ```topics```.

O node registra no master os ```topics``` que são publicados e os ```topics``` em que possuem interesse. A partir daí, qualquer node registrado no master pode tanto se inscrever(*subscribe*) no ```topic``` que ele publica(*publish*) quanto publicar num ```topic``` em que ele se inscreve.

Para exemplificar, isto significa que um novo node no circuito pode tanto receber as mensagens do tópico ```/turtle1/pose``` quanto enviar mensagens no tópico ```/turtle1/cmd_vel```.

Nossa tartaruga se inscreve (*subscribe*) no topic ```/turtle1/cmd_vel```, isto quer dizer que ela se interessa quando algum node envia uma mensagem neste tópico, pois ela realizará uma ação quando isto ocorrer.

Vamos colocar em prática todo este conceito conhecendo melhor este topic:

```
$ rostopic info /turtle1/cmd_vel


/* -------- Mensagem de retorno -------- */
Type: geometry_msgs/Twist

Publishers: None

Subscribers: 
 * /turtlesim (http://hgu-student:35917/)
```

Este comando exibe informações sobre o tópico fornecido:

- ```Type``` é o tipo da mensagem da qual este tópico permite a publicação.
- ```Publishers``` os nodes que o publicam.
- ```Subscribers``` os nodes que se inscrevem.

Agora vamos conhecer do que se trata o ```Type``` desta mensagem, pois queremos controlar a nossa tartaruga. Podemos utilizar estes dois comandos para sabermos qual o tipo de mensagem que devemos enviar ao publicar um ```topic``` de tipo ```geometry_msgs/Twist```: 

```
$ rosmsg show geometry_msgs/Twist 
  OU 
$ rosmsg info geometry_msgs/Twist


/* -------- Mensagem de retorno -------- */
geometry_msgs/Vector3 linear
  float64 x
  float64 y
  float64 z
geometry_msgs/Vector3 angular
  float64 x
  float64 y
  float64 z
```

Percebemos que a estrutura da mensagem requerida para este tópico são duas matrizes(*linear* e *angular*) com três valores(x, y e z) cada.

Podemos notar que são valores de posicionamento, *linear* para movimentos em linha e *angular* para posicionar o ângulo do robô.

Para publicarmos esta mensagem no tópico, utilizaremos o comando ```rostopic pub```, no tópico ```/turtle1/cmd_vel``` com os parâmetros com valores formatados na linguagem ```YAML```.

```
$ rostopic pub -1 /turtle1/cmd_vel geometry_msgs/Twist -- '[2.0, 0.0, 0.0]' '[0.0, 0.0, 1.8]'
```

E, como resultado, você verá a nossa tartaruga reagindo ao seu comando.

![Rostopic pub turtlesim](/static/images/rostopic-turtle-01.png '{"style": {"maxWidth": "100%"},"description": "A tartaruga se movimentará de forma linear com os valores [2.0, 0.0, 0.0] e de forma angular com os valores[0.0, 0.0, 1.8]"}') 

O que aconteceu é que publicamos uma mensagem no tópico ```/turtle1/cmd_vel``` em que o node ```/turtlesim``` está inscrito. No momento em que o topico é publicado com seus valores no formato correto, o nosso robô simulado recebe esses valores e performa a sua ação.

Se você repetir este comando várias vezes em seu terminal, verá a sua tartaruga girando na mesma direção. Se você alterar alguns desses valores, a direção e/ou o ângulo de movimento da tartaruga irão alterar.

Com isso, simulamos o envio de um comando que um controle conectado ao ambiente do ROS poderia enviar a um robô real.

Mas enviar comandos desta forma o tempo todo não seria um processo viável pois o tempo de digitação no terminal inviabilizaria todo o processo.

Para isso, desenvolvemos os ```nodes``` controladores.

### 4. O node controlador

O pacote do **turtlesim** vem com uma ferramenta que realiza a publicação dos ```topics``` de comando para a nossa tartaruga por meio das setas do teclado.

Para iniciá-lo, utilize o seguinte comando:

```
$ rosrun turtle_sim turtle_teleop_key
```

Com isto, você poderá controlar a tartaruga pressionando as teclas direcionais do seu teclado.

![Controlando a tartaruga com o teclado](/static/images/rostopic-turtle-02.png '{"style": {"maxWidth": "100%"},"description": "Sim, eu tentei escrever a palavra ROS com a nossa tartaruga."}')

O ```teleop_turtle``` é um node que funciona como um controlador deveria funcionar. Ele publica as mensagens no tópico correto ao pressionar os botões para que o nosso robô inscrito neste tópico possa realizar ações.

Se você instalou a versão completa do ROS, deve estar instalado em seu PC um outro *package* chamado ```rqt_graph``` que mostra graficamente as relações de conexão entre os nodes através dos tópicos. 

```
$ rosrun rqt_graph rqt_graph
```

O resultado será o seguinte:

![Turtle sim rqt_graph](/static/images/rostopic-rqt-01.png '{"style": {"maxWidth": "100%"},"description": ""}')

Como pode observar, esta ferramenta mostrará o relacionamento entre os nodes ```/teleop_turtle``` e ```/turtlesim```, conectados através do tópico ```/turtle1/cmd_vel```. Se você marcar outros recursos na ferramenta, você poderá ter visões diferentes do ecossistema.

![Turtle sim rqt_graph-02](/static/images/rostopic-rqt-02.png '{"style": {"maxWidth": "100%"},"description": ""}')

```rqt_graph``` é uma ferramenta poderosa para depurar a sua aplicação pois fornece uma visão global geral de seu ecossistema ROS. A ferramenta não exibe os relacionamentos por ```services```, apenas por ```topics``` devido à forma como os ```services``` foram implantados, mas é útil o suficiente para se encontrar problemas no ecossistema rapidamente. 

### 5. Lendo tópicos publicados

Se com o comando ```rostopic pub``` podemos publicar mensagens nos ```topics```, isso significa que estamos utilizando algum ```node``` para fazer essa publicação?

A resposta é: **Não**. O comando ```rostopic``` é uma função nativa do ROS que lida com a interação por ```topics``` através do terminal. Portanto, para ler as mensagens publicadas pelo terminal, também não é necessário fazê-lo por meio de um node como mostrarei a seguir.

Abra mais uma aba do terminal ```Ctrl+Shift+T``` e execute o seguinte comando para ler as mensagens do tópico ```/turtle1/cmd_vel```:

```
$ rostopic echo /turtle1/cmd_vel
```

Em seguida, vá até o terminal do ```teleop_turtle``` node e movimente um pouco a tartaruga por meio das setas do teclado.

![Turtle sim read data](/static/images/rostopic-turtle-03.png '{"style": {"maxWidth": "100%"},"description": "Serão 5  terminais no total: master, turtlesim node, teleop_turtle node, rqt_graph node e o último"}')

Ao voltar para o terminal do comando ```rostopic echo``` você verá que apareceram alguns conjuntos de dados lineares e angulares, que são justamente as mensagens publicadas no momento em que você pressionava as teclas direcionais.

O terminal se comportou como se fosse um node inscrito no tópico apenas para mostrar o resultado no console. Este comando continuará "ouvindo" as publicações do tópico enquanto você não encerrá-lo com ```Ctrl+C```.

### 6. Solicitando serviços

O último conceito que iremos aprender é o funcionamento das services. Como expliquei na primeira parte deste tutorial sobre ROS, enquanto os ```topics``` são o método de comunicação **uni-direcional** entre nodes, ```services``` são a forma **bi-direcional**. Isto significa que o node requisitante solicita um serviço por meio de uma mensagem e recebe uma resposta do node servidor.

Vamos ver como isto funciona na prática. Abra mais uma aba do terminal ```Ctrl+Shift+T``` e digite o seguinte comando para ver a lista dos services disponíveis nesta instância do master:

```
$ rosservice list
```

Você verá que, dentre os services disponíveis, existe um ```/spawn``` e é ele que iremos solicitar. Mas antes, vamos verificar o tipo de mensagem que este service utiliza:

```
$ rosservice type /spawn
```

O retorno será ```turtlesim/Spawn```. Isto significa que o ```turtlesim_node``` registrou no master que o service ```/spawn``` possui este tipo de mensagem. Para verificar a composição de quais valores este tipo de mensagem deve receber, vamos utilizar o comando ```rossrv```, que é parecido com o comando ```rosmsg show```.

```
$ rossrv show turtlesim/Spawn
```

![Turtle sim service 01](/static/images/rosservice-turtle-01.png '{"style": {"maxWidth": "100%"}}')

Como pode observar, o comando exibiu dois conjuntos de mensagens. Um é o **tipo da mensagem de requisição** e outro é o **tipo da mensagem de resposta** do service.

Portanto, para chamar o serviço precisamos enviar uma mensagem com os valores de ```x, y, theta``` (números de ponto flutuante) e ```name``` (texto) nos seus formatos adequados, e receberemos uma resposta ```name``` de tipo texto.

```
$ rosservice call /spawn 2 2 0.2 ""
```

E, magicamente, aparecerá uma nova tartaruga em nosso simulador!

![Turtle sim service 02](/static/images/rosservice-turtle-02.png '{"style": {"maxWidth": "100%"},"description": "Nosso primeiro service requisitado!"}')

Como mensagem de resposta do nosso chamado ao serviço, da qual enviamos um ```name``` com valor nulo, o node nos respondeu com uma mensagem de ```name: turtle2```. Isto significa que a nossa nova tartaruga é uma nova instância gerada pelo node turtlesim, de nome ```turtle2```.

Agora podemos movimentá-la publicando em seu próprio ```topic```, que pode ser visto novamente pelo comando ```rostopic list```.

![Turtle sim service 03](/static/images/rosservice-turtle-03.png '{"style": {"maxWidth": "100%"},"description": "Veja que temos disponíveis tanto os topics para turtle1 quato para turtle2"}')

E, com o comando a seguir, podemos mover a nossa segunda tartaruga.

```
$ rostopic pub -1 /turtle2/cmd_vel geometry_msgs/Twist -- '[2.0, 0.0, 0.0]' '[0.0, 0.0, 1.8]'
```

Existem muitas coisas que você pode fazer com o simulador, como ensinados [neste](http://wiki.ros.org/ROS/Tutorials/UnderstandingTopics) e [neste outro](http://wiki.ros.org/ROS/Tutorials/UnderstandingServicesParams) tutorial.

O mais básico que você deve aprender para começar a operar robôs com o ROS foi explicado aqui. Na [última etapa deste tutorial sobre ROS](/posts/about-ros/writing-package-with-python), vamos escrever o nosso primeiro package em python! 

---

## Conclusão

Aprendemos na prática como podemos utilizar comandos para analisar o ambiente do ROS e acionar atuadores através dos ```topics```e dos ```services```.

Existem inúmeros comandos de terminal para ROS para diversas funcionalidades e você pode vê-los todos [nesta página](http://wiki.ros.org/ROS/CommandLineTools) da documentação oficial do ROS.

Procurei explicar o que faz cada comando pois, quando eu comecei, tive uma certa dificuldade de entender o ambiente do ROS enviando comandos sem conhecer direito o universo do master, nodes, topics e services.

Como resumo, listo aqui os comandos e uma explicação para cada um deles:

- ```rospack``` todas as ações relativas aos packages ROS
- ```roscore``` inicia o master
- ```rosrun``` inicia um package instalado através de seu nome
- ```rosnode``` todas as ações relativas aos nodes iniciados
- ```rostopic``` todas as ações relativas aos topics disponíveis
- ```rosmsg``` comando sobre informações relativos aos tipos de messages publicados/inscritos por topics
- ```rosservice``` todas as ações relativas aos services disponíveis
- ```rossrv``` comando sobre informações relativos aos tipos das mensagens trocadas por services

Um forte abraço.

Gabriel Toshinori Nakano

---

#### **Referências para esta Postagem**

- **Informações Úteis**
  - [Entendendo Topics](http://wiki.ros.org/ROS/Tutorials/UnderstandingTopics)
  - [Entendendo Services](http://wiki.ros.org/ROS/Tutorials/UnderstandingServicesParams)
  - [Turtlesim Package](http://wiki.ros.org/turtlesim#:~:text=turtlesim%20is%20a%20tool%20made%20for%20teaching%20ROS%20and%20ROS%20packages.)
  - [Mais sobre Turtlesim](https://subscription.packtpub.com/book/hardware_and_creative/9781782175193/1/ch01lvl1sec14/turtlesim-the-first-ros-robot-simulation)
  - [YAML Wikipedia](https://pt.wikipedia.org/wiki/YAML)
  - [Rqt_graph em detalhes](https://roboticsbackend.com/rqt-graph-visualize-and-debug-your-ros-graph/)
  - [Todos os comandos de terminal](http://wiki.ros.org/ROS/CommandLineTools)
---
