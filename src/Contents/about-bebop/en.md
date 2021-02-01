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

One of my difficulties at the beginning was to understand the difference between the Firmware and the Operating System, as both seemed to me to be the same thing.

But the difference is that Firmware is software or a set of software associated with a hardware device that aims to store and manage the correct routines initialization of its electronic components.

On the other hand, the Operating System is the software that uses the firmware to control and operate its functions in a unified and programmatic way.

It's like an orchestra with instrumentalists and a conductor.

In the case of Bebop, each sensor, GPS card, network card and engine controller has its firmware, which are the musicians.

And the ARDrone3 operating system is the conductor that conduct the entire orchestra.

Each instrument has its own score and its way of being played. This, who does it, is the firmware.

The operating system is the conductor who knows each of his musicians and directs them to the correct performance of the orchestra.

In Bebop, the Operating System and Firmware are installed in one package, so you don't have to worry about installing them separately.

The [latest firmware can be downloaded here](https://support.parrot.com/global/support/products/parrot-bebop) and installed via a USB cable or you can install it via the Free Flight Pro App itself (the easiest way).

It is important to note that, for your drone to work correctly in the latest versions of applications, **it is necessary that the latest version of the firmware is installed** on it.

Now three other important aspects for you to have more knowledge about Bebop.

---

## Battery, Performance and the Charger

Before the research, when I had never touched a drone before, I believed that drones would be the future of everything.

I believed that we would be able to map huge farms to analyze agricultural production, make automatic deliveries over long distances or even chase bandits without running the risk of injuring our policemen...

But I had never thought that these ideas would be so difficult because of a simple and crucial factor. The **battery technology**.

I once read an interesting piece of information on the internet that compared the evolution of battery and processor technologies.

The article said that batteries evolved technologically in arithmetic progression, whereas processors evolved in geometric progression.

![Battery Evolution from Battery University](/static/images/battery-improvements.png '{"style":{"maxWidth" :"100%"},"description":"Improvement on Batteries over other technologies- Source: batteryuniversity.com"}')

This means, for example, that while new processors are developed quickly, better and more capable batteries do not follow the same pace of development, although the effort of both industries is the same.

We can say, then, that a major challenge of drone technology - which requires a certain amount of energy - is the current capacity of the batteries and its evolution pace.

It is clear that more modern and expensive drones have batteries with the capacity to travel great distances and carry more weight.

However, batteries from Bebop and drones of the same category can't take much more than their own weight and 11 minutes of flight time.

This makes it impossible to use it optimally in this project, but it is enough to carry out our experiment and learn from it.

### Solving Bebop battery not charging issue

![Bebop battery is not charging](/static/images/battery-not-charging.gif '{"style":{"float" :"left"},"description":"If the LED blinks in the charger after few seconds, the battery is NOT charging"}')

When I unboxed Bebop, I couldn't charge the batteries. From 8 to 10 seconds after plugging the charger in, the red LED had just blinked continuously.

I asked the professor for another charger but the same happened to the new charger.

I searched on the internet for a few days and the answer came through this [Youtube](https://www.youtube.com/watch?v=dfUOAMwQCKM) video.

I noticed that, with time without use, the batteries gradually discharge and reach a level of charge where the charger does not recognize them when connected to it.

Apparently, it is a safety mechanism present in these chargers to detect batteries that are unable to function or have some kind of defect.

The solution, as shown in the video, is to send an electrical charge from another electrical source to the battery for a a minute and quickly place it in the factory charger.

I reported to professor about the problem and he provided a regulating power supply and a multimeter.

We did it similarly to the video and it worked!

![Battery is charging](/static/images/battery-charging.gif '{"style":{"float" :"right"},"description":"The continuous LED light means that the battery is charging"}')

After a few attempts doing exactly as in the video, the red LED stopped flashing, indicating that the charger recognized the battery and was charging it.

So if you are having trouble charging your Bebop battery, this procedure may be a solution.

But be extremely careful with the risks of electric shock and fire that this can cause. Remember, you are the only responsible for any trouble caused by your actions.

With charged batteries, we can proceed to our project.

---

## Wi-Fi Network

Bebop connects to its controller via its integrated Wi-Fi network.

This means that it has a wireless network card that "creates a router" from which it allows connection to any other device that connects via Wi-Fi.

![Parrot Connect](https://www.ntt-tx.co.jp/column/yasui_blog/img/20151202_drone_blog_04-02.png '{"style":{"float":"right"}}')

Devices such as smartphones, tablets, notebooks and etc...

When you turn on your Bebop, the cooling fans start and the propeller engines start after 5 seconds.

The cooling system stops once, and when the fans are back on, the drone's Wi-Fi will be ready to receive connections.

By default, the name of the open Wi-Fi network created by the drone is **BebopDrone-E000000** (unique number).

I recommend setting up a WPA security password for your drone so that other people cannot connect to it.

The default IP Address is **192.168.42.1** and by using [`telnet`](https://pt.wikipedia.org/wiki/Telnet) at this address you can explore its file system and extract video or photo medias from it.

Using `telnet` isn't the easiest way to extract files from the drone. If you just want to extract these files from Bebop, you canuse the FreeFlight Pro App itself.

Another way to do this is by connecting to it via FTP. We will use this protocol to send MAVLINK mission files to the drone later on.

Because it is a WiFi network connection and has a relatively simple file system, Bebop becomes an easy target for hackers.

So it is not a very safe drone to use on a delivery system.

---

## GPS and Magnetometer

The Bebop drone has two other components that help the ARDrone3 for locating itself. The internal GPS module and the magnetometer.

The first is a GPS signal receiving board that calculates its real location based on the data obtained by the satellites found.

The second is a sensor that guides the ARDrone3 about the actual angle and the actual direction of Bebop.

GPS is not so useful for indoor flights, but for our experiment, it will be essential.

This is because MAVLINK missions - defined based on GPS points - are only possible to be performed on Bebop when its GPS status is "fixed".

The FixState in Bebop's GPS is one of the required parameters for Bebop to be able to perform a mission and it is obtained only when the GPS module finds at least 4 available satellites.

When FixState is 1 or *true*, Bebop is available for Missions, otherwise (0 or *false*), not.

The accuracy of the GPS depends on several factors such as signal interference, weather conditions and the quality of the receiver. The data is also more accurate when the receiver is in motion.

Therefore, the best way to obtain GPS FixState is to fly in places with few buildings and mountains and on days with few clouds.

In the case of Bebop, the accuracy I obtained was a difference of 1 to 4 meters with the drone moving and 4 to 6 meters of difference with the drone stopped (in relation to the Cellphone GPS).

Not bad for a small drone whose components must be smaller to ensure a good user experience.

The other crucial component for the success of the experiment is the magnetometer that needs to be properly calibrated before taking off.

The magnetometer uses magnetic fields to detect its real positioning and ARDrone3 interprets it together with the GPS card to determine availability for missions (FixState).

![Calibrate Google Maps on Android](https://www.howtogeek.com/wp-content/uploads/2020/01/Google-Maps-Compass-Calibration.png '{"style":{"float" :"right", "maxWidth": "170px", "hidden":"mobile"}}')

Do you remember having to calibrate your smartphone's compass in the Google Maps Android app to determine precisely where your phone was pointing on the map?

And then you had to do a series of 8-shaped movements with your smartphone to get your real orientation through the app.

In Bebop the process follows the same principle, however, there is a correct way to do it.

At first, I was doing Bebop's rotations slowly because I wanted to avoid sudden movements to not damage the drone.

But that didn't make the GPS FixState *true*.

![Drone Calibration](/static/images/calibrate-drone.gif '{"style":{"maxWidth": "300px", "float": "left"}, "description": "Calibrating Bebop Manetometer by the FreeFight Pro for IOS"}')

Searching on the internet, [another vídeo](https://youtu.be/V5-YMYb0MsI) gave me some hints.

As written in the video description, *"the speed at which you perform the rotation, seems to make a difference."* in the calibration process.

After increasing the speed when rotating the drone by hand, I stopped having problems with the GPS FixState.

So this may be a solution if you are unable to reach FixState.

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

