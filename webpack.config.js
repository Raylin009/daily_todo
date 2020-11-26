const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "src/index.html",
  filename: "index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        include: `${__dirname}/src`,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader',
            options: {
              modules:{localIdentName: '[name]_[local]'},
              localsConvention: 'asIs',
            },
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin]
};