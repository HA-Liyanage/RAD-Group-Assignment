const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const rankupSchema = new Schema(
  {
    gameName: {
      type: String,
      required: true,
    },
    cRank: {
      type: String,
      required: true,
    },
    eRank: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rankup", rankupSchema);
