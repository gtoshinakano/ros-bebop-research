---
title: Programando o nosso primeiro ROS Package em Python!
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

Este tutorial requer conhecimentos básicos sobre programação em Python.

Se você nunca programou ou executou algum script em Python, este tutorial pode ser um pouco desafiador para você.

Aqui explico basicamente como criar o seu primeiro package, programar o seu primeiro script e executá-lo no ambiente ROS. 

Esta é uma versão detalhada e comentada [deste tutorial](http://wiki.ros.org/turtlesim/Tutorials/Moving%20in%20a%20Straight%20Line) com as minhas palavras.

---

![What is a Package?](https://149449379.v2.pressablecdn.com/wp-content/uploads/1970/01/what-is-pkg.png '{"style":{"maxWidth" :"100%"}}')

## O que é um package ROS

Os ```packages``` em ROS são a parte mais atômica possível de ser desenvolvida para ROS. São os pacotes de códigos de softwares que possuem alguma utilidade no ambiente ROS.

Os packages podem conter nodes ROS, conjuntos de dados, biliotecas, e pedaços de softwares de terceiros. Qualquer pedaço de software que constitui um módulo útil pode ser considerado um package.

Quando usuários da comunidade desenvolvem coisas úteis para aplicações de robôs e *fáceis-de-consumir*, estas são compartilhadas em forma de packages, e você pode utilizá-los também caso os disponibilizem publicamente.

Este é um fator que torna o ROS tão popular na comunidade de desenvolvedores de aplicações para robôs, pois existem muitos códigos úteis compartilhados por essa comunidade.

É relativamente fácil criar um package e integrá-lo ao ambiente do ROS. O nosso futuro package terá como objetivo iniciar um novo node que, ao ser executado, solicitará informações para mover a tartaruga do turtlesim.

---

## Criando o seu Package ROS

![Workspace](https://www.elizabethhousewaterloo.co.uk/wp-content/uploads/2018/07/OfficeInterior_180704_Updated_Cam02-1116x560.jpg '{"style":{"maxWidth" :"100%"}}')

### 1. Iniciando o Package com um Workspace

Para que exista o mínimo de organização quando se trata de desenvolver aplicações para robôs, cada ```package``` deve possuir o seu próprio espaço de trabalho e possuir apenas uma ou um pequeno conjunto de funções.

Por exemplo, se em um ambiente ROS existem diversos sensores conectados, deve existir apenas um ```package``` para controlar cada sensor ou cada conjunto de sensores. Desta forma, evitamos que a nossa aplicação faça muita coisa em um código só, facilitando o entendimento e a manutenção do mesmo. Isto facilita também a escalabilidade da aplicação. 

Os packages em ROS são criados pela ferramenta de construção de pacotes chamada [Catkin](http://wiki.ros.org/catkin/conceptual_overview). Com ela é possível iniciar um novo *Workspace*(espaço de trabalho), informar as dependências(os packages da qual seu código depende para funcionar) e compilar o seu código para execução e exportação.

Para iniciarmos o nosso workspace, abra o terminal e digite os comandos a seguir:

```
$ mkdir ~/catkin_ws && mkdir ~/catkin_ws/src
$ cd ~/catkin_ws/src
$ catkin_create_pkg turtlesim_mover geometry_msgs rospy
```

O comando ```mkdir``` cria a pasta de nome ```~/catkin_ws``` e, dentro dela, cria uma pasta ```src```. O comando ```cd``` aponta o terminal para esta pasta, em outras palavras, faz com que o terminal "entre" na pasta.

Já o comando ```catkin_create_pkg``` configurará alguns arquivos iniciais de seu package informando as suas dependências. Ele criará a seguinte estrutura de arquivos:

- ```/turtlesim_mover/package.xml``` é o arquivo informativo sobre as dependências do seu package. Futuramente, você pode adicionar novas dependências ao seu package através de comandos do terminal e este será um dos arquivos editados ao instalà-las. 
- ```/turtlesim_mover/CMakeLists.txt``` é o arquivo de descrições sobre como empacotar e instalar o seu código para o sistema de *build* [CMake](https://cmake.org/). O ROS utiliza a ferramenta CMake para testar, empacotar e construir os softwares.
- ```/turtlesim_mover/src``` É a pasta onde ficarão os seus códigos-fonte.

Agora vamos compilar o nosso primeiro package para criar as pastas e arquivos de *build* na pasta raíz do nosso *workspace*:

```
$ cd ~/catkin_ws
$ catkin_make
```

Este comando irá construir todos os packages localizados na pasta ```~/catkin_ws/src```. Você poderá observar que na pasta raíz apareceram algumas pastas com arquivos e executáveis. Estes são os pacotes e dependências instalados pelo comando ```catkin_create_package```.

### 2. O código para mover a tartaruga

Agora vamos escrever o primeiro código de nosso package. O objetivo é fazer a instância ```turtle1``` de nosso simulador se mover em linha reta com os parâmetros que informarmos pelo terminal.

Dentro da pasta ```~/catkin_ws/src/turtlesim_mover/src``` crie um arquivo Python ```move_turtle.py```. Copie e cole o seguinte código no arquivo.

```py@line-numbers
#!/usr/bin/env python
import rospy
from geometry_msgs.msg import Twist

def move():
  # Starts a new node
  rospy.init_node('robot_mover', anonymous=True)
  velocity_publisher = rospy.Publisher('/turtle1/cmd_vel', Twist, queue_size=10)
  vel_msg = Twist()

  #Receiveing the user's input
  print("Let's move your robot")
  speed = input("Input your speed:")
  distance = input("Type your distance:")
  isForward = input("Foward?: ")#True or False

  #Checking if the movement is forward or backwards
  if(isForward):
    vel_msg.linear.x = abs(speed)
  else:
    vel_msg.linear.x = -abs(speed)
  #Since we are moving just in x-axis
  vel_msg.linear.y = 0
  vel_msg.linear.z = 0
  vel_msg.angular.x = 0
  vel_msg.angular.y = 0
  vel_msg.angular.z = 0

  while not rospy.is_shutdown():

    #Setting the current time for distance calculus
    t0 = rospy.Time.now().to_sec()
    current_distance = 0

    #Loop to move the turtle in an specified distance
    while(current_distance < distance):
      #Publish the velocity
      velocity_publisher.publish(vel_msg)
      #Takes actual time to velocity calculus
      t1=rospy.Time.now().to_sec()
      #Calculates distancePoseStamped
      current_distance= speed*(t1-t0)
    #After the loop, stops the robot
    vel_msg.linear.x = 0
    #Force the robot to stop
    velocity_publisher.publish(vel_msg)

if __name__ == '__main__':
  try:
    #Testing our function
    move()
  except rospy.ROSInterruptException: pass
```

Vamos à explicação do código:

```py
#!/usr/bin/env python
import rospy
from geometry_msgs.msg import Twist
```
1. Importamos a dependência [rospy](http://wiki.ros.org/rospy) e o tipo de message [Twist](http://docs.ros.org/en/jade/api/geometry_msgs/html/msg/Twist.html).

```py
def move():
  # Starts a new node
  rospy.init_node('robot_mover', anonymous=True)
  velocity_publisher = rospy.Publisher('/turtle1/cmd_vel', Twist, queue_size=10)
  vel_msg = Twist()
```
2. Iniciamos a definição da função ```move```, iniciamos um novo ```node```, registramos que o novo node publica no topic ```/turtle1/cmd_vel``` a mensagem de tipo ```Twist``` e iniciamos uma nova variável ```vel_msg``` do tipo correspondente.

```py
  #Receiveing the user's input
  print("Let's move your robot")
  speed = input("Input your speed:")
  distance = input("Type your distance:")
  isForward = input("Foward?: ")#True or False
```
3. Recebemos no terminal 3 entradas de informação: Velocidade, Distância e se o movimento é para frente ou para trás.

```py
  #Checking if the movement is forward or backwards
  if(isForward):
    vel_msg.linear.x = abs(speed)
  else:
    vel_msg.linear.x = -abs(speed)
```
4. Caso o movimento seja para frente, atribuir ao valor de ```vel_msg.linear.x``` o valor *absoluto* do ```speed``` recebido na forma positiva, caso contrário, na forma negativa.

```py
  #Since we are moving just in x-axis
  vel_msg.linear.y = 0
  vel_msg.linear.z = 0
  vel_msg.angular.x = 0
  vel_msg.angular.y = 0
  vel_msg.angular.z = 0
```
5. Atribuímos aos valores internos da variável ```vel_msg``` o valor de 0, pois nossa tartaruga se moverá apenas para frente.

```python
  while not rospy.is_shutdown():

    #Setting the current time for distance calculus
    t0 = rospy.Time.now().to_sec()
    current_distance = 0
```
6. Iniciamos um novo laço enquanto o processo do ```rospy``` ***não*** estiver encerrado para iniciar uma variável de tempo para calcular a distância do movimento da nossa tartaruga.

```py
    while(current_distance < distance):
      #Publish the velocity
      velocity_publisher.publish(vel_msg)
      #Takes actual time to velocity calculus
      t1=rospy.Time.now().to_sec()
      #Calculates distancePoseStamped
      current_distance= speed*(t1-t0)
```
7. Dentro do laço anterior, criamos outro laço para publicarmos o topic pelo ```velocity_publisher``` (linha 8) enquanto a distância atual não atingir a distância definida pela entrada do terminal. Pegamos a hora atual em segundos para calcularmos a velocidade e, em seguida definimos a variável ```current_distance``` com o cálculo utilizando os valores previamente definidos (```speed``` no input do terminal, ```t1``` na linha 40 e ```t0``` na linha 32)

```py
    #After the loop, stops the robot
    vel_msg.linear.x = 0
    #Force the robot to stop
    velocity_publisher.publish(vel_msg)
```
8. Paramos o robô após o *loop*, ou seja, quando a ```current_distance``` atingir a ```distance``` definida pela entrada do terminal.

```py
if __name__ == '__main__':
  try:
    #Testing our function
    move()
  except rospy.ROSInterruptException: pass
```
9. Por fim, executamos a nossa função ```move()``` (linha 5)

Vale lembrar que em ```Python``` os espaços anteriores de indentação de cada linha interferem na lógica da execução do seu código, portanto, preste bastante atenção na quantidade desses espaços em cada linha.

### 3. Tornando nosso código executável no Ubuntu

No Ubuntu, as regras padrão de permissão bloqueiam a execução de novos arquivos por questões de segurança. Portanto, você deverá permitir o atributo de execução do arquivo com ```chmod u+x``` no arquivo.

```
$ chmod u+x ~/catkin_ws/src/turtlesim_mover/src/move_turtle.py
```

Finalmente podemos testar o nosso package!

### 4. Testando o nosso primeiro Package

Após criar o nosso package, você precisará configurar as variáveis de ambiente (pelo comando ```source```) no terminal novamente, agora com as configurações do seu novo package.

Para isto, em toda nova aba do terminal, você terá que executar o comando:

```
$ source ~/catkin_ws/devel/setup.bash
```

Ou você pode configurar as variáveis de ambiente permanentemente no arquivo ```~/.bashrc``` (veja como na [postagem sobre instalação](/posts/about-ros/beginner-commands)).

Com as novas variáveis configuradas, abra um novo terminal e inicie o ```master```do ROS:

```
$ roscore
```

Inicie o node do simulador ```turtlesim``` em uma outra aba do terminal.

```
$ rosrun turtlesim turtlesim_node
```

Em outra aba, execute o código nosso package com ```rosrun```.

```
rosrun turtlesim_mover move_turtle.py
```

Insira os valores de ```speed, distance e Forward (True ou False com iniciais em maiúscula)``` quando solicitados e veja a tartaruga se mover com os valores informados!

![Turtle Move package](/static/images/rosrun-turtle-move.png '{"style":{"maxWidth" :"100%"}}')

Os valores informados quando solicitados ```input``` (linhas 13, 14 e 15) serviram como parâmetros para o movimento da tartaruga. Enquanto a distância percorrida atual não atingia a distância informada, o nosso node publicava no topic ```/turtle1/cmd_vel``` (linha 8) para que a nossa tartaruga andasse.

Você pode colocar novos ```inputs``` para atribuir valores a outras variáveis do nosso código para movimentar a nossa tartaruga de outras maneiras como forma de exercício e me enviar futuramente! Ficarei feliz em ver o seu código!

Vale lembrar que o *node* que geramos para publicar este comando fica registrado no *master* apenas durante sua execução. Quando ele encerra a sua função, ele se "desregistra" do master.

Você pode ver essa dinâmica pelo comando ```rosnode list``` durante sua execução e novamente após a sua execução (em uma nova aba do terminal).

---

## Conclusão

Esta é uma versão comentada e mais detalhada do tutorial da [página oficial do ROS Wiki](http://wiki.ros.org/turtlesim/Tutorials/Moving%20in%20a%20Straight%20Line). Procurei explicar todo o processo passo-a-passo, pois eu tive uma certa dificuldade em realizá-lo no começo.

Criamos o nosso workspace, construímos nosso package e escrevemos o nosso primeiro executável para comandar a tartaruga do Turtlesim.

Espero que esses 4 tutoriais que disponibilizei aqui te ajude a entender o Robot Operating System e te motive a se aprofundar cada vez mais no assunto. 

Acredito que esta seja uma área da robótica da qual não é muito bem explorada no Brasil e que ainda tem muito potencial para crescer.

Me envie uma mensagem no [twitter](https://twitter.com/gtoshinakano) caso queira fazer algum comentário, ficarei feliz em ouvir a sua opinião!

Um forte abraço.

Gabriel Toshinori Nakano

---

#### **Referências para esta Postagem**

- **Informações Úteis**
  - [Packages ROS](http://wiki.ros.org/Packages)
  - [Catkin ROS](http://wiki.ros.org/catkin)
  - [Catkin Tools](https://catkin-tools.readthedocs.io/en/latest/index.html)
  - [Tutorial sobre Packages](http://wiki.ros.org/turtlesim/Tutorials/Moving%20in%20a%20Straight%20Line)
  - [Tutorial sobre Packages 2](http://wiki.ros.org/turtlesim/Tutorials/Go%20to%20Goal)
  - [Comando catkin_make](https://wiki.ros.org/catkin/commands/catkin_make)
  - [CMakeLists.txt](http://wiki.ros.org/catkin/CMakeLists.txt)
  - [CMake](https://cmake.org/)





---

#### **Por favor, me corrija se eu estiver errado.**

É provável que eu tenha cometido enganos ou que eu não tenha encontrado a melhor forma para explicar os conceitos expostos aqui nesta página, portanto, peço para que entre em contato comigo para que você possa me ajudar a explicar melhor.

Meu email para contato é [gtoshinakano@gmail.com](mailto:gtoshinakano@gmail.com). Ficarei feliz em saber a sua opinião!