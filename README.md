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
