const procodeConfig = require("../adcui.json");

const getCustomComponentList = function () {
  return procodeConfig.customComponentDependencies || [];
};

const getCustomComponentScriptList = function () {
  const customComponentList = getCustomComponentList();
  return customComponentList.map(function ({ server, src }) {
    return `${server}${src}`;
  });
};

module.exports = getCustomComponentScriptList;
