const webpack       = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
console.log('!!!!!!!!!!!')
module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'],
  mode: 'development',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve('./public'),
  },
   plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css')
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./src', 'lib'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
            options: {
							babelrc: true
						}
        }
      },
      {
      test: /\.(scss)$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader', // translates CSS into CommonJS modules
      }, {
        loader: 'postcss-loader', // Run post css actions
        options: {
          plugins: function () { // post css plugins, can be exported to postcss.config.js
            return [
              require('precss'),
              require('autoprefixer')
            ];
          }
        }
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]
    },
    {
      test: /\.css$/,
       use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader', // translates CSS into CommonJS modules
      }]
    }
    ]
  },
  // devServer: {
  //   contentBase: './public',
  //   hot: true,
  //   historyApiFallback: {
  //     index: 'index.html'
  //   },
  //   watchOptions: {
  //     aggregateTimeout: 300,
  //     poll: 1000, // How often check for changes (in milliseconds)
  //   }
  // }
  // plugins: [
  //   new webpack.LoaderOptionsPlugin({
  //     test: /\.js$/,
  //     exclude: /(node_modules|bower_components)/,
  //     use: {
  //       loader: 'babel-loader',
  //         options: {
  //           babelrc: true
  //         }
  //     }
  //   })
  // ],
};