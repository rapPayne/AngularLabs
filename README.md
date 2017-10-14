# Angular Labs
Labs for the Angular Courses

## Getting started
1. [Setup](#setup)
1. [Lab instructions](#lab-instructions)
1. [To run a solution](#to-run-a-solution)
1. [About the warehouse](#about-the-warehouse)
1. [RESTful APIs](#restful-apis)
1. [Instructor notes](#instructor-notes)

## Setup
There are only four things needed for setup and to run the labs:
1. bash
1. node ^6.7 with npm
1. The Angular cli (ng) ^1.3
1. mongoDB ^3.2

If you want some installation help including verification steps, go [here](setup/Angular%20Class%20Setup.pdf) .

## Lab instructions

Each lab's instructions are located in the [instructions](instructions) folder. 

## To run a solution
Each lab can be run without copying any files. Just open a bash shell, cd to the lab solution folder and type in 
```
npm install
npm start
```
If you want to use a solution from a prior lab as a starter, either copy the whole folder to a new one or simply begin editing the code in that folder.

# About the warehouse
We have products, locations, orders, and customers. They are stored in collections (aka tables) in a mongo database.

## Orders
Have a status:

Status | Meaning
-------|-----------
0      | Ready to pick, pack, and ship
1      | Shipped
2      | Has problem(s) that a supervisor should fix

## Locations
LocationID is a string with this format: AASHB where ...
* AA- Aisle - 01-99
* S - Slot - A-Z
* H - Shelf - 1-9
* B - Bin - A-Z

For example, 
01A1A = Aisle 1, Slot A, Shelf 1, Bin A

Only one product will be stored in a location so locationID is a primary key

# RESTful APIs

## Orders
* GET /api/orders/readyToShip - Get a list of orders that are ready to ship (status=0 means "ready to ship". status=1 means "shipped")
* GET /api/orders/ - Get a list of all orders
* GET /api/orders/*:id* - Get a single order
* PATCH /api/orders/*:id*/markAsShipped - Mark the order as "shipped" (status=1)
* PATCH /api/orders/*:id*/markAsProblem - Mark the order as "has a problem" (status=2)
* POST /api/orders/ - Create a new order. New order record is in the body.
* PUT /api/orders/*:id* - Replace the order with what is in the body.
* DELETE /api/orders/*:id* - Delete the order
* PATCH /api/orders/*:id* - Update the order with the values in the body.

## Products
* GET /api/products - All products
* GET /api/products/*:id* - A single product with that id (ids are between 1 and about 77 currently)
* GET /api/products/featured - All featured products (Those we want to promote. Have featured==true)
* GET /api/products?search=<searchString> - All products with searchString as part of the name.
* PUT /api/products - Insert a new product into the database. The product's fields are in the body.
* PATCH /api/products/*:id* - Update the product. Updated fields are in the body.
* DELETE /api/products/*:id* - Delete the product

## Customers
* GET /api/customers - All customers
* POST /api/customers - Create a new customer
* GET /api/customers/*:id* - A single customer. (ids are between 1 and 78)
* PUT /api/customers/*:id* - Replace a single customer
* PATCH /api/customers/*:id* - Update a single customer
* DELETE /api/customers/*:id* - Delete a single customer

## Categories
* GET /api/categories - All categories
* GET /api/categories/*:id* - Read one category

## Locations
* GET /api/locations - All locations
* POST /api/locations - Creaes a new location
* GET /api/locations/*:id* - Read location for locationID *id*
* PUT /api/locations/*:id* - Replace location at locationID *id*
* PATCH /api/locations/*:id* - Update location at locationID *id*
* DELETE /api/locations/*:id* - Delete location ID *id*
* GET /api/locations/forProduct/*:id* - Get all locations where product *id* can be found.

# Instructor Notes

Things that may be helpful to instructors teaching this course.

## Approximate timing

### Monday

* Intro
* Intro Lab
* Angular CLI
* Angular CLI Lab
* Lunch
* Big Picture
* Big Picture Lab
* TypeScript

### Tuesday

* TypeScript Lab
* Components Intro
* Components Intro Lab
* Lunch
* Property Binding
* Property Binding Lab
* Built-in Directives

### Wednesday

* Built-in Directives Lab
* Routing
* Routing Lab
* Lunch
* Event Binding
* Event Binding Lab
* Forms and 2-way Binding
* Forms and 2-way Binding Lab

### Thursday

* Composition with Components
* Composition with Components Lab
* Ajax
* Lunch
* Ajax Lab
* Observables
* Observables Lab

### Friday

* Services
* Services Lab
* Pipes
* Lunch
* Pipes Lab
* Modules
* Modules Lab

## Thanks
* Noel Bergman - Solutions to some labs and proofreading