const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/js/index.jsx'),
  output: {
    filename: 'bundle.[fullhash].js',
    path: __dirname,
  },
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname,'src','assets'),
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
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'public/index.html'})
  ]
}