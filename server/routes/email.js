import express from "express";
import Email from "../model/email";

const router = express.Router();

router.post("/", (req, res) => {
  const {
    email,
    subject,
    emailBody,
  } = req.body.email;

  const newMail = new Email({
    email,
    subject,
    emailBody,
  });

  newMail.save((err) => {
    if (err) {
      res.json({ errors: { global: "Something went wrong" } });
    } else {
      res.json({ message: "Email sent." });
    }
  });
});

export default router;
