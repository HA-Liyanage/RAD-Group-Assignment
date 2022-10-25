const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coachSchema = new Schema(
  {
    Offer_ID: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    service_type: {
      type: String,
      required: true,
    },
    coaching_type: {
      type: String,
      required: true,
    },
    coach_tier: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Coaching", coachSchema);
