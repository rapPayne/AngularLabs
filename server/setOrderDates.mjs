import * as fs from 'fs';

// Slurp the whole database in memory.
const data = fs.readFileSync('database.json');
const db = JSON.parse(data);

// Set the ship date for every order to be within the last year, spread evenly, and
// set the status to be "shipped" for all orders older than 7 days ago.
const countOfOrders = db.orders.length;
const millisecondsInAYear = 1000*60*60*24*365;
const millisecondsBetweenOrders = millisecondsInAYear/countOfOrders;
const now = new Date();
const daysAgo = now - 1000*60*60*24*7;
db.orders.forEach((order,i) => {
  const millisecondsToSubtract = millisecondsInAYear - (millisecondsBetweenOrders * i)
  order.orderDate = new Date(now - millisecondsToSubtract);
  order.status = order.orderDate < daysAgo ? 1 : 0;  // Set status to shipped (status=1) for all orders > about one week ago. Not shipped is status 0.
})

// dump the whole database back out
const newDbString = JSON.stringify(db, null, 2);
fs.writeFileSync("database.json", newDbString);
