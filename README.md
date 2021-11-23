# Bookmark'd (Back-end)
## by Lucy Liu, Jameson Wang, & Nathan Noack

## Explanation of App
This repo includes an API backend that transmits Seller and Item model data as JSON for use in the React frontend. Restaurants (sellers) may create, read, update, or delete their item data, through this API connected to MongoDB. Buyers may simply view all items from all sellers at this time.\
[Frontend repo](https://github.com/underdoggum/seir_penguin_project_3_frontend)\
[Deployed frontend](https://unwasted.netlify.app/)\
[Deployed backend](https://unwasted-backend.herokuapp.com/)

## Dependencies (NPM modules)
- Dotenv
- Express
- Mongoose
- Morgan
- Cors
- Bcrypt
- Jsonwebtoken

## Models
- Items:
  - Name
  - Quantity
  - Price
  - Description
  - Image URL

- User:
  - username
  - password
  - type of user (buyer or seller)
  - Restaurant's name (seller)
  - Restaurant's phone number (seller)
  - Restaurant's email address (seller)


  #### Example
```
App
 ├── Bob's Rib Shack
 │          ├── Brisket
 │          │      ├── Name: Smoked Brisket
 │          │      ├── Quantity: 3 lbs
 │          │      └── Price: $60
 │          ├── Ham Hock
 │          │      ├── Name: Ham Hock
 │          │      ├── Quantity: 2 pcs.
 │          │      └── Price: $15
 │          └ ...
 ├── Starbucks
 │          └── Pumpkin Spice Frap
 │                 ├── Name: Pumpkin Spice Frap
 │                 ├── Quantity: 2 pcs.
 │                 └── Price: $5
 │
 └── ...
```

## CRUD Route Table
| Action | Path       | HTTP Verb | Action                                      |
|--------|------------|-----------|---------------------------------------------|
| Index  | /items     | GET       | get all items for a specific seller (index) |
| Index  | /allItems  | GET       | get all items from all sellers (index)      |
| Show   | /items     | POST      | get a particular books (create)             |
| Update | /items/:id | PUT       | get a particular books (update)             |
| Delete | /items/:id | DELETE    | get a particular books (destroy)            |

## Challenges
Please see the [frontend repo](https://github.com/underdoggum/seir_penguin_project_3_frontend) for a list of challenges we've encountered while making this full-stack app