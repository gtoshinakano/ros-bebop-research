---
title: Parrot Bebop - "A small and resistent drone"
description: A strong, little quadcopter in need of better performance
keywords: Keys separated with commas
hero_alt: Hero alternative text
headline: Page's Headline
subheadline: Page's SubHeadline
cta: Call to Action
---
## Bebop 1 - The drone for this research

### Learn how to avoid the problems that took me days to solve!

Let me remind you of the research proposal by briefly telling how the scholarship happened.

I wanted to study programming for IOT, I met a professor of production engineering responsible for a lab with Drones, VRs and 3D printers and he proposed a study on drones.

> ##### And the professor proposed..
> *"To create a web service to control a drone in order to simulate a delivery service system."*

In order to accomplish that, the University provided me with a Bebop 1 drone from the French brand Parrot, a brand new i5 notebook, books on Ubuntu and ROS (Robot Operating System).

In addition, a room just for me, with a blackboard, a printer, a desk and cabinets.

I am very grateful for the structure they provided for my research. It would be difficult to achieve anything similar in similar conditions in Brazil...

But leaving the comparisons between countries aside, I'll introduce here the characteristics of this drone related specifically to the proposal of this project.

If you're looking for information to buy a drone, don't rely on this content. There are many good sites on the internet for this.

But if you want to learn how to control a drone from the PC, understand how ROS works and acquire a new skill as a programmer, this content can be very useful for you.

The content of this site is for educational purposes and the responsibility for all actions taken based on the information here described is yours.

---

## Parrot Bebop (Released in 2014)

![Parrot Bebop 1](https://cnet3.cbsistatic.com/img/sW0v4j97iS0_6AEJVFM3IdDBsJw=/940x0/2017/05/08/7b9f31e3-9a71-4435-9771-a66b4d1fa5a8/parrot-bebop-1-and-skycontroller.jpg '{"style":{"maxWidth" :"100%"},"description":"Parrot Sky Controller and the Bebop drone"}')

Generally speaking, the Bebop is a compact and lightweight quadcopter, relatively resistant and with parts that can be replaced if damaged.

It has integrated all the necessary components to accomplish the proposed goal, such as GPS card, Wi-Fi network card and an internal system that supports the execution of planned flight missions..

It has a great high definition camera with virtual image stabilizer among other features that make it a great drone for those who are starting to adventure into the world of aerial imagery.

Can be controlled either by a Parrot own remote control or by drone controller applications like the [Free Flight Pro](https://www.parrot.com/en/apps-and-services) - thanks to the connection via its integrated Wi-Fi network card.

So anyone can create a controller application for this drone following the parameters of this [Official Documentation](https://developer.parrot.com/docs/SDK3/).

Here and on the pages of this website I will explain step-by-step how I did to create a PC controller for this vehicle.

I want to make it clear that the fact that I used this drone doesn't mean that the same steps won't work with other drones.

With other drones, some steps will have different names and features, but the essence of ROS control is still the same.

My focus is to make you ** understand how ROS works and how I used it to create a controller ** on the computer.

Below I describe specific details to be considered so that you can execute the project without major problems.

---

## Integrated Operating System - ARDrone3

I'll start by talking about Bebop's internal system responsible for controlling and managing all components of the drone - engines, sensors, camera and so on - which is the system that allows us to accomplish everything we need.

When you unbox the Bebop and start flying it, you'll notice that there's a lot going on behind what you see on the controller screen.

As it floats in the air, ARDrone3 calculates the data received by its sensors to send the appropriate amount of energy to its engines so that the drone remains at the same angle and at the same height in relation to the ground, for example.

All taking into account the gravitational force, the wind force and many other variables.

ARDrone3 is a customized UNIX-based system (the same as Linux and Android) and its file system has the typical UNIX architecture.

It means that any good Linux expert can "hack" its file system and make changes to the way the drone behaves internally.

Therefore, for the purpose of a Delivery System applied to the real world, Bebop with factory settings wouldn't be a safe drone. Because of that and also other factors that I will talk about later.

However, it is a great tool to learn about drones and ROS, as it is one of the few drones compatible with ROS.

Fortunately, we won't go deep to have to change the initial settings of the drone.

But if you want to know more about possible changes to its file system, [read this documentation](https://fargesportfolio.com/wp-content/uploads/2018/01/BeebopHackingGuide1_7_2.pdf) written by Farges Maelyss. 

Just remembering that **you are responsible for any damage caused to your own drone** in case something goes wrong.

Keep reading to learn more.

---

## Firmware (4.0.6)

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

