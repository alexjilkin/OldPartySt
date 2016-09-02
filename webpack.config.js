var webpack = require('webpack');
var path = require('path');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
    publicPath: '/static/',
		hot: true
  },
  resolve: {
    root: path.resolve('./src')
  },
  plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
		devFlagPlugin
  ],
  module: {
    loaders: [
			{ test: /\.js$/, loaders: ['babel'], include: __dirname + '/src/' },
			{ test: /\.jsx$/, loaders: ['babel'], include: __dirname + '/src/' },
			{ test: /\.scss$/, loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 'sass'] }
		]
  }
};
