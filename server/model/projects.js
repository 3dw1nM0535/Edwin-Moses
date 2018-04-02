import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {
    type: String,
  },
  projectTitle: {
    type: String,
  },
  projectScreenshot: {
    type: String,
  },
  description: {
    type: String,
  },
  urlLink: {
    type: String,
  },
  repoLink: {
    type: String,
  },
});

export default mongoose.model("Project", projectSchema);
