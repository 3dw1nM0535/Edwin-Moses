import express from "express";

import Project from "../model/projects";

const router = express.Router();

router.post("/", (req, res) => {
  const {
    title,
    projectTitle,
    projectScreenshot,
    description,
    urlLink,
    repoLink,
  } = req.body;
  const project = new Project({
    title,
    projectTitle,
    projectScreenshot,
    description,
    urlLink,
    repoLink,
  });
  project.save((err, result) => {
    if (err) {
      res.status(400).json({ err });
    }
    res.json({ result });
  });
});

router.post("/find", (req, res) => {
  Project.find({ title: req.body.title }).then((result) => {
    if (result) {
      res.json({ projects: result });
    } else {
      res.json({});
    }
  });
});

export default router;
