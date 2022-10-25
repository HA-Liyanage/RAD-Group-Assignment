require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const topupRoutes = require("./routes/topuproutes");
const userRoutes = require("./routes/userroutes");
const rankupRoutes = require("./routes/rankuproutes");
const coachingRoutes = require("./routes/coachingroutes");
const accountRoutes = require("./routes/accountroutes");
const reportRoutes = require("./routes/reportroutes");

//creating express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/topups", topupRoutes);
app.use("/user", userRoutes);
app.use("/rankups", rankupRoutes);
app.use("/coaching", coachingRoutes);
app.use("/accounts", accountRoutes);
app.use("/reports", reportRoutes);

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listening on a port
    app.listen(process.env.PORT, () => {
      console.log("Connected to database & Listing on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
