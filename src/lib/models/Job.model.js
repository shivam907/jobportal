const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
  },
  experience: {
    type: String,
  },
  package: {
    type: String,
  },
  location: {
    type: String,
  },
  degree: {
    type: String,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
  date:{
    type:Date
  }
},{
    timestamps:true,
});
// JobSchema.pre('save', function preSave(next){
//   var something = this;
//   something.date(Date.now());
//   next();
// });
const Job = mongoose.models.Job ||  mongoose.model("Job", JobSchema);

module.exports = Job;
