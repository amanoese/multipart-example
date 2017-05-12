const express = require('express');
const multer = require('multer')

const app = express();
const upload = multer({dest: 'uploaded'})

app.use('/',express.static('src'));
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.post('/postFiles', upload.array('files'), function (req, res) {
  console.log(req.files);
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
