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
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      }
    ],
  },
};

