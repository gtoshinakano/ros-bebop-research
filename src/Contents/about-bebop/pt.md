---
title: Parrot Bebop - "Um pequeno e resistente quadrocóptero"
description: A strong, little quadcopter in need of better performance
keywords: Keys separated with commas
hero_alt: Hero alternative text
headline: Page's Headline
subheadline: Page's SubHeadline
cta: Call to Action
---
## Conheça o drone utilizado para este projeto e saiba como evitar problemas (que me custaram um bom tempo)

Deixa eu te lembrar do objetivo proposto por minha pesquisa contando rapidamente como a bolsa de estudos aconteceu.

Eu queria estudar sobre programação para IOT, conheci um professor de engenharia de produção que ministrava um laboratório de experiências com Drones, VRs e impressoras 3D , da qual me propôs um estudo sobre drones.

> ##### O objetivo proposto
> *"Criar um web service para controlar um drone com o objetivo de fazer entregas de delivery."*

Para isso, ele e a Universidade me disponibilizaram um drone Bebop 1 da marca francesa Parrot, um notebook i5 novinho, livros sobre Ubuntu e ROS (Robot Operating System).

Além de uma sala só para mim, com lousa, impressora, mesa de escritório e armários.

Sou muito grato por toda a estrutura disponibilizada para o meu período de pesquisa. Dificilmente conseguiria algo igual em condições parecidas no Brasil...

Mas deixando as comparações entre países de lado, apresentarei aqui algumas características técnicas sobre este drone, falando especificamente sobre aspectos relacionados ao objetivo deste projeto.

Se você busca informações para comprar um drone, aqui não é o lugar para você utilizar como referência. Existem muitos outros bons sites na internet para isso.

Mas se você quiser aprender a se conectar com um drone pelo PC e controlá-lo, aprender sobre ROS e adquirir uma nova habilidade como programador, este conteúdo pode ser muito útil para você.

---

## Parrot Bebop (Lançado em 2014)

![Parrot Bebop 1](https://cnet3.cbsistatic.com/img/sW0v4j97iS0_6AEJVFM3IdDBsJw=/940x0/2017/05/08/7b9f31e3-9a71-4435-9771-a66b4d1fa5a8/parrot-bebop-1-and-skycontroller.jpg '{"style":{"maxWidth" :"100%"},"description":"Parrot Sky Controller e o drone Bebop"}')



De um modo geral, o Bebop é um quadrocóptero compacto e leve, relativamente resistente e com peças possíveis de serem trocadas caso danificadas.

Ele possui integrado todos os componentes necessários para realizar o nosso objetivo, como placa de GPS, placa de rede Wi-Fi e um sistema interno que suporta a execução de missões de planos de vôos.

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

Começarei falando sobre o sistema interno do Bebop responsável por controlar e gerenciar todos componentes do drone - motores, sensores, câmera e etc. - que é o que nos permite realizar tudo o que precisamos.

Quando você tira o Bebop da caixa e começa a pilotá-lo, você perceberá que existe muita coisa acontecendo por trás do que você vê na tela do controlador.

Enquanto ele flutua no ar, o ARDrone3 calcula os dados recebidos por seus sensores para enviar a quantidade adequada de energia para seus motores para que o drone se mantenha no mesmo ângulo e na mesma altura em relação ao chão, por exemplo.

Tudo isso levando em consideração a força gravitacional, a força do vento e muitas outras variáveis mais.

O ARDrone3 é uma customização de um sistema baseado em UNIX (o mesmo de Linux e Android) e mantém a arquitetura típica UNIX em seu sistema de arquivos. 

Isso significa dizer que qualquer bom especialista em Linux pode entrar em seu sistema de arquivos e realizar alterações na forma como o drone se comporta internamente.

Portanto, praticamente para a finalidade de Delivery, o Bebop com configurações de fábrica não seria um drone seguro por conta disso e de outros fatores das quais falarei mais adiante.

Porém, é uma ótima ferramenta para aprender sobre drones e realizar o nosso objetivo.

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

O sistema operacional é o maestro que conhece cada um de seus músicos e os direciona para a execução da orquestra.

No Bebop, o Sistema Operacional e o Firmware são instalados em um pacote só, portanto você não precisa se preocupar em instalá-los separadamente.

O [último firmware pode ser baixado aqui](https://support.parrot.com/global/support/products/parrot-bebop) e instalado por um cabo USB ou você pode instalá-lo pelo próprio aplicativo do Free Flight Pro (caminho mais fácil).

É importante ressaltar que, para que o seu drone funcione corretamente, **é necessário que a última versão do firmware esteja instalada** nele.

Agora outros três aspectos importantes para você ter mais conhecimentos sobre o Bebop.

---

## Bateria, Performance e Carregador

Tempos atrás, quando jamais eu havia tocado em um drone antes, acreditava que os drones seriam o futuro de tudo.

Acreditei que seríamos capazes de mapear enormes fazendas para analisar produções agrícolas, fazer entregas automáticas de longas distâncias ou até perseguir bandidos sem correr o risco de ferir os nossos policiais...

Mas nunca tinha pensado que essas idéias seriam tão dificultadas por causa de um simples e crucial fator. A **baixa capacidade das baterias**.

É claro que drones mais modernos e mais caros possuem baterias com maiores capacidades para fazer maiores distâncias e aguentar maiores pesos.

No entanto, as baterias do Bebop e de outros drones da mesma categoria, não aguentam muito mais que 11 minutos de tempo de vôo. ;(

Isso impossibilita a sua utilização para o ideal deste projeto, mas é o suficiente para realizarmos o nosso experimento e aprendermos com ele.

Quando eu tirei o Bebop da caixa, não consegui carregar as baterias. Após colocar na tomada, o LED vermelho do carregador só piscava continuamente.

Solicitei outro carregador ao professor mas, mesmo assim, no novo carregador acontecia o mesmo.

Pesquisei por um bom tempo na internet e a resposta veio em um simples vídeo do [Youtube](https://www.youtube.com/watch?v=dfUOAMwQCKM).

Entendi que, com o tempo sem utilização, as baterias descarregam gradativamente e chegam a um nível de carga onde o carregador não as reconhece quando conectadas a ele.

Aparentemente é um gatilho de segurança presente nesses carregadores para detectar baterias impossibilitadas de funcionar ou com defeitos.

A solução, como demonstrada no vídeo, é enviar uma carga elétrica de outra fonte elétrica para a bateria por alguns segundos e, rapidamente, colocá-la no carregador de fábrica.

Relatei ao meu professor sobre o problema e ele trouxe uma fonte de alimentação reguladora e um multímetro para a minha sala de pesquisa.

Fizemos de forma parecida com o vídeo e funcionou!

Depois de algumas tentativas fazendo exatamente como no vídeo, o LED vermelho parou de piscar, indicando que o carregador reconheceu a bateria e a estava carregando.

Portanto se você está com problemas com a bateria de seu Bebop, este procedimento pode ser uma solução. 

Mas tenha o máximo de cuidado com os riscos de choque elétrico e de incêndio que isto pode causar.

Com as baterias carregadas, pude dar continuidade ao projeto.

---

## Rede Wi-Fi

