<hr />
<h2 align="center">
  ✨ Node & NestJS & Cloud Firestore ✨
</h2>
<hr />

<p align="center">
  A simple <a href="http://nodejs.org" target="_blank">Node.js</a> sample built with <a href="https://nestjs.com/" target="_blank">NestJS</a> and <a href="https://firebase.google.com/products/firestore" target="_blank">Cloud Firestore</a>.
</p>

<p align="center">
  <a href="https://github.com/paulononaka/inventory_ts_firestore/actions/workflows/main.yml"><img alt="build-test status" src="https://github.com/paulononaka/inventory_ts_firestore/actions/workflows/main.yml/badge.svg"></a> 
  <a href="https://www.linkedin.com/in/paulononaka" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5"></a>
</p>

## Description

Simple sample of an API built with Node & NestJS & Cloud Firestore.

## ADRs

You can find Architectural Decision Records under [/docs](/docs) folder

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Request samples

`GET /` - Health check

```
200

Ok!
```

`POST /inventory` - To add or update item inventory in stock right now. Inventory accepts a list of one or more items. If the itemID already exists, the itemName and inventory will be updated. 

```
[ { "itemID": 12345,  "itemName": "Fancy Dress", "quantity": 10 } ]
```

```
201

{
  "statusCode" : 201,
  "message": "Ok"
}
```

`POST /show/[show_ID]/buy_item/[item_ID]` - To buy a single item during a show.
It will make sure there is sufficient inventory and, if so, it will deduct one item. It will record the item as being sold on show show_ID and return a success code. If there isn't sufficient inventory, it will return an 409 http status code and a message indicating so.

```
201

{
  "statusCode" : 201,
  "message": "Ok"
}
```
```
409

{
  "statusCode" : 409,
  "error": "Item is no longer in stock"
}
```

`GET /show/[show_ID]/sold_items/[item_id]` - Return the name and quantity of item_id sold by show_ID.

```
200

{ "itemID": 12345,  "itemName": "Fancy Dress", "quantity_sold": 4}
```

`GET /show/[show_ID]` - Return a list of all items sold by show_id with the same information.

```
200

[ { "itemID": 12345,  "itemName": "Fancy Dress", "quantity_sold": 4} ]
```