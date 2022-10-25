const Coaching = require("../models/coachingModel");
const mongoose = require("mongoose");

//get all coaches
const getCoaches = async (req, res) => {
  const coach = await Coaching.find({}).sort({ createdAt: -1 });

  res.status(200).json(coach);
};

//get coaches dashboard
const getCoachDashboard = async (req, res) => {
  const user_id = req.user._id;
  const coach = await Coaching.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(coach);
};

// get a single coach
const getaCoach = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Coaching.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// create new coach
const createCoach = async (req, res) => {
  const {
    Offer_ID,
    platform,
    service_type,
    coaching_type,
    coach_tier,
    experience,
    language,
  } = req.body;

  try {
    const user_id = req.user._id;
    const workout = await Coaching.create({
      Offer_ID,
      platform,
      service_type,
      coaching_type,
      coach_tier,
      experience,
      language,
      user_id,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a coach
const deleteCoach = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Coaching.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

//update a coach
const updateCoach = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Coaching.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getCoaches,
  getaCoach,
  createCoach,
  updateCoach,
  deleteCoach,
  getCoachDashboard,
};
