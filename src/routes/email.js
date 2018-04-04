"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _email = require("../model/email");

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post("/", function (req, res) {
  var _req$body$email = req.body.email,
      email = _req$body$email.email,
      subject = _req$body$email.subject,
      emailBody = _req$body$email.emailBody;


  var newMail = new _email2.default({
    email: email,
    subject: subject,
    emailBody: emailBody
  });

  newMail.save(function (err) {
    if (err) {
      res.json({ errors: { global: "Something went wrong" } });
    } else {
      res.json({ message: "Email sent." });
    }
  });
});

exports.default = router;
//# sourceMappingURL=email.js.map