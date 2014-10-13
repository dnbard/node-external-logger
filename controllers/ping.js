function PingController(){

}

PingController.prototype.default = function(req, res){
    res.status(200).send();
}

module.exports = new PingController();
