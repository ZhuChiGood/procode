const opn = require("opn");
const chalk = require("chalk");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const portfinder = require("portfinder");
const webpackDev = require("./webpack.config.dev");
const webpackConfigBase = require("./webpack.config.base.js");
const { serverAddr, cookies } = require("./envs");
const path = require("path");
const _proxy = [
  {
    context: [
      "/app",
      "/servicecreator",
      "/batch",
      "/bpmruntime",
      "/alarm-visual-push",
      "/adc-ui",
      "/adc-app",
      "/adc-web",
      "/adc-file",
      "/adc-asset",
      "/adc-batch",
      "/adc-model",
      "/adc-static",
      "/adc-system",
      "/adc-service",
      "/adc-studio-ui",
      "/adc-studio-web",
      "/adc-studio-app",
      "/adc-studio-misc",
      "/adc-studio-model",
      "/adc-studio-service",
      "/adc-studio-project-mgt"
    ],
    target: serverAddr,
    changeOrigin: true,
    secure: false,
    ws: true,
    logLevel: "debug",
    headers: {
      Cookie: cookies
    }
  }
];

async function extractedInitserver() {
  const cwd = process.cwd();
  const protocol = "http";
  // 获取地址
  const domain = "0.0.0.0";
  // 动态获取端口，默认8080
  portfinder.basePort = 8080;
  const port = await portfinder.getPortPromise();
  const publicUrl = `${protocol}://${domain}:${port}`;
  // inject dev & hot-reload middleware entries
  const sockjsUrl = `?${publicUrl}/sockjs-node`;
  // inject dev/hot client
  webpackDev.entry.app.push(
    // dev server client
    require.resolve("webpack-dev-server/client") + sockjsUrl,
    // hmr client
    require.resolve("webpack/hot/dev-server")
  );
  return {cwd, domain, port};
}

async function initServer() {
  const {cwd, domain, port} = await extractedInitserver();
  // 配置devServer
  const compiler = webpack(webpackDev);
  const server = new WebpackDevServer(compiler, {
    before: function (app) {
      // mock 接口
      app.get("/mock/:name", (req, res) => {
        const filePath = path.join(cwd, "mock", req.params.name);
        setTimeout(() => {
          res.sendFile(filePath);
        }, 1000);
      });
    },
    proxy: _proxy,
    clientLogLevel: "none",
    quiet: true,
    disableHostCheck: true, // 为了手机可以访问
    contentBase: webpackConfigBase.resolve("dev"), // 本地服务器所加载的页面所在的目录
    watchContentBase: true,
    inline: true, // 实时刷新
    hot: true // 使用热加载插件 HotModuleReplacementPlugin
  });

  // 关闭监听保证进程关闭
  ["SIGINT", "SIGTERM"].forEach((signal) => {
    process.on(signal, () => {
      server.close(() => {
        process.exit(0);
      });
    });
  });
  process.on("SIGHUP", function () {
    process.kill(process.pid, "SIGTERM");
  });

  // 编译完成后提示文案
  compiler.hooks.done.tap("Webpack devServer serve", (stats) => {
    if (stats.hasErrors()) {
      return;
    }
    console.log("  App running at:");
    console.log(`  - Local:   ${chalk.cyan("http://localhost" + ":" + port)}`);
  });

  server.listen(port, domain, (err) => {
    err && console.log(err);
    // 新窗口打开
    opn(`http://localhost:${port}`);
  });
}

// 启动
initServer();
