const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/js/index.jsx'),
  output: {
    filename: 'bundle.[fullhash].js',
    path: path.resolve(__dirname,'dist')
  },
  devServer: {
    static: path.resolve(__dirname,'dist'),
    port: 8080,
    hot: true
  },
  resolve: {
    extensions: ['.jsx','...']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname,'public/index.html')})
  ]
}