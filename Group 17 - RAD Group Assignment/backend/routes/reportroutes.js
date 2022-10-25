const express = require("express");

// controller functions
const {
  getReports,
  getSingleReport,
  fileReport,
  deleteReport,
  updateReport,
} = require("../controllers/ReportController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

router.get("/", getReports);

router.post("/add", fileReport);

router.get("/:id", getSingleReport);

router.delete("/:id", deleteReport);

router.patch("/:id", updateReport);

module.exports = router;
