"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var emailSchema = new Schema({
  email: {
    type: String
  },
  subject: {
    type: String
  },
  emailBody: {
    type: String
  }
});

exports.default = _mongoose2.default.model("Email", emailSchema);
//# sourceMappingURL=email.js.map