const express = require('express');
const bodyParser = require('body-parser');
const { resolve } = require('path');

const app = express();
const db = require('./models/db');

module.exports = app
  // body parsing middleware
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

  // serve static files
  .use(express.static(resolve(__dirname, 'public')))

  // serve api
  //.use('/api', require('./api'))

  .get('/*', (_, res) => res.sendFile(resolve(__dirname, 'public', 'index.html')))

  // error handling middleware
  .use((err, req, res, next) => {
    console.error(err);
  });

console.log(db)

db.sync()
  .then(console.log)
  .then(() => {
    const server = app.listen(
      process.env.PORT || 1337,
      () => {
        console.log('~~~ started http server for rvsource ~~~')
        const { address, port } = server.address();
        const host = address === '::' ? 'localhost' : address;
        const urlSafeHost = host.includes(':') ? `[${host}]` : host;
        console.log(`Listening on http://${urlSafeHost}:${port}`);
      }
    );
  })
  .catch(console.error);

// var port = 3000;
// app.listen(port, function () {
//   console.log('The server is listening closely on port', port);
//   db.sync()
//   .then(function () {
//     console.log('Synchronated the database');
//   })
//   .catch(function (err) {
//     console.error('Trouble right here in River City', err, err.stack);
//   });
// });
