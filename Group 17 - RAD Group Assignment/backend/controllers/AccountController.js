const Account = require("../models/accountModel");
const mongoose = require("mongoose");

//get all accounts
const getAccounts = async (req, res) => {
  const accounts = await Account.find({}).sort({ createdAt: -1 });

  res.status(200).json(accounts);
};

//see dashboard
const getDashboard = async (req, res) => {
  const user_id = req.user._id;
  const accounts = await Account.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(accounts);
};

//gets an single account
const getAccount = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such account" });
  }

  const account = await Account.findById(id);

  if (!account) {
    return res.status(404).json({ error: "No such account" });
  }

  res.status(200).json(account);
};

//create a new account
const createAccount = async (req, res) => {
  const {
    game_name,
    offer_standing_duration,
    acc_user_name,
    password,
    sale_price,
    description,
    offer_insurance,
    access,
  } = req.body;

  //add doc to db
  try {
    const user_id = req.user._id;
    const account = await Account.create({
      game_name,
      offer_standing_duration,
      acc_user_name,
      password,
      sale_price,
      description,
      offer_insurance,
      access,
      user_id,
    });
    res.status(200).json(account);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a account
const deleteAccount = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such account" });
  }

  const account = await Account.findOneAndDelete({ _id: id });

  if (!account) {
    return res.status(404).json({ error: "No such account" });
  }

  res.status(200).json(account);
};

//update a account
const updateAccount = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such account" });
  }

  const account = await Account.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!account) {
    return res.status(404).json({ error: "No such account" });
  }

  res.status(200).json(account);
};

module.exports = {
  getAccount,
  getAccounts,
  deleteAccount,
  updateAccount,
  createAccount,
  getDashboard,
};
