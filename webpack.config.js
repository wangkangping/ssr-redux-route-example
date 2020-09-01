const path = require("path");
// The plugin will generate an HTML5 file for you that includes all your webpack bundles
const HWP = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
// const autoprefixer = require("autoprefixer");

module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: "[name][hash].js",
  },
  //For Hot Module Replacement
  devServer: {
    contentBase: "./dist",
    hot: true,
    // For refreshing page to redirect to index.html
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "srcset",
                type: "srcset",
              },
              {
                tag: "img",
                attribute: "data-src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-srcset",
                type: "srcset",
              },
              {
                tag: "link",
                attribute: "href",
                type: "src",
                filter: (tag, attribute, attributes) => {
                  if (!/stylesheet/i.test(attributes.rel)) {
                    return false;
                  }

                  if (
                    attributes.type &&
                    attributes.type.trim().toLowerCase() !== "text/css"
                  ) {
                    return false;
                  }

                  return true;
                },
              },
              // More attributes
            ],
            urlFilter: (attribute, value, resourcePath) => {
              // The `attribute` argument contains a name of the HTML attribute.
              // The `value` argument contains a value of the HTML attribute.
              // The `resourcePath` argument contains a path to the loaded HTML file.

              if (/example\.pdf$/.test(value)) {
                return false;
              }

              return true;
            },
            root: ".",
          },
        },
      },
      {
        test: /\.s?css$/,
        oneOf: [
            {
                test: /\.module\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: 'inline',
                            plugins: () => [require('autoprefixer')()],
                        }
                    }, "sass-loader",
                ]
            },
            {
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        //MiniCssExtractPlugin:extracts CSS into separate files
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        }
                    }, "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: 'inline',
                            plugins: () => [require('autoprefixer')()],
                        }
                    }, "sass-loader",
                ]
            }
        ],
    },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              name: "[name]-[hash:5].min.[ext]",
              limit: 100000,
              // publicPath: 'assets/',
              outputPath: "assets/",
            },
          },
          {
            loader: "image-webpack-loader",
            // minify image with
            options: {
              disable: process.env.NODE_ENV === "production" ? false : true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WriteFilePlugin(), // when we use hot module to reload webapp, the content will not wirte into disk, only memory, this plugin force to write content into disk
    new CleanWebpackPlugin(),
    new HWP({
      template: path.join(__dirname, "./public/index.html"),
      // filename: "index.html",
      // chunks: ['index']
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    // For Hot Module Replacement
    new webpack.HotModuleReplacementPlugin(),
  ],
};
