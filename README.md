// Updating node.js via CLI on ubuntu terminal
sudo npm install -g n
sudo n lts
node --version // verify latest version update

// Create directory in CLI
mkdir CRUDjs
cd CRUDjs 
// open CRUDjs in vscode

//inside vscode terminal
touch index.js // create index file 
npm init -y // initialise npm
npm install express // install express

// start the server, by running the following in terminal
node index.js
npm install nodemon //install nodemon to listen for changes and update automatically on browser

// place "start": "nodemon index.js", inside package.json file under the scripts before "tests".

// Create a new folder called routes and a new file called users.js inside the routes folder
npm start //starts server

// copy your API URL, http://localhost:5000/users, and paste it either on Postman or in browser to test the GET method {browsers only tests GET requests while postman tests all methods. If you are using Postman, you will first need to make a GET request, then paste your API URL, and then click on send. After that, you will see the list of users in your Postman console.}

// Create the POST /users Endpoint for adding data to the database by typing the following in terminal
npm install uuid //generate a unique ID for each user you will be creating. 
// import the uuid package inside the users.js file 
