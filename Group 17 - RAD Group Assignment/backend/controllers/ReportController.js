const Report = require("../models/reportModel");
const mongoose = require("mongoose");

// Get all Rankups
const getReports = async (req, res) => {
  const user_id = req.user._id;
  const reports = await Report.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(reports);
};

// Get a single rankup
const getSingleReport = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such report exists" });
  }
  const reports = await Report.findById(id);

  if (!reports) {
    return res.status(404).json({ error: "No such report exists" });
  }
  res.status(200).json(reports);
};

// Create new Rankup
const fileReport = async (req, res) => {
  const { title, details } = req.body;
  try {
    const user_id = req.user._id;
    const reports = await Report.create({
      title,
      details,
      user_id,
    });
    res.status(200).json(reports);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a report
const deleteReport = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such report exists" });
  }
  const reports = await Report.findOneAndDelete({ _id: id });
  if (!reports) {
    return res.status(404).json({ error: "No such report exists" });
  }
  res.status(200).json(reports);
};

// Update a report
const updateReport = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such report exists" });
  }
  const reports = await Report.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!reports) {
    return res.status(404).json({ error: "No such report exists" });
  }
  res.status(200).json(reports);
};

module.exports = {
  getReports,
  getSingleReport,
  fileReport,
  deleteReport,
  updateReport,
};
