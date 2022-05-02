const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const webpackConfigBase = require("./webpack.config.base.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const entrydata = {};
webpackConfigBase.htmlWebpackPluginConfig.forEach((pageData) => {
  entrydata[pageData.name] = ["babel-polyfill", webpackConfigBase.resolve(pageData.entry)];
});

const config = Object.assign(webpackConfigBase.config, {
  mode: "development",
  // sourcemap 模式
  devtool: "eval-source-map",
  // 入口
  entry: entrydata,
  // 输出
  output: {
    path: webpackConfigBase.resolve("dev"),
    filename: "[name].js",
    globalObject: "this"
  },
  plugins: [
    // make sure to include the plugin for the magic
    webpackConfigBase.VueLoaderPluginInstance,

    // 复制文件
    new CopyWebpackPlugin([
      // 复制favicon到dist

      {
        from: webpackConfigBase.favicon,
        to: webpackConfigBase.resolve("dev")
      },
      {
        from: webpackConfigBase.resolve("custom_component/**"),
        to: webpackConfigBase.resolve("dev")
      },
      {
        from: webpackConfigBase.resolve("JsLib/**"),
        to: webpackConfigBase.resolve("dev")
      },
      {
        from: webpackConfigBase.resolve("assets/**"),
        to: webpackConfigBase.resolve("dev")
      }
    ]),
    // 热替换插件
    new webpack.HotModuleReplacementPlugin(),
    // 更友好地输出错误信息
    new FriendlyErrorsPlugin(),
    // 提示信息
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProgressPlugin()
  ]
});

// html 模板插件
webpackConfigBase.htmlWebpackPluginConfig.forEach((pageData) => {
  config.plugins.push(new HtmlWebpackPlugin(Object.assign(pageData, {})));
});

module.exports = config;
