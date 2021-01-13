---
title: Primeiros passos com ROS - Instalação e comandos para conhecer os conceitos
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
  - link: about-ros/with-python
    title: Programando para ROS com Python
---
## Antes de começar

Se você ainda não conhece os conceitos do ROS - ```master, nodes, topics e etc``` - sugiro que você comece lendo a [primeira parte deste tutorial](/posts/about-ros).

Nesta postagem, irei explicar na prática os conceitos do ROS desde a instalação até a utilização de seus recursos. 

Este tutorial foi feito para estudantes que não possuem muitos conhecimentos de desenvolvimento e nem de robótica, mas precisa aprender ou possui curiosidade em conhecer o Robot Operating System.

Vamos lá!

---

## Instalando a Distribuição correta do ROS na Distribuição correta do Ubuntu

![Ubuntu](https://i.ytimg.com/vi/t_0LBOIoXcY/maxresdefault.jpg '{"style":{"maxWidth" :"100%"}}')

Como expliquei na postagem de introdução o ROS funciona melhor - ou de forma mais completa - em ambientes Linux, portanto é nele que iremos realizar a instalação.

Existe uma certa relação de correspondência entre as distribuições do Ubuntu e do ROS. Sempre que uma distribuição é lançada, os desenvolvedores tentam limitar a adição de novas melhorias e passam a focar mais na solução de erros.

A escolha da distribuição deve ir de acordo com as necessidades de seu projeto e com a compatibilidade dos recursos de seu projeto para Robôs. Vale ressaltar que os ```packages``` desenvolvidos pela comunidade e que, por ventura você precisará utilizar, também possuem suas versões compatíveis então sempre é bom dar uma boa pesquisada antes.

Eu utilizei o [Ubuntu 16.04 LTS](https://releases.ubuntu.com/16.04/) pois era uma das versões compatíveis com as necessidades de minha pesquisa. Você pode baixá-lo e instalá-lo em uma partição de seu computador ou em uma máquina virtual utilizando o [Oracle VM Virtual Box](https://www.virtualbox.org/).

A Distribuição do ROS que instalei foi a [Kinetic Kame](http://wiki.ros.org/kinetic) e as explicações contidas aqui serão baseadas nesta versão. Você pode conhecer [todas as distribuições do ROS nesta página](http://wiki.ros.org/Distributions) e escolher a versão apropriada para as suas necessidades.

Provavelmente você poderá fazer este tutorial com qualquer distribuição do ROS pois vamos utilizar apenas alguns recursos básicos. (Mas testei apenas com o Kinetic)

### 1. Instalando o ROS Kinetic Kame

![ROS Kinetic Kame](https://msadowski.github.io/images/kinetic_kame.png '{"style": {"maxWidth": "100%"}, "description": "Kame em japonês significa tartaruga. Ela é o mascote oficial das distribuições do ROS lançadas e uma alusão aos famosos Turtle Bots"}')

Com o Ubuntu 16.04 LTS instalado em sua máquina, vamos por a mão na massa para instalar o ROS.

Para trabalhar com o ROS você utilizará o ```terminal``` na maior parte do tempo, portanto, sugiro que comece a se acostumar com ele o quanto antes caso não tenha este costume. É interessante que você entenda o que são e o que fazem os comandos que está utilizando, ao invés de simplesmente copiá-los e colá-los no seu terminal. 

Existem infinitos materiais na internet sobre o terminal do Ubuntu, mas adianto aqui os comandos básicos que você mais utilizará. São eles: ```cd, ls, sudo, apt-get e source```. Saber o mínimo sobre esses comandos é fundamental para dar prosseguimento no aprendizado do ROS.

Você pode seguir as instruções da [página oficial](http://wiki.ros.org/kinetic/Installation/Ubuntu) para instalar o ROS Kinetic caso esteja com preguiça de ler meus comentários ou caso entenda o que está fazendo.

Sem mais delongas, abra um novo terminal no seu Ubuntu (```Ctrl+Alt+T```) e execute o seguinte comando para configurar o seu PC para poder fazer o download de softwares oficiais do ROS:

```
$ sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
```

Como é um comando ```sudo```, o terminal pedirá para que você digite a sua senha de login configurada no momento de instalação do Ubuntu. (Após uma vez informada a senha, todos os comandos ```sudo``` feitos neste mesmo terminal nos próximos 15 minutos serão aceitos sem que precise digitar a senha novamente)

Configure as chaves do novo repositório adicionado pelo comando anterior para que o ```apt``` confie na fonte dos softwares:

```
$ sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654
```

Utilize o comando ```apt-get update``` para atualizar a lista dos pacotes com as suas últimas versões disponíveis.

```
$ sudo apt-get update
```

Por fim, instale o ROS Kinetic versão completa. Este processo pode demorar alguns minutos para ser concluído.

```
$ sudo apt-get install ros-kinetic-desktop-full
```

A versão completa do pacote do ROS inclui diversas bibliotecas e ferramentas em forma de ```packages```. Inclusive o ```turtle_sim```, que é o simulador que utilizaremos na próxima parte deste tutorial, vem instalado como um pacote padrão.

Para verificar se tudo foi instalado corretamente, basta executar o comando ```apt list --installed | grep ros``` e ver a lista de pacotes que possuem "ros" no nome.

### 2. Configure as variáveis de ambiente para o ROS

O ROS necessita de algumas variáveis e gatilhos adicionais configurados em sua máquina para que possa funcionar. Para isto, o ROS disponibiliza um arquivo *shell* executável ```*.sh``` que configura as variáveis de ambiente com apenas um comando.

As variáveis de ambiente servem para informar ao ROS qual versão e distribuição do ROS utilizar. No caso, como iremos utilizar o Kinetic, este será um dos valores de variáveis a serem configuradas pelo comando.

Você tem a opção de configurar essas variáveis globalmente, da qual permite a configuração em todas as futuras instâncias do terminal, ou localmente apenas naquela instância do terminal.

Para que você entenda a necessidade desta configuração, abra um terminal e teste um comando do ROS sem que as variáveis estejam configuradas:

```
$ roscore
```

> *Mensagem de retorno: The program 'roscore' is currently not installed. You can install it by typing: sudo apt install python-roslaunch*


Ao invés de fazer o que a mensagem de retorno diz, você precisa configurar as variáveis de ambiente neste terminal.

```
$ source /opt/ros/kinetic/setup.bash
```

Agora sim, esta instância do terminal está configurada para receber comandos do ROS, caso você tente o ```roscore``` novamente, você verá outra saída como resposta.

No entanto, desta forma, toda vez que você precisar executar algum comando para o ROS em um recém aberto terminal, você terá que executar este ```setup.bash```. 

Para configurar as variáveis de ambiente permanentemente, você deve adicionar o comando anterior no arquivo oculto ```~/.bashrc```.

```
$ echo "source /opt/ros/kinetic/setup.bash" >> ~/.bashrc
```

Este comando adiciona ```source /opt/ros/kinetic/setup.bash``` no arquivo executável ```~/.bashrc```, que é um script *shell* que roda toda vez que você você abre uma nova instância do terminal. 

Este arquivo existe para evitar esforços de redundância na hora de digitar comandos. Porém, vale destacar que, caso você queira utilizar duas distribuições diferentes do ROS no mesmo computador, ```~/.bashrc``` deve incluir apenas o ```setup.bash``` do ROS que você irá utilizar.

Você pode ver o conteúdo do ```~/.bashrc``` com o comando ```cat ~/.bashrc``` e você verá a linha ```"source source /opt/ros/kinetic/setup.bash"``` adicionada no final do arquivo.

---

## O primeiro comando em ROS - roscore

Com o ROS instalado e as variáveis de ambiente configuradas será possível utilizar todos os comandos do ROS - ```roscore, rosnode, rostopic e etc```.

```roscore``` é o comando para inicializar o ```master``` do ROS. Como já expliquei na [primeira parte](/posts/about-ros) deste tutorial o *master* é o ambiente de registro que administra todos os recursos do ROS.

```
$ roscore
```

Se tudo correr bem, você verá mensagens como ***started roslaunch server http://...*** e ***auto-starting new master...***. Isto indica que o ```master``` do ROS criou o seu ecossistema com sucesso!

A partir dele iniciado, você pode iniciar os ```nodes``` que são os nós que conecta o master aos recursos da sua aplicação para robôs. 

Nele serão registrados também os ```topics```, que são os tópicos de interesse dos ```nodes```, e os ```services``` que são a segunda forma de comunicação entre ```nodes```. Portanto, este é o comando que deve ser iniciado toda vez que for utilizar o ROS.

O próximo passo é começar a interagir com o ROS para você entender como ele funciona e conhecer o que é possível realizar com este ecossistema para robôs. 

Mas este é um assunto para a [próxima etapa deste tutorial](/posts/about-ros/ros-with-turtle-bot).

---

## Conclusão

Se você é como eu, que precisa aprender sobre o Robot Operating System e não tinha muitos conhecimentos sobre Ubuntu e comandos de terminal, este guia é para você.

Você pode instalar o ROS Kinetic seguindo os tutoriais da [documentação oficial](http://wiki.ros.org/kinetic/Installation/Ubuntu) sem quaisquer problemas, porém o conteúdo lá é para quem já tem algum conhecimento prévio sobre o assuto.

Procurei explicar cada comando de forma rápida e direta para que você não seja como eu no começo, que copiava os comandos e via se funcionava. É muito importante entender o que cada comando faz quando se trata em trabalhar com o Ubuntu.

Também demonstrei alguns comandos para que você possa confirmar se tudo correu bem, como por exemplo, o ```cat``` e o ```apt list --installed```.

E, por fim, iniciei o contexto para você continuar nesta caminhada para aprendizado do ROS com a [próxima etapa deste tutorial](/posts/about-ros/ros-with-turtle-bot).

Um forte abraço.

Gabriel Toshinori Nakano

---

#### **Referências para esta Postagem**

- **Download e Instalação**
  - [Download Ubuntu 16.04 LTS](https://releases.ubuntu.com/16.04/)
  - [Sobre o ROS Kinetic Kame](http://wiki.ros.org/kinetic)
  - [Tutorial para instalação do Kinetic Kame](http://wiki.ros.org/kinetic/Installation/Ubuntu)
  - [Todas as Distribuições do ROS](http://wiki.ros.org/Distributions)

---
