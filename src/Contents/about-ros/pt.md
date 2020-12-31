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
  - link: about-ros/turtle-bot
    title: Entendendo ROS com o Turtle Simulator
  - link: about-ros/with-python
    title: Programando para ROS com Python
---
## Entendendo os Robôs - Pense em um robô como sendo uma pessoa

Para entender como funciona o Robot Operating System vamos supor que um robô seja um ser humano.

Ele possui partes como mãos, braços, pernas e o cérebro é quem controla tudo de forma perfeita e sincronizada.

O cérebro humano é um órgão que funciona de forma instintiva, porém, o cérebro de um robô funciona de forma programática e calculada.

Para uma simples tarefa, como por exemplo levantar um objeto, o cérebro humano envia instintivamente a quantidade de energia necessária para os braços e as mãos, com o intuito de erguer o objeto de forma suave e sem movimentos bruscos.

O cérebro de um robô precisa ser programado para realizar o mesmo efeito ao erguer um objeto.

![I must be a robot then](https://media4.giphy.com/media/S0hxMGYFhEMzm/200.gif '{"style":{"maxWidth":"40%","float":"right"},"description":"Sim, somos praticamente robôs super avançados e com um sistema de controle - quase - perfeito"}')

Ele precisa conhecer o peso do objeto, calcular a quantidade de energia necessária para levantá-lo com seus braços mecânicos, para assim então, enviar os comandos corretos e erguer de forma suave e sem realizar movimentos bruscos.

O cérebro humano é tão magnífico que, para todo tipo de tarefa mecânica, utiliza inconscientemente de infinitas variáveis em seus cálculos.

Você não pensa conscientemente no ângulo correto para inclinar a sua coluna para se equilibrar ao levantar uma caixa de 10kg, por exemplo. É tudo instintivamente calculado pelo seu cérebro.

Já sistemas operacionais de robôs precisam ter previamente programados os comportamentos diante das tarefas a serem executadas, levando em consideração dados de sensores, limitações mecânicas, especificações de fábrica dos componentes e muitas outras variáveis relacionadas.

![Gundam](https://31.media.tumblr.com/b60eb3179227a561106516e53555a168/tumblr_nov7x572rH1u3lccdo1_500.gif '{"style": {"maxWidth":"50%", "float":"left"},"description":"Sim, seria muito louco se eles existissem."}')

Por isso AINDA não temos robôs funcionais como Gundams ou EVAs dos animes japoneses.

Seriam necessárias centenas de pessoas para programar o funcionamento de cada parte mecânica do robô, um sistema que sincronizaria tudo de forma milimétrica para manter o equilíbrio durante os movimentos e milhares de horas de testes e simulações. 

Além de milhões de dólares para o projeto... 

Obviamente, quase todos os robôs não se parecem com seres humanos. Podemos considerar pequenos sensores de torneiras ou grandes máquinas industriais como robôs.

Porém, o funcionamento pode ser entendido fazendo uma analogia ao funcionamento de um cérebro humano e essa será a forma como irei explicar mais adiante.

---

## O problema no aprendizado da robótica

Dois alunos doutorandos da Universidade de Stanford trabalhavam no laboratório de robótica quando perceberam que havia uma certa dificuldade no aprendizado de outros estudantes.

> *"Enquanto trabalhavam em robôs para realizar tarefas de manipulação em ambientes humanos, os dois alunos notaram que muitos de seus colegas tinham seu progresso atrasado pela natureza diversa da robótica: um desenvolvedor de software poderia não ter o conhecimento de hardware necessário, alguém que trabalha no estado-da-arte em planejamemento de rotas poderia não ter conhecimentos em visão computacional, por exemplo. Para remediar essa situação , os dois estudantes se propuseram a fazer um sistema base, que proveria um ponto de partida para todos na academia trabalharem em cima."*
>
> [Robot Operating Sistem - Wikipedia](https://pt.wikipedia.org/wiki/Robot_Operating_System)

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

![Panda eating bamboo](https://media3.giphy.com/media/jenIWU63oKK0o/giphy.gif)

Ursos panda só se alimentam de bambus. Na verdade 1% de sua alimentação pode ser através de outras fontes de alimento como ovos e insetos.

No entanto, bambus são a dieta principal deste urso. Ele pode chegar a comer incríveis 40kg de bambu por dia. Seu habitat natural deve ser um grande bambuzal para que possa sobreviver.

Este ecossistema deve possuir o solo, a umidade, a temperatura ideais para que haja bambu em abundância para que os pandas se alimentem. Se você soltar um panda no deserto, ele não sobrevive.

Então podemos dizer que **pandas não funcionam e não se desenvolvem** em ambientes desertos.

Este papo sobre pandas e ecossistema foi a melhor maneira que eu encontrei para ilustrar a essência do ROS de forma simples.

Para se criar um robô complexamente integrado, onde suas partes robóticas podem comunicar entre si e ter diversos centros de controle integrados, é necessário ter um ambiente que permite fazer isso.

O Robot Operating System é um sistema operacional propriamente dito que roda em Linux e cria um ecossistema capaz comandar partes robóticas, realizar abstrações de componentes, simulações e leituras de sensores.

Dando exemplos mais práticos, em um PC com ROS você pode conectar um controle de Playstation 4 e utilizá-lo para controlar um drone. Você pode também programar diferentes comportamentos de partes mecânicas de um robô, como por exemplo as ventoinhas de resfriamento, de acordo com os dados vindos de seu termômetro digital interno.

Então, podemos dizer que **robôs podem funcionar e ser desenvolvidos** em ambientes ROS, pois ele foi criado para esta finalidade.

Portanto, é o ambiente completo para quem deseja programar e comandar robôs de todos os portes e as possibilidades são ilimitadas graças à vasta quantidade de ferramentas desenvolvidas pela comunidade de seus usuários.

---

## Como funciona o ROS?

Como falei anteriormente, o Robot Operating System funciona apenas em sistemas operacionais Linux. Infelizmente, as versões para outros sistemas operacionais não são completos ou não funcionam como deveriam, por isso recomendo que utilizem o ROS no Ubuntu.



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

- **Materiais Oficiais da Parrot**
  - [Parrot Oficial](https://www.parrot.com/us)
  - [Documentação ARSDK3](https://developer.parrot.com/docs/SDK3/)
  - [Fórum Desenvolvedores Parrot](https://forum.developer.parrot.com/search?q=%23drone-sdk%3Abebop)
  - [Último Firmware](https://support.parrot.com/global/support/products/parrot-bebop)
- **Hackeando o Bebop (*use por responsabilidade própria*)**
  - [Guia Completo](https://fargesportfolio.com/wp-content/uploads/2018/01/BeebopHackingGuide1_7_2.pdf)
  - [Conectividade do Bebop](https://academic.csuohio.edu/yuc/mobile/GPS-Knocking-My-Neighbors-Kid-Drone-compressed.pdf)
- **Aplicativos**
  - [Free Flight Pro](https://www.parrot.com/en/apps-and-services)
- **Aprofundamento teórico**
  - [GPS Básico](https://learn.sparkfun.com/tutorials/gps-basics/all)
  - [A Evolução das Baterias](https://batteryuniversity.com/learn/article/bu_002_introduction?__cf_chl_jschl_tk__=325d822606f3484bc6647f799e9103fe61bcff2a-1608871331-0-Ac_smOk31ZI5uA8HJ-LfKY4PlJxaIF6nSAZWQWhuVR9b7XbRZgFcr0FMa0VZUtL2m2zOn-_HL3Hv-T48QGINdFf7IwQmen_MdmPPsRsEMkhc2uzlgrAdbu9AHoZZLnOs45FRPwI4xoFXBsaQOdT0HJQwqzMnimEZbx_hHKBhqzgGXQxUcg5y8qJ9TiP_gX2K5WzfCqeCvA0rsd2cjIf40WvmFtMANvVQMEh3isbl3JcjjWD7QGAFShscDomuLi65l9UcapnHwsgMgW8hwZ7RTantci6C_uhNTOYBGLiXFTYuwH9lXQ0GNctQBaPMaJvaK6LqArDdiIOImBEizXJ3to1cRMei1AGndcMT6CiV1qEO)
  - [Telnet](https://www.ionos.com/digitalguide/server/tools/telnet-the-system-wide-remote-protocol/)
- **Vídeos Citados (*faça por responsabilidade própria*)**
  - [Resolvendo o problema de carregamento da bateria](https://www.youtube.com/watch?v=dfUOAMwQCKM)
  - [Calibração Correta](https://youtu.be/V5-YMYb0MsI)







---

#### **Por favor, me corrija se eu estiver errado.**

É provável que eu tenha cometido enganos ou que eu não tenha encontrado a melhor forma para explicar os conceitos expostos aqui nesta página, portanto, peço para que entre em contato comigo para que você possa me ajudar a explicar melhor.

Meu email para contato é [gtoshinakano@gmail.com](mailto:gtoshinakano@gmail.com). Ficarei feliz em saber a sua opinião!