const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.js"),
  },
  output: {
    //Directorio al cual se irá el archivo final
    path: path.resolve(__dirname, "dist"),
    //nombre del archivo final
    filename: "src/[name].bundle.js",
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "url-loader",
          options: {
            //limite del tamaño del archivo
            limit: 1000,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./modules-manifest.json"),
    }),
  ],
};
