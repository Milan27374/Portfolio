const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  naam: String,
  category: String

});

module.exports = mongoose.model("Project", ProjectSchema,"project");