module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|woff|svg|eot|ttf|woff2)$/,
        loader: "url-loader?limit=8192&name=images/[name].[ext]",
      },
    ],
  },
};
