const { response } = require("express");
const express = require("express");
const server = express();

const motherRequester = (requestObject, responseObject) => {
  const url = requestObject.url;
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

const path = require('path');

// server.get('/cat', function(req, res) {
//     res.sendFile(path.join(__dirname + '/html/cat.html'));
// });


const handleGetCat = (req, res) => {
  res.sendFile(path.join(__dirname + '/html/cat.html'))
};

const handlePutBook = (req, res) => {
  res.send('<h1>Put Books Here</h1>')
}

const handleDeletePantry = (req, res) => {
  res.sendFile(path.join(__dirname + '/html/pantry.html'))
}

const handlePostRed = (req, res) => {
  res.send('<h1>Red Letter Day</h1>')
}

const handleGetHotel = (req, res) => {
  res.sendFile(path.join(__dirname + '/html/hotel.html'))
}



server.get('/cat', handleGetCat)
server.put('/book', handlePutBook)
server.delete('/pantry', handleDeletePantry)
server.post('/red', handlePostRed)
server.get('/hotel', handleGetHotel)

server.listen(3000, "127.0.0.1", () => {
  console.log("the thing is working");
});
