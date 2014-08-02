var express = require('express'),
    path = require('path'),
    app = express(),
    meta = require('./package.json'),
    port = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.redirect('/' + meta.name + '/' + meta.version + '/');
})
app.listen(port);
console.log("Server listen on " + port);
