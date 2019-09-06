const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: ['@babel/polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer : {
      contentBase : './dist'
  },
  plugins :  [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })
  ],
  module :  {
        rules :  [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:  {
                    loader: 'babel-loader'
                }

            },
            {
              test: /\.(scss)$/,
              use: [{
                loader: 'style-loader', // inject CSS to page
              }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
              }, {
                loader: 'postcss-loader', // Run postcss actions
                options: {
                  plugins: function () { // postcss plugins, can be exported to postcss.config.js
                    return [
                      require('autoprefixer')
                    ];
                  }
                }
              }, {
                loader: 'sass-loader' // compiles Sass to CSS
              }]
            }
        ]
  }
};