const express = require('express');
const path = require('path');
const axios = require('axios');
const config = require('./configAPI.js');

const app = express();
const port = 3000;

app.use(express.static('./client/dist'));
app.use(express.json());

app.get('/products', (req, res) => {
  console.log('Getting list of products...');
  let params = req.query;
  axios.get(config.url + '/products', { params, ...config.auth })
    .then(response => res.send(response.data));
});

//Luka's endpoints
app.get('/reviews', (req, res) => {
  console.log('Getting reviews...');
  let params = req.query;
  axios.get(config.url + '/reviews', { params, ...config.auth })
    .then(response => res.send(response.data));
});

app.get('/reviews/meta', (req, res) => {
  console.log('Getting review metadata...');
  let params = req.query;
  axios.get(config.url + '/reviews/meta', { params, ...config.auth })
    .then(response => res.send(response.data));
});

app.put('/reviews/feedback', (req, res) => {
  console.log('Putting report feedback...');
  let params = req.body;
  axios.put(config.url + '/reviews/' + params.reviewId + '/' + params.feedback, {}, config.auth)
    .then(() => res.end());
});

app.post('/reviews', (req, res) => {
  console.log('Posting a new review...');
  let params = req.body;
  axios.post(config.url + '/reviews', params, config.auth)
    .then(() => res.end());
});

//Will's endpoints


//Derek's endpoints



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

