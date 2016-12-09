/**
 * Express Server
 * Used for testing the production build
 */
var express = require('express');
var app = express();
var compression = require('compression')();

app.set('port', (process.env.PORT_WEB || process.env.PORT || 8080));

app.use(compression);
app.use(express.static(__dirname));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
// app.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });

app.get('/*', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function () {
    console.log('Listening on port', app.get('port'));
});