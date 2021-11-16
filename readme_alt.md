# Bookmark'd (Back-end)
## by Lucy Liu, Jameson Wang, & Nathan Noack

## Explanation of App
This repo includes an API backend that transmits Seller and Item model data as JSON for use in the React frontend. Users may create, read, update, or delete data, through this API connected to MongoDB.\
[Deployed frontend](https://example.com)\
[Frontend repo](https://example.com)\
[Deployed backend](https://example.com)

## Dependencies (NPM modules)
- Dotenv
- Express
- Mongoose
- Morgan
- Cors

## Models
- Seller:
  - Name
  - Array of Items
- Items:
  - Name
  - Quantity
  - Price
  - Description

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
| url | method | action |
|-----|--------|--------|
| /bookmark | get | get all books (index)|
| /bookmark | post | get a particular books (create)|
| /bookmark/:id | put | get a particular books (update)|
| /bookmark/:id | delete | get a particular books (destroy)|
