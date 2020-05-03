# The API Server

This data server supports the Angular Labs.

It is mostly a RESTful API data server but it also passes through requests to Angular for the pages themselves.

## Getting started
1. Install the libraries
```
npm install
```
2. Freshen the data (optional)
```
node --experimental-modules setOrderDates
```
3. Start the server
```
npm run server
```


## The database itself
The actual database is in a flat JSON file called database.json. Feel free to edit it directly if you want to.

## To freshen the data
We have a Node script that will make the data appear more current. It simply sets all the order dates to within the last year, spread out evenly.

