---
id: doc2
title: Steps to build
sidebar_label: Steps to build

---

## Steps to build this Educational Bot
 ### Training a model on the wit.ai platform
 - Login into [Wit.ai](https://wit.ai) and try to sign in with your Facebook account. 
 - Once, you are logged in, click on the "**new app**" button to create a new application that we would be using in this tutorial.
 - A modal would be displayed for you to fill in the app details. We will be making use of **wiki** as the name of the app but you can decide to use any name of your choice. You can proceed by clicking on the **create** button. Wait a little bit and you'll be redirected to the app's dashboard. You should see an interface like this ![Wit ai dashboard](https://bit.ly/witaidashborad)
 - By default, you would be redirected to the **understanding** section of the app which is where you would train wit on how to understand your sentences or words. You can check the top left corner of the dashboard to see the **understanding** menu
 - In the main panel below are the various things I would like to explain before we proceed.
  
|Field|What it does  |
|--|--|
| Utterance |Accepts input to train in text format  |
| Intent | Tells wit.ai the aim of the utterance |
| Entity | Extracts meaningful piece of information from an utterance 
- The table below describes various utterances and what we want wit.ai to extract.

|Utterances| What we want wit.ai to extract  |
|--|--|
| Who is Elon Musk | Elon Musk |
| Please I want to know about Elon Musk | Elon Musk |
| Where is Lagos | Lagos |
| What is a car | Car |
 
 > The purpose of this is to make use of the extracted word and make a query to the Wikipedia API which returns a piece of information if seen or it returns "not found"

- At this point, we will train wit.ai to extract this by typing in some utterances. So type in **Who is Elon Musk** and highlight the words Elon Musk. A pop up would be displayed to select the entity of your choice. Scroll down to select  **wit/wikipedia_search_query**. The wit/wikipedia_search_query is an inbuilt entity but allows you to extract free text that can be used in a regular Wikipedia search. But wit.ai also allows you to create your custom queries. The picture below explains this as well.
![entity-selection](https://user-images.githubusercontent.com/36219292/95683548-f4f34f00-0be3-11eb-9456-3fcff7bedec9.png)
- After selecting the **wit/wikipedia_search_query**, we would like to create an intent to tell wit.ai the aim of our the utterance. 
- Click on the intent drop down box and fill in your intent. For this tutorial, we would be going with **find** as our intent and then click on **create intent**.  The picture below explains this as well.

![createintent](https://user-images.githubusercontent.com/36219292/95683579-29ffa180-0be4-11eb-8c57-777825f3ad32.png)


 - Once you've created the intent, click on "**train and validate**". This would enable wit.ai to create a model of wiki text extraction based on the options you chose.
 - Try and create train wit.ai more with more utterances like:- "please I want to know about Elon Musk, what is a car, where is Canada, where is Lagos"
 - You would see that when training these extra utterances, the intent and entity field would be pre-selected for you. 
 - In cases where the intent and entity  isn't pre-selected, try and highlight the word you want to extract (select  **wit/wikipedia_search_query** as the entity) and also select **find** as the intent
> When typing in utterances, wit.ai might highlight "**a car**"  from "**what is a car**" instead of "**car**". We aim to only select the keyword we want to query from Wikipedia, so delete the created entity value and manually highlight "**car**"  to ensure that it returns what is supported to consume the Wikipedia API.

- Next, I will be creating a Facebook page. The page would allow users to interact with the chatbot and request for answers to their questions. 
- You can click on this [link](https://www.facebook.com/pages/creation/?ref_type=comet_home) to create a new post with your Facebook account. 
- I decided to use **DevC Wiki** as the name of the page I'm creating.
-  I also chose Education as the page category and also set up other details like page image when creating it.
- Next, we would need to set up the **send message** button for users to click and interact with the bot.
- On the home page of the **DevC Wiki** page, click on the **Add a Button** button, a modal would be displayed for you to select the kind of button required on the home page.
- Select the **send message** button and that should set it up.
- For you to see the change as a visitor you need to click on the **see as a visitor** button.
- This would enable you to view the page as a visitor.
- Next click on the **send message** button to interact with it.
- After setting up the page we would need to obtain a Facebook **access token** to have programmatic control over the page and chatbot.
- To get these details, go to https://developers.facebook.com/apps/
- Once you navigate to this page if you are not logged in then do so. if you are already logged in, click on the **Create App** button to create a Facebook App.
- A modal would be popped up. Select the **Manage Business Integrations** option

![createappdev](https://user-images.githubusercontent.com/36219292/95683602-47cd0680-0be4-11eb-8dcf-82b34fc4f67a.png)
 
- A new modal would be displayed for us to set up the apps name. 
- Below is an image with the details of what I would fill. I chose **wiki** as the name.


![appdetails](https://user-images.githubusercontent.com/36219292/95683619-5f0bf400-0be4-11eb-8935-d85ffd157bc7.png)

- After filling the details, click on the **Create App ID** button
- You would be redirected to the main dashboard. You should see something like the image below.
![devdashboard](https://user-images.githubusercontent.com/36219292/95683711-f07b6600-0be4-11eb-9ce2-98b621082ad3.png)

- The dashboard displays API integrations for various Facebook products. Since we would be working with **messenger**, scroll down until you see the messenger app.
- Click on the setup button and a new page would be displayed. 
- On the new page scroll down until you see the **Add or Remove Pages** button. 
- ![addorremove](https://user-images.githubusercontent.com/36219292/95683733-0ab54400-0be5-11eb-8fe5-51f786de5b3f.png)
- Click on the button and select the page you want to have access to.
- After selecting the page from the pop-up, you would see a **Generate Token** button. Click on the button.
- A modal would be popup displaying your access token. Copy your Facebook access token and save it somewhere because it would be used when writing the code for our messenger bot. After copying the access token, click on the **Done** button.
- Next, if you scroll down a little bit you would see the webhooks section. 
- So the webhook section was created to enable you to receive messages sent by events from the Messenger platform. But we can't do so without setting up a server. 
- For this tutorial, we would be using the https://glitch.com/ to host our nodejs server for free.
- Go to glitch.com and create an account if you don't have one.
- On the top right corner of glitch click on **New Project**.
- A list of App Templates would be displayed. From the list, select the **hello-express** template.
- We will add the **body-parser** npm module to parse the request and append them to the req.body object and the **node-fetch** npm module to easily make an HTTP request
- From the left panel, click on the **package.json**, add the **body-parser** and **node-fetch**  module as a dependency. This would automatically trigger the installation of the module to your project.
![devcwiki](https://user-images.githubusercontent.com/36219292/95683754-291b3f80-0be5-11eb-9c6b-c1d4f1bcbf84.png)
- At this point we need to create a callback in the https://developers.facebook.com/ dashboard.
- To create a callback in the Facebook app dashboard we will need to copy our glitch app URL.
- To do so click on the share button on your glitch app on the top left corner of your app's interface.
- Select **live app** and copy the link displayed
![glitchlink](https://user-images.githubusercontent.com/36219292/95683799-5f58bf00-0be5-11eb-99dc-101ced793fe6.png)
- Next, go to https://developers.facebook.com/ and select the **wiki app** we created earlier. 
- Select the settings menu under the Messenger menu.
![webhook](https://user-images.githubusercontent.com/36219292/95683803-70a1cb80-0be5-11eb-8763-e928dafbca2f.png)
- Click on the **Add Callback URL** 
- A modal would be displayed requiring you to fill in some details like the link to your server on glitch.com platform and also a verify token that would be used to verify that the server code was created by you. 
- Also append **/webhook** to the URL of your glitch app and paste in the callback URL field
- I would use **devc** as the 'callback verify token'
- Next, I would click on the **Verify and save** button but an error would occur because we haven't created a webhook route in our node app for Facebook to connect to.
![webhookerror](https://user-images.githubusercontent.com/36219292/95683856-a34bc400-0be5-11eb-956d-e58f7ed49f8e.png)
- Don't close the modal as we would come back to it after creating the route for Facebook webhook to connect.
- To solve this error lets open the webpage of your glitch app.
-  Click on the **server.js** file to edit the file.
- Delete the template code written and paste the code below:-

   
```js
    const express = require("express");
    const app = express();
    let fetch = require("node-fetch");
    var bodyParser = require("body-parser");
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.get("/webhook", (req, res) => {
      // the webhook GET route checks the query of the webhook route
      // to see if the hub.verify_token parameter is equal to the same
      // callback token set on the facebook app dashboard
      // this is a security check
      //remember that I set "devc" as the callback parameter on 
      // the facebook app dashboard
      if (req.query["hub.verify_token"] === "devc") {
        res.send(req.query["hub.challenge"]);
      } else {
        res.send("Error, wrong validation token");
      }
    });
    // listen for requests 
    const listener = app.listen(process.env.PORT, () => {
      console.log("Your app is listening on port " + listener.address().port);
    });
 ```
 
 - You can go back to the Facebook app page with the modal opened and click on the **Verify and Save** button.
 - Next, you would need to set up the event to subscribe to. Since we need to be able to listen to messages sent from the Messenger platform, we would need to subscribe to the Message event.
 - So scroll down a little bit after setting the access token on the developers.facebook.com platform in the messenger tab of your wiki app.
 - Click on add subscriptions and select messages from the list of available fields to subscribe to.
 ![subscribetomessage](https://user-images.githubusercontent.com/36219292/95721836-15b2b780-0c6b-11eb-8c0f-7a8d53ea5803.png) 
 - At this point, you are now ready to control your messenger application through your node.js app.
 ##  API's to use in the server ( wit.ai API and Wikipedia API )
The wit.ai API would allow us to make an API request. To view the wit.ai API details, all you need to do is to go to the settings page of your app on the wit.ai platform. 
![witaisettings](https://user-images.githubusercontent.com/36219292/95687281-7fdf4400-0bfa-11eb-9033-d2815d878690.png)
 
 In the HTTP API section, you would see the API usage in curl format. Also, ensure you make a request using the available authorization header.
 
 ### A sample request to wit.ai platform
 Curl request: 
 
 ```bash
curl --location --request GET 'https://api.wit.ai/message?v=20201011&q=who%20is%20superman' \
--header 'Authorization: Bearer ${your_wit.ai_authorization_token}'
``` 

would return:

```json
{
    "text": "who is superman",
    "intents": [
        {
            "id": "366281614512148",
            "name": "find",
            "confidence": 1
        }
    ],
    "entities": {
        "wit$wikipedia_search_query:wikipedia_search_query": [
            {
                "id": "1698150627003367",
                "name": "wit$wikipedia_search_query",
                "role": "wikipedia_search_query",
                "start": 7,
                "end": 15,
                "body": "superman",
                "confidence": 0.9374,
                "entities": [],
                "suggested": true,
                "value": "superman",
                "type": "value"
            }
        ]
    },
    "traits": {}
}
```
From the wit.ai response, we would need to parse "wit$wikipedia_search_query:wikipedia_search_query" and obtain the **value** property of its first index.
The value would be used to query Wikipedia and obtain details of the person. 

### A sample request to the Wikipedia API
Curl Request:
 ```bash
curl --location --request GET 'https://en.wikipedia.org/api/rest_v1/page/summary/superman' 

```

would return:

```json
{
    "type": "standard",
    "title": "Superman",
    "displaytitle": "Superman",
    "namespace": {
        "id": 0,
        "text": ""
    },
    "wikibase_item": "Q79015",
    "titles": {
        "canonical": "Superman",
        "normalized": "Superman",
        "display": "Superman"
    },
    "pageid": 28381,
    "thumbnail": {
        "source": "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Supermanflying.png/213px-Supermanflying.png",
        "width": 213,
        "height": 320
    },
    "originalimage": {
        "source": "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
        "width": 250,
        "height": 375
    },
    "lang": "en",
    "dir": "ltr",
    "revision": "982215360",
    "tid": "9b590800-0b29-11eb-a4a1-4d168212b8b6",
    "timestamp": "2020-10-06T20:21:27Z",
    "description": "Fictional superhero",
    "description_source": "local",
    "content_urls": {
        "desktop": {
            "page": "https://en.wikipedia.org/wiki/Superman",
            "revisions": "https://en.wikipedia.org/wiki/Superman?action=history",
            "edit": "https://en.wikipedia.org/wiki/Superman?action=edit",
            "talk": "https://en.wikipedia.org/wiki/Talk:Superman"
        },
        "mobile": {
            "page": "https://en.m.wikipedia.org/wiki/Superman",
            "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Superman",
            "edit": "https://en.m.wikipedia.org/wiki/Superman?action=edit",
            "talk": "https://en.m.wikipedia.org/wiki/Talk:Superman"
        }
    },
    "extract": "Superman is a fictional superhero, who first appeared in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster and first appeared in the comic book Action Comics #1. Superman has been adapted to several other media including radio serials, novels, movies, television shows and theatre.",
    "extract_html": "<p><b>Superman</b> is a fictional superhero, who first appeared in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and first appeared in the comic book <span><i>Action Comics</i> #1</span>. Superman has been adapted to several other media including radio serials, novels, movies, television shows and theatre.</p>"
}
```
From the response above, our node server would use Facebook messenger API and return the value of the "extract" property to the messenger platform.
This explains how the messenger bot obtains the information.

### So back to node server setup:-
- We would need to set up some details for our **.env** file.
- On the Glitch platform, go to the .env file and append value for the keys below:
> the {} symbol serves as a place holder in the code below. So set it with your detail.

```bash
witaccess={your_wit.ai_authorization_token}
fbapi={your_fbaccesstoken}
```

- The messages from the messenger application on our page will be sent to our server using a POST request.
- So next, I would be creating a POST request handler on Glitch
> Don't copy the code below as I would post the final code at the end of the tutorial. The code below is a subset of the final code

```js
app.post("/webhook", async (req, res) => {
  // extracts the message sent from the messenger application
  let [message] = req.body.entry[0].messaging;

  //sends a GET request to the wit.ai platform
  let get = `https://api.wit.ai/message?v=20200923&q=${message.message.text}`;
  let answer = await fetch(encodeURI(get), {
    headers: {
      Authorization: `Bearer ${process.env["witaccess"]}`
    }
  });
  let wit = await answer.json();
 
})
```
- The code below extracts the required value (word ) that would be used to consume the Wikipedia API and also sends a GET request using the Wikipedia API
```js
  //tries to ensure that property to extract the value from the wit.ai response exists
  let mes;
  if (
    wit.entities &&
    wit.entities["wit$wikipedia_search_query:wikipedia_search_query"]
  ) {
    //building up the URL used to query Wikipedia
    let link = `https://en.wikipedia.org/api/rest_v1/page/summary/${wit.entities["wit$wikipedia_search_query:wikipedia_search_query"][0].value}`;

    let wiki = await fetch(encodeURI(link));
    let data = await wiki.json();

    if (data.title == "Not found.") {
      mes = "Not found";
    } else {
      mes = data.extract;
    }
  }
```
- Next after getting a response from the Wikipedia API we would need to use the Facebook API to send back a response to the user interacting with the Messenger app.
- The code below does that 
```js
 // obtain the sender id from message object 
  let body = {
    recipient: {
      id: message.sender.id
    },
    message: {
      text: mes
    }
  };
/*sends a response containing information from Wikipedia
back to the user on Messenger */
  try {
    let ans = await fetch('https://graph.facebook.com/v8.0/me/messages?access_token='+process.env["fbapi"], {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    });
    let res = await ans.json();
    console.log(res);
  } catch (e) {
    console.log("error", e);
  }
  res.send("");

```
Below is the total code is written for the node server.
```js
const express = require("express");
const app = express();
let fetch = require("node-fetch");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/webhook", (req, res) => {
  // the webhook GET route checks the query of the webhook route
  // to see if the hub.verify_token parameter is equal to the same
  // callback token set on the facebook app dashboard
  // this is a security check
  //remember that I set "devc" as the callback parameter on
  // the facebook app dashboard
  console.log(req.query);
  if (req.query["hub.verify_token"] === "devc") {
    res.send(req.query["hub.challenge"]);
  } else {
    res.send("Error, wrong validation token");
  }
});

app.post("/webhook", async (req, res) => {
  console.log('swakcy')
  // extracts the message sent from the messenger application
  let [message] = req.body.entry[0].messaging;

  //sends a GET request to the wit.ai platform
  let get = `https://api.wit.ai/message?v=20200923&q=${message.message.text}`;
  let answer = await fetch(encodeURI(get), {
    headers: {
      Authorization: `Bearer ${process.env["witaccess"]}`
    }
  });
  let wit = await answer.json();
  //tries to ensure that property to extract the value from the wit.ai response exists
  let mes;
  if (
    wit.entities &&
    wit.entities["wit$wikipedia_search_query:wikipedia_search_query"]
  ) {
    //building up the URL used to query Wikipedia
    let link = `https://en.wikipedia.org/api/rest_v1/page/summary/${wit.entities["wit$wikipedia_search_query:wikipedia_search_query"][0].value}`;

    let wiki = await fetch(encodeURI(link));
    let data = await wiki.json();

    if (data.title == "Not found.") {
      mes = "Not found";
    } else {
      mes = data.extract;
    }
  }
  
  // obtain the sender id from message object 
  let body = {
    recipient: {
      id: message.sender.id
    },
    message: {
      text: mes
    }
  };

/*sends a response containing information from Wikipedia
back to the user on Messenger */
  try {
    let ans = await fetch('https://graph.facebook.com/v8.0/me/messages?access_token='+process.env["fbapi"], {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    });
    let res = await ans.json();
    console.log(res);
  } catch (e) {
    console.log("error", e);
  }
  res.send("");
});

// listen for requests
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

```
Great work so far. We  are done with the server setup!. We will proceed to test the Messenger bot

