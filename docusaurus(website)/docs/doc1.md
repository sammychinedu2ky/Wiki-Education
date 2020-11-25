---
id: doc1
title: Introduction
sidebar_label: Introduction
slug: /
---

# Wiki Education
This tutorial describes how to build a Facebook Messenger chatbot application with the use of the wit.ai platform for natural language processing and the Wikipedia API to fetch information from Wikipedia. To access the repository for the server code click https://github.com/sammychinedu2ky/Wiki-Education/blob/main/server.js

## Some keywords to know in this tutorial

 - Wit.ai : The wit.ai is a free natural language processing (NLP) platform created by Facebook. It helps make  NLP easy and seamless. It has support for different languages in both text and audio format. The cool part about this is that it is free and training a model here is as easy as clicking a button. It also has built-in default models that work so well too.
 - Facebook Messenger API: The Facebook messenger API allows a user to interact with Facebook services, by performing actions via an HTTP request.
 - Wikipedia API: The Wikipedia API allows you to easily fetch data in various format from Wikipedia through making an HTTP request.
 - Nodejs server: The nodejs server allows us to write our server code in JavaScript and also let us interact with the API.

## How this build Works
This solution requires five major things:
 - Wit.ai platform/API
 - A Nodejs server
 - Facebook Messenger API
 - Wikipedia API
 - A Facebook page

The wit.ai platform would be used to train a model that selects the word to search for from an interrogative statement. A Facebook page would be created to allow users to interact with the created messenger bot (DevC Wiki). The nodejs server would be used to listen to chat event from the messenger bot that would be made. Once a question is asked by a user interacting with the bot on the DevC Wiki Facebook page, a message event is triggered on our server with details of the message.

The Wit platform also provides us with an API that allows users to interact with the wit.ai platform via an HTTP request. We would be training the wit.ai platform to select words from the chat application which would be consumed by the Wiki API and we would also have to make a call to the wit.ai platform providing the message from the chat using the API and the returned response provides the selected keywords from the message. Once the response is returned we would make an extra call to Wikipedia using the Wikipedia API, the returned information would be sent to the user on Messenger using the Messenger API. If no information is found on Wikipedia the user is sent a "not found" response.
 
 A flow chart of the system design can be seen below for better understanding.
 
![flowchart](https://user-images.githubusercontent.com/40396070/96031498-53733400-0e55-11eb-8583-b6e6ff4746ff.png)

 
 ## Benefit of this educational messenger bot
 - Users can utilize Facebooks free basic service to search for basic information without having data on your device.
 - You don't need to leave the Facebook platform to search for basic  information
- Interacting with the chatbot is seamless.