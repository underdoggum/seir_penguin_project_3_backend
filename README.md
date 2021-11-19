# Bookmark'd (Back-end)
## by Lucy Liu, Jameson Wang, & Nathan Noack

## Explanation of App
This repo includes an API backend that transmits Seller and Item model data as JSON for use in the React frontend. Users may create, read, update, or delete data, through this API connected to MongoDB.\
[Deployed frontend](https://unwasted.netlify.app/)\
[Frontend repo](https://github.com/underdoggum/seir_penguin_project_3_frontend)\
[Deployed backend](https://unwasted-backend.herokuapp.com/)

## Dependencies (NPM modules)
- Dotenv
- Express
- Mongoose
- Morgan
- Cors

## Models
- Items:
  - Name
  - Quantity
  - Price
  - Description

(in the future)
- Seller:
  - Name
  - Array of Items

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
| Action | Path      | HTTP Verb | action |
|--------|-----------|-----------|----------------------------------|
| Index  | /item     | GET       | get all books (index)|
| Show   | /item     | POST      | get a particular books (create)|
| Update | /item/:id | PUT       | get a particular books (update)|
| Delete | /item/:id | DELETE    | get a particular books (destroy)|

## Challenges
