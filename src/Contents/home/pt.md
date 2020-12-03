---
title: Pesquisa ROS Bebop
description: Ate 160 caracteres
keywords: Keys separated with commas
hero_alt: Hero alternative text
headline: Page's Headline
subheadline: Page's SubHeadline
cta: Call to Action
---
# Envie seu drone Bebop em uma missão pelo PC utilizando o ROS

Aprenda, passo-a-passo, como controlar o seu drone Bebop pelo PC e entenda exatamente como funciona o ROS - Robot Operating System!

---
## Por que compartilho isto com você?

![Image of Da Vinci](static/images/da-vinci-fly.jpg '{"float":"right","maxWidth" :"40%"}')

Leonardo da Vinci era um talentoso artista de sua época. 

Poucos sabem que ele passou a dedicar-se aos estudos da matemática e da engenharia somente após os 30 anos. 

Desde então suas obras passaram a ter uma amplitude inimaginável de área, gênero e finalidade, tornando-o reconhecido mundialmente também por contribuições e avanços tecnológicos nas áreas da engenharia ótica, hidráulica e civil.

![Image of Da Vinci](static/images/da-vinci.jpg '{"float":"left","maxWidth" :"40%"}')

Eu não sou gênio e muito menos um artista talentoso como Leonardo da Vinci.

__Sou um programador__. 

Minha inspiração em Da Vinci e em outras personalidades bem sucedidas em suas áreas como Thomas Edison, Steve Jobs e Bill Gates me fizeram seguir o caminho do aprendizado constante e do aperfeiçoamento do meu ser.

Essa oportunidade de estudar em uma Universidade em outro país nasceu de um desejo de conhecer novas tecnologias e da conexão com pessoas que me incentivaram a desbravar este novo horizonte.

No inicio de 2020, em plena pandemia do novo corona vírus, infelizmente meu país não soube tomar as melhores ações para prevenir o avanço das infecções.

Graças a isso, por um bom tempo fomos o segundo país com o maior número de infecções e os números não paravam de aumentar, dia após dia.

![Drone alerting people](static/images/drone-cov-alert.gif '{"maxWidth":"43%","float":"right","url":"https://imgflip.com/gif/4oqbao"}')

Lembro que vi em um noticiário na TV, um vídeo filmado por um drone utilizado para alertar as pessoas a ficarem dentro de suas casas.

E foi aí que percebi que este era o melhor momento para estudar sobre drones!

Mas o mundo estava instável e inseguro demais para correr em direção a um sonho...

O meu intercâmbio para o Japão, que já estava confirmado desde janeiro, teve de ser adiado por tempo indeterminado porque os aeroportos se fecharam.

E esse foi o pior período de incertezas para mim.

Porém, por sorte, eu me enquadrava em certas condições que me possibilitava entrar no Japão, então quando os aeroportos japoneses voltaram a funcionar, fui um dos primeiros a poder ingressar.

Minha pesquisa deu início com 2 meses de atraso, entretanto, os 10 meses que se seguiram foram suficientes para poder escrever este material e compartilhá-lo com você.

Essa experiência na Hokkai Gakuen University, em Sapporo - Hokkaido, me tornou um programador mais completo e abriu caminho para novas possibilidades aqui ou em qualquer lugar do mundo.

Portanto, sinto que devo contribuir compartilhando este conhecimento com você, porque eu acredito que quanto mais conhecimento temos, maior o nosso dever em compartilhá-lo para tornar o mundo melhor e mais instruído.

Espero que este material lhe seja útil para aprender um pouco sobre robótica, drones e programação e que um pedaço da minha história te inspire a se tornar um melhor programador. 

Não use este material como única fonte de conhecimento para a área, pois certamente não será o suficiente. 

Esta documentação se encontra no Github em https://github.com/gtoshinakano/ros-bebop-research, envie um pull request caso tenha algo a acrescentar!

"Se você encontrar algum conteúdo errado ou muito difícil de entender, entre em contato comigo pelo email gtoshinakano@gmail.com com suas sugestões. Ficarei feliz em saber sua opinião!"

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

## Sobre o Autor

Olá! Meu nome é Gabriel Toshinori Nakano, Brasileiro, 32 anos, programador Web Full Stack.

Desde que me formei na faculdade de Tecnologia em Análise e Desenvolvimento de Sistemas trabalho desenvolvendo soluções Web utilizando tecnologias como JAVA, PHP, SQL, HTML, CSS, Javascript e Typescript.

Meu foco atual é seguir me aprofundando no conhecimento sobre Javascript/Typescript pois é a linguagem da qual nos possibilita desenvolver uma inifinidade de soluções. Inclusive esta documentação foi criada a partir do zero com a utilização do framework [NextJS](https://nextjs.org/)!

Mas no final de 2019 me surgiu a oportunidade de estudar em Hokkaido, no Japão, e o tema que escolhi para estudar foi o desenvolvimento para IOT (Internet Of Things - Internet das Coisas). 

IOT é um simples conceito que consiste em conectar objetos úteis da vida cotidiana na internet, para que estes objetos se tornem ainda mais úteis e inteligentes. Como, por exemplo, uma cafeteira que pode ser controlada remotamente pela internet para preparar o café com um simples toque no celular.
Eu já havia viajado ao Japão algumas vezes antes e sempre me encantava a forma pela qual o Japão utilizava a tecnologia em sua vida cotidiana. Os robôs estão por toda parte.

Mas não estou falando dos robôs que você vê nos animes derrotando inimigos e salvando a Terra...

Falo de robôs como sensores, máquinas e enormes estruturas mecânicas. Eles estão por toda parte no Japão. Se compararmos ao Brasil, estes robôs são utilizados com menor frequência e a tecnologia geralmente é importada de outros países, o que torna o estudo sobre a fabricação e desenvolvimento muito escasso por lá.

Minha motivação como programador era aprender como era possível conectar objetos ao computador e, a partir disso, ler dados e realizar comandos para poder desenvolver para IOT.

E foi isso o que eu aprendi. O professor responsável pela minha pesquisa, Kikuchi Yoshihito, me apresentou o conceito perfeito para começar a aprender sobre conexão com robôs por meio da conexão e controle de drones.

O objetivo sugerido pelo professor para a minha pesquisa era de criar um web service para controlar um drone para fazer entregas de delivery com sucesso. Para isso, tive que passar por várias etapas de estudos e desafios, até me tornar capaz de programar para controlar o drone e alcançar o objetivo proposto.

Portanto gostaria de dizer que o conteúdo que apresento nesta documentação é direcionado apenas para realizar o objetivo proposto pela minha pesquisa e vou procurar ser o mais detalhado possível para que você possa replicar este experimento com sucesso.

Sem mais delongas, navegue pelo menu para começar a aprender a como controlar um drone Bebop a partir de seu computador!



