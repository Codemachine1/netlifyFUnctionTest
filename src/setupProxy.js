const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/.netlify/functions/", {
      target: "http://localhost:8080",
      pathRewrite: {
        "^/\\.netlify/functions": "",
      },
    })
  );
};