const express = require("express");

const {
  createTopupoffer,
  seeTopupoffers,
  seeSingleTopupoffer,
  deleteTopupoffer,
  updateTopupoffer,
  seeDashboard,
} = require("../controllers/TopupController");

const requireAuth = require("../middleware/requireAuth");

//creating router
const router = express.Router();

//checking every topup offer available
router.get("/", seeTopupoffers);

// require auth for all workout routes
router.use(requireAuth);

//see user dashboard
router.get("/dashboard", seeDashboard);

//adding new topup offer sale
router.post("/add", createTopupoffer);

//viewing a single topup offer
router.get("/:id", seeSingleTopupoffer);

//deleting a single topup offer
router.delete("/:id", deleteTopupoffer);

//edit a single topup offer
router.patch("/:id", updateTopupoffer);

module.exports = router;
