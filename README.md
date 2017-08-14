# Angular Labs
Labs for the Angular Courses

## Getting started
1. [Prerequisites](#prerequisites)
1. [To install on your machine](#to-install-on-your-machine)
1. [Lab instructions](#lab-instructions)
1. [To run the labs](#to-run-the-labs)
1. [To run a solution](#to-run-a-solution)
1. [About the warehouse](#about-the-warehouse)
1. [RESTful APIs](#restful-apis)

## Prerequisites
There are only four things needed for setup and to run the labs:
* bash 

You'll know you have it if you can ...

```
bash --version
```

and you get a version.

* node ^6.7 and npm

You'll know you have it if you can ...

```
node --version
```

and you get a version greater than 6.7.0;

* The Angular CLI

You'll know you have it if you can ...

```
ng --version
```

and you get a version.

* mongoDB ^3
You'll know you have it if you can ...

```
mongod --version
```

and you get a version greater than 3.


## To install on your machine

To setup, look in the setup folder. Run these commands:

```
installLab.bash
```

## Lab instructions

Each lab's instructions are located in the instructions folder. 


## To run the lab site
```
cd warehouse
npm start
```
This will compile the app and begin serving it.
Point your browser to http://localhost:4200

## To run the solutions
Copy all of the files from the solution folder to the /warehouse folder and follow the instructions above to run it.

# About the warehouse
We have products, locations, orders, and customers. They are stored in collections (ie. tables) in a mongo database.

## Orders
Have a status:
* 0 - Ready to pick, pack, and ship
* 1 - Shipped
* 2 - Has problem(s) that a supervisor should fix

## Locations
LocationID is a string with this format: AASHB
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
