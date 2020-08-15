// const express = require('express');
// const request = require('request');
// const favicon = require('express-favicon');
// const path = require('path');
// const port = process.env.PORT || 8080;
// const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));


// app.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');
//    next();
//  });
 
//  app.get('/positions.json', (req, res) => {
//    request(
//      { url: 'https://jobs.github.com/positions.json' },
//      (error, response, body) => {
//        if (error || response.statusCode !== 200) {
//          return res.status(500).json({ type: 'error', message: err.message });
//        }
 
//        return res.json(JSON.parse(body));
//      }
//    )
//  });


// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));


// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   if (err) {
//    console.log(err);
//    res.status(500).send(err);
//   }
// });
// app.listen(port);