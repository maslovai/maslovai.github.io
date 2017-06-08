'use strict';

const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy');
const page = require('page');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(express.static(__dirname + '/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('.'));

app.get('/github/*', proxyGitHub);
function proxyGitHub(request, response) {
  console.log(process.env.TOKEN);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: '.' })
});

app.listen(PORT);
