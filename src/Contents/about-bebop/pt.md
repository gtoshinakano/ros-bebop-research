---
title: Parrot Bebop - "Um pequeno e resistente quadrocóptero"
description: A strong, little quadcopter in need of better performance
keywords: Keys separated with commas
hero_alt: Hero alternative text
headline: Page's Headline
subheadline: Page's SubHeadline
cta: Call to Action
---
## Conheça o drone utilizado para este projeto e saiba como evitar os problemas que me custaram dias

Deixa eu te lembrar do objetivo proposto por minha pesquisa contando rapidamente como a bolsa de estudos aconteceu.

Eu queria estudar sobre programação para IOT, conheci um professor de engenharia de produção que ministrava um laboratório de experiências com Drones, VRs e impressoras 3D e ele me propôs um estudo sobre drones.

> ##### E o professor me propôs..
> *"Criar um web service para controlar um drone com o objetivo de fazer entregas de delivery."*

Para isso, ele e a Universidade me disponibilizaram um drone Bebop 1 da marca francesa Parrot, um notebook i5 novinho, livros sobre Ubuntu e ROS (Robot Operating System).

Além de uma sala só para mim, com lousa, impressora, mesa de escritório e armários.

Sou muito grato por toda a estrutura disponibilizada para o meu período de pesquisa. Dificilmente conseguiria algo igual em condições parecidas no Brasil...

Mas deixando as comparações entre países de lado, apresento aqui as características deste drone relacionadas especificamente à proposta deste projeto.

Se você busca informações para comprar um drone, não se baseie neste conteúdo. Existem muitos bons sites na internet para isso.

Mas se você quiser aprender a controlar um drone pelo PC, entender o funcionamento do ROS e adquirir uma nova habilidade como programador, este conteúdo pode ser muito útil para você.

O conteúdo deste site tem objetivo educacional e você se responsabiliza por todas as ações tomadas com base nas informações aqui descritas.

---

## Parrot Bebop (Lançado em 2014)

![Parrot Bebop 1](https://cnet3.cbsistatic.com/img/sW0v4j97iS0_6AEJVFM3IdDBsJw=/940x0/2017/05/08/7b9f31e3-9a71-4435-9771-a66b4d1fa5a8/parrot-bebop-1-and-skycontroller.jpg '{"style":{"maxWidth" :"100%"},"description":"Parrot Sky Controller e o drone Bebop"}')

De um modo geral, o Bebop é um quadrocóptero compacto e leve, relativamente resistente e com peças possíveis de serem trocadas caso danificadas.

Ele possui integrado todos os componentes necessários para realizar o objetivo proposto, como placa de GPS, placa de rede Wi-Fi e um sistema interno que suporta a execução de missões de planos de vôos.

Além de possuir, é claro, uma ótima câmera de alta definição com estabilizador de imagem virtual entre outros recursos que o tornam um ótimo drone para quem está começando a se aventurar no mundo das imagens aéreas.

Pode ser controlado tanto por um controle remoto da própria marca Parrot, quanto por aplicativos controladores de drones - como o [Free Flight Pro](https://www.parrot.com/en/apps-and-services) - graças à conexão pela sua rede de Wi-Fi integrada.

Portanto qualquer um pode criar um aplicativo controlador para este drone seguindo os parâmetros [desta Documentação Oficial](https://developer.parrot.com/docs/SDK3/).

Aqui e nas páginas deste site irei explicar passo-a-passo como fiz para criar um controlador para este veículo pelo PC.

Quero deixar claro que o fato de eu ter usado este não significa que os mesmos passos não funcionarão com outros drones. 

Em outros drones, alguns passos terão nomes e recursos diferentes, mas a essência do controle por ROS é a mesma.

O meu foco é fazer você **entender como funciona o ROS e como eu o utilizei para criar um controlador** pelo computador.

Abaixo descrevo detalhes específicos a serem considerados para que você consiga realizar o projeto sem grandes problemas.

---

## Sistema Operacional Interno - ARDrone3

Começo falando sobre o sistema interno do Bebop responsável por controlar e gerenciar todos os componentes do drone - motores, sensores, câmera e etc. - que é o que nos permite realizar tudo o que precisamos.

Quando você tira o Bebop da caixa e começa a pilotá-lo, você perceberá que existe muita coisa acontecendo por trás do que você vê na tela do controlador.

Enquanto ele flutua no ar, o ARDrone3 calcula os dados recebidos por seus sensores para enviar a quantidade adequada de energia para seus motores para que o drone se mantenha no mesmo ângulo e na mesma altura em relação ao chão, por exemplo.

Tudo isso levando em consideração a força gravitacional, a força do vento e muitas outras variáveis.

O ARDrone3 é uma customização de um sistema baseado em UNIX (o mesmo de Linux e Android) e seu sistema de arquivos possui a arquitetura típica UNIX. 

Isso significa dizer que qualquer bom especialista em Linux pode entrar em seu sistema de arquivos e realizar alterações na forma como o drone se comporta internamente.

Portanto, para a finalidade de Delivery aplicada ao mundo real, o Bebop com configurações de fábrica não seria um drone muito seguro. Por conta disso e também de outros fatores da qual falarei mais adiante.

Porém, ele é uma ótima ferramenta para aprender sobre drones e realizar o nosso objetivo.

Felizmente, não nos aprofundaremos ao ponto de ter de alterar as configurações iniciais do drone.

Mas se você quiser saber mais sobre alterações possíveis de serem feitas em seu sistema de arquivos, [leia este documento](https://fargesportfolio.com/wp-content/uploads/2018/01/BeebopHackingGuide1_7_2.pdf) escrito por Farges Maelyss. 

Lembrando que **você é o responsável por qualquer dano causado em seu próprio drone** caso algo dê errado.

Continue lendo para aprofundar um pouco mais.

---

## Firmware Utilizado (4.0.6)

Uma das minhas dificuldades no início era entender a diferença entre o Firmware e o Sistema Operacional, pois ambos pareciam ser a mesma coisa.

A diferença é que o Firmware é um software ou um conjunto de softwares associados a um dispositivo de hardware que tem por objetivo armazenar e gerenciar a inicialização correta das rotinas de seus componentes eletrônicos.

Por sua vez, o Sistema Operacional é o software que utiliza-se dos firmwares para controlar e operar suas funções de uma forma unificada e programática.

É como se fosse uma orquestra com músicos instrumentistas e um maestro.

No caso do Bebop, cada sensor, placa de GPS, placa de rede e controlador de motores possui seu firmware, que são os músicos instrumentistas. 

E o sistema operacional ARDrone3 é o maestro que rege toda a orquestra.

Cada instrumento tem a sua própria partitura e sua forma de ser tocado. Isto, quem o faz, é o firmware.

O sistema operacional é o maestro que conhece cada um de seus músicos e os direciona para a execução correta da orquestra.

No Bebop, o Sistema Operacional e o Firmware são instalados em um pacote só, portanto você não precisa se preocupar em instalá-los separadamente.

O [último firmware pode ser baixado aqui](https://support.parrot.com/global/support/products/parrot-bebop) e instalado por um cabo USB ou você pode instalá-lo pelo próprio aplicativo do Free Flight Pro (este é o caminho mais fácil).

É importante ressaltar que, para que o seu drone funcione corretamente nas últimas versões de aplicativos, **é necessário que a última versão do firmware esteja instalada** nele.

Agora outros três aspectos importantes para você ter mais conhecimentos sobre o Bebop.

---

## Bateria, Performance e Carregador

Tempos atrás, quando jamais eu havia tocado em um drone antes, acreditava que os drones seriam o futuro de tudo.

Acreditei que seríamos capazes de mapear enormes fazendas para analisar produções agrícolas, fazer entregas automáticas de longas distâncias ou até perseguir bandidos sem correr o risco de ferir os nossos policiais...

Mas nunca tinha pensado que essas idéias seriam tão dificultadas por causa de um simples e crucial fator. A **tecnologia das baterias**.

Certa vez eu li na internet um dado interessante que comparava as evoluções nas tecnologias das baterias e dos processadores. 

O artigo dizia que as baterias evoluiam tecnologicamente em progressão aritmética, ao passo que, os processadores evoluíam em progressão geométrica.

![Battery Evolution from Battery University](/static/images/battery-improvements.png '{"style":{"maxWidth" :"100%"},"description":"Melhoramentos das baterias e de outras tecnologias- fonte: batteryuniversity.com"}')

Isso quer dizer, por exemplo, que enquanto novos processadores são desenvolvidos rapidamente, baterias melhores e com mais capacidade não seguem o mesmo ritmo de desenvolvimento, embora o esforço de ambas as indústrias seja o mesmo.

Podemos dizer, então, que um grande desafio da tecnologia de drones - da qual demanda de certa quantidade de energia - é a atual capacidade das baterias e a sua dificuldade de evolução.

É claro que drones mais modernos e mais caros possuem baterias com capacidades para percorrer maiores distâncias e aguentar maiores pesos.

No entanto, as baterias do Bebop e de drones da mesma categoria não aguentam muito mais que o seu próprio peso e 11 minutos de tempo de vôo.

Isso impossibilita a sua utilização a nível ideal neste projeto, porém é o suficiente para realizarmos o nosso experimento e aprendermos com ele.

### Solução no carregamento das baterias do Bebop

![Bateria não carregando](/static/images/battery-not-charging.gif '{"style":{"float" :"left"},"description":"Se o LED piscar no carregador após alguns segundos, a bateria não estará carregando"}')

Quando eu tirei o Bebop da caixa, não consegui carregar as baterias. De 8 a 10 segundos após colocar o carregador na tomada, seu LED vermelho apenas piscava continuamente.

Solicitei outro carregador ao professor mas, mesmo assim, no novo carregador acontecia o mesmo.

Pesquisei por um bom tempo na internet e a resposta veio por meio deste vídeo do [Youtube](https://www.youtube.com/watch?v=dfUOAMwQCKM).

Entendi que, com o tempo sem utilização, as baterias descarregam gradativamente e atingem a um nível de carga onde o carregador não as reconhece quando conectadas a ele.

Aparentemente é um gatilho de segurança presente nesses carregadores para detectar baterias impossibilitadas de funcionar ou com defeitos.

A solução, como demonstrada no vídeo, é enviar uma carga elétrica de outra fonte elétrica para a bateria por alguns segundos e, rapidamente, colocá-la no carregador de fábrica.

Relatei ao meu professor sobre o problema e ele providenciou uma fonte de alimentação reguladora e um multímetro.

Fizemos de forma parecida com o vídeo e funcionou!

![Bateria carregando](/static/images/battery-charging.gif '{"style":{"float" :"right"},"description":"O LED contínuo após alguns segundos significa que a bateria está carregando!"}')

Depois de algumas tentativas fazendo exatamente como no vídeo, o LED vermelho parou de piscar, indicando que o carregador reconheceu a bateria e a estava carregando.

Portanto se você está com problemas em carregar a bateria de seu Bebop, este procedimento pode ser uma solução. 

Mas tenha o máximo de cuidado com os riscos de choque elétrico e de incêndio que isto pode causar.

Com as baterias carregadas, pude dar continuidade ao projeto.

---

## Rede Wi-Fi

O Bebop se conecta com o seu controlador por meio de sua rede Wi-Fi. 

Isto significa que ele possui uma placa de rede wireless que cria um "roteador" da qual permite a conexão com qualquer outro dispositivo que se conecta por Wi-Fi. 

![Parrot Connect](https://www.ntt-tx.co.jp/column/yasui_blog/img/20151202_drone_blog_04-02.png '{"style":{"float":"right"}}')

Dispositivos como, por exemplo, smartphones, tablets, notebooks e etc...

Quando você liga o seu Bebop, as ventoínhas de resfriamento iniciam e os motores das hélices se ativam após 5 segundos.

O sistema de resfriamento se paraliza uma vez e, quando as ventoínhas voltam a funcionar, o Wi-Fi do drone estará pronto para novas receber conexões.

Por padrão, o drone cria uma nova rede de Wi-Fi pública com o nome **BebopDrone-E000000** (Numeração única)

Você pode configurar uma senha de segurança WPA para seu drone para que outras pessoas não consigam se conectar a ele.

O endereço de IP local padrão do drone é **192.168.42.1** e utilizando [`telnet`](https://pt.wikipedia.org/wiki/Telnet) neste endereço você pode fazer alterações no sistema de arquivos e extrair mídias de vídeo e fotos.

Utilizar o `telnet` não é a forma mais fácil de extrair arquivos de vídeo/imagem do drone. Se você só quiser extrair os vídeos de seu Bebop, você pode utilizar o próprio aplicativo Free Flight de seu smartphone.

Outra forma de fazer isso é se conectar por FTP na porta XX e XX.








---

## Conclusão

Este guia o ajudou a lidar com o Bebop para reproduzir o projeto de criação de serviço de delivery por drones.

Como requisitos práticos para continuidade no projeto, você precisará de:
1. Firmware atualizado em seu Bebop
2. Baterias funcionais

Contei os desafios que encontrei nesta jornada e os motivos deste drone não ser o ideal para um projeto de delivery real, porém é um ótimo objeto para estudos.





---

#### **Por favor, me corrija se eu estiver errado.**

É provável que eu tenha cometido algum engano ou que eu não tenha usado a melhor forma para explicar os conceitos expostos aqui nesta página, portanto, peço para que entre em contato comigo para que você possa me ajudar a explicar melhor.

Meu email para contato é [gtoshinakano@gmail.com](mailto:gtoshinakano@gmail.com). Ficarei feliz em saber a sua opinião!