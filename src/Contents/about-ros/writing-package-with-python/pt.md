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

Os packages em ROS são criados pela ferramenta de construção de pacotes chamada [Catkin](http://wiki.ros.org/catkin/conceptual_overview). Com ela é possível iniciar um novo *Workspace*(espaço de trabalho), informar as dependências(os packages da qual seu package depende para funcionar) internas e externas de seu package e compilar o seu código para execução e exportação.

Para iniciarmos o nosso workspace, abra o terminal e digite os comandos a seguir:

```
$ cd ~/catkin_ws/src
$ catkin_create_pkg turtlesim_cleaner geometry_msgs rospy
```

O comando ```cd ~/catkin_ws/src``` 

Isto irá criar um workspace com a seguinte estrutura de arquivos:

- 
- 
- 
- 
- 
- 
- 

**explicação da estrutura**

Agora vamos compilar o nosso *workspace* para 

---


---

## Conclusão

Procurei escrever este guia para que qualquer pessoa leiga em tecnologia pudesse conhecer alguns aspectos técnicos do Bebop Drone necessários para a reprodução deste projeto.

Embora o Bebop não seja um veículo perfeito para reproduzir o projeto de criação de serviço de delivery, ele possui as características principais necessárias para esta finalidade.

Portanto é um ótimo drone para você realizar imagens aéreas, controlá-lo por GPS e se aprofundar no mundo dos drones.

Resumindo as dicas que dei aqui em forma de lista:

1. Atualize o Firmware do seu Bebop pelo aplicativo FreeFlight Pro
2. Caso tenha problemas com o carregamento de suas baterias, tente fazer o que o autor [deste vídeo](https://www.youtube.com/watch?v=dfUOAMwQCKM) faz
3. Coloque uma senha WPA na rede de WiFi do seu drone para evitar que outros se conectem e tentem atrapalhá-lo.
4. Faça a calibração correta do magnetômetro realizando a rotação do drone com maior rapidez.

Espero que este material lhe seja útil para solucionar problemas em seu Bebop e que você consiga realizar este experimento.

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
  - [Rqt_graph em detalhes](https://roboticsbackend.com/rqt-graph-visualize-and-debug-your-ros-graph/)
  - [Todos os comandos de terminal](http://wiki.ros.org/ROS/CommandLineTools)





---

#### **Por favor, me corrija se eu estiver errado.**

É provável que eu tenha cometido enganos ou que eu não tenha encontrado a melhor forma para explicar os conceitos expostos aqui nesta página, portanto, peço para que entre em contato comigo para que você possa me ajudar a explicar melhor.

Meu email para contato é [gtoshinakano@gmail.com](mailto:gtoshinakano@gmail.com). Ficarei feliz em saber a sua opinião!