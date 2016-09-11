const RestServer = require('./rest/rest-server');

module.exports = class App {
    constructor() {
        this.restServer = new RestServer();
    }

    start(){
        this.restServer.start();
    }
};