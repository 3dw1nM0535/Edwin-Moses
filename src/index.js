"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _private_env = require("./config/private_env");

var _private_env2 = _interopRequireDefault(_private_env);

var _projects = require("./routes/projects");

var _projects2 = _interopRequireDefault(_projects);

var _email = require("./routes/email");

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// config.plugins.push(new webpack.HotModuleReplacementPlugin());

// const compiler = webpack(config);

_mongoose2.default.connect(_private_env2.default.MONGO_URI);
// import webpack from "webpack";
// import webpackHotMiddleware from "webpack-hot-middleware";
// import webpackDevMiddleware from "webpack-dev-middleware";

// import config from "../webpack.config";


var app = (0, _express2.default)();
var port = _private_env2.default.PORT;

app.use(_bodyParser2.default.json());
app.use(_express2.default.static(_path2.default.resolve("build")));

/*
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  hot: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
}));
*/
// app.use(webpackHotMiddleware(compiler));

app.get("*", function (req, res) {
  res.sendFile(_path2.default.resolve("./build", "index.html"));
});

app.use("/api/projects", _projects2.default);
app.use("/api/email", _email2.default);

app.listen(port);
//# sourceMappingURL=index.js.map