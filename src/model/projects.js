"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var projectSchema = new Schema({
  title: {
    type: String
  },
  projectTitle: {
    type: String
  },
  projectScreenshot: {
    type: String
  },
  description: {
    type: String
  },
  urlLink: {
    type: String
  },
  repoLink: {
    type: String
  }
});

exports.default = _mongoose2.default.model("Project", projectSchema);
//# sourceMappingURL=projects.js.map