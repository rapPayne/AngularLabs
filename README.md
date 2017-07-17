# Angular Labs
Labs for the Angular Courses

## Getting started
1. Prerequisites
1. To install on your machine
1. Lab instructions
1. To run the labs
1. To run a solution

## Prerequisites
Needed for setup and to run the labs
* bash 

You'll know you have it if you can ...

```
bash --version
```

and you get a version.
To install
* node and npm
* mongoDB


Each lab's instructions are located in instructions 

## To install on your machine

To setup, look in the setup folder. Run these commands:
installLab.bash

## To run the lab site
cd warehouse
npm start
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


# RESTful APIs
## Orders
* GET /api/orders/readyToShip - Get a list of orders that are ready to ship (status=0 means "ready to ship". status=1 means "shipped")

# To get the site ready
1. Restore the HTML from each of the four component HTML files.
1. Save them in setup/assets/html
1. Remove this section from README
