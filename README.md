# Eat-da-Burger

## Overview:
Eat-Da-Burger is a restaurant application that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app displays the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger is moved to the "devoured list" on the right side of the page. This full-stack site utilizes the npm packages [Express](https://www.npmjs.com/package/express), [MySQL](https://www.npmjs.com/package/mysql), and [Handlebars](https://www.npmjs.com/package/handlebars) -- generates the HTML, in addition to using the mySQL database backend, Node.js, and a homemade ORM to query and route data in the application.

## Deployed Heroku Application Link:
  * https://stark-oasis-34729.herokuapp.com/

## Demo Video Links:
- Terminal Demo Video: https://drive.google.com/file/d/1SNRGThlwujaEGePmYSxdwEJj-QYuJmLC/view
- Website Demo Video: https://drive.google.com/file/d/1Z-LYWmPd0G4VBVVP3xzg1uNwyS_Rq-56/view

## Technologies Used:
- MySQL 
- Node.js
- Express
- Handlebars
- Homemade ORM
- JavaScript
- jQuery
- DotEnv

  
## Required npm Packages:
  * [Express](https://www.npmjs.com/package/express)

  * [MySQL](https://www.npmjs.com/package/mysql)
  
  * [Handlebars](https://www.npmjs.com/package/handlebars)
  
  * [DotEnv](https://www.npmjs.com/package/dotenv)

## Install Application to your Personal Machine
    git clone https://github.com/jenaym/burger.git
    cd burger
    npm install
    
## Create an .env file & a .gitignore file
  1. Create a .env file in the main directory of the application
  2. Within the .env file insert the following code and replace "mysqlPassword" with your personal MySQL password:                  `DB_PASS=mysqlPassword`
  3. Save the .env file
  4. Next create a .gitignore file in the main directory of the application
  5. Within the .gitignore file paste the following code, then save the file:
      `node_modules`
      `.env`
  
## DB Steup 
  1. Navigate into the `db` folder of the app using your command line 
  2. Once inside the `db` folder, start MySQL command line tool and login using the following code: `mysql -u root -p`
  3. With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and        all of the queries in it -- in other words, you'll be creating your database.
  4. Next insert the entries defined in `seeds.sql` by running the file: `source seeds.sql`.
  5. Close out of the MySQL command line tool: `exit`.
  
## Running Application
  * Using your command line, navigate into the application folder and run the following command: `server.js`

## Author:
  Jenay McAuley
