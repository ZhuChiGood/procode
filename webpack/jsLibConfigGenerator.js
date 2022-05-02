const procodeConfig = require("../adcui.json");

const getJsLibList = function () {
  return procodeConfig.javascriptLibraryDependencies || [];
};

const buildScriptAndStyleUrl = function (server, srcList) {
  return srcList.map((src) => {
    return `${server}${src}`;
  });
};

const getSingleJsLibScriptAndLinkUrlList = function ({ server, src }) {
  const jsSrcList = src.filter((itm) => itm.endsWith(".js"));
  const cssSrcList = src.filter((itm) => itm.endsWith(".css"));
  const scriptFileUrl = buildScriptAndStyleUrl(server, jsSrcList);
  const styleFileUrl = buildScriptAndStyleUrl(server, cssSrcList);
  return { scriptFileUrl, styleFileUrl };
};

const getJsLibScriptAndStyleList = function () {
  const jsLibList = getJsLibList();
  let jsLibScriptList = [];
  let jsLibStyleList = [];
  jsLibList.forEach((jsLib) => {
    const { scriptFileUrl, styleFileUrl } = getSingleJsLibScriptAndLinkUrlList(jsLib);
    jsLibScriptList = jsLibScriptList.concat(scriptFileUrl);
    jsLibStyleList = jsLibStyleList.concat(styleFileUrl);
  });
  return { jsLibScriptList, jsLibStyleList };
};

module.exports = getJsLibScriptAndStyleList;
