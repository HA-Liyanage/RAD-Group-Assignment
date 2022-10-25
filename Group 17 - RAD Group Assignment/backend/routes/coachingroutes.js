const express = require("express");
const {
  getCoaches,
  getaCoach,
  createCoach,
  updateCoach,
  deleteCoach,
  getCoachDashboard,
} = require("../controllers/CoachingController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//GET all coach
router.get("/", getCoaches);

// require auth for all coaching routes
router.use(requireAuth);

router.get("/dashboard", getCoachDashboard);

//GET a single coach
router.get("/:id", getaCoach);

//POST a new coach
router.post("/add", createCoach);

//DELETE a coach
router.delete("/:id", deleteCoach);

//UPDATE a coach
router.patch("/:id", updateCoach);

module.exports = router;
