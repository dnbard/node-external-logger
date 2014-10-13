var express = require('express'),
    app = express(),
    config = require('./config'),
    routing = require('./routing'),
    bodyParser = require('body-parser'),
    Logger = require('./services/logger'),
    colors = require('colors'),
    logger = new Logger('Server'),
    package = require('./package.json');

app.use(bodyParser.text());
routing(app);

app.listen(config.port, function(err){
    if (err){
        throw err;
    } else {
        logger.log('Local Web Logger v.%s started at port %s', package.version, colors.green(config.port));
    }
});
