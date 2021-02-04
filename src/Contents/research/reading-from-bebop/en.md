---
title: Parte 3 - Lendo os dados do Bebop através do ROS
description: A strong, little quadcopter in need of better performance
keywords: Keys separated with commas
hero_alt: Hero alternative text
headline: Page's Headline
subheadline: Page's SubHeadline
cta: Call to Action
links:
  prevPage: 
    link: /posts/research/controlling-bebop
    title: Controlando o Bebop com ROS
  nextPage: 
    link: /posts/research/bebop-gps
    title: GPS do Bebop
---

This page hasn't been translated yet.

---

## Antes de começar

Esta é uma continuação da [segunda parte deste tutorial](/posts/research/controlling-bebop). 

Se você já o instalou o teleop_tools e sabe como o iniciar, continue lendo para aprender a ler os dados do seu Bebop!

---

## Ler os topics publicados no ROS

Você já deve ter entendido que os comandos em ROS acontecem através de publicações de topics, onde nodes interessados performam alguma ação quando os topics são publicados com o tipo de mensagem correto.

Para ver as mensagens publicadas, utilizamos o comando ```rostopic echo``` exatamente como explicado no item 5 do [tutorial sobre ROS com Turtle Simulator](/posts/about-ros/ros-with-turtle-bot).

Você deve apenas fornecer o nome do topic da qual deseja ler e todas as mensagens publicadas serão exibidas. Vamos a um exemplo de uso:

```
$ rostopic echo /bebop/cmd_vel
```

Em seguida, execute o ```key_teleop``` do ```teleop_tools``` (caso ainda não tenha sido feito em outro terminal):

```
$ rosrun key_teleop key_teleop.py
```

* *Lembre-se que o topic ```/bebop/cmd_vel``` só estará disponível caso o PC esteja conectado ao Bebop e com o node do Bebop driver executando.*

Como pode observar, o ```key_teleop``` publicará as mensagens no topic sempre que você utilizar as direcionais do teclado para pilotar o Bebop. No terminal em que você utilizou o ```rostopic echo``` serão exibidas todas as mensagens publicadas.

No item 1.3 da [documentação oficial sobre o rostopic](http://wiki.ros.org/rostopic) você poderá ver todas as opções possíveis para o comando exibir as mensagens de forma diferente (como filtrar resultados, limpar o terminal à cada mensagem publicada, salvar as mensagens num arquivo de log e etc). 

Desta forma você pode rastrear as mensagens publicadas nos topics para encontrar *bugs* e maus funcionamentos. Você pode procurar por um topic específico exibido pelo ```rostopic list``` e ver as mensagens publicadas.

Vale destacar que não só nodes controladores publicam mensagens em tópicos. O próprio Bebop driver publica em tópicos quando recebe certas informações do drone. Informações como, por exemplo, a quantidade de satélites encontrados pelo sensor de GPS, o nivel de bateria e entre outros, são enviados pelo próprio drone.

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




