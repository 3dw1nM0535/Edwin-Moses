import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
// import webpack from "webpack";
// import webpackHotMiddleware from "webpack-hot-middleware";
// import webpackDevMiddleware from "webpack-dev-middleware";

// import config from "../webpack.config";
import privateEnv from "./config/private_env";

import projects from "./routes/projects";
import email from "./routes/email";

// config.plugins.push(new webpack.HotModuleReplacementPlugin());

// const compiler = webpack(config);

mongoose.connect(privateEnv.MONGO_URI);

const app = express();
const port = privateEnv.PORT;

app.use(bodyParser.json());
app.use(express.static(path.resolve("build")));

/*
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  hot: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
}));
*/
// app.use(webpackHotMiddleware(compiler));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./build", "index.html"));
});

app.use("/api/projects", projects);
app.use("/api/email", email);

app.listen(port);
