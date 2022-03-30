// Intro to Architecture

In this module we build a NASA project using pre-packaged front end react which sits as the client while the server uses NodeJS API and Express to manage the back end.

Both the client and the server have their own NPM packages/

// Client e.g, Front End Architecture

React Client is made up of a public folder which contains index.html which references a 'root' file index.js which references an 'app' that manages all the front end App.js

App.js contains sounds and router references which is rendered via DOM. The routers point to various pages (AppLayout, History, Launch & Upcoming) which all contain components that are utilized several times (Header, Footer etc..) and contained within those pages are also hooks which allow react to manage 'state' of Launches, Planets which is managed by a request file.

// Server e.g, Back End Architecture

Contained within the server we have a MC starting intiially with Models, Routes and eventually Controllers

All of which are linked to the server 

// API Server Set Up

# NPM 

npm init -y
npm install Express
npm i --save-dev nodemon 
npm i cors
npm i csv-parse
npm i morgan

npm start
nodemon server.js 

# App & Server js..

We want to seperate Express middle where from server so we use two files; this is useful for when we need to implment websockets which allow for data streaming rather than protocals such as HTTP

// Adding a GET Planets 

# Route Set Up 

Create folder for collection of planets..
Route planets to the application app.js

# Controller Set Up

Create a controller for getAllPlanets

Front End Requests w/ API

# CORS

Whitelisting of servers for front end and back end to run at the same time which allows for cross orgin behavior.

# Controller & Route

Controller & Routers are a One-to-One relationship

Models can have an One-to-Many or Many-to-One relationship with Controllers

# NPM package

Can run scripts in the root folder by changing folder and initiating npm or by --prefix foldername

# Creating more functionality

Collections & Models to add Launches, Upcoming and History 

# Map Objects

// Mappings (key-value pairs or functions) allow you to preserve the the order..