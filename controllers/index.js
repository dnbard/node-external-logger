var package = require('../package.json');

function IndexController(){}

IndexController.prototype.default = function(req, res){
    res.send('External logging server v.' + package.version + ' is running');
}

module.exports = new IndexController();
