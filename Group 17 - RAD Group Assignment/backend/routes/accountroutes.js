const express = require("express");
const {
  createAccount,
  getAccount,
  deleteAccount,
  updateAccount,
  getAccounts,
  getDashboard,
} = require("../controllers/accountController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//GET all accounts
router.get("/", getAccounts);

// require auth for all coaching routes
router.use(requireAuth);

router.get("/dashboard", getDashboard);

//GET a single account
router.get("/:id", getAccount);

//POST a new account
router.post("/add", createAccount);

//DELETE an account
router.delete("/:id", deleteAccount);

//UPDATE an account
router.patch("/:id", updateAccount);

module.exports = router;
