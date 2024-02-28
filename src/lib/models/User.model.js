const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    college: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
// JobSchema.pre('save', function preSave(next){
//   var something = this;
//   something.date(Date.now());
//   next();
// });
const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
