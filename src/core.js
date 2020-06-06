const proxyMiddleware = require('http-proxy-middleware');
const app = require("express")();
const colors = require("colors");
const serverStatic = require("serve-static");
const baseDir = process.cwd();

module.exports = async function (params) {
  var proxy1 = proxyMiddleware(params.proxy.context, {
    target: params.proxy.options.target
  });
  app.use(proxy1);
  app.use(serverStatic(`${baseDir}/${params.build}`, {
    index: [`index.html`]
  }));
  let port = params.port || 8888;
  let listenStr = `listen at http://localhost:${port},......`;
  console.log(listenStr.bold.cyan);
  app.listen(port);
};