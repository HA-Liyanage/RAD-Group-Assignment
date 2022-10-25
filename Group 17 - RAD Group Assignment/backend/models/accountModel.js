const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    game_name: {
      type: String,
      required: true,
    },
    offer_standing_duration: {
      type: Number,
      required: true,
    },
    acc_user_name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    sale_price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    offer_insurance: {
      type: String,
      required: true,
    },
    access: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Account", accountSchema);
