"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackHotMiddleware = require("webpack-hot-middleware");

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackDevMiddleware = require("webpack-dev-middleware");

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpack3 = require("../webpack.config");

var _webpack4 = _interopRequireDefault(_webpack3);

var _private_env = require("./config/private_env");

var _private_env2 = _interopRequireDefault(_private_env);

var _projects = require("./routes/projects");

var _projects2 = _interopRequireDefault(_projects);

var _email = require("./routes/email");

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_webpack4.default.plugins.push(new _webpack2.default.HotModuleReplacementPlugin());

var compiler = (0, _webpack2.default)(_webpack4.default);

_mongoose2.default.connect(_private_env2.default.MONGO_URI);

var app = (0, _express2.default)();
var port = _private_env2.default.PORT;

app.use(_bodyParser2.default.json());

app.use((0, _webpackDevMiddleware2.default)(compiler, {
  noInfo: true,
  hot: true,
  historyApiFallback: true,
  publicPath: _webpack4.default.output.publicPath
}));

app.use((0, _webpackHotMiddleware2.default)(compiler));

app.get("*", function (req, res) {
  res.sendFile(_path2.default.resolve("./client", "index.html"));
});

app.use("/api/projects", _projects2.default);
app.use("/api/email", _email2.default);

app.listen(port);
//# sourceMappingURL=index.js.map