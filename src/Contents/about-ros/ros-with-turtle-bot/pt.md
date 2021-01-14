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
  - link: about-ros/with-python
    title: Programando para ROS com Python
---
## Antes de começar

Se você ainda não instalou o ROS no Ubuntu, sugiro que você instale seguindo [este tutorial](/posts/about-ros/beginner-commands).

Se você já o instalou, mas quer entender como funcionam os recursos do ROS como ```o master, os nodes, os topics, publish/subscribe e os services```, este tutorial pode ser muito útil para você!

Este tutorial foi feito para estudantes que não possuem muitos conhecimentos de desenvolvimento e nem de robótica, mas precisam aprender ou possui curiosidade em conhecer o Robot Operating System.

Vamos lá!

---

![Interacting with robots](https://www.nttdata.com/my/en/-/media/nttdataapac/common-images/foresight/technology-trend-environment--aware-robotics/foresight-environmentcognitiverobot-gridview-818x560.jpg '{"style":{"maxWidth" :"100%"}}')

## ROS - Um ambiente para operação de robôs

Como vimos na [Introdução aos conceitos do ROS](/posts/about-ros), trata-se de um software que cria um ecossistema virtual para poder operar robôs. Neste contexto, podemos considerar como robôs tanto pequenos sensores quanto grandes máquinas industriais integradas.

**Isto quer dizer que você precisa ter conectados sensores/atuadores em seu PC para poder utilizar o ROS?**

Em teoria, a resposta para esta pergunta é sim. Entretanto, o ROS também foi feito para realizar simulações de robôs e é com um simulador de robôs que iremos prosseguir com este tutorial.

---

## Apresentando o Turtle Simulator

![Ubuntu](https://spectrum.ieee.org/image/MzAzMjI5Nw.jpeg '{"style":{"maxWidth" :"100%"}}')

Com o Ubuntu e o ROS instalados em sua máquina, vamos por a mão na massa para controlar o seu primeiro robô.

O turtlesim é um simulador criado para ensinar os conceitos de ROS para iniciantes e a maioria dos tutoriais que você encontra pela internet começa a ensinar a partir dele.

Ele é um [package](http://wiki.ros.org/turtlesim#:~:text=turtlesim%20is%20a%20tool%20made%20for%20teaching%20ROS%20and%20ROS%20packages.) que vem instalado por padrão em praticamente todas as versões do ROS e se você seguiu o processo instalação por este tutorial, provavelmente ele estará instalado em seu PC.

Para confirmar se ele está instalado, vamos começar por um comando para procurar por ```packages``` instalados em sua implementação do ROS. Abra o terminal ```Ctrl+Alt+T``` e digite:

```
$ rospack list | grep turtle
```

Este comando irá procurar os packages ROS instalados que possuem a entrada **turtle** em seu nome. Caso esteja mesmo instalado, o **turtlesim** virá como uma das respostas para o comando. (Você não precisa realizar este comando sempre que for executar um ```package```, o demonstrei apenas para fins educativos)

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

Com o master executando, abra uma nova aba do terminal com ```Ctrl+Shift+T```(novo atalho) e execute o seguinte comando para iniciar o **turtlesim**:

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

Se você analisar esta mensagem você poderá observar que todos os recursos ROS relacionados a este node irão aparecer.

- O ```namespace``` do node
- Os ```topics``` que ele publica e os seus tipos de ```[message]``` 
- Os ```topics``` em que ele se inscreve e os seus tipos de ```[message]```
- Os ```services``` que ele fornece para todo o ambiente ROS
- E outras informações a mais de conexão

São todos os conceitos que eu expliquei na [primeira parte deste tutorial](/posts/about-ros)!

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

A explicação da resposta:

- ```Type``` é o tipo da mensagem da qual este tópico permite a publicação.
- ```Publishers``` os nodes que o publicam.
- ```Subscribers``` os nodes que se inscrevem.

Agora vamos conhecer do que se trata a ```Type``` desta mensagem, pois queremos controlar a nossa tartaruga. Podemos utilizar estes dois comandos para sabermos qual o tipo de mensagem que devemos enviar ao publicar um ```topic``` de tipo ```geometry_msgs/Twist```: 

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

Mas enviar comandos desta forma o tempo todo não seria um processo viável pois o tempo para digitá-los sem erros no terminal inviabilizaria todo o processo.

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

Se você instalou a versão completa do ROS, deve estar instalado em seu PC um outro *packace* chamado ```rqt_graph``` que mostra graficamente as relações de conexão entre os nodes através dos tópicos. 

```
$ rosrun rqt_graph rqt_graph
```

![Turtle sim rqt_graph](/static/images/rostopic-turtle-03.png '{"style": {"maxWidth": "100%"},"description": ""}')






---

## Conclusão

Se você é como eu, que precisa aprender sobre o Robot Operating System e não tinha muitos conhecimentos sobre Ubuntu e comandos de terminal, este guia é para você.

Você pode instalar o ROS Kinetic seguindo os tutoriais da [documentação oficial](http://wiki.ros.org/kinetic/Installation/Ubuntu) sem quaisquer problemas, porém o conteúdo lá é para quem já tem algum conhecimento prévio sobre o assuto.

Procurei explicar cada comando de forma rápida e direta para que você não seja como eu no começo, que copiava os comandos e via se funcionava. É muito importante entender o que cada comando faz quando se trata em trabalhar com o Ubuntu.

Também demonstrei alguns comandos para que você possa confirmar se tudo correu bem, como por exemplo, o ```cat``` e o ```apt list --installed```.

E, por fim, iniciei o contexto para você continuar nesta caminhada para aprendizado do ROS com a [próxima etapa deste tutorial](/posts/about-ros/ros-with-turtle-bot).

Um forte abraço.

Gabriel Toshinori Nakano

---

#### **Referências para esta Postagem**

- **Informações Úteis**
  - [Entendendo topics](http://wiki.ros.org/ROS/Tutorials/UnderstandingTopics)
  - [Turtlesim Package](http://wiki.ros.org/turtlesim#:~:text=turtlesim%20is%20a%20tool%20made%20for%20teaching%20ROS%20and%20ROS%20packages.)
  - [YAML Wikipedia](https://pt.wikipedia.org/wiki/YAML)
  - [Todas as Distribuições do ROS](http://wiki.ros.org/Distributions)

---
