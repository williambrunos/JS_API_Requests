# Hello, there!

In this repository lies the js code which allows me to build an API (can consume other API's) and consume it on the front end of the simple project.

## Creating API

how to create an API:
- Init a project with `` npm init -y`` -> initiate a package.json file without making any questions(-y)
- Install dependencies ``npm i express nodemon cors axios`` -> express: help us to create an API, nodemon: restart the server every time we change something on the API, cors -> set the connection between front end and API, axios:

We need to create the api with express dependency using:

````JS
const express = require('express')
const app = express()
````

So now on, the API is ready to be built. What does it mean "be built"? It means that we can configure a rout to the API and add http methods in some directory. On our case, we will set the API to listen to the '4567' gate and get some info on './' route (directory)

To put our API on rails, which means that will work, we need the command:

````SH
node server.js
````

After that, go to your navigator, open the dev tools and type on the console:

````JS
location.href = 'http://localhost:4567/'
````

This might lead you to a webpage with the response returned on the get function on server.js. If you make changes in your API, be sure to restart it on the terminal using ´^C´ and typing 'node server.js' again.

## Consuming API from Front End

To consume our API which is listening 'http://localhost:4567/' route and returning a json with some data stuff, we need to use the **fetch API**. Fetch API is a API from browsers used to search for some data in a certain route specified.

The fetch function is a promise, which means that the function will do its homework, but you have to wait until it does it. Because of that, in modern JS, we use asynchronism and asynchronous functions.

````JS
async function getApiContent() {
    const response = await fetch('http://localhost:4567/');
}
````

But not everything works so well, huh? Supose that our fetch API search for data on our route, mas find nothing or the route returns an error, what should we do? On that case, we should put the fetch promise inside a try catch block to treat the error returned by the API:

````JS
async function getApiContent() {
    try {
        const response = await fetch('http://localhost:4567/')
    } catch (error) {
        console.error(error)
    }
}
````

After that, we need to call the async function on the script tag of index.html

After all of these, we have to connect our index.html with the server using:

````SH
npx lite-server
````

Using browser sync, every time we update our index.html, lite-server will restart it. It also creates a whole new server only for the index.html, which in my case is 'http://localhost:3000'.

So...here we have a bug X(

fetch API search for some stuff from a server (3000 route) in other server (4567 route), being synchronized by lite-server, but CORS is a privacy policy between servers and its not leading us to consume the data from the 4567 route.

ERROR: "Access to fetch at 'http://localhost:4567/' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled."