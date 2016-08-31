var webpack = require('webpack');

module.exports = {
  devServer: {
    publicPath: '/bsrc/js',    
    filename: 'bundle.js',     //localhost:8089/webpack-dev-server/bsrc/jsbundle.js
    host: '0.0.0.0',
    port: 8089
  },
  entry: './dev/jsc', 
  output: {
        path: './bsrc/js',
        filename: 'bundle.js'  //react-articles/bsrc/js/bundle.js when running 'webpack'
    }, 
  module: {
    loaders: [
      {
       exclude: /node_modules/,
       test: /\.js$/,
       loader:  'babel-loader',
       query: {
         presets: ['react', 'es2015', 'stage-0'],
         plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
       }
      }
      // {
      //   test: /\.scss/,
      //   loader: 'style-loader|css-loader|sass-loader'
      // }
    ]
  },
  devtool:  'inline-source-map',
  plugins: [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin()
  //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
}