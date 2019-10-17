const express = require('express');
const redis = require('redis');
const process  = require('process')

const app = express();
const client = redis.createClient({
 host: 'redis-server'
  });

client.set('visitcount', 0);

app.get('/', (req, res) => {
  client.get('visitcount', (err, visitcount) => {
    res.send('Hello World! You have visited this page' + visitcount +'times' );
    client.set('visitcount', parseInt(visitcount) + 1);
  });
});

app.listen(8500, () => {
  console.log('Listening on port 8500');
});
