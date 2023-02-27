const express = require('express');

//init app 
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.listen(PORT, () =>console.log('app is up and running on port: 3000'));
