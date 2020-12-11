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

Mas antes, deixa eu te lembrar do objetivo proposto por minha pesquisa.

Eu queria estudar sobre programação para IOT, conheci um professor de engenharia de produção que ministrava um laboratório de experiências com Drones, VRs e impressoras 3D e, em seguida, ele me propôs um estudo sobre drones.

> ##### O objetivo proposto
> *"Criar um web service para controlar um drone para fazer entregas de delivery."*

Portanto, ele e a Universidade me disponibilizaram um drone Bebop 1 da marca francesa Parrot, um notebook i5 novinho e livros sobre Ubuntu e ROS (Robot Operating System).

Fiquei muito feliz por todo este material disponibilizado para o meu período de pesquisa. Dificilmente conseguiria algo igual em condições parecidas no Brasil...

Mas deixando as comparações entre países de lado, apresentarei aqui algumas características técnicas sobre este drone, falando especificamente sobre aspectos relacionados ao objetivo de minha pesquisa.

Se você busca informações para comprar um drone, aqui não é o lugar para você utilizar como referência. Existem muitos outros bons sites na internet para isso.

Mas se você quiser aprender a se conectar com um drone pelo PC e controlá-lo, aprender sobre ROS e adquirir uma nova habilidade como programador, este conteúdo pode ser muito útil para você.

---

## Parrot Bebop (Lançado em 2014)

![Parrot Bebop 1](https://cnet3.cbsistatic.com/img/sW0v4j97iS0_6AEJVFM3IdDBsJw=/940x0/2017/05/08/7b9f31e3-9a71-4435-9771-a66b4d1fa5a8/parrot-bebop-1-and-skycontroller.jpg '{"maxWidth" :"100%"}')



De um modo geral, o Bebop é um quadrocóptero compacto e leve, relativamente resistente e com peças possíveis de serem trocadas caso danificadas.

Ele possui integrado todos os componentes necessários para realizar o nosso objetivo, como placa de GPS, placa de rede Wi-Fi, e vários sensores e componentes para garantir certa estabilidade durante o voo.

Além de possuir, é claro, uma ótima câmera de alta definição com estabilizador de imagem virtual entre outros recursos que o tornam um ótimo drone para quem está começando a se aventurar no mundo das imagens aéreas.

Ele pode ser controlado tanto por um controle remoto da própria marca Parrot, quanto por aplicativos controladores de drones - como o Free Flight Pro - graças à conexão pela sua rede de Wi-Fi integrada.

Portanto qualquer um pode criar um aplicativo controlador para este drone seguindo os parâmetros [desta Documentação Oficial](https://developer.parrot.com/docs/SDK3/).

Aqui e nas páginas deste site irei explicar passo-a-passo como fiz para criar um controlador para este veículo pelo PC.

Quero deixar claro que o fato de eu ter usado este não significa que os mesmos passos não funcionarão com outros drones. 

Em outros drones, alguns passos terão nomes e recursos diferentes, mas a essência do controle por ROS é a mesma.

O meu foco é fazer você **entender como funciona o ROS e como eu o utilizei para criar um controlador** pelo computador.

Abaixo descrevo detalhes específicos a serem considerados para que você consiga realizar o projeto sem grandes problemas.

---

## 

![Image of Da Vinci](/static/images/da-vinci-fly.jpg '{"float":"right","maxWidth" :"40%","hidden":"mobile"}')

