const Rankup = require("../models/rankModel");
const mongoose = require("mongoose");

// Get all Rankups
const getRankups = async (req, res) => {
  const rankups = await Rankup.find({}).sort({ createdAt: -1 });
  res.status(200).json(rankups);
};

// Get rankup dashboard
const seeRankupDashboard = async (req, res) => {
  const user_id = req.user._id;
  const rankups = await Rankup.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(rankups);
};

// Get a single rankup
const getRankup = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such rankup order" });
  }
  const rankup = await Rankup.findById(id);

  if (!rankup) {
    return res.status(404).json({ error: "No such rankup order" });
  }
  res.status(200).json(rankup);
};

// Create new Rankup
const createRankup = async (req, res) => {
  const { gameName, cRank, eRank, duration, amount, username, password } =
    req.body;
  try {
    const user_id = req.user._id;
    const rankup = await Rankup.create({
      gameName,
      cRank,
      eRank,
      duration,
      amount,
      username,
      password,
      user_id,
    });
    res.status(200).json(rankup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a rankup
const deleteRankup = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such rankup order" });
  }
  const rankup = await Rankup.findOneAndDelete({ _id: id });
  if (!rankup) {
    return res.status(404).json({ error: "No such rankup order" });
  }
  res.status(200).json(rankup);
};

// Update a rankup
const updateRankup = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such rankup order" });
  }
  const rankup = await Rankup.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!rankup) {
    return res.status(404).json({ error: "No such rankup order" });
  }
  res.status(200).json(rankup);
};

module.exports = {
  getRankups,
  getRankup,
  createRankup,
  deleteRankup,
  updateRankup,
  seeRankupDashboard,
};
