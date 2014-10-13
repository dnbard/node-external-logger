var indexController = require('./controllers/index'),
    logController = require('./controllers/log'),
    pingController = require('./controllers/ping');

function Routing(app){
    app.get('/', indexController.default);

    app.post('/log', logController.default);
    app.post('/log/:prefix', logController.custom);
    app.post('/log/:prefix/:type', logController.customWithType);

    app.get('/ping', pingController.default);
}

module.exports = Routing;
