const procodeConfig = require("../adcui.json");
const url = require("url");
const getCustomComponentScriptList = require("./componentConfigGenerator.js");
const getJsLibScriptAndStyleList = require("./jsLibConfigGenerator.js");
const { jsLibScriptList, jsLibStyleList } = getJsLibScriptAndStyleList();

const getHtmlWebpackPluginConfig = function () {
  return [
    {
      name: "app",
      entry: "src/app/index.js",
      filename: "index.html",
      template: "src/app/index.html",
      chunks: ["vendors", "app"],
      chunksSortMode: "manual",
      title: "首页",
      procodeConfig: {
        customComponentScriptList: getCustomComponentScriptList(),
        jsLibScriptList,
        jsLibStyleList
      }
    }
  ];
};

module.exports = {
  getHtmlWebpackPluginConfig
};
