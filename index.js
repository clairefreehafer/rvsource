const express = require('express');
const bodyParser = require('body-parser');
const { resolve } = require('path');

const app = express();
const db = require('./models/db');

module.exports = app
  /**
   * body parsing middleware
   */
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

  /**
   * serve the api
   */
  .use('/api', require('./api'))

  /**
   * serve static files from /public
   */
  .use(express.static(resolve(__dirname, 'public')))

  /**
   * serve index.html for the base of every path
   */
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, 'public', 'index.html')))

  /**
   * handle errors
   */
  .use((err, req, res, next) => {
    console.error(err);
  });

/**
 * syncronize the database then start the server
 */
db.sequelize.sync()
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
