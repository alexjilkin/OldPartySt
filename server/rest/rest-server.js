const path = require('path');
const config = require('./rest-server.config.js');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

module.exports = class RestServer{

    constructor() {
        const expressApp = express();
        const webpackCompiler = webpack(webpackConfig);
        this.expressApp = expressApp;

        expressApp.use(webpackDevMiddleware(webpackCompiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath,
            historyApiFallback: true
        }));

        expressApp.use(webpackHotMiddleware(webpackCompiler));

        expressApp.get('*', function(req, res) {
            res.sendFile(config.relativeClientIndexLocation);
        });
    }

    start(){
        this.expressApp.listen(config.port, config.host, function(err) {
            if (err) {
                console.log(err);
                return;
            }

            console.log('Listening at ' + config.host + ':' + config.port);
        });
    }
};