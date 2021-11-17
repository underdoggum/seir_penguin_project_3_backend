///////////////////////////////
// DEPENDENCIES
////////////////////////////////

require("dotenv").config();
const { PORT = 3000, DATABASE_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));


///////////////////////////////
// ROUTES
////////////////////////////////

app.get("/", (req, res) => {
    res.send("ayyyy");
  });
  
  
//  INDEX ROUTE
  app.get("/restaurant", async (req, res) => {
    try {
      res.json(await Restaurant.find({}));
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
// CREATE ROUTE
  app.post("/restaurant", async (req, res) => {
    try {
      res.json(await Restaurant.create(req.body));
    } catch (error) {
      res.status(400).json(error);
    }
  });


///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));