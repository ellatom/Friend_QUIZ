const { createProxyMiddleware } = require("http-proxy-middleware");
debugger;
module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://localhost:3030",
            changeOrigin: true 
        })
    );
};

