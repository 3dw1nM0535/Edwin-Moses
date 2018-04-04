"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _projects = require("../model/projects");

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post("/", function (req, res) {
  var _req$body = req.body,
      title = _req$body.title,
      projectTitle = _req$body.projectTitle,
      projectScreenshot = _req$body.projectScreenshot,
      description = _req$body.description,
      urlLink = _req$body.urlLink,
      repoLink = _req$body.repoLink;

  var project = new _projects2.default({
    title: title,
    projectTitle: projectTitle,
    projectScreenshot: projectScreenshot,
    description: description,
    urlLink: urlLink,
    repoLink: repoLink
  });
  project.save(function (err, result) {
    if (err) {
      res.status(400).json({ err: err });
    }
    res.json({ result: result });
  });
});

router.post("/find", function (req, res) {
  _projects2.default.find({ title: req.body.title }).then(function (result) {
    if (result) {
      res.json({ projects: result });
    } else {
      res.json({});
    }
  });
});

exports.default = router;
//# sourceMappingURL=projects.js.map