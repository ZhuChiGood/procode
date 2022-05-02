const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpackConfigBase = require("./webpack.config.base.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserJsPlugin = require("terser-webpack-plugin");

const ANALYZE = process.env.ANALYZE === "active";
const ONLINE = process.env.ONLINE === "active";
const CDN = process.env.CDN || "./";

// 将第三方依赖（node_modules）的库打包，从而充分利用浏览器缓存
const entrydata = {};
webpackConfigBase.htmlWebpackPluginConfig.forEach((pageData) => {
  entrydata[pageData.name] = ["babel-polyfill", webpackConfigBase.resolve(pageData.entry)];
});

// webpack配置
const config = Object.assign(webpackConfigBase.config, {
  mode: "production",

  /*
   * You should configure your server to disallow access to the Source Map file for normal users!
   * devtool: 'source-map', // 因为需要PE支持，暂时先不生成吧
   */
  entry: entrydata,
  output: {
    path: webpackConfigBase.resolve("dist"),
    publicPath: CDN,
    filename: "static/js/[name].[contenthash:8].js",
    chunkFilename: "static/js/[name].[contenthash:8].js"
  },
  optimization: {
    // 分割文件
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          name: "vendors",
          chunks: "initial"
        }
      }
    },
    // 压缩js
    minimizer: [
      new TerserJsPlugin({
        cache: true,
        parallel: true
      })
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    webpackConfigBase.VueLoaderPluginInstance,
    // Scope hosting
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CleanWebpackPlugin("dist", {
      root: webpackConfigBase.resolve("")
    }),
    // 复制文件
    new CopyWebpackPlugin([
      // 复制favicon到dist
      {
        from: webpackConfigBase.favicon,
        to: webpackConfigBase.resolve("dist/")
      },
      {
        from: webpackConfigBase.resolve("assets/**"),
        to: webpackConfigBase.resolve("dist/")
      }
    ]),
    // 定义全局常量
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"',
        ONLINE: ONLINE ? "true" : "false"
      }
    })
  ]
});

webpackConfigBase.htmlWebpackPluginConfig.forEach((pageData) => {
  config.plugins.push(
    new HtmlWebpackPlugin(
      Object.assign(pageData, {
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true
        }
      })
    )
  );
});

if (ANALYZE) {
  const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
