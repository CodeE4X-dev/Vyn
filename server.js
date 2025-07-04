const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

const htmlPages = [
  '404',
  'doxurself',
  'index',
  'notnsfw',
  'redirect',
  'token',
  'CodeRemover',
  'xylaqt',
  'Check',
  'Zypherion/Scripts',
  'jawa/jawa/jawa/jawa/jawa/jawa/jawa/jawa/jawa/jawa/jawa/woho.html'
];

htmlPages.forEach(function (page) {
  app.get('/' + page, function (req, res) {
    res.sendFile(path.join(__dirname, page + '.html'));
  });
});

app.get('/Luxion/Loader.lua', function (req, res) {
  res.type('text/plain');
  res.sendFile(path.join(__dirname, 'Luxion', 'Loader.lua'));
});

app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, function () {
  console.log(`Server running at http://localhost:${PORT}`);
});
