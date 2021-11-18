///////////////////////////////
// DEPENDENCIES
////////////////////////////////

require("dotenv").config()
const { PORT = 4000, DATABASE_URL } = process.env
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")


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
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));


///////////////////////////////
// User Schema for Authentication
////////////////////////////////
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true.valueOf,
  }
   
})

const User = mongoose.model("User", UserSchema)



///////////////////////////////
// Items Schema
////////////////////////////////


const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    min: 0
  },
  price: {
    type: Number,
    min: 0,
    required: true
  },
  description: String,
  img: String
})

const Item = mongoose.model("Item", ItemSchema)


///////////////////////////////
// MIDDLEWARE
////////////////////////////////

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


///////////////////////////////
// SEED DATA
////////////////////////////////

const starterItems = [
  {
    name: "Chicken breast",
    quantity: 3,
    price: 50,
    description: "3x 10lb containers of chicken breast, expires on 12/11/21",
    img: "https://static01.nyt.com/images/2020/05/01/science/01TB-CHICKEN/01TB-CHICKEN-videoSixteenByNineJumbo1600.jpg"
  },
  {
    name: "Cheese",
    quantity: 9,
    price: 45,
    description: "A fine lookin' large hunk-o-stinky cheese. 20lbs by weight.",
    img: "https://cheese.com/media/uploads/cheese.com/2021/11/versions/cut%20wheels%20of%20cheese-w343.webp"
  },
  {
    name: "Dark Roast Coffee",
    quantity: 1,
    price: 15,
    description: "A huge 20lb sack of coffee beans. Don't need anymore. $15 OBO, no solicitors.",
    img: "https://m.media-amazon.com/images/I/81DLJc5I5XL._SX522_.jpg"
  },
  {
    name: "Moo milk",
    quantity: 1,
    price: 1,
    description: "A gallon of milk. Hurry! Offer (and milk) expires tomorrow!",
    img: "https://www.meijer.com/content/dam/meijer/product/0004/12/5010/20/0004125010200_2_A1C1_1200.png"
  }
]


///////////////////////////////
// ROUTES
////////////////////////////////
// SEED route for testing
app.get("/items/seed", async (req, res) => {
  try {
    await Item.deleteMany({})
    await Item.create(starterItems)
    redirect("/items")
  } catch (error) {
    res.status(400).json(error)
  }
})

app.get("/", (req, res) => {
  res.send("ayyyy")
})

//  INDEX ROUTE
app.get("/items", async (req, res) => {
  try {
    res.json(await Item.find({}))
  } catch (error) {
    res.status(400).json(error)
  }
})
  
// CREATE ROUTE
app.post("/items", async (req, res) => {
  try {
    res.json(await Item.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
})

// UPDATE ROUTE
app.put("/items/:id", async (req, res) => {
  try {
    res.json(await Item.findByIdAndUpdate(req.params.id, req.body, { new: true }))
  } catch (error) {
    res.status(400).json(error)
  }
})

// DESTROY ROUTE
app.delete("/items/:id", async (req, res) => {
  try {
    res.json(await Item.findByIdAndRemove(req.params.id, req.body))
  } catch (error) {
    res.status(400).json(error)
  }
})


///////////////////////////////
// LISTENER
////////////////////////////////

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
