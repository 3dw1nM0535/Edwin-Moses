import mongoose from "mongoose";

const Schema = mongoose.Schema;

const emailSchema = new Schema({
  email: {
    type: String,
  },
  subject: {
    type: String,
  },
  emailBody: {
    type: String,
  },
});

export default mongoose.model("Email", emailSchema);
