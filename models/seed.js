// //////////////////
// //Import your dependencies
// //////////////////

// const mongoose = require("mongoose")
// const Item = require("..server/")

// /////////////////////////////
// // SEED DATA
// //////////////////////////////
// db.on("open", () =>{
//     const starterItems = [
//       {
//         name: "Chicken breast",
//         quantity: 3,
//         price: 50,
//         description: "3x 10lb containers of chicken breast, expires on 12/11/21",
//         img: "https://static01.nyt.com/images/2020/05/01/science/01TB-CHICKEN/01TB-CHICKEN-videoSixteenByNineJumbo1600.jpg"
//       },
//       {
//         name: "Cheese",
//         quantity: 9,
//         price: 45,
//         description: "A fine lookin' large hunk-o-stinky cheese. 20lbs by weight.",
//         img: "https://cheese.com/media/uploads/cheese.com/2021/11/versions/cut%20wheels%20of%20cheese-w343.webp"
//       },
//       {
//         name: "Dark Roast Coffee",
//         quantity: 1,
//         price: 15,
//         description: "A huge 20lb sack of coffee beans. Don't need anymore. $15 OBO, no solicitors.",
//         img: "https://m.media-amazon.com/images/I/81DLJc5I5XL._SX522_.jpg"
//       },
//       {
//         name: "Moo milk",
//         quantity: 1,
//         price: 1,
//         description: "A gallon of milk. Hurry! Offer (and milk) expires tomorrow!",
//         img: "https://www.meijer.com/content/dam/meijer/product/0004/12/5010/20/0004125010200_2_A1C1_1200.png"
//       }
//      ]
//     // delete all fruits
//     Item.deleteMany({}).then((data) => {
//       // seed the starter fruits
//       Item.create(starterItems).then((data) => {
//         console.log(data)
//       })
//   })
//   })