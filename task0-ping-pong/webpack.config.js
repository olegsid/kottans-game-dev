module.exports = {
  entry: {
    main: "./src/index.js"
  },
  devtool: "source-map",
  mode: "development",
	module: {
		rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
		]
	}
};
