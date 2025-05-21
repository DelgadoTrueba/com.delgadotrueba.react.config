const path = require("path");

const webpack = require("webpack");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const DefinePlugin = webpack.DefinePlugin;

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const devServer = require("./webpack.devserver.config");

// const {
//   getModuleFederationConfig,
// } = require("./webpack.module.federation.config");

const jsBuildFilename = "static/js/[name].[chunkhash:8].js";
const jsChunkBuildFilename = "static/js/[name].[chunkhash:8].chunk.js";
const cssBuildFilename = "static/css/[name].[contenthash:8].css";

module.exports = {
  getDefaultConfig: (env = {}, argv = {}) => {
    const isDevelopment = argv.mode === "development";
    const withSource = process.env.SOURCE_MAP === "true" ? true : false;

    return {
      mode: isDevelopment ? "development" : "production",
      output: {
        path:  path.resolve(__dirname, "dist"),
        publicPath: `${process.env.PUBLIC_PATH}/`,
        clean: true,
        uniqueName: "@delgadotrueba/react-config/webpack",
        filename: jsBuildFilename,
        chunkFilename: jsChunkBuildFilename,
      },
      resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
        // alias: {
        //   "@locales": path.resolve(__dirname, "./src/locales/index.ts"),
        //   "@mocks": path.resolve(__dirname, "./src/mocks"),
        //   "@env": path.resolve(__dirname, "./src/environments/env.ts"),
        //   "@utils": path.resolve(__dirname, "./src/utils"),
        //   "@utils-test": path.resolve(__dirname, "./src/utils-test"),
        //   "@shell": path.resolve(__dirname, "./src/shell"),
        //   "@delgadotueba/catalogo-ui/css": path.resolve(
        //     __dirname,
        //     "./node_modules/@delgadotueba/catalogo-ui/dist/css"
        //   ),
        //   "@sass/breakpoints": path.resolve(
        //     __dirname,
        //     "./node_modules/@delgadotueba/catalogo-ui/dist/css/variables/_breakpoints.scss"
        //   ),
        // },
      },
      module: {
        rules: [
          {
            test: /\.m?js/,
            type: "javascript/auto",
            resolve: {
              fullySpecified: false,
            },
          },
          {
            test: /.(css|s[ac]ss)$/i,
            exclude: /.module.(css|s[ac]ss)$/i,
            use: [
              isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
              "sass-loader",
            ],
          },
          {
            test: /.module.(css|s[ac]ss)$/i,
            use: [
              isDevelopment
                ? "style-loader"
                : {
                    loader: MiniCssExtractPlugin.loader,
                  },
              {
                loader: "css-loader",
                options: {
                  importLoaders: 2,
                  esModule: true,
                  modules: {
                    namedExport: false,
                    exportOnlyLocals: false,
                    localIdentName: "[local]--[hash:base64:5]",
                    exportLocalsConvention: "asIs",
                  },
                },
              },
              "postcss-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
          {
            test: /\.(ts|tsx)$/,
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
            exclude: /node_modules/,
          },
          {
            test: /.(png|jpg|jpeg)$/,
            type: "asset/resource",
            generator: {
              filename: "static/assets/img/[hash][ext][query]",
            },
          },
          {
            test: /.(json)$/,
            type: "json",
          },
        ],
      },
      plugins: [
        // new ModuleFederationPlugin(
        //   getModuleFederationConfig(isDevelopment).pluginConfig
        // ),
        new HtmlWebPackPlugin({
          template: "./public/index.html"
        }),
        new MiniCssExtractPlugin({
          filename: cssBuildFilename,
        }),
        new DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify(argv.mode),
          "process.env.PUBLIC_HOST": JSON.stringify(process.env.PUBLIC_HOST),
          "process.env.PUBLIC_PATH": JSON.stringify(process.env.PUBLIC_PATH),
        }),
      ],
      devServer,
      devtool: withSource ? "cheap-module-source-map" : false,
      // ignoreWarnings: [
      //   {
      //     module: /@bundled-es-modules\/tough-cookie/,
      //   },
      // ],
    };
  },
};
