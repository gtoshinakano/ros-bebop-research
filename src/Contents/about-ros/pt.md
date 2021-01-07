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

![I must be a robot then](https://media4.giphy.com/media/S0hxMGYFhEMzm/200.gif '{"style":{"maxWidth":"50%","float":"right"},"description":"Sim, somos praticamente robôs super avançados e com um sistema de controle - quase - perfeito"}')

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
> [ROS Concepts - ros.org](http://wiki.ros.org/ROS/Concepts)

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

- **ROS.org**
  - [ROS Concepts](http://wiki.ros.org/ROS/Concepts)
  - [ROS Nodes](http://wiki.ros.org/Nodes)
  - [ROS2 Nodes](https://index.ros.org/doc/ros2/Tutorials/Understanding-ROS2-Nodes/)
  - [ROS Nameservice](http://wiki.ros.org/Names)
  - [Último Firmware](https://support.parrot.com/global/support/products/parrot-bebop)
- **Outras Referências**
  - [Wikipedia](https://pt.wikipedia.org/wiki/Robot_Operating_System)


- **Aprofundamento teórico**
  - [GPS Básico](https://learn.sparkfun.com/tutorials/gps-basics/all)
  - [A Evolução das Baterias](https://batteryuniversity.com/learn/article/bu_002_introduction?__cf_chl_jschl_tk__=325d822606f3484bc6647f799e9103fe61bcff2a-1608871331-0-Ac_smOk31ZI5uA8HJ-LfKY4PlJxaIF6nSAZWQWhuVR9b7XbRZgFcr0FMa0VZUtL2m2zOn-_HL3Hv-T48QGINdFf7IwQmen_MdmPPsRsEMkhc2uzlgrAdbu9AHoZZLnOs45FRPwI4xoFXBsaQOdT0HJQwqzMnimEZbx_hHKBhqzgGXQxUcg5y8qJ9TiP_gX2K5WzfCqeCvA0rsd2cjIf40WvmFtMANvVQMEh3isbl3JcjjWD7QGAFShscDomuLi65l9UcapnHwsgMgW8hwZ7RTantci6C_uhNTOYBGLiXFTYuwH9lXQ0GNctQBaPMaJvaK6LqArDdiIOImBEizXJ3to1cRMei1AGndcMT6CiV1qEO)
  - [Telnet](https://www.ionos.com/digitalguide/server/tools/telnet-the-system-wide-remote-protocol/)
- **Vídeos Citados (*faça por responsabilidade própria*)**
  - [Resolvendo o problema de carregamento da bateria](https://www.youtube.com/watch?v=dfUOAMwQCKM)
  - [Calibração Correta](https://youtu.be/V5-YMYb0MsI)

---