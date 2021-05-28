const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
    watchContentBase: true,
    progress: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};



// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   //This property defines where the application starts
//   entry: {
//     main: path.resolve(__dirname, './src/index.js'),
//   },
    
//   //This property defines the file path and the file name which will be used for deploying the bundled file
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: '[name].bundle.js',
//   },
    
//   //Setup loaders
//   module: {
//     rules: [
//       {
//         test: /\.js$/, 
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       }
//     ]
//   },
    
//   // Setup plugin to use a HTML file for serving bundled js files
//   plugins: [
//   new HTMLWebPackPlugin(
//    {
//     template:"./src/index.html",
//     filename:"./index.html"
//    }
//   )
// ]
// //   plugins: [
// //     new HtmlWebpackPlugin({
// //       template: './src/index.html'
// //     })
// //   ]
// }