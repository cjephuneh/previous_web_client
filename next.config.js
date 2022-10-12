module.exports = {
  module: {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ["https://murmuring-spire-64412.herokuapp.com"],
    },
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

