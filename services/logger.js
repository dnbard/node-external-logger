var reportTypes = require('../enums/reports');

function Logger(modulePrefix, reportType){
    this.prefix = modulePrefix || '';
    this.reportHandler = reportType? reportTypes[reportType] :reportTypes['default'];
}

Logger.prototype.log = function(){
    var args;

    if (!arguments || arguments.length === 0){
        throw new Error('Invalid arguments');
    }

    args = Array.prototype.slice.call(arguments, 1);

    if (this.prefix){
        args.unshift(this.reportHandler(this.prefix));
        args.unshift(new Date().toLocaleTimeString());
        args.unshift('%s %s ' + arguments[0]);
    } else {
        args.unshift(new Date().toLocaleTimeString());
        args.unshift('%s ' + arguments[0]);
    }

    console.log.apply(this, args);
}

module.exports = Logger;
