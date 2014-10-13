var Logger = require('../services/logger');

function LogController(){

}

function log(req, res, options){
    options = options || {};

    var prefix = options.prefix || null,
        type = options.type || null,
        logger = new Logger(prefix, type),
        payload = req.body;

    if (!payload){
        req.status(400).send();
    } else {
        logger.log(payload);
        res.status(200).send();
    }
}

LogController.prototype.default = function(req, res){
    log(req, res);
}

LogController.prototype.custom = function(req, res){
    log(req, res, {
        prefix: req.params.prefix
    });
}

LogController.prototype.defaultError = function(req, res){
    log(req, res, {
        type: 'error'
    });
}

LogController.prototype.customError = function(req, res){
    log(req, res, {
        prefix: req.params.prefix,
        type: 'error'
    });
}

LogController.prototype.customWithType = function(req, res){
    log(req, res, {
        prefix: req.params.prefix,
        type: req.params.type
    });
}

module.exports = new LogController();
