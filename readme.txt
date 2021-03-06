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
npm run build

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

## Part II - Creating more functionality

Collections & Models to add Launches, Upcoming and History 

# Create Model

# Javascript Map Object new Map()

// Mappings allow you to match key-value pairs or functions; but it preserves the order which is not guarenteed if managed by just a regular object {}..

# Adding Router & Controller

Front End Clietn (Router JS) as applicable -> Apps(Router Constant + App Use) -> Launches Folder -> Launches.Router (launchesRouter) -> Launches.Controller (getAllLaunches) --> Model as applicable 

// Or vice versa

// Going into apps folder will need to require the router.

# Seperation of Concerns

Determining what should go into a model vs. Controller

Ex 1 - Model only works with the data that is stored; Controller only needs to work with the data model (not convert the data)

Benefit is solid strucutre of code which means less moving around of functions.. Investing in if you plan to continue to work on the project.

Layered Architecture - User Interface, Business Logic, Data Access (also refered to as a seperation of concern)

Module is responsible for one thing; and does well.. the more concerns the more complex to keep track of various changes and relationships between different components. Seperating concerns makes it easier to understand.

# Adding Functionality to addNewLaunch (Bottom Up Approach)

Base functionality by using the model to take data and design functions around that data. 

Step 1: Build a function that allows router to set launches using the mapping function within the model..
Step 2: Set up postman collection to make request via GET
Step 3: Update Controller w/ corresponding contoller functino to handle new request and Router to accept 'addNewLaunch' under /launches route (since everything is a launch within launchRouter)

# Validations Modules e.g, Packages & APIs

Parsing Dates
Error Handling
Validating - RegEx
Other Contitionals - Required Field, Missing Inputs & Rule Logic

# Connecting POST/Launches to Front End

Submit given launch data to launch system. 
GET - Default, POST - Option Object + Pass In Data

# Adding Functionality to deleteLaunch (Top Down Approach)



Front End Client (Upcoming.js - abortLaunch onClick -> useLaunches -> Request.js)-> Apps(Router Constant + App Use) -> Launches Folder -> Launches.Router (launchesRouter) -> Launches.Controller (getAllLaunches) --> Model as applicable 
