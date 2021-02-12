---
title: Parte 1 - Preparing the environment to control Bebop quadcopter
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
    link: /posts/research/controlling-bebop
    title: Controlando o Bebop com ROS
---

This page hasn't been translated yet

---
## First things First

Before we put everything intro practice, let me tell you a few things about the project.

With my goal of learning things related to *Internet of Things* - IOT - Professor Kikuchi suggested that I carry out an experiment to control Drones by GPS. He said that until then, several of his graduate students had conducted experiments using drones, but none of them had been interested in controlling drones from it's GPS.

As drones, GPS and the internet are strongly related to IOT, I was excited about the opportunity to study them. The ultimate goal for the research ended up becoming:

> "To create a web service to control a drone in order to simulate a delivery service system."

In order to achieve this goal I had to study things like connecting and controlling a drone via the PC, reading and sending GPS commands to the drone and how to connect everything to the internet, so that I could create a Web Service to pilot the drone.

And that's all I'm going to share with you, focusing only on controlling the drone through the *Robot Operating System - ROS* and the possible connection to a Web Service.

I am not going to explain how to create a piloting *Web Service* or how to create an interface for that. But you can clone a repository available in my GitHub account and try to configure it yourself.

From now on, you will learn how to install ROS and the Bebop driver, how to send commands and read data from Bebop and how to prepare your own MAVLink mission file to send your drone on an autopilot mission. 

Let's do this!

---

## Materials we will use

To reproduce this experiment, you will only need:

1. PC or Notebook with WiFi connection and [Ubuntu 16.04 LTS](https://releases.ubuntu.com/16.04/) OS
2. Drone Bebop 1 (I believe you can do with Bebop 2 as well)
3. *Internet*, obviously.
4. Smartphone with the app [Free Flight PRO (iOS ou Android)](https://play.google.com/store/apps/details?id=com.parrot.freeflight3) installed

The teacher also made available for my research a multimeter and an adjustable power source because I had some problems with the Bebop battery, which I explain how to solve it in the [post on Bebop](/posts/about-bebop).

If you don't have trouble charging the Bebop battery, you will not need these two tools.

---

### 1- Installing ROS Kinetic

If you have already read and performed my [ROS Tutorial](/posts/about-ros/) procedures, you can skip this step. There I explain step-by-step, in detail, how to install ROS Kinetic on Ubuntu 16.04 LTS.

To use [bebop_autonomy driver](https://bebop-autonomy.readthedocs.io/), you will need ROS in the *Indigo*, *Jade* or *Kinetic* version installed on your PC,so your Ubuntu version must be compatible with one of these [ROS distributions](http://wiki.ros.org/Distributions).

I recommend that you use the same versions that I am using so that you will have no difficulty in reproducing my experiments.

Let's go to our first commands for installation. Open the terminal and type the following command to update the list of Ubuntu packages with the source address of the ROS packages:

```
$ sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
```

Update public keys so that your Ubuntu downloads packages from trusted sources.

```
$ sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654
```

Update ```apt-get``` with the new configurations:

```
$ sudo apt-get update
```

Install ROS Kinetic in its full version:

```
$ sudo apt-get install ros-kinetic-desktop-full
```

The process will take a few minutes to download and extract the correct packages and, at the end, you can perform the tests that I explain in the tutorial on ROS to see if everything was installed correctly.

Now, let's install bebop_autonomy.

### 2. Installing dependencies and tools

In order to ```bebop_autonomy``` *driver* works correctly you need to have some *build* and ROS tools with Python installed on your Ubuntu. For this, we will install them with the following command.

```
$ sudo apt-get install build-essential python-rosdep python-catkin-tools
```

These are tools for compiling ```bebop_autonomy``` code written in Python and for installing its dependencies.

Another software that you will need is Git for cloning ```bebop_autonomy``` repository:

```
$ sudo apt install git-all
```

You can download the code manually from the [public repository](https://github.com/AutonomyLab/bebop_autonomy) but it's way easier to do it from the terminal.

### 3. Creating the Workspace

As I explained in [last part](/posts/about-ros/writing-package-with-python) do basic tutorial about ROS, in order to develop softwares for ROS we need a work environment that will store our source code files.

For this, we will use a *build tool* called ```catkin``` that is already installed on our full version of ROS.

First, let's create a folder for our application.

```
$ mkdir -p ~/bebop_ws/src && cd ~/bebop_ws
```

As you can see, we executed two commands: we create a folder with ```mkdir``` and enteres there (```~/bebop_ws```) through ```cd```.

Now let's init our workspace:

```
$ catkin init
```

It will create a hidden folder called ```.catkin_tools``` with our wokspace configuration files. This will make our folder ```~/bebop_ws``` a ROS workspace so that it can have the right resources information. 

### 4. Install bebop_autonomy

Now let's create a copy of [bebop_autonomy](https://bebop-autonomy.readthedocs.io/en/latest/installation.html) in our ```~/bebop_ws/src``` folder:

```
$ git clone https://github.com/AutonomyLab/bebop_autonomy.git src/bebop_autonomy
```

Parrot Drones were built with a functionality that allows developers to create piloting application through their SDK (*Software Development Kit*). 

```bebop_autonomy``` is a *package* developed by the ROS community, and it's based on the [ARDroneSDK3](https://developer.parrot.com/docs/SDK3/) official documentation. With this is possible to connect Bebops resources to ROS, receive and send commands to the drone.

It is a software package that initializes the necessary nodes to control Bebop drones and has its own dependencies that we will install them now with the command:

```
$ sudo rosdep init
$ rosdep update
$ rosdep install --from-paths src -i --rosdistro kinetic
```

You only need to run ```sudo rosdep init``` once if you haven't done yet.

The second command will update ```rosdep``` with the dependencies that it hasn't configured yet. 

The third will install all dependencies from ```src``` path of your workspace considering the ROS Kinetic distribution.

If one of these commands returns any errors, one of its reasons might be that your terminal instance is not sourced with the right ROS variables. In my tutorial about ROS I teach you how to do that with the ```source``` command.

Finally, we will compile our package and build our executable:

```
$ catkin build
```

If everything worked fine, you will see that all packages will conclude without errors. If there is any errors, probably the commands ```rosdep update``` and ```rosdep install``` did not ran well.

You can confirm the package installation sourcing the new configuration file. Then, if you run ```rospack list``` you will see the new package ```bebop_driver``` listed in the results.

---

## Running bebop_autonomy driver

With our installed and compiled workspace, we can now run our driver.

First of all, we need to configure our terminal with the new ROS definitions with bebop_autonomy:

```
$ source ~/bebop_ws/devel/setup.bash
```

Remember that this process must be done once in every instances of terminal or [be configured in the ](/posts/about-ros/beginner-commands) ```~/.bashrc``` file in order to make all future instances configured.

Now let's start our master:

```
$ roscore
```

Connect your PC to the drones Wi-Fi and, in another tab of terminal, let's start our driver's ```node```:

```
$ roslaunch bebop_driver bebop_node.launch
```

![Roslaunch bebop_driver](/static/images/roslaunch-bebop.gif '{"style":{"maxWidth":"100%","float":"none"}}')

This command will start the node of ```bebop_driver``` package, register the topics and messages in the new environment connected to Bebop. If you run this command without Bebop connected, you will see some errors in the terminal.

Now you can confirm the registered nodes and topics with the commands ```rosnode list``` and ```rostopic list``` to see if everything has started correctly. You will see the new namespaces like, for example ```/bebop_driver```, ```/bebop/takeoff``` and many others.

Now our ROS environment is ready to control our drone!

---

## Conclusão

You have learned here how to install ROS Kinetic through terminal commands. 

After that, we installed bebop_autonomy in a new workspace, we installed it's dependencies and launched the code to start the node in our ROS instance.

From now on, you will be able to send commands to Bebop, read its data, and write your own packages to pilot it the way you desire.

In the next step I will show you how to send commands to the drone and how to control it with your keyboard. [Click here to proceed](/posts/research/controlling-bebop)!

Best regards.

Gabriel Toshinori Nakano

---

#### **References**

- **Materials**
  - [Ubuntu 16.04](https://releases.ubuntu.com/16.04/)
  - [Free Flight PRO (iOS or Android)](https://play.google.com/store/apps/details?id=com.parrot.freeflight3)
  - [Bebop_autonomy driver](https://bebop-autonomy.readthedocs.io/)
  - [bebop_autonomy public repository](https://github.com/AutonomyLab/bebop_autonomy)
  - [ARDroneSDK3](https://developer.parrot.com/docs/SDK3/)




