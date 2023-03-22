const { Configuration } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const path = require('path')
/**
 * @type {Configuration} //配置智能提示
 */
module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    clean: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.ts$/, //解析ts
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(process.cwd(), 'tsconfig.json'),
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  devServer: {
    hot: true,
    port: 8000,
    open: true
  },
  plugins: [new HtmlWebpackPlugin({ title: 'webpack', template: './public/index.html' }), new VueLoaderPlugin()]
}
