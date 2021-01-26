---
title: Parte 1 - Preparando o ambiente para controlar o quadrocóptero Bebop
description: A strong, little quadcopter in need of better performance
keywords: Keys separated with commas
hero_alt: Hero alternative text
headline: Page's Headline
subheadline: Page's SubHeadline
cta: Call to Action
links:
  prevPage: 
    link: /posts/research/introduction
    title: Objetivo do Autor
  nextPage: 
    link: /posts/research/controlling-with-ros
    title: Controlando o Bebop com ROS
---
## Primeiras coisas em primeiro

Antes de começarmos a colocar tudo em prática, deixe-me falar um pouco sobre o projeto realizado.

Com o meu objetivo de aprender coisas relacionadas a *Internet of Things* - IOT - o professor Kikuchi sugeriu a mim que realizasse um experimento para controlar Drones por GPS. Até então, vários de seus alunos formandos realizaram experimentos utilizando drones, mas nenhum deles havia se interessado pelo controle de drones por GPS.

Como drones, GPS e internet são assuntos fortemente relacionados com IOT, me animei com a oportunidade de poder estudá-los. O objetivo final para a pesquisa acabou se tornando:

> "Criar um web service para controlar um drone com o objetivo de fazer entregas de delivery."

Para alcançar este objetivo eu estudei coisas como conectar e controlar um drone pelo PC, ler e enviar comandos de GPS ao drone e como programar para que tudo isso se conecte à internet, para assim então criar um *Web Service* que pilotasse o drone.

E é tudo isso o que vou compartilhar com você focando apenas no controle do drone através do *Robot Operating System - ROS* e na possível conexão com um Web Service.

Não vou explicar como fazer um *Web Service* de pilotagem e nem como criar uma interface para isso. Mas você pode clonar um repositório disponível em minha conta do GitHub e tentar fazer suas configurações por si mesmo.

A partir de agora, você vai aprender como instalar o ROS e o driver do Bebop, como enviar comandos e ler dados do Bebop e como preparar o seu próprio arquivo de missões MAVLink para enviar o seu drone em uma missão em piloto automático.

---

## Materiais que iremos utilizar

Para reproduzir este experimento, você irá precisar apenas de:

1. PC ou Notebook com conexão WiFi e sistema operacional [Ubuntu 16.04 LTS](https://releases.ubuntu.com/16.04/) 
2. Drone Bebop 1 (acredito que funcione também com o Bebop 2)
3. *Internet*, obviamente.
4. Smartphone com o aplicativo [Free Flight PRO (iOS ou Android)](https://play.google.com/store/apps/details?id=com.parrot.freeflight3)

O professor disponibilizou também para a minha pesquisa um multímetro e uma fonte de energia regulável pois tive alguns problemas com a bateria do Bebop, da qual explico como resolver na [postagem sobre o Bebop](/posts/about-bebop).

Se você não estiver com problemas para carregar a bateria do seu Bebop, você não precisará destas duas ferramentas.

---

### 1- Instalando o ROS Kinetic

Se você já leu e realizou os procedimentos do meu [Tutorial sobre ROS](/posts/about-ros/), você pode pular esta etapa. Lá explico passo-a-passo, detalhadamente, como instalar o ROS Kinetic no Ubuntu 16.04 LTS.

Para utilizar o driver [bebop_autonomy](https://bebop-autonomy.readthedocs.io/), você precisará do ROS na versão *Indigo*, *Jade* ou *Kinetic* instalado em seu PC, portanto, a versão do seu Ubuntu deve ser uma compatível com uma dessas [distribuições do ROS](http://wiki.ros.org/Distributions).

Recomendo que utilize as mesmas versões que estou utilizando para que você não tenha dificuldades em reproduzir os meus experimentos.

Vamos aos nossos primeiros comandos para instalação. Abra o terminal e digite o seguinte comando para atualizar a lista de pacotes do Ubuntu com o endereço da fonte dos pacotes ROS:

```
$ sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
```

Atualize as chaves públicas para que seu Ubuntu baixe os pacotes das fontes confiáveis.

```
$ sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654
```

Atualize o ```apt-get``` com as novas configurações:

```
$ sudo apt-get update
```

Instale o ROS Kinetic na versão completa:

```
$ sudo apt-get install ros-kinetic-desktop-full
```

O processo irá levar alguns minutos para baixar e extrair os pacotes corretos e, ao finalizar, você pode realizar os testes que explico no tutorial sobre o ROS para saber se tudo foi instalado corretamente.

Agora vamos instalar o bebop_autonomy

### 2. Instalando as dependências e ferramentas

Para que o ```bebop_autonomy``` *driver* funcione corretamente é necessário que existam instaladas em seu Ubuntu algumas ferramentas de *build* e de ROS com Python. Para isto, iremos instalá-las com o seguinte comando.

```
$ sudo apt-get install build-essential python-rosdep python-catkin-tools
```

Estas são ferramentas para compilar o código do ```bebop_autonomy``` escrito em Python e instalar suas dependências.

Outro software que você irá precisar é o Git para poder clonar o repositório do ```bebop_autonomy```:

```
$ sudo apt install git-all
```

Você pode fazer o download do código manualmente através do [repositório público](https://github.com/AutonomyLab/bebop_autonomy) porém, é muito mais fácil realizá-lo pelo próprio terminal.

### 3. Criando o seu Workspace

Como expliquei na [última parte](/posts/about-ros/writing-package-with-python) do tutorial básico sobre ROS, para desenvolvermos softwares para ROS necessitamos de um ambiente de trabalho onde ficarão os nossos arquivos de códigos fonte.

Para isso, utilizaremos a ferramenta de *build* chamada ```catkin``` que vem instalada junto com o pacote completo do ROS.

Primeiro, vamos criar a pasta onde ficará o código de nossa aplicação.

```
$ mkdir -p ~/bebop_ws/src && cd ~/bebop_ws
```

Como pode observar executamos dois comandos: criamos a pasta com ```mkdir``` e entramos em ```~/bebop_ws``` através do comando ```cd```.

Agora vamos iniciar o nosso workspace com o comando:

```
$ catkin init
```

Será criada uma pasta oculta chamada ```.catkin_tools``` com arquivos de configuração do novo Workspace. Isto fará com que a nossa nova pasta ```~/bebop_ws``` seja considerada um workspace pelo ROS para que ele tenha as informações corretas de apontamento dos recursos. 

### 4. Instalar o bebop_autonomy

Agora vamos baixar e criar uma cópia do [bebop_autonomy](https://bebop-autonomy.readthedocs.io/en/latest/installation.html) em sua pasta ```~/bebop_ws/src```:

```
$ git clone https://github.com/AutonomyLab/bebop_autonomy.git src/bebop_autonomy
```

A [Parrot]() desenvolveu seus drones para que desenvolvedores também pudessem criar seus próprios aplicativos de pilotagem e disponibilizou um SDK (*Software Development Kit*) para esta finalidade. 

O ```bebop_autonomy``` é um *package* desenvolvido pela comunidade do ROS com base na Documentação Oficial do [ARDroneSDK3](https://developer.parrot.com/docs/SDK3/) e com ele é possível conectar os recursos ao ROS, receber e enviar comandos ao drone.








