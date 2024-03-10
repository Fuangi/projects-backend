const mongoose = require("mongoose");

const eoyProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A project must have a user(owner) please!"],
  },
  level: {
    type: Number,
    enum: [200, 300, 400, 601, 602],
    required: [true, "Please provide your level"],
  },
  specialty: {
    type: String,
    enum: ["SWE", "ITS", "GWD"],
    required: [true, "Please provide your specialty"],
  },
  projectTopic1: {
    type: String,
    required: [true, "Please provide your project topic"],
  },
  projectTopic2: {
    type: String,
  },
  projectSupervisor: {
    type: String,
    required: [
      true,
      "Please propose a supervisor you'll want for your project",
    ],
  },
});

// Creating a model
const EoyProject = mongoose.model("EoyProject", eoyProjectSchema);

module.exports = EoyProject;
