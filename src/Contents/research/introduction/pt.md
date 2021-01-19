---
title: Parrot Bebop - "Um pequeno e resistente quadrocóptero"
description: A strong, little quadcopter in need of better performance
keywords: Keys separated with commas
hero_alt: Hero alternative text
headline: Page's Headline
subheadline: Page's SubHeadline
cta: Call to Action
links:
  prevPage: 
    link: about-ros
    title: O que é ROS? Como funciona o Robot Operating System
  nextPage: 
    link: about-ros/beginner-commands
    title: Instalação e primeiros comandos no ROS

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

Com as baterias carregadas, podemos dar continuidade ao projeto.

---

## Rede Wi-Fi

O Bebop se conecta com o seu controlador por meio de sua rede Wi-Fi. 

Isto significa que ele possui uma placa de rede wireless que "cria um roteador" da qual permite a conexão com qualquer outro dispositivo que se conecta por Wi-Fi. 

![Parrot Connect](https://www.ntt-tx.co.jp/column/yasui_blog/img/20151202_drone_blog_04-02.png '{"style":{"float":"right"}}')

Dispositivos como, por exemplo, smartphones, tablets, notebooks e etc...

Quando você liga o seu Bebop, as ventoínhas de resfriamento iniciam e os motores das hélices se ativam após 5 segundos.

O sistema de resfriamento se paraliza uma vez e, quando as ventoínhas voltam a funcionar, o Wi-Fi do drone estará pronto para receber conexões.

Por padrão, o nome da rede de Wi-Fi aberta criada pelo drone é **BebopDrone-E000000** (uma numeração única).

Recomendo configurar uma senha de segurança WPA para seu drone para que outras pessoas não consigam se conectar a ele.

O endereço de IP local padrão do drone é **192.168.42.1** e utilizando [`telnet`](https://pt.wikipedia.org/wiki/Telnet) neste endereço você pode explorar o sistema de arquivos internos e extrair mídias de vídeo e fotos.

Utilizar o `telnet` não é a forma mais fácil de extrair arquivos de vídeo e imagem do drone. Se você só quiser extrair os vídeos de seu Bebop, você pode utilizar o próprio aplicativo Free Flight de seu smartphone.

Outra forma de fazer isso é se conectar por FTP nas portas padrões de ftp e é através deste protocolo que enviaremos o arquivo de missões MAVLINK mais para frente.

Por se tratar de uma conexão por rede de WiFi e possuir um sistema de arquivos relativamente simples, o Bebop se torna alvo fácil para hackers. 

Por isso não é um drone muito seguro para transportar mercadorias.

---

## GPS e Magnetômetro

O drone Bebop possui outros dois componentes que ajudam o ARDrone3 a se localizar. O módulo de GPS interno e o magnetômetro.

O primeiro é uma placa receptora de sinais de GPS da qual calcula a sua localização real com base nos dados obtidos pelos satélistes encontrados.

O segundo é um sensor da qual orienta o ARDrone3 sobre o ângulo e a direção real de onde o Bebop se encontra no momento.

O GPS não é tão útil para vôos *indoor* mas, para o nosso experimento, ele será fundamental.

Isso porque as missões MAVLINK - definidas com base em pontos de GPS - só são possíveis de ser realizadas no Bebop quando o seu estado de GPS estiver como "fixado".

O FixState no GPS do Bebop é um dos parâmetros necessários para que o Bebop possa realizar uma missão e é obtido quando o módulo de GPS encontra no mínimo 4 satélites disponíveis.

Quando o FixState for 1 ou *true*, o Bebop estará disponível para Missões, caso contrário(0 ou *false*), não.

A precisão do GPS depende de vários fatores como bloqueio de sinal, condições atmosférica e a qualidade do receptor. Os dados são mais apurados também quando o receptor estiver em movimento.

Portanto a melhor forma de atingir o GPS FixState é realizar vôos em locais com poucos prédios e montanhas e em dias com poucas núvens.

No caso do Bebop, a precisão que eu obtive foi de uma diferença de 1 a 4 metros e com o drone em movimento e de 4 a 6 metros de diferença em relação ao GPS do celular com o drone em repouso.

Nada mal para um drone pequeno da qual seus componentes devem ser menores para garantir uma boa experiência do seu usuário.

O outro componente crucial para o sucesso do experimento é o magnetômetro da qual precisa estar devidamente calibrado antes de levantar vôo.

O magnetômetro utiliza-se de campos magnéticos para detectar o seu real posicionamento e o ARDrone3 o interpreta em conjunto com a placa de GPS para determinar a disponibilidade para missões (GPSFixState).

![Calibrate Google Maps on Android](https://www.howtogeek.com/wp-content/uploads/2020/01/Google-Maps-Compass-Calibration.png '{"style":{"float" :"right", "maxWidth": "170px", "hidden":"mobile"}}')

Você se lembra de ter que calibrar a bússola do seu smartphone, no aplicativo do Google Maps para Android, para determinar precisamente para onde estava apontado o seu celular no mapa?

E então você tinha que fazer uma série de movimentos em forma de 8 com o smartphone para obter a sua real orientação pelo aplicativo.

No Bebop o processo segue o mesmo princípio, porém, existe um jeito correto de se fazer.

No início, eu fazia as rotações do Bebop de forma lenta pois queria evitar fazer movimentos bruscos para não danificar o drone. 

Mas isso não fazia com que o FixState do GPS ficasse *true*.

![Drone Calibration](/static/images/calibrate-drone.gif '{"style":{"maxWidth": "300px", "float": "left"}, "description": "Calibração do Magnetômetro do Bebop pelo aplicativo FreeFight Pro para IOS"}')

Pesquisando na internet, um [outro vídeo](https://youtu.be/V5-YMYb0MsI) me deu uma luz.

Como escrito na descrição do vídeo, a *"velocidade com que você faz a rotação parece fazer a diferença"* no processo de calibração.

Após aumentar a rapidez ao girar o drone com as mãos, deixei de ter problemas com o FixState do GPS.

Portanto essa pode ser uma solução caso você não esteja conseguindo atingir o FixState.

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

