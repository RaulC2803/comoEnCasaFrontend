const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    modules: ["react", "react-dom"],
  },
  output: {
    //Directorio al cual se irá el archivo final
    path: path.resolve(__dirname, "dist"),
    //nombre del archivo final
    filename: "bundle-[name].js",
    library: "[name]",
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json"),
    }),
  ],
};
