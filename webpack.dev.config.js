const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.js"),
  },
  output: {
    //Directorio al cual se irá el archivo final
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    chunkFilename: "js/[id].[chunkhash].js",

    //nombre del archivo final
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    open: true,
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        //que tipos de archivo no quiero que se aplica el babel loader
        exclude: /node_modules/,
      },
      {
        //test: tipo de archivo
        test: /\.css$/,
        //use: que hacer
        //
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/i,
        use: {
          loader: "file-loader",
          options: {
            //limite del tamaño del archivo
            name: "[folder]/[name].[ext]",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};
