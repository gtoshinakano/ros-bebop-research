---
title: Pesquisa ROS Bebop
description: Ate 160 caracteres
keywords: Keys separated with commas
hero_alt: Hero alternative text
headline: Page's Headline
subheadline: Page's SubHeadline
cta: Call to Action
---
# *IOT* ‐ Internet Of Thingsを応用したRobot Operating System - *ROS*の開発について

ROSの機能を理解しPCを利用したBebopドローンの制御法を詳しく学びましょう!

---

## 作者からのコメント

![Image of Da Vinci](static/images/da-vinci-fly.jpg '{"style":{"float":"right","maxWidth" :"40%"},"hidden":"mobile","description": "Rascunho do \\"Helicóptero\\" de Leonardo Da Vinci"}')

Leonardo da Vinci era um talentoso artista de sua época. 

Poucos sabem que, somente após os 30 anos, passou a dedicar-se aos estudos da matemática e da engenharia. 

Desde então suas obras passaram a ter uma amplitude inimaginável de área, gênero e finalidade, o que o tornou reconhecido mundialmente por sua contribuição em avanços tecnológicos nas áreas da engenharia ótica, hidráulica e civil.

![Image of Da Vinci](static/images/da-vinci.jpg '{"title":"Da Vinci", "style":{"float": "left"}}')

Eu não sou gênio e muito menos um artista talentoso como Leonardo da Vinci.

__Sou um programador__. 

Minha inspiração em Da Vinci e em outras personalidades como Thomas Edison, Steve Jobs e Bill Gates me fizeram seguir o caminho da criatividade e do aprendizado constante.

A oportunidade de estudar em uma Universidade em outro país nasceu de um desejo de conhecer novas tecnologias e da conexão com pessoas que me incentivaram a desbravar este novo horizonte.

No inicio de 2020, em plena pandemia do novo corona vírus, infelizmente meu país não soube tomar as melhores ações para prevenir o avanço das infecções.

Graças a isso, por um bom tempo fomos o segundo país com o maior número de infecções e os números aumentavam, dia após dia.

Lembro que vi em um noticiário na TV, um vídeo filmado por um drone utilizado para alertar as pessoas a ficarem dentro de suas casas.

![Drone alerting people](https://j.gifs.com/2xLOY1.gif '{"style":{"maxWidth":"43%","float":"right"},"url":"https://imgflip.com/gif/4oqbao"}')

E foi aí que percebi que este poderia ser o melhor momento para estudar sobre programação de drones!

Mas o mundo estava inseguro e instável demais para eu correr em direção a um sonho...

Os governos confusos queriam movimentar a economia, os aeroportos foram fechados, muitas pessoas não conseguiam voltar para seus países.

E o intercâmbio que normalmente, começaria em Abril, no início do ano letivo Japonês, teve de ser adiado por tempo indeterminado.

E esse foi o pior período de incertezas para mim.

Havia deixado o meu emprego, comprado roupas para um inverno rigoroso, presentes brasileiros e agora eu já não sabia mais quando iria ou se conseguiria mesmo ir.

Por sorte eu me enquadrava em certas condições que me possibilitavam entrar no Japão com uma certa facilidade, então quando os aeroportos japoneses voltaram a funcionar, fui um dos primeiros a poder ingressar.

Entrei no Japão, fiz a quarentena de 14 dias e, finalmente, cheguei em Hokkaido, o local onde ocorreria a minha pesquisa.

A pesquisa deu início com 2 meses de atraso, entretanto, os 10 meses que se seguiram foram suficientes para poder escrever este material e compartilhá-lo com você.

A experiência na Hokkai Gakuen University Engineering Campus, em Sapporo - Hokkaido, me tornou um programador mais completo e abriu caminho para novas possibilidades aqui ou em qualquer lugar do mundo.

![Great Power](https://media1.tenor.com/images/4c3b395bb7e3b40b780ac97f287b6ab3/tenor.gif?itemid=4589950 '{"style":{"maxWidth":"59%","float":"right"}, "description":"Clichê do Tio Ben (O Homem Aranha)"}')

Portanto, sinto que devo contribuir compartilhando este conhecimento com você, porque eu acredito que quanto mais conhecimento temos, maior o nosso dever em compartilhá-lo para tornar o mundo melhor e mais instruído.

Espero que este material lhe seja útil para aprender um pouco sobre robótica, drones e programação para IOT e que este pedaço da minha história te inspire a se tornar um melhor programador, engenheiro ou qualquer outra profissão que faça sentido para você.

Me dediquei a escrever de forma que qualquer pessoa pudesse entender este conteúdo pois eu tive dificuldade em encontrar materiais fáceis de entender durante a minha pesquisa.

Mas não use este material como única fonte de conhecimento para a área pois, certamente, não será o suficiente. 

Esta documentação se encontra no [Github](https://github.com/gtoshinakano/ros-bebop-research). Se você encontrar algum conteúdo errado ou muito difícil de entender, entre em contato comigo pelo email gtoshinakano@gmail.com com suas sugestões. Ficarei feliz em saber sua opinião!

---
### O que você encontrará neste material:

> ##### Ao aplicar o que eu ensino aqui você será capaz de:
> - [Conhecer um pouco sobre Linux(Ubuntu) e ROS](/about-ros)
> - [Entender suas características principais e o seu funcionamento como um todo](/about-bebop)
> - Conhecer o drone BEBOP 1
> - Aprender como instalar o ROS e suas dependências para controlar o Bebop Drone (testado apenas com Bebop 1)
> - Aprender comandos básicos para entender o ROS
> - Aprender como conectar o seu drone ao ROS, começar a ler dados e enviar comandos
> - Ler o GPS do Bebop e conhecer os requisitos para obter sucesso
> - Aprender Como Criar missões para o Drone e iniciar Plano de Vôo
> - Ter ciência dos problemas e limitações e dicas para melhor experimento
> - Realizar o Experimento com Javascript (NodeJS)
> - Aprender como criar um web app para controlar e ler os dados do drone
> - Ver Links e materiais que utilizei para esta pesquisa

---

## Sobre a proposta de pesquisa

No final de 2019 me surgiu a oportunidade de estudar em Hokkaido, no Japão, e o tema que escolhi para pesquisar foi o desenvolvimento para Internet das Coisas - IOT. 

IOT é, simplificadamente falando, um conceito que consiste em conectar objetos úteis da vida cotidiana na internet, para fazer com que estes objetos se tornem ainda mais úteis e inteligentes. 

Como, por exemplo, uma cafeteira que pode ser controlada remotamente pela internet para preparar o café com um simples toque no celular, aprender com os hábitos do usuário e escolher o melhor horário para preparar um café quentinho.

E por aí vai...

Eu já havia viajado ao Japão algumas vezes antes e sempre me encantava a forma pela qual o Japão utilizava a tecnologia em sua vida cotidiana. 

Os robôs estão por toda parte.

Mas não estou falando dos robôs que você vê nos animes derrotando inimigos e salvando a Terra...

Falo de robôs como pequenos sensores nos banheiros, máquinas e/ou enormes estruturas mecânicas inteligentes. Eles estão por toda parte no Japão. 

No Brasil, estes robôs são utilizados com menor frequência e a tecnologia geralmente é importada de outros países, o que torna o mercado de robótica menos desenvolvidos do que em outros países.

Minha curiosidade como programador era aprender como era possível conectar objetos ao computador e, a partir disso, ler dados e realizar comandos. Meu objetivo era aprender a desenvolver para IOT.

Foi isso o que eu aprendi e compartilho aqui com você. 

O professor responsável pela minha pesquisa, Kikuchi Yoshihito, me apresentou o conceito perfeito para começar a aprender sobre conexão com robôs por meio da conexão e controle de drones.

O objetivo para a pesquisa sugerido pelo professor era de criar um web service para controlar um drone com o objetivo de fazer entregas de delivery. 

Para isso, tive que passar por várias etapas de aprendizado e desafios, até me tornar capaz de programar para controlar o drone e alcançar esse objetivo.

Portanto gostaria de dizer que o conteúdo que apresento nesta documentação é direcionado apenas para realizar este objetivo e serei o mais detalhado possível para que você possa replicar este experimento com sucesso.

Navegue pelo menu para começar a aprender a como controlar um drone Bebop a partir de seu computador!

---

## Sobre o Autor

Olá! Meu nome é Gabriel Toshinori Nakano, Brasileiro, 32 anos, programador Web Full Stack.

Desde que me formei na faculdade de Tecnologia em Análise e Desenvolvimento de Sistemas trabalho desenvolvendo soluções Web utilizando tecnologias como JAVA, PHP, SQL, HTML, CSS, Javascript e Typescript.

Meu foco atual é trabalhar com Javascript/Typescript pois é a linguagem da qual nos possibilita desenvolver uma inifinidade de soluções. 

Inclusive esta documentação foi criada a partir do zero com a utilização do framework [NextJS](https://nextjs.org/)!

Eu me considero um criador e minha criação são meus códigos e suas utilidades.

Mas eu gosto também de assuntos como Psicologia, Filosofia, Marketing e Negócios.

Sou apaixonado por conhecimento e gosto sempre de contribuir com o próximo de alguma maneira.

E espero contribuir para você por meio deste material!

Um forte abraço!

---

## Agradecimentos pessoais

Gostaria de agradecer imensamente à minha família que me apoia desde sempre em minha jornada e ao professor responsável Kikuchi Yoshihito que aceitou me receber em seu laboratório e me apresentou os conceitos que demonstro neste site.

Agradeço também ao [HIECC - Hokkaido International Exchange and Cooperation Center](https://www.hiecc.or.jp/), o órgão do governo de Hokkaido que tornou possível o meu intercâmbio, à [Hokkai Gakuen University](https://www.hgu.jp/) a Universidade que frequentei durante toda a minha estadia no Japão.

Pessoalmente, gostaria de agradecer à Yuki Matsubara, a minha orientadora por parte do HIECC, à Megumi, a minha única companheira de intercâmbio em tempos de pandemia, e aos meus irmãos de consideração Hit e Massaki que já estavam no Japão e sempre me recebem com grande alegria.