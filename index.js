const { response } = require("express");
const express = require("express");

const motherRequester = (resquestObject, responseObject) => {
  const url = responseObject.url;
  responseObject.setHeader("content-type", "text/html");
  if (url === "/cat") {
    responseObject.send("<h2>This is not a cat</h2>");
  } else if (url === "/book") {
    responseObject.send("<h1>Silence in the Library!</h1>");
  } else if (url === "/pantry") {
    responseObject.send("<h2>No provisions in the pantry</h2>");
  } else if (url === "/red") {
    responseObject.send("<h2>i am the colour of blood</h2>");
  } else if (url === "/daddy") {
    responseObject.send("<h1>Daddy's coming home</h1>");
  } else if (url === "/hotel") {
    responseObject.send("<h2>Oya! Come and sleep</h2>");
  } else {
    responseObject.send("<h1>Error 404</h1><h3>Page does not exist.</h3>");
  }
};

const handleGetCat = (req, res) => {
  res.send('<h1>Get Cat</h1>')
};

const handlePutBook = (req, res) => {
  res.send('<h1>Put Books Here</h1>')
}

const handleDeletePantry = (req, res) => {
  res.send('<h1>Delete the food</h1>')
}

const handlePostRed = (req, res) => {
  res.send('<h1>Red Letter Day</h1>')
}

const server = express();

server.get('/cat', handleGetCat)
server.put('/book', handlePutBook)
server.delete('/pantry', handleDeletePantry)
server.post('/red', handlePostRed)

server.listen(3000, "127.0.0.1", () => {
  console.log("the thing is working");
});
