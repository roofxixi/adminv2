var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

var getHtml = function (Url, name) {
  return new HtmlWebpackPlugin({
    title: name,
    filename: Url + '.html',
    template: 'src/' + Url + '.html'
  })
}

module.exports = {
  //webpack-dev-server
  devServer: {
    port:8086,
  },
  //入口
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    //服务器启动就用这个绝对路径
    publicPath: "/dist/",
    filename: 'js/app.js'
  },
  plugins: [

    getHtml('index', '首页'),

    //提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/base.js'
    }),

    //单独打包css
    new ExtractTextPlugin("css/[name].css"),


  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        //单独提取css
        test: /\.css$/,
        // use: [ 'style-loader', 'css-loader' ]
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      //sass文件处理
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // 在开发环境使用 style-loader
          fallback: "style-loader"
        })
      },
      //图片的配置大图片就是用file-loader,小的就用url-loader
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'resource/[name].[ext]'
            }
          }
        ]
      }

    ]
  },
};