///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config()
const { PORT = 4000,  DATABASE_URL} = process.env
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan") 
const cors = require("cors")
const config = {useUnifiedTopology: true, useNewUrlParser: true,}
const AuthRouter = require("./controllers/user")


///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.json())
app.use(cors());
app.use(morgan("tiny"));
const auth = require("./auth")

/////////////////////////////
// DATABASE CONNECTION
//////////////////////////////
mongoose.connect(DATABASE_URL, config)

const db = mongoose.connection
// Connection Events

  db.on("open", () => console.log("You are connected to mongoose"))
  db.on("close", () => console.log("You are disconnected from mongoose"))
  db.on("error", (error) => console.log(error));


///////////////////////////////
// Items Schema
////////////////////////////////

const ItemSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
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
db.on("open", ()=> {

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
  ];
  Item.deleteMany({}).then((data) => {
    // seed the starter items
    Item.create(starterItems).then((data) => {
       console.log(data)
    })
})
})

/////////
//AUTH ROUTERS
/////////

app.get("/", auth, (req,res)=>{
  res.json(req.payload)
})

app.use("/auth", AuthRouter);


///////////////////////////////
// ROUTES
////////////////////////////////

app.get("/items", auth, async (req, res) => {
  try {
    const {username} = req.payload
    res.status(200).json(await Item.find({username})) // all the item for the user w/ that username
  }
  catch(error){
    res.status(400).json({error})
  }
})

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

// //  INDEX ROUTE
// app.get("/items", auth, async (req, res) => {
//   try {
//     res.json(await Item.find({}))
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })
  
// CREATE ROUTE
app.post("/items", auth, async (req, res) => {
  try {
    const {username} = req.payload
    req.body.username = username
    res.status(200).json(await Item.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
})

// UPDATE ROUTE
app.put("/items/:id", auth, async (req, res) => {
  try {
    const {username} = req.payload
    req.body.username = username
    res.status(200).json(await Item.findByIdAndUpdate(req.params.id, req.body, { new: true }))
  } catch (error) {
    res.status(400).json(error)
  }
})

// DESTROY ROUTE
app.delete("/items/:id", auth, async (req, res) => {
  try {
    res.status(200).json(await Item.findByIdAndRemove(req.params.id, req.body))
  } catch (error) {
    res.status(400).json(error)
  }
})


///////////////////////////////
// LISTENER
////////////////////////////////

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
