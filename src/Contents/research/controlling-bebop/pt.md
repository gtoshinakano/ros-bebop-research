---
title: Parte 2 - Controlando o drone Bebop com ROS e Bebop Autonomy
description: A strong, little quadcopter in need of better performance
keywords: Keys separated with commas
hero_alt: Hero alternative text
headline: Page's Headline
subheadline: Page's SubHeadline
cta: Call to Action
links:
  prevPage: 
    link: /posts/research/installation
    title: Instalação e requisitos para a pesquisa
  nextPage: 
    link: /posts/research/reading-bebop
    title: Controlando o Bebop com ROS
---
## Antes de começar

Esta é uma continuação da [primeira parte deste tutorial](/posts/research/installation). Se você ainda não instalou o ROS Kinetic e o Bebop_Autonomy no seu Ubuntu você não conseguirá reproduzir as etapas que descrevo nesta parte.

Se você já o instalou e sabe como iniciar o Bebop Autonomy Driver, continue lendo para aprender a comandar o seu Bebop!

---

## Comandando o seu robô Bebop

Como expliquei no [Tutorial sobre ROS](/posts/about-ros), o Robot Operating System é um *meta sistema operacional* que cria um ambiente capaz de realizar o controle de robôs como sensores e máquinas. Para isso, ele utiliza-se do mecanismo *Publish/Subscribe* em topics para determinar as ações do seu robô.

Portanto, para enviar comandos ao drone Bebop, você precisará simplesmente publicar as mensagens corretas nos tópicos desejados.

Por exemplo, se você quiser enviar um comando para que o Bebop aterrisse, você só precisa publicar a mensagem correta no tópico responsável para que isso aconteça. 

Vamos à pratica para que possa aprender do início.

### Iniciando o ambiente

Para que o ambiente esteja pronto para receber e enviar comandos ao Bebop, você precisará do master iniciado e o node do ```/bebop_driver``` executando (com o Bebop conectado ao PC).

```
#1st Terminal
$ roscore

#2nd Terminal
$ roslaunch bebop_driver bebop_node.launch
```

Lembre-se de que o terminal precisa estar com as variáveis de ambiente configuradas - ```source ~/bebop_ws/devel/setup.bash``` - para que os comandos funcionem.

### Verificando os ```topics``` e seus tipos de ```message```

Com o Bebop_Autonomy iniciado, em outra aba do terminal você poderá visualizar os topics disponíveis para serem publicados ou inscritos:

```
$ rostopic list
```

Você receberá uma lista parecida com a seguinte:

```py
/bebop/autoflight/navigate_home
/bebop/autoflight/pause
/bebop/autoflight/start
/bebop/autoflight/stop
/bebop/bebop_driver/parameter_descriptions
/bebop/bebop_driver/parameter_updates
/bebop/camera_control
/bebop/camera_info
/bebop/cmd_vel
/bebop/fix
/bebop/flattrim
/bebop/flip
/bebop/image_raw
/bebop/image_raw/compressed
/bebop/image_raw/compressed/parameter_descriptions
/bebop/image_raw/compressed/parameter_updates
/bebop/image_raw/compressedDepth
/bebop/image_raw/compressedDepth/parameter_descriptions
/bebop/image_raw/compressedDepth/parameter_updates
/bebop/image_raw/theora
/bebop/image_raw/theora/parameter_descriptions
/bebop/image_raw/theora/parameter_updates
/bebop/joint_states
/bebop/land
/bebop/odom
/bebop/record
/bebop/reset
/bebop/set_exposure
/bebop/snapshot
/bebop/states/ardrone3/CameraState/Orientation
/bebop/states/ardrone3/GPSState/NumberOfSatelliteChanged
/bebop/states/ardrone3/MediaStreamingState/VideoEnableChanged
/bebop/states/ardrone3/PilotingState/AltitudeChanged
/bebop/states/ardrone3/PilotingState/AttitudeChanged
/bebop/states/ardrone3/PilotingState/FlatTrimChanged
/bebop/states/ardrone3/PilotingState/FlyingStateChanged
/bebop/states/ardrone3/PilotingState/NavigateHomeStateChanged
/bebop/states/ardrone3/PilotingState/PositionChanged
/bebop/states/ardrone3/PilotingState/SpeedChanged
/bebop/states/common/CommonState/BatteryStateChanged
/bebop/states/common/CommonState/WifiSignalChanged
/bebop/states/common/FlightPlanState/AvailabilityStateChanged
/bebop/states/common/FlightPlanState/ComponentStateListChanged
/bebop/states/common/MavlinkState/MavlinkFilePlayingStateChanged
/bebop/states/common/MavlinkState/MavlinkPlayErrorStateChanged
/bebop/states/common/OverHeatState/OverHeatChanged
/bebop/takeoff
/rosout
/rosout_agg
/tf
/tf_static
```

Esta é a lista de ```topics``` das quais os nodes registrados no master se inscrevem ou publicam. Isto significa que cada topic desta lista pode performar alguma ação no seu Bebop ou realizar alguma configuração nele.

Para utilizá-los corretamente e comandar o nosso Bebop, precisamos publicar uma ```message``` com o tipo correto compreendido pelo tópico.

Veja o tipo de message compreendido pelo topic ```/bebop/flip``` para realizar animações durante o vôo com o Bebop, por exemplo:

```
$ rostopic type /bebop/flip
```

O retorno será ```std_msgs/UInt8```. Para ver como devemos enviar os valores deste tipo de message, utilizamos:

```
$ rosmsg show std_msgs/UInt8
```

Você verá que os valores possíveis para este topic são números inteiros (UInt8) não sinalizados, ou seja, sem sinais de + (positivos) ou - (negativos) e de 8bits (de 0 a 255).

Este tipo numérico específico sugere a não necessidade de valores negativos ou de pontos flutuantes, portanto, qualquer valor nas condições acima servem.

Entretanto, para que o Bebop efetivamente entenda o comando e performe a animação, o topic deve ser publicado apenas com os números reconhecidos pelo ARDroneSDK. Como você pode ver [na documentação do Bebop Autonomy](https://bebop-autonomy.readthedocs.io/en/latest/piloting.html#flight-animations) só é possível realizar animações publicando os valores de 0 a 3.

> ***Valores possíveis para /bebop/flip***
> 
> 0: Girar frontalmente
>
> 1: Girar posteriormente
>
> 2: Girar à direita
>
> 3: Girar à esquerda.

Se você publicar o tópico com um destes valores, o Bebop entenderá o comando e realizará a animação. Caso contrário, o tópico será publicado, mas nada ocorrerá com o drone.

Este exemplo foi apenas para mostrar que, para publicar tópicos no ROS, você pode enviar a mensagem com valores que satisfaçam à condição do tipo da mensagem, porém, o robô pode não compreender o valor da mensagem e não performar nenhuma ação após isto.

Portanto, certifique-se, utilizando os comandos acima, sobre o tipo e o valor da mensagem sempre que precisar publicar nos ```topics```.

### Decolar e aterrissar o Bebop 

Vimos até agora que os topics registrados pelo node do ```bebop``` servem para enviarmos comandos, e que cada tópico possui o seu tipo de mensagem para que o comando seja compreendido corretamente pelo drone.

Agora vamos realizar o nosso primeiro vôo do Bebop controlado pelo ROS. Certifique-se de que você irá utilizar dois comandos, um para decolar e outro para aterrissar, portanto sugiro que copie o comando de aterrissar para usá-lo com maior facilidade.

Você poderá observar que o tipo de mensagem para ambos os comandos ```/bebop/takeoff``` e ```/bebop/land``` são do tipo ```std_msgs/Empty```, ou seja, o valor para a mensagem pode ser ***vazio***.

Para decolar, utilize:

```
$ rostopic pub --once /bebop/takeoff std_msgs/Empty
```

Para aterrissar, utilize:

```
$ rostopic pub --once /bebop/land std_msgs/Empty
```

A sintaxe correta para o comando de publicação de um topic no ROS é:

```py
$ rostopic pub [--once] [topic name] [msg type] [msg value]
```

- ```--once``` é opcional, e é um parâmetro que indica ao terminal que a publicação ocorrerá apenas uma vez e encerrará a execução logo em seguida.
- ```topic name``` é o nome do topic da qual deseja publicar
- ```msg type``` é necessário declarar o tipo de mensagem que se está publicando
- ```msg value``` o valor da mensagem publicada no topic e deve ser escrito na notação [YAML](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html).

Você verá que alguns tipos de messages possuem formas complexas como matrizes ou objetos complexos de chave e valor. Para estes casos, o valor da mensagem deve estar escrito no formato [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/).

### Controlando o Bebop

Como pode observar na lista de topics disponíveis com ```rostopic list``` existe um topic parecido com o topic responsável por [movimentar a tartaruga](/posts/about-ros/ros-with-turtle-bot) em nosso simulador.

O topic ```/bebop/cmd_vel``` é responsável por controlar a forma como o Bebop se move enquanto estiver flutuando. Pilotar o drone significa publicar mensagens neste tópico.

Veja o tipo de mensagem para este topic:

```py
linear.x  (+)      Translate forward
          (-)      Translate backward
linear.y  (+)      Translate to left
          (-)      Translate to right
linear.z  (+)      Ascend
          (-)      Descend
angular.z (+)      Rotate counter clockwise
          (-)      Rotate clockwise
```

Os valores possíveis para linear x, y, z e angular z são entre -1 e 1. Você pode saber com mais detalhes [nesta página](https://bebop-autonomy.readthedocs.io/en/latest/piloting.html#piloting), mas veja um exemplo de publicação:

```
$ rostopic pub --once /bebop/cmd_vel geometry_msgs/Twist '[1.0, 0.0, 0.0]' '[1.0]'
```

Este comando publicará a mensagem com os valores ```[linear.x 1.0; linear.y 0.0, linear.z 0.0] e [angular.z 1.0]'``` formatados como vetores em YAML para movimentar o Bebop. 

Como não é nada prático digitar este comando toda vez que for enviar um comando para pilotar o Bebop, existe um ótimo package que fará o trabalho duro para você. O [teleop_tools](http://wiki.ros.org/teleop_tools) publica as mensagens apenas com as direcionais do teclado. 

Vamos à instalação:

```
$ cd ~/bebop_ws/src
$ git clone https://github.com/ros-teleop/teleop_tools.git
```

Após clonar o repositório (TESTE)

Para iniciar o ```key_teleop```, utilize o seguinte comando:

```
$ rosrun key_teleop key_teleop.py
```

Este package fornece um node em Python que implementa um simples controle através do teclado. É um package muito útil para movimentar robôs quando não se tem um *joystick* por perto. 

Com ele só é possível enviar comandos linear.x e angular.z, mas será o suficiente para controlar o nosso drone. Com o Bebop flutuando, você pode testar pressionando as direcionais do teclado.

Agora que você pode controlar o Bebop através do teclado, vamos para a próxima etapa, que é [ler os dados do Bebop](/posts/research/reading-from-bebop)!

---

## Conclusão

Aqui iniciamos o nosso ambiente do ROS e iniciamos o Bebop Autonomy com o Bebop conectado ao PC.

Vimos que o Bebop Driver do Bebop Autonomy registra os topics para interagir com os recursos do drone e expliquei como fazer para ver o tipo da mensagem que deve ser publicada no topic.

Em seguida, decolamos e aterrissamos o drone com o comando ```rostopic pub``` nos respectivos topics.

E, por fim, instalamos o ```teleop_tools``` para nos ajudar a controlar o drone com maior facilidade utilizando as setas direcionais do teclado.

No próximo passo mostrarei como ler os dados das mensagens publicadas nos topics. Clique aqui para [continuar](/posts/research/reading-from-bebop)!

Um forte abraço

Gabriel Toshinori Nakano

---

#### **Referências**

- **Materiais Citados**
  - [Bebop_autonomy](https://bebop-autonomy.readthedocs.io/)
  - [Enviando comandos com Bebop_autonomy](https://bebop-autonomy.readthedocs.io/en/latest/piloting.html)
  - [Guia de YAML](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)
  - [Teleop_tools](http://wiki.ros.org/teleop_tools)




