const TopUp = require("../models/topupModel");
const mongoose = require("mongoose");

//See all topup sales
const seeTopupoffers = async (req, res) => {
  const topupoffers = await TopUp.find({}).sort({ createdAt: -1 });

  res.status(200).json(topupoffers);
};

//see user dashboard
const seeDashboard = async (req, res) => {
  const user_id = req.user._id;

  const topupoffers = await TopUp.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(topupoffers);
};

//See a single topup sale
const seeSingleTopupoffer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such sale exists" });
  }

  const singleSale = await TopUp.findById(id);

  if (!singleSale) {
    return res.status(404).json({ error: "No such sale exists" });
  }

  res.status(200).json(singleSale);
};

// Create a topup sale offer
const createTopupoffer = async (req, res) => {
  const {
    gameName,
    topupItem,
    count,
    price,
    description,
    title,
    duration,
    platform,
  } = req.body;

  //adding them to database
  try {
    const user_id = req.user._id;
    const topup = await TopUp.create({
      gameName,
      topupItem,
      count,
      price,
      description,
      user_id,
      duration,
      platform,
      title,
    });
    res.status(200).json(topup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete a topup sale offer
const deleteTopupoffer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such offer exists" });
  }

  const deletedoffer = await TopUp.findOneAndDelete({ _id: id });

  if (!deletedoffer) {
    return res.status(400).json({ error: "No such offer" });
  }

  res.status(200).json(deletedoffer);
};

//Update a topup offer
const updateTopupoffer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such offer exists" });
  }

  const updateOffer = await TopUp.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!updateOffer) {
    return res.status(400).json({ error: "No such offer" });
  }

  res.status(200).json(updateOffer);
};

module.exports = {
  createTopupoffer,
  seeTopupoffers,
  seeSingleTopupoffer,
  deleteTopupoffer,
  updateTopupoffer,
  seeDashboard,
};
