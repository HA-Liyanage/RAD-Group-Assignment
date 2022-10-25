const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const topupSchema = new Schema(
  {
    gameName: {
      type: String,
      require: true,
    },
    topupItem: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      require: true,
    },
    duration: {
      type: String,
      require: true,
    },
    platform: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TopUp", topupSchema);
