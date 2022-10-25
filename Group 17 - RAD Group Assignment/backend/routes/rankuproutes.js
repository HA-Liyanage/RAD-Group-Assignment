const express = require("express");

const {
  getRankups,
  getRankup,
  createRankup,
  deleteRankup,
  updateRankup,
  seeRankupDashboard,
} = require("../controllers/RankController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.get("/", getRankups);

// require auth for all workout routes
router.use(requireAuth);

router.get("/dashboard", seeRankupDashboard);

router.get("/:id", getRankup);

router.post("/add", createRankup);

router.delete("/:id", deleteRankup);

router.patch("/:id", updateRankup);

module.exports = router;
