const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const isProduction = process.env.NODE_ENV === "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpackPluginConfigGenerator = require("./webpackPluginConfigGenerator.js");
const VueLoaderPluginInstance = new VueLoaderPlugin();

const extractCSS = new MiniCssExtractPlugin({
  filename: isProduction ? "static/css/[name].[contenthash:8].css" : "static/css/[name].css",
  chunkFilename: isProduction ? "static/css/[name].[contenthash:8].css" : "static/css/[name].css"
});

function resolve(dir) {
  return path.join(__dirname, "../" + dir);
}

const favicon = resolve("favicon.ico");

// 指定以__base64为后缀的svg转为base64
const svgBase64Reg = /__base64\.(svg)(\?.*)?$/;

const htmlWebpackPluginConfig = webpackPluginConfigGenerator.getHtmlWebpackPluginConfig();
const pathName = path.resolve(__dirname, "../src");
const PATH_ARR = [
  "@adc/vigour-ui/lib/common",
  "@adc/vigour-ui/lib/directives",
  "@adc/vigour-ui/lib/event",
  "@adc/vigour-ui/lib/libraries",
  "@adc/vigour-ui/lib/locale",
  "@adc/vigour-ui/lib/metadata",
  "@adc/vigour-ui/lib/mixins",
  "@adc/vigour-ui/lib/test-utils",
  "@adc/vigour-ui/lib/utils",
  "@adc/vigour-ui/lib/style/base",
  "@adc/vigour-ui/lib/style/common",
  "@adc/vigour-ui/lib/style/components",
  "@adc/vigour-ui/lib/style/font-icon",
  "@adc/vigour-ui/lib/style/image-icon",
  "@adc/vigour-ui/lib/style/images",
  "@adc/vigour-ui/lib/style/theme"
];
function isLegalRef(fileData, tempPathName) {
  if (fileData) {
    const str = fileData.replace(/\s*/g, "");
    for (let index = 0; index < PATH_ARR.length; index++) {
      if (str.indexOf(PATH_ARR[index]) > -1) {
        console.error(chalk.red(tempPathName));
        console.error(chalk.red(PATH_ARR[index]));
        throw new Error(
          "Invalid reference. Use a correct path. Only files in the @adc/vigour-ui/lib/style/index.css and @adc/vigour-ui/lib directories can be used. Other subdirectories cannot be accessed."
        );
      }
    }
  }
}
function getFilesByDir(pathName) {
  const files = fs.readdirSync(pathName);
  for (let index = 0; index < files.length; index++) {
    const tempPathName = path.join(pathName, files[index]);
    const file = fs.statSync(tempPathName);
    if (file.isFile()) {
      const fileData = fs.readFileSync(tempPathName, "utf-8");
      isLegalRef(fileData, tempPathName);
    } else if (file.isDirectory()) {
      getFilesByDir(tempPathName);
    }
  }
}
getFilesByDir(pathName);
const config = {
  resolve: {
    // 扩展名，比如import 'app.vue'，扩展后只需要写成import 'app'就可以了
    extensions: [".js", ".vue", ".scss", ".css", ".less", ".stylus", ".styl"],
    // 取路径别名，方便在业务代码中import
    alias: {
      src: resolve("src/"),
      common: resolve("src/common/"),
      views: resolve("src/views/"),
      components: resolve("src/components/"),
      directives: resolve("src/directives/"),
      filters: resolve("src/filters/"),
      mixins: resolve("src/mixins/"),
      "jquery-ui": "jquery-ui/ui"
    }
  },
  // loaders处理
  module: {
    noParse: /^(vue|vue-router|vuex)$/,
    rules: [
      {
        resourceQuery: /blockType=i18n/,
        type: "javascript/auto",
        loader: "@kazupon/vue-i18n-loader"
      },
      {
        test: /\.(svg)(\?.*)?$/,
        include: svgBase64Reg,
        loader: "url-loader",
        options: {
          limit: 99999,
          name: isProduction ? "static/font/[name].[hash:8].[ext]" : "static/font/[name].[ext]"
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        exclude: svgBase64Reg,
        loader: "file-loader",
        options: {
          name: isProduction ? "static/img/[name].[hash:8].[ext]" : "static/img/[name].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: isProduction ? "static/font/[name].[hash:8].[ext]" : "static/font/[name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "vue-style-loader",
            options: !isProduction ? {} : { publicPath: "../../" }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "vue-style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "vue-style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: "vue-style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "stylus-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        include: [resolve("src")],
        loader: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      }
    ]
  },
  node: {
    setImmediate: false,
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};

module.exports = {
  config,
  favicon,
  resolve,
  extractCSS,
  htmlWebpackPluginConfig,
  VueLoaderPluginInstance
};
